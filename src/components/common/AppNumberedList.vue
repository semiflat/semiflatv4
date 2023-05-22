<script setup lang="ts">
export interface NumberedListItem {
  title: string
  description: string
  label?: string
}

const props = defineProps<{
  items: NumberedListItem[]
  isLayoutCards?: boolean
  isPrimary?: boolean
}>()
</script>

<template>
  <ol
    class="numbered-list"
    :class="{ 'numbered-list--cards': !!isLayoutCards, 'numbered-list--primary': !!isPrimary }"
  >
    <li
      v-for="item in props.items"
      :key="item.title"
      class="numbered-list__item"
      :class="{ 'numbered-list__item--highlighted': !!item.label }"
    >
      <h3 class="numbered-list__title">{{ item.title }}</h3>
      <p class="numbered-list__description">{{ item.description }}</p>
      <span v-if="item.label" class="numbered-list__label">{{ item.label }}</span>
    </li>
  </ol>
</template>

<style lang="scss" scoped>
.numbered-list {
  $block: &;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  &--cards {
    #{$block}__item {
      padding: 1.5rem;

      @media (min-width: 1040px) {
        padding: 2rem;
      }
    }
  }

  &--primary {
    --accent-color-dark: #54aba3;
    color: #002832;

    #{$block} {
      &__title {
        color: currentColor;
      }

      &__description {
        color: #577578;
      }

      &__label {
        background: #C9F7E8;
      }
    }
  }

  &__item {
    position: relative;
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

    &--highlighted {
      border: 1px dashed var(--accent-color-light);
      border-radius: 1.5rem;

      &::before {
        background: transparent;
        color: currentColor;
        border: 1px solid var(--accent-color-dark);
      }
    }
  }

  &__title {
    margin-bottom: 0.5em;
    font-weight: 600;
    color: #000;
  }

  &__label {
    position: absolute;
    top: 2rem;
    right: 2rem;
    left: auto;
    display: inline-block;
    padding: .25rem .5rem;
    border-radius: .3rem;
    background: var(--accent-color-light);
    font-size: 0.75rem;
    line-height: 1.3;
  }
}
</style>
