<template>
  <section class="page">
    <HeaderPoke />
    <section class="page__body">
      <InputSearch class="page__body__input-search"/>
      <CardPoke v-for="(pokemon, index) in pokemons" :key="index" />
    </section>
  </section>
</template>

<script>
import CardPoke from '../components/CardPoke.vue';
import InputSearch from '../components/InputSearch.vue';
import HeaderPoke from '../components/HeaderPoke.vue';
import { getPokemons } from '../services/index.js';

export default {
  name: 'ApplicationApp',
  components: {
    CardPoke,
    InputSearch,
    HeaderPoke,
  },
  data() {
    return {
      pokemons: [],
    };
  },
  async created() {
    this.pokemons = await getPokemons("pokemon?limit=15&offset=0");
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;

  .page__body {
    margin: 28px 10px;
    display: grid;
    gap: 8px;

    &__input-search {
      width: 365px;
      margin-bottom: 20px;
      padding: 0px 8px;
      grid-column: span 5;
    }
  }
}


</style>