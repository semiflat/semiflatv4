// Environment: Node.js
// @unocss-include

export async function onBeforeRender() {
  // We make pageProps available as pageContext.pageProps
  return {
    pageContext: {
      pageProps: {
        pageShell: {
          smallGradient:
            '!bg-[#F2EDFD] md:!blur-[240px] md:!w-[50rem] md:!h-[50rem] md:!-top-[7.25rem] md:!-right-102',
          bigGradient:
            '!bg-[#F2EDFD] md:!blur-[200px] md:w-[67.5rem] md:h-[67.5rem] md:!-top-[10rem]',
          hide: '!hidden',
          bgColor: '!bg-[#1952CE]',
          accentColor: '#1952CE',
          accentColorLight: '#C8D8F8',
          textColor: '!text-[#6F2DE7]',
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
