<template>
  <div>
    <div v-if="!!offset" class="button" @click="onChangePage(-15)"> 
      <font-awesome-icon icon="fa-chevron-left" />
    </div>
    <div class="button__page">{{ offset + 1 }} ... {{ offset + 15 }}</div>
    <div class="button" @click="onChangePage(+15)">
      <font-awesome-icon icon="fa-chevron-right" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationTable",
  computed: {
    offset() {
      return Number(this.$route.query.offset) || 0;
    },
  },
  methods: {
    onChangePage(pages) {
      if (this.isFirstPage(pages)) return;

      this.$emit('on-change', pages);
    },
    isFirstPage(pages) {
      return this.offset + pages < 0;
    },
  }
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