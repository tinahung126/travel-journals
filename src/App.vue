<template>
  <v-app>
    <v-main>
      <Navbar class="navbar" />

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }

}
</script>
<style lang="scss">
.navbar{
  position: fixed;
  width: 100%;
  z-index: 999;
}
</style>
