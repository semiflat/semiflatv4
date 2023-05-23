<script setup lang="ts">
import { ref } from 'vue'
import type { Author } from '../common/AppAuthor.vue'

interface TestimonialInSlider {
  author: Author
  company: string
  companyLogo: string
  quote: string
}

defineProps<{
  testimonials: TestimonialInSlider[]
}>()

let currentIndex = ref(0)
</script>

<template>
  <div class="testimonials-slider">
    <ul class="testimonials-slider__slides">
      <li
        v-for="(testimonial, index) in testimonials"
        :key="index"
        :class="{ '-is-active': index === currentIndex }"
      >
        <AppTestimonial :author="testimonial.author" :quote="testimonial.quote"></AppTestimonial>
      </li>
    </ul>

    <ul class="testimonials-slider__controls">
      <li
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="testimonials-slider__control"
        :class="{ '-is-active': index === currentIndex }"
      >
        <button
          type="button"
          :aria-label="`Go to ${testimonial.company} testimonial`"
          @click="currentIndex = index"
        >
          <img :src="testimonial.companyLogo" :alt="`${testimonial.company} logo`" loading="lazy" />
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.testimonials-slider {
  &__slides {
    display: grid;
    place-content: center;

    > * {
      grid-area: 1/1;
      display: flex;
      align-items: flex-end;
      opacity: 0;
      transform: translateY(0.5rem);
      transition: transform 0.5s ease-in-out;

      &.-is-active {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  &__controls {
    display: flex;
    margin-top: 2.5rem;
    margin-right: -1.5rem;
    width: calc(100% + 1.5rem);
    overflow: auto;

    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 768px) {
      margin-right: 0;
      width: 100%;
    }
  }

  &__control {
    min-width: 208px;
    flex: 1 1 0;
    opacity: 0.5;
    border-bottom: 2px solid transparent;
    text-align: center;
    transition: opacity 0.2s ease;

    &.-is-active {
      opacity: 1;
      border-color: #54aba3;
    }

    @media (hover: hover) {
      &:hover {
        opacity: 1;
      }
    }

    @media (min-width: 768px) {
      min-width: 0;
    }
  }
}
</style>
