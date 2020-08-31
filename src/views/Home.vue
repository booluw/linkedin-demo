<template>
  <div class="home">
    <jumbo-tron />
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/jumbotron.vue'

export default {
  name: 'home',
  components: {
    'jumbo-tron': Jumbotron
  }
}
</script>
<style>

</style>