<template>
  <input
    v-model="pokemonIdentifier"
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
      pokemonIdentifier: '',
    };
  },
  methods: {
    onEnter() {
      this.$emit('search', this.pokemonIdentifier);
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
}
</style>