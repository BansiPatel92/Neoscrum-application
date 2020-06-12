import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import vuelidate from 'vuelidate';
Vue.config.productionTip = false
Vue.use(vuelidate);
import axios from 'axios'
axios.interceptors.request.use(
  function(config) {
   const token = localStorage.getItem('token')
   if (token) config.headers.Authorization = `${token}`
   return config
  },
  function(error) {
   return Promise.reject(error)
  }
 )

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
