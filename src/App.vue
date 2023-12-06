<template>
  <Navbar />
  <router-view />
  <FooterVue />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
// import Headervue from '@/components/Header.vue'
// import Cards from '@/components/Cards.vue'
// import MenuVue from '@/components/MenuVue.vue'
// import Promotion from '@/components/Promotion.vue'
// import Categories from '@/components/Categories.vue'
// import Company from '@/components/Company.vue'
// import Instagram from '@/components/Instagram.vue'
import FooterVue from '@/components/Footer.vue'

export default {
  components: { Navbar, FooterVue }
// Headervue, Cards, MenuVue, Promotion, Categories, Company, Instagram,
}
</script>
<!-- https://www.figma.com/file/BuCXhDCOu9NQpTMJpwstEp/Riksha-(Copy)-(Copy)?type=design&node-id=1-3&mode=design&t=e0k7HFBVwBySXxnH-0 -->