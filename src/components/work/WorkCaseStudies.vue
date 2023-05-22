<script lang="ts" setup>
import type { CaseStudyCard } from '../common/AppCaseStudyCard.vue'

interface WorkCaseStudies {
  title: string
  cards: CaseStudyCard[]
}

defineProps<{
  data: WorkCaseStudies
}>()
</script>

<template>
  <div class="work-case-studies">
    <h2 class="work-case-studies__title gradient-text">
      {{ data.title }}
    </h2>
    <AppCaseStudyGrid :cards="data.cards" />
  </div>
</template>

<style lang="scss">
.work-case-studies {
  &__title {
    margin-bottom: 2rem;
    font-size: 1rem;
    font-weight: 600;

    @media (min-width: 768px) {
      max-width: 40ch;
      margin: 0 auto 5rem;
      font-size: 1.75rem;
      text-align: center;
    }
  }
}
</style>
