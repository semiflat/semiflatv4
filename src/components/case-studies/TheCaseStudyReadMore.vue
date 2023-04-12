<script lang="ts" setup>
import type { CaseStudyCard } from '../common/AppCaseStudyCard.vue'

const props = defineProps<{
  title: string
  cards: CaseStudyCard[]
}>()
</script>

<template>
  <div class="case-study-section">
    <h2 class="case-study-section__title">
      {{ props.title }}
    </h2>
    <ul class="case-study-section__list">
      <li class="case-study-section__card" v-for="el in props.cards">
        <AppCaseStudyCard :data="el" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.case-study-section {
  &__title {
    margin-bottom: 2rem;
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;

    @media (min-width: 768px) {
      margin-bottom: 3rem;
      font-size: 1.75rem;
    }

    @media (min-width: 1040px) {
      margin-bottom: 5rem;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    @media (min-width: 768px) {
      grid-template-columns: 7fr 5fr;
    }
  }

  &__card {
    &:not(:first-of-type) {
      @media (max-width: 767px) {
        display: none;
      }
    }
  }
}
</style>
