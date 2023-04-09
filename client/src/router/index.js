import { createRouter, createWebHistory } from 'vue-router'
import {auth} from '../firebase'

const routes = [
  {
    path: '/reset',
    name: 'Reset',
    component: () => import('../views/ResetPasswordPage.vue'),
  },
  //Temp, delete after some tests
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/TestPage.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/UserPage.vue'),
    //meta: {
      //requiresAuth: true
    //}
  },
  {
    path: '/load',
    name: 'Load',
    component: () => import('../views/LoadPage.vue'),
  },

  {
    path: '/chart',
    name: 'Chart',
    component: () => import('../views/ChartPage.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404Page.vue'),

  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),

  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterPage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path === '/login' && auth.currentUser) {
    next('/user')
    return;
  }

  if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})


export default router;