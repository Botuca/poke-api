<template>
  <section class="page">
    <HeaderPoke />
    <Pokemons />
    <FooterPoke />
  </section>
</template>

<script>
import Pokemons from './pokemons/index.vue';
import { HeaderPoke, FooterPoke } from '@/components';

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