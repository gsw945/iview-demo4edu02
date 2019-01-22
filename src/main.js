import Vue from 'vue'
import App from './App.vue'
import router from './plugins/iview'

Vue.config.productionTip = false

// 实例化 Vue 应用
new Vue({
  router: router, // Vue应用使用的路由
  render: h => h(App),
}).$mount('#app')
