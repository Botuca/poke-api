<template>
  <section class="pokemons">
    <div class="pokemons__header">
      <input-search class="pokemons__header__input-search"/>
    </div>
    <pokemons-table />
  </section>
</template>

<script>
import { InputSearch } from '@/components';
import PokemonsTable from './TablePoke.vue';

export default {
  name: 'HomePage',
  components: {
    InputSearch,
    PokemonsTable,
  },
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