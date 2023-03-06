<script setup lang="ts">
import LeftBg from '~/assets/pocus/left-cubes.svg?url'
import RightBg from '~/assets/pocus/right-cubes.svg?url'
</script>

<template>
  <div class="page-content mt-16 md:mt-40">
    <div
        class="bg-violet-gradient p-8 text-white rounded-6 relative md:px-[7.125rem] md:py-[6.125rem] mx-auto"
    >
      <div class="absolute pointer-events-none w-full h-full opacity-70 top-0 left-0 z-1 card-mask">
        <component
            :is="RightBg"
            class="absolute top-0 right-0 md:w-[170px] md:h-[170px] md:top-4"
        />
        <component :is="LeftBg" class="absolute bottom-3 left-0 md:w-[250px] md:h-[250px]"/>
      </div>
      <div class="md:max-w-[33.5rem] md:mx-auto md:text-center">
        <h3 class="text-[1.25rem] font-semibold mb-6 md:text-[2.5rem] md:leading-[120%]">
          Are you interested in working together?
        </h3>
        <p class="mb-10">
          Reach out with more details about your project so we can prepare for an introductory call. We’ll schedule it
          within 24 hours from receiving your query.
        </p>
        <AppButton secondary href="mailto:hello@semiflat.com">Get in touch</AppButton>
        <AppButton
            class="!text-white"
            text
            target="_blank"
            href="https://calendly.com/d/g3b-8j5-vzs/semiflat-design-partner-introduction"
        >Schedule a call
        </AppButton
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-violet-gradient {
  background: radial-gradient(
      57.03% 76.98% at 100% 0%,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 100%
  ),
  linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), #481b97;
  background-blend-mode: overlay, normal, normal;

  box-shadow: 0px 4px 12px -2px rgba(17, 24, 28, 0.12), 0px 1px 2px rgba(17, 24, 28, 0.16);
}

.card-mask {
  -webkit-mask-image: radial-gradient(
      50% 50% at 50% 50%,
      #d9d9d9 55.46%,
      rgba(217, 217, 217, 0) 100%
  );
  mask-image: radial-gradient(50% 50% at 50% 50%, #d9d9d9 55.46%, rgba(217, 217, 217, 0) 100%);
}

@media (min-width: 1366px) {
  .card-mask {
    -webkit-mask-image: radial-gradient(
        63.02% 50% at 50% 50%,
        #d9d9d9 55.46%,
        rgba(217, 217, 217, 0) 100%
    );
    mask-image: radial-gradient(63.02% 50% at 50% 50%, #d9d9d9 55.46%, rgba(217, 217, 217, 0) 100%);
  }
}
</style>
