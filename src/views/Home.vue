<template>
  <div
    class="main__container"
  >
    <section
      class="mt-12 d-none d-sm-block"
    >
      <MenuBar />
    </section>
    <section class="hero__wrapper">
      <hero />
    </section>
    <div class="menu__wrapper mt-8 px-0">
      <Menu class="sd-flex d-sm-none" />
      <EventCategory />
      <BannerSlider class="d-none d-sm-block" />
      <BannerSliderMb class="d-block d-sm-none" />
      <SearchNearByBanner class="mt-8 d-block d-sm-none" />
      <TopCities class="d-none d-sm-block" />
      <TopCitiesMb class="d-block d-sm-none " />
      <TopProducts class="d-none d-sm-block" />
      <TopProductsMb class="d-block d-sm-none " />
      <section class="whykkday mt-16 pt-14 pb-8 d-none d-sm-block">
        <WhyKKday />
      </section>
      <section class="footer">
        <FooterLinks />
        <Footer />
      </section>
    </div>
  </div>
</template>

<script>
import Hero from './../components/Hero.vue'
import Menu from './../components/Menu.vue'
import MenuBar from './../components/MenuBar.vue'
import SearchNearByBanner from './../components/SearchNearByBanner.vue'
import EventCategory from './../components/EventCategory.vue'
import BannerSlider from './../components/BannerSlider.vue'
import BannerSliderMb from './../components/BannerSliderMb.vue'
import TopCities from '@/components/TopCities.vue'
import TopCitiesMb from '@/components/TopCitiesMb.vue'
import TopProducts from './../components/TopProducts.vue'
import TopProductsMb from './../components/TopProductsMb.vue'
import WhyKKday from './../components/WhyKKday.vue'
import FooterLinks from './../components/FooterLinks.vue'
import Footer from './../components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Hero,
    Menu,
    EventCategory,
    BannerSlider,
    BannerSliderMb,
    SearchNearByBanner,
    TopCities,
    TopCitiesMb,
    TopProducts,
    TopProductsMb,
    WhyKKday,
    FooterLinks,
    Footer,
    MenuBar
  },
  data () {
    return {
    }
  }

}
</script>
<style scoped lang="scss">
@import '../assets/scss/main.scss';
.whykkday{
  background: $bg-gray;
}

</style>
