<script setup lang="ts">
const props = defineProps<{
  decor?: string
}>()
</script>

<template>
  <AppBlock
    class="case-study-block"
    v-bind="props"
  >
    <div class="page-content">
      <slot></slot>
    </div>
  </AppBlock>
</template>

<style lang="scss" scoped>
</style>
