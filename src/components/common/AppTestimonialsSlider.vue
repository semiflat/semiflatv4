<script setup lang="ts">
import { ref } from 'vue'
import type { Component } from 'vue'
import type { Author } from '../common/AppAuthor.vue'

interface TestimonialInSlider {
  author: Author
  company: string
  companyLogo: Component
  quote: string
}

defineProps<{
  testimonials: TestimonialInSlider[]
}>()

let currentIndex = ref(0)
</script>

<template>
  <div class="testimonials-slider">
    <div v-for="(testimonial, index) in testimonials" :key="index">
      <AppTestimonial
        v-if="index === currentIndex"
        :author="testimonial.author"
        :quote="testimonial.quote"
      ></AppTestimonial>
    </div>

    <ul class="testimonials-slider__controls">
      <li
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="testimonials-slider__control"
        :class="{ '-is-active': index === currentIndex }"
      >
        <button type="button" :aria-label="testimonial.company" @click="currentIndex = index">
          <component :is="testimonial.companyLogo" />
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.testimonials-slider {
  &__controls {
    display: flex;
    margin-top: 2.5rem;
  }

  &__control {
    flex: 1 1 0;
    opacity: 0.5;
    border-bottom: 1px solid transparent;
    text-align: center;

    &.-is-active {
      opacity: 1;
      border-color: #54ABA3;
    }
  }
}
</style>
