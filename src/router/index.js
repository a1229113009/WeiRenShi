import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import jiben from '@/components/jiben'
import employees from '@/components/employees'
import training from '@/components/training'
import management from '@/components/management'
import setting from '@/components/setting'
import scale from '@/components/scale'
import Information from '@/components/Information'
import Operators from '@/components/Operators'
import dlu from '@/components/dlu'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: '主页',
      component:index
    },
		{
			path:'/jiben',
			name:'基本资料',
			component:jiben
		},
		{
			path:'/employees',
			name:'员工奖惩',
			component:employees
		},
		{
			path:'/training',
			name:'员工培训',
			component:training
		},
		{
			path:'/management',
			name:'工资账套管理',
			component:management
		},
		{
			path:'/setting',
			name:'员工账套设置',
			component:setting
		},
		{
			path:'/scale',
			name:'工资表管理',
			component:scale
		},
		{
			path:'/Information',
			name:'基础信息设置',
			component:Information
		},
		{
			path:'/Operators',
			name:'操作员管理',
			component:Operators
		},
		{
			path:'/',
			name:'登录',
			component:dlu
		}
  ]
})
