<script setup lang="ts">
import { gsap } from 'gsap'
import WorkHexagon from '~/assets/svg-animated/companies-work-hexagon.svg?component'

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

  const duration = 1
  const delay = '<1.5'

  tl.fromTo(getLine(1), { drawSVG: '8% 5%' }, { drawSVG: '-24% -25%', duration })
    .fromTo(getLine(2), { drawSVG: '56% 59%' }, { drawSVG: '27% 26%', duration }, delay)
    .fromTo(getLine(3), { drawSVG: '41% 44%' }, { drawSVG: '75% 76%', duration }, delay)
    .fromTo(getLine(4), { drawSVG: '-7% -6%' }, { drawSVG: '24% 23%', duration }, delay)
})
</script>

<template>
  <div class="page-content mt-16 md:mt-40 relative">
    <div
      class="expertise text-white rounded-4 md:flex md:items-center max-w-[914px] mx-auto relative"
    >
      <WorkHexagon ref="hexagonRef" class="max-w-[19.5rem] mx-auto w-full" />
      <div class="p-8 md:py-20 md:px-14">
        <h2 class="font-semibold text-xl mb-4 md:text-[1.75rem] leading-[120%]">
          Get a feel for what you can be working on
        </h2>
        <p class="text-blue-100 mb-8 text-sm md:text-base md:mb-8">
          Problem solving is our strong suit. We live and breathe design and have helped dozens of
          startups solve complex problems in their respective niches.
        </p>
        <div class="md:flex">
          <AppButton secondary href="/work">See our work</AppButton>
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
