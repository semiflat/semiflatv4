
<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import { useBreakpoints } from '@vueuse/core'
import BackgroundMobileLeft from '~/assets/bg-left-mobile.svg?component'
import BackgroundDesktop from '~/assets/bg-hero-desktop.svg?component'
import AllProjectsIcon from '~/assets/icons/all-projects.svg?component'
import WorkflowBuilderIcon from '~/assets/icons/workflow-builder.svg?component'
import DataAnalyticsIcon from '~/assets/icons/data-analytics.svg?component'
import CrmApplicationsIcon from '~/assets/icons/crm-applications.svg?component'
import AiAutomationIcon from '~/assets/icons/ai-automation.svg?component'
import breakpointsConst from "~/constants/breakpoints";

const discovery = [
    {
        icon: AllProjectsIcon,
        label: 'All projects'
    },
    {
        icon: WorkflowBuilderIcon,
        label: 'Workflow builder'
    },
    {
        icon: DataAnalyticsIcon,
        label: 'Data analytics'
    },
    {
        icon: CrmApplicationsIcon,
        label: 'CRM applications'
    },
    {
        icon: AiAutomationIcon,
        label: 'AI & automation'
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
            <h1 class="hero-title md:text-[2.5rem] md:leading-[120%]  md:mt-6">Designing for SaaS is in our DNA_
            </h1>
            <p class="mt-6 text-blue-200">
                Our main focus from the beginning was to bring world-class design to emerging superstars in the SaaS
                space. <br /> From workflow builders to CRM systems, we’ve done it before.
            </p>
            <div class="mt-2.5rem">
                <AppButton href="mailto:hello@semiflat.com">Get in touch</AppButton>
                <AppButton text href="https://calendly.com/d/g3b-8j5-vzs/semiflat-design-partner-introduction">Schedule a call</AppButton>
            </div>
        </div>
        <div>
            <AppSlider v-if="md" class="mt-14 relative" style="" :swiper-options="swiperOptions">
                <SwiperSlide v-for="(el, i) in discovery" :key="i" class="z-10">
                    <div class="shrink-0 mx-auto flex items-center justify-center">
                        <div class="py-6 px-8 transition-all duration-300 bg-white rounded-4 outline outline-1  outline-[#BCDCDC]/100 shadow-primary my-0.25">
                            <component :is="el.icon" class="mx-auto mb-4" />
                            <p class="font-semibold leading-[150%] cursor-pointer">{{ el.label }}</p>
                        </div>
                    </div>
                </SwiperSlide>
            </AppSlider>
            <div v-else class="grid grid-cols-3 gap-x-8 gap-y-4 mt-40 z-10 relative">
                <div
v-for="(el, i) in discovery" :key="i"
                    class="text-center p-6 w-full transition-all duration-300 hover:bg-white rounded-4 outline outline-1 outline-[#BCDCDC]/0 hover:outline-[#BCDCDC]/100 hover:shadow-primary">
                    <component :is="el.icon" class="mx-auto mb-4" />
                    <p class="font-semibold leading-[150%] cursor-pointer">{{ el.label }}</p>
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
