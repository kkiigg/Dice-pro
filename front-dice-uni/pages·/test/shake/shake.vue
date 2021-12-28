<template>
	<view class="box">
		<view class="shake-flag" v-show="isShaking">{{isShaking}}</view>
		{{count}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShaking:false,
				count:0,
			}
		},
		methods: {
			onShake(){
				let that=this,
					timer=null
				uni.onAccelerometerChange(function(e) {
					console.log(e.x)
					console.log(e.y)
					console.log(e.z)
					let sX=Math.abs(e.x),
						sY=Math.abs(e.y)
					if (sX > 0.4 && sY > 0.4 ) {
						clearTimeout(timer)
						that.isShaking = true
						// uni.vibrate({
						//     success: function () {
						//         console.log('success');
						//     }
						// });
						that.count++;
						timer=setTimeout(function() {
							that.isShaking = false
						}, 800)
					}
	
				})
				
			}
		},
		onShow(){
			this.onShake()
		}
	}
</script>

<style>
.shake-flag{
	widows: 200px;
	height:200px;
	background: #4CD964;
	border-radius:10px ;
}
</style>
