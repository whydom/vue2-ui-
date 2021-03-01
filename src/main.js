import Vue from 'vue'
import App from './App.vue'
// 引入按钮组件
import WdButton from './components/button.vue'

Vue.config.productionTip = false
// 注册组件
Vue.component(WdButton.name, WdButton)
new Vue({
  render: h => h(App)
}).$mount('#app')
