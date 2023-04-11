<script setup lang="ts">
export interface NumberedListItem {
  title: string
  description: string
}

const props = defineProps<{
  items: NumberedListItem[]
}>()
</script>

<template>
  <ol class="numbered-list">
    <li class="numbered-list__item" v-for="item in props.items" :key="item.title">
      <h3 class="numbered-list__title">{{ item.title }}</h3>
      <p class="numbered-list__description">{{ item.description }}</p>
    </li>
  </ol>
</template>

<style lang="scss" scoped>
.numbered-list {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  &__item {
    counter-increment: my-counter;

    &::before {
      content: counter(my-counter);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2em;
      height: 2em;
      margin-bottom: 1em;
      border-radius: 100%;
      background: var(--accent-color-dark);
      color: white;
    }
  }

  &__title {
    margin-bottom: 0.5em;
    font-weight: 600;
    color: #000;
  }

}
</style>
