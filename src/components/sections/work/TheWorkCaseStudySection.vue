<script setup lang="ts">
import Default from '~/assets/case-studies/default.png'
import Doss from '~/assets/case-studies/doss.png'
import Gyaan from '~/assets/case-studies/gyaan.png'
import Onward from '~/assets/case-studies/onward.png'
import Phenom from '~/assets/case-studies/phenom.png'
import Pocus from '~/assets/case-studies/pocus.png'
import Rengage from '~/assets/case-studies/rengage.png'
import Sisu from '~/assets/case-studies/sisu.png'
import Useful from '~/assets/case-studies/useful.png'
import YuzeData from '~/assets/case-studies/yuzedata.png'

import DossBg from '~/components/utility/animations/DossBg.vue'
import PhenomBg from '~/components/utility/animations/PhenomBg.vue'
import PocusBg from '~/components/utility/animations/PocusBg.vue'
import UsefulBg from '~/components/utility/animations/UsefulBg.vue'

const cases = [
  {
    title: 'Ground-up product design',
    cards: [
      {
        picture: Pocus,
        background: PocusBg,
        caption: 'Designing Pocus - product-led sales tool that raised a $23M Series A.',
        link: '/pocus',
      },
      {
        picture: Useful,
        background: UsefulBg,
        caption: 'Helping Useful raise $5M to empower continuous delivery tech teams.',
        link: '/useful',
      },
      {
        picture: Rengage,
        caption: 'Building an MVP and a new identity for Rengage to unify the customer journey across channels.',
      },
      {
        picture: Doss,
        background: DossBg,
        caption: 'MVP prototype and ongoing suport for Doss - a platform for operations teams.',
        link: '/doss',
      },
      {
        picture: YuzeData,
        caption: 'Designing an MVP for YuzeData - a machine intelligence collaboration platform.',
      },
      {
        picture: Onward,
        caption: 'Product design for Onward - the smartest way to automate your calendar.',
      },
    ],
  },
  {
    title: 'Ongoing design support',
    cards: [
      {
        picture: Default,
        caption: 'Redesigning Default to bring the smartest inbound sales flow to the market.',
      },
      {
        picture: Phenom,
        background: PhenomBg,
        caption: 'Supporting Phenom - an HR-Tech unicorn by building a dedicated design team.',
        link: '/phenom',
      },
      {
        picture: Gyaan,
        caption: 'Supporting Gyaan - a revenue team platform with a dedicated, full-time senior designer.',
      },
      {
        picture: Sisu,
        caption: 'Augmenting Sisu’s team with flexible, world-class talent on-demand.',
      },
  
    ],
  },
]
</script>

<template>
  <div>
    <div v-for="el in cases" :key="el.title" class="mt-16 md:mt-46 page-content">
      <h2 class="mb-10">{{ el.title }}</h2>
      <AppCaseStudyGrid :cards="el.cards" />
    </div>
  </div>
</template>
