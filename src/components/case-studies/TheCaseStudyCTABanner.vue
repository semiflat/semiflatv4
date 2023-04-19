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
      <AppImage class="cta-banner__image" v-bind="props.image" />
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
    position: relative;
    padding-top: clamp(2.5rem, 7vw, 5rem);
    padding-left: 1.5rem;
    align-self: flex-end;

    @media (min-width: 768px) {
      padding-left: clamp(2rem, 10vw, 8rem);
    }

    @media (min-width: 1040px) {
      // rockets
      $easing: cubic-bezier(0.5, 1, 0.89, 1);
      $rockets-color: #fff;
      $rockets-size: 80px;

      @keyframes rocket-to-left {
        0% {
          transform: translateX(100vw);
          opacity: 0;
        }

        5% {
          opacity: 1;
        }

        40% {
          opacity: 1;
        }

        50% {
          transform: translateX(-560px);
          opacity: 0;
        }

        100% {
          transform: translateX(-560px);
          opacity: 0;
        }
      }

      @keyframes rocket-to-top {
        0% {
          transform: translateY(100vh);
          opacity: 0;
        }

        5% {
          opacity: 1;
        }

        30% {
          opacity: 1;
        }

        50% {
          transform: translateY(-500px);
          opacity: 0;
        }

        100% {
          transform: translateY(-500px);
          opacity: 0;
        }
      }

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

      &::before {
        height: 1px;
        width: $rockets-size;
        right: 0;
        top: calc(clamp(2.5rem, 7vw, 5rem) - 1px);
        background: linear-gradient(to left, rgba(72, 27, 151, 0) 0%, $rockets-color 100%);
        transform: translateX(100vw);
        animation: rocket-to-left 4s $easing infinite;
        animation-delay: 2s;
      }

      &::after {
        width: 1px;
        height: $rockets-size;
        left: calc(clamp(2rem, 10vw, 8rem) - 1px);
        bottom: 0;
        transform: translateY(100vh);
        background: linear-gradient(to top, rgba(72, 27, 151, 0) 0%, $rockets-color 100%);
        animation: rocket-to-top 4s $easing infinite;
      }
    }
  }

  &__image {
    position: relative;

    &:deep(img) {
      position: relative;
      z-index: 1;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
    }

    &::before {
      top: -1px;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% + 72px);
      height: 1px;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        var(--accent-color-medium) 7% 93%,
        rgba(255, 255, 255, 0)
      );
    }

    &::after {
      top: 50%;
      left: -1px;
      transform: translateY(-50%);
      height: calc(100% + 72px);
      width: 1px;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        var(--accent-color-medium) 7% 93%,
        rgba(255, 255, 255, 0)
      );
    }

    @media (min-width: 768px) {
      &::before {
        width: 150%;
      }

      &::after {
        height: 160%;
      }
    }
  }

  &__button {
    background: white;
    color: black;

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
