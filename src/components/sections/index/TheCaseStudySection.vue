<script lang="ts" setup>
import type { Component } from 'vue'
import { SwiperSlide } from 'swiper/vue'

import YuzeData from '~/assets/case/Illustration-YuzeData-mobile.svg?url'
import Pocus from '~/assets/case/Illustration-Pocus.svg?url'
import Useful from '~/assets/case/Illustration-Useful.svg?url'
import Phenom from '~/assets/case/Illustration-Phenom.svg?url'

interface IllustrationCard {
  picture: Component
  caption: string
}
// withDefaults(
defineProps<{
  data?: IllustrationCard
}>()
const breakpoints = useBreakpoints()

const swiperBreakpoints = {
  [breakpoints.lg]: {
    slidesPerView: 'auto',
    spaceBetween: 32,
    updateOnWindowResize: true,
    watchSlidesVisibility: true,
  },
}

const swiperOptions = computed(() => ({
  slidesPerView: 'auto',
  spaceBetween: 24,
  centeredSlides: false,
  navigation: false,
  pagination: {
    clickable: true,
  },
  breakpoints: swiperBreakpoints,
}))

const cases = [
  {
    picture: Pocus,
    caption: 'Designing Pocus - product-led sales tool that raised a $23M Series A.',
    link: '/pocus',
  },
  {
    picture: Useful,
    caption: 'Helping Useful raise $5M empower continuous delivery tech teams.',
    link: '/useful',
  },
  {
    picture: Phenom,
    caption: 'Supporting Phenom - an HR-Tech unicorn by building a dedicated design team.',
  },
  {
    picture: YuzeData,
    caption: 'YuzeData - a machine intelligence automation platform.',
  },
]
</script>

<template>
  <div class="mt-16 md:mt-46 gap-6 md:gap-8 page-content">
    <AppSlider class="" style="" :swiper-options="swiperOptions">
      <SwiperSlide v-for="el in cases" :key="el.caption" class="sm:max-w-[33.5rem]">
        <AppCaseStudyCard :data="el" />
      </SwiperSlide>
    </AppSlider>
  </div>
</template>

<style>
.swiper {
  @apply !overflow-visible;
}
.swiper-pagination {
  @apply !-bottom-12;
}

.swiper-pagination-bullet {
  @apply !bg-black/40;
}
.swiper-pagination-bullet-active {
  @apply !bg-black/80;
}
</style>
