<script setup lang="ts">
const props = defineProps<{
  decor?: string
}>()
</script>

<template>
  <div
    class="case-study-block"
    :class="{ [`case-study-block--decor-${props.decor}`]: !!props.decor }"
  >
    <div class="case-study-block__inner page-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.case-study-block {
  position: relative;
  padding-top: 3rem;

  @media (min-width: 768px) {
    padding-top: 8rem;
  }

  @media (min-width: 1040px) {
    padding-top: 10rem;
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
        opacity: .9;
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

  &__inner {
    position: relative;
    z-index: 1;
  }
}
</style>
