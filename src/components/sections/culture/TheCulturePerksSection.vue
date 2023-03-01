<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'
import RocketIcon from '~/assets/icons/rocket.svg?component'
import TeamsIcon from '~/assets/icons/teams.svg?component'
import RobeIcon from '~/assets/icons/robe.svg?component'
import WorkflowIcon from '~/assets/icons/workflow-builder.svg?component'
import ExperienceIllustration from '~/assets/illustrations/experience-illustration.svg?component'
import RemoteIllustration from '~/assets/illustrations/remote-illustration.svg?component'
import breakpointsConst from '~/constants/breakpoints'
import StrokeLeft from '~/assets/index-strokes/stroke-left.svg?component'
import StrokeTop from '~/assets/index-strokes/stroke-top.svg?component'

const breakpoints = useBreakpoints(breakpointsConst)
const md = ref(breakpoints.smaller('md'))

const perks = [
  {
    icon: RocketIcon,
    title: 'Get experience working for top-tier startups',
    text: 'Because we’re selective about the companies we serve, we have multiple opportunities to work with startups on the cusp of changing the world.',
    illustration: ExperienceIllustration,
  },
  {
    icon: WorkflowIcon,
    title: 'Change the way people use the internet',
    text: 'We partner with startups building innovative tools. Whatever you end up working on will impact daily lives of thousands.',
  },
  {
    icon: TeamsIcon,
    title: 'Work on your own terms',
    text: 'Startup culture is baked into our DNA. At Semiflat every team member’s voice is heard. No matter if you’ve worked here for years or just joined.',
  },
  {
    icon: RobeIcon,
    title: 'Remote always and forever',
    text: 'We hire the best talent, no matter where it is. At Semiflat you can work from wherever you want. Team members have even relocated to different countries. ',
    illustration: RemoteIllustration,
  },
]
</script>

<template>
  <div class="page-content mt-16 md:mt-40">
    <h2
      class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]"
    >
      We design tools that help millions of professionals <br class="hidden md:block" />
      be more effective at their job_
    </h2>
    <div v-if="md" class="grid gap-6 md:grid-cols-3 md:hidden">
      <ThePerkComponent v-for="(perk, i) in perks" :key="i" :perk="perk" />
      <div class="px-8 py-10 bg-dark-blue rounded-4 relative md:static">
        <p class="text-white text-xl mb-8 font-semibold">
          Want to see how we apply these in practice?
        </p>
        <AppButton secondary href="/work">See our work</AppButton>
        <AppCirclesHorizontal id="circles-sm" class="absolute right-0 bottom-0 h-51" />
      </div>
    </div>
  </div>
  <div
    v-if="!md"
    class="relative mask-testimonial pt-5rem pb-5rem max-w-86rem mx-auto hidden md:block px-6 lg:px-0 md:-mt-[5rem] md:-mb-[5rem]"
  >
    <div class="hidden md:flex gap-8 max-w-69rem mx-auto">
      <div class="flex flex-col gap-8 max-w-[346px] justify-center relative">
        <component :is="StrokeTop" class="absolute w-full -top-23" />
        <component :is="StrokeLeft" class="absolute w-full -left-[calc(100%+2rem)]" />
        <component :is="StrokeTop" class="absolute w-full -bottom-23 -scale-y-100" />
        <ThePerkComponent :perk="perks[0]" />
      </div>
      <div class="flex flex-col gap-8 max-w-[346px] relative">
        <component :is="StrokeTop" class="absolute w-full -top-62" />
        <ThePerkComponent :perk="perks[1]" />
        <div class="px-8 py-10 bg-dark-blue rounded-4 relative">
          <AppCirclesHorizontal id="circles-md" class="absolute right-0 bottom-0 h-51" />
          <p class="text-white text-xl mb-8 font-semibold">
            Sounds fun? Why don’t you try for yourself
          </p>
          <AppButton secondary>See open positions</AppButton>
        </div>
        <ThePerkComponent :perk="perks[2]" />
        <component :is="StrokeTop" class="absolute w-full -bottom-62 -scale-y-100" />
      </div>
      <div class="flex flex-col gap-8 max-w-[346px] justify-center relative">
        <ThePerkComponent :perk="perks[3]" />
        <component :is="StrokeTop" class="absolute w-full -top-23" />
        <component :is="StrokeLeft" class="absolute w-full -right-[calc(100%+2rem)] -scale-x-100" />
        <component :is="StrokeTop" class="absolute w-full -bottom-23 -scale-y-100" />
      </div>
    </div>
  </div>
</template>

<style>
.bg-dark-blue {
  background: radial-gradient(57.03% 76.98% at 100% 0%, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    #031c26;
  background-blend-mode: overlay, normal;
}

.mask-testimonial {
  -webkit-mask-image: radial-gradient(
    50% 46% at 50% 50%,
    #d9d9d9 84.46%,
    rgba(217, 217, 217, 0) 122%
  );
}
</style>
