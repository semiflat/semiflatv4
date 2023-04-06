<script lang="ts" setup>
// hero assets
import Dashboard from '~/assets/pocus/pocus-dashboard-tiny.png'
import DashboardVideo from '~/assets/pocus/pocus-dashboard.mp4'
import PocusLogo from '~/assets/pocus/pocus-logo.svg?component'
import FundingIcon from '~/assets/pocus/funding.svg?url'
import LocationIcon from '~/assets/pocus/location.svg?url'
import TimelineIcon from '~/assets/pocus/timeline.svg?url'

// how we helped assets
import HowWeHelpedImage from '~/assets/pocus/how-we-helped-shot.png'
import InterfaceIcon from '~/assets/experiences/interface.svg?component'
import DesignIcon from '~/assets/experiences/design.svg?component'
import SupportIcon from '~/assets/experiences/support.svg?component'

// product shots assets
import PocusShotDesktop from '~/assets/pocus/product_shot_1_desktop.png'
import PocusShotMobile from '~/assets/pocus/product_shot_1_mobile.png'

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

const singleProductShot = {
  images: [
    {
      urlDesktop: PocusShotDesktop,
      urlMobile: PocusShotMobile,
      altText: 'Semiflat Case Study: Pocus App dashboard',
    },
  ],
}

const caseDescription = {
  sections: [
    {
      title: 'Project background',
      lead: 'What is Pocus and what have they managed to do before approaching Semiflat?',
      body: '<p>Pocus is a product-led tool for sales teams. It allows companies to use the full potential of their product and customer data to identify the highest-value opportunities. It helps salespeople by identifying product champions, setting custom alerts to capture opportunities as they happen, and even lets them create custom, conditional groups of users without writing any code.</p><p>The Co-founder of Pocus contacted Semiflat in the early stages of developing their product. They had already created the back-end of the application but needed help coming up with the look and feel as well as the conceptual design of certain features. What followed was a many-month-long and-counting iterative collaboration as the product continued to grow.</p>',
    },
    {
      title: 'The problem',
      lead: 'Why did Pocus approach us? What outcome were they looking for?',
      body: '<p>Pocus had developers on board back when they approached us. They needed design help creating the MVP designs in weekly sprints that would ensure their dev team constantly has something to work on. The Co-founder of Pocus was looking for a designer to work with closely in order to produce multiple variations of one feature in a short period of time.</p>',
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
    <TheCaseStudyBlock>
      <AppImagesGroup v-bind="singleProductShot" />
    </TheCaseStudyBlock>
    <TheCaseStudyBlock>
      <TheCaseStudyDescription v-bind="caseDescription" />
    </TheCaseStudyBlock>

    <TheCaseStudyBlock>

    </TheCaseStudyBlock>
    
    <ThePocusTestimonialSection />
    <ThePocusScreensSection />
    <ThePocusStepByStepSection />
    <ThePocusCompaniesLoveSection />
    <ThePocusFunctionsSection />
    <ThePocusProjectOutcomeSection />
    <ThePocusMoreScreensSection />
    <ThePocusLookingForMvpSection />
  </div>
</template>
