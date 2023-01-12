import { localeDefault, locales } from './locales'

const BASE_URL = 'https://ssr-test.ssr-demo.workers.dev'

function extractLocale(url: string) {
  const cleanedUrl = url.startsWith(BASE_URL) ? url.slice(BASE_URL.length) : url
  const urlPaths = cleanedUrl.split('/')

  let locale
  let urlWithoutLocale
  // We remove the URL locale, for example `/de-DE/about` => `/about`
  const firstPath = urlPaths[1]

  if (locales.filter((locale) => locale !== localeDefault).includes(firstPath)) {
    locale = firstPath
    urlWithoutLocale = `/${urlPaths.slice(2).join('/')}`
  } else {
    locale = localeDefault
    urlWithoutLocale = url
  }
  return { locale, urlWithoutLocale }
}

export { extractLocale }
