<script lang="ts" setup>
import type { LargeCard } from '../common/AppLargeCard.vue';

defineProps<{
  cards: LargeCard[]
}>()
</script>

<template>
  <div class="work-info-cards">
    <AppLargeCard v-for="card in cards" :key="card.title" :data="card" />
  </div>
</template>

<style lang="scss">
.work-info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 2rem;
}
</style>
