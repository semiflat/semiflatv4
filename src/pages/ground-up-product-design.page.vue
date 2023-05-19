<script lang="ts" setup>
import HeroCardImage1 from '~/assets/work/ground-up-design-card-1.png'

import FoundationIcon from '~/assets/icons/foundation.svg';
import ConsistencyIcon from '~/assets/icons/consistency.svg';
import BrandIcon from '~/assets/services/icons/brand.svg';
import FastDeliveryIcon from '~/assets/services/icons/faster.svg';

const hero = {
  title: 'Ground-up product design_',
  description:
    'We help SaaS startups go to market or raise funding by designing development-ready MVPs. From ideation to a polished interface.',
  buttons: [
    {
      label: 'Schedule a call',
      href: 'https://calendly.com/semiflat_demo/30min',
      isTargetBlank: true,
    },
  ],
}

const heroCards = [
  {
    title: 'What is ground-up product design?',
    description:
      'Ground-up product design refers to designing a software product from scratch. Our design process takes your software from idea to polished interface.',
    picture: HeroCardImage1,
    button: {
      label: 'See the process',
      href: '/',
    },
  },
  {
    title: 'Who is ground-up product design for?',
    description:
      'Ground-up product design is perfect for early stage startups, SaaS companies launching new products or legacy software needing a complete overhaul.',
    picture: HeroCardImage1,
    button: {
      label: 'See our clients',
      href: '/',
    },
  },
]

const workSummaryBanner = {
  title: 'Summary for busy founders_',
  list: [
    {
      icon: FoundationIcon,
      text: 'Great if you’re fundraising',
    },
    {
      icon: BrandIcon,
      text: 'Create a unique identity for your app',
    },
    {
      icon: ConsistencyIcon,
      text: 'Build a consistent, scalable product',
    },
    {
      icon: FastDeliveryIcon,
      text: 'Development-ready MVP in weeks ',
    }
  ],
}
</script>

<template>
  <div>
    <AppHero v-bind="hero" />
    <div class="page-content">
      <AppBlock>
        <WorkInfoCards :cards="heroCards" />
      </AppBlock>
      <AppBlock>
        <WorkSummaryBanner :data="workSummaryBanner" />
      </AppBlock>
    </div>
  </div>
</template>
