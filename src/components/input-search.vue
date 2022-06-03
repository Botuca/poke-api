<template>
  <input
    v-model="pokemonId"
    autofocus
    type="search"
    maxlength="30"
    class="input-search"
    placeholder="Pesquisar..." 
    @keyup.enter="onEnter"
  />
</template>

<script>
export default {
  name: "InputSearch",
  data() {
    return {
      pokemonId: '',
    };
  },
  methods: {
    onEnter() {
      this.$emit('search', this.pokemonId);
    }
  }
}
</script>

<style lang="scss" scoped>
.input-search {
  font-size: 18px;
  height: 34px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border: none;
  width: 365px;
  padding: 0px 8px;
}
</style>