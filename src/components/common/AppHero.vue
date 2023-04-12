<script setup lang="ts">
interface HeroButton {
  href: string
  label: string
  isTargetBlank?: boolean
  isText?: boolean
}

const props = defineProps<{
  title: string
  description?: string
  buttons?: HeroButton[]
}>()
</script>

<template>
  <div class="hero">
    <div class="hero__inner page-content">
      <h1 class="hero__title">
        {{ props.title }}
      </h1>
      <p v-if="props.description" class="hero__lead mt-6 text-blue-200">
        {{ props.description }}
      </p>

      <div v-if="props.buttons && props.buttons.length" class="hero__buttons">
        <AppButton
          v-for="button in props.buttons"
          :key="button.href"
          :href="button.href"
          :text="button.isText"
          :target="button.isTargetBlank ? '_blank' : ''"
          >{{ button.label }}</AppButton
        >
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  margin-top: 3.5rem;

  @media (min-width: 768px) {
    margin-top: 10rem;
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
    background: #96ebd6;

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
    background: rgba(#c9f7e8, 0.8);

    @media (min-width: 768px) {
      width: 50vw;
      height: 50vw;
      right: 78vw;
      top: 15rem;
      filter: blur(16vw);
    }
  }

  &__lead {
    font-size: 1rem;
    line-height: 1.5;
    margin-left: auto;
    margin-right: auto;
    max-width: 80ch;
  }

  &__title {
    font-size: 1.75rem;
    font-weight: 700;
    line-height: 1.2;
    background: linear-gradient(225deg, #407a7a 0%, #002832 100%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;

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
}
</style>
