/*
 * @Author: zw
 * @Date: 2021-10-12 19:01:20
 * @LastEditors: zw
 * @LastEditTime: 2021-10-12 19:04:17
 * @Description: 
 */
const randomCharList="abcdefghijklmnopqrstuvwxyz1234567890"

export function createRandomId(length:number=16){
  let res:string=""
  for(let i=0;i<length-6;i++){
    res+=getRandomChar()
  }

  res+=getDateStr()

  return res
}

function padTwo(str:string){
  return str.padStart(2,'0')
}
function getRandomChar(){
  return randomCharList[parseInt(String(Math.random()*randomCharList.length))]
}
export function getDateStr(){
  let date=new Date() 
  let M=String(date.getMonth()+1)
  let d=String(date.getDate())
  let h=String(date.getHours())
  let m=String(date.getMinutes())
  let s=String(date.getSeconds())
  return padTwo(M) +padTwo(d)+padTwo(h)+padTwo(m)+padTwo(s)
}
