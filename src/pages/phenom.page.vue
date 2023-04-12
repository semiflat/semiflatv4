<script lang="ts" setup>
// hero assets
import Dashboard from '~/assets/phenom/dashboard.png'
import DashboardDesktop from '~/assets/phenom/dashboard-desktop.png'
import FundingIcon from '~/assets/phenom/funding.svg?url'
import LocationIcon from '~/assets/phenom/location.svg?url'
import TimelineIcon from '~/assets/phenom/timeline.svg?url'

// how we helped assets
import HowWeHelpedImage from '~/assets/phenom/how-we-helped-desktop.png'
import HowWeHelpedImageMobile from '~/assets/phenom/how-we-helped-mobile.png'
import ResearchIcon from '~/assets/experiences/workshops.svg?component'
import InterfaceIcon from '~/assets/experiences/interface.svg?component'
import DesignIcon from '~/assets/experiences/design.svg?component'
import ProcessIcon from '~/assets/experiences/support.svg?component'
import UXIcon from '~/assets/experiences/UX.svg?component'

// product shots assets
import ProductShotDesktop from '~/assets/phenom/product_shot_1_desktop.png'
import ProductShotMobile from '~/assets/phenom/product_shot_1_mobile.png'
import ProductShot2Desktop from '~/assets/phenom/product_shot_2_desktop.png'
import ProductShot2Mobile from '~/assets/phenom/product_shot_2_mobile.png'
import ProductShot3Desktop from '~/assets/phenom/product_shot_3_desktop.png'
import ProductShot3Mobile from '~/assets/phenom/product_shot_3_mobile.png'
import ProductShot4Desktop from '~/assets/phenom/product_shot_4_desktop.png'
import ProductShot4Mobile from '~/assets/phenom/product_shot_4_mobile.png'
import ProductShot5Desktop from '~/assets/phenom/product_shot_5_desktop.png'
import ProductShot5Mobile from '~/assets/phenom/product_shot_5_mobile.png'
import ProductShot6Desktop from '~/assets/phenom/product_shot_6_desktop.png'
import ProductShot6Mobile from '~/assets/phenom/product_shot_6_mobile.png'

// testimonial assets
import TestimonialAuthor from '~/assets/phenom/hanan-hermelin.jpg'

// services icons
import ServiceUIIcon from '~/assets/experiences/user-interface-design.svg?component'
import ServiceUXIcon from '~/assets/experiences/user-experience-design.svg?component'
import ServiceDesignIcon from '~/assets/experiences/design.svg?component'
import ServiceFlawlessIcon from '~/assets/icons/flawless.svg?component'
import ServiceSupportIcon from '~/assets/experiences/support.svg?component'
import ServiceUserTesting from '~/assets/experiences/user-testing.svg?component'
import ServiceDesignTeam from '~/assets/experiences/design-team.svg?component'
import ServiceMotionDesign from '~/assets/experiences/motion-design.svg?component'

// banner assets
import CTABannerMobileImage from '~/assets/case-study/cta_banner_mobile.png'
import CTABannerDesktopImage from '~/assets/case-study/cta_banner_desktop.png'

// color theme
const cssProps = {
  '--accent-color-dark': '#18ACB4',
  '--accent-color-light': '#B4D8DB',
  '--gradient-color': '#D2F6F9',
}

const hero = {
  image: {
    urlMobile: Dashboard,
    urlDesktop: DashboardDesktop,
    altText: 'Useful app dashboard, designed by Semiflat',
  },
  title: 'Supporting Phenom - an HR-Tech unicorn by building a dedicated design team',
  description:
    'The Phenom platform connects people, data, and interactions to deliver amazing experiences throughout the journey using artificial intelligence and automation.',
  buttons: [
    {
      label: 'See live version',
      href: 'https://www.phenom.com/',
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
      value: 'Ongoing - 2y',
      iconUrl: TimelineIcon,
    },
    {
      title: 'Location',
      value: 'Ambler, PA',
      iconUrl: LocationIcon,
    },
    {
      title: 'Funding',
      value: '$161M',
      iconUrl: FundingIcon,
    },
  ],
}

