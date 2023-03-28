<script setup lang="ts">
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
</script>

<template>
  <div class="hero relative page-content">
    <BackgroundMobileLeft class="absolute top-28 left-0 md:hidden" />
    <BackgroundDesktop class="hidden absolute -left-42 md:block -top-60 -z-1" />
    <div class="mt-3.5rem md:mt-40 md:text-center">
      <h1 class="hero__title">Product design for SaaS startups_</h1>
      <p class="hero__lead mt-6 text-blue-200">
        Semiflat is a full-service design agency specialized in solving complex problems through
        design. We design tools that help millions of professionals be more effective at their job.
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
    <div class="hero-slider">
      <div v-for="i in 2" :key="i" class="hero-slider__inner">
        <component v-for="logo in logos" :is="logo" class="hero-slider__logo" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@keyframes marquee {
  to {
    transform: translateX(-100%);
  }
}

.hero {
  &__lead {
    font-size: 1rem;
    line-height: 1.5;
    margin-left: auto;
    margin-right: auto;
    max-width: 80ch;
  }

  &__title {
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1.2;
    background: linear-gradient(225deg, #407a7a 0%, #002832 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }
}

.hero-slider {
  display: flex;
  overflow: hidden;
  margin-top: 4rem;
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

  @media (min-width: 768px) {
    margin-top: 10rem;
  }

  &__inner {
    display: flex;
    flex: 0 0 auto;
    animation: marquee 90s linear infinite;

    @media (min-width: 768px) {
      animation-duration: 130s;
    }
  }

  &__logo {
    flex-shrink: 0;
    width: 180px;
    object-fit: contain;

    @media (min-width: 768px) {
      width: 240px;
    }
  }
}
</style>
