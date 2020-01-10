<template>
  <div class="container">
    <div class="jumbotron">
      <h1>Attend tutorials.</h1>
      <h1>Tutor fellow FUTMites.</h1>
      <h1>All on <b class="tut">tutera</b>.</h1>
      <div class="jumbotron__bottom">
        Find tutorials happening on both campuses,
        <router-link to="/explore" class="btn">Explore tutorials</router-link>
        <br />
        Take fellow <b>FUTMites</b> on tutorials,
        <br />
        <router-link to="/create" class="btn is-outlined">Create tutorials</router-link>
      </div>
    </div>
    <div class="jumba">
      <div class="curved"></div>
      <div class="curved-2">
        <img src="../assets/jumbo_img.jpg" class="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  position: relative;
  display: flex;
  background-color: var(--mainColor);
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
  .btn.is-outlined {
    border: 3px solid white;
    background-color: transparent;
    color: white!important;
  }
    .btn.is-outlined:hover {
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
    display: flex;
    flex-direction: column;
    padding: 2rem 2.5rem;
    height: 85vh;
  }
  .jumbotron__bottom {
    padding: 10vh 0;
    font-size: 1.2rem;
  }
  h1 {
    font-size: 2rem;
  }
  .btn {
    margin: 1rem 0;
    padding: .6rem 1.5rem;
    width: 20rem;
    font-size: 1.5rem;
  }
  .jumba {
    display: block;
    background-color: transparent;
    color: grey;
    font-weight: bolder;
    width: 50%;
  }
  .curved {
    position: absolute;
    top: -15rem;
    bottom: 0;
    width: 100%;
    height: 150%;
    background-color: #F5F8FF;
    transform: rotate(30deg);
    border-radius: 2rem;
  }
  .curved-2 {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 80%;
    color: black;
    transform: rotate(0deg);
    border-radius: 2rem;
  }
  .img {
    height: 50%;
    width: auto;
  }
}
</style>
