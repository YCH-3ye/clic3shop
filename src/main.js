import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './plugins/element.js'
import '@/assets/css/common.scss'
Vue.config.productionTip = false
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import components from './components/overall'
Vue.use(components)

window.vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
