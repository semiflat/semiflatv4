const services_page_route = (pageContext) => {
  if (!pageContext.urlPathname.startsWith("/services")) {
    return false;
  }
  const id = pageContext.urlPathname.split("/")[2] || "";
  return {
    routeParams: { id }
  };
};
const __vite_glob_2_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: services_page_route
}, Symbol.toStringTag, { value: "Module" }));
const locales = ["en", "pl"];
const localeDefault = locales[0];
const BASE_URL = "https://ssr-test.ssr-demo.workers.dev";
function extractLocale(url) {
  const cleanedUrl = url.startsWith(BASE_URL) ? url.slice(BASE_URL.length) : url;
  const urlPaths = cleanedUrl.split("/");
  let locale;
  let urlWithoutLocale;
  const firstPath = urlPaths[1];
  if (locales.filter((locale2) => locale2 !== localeDefault).includes(firstPath)) {
    locale = firstPath;
    urlWithoutLocale = `/${urlPaths.slice(2).join("/")}`;
  } else {
    locale = localeDefault;
    urlWithoutLocale = url;
  }
  return { locale, urlWithoutLocale };
}
async function onBeforeRoute(pageContext) {
  let urlMod = pageContext.urlOriginal;
  const { urlWithoutLocale, locale } = extractLocale(String(urlMod));
  urlMod = urlWithoutLocale;
  return {
    pageContext: {
      locale,
      urlOriginal: urlMod
    }
  };
}
const __vite_glob_2_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onBeforeRoute
}, Symbol.toStringTag, { value: "Module" }));
const exportNames = ["render"];
const __vite_glob_3_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  exportNames
}, Symbol.toStringTag, { value: "Module" }));
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;
const pageConfigs = [];
const pageConfigGlobal = {
  ["onBeforeRoute"]: null,
  ["onPrerenderStart"]: null
};
const plusFilesGlob = null;
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({ "/src/pages/about.page.vue": () => import("./assets/about.page.e566478e.js"), "/src/pages/culture.page.vue": () => import("./assets/culture.page.583afa4d.js"), "/src/pages/index/index.page.vue": () => import("./assets/index.page.57474e6c.js"), "/src/pages/pocus.page.vue": () => import("./assets/pocus.page.aecd9acc.js"), "/src/pages/privacy-policy.page.vue": () => import("./assets/privacy-policy.page.10dde6df.js"), "/src/pages/services.page.vue": () => import("./assets/services.page.8459c1aa.js"), "/src/pages/useful.page.vue": () => import("./assets/useful.page.007f854d.js"), "/src/pages/work.page.vue": () => import("./assets/work.page.ca6538ea.js"), "/src/renderer/_error.page.vue": () => import("./assets/_error.page.b2d88cb1.js") });
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({ "/src/pages/pocus.page.server.ts": () => import("./assets/pocus.page.server.fbefb440.js"), "/src/pages/useful.page.server.ts": () => import("./assets/useful.page.server.07f342fb.js"), "/src/renderer/_default.page.server.ts": () => import("./assets/_default.page.server.abcbfa99.js") });
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({ "/src/pages/services.page.route.ts": __vite_glob_2_0, "/src/renderer/_default.page.route.ts": __vite_glob_2_1 });
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({ "/src/renderer/_default.page.client.ts": __vite_glob_3_0 });
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
export {
  isGeneratedFile,
  localeDefault as l,
  neverLoaded,
  pageConfigGlobal,
  pageConfigs,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList,
  plusFilesGlob
};
