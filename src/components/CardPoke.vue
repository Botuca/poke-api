<template>
  <article class="card-item">
    <span class="card-item__number">nº 035</span>
    <img class="card-item__pokemon-image" src="../assets/clefairy.png" alt="Clefairy">
    <span class="card-item__name">Clefairy</span>
    <div class="card-item__type">
      <div class="card-item__type-name">
        <span>Fairy</span>
      </div>
      <div class="card-item__type-name">Fairy</div>
      <div class="card-item__type-name">Fairy</div>
      <div class="card-item__type-name">Fairy</div>
    </div>
  </article>
</template>

<script>

export default {
  name: 'CardPoke',
}
</script>

<style lang="scss" scoped>
.card-item {
  max-height: 220px;
  padding: 8px;
  background: rgba(214, 133, 173, 0.3);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__number {
    font-size: 12px;
    font-weight: 700;
  }

  &__pokemon-image {
    height: 126px;
    width: 128px;
    margin-top: -20px;
  }

  &__name {
    margin-top: -20px;
    font-weight: 700;
    font-size: 22px;
  }

  &__type {
    width: 160px;
    display: grid;
    margin-top: 6px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    row-gap: 10px;
    column-gap: 10px;
  }

  &__type-name {
    font-size: 12px;
    color: #FFFFFF;
    width: 70px;
    height: 20px;
    background: #D685AD;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>