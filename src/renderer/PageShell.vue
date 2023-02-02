<script setup lang="ts"></script>

<template>
  <div class="layout overflow-hidden">
    <div class="page-content relative">
      <div
        class="bg-gradient bg-gradient-left bg-turquoise-100/80 pointer-events-none rounded-full blur-[120px] h-[28.125rem] w-[28.125rem] absolute -left-50 -top-18 md:w-[43.75rem] md:h-[43.75rem] md:-left-90 md:top-26 md:blur-[240px]"
      />
      <div
        class="bg-gradient bg-gradient-right bg-turquoise-200 pointer-events-none rounded-full blur-[120px] h-[12.5rem] w-[12.5rem] absolute -right-15 -top-17 md:h-[18.75rem] md:w-[18.75rem] md:blur-200px"
      />
    </div>
    <TheLayoutNavbar />
    <div class="content">
      <slot />
    </div>
    <TheLayoutFooter />
  </div>
</template>

<style lang="postcss" scoped>
.bg-gradient {
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
}
</style>
