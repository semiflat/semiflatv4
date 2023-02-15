import { ref } from 'vue'
import { createGlobalState } from '@vueuse/core'

export const useGlobalState = createGlobalState(
  () => {
    // state
    const servicesSection = ref('workshops')

    // actions
    function changeSection(value: string) {
        servicesSection.value = value
    }

    return { servicesSection, changeSection }
  }
)