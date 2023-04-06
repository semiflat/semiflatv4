<template>
  <div class="case-study-block mt-16 md:mt-40">
    <div class="case-study-block__inner page-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.case-study-block {
  position: relative;

  &__inner {
    position: relative;
    z-index: 1;
  }
}
</style>
