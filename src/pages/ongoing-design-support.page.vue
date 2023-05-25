<script lang="ts" setup>
// hero cards assets
import HeroCardImage1 from '~/assets/work/support-overview.png'
import HeroCardImage2 from '~/assets/work/support-saas.png'
import HeroCardBg1 from '~/components/utility/animations/SupportOverviewBg.vue'
import HeroCardBg2 from '~/components/utility/animations/SupportSaasBg.vue'

// summary banner assets
import SaasIcon from '~/assets/icons/saas-icon.svg'
import DeliverMoreIcon from '~/assets/icons/deliver-more-icon.svg'
import GrowYourTeamIcon from '~/assets/icons/grow-your-team-icon.svg'
import TeamResourcesIcon from '~/assets/icons/team-resources-icon.svg'

// case studies assets
import DefaultShot from '~/assets/case-studies/default.png'
import PhenomShot from '~/assets/case-studies/phenom.png'
import PhenomBg from '~/components/utility/animations/PhenomBg.vue'

// testimonials
import NicoAvatar from '~/assets/avatars/nico.png'
import DefaultLogo from '~/assets/tint-logos/logo-default.svg?url'

import HananAvatar from '~/assets/phenom/hanan-hermelin.jpg'
import PhenomLogo from '~/assets/tint-logos/logo-phenom.svg?url'

import CalvinAvatar from '~/assets/avatars/calvin-corelli.jpeg'
import SimpleroLogo from '~/assets/tint-logos/logo-simplero.svg?url'

import SunnyAvatar from '~/assets/avatars/sunny-rai.jpeg'
import GyaanLogo from '~/assets/tint-logos/logo-gyaan.svg?url'

// clients
import Cloudstore from '~/assets/clients/logos/cloudstore.png'
import Default from '~/assets/clients/logos/default.png'
import GCoreLabs from '~/assets/clients/logos/g-core-labs.png'
import Gyaan from '~/assets/clients/logos/gyaan.png'
import Lhotse from '~/assets/clients/logos/lhotse.png'
import Phenom from '~/assets/clients/logos/phenom.png'
import Simplero from '~/assets/clients/logos/simplero.png'
import SisuData from '~/assets/clients/logos/sisu-data.png'
import Tagvenue from '~/assets/clients/logos/tagvenue.png'

// banner
import CTABannerDesktopImage from '~/assets/case-study/cta_banner.png'

const hero = {
  title: 'Ongoing design support_',
  description:
    'We help SaaS companies deliver value to their customers faster by augmenting their teams with a dedicated design talent.',
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
    title: 'What is ongoing design support?',
    description:
      'Design support typically includes a broad range of ongoing design services, supplementing or replacing an internal design team at a partner organization.',
    picture: HeroCardImage1,
    background: HeroCardBg1,
    button: {
      label: 'See the process',
      href: '#process',
    },
  },
  {
    title: 'Who is ongoing design support for?',
    description:
      'Ongoing design support is a great solution for companies with an already functioning SaaS product, or products requiring a prolonged exploratory work.',
    picture: HeroCardImage2,
    background: HeroCardBg2,
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
      icon: SaasIcon,
      text: 'Great for robust, functioning products',
    },
    {
      icon: DeliverMoreIcon,
      text: 'Deliver more features to your users',
    },
    {
      icon: GrowYourTeamIcon,
      text: 'Scale your existing team instantly',
    },
    {
      icon: TeamResourcesIcon,
      text: 'Work with a dedicated designer or team',
    },
  ],
}

const caseStudies = {
  title: 'We specialize in enabling SaaS companies to move faster at scale_',
  cards: [
    {
      picture: DefaultShot,
      caption: 'Redesigning Default to bring the smartest inbound sales flow to the market.',
    },
    {
      picture: PhenomShot,
      background: PhenomBg,
      caption: 'Supporting Phenom - an HR-Tech unicorn by building a dedicated design team.',
      link: '/phenom',
    },
  ],
}

