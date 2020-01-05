<template>
  <div class="home">
    <HelloWorld />
    <form action="/" class="i-search">
      <div class="input-group">
        <label for="campus" class="label">Campus</label>
        <select name="campus" id="campus" class="input">
          <option value="BS">Bosso</option>
          <option value="GK">Gidan Kwano</option>
        </select>
      </div>
      <div class="input-group">
        <label for="day" class="label">Day</label>
        <select name="day" id="day" class="input">
          <option value="Mondays">Monday</option>
          <option value="Tuesdays">Tuesday</option>
          <option value="Wednesdays">Wednesday</option>
          <option value="Thursdays">Thursday</option>
          <option value="Fridays">Friday</option>
          <option value="Saturdays">Saturday</option>
          <option value="Sundays">Sunday</option>
        </select>
      </div>
      <div class="input-group">
        <label for="level" class="label">Level</label>
        <select name="level" id="level" class="input">
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
        </select>
      </div>
      <div class="input-group">
        <label for="faculty" class="label">Faculty</label>
        <select name="faculty" id="faculty" class="input">
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
      <button type="submit" class="btn is-primary">Search Tutorials</button>
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
      <h1 class="main">Don't settle for less, get more</h1>
      <p class="text">
        Our mission is to help Futmites excel academically. This means helping you find effective tutorials
        for every course and providing tutors with adequate information they need for tutorials to run effectively.
      </p>
    </section>
    <section class="section" style="background-color: rgba(100, 149, 237,0.1);">
      <h2 class="brief">Everywhere in FUTMinna</h2>
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
    <section class="section">
      <h1 class="main">Every information, you'll need</h1>
      <p class="text">
        To make life a lil bit easier for you, we provide every information concerning every tutorial listed here on <b>tutera</b>;
        time and venue of tutorials, size of halls, availability of halls, location guide to halls and even more.
      </p>
    </section>
    <section class="section" style="background-color: rgba(100, 149, 237,0.1);">
      <h2 class="brief">Hall availability</h2>
      <p class="helperText">
        Is that hall availabile? Let's help you check.
      </p>
      <form action="/" class="hall-search">
        <input type="text" name="hall" />
        <button type="submit" class="btn is-primary">Check Availability</button>
      </form>
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
  align-items: stretch;
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
  padding: 1rem 0 0;
}
.hall-search {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hall-search input {
  font-size: 1rem;
  box-sizing: border-box;
  width: 50%;
  padding: .7rem 1rem;
  border-radius: .3rem;
  outline: none;
  border: thin solid var(--subColor);
  transition: .3s ease-in-out;
}
.hall-search input:focus {
  box-shadow: 0 0 5px 2px var(--subColor);
}
.hall-search button {
  width: 30%;
  padding: 1rem;
  border: none;
  margin: 1rem 0 0;
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