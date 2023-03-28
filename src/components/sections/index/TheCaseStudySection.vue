<script lang="ts" setup>
import type { Component } from 'vue'

import Doss from '~/assets/home/case-studies/doss.png'
import Phenom from '~/assets/home/case-studies/phenom.png'
import Pocus from '~/assets/home/case-studies/pocus.png'
import Useful from '~/assets/home/case-studies/useful.png'

import DossBg from '~/assets/home/case-studies/doss-bg.svg'
import PhenomBg from '~/assets/home/case-studies/phenom-bg.svg'
import PocusBg from '~/components/utility/animations/PocusBg.vue'
import UsefulBg from '~/components/utility/animations/UsefulBg.vue'


interface IllustrationCard {
  picture: Component
  caption: string
}
// withDefaults(
defineProps<{
  data?: IllustrationCard
}>()

const cases = [
  {
    picture: Pocus,
    background: PocusBg,
    caption: 'Designing Pocus - product-led sales tool that raised a $23M Series A.',
    link: '/pocus',
  },
  {
    picture: Phenom,
    background: PhenomBg,
    caption: 'Supporting Phenom - an HR-Tech unicorn by building a dedicated design team.',
  },
  {
    picture: Useful,
    background: UsefulBg,
    caption: 'Helping Useful raise $5M to empower continuous delivery tech teams.',
    link: '/useful',
  },
  {
    picture: Doss,
    background: DossBg,
    caption: 'MVP prototype and ongoing suport for Doss - a platform for operations teams.',
  },
]
</script>

<template>
  <div class="mt-16 md:mt-46 gap-6 md:gap-8 page-content">
    <div class="case-study-section">
      <ul class="case-study-section__list">
        <li class="case-study-section__card" v-for="el in cases">
          <AppCaseStudyCard :data="el" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.case-study-section {

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(12, 1fr);

      > * {
        grid-column: span 5;
        
        &:nth-child(2),
        &:nth-child(3) {
          grid-column: span 7;
        }
      }
    }
  }
}
</style>
