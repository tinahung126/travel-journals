<template>
  <div class="mx-auto px-15 px-md-2 py-4">
    <v-row>
      <v-col
        v-for="item in details"
        :key="item.id"
        cols="6"
        lg="3"
        class="px-10 py-2"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="my-2 grey--text">
              {{ item.title }}
            </v-list-item-title>
            <v-list-item-subtitle
              v-for=" (sub,i) in item.subtitle"
              :key="i"
              class="my-1 white--text"
            >
              {{ sub }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col
        cols="6"
        lg="3"
        class="px-10 px-md-4 py-2"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="my-2 grey--text">
              聯絡我們
            </v-list-item-title>
            <div>
              <v-btn
                v-for="(icon,i) in icons"
                :key="i"
                class="ma-1"
                small
                fab
                rounded
                color="grey darken-1"
              >
                <i :class="icon" />
              </v-btn>
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
    <v-divider
      dark
      class="mt-2 mt-md-4"
    />
    <p class="mt-4 mt-md-6 mb-0 mb-md-2  pr-5 text-right grey--text text-body-2">
      COPYRIGHT © 2021 KKday All rights reserved.
    </p>
  </div>
</template>
<script>
import footerDetail from './../../public/jsonFiles/footerDetail.json'

export default {
  name: 'Footerdetail',
  data () {
    return {
      icons: ['fab fa-facebook-f', 'fab fa-youtube', 'fab fa-instagram', 'fab fa-twitter', 'fab fa-blogger-b', 'fab fa-pinterest-p'],
      details: footerDetail

    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/scss/main.scss';
i{
  color: white;
  font-size: 16px;
}
</style>
