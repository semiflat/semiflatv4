<script lang="ts" setup>
import WorkshopIll from '~/assets/illustrations/illustration-workshop.svg?url'
import ResearchIll from '~/assets/services/illustration-research.svg?url'
import InterfaceIll from '~/assets/services/illustration-interface.svg?url'
import ExperienceIll from '~/assets/services/illustration-experience.svg?url'
import DesignIll from '~/assets/services/illustration-design.svg?url'
import SupportIll from '~/assets/services/illustration-support.svg?url'
import FasterIcon from '~/assets/services/icons/faster.svg?component'
import FoundationIcon from '~/assets/services/icons/foundation.svg?component'
import LeadershipIcon from '~/assets/services/icons/leadership.svg?component'
import PartnershipIcon from '~/assets/services/icons/partnership.svg?component'
import NeedsIcon from '~/assets/services/icons/needs.svg?component'
import TimeIcon from '~/assets/services/icons/time.svg?component'
import AssumptionsIcon from '~/assets/services/icons/assumptions.svg?component'
import AttractingIcon from '~/assets/services/icons/attracting.svg?component'
import LoyaltyIcon from '~/assets/services/icons/loyalty.svg?component'
import RetentionIcon from '~/assets/services/icons/retention.svg?component'
import SupportIcon from '~/assets/services/icons/support.svg?component'
import BrandIcon from '~/assets/services/icons/brand.svg?component'
import BreakingIntoIcon from '~/assets/services/icons/breakingInto.svg?component'
import ConfidenceIcon from '~/assets/services/icons/confidence.svg?component'
import IntuitiveIcon from '~/assets/icons/intuitive.svg?component'
import ConsistencyIcon from '~/assets/services/icons/consistency.svg?component'
import StrongerBrandIcon from '~/assets/services/icons/strongerBrand.svg?component'
import GrowingIcon from '~/assets/services/icons/growing.svg?component'
import ScalingIcon from '~/assets/services/icons/scaling.svg?component'
import SimultaneouslyIcon from '~/assets/services/icons/simultaneously.svg?component'

import { ServiceTypes } from '~/types/service'

