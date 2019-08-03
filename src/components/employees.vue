<template>
	<el-container>
		<el-header>
			<el-row :gutter="20">
				<el-col :span="20">
					<div class="grid-content bg-purple" style="color: white; font-size: 22px;">微人事</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content bg-purple" style="color: white; font-size: 14px;">
						<i class="el-icon-bell" style="font-size: 18px; color: #333333; margin-left: 110px;"></i><i style="padding-left: 30px;font-style:normal">系统管理员</i>
						<span style="display: flex; align-items: center; float: right;">
  					<i><img src="../../build/download.jpg" style="width: 40px;height: 40px;border-radius: 40px;margin-top: 10px; margin-right: 15px;"></i>
						</span>
					</div>
				</el-col>
			</el-row>
		</el-header>
		<el-container>
			<el-aside width="200px" style="height: 917px">
				<el-menu style="background-color: #ececec" :default-active="this.$route.path" router>
					<el-submenu index="1">
						<template slot="title"><i class="el-icon-message"></i>员工资料</template>
						<el-menu-item-group>
							<el-menu-item index="/jiben">基本资料</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-menu"></i>人事管理</template>
						<el-menu-item-group>
							<el-menu-item index="/employees">员工奖惩</el-menu-item>
							<el-menu-item index="/training">员工培训</el-menu-item>
							<el-menu-item index="2-3">员工调薪</el-menu-item>
							<el-menu-item index="2-4">员工调动</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-setting"></i>薪资管理</template>
						<el-menu-item-group>
							<el-menu-item index="/management">工资账套管理</el-menu-item>
							<el-menu-item index="/setting">员工账套设置</el-menu-item>
							<el-menu-item index="/scale">工资表管理</el-menu-item>
							<el-menu-item index="3-4">月末处理</el-menu-item>
							<el-menu-item index="3-5">工资表查询</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-printer"></i>统计管理</template>
						<el-menu-item-group>
							<el-menu-item index="4-1">综合信息统计</el-menu-item>
							<el-menu-item index="4-2">员工积分统计</el-menu-item>
							<el-menu-item index="4-3">人事信息统计</el-menu-item>
							<el-menu-item index="4-4">人事记录统计</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-goods"></i>系统管理</template>
						<el-menu-item-group>
							<el-menu-item index="/Information">基础信息设置</el-menu-item>
							<el-menu-item index="5-2">系统管理</el-menu-item>
							<el-menu-item index="5-3">操作日志管理</el-menu-item>
							<el-menu-item index="5-4">操作员管理</el-menu-item>
							<el-menu-item index="5-5">备份恢复数据库</el-menu-item>
							<el-menu-item index="5-6">初始化数据库</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>
				<el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 10px;">
					<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item v-text="this.$router.currentRoute.name"></el-breadcrumb-item>
				</el-breadcrumb>
				<div>
					<h1>员工奖惩</h1></div>
			</el-main>
		</el-container>
	</el-container>
</template>

<style>
	body {
		margin: 0px;
	}
	
	.el-menu-item-group__title {
		padding: 0px;
	}
	
	li {
		text-align: left;
	}
	
	.el-input__inner {
		height: 27px;
	}
	
	.el-submenu__title {
		padding: 0 80px;
	}
	
	table {
		font-size: 12px;
	}
	
	.el-header,
	.el-footer {
		background-color: #20a0ff;
		color: #333;
		align-items: center;
		line-height: 60px;
	}
	
	.el-aside {
		background-color: #ececec;
		color: #333;
		text-align: center;
		line-height: 200px;
		/*height: 100rem;*/
	}
	
	.el-main {
		background-color: #ffffff;
		color: #333;
		text-align: center;
		line-height: 30px;
	}
	
	body>.el-container {
		margin-bottom: 40px;
	}
	
	.el-container:nth-child(5) .el-aside,
	.el-container:nth-child(6) .el-aside {
		line-height: 260px;
	}
	
	.el-container:nth-child(7) .el-aside {
		line-height: 320px;
	}
</style>

<script>
	export default {
		name: 'employees'
	}
</script>