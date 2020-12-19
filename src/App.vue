<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />
    <div class="message-panel no-mobile">
      <div>
        <img src="@/assets/img/avatar.jpg" class="message-panel__img" />
        <h4>Messaging</h4>
      </div>
      <div class="message-panel__icons">
        <i class="material-icons">edit</i>
        <i class="material-icons">more_horiz</i>
        <i class="material-icons">keyboard_arrow_up</i>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter 
  }
}
</script>