const howWeHelped = {
  title: 'How we’ve helped_',
  image: {
    urlMobile: HowWeHelpedImageMobile,
    urlDesktop: HowWeHelpedImage,
    altText: 'Phenom app dashboard detail, designed by Semiflat',
  },
  list: [
    {
      icon: ProcessIcon,
      title: 'User experience design',
      description: 'We’ve supported Phenom with UX design services across multiple projects.',
    },
    {
      icon: ResearchIcon,
      title: 'User research',
      description:
        'We’ve provided a dedicated user researcher that conducted and analyzed hundreds of user interviews.',
    },
    {
      icon: InterfaceIcon,
      title: 'User Interface Design',
      description:
        'Over the years, we’ve supported Phenom with top-notch UI designers for existing products as well as new ones.',
    },
    {
      icon: DesignIcon,
      title: 'Design System',
      description:
        'Having an expansive product suite, consistency is important to Phenom. That’s why we’ve supported them with a dedicated full-time design system expert.',
    },
    {
      icon: UXIcon,
      title: 'Design System',
      description:
        'We worked with multiple teams across Phenom. Each month team leaders were able to place orders for the number of hours and seniority level they were seeking for their project.',
    },
  ],
}

const caseDescription = {
  sections: [
    {
      title: 'Project background',
      lead: 'What is Phenom and what have they managed to do before approaching Semiflat?',
      body: '<p>Phenom is an HR-Tech unicorn dedicated to helping a billion people find the right job. They’re a global powerhouse with over 1,500 employees in the United States, Israel, the UK, Germany, and more.</p><p>Before working with us, they built a suite of intelligent HR tools to deliver engaging experiences to candidates, employees, recruiters, managers, and HR. These tools are on the cutting edge of the industry and help large companies recruit more effectively, retain employees longer and even plan their career paths using AI.</p>',
    },
    {
      title: 'The problem',
      lead: 'Why did Phenom approach us? What outcome were they looking for?',
      body: '<p>Initially, we were approached by the VP of Product Experience at Phenom to help improve the user experience of a product feature. Over time our collaboration grew into several large projects we’ve worked on simultaneously. Phenom had a large internal design team but needed to scale their efforts up quickly without recruiting in-house. They’ve worked with us to innovate faster, deliver more features and stay ahead of the competition.</p><p>On top of that, Phenom had ambitious plans to build a dedicated innovation team of top-tier talent who’d focus exclusively on developing new product features in the automation and AI spaces.</p>',
    },
  ],
}

const testimonial = {
  quote:
    '“What impressed me most about Semiflat was their ability to work seamlessly with our existing design team. They integrated members of their team with ours, and this collaboration proved to be highly effective. Their collaborative approach, responsiveness, and expertise make them a valuable asset to any project.”',
  author: {
    name: 'Hanan Hermelin',
    role: 'Executive Director of Product Experience Operations',
    imageUrl: TestimonialAuthor,
  },
}

