<template>
  <v-footer
    color="grey darken-3"
    dark
    padless
  >
    <h2 class="text-h6 text-center mx-auto mt-3">
      追蹤我們
    </h2>
    <FooterDetail />
    <FooterLicense />
  </v-footer>
</template>

<script>
import FooterDetail from './../components/FooterDetail.vue'
import FooterLicense from './../components/FooterLicense.vue'

export default {
  name: 'Footer',
  components: {
    FooterDetail,
    FooterLicense
  }
}
</script>
