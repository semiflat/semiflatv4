<script setup lang='ts'>
 import WorkshopsIcon from '~/assets/experiences/workshops.svg?component'
    import ResearchIcon from '~/assets/experiences/research.svg?component'
    import UXIcon from '~/assets/experiences/UX.svg?component'


const experiences = [
    {
        icon: WorkshopsIcon,
        header: 'Strong foundation for the project',
        text: 'We can help you turn your product idea into an actionable design project plan.'
    },
    {
        icon: ResearchIcon,
        header: 'Independence and design leadership',
        text: 'Find out what your users want. We’ll recruit and interview respondents matching your target persona.'
    },
    {
        icon: UXIcon,
        header: 'Smooth partnership',
        text: 'Intuitive user experience will make or break your product. We’re here to make ensure the former.'
    },
    {
        icon: UXIcon,
        header: 'Faster delivery',
        text: 'Intuitive user experience will make or break your product. We’re here to make ensure the former.'
    },
]
</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <div class="">
            <h2
                class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem] md:hidden">
                We help startups by creating delightful experiences for their users_
            </h2>
            <h2
                class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem] hidden md:block">
                In all internal and external interactions we always <br /> rely on our value code_
            </h2>
            <div class="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-16 mt-12 md:mt-20">
                <div v-for="(el, i) in experiences" :key="i">
                 <component :is="el.icon" class="mb-8" />
                 <p class="text-blue-300 font-semibold mb-1">{{ el.header }}</p>
                 <p class="text-blue-200">{{ el.text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>