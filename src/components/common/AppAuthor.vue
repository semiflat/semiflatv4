<script setup lang="ts">
export interface Author {
  name: string
  role: string
  imageUrl: string
}

const props = defineProps<Author>()
</script>

<template>
  <div class="author">
    <img class="author__image" :src="props.imageUrl" :alt="props.name" />
    <div class="author__details">
      <p class="author__name">{{ props.name }}</p>
      <p class="author__role">{{ props.role }}</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.author {
    display: flex;
    gap: 1em;
    text-align: left;

    &__image {
        width: 3em;
        aspect-ratio: 1 / 1;
        border-radius: 100%;
        flex-shrink: 0;
    }

    &__name {
        font-weight: 600;
    }
}
</style>
