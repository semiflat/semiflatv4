<script lang="ts" setup>
import Dashboard from '~/assets/pocus/pocus-dashboard-tiny.png'
import DashboardVideo from '~/assets/pocus/pocus-dashboard.mp4'
import PocusLogo from '~/assets/pocus/pocus-logo.svg?component'
import FundingIcon from '~/assets/pocus/funding.svg?url';
import LocationIcon from '~/assets/pocus/location.svg?url';
import TimelineIcon from '~/assets/pocus/timeline.svg?url';

const cssProps = {
  '--accent-color-dark': '#481B97',
  '--accent-color-light': '#E1D4F7'
}

const hero = {
  logotype: PocusLogo,
  imageUrl: Dashboard,
  videoUrl: DashboardVideo,
  title: 'Designing Pocus, a product-led sales tool that raised a $23M series A',
  description: 'Pocus is a Product-Led Sales platform that gives go-to-market teams access to product usage data without relying on engineers.',
  buttons: [
    {
      label: 'See live version',
      href: 'https://www.pocus.com/',
      isTargetBlank: true,
    },
    {
      label: 'Read testimonial',
      href: '#testimonial',
      isText: true,
    },
  ],
  details: [
    {
      title: 'Timeline',
      value: 'Ongoing - 1y',
      iconUrl: TimelineIcon
    },
    {
      title: 'Location',
      value: 'San Francisco, CA',
      iconUrl: LocationIcon
    },
    {
      title: 'Funding',
      value: '$23M',
      iconUrl: FundingIcon
    }
  ]
}
</script>

<template>
  <div class="overflow-hidden" :style="cssProps">
    <TheCaseStudyHero v-bind="hero" />
    <ThePocusHowWeHelpedSection />
    <ThePocusHelpCompaniesSection />
    <ThePocusProjectBackgroundSection />
    <ThePocusScreensSection />
    <ThePocusTestimonialSection />
    <ThePocusStepByStepSection />
    <ThePocusCompaniesLoveSection />
    <ThePocusFunctionsSection />
    <ThePocusProjectOutcomeSection />
    <ThePocusMoreScreensSection />
    <ThePocusLookingForMvpSection />
  </div>
</template>
