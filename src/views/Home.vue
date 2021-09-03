<template>
  <div class="main__comtainer">
    <div class="hero__wrapper">
      <hero class="hero__wrapper__bg" />
    </div>
    <div class="menu__wrapper my-8 px-sm-12 px-md-0">
      <Menu />
      <EventCategory />
      <BannerSlider />
      <SearchNearByBanner class="mt-8" />
      <TopCities />
      <TopProducts />
      <FooterLinks />
    </div>
    <section>
      <Footer />
    </section>
  </div>
</template>

<script>
import Hero from './../components/Hero.vue'
import Menu from './../components/Menu.vue'
import SearchNearByBanner from './../components/SearchNearByBanner.vue'
import EventCategory from './../components/EventCategory.vue'
import BannerSlider from './../components/BannerSlider.vue'
import TopCities from '@/components/TopCities.vue'
import TopProducts from './../components/TopProducts.vue'
import FooterLinks from './../components/FooterLinks.vue'
import Footer from './../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Hero,
    Menu,
    EventCategory,
    BannerSlider,
    SearchNearByBanner,
    TopCities,
    TopProducts,
    FooterLinks,
    Footer
  }

}
</script>
<style scoped lang="scss">
@import '../assets/scss/main.scss';

</style>
