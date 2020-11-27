<template>
  <header class="header">
    <div class="header__group">
      <img src="@/assets/img/avatar.jpg" class="header__img no-desktop" alt="User's Image">
      <img src="@/assets/img/logo.svg" class="header__logo" alt="LinkedIn logo">
      <div class="input-group">
        <label for="search" class="input-group__label">
          <i class="material-icons">search</i>
        </label>
        <input type="text" class="input-group__input" placeholder="Search" />
      </div>
    </div>
    <nav class="header__nav no-desktop">
      <a href="#" class="nav__link">
        <i class="material-icons">message</i>
      </a>
    </nav>
    <nav class="header__nav mobile--absolute">
      <a href="#" class="nav__link">
        <i class="material-icons">home</i>
        <div>Home</div>
      </a>
      <a href="#" class="nav__link">
        <i class="material-icons">people</i>
        <div>My Network</div>
      </a>
      <a href="#" class="nav__link no-desktop">
        <i class="material-icons">add_circle_outline</i>
        <div>Post</div>
      </a>
      <a href="#" class="nav__link no-mobile">
        <i class="material-icons">message</i>
        <div>Messaging</div>
      </a>
      <a href="#" class="nav__link">
        <i class="material-icons">notifications</i>
        <div>Notifications</div>
      </a>
      <a href="#" class="nav__link">
        <i class="material-icons">work</i>
        <div>Jobs</div>
      </a>
      <a class="no-mobile nav__link">
        <img src="@/assets/img/avatar.jpg" class="header__img header__img--small" alt="User's Image">
        <div>Me&nbsp;&nbsp;&nbsp;</div>
      </a>
    </nav>
    <div class="nav--last no-mobile">
      Hello
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>