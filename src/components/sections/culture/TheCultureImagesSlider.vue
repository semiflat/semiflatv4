<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import img1 from '~/assets/culture-slider/1.png'
import img2 from '~/assets/culture-slider/2.png'
import img3 from '~/assets/culture-slider/3.png'
import img4 from '~/assets/culture-slider/4.png'
import img5 from '~/assets/culture-slider/5.png'
import img6 from '~/assets/culture-slider/6.png'
import img7 from '~/assets/culture-slider/7.png'
import img8 from '~/assets/culture-slider/8.png'

const aboutImgs = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
]

const breakpoints = useBreakpoints()
const swiperBreakpoints = {
  [breakpoints.lg]: {
    spaceBetween: 32,
  },
}

const swiperOptions = computed(() => ({
  slidesPerView: 'auto',
  spaceBetween: 24,
  navigation: false,
  loop: true,
  speed: 5000,
  updateOnWindowResize: true,
  watchSlidesVisibility: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: swiperBreakpoints,
}))
</script>

<template>
  <div class="relative">
    <div class="">
      <AppSlider class="mt-16 md:mt-40" style="" :swiper-options="swiperOptions">
        <SwiperSlide
          v-for="(img, i) in aboutImgs"
          :key="i"
          class="shrink-0 flex items-center justify-center"
          :class="{ 'w-[144px] md:w-[240px]': i % 2 !== 0, 'w-[240px] md:w-[400px]': i % 2 === 0 }"
        >
          <img
            :src="img"
            class="h-[180px] md:h-[300px] w-[240px] md:w-[400px] object-cover object-center rounded-4"
          />
        </SwiperSlide>
      </AppSlider>
    </div>
  </div>
</template>

<style>
.swiper > .swiper-wrapper {
  transition-timing-function: linear;
}
</style>
