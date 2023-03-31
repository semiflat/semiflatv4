<script setup lang="ts">
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import AOS from 'aos'
import 'aos/dist/aos.css'

onMounted(async () => {
  const sections = document.querySelectorAll('.section')
  sections.forEach((section, i) => {
    if (i > 1) {
      section.setAttribute('data-aos', 'fade-up')
      section.setAttribute('data-aos-duration', '500')
    }
  })
  AOS.init({ once: true })
})

if (!import.meta.env.SSR) {
  gsap.registerPlugin(DrawSVGPlugin)
}
</script>

<template>
  <div class="layout relative">
    <TheLayoutNavbar />
    <div class="content pt-3.5rem md:pt-0">
      <slot />
    </div>
    <TheLayoutFooter data-aos="fade-up" data-aos-duration="500" />
  </div>
</template>

<style lang="scss">
.layout {
  position: relative;
  width: 100%;
  overflow: hidden;
}
</style>
