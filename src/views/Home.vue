<template>
  <div class="main__comtainer">
    <div class="hero__wrapper">
      <hero class="hero__wrapper__bg" />
    </div>
    <div class="menu__wrapper my-8">
      <Menu />
      <EventCategory />
      <BannerSlider />
    </div>
  </div>
</template>

<script>
import Hero from './../components/Hero.vue'
import Menu from './../components/Menu.vue'
import EventCategory from './../components/EventCategory.vue'
import BannerSlider from './../components/BannerSlider.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Menu,
    EventCategory,
    BannerSlider
  }

}
</script>
<style scoped lang="scss">
@import '../assets/scss/main.scss';

</style>
