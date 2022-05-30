<template>
  <section class="page">
    <HeaderPoke />
    <section class="page__body">
      <InputSearch class="page__body__input-search"/>
      <CardPoke 
        v-for="(pokemon, index) in pokemons"
        :key="index"
        v-bind="{ pokemon }"
      />
    </section>
    <footer class="footer">
      <div />
    </footer>
  </section>
</template>

<script>
import CardPoke from '@/components/CardPoke.vue';
import InputSearch from '@/components/InputSearch.vue';
import HeaderPoke from '@/components/HeaderPoke.vue';
import { getPokemonsTable } from '@/services/index.js';

export default {
  name: 'HomePage',
  components: {
    CardPoke,
    InputSearch,
    HeaderPoke,
  },
  data() {
    return {
      pokemons: [],
    };
  },
  async created() {
    this.pokemons = await getPokemonsTable("pokemon?limit=15&offset=0");
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;

  .page__body {
    margin: 28px 10px;
    display: grid;
    column-gap: 8px;
    row-gap: 16px;

    &__input-search {
      width: 365px;
      margin-bottom: 20px;
      padding: 0px 8px;
      grid-column: span 5;
    }
  }
  
  .footer {
    height: 100px;
    padding: 0px 10px 10px 10px;
    position: absolute;
    bottom: 0;
    width: 940px;
    box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    background-color: #ECECEC;
    margin-top: auto;
  }

  div {
    width: 175px;
    height: 85.5px;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    background-color: #ECECEC;
    box-shadow: inset 0 -3px 3px rgba(0, 0, 0, 0.15);
  }
}
</style>