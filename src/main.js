import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import VueRouter from "vue-router";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/router'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(less)
Vue.use(VueRouter)
//router.push("/homeView")
new Vue({
  router,
  el:"#app",
  render: h => h(App)
})
