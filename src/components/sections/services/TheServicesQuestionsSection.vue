<script setup lang='ts'>
import HeadingIll from '~/assets/illustrations/heading-illustration.svg?component'
import Heading2Ill from '~/assets/illustrations/heading2-illustration.svg?component'
import ArrowLeft from '~/assets/icons/arrow-left.svg?component'
import ArrowRight from '~/assets/icons/arrow-right.svg?component'
</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <h2
            class="gradient-text text-xl font-semibold leading-[150%] md:text-[1.75rem] md:leading-[120%] md:text-center">
            Examples of projects with an extensive workshops <br class="hidden md:block" /> and analysis phase_
        </h2>

        <div class="grid gap-8 sm:grid-cols-2 mt-12 md:my-20">
            <div class="border border-[#BCDCDC] rounded-4 md:max-w-[21.687rem] md:ml-auto">
                <component :is="HeadingIll" class="mx-auto" />
                <div class="px-8 pb-10">
                    <h3 class="text-xl font-semibold text-blue-300">Discovery and workshops for Useful</h3>
                    <span class="text-turquoise-400 font-semibold inline-block mt-6 cursor-pointer">Learn more</span>
                </div>
            </div>
            <div class="border border-[#BCDCDC] rounded-4 md:max-w-[21.687rem]">
                <component :is="Heading2Ill" class="mx-auto" />
                <div class="px-8 pb-10">
                    <h3 class="text-xl font-semibold text-blue-300">Extensive workshops for Tau - a revolutionary app
                    </h3>
                    <span class="text-turquoise-400 font-semibold inline-block mt-6 cursor-pointer">Learn more</span>
                </div>
            </div>
        </div>
        <div class="hidden justify-between md:flex">
            <div class="flex gap-2 rounded-3 cursor-pointer py-4 pr-8 pl-4 outline outline-1 transition-all duration-300 outline-[#BCDCDC]/0 hover:outline-[#BCDCDC]/100 hover:shadow-medium">
                <component :is="ArrowLeft" class="mt-1" />
                <div>
                    <p class="font-semibold text-blue-300">Previous service</p>
                    <p class="text-blue-200 text-sm">User interface design</p>
                </div>
            </div>
            <div class="flex gap-2 rounded-3 cursor-pointer py-4 pr-4 pl-8 outline outline-1 transition-all duration-300 outline-[#BCDCDC]/0 hover:outline-[#BCDCDC]/100 hover:shadow-medium">
                <div class="text-right">
                    <p class="font-semibold text-blue-300">Next service</p>
                    <p class="text-blue-200 text-sm">Continous support</p>
                </div>
                <component :is="ArrowRight" class="mt-1" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>