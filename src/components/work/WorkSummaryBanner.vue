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
      <li v-for="item in data.list" :key="item.text" class="work-summary-banner__list-item">
        <component class="work-summary-banner__icon" :is="item.icon" />
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.work-summary-banner {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2.5rem 1.5rem;
  border-radius: 24px;
  background: radial-gradient(
      63.24% 50% at 50% 0%,
      rgba(255, 255, 255, 0.48) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    var(--accent-color-dark);
  background-blend-mode: overlay, normal;
  color: white;
  font-size: 1rem;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 3.5rem 3rem;
  }

  &__title {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: 600;

    @media (min-width: 768px) {
      margin-bottom: 2.5rem;
      font-size: 1.75rem;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  &__list-item {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    font-weight: 600;

    @media (min-width: 768px) {
      align-items: center;
      text-align: center;
    }
  }

  &__icon {
    stroke: currentColor;

    &:deep(path) {
      stroke: currentColor;
    }
  }
}
</style>
