<script setup lang='ts'>
import type { Component } from 'vue'

interface Perk {
    icon: Component,
    title: string,
    text: string,
    illustration?: Component
}
defineProps<{
    perk: Perk
}>()

</script>

<template>
    <div class="border border-[#BCDCDC] rounded-4 "
        :class="[perk.illustration ? 'pt-8 md:px-0 md:pt-10' : 'p-8 md:px-8 md:py-10']">
        <div :class="{ 'px-8': perk.illustration }">
            <Component :is="perk.icon" class="mb-8 text-turquoise-400" />
            <h2 class="mb-2 text-blue-300 font-semibold">{{ perk.title }}</h2>
            <p class="text-blue-200 leading-[150%]">{{ perk.text }}</p>
        </div>
        <Component :is="perk.illustration" v-if="perk.illustration" class="mx-auto" />
    </div>
</template>