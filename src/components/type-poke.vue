<template>
  <div
    class="type-name"
    :class="pokemonsColors[type].name"
  >
    <span>{{ type }}</span>
  </div>
</template>

<script>
import { pokemonsColors } from '@/utils/pokemon-colors.js';

export default {
  name: 'TypePoke',
  props: {
    type: String,
  },
  data() {
    return {
      pokemonsColors,
    };
  }
}
</script>

<style lang="scss" scoped>
.type-name {
  font-size: 12px;
  color: #FFFFFF;
  width: 70px;
  height: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
}
</style>