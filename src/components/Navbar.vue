<template>
  <div>
    <!-- mobile -->
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

    <!-- laptop -->
    <v-app-bar
      color="white"
      class="d-none d-sm-block d-md-none"
      flat
      dense
    >
      <v-img
        max-width="60"
        src="../assets/kkday_logo.svg"
      />
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />
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
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="item in ($vuetify.breakpoint.name ==='xs'? listItems : smupListItems)"
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
          <v-list-item class="cyan--text text--darken-3">
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
    smupListItems: [{ title: '註冊/登入' }, { title: 'TWD' }, { title: '繁體中文' }],
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
</style>
