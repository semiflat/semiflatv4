<script setup lang="ts">
import type { Author } from '../common/AppAuthor.vue'

const props = defineProps<{
  quote: string
  author: Author
}>()
</script>

<template>
  <AppTestimonial v-bind="props" />
</template>
