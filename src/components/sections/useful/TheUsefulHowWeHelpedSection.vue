<script setup lang="ts">
import QueryHelperIllDesktop from '~/assets/useful/query-helper-desktop.png'
import QueryHelperIllMobile from '~/assets/useful/query-helper-desktop.png'
import DiscoveryAndWorkshops from '~/assets/experiences/discovery-and-workshops.svg?component'
import Design from '~/assets/experiences/design.svg?component'
import UserInterfaceDesign from '~/assets/experiences/user-interface-design.svg?component'
import UserExperienceDesign from '~/assets/experiences/user-experience-design.svg?component'

const helped = [
  {
    icon: DiscoveryAndWorkshops,
    header: 'Discovery & workshops',
    text: 'We’ve conducted an extensive Discovery phase to define all user stories and a complete navigation structure for the product.',
  },
  {
    icon: UserExperienceDesign,
    header: 'User experience design',
    text: 'We’ve translated the findings of the Discovery session into a set of low-fidelity wireframes.',
  },
  {
    icon: UserInterfaceDesign,
    header: 'User interface design',
    text: 'We’ve proposed multiple style variations and translated all lo-fi mockups into the one Client loved most.',
  },
  {
    icon: Design,
    header: 'Design system',
    text: 'We’ve built a comprehensive component library for all reusable elements within the design.',
  },
]
</script>

<template>
  <div class="page-content mt-16 md:mt-40">
    <div class="bg-violet-light-gradient rounded-4 max-w-[57.125rem] mx-auto">
      <div class="text-white md:flex items-center gap-8 lg:gap-0">
        <div class="pt-8 px-8 md:pr-0 md:pb-8 lg:py-20 pl-14 lg:max-w-[26rem]">
          <h2 class="text-white text-lg font-semibold lg:text-[1.75rem]">How we’ve helped_</h2>
          <div class="flex flex-col gap-6 lg:gap-8 mt-12">
            <div v-for="el in helped" :key="el.header" class="">
              <div class="flex gap-4 mb-2">
                <component :is="el.icon" class="h-7.5 w-7.5 p-[0.187rem] text-white" />
                <h3 class="font-semibold">{{ el.header }}</h3>
              </div>
              <p class="opacity-80">{{ el.text }}</p>
            </div>
          </div>
        </div>
        <div>
          <picture>
            <source media="(min-width: 1366px)" :srcset="QueryHelperIllDesktop" />
            <img :src="QueryHelperIllMobile" class="mx-auto md:max-w-[600px] lg:w-500px" />
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-violet-light-gradient {
  background: radial-gradient(
        57.03% 76.98% at 100% 0%,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), #6f2de7;
  background-blend-mode: overlay, normal, normal;

  box-shadow: 0px 4px 12px -2px rgba(17, 24, 28, 0.12), 0px 1px 2px rgba(17, 24, 28, 0.16);
}
</style>
