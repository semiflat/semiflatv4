<script setup lang="ts">

// import BackgroundTurquoise from '~/assets/bg-turquoise.svg?component'
// import BackgroundMoblieLeft from '~/assets/bg-hero-left-mobile.svg?component' blur-[120px]

</script>

<template>
  <div class="layout overflow-hidden">
    <div class="page-content relative">
      <div
        class="bg-turquoise-100/80 pointer-events-none rounded-full blur-[120px] h-[28.125rem] w-[28.125rem] absolute -left-50 -top-18 md:w-[43.75rem] md:h-[43.75rem] md:-left-90 md:top-26 md:blur-[240px]" />
      <div
        class="bg-turquoise-200 pointer-events-none rounded-full blur-[120px] h-[12.5rem] w-[12.5rem] absolute -right-15 -top-17 md:h-[18.75rem] md:w-[18.75rem] md:blur-200px" />
    </div>
    <TheLayoutNavbar />
    <div class="content">
      <slot />
    </div>
    <TheLayoutFooter />
  </div>
</template>
