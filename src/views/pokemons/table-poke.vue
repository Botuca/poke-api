<template>
  <section>
    <section v-if="hasPokemons" class="table">
      <CardPoke
        v-for="(pokemon, index) in pokemons"
        :key="index"
        v-bind="{ pokemon }"
      />
    </section>
    <div v-else class="not-found-message">
      <span>Deu ruim, por favor pesquise outro pokemon ai com o nome ou id certo meu chapa!!!</span>
    </div>
  </section>
</template>

<script>
import { CardPoke } from "@/components";

export default {
  name: 'PokemonsTable',
  props: {
    pokemons: {
      type: Array,
      default: () => []
    },
  },
  components: {
    CardPoke,
  },
  computed: {
    hasPokemons() {
      return !!this.pokemons?.length;
    },
  },
}
</script>

<style lang="scss" scoped>
.table {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 16px;
  column-gap: 8px;
}

.not-found-message {
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
}
</style>