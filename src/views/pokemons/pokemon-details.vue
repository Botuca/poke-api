<template>
  <span>{{ pokemon.name }}</span>
</template>

<script>
import { getPokemonSearch } from '@/services/index.js';

export default {
  name: "PokemonDetails",
  data() {
    return {
      pokemon: {},
    }
  },
  async created() {
    this.pokemon = await getPokemonSearch(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`) || [];
  },
}
</script>