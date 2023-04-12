<script setup lang="ts">
import WorkshopsIcon from '~/assets/experiences/workshops.svg?component'
import ResearchIcon from '~/assets/experiences/research.svg?component'
import UXIcon from '~/assets/experiences/UX.svg?component'
import InterfaceIcon from '~/assets/experiences/interface.svg?component'
import DesignIcon from '~/assets/experiences/design.svg?component'
import SupportIcon from '~/assets/experiences/support.svg?component'
import WorkshopsGradientIcon from '~/assets/experiences/workshops-gradient.svg?component'
import ResearchGradientIcon from '~/assets/experiences/research-gradient.svg?component'
import UXGradientIcon from '~/assets/experiences/UX-gradient.svg?component'
import InterfaceGradientIcon from '~/assets/experiences/interface-gradient.svg?component'
import DesignGradientIcon from '~/assets/experiences/design-gradient.svg?component'
import SupportGradientIcon from '~/assets/experiences/support-gradient.svg?component'
import type { ServiceTypes } from '~/types/service'

defineProps<{
  modelValue?: ServiceTypes
}>()
const emit = defineEmits(['update:modelValue'])
const discovery = [
  {
    icon: WorkshopsIcon,
    iconActive: WorkshopsGradientIcon,
    label: 'Workshops & analysis',
    value: 'workshops',
  },
  {
    icon: ResearchIcon,
    iconActive: ResearchGradientIcon,
    label: 'User research',
    value: 'research',
  },
  {
    icon: UXIcon,
    iconActive: UXGradientIcon,
    label: 'User experience design',
    value: 'experience',
  },
  {
    icon: InterfaceIcon,
    iconActive: InterfaceGradientIcon,
    label: 'User interface design',
    value: 'interface',
  },
  {
    icon: DesignIcon,
    iconActive: DesignGradientIcon,
    label: 'Design system',
    value: 'design',
  },
  {
    icon: SupportIcon,
    iconActive: SupportGradientIcon,
    label: 'Continuous support',
    value: 'support',
  },
]

const hero = {
  title: 'We are a full-service product design agency_',
  description:
    'Our approach to design is technical - not purely aesthetic. Every design decision is process and data-driven to deliver an intuitive and delightful experience for your users.',
  buttons: [
    {
      label: 'Get in touch',
      href: 'mailto:hello@semiflat.com',
    },
    {
      label: 'Schedule a call',
      href: 'https://calendly.com/d/g3b-8j5-vzs/semiflat-design-partner-introduction',
      isTargetBlank: true,
      isText: true,
    },
  ],
}
</script>

<template>
  <AppHero :title="hero.title" :description="hero.description" :buttons="hero.buttons">
    <div class="page-content">
      <ul class="services-list">
        <li class="services-list__item" v-for="(el, i) in discovery" :key="i">
          <button
            @click="emit('update:modelValue', el.value)"
            :aria-label="`Select category ${el.label}`"
          >
            <div
              class="text-center group py-6 px-2 w-full transition-all cursor-pointer duration-300 rounded-4 relative"
              :class="{
                'before:bg-white before:content-none before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:rounded-4 before:border-1 before:border-[#BCDCDC] shadow-primary':
                  el.value === modelValue,
              }"
            >
              <component
                :is="el.iconActive"
                v-if="el.value === modelValue"
                class="mx-auto mb-4 text-turquoise-400 relative z-1"
              />
              <component
                :is="el.icon"
                v-else
                class="mx-auto mb-4 text-turquoise-400 relative z-1"
              />
              <p
                class="font-semibold leading-[150%] transition-all duration-300 gradient-text relative z-1"
              >
                {{ el.label }}
              </p>
            </div>
          </button>
        </li>
      </ul>
    </div>
  </AppHero>
</template>

<style lang="scss" scoped>
.services-list {
  --carousel-padding: 1.5rem;

  position: relative;
  z-index: 1;
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 var(--carousel-padding);
  padding-inline-start: var(--carousel-padding);
  padding-inline-end: var(--carousel-padding);
  margin: 1.5rem -1.5rem 0;
  scrollbar-width: none;

  @media (min-width: 768px) {
    display: grid;
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    margin: 160px 0 0;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &__item {
    scroll-snap-align: start;
    flex: 0 0 220px;
    max-width: 220px;

    > *,
    > * > * {
      display: block;
      width: 100%;
      height: 100%;
    }

    @media (min-width: 768px) {
      width: 100%;
      max-width: 100%;
    }
  }
}
</style>
