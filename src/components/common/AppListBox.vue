<script setup lang="ts">
import type { Component } from 'vue'
import type { Image } from './AppImage.vue'

interface ListBoxItem {
  icon: Component
  title: string
  description: string
}

const props = defineProps<{
  image: Image
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
      <div class="list-box__image-decor">
        <AppImage class="list-box__image" v-bind="props.image" />
      </div>
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

    @media (min-width: 1024px) {
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

    @media (min-width: 1040px) {
      grid-gap: 2rem;
    }
  }

  &__image-wrapper {
    padding: 2.5rem 1.5rem;

    @media (min-width: 768px) {
      padding: 5rem 3rem;
    }
  }

  &__image-decor {
    width: 100%;
    box-shadow: 0px 4px 12px -2px rgba(17, 24, 28, 0.12), 0px 1px 2px rgba(17, 24, 28, 0.16);

    @media (min-width: 768px) {
      position: relative;
      display: block;
      margin: 0 auto;
      max-width: 350px;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: -1px;
        left: 50%;
        transform: translateX(-50%);
        width: 150%;
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
    }
  }

  &__image {
    @media (min-width: 768px) {
      position: relative;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 1px;
        height: calc(100% + 184px);
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0),
          var(--accent-color-medium) 15% 85%,
          rgba(255, 255, 255, 0)
        );
      }

      &::after {
        left: auto;
        right: 0;
      }
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
