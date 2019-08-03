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
				<el-input placeholder="通过员工名搜索员工,记得回车哦..." style="width: 300px;float: left;height: 47px;font-size: 11px;"></el-input>
				<el-button type="primary" icon="el-icon-search" style="float: left;font-size: 11px;margin-left: 10px" size="small">搜索</el-button>
				<el-button type="primary" icon="el-icon-sort" style="float: left;font-size: 11px;margin-left: 10px" size="small">高级搜索</el-button>
				<el-button type="primary" icon="el-icon-plus" style="float: right;font-size: 11px;margin-left: 15px" size="small">添加员工</el-button>
				<el-button type="success" icon="el-icon-download" style="float: right;font-size: 11px;margin-left: 5px" size="small">导出数据</el-button>
				<el-button type="success" icon="el-icon-upload2" style="float: right;font-size: 11px;" size="small">导入数据</el-button>
				<el-table :data="tableData" border style="width: 100%">
					<el-table-column type="selection" width="31">
					</el-table-column>
					<el-table-column fixed prop="name" label="姓名" width="90">
					</el-table-column>
					<el-table-column prop="city" label="工号" width="90">
					</el-table-column>
					<el-table-column prop="sex" label="性别" width="50">
					</el-table-column>
					<el-table-column prop="date" label="出生日期" width="90">
					</el-table-column>
					<el-table-column prop="address" label="身份证号码" width="150">
					</el-table-column>
					<el-table-column prop="zip" label="婚姻状况" width="70">
					</el-table-column>
					<el-table-column prop="nation" label="民族" width="80">
					</el-table-column>
					<el-table-column prop="nativeplace" label="籍贯" width="80">
					</el-table-column>
					<el-table-column prop="political" label="政治面貌" width="120">
					</el-table-column>
					<el-table-column prop="mail" label="电子邮件" width="130">
					</el-table-column>
					<el-table-column prop="phone" label="电话号码" width="120">
					</el-table-column>
					<el-table-column prop="contact" label="联系地址" width="120">
					</el-table-column>
					<el-table-column prop="departments" label="所属部门" width="90">
					</el-table-column>
					<el-table-column prop="position" label="职位" width="100">
					</el-table-column>
					<el-table-column prop="title" label="职称" width="90">
					</el-table-column>
					<el-table-column prop="employment" label="聘用形式" width="120">
					</el-table-column>
					<el-table-column prop="entry" label="入职日期" width="120">
					</el-table-column>
					<el-table-column prop="correction" label="转正日期" width="120">
					</el-table-column>
					<el-table-column prop="contract" label="合同起始日期" width="120">
					</el-table-column>
					<el-table-column prop="deadline" label="合同截至日期" width="120">
					</el-table-column>
					<el-table-column prop="period" label="合同期限" width="90">
					</el-table-column>
					<el-table-column prop="educational" label="最高学历" width="90">
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="200">
						<template slot-scope="scope">
							<el-button size="small" style="padding: 3px 4px;">编辑</el-button>
							<el-button type="primary" size="small" style="padding: 3px 4px;">查看高级资料</el-button>
							<el-button type="danger" size="small" style="padding: 3px 4px;">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<div>
					<el-button type="danger" disabled style="float: left; font-size: 11px; margin-top: 5px;" size="small">批量删除</el-button>
					<el-pagination background layout="prev, pager, next" :total="1000" style="float: right; padding-top: 5px;">
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
		name: 'jiben',
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
				}]
			}
		}
	}
</script>