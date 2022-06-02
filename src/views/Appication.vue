<template>
  <section class="page">
    <HeaderPoke />
    <router-view />
    <FooterPoke />
  </section>
</template>

<script>
import { HeaderPoke, FooterPoke } from '@/components';

export default {
  name: 'ApplicationApp',
  components: {
    HeaderPoke,
    FooterPoke,
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
}
</style>