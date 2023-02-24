<script lang="ts" setup>
import type { Component } from 'vue'
import RightIcon from '~/assets/icons/icon-right.svg?component'

interface IllustrationCard {
  picture: Component
  caption: string,
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
      <caption class="block text-left font-semibold md:text-xl">{{ data?.caption }}</caption>
      <a v-if="data?.link" :href="data?.link"
        class="mt-4 px-0.5 cursor-pointer group case-study-btn transition duration-200 font-semibold duration-600 text-turquoise-400 hover:bg-turquoise-400 hover:text-white md:text-base inline-flex gap-2 items-center md:mt-6">
        Read
        Case study
        <Component :is="RightIcon" class="arrow transition-all duration-800 max-w-0 group-hover:max-w-32px" />
      </a>
      <div v-else class="mt-4 inline-block px-0.5 font-semibold opacity-50 text-turquoise-400 md:text-base md:mt-6">
        Coming Soon
      </div>
    </div>
  </div>
</template>