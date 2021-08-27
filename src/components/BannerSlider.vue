<template>
  <v-container class="banner__wrapper">
    <swiper
      :slides-per-view="3"
      :space-between="50"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      ...
    </swiper>
  </v-container>
</template>
<script>

export default {
  name: 'BannerSlider',
  components: {

  },
  data () {
    return {

      bannersItems: [
        { src: 'https://image.kkday.com/v2/image/get/w_1024%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1545/20210723071945_wosHW/png' },
        { src: 'https://image.kkday.com/v2/image/get/w_1024%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1545/20210822140328_PJuAs/jpg' },
        { src: 'https://image.kkday.com/v2/image/get/w_1024%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1759/20210819035307_sZxbf/jpg' },
        { src: 'https://image.kkday.com/v2/image/get/w_1024%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1774/20210806083019_41rGt/png' },
        { src: 'https://image.kkday.com/v2/image/get/w_1024%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1760/20210729113053_56JfS/png' },
        { src: 'https://image.kkday.com/v2/image/get/w_1024%2Cc_fit%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1545/20210723073547_uMyfx/jpg' }
      ]
    }
  }
}

</script>
<style scoped lang="scss">
@import '../assets/scss/main.scss';

.banner__wrapper{
  .v-carousel{
    border-radius: 10px;
    position: relative;
  .v-carousel-item{
    width: 315px;
    height: auto;

    .v-carousel__controls{
      position: absolute;
      bottom: -30px!important;
      left: 50px;
    }
  }
  }
}

</style>
