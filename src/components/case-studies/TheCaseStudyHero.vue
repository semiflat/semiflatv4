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
        <div class="rockets rockets--horizontal"></div>
        <div class="rockets rockets--vertical"></div>
        <div class="case-study-hero__image-decor">
          <AppImage class="case-study-hero__image" v-bind="props.image" />
        </div>
      </div>

      <ul class="case-study-hero__details">
        <li v-for="card in details" :key="card.title">
          <AppDetailsCard v-bind="card" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes fadein {
  to {
    opacity: 1;
  }
}
.case-study-hero {
  @include hero-gradient;

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
    max-width: calc(69rem + 2px); // crispy image hack
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
    position: relative;
    margin: 5rem 0 0 2rem;
    border-radius: 12px;
    opacity: 0;
    animation: fadein 1.2s 0.5s forwards;

    @media (min-width: 475px) {
      margin-left: 0;
      min-width: 0;
      width: 100%;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% + 64px);
      height: 1px;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        var(--accent-color-light) 7% 93%,
        rgba(255, 255, 255, 0)
      );
    }

    &::after {
      top: calc(100% - 1px);
    }

    @media (min-width: 768px) {
      &::before,
      &::after {
        width: calc(100% + 160px);
      }
    }
  }

  &__image-decor {
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: calc(100% + 64px);
      width: 1px;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        var(--accent-color-light) 9% 91%,
        rgba(255, 255, 255, 0)
      );
    }

    &::after {
      display: none;
      left: calc(100% - 1px);
    }

    @media (min-width: 475px) {
      &::after {
        display: block;
      }
    }

    @media (min-width: 768px) {
      &::before,
      &::after {
        height: calc(100% + 160px);
      }
    }
  }

  &__image {
    display: block;
    width: 100%;
    min-width: 520px;
    aspect-ratio: 1104 / 688;
    overflow: hidden;
    border-radius: 12px;
    border: 1px solid var(--accent-color-light);
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

.rockets {
  $easing: cubic-bezier(0.5, 1, 0.89, 1);
  $rockets-color: var(--accent-color-dark);
  $rockets-size: 80px;

  @keyframes rocket-to-left {
    0% {
      transform: translateX(120px);
      opacity: 0;
    }

    1% {
      opacity: 1;
    }

    20% {
      opacity: 1;
    }

    40% {
      transform: translateX(calc(clamp(-1100px, -90vw, -320px)));
      opacity: 0;
    }
  }

  @keyframes rocket-to-right {
    0% {
      transform: translateX(-120px);
      opacity: 0;
    }

    1% {
      opacity: 1;
    }

    20% {
      opacity: 1;
    }

    40% {
      transform: translateX(clamp(320px, 90vw, 1100px));
      opacity: 0;
    }
  }

  @keyframes rocket-to-bottom {
    0% {
      transform: translateY(-150%);
      opacity: 0;
    }

    5% {
      opacity: 1;
    }

    35% {
      opacity: 1;
    }

    50% {
      transform: translateY(clamp(270px, 48vw, 680px));
      opacity: 0;
    }
  }

  @keyframes rocket-to-top {
    0% {
      transform: translateY(150%);
      opacity: 0;
    }

    5% {
      opacity: 1;
    }

    35% {
      opacity: 1;
    }

    50% {
      transform: translateY(clamp(-680px, -48vw, -270px));
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
      transform: translateX(50vw);
      animation: rocket-to-left 3s $easing infinite;
      animation-delay: 1.5s;
    }

    // bottom, ltr
    &::after {
      left: 0;
      bottom: -1px;
      background: linear-gradient(to right, rgba(72, 27, 151, 0) 0%, $rockets-color 100%);
      transform: translateX(-50vw);
      animation: rocket-to-right 2.8s $easing infinite;
    }
  }

  &--vertical {
    &::before,
    &::after {
      width: 1px;
      height: $rockets-size;
    }

    // left, to bottom
    &::before {
      left: 0;
      top: 0;
      transform: translateY(-120px);
      background: linear-gradient(to bottom, rgba(72, 27, 151, 0) 0%, $rockets-color 100%);
      animation: rocket-to-bottom 1.8s $easing infinite;
      animation-delay: 0.9s;
    }

    // right, to top
    &::after {
      display: none;
      right: 0;
      bottom: 0;
      transform: translateY(120px);
      background: linear-gradient(to top, rgba(72, 27, 151, 0) 0%, $rockets-color 100%);
      animation: rocket-to-top 2s $easing infinite;
    }

    @media (min-width: 475px) {
      &::after {
        display: block;
      }
    }

    @media (min-width: 1024px) {
      &::before {
        animation-duration: 2.8s;
      }
    }
  }
}
</style>
