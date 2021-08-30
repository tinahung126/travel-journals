<template>
  <v-app>
    <v-main>
      <Navbar class="navbar" />

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
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
.slick-slide {
  padding-right:10px !important;
}
/* the parent */
.slick-list{
  padding-left: 0px;
}
</style>
