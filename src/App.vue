<template>
  <div id="app">
    <page-header />
    <transition enter-active-class="animated fadeIn slower" leave-active-class="animated fadeOut faster">
      <router-view></router-view>
    </transition>
    <div class="mobile" style="padding: 3rem 0;"></div>
    <transition class="mobile" enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
        <div class="h-flex mobile fab-container" v-if="selectedTotal">
            <a href="#" @click.prevent="$router.go(-1)" class="fab is-small is-faint">
                <i class="material-icons">arrow_back</i>
            </a>
            <router-link to="/profile?dashboard" class="fab">
                <i class="material-icons">star_outline</i>
                <div class="badge is-dangerous">{{selectedTotal}}</div>
            </router-link>
            <a href="#" @click.prevent="$router.go(1)" class="fab is-small is-faint">
                <i class="material-icons">arrow_forward</i>
            </a>
        </div>
    </transition>
  </div>
</template>

<script>
import Header from "@/components/theHeader.vue";

import { mapGetters } from 'vuex'

export default {
  components: {
    'page-header' : Header
  },
  computed: {
      ...mapGetters ([
          'selectedTotal'
      ])
    }
}
</script>


<style>
.header {
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
}
:root {
  --mainColor: #663399;
  --mainSubtile: ;
  --subColor: #6495ed;
  --subSubtile: rgba(100, 149, 237,.1);
  --cta: #ffa500;
  --ctaSubtile: ;
  --text: #575656;
  --headerText: #363636;
  --borderRadius: .3rem;
  --boxShadow: 0 0 5px 3px grey;
}
body {
  color: var(--text);
  font-size: 16px;
  padding: 0;
  margin: 0;
  background-color: rgba(225,225,225,.5);
  font-family: 'Montserrat','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  text-decoration: none;
}
img.logo {
  width: 10rem; 
  height: 3.7rem;
}
.page > *:last-child {
  visibility: none;
}
.h-flex {
  display: flex;
  overflow-x: auto;
  height: auto;
  -webkit-overflow-scrolling: touch;
  -webkit-scroll-snap-type: mandatory;
  -ms-scroll-snap-type: mandatory;
  scroll-snap-type: mandatory;
  padding: 1rem 0;
}
  .h-flex::-webkit-scrollbar {
      width: .3rem;
      height: .5rem;
  }
  .h-flex::-webkit-scrollbar-thumb {
      background-color: rgba(100, 149, 237,.5);
      border-radius: 100rem;
      box-shadow: inset 0 0 5px rgba(0,0,0,.3);
      transition: .3s background-color ease-in-out;
  }
  .h-flex::-webkit-scrollbar-thumb:hover {
      background-color: rgba(100, 149, 237,.2);
  }
  .h-flex > * {
    flex-shrink: 0; 
  }
