<template>
  <v-card
    flat
    tile
    class="white--text text-center flex-grow-1"
    color="grey darken-3"
    dark
  >
    <v-card-text class="py-4">
      <v-btn
        v-for="(icon,i) in icons"
        :key="i"
        class="ma-2"
        outlined
        icon
        color="white"
      >
        <i :class="icon" />
      </v-btn>
    </v-card-text>

    <v-card-text class="white--text py-0 d-flex flex-column">
      <a
        class="white--text mb-2"
        href=""
      >使用者條款</a>
      <a
        class="white--text"
        href=""
      >隱私權保護政策</a>
      <div class="my-4">
        ©2021 KKday All rights reserved.
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: 'Footerdetail',
  data () {
    return {
      icons: ['fab fa-facebook-f', 'fab fa-youtube', 'fab fa-instagram', 'fab fa-twitter', 'fab fa-blogger-b', 'fab fa-pinterest-p']
    }
  }
}
</script>
<style scoped lang="scss">
@import '../assets/scss/main.scss';
i{
  color: white;
}
</style>
