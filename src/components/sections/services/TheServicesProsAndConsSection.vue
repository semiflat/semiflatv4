<script setup lang='ts'>
import CheckIcon from '~/assets/icons/check-icon.svg?component'
import CloseIcon from '~/assets/icons/close-icon.svg?component'

const pros = [
    {
        header: 'Building solid understanding of the problem and target user',
        text: 'We work with companies across different niche industries. Many of them are highly technical and require special knowledge to comfortably operate in. In order to be able to propose the most optimal solutions later on, it’s crucial for us to get as good of an understanding of your goal, vision and business landscape as possible.'
    },
    {
        header: 'Analyzing current competitors',
        text: 'This gives us further background on the industry standards, as well as an idea of any low hanging fruit that we can implement in your project to give you advantage over competitors.'
    },
    {
        header: 'Defining the design challanges',
        text: 'Any project needs clear objective definition in order to succeed. Conducing the analysis phase allows us to identify the challenges and objective early on so that you can know what you can expect moving forward.'
    }
]

const cons = [
    {
        header: 'Lack of context in the later stages',
        text: 'Skipping the initial discovery phase is likely to catch up with us at laters stages of the project and ultimately slow down the process or require your detailed guidance. Not taking the time to learn the terminology, problems and general reality of your industry will prevent us from being proactive in suggesting optimal solutions as the project moves forward.'
    }
]
</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <div class="md:grid grid-cols-2 md:max-w-[57.125rem] mx-auto gap-8">
            <div>
                <h2 class="text-xl text-blue-300 font-semibold md:text-[1.75rem] leading-[120%]">Why we always conduct workshops and analysis? </h2>
                <p class="mt-4 text-blue-200">Custom design system</p>
            </div>
            <div class="mt-8 grid gap-8 md:mt-0">
                <div v-for="(el, i) in pros" :key="i" class="flex gap-6">
                    <component :is="CheckIcon" class="shrink-0" />
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
                <h2 class="text-xl text-blue-300 font-semibold md:text-[1.75rem] leading-[120%]">Why it’s detrimental for the project to skip this step? </h2>
                <p class="mt-4 text-blue-200">Custom design system</p>
            </div>
            <div class="mt-8 grid gap-8 md:mt-0">
                <div v-for="(el, i) in cons" :key="i" class="flex gap-6">
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