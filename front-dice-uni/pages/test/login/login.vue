<template>
	<view>
		<button @click="loginHandler">login</button>
	</view>
</template>

<script>
	import request from '../../../plugins/request';

	export default {
		data() {
			return {
				
			}
		},
		methods: {
			loginHandler(){
				uni.login({
				  provider: 'weixin',
				  success: async function (loginRes) {
				    console.log(loginRes);
					const code=loginRes.code;
					console.log(code); //登录用
					
					request({
						url:"/getWxSessionKey",
						data:{
							code
						},
						method: 'POST',
						success(data){
							console.log(data)
						},
						fail(e){
							console.log(e)
						}
					})
					
				    
				  }
				});
			}
		}
	}
</script>

<style>

</style>
