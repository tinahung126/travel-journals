<template>
  <v-container>
    <h2 class="text-h5 font-weight-bold ml-0">
      熱門活動分類
    </h2>

    <v-sheet
      class=" category__wrapper pa-0"
      width="100%"
    >
      <v-slide-group
        v-model="model"
        class="custom"
        :show-arrows="$vuetify.breakpoint.smAndUp"
      >
        <v-slide-item
          v-for="item in categoryList"
          :key="item.id"
          class="ma-3"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              class="card pa-0 ml-0"
              :class="{ 'on-hover': !hover }"
              elevation="6"
              :width="$vuetify.breakpoint.xs ? 140 : 200"
              :height="$vuetify.breakpoint.xs ? 150 : 200"
            >
              <v-img
                :src="item.img"
                aspect-ratio="1.3"
              />

              <v-card-title
                class="card__subtitle px-3 py-3 text-sm-subtitle-2"
              >
                {{ item.title }}
              </v-card-title>
            </v-card>
          </v-hover>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>
<script>
export default {
  name: 'EventCategory',
  data () {
    return {
      model: null,
      categoryList: [
        {
          id: 1,
          title: '防疫應援',
          img: 'https://image.kkday.com/v2/image/get/w_240%2Ch_144%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1623/20210624085006_jyZ2i/jpg'
        },
        {
          id: 2,
          title: '飯店美食＆住宿',
          img: 'https://image.kkday.com/v2/image/get/w_240%2Ch_144%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1623/20210413042903_BsLWK/jpg'
        },
        {
          id: 3,
          title: '離島旅行',
          img: 'https://image.kkday.com/v2/image/get/w_240%2Ch_144%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1623/20210413042911_C6Q9R/jpg'
        },
        {
          id: 4,
          title: '水上活動',
          img: 'https://image.kkday.com/v2/image/get/w_240%2Ch_144%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1623/20210413042918_I1ZUl/jpg'
        },
        {
          id: 5,
          title: '高鐵聯票',
          img: 'https://image.kkday.com/v2/image/get/w_240%2Ch_144%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1623/20210413042924_iM7XB/jpg'
        },
        {
          id: 6,
          title: '親子專區',
          img: 'https://image.kkday.com/v2/image/get/w_240%2Ch_144%2Cc_fill%2Cq_55%2Ct_webp/s1.kkday.com/campaign_1623/20210413042920_9Ro10/jpg'
        }

      ]
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/scss/main.scss';

 h2{
    margin-left: 4px;
  }
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.7;
 }

.category__wrapper{
  flex-wrap: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
  .card{
    box-shadow: 0 2px 8px rgb(60 64 67 / 20%);

    .card__subtitle{
      font-size: 12px;
      font-weight: 700;
      line-height: 1.5rem;
  }
}

}

</style>
