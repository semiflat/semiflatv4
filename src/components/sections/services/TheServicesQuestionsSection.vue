<script setup lang='ts'>
import HeadingIll from '~/assets/illustrations/heading-illustration.svg?component'
import Heading2Ill from '~/assets/illustrations/heading2-illustration.svg?component'
import ArrowLeft from '~/assets/icons/arrow-left.svg?component'
import ArrowRight from '~/assets/icons/arrow-right.svg?component'

const props = defineProps<{
    modelValue: string
    examples: any
}>()

const emit = defineEmits(['update:modelValue'])

const services = [
    {
        label: 'Workshops & analysis',
        value: 'workshops'
    },
    {
        label: 'User research',
        value: 'research'
    },
    {
        label: 'User experience design',
        value: 'experience'
    },
    {
        label: 'User interface design',
        value: 'interface'
    },
    {
        label: 'Design system',
        value: 'design'
    },
    {
        label: 'Continuous support',
        value: 'support'
    },

]
const prev = computed(() => services[services.findIndex(el => el.value === props.modelValue) - 1])
const next = computed(() => services[services.findIndex(el => el.value === props.modelValue) + 1])
</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <h2
            class="gradient-text text-xl font-semibold leading-[150%] md:text-[1.75rem] md:leading-[120%] md:text-center md:max-w-[45rem] md:mx-auto">
            {{ examples.header }}
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
        <div class="hidden md:flex">
            <div v-if="prev"
                class="flex mr-auto gap-2 rounded-3 cursor-pointer py-4 pr-8 pl-4 outline outline-1 transition-all duration-300 outline-[#BCDCDC]/0 hover:outline-[#BCDCDC]/100 hover:shadow-medium"
                @click="emit('update:modelValue', prev.value)">
                <component :is="ArrowLeft" class="mt-1" />
                <div>
                    <p class="font-semibold text-blue-300">Previous service</p>
                    <p class="text-blue-200 text-sm">{{ prev.label }}</p>
                </div>
            </div>
            <div v-if="next"
                class="flex ml-auto gap-2 rounded-3 cursor-pointer py-4 pr-4 pl-8 outline outline-1 transition-all duration-300 outline-[#BCDCDC]/0 hover:outline-[#BCDCDC]/100 hover:shadow-medium"
                @click="emit('update:modelValue', next.value)">
                <div class="text-right">
                    <p class="font-semibold text-blue-300">Next service</p>
                    <p class="text-blue-200 text-sm">{{ next.label }}</p>
                </div>
                <component :is="ArrowRight" class="mt-1" />
            </div>
        </div>
    </div>
</template>
