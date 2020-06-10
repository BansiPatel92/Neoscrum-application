import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import AddFeedback from '../views/AddFeedback.vue'
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
          component:AddFeedback
        }
      ],
      beforeEnter: async (to, from, next) => {
        let currentuser = await JSON.parse(localStorage.getItem("currentuser"));
        console.log('currentuser >>',currentuser);
        if (currentuser && currentuser != null) {
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
