<script lang="ts" setup>
// hero assets
import Dashboard from '~/assets/useful/dashboard.png'
import DashboardDesktop from '~/assets/useful/dashboard-desktop.png'
import FundingIcon from '~/assets/useful/funding.svg?url'
import LocationIcon from '~/assets/useful/location.svg?url'
import TimelineIcon from '~/assets/useful/timeline.svg?url'

// how we helped assets
import HowWeHelpedImage from '~/assets/useful/how-we-helped-shot.png'
import ResearchIcon from '~/assets/experiences/workshops.svg?component'
import InterfaceIcon from '~/assets/experiences/interface.svg?component'
import DesignIcon from '~/assets/experiences/design.svg?component'
import ProcessIcon from '~/assets/experiences/support.svg?component'

// product shots assets
import ProductShotDesktop from '~/assets/useful/product_shot_1_desktop.png'
import ProductShotMobile from '~/assets/useful/product_shot_1_mobile.png'
import ProductShot2Desktop from '~/assets/useful/product_shot_2_desktop.png'
import ProductShot2Mobile from '~/assets/useful/product_shot_2_mobile.png'
import ProductShot3Desktop from '~/assets/useful/product_shot_3_desktop.png'
import ProductShot3Mobile from '~/assets/useful/product_shot_3_mobile.png'
import ProductShot4Desktop from '~/assets/useful/product_shot_4_desktop.png'
import ProductShot4Mobile from '~/assets/useful/product_shot_4_mobile.png'
import ProductShot5Desktop from '~/assets/useful/product_shot_5_desktop.png'
import ProductShot5Mobile from '~/assets/useful/product_shot_5_mobile.png'
import ProductShot6Desktop from '~/assets/useful/product_shot_6_desktop.png'
import ProductShot6Mobile from '~/assets/useful/product_shot_6_mobile.png'
import ProductShot7Desktop from '~/assets/useful/product_shot_7_desktop.png'
import ProductShot7Mobile from '~/assets/useful/product_shot_7_mobile.png'
import ProductShot8Desktop from '~/assets/useful/product_shot_8_desktop.png'
import ProductShot8Mobile from '~/assets/useful/product_shot_8_mobile.png'
import ProductShot9Desktop from '~/assets/useful/product_shot_9_desktop.png'
import ProductShot9Mobile from '~/assets/useful/product_shot_9_mobile.png'
import ProductShot10Desktop from '~/assets/useful/product_shot_10_desktop.png'
import ProductShot10Mobile from '~/assets/useful/product_shot_10_mobile.png'

// testimonial assets
import TestimonialAuthor from '~/assets/useful/useful-ceo.png'

// services icons
import ServiceWorkshopsIcon from '~/assets/experiences/workshops.svg?component'
import ServiceInterfaceIcon from '~/assets/experiences/interface.svg?component'
import ServiceUXIcon from '~/assets/experiences/UX.svg?component'
import ServiceDesignIcon from '~/assets/experiences/design.svg?component'
import ServiceFlawlessIcon from '~/assets/icons/flawless.svg?component'

// banner assets
import CTABannerMobileImage from '~/assets/pocus/cta_banner_mobile.png'
import CTABannerDesktopImage from '~/assets/pocus/cta_banner_desktop.png'

// color theme
const cssProps = {
  '--accent-color-dark': '#6F2DE7',
  '--accent-color-light': '#E0D1FA',
}

const hero = {
  image: {
    urlMobile: Dashboard,
    urlDesktop: DashboardDesktop,
    altText: 'Useful app dashboard, designed by Semiflat'
  },
  title: 'Helping Useful raise $5M to empower continuous delivery tech teams',
  description:
    'Turn customer calls into Product gold. Transcribe, highlight, and share important moments from customer calls. Excite and inform teammates to build products your customers will love.',
  buttons: [
    {
      label: 'See live version',
      href: 'https://useful.com/',
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
      value: '2 months',
      iconUrl: TimelineIcon,
    },
    {
      title: 'Location',
      value: 'Austin, TX',
      iconUrl: LocationIcon,
    },
    {
      title: 'Funding',
      value: '$5M',
      iconUrl: FundingIcon,
    },
  ],
}

