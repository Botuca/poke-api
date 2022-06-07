<template>
  <header class="header">
    <button class="header-menu--button" :class="{ 'selected': selectedMenuItem === 1}" @click="onClickMenuItem('pokemons', 0)">
      Pokemons
    </button>
    <button class="header-menu--button" :class="{ 'selected': selectedMenuItem === 1}" @click="onClickMenuItem('moves')">
      Moves
    </button>
    <button class="header-menu--button" :class="{ 'selected': selectedMenuItem === 1}" @click="onClickMenuItem('locations')">
      Locations
    </button>
    <div class="header-circle">
      <div class="header-circle__inside" />
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderPoke",
  data() {
    return {
      selectedMenuItem: '',
    };
  },
  created() {
    this.selectedMenuItem = this.$route.name;
  },
  methods: {
    onClickMenuItem(route, offset) {
      if (this.selectedMenuItem === route && !this.$route.params.id && !this.$route.query.offset) return;
      this.selectedMenuItem = route;

      this.$router.push({ name: this.selectedMenuItem, query: { offset } });
    },
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  width: 940px;
  background-color: rgb(255,54,24, 0.9);
  border-bottom: 10px solid #333333;
  display: flex;
  padding: 10px;
  align-items: flex-end;

  .header-circle {
    height: 150px;
    width: 150px;
    background-color: #ECECEC;
    border: 10px solid #333333;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    top: 25px;

    &__inside {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
    }
  }

  .header-menu--button {
    height: 30px;
    width: 100px;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background: #333333;
    border: 1px solid #000000;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin-right: 10px;
    color: #FFFFFF;
    cursor: pointer;
  }
}
</style>