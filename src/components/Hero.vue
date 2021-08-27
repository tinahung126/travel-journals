<template>
  <div class="hero__container">
    <div class="hero__container__bg" />

    <v-container class="hero__container__search px-4">
      <h5>你要去哪裡？</h5>
      <div class="hero__container__search__searchbar">
        <SearchBar />
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
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/main.scss';

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
  }
  &__search{
    h5{
      font-size: 22px;
      color: white;
      text-shadow: 0 1px 8px rgb(0 0 0 / 20%);
      margin-bottom: 24px;
    }
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    transform: translateY(30%);
  }
}
</style>
