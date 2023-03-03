import type { PageContextBuiltIn } from 'vite-plugin-ssr'
// import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router' // When using Client Routing
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client' // When using Server Routing
import type { App, ComponentPublicInstance } from 'vue'

type Page = ComponentPublicInstance // https://stackoverflow.com/questions/63985658/how-to-type-vue-instance-out-of-definecomponent-in-vue-3/63986086#63986086
interface PageProps {
  pageShell: {
    smallGradient?: string
    bigGradient?: string
    button?: string
    hide?: string
    nav?: string
  }
}

export interface PageContextCustom {
  Page: Page
  pageProps?: PageProps
  urlPathname: string
  exports: {
    documentProps?: {
      title?: string
      description?: string
    }
  }
  locale: string
  redirectTo?: string
}

type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom
type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom

type PageContext = PageContextClient | PageContextServer

export type { PageContextServer }
export type { PageContextClient }
export type { PageContext }
export type { PageProps }

interface AppContext {
  app: App<Element>
}

export type UserModule = (ctx: AppContext) => void

export enum WebinarStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  FINISHED = 'FINISHED',
  CREATED = 'CREATED',
}
