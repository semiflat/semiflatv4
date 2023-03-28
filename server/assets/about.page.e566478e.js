import { _ as __unplugin_components_5 } from "./chunk-c5742e63.js";
import { defineComponent, mergeProps, useSSRContext, openBlock, createElementBlock, createStaticVNode, ref, onMounted, unref, withCtx, createTextVNode, createElementVNode, computed, createVNode, resolveDynamicComponent, createBlock, toDisplayString, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderVNode, ssrRenderClass } from "vue/server-renderer";
import { N as NicImage, E as EwaImage, A as ApoloniaImage, C as ChrystianImage, P as PaulinaImage, a as NataliaImage, M as MagdaImage, B as BarryImage, b as MaciejImage, S as SarahImage, c as ArekImage, d as MartynaImage, K as KubaImage, e as MarcinImage, f as PatrycjaImage, _ as _sfc_main$7 } from "./chunk-1c5e7c36.js";
import { _ as __unplugin_components_0, a as _export_sfc } from "./chunk-5a6b5315.js";
import { g as gsapWithCSS } from "./chunk-ea976db9.js";
import { b as breakpointsConst, _ as __unplugin_components_0$1 } from "./chunk-91954a89.js";
import { SwiperSlide } from "swiper/vue";
import { useBreakpoints } from "@vueuse/core";
import { T as TheAboutComponent, S as StrokeTop, a as StrokeLeft, _ as _sfc_main$8 } from "./chunk-1cc8abe4.js";
import { F as FlawlessIcon } from "./chunk-11ab4aad.js";
import { u as useBreakpoints$1 } from "./chunk-37b144d7.js";
import { B as BackgroundMobileLeft, a as BackgroundDesktop } from "./chunk-58947999.js";
import "swiper";
import "vanilla-tilt";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "TheAboutEmployeesSection",
  __ssrInlineRender: true,
  setup(__props) {
    const employees = [
      {
        img: NicImage,
        name: "Nic",
        position: "Founder"
      },
      {
        img: EwaImage,
        name: "Ewa",
        position: "Scrum Master"
      },
      {
        img: ApoloniaImage,
        name: "Apolonia",
        position: "Senior Product Designer"
      },
      {
        img: ChrystianImage,
        name: "Chrystian",
        position: "Senior UX Designer"
      },
      {
        img: PaulinaImage,
        name: "Paulina",
        position: "Senior Product Designer"
      },
      {
        img: NataliaImage,
        name: "Natalia",
        position: "Senior UI Designer"
      },
      {
        img: MagdaImage,
        name: "Magda",
        position: "Senior Product Designer"
      },
      {
        img: BarryImage,
        name: "Barry",
        position: "Product Designer"
      },
      {
        img: MaciejImage,
        name: "Maciej",
        position: "Product Designer"
      },
      {
        img: SarahImage,
        name: "Sarah",
        position: "Account Manager"
      },
      {
        img: ArekImage,
        name: "Arek",
        position: "Product Designer"
      },
      {
        img: MartynaImage,
        name: "Martyna",
        position: "Senior UI Designer"
      },
      {
        img: KubaImage,
        name: "Kuba",
        position: "Senior Product Designer"
      },
      {
        img: MarcinImage,
        name: "Marcin",
        position: "Product Designer"
      },
      {
        img: PatrycjaImage,
        name: "Patrycja",
        position: "Product Designer"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-[4rem] md:mt-[10rem]" }, _attrs))}><h2 class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]"> Meet the team working on your product_ </h2><div class="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-4 md:gap-y-[3.5rem] gap-x-[3.5rem]"><!--[-->`);
      ssrRenderList(employees, (employee, i) => {
        _push(`<div class="mx-auto">`);
        if (employee.img) {
          _push(`<img${ssrRenderAttr("src", employee.img)} class="w-[9.437rem] md:w-[14.625rem] h-[9.437rem] md:h-[14.625rem] rounded-4 object-cover bg-[#C4C4C4]">`);
        } else {
          _push(`<div class="w-[9.437rem] md:w-[14.625rem] h-[9.437rem] md:h-[14.625rem] rounded-4 border border-[#BCDCDC]"></div>`);
        }
        _push(`<p class="leading-[150%] text-blue-300 font-semibold mt-4">${ssrInterpolate(employee.name)}</p><p class="text-blue-200 leading-[150%] mt-1">${ssrInterpolate(employee.position)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/TheAboutEmployeesSection.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _hoisted_1$c = {
  width: "346",
  height: "380",
  viewBox: "0 0 346 380",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$c = /* @__PURE__ */ createStaticVNode('<defs><filter id="glow"><feGaussianBlur in="SourceGraphic" stdDeviation="1"></feGaussianBlur></filter></defs><mask id="mask0_2055_14302" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="346" height="380"><rect width="346" height="380" fill="url(#paint0_radial_2055_14302)"></rect></mask><path class="glow-line glow-line-1" d="M174 319V214L77 158" stroke="#78FDFC" stroke-width="2" filter="url(#glow)"></path><path class="glow-line glow-line-2" d="M77 221 L174 166 V61" stroke="#78FDFC" stroke-width="2" filter="url(#glow)"></path><path class="glow-line glow-line-3" d="M174 319L174 214 L271 157" stroke="#78FDFC" stroke-width="2" filter="url(#glow)"></path><path class="glow-line glow-line-4" d="M270 221L174 166V61" stroke="#78FDFC" stroke-width="2" filter="url(#glow)"></path><g mask="url(#mask0_2055_14302)"><path d="M174 319L271 375L366 319V214L271 157L174 214V319Z" stroke="#0A5F81"></path><path d="M-18 319L79 375L174 319V214L77 158L-18 214V319Z" stroke="#0A5F81"></path><path d="M-19 82L77 137L174 82V-23L78 -80L-19 -23V82Z" stroke="#0A5F81"></path><path d="M174 166L270 221L367 166V61L271 4L174 61V166Z" stroke="#0A5F81"></path><path d="M-19 166L77 221L174 166V61L78 4L-19 61V166Z" stroke="#0A5F81"></path><path d="M174 82L269 137L367 82V-23L271 -80L174 -23V82Z" stroke="#0A5F81"></path><path d="M77 326L174 382L269 326L270 221L174 166L77 221V326Z" stroke="#1FDFFF"></path><path d="M77 158L174 214L269 158V53L174 -2L77 53V158Z" stroke="#1FDFFF"></path></g><path d="M77 242L174 298L269 242" stroke="white" style="mix-blend-mode:overlay;"></path><path d="M77 242L174 298L269 242" stroke="white" style="mix-blend-mode:overlay;"></path><path d="M77 137L174 82L269 137" stroke="white" style="mix-blend-mode:overlay;"></path><path d="M77 218L174 274L269 218V113L174 58L77 113V218Z" stroke="#07465F"></path><path d="M77 266L174 322L269 266V161L174 106L77 161V266Z" stroke="#07465F"></path><mask id="mask1_2055_14302" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="77" y="82" width="192" height="216"><path d="M77 242L174 298L269 242V137L174 82L77 137V242Z" fill="#D9D9D9"></path></mask><g mask="url(#mask1_2055_14302)"><path d="M77 218L174 274" stroke="#1FDFFF"></path><path d="M271 218L174 274" stroke="#1FDFFF"></path><path d="M174 214V274" stroke="#1FDFFF"></path><path d="M174 106L269 161" stroke="#1FDFFF"></path><path d="M174 106L77 161" stroke="#1FDFFF"></path></g><rect x="149" y="58" width="48" height="48" rx="24" fill="white"></rect><path d="M170 87.25H168.498C168.084 87.25 167.748 86.9141 167.748 86.4998L167.749 81.9404C167.749 79.4802 170.41 78.25 173 78.25C175.59 78.25 178.25 79.4801 178.25 81.9404L178.249 86.5002C178.249 86.9144 177.913 87.25 177.499 87.25H176M170 82.75V92.5C170 92.9142 170.336 93.25 170.75 93.25H175.25C175.664 93.25 176 92.9142 176 92.5V82.75M173 93.2504V87.25M164 88H162.498C162.084 88 161.748 87.6641 161.748 87.2498L161.749 82.6904C161.749 80.2301 164.41 79 167 79M164 83.5V92.5C164 92.9142 164.336 93.25 164.75 93.25H166.25M166.25 93.25V88.75M166.25 93.25H168.5M182 88H183.502C183.916 88 184.252 87.6641 184.252 87.2498L184.251 82.6904C184.251 80.2301 181.59 79 179 79M182 83.5V92.5C182 92.9142 181.665 93.25 181.25 93.25H179.75M179.75 93.25V88.75M179.75 93.25H177.5M175.25 73C175.25 71.7574 174.243 70.75 173 70.75C171.757 70.75 170.75 71.7574 170.75 73V73.7541C170.75 74.9968 171.757 76.0041 173 76.0041C174.243 76.0041 175.25 74.9968 175.25 73.7541V73ZM168.5 72.25H164.75V76H168.5V72.25ZM181.25 75.3597V72.7524L179.375 71.6699L177.5 72.7524V75.3597L179.375 76.4422L181.25 75.3597Z" stroke="url(#paint1_linear_2055_14302)" stroke-width="1.5" stroke-miterlimit="10"></path><rect x="53" y="114" width="48" height="48" rx="24" fill="white"></rect><path d="M74.75 129.75L77 127.5M77 127.5L79.25 129.75M77 127.5V140.25M69.5 132.75L67.25 130.5M67.25 130.5L69.5 128.25M67.25 130.5L69.5 130.5C71.9853 130.5 74 132.515 74 135V138M84.5 128.25L86.75 130.5M86.75 130.5L84.5 132.75M86.75 130.5L84.5 130.5C82.0147 130.5 80 132.515 80 135V138M73.4944 132.93C71.6241 133.476 70.2564 135.203 70.2578 137.249C70.261 141.778 70.2578 144.197 72.1383 146.124C73.1311 147.141 73.2499 148.452 73.2499 149.25H80.7499V147.75C80.7499 147.336 81.0857 147 81.4999 147H82.309C83.1374 147 83.809 146.329 83.809 145.5V143.25C83.809 142.836 84.1447 142.5 84.559 142.5H85.2485C85.8774 142.5 86.227 141.773 85.8342 141.282L83.809 138.75C83.8237 138.28 83.8292 138.187 83.8297 137.253C83.831 135.177 82.426 133.429 80.5154 132.908" stroke="url(#paint2_linear_2055_14302)" stroke-width="1.5" stroke-miterlimit="10"></path><rect x="245" y="114" width="48" height="48" rx="24" fill="white"></rect><path d="M260.375 144.75L263.786 141.34C264.24 140.885 264.867 140.647 265.509 140.684L268.228 140.844C269.653 140.928 270.702 142.212 270.5 143.625M266 143.625H272.375L275.868 140.132C276.838 139.162 278.412 139.162 279.382 140.132L279.5 140.25L273.409 146.341C272.987 146.763 272.415 147 271.818 147H264.875L263.75 148.125M264.875 149.25L259.25 143.625M266.375 132.375L268.25 134.25L272 130.5M277.25 132L281 132M276.5 129L279.748 127.125M276.5 135L279.748 136.875M260.75 132L257 132M261.5 135L258.252 136.875M261.5 129L258.252 127.125M273.323 127.968C273.567 128.047 273.733 128.275 273.733 128.531V133.425C273.733 136.383 269 138.75 269 138.75C269 138.75 264.267 136.383 264.267 133.425V128.531C264.267 128.275 264.432 128.047 264.676 127.968L267.906 126.923C268.617 126.692 269.382 126.692 270.093 126.923L273.323 127.968Z" stroke="url(#paint3_linear_2055_14302)" stroke-width="1.5" stroke-miterlimit="10"></path><rect x="149" y="274" width="48" height="48" rx="24" fill="white"></rect><path d="M164.002 298.75V308.5C164.002 308.914 164.337 309.25 164.752 309.25H167.75C168.164 309.25 168.5 308.914 168.5 308.5V298H170C171.657 298 173 296.657 173 295M173 295V292.375M173 295C173 296.657 174.343 298 176 298H177.5V308.5C177.5 308.914 177.836 309.25 178.25 309.25H181.248C181.663 309.25 181.998 308.914 181.998 308.5V298.75M173 292.375C173 291.754 172.496 291.25 171.875 291.25C171.253 291.25 170.749 291.754 170.749 292.376L170.75 294.156C170.75 294.609 170.293 294.917 169.874 294.745C169.345 294.527 168.577 294.25 167.002 294.25C164.412 294.25 161.751 295.48 161.751 297.94L161.75 302.5C161.75 302.914 162.086 303.25 162.5 303.25H164.002M173 292.375C173 291.754 173.504 291.25 174.125 291.25C174.747 291.25 175.251 291.754 175.251 292.376L175.25 294.156C175.25 294.609 175.707 294.917 176.126 294.745C176.655 294.527 177.423 294.25 178.998 294.25C181.588 294.25 184.249 295.48 184.249 297.94L184.25 302.5C184.25 302.914 183.914 303.25 183.5 303.25H181.998M166.25 309.249V303.249M179.75 309.249V303.249M164 290.226C164 291.205 164.839 292 165.875 292C166.911 292 167.75 291.205 167.75 290.226V289.043C167.75 288.063 166.911 287.269 165.875 287.269C164.839 287.269 164 288.063 164 289.043V290.226ZM182 290.226C182 291.205 181.161 292 180.125 292C179.089 292 178.25 291.205 178.25 290.226V289.043C178.25 288.063 179.089 287.269 180.125 287.269C181.161 287.269 182 288.063 182 289.043V290.226ZM174.125 307.75V302.5H174.875L173 300.25L171.125 302.5H171.875L171.875 307.75H174.125Z" stroke="url(#paint4_linear_2055_14302)" stroke-width="1.5" stroke-miterlimit="10"></path><rect x="53" y="218" width="48" height="48" rx="24" fill="white"></rect><path d="M77.0003 233.593L75.871 232.464C73.5853 230.179 69.8796 230.179 67.594 232.464L67.5932 232.465C65.3075 234.751 65.3075 238.456 67.593 240.742M77.0003 233.593L72.4844 238.108C73.7312 239.355 75.7526 239.355 76.9994 238.108L79.2569 235.851L86.4058 243C87.0292 243.623 87.0292 244.634 86.4058 245.257C85.7824 245.881 84.772 245.881 84.1486 245.257M77.0003 233.593L78.1285 232.464C80.4142 230.179 84.1201 230.179 86.4058 232.464C88.6916 234.75 88.6915 238.456 86.4056 240.742M73.6129 250.525C72.9895 251.149 71.9787 251.149 71.3553 250.525C70.7319 249.902 70.7319 248.891 71.3553 248.268L72.1079 247.515C72.7313 246.892 73.742 246.892 74.3654 247.515C74.9888 248.139 74.9888 249.149 74.3654 249.773M73.6129 250.525L74.3654 249.773M73.6129 250.525C72.9895 251.149 72.9897 252.159 73.6131 252.782C74.2365 253.406 75.2473 253.406 75.8707 252.782L76.6232 252.03C77.2466 251.406 77.2466 250.395 76.6232 249.772C75.9998 249.149 74.9888 249.149 74.3654 249.773M76.3789 246.518L79.6337 249.773M79.6337 249.773C80.2571 250.396 81.2678 250.396 81.8911 249.773C82.5145 249.149 82.5146 248.139 81.8912 247.515M79.6337 249.773C80.2572 250.396 80.2571 251.407 79.6337 252.031C79.0103 252.654 77.9996 252.654 77.3762 252.031L76.9999 251.654M81.8912 247.515L78.6368 244.261M81.8912 247.515C82.5146 248.139 83.5252 248.138 84.1486 247.515C84.772 246.892 84.772 245.881 84.1486 245.257M80.8942 242.003L84.1486 245.257M68.3457 242.247L66.8407 243.752C66.2173 244.376 66.2173 245.386 66.8407 246.01C67.4641 246.633 68.4748 246.633 69.0982 246.01L70.6033 244.505C71.2266 243.881 71.2266 242.871 70.6033 242.247C69.9799 241.624 68.9691 241.624 68.3457 242.247ZM70.2858 244.822L69.0067 246.101C68.3833 246.724 68.3833 247.735 69.0067 248.358C69.6301 248.982 70.6408 248.982 71.2642 248.358L72.5434 247.079C73.1668 246.456 73.1668 245.445 72.5434 244.822C71.92 244.198 70.9092 244.198 70.2858 244.822Z" stroke="url(#paint5_linear_2055_14302)" stroke-width="1.5" stroke-miterlimit="10"></path><rect x="245" y="218" width="48" height="48" rx="24" fill="white"></rect><path d="M260.375 248.75L263.786 245.34C264.24 244.885 264.867 244.647 265.509 244.684L268.228 244.844C269.653 244.928 270.702 246.212 270.5 247.625M266 247.625H272.375L275.868 244.132C276.838 243.162 278.412 243.162 279.382 244.132L279.5 244.25L273.409 250.341C272.987 250.763 272.415 251 271.818 251H264.875L263.75 252.125M264.875 253.25L259.25 247.625M269 239.306C268.112 239.306 267.393 238.625 267.393 237.785V236.771C267.393 235.931 268.112 235.25 269 235.25C269.887 235.25 270.607 235.931 270.607 236.771V237.785C270.607 238.625 269.887 239.306 269 239.306ZM269 239.306C270.585 239.306 272.214 240.066 272.214 241.587V242.215C272.214 242.511 271.974 242.75 271.678 242.75H266.321C266.025 242.75 265.785 242.511 265.785 242.215V241.587C265.785 240.066 267.414 239.306 269 239.306ZM274.357 238.757C273.765 238.757 273.285 238.303 273.285 237.744V237.068C273.285 236.508 273.765 236.054 274.357 236.054C274.948 236.054 275.428 236.508 275.428 237.068V237.744C275.428 238.303 274.948 238.757 274.357 238.757ZM274.357 238.757C275.414 238.757 276.5 239.265 276.5 240.279V241.144C276.5 241.439 276.26 241.679 275.964 241.679H273.821M274.357 238.757C273.3 238.757 272.214 239.265 272.214 240.279V241.411M263.643 238.757C264.235 238.757 264.714 238.303 264.714 237.744V237.068C264.714 236.508 264.235 236.054 263.643 236.054C263.051 236.054 262.571 236.508 262.571 237.068V237.744C262.571 238.303 263.051 238.757 263.643 238.757ZM263.643 238.757C262.586 238.757 261.5 239.265 261.5 240.279V241.144C261.5 241.439 261.74 241.679 262.036 241.679H264.179M263.643 238.757C264.7 238.757 265.786 239.265 265.786 240.279V241.411M258.332 245.58C257.946 244.43 257.75 243.225 257.75 242C257.75 241.712 257.761 241.427 257.782 241.145M279.365 237.621C279.952 239.007 280.25 240.481 280.25 242M258.215 238.789C258.645 237.343 259.352 236.016 260.318 234.846M274.956 232.455C276.238 233.257 277.331 234.291 278.202 235.527M262.029 233.17C263.218 232.23 264.56 231.55 266.015 231.151M268.379 230.767C268.586 230.756 268.793 230.75 269 230.75C270.305 230.75 271.584 230.972 272.801 231.409" stroke="url(#paint6_linear_2055_14302)" stroke-width="1.5" stroke-miterlimit="10"></path><defs><radialGradient id="paint0_radial_2055_14302" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(173 190) rotate(90) scale(190 137.689)"><stop stop-color="#D9D9D9"></stop><stop offset="1" stop-color="#D9D9D9" stop-opacity="0"></stop></radialGradient><linearGradient id="paint1_linear_2055_14302" x1="184.252" y1="70.75" x2="161.752" y2="93.2544" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint2_linear_2055_14302" x1="86.75" y1="127.5" x2="65.1289" y2="146.884" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint3_linear_2055_14302" x1="281" y1="126.75" x2="258.547" y2="150.7" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint4_linear_2055_14302" x1="184.25" y1="287.269" x2="162.275" y2="309.763" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint5_linear_2055_14302" x1="88.1201" y1="230.75" x2="65.6221" y2="252.99" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint6_linear_2055_14302" x1="280.25" y1="230.75" x2="257.75" y2="253.25" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient></defs>', 27);
const _hoisted_29 = [
  _hoisted_2$c
];
function render$c(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _hoisted_29);
}
const OperateHexagon = { render: render$c };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "TheAboutOperateSection",
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
      tl.fromTo(getLine(1), { drawSVG: "0% 7.5%" }, { drawSVG: "98% 100%", duration: 1.75 }).fromTo(getLine(2), { drawSVG: "92.5% 100%" }, { drawSVG: "0% 2%", duration: 1.75 }).fromTo(getLine(3), { drawSVG: "96.5% 100%" }, { drawSVG: "0% 4%", duration: 1.75 }).fromTo(getLine(4), { drawSVG: "0% 2.75%" }, { drawSVG: "95.5% 100%", duration: 1.75 });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppButton = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content mt-16 md:mt-40 relative" }, _attrs))}><div class="expertise text-white rounded-4 md:flex max-w-[914px] mx-auto relative">`);
      _push(ssrRenderComponent(unref(OperateHexagon), {
        ref_key: "hexagonRef",
        ref: hexagonRef,
        class: "max-w-[19.5rem] mx-auto w-full"
      }, null, _parent));
      _push(`<div class="p-8 md:py-20 md:px-14"><h2 class="font-semibold text-xl mb-4 md:text-[1.75rem] leading-[120%]"> We\u2019re a design firm but operate like a startup </h2><p class="text-blue-100 mb-8 text-sm md:text-base md:mb-8"> Startup culture is ingrained in Semiflat\u2019s DNA. We <br class="hidden md:block"> worked at startups before and have worked with dozens of them since. </p><div class="md:flex">`);
      _push(ssrRenderComponent(_component_AppButton, {
        secondary: "",
        href: "/culture"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Learn about our culture`);
          } else {
            return [
              createTextVNode("Learn about our culture")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const TheAboutOperateSection_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/TheAboutOperateSection.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _hoisted_1$b = {
  width: "100",
  height: "100",
  viewBox: "0 0 100 100",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$b = /* @__PURE__ */ createStaticVNode('<g filter="url(#filter0_dd_794_47325)"><rect x="14" y="6" width="72" height="72" rx="36" fill="white" shape-rendering="crispEdges"></rect><g clip-path="url(#clip0_794_47325)"><path d="M34.7871 25.0177L36.5549 23.25" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M31.25 28.5539L33.0178 26.7861" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M34.7871 26.7861L36.5549 28.5539" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M31.25 23.25L33.0178 25.0178" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M62.2871 43.7677L64.0549 42" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M58.75 47.3039L60.5177 45.5361" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M62.2871 45.5361L64.0549 47.3039" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M58.75 42L60.5177 43.7677" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M60.8477 31.1529L66.2506 25.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M63.498 33.8046L64.3819 32.9207C65.3582 31.9444 66.9412 31.9444 67.9175 32.9207L68.8014 33.8046" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M58.1953 23.1982L59.0792 24.0821C60.0555 25.0584 60.0555 26.6414 59.0792 27.6177L58.1953 28.5016" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M54.6602 33.8047L58.1957 37.3402" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M45.1836 40.2383L46.705 45.2952L51.7619 46.8166" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M38.75 44.4111L47.5888 53.2499" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M33.3848 49.7773L42.2236 58.6162" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M38.6872 60.3841C39.1753 60.8722 39.9668 60.8722 40.4549 60.3841L48.4727 52.3663C51.1243 49.7147 52.8921 42.6436 56.4276 39.1081L59.9632 35.5725C60.4513 35.0844 60.4513 34.2929 59.9632 33.8047L58.1954 32.037C57.7073 31.5489 56.9158 31.5489 56.4277 32.037L52.8921 35.5726C49.3565 39.1081 42.2855 40.8759 39.6338 43.5275L31.6161 51.5452C31.128 52.0334 31.128 52.8249 31.6161 53.313L38.6872 60.3841V60.3841Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M64.8477 55.0813L67.4993 52.4297" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M60.4297 59.5003L63.0813 56.8486" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M64.8477 56.8486L67.4993 59.5003" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M60.4297 52.4297L63.0813 55.0813" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M38.1699 34.6516L40.8215 32" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M33.75 39.0715L36.4016 36.4199" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M38.1699 36.4199L40.8215 39.0715" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M33.75 32L36.4016 34.6516" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M48.125 29.5C49.1605 29.5 50 28.6605 50 27.625C50 26.5895 49.1605 25.75 48.125 25.75C47.0895 25.75 46.25 26.5895 46.25 27.625C46.25 28.6605 47.0895 29.5 48.125 29.5Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M53.75 57C54.4404 57 55 56.4404 55 55.75C55 55.0596 54.4404 54.5 53.75 54.5C53.0596 54.5 52.5 55.0596 52.5 55.75C52.5 56.4404 53.0596 57 53.75 57Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g><rect x="14.5" y="6.5" width="71" height="71" rx="35.5" stroke="#D8DFE5" shape-rendering="crispEdges"></rect></g><defs><filter id="filter0_dd_794_47325" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="8"></feOffset><feGaussianBlur stdDeviation="7"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_794_47325"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_794_47325" result="effect2_dropShadow_794_47325"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_794_47325" result="shape"></feBlend></filter><clipPath id="clip0_794_47325"><rect width="40" height="40" fill="white" transform="translate(30 22)"></rect></clipPath></defs>', 2);
const _hoisted_4$6 = [
  _hoisted_2$b
];
function render$b(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _hoisted_4$6);
}
const BottleIcon = { render: render$b };
const box = "/semiflatv4/assets/box.60bb5222.jpeg";
const convent = "/semiflatv4/assets/convent.633e1e9f.jpeg";
const about = "/semiflatv4/assets/about-image.d99d7a21.png";
const _hoisted_1$a = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$a = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_714_44856)"><mask id="mask0_714_44856" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="40"><path d="M0.833984 39.5V0.5H39.834V39.5H0.833984Z" fill="white" stroke="white"></path></mask><g mask="url(#mask0_714_44856)"><path d="M20.334 7.5C21.0244 7.5 21.584 6.94035 21.584 6.25C21.584 5.55965 21.0244 5 20.334 5C19.6436 5 19.084 5.55965 19.084 6.25C19.084 6.94035 19.6436 7.5 20.334 7.5Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M25.334 6.25C25.334 9.79375 20.8685 13.3524 20.3776 13.7311C20.3517 13.751 20.3161 13.751 20.2904 13.7311C19.7996 13.3524 15.334 9.79375 15.334 6.25C15.334 3.48862 17.5726 1.25 20.334 1.25C23.0954 1.25 25.334 3.48862 25.334 6.25Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M15.9865 8.75H7.83398V38.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M32.8342 38.75L32.8125 8.75H24.6836" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M15.334 38.75V31.25H25.334V38.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M0.333984 38.75H40.334" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M17.834 22.5H14.084V26.25H17.834V22.5Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M17.834 15H14.084V18.75H17.834V15Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M26.584 15H22.834V18.75H26.584V15Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M26.584 22.5H22.834V26.25H26.584V22.5Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M20.334 31.25V38.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M7.83398 8.75H6.58398C5.89361 8.75 5.33398 8.19037 5.33398 7.5V6.25C5.33398 5.55963 5.89361 5 6.58398 5H15.4922" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M32.8338 8.75H34.0838C34.7742 8.75 35.3338 8.19037 35.3338 7.5V6.25C35.3338 5.55963 34.7742 5 34.0838 5H25.1758" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><clipPath id="clip0_714_44856"><rect width="40" height="40" fill="white" transform="translate(0.333984)"></rect></clipPath></defs>', 2);
const _hoisted_4$5 = [
  _hoisted_2$a
];
function render$a(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _hoisted_4$5);
}
const HeadquartersIcon = { render: render$a };
const _hoisted_1$9 = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$9 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_714_44856)"><mask id="mask0_714_44856" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="0" y="0" width="41" height="40"><path d="M0.833984 0.5H39.834V39.5H0.833984V0.5Z" fill="white" stroke="white"></path></mask><g mask="url(#mask0_714_44856)"><path d="M20.334 7.5C21.0244 7.5 21.584 6.94035 21.584 6.25C21.584 5.55965 21.0244 5 20.334 5C19.6436 5 19.084 5.55965 19.084 6.25C19.084 6.94035 19.6436 7.5 20.334 7.5Z" stroke="url(#paint0_linear_714_44856)" stroke-width="2" stroke-miterlimit="10"></path><path d="M25.334 6.25C25.334 9.79375 20.8685 13.3524 20.3776 13.7311C20.3517 13.751 20.3161 13.751 20.2904 13.7311C19.7996 13.3524 15.334 9.79375 15.334 6.25C15.334 3.48862 17.5726 1.25 20.334 1.25C23.0954 1.25 25.334 3.48862 25.334 6.25Z" stroke="url(#paint1_linear_714_44856)" stroke-width="2" stroke-miterlimit="10"></path><path d="M15.9865 8.75H7.83398V38.75" stroke="url(#paint2_linear_714_44856)" stroke-width="2" stroke-miterlimit="10"></path><path d="M32.8342 38.75L32.8125 8.75H24.6836" stroke="url(#paint3_linear_714_44856)" stroke-width="2" stroke-miterlimit="10"></path><path d="M15.334 38.75V31.25H25.334V38.75" stroke="url(#paint4_linear_714_44856)" stroke-width="2" stroke-miterlimit="10"></path><path d="M0.333984 38.75H40.334" stroke="url(#paint5_linear_714_44856)" stroke-width="2" stroke-miterlimit="10"></path><path d="M17.834 22.5H14.084V26.25H17.834V22.5Z" stroke="url(#paint6_linear_714_44856)" stroke-width="2" stroke-miterlimit="10"></path><path d="M17.834 15H14.084V18.75H17.834V15Z" stroke="url(#paint7_linear_714_44856)" stroke-width="2" stroke-miterlimit="10"></path><path d="M26.584 15H22.834V18.75H26.584V15Z" stroke="url(#paint8_linear_714_44856)" stroke-width="2" stroke-miterlimit="10"></path><path d="M26.584 22.5H22.834V26.25H26.584V22.5Z" stroke="url(#paint9_linear_714_44856)" stroke-width="2" stroke-miterlimit="10"></path><path d="M20.334 31.25V38.75" stroke="url(#paint10_linear_714_44856)" stroke-width="2" stroke-miterlimit="10"></path><path d="M7.83398 8.75H6.58398C5.89361 8.75 5.33398 8.19037 5.33398 7.5V6.25C5.33398 5.55963 5.89361 5 6.58398 5H15.4922" stroke="url(#paint11_linear_714_44856)" stroke-width="2" stroke-miterlimit="10"></path><path d="M32.8338 8.75H34.0838C34.7742 8.75 35.3338 8.19037 35.3338 7.5V6.25C35.3338 5.55963 34.7742 5 34.0838 5H25.1758" stroke="url(#paint12_linear_714_44856)" stroke-width="2" stroke-miterlimit="10"></path></g></g><defs><linearGradient id="paint0_linear_714_44856" x1="21.584" y1="5" x2="19.084" y2="7.50002" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint1_linear_714_44856" x1="25.334" y1="1.25" x2="13.1419" y2="11.0069" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint2_linear_714_44856" x1="15.9865" y1="8.75" x2="0.80267" y2="12.8763" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint3_linear_714_44856" x1="32.8342" y1="8.75" x2="17.6534" y2="12.8745" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint4_linear_714_44856" x1="25.334" y1="31.25" x2="18.1341" y2="40.85" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint5_linear_714_44856" x1="40.334" y1="38.75" x2="40.284" y2="40.7487" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint6_linear_714_44856" x1="17.834" y1="22.5" x2="14.084" y2="26.25" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint7_linear_714_44856" x1="17.834" y1="15" x2="14.084" y2="18.75" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint8_linear_714_44856" x1="26.584" y1="15" x2="22.834" y2="18.75" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint9_linear_714_44856" x1="26.584" y1="22.5" x2="22.834" y2="26.25" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint10_linear_714_44856" x1="21.334" y1="31.25" x2="19.3689" y2="31.512" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint11_linear_714_44856" x1="15.4922" y1="5" x2="13.0557" y2="11.6005" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><linearGradient id="paint12_linear_714_44856" x1="35.3338" y1="5" x2="32.8972" y2="11.6004" gradientUnits="userSpaceOnUse"><stop stop-color="#407A7A"></stop><stop offset="1" stop-color="#002832"></stop></linearGradient><clipPath id="clip0_714_44856"><rect width="40" height="40" fill="white" transform="translate(0.333984)"></rect></clipPath></defs>', 2);
const _hoisted_4$4 = [
  _hoisted_2$9
];
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_4$4);
}
const HeadquartersGradient = { render: render$9 };
const _hoisted_1$8 = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", {
  d: "M29.9294 5.70801C34.8873 7.4057 36.9152 12.4999 36.9152 17.5C36.9152 22.5 36.4905 27.5238 35.6652 30M35.6652 30H29.9299M35.6652 30L35.6655 32.5C35.6655 33.1904 35.1059 33.75 34.4155 33.75H6.91553C6.22516 33.75 5.66553 33.1904 5.66553 32.5L5.66492 29.9999M23.1655 22.5V12.5C23.1655 8.75 23.1655 1.25 28.1655 1.25M28.1655 1.25H13.1654M28.1655 1.25C31.9155 1.25 30.6654 12.5 20.6654 12.5C10.6654 12.5 9.41539 1.25 13.1654 1.25M13.1654 1.25C18.1654 1.25 18.2262 7.5 18.1655 12.5V18.75M11.4007 5.70801C6.44286 7.4057 4.71279 12.5088 4.41492 17.4899C4.13048 22.2418 4.67736 26.6424 5.66492 29.9999M5.66492 29.9999H11.4007M10.6655 17.5L11.8463 37.5734C11.8852 38.2341 12.4323 38.75 13.0942 38.75H28.2369C28.8988 38.75 29.4459 38.2341 29.4847 37.5734L30.6655 17.5",
  stroke: "#54ABA3",
  "stroke-width": "2",
  "stroke-miterlimit": "10"
}, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$8
];
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _hoisted_3$5);
}
const HoodieIcon = { render: render$8 };
const _hoisted_1$7 = {
  width: "41",
  height: "40",
  viewBox: "0 0 41 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  d: "M29.9294 5.70801C34.8873 7.4057 36.9152 12.4999 36.9152 17.5C36.9152 22.5 36.4905 27.5238 35.6652 30M35.6652 30H29.9299M35.6652 30L35.6655 32.5C35.6655 33.1904 35.1059 33.75 34.4155 33.75H6.91553C6.22516 33.75 5.66553 33.1904 5.66553 32.5L5.66492 29.9999M23.1655 22.5V12.5C23.1655 8.75 23.1655 1.25 28.1655 1.25M28.1655 1.25H13.1654M28.1655 1.25C31.9155 1.25 30.6654 12.5 20.6654 12.5C10.6654 12.5 9.41539 1.25 13.1654 1.25M13.1654 1.25C18.1654 1.25 18.2262 7.5 18.1655 12.5V18.75M11.4007 5.70801C6.44286 7.4057 4.71279 12.5088 4.41492 17.4899C4.13048 22.2418 4.67736 26.6424 5.66492 29.9999M5.66492 29.9999H11.4007M10.6655 17.5L11.8463 37.5734C11.8852 38.2341 12.4323 38.75 13.0942 38.75H28.2369C28.8988 38.75 29.4459 38.2341 29.4847 37.5734L30.6655 17.5",
  stroke: "url(#paint0_linear_714_44849)",
  "stroke-width": "2",
  "stroke-miterlimit": "10"
}, null, -1);
const _hoisted_3$4 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("linearGradient", {
    id: "paint0_linear_714_44849",
    x1: "36.9152",
    y1: "1.25",
    x2: "-0.216",
    y2: "33.5055",
    gradientUnits: "userSpaceOnUse"
  }, [
    /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#407A7A" }),
    /* @__PURE__ */ createElementVNode("stop", {
      offset: "1",
      "stop-color": "#002832"
    })
  ])
], -1);
const _hoisted_4$3 = [
  _hoisted_2$7,
  _hoisted_3$4
];
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _hoisted_4$3);
}
const HoodieGradient = { render: render$7 };
const _hoisted_1$6 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  d: "M21.25 36.25V36.875C21.25 37.9106 22.0894 38.75 23.125 38.75C24.1606 38.75 25 37.9106 25 36.875V36.25M32.5 36.25V36.875C32.5 37.9106 33.3394 38.75 34.375 38.75C35.4106 38.75 36.25 37.9106 36.25 36.875V36.25M23.75 12.5V2.5C23.75 1.80963 24.3096 1.25 25 1.25H32.5C33.1904 1.25 33.75 1.80963 33.75 2.5V12.5M35.9017 24.8878L32.6279 23.8398C31.0406 23.3316 30.2784 25.7126 31.8657 26.2208L33.453 26.7289C35.0403 27.237 34.2781 29.618 32.6908 29.1099L29.5162 28.0936M0 25H15M15 30H5M15 35H8.75M3.75 21.25C3.75 12.2754 11.0254 5 20 5M20 12.5H37.5C38.1904 12.5 38.75 13.0596 38.75 13.75V35C38.75 35.6904 38.1904 36.25 37.5 36.25H20C19.3096 36.25 18.75 35.6904 18.75 35V13.75C18.75 13.0596 19.3096 12.5 20 12.5ZM22.5 19.31L30.1501 16.25L31.5087 19.6465L23.8585 22.7065L22.5 19.31ZM27.3325 30.3883V27.6294L24.9432 26.25L22.554 27.6294V30.3883L24.9432 31.7677L27.3325 30.3883Z",
  stroke: "#54ABA3",
  "stroke-width": "2",
  "stroke-miterlimit": "10"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$6
];
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_3$3);
}
const TeamRetreatsIcon = { render: render$6 };
const _hoisted_1$5 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", {
  d: "M21.25 36.25V36.875C21.25 37.9106 22.0894 38.75 23.125 38.75C24.1606 38.75 25 37.9106 25 36.875V36.25M32.5 36.25V36.875C32.5 37.9106 33.3394 38.75 34.375 38.75C35.4106 38.75 36.25 37.9106 36.25 36.875V36.25M23.75 12.5V2.5C23.75 1.80963 24.3096 1.25 25 1.25H32.5C33.1904 1.25 33.75 1.80963 33.75 2.5V12.5M35.9017 24.8878L32.6279 23.8398C31.0406 23.3316 30.2784 25.7126 31.8657 26.2208L33.453 26.7289C35.0403 27.237 34.2781 29.618 32.6908 29.1099L29.5162 28.0936M0 25H15M15 30H5M15 35H8.75M3.75 21.25C3.75 12.2754 11.0254 5 20 5M20 12.5H37.5C38.1904 12.5 38.75 13.0596 38.75 13.75V35C38.75 35.6904 38.1904 36.25 37.5 36.25H20C19.3096 36.25 18.75 35.6904 18.75 35V13.75C18.75 13.0596 19.3096 12.5 20 12.5ZM22.5 19.31L30.1501 16.25L31.5087 19.6465L23.8585 22.7065L22.5 19.31ZM27.3325 30.3883V27.6294L24.9432 26.25L22.554 27.6294V30.3883L24.9432 31.7677L27.3325 30.3883Z",
  stroke: "url(#paint0_linear_714_44865)",
  "stroke-width": "2",
  "stroke-miterlimit": "10"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("defs", null, [
  /* @__PURE__ */ createElementVNode("linearGradient", {
    id: "paint0_linear_714_44865",
    x1: "38.75",
    y1: "1.25",
    x2: "1.27052",
    y2: "39.9795",
    gradientUnits: "userSpaceOnUse"
  }, [
    /* @__PURE__ */ createElementVNode("stop", { "stop-color": "#407A7A" }),
    /* @__PURE__ */ createElementVNode("stop", {
      offset: "1",
      "stop-color": "#002832"
    })
  ])
], -1);
const _hoisted_4$2 = [
  _hoisted_2$5,
  _hoisted_3$2
];
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$5, _hoisted_4$2);
}
const TeamRetreatsGradient = { render: render$5 };
const GadgetsImg = "/semiflatv4/assets/gadgets-img.b715cccd.png";
const RetreatsImg = "/semiflatv4/assets/retreats-img.44cefe89.png";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "TheAboutAboutSection",
  __ssrInlineRender: true,
  setup(__props) {
    const breakpoints = useBreakpoints(breakpointsConst);
    const md = ref(breakpoints.smaller("md"));
    const details = [
      {
        img: RetreatsImg,
        icon: TeamRetreatsIcon,
        activeIcon: TeamRetreatsGradient,
        header: "Our team retreats",
        desc: "The best way to keep a remote team integrated and motivated. They\u2019re an essential part of our culture."
      },
      {
        img: GadgetsImg,
        icon: HoodieIcon,
        activeIcon: HoodieGradient,
        header: "Our team gadgets",
        desc: "Best local manufacturers and tons of love. That\u2019s how our team gadgets are made."
      },
      {
        img: about,
        icon: HeadquartersIcon,
        activeIcon: HeadquartersGradient,
        header: "Our headquarters",
        desc: "Meticulously designed according to our interior brand book. Always open for the team."
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
        delay: 2e3
      }
    }));
    const content = [
      {
        title: "We are value driven",
        text: "Our team is comprised of high-achieving individuals passionate about their craft and striving to be best at it.",
        bgImage: `url(${convent})`
      },
      {
        title: "From a freelancing gig to a 17 people agency. Read now about how it all started."
      },
      {
        title: "We\u2019re building a home for designers",
        text: "Team retreats at Semiflat are legendary. As a remote team we get together every couple of months.",
        bgImage: `url(${box})`
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSlider = __unplugin_components_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-content md:-mt-20" }, _attrs))} data-v-5ca042fa>`);
      _push(ssrRenderComponent(TheAboutComponent, {
        content,
        icon: unref(BottleIcon)
      }, null, _parent));
      _push(`<div class="mt-16 md:mt-40" data-v-5ca042fa><h2 class="text-xl gradient-text font-semibold mb-12 md:text-[1.75rem] md:leading-[120%] md:text-center md:mb-[5rem]" data-v-5ca042fa> Our attention to detail goes far beyond the design <br class="hidden md:block" data-v-5ca042fa> work we do_ </h2><div data-v-5ca042fa><img id="detail-image"${ssrRenderAttr("src", unref(selectedDetail).img)} class="rounded-4 h-[13.75rem] -scale-x-100 md:scale-x-100 md:w-full md:h-[30rem] mx-auto object-cover transition-all hidden sm:block" data-v-5ca042fa><div data-v-5ca042fa>`);
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
                _push2(ssrRenderComponent(unref(SwiperSlide), { key: i }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img id="detail-image"${ssrRenderAttr("src", card.img)} class="rounded-4 h-[13.75rem] -scale-x-100 md:scale-x-100 md:w-full md:h-[30rem] mx-auto object-cover transition-all" data-v-5ca042fa${_scopeId2}><div class="shrink-0 mx-auto flex items-center justify-center mt-8" data-v-5ca042fa${_scopeId2}><div class="p-6 border border-[#BCDCDC] rounded-3 md:border-none max-w-[21.687rem] object-cover" data-v-5ca042fa${_scopeId2}>`);
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(card.icon), { class: "mb-8" }, null), _parent3, _scopeId2);
                      _push3(`<p class="mb-1 gradient-text font-semibold" data-v-5ca042fa${_scopeId2}>${ssrInterpolate(card.header)}</p><p class="text-blue-200" data-v-5ca042fa${_scopeId2}>${ssrInterpolate(card.desc)}</p></div></div>`);
                    } else {
                      return [
                        createVNode("img", {
                          id: "detail-image",
                          src: card.img,
                          class: "rounded-4 h-[13.75rem] -scale-x-100 md:scale-x-100 md:w-full md:h-[30rem] mx-auto object-cover transition-all"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "shrink-0 mx-auto flex items-center justify-center mt-8" }, [
                          createVNode("div", { class: "p-6 border border-[#BCDCDC] rounded-3 md:border-none max-w-[21.687rem] object-cover" }, [
                            (openBlock(), createBlock(resolveDynamicComponent(card.icon), { class: "mb-8" })),
                            createVNode("p", { class: "mb-1 gradient-text font-semibold" }, toDisplayString(card.header), 1),
                            createVNode("p", { class: "text-blue-200" }, toDisplayString(card.desc), 1)
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
                  return createVNode(unref(SwiperSlide), { key: i }, {
                    default: withCtx(() => [
                      createVNode("img", {
                        id: "detail-image",
                        src: card.img,
                        class: "rounded-4 h-[13.75rem] -scale-x-100 md:scale-x-100 md:w-full md:h-[30rem] mx-auto object-cover transition-all"
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "shrink-0 mx-auto flex items-center justify-center mt-8" }, [
                        createVNode("div", { class: "p-6 border border-[#BCDCDC] rounded-3 md:border-none max-w-[21.687rem] object-cover" }, [
                          (openBlock(), createBlock(resolveDynamicComponent(card.icon), { class: "mb-8" })),
                          createVNode("p", { class: "mb-1 gradient-text font-semibold" }, toDisplayString(card.header), 1),
                          createVNode("p", { class: "text-blue-200" }, toDisplayString(card.desc), 1)
                        ])
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
        _push(`<div class="shrink-0 mx-auto items-center justify-between hidden flex mt-10" data-v-5ca042fa><!--[-->`);
        ssrRenderList(details, (card, i) => {
          _push(`<div class="${ssrRenderClass([{
            "shadow-select before:content-empty before:absolute before:top-0 before:left-0 before-rounded-3 before:w-full before:h-full before:bg-transparent before:border before:border-[#BCDCDC]": unref(selectedDetail).img === card.img
          }, "p-6 rounded-3 max-w-[21.687rem] object-cover cursor-pointer transition-all ease-linear duration-200 relative"])}" data-v-5ca042fa>`);
          if (card.header === unref(selectedDetail).header) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(card.activeIcon), { class: "mb-8" }, null), _parent);
          } else {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(card.icon), { class: "mb-8" }, null), _parent);
          }
          _push(`<p class="mb-1 gradient-text font-semibold" data-v-5ca042fa>${ssrInterpolate(card.header)}</p><p class="text-blue-200" data-v-5ca042fa>${ssrInterpolate(card.desc)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const TheAboutAboutSection_vue_vue_type_style_index_0_scoped_5ca042fa_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/TheAboutAboutSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-5ca042fa"]]);
const _hoisted_1$4 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$4 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_703_44495)"><path d="M1.25 10H38.75" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M11.25 32.5H2.5C1.80963 32.5 1.25 31.9404 1.25 31.25V2.5C1.25 1.80963 1.80963 1.25 2.5 1.25H37.5C38.1904 1.25 38.75 1.80963 38.75 2.5V26.25" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M5.625 6.25C5.97018 6.25 6.25 5.97018 6.25 5.625C6.25 5.27982 5.97018 5 5.625 5C5.27982 5 5 5.27982 5 5.625C5 5.97018 5.27982 6.25 5.625 6.25Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M10.625 6.25C10.9702 6.25 11.25 5.97018 11.25 5.625C11.25 5.27982 10.9702 5 10.625 5C10.2798 5 10 5.27982 10 5.625C10 5.97018 10.2798 6.25 10.625 6.25Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M15.625 6.25C15.9702 6.25 16.25 5.97018 16.25 5.625C16.25 5.27982 15.9702 5 15.625 5C15.2798 5 15 5.27982 15 5.625C15 5.97018 15.2798 6.25 15.625 6.25Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M4.99609 15H21.248" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M4.99805 18.75H17.5004" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path><path d="M33.75 28.75C33.75 24.6081 30.3919 21.25 26.25 21.25C22.8986 21.25 20.0623 23.4491 19.1009 26.4831C18.587 26.3464 18.0566 26.25 17.5 26.25C14.0484 26.25 11.25 29.0484 11.25 32.5C11.25 35.9516 14.0484 38.75 17.5 38.75H33.75C36.5113 38.75 38.75 36.5113 38.75 33.75C38.75 30.9887 36.5113 28.75 33.75 28.75Z" stroke="#54ABA3" stroke-width="2" stroke-miterlimit="10"></path></g><defs><clipPath id="clip0_703_44495"><rect width="40" height="40" fill="white"></rect></clipPath></defs>', 2);
const _hoisted_4$1 = [
  _hoisted_2$4
];
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_4$1);
}
const ExpertiseIcon = { render: render$4 };
const _hoisted_1$3 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M6.25 27.5C6.25 27.5 11.6091 27.5 13.0922 27.5C16.0585 27.5 16.0585 23.125 13.0922 23.125H10.126C7.15975 23.125 7.15975 18.75 10.126 18.75C11.6091 18.75 15.7243 18.75 15.7243 18.75M21.1169 27.4999H37.4998C38.1902 27.5 38.7498 26.9404 38.7498 26.25V22.1369C38.7498 17.379 33.682 15 28.7498 15C25.9876 15 23.1831 15.7461 21.2498 17.2382M20.3852 14.7202C20.9009 14.8871 21.2502 15.3674 21.2502 15.9094V26.2502C21.2502 32.5002 11.2501 37.5002 11.2501 37.5002C11.2501 37.5002 1.25 32.5002 1.25 26.2502V15.9094C1.25 15.3674 1.59937 14.8871 2.11506 14.7202L8.94056 12.5108C10.4421 12.0248 12.0586 12.0248 13.56 12.5108L20.3852 14.7202ZM23.6114 10.3126C23.6114 12.9015 25.8811 15.0002 28.6808 15.0002C31.4806 15.0002 33.7502 12.9015 33.7502 10.3126V7.18756C33.7502 4.59869 31.4806 2.5 28.6808 2.5C25.8811 2.5 23.6114 4.59869 23.6114 7.18756V10.3126Z",
  stroke: "#54ABA3",
  "stroke-width": "2",
  "stroke-miterlimit": "10"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$3
];
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_3$1);
}
const TalentIcon = { render: render$3 };
const _hoisted_1$2 = {
  width: "40",
  height: "40",
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M11.2499 36.2499H8.75C8.05963 36.2499 7.5 35.6903 7.5 35V30.3949C7.5 24.2983 13.8353 21.25 20.0011 21.25C26.167 21.25 32.5 24.2983 32.5 30.3949V35C32.5 35.6904 31.9404 36.25 31.25 36.25H28.75M13.4367 22.7711C13.0856 20.2299 10.1877 18.9593 7.36169 18.9593C4.34725 18.9593 1.25 20.405 1.25 23.2963V28.7498M26.5631 22.7714C26.9142 20.23 29.8132 18.9593 32.6393 18.9593C35.6537 18.9593 38.7499 20.405 38.7499 23.2963V28.7498M13.8086 11.4059C13.8086 14.7713 16.5938 17.4995 20.0295 17.4995C23.4652 17.4995 26.2503 14.7713 26.2503 11.4059V7.34356C26.2503 3.97819 23.4652 1.25 20.0295 1.25C16.5938 1.25 13.8086 3.97819 13.8086 7.34356V11.4059ZM4.30542 15.8582C4.30542 17.455 5.67342 18.7494 7.36098 18.7494C9.04854 18.7494 10.4165 17.4549 10.4165 15.8582V13.9307C10.4165 12.3339 9.04854 11.0394 7.36098 11.0394C5.67342 11.0394 4.30542 12.3339 4.30542 13.9307V15.8582ZM29.5831 15.8582C29.5831 17.455 30.9511 18.7494 32.6387 18.7494C34.3263 18.7494 35.6943 17.4549 35.6943 15.8582V13.9307C35.6943 12.3339 34.3263 11.0394 32.6387 11.0394C30.9511 11.0394 29.5831 12.3339 29.5831 13.9307V15.8582ZM20.3846 26.4892L22.1759 30.1188L26.1814 30.7009C26.5334 30.752 26.6739 31.1845 26.4192 31.4328L23.5208 34.2581L24.2051 38.2474C24.2652 38.5979 23.8972 38.8653 23.5825 38.6998L19.9998 36.8163L16.4171 38.6998C16.1023 38.8653 15.7344 38.5979 15.7946 38.2474L16.4788 34.2581L13.5804 31.4328C13.3257 31.1845 13.4662 30.752 13.8182 30.7009L17.8237 30.1188L19.6151 26.4892C19.7724 26.1703 20.2272 26.1703 20.3846 26.4892Z",
  stroke: "#54ABA3",
  "stroke-width": "2",
  "stroke-miterlimit": "10"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2$2
];
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_3);
}
const LeadershipIcon = { render: render$2 };
const _hoisted_1$1 = {
  width: "327",
  height: "300",
  viewBox: "0 0 327 300",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
const _hoisted_2$1 = /* @__PURE__ */ createStaticVNode('<mask id="mask0_1039_16078" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="327" height="300"><rect width="327" height="300" fill="url(#paint0_radial_1039_16078)"></rect></mask><g mask="url(#mask0_1039_16078)"><path d="M22 197V144L75 179V231.5L22 197Z" fill="#E4F1F1"></path><path d="M220 34V-29L273 5.99997V68.5L220 34Z" fill="#E4F1F1"></path><path d="M154 233L154 180L207 212L207 268L154 233Z" fill="#E4F1F1"></path><path d="M140 84V32L193 67V119.5L140 84Z" fill="#E4F1F1"></path><path d="M58 -22L-24 32.2857V113.714L58 168L140 113.714V32L58 -22Z" stroke="#BCDCDC"></path><path d="M140 113.714L58 168L22 144.167" stroke="#54ABA3"></path><path d="M269 132L187 186.286V268L269 322L351 267.714V186.286L269 132Z" stroke="#BCDCDC"></path><path d="M187 186.286V267.714" stroke="#54ABA3"></path><path d="M187 145L134 180.143V232.857L187 268L240 232.857V180.143L187 145Z" stroke="#54ABA3"></path><path d="M140 32L87 67.1429V116.857L140 152L193 116.857V67.1429L140 32Z" stroke="#BCDCDC"></path><path d="M273 -54L220 -18.8571V33.8571L273 69L326 33.8571V-18.8571L273 -54Z" stroke="#54ABA3"></path><path d="M22 197L-31 232.143V284.857L22 320L75 284.857V232.143L22 197Z" stroke="#BCDCDC"></path><path d="M326 -19L273 16.1429V68.8571L326 104L379 68.8571V16.1429L326 -19Z" stroke="#BCDCDC"></path><path d="M273 16.1431V68.8574" stroke="#54ABA3"></path><path d="M74 231L21 266.143V318.857L74 354L127 318.857V266.143L74 231Z" stroke="#BCDCDC"></path><path d="M273 69L220 104.143V153.857L273 189L326 153.857V104.143L273 69Z" stroke="#BCDCDC"></path><path d="M75 109L22 144.143V196.857L75 232L128 196.857V144.143L75 109Z" stroke="#54ABA3"></path></g><g filter="url(#filter0_dd_1039_16078)"><g clip-path="url(#clip0_1039_16078)"><rect width="240" height="20" transform="translate(44 68)" fill="#002832"></rect><path d="M56 80.2915H57.0239C57.0239 80.7047 57.394 81.0686 57.9922 81.0686C58.5967 81.0686 58.9668 80.7664 58.9668 80.3716C58.9668 80.0262 58.6831 79.8412 58.2945 79.7548L57.5852 79.5883C56.6106 79.3293 56.1604 78.8235 56.1604 78.0463C56.1604 77.1952 56.9375 76.4858 58.0231 76.4858C58.9236 76.4858 59.8858 76.9546 59.8858 78.0587H58.8311C58.8311 77.6763 58.4363 77.4172 58.0478 77.4172C57.5852 77.4172 57.2706 77.7194 57.2706 78.0772C57.2706 78.4041 57.5728 78.5829 57.8997 78.6631L58.6954 78.8543C59.818 79.1381 60.0647 79.8289 60.0647 80.3963C60.0647 81.3955 59.0778 82 57.9984 82C57.0239 82 56.0185 81.3955 56 80.2915Z" fill="white"></path><path d="M62.993 80.8773V77.5404H64.0847V76.6214H62.993V74.9869H64.0847V74H61.8951V76.6214H60.9514V77.5404H61.8951V81.8641H73.4723V80.8773H62.993Z" fill="white"></path><circle cx="226" cy="78" r="6" fill="url(#pattern0)"></circle><rect x="240" y="76.5" width="32" height="3" rx="1" fill="white" fill-opacity="0.4"></rect><rect width="240" height="145" transform="translate(44 88)" fill="#F9FAFA"></rect><rect x="56.5" y="96.5" width="65.6667" height="32" rx="3.5" fill="white"></rect><rect x="62" y="102" width="32" height="3" rx="1" fill="#ADBFBF"></rect><path d="M65.2273 120.13C66.5273 120.13 67.5773 119.11 67.5773 117.79C67.5773 116.48 66.6373 115.54 65.5073 115.54C65.3573 115.54 65.2173 115.57 65.1373 115.6L65.0673 115.54L66.5373 113H65.1873L63.2973 116.45C63.0373 116.92 62.8973 117.31 62.8973 117.79C62.8973 119.13 63.9273 120.13 65.2273 120.13ZM65.2473 119C64.5873 119 64.0973 118.48 64.0973 117.79C64.0973 117.13 64.5873 116.58 65.2473 116.58C65.9073 116.58 66.4073 117.13 66.4073 117.79C66.4073 118.47 65.9073 119 65.2473 119ZM71.9413 120H73.1113V118.38H73.9713V117.29H73.1113V113H71.3713L68.8313 117.16V118.38H71.9413V120ZM70.0113 117.29V117.2L71.8513 114.19H71.9413V117.29H70.0113ZM76.7115 115.93C77.6115 115.93 78.2815 115.25 78.2815 114.41C78.2815 113.55 77.6215 112.87 76.7015 112.87C75.8215 112.87 75.1715 113.56 75.1715 114.41C75.1715 115.26 75.8215 115.93 76.7115 115.93ZM75.4615 120H76.6815L81.8815 113H80.6415L75.4615 120ZM76.7215 115.11C76.3115 115.11 76.0415 114.8 76.0415 114.41C76.0415 114.01 76.3015 113.7 76.7115 113.7C77.1215 113.7 77.4015 114.01 77.4015 114.41C77.4015 114.8 77.1315 115.11 76.7215 115.11ZM80.5915 120.13C81.4815 120.13 82.1515 119.46 82.1515 118.61C82.1515 117.76 81.4915 117.07 80.5815 117.07C79.6915 117.07 79.0415 117.76 79.0415 118.61C79.0415 119.47 79.7015 120.13 80.5915 120.13ZM80.5915 119.31C80.1915 119.31 79.9115 119 79.9115 118.61C79.9115 118.21 80.1815 117.91 80.5815 117.91C81.0015 117.91 81.2715 118.21 81.2715 118.61C81.2715 119 81.0115 119.31 80.5915 119.31Z" fill="#002832"></path><path d="M110.667 112.5L113.667 115.5M110.667 112.5L107.667 115.5M110.667 112.5L110.667 119.5" stroke="#109363" stroke-linecap="round" stroke-linejoin="round"></path><rect x="56.5" y="96.5" width="65.6667" height="32" rx="3.5" stroke="#D8DFE5"></rect><rect x="131.167" y="96.5" width="65.6667" height="32" rx="3.5" fill="white"></rect><rect x="136.667" y="102" width="24" height="3" rx="1" fill="#ADBFBF"></rect><path d="M142.288 118.05C142.288 116.51 141.198 116.16 140.208 115.91V114.06C140.668 114.21 140.928 114.58 140.928 115.08H142.148C142.148 113.7 141.218 113.05 140.208 112.91V112.34H139.298V112.9C138.068 113.06 137.388 113.9 137.388 114.85C137.388 116.3 138.358 116.66 139.298 116.89V118.91C138.738 118.75 138.388 118.31 138.388 117.74H137.168C137.168 119.01 138.078 119.91 139.298 120.1V120.85H140.208V120.1C141.528 119.95 142.288 119.09 142.288 118.05ZM138.598 114.85C138.598 114.51 138.808 114.16 139.298 114.04V115.66C138.888 115.51 138.598 115.28 138.598 114.85ZM140.208 118.94V117.13C140.698 117.29 141.048 117.54 141.048 118.07C141.048 118.51 140.728 118.84 140.208 118.94ZM145.645 120.12C147.105 120.12 148.005 119.11 148.005 117.86C148.005 116.99 147.305 115.85 145.975 115.85V115.76L147.795 114.55V113H143.585V114.06H146.605V114.15L144.715 115.42V116.79H145.585C146.405 116.79 146.815 117.28 146.815 117.88C146.815 118.52 146.365 119 145.655 119C145.035 119 144.575 118.59 144.555 117.92H143.435C143.435 118.94 144.155 120.12 145.645 120.12ZM151.582 120.13C152.912 120.13 153.892 119.19 153.892 117.84C153.892 116.6 153.012 115.57 151.702 115.57C151.162 115.57 150.802 115.81 150.692 115.92H150.602L150.712 114.1H153.512V113H149.682L149.452 117.17H150.502C150.502 117.17 150.792 116.63 151.502 116.63C152.262 116.63 152.702 117.17 152.702 117.84C152.702 118.52 152.212 119.02 151.552 119.02C150.952 119.02 150.462 118.69 150.412 117.98H149.302C149.372 119.42 150.372 120.13 151.582 120.13ZM155.619 120.13C156.029 120.13 156.349 119.81 156.349 119.41C156.349 119.01 156.029 118.68 155.619 118.68C155.219 118.68 154.879 119.01 154.879 119.41C154.879 119.81 155.219 120.13 155.619 120.13ZM160.033 120.13C161.333 120.13 162.383 119.11 162.383 117.79C162.383 116.48 161.443 115.54 160.313 115.54C160.163 115.54 160.023 115.57 159.943 115.6L159.873 115.54L161.343 113H159.993L158.103 116.45C157.843 116.92 157.703 117.31 157.703 117.79C157.703 119.13 158.733 120.13 160.033 120.13ZM160.053 119C159.393 119 158.903 118.48 158.903 117.79C158.903 117.13 159.393 116.58 160.053 116.58C160.713 116.58 161.213 117.13 161.213 117.79C161.213 118.47 160.713 119 160.053 119ZM163.837 120H165.017V117.71H165.657L167.007 120H168.417L166.667 117.18V117.09L168.317 114.76H166.917L165.637 116.63H165.017V112.5H163.837V120Z" fill="#002832"></path><path d="M185.333 112.5L188.333 115.5M185.333 112.5L182.333 115.5M185.333 112.5L185.333 119.5" stroke="#109363" stroke-linecap="round" stroke-linejoin="round"></path><rect x="131.167" y="96.5" width="65.6667" height="32" rx="3.5" stroke="#D8DFE5"></rect><rect x="205.833" y="96.5" width="65.6667" height="32" rx="3.5" fill="white"></rect><rect x="211.333" y="102" width="32" height="3" rx="1" fill="#ADBFBF"></rect><path d="M215.246 120H216.416V118.38H217.276V117.29H216.416V113H214.676L212.136 117.16V118.38H215.246V120ZM213.316 117.29V117.2L215.156 114.19H215.246V117.29H213.316ZM219.217 120.13C219.627 120.13 219.947 119.81 219.947 119.41C219.947 119.01 219.627 118.68 219.217 118.68C218.817 118.68 218.477 119.01 218.477 119.41C218.477 119.81 218.817 120.13 219.217 120.13ZM222.34 120H223.69L225.58 116.55C225.84 116.08 225.98 115.69 225.98 115.21C225.98 113.87 224.95 112.87 223.65 112.87C222.35 112.87 221.3 113.89 221.3 115.21C221.3 116.52 222.24 117.46 223.37 117.46C223.52 117.46 223.66 117.43 223.74 117.4L223.81 117.46L222.34 120ZM223.63 116.42C222.97 116.42 222.47 115.87 222.47 115.21C222.47 114.53 222.97 114 223.63 114C224.29 114 224.78 114.52 224.78 115.21C224.78 115.87 224.29 116.42 223.63 116.42ZM229.724 120.12C231.104 120.12 232.074 119.26 232.074 117.99C232.074 117.07 231.514 116.55 231.024 116.3V116.21C231.424 115.98 231.804 115.45 231.804 114.77C231.804 113.62 230.884 112.87 229.724 112.87C228.614 112.87 227.654 113.62 227.654 114.77C227.654 115.45 228.024 115.98 228.424 116.21V116.3C227.934 116.55 227.384 117.07 227.384 117.99C227.384 119.26 228.344 120.12 229.724 120.12ZM229.724 115.71C229.154 115.71 228.804 115.3 228.804 114.82C228.804 114.34 229.134 113.94 229.724 113.94C230.304 113.94 230.644 114.34 230.644 114.82C230.644 115.3 230.294 115.71 229.724 115.71ZM229.724 119.02C228.964 119.02 228.564 118.5 228.564 117.96C228.564 117.3 229.064 116.88 229.724 116.88C230.394 116.88 230.884 117.3 230.884 117.96C230.884 118.5 230.484 119.02 229.724 119.02ZM233.838 120H237.628V118.9H236.398V113H235.118L233.578 113.82V115.01L235.138 114.19H235.228V118.9H233.838V120Z" fill="#002832"></path><path d="M260 112.5L263 115.5M260 112.5L257 115.5M260 112.5L260 119.5" stroke="#109363" stroke-linecap="round" stroke-linejoin="round"></path><rect x="205.833" y="96.5" width="65.6667" height="32" rx="3.5" stroke="#D8DFE5"></rect><rect x="56.5" y="137.5" width="215" height="85" rx="3.5" fill="white"></rect><rect x="66" y="149.5" width="46" height="3" rx="1" fill="#577578"></rect><rect x="232" y="150" width="24" height="2" rx="1" fill="#ADBFBF"></rect><rect x="226.5" y="145.5" width="35" height="11" rx="2.5" stroke="#D8DFE5"></rect><path d="M67.0757 171H70.0117V170.264H68.9957V165.4H68.0917L66.8597 166.048V166.848L68.1397 166.176H68.1957V170.264H67.0757V171ZM72.8701 171.104C73.7981 171.104 74.7101 170.432 74.7101 169.304V167.096C74.7101 165.968 73.7981 165.296 72.8701 165.296C71.9421 165.296 71.0301 165.968 71.0301 167.096V169.304C71.0301 170.432 71.9421 171.104 72.8701 171.104ZM72.8701 170.344C72.2621 170.344 71.8301 169.888 71.8301 169.28V167.128C71.8301 166.52 72.2701 166.056 72.8701 166.056C73.4701 166.056 73.9101 166.52 73.9101 167.128V169.28C73.9101 169.888 73.4781 170.344 72.8701 170.344ZM77.7841 171.104C78.7121 171.104 79.6241 170.432 79.6241 169.304V167.096C79.6241 165.968 78.7121 165.296 77.7841 165.296C76.8561 165.296 75.9441 165.968 75.9441 167.096V169.304C75.9441 170.432 76.8561 171.104 77.7841 171.104ZM77.7841 170.344C77.1761 170.344 76.7441 169.888 76.7441 169.28V167.128C76.7441 166.52 77.1841 166.056 77.7841 166.056C78.3841 166.056 78.8241 166.52 78.8241 167.128V169.28C78.8241 169.888 78.3921 170.344 77.7841 170.344ZM82.0102 167.744C82.7302 167.744 83.2662 167.2 83.2662 166.528C83.2662 165.84 82.7382 165.296 82.0022 165.296C81.2982 165.296 80.7782 165.848 80.7782 166.528C80.7782 167.208 81.2982 167.744 82.0102 167.744ZM81.0182 171H81.8342L86.0502 165.4H85.2262L81.0182 171ZM82.0182 167.168C81.6502 167.168 81.4022 166.88 81.4022 166.528C81.4022 166.168 81.6422 165.88 82.0102 165.88C82.3862 165.88 82.6422 166.168 82.6422 166.528C82.6422 166.88 82.4022 167.168 82.0182 167.168ZM85.0342 171.104C85.7462 171.104 86.2822 170.568 86.2822 169.888C86.2822 169.208 85.7542 168.656 85.0262 168.656C84.3142 168.656 83.7942 169.208 83.7942 169.888C83.7942 170.576 84.3222 171.104 85.0342 171.104ZM85.0342 170.528C84.6662 170.528 84.4102 170.248 84.4102 169.888C84.4102 169.528 84.6582 169.248 85.0262 169.248C85.4102 169.248 85.6502 169.528 85.6502 169.888C85.6502 170.248 85.4182 170.528 85.0342 170.528Z" fill="#7F8C8D"></path><path d="M72.7225 189.604C73.7705 189.604 74.5385 188.86 74.5385 187.788C74.5385 186.804 73.8425 185.972 72.7865 185.972C72.2505 185.972 71.9385 186.26 71.8905 186.3H71.8345L71.9385 184.636H74.2265V183.9H71.2345L71.0505 187.188H71.7545C71.7545 187.188 72.0185 186.7 72.6505 186.7C73.3385 186.7 73.7305 187.18 73.7305 187.788C73.7305 188.404 73.2985 188.86 72.6985 188.86C72.1545 188.86 71.7465 188.572 71.6825 187.964H70.9305C70.9865 189.044 71.7625 189.604 72.7225 189.604ZM77.5693 189.604C78.4973 189.604 79.4093 188.932 79.4093 187.804V185.596C79.4093 184.468 78.4973 183.796 77.5693 183.796C76.6413 183.796 75.7293 184.468 75.7293 185.596V187.804C75.7293 188.932 76.6413 189.604 77.5693 189.604ZM77.5693 188.844C76.9613 188.844 76.5293 188.388 76.5293 187.78V185.628C76.5293 185.02 76.9693 184.556 77.5693 184.556C78.1693 184.556 78.6093 185.02 78.6093 185.628V187.78C78.6093 188.388 78.1773 188.844 77.5693 188.844ZM81.7953 186.244C82.5153 186.244 83.0513 185.7 83.0513 185.028C83.0513 184.34 82.5233 183.796 81.7873 183.796C81.0833 183.796 80.5633 184.348 80.5633 185.028C80.5633 185.708 81.0833 186.244 81.7953 186.244ZM80.8033 189.5H81.6193L85.8353 183.9H85.0113L80.8033 189.5ZM81.8033 185.668C81.4353 185.668 81.1873 185.38 81.1873 185.028C81.1873 184.668 81.4273 184.38 81.7953 184.38C82.1713 184.38 82.4273 184.668 82.4273 185.028C82.4273 185.38 82.1873 185.668 81.8033 185.668ZM84.8193 189.604C85.5313 189.604 86.0673 189.068 86.0673 188.388C86.0673 187.708 85.5393 187.156 84.8113 187.156C84.0993 187.156 83.5793 187.708 83.5793 188.388C83.5793 189.076 84.1073 189.604 84.8193 189.604ZM84.8193 189.028C84.4513 189.028 84.1953 188.748 84.1953 188.388C84.1953 188.028 84.4433 187.748 84.8113 187.748C85.1953 187.748 85.4353 188.028 85.4353 188.388C85.4353 188.748 85.2033 189.028 84.8193 189.028Z" fill="#7F8C8D"></path><path d="M77.7099 208.104C78.6379 208.104 79.5499 207.432 79.5499 206.304V204.096C79.5499 202.968 78.6379 202.296 77.7099 202.296C76.7819 202.296 75.8699 202.968 75.8699 204.096V206.304C75.8699 207.432 76.7819 208.104 77.7099 208.104ZM77.7099 207.344C77.1019 207.344 76.6699 206.888 76.6699 206.28V204.128C76.6699 203.52 77.1099 203.056 77.7099 203.056C78.3099 203.056 78.7499 203.52 78.7499 204.128V206.28C78.7499 206.888 78.3179 207.344 77.7099 207.344ZM81.936 204.744C82.656 204.744 83.192 204.2 83.192 203.528C83.192 202.84 82.664 202.296 81.928 202.296C81.224 202.296 80.704 202.848 80.704 203.528C80.704 204.208 81.224 204.744 81.936 204.744ZM80.944 208H81.76L85.976 202.4H85.152L80.944 208ZM81.944 204.168C81.576 204.168 81.328 203.88 81.328 203.528C81.328 203.168 81.568 202.88 81.936 202.88C82.312 202.88 82.568 203.168 82.568 203.528C82.568 203.88 82.328 204.168 81.944 204.168ZM84.96 208.104C85.672 208.104 86.208 207.568 86.208 206.888C86.208 206.208 85.68 205.656 84.952 205.656C84.24 205.656 83.72 206.208 83.72 206.888C83.72 207.576 84.248 208.104 84.96 208.104ZM84.96 207.528C84.592 207.528 84.336 207.248 84.336 206.888C84.336 206.528 84.584 206.248 84.952 206.248C85.336 206.248 85.576 206.528 85.576 206.888C85.576 207.248 85.344 207.528 84.96 207.528Z" fill="#7F8C8D"></path><path d="M95 168.5H262" stroke="#BDC3C7" stroke-dasharray="2 2"></path><path d="M95 187H262" stroke="#BDC3C7" stroke-dasharray="2 2"></path><path d="M95 205.5H262" stroke="#BDC3C7" stroke-dasharray="2 2"></path><path d="M94.42 189.2L108.385 182L122.35 185.712L136.315 192.687L150.28 188.975L164.245 190.775L178.21 198.2L192.175 196.287L206.14 184.025L220.105 189.537L234.07 190.325L248.035 200L262 194.6" stroke="#18ACB4"></path><path d="M94.42 202.199L108.385 200.299L122.35 206L136.315 196.379L150.28 194.598L164.245 180.464L178.21 184.027L192.175 192.697L206.14 194.479L220.105 192.341L234.07 185.808L248.035 184.383L262 175" stroke="#702EE8"></path><path d="M94.42 191.8L108.385 193L122.35 188.44L136.315 181.12L150.28 181.72L164.245 184.24L178.21 187.84L192.175 179.8L206.14 179.2L220.105 179.44L234.07 172.84L248.035 180L262 171.52" stroke="#DA30AA"></path><rect x="56.5" y="137.5" width="215" height="85" rx="3.5" stroke="#D8DFE5"></rect></g><rect x="44.5" y="68.5" width="239" height="164" rx="5.5" stroke="black" stroke-opacity="0.08" shape-rendering="crispEdges"></rect></g><defs><filter id="filter0_dd_1039_16078" x="40" y="65" width="248" height="173" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1039_16078"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_1039_16078" result="effect2_dropShadow_1039_16078"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1039_16078" result="shape"></feBlend></filter><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_1039_16078" transform="scale(0.005)"></use></pattern><radialGradient id="paint0_radial_1039_16078" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163.971 150) rotate(90) scale(150 163.5)"><stop stop-color="#D9D9D9"></stop><stop offset="1" stop-color="#D9D9D9" stop-opacity="0"></stop></radialGradient><clipPath id="clip0_1039_16078"><rect x="44" y="68" width="240" height="165" rx="6" fill="white"></rect></clipPath><image id="image0_1039_16078" width="200" height="200" xlink:href="data:image/jpeg;base64,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"></image></defs>', 4);
const _hoisted_6 = [
  _hoisted_2$1
];
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_6);
}
const ExpertiseIllustration = { render: render$1 };
const _hoisted_1 = {
  width: "327",
  height: "272",
  viewBox: "0 0 327 272",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<g clip-path="url(#clip0_1039_16179)"><mask id="mask0_1039_16179" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="327" height="272"><rect width="327" height="272" fill="url(#paint0_radial_1039_16179)"></rect></mask><g mask="url(#mask0_1039_16179)"><circle cx="196" cy="160" r="39.5" stroke="#BCDCDC"></circle><circle cx="132" cy="160" r="39.5" stroke="#BCDCDC"></circle><circle cx="196" cy="112" r="39.5" stroke="#BCDCDC"></circle><circle cx="132" cy="112" r="39.5" stroke="#BCDCDC"></circle><g filter="url(#filter0_dd_1039_16179)"><rect x="-40" y="48" width="48" height="48" rx="24" fill="white"></rect><rect x="-39.5" y="48.5" width="47" height="47" rx="23.5" stroke="#BCDCDC"></rect></g><rect x="32.5" y="48.5" width="47" height="47" rx="23.5" fill="white"></rect><rect x="32.5" y="48.5" width="47" height="47" rx="23.5" stroke="#BCDCDC"></rect><rect x="248.5" y="48.5" width="47" height="47" rx="23.5" fill="white"></rect><rect x="248.5" y="48.5" width="47" height="47" rx="23.5" stroke="#BCDCDC"></rect><g filter="url(#filter1_dd_1039_16179)"><rect x="320" y="48" width="48" height="48" rx="24" fill="white"></rect><rect x="320.5" y="48.5" width="47" height="47" rx="23.5" stroke="#BCDCDC"></rect></g><rect x="-3.5" y="112.5" width="47" height="47" rx="23.5" fill="white"></rect><rect x="-3.5" y="112.5" width="47" height="47" rx="23.5" stroke="#BCDCDC"></rect><rect x="284.5" y="112.5" width="47" height="47" rx="23.5" fill="white"></rect><rect x="284.5" y="112.5" width="47" height="47" rx="23.5" stroke="#BCDCDC"></rect><rect x="-39.5" y="176.5" width="47" height="47" rx="23.5" fill="white"></rect><rect x="-39.5" y="176.5" width="47" height="47" rx="23.5" stroke="#BCDCDC"></rect><rect x="32.5" y="176.5" width="47" height="47" rx="23.5" fill="white"></rect><rect x="32.5" y="176.5" width="47" height="47" rx="23.5" stroke="#BCDCDC"></rect><rect x="248.5" y="176.5" width="47" height="47" rx="23.5" fill="white"></rect><rect x="248.5" y="176.5" width="47" height="47" rx="23.5" stroke="#BCDCDC"></rect><rect x="320.5" y="176.5" width="47" height="47" rx="23.5" fill="white"></rect><rect x="320.5" y="176.5" width="47" height="47" rx="23.5" stroke="#BCDCDC"></rect></g><path d="M128 200L92 136L128 72H200L236 136L200 200H128Z" stroke="#54ABA3"></path><g filter="url(#filter2_dd_1039_16179)"><rect x="104" y="48" width="48" height="48" rx="24" fill="white" shape-rendering="crispEdges"></rect><path d="M128 84.0005C134.628 84.0005 140 78.6279 140 72.0005C140 70.4317 139.699 68.9331 139.152 67.5596C137.617 68.4491 136.254 69.6042 135.127 70.9695C135.175 71.3062 135.2 71.6504 135.2 72.0005C135.2 75.4275 132.806 78.2953 129.599 79.0224C128.276 80.7503 126.74 82.2979 125.03 83.6301C125.116 83.6521 125.203 83.6731 125.29 83.6932C126.161 83.8943 127.068 84.0005 128 84.0005Z" fill="#4662D5"></path><path d="M121.902 82.3367C124.379 80.686 126.513 78.5571 128.174 76.0654L131.82 70.5959C133.349 68.302 135.388 66.3986 137.77 65.0305C136.797 63.6678 135.545 62.5174 134.098 61.6621C131.622 63.3128 129.487 65.4417 127.826 67.9333L124.18 73.4028C122.651 75.6967 120.613 77.6002 118.23 78.9682C119.204 80.3308 120.455 81.4813 121.902 82.3367Z" fill="#4662D5"></path><path d="M116.848 76.4408C118.383 75.5512 119.746 74.396 120.873 73.0307C120.825 72.6941 120.8 72.35 120.8 72C120.8 68.5731 123.194 65.7053 126.401 64.9782C127.724 63.2502 129.261 61.7026 130.97 60.3704C130.884 60.3484 130.797 60.3274 130.71 60.3073C129.839 60.1062 128.932 60 128 60C121.373 60 116 65.3726 116 72C116 73.5688 116.301 75.0672 116.848 76.4408Z" fill="#4662D5"></path><rect x="104.5" y="48.5" width="47" height="47" rx="23.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g><g filter="url(#filter3_dd_1039_16179)"><rect x="176" y="48" width="48" height="48" rx="24" fill="white" shape-rendering="crispEdges"></rect><path d="M203.66 78.1419C203.411 78.3316 203.335 78.6744 203.479 78.9528L204.38 80.6911C204.491 80.9052 204.337 81.1618 204.097 81.1618H195.312C195.072 81.1618 194.918 80.9052 195.029 80.6911L195.93 78.9528C196.074 78.6744 195.998 78.3316 195.75 78.1419L194.951 77.5317C193.047 76.077 191.822 73.7776 191.822 71.1892C191.822 66.7982 195.351 63.2387 199.705 63.2387C201.618 63.2387 203.371 63.926 204.736 65.0692V62.8173C203.269 61.9182 201.547 61.4004 199.705 61.4004C194.345 61.4004 190 65.783 190 71.1892C190 74.2798 191.42 77.0358 193.638 78.8298C193.759 78.9281 193.798 79.0991 193.726 79.2383L192.265 82.0587C192.043 82.487 192.351 83 192.83 83H206.579C207.059 83 207.367 82.487 207.145 82.0587L205.684 79.2383C205.612 79.0991 205.65 78.9281 205.771 78.8298C207.989 77.0358 209.409 74.2798 209.409 71.1892C209.409 69.4626 208.966 67.8405 208.188 66.4322H206.021C207.004 67.7587 207.587 69.4053 207.587 71.1892C207.587 73.7776 206.362 76.077 204.458 77.5317L203.66 78.1419Z" fill="#491797"></path><path d="M204.193 61.636C204.236 61.4247 204.535 61.4247 204.578 61.636L205.327 65.3289C205.342 65.4067 205.403 65.4675 205.48 65.4834L209.141 66.2382C209.35 66.2813 209.35 66.5832 209.141 66.6264L205.48 67.3812C205.403 67.3971 205.342 67.4579 205.327 67.5357L204.578 71.2286C204.535 71.4398 204.236 71.4398 204.193 71.2286L203.445 67.5357C203.429 67.4579 203.369 67.3971 203.292 67.3812L199.631 66.6264C199.421 66.5832 199.421 66.2813 199.631 66.2382L203.292 65.4834C203.369 65.4675 203.429 65.4067 203.445 65.3289L204.193 61.636Z" fill="#A477E9"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M203.445 65.3291C203.429 65.4069 203.369 65.4677 203.292 65.4836L199.631 66.2384C199.421 66.2815 199.421 66.5834 199.631 66.6266L203.292 67.3814C203.369 67.3973 203.429 67.4581 203.445 67.5359L204.193 71.2288C204.236 71.44 204.535 71.44 204.578 71.2288L205.326 67.5359C205.342 67.4581 205.402 67.3973 205.48 67.3814L209.141 66.6266C209.35 66.5834 209.35 66.2815 209.141 66.2384L205.48 65.4836C205.402 65.4677 205.342 65.4069 205.326 65.3291L204.578 61.6362C204.535 61.4249 204.236 61.4249 204.193 61.6362L203.445 65.3291ZM206.244 64.5576L205.609 61.4236C205.337 60.0802 203.434 60.0802 203.162 61.4236L202.527 64.5576L199.42 65.1981C198.088 65.4727 198.088 67.3922 199.42 67.6668L202.527 68.3074L203.162 71.4413C203.434 72.7848 205.337 72.7848 205.609 71.4413L206.244 68.3074L209.352 67.6668C210.683 67.3922 210.683 65.4727 209.352 65.1981L206.244 64.5576Z" fill="white"></path><path d="M209.202 59.0792C209.223 58.9736 209.373 58.9736 209.394 59.0792L209.768 60.9257C209.776 60.9646 209.806 60.995 209.845 61.0029L211.675 61.3803C211.78 61.4019 211.78 61.5528 211.675 61.5744L209.845 61.9518C209.806 61.9598 209.776 61.9902 209.768 62.0291L209.394 63.8755C209.373 63.9811 209.223 63.9811 209.202 63.8755L208.827 62.0291C208.82 61.9902 208.79 61.9598 208.751 61.9518L206.92 61.5744C206.816 61.5528 206.816 61.4019 206.92 61.3803L208.751 61.0029C208.79 60.995 208.82 60.9646 208.827 60.9257L209.202 59.0792Z" fill="#A477E9"></path><rect x="176.5" y="48.5" width="47" height="47" rx="23.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g><g filter="url(#filter4_dd_1039_16179)"><rect x="68" y="112" width="48" height="48" rx="24" fill="white" shape-rendering="crispEdges"></rect><path d="M80.375 128.861V138.631C80.375 143.567 83.6869 147.747 88.2051 149.067V146.739C84.9233 145.508 82.5851 142.337 82.5851 138.632V128.862C82.5851 127.677 83.551 126.711 84.7364 126.711V124.501C82.3302 124.5 80.375 126.456 80.375 128.861Z" fill="url(#paint1_linear_1039_16179)"></path><path d="M84.7364 124.5V126.71C85.9218 126.71 86.8877 127.676 86.8877 128.861V138.631C86.8877 141.035 88.8429 142.99 91.2465 142.99H92.2933V140.78H91.2465C90.061 140.78 89.0978 139.814 89.0978 138.631V128.861C89.0978 126.457 87.1399 124.5 84.7364 124.5Z" fill="url(#paint2_linear_1039_16179)"></path><path d="M88.2051 146.738V149.066C89.171 149.348 90.1904 149.5 91.2478 149.5C93.6539 149.5 95.6091 147.545 95.6091 145.141V128.861C95.6091 127.676 96.5751 126.71 97.7579 126.71V124.5C95.3543 124.5 93.399 126.458 93.399 128.861V145.142C93.399 146.328 92.4332 147.291 91.2478 147.291C90.1774 147.291 89.154 147.096 88.2051 146.738Z" fill="url(#paint3_linear_1039_16179)"></path><path d="M96.7135 140.78V142.99H97.7578C100.161 142.99 102.122 141.035 102.122 138.631V128.861C102.122 126.458 100.161 124.5 97.7578 124.5V126.71C98.9459 126.71 99.9117 127.676 99.9117 128.861V138.631C99.9117 139.814 98.9459 140.78 97.7578 140.78H96.7135Z" fill="url(#paint4_linear_1039_16179)"></path><rect x="68.5" y="112.5" width="47" height="47" rx="23.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g><g filter="url(#filter5_dd_1039_16179)"><g clip-path="url(#clip1_1039_16179)"><rect x="140" y="112" width="48" height="48" rx="24" fill="#002832"></rect><rect x="140" y="112" width="48" height="48" rx="24" fill="url(#paint5_radial_1039_16179)" style="mix-blend-mode:overlay;"></rect><path d="M153 141.156H155.304C155.304 142.085 156.136 142.904 157.483 142.904C158.843 142.904 159.675 142.224 159.675 141.336C159.675 140.559 159.037 140.142 158.163 139.948L156.567 139.573C154.374 138.991 153.361 137.853 153.361 136.104C153.361 134.189 155.109 132.593 157.552 132.593C159.578 132.593 161.743 133.648 161.743 136.132H159.37C159.37 135.271 158.482 134.688 157.608 134.688C156.567 134.688 155.859 135.368 155.859 136.173C155.859 136.909 156.539 137.311 157.274 137.492L159.065 137.922C161.591 138.56 162.146 140.115 162.146 141.391C162.146 143.64 159.925 145 157.496 145C155.304 145 153.042 143.64 153 141.156Z" fill="white"></path><path d="M168.736 142.474V134.966H171.193V132.898H168.736V129.22H171.193V127H166.266V132.898H164.143V134.966H166.266V144.695H192.315V142.474H168.736Z" fill="white"></path></g><rect x="140.5" y="112.5" width="47" height="47" rx="23.5" stroke="#031C26"></rect></g><g filter="url(#filter6_dd_1039_16179)"><rect x="212" y="112" width="48" height="48" rx="24" fill="white" shape-rendering="crispEdges"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M231.608 126.767C231.588 126.632 231.577 126.495 231.577 126.359C231.492 125.802 231.233 125.285 230.839 124.88C230.445 124.476 229.934 124.204 229.377 124.103C228.821 124.001 228.247 124.075 227.734 124.314C227.222 124.553 226.797 124.945 226.518 125.436C226.24 125.926 226.121 126.491 226.18 127.052C226.239 127.613 226.472 128.142 226.846 128.564C227.22 128.987 227.717 129.284 228.268 129.412C228.819 129.54 229.396 129.494 229.92 129.28C230.006 129.234 230.095 129.193 230.186 129.158C230.502 129.032 230.843 128.979 231.183 129.003C231.523 129.027 231.853 129.127 232.148 129.296C232.444 129.466 232.697 129.699 232.888 129.98C233.08 130.261 233.206 130.581 233.255 130.917C233.272 131.016 233.28 131.117 233.281 131.217C233.357 131.777 233.608 132.298 233.996 132.708C234.385 133.118 234.893 133.397 235.449 133.505C236.005 133.613 236.581 133.545 237.096 133.31C237.61 133.075 238.039 132.686 238.32 132.196C238.556 131.785 238.687 131.323 238.704 130.85C238.754 130.515 238.88 130.194 239.071 129.914C239.263 129.633 239.516 129.399 239.811 129.229C240.106 129.06 240.436 128.959 240.776 128.934C241.116 128.909 241.457 128.961 241.774 129.086C241.866 129.122 241.955 129.164 242.04 129.214C242.562 129.426 243.138 129.471 243.687 129.343C244.236 129.214 244.731 128.918 245.104 128.497C245.477 128.075 245.709 127.548 245.768 126.989C245.826 126.429 245.709 125.866 245.432 125.376C245.154 124.887 244.731 124.496 244.22 124.257C243.71 124.018 243.137 123.943 242.582 124.043C242.027 124.143 241.517 124.413 241.123 124.815C240.728 125.218 240.47 125.732 240.382 126.287C240.382 126.424 240.372 126.56 240.351 126.695C240.288 127.055 240.138 127.393 239.915 127.682C239.691 127.971 239.401 128.202 239.069 128.355C238.736 128.507 238.372 128.578 238.006 128.56C237.641 128.541 237.285 128.435 236.97 128.25C236.592 128.105 236.186 128.046 235.782 128.078C235.379 128.11 234.987 128.231 234.637 128.434C234.334 128.582 233.998 128.651 233.662 128.633C233.325 128.615 232.998 128.512 232.713 128.332C232.425 128.168 232.178 127.942 231.988 127.672C231.797 127.401 231.67 127.092 231.613 126.767" fill="#DA30AA"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M245.897 135.363C246.026 135.411 246.151 135.469 246.271 135.536C246.796 135.737 247.371 135.77 247.917 135.631C248.462 135.492 248.95 135.187 249.313 134.758C249.677 134.33 249.898 133.8 249.945 133.241C249.992 132.682 249.864 132.122 249.577 131.639C249.291 131.156 248.861 130.774 248.347 130.546C247.833 130.317 247.26 130.254 246.708 130.365C246.157 130.475 245.653 130.754 245.267 131.163C244.882 131.571 244.634 132.09 244.557 132.645C244.562 132.744 244.562 132.842 244.557 132.941C244.506 133.276 244.38 133.596 244.188 133.876C243.996 134.156 243.743 134.39 243.448 134.559C243.153 134.729 242.824 134.83 242.484 134.855C242.145 134.88 241.804 134.829 241.487 134.705C241.394 134.668 241.304 134.625 241.216 134.578C240.692 134.365 240.114 134.321 239.564 134.452C239.013 134.583 238.518 134.882 238.146 135.307C237.774 135.732 237.545 136.262 237.49 136.823C237.435 137.384 237.557 137.948 237.839 138.437C238.083 138.849 238.419 139.198 238.822 139.457C239.088 139.668 239.303 139.936 239.451 140.241C239.599 140.547 239.676 140.882 239.676 141.221C239.676 141.56 239.599 141.895 239.451 142.2C239.303 142.505 239.088 142.774 238.822 142.985C238.745 143.045 238.665 143.101 238.581 143.153C238.135 143.497 237.808 143.972 237.644 144.51C237.481 145.049 237.49 145.624 237.671 146.157C237.851 146.691 238.193 147.154 238.65 147.485C239.107 147.815 239.656 147.995 240.22 148C240.785 148.005 241.337 147.835 241.8 147.513C242.262 147.191 242.613 146.734 242.803 146.204C242.993 145.674 243.013 145.099 242.859 144.558C242.706 144.016 242.387 143.536 241.948 143.184C241.828 143.116 241.715 143.037 241.61 142.949C241.355 142.738 241.151 142.474 241.01 142.175C240.869 141.876 240.797 141.551 240.797 141.221C240.798 140.821 240.905 140.428 241.107 140.083C241.309 139.737 241.599 139.451 241.948 139.253C242.266 139.002 242.523 138.683 242.7 138.319C242.877 137.955 242.97 137.556 242.971 137.152C242.99 136.819 243.094 136.496 243.273 136.215C243.452 135.933 243.7 135.701 243.994 135.541C244.282 135.376 244.602 135.276 244.933 135.248C245.263 135.219 245.596 135.264 245.907 135.378" fill="#0D8FAF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M226.057 135.363C225.929 135.411 225.804 135.469 225.684 135.536C225.158 135.737 224.583 135.77 224.038 135.631C223.493 135.492 223.004 135.187 222.641 134.758C222.278 134.33 222.057 133.8 222.01 133.241C221.962 132.682 222.091 132.122 222.377 131.639C222.663 131.156 223.093 130.774 223.607 130.546C224.122 130.317 224.694 130.254 225.246 130.365C225.798 130.475 226.301 130.754 226.687 131.163C227.073 131.571 227.321 132.09 227.398 132.645C227.393 132.744 227.393 132.842 227.398 132.941C227.449 133.276 227.575 133.596 227.767 133.876C227.959 134.156 228.211 134.39 228.506 134.559C228.801 134.729 229.131 134.83 229.47 134.855C229.81 134.88 230.15 134.829 230.467 134.705C230.56 134.668 230.651 134.625 230.738 134.578C231.263 134.364 231.841 134.319 232.392 134.449C232.943 134.579 233.439 134.878 233.811 135.304C234.183 135.73 234.412 136.261 234.466 136.823C234.519 137.385 234.395 137.949 234.11 138.437C233.869 138.85 233.532 139.2 233.128 139.457C232.862 139.668 232.648 139.937 232.5 140.242C232.353 140.547 232.277 140.882 232.277 141.221C232.277 141.559 232.353 141.894 232.5 142.199C232.648 142.505 232.862 142.773 233.128 142.985C233.204 143.045 233.285 143.101 233.368 143.153C233.812 143.498 234.137 143.971 234.299 144.508C234.461 145.046 234.45 145.62 234.27 146.151C234.09 146.682 233.748 147.144 233.292 147.473C232.836 147.802 232.289 147.981 231.726 147.987C231.164 147.992 230.613 147.822 230.152 147.502C229.69 147.181 229.34 146.725 229.15 146.197C228.959 145.669 228.939 145.096 229.091 144.556C229.242 144.016 229.559 143.536 229.997 143.184C230.347 142.988 230.639 142.702 230.842 142.357C231.045 142.012 231.152 141.618 231.152 141.218C231.152 140.818 231.045 140.425 230.842 140.079C230.639 139.734 230.347 139.449 229.997 139.253C229.679 139.001 229.422 138.682 229.245 138.319C229.068 137.955 228.975 137.556 228.973 137.152C228.954 136.819 228.85 136.496 228.671 136.215C228.492 135.933 228.244 135.701 227.95 135.541C227.663 135.376 227.342 135.276 227.012 135.248C226.681 135.219 226.348 135.264 226.037 135.378" fill="#E1C000"></path><rect x="212.5" y="112.5" width="47" height="47" rx="23.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g><g filter="url(#filter7_dd_1039_16179)"><rect x="104" y="176" width="48" height="48" rx="24" fill="white" shape-rendering="crispEdges"></rect><g clip-path="url(#clip2_1039_16179)"><path d="M128 200H118V210H128V200Z" fill="#131313"></path></g><rect x="133" y="190" width="5" height="20" fill="#131313"></rect><rect x="118" y="195" width="5" height="20" transform="rotate(-90 118 195)" fill="#131313"></rect><rect x="104.5" y="176.5" width="47" height="47" rx="23.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g><g filter="url(#filter8_dd_1039_16179)"><rect x="176" y="176" width="48" height="48" rx="24" fill="white" shape-rendering="crispEdges"></rect><path d="M201.094 208.385C198.441 209.901 195.15 209.901 192.512 208.385C191.769 207.961 190.829 208.218 190.404 208.961C189.98 209.704 190.238 210.644 190.981 211.069C192.77 212.1 194.786 212.6 196.803 212.6C198.82 212.6 200.836 212.085 202.625 211.069C203.368 210.644 203.626 209.704 203.202 208.961C202.777 208.218 201.837 207.961 201.094 208.385Z" fill="#18ACB4"></path><path d="M202.216 187.4C198.41 187.4 195.302 190.509 195.302 194.314C195.302 194.39 195.302 194.466 195.302 194.542C195.302 194.587 195.302 194.618 195.302 194.663V204.883C195.302 205.732 195.999 206.429 196.849 206.429C197.698 206.429 198.395 205.732 198.395 204.883V200.076C199.487 200.804 200.806 201.229 202.216 201.229C206.037 201.229 209.13 198.12 209.13 194.314C209.13 190.509 206.037 187.4 202.216 187.4ZM202.216 198.151C200.109 198.151 198.395 196.437 198.395 194.33C198.395 192.222 200.109 190.509 202.216 190.509C204.324 190.509 206.037 192.222 206.037 194.33C206.052 196.422 204.324 198.151 202.216 198.151Z" fill="#18ACB4"></path><rect x="176.5" y="176.5" width="47" height="47" rx="23.5" stroke="#BCDCDC" shape-rendering="crispEdges"></rect></g></g><defs><filter id="filter0_dd_1039_16179" x="-44" y="45" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1039_16179"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_1039_16179" result="effect2_dropShadow_1039_16179"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1039_16179" result="shape"></feBlend></filter><filter id="filter1_dd_1039_16179" x="316" y="45" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1039_16179"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_1039_16179" result="effect2_dropShadow_1039_16179"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1039_16179" result="shape"></feBlend></filter><filter id="filter2_dd_1039_16179" x="100" y="45" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1039_16179"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_1039_16179" result="effect2_dropShadow_1039_16179"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1039_16179" result="shape"></feBlend></filter><filter id="filter3_dd_1039_16179" x="172" y="45" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1039_16179"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_1039_16179" result="effect2_dropShadow_1039_16179"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1039_16179" result="shape"></feBlend></filter><filter id="filter4_dd_1039_16179" x="64" y="109" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1039_16179"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_1039_16179" result="effect2_dropShadow_1039_16179"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1039_16179" result="shape"></feBlend></filter><filter id="filter5_dd_1039_16179" x="130" y="106" width="68" height="68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1039_16179"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_1039_16179"></feMorphology><feOffset dy="4"></feOffset><feGaussianBlur stdDeviation="6"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.12 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_1039_16179" result="effect2_dropShadow_1039_16179"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1039_16179" result="shape"></feBlend></filter><filter id="filter6_dd_1039_16179" x="208" y="109" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1039_16179"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_1039_16179" result="effect2_dropShadow_1039_16179"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1039_16179" result="shape"></feBlend></filter><filter id="filter7_dd_1039_16179" x="100" y="173" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1039_16179"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_1039_16179" result="effect2_dropShadow_1039_16179"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1039_16179" result="shape"></feBlend></filter><filter id="filter8_dd_1039_16179" x="172" y="173" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1039_16179"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="0.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.0666667 0 0 0 0 0.0941176 0 0 0 0 0.109804 0 0 0 0.16 0"></feColorMatrix><feBlend mode="normal" in2="effect1_dropShadow_1039_16179" result="effect2_dropShadow_1039_16179"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1039_16179" result="shape"></feBlend></filter><radialGradient id="paint0_radial_1039_16179" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(163.5 136) rotate(90) scale(136 163.5)"><stop stop-color="#D9D9D9"></stop><stop offset="1" stop-color="#D9D9D9" stop-opacity="0"></stop></radialGradient><linearGradient id="paint1_linear_1039_16179" x1="85.6538" y1="146.046" x2="81.1582" y2="125.905" gradientUnits="userSpaceOnUse"><stop stop-color="#9B6DEE"></stop><stop offset="1" stop-color="#6F2DE7"></stop></linearGradient><linearGradient id="paint2_linear_1039_16179" x1="97.0041" y1="146.554" x2="89.0018" y2="135.18" gradientUnits="userSpaceOnUse"><stop stop-color="#43129C"></stop><stop offset="1" stop-color="#6F2DE7"></stop></linearGradient><linearGradient id="paint3_linear_1039_16179" x1="90.753" y1="147.347" x2="96.1478" y2="132.466" gradientUnits="userSpaceOnUse"><stop stop-color="#9B6DEE"></stop><stop offset="1" stop-color="#6F2DE7"></stop></linearGradient><linearGradient id="paint4_linear_1039_16179" x1="90.7488" y1="147.188" x2="99.6952" y2="132.577" gradientUnits="userSpaceOnUse"><stop stop-color="#43129C"></stop><stop offset="1" stop-color="#6F2DE7"></stop></linearGradient><radialGradient id="paint5_radial_1039_16179" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(188 112) rotate(116.419) scale(41.2606 32.9488)"><stop stop-color="white"></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></radialGradient><clipPath id="clip0_1039_16179"><rect width="327" height="272" fill="white"></rect></clipPath><clipPath id="clip1_1039_16179"><rect x="140" y="112" width="48" height="48" rx="24" fill="white"></rect></clipPath><clipPath id="clip2_1039_16179"><path d="M118 205C118 202.239 120.239 200 123 200V200C125.761 200 128 202.239 128 205V205C128 207.761 125.761 210 123 210H118V205Z" fill="white"></path></clipPath></defs>', 2);
const _hoisted_4 = [
  _hoisted_2
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_4);
}
const FlawlessIllustration = { render };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TheAboutPerksSection",
  __ssrInlineRender: true,
  setup(__props) {
    const breakpoints = useBreakpoints(breakpointsConst);
    const md = ref(breakpoints.smaller("md"));
    const perks = [
      {
        icon: ExpertiseIcon,
        title: "Expertise in the SaaS niche",
        text: "From the beginning we were laser focused on serving customers exclusively in the SaaS space.",
        illustration: ExpertiseIllustration
      },
      {
        icon: TalentIcon,
        title: "Exceptional talent",
        text: "We work on complex products, that\u2019s why every project gets a dedicated senior project leader."
      },
      {
        icon: LeadershipIcon,
        title: "True design leadership",
        text: "We are a true design partner, guiding you through the process."
      },
      {
        icon: FlawlessIcon,
        title: "Flawless communication",
        text: "We believe communication is the most important part of any project. You will be plugged into our Slack channel from day one.",
        illustration: FlawlessIllustration
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ThePerkComponent = _sfc_main$7;
      const _component_AppButton = __unplugin_components_0;
      const _component_AppCirclesHorizontal = _sfc_main$8;
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
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(StrokeTop)), { class: "absolute w-full -top-33" }, null), _parent);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(StrokeLeft)), { class: "absolute w-full -left-[calc(100%+2rem)]" }, null), _parent);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(StrokeTop)), { class: "absolute w-full -bottom-33 -scale-y-100" }, null), _parent);
        _push(ssrRenderComponent(_component_ThePerkComponent, {
          perk: perks[0]
        }, null, _parent));
        _push(`</div><div class="flex flex-col gap-8 max-w-[346px] relative">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(StrokeTop)), { class: "absolute w-full -top-62" }, null), _parent);
        _push(ssrRenderComponent(_component_ThePerkComponent, {
          perk: perks[1]
        }, null, _parent));
        _push(`<div class="px-8 py-10 bg-dark-blue rounded-4 relative"><p class="text-white text-xl mb-8 font-semibold"> Want to see how we apply these in practice? </p>`);
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
        _push(ssrRenderComponent(_component_AppCirclesHorizontal, {
          id: "circles-md",
          class: "absolute right-0 bottom-0 h-51"
        }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_ThePerkComponent, {
          perk: perks[2]
        }, null, _parent));
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(StrokeTop)), { class: "absolute w-full -bottom-62 -scale-y-100" }, null), _parent);
        _push(`</div><div class="flex flex-col gap-8 max-w-[346px] justify-center relative">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(StrokeTop)), { class: "absolute w-full -top-33" }, null), _parent);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(StrokeLeft)), { class: "absolute w-full -right-[calc(100%+2rem)] -scale-x-100" }, null), _parent);
        _push(ssrRenderComponent(_component_ThePerkComponent, {
          perk: perks[3]
        }, null, _parent));
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(StrokeTop)), { class: "absolute w-full -bottom-33 -scale-y-100" }, null), _parent);
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const TheAboutPerksSection_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/TheAboutPerksSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const img1 = "/semiflatv4/assets/1.481ee1db.png";
const img2 = "/semiflatv4/assets/2.3a27549b.png";
const img3 = "/semiflatv4/assets/3.bd6c04d8.png";
const img4 = "/semiflatv4/assets/4.1de6d8a3.png";
const img5 = "/semiflatv4/assets/5.583ccafe.png";
const img6 = "/semiflatv4/assets/6.edf45b72.png";
const img7 = "/semiflatv4/assets/7.33a86059.png";
const img8 = "/semiflatv4/assets/8.0a104db9.png";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "TheAboutImagesSlider",
  __ssrInlineRender: true,
  setup(__props) {
    const aboutImgs = [img1, img2, img3, img4, img5, img6, img7, img8];
    const breakpoints = useBreakpoints$1();
    const swiperBreakpoints = {
      [breakpoints.lg]: {
        spaceBetween: 32
      }
    };
    const aboutImgsComputed = computed(() => [...aboutImgs, ...aboutImgs, ...aboutImgs]);
    const swiperOptions = computed(() => ({
      slidesPerView: "auto",
      grabCursor: true,
      spaceBetween: 24,
      navigation: false,
      loop: true,
      updateOnWindowResize: true,
      speed: 5e3,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      breakpoints: swiperBreakpoints
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppSlider = __unplugin_components_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_AppSlider, {
        class: "mt-16 md:mt-40",
        "swiper-options": unref(swiperOptions)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(aboutImgsComputed), (img, i) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: i,
                class: ["shrink-0 flex items-center justify-center", {
                  "w-[144px] md:w-[240px]": i % 2 !== 0,
                  "w-[240px] md:w-[400px]": i % 2 === 0
                }]
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(aboutImgsComputed), (img, i) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: i,
                  class: ["shrink-0 flex items-center justify-center", {
                    "w-[144px] md:w-[240px]": i % 2 !== 0,
                    "w-[240px] md:w-[400px]": i % 2 === 0
                  }]
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: img,
                      class: "h-[180px] md:h-[300px] w-[240px] md:w-[400px] object-cover object-center rounded-4"
                    }, null, 8, ["src"])
                  ]),
                  _: 2
                }, 1032, ["class"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const TheAboutImagesSlider_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/TheAboutImagesSlider.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TheAboutHeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppButton = __unplugin_components_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative page-content" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(BackgroundMobileLeft), { class: "absolute top-28 left-0 md:hidden" }, null, _parent));
      _push(ssrRenderComponent(unref(BackgroundDesktop), { class: "hidden absolute -left-42 md:block -top-60 -z-1" }, null, _parent));
      _push(`<div class="mt-3.5rem md:mt-40 md:text-center"><h1 class="hero-title md:text-[2.5rem] md:leading-[120%] md:mt-6"> Meet the team behind your next project_ </h1><p class="mt-6 text-blue-200"> We are a remote team of 17 product designers, laser focused on delivering top tier SaaS product design to <br> world\u2019s most innovative startups. </p><div class="mt-2.5rem">`);
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
      _push(`</div></div></div>`);
    };
  }
});
const TheAboutHeroSection_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sections/about/TheAboutHeroSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheAboutHeroSection = _sfc_main$1;
  const _component_TheAboutImagesSlider = _sfc_main$2;
  const _component_TheAboutPerksSection = _sfc_main$3;
  const _component_TheAboutAboutSection = __unplugin_components_3;
  const _component_TheAboutOperateSection = _sfc_main$5;
  const _component_TheAboutEmployeesSection = _sfc_main$6;
  const _component_TheCTABottomSection = __unplugin_components_5;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-hidden" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheAboutHeroSection, { class: "section" }, null, _parent));
  _push(ssrRenderComponent(_component_TheAboutImagesSlider, { class: "section" }, null, _parent));
  _push(ssrRenderComponent(_component_TheAboutPerksSection, { class: "section" }, null, _parent));
  _push(ssrRenderComponent(_component_TheAboutAboutSection, { class: "section" }, null, _parent));
  _push(ssrRenderComponent(_component_TheAboutOperateSection, { class: "section" }, null, _parent));
  _push(ssrRenderComponent(_component_TheAboutEmployeesSection, { class: "section" }, null, _parent));
  _push(ssrRenderComponent(_component_TheCTABottomSection, { class: "section" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/about.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about_page = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  about_page as default
};
