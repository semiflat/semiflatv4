<script setup lang="ts">
import type { Image } from './AppImage.vue'

const props = defineProps<{
  images: Image[]
  title?: string
}>()
</script>

<template>
  <div class="images-group">
    <h2 v-if="props.title" class="images-group__title">{{ props.title }}</h2>
    <div class="images-group__grid">
      <AppImage v-for="image in props.images" :key="image.urlDesktop" v-bind="image" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.images-group {
  &__title {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    font-weight: 600;

    @media (min-width: 768px) {
      margin-bottom: 4rem;
      font-size: 1.75rem;
      text-align: center;
    }

    @media (min-width: 1040px) {
      margin-bottom: 5rem;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;

      > *:nth-last-child(3),
      > *:only-child {
        grid-column: 1 / 3;
      }
    }
  }
}
</style>
