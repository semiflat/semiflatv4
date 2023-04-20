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
      <AppButton class="service-card__cta" :disabled="!cta.href" :href="cta.href">
        {{ cta.label }}
      </AppButton>
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
    @media (min-width: 768px) {
      text-align: right;
    }
  }

  &__cta {
    background: white;
    color: var(--accent-color-dark);

    &[disabled] {
      opacity: 0.5;
    }
  }
}
</style>
