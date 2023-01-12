<script setup lang="ts">
import IconWarning from '~//assets/icons/kalai/warning-1.svg?component'
import IconClear from '~//assets/icons/kalai/clear.svg?component'

const props = defineProps<{
  content: string
}>()

const emit = defineEmits(['close-toast'])
</script>

<template>
  <div class="flex justify-between items-center">
    <div class="app-toast__content flex items-center">
      <IconWarning class="text-tomate" />
      {{ props.content }}
    </div>
    <IconClear class="text-tomate w-6 h-6 cursor-pointer" @click="() => emit('close-toast')" />
  </div>
</template>
