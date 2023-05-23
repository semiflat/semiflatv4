<script setup lang="ts">
import type { Author } from '../common/AppAuthor.vue'

interface Testimonial {
  quote: string
  author: Author
}

const props = defineProps<Testimonial>()
</script>

<template>
  <figure class="testimonial">
    <div class="rockets rockets--vertical" />
    <blockquote class="testimonial__quote">
      <div class="rockets rockets--horizontal" />
      {{ props.quote }}
    </blockquote>
    <figcaption class="testimonial__caption">
      <AppAuthor class="testimonial__author" v-bind="props.author" />
    </figcaption>
  </figure>
</template>

<style lang="scss" scoped>
.testimonial {
  @include card;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2.5rem 1.5rem;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 24px;
    transform: translateY(-50%);
    width: 1px;
    height: calc(100% - 16px);
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      var(--accent-color-medium) 15% 85%,
      rgba(255, 255, 255, 0)
    );
  }

  &::after {
    left: auto;
    right: 24px;
  }

  @media (min-width: 768px) {
    padding: 3rem 5rem;
    gap: 2rem;

    &::before {
      left: 72px;
    }

    &::after {
      right: 72px;
    }
  }

  @media (min-width: 1024px) {
    padding: 6rem 10rem;

    &::before,
    &::after {
      height: calc(100% - 104px);
    }

    &::before {
      left: 152px;
    }

    &::after {
      right: 152px;
    }
  }

  &__decor {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &__quote {
    padding: 0.5rem 0;
    font-weight: 500;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }

  &__quote,
  &__caption {
    position: relative;
    z-index: 1;
    width: 100%;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% + 48px);
      height: 1px;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        var(--accent-color-medium) 7% 93%,
        rgba(255, 255, 255, 0)
      );
    }

    &::after {
      top: calc(100% - 1px);
    }

    @media (min-width: 768px) {
      &::before,
      &::after {
        width: calc(100% + 120px);
      }
    }

    @media (min-width: 1024px) {
      &::before,
      &::after {
        width: calc(100% + 160px);
      }
    }
  }

  &__quote::after,
  &__caption::before {
    @media (min-width: 1024px) {
      width: calc(100% + 320px);
    }
  }

  &__author {
    position: relative;
    z-index: 1;
    margin: 0 auto;
    justify-content: center;
  }
}

.rockets {
  $easing: cubic-bezier(0.5, 1, 0.89, 1);
  $rockets-color: #fff;
  $rockets-size: 80px;

  @keyframes rocket-to-left {
    0% {
      transform: translateX(200%);
      opacity: 0;
    }

    1% {
      opacity: 1;
    }

    20% {
      transform: translateX(clamp(-960px, -90vw, -320px));
      opacity: 0;
    }

    100% {
      transform: translateX(clamp(-960px, -90vw, -320px));
      opacity: 0;
    }
  }

  @keyframes rocket-to-right {
    0% {
      transform: translateX(-200%);
      opacity: 0;
    }


    1% {
      opacity: 1;
    }

    20% {
      transform: translateX(clamp(320px, 90vw, 960px));
      opacity: 0;
    }

    100% {
      transform: translateX(clamp(320px, 90vw, 960px));
      opacity: 0;
    }
  }

  @keyframes rocket-to-bottom {
    0% {
      transform: translateY(-200%);
      opacity: 0;
    }

    1% {
      opacity: 1;
    }

    20% {
      transform: translateY(clamp(270px, 30vw, 360px));
      opacity: 0;
    }

    100% {
      transform: translateY(clamp(270px, 30vw, 360px));
      opacity: 0;
    }
  }

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    border-radius: 2px;
    background-blend-mode: overlay;
    mix-blend-mode: normal;
    filter: blur(0.5px);
    opacity: 0;
  }

  &--horizontal {
    &::before,
    &::after {
      height: 1px;
      width: $rockets-size;
    }

    // top, rtl
    &::before {
      right: 0;
      top: 0;
      background: linear-gradient(to left, rgba(72, 27, 151, 0) 0%, $rockets-color 100%);
      transform: translateX(200%);
      animation: rocket-to-left 9s $easing infinite;
    }

    // bottom, ltr
    &::after {
      left: 0;
      bottom: -1px;
      background: linear-gradient(to right, rgba(72, 27, 151, 0) 0%, $rockets-color 100%);
      transform: translateX(-200%);
      animation: rocket-to-right 9s $easing infinite;
      animation-delay: 6s;
    }
  }

  &--vertical {
    &::before,
    &::after {
      width: 1px;
      height: $rockets-size;
    }

    // right, to bottom
    &::before {
      right: 24px;
      top: 0;
      transform: translateY(-200%);
      background: linear-gradient(to bottom, rgba(72, 27, 151, 0) 0%, $rockets-color 100%);
      animation: rocket-to-bottom 6s $easing infinite;
      animation-delay: 2s;
    }

     // left, to bottom
    &::after {
      left: 24px;
      top: 0;
      transform: translateY(-200%);
      background: linear-gradient(to bottom, rgba(72, 27, 151, 0) 0%, $rockets-color 100%);
      animation: rocket-to-bottom 6s $easing infinite;
      animation-delay: 4s;
    }

    @media (min-width: 1024px) {
      &::before {
        right: 72px;
      }

      &::after {
        left: 72px;
      }
    }

    @media (min-width: 1024px) {
      &::before {
        right: 152px;
      }

      &::after {
        left: 152px;
      }
    }
  }
}
</style>
