function printDate(){
    let today=new Date()
  return today.getDate()
}

function printMonth(){
    let today=new Date()
  return today.getMonth()
}








module.exports.currentDate=printDate
module.exports.currentMonth=printMonth