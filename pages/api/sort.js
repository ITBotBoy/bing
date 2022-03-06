const jsonfile = require('jsonfile')
const moment = require('moment');
const {cloneDeep,debounce}= require('lodash')
const delayFun=debounce(()=>{
    const nowStr = moment().format('YYYY-MM-DD HH:mm:ss');
    global.sortInfo['nowStr']=nowStr
    jsonfile.writeFileSync('bing_data/sortData.json',global.sortInfo)
},1000 * 60)
export default async (req, res) => {
    let { k = 0 ,date} = req.query;
    if(!global.sortInfo){
        try {
            global.sortInfo = await jsonfile.readFileSync('bing_data/sortData.json')
        }catch (e) {
            global.sortInfo={}
        }
        return res.json({})
    }
    const sortInfo=global.sortInfo
    if(date && k){
        //延迟一小时执行
        if(!sortInfo[date]){
            sortInfo[date]={}
            sortInfo[date][k]=1
        }else {
            sortInfo[date][k]=(sortInfo[date][k] || 0)+1
        }
        global.sortInfo=sortInfo
        delayFun()
        res.json(sortInfo[date])
    }else {
        res.json(sortInfo)
    }
}
