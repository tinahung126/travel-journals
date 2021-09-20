<template>
  <div class="footer__head px-15 px-md-2 py-8">
    <v-row class="footer mb-2 px-12">
      <v-col
        class="footer__text "
        cols="12"
        md="6"
      >
        <p
          class="text-body-2 text-center text-md-right"
        >
          即刻訂閱KKday EDM！搶先獲得用戶限定優惠及最新熱門景點旅遊資訊！
        </p>
        <p class="caption grey--text text-center text-md-right">
          訂閱即代表你同意我們的<a
            href=""
            class="grey--text"
          >使用者條款</a>和<a
            href=""
            class="grey--text"
          >隱私權保護政策</a>
        </p>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <div class="footer__subscribe d-flex align-center justify-space-between">
          <v-text-field
            placeholder="請輸入Email！"
            solo
            hide-details
            flat
            light
            dense
            background-color="transparent"
          />
          <v-btn
            color="grey darken-2"
            dark
            height="38"
          >
            訂閱
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-divider dark />
  </div>
</template>

<style scoped lang="scss">
@import '../assets/scss/main.scss';
.footer__head{
  width: 100%;
}
.footer__subscribe{
  height: 38px;
  border-radius: 3px;
  box-shadow: 0 12px 48px 16px rgb(0 0 0 / 3%), 0 9px 28px 0 rgb(0 0 0 / 5%), 0 6px 16px -8px rgb(0 0 0 / 8%);
  background: white;
  .v-text-field{
    font-size: 8px;
  }
  .v-btn{
    border-radius: 0 3px 3px 0 !important;
  }
}
</style>
