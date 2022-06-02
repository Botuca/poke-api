<template>
  <section id=app>
    <router-view />
  </section>
</template>

<script>
export default {
  name: 'App',
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
  min-height: 100vh;
  background-image: linear-gradient(125deg, #ececec 25%, #dedede 25%, #dedede 50%, #ececec 50%, #ececec 75%, #dedede 75%, #dedede 100%);
  background-size: 73.25px 104.61px;
}

body {
  background-image: linear-gradient(125deg, #333333 25%, #474646 25%, #474646 50%, #333333 50%, #333333 75%, #474646 75%, #474646 100%);
  background-size: 73.25px 104.61px;
  margin: 0px !important;
}
</style>


