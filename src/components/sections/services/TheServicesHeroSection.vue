<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import { useBreakpoints } from '@vueuse/core'
import BackgroundMobileLeft from '~/assets/bg-left-mobile.svg?component'
import BackgroundDesktop from '~/assets/bg-hero-desktop.svg?component'
import WorkshopsIcon from '~/assets/experiences/workshops.svg?component'
import ResearchIcon from '~/assets/experiences/research.svg?component'
import UXIcon from '~/assets/experiences/UX.svg?component'
import InterfaceIcon from '~/assets/experiences/interface.svg?component'
import DesignIcon from '~/assets/experiences/design.svg?component'
import SupportIcon from '~/assets/experiences/support.svg?component'
import WorkshopsGradientIcon from '~/assets/experiences/workshops-gradient.svg?component'
import ResearchGradientIcon from '~/assets/experiences/research-gradient.svg?component'
import UXGradientIcon from '~/assets/experiences/UX-gradient.svg?component'
import InterfaceGradientIcon from '~/assets/experiences/interface-gradient.svg?component'
import DesignGradientIcon from '~/assets/experiences/design-gradient.svg?component'
import SupportGradientIcon from '~/assets/experiences/support-gradient.svg?component'
import breakpointsConst from '~/constants/breakpoints'
import type { ServiceTypes } from '~/types/service'

defineProps<{
  modelValue?: ServiceTypes
}>()
const emit = defineEmits(['update:modelValue'])
const discovery = [
  {
    icon: WorkshopsIcon,
    iconActive: WorkshopsGradientIcon,
    label: 'Workshops & analysis',
    value: 'workshops',
  },
  {
    icon: ResearchIcon,
    iconActive: ResearchGradientIcon,
    label: 'User research',
    value: 'research',
  },
  {
    icon: UXIcon,
    iconActive: UXGradientIcon,
    label: 'User experience design',
    value: 'experience',
  },
  {
    icon: InterfaceIcon,
    iconActive: InterfaceGradientIcon,
    label: 'User interface design',
    value: 'interface',
  },
  {
    icon: DesignIcon,
    iconActive: DesignGradientIcon,
    label: 'Design system',
    value: 'design',
  },
  {
    icon: SupportIcon,
    iconActive: SupportGradientIcon,
    label: 'Continuous support',
    value: 'support',
  },
]

const breakpoints = useBreakpoints(breakpointsConst)
const md = ref(breakpoints.smaller('md'))

const swiperOptions = computed(() => ({
  slidesPerView: 1,
  spaceBetween: 24,
  navigation: false,
  loop: true,
  watchSlidesVisibility: true,
  autoplay: {
    delay: 2000,
  },
}))
</script>

<template>
  <div class="relative page-content">
    <BackgroundMobileLeft class="absolute top-28 left-0 md:hidden" />
    <BackgroundDesktop class="hidden absolute -left-42 md:block -top-60" />
    <div class="mt-3.5rem md:mt-40 md:text-center">
      <h1 class="hero-title md:text-[2.5rem] md:leading-[120%] md:mt-6">
        We are a full-service product design agency_
      </h1>
      <p class="mt-6 text-blue-200">
        Our approach to design is technical - not purely aesthetic. Every design decision is process
        and data-driven
        <br class="hidden md:block" />
        to deliver an intuitive and delightful experience for your users.
      </p>
      <div class="mt-2.5rem">
        <AppButton href="mailto:hello@semiflat.com">Get in touch</AppButton>
        <AppButton
          text
          href="https://calendly.com/d/g3b-8j5-vzs/semiflat-design-partner-introduction"
          >Schedule a call</AppButton
        >
      </div>
    </div>
    <div>
      <AppSlider v-if="md" class="mt-14 relative" style="" :swiper-options="swiperOptions">
        <SwiperSlide v-for="(el, i) in discovery" :key="i" class="z-10">
          <div class="shrink-0 mx-auto flex items-center justify-center">
            <div
              class="py-6 px-8 transition-all duration-300 rounded-4 min-w-[13.75rem] my-0.25 mx-auto relative"
              :class="{
                'before:bg-white before:content-none before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:rounded-4 before:border-1 before:border-[#BCDCDC] shadow-primary':
                  el.value === modelValue,
              }"
              @click="emit('update:modelValue', el.value)"
            >
              <component :is="el.icon" class="mx-auto mb-4 text-turquoise-400 relative z-1" />
              <p class="font-semibold leading-[150%] cursor-pointer text-center relative z-1">
                {{ el.label }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </AppSlider>
      <div v-else class="grid grid-cols-3 gap-x-8 gap-y-4 mt-40 z-10 relative">
        <div
          v-for="(el, i) in discovery"
          :key="i"
          class="text-center group p-6 w-full transition-all cursor-pointer duration-300 rounded-4 relative"
          :class="{
            'before:bg-white before:content-none before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:rounded-4 before:border-1 before:border-[#BCDCDC] shadow-primary':
              el.value === modelValue,
          }"
          @click="emit('update:modelValue', el.value)"
        >
          <component
            :is="el.iconActive"
            v-if="el.value === modelValue"
            class="mx-auto mb-4 text-turquoise-400 relative z-1"
          />
          <component :is="el.icon" v-else class="mx-auto mb-4 text-turquoise-400 relative z-1" />
          <p
            class="font-semibold leading-[150%] transition-all duration-300 gradient-text relative z-1"
          >
            {{ el.label }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hero-title {
  @apply text-[1.75rem] font-semibold leading-[34px] gradient-text;
}
</style>
