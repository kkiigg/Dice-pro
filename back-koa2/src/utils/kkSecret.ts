export function decode(psd:string,key:number){
	let strNumber=String(key)
	let sortStrNumber=strNumber.split('').sort(function(x,y){return x-y}).join('')
	let psdArr=psd.split('')
	for(let i=0;i<sortStrNumber.length;i++){
		console.log(sortStrNumber.charAt(i))
		psdArr.splice(sortStrNumber.charAt(i),1)
	}
	return psdArr.join('')
} 

function getSecretCode(psd:string,key:number){
	let strNumber=String(key)
	let sortStrNumber=strNumber.split('').sort(function(x,y){return y-x}).join('')

	let psdArr=psd.split('')
	console.log(psdArr)
	for(let i=0;i<sortStrNumber.length;i++){
		console.log(sortStrNumber.charAt(i))
		psdArr.splice(sortStrNumber.charAt(i),0,getRandomChar())
	}
	return psdArr.join('')
}
function getRandomChar(){
	let randomCharLSit="abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()"
	return randomCharLSit[parseInt(Math.random()*randomCharLSit.length)]
}