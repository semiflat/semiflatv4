<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import { useBreakpoints } from '@vueuse/core'
import breakpointsConst from '~/constants/breakpoints'
import Feature1Img from '~/assets/pocus/feature-1.png'
import Feature2Img from '~/assets/pocus/feature-2.png'
import Feature3Img from '~/assets/pocus/feature-3.png'
import ConsistencyIcon from '~/assets/icons/consistency.svg?component'
import ClickableIcon from '~/assets/icons/clickable.svg?component'
import IntuitiveIcon from '~/assets/icons/intuitive.svg?component'

const breakpoints = useBreakpoints(breakpointsConst)
const md = ref(breakpoints.smaller('md'))
const details = [
  {
    img: Feature1Img,
    icon: ConsistencyIcon,
    header: 'Scores',
    desc: 'Create custom groups of accounts, then create scores to define what constitutes an excellent vs. a good or a poor one.',
  },
  {
    img: Feature2Img,
    icon: ClickableIcon,
    header: 'Playbooks',
    desc: 'Create a sales playbook in Pocus, then define a human or automated action sequence for qualified accounts.',
  },
  {
    img: Feature3Img,
    icon: IntuitiveIcon,
    header: 'Lists',
    desc: 'Best local manufacturers and tons of love. That’s how our team gadgets are made.',
  },
]

const selectedDetail = ref(details[0])

// const breakpoints = useBreakpoints()

const swiperOptions = computed(() => ({
  slidesPerView: 'auto',
  spaceBetween: 24,
  navigation: false,
  loop: true,
  watchSlidesVisibility: true,
  autoplay: {
    delay: 4000,
  },
}))

const changeImage = (card: (typeof details)[0]) => {
  selectedDetail.value = card
  document.querySelector('#detail-image')?.classList.remove('fade-animation')
  setTimeout(() => document.querySelector('#detail-image')?.classList.add('fade-animation'), 0)
}
</script>

<template>
  <div class="page-content mt-16 md:mt-40">
    <h2
      class="text-xl font-semibold leading-[150%] md:mx-auto md:w-[45.375rem] md:text-center md:text-[1.75rem] leading-[120%]"
    >
      Pocus helps companies surface the most valuable deals based on their own data_
    </h2>
    <div
      class="py-[2.625rem] px-[1.75rem] md:pt-[4.375rem] hidden md:block md:pb-12 md:px-24 bg-[#F6F7F9] rounded-3 mt-12 md:mt-20 border-1 border-[#D8DFE5]"
    >
      <img
        :src="selectedDetail.img"
        class="mx-auto rounded-3 custom-shadow border-1 border-[#D8DFE5]"
      />
    </div>
    <div>
      <AppSlider v-if="md" class="mt-8" style="" :swiper-options="swiperOptions">
        <SwiperSlide v-for="(card, i) in details" :key="i" class="pb-3">
          <div
            class="py-[2.625rem] px-[1.75rem] md:pt-[4.375rem] md:pb-12 md:px-24 bg-[#F6F7F9] rounded-3 mt-12 md:mt-20"
          >
            <img
              :src="card.img"
              class="mx-auto rounded-3 custom-shadow border-1 border-[#D8DFE5]"
            />
          </div>
          <div class="shrink-0 mx-auto flex items-center justify-center mt-8">
            <div
              class="p-6 border border-[#D8DFE5] rounded-3 md:border-none max-w-[21.687rem] object-cover shadow-select"
            >
              <component :is="card.icon" class="mb-8" />
              <p class="mb-1 gradient-text font-semibold">{{ card.header }}</p>
              <p class="text-[#545959]">{{ card.desc }}</p>
            </div>
          </div>
        </SwiperSlide>
      </AppSlider>
      <div v-else class="shrink-0 mx-auto items-start justify-between hidden flex mt-10">
        <div
          v-for="(card, i) in details"
          :key="i"
          class="p-6 rounded-3 max-w-[21.687rem] object-cover cursor-pointer transition-all ease-linear duration-200 relative"
          :class="{
            'shadow-select before:content-empty before:absolute before:top-0 before:left-0 before-rounded-3 before:w-full before:h-full before:bg-transparent before:border before:border-[#D8DFE5]':
              selectedDetail.img === card.img,
          }"
          @click="changeImage(card)"
        >
          <component :is="card.icon" class="mb-8" />
          <p class="mb-1 gradient-text font-semibold">{{ card.header }}</p>
          <p class="text-[#545959]">{{ card.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.shadow-select {
  box-shadow: 0px 1px 0px rgba(17, 24, 28, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.08);
}

.custom-shadow {
  box-shadow: 0px 4px 12px -2px rgba(17, 24, 28, 0.12);
  filter: drop-shadow(0px 1px 2px rgba(17, 24, 28, 0.16));
  -webkit-filter: drop-shadow(0px 1px 2px rgba(17, 24, 28, 0.16));
}
</style>
