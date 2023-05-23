<script lang="ts" setup>
import type { LinkCard } from '../common/AppLinkCard.vue';

defineProps<{
  cards: LinkCard[]
}>()
</script>

<template>
  <div class="work-clients">
    <AppLinkCard v-for="card in cards" :key="card.title" v-bind="card" />
  </div>
</template>

<style lang="scss">
.work-clients {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 2rem;
}
</style>
