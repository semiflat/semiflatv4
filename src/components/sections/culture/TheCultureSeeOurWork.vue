<script setup lang="ts">
import CompaniesVideo from '~/assets/webm/Companies.webm'
import CompaniesVideoMp4 from '~/assets/mp4/companies.mp4'
</script>

<template>
  <div class="page-content mt-16 md:mt-40 relative">
    <div class="expertise text-white rounded-4 md:flex max-w-[914px] mx-auto relative">
      <video playsinline autoplay muted loop class="max-w-[19.5rem] mx-auto">
        <source :src="CompaniesVideoMp4" type="video/mp4;codecs=hvc1" />
        <source :src="CompaniesVideo" type="video/webm" />
      </video>
      <div class="p-8 md:py-20 md:px-14">
        <h2 class="font-semibold text-xl mb-4 md:text-[1.75rem] leading-[120%]">
          Get a feel for what you can be working on
        </h2>
        <p class="text-blue-100 mb-8 text-sm md:text-base md:mb-8">
          Problem solving is our strong suit. We live and breathe design and have helped dozens of
          startups solve complex problems in their respective niches.
        </p>
        <div class="md:flex">
          <AppButton secondary href="/work">See our work</AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.expertise {
  background: radial-gradient(57.03% 76.98% at 100% 0%, #ffffff 0%, rgba(255, 255, 255, 0) 100%),
    #031c26;
  background-blend-mode: overlay, normal;
}
</style>
