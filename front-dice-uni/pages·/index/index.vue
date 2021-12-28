<template>
	<view class="content">
		<view class="">
			menu list
		</view>
		<navigator 
			url="/pages/test/getUserInfo/getUserInfo" 
			class="nav-bar"> <button type="default">获取用户信息</button></navigator>
			
		<navigator
			url="/pages/test/login/login" 
			class="nav-bar"> <button type="default">登录</button></navigator>
		<navigator
			url="/pages/test/login/login" 
			class="nav-bar"> <button type="default">地图</button></navigator>
		<navigator
			url="/pages/test/shake/shake" 
			class="nav-bar"> <button type="default">摇一摇</button></navigator>	
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style>
	.nav-bar{
		padding:10px 20px;
	}
</style>
