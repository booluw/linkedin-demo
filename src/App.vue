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
  color: black;
}

/*

== LAYOUTS

*/


.section {
  padding: .7rem .5rem;
  position: relative;
}

.section--absolute {
  position: absolute;
  left: -.5rem;
  right: 0;
  background: var(--section-bg);
  padding-left: 1rem;
  margin-right: .7rem;
  border-radius: 0 .3rem .3rem 0;
}


/*

== END OF LAYOUTS

*/
/*

== COMPONENTS

*/
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

.card {
  position: relative;
  background-color: var(--bg);
  padding: 1rem .5rem;
  border-radius: .3rem;
  box-shadow: 3px 3px 5px grey;
}
  .card--iconed {
    padding: .5rem 1rem 1rem;
    margin: 1.5rem 0 2rem 1rem;
  }
.card__icon {
  position: absolute;
  top: -1.25rem;
  left: -.7rem;

  width: 51px;
  padding: .6rem 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--jumbotron-bg);
  border-radius: 50%;
  border: .2rem solid var(--bg);
  font-size: 1.3rem;
  font-weight: bold;
  box-sizing: border-box;
}

</style>
