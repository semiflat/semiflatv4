import { _ as __unplugin_components_5 } from "./chunk-c5742e63.js";
import { _ as _sfc_main$8 } from "./chunk-4e701397.js";
import { defineComponent, reactive, mergeProps, unref, useSSRContext, computed, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createElementBlock, createStaticVNode, ref, onMounted, createTextVNode, createElementVNode, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderVNode, ssrInterpolate } from "vue/server-renderer";
import { _ as __unplugin_components_0, b as breakpointsConst } from "./chunk-91954a89.js";
import { u as useBreakpoints } from "./chunk-37b144d7.js";
import { SwiperSlide } from "swiper/vue";
import { _ as __unplugin_components_0$1, a as _export_sfc } from "./chunk-5a6b5315.js";
import { g as gsapWithCSS } from "./chunk-ea976db9.js";
import { T as TheAboutComponent, S as StrokeTop, a as StrokeLeft, _ as _sfc_main$a } from "./chunk-1cc8abe4.js";
import { _ as _sfc_main$9, N as NicImage, E as EwaImage, A as ApoloniaImage, C as ChrystianImage, P as PaulinaImage, a as NataliaImage, M as MagdaImage, B as BarryImage, b as MaciejImage, S as SarahImage, c as ArekImage, d as MartynaImage, K as KubaImage, e as MarcinImage, f as PatrycjaImage } from "./chunk-1c5e7c36.js";
import { useBreakpoints as useBreakpoints$1 } from "@vueuse/core";
import { B as BackgroundMobileLeft, a as BackgroundDesktop } from "./chunk-58947999.js";
import "swiper";
import "vanilla-tilt";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "TheCultureFaqSections",
  __ssrInlineRender: true,
  setup(__props) {
    const faqs = reactive([
      {
        header: "Can I work remotely?",
        text: "Yes, absolutely. All of our team members are currently remote.",
        isOpen: false
      },
      {
        header: "Will I get a Mac?",
        text: "If you need hardware, let us know, and we\u2019ll send you one of our MacBooks. Let us know if you have any special requests, and we\u2019ll figure it out!",
        isOpen: false
      },
      {
        header: "When will I meet everybody?",
        text: "At the nearest team retreat. We\u2019re likely already planning it, but if you have any suggestions regarding the destination, drop them on Slack in #team-retreats. We typically plan 3 to 4 retreats every year, so no matter when you join, an unforgettable get-together is only a few short months away.",
        isOpen: false
      },
      {
        header: "How fast can I get a raise?",
        text: "Salary ranges at Semiflat are fully transparent and correlate directly with our internal skill matrix. There are currently six competency levels, each with its requirements. You can get a raise when your evaluation score puts you at a higher level. Don\u2019t worry if it sounds complicated! We will always tell you what to work on to get to the next level and guide you as you move up the competence ladder. The evaluation process is simple - every teammate you\u2019ve worked with will give you ratings across multiple categories every three months.",
        isOpen: false
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheFaqComponent = _sfc_main$8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40" }, _attrs))}><h2 class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]"> But wait, what if I still have questions?_</h2>`);
      _push(ssrRenderComponent(_component_TheFaqComponent, { faqs: unref(faqs) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/culture/TheCultureFaqSections.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const img1 = "/semiflatv4/assets/1.4c67e9ba.png";
const img2 = "/semiflatv4/assets/2.777acc6a.png";
const img3 = "/semiflatv4/assets/3.bc49f160.png";
const img4 = "/semiflatv4/assets/4.a56e405c.png";
const img5 = "/semiflatv4/assets/5.41465091.png";
const img6 = "/semiflatv4/assets/6.2611ed03.png";
const img7 = "/semiflatv4/assets/7.5881c700.png";
const img8 = "/semiflatv4/assets/8.0829c8bf.png";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TheCultureImagesSlider",
  __ssrInlineRender: true,
  setup(__props) {
    const aboutImgs = [
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8
    ];
    const breakpoints = useBreakpoints();
    const swiperBreakpoints = {
      [breakpoints.lg]: {
        spaceBetween: 32
      }
    };
    const swiperOptions = computed(() => ({
      slidesPerView: "auto",
      spaceBetween: 24,
      navigation: false,
      loop: true,
      speed: 5e3,
      updateOnWindowResize: true,
      watchSlidesVisibility: true,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      breakpoints: swiperBreakpoints
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSlider = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div class="">`);
      _push(ssrRenderComponent(_component_AppSlider, {
        class: "mt-16 md:mt-40",
        style: {},
        "swiper-options": unref(swiperOptions)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(aboutImgs, (img, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: i,
                class: ["shrink-0 flex items-center justify-center", { "w-[144px] md:w-[240px]": i % 2 !== 0, "w-[240px] md:w-[400px]": i % 2 === 0 }]
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", img)} class="h-[180px] md:h-[300px] w-[240px] md:w-[400px] object-cover object-center rounded-4"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: img,
                        class: "h-[180px] md:h-[300px] w-[240px] md:w-[400px] object-cover object-center rounded-4"
                      }, null, 8, ["src"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(aboutImgs, (img, i) => {
                return createVNode(unref(SwiperSlide), {
                  key: i,
                  class: ["shrink-0 flex items-center justify-center", { "w-[144px] md:w-[240px]": i % 2 !== 0, "w-[240px] md:w-[400px]": i % 2 === 0 }]
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: img,
                      class: "h-[180px] md:h-[300px] w-[240px] md:w-[400px] object-cover object-center rounded-4"
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1032, ["class"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const TheCultureImagesSlider_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/culture/TheCultureImagesSlider.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _hoisted_1$f = {
  width: "346",
  height: "380",
  viewBox: "0 0 346 380",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$f = /* @__PURE__ */ createStaticVNode('<defs><filter id="glow"><feGaussianBlur in="SourceGraphic" stdDeviation="1"></feGaussianBlur></filter></defs><mask id="mask0_723_46359" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="346" height="380"><rect width="346" height="380" fill="url(#paint0_radial_723_46359)"></rect></mask><g mask="url(#mask0_723_46359)"><path d="M108 -41L0 30.4286V137.571L108 209L216 137.571V30.4286L108 -41Z" stroke="#0A5F81"></path><path d="M238 171L130 242.429V349.571L238 421L346 349.571V242.429L238 171Z" stroke="#0A5F81"></path><path d="M108 171L0 242.429V349.571L108 421L216 349.571V242.429L108 171Z" stroke="#0A5F81"></path><path d="M238 -41L130 30.4286V137.571L238 209L346 137.571V30.4286L238 -41Z" stroke="#0A5F81"></path><path d="M238 201L156 255.286V336.714L238 391L320 336.714V255.286L238 201Z" stroke="#1FDFFF"></path><path class="glow-line glow-line-4" d="M238 201L156 255.286V336.714L238 391L320 336.714V255.286L238 201Z" stroke="#78FDFC" stroke-width="2" filter="url(#glow)"></path><path d="M108 201L26 255.286V336.714L108 391L190 336.714V255.286L108 201Z" stroke="#1FDFFF"></path><path class="glow-line glow-line-1" d="M108 201L26 255.286L108 391L190 336.714V255.286L108 201Z" stroke="#78FDFC" stroke-width="2" filter="url(#glow)"></path><path d="M108 -11L26 43.2857V124.714L108 179L190 124.714V43.2857L108 -11Z" stroke="#1FDFFF"></path><path class="glow-line glow-line-3" d="M108 -11L26 43.2857V124.714L108 179L190 124.714V43.2857L108 -11Z" stroke="#78FDFC" stroke-width="2" filter="url(#glow)"></path><path d="M238 -11L156 43.2857V124.714L238 179L320 124.714V43.2857L238 -11Z" stroke="#1FDFFF"></path><path class="glow-line glow-line-2" d="M238 -11L156 43.2857V124.714L238 179L320 124.714V43.2857L238 -11Z" stroke="#78FDFC" stroke-width="2" filter="url(#glow)"></path></g><path d="M77 242L174 298L269 242V137L174 82L77 137V242Z" stroke="#0F8BBD"></path><rect x="53" y="114" width="48" height="48" rx="24" fill="white"></rect><path d="M78.0932 146.384C75.4398 147.9 72.1496 147.9 69.5113 146.384C68.7683 145.96 67.8283 146.217 67.4037 146.96C66.9792 147.703 67.2369 148.643 67.9799 149.068C69.7691 150.099 71.7857 150.599 73.8022 150.599C75.8189 150.599 77.8355 150.084 79.6247 149.068C80.3676 148.643 80.6254 147.703 80.2008 146.96C79.7763 146.217 78.8362 145.96 78.0932 146.384Z" fill="#18ACB4"></path><path d="M79.2149 125.398C75.4091 125.398 72.3008 128.507 72.3008 132.313C72.3008 132.388 72.3008 132.464 72.3008 132.54C72.3008 132.585 72.3008 132.616 72.3008 132.661V142.881C72.3008 143.73 72.9983 144.427 73.8474 144.427C74.6964 144.427 75.3939 143.73 75.3939 142.881V138.074C76.4856 138.802 77.8048 139.227 79.2149 139.227C83.0358 139.227 86.1289 136.118 86.1289 132.313C86.1289 128.507 83.0358 125.398 79.2149 125.398ZM79.2149 136.149C77.1073 136.149 75.3939 134.435 75.3939 132.328C75.3939 130.22 77.1073 128.507 79.2149 128.507C81.3224 128.507 83.0358 130.22 83.0358 132.328C83.051 134.42 81.3224 136.149 79.2149 136.149Z" fill="#18ACB4"></path><rect x="149" y="58" width="48" height="48" rx="24" fill="white"></rect><g clip-path="url(#clip0_723_46359)"><path d="M173 82H161.625V93.375H173V82Z" fill="#131313"></path></g><rect x="178.688" y="70.625" width="5.6875" height="22.75" fill="#131313"></rect><rect x="161.625" y="76.3125" width="5.6875" height="22.75" transform="rotate(-90 161.625 76.3125)" fill="#131313"></rect><rect x="245" y="114" width="48" height="48" rx="24" fill="white"></rect><path d="M257.375 130.86V140.63C257.375 145.566 260.687 149.746 265.205 151.066V148.738C261.923 147.507 259.585 144.336 259.585 140.631V130.861C259.585 129.676 260.551 128.71 261.736 128.71V126.5C259.33 126.499 257.375 128.455 257.375 130.86Z" fill="url(#paint1_linear_723_46359)"></path><path d="M261.736 126.5V128.71C262.922 128.71 263.888 129.676 263.888 130.861V140.631C263.888 143.035 265.843 144.99 268.246 144.99H269.293V142.78H268.246C267.061 142.78 266.098 141.814 266.098 140.631V130.861C266.098 128.457 264.14 126.5 261.736 126.5Z" fill="url(#paint2_linear_723_46359)"></path><path d="M265.205 148.738V151.066C266.171 151.348 267.19 151.5 268.248 151.5C270.654 151.5 272.609 149.545 272.609 147.141V130.861C272.609 129.676 273.575 128.71 274.758 128.71V126.5C272.354 126.5 270.399 128.458 270.399 130.861V147.142C270.399 148.328 269.433 149.291 268.248 149.291C267.177 149.291 266.154 149.096 265.205 148.738Z" fill="url(#paint3_linear_723_46359)"></path><path d="M273.713 142.78V144.99H274.757C277.161 144.99 279.121 143.035 279.121 140.631V130.861C279.121 128.458 277.161 126.5 274.757 126.5V128.71C275.945 128.71 276.911 129.676 276.911 130.861V140.631C276.911 141.814 275.945 142.78 274.757 142.78H273.713Z" fill="url(#paint4_linear_723_46359)"></path><rect x="53" y="218" width="48" height="48" rx="24" fill="white"></rect><path d="M74.2896 241.461V253.092L70.0836 249.566C70.074 249.557 70.0549 249.547 70.0453 249.557C68.7806 249.7 67.5159 249.892 66.2608 250.122C66.0213 250.16 65.8105 249.988 65.8105 249.748V242.86C65.8105 242.63 65.9734 242.429 66.2034 242.39C68.8764 241.892 71.5782 241.585 74.2896 241.461Z" fill="#3B53F1"></path><path d="M88.1999 242.86V249.748C88.1999 249.988 87.9796 250.17 87.7496 250.122C86.485 249.892 85.2203 249.7 83.9556 249.557L79.7305 253.102V241.461C82.4323 241.585 85.1341 241.892 87.8167 242.381C88.0275 242.429 88.1999 242.63 88.1999 242.86Z" fill="#8753F1"></path><path d="M88.2008 232.176V236.803C88.2008 236.928 88.1433 237.052 88.0475 237.129L83.7744 240.712V236.324C82.4235 236.171 81.0726 236.065 79.7217 235.998C77.911 235.912 76.1002 235.912 74.2894 235.998C72.9289 236.056 71.578 236.171 70.2271 236.324V240.712L65.9541 237.129C65.8583 237.043 65.8008 236.928 65.8008 236.803V232.176C65.8008 231.994 65.9349 231.831 66.1169 231.802C67.4774 231.553 68.8475 231.342 70.2271 231.189C74.7301 230.671 79.2714 230.671 83.7744 231.189C85.1541 231.342 86.5241 231.553 87.8846 231.802C88.0667 231.831 88.2008 231.994 88.2008 232.176Z" fill="url(#paint5_linear_723_46359)"></path><rect x="149" y="274" width="48" height="48" rx="24" fill="white"></rect><g clip-path="url(#clip1_723_46359)"><path d="M175.845 294.31L176.491 291.19C176.604 290.65 177.136 290.303 177.67 290.415C178.21 290.526 178.556 291.055 178.445 291.594L177.882 294.309H184.906L184.92 294.24C185.458 291.624 183.773 289.067 181.158 288.528L173.48 286.949L171.957 294.308H175.845V294.31Z" fill="#00A287"></path><path d="M170.428 301.699L169.798 304.742C169.7 305.213 169.285 305.538 168.822 305.538C168.755 305.538 168.687 305.531 168.619 305.517C168.079 305.406 167.733 304.877 167.844 304.338L168.39 301.7H161.091L161.079 301.763C160.541 304.378 162.226 306.935 164.841 307.474L172.783 309.107L174.317 301.7H170.428V301.699Z" fill="#00A287"></path><path d="M170.842 299.703H174.73L175.433 296.305H171.545L170.842 299.703Z" fill="#00A287"></path><path d="M169.506 296.302H166.447C165.897 296.302 165.449 295.856 165.449 295.304C165.449 294.752 165.897 294.306 166.447 294.306H169.919L171.525 286.546L169.239 286.077C166.623 285.539 164.066 287.224 163.528 289.839L161.5 299.701H168.801L169.504 296.302H169.506Z" fill="#00A287"></path><path d="M176.768 299.702H179.624C180.175 299.702 180.622 300.148 180.622 300.7C180.622 301.252 180.175 301.698 179.624 301.698H176.355L174.738 309.506L176.761 309.922C179.377 310.46 181.934 308.775 182.473 306.159L184.499 296.305H177.471L176.768 299.703V299.702Z" fill="#00A287"></path></g><rect x="245" y="218" width="48" height="48" rx="24" fill="white"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M281.321 242.14C281.321 249.949 274.973 256.28 267.142 256.28C263.979 256.28 261.058 255.247 258.7 253.501C259.104 253.727 259.52 253.932 259.948 254.115C261.57 254.812 263.318 255.172 265.085 255.173C268.375 255.172 271.543 253.932 273.956 251.702C276.37 249.472 277.85 246.416 278.102 243.145C278.137 242.837 278.157 242.527 278.16 242.217C278.16 241.822 278.127 241.364 278.087 240.948C278.084 240.909 278.082 240.868 278.081 240.828C278.08 240.782 278.078 240.735 278.073 240.69L278.062 240.701C278.004 240.159 277.941 239.74 277.941 239.74H267.652L266.852 241.232L265.015 244.693H272.79C272.502 245.551 272.072 246.354 271.518 247.07C270.762 248.057 269.789 248.856 268.673 249.406C267.557 249.956 266.329 250.242 265.085 250.242C264.132 250.24 263.186 250.07 262.293 249.74C260.73 249.171 259.381 248.136 258.427 246.777C257.474 245.418 256.962 243.799 256.961 242.14C256.961 241.076 257.171 240.022 257.579 239.04C257.988 238.057 258.586 237.164 259.34 236.411C260.095 235.659 260.99 235.062 261.976 234.655C262.961 234.248 264.018 234.038 265.085 234.038C266.806 234.036 268.484 234.581 269.873 235.595L270.94 233.605L272.21 231.212C270.091 229.834 267.614 229.103 265.085 229.107C262.848 229.107 260.668 229.68 258.742 230.747C261.093 229.02 263.998 228 267.142 228C274.973 228 281.321 234.331 281.321 242.14Z" fill="#FF5700"></path><defs><radialGradient id="paint0_radial_723_46359" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(173 190) rotate(90) scale(190 137.689)"><stop stop-color="#D9D9D9"></stop><stop offset="1" stop-color="#D9D9D9" stop-opacity="0"></stop></radialGradient><linearGradient id="paint1_linear_723_46359" x1="262.654" y1="148.045" x2="258.158" y2="127.904" gradientUnits="userSpaceOnUse"><stop stop-color="#9B6DEE"></stop><stop offset="1" stop-color="#6F2DE7"></stop></linearGradient><linearGradient id="paint2_linear_723_46359" x1="274.004" y1="148.554" x2="266.002" y2="137.18" gradientUnits="userSpaceOnUse"><stop stop-color="#43129C"></stop><stop offset="1" stop-color="#6F2DE7"></stop></linearGradient><linearGradient id="paint3_linear_723_46359" x1="267.753" y1="149.347" x2="273.148" y2="134.466" gradientUnits="userSpaceOnUse"><stop stop-color="#9B6DEE"></stop><stop offset="1" stop-color="#6F2DE7"></stop></linearGradient><linearGradient id="paint4_linear_723_46359" x1="267.748" y1="149.188" x2="276.695" y2="134.577" gradientUnits="userSpaceOnUse"><stop stop-color="#43129C"></stop><stop offset="1" stop-color="#6F2DE7"></stop></linearGradient><linearGradient id="paint5_linear_723_46359" x1="65.8056" y1="235.762" x2="88.1961" y2="235.762" gradientUnits="userSpaceOnUse"><stop stop-color="#3B53F1"></stop><stop offset="0.5" stop-color="#6542ED"></stop><stop offset="1" stop-color="#8753F1"></stop></linearGradient><clipPath id="clip0_723_46359"><path d="M161.625 87.6875C161.625 84.5464 164.171 82 167.312 82C170.454 82 173 84.5464 173 87.6875C173 90.8286 170.454 93.375 167.312 93.375H161.625V87.6875Z" fill="white"></path></clipPath><clipPath id="clip1_723_46359"><rect width="24.5" height="24.5" fill="white" transform="translate(160.75 285.75)"></rect></clipPath></defs>', 25);
const _hoisted_27 = [
  _hoisted_2$f
];
function render$f(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$f, _hoisted_27);
}
const WorkHexagon = { render: render$f };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TheCultureSeeOurWork",
  __ssrInlineRender: true,
  setup(__props) {
    const hexagonRef = ref();
    const getLine = (id) => hexagonRef.value.$el.querySelector(`.glow-line-${id}`);
    const getLines = () => hexagonRef.value.$el.querySelector(`.glow-line`);
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
      const duration = 1;
      const delay = "<1.5";
      tl.fromTo(getLine(1), { drawSVG: "8% 5%" }, { drawSVG: "-24% -25%", duration }).fromTo(getLine(2), { drawSVG: "56% 59%" }, { drawSVG: "27% 26%", duration }, delay).fromTo(getLine(3), { drawSVG: "41% 44%" }, { drawSVG: "75% 76%", duration }, delay).fromTo(getLine(4), { drawSVG: "-7% -6%" }, { drawSVG: "24% 23%", duration }, delay);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppButton = __unplugin_components_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40 relative" }, _attrs))}><div class="expertise text-white rounded-4 md:flex md:items-center max-w-[914px] mx-auto relative">`);
      _push(ssrRenderComponent(unref(WorkHexagon), {
        ref_key: "hexagonRef",
        ref: hexagonRef,
        class: "max-w-[19.5rem] mx-auto w-full"
      }, null, _parent));
      _push(`<div class="p-8 md:py-20 md:px-14"><h2 class="font-semibold text-xl mb-4 md:text-[1.75rem] leading-[120%]"> Get a feel for what you can be working on </h2><p class="text-blue-100 mb-8 text-sm md:text-base md:mb-8"> Problem solving is our strong suit. We live and breathe design and have helped dozens of startups solve complex problems in their respective niches. </p><div class="md:flex">`);
      _push(ssrRenderComponent(_component_AppButton, {
        secondary: "",
        href: "/work"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`See our work`);
          } else {
            return [
              createTextVNode("See our work")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const TheCultureSeeOurWork_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/culture/TheCultureSeeOurWork.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _hoisted_1$e = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$e = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_1423_16059)"><path d="M15.0004 28.75H12.4976C11.8071 28.75 11.2474 28.1902 11.2476 27.4997L11.2497 19.9006C11.2497 15.8002 15.6847 13.75 20.0011 13.75C24.3176 13.75 28.751 15.8001 28.751 19.9006L28.7489 27.5004C28.7487 28.1906 28.1891 28.75 27.4989 28.75H25.0004" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M15 21.25V37.5C15 38.1904 15.5596 38.75 16.25 38.75H23.75C24.4404 38.75 25 38.1904 25 37.5V21.25" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M20 38.7506V28.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M4.99915 30H2.49634C1.80584 30 1.24615 29.4402 1.24634 28.7497L1.24846 21.1506C1.24846 17.0502 5.68353 15 9.99996 15" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M4.99878 22.5V37.5C4.99878 38.1904 5.5584 38.75 6.24878 38.75H8.74947V31.25" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M23.75 5C23.75 2.92894 22.071 1.25 20 1.25C17.929 1.25 16.25 2.92894 16.25 5V6.25687C16.25 8.32794 17.929 10.0069 20 10.0069C22.071 10.0069 23.75 8.32794 23.75 6.25687V5Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M12.5 3.75H6.25V10H12.5V3.75Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M33.75 8.93094V4.58544L30.625 2.78125L27.5 4.58544V8.93094L30.625 10.7351L33.75 8.93094Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M8.75 38.75H12.5" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M35.0008 30H37.5036C38.1941 30 38.7537 29.4402 38.7536 28.7497L38.7515 21.1506C38.7515 17.0502 34.3165 15 30 15" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M35.0006 22.5V37.5C35.0006 38.1904 34.441 38.75 33.7506 38.75H31.25V31.25" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M31.25 38.75H27.5" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g><defs><clipPath id="clip0_1423_16059"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$b = [
  _hoisted_2$e
];
function render$e(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$e, _hoisted_4$b);
}
const Individuality = { render: render$e };
const _hoisted_1$d = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$d = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_1423_16074)"><path d="M5.625 31.2514L11.3093 25.5671C12.0667 24.8096 13.1118 24.4124 14.1811 24.4752L18.7133 24.7419C21.0883 24.8815 22.8365 27.0212 22.5 29.3764" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M15 29.3747H25.625L31.4473 23.5526C33.0643 21.9356 35.6859 21.9356 37.3029 23.5526L37.5 23.7497L27.3484 33.9013C26.6451 34.6046 25.6914 34.9997 24.6969 34.9997H13.125L11.25 36.8747" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M13.125 38.75L3.75 29.375" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M27.2064 3.28034C27.6131 3.41203 27.8888 3.7909 27.8888 4.21846V12.3756C27.8888 17.3058 20.0003 21.25 20.0003 21.25C20.0003 21.25 12.1118 17.3058 12.1118 12.3756V4.21846C12.1118 3.7909 12.3874 3.41203 12.7943 3.28034L18.1784 1.53753C19.3629 1.15416 20.638 1.15416 21.8224 1.53753L27.2064 3.28034Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M15.625 10.625L18.75 13.75L25 7.5" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M33.75 10L40 10.0006" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M32.5 4.9995L37.913 1.875" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M32.5 15L37.913 18.1245" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M6.25006 10.0006L0 10" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M7.50034 15L2.0874 18.1245" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M7.50034 4.9995L2.0874 1.875" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g><defs><clipPath id="clip0_1423_16074"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$a = [
  _hoisted_2$d
];
function render$d(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$d, _hoisted_4$a);
}
const Trust = { render: render$d };
const _hoisted_1$c = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$c = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_1423_16106)"><path d="M0 1.25H12.5" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M5.625 31.2514L11.3093 25.5671C12.0667 24.8096 13.1119 24.4124 14.1811 24.4752L18.7133 24.7419C21.0883 24.8815 22.8365 27.0212 22.5 29.3764" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M15 29.3747H25.625L31.4471 23.5526C33.0641 21.9356 35.6859 21.9356 37.3029 23.5526L37.5 23.7497L27.3484 33.9013C26.6451 34.6046 25.6914 34.9997 24.6969 34.9997H13.125L11.25 36.8747" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M13.125 38.75L3.75 29.375" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M17.5 12.0676C17.5 13.3741 18.6193 14.4331 20 14.4331C21.3807 14.4331 22.5 13.3741 22.5 12.0676V10.4906C22.5 9.18406 21.3807 8.125 20 8.125C18.6193 8.125 17.5 9.18413 17.5 10.4906V12.0676Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M16.25 21.2503H23.75C24.4404 21.2503 25 20.6907 25 20.0003V17.982C25 15.6163 22.4669 14.4336 20.0005 14.4336C17.5341 14.4336 15 15.6163 15 17.982V20.0003C15 20.6907 15.5596 21.2503 16.25 21.2503Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M2.5 1.25V4.0625C2.5 6.40625 10 7.34375 10 9.6875V12.5" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M10 1.25V4.0625C10 6.40625 2.5 7.34375 2.5 9.6875V12.5" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M0 12.5H12.5" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M30.3125 5.46875L33.125 8.28125L38.75 2.65625" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M35.5358 1.25H28.625C28.0036 1.25 27.5 1.75369 27.5 2.375V11.375C27.5 11.9963 28.0036 12.5 28.625 12.5H37.625C38.2464 12.5 38.75 11.9963 38.75 11.375V6.875" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g><defs><clipPath id="clip0_1423_16106"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$9 = [
  _hoisted_2$c
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_4$9);
}
const Responsibility = { render: render$c };
const _hoisted_1$b = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$b = /* @__PURE__ */ createStaticVNode('<path d="M16.25 6.25L20 2.5L23.75 6.25" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M7.49994 11.2499L3.75 7.49994L7.49994 3.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M32.5 3.75L36.25 7.50006L32.5 11.25" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M20 2.5V23.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M3.75 7.5H7.5C11.6421 7.5 15 10.8579 15 15V20" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M36.25 7.5H32.5C28.3579 7.5 25 10.8579 25 15V20" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M14.1576 11.552C11.0405 12.4619 8.76099 15.3402 8.76343 18.7502C8.7688 26.2982 8.76343 30.3298 11.8976 33.5413C13.5523 35.2367 13.7503 37.4224 13.7503 38.7523H26.2503V36.2523C26.2503 35.5619 26.8099 35.0023 27.5003 35.0023H28.8486C30.2294 35.0023 31.3486 33.8831 31.3486 32.5023V28.7523C31.3486 28.0619 31.9083 27.5023 32.5986 27.5023H33.7479C34.796 27.5023 35.3788 26.2899 34.724 25.4714L31.3486 21.2523C31.3733 20.4679 31.3824 20.3134 31.3833 18.7567C31.3854 15.2977 29.0438 12.3835 25.8594 11.5156" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path>', 7);
const _hoisted_9$1 = [
  _hoisted_2$b
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_9$1);
}
const Proactivity = { render: render$b };
const _hoisted_1$a = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$a = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_1423_16130)"><path d="M5.625 31.2514L11.3093 25.5671C12.0667 24.8096 13.1119 24.4124 14.1811 24.4752L18.7133 24.7419C21.0883 24.8815 22.8365 27.0212 22.5 29.3764" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M15 29.3747H25.625L31.4471 23.5526C33.0641 21.9356 35.6859 21.9356 37.3029 23.5526L37.5 23.7497L27.3484 33.9013C26.6451 34.6046 25.6914 34.9997 24.6969 34.9997H13.125L11.25 36.8747" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M13.125 38.75L3.75 29.375" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M17.3205 12.9745C17.3205 14.3744 18.5199 15.5093 19.9992 15.5093C21.4786 15.5093 22.6779 14.3744 22.6779 12.9745V11.2847C22.6779 9.88481 21.4786 8.75 19.9992 8.75C18.5199 8.75 17.3205 9.88481 17.3205 11.2847V12.9745Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M22.6784 21.2492H24.4643C24.9574 21.2492 25.3571 20.8494 25.3571 20.3563V19.3098C25.3571 16.7752 22.6429 15.5078 20.0003 15.5078C17.3576 15.5078 14.6424 16.7752 14.6424 19.3098V20.3563C14.6424 20.8494 15.0421 21.2492 15.5353 21.2492H22.6784Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M27.1424 12.9061C27.1424 13.8394 27.9419 14.596 28.9281 14.596C29.9144 14.596 30.714 13.8394 30.714 12.9061V11.7797C30.714 10.8464 29.9145 10.0898 28.9281 10.0898C27.9419 10.0898 27.1424 10.8464 27.1424 11.7797V12.9061Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M28.0351 19.4669H31.6068C32.0999 19.4669 32.4996 19.0672 32.4996 18.574V17.1323C32.4996 15.4425 30.6901 14.5977 28.9284 14.5977C27.1666 14.5977 25.3565 15.4425 25.3565 17.1323V19.0205" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M12.8563 12.9061C12.8563 13.8394 12.0568 14.596 11.0705 14.596C10.0842 14.596 9.28467 13.8394 9.28467 12.9061V11.7797C9.28467 10.8464 10.0842 10.0898 11.0705 10.0898C12.0567 10.0898 12.8563 10.8464 12.8563 11.7797V12.9061Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M11.9633 19.4669H8.39165C7.89853 19.4669 7.49878 19.0672 7.49878 18.574V17.1323C7.49878 15.4425 9.30828 14.5977 11.07 14.5977C12.8318 14.5977 14.642 15.4425 14.642 17.1323V19.0205" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M2.21925 25.9674C1.57606 24.0496 1.25 22.0422 1.25 20.0006C1.25 19.5209 1.268 19.0455 1.30338 18.5749M37.2759 12.7009C38.2541 15.0122 38.75 17.4684 38.75 20.0008M2.02481 14.6491C2.7415 12.2382 3.92069 10.0269 5.52944 8.07681M29.9269 4.09125C32.0642 5.4285 33.8845 7.15094 35.3366 9.2115M8.38119 5.28325C10.3636 3.7165 12.5993 2.58369 15.0256 1.91775M18.9644 1.27869C19.3093 1.25975 19.6544 1.25 20.0003 1.25C22.1745 1.25 24.3061 1.61925 26.3357 2.348" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g><defs><clipPath id="clip0_1423_16130"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$8 = [
  _hoisted_2$a
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_4$8);
}
const Care = { render: render$a };
const _hoisted_1$9 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", {
  d: "M1.25 29.5467L5.66944 25.1273L8.01962 13.3763C8.19494 12.4999 8.96444 11.8691 9.85819 11.8691H9.98156C11.0171 11.8691 11.8566 12.7085 11.8566 13.7441V17.1723L19.2922 9.73669C20.0245 9.00444 21.2116 9.00444 21.9439 9.73669C22.6761 10.4689 22.6761 11.6561 21.9439 12.3883L16.6406 17.6916L22.6067 11.7254C23.339 10.9932 24.5261 10.9932 25.2584 11.7254C25.9906 12.4577 25.9906 13.6448 25.2584 14.3771L19.2922 20.3432L23.9325 15.7028C24.6647 14.9706 25.852 14.9706 26.5841 15.7028C27.3164 16.4351 27.3164 17.6223 26.5841 18.3545L21.9438 22.9948L24.5954 20.3432C25.3276 19.611 26.5149 19.611 27.247 20.3432C27.9792 21.0755 27.9792 22.2627 27.247 22.9948L19.637 30.605C18.598 31.644 17.2746 32.3521 15.8339 32.6403C14.393 32.9285 13.0698 33.6367 12.0308 34.6757L9.20475 37.5017",
  stroke: "#54ABA3",
  "stroke-width": "2",
  "stroke-miterlimit": "10"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M20 36.25L35 21.25L35.646 20.5913C39.7848 16.4523 39.7848 9.74264 35.646 5.60364C31.5074 1.46545 24.7969 1.46545 20.6584 5.60364L20 6.26202L19.3416 5.60364C15.2031 1.46545 8.49263 1.46545 4.35406 5.60364C0.215313 9.74264 0.215313 16.4523 4.35406 20.5913L6.20375 22.4539",
  stroke: "#54ABA3",
  "stroke-width": "2",
  "stroke-miterlimit": "10"
}, null, -1);
const _hoisted_4$7 = [
  _hoisted_2$9,
  _hoisted_3
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_4$7);
}
const Honesty = { render: render$9 };
const _hoisted_1$8 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$8 = /* @__PURE__ */ createStaticVNode('<path d="M5.00281 21.25V37.5C5.00281 38.1904 5.56244 38.75 6.25281 38.75H11.25C11.9404 38.75 12.5 38.1904 12.5 37.5V20H15C17.7615 20 20 17.7615 20 15V10.6256C20 9.58975 19.1603 8.75 18.1244 8.75C17.0884 8.75 16.2484 9.59006 16.2487 10.6262L16.2496 13.5927C16.2497 14.3477 15.4879 14.8614 14.7895 14.5744C13.9083 14.2121 12.628 13.75 10.0036 13.75C5.68719 13.75 1.25213 15.8002 1.25213 19.9007L1.25 27.4997C1.24981 28.1902 1.8095 28.7501 2.5 28.7501H5.00281" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M8.75 38.7467V28.7461" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M5 7.04159C5 8.67472 6.39913 9.99859 8.125 9.99859C9.85087 9.99859 11.25 8.67472 11.25 7.04159V5.07028C11.25 3.43716 9.85087 2.11328 8.125 2.11328C6.39913 2.11328 5 3.43716 5 5.07028V7.04159Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M34.9971 21.25V37.5C34.9971 38.1904 34.4375 38.75 33.7471 38.75H28.75C28.0596 38.75 27.5 38.1904 27.5 37.5V20H25C22.2385 20 20 17.7615 20 15V10.6256C20 9.58975 20.8397 8.75 21.8756 8.75C22.9116 8.75 23.7515 9.59006 23.7512 10.6262L23.7505 13.5927C23.7503 14.3477 24.5121 14.8615 25.2105 14.5744C26.0917 14.2121 27.372 13.75 29.9965 13.75C34.3129 13.75 38.748 15.8002 38.748 19.9007L38.75 27.4997C38.7502 28.1902 38.1905 28.7501 37.5 28.7501H34.9973" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M31.25 38.7467V28.7461" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M35 7.04159C35 8.67472 33.6009 9.99859 31.875 9.99859C30.1491 9.99859 28.75 8.67472 28.75 7.04159V5.07028C28.75 3.43716 30.1491 2.11328 31.875 2.11328C33.6009 2.11328 35 3.43716 35 5.07028V7.04159Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M21.875 36.25V27.5H23.125L20 23.75L16.875 27.5H18.1253L18.125 36.25H21.875Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path>', 7);
const _hoisted_9 = [
  _hoisted_2$8
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_9);
}
const SelfDevelopment = { render: render$8 };
const _hoisted_1$7 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$7 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_1423_16158)"><path d="M20.0016 5.98869L18.1196 4.10681C14.31 0.297625 8.1339 0.29775 4.32453 4.10706L4.32328 4.10831C0.513775 7.91775 0.51365 14.0941 4.32296 17.9037" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M5.57739 20.4121L3.06897 22.9204C2.02999 23.9594 2.02999 25.6439 3.06897 26.6829H3.06902C4.10801 27.7219 5.79255 27.7219 6.83154 26.6829L9.33995 24.1746C10.3789 23.1356 10.3789 21.4511 9.33995 20.4121H9.33991C8.30092 19.3731 6.61639 19.3731 5.57739 20.4121Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M8.81175 24.705L6.67981 26.8369C5.64083 27.8759 5.64083 29.5604 6.67981 30.5994L6.67986 30.5995C7.71885 31.6385 9.40339 31.6385 10.4424 30.5995L12.5744 28.4675C13.6134 27.4285 13.6134 25.744 12.5744 24.705H12.5742C11.5353 23.666 9.85074 23.666 8.81175 24.705Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M11.8488 29.1894L10.5946 30.4437C9.55562 31.4827 9.55562 33.1672 10.5946 34.2062L10.5946 34.2063C11.6336 35.2453 13.3182 35.2453 14.3572 34.2063L15.6113 32.952C16.6503 31.913 16.6503 30.2285 15.6113 29.1895V29.1894C14.5723 28.1504 12.8878 28.1504 11.8488 29.1894Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M15.6111 32.955L14.3569 34.2093C13.3179 35.2483 13.3179 36.9328 14.3569 37.9718C15.3959 39.0108 17.0804 39.0108 18.1194 37.9718L19.3736 36.7175C20.4126 35.6785 20.4126 33.994 19.3736 32.955C18.3346 31.916 16.6501 31.916 15.6111 32.955Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M18.9661 27.5281L24.3908 32.9523C25.4298 33.9913 27.1142 33.9911 28.1531 32.9523L28.1533 32.9521C29.1923 31.9131 29.1923 30.2285 28.1533 29.1896L22.7292 23.7656" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M26.4908 20.0039L31.9148 25.4279C32.9538 26.4669 32.9538 28.1515 31.9148 29.1904C30.8758 30.2294 29.1913 30.2294 28.1523 29.1904L22.7283 23.7664" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M26.4914 20.0045L31.9154 25.4285C32.9544 26.4675 34.639 26.4675 35.6779 25.4285C36.7169 24.3895 36.7169 22.7049 35.6779 21.6659L23.7632 9.75114L20.0006 13.5138C17.9226 15.5918 14.5536 15.5918 12.4756 13.5138L20.0015 5.98814L21.8825 4.10714C25.692 0.297579 31.8685 0.297641 35.678 4.1072C39.4876 7.91689 39.4874 14.0935 35.6776 17.9029" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M20.0011 36.0907L20.6282 36.7179C21.6672 37.7569 23.3518 37.7569 24.3908 36.7179C25.4298 35.6787 25.4298 33.9942 24.3906 32.9552L18.9661 27.5312" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g><defs><clipPath id="clip0_1423_16158"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$6 = [
  _hoisted_2$7
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_4$6);
}
const Empathy = { render: render$7 };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TheCultureOurServices",
  __ssrInlineRender: true,
  setup(__props) {
    const experiences = [
      {
        icon: Individuality,
        header: "Individuality",
        text: "We have different opinions and points of view, but all of them can flourish at Semiflat."
      },
      {
        icon: Trust,
        header: "Trust",
        text: "We don\u2019t believe in control and micro-managing. Great things are made when everyone can freely decide about their surroundings."
      },
      {
        icon: Responsibility,
        header: "Responsibility",
        text: "We take responsibility for our actions. We\u2019re proud of our successes and fix our mistakes."
      },
      {
        icon: Proactivity,
        header: "Proactivity",
        text: "We take responsibility for our actions. We\u2019re proud of our successes and fix our mistakes."
      },
      {
        icon: Care,
        header: "Care",
        text: "Everyone at Semiflat plays in the same team. We support each other no matter the situation."
      },
      {
        icon: Honesty,
        header: "Honesty",
        text: "We value honesty above eveything else. Every problem can be solved when voices are heard."
      },
      {
        icon: SelfDevelopment,
        header: "Self-development",
        text: "We are constantly looking for ways to improve in all aspects - professional and private."
      },
      {
        icon: Empathy,
        header: "Empathy",
        text: "All initiatives within Semiflat are driven by empathy. We never allow for anyone to be left out."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content" }, _attrs))}><div class="mt-16 md:mt-40"><h2 class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem] md:hidden"> We help startups by creating delightful experiences for their users_ </h2><h2 class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem] hidden md:block"> In all internal and external interactions we always <br> rely on our value code_ </h2><div class="grid gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-16 mt-12 md:mt-20"><!--[-->`);
      ssrRenderList(experiences, (el, i) => {
        _push(`<div>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(el.icon), { class: "mb-8" }, null), _parent);
        _push(`<p class="text-blue-300 font-semibold mb-1">${ssrInterpolate(el.header)}</p><p class="text-blue-200">${ssrInterpolate(el.text)}</p></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/culture/TheCultureOurServices.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _hoisted_1$6 = {
  width: "100",
  height: "100",
  viewBox: "0 0 100 100",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$6 = /* @__PURE__ */ createStaticVNode('<g filter="url(#filter0_dd_794_47409)"><rect x="14" y="6" width="72" height="72" rx="36" fill="white" shape-rendering="crispEdges"></rect><g clip-path="url(#clip0_794_47409)"><path d="M31.25 58.25C31.25 59.5 32.2316 60.75 33.75 60.75H55C56.3807 60.75 57.5 59.6307 57.5 58.25M31.25 58.25V24.5C31.25 23.8096 31.8096 23.25 32.5 23.25H55C56.3807 23.25 57.5 24.3693 57.5 25.75V53.25C57.5 54.6307 56.3807 55.75 55 55.75H33.75C32.3663 55.75 31.25 57 31.25 58.25Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M37.5 39.5H48.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M37.5 34.5H51.25" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M66.1415 27.2155L63.75 31.9985V59.4984C63.75 60.1888 64.3096 60.7484 65 60.7484H67.5C68.1904 60.7484 68.75 60.1888 68.75 59.4984V31.9985L66.3585 27.2155C66.3137 27.1261 66.1863 27.1261 66.1415 27.2155Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M68.75 54.5H63.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g><rect x="14.5" y="6.5" width="71" height="71" rx="35.5" stroke="#D8DFE5" shape-rendering="crispEdges"></rect></g><defs><filter id="filter0_dd_794_47409" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="8"></feOffset><feGaussianBlur stdDeviation="7"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_794_47409"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_794_47409" result="effect2_dropShadow_794_47409"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_794_47409" result="shape"></feBlend></filter><clipPath id="clip0_794_47409"><rect width="40" height="40" fill="white" transform="translate(30 22)"></rect></clipPath></defs>', 2);
const _hoisted_4$5 = [
  _hoisted_2$6
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_4$5);
}
const NotesIcon = { render: render$6 };
const smiling = "/semiflatv4/assets/smiling-person.e5e6f2dd.jpeg";
const girls = "/semiflatv4/assets/girls.9e0d5c62.jpeg";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TheCultureAboutSection",
  __ssrInlineRender: true,
  setup(__props) {
    const content = [
      {
        title: "Team love at Semiflat knows no bounds",
        text: "We put our heart and soul into everything we do. From designing top-tier interfaces to planning retreats or creating custom gadgets. Everything and everyone at Semiflat is top-notch quality. ",
        bgImage: `url(${smiling})`
      },
      {
        title: "Semiflat was created with an ambitious vision in mind. Read the letter from our founder."
      },
      {
        title: "Good times ahead",
        text: "As a remote team we get together every couple of months to catch up, unwind and have a good time. We plan our retreats with similar passion to the app designs we do. We want every time we meet to feel special for everyone.",
        bgImage: `url(${girls})`
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(TheAboutComponent, mergeProps({
        content,
        icon: unref(NotesIcon)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/culture/TheCultureAboutSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _hoisted_1$5 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_734_45417)"><path d="M20 15C21.3807 15 22.5 13.8807 22.5 12.5C22.5 11.1193 21.3807 10 20 10C18.6193 10 17.5 11.1193 17.5 12.5C17.5 13.8807 18.6193 15 20 15Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M22.5 30C22.5 32.5 20 35 20 35C20 35 17.5 32.5 17.5 30C17.5 28.6193 18.6193 27.5 20 27.5C21.3807 27.5 22.5 28.6193 22.5 30Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M25 27.499C25 27.499 27.5 18.749 27.5 12.499C27.5 6.63799 20.9045 1.87617 20.0835 1.30617C20.0281 1.26773 19.9719 1.26773 19.9165 1.30617C19.0955 1.87617 12.5 6.63792 12.5 12.499C12.5 18.749 15 27.499 15 27.499" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M26.9196 18.75C26.9196 18.75 30 19.3738 30 22.5C30 23.75 30 27.5 30 27.5H20H10V22.5C10 19.3738 13.0803 18.75 13.0803 18.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M22.078 38.75H33.5025C35.8715 38.75 37.9949 36.9761 38.1188 34.6104C38.251 32.0872 36.2444 30 33.75 30C31.85 30 30.249 31.218 29.6448 32.9101C29.0236 32.5616 28.286 32.396 27.4843 32.5693C25.9974 32.8905 25 34.3069 25 35.828C25 37.4417 23.6918 38.75 22.078 38.75ZM22.078 38.75H20H17.9219C16.3081 38.75 15 37.4417 15 35.828C15 34.3069 14.0025 32.8905 12.5158 32.5693C11.7139 32.396 10.9763 32.5616 10.3552 32.9101C9.75099 31.218 8.15005 30 6.24999 30C3.75561 30 1.74899 32.0872 1.88118 34.6104C2.00511 36.9761 4.12849 38.75 6.49743 38.75H17.9219" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g><defs><clipPath id="clip0_734_45417"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$4 = [
  _hoisted_2$5
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_4$4);
}
const RocketIcon = { render: render$5 };
const _hoisted_1$4 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_734_45409)"><path d="M15.0009 28.75H12.498C11.8075 28.75 11.2479 28.1902 11.248 27.4997L11.2502 19.9006C11.2502 15.8002 15.6852 13.75 20.0016 13.75C24.3181 13.75 28.7515 15.8001 28.7515 19.9006L28.7494 27.5004C28.7492 28.1906 28.1896 28.75 27.4994 28.75H25.0009" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M15 21.25V37.5C15 38.1904 15.5596 38.75 16.25 38.75H23.75C24.4404 38.75 25 38.1904 25 37.5V21.25" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M20 38.7506V28.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M4.99891 30H2.49609C1.80559 30 1.24591 29.4402 1.24609 28.7497L1.24822 21.1506C1.24822 17.0502 5.68328 15 9.99972 15" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M4.99805 22.5V37.5C4.99805 38.1904 5.55767 38.75 6.24805 38.75H8.74873V31.25" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M23.75 5C23.75 2.92894 22.071 1.25 20 1.25C17.929 1.25 16.25 2.92894 16.25 5V6.25687C16.25 8.32794 17.929 10.0069 20 10.0069C22.071 10.0069 23.75 8.32794 23.75 6.25687V5Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M12.5 3.75H6.25V10H12.5V3.75Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M33.75 8.93094V4.58544L30.625 2.78125L27.5 4.58544V8.93094L30.625 10.7351L33.75 8.93094Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M8.75 38.75H12.5" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M35.0008 30H37.5036C38.1941 30 38.7537 29.4402 38.7536 28.7497L38.7515 21.1506C38.7515 17.0502 34.3165 15 30 15" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M35.0006 22.5V37.5C35.0006 38.1904 34.441 38.75 33.7506 38.75H31.25V31.25" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M31.25 38.75H27.5" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g><defs><clipPath id="clip0_734_45409"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$3 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_4$3);
}
const TeamsIcon = { render: render$4 };
const _hoisted_1$3 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_734_45314)"><path d="M20 25.0008H36.1639C36.8869 25.0008 37.4592 24.3891 37.4111 23.6676L36.497 9.95531C36.3504 7.75569 34.7804 5.91163 32.6324 5.41594L25.1424 3.6875" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M19.9999 24.9987H3.83601C3.11295 24.9987 2.5407 24.387 2.58876 23.6656L3.50288 9.95328C3.64951 7.75366 5.21945 5.90966 7.36751 5.41391L14.8995 3.67578" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M8.75 11.25L11.25 25L9.01794 37.2764C8.87844 38.0437 9.46788 38.75 10.2478 38.75H29.7522C30.5321 38.75 31.1216 38.0437 30.982 37.2764L28.7499 25L31.2499 11.25" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M17.5 32.5L25 25" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M20.1278 14.7165L25.4456 3.01725C25.8218 2.18962 25.2167 1.25 24.3077 1.25H15.7242C14.8066 1.25 14.2017 2.20581 14.5945 3.03513L24.9989 25V38.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g><defs><clipPath id="clip0_734_45314"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$2 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_4$2);
}
const RobeIcon = { render: render$3 };
const _hoisted_1$2 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_780_52848)"><path d="M16.25 8.75L23.75 8.75C24.4404 8.75 25 8.19036 25 7.5V2.5C25 1.80964 24.4404 1.25 23.75 1.25L16.25 1.25C15.5596 1.25 15 1.80964 15 2.5V7.5C15 8.19036 15.5596 8.75 16.25 8.75Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M16.25 38.75H23.75C24.4404 38.75 25 38.1904 25 37.5V32.5C25 31.8096 24.4404 31.25 23.75 31.25H16.25C15.5596 31.25 15 31.8096 15 32.5V37.5C15 38.1904 15.5596 38.75 16.25 38.75Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M20 8.75V13.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M20 26.25V31.25" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M20 16.25V23.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M23.75 20H16.25" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M6.25 16.25V7.5C6.25 6.80963 6.80963 6.25 7.5 6.25H11.25" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M33.75 16.25V7.5C33.75 6.80963 33.1904 6.25 32.5 6.25H28.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M2.5 23.75H10C10.6904 23.75 11.25 23.1904 11.25 22.5V17.5C11.25 16.8096 10.6904 16.25 10 16.25H2.5C1.80964 16.25 1.25 16.8096 1.25 17.5V22.5C1.25 23.1904 1.80964 23.75 2.5 23.75Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M30 23.75H37.5C38.1904 23.75 38.75 23.1904 38.75 22.5V17.5C38.75 16.8096 38.1904 16.25 37.5 16.25H30C29.3096 16.25 28.75 16.8096 28.75 17.5V22.5C28.75 23.1904 29.3096 23.75 30 23.75Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M33.75 27.5V37.5" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M37.5 33.75L33.75 37.5L30 33.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M6.25 27.5V33.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M6.25 38.75C7.63071 38.75 8.75 37.6307 8.75 36.25C8.75 34.8693 7.63071 33.75 6.25 33.75C4.86929 33.75 3.75 34.8693 3.75 36.25C3.75 37.6307 4.86929 38.75 6.25 38.75Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g><defs><clipPath id="clip0_780_52848"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$1 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4$1);
}
const WorkflowIcon = { render: render$2 };
const _hoisted_1$1 = {
  width: "347",
  height: "272",
  viewBox: "0 0 347 272",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_912_9806)"><mask id="mask0_912_9806" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="347" height="272"><rect width="347" height="272" fill="url(#paint0_radial_912_9806)"></rect></mask><g mask="url(#mask0_912_9806)"><circle cx="174" cy="136" r="108" stroke="#BCDCDC"></circle><g filter="url(#filter0_f_912_9806)"><path d="M73.6495 96C68.7141 108.371 66 121.868 66 136C66 195.647 114.353 244 174 244C220.461 244 260.071 214.662 275.312 173.5" stroke="url(#paint1_linear_912_9806)" stroke-width="2" stroke-linecap="round"></path></g><circle cx="174" cy="136" r="144" stroke="#BCDCDC"></circle><path d="M262.5 249.603C296.279 223.251 318 182.162 318 136C318 56.471 253.529 -8 174 -8C136.391 -8 102.149 6.41809 76.5 30.0284" stroke="url(#paint2_linear_912_9806)" stroke-width="2" stroke-linecap="round"></path></g><g filter="url(#filter1_dd_912_9806)"><rect x="234" y="196" width="32" height="32" rx="16" fill="white" shape-rendering="crispEdges"></rect><path d="M255.088 211.98C255.088 214.276 256.943 216.142 259.224 216.142C259.228 216.142 259.23 216.142 259.234 216.142V211.982H255.088V211.98Z" fill="#8140F1"></path><path d="M250.696 205.161C250.989 206.233 251.678 207.127 252.638 207.676C253.259 208.032 253.964 208.221 254.678 208.221C256.15 208.221 257.514 207.432 258.254 206.159L251.093 202C251.093 202 251.093 202 251.093 202.001C250.546 202.967 250.406 204.089 250.698 205.161H250.696Z" fill="#8140F1"></path><path d="M247.721 216.319C246.763 215.77 245.648 215.629 244.581 215.924C243.551 216.208 242.687 216.867 242.139 217.78L249.298 221.939C250.383 219.953 249.685 217.444 247.721 216.319Z" fill="#8140F1"></path><path d="M245.681 208.222C246.404 208.222 247.118 208.029 247.746 207.663C248.702 207.106 249.386 206.209 249.671 205.135C249.951 204.078 249.812 202.975 249.278 202.023L242.117 206.182C242.858 207.441 244.22 208.222 245.68 208.222H245.681Z" fill="#8140F1"></path><path d="M255.859 215.881C254.791 215.594 253.676 215.743 252.721 216.3C250.774 217.434 250.09 219.931 251.169 221.905L258.329 217.746C257.772 216.822 256.899 216.161 255.859 215.881Z" fill="#8140F1"></path><path d="M245.312 211.982C245.312 209.687 243.457 207.82 241.176 207.82V216.142C243.457 216.142 245.312 214.276 245.312 211.981V211.982Z" fill="#8140F1"></path><rect x="234.5" y="196.5" width="31" height="31" rx="15.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g><g filter="url(#filter2_dd_912_9806)"><rect x="82" y="196" width="32" height="32" rx="16" fill="white" shape-rendering="crispEdges"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M101.337 211.788C101.337 208.104 98.3457 205.125 94.6621 205.125V211.788H101.337Z" fill="#165EA0"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M108 211.789C108 215.473 105.021 218.452 101.338 218.452V211.789H108Z" fill="#104378"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M101.337 218.452C101.337 214.768 98.3457 211.789 94.6621 211.789V218.452H101.337Z" fill="#2491EB"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M88 211.789C88 215.473 90.979 218.452 94.6625 218.452V211.789H88Z" fill="#85C4F5"></path><rect x="82.5" y="196.5" width="31" height="31" rx="15.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g><g filter="url(#filter3_dd_912_9806)"><rect x="82" y="44" width="32" height="32" rx="16" fill="white" shape-rendering="crispEdges"></rect><path d="M100.944 64.3569C100.758 64.4992 100.701 64.7563 100.809 64.9651L101.484 66.2688C101.567 66.4294 101.452 66.6218 101.272 66.6218H94.6832C94.5035 66.6218 94.388 66.4294 94.4712 66.2688L95.1466 64.9651C95.2547 64.7563 95.1976 64.4992 95.0114 64.3569L94.4124 63.8993C92.9844 62.8082 92.0661 61.0837 92.0661 59.1424C92.0661 55.8491 94.7128 53.1795 97.9777 53.1795C99.4124 53.1795 100.728 53.695 101.752 54.5524V52.8635C100.651 52.1891 99.3594 51.8008 97.9777 51.8008C93.9579 51.8008 90.6992 55.0877 90.6992 59.1424C90.6992 61.4603 91.7642 63.5274 93.4276 64.8729C93.5187 64.9465 93.5475 65.0748 93.4935 65.1792L92.3976 67.2945C92.2312 67.6157 92.4623 68.0005 92.8216 68.0005H103.134C103.493 68.0005 103.724 67.6157 103.558 67.2945L102.462 65.1792C102.408 65.0748 102.437 64.9465 102.528 64.8729C104.191 63.5274 105.256 61.4603 105.256 59.1424C105.256 57.8475 104.924 56.6309 104.34 55.5746H102.715C103.453 56.5695 103.889 57.8045 103.889 59.1424C103.889 61.0837 102.971 62.8082 101.543 63.8993L100.944 64.3569Z" fill="#491797"></path><path d="M101.345 51.9782C101.377 51.8198 101.601 51.8198 101.633 51.9782L102.194 54.7479C102.206 54.8062 102.251 54.8518 102.309 54.8637L105.055 55.4298C105.212 55.4622 105.212 55.6886 105.055 55.721L102.309 56.2871C102.251 56.299 102.206 56.3446 102.194 56.403L101.633 59.1727C101.601 59.3311 101.377 59.3311 101.345 59.1727L100.783 56.403C100.771 56.3446 100.726 56.299 100.668 56.2871L97.9225 55.721C97.7654 55.6886 97.7654 55.4622 97.9225 55.4298L100.668 54.8637C100.726 54.8518 100.771 54.8062 100.783 54.7479L101.345 51.9782Z" fill="#A477E9"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M100.784 54.7473C100.772 54.8056 100.727 54.8512 100.669 54.8632L97.9229 55.4293C97.7658 55.4616 97.7658 55.6881 97.9229 55.7204L100.669 56.2865C100.727 56.2985 100.772 56.344 100.784 56.4024L101.345 59.1721C101.377 59.3305 101.601 59.3305 101.634 59.1721L102.195 56.4024C102.207 56.344 102.252 56.2985 102.31 56.2865L105.056 55.7204C105.213 55.6881 105.213 55.4616 105.056 55.4293L102.31 54.8632C102.252 54.8512 102.207 54.8056 102.195 54.7473L101.634 51.9776C101.601 51.8192 101.377 51.8192 101.345 51.9776L100.784 54.7473ZM102.883 54.1687L102.407 51.8182C102.203 50.8106 100.776 50.8106 100.571 51.8182L100.095 54.1687L97.7648 54.6491C96.7659 54.855 96.7659 56.2947 97.7648 56.5006L100.095 56.981L100.571 59.3315C100.776 60.3391 102.203 60.3391 102.407 59.3315L102.883 56.981L105.214 56.5006C106.213 56.2947 106.213 54.855 105.214 54.6491L102.883 54.1687Z" fill="white"></path><path d="M105.1 50.0594C105.116 49.9802 105.228 49.9802 105.244 50.0594L105.525 51.4443C105.531 51.4734 105.553 51.4962 105.582 51.5022L106.955 51.7852C107.034 51.8014 107.034 51.9146 106.955 51.9308L105.582 52.2139C105.553 52.2198 105.531 52.2426 105.525 52.2718L105.244 53.6566C105.228 53.7359 105.116 53.7359 105.1 53.6566L104.819 52.2718C104.813 52.2426 104.791 52.2198 104.762 52.2139L103.389 51.9308C103.31 51.9146 103.31 51.8014 103.389 51.7852L104.762 51.5022C104.791 51.4962 104.813 51.4734 104.819 51.4443L105.1 50.0594Z" fill="#A477E9"></path><rect x="82.5" y="44.5" width="31" height="31" rx="15.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g><g filter="url(#filter4_dd_912_9806)"><rect x="234" y="44" width="32" height="32" rx="16" fill="white" shape-rendering="crispEdges"></rect><path d="M250.001 68.9986C254.972 68.9986 259.001 64.9692 259.001 59.9987C259.001 58.8221 258.775 57.6982 258.365 56.668C257.214 57.3351 256.192 58.2015 255.346 59.2254C255.382 59.4779 255.401 59.7361 255.401 59.9987C255.401 62.5689 253.605 64.7197 251.2 65.2651C250.208 66.561 249.056 67.7217 247.773 68.7208C247.838 68.7373 247.903 68.7531 247.969 68.7682C248.622 68.919 249.302 68.9986 250.001 68.9986Z" fill="#4662D5"></path><path d="M245.426 67.7521C247.283 66.514 248.884 64.9173 250.13 63.0485L252.865 58.9464C254.012 57.226 255.54 55.7984 257.327 54.7724C256.597 53.7504 255.658 52.8876 254.573 52.2461C252.716 53.4841 251.115 55.0808 249.869 56.9495L247.134 61.0516C245.988 62.772 244.459 64.1996 242.672 65.2256C243.402 66.2477 244.341 67.1105 245.426 67.7521Z" fill="#4662D5"></path><path d="M241.636 63.3306C242.787 62.6634 243.809 61.797 244.655 60.773C244.619 60.5206 244.6 60.2625 244.6 60C244.6 57.4298 246.396 55.279 248.801 54.7336C249.793 53.4377 250.945 52.2769 252.227 51.2778C252.163 51.2613 252.098 51.2455 252.032 51.2305C251.379 51.0797 250.699 51 250 51C245.029 51 241 55.0294 241 60C241 61.1766 241.226 62.3004 241.636 63.3306Z" fill="#4662D5"></path><rect x="234.5" y="44.5" width="31" height="31" rx="15.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g><circle cx="174" cy="136" r="72" stroke="#BCDCDC"></circle><g filter="url(#filter5_f_912_9806)"><path d="M112.5 173.46C105.838 162.547 102 149.722 102 136C102 96.2355 134.235 64 174 64C198.963 64 220.959 76.7042 233.876 96" stroke="url(#paint3_linear_912_9806)" stroke-width="2" stroke-linecap="round"></path></g><g filter="url(#filter6_dd_912_9806)"><rect x="150" y="48" width="48" height="48" rx="24" fill="white" shape-rendering="crispEdges"></rect><g clip-path="url(#clip1_912_9806)"><path d="M174 72H164V82H174V72Z" fill="#131313"></path></g><rect x="179" y="62" width="5" height="20" fill="#131313"></rect><rect x="164" y="67" width="5" height="20" transform="rotate(-90 164 67)" fill="#131313"></rect><rect x="150.5" y="48.5" width="47" height="47" rx="23.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g><g filter="url(#filter7_dd_912_9806)"><rect x="77.5" y="112" width="48" height="48" rx="24" fill="white" shape-rendering="crispEdges"></rect><path d="M89.875 128.86V138.63C89.875 143.566 93.1869 147.746 97.7051 149.066V146.738C94.4233 145.507 92.0851 142.336 92.0851 138.631V128.861C92.0851 127.676 93.051 126.71 94.2364 126.71V124.5C91.8302 124.499 89.875 126.455 89.875 128.86Z" fill="url(#paint4_linear_912_9806)"></path><path d="M94.2363 124.5V126.71C95.4218 126.71 96.3876 127.676 96.3876 128.861V138.631C96.3876 141.035 98.3429 142.99 100.746 142.99H101.793V140.78H100.746C99.561 140.78 98.5977 139.814 98.5977 138.631V128.861C98.5977 126.457 96.6399 124.5 94.2363 124.5Z" fill="url(#paint5_linear_912_9806)"></path><path d="M97.7051 146.738V149.066C98.6709 149.348 99.6904 149.5 100.748 149.5C103.154 149.5 105.109 147.545 105.109 145.141V128.861C105.109 127.676 106.075 126.71 107.258 126.71V124.5C104.854 124.5 102.899 126.458 102.899 128.861V145.142C102.899 146.328 101.933 147.291 100.748 147.291C99.6773 147.291 98.6539 147.096 97.7051 146.738Z" fill="url(#paint6_linear_912_9806)"></path><path d="M106.213 140.78V142.99H107.257C109.661 142.99 111.621 141.035 111.621 138.631V128.861C111.621 126.458 109.661 124.5 107.257 124.5V126.71C108.445 126.71 109.411 127.676 109.411 128.861V138.631C109.411 139.814 108.445 140.78 107.257 140.78H106.213Z" fill="url(#paint7_linear_912_9806)"></path><rect x="78" y="112.5" width="47" height="47" rx="23.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g><g filter="url(#filter8_dd_912_9806)"><g clip-path="url(#clip2_912_9806)"><rect x="149.5" y="112" width="48" height="48" rx="24" fill="#002832"></rect><rect x="149.5" y="112" width="48" height="48" rx="24" fill="url(#paint8_radial_912_9806)" style="mix-blend-mode:overlay;"></rect><path d="M162.5 141.157H164.804C164.804 142.086 165.636 142.905 166.983 142.905C168.343 142.905 169.175 142.225 169.175 141.337C169.175 140.56 168.537 140.143 167.663 139.949L166.067 139.574C163.874 138.992 162.861 137.854 162.861 136.105C162.861 134.19 164.609 132.594 167.052 132.594C169.078 132.594 171.243 133.648 171.243 136.133H168.87C168.87 135.272 167.982 134.689 167.108 134.689C166.067 134.689 165.359 135.369 165.359 136.174C165.359 136.91 166.039 137.312 166.774 137.493L168.565 137.923C171.091 138.561 171.646 140.116 171.646 141.392C171.646 143.641 169.425 145.001 166.996 145.001C164.804 145.001 162.542 143.641 162.5 141.157Z" fill="white"></path><path d="M178.236 142.474V134.966H180.693V132.898H178.236V129.22H180.693V127H175.766V132.898H173.643V134.966H175.766V144.695H201.815V142.474H178.236Z" fill="white"></path></g><rect x="150" y="112.5" width="47" height="47" rx="23.5" stroke="#031C26"></rect></g><g filter="url(#filter9_dd_912_9806)"><rect x="221.5" y="112" width="48" height="48" rx="24" fill="white" shape-rendering="crispEdges"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M241.109 126.767C241.088 126.632 241.078 126.495 241.078 126.359C240.992 125.802 240.734 125.285 240.34 124.88C239.945 124.476 239.434 124.204 238.878 124.103C238.321 124.001 237.747 124.075 237.235 124.314C236.722 124.553 236.297 124.945 236.019 125.436C235.74 125.926 235.622 126.491 235.681 127.052C235.739 127.613 235.972 128.142 236.346 128.564C236.72 128.987 237.218 129.284 237.769 129.412C238.319 129.54 238.897 129.494 239.42 129.28C239.507 129.234 239.595 129.193 239.686 129.158C240.003 129.032 240.344 128.979 240.683 129.003C241.023 129.027 241.353 129.127 241.649 129.296C241.944 129.466 242.197 129.699 242.389 129.98C242.581 130.261 242.706 130.581 242.756 130.917C242.772 131.016 242.781 131.117 242.782 131.217C242.858 131.777 243.108 132.298 243.497 132.708C243.886 133.118 244.394 133.397 244.949 133.505C245.505 133.613 246.081 133.545 246.596 133.31C247.111 133.075 247.539 132.686 247.821 132.196C248.056 131.785 248.188 131.323 248.205 130.85C248.255 130.515 248.38 130.194 248.572 129.914C248.764 129.633 249.016 129.399 249.312 129.229C249.607 129.06 249.937 128.959 250.276 128.934C250.616 128.909 250.957 128.961 251.274 129.086C251.366 129.122 251.455 129.164 251.54 129.214C252.062 129.426 252.638 129.471 253.187 129.343C253.737 129.214 254.232 128.918 254.605 128.497C254.978 128.075 255.21 127.548 255.268 126.989C255.327 126.429 255.209 125.866 254.932 125.376C254.655 124.887 254.231 124.496 253.721 124.257C253.21 124.018 252.637 123.943 252.082 124.043C251.527 124.143 251.017 124.413 250.623 124.815C250.229 125.218 249.97 125.732 249.883 126.287C249.883 126.424 249.872 126.56 249.852 126.695C249.788 127.055 249.639 127.393 249.415 127.682C249.192 127.971 248.902 128.202 248.569 128.355C248.237 128.507 247.872 128.578 247.507 128.56C247.141 128.541 246.786 128.435 246.47 128.25C246.092 128.105 245.687 128.046 245.283 128.078C244.879 128.11 244.488 128.231 244.137 128.434C243.835 128.582 243.499 128.651 243.162 128.633C242.825 128.615 242.499 128.512 242.214 128.332C241.926 128.168 241.678 127.942 241.488 127.672C241.298 127.401 241.17 127.092 241.114 126.767" fill="#DA30AA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M255.397 135.364C255.526 135.412 255.65 135.47 255.77 135.537C256.296 135.738 256.871 135.771 257.416 135.632C257.962 135.493 258.45 135.188 258.813 134.759C259.177 134.331 259.397 133.801 259.445 133.242C259.492 132.683 259.364 132.123 259.077 131.64C258.791 131.157 258.361 130.775 257.847 130.547C257.333 130.318 256.76 130.255 256.208 130.366C255.656 130.476 255.153 130.755 254.767 131.164C254.382 131.572 254.133 132.091 254.057 132.646C254.062 132.745 254.062 132.843 254.057 132.942C254.006 133.277 253.879 133.597 253.688 133.877C253.496 134.157 253.243 134.391 252.948 134.56C252.653 134.73 252.324 134.831 251.984 134.856C251.645 134.881 251.304 134.83 250.987 134.706C250.894 134.669 250.804 134.626 250.716 134.579C250.192 134.366 249.614 134.322 249.064 134.453C248.513 134.584 248.017 134.883 247.646 135.308C247.274 135.733 247.044 136.263 246.989 136.824C246.934 137.385 247.057 137.949 247.339 138.438C247.582 138.85 247.919 139.199 248.321 139.458C248.588 139.669 248.803 139.937 248.951 140.242C249.099 140.548 249.176 140.883 249.176 141.222C249.176 141.561 249.099 141.896 248.951 142.201C248.803 142.506 248.588 142.775 248.321 142.986C248.245 143.046 248.164 143.102 248.081 143.154C247.635 143.498 247.307 143.973 247.144 144.511C246.981 145.05 246.99 145.625 247.17 146.158C247.351 146.691 247.693 147.155 248.15 147.486C248.607 147.816 249.156 147.996 249.72 148.001C250.284 148.006 250.836 147.836 251.299 147.514C251.762 147.192 252.113 146.735 252.303 146.205C252.493 145.675 252.513 145.1 252.359 144.559C252.206 144.017 251.887 143.537 251.447 143.184C251.328 143.117 251.215 143.038 251.11 142.95C250.855 142.739 250.65 142.475 250.51 142.176C250.369 141.877 250.296 141.552 250.296 141.222C250.298 140.822 250.405 140.429 250.607 140.084C250.809 139.738 251.099 139.452 251.447 139.254C251.766 139.003 252.023 138.684 252.2 138.32C252.377 137.956 252.47 137.557 252.471 137.153C252.49 136.82 252.594 136.497 252.773 136.216C252.952 135.934 253.2 135.702 253.494 135.542C253.781 135.377 254.102 135.277 254.432 135.249C254.763 135.22 255.096 135.265 255.407 135.379" fill="#0D8FAF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M235.557 135.364C235.429 135.412 235.304 135.47 235.184 135.537C234.658 135.738 234.083 135.771 233.538 135.632C232.993 135.493 232.504 135.188 232.141 134.759C231.778 134.331 231.557 133.801 231.51 133.242C231.462 132.683 231.591 132.123 231.877 131.64C232.163 131.157 232.593 130.775 233.107 130.547C233.622 130.318 234.194 130.255 234.746 130.366C235.298 130.476 235.801 130.755 236.187 131.164C236.573 131.572 236.821 132.091 236.898 132.646C236.893 132.745 236.893 132.843 236.898 132.942C236.949 133.277 237.075 133.597 237.267 133.877C237.459 134.157 237.711 134.391 238.006 134.56C238.301 134.73 238.631 134.831 238.97 134.856C239.31 134.881 239.65 134.83 239.967 134.706C240.06 134.669 240.151 134.626 240.238 134.579C240.763 134.365 241.341 134.32 241.892 134.45C242.443 134.58 242.939 134.879 243.311 135.305C243.683 135.731 243.912 136.262 243.966 136.824C244.019 137.386 243.895 137.95 243.61 138.438C243.369 138.851 243.032 139.201 242.628 139.458C242.362 139.669 242.148 139.938 242 140.243C241.853 140.548 241.777 140.883 241.777 141.222C241.777 141.56 241.853 141.895 242 142.2C242.148 142.506 242.362 142.774 242.628 142.986C242.704 143.046 242.785 143.102 242.868 143.154C243.312 143.499 243.637 143.972 243.799 144.509C243.961 145.047 243.95 145.621 243.77 146.152C243.59 146.683 243.248 147.145 242.792 147.474C242.336 147.803 241.789 147.982 241.226 147.987C240.664 147.993 240.113 147.823 239.652 147.503C239.19 147.182 238.84 146.726 238.65 146.198C238.459 145.67 238.439 145.097 238.591 144.557C238.742 144.017 239.059 143.537 239.497 143.184C239.847 142.989 240.139 142.703 240.342 142.358C240.545 142.012 240.652 141.619 240.652 141.219C240.652 140.819 240.545 140.426 240.342 140.08C240.139 139.735 239.847 139.45 239.497 139.254C239.179 139.002 238.922 138.683 238.745 138.319C238.568 137.956 238.475 137.557 238.473 137.153C238.454 136.82 238.35 136.497 238.171 136.216C237.992 135.934 237.744 135.702 237.45 135.542C237.163 135.377 236.842 135.277 236.512 135.249C236.181 135.22 235.848 135.265 235.537 135.379" fill="#E1C000"></path><rect x="222" y="112.5" width="47" height="47" rx="23.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g><g filter="url(#filter10_dd_912_9806)"><rect x="150" y="176" width="48" height="48" rx="24" fill="white" shape-rendering="crispEdges"></rect><path d="M175.093 208.384C172.44 209.9 169.15 209.9 166.511 208.384C165.768 207.96 164.828 208.217 164.404 208.96C163.979 209.703 164.237 210.643 164.98 211.068C166.769 212.099 168.786 212.599 170.802 212.599C172.819 212.599 174.835 212.084 176.625 211.068C177.368 210.643 177.625 209.703 177.201 208.96C176.776 208.217 175.836 207.96 175.093 208.384Z" fill="#18ACB4"></path><path d="M176.215 187.398C172.409 187.398 169.301 190.507 169.301 194.313C169.301 194.388 169.301 194.464 169.301 194.54C169.301 194.585 169.301 194.616 169.301 194.661V204.881C169.301 205.73 169.998 206.427 170.847 206.427C171.696 206.427 172.394 205.73 172.394 204.881V200.074C173.486 200.802 174.805 201.227 176.215 201.227C180.036 201.227 183.129 198.118 183.129 194.313C183.129 190.507 180.036 187.398 176.215 187.398ZM176.215 198.149C174.107 198.149 172.394 196.435 172.394 194.328C172.394 192.22 174.107 190.507 176.215 190.507C178.322 190.507 180.036 192.22 180.036 194.328C180.051 196.42 178.322 198.149 176.215 198.149Z" fill="#18ACB4"></path><rect x="150.5" y="176.5" width="47" height="47" rx="23.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g></g><defs><filter id="filter0_f_912_9806" x="64" y="94" width="213.312" height="152" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_912_9806"></feGaussianBlur></filter><filter id="filter1_dd_912_9806" x="233" y="195" width="34" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.08 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_912_9806"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.08 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_912_9806" result="effect2_dropShadow_912_9806"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_912_9806" result="shape"></feBlend></filter><filter id="filter2_dd_912_9806" x="81" y="195" width="34" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.08 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_912_9806"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.08 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_912_9806" result="effect2_dropShadow_912_9806"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_912_9806" result="shape"></feBlend></filter><filter id="filter3_dd_912_9806" x="81" y="43" width="34" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.08 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_912_9806"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.08 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_912_9806" result="effect2_dropShadow_912_9806"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_912_9806" result="shape"></feBlend></filter><filter id="filter4_dd_912_9806" x="233" y="43" width="34" height="35" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.08 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_912_9806"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.08 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_912_9806" result="effect2_dropShadow_912_9806"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_912_9806" result="shape"></feBlend></filter><filter id="filter5_f_912_9806" x="100" y="62" width="135.875" height="113.461" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_912_9806"></feGaussianBlur></filter><filter id="filter6_dd_912_9806" x="146" y="45" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_912_9806"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_912_9806" result="effect2_dropShadow_912_9806"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_912_9806" result="shape"></feBlend></filter><filter id="filter7_dd_912_9806" x="73.5" y="109" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_912_9806"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_912_9806" result="effect2_dropShadow_912_9806"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_912_9806" result="shape"></feBlend></filter><filter id="filter8_dd_912_9806" x="139.5" y="106" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_912_9806"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_912_9806"></feMorphology><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="6"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.12 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_912_9806" result="effect2_dropShadow_912_9806"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_912_9806" result="shape"></feBlend></filter><filter id="filter9_dd_912_9806" x="217.5" y="109" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_912_9806"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_912_9806" result="effect2_dropShadow_912_9806"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_912_9806" result="shape"></feBlend></filter><filter id="filter10_dd_912_9806" x="146" y="173" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_912_9806"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_912_9806" result="effect2_dropShadow_912_9806"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_912_9806" result="shape"></feBlend></filter><radialGradient id="paint0_radial_912_9806" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(173.5 136) rotate(90) scale(136 173.5)"><stop stop-color="#D9D9D9"></stop><stop offset="0.248753" stop-color="#D9D9D9"></stop><stop offset="1" stop-color="#D9D9D9" stop-opacity="0"></stop></radialGradient><linearGradient id="paint1_linear_912_9806" x1="74" y1="96" x2="267" y2="200" gradientUnits="userSpaceOnUse"><stop stop-color="#54ABA3"></stop><stop offset="1" stop-color="#54ABA3" stop-opacity="0"></stop></linearGradient><linearGradient id="paint2_linear_912_9806" x1="225.5" y1="253.5" x2="197" y2="-5" gradientUnits="userSpaceOnUse"><stop stop-color="#54ABA3"></stop><stop offset="1" stop-color="#54ABA3" stop-opacity="0"></stop></linearGradient><linearGradient id="paint3_linear_912_9806" x1="239" y1="100.5" x2="102" y2="158.5" gradientUnits="userSpaceOnUse"><stop stop-color="#54ABA3"></stop><stop offset="1" stop-color="#54ABA3" stop-opacity="0"></stop></linearGradient><linearGradient id="paint4_linear_912_9806" x1="95.1538" y1="146.045" x2="90.6582" y2="125.904" gradientUnits="userSpaceOnUse"><stop stop-color="#9B6DEE"></stop><stop offset="1" stop-color="#6F2DE7"></stop></linearGradient><linearGradient id="paint5_linear_912_9806" x1="106.504" y1="146.554" x2="98.5018" y2="135.18" gradientUnits="userSpaceOnUse"><stop stop-color="#43129C"></stop><stop offset="1" stop-color="#6F2DE7"></stop></linearGradient><linearGradient id="paint6_linear_912_9806" x1="100.253" y1="147.347" x2="105.648" y2="132.466" gradientUnits="userSpaceOnUse"><stop stop-color="#9B6DEE"></stop><stop offset="1" stop-color="#6F2DE7"></stop></linearGradient><linearGradient id="paint7_linear_912_9806" x1="100.248" y1="147.188" x2="109.195" y2="132.577" gradientUnits="userSpaceOnUse"><stop stop-color="#43129C"></stop><stop offset="1" stop-color="#6F2DE7"></stop></linearGradient><radialGradient id="paint8_radial_912_9806" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(197.5 112) rotate(116.419) scale(41.2606 32.9488)"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></radialGradient><clipPath id="clip0_912_9806"><rect width="347" height="272" fill="white"></rect></clipPath><clipPath id="clip1_912_9806"><path d="M164 77C164 74.2386 166.239 72 169 72V72C171.761 72 174 74.2386 174 77V77C174 79.7614 171.761 82 169 82H164V77Z" fill="white"></path></clipPath><clipPath id="clip2_912_9806"><rect x="149.5" y="112" width="48" height="48" rx="24" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4);
}
const ExperienceIllustration = { render: render$1 };
const _hoisted_1 = {
  width: "347",
  height: "300",
  viewBox: "0 0 347 300",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<mask id="mask0_734_45319" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="347" height="300"><rect width="347" height="300" fill="url(#paint0_radial_734_45319)"></rect></mask><g mask="url(#mask0_734_45319)"><path d="M79.7893 46.4858L75.8651 50.4103C75.1167 51.1587 73.9029 51.1587 73.1546 50.4103L69.2304 46.4858L73.1546 42.5613C73.9029 41.8129 75.1167 41.8129 75.8651 42.5613L79.7893 46.4858Z" fill="#BCDCDC"></path><path d="M171.618 66.4059L145.782 92.2445L134.464 80.9255C134.105 80.5665 133.903 80.0797 133.903 79.5721V66.6379C133.903 66.1303 133.701 65.6435 133.342 65.2844L124.698 56.6389C123.95 55.8913 123.95 54.6797 124.698 53.932L129.064 49.5656L143.582 44.2858H164.515C168.748 44.2858 172.179 47.7148 172.179 51.9448V65.0525C172.179 65.5601 171.977 66.0469 171.618 66.4059Z" fill="#BCDCDC"></path><path d="M103.986 84.7647L96.9473 77.7249L92.5478 96.2044H80.2291L70.1773 86.1516C68.6821 84.6563 68.6821 82.2331 70.1773 80.7378L75.7626 75.1519C77.2578 73.6566 77.2578 71.2334 75.7626 69.7381L72.9926 66.9678C72.2739 66.249 71.2988 65.8452 70.2821 65.8452H-2.65341C-3.67016 65.8452 -4.64523 66.249 -5.36392 66.9678L-15.8786 77.4834C-16.5967 78.2015 -17 79.1751 -17 80.1903V96.2044L4.11764 80.3648L18.8345 95.0829C19.5525 95.801 19.9559 96.7746 19.9559 97.7898V115.738C19.9559 116.754 20.3592 117.727 21.0773 118.445L54.0294 151.4C54.7481 152.119 55.7232 152.523 56.74 152.523H64.1228C65.1395 152.523 66.1146 152.927 66.8333 153.645L73.1899 160.003L65.7108 173.642V191.856C65.7108 192.872 66.1141 193.845 66.8321 194.563L77.348 205.08C78.066 205.798 78.4693 206.772 78.4693 207.787V240.081L92.5478 259V232.866C92.5478 231.851 92.9511 230.877 93.6692 230.159L129.262 194.563C129.98 193.845 130.384 192.872 130.384 191.856V181.301C130.384 177.071 126.952 173.642 122.72 173.642H118.505L107.946 164.843L104.229 161.125C103.51 160.407 102.535 160.003 101.519 160.003H85.0686L70.3529 145.286C69.6342 144.567 68.6591 144.163 67.6424 144.163H63.3833C61.2671 144.163 59.5515 142.449 59.5515 140.334V138.622C59.5515 134.393 62.9826 130.963 67.2152 130.963H80.8409C81.8576 130.963 82.8327 130.56 83.5514 129.841L116.064 97.3259C116.782 96.6078 117.185 95.6341 117.185 94.6189V88.5942C117.185 86.4792 115.469 84.7647 113.353 84.7647H103.986Z" fill="#BCDCDC"></path><path d="M63.7273 59.6854H48.9926L42.1417 52.8338C40.9354 51.6274 41.7904 49.5656 43.497 49.5656H58.2316L65.0825 56.4171C66.2888 57.6236 65.4339 59.6854 63.7273 59.6854Z" fill="#BCDCDC"></path><path d="M428.858 121.975L441.429 109.404H448.684C450.391 109.404 451.246 111.466 450.04 112.672L437.469 125.244H430.214C428.507 125.244 427.652 123.182 428.858 121.975Z" fill="#BCDCDC"></path><path d="M431.75 193.002H445.915C446.423 193.002 446.911 192.8 447.27 192.44L456.828 182.882H442.663C442.155 182.882 441.667 183.084 441.308 183.443L431.75 193.002Z" fill="#BCDCDC"></path><path d="M427.791 201.361L414.592 214.561V224.942C414.592 229.172 418.023 232.601 422.256 232.601H439.229L448.029 241.4H463.867V214.561L450.668 201.361H427.791Z" fill="#BCDCDC"></path><path d="M480.584 242.281H475.089C473.382 242.281 472.527 240.219 473.733 239.012L480.584 232.161H486.08C487.787 232.161 488.642 234.223 487.435 235.429L480.584 242.281Z" fill="#BCDCDC"></path><path d="M225.853 88.7246V98.0075C225.853 99.6012 224.019 100.497 222.76 99.5186L217.934 95.7644V85.9506C217.934 84.2981 219.888 83.4217 221.123 84.5199L225.853 88.7246Z" fill="#BCDCDC"></path><path d="M241.251 94.0045H256.933C257.991 94.0045 258.849 93.1473 258.849 92.0898V88.1974C258.849 87.6898 259.051 87.203 259.41 86.844L265.45 80.803C266.908 79.3458 266.908 76.9842 265.45 75.5269C263.992 74.0682 261.626 74.0682 260.167 75.5269L252.881 82.8133C251.675 84.0201 249.61 83.166 249.61 81.4598V72.8851L258.288 64.2066C258.647 63.8473 259.135 63.6453 259.643 63.6453H272.928L282.364 73.0825C283.083 73.8012 284.058 74.2051 285.074 74.2051H314.895C315.912 74.2051 316.887 73.8012 317.605 73.0825L327.042 63.6453H343.32L352.514 54.4508C353.951 53.0133 355.901 52.2057 357.935 52.2057H379.299C381.333 52.2057 383.283 53.0133 384.72 54.4508L391.669 61.4002C393.107 62.8377 395.057 63.6453 397.09 63.6453H414.152L434.83 71.5651H455.593C456.102 71.5651 456.589 71.767 456.948 72.1264L461.633 76.8115C462.381 77.5591 462.381 78.7708 461.633 79.5184L451.669 89.4833C451.31 89.8427 450.822 90.0446 450.314 90.0446H442.493C438.261 90.0446 434.83 93.4737 434.83 97.7037V104.564L415.274 124.121C414.556 124.84 413.581 125.244 412.564 125.244H404.785C402.669 125.244 400.953 126.958 400.953 129.073V134.658C400.953 135.673 400.55 136.647 399.832 137.365L390.395 146.803L380.276 160.443L365.899 146.065C362.906 143.071 358.05 143.071 355.057 146.065L346.101 155.021C343.108 158.015 338.252 158.015 335.259 155.021L327.042 146.803H317.803L322.202 158.243L311.643 168.803L304.164 174.962L307.177 177.975C308.672 179.471 308.672 181.894 307.177 183.389L293.407 197.16C292.689 197.878 292.286 198.852 292.286 199.867V234.801L275.567 251.08H274.177C265.712 251.08 258.849 244.222 258.849 235.762V220.987C258.849 219.971 258.446 218.998 257.728 218.28L249.61 210.161V204.36C249.61 195.9 242.748 189.042 234.283 189.042H228.933L212.214 172.322L228.933 136.243H247.056C247.565 136.243 248.052 136.445 248.412 136.805L254.328 142.722C254.688 143.081 255.175 143.283 255.684 143.283H276.973C277.482 143.283 277.969 143.081 278.328 142.722L287.446 133.603L282.017 126.972L277.045 122.004H268.088L262.809 126.972H250.055L241.251 118.81H234.43L223.421 129.102L212.767 118.81L223.421 107.807H234.43L241.251 94.0045Z" fill="#BCDCDC"></path><path d="M311.643 209.506V219.401L305.676 225.369C304.469 226.576 302.404 225.722 302.404 224.016V214.121L308.372 208.153C309.579 206.946 311.643 207.8 311.643 209.506Z" fill="#BCDCDC"></path><path d="M401.393 164.402L397.469 168.327C396.721 169.075 395.507 169.075 394.759 168.327L390.835 164.402L394.759 160.478C395.507 159.73 396.721 159.73 397.469 160.478L401.393 164.402Z" fill="#BCDCDC"></path><path d="M390.395 187.722L377.824 175.15C376.618 173.944 377.473 171.882 379.18 171.882H385.555L398.126 184.454C399.332 185.66 398.477 187.722 396.77 187.722H390.395Z" fill="#BCDCDC"></path><path d="M416.387 193.846L420.311 189.922L416.387 185.997C415.639 185.249 414.425 185.249 413.677 185.997L409.752 189.922L413.677 193.846C414.425 194.595 415.639 194.595 416.387 193.846Z" fill="#BCDCDC"></path><path d="M178.814 88.2495L182.738 84.325L178.814 80.4005C178.065 79.6521 176.852 79.6521 176.103 80.4005L172.179 84.325L176.103 88.2495C176.852 88.9979 178.065 88.9979 178.814 88.2495Z" fill="#BCDCDC"></path><path d="M214.414 96.6445L210.49 100.569C209.742 101.317 208.528 101.317 207.78 100.569L203.856 96.6445L207.78 92.72C208.528 91.9716 209.742 91.9716 210.49 92.72L214.414 96.6445Z" fill="#BCDCDC"></path><path d="M114.106 73.765L97.3873 57.0455H85.5085L102.227 73.765H114.106Z" fill="#BCDCDC"></path></g><path d="M119.941 206C137.001 185.817 162.504 173 191 173C201.127 173 210.875 174.618 220 177.611" stroke="#54ABA3" stroke-width="0.5" stroke-dasharray="4 4"></path><path d="M259.143 89.9401C236.866 80.3265 212.305 75 186.5 75C146.571 75 109.621 87.7531 79.5 109.408" stroke="#54ABA3" stroke-width="0.5" stroke-dasharray="4 4"></path><path d="M80 110.309C90.0192 107.501 100.584 106 111.5 106C160.081 106 201.717 135.736 219.199 178" stroke="#54ABA3" stroke-width="0.5" stroke-dasharray="4 4"></path><path d="M259 89.8286C254.242 89.2813 249.404 89 244.5 89C178.045 89 123.654 140.652 119.283 206" stroke="#54ABA3" stroke-width="0.5" stroke-dasharray="4 4"></path><g filter="url(#filter0_dd_734_45319)"><rect x="56" y="86" width="48" height="48" rx="24" fill="white" shape-rendering="crispEdges"></rect><path d="M85.2086 107C83.5288 107 82.167 105.741 82.167 104.188V102.313C82.167 100.759 83.5288 99.5 85.2086 99.5C86.8885 99.5 88.2502 100.759 88.2502 102.313V104.188C88.2502 105.741 86.8885 107 85.2086 107ZM85.2086 107C88.1679 107 91.2499 108.427 91.2499 111.282V113.75C91.2499 114.164 90.9141 114.5 90.4999 114.5H85.6921M85.2086 107C82.5419 107 79.8427 108.159 79.335 110.477M76.25 121.25C80.3921 121.25 83.75 117.892 83.75 113.75M76.25 106.25C72.1079 106.25 68.75 109.608 68.75 113.75M76.25 115.25C75.4733 115.25 74.8438 114.62 74.8438 113.844V112.906C74.8438 112.13 75.4733 111.5 76.25 111.5C77.0267 111.5 77.6562 112.13 77.6562 112.906V113.844C77.6562 114.62 77.0267 115.25 76.25 115.25ZM76.25 115.25C77.6997 115.25 78.9089 116.259 79.1887 117.136M76.25 115.25C74.8003 115.25 73.5903 116.259 73.3106 117.136M76.25 118.25C78.7353 118.25 80.75 116.235 80.75 113.75C80.75 111.265 78.7353 109.25 76.25 109.25C73.7647 109.25 71.75 111.265 71.75 113.75C71.75 116.235 73.7647 118.25 76.25 118.25Z" stroke="#002832" stroke-width="1.5" stroke-miterlimit="10"></path><rect x="56.5" y="86.5" width="47" height="47" rx="23.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g><g filter="url(#filter1_dd_734_45319)"><rect x="235" y="66" width="48" height="48" rx="24" fill="white" shape-rendering="crispEdges"></rect><path d="M250.75 94.5C250.75 94.5 253.965 94.5 254.855 94.5C256.635 94.5 256.635 91.875 254.855 91.875H253.076C251.296 91.875 251.296 89.25 253.076 89.25C253.965 89.25 256.435 89.25 256.435 89.25M259.67 94.5H269.5C269.914 94.5 270.25 94.1642 270.25 93.75V91.2821C270.25 88.4274 267.209 87 264.25 87C262.593 87 260.91 87.4476 259.75 88.3429M259.231 86.8322C259.541 86.9323 259.75 87.2205 259.75 87.5457V93.7502C259.75 97.5002 253.75 100.5 253.75 100.5C253.75 100.5 247.75 97.5002 247.75 93.7502V87.5457C247.75 87.2205 247.96 86.9323 248.269 86.8322L252.364 85.5065C253.265 85.2149 254.235 85.2149 255.136 85.5065L259.231 86.8322ZM261.167 84.1876C261.167 85.7409 262.529 87.0001 264.209 87.0001C265.888 87.0001 267.25 85.7409 267.25 84.1876V82.3125C267.25 80.7592 265.888 79.5 264.209 79.5C262.529 79.5 261.167 80.7592 261.167 82.3125V84.1876Z" stroke="#002832" stroke-width="1.5" stroke-miterlimit="10"></path><rect x="235.5" y="66.5" width="47" height="47" rx="23.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g><g filter="url(#filter2_dd_734_45319)"><rect x="195" y="154" width="48" height="48" rx="24" fill="white" shape-rendering="crispEdges"></rect><path d="M217.703 180.014C218.953 180.427 219.75 181.051 219.75 181.75C219.75 182.993 217.232 184 214.125 184C211.018 184 208.5 182.993 208.5 181.75C208.5 180.769 210.069 179.935 212.258 179.627M224.209 175C222.529 175 221.167 173.741 221.167 172.188V170.313C221.167 168.759 222.529 167.5 224.209 167.5C225.888 167.5 227.25 168.759 227.25 170.313V172.188C227.25 173.741 225.888 175 224.209 175ZM224.209 175C227.168 175 230.25 176.427 230.25 179.282V181.75C230.25 182.164 229.914 182.5 229.5 182.5H219.425M224.209 175C222.401 175 220.577 175.533 219.432 176.598M217.648 183.486C220.206 183.941 222 185.007 222 186.25C222 187.907 218.81 189.25 214.875 189.25C210.94 189.25 207.75 187.907 207.75 186.25C207.75 185.157 209.139 184.2 211.215 183.676M217.523 175.927C219.272 176.268 220.5 177.068 220.5 178C220.5 179.243 218.317 180.25 215.625 180.25C212.933 180.25 210.75 179.243 210.75 178C210.75 177.248 211.549 176.583 212.776 176.174M214.875 176.5C216.739 176.5 218.25 175.829 218.25 175C218.25 174.172 216.739 173.5 214.875 173.5C213.011 173.5 211.5 174.172 211.5 175C211.5 175.829 213.011 176.5 214.875 176.5Z" stroke="#002832" stroke-width="1.5" stroke-miterlimit="10"></path><rect x="195.5" y="154.5" width="47" height="47" rx="23.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g><g filter="url(#filter3_dd_734_45319)"><rect x="96" y="182" width="48" height="48" rx="24" fill="white" shape-rendering="crispEdges"></rect><path d="M112.562 211.25V206H115.603C117.382 206 117.382 208.625 115.603 208.625H113.994M113.994 208.625C114.869 208.625 116.938 209.5 116.938 211.25M113.994 208.625H112.562M120.67 210.5H130.5C130.914 210.5 131.25 210.164 131.25 209.75V207.282C131.25 204.427 128.209 203 125.25 203C123.593 203 121.91 203.448 120.75 204.343M120.231 202.832C120.541 202.932 120.75 203.22 120.75 203.546V209.75C120.75 213.5 114.75 216.5 114.75 216.5C114.75 216.5 108.75 213.5 108.75 209.75V203.546C108.75 203.22 108.96 202.932 109.269 202.832L113.364 201.507C114.265 201.215 115.235 201.215 116.136 201.507L120.231 202.832ZM122.167 200.188C122.167 201.741 123.529 203 125.209 203C126.888 203 128.25 201.741 128.25 200.188V198.313C128.25 196.759 126.888 195.5 125.209 195.5C123.529 195.5 122.167 196.759 122.167 198.313V200.188Z" stroke="#002832" stroke-width="1.5" stroke-miterlimit="10"></path><rect x="96.5" y="182.5" width="47" height="47" rx="23.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g><defs><filter id="filter0_dd_734_45319" x="52" y="83" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_734_45319"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_734_45319" result="effect2_dropShadow_734_45319"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_734_45319" result="shape"></feBlend></filter><filter id="filter1_dd_734_45319" x="231" y="63" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_734_45319"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_734_45319" result="effect2_dropShadow_734_45319"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_734_45319" result="shape"></feBlend></filter><filter id="filter2_dd_734_45319" x="191" y="151" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_734_45319"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_734_45319" result="effect2_dropShadow_734_45319"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_734_45319" result="shape"></feBlend></filter><filter id="filter3_dd_734_45319" x="92" y="179" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_734_45319"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_734_45319" result="effect2_dropShadow_734_45319"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_734_45319" result="shape"></feBlend></filter><radialGradient id="paint0_radial_734_45319" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(174 150) rotate(90) scale(150 173.5)"><stop stop-color="#D9D9D9"></stop><stop offset="1" stop-color="#D9D9D9" stop-opacity="0"></stop></radialGradient></defs>', 11);
const _hoisted_13 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_13);
}
const RemoteIllustration = { render };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheCulturePerksSection",
  __ssrInlineRender: true,
  setup(__props) {
    const breakpoints = useBreakpoints$1(breakpointsConst);
    const md = ref(breakpoints.smaller("md"));
    const perks = [
      {
        icon: RocketIcon,
        title: "Get experience working for top-tier startups",
        text: "Because we\u2019re selective about the companies we serve, we have multiple opportunities to work with startups on the cusp of changing the world.",
        illustration: ExperienceIllustration
      },
      {
        icon: WorkflowIcon,
        title: "Change the way people use the internet",
        text: "We partner with startups building innovative tools. Whatever you end up working on will impact daily lives of thousands."
      },
      {
        icon: TeamsIcon,
        title: "Work on your own terms",
        text: "Startup culture is baked into our DNA. At Semiflat every team member\u2019s voice is heard. No matter if you\u2019ve worked here for years or just joined."
      },
      {
        icon: RobeIcon,
        title: "Remote always and forever",
        text: "We hire the best talent, no matter where it is. At Semiflat you can work from wherever you want. Team members have even relocated to different countries. ",
        illustration: RemoteIllustration
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ThePerkComponent = _sfc_main$9;
      const _component_AppButton = __unplugin_components_0$1;
      const _component_AppCirclesHorizontal = _sfc_main$a;
      _push(`<!--[--><div class="page-content mt-16 md:mt-40"><h2 class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]"> We design tools that help millions of professionals <br class="hidden md:block"> be more effective at their job_ </h2>`);
      if (unref(md)) {
        _push(`<div class="grid gap-6 md:grid-cols-3 md:hidden"><!--[-->`);
        ssrRenderList(perks, (perk, i) => {
          _push(ssrRenderComponent(_component_ThePerkComponent, {
            key: i,
            perk
          }, null, _parent));
        });
        _push(`<!--]--><div class="px-8 py-10 bg-dark-blue rounded-4 relative md:static"><p class="text-white text-xl mb-8 font-semibold"> Want to see how we apply these in practice? </p>`);
        _push(ssrRenderComponent(_component_AppButton, {
          href: "mailto:hello@semiflat.com",
          secondary: ""
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
        _push(ssrRenderComponent(_component_AppCirclesHorizontal, {
          id: "circles-sm",
          class: "absolute right-0 bottom-0 h-51"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!unref(md)) {
        _push(`<div class="relative mask-testimonial pt-5rem pb-5rem max-w-86rem mx-auto hidden md:block px-6 lg:px-0 md:-mt-[5rem] md:-mb-[5rem]"><div class="hidden md:flex gap-8 max-w-69rem mx-auto"><div class="flex flex-col gap-8 max-w-[346px] justify-center relative">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(StrokeTop)), { class: "absolute w-full -top-23" }, null), _parent);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(StrokeLeft)), { class: "absolute w-full -left-[calc(100%+2rem)]" }, null), _parent);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(StrokeTop)), { class: "absolute w-full -bottom-23 -scale-y-100" }, null), _parent);
        _push(ssrRenderComponent(_component_ThePerkComponent, {
          perk: perks[0]
        }, null, _parent));
        _push(`</div><div class="flex flex-col gap-8 max-w-[346px] relative">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(StrokeTop)), { class: "absolute w-full -top-62" }, null), _parent);
        _push(ssrRenderComponent(_component_ThePerkComponent, {
          perk: perks[1]
        }, null, _parent));
        _push(`<div class="px-8 py-10 bg-dark-blue rounded-4 relative">`);
        _push(ssrRenderComponent(_component_AppCirclesHorizontal, {
          id: "circles-md",
          class: "absolute right-0 bottom-0 h-51"
        }, null, _parent));
        _push(`<p class="text-white text-xl mb-8 font-semibold"> Sounds fun? Why don\u2019t you try for yourself </p>`);
        _push(ssrRenderComponent(_component_AppButton, {
          href: "mailto:hello@semiflat.com",
          secondary: ""
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
        _push(`</div>`);
        _push(ssrRenderComponent(_component_ThePerkComponent, {
          perk: perks[2]
        }, null, _parent));
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(StrokeTop)), { class: "absolute w-full -bottom-62 -scale-y-100" }, null), _parent);
        _push(`</div><div class="flex flex-col gap-8 max-w-[346px] justify-center relative">`);
        _push(ssrRenderComponent(_component_ThePerkComponent, {
          perk: perks[3]
        }, null, _parent));
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(StrokeTop)), { class: "absolute w-full -top-23" }, null), _parent);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(StrokeLeft)), { class: "absolute w-full -right-[calc(100%+2rem)] -scale-x-100" }, null), _parent);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(StrokeTop)), { class: "absolute w-full -bottom-23 -scale-y-100" }, null), _parent);
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const TheCulturePerksSection_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/culture/TheCulturePerksSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheCultureHeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    const employees = [
      NicImage,
      EwaImage,
      ApoloniaImage,
      ChrystianImage,
      PaulinaImage,
      NataliaImage,
      MagdaImage,
      BarryImage,
      MaciejImage,
      SarahImage,
      ArekImage,
      MartynaImage,
      KubaImage,
      MarcinImage,
      PatrycjaImage
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppButton = __unplugin_components_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative page-content" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(BackgroundMobileLeft), { class: "absolute top-28 left-0 md:hidden" }, null, _parent));
      _push(ssrRenderComponent(unref(BackgroundDesktop), { class: "hidden absolute -left-42 md:block -top-57 -z-1" }, null, _parent));
      _push(`<div class="mt-3.5rem md:hidden"><h1 class="hero-title md:text-[2.5rem] md:leading-[120%] md:mt-6"> Meet the team behind your next project_ </h1><p class="mt-6 text-blue-200"> We are a remote team of 17 product designers, laser focused on delivering top tier SaaS product design to <br> world\u2019s most innovative startups. </p><div class="mt-2.5rem">`);
      _push(ssrRenderComponent(_component_AppButton, { href: "mailto:careers@semiflat.com" }, {
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
      _push(`</div></div><div class="hidden md:block"><div class="md:mt-40 md:text-center"><h1 class="hero-title md:text-[2.5rem] md:leading-[120%] md:mt-6"> Designer, welcome home_ </h1><p class="mt-6 text-blue-200"> Founded by a designer as a place where designers can thrive, we know the needs of creative minds and work <br> tirelessly to make sure they proudly call Semiflat their home. </p><div class="mt-2.5rem">`);
      _push(ssrRenderComponent(_component_AppButton, { href: "mailto:careers@semiflat.com" }, {
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
      _push(`</div></div><div class="md:mt-40 relative z-1"><div class="flex gap-7 w-fit mx-auto"><!--[-->`);
      ssrRenderList(employees.slice(0, 10), (person) => {
        _push(`<img${ssrRenderAttr("src", person)} class="w-14 h-14 rounded-full object-cover">`);
      });
      _push(`<!--]--></div><div class="flex gap-7 w-fit mx-auto mt-7"><!--[-->`);
      ssrRenderList(employees.slice(10, 15), (person) => {
        _push(`<img${ssrRenderAttr("src", person)} class="w-14 h-14 rounded-full object-cover">`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const TheCultureHeroSection_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/culture/TheCultureHeroSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheCultureHeroSection = _sfc_main$1;
  const _component_TheCulturePerksSection = _sfc_main$2;
  const _component_TheCultureAboutSection = _sfc_main$3;
  const _component_TheCultureOurServices = _sfc_main$4;
  const _component_TheCultureSeeOurWork = _sfc_main$5;
  const _component_TheCultureImagesSlider = _sfc_main$6;
  const _component_TheCultureFaqSections = _sfc_main$7;
  const _component_TheCTABottomSection = __unplugin_components_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheCultureHeroSection, { class: "section" }, null, _parent));
  _push(ssrRenderComponent(_component_TheCulturePerksSection, { class: "section" }, null, _parent));
  _push(ssrRenderComponent(_component_TheCultureAboutSection, { class: "section" }, null, _parent));
  _push(ssrRenderComponent(_component_TheCultureOurServices, { class: "section" }, null, _parent));
  _push(ssrRenderComponent(_component_TheCultureSeeOurWork, null, null, _parent));
  _push(ssrRenderComponent(_component_TheCultureImagesSlider, { class: "section" }, null, _parent));
  _push(ssrRenderComponent(_component_TheCultureFaqSections, { class: "section" }, null, _parent));
  _push(ssrRenderComponent(_component_TheCTABottomSection, { class: "section" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/culture.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const culture_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  culture_page as default
};
