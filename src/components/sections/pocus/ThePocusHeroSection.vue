<script lang="ts" setup>
import Dashboard from '~/assets/pocus/pocus-dashboard.png'
import PocusLogo from '~/assets/pocus/pocus-logo.svg?component'


</script>

<template>
    <div class="relative page-content">
        <div class="mt-3.5rem md:mt-30 md:text-center">
            <PocusLogo class="mx-auto hidden md:block" />
            <h1 class="hero-title md:text-[2.5rem] md:leading-[120%] md:mt-16">
                Designing Pocus, a product-led sales tool <br class="hidden md:block" /> that raised a $23M series A.
            </h1>
            <p class="mt-6">
                Pocus is a Product-Led Sales platform that gives go-to-market teams access to product <br
                    class="hidden md:block" /> usage data without
                relying on engineers.
            </p>
            <div class="mt-2.5rem">
                <AppButton class="!bg-[#481B97]" href="https://pocus.com" target="_blank">See the live version</AppButton>
                <AppButton text>Read testimonial</AppButton>
            </div>
        </div>
    </div>
    <div class="relative h-[370px] sm:h-[690px] mt-10 mt-20 ml-6 md:ml-0">
        <img :src="Dashboard" class="h-full object-cover object-top-left dashboard-mask mx-auto  md:rounded-6">
    </div>
    <div class="page-content mt-10 md:mt-20">
        <div class="flex flex-col items-center sm:grid gap-6 md:gap-8 sm:grid-cols-3 justify-center">
            <div class="border border-[#D8DFE5] inline-block rounded-3 max-w-[346px] w-full">
                <div class="bg-[url(~/assets/pocus/pocus-timeline.svg)] h-[7.5rem] bg-center" />
                <div class="py-4 px-6 text-center">
                    <p class="font-semibold">Ongoing - 1y</p>
                    <p class="text-gray-600">Timeline</p>
                </div>
            </div>
            <div class="border border-[#D8DFE5] inline-block rounded-3 max-w-[346px] w-full">
                <div class="bg-[url(~/assets/pocus/pocus-location.svg)] h-[7.5rem] bg-center" />
                <div class="py-4 px-6 text-center">
                    <p class="font-semibold">San Francisco, CA</p>
                    <p class="text-gray-600">Location</p>
                </div>
            </div>
            <div class="border border-[#D8DFE5] inline-block rounded-3 max-w-[346px] w-full">
                <div class="bg-[url(~/assets/pocus/pocus-funding.svg)] h-[7.5rem] bg-center" />
                <div class="py-4 px-6 text-center">
                    <p class="font-semibold">$23M</p>
                    <p class="text-gray-600">Total funding</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.hero-title {
    @apply text-[1.75rem] font-semibold leading-[34px];
}

.dashboard-mask {
    -webkit-mask-image: linear-gradient(to top, transparent 0%, black 29%);
    mask-image: linear-gradient(to top, transparent 0%, black 29%);
}

@media (min-width: 768px) {
    .dashboard-mask {
        -webkit-mask-image: none;
        mask-image: none;
        box-shadow: 0px 12px 24px -2px rgba(17, 24, 28, 0.08);
        filter: drop-shadow(0px 1px 2px rgba(17, 24, 28, 0.12));
        border-radius: 24px;
    }
}
</style>
