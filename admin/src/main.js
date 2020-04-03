import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

// import Quill from 'quill'
// import ArticleEdit from './views/ArticleEdit.vue'
// Quill.register('modules/ArticleEdit', ArticleEdit)


import './style.css'

Vue.config.productionTip = false

import http from './http'
Vue.prototype.$http=http

Vue.mixin({//可以让每一个vue的实例都拥有这些东西
  computed:{
    uploadUrl(){
      return this.$http.defaults.baseURL+'/upload'
    }
  },
  methods:{
    getAuthHeaders(){
      return{
        Authorization:`Bearer ${localStorage.token||''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
