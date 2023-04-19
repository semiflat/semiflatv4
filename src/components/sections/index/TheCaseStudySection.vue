<script lang="ts" setup>
import type { Component } from 'vue'

import Doss from '~/assets/case-studies/doss.png'
import Phenom from '~/assets/case-studies/phenom.png'
import Pocus from '~/assets/case-studies/pocus.png'
import Useful from '~/assets/case-studies/useful.png'

import DossBg from '~/components/utility/animations/DossBg.vue'
import PhenomBg from '~/components/utility/animations/PhenomBg.vue'
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
    link: '/phenom',
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
    link: '/doss',
  },
]
</script>

<template>
  <div class="mt-16 md:mt-46 page-content">
    <AppCaseStudyGrid :cards="cases" />
  </div>
</template>

<style lang="scss">
</style>
