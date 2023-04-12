<script setup lang="ts">
export interface Image {
  urlDesktop: string
  urlMobile?: string
  altText?: string
}

const props = defineProps<Image>()
</script>

<template>
  <picture>
    <source media="(min-width: 768px)" :srcset="props.urlDesktop" />
    <img :src="props.urlMobile || props.urlDesktop" :alt="props.altText || ''" loading="lazy" />
  </picture>
</template>

<style lang="scss" scoped>
</style>
