import { createSharedComposable } from "@vueuse/core";
import { reactive } from "vue";
import { b as breakpointsConst } from "./chunk-91954a89.js";
const useBreakpoints = createSharedComposable(() => {
  const breakpoints = reactive({
    ...breakpointsConst
  });
  return breakpoints;
});
export {
  useBreakpoints as u
};
