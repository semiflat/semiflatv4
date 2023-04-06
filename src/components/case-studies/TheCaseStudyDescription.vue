<script setup lang="ts">
interface CaseStudyDescriptionSection {
  title: string
  lead: string
  body?: any
}


const props = defineProps<{
  sections: CaseStudyDescriptionSection[]
}>()
</script>

<template>
  <div class="case-study-description">
    <div v-for="section in props.sections" class="case-study-description__section">
      <div class="case-study-description__section-header">
        <h2 class="case-study-description__section-title">
          {{ section.title }}
        </h2>
        <p class="case-study-description__section-lead">{{ section.lead }}</p>
      </div>
      <div class="case-study-description__section-body">
        <div v-html="section.body"></div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.case-study-description {
  &__section {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
    padding: 2rem 0;
    border-bottom: 1px solid var(--accent-color-light);

    &:first-of-type {
      padding-top: 0;
    }

    &:last-of-type {
      padding-bottom: 0;
      border: none;
    }

    @media (min-width: 1040px) {
      padding: 5rem 0;
      margin: 0 2.5rem;
      grid-template-columns: 1fr 1fr;
      grid-gap: 120px;
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

    &:deep(p:not(:last-of-type)) {
      margin-bottom: 2rem;
    }
  }
}
</style>
