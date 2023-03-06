<script setup lang="ts">
import Screen4 from '~/assets/useful/screen-4.png'
import Screen5 from '~/assets/useful/screen-5.png'
import Screen6 from '~/assets/useful/screen-6.png'
</script>

<template>
  <div class="page-content mt-16 md:mt-40">
    <div
      class="px-1.75rem py-10.5 bg-[#F6F7F9] rounded-3 border border-[#D8DFE5] mb-8 md:rounded-6 md:py-4.375rem md:px-24"
    >
      <img :src="Screen4" class="custom-shadow rounded-3" />
    </div>
    <div class="grid gap-8 sm:grid-cols-2">
      <div
          class="bg-[#F6F7F9] rounded-3 border border-[#D8DFE5] md:rounded-6 max-h-[15.875rem] md:max-h-[25.875rem] overflow-hidden"
      >
        <img :src="Screen5" class="w-full" />
      </div>
      <div
        class="bg-[#F6F7F9] rounded-3 border border-[#D8DFE5] md:rounded-6 max-h-[15.875rem] md:max-h-[25.875rem] overflow-hidden"
      >
        <img :src="Screen6" class="h-full ml-auto" />
      </div>
    </div>
  </div>
</template>
