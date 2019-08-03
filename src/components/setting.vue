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
				<el-table :data="tableData" border style="width: 100%">
					<el-table-column type="selection" width="55">
					</el-table-column>
					<el-table-column prop="name" label="姓名" width="110">
					</el-table-column>
					<el-table-column prop="city" label="工号" width="110">
					</el-table-column>
					<el-table-column prop="mail" label="电子邮件" width="200">
					</el-table-column>
					<el-table-column prop="phone" label="电话号码" width="120">
					</el-table-column>
					<el-table-column prop="departments" label="所属部门" width="110">
					</el-table-column>
					<el-table-column prop="position" label="工资账套" width="486">
						<template slot-scope="scope">
							<el-button type="primary" plain size="small" style="padding: 3px 4px;">人事部工资账套</el-button>
						</template>
					</el-table-column>
					<el-table-column label="操作" width="487">
						<template slot-scope="scope">
							<el-button type="danger" size="small" >修改账套</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div>
					<el-pagination background layout="prev, pager, next" :total="1000" style="float: right; padding-top: 10px;">
					</el-pagination>
				</div>
			</el-main>
		</el-container>
	</el-container>
</template>

<style>
	body {
		margin: 0px;
	}
	.el-table .cell {
		text-align:center;
	}
	.el-table th>.cell {
		text-align:center;
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
		name: 'setting',
		methods: {
			handleClick(row) {
				console.log(row);
			}
		},
		data() {
			return {
				tableData: [{
					date: '1990-01-01',
					name: '江南一点雨',
					sex: '男',
					city: '00000001',
					address: '610122853601014578',
					zip: '已婚',
					nation: '汉族',
					nativeplace: '陕西',
					political: '普通公民',
					mail: 'laowang@qq.com',
					phone: '18565558897',
					contact: '深圳市南山区',
					departments: '总办',
					position: '技术总监',
					title: '教授',
					employment: '劳务合同',
					entry: '2018-01-01',
					correction: '2018-04-01',
					contract: '2018-01-01',
					deadline: '2020-01-01',
					period: '2年',
					educational: '本科'
				}, {
					date: '1989-02-01',
					name: '陈静',
					sex: '女',
					city: '00000002',
					address: '610122145601011256',
					zip: '未婚',
					nation: '汉族',
					nativeplace: '海南',
					political: '普通公民',
					mail: 'laowang@qq.com',
					phone: '18565558897',
					contact: '深圳市南山区',
					departments: '财务部',
					position: '技术总监',
					title: '教授',
					employment: '劳务合同',
					entry: '2018-01-01',
					correction: '2018-04-01',
					contract: '2018-01-01',
					deadline: '2020-01-01',
					period: '2年',
					educational: '本科'
				}, {
					date: '1993-03-04',
					name: '赵琳浩',
					sex: '男',
					city: '00000003',
					address: '610122934501011216',
					zip: '已婚',
					nation: '汉族',
					nativeplace: '陕西',
					political: '普通公民',
					mail: 'laowang@qq.com',
					phone: '18565558897',
					contact: '深圳市南山区',
					departments: '技术部',
					position: '技术总监',
					title: '教授',
					employment: '劳务合同',
					entry: '2018-01-01',
					correction: '2018-04-01',
					contract: '2018-01-01',
					deadline: '2020-01-01',
					period: '2年',
					educational: '本科'
				}, {
					date: '1990-01-03',
					name: '鹿存亮',
					sex: '男',
					city: '00000004',
					address: '610122238601019874',
					zip: '已婚',
					nation: '汉族',
					nativeplace: '陕西',
					political: '普通公民',
					mail: 'laowang@qq.com',
					phone: '18565558897',
					contact: '深圳市南山区',
					departments: '运维部',
					position: '技术总监',
					title: '教授',
					employment: '劳务合同',
					entry: '2018-01-01',
					correction: '2018-04-01',
					contract: '2018-01-01',
					deadline: '2020-01-01',
					period: '2年',
					educational: '本科'
				}]
			}
		}
	}
</script>