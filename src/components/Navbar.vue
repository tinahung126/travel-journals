<template>
  <div>
    <v-app-bar
      color="transparent"
      dense
      dark
      hide-on-scroll
      flat
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Go travel</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      class="navigation"
      absolute
      left
      width="100%"
      temporary
    >
      <div class="d-flex justify-start mx-4 my-3 close-btn">
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
            v-for="item in listItems"
            :key="item.id"
            class="px-4"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
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
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/scss/main.scss';
.navigation{
  position: fixed;
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
