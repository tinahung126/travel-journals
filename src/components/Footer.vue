<template>
  <div class="px-0 mx-0">
    <v-footer
      color="grey darken-3"
      dark
      padless
      class="d-flex flex-column pt-10"
    >
      <FooterHead class="d-none d-sm-block" />
      <FooterDetail class="d-none d-sm-block" />
      <FooterDetailMb class="d-block d-sm-none" />
      <FooterLicense />
    </v-footer>
  </div>
</template>

<script>
import FooterDetail from './../components/FooterDetail.vue'
import FooterDetailMb from './../components/FooterDetailMb.vue'
import FooterHead from './../components/FooterHead.vue'
import FooterLicense from './../components/FooterLicense.vue'

export default {
  name: 'Footer',
  components: {
    FooterDetail,
    FooterLicense,
    FooterDetailMb,
    FooterHead
  }
}
</script>
<style scoped lang="scss">
@import '../assets/scss/main.scss';
.container{
  width: 100%;
}
</style>
