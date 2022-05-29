<template>
  <article class="card-item">
    <span class="card-item__number"> nº 035 </span>
    <img class="card-item__pokemon-image" :src="pokemonImage" :alt="pokemon.name">
    <span class="card-item__name"> {{ pokemon.name }} </span>
    <div class="card-item__info">
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
  props: {
    pokemon: { 
      type: Object, 
      required: true,
    },
  },
  computed: {
    pokemonImage() {
      return this.pokemon.sprites.other['official-artwork'].front_default;
    }
  }
}
</script>

<style lang="scss" scoped>
.card-item {
  height: 220px;
  max-height: 220px;
  padding: 8px;
  background: rgba(214, 133, 173, 0.3);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);

  &__number {
    font-size: 12px;
    font-weight: 700;
  }

  &__pokemon-image {
    height: 100px;
    width: 100px;
  }

  &__name {
    font-weight: 700;
    font-size: 22px;
  }

  &__info {
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
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  }
}
</style>