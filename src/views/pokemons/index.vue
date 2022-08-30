<template>
  <section class="content">
    <input-search @search="onSearch" />
    <table-poke />
  </section>
</template>

<script>
import TablePoke from './table/table-poke.vue';
import { InputSearch } from '@/components';

export default {
  name: 'PokemonsTable',
  components: {
    InputSearch,
    TablePoke,
  },
  methods: {
    async onSearch(pokemonId) {
      if (!pokemonId) return;

      this.$router.push({
        name: 'pokemon',
        params: {
          id: pokemonId,
        },
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding: 8px;
}
</style>