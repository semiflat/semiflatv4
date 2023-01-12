<script setup lang="ts">
import { useField } from 'vee-validate'
import { t } from '~/i18n'

const props = withDefaults(
  defineProps<{
    name: string
    modelValue?: string
    large?: boolean
    small?: boolean
    label?: string
    caption?: string
    disabled?: boolean
    leftClass?: string
    wrapperClass?: string
    inputClass?: string
    disableStateIndicators?: boolean
    showErrorMessage?: boolean
  }>(),
  {
    large: false,
    modelValue: '',
    label: '',
    caption: '',
    disabled: false,
    small: false,
    leftClass: '',
    wrapperClass: '',
    inputClass: '',
    disableStateIndicators: false,
    showErrorMessage: true,
  }
)

const emit = defineEmits(['update:modelValue'])

const name = toRef(props, 'name')

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField<string>(name, undefined, {
  initialValue: props.modelValue,
})

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
  handleChange(e)
}

const appInput = ref()

const isFocused = ref(false)

const handleInputBlur = (e: Event) => {
  isFocused.value = false
  handleBlur(e)
}
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div
    class="app-input-wrap px-0.2"
    :class="[
      {
        'has-input-focus': isFocused,
        'is-input-filled': inputValue?.length,
        'is-input-disabled': disabled,
        'is-large': large,
        'has-error': !props.disableStateIndicators && errorMessage,
        'has-success': !props.disableStateIndicators && meta.valid && meta.validated,
        'is-small': small,
      },
      $attrs.class,
    ]"
  >
    <label v-if="label" class="app-input__label text-gray-700 text-sm leading-[1.5] mb-0.5 block">
      {{ label }}
    </label>
    <div class="app-input relative mb-5.5" :class="wrapperClass" @click="() => appInput.focus()">
      <div v-if="$slots.left" class="app-input__left mr-1" :class="leftClass">
        <slot name="left" />
      </div>
      <div class="app-input__wrap relative flex-grow">
        <input
          :id="name"
          ref="appInput"
          :name="name"
          :value="inputValue"
          :disabled="disabled"
          v-bind="{ ...$attrs, class: '' }"
          :class="`app-input__input ${props.inputClass}`"
          @input="updateValue"
          @focus="isFocused = true"
          @blur="handleInputBlur"
        />
      </div>
      <div class="app-input__right">
        <slot name="right" />
      </div>
      <Transition name="fade" mode="out-in">
        <label
          v-if="errorMessage && showErrorMessage"
          :for="name"
          class="absolute left-0 -bottom-[1.15rem] text-[0.625rem] transform text-tomate"
        >
          {{ t(errorMessage) }}
        </label>
      </Transition>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.app-input {
  @apply bg-gray-0 py-1.375
  px-4 flex items-center rounded-[8px] shadow border border-transparent;
}

.app-input__input {
  @apply bg-gray-0 outline-none focus:outline-none w-full text-gray-900 text-[0.875rem] leading-[1.5];
}

.app-input__input,
.app-input,
.app-input__label {
  @apply transition-colors duration-200;
}

.app-input-wrap.has-error .app-input__label,
.app-input-wrap.has-error .app-input__input {
  @apply text-tomate;
}

.app-input-wrap.has-error .app-input {
  @apply border-tomate;
}

.app-input-wrap.has-success .app-input {
  @apply border-primary;
}

.app-input-wrap.has-success .app-input__label {
  @apply text-primary;
}

.app-input__input::placeholder {
  @apply text-gray-500;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-text-fill-color: #0e0e0e;
  -webkit-box-shadow: 0 0 0 1000px #f2f2f2 inset;
}
</style>
