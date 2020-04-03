import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'



Vue.config.productionTip = false//消息提示的环境配置，设置为开发环境或者生产环境,false为阻止启动生产消息



import './assets/iconfont/iconfont.css'
import './assets/scss/style.scss'


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

import Card from './components/Card.vue'
Vue.component('m-card', Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card', ListCard)

import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api'
  // baseURL: 'http://localhost:3000/web/api'
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