const howWeHelped = {
  title: 'How we’ve helped_',
  imageUrl: HowWeHelpedImage,
  list: [
    {
      icon: ResearchIcon,
      title: 'Discovery Workshops',
      description:
        'We’ve conducted an extensive Discovery phase to define all user stories and a complete navigation structure for the product.',
    },
    {
      icon: ProcessIcon,
      title: 'User experience design',
      description:
        'We’ve translated the findings of the Discovery session into a set of low-fidelity wireframes..',
    },
    {
      icon: InterfaceIcon,
      title: 'User Interface Design',
      description:
        'We’ve proposed multiple style variations and translated all lo-fi mockups into the one Client loved most.',
    },
    {
      icon: DesignIcon,
      title: 'Design System',
      description:
        'We’ve built a comprehensive component library for all reusable elements within the design.',
    },
  ],
}

const caseDescription = {
  sections: [
    {
      title: 'Project background',
      lead: 'What is Useful, and what have they managed to do before approaching Semiflat?',
      body: '<p>The founders of Useful are product managers who previously worked at a big tech company. Their idea for an app was born from a shared struggle to stay on top of the customer discovery process. They realized organizing their work manually with spreadsheets provides little visibility and isn’t scalable. There had to be a better way!</p><p>After discovering that there was no solution on the market, they took matters into their own hands. They embarked on a mission to help companies build closer relationships with their customers and extract insights from their conversations.</p>',
    },
    {
      title: 'The problem',
      lead: 'Why did Useful approach us? What outcome were they looking for?',
      body: '<p>Useful approached us after conducing more than one hundred interviews with project managers, researchers and designers. They knew exactly what problems their potential users were facing but needed our help with translating their insights into features and user flows and a full MVP design.</p>',
    },
  ],
  cta: {
    title: 'Don’t know how to start the project?',
    description:
      'We have a video that explains everything you need to successfully kick of a collaboration with us.',
    cta: {
      href: 'mailto:hello@semiflat.com',
      label: 'Get in touch',
    },
  },
}

const testimonial = {
  quote:
    '“When we set out to work with a design studio, we were looking for true partnership, not just great execution. Paulina, Nic, and Ewa were all of that and more. They helped bring our vision to life and were real thought partners throughout the creative process. They gave us an incredible foundation to work with, and we’re excited to partner with the Semiflat team in the future.”',
  author: {
    name: 'Mike Ottavi-Brannon',
    role: 'Co-Founder',
    imageUrl: TestimonialAuthor,
  },
}

const servicesSection = {
  title: 'Step by step on how we’ve worked with Useful on their MVP design_',
  services: [
    {
      icon: ServiceFlawlessIcon,
      title: 'Discovery sessions',
      description:
        'Over several video sessions, we worked with Useful’s founders to establish user personas, user stories, core user flows, and navigation structure.',
    },
    {
      icon: ServiceWorkshopsIcon,
      title: 'Workshops & analysis',
      description:
        'We’ve analyzed our notes and recordings from our meetings to ensure we’re moving into the next phase with a full understanding of business needs and goals.',
    },
    {
      icon: ServiceUXIcon,
      title: 'User experience design',
      description:
        'The next and most time-intensive part of the project was translating all the findings of discovery sessions into a complete set of lo-fi wireframes.',
    },
    {
      icon: ServiceInterfaceIcon,
      title: 'User interface design',
      description:
        'We’ve added a bit of magic to the low-fidelity mockups, proposing several look & feel variations and making sure even empty states were engaging and pleasant to look at.',
    },
    {
      icon: ServiceDesignIcon,
      title: 'Design system design',
      description:
        'We’ve built a starter design system so Useful can scale their product in the future without worrying about inconsistency.',
    },
  ],
}

