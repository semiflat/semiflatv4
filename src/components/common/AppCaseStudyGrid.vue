<script lang="ts" setup>
import type { CaseStudyCard } from './AppCaseStudyCard.vue'
// withDefaults(
defineProps<{
  cards: CaseStudyCard[]
}>()
</script>

<template>
  <div class="case-study-grid">
    <ul class="case-study-grid__list">
      <li class="case-study-grid__card" v-for="card in cards">
        <AppCaseStudyCard :data="card" />
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.case-study-grid {
  &__list {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(12, 1fr);

      > * {
        grid-column: span 5;

        &:nth-child(2),
        &:nth-child(3),
        &:nth-child(6),
        &:nth-child(7),
        &:nth-child(10),
        &:nth-child(11) {
          grid-column: span 7;
        }
      }
    }
  }
}
</style>
