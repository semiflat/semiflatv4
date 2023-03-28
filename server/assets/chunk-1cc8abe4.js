import { defineComponent, onMounted, mergeProps, createVNode, resolveDynamicComponent, useSSRContext, ref, openBlock, createElementBlock, createElementVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderVNode, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import VanillaTilt from "vanilla-tilt";
import { a as _export_sfc } from "./chunk-5a6b5315.js";
import { g as gsapWithCSS, P as Power2, a as Power3 } from "./chunk-ea976db9.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheAboutComponent",
  __ssrInlineRender: true,
  props: {
    content: null,
    icon: null
  },
  setup(__props) {
    onMounted(() => {
      VanillaTilt.init(document.querySelectorAll(".card"), { glare: true, max: 2 });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        "--92227d88": __props.content[0].bgImage,
        "--c0fcb90c": __props.content[2].bgImage
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-16 page-content grid justify-center gap-6 md:mt-[11.5rem] md:gap-8 md:grid-cols-2 items-center" }, _attrs, _cssVars))} data-v-c55cd993><div class="card-1 card pt-40 px-8 pb-8 rounded-4 text-white grid gap-4 max-w-[27.562rem] md:pt-[18.75rem] md:pb-10 md:px-10 md:ml-auto apple-tv-card" data-v-c55cd993><h2 class="font-semibold md:text-xl" data-v-c55cd993>${ssrInterpolate(__props.content[0].title)}</h2><p class="text-blue-100" data-v-c55cd993>${ssrInterpolate(__props.content[0].text)}</p></div><div class="grid gap-6 md:gap-8" data-v-c55cd993><div class="card-2 card border border-[#BCDCDC] rounded-4 pt-20 px-8 pb-8 grid gap-4 max-w-[27.562rem] md:gap-6 md:px-10 bg-[url(~/assets/card-cubes.svg)] bg-no-repeat md:bg-[url(~/assets/card-cubes-desktop.svg)]" data-v-c55cd993>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.icon), { class: "w-24 -mt-3.5 -ml-3 md:-mt-4" }, null), _parent);
      _push(`<h2 class="text-blue-300 font-semibold -mt-3 md:mt-0 md:text-xl" data-v-c55cd993>${ssrInterpolate(__props.content[1].title)}</h2><span class="text-turquoise-400 text-sm font-semibold md:text-base opacity-50" data-v-c55cd993>Coming soon</span></div><div class="card-3 card pt-40 px-8 pb-8 rounded-4 text-white grid gap-4 max-w-[27.562rem] md:px-10 md:pb-10" data-v-c55cd993><h2 class="font-semibold md:text-xl" data-v-c55cd993>${ssrInterpolate(__props.content[2].title)}</h2><p class="text-blue-100" data-v-c55cd993>${ssrInterpolate(__props.content[2].text)}</p></div></div></div>`);
    };
  }
});
const TheAboutComponent_vue_vue_type_style_index_0_scoped_c55cd993_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/about/TheAboutComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const TheAboutComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c55cd993"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppCirclesHorizontal",
  __ssrInlineRender: true,
  props: {
    id: null
  },
  setup(__props) {
    const svgRef = ref();
    const getCircles = () => svgRef.value.querySelectorAll("circle");
    onMounted(() => {
      if (!svgRef.value)
        return;
      const tl = gsapWithCSS.timeline({
        ease: Power2.easeIn,
        repeat: -1,
        repeatDelay: 2
      });
      const duration = 2;
      tl.to(getCircles(), {
        stroke: "#1FDFFF",
        duration,
        yoyoEase: Power3.easeOut,
        yoyo: true,
        repeat: 1
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        ref_key: "svgRef",
        ref: svgRef,
        width: "204",
        height: "204",
        viewBox: "0 0 204 204",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _attrs))}><defs><filter${ssrRenderAttr("id", `${__props.id}-glow`)}><feGaussianBlur in="SourceGraphic" stdDeviation="0.2"></feGaussianBlur></filter></defs><mask${ssrRenderAttr("id", `${__props.id}-mask`)} style="${ssrRenderStyle({ "mask-type": "alpha" })}" maskUnits="userSpaceOnUse" x="0" y="0" width="205" height="204"><path d="M0.5 0H204.5V204H0.5V0Z"${ssrRenderAttr("fill", `url(#${__props.id}-gradient)`)}></path></mask><g${ssrRenderAttr("mask", `url(#${__props.id}-mask)`)}><circle cx="36.5" cy="148" r="40" stroke="#1FDFFF"${ssrRenderAttr("filter", `url(#${__props.id}-glow)`)}></circle><circle cx="92.5" cy="148" r="40" stroke="#0A5F81"${ssrRenderAttr("filter", `url(#${__props.id}-glow)`)}></circle><circle cx="148.5" cy="148" r="40" stroke="#1FDFFF"${ssrRenderAttr("filter", `url(#${__props.id}-glow)`)}></circle><circle cx="204.5" cy="148" r="40" stroke="#0A5F81"${ssrRenderAttr("filter", `url(#${__props.id}-glow)`)}></circle></g><defs><radialGradient${ssrRenderAttr("id", `${__props.id}-gradient`)} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(102.5 102) rotate(90) scale(102 81.1808)"><stop stop-color="#D9D9D9"></stop><stop offset="1" stop-color="#D9D9D9" stop-opacity="0"></stop></radialGradient></defs></svg>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/svg/AppCirclesHorizontal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _hoisted_1$1 = {
  width: "136",
  height: "376",
  viewBox: "0 0 136 376",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("rect", {
  x: "-106",
  y: "0.5",
  width: "346",
  height: "375",
  rx: "15.5",
  stroke: "#BCDCDC",
  "stroke-dasharray": "4 4"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const StrokeLeft = { render: render$1 };
const _hoisted_1 = {
  width: "346",
  height: "216",
  viewBox: "0 0 346 216",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("rect", {
  x: "0.5",
  y: "-39.5",
  width: "345",
  height: "255",
  rx: "15.5",
  stroke: "#BCDCDC",
  "stroke-dasharray": "4 4"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const StrokeTop = { render };
export {
  StrokeTop as S,
  TheAboutComponent as T,
  _sfc_main as _,
  StrokeLeft as a
};
