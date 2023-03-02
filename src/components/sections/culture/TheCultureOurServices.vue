<script setup lang="ts">
import Individuality from '~/assets/icons/individuality.svg?component'
import Trust from '~/assets/icons/trust.svg?component'
import Responsibility from '~/assets/icons/responsibility.svg?component'
import Proactivity from '~/assets/icons/proactivity.svg?component'
import Care from '~/assets/icons/care.svg?component'
import Honesty from '~/assets/icons/honesty.svg?component'
import SelfDevelopment from '~/assets/icons/self-development.svg?component'
import Empathy from '~/assets/icons/empathy.svg?component'

const experiences = [
  {
    icon: Individuality,
    header: 'Individuality',
    text: 'We have different opinions and points of view, but all of them can flourish at Semiflat.',
  },
  {
    icon: Trust,
    header: 'Trust',
    text: 'We don’t believe in control and micro-managing. Great things are made when everyone can freely decide about their surroundings.',
  },
  {
    icon: Responsibility,
    header: 'Responsibility',
    text: 'We take responsibility for our actions. We’re proud of our successes and fix our mistakes.',
  },
  {
    icon: Proactivity,
    header: 'Proactivity',
    text: 'We take responsibility for our actions. We’re proud of our successes and fix our mistakes.',
  },
  {
    icon: Care,
    header: 'Care',
    text: 'Everyone at Semiflat plays in the same team. We support each other no matter the situation.',
  },
  {
    icon: Honesty,
    header: 'Honesty',
    text: 'We value honesty above eveything else. Every problem can be solved when voices are heard.',
  },
  {
    icon: SelfDevelopment,
    header: 'Self-development',
    text: 'We are constantly looking for ways to improve in all aspects - professional and private.',
  },
  {
    icon: Empathy,
    header: 'Empathy',
    text: 'All initiatives within Semiflat are driven by empathy. We never allow for anyone to be left out.',
  },
]
</script>

<template>
  <div class="page-content">
    <div class="mt-16 md:mt-40">
      <h2
        class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem] md:hidden"
      >
        We help startups by creating delightful experiences for their users_
      </h2>
      <h2
        class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem] hidden md:block"
      >
        In all internal and external interactions we always <br />
        rely on our value code_
      </h2>
      <div class="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-16 mt-12 md:mt-20">
        <div v-for="(el, i) in experiences" :key="i">
          <component :is="el.icon" class="mb-8" />
          <p class="text-blue-300 font-semibold mb-1">{{ el.header }}</p>
          <p class="text-blue-200">{{ el.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
