// const BASE_URL="http://localhost:3000"
const BASE_URL="http://localhost:3030"

export default function({url,method='GET',data={},success,fail}){
	console.log('url-->',BASE_URL+url)
	uni.request({
		url:BASE_URL+url,
		data,
		method,
		header:{
			"Access-Control-Allow-Headers":"*", 
				
		},
		success(data){
			if(success){
				console.log(data)
			}
		},
		fail(e){
			if(fail){
				console.log('error is =>',e)
			}
		}
	})
}