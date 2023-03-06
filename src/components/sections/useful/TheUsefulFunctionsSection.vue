<script setup lang='ts'>
import Function1 from '~/assets/useful/illustration-1.svg?url'
import Function2 from '~/assets/useful/illustration-2.svg?url'
import Function3 from '~/assets/useful/illustration-3.svg?url'

</script>

<template>
  <div class="page-content mt-16 md:mt-40 hidden md:block">
    <div class="pt-14 bg-[#F6F7F9] rounded-6 text-center border border-[#D8DFE5]">
      <h3 class="font-semibold text-[20px] mb-4">All customer data in one place</h3>
      <p class="text-[#545959] max-w-[33.5rem] mx-auto">Useful aggregates all of your customer calls, transcripts and
        contacts in one easy-to-use software.</p>
      <component :is="Function1" class="-mt-16"/>
    </div>
    <div class="grid grid-cols-2 gap-8 mt-8">
      <div class="bg-[#F6F7F9] rounded-6 text-center border border-[#D8DFE5]">
        <component :is="Function2"/>
        <div class="mt-2 px-10 pb-14">
          <h3 class="font-semibold text-[20px] mb-2">Your insights at the center</h3>
          <p class="text-[#545959] max-w-[33.5rem] mx-auto">Useful keeps track of all your customer interactions so you
            can focus on extracting value.</p>
        </div>
      </div>
      <div class="bg-[#F6F7F9] rounded-6 text-center border border-[#D8DFE5]">
        <component :is="Function3"/>
        <div class="mt-2 px-10 pb-14">
          <h3 class="font-semibold text-[20px] mb-2">Integrates with your tools</h3>
          <p class="text-[#545959] max-w-[33.5rem] mx-auto">Useful integrates with all the tools you’re already using to
            deliver a seamless experience.</p>
        </div>
      </div>
    </div>
  </div>
</template>

