<script lang="ts" setup>
import type { Component } from 'vue'

interface IllustrationCard {
  picture: Component
  caption: string
  link?: string
}
defineProps<{
  data?: IllustrationCard
}>()
</script>

<template>
  <div class="border-1 rounded-3 border-[#BCDCDC] min-w-[308px] max-w-[33.5rem] select-none">
    <img :src="data?.picture" class="w-full" />
    <div class="px-6 pb-8 text-sm md:pb-14 md:px-14">
      <caption class="block text-left font-semibold md:text-xl">
        {{
          data?.caption
        }}
      </caption>
      <a
        v-if="data?.link"
        :href="data?.link"
        class="button button-arrow flex mt-4 pl-1 pr-2 cursor-pointer group case-study-btn transition duration-300 font-semibold text-turquoise-400 hover:bg-turquoise-400 hover:text-white md:text-base inline-flex gap-1 items-center md:mt-6"
        >Read Case study
        <AppArrow />
      </a>
      <div
        v-else
        class="mt-4 inline-block px-0.5 font-semibold opacity-50 text-turquoise-400 md:text-base md:mt-6"
      >
        Coming Soon
      </div>
    </div>
  </div>
</template>

<style>
.button-arrow .arrow-icon {
  overflow: visible;
  margin-left: 3px;
  width: 8px;
}
.button-arrow .arrow-head {
  transform: translateX(0);
  transition: transform 200ms ease-in-out 300ms;
}
.button-arrow .arrow-body {
  opacity: 0;
  transform: scaleX(1);
  transition: transform 200ms ease-in-out 300ms, opacity 200ms ease-in-out 300ms;
}
.button-arrow:hover .arrow-head {
  transform: translateX(3px);
}
.button-arrow:hover .arrow-body {
  opacity: 1;
  transform: scaleX(2);
}
</style>
