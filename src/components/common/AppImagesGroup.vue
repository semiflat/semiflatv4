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
