<script setup lang="ts">
import IconCheckCircle from '~//assets/icons/kalai/check-circle.svg?component'
import IconClear from '~//assets/icons/kalai/clear.svg?component'

const props = defineProps<{
  content: string
}>()

const emit = defineEmits(['close-toast'])
</script>

<template>
  <div class="flex justify-between items-center">
    <div class="app-toast__content flex items-center">
      <IconCheckCircle class="text-primary" />
      {{ props.content }}
    </div>
    <IconClear class="text-primary w-6 h-6 cursor-pointer" @click="() => emit('close-toast')" />
  </div>
</template>
