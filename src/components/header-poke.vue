<template>
  <header class="header"> 
    <button class="header-menu--button">
      <router-link to="/pokemons">Pokemons</router-link>
    </button>
    <button class="header-menu--button">
      <router-link to="/berries">Berries</router-link>
    </button>
    <button class="header-menu--button">
      <router-link to="/items">Items</router-link>
    </button>
    <div class="header-circle">
      <div class="header-circle__inside" />
    </div>
    <button class="header-menu--button">
      <router-link to="/locations">Locations</router-link>
    </button>
    <button class="header-menu--button">
      <router-link to="/moves">Moves</router-link>
    </button>
    <button class="header-menu--button">
      <router-link to="/contact">Contact</router-link>
    </button>
  </header>
</template>

<script>
export default {
  name: "HeaderPoke",
}
</script>

<style lang="scss" scoped>
.header {
  height: 100px;
  width: 960px;
  background-color: rgb(255,54,24, 0.9);
  border-bottom: 10px solid #333333;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}

.header-circle {
  height: 150px;
  width: 150px;
  background-color: #ECECEC;
  border: 10px solid #333333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 90px;

  &__inside {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.4);
  }
}

.header-menu--button {
  height: 30px;
  width: 120px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin-bottom: 6px;
  background: #333333;
  border: 1px solid #000000;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  a {
    width: 120px;
    color: #FFFFFF;
    text-decoration: none;
  }
}
</style>