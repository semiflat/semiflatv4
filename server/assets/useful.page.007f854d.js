import { _ as __unplugin_components_0, a as _export_sfc } from "./chunk-5a6b5315.js";
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext, createVNode, resolveDynamicComponent, openBlock, createElementBlock, createStaticVNode, createElementVNode, ref, computed, createBlock, toDisplayString, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { u as usePageContext } from "./chunk-2a1bb412.js";
import { C as CheckIcon } from "./chunk-209f840a.js";
import { R as RightBg$1, L as LeftBg$1, W as Webflow, F as Feature1Svg, a as Feature2Svg, b as Feature3Svg } from "./chunk-ef446043.js";
import { W as WorkshopsIcon, I as InterfaceIcon, S as SupportIcon, D as Design } from "./chunk-79ac2355.js";
import { U as UX } from "./chunk-68f21e73.js";
import { F as FlawlessIcon } from "./chunk-11ab4aad.js";
import { b as breakpointsConst, _ as __unplugin_components_0$1 } from "./chunk-91954a89.js";
import { SwiperSlide } from "swiper/vue";
import { useBreakpoints } from "@vueuse/core";
import "swiper";
const LeftBg = "/semiflatv4/assets/left-cubes.d7d1ccff.svg";
const RightBg = "/semiflatv4/assets/right-cubes.84b830e5.svg";
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "TheUsefulLookingForMvpSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppButton = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40" }, _attrs))} data-v-787cd612><div class="bg-violet-light-gradient p-8 text-white rounded-6 relative md:px-[7.125rem] md:py-[6.125rem] mx-auto" data-v-787cd612><div class="absolute pointer-events-none w-full h-full opacity-70 top-0 left-0 z-1 card-mask" data-v-787cd612><img${ssrRenderAttr("src", unref(RightBg))} class="absolute top-0 right-0 md:w-[170px] md:h-[170px] md:top-4" data-v-787cd612><img${ssrRenderAttr("src", unref(LeftBg))} class="absolute bottom-3 left-0 md:w-[250px] md:h-[250px]" data-v-787cd612></div><div class="md:max-w-[33.5rem] md:mx-auto md:text-center" data-v-787cd612><h3 class="text-[1.25rem] font-semibold mb-6 md:text-[2.5rem] md:leading-[120%]" data-v-787cd612> Are you interested in working together? </h3><p class="mb-10" data-v-787cd612> Reach out with more details about your project so we can prepare for an introductory call. We\u2019ll schedule it within 24 hours from receiving your query. </p>`);
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
      _push(ssrRenderComponent(_component_AppButton, {
        class: "!text-white",
        text: "",
        target: "_blank",
        href: "https://calendly.com/d/g3b-8j5-vzs/semiflat-design-partner-introduction"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Schedule a call `);
          } else {
            return [
              createTextVNode("Schedule a call ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const TheUsefulLookingForMvpSection_vue_vue_type_style_index_0_scoped_787cd612_lang = "";
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/useful/TheUsefulLookingForMvpSection.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const __unplugin_components_11 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-787cd612"]]);
const Screen4 = "/semiflatv4/assets/screen-4.11a87ed8.png";
const Screen5 = "/semiflatv4/assets/screen-5.e0b64cdf.png";
const Screen6 = "/semiflatv4/assets/screen-6.a6bc2b29.png";
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "TheUsefulMoreScreensSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40" }, _attrs))}><div class="px-1.75rem py-10.5 bg-[#F6F7F9] rounded-3 border border-[#D8DFE5] mb-8 md:rounded-6 md:py-4.375rem md:px-24"><img${ssrRenderAttr("src", unref(Screen4))} class="custom-shadow rounded-3"></div><div class="grid gap-8 sm:grid-cols-2"><div class="bg-[#F6F7F9] rounded-3 border border-[#D8DFE5] md:rounded-6 max-h-[15.875rem] md:max-h-[25.875rem] overflow-hidden"><img${ssrRenderAttr("src", unref(Screen5))} class="w-full"></div><div class="bg-[#F6F7F9] rounded-3 border border-[#D8DFE5] md:rounded-6 max-h-[15.875rem] md:max-h-[25.875rem] overflow-hidden"><img${ssrRenderAttr("src", unref(Screen6))} class="h-full ml-auto"></div></div></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/useful/TheUsefulMoreScreensSection.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const CubesIll = "/semiflatv4/assets/cubes.8ed0c2f9.svg";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TheUsefulProjectOutcomeSection",
  __ssrInlineRender: true,
  setup(__props) {
    const context = usePageContext();
    const deliverables = [
      {
        header: "A whiteboard containing the summary of all Discovery sessions",
        text: "The outcome of the workshops was delivered to Useful as a FigJam - a whiteboard-like canvas containing sticky notes, diagrams, and tables filed with assumptions, business goals, and vision that we\u2019ve gathered on our calls with the founders."
      },
      {
        header: "A low-fidelity Figma file containing all screens from the application",
        text: "Useful also got a separate Figma file containing all pages reflective of user flows established in the project's initial phase. We've worked on this file throughout the majority of the project in iterative sprints, focusing on one user flow at a time."
      },
      {
        header: "A high-fidelity Figma file containing all screens from the application",
        text: "Starting with the look & feel proposals, we've carried the established style to the previously designed low-fidelity wireframes to give them a final, polished look. We then handed over this file to the developers."
      },
      {
        header: "A component library file",
        text: "We know that a small MVP can quickly grow into a large product. With rapid user growth comes the demand for new features, which needs to be rapidly fulfilled. Startups in the early stages often rely solely on developers to modify existing designs which can easily lead to multiple versions of the same screen or component. We wanted to avoid this scenario, so we've equipped Useful with a separate file containing all reusable components to implement and build on top of in the future."
      },
      {
        header: "Clickable prototype",
        text: "We\u2019ve connected the key high fidelity pages into clickable sequences so Useful could not only tell investors and customers about their product but actually show it to them."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppButton = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40" }, _attrs))}><div class="md:grid grid-cols-2 md:max-w-[57.125rem] mx-auto"><div class="md:max-w-[21.625rem]"><h2 class="text-xl text-blue-300 font-semibold md:text-[1.75rem] leading-[120%]"> Project Outcome </h2><p class="mt-4 text-[#545959]"> What did Useful gain from working with us? Where is the project now? </p></div><div class="mt-8 grid gap-8 md:mt-0"><div class="flex gap-6"><div class="md:pr-2"><p class="text-[#545959] mb-8"> Over two months, we\u2019ve delivered a complete user experience and a clickable application prototype. We wanted to make sure that Useful is set up for success, so we\u2019ve also implemented a design system containing all of the components used across the interface. </p><p class="text-[#545959] mb-8 md:mb-12"> Useful went on to raise a $5M financing round from Spark Capital and Unusual Ventures. The application is currently in the last stages of development, serving first users through an early-access program. </p><div class="p-8 bg-violet-light-gradient text-white rounded-4 relative md:p-10"><h3 class="font-semibold mb-1 leading-[150%]"> Have a project in mind similar to Useful? </h3><p class="mb-8 md:pr-8 leading-[150%]"> Ask us about a fixed-scope MVP sprint and how we can create an interactive prototype to help you tell the story of your product. </p>`);
      _push(ssrRenderComponent(_component_AppButton, {
        class: "!bg-white !text-black",
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
      _push(`<img${ssrRenderAttr("src", unref(CubesIll))} class="absolute top-0 right-1 sm:-top-6"></div></div></div></div></div><div class="w-full h-[1px] bg-[#D8DFE5] my-12 md:my-20 md:max-w-[57.125rem] mx-auto"></div><div class="md:grid grid-cols-2 md:max-w-[57.125rem] mx-auto"><div class="md:max-w-[21.562rem]"><h2 class="text-xl text-blue-300 font-semibold md:text-[1.75rem] leading-[120%]"> Deliverables </h2><p class="mt-4 text-[#545959]"> What are the tangible deliverables Useful received from us during the collaboration? </p></div><div class="mt-8 grid gap-8 md:mt-0"><!--[-->`);
      ssrRenderList(deliverables, (el, i) => {
        var _a, _b;
        _push(`<div class="flex gap-6">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(CheckIcon)), {
          class: ["shrink-0 text-[#481B97]", [(_b = (_a = unref(context).pageProps) == null ? void 0 : _a.pageShell) == null ? void 0 : _b.textColor]]
        }, null), _parent);
        _push(`<div class="md:pr-2"><h3 class="font-semibold text-blue-300 mb-2">${ssrInterpolate(el.header)}</h3><p class="text-[#545959] leading-[170%]">${ssrInterpolate(el.text)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const TheUsefulProjectOutcomeSection_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/useful/TheUsefulProjectOutcomeSection.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Function1 = "/semiflatv4/assets/illustration-1.4125e0b8.svg";
const Function2 = "/semiflatv4/assets/illustration-2.cb31c899.svg";
const Function3 = "/semiflatv4/assets/illustration-3.cb0696c3.svg";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TheUsefulFunctionsSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40 hidden md:block" }, _attrs))}><div class="pt-14 bg-[#F6F7F9] rounded-6 text-center border border-[#D8DFE5]"><h3 class="font-semibold text-[20px] mb-4">All customer data in one place</h3><p class="text-[#545959] max-w-[33.5rem] mx-auto"> Useful aggregates all of your customer calls, transcripts and contacts in one easy-to-use software. </p><img${ssrRenderAttr("src", unref(Function1))} class="-mt-16"></div><div class="grid grid-cols-2 gap-8 mt-8"><div class="bg-[#F6F7F9] rounded-6 text-center border border-[#D8DFE5]"><img${ssrRenderAttr("src", unref(Function2))}><div class="mt-2 px-10 pb-14"><h3 class="font-semibold text-[20px] mb-2">Your insights at the center</h3><p class="text-[#545959] max-w-[33.5rem] mx-auto"> Useful keeps track of all your customer interactions so you can focus on extracting value. </p></div></div><div class="bg-[#F6F7F9] rounded-6 text-center border border-[#D8DFE5]"><img${ssrRenderAttr("src", unref(Function3))}><div class="mt-2 px-10 pb-14"><h3 class="font-semibold text-[20px] mb-2">Integrates with your tools</h3><p class="text-[#545959] max-w-[33.5rem] mx-auto"> Useful integrates with all the tools you\u2019re already using to deliver a seamless experience. </p></div></div></div></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/useful/TheUsefulFunctionsSection.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _hoisted_1$5 = {
  width: "260",
  height: "32",
  viewBox: "0 0 260 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
const _hoisted_2$5 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_1717_13124)"><rect x="0.851562" width="32" height="32" fill="url(#pattern0)"></rect><path d="M44.9928 18.1574C46.7642 20.5383 49.5758 21.2737 51.8673 21.2737C54.4635 21.2737 56.3 20.4937 56.3 19.2423C56.3 17.7715 55.0242 17.6414 50.6565 17.1661C46.8536 16.7354 43.9323 16.0203 43.9323 12.9528C43.9323 10.0315 46.8089 8 51.2213 8C54.6789 8 57.7911 9.21889 59.1969 11.0919L57.0801 13.1234C55.8897 11.5876 53.6835 10.6856 51.0466 10.6856C48.2797 10.6856 47.0242 11.5714 47.0242 12.6115C47.0242 13.7369 48.0644 13.9929 51.9973 14.4479C56.4097 14.9639 59.5098 15.5449 59.5098 18.8969C59.5098 22.2489 56.1294 24 51.7373 24C48.04 24 44.3671 22.5739 42.8516 20.388L44.9928 18.1574Z" fill="white"></path><path d="M66.0348 23.765H62.8535V8.23633H72.564C76.111 8.23633 78.4432 9.92653 78.4432 13.1485C78.4432 16.3704 76.111 18.0565 72.564 18.0565H66.0348V23.765ZM72.3893 15.3506C74.2298 15.3506 75.3106 14.538 75.3106 13.1485C75.3106 11.7589 74.2298 10.9423 72.3893 10.9423H66.0348V15.3506H72.3893Z" fill="white"></path><path d="M89.4102 8.23633L97.2395 23.765H93.8022L92.0145 20.153H83.2263L81.4102 23.765H78.0176L85.8429 8.23633H89.4102ZM84.5671 17.4512H90.6616L87.6346 11.3567L84.5671 17.4512Z" fill="white"></path><path d="M102.732 23.765H99.5508V8.23633H109.302C112.825 8.23633 115.205 9.92653 115.205 13.1119C115.205 15.4928 113.82 17.0692 111.614 17.6746L115.571 23.7691H111.914L108.258 17.9956H102.732V23.765ZM109.131 15.314C110.992 15.314 112.053 14.5014 112.053 13.1322C112.053 11.763 110.992 10.926 109.131 10.926H102.732V15.314H109.131Z" fill="white"></path><path d="M121.804 15.6756L130.519 8.23633H134.989L127.062 14.8102L135.488 23.765H131.299L124.725 16.7564L121.804 19.1942V23.765H118.627V8.23633H121.804V15.6756Z" fill="white"></path><path d="M152.817 8C156.88 8 159.866 9.83646 161.052 12.8756L158.306 14.257C157.42 12.0752 155.563 10.775 152.837 10.775C149.44 10.775 146.889 12.8512 146.889 15.9878C146.889 19.1244 149.44 21.2006 152.837 21.2006C155.563 21.2006 157.42 19.9005 158.306 17.7186L161.052 19.1C159.866 22.1513 156.88 23.9756 152.817 23.9756C147.559 23.9756 143.646 20.583 143.646 15.9756C143.646 11.3682 147.559 8 152.817 8Z" fill="white"></path><path d="M173.465 8.23633L181.294 23.765H177.857L176.061 20.153H167.281L165.465 23.765H162.072L169.898 8.23633H173.465ZM168.622 17.4512H174.716L171.689 11.3567L168.622 17.4512Z" fill="white"></path><path d="M186.787 23.765H183.609V8.23633H193.316C196.863 8.23633 199.199 9.92653 199.199 13.1485C199.199 16.3704 196.863 18.0565 193.316 18.0565H186.787V23.765ZM193.145 15.3506C194.982 15.3506 196.062 14.538 196.062 13.1485C196.062 11.7589 194.982 10.9423 193.145 10.9423H186.787V15.3506H193.145Z" fill="white"></path><path d="M205.187 23.765H202.01V8.23633H205.187V23.765Z" fill="white"></path><path d="M218.056 10.9829V23.765H214.854V10.9829H208V8.23633H224.91V10.9829H218.056Z" fill="white"></path><path d="M235.375 8.23633L243.204 23.765H239.767L237.971 20.153H229.191L227.375 23.765H223.982L231.808 8.23633H235.375ZM230.532 17.4512H236.626L233.599 11.3567L230.532 17.4512Z" fill="white"></path><path d="M245.521 8.23633H248.699V21.0022H259.62V23.765H245.521V8.23633Z" fill="white"></path></g><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_1717_13124" transform="scale(0.00390625)"></use></pattern><clipPath id="clip0_1717_13124"><rect width="258.768" height="32" fill="white" transform="translate(0.851562)"></rect></clipPath><image id="image0_1717_13124" width="256" height="256" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuZGE0YTdlNWVmLCAyMDIyLzExLzIyLTEzOjUwOjA3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDktMTRUMTQ6NDE6MTAtMDA6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIzLTAyLTE0VDEwOjU2OjA1KzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIzLTAyLTE0VDEwOjU2OjA1KzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplMTQxM2MzNy03ODUyLTQ4N2YtOGJjOS0yMmM5OTk1NWFjODgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZTE0MTNjMzctNzg1Mi00ODdmLThiYzktMjJjOTk5NTVhYzg4IiB4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"></image></defs>', 2);
const _hoisted_4$1 = [
  _hoisted_2$5
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_4$1);
}
const SparkCapital = { render: render$5 };
const _hoisted_1$4 = {
  width: "145",
  height: "20",
  viewBox: "0 0 145 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("g", { "clip-path": "url(#clip0_1717_13122)" }, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M34.21 12.3285V1.77052H37.399V18.7455H35.4099V18.7771L26.5057 7.33402V18.7771H23.3167V1.80213H25.9057L34.21 12.3285ZM56.3756 1.83374H59.533V11.5382C59.533 13.9722 58.87 15.8373 57.5123 17.1649C56.1861 18.4609 54.3863 19.1248 52.1761 19.1248C50.029 19.1248 48.2293 18.4609 46.8083 17.1649C45.3875 15.8689 44.6613 13.9722 44.6613 11.5382V1.83374H47.8188V11.5382C47.8188 13.0555 48.2293 14.1935 49.0187 15.0154C49.808 15.8373 50.8815 16.2166 52.2077 16.2166C53.5022 16.2166 54.5442 15.8056 55.2704 14.9838C55.9967 14.1619 56.344 13.024 56.344 11.5382V1.83374H56.3756ZM80.0251 4.58387L77.4993 5.87992C77.1835 5.37414 76.6782 4.93159 75.9204 4.55226C75.1942 4.17294 74.3733 3.98327 73.4891 3.98327C72.3524 3.98327 71.4684 4.20454 70.8684 4.61549C70.2686 5.02643 69.9843 5.56381 69.9843 6.22764C69.9843 6.70179 70.1738 7.08112 70.5527 7.36563C70.9316 7.65012 71.3736 7.87139 71.8473 7.99784C72.3524 8.12427 72.984 8.25072 73.7734 8.34556C74.5627 8.44038 75.2574 8.56683 75.8573 8.69327C76.4573 8.81971 77.0571 9.00938 77.6887 9.29387C78.3202 9.54676 78.8254 9.86286 79.2359 10.2422C79.6463 10.5899 79.9621 11.0957 80.2147 11.6963C80.4673 12.2969 80.5935 12.9923 80.5935 13.7826C80.5935 14.9838 80.2462 16.0269 79.5831 16.8488C78.9201 17.6707 78.036 18.2713 76.994 18.6507C75.952 18.9983 74.7837 19.188 73.4891 19.188C69.7002 19.188 67.2374 17.7972 66.1007 15.0154L68.7529 13.6246C69.1003 14.5096 69.7317 15.1735 70.5843 15.6476C71.4368 16.0902 72.4156 16.3114 73.5208 16.3114C74.6258 16.3114 75.5731 16.0902 76.2994 15.6793C77.0256 15.2683 77.4044 14.6361 77.4044 13.7509C77.4044 12.3601 76.1099 11.5382 73.4891 11.2537C72.5103 11.1273 71.6578 11.0009 70.9631 10.8112C70.2686 10.6215 69.5739 10.337 68.8793 9.98931C68.2162 9.60998 67.6794 9.10422 67.3321 8.47199C66.9848 7.83978 66.8269 7.04951 66.8269 6.1328C66.8269 5.02643 67.1742 4.10972 67.8373 3.31945C68.5003 2.52918 69.3213 1.9918 70.2686 1.6757C71.2157 1.35958 72.2577 1.20153 73.3629 1.16992C76.7099 1.23314 78.9201 2.33952 80.0251 4.58387ZM99.0649 1.83374H102.222V11.5382C102.222 13.9722 101.559 15.8373 100.202 17.1649C98.8754 18.4609 97.0756 19.1248 94.8654 19.1248C92.7183 19.1248 90.9186 18.4609 89.4977 17.1649C88.0768 15.8689 87.3506 13.9722 87.3506 11.5382V1.83374H90.5081V11.5382C90.5081 13.0555 90.9186 14.1935 91.708 15.0154C92.4973 15.8373 93.5708 16.2166 94.897 16.2166C96.1915 16.2166 97.2335 15.8056 97.9597 14.9838C98.686 14.1619 99.0333 13.024 99.0333 11.5382V1.83374H99.0649ZM111.411 18.7455H107.937L115.547 1.80213H119.02L126.629 18.7455H123.157L117.315 5.37414L111.411 18.7455ZM132.187 1.80213H135.377V15.8056H144.091V18.7455H132.187V1.80213ZM12.4233 1.83374H15.5808V11.5382C15.5808 13.9722 14.9177 15.8373 13.56 17.1649C12.2338 18.4609 10.4341 19.1248 8.22382 19.1248C6.07671 19.1248 4.27695 18.4609 2.85608 17.1649C1.4352 15.8689 0.708984 13.9722 0.708984 11.5382V1.83374H3.86648V11.5382C3.86648 13.0555 4.27695 14.1935 5.06632 15.0154C5.85569 15.8373 6.92924 16.2166 8.25539 16.2166C9.54996 16.2166 10.5919 15.8056 11.3181 14.9838C12.0444 14.1619 12.3917 13.024 12.3917 11.5382V1.83374H12.4233Z",
    fill: "white"
  })
], -1);
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("clipPath", { id: "clip0_1717_13122" }, [
    /* @__PURE__ */ createElementVNode("rect", {
      width: "143.529",
      height: "20",
      fill: "white",
      transform: "translate(0.619141)"
    })
  ])
], -1);
const _hoisted_4 = [
  _hoisted_2$4,
  _hoisted_3$3
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_4);
}
const Ususual = { render: render$4 };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TheUsefulCompaniesLoveSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40" }, _attrs))} data-v-a07dbede><div class="bg-violet-light-gradient py-8 px-6 text-white rounded-3 relative lg:px-[7.125rem] lg:py-20 max-w-[57.125rem] mx-auto" data-v-a07dbede><div class="absolute w-full h-full top-0 left-0 z-1 card-mask" data-v-a07dbede>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(RightBg$1)), { class: "absolute top-0 right-0 lg:w-[150px] lg:h-[150px] lg:top-4" }, null), _parent);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(LeftBg$1)), { class: "absolute bottom-0 lg:w-[216px] lg:h-[216px] lg:" }, null), _parent);
      _push(`</div><h3 class="text-center mb-8" data-v-a07dbede>Useful is backed by:</h3><div class="lg:hidden" data-v-a07dbede><div class="grid grid-cols-2 md:grid-cols-3 items-center gap-y-8" data-v-a07dbede><div class="h-[38px]" data-v-a07dbede>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SparkCapital)), { class: "max-w-full h-[28px] lg:h-[30px] mx-auto" }, null), _parent);
      _push(`</div><div class="h-[38px]" data-v-a07dbede>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(Ususual)), { class: "max-w-full h-[18px] lg:h-[24px] mx-auto" }, null), _parent);
      _push(`</div></div><div class="h-[38px] mt-8" data-v-a07dbede>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(Webflow)), { class: "max-w-full h-[24px] lg:h-[28px] mx-auto" }, null), _parent);
      _push(`</div></div><div class="hidden lg:block" data-v-a07dbede><div class="flex gap-12 justify-center mb-8" data-v-a07dbede><div class="h-[40px]" data-v-a07dbede>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SparkCapital)), { class: "lg:h-[38px] mx-auto -mt-1" }, null), _parent);
      _push(`</div><div class="h-[40px]" data-v-a07dbede>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(Ususual)), { class: "max-w-full lg:h-[24px] mx-auto" }, null), _parent);
      _push(`</div></div></div></div></div>`);
    };
  }
});
const TheUsefulCompaniesLoveSection_vue_vue_type_style_index_0_scoped_a07dbede_lang = "";
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/useful/TheUsefulCompaniesLoveSection.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-a07dbede"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "TheUsefulStepByStepSection",
  __ssrInlineRender: true,
  setup(__props) {
    const context = usePageContext();
    const services = [
      {
        icon: FlawlessIcon,
        title: "Discovery sessions",
        text: "Over several video sessions, we worked with Useful\u2019s founders to establish user personas, user stories, core user flows, and navigation structure."
      },
      {
        icon: WorkshopsIcon,
        title: "Workshops & analysis",
        text: "We\u2019ve analyzed our notes and recordings from our meetings to ensure we\u2019re moving into the next phase with a full understanding of business needs and goals."
      },
      {
        icon: UX,
        title: "User experience design",
        text: "The next and most time-intensive part of the project was translating all the findings of discovery sessions into a complete set of lo-fi wireframes."
      },
      {
        icon: InterfaceIcon,
        title: "User interface design",
        text: "We\u2019ve added a bit of magic to the low-fidelity mockups, proposing several look & feel variations and making sure even empty states were engaging and pleasant to look at."
      },
      {
        icon: SupportIcon,
        title: "Design system design",
        text: "We\u2019ve built a starter design system so Useful can scale their product in the future without worrying about inconsistency."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40" }, _attrs))}><h2 class="text-xl font-semibold leading-[150%] md:text-[1.75rem] md:leading-[120%] md:text-center md:max-w-[45.375rem] md:mx-auto md:text-center"> Step by step on how we\u2019ve worked with Pocus on their application design_ </h2><div class="grid md:grid-cols-3 mt-12 md:mt-20 gap-10 md:gap-16"><!--[-->`);
      ssrRenderList(services, (service) => {
        var _a, _b;
        _push(`<div>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(service.icon), {
          class: ["text-[#481B97]", [(_b = (_a = unref(context).pageProps) == null ? void 0 : _a.pageShell) == null ? void 0 : _b.textColor]]
        }, null), _parent);
        _push(`<h3 class="mt-8 font-semibold text-blue-300">${ssrInterpolate(service.title)}</h3><p class="mt-2 text-[#545959]">${ssrInterpolate(service.text)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/useful/TheUsefulStepByStepSection.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const UsefulCEO = "/semiflatv4/assets/useful-ceo.dccf05f7.png";
const PocusTestimonalsImage = "/semiflatv4/assets/pocus-testimonials.ce2b01e9.svg";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TheUsefulTestimonialSection",
  __ssrInlineRender: true,
  setup(__props) {
    ref();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "testimonial",
        class: "page-content mt-16 md:mt-40"
      }, _attrs))} data-v-4593f511><div class="bg-violet-transparent p-8 border border-[#D8DFE5] rounded-3 max-w-[57.125rem] mx-auto md:pt-0 md:pb-12" data-v-4593f511><img${ssrRenderAttr("src", unref(PocusTestimonalsImage))} class="mb-8 mx-auto w-full max-w-[20rem] md:mb-0 md:mt-6 md:mb-4" data-v-4593f511><p class="max-w-45.375rem md:mx-auto md:text-center md:text-[1.25rem]" data-v-4593f511> \u201CWhen we set out to work with a design studio, we were looking for true partnership, not just great execution. Paulina, Nic, and Ewa were all of that and more. They helped bring our vision to life and were real thought partners throughout the creative process. They gave us an incredible foundation to work with, and we\u2019re excited to partner with the Semiflat team in the future.\u201D </p><div class="flex gap-4 mt-8 md:justify-center md:mt-10" data-v-4593f511><img class="rounded-full w-12"${ssrRenderAttr("src", unref(UsefulCEO))} data-v-4593f511><div data-v-4593f511><p class="font-semibold" data-v-4593f511>Mike Ottavi-Brannon</p><p class="text-#545959" data-v-4593f511>Co-Founder</p></div></div></div></div>`);
    };
  }
});
const TheUsefulTestimonialSection_vue_vue_type_style_index_0_scoped_4593f511_lang = "";
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/useful/TheUsefulTestimonialSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __unplugin_components_5 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-4593f511"]]);
const Screen1 = "/semiflatv4/assets/screen-1.af9f8c19.png";
const Screen2 = "/semiflatv4/assets/screen-2.695ae390.png";
const Screen3 = "/semiflatv4/assets/screen-3.f0b96e36.png";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TheUsefulScreensSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40" }, _attrs))}><div class="px-1.75rem py-10.5 bg-[#F6F7F9] rounded-3 border border-[#D8DFE5] mb-8 md:rounded-6 md:py-4.375rem md:px-24"><img${ssrRenderAttr("src", unref(Screen1))} class="custom-shadow rounded-3"></div><div class="grid gap-8 sm:grid-cols-2"><div class="bg-[#F6F7F9] rounded-3 border border-[#D8DFE5] md:rounded-6 overflow-hidden"><img${ssrRenderAttr("src", unref(Screen2))}></div><div class="bg-[#F6F7F9] rounded-3 border border-[#D8DFE5] md:rounded-6 overflow-hidden"><img${ssrRenderAttr("src", unref(Screen3))}></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/useful/TheUsefulScreensSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TheUsefulProjectBackgroundSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40" }, _attrs))}><div class="md:grid grid-cols-2 md:max-w-[57.125rem] mx-auto"><div class="md:max-w-[21.625rem]"><h2 class="text-xl text-blue-300 font-semibold md:text-[1.75rem] leading-[120%]"> Project background </h2><p class="mt-4 text-[#545959]">What is Useful, and what have they managed to do before approaching Semiflat?</p></div><div class="mt-8 grid gap-8 md:mt-0"><div class="flex gap-6"><div class="md:pr-2"><p class="text-[#545959] mb-8">The founders of Useful are product managers who previously worked at a big tech company. Their idea for an app was born from a shared struggle to stay on top of the customer discovery process. They realized organizing their work manually with spreadsheets provides little visibility and isn\u2019t scalable. There had to be a better way! After discovering that there was no solution on the market, they took matters into their own hands. They embarked on a mission to help companies build closer relationships with their customers and extract insights from their conversations.</p></div></div></div></div><div class="w-full h-[1px] bg-[#D8DFE5] my-12 md:my-20 md:max-w-[57.125rem] mx-auto"></div><div class="md:grid grid-cols-2 md:max-w-[57.125rem] mx-auto gap-8"><div class="md:max-w-[21.625rem]"><h2 class="text-xl text-blue-300 font-semibold md:text-[1.75rem] leading-[120%]">The problem </h2><p class="mt-4 text-[#545959]">Why did Useful approach us? What outcome were they looking for?</p></div><div class="mt-8 grid gap-8 md:mt-0"><div class="flex gap-6"><div class="md:pr-2"><p class="text-[#545959]">Useful approached us after conducing more than one hundred interviews with project managers, researchers and designers. They knew exactly what problems their potential users were facing but needed our help with translating their insights into features and user flows and a full MVP design. </p></div></div></div></div></div>`);
    };
  }
});
const TheUsefulProjectBackgroundSection_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/useful/TheUsefulProjectBackgroundSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Feature1Img = "/semiflatv4/assets/feature-1.e8694978.png";
const Feature2Img = "/semiflatv4/assets/feature-2.eb48e6ba.png";
const Feature3Img = "/semiflatv4/assets/feature-3.1cbac0cf.png";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TheUsefulHelpCompaniesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const context = usePageContext();
    const breakpoints = useBreakpoints(breakpointsConst);
    const md = ref(breakpoints.smaller("md"));
    const details = [
      {
        img: Feature1Img,
        icon: Feature1Svg,
        header: "Meetings",
        desc: "Capture all customer calls in one space. Useful automatically transcribes the calls into a searchable database."
      },
      {
        img: Feature2Img,
        icon: Feature2Svg,
        header: "Projects",
        desc: "All of your meeting recordings live inside Projects. You can add custom filters to find what you\u2019re looking for easily."
      },
      {
        img: Feature3Img,
        icon: Feature3Svg,
        header: "Notes",
        desc: "Take live meeting notes directly in Useful and have them automatically synced to Google Docs."
      }
    ];
    const selectedDetail = ref(details[0]);
    const swiperOptions = computed(() => ({
      slidesPerView: "auto",
      spaceBetween: 24,
      navigation: false,
      loop: true,
      watchSlidesVisibility: true,
      autoplay: {
        delay: 4e3
      }
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSlider = __unplugin_components_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40" }, _attrs))}><h2 class="text-xl font-semibold leading-[150%] md:mx-auto md:w-[45.375rem] md:text-center md:text-[1.75rem] leading-[120%]"> Useful helps product managers build apps that <br class="hidden md:block"> their customer need_ </h2><div class="py-[2.625rem] px-[1.75rem] md:pt-[4.375rem] hidden md:block md:pb-12 md:px-24 bg-[#F6F7F9] rounded-3 mt-12 md:mt-20 border-1 border-[#D8DFE5]"><img${ssrRenderAttr("src", unref(selectedDetail).img)} class="mx-auto rounded-3 custom-shadow border-1 border-[#D8DFE5]"></div><div>`);
      if (unref(md)) {
        _push(ssrRenderComponent(_component_AppSlider, {
          class: "mt-8",
          style: {},
          "swiper-options": unref(swiperOptions)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(details, (card, i) => {
                _push2(ssrRenderComponent(unref(SwiperSlide), {
                  key: i,
                  class: "pb-3"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a, _b, _c, _d;
                    if (_push3) {
                      _push3(`<div class="py-[2.625rem] px-[1.75rem] md:pt-[4.375rem] md:pb-12 md:px-24 bg-[#F6F7F9] rounded-3 mt-12 md:mt-20"${_scopeId2}><img${ssrRenderAttr("src", card.img)} class="mx-auto rounded-3 custom-shadow border-1 border-[#D8DFE5]"${_scopeId2}></div><div class="shrink-0 mx-auto flex items-center justify-center mt-8"${_scopeId2}><div class="p-6 border border-[#D8DFE5] rounded-3 md:border-none max-w-[21.687rem] object-cover shadow-select"${_scopeId2}>`);
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(card.icon), {
                        class: ["mb-8", [(_b = (_a = unref(context).pageProps) == null ? void 0 : _a.pageShell) == null ? void 0 : _b.bgColor]]
                      }, null), _parent3, _scopeId2);
                      _push3(`<p class="mb-1 gradient-text font-semibold"${_scopeId2}>${ssrInterpolate(card.header)}</p><p class="text-[#545959]"${_scopeId2}>${ssrInterpolate(card.desc)}</p></div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "py-[2.625rem] px-[1.75rem] md:pt-[4.375rem] md:pb-12 md:px-24 bg-[#F6F7F9] rounded-3 mt-12 md:mt-20" }, [
                          createVNode("img", {
                            src: card.img,
                            class: "mx-auto rounded-3 custom-shadow border-1 border-[#D8DFE5]"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "shrink-0 mx-auto flex items-center justify-center mt-8" }, [
                          createVNode("div", { class: "p-6 border border-[#D8DFE5] rounded-3 md:border-none max-w-[21.687rem] object-cover shadow-select" }, [
                            (openBlock(), createBlock(resolveDynamicComponent(card.icon), {
                              class: ["mb-8", [(_d = (_c = unref(context).pageProps) == null ? void 0 : _c.pageShell) == null ? void 0 : _d.bgColor]]
                            }, null, 8, ["class"])),
                            createVNode("p", { class: "mb-1 gradient-text font-semibold" }, toDisplayString(card.header), 1),
                            createVNode("p", { class: "text-[#545959]" }, toDisplayString(card.desc), 1)
                          ])
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
                (openBlock(), createBlock(Fragment, null, renderList(details, (card, i) => {
                  return createVNode(unref(SwiperSlide), {
                    key: i,
                    class: "pb-3"
                  }, {
                    default: withCtx(() => {
                      var _a, _b;
                      return [
                        createVNode("div", { class: "py-[2.625rem] px-[1.75rem] md:pt-[4.375rem] md:pb-12 md:px-24 bg-[#F6F7F9] rounded-3 mt-12 md:mt-20" }, [
                          createVNode("img", {
                            src: card.img,
                            class: "mx-auto rounded-3 custom-shadow border-1 border-[#D8DFE5]"
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "shrink-0 mx-auto flex items-center justify-center mt-8" }, [
                          createVNode("div", { class: "p-6 border border-[#D8DFE5] rounded-3 md:border-none max-w-[21.687rem] object-cover shadow-select" }, [
                            (openBlock(), createBlock(resolveDynamicComponent(card.icon), {
                              class: ["mb-8", [(_b = (_a = unref(context).pageProps) == null ? void 0 : _a.pageShell) == null ? void 0 : _b.bgColor]]
                            }, null, 8, ["class"])),
                            createVNode("p", { class: "mb-1 gradient-text font-semibold" }, toDisplayString(card.header), 1),
                            createVNode("p", { class: "text-[#545959]" }, toDisplayString(card.desc), 1)
                          ])
                        ])
                      ];
                    }),
                    _: 2
                  }, 1024);
                }), 64))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div class="shrink-0 mx-auto items-start justify-between hidden flex mt-10"><!--[-->`);
        ssrRenderList(details, (card, i) => {
          var _a, _b;
          _push(`<div class="${ssrRenderClass([{
            "shadow-select before:content-empty before:absolute before:top-0 before:left-0 before-rounded-3 before:w-full before:h-full before:bg-transparent before:border before:border-[#D8DFE5]": unref(selectedDetail).img === card.img
          }, "p-6 rounded-3 max-w-[21.687rem] object-cover cursor-pointer transition-all ease-linear duration-200 relative"])}">`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(card.icon), {
            class: ["mb-8 color-[#481B97]", [(_b = (_a = unref(context).pageProps) == null ? void 0 : _a.pageShell) == null ? void 0 : _b.textColor]]
          }, null), _parent);
          _push(`<p class="mb-1 gradient-text font-semibold">${ssrInterpolate(card.header)}</p><p class="text-[#545959]">${ssrInterpolate(card.desc)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const TheUsefulHelpCompaniesSection_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/useful/TheUsefulHelpCompaniesSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const QueryHelperIllMobile = "/semiflatv4/assets/query-helper-desktop.33ad7f64.png";
const _hoisted_1$3 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M8.25 15.75C6.17895 15.75 4.5 17.429 4.5 19.5C4.5 21.571 6.17895 23.25 8.25 23.25C10.321 23.25 12 21.571 12 19.5V3.75C12 2.09314 10.6569 0.75 9 0.75C7.34314 0.75 6 2.09314 6 3.75C6 5.40686 7.34314 6.75 9 6.75M4.67276 20.6201C2.48854 20.5147 0.75 18.7104 0.75 16.5C0.75 14.2218 2.59684 12.375 4.875 12.375C5.91052 12.375 6.75 11.5355 6.75 10.5M6.01395 3.84814C5.77005 3.78409 5.514 3.75 5.25 3.75C3.59314 3.75 2.25 5.09314 2.25 6.75C2.25 7.12001 2.31698 7.47443 2.43953 7.80169C1.43959 8.28825 0.75 9.3132 0.75 10.5C0.75 11.678 1.4289 12.6973 2.4168 13.1882M14.25 23.25H18.3M14.25 21H19.05M18 9C18 10.6569 16.6569 12 15 12V18.75H18.75C18.75 14.5629 23.25 12.75 23.25 8.25C23.25 3.75 20.25 0.75 15.75 0.75H14.25",
  stroke: "white",
  "stroke-width": "1.5",
  "stroke-miterlimit": "10"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$2);
}
const DiscoveryAndWorkshops = { render: render$3 };
const _hoisted_1$2 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M1.5 4.5V6.75M6.75 1.49966H4.5M14.3375 1.49966H12M10.5002 1.49963H8.24996M1.5 8.25V10.5M17.25 8.25V10.5M17.25 12V14.25M6.75 17.25H4.5M10.5 17.25H8.24996M14.25 17.25H12M1.5 12V14.2062M17.25 4.5V6.75M24 14.25H21C20.5858 14.25 20.25 13.9142 20.25 13.5V5.25C20.25 4.83578 20.5858 4.5 21 4.5H24M4.5 24V21C4.5 20.5858 4.83578 20.25 5.25 20.25H13.5C13.9142 20.25 14.25 20.5858 14.25 21V24M1.125 0.75H1.875C2.08211 0.75 2.25 0.917893 2.25 1.125V1.875C2.25 2.08211 2.08211 2.25 1.875 2.25H1.125C0.917893 2.25 0.75 2.08211 0.75 1.875V1.125C0.75 0.917893 0.917893 0.75 1.125 0.75ZM16.875 0.75H17.625C17.8321 0.75 18 0.917893 18 1.125V1.875C18 2.08211 17.8321 2.25 17.625 2.25H16.875C16.6679 2.25 16.5 2.08211 16.5 1.875V1.125C16.5 0.917893 16.6679 0.75 16.875 0.75ZM1.125 16.5H1.875C2.08211 16.5 2.25 16.6679 2.25 16.875V17.625C2.25 17.8321 2.08211 18 1.875 18H1.125C0.917893 18 0.75 17.8321 0.75 17.625V16.875C0.75 16.6679 0.917893 16.5 1.125 16.5ZM16.4125 15.0438V22.1688L18.7875 19.7938L22.1125 19.3188L16.4125 15.0438ZM5.25 4.5H13.5C13.9142 4.5 14.25 4.83579 14.25 5.25V13.5C14.25 13.9142 13.9142 14.25 13.5 14.25H5.25C4.83579 14.25 4.5 13.9142 4.5 13.5V5.25C4.5 4.83579 4.83579 4.5 5.25 4.5Z",
  stroke: "white",
  "stroke-width": "1.5",
  "stroke-miterlimit": "10"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3$1);
}
const UserInterfaceDesign = { render: render$2 };
const _hoisted_1$1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M11.25 22.5L13.5 20.25M13.5 20.25L11.25 18M13.5 20.25H6.75M5.25 6.75C4.47334 6.75 3.84375 6.12041 3.84375 5.34375V4.40625C3.84375 3.62959 4.47334 3 5.25 3C6.02666 3 6.65625 3.62959 6.65625 4.40625V5.34375C6.65625 6.12041 6.02666 6.75 5.25 6.75ZM5.25 6.75C6.69975 6.75 7.90929 7.75909 8.18904 8.63573M5.25 6.75C3.80025 6.75 2.59066 7.75912 2.31091 8.63573M20.25 6V11.25C20.25 11.6642 19.9142 12 19.5 12H14.25M12 3.75H17.25M11.25 12H4.5C4.08578 12 3.75 12.3358 3.75 12.75V18M9.75 5.25C9.75 7.73528 7.73528 9.75 5.25 9.75C2.76472 9.75 0.75 7.73528 0.75 5.25C0.75 2.76472 2.76472 0.75 5.25 0.75C7.73528 0.75 9.75 2.76472 9.75 5.25ZM11.4933 10.5H14.0067C14.1411 10.5 14.25 10.6089 14.25 10.7433V13.2567C14.25 13.3911 14.1411 13.5 14.0067 13.5H11.4933C11.3589 13.5 11.25 13.3911 11.25 13.2567V10.7433C11.25 10.6089 11.3589 10.5 11.4933 10.5ZM17.6715 1.5H22.8285C23.0613 1.5 23.25 1.6887 23.25 1.92146V5.57854C23.25 5.8113 23.0613 6 22.8285 6H17.6715C17.4387 6 17.25 5.8113 17.25 5.57854V1.92146C17.25 1.6887 17.4387 1.5 17.6715 1.5ZM1.17146 18H6.32854C6.56131 18 6.75 18.1887 6.75 18.4215V22.0785C6.75 22.3113 6.56131 22.5 6.32854 22.5H1.17146C0.938695 22.5 0.75 22.3113 0.75 22.0785V18.4215C0.75 18.1887 0.938695 18 1.17146 18ZM23.25 19.5C23.25 21.5711 21.5711 23.25 19.5 23.25C17.4289 23.25 15.75 21.5711 15.75 19.5C15.75 17.4289 17.4289 15.75 19.5 15.75C21.5711 15.75 23.25 17.4289 23.25 19.5ZM21 19.5C21 20.3284 20.3284 21 19.5 21C18.6716 21 18 20.3284 18 19.5C18 18.6716 18.6716 18 19.5 18C20.3284 18 21 18.6716 21 19.5Z",
  stroke: "white",
  "stroke-width": "1.5",
  "stroke-miterlimit": "10"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3);
}
const UserExperienceDesign = { render: render$1 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheUsefulHowWeHelpedSection",
  __ssrInlineRender: true,
  setup(__props) {
    const helped = [
      {
        icon: DiscoveryAndWorkshops,
        header: "Discovery & workshops",
        text: "We\u2019ve conducted an extensive Discovery phase to define all user stories and a complete navigation structure for the product."
      },
      {
        icon: UserExperienceDesign,
        header: "User experience design",
        text: "We\u2019ve translated the findings of the Discovery session into a set of low-fidelity wireframes."
      },
      {
        icon: UserInterfaceDesign,
        header: "User interface design",
        text: "We\u2019ve proposed multiple style variations and translated all lo-fi mockups into the one Client loved most."
      },
      {
        icon: Design,
        header: "Design system",
        text: "We\u2019ve built a comprehensive component library for all reusable elements within the design."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40" }, _attrs))} data-v-4adeea08><div class="bg-violet-light-gradient rounded-4 max-w-[57.125rem] mx-auto" data-v-4adeea08><div class="text-white md:flex items-center gap-8 lg:gap-0" data-v-4adeea08><div class="pt-8 px-8 md:pr-0 md:pb-8 lg:py-20 pl-14 lg:max-w-[26rem]" data-v-4adeea08><h2 class="text-white text-lg font-semibold lg:text-[1.75rem]" data-v-4adeea08>How we\u2019ve helped_</h2><div class="flex flex-col gap-6 lg:gap-8 mt-12" data-v-4adeea08><!--[-->`);
      ssrRenderList(helped, (el) => {
        _push(`<div class="" data-v-4adeea08><div class="flex gap-4 mb-2" data-v-4adeea08>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(el.icon), { class: "h-7.5 w-7.5 p-[0.187rem] text-white" }, null), _parent);
        _push(`<h3 class="font-semibold" data-v-4adeea08>${ssrInterpolate(el.header)}</h3></div><p class="opacity-80" data-v-4adeea08>${ssrInterpolate(el.text)}</p></div>`);
      });
      _push(`<!--]--></div></div><div data-v-4adeea08><picture data-v-4adeea08><source media="(min-width: 1366px)"${ssrRenderAttr("srcset", unref(QueryHelperIllMobile))} data-v-4adeea08><img${ssrRenderAttr("src", unref(QueryHelperIllMobile))} class="mx-auto md:max-w-[600px] lg:w-500px" data-v-4adeea08></picture></div></div></div></div>`);
    };
  }
});
const TheUsefulHowWeHelpedSection_vue_vue_type_style_index_0_scoped_4adeea08_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/useful/TheUsefulHowWeHelpedSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4adeea08"]]);
const Dashboard = "/semiflatv4/assets/useful-dashboard.1059fe77.png";
const _hoisted_1 = {
  width: "154",
  height: "50",
  viewBox: "0 0 154 50",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<path d="M67.9311 19.7109V28.7759C67.9311 32.0659 66.6361 33.6409 63.9411 33.6409C61.5611 33.6409 60.2661 32.3109 60.2661 29.0209V19.7109H55.9961V30.5259C55.9961 34.7609 58.3411 37.4559 62.3311 37.4559C64.6411 37.4559 66.8811 36.3359 67.9311 34.6909L68.2461 37.0009H72.2011V19.7109H67.9311ZM74.9396 31.7509C74.9396 35.1459 77.6696 37.4559 81.9746 37.4559C86.2446 37.4559 89.2196 35.2859 89.2196 31.7859C89.2196 29.1259 87.7496 27.7959 84.8446 27.1309L81.7296 26.3959C80.2596 26.0459 79.4896 25.4159 79.4896 24.4359C79.4896 23.1409 80.4696 22.3709 82.1496 22.3709C83.7946 22.3709 84.7746 23.3159 84.8096 24.7859H88.8696C88.8346 21.4259 86.2096 19.1859 82.3246 19.1859C78.3346 19.1859 75.4646 21.2159 75.4646 24.6109C75.4646 27.3759 76.9696 28.8459 80.0846 29.5459L83.1996 30.2809C84.7396 30.6309 85.1946 31.2609 85.1946 32.1359C85.1946 33.3959 84.1096 34.2009 82.1146 34.2009C80.1546 34.2009 79.0346 33.2559 78.9996 31.7509H74.9396ZM100.206 37.4559C104.721 37.4559 107.871 35.1809 108.606 31.4009H104.651C104.161 33.0459 102.621 33.9559 100.276 33.9559C97.4408 33.9559 95.8308 32.4159 95.5158 29.3709L108.536 29.3359V28.0409C108.536 22.6509 105.246 19.1859 100.066 19.1859C94.9908 19.1859 91.4558 22.9309 91.4558 28.3559C91.4558 33.7109 95.0608 37.4559 100.206 37.4559ZM100.101 22.6859C102.656 22.6859 104.301 24.2609 104.301 26.6409H95.6208C96.0408 24.0509 97.5808 22.6859 100.101 22.6859ZM110.238 19.7109V23.2809H112.723V37.0009H116.958V23.2809H121.088V19.7109H116.958V17.6109C116.958 15.8959 117.483 14.7759 119.653 14.7759H121.158V11.1359C120.423 10.9959 119.618 10.9609 118.953 10.9609C115.208 10.9609 112.723 12.9209 112.723 17.6109V19.7109H110.238ZM135.539 19.7109V28.7759C135.539 32.0659 134.244 33.6409 131.549 33.6409C129.169 33.6409 127.874 32.3109 127.874 29.0209V19.7109H123.604V30.5259C123.604 34.7609 125.949 37.4559 129.939 37.4559C132.249 37.4559 134.489 36.3359 135.539 34.6909L135.854 37.0009H139.809V19.7109H135.539ZM148.524 37.0009V10.9609H144.289V37.0009H148.524Z" fill="#6F2DE7"></path><path d="M11.7243 0C16.5312 0 20.4467 3.91552 20.4467 8.72237V28.2607C20.4467 30.6262 22.3731 32.558 24.7438 32.558H26.8375V36.978H24.7438C19.937 36.978 16.0267 33.0675 16.0267 28.2607V8.72237C16.0267 6.35162 14.0951 4.42 11.7243 4.42C9.35355 4.42 7.42195 6.35162 7.42195 8.72237V28.2607C7.42195 35.671 12.0981 42.012 18.6614 44.4743C20.5591 45.1905 22.6057 45.58 24.7464 45.58C27.1172 45.58 29.0487 43.6535 29.0487 41.2827V8.72237C29.0487 3.91552 32.9592 0 37.766 0C42.5727 0 46.4935 3.91552 46.4935 8.72237V28.2607C46.4935 33.0675 42.5727 36.978 37.766 36.978H35.6775V32.558H37.766C40.142 32.558 42.0735 30.6262 42.0735 28.2607V8.72237C42.0735 6.35162 40.142 4.42 37.766 4.42C35.4005 4.42 33.4687 6.35162 33.4687 8.72237V41.2827C33.4687 46.0897 29.5585 50 24.7464 50C22.6318 50 20.5957 49.6968 18.6614 49.1323C9.6254 46.4923 3.00195 38.1333 3.00195 28.2607V8.72237C3.00195 3.91292 6.91225 0 11.7243 0Z" fill="#6F2DE7"></path><path d="M3.00195 8.72365V28.262C3.00195 38.1345 9.6254 46.4935 18.6614 49.1335V44.4783C12.0981 42.016 7.42195 35.6748 7.42195 28.2645V8.72625C7.42195 6.3555 9.35355 4.42391 11.7243 4.42391V0.00390756C6.91225 0.00129372 3.00195 3.91421 3.00195 8.72365Z" fill="url(#paint0_linear_1662_13426)"></path><path d="M11.7246 0V4.42C14.0954 4.42 16.027 6.35163 16.027 8.72238V28.2608C16.027 33.0675 19.9373 36.978 24.7441 36.978H26.8378V32.558H24.7441C22.3734 32.558 20.447 30.6263 20.447 28.2608V8.72238C20.447 3.91293 16.5314 0 11.7246 0Z" fill="url(#paint1_linear_1662_13426)"></path><path d="M18.6621 44.4742V49.1295C20.5937 49.6942 22.6325 49.9975 24.7471 49.9975C29.5592 49.9975 33.4694 46.087 33.4694 41.2802V8.72237C33.4694 6.35162 35.4012 4.42 37.7667 4.42V0C32.9597 0 29.0494 3.91552 29.0494 8.72237V41.2827C29.0494 43.6535 27.1179 45.58 24.7471 45.58C22.6064 45.58 20.5598 45.1905 18.6621 44.4742Z" fill="url(#paint2_linear_1662_13426)"></path><path d="M35.6777 32.558V36.978H37.7662C42.573 36.978 46.4937 33.0675 46.4937 28.2608V8.72238C46.4937 3.91553 42.573 0 37.7662 0V4.42C40.1422 4.42 42.0737 6.35163 42.0737 8.72238V28.2608C42.0737 30.6263 40.1422 32.558 37.7662 32.558H35.6777Z" fill="url(#paint3_linear_1662_13426)"></path><defs><linearGradient id="paint0_linear_1662_13426" x1="13.559" y1="43.091" x2="4.56824" y2="2.81205" gradientUnits="userSpaceOnUse"><stop stop-color="#9B6DEE"></stop><stop offset="1" stop-color="#6F2DE7"></stop></linearGradient><linearGradient id="paint1_linear_1662_13426" x1="36.2588" y1="44.1055" x2="20.2551" y2="21.3586" gradientUnits="userSpaceOnUse"><stop stop-color="#43129C"></stop><stop offset="1" stop-color="#6F2DE7"></stop></linearGradient><linearGradient id="paint2_linear_1662_13426" x1="23.7576" y1="45.6917" x2="34.5467" y2="15.9322" gradientUnits="userSpaceOnUse"><stop stop-color="#9B6DEE"></stop><stop offset="1" stop-color="#6F2DE7"></stop></linearGradient><linearGradient id="paint3_linear_1662_13426" x1="23.7489" y1="45.3738" x2="41.6407" y2="16.1535" gradientUnits="userSpaceOnUse"><stop stop-color="#43129C"></stop><stop offset="1" stop-color="#6F2DE7"></stop></linearGradient></defs>', 7);
const _hoisted_9 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_9);
}
const UsefulLogo = { render };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheUsefulHeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const context = usePageContext();
    const scrollToTestimonial = () => {
      var _a;
      (_a = document == null ? void 0 : document.getElementById("testimonial")) == null ? void 0 : _a.scrollIntoView({
        behavior: "smooth"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_AppButton = __unplugin_components_0;
      _push(`<!--[--><div class="relative page-content"><div class="mt-3.5rem md:mt-30 md:text-center">`);
      _push(ssrRenderComponent(unref(UsefulLogo), { class: "mx-auto hidden md:block" }, null, _parent));
      _push(`<h1 class="hero-title md:text-[2.5rem] md:leading-[120%] md:mt-16"> Helping Useful raise $5M to <br class="hidden md:block">empower continuous delivery tech <br class="hidden md:block"> teams </h1><p class="mt-6"> Turn customer calls into Product gold. Transcribe, highlight, and share important <br class="hidden md:block"> moments from customer calls. Excite and inform teammates to build products your <br class="hidden md:block"> customers will love. </p><div class="mt-2.5rem">`);
      _push(ssrRenderComponent(_component_AppButton, {
        class: [(_b = (_a = unref(context).pageProps) == null ? void 0 : _a.pageShell) == null ? void 0 : _b.bgColor],
        href: "https://useful.com",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`See the live version`);
          } else {
            return [
              createTextVNode("See the live version")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AppButton, {
        text: "",
        onClick: scrollToTestimonial
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Read testimonial`);
          } else {
            return [
              createTextVNode("Read testimonial")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="relative h-[370px] sm:h-[690px] mt-10 mt-20 ml-6 md:ml-0"><img${ssrRenderAttr("src", unref(Dashboard))} class="h-full object-cover object-top-left dashboard-mask mx-auto border-1 border-[#D8DFE5] md:rounded-6"></div><div class="page-content mt-10 md:mt-20"><div class="flex flex-col items-center sm:grid gap-6 md:gap-8 sm:grid-cols-3 justify-center"><div class="border border-[#D8DFE5] inline-block rounded-3 max-w-[346px] w-full overflow-hidden"><div class="bg-[url(~/assets/pocus/pocus-timeline.svg)] h-[7.5rem] bg-center"></div><div class="py-4 px-6 text-center"><p class="font-semibold">2 months</p><p class="text-gray-600">Timeline</p></div></div><div class="border border-[#D8DFE5] inline-block rounded-3 max-w-[346px] w-full overflow-hidden"><div class="bg-[url(~/assets/pocus/pocus-location.svg)] h-[7.5rem] bg-center"></div><div class="py-4 px-6 text-center"><p class="font-semibold">Austin, TX</p><p class="text-gray-600">Location</p></div></div><div class="border border-[#D8DFE5] inline-block rounded-3 max-w-[346px] w-full overflow-hidden"><div class="bg-[url(~/assets/pocus/pocus-funding.svg)] h-[7.5rem] bg-center"></div><div class="py-4 px-6 text-center"><p class="font-semibold">$5M</p><p class="text-gray-600">Total funding</p></div></div></div></div><!--]-->`);
    };
  }
});
const TheUsefulHeroSection_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/useful/TheUsefulHeroSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheUsefulHeroSection = _sfc_main$1;
  const _component_TheUsefulHowWeHelpedSection = __unplugin_components_1;
  const _component_TheUsefulHelpCompaniesSection = _sfc_main$3;
  const _component_TheUsefulProjectBackgroundSection = _sfc_main$4;
  const _component_TheUsefulScreensSection = _sfc_main$5;
  const _component_TheUsefulTestimonialSection = __unplugin_components_5;
  const _component_TheUsefulStepByStepSection = _sfc_main$7;
  const _component_TheUsefulCompaniesLoveSection = __unplugin_components_7;
  const _component_TheUsefulFunctionsSection = _sfc_main$9;
  const _component_TheUsefulProjectOutcomeSection = _sfc_main$a;
  const _component_TheUsefulMoreScreensSection = _sfc_main$b;
  const _component_TheUsefulLookingForMvpSection = __unplugin_components_11;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheUsefulHeroSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TheUsefulHowWeHelpedSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TheUsefulHelpCompaniesSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TheUsefulProjectBackgroundSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TheUsefulScreensSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TheUsefulTestimonialSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TheUsefulStepByStepSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TheUsefulCompaniesLoveSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TheUsefulFunctionsSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TheUsefulProjectOutcomeSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TheUsefulMoreScreensSection, null, null, _parent));
  _push(ssrRenderComponent(_component_TheUsefulLookingForMvpSection, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/useful.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const useful_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  useful_page as default
};
