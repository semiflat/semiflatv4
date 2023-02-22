<script setup lang='ts'>
import CubesIll from '~/assets/pocus/cubes.svg?component'
import CheckIcon from '~/assets/icons/check-icon.svg?component'

const deliverables = [
    {
        header: 'Initial look & feel proposals',
        text: 'In the first phase of the project we worked with the Pocus team to establish a color palette that would later define the brand behind the application. We’ve delivered a Figma file containing dozens of color combinations consistent with Chakra UI’s library used by the Pocus dev team.'
    },
    {
        header: 'A high-fidelity Figma file containing all screens from the application',
        text: 'This was the main file that we’ve worked in over the course of our collaboration. It has evolved multiple times over the months but the final outcome reflected all of the screens in the live product and some upcoming features.'
    },
    {
        header: 'A separate Figma file containing all custom components from the interface',
        text: 'During the collaboration we’ve created many custom components that were not included in the codebase prior. We’ve delivered them in a separate Figma file, along with all variants and states so implementing them would be a breeze. '
    },
]

</script>

<template>
    <div class="page-content mt-16 md:mt-40">
        <div class="md:grid grid-cols-2 md:max-w-[57.125rem] mx-auto ">
            <div class="md:max-w-[21.625rem]">
                <h2 class="text-xl text-blue-300 font-semibold md:text-[1.75rem] leading-[120%]">
                    Project Outcome
                </h2>
                <p class="mt-4 text-[#545959]">What did Pocus gain from working with us? Where is the project now?
                </p>
            </div>
            <div class="mt-8 grid gap-8 md:mt-0">
                <div class="flex gap-6">
                    <div class="md:pr-2">
                        <p class="text-[#545959] mb-8"> Pocus is now a functioning and successful product with a beautiful
                            UI. Thanks to our collaboration they were able to enjoy all benefits of an in-house designer;
                            working with someone who knows their product, having direct communication and ad-hoc
                            brainstorming sessions with their team members.</p>
                        <p class="text-[#545959] mb-8 md:mb-12">
                            This arrangement was perfect for Pocus in the early stage - it allowed for constant design
                            support without the commitment of hiring someone in-house. Now, being in the position to hire a
                            designer, Pocus is continuing to develop the vision we’ve set for them and building on top fo
                            the foundation we’ve delivered.
                        </p>
                        <div class="p-8 bg-violet-gradient text-white rounded-4 relative md:p-10">
                            <h3 class="font-semibold mb-1 leading-[150%]">Have a project in mind similar to Pocus?</h3>
                            <p class="mb-8 md:pr-8 leading-[150%]">Ask us about a dedicated senior designer long-term
                                collaboration model.</p>
                            <AppButton class="!bg-white !text-black">Get in touch</AppButton>
                            <component :is="CubesIll" class="absolute top-0 right-1 sm:-top-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-[1px] bg-[#D8DFE5] my-12 md:my-20 md:max-w-[57.125rem] mx-auto" />
        <div class="md:grid grid-cols-2 md:max-w-[57.125rem] mx-auto ">
            <div class="md:max-w-[21.562rem]">
                <h2 class="text-xl text-blue-300 font-semibold md:text-[1.75rem] leading-[120%]">Deliverables</h2>
                <p class="mt-4 text-[#545959]">What are the tangible deliverables Pocus received from us during the
                    collaboration?</p>
            </div>
            <div class="mt-8 grid gap-8 md:mt-0">
                <div v-for="(el, i) in deliverables" :key="i" class="flex gap-6">
                    <component :is="CheckIcon" class="shrink-0 text-[#481B97]" />
                    <div class="md:pr-2">
                        <h3 class="font-semibold text-blue-300 mb-2">{{ el.header }}</h3>
                        <p class="text-[#545959] leading-[170%]"> {{ el.text }} </p>
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