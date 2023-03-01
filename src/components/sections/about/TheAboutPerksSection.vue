<script setup lang="ts">
import ExpertiseIcon from '~/assets/icons/expertise.svg?component'
import TalentIcon from '~/assets/icons/talent.svg?component'
import LeadershipIcon from '~/assets/icons/leadership.svg?component'
import FlawlessIcon from '~/assets/icons/flawless.svg?component'
import ExpertiseIllustration from '~/assets/illustrations/expertise-illustration.svg?component'
import FlawlessIllustration from '~/assets/illustrations/flawless-illustration.svg?component'
import StrokeLeft from '~/assets/index-strokes/stroke-left.svg?component'
import StrokeTop from '~/assets/index-strokes/stroke-top.svg?component'

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
    <div class="grid gap-6 md:grid-cols-3 md:hidden">
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
    class="relative mask-testimonial pt-5rem pb-5rem max-w-86rem mx-auto hidden md:block px-6 lg:px-0 md:-mt-[5rem] md:-mb-[5rem]"
  >
    <div class="hidden md:flex gap-8 max-w-69rem mx-auto">
      <div class="flex flex-col gap-8 max-w-[346px] justify-center relative">
        <component :is="StrokeTop" class="absolute w-full -top-33" />
        <component :is="StrokeLeft" class="absolute w-full -left-[calc(100%+2rem)]" />
        <component :is="StrokeTop" class="absolute w-full -bottom-33 -scale-y-100" />
        <ThePerkComponent :perk="perks[0]" />
      </div>
      <div class="flex flex-col gap-8 max-w-[346px] relative">
        <component :is="StrokeTop" class="absolute w-full -top-62" />
        <ThePerkComponent :perk="perks[1]" />
        <div class="px-8 py-10 bg-dark-blue rounded-4 relative">
          <p class="text-white text-xl mb-8 font-semibold">
            Want to see how we apply these in practice?
          </p>
          <AppButton secondary href="/work">See our work</AppButton>
          <AppCirclesHorizontal id="circles-md" class="absolute right-0 bottom-0 h-51" />
        </div>
        <ThePerkComponent :perk="perks[2]" />
        <component :is="StrokeTop" class="absolute w-full -bottom-62 -scale-y-100" />
      </div>
      <div class="flex flex-col gap-8 max-w-[346px] justify-center relative">
        <component :is="StrokeTop" class="absolute w-full -top-33" />
        <component :is="StrokeLeft" class="absolute w-full -right-[calc(100%+2rem)] -scale-x-100" />
        <ThePerkComponent :perk="perks[3]" />
        <component :is="StrokeTop" class="absolute w-full -bottom-33 -scale-y-100" />
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
