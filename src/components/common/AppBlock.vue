<script setup lang="ts">
const props = defineProps<{
  decor?: string
  title?: string
}>()
</script>

<template>
  <section class="block" :class="{ [`block--decor-${props.decor}`]: !!props.decor }">
    <div class="block__inner">
      <h2 v-if="title" class="block__title gradient-text">
        {{ title }}
      </h2>
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.block {
  @include section;

  &__inner {
    position: relative;
    z-index: 1;
  }

  &__title {
    margin-bottom: 2rem;
    font-size: 1rem;
    font-weight: 600;

    @media (min-width: 768px) {
      max-width: 40ch;
      margin: 0 auto 5rem;
      font-size: 1.75rem;
      text-align: center;
    }
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background: radial-gradient(
      rgba(var(--gradient-rgb), 0.5),
      rgba(var(--gradient-rgb), 0),
      rgba(255, 255, 255, 0)
    );
  }

  &--decor-top-right,
  &--decor-middle-right,
  &--decor-bottom-right {
    &::before {
      left: 30vw;
      top: -50vw;
      width: 160vw;

      @media (min-width: 768px) {
        top: -40vw;
        left: 45vw;
        width: 120vw;
      }
    }
  }

  &--decor-middle-right {
    &::before {
      top: 25%;
      left: 50vw;
    }
  }

  &--decor-bottom-right {
    &::before {
      top: 0;
      left: 50vw;
    }
  }

  &--decor-top-left {
    &::before {
      @media (min-width: 768px) {
        top: -35vw;
        right: 60vw;
        width: 100vw;
        height: 100vw;
        opacity: 0.9;
      }
    }
  }

  &--decor-middle-left {
    &::before {
      width: 200vw;
      right: 20vw;
      left: auto;
      top: 0;

      @media (min-width: 768px) {
        top: -40vw;
        width: 150vw;
        right: 30vw;
      }
    }
  }
}
</style>
