<template>
  <v-container class="banner__wrapper ma-1">
    <div>
      <VueSlickCarousel
        class="slick"
        v-bind="settings"
        :dots="true"
      >
        <div
          v-for="(item,i) in bannersItems"
          :key="i"
          class="carousel__wrapper"
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

export default {

  name: 'BannerSlider',
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      settings: {
        dots: true,
        dotsClass: 'slick-dots',
        // edgeFriction: 0.35,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        touchThreshold: 5,
        speed: 500,
        centerPadding: '0px',
        variableWidth: true,
        touchMove: true

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
<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.carousel__wrapper{
  width: 315px;
}
.slick-slide {
  padding-right:5px !important;
}
.slick__img{
  width: 315px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
}

</style>
