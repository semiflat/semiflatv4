<script setup lang="ts">
import type { Image } from '../common/AppImage.vue'

interface CaseStudyCTABanner {
  title: string
  description: string
  buttons: any[]
  image: Image
}

const props = defineProps<CaseStudyCTABanner>()
</script>

<template>
  <div class="cta-banner">
    <div class="cta-banner__text-wrapper">
      <h3 class="cta-banner__title">
        {{ props.title }}
      </h3>
      <p class="cta-banner__description">
        {{ props.description }}
      </p>
      <div class="cta-banner__buttons">
        <AppButton
          v-for="cta in buttons"
          :key="cta.href"
          :href="cta.href"
          :text="cta.isText"
          :target="cta.isTargetBlank ? '_blank' : ''"
          class="cta-banner__button"
        >
          {{ cta.label }}
        </AppButton>
      </div>
    </div>
    <div class="cta-banner__image-wrapper">
      <AppImage v-bind="props.image" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cta-banner {
  $bg-color: #{var(--accent-color-dark)};

  border-radius: 16px;
  overflow: hidden;
  background: radial-gradient(
      63.24% 50% at 50% 0%,
      rgba(255, 255, 255, 0.48) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    $bg-color;
  background-blend-mode: overlay, normal;
  color: white;
  font-size: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  @media (min-width: 1200px) {
    grid-template-columns: auto 632px;
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
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  }

  &__description {
    margin: 1rem 0 2.5rem;

    @media (min-width: 768px) {
      margin-top: 1.5rem;
    }
  }

  &__image-wrapper {
    align-self: flex-end;
  }

  &__button {
    background: white;
    color: #002832;

    &.is-text {
      color: white;

      &:hover {
        color: white;
      }
    }
  }

  &__buttons {
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 0.5rem;
  }
}
</style>
