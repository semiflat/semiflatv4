<script setup lang="ts">
import AboutUsVideo from '~/assets/webm/aboutus.webm'

</script>

<template>
    <div class="page-content mt-16 md:mt-40 relative">
        <div class="expertise text-white rounded-4 md:flex max-w-[914px] mx-auto relative">
            <video playsinline autoplay muted loop class="max-w-[19.5rem] mx-auto">
                <source :src="AboutUsVideo" type="video/webm">
            </video>
            <div class="p-8 md:py-20 md:px-14">
                <h2 class="font-semibold text-xl mb-4 md:text-[1.75rem] leading-[120%]">We’re a design firm but operate like a startup</h2>
                <p class="text-blue-100 mb-8 text-sm md:text-base md:mb-8">Startup culture is ingrained in Semiflat’s DNA. We <br class="hidden md:block"> worked at startups before and have worked with dozens of them since. </p>
                <div class="md:flex">
                    <AppButton class="!bg-white !text-blue-300">Learn about our culture</AppButton>

                </div>
            </div>
        </div>
    </div>
</template>

<style>
.expertise {
    background: radial-gradient(57.03% 76.98% at 100% 0%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)
        , #031C26;
    background-blend-mode: overlay, normal;
}
</style>