<script setup lang='ts'>
import ChevronDown from '~/assets/icons/chevron-down.svg?component'
import ChevronTop from '~/assets/icons/chevron-up.svg?component'

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
                    <h3 class="font-semibold leading-[150%] md:text-lg">{{ faq.header }}</h3>
                    <ChevronDown v-if="!faq.isOpen" class="shrink-0 cursor-pointer" @click="faq.isOpen = true" />
                    <ChevronTop v-else class="shrink-0 cursor-pointer" @click="faq.isOpen = false" />
                </div>
                <p v-if="faq.isOpen" class="text-blue-200 mt-6"> {{ faq.text }} </p>
            </div>
        </div>
    </div>
</template>