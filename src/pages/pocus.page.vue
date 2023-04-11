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
import PocusShot2Desktop from '~/assets/pocus/product_shot_2_desktop.png'
import PocusShot2Mobile from '~/assets/pocus/product_shot_2_mobile.png'
import PocusShot3Desktop from '~/assets/pocus/product_shot_3_desktop.png'
import PocusShot3Mobile from '~/assets/pocus/product_shot_3_mobile.png'
import PocusShot4Desktop from '~/assets/pocus/product_shot_4_desktop.png'
import PocusShot4Mobile from '~/assets/pocus/product_shot_4_mobile.png'
import PocusShot5Desktop from '~/assets/pocus/product_shot_5_desktop.png'
import PocusShot5Mobile from '~/assets/pocus/product_shot_5_mobile.png'
import PocusShot6Desktop from '~/assets/pocus/product_shot_6_desktop.png'
import PocusShot6Mobile from '~/assets/pocus/product_shot_6_mobile.png'
import PocusShot7Desktop from '~/assets/pocus/product_shot_7_desktop.png'
import PocusShot7Mobile from '~/assets/pocus/product_shot_7_mobile.png'
import PocusShot8Desktop from '~/assets/pocus/product_shot_8_desktop.png'
import PocusShot8Mobile from '~/assets/pocus/product_shot_8_mobile.png'
import PocusShot9Desktop from '~/assets/pocus/product_shot_9_desktop.png'
import PocusShot9Mobile from '~/assets/pocus/product_shot_9_mobile.png'
import PocusShot10Desktop from '~/assets/pocus/product_shot_10_desktop.png'
import PocusShot10Mobile from '~/assets/pocus/product_shot_10_mobile.png'

// testimonial assets
import PocusCEO from '~/assets/pocus/pocus-ceo.jpeg'

// services icons
import ServiceWorkshopsIcon from '~/assets/experiences/workshops.svg?component'
import ServiceInterfaceIcon from '~/assets/experiences/interface.svg?component'
import ServiceDesignIcon from '~/assets/experiences/design.svg?component'
import ServiceSupportIcon from '~/assets/experiences/support.svg?component'
import ServiceFlawlessIcon from '~/assets/icons/flawless.svg?component'

// banner assets
import CTABannerMobileImage from '~/assets/pocus/cta_banner_mobile.png'
import CTABannerDesktopImage from '~/assets/pocus/cta_banner_desktop.png'

// color theme
const cssProps = {
  '--accent-color-dark': '#481B97',
  '--accent-color-medium': '#824EDF',
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
      body: '<p>Pocus had developers on board back when they approached us. They needed design help creating the MVP designs in weekly sprints that would ensure their dev team constantly has something to work on. The Co-founder of Pocus was looking for a designer to work with closely in order to produce multiple variations of one feature in a short period of time.',
    },
  ],
}

const testimonial = {
  quote:
    '“We are very happy with the work Nic and his team have done. They’ve been involved in the design of our product from the very beginning and have been supporting our design needs ever since.”',
  author: {
    name: 'Isaac Pohl-Zaretsky',
    role: 'Co-Founder, CTO',
    imageUrl: PocusCEO,
  },
}

const servicesSection = {
  title: 'Step by step on how we’ve worked with Pocus on their application design_',
  services: [
    {
      icon: ServiceWorkshopsIcon,
      title: 'Getting to know Pocus',
      description:
        'Everything started with research about product-led-growth and typical workflow of a salesperson.',
    },
    {
      icon: ServiceDesignIcon,
      title: 'Importing the component library',
      description:
        'Pocus was building their app with Chakra UI. We’ve imported their component library to Figma.',
    },
    {
      icon: ServiceInterfaceIcon,
      title: 'User interface design',
      description:
        'We’ve created hi-fi designs for the initial version of Pocus, proposing the look & feel and later on continued to expand the UI adding new screens.',
    },
    {
      icon: ServiceFlawlessIcon,
      title: 'Live design sessions',
      description:
        'We held weekly check-ins that often turned into live-design sessions. Some features were updated based on the newest insights from customers.',
    },
    {
      icon: ServiceSupportIcon,
      title: 'Ongoing, iterative collaboration',
      description:
        'We’ve worked with Pocus for a year, adapting to their growing needs and delivering continuous design support.',
    },
  ],
}

