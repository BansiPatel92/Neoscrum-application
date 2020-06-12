import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import FeedbackCard from '../views/FeedbackCard.vue'
Vue.use(VueRouter)
const routes = [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      children:[
        {
          name:'Dashboard',
          path:'/',
          component:Dashboard
        },
        {
          name:'Feedback',
          path:'/feedback',
          component:FeedbackCard
        }
      ],
      beforeEnter: async (to, from, next) => {
        let token = localStorage.getItem("token");
        if (token && token != null) {
        next();
        } else {
        next("/login");
        }
    }
    }
  ];

const router = new VueRouter({
  routes
})




export default router
