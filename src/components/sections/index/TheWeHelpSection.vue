<script lang="ts" setup>
    import WorkshopsIcon from '~/assets/experiences/workshops.svg?component'
    import ResearchIcon from '~/assets/experiences/research.svg?component'
    import UXIcon from '~/assets/experiences/UX.svg?component'
    import InterfaceIcon from '~/assets/experiences/interface.svg?component'
    import DesignIcon from '~/assets/experiences/design.svg?component'
    import SupportIcon from '~/assets/experiences/support.svg?component'

    const services = [
        {
            icon: WorkshopsIcon,
            title: 'Workshops & analysis',
            text: 'We can help you turn your product idea into an actionable design project plan.'
        },
        {
            icon: ResearchIcon,
            title: 'User research',
            text: 'Find out what your users want. We’ll recruit and interview respondents matching your target persona.'
        },
        {
            icon: UXIcon,
            title: 'User experience design',
            text: 'Intuitive user experience will make or break your product. We’re here to make ensure the former.'
        },
        {
            icon: InterfaceIcon,
            title: 'User interface design',
            text: 'We get excited by beautiful products and make sure your users will too. '
        },
        {
            icon: DesignIcon,
            title: 'Design system',
            text: 'No matter the scale of your organization, we’ll set you up for growth with a custom design system.'
        },
        {
            icon: SupportIcon,
            title: 'Continuous support',
            text: 'Reach your business goals faster with an agile, scalable, on-demand design team.'
        },
    ]

</script>

<template>
    <div class="page-content mt-16">
        <h2 class="gradient-text text-xl font-semibold leading-[150%] md:text-[1.75rem] md:leading-[120%] md:text-center">We help startups by creating delightful <br class="hidden md:block"> experiences for their users_</h2>
        <div class="grid md:grid-cols-3 mt-12 md:mt-20 gap-10 md:gap-16">
            <div v-for="service in services" :key="service.title">
                <component :is="service.icon" />
                <h3 class="mt-8 font-semibold text-blue-300">{{ service.title }}</h3>
                <p class="mt-2 text-blue-200">{{ service.text }}</p>
            </div>
        </div>
    </div>
</template>