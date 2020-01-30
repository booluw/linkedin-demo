import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueMeta from 'vue-meta'

//imported CSS modules

import '@/assets/css/animate.css'
import '@/assets/css/material-icons.css'

Vue.use(VueMeta);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
