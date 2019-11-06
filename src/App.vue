<template>
  <div id="app">
    <page-header />
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/theHeader.vue";

export default {
  components: {
    'page-header' : Header
  },
  data () {
    return {

    }
  },
  methods: {

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
  --subColor: #6495ed;
  --cta: #ffa500;
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
.v-flex {
  display: flex;
  overflow-x: auto;
  height: auto;
  -webkit-overflow-scrolling: touch;
  -webkit-scroll-snap-type: mandatory;
  -ms-scroll-snap-type: mandatory;
  scroll-snap-type: mandatory;
  padding: 1rem 0;
}
.v-flex::-webkit-scrollbar {
    width: .3rem;
    height: .5rem;
}
.v-flex::-webkit-scrollbar-thumb {
    background-color: rgba(100, 149, 237,.5);
    border-radius: 100rem;
    box-shadow: inset 0 0 5px rgba(0,0,0,.3);
    transition: .3s background-color ease-in-out;
}
.v-flex::-webkit-scrollbar-thumb:hover {
    background-color: rgba(100, 149, 237,.2);
}
.v-flex > * {
  flex-shrink: 0; 
}
/*======================
          AddOn
======================*/
.material-icons {
  vertical-align: middle;
}
h1.main {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 2.5rem;
  position: relative;
  text-align: center;
  padding: 1rem 0;
  color: var(--headerText);
}
h1.main:after {
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
  padding: .5rem 1rem;
  margin: .5rem 0;
  border-radius: var(--borderRadius);
  cursor: pointer;
  font-weight: bolder;
}
.btn-link {
  color: var(--mainColor);
  border: 2px solid var(--mainColor);
  padding: 1rem 6rem!important;
}
.btn-link:hover {
  background-color: var(--mainColor);
  color: white;
}
.danger {
  background-color: crimson;
  color: white;
  opacity: .8;
  transition: .3s ease-in-out;
  text-shadow: 0 0 5px black;
}
.danger:hover {opacity: 1;}
.input-group {
  display: flex;
  flex-direction: column;
  color: rgba(0,0,0,.6);
}
.input-group input, .input-group select {
  padding: .5rem;
  margin: .1rem 0;
  background-color: rgba(100, 149, 237,0.05);
  border: 1.5px solid rgba(0,0,0,.3);
  border-radius: var(--borderRadius);
  cursor: pointer;
}
.input-group input:hover, .input-group select:focus {
  border-color: var(--subColor);
  box-shadow: 0 0 10px 1px var(--subColor);
  outline: none;
}
@media (min-width: 1200px) {
  .btn {
    padding: .5rem 1rem;
  }
}
</style>
