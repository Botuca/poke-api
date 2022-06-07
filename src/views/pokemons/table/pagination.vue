<template>
  <div>
    <div class="button">
      <font-awesome-icon icon="fa-chevron-left" />
    </div>
    <div class="button__page">0 ... 15</div>
    <div class="button">
      <font-awesome-icon icon="fa-chevron-right" />
    </div>
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

  &:hover {
    background-color: #333333;
    color: white;
    cursor: pointer;
  }

  &__page {
    display: flex;
    align-items: center;
    padding: 0px 8px;
  }
}
</style>