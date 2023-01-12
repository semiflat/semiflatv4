import { createSSRApp, defineComponent, h } from 'vue'
import PageShell from './PageShell.vue'
import { setPageContext } from '~/composables/usePageContext'
import type { PageContext, UserModule } from '~/types'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import '~/styles/main.css'
import { initI18n, loadAsyncLanguage } from '~/i18n'

async function createApp(pageContext: PageContext) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = defineComponent({
    render() {
      return h(
        PageShell,
        {},
        {
          default() {
            // @ts-expect-error Page wrong types
            return h(Page, pageProps || {})
          },
        }
      )
    },
  })

  await loadAsyncLanguage(pageContext.locale)
  await initI18n()

  const app = createSSRApp(PageWithLayout)

  // Make `pageContext` available from any Vue component
  setPageContext(app, pageContext)

  Object.values(
    import.meta.glob<{ install: UserModule }>('~/modules/*.ts', { eager: true })
  ).forEach((i) => i.install?.({ app }))

  return app
}

export { createApp }
