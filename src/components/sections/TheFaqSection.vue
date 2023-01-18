<script setup lang='ts'>
import { useAutoAnimate } from '@formkit/auto-animate/vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

import ChevronDown from '~/assets/icons/chevron-down.svg?component'
import ChevronTop from '~/assets/icons/chevron-up.svg?component'

const faqs = reactive([
    {
        header: 'What deliverables will I receive?',
        text: 'We can help you turn your product idea into an actionable design project plan.',
        isOpen: false
    },
    {
        header: 'What are the next steps to work with you?',
        text: 'Click the ‘Get in touch’ button in the top right corner or message hello@semiflat.com outlining your high-level design needs. We’ll reply and work out a time for an introductory call where you’ll ask us anything that’s on your mind. From there we’ll work towards defining the scope, timeline of the engagement. ',
        isOpen: false
    },
    {
        header: 'What is the timeline to launch an MVP?',
        text: 'We can help you turn your product idea into an actionable design project plan.',
        isOpen: false
    },
    {
        header: 'Do you implement the designs too?',
        text: 'We can help you turn your product idea into an actionable design project plan.',
        isOpen: false
    },
    {
        header: 'How much should I budget for the project?',
        text: 'We can help you turn your product idea into an actionable design project plan.',
        isOpen: false
    },
])

</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <h2
            class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]">
            Have any questions? We’re here to help you <br class="hidden md:block" /> navigate the world of design_</h2>
        <div class="flex flex-col gap-6">
            <div v-for="(faq, i) in faqs" :key="i" class="pb-6 border-b md:px-6 md:pb-8">
                <div class="flex items-center flex-1 justify-between gap-10  border-[#BCDCDC]">
                    <h3 class="font-semibold leading-[150%] md:text-lg">{{ faq.header }}</h3>
                    <ChevronDown v-if="!faq.isOpen" class="shrink-0 cursor-pointer" @click="faq.isOpen = true"/>
                    <ChevronTop v-else class="shrink-0 cursor-pointer" @click="faq.isOpen = false"/>
                </div>
                <p v-if="faq.isOpen" class="text-blue-200 mt-6" > {{ faq.text }} </p>
            </div>
        </div>
    </div>
</template>