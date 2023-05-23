<script setup lang="ts">
interface CaseStudyDescriptionSection {
  title: string
  lead: string
  body?: any
  isPrimary?: boolean
}

defineProps<{
  data: CaseStudyDescriptionSection
}>()
</script>

<template>
  <div class="long-text-section" :class="{ 'long-text-section--primary': !!data.isPrimary }">
    <div class="long-text-section__section-header">
      <div class="long-text-section__section-header-inner">
        <h2 class="long-text-section__section-title">
          {{ data.title }}
        </h2>
        <p class="long-text-section__section-lead">{{ data.lead }}</p>
      </div>
    </div>
    <div class="long-text-section__section-body">
      <div v-if="data.body" v-html="data.body"></div>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.long-text-section {
  $block: &;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;

  &--primary {
    #{$block} {
      &__section-title {
        color: #002832;
      }

      &__section-lead,
      &__section-body {
        color: #577578;
      }
    }
  }

  @media (min-width: 1040px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 120px;
  }

  &__section-header-inner {
    @media (min-width: 1040px) {
      position: sticky;
      top: 2rem;
    }
  }

  &__section-title {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 600;

    @media (min-width: 1040px) {
      font-size: 1.75rem;
    }
  }

  &__section-lead,
  &__section-body {
    color: #545959;
  }

  &__section-body {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;

    @media (min-width: 1040px) {
      grid-gap: 3rem;
    }

    &:deep(p:not(:last-of-type)) {
      margin-bottom: 2rem;
    }
  }
}
</style>
