import { openBlock, createElementBlock, createElementVNode, defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
const _hoisted_1 = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("rect", {
  width: "32",
  height: "32",
  rx: "16",
  fill: "currentColor"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M21 14L16 19L11 14",
  stroke: "white",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_4);
}
const ChevronDown = { render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TheFaqComponent",
  __ssrInlineRender: true,
  props: {
    faqs: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-6 max-w-[57.125rem] mx-auto" }, _attrs))}><!--[-->`);
      ssrRenderList(__props.faqs, (faq, i) => {
        _push(`<div class=""><div class="${ssrRenderClass([{ "border-b": i + 1 !== __props.faqs.length }, "md:px-6 border-[#BCDCDC] overflow-hidden"])}"><div class="flex items-center flex-1 cursor-pointer justify-between gap-10 border-[#BCDCDC]"><h3 class="font-semibold leading-[150%] md:text-lg select-none">${ssrInterpolate(faq.header)}</h3>`);
        _push(ssrRenderComponent(unref(ChevronDown), {
          class: ["shrink-0 transition-all duration-300 text-turquoise-300 select-none", { "rotate-180 !text-turquoise-400": faq.isOpen }]
        }, null, _parent));
        _push(`</div><div class="${ssrRenderClass([{ "!max-h-100rem": faq.isOpen, "!duration-2000": faq.isOpen }, "text-blue-200 max-w-[49rem] mt-6 max-h-0 overflow-hidden transition-all ease-linear duration-0 select-none"])}"><p class="${ssrRenderClass([{ "!opacity-100 !translate-x-0": faq.isOpen, "!duration-250": faq.isOpen }, "pb-6 md:pb-8 transition-all translate-x-20 opacity-0"])}">${ssrInterpolate(faq.text)}</p></div></div></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/utility/TheFaqComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
