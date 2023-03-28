import { _ as __unplugin_components_5 } from "./chunk-c5742e63.js";
import { openBlock, createElementBlock, createElementVNode, defineComponent, mergeProps, createVNode, resolveDynamicComponent, unref, useSSRContext, createStaticVNode, ref, computed, withCtx, createTextVNode, createBlock, toDisplayString, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderAttr, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { C as CheckIcon } from "./chunk-209f840a.js";
import { b as breakpointsConst, _ as __unplugin_components_0$1 } from "./chunk-91954a89.js";
import { _ as __unplugin_components_0 } from "./chunk-5a6b5315.js";
import { SwiperSlide } from "swiper/vue";
import { useBreakpoints } from "@vueuse/core";
import { B as BackgroundMobileLeft, a as BackgroundDesktop } from "./chunk-58947999.js";
import { W as WorkshopsIcon, I as InterfaceIcon, D as Design, S as SupportIcon$1 } from "./chunk-79ac2355.js";
import { R as ResearchIcon } from "./chunk-06b77f40.js";
import { U as UX } from "./chunk-68f21e73.js";
import { u as usePageContext } from "./chunk-2a1bb412.js";
import { S as ServiceTypes } from "./chunk-f057e02d.js";
import "./chunk-ea976db9.js";
import "swiper";
const _hoisted_1$q = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$q = /* @__PURE__ */ createElementVNode("rect", {
  width: "24",
  height: "24",
  rx: "12",
  fill: "#E74C3C"
}, null, -1);
const _hoisted_3$5 = /* @__PURE__ */ createElementVNode("path", {
  d: "M12 12L7 7M12 12L17 17M12 12L17 7M12 12L7 17",
  stroke: "white",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4$q = [
  _hoisted_2$q,
  _hoisted_3$5
];
function render$q(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$q, _hoisted_4$q);
}
const CloseIcon = { render: render$q };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TheServicesProsAndConsSection",
  __ssrInlineRender: true,
  props: {
    prosAndCons: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40" }, _attrs))}><div class="md:grid grid-cols-2 md:max-w-[57.125rem] mx-auto gap-8"><div><h2 class="text-xl text-blue-300 font-semibold md:text-[1.75rem] leading-[120%]">${ssrInterpolate(__props.prosAndCons.prosHeader)}</h2><p class="mt-4 text-blue-200">Custom design system</p></div><div class="mt-8 grid gap-8 md:mt-0"><!--[-->`);
      ssrRenderList(__props.prosAndCons.pros, (el, i) => {
        _push(`<div class="flex gap-6">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(CheckIcon)), { class: "shrink-0 text-turquoise-400" }, null), _parent);
        _push(`<div class="md:pr-2"><h3 class="font-semibold text-blue-300 mb-2">${ssrInterpolate(el.header)}</h3><p class="text-blue-200">${ssrInterpolate(el.text)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="w-full h-[1px] bg-[#BCDCDC] my-12 md:my-20 md:max-w-[57.125rem] mx-auto"></div><div class="md:grid grid-cols-2 md:max-w-[57.125rem] mx-auto gap-8"><div><h2 class="text-xl text-blue-300 font-semibold md:text-[1.75rem] leading-[120%]">${ssrInterpolate(__props.prosAndCons.consHeader)}</h2><p class="mt-4 text-blue-200">Custom design system</p></div><div class="mt-8 grid gap-8 md:mt-0"><!--[-->`);
      ssrRenderList(__props.prosAndCons.cons, (el, i) => {
        _push(`<div class="flex gap-6">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(CloseIcon)), { class: "shrink-0" }, null), _parent);
        _push(`<div class="md:pr-2"><h3 class="font-semibold text-blue-300 mb-2">${ssrInterpolate(el.header)}</h3><p class="text-blue-200">${ssrInterpolate(el.text)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/services/TheServicesProsAndConsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TheServicesOurServices",
  __ssrInlineRender: true,
  props: {
    experiences: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40" }, _attrs))}><div class=""><h2 class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem] md:max-w-[45rem] md:mx-auto">${ssrInterpolate(__props.experiences.header)}</h2><div class="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-16 mt-12 md:mt-20"><!--[-->`);
      ssrRenderList(__props.experiences.experiencesArr, (el, i) => {
        _push(`<div>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(el.icon), { class: "mb-8 text-turquoise-400" }, null), _parent);
        _push(`<p class="text-blue-300 font-semibold mb-1">${ssrInterpolate(el.header)}</p><p class="text-blue-200">${ssrInterpolate(el.text)}</p></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/services/TheServicesOurServices.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheServicesIntroductionSection",
  __ssrInlineRender: true,
  props: {
    introduction: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40" }, _attrs))}><div class="grid gap-4 md:grid-cols-2 md:max-w-[57.125rem] mx-auto"><img${ssrRenderAttr("src", __props.introduction.img)} class="mx-auto"><div class="md:pr-6 md:pl-20 md:flex md:flex-col justify-center"><h3 class="gradient-text font-semibold md:text-[1.75rem] md:leading-[120%]">${ssrInterpolate(__props.introduction.header)}</h3><p class="mt-4 text-blue-200">${ssrInterpolate(__props.introduction.text)}</p></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/services/TheServicesIntroductionSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _hoisted_1$p = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$p = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_796_52278)"><path d="M14.084 26.25C10.6322 26.25 7.83398 29.0483 7.83398 32.5C7.83398 35.9517 10.6322 38.75 14.084 38.75C17.5357 38.75 20.334 35.9517 20.334 32.5V6.25C20.334 3.48856 18.0954 1.25 15.334 1.25C12.5725 1.25 10.334 3.48856 10.334 6.25C10.334 9.01144 12.5725 11.25 15.334 11.25M8.12192 34.3669C4.48155 34.1911 1.58398 31.1839 1.58398 27.5C1.58398 23.7031 4.66205 20.625 8.45898 20.625C10.1849 20.625 11.584 19.2259 11.584 17.5M10.3572 6.41356C9.95073 6.30681 9.52398 6.25 9.08398 6.25C6.32255 6.25 4.08398 8.48856 4.08398 11.25C4.08398 11.8667 4.19561 12.4574 4.39986 13.0028C2.7333 13.8138 1.58398 15.522 1.58398 17.5C1.58398 19.4633 2.71548 21.1622 4.36198 21.9804M24.084 38.75H30.834M24.084 35H32.084M30.334 15C30.334 17.7614 28.0954 20 25.334 20V31.25H31.584C31.584 24.2715 39.084 21.25 39.084 13.75C39.084 6.25 34.084 1.25 26.584 1.25H24.084" stroke="url(#paint0_linear_796_52278)" stroke-width="2" stroke-miterlimit="10"></path></g><defs><linearGradient id="paint0_linear_796_52278" x1="39.084" y1="1.25" x2="1.58433" y2="38.7503" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><clipPath id="clip0_796_52278"><rect width="40" height="40" fill="white" transform="translate(0.333984)"></rect></clipPath></defs>', 2);
const _hoisted_4$p = [
  _hoisted_2$p
];
function render$p(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, _hoisted_4$p);
}
const WorkshopsGradientIcon = { render: render$p };
const _hoisted_1$o = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$o = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_796_52244)"><path d="M12.5 22.5L15 25L21.25 18.75" stroke="url(#paint0_linear_796_52244)" stroke-width="2" stroke-miterlimit="10"></path><path d="M26.66 22.5H36.2501C37.6307 22.5 38.7501 23.6193 38.7501 25V33.75C38.7501 35.1307 37.6307 36.25 36.2501 36.25H16.25" stroke="url(#paint1_linear_796_52244)" stroke-width="2" stroke-miterlimit="10"></path><path d="M12.0613 13.75H3.75C2.36931 13.75 1.25 14.8693 1.25 16.25V20C1.25 21.3807 2.36931 22.5 3.75 22.5H5" stroke="url(#paint2_linear_796_52244)" stroke-width="2" stroke-miterlimit="10"></path><path d="M16.7383 31.25C21.916 31.25 26.1133 27.0527 26.1133 21.875C26.1133 16.6973 21.916 12.5 16.7383 12.5C11.5606 12.5 7.36328 16.6973 7.36328 21.875C7.36328 27.0527 11.5606 31.25 16.7383 31.25Z" stroke="url(#paint3_linear_796_52244)" stroke-width="2" stroke-miterlimit="10"></path><path d="M11.0313 29.3742L4.11044 36.295L1.80469 33.9893L8.72556 27.0684" stroke="url(#paint4_linear_796_52244)" stroke-width="2" stroke-miterlimit="10"></path><path d="M13.7708 38.7292C15.1404 38.7292 16.2506 37.6189 16.2506 36.2493C16.2506 34.8798 15.1404 33.7695 13.7708 33.7695C12.4013 33.7695 11.291 34.8798 11.291 36.2493C11.291 37.6189 12.4013 38.7292 13.7708 38.7292Z" stroke="url(#paint5_linear_796_52244)" stroke-width="2" stroke-miterlimit="10"></path><path d="M26.25 13.75H31.25C32.6307 13.75 33.75 12.6307 33.75 11.25C33.75 9.86931 32.6307 8.75 31.25 8.75H17.5V1.25H23.6404L22.01 3.125L23.6404 5H17.5" stroke="url(#paint6_linear_796_52244)" stroke-width="2" stroke-miterlimit="10"></path></g><defs><linearGradient id="paint0_linear_796_52244" x1="21.25" y1="18.75" x2="15.3379" y2="27.0271" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint1_linear_796_52244" x1="38.7501" y1="22.5" x2="26.5143" y2="42.5225" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint2_linear_796_52244" x1="12.0613" y1="13.75" x2="3.50362" y2="24.3239" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint3_linear_796_52244" x1="26.1133" y1="12.5" x2="7.36345" y2="31.2502" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint4_linear_796_52244" x1="11.0313" y1="27.0684" x2="1.80471" y2="36.2951" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint5_linear_796_52244" x1="16.2506" y1="33.7695" x2="11.2911" y2="38.7292" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint6_linear_796_52244" x1="33.75" y1="1.25" x2="21.6684" y2="16.9564" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><clipPath id="clip0_796_52244"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$o = [
  _hoisted_2$o
];
function render$o(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$o, _hoisted_4$o);
}
const ResearchGradientIcon = { render: render$o };
const _hoisted_1$n = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$n = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_796_52226)"><path d="M6.91797 8.75H19.418M6.91797 8.75V23.75M6.91797 8.75L19.418 23.75M19.418 8.75V23.75M19.418 8.75L6.91797 23.75M19.418 23.75H6.91797M23.168 13.75H32.0965M23.168 8.75H35.668M23.168 28.75H3.16797C2.47759 28.75 1.91797 28.1904 1.91797 27.5V5C1.91797 4.30963 2.47759 3.75 3.16797 3.75H38.168C38.8583 3.75 39.418 4.30963 39.418 5V18.75M36.4002 28.1434L25.7936 38.75H22.2581V35.2144L32.8647 24.6079M36.4002 28.1434L32.8647 24.6079M36.4002 28.1434L39.0518 25.4918C39.54 25.0036 39.54 24.2121 39.0518 23.724L37.2841 21.9563C36.796 21.4681 36.0045 21.4681 35.5163 21.9563L32.8647 24.6079M14.418 38.75H18.168M8.16684 32.5019V28.75M8.16797 35V36.25C8.16797 37.6307 9.28728 38.75 10.668 38.75H11.918" stroke="url(#paint0_linear_796_52226)" stroke-width="2" stroke-miterlimit="10"></path></g><defs><linearGradient id="paint0_linear_796_52226" x1="39.418" y1="3.75" x2="4.50147" y2="41.1612" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><clipPath id="clip0_796_52226"><rect width="40" height="40" fill="white" transform="translate(0.667969)"></rect></clipPath></defs>', 2);
const _hoisted_4$n = [
  _hoisted_2$n
];
function render$n(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$n, _hoisted_4$n);
}
const UXGradientIcon = { render: render$n };
const _hoisted_1$m = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$m = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_796_48529)"><path d="M2.83398 7.5V11.25M11.584 2.49944H7.83398M24.2299 2.49944H20.334M17.8343 2.49938H14.0839M2.83398 13.75V17.5M29.084 13.75V17.5M29.084 20V23.75M11.584 28.75H7.83398M17.834 28.7499H14.0839M24.084 28.7499H20.334M2.83398 20V23.6771M29.084 7.5V11.25M40.334 23.75H35.334C34.6436 23.75 34.084 23.1904 34.084 22.5V8.75C34.084 8.05963 34.6436 7.5 35.334 7.5H40.334M7.83398 40V35C7.83398 34.3096 8.39361 33.75 9.08398 33.75H22.834C23.5244 33.75 24.084 34.3096 24.084 35V40M2.20898 1.25H3.45898C3.80416 1.25 4.08398 1.52982 4.08398 1.875V3.125C4.08398 3.47018 3.80416 3.75 3.45898 3.75H2.20898C1.86381 3.75 1.58398 3.47018 1.58398 3.125V1.875C1.58398 1.52982 1.86381 1.25 2.20898 1.25ZM28.459 1.25H29.709C30.0542 1.25 30.334 1.52982 30.334 1.875V3.125C30.334 3.47018 30.0542 3.75 29.709 3.75H28.459C28.1138 3.75 27.834 3.47018 27.834 3.125V1.875C27.834 1.52982 28.1138 1.25 28.459 1.25ZM2.20898 27.5H3.45898C3.80416 27.5 4.08398 27.7798 4.08398 28.125V29.375C4.08398 29.7202 3.80416 30 3.45898 30H2.20898C1.86381 30 1.58398 29.7202 1.58398 29.375V28.125C1.58398 27.7798 1.86381 27.5 2.20898 27.5ZM27.6881 25.0729V36.9479L31.6464 32.9896L37.1881 32.1979L27.6881 25.0729ZM9.08398 7.5H22.834C23.5243 7.5 24.084 8.05964 24.084 8.75V22.5C24.084 23.1904 23.5243 23.75 22.834 23.75H9.08398C8.39363 23.75 7.83398 23.1904 7.83398 22.5V8.75C7.83398 8.05964 8.39363 7.5 9.08398 7.5Z" stroke="url(#paint0_linear_796_48529)" stroke-width="2" stroke-miterlimit="10"></path></g><defs><linearGradient id="paint0_linear_796_48529" x1="40.334" y1="1.25" x2="1.58434" y2="40.0004" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><clipPath id="clip0_796_48529"><rect width="40" height="40" fill="white" transform="translate(0.333984)"></rect></clipPath></defs>', 2);
const _hoisted_4$m = [
  _hoisted_2$m
];
function render$m(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _hoisted_4$m);
}
const InterfaceGradientIcon = { render: render$m };
const _hoisted_1$l = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$l = /* @__PURE__ */ createElementVNode("path", {
  d: "M16.25 30H30M13.6569 15.6701C13.2073 14.2028 11.1813 12.5 8.75 12.5M8.75 12.5C6.33375 12.5 4.31781 14.1819 3.85156 15.6429M8.75 12.5C7.45556 12.5 6.40625 11.4507 6.40625 10.1562V8.59375C6.40625 7.29931 7.45556 6.25 8.75 6.25C10.0444 6.25 11.0938 7.29931 11.0938 8.59375V10.1562C11.0938 11.4507 10.0444 12.5 8.75 12.5ZM20 16.25C20 14.1792 20.3213 12.1209 20.9524 10.1487L23 3.75H25L27.0476 10.1487C27.6787 12.1209 28 14.1792 28 16.25M20.3671 12.5H27.6329M31.25 2.5V11.25M33.75 35H6.25C3.48858 35 1.25 32.7614 1.25 30C1.25 27.2386 3.48858 25 6.25 25H33.75C36.5114 25 38.75 27.2386 38.75 30C38.75 32.7614 36.5114 35 33.75 35ZM11.25 30C11.25 30.6904 10.6904 31.25 10 31.25C9.30964 31.25 8.75 30.6904 8.75 30C8.75 29.3096 9.30964 28.75 10 28.75C10.6904 28.75 11.25 29.3096 11.25 30ZM16.25 10C16.25 14.1421 12.8921 17.5 8.75 17.5C4.60786 17.5 1.25 14.1421 1.25 10C1.25 5.85786 4.60786 2.5 8.75 2.5C12.8921 2.5 16.25 5.85786 16.25 10ZM31.2501 13.7499C31.2501 14.4403 31.8097 15 32.5001 15H34.9998C36.3805 15 37.5 13.8231 37.5 12.2494V10.3498C37.5 8.77613 36.3807 7.50044 35 7.50044H31.25L31.2501 13.7499Z",
  stroke: "url(#paint0_linear_796_47431)",
  "stroke-width": "2",
  "stroke-miterlimit": "10"
}, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("linearGradient", {
    id: "paint0_linear_796_47431",
    x1: "38.75",
    y1: "2.5",
    x2: "6.58033",
    y2: "39.6195",
    gradientUnits: "userSpaceOnUse"
  }, [
    /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#407A7A" }),
    /* @__PURE__ */ createElementVNode("stop", {
      offset: "1",
      "stop-color": "#002832"
    })
  ])
], -1);
const _hoisted_4$l = [
  _hoisted_2$l,
  _hoisted_3$4
];
function render$l(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _hoisted_4$l);
}
const DesignGradientIcon = { render: render$l };
const _hoisted_1$k = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$k = /* @__PURE__ */ createElementVNode("g", { "clip-path": "url(#clip0_796_52476)" }, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M10.6641 33.75H14.4141M10.6641 33.75C10.6641 35.8211 8.98513 37.5 6.91406 37.5C4.84299 37.5 3.16406 35.8211 3.16406 33.75C3.16406 31.6789 4.84299 30 6.91406 30C8.98513 30 10.6641 31.6789 10.6641 33.75ZM16.9141 33.75H20.6641M23.1641 33.75H26.9141M25.6448 20H29.3948M11.9141 6.25H15.6641M18.1641 6.25H21.9141M24.4141 6.25H28.1641M19.3948 20H23.1448M11.9141 20H16.9141M31.9141 32.5L34.4141 35L40.0391 29.375M36.9141 28.75H30.6641C29.9737 28.75 29.4141 29.3096 29.4141 30V37.5C29.4141 38.1904 29.9737 38.75 30.6641 38.75H38.1641C38.8544 38.75 39.4141 38.1904 39.4141 37.5V33.75M4.41406 17.5L6.91406 20L12.5391 14.375M9.05694 13.75H3.16406C2.47369 13.75 1.91406 14.3096 1.91406 15V22.5C1.91406 23.1904 2.47369 23.75 3.16406 23.75H10.6641C11.3544 23.75 11.9141 23.1904 11.9141 22.5V18.75M35.6641 25V22.5C35.6641 21.1193 34.5448 20 33.1641 20H31.8948M5.66406 10V8.75C5.66406 7.36931 6.78337 6.25 8.16406 6.25H9.41406M28.1641 2.5V13.75L31.9141 10L37.1641 9.25L28.1641 2.5Z",
    stroke: "#002832",
    "stroke-width": "2",
    "stroke-miterlimit": "10"
  })
], -1);
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("clipPath", { id: "clip0_796_52476" }, [
    /* @__PURE__ */ createElementVNode("rect", {
      width: "40",
      height: "40",
      fill: "white",
      transform: "translate(0.664062)"
    })
  ])
], -1);
const _hoisted_4$k = [
  _hoisted_2$k,
  _hoisted_3$3
];
function render$k(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$k, _hoisted_4$k);
}
const SupportGradientIcon = { render: render$k };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheServicesHeroSection",
  __ssrInlineRender: true,
  props: {
    modelValue: null
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const discovery = [
      {
        icon: WorkshopsIcon,
        iconActive: WorkshopsGradientIcon,
        label: "Workshops & analysis",
        value: "workshops"
      },
      {
        icon: ResearchIcon,
        iconActive: ResearchGradientIcon,
        label: "User research",
        value: "research"
      },
      {
        icon: UX,
        iconActive: UXGradientIcon,
        label: "User experience design",
        value: "experience"
      },
      {
        icon: InterfaceIcon,
        iconActive: InterfaceGradientIcon,
        label: "User interface design",
        value: "interface"
      },
      {
        icon: Design,
        iconActive: DesignGradientIcon,
        label: "Design system",
        value: "design"
      },
      {
        icon: SupportIcon$1,
        iconActive: SupportGradientIcon,
        label: "Continuous support",
        value: "support"
      }
    ];
    const breakpoints = useBreakpoints(breakpointsConst);
    const md = ref(breakpoints.smaller("md"));
    const swiperOptions = computed(() => ({
      slidesPerView: 1,
      spaceBetween: 24,
      navigation: false,
      loop: true,
      watchSlidesVisibility: true,
      autoplay: {
        delay: 2e3
      }
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppButton = __unplugin_components_0;
      const _component_AppSlider = __unplugin_components_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative page-content" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(BackgroundMobileLeft), { class: "absolute top-28 left-0 md:hidden" }, null, _parent));
      _push(ssrRenderComponent(unref(BackgroundDesktop), { class: "hidden absolute -left-42 md:block -top-60 -z-1" }, null, _parent));
      _push(`<div class="mt-3.5rem md:mt-40 md:text-center"><h1 class="hero-title md:text-[2.5rem] md:leading-[120%] md:mt-6"> We are a full-service product design agency_ </h1><p class="mt-6 text-blue-200"> Our approach to design is technical - not purely aesthetic. Every design decision is process and data-driven <br class="hidden md:block"> to deliver an intuitive and delightful experience for your users. </p><div class="mt-2.5rem">`);
      _push(ssrRenderComponent(_component_AppButton, { href: "mailto:hello@semiflat.com" }, {
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
      _push(ssrRenderComponent(_component_AppButton, {
        text: "",
        target: "_blank",
        href: "https://calendly.com/d/g3b-8j5-vzs/semiflat-design-partner-introduction"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Schedule a call`);
          } else {
            return [
              createTextVNode("Schedule a call")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div>`);
      if (unref(md)) {
        _push(ssrRenderComponent(_component_AppSlider, {
          class: "mt-14 relative",
          style: {},
          "swiper-options": unref(swiperOptions)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(discovery, (el, i) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: i,
                  class: "z-10"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="shrink-0 mx-auto flex items-center justify-center"${_scopeId2}><div class="${ssrRenderClass([{
                        "before:bg-white before:content-none before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:rounded-4 before:border-1 before:border-[#BCDCDC] shadow-primary": el.value === __props.modelValue
                      }, "py-6 px-8 transition-all duration-300 rounded-4 min-w-[13.75rem] my-0.25 mx-auto relative"])}"${_scopeId2}>`);
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(el.icon), { class: "mx-auto mb-4 text-turquoise-400 relative z-1" }, null), _parent3, _scopeId2);
                      _push3(`<p class="font-semibold leading-[150%] cursor-pointer text-center relative z-1"${_scopeId2}>${ssrInterpolate(el.label)}</p></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "shrink-0 mx-auto flex items-center justify-center" }, [
                          createVNode("div", {
                            class: ["py-6 px-8 transition-all duration-300 rounded-4 min-w-[13.75rem] my-0.25 mx-auto relative", {
                              "before:bg-white before:content-none before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:rounded-4 before:border-1 before:border-[#BCDCDC] shadow-primary": el.value === __props.modelValue
                            }],
                            onClick: ($event) => emit("update:modelValue", el.value)
                          }, [
                            (openBlock(), createBlock(resolveDynamicComponent(el.icon), { class: "mx-auto mb-4 text-turquoise-400 relative z-1" })),
                            createVNode("p", { class: "font-semibold leading-[150%] cursor-pointer text-center relative z-1" }, toDisplayString(el.label), 1)
                          ], 10, ["onClick"])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(), createBlock(Fragment, null, renderList(discovery, (el, i) => {
                  return createVNode(unref(SwiperSlide), {
                    key: i,
                    class: "z-10"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "shrink-0 mx-auto flex items-center justify-center" }, [
                        createVNode("div", {
                          class: ["py-6 px-8 transition-all duration-300 rounded-4 min-w-[13.75rem] my-0.25 mx-auto relative", {
                            "before:bg-white before:content-none before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:rounded-4 before:border-1 before:border-[#BCDCDC] shadow-primary": el.value === __props.modelValue
                          }],
                          onClick: ($event) => emit("update:modelValue", el.value)
                        }, [
                          (openBlock(), createBlock(resolveDynamicComponent(el.icon), { class: "mx-auto mb-4 text-turquoise-400 relative z-1" })),
                          createVNode("p", { class: "font-semibold leading-[150%] cursor-pointer text-center relative z-1" }, toDisplayString(el.label), 1)
                        ], 10, ["onClick"])
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 64))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="grid grid-cols-3 gap-x-8 gap-y-4 mt-40 z-10 relative"><!--[-->`);
        ssrRenderList(discovery, (el, i) => {
          _push(`<div class="${ssrRenderClass([{
            "before:bg-white before:content-none before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:rounded-4 before:border-1 before:border-[#BCDCDC] shadow-primary": el.value === __props.modelValue
          }, "text-center group p-6 w-full transition-all cursor-pointer duration-300 rounded-4 relative"])}">`);
          if (el.value === __props.modelValue) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(el.iconActive), { class: "mx-auto mb-4 text-turquoise-400 relative z-1" }, null), _parent);
          } else {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(el.icon), { class: "mx-auto mb-4 text-turquoise-400 relative z-1" }, null), _parent);
          }
          _push(`<p class="font-semibold leading-[150%] transition-all duration-300 gradient-text relative z-1">${ssrInterpolate(el.label)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const TheServicesHeroSection_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/services/TheServicesHeroSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const WorkshopIll = "/semiflatv4/assets/illustration-workshop.6defe8db.svg";
const ResearchIll = "/semiflatv4/assets/illustration-research.952cbe4b.svg";
const InterfaceIll = "/semiflatv4/assets/illustration-interface.490d000f.svg";
const ExperienceIll = "/semiflatv4/assets/illustration-experience.0690679d.svg";
const DesignIll = "/semiflatv4/assets/illustration-design.959c3acc.svg";
const SupportIll = "/semiflatv4/assets/illustration-support.303598e8.svg";
const _hoisted_1$j = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$j = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_839_50938)"><mask id="mask0_839_50938" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="39" height="40"><path d="M0.5 39.5011V0.5H38.2897V39.5011H0.5Z" fill="white" stroke="white"></path></mask><g mask="url(#mask0_839_50938)"><path d="M1.21289 10H25.4553M7.2735 32.5H2.42501C1.75556 32.5 1.21289 31.9404 1.21289 31.25V2.5C1.21289 1.80963 1.75556 1.25 2.42501 1.25H36.3644C37.0339 1.25 37.5765 1.80963 37.5765 2.5V13.75M4.84635 20H20.6059M4.84695 23.7503H16.9705M32.7276 38.7511H38.7905M30.3038 32.5C29.2997 32.5 28.4856 33.3395 28.4856 34.375C28.4856 36.25 30.3038 38.125 30.3038 38.125C30.3038 38.125 32.122 36.25 32.122 34.375C32.122 33.3395 31.3079 32.5 30.3038 32.5ZM30.3038 32.5H37.5765C37.5765 32.5 37.5765 29.6875 37.5765 28.75C37.5765 26.4052 35.0712 25.9375 35.0712 25.9375M30.3038 32.5H23.0311V28.75C23.0311 26.4052 25.5364 25.9375 25.5364 25.9375M33.9402 32.5C33.9402 32.5 35.7583 23.4375 35.7583 18.75C35.7583 14.0625 30.3038 10 30.3038 10C30.3038 10 24.8493 14.0625 24.8493 18.75C24.8493 23.4375 26.6674 32.5 26.6674 32.5M27.8796 38.75H22.8341M22.8341 38.75C21.2693 38.75 20.0006 37.4417 20.0006 35.828C20.0006 34.3069 19.0335 32.8905 17.5917 32.5693C16.8141 32.396 16.0988 32.5616 15.4966 32.9101C14.9107 31.2179 13.3582 30 11.5158 30C9.09701 30 7.15119 32.0872 7.27931 34.6104C7.39944 36.9761 9.45847 38.75 11.7557 38.75H22.8341ZM6.06138 5.625C6.06138 5.97018 5.79003 6.25 5.45531 6.25C5.1206 6.25 4.84925 5.97018 4.84925 5.625C4.84925 5.27982 5.1206 5 5.45531 5C5.79003 5 6.06138 5.27982 6.06138 5.625ZM10.9099 5.625C10.9099 5.97018 10.6385 6.25 10.3038 6.25C9.96908 6.25 9.69774 5.97018 9.69774 5.625C9.69774 5.27982 9.96908 5 10.3038 5C10.6385 5 10.9099 5.27982 10.9099 5.625ZM15.7583 5.625C15.7583 5.97018 15.487 6.25 15.1523 6.25C14.8176 6.25 14.5462 5.97018 14.5462 5.625C14.5462 5.27982 14.8176 5 15.1523 5C15.487 5 15.7583 5.27982 15.7583 5.625ZM32.122 19.375C32.122 20.4105 31.3079 21.25 30.3038 21.25C29.2997 21.25 28.4856 20.4105 28.4856 19.375C28.4856 18.3395 29.2997 17.5 30.3038 17.5C31.3079 17.5 32.122 18.3395 32.122 19.375Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_839_50938"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$j = [
  _hoisted_2$j
];
function render$j(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$j, _hoisted_4$j);
}
const FasterIcon = { render: render$j };
const _hoisted_1$i = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$i = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_796_48937)"><mask id="mask0_796_48937" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"><path d="M0.5 39.5V0.5H39.5V39.5H0.5Z" fill="white" stroke="white"></path></mask><g mask="url(#mask0_796_48937)"><path d="M16.25 18.7536V21.2502C16.2499 21.9406 16.8095 22.5003 17.4999 22.5002H22.5006C23.1911 22.5 23.7507 21.9402 23.7506 21.2497L23.75 18.7536M16.25 18.7536C16.25 14.6088 12.4999 13.1327 12.4999 8.67816C12.4999 4.22366 15.2096 1.25391 19.2741 1.25391H20.7258C24.7904 1.25391 27.5 4.22366 27.5 8.67816C27.5 13.1327 23.75 14.6088 23.75 18.7536M16.25 18.7536H23.75M20 22.4983V40.001M11.25 27.501H8.75C6.67887 27.501 5 29.1798 5 31.251V32.501H7.5C9.57113 32.501 11.25 30.8221 11.25 28.751V27.501ZM11.25 27.501H7.91663C4.23475 27.501 1.25 24.367 1.25 20.501V18.751H4.58337C8.26525 18.751 11.25 21.885 11.25 25.751V27.501ZM11.25 27.501C16.0825 27.501 20 31.4185 20 36.251C20 31.4185 23.9175 27.501 28.75 27.501M28.75 27.501H31.75C34.2352 27.501 36.25 25.4023 36.25 22.8135V21.251H33.25C30.7648 21.251 28.75 23.3496 28.75 25.9385V27.501ZM28.75 27.501L32.0834 27.5011C35.7653 27.5011 38.75 30.6351 38.75 34.5011V36.2511H35.4166C31.7347 36.2511 28.75 33.1171 28.75 29.2511V27.501ZM20 13.751V18.751M20 13.751C18.6193 13.751 17.5 12.6317 17.5 11.2509M20 13.751C21.3807 13.751 22.5 12.6317 22.5 11.2509M8.75 10.0009L1.25 11.2509M38.75 11.2509L31.25 10.0009M8.75 5.00091L1.25 3.75091M38.75 3.75091L31.25 5.00091" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_796_48937"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$i = [
  _hoisted_2$i
];
function render$i(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$i, _hoisted_4$i);
}
const FoundationIcon = { render: render$i };
const _hoisted_1$h = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$h = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_796_48943)"><mask id="mask0_796_48943" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="40"><path d="M40.666 0H0.666016V40H40.666V0Z" fill="white"></path></mask><g mask="url(#mask0_796_48943)"><path d="M25.6658 19.9697H23.3983C22.428 19.9697 21.476 20.2335 20.644 20.7328L16.9521 22.9485C16.111 23.4534 15.1471 23.7173 14.1661 23.7115L10.666 23.6908M29.416 23.75C31.4871 23.75 33.166 22.0711 33.166 20V19.9697H28.166M10.666 36.2204L13.4125 36.25C14.8819 36.25 16.3184 36.6849 17.541 37.5C18.7636 38.3151 20.2001 38.75 21.6695 38.75H31.6761C32.7116 38.75 33.5511 37.9105 33.5511 36.875C33.5511 35.8395 32.7116 35 31.6761 35H29.416H33.1501C34.1856 35 35.0251 34.1605 35.0251 33.125C35.0251 32.0895 34.1856 31.25 33.1501 31.25M33.1501 31.25H29.416M33.1501 31.25C34.1856 31.25 35.0251 30.4105 35.0251 29.375C35.0251 28.3395 34.1856 27.5 33.1501 27.5H29.416H33.791C34.8265 27.5 35.666 26.6605 35.666 25.625C35.666 24.5895 34.8265 23.75 33.791 23.75H24.416M10.666 21.1906V38.7204M6.91602 21.1906V38.7204M28.1661 13.7485V23.7485M28.1661 13.7485L28.166 3.74963H19.4163V13.7496L28.1661 13.7485ZM19.416 11.25V1.25H8.16602L11.3803 6.25L8.16602 11.25H19.416Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_796_48943"><rect width="40" height="40" fill="white" transform="translate(0.666016)"></rect></clipPath></defs>', 2);
const _hoisted_4$h = [
  _hoisted_2$h
];
function render$h(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$h, _hoisted_4$h);
}
const LeadershipIcon = { render: render$h };
const _hoisted_1$g = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$g = /* @__PURE__ */ createElementVNode("g", { "clip-path": "url(#clip0_796_48949)" }, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M5.33398 31.2519C4.41061 12.7847 13.0363 4.54866 25.1649 1.50528C31.2892 -0.0314663 35.9934 6.95385 32.1999 12.0013C32.1656 12.047 32.1314 12.0925 32.097 12.1378C30.9682 13.6317 29.2639 14.5784 27.397 14.7225L23.5312 15.0208L26.5848 18.3754C20.3757 24.284 14.788 28.795 5.33398 31.2519ZM5.33398 31.2519L1.58398 33.7519M5.33398 31.2519L7.83398 35.0019M5.33398 31.2519C4.67198 33.0338 4.08398 36.2519 4.08398 40.0019M5.33398 31.2519C9.53992 19.931 21.2489 8.88941 31.526 3.23103M39.1146 13.7519C39.1146 24.4662 30.0885 33.871 16.584 36.2519M39.084 31.2519C36.5831 36.251 30.334 38.751 26.584 38.751M14.084 17.501C13.6305 13.4185 14.2512 9.99241 15.5568 5.64897M10.2412 22.1949C13.8979 22.6504 18.0153 22.5759 22.458 22.1257",
    stroke: "#54ABA3",
    "stroke-width": "2",
    "stroke-miterlimit": "10"
  })
], -1);
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("clipPath", { id: "clip0_796_48949" }, [
    /* @__PURE__ */ createElementVNode("rect", {
      width: "40",
      height: "40",
      fill: "white",
      transform: "translate(0.333984)"
    })
  ])
], -1);
const _hoisted_4$g = [
  _hoisted_2$g,
  _hoisted_3$2
];
function render$g(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$g, _hoisted_4$g);
}
const PartnershipIcon = { render: render$g };
const _hoisted_1$f = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$f = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_796_49714)"><mask id="mask0_796_49714" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"><path d="M0.5 39.5V0.5H39.5V39.5H0.5Z" fill="white" stroke="white"></path></mask><g mask="url(#mask0_796_49714)"><path d="M20.0001 30.8334C17.9507 30.8334 16.2892 29.1719 16.2892 27.1224V24.6484C16.2892 22.599 17.9507 20.9375 20.0002 20.9375C22.0496 20.9375 23.7111 22.599 23.7111 24.6485V27.1225C23.7111 29.1719 22.0496 30.8334 20.0001 30.8334ZM20.0001 30.8334C23.8259 30.8334 27.0177 33.4962 27.756 35.8096M20.0001 30.8334C16.1744 30.8334 12.9825 33.4962 12.2443 35.8096M16.2501 10C16.2501 10 20.5332 10 21.8045 10C24.347 10 24.347 6.25 21.8045 6.25C20.957 6.25 20.1095 6.25 19.262 6.25C16.7195 6.25 16.7195 2.5 19.262 2.5C20.5332 2.5 23.7489 2.5 23.7489 2.5M19.9876 10V12.5M19.9876 0V2.5M31.8751 26.875C31.8751 33.4334 26.5585 38.75 20.0001 38.75C13.4417 38.75 8.12514 33.4334 8.12514 26.875C8.12514 20.3166 13.4417 15 20.0001 15C26.5585 15 31.8751 20.3166 31.8751 26.875ZM7.79388 5.18263L9.16139 7.9535L12.2193 8.39787C12.4879 8.43687 12.5952 8.76712 12.4008 8.95662L10.188 11.1135L10.7104 14.159C10.7563 14.4266 10.4754 14.6306 10.2351 14.5044L7.50001 13.0665L4.76489 14.5044C4.52451 14.6308 4.24376 14.4266 4.28964 14.159L4.81201 11.1135L2.59926 8.95662C2.40489 8.76712 2.51214 8.43687 2.78076 8.39787L5.83863 7.9535L7.20614 5.18263C7.32626 4.93913 7.67376 4.93913 7.79388 5.18263ZM32.8721 14.8392L36.8541 10.8572C37.8945 9.81687 38.0227 8.11925 37.0466 7.01813C35.9866 5.82238 34.156 5.78112 33.0429 6.89425L32.8721 7.065L32.7014 6.89425C31.5881 5.78112 29.7575 5.8225 28.6976 7.01813C27.7216 8.11913 27.8497 9.81675 28.8901 10.8572L32.8721 14.8392Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_796_49714"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$f = [
  _hoisted_2$f
];
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_4$f);
}
const NeedsIcon = { render: render$f };
const _hoisted_1$e = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$e = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_796_49726)"><mask id="mask0_796_49726" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="40"><path d="M0.833984 39.5V0.5H39.834V39.5H0.833984Z" fill="white" stroke="white"></path></mask><g mask="url(#mask0_796_49726)"><path d="M5.95861 28.75L11.6429 23.0658C12.4002 22.3084 13.4455 21.911 14.5147 21.9739L19.0469 22.2405C21.4217 22.3803 23.1701 24.5199 22.8336 26.875M15.3336 26.875H25.9586L31.7807 21.0529C33.3977 19.4359 36.0194 19.4359 37.6364 21.0529L37.8335 21.25L27.6819 31.4016C26.9786 32.1049 26.0247 32.5 25.0302 32.5H13.4585L11.5835 34.375M13.4586 36.25L4.08361 26.875M10.9586 38.75L1.58361 29.375M24.0827 13.75L20.3336 10V3.7495M5.33361 11.25V15M5.33361 17.5V21.25M10.3336 16.25H6.58361M4.08398 16.2489H0.333984M35.3336 1.25V3.75M35.3336 6.25V8.75M39.0836 5H36.5836M34.0836 5H31.5836M29.0836 10C29.0836 14.8325 25.1661 18.75 20.3336 18.75C15.5011 18.75 11.5836 14.8325 11.5836 10C11.5836 5.16751 15.5011 1.25 20.3336 1.25C25.1661 1.25 29.0836 5.16751 29.0836 10Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_796_49726"><rect width="40" height="40" fill="white" transform="translate(0.333984)"></rect></clipPath></defs>', 2);
const _hoisted_4$e = [
  _hoisted_2$e
];
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_4$e);
}
const TimeIcon = { render: render$e };
const _hoisted_1$d = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$d = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_796_49720)"><mask id="mask0_796_49720" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="40"><path d="M40.666 0H0.666016V40H40.666V0Z" fill="white"></path></mask><g mask="url(#mask0_796_49720)"><path d="M29.416 38.75L29.4456 36.0035C29.4456 34.5341 29.8805 33.0976 30.6956 31.875C31.5106 30.6524 31.9456 29.2159 31.9456 27.7465V21.4899C31.9456 20.4544 31.1061 19.6149 30.0706 19.6149C29.0351 19.6149 28.1956 20.4544 28.1956 21.4899V22.2082V20.0159C28.1956 18.9804 27.3561 18.1409 26.3206 18.1409C25.2851 18.1409 24.4456 18.9804 24.4456 20.0159M24.4456 20.0159V22.2082M24.4456 20.0159C24.4456 18.9804 23.6061 18.1409 22.5706 18.1409C21.5351 18.1409 20.6956 18.9804 20.6956 20.0159V22.2084V11.7604C20.6956 10.7249 19.8561 9.88537 18.8206 9.88537C17.7851 9.88537 16.9456 10.7249 16.9456 11.7604V23.7501L14.5215 21.326C13.7893 20.5937 12.6021 20.5937 11.8699 21.326L11.7826 21.4132C11.1506 22.0452 11.0526 23.0355 11.5484 23.7791L18.1958 33.7501L18.1661 38.7501M4.72852 5.46875L7.54102 8.28125L13.166 2.65625M9.95177 1.25H3.04102C2.41964 1.25 1.91602 1.75362 1.91602 2.375V11.375C1.91602 11.9964 2.41964 12.5 3.04102 12.5H12.041C12.6624 12.5 13.166 11.9964 13.166 11.375V6.875M30.666 3.75L36.916 10M36.916 3.75L30.666 10M15.666 38.75H31.916M29.416 1.25H38.166C38.8564 1.25 39.416 1.80965 39.416 2.5V11.25C39.416 11.9404 38.8564 12.5 38.166 12.5H29.416C28.7256 12.5 28.166 11.9404 28.166 11.25V2.5C28.166 1.80965 28.7256 1.25 29.416 1.25Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_796_49720"><rect width="40" height="40" fill="white" transform="translate(0.666016)"></rect></clipPath></defs>', 2);
const _hoisted_4$d = [
  _hoisted_2$d
];
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_4$d);
}
const AssumptionsIcon = { render: render$d };
const _hoisted_1$c = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$c = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_796_51361)"><mask id="mask0_796_51361" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"><path d="M0.5 0.5H39.5V39.5H0.5V0.5Z" fill="white" stroke="white"></path></mask><g mask="url(#mask0_796_51361)"><path d="M20 11.25C18.7056 11.25 17.6562 10.2006 17.6562 8.90625V7.34375C17.6562 6.04937 18.7056 5 20 5C21.2944 5 22.3438 6.04937 22.3438 7.34375V8.90625C22.3438 10.2006 21.2944 11.25 20 11.25ZM20 11.25C22.4162 11.25 24.4321 12.9319 24.8984 14.3929M20 11.25C17.5838 11.25 15.5679 12.9319 15.1016 14.3929M6.25 22.5H12.5M27.5 22.5H33.75M7.5 7.49963L1.25038 1.25M7.5 11.25H0M32.5 7.49963L38.7496 1.25M32.5 11.25H40M27.5 8.75C27.5 12.8921 24.1421 16.25 20 16.25C15.8579 16.25 12.5 12.8921 12.5 8.75C12.5 4.60786 15.8579 1.25 20 1.25C24.1421 1.25 27.5 4.60786 27.5 8.75ZM33.75 25C33.75 32.6796 27.4542 38.8888 19.7424 38.7476C12.1729 38.6091 6.24987 32.1148 6.24987 24.544V17.5C6.24987 16.8096 6.8095 16.25 7.49987 16.25H11.2499C11.9402 16.25 12.4999 16.8096 12.4999 17.5V24.6855C12.4999 28.7921 15.6644 32.3733 19.7691 32.4965C24.0165 32.624 27.4999 29.2188 27.4999 25V17.5C27.4999 16.8096 28.0595 16.25 28.7499 16.25H32.4999C33.1903 16.25 33.7499 16.8096 33.7499 17.5L33.75 25Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_796_51361"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$c = [
  _hoisted_2$c
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_4$c);
}
const AttractingIcon = { render: render$c };
const _hoisted_1$b = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$b = /* @__PURE__ */ createElementVNode("mask", {
  id: "mask0_839_50976",
  style: { "mask-type": "luminance" },
  maskUnits: "userSpaceOnUse",
  x: "0",
  y: "0",
  width: "39",
  height: "40"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M0.5 39.5V0.5H38.2938V39.5H0.5Z",
    fill: "white",
    stroke: "white"
  })
], -1);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("g", { mask: "url(#mask0_839_50976)" }, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M11.4541 6.26112C9.50896 6.26112 7.72399 7.08749 6.4286 8.58662C4.1406 11.2355 4.39769 15.5641 7.00181 18.2375M28.4886 32.4989C26.9197 32.4989 25.6478 31.1871 25.6478 29.5691V27.616C25.6478 25.9979 26.9197 24.6863 28.4886 24.6863C30.0576 24.6863 31.3295 25.998 31.3295 27.616V29.5691C31.3295 31.1873 30.0576 32.4989 28.4886 32.4989ZM28.4886 32.4989C31.4174 32.4989 33.8611 34.6011 34.4262 36.4275M28.4886 32.4989C25.5599 32.4989 23.1164 34.6011 22.5513 36.4275M33.63 21.6424L34.3577 20.8955C38.2668 16.884 38.7483 10.3385 35.0811 6.09312C31.0987 1.48287 24.2206 1.32362 20.0382 5.61537L19.3966 6.27374L18.7551 5.61537C14.5726 1.32362 7.69454 1.48287 3.71212 6.09312C0.0449619 10.3384 0.526538 16.8839 4.43551 20.8955L19.3966 36.2489L20.966 34.6384M37.5797 29.3739C37.5797 34.5515 33.5095 38.7489 28.4887 38.7489C23.4679 38.7489 19.3978 34.5515 19.3978 29.3739C19.3978 24.1961 23.4679 19.9989 28.4887 19.9989C33.5095 19.9989 37.5797 24.1961 37.5797 29.3739Z",
    stroke: "#54ABA3",
    "stroke-width": "2",
    "stroke-miterlimit": "10"
  })
], -1);
const _hoisted_4$b = [
  _hoisted_2$b,
  _hoisted_3$1
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_4$b);
}
const LoyaltyIcon = { render: render$b };
const _hoisted_1$a = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$a = /* @__PURE__ */ createElementVNode("g", { "clip-path": "url(#clip0_796_51367)" }, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M1.91602 34.9991L7.30877 29.6064C8.02739 28.8878 9.01889 28.5109 10.0334 28.5705L14.3331 28.8234C16.5863 28.9559 18.4853 31.5148 18.1661 33.7491M10.666 33.7491H20.666L28.166 28.7491C30.2371 27.3684 33.0353 27.928 34.416 29.9991L22.8844 38.0713C22.254 38.5125 21.5033 38.7491 20.7339 38.7491H9.41602M34.9516 8.3005L34.9518 2.58625H40.666M30.666 1.42775C25.9321 1.42775 22.0946 5.26525 22.0946 9.99913C22.0946 14.733 25.9321 18.5705 30.666 18.5705C35.3999 18.5705 39.2374 14.733 39.2374 9.99913C39.2374 6.82863 37.516 4.06013 34.9568 2.57738M30.666 4.28488V9.99913L26.3803 12.8563M23.1694 5.84063C20.9968 3.04713 17.6035 1.25 13.7906 1.25C7.23252 1.25 1.91614 6.56638 1.91614 13.1245C1.91614 19.6826 7.23252 24.999 13.7906 24.999C19.1519 24.999 23.6831 21.4461 25.1586 16.5664M13.7905 17.0828C11.7411 17.0828 10.0798 15.4214 10.0798 13.372V10.8981C10.0798 8.84875 11.7411 7.18738 13.7905 7.18738C15.8399 7.18738 17.5013 8.84875 17.5013 10.8981V13.372C17.5013 15.4214 15.8399 17.0828 13.7905 17.0828ZM13.7905 17.0828C17.616 17.0828 20.808 19.7456 21.5461 22.0589M13.7905 17.0828C9.96489 17.0828 6.77327 19.7456 6.03514 22.0589",
    stroke: "#54ABA3",
    "stroke-width": "2",
    "stroke-miterlimit": "10"
  })
], -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("clipPath", { id: "clip0_796_51367" }, [
    /* @__PURE__ */ createElementVNode("rect", {
      width: "40",
      height: "40",
      fill: "white",
      transform: "translate(0.666016)"
    })
  ])
], -1);
const _hoisted_4$a = [
  _hoisted_2$a,
  _hoisted_3
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_4$a);
}
const RetentionIcon = { render: render$a };
const _hoisted_1$9 = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$9 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_839_50982)"><mask id="mask0_839_50982" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="40"><path d="M40.666 0H0.666016V40H40.666V0Z" fill="white"></path></mask><g mask="url(#mask0_839_50982)"><path d="M33.166 31.25V32.5C33.166 33.1904 32.6064 33.75 31.916 33.75H28.166M28.166 33.75C28.166 34.4404 27.6064 35 26.916 35C26.2256 35 25.666 34.4404 25.666 33.75C25.666 33.0596 26.2256 32.5 26.916 32.5C27.6064 32.5 28.166 33.0596 28.166 33.75ZM14.416 16.2496L10.6659 16.2501L5.66652 21.2501L5.66602 16.2501H3.16602C2.47564 16.2501 1.91602 15.6905 1.91602 15.0001V2.5C1.91602 1.80963 2.47564 1.25 3.16602 1.25H25.666C26.3564 1.25 26.916 1.80963 26.916 2.5V13.75M20.666 22.5C20.666 19.7386 22.9046 17.5 25.666 17.5H28.166C30.9274 17.5 33.166 19.7386 33.166 22.5M21.284 22.5H21.6069C22.4674 22.5 23.1659 23.1986 23.1659 24.059V29.691C23.1659 30.5515 22.4673 31.25 21.6069 31.25H21.284C19.5631 31.25 18.166 29.8529 18.166 28.132V25.6181C18.166 23.8972 19.5631 22.5 21.284 22.5ZM32.225 22.5H32.5479C34.2688 22.5 35.6659 23.8971 35.6659 25.618V28.1319C35.6659 29.8528 34.2688 31.2499 32.5479 31.2499H32.225C31.3645 31.2499 30.666 30.5513 30.666 29.6909V24.0589C30.666 23.1984 31.3646 22.5 32.225 22.5ZM15.8866 13.75H37.9454C38.7576 13.75 39.416 14.4084 39.416 15.2206V37.2794C39.416 38.0916 38.7576 38.75 37.9454 38.75H15.8866C15.0744 38.75 14.416 38.0916 14.416 37.2794V15.2206C14.416 14.4084 15.0744 13.75 15.8866 13.75ZM9.41602 8.75C9.41602 9.44035 8.85637 10 8.16602 10C7.47567 10 6.91602 9.44035 6.91602 8.75C6.91602 8.05965 7.47567 7.5 8.16602 7.5C8.85637 7.5 9.41602 8.05965 9.41602 8.75ZM15.666 8.75C15.666 9.44035 15.1064 10 14.416 10C13.7256 10 13.166 9.44035 13.166 8.75C13.166 8.05965 13.7256 7.5 14.416 7.5C15.1064 7.5 15.666 8.05965 15.666 8.75ZM21.916 8.75C21.916 9.44035 21.3564 10 20.666 10C19.9756 10 19.416 9.44035 19.416 8.75C19.416 8.05965 19.9756 7.5 20.666 7.5C21.3564 7.5 21.916 8.05965 21.916 8.75Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_839_50982"><rect width="40" height="40" fill="white" transform="translate(0.666016)"></rect></clipPath></defs>', 2);
const _hoisted_4$9 = [
  _hoisted_2$9
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_4$9);
}
const SupportIcon = { render: render$9 };
const _hoisted_1$8 = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$8 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_780_52366)"><mask id="mask0_780_52366" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="40"><path d="M40.666 0H0.666016V40H40.666V0Z" fill="white"></path></mask><g mask="url(#mask0_780_52366)"><path d="M10.1436 34.3225L18.9468 38.75H24.2943C24.3943 38.7501 24.4514 38.6361 24.3915 38.556L21.1898 34.273L9.03527 28.1716C8.41839 27.8619 7.66714 28.111 7.35739 28.728L6.23577 30.9623C5.92602 31.5791 6.17514 32.3304 6.79214 32.6401L10.1436 34.3225ZM10.1436 34.3225L12.3868 29.8539M35.6669 38.7497L28.167 38.75M31.916 30V35.0026M31.916 30C30.5353 30 29.416 28.8807 29.416 27.5M31.916 30C33.2968 30 34.416 28.8807 34.416 27.5M8.02302 7.5V11.25M16.773 2.49938H13.023M23.0234 2.49938H19.273M8.02302 13.75V17.5M28.023 12.5V16.25M28.023 6.25V10M16.773 22.5H13.023M23.023 22.4999H19.273M5.66602 6.25H3.16602C2.47564 6.25 1.91602 6.80963 1.91602 7.5V37.5C1.91602 38.1904 2.47564 38.75 3.16602 38.75H20.666M34.416 17.7095V7.5C34.416 6.80963 33.8564 6.25 33.166 6.25H30.666M18.4078 6.48925L20.1991 10.1189L24.2046 10.7009C24.5566 10.752 24.6971 11.1845 24.4424 11.4328L21.5439 14.258L22.2281 18.2474C22.2883 18.5979 21.9204 18.8652 21.6055 18.6997L18.0229 16.8163L14.4403 18.6997C14.1255 18.8652 13.7575 18.598 13.8176 18.2474L14.5019 14.258L11.6034 11.4328C11.3488 11.1845 11.4893 10.752 11.8411 10.7009L15.8466 10.1189L17.638 6.48925C17.7954 6.17038 18.2504 6.17038 18.4078 6.48925ZM35.666 35.0026C35.666 30.8579 39.416 29.3817 39.416 24.9272C39.416 20.4727 36.7064 17.503 32.6418 17.503H31.1901C27.1256 17.503 24.4159 20.4727 24.4159 24.9272C24.4159 29.3817 28.1659 30.8579 28.1659 35.0026H35.666ZM7.39802 1.25H8.64802C8.99319 1.25 9.27302 1.52982 9.27302 1.875V3.125C9.27302 3.47018 8.99319 3.75 8.64802 3.75H7.39802C7.05284 3.75 6.77302 3.47018 6.77302 3.125V1.875C6.77302 1.52982 7.05284 1.25 7.39802 1.25ZM27.541 1.25H28.791C29.1361 1.25 29.416 1.52982 29.416 1.875V3.125C29.416 3.47018 29.1361 3.75 28.791 3.75H27.541C27.1959 3.75 26.916 3.47018 26.916 3.125V1.875C26.916 1.52982 27.1959 1.25 27.541 1.25ZM7.39802 21.25H8.64802C8.99319 21.25 9.27302 21.5299 9.27302 21.875V23.125C9.27302 23.4701 8.99319 23.75 8.64802 23.75H7.39802C7.05284 23.75 6.77302 23.4701 6.77302 23.125V21.875C6.77302 21.5299 7.05284 21.25 7.39802 21.25Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_780_52366"><rect width="40" height="40" fill="white" transform="translate(0.666016)"></rect></clipPath></defs>', 2);
const _hoisted_4$8 = [
  _hoisted_2$8
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_4$8);
}
const BrandIcon = { render: render$8 };
const _hoisted_1$7 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$7 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_780_52360)"><mask id="mask0_780_52360" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"><path d="M0.5 39.5V0.5H39.5V39.5H0.5Z" fill="white" stroke="white"></path></mask><g mask="url(#mask0_780_52360)"><path d="M13.7464 6.25013H17.496C18.1861 6.25013 18.7456 6.80975 18.7456 7.50013V23.75M3.74938 17.5001C3.74938 17.5001 6.78174 17.5001 8.05268 17.5001C10.5945 17.5001 10.5945 13.7501 8.05268 13.7501C6.78174 13.7501 8.03143 13.7501 6.7605 13.7501C4.21864 13.7501 4.21864 10.0001 6.7605 10.0001C8.03143 10.0001 10.6227 10.0001 10.6227 10.0001M7.48594 17.5001V20.0001M7.48594 7.50013V10.0001M40.0002 30H24.994L24.9941 35L16.2462 26.25L24.994 17.5001V22.5H40.0002M18.7456 28.75V37.5M36.2512 0V2.5M36.2512 5V7.5M40.0002 3.75H37.5009M35.0015 3.75H32.5021M32.5006 7.5V17.5M37.5026 12.4939H27.5034M26.2529 1.25062V8.75M30.0041 4.99575H22.5051M13.4251 38.6535L1.25 35V6.25013L13.4041 1.38725C13.5682 1.32162 13.7469 1.4425 13.7469 1.61938V38.414C13.7469 38.5815 13.5855 38.7016 13.4251 38.6535Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_780_52360"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$7 = [
  _hoisted_2$7
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_4$7);
}
const BreakingIntoIcon = { render: render$7 };
const _hoisted_1$6 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$6 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_839_51026)"><mask id="mask0_839_51026" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"><path d="M0.5 0.5H39.5V39.5H0.5V0.5Z" fill="white" stroke="white"></path></mask><g mask="url(#mask0_839_51026)"><path d="M27.5008 40L27.5003 24.9995L31.4811 28.9809C32.019 29.5188 31.9558 30.4084 31.3471 30.8647L29.1448 32.5164C28.2221 33.2082 28.0008 34.5004 28.6405 35.4599C29.3636 36.5446 30.8726 36.7526 31.8624 35.9043L34.6511 33.5138C36.8624 31.6183 36.992 28.2415 34.9325 26.1821L29.1735 20.4231C28.1025 19.3521 26.65 18.7504 25.1354 18.7503H23.7503C23.7503 18.7503 22.4998 20.0001 20.0003 20.0001C17.4998 20.0001 16.2503 18.7501 16.2503 18.7501H14.8651C13.3505 18.7504 11.898 19.3521 10.827 20.4231L5.06802 26.1821C3.00864 28.2415 3.13814 31.6183 5.34939 33.5138L8.13814 35.9043C9.12789 36.7528 10.6369 36.5446 11.36 35.4599C11.9998 34.5004 11.7784 33.2082 10.8558 32.5164L8.65339 30.8647C8.04477 30.4084 7.98152 29.5188 8.51939 28.9809L12.5003 24.9995L12.4998 40M5.81527 25.4338C4.50002 23.0873 3.75027 20.3813 3.75027 17.5C3.75027 8.52538 11.0256 1.25 20.0003 1.25C28.9749 1.25 36.2503 8.52538 36.2503 17.5C36.2503 20.3814 35.5003 23.0878 34.1849 25.4343M20.2205 23.717L21.2461 25.7952L23.5395 26.1285C23.741 26.1577 23.8215 26.4054 23.6756 26.5475L22.0161 28.1651L22.4079 30.4492C22.4423 30.65 22.2316 30.803 22.0514 30.7083L20.0001 29.6299L17.9489 30.7083C17.7686 30.803 17.558 30.65 17.5924 30.4492L17.9841 28.1651L16.3246 26.5475C16.1788 26.4054 16.2593 26.1577 16.4608 26.1285L18.7541 25.7952L19.7798 23.717C19.8699 23.5344 20.1304 23.5344 20.2205 23.717ZM15.7809 12.0312C15.7809 14.3612 17.6696 16.25 19.9996 16.25C22.3296 16.25 24.2184 14.3612 24.2184 12.0312V9.21875C24.2184 6.88875 22.3296 5 19.9996 5C17.6696 5 15.7809 6.88875 15.7809 9.21875V12.0312Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_839_51026"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$6 = [
  _hoisted_2$6
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_4$6);
}
const ConfidenceIcon = { render: render$6 };
const _hoisted_1$5 = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_1651_23619)"><mask id="mask0_1651_23619" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="40"><path d="M0.833984 0.5H39.834V39.5H0.833984V0.5Z" fill="white" stroke="white"></path></mask><g mask="url(#mask0_1651_23619)"><path d="M1.58398 10H39.084M19.0834 33.75H2.83398C2.14361 33.75 1.58398 33.1904 1.58398 32.5V2.5C1.58398 1.80963 2.14361 1.25 2.83398 1.25H37.834C38.5244 1.25 39.084 1.80963 39.084 2.5V32.4997C39.084 33.19 38.5245 33.7496 37.8341 33.7497L31.5835 33.75M31.5835 33.75C31.5836 34.4405 31.0241 35.0015 30.3336 35.0017H25.2331C24.5429 35.0017 23.9834 34.4424 23.9831 33.7521L23.9824 31.2545M31.5835 33.75L31.5829 31.2506M23.9824 31.2545C23.9824 27.1097 20.2324 25.6336 20.2324 21.1791C20.2324 16.7246 22.9421 13.7549 27.0066 13.7549H28.4582C32.5229 13.7549 35.2325 16.7246 35.2325 21.1791C35.2325 25.6336 31.5829 27.1059 31.5829 31.2506M23.9824 31.2545L31.5829 31.2506M5.33436 14.9994H19.0841M5.33423 18.7499H16.5841M30.3346 38.75H25.334M27.8337 31.2549L27.834 23.7549M30.334 21.2519C30.334 22.6326 29.2147 23.7519 27.834 23.7519C26.4532 23.7519 25.334 22.6326 25.334 21.2519M6.58398 5.625C6.58398 5.97018 6.30416 6.25 5.95898 6.25C5.61381 6.25 5.33398 5.97018 5.33398 5.625C5.33398 5.27982 5.61381 5 5.95898 5C6.30416 5 6.58398 5.27982 6.58398 5.625ZM11.584 5.625C11.584 5.97018 11.3042 6.25 10.959 6.25C10.6138 6.25 10.334 5.97018 10.334 5.625C10.334 5.27982 10.6138 5 10.959 5C11.3042 5 11.584 5.27982 11.584 5.625ZM16.584 5.625C16.584 5.97018 16.3041 6.25 15.959 6.25C15.6139 6.25 15.334 5.97018 15.334 5.625C15.334 5.27982 15.6139 5 15.959 5C16.3041 5 16.584 5.27982 16.584 5.625ZM6.58398 27.5V25C6.58398 24.3096 7.07373 23.75 7.67773 23.75H14.2402C14.8442 23.75 15.334 24.3096 15.334 25V27.5C15.334 28.1904 14.8442 28.75 14.2402 28.75H7.67773C7.07373 28.75 6.58398 28.1904 6.58398 27.5Z" stroke="currentColor" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_1651_23619"><rect width="40" height="40" fill="white" transform="translate(0.333984)"></rect></clipPath></defs>', 2);
const _hoisted_4$5 = [
  _hoisted_2$5
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_4$5);
}
const IntuitiveIcon = { render: render$5 };
const _hoisted_1$4 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_839_51026)"><mask id="mask0_839_51026" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"><path d="M0.5 0.5H39.5V39.5H0.5V0.5Z" fill="white" stroke="white"></path></mask><g mask="url(#mask0_839_51026)"><path d="M27.5008 40L27.5003 24.9995L31.4811 28.9809C32.019 29.5188 31.9558 30.4084 31.3471 30.8647L29.1448 32.5164C28.2221 33.2082 28.0008 34.5004 28.6405 35.4599C29.3636 36.5446 30.8726 36.7526 31.8624 35.9043L34.6511 33.5138C36.8624 31.6183 36.992 28.2415 34.9325 26.1821L29.1735 20.4231C28.1025 19.3521 26.65 18.7504 25.1354 18.7503H23.7503C23.7503 18.7503 22.4998 20.0001 20.0003 20.0001C17.4998 20.0001 16.2503 18.7501 16.2503 18.7501H14.8651C13.3505 18.7504 11.898 19.3521 10.827 20.4231L5.06802 26.1821C3.00864 28.2415 3.13814 31.6183 5.34939 33.5138L8.13814 35.9043C9.12789 36.7528 10.6369 36.5446 11.36 35.4599C11.9998 34.5004 11.7784 33.2082 10.8558 32.5164L8.65339 30.8647C8.04477 30.4084 7.98152 29.5188 8.51939 28.9809L12.5003 24.9995L12.4998 40M5.81527 25.4338C4.50002 23.0873 3.75027 20.3813 3.75027 17.5C3.75027 8.52538 11.0256 1.25 20.0003 1.25C28.9749 1.25 36.2503 8.52538 36.2503 17.5C36.2503 20.3814 35.5003 23.0878 34.1849 25.4343M20.2205 23.717L21.2461 25.7952L23.5395 26.1285C23.741 26.1577 23.8215 26.4054 23.6756 26.5475L22.0161 28.1651L22.4079 30.4492C22.4423 30.65 22.2316 30.803 22.0514 30.7083L20.0001 29.6299L17.9489 30.7083C17.7686 30.803 17.558 30.65 17.5924 30.4492L17.9841 28.1651L16.3246 26.5475C16.1788 26.4054 16.2593 26.1577 16.4608 26.1285L18.7541 25.7952L19.7798 23.717C19.8699 23.5344 20.1304 23.5344 20.2205 23.717ZM15.7809 12.0312C15.7809 14.3612 17.6696 16.25 19.9996 16.25C22.3296 16.25 24.2184 14.3612 24.2184 12.0312V9.21875C24.2184 6.88875 22.3296 5 19.9996 5C17.6696 5 15.7809 6.88875 15.7809 9.21875V12.0312Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_839_51026"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$4 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_4$4);
}
const ConsistencyIcon = { render: render$4 };
const _hoisted_1$3 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_839_51026)"><mask id="mask0_839_51026" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"><path d="M0.5 0.5H39.5V39.5H0.5V0.5Z" fill="white" stroke="white"></path></mask><g mask="url(#mask0_839_51026)"><path d="M27.5008 40L27.5003 24.9995L31.4811 28.9809C32.019 29.5188 31.9558 30.4084 31.3471 30.8647L29.1448 32.5164C28.2221 33.2082 28.0008 34.5004 28.6405 35.4599C29.3636 36.5446 30.8726 36.7526 31.8624 35.9043L34.6511 33.5138C36.8624 31.6183 36.992 28.2415 34.9325 26.1821L29.1735 20.4231C28.1025 19.3521 26.65 18.7504 25.1354 18.7503H23.7503C23.7503 18.7503 22.4998 20.0001 20.0003 20.0001C17.4998 20.0001 16.2503 18.7501 16.2503 18.7501H14.8651C13.3505 18.7504 11.898 19.3521 10.827 20.4231L5.06802 26.1821C3.00864 28.2415 3.13814 31.6183 5.34939 33.5138L8.13814 35.9043C9.12789 36.7528 10.6369 36.5446 11.36 35.4599C11.9998 34.5004 11.7784 33.2082 10.8558 32.5164L8.65339 30.8647C8.04477 30.4084 7.98152 29.5188 8.51939 28.9809L12.5003 24.9995L12.4998 40M5.81527 25.4338C4.50002 23.0873 3.75027 20.3813 3.75027 17.5C3.75027 8.52538 11.0256 1.25 20.0003 1.25C28.9749 1.25 36.2503 8.52538 36.2503 17.5C36.2503 20.3814 35.5003 23.0878 34.1849 25.4343M20.2205 23.717L21.2461 25.7952L23.5395 26.1285C23.741 26.1577 23.8215 26.4054 23.6756 26.5475L22.0161 28.1651L22.4079 30.4492C22.4423 30.65 22.2316 30.803 22.0514 30.7083L20.0001 29.6299L17.9489 30.7083C17.7686 30.803 17.558 30.65 17.5924 30.4492L17.9841 28.1651L16.3246 26.5475C16.1788 26.4054 16.2593 26.1577 16.4608 26.1285L18.7541 25.7952L19.7798 23.717C19.8699 23.5344 20.1304 23.5344 20.2205 23.717ZM15.7809 12.0312C15.7809 14.3612 17.6696 16.25 19.9996 16.25C22.3296 16.25 24.2184 14.3612 24.2184 12.0312V9.21875C24.2184 6.88875 22.3296 5 19.9996 5C17.6696 5 15.7809 6.88875 15.7809 9.21875V12.0312Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_839_51026"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$3 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_4$3);
}
const StrongerBrandIcon = { render: render$3 };
const _hoisted_1$2 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_796_52702)"><mask id="mask0_796_52702" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40"><path d="M0.5 39.5V0.5H39.5V39.5H0.5Z" fill="white" stroke="white"></path></mask><g mask="url(#mask0_796_52702)"><path d="M20 30.7124C17.9289 30.7124 16.25 29.1237 16.25 27.164V24.7984C16.25 22.8386 17.9289 21.25 20 21.25C22.0711 21.25 23.75 22.8386 23.75 24.7984V27.164C23.75 29.1237 22.0711 30.7124 20 30.7124ZM20 30.7124C23.6995 30.7124 27.5 32.4866 27.5 36.035V37.5C27.5 38.1904 26.9404 38.75 26.25 38.75H13.75C13.0596 38.75 12.5 38.1904 12.5 37.5V36.035C12.5 32.4866 16.3005 30.7124 20 30.7124ZM32.5 29.4333C31.1193 29.4333 30 28.3741 30 27.0676V25.4906C30 24.1841 31.1193 23.125 32.5 23.125C33.8807 23.125 35 24.1841 35 25.4906V27.0676C35 28.3741 33.8807 29.4333 32.5 29.4333ZM32.5 29.4333C34.9664 29.4333 37.5 30.616 37.5 32.9816V35C37.5 35.6904 36.9404 36.25 36.25 36.25H31.25M32.5 29.4333C30.0336 29.4333 27.5 30.616 27.5 32.9816V35.625M7.50075 29.4333C8.8815 29.4333 10.0007 28.3741 10.0007 27.0676V25.4906C10.0007 24.1841 8.8815 23.125 7.50075 23.125C6.12 23.125 5.00075 24.1841 5.00075 25.4906V27.0676C5.00075 28.3741 6.12 29.4333 7.50075 29.4333ZM7.50075 29.4333C5.03437 29.4333 2.50075 30.616 2.50075 32.9816V35C2.50075 35.6904 3.06038 36.25 3.75075 36.25H8.75075M7.50075 29.4333C9.96712 29.4333 12.5007 30.616 12.5007 32.9816V35.625M13.75 8.75L20 2.5M20 2.5L26.25 8.75M20 2.5V16.25M2.5 13.75L7.5 8.75M7.5 8.75L12.5 13.75M7.5 8.75V18.75M27.5 13.75L32.5 8.75M32.5 8.75L37.5 13.75M32.5 8.75V18.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_796_52702"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$2 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4$2);
}
const GrowingIcon = { render: render$2 };
const _hoisted_1$1 = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_796_52714)"><mask id="mask0_796_52714" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="40"><path d="M0.832031 39.5V0.5H39.832V39.5H0.832031Z" fill="white" stroke="white"></path></mask><g mask="url(#mask0_796_52714)"><path d="M12.832 10V3.75M12.832 3.75H6.58203M12.832 3.75L2.83203 13.75M2.83203 13.75V7.5M2.83203 13.75H9.08203M2.83203 18.75V24.375C2.83203 28.0209 14.082 29.4791 14.082 33.125V38.75M14.082 18.75V24.375C14.082 28.0209 2.83203 29.4791 2.83203 33.125V38.75M0.332031 18.75H16.582M19.082 5V10.1451C19.082 17.2911 36.582 20.1495 36.582 27.2955V32.5M19.082 32.4406V27.2955C19.082 20.1495 36.582 17.2911 36.582 10.1451V5M16.582 36.25H37.832C38.5224 36.25 39.082 35.6904 39.082 35V33.75C39.082 33.0596 38.5224 32.5 37.832 32.5H16.5814M0.332031 38.75H16.582M17.832 1.25H37.832C38.5224 1.25 39.082 1.80965 39.082 2.5V3.75C39.082 4.44035 38.5224 5 37.832 5H17.832C17.1417 5 16.582 4.44035 16.582 3.75V2.5C16.582 1.80965 17.1417 1.25 17.832 1.25Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_796_52714"><rect width="40" height="40" fill="white" transform="translate(0.332031)"></rect></clipPath></defs>', 2);
const _hoisted_4$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4$1);
}
const ScalingIcon = { render: render$1 };
const _hoisted_1 = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_796_52708)"><mask id="mask0_796_52708" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="40"><path d="M40.668 0H0.667969V40H40.668V0Z" fill="white"></path></mask><g mask="url(#mask0_796_52708)"><path d="M25.668 7.5H19.418V1.25M25.668 7.5V18.75M25.668 7.5L19.418 1.25M19.418 1.25H11.918C11.2276 1.25 10.668 1.80963 10.668 2.5V6.25M29.418 18.75V6.25L24.418 1.25M33.168 16.25V5L29.418 1.25M6.29297 28.75L11.9772 23.0658C12.7346 22.3084 13.7798 21.911 14.8491 21.9739L19.3812 22.2405C21.7561 22.3803 23.5045 24.5199 23.168 26.875M15.668 26.875H26.293L32.1151 21.0529C33.7321 19.4359 36.3537 19.4359 37.9707 21.0529L38.1678 21.25L28.0162 31.4016C27.313 32.1049 26.3591 32.5 25.3646 32.5H13.7928L11.9178 34.375M13.793 36.25L4.41797 26.875M11.293 38.75L1.91797 29.375M10.6683 8.75V18.75M15.668 13.7507H5.66797" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_796_52708"><rect width="40" height="40" fill="white" transform="translate(0.667969)"></rect></clipPath></defs>', 2);
const _hoisted_4 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_4);
}
const SimultaneouslyIcon = { render };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "services.page",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const servicesData = {
      [ServiceTypes.workshops]: {
        introduction: {
          img: WorkshopIll,
          header: "What are Workshops and analysis?",
          text: "It\u2019s the preliminary phase of any design project at Semiflat. We use it to gain the full understanding of the product vision, industry, competition and business goals. That ensures that the entire design process is smooth and we can add maximum value to your organization."
        },
        experiences: {
          header: "How will your organization benefit from research & analysis_",
          experiencesArr: [
            {
              icon: FoundationIcon,
              header: "Strong foundation for the project",
              text: "Conducting a Workshops & analysis phase lets us build an understanding of your business, ICPs, current problems so that we can better serve you down the line."
            },
            {
              icon: LeadershipIcon,
              header: "Independence and design leadership",
              text: "We want to lead the effort and guide you in our process. To make that possible we need to dig deep into your product or idea to make sure we understand all ins and outs."
            },
            {
              icon: PartnershipIcon,
              header: "Smooth partnership",
              text: "This phase is also where we ask any questions/clear up any confusion surrounding your business which helps avoid miscommunication in the future."
            },
            {
              icon: FasterIcon,
              header: "Faster delivery",
              text: "Building an understanding of your product helps reduce time needed for answering questions and in turn helps us move much faster."
            }
          ]
        },
        prosAndCons: {
          prosHeader: "Why we always conduct workshops and analysis? ",
          consHeader: "Why it\u2019s detrimental for the project to skip this step?",
          pros: [
            {
              header: "Building solid understanding of the problem and target user",
              text: "We work with companies across different niche industries. Many of them are highly technical and require special knowledge to comfortably operate in. In order to be able to propose the most optimal solutions later on, it\u2019s crucial for us to get as good of an understanding of your goal, vision and business landscape as possible."
            },
            {
              header: "Analyzing current competitors",
              text: "This gives us further background on the industry standards, as well as an idea of any low hanging fruit that we can implement in your project to give you advantage over competitors."
            },
            {
              header: "Defining the design challanges",
              text: "Any project needs clear objective definition in order to succeed. Conducing the analysis phase allows us to identify the challenges and objective early on so that you can know what you can expect moving forward."
            }
          ],
          cons: [
            {
              header: "Lack of context in the later stages",
              text: "Skipping the initial discovery phase is likely to catch up with us at laters stages of the project and ultimately slow down the process or require your detailed guidance. Not taking the time to learn the terminology, problems and general reality of your industry will prevent us from being proactive in suggesting optimal solutions as the project moves forward."
            }
          ]
        },
        examples: {
          header: "Examples of projects with an extensive workshops and analysis phase_"
        }
      },
      [ServiceTypes.research]: {
        introduction: {
          img: ResearchIll,
          header: "Independence and design leadership",
          text: "Find out what your users want. We\u2019ll recruit and interview respondents matching your target persona."
        },
        experiences: {
          header: "How will your organization benefit from user research_",
          experiencesArr: [
            {
              icon: NeedsIcon,
              header: "Knowing your user\u2019s needs",
              text: "Conducting user research will give you an opportunity to uncover the needs of your existing users or ICPs. "
            },
            {
              icon: AssumptionsIcon,
              header: "Validating your assumptions",
              text: "We can recruit potential users to validate your assumptions regarding needs and pains."
            },
            {
              icon: TimeIcon,
              header: "Saving time",
              text: "Gain direction confidence by interviewing your ICPs before implementing a feature or coming out with a new product.\u015B"
            }
          ]
        },
        prosAndCons: {
          prosHeader: "When to choose User research?",
          consHeader: "When it\u2019s best to reconsider User research?",
          pros: [
            {
              header: "If you want to validate your assumptions about users and their needs",
              text: "Coming out with a new product is no easy task - if can think of a set of problems that you\u2019d like to solve for your users but aren\u2019t sure as to the scale or severity of them - there\u2019s no better way to find out than through a standardized interview process."
            },
            {
              header: "If you want to identify a gap in the market",
              text: "User research is the most reliable way to get trusted information about the market needs among your target user-base. "
            }
          ],
          cons: [
            {
              header: "If you have conducted any form of user interviews  yourself",
              text: "If you\u2019ve conducted an extensive form of research, have analyzed feedback of users from other products, or have any materials containing user\u2019s responses about their pain points - we will happily analyze them and draw as much conclusion from there as possible."
            },
            {
              header: "If you fit the profile of target user",
              text: "Founders often create products to solve their own problems. If that is you, we will work closely to extract as much information about the problems you\u2019ve faced and your insight. Combining that with extensive market analysis will give us a strong foundation to rely on."
            }
          ]
        },
        examples: {
          header: "Examples of User research we\u2019ve conducted_"
        }
      },
      [ServiceTypes.experience]: {
        introduction: {
          img: ExperienceIll,
          header: "What is User experience design?",
          text: "This is the most important part of the design process. User experience is crucial in determining whether your product will be intuitive to use. Good UX will likely put you ahead of the competition. Bad UX will put users off even the most powerful software. "
        },
        experiences: {
          header: "How will your organization benefit from user experience design_",
          experiencesArr: [
            {
              icon: AttractingIcon,
              header: "Attracting new users",
              text: "Word of good UX spreads like wildfire. Creating an application that is easy to use and beautiful is likely to gain you some product evangelists."
            },
            {
              icon: RetentionIcon,
              header: "Increasing user retention",
              text: "Good UX will also help keep the users that you already have. If they can solve their problems fast and easy - why would they go somewhere else?"
            },
            {
              icon: IntuitiveIcon,
              header: "Providing an intuitive experience",
              text: "User experience is all about intuitiveness. Ideally your product won\u2019t require a tutorial of any kind. User will just get it."
            },
            {
              icon: LoyaltyIcon,
              header: "Increasing user loyalty",
              text: "Users are more likely to stay loyal to the product that consistently provides value and doesn\u2019t add frustration. "
            },
            {
              icon: SupportIcon,
              header: "Reducing customer support",
              text: "Intuitive UX will ensure your product is self-explanatory. This will reduce time spent on answering \u2018How can I do X\u2019 types of questions."
            }
          ]
        },
        prosAndCons: {
          prosHeader: "When to choose User experience design?",
          consHeader: "When it\u2019s best to roll out UX updates slowly?",
          pros: [
            {
              header: "If you\u2019re building the MVP",
              text: "Building an intuitive user experience early on makes it easier to attract new customers. Creating a product that helps them easily solve their problems and feel natural to use is one of the most important pillars of any SaaS business."
            },
            {
              header: "If you haven\u2019t had UX-design help when creating the MVP",
              text: "If you\u2019ve successfully launched a product but never had professional design help, chances are that you might be missing out on better user attraction or retention. In situations like this we recommend a UX-audit of the current solution to identify any bad UX patterns that might be hurting your product."
            },
            {
              header: "If you want to drive more users or conversions to your product",
              text: "If you want to break new records with your already existing product, user experience design can help. Modern users are looking for the fastest, easiest way to solve their problems. Let\u2019s give it to them."
            }
          ],
          cons: [
            {
              header: "If you have reliable knowledge about users being happy with how the platform works",
              text: "Disrupting a familiar workflow with a completely different approach might create confusion among loyal users who know your product well and use it often. If you have an established product that has worked a certain way for a long time it\u2019s usually best to roll out UX enhancements in small increments to slowly introduce users to new patterns without compromising confidence. "
            }
          ]
        },
        examples: {
          header: "Examples of User experience we\u2019ve designed_"
        }
      },
      [ServiceTypes.interface]: {
        introduction: {
          img: InterfaceIll,
          header: "What is User interface design?",
          text: "Visual identity or the look&feel of your product is the icing on the cake of any digital experience. Products with refined user interface get talked about, feel more trustworthy and fun to use daily, so you can retain more users on your platform."
        },
        experiences: {
          header: "How will your organization benefit from user interface design_",
          experiencesArr: [
            {
              icon: BreakingIntoIcon,
              header: "Breaking into a saturated market with style and confidence",
              text: "These days users are accustomed to beautifully designed UI and they expect it from all companies - big and small."
            },
            {
              icon: BrandIcon,
              header: "Building a strong brand",
              text: "A polished user interface will make users more familiar with your logo, brand colors and messaging."
            },
            {
              icon: LoyaltyIcon,
              header: "Increasing user loyalty",
              text: "An interface that\u2019s pleasant on the eye will likely be one of the factors your loyal users keep using the product."
            },
            {
              icon: ConfidenceIcon,
              header: "Increasing user confidence",
              text: "Users will be more drawn to a product with professionally designed interface as it indicates there\u2019s a team of highly invested people behind it."
            }
          ]
        },
        prosAndCons: {
          prosHeader: "When to choose User interface design?",
          consHeader: "When it\u2019s best to reconsider User interface design?",
          pros: [
            {
              header: "If you\u2019re building a completely new product",
              text: "The SaaS market is currently saturated with high-end, visually pleasing products. Users have learned to expect companies paying extra care to the details. Launching an app with world-class design on day one can put you in the same league as some of the big competitors."
            },
            {
              header: "If your product lacs consistency",
              text: "Applications without a standardized UI (for example inconsistent navigation, or system feedback messaging) can disrupt your user\u2019s flow and contribute to decreasing the enjoyment from using them."
            },
            {
              header: "If you want to increase the user\u2019s trust and loyalty",
              text: "Well designed and polished products come across as more trustworthy. A visually appealing UI might be the one argument that convinces your user to try out your app. You can also think of it as a relationship - if you gift the user with a joyful experience on your platform, they\u2019ll be more likely to become evangelists for your product in their circles."
            },
            {
              header: "If you want to provide a premium experience",
              text: "Creating a product that feels tailored to the user should be the goal of any startup. Building an experience that is refined or meticulously designed feels high-end and makes the user feel appreciated."
            }
          ],
          cons: [
            {
              header: "If you are aware of current UX-related issues in your product",
              text: "It\u2019s always best to tackle critical roadblock that might be driving down your user retention rate before addressing any visual or stylistic issues. "
            }
          ]
        },
        examples: {
          header: "Examples of our favorite User interface designs_"
        }
      },
      [ServiceTypes.design]: {
        introduction: {
          img: DesignIll,
          header: "What is a Design system?",
          text: "Design system is a combination of your brand\u2019s visual language, design patterns and fully coded UI components. We design these components from scratch, then hand documented Figma files over to your development team."
        },
        experiences: {
          header: "How will your organization benefit from implementing a design system_",
          experiencesArr: [
            {
              icon: ConsistencyIcon,
              header: "Consistency now and forever",
              text: "A design system will ensure that your product\u2019s design is consistent across its many features. It will also make it easy to scale in the future."
            },
            {
              icon: StrongerBrandIcon,
              header: "Stronger brand",
              text: "Building and implementing a design system will ensure that all your products are consistent, which will strengthen familiarity and brand among users."
            },
            {
              icon: FasterIcon,
              header: "Faster development",
              text: "Implementing the component library in your codebase will save you time in the future when you want to expand your product."
            }
          ]
        },
        prosAndCons: {
          prosHeader: "When to choose a custom design system?",
          consHeader: "When it\u2019s best to use an existing solution?",
          pros: [
            {
              header: "If you want to scale quickly",
              text: "Having a library of building blocks and patterns allows you to develop features without design intervention every single time."
            },
            {
              header: "If you already have a legacy one in place",
              text: "We will continue building your design system library as we add new features to your already existing product."
            },
            {
              header: "If you\u2019re building a complex product",
              text: "If the vision for your MVP is complex (containing many non-standard components - for example graphs) it makes sense to future-proof it with a strong foundation to ensure consistency moving forward."
            }
          ],
          cons: [
            {
              header: "If you want to save up development time",
              text: "There are tons of already-coded component libraries on the internet (most popular technologies are HTML, React and Vue). By designing within the paradigms of an existing library we\u2019re still able to deliver a custom look&feel but the implementation cost reduces dramatically."
            },
            {
              header: "If you\u2019re building a simple MVP",
              text: "For startups at the beginning of their journey it might not make sense to build out a custom design system. Their product will likely evolve or even pivot, so the faster you can get to market the better. For cases like this we use our internal pre-built component library to add foundations for a more complex design system in the future."
            }
          ]
        },
        examples: {
          header: "Examples of Design systems we\u2019ve created_"
        }
      },
      [ServiceTypes.support]: {
        introduction: {
          img: SupportIll,
          header: "What is Continious support?",
          text: "Our journey usually doesn\u2019t end with handing off the MVP designs. We work in a flexible team augmentation model so you can continue working with designers you like and are familiar with your product."
        },
        experiences: {
          header: "How will your organization benefit from continuous support_",
          experiencesArr: [
            {
              icon: GrowingIcon,
              header: "Growing your team without the hassles of recruitment",
              text: "If your internal team is not keeping up with the demands for new features or products, we\u2019re happy to step in and provide a designer or a team to support your needs."
            },
            {
              icon: SimultaneouslyIcon,
              header: "Delivering more projects simultaneously",
              text: "Working with your dedicated project team on an ongoing basis will give you the ability to deliver more features to your users in a shorter timeframe. "
            },
            {
              icon: ScalingIcon,
              header: "Scaling the resources according to your needs",
              text: "You\u2019re able to scale the design effort up or down on a monthly basis, depending on your current needs."
            }
          ]
        },
        prosAndCons: {
          prosHeader: "Who is an ongoing collaboration model best for?",
          consHeader: "When it\u2019s better to work on project basis?",
          pros: [
            {
              header: "For startups launching a highly complex product",
              text: "If you\u2019re getting ready to launch an elaborate, multi-faceted application that can\u2019t be easily contained in a few-page scope document it probably make sense "
            },
            {
              header: "For companies with established, recurring design needs",
              text: "If your organization has consistent design needs on a monthly basis, but not enough to justify hiring a full-time designer you should consider partnering with us to work with a dedicated part time specialist."
            },
            {
              header: "For companies struggling to hire a designer internally",
              text: "If you need to move fast but find it challenging build a design team internally, get in touch to discuss an ongoing collaboration with a dedicated team, that combines the power of internal design with flexibility of an agency."
            },
            {
              header: "For large organizations wanting to scale their design team and increase output",
              text: "If your organization has a design team but can\u2019t keep up with the ever-growing needs of your users, consider us as a supporting partner that can take on some of the work your team is currently struggling with. "
            }
          ],
          cons: [
            {
              header: "If you want to test your business hypothesis with a simple MVP",
              text: "To validate your business assumptions it might make sense to work in shorter sprints focused on achieving rapid results that can be brought to market and tested quickly. "
            },
            {
              header: "If you don\u2019t yet have established design needs and long term goals",
              text: "If you\u2019re at a stage where you have clearly defined short-term goals but aren\u2019t sure as to the future of the product, we recommend taking a project-based approach."
            }
          ]
        },
        examples: {
          header: "Examples of projects we\u2019ve supported with an ongoing collaboration_"
        }
      }
    };
    const pageContext = usePageContext();
    const selectedServiceModel = ref(
      ((_a = pageContext.routeParams) == null ? void 0 : _a.id) && Object.keys(servicesData).includes((_b = pageContext.routeParams) == null ? void 0 : _b.id) ? (_c = pageContext.routeParams) == null ? void 0 : _c.id : ServiceTypes.workshops
    );
    const selectedService = computed(() => servicesData[selectedServiceModel.value]);
    const redirect = (v) => {
      window.history.replaceState({}, "", `${window.location.origin}/services/${v}`);
      selectedServiceModel.value = v;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheServicesHeroSection = _sfc_main$1;
      const _component_TheServicesIntroductionSection = _sfc_main$2;
      const _component_TheServicesOurServices = _sfc_main$3;
      const _component_TheServicesProsAndConsSection = _sfc_main$4;
      const _component_TheCTABottomSection = __unplugin_components_5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_TheServicesHeroSection, {
        "model-value": unref(selectedServiceModel),
        class: "section",
        "onUpdate:modelValue": redirect
      }, null, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_TheServicesIntroductionSection, {
        introduction: unref(selectedService).introduction,
        class: "section"
      }, null, _parent));
      _push(ssrRenderComponent(_component_TheServicesOurServices, {
        experiences: unref(selectedService).experiences,
        class: "section"
      }, null, _parent));
      _push(ssrRenderComponent(_component_TheServicesProsAndConsSection, {
        "pros-and-cons": unref(selectedService).prosAndCons,
        class: "section"
      }, null, _parent));
      _push(ssrRenderComponent(_component_TheCTABottomSection, { class: "section" }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/services.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
