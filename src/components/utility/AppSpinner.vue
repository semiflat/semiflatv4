<script setup lang="ts">
defineProps({
  accent: {
    type: Boolean,
    default: false,
  },
  size: {
    type: Number,
    default: 24,
  },
  darkMode: {
    type: Boolean,
    default: false,
  },
  bgColor: {
    type: String,
    default: "#ffffff",
  },
});
</script>

<template>
  <div class="flex overflow-hidden" :style="{ '--bgColor': bgColor }">
    <div
      class="loader"
      :class="{
        'loader--accent': accent,
        'loader--dark': darkMode,
      }"
      :style="{
        '--size': `${size}px`,
        ...(bgColor && { '--bgColor': bgColor }),
      }"
    >
      Loading...
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.loader,
.loader:after {
  @apply m-auto;

  border-radius: 50%;
  width: var(--size);
  height: var(--size);
}
.loader {
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 2px solid #25d366;
  border-right: 2px solid #25d366;
  border-bottom: 2px solid #25d366;
  border-left: 2px solid #ffffff;
  border-left-color: var(--bgColor);
  transform: translateZ(0);
  animation: load8 1.1s infinite linear;
}

.loader.loader--dark {
  border-left-color: #000;
}

@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
