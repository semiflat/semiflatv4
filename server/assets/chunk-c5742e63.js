import { _ as __unplugin_components_0, a as _export_sfc } from "./chunk-5a6b5315.js";
import { openBlock, createElementBlock, createStaticVNode, defineComponent, ref, onMounted, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { P as Power2, g as gsapWithCSS } from "./chunk-ea976db9.js";
const _hoisted_1$1 = {
  width: "204",
  height: "204",
  viewBox: "0 0 204 204",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<mask id="mask0_2075_3956" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="204" height="204"><rect width="204" height="204" fill="url(#paint0_radial_2075_3956)"></rect></mask><g mask="url(#mask0_2075_3956)"><circle cx="94" cy="114" r="60" stroke="#0A5F81"></circle><circle cx="110" cy="90" r="60" stroke="#0A5F81"></circle><circle cx="79" cy="138" r="60" stroke="#1FDFFF"></circle><circle cx="126" cy="66" r="60" stroke="#1FDFFF"></circle></g><defs><radialGradient id="paint0_radial_2075_3956" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(102 102) rotate(90) scale(102 81.1808)"><stop stop-color="#D9D9D9"></stop><stop offset="1" stop-color="#D9D9D9" stop-opacity="0"></stop></radialGradient></defs>', 3);
const _hoisted_5$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_5$1);
}
const CTACircles = { render: render$1 };
const _hoisted_1 = {
  width: "204",
  height: "204",
  viewBox: "0 0 204 204",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<mask id="mask0_2080_7437" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="204" height="204"><rect width="204" height="204" fill="url(#paint0_radial_2080_7437)"></rect></mask><g mask="url(#mask0_2080_7437)"><path d="M82 60L22 99.4286L22 158.571L82 198L142 158.571V99.4286L82 60Z" stroke="#1FDFFF"></path><path d="M98 33L38 72.4286L38 131.571L98 171L158 131.571V72.4286L98 33Z" stroke="#0A5F81"></path><path d="M114 6L54 45.4286L54 104.571L114 144L174 104.571V45.4286L114 6Z" stroke="#1FDFFF"></path></g><defs><radialGradient id="paint0_radial_2080_7437" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(102 102) rotate(90) scale(102 81.1808)"><stop stop-color="#D9D9D9"></stop><stop offset="1" stop-color="#D9D9D9" stop-opacity="0"></stop></radialGradient></defs>', 3);
const _hoisted_5 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_5);
}
const CTAHexagons = { render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TheCTABottomSection",
  __ssrInlineRender: true,
  setup(__props) {
    const animationDuration = 2;
    const animationEasing = Power2.easeOut;
    const circlesRef = ref();
    const animateCircles = () => {
      if (!circlesRef.value)
        return;
      const tl = gsapWithCSS.timeline({
        ease: animationEasing,
        repeat: -1,
        yoyo: true
      });
      const circles = circlesRef.value.$el.querySelectorAll("circle");
      tl.to(circles, {
        stroke: "#1FDFFF",
        duration: animationDuration
      });
    };
    const hexagonsRef = ref();
    const animateHexagons = () => {
      if (!hexagonsRef.value)
        return;
      const tl = gsapWithCSS.timeline({
        ease: animationEasing,
        repeat: -1,
        yoyo: true
      });
      const hexagons = hexagonsRef.value.$el.querySelectorAll("path");
      tl.to(hexagons, {
        stroke: "#1FDFFF",
        duration: animationDuration
      });
    };
    const animatedGradientRef = ref();
    const animateGradients = () => {
      if (!animatedGradientRef.value)
        return;
      const tl = gsapWithCSS.timeline({
        ease: animationEasing,
        repeat: -1,
        yoyo: true
      });
      tl.to(animatedGradientRef.value, {
        autoAlpha: 1,
        duration: animationDuration
      });
    };
    onMounted(() => {
      animateCircles();
      animateHexagons();
      animateGradients();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppButton = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40" }, _attrs))} data-v-d5dc52ac><div class="grid gap-6 md:grid-cols-2" data-v-d5dc52ac><div class="bg-gradient text-white rounded-4 md:flex mx-auto relative w-full" data-v-d5dc52ac><div class="absolute right-0 h-[12.75rem]" data-v-d5dc52ac>`);
      _push(ssrRenderComponent(unref(CTACircles), {
        ref_key: "circlesRef",
        ref: circlesRef
      }, null, _parent));
      _push(`<div class="animated-gradient absolute inset-0" data-v-d5dc52ac></div></div><div class="p-8 md:py-10 px-6 relative" data-v-d5dc52ac><h2 class="font-semibold text-xl mb-8" data-v-d5dc52ac> Interested in working with <br class="hidden md:block" data-v-d5dc52ac> us on your SaaS project? </h2>`);
      _push(ssrRenderComponent(_component_AppButton, {
        secondary: "",
        href: "mailto:hello@semiflat.com"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get in touch`);
          } else {
            return [
              createTextVNode("Get in touch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="bg-gradient text-white rounded-4 md:flex w-full mx-auto relative" data-v-d5dc52ac><div class="absolute right-0 h-[12.75rem]" data-v-d5dc52ac>`);
      _push(ssrRenderComponent(unref(CTAHexagons), {
        ref_key: "hexagonsRef",
        ref: hexagonsRef
      }, null, _parent));
      _push(`<div class="animated-gradient absolute inset-0" data-v-d5dc52ac></div></div><div class="p-8 md:py-10 px-6 relative" data-v-d5dc52ac><h2 class="font-semibold text-xl mb-8" data-v-d5dc52ac> Want to learn more about <br class="hidden md:block" data-v-d5dc52ac> our services? </h2>`);
      _push(ssrRenderComponent(_component_AppButton, {
        class: "!bg-white !text-blue-300",
        href: "/services"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn more`);
          } else {
            return [
              createTextVNode("Learn more")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const TheCTABottomSection_vue_vue_type_style_index_0_scoped_d5dc52ac_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/TheCTABottomSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d5dc52ac"]]);
export {
  __unplugin_components_5 as _
};
