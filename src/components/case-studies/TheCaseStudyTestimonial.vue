<script setup lang="ts">
import type { Author } from '../common/AppAuthor.vue'

const props = defineProps<{
  quote: string
  author: Author
}>()
</script>

<template>
  <figure class="case-study-testimonial">
    <blockquote class="case-study-testimonial__quote">
      {{ props.quote }}
    </blockquote>
    <figcaption class="case-study-testimonial__caption">
      <AppAuthor v-bind="props.author" />
    </figcaption>
  </figure>
</template>

<style lang="scss" scoped>
.case-study-testimonial {
  $bg-color: #{var(--accent-color-dark)};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2.5rem 1.5rem;
  border-radius: 24px;
  background: radial-gradient(
      63.24% 50% at 50% 0%,
      rgba(255, 255, 255, 0.48) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    $bg-color;
  background-blend-mode: overlay, normal;
  color: white;
  font-size: 1rem;

  @media (min-width: 768px) {
    padding: 3rem 5rem;
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 6rem 10rem;
  }

  &__quote {
    font-weight: 500;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
}
</style>
