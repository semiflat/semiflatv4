<script setup lang='ts'>
import Screen4 from '~/assets/pocus/screen-4.png'
import Screen5 from '~/assets/pocus/screen-5.svg?component'
import Screen6 from '~/assets/pocus/screen-6.png'
</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <div
            class="px-1.75rem py-10.5 bg-[#F6F7F9] rounded-3 border border-[#D8DFE5] mb-8 md:rounded-6 md:py-4.375rem md:px-24">
            <img :src="Screen4" />
        </div>
        <div class="grid gap-8 sm:grid-cols-2">
            <div
                class="px-1.75rem bg-[#F6F7F9] rounded-3 border border-[#D8DFE5] md:rounded-6 md:px-3.25rem md:py-5.375rem max-h-[25.875rem]">
                <component :is="Screen5" class="md:-ml-2 w-full" />
            </div>
            <div
                class="pl-8 md:pl-12 bg-[#F6F7F9] rounded-3 border border-[#D8DFE5] md:rounded-6 max-h-[15.875rem] md:max-h-[25.875rem] overflow-hidden">
                <img :src="Screen6" class="h-full ml-auto" />
            </div>
        </div>
    </div>
</template>