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

const isHovering = ref(false)
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
      <div
        v-if="data?.link"
        class="case-study-btn-wrapper mt-4 md:mt-6"
        :class="{ 'case-study-btn-wrapper-active': isHovering }"
        @mouseover="isHovering = true"
        @mouseout="isHovering = false"
      >
        <a
          :href="data?.link"
          class="case-study-btn"
          :class="{ 'case-study-btn-active': isHovering }"
          >Read Case study
        </a>
      </div>
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
.case-study-btn-wrapper {
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  /* Content/Accent */
  display: inline-flex;
  position: relative;
}
.case-study-btn-wrapper .case-study-btn {
  display: inline-block;
  background-image: linear-gradient(86.76deg, #407a7a, #54aba3, #fff, #fff, #fff);
  background-size: 400% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  transition: 0.75s all;
  z-index: 2;
}
.case-study-btn-wrapper:after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(86.76deg, #407a7a 0%, #54aba3 100%);
  transform: translateY(0.8em) scaleY(0.1);
  transition: 0.2s all;
}

.case-study-btn-wrapper-active:after {
  transform: none;
}
.case-study-btn-active {
  background-position: 75% 100%;
  padding: 0 5px;
}
</style>
