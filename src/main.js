import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)
Vue.directive('observe-visibility', VueObserveVisibility.ObserveVisibility)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
