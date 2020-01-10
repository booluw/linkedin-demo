<template>
  <div id="app">
    <page-header />
    <transition enter-active-class="animated fadeIn slower" leave-active-class="animated fadeOut faster">
      <router-view></router-view>
    </transition>
    <div style="padding: 3rem 0;"></div>
    <transition enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown faster">
      <router-link to="/checkout" class="toast" v-if="selectedTotal && $route.path !='/checkout'">
        <p>
          {{selected[selected.length-1].title}} added
        </p>
        <div>
          <i class="material-icons">star</i>
          <b class="emp">{{selectedTotal}}</b>
        </div>
      </router-link>
    </transition>
  </div>
</template>

<script>
import Header from "@/components/AppHeader.vue";

import { mapGetters, mapState } from 'vuex'

export default {
  components: {
    'page-header' : Header
  },
  computed: {
      ...mapGetters ([
          'selectedTotal'
      ]),
      ...mapState ([
        'selected'
      ])
    }
}
</script>


<style>
:root {
  --mainColor: #663399;
  --mainSubtile: rgba(102, 51, 153,.2);
  --subColor: #6495ed;
  --subSubtile: rgba(100, 149, 237,.2);
  --cta: #ffa500;
  --ctaSubtile: rgba(255, 165, 0,.2);
  --text: #575656;
  --headerText: #363636;
  --borderRadius: .3rem;
  --boxShadow:0 0 5px 2px var(--subSubtile);
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
  overflow-x: hidden;
}
.mobile {
    display: block;
}
.desktop {
    display: none;
}
.hidden {
  display: none;
}
.header {
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
}
.page {
  padding: 0 .5rem 0 0;
}
a {
  text-decoration: none;
}
  .subtile-link {
    display: inline-flex;
    justify-content:center;
    align-content: center;
    align-items: center;
    padding: .7rem;
    background-color: transparent;
    color: var(--text);
    font-weight: bold;
    border-radius: var(--borderRadius);
    transition: .3s ease-in-out;
  }
  .subtile-link .material-icons {margin: 0 .5rem 0 0}
    .subtile-link.is-active, .subtile-link.is-active:hover {
      --text: var(--subColor);
      --background-color: rgba(100, 148, 237, 0.1);
      background-color: var(--background-color);
    }
    .subtile-link.is-disabled, .subtitle-link.is-disabled:hover {
      --text: rgb(161, 160, 160);   
    }
    .subtile-link:hover {
      color: var(--text);
      background-color: var(--background-color, rgba(128, 128, 128, 0.1));
      box-shadow: 0 0 2px 3px var(--background-color, rgba(128, 128, 128, 0.1));
    }
img.logo {
  width: 10rem; 
  height: 3.7rem;
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
  padding: 1rem;
  margin: .5rem .5rem;
  border-radius: var(--borderRadius);
  cursor: pointer;
  font-weight: bolder;
  transition: .3s ease-in-out;
  border: none;
}
  .btn.btn-link {
    color: var(--mainColor);
    border: 2px solid var(--mainColor);
    padding: 1rem 6rem!important;
  }
    .btn.btn-link:hover {
      background-color: var(--mainColor);
      color: white;
      box-shadow: 0 0 5px 3px grey;
    }
  .btn.btn-small {
    padding: 1rem;
  }
  .btn.is-dangerous,.btn.is-dangerous:hover  {
    background-color: crimson;
    color: white;
    opacity: .8;
    transition: .3s ease-in-out;
    text-shadow: 0 0 5px black;
    border-color: crimson;
  }
  .btn.is-successful,.btn.is-successful:hover {
    background-color: forestgreen;
    color: white;
    opacity: .8;
    transition: .3s ease-in-out;
    text-shadow: 0 0 5px black;
    border-color: forestgreen;
  }
  .btn.is-primary,.btn.is-primary:hover {
    background-color: cornflowerblue;
    color: white;
    opacity: .8;
    transition: .3s ease-in-out;
    text-shadow: 0 0 5px black;
    border-color: cornflowerblue;
  }
