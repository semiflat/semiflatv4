<script setup lang="ts">
import type { Component } from 'vue'

export interface FeatureCard {
  icon: Component
  title: string
  description: string
}

const props = defineProps<FeatureCard>()
</script>

<template>
  <div class="feature-card">
    <component :is="props.icon" class="feature-card__icon" />
    <h3 class="feature-card__title">{{ props.title }}</h3>
    <p class="feature-card__description">{{ props.description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.feature-card {
  &__icon {
    display: block;
    width: 2em;
    aspect-ratio: 1 / 1;
    margin-bottom: 1em;
    color: var(--accent-color-dark);
  }

  &__title {
    margin-bottom: 0.5em;
    color: #000;
    font-weight: 600;
  }

  &__description {
    color: #545959;
  }
}
</style>
