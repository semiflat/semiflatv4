<script lang="ts" setup>
import WorkshopsIcon from '~/assets/experiences/workshops.svg?url'
import InterfaceIcon from '~/assets/experiences/interface.svg?url'
import UX from '~/assets/experiences/UX.svg?url'
import SupportIcon from '~/assets/experiences/support.svg?url'
import FlawlessIcon from '~/assets/icons/flawless.svg?url'

const services = [
    {
        icon: FlawlessIcon,
        title: 'Discovery sessions',
        text: 'Over several video sessions, we worked with Useful’s founders to establish user personas, user stories, core user flows, and navigation structure.'
    },
    {
        icon: WorkshopsIcon,
        title: 'Workshops & analysis',
        text: 'We’ve analyzed our notes and recordings from our meetings to ensure we’re moving into the next phase with a full understanding of business needs and goals.'
    },
    {
        icon: UX,
        title: 'User experience design',
        text: 'The next and most time-intensive part of the project was translating all the findings of discovery sessions into a complete set of lo-fi wireframes.'
    },
    {
        icon: InterfaceIcon,
        title: 'User interface design',
        text: 'We’ve added a bit of magic to the low-fidelity mockups, proposing several look & feel variations and making sure even empty states were engaging and pleasant to look at.'
    },
    {
        icon: SupportIcon,
        title: 'Design system design',
        text: 'We’ve built a starter design system so Useful can scale their product in the future without worrying about inconsistency.'
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

