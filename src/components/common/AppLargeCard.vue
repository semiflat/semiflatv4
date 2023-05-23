<script lang="ts" setup>
import type { Component } from 'vue'

interface Button {
  href: string
  label: string
  isTargetBlank?: boolean
  isText?: boolean
}

export interface LargeCard {
  background?: Component
  picture: string
  title: string
  description: string
  button: Button
}
defineProps<{
  data: LargeCard
}>()
</script>

<template>
  <div class="large-card">
    <div class="large-card__image-wrapper">
      <div class="large-card__image-bg">
        <component v-if="data?.background" :is="data?.background" />
      </div>
      <img :src="data?.picture" class="large-card__image" />
    </div>
    <div class="large-card__text-wrapper">
      <h2 class="large-card__title">{{ data.title }}</h2>
      <p class="large-card__description">{{ data.description }}</p>
      <a
        class="large-card__button"
        :href="data.button.href"
        :target="data.button.isTargetBlank ? '_blank' : ''"
      >
        <AppButton secondary>
          {{ data.button.label }}
        </AppButton>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.large-card {
  $block: &;

  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid var(--accent-color-light);
  border-radius: 1.5rem;

  @media (hover: hover) {
    &:hover {
      #{$block}__image-bg {
        opacity: 1;
      }
    }
  }

  &__image-wrapper {
    position: relative;
  }

  &__image-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &__image {
    position: relative;
    z-index: 1;
    width: 100%;
  }

  &__text-wrapper {
    padding: 2rem 1.5rem;

    @media (min-width: 1200px) {
      padding: 2.5rem 3rem;
    }
  }

  &__title {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    color: var(--accent-color-dark);

    @media (min-width: 1200px) {
      font-size: 1.25rem;
    }
  }

  &__description {
    margin-bottom: 2rem;
    color: #577578;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;

    @media (min-width: 1200px) {
      margin-bottom: 2.5rem;
      font-size: 1rem;
    }
  }

  &__button {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }
  }
}
</style>
