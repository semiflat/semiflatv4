<script setup lang='ts'>
import type { Component } from 'vue'


interface About {
    title: string
    text?: string
    url?: string
    bgImage?: string

}

defineProps<{
    content: About[]
    icon: Component
}>()


</script>

<template>
        <div class="mt-16 page-content grid justify-center gap-6 md:mt-[11.5rem] md:gap-8 md:grid-cols-2 items-center">
        <div
            class="card-1 pt-40 px-8 pb-8 rounded-4 text-white grid gap-4 max-w-[27.562rem] md:pt-[18.75rem] md:pb-10 md:px-10 md:ml-auto">
            <h2 class="font-semibold md:text-xl">{{ content[0].title }}</h2>
            <p class="text-blue-100">{{ content[0].text }} </p>
            <span class="text-white text-sm font-semibold md:mt-2 md:text-base">Learn about us</span>
        </div>
        <div class="grid gap-6 md:gap-8">
            <div
                class="card-2 border border-[#BCDCDC] rounded-4 pt-20 px-8 pb-8 grid gap-4 max-w-[27.562rem] md:gap-6 md:px-10 bg-[url(~/assets/card-cubes.svg)] bg-no-repeat md:bg-[url(~/assets/card-cubes-desktop.svg)]">
                <Component :is="icon" class="w-24 -mt-3.5 -ml-3 md:-mt-4" />
                <h2 class="text-blue-300 font-semibold -mt-3 md:mt-0 md:text-xl">{{ content[1].title }}</h2>
                <span class="text-turquoise-400 text-sm font-semibold md:text-base">Learn about us</span>
            </div>
            <div class="card-3 pt-40 px-8 pb-8 rounded-4 text-white grid gap-4 max-w-[27.562rem] md:px-10 md:pb-10">
                <h2 class="font-semibold md:text-xl">{{ content[2].title }}</h2>
                <p class="text-blue-100">{{ content[2].text }}</p>
                <span class="text-white text-sm font-semibold md:mt-2 md:text-base">Learn about us</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-1 {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 27.89%, rgba(0, 0, 0, 0.88) 74.56%), v-bind("content[0].bgImage") center;
    background-size: cover;
    background-repeat: no-repeat;
}


.card-3 {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 27.89%, rgba(0, 0, 0, 0.88) 74.56%), v-bind("content[2].bgImage") center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>