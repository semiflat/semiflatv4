<script setup lang='ts'>
import type { Component } from 'vue'

interface Testimonial {
    logo: Component,
    text: string,
    name: string,
    position: string,
    avatar: string
}
defineProps<{
    testimonial: Testimonial
}>()

</script>

<template>
        <div class="border border-[#BCDCDC] rounded-4 p-8 md:px-8 md:py-10" >
                <Component :is="testimonial.logo" class="mb-8" />
                <p class="mb-8 text-blue-200">{{ testimonial.text }}</p>
                <div class="flex gap-4">
                    <img :src="testimonial.avatar" class="w-12 h-12">
                    <div>
                        <p class="text-blue-300 font-semibold">{{ testimonial.name }}</p>
                        <p class="text-blue-200">{{ testimonial.position }}</p>
                    </div>
                </div>
            </div>
</template>