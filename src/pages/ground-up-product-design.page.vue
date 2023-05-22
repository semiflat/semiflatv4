<script lang="ts" setup>
// hero cards assets
import HeroCardImage1 from '~/assets/work/ground-up-design-card-1.png'

// summary banner assets
import FoundationIcon from '~/assets/icons/foundation.svg'
import ConsistencyIcon from '~/assets/icons/consistency.svg'
import BrandIcon from '~/assets/services/icons/brand.svg'
import FastDeliveryIcon from '~/assets/services/icons/faster.svg'

// case studies assets
import Pocus from '~/assets/case-studies/pocus.png'
import Useful from '~/assets/case-studies/useful.png'
import PocusBg from '~/components/utility/animations/PocusBg.vue'
import UsefulBg from '~/components/utility/animations/UsefulBg.vue'

// testimonials
import UsefulCEO from '~/assets/useful/useful-ceo.png'
import UsefulLogo from '~/assets/tint-logos/logo-useful.svg?component'

import PocusCEO from '~/assets/pocus/pocus-ceo.jpeg'
import PocusLogo from '~/assets/tint-logos/logo-pocus.svg?component'

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

const summaryBanner = {
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
    },
  ],
}

const caseStudies = {
  title: 'We specialize in designing functional and beautiful SaaS products_',
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
  ],
}

const process = {
  title: 'The ground-up product design process_',
  lead: 'Step-by-step of how we design products from scratch.',
  list: [
    {
      title: 'Discovery phase',
      description:
        'We make sure to establish the business requirements and project goals. We will conduct a thorough research of your industry and competitors to build a solid foundation for the next stages of the design process.',
    },
    {
      title: 'User research',
      description:
        'Semiflat can conduct user research to validate your product assumptions or discover pains of your customers. We will define your ICP, recruit users fitting the criteria and hold interviews according to a previously designed questionnaire.',
      label: 'Optional',
    },
    {
      title: 'Low-fidelity wireframing',
      description:
        'During this stage we will propose low-fidelity designs consistent with a previously established set of user flows. This stage aims to deliver the final information hierarchy and user journey encompassing all screens that will exist in the app in iterative sprints.',
    },
    {
      title: 'High-fidelity wireframing',
      description:
        'We will propose several version of the look&feel of your product and work with you to design the final, polished interface for all pages.',
    },
    {
      title: 'Design system design',
      description:
        'We will turn all reusable elements across the design into Figma components with all possible states to enable fast implementation and easy global changes in the future.',
    },
    {
      title: 'User testing',
      description:
        'We can conduct user testing to validate our designs with real users that fit your ICP. That way you can ensure you’re going to market with a solution that solves user pains and make immediate adjustments if necessary.',
      label: 'Optional',
    },
  ],
}

const testimonials = [
  {
    quote:
      '“When we set out to work with a design studio, we were looking for true partnership, not just great execution. Paulina, Nic, and Ewa were all of that and more. They helped bring our vision to life and were real thought partners throughout the creative process. They gave us an incredible foundation to work with, and we’re excited to partner with the Semiflat team in the future.”',
    author: {
      name: 'Mike Ottavi-Brannon',
      role: 'Co-Founder',
      imageUrl: UsefulCEO,
    },
    company: 'Useful',
    companyLogo: UsefulLogo,
  },
  {
    quote:
      '“We are very happy with the work Nic and his team have done. They’ve been involved in the design of our product from the very beginning and have been supporting our design needs ever since.”',
    author: {
      name: 'Isaac Pohl-Zaretsky',
      role: 'Co-Founder, CTO',
      imageUrl: PocusCEO,
    },
    company: 'Pocus',
    companyLogo: PocusLogo,
  },
]
</script>

<template>
  <div>
    <AppHero v-bind="hero" />
    <div class="page-content">
      <AppBlock>
        <WorkInfoCards :cards="heroCards" />
      </AppBlock>
      <AppBlock>
        <WorkSummaryBanner :data="summaryBanner" />
      </AppBlock>
      <AppBlock>
        <WorkCaseStudies :data="caseStudies" />
      </AppBlock>
      <AppBlock>
        <AppLongTextSection :data="process" :isPrimary="true">
          <AppNumberedList :items="process.list" :isLayoutCards="true" :isPrimary="true" />
        </AppLongTextSection>
      </AppBlock>
      <AppBlock>
        <AppTestimonialsSlider :testimonials="testimonials" />
      </AppBlock>
    </div>
  </div>
</template>
