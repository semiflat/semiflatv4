<script setup lang="ts">
import type { Component } from 'vue'

interface Step {
  component: Component
  key: number
}

const props = withDefaults(
  defineProps<{
    steps: Step[]
    currentStep: number
    stepsData?: any
  }>(),
  {
    stepsData: () => ({}),
  }
)

const emit = defineEmits([
  'nextStep',
  'prevStep',
  'setStep',
  'update:stepsData',
  'close',
  'success',
])

const activeStep = computed(() => props.steps[props.currentStep])

const handleSetStepData = (v: Record<string, any>, key: number) => {
  emit('update:stepsData', {
    ...props.stepsData,
    [key]: {
      ...(props.stepsData && props.stepsData[key] && props.stepsData[key]),
      ...v,
    },
  })
}
</script>

<template>
  <div>
    <keep-alive>
      <Component
        :is="activeStep.component"
        :steps-data="props.stepsData"
        :step-data="props.stepsData[props.currentStep]"
        @next-step="(v: any) => emit('nextStep', v)"
        @prev-step="(v: any) => emit('prevStep', v)"
        @set-step="(v: any) => emit('setStep', v)"
        @close="(v: any) => emit('close', v)"
        @set-step-data="(v: any) => handleSetStepData(v, activeStep.key)"
        @success="(v: any) => emit('success', v)"
      />
    </keep-alive>
  </div>
</template>
