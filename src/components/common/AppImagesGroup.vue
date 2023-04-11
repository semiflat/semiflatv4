<script setup lang="ts">
import type { Image } from './AppImage.vue'

const props = defineProps<{
  images: Image[]
}>()
</script>

<template>
  <div class="images-group">
    <AppImage v-for="image in props.images" :key="image.urlDesktop" v-bind="image" />
  </div>
</template>

<style lang="scss" scoped>
.images-group {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;

    > *:first-child {
      grid-column: 1 / 3;
    }
  }
}
</style>
