<script lang="ts" setup>
// hero cards assets
import HeroCardImage1 from '~/assets/work/ground-up-design-card-1.png'
import HeroCardImage2 from '~/assets/work/ground-up-design-card-2.png'

// summary banner assets
import FoundationIcon from '~/assets/icons/foundation.svg'
import ConsistencyIcon from '~/assets/icons/consistency.svg'
import BrandIcon from '~/assets/services/icons/brand.svg'
import FastDeliveryIcon from '~/assets/services/icons/faster.svg'

// case studies assets
import PocusShot from '~/assets/case-studies/pocus.png'
import UsefulShot from '~/assets/case-studies/useful.png'
import PocusBg from '~/components/utility/animations/PocusBg.vue'
import UsefulBg from '~/components/utility/animations/UsefulBg.vue'

// testimonials
import UsefulCEO from '~/assets/useful/useful-ceo.png'
import UsefulLogo from '~/assets/tint-logos/logo-useful.svg?url'

import PocusCEO from '~/assets/pocus/pocus-ceo.jpeg'
import PocusLogo from '~/assets/tint-logos/logo-pocus.svg?url'

import ErinAvatar from '~/assets/avatars/erin.png'
import YuzedataLogo from '~/assets/tint-logos/logo-yuzedata.svg?url'

import AndreAvatar from '~/assets/avatars/andre.png'
import JeticLogo from '~/assets/tint-logos/logo-jetic.svg?url'

// clients
import Ahana from '~/assets/clients/logos/ahana.png'
import AppFleet from '~/assets/clients/logos/appfleet.png'
import ClickMagic from '~/assets/clients/logos/click-magic.png'
import DevZero from '~/assets/clients/logos/dev-zero.png'
import Doss from '~/assets/clients/logos/doss.png'
import Jetic from '~/assets/clients/logos/jetic.png'
import Metlo from '~/assets/clients/logos/metlo.png'
import Onward from '~/assets/clients/logos/onward.png'
import Pocus from '~/assets/clients/logos/pocus.png'
import Runchise from '~/assets/clients/logos/runchise.png'
import Scholaris from '~/assets/clients/logos/scholaris.png'
import Tau from '~/assets/clients/logos/tau.png'
import Useful from '~/assets/clients/logos/useful.png'
import YuzeData from '~/assets/clients/logos/yuze-data.png'

// banner
import CTABannerDesktopImage from '~/assets/case-study/cta_banner.png'

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
      href: '#process',
    },
  },
  {
    title: 'Who is ground-up product design for?',
    description:
      'Ground-up product design is perfect for early stage startups, SaaS companies launching new products or legacy software needing a complete overhaul.',
    picture: HeroCardImage2,
    button: {
      label: 'See our clients',
      href: '#clients',
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
      picture: PocusShot,
      background: PocusBg,
      caption: 'Designing Pocus - product-led sales tool that raised a $23M Series A.',
      link: '/pocus',
    },
    {
      picture: UsefulShot,
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
      "“The Semiflat team went above and beyond, kept all deadlines and delivered on their promises. I've been managing IT and design projects for decades and was still impressed with how smooth the project was moving along.  We will definitely work with them in the future.”",
    author: {
      name: 'Erin Joseph',
      role: 'Product Manager',
      imageUrl: ErinAvatar,
    },
    company: 'Pocus',
    companyLogo: YuzedataLogo,
  },
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
  {
    quote:
      "“We've had a great experience working with Nic and his Semiflat team. While creating our SaaS platform, it was critical that our technical requirements get captured and transformed into a final product in a perfect way. Everything, from scoping out and communication to final designs, was delivered with high quality. Our expectations were met and exceeded, and we keep coming back to Semiflat for continuous collaboration.”",
    author: {
      name: 'Andre Sluczka',
      role: 'Founder and CEO',
      imageUrl: AndreAvatar,
    },
    company: 'Pocus',
    companyLogo: JeticLogo,
  },
]

