<script setup lang="ts">
import BackgroundMobileLeft from '~/assets/bg-left-mobile.svg?component'
import BackgroundDesktop from '~/assets/bg-hero-desktop.svg?component'
</script>

<template>
  <div class="relative page-content">
    <BackgroundMobileLeft class="absolute top-28 left-0 md:hidden" />
    <BackgroundDesktop class="hidden absolute -left-42 md:block -top-60" />
    <div class="mt-3.5rem md:mt-40 md:text-center">
      <h1 class="hero-title md:text-[2.5rem] md:leading-[120%] md:mt-6">
        Meet the team behind your next project_
      </h1>
      <p class="mt-6 text-blue-200">
        We are a remote team of 17 product designers, laser focused on delivering top tier SaaS
        product design to <br />
        world’s most innovative startups.
      </p>
      <div class="mt-2.5rem">
        <AppButton href="mailto:hello@semiflat.com">Get in touch</AppButton>
        <AppButton
          text
          href="https://calendly.com/d/g3b-8j5-vzs/semiflat-design-partner-introduction"
          >Schedule a call</AppButton
        >
      </div>
    </div>
  </div>
</template>

<style>
.hero-title {
  @apply text-[1.75rem] font-semibold leading-[34px] gradient-text;
}
</style>
