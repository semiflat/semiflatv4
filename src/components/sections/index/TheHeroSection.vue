<script setup lang="ts">
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

const hero = {
  title: 'Product design for SaaS startups_',
  description:
    'Semiflat is a full-service design agency specialized in solving complex problems through design. We design tools that help millions of professionals be more effective at their job.',
  buttons: [
    {
      label: 'Schedule a call',
      href: 'https://calendly.com/semiflat_demo/30min',
      isTargetBlank: true,
    },
  ],
}
</script>

<template>
  <AppHero :title="hero.title" :description="hero.description" :buttons="hero.buttons">
    <AppLogosMarquee class="hero-slider" :items="logos" />
  </AppHero>
</template>

<style lang="scss" scoped>
.hero-slider {
  margin-top: 4rem;

  @media (min-width: 768px) {
    margin-top: 10rem;
  }
}
</style>
