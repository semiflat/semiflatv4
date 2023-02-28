import { createApp } from './app'
import type { PageContextClient } from '~/types'

async function render(pageContext: PageContextClient) {
  const app = await createApp(pageContext)
  app.mount('#app')
}

export { render }

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
