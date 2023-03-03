<script setup lang="ts">
import SmallLogo from '~/assets/small-logo.svg?component'
import LinkedinLogo from '~/assets/socials/Linkedin.svg?component'
import InstagramLogo from '~/assets/socials/instagram.svg?component'
import DribbleLogo from '~/assets/socials/dribbble.svg?component'
import CLogo from '~/assets/socials/C.svg?component'
import { ServiceTypes } from '~/types/service'

const context = usePageContext()

const socials = [
  {
    logo: LinkedinLogo,
    url: 'https://www.linkedin.com/company/semiflat/',
  },
  {
    logo: InstagramLogo,
    url: 'https://www.instagram.com/semiflat_/',
  },
  {
    logo: DribbleLogo,
    url: 'https://dribbble.com/semiflat',
  },
  {
    logo: CLogo,
    url: 'https://clutch.co/profile/semiflat',
  },
]

const useCase = [
  {
    label: 'SaaS solutions',
    url: '/work',
  },
  {
    label: 'Workflow builder',
    url: '/work',
  },
  {
    label: 'Data analytics',
    url: '/work',
  },
  {
    label: 'CRM applications',
    url: '/work',
  },
]

const legal = [
  {
    label: 'Privacy policy',
    url: '#',
  },
  {
    label: 'Terms & conditions',
    url: '#',
  },
]

const services = [
  {
    label: 'Workshops & analysis',
    url: `/services/${ServiceTypes.workshops}`,
  },
  {
    label: 'User research',
    url: `/services/${ServiceTypes.research}`,
  },
  {
    label: 'User experience design',
    url: `/services/${ServiceTypes.experience}`,
  },
  {
    label: 'User interface design',
    url: `/services/${ServiceTypes.interface}`,
  },
  {
    label: 'Design system',
    url: `/services/${ServiceTypes.design}`,
  },
  {
    label: 'Continous support',
    url: `/services/${ServiceTypes.support}`,
  },
]
</script>

<template>
  <div class="page-content pt-28 pb-20 md:pb-[12.5rem] md:mt-12 relative overflow-y-clip">
    <div
      class="bg-gradient bg-gradient-left bg-turquoise-100 rounded-full absolute -left-40 w-[43.75rem] h-[43.75rem] blur-[240px] top-6 md:-left-100 md:top-70"
      :class="[context.pageProps?.pageShell?.hide]"
    />
    <div
      class="bg-gradient bg-gradient-right bg-turquoise-200 rounded-full absolute w-[18.75rem] h-[18.75rem] bottom-46 -right-16 md:-bottom-20 md:left-70 blur-[200px]"
      :class="[context.pageProps?.pageShell?.hide]"
    />
    <div class="relative z-10 md:flex md:items-start md:justify-between">
      <div>
        <SmallLogo />
        <p class="mt-4 text-blue-300">Copyright © 2023. All rights reserved</p>
        <div class="flex gap-8 mt-10">
          <div
            v-for="(social, i) in socials.filter((x) => x.url)"
            :key="i"
            class="opacity-70 transition-all duration-400 hover:opacity-100"
          >
            <a :href="social.url" target="_blank">
              <component :is="social.logo" />
            </a>
          </div>
        </div>
      </div>
      <div>
        <div class="grid gap-4 mt-12 md:mt-0">
          <h3 class="text-blue-300 font-semibold">Use cases</h3>
          <ul class="grid gap-2">
            <li
              v-for="link in useCase"
              :key="link.label"
              class="text-blue-200 cursor-pointer inline-block"
            >
              <a :href="link.url">{{ link.label }}</a>
            </li>
          </ul>
        </div>
        <div class="grid gap-4 mt-12">
          <h3 class="text-blue-300 font-semibold">Legal</h3>
          <ul class="grid gap-2">
            <li
              v-for="link in legal"
              :key="link.label"
              class="text-blue-200 cursor-pointer inline-block"
            >
              {{ link.label }}
            </li>
          </ul>
        </div>
      </div>
      <div class="grid gap-4 mt-12 md:mt-0">
        <h3 class="text-blue-300 font-semibold">Services</h3>
        <ul class="grid gap-2">
          <li
            v-for="link in services"
            :key="link.label"
            class="text-blue-200 cursor-pointer inline-block"
          >
            <a :href="link.url">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.bg-gradient {
  animation: gradient-scale 4s ease-in-out infinite alternate;
  will-change: transform;
}

.bg-gradient-right {
  animation: gradient-scale 6s ease-in-out infinite alternate;
  will-change: transform;
}

@keyframes gradient-scale {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(0.9);
  }
}
</style>
