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
  @include hero-gradient();

  margin-top: 3.5rem;

  @media (min-width: 768px) {
    margin-top: 10rem;
    text-align: center;
  }

  &__inner {
    position: relative;
    z-index: 1;
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
