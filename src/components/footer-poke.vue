<template>
  <footer class="footer">
    <div class="footer__semi-circle"/>
  </footer>
</template>

<script>
export default {
  name: 'FooterPoke',
}
</script>

<style lang="scss" scoped>
.footer {
  height: 100px;
  padding: 0px 10px 10px 10px;
  width: 940px;
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  background-color: #ECECEC;
  margin-top: auto;

  &__semi-circle {
    width: 175px;
    height: 85.5px;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    background-color: #ECECEC;
    box-shadow: inset 0 -3px 3px rgba(0, 0, 0, 0.15);
  }
}
</style>