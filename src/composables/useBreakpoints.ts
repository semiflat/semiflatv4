import breakpointsConst from "~/constants/breakpoints";

const useBreakpoints = createSharedComposable(() => {
  const breakpoints = reactive({
    ...breakpointsConst,
  });

  return breakpoints;
});

export { useBreakpoints };