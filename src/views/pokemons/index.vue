<template>
  <section class="pokemons">
    <div class="pokemons__header">
      <input-search class="pokemons__header__input-search" @search="onSearch" />
    </div>
    <table-poke :pokemons="[...pokemons]"/>
  </section>
</template>

<script>
import { InputSearch } from '@/components';
import TablePoke from './table-poke.vue';
import { getPokemonSearch, getPokemonsTable } from '@/services/index.js';

export default {
  name: 'HomePage',
  components: {
    InputSearch,
    TablePoke,
  },
  data() {
    return {
      pokemons: [],
      getPokemon: [],
    };
  },
  created() {
    this.loadPokemonsTable();
  },
  methods: {
    async onSearch(pokemonIdentifier) {
      if (!pokemonIdentifier) {
        await this.loadPokemonsTable();
        return;
      }

      await this.loadPokemon(pokemonIdentifier);
    },
    async loadPokemonsTable() {
      this.pokemons = await getPokemonsTable("https://pokeapi.co/api/v2/pokemon?limit=15&offset=0");
    },
    async loadPokemon(pokemonIdentifier) {
      this.pokemons = await getPokemonSearch(`https://pokeapi.co/api/v2/pokemon/${pokemonIdentifier}`) || [];
    }
  }
}
</script>

<style lang="scss" scoped>
.pokemons {
  display: flex;
  flex-direction: column;
  padding: 8px;

  &__header {
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;

    &__input-search {
      width: 365px;
      margin-bottom: 20px;
      padding: 0px 8px;
    }
  }
}
</style>