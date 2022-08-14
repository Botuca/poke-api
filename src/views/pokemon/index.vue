<template>
  <section class="content" :class="typePrimaryColor">
    <div class="content__intro">
      <span class="content__intro__title">{{ pokemon.name }}</span>
      <span class="content__intro__subtitle"> #{{id}}</span>
      <img class="content__intro__image" :src="imageURL" :alt="pokemon.name">
    </div>
    <div class="content__infos">
      <span> <strong>Abilities:</strong> {{ abilities }} </span>
      <span> <strong>Types:</strong> {{ types }} </span>
      <span> <strong>Moves qtd.:</strong> {{ movesLength }} </span>
      <span> <strong>Height:</strong> {{ height }} m</span>
      <span> <strong>Weight:</strong> {{ weight }} Kg</span>
    </div>
  </section>
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
    typePrimaryColor() {
      return pokemonsColors[this.fisrtTypeName]?.card;
    },
    fisrtTypeName() {
      return this.pokemon.types?.[0].type.name;
    },
    imageURL() {
      return this.pokemon.sprites?.other['official-artwork'].front_default;
    },
    id() {
      return `${this.pokemon.id}`.padStart(3, '0');
    },
    abilities() {
      return this.pokemon?.abilities?.map(({ability}) => ability.name).join(', ');
    },
    weight() {
      return this.pokemon.weight / 10;
    },
    height() {
      return this.pokemon.height / 10;
    },
    types() {
      return this.pokemon?.types?.map(({type}) => type.name).join(', ');
    },
    movesLength() {
      return this.pokemon?.moves?.length;
    },
  },
  async mounted() {
    this.pokemon = await getPokemonSearch(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`) || [];

    console.log(this.pokemon);
  },
}
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  width: 944px;
  border: 8px solid #333333;
  border-top: none;
  display: flex;
  align-items: center;

  &__intro {
  display: flex;
  flex-direction: column;

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

  &__infos {
    display: flex;
    flex-direction: column;
  }
}
</style>