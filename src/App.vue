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
:root {
  --mainColor: #663399;
  --subColor: #6495ed;
  --cta: #ffa500;
  --borderRadius: .3rem;
  --boxShadow: 0 0 5px 3px grey;
}
body {
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
/*======================
          AddOn
======================*/
h1.main {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
  font-size: 1.9rem;
  position: relative;
  text-align: center;
  padding: 1rem 0;
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
.btn {
  display: block;
  padding: .5rem 1rem;
  margin: .5rem 0;
  border-radius: var(--borderRadius);
  cursor: pointer;
}
.danger {
  background-color: crimson;
  color: white;
  font-weight: bold;
  opacity: .8;
  transition: .3s ease-in-out;
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
