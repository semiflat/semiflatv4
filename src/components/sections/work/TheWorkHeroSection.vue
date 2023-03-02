<script setup lang="ts">
import BackgroundMobileLeft from '~/assets/bg-left-mobile.svg?component'
import BackgroundDesktop from '~/assets/bg-hero-desktop.svg?component'
import AllProjectsIcon from '~/assets/icons/all-projects.svg?component'
</script>

<template>
  <div class="relative page-content">
    <BackgroundMobileLeft class="absolute top-28 left-0 md:hidden" />
    <BackgroundDesktop class="hidden absolute -left-42 md:block -top-60 -z-1" />
    <div class="mt-3.5rem md:mt-40 md:text-center">
      <h1 class="hero-title md:text-[2.5rem] md:leading-[120%] md:mt-6">
        Designing for SaaS is in our DNA_
      </h1>
      <p class="mt-6 text-blue-200">
        Our main focus from the beginning was to bring world-class design to emerging superstars in
        the SaaS space. <br />
        From workflow builders to CRM systems, we’ve done it before.
      </p>
      <div class="mt-2.5rem">
        <AppButton href="mailto:hello@semiflat.com">Get in touch</AppButton>
        <AppButton
          text
          target="_blank"
          href="https://calendly.com/d/g3b-8j5-vzs/semiflat-design-partner-introduction"
          >Schedule a call</AppButton
        >
      </div>
    </div>
    <div>
      <div class="grid mt-14 md:mt-40 z-10 relative">
        <div
          class="text-center p-6 w-full transition-all max-w-[21.687rem] mx-auto duration-300 hover:bg-white rounded-4 border border-[#BCDCDC] bg-white shadow-primary"
        >
          <component :is="AllProjectsIcon" class="mx-auto mb-4" />
          <p class="font-semibold leading-[150%] cursor-pointer">All projects</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hero-title {
  @apply text-[1.75rem] font-semibold leading-[34px] gradient-text;
}
</style>
