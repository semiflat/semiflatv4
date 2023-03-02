<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue'
import BackgroundMobileLeft from '~/assets/bg-left-mobile.svg?component'
import BackgroundDesktop from '~/assets/bg-hero-desktop.svg?component'
import ahana from '~/assets/tint-logos/logo-ahana.svg?component'
import appfleet from '~/assets/tint-logos/logo-appfleet.svg?component'
import clickmagick from '~/assets/tint-logos/logo-clickmagick.svg?component'
import cloudstore from '~/assets/tint-logos/logo-cloudstore.svg?component'
import defaultLogo from '~/assets/tint-logos/logo-default.svg?component'
import devzero from '~/assets/tint-logos/logo-devzero.svg?component'
import doss from '~/assets/tint-logos/logo-doss.svg?component'
import gcore from '~/assets/tint-logos/logo-gcore.svg?component'
import gyaan from '~/assets/tint-logos/logo-gyaan.svg?component'
import halycon from '~/assets/tint-logos/logo-halycon.svg?component'
import jetic from '~/assets/tint-logos/logo-jetic.svg?component'
import lhotse from '~/assets/tint-logos/logo-lhotse.svg?component'
import metlo from '~/assets/tint-logos/logo-metlo.svg?component'
import onward from '~/assets/tint-logos/logo-onward.svg?component'
import phenom from '~/assets/tint-logos/logo-phenom.svg?component'
import pocus from '~/assets/tint-logos/logo-pocus.svg?component'
import runchise from '~/assets/tint-logos/logo-runchise.svg?component'
import scholaris from '~/assets/tint-logos/logo-scholaris.svg?component'
import simplero from '~/assets/tint-logos/logo-simplero.svg?component'
import sisu from '~/assets/tint-logos/logo-sisu.svg?component'
import stepsize from '~/assets/tint-logos/logo-stepsize.svg?component'
import tagvenue from '~/assets/tint-logos/logo-tagvenue.svg?component'
import tau from '~/assets/tint-logos/logo-tau.svg?component'
import useful from '~/assets/tint-logos/logo-useful.svg?component'
import yuzedata from '~/assets/tint-logos/logo-yuzedata.svg?component'
import { useBreakpoints } from '~/composables/useBreakpoints'

const logos = [
  ahana,
  appfleet,
  clickmagick,
  cloudstore,
  defaultLogo,
  devzero,
  doss,
  gcore,
  gyaan,
  halycon,
  jetic,
  lhotse,
  metlo,
  onward,
  phenom,
  pocus,
  runchise,
  scholaris,
  simplero,
  sisu,
  stepsize,
  tagvenue,
  tau,
  useful,
  yuzedata,
]

const breakpoints = useBreakpoints()
const swiperBreakpoints = {
  [breakpoints.lg]: {
    slidesPerView: 'auto',
    watchSlidesVisibility: true,
  },
}

const swiperOptions = computed(() => ({
  slidesPerView: 'auto',
  navigation: false,
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: swiperBreakpoints,
}))
</script>

<template>
  <div class="relative page-content">
    <BackgroundMobileLeft class="absolute top-28 left-0 md:hidden" />
    <BackgroundDesktop class="hidden absolute -left-42 md:block -top-60" />
    <div class="mt-3.5rem md:mt-40 md:text-center">
      <h1 class="hero-title md:text-[2.5rem] md:leading-[120%] md:mt-6">
        Product design for SaaS startups_
      </h1>
      <p class="mt-6 text-blue-200">
        Semiflat is a full-service design agency specialized in solving complex problems through
        design. <br />
        We design tools that help millions of professionals be more effective at their job.
      </p>
      <div class="mt-2.5rem">
        <AppButton href="mailto:hello@semiflat.com">Get in touch</AppButton>
        <AppButton
          text
          href="https://calendly.com/d/g3b-8j5-vzs/semiflat-design-partner-introduction"
          target="_blank"
        >
          Schedule a call</AppButton
        >
      </div>
    </div>
    <div class="">
      <AppSlider class="mt-16 md:mt-40 hero-slider" style="" :swiper-options="swiperOptions">
        <SwiperSlide
          v-for="(logo, i) in logos"
          :key="i"
          class="w-[180px] md:w-[240px] shrink-0 mx-auto flex items-center justify-center"
        >
          <component :is="logo" class="h-[4.375rem]" />
        </SwiperSlide>
      </AppSlider>
    </div>
  </div>
</template>

<style>
.hero-title {
  @apply text-[1.75rem] font-semibold leading-[34px] gradient-text;
}

.hero-slider .swiper {
  mask-image: linear-gradient(
    270deg,
    rgba(242, 242, 242, 0) 0%,
    rgba(245, 245, 245, 1) 15%,
    rgba(255, 255, 255, 1) 50%,
    rgba(244, 244, 244, 1) 85%,
    rgba(242, 242, 242, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    270deg,
    rgba(242, 242, 242, 0) 0%,
    rgba(245, 245, 245, 1) 15%,
    rgba(255, 255, 255, 1) 50%,
    rgba(244, 244, 244, 1) 85%,
    rgba(242, 242, 242, 0) 100%
  );
}

.swiper > .swiper-wrapper {
  transition-timing-function: linear;
}
</style>
