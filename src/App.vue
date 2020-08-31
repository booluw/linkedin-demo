<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    'app-header' : AppHeader
  }
}
</script>


<style>
:root {
  --bg: #f3f8fd;
  --text: #d3dce5;
  --links: #0071d4;
  --illustration-shirt: #fee74a;
  --illustration-line: #767e90;
  --section-bg: #aecce8;
  --jumbotron-bg: #88add9;
}
body {
  font-size: 16px;
  padding: 0;
  margin: 0;
  font-family: 'Montserrat','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;

  background-color: var(--bg);
  color: var(--illustration-line);
}


.input-group {
  display: flex;
  flex-direction: column;
  border-bottom: .09rem solid grey;
  background-color: white;
  padding: 0;
}
.input-group--row {
  flex-direction: row;
}
.input-group--border {
  border: .09rem solid grey;
}

.input-group__input {
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1rem;
  padding: .3rem .7rem;
  margin: 0;
  font-weight: normal;
  font-family: 'Montserrat','Avenir', Helvetica, Arial, sans-serif;
}
.input-group__icon {
  padding: .3rem .3rem;
  margin: 0;
  background-color: grey;
  color: #eee;
}
</style>
