<template>
  <v-container class="px-15 px-md-2">
    <div
      v-for="(item,i) in items"
      :key="i"
    >
      <h3 class="my-4">
        {{ item.name }}
      </h3>
      <ul
        class="country d-flex flex-wrap unexpand"
        :class="{expand: ($vuetify.breakpoint.name !== 'xs') || (item.isExpand === true), 'unexpand':($vuetify.breakpoint.name === 'xs')}"
      >
        <li
          v-for="(city,j) in item.cities"
          :key="j"
          class="country__city text-caption grey--text text--darken-1 mb-3"
        >
          <span>{{ city }}</span>
        </li>
      </ul>
      <div
        v-if="($vuetify.breakpoint.name === 'xs')"
        class="expand-icon cyan--text d-flex align-start mt-2"
        @click.stop.prevent=" item.isExpand= !item.isExpand"
      >
        <span class="font-weight-bold">{{ item.isExpand? '收合' :'展開' }}</span>
        <v-icon
          color="cyan"
          dense
        >
          {{ item.isExpand? 'mdi-menu-up' : 'mdi-menu-down' }}
        </v-icon>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          isExpand: false,
          name: '美國熱門城市',
          cities: ['關島', '夏威夷', '塞班島', '舊金山', '紐約', '拉斯維加斯', '洛杉磯', '奧蘭多', '華盛頓', '西雅圖', '邁阿密', '芝加哥', '加州', '波士頓']
        },
        {
          isExpand: false,
          name: '國內旅遊懶人包',
          cities: [
            '台北景點 ', '桃園景點 ', '新竹景點 ', '苗栗景點 ', '台中景點 ', '彰化景點 ', '南投景點 ', '雲林景點 ', '嘉義景點 ', '台南景點 ', '高雄景點 ', '墾丁景點 ', '宜蘭景點 ', '花蓮景點 ', '台東景點 ', '澎湖景點 ', '金門景點 ', '馬祖景點 ', '綠島 ', '蘭嶼景點 ', '小琉球景點']
        },
        {
          isExpand: false,
          name: '全台防疫旅館精選',
          cities: [
            '台北防疫旅館 ', '新北防疫旅館 ', '桃園防疫旅館 ', '新竹防疫旅館 ', '台中防疫旅館 ', '高雄防疫旅館 ', '日租行動辦公室'
          ]
        },
        {
          isExpand: false,
          name: '旅遊交通輕鬆訂',
          cities: [
            '台北租車 ', '新竹租車 ', '苗栗租車 ', '台中租車 ', '彰化租車 ', '南投租車 ', '嘉義租車 ', '台南租車 ', '高雄租車 ', '宜蘭租車 ', '花蓮租車 ', '台東租車 ', '澎湖租車 ', '金門租車 ', '台南租機車 ', '澎湖租機車 ', '蘭嶼租機車 ', '綠島租機車 ', '小琉球租機車 ', '馬祖租機車 ', '露營車 ', '高鐵聯票 ', '立榮假期 ', '日本夜間巴士'
          ]
        }
      ]
    }
  }

}
</script>
<style lang="scss" scoped>
@import '../assets/scss/main.scss';

.unexpand{
  max-height: 65px;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  &.expand{
    max-height: 500px;
    height: auto;
  }
}

li{
  list-style-type:none;
  span{
    position: relative;
    &::after{
      position: relative;
      right: 0;
      top: 0;
      display:inline-block;
      content: "｜";
      padding: 0 1px;
    }
  }

}
ul{
  margin: 0;
  padding: 0;
}
.expand-icon{
  line-height: 24px;
  cursor: pointer;
  .v-icon{
    font-size: 24px;

  }

}
</style>
