<script setup lang="ts">
const props = defineProps<{
  iconUrl: string
  title: string
  value: string
}>()
</script>

<template>
  <div class="details-card">
    <img class="details-card__icon" :src="props.iconUrl" loading="lazy" />
    <p class="details-card__value">{{ props.value }}</p>
    <p class="details-card__title">{{ props.title }}</p>
  </div>
</template>

<style lang="scss" scoped>
.details-card {
  padding: 2rem 1rem;
  border: 1px solid var(--accent-color-light);
  border-radius: 16px;
  font-size: 1rem;
  text-align: center;

  &__icon {
    display: block;
    height: 4rem;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__value {
    margin-top: 1.5rem;
    font-weight: 600;

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }

  &__title {
    opacity: 0.6;
  }
}
</style>
