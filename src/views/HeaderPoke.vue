<template>
  <header class="header"> 
    <button class="header-menu--button">Pokemons</button>
    <button class="header-menu--button">Berries</button>
    <button class="header-menu--button">Items</button>
    <div class="header-circle"/>
    <button class="header-menu--button">Locations</button>
    <button class="header-menu--button">Moves</button>
    <button class="header-menu--button">Contact</button>
  </header>
</template>

<script>
export default {
  name: "HeaderPoke",
}
</script>

<style lang="scss" scoped>
.header {
  height: 150px;
  width: 50vw;
  background-color: rgba(241,0,0,0.7);
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
  position: relative;
  top: 90px;
}

.header-menu--button {
  height: 30px;
  width: 120px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin-bottom: 6px;
  background: #333333;
  border: 1px solid #000000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);;
  border-radius: 5px;
  color: #FFFFFF;
}
</style>