<script lang="ts" setup>
import type { Component } from 'vue'
import YuzeData from '~/assets/case/Illustration-YuzeData-mobile.svg?component'

interface IllustrationCard {
    picture: Component
    caption: string
}
withDefaults(
  defineProps<{
    data?: IllustrationCard
  }>(),
  {
    data: () => ({
        picture: YuzeData,
        caption: 'YuzeData - a machine intelligence automation platform.'
    }),

  }
)

</script>

<template>
    <div class="border-1 rounded-3 border-[#BCDCDC] min-w-[308px] max-w-[33.5rem]">
        <Component :is="data.picture" class="w-full" />
        <div class="px-6 pb-8 text-sm md:pb-14 md:px-14">
            <caption class="block text-left font-semibold md:text-xl">{{ data.caption }}</caption>
            <button class="mt-4 transition duration-200 font-semibold text-turquoise-400 hover:bg-turquoise-400 hover:text-white md:text-base">Read Case study</button>
        </div>
    </div>
</template>