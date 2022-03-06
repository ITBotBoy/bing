const axios = require('axios');
const moment = require('moment');
const jsonfile = require('jsonfile');

const getData = async () => {
    let {imgArr} = global;

    if (!imgArr) {
        const {imgs} = await jsonfile.readFileSync('bing_data/cacheData.json')
        // 请求每个月的数据放进缓存，进行内存限制
        imgArr = new Proxy(imgs.sort((a, b) => a.date - b.date), {
            get: (target, key) => (target[key] || target.find(({date}) => `${date}` === key) || undefined),
            set: (target, key, val) => {
                const fileName=moment().format("YYYYMM")
                target[key] = val;
                if (!isNaN(key / 1)) {
                    const nowStr = moment().format('YYYY-MM-DD HH:mm:ss');
                    const monthData=target.filter(i=>String(i.date).includes(fileName))
                    //数据每月保存
                    jsonfile.writeFileSync('bing_data/' + fileName + '.json', {imgs: monthData, nowStr});
                    // , {spaces: 4, EOL: '\r\n'}，内存会变大，文件分割
                    jsonfile.writeFileSync('bing_data/cacheData.json', {imgs: target, date: nowStr});
                }
                // 表示成功
                return true;
            }
        });

        imgArr.forEach((o, i) => {
            if (i !== 0) {
                imgArr[i - 1].next = o.date;
                imgArr[i].prev = imgArr[i - 1].date;
            }
        });
        global.imgArr = imgArr;
    }

    return imgArr
}
const initData =  async () => {
    const cacheData=[]
    const nowStr = moment().format('YYYY-MM-DD HH:mm:ss');
    const {imgs} = await jsonfile.readFileSync('bing_data/cacheData.json')
    imgs.sort((a, b) => a.date - b.date).map((item)=>{
        const month=String(item.date).slice(0,6)
        const index = cacheData.findIndex(data=>data && data[0]===month)
        if(index>-1){
            cacheData[index][1].push(item)
        }else {
            cacheData.push([month,[item]])
        }
    })
    cacheData.map(async ([key,value])=>{
        await jsonfile.writeFileSync('bing_data/' + key + '.json', {imgs: value, nowStr});
    })
}
const updateData = async (init) => {
    const imgArr = await getData();
    let data={images:[]};
    try {
        const res = await axios('http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8&nc=1553500237029&pid=hp&mkt=zh-CN');
        data=res.data
    }catch {
        // 12小时再次抓取
        setTimeout(() => {
            updateData()
        }, 1000 * 60 * 60 * 12)
        return false
    }
    const now = moment();
    const nowYMD = now.format('YYYY-MM-DD 00:00:00');
    const tomorrow = moment(nowYMD).add(1, 'd');
    const nowStr = now.format('YYYY-MM-DD HH:mm:ss');
    global.tomorrow = tomorrow;
    // console.log(data);


    let timeout = init ? (tomorrow - now + 5000) : 5000;
    data.images.sort((a, b) => a.enddate - b.enddate)
        .forEach((img) => {
            if (!imgArr[img.enddate]) {
                let i = imgArr.length;
                const prev = imgArr[i - 1];
                const newImg = {
                    date: Number(img.enddate),
                    url: img.url,
                    urlbase: img.urlbase,
                    cp: img.copyright,
                    cpl: img.copyrightlink,
                    createdAt: nowStr,
                    updatedAt: nowStr,
                };
                if (prev) {
                    newImg.prev = prev.date;
                    prev.next = newImg.date;
                }

                imgArr.push(newImg);
            }
        });

    setTimeout(() => {
        updateData()
    }, timeout)
}

module.exports = {
    initData,
    updateData
};
