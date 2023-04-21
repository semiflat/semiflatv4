<script lang="ts" setup>
// hero assets
import Dashboard from '~/assets/doss/dashboard.png'
import DashboardDesktop from '~/assets/doss/dashboard-desktop.png'
import FundingIcon from '~/assets/doss/funding.png'
import LocationIcon from '~/assets/doss/location.png'
import TimelineIcon from '~/assets/doss/timeline.png'

// how we helped assets
import HowWeHelpedImage from '~/assets/doss/how-we-helped.png'
import BrandingIcon from '~/assets/experiences/branding.svg?component'
import WebsiteIcon from '~/assets/experiences/website.svg?component'
import DesignIcon from '~/assets/experiences/design.svg?component'
import SupportIcon from '~/assets/experiences/support.svg?component'
import UXIcon from '~/assets/experiences/user-experience-design.svg?component'
import UIIcon from '~/assets/experiences/user-interface-design.svg?component'

// product shots assets
import ProductShotDesktop from '~/assets/doss/product_shot_1_desktop.png'
import ProductShotMobile from '~/assets/doss/product_shot_1_mobile.png'
import ProductShot2Desktop from '~/assets/doss/product_shot_2_desktop.png'
import ProductShot2Mobile from '~/assets/doss/product_shot_2_mobile.png'
import ProductShot3Desktop from '~/assets/doss/product_shot_3_desktop.png'
import ProductShot3Mobile from '~/assets/doss/product_shot_3_mobile.png'
import ProductShot4Desktop from '~/assets/doss/product_shot_4_desktop.png'
import ProductShot4Mobile from '~/assets/doss/product_shot_4_mobile.png'
import ProductShot5Desktop from '~/assets/doss/product_shot_5_desktop.png'
import ProductShot5Mobile from '~/assets/doss/product_shot_5_mobile.png'
import ProductShot6Desktop from '~/assets/doss/product_shot_6_desktop.png'
import ProductShot6Mobile from '~/assets/doss/product_shot_6_mobile.png'
import ProductShot7Desktop from '~/assets/doss/product_shot_7_desktop.png'
import ProductShot7Mobile from '~/assets/doss/product_shot_7_mobile.png'
import ProductShot8Desktop from '~/assets/doss/product_shot_8_desktop.png'
import ProductShot8Mobile from '~/assets/doss/product_shot_8_mobile.png'
import ProductShot9Desktop from '~/assets/doss/product_shot_9_desktop.png'
import ProductShot9Mobile from '~/assets/doss/product_shot_9_mobile.png'
import ProductShot10Desktop from '~/assets/doss/product_shot_10_desktop.png'
import ProductShot10Mobile from '~/assets/doss/product_shot_10_mobile.png'

// testimonial assets
import TestimonialAuthor from '~/assets/doss/wiley-jones.jpg'

// services icons
import ServiceWorkshopsIcon from '~/assets/experiences/workshops.svg?component'
import ServiceUIIcon from '~/assets/experiences/user-interface-design.svg?component'
import ServiceUXIcon from '~/assets/experiences/user-experience-design.svg?component'
import ServiceDesignIcon from '~/assets/experiences/design.svg?component'
import ServiceWebsiteIcon from '~/assets/experiences/website.svg?component'
import ServiceSupportIcon from '~/assets/experiences/support.svg?component'

// banner assets
import CTABannerDesktopImage from '~/assets/case-study/cta_banner.png'

// color theme
const cssProps = {
  '--accent-color-dark': '#1952CE',
  '--accent-color-medium': '#32A4FF',
  '--accent-color-light': '#C8D8F8',
  '--gradient-rgb': '200,216,248', // must be hex code to work with rgba() function
}

const hero = {
  image: {
    urlMobile: Dashboard,
    urlDesktop: DashboardDesktop,
    altText: 'Doss app dashboard, designed by Semiflat',
  },
  title: 'MVP prototype and ongoing support for Doss - a platform for operations teams',
  description:
    'Doss Adaptive Resource Platform (ARP) combines the system of record of a traditional ERP with artificial intelligence and machine learning.',
  buttons: [
    {
      label: 'See live version',
      href: 'https://www.doss.com/',
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
      value: 'Ongoing - 6m',
      iconUrl: TimelineIcon,
    },
    {
      title: 'Location',
      value: 'San Francisco, CA',
      iconUrl: LocationIcon,
    },
    {
      title: 'Funding',
      value: '$5.3M',
      iconUrl: FundingIcon,
    },
  ],
}

