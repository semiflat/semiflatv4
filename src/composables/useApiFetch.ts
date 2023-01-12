import { createFetch } from '@vueuse/core'

export const useApiFetch = <T>(...params: any[]) => {
  const apiFetch = createFetch({
    baseUrl: (import.meta.env.VITE_BASE_URL as string) || 'https://api.dev.attix.com/rest-api',
    fetchOptions: {
      mode: 'cors',
    },
  })

  // @ts-expect-error no idea how to get rid of this error
  return apiFetch<T>(...params)
}
