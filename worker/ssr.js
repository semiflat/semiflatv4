import { renderPage } from 'vite-plugin-ssr'


async function handleSsr(url) {
  const pageContextInit = {
    urlOriginal: url,
  }
  const pageContext = await renderPage(pageContextInit)
  const { httpResponse, redirectTo } = pageContext
  if (!httpResponse) {
    return null
  } else if (redirectTo) {
    // redirectTo is defined, so redirect to the specified URL
    return Response.redirect(redirectTo, 301)
  } else {
    const { readable, writable } = new TransformStream()
    httpResponse.pipe(writable)
    return new Response(readable)
  }
}

export { handleSsr }