const howWeHelped = {
  title: 'How we’ve helped_',
  image: {
    urlDesktop: HowWeHelpedImage,
    altText: 'Detail of Doss App dashboard designed by Semiflat',
  },
  list: [
    {
      icon: UXIcon,
      title: 'User experience design',
      description: 'We’ve designed the user experience for specific scenarios from scratch.',
    },
    {
      icon: UIIcon,
      title: 'User interface design',
      description: 'We’ve come up with a subtle yet polished look & feel for the application. ',
    },
    {
      icon: DesignIcon,
      title: 'Design system',
      description:
        'We’ve made sure all reusable components were reflected in the component library we’ve handed over to development.',
    },
    {
      icon: BrandingIcon,
      title: 'Branding',
      description: 'We’ve designed a few iterations of brand identity for Doss.',
    },
    {
      icon: WebsiteIcon,
      title: 'Website design and development',
      description: 'We’ve designed and implemented a marketing page for Doss in Webflow.',
    },
    {
      icon: SupportIcon,
      title: 'Ongoing support',
      description:
        'We’ve worked closely with the founder in iterative sprints to create prototype scenarios.',
    },
  ],
}

const caseDescription = {
  sections: [
    {
      title: 'Project background',
      lead: 'What is Doss, and what have they managed to do before approaching Semiflat?',
      body: '<p>Doss is building an Adaptive Resource Platform (ARP), which serves as a system of record for companies with a physical operation. It’s an alternative to traditional ERP (Enterprise Resource Planning) software, allowing companies to onboard within minutes, without the need to implement, debug, and without huge set-up costs. Doss integrates with the operations tool stack like Shopify, Flexport, ShipStation, Xero, or Quickbooks. </p><p>The Founder of Doss was referred to us by another long-time customer. They were looking for an ongoing full-service design partner for a fixed timeframe (6 months) before they could hire an in-house designer.</p>',
    },
    {
      title: 'The problem',
      lead: 'Why did Doss approach us? What outcome were they looking for?',
      body: '<p>Doss had acquired funding and wanted to create an MVP prototype for their platform. They wanted to show their vision to the prospective customers they were talking to at the time. They knew that the vision for the product would likely evolve, so they were looking for ongoing support over an extended period, a design partner they could work with closely, and that would implement feedback and insights from their customers to create the best product-market fit.</p>',
    },
  ],
}

const testimonial = {
  quote:
    '“Nic and the Semiflat team did a phenomenal job working with me to build out our landing page and iterate on product concept and design systems over the last couple of months. It was truly a pleasure working with them, I can’t recommend them enough. The whole team was extremely quick to understand requirements (even when I wasn’t as clear as I should be) and translate them into screens, mocks and research.”',
  author: {
    name: 'Wiley Jones',
    role: 'Founder',
    imageUrl: TestimonialAuthor,
  },
}

const servicesSection = {
  title: 'Step by step on how we’ve worked with Doss on their application design_',
  services: [
    {
      icon: ServiceWebsiteIcon,
      title: 'Web design and development',
      description:
        'We’ve started the collaboration with a simple marketing page design project. We’ve then implemented our design using Webflow.',
    },
    {
      icon: ServiceWorkshopsIcon,
      title: 'Client workshops',
      description:
        'In order to better understand the business and customer needs, we’ve held several workshop sessions.',
    },
    {
      icon: ServiceUXIcon,
      title: 'User experience design',
      description:
        'After that came the next phase - iterative, low fidelity wireframing, where we’ve proposed solutions around information architecture and hierarchy.',
    },
    {
      icon: ServiceUIIcon,
      title: 'User interface design',
      description:
        'We’ve proposed a visual identity for Doss and applied it across all wireframes, delivering a highly polished final design.',
    },
    {
      icon: ServiceDesignIcon,
      title: 'Design system design',
      description:
        'Along with the user interface, we’ve built a component library of all reusable elements from the designs.',
    },
    {
      icon: ServiceSupportIcon,
      title: 'Ongoing, iterative collaboration',
      description:
        'Over six months, we’ve iterated on the application prototype to add features and implement ongoing customer feedback.',
    },
  ],
}

