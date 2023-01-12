import { localeDefault } from "./locales";
import i18next from "i18next";

export { extractLocale } from "./extractLocale";
export { t } from "./translate";
export { locales, localeDefault } from "./locales";
export { importLocale };

const messageImports = import.meta.glob("./translations/*.yml");

export const loadedLocales = {} as {
  [k: string]: { translation: Record<string, string> };
};

export let locale = localeDefault;

function importLocale(locale: string) {
  const [, importLocale] =
    Object.entries(messageImports).find(([key]) =>
      key.includes(`/${locale}.`)
    ) || [];

  return importLocale && importLocale();
}

export async function loadAsyncLanguage(selectedLocale = localeDefault) {
  try {
    if (loadedLocales[selectedLocale]?.translation) {
      loadedLocales[selectedLocale]?.translation;
    }
    const result = (await importLocale(selectedLocale)) as any;
    const messages = result.default || result;
    loadedLocales[selectedLocale] = { translation: messages };
    locale = selectedLocale;
    return messages;
  } catch (error) {
    console.error(error);
  }
}

export async function initI18n() {
  await i18next.init({
    lng: locale, // if you're using a language detector, do not define the lng option
    debug: false,
    resources: loadedLocales,
  });
}
