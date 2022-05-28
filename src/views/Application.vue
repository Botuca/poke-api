<template>
  <section class="page">
    <HeaderPoke />
    <section class="page__body">
      <input type="text" class="page__body__input-search" placeholder="Pesquisar..." />
      <CardPoke v-for="(pokemon, index) in pokemons" :key="index" />
    </section>
  </section>
</template>

<script>
import CardPoke from '../components/CardPoke.vue';
import HeaderPoke from '../components/HeaderPoke.vue';
import { getPokemons } from '../services/index.js';


export default {
  name: 'ApplicationApp',
  components: {
    CardPoke,
    HeaderPoke,
  },
  data() {
    return {
      pokemons: [],
    };
  },
  async created() {
    this.pokemons = await getPokemons("pokemon?limit=15&offset=0");
    console.log(this.pokemons);
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
      font-size: 18px;
      height: 34px;
      width: 365px;
      margin-bottom: 20px;
      padding: 0px 8px;
      border-radius: 10px;
      box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
      border: none;
      grid-column: span 5;
    }
  }
}


</style>