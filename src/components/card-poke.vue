<template>
  <article class="card-item" :class="pokemonTypePrimaryColor">
    <span class="card-item__number"> nº {{ pokemonId }} </span>
    <img class="card-item__pokemon-image" :src="pokemonImageURL" :alt="pokemon.name">
    <span v-title="pokemon.name" class="card-item__name"> {{ pokemon.name }} </span>
    <div class="card-item__info">
      <div
        v-for="(type, index) in pokemon.types"
        class="card-item__type-name"
        :class="pokemonsColors[type.type.name].typeName"
        :key="index"
      >
        <span>{{ type.type.name }}</span>
      </div>
    </div>
  </article>
</template>

<script>
import { pokemonsColors } from '@/utils/pokemon-colors.js';

export default {
  name: 'CardPoke',
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
    fisrtTypeName() {
      return [this.pokemon.types[0].type.name];
    },
    pokemonTypePrimaryColor() {
      return pokemonsColors[this.fisrtTypeName].card;
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
  max-height: 170px;
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

  &__pokemon-image {
    height: 100px;
    width: 100px;
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

  &__type-name {
    font-size: 12px;
    color: #FFFFFF;
    width: 70px;
    height: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  }
}
</style>