const servicesData = ref({
  [ServiceTypes.workshops]: {
    introduction: {
      img: WorkshopIll,
      header: 'What are Workshops and analysis?',
      text: 'It’s the preliminary phase of any design project at Semiflat. We use it to gain the full understanding of the product vision, industry, competition and business goals. That ensures that the entire design process is smooth and we can add maximum value to your organization.',
    },
    experiences: {
      header: 'How will your organization benefit from research & analysis_',
      experiencesArr: [
        {
          icon: FoundationIcon,
          header: 'Strong foundation for the project',
          text: 'Conducting a Workshops & analysis phase lets us build an understanding of your business, ICPs, current problems so that we can better serve you down the line.',
        },
        {
          icon: LeadershipIcon,
          header: 'Independence and design leadership',
          text: 'We want to lead the effort and guide you in our process. To make that possible we need to dig deep into your product or idea to make sure we understand all ins and outs.',
        },
        {
          icon: PartnershipIcon,
          header: 'Smooth partnership',
          text: 'This phase is also where we ask any questions/clear up any confusion surrounding your business which helps avoid miscommunication in the future.',
        },
        {
          icon: FasterIcon,
          header: 'Faster delivery',
          text: 'Building an understanding of your product helps reduce time needed for answering questions and in turn helps us move much faster.',
        },
      ],
    },
    prosAndCons: {
      prosHeader: 'Why we always conduct workshops and analysis? ',
      consHeader: 'Why it’s detrimental for the project to skip this step?',
      pros: [
        {
          header: 'Building solid understanding of the problem and target user',
          text: 'We work with companies across different niche industries. Many of them are highly technical and require special knowledge to comfortably operate in. In order to be able to propose the most optimal solutions later on, it’s crucial for us to get as good of an understanding of your goal, vision and business landscape as possible.',
        },
        {
          header: 'Analyzing current competitors',
          text: 'This gives us further background on the industry standards, as well as an idea of any low hanging fruit that we can implement in your project to give you advantage over competitors.',
        },
        {
          header: 'Defining the design challanges',
          text: 'Any project needs clear objective definition in order to succeed. Conducing the analysis phase allows us to identify the challenges and objective early on so that you can know what you can expect moving forward.',
        },
      ],
      cons: [
        {
          header: 'Lack of context in the later stages',
          text: 'Skipping the initial discovery phase is likely to catch up with us at laters stages of the project and ultimately slow down the process or require your detailed guidance. Not taking the time to learn the terminology, problems and general reality of your industry will prevent us from being proactive in suggesting optimal solutions as the project moves forward.',
        },
      ],
    },
    examples: {
      header: 'Examples of projects with an extensive workshops and analysis phase_',
    },
  },
  [ServiceTypes.research]: {
    introduction: {
      img: ResearchIll,
      header: 'Independence and design leadership',
      text: 'Find out what your users want. We’ll recruit and interview respondents matching your target persona.',
    },
    experiences: {
      header: 'How will your organization benefit from user research_',
      experiencesArr: [
        {
          icon: NeedsIcon,
          header: 'Knowing your user’s needs',
          text: 'Conducting user research will give you an opportunity to uncover the needs of your existing users or ICPs. ',
        },
        {
          icon: AssumptionsIcon,
          header: 'Validating your assumptions',
          text: 'We can recruit potential users to validate your assumptions regarding needs and pains.',
        },
        {
          icon: TimeIcon,
          header: 'Saving time',
          text: 'Gain direction confidence by interviewing your ICPs before implementing a feature or coming out with a new product.ś',
        },
      ],
    },
    prosAndCons: {
      prosHeader: 'When to choose User research?',
      consHeader: 'When it’s best to reconsider User research?',
      pros: [
        {
          header: 'If you want to validate your assumptions about users and their needs',
          text: 'Coming out with a new product is no easy task - if can think of a set of problems that you’d like to solve for your users but aren’t sure as to the scale or severity of them - there’s no better way to find out than through a standardized interview process.',
        },
        {
          header: 'If you want to identify a gap in the market',
          text: 'User research is the most reliable way to get trusted information about the market needs among your target user-base. ',
        },
      ],
      cons: [
        {
          header: 'If you have conducted any form of user interviews  yourself',
          text: 'If you’ve conducted an extensive form of research, have analyzed feedback of users from other products, or have any materials containing user’s responses about their pain points - we will happily analyze them and draw as much conclusion from there as possible.',
        },
        {
          header: 'If you fit the profile of target user',
          text: 'Founders often create products to solve their own problems. If that is you, we will work closely to extract as much information about the problems you’ve faced and your insight. Combining that with extensive market analysis will give us a strong foundation to rely on.',
        },
      ],
    },
    examples: {
      header: 'Examples of User research we’ve conducted_',
    },
  },
  [ServiceTypes.experience]: {
    introduction: {
      img: ExperienceIll,
      header: 'What is User experience design?',
      text: 'This is the most important part of the design process. User experience is crucial in determining whether your product will be intuitive to use. Good UX will likely put you ahead of the competition. Bad UX will put users off even the most powerful software. ',
    },
    experiences: {
      header: 'How will your organization benefit from user experience design_',
      experiencesArr: [
        {
          icon: AttractingIcon,
          header: 'Attracting new users',
          text: 'Word of good UX spreads like wildfire. Creating an application that is easy to use and beautiful is likely to gain you some product evangelists.',
        },
        {
          icon: RetentionIcon,
          header: 'Increasing user retention',
          text: 'Good UX will also help keep the users that you already have. If they can solve their problems fast and easy - why would they go somewhere else?',
        },
        {
          icon: IntuitiveIcon,
          header: 'Providing an intuitive experience',
          text: 'User experience is all about intuitiveness. Ideally your product won’t require a tutorial of any kind. User will just get it.',
        },
        {
          icon: LoyaltyIcon,
          header: 'Increasing user loyalty',
          text: 'Users are more likely to stay loyal to the product that consistently provides value and doesn’t add frustration. ',
        },
        {
          icon: SupportIcon,
          header: 'Reducing customer support',
          text: 'Intuitive UX will ensure your product is self-explanatory. This will reduce time spent on answering ‘How can I do X’ types of questions.',
        },
      ],
    },
    prosAndCons: {
      prosHeader: 'When to choose User experience design?',
      consHeader: 'When it’s best to roll out UX updates slowly?',
      pros: [
        {
          header: 'If you’re building the MVP',
          text: 'Building an intuitive user experience early on makes it easier to attract new customers. Creating a product that helps them easily solve their problems and feel natural to use is one of the most important pillars of any SaaS business.',
        },
        {
          header: 'If you haven’t had UX-design help when creating the MVP',
          text: 'If you’ve successfully launched a product but never had professional design help, chances are that you might be missing out on better user attraction or retention. In situations like this we recommend a UX-audit of the current solution to identify any bad UX patterns that might be hurting your product.',
        },
        {
          header: 'If you want to drive more users or conversions to your product',
          text: 'If you want to break new records with your already existing product, user experience design can help. Modern users are looking for the fastest, easiest way to solve their problems. Let’s give it to them.',
        },
      ],
      cons: [
        {
          header:
            'If you have reliable knowledge about users being happy with how the platform works',
          text: 'Disrupting a familiar workflow with a completely different approach might create confusion among loyal users who know your product well and use it often. If you have an established product that has worked a certain way for a long time it’s usually best to roll out UX enhancements in small increments to slowly introduce users to new patterns without compromising confidence. ',
        },
      ],
    },
    examples: {
      header: 'Examples of User experience we’ve designed_',
    },
  },
  [ServiceTypes.interface]: {
    introduction: {
      img: InterfaceIll,
      header: 'What is User interface design?',
      text: 'Visual identity or the look&feel of your product is the icing on the cake of any digital experience. Products with refined user interface get talked about, feel more trustworthy and fun to use daily, so you can retain more users on your platform.',
    },
    experiences: {
      header: 'How will your organization benefit from user interface design_',
      experiencesArr: [
        {
          icon: BreakingIntoIcon,
          header: 'Breaking into a saturated market with style and confidence',
          text: 'These days users are accustomed to beautifully designed UI and they expect it from all companies - big and small.',
        },
        {
          icon: BrandIcon,
          header: 'Building a strong brand',
          text: 'A polished user interface will make users more familiar with your logo, brand colors and messaging.',
        },
        {
          icon: LoyaltyIcon,
          header: 'Increasing user loyalty',
          text: 'An interface that’s pleasant on the eye will likely be one of the factors your loyal users keep using the product.',
        },
        {
          icon: ConfidenceIcon,
          header: 'Increasing user confidence',
          text: 'Users will be more drawn to a product with professionally designed interface as it indicates there’s a team of highly invested people behind it.',
        },
      ],
    },
    prosAndCons: {
      prosHeader: 'When to choose User interface design?',
      consHeader: 'When it’s best to reconsider User interface design?',
      pros: [
        {
          header: 'If you’re building a completely new product',
          text: 'The SaaS market is currently saturated with high-end, visually pleasing products. Users have learned to expect companies paying extra care to the details. Launching an app with world-class design on day one can put you in the same league as some of the big competitors.',
        },
        {
          header: 'If your product lacs consistency',
          text: 'Applications without a standardized UI (for example inconsistent navigation, or system feedback messaging) can disrupt your user’s flow and contribute to decreasing the enjoyment from using them.',
        },
        {
          header: 'If you want to increase the user’s trust and loyalty',
          text: 'Well designed and polished products come across as more trustworthy. A visually appealing UI might be the one argument that convinces your user to try out your app. You can also think of it as a relationship - if you gift the user with a joyful experience on your platform, they’ll be more likely to become evangelists for your product in their circles.',
        },
        {
          header: 'If you want to provide a premium experience',
          text: 'Creating a product that feels tailored to the user should be the goal of any startup. Building an experience that is refined or meticulously designed feels high-end and makes the user feel appreciated.',
        },
      ],
      cons: [
        {
          header: 'If you are aware of current UX-related issues in your product',
          text: 'It’s always best to tackle critical roadblock that might be driving down your user retention rate before addressing any visual or stylistic issues. ',
        },
      ],
    },
    examples: {
      header: 'Examples of our favorite User interface designs_',
    },
  },
  [ServiceTypes.design]: {
    introduction: {
      img: DesignIll,
      header: 'What is a Design system?',
      text: 'Design system is a combination of your brand’s visual language, design patterns and fully coded UI components. We design these components from scratch, then hand documented Figma files over to your development team.',
    },
    experiences: {
      header: 'How will your organization benefit from implementing a design system_',
      experiencesArr: [
        {
          icon: ConsistencyIcon,
          header: 'Consistency now and forever',
          text: 'A design system will ensure that your product’s design is consistent across its many features. It will also make it easy to scale in the future.',
        },
        {
          icon: StrongerBrandIcon,
          header: 'Stronger brand',
          text: 'Building and implementing a design system will ensure that all your products are consistent, which will strengthen familiarity and brand among users.',
        },
        {
          icon: FasterIcon,
          header: 'Faster development',
          text: 'Implementing the component library in your codebase will save you time in the future when you want to expand your product.',
        },
      ],
    },
    prosAndCons: {
      prosHeader: 'When to choose a custom design system?',
      consHeader: 'When it’s best to use an existing solution?',
      pros: [
        {
          header: 'If you want to scale quickly',
          text: 'Having a library of building blocks and patterns allows you to develop features without design intervention every single time.',
        },
        {
          header: 'If you already have a legacy one in place',
          text: 'We will continue building your design system library as we add new features to your already existing product.',
        },
        {
          header: 'If you’re building a complex product',
          text: 'If the vision for your MVP is complex (containing many non-standard components - for example graphs) it makes sense to future-proof it with a strong foundation to ensure consistency moving forward.',
        },
      ],
      cons: [
        {
          header: 'If you want to save up development time',
          text: 'There are tons of already-coded component libraries on the internet (most popular technologies are HTML, React and Vue). By designing within the paradigms of an existing library we’re still able to deliver a custom look&feel but the implementation cost reduces dramatically.',
        },
        {
          header: 'If you’re building a simple MVP',
          text: 'For startups at the beginning of their journey it might not make sense to build out a custom design system. Their product will likely evolve or even pivot, so the faster you can get to market the better. For cases like this we use our internal pre-built component library to add foundations for a more complex design system in the future.',
        },
      ],
    },
    examples: {
      header: 'Examples of Design systems we’ve created_',
    },
  },
  [ServiceTypes.support]: {
    introduction: {
      img: SupportIll,
      header: 'What is Continious support?',
      text: 'Our journey usually doesn’t end with handing off the MVP designs. We work in a flexible team augmentation model so you can continue working with designers you like and are familiar with your product.',
    },
    experiences: {
      header: 'How will your organization benefit from continuous support_',
      experiencesArr: [
        {
          icon: GrowingIcon,
          header: 'Growing your team without the hassles of recruitment',
          text: 'If your internal team is not keeping up with the demands for new features or products, we’re happy to step in and provide a designer or a team to support your needs.',
        },
        {
          icon: SimultaneouslyIcon,
          header: 'Delivering more projects simultaneously',
          text: 'Working with your dedicated project team on an ongoing basis will give you the ability to deliver more features to your users in a shorter timeframe. ',
        },
        {
          icon: ScalingIcon,
          header: 'Scaling the resources according to your needs',
          text: 'You’re able to scale the design effort up or down on a monthly basis, depending on your current needs.',
        },
      ],
    },
    prosAndCons: {
      prosHeader: 'Who is an ongoing collaboration model best for?',
      consHeader: 'When it’s better to work on project basis?',
      pros: [
        {
          header: 'For startups launching a highly complex product',
          text: 'If you’re getting ready to launch an elaborate, multi-faceted application that can’t be easily contained in a few-page scope document it probably make sense ',
        },
        {
          header: 'For companies with established, recurring design needs',
          text: 'If your organization has consistent design needs on a monthly basis, but not enough to justify hiring a full-time designer you should consider partnering with us to work with a dedicated part time specialist.',
        },
        {
          header: 'For companies struggling to hire a designer internally',
          text: 'If you need to move fast but find it challenging build a design team internally, get in touch to discuss an ongoing collaboration with a dedicated team, that combines the power of internal design with flexibility of an agency.',
        },
        {
          header: 'For large organizations wanting to scale their design team and increase output',
          text: 'If your organization has a design team but can’t keep up with the ever-growing needs of your users, consider us as a supporting partner that can take on some of the work your team is currently struggling with. ',
        },
      ],
      cons: [
        {
          header: 'If you want to test your business hypothesis with a simple MVP',
          text: 'To validate your business assumptions it might make sense to work in shorter sprints focused on achieving rapid results that can be brought to market and tested quickly. ',
        },
        {
          header: 'If you don’t yet have established design needs and long term goals',
          text: 'If you’re at a stage where you have clearly defined short-term goals but aren’t sure as to the future of the product, we recommend taking a project-based approach.',
        },
      ],
    },
    examples: {
      header: 'Examples of projects we’ve supported with an ongoing collaboration_',
    },
  },
})

const selectedServiceModel = ref(ServiceTypes.workshops)
const selectedService = computed(() => servicesData.value[selectedServiceModel.value])
</script>

<template>
  <div class="overflow-hidden">
    <TheServicesHeroSection v-model="selectedServiceModel" class="section" />
    <TheServicesIntroductionSection :introduction="selectedService.introduction" class="section" />
    <TheServicesOurServices :experiences="selectedService.experiences" class="section" />
    <TheServicesProsAndConsSection :pros-and-cons="selectedService.prosAndCons" class="section" />
    <!--        <TheServicesQuestionsSection v-model="selectedServiceModel" :examples="selectedService.examples" /> -->
    <!--        <TheServicesFaqSection /> -->
    <TheCTABottomSection class="section" />
  </div>
</template>
