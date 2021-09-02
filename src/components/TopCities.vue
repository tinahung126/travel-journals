<template>
  <v-container
    class="ma-0"
  >
    <h2>探索熱門城市</h2>
    <VueSlickCarousel
      class="slick"
      v-bind="settings"
    >
      <div
        v-for="(item,i) in Items"
        :key="i"
        class="slick__item "
      >
        <img
          :src="item.url"
          alt=""
          class="slick__img card-shadow"
        >
        <div class="img-overlay" />
        <div
          class="slick__title d-flex flex-column"
        >
          <span
            class="text-h6 "
          >{{ item.title }}</span>
          <span class="text-subtitle-2">{{ item.subtitle }}</span>
        </div>
      </div>
    </VueSlickCarousel>
  </v-container>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import citiesList from './../../public/jsonFiles/citiesList.json'
export default {
  name: 'TopCities',
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      Items: citiesList,
      settings: {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        touchThreshold: 5,
        speed: 500,
        centerPadding: '0px',
        variableWidth: true

      }
    }
  }

}
</script>
<style  lang="scss" scoped>
@import '../assets/scss/main.scss';
.slick__img{
  width: 150px;
  object-fit: cover;
  border-radius: 5px;
  position: relative;

}

.slick__item{
  position: relative;
  &::after{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    background: linear-gradient(to bottom,transparent 50%, rgba(0,0,0,0.6));
    width: 150px;
    aspect-ratio: 1 / 1;
    z-index: 0;
    border-radius: 5px;
  }
  .slick__title{
     z-index: 1;
    position: absolute;
    color: white;
    bottom: 5%;
    left: 5%;
  }

}

</style>
