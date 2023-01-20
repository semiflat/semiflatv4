
<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import BackgroundMobileLeft from '~/assets/bg-left-mobile.svg?component'
import BackgroundDesktop from '~/assets/bg-hero-desktop.svg?component'
import img1 from '~/assets/about-slider/1.jpeg'
import img2 from '~/assets/about-slider/2.jpeg'
import img3 from '~/assets/about-slider/3.jpeg'
import img4 from '~/assets/about-slider/4.jpeg'
import img5 from '~/assets/about-slider/5.jpeg'



const aboutImgs = [
   img1,
   img2,
   img3,
   img4,
   img5,
]

const breakpoints = useBreakpoints()
const swiperBreakpoints = {
    [breakpoints.lg]: {
        slidesPerView: 'auto',
        spaceBetween: 32,
        watchSlidesVisibility: true,

    },
}


const swiperOptions = computed(() => ({
    slidesPerView: 'auto',
      spaceBetween: 24,
    navigation: false,
    loop: true,
    watchSlidesVisibility: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: swiperBreakpoints,
}))

</script>

<template>
    <div class="relative page-content">
        <BackgroundMobileLeft class="absolute pointer-events-none top-28 left-0 md:hidden" />
        <BackgroundDesktop class="hidden pointer-events-none absolute -left-42 md:block -top-60" />
        <div class=" mt-3.5rem md:mt-40 md:text-center">
            <h1 class="hero-title md:text-[2.5rem] md:leading-[120%]  md:mt-6">Meet the team behind your next project_
            </h1>
            <p class="mt-6 text-blue-200 ">
                We are a remote team of 17 product designers, laser focused on delivering top tier SaaS product design
                to <br /> world’s most innovative startups.
            </p>
            <div class="mt-2.5rem">
                <AppButton>Set up a discovery call</AppButton>
                <AppButton text>Learn about us</AppButton>
            </div>
        </div>
        <div class="">
            <AppSlider class="mt-16 md:mt-40 " style="" :swiper-options="swiperOptions">
                <SwiperSlide
v-for="(img, i) in aboutImgs" :key="i"
                    class=" shrink-0 mx-auto flex items-center justify-center"
                    :class="{'w-[144px] md:w-[240px]': i % 2 !== 0, 'w-[240px] md:w-[400px]': i % 2 === 0  }"
                    >
                    <img :src="img" class="h-[180px] md:h-[300px] object-cover object-center rounded-4"  />
                </SwiperSlide>
            </AppSlider>
        </div>
    </div>
</template>

<style>
.hero-title {
    @apply text-[1.75rem] font-semibold leading-[34px] gradient-text;
}

</style> 