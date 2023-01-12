<script setup lang="ts">
import { PhoneInput } from '@lbgm/phone-number-input'
import '@lbgm/phone-number-input/style'
import { useField, useFormErrors } from 'vee-validate'
import { t } from '~/i18n'

const props = withDefaults(
  defineProps<{
    name: string
    modelValue?: string
    label?: string
    showErrorMessage?: boolean
  }>(),
  {
    modelValue: '',
    label: '',
    showErrorMessage: true,
  }
)

const emit = defineEmits(['update:modelValue', 'inputData'])

interface IPhoneData {
  country?: string
  dialCode?: string
  nationalNumber?: string
  number?: string
  isValid?: boolean
}

const name = toRef(props, 'name')

const { handleChange, meta } = useField(name, undefined, {
  initialValue: { number: '', prefix: '' },
  validateOnValueUpdate: true,
})

const formErrors = useFormErrors()

const errorMessage = computed(() => {
  if (!meta.validated) return ''
  return formErrors.value[`${name.value}.number`]
})

watch(errorMessage, (value) => {
  const input = document.querySelector("div[data-children='inputcore']")
  const label = document.querySelector("div[data-widget-item='baseinput'] label")
  if (meta.validated && value) {
    input?.classList.add('has-error')
    label?.classList.add('has-error')
    input?.classList.remove('has-success')
    label?.classList.remove('has-success')
  } else {
    input?.classList.add('has-success')
    label?.classList.add('has-success')
    input?.classList.remove('has-error')
    label?.classList.remove('has-error')
  }
})
const phoneInput = ref()

const validatePhone = (data: IPhoneData) => {
  const { value } = phoneInput.value.$el.querySelector('input')
  if (value.length === 1) handleChange({ number: value || '', prefix: data.dialCode || '' })
  else
    handleChange({
      number: data.nationalNumber || '',
      prefix: data.dialCode || '',
    })
  emit('inputData', data)
}

const defaultCountry = window.navigator.language.substring(3).toUpperCase() || 'US'
</script>

<template>
  <div class="relative mb-4">
    <PhoneInput
      ref="phoneInput"
      :name="name"
      :label="label"
      :default-country="defaultCountry"
      :allowed="[]"
      @phone-data="validatePhone"
    />
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
</template>

<style>
div[data-widget-item='baseinput'] label {
  @apply !transition-colors !duration-200 !cursor-auto  text-gray-700 !text-sm !leading-[1.5] !mb-0.5 !font-400 !block !opacity-100;
}
div[data-widget-item='baseinput'] div[data-children='inputcore'] {
  @apply !bg-white py-1.375 pl-1 pr-4 flex items-center rounded-[8px] shadow border border-transparent;
}
div[data-widget-item='baseinput'] div[data-children='inputcore'].error {
  @apply !bg-white;
}
div[data-widget-item='baseinput'] input {
  @apply bg-white outline-none focus:outline-none w-full text-gray-900 text-[0.875rem] leading-[1.5];
}
div[data-widget-item='baseinput'] span[data-children='arrowGroup'] {
  @apply bg-gray-0 py-1 px-3 rounded-lg;
}
div[data-widget-item='baseinput'] div[data-children='error'] {
  @apply absolute !bg-transparent !left-0 -bottom-[1.15rem] !text-[0.625rem] !font-300 transform !text-tomate;
}
.has-error {
  @apply !text-tomate !border-tomate;
}
.has-success {
  @apply !text-primary !border-primary;
}
</style>
