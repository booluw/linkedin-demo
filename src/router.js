import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
/*
  The user is redirected to the notification page when he logs in
*/


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/explore',
      name: 'explore',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Explore.vue')
    },
    {
      path: '/:tutor/:title',
      name: 'tutorialPage',
      component: () => import('./views/tutorialPage.vue')
    }
  ]
})
