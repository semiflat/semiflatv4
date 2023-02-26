<script setup lang="ts">
import PolygonVideo from '~/assets/webm/polygon1.webm'
import PolygonVideoMp4 from '~/assets/mp4/polygon.mp4'

</script>

<template>
  <div class="page-content mt-16 md:mt-40 relative">
    <div
      class="bg-gradient bg-turquoise-100/80 rounded-full hidden md:block absolute -right-100 -top-18 w-[43.75rem] h-[43.75rem] blur-[240px]" />
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
      <video playsinline autoplay muted loop class="max-w-[19.5rem] mx-auto relative md:mr-6">
        <source :src="PolygonVideoMp4" type="video/mp4;codecs=hvc1">
        <source :src="PolygonVideo" type="video/webm">
      </video>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.bg-gradient {
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
