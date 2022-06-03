<template>
  <div>
    <div class="button button__direction">&lt;</div>
    <div class="button__page">0 ... 15</div>
    <div class="button button__direction">&gt;</div>
  </div>
</template>

<script>
export default {
  name: "PaginationTable",
}
</script>

<style lang="scss" scoped>
.button {
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 50%;
  font-weight: bold;

  &__page {
    padding: 0px 8px;
  }
}
</style>