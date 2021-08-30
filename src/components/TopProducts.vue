<template>
  <v-container
    class="ma-0"
  >
    <h2> Top 10 熱門商品</h2>

    <VueSlickCarousel
      class="slick"
      v-bind="settings"
    >
      <div
        v-for="item in items"
        :key="item.rank"
      >
        <v-card
          :loading="loading"
          class="mx-auto mb-4"
          width="275px"
          elevation="3"
          rounde="5"
        >
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            />
          </template>

          <v-img
            height="160"
            cover
            :src="item.src"
          />
          <v-img
            width="44px"
            class="top-label"
            src="https://cdn.kkday.com/m-web/assets/img/icons/ic_top10_label.svg"
          >
            {{ item.rank }}
          </v-img>
          <div class="card__title d-flex pa-2 mx-1">
            <h3 class="text-subtitle-1 font-weight-medium">
              <v-icon
                color="cyan"
                class="mt-1"
                dense
              >
                mdi-flash
              </v-icon>
              {{ item.title }}
            </h3>
          </div>

          <v-card-text class="mx-1 pr-3">
            <v-row>
              <v-icon
                x-small
                color="grey lighten-1"
              >
                mdi-fire
              </v-icon>
              <span class="grey--text text--darken-1 ml-1">
                {{ item.ordered }} 個已訂購
              </span>
            </v-row>
            <v-row class="mt-4">
              <v-icon
                x-small
                color="grey lighten-1"
              >
                mdi-map-marker
              </v-icon>
              <span class="grey--text text--darken-1 ml-1">
                {{ item.location }}
              </span>
            </v-row>
            <v-row
              align="center"
              class="mt-4 mr-1 d-flex justify-space-between "
            >
              <div class=" d-flex align-center">
                <v-rating
                  :value="Number(item.rating)"
                  color="cyan"
                  dense
                  half-increments
                  readonly
                  size="14"
                />

                <div class="grey--text ms-2">
                  ({{ item.ratingCount }})
                </div>
              </div>
              <div class="price text-overline">
                TWD
                <span class="cyan--text text-body-1 font-weight-bold">{{ item.price }}</span>
                <div
                  v-if="item.originPrice"
                  class="price--origin text-decoration-line-through grey--text text--light-1"
                >
                  TWD {{ item.originPrice }}
                </div>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </div>
    </VueSlickCarousel>
  </v-container>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import topProductsList from './../assets/topProductsList.json'
export default {
  name: 'TopProducts',
  components: {
    VueSlickCarousel
  },
  data () {
    return {
      items: topProductsList,
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
<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.v-card{
  position: relative;
  z-index: 1;
  box-shadow: 0 0 4px rgb(0 0 0 / 20%) !important;
  .top-label{
    position: absolute;
    line-height: 42px;
    text-align: center;
    top: calc(160px - 26px);
    right: 8px;
    z-index: 2;
    color:white;
    font-weight: 700;
    font-size: 18px;
  }
  .card__title{
    width: 75%;
    .v-icon{
      float: left;
    }
    h3{
      overflow:hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
    }
  }
  .text-subtitle-1{
    line-height: 24px;
  }
  .price{
    position: relative;
    &--origin{
      position: absolute;
      top: -20px;
      right: 0;
    }
  }
}
.slick-slide {
    margin: 0 10px !important;
}
/* the parent */
.slick-list {
    margin: 0 -10px !important;
}
</style>
