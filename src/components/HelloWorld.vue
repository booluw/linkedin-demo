<template>
  <div class="main">
    <div class="jumbotron">
      <h1>Attend tutorials.</h1>
      <h1>Tutor fellow Futmites.</h1>
      <h1>All on <b class="tut">tutera</b>.</h1>
      <div class="jumbotron__bottom">
        Find tutorials, both <b>free</b> and <b>paid</b>
        <a href="/explore" class="btn">Explore tutorials</a>
        <br />
        Take fellow <b>Futmites</b> on tutorials
        <br />
        <a href="/create" class="btn btn--outline">Create tutorials</a>
      </div>
    </div>
    <div class="jumba">
      Watch the Introductory video.
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {

    }
  },
  mounted: function() {
    
  },
  methods: {
    
  },
  computed: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
}
.jumbotron {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: 0;
  padding: 1rem .5rem;
  width: 100%;
  height: 65vh;
  background-color: var(--mainColor);
  color: white;
}
.jumba {
  display: none;
}
h1 {
  padding: .25rem 0;
  margin: 0;
  font-size: 1.5rem;
  font-weight: normal;
}
.jumbotron__bottom {
  padding: 3rem 0;
}
.jumbotron a { 
  color: grey;
}
.btn {
  width: 15rem;
  color: var(--mainColor)!important;
  text-shadow: 0 0 3px black;
  background-color: white;
  transition: .3s ease-in;
  border: 3px solid white;
  text-align: center;
}
.btn--outline {
  border: 3px solid white;
  background-color: transparent;
  color: white!important;
}
.btn--outline:hover {
  border-color: white;
  background-color: white;
  color: var(--mainColor)!important;
}
.tut {
  text-shadow: 0 0 3px black;
}
.jumba {
  display: none;
}
@supports (background-clip: text) {
	.tut {
		background: -webkit-gradient(linear, left top, left bottom, from(white), to(var(--subColor)));
		background: linear-gradient(white, var(--subColor));
		background-clip: text;
		-webkit-text-fill-color: transparent;
    text-shadow: none;
	}
}
@media (min-width: 1200px) {
  .jumbotron {
    padding: 5rem 2.5rem;
    height: 85vh;
  }
  .jumbotron__bottom {
    padding: 10vh 0;
    font-size: 1.6rem;
  }
  h1 {
    font-size: 2.5rem;
  }
  .btn {
    margin: 1rem 0;
    padding: .6rem 1.5rem;
    width: 20rem;
    font-size: 1.5rem;
  }
  .jumba {
    display: block;
    background-color: var(--mainColor);
    color: grey;
    font-weight: bolder;
    width: 50%;
    padding: 20% 5%;
  }
}
</style>
