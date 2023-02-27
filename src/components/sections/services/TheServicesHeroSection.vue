
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
import breakpointsConst from "~/constants/breakpoints";
import type { ServiceTypes } from '~/types/service'

defineProps<{
    modelValue?: ServiceTypes
}>()
const emit = defineEmits(['update:modelValue'])
const discovery = [
    {
        icon: WorkshopsIcon,
        label: 'Workshops & analysis',
        value: 'workshops'
    },
    {
        icon: ResearchIcon,
        label: 'User research',
        value: 'research'
    },
    {
        icon: UXIcon,
        label: 'User experience design',
        value: 'experience'
    },
    {
        icon: InterfaceIcon,
        label: 'User interface design',
        value: 'interface'
    },
    {
        icon: DesignIcon,
        label: 'Design system',
        value: 'design'
    },
    {
        icon: SupportIcon,
        label: 'Continuous support',
        value: 'support'
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
        <div class=" mt-3.5rem md:mt-40 md:text-center">
            <h1 class="hero-title md:text-[2.5rem] md:leading-[120%]  md:mt-6">We are a full-service product design
                agency_
            </h1>
            <p class="mt-6 text-blue-200">
                Our approach to design is technical - not purely aesthetic. Every design decision is process and data-driven
                <br class="hidden md:block" /> to deliver an intuitive and delightful experience for your users.
            </p>
            <div class="mt-2.5rem">
                <AppButton href="mailto:hello@semiflat.com">Get in touch</AppButton>
                <AppButton text href="https://calendly.com/d/g3b-8j5-vzs/semiflat-design-partner-introduction">Schedule a
                    call</AppButton>
            </div>
        </div>
        <div>
            <AppSlider v-if="md" class="mt-14 relative" style="" :swiper-options="swiperOptions">
                <SwiperSlide v-for="(el, i) in discovery" :key="i" class="z-10">
                    <div class="shrink-0 mx-auto flex items-center justify-center">
                        <div class="py-6 px-8 transition-all duration-300 bg-white rounded-4 outline outline-1 min-w-[13.75rem]  outline-[#BCDCDC]/100 shadow-primary my-0.25 mx-auto"
                            @click="emit('update:modelValue', el.value)">
                            <component :is="el.icon" class="mx-auto mb-4 text-turquoise-400" />
                            <p class="font-semibold leading-[150%] cursor-pointer text-center">{{ el.label }}</p>
                        </div>
                    </div>
                </SwiperSlide>
            </AppSlider>
            <div v-else class="grid grid-cols-3 gap-x-8 gap-y-4 mt-40 z-10 relative">
                <div v-for="(el, i) in discovery" :key="i"
                    class="text-center p-6 w-full transition-all cursor-pointer duration-300 hover:bg-white rounded-4 outline outline-1 outline-[#BCDCDC]/0 hover:outline-[#BCDCDC]/100 hover:shadow-primary"
                    @click="emit('update:modelValue', el.value)">
                    <component :is="el.icon" class="mx-auto mb-4 text-turquoise-400" />
                    <p class="font-semibold leading-[150%] transition-all duration-300 hover:gradient-text">
                        {{ el.label }}</p>
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
