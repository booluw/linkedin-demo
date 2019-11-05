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
          <option value="Mon">Monday</option>
          <option value="Tue">Tuesday</option>
          <option value="Wed">Wednesday</option>
          <option value="Thu">Thursday</option>
          <option value="Fri">Friday</option>
          <option value="Sat">Saturday</option>
          <option value="Sun">Sunday</option>
        </select>
      </div>
      <div class="input-group">
        <label for="level">Level</label>
        <select name="day" id="day">
          <option value="PD">Pre Degree</option>
          <option value="IJMB">IJMB</option>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
        </select>
      </div>
      <div class="input-group">
        <label for="level">Faculty</label>
        <select name="day" id="day">
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
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
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
  align-items: center;
  text-align: center;
  padding: 0 .5rem 2rem;
}
.section .text {
  font-size: 1.2rem;
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
    padding: 0 10rem 2rem;
  }
  .section .text {
    font-size: 1.3rem;
  }
}
</style>