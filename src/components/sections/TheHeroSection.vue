<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import BackgroundMobileLeft from '~/assets/bg-left-mobile.svg?component'
import BackgroundDesktop from '~/assets/bg-hero-desktop.svg?component'
import SisuLogo from '~/assets/logos/sisu.svg?component'
import OdonataLogo from '~/assets/logos/odonata.svg?component'
import PhenomLogo from '~/assets/logos/phenom.svg?component'
import DefaultLogo from '~/assets/logos/default.svg?component'
import ClickmagicLogo from '~/assets/logos/clickmagick.svg?component'
import PocusLogo from '~/assets/logos/pocus.svg?component'
import YuzedataLogo from '~/assets/logos/yuzedata.svg?component'
import { useBreakpoints } from '~/composables/useBreakpoints'

const logos = [
    OdonataLogo,
    SisuLogo,
    PhenomLogo,
    DefaultLogo,
    ClickmagicLogo,
    PocusLogo,
    YuzedataLogo
]

const breakpoints = useBreakpoints()
const swiperBreakpoints = {
    [breakpoints.lg]: {
        slidesPerView: 'auto',
        watchSlidesVisibility: true,

    },
}


const swiperOptions = computed(() => ({
    slidesPerView: 'auto',
    //   spaceBetween: 16,
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
            <h1 class="hero-title md:text-[2.5rem] md:leading-[120%]  md:mt-6">Product design for SaaS startups_</h1>
            <p class="mt-6 text-blue-200 ">Semiflat is a full-service design agency specialized in solving complex
                problems through design. <br /> We design tools that help millions of professionals
                be more effective at their job.</p>
            <div class="mt-2.5rem">
                <AppButton>Discuss your project</AppButton>
                <AppButton text>See our work</AppButton>
            </div>
        </div>
        <div class="">
            <AppSlider
class="mt-16 md:mt-40 " style="" :swiper-options="swiperOptions">
                <SwiperSlide
v-for="(logo, i) in logos" :key="i"
                    class="w-[180px] md:w-[240px] shrink-0 mx-auto flex items-center justify-center">
                    <component :is="logo" class="h-[38px] grayscale" />
                </SwiperSlide>
            </AppSlider>
        </div>
    </div>
</template>

<style>
.hero-title {
    @apply text-[1.75rem] font-semibold leading-[34px] gradient-text;
}

.swiper {
    mask-image: linear-gradient(
    270deg,
    rgba(242, 242, 242, 0) 0%,
    rgba(245, 245, 245, 1) 15%,
    rgba(255, 255, 255, 1) 50%,
    rgba(244, 244, 244, 1) 85%,
    rgba(242, 242, 242, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    270deg,
    rgba(242, 242, 242, 0) 0%,
    rgba(245, 245, 245, 1) 15%,
    rgba(255, 255, 255, 1) 50%,
    rgba(244, 244, 244, 1) 85%,
    rgba(242, 242, 242, 0) 100%
  ) 
}

</style> 