const servicesSection = {
  title: 'Step by step on how we’ve worked with Phenom supporting their design needs_',
  services: [
    {
      icon: ServiceFlawlessIcon,
      title: 'Initial test assignment',
      description:
        'The first task we ever worked on with Phenom was improving the UX of a feature from one of their products.',
    },
    {
      icon: ServiceUXIcon,
      title: 'User experience design',
      description:
        'We have continued this project after gaining Phenom’s trust and supporting them with ongoing UX design services across multiple products.',
    },
    {
      icon: ServiceUIIcon,
      title: 'User interface design',
      description:
        'We’ve supported teams across Phenom by creating polished UI designs on an ongoing basis.',
    },
    {
      icon: ServiceUserTesting,
      title: 'User testing',
      description:
        'We’ve provided a dedicated user researcher who supported Phenom in learning their user’s needs over several months',
    },
    {
      icon: ServiceDesignIcon,
      title: 'Design system design',
      description:
        'A dedicated expert design system designer has spent several months updating and expanding the company’s Figma library.',
    },
    {
      icon: ServiceDesignTeam,
      title: 'Dedicated design teams',
      description:
        "No matter what Phenom's needs were, we always delivered - we’ve recruited specifically for their projects and even built dedicated teams for them.",
    },
    {
      icon: ServiceMotionDesign,
      title: 'Motion design',
      description:
        'We’ve facilitated a collaboration between Phenom and an animation studio to create a movement for one of their conceptual projects',
    },
    {
      icon: ServiceSupportIcon,
      title: 'Continuous design support',
      description:
        'We’ve maintained this collaboration model and, two years later, are still helping Phenom be more effective on the design front.',
    },
  ],
}

const caseOutcomes = {
  sections: [
    {
      title: 'Project Outcome',
      lead: 'What did Phenom gain from working with us? Where is the project now?',
      body: '<p>We have supported Phenom with a wide range of design services, from user experience design to user research, user interface design, design system design, and more. We have established an ‘hour bank’ - a solution where Phenom’s team leaders could request a fixed number of hours for their project. They could also choose the seniority that was most suited for the task. In many cases, team leaders have built close relationships with our designers and continued to work with them on their projects for months.</p><p>Besides supporting Phenom with ongoing services, we’ve recruited designers specifically for their projects. We have supplied dedicated designers in the team augmentation model, who were onboarded into Phenom teams and worked exclusively on that project in a given timeframe.</p><p>Over the course of several months, we’ve also recruited three senior designers (two UI and one UX) for the Innovation Hub - a dedicated team of talent assembled to help Phenom work on ideating new features, especially around AI and new technology that could give them a further advantage over competitors.</p>',
    },
    {
      title: 'Deliverables',
      lead: 'What are the tangible deliverables Phenom received from us during the collaboration?',
    },
  ],
  deliverables: {
    items: [
      {
        title: 'Dozens of low-fidelity Figma files',
        description:
          'Over the course of our collaboration, we’ve produced dozens of low-fidelity Figma files across teams and projects. Initially working in our Figma workspace, we’ve transitioned to Phenom’s Figma for the sake of keeping the work we do extra secure.',
      },
      {
        title: 'Interactive POV prototypes in Figma',
        description:
          'We’ve delivered multiple clickable prototypes for Phenom’s internal use - especially Proof of Value (POV) presentations,',
      },
      {
        title: 'A complex design system Figma file',
        description:
          'Our dedicated designer worked on Phenom’s design system file in their internal Figma workspace, rebuilding, updating, and expanding it over several months.',
      },
      {
        title: 'Interview transcriptions and insights in Dovetail',
        description:
          'We’ve conducted user interviews for one of Phenom’s projects, then transcribed and analyzed them in Dovetail.',
      },
      {
        title: 'Multiple Figma files with polished UI designs',
        description:
          'We have delivered dozens of high-fidelity design files for multiple teams and projects.',
      },
    ],
  },
  cta: {
    title: 'Does your company have ongoing design needs like Phenom?',
    description: 'Ask us about an ongoing collaboration with a dedicated design team.',
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
    title: 'Phenom helps a billion people find the right job_',
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

    <TheCaseStudyBlock decor="bottom-right">
      <TheCaseStudyServices v-bind="servicesSection" />
    </TheCaseStudyBlock>

    <TheCaseStudyBlock>
      <AppImagesGroup v-bind="productShotsGalleries[1]" />
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

    <TheCaseStudyBlock>
      <TheCaseStudyCTABanner v-bind="ctaBanner" />
    </TheCaseStudyBlock>
  </div>
</template>
