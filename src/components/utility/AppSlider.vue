<script lang="ts" setup>
import { Swiper } from 'swiper/vue'
import { Pagination } from 'swiper'

const props = defineProps({
  swiperOptions: {
    type: Object,
    required: true,
  },
  swiperClasses: {
    type: String,
    default: '',
  },
})

const swiper = ref(null as any)

const onSwiper = (swiperInstance: object) => {
  swiper.value = swiperInstance
}

const slidePrev = () => {
  swiper.value?.slidePrev()
}

const slideNext = () => {
  swiper.value?.slideNext()
}
</script>

<template>
  <div
    class="app-slider"
    :class="{
      'has-navigation': props.swiperOptions.navigation,
    }"
  >
    <button
      v-if="props.swiperOptions.navigation"
      class="app-slider__nav-btn app-slider__nav-btn--left"
      type="button"
      @click="slidePrev"
    ></button>
    <Swiper
      v-bind="{
        ...props.swiperOptions,
        navigation: false,
      }"
      :class="swiperClasses"
      :modules="[Pagination]"
      @swiper="onSwiper"
    >
      <slot></slot>
    </Swiper>
    <button
      v-if="props.swiperOptions.navigation"
      class="app-slider__nav-btn app-slider__nav-btn--right"
      type="button"
      @click="slideNext"
    ></button>
  </div>
</template>

<style lang="postcss" scoped>
.app-slider.has-navigation {
  @apply pb-20;
}

.app-slider {
  @apply relative;
}

.app-slider .app-slider__nav-btn {
  @apply absolute bottom-0 left-0 outline-none w-12 h-12 rounded-full border border-grey-100 flex items-center justify-center;
}

.app-slider .app-slider__nav-btn--right {
  @apply left-16;
}
</style>
