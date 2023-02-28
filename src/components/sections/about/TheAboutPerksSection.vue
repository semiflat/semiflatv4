<script setup lang="ts">
import { useBreakpoints } from '@vueuse/core'
import ExpertiseIcon from '~/assets/icons/expertise.svg?component'
import TalentIcon from '~/assets/icons/talent.svg?component'
import LeadershipIcon from '~/assets/icons/leadership.svg?component'
import FlawlessIcon from '~/assets/icons/flawless.svg?component'
import CirclesBackground from '~/assets/circles-bg1.svg?component'
import CirclesBackground2 from '~/assets/circles-bg2.svg?component'
import ExpertiseIllustration from '~/assets/illustrations/expertise-illustration.svg?component'
import FlawlessIllustration from '~/assets/illustrations/flawless-illustration.svg?component'
import breakpointsConst from '~/constants/breakpoints'

const breakpoints = useBreakpoints(breakpointsConst)
const md = ref(breakpoints.smaller('md'))

const perks = [
  {
    icon: ExpertiseIcon,
    title: 'Expertise in the SaaS niche',
    text: 'From the beginning we were laser focused on serving customers exclusively in the SaaS space.',
    illustration: ExpertiseIllustration,
  },
  {
    icon: TalentIcon,
    title: 'Exceptional talent',
    text: 'We work on complex products, that’s why every project gets a dedicated senior project leader.',
  },
  {
    icon: LeadershipIcon,
    title: 'True design leadership',
    text: 'We are a true design partner, guiding you through the process.',
  },
  {
    icon: FlawlessIcon,
    title: 'Flawless communication',
    text: 'We believe communication is the most important part of any project. You will be plugged into our Slack channel from day one.',
    illustration: FlawlessIllustration,
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
            Want to see how we apply these in practice?
          </p>
          <AppButton secondary href="/work">See our work</AppButton>
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
