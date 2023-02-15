<script setup lang='ts'>

defineProps<{
    introduction: any
}>()

</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <div class="grid gap-4 md:grid-cols-2 md:max-w-[57.125rem] mx-auto">
            <img :src="introduction.img" class="mx-auto" />
            <div class="md:pr-6 md:pl-20 md:flex md:flex-col justify-center">
                <h3 class="gradient-text font-semibold md:text-[1.75rem] md:leading-[120%]">{{ introduction.header }}
                </h3>
                <p class="mt-4 text-blue-200">{{ introduction.text }}
                </p>
            </div>
        </div>
    </div>
</template>