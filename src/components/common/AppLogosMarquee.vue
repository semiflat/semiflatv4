<script setup lang="ts">
import type { Component } from 'vue'

const props = defineProps<{ items: Component[] }>()
</script>

<template>
  <div class="logos-marquee">
    <div v-for="i in 2" :key="i" class="logos-marquee__inner">
      <component
        v-for="logo in props.items"
        :is="logo"
        class="logos-marquee__logo"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes marquee {
  to {
    transform: translateX(-100%);
  }
}
.logos-marquee {
  max-width: 100rem;
  margin: 0 auto;
  display: flex;
  overflow: hidden;
  mask-image: linear-gradient(
    270deg,
    rgba(242, 242, 242, 0) 0%,
    rgba(245, 245, 245, 1) 15%,
    rgba(255, 255, 255, 1) 50%,
    rgba(244, 244, 244, 1) 85%,
    rgba(242, 242, 242, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    270deg,
    rgba(242, 242, 242, 0) 0%,
    rgba(245, 245, 245, 1) 15%,
    rgba(255, 255, 255, 1) 50%,
    rgba(244, 244, 244, 1) 85%,
    rgba(242, 242, 242, 0) 100%
  );

  &__inner {
    display: flex;
    flex: 0 0 auto;
    animation: marquee 90s linear infinite;

    @media (min-width: 768px) {
      animation-duration: 130s;
    }
  }

  &__logo {
    flex-shrink: 0;
    width: 180px;
    object-fit: contain;

    @media (min-width: 768px) {
      width: 240px;
    }
  }
}
</style>
