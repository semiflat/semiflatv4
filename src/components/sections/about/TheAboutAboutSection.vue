<script lang="ts" setup>
import { SwiperSlide } from 'swiper/vue'
import { useBreakpoints } from '@vueuse/core'
import breakpointsConst from "~/constants/breakpoints";

import BottleIcon from '~/assets/icons/bottle-icon.svg?component'
import TheAboutComponent from '~/components/about/TheAboutComponent.vue';
import box from '~/assets/box.jpeg'
import convent from '~/assets/convent.jpeg'
import about from '~/assets/about-image.png'
import RobeIcon from '~/assets/icons/robe-icon.svg?component'
import HoodieIcon from '~/assets/icons/hoodie-icon.svg?component'
import BagIcon from '~/assets/icons/bag-icon.svg?component'
import NicImage from '~/assets/employees/nic.jpeg'
import EwaImage from '~/assets/employees/ewa.jpeg'

const breakpoints =  useBreakpoints(breakpointsConst) 
const md = ref(breakpoints.smaller('md'))
const details = [
    {
        img: about,
        icon: RobeIcon,
        header: 'Our headquarters',
        desc: 'Meticulously designed according to our interior brand book. Always open for the team.'
    },
    {
        img: NicImage,
        icon: HoodieIcon,
        header: 'Our team gadgets',
        desc: 'Best local manufacturers and tons of love. That’s how our team gadgets are made.'
    },
    {
        img: EwaImage,
        icon: BagIcon,
        header: 'Our team retreats',
        desc: 'The best way to keep a remote team integrated and motivated. They’re an essential part of our culture.'
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
        delay: 2000,
    },
}))

const content = [
    {
        title: 'We are value driven',
        text: 'Our team is comprised of high-achieving individuals passionate about their craft and striving to be best at it.',
        bgImage: `url(${convent})`
    },
    {
        title: 'From a freelancing gig to a 17 people agency. Read now about how it all started.',
    },
    {
        title: 'We’re building a home for designers',
        text: 'Team retreats at Semiflat are legendary. As a remote team we get together every couple of months.',
        bgImage: `url(${box})`
    },
]

const changeImage = (card: typeof details[0]) => {
    selectedDetail.value = card
    document.querySelector('#detail-image')?.classList.remove('fade-animation')
    setTimeout(() => document.querySelector('#detail-image')?.classList.add('fade-animation'), 0)

}


</script>

<template>
    <div class="page-content">
        <TheAboutComponent :content="content" :icon="BottleIcon" />
        <div class="mt-16">
            <h2
                class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]">
                Our attention to detail goes far beyond the design <br class="hidden md:block" /> work we do_</h2>
            <div>
                <img
id="detail-image" :src="selectedDetail.img"
                    class="rounded-4 h-[13.75rem] -scale-x-100 md:scale-x-100 md:w-full md:h-[30rem] mx-auto object-cover transition-all hidden sm:block">
                <div>
                    <AppSlider  v-if="md" class="mt-8" style="" :swiper-options="swiperOptions">
                        <SwiperSlide v-for="(card, i) in details" :key="i">
                            <img
id="detail-image" :src="card.img"
                                class="rounded-4 h-[13.75rem] -scale-x-100 md:scale-x-100 md:w-full md:h-[30rem] mx-auto object-cover transition-all">
                            <div class="shrink-0 mx-auto flex items-center justify-center mt-8">
                                <div
                                    class="p-6 border border-[#BCDCDC] rounded-3 md:border-none max-w-[21.687rem] object-cover">
                                    <component :is="card.icon" class="mb-8" />
                                    <p class="mb-1 gradient-text font-semibold">{{ card.header }}</p>
                                    <p class="text-blue-200">{{ card.desc }}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </AppSlider>
                    <div v-else class="shrink-0 mx-auto items-center justify-between hidden flex mt-10">
                        <div
v-for="(card, i) in details" :key="i"
                            class="p-6 rounded-3 max-w-[21.687rem] object-cover cursor-pointer transition-all ease-linear duration-200 outline outline-1 outline-[#BCDCDC]/0 hover:outline-[#BCDCDC]/100"
                            :class="{'!outline !outline-1 !outline-[#BCDCDC] shadow-select': selectedDetail.img === card.img}"
                            @click="changeImage(card)">
                            <component :is="card.icon" class="mb-8" />
                            <p class="mb-1 gradient-text font-semibold">{{ card.header }}</p>
                            <p class="text-blue-200">{{ card.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes fade {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 100%;
    }
}

.fade-animation {
    animation: fade 1s;
}

.shadow-select {
    box-shadow: 0px 1px 0px rgba(17, 24, 28, 0.12), 0px 4px 8px rgba(0, 0, 0, 0.08);
}
</style>
