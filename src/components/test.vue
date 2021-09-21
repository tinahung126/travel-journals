<template>
  <div class="hero__container">
    <div
      class="hero__container__bg "
      :class="{hero__container__bg__large: $vuetify.breakpoint.name !=='xs'}"
    />

    <v-container class="hero__container__search px-4 text-sm-center white--text">
      <h1 class="d-none d-sm-flex textcenter justify-center">
        全世界最棒的旅遊體驗
      </h1>
      <h5 class="d-flex d-sm-none">
        你要去哪裡？
      </h5>
      <h5 class="d-none d-sm-flex textcenter justify-center mt-2">
        帶你深入探索有趣又獨特的旅遊體驗行程
      </h5>
      <div class="hero__container__search__searchbar">
        <SearchBar class="d-flex d-sm-none" />
        <v-autocomplete
          v-model="selected"
          class="hero__container__search__searchbar__auto d-none d-sm-flex mx-auto "
          :items="searchCities"
          :loading="isLoading"
          :search-input.sync="search"
          hide-details
          hide-selected
          clearable
          label="輸入目的地、景點、體驗行程或活動名稱..."
          solo
          append-icon="mdi-magnify"
        >
          <template v-slot:item="{ item }">
            <v-container>
              <h4 class="mb-2">
                熱門目的地
              </h4>
              <v-row width="100%">
                <v-list
                  class="search__list"
                  d-flex
                  width="100%"
                >
                  <v-col
                    class="d-flex"
                    cols="4"
                  >
                    <v-list-item-group width="100%">
                      <v-list-item
                        v-for="(city,i) in item.hotCities"
                        :key="i"
                        :selected="city.selected"
                      >
                        {{ city }}
                        <v-icon
                          dense
                          class="ml-1"
                          color="red lighten-2"
                        >
                          mdi-fire
                        </v-icon>
                      </v-list-item>
                    </v-list-item-group>
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="4"
                  >
                    <v-divider
                      vertical
                      class="mr-2"
                    />
                    <v-list-item-group class="search__list__group">
                      <v-list-item
                        v-for="(city,i) in item.cities.slice(0,5)"
                        :key="i"
                      >
                        {{ city }}
                      </v-list-item>
                    </v-list-item-group>
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="4"
                  >
                    <v-divider
                      vertical
                      class="mr-2"
                    />
                    <v-list-item-group>
                      <v-list-item
                        v-for="(city,i) in item.cities.slice(5,11)"
                        :key="i"
                      >
                        {{ city }}
                      </v-list-item>
                    </v-list-item-group>
                  </v-col>
                </v-list>
              </v-row>
            </v-container>
          </template>
        </v-autocomplete>
      </div>
    </v-container>
  </div>
</template>
<script>
import SearchBar from './../components/SearchBar.vue'
export default {
  name: 'Hero',
  components: {
    SearchBar
  },
  data () {
    return {
      selected: '',
      searchCities: {
        cities: ['桃園', '新北市', '台中', '台南', '新竹', '苗栗', '南投', '嘉義', '高雄', '屏東'],
        hotCities: ['澎湖', '台北', '花蓮', '宜蘭', '台東']
      }
    }
  }

}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/main.scss';

.hero__container{
  position: relative;

  &__bg{
    background-image: linear-gradient(to bottom, rgba(1,149,193,.2) 75%, rgba(255, 255, 255, 0.9) 100%),
    url('https://cdn.kkday.com/m-web/assets/img/home_banner/1.jpg');
    width: 100%;
    height: 184px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: blur(1.5px);
    &__large{
      background-image: url('https://cdn.kkday.com/pc-web/assets/img/home_banner/2.jpg');
      height: 330px;
      filter:none;
      position: relative;
      &::after{
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(51,51,51,0.2);
      }
    }
  }

  &__search{

    h1{
      font-size: 40px;
      text-shadow: 0 5px 15px rgb(51 51 51 / 10%);
      font-weight: 700;
    }
    h5{
      font-size: 20px;
      text-shadow: 0 1px 8px rgb(0 0 0 / 10%);
      margin-bottom: 24px;
      font-weight: 700;
    }
    position: absolute;
    width: 100%;
    bottom: 0 ;
    left: 0;
    transform: translateY(30%);
    &__searchbar__auto{
      width: 80%;
    }
  }
}
.search__list{
  .v-item-group{
    width: 100% !important;
  }
  display: flex;
  &__group{
    width: 100% !important;
  }
}

@media screen and (min-width: 600px){
  .hero__container{
    position: relative;
    &__search{
      position: absolute;
      bottom: 50%;
      transform: translateY(50%);
      left: 0;
      right: 0;
    }
  }
}
</style>
