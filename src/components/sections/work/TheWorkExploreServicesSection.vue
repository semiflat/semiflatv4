<script setup lang="ts">
import Expertise from '~/assets/case/Illustration-expertise.svg?url'
</script>

<template>
  <div class="page-content mt-16 md:mt-40 relative">
    <div class="expertise text-white rounded-4 md:flex max-w-[914px] mx-auto relative md:max-h-[21.625rem]">
      <div class="p-8 md:py-20 md:px-14 relative">
        <h2 class="font-semibold text-xl mb-4 md:text-[1.75rem]">Explore our services range</h2>
        <p class="text-blue-100 mb-8 text-sm md:text-base">
          Problem solving is our strong suit. We live and breathe design and have helped dozens of startups solve complex problems in their respective niches.
        </p>
        <div class="md:flex">
          <AppButton class="!bg-white !text-blue-300">Learn about our services</AppButton>
        </div>
      </div>
      <Expertise class="relative " />
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
