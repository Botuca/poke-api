<template>
  <section>
    <div v-if="hasPokemons" class="content">
      <pagination-table class="content__pagination" @on-change="onChangePage" />
      <section class="content__table">
        <CardPoke
          v-for="(pokemon, index) in pokemons"
          v-bind="{ pokemon }"
          :key="index"
          @on-click="onClickPokemon"
        />
      </section>
    </div>
    <div v-else class="not-found">
      <strong class="not-found__message">Carregando...</strong>
    </div>
  </section>
</template>

<script>
import { CardPoke } from "@/components";
import PaginationTable from './pagination.vue';
import { getPokemonsTable } from '@/services/index.js';

export default {
  name: 'PokemonsTable',
  components: {
    CardPoke,
    PaginationTable,
  },
  data() {
    return {
      pokemons: [],
      isLoading: false,
    };
  },
  computed: {
    hasPokemons() {
      return !!this.pokemons?.length && !this.isLoading;
    },
    offset() {
      return Number(this.$route.query.offset) || 0;
    },
  },
  watch: {
    offset: {
      handler() {
        this.loadPokemonsTable();
      }
    }
  },
  async created() {
    await this.loadPokemonsTable();
  },
  methods: {
    async onChangePage(offset) {
      this.$router.push({
        name: 'pokemons',
        query: {
          offset: Number(this.$route.query.offset || 0) + offset,
        },
      });
    },
    async loadPokemonsTable() {
      this.isLoading = true;

      this.pokemons = [];
      this.pokemons = await getPokemonsTable(`https://pokeapi.co/api/v2/pokemon?limit=15&offset=${this.offset}`).then(data => {
        this.isLoading = false;

        return data;
      });
    },
    onClickPokemon(pokemonId) {
      this.$router.push({name: 'pokemon', params: {id: pokemonId}});
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin-top: 20px;

  &__pagination {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 8px;
  }
  
  &__table {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 16px;
    column-gap: 8px;
  }
}

.not-found {
  display: flex;
  justify-content: center;
  width: 960px;

  &__message {
    margin-top: 150px;
    font-size: 24px;
  }
}
</style>