<template>
  <section class="jumbotron">
    <h1 class="jumbotron__heading heading">What organisation are you looking for?</h1>
    <input type="search" placeholder="Name of the organisation" name="name-of-the-organisation" class="jumbotron__input" />
  </section>
</template>

<script>
export default {
  name: 'Jumbotron'
}
</script>

<style scoped>
.jumbotron {
  height: 80vh;
  background: linear-gradient(-45deg,
   var(--links),
   var(--jumbotron-bg),
   var(--section-bg),
   var(--text)
  );
  background-size: 400% 400%;
  animation: gradient 30s ease infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--bg);
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.jumbotron__heading {
  padding: 0;
  margin: 0;
  text-align: center;
}

.jumbotron__input {
  width: 90%;
  padding: .7rem 1rem;
  margin: 2rem 0;
  text-align: center;
  font-size: 1rem;
  font-family: 'Montserrat','Avenir', Helvetica, Arial, sans-serif;
  transition: .2s ease-in-out;
}
</style>