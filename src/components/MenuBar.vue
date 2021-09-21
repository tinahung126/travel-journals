<template>
  <v-container class="container pb-0">
    <v-sheet>
      <v-tabs
        show-arrows
        color="teal"
        light
        height="40px"
        background-color="white"
      >
        <v-tabs-slider color="teal lighten-3 " />
        <v-tab
          v-for="item in menuItems"
          :key="item.id"
          class="py-2"
          :ripple="false"
        >
          <v-img
            contain
            height="18px"
            width="18px"
            :src="require(`../assets/icons/${item.url}.svg`)"
            class="mr-1"
          />
          {{ item.title }}
        </v-tab>
      </v-tabs>
    </v-sheet>
  </v-container>
</template>

<script>
import menuList from './../../public/jsonFiles/menuList.json'
export default {
  name: 'Menubar',
  data () {
    return {
      menuItems: menuList
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.container{
  .v-tab{
    border-right: #EEEEEE solid 1px;
    height: 80%;
    &::before{
      background-color: #fff;
    }

  }

  .v-ripple__container {
    opacity: 0 !important;
}
}
</style>
