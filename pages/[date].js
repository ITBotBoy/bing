import {useRouter} from "next/router";
import {useState, useEffect, useRef} from 'react';
import {message, Spin} from "antd";
import moment from "moment";
import '../styles/[date].scss';
import DownDialog from "../components/downDialog";
import Error from 'next/error';
import maxBy from 'lodash/maxBy'
import minBy from 'lodash/minBy'
import axios from "axios";
import throttle from "lodash/throttle";
import Head from "../components/Head";
import processHTML from "next/dist/next-server/lib/post-process";
// import axios from "axios";
// import throttle from "lodash/throttle";
export async function getServerSideProps(context) {
    const {imgArr, tomorrow} = global;
    const {date} = context.query;
    let key = date;
    const minDate=minBy(imgArr,'date')
    const maxDate=maxBy(imgArr,'date')
    if (date === 'random') {
        const index = Math.floor(Math.random() * imgArr.length);
        key = imgArr[index].date;
    }
    return {
        props: {
            minDate,
            maxDate,
            img: imgArr[key] || {},
            timeout: tomorrow - moment() + 5000,
            nextKey: tomorrow.format('YYYYMMDD')
        }
    }
}

export default function date({minDate,maxDate,img = {}, timeout, nextKey}) {
    const router = useRouter();

    const [loading, updateLoading] = useState(true);
    const [showBottom, updateShowBottom] = useState(true);
    const [now, updateNow] = useState(new Date().valueOf());
    const [downDialogVisible, setDownDialogVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [likeList, setLikeList] = useState([]);

    const checkMode = () => {
        if (window.innerWidth < 1024 || window.innerWidth < window.innerHeight) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }
    // likeFun
    const likeFun = (data) => {
        let localLikeList=window.localStorage.getItem('localLikeList')
        if(!likeList.length && localLikeList){
            setLikeList(JSON.parse(localLikeList))
        }
        if(data){
            localLikeList=localLikeList?JSON.parse(localLikeList):[]
            if(!localLikeList.includes(data)){
                axios(`/api/sort?date=${data}&k=likeCount`)
                    .then(res => {
                        if(res.data.likeCount){
                            localLikeList.push(data)
                            setLikeList(localLikeList)
                            window.localStorage.setItem('localLikeList',JSON.stringify(localLikeList))
                        }
                    })
            }
        }
    }
    const throttleLikeFun=throttle((data)=>likeFun(data),1500)
    const downloadFun = (data) => {
        if(data){
            axios(`/api/sort?date=${data}&k=downloadCount`)
        }
    }
    // did mount
    const loadingImg = useRef();
    useEffect(() => {
        likeFun()
        // 图片加载完成就取消 loading
        if (loadingImg.current && loadingImg.current.complete) {
            updateLoading(false);
        }
        checkMode();
        window.onkeyup = ({keyCode}) => {
            switch (keyCode) {
                case 32:
                    return window.location = `/random`;
                    /*const date = Math.floor(Math.random() * (maxDate-minDate))+minDate;
                    changePosition(date);*/
                case 37:
                case 39:
                    changePosition({37: 'prev', 39: 'next'}[keyCode]);
                    break;
                default:
                    break;
            }
        }
        window.onresize = checkMode;

        setTimeout(() => {
            !img.next && (img.next = nextKey);
        }, timeout)
    }, []);
    // 前后切换
    const changePosition = (key) => {
        if (!img[key]) {
            return message.warning({
                prev: '没有更早的辣！',
                next: '已经是最新的辣！',
            }[key])
        }
        updateLoading(true);
        window.location = `/${img[key]}`;
    }

    // 移动鼠标，显示底下区域
    const onMouseMove = () => {
        updateShowBottom(true);
        updateNow(new Date().valueOf())
    }
    useEffect(
        () => {
            const tick = setTimeout(() => updateShowBottom(false), 3500);
            return () => {
                clearTimeout(tick);
            };
        },
        [now]
    );

    const imgDate = moment(String(img.date), 'YYYYMMDD');

    return img.date ? (
        <Spin spinning={loading} size="large">
            <Head></Head>
            <div className={`detail-page ${isMobile && 'mobile-mode'}`} onMouseMove={onMouseMove}>
                <img className="loading-img" ref={loadingImg}
                     src={`//cn.bing.com${img.urlbase}_${isMobile ? '768x1280' : '1920x1080'}.jpg`}
                     onLoad={() => updateLoading(false)}/>
                <div
                    className="img-content-box"
                    style={{backgroundImage: `url(//cn.bing.com${img.urlbase}_${isMobile ? '768x1280' : '1920x1080'}.jpg)`}}
                >
                    {
                        [{key: 'prev', arrow: 'left'}, {key: 'next', arrow: 'right'}]
                            .map(({key, arrow}) => (
                                img[key] ? (
                                    <div key={`page-${arrow}`}
                                         className={`page-icon icon-${arrow} ${(showBottom || isMobile) && 'actived'}`}
                                         onClick={() => changePosition(key)}>
                                        <i className={`iconfont icon-arrow-${arrow}`}/>
                                    </div>
                                ) : ''
                            ))
                    }

                    <div className="img-info">
                        <div className="img-date">
                            <div className="img-date-year">{imgDate.format('YY')}</div>
                            <div className="img-date-md">
                                <div>{imgDate.format('MM')}</div>
                                <div>{imgDate.format('DD')}</div>
                            </div>
                        </div>
                        <div className="img-cp">
                            <div className="img-cp-txt">{img.cp}</div>
                        </div>
                    </div>

                    <div className={`bottom-info ${showBottom && 'actived'}`}>
                        <div className="icon-list">
                            <a href="/" className="iconfont icon-bing"/>
                            <div className={(likeList.includes(img.date)?'icon-like-fill':'icon-xihuan')+' iconfont'} onClick={() => throttleLikeFun(img.date)}/>)
                            <div className="iconfont icon-download" onClick={() => setDownDialogVisible(true)}/>
                            <a href="/random" className="iconfont icon-touzi"/>
                            <a href="/about" className="iconfont icon-about"/>
                            <a href="https://github.com/renserve/bing" rel="external nofollow noopener noreferrer"
                               target="_blank" className="iconfont icon-github"/>
                        </div>
                    </div>
                </div>
            </div>

            <DownDialog downloadFun={downloadFun} isMobile={isMobile} visible={downDialogVisible} onHide={() => setDownDialogVisible(false)}
                        imgInfo={img}/>
        </Spin>
    ) : <Error statusCode={404}/>
}
