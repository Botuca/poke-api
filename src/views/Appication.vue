<template>
  <section class="page">
    <HeaderPoke />
    <Pokemons />
    <FooterPoke />
  </section>
</template>

<script>
import Pokemons from './pokemons/index.vue';
import HeaderPoke from '@/components/headerPoke.vue';
import FooterPoke from '@/components/footerPoke.vue';

export default {
  name: 'ApplicationApp',
  components: {
    Pokemons,
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