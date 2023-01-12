<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

const props = withDefaults(
  defineProps<{
    modelValue?: boolean
    title?: string
    contentClass?: any
    actionsClass?: string
  }>(),
  {
    modelValue: false,
    title: '',
    contentClass: '',
    actionsClass: '',
  }
)

const emit = defineEmits(['update:modelValue', 'close', 'dialogTransitionAfterLeave'])

const handleClose = () => {
  emit('update:modelValue', false)
  emit('close')
}
</script>

<template>
  <TransitionRoot
    :show="props.modelValue"
    as="template"
    enter="duration-300 ease-out"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="duration-200 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <Dialog class="fixed z-200 inset-0">
      <TransitionChild
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-black/25 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        />
      </TransitionChild>

      <div class="fixed inset-0 p-2 overflow-y-auto">
        <div class="flex justify-center items-center min-h-full">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            @after-leave="() => $emit('dialogTransitionAfterLeave')"
          >
            <DialogPanel class="app-modal-content m-auto w-full" :class="props.contentClass">
              <div class="modal__content">
                <slot :close="handleClose" />
              </div>
              <div v-if="$slots.actions" class="modal__actions mt-5">
                <slot name="actions" :close="handleClose" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style lang="postcss">
.app-modal-content {
  @apply relative w-full rounded-[16px] p-4 sm:p-8 m-auto bg-white;

  border-radius: 16px;
}
</style>
