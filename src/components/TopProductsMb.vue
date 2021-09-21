<template>
  <v-container class="px-3 px-sm-15 px-md-2">
    <h2>
      Top 10 熱門商品
    </h2>

    <VueSlickCarousel
      class="slick"
      :arrows="$vuetify.breakpoint.name !=='xs'"
      v-bind="settings"
    >
      <div
        v-for="item in items"
        :key="item.rank"
        class="card__item"
      >
        <v-card
          class="mx-auto mb-4"
          rounded="5"
          height="324px"
          width="300px"
        >
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
            <div class="product__hint d-flex align-center">
              <v-icon
                color="white"
                class="mx-1"
                small
              >
                mdi-flash
              </v-icon>
              立即確認
            </div>
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
  </v-container>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import topProductsList from './../../public/jsonFiles/topProductsList.json'

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
        touchThreshold: 5,
        speed: 500,
        infinite: false,
        touchMove: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true

      }

    }
  },
  computed: {
    size () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 2
        case 'sm':
          return 2
        case 'md':
          return 3
        case 'lg':
          return 4
        case 'xl':
          return 4
        default:
          return 3
      }
    }
  }
}

</script>
<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.card__item{
  width: 97% !important;
}

.v-card{
  position: relative;
  border: 1px solid #eaeaea;
  border-radius: 3px;
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
    position: relative;
    .product__hint{
      background: $cyan;
      border-radius: 5px;
      width: fit-content;
      position: absolute;
      padding: 5px 10px;
      top: -20px;
      left: -4px;
      font-size: 12px;
      color: white;
      box-shadow: 0 0 5px rgb(0 0 0 / 30%);
      opacity: 0;
      transition: all .3s ease-in-out;
      &::after{
        position: absolute;
        bottom: -16px;
        left: 12%;
        content: '';
        border: 1px solid #000;
        border-color: $cyan transparent  transparent  transparent ;
        border-style: solid solid solid solid;
        border-width: 8px;
      }
    }
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

// Hover effect
.v-card {
  opacity: 1;
  transition: opacity .3s ease-in-out;

  &:hover{
    opacity: 0.7;
    h3{
      i.v-icon.v-icon{
        color: $yellow !important;
        transform: rotateY(1turn);
        transition: all .3s ease-in-out;
      }
    }

    .product__hint{
      top: -28px;
      opacity: 1;
    }
  }
}

</style>