const process = {
  title: 'The design support process_',
  lead: 'Step-by-step overview of continuous design support.',
  list: [
    {
      title: 'Creating the collaboration plan',
      description:
        'Our collaboration plans are flexible and can work for small and large companies. Before kicking off the project we agree on the estimated monthly effort. This could be part-time, full time, or even a full time team. The details can be adjusted later based on your changing design needs.',
    },
    {
      title: 'Analyzing the materials and getting familiar with the product',
      description:
        'A dedicated designer will dive deep into your current product, customer insights and any information that will help them understand your business and problems.',
    },
    {
      title: 'Initial trial assesment',
      description:
        'We know that entering a long-term collaboration is a big decision. That’s why we give you peace of mind by offering a trial period - usually a small, fixed scope engagement focused around solving one of your known user pains before asking you to commit to a longer relationship.',
    },
    {
      title: 'First design sprint',
      description:
        'Ongoing collaboration is similar to working with an in-house designer. They will be able to integrate into your sprint structure and work directly with the product stakeholders at your organization.',
    },
    {
      title: 'Next design sprints',
      description:
        'The dedicated designer or team will be available to work exclusively on your product-related tasks every month. You can use their expertise to deliver new features for your users, create new assets for your brand or ideate a completely new product.',
      isHighlighted: true,
    },
  ],
}

const testimonials = [
  {
    quote:
      '“What impressed me most about Semiflat was their ability to work seamlessly with our existing design team. They integrated members of their team with ours, and this collaboration proved to be highly effective. Their collaborative approach, responsiveness, and expertise make them a valuable asset to any project.”',
    author: {
      name: 'Hanan Hermelin',
      role: 'Executive Director of Product Experience Operations',
      imageUrl: HananAvatar,
    },
    company: 'Phenom',
    companyLogo: PhenomLogo,
  },
  {
    quote:
      "“We're super happy with the work the team is producing. Only regret is not working together sooner. I recommend Semiflat to all my founder friends!”",
    author: {
      name: 'Nico Ferreyra',
      role: 'Co-Founder',
      imageUrl: NicoAvatar,
    },
    company: 'Default',
    companyLogo: DefaultLogo,
  },
  {
    quote:
      '“I just wanted to take a moment and recognize Jakub for the amazing work he is doing. Everything he touches looks amazing!!”',
    author: {
      name: 'Sunny Rai',
      role: 'Co-Founder at Gyaan',
      imageUrl: SunnyAvatar,
    },
    company: 'Gyaan',
    companyLogo: GyaanLogo,
  },
  {
    quote:
      "“I love how responsive and flexible Semiflat is to work with. Their design chops are great, they do excellent work. That's table stakes. But what sets them apart is how willing they are to work with our process, and work the way we need to work with them, rather than force their own process on us, or being inflexible and difficult like some other agencies have been. They've allowed us to deliver features at a much higher quality, and at a much faster timeline than we would have otherwise.”",
    author: {
      name: 'Calvin Correli',
      role: 'Founder & CEO at Simplero',
      imageUrl: CalvinAvatar,
    },
    company: 'Simplero',
    companyLogo: SimpleroLogo,
  },
]

const clients = {
  title: 'SaaS companies we’ve supported with ongoing design services_',
  cards: [
    {
      iconUrl: Phenom,
      title: 'Phenom',
      description: 'AI-powered platform to hire faster, develop better, and retain longer.',
      url: 'https://www.phenom.com/',
    },
    {
      iconUrl: Default,
      title: 'Default',
      description: 'Turn your website into a pipeline machine.',
      url: 'https://www.default.com/',
    },
    {
      iconUrl: Gyaan,
      title: 'Gyaan',
      description: 'Workspace for revenue teams to increase win rates and score deals.',
      url: 'https://www.gyaan.ai/',
    },
    {
      iconUrl: Lhotse,
      title: 'Lhotse',
      description: 'Lhotse enables easy, quick and compliant requests.',
      url: 'https://www.lhotse.de/',
    },
    {
      iconUrl: SisuData,
      title: 'Sisu Data',
      description: 'The Sisu Intelligence Engine delivers fast, comprehensive insights.',
      url: 'https://sisudata.com/',
    },
    {
      iconUrl: Cloudstore,
      title: 'Cloudstore',
      description: 'Comprehensive buying network, of your favorite dealerships.',
      url: 'https://cloudstore.co/',
    },
    {
      iconUrl: GCoreLabs,
      title: 'G-Core Labs',
      description: 'Make your app fast and responsive for a global audience.',
      url: 'https://gcore.com/',
    },
    {
      iconUrl: Tagvenue,
      title: 'Tagvenue',
      description: 'Find and book venues for any event imaginable.',
      url: 'https://www.tagvenue.com/',
    },
    {
      iconUrl: Simplero,
      title: 'Simplero',
      description: 'Your Online Business made Simple.',
      url: 'https://simplero.com/',
    },
  ],
}

const faqsTitle = 'Have any questions regarding the ongoing design support process?_'
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

      <AppBlock id="case-studies" decor="top-right" :title="caseStudies.title">
        <AppCaseStudyGrid :cards="caseStudies.cards" />
      </AppBlock>

      <AppBlock decor="middle-left">
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
