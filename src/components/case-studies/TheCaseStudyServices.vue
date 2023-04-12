<script setup lang="ts">
import type { FeatureCard } from '../common/AppFeatureCard.vue'

const props = defineProps<{
  title: string
  services: FeatureCard[]
}>()
</script>

<template>
  <div class="case-study-services">
    <h2 class="case-study-services__title">{{ props.title }}</h2>
    <ul class="case-study-services__list">
      <li v-for="item in props.services" :key="item.title" class="case-study-services__card">
        <AppFeatureCard v-bind="item" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.case-study-services {
  &__title {
    max-width: 42ch;
    margin: 0 auto 2rem;
    font-size: 1.25rem;
    font-weight: 600;

    @media (min-width: 768px) {
      margin-bottom: 4rem;
      font-size: 28px;
      text-align: center;
    }

    @media (min-width: 1024px) {
      margin-bottom: 6rem;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 2rem;

    @media (min-width: 768px) {
      grid-gap: 3rem;
    }

    @media (min-width: 1024px) {
      grid-gap: 5rem;
    }
  }
}
</style>
