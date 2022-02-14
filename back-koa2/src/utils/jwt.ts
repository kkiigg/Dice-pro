//jwt 验证 @
const jwt=require('jsonwebtoken');

const privateKey="test20201116";

// export default {
	export function createToken(username:string){
		//签名内容自己定义
		return jwt.sign({
			username,
			time:new Date().getTime()
		},privateKey,{
			expiresIn:24*60*60 //过期时间,以秒为单位
		})
	}
	export function checkToken(_token:string){
		return new Promise(function(resolve,reject){
			jwt.verify(_token, privateKey, function(err:any, decoded:any) {
				if (err) {
				  console.log(err);
				  reject(err);
				}
				resolve(decoded) 
			});
			
		})
	}