const caseOutcomes = {
  sections: [
    {
      title: 'Project Outcome',
      lead: 'What did Pocus gain from working with us? Where is the project now?',
      body: '<p>Pocus is now a functioning and successful product with a beautiful UI. Thanks to our collaboration they were able to enjoy all benefits of an in-house designer; working with someone who knows their product, having direct communication and ad-hoc brainstorming sessions with their team members.</p><p>This arrangement was perfect for Pocus in the early stage - it allowed for constant design support without the commitment of hiring someone in-house. Now, being in the position to hire a designer, Pocus is continuing to develop the vision we’ve set for them and building on top fo the foundation we’ve delivered.</p>',
    },
    {
      title: 'Deliverables',
      lead: 'What are the tangible deliverables Pocus received from us during the collaboration?',
    },
  ],
  deliverables: {
    items: [
      {
        title: 'Initial look & feel proposals',
        description:
          'In the first phase of the project we worked with the Pocus team to establish a color palette that would later define the brand behind the application. We’ve delivered a Figma file containing dozens of color combinations consistent with Chakra UI’s library used by the Pocus dev team.',
      },
      {
        title: 'A high-fidelity Figma file containing all screens from the application',
        description:
          'This was the main file that we’ve worked in over the course of our collaboration. It has evolved multiple times over the months but the final outcome reflected all of the screens in the live product and some upcoming features.',
      },
      {
        title: 'A separate Figma file containing all custom components from the interface',
        description:
          'During the collaboration we’ve created many custom components that were not included in the codebase prior. We’ve delivered them in a separate Figma file, along with all variants and states so implementing them would be a breeze. ',
      },
    ],
  },

  cta: {
    title: 'Have a project in mind similar to Pocus?',
    description: 'Ask us about a dedicated senior designer long-term collaboration model.',
    cta: {
      href: 'mailto:hello@semiflat.com',
      label: 'Get in touch',
    },
  },
}

const ctaBanner = {
  title: 'Want to partner with design experts in SaaS?',
  description: 'We’re excited to talk to you about your project requirements and business goals.',
  buttons: [
    {
      href: 'mailto:hello@semiflat.com',
      label: 'Send an email',
    },
    {
      href: 'https://calendly.com/d/g3b-8j5-vzs/semiflat-design-partner-introduction',
      label: 'Schedule a call',
      isTargetBlank: true,
      isText: true,
    },
  ],
  image: {
    urlDesktop: CTABannerDesktopImage,
    urlMobile: CTABannerMobileImage,
    altText: 'Semiflat Case Study: Pocus App dashboard',
  },
}

const productShotsGalleries = [
  {
    images: [
      {
        urlDesktop: PocusShotDesktop,
        urlMobile: PocusShotMobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
    ],
  },
  {
    images: [
      {
        urlDesktop: PocusShot2Desktop,
        urlMobile: PocusShot2Mobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
      {
        urlDesktop: PocusShot3Desktop,
        urlMobile: PocusShot3Mobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
      {
        urlDesktop: PocusShot4Desktop,
        urlMobile: PocusShot4Mobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
    ],
  },
  {
    images: [
      {
        urlDesktop: PocusShot8Desktop,
        urlMobile: PocusShot8Mobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
      {
        urlDesktop: PocusShot9Desktop,
        urlMobile: PocusShot9Mobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
      {
        urlDesktop: PocusShot10Desktop,
        urlMobile: PocusShot10Mobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
    ],
  },
  {
    images: [
      {
        urlDesktop: PocusShot5Desktop,
        urlMobile: PocusShot5Mobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
      {
        urlDesktop: PocusShot6Desktop,
        urlMobile: PocusShot6Mobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
      {
        urlDesktop: PocusShot7Desktop,
        urlMobile: PocusShot7Mobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
    ],
  },
]
</script>

<template>
  <div :style="cssProps">
    <TheCaseStudyHero v-bind="hero" />

    <TheCaseStudyBlock decor="top-right">
      <AppListBox v-bind="howWeHelped" />
    </TheCaseStudyBlock>

    <TheCaseStudyBlock>
      <AppImagesGroup v-bind="productShotsGalleries[0]" />
    </TheCaseStudyBlock>

    <TheCaseStudyBlock decor="top-left">
      <TheCaseStudyDescription v-bind="caseDescription" />
    </TheCaseStudyBlock>

    <TheCaseStudyBlock>
      <TheCaseStudyTestimonial v-bind="testimonial" />
    </TheCaseStudyBlock>

    <TheCaseStudyBlock>
      <AppImagesGroup v-bind="productShotsGalleries[1]" />
    </TheCaseStudyBlock>

    <TheCaseStudyBlock decor="bottom-right">
      <TheCaseStudyServices v-bind="servicesSection" />
    </TheCaseStudyBlock>

    <TheCaseStudyBlock>
      <AppImagesGroup v-bind="productShotsGalleries[2]" />
    </TheCaseStudyBlock>

    <TheCaseStudyBlock>
      <TheCaseStudyDescription v-bind="caseOutcomes">
        <template #section-1>
          <TheCaseStudyCTACard v-bind="caseOutcomes.cta" />
        </template>
        <template #section-2>
          <AppNumberedList v-bind="caseOutcomes.deliverables" />
        </template>
      </TheCaseStudyDescription>
    </TheCaseStudyBlock>

    <TheCaseStudyBlock decor="middle-left">
      <AppImagesGroup v-bind="productShotsGalleries[3]" />
    </TheCaseStudyBlock>

    <TheCaseStudyBlock>
      <TheCaseStudyCTABanner v-bind="ctaBanner" />
    </TheCaseStudyBlock>
  </div>
</template>
