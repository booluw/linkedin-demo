<template>
  <header class="header">
    <router-link to="/" class="header__logo">Corprank</router-link>
    <input type="checkbox" id="menu" class="menu-drawer"/>
    <label for="menu" class="hamburger">
      <div class="hamburger__line"></div>
      <div class="hamburger__line"></div>
      <div class="hamburger__line"></div>
    </label>
    <nav class="header__nav">
      <div class="nav__header">
        <router-link to="/" class="header__logo">Corprank</router-link>
        <label class="nav__header__label" for="menu">Close</label>
      </div>
      <router-link to="" class="nav__item">about</router-link>
      <router-link to="" class="nav__item">sign in</router-link>
      <router-link to="" class="nav__item">support</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header {
  padding: .7rem .5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--jumbotron-bg);
}
.header__logo {
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
  letter-spacing: .1rem;
  font-size: 1.5rem;
}
.menu-drawer {display:none;}
.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2rem;
  cursor: pointer;
}
.hamburger__line {
  padding: .125rem;
  margin: .1rem 0;
  background-color: #d0e8ff;
  transition: .1s ease-in-out;
  width: 60%;
}
.hamburger__line:nth-of-type(odd) {
  width: 70%;
  transition: .3s ease;
}
.menu-drawer:checked + .hamburger .hamburger__line:nth-of-type(even) {
  transform: translateX(100%);
  opacity: 0;
}
.menu-drawer:checked + .hamburger .hamburger__line:first-of-type {
  transform: rotate(40deg) translate(-1px, -3px);
  transform-origin: left;
  width: 100%;
}
.menu-drawer:checked + .hamburger .hamburger__line:last-of-type {
  transform: rotate(-40deg) translate(-3px, 1px);
  transform-origin: left;
  width: 100%;
}
@keyframes menu {
  from {
    left: 100%;
  }
  to {
    left: 0;
  }
}
.menu-drawer:checked ~ .header__nav {
  display: flex;
  animation: menu .5s ease-in-out;
}
.header__nav {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;

  flex-direction: column;
  justify-content: flex-end;
  background-color: var(--illustration-shirt);
  padding: 0 .5rem 5rem;
  transition: left .3s cubic-bezier(0.39, 0.575, 0.565, 1);
}
.nav__header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(225, 225, 225, .2);
  padding: .7rem .5rem;
}
.nav__header__label {
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: bold;
  transition: .3s ease-in-out;
}
.nav__header__label:hover {
  opacity: .6;
}
@keyframes nav_item {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.nav__item {
  font-size: 2rem;
  margin: .5rem 0;
  text-decoration: none;
  color: var(--links);
  font-weight: bold;
  position: relative;
  display: block;

  animation: nav_item 1.5s ease;
  transition: .5s ease;
  animation-delay: .5s;
}
.nav__item::after {
  content: "";
  height: .2rem;
  position: absolute;
  bottom: -.5rem;
  left: 0;
  width: 5rem;
  transition: .1s ease-out;
}
.nav__item:hover::after {
  background-color: var(--links);
  animation: linkSlide .1s ease-in;
}

@keyframes linkSlide {
  from {
    left: -2rem;
  }
  to {
    left: 0;
  }
}
</style>