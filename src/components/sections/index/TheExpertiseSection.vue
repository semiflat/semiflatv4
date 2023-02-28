<script setup lang="ts">
import { gsap } from 'gsap'
import ExpertiseHexagon from '~/assets/svg-animated/expertise-hexagon.svg?component'

const hexagonRef = ref()

const getLine = (id: string | number) => hexagonRef.value.$el.querySelector(`.glow-line-${id}`)

onMounted(() => {
  if (!hexagonRef.value) return

  const tl = gsap.timeline({
    ease: 'power2.out',
    repeat: -1,
  })

  tl.fromTo(getLine(1), { drawSVG: '0% 2%' }, { drawSVG: '-27% -26%', duration: 1.75 })
    .fromTo(getLine(2), { drawSVG: '23% 25%' }, { drawSVG: '-5% -4%', duration: 1.75 })
    .fromTo(getLine(3), { drawSVG: '23% 25%' }, { drawSVG: '53% 54%', duration: 1.75 })
    .fromTo(getLine(4), { drawSVG: '45% 47%' }, { drawSVG: '73% 74%', duration: 1.75 })
})
</script>

<template>
  <div class="page-content mt-16 md:mt-40 relative">
    <div
      class="bg-gradient bg-turquoise-100/80 rounded-full hidden md:block absolute -right-100 -top-18 w-[43.75rem] h-[43.75rem] blur-[240px]"
    />
    <div class="expertise text-white rounded-4 md:flex max-w-[914px] mx-auto relative">
      <div class="p-8 md:py-20 md:px-14 relative">
        <h2 class="font-semibold text-xl mb-4 md:text-[1.75rem]">Our expertise drives results</h2>
        <p class="text-blue-100 mb-8 text-sm md:text-base md:mb-12">
          World’s most innovative startups work with us to successfully enter the market or keep up
          with demands of their user base and stay ahead of competition.
        </p>
        <div class="md:flex gap-20">
          <div class="mb-4 md:mb-0">
            <p class="font-semibold text-xl mb-2 md:text-[1.75rem]">$300M+</p>
            <p class="text-sm">Raised by our clients</p>
          </div>
          <div class="mb-8 md:mb-0">
            <p class="font-semibold text-xl mb-2 md:text-[1.75rem]">100k MAU</p>
            <p class="text-sm">Combined client user base</p>
          </div>
        </div>
      </div>
      <ExpertiseHexagon ref="hexagonRef" class="max-w-[19.5rem] mx-auto relative md:mr-6 w-full" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.bg-gradient {
  will-change: transform;
  animation: gradient-scale 7s ease-in-out infinite alternate;
}

@keyframes gradient-scale {
  0% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}

.expertise {
  @apply relative overflow-hidden;
}

.expertise::before {
  content: '';

  background: radial-gradient(57.03% 76.98% at 100% 0%, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    #031c26;
  background-blend-mode: overlay, normal;
  animation: gradient-scale 12s ease-in-out infinite alternate;

  @apply absolute inset-0 rounded-4;
}
</style>
