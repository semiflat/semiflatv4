<script setup lang="ts">
import { Power2, Power3, gsap } from 'gsap'

defineProps<{
  id: string
}>()

const svgRef = ref()

const getCircles = () => svgRef.value.querySelectorAll('circle')

onMounted(() => {
  if (!svgRef.value) return

  const tl = gsap.timeline({
    ease: Power2.easeIn,
    repeat: -1,
    repeatDelay: 2,
  })

  const duration = 2

  tl.to(getCircles(), {
    stroke: '#1FDFFF',
    duration,
    yoyoEase: Power3.easeOut,
    yoyo: true,
    repeat: 1,
  })
})
</script>

<template>
  <svg
    ref="svgRef"
    width="204"
    height="204"
    viewBox="0 0 204 204"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter :id="`${id}-glow`">
        <!-- filter processes -->
        <feGaussianBlur in="SourceGraphic" stdDeviation="0.2" />
        <!-- stdDeviation is amount of blur -->
      </filter>
    </defs>
    <mask
      :id="`${id}-mask`"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="205"
      height="204"
    >
      <path d="M0.5 0H204.5V204H0.5V0Z" :fill="`url(#${id}-gradient)`" />
    </mask>
    <g :mask="`url(#${id}-mask)`">
      <circle cx="36.5" cy="148" r="40" stroke="#1FDFFF" :filter="`url(#${id}-glow)`" />
      <circle cx="92.5" cy="148" r="40" stroke="#0A5F81" :filter="`url(#${id}-glow)`" />
      <circle cx="148.5" cy="148" r="40" stroke="#1FDFFF" :filter="`url(#${id}-glow)`" />
      <circle cx="204.5" cy="148" r="40" stroke="#0A5F81" :filter="`url(#${id}-glow)`" />
    </g>
    <defs>
      <radialGradient
        :id="`${id}-gradient`"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(102.5 102) rotate(90) scale(102 81.1808)"
      >
        <stop stop-color="#D9D9D9" />
        <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
      </radialGradient>
    </defs>
  </svg>
</template>
