export default (req, res) => {
  let { date = 0,count = 0 } = req.query;
  const { imgArr } = global;
  if(date){
      //今天距离月初的天数
      // count=new Date(date.slice(4), date.slice(2), 0).getDate()
  }
    let startIndex = imgArr.findIndex(({ date: d }) => date === `${d}`);
  (startIndex < 0) && (startIndex = imgArr.length-1);
  // console.log(startIndex - (count-1),'startIndex - (count-1))')
  res.json({
    data: [...imgArr.slice(Math.max(0, startIndex - (count-1)), startIndex + 1)].reverse(),
  })
}
