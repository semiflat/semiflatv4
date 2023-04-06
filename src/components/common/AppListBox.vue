<script setup lang="ts">
import type { Component } from 'vue'

interface ListBoxItem {
  icon: Component
  title: string
  description: string
}

const props = defineProps<{
  imageUrl: string
  list: ListBoxItem[]
  title: string
}>()
</script>
<template>
  <div class="list-box">
    <div class="list-box__text-wrapper">
      <h2 class="list-box__title">
        {{ props.title }}
      </h2>
      <ul class="list-box__list">
        <li v-for="item in list" :key="item.title" class="list-item">
          <div class="list-item__header">
            <component :is="item.icon" class="list-item__icon" />
            <h3 class="list-item__title">{{ item.title }}</h3>
          </div>
          <p class="list-item__description">{{ item.description }}</p>
        </li>
      </ul>
    </div>
    <div class="list-box__image-wrapper">
      <img class="list-box__image" :src="imageUrl" alt="" loading="lazy" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$bg-color: #{var(--accent-color-dark)};
.list-box {
  border-radius: 24px;
  overflow: hidden;
  background: radial-gradient(
      63.24% 50% at 50% 0%,
      rgba(255, 255, 255, 0.48) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    $bg-color;
  background-blend-mode: overlay, normal;
  color: white;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: auto 632px;
    align-items: center;
  }

  &__text-wrapper {
    padding: 2rem 1.5rem 0;

    @media (min-width: 768px) {
      padding: 3rem 0 4rem 3rem;
    }

    @media (min-width: 1200px) {
      padding: 4rem 0 4rem 5rem;
    }
  }

  &__title {
    margin-bottom: 1em;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.5;

    @media (min-width: 768px) {
      margin-bottom: 2.5rem;
      font-size: 1.75rem;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
  }

  &__image {
    width: 120%;
    margin-left: -10%;

    @media (min-width: 768px) {
      width: 100%;
      margin: 0;
    }
  }
}

.list-item {
  &__header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
  }

  &__icon {
    display: block;
    width: 1.5rem;
    aspect-ratio: 1 / 1;
  }

  &__description {
    opacity: 0.8;
  }
}
</style>
