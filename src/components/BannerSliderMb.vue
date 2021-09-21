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
          class="carousel__wrapper"
        >
          <img
            :src="item.src"
            alt=""
            class="slick__img"
          >
          <span
            class="slick__title text-body-2 white--text font-weight-bold text-center"
          >{{ item.title }}</span>
        </div>
      </VueSlickCarousel>
    </div>
  </v-container>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import promoBanner from './../../public/jsonFiles/promoBanner.json'

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
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true,
        touchThreshold: 5,
        speed: 500,
        centerPadding: '0px',
        centerMode: true,
        variableWidth: true,
        touchMove: true

      },
      bannersItems: promoBanner
    }
  }

}

</script>
<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.carousel__wrapper{
  width: 315px;
  position: relative;
  .slick__title{
    position: absolute;
    bottom: 20px;
    left: 15%;
    right: 15%;
    text-shadow: 0 1px 2px rgb(0 0 0 / 60%);

}
}
.slick{
  cursor: pointer;
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
.slick-current {
  img{
    height: 165px;
  }
}
.slick-cloned{
  img{
    height: 150px;
  }
}
</style>
