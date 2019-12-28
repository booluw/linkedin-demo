import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Explore from './views/Explore.vue'
import Create from './views/Explore.vue'
import Tutors from './views/Tutors.vue'

Vue.use(Router)
/*
  The user is redirected to the notification page when he logs in.
  VIEWS NOT LAZY-LOADED:
  =====> Explore
  =====> Create
  =====> Profile page
  =====> Settings
  =====> BnB home
  =====> BnB explore
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
      component: Explore,
      alias: '/tutorials'
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/u',
      name: 'tutors',
      component: Tutors,
      alias: '/tutors'
    },
    {
      path: '/u/:tutor',
      name: 'tutorPage',
      component: () => import('./views/tutorPage.vue')
    },
    {
      path: '/locations',
      name: 'locations',
      component: () => import('./views/locations.vue')
    },
    {
      path: '/locations/:location',
      name: 'locationPage',
      component: () => import('./views/locationPage.vue')
    },
    {
      path: '/explore/:tutor/:title',
      name: 'tutorialPage',
      component: () => import('./views/tutorialPage.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('./views/checkout.vue')
    }
  ]
})
