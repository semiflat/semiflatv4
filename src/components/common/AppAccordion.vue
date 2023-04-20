<script setup lang="ts">
import ChevronDown from '~/assets/icons/chevron-down.svg?component'

interface FaqItem {
  header: string
  text: string
  isOpen: boolean
}

const props = defineProps<{
  faqs: FaqItem[]
}>()

const toggleFaq = (item: FaqItem) => {
  props.faqs.forEach((el) =>
    el.header !== item.header ? (el.isOpen = false) : (el.isOpen = !el.isOpen)
  )
}
</script>

<template>
  <div class="flex flex-col gap-6">
    <div v-for="(faq, i) in faqs" :key="i" class="">
      <div
        class="md:px-6 border-[#BCDCDC] overflow-hidden"
        :class="{ 'border-b': i + 1 !== faqs.length }"
      >
        <div
          class="flex items-center flex-1 cursor-pointer justify-between gap-10 border-[#BCDCDC]"
          @click="toggleFaq(faq)"
        >
          <h3 class="font-semibold leading-[150%] md:text-lg select-none text-primary">{{ faq.header }}</h3>
          <ChevronDown
            class="shrink-0 transition-all duration-300 text-turquoise-300 select-none"
            :class="{ 'rotate-180 !text-turquoise-400': faq.isOpen }"
          />
        </div>
        <div
          class="text-blue-200 md:pr-20 mt-6 max-h-0 overflow-hidden transition-all ease-linear duration-0 select-none"
          :class="{ '!max-h-100rem': faq.isOpen, '!duration-2000': faq.isOpen }"
        >
          <p
            class="pb-6 md:pb-8 transition-all translate-x-20 opacity-0"
            :class="{ '!opacity-100 !translate-x-0': faq.isOpen, '!duration-250': faq.isOpen }"
          >
            {{ faq.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
