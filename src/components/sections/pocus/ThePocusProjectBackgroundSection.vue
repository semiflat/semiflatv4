<script setup lang='ts'>
import CubesIll from '~/assets/pocus/cubes.svg?component'
</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <div class="md:grid grid-cols-2 md:max-w-[57.125rem] mx-auto ">
            <div class="md:max-w-[21.625rem]">
                <h2 class="text-xl text-blue-300 font-semibold md:text-[1.75rem] leading-[120%]">
                    Project background
                </h2>
                <p class="mt-4 text-[#545959]">What is Pocus and what have they managed to do before approaching Semiflat?
                </p>
            </div>
            <div class="mt-8 grid gap-8 md:mt-0">
                <div class="flex gap-6">
                    <div class="md:pr-2">
                        <p class="text-[#545959] mb-8"> Pocus is a product-led tool for sales teams. It allows companies to
                            use
                            the full potential of their product and customer data to identify the highest-value
                            opportunities. It helps salespeople by identifying product champions, setting custom alerts to
                            capture opportunities as they happen, and even lets them create custom, conditional groups of
                            users without writing any code. </p>
                        <p class="text-[#545959] mb-8 md:mb-12">
                            The Co-founder of Pocus contacted Semiflat in the early stages of developing their product. They
                            had already created the back-end of the application but needed help coming up with the look and
                            feel as well as the conceptual design of certain features. What followed was a many-month-long
                            and-counting iterative collaboration as the product continued to grow.
                        </p>
                        <div class="hidden p-8 bg-violet-gradient text-white rounded-4 relative md:p-10">
                            <h3 class="font-semibold mb-1 leading-[150%]">Don’t know how to start the project? </h3>
                            <p class="mb-8 md:pr-8 leading-[150%]">We have a video that explains everything you need to
                                successfully kick
                                of a
                                collaboration
                                with us.</p>
                            <AppButton class="!bg-white !text-black">Watch the video</AppButton>
                            <component :is="CubesIll" class="absolute top-0 right-1 sm:-top-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-[1px] bg-[#D8DFE5] my-12 md:my-20 md:max-w-[57.125rem] mx-auto" />
        <div class="md:grid grid-cols-2 md:max-w-[57.125rem] mx-auto gap-8">
            <div class="md:max-w-[21.625rem]">
                <h2 class="text-xl text-blue-300 font-semibold md:text-[1.75rem] leading-[120%]">The problem </h2>
                <p class="mt-4 text-[#545959]">Why did Pocus approach us? What outcome were they looking for?</p>
            </div>
            <div class="mt-8 grid gap-8 md:mt-0">
                <div class="flex gap-6">
                    <div class="md:pr-2">
                        <p class="text-[#545959]"> Pocus had developers on board back when they approached us. They needed
                            design help creating the MVP designs in weekly sprints that would ensure their dev team
                            constantly has something to work on. The Co-founder of Pocus was looking for a designer to work
                            with closely in order to produce multiple variations of one feature in a short period of time.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.bg-violet-gradient {
    background: radial-gradient(57.03% 76.98% at 100% 0%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 100%)
        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */
        , linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), #481B97;
    background-blend-mode: overlay, normal, normal;
}
</style>
