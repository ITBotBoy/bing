const jsonfile = require('jsonfile')
const moment = require('moment');
let delayFun;
export default async (req, res) => {
    let { k = 0 ,date} = req.query;
    let sortInfo= global.sortInfo
    if(!sortInfo){
        sortInfo = await jsonfile.readFile('bing_data/sortData.json')
            .catch(() => ({}))
    }
    if(date && k){
        //延迟一小时执行
        if(!sortInfo[date]){
            sortInfo[date]={}
            sortInfo[date][k]=1
        }else {
            sortInfo[date][k]=(sortInfo[date][k] || 0)+1
        }
        delayFun && clearTimeout(delayFun);
        delayFun=setTimeout(()=>{
            delayFun=null
            const nowStr = moment().format('YYYY-MM-DD HH:mm:ss');
            sortInfo['nowStr']=nowStr
            jsonfile.writeFileSync('bing_data/sortData.json',sortInfo)
        },60*60*1000)
        global.sortInfo=sortInfo
        res.json(sortInfo[date])
    }else {
        res.json(sortInfo)
    }
}
