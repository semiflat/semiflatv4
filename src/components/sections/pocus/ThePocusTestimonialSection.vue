<script setup lang="ts">
import PocusTestimonialVideo from '~/assets/pocus/pocus-testimonial.webm'
import PocusTestimonialVideoMp4 from '~/assets/mp4/pocus.mp4'
import PocusCEO from '~/assets/pocus/pocus-ceo.jpeg'
</script>

<template>
  <div class="page-content mt-16 md:mt-40">
    <div
      class="bg-violet-transparent p-8 border border-[#D8DFE5] rounded-3 max-w-[57.125rem] mx-auto md:pt-0 md:pb-12"
    >
      <video playsinline autoplay muted loop class="mb-8 mx-auto max-w-[20rem] md:mb-0 md:mt-5">
        <source :src="PocusTestimonialVideoMp4" type="video/mp4;codecs=hvc1" />
        <source :src="PocusTestimonialVideo" type="video/webm" />
      </video>
      <p class="max-w-45.375rem md:mx-auto md:text-center md:text-[1.25rem]">
        “We are very happy with the work Nic and his team have done. They’ve been involved in the
        design of our product from the very beginning and have been supporting our design needs ever
        since.”
      </p>
      <div class="flex gap-4 mt-8 md:justify-center md:mt-10">
        <img class="rounded-full w-12" :src="PocusCEO" />
        <div>
          <p class="font-semibold">Isaac Pohl-Zaretsky</p>
          <p class="text-#545959">Co-Founder, CTO</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-violet-transparent {
  background: radial-gradient(
        45.79% 105.4% at 18.33% -17.72%,
        #f0edfe 0%,
        rgba(240, 237, 254, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    #ffffff;
  /* border: 1px solid #D8DFE5; */
  /* Elevations/Depth00 */

  box-shadow: 0px 1px 0px rgba(17, 24, 28, 0.08);
}
</style>
