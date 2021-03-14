import Vue from 'vue'
import App from './App.vue'
// import Inbox from './components/Inbox.vue'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
