/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
/*
Store is imported to check the 'authenticated' state.
*/
import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ],
  scrollBehaviour (to, from, savedPosition) {
    return {x: 0, y:0 };
  }
});