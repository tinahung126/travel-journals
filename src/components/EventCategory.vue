<template>
  <div class="px-2 ma-1">
    <h2>熱門活動分類</h2>
    <v-container>
      <v-row class="category__wrapper">
        <v-col
          v-for="item in categoryList"
          :key="item.id"
          class="px-1"
          cols="4"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              class="card"
              :class="{ 'on-hover': !hover }"
              elevation="3"
            >
              <v-img
                :src="item.img"
              />

              <v-card-title
                class="card__subtitle px-2 py-1"
              >
                {{ item.title }}
              </v-card-title>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'EventCategory',
  data () {
    return {
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
  overflow-x: scroll;
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
