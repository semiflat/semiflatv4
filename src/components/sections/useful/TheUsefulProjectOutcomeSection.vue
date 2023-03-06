<script setup lang="ts">
import CubesIll from '~/assets/pocus/cubes.svg?url'
import CheckIcon from '~/assets/icons/check-icon.svg?component'

const deliverables = [
  {
    header: 'A whiteboard containing the summary of all Discovery sessions',
    text: 'The outcome of the workshops was delivered to Useful as a FigJam - a whiteboard-like canvas containing sticky notes, diagrams, and tables filed with assumptions, business goals, and vision that we’ve gathered on our calls with the founders.',
  },
  {
    header: 'A low-fidelity Figma file containing all screens from the application',
    text: "Useful also got a separate Figma file containing all pages reflective of user flows established in the project's initial phase. We've worked on this file throughout the majority of the project in iterative sprints, focusing on one user flow at a time.",
  },
  {
    header: 'A high-fidelity Figma file containing all screens from the application',
    text: "Starting with the look & feel proposals, we've carried the established style to the previously designed low-fidelity wireframes to give them a final, polished look. We then handed over this file to the developers.",
  },
  {
    header: 'A component library file',
    text: "We know that a small MVP can quickly grow into a large product. With rapid user growth comes the demand for new features, which needs to be rapidly fulfilled. Startups in the early stages often rely solely on developers to modify existing designs which can easily lead to multiple versions of the same screen or component. We wanted to avoid this scenario, so we've equipped Useful with a separate file containing all reusable components to implement and build on top of in the future.",
  },
  {
    header: 'Clickable prototype',
    text: 'We’ve connected the key high fidelity pages into clickable sequences so Useful could not only tell investors and customers about their product but actually show it to them.',
  },
]
</script>

<template>
  <div class="page-content mt-16 md:mt-40">
    <div class="md:grid grid-cols-2 md:max-w-[57.125rem] mx-auto">
      <div class="md:max-w-[21.625rem]">
        <h2 class="text-xl text-blue-300 font-semibold md:text-[1.75rem] leading-[120%]">
          Project Outcome
        </h2>
        <p class="mt-4 text-[#545959]">
          What did Useful gain from working with us? Where is the project now?
        </p>
      </div>
      <div class="mt-8 grid gap-8 md:mt-0">
        <div class="flex gap-6">
          <div class="md:pr-2">
            <p class="text-[#545959] mb-8">
              Over two months, we’ve delivered a complete user experience and a clickable
              application prototype. We wanted to make sure that Useful is set up for success, so
              we’ve also implemented a design system containing all of the components used across
              the interface.
            </p>
            <p class="text-[#545959] mb-8 md:mb-12">
              Useful went on to raise a $5M financing round from Spark Capital and Unusual Ventures.
              The application is currently in the last stages of development, serving first users
              through an early-access program.
            </p>
            <div class="p-8 bg-violet-gradient text-white rounded-4 relative md:p-10">
              <h3 class="font-semibold mb-1 leading-[150%]">
                Have a project in mind similar to Useful?
              </h3>
              <p class="mb-8 md:pr-8 leading-[150%]">
                Ask us about a fixed-scope MVP sprint and how we can create an interactive prototype
                to help you tell the story of your product.
              </p>
              <AppButton class="!bg-white !text-black" href="mailto:hello@semiflat.com"
                >Get in touch</AppButton
              >
              <img :src="CubesIll" class="absolute top-0 right-1 sm:-top-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-[1px] bg-[#D8DFE5] my-12 md:my-20 md:max-w-[57.125rem] mx-auto" />
    <div class="md:grid grid-cols-2 md:max-w-[57.125rem] mx-auto">
      <div class="md:max-w-[21.562rem]">
        <h2 class="text-xl text-blue-300 font-semibold md:text-[1.75rem] leading-[120%]">
          Deliverables
        </h2>
        <p class="mt-4 text-[#545959]">
          What are the tangible deliverables Useful received from us during the collaboration?
        </p>
      </div>
      <div class="mt-8 grid gap-8 md:mt-0">
        <div v-for="(el, i) in deliverables" :key="i" class="flex gap-6">
          <component :is="CheckIcon" class="shrink-0 text-[#481B97]" />
          <div class="md:pr-2">
            <h3 class="font-semibold text-blue-300 mb-2">{{ el.header }}</h3>
            <p class="text-[#545959] leading-[170%]">{{ el.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.bg-violet-gradient {
  background: radial-gradient(
        57.03% 76.98% at 100% 0%,
        rgba(255, 255, 255, 0.8) 0%,
        rgba(255, 255, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    linear-gradient(0deg, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), #481b97;
  background-blend-mode: overlay, normal, normal;
}
</style>
