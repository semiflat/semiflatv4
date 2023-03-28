import { pipeToWebWritable, pipeToNodeWritable } from "@vue/server-renderer";
import { stampPipe, escapeInject } from "vite-plugin-ssr";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import Toast from "vue-toastification";
import { openBlock, createElementBlock, createStaticVNode, createElementVNode, defineComponent, mergeProps, unref, createVNode, resolveDynamicComponent, useSSRContext, ref, onMounted, withCtx, createTextVNode, h, createSSRApp } from "vue";
import { u as usePageContext, s as setPageContext } from "./chunk-2a1bb412.js";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderVNode, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { S as ServiceTypes } from "./chunk-f057e02d.js";
import { a as _export_sfc, _ as __unplugin_components_0 } from "./chunk-5a6b5315.js";
import AOS from "aos";
import { l as localeDefault } from "../pageFiles.mjs";
import i18next from "i18next";
const fixSwiperAutoplay = "";
const fixSwiper = "";
const fixSwiperNavigation = "";
const fixSwiperPagination = "";
const install$1 = () => {
  SwiperCore.use([Navigation, Autoplay]);
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install: install$1
}, Symbol.toStringTag, { value: "Module" }));
const index = "";
const options = {
  timeout: 3e3
};
const install = ({ app }) => {
  app.use(Toast, options);
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  install
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$9 = {
  width: "148",
  height: "24",
  viewBox: "0 0 148 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$9 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_1034_14391)"><path d="M7.87657 14.8349L5.55993 14.2745C4.60018 14.0437 3.73971 13.5163 3.73971 12.5932C3.73971 11.5382 4.66637 10.6811 5.99016 10.6811C7.14848 10.6811 8.27371 11.4393 8.27371 12.5272H11.3515C11.3515 9.32944 8.53846 7.94482 5.92397 7.94482C2.74687 7.94482 0.496422 9.98878 0.496422 12.4943C0.496422 14.736 1.82022 16.2195 4.66637 16.9778L6.71825 17.4723C7.87657 17.736 8.67084 18.2635 8.67084 19.2525C8.67084 20.4064 7.57871 21.2635 5.82469 21.2635C4.10376 21.2635 3.01163 20.2086 3.01163 19.0217H0C0.0661896 22.2195 2.97853 23.9998 5.82469 23.9998C8.9687 23.9998 11.8479 22.2525 11.8479 19.3184C11.8479 17.6701 11.153 15.6591 7.87657 14.8349Z" fill="#002832"></path><path d="M21.8757 7.94482C17.5071 7.94482 13.966 11.0767 13.966 15.9228C13.966 20.769 17.441 23.9998 21.8757 23.9998C24.788 23.9998 27.5349 22.6151 28.8918 20.0767L26.3435 18.791C25.483 20.2086 23.8283 20.9998 22.008 20.9998C19.559 20.9998 17.7057 19.714 17.2755 17.2415H29.4544C29.4875 16.747 29.5206 16.2855 29.5206 15.8569C29.5537 11.0767 26.2442 7.94482 21.8757 7.94482ZM17.3417 14.6701C17.805 12.1316 19.559 10.9119 21.9419 10.9119C24.2916 10.9119 26.0456 12.2965 26.3766 14.6701H17.3417Z" fill="#002832"></path><path d="M50.9329 7.94482C49.3775 7.94482 46.9947 8.50526 45.704 11.1426C44.7773 9.13164 42.924 7.94482 40.7066 7.94482C38.6217 7.94482 36.5367 9.0657 35.9079 10.8459V8.34043H32.6977V23.5712H35.9079V15.3954C35.9079 12.2965 37.9267 11.0108 39.9455 11.0108C41.8319 11.0108 43.1557 12.5602 43.1557 15.0327V23.5712H46.399V15.9558C46.399 12.758 47.7227 10.9778 50.238 11.0108C52.2898 11.0108 53.6136 12.5602 53.6136 15.0327V23.5712H56.8569V14.8679C56.8238 10.5163 54.7388 7.94482 50.9329 7.94482Z" fill="#002832"></path><path d="M63.9723 8.34082H60.7621V23.5716H63.9723V8.34082Z" fill="#002832"></path><path d="M98.6887 10.6152C97.6959 8.90087 95.6109 7.94482 93.3935 7.94482C89.0581 7.94482 85.8148 11.4064 85.8148 15.9558C85.8148 20.6701 89.2567 23.9998 93.2612 23.9998C95.6109 23.9998 97.729 22.78 98.6887 21.0327V23.6042H101.899V8.34043H98.6887V10.6152ZM93.8238 20.9668C91.1431 20.9668 89.0581 18.6921 89.0581 15.9558C89.0581 13.2525 91.11 10.9778 93.7576 10.9778C96.2066 10.9778 98.6887 13.0217 98.6887 15.9558C98.6556 18.8239 96.3721 20.9668 93.8238 20.9668Z" fill="#002832"></path><path d="M79.4607 2.67033V23.5714H82.6709V0H79.4607V2.67033Z" fill="#002832"></path><path d="M110.338 11.0108H113.615V8.3405H110.338V2.63721H107.128V8.3405H104.348V11.0108H107.128V23.5713H110.338V20.7031V11.0108Z" fill="#002832"></path><path d="M72.8086 2.93405H72.61V0.065918H69.5984V8.27471H66.8515V10.945H69.5984V23.5714H72.8086V10.945H76.085V8.27471H72.8086V2.93405Z" fill="#002832"></path><path d="M72.8086 2.93405H75.8202V0.065918H72.61V2.93405H72.8086Z" fill="#002832"></path><path d="M148.099 20.7031H110.338V23.5713H148.099V20.7031Z" fill="#002832"></path></g><defs><clipPath id="clip0_1034_14391"><rect width="148" height="24" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$5 = [
  _hoisted_2$9
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_4$5);
}
const SmallLogo = { render: render$a };
const _hoisted_1$8 = {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M17.4963 1C18.3268 1 19 1.67277 19 2.50371V17.4963C19 18.3268 18.3272 19 17.4963 19H2.50371C1.67323 19 1 18.3272 1 17.4963V2.50371C1 1.67323 1.67277 1 2.50371 1H17.4963ZM13.1666 7.75C11.8985 7.75 11.0279 8.30635 10.6345 8.95618L10.5622 9.08725V7.8625H8.12469V16.4875H10.7497V12.3096C10.7497 10.9094 11.2653 10.0188 12.5047 10.0188C13.3513 10.0188 13.7112 10.7602 13.7467 12.0837L13.7497 12.3096V16.4875H16.3747V11.7239C16.3747 9.15175 15.7593 7.75 13.1666 7.75ZM6.24969 7.75H3.62469V16.375H6.24969V7.75ZM4.9375 3.25C4.00563 3.25 3.25 4.00563 3.25 4.9375C3.25 5.86937 4.00563 6.625 4.9375 6.625C5.86937 6.625 6.625 5.86937 6.625 4.9375C6.625 4.00563 5.86937 3.25 4.9375 3.25Z",
  fill: "#577578"
}, null, -1);
const _hoisted_3$6 = [
  _hoisted_2$8
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$6);
}
const LinkedinLogo = { render: render$9 };
const _hoisted_1$7 = {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M8.82497 0H11.1738C12.849 0.00379146 13.2337 0.0185456 14.1226 0.059103C15.187 0.107653 15.914 0.276724 16.5501 0.523958C17.2077 0.77949 17.7654 1.12144 18.3214 1.6774C18.8774 2.2334 19.2193 2.79111 19.4749 3.44873C19.7221 4.08484 19.8912 4.81182 19.9397 5.87626C19.9868 6.90737 19.9991 7.25998 19.9999 9.7357V10.2633C19.9991 12.739 19.9868 13.0916 19.9397 14.1227C19.8912 15.1871 19.7221 15.9141 19.4749 16.5502C19.2193 17.2079 18.8774 17.7656 18.3214 18.3216C17.7654 18.8775 17.2077 19.2195 16.5501 19.475C15.914 19.7222 15.187 19.8913 14.1226 19.9399C13.0915 19.9869 12.7389 19.9992 10.2632 20H9.73558C7.25986 19.9992 6.90725 19.9869 5.87614 19.9399C4.8117 19.8913 4.08472 19.7222 3.44861 19.475C2.79099 19.2195 2.23328 18.8775 1.67728 18.3216C1.12132 17.7656 0.779368 17.2079 0.523836 16.5502C0.276601 15.9141 0.107531 15.1871 0.0589809 14.1227C0.0184235 13.2338 0.00366939 12.8492 -0.00012207 11.1739V8.82509C0.00366939 7.1498 0.0184235 6.76515 0.0589809 5.87626C0.107531 4.81182 0.276601 4.08484 0.523836 3.44873C0.779368 2.79111 1.12132 2.2334 1.67728 1.6774C2.23328 1.12144 2.79099 0.77949 3.44861 0.523958C4.08472 0.276724 4.8117 0.107653 5.87614 0.059103C6.76503 0.0185456 7.14968 0.00379146 8.82497 0H11.1738H8.82497ZM10.7329 1.80115H9.26582C7.25845 1.80323 6.90733 1.81583 5.95827 1.85913C4.98322 1.90359 4.4537 2.06651 4.10131 2.20346C3.63451 2.38488 3.30137 2.60159 2.95144 2.95156C2.60147 3.30149 2.38476 3.63463 2.20334 4.10143C2.06639 4.45382 1.90347 4.98335 1.85901 5.95839C1.81571 6.90746 1.80311 7.25857 1.80103 9.26594V10.733C1.80311 12.7404 1.81571 13.0915 1.85901 14.0406C1.90347 15.0156 2.06639 15.5451 2.20334 15.8975C2.38476 16.3643 2.60151 16.6975 2.95144 17.0474C3.30137 17.3974 3.63451 17.6141 4.10131 17.7955C4.4537 17.9324 4.98322 18.0954 5.95827 18.1398C7.01267 18.1879 7.3289 18.1981 9.99937 18.1981C12.6698 18.1981 12.9861 18.1879 14.0404 18.1398C15.0155 18.0954 15.545 17.9324 15.8974 17.7955C16.3642 17.6141 16.6973 17.3974 17.0473 17.0474C17.3972 16.6975 17.6139 16.3643 17.7954 15.8975C17.9323 15.5451 18.0952 15.0156 18.1397 14.0406C18.1878 12.986 18.198 12.6697 18.198 9.99949C18.198 7.32922 18.1878 7.01291 18.1397 5.95839C18.0952 4.98335 17.9323 4.45382 17.7954 4.10143C17.6139 3.63463 17.3972 3.30149 17.0473 2.95156C16.6973 2.60159 16.3642 2.38488 15.8974 2.20346C15.545 2.06651 15.0155 1.90359 14.0404 1.85913C13.0914 1.81583 12.7403 1.80323 10.7329 1.80115ZM9.99957 4.99939C12.7611 4.99939 14.9998 7.23807 14.9998 9.99969C14.9998 12.7613 12.7611 14.9999 9.99957 14.9999C7.23795 14.9999 4.99927 12.7613 4.99927 9.99969C4.99927 7.23807 7.23795 4.99939 9.99957 4.99939ZM9.99924 6.75354C8.2066 6.75354 6.75342 8.20673 6.75342 9.99936C6.75342 11.792 8.2066 13.2451 9.99924 13.2451C11.7918 13.2451 13.245 11.792 13.245 9.99936C13.245 8.20673 11.7918 6.75354 9.99924 6.75354ZM15.4162 3.33252C16.1066 3.33252 16.6663 3.89221 16.6663 4.58261C16.6663 5.27301 16.1066 5.83266 15.4162 5.83266C14.7258 5.83266 14.1661 5.27301 14.1661 4.58261C14.1661 3.89221 14.7258 3.33252 15.4162 3.33252Z",
  fill: "#577578"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$7
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_3$5);
}
const InstagramLogo = { render: render$8 };
const _hoisted_1$6 = {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$6 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_1034_14415)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.50016C5.8579 2.50016 2.50004 5.85803 2.50004 10.0002C2.50004 14.1423 5.8579 17.5002 10 17.5002C14.1422 17.5002 17.5 14.1423 17.5 10.0002C17.5 5.85803 14.1422 2.50016 10 2.50016ZM0.833374 10.0002C0.833374 4.93755 4.93743 0.833496 10 0.833496C15.0626 0.833496 19.1667 4.93755 19.1667 10.0002C19.1667 15.0628 15.0626 19.1668 10 19.1668C4.93743 19.1668 0.833374 15.0628 0.833374 10.0002Z" fill="#577578"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.64429 1.61712C7.01695 1.34705 7.53799 1.43021 7.80807 1.80288C9.13807 3.6381 10.182 5.201 11.0524 6.7872C12.737 6.08299 14.1236 5.08562 15.3083 3.70028C15.6074 3.3505 16.1335 3.30944 16.4832 3.60856C16.833 3.90768 16.8741 4.43372 16.575 4.7835C15.2207 6.36716 13.6487 7.48956 11.8138 8.27508C11.8679 8.38896 11.9213 8.5034 11.9741 8.6185C12.0987 8.89028 12.2196 9.1653 12.3372 9.44486C14.1038 9.19061 16.1551 9.31455 18.339 9.89484C18.7838 10.013 19.0485 10.4694 18.9303 10.9142C18.8122 11.359 18.3558 11.6238 17.911 11.5056C16.0721 11.017 14.3892 10.8964 12.9592 11.0468C13.552 12.7019 14.0792 14.5677 14.6349 16.8624C14.7432 17.3097 14.4684 17.7602 14.0211 17.8685C13.5738 17.9768 13.1234 17.702 13.015 17.2547C12.4389 14.8756 11.9032 13.0041 11.304 11.3711C11.1844 11.4069 11.0677 11.4451 10.954 11.4854C9.01389 12.1775 7.11578 13.6567 5.15692 16.4458C4.8924 16.8225 4.37265 16.9134 3.99602 16.6488C3.61939 16.3843 3.5285 15.8646 3.79301 15.4879C5.88386 12.5108 8.03548 10.7567 10.3951 9.9153L10.3962 9.9149C10.4909 9.88128 10.587 9.849 10.6843 9.8181C10.6106 9.64802 10.5356 9.47985 10.4591 9.3132C10.3877 9.15738 10.3149 9.00272 10.2407 8.8489C7.8761 9.57611 5.11978 9.87281 1.8949 9.94998C1.43479 9.96099 1.05288 9.59693 1.04187 9.13682C1.03086 8.67672 1.39492 8.2948 1.85503 8.28379C4.88217 8.21136 7.37126 7.94161 9.45515 7.34378C8.65858 5.92507 7.69683 4.48959 6.45853 2.7809C6.18846 2.40824 6.27162 1.88719 6.64429 1.61712Z" fill="#577578"></path></g><defs><clipPath id="clip0_1034_14415"><rect width="20" height="20" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$4 = [
  _hoisted_2$6
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_4$4);
}
const DribbleLogo = { render: render$7 };
const _hoisted_1$5 = {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  d: "M15.0775 14.0816C14.0571 14.898 12.6285 15.5102 11.2 15.5102C7.93465 15.5102 5.68975 13.0612 5.68975 9.79592C5.68975 6.53061 7.93465 4.28571 11.2 4.28571C12.6285 4.28571 14.0571 4.69387 15.0775 5.71428L15.6898 6.32653L18.9551 3.2653L18.1387 2.65306C16.302 1.0204 13.853 0 11.2 0C5.48567 0 1.19995 4.28571 1.19995 10C1.19995 15.7143 5.48567 20 11.2 20C13.853 20 16.302 18.9796 18.1387 17.3469L18.9551 16.7347L15.6898 13.4694L15.0775 14.0816Z",
  fill: "#577578"
}, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M10.9959 13.2655C12.7993 13.2655 14.2612 11.8036 14.2612 10.0002C14.2612 8.19679 12.7993 6.73486 10.9959 6.73486C9.19252 6.73486 7.73059 8.19679 7.73059 10.0002C7.73059 11.8036 9.19252 13.2655 10.9959 13.2655Z",
  fill: "#577578"
}, null, -1);
const _hoisted_4$3 = [
  _hoisted_2$5,
  _hoisted_3$4
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_4$3);
}
const CLogo = { render: render$6 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheLayoutFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const context = usePageContext();
    const socials = [
      {
        logo: LinkedinLogo,
        url: "https://www.linkedin.com/company/semiflat/"
      },
      {
        logo: InstagramLogo,
        url: "https://www.instagram.com/semiflat_/"
      },
      {
        logo: DribbleLogo,
        url: "https://dribbble.com/semiflat"
      },
      {
        logo: CLogo,
        url: "https://clutch.co/profile/semiflat"
      }
    ];
    const useCase = [
      {
        label: "SaaS solutions",
        url: "/work"
      },
      {
        label: "Workflow builder",
        url: "/work"
      },
      {
        label: "Data analytics",
        url: "/work"
      },
      {
        label: "CRM applications",
        url: "/work"
      }
    ];
    const legal = [
      {
        label: "Privacy policy",
        url: "/privacy-policy"
      },
      {
        label: "Terms & conditions",
        url: "#"
      }
    ];
    const services = [
      {
        label: "Workshops & analysis",
        url: `/services/${ServiceTypes.workshops}`
      },
      {
        label: "User research",
        url: `/services/${ServiceTypes.research}`
      },
      {
        label: "User experience design",
        url: `/services/${ServiceTypes.experience}`
      },
      {
        label: "User interface design",
        url: `/services/${ServiceTypes.interface}`
      },
      {
        label: "Design system",
        url: `/services/${ServiceTypes.design}`
      },
      {
        label: "Continous support",
        url: `/services/${ServiceTypes.support}`
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-a2f6ab0a><div class="page-content pt-28 pb-20 md:pb-[12.5rem] md:mt-12 relative overflow-y-clip" data-v-a2f6ab0a><div class="${ssrRenderClass([[(_b = (_a = unref(context).pageProps) == null ? void 0 : _a.pageShell) == null ? void 0 : _b.hide], "bg-gradient bg-gradient-left bg-turquoise-100 rounded-full absolute -left-40 w-[43.75rem] h-[43.75rem] blur-[240px] top-6 md:-left-100 md:top-70"])}" data-v-a2f6ab0a></div><div class="${ssrRenderClass([[(_d = (_c = unref(context).pageProps) == null ? void 0 : _c.pageShell) == null ? void 0 : _d.hide], "bg-gradient bg-gradient-right bg-turquoise-200 rounded-full absolute w-[18.75rem] h-[18.75rem] bottom-46 -right-16 md:-bottom-20 md:left-70 blur-[200px]"])}" data-v-a2f6ab0a></div><div class="relative z-10 md:flex md:items-start md:justify-between" data-v-a2f6ab0a><div data-v-a2f6ab0a>`);
      _push(ssrRenderComponent(unref(SmallLogo), null, null, _parent));
      _push(`<p class="mt-4 text-blue-300" data-v-a2f6ab0a>Copyright \xA9 2023. All rights reserved</p><div class="flex gap-8 mt-10" data-v-a2f6ab0a><!--[-->`);
      ssrRenderList(socials.filter((x) => x.url), (social, i) => {
        _push(`<div class="opacity-70 transition-all duration-400 hover:opacity-100" data-v-a2f6ab0a><a${ssrRenderAttr("href", social.url)} target="_blank" data-v-a2f6ab0a>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(social.logo), null, null), _parent);
        _push(`</a></div>`);
      });
      _push(`<!--]--></div></div><div data-v-a2f6ab0a><div class="grid gap-4 mt-12 md:mt-0" data-v-a2f6ab0a><h3 class="text-blue-300 font-semibold" data-v-a2f6ab0a>Use cases</h3><ul class="grid gap-2" data-v-a2f6ab0a><!--[-->`);
      ssrRenderList(useCase, (link) => {
        _push(`<li class="text-blue-200 cursor-pointer inline-block" data-v-a2f6ab0a><a${ssrRenderAttr("href", link.url)} data-v-a2f6ab0a>${ssrInterpolate(link.label)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div class="grid gap-4 mt-12" data-v-a2f6ab0a><h3 class="text-blue-300 font-semibold" data-v-a2f6ab0a>Legal</h3><ul class="grid gap-2" data-v-a2f6ab0a><!--[-->`);
      ssrRenderList(legal, (link) => {
        _push(`<li class="text-blue-200 cursor-pointer inline-block" data-v-a2f6ab0a><a${ssrRenderAttr("href", link.url)} data-v-a2f6ab0a>${ssrInterpolate(link.label)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="grid gap-4 mt-12 md:mt-0" data-v-a2f6ab0a><h3 class="text-blue-300 font-semibold" data-v-a2f6ab0a>Services</h3><ul class="grid gap-2" data-v-a2f6ab0a><!--[-->`);
      ssrRenderList(services, (link) => {
        _push(`<li class="text-blue-200 cursor-pointer inline-block" data-v-a2f6ab0a><a${ssrRenderAttr("href", link.url)} data-v-a2f6ab0a>${ssrInterpolate(link.label)}</a></li>`);
      });
      _push(`<!--]--></ul></div></div></div></footer>`);
    };
  }
});
const TheLayoutFooter_vue_vue_type_style_index_0_scoped_a2f6ab0a_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layout/TheLayoutFooter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-a2f6ab0a"]]);
const _hoisted_1$4 = {
  width: "148",
  height: "24",
  viewBox: "0 0 148 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_1101_6336)"><path d="M7.87657 14.8351L5.55993 14.2747C4.60018 14.0439 3.73971 13.5164 3.73971 12.5934C3.73971 11.5384 4.66637 10.6813 5.99016 10.6813C7.14848 10.6813 8.27371 11.4395 8.27371 12.5274H11.3515C11.3515 9.32962 8.53846 7.94501 5.92397 7.94501C2.74687 7.94501 0.496422 9.98896 0.496422 12.4945C0.496422 14.7362 1.82022 16.2197 4.66637 16.978L6.71825 17.4725C7.87657 17.7362 8.67084 18.2637 8.67084 19.2527C8.67084 20.4065 7.57871 21.2637 5.82469 21.2637C4.10376 21.2637 3.01163 20.2087 3.01163 19.0219H0C0.0661896 22.2197 2.97853 23.9999 5.82469 23.9999C8.9687 23.9999 11.8479 22.2527 11.8479 19.3186C11.8479 17.6703 11.153 15.6593 7.87657 14.8351Z" fill="black"></path><path d="M21.8765 7.94501C17.5079 7.94501 13.9668 11.0769 13.9668 15.923C13.9668 20.7692 17.4418 23.9999 21.8765 23.9999C24.7888 23.9999 27.5357 22.6153 28.8926 20.0769L26.3443 18.7912C25.4838 20.2087 23.8291 20.9999 22.0088 20.9999C19.5598 20.9999 17.7065 19.7142 17.2763 17.2417H29.4552C29.4883 16.7472 29.5214 16.2857 29.5214 15.8571C29.5545 11.0769 26.245 7.94501 21.8765 7.94501ZM17.3425 14.6703C17.8058 12.1318 19.5598 10.912 21.9426 10.912C24.2924 10.912 26.0464 12.2967 26.3774 14.6703H17.3425Z" fill="black"></path><path d="M50.9325 7.94501C49.3771 7.94501 46.9942 8.50545 45.7035 11.1428C44.7769 9.13182 42.9236 7.94501 40.7062 7.94501C38.6212 7.94501 36.5363 9.06589 35.9075 10.8461V8.34061H32.6973V23.5714H35.9075V15.3956C35.9075 12.2967 37.9262 11.0109 39.945 11.0109C41.8314 11.0109 43.1552 12.5604 43.1552 15.0329V23.5714H46.3985V15.956C46.3985 12.7582 47.7223 10.978 50.2375 11.0109C52.2894 11.0109 53.6132 12.5604 53.6132 15.0329V23.5714H56.8565V14.8681C56.8234 10.5164 54.7384 7.94501 50.9325 7.94501Z" fill="black"></path><path d="M63.9719 8.3407H60.7617V23.5715H63.9719V8.3407Z" fill="black"></path><path d="M98.6883 10.6153C97.6955 8.90105 95.6105 7.94501 93.3932 7.94501C89.0578 7.94501 85.8145 11.4065 85.8145 15.956C85.8145 20.6703 89.2563 23.9999 93.2608 23.9999C95.6105 23.9999 97.7286 22.7802 98.6883 21.0329V23.6043H101.899V8.34061H98.6883V10.6153ZM93.8234 20.967C91.1427 20.967 89.0578 18.6923 89.0578 15.956C89.0578 13.2527 91.1096 10.978 93.7572 10.978C96.2062 10.978 98.6883 13.0219 98.6883 15.956C98.6553 18.8241 96.3717 20.967 93.8234 20.967Z" fill="black"></path><path d="M79.4609 2.67033V23.5714H82.6711V0H79.4609V2.67033Z" fill="black"></path><path d="M110.338 11.011H113.614V8.34069H110.338V2.63739H107.128V8.34069H104.348V11.011H107.128V23.5715H110.338V20.7033V11.011Z" fill="black"></path><path d="M72.8086 2.93405H72.6101V0.065918H69.5984V8.27471H66.8516V10.945H69.5984V23.5714H72.8086V10.945H76.085V8.27471H72.8086V2.93405Z" fill="black"></path><path d="M72.8086 2.93405H75.8203V0.065918H72.6101V2.93405H72.8086Z" fill="black"></path><path d="M148.099 20.7033H110.338V23.5714H148.099V20.7033Z" fill="black"></path></g><defs><clipPath id="clip0_1101_6336"><rect width="148" height="24" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$2 = [
  _hoisted_2$4
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_4$2);
}
const LogoDesktop = { render: render$5 };
const _hoisted_1$3 = {
  width: "44",
  height: "20",
  viewBox: "0 0 44 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M0 15.7286H2.55975C2.55975 16.7618 3.48496 17.6716 4.98072 17.6716C6.4919 17.6716 7.41712 16.916 7.41712 15.9291C7.41712 15.0655 6.70779 14.6029 5.73631 14.3871L3.96299 13.9707C1.5266 13.3231 0.400924 12.0586 0.400924 10.1157C0.400924 7.98768 2.34387 6.21436 5.05782 6.21436C7.30917 6.21436 9.71473 7.38629 9.71473 10.1465H7.07787C7.07787 9.19045 6.09098 8.54281 5.11951 8.54281C3.96299 8.54281 3.17656 9.2984 3.17656 10.1928C3.17656 11.01 3.93215 11.4572 4.74942 11.6577L6.73863 12.1357C9.5451 12.845 10.1619 14.5721 10.1619 15.9908C10.1619 18.4888 7.69468 20 4.99614 20C2.55975 20 0.0462606 18.4888 0 15.7286Z",
  fill: "black"
}, null, -1);
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M17.4864 17.1935V8.8512H20.2158V6.55359H17.4864V2.46723H20.2158V0H14.7416V6.55359H12.3823V8.8512H14.7416V19.6608H43.6853V17.1935H17.4864Z",
  fill: "black"
}, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$3,
  _hoisted_3$3
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_4$1);
}
const LogoMobile = { render: render$4 };
const _hoisted_1$2 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M10 13.3333H30",
  stroke: "black",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M10 20H30",
  stroke: "black",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("path", {
  d: "M10 26.6667H30",
  stroke: "black",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_5 = [
  _hoisted_2$2,
  _hoisted_3$2,
  _hoisted_4
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_5);
}
const HamburgerMenu = { render: render$3 };
const _hoisted_1$1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M10 7L15 12L10 17",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_3$1);
}
const ChevronRight = { render: render$2 };
const _hoisted_1 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M20 20.0001L11.6667 11.6667M20 20.0001L28.3333 28.3334M20 20.0001L28.3333 11.6667M20 20.0001L11.6667 28.3334",
  stroke: "black",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}
