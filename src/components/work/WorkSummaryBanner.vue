<script lang="ts" setup>
import type { Component } from 'vue'

interface WorkSummaryBannerItem {
  icon?: Component | string
  text: string
}

interface WorkSummaryBanner {
  title: string
  list: WorkSummaryBannerItem[]
}

defineProps<{
  data: WorkSummaryBanner
}>()
</script>

<template>
  <div class="work-summary-banner">
    <h2 class="work-summary-banner__title">{{ data.title }}</h2>
    <ul class="work-summary-banner__list">
      <div class="rockets rockets--horizontal"></div>
      <div class="rockets rockets--vertical"></div>
      <li v-for="item in data.list" :key="item.text" class="work-summary-banner__list-item">
        <component class="work-summary-banner__icon" :is="item.icon" />
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.work-summary-banner {
  @include card;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2.5rem 1.5rem;

  @media (min-width: 768px) {
    padding: 3.5rem 0;
  }

  @media (min-width: 1040px) {
    padding: 3.5rem 2.5rem;
  }

  &__title {
    width: 100%;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 600;
    text-align: left;

    @media (min-width: 768px) {
      margin-bottom: 2.5rem;
      font-size: 1.75rem;
      text-align: center;
    }
  }

  &__list {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 0;
    }

    @media (min-width: 1040px) {
      gap: 2rem;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 1px;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        var(--accent-color-medium) 30% 70%,
        rgba(255, 255, 255, 0)
      );
      opacity: 0.8;
    }

    &::after {
      top: calc(100% - 1px);
      width: 100%;
    }

    @media (max-width: 1039px) {
      &::after,
      &::before {
        display: none;
      }
    }
  }

  &__list-item {
    flex: 1 1 0;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    font-weight: 600;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 1px;
      height: calc(100% + 5rem);
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        var(--accent-color-medium) 30% 70%,
        rgba(255, 255, 255, 0)
      );
    }

    &::after {
      left: auto;
      right: 0;
    }

    @media (max-width: 1039px) {
      &::after,
      &::before {
        display: none;
      }
    }

    &:first-of-type {
      &::before {
        display: none;
      }
    }

    &:last-of-type {
      &::after {
        display: none;
      }
    }

    @media (min-width: 768px) {
      align-items: center;
      text-align: center;
    }
  }

  &__icon {
    display: block;
    width: 2rem;
    aspect-ratio: 1 / 1;
    stroke: currentColor;

    &:deep(path) {
      stroke: currentColor;
    }
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
      transform: translateY(180px);
      opacity: 0;
    }

    100% {
      transform: translateY(180px);
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

    @media (max-width: 1039px) {
      &::after,
      &::before {
        display: none;
      }
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
      right: 22.5%;
      top: 0;
      transform: translateY(-200%);
      background: linear-gradient(to bottom, rgba(72, 27, 151, 0) 0%, $rockets-color 100%);
      animation: rocket-to-bottom 6s $easing infinite;
      animation-delay: 2s;
    }

    // left, to bottom
    &::after {
      left: calc(45% + 2.1rem);
      top: 0;
      transform: translateY(-200%);
      background: linear-gradient(to bottom, rgba(72, 27, 151, 0) 0%, $rockets-color 100%);
      animation: rocket-to-bottom 6s $easing infinite;
      animation-delay: 4s;
    }

    @media (max-width: 1039px) {
      &::after,
      &::before {
        display: none;
      }
    }
  }
}
</style>
