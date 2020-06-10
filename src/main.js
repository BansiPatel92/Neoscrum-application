import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import vuelidate from 'vuelidate';
Vue.config.productionTip = false
Vue.use(vuelidate);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
