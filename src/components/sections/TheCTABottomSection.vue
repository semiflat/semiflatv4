<script setup lang="ts">
import { Power2, gsap } from 'gsap'
import CTACircles from '~/assets/svg-animated/cta-circles.svg?component'
import CTAHexagons from '~/assets/svg-animated/cta-hexagons.svg?component'

const animationDuration = 2
const animationEasing = Power2.easeOut

const circlesRef = ref()
const animateCircles = () => {
  if (!circlesRef.value) return

  const tl = gsap.timeline({
    ease: animationEasing,
    repeat: -1,
    yoyo: true,
  })

  const circles = circlesRef.value.$el.querySelectorAll('circle')

  tl.to(circles, {
    stroke: '#1FDFFF',
    duration: animationDuration,
  })
}

const hexagonsRef = ref()
const animateHexagons = () => {
  if (!hexagonsRef.value) return

  const tl = gsap.timeline({
    ease: animationEasing,
    repeat: -1,
    yoyo: true,
  })

  const hexagons = hexagonsRef.value.$el.querySelectorAll('path')
  tl.to(hexagons, {
    stroke: '#1FDFFF',
    duration: animationDuration,
  })
}

const animatedGradientRef = ref()
const animateGradients = () => {
  if (!animatedGradientRef.value) return

  const tl = gsap.timeline({
    ease: animationEasing,
    repeat: -1,
    yoyo: true,
  })

  tl.to(animatedGradientRef.value, {
    autoAlpha: 1,
    duration: animationDuration,
  })
}

onMounted(() => {
  animateCircles()
  animateHexagons()
  animateGradients()
})
</script>

<template>
  <div class="page-content mt-16 md:mt-40">
    <div class="grid gap-6 md:grid-cols-2">
      <div class="bg-gradient text-white rounded-4 md:flex mx-auto relative w-full">
        <div class="absolute right-0 h-[12.75rem]">
          <CTACircles ref="circlesRef" />
          <div ref="animatedGradientRef" class="animated-gradient absolute inset-0" />
        </div>
        <div class="p-8 md:py-10 px-6 relative">
          <h2 class="font-semibold text-xl mb-8">
            Interested in working with <br class="hidden md:block" />
            us on your SaaS project?
          </h2>
          <AppButton class="!bg-white !text-blue-300" href="mailto:hello@semiflat.com"
            >Get in touch</AppButton
          >
        </div>
      </div>
      <div class="bg-gradient text-white rounded-4 md:flex w-full mx-auto relative">
        <div class="absolute right-0 h-[12.75rem]">
          <CTAHexagons ref="hexagonsRef" />
          <div ref="animatedGradientRef" class="animated-gradient absolute inset-0" />
        </div>
        <div class="p-8 md:py-10 px-6 relative">
          <h2 class="font-semibold text-xl mb-8">
            Want to learn more about <br class="hidden md:block" />
            our services?
          </h2>
          <AppButton class="!bg-white !text-blue-300" href="/services">Learn more</AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-gradient {
  background: radial-gradient(57.03% 76.98% at 100% 0%, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    #031c26;
  background-blend-mode: overlay, normal;
}

.animated-gradient {
  opacity: 0;
  background: radial-gradient(
    70% 75% at 50% 50%,
    rgba(31, 223, 255, 0.05) 0,
    transparent 50%,
    transparent 100%
  );
}
</style>
