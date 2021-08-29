<template>
  <v-container class="banner__wrapper">
    <div>
      <VueSlickCarousel
        class="slick"
        v-bind="settings"
        :dots="true"
      >
        <div
          v-for="(item,i) in bannersItems"
          :key="i"
        >
          <img
            :src="item.src"
            alt=""
            class="slick__img"
          >
        </div>
      </VueSlickCarousel>
    </div>
  </v-container>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {

  name: 'BannerSlider',
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '30px',
        focusOnSelect: true

      },
      bannersItems: [
        { id: 1, src: 'https://image.kkday.com/v2/image/get/w_1024%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1545/20210723071945_wosHW/png' },
        { id: 2, src: 'https://image.kkday.com/v2/image/get/w_1024%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1545/20210822140328_PJuAs/jpg' },
        { id: 3, src: 'https://image.kkday.com/v2/image/get/w_1024%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1759/20210819035307_sZxbf/jpg' },
        { id: 4, src: 'https://image.kkday.com/v2/image/get/w_1024%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1774/20210806083019_41rGt/png' },
        { id: 5, src: 'https://image.kkday.com/v2/image/get/w_1024%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1760/20210729113053_56JfS/png' },
        { id: 6, src: 'https://image.kkday.com/v2/image/get/w_1024%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1545/20210723073547_uMyfx/jpg' }
      ]
    }
  }

}

</script>
<style  lang="scss">
@import '../assets/scss/main.scss';
.slick-list{
  padding: 0 !important;
}
.slick__img{
  width: 315px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
}

</style>
