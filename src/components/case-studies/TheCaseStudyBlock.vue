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
    height: 0;
    background: var(--gradient-color);
  }

  &--decor-top-right,
  &--decor-bottom-right {
    &::before {
      width: 450px;
      height: 450px;
      right: auto;
      left: 70vw;
      top: -10vw;
      filter: blur(32vw);
  

      @media (min-width: 768px) {
        width: 45vw;
        height: 45vw;
        left: 80vw;
        filter: blur(16vw);
      }
    }
  }

  &--decor-bottom-right {
    &::before {
      top: 120%;
      left: 80vw;
      opacity: .8;


      @media (min-width: 768px) {
        top: 70%;
      }
    }
  }

  &--decor-top-left {
    &::before {
      @media (min-width: 768px) {
        width: 20vw;
        height: 20vw;
        top: -3vw;
        right: 82vw;
        left: auto;
        filter: blur(14vw);
      }
    }
  }

  &--decor-middle-left {
    &::before {
      width: 450px;
      height: 450px;
      right: 92vw;
      left: auto;
      top: 20vw;
      filter: blur(32vw);
  

      @media (min-width: 768px) {
        width: 45vw;
        height: 45vw;
        right: 86vw;
        filter: blur(16vw);
      }
    }
  }

  &__inner {
    position: relative;
    z-index: 1;
  }
}
</style>
