/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Explore from './views/Explore.vue'
import Create from './views/Create.vue'
import UserProfile from './views/userProfile.vue'

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
      component: Explore,
      alias: '/tutorials'
    },
    {
      /*
      PROTECTED VIEW. Users can create tutorials.
      */
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/me',
      name: 'profilePage',
      component: UserProfile
    },
    {
      path: '/u',
      name: 'tutors',
      component: () => import('./views/Tutors.vue'),
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
      path: '/explore/:tutor/:title/quiz',
      name: 'quizPage',
      component: () => import('./views/quizPage.vue')
    },
    {
      /*
      UNPROTECTED VIEW. Users and Guests can:
      ======> Checkout, or print, their tutorials.
      ======> Delete, or Cancel All, their tutorials.
      ==============> LOGGED_IN USERS can proceed to "Save and Share" their timetable.
      */
      path: '/checkout',
      name: 'checkout',
      component: () => import('./views/checkout.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/signin.vue')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('./views/join.vue')
    },
    {
      /*
        PROTECTED VIEW.In this View, Users can:
        ======> Save a timetable and share for others to copy and print(/tt/:timetableID).
        ======> Add reminders in Google Calender.
        ======> See clashing tutorials.

      */
      path: '/tt',
      name: 'timeTable',
      component: () => import('./views/checkout.vue')
    },
    {
      /*
      UNPROTECTED VIEW. In this view, Users and Guests can:
      ========> Print the ":timetableID".
      ===============> LOGGED_IN USERS can Add reminders in Google Calender.
      */
      path: '/tt/:timetableID',
      name: 'sharedTimeTable',
      component: () => import('./views/checkout.vue')
    }
  ],
  scrollBehaviour (to, from, savedPosition) {
    return {x: 0, y:0 };
  }
});