<template>
  <div class="content" :class="pokemonTypePrimaryColor">
    <span class="content__title">{{ pokemon.name }} </span>
    <span  class="content__subtitle"> #{{pokemonId}} </span>
    <img class="content__image" :src="pokemonImageURL" :alt="pokemon.name">
  </div>
</template>

<script>
import { getPokemonSearch } from '@/services/index.js';
import { pokemonsColors } from '@/utils/pokemon-colors.js';

export default {
  name: "PokemonDetails",
  data() {
    return {
      pokemonsColors,
      pokemon: {},
    }
  },
  computed: {
    pokemonTypePrimaryColor() {
      return pokemonsColors[this.fisrtTypeName]?.card;
    },
    fisrtTypeName() {
      return this.pokemon.types?.[0].type.name;
    },
    pokemonImageURL() {
      return this.pokemon.sprites?.other['official-artwork'].front_default;
    },
    pokemonId() {
      return `${this.pokemon.id}`.padStart(3, '0');
    },
  },
  async mounted() {
    this.pokemon = await getPokemonSearch(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`) || [];
  },
}
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  width: 944px;
  display: flex;
  flex-direction: column;
  border: 8px solid #333333;
  border-top: none;

  &__title {
    font-size: 40px;
    font-weight: bold;
    padding-left: 16px;
  }

  &__subtitle {
    font-size: 16px;
    font-weight: bold;
     padding-left: 16px;
  }

  &__image {
    height: 300px;
    width: 300px;
  }
}
</style>