<template>
  <section class="section">
    <HeaderPoke />
    <div class="body">
      <input type="text" class="input-search" placeholder="Pesquisar...">
      <article class="card-table">
        <CardPoke />
      </article>
    </div>
  </section>
</template>

<script>
import CardPoke from '../components/CardPoke.vue';
import HeaderPoke from '../components/HeaderPoke.vue';

export default {
  name: 'ApplicationApp',
  components: {
    CardPoke,
    HeaderPoke,
  }
}
</script>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
}

.body {
  margin: 20px 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;

  span {
    font-size: 12px;
    color: #626161;
  }
}

.input-search {
  height: 34px;
  font-size: 18px;
  border-radius: 10px;
  grid-column: span 2;
}

.card-table {
  height: 50px;
  border: 2px solid #000000;
  grid-column: span 5;
}
</style>