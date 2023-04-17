<script setup lang="ts">
interface CaseStudyCTACard {
  title: string
  description: string
  cta: any
}

const props = defineProps<CaseStudyCTACard>()
</script>

<template>
  <div class="cta-card">
    <h3 class="cta-card__title">
      {{ props.title }}
    </h3>
    <p class="cta-card__description">
      {{ props.description }}
    </p>
    <AppButton class="cta-card__button" :href="cta.href">
      {{ cta.label }}
    </AppButton>
  </div>
</template>

<style lang="scss" scoped>
.cta-card {
  $bg-color: #{var(--accent-color-dark)};

  padding: 2rem 1.5rem;
  border-radius: 16px;
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
    padding: 2.5rem;
  }

  &__title {
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }

  &__description {
    margin: 0.5rem 0 2rem;
  }

  &__button {
    background: white;
    color: black;
  }
}
</style>
