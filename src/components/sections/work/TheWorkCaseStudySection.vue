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
    decor: 'middle-right',
    service: {
      title: 'Ground-up product design',
      description:
        'We help SaaS companies go to market or raise funding by designing development-ready MVPs. From ideation to a polished interface.',
      cta: {
        label: 'Details coming soon',
      },
    },
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
        caption:
          'Building an MVP and a new identity for Rengage to unify the customer journey across channels.',
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
    decor: 'top-left',
    service: {
      title: 'Ongoing design support',
      description:
        'We help SaaS companies by augmenting their teams with dedicated talent to take their product to the next level.',
      cta: {
        label: 'Details coming soon',
      },
    },
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
        caption:
          'Supporting Gyaan - a revenue team platform with a dedicated, full-time senior designer.',
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
  <div class="work-case-study-section">
    <AppBlock v-for="el in cases" :key="el.service?.title" :decor="el.decor">
      <div class="page-content">
        <div class="work-case-study-section__inner">
          <AppServiceCard v-bind="el.service" />
          <AppCaseStudyGrid :cards="el.cards" />
        </div>
      </div>
    </AppBlock>
  </div>
</template>

<style lang="scss" scoped>
.work-case-study-section {
  &__inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  }
  &:deep(.block--decor-top-left::before) {
    top: -18vw;
    right: 50vw;
  }
}
</style>
