/*
 * @Author: zw
 * @Date: 2021-10-09 17:59:54
 * @LastEditors: zw
 * @LastEditTime: 2021-10-11 18:36:06
 * @Description: 
 */
export function decode(psd:string,key:number){
	let strNumber=String(key)
	let sortStrNumber=strNumber.split('').sort(function(x:any,y:any){return x-y}).join('')
	let psdArr=psd.split('')
	for(let i=0;i<sortStrNumber.length;i++){
		console.log(sortStrNumber.charAt(i))
		psdArr.splice(Number(sortStrNumber.charAt(i)),1)
	}
	return psdArr.join('')
} 

//目前是手动执行加密生成的秘钥
function getSecretCode(psd:string,key:number){
	let strNumber=String(key)
	let sortStrNumber=strNumber.split('').sort(function(x:any,y:any){return y-x}).join('')

	let psdArr=psd.split('')
	console.log(psdArr)
	for(let i=0;i<sortStrNumber.length;i++){
		console.log(sortStrNumber.charAt(i))
		psdArr.splice(Number(sortStrNumber.charAt(i)),0,getRandomChar())
	}
	return psdArr.join('')
}
function getRandomChar(){
	let randomCharLSit="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"
	return randomCharLSit[parseInt(String(Math.random()*randomCharLSit.length))]
}