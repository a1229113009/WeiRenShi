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
				<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
					<el-tab-pane label="部门管理" name="first" style="float: left;">
						<el-input placeholder="输入部门名称搜索部门..." style="width: 500px;height: 47px;font-size: 11px;"></el-input>
						<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
					</el-tab-pane>
					<el-tab-pane label="职位管理" name="second">
						<el-input placeholder="添加职位..." style="width: 300px;height: 47px;font-size: 11px;float: left;"></el-input>
						<el-button type="primary" icon="el-icon-plus" style="float: right;font-size: 11px;margin-left: 15px;float: left;" size="small">添加</el-button>
						<el-table :data="tableData" border style="width: 100%">
							<el-table-column type="selection" width="55">
							</el-table-column>
							<el-table-column prop="name" label="编号" width="110">
							</el-table-column>
							<el-table-column prop="city" label="职位名称" width="110">
							</el-table-column>
							<el-table-column prop="mail" label="创建时间" width="200">
							</el-table-column>
							<el-table-column label="操作" width="1203">
								<template slot-scope="scope">
									<el-button size="small">编辑</el-button>
									<el-button type="danger" size="small">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
						<el-button type="danger" disabled style="float: left; font-size: 11px; margin-top: 5px;" size="small">批量删除</el-button>
					</el-tab-pane>
					<el-tab-pane label="职称管理" name="third">
						<el-input placeholder="添加职称..." style="width: 300px;height: 47px;font-size: 11px;float: left;"></el-input>
						<el-select v-model="value" placeholder="职称等级" style="float: left;margin-left: 5px;">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
							</el-option>
						</el-select>
						<el-button type="primary" icon="el-icon-plus" style="float: right;font-size: 11px;margin-left: 5px;float: left;" size="small">添加</el-button>
						<el-table :data="tableData2" border style="width: 100%">
							<el-table-column type="selection" width="55">
							</el-table-column>
							<el-table-column prop="name" label="编号" width="90">
							</el-table-column>
							<el-table-column prop="city" label="职称名称" width="180">
							</el-table-column>
							<el-table-column prop="ming" label="职称级别" width="180">
							</el-table-column>
							<el-table-column prop="mail" label="创建时间" width="200">
							</el-table-column>
							<el-table-column label="操作" width="973">
								<template slot-scope="scope">
									<el-button size="small">编辑</el-button>
									<el-button type="danger" size="small">删除</el-button>
								</template>
							</el-table-column>
						</el-table>
						<el-button type="danger" disabled style="float: left; font-size: 11px; margin-top: 5px;" size="small">批量删除</el-button>
					</el-tab-pane>
					<el-tab-pane label="奖惩规则" name="fourth"><strong>奖惩规则</strong></el-tab-pane>
					<el-tab-pane label="权限组" name="groups">
						<div>
							<el-input placeholder="请输入角色英文名称..." v-model="input3" style="width: 260px;float: left;">
								<template slot="prepend">ROLE_</template>
							</el-input>
							<el-input placeholder="请输入角色中文名称..." style="width: 250px;height: 47px;font-size: 11px;float: left;margin-left: 5px;margin-top: -3px;"></el-input>
							<el-button type="primary" icon="el-icon-plus" style="float: right;font-size: 11px;margin-left: 5px;float: left;" size="small">添加角色</el-button>
						</div>
						<el-collapse v-model="activeName" accordion style="padding-top: 50px;width: 30%;">
							<el-collapse-item title="部门经理" name="1">
								<el-card class="box-card">
									<div slot="header" class="clearfix">
										<span style="float: left;">可访问的资源</span>
										<el-button class="el-icon-delete" style="float: right; padding: 3px 0;color: red;" type="text"></el-button>
									</div>
									<div>
										<el-tree :data="data2" show-checkbox node-key="id" :default-checked-keys="[1]" :props="defaultProps">
										</el-tree>
									</div>
								</el-card>
							</el-collapse-item>
							<el-collapse-item title="人事专员" name="2">
								<el-card class="box-card">
									<div slot="header" class="clearfix">
										<span style="float: left;">可访问的资源</span>
										<el-button class="el-icon-delete" style="float: right; padding: 3px 0;color: red;" type="text"></el-button>
									</div>
									<div>

									</div>
								</el-card>
							</el-collapse-item>
							<el-collapse-item title="招聘主管" name="3">
								<el-card class="box-card">
									<div slot="header" class="clearfix">
										<span style="float: left;">可访问的资源</span>
										<el-button class="el-icon-delete" style="float: right; padding: 3px 0;color: red;" type="text"></el-button>
									</div>
									<div>

									</div>
								</el-card>
							</el-collapse-item>
							<el-collapse-item title="培训主管" name="4">
								<el-card class="box-card">
									<div slot="header" class="clearfix">
										<span style="float: left;">可访问的资源</span>
										<el-button class="el-icon-delete" style="float: right; padding: 3px 0;color: red;" type="text"></el-button>
									</div>
									<div>

									</div>
								</el-card>
							</el-collapse-item>
							<el-collapse-item title="薪酬绩效主管" name="5">
								<el-card class="box-card">
									<div slot="header" class="clearfix">
										<span style="float: left;">可访问的资源</span>
										<el-button class="el-icon-delete" style="float: right; padding: 3px 0;color: red;" type="text"></el-button>
									</div>
									<div>

									</div>
								</el-card>
							</el-collapse-item>
							<el-collapse-item title="测试角色2" name="6">
								<el-card class="box-card">
									<div slot="header" class="clearfix">
										<span style="float: left;">可访问的资源</span>
										<el-button class="el-icon-delete" style="float: right; padding: 3px 0;color: red;" type="text"></el-button>
									</div>
									<div>

									</div>
								</el-card>
							</el-collapse-item>
							<el-collapse-item title="测试角色1" name="7">
								<el-card class="box-card">
									<div slot="header" class="clearfix">
										<span style="float: left;">可访问的资源</span>
										<el-button class="el-icon-delete" style="float: right; padding: 3px 0;color: red;" type="text"></el-button>
									</div>
									<div>

									</div>
								</el-card>
							</el-collapse-item>
						</el-collapse>
					</el-tab-pane>
				</el-tabs>
			</el-main>
		</el-container>
	</el-container>
