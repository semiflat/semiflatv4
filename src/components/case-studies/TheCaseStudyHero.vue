<script setup lang="ts">
import type { Image } from '../common/AppImage.vue'

interface HeroButton {
  href: string
  label: string
  isTargetBlank?: boolean
  isText?: boolean
}

interface DetailsCard {
  iconUrl: string
  title: string
  value: string
}

const props = defineProps<{
  buttons: HeroButton[]
  description: string
  details: DetailsCard[]
  image: Image
  title: string
}>()
</script>

<template>
  <div class="case-study-hero">
    <div class="case-study-hero__inner page-content">
      <div class="case-study-hero__text">
        <h1 class="case-study-hero__title">
          {{ props.title }}
        </h1>
        <p v-if="props.description" class="case-study-hero__lead">
          {{ props.description }}
        </p>
      </div>

      <div v-if="props.buttons && props.buttons.length" class="case-study-hero__buttons">
        <AppButton
          v-for="button in props.buttons"
          :key="button.href"
          :href="button.href"
          :text="button.isText"
          :target="button.isTargetBlank ? '_blank' : ''"
          >{{ button.label }}</AppButton
        >
      </div>

      <div class="case-study-hero__image-wrapper">
        <AppImage class="case-study-hero__image" v-bind="props.image" />
      </div>

      <ul class="case-study-hero__details">
        <li v-for="card in details" :key="card.title">
          <AppDetailsCard v-bind="card" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">

@keyframes fadein {
  to {
    opacity: 1;
  }
}

.case-study-hero {
  margin-top: 3.5rem;
  background: #fff;
  color: #000;

  @media (min-width: 768px) {
    margin-top: 7.5rem;
    text-align: center;
  }

  &__inner {
    position: relative;
    z-index: 1;
  }

  // relative to .layout
  &::before {
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    left: 75vw;
    top: -40vw;
    filter: blur(32vw);
    background: var(--accent-color-light);

    @media (min-width: 768px) {
      width: 20vw;
      height: 20vw;
      left: 85vw;
      top: -5vw;
      filter: blur(14vw);
    }
  }

  // relative to .layout
  &::after {
    content: '';
    position: absolute;
    width: 450px;
    height: 450px;
    right: 40vw;
    top: -50vw;
    filter: blur(32vw);
    background: var(--accent-color-light);

    @media (min-width: 768px) {
      width: 50vw;
      height: 50vw;
      right: 78vw;
      top: 15rem;
      filter: blur(16vw);
    }
  }

  &__logo {
    display: none;

    @media (min-width: 768px) {
      display: block;
      margin: 0 auto 4rem;
      width: 10rem;
      height: 3rem;
      object-fit: contain;
      object-position: center;
    }
  }

  &__text {
    max-width: 48rem;
    margin: 0 auto;

    @media (min-width: 768px) and (max-width: 1039px) {
      max-width: 40rem;
    }
  }

  &__lead {
    margin: 1.5rem 0 0;
    font-size: 1rem;
    line-height: 1.5;
  }

  &__title {
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1.2;

    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }

  &__buttons {
    display: inline-flex;
    gap: 0.5rem;
    margin-top: 2.5rem;

    @media (min-width: 768px) {
      gap: 1rem;
    }
  }

  &__image-wrapper {
    width: 100%;
    min-width: 520px;
    aspect-ratio: 1104 / 688;
    margin: 5rem 0 0 2rem;
    border-radius: 12px;
    border: 1px solid var(--accent-color-light);
    overflow: hidden;
    opacity: 0;
    animation: fadein 1.2s .5s forwards;

    @media (min-width: 475px) {
      margin-left: 0;
      min-width: 0;
      width: 100%;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (min-width: 1200px) {
      display: block;
      width: 1104px; // hack for crispy png
    }
  }

  &__details {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    grid-gap: 1.5rem;
    margin-top: 3rem;

    @media (min-width: 768px) {
      grid-gap: 2rem;
      margin-top: 5rem;
    }
  }
}
</style>
