const moment = require('moment');
export default (req, res) => {
  let { date = 0,count = 0 } = req.query,monthData;
  const { imgArr } = global;
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
    let startIndex = imgArr.findIndex(({ date: d }) => date === `${d}`);
    (startIndex < 0) && (startIndex = imgArr.length-1);

  res.json({
    data: [...imgArr.slice(Math.max(0, startIndex - (count-1)), startIndex + 1)].reverse()
  })
}
