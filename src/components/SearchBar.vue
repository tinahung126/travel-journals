<template>
  <div class="container d-flex align-center">
    <v-text-field
      placeholder="搜尋景點、地區或城市"
      solo
      hide-details
      flat
      dense
      height="22px"
    />
    <v-icon color="cyan">
      mdi-magnify
    </v-icon>
  </div>
</template>
<style scoped lang="scss">
@import '../assets/scss/main.scss';
.container{
  height: 42px;
  border-radius: 30px;
  box-shadow: 0 12px 48px 16px rgb(0 0 0 / 3%), 0 9px 28px 0 rgb(0 0 0 / 5%), 0 6px 16px -8px rgb(0 0 0 / 8%);
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  .btn-text{
    color:$btn-gray;
    font-size: 0.8rem;

  }
}
</style>
