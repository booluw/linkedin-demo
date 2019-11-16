<template>
  <div class="home">
    <HelloWorld />
    <form action="/" class="i-search">
      <div class="input-group">
        <label for="campus">Campus</label>
        <select name="campus" id="campus">
          <option value="BS">Bosso</option>
          <option value="GK">Gidan Kwano</option>
        </select>
      </div>
      <div class="input-group">
        <label for="day">Day</label>
        <select name="day" id="day">
          <option value="1">Monday</option>
          <option value="2">Tuesday</option>
          <option value="3">Wednesday</option>
          <option value="4">Thursday</option>
          <option value="5">Friday</option>
          <option value="6">Saturday</option>
          <option value="0">Sunday</option>
        </select>
      </div>
      <div class="input-group">
        <label for="level">Level</label>
        <select name="level" id="level">
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
        </select>
      </div>
      <div class="input-group">
        <label for="faculty">Faculty</label>
        <select name="faculty" id="faculty">
          <option value="SICT">SICT</option>
          <option value="SPS">SPS</option>
          <option value="SLS">SLS</option>
          <option value="SIPET">SIPET</option>
          <option value="SEET">SEET</option>
          <option value="SAAT">SAAT</option>
          <option value="SEMT">SEMT</option>
          <option value="SSTE">SSTE</option>
          <option value="SET">SET</option>
        </select>
      </div>
      <button type="submit" class="btn danger">Search</button>
    </form>
    <section class="section">
      <h1 class="main">For students, by students</h1>
      <p class="text">
        Tutera is an open platform for anyone that cares to attend and organise tutorials.
        We help connect you to wonderful tutorials that are worth attending for adequate understanding
        and comprehensive knowledge of your course topics.
      </p>
    </section>
    <section class="section" style="background-color: rgba(100, 149, 237,0.1);">
      <h2 class="brief">Recommended for you</h2>
      <p class="helperText">
        Tutorials worth attending, as recommended by fellow Futmites.
      </p>
      <div class="h-flex">
        <page-card v-for="(tutorial, index) in tutorials" :key="index" :detail="tutorial" />
      </div>
      <div class="footer">
        <router-link to="/explore#recommended" class="btn btn-link">See all</router-link>
      </div>
    </section>
    <section class="section">
      <h1 class="main">Don't settle for less, do more</h1>
      <p class="text">
        Our mission is to help Futmites excel academically. This means helping you find effective tutorials
        for every course and providing tutors with adequate information they need for tutorials to run effectively.
      </p>
    </section>
    <section class="section" style="background-color: rgba(100, 149, 237,0.1);">
      <h2 class="brief">Everywhere in FutMinna</h2>
      <p class="helperText">
        Tutorial locations across both campuses.
      </p>
      <div class="h-flex">
        <small-card v-for="(location, index) in locations" :key="index" :detail="location" />
      </div>
      <div class="footer">
        <router-link to="/locations" class="btn btn-link">All locations</router-link>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Card from '@/components/helperComponents/theCard.vue'
import SmallCard from '@/components/helperComponents/smallCard.vue'

import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    HelloWorld,
    'page-card' : Card,
    'small-card' : SmallCard
  },
  computed: {
    ...mapState([
      'tutorials',
      'locations'
    ])
  },
  data() {
    return {
      
    }
  }
}
</script>
<style>
.i-search {
  display: flex;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1rem .5rem;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  background-color: rgba(100, 149, 237,0.1);
}
.i-search > * {
  margin: 0 .2rem;
  width: 45%;
}
.i-search button.btn {
  margin: .5rem 0;
  border: none;
  padding: .7rem 5rem!important;
  width: 93%;
}
.section {
  display: flex;
  flex-direction: column;
  padding: 2rem 0 2rem .5rem;
}
.section .text {
  font-size: 1.2rem;
  text-align: center;
}
.section .helperText {
  font-size: 1.2rem;
  padding: .05rem 0;
}
.section .footer {
  display: flex;
  justify-content: center;
}
@media (min-width: 1200px) {
  .i-search {
    padding: 2rem;
  }
  .i-search > * {
    width: 15%;
  }
  .i-search select {
    padding: .7rem .5rem;
  }
  .i-search button.btn {
    width: 30%;
    padding: .85rem .5rem!important;
    margin: 0 0 0 4.5rem!important;
  }
  .section {
    padding: 2rem 2rem;
  }
  .section .text {
    font-size: 1.3rem;
    padding: 0 10rem 2rem;
  }
}
</style>