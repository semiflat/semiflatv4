<script setup lang="ts">
import type { Component } from 'vue'

interface Testimonial {
  logo: Component
  text: string
  name: string
  position: string
  avatar: string
}
defineProps<{
  testimonial: Testimonial
}>()
</script>

<template>
  <div class="testimonial-card">
    <Component :is="testimonial.logo" class="testimonial-card__logo" />
    <p class="testimonial-card__text">{{ testimonial.text }}</p>
    <div class="testimonial-card__author">
      <img
        class="testimonial-card__author-avatar"
        :src="testimonial.avatar"
        :alt="testimonial.name"
      />
      <div>
        <p class="testimonial-card__author-name">{{ testimonial.name }}</p>
        <p class="testimonial-card__author-role">{{ testimonial.position }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.testimonial-card {
  padding: 2rem 1.5rem;
  border: 1px solid #bcdcdc;
  border-radius: 1rem;

  &__logo {
    margin-bottom: 2rem;
  }

  &__text {
    color: #577578;
  }

  &__author {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;

    &-avatar {
      display: block;
      width: 2.5rem;
      aspect-ratio: 1 / 1;
      object-fit: cover;
    }

    &-name {
      color: #002832;
      font-weight: 600;
    }

    &-role {
      color: #577578;
    }
  }
}
</style>
