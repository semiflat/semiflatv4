export { onBeforeRoute };

import { extractLocale } from "~/i18n/extractLocale";
import { PageContext } from "./types";

async function onBeforeRoute(pageContext: PageContext) {
  let urlMod = pageContext.urlOriginal;
  const { urlWithoutLocale, locale } = extractLocale(String(urlMod));
  urlMod = urlWithoutLocale;
  return {
    pageContext: {
      // We make `locale` available as `pageContext.locale`.
      // We then use https://vite-plugin-ssr.com/pageContext-anywhere
      // to access `pageContext.locale` in any React/Vue component.
      locale,
      // We overwrite the original URL
      urlOriginal: urlMod,
    },
  };
}
