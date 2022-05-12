<template>
  <Application id="app"/>
</template>

<script>
import Application from './views/Application.vue';

export default {
  name: 'App',
  components: {
    Application,
  }
}
</script>

<style>
#app {
  margin: auto;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  color: #2c3e50;
  width: 50vw;
  height: 100vh;
  background-color: #ECECEC;
}

body {
  background-color: #333333;
  margin: 0px !important;
}
</style>


