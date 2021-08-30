<template>
  <v-container class="ma-1">
    <a
      class="search__banner d-flex justify-space-between align-center pa-4"
      href=""
    >
      <div class="search__banner__detail ">
        <div class="text-h6">探索附近</div>
        <div class="text-body-2 font-weight-medium">快速找到您附近的體驗 </div>
      </div>
      <div class="search__banner__btn">
        <v-btn
          depressed
          color="white"
        >
          開始探索
        </v-btn>
      </div>
    </a>
  </v-container>
</template>

<style scoped lang="scss">
@import '../assets/scss/main.scss';
.search__banner{
  padding: 20px;
  display: block;
  width: 100%;
  border-radius: 4px;
  background:-webkit-gradient(linear,right top,left top,from(rgba(37,187,198,0)),to(rgba(37,187,198,.65))),url(https://cdn.kkday.com/m-web/assets/img/nearby_pattern_white.svg),-webkit-gradient(linear,right top,left top,from(#63e5ef),to(#26bec9));
  text-decoration: none;
  color:white;
  &__detail{
    text-shadow: 0 0 4px rgb(0 0 0 / 25%);
  }
  .v-btn{
    color: $cyan;
  }

}
</style>
