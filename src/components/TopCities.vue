<template>
  <v-container class="px-15 px-md-2">
    <h2 class="text-h5 font-weight-bold ml-0 mb-5">
      探索熱門城市
    </h2>
    <div
      class="card__wrapper d-flex justify-space-between"
    >
      <template
        v-for="item in Items"
      >
        <v-hover
          :key="item.id"
          v-slot="{ hover }"
        >
          <v-card
            class="card"
            :class="{ 'on-hover': hover ,'expanded': expandIndex === item.id, 'notExpand':expandIndex !== item.id}"
            @mouseover="expandIndex = item.id"
          >
            <v-img
              class="white--text align-end"
              height="250px"
              gradient="to bottom, transparent 60%, rgba(0,0,0,.7)"
              :src="item.url"
            >
              <v-card-title class="city__name font-weight-black px-2 pb-0">
                {{ item.title }}
              </v-card-title>
              <v-card-text class="px-1 ">
                <div class="chip__group d-flex flex-nowrap">
                  <v-chip
                    class="py-3 px-2 mx-1"
                    color="white"
                    outlined
                    small
                  >
                    交通 & 旅遊必備
                  </v-chip>
                  <v-chip
                    color="white"
                    outlined
                    small
                  >
                    熱門票券
                  </v-chip>
                  <v-chip
                    color="rgba(255, 255, 255, 0.4)"
                    small
                    dark
                  >
                    更多在地體驗
                  </v-chip>
                </div>
              </v-card-text>
            </v-img>
          </v-card>
        </v-hover>
      </template>
    </div>
  </v-container>
</template>
<script>
import citiesList from './../../public/jsonFiles/citiesList.json'
export default {
  name: 'TopCities',
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

      },
      expandIndex: 1

    }
  },
  methods: {
    sayHi () {
      console.log('hi')
    }
  }

}
</script>
<style  lang="scss" scoped>
@import '../assets/scss/main.scss';
.card__wrapper{
  padding-right: 10px;
  position: relative;
  .chip__group{
    position: absolute;
    bottom: -35px;
    transition: bottom 0.35s ease;
  }
  .city__name{
    position: absolute;
    bottom:10px;
    transition: bottom 0.35s ease;
  }
  .card{
    width: calc((100% / 6 - 8px) * 2);
    img{
      margin: 0 -4px;
    }
    &.expanded{
      width: calc((100% / 6 - 8px) * 2);
      .chip__group{
        bottom: 10px;
      }
      .city__name{
        bottom: 45px;
      }
    }
    &.notExpand{
      width: calc(100% / 6 - 8px)
    }
  }
}
.v-card {
  transition: all .35s ease-in;
  opacity: 0.8;

}

.v-card:not(.on-hover) {
  width: calc(100% / 6 - 8px);
  opacity: 1;

 }

</style>
