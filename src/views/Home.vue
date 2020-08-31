<template>
  <div class="home">
    <jumbo-tron />
    <section class="section">
      <h2 class="heading">Get help choosing the best company to work for, in 3 steps.</h2>
      <section class="section section--absolute">
        <div class="card card--iconed">
          <div class="card__icon">1</div>
          <h3 class="card__heading">search organisation</h3>
          <p class="card__description">
            Search through our organisation listing to get reviews about their company structure and how it relates to
            you as an employee.
          </p>
        </div>
        <div class="card card--iconed">
          <div class="card__icon">2</div>
          <h3 class="card__heading">check reviews</h3>
          <p class="card__description">
            Browse through reviews from real employees about your searched organisation to get yourself acquitted with 
            the company culture before you resume
          </p>
        </div>
        <div class="card card--iconed">
          <div class="card__icon">3</div>
          <h3 class="card__heading">write a review</h3>
          <p class="card__description">
            Help others too, write a review of your interview process to help others too.
            Together we can build a better work environment for ourselves.
          </p>
        </div>
      </section>
    </section>
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