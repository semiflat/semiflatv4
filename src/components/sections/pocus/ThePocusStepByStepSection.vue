<script lang="ts" setup>
import WorkshopsIcon from '~/assets/experiences/workshops.svg?component'
import InterfaceIcon from '~/assets/experiences/interface.svg?component'
import DesignIcon from '~/assets/experiences/design.svg?component'
import SupportIcon from '~/assets/experiences/support.svg?component'
import FlawlessIcon from '~/assets/icons/flawless.svg?component'

const services = [
    {
        icon: WorkshopsIcon,
        title: 'Getting to know Pocus',
        text: 'Everything started with research about product-led-growth and typical workflow of a salesperson.'
    },
    {
        icon: DesignIcon,
        title: 'Importing the component library',
        text: 'Pocus was building their app with Chakra UI. We’ve imported their component library to Figma.'
    },
    {
        icon: InterfaceIcon,
        title: 'User interface design',
        text: 'We’ve created hi-fi designs for the initial version of Pocus, proposing the look & feel and later on continued to expand the UI adding new screens.'
    },
    {
        icon: FlawlessIcon,
        title: 'Live design sessions',
        text: 'We held weekly check-ins that often turned into live-design sessions. Some features were updated based on the newest insights from customers.'
    },
    {
        icon: SupportIcon,
        title: 'Ongoing, iterative collaboration',
        text: 'We’ve worked with Pocus for a year, adapting to their growing needs and delivering continuous design support.'
    },
]

</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <h2
            class="text-xl font-semibold leading-[150%] md:text-[1.75rem] md:leading-[120%] md:text-center md:max-w-[45.375rem] md:mx-auto md:text-center">
            Step by step on how we’ve worked with Pocus on their application design_</h2>
        <div class="grid md:grid-cols-3 mt-12 md:mt-20 gap-10 md:gap-16">
            <div v-for="service in services" :key="service.title">
                <component :is="service.icon" class="text-[#481B97]" />
                <h3 class="mt-8 font-semibold text-blue-300">{{ service.title }}</h3>
                <p class="mt-2 text-[#545959]">{{ service.text }}</p>
            </div>
        </div>
    </div>
</template>

