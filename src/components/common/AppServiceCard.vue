<script lang="ts" setup>
export interface CTA {
  label: string
  href?: string
}

export interface ServiceCard {
  title: string
  description: string
  cta: CTA
}

const props = defineProps<ServiceCard>()
</script>

<template>
  <div class="service-card">
    <div class="service-card__text-wrapper">
      <h2 class="service-card__title">{{ props.title }}</h2>
      <p class="service-card__description">{{ props.description }}</p>
    </div>
    <div class="service-card__cta-wrapper">
      <div class="rockets rockets--horizontal" />
      <div class="service-card__cta">
        <div class="rockets rockets--vertical" />
        <AppButton :disabled="!cta.href" :href="cta.href" secondary>
          {{ cta.label }}
        </AppButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.service-card {
  @include card;

  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: 1fr;
  padding: 2rem 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem 3rem;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  @media (min-width: 1040px) {
    padding: 4rem 5rem;
  }

  &__title {
    margin-bottom: 1em;
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }

    @media (min-width: 1040px) {
      margin-bottom: 1.5rem;
      font-size: 1.75rem;
    }
  }

  &__description {
    opacity: 0.72;
  }

  &__cta-wrapper {
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -64px;
      width: calc(100% + 96px);
      height: 1px;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        var(--accent-color-medium) 20% 80%,
        rgba(255, 255, 255, 0)
      );
      opacity: 0.8;
    }

    &::after {
      top: 100%;
    }

    @media (min-width: 768px) {
      text-align: right;

      &::before {
        left: 5%;
      }

      &::after {
        left: 10%;
      }
    }
  }

  &__cta {
    position: relative;
    display: inline-block;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 1px;
      height: calc(100% + 80px);
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        var(--accent-color-medium) 45% 95%,
        rgba(255, 255, 255, 0)
      );
      opacity: 0.8;
    }

    &::after {
      left: 100%;
    }

    @media (min-width: 768px) {
      &::before,
      &::after {
        height: calc(100% + 160px);
        background: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0),
          var(--accent-color-medium) 40% 50%,
          rgba(255, 255, 255, 0)
        );
      }
    }

    @media (min-width: 1040px) {
      &::before,
      &::after {
        height: calc(100% + 240px);
      }
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
      transform: translateX(clamp(-400px, -30vw, -100px));
      opacity: 0;
    }

    100% {
      transform: translateX(clamp(-400px, -30vw, -100px));
      opacity: 0;
    }
  }

  @keyframes rocket-to-right {
    0% {
      transform: translateX(-150%);
      opacity: 0;
    }

    1% {
      opacity: 1;
    }

    20% {
      transform: translateX(clamp(320px, 50vw, 960px));
      opacity: 0;
    }

    100% {
      transform: translateX(clamp(320px, 50vw, 960px));
      opacity: 0;
    }
  }

  @keyframes rocket-to-bottom {
    0% {
      transform: translateY(-150%);
      opacity: 0;
    }

    1% {
      opacity: 1;
    }

    20% {
      transform: translateY(clamp(60px, 10vw, 120px));
      opacity: 0;
    }

    100% {
      transform: translateY(clamp(60px, 10vw, 100px));
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
      animation: rocket-to-left 6s $easing infinite;
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
  }

  &--vertical {
    &::before,
    &::after {
      width: 1px;
      height: $rockets-size;
    }

    // right, to bottom
    &::before {
      right: 0;
      top: 0;
      transform: translateY(-150%);
      background: linear-gradient(to bottom, rgba(72, 27, 151, 0) 0%, $rockets-color 100%);
      animation: rocket-to-bottom 4s $easing infinite;
      animation-delay: 2s;
    }

    // left, to bottom
    &::after {
      left: 0;
      top: 0;
      transform: translateY(-150%);
      background: linear-gradient(to bottom, rgba(72, 27, 151, 0) 0%, $rockets-color 100%);
      animation: rocket-to-bottom 4s $easing infinite;
      animation-delay: 4s;
    }
  }
}
</style>
