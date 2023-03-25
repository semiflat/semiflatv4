<script setup lang='ts'>
import CheckIcon from '~/assets/icons/check-icon.svg?component'
import CloseIcon from '~/assets/icons/close-icon.svg?component'


defineProps<{
    prosAndCons: any
}>()
</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <div class="md:grid grid-cols-2 md:max-w-[57.125rem] mx-auto gap-8">
            <div>
                <h2 class="text-xl text-blue-300 font-semibold md:text-[1.75rem] leading-[120%]">{{
                    prosAndCons.prosHeader
                }}</h2>
            </div>
            <div class="mt-8 grid gap-8 md:mt-0">
                <div v-for="(el, i) in prosAndCons.pros" :key="i" class="flex gap-6">
                    <component :is="CheckIcon" class="shrink-0 text-turquoise-400" />
                    <div class="md:pr-2">
                        <h3 class="font-semibold text-blue-300 mb-2">{{ el.header }}</h3>
                        <p class="text-blue-200"> {{ el.text }} </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-[1px] bg-[#BCDCDC] my-12 md:my-20 md:max-w-[57.125rem] mx-auto" />
        <div class="md:grid grid-cols-2 md:max-w-[57.125rem] mx-auto gap-8">
            <div>
                <h2 class="text-xl text-blue-300 font-semibold md:text-[1.75rem] leading-[120%]">{{
                    prosAndCons.consHeader
                }}</h2>
            </div>
            <div class="mt-8 grid gap-8 md:mt-0">
                <div v-for="(el, i) in     prosAndCons.cons" :key="i" class="flex gap-6">
                    <component :is="CloseIcon" class="shrink-0" />
                    <div class="md:pr-2">
                        <h3 class="font-semibold text-blue-300 mb-2">{{ el.header }}</h3>
                        <p class="text-blue-200"> {{ el.text }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
