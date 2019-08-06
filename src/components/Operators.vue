<template>
	<el-container>
		<el-header>
			<el-row :gutter="20">
				<el-col :span="20">
					<div class="grid-content bg-purple" style="color: white; font-size: 22px;">微人事</div>
				</el-col>
				<el-col :span="4">
					<div class="grid-content bg-purple" style="color: white; font-size: 14px;">
						<i class="el-icon-bell" style="font-size: 18px; color: #333333; margin-left: 50px;"></i><i style="padding-left: 30px;font-style:normal">系统管理员</i>
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
							<el-menu-item index="/Operators">操作员管理</el-menu-item>
							<el-menu-item index="5-5">备份恢复数据库</el-menu-item>
							<el-menu-item index="5-6">初始化数据库</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-main>
				<el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom: 10px;">
					<el-breadcrumb-item :to="{ path: '/HelloWorld' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item v-text="this.$router.currentRoute.name"></el-breadcrumb-item>
				</el-breadcrumb>
				<el-input placeholder="默认展示部分用户，可以通过用户名搜索更多用户..." style="width: 400px;height: 47px;font-size: 13px;"></el-input>
				<el-button type="primary" icon="el-icon-search" style="font-size: 11px;margin-left: 5px;" size="small">搜索</el-button>
				<div style="display: flex;justify-content: space-around;flex-wrap: wrap;text-align: left;">
				<el-card class="box-card" style="width: 350px;margin-left: 40px;">
					<div slot="header" class="clearfix" style="">
						<span style="float: left; line-height: 0px;">李白</span>
						<el-button class="el-icon-delete" style="float: right; padding: 3px 0;color: red;line-height: 0px;" type="text"></el-button>
					</div>
					<div style="width: 100%; display: flex; justify-content: center;">
						<img src="../../build/to.jpg" style="width: 70px; height: 70px; border-radius: 70px;" />
					</div>
					<div style="margin-top: 20px;text-align: left;">
						<div><span class="user-info">用户名:李白</span></div>
						<div><span class="user-info">手机号码:18568123489</span></div>
						<div><span class="user-info">电话号码:029-82123434</span></div>
						<div><span class="user-info">地址:海口美兰</span></div>
						<div class="user-info" style="display: flex; align-items: center; margin-bottom: 3px;">用户状态:
							<div role="switch" class="el-switch is-checked" style="display: inline; margin-left: 5px;" aria-checked="true">
								<input type="checkbox" name="" true-value="true" class="el-switch__input">
								<el-switch  v-model="value4" active-color="#13ce66" inactive-color="#DCDFE6" active-text="按月付费" inactive-text="按年付费">
								</el-switch>
							</div>
						</div>
						<div class="user-info">
							用户角色:
							<el-button type="success" plain size="small" style="padding: 3px 4px;">薪酬绩效主管</el-button>
							<el-button type="success" plain size="small" style="padding: 3px 4px;">招聘主管</el-button>
							<el-button type="success" plain size="small" style="padding: 3px 4px;">部门经理</el-button>
							<span>
									<i class="el-icon-more"></i>
							</span>
						</div>
						<div><span class="user-info">备注:</span></div>
					</div>
				</el-card>
								<el-card class="box-card" style="width: 350px;margin-left: 40px;">
					<div slot="header" class="clearfix" style="">
						<span style="float: left; line-height: 0px;">韩愈</span>
						<el-button class="el-icon-delete" style="float: right; padding: 3px 0;color: red;line-height: 0px;" type="text"></el-button>
					</div>
					<div style="width: 100%; display: flex; justify-content: center;">
						<img src="to.jpg" alt="item.name" style="width: 70px; height: 70px; border-radius: 70px;" />
					</div>
					<div style="margin-top: 20px;text-align: left;">
						<div><span class="user-info">用户名:李白</span></div>
						<div><span class="user-info">手机号码:18568123489</span></div>
						<div><span class="user-info">电话号码:029-82123434</span></div>
						<div><span class="user-info">地址:海口美兰</span></div>
						<div class="user-info" style="display: flex; align-items: center; margin-bottom: 3px;">用户状态:
							<div role="switch" class="el-switch is-checked" style="display: inline; margin-left: 5px;" aria-checked="true">
								<input type="checkbox" name="" true-value="true" class="el-switch__input">
								<el-switch  v-model="value4" active-color="#13ce66" inactive-color="#DCDFE6" active-text="按月付费" inactive-text="按年付费">
								</el-switch>
							</div>
						</div>
						<div class="user-info">
							用户角色:
							<el-button type="success" plain size="small" style="padding: 3px 4px;">薪酬绩效主管</el-button>
							<el-button type="success" plain size="small" style="padding: 3px 4px;">招聘主管</el-button>
							<el-button type="success" plain size="small" style="padding: 3px 4px;">部门经理</el-button>
							<span>
									<i class="el-icon-more"></i>
							</span>
						</div>
						<div><span class="user-info">备注:</span></div>
					</div>
				</el-card>
												<el-card class="box-card" style="width: 350px;margin-left: 40px;">
					<div slot="header" class="clearfix" style="">
						<span style="float: left; line-height: 0px;">柳宗元</span>
						<el-button class="el-icon-delete" style="float: right; padding: 3px 0;color: red;line-height: 0px;" type="text"></el-button>
					</div>
					<div style="width: 100%; display: flex; justify-content: center;">
						<img src="../../build/do.jpg" style="width: 70px; height: 70px; border-radius: 70px;" />
					</div>
					<div style="margin-top: 20px;text-align: left;">
						<div><span class="user-info">用户名:李白</span></div>
						<div><span class="user-info">手机号码:18568123489</span></div>
						<div><span class="user-info">电话号码:029-82123434</span></div>
						<div><span class="user-info">地址:海口美兰</span></div>
						<div class="user-info" style="display: flex; align-items: center; margin-bottom: 3px;">用户状态:
							<div role="switch" class="el-switch is-checked" style="display: inline; margin-left: 5px;" aria-checked="true">
								<input type="checkbox" name="" true-value="true" class="el-switch__input">
								<el-switch  v-model="value4" active-color="#13ce66" inactive-color="#DCDFE6" active-text="按月付费" inactive-text="按年付费">
								</el-switch>
							</div>
						</div>
						<div class="user-info">
							用户角色:
							<el-button type="success" plain size="small" style="padding: 3px 4px;">薪酬绩效主管</el-button>
							<el-button type="success" plain size="small" style="padding: 3px 4px;">招聘主管</el-button>
							<el-button type="success" plain size="small" style="padding: 3px 4px;">部门经理</el-button>
							<span>
									<i class="el-icon-more"></i>
							</span>
						</div>
						<div><span class="user-info">备注:</span></div>
					</div>
				</el-card>
												<el-card class="box-card" style="width: 350px;margin-left: 40px;">
					<div slot="header" class="clearfix" style="">
						<span style="float: left; line-height: 0px;">曾巩</span>
						<el-button class="el-icon-delete" style="float: right; padding: 3px 0;color: red;line-height: 0px;" type="text"></el-button>
					</div>
					<div style="width: 100%; display: flex; justify-content: center;">
						<img src="../../build/op.jpg" style="width: 70px; height: 70px; border-radius: 70px;" />
					</div>
					<div style="margin-top: 20px;text-align: left;">
						<div><span class="user-info">用户名:李白</span></div>
						<div><span class="user-info">手机号码:18568123489</span></div>
						<div><span class="user-info">电话号码:029-82123434</span></div>
						<div><span class="user-info">地址:海口美兰</span></div>
						<div class="user-info" style="display: flex; align-items: center; margin-bottom: 3px;">用户状态:
							<div role="switch" class="el-switch is-checked" style="display: inline; margin-left: 5px;" aria-checked="true">
								<input type="checkbox" name="" true-value="true" class="el-switch__input">
								<el-switch  v-model="value4" active-color="#13ce66" inactive-color="#DCDFE6" active-text="按月付费" inactive-text="按年付费">
								</el-switch>
							</div>
						</div>
						<div class="user-info">
							用户角色:
							<el-button type="success" plain size="small" style="padding: 3px 4px;">薪酬绩效主管</el-button>
							<el-button type="success" plain size="small" style="padding: 3px 4px;">招聘主管</el-button>
							<el-button type="success" plain size="small" style="padding: 3px 4px;">部门经理</el-button>
							<span>
									<i class="el-icon-more"></i>
							</span>
						</div>
						<div><span class="user-info">备注:</span></div>
					</div>
				</el-card>
				</div>
			</el-main>
		</el-container>
	</el-container>
</template>

<style>
	.user-info {
		font-size: 12px;
		color: #09c0f6;
	}
	
	.el-card__header {
		padding: 28px 20px;
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
		height: 31px;
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
		name: 'training',
		data() {
			return {
				value3: true,
				value4: true
			}
		}
	}
</script>