<script setup lang='ts'>
import { SwiperSlide } from 'swiper/vue'
import { useBreakpoints } from '@vueuse/core'
import breakpointsConst from "~/constants/breakpoints";
import DetailImg from '~/assets/pocus/attention-detail.png'
import ConsistencyIcon from '~/assets/icons/consistency.svg?component'
import ClickableIcon from '~/assets/icons/clickable.svg?component'
import IntuitiveIcon from '~/assets/icons/intuitive.svg?component'


const breakpoints = useBreakpoints(breakpointsConst)
const md = ref(breakpoints.smaller('md'))
const details = [
    {
        img: DetailImg,
        icon: ConsistencyIcon,
        header: 'Scores',
        desc: 'Create custom groups of accounts, then create scores to define what constitutes an excellent vs. a good or a poor one.'
    },
    {
        img: '2',
        icon: ClickableIcon,
        header: 'Playbooks',
        desc: 'Create a sales playbook in Pocus, then define a human or automated action sequence for qualified accounts.'
    },
    {
        img: '3',
        icon: IntuitiveIcon,
        header: 'Lists',
        desc: 'Best local manufacturers and tons of love. That’s how our team gadgets are made.'
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

const changeImage = (card: typeof details[0]) => {
    selectedDetail.value = card
    document.querySelector('#detail-image')?.classList.remove('fade-animation')
    setTimeout(() => document.querySelector('#detail-image')?.classList.add('fade-animation'), 0)

}

</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <h2
            class="text-xl font-semibold leading-[150%] md:mx-auto md:w-[45.375rem] md:text-center md:text-[1.75rem] leading-[120%]">
            Pocus helps companies surface the
            most valuable
            deals based on
            their own data_
        </h2>
        <div
            class="py-[2.625rem] px-[1.75rem] md:pt-[4.375rem] md:pb-12 md:px-24 bg-[#F6F7F9] rounded-3 mt-12 md:mt-20">
            <img :src="DetailImg" class="mx-auto">
        </div>
        <div>
            <AppSlider v-if="md" class="mt-8" style="" :swiper-options="swiperOptions">
                <SwiperSlide v-for="(card, i) in details" :key="i">
                    <!-- <img id="detail-image" :src="card.img"
                        class="rounded-4 h-[13.75rem] -scale-x-100 md:scale-x-100 md:w-full md:h-[30rem] mx-auto object-cover transition-all"> -->
                    <div class="shrink-0 mx-auto flex items-center justify-center mt-8">
                        <div
                            class="p-6 border border-[#D8DFE5] rounded-3 md:border-none max-w-[21.687rem] object-cover">
                            <component :is="card.icon" class="mb-8" />
                            <p class="mb-1 gradient-text font-semibold">{{ card.header }}</p>
                            <p class="text-[#545959]">{{ card.desc }}</p>
                        </div>
                    </div>
                </SwiperSlide>
            </AppSlider>
            <div v-else class="shrink-0 mx-auto items-start justify-between hidden flex mt-10">
                <div v-for="(card, i) in details" :key="i"
                    class="p-6 rounded-3 max-w-[21.687rem] object-cover cursor-pointer transition-all ease-linear duration-200 outline outline-1 outline-[#BCDCDC]/0 hover:outline-[#D8DFE5]/100"
                    :class="{ '!outline !outline-1 !outline-[#D8DFE5] shadow-select': selectedDetail.img === card.img }"
                    @click="changeImage(card)">
                    <component :is="card.icon" class="mb-8" />
                    <p class="mb-1 gradient-text font-semibold">{{ card.header }}</p>
                    <p class="text-[#545959]">{{ card.desc }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
