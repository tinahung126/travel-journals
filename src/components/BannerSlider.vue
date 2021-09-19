<template>
  <v-container class="banner__wrapper__pc">
    <div>
      <VueSlickCarousel
        class="slick"
        v-bind="settings"
      >
        <div
          v-for="(item,i) in bannersItems"
          :key="i"
          class="carousel__wrapper"
        >
          <div class="img">
            <img
              :src="item.src"
              alt=""
              class="slick__img"
            >
          </div>
          <div class="slick__title">
            <span
              class=" text-body-2 white--text"
            >{{ item.title }}
            </span>
            <span class="mt-2 text-body-2 white--text font-weight-bold">
              更多內容
              <v-icon
                color="white"
                small
              >mdi-chevron-right</v-icon>
            </span>
          </div>
        </div>
        <template #prevArrow="arrowOption">
          <div class="custom-arrow">
            <v-icon>mdi-chevron-left</v-icon>
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
          </div>
        </template>
        <template #nextArrow="arrowOption">
          <div class="custom-arrow">
            {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
            <v-icon>mdi-chevron-right</v-icon>
          </div>
        </template>
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
        // edgeFriction: 0.35,
        arrows: true,
        dots: false,
        infinite: false,
        slidesPerRow: 2,
        touchThreshold: 2,
        slidesToScroll: 1,
        speed: 500,
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
  position: relative;
  padding-right: 5px;
  .img{
    width: calc(100% - 5px);
    height: 100%;
    border-radius: 5px;
    &::after{
      content: '';
      width: calc(100% - 10px);
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 5px;
      background: black;
      opacity: 0;
      transition: opacity 0.3s ease-in;
    }
  }

  .slick__title{
    display: flex;
    flex-direction: column;
    display: none;
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    left: 5%;
    right: 5%;
    flex-wrap: wrap;
    line-height: 16px;
}
  &:hover {
    >.img{
      overflow: hidden;

      &::after{
        opacity: 0.4
      }
      img{
        filter:blur(8px);
    }
    }
    .slick__title {
      display: flex;
  }
  }

}

.slick__img{
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 5px;
}

</style>
