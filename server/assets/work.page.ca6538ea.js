import { _ as __unplugin_components_5 } from "./chunk-c5742e63.js";
import { _ as _sfc_main$6 } from "./chunk-4e701397.js";
import { defineComponent, reactive, mergeProps, unref, useSSRContext, computed, createVNode, resolveDynamicComponent, withCtx, openBlock, createBlock, Fragment, renderList, ref, onMounted, createTextVNode, createElementBlock, createStaticVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderVNode } from "vue/server-renderer";
import { _ as __unplugin_components_0 } from "./chunk-91954a89.js";
import { u as useBreakpoints } from "./chunk-37b144d7.js";
import { SwiperSlide } from "swiper/vue";
import { a as ahana, b as appfleet, c as clickmagick, d as cloudstore, e as defaultLogo, f as devzero, g as doss, h as gcore, i as gyaan, j as halycon, k as jetic, l as lhotse, m as metlo, o as onward, p as phenom, n as pocus, r as runchise, s as scholaris, q as simplero, t as sisu, u as stepsize, v as tagvenue, w as tau, x as useful, y as yuzedata, E as ExpertiseHexagon, _ as _sfc_main$7 } from "./chunk-8a0f99de.js";
import { _ as __unplugin_components_0$1, a as _export_sfc } from "./chunk-5a6b5315.js";
import { g as gsapWithCSS } from "./chunk-ea976db9.js";
import { B as BackgroundMobileLeft, a as BackgroundDesktop } from "./chunk-58947999.js";
import "swiper";
import "@vueuse/core";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TheWorkFaqSection",
  __ssrInlineRender: true,
  setup(__props) {
    const faqs = reactive([
      {
        header: "What deliverables will I receive?",
        text: "A separate Figma file for every stage of the design process. A typical deliverables package consists of a low-fidelity wireframes Figma file, high fidelity wireframes Figma file, and a separate file containing all reusable components from the design.",
        isOpen: false
      },
      {
        header: "What are the next steps to work with you?",
        text: "Click the \u2018Get in touch\u2019 button in the top right corner or message hello@semiflat.com outlining your high-level design needs. We\u2019ll reply and work out a time for an introductory call where you\u2019ll ask us anything that\u2019s on your mind. From there, we\u2019ll work towards defining the scope, pricing, and timeline. ",
        isOpen: false
      },
      {
        header: "What is the timeline to design an MVP?",
        text: "A typical MVP takes between 2 and 3 months to design. This includes working through all stages of product design - from user stories through user experience, ending with a user interface and a component library.",
        isOpen: false
      },
      {
        header: "Do you implement the designs too?",
        text: "We implement complex websites and marketing pages using no-code (Webflow) but can also implement the front-end of a web app using traditional development.",
        isOpen: false
      },
      {
        header: "How much should I budget for the project?",
        text: "Designing a typical MVP from scratch usually costs between $15k and $25k. Ongoing design support packages start from $6400/month with no long-time commitment. Contact us for individual pricing if you\u2019re looking for a dedicated design team.",
        isOpen: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheFaqComponent = _sfc_main$6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40" }, _attrs))}><h2 class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]"> Have any questions? We\u2019re here to help you <br class="hidden md:block"> navigate the world of design_</h2>`);
      _push(ssrRenderComponent(_component_TheFaqComponent, { faqs: unref(faqs) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/work/TheWorkFaqSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TheWorkClientsSection",
  __ssrInlineRender: true,
  setup(__props) {
    const logos = [
      ahana,
      appfleet,
      clickmagick,
      cloudstore,
      defaultLogo,
      devzero,
      doss,
      gcore,
      gyaan,
      halycon,
      jetic,
      lhotse,
      metlo,
      onward,
      phenom,
      pocus,
      runchise,
      scholaris,
      simplero,
      sisu,
      stepsize,
      tagvenue,
      tau,
      useful,
      yuzedata
    ];
    const logos1 = [
      gyaan,
      halycon,
      jetic,
      lhotse,
      metlo,
      onward,
      phenom,
      pocus,
      runchise,
      scholaris,
      ahana,
      appfleet,
      clickmagick,
      cloudstore,
      defaultLogo,
      devzero,
      doss,
      gcore,
      simplero,
      sisu,
      stepsize,
      tagvenue,
      tau,
      useful,
      yuzedata
    ];
    const logosMobile = [
      sisu,
      phenom,
      defaultLogo,
      clickmagick,
      pocus,
      stepsize,
      cloudstore,
      lhotse,
      useful,
      jetic,
      halycon,
      gcore,
      onward,
      simplero
    ];
    const breakpoints = useBreakpoints();
    const swiperBreakpoints = {
      [breakpoints.lg]: {
        slidesPerView: "auto",
        watchSlidesVisibility: true
      }
    };
    const swiperOptions = computed(() => ({
      slidesPerView: "auto",
      navigation: false,
      loop: true,
      speed: 5e3,
      watchSlidesVisibility: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      breakpoints: swiperBreakpoints
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSlider = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40" }, _attrs))}><div class=""><h2 class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]"> Meet some of the startups who we\u2019ve supported_ </h2></div><div class="grid grid-cols-2 gap-y-8 md:grid-cols-3 mt-12 lg:hidden"><!--[-->`);
      ssrRenderList(logosMobile, (logo) => {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(logo), {
          key: logo,
          class: "mx-auto w-full"
        }, null), _parent);
      });
      _push(`<!--]--></div><div class="mt-20 hidden lg:flex flex-col gap-8 mask">`);
      _push(ssrRenderComponent(_component_AppSlider, {
        class: "",
        style: {},
        "swiper-options": unref(swiperOptions)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(logos, (logo, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: i,
                class: "w-[180px] md:w-[240px] shrink-0 mx-auto flex items-center justify-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(logo), { class: "h-[4.375rem]" }, null), _parent3, _scopeId2);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(logo), { class: "h-[4.375rem]" }))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(logos, (logo, i) => {
                return createVNode(unref(SwiperSlide), {
                  key: i,
                  class: "w-[180px] md:w-[240px] shrink-0 mx-auto flex items-center justify-center"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(logo), { class: "h-[4.375rem]" }))
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AppSlider, {
        class: "",
        style: {},
        "swiper-options": {
          ...unref(swiperOptions),
          speed: 5500,
          autoplay: { reverseDirection: true, delay: 0 }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(logos1, (logo, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: i,
                class: "w-[180px] md:w-[240px] shrink-0 mx-auto flex items-center justify-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(logo), { class: "h-[4.375rem]" }, null), _parent3, _scopeId2);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(logo), { class: "h-[4.375rem]" }))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(logos1, (logo, i) => {
                return createVNode(unref(SwiperSlide), {
                  key: i,
                  class: "w-[180px] md:w-[240px] shrink-0 mx-auto flex items-center justify-center"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(logo), { class: "h-[4.375rem]" }))
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_AppSlider, {
        class: "",
        style: {},
        "swiper-options": { ...unref(swiperOptions), speed: 6e3 }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(logos.reverse(), (logo, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: i,
                class: "w-[180px] md:w-[240px] shrink-0 mx-auto flex items-center justify-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(logo), { class: "h-[4.375rem]" }, null), _parent3, _scopeId2);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(logo), { class: "h-[4.375rem]" }))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(logos.reverse(), (logo, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: i,
                  class: "w-[180px] md:w-[240px] shrink-0 mx-auto flex items-center justify-center"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(logo), { class: "h-[4.375rem]" }))
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const TheWorkClientsSection_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/work/TheWorkClientsSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TheWorkExploreServicesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const hexagonRef = ref();
    const getLines = () => hexagonRef.value.$el.querySelector(`.glow-line`);
    const getLine = (id) => hexagonRef.value.$el.querySelector(`.glow-line-${id}`);
    onMounted(() => {
      if (!hexagonRef.value)
        return;
      gsapWithCSS.set(getLines(), {
        drawSVG: "0% 0%"
      });
      const tl = gsapWithCSS.timeline({
        ease: "power2.out",
        repeat: -1
      });
      tl.fromTo(getLine(1), { drawSVG: "0% 2%" }, { drawSVG: "-27% -26%", duration: 1.75 }).fromTo(getLine(2), { drawSVG: "23% 25%" }, { drawSVG: "-5% -4%", duration: 1.75 }).fromTo(getLine(3), { drawSVG: "23% 25%" }, { drawSVG: "53% 54%", duration: 1.75 }).fromTo(getLine(4), { drawSVG: "45% 47%" }, { drawSVG: "73% 74%", duration: 1.75 });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppButton = __unplugin_components_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40 relative" }, _attrs))} data-v-6b5a34b3><div class="expertise text-white rounded-4 md:flex md:items-center max-w-[914px] mx-auto relative md:max-h-[21.625rem]" data-v-6b5a34b3><div class="p-8 md:py-20 md:px-14 relative" data-v-6b5a34b3><h2 class="font-semibold text-xl mb-4 md:text-[1.75rem]" data-v-6b5a34b3>Explore our services range</h2><p class="text-blue-100 mb-8 text-sm md:text-base" data-v-6b5a34b3> Problem solving is our strong suit. We live and breathe design and have helped dozens of startups solve complex problems in their respective niches. </p><div class="md:flex" data-v-6b5a34b3>`);
      _push(ssrRenderComponent(_component_AppButton, {
        secondary: "",
        href: "/services"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn about our services`);
          } else {
            return [
              createTextVNode("Learn about our services")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(unref(ExpertiseHexagon), {
        ref_key: "hexagonRef",
        ref: hexagonRef,
        class: "max-w-[19.5rem] mx-auto relative md:mr-6 w-full"
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const TheWorkExploreServicesSection_vue_vue_type_style_index_0_scoped_6b5a34b3_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/work/TheWorkExploreServicesSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6b5a34b3"]]);
const Pocus = "/semiflatv4/assets/Illustration-Pocus.4f41469e.svg";
const Useful = "/semiflatv4/assets/Illustration-Useful.6036008a.svg";
const Phenom = "/semiflatv4/assets/Illustration-Phenom.92834803.svg";
const Appfleet = "/semiflatv4/assets/Illustration-appfleet.d59abedb.svg";
const Scholaris = "/semiflatv4/assets/Illustration-scholaris.5e0cbfa9.svg";
const Jetic = "/semiflatv4/assets/Illustration-jetic.3c440cf1.svg";
const Doss = "/semiflatv4/assets/Illustration-doss.b47924a6.svg";
const Sisu = "/semiflatv4/assets/Illustration-sisu.ac72937b.svg";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheWorkCaseStudySection",
  __ssrInlineRender: true,
  setup(__props) {
    const illustrations = [
      {
        picture: Pocus,
        caption: "Designing Pocus - product-led sales tool that raised a $23M series A.",
        link: "/pocus"
      },
      {
        picture: Useful,
        caption: "Helping Useful raise $5M to empower continuous delivery tech teams.",
        link: "/useful"
      },
      {
        picture: Phenom,
        caption: "Supporting Phenom - an HR-Tech unicorn by building a dedicated design team."
      },
      {
        picture: Appfleet,
        caption: "Creating full product design for appfleet, an alternative for Kubernetes."
      },
      {
        picture: Sisu,
        caption: "Supporting Sisu - a decision intelligence platform with a dedicated designer"
      },
      {
        picture: Doss,
        caption: "MVP prototype and ongoing suport for Doss - a platform for operations teams."
      },
      {
        picture: Jetic,
        caption: "Designing Jetic - the only cloud-native iPaaS based on Apache Camel."
      },
      {
        picture: Scholaris,
        caption: "Designing the UX and UI  for Scholaris, a learning management system and more."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppCaseStudyCard = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-46 grid md:grid-cols-2 gap-6 md:gap-8 justify-center" }, _attrs))}><!--[-->`);
      ssrRenderList(illustrations, (card, i) => {
        _push(ssrRenderComponent(_component_AppCaseStudyCard, {
          key: i,
          data: card
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/work/TheWorkCaseStudySection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _hoisted_1 = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_780_52852)"><path d="M1.58398 12.5H22.8339" stroke="url(#paint0_linear_780_52852)" stroke-width="2" stroke-miterlimit="10"></path><path d="M30.334 12.5H39.0839" stroke="url(#paint1_linear_780_52852)" stroke-width="2" stroke-miterlimit="10"></path><path d="M22.8339 36.2494H2.83398C2.14361 36.2494 1.58398 35.6898 1.58398 34.9994V5C1.58398 4.30963 2.14361 3.75 2.83398 3.75H37.834C38.5244 3.75 39.084 4.30963 39.084 5V27.5" stroke="url(#paint2_linear_780_52852)" stroke-width="2" stroke-miterlimit="10"></path><path d="M5.95898 8.75C6.30416 8.75 6.58398 8.47018 6.58398 8.125C6.58398 7.77982 6.30416 7.5 5.95898 7.5C5.61381 7.5 5.33398 7.77982 5.33398 8.125C5.33398 8.47018 5.61381 8.75 5.95898 8.75Z" stroke="url(#paint3_linear_780_52852)" stroke-width="2" stroke-miterlimit="10"></path><path d="M10.959 8.75C11.3042 8.75 11.584 8.47018 11.584 8.125C11.584 7.77982 11.3042 7.5 10.959 7.5C10.6138 7.5 10.334 7.77982 10.334 8.125C10.334 8.47018 10.6138 8.75 10.959 8.75Z" stroke="url(#paint4_linear_780_52852)" stroke-width="2" stroke-miterlimit="10"></path><path d="M15.959 8.75C16.3042 8.75 16.584 8.47018 16.584 8.125C16.584 7.77982 16.3042 7.5 15.959 7.5C15.6138 7.5 15.334 7.77982 15.334 8.125C15.334 8.47018 15.6138 8.75 15.959 8.75Z" stroke="url(#paint5_linear_780_52852)" stroke-width="2" stroke-miterlimit="10"></path><path d="M5.33203 31.25H15.3352" stroke="url(#paint6_linear_780_52852)" stroke-width="2" stroke-miterlimit="10"></path><path d="M26.584 23.2559L26.6084 34.4362L29.4004 33.0325L31.6463 37.4997L34.9967 35.8154L32.7509 31.3481L35.5429 29.9445L26.584 23.2559Z" stroke="url(#paint7_linear_780_52852)" stroke-width="2" stroke-miterlimit="10"></path><path d="M26.584 11.25V17.5" stroke="url(#paint8_linear_780_52852)" stroke-width="2" stroke-miterlimit="10"></path><path d="M22.834 20H17.834" stroke="url(#paint9_linear_780_52852)" stroke-width="2" stroke-miterlimit="10"></path><path d="M30.334 20H36.584" stroke="#002832" stroke-width="2" stroke-miterlimit="10"></path><path d="M14.084 17.5H6.58398V26.25H14.084V17.5Z" stroke="#002832" stroke-width="2" stroke-miterlimit="10"></path></g><defs><linearGradient id="paint0_linear_780_52852" x1="22.8339" y1="12.5" x2="22.74" y2="14.4956" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint1_linear_780_52852" x1="39.0839" y1="12.5" x2="38.8583" y2="14.4742" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint2_linear_780_52852" x1="39.084" y1="3.75" x2="6.91502" y2="40.8694" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint3_linear_780_52852" x1="6.58398" y1="7.5" x2="5.334" y2="8.75001" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint4_linear_780_52852" x1="11.584" y1="7.5" x2="10.334" y2="8.75001" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint5_linear_780_52852" x1="16.584" y1="7.5" x2="15.334" y2="8.75001" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint6_linear_780_52852" x1="15.3352" y1="31.25" x2="15.1373" y2="33.2302" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint7_linear_780_52852" x1="35.5429" y1="23.2559" x2="22.7041" y2="31.3312" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint8_linear_780_52852" x1="27.584" y1="11.25" x2="25.6339" y2="11.562" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint9_linear_780_52852" x1="22.834" y1="20" x2="22.4494" y2="21.9231" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><clipPath id="clip0_780_52852"><rect width="40" height="40" fill="white" transform="translate(0.333984)"></rect></clipPath></defs>', 2);
const _hoisted_4 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_4);
}
const AllProjectsIcon = { render };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheWorkHeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppButton = __unplugin_components_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative page-content" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(BackgroundMobileLeft), { class: "absolute top-28 left-0 md:hidden" }, null, _parent));
      _push(ssrRenderComponent(unref(BackgroundDesktop), { class: "hidden absolute -left-42 md:block -top-60 -z-1" }, null, _parent));
      _push(`<div class="mt-3.5rem md:mt-40 md:text-center"><h1 class="hero-title md:text-[2.5rem] md:leading-[120%] md:mt-6"> Designing for SaaS is in our DNA_ </h1><p class="mt-6 text-blue-200"> Our main focus from the beginning was to bring world-class design to emerging superstars in the SaaS space. <br> From workflow builders to CRM systems, we\u2019ve done it before. </p><div class="mt-2.5rem">`);
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
      _push(`</div></div><div><div class="grid mt-14 md:mt-40 z-10 relative"><div class="text-center p-6 w-full transition-all max-w-[21.687rem] mx-auto duration-300 hover:bg-white rounded-4 border border-[#BCDCDC] bg-white shadow-primary">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(AllProjectsIcon)), { class: "mx-auto mb-4" }, null), _parent);
      _push(`<p class="font-semibold leading-[150%] cursor-pointer">All projects</p></div></div></div></div>`);
    };
  }
});
const TheWorkHeroSection_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/work/TheWorkHeroSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheWorkHeroSection = _sfc_main$1;
  const _component_TheWorkCaseStudySection = _sfc_main$2;
  const _component_TheWorkExploreServicesSection = __unplugin_components_2;
  const _component_TheWorkClientsSection = _sfc_main$4;
  const _component_TheWorkFaqSection = _sfc_main$5;
  const _component_TheCTABottomSection = __unplugin_components_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheWorkHeroSection, { class: "section" }, null, _parent));
  _push(ssrRenderComponent(_component_TheWorkCaseStudySection, { class: "section" }, null, _parent));
  _push(ssrRenderComponent(_component_TheWorkExploreServicesSection, { class: "section" }, null, _parent));
  _push(ssrRenderComponent(_component_TheWorkClientsSection, { class: "section" }, null, _parent));
  _push(ssrRenderComponent(_component_TheWorkFaqSection, { class: "section" }, null, _parent));
  _push(ssrRenderComponent(_component_TheCTABottomSection, { class: "section" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/work.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const work_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  work_page as default
};
