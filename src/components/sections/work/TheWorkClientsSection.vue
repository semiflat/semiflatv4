<script setup lang='ts'>
import { SwiperSlide } from 'swiper/vue'
import ahana from '~/assets/tint-logos/logo-ahana.svg?component'
import appfleet from '~/assets/tint-logos/logo-appfleet.svg?component'
import clickmagick from '~/assets/tint-logos/logo-clickmagick.svg?component'
import cloudstore from '~/assets/tint-logos/logo-cloudstore.svg?component'
import defaultLogo from '~/assets/tint-logos/logo-default.svg?component'
import devzero from '~/assets/tint-logos/logo-devzero.svg?component'
import doss from '~/assets/tint-logos/logo-doss.svg?component'
import gcore from '~/assets/tint-logos/logo-gcore.svg?component'
import gyaan from '~/assets/tint-logos/logo-gyaan.svg?component'
import halycon from '~/assets/tint-logos/logo-halycon.svg?component'
import jetic from '~/assets/tint-logos/logo-jetic.svg?component'
import lhotse from '~/assets/tint-logos/logo-lhotse.svg?component'
import metlo from '~/assets/tint-logos/logo-metlo.svg?component'
import onward from '~/assets/tint-logos/logo-onward.svg?component'
import phenom from '~/assets/tint-logos/logo-phenom.svg?component'
import pocus from '~/assets/tint-logos/logo-pocus.svg?component'
import runchise from '~/assets/tint-logos/logo-runchise.svg?component'
import scholaris from '~/assets/tint-logos/logo-scholaris.svg?component'
import simplero from '~/assets/tint-logos/logo-simplero.svg?component'
import sisu from '~/assets/tint-logos/logo-sisu.svg?component'
import stepsize from '~/assets/tint-logos/logo-stepsize.svg?component'
import tagvenue from '~/assets/tint-logos/logo-tagvenue.svg?component'
import tau from '~/assets/tint-logos/logo-tau.svg?component'
import useful from '~/assets/tint-logos/logo-useful.svg?component'
import yuzedata from '~/assets/tint-logos/logo-yuzedata.svg?component'
// import SisuLogo from '~/assets/logos/sisu.svg?component'
// import OdonataLogo from '~/assets/logos/odonata.svg?component'
// import PhenomLogo from '~/assets/logos/phenom.svg?component'
// import DefaultLogo from '~/assets/logos/default.svg?component'
// import ClickmagicLogo from '~/assets/logos/clickmagick.svg?component'
// import PocusLogo from '~/assets/logos/pocus.svg?component'
// // import YuzedataLogo from '~/assets/logos/yuzedata.svg?component'
// import StepsizeLogo from '~/assets/logos/stepsize.svg?component'
// import CloudstoreLogo from '~/assets/logos/cloudstore.svg?component'
// import LhotseLogo from '~/assets/logos/lhotse.svg?component'
// import UsefulLogo from '~/assets/logos/useful.svg?component'
// import JeticLogo from '~/assets/logos/jetic.svg?component'
// import HalyconLogo from '~/assets/logos/halycon.svg?component'
// import CoreLogo from '~/assets/logos/core.svg?component'
// import OnwardLogo from '~/assets/logos/onward.svg?component'


// const logos = [
//     OdonataLogo,
//     SisuLogo,
//     PhenomLogo,
//     DefaultLogo,
//     ClickmagicLogo,
//     PocusLogo,
//     StepsizeLogo,
//     CloudstoreLogo,
//     LhotseLogo,
//     UsefulLogo,
//     JeticLogo,
//     HalyconLogo,
//     CoreLogo,
//     OnwardLogo
// ]

const logos = [
    ahana,
    appfleet,
    clickmagick,
    cloudstore,
    defaultLogo,
    devzero,
    doss,
    gcore,
    gyaan,
    halycon,
    jetic,
    lhotse,
    metlo,
    onward,
    phenom,
    pocus,
    runchise,
    scholaris,
    simplero,
    sisu,
    stepsize,
    tagvenue,
    tau,
    useful,
    yuzedata,
]
const logos1 = [
    doss,
    gcore,
    gyaan,
    ahana,
    appfleet,
    clickmagick,
    cloudstore,
    defaultLogo,
    devzero,
    doss,
    tau,
    useful,
    yuzedata,
    halycon,
    jetic,
    lhotse,
    metlo,
    onward,
    phenom,
    pocus,
    runchise,
    scholaris,
    simplero,
    sisu,
    stepsize,
    tagvenue,
]

const logosMobile = [
    sisu,
    phenom,
    defaultLogo,
    clickmagick,
    pocus,
    stepsize,
    cloudstore,
    lhotse,
    useful,
    jetic,
    halycon,
    gcore,
    onward,
    simplero
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
    speed: 5000,
    watchSlidesVisibility: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false
    },

    breakpoints: swiperBreakpoints,
}))

</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <div class="">
            <h2
                class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]">
                Meet some of the startups who we’ve supported_
            </h2>
        </div>
        <div class="grid grid-cols-2 gap-y-8 md:grid-cols-3 mt-12 lg:hidden">
            <component :is="logo" v-for="logo in logosMobile" :key="logo" class="mx-auto w-full" />
        </div>
        <div class="mt-20 hidden lg:flex flex-col gap-8 mask">
            <AppSlider class="" style="" :swiper-options="swiperOptions">
                <SwiperSlide v-for="(logo, i) in logos" :key="i"
                    class="w-[180px] md:w-[240px] shrink-0 mx-auto flex items-center justify-center">
                    <component :is="logo" class="h-[4.375rem] " />
                </SwiperSlide>
            </AppSlider>
            <AppSlider class="" style="" :swiper-options="{ ...swiperOptions, speed: 5500 }">
                <SwiperSlide v-for="(logo, i) in logos1" :key="i"
                    class="w-[180px] md:w-[240px] shrink-0 mx-auto flex items-center justify-center">
                    <component :is="logo" class="h-[4.375rem] " />
                </SwiperSlide>
            </AppSlider>
            <AppSlider class="" style="" :swiper-options="{ ...swiperOptions, speed: 6000 }">
                <SwiperSlide v-for="(logo, i) in logos.reverse()" :key="i"
                    class="w-[180px] md:w-[240px] shrink-0 mx-auto flex items-center justify-center">
                    <component :is="logo" class="h-[4.375rem] " />
                </SwiperSlide>
            </AppSlider>
        </div>
    </div>
</template>

<style >
.mask {
    -webkit-mask-image: radial-gradient(circle at 50% -153%, black 71%, transparent 81%);
    mask-image: radial-gradient(circle at 50% -153%, black 71%, transparent 81%);
}

.swiper>.swiper-wrapper {
    transition-timing-function: linear;
}
</style>
