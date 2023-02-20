import { ref } from 'vue'
import { createGlobalState } from '@vueuse/core'

export const useGlobalState = createGlobalState(() => {
  // state
  const layoutAccent = ref('green')

  // actions
  function changeAccent(value: string) {
    layoutAccent.value = value
  }

  return { layoutAccent, changeAccent }
})
