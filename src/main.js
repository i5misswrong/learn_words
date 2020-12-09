import Vue from 'vue'
import App from './App.vue'

import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import global_css from './assets/css/global.css'

import routes from './router/index'
import VueRouter from "vue-router";

import vnav from './components/nav/index'  // 导入 导航栏
Vue.use(vnav)
Vue.component('vnav',vnav)

import vfooter from './components/footer/index' // 导入 页脚
Vue.use(vfooter)
Vue.component('vfooter',vfooter)


Vue.config.productionTip = false

Vue.use(ElementUi)
Vue.use(VueRouter)
const  router = new VueRouter({
  routes
})


new Vue({
  router,
  components:{vnav,vfooter},
  render: h => h(App),
}).$mount('#app')