.v-flex {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
  .v-flex > * {
    width: 100%!important;
  }
/*======================
          AddOn
======================*/
.material-icons {
  vertical-align: middle;
}
.main {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 2.5rem;
  position: relative;
  text-align: center;
  padding: 1rem 0;
  color: var(--headerText);
}
  .main:after {
    display: flex;
    position: absolute;
    margin: -.05rem 35%;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    height: .3rem;
    background-color: var(--mainColor);
  }
.brief {
  font-weight: bold;
  color: var(--headerText);
  padding: 0;
  margin: 0;
}
.btn {
  display: block;
  font-family: 'Montserrat','Avenir', Helvetica, Arial, sans-serif;
  padding: .5rem 1rem;
  margin: .5rem 0;
  border-radius: var(--borderRadius);
  cursor: pointer;
  font-weight: bolder;
  transition: .3s ease-in-out;
}
  .btn.btn-link {
    color: var(--mainColor);
    border: 2px solid var(--mainColor);
    padding: 1rem 6rem!important;
  }
    .btn.btn-link:hover {
      background-color: var(--mainColor);
      color: white;
    }
  .btn.is-dangerous {
    background-color: crimson;
    color: white;
    opacity: .8;
    transition: .3s ease-in-out;
    text-shadow: 0 0 5px black;
  }
  .btn.is-successful {
    background-color: forestgreen;
    color: white;
    opacity: .8;
    transition: .3s ease-in-out;
    text-shadow: 0 0 5px black;
  }
  .btn.is-primary {
    background-color: cornflowerblue;
    color: white;
    opacity: .8;
    transition: .3s ease-in-out;
    text-shadow: 0 0 5px black;
  }
/*===========
__btn: A special type of button,
      used in theCard.vue and tutorialPage.vue
===========*/
.__btn {
    background-color: transparent;
    padding: .5rem .9rem;
    color: var(--mainColor);
    font-weight: bold;
    border: 1.5px solid var(--mainColor);
    border-radius: 3rem;
    transition: .3s ease-in;
    cursor: pointer;
    outline: none;
}
  .__btn:hover {
        border-color: var(--mainColor);
        background-color: var(--mainColor);
        color: white;
    }
  .__btn.primary {
    color: white;
    background-color: var(--mainColor);
  }
  .__btn.is-selected {
      background-color: #06b406;
      color: white;
      border-color: #06b406;
      opacity: .6;
      transition: .3s ease-in-out;
  }
    .__btn.is-selected:hover {
        opacity: 1;
    }
  .__btn.is-dangerous {
    border-color: crimson;
    color: crimson;
    text-shadow: 0 0 1px crimson;
  }
    .__btn.is-dangerous.primary {
      background-color: crimson;
      color: white;
    }
    .__btn.is-dangerous:hover, .is-dangerous {
      background-color: crimson;
      border-color: crimson;
      color: white;
    }
  .__btn.dangerous:hover,
  .is-dangerous:hover,
  .is-successful:hover,
  .is-primary:hover {
    opacity: 1;
  }
.badge {
  padding: .5rem .7rem;
  border-radius: 1rem;
}
.input-group {
  display: flex;
  flex-direction: column;
  color: var(--mainColor);
}
  .input-group input, .input-group select {
    padding: .5rem;
    margin: .1rem 0;
    background-color: rgba(100, 149, 237,0.05);
    border: 1.5px solid rgba(0,0,0,.3);
    border-radius: var(--borderRadius);
    cursor: pointer;
  }
  .input-group input:hover,
  .input-group select:focus {
    border-color: var(--subColor);
    box-shadow: 0 0 10px 1px var(--subColor);
    outline: none;
  }
/*========
section attribute
========*/
[section] {
    background-color: var(--subSubtile);
    padding: .5rem 1rem;
    margin: .3rem 0;
}
  [section="b-top"] {
      border-radius: var(--borderRadius) var(--borderRadius) 0 0;
  }
  [section="b-bottom"] {
      border-radius: 0 0 var(--borderRadius) var(--borderRadius);
  }
/*======
Floating Action Button [FAB]
======*/
.fab-container {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: transparent;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 4rem;
  overflow: hidden;
}
.fab {
    padding: 1.3rem .3rem;
    width: 3.3rem;
    border-radius: 3rem;
    background-color: var(--subColor);
    border: .5rem solid var(--subColor);
    box-shadow: 0 0 2px 5px var(--subSubtile);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    outline: none;
}
  .fab.is-small {
    width: 2.2rem;
    padding: .5rem .15rem;
    box-shadow: none;
  }
  .fab.is-faint {
    background-color: grey;
    border: grey;
  }
  .fab .badge {
      position: absolute;
      top: 15px;
      margin-left: 1.5rem;
      opacity: 1;
      padding: .4rem .7rem;
  }
.btn-nav {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 3rem;
    margin: 0 .5rem 0 0;
    background-color: rgba(100, 97, 97,.092);
    color: var(--headerText);
    transition: .3s ease-in-out;
}
.btn-nav > * {
    margin: 0 .5rem;
}
.emp {
    text-shadow: 0 0 2px black;
}
@media (min-width: 1200px) {
  .btn {
    padding: .5rem 1rem;
  }
  .__btn {
    padding: 1rem 1.8rem;
  }
  .v-flex > * {
     width: calc(100% / 3.2)!important;
  }
  .page {
    display: flex;
    justify-content: space-between;
  }
  .page >*:first-child {
      width: 63%;
  }
  .page > *:last-child {
      width: 27%;
      visibility: visible;
  }
}
@media (prefers-color-scheme: dark) {
  :root {
    --mainColor: #5a4074;
    --subColor: #3f609c;
    --cta: #af750a;
    --text: #5c5b5b;
    --headerText: #8f8e8e;
    --borderRadius: .3rem;
    --boxShadow: 0 0 5px 3px grey;
  }
  body {
    background-color: rgb(39, 39, 39);
    color: rgb(110, 105, 105);
  }
  * {
    text-shadow: none!important;
  }
  input {
    color: white;
  }
}
</style>
