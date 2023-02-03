<script setup lang='ts'>
import YuzeData from '~/assets/case/Illustration-YuzeData-mobile.svg?component'
import Pocus from '~/assets/case/Illustration-Pocus.svg?component'
import Useful from '~/assets/case/Illustration-Useful.svg?component'
import Odonata from '~/assets/case/Illustration-Odonata.svg?component'
import Onward from '~/assets/case/Illustration-Onward.svg?component'
import Phenom from '~/assets/case/Illustration-Phenom.svg?component'
import Default from '~/assets/case/Illustration-Default.svg?component'
import Halycon from '~/assets/case/Illustration-Halycon.svg?component'

const illustrations = [
    {
        picture: YuzeData,
        caption: 'YuzeData - a machine intelligence automation platform.'
    },
    {
        picture: Pocus,
        caption: 'Designing Pocus - product-led sales tool that raised a $23M series A.'
    },
    {
        picture: Useful,
        caption: 'Helping Useful raise $5M to empower continuous delivery tech teams.'
    },
    {
        picture: Odonata,
        caption: 'Design for Odonata - collaborative cloud platform for operations teams.'
    },
    {
        picture: Onward,
        caption: 'Product design for Onward - the smartest way to manage your workday.'
    },
    {
        picture: Phenom,
        caption: 'Product design for Onward - the smartest way to manage your workday.'
    },
    {
        picture: Default,
        caption: 'Designing Default - the first all-in-one platform for lead qualification.'
    },
    {
        picture: Halycon,
        caption: 'Creating an MVP for Halycon to bring transparency to IT procurement.'
    },
]
</script>

<template>
    <div class="page-content mt-16 md:mt-46 grid md:grid-cols-2 gap-6 md:gap-8 justify-center">
        <AppCaseStudyCard v-for="(card, i) in illustrations" :key="i" :data="card"/> 
    </div>
</template>
