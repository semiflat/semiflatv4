<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    titleClass?: string
  }>(),
  {
    title: '',
    titleClass: '',
  }
)
</script>

<template>
  <div class="p-4 shadow-light rounded-2">
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-semibold w-1/2 w-full" :class="titleClass">
        {{ title }}
      </h2>
      <slot name="title" />
    </div>
    <slot />
  </div>
</template>
