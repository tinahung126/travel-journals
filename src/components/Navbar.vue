<template>
  <div class="main">
    <!-- mobile & laptop-->
    <v-app-bar
      :color="isScroll ? 'white' : 'transparent'"
      :dark="!isScroll"
      class="d-flex d-sm-none"
      hide-on-scroll
      flat
      dense
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />

      <v-img
        v-if="isScroll"
        max-width="60"
        src="../assets/kkday_logo.svg"
      />

      <v-img
        v-else
        max-width="60"
        src="../assets/kkday_logo_white.svg"
      />
    </v-app-bar>

    <!-- laptop & PC -->
    <v-app-bar
      color="white"
      class="d-none d-sm-block px-8"
      flat
      dense
    >
      <v-img
        max-width="60"
        src="../assets/kkday_logo.svg"
      />
      <v-spacer />
      <v-app-bar-nav-icon
        class="d-none d-sm-flex d-md-none"
        @click.stop="drawer = !drawer"
      />
      <v-list
        dense
        class="py-0 hidden-sm-and-down"
      >
        <v-list-item-group class="d-flex py-0">
          <v-menu
            v-for="(item, i) in smSizeListItems"
            :key="i"
            content-class="my-menu"
            offset-y
            left
          >
            <template v-slot:activator="{ attrs, on }">
              <v-list-item
                v-bind="attrs"
                class="menu__list"
                :disabled="i === 0||i === 4"
                v-on="on"
              >
                <v-list-item-title
                  dense
                  :class="{'cyan--text text--darken-1': i === 0, 'grey--text text--darken-1': i !== 0,'order-md-1': i === 0}"
                  v-text="item.title"
                />

                <v-icon
                  small
                  class="menu__icon"
                  :class="{'order-md-0': i === 0}"
                  :color=" i === 0 ? 'cyan darken-1':'grey darken-1'"
                >
                  {{ item.details ? 'mdi-chevron-down': item.icon }}
                </v-icon>
              </v-list-item>
            </template>
            <v-card
              v-if="i===3"
              class="dropdown-list text-center pt-10"
              width="400px"
            >
              <v-img
                max-width="120px"
                class="text-center mx-auto"
                src="https://cdn.kkday.com/pc-web/assets/img/empty_state/shopping_cart.svg"
              />
              <v-card-text class="mb-5  text-subtitle-2 grey--text font-weight-bold">
                您的購物車是空的
              </v-card-text>
              <v-divider />

              <v-card-actions>
                <span class=" ml-2 text-subtitle-1 grey--text">共 0 件商品</span>
                <v-spacer />
                <v-btn
                  color="cyan"
                  dark
                >
                  查看購物車
                </v-btn>
              </v-card-actions>
            </v-card>
            <v-list
              v-if="item.details"
              class="dropdown-list d-flex"
            >
              <v-list-item
                v-for="(detail,j) in item.details"
                :key="j"
                link
              >
                <v-list-item-title
                  class="text-body-2"
                  v-text="detail"
                />
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item-group>
      </v-list>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      class="navigation"
      absolute
      :left="$vuetify.breakpoint.name ==='xs'"
      :right="$vuetify.breakpoint.name !=='xs'"
      :width="$vuetify.breakpoint.name ==='xs' ? '100%' : '35%'"
      temporary
    >
      <div class=" d-sm-none d-flex justify-start mx-4 my-3 close-btn ">
        <v-icon @click.stop="drawer = !drawer">
          mdi-close
        </v-icon>
      </div>
      <v-list>
        <v-list-item-group
          v-model="group"
          active-class="cyan--text"
        >
          <v-list-item
            v-for="item in ($vuetify.breakpoint.name ==='xs'? listItems : smDrawer)"
            :key="item.id"
            class="px-4"
          >
            <v-list-item-icon class="d-sm-none d-flex">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item
            v-if="$vuetify.breakpoint.name !=='xs'"
            class="cyan--text text--darken-3"
          >
            <v-icon
              small
              color="cyan darken-3"
              class="mr-1"
            >
              mdi-cellphone
            </v-icon>
            下載 App 享優惠
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: 'Navbar',

  data: () => ({
    drawer: false,
    isScroll: false,
    group: null,
    smSizeListItems: [
      { title: '下載 App 享優惠', icon: 'mdi-cellphone' },
      { title: '繁體中文', details: ['English', '日本語', '한국어', 'ไทย'] },
      { title: 'TWD', details: ['USD 美元', 'JPY 日圓', 'KRW 韓圓', 'THB 泰銖'] },
      { icon: 'mdi-cart-outline' },
      { title: '註冊/登入' }
    ],
    smDrawer: [
      { title: '繁體中文', details: ['English', '日本語', '한국어', 'ไทย'] },
      { title: 'TWD', details: ['USD 美元', 'JPY 日圓', 'KRW 韓圓', 'THB 泰銖'] },
      { title: '註冊/登入' }
    ],
    listItems: [
      {
        id: 1,
        icon: 'mdi-home-outline',
        title: '回到首頁'
      },
      {
        id: 2,
        icon: 'mdi-login-variant',
        title: '登入'
      },
      {
        id: 3,
        icon: 'mdi-account',
        title: '註冊'
      }
    ]
  }),
  watch: {
    group () {
      this.drawer = false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll (e) {
      this.isScroll = (document.documentElement.scrollTop > 50)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/main.scss';
.navigation{
  position: fixed;
}
.logo{
  height: 48px;
}

.close-btn{
  position: relative;
  &::after{
    content: '';
    position: absolute;
    bottom: -12px;
    left: -16px;
    width: calc(100% + 32px);
    height: 2px;
    background: $border-gray;
  }
}
.my-menu {
  contain: initial;
  overflow: visible;
  border-radius: 10px;
  margin-top: 3px;

}
.my-menu::after {
  position: absolute;
  content: "";
  top: 1px;
  right: 10px;
  transform: translateY(-100%);
  width: 10px;
  height: 13px;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 8px solid #fff;
}
.dropdown-list{
  border-radius: 10px !important;
  box-shadow: 0 2px 20px rgb(0 0 0 / 15%)!important;
}
.theme--light{
  .menu__list{
  &.v-list-item--active{
  &:focus::before{
    opacity: 0;
  }
  &:hover::before{
    opacity: 0;
  }
  &::before{
    opacity: 0;
  }
  }
  &.v-list-item{
    &:focus::before{
      opacity: 0;
    }
    &:hover::before{
      opacity: 0;
    }
  }
}
}
@media screen and (min-width: 600px) {
  .main{
    border-bottom: 1px solid #EEEEEE;
  }
}

</style>
