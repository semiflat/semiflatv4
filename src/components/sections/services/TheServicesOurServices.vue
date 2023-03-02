<script setup lang="ts">
defineProps<{
  experiences: any
}>()
</script>

<template>
  <div class="page-content mt-16 md:mt-40">
    <div class="">
      <h2
        class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem] md:max-w-[45rem] md:mx-auto"
      >
        {{ experiences.header }}
      </h2>
      <div class="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-16 mt-12 md:mt-20">
        <div v-for="(el, i) in experiences.experiencesArr" :key="i">
          <component :is="el.icon" class="mb-8 text-turquoise-400" />
          <p class="text-blue-300 font-semibold mb-1">{{ el.header }}</p>
          <p class="text-blue-200">{{ el.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
