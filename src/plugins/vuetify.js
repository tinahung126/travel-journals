import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import LogoIcon from './../components/LogoIcon.vue'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    values: {
      iconfont: 'fa',
      icon: {
        component: LogoIcon
      }

    }
  }
})
