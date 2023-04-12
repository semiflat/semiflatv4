// Environment: Node.js
// @unocss-include

export async function onBeforeRender() {
  // We make pageProps available as pageContext.pageProps
  return {
    pageContext: {
      pageProps: {
        pageShell: {
          hide: '!hidden',
          bgColor: '!bg-[#481B97]',
          accentColor: '#481B97',
          accentColorLight: '#E1D4F7',
          navHover: 'hover:!bg-black/08',
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
