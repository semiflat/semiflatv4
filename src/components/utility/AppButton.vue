<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(
  defineProps<{
    type?: 'button' | 'submit' | 'reset'
    secondary?: boolean
    text?: boolean
    loading?: boolean
    block?: boolean
    disabled?: boolean
    rippleDisabled?: boolean
    success?: boolean
    error?: boolean
    to?: string
    leftSlotClass?: string
    contentClass?: string
    href?: string
    bordered?: boolean
  }>(),
  {
    type: 'button',
    secondary: false,
    text: false,
    loading: false,
    block: false,
    disabled: false,
    rippleDisabled: false,
    success: false,
    error: false,
    to: '',
    leftSlotClass: '',
    contentClass: '',
    href: '',
    bordered: false,
  }
)

const tag = computed(() => {
  if (props.to) return 'router-link'

  if (props.href) return 'a'

  return 'button'
})
</script>

<template>
  <component :is="tag" ref="buttonRef" class="app-button" v-bind="$attrs" :class="[
    props.block ? 'flex w-full' : 'inline-flex',
    {
      'has-error': props.error,
      'has-success': props.success,
      'is-disabled': props.disabled,
      'is-secondary': props.secondary,
      'is-text': props.text,
      'is-bordered': props.bordered,
    },
  ]" :type="props.type" :disabled="props.disabled || props.loading" :to="props.to" :href="props.href">
    <div class="button__hover-bg" />
    <div class="button__content relative flex flex-nowrap justify-center items-center transition-opacity duration-200"
      :class="[props.contentClass, props.loading ? 'opacity-0' : 'opacity-100']">
      <div v-if="$slots.left" class="button__left mr-1.5 relative" :class="[props.leftSlotClass]">
        <slot name="left" />
      </div>
      <div class="button__center relative flex flex-nowrap">
        <slot />
      </div>
      <div v-if="$slots.right" class="button__right ml-1.5 relative">
        <slot name="right" />
      </div>
    </div>
    <AppSpinner :size="24"
      class="transition-opacity duration-200 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      :class="props.loading ? 'opacity-100' : 'opacity-0'" />
  </component>
</template>

<style lang="postcss" scoped>
.app-button {
  @apply relative justify-center items-center text-center py-1.5 px-4 bg-primary text-sm leading-[1.5] transition duration-400 transition-bg transition-bg-duration-200 bg-center overflow-hidden border-solid border-transparent border disabled: cursor-not-allowed rounded-[32px] text-white font-medium;

  -webkit-appearance: none;
}

.app-button.is-secondary {
  @apply bg-gray-0 text-gray-900 hover: bg-gray-200;

  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.2));
}

.app-button.is-text {
  @apply bg-transparent text-primary;
}

.app-button.is-text:hover {
  @apply text-primary/80;
}

.app-button:not(.is-secondary):not(.is-text):hover .button__hover-bg {
  @apply opacity-100;
}

.button__hover-bg {
  @apply absolute inset-0 opacity-0 transition-opacity duration-300;

  background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));
}

.app-button.is-secondary .button__left,
.app-button.is-secondary .button__right {
  @apply text-primary;
}
</style>
