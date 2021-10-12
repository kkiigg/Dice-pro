/*
 * @Author: zw
 * @Date: 2021-10-12 19:01:20
 * @LastEditors: zw
 * @LastEditTime: 2021-10-12 19:04:17
 * @Description: 
 */
const randomCharList="abcdefghijklmnopqrstuvwxyz1234567890"

export function createRandomId(length){
    // for(){

    // }
    
}

function getRandomChar(){
  return randomCharList[parseInt(String(Math.random()*randomCharList.length))]
}