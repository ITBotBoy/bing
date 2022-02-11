import axios from 'axios';
import {useState, useEffect, useRef} from 'react';
import '../styles/index.scss';
import moment from 'moment';
import Head from "../components/Head";
import DownDialog from "../components/downDialog";
import throttle from 'lodash/throttle';

import {Spin} from "antd";
/*export default class Page extends React.Component {
    componentDidMount () {
        likeFun()
    }
    render (){
        return PageFun()
    }
}*/
export default function() {
    const [downDialogVisible, setDownDialogVisible] = useState(false);
    const [list, updateList] = useState([]);
    const [img, updateImg] = useState({});
    const [nextDate, updateNextDate] = useState(0);
    const [loading, updateLoading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showTop, setShowTop] = useState(false);
    const [isEmpty, setEmpty] = useState(false);
    const [sortInfo, setSortInfo] = useState({});
    const [likeList, setLikeList] = useState([]);
    const checkMode = () => {
        if (window.innerWidth < 1024 || window.innerWidth < window.innerHeight) {
            setIsMobile(true);
            return true;
        }
        setIsMobile(false)
        return false;
    }
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
                            if(!sortInfo[data]){
                                sortInfo[data]={likeCount:0}
                            }
                            sortInfo[data].likeCount=res.data.likeCount
                            setSortInfo(sortInfo)
                            localLikeList.push(data)
                            setLikeList(localLikeList)
                            window.localStorage.setItem('localLikeList',JSON.stringify(localLikeList))
                        }
                    })
            }
        }
    }
    const throttleLikeFun=throttle((data)=>likeFun(data),1500)
    if(typeof window !== 'undefined' && window){
        likeFun()
    }
    const downloadFun = (data) => {
        if(data){
            axios(`/api/sort?date=${data}&k=downloadCount`)
                .then(res => {
                    if(res.data.likeCount){
                        if(!sortInfo[data]){
                            sortInfo[data]={downloadCount:0}
                        }
                        sortInfo[data].downloadCount=res.data.downloadCount
                        setSortInfo(sortInfo)
                    }
                })
        }
    }
    const queryList = (nextDate, isMobile) => {
        updateLoading(true);
        axios(`/api/list?date=${nextDate}&count=10`)
            .then(({data}) => {
                let count = 0;
                const maxCount = isMobile ? 0 : 2;
                data.data.forEach((item, i) => {
                    let span = 1;
                    //0 1 2
                    (count < maxCount) && maxCount && (span = Math.ceil(Math.random() * 2));
                    // 2,第9张换span  ;  1 最后一张span ;
                    ((maxCount-count) === (10 - i)) && maxCount && (span = 2);
                    // count=1 ; count=2 ;
                    span === 2 && (count += 1);
                    item.style = {
                        gridColumnStart: `span ${span}`,
                        gridRowStart: `span ${span}`,
                    }
                    item.dateStr = moment(item.date, 'YYYYMMDD').format('YY.MM.DD');
                    item.span = span;
                })
                const last = data.data.last()
                updateList([...list, ...data.data]);
                !last.prev && setEmpty(true);
                updateNextDate(last.prev);
                updateLoading(false);
            })
    }

    const $page = useRef();

    useEffect((e) => {
        window.onscroll = throttle(() => {
            if (loading || isEmpty) {
                return;
            }
            setShowTop(document.documentElement.scrollTop > 700);
            let scrollTop=document.documentElement.scrollTop;
            let clientHeight=document.documentElement.clientHeight;
            let pageHeight=$page.current.clientHeight;
            if (scrollTop && (clientHeight + scrollTop + 120 >pageHeight)) {
                queryList(nextDate, isMobile);
            }
        },100)
        window.onscroll();
    }, [nextDate, loading]);

    useEffect(() => {
        const isMobile = checkMode();
        Array.prototype.last = function () {
            return this[this.length - 1];
        }
        axios(`/api/sort`)
            .then(res => {
                setSortInfo(res.data)
            })
        queryList(nextDate, isMobile)
    }, [])
    return (
        <div className={`index-page ${isMobile && 'mobile-page'}`} ref={$page}>
            <Head></Head>
            <div className="img-list"
                 style={{
                     gridTemplateRows: isMobile ? `repeat(${list.length}, 75vw)` : `repeat(${parseInt(list.length / 10) * 4}, 19vw)`
                 }}>
                {
                    list.map((img) => (
                        <div
                            className="img-item"
                            style={img.style}
                            key={img.date}
                        >
                            <div className="cover">
                                <a className="iconfont icon-fangda actionBtn" href={`/${img.date}`}/>
                                <span className="text">{img.cp}</span>
                            </div>
                            <div className={`date-str size-${img.span}`}>{img.dateStr}</div>
                            <div className="img-bg"
                                 style={{backgroundImage: `url('//cn.bing.com${img.urlbase}_${false ? '768x1280' : '1024x768'}.jpg')`}}/>
                             <div className="handleButton">
                                 <span className={(likeList.includes(img.date)?'icon-like-fill':'icon-xihuan')+' iconfont'} onClick={() => {throttleLikeFun(img.date)}}>
                                     <span className="count">{sortInfo[img.date] && sortInfo[img.date].likeCount || 0}</span>
                                 </span>
                                 <span  onClick={() => {setDownDialogVisible(true);updateImg(img);}} className="iconfont icon-download">
                                    <span className="count">{sortInfo[img.date] && sortInfo[img.date].downloadCount || 0}</span>
                                 </span>
                             </div>
                        </div>
                    ))
                }
            </div>
            {isEmpty && <div className="empty-text">—— 到底啦 ——</div>}
            <div className="right-btn">
                <div className={`to-top iconfont icon-arrow-left ${!showTop && 'hide'}`}
                     onClick={() => window.scrollTo(0, 0)}/>
                <a className="iconfont icon-touzi" href='/random'/>
            </div>
            <DownDialog downloadFun={downloadFun} isMobile={isMobile} visible={downDialogVisible} onHide={() => {setDownDialogVisible(false);updateImg({});}}
                        imgInfo={img}/>
        </div>
    )
}
