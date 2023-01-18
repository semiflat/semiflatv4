<script setup lang='ts'>
import SmallLogo from '~/assets/small-logo.svg?component'
import LinkedinLogo from '~/assets/socials/Linkedin.svg?component'
import InstagramLogo from '~/assets/socials/instagram.svg?component'
import MLogo from '~/assets/socials/M.svg?component'
import DribbleLogo from '~/assets/socials/dribbble.svg?component'
import CLogo from '~/assets/socials/C.svg?component'

const socials = [
    {
        logo: LinkedinLogo,
    },
    {
        logo: InstagramLogo,
    },
    {
        logo: MLogo,
    },
    {
        logo: DribbleLogo,
    },
    {
        logo: CLogo,
    },
]

const useCase = [
    {
        label: 'SaaS solutions',
        url: '#'
    },
    {
        label: 'Workflow builder',
        url: '#'
    },
    {
        label: 'Data analytics',
        url: '#'
    },
    {
        label: 'CRM applications',
        url: '#'
    },
]

const legal = [
    {
        label: 'Privacy policy',
        url: '#'
    },
    {
        label: 'Terms & conditions',
        url: '#'
    },
]

const services = [
    {
        label: 'Workshops & analysis',
        url: '#'
    },
    {
        label: 'User research',
        url: '#'
    },
    {
        label: 'User experience design',
        url: '#'
    },
    {
        label: 'User interface design',
        url: '#'
    },
    {
        label: 'Design system',
        url: '#'
    },
    {
        label: 'Continous support',
        url: '#'
    },
]
</script>

<template>
    <div class="page-content pt-28 pb-20 md:pb-[12.5rem] relative overflow-y-clip">
        <div
            class="bg-turquoise-100 pointer-events-none rounded-full absolute -left-40 w-[43.75rem] h-[43.75rem] blur-[240px]  top-6 md:-left-100 md:top-70" />
        <div
            class="bg-turquoise-200 pointer-events-none rounded-full absolute  w-[18.75rem] h-[18.75rem] bottom-46 -right-16 md:-bottom-20 md:left-70 blur-[200px]" />
        <div class="relative z-10 md:flex md:items-start md:justify-between">
            <div>
                <SmallLogo />
                <p class="mt-4 text-blue-300">Copyright © 2022. All rights reserved</p>
                <div class="flex gap-8 mt-10">
                    <div v-for="(social, i) in socials" :key="i" class="">
                        <component :is="social.logo" />
                    </div>
                </div>
            </div>
            <div>
                <div class="grid gap-4 mt-12 md:mt-0">
                    <h3 class="text-blue-300 font-semibold">Use cases</h3>
                    <ul class="grid gap-2">
                        <li v-for="link in useCase" :key="link.label" class="text-blue-200 cursor-pointer inline-block">
                            {{
                                link.label
                            }}</li>
                    </ul>
                </div>
                <div class="grid gap-4 mt-12">
                    <h3 class="text-blue-300 font-semibold">Legal</h3>
                    <ul class="grid gap-2">
                        <li v-for="link in legal" :key="link.label" class="text-blue-200 cursor-pointer inline-block">
                            {{
                                link.label
                            }}</li>
                    </ul>
                </div>
            </div>
            <div class="grid gap-4 mt-12 md:mt-0">
                <h3 class="text-blue-300 font-semibold">Services</h3>
                <ul class="grid gap-2">
                    <li v-for="link in services" :key="link.label" class="text-blue-200 cursor-pointer inline-block"> {{
                        link.label
                    }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>