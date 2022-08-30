<template>
  <footer class="footer">
    <div class="footer__created-by" />
    <div class="footer__semi-circle"/>
    <div class="footer__created-by">
      <div>
        <a href="https://www.instagram.com/gustavo_eburneo/" target="_blank">
          <img class="img__content" src="../assets/instagram-icon.svg" alt="instagram-icon">
        </a>
        <a href="https://github.com/Botuca/" target="_blank">
          <img class="img__content" src="../assets/github-icon.svg" alt="github-icon">
        </a>
        <a href="https://twitter.com/luiz_eburneo" target="_blank">
          <img class="img__content" src="../assets/twitter-icon.svg" alt="twitter-icon">
        </a>
        <a href="https://www.linkedin.com/in/luizeburneo/" target="_blank">
          <img class="img__content" src="../assets/linkedin-icon.svg" alt="linkedin-icon">
        </a>
      </div>
      <span>Criado por: Luiz Gustavo Eburneo</span>
    </div>
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
  width: 960px;
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

  &__created-by {
    width: 390px;
    align-self: flex-end;
    text-align: end;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .img__content {
      height: 32px;
      width: 32px;
      padding-left: 16px;
    }
  }
}
</style>