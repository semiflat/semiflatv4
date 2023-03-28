import { inject } from "vue";
const key = Symbol("PAGE_CONTEXT");
function usePageContext() {
  const pageContext = inject(key);
  if (!pageContext)
    throw new Error("setPageContext() not called in parent");
  return pageContext;
}
function setPageContext(app, pageContext) {
  app.provide(key, pageContext);
}
export {
  setPageContext as s,
  usePageContext as u
};
