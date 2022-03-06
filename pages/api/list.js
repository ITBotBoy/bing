const moment = require('moment');
const jsonfile = require('jsonfile')
const sortBy=require('lodash/sortBy')
const distractList = async (req, res) => {
  let { date = 0,count = 0 ,type = 1} = req.query,monthData;
  //默认列表 type1为列表
  if(!date) return res.json({data:[]})
  const { cacheMaxList } = global;
  //最多存储最近一年的
  //  28
  /*if(Number(date)){
      console.log(date)
      date=String(date).slice(0,6)
      monthData=imgArr.filter(i=>String(i.date).includes(date))
      //今天距离月初的天数
      // count=new Date(date.slice(4), date.slice(2), 0).getDate()
  }else {
      const now = moment().format('YYYYMM');
      monthData=imgArr.filter(i=>String(i.date).includes(now))
      if(monthData.length<28){
          const last=moment().subtract(1, 'month').format('YYYYMM')
          const lastMonthData=imgArr.filter(i=>String(i.date).includes(last))
          console.log(imgArr.length,'lastMonthData')
          monthData=monthData.concat(lastMonthData)
      }
  }*/
    //读取后一个月的数据保证始终超过10条
    let currentMonthData=[],lastMonthData=[];
    const currentFileName = moment(/\d{6,}/.test(date)? date:new Date().getTime()).format('YYYYMM')
    const lastFileName = moment(/\d{6,}/.test(date)? date:new Date().getTime()).subtract(1,'months').format('YYYYMM');
    try {
        const {imgs:currentMonthImgs} = await jsonfile.readFileSync(`bing_data/${currentFileName}.json`)
        const {imgs:lastMonthImgs} = await jsonfile.readFileSync(`bing_data/${lastFileName}.json`)
        currentMonthData = currentMonthImgs
        lastMonthData = lastMonthImgs
    }catch (e) {

    }
    const data=[...currentMonthData,...lastMonthData]
    let startIndex = data.findIndex(({ date: d }) => date === `${d}`);
    (startIndex < 0) && (startIndex = data.length-1);
  res.json({
    data: sortBy(data,'date').slice(Math.max(0, startIndex - (count-1)), startIndex + 1).reverse()
  })
}

export default (req, res) => {
    let { date = 0,count = 0 } = req.query,monthData;
    const { imgArr } = global;
    let startIndex = imgArr.findIndex(({ date: d }) => date === `${d}`);
    (startIndex < 0) && (startIndex = imgArr.length-1);
    res.json({
        data: [...imgArr.slice(Math.max(0, startIndex - (count-1)), startIndex + 1)].reverse()
    })
}