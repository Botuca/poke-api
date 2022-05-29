<template>
  <HomePage id="app"/>
</template>

<script>
import HomePage from './views/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  }
}
</script>

<style lang="scss">
@import './styles/index.scss';

#app {
  margin: auto;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  color: #2c3e50;
  width: 960px;
  height: 100vh;
  background-color: #ECECEC;
}

body {
  background-color: #333333;
  margin: 0px !important;
}
</style>


