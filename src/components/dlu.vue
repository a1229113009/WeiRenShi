<template>
	<div class="dlu_min">
		<div class="dlu_top">
			<div class="dlu_top1">系统登录</div>
			<el-form>
				<el-input type="text" style="width: 350px;left: 5px;" v-model="input"></el-input>
				<el-input type="password" style="width: 350px;left: 5px;" v-model="input1"></el-input>
			</el-form>
			<el-checkbox v-model="checked" style="text-align: center;">记住密码</el-checkbox>
			<el-button type="primary" @click="addRoutes1" style="width: 350px;margin-left: 35px;">登录</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DluHeader',
		data() {
			return {
				input: 'admin',
				input1: '123',
				checked: true
			}
		},
		methods: {
			addRoutes1() {
				this.$router.push('/index')
			}
		}

	}
</script>

<style scoped>
	.dlu_min {
		width: 100%;
		height: 100%;
		margin: 180px auto;
	}
	
	.dlu_top {
		width: 420px;
		height: 370px;
		box-shadow: 0 0 25px #cac6c6;
		margin: 0 auto;
	}
	
	.dlu_top1 {
		width: 450px;
		height: 80px;
		line-height: 80px;
		text-align: center;
		font-size: 18px;
		font-weight: bold;
		color: #505458;
	}
	
	.el-input {
		width: 390px;
		margin-left: 30px;
		margin-top: 20px;
	}
	
	.el-checkbox {
		margin-left: 180px;
		margin-top: 25px;
	}
	
	.el-button {
		width: 390px;
		margin-left: 30px;
		margin-top: 40px;
	}
	
	.el-button a {
		text-decoration: none;
		color: #fff;
	}
</style>