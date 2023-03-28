import { defineComponent, mergeProps, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderVNode, ssrInterpolate } from "vue/server-renderer";
const NicImage = "/semiflatv4/assets/nic.b2827e9a.jpeg";
const EwaImage = "/semiflatv4/assets/ewa.e0f418ad.jpeg";
const ApoloniaImage = "/semiflatv4/assets/apolonia.c75384b8.jpeg";
const ChrystianImage = "/semiflatv4/assets/chrystian.a679fcb6.jpeg";
const PaulinaImage = "/semiflatv4/assets/paulina.5ed600ca.jpeg";
const NataliaImage = "/semiflatv4/assets/natalia.062d2fcc.jpeg";
const MagdaImage = "/semiflatv4/assets/magda.275c989b.jpeg";
const BarryImage = "/semiflatv4/assets/barry.0e562be7.png";
const MaciejImage = "/semiflatv4/assets/maciej.2bc2d400.jpeg";
const SarahImage = "/semiflatv4/assets/sarah.0187388c.png";
const ArekImage = "/semiflatv4/assets/arek.c1893cd4.jpeg";
const MartynaImage = "/semiflatv4/assets/martyna.05d5fb14.jpeg";
const KubaImage = "/semiflatv4/assets/kuba.d5f37356.jpeg";
const MarcinImage = "/semiflatv4/assets/marcin.22876260.jpeg";
const PatrycjaImage = "/semiflatv4/assets/patrycja.aa1fbbf2.jpeg";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ThePerkComponent",
  __ssrInlineRender: true,
  props: {
    perk: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["border border-[#BCDCDC] rounded-4", [__props.perk.illustration ? "pt-8 md:px-0 md:pt-10" : "p-8 md:px-8 md:py-10"]]
      }, _attrs))}><div class="${ssrRenderClass({ "px-8": __props.perk.illustration })}">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.perk.icon), { class: "mb-8 text-turquoise-400" }, null), _parent);
      _push(`<h2 class="mb-2 text-blue-300 font-semibold">${ssrInterpolate(__props.perk.title)}</h2><p class="text-blue-200 leading-[150%]">${ssrInterpolate(__props.perk.text)}</p></div>`);
      if (__props.perk.illustration) {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.perk.illustration), { class: "mx-auto" }, null), _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/testimonial/ThePerkComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  ApoloniaImage as A,
  BarryImage as B,
  ChrystianImage as C,
  EwaImage as E,
  KubaImage as K,
  MagdaImage as M,
  NicImage as N,
  PaulinaImage as P,
  SarahImage as S,
  _sfc_main as _,
  NataliaImage as a,
  MaciejImage as b,
  ArekImage as c,
  MartynaImage as d,
  MarcinImage as e,
  PatrycjaImage as f
};
