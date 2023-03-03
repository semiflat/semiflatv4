import type { PageContext } from '~/types'

export default (pageContext: PageContext) => {
  // We can use RegExp / any library we want
  if (!pageContext.urlPathname.startsWith('/services')) {
    return false
  }
  const id = pageContext.urlPathname.split('/')[2] || ''

  return {
    // Make `id` available as pageContext.routeParams.id
    routeParams: { id },
  }
}
