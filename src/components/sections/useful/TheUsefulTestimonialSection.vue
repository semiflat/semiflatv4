<script setup lang="ts">
import {gsap} from 'gsap'
import UsefulCEO from '~/assets/useful/useful-ceo.png'
import PocusTestimonalsImage from '~/assets/svg-animated/pocus-testimonials.svg?component'

const animatedImageRef = ref()

const getLine = () => animatedImageRef.value.$el.querySelector(`.glow-line`)

onMounted(() => {
  if (!animatedImageRef.value) return

  const line = getLine()

  gsap.set(line, {
    drawSVG: '0% 0%',
  })

  const tl = gsap.timeline({
    repeat: -1,
  })

  const duration = 2

  tl.fromTo(line, {drawSVG: '0% 4%'}, {drawSVG: '100% 104%', duration, ease: 'none'})
})
</script>

<template>
  <div id="testimonial" class="page-content mt-16 md:mt-40">
    <div
        class="bg-violet-transparent p-8 border border-[#D8DFE5] rounded-3 max-w-[57.125rem] mx-auto md:pt-0 md:pb-12"
    >
      <PocusTestimonalsImage
          ref="animatedImageRef"
          class="mb-8 mx-auto w-full max-w-[20rem] md:mb-0 md:mt-6 md:mb-4"
      />
      <p class="max-w-45.375rem md:mx-auto md:text-center md:text-[1.25rem]">
        “When we set out to work with a design studio, we were looking for true partnership, not just great execution.
        Paulina, Nic, and Ewa were all of that and more. They helped bring our vision to life and were real thought
        partners throughout the creative process. They gave us an incredible foundation to work with, and we’re excited
        to partner with the Semiflat team in the future.”
      </p>
      <div class="flex gap-4 mt-8 md:justify-center md:mt-10">
        <img class="rounded-full w-12" :src="UsefulCEO"/>
        <div>
          <p class="font-semibold">Mike Ottavi-Brannon</p>
          <p class="text-#545959">Co-Founder</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-violet-transparent {
  background: radial-gradient(
      45.79% 105.4% at 18.33% -17.72%,
      #f0edfe 0%,
      rgba(240, 237, 254, 0) 100%
  ) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
  #ffffff;
  /* border: 1px solid #D8DFE5; */
  /* Elevations/Depth00 */

  box-shadow: 0px 1px 0px rgba(17, 24, 28, 0.08);
}
</style>
