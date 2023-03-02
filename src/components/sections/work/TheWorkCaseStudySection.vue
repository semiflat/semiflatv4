<script setup lang="ts">
import Pocus from '~/assets/case/Illustration-pocus.svg?url'
import Useful from '~/assets/case/Illustration-useful.svg?url'
import Phenom from '~/assets/case/Illustration-phenom.svg?url'
import Appfleet from '~/assets/case/Illustration-appfleet.svg?url'
import Scholaris from '~/assets/case/Illustration-scholaris.svg?url'
import Jetic from '~/assets/case/Illustration-jetic.svg?url'
import Doss from '~/assets/case/Illustration-doss.svg?url'
import Sisu from '~/assets/case/Illustration-sisu.svg?url'

const illustrations = [
  {
    picture: Pocus,
    caption: 'Designing Pocus - product-led sales tool that raised a $23M series A.',
    link: '/pocus',
  },
  {
    picture: Useful,
    caption: 'Helping Useful raise $5M to empower continuous delivery tech teams.',
  },
  {
    picture: Phenom,
    caption: 'Supporting Phenom - an HR-Tech unicorn by building a dedicated design team.',
  },
  {
    picture: Appfleet,
    caption: 'Creating full product design for appfleet, an alternative for Kubernetes.',
  },

  {
    picture: Sisu,
    caption: 'Supporting Sisu - a decision intelligence platform with a dedicated designer',
  },
  {
    picture: Doss,
    caption: 'MVP prototype and ongoing suport for Doss - a platform for operations teams.',
  },

  {
    picture: Jetic,
    caption: 'Designing Jetic - the only cloud-native iPaaS based on Apache Camel.',
  },
  {
    picture: Scholaris,
    caption: 'Designing the UX and UI  for Scholaris, a learning management system and more.',
  },
]
</script>

<template>
  <div class="page-content mt-16 md:mt-46 grid md:grid-cols-2 gap-6 md:gap-8 justify-center">
    <AppCaseStudyCard v-for="(card, i) in illustrations" :key="i" :data="card" />
  </div>
</template>
