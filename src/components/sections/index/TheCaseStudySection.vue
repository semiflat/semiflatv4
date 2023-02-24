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

// const swiperBreakpoints = {
//     [breakpoints.lg]: {
//         slidesPerView: '2',
//         spaceBetween: 32,
//         watchSlidesVisibility: true,

//     },
// }


const swiperOptions = computed(() => ({
    slidesPerView: '2',
    spaceBetween: 24,
    navigation: false,
    // autoplay: {
    //     delay: 2000,
    // },
    // breakpoints: swiperBreakpoints,
}))


const cases = [
    {
        picture: Pocus,
        caption: 'Designing Pocus - product-led sales tool that raised a $23M Series A.',
        link: '/pocus'
    },
    {
        picture: Useful,
        caption: 'Helping Useful raise $5M empower continuous delivery tech teams.'
    },
    {
        picture: Phenom,
        caption: 'Supporting Phenom - an HR-Tech unicorn by building a dedicated design team.'
    },
    {
        picture: YuzeData,
        caption: 'YuzeData - a machine intelligence automation platform.'
    },
]

</script>

<template>
    <div class="page-content mt-16 md:mt-46  gap-6 md:gap-8 ">
        <AppSlider class="" style="" :swiper-options="swiperOptions">
            <SwiperSlide v-for="el in cases" :key="el.caption" class="flex items-center justify-start">
                <AppCaseStudyCard :data="el" />
            </SwiperSlide>
        </AppSlider>

    </div>
</template>