import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Pdetail from '../pages/Pdetail.vue'
import Vdetail from '../pages/Vdetail.vue'
import Ldetail from '../pages/Ldetail.vue'

export default new Router({

	routes: [{
			path: '/',
			component: resolve => require(['../pages/Home.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Home',
			
		}, //首页
		{
			path: '/Home',
			component: resolve => require(['../pages/Home.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Home'
		}, //首页
		{
			path: '/Photo',
			component: resolve => require(['../pages/Photo.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Photo',

		}, //摄影
		{
			path: '/Video',
			component: resolve => require(['../pages/Video.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Video'
		}, //摄像
		{
			path: '/Learn',
			component: resolve => require(['../pages/Learn.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'Learn'
		}, //教程
		{
			path: '/About',
			component: resolve => require(['../pages/About.vue'], resolve),
			meta: {
				auth: true
			},
			name: 'About'
		}, //关于

			{path:'/pdetails/:id',name:'pdetail',component:Pdetail,props:true},
			{path:'/vdetails/:id',name:'vdetail',component:Vdetail,props:true},
			{path:'/ldetails/:id',name:'ldetail',component:Ldetail,props:true},

		
	
	]
})
