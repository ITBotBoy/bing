import {useEffect, useState, useRef} from 'react';
import {Modal, Radio, Spin, Select, Button, message} from 'antd';
import "../styles/downDialog.scss";
import download from "../util/download";
import axios from "axios";
import throttle from 'lodash/throttle';
const {Option} = Select;

const DownDialog = ({isMobile, visible, imgInfo, onHide,downloadFun}) => {
    const [size, setSize] = useState('1920x1080');
    const [imgLoading, setImgLoading] = useState(true);
    const downLink = useRef();

    const sizeMap = [
        [
            '1920x1200',
            '1920x1080',
            '1366x768',
            '1280x768',
            '1024x768',
        ],
        [
            '800x600',
            '800x480',
            '768x1280',
            '720x1280',
            '640x480',
            '480x800',
            '400x240',
            '320x240',
            '240x320'
        ]
    ]

    const updateSize = (val) => {
        window.localStorage.setItem('bing_down_size', val);
        setImgLoading(true);
        setSize(val);
    }

    const onClickDown = () => {
        const {urlbase, date} = imgInfo;
        download(`//cn.bing.com${urlbase}_${size}.jpg`, `bing_${date}_${size}.jpg`);
        downloadFun(date)
        message.info('加入下载！');
    }
    const throttleOnClickDown = throttle(()=>onClickDown(),3000)
    useEffect(() => {
        let size = window.localStorage.getItem('bing_down_size') || '1920x1080'
        if (isMobile) {
            size = '768x1280';
        }
        setSize(size);
    }, [isMobile])

    const downImg = useRef();
    useEffect(() => {
        if (downImg && downImg.current && downImg.current.complete) {
            setImgLoading(false);
        }
    }, [imgInfo])

    return (
        <Modal
            visible={visible}
            onClose={onHide}
            onCancel={onHide}
            footer={null}
            wrapClassName={`down-dialog mode-${isMobile && 'mobile'}`}
        >
            <div className="down-dialog-content">
                {imgInfo && (
                    <div>
                        <Spin spinning={imgLoading}>
                            <img
                                ref={downImg}
                                onLoad={() => setImgLoading(false)}
                                className="down-img"
                                src={`//cn.bing.com${imgInfo.urlbase}_${size}.jpg`}
                            />
                        </Spin>

                        {
                            isMobile ? (
                                <div className="select-size-container">
                                    <Select value={size} onChange={(v) => updateSize(v)}>
                                        {
                                            sizeMap.map((arr, i) => (
                                                arr.map((size) => (
                                                    <Option key={`size-${size}`} value={size}>{size}</Option>
                                                ))
                                            ))
                                        }
                                    </Select>
                                </div>
                            ) : (
                                <div className="select-size-container">
                                    {sizeMap.map((arr, i) => (
                                        <div className="size-row" key={`size-type-${i}`}>
                                            <i className={`iconfont type-icon icon-${['pc', 'mobile'][i]} ${arr.indexOf(size) > -1 && 'actived'}`}/>
                                            <Radio.Group value={size} onChange={(e) => updateSize(e.target.value)}>
                                                {arr.map(size => (
                                                    <Radio.Button key={`${i}-${size}`}
                                                                  value={size}>{size}</Radio.Button>
                                                ))}
                                            </Radio.Group>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                        <Button
                            type="primary"
                            className="down-icon"
                            onClick={() => throttleOnClickDown()}
                        >
                            <i className="iconfont icon-download"/>
                            {isMobile ? '' : '下载'}
                        </Button>
                    </div>
                )}
                <a ref={downLink} href={`//cn.bing.com${imgInfo.urlbase}_${size}.jpg`}
                   download={`bing_${imgInfo.date}_${size}.jpg`}/>
            </div>
        </Modal>
    )
}

export default DownDialog;
