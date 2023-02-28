<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'
import RocketIcon from '~/assets/icons/rocket.svg?component'
import TeamsIcon from '~/assets/icons/teams.svg?component'
import RobeIcon from '~/assets/icons/robe.svg?component'
import WorkflowIcon from '~/assets/icons/workflow-builder.svg?component'
import CirclesBackground from '~/assets/circles-bg1.svg?component'
import CirclesBackground2 from '~/assets/circles-bg2.svg?component'
import ExperienceIllustration from '~/assets/illustrations/experience-illustration.svg?component'
import RemoteIllustration from '~/assets/illustrations/remote-illustration.svg?component'
import breakpointsConst from '~/constants/breakpoints'

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
        <CirclesBackground class="absolute bottom-0 right-0" />
      </div>
    </div>
    <div v-else class="hidden md:flex gap-8">
      <div class="flex flex-col gap-8 max-w-[346px] justify-center">
        <ThePerkComponent :perk="perks[0]" />
      </div>
      <div class="flex flex-col gap-8 max-w-[346px]">
        <ThePerkComponent :perk="perks[1]" />
        <div class="px-8 py-10 bg-dark-blue rounded-4 relative">
          <p class="text-white text-xl mb-8 font-semibold">
            Sounds fun? Why don’t you try for yourself
          </p>
          <AppButton secondary>See open positions</AppButton>
          <CirclesBackground2 class="absolute bottom-0 right-0" />
        </div>
        <ThePerkComponent :perk="perks[2]" />
      </div>
      <div class="flex flex-col gap-8 max-w-[346px] justify-center">
        <ThePerkComponent :perk="perks[3]" />
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
</style>
