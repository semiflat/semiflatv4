<script setup lang='ts'>
import ChevronDown from '~/assets/icons/chevron-down.svg?component'

interface FaqItem {
    header: string
    text: string
    isOpen: boolean
}

defineProps<{
    faqs: FaqItem[]
}>()

</script>

<template>
    <div class="flex flex-col gap-6">
        <div v-for="(faq, i) in faqs" :key="i" class="">
            <div class="pb-6 border-b md:px-6 md:pb-8">
                <div class="flex items-center flex-1 justify-between gap-10  border-[#BCDCDC]">
                    <h3 class="font-semibold leading-[150%] md:text-lg select-none">{{ faq.header }}</h3>
                    <ChevronDown class="shrink-0 cursor-pointer transition-all duration-300 text-turquoise-300 select-none"
                        :class="{ 'rotate-180 !text-turquoise-400': faq.isOpen }" @click="faq.isOpen = !faq.isOpen;" />
                </div>
                <p class="text-blue-200 mt-6 max-h-0 overflow-hidden transition-all duration-300 select-none"
                    :class="{ '!max-h-100rem': faq.isOpen, '!duration-1000': faq.isOpen }">
                    {{
                        faq.text }} </p>
            </div>
        </div>
    </div>
</template>