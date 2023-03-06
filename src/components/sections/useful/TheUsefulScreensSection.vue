<script setup lang="ts">
import Screen1 from '~/assets/useful/screen-1.png'
import Screen2 from '~/assets/useful/screen-2.png'
import Screen3 from '~/assets/useful/screen-3.png'
</script>

<template>
  <div class="page-content mt-16 md:mt-40">
    <div
      class="px-1.75rem py-10.5 bg-[#F6F7F9] rounded-3 border border-[#D8DFE5] mb-8 md:rounded-6 md:py-4.375rem md:px-24"
    >
      <img :src="Screen1" class="custom-shadow rounded-3" />
    </div>
    <div class="grid gap-8 sm:grid-cols-2">
      <div class="bg-[#F6F7F9] rounded-3 border border-[#D8DFE5] md:rounded-6 overflow-hidden">
        <img :src="Screen2" />
      </div>
      <div class="bg-[#F6F7F9] rounded-3 border border-[#D8DFE5] md:rounded-6 overflow-hidden">
        <img :src="Screen3" />
      </div>
    </div>
  </div>
</template>
