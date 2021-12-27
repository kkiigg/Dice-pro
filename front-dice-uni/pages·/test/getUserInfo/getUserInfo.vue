<template>
	<view>
		<button type="default" @click="getUserData">点击获取</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{
					
				}
			}
		},
		methods: {
			// getProvider(){
			// 	let that=this
			// 	uni.getProvider({
			// 		service:'oauth',
			// 		success(data){
			// 			//service :服务类型, 
			// 			//provider :返回的provider
			// 			console.log('data',data) //只针对微信
			// 			that.getUserData(data.provider)
			// 		},
			// 		fail(){
			// 			console.warn('%%获取失败')
			// 		},
			// 		complete(){
			// 			console.warn('%%执行完毕')
			// 		}
			// 	})
			// },
			getUserData(provider){
				//getUserInfo
				uni.getUserProfile({
					//provider, //string
					desc:'for test',
					lang:'zh_CN', // zh_TW |  en
					success(data){
						//userInfo,rawData,signature,encryptedData,iv,errMsg
						console.log(data)
					},
					fail(){
						console.warn('%%获取失败')
					},
					complete(){
						console.warn('%%执行完毕')
					}
				})
			}
		}
	}
</script>

<style>

</style>
