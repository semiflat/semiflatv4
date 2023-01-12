<script setup>
defineProps({
  step: {
    type: Number,
    default: 0,
  },
  steps: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <nav class="flex items-center justify-left" aria-label="Progress">
    <p class="text-sm font-medium">
      Krok
      {{ steps.findIndex((item) => item.key === step) + 1 }}
      z
      {{ steps.length }}
    </p>
    <ol role="list" class="ml-8 flex items-center space-x-5">
      <li v-for="item in steps" :key="item.name">
        <a
          v-if="item.key < step"
          :href="item.href"
          class="block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900"
        >
          <span class="sr-only">{{ item.name }}</span>
        </a>
        <a
          v-else-if="item.key === step"
          :href="item.href"
          class="relative flex items-center justify-center"
          aria-current="step"
        >
          <span class="absolute w-5 h-5 p-px flex" aria-hidden="true">
            <span class="w-full h-full rounded-full bg-indigo-200" />
          </span>
          <span class="relative block w-2.5 h-2.5 bg-indigo-600 rounded-full" aria-hidden="true" />
          <span class="sr-only">{{ item.name }}</span>
        </a>
        <a
          v-else
          :href="item.href"
          class="block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400"
        >
          <span class="sr-only">{{ item.name }}</span>
        </a>
      </li>
    </ol>
  </nav>
</template>
