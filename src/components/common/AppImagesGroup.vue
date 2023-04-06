<script setup lang="ts">
interface GroupImage {
  urlDesktop: string
  urlMobile: string
  altText?: string
  columnsSpan?: number
}

const props = defineProps<{
  images: GroupImage[]
}>()
</script>

<template>
  <div class="images-group">
    <picture v-for="image in props.images" :key="image.urlDesktop">
      <source media="(min-width: 768px)" :srcset="image.urlDesktop" />
      <img :src="image.urlMobile" :alt="image.altText || ''" loading="lazy" />
    </picture>
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
