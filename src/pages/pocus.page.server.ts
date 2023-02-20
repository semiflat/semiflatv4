// Environment: Node.js
// @unocss-include
import type { PageContext } from '~/renderer/types'

export async function onBeforeRender(pageContext: PageContext) {
  // The route parameter of /star-wars/@movieId is available at pageContext.routeParams
  // if (!pageContext.routeParams?.id) {
  //   return
  // }

  // const { id } = pageContext.routeParams
  // // .page.server.js files always run in Node.js; we could use SQL/ORM queries here.
  // const response = await fetch(https://api.dev.attix.com/rest-api/webinars/${id})
  // const webinar = await response.json()

  // // Our render and hydrate functions we defined earlier pass pageContext.pageProps to
  // // the root Vue component Page; this is where we define pageProps.
  // const pageProps = { webinar }

  // We make pageProps available as pageContext.pageProps
  return {
    pageContext: {
      pageProps: {
        pageShell: {
          smallGradient:
            '!bg-[#F0EDFE] md:!blur-[240px] md:!w-[50rem] md:!h-[50rem] md:!-top-[7.25rem] md:!-right-102',
          bigGradient:
            '!bg-[#F0EDFE] md:!blur-[200px] md:w-[67.5rem] md:h-[67.5rem] md:!-top-[10rem]',
        },
      },
    },
  }
}

// By default pageContext.* are available only on the server. But our hydrate function
// we defined earlier runs in the browser and needs pageContext.pageProps; we use
// passToClient to tell vite-plugin-ssr to serialize and make pageContext.pageProps
// available to the browser.
export const passToClient = ['pageProps']