const Close = { render: render$1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheLayoutNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      {
        label: "Home",
        path: "/",
        exact: true
      },
      {
        label: "About",
        path: "/about"
      },
      {
        label: "Work",
        path: "/work"
      },
      {
        label: "Services",
        path: "/services"
      },
      {
        label: "Culture",
        path: "/culture"
      }
    ];
    const context = usePageContext();
    const openMenu = ref(false);
    onMounted(() => {
      const navbar = document.querySelector(".mobile-nav");
      window.onscroll = () => {
        if (window.pageYOffset > 0) {
          navbar == null ? void 0 : navbar.classList.add("scrolled");
        } else {
          navbar == null ? void 0 : navbar.classList.remove("scrolled");
        }
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_AppButton = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><nav class="relative md:hidden"><div class="px-6 flex fixed -top-1px w-full items-center justify-between h-3.5rem z-20 duration-500 mobile-nav">`);
      _push(ssrRenderComponent(unref(LogoMobile), { class: "" }, null, _parent));
      _push(ssrRenderComponent(unref(HamburgerMenu), {
        class: "-mr-2",
        onClick: ($event) => openMenu.value = true
      }, null, _parent));
      _push(`</div>`);
      if (unref(openMenu)) {
        _push(`<div class="fixed h-200vh top-0 bg-white w-full z-100"><div class="px-6 flex items-center justify-between h-3.5rem relative z-10">`);
        _push(ssrRenderComponent(unref(LogoMobile), { class: "" }, null, _parent));
        _push(ssrRenderComponent(unref(Close), {
          class: "-mr-2",
          onClick: ($event) => openMenu.value = false
        }, null, _parent));
        _push(`</div><div class="safari-fix bg-gradient-left bg-turquoise-100/80 rounded-full blur-[120px] h-[28.125rem] w-[28.125rem] absolute -left-50 -top-18 md:w-[43.75rem] md:h-[43.75rem] md:-left-90 md:top-26 md:blur-[240px]"></div><div class="safari-fix bg-gradient-right bg-turquoise-200 rounded-full blur-[120px] h-[12.5rem] w-[12.5rem] absolute -right-15 -top-17 md:h-[18.75rem] md:w-[18.75rem] md:blur-200px"></div><ul class="text-sm flex flex-col px-6 text-primary font-semibold divide-y divide-[#BCDCDC] relative z-10 mt-18"><!--[-->`);
        ssrRenderList(links, (link) => {
          _push(`<li><a${ssrRenderAttr("href", link.path)} class="flex justify-between py-4">${ssrInterpolate(link.label)} `);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(ChevronRight)), { class: "text-primary" }, null), _parent);
          _push(`</a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav><nav class="items-center page-content justify-between h-3.5rem md:h-16 relative !hidden md:!flex"><a href="/">`);
      _push(ssrRenderComponent(unref(LogoDesktop), { class: "hidden md:block" }, null, _parent));
      _push(`</a><ul class="gap-6 text-sm hidden md:flex text-primary font-semibold"><!--[-->`);
      ssrRenderList(links, (link) => {
        var _a2, _b2, _c, _d;
        _push(`<li><a${ssrRenderAttr("href", link.path)} class="${ssrRenderClass([{
          "bg-turquoise-100": link.exact ? unref(context).urlPathname === link.path : unref(context).urlPathname.startsWith(link.path),
          [(_b2 = (_a2 = unref(context).pageProps) == null ? void 0 : _a2.pageShell) == null ? void 0 : _b2.navHover]: (_d = (_c = unref(context).pageProps) == null ? void 0 : _c.pageShell) == null ? void 0 : _d.navHover
        }, "cursor-pointer py-1.5 px-4 rounded-[8rem] transition-colors duration-500 hover:bg-turquoise-100/50"])}">${ssrInterpolate(link.label)}</a></li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_AppButton, {
        class: ["!hidden md:!inline-flex", [(_b = (_a = unref(context).pageProps) == null ? void 0 : _a.pageShell) == null ? void 0 : _b.bgColor]],
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
      _push(`</nav></div>`);
    };
  }
});
const TheLayoutNavbar_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/layout/TheLayoutNavbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const aos = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageShell",
  __ssrInlineRender: true,
  setup(__props) {
    onMounted(async () => {
      const sections = document.querySelectorAll(".section");
      sections.forEach((section, i) => {
        if (i > 1) {
          section.setAttribute("data-aos", "fade-up");
          section.setAttribute("data-aos-duration", "500");
        }
      });
      AOS.init({ once: true });
    });
    const context = usePageContext();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_TheLayoutNavbar = _sfc_main$1;
      const _component_TheLayoutFooter = __unplugin_components_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout relative" }, _attrs))} data-v-45aad80d><div class="page-content" data-v-45aad80d><div class="${ssrRenderClass([[(_b = (_a = unref(context).pageProps) == null ? void 0 : _a.pageShell) == null ? void 0 : _b.bigGradient], "safari-fix bg-gradient-left bg-turquoise-100/80 rounded-full blur-[120px] h-[28.125rem] w-[28.125rem] absolute -left-50 -top-18 md:w-[43.75rem] md:h-[43.75rem] md:-left-90 md:top-26 md:blur-[240px]"])}" data-v-45aad80d></div><div class="${ssrRenderClass([[(_d = (_c = unref(context).pageProps) == null ? void 0 : _c.pageShell) == null ? void 0 : _d.smallGradient], "safari-fix bg-gradient-right bg-turquoise-200 rounded-full blur-[120px] h-[12.5rem] w-[12.5rem] absolute right-0 -top-17 md:h-[18.75rem] md:w-[18.75rem] md:blur-200px"])}" data-v-45aad80d></div></div>`);
      _push(ssrRenderComponent(_component_TheLayoutNavbar, null, null, _parent));
      _push(`<div class="content pt-3.5rem md:pt-0" data-v-45aad80d>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      _push(ssrRenderComponent(_component_TheLayoutFooter, {
        "data-aos": "fade-up",
        "data-aos-duration": "500"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const PageShell_vue_vue_type_style_index_0_scoped_45aad80d_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/renderer/PageShell.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PageShell = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-45aad80d"]]);
const tailwind = "";
const __uno = "";
const main = "";
const messageImports = /* @__PURE__ */ Object.assign({ "./translations/en.yml": () => import("./en.04236f37.js"), "./translations/pl.yml": () => import("./pl.91a94dd1.js") });
const loadedLocales = {};
let locale = localeDefault;
function importLocale(locale2) {
  const [, importLocale2] = Object.entries(messageImports).find(
    ([key]) => key.includes(`/${locale2}.`)
  ) || [];
  return importLocale2 && importLocale2();
}
async function loadAsyncLanguage(selectedLocale = localeDefault) {
  var _a, _b;
  try {
    if ((_a = loadedLocales[selectedLocale]) == null ? void 0 : _a.translation) {
      (_b = loadedLocales[selectedLocale]) == null ? void 0 : _b.translation;
    }
    const result = await importLocale(selectedLocale);
    const messages = result.default || result;
    loadedLocales[selectedLocale] = { translation: messages };
    locale = selectedLocale;
    return messages;
  } catch (error) {
    console.error(error);
  }
}
async function initI18n() {
  await i18next.init({
    lng: locale,
    debug: false,
    resources: loadedLocales
  });
}
async function createApp(pageContext) {
  const { Page, pageProps } = pageContext;
  const PageWithLayout = defineComponent({
    render() {
      return h(
        PageShell,
        {},
        {
          default() {
            return h(Page, pageProps || {});
          }
        }
      );
    }
  });
  await loadAsyncLanguage(pageContext.locale);
  await initI18n();
  const app = createSSRApp(PageWithLayout);
  setPageContext(app, pageContext);
  Object.values(
    /* @__PURE__ */ Object.assign({ "/src/modules/swiper.ts": __vite_glob_0_0, "/src/modules/vue-toastification.ts": __vite_glob_0_1 })
  ).forEach((i) => {
    var _a;
    return (_a = i.install) == null ? void 0 : _a.call(i, { app });
  });
  return app;
}
const faviconUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFfSURBVHgB7ZY/S0JhFMYfIxoUrkJL6qIWFFRDZkUoNphYItFUefPWEAQSQvQFCpoiaAhJigjJjxA5BP3ZErG85q00osgvcL1ES4MWd2vroHBB3t943nMefpx3Obrvr2odGtIGjWECTIAJMIHWEfAFgugwmMB1dpHmmrqBgH8SVxdp0kxTBaxWC1zDTtIMSaAoPcI/FYKjtx/z/BI+KhW1HgjOoPAg4fL6BtOhWUokTSAsLIMzcjg5SuDpuYSd3T21HlkMw2Qywm6zQYjwlEi0U5oV5RMGvR4Wsxli7ha1ek2tC78CydMUHHYb+IU5SiRtA6nkMXJ3eQwMjaBv0IlMJotGIQlYLWYU81mUJREe9zhWVqNolH9/QVVR4Pb6EFuLYsLrgSzL4DjuT0+p/IL4wSEo6Cg34dl5Gptb23h9e8fYqAuJ+D56uh3qW2x9A/diAVR07CiFxjABJsAEmMAPmkpeKwtgtFsAAAAASUVORK5CYII=";
const passToClient = ["pageProps", "urlPathname", "locale", "routeParams"];
async function render(pageContext) {
  const app = await createApp(pageContext);
  const { documentProps } = pageContext.exports;
  const title = documentProps && documentProps.title || "Semiflat is a full-service design agency specialized in solving complex problems through design. ";
  const desc = documentProps && documentProps.description || "We design tools that help millions of professionals be more effective at their job.";
  const pipe = isWorker() ? (writable) => {
    pipeToWebWritable(app, {}, writable);
  } : (writable) => {
    pipeToNodeWritable(app, {}, writable);
  };
  stampPipe(pipe, isWorker() ? "web-stream" : "node-stream");
  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>html{opacity:0; transition: opacity 0.375s ease-in;}</style>
        <meta charset="UTF-8" />
        <link rel="icon" href="${faviconUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${pipe}</div>
        <style>html{opacity:1}</style>
      </body>
    </html>`;
  return {
    documentHtml,
    pageContext: {
      enableEagerStreaming: true,
      redirectTo: pageContext.redirectTo
    }
  };
}
function isWorker() {
  return typeof WebSocketPair !== "undefined" || typeof caches !== "undefined";
}
export {
  passToClient,
  render
};
