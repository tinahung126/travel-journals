<template>
  <v-container>
    <div class="menu__container ">
      <div class="menu__wrapper scrollbar">
        <div
          v-for="item in cardItems"
          :key="item.id"
          class="card__item d-flex flex-column justify-center align-center"
        >
          <img
            :src="require(`../assets/icons/${item.url}.svg`)"
            alt=""
          >
          <span class="card__item__title">{{ item.title }}</span>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
import menuList from './../../public/jsonFiles/menuList.json'
export default {
  name: 'Menu',

  data () {
    return {
      cardItems: menuList,
      lists: []
    }
  }

}
</script>
<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.menu__container{
  height: 200px;
  padding: 10px ;
  border-radius: 10px;
  box-shadow: 0 2px 8px 0 rgb(60 64 67 / 20%);
  .menu__wrapper{
    display: grid;
    height: 170px;
    grid-template-columns: repeat(auto-fill, 25%);
    grid-template-rows: repeat(2, 80px);
    grid-auto-flow: column;
    grid-auto-columns: 25%;
    overflow-x: scroll;

    .card__item{
      &__title{
        font-size: 10px;
        font-weight: 500;
        margin-top: 5px;
      }
      img{
        width: 30px;
      }
    }
  }
  }
  .scrollbar{
    &::-webkit-scrollbar{
      height: 4px;
    }
    &::-webkit-scrollbar-track {
      background-color: #C8E8F9;
      border-radius: 10px;
      margin: 20px 130px;
    }
    &::-webkit-scrollbar-thumb{
      border-radius: 10px;
      background-color: $cyan;
    }

}
</style>
