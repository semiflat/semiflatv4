<script setup lang="ts">
import ArrowRight from '~/assets/icons/arrow-right.svg?component'

export interface LinkCard {
  iconUrl: string
  title: string
  description: string
  url?: string
}

defineProps<LinkCard>()
</script>

<template>
  <div class="link-card">
    <div class="link-card__header">
      <img class="link-card__image" :src="iconUrl" loading="lazy" />
      <a v-if="url" class="link-card__link" :href="url" target="_blank" rel="noopener nofollow">
        <h3 class="link-card__title">{{ title }}</h3>
        <ArrowRight class="link-card__arrow" />
      </a>
      <div v-else class="link-card__link">
        <h3 class="link-card__title">{{ title }}</h3>
      </div>
    </div>

    <p class="link-card__description">{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.link-card {
  $block: &;

  position: relative;
  padding: 1.5rem;
  color: #577578;
  font-size: 1rem;

  &__header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  &__image {
    display: block;
    height: 2.5rem;
    aspect-ratio: 1 / 1;
    object-fit: contain;
    object-position: center;
  }

  &__title {
    font-weight: 600;
    color: #002832;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid var(--accent-color-light);
      border-radius: 1rem;
    }
  }

  &__arrow {
    transition: transform 0.3s ease-in-out;
  }

  @media (hover: hover) {
    &__link {
      &::before {
        border-color: transparent;
      }

      &:hover {
        &::before {
          border-color: var(--accent-color-light);
        }

        #{$block}__arrow {
          opacity: 1;
          transform: translateX(0.1em);
        }
      }
    }

    &__arrow {
      opacity: 0;
      transform: translateX(-0.1em);
    }
  }
}
</style>
