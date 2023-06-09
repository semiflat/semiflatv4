import type { Writable } from 'stream'
import { pipeToNodeWritable, pipeToWebWritable } from '@vue/server-renderer'
import { escapeInject, stampPipe } from 'vite-plugin-ssr'
import { createApp } from './app'
import type { PageContextServer } from '~/types'
import faviconUrl from '~//assets/semiflat-favicon.png'

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ['pageProps', 'urlPathname', 'locale', 'routeParams']

async function render(pageContext: PageContextServer) {
  const app = await createApp(pageContext)
  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports
  const title =
    (documentProps && documentProps.title) ||
    'Semiflat is a full-service design agency specialized in solving complex problems through design. '
  const desc =
    (documentProps && documentProps.description) ||
    'We design tools that help millions of professionals be more effective at their job.'

  // Streaming is optional: we can use renderToString() instead.
  const pipe = isWorker()
    ? (writable: WritableStream) => {
        pipeToWebWritable(app, {}, writable)
      }
    : // While developing, we use Vite's development sever instead of a Cloudflare worker. Instead of `pipeToNodeWritable()`, we could as well use `renderToString()`.
      (writable: Writable) => {
        pipeToNodeWritable(app, {}, writable)
      }
  stampPipe(pipe, isWorker() ? 'web-stream' : 'node-stream')

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>html{opacity:0; transition: opacity 0.375s ease-in;}</style>
        <meta charset="UTF-8" />
        <link rel="icon" href="${faviconUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
        <!-- Meta Pixel Code -->
        <script async>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1370034610224977');
        fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1370034610224977&ev=PageView&noscript=1"
        /></noscript>
        <!-- End Meta Pixel Code -->
      </head>
      <body>
        <div id="app">${pipe}</div>
        <style>html{opacity:1}</style>
      </body>
    </html>`
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
      enableEagerStreaming: true,
      redirectTo: pageContext.redirectTo,
    },
  }
}

// https://github.com/cloudflare/wrangler2/issues/1481
// https://community.cloudflare.com/t/how-to-detect-the-cloudflare-worker-runtime/293715
function isWorker() {
  return (
    // @ts-expect-error websocketpair
    typeof WebSocketPair !== 'undefined' || typeof caches !== 'undefined'
  )
}

export { render }
