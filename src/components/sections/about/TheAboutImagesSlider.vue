<script setup lang="ts">
import img1 from '~/assets/about-slider/1.png'
import img2 from '~/assets/about-slider/2.png'
import img3 from '~/assets/about-slider/3.png'
import img4 from '~/assets/about-slider/4.png'
import img5 from '~/assets/about-slider/5.png'
import img6 from '~/assets/about-slider/6.png'
import img7 from '~/assets/about-slider/7.png'
import img8 from '~/assets/about-slider/8.png'

const aboutImgs = [img1, img2, img3, img4, img5, img6, img7, img8]
</script>

<template>
  <div class="images-slider">
    <div v-for="i in 2" :key="i" class="images-slider__inner">
      <div v-for="img in aboutImgs" :key="img" class="images-slider__item">
        <img :src="img" class="images-slider__image" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes marquee {
  to {
    transform: translateX(-100%);
  }
}

.images-slider {
  display: flex;
  gap: 1.5rem;
  width: 100%;
  overflow: hidden;
  margin-top: 64px;

  @media (min-width: 768px) {
    margin-top: 160px;
  }

  &__inner {
    display: flex;
    gap: 1.5rem;
    flex: 0 0 auto;
    animation: marquee 30s linear infinite;

    @media (min-width: 768px) {
      animation-duration: 40s;
    }
  }

  &__item {
    &:nth-of-type(even) {
      width: 144px;
      aspect-ratio: 4 / 5;
    }

    &:nth-of-type(odd) {
      width: 240px;
      aspect-ratio: 4 / 3;
    }

    @media (min-width: 768px) {
      &:nth-of-type(even) {
        width: 240px;
      }

      &:nth-of-type(odd) {
        width: 400px;
      }
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 12px;
  }
}
</style>
