<script setup lang="ts">
import Screen1 from '~/assets/pocus/screen-1.png'
import Screen2 from '~/assets/pocus/screen-2.png'
import Screen3 from '~/assets/pocus/screen-3.png'
</script>

<template>
  <div class="page-content mt-16 md:mt-40">
    <div
      class="px-1.75rem py-10.5 bg-[#F6F7F9] rounded-3 border border-[#D8DFE5] mb-8 md:rounded-6 md:py-4.375rem md:px-24"
    >
      <img :src="Screen1" />
    </div>
    <div class="grid gap-8 sm:grid-cols-2">
      <div
        class="pl-1.812rem pt-1.812rem bg-[#F6F7F9] rounded-3 border border-[#D8DFE5] md:rounded-6 md:pl-12 md:pt-12 overflow-hidden"
      >
        <img :src="Screen2" />
      </div>
      <img :src="Screen3" />
    </div>
  </div>
</template>
