<template>
  <article class="card-item" :class="pokemonTypePrimaryColor">
    <span class="card-item__number"> #{{ pokemonId }} </span>
    <figure class="card-item__pokemon-figure">
      <img class="card-item__pokemon-image" :src="pokemonImageURL" :alt="pokemon.name" @click="$emit('on-click', pokemon.name)">
    </figure>
    <span v-title="pokemon.name" class="card-item__name"> {{ pokemon.name }} </span>
    <div class="card-item__info">
      <type-poke v-for="({type}, index) in pokemon.types"
        :class="pokemonsColors[type.name].name"
        :key="index"
        :type="type.name"
      />
    </div>
  </article>
</template>

<script>
import { pokemonsColors } from '@/utils/pokemon-colors.js';
import typePoke from './type-poke.vue';

export default {
  name: 'CardPoke',
  components: { typePoke },
  props: {
    pokemon: { 
      type: Object,
      default: () => {},
    },
  },
  computed: {
    pokemonImageURL() {
      return this.pokemon.sprites.other['official-artwork'].front_default;
    },
    firstname() {
      return [this.pokemon.types[0].type.name];
    },
    pokemonTypePrimaryColor() {
      return pokemonsColors[this.firstname].card;
    },
    pokemonId() {
      return `${this.pokemon.id}`.padStart(3, '0');
    }
  },
  data() {
    return {
      pokemonsColors,
    };
  },
}
</script>

<style lang="scss" scoped>
.card-item {
  height: 170px;
  padding: 8px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);

  &__number {
    font-size: 12px;
    font-weight: 700;
    align-self: flex-start;
  }

  &__pokemon-figure {
    height: 100px;
    margin: 0;
    cursor: pointer;
  }

  &__pokemon-image {
    height: 100px;
    width: 100px;

    &:hover {
      transform: scale(2);
      padding-top: 15px;
    }
  }

  &__name {
    font-weight: 700;
    font-size: 22px;
    width: 160px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__info {
    width: 160px;
    display: flex;
    gap: 20px;
    margin-top: 6px;
    justify-items: center;
  }
}
</style>