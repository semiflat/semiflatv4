<script setup lang="ts">
import SparkCapital from '~/assets/useful/companies/spark-capital.svg?component'
import Ususual from '~/assets/useful/companies/unusual.svg?component'
import Clockwise from '~/assets/pocus/companies/clockwise.svg?component'
import Linear from '~/assets/pocus/companies/linear.svg?component'
import Quicknode from '~/assets/pocus/companies/quicknode.svg?component'
import Miro from '~/assets/pocus/companies/miro.svg?component'
import Webflow from '~/assets/pocus/companies/webflow.svg?component'
import LeftBg from '~/assets/pocus/left-cubes.svg?component'
import RightBg from '~/assets/pocus/right-cubes.svg?component'
</script>

<template>
  <div class="page-content mt-16 md:mt-40">
    <div
      class="bg-violet-light-gradient py-8 px-6 text-white rounded-3 relative lg:px-[7.125rem] lg:py-20 max-w-[57.125rem] mx-auto"
    >
      <div class="absolute w-full h-full top-0 left-0 z-1 card-mask">
        <component
          :is="RightBg"
          class="absolute top-0 right-0 lg:w-[150px] lg:h-[150px] lg:top-4"
        />
        <component :is="LeftBg" class="absolute bottom-0 lg:w-[216px] lg:h-[216px] lg:" />
      </div>

      <h3 class="text-center mb-8">Useful is backed by:</h3>
      <div class="lg:hidden">
        <div class="grid grid-cols-2 md:grid-cols-3 items-center gap-y-8">
          <!-- <component :is="logo" v-for="logo in companies[]" :key="logo" class="max-w-full h-[2.375rem] mx-auto" /> -->
          <div class="h-[38px]">
            <component :is="SparkCapital" class="max-w-full h-[28px] lg:h-[30px] mx-auto" />
          </div>
          <div class="h-[38px]">
            <component :is="Ususual" class="max-w-full h-[18px] lg:h-[24px] mx-auto" />
          </div>
        </div>
        <div class="h-[38px] mt-8">
          <component :is="Webflow" class="max-w-full h-[24px] lg:h-[28px] mx-auto" />
        </div>
      </div>
      <div class="hidden lg:block">
        <div class="flex gap-12 justify-center mb-8">
          <div class="h-[40px]">
            <component :is="SparkCapital" class="lg:h-[38px] mx-auto -mt-1" />
          </div>
          <div class="h-[40px]">
            <component :is="Ususual" class="max-w-full lg:h-[24px] mx-auto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-violet-light-gradient {
  background: radial-gradient(
        57.03% 76.98% at 100% 0%,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), #6f2de7;
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