const caseOutcomes = {
  sections: [
    {
      title: 'Project Outcome',
      lead: 'What did Useful gain from working with us? Where is the project now?',
      body: '<p>Over two months, we’ve delivered a complete user experience and a clickable application prototype. We wanted to make sure that Useful is set up for success, so we’ve also implemented a design system containing all of the components used across the interface.</p><p>Useful went on to raise a $5M financing round from Spark Capital and Unusual Ventures. The application is currently in the last stages of development, serving first users through an early-access program.</p>',
    },
    {
      title: 'Deliverables',
      lead: 'What are the tangible deliverables Useful received from us during the collaboration?',
    },
  ],
  deliverables: {
    items: [
      {
        title: 'A whiteboard containing the summary of all Discovery sessions',
        description:
          'The outcome of the workshops was delivered to Useful as a FigJam - a whiteboard-like canvas containing sticky notes, diagrams, and tables filed with assumptions, business goals, and vision that we’ve gathered on our calls with the founders.',
      },
      {
        title: 'A low-fidelity Figma file containing all screens from the application',
        description:
          "Useful also got a separate Figma file containing all pages reflective of user flows established in the project's initial phase. We've worked on this file throughout the majority of the project in iterative sprints, focusing on one user flow at a time.",
      },
      {
        title: 'A high-fidelity Figma file containing all screens from the application',
        description:
          "Starting with the look & feel proposals, we've carried the established style to the previously designed low-fidelity wireframes to give them a final, polished look. We then handed over this file to the developers.",
      },
      {
        title: 'A component library file',
        description:
          "We know that a small MVP can quickly grow into a large product. With rapid user growth comes the demand for new features, which needs to be rapidly fulfilled. Startups in the early stages often rely solely on developers to modify existing designs which can easily lead to multiple versions of the same screen or component. We wanted to avoid this scenario, so we've equipped Useful with a separate file containing all reusable components to implement and build on top of in the future.",
      },
      {
        title: 'Clickable prototype',
        description:
          "We’ve connected the key high fidelity pages into clickable sequences so Useful could not only tell investors and customers about their product but actually show it to them.",
      },
    ],
  },
  cta: {
    title: 'Have a project in mind similar to Useful?',
    description: 'Ask us about a fixed-scope MVP sprint and how we can create an interactive prototype to help you tell the story of your product.',
    cta: {
      href: 'mailto:hello@semiflat.com',
      label: 'Get in touch',
    },
  },
}

const ctaBanner = {
  title: 'Are you interested in working together?',
  description: 'Reach out with more details about your project so we can prepare for an introductory call. We’ll schedule it within 24 hours from receiving your query.',
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
        urlDesktop: ProductShotDesktop,
        urlMobile: ProductShotMobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
    ],
  },
  {
    images: [
      {
        urlDesktop: ProductShot2Desktop,
        urlMobile: ProductShot2Mobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
      {
        urlDesktop: ProductShot3Desktop,
        urlMobile: ProductShot3Mobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
      {
        urlDesktop: ProductShot4Desktop,
        urlMobile: ProductShot4Mobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
    ],
  },
  {
    images: [
      {
        urlDesktop: ProductShot8Desktop,
        urlMobile: ProductShot8Mobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
      {
        urlDesktop: ProductShot9Desktop,
        urlMobile: ProductShot9Mobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
      {
        urlDesktop: ProductShot10Desktop,
        urlMobile: ProductShot10Mobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
    ],
  },
  {
    images: [
      {
        urlDesktop: ProductShot5Desktop,
        urlMobile: ProductShot5Mobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
      {
        urlDesktop: ProductShot6Desktop,
        urlMobile: ProductShot6Mobile,
        altText: 'Semiflat Case Study: Pocus App dashboard',
      },
      {
        urlDesktop: ProductShot7Desktop,
        urlMobile: ProductShot7Mobile,
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
      <TheCaseStudyDescription v-bind="caseDescription">
        <template #section-1>
          <TheCaseStudyCTACard v-bind="caseDescription.cta" />
        </template>
      </TheCaseStudyDescription>
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
      <TheCaseStudyCTABanner v-bind="ctaBanner" />
    </TheCaseStudyBlock>
  </div>
</template>
