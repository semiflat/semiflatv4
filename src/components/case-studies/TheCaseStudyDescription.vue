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
    <AppLongTextSection
      v-for="(section, index) in props.sections"
      :key="index"
      :data="section"
      class="case-study-description__section"
    >
      <slot :name="`section-${index + 1}`"></slot>
    </AppLongTextSection>
  </div>
</template>

<style lang="scss" scoped>
.case-study-description {
  &__section {
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
    }
  }
}
</style>
