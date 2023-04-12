<script lang="ts" setup>
import Asset from '~/assets/home/case-studies/phenom-bg.svg'
</script>

<template>
  <div class="bg">
    <div class="bg__vertical-rocket"></div>
    <component :is="Asset" />
  </div>
</template>

<style lang="scss" scoped>
.bg {
  $easing: cubic-bezier(0.5, 1, 0.89, 1);

  position: relative;
  overflow: hidden;

  svg {
    width: 100%;
    height: 100%;
  }

  .bg__vertical-rocket,
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 10%;
    z-index: 1;
    border-radius: 2px;
    background: linear-gradient(270deg, #54aba3 0%, rgba(84, 171, 163, 0) 100%);
  }

  .bg__vertical-rocket {
    width: 15%;
    left: 7.8%;
    bottom: 0;
    transform: translateY(80px) rotate(-90deg);
    transform-origin: center;
    animation: rocket-up 1.2s $easing infinite;
  }

  &::before {
    left: 0;
    top: 45.4%;
    transform: translateX(-100%);
    animation: rocket-to-right 1.15s 2s $easing infinite;
  }

  &::after {
    right: 0;
    top: 20.25%;
    transform: translateX(100%) rotate(180deg);
    animation: rocket-to-left 1.35s 4s $easing infinite;
  }
}
</style>
