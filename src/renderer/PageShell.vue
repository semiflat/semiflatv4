<script setup lang="ts">
import { gsap } from 'gsap'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'

const context = usePageContext()

if (!import.meta.env.SSR) {
  gsap.registerPlugin(DrawSVGPlugin)
}
</script>

<template>
  <div class="layout overflow-hidden relative">
    <div class="page-content">
      <div
        class="safari-fix bg-gradient-left bg-turquoise-100/80 rounded-full blur-[120px] h-[28.125rem] w-[28.125rem] absolute -left-50 -top-18 md:w-[43.75rem] md:h-[43.75rem] md:-left-90 md:top-26 md:blur-[240px]"
        :class="[context.pageProps?.pageShell.bigGradient]"
      />
      <div
        class="safari-fix bg-gradient-right bg-turquoise-200 rounded-full blur-[120px] h-[12.5rem] w-[12.5rem] absolute -right-15 -top-17 md:h-[18.75rem] md:w-[18.75rem] md:blur-200px"
        :class="[context.pageProps?.pageShell.smallGradient]"
      />
    </div>
    <TheLayoutNavbar />
    <div class="content pt-3.5rem md:pt-0">
      <slot />
    </div>
    <TheLayoutFooter />
  </div>
</template>

<style scoped>
/* .bg-gradient {
  will-change: transform;
  animation: gradient-scale 4s ease-in-out infinite alternate;
}

.bg-gradient-right {
  animation: gradient-scale 6s ease-in-out infinite alternate;
}

@keyframes gradient-scale {
  0% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
} */
</style>
