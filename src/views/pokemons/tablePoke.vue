<template>
  <section class="table">
    <CardPoke
      v-for="(pokemon, index) in pokemons"
      :key="index"
      v-bind="{ pokemon }"
    />
  </section>
</template>

<script>
import CardPoke from '@/components/cardPoke.vue';
import { getPokemonsTable } from '@/services/index.js';

export default {
  name: 'PokemonsTable',
  components: {
    CardPoke,
  },
  data() {
    return {
      pokemons: [],
    };
  },
  async created() {
    this.pokemons = await getPokemonsTable("pokemon?limit=15&offset=0");
  }
}
</script>

<style lang="scss" scoped>
.table {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 16px;
  column-gap: 8px;
}
</style>