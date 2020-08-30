<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  
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
</style>