/*===========
__btn: A special type of button,
      used in theCard.vue and tutorialPage.vue
===========*/
.__btn {
  background-color: transparent;
  padding: .9rem;
  color: var(--mainColor);
  font-weight: bold;
  border: 1.5px solid var(--mainColor);
  border-radius: 3rem;
  transition: .3s ease-in;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
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
    color: white;
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
/*
  INPUT-GROUP
*/
.input-group {
  display: flex;
  flex-direction: column;
  color: white;
  border-radius: var(--borderRadius);
  margin: .5rem 0;
}
.input-group .label, .input-group .input {
  padding: .25rem .5rem;
  font-weight: bold;
  background-color: var(--mainColor);
  border-radius: var(--borderRadius) var(--borderRadius) 0 0;
}
.input-group .label:not(.with-btn) {
  padding: .65rem .5rem;
}
.input-group .label.with-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 .5rem;
}
.input-group .input {
  color: var(--mainColor);
  font-weight: normal;
  background-color: var(--mainSubtile);
  border: none;
  border-radius: 0 0 var(--borderRadius) var(--borderRadius);
  font-size: 1.2rem;
  padding: .5rem;
}
.input-group .input:focus {
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
Toast
======*/
.toast {
  position: fixed;
  bottom: .5rem;
  right: 1rem;
  left: 1rem;
  margin: 0 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .1rem 1rem;
  color: rgb(83, 231, 83);
  background-color: rgb(48, 46, 46);
  box-shadow: 0 0 2px 5px rgba(48, 46, 46, .3);
  border-radius: var(--borderRadius);
  transition: .2s ease-in-out;
}
.toast:hover {
  bottom: 1rem;
}
.toast .material-icons {
  vertical-align: bottom;
  font-size: 2rem;
}
.toast div {
  color: var(--subColor);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/*==================
Notif 
=================*/
.notif {
  --border: var(--subColor);
  --bg: var(--subSubtile);
  background-color: var(--bg);
  color: black;
  padding: 1rem .7rem;
  border-left: .5rem solid var(--border);
}
.notif.is-dangerous {
  --border: crimson;
  --bg: rgba(220, 20, 60, 0.3);
}
.notif.is-successful {
  --border: forestgreen;
  --bg: rgba(34, 139, 34, 0.3);
}
.notif.is-warning {
  --border: orange;
  --bg: rgba(255, 166, 0, 0.3);
}
.emp {
  text-shadow: 0 0 2px black;
}
.snub-header, .snub {
  text-transform: uppercase;
  font-size: .7rem;
  color: rgb(163, 163, 163);
  position: relative;
}
  .snub {
    padding: 1.7rem 0 0;
  }
  .snub-header::after {
    display: flex;
    position: absolute;
    top: .3rem;
    bottom: 0;
    right: 0;
    width: 45%;
    content: '';
    height: .15rem;
    background-color: rgb(163, 163, 163);
  }
hr {
  border: none;
  padding: .05rem;
  background-color: rgb(163, 163, 163);
  width: 100%;
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
      width: 70%;
      box-sizing: border-box;
  }
  .page > *:last-child {
      width: 30%;
      visibility: visible;
      padding: 3.5rem 0 0;
      margin: 2rem;
  }
}

.profile .__left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}
.details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
}
.img {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
}
.__img {
    border-radius: 2rem;
    height: 10rem;
    width: 70%;
    outline: none;
    background-color: rgb(66, 75, 102);
}
.tabs .__tab {
    padding: 0 0;
    font-size: .9rem;
}
    .tabs .__tab .__item {
        padding: .5rem 0;
        display: flex;
        justify-content: space-between;
    }
        .tabs .__tab .__item b {
            text-shadow: 0 0 2px grey;
        }
        .tabs .__tab .__item span {
            width: 50%;
            text-align: left;
            text-shadow: 0 0 1px grey;
        }
.__tab .card {
    width: 45%!important;
}
.__tab .v-flex {
    justify-content: flex-start;
}
.__name {
    padding: 0 0 .2rem;
    margin: 0;
    text-shadow: 0 0 2px black;
}
.__subname {
    display: inline-block;
    padding: 0;
    margin: 0 0 1rem;
    color: var(--grey, rgb(163, 162, 162));
}
.text {
    color: var(--gray, grey);
}
.text.has-pseudo::before {
  content: '"';
  font-family: serif;
  font-size: 2rem;
  color: var(--mainColor);
}
.text b {
    font-size: 1.2rem;
    color: var(--gray, grey);
}
.profile .rank .material-icons {
    color: var(--subColor);
    vertical-align: top;
    text-shadow: 0 0 2px var(--subColor);
}
.profile .rank .material-icons.is-not {
    color: rgba(100, 149, 237,0.3);
    text-shadow: 0 0 2px transparent;
}
.profile .links {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: nowrap;
    align-content: space-between;
    align-items: space-between;
}
.profile .links > *:nth-child(even), .tabs .__header > *:nth-child(even) {
    margin: 0 .5rem;
}
.tabs .__header {
    display: flex;
    justify-content: flex-start;
    border-bottom: thin solid lightgrey;
}
    .tabs .__header .__link {
        --border: transparent;
        --color: rgb(156, 155, 155);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: .7rem .3rem;
        text-transform: capitalize;
        color: var(--color);
        border-bottom: .2rem solid var(--border);
        transition: .3s ease-in-out;
        font-weight: bold;
    }
        .tabs .__header .__link .material-icons {margin: 0 .3rem 0 0;}
        .tabs .__header .__link.is-active, .tabs .__header .__link:hover {
            --border: var(--subColor);
            --color: rgb(82, 81, 81);
        }
.profile .rank b {
    font-size: 1.5rem;
    font-weight: bolder;
    margin-right: .5rem;
}
@media (min-width: 1200px) {
  .mobile {
      display: none!important;
  }
  .desktop {
      display: block;
  }
  .profile .__left {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-content: flex-start;
      align-items: flex-start;
      padding: 2rem 1rem 0;
  }
  .img {
      width: 35%;
  }
  .__img {
      border-radius: .3rem;
      height: 15rem;
      width: 100%;
      outline: none;
      background-color: rgb(66, 75, 102);
  }
  .tabs {
      width: 70%;
      margin-left: 5rem;
  }
  .details {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-content: flex-start;
      align-items: flex-start;
      margin-left: 5rem;
  }
  .profile .__right {
      display: flex;
  }
  .profile .__right .quote {
      width: 35%;
      padding: 0 0 0 1rem;
      box-sizing: border-box;
  }
  .profile .section {
      padding: 2rem 0;
  }
  .text {
      text-align: left;
  }
  .toast {
    margin: 0 30vw;
  }
}


@media (prefers-color-scheme: dark) {
  :root {
    --mainColor: #79589b;
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
