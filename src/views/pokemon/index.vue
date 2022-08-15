<template>
  <section class="content" :class="typePrimaryColor">
    <div class="content__intro">
      <a class="content__intro__back" @click="$router.go(-1)">
        <font-awesome-icon class="content__intro__back--padding" icon="fa-chevron-left" />
      </a>
      <span class="content__intro__title">{{ pokemon.name }}</span>
      <span class="content__intro__subtitle"> #{{id}}</span>
      <img class="content__intro__image" :src="imageURL" :alt="pokemon.name">
    </div>
    <div class="content__infos">
      <span> <strong>Base experience:</strong> {{ baseExperience }} </span>
      <span> <strong>Abilities:</strong> {{ abilities }} </span>
      <span> <strong>Types:</strong> {{ types }} </span>
      <span> <strong>Moves qtd.:</strong> {{ movesLength }} </span>
      <span> <strong>Height:</strong> {{ height }} m</span>
      <span> <strong>Weight:</strong> {{ weight }} Kg</span>
    </div>
    <div class="content__infos">
      <span v-for="(stat) in stats" :key="stat.name"> <strong>{{stat.name}}:</strong> {{ stat.base_stat }} </span>
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
      return pokemonsColors[this.fisrtname]?.card;
    },
    fisrtname() {
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
    baseExperience() {
      return this.pokemon?.base_experience;
    },
    stats() {
      return this.pokemon?.stats?.map(({stat, base_stat}) => {
        return { base_stat, name: stat.name.charAt(0).toUpperCase() + stat.name.slice(1) };
      });
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
  border: 8px solid #333333;
  border-top: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__intro {
  display: flex;
  flex-direction: column;

    &__back {
      cursor: pointer;
      margin-left: 16px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20px;
      border-radius: 10px;
      border: 2px solid black;
      padding: 2px;
    }

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
    padding-right: 16px;
  }
}
</style>