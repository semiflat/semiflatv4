<script lang="ts" setup>
// hero assets
import Dashboard from '~/assets/pocus/pocus-dashboard-tiny.png'
import DashboardVideo from '~/assets/pocus/pocus-dashboard.mp4'
import PocusLogo from '~/assets/pocus/pocus-logo.svg?component'
import FundingIcon from '~/assets/pocus/funding.svg?url'
import LocationIcon from '~/assets/pocus/location.svg?url'
import TimelineIcon from '~/assets/pocus/timeline.svg?url'

// how we helped assets
import HowWeHelpedImage from '~/assets/pocus/how-we-helped-shot.png';
import InterfaceIcon from '~/assets/experiences/interface.svg?component'
import DesignIcon from '~/assets/experiences/design.svg?component'
import SupportIcon from '~/assets/experiences/support.svg?component'

// color theme
const cssProps = {
  '--accent-color-dark': '#481B97',
  '--accent-color-light': '#E1D4F7',
}

const hero = {
  logotype: PocusLogo,
  imageUrl: Dashboard,
  videoUrl: DashboardVideo,
  title: 'Designing Pocus, a product-led sales tool that raised a $23M series A',
  description:
    'Pocus is a Product-Led Sales platform that gives go-to-market teams access to product usage data without relying on engineers.',
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
      iconUrl: TimelineIcon,
    },
    {
      title: 'Location',
      value: 'San Francisco, CA',
      iconUrl: LocationIcon,
    },
    {
      title: 'Funding',
      value: '$23M',
      iconUrl: FundingIcon,
    },
  ],
}

const howWeHelped = {
  title: 'How we’ve helped_',
  imageUrl: HowWeHelpedImage,
  list: [
    {
      icon: InterfaceIcon,
      title: 'User interface design',
      description:
        'We worked closely with the co-founder of Pocus to propose the initial look & feel of the app.',
    },
    {
      icon: DesignIcon,
      title: 'Component library',
      description:
        'The design was consistent with the React library Pocus was using at the time. This helped cut down development time.',
    },
    {
      icon: SupportIcon,
      title: 'Ongoing support',
      description: 'We regularly ideated multiple versions of new features as the product grew.',
    },
  ],
}
</script>

<template>
  <div :style="cssProps">
    <TheCaseStudyHero v-bind="hero" />
    <TheCaseStudyBlock>
      <AppListBox v-bind="howWeHelped" />
    </TheCaseStudyBlock>

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
