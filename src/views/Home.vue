<template>
  <div class="home">
    <Jumbotron />
    <form action="/" class="i-search">
      <div class="input-group">
        <label for="level" class="label">Level</label>
        <select name="level" id="level" class="input">
          <template v-for="level in levels">
            <option :value="level" :key="level">{{level}}</option>
          </template>
        </select>
      </div>
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
      <button type="submit" class="btn is-primary">Search Tutorials</button>
    </form><br /><br /><br />
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
        <location-card v-for="(location, index) in locations" :key="index" :detail="location"></location-card>
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
import Jumbotron from '@/components/AppJumbotron.vue'
import Card from '@/components/AppCard.vue'
import LocationCard from '@/components/LocationCard.vue'

import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    Jumbotron,
    'page-card' : Card,
    'location-card' : LocationCard
  },
  computed: {
    ...mapState([
      'tutorials',
      'locations',
      'levels'
    ])
  },
  metaInfo: {
    //Home does not have t own title, since BaseTitle is enough 
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
  align-items: center;
  justify-content: space-evenly;
}
.i-search > * {
  margin: .5rem .2rem;
  width: 25%;
}
.i-search button.btn {
  margin: .5rem 0;
  border: none;
  padding: .7rem 5rem;
  width: 93%;
  opacity: .7;
  text-transform: uppercase;
}
.i-search button.btn:hover {
  opacity: 1;
}
.i-search > .input-group .label {
  background-color: transparent;
  color: var(--mainColor);
  font-weight: bolder;
}
.section {
  display: flex;
  position: relative;
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
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2rem;
    padding: 2rem .5rem;
    background-color: white;
    margin: 2rem 2rem -5rem;
    box-shadow: 0 0 15px 15px var(--mainSubtile);
    border-radius: .3rem;
  }
  .i-search > * {
    width: 15%;
  }
  .i-search select {
    padding: .7rem .5rem;
  }
  .i-search button.btn {
    width: 30%;
    padding: 1.5rem .5rem;
    margin: 0 0 0 4.5rem;
  }
  .section {
    padding: 2rem 2rem;
    margin: 2rem 2.5rem;
    box-shadow: 0 0 20px 5px var(--mainSubtile);
    border-radius: .3rem;
  }
  .section .text {
    font-size: 1.3rem;
    padding: 0 10rem 2rem;
  }
}
</style>