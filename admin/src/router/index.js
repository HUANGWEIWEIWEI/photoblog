import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'

import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import TagEdit from '../views/TagEdit.vue'
import TagList from '../views/TagList.vue'

import GiftEdit from '../views/GiftEdit.vue'
import GiftList from '../views/GiftList.vue'

import UserEdit from '../views/UserEdit.vue'
import UserList from '../views/UserList.vue'

import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'

Vue.use(VueRouter)

const router=new VueRouter({
routes:[
  {path:'/login',name:'login',component:Login,meta:{isPublic:true}},
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[

      {path:'/articles/create',component:ArticleEdit},
      {path:'/articles/edit/:id',component:ArticleEdit,props:true},
      {path:'/articles/list',component:ArticleList},

      {path:'/categories/create',component:CategoryEdit},
      {path:'/categories/edit/:id',component:CategoryEdit,props:true},
      {path:'/categories/list',component:CategoryList},

      {path:'/tags/create',component:TagEdit},
      {path:'/tags/edit/:id',component:TagEdit,props:true},
      {path:'/tags/list',component:TagList},

      {path:'/gifts/create',component:GiftEdit},
      {path:'/gifts/edit/:id',component:GiftEdit,props:true},
      {path:'/gifts/list',component:GiftList},

      {path:'/users/create',component:UserEdit},
      {path:'/users/edit/:id',component:UserEdit,props:true},
      {path:'/users/list',component:UserList},

      {path:'/admin_users/create',component:AdminUserEdit},
      {path:'/admin_users/edit/:id',component:AdminUserEdit,props:true},
      {path:'/admin_users/list',component:AdminUserList},

    ]
  },
  
]

})

//路由守卫
router.beforeEach((to, from, next) => {
  if(!to.meta.isPublic&&!localStorage.token){
    return next('/login')
  }
  next()
})

export default router
