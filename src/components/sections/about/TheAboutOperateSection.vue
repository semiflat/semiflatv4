<script setup lang="ts">
import { gsap } from 'gsap'
import OperateHexagon from '~/assets/svg-animated/about-operate-hexagon.svg?component'

const hexagonRef = ref()

const getLine = (id: string | number) => hexagonRef.value.$el.querySelector(`.glow-line-${id}`)
const getLines = () => hexagonRef.value.$el.querySelector(`.glow-line`)

onMounted(() => {
  if (!hexagonRef.value) return

  gsap.set(getLines(), {
    drawSVG: '0% 0%',
  })

  const tl = gsap.timeline({
    ease: 'power2.out',
    repeat: -1,
  })

  tl.fromTo(getLine(1), { drawSVG: '0% 7.5%' }, { drawSVG: '98% 100%', duration: 1.75 })
    .fromTo(getLine(2), { drawSVG: '92.5% 100%' }, { drawSVG: '0% 2%', duration: 1.75 })
    .fromTo(getLine(3), { drawSVG: '96.5% 100%' }, { drawSVG: '0% 4%', duration: 1.75 })
    .fromTo(getLine(4), { drawSVG: '0% 2.75%' }, { drawSVG: '95.5% 100%', duration: 1.75 })
})
</script>

<template>
  <div class="page-content mt-16 md:mt-40 relative">
    <div class="expertise text-white rounded-4 md:flex max-w-[914px] mx-auto relative">
      <OperateHexagon ref="hexagonRef" class="max-w-[19.5rem] mx-auto w-full" />
      <div class="p-8 md:py-20 md:px-14">
        <h2 class="font-semibold text-xl mb-4 md:text-[1.75rem] leading-[120%]">
          We’re a design firm but operate like a startup
        </h2>
        <p class="text-blue-100 mb-8 text-sm md:text-base md:mb-8">
          Startup culture is ingrained in Semiflat’s DNA. We <br class="hidden md:block" />
          worked at startups before and have worked with dozens of them since.
        </p>
        <div class="md:flex">
          <AppButton secondary href="/culture">Learn about our culture</AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.expertise {
  background: radial-gradient(57.03% 76.98% at 100% 0%, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    #031c26;
  background-blend-mode: overlay, normal;
}
</style>
