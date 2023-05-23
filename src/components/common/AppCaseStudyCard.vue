<script lang="ts" setup>
import type { Component } from 'vue'

export interface CaseStudyCard {
  background?: Component
  picture: string
  caption: string
  link?: string
}
defineProps<{
  data?: CaseStudyCard
}>()
</script>

<template>
  <div
    class="case-study-card"
    :class="{ 'case-study-card--clickable': !!data?.link }"
  >
    <div class="case-study-card__image-wrapper">
      <div class="case-study-card__image-bg">
          <component v-if="data?.background" :is="data?.background"  />
      </div>
    
      <img :src="data?.picture" class="case-study-card__image" loading="lazy" />
    </div>

    <div class="case-study-card__text-wrapper">
      <a v-if="data?.link" class="case-study-card__link" :href="data.link">
        <h3 class="case-study-card__title">
          {{ data?.caption }}
        </h3>
        <div class="case-study-btn-wrapper">
          <span class="case-study-btn">Read Case study</span>
        </div>
      </a>
      <template v-else>
        <h3 class="case-study-card__title">
          {{ data?.caption }}
        </h3>
        <p class="case-study-card__subtitle">Coming Soon</p>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.case-study-card {
  $block: &;

  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid var(--accent-color-light);
  border-radius: 1.5rem;

  @media (hover: hover) {
    &--clickable {
      &:hover {
        #{$block}__image-bg {
          opacity: 1;
        }

        .case-study-btn-wrapper::after {
          transform: none;
        }

        .case-study-btn {
          background-position: 75% 100%;
          padding: 0 5px;
        }
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
    margin-bottom: 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.5;
    color: var(--accent-color-dark);

    @media (min-width: 1200px) {
      font-size: 1.25rem;
    }
  }

  &__subtitle {
    color: var(--accent-color-light);
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5;

    @media (min-width: 1200px) {
      font-size: 1rem;
    }
  }

  &__link {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      cursor: pointer;
    }
  }
}

.case-study-btn-wrapper {
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  /* identical to box height, or 175% */
  /* Content/Accent */
  display: inline-flex;
  position: relative;
}
.case-study-btn-wrapper .case-study-btn {
  display: inline-block;
  background-image: linear-gradient(86.76deg, #407a7a, #54aba3, #fff, #fff, #fff);
  background-size: 400% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  transition: 0.75s all;
  z-index: 2;
}
.case-study-btn-wrapper::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(86.76deg, #407a7a 0%, #54aba3 100%);
  transform: translateY(0.8em) scaleY(0.1);
  transition: 0.2s all;
}

.case-study-btn-wrapper:hover::after {
  transform: none;
}
</style>
