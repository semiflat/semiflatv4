export { t };
import i18next from "i18next";
import { localeDefault } from "./locales";
import { locale, loadedLocales } from "~/i18n";

// can be used instead of i18next
function translate(text: string, selectedLocale: string = locale) {
  if (locale === localeDefault) {
    return text;
  }

  const textTranslation = loadedLocales[selectedLocale]?.translation[text];
  if (!textTranslation) {
    throw new Error("No translation found for: `" + text + "`");
  }
  return textTranslation;
}

function t(key: any) {
  return i18next.t(key);
}
