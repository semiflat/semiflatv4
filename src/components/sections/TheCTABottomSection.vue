<script setup lang="ts">
import CTA1 from '~/assets/webm/cta-hex.webm'
import CTA1Mp4 from '~/assets/mp4/cta-hex.mp4'
import CTA2 from '~/assets/webm/cta-spheres.webm'
import CTA2Mp4 from '~/assets/mp4/cta-spheres.mp4'
</script>

<template>
  <div class="page-content mt-16 md:mt-40">
    <div class="grid gap-6 md:grid-cols-2">
      <div class="bg-gradient text-white rounded-4 md:flex mx-auto relative w-full">
        <video playsinline autoplay muted loop class="absolute right-0 h-[12.75rem]">
          <source :src="CTA2Mp4" type="video/mp4;codecs=hvc1" />
          <source :src="CTA2" type="video/webm" />
        </video>
        <div class="p-8 md:py-10 px-6 relative">
          <h2 class="font-semibold text-xl mb-8">
            Interested in working with <br class="hidden md:block" />
            us on your SaaS project?
          </h2>
          <AppButton secondary href="mailto:hello@semiflat.com">Get in touch</AppButton>
        </div>
      </div>
      <div class="bg-gradient text-white rounded-4 md:flex w-full mx-auto relative">
        <video playsinline autoplay muted loop class="absolute right-0 h-[12.75rem]">
          <source :src="CTA1Mp4" type="video/mp4;codecs=hvc1" />
          <source :src="CTA1" type="video/webm" />
        </video>
        <div class="p-8 md:py-10 px-6 relative">
          <h2 class="font-semibold text-xl mb-8">
            Want to learn more about <br class="hidden md:block" />
            our services?
          </h2>
          <AppButton secondary href="/services">Learn more</AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-gradient {
  background: radial-gradient(57.03% 76.98% at 100% 0%, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    #031c26;
  background-blend-mode: overlay, normal;
}
</style>