const clients = {
  title: 'SaaS companies we’ve done ground-up product design for_',
  cards: [
    {
      iconUrl: Pocus,
      title: 'Pocus',
      description: 'Revenue Data Platform built for go-to-market teams.',
      url: 'https://www.pocus.com/',
    },
    {
      iconUrl: DevZero,
      title: 'DevZero',
      description: 'Upgrade your localhost. Move it to the cloud.',
      url: 'https://www.devzero.io/',
    },
    {
      iconUrl: Doss,
      title: 'Doss',
      description: 'Doss combines a traditional ERP with AI and machine learning.',
      url: 'https://www.doss.com/',
    },
    {
      iconUrl: YuzeData,
      title: 'YuzeData',
      description: 'The YuzeData platform helps you drive compliance and performance.',
      url: 'https://www.yuzedata.com/',
    },
    {
      iconUrl: Useful,
      title: 'Useful',
      description: 'Instantly go from customer call to shareable insight with AI.',
      url: 'https://useful.app/',
    },
    {
      iconUrl: Tau,
      title: 'Tau',
      description: 'Accurate software generation with guaranteed AI safety.',
      url: 'https://tau.net/',
    },
    {
      iconUrl: Onward,
      title: 'Onward',
      description: 'Supercharge scheduling, power seamless workday automation.',
      url: 'https://onward.so/',
    },
    {
      iconUrl: AppFleet,
      title: 'appfleet',
      description: 'Deploy your edge app in a container close to your users.',
      url: 'https://appfleet.com/',
    },
    {
      iconUrl: ClickMagic,
      title: 'ClickMagick',
      description: 'Unbeatable tracking & attribution without the chaos.',
      url: 'https://www.clickmagick.com/',
    },
    {
      iconUrl: Ahana,
      title: 'Ahana',
      description: 'Presto SQL on your data lake made simple.',
      url: 'https://ahana.io/',
    },
    {
      iconUrl: Runchise,
      title: 'Runchise',
      description: 'Management system and POS for the restaurant industry.',
      url: 'https://www.runchise.com/',
    },
    {
      iconUrl: Jetic,
      title: 'Jetic',
      description: 'Cloud-native integration platform on Apache Camel.',
      url: 'https://jetic.io/',
    },
    {
      iconUrl: Scholaris,
      title: 'Scholaris',
      description: 'Ed-tech management system and collaboration platform.',
      url: '',
    },
    {
      iconUrl: Metlo,
      title: 'Metlo',
      description: 'Test and Protect your API with best in class API security platform.',
      url: 'https://www.metlo.com/',
    },
  ],
}

const faqsTitle = 'Have any questions regarding the ground-up design process?_'
const faqs = reactive([
  {
    header: 'What deliverables will I receive?',
    text: 'A separate Figma file for every stage of the design process. A typical deliverables package consists of a low-fidelity wireframes Figma file, high fidelity wireframes Figma file, and a separate file containing all reusable components from the design.',
    isOpen: false,
  },
  {
    header: 'What is the timeline to design an MVP?',
    text: 'A typical MVP takes between 2 and 3 months to design. This includes working through all stages of product design - from user stories through user experience, ending with a user interface and a component library.',
    isOpen: false,
  },
  {
    header: 'What are the next steps to work with you?',
    text: 'Click the ‘Get in touch’ button in the top right corner or message hello@semiflat.com outlining your high-level design needs. We’ll reply and work out a time for an introductory call where you’ll ask us anything that’s on your mind. From there, we’ll work towards defining the scope, pricing, and timeline.',
    isOpen: false,
  },
  {
    header: 'How much should I budget for the project?',
    text: 'Designing a typical MVP from scratch usually costs between $15k and $25k. Ongoing design support packages start from $6400/month with no long-time commitment. Contact us for individual pricing if you’re looking for a dedicated design team.',
    isOpen: false,
  },
])

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
    altText: 'Semiflat Case Study: Pocus App dashboard',
  },
}
</script>

<template>
  <div>
    <AppHero v-bind="hero" />
    <div class="page-content">
      <AppBlock id="base-info">
        <WorkInfoCards :cards="heroCards" />
      </AppBlock>

      <AppBlock id="summary">
        <WorkSummaryBanner :data="summaryBanner" />
      </AppBlock>

      <AppBlock id="case-studies" :title="caseStudies.title">
        <AppCaseStudyGrid :cards="caseStudies.cards" />
      </AppBlock>

      <AppBlock>
        <AppLongTextSection id="process" :data="process" :isPrimary="true">
          <AppNumberedList :items="process.list" :isLayoutCards="true" :isPrimary="true" />
        </AppLongTextSection>
      </AppBlock>

      <AppBlock id="testimonials">
        <AppTestimonialsSlider :testimonials="testimonials" />
      </AppBlock>

      <AppBlock :title="clients.title">
        <WorkClients id="clients" :cards="clients.cards" />
      </AppBlock>

      <AppBlock id="faq" :title="faqsTitle">
        <AppAccordion :faqs="faqs" />
      </AppBlock>

      <AppBlock id="cta">
        <AppCTABanner v-bind="ctaBanner" />
      </AppBlock>
    </div>
  </div>
</template>