const caseOutcomes = {
  sections: [
    {
      title: 'Project Outcome',
      lead: 'What did Doss gain from working with us? Where is the project now?',
      body: '<p>Doss recently hired an in-house designer to continue building on top of the work we’ve delivered. Working with Semiflat allowed them to generate initial buzz, go to market faster and create a prototype to gather customer feedback without going through the lengthy and expensive recruitment process. We’ve dedicated a team of designers who are familiar with the product and could generate solutions rapidly, often sharing updates daily.</p><p>Currently in beta, Doss is using a prototype we’ve built for them in Figma as the main product demo on their website.</p>',
    },
    {
      title: 'Deliverables',
      lead: 'What are the tangible deliverables Doss received from us during the collaboration?',
    },
  ],
  deliverables: {
    items: [
      {
        title: 'Website design and implementation',
        description:
          'We’ve created a marketing website design in Figma that we’ve then handed over to an internal no-code developer to implement in Webflow.',
      },
      {
        title: 'A high-fidelity Figma file containing all screens from the prototype',
        description:
          'We’ve delivered a set of high-fidelity screens containing all states and steps in the user’s journey for specific scenarios we’ve identified beforehand.',
      },
      {
        title: 'A separate Figma file containing all custom components from the interface',
        description:
          'We’ve made sure that all of the custom components from the design were reflected in a separate design system file, along with all of their variants, for smooth implementation and consistency.',
      },
      {
        title: 'An interactive Figma prototype',
        description:
          "On top of designing the app screens, we’ve connected them into a clickable Figma prototype that the founder of Doss could then use to better explain his product's vision to potential users and customers.",
      },
      {
        title: 'Brand design',
        description:
          'We’ve created a simple brand book with a new logo, logo mark, color palette, and typography for Doss.',
      },
    ],
  },
  cta: {
    title: 'Have a project in mind similar to Doss?',
    description:
      'Ask us about a fixed-scope MVP sprint and how we can create an interactive prototype to help you tell the story of your product.',
    cta: {
      label: 'Schedule a call',
      href: 'https://calendly.com/semiflat_demo/30min',
      isTargetBlank: true,
    },
  },
}

const ctaBanner = {
  title: 'Want to partner with design experts in SaaS?',
  description: 'We’re excited to talk to you about your project requirements and business goals.',
  buttons: [
    {
      label: 'Schedule a call',
      href: 'https://calendly.com/semiflat_demo/30min',
      isTargetBlank: true,
    },
  ],
  image: {
    urlDesktop: CTABannerDesktopImage,
    altText: 'Semiflat Case Study: Doss App dashboard',
  },
}

const productShotsGalleries = [
  {
    images: [
      {
        urlDesktop: ProductShotDesktop,
        urlMobile: ProductShotMobile,
        altText: 'Semiflat Case Study: Doss App dashboard',
      },
    ],
  },
  {
    images: [
      {
        urlDesktop: ProductShot2Desktop,
        urlMobile: ProductShot2Mobile,
        altText: 'Semiflat Case Study: Doss App dashboard',
      },
      {
        urlDesktop: ProductShot3Desktop,
        urlMobile: ProductShot3Mobile,
        altText: 'Semiflat Case Study: Doss App dashboard',
      },
      {
        urlDesktop: ProductShot4Desktop,
        urlMobile: ProductShot4Mobile,
        altText: 'Semiflat Case Study: Doss App dashboard',
      },
    ],
  },
  {
    images: [
      {
        urlDesktop: ProductShot8Desktop,
        urlMobile: ProductShot8Mobile,
        altText: 'Semiflat Case Study: Doss App dashboard',
      },
      {
        urlDesktop: ProductShot9Desktop,
        urlMobile: ProductShot9Mobile,
        altText: 'Semiflat Case Study: Doss App dashboard',
      },
      {
        urlDesktop: ProductShot10Desktop,
        urlMobile: ProductShot10Mobile,
        altText: 'Semiflat Case Study: Doss App dashboard',
      },
    ],
  },
  {
    images: [
      {
        urlDesktop: ProductShot5Desktop,
        urlMobile: ProductShot5Mobile,
        altText: 'Semiflat Case Study: Doss App dashboard',
      },
      {
        urlDesktop: ProductShot6Desktop,
        urlMobile: ProductShot6Mobile,
        altText: 'Semiflat Case Study: Doss App dashboard',
      },
      {
        urlDesktop: ProductShot7Desktop,
        urlMobile: ProductShot7Mobile,
        altText: 'Semiflat Case Study: Doss App dashboard',
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

    <TheCaseStudyBlock id="testimonial">
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
      <AppCTABanner v-bind="ctaBanner" />
    </TheCaseStudyBlock>
  </div>
</template>