</template>

<style>
	.text {
		font-size: 14px;
	}
	
	.item {
		margin-bottom: 18px;
	}
	
	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	
	.clearfix:after {
		clear: both
	}
	
	.box-card {
		width: 480px;
	}
	
	.el-select .el-input {
		width: 180px;
	}
	
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
		name: 'scale',
		data() {
			return {
				activeName2: 'first',
				data: [{
					label: '股东会',
					children: [{
						label: '董事会',
						children: [{
							label: '总办',
							children: [{
									label: '财务部'
								},
								{
									label: '市场部',
									children: [{
											label: '华北市场部',
											children: [{
												label: '石家庄市场部'
											}]
										},
										{
											label: '华南市场部'
										},
										{
											label: '西北市场部',
											children: [{
												label: '西安市场',
												children: [{
													label: '莲湖区市场',

												}]
											}]
										}
									]
								},
								{
									label: '技术部'
								},
								{
									label: '运维部'
								}
							]
						}],
						defaultProps: {
							children: 'children',
							label: 'label'
						}
					}]
				}],
				tableData: [{
						name: '29',
						city: '技术总监',
						mail: '2018-01-11'
					},
					{
						name: '30',
						city: '运营总监',
						mail: '2018-01-11'
					},
					{
						name: '31',
						city: '市场总监',
						mail: '2018-01-11'
					},
					{
						name: '32',
						city: '总经理',
						mail: '2018-01-11'
					},
					{
						name: '33',
						city: '研发工程师',
						mail: '2018-01-11'
					},
					{
						name: '34',
						city: '运维工程师',
						mail: '2018-01-11'
					}
				],
				tableData2: [{
						name: '9',
						city: '技术总监',
						ming: '正高级',
						mail: '2018-01-11'
					},
					{
						name: '10',
						city: '运营总监',
						ming: '正高级',
						mail: '2018-01-11'
					},
					{
						name: '11',
						city: '市场总监',
						ming: '正高级',
						mail: '2018-01-11'
					},
					{
						name: '12',
						city: '总经理',
						ming: '正高级',
						mail: '2018-01-11'
					},
					{
						name: '13',
						city: '研发工程师',
						ming: '正高级',
						mail: '2018-01-11'
					},
					{
						name: '14',
						city: '运维工程师',
						ming: '正高级',
						mail: '2018-01-11'
					}
				],
				data2: [{
					id: 1,
					label: '所有',
					children: [{
						id: 2,
						label: '员工资料',
						children: [{
							id: 7,
							label: '基本资料'
						}]
					},
					{
						id: 3,
						label: '人事管理',
						children: [{
							id: 8,
							label: '员工奖惩'
						},
						{
							id: 9,
							label: '员工培训'
						},
						{
							id: 10,
							label: '员工调薪'
						},
						{
							id: 11,
							label: '员工调动'
						}]
					},
					{
						id: 4,
						label: '薪资管理',
						children: [{
							id: 12,
							label: '工资账套管理'
						},
						{
							id: 13,
							label: '员工账套设置'
						},
						{
							id: 14,
							label: '工资表管理'
						},
						{
							id: 15,
							label: '月末处理'
						},
						{
							id: 16,
							label: '工资表查询'
						}]
					},
					{
						id: 5,
						label: '统计管理',
						children: [{
							id: 17,
							label: '综合信息统计'
						},
						{
							id: 18,
							label: '员工积分统计'
						},
						{
							id: 19,
							label: '人事信息统计'
						},
						{
							id: 20,
							label: '人事记录统计'
						}]
					},
					{
						id: 6,
						label: '系统管理',
						children: [{
							id: 21,
							label: '基础信息设置'
						}]
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			handleNodeClick(data) {
				console.log(data);
			}
		}
	}
</script>