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
@import './assets/scss/main.scss';

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
.slick-track{
  display: flex !important;
  align-items: center !important;
}
.slick-dots{
  padding-left: 0!important;
}
  .v-icon{
    &.mdi-magnify{
      color: $cyan !important;
    }
  }

.v-overlay__scrim{
  position: fixed;
}
.hero__container__search__searchbar{
  .v-input__slot{
    padding-right:0px !important;

  }
.v-input__append-inner{
    width: 10%;
    height: 48px;
  .v-input__icon--append {
    background: $cyan;
    width: 10%;
    height: 48px;
    border-radius: 0 3px 3px 0!important;
    .v-icon {
      &.mdi-magnify{
        color: white !important;
      }

    }
  }
  }
}

</style>
