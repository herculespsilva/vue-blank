import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://fd68f96b-c488-4367-8220-34962728eaa9.ws-us02.gitpod.io'

axios.interceptors.request.use(config => {              // incluindo um headers em toda requisição, token
 config.headers.Authorization = 'um token'              // Basic base64(usuario:senha)
 return config
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
