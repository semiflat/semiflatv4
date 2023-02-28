<script setup lang="ts">
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

if (!import.meta.env.SSR) {
  gsap.registerPlugin(DrawSVGPlugin)
}
</script>

<template>
  <div class="overflow-hidden">
    <TheAboutHeroSection />
    <TheAboutImagesSlider />
    <TheAboutPerksSection />
    <TheAboutAboutSection />
    <TheAboutOperateSection />
    <TheAboutEmployeesSection />
    <!-- <TheAboutTimeline /> -->
    <TheCTABottomSection />
  </div>
</template>
