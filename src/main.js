import Vue from 'vue'
import App from './App.vue'
import marqueeTextScroll from './assets/index.js'
// import vuePayKeyboard from './lib/indexvue-pay-keyboard'
Vue.use(marqueeTextScroll)
new Vue({
  el: '#app',
  render: h => h(App)
})