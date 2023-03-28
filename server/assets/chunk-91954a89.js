import { defineComponent, ref, mergeProps, unref, withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { Swiper } from "swiper/vue";
import { Pagination } from "swiper";
import { a as _export_sfc } from "./chunk-5a6b5315.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppSlider",
  __ssrInlineRender: true,
  props: {
    swiperOptions: {
      type: Object,
      required: true
    },
    swiperClasses: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const swiper = ref(null);
    const onSwiper = (swiperInstance) => {
      swiper.value = swiperInstance;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["app-slider", {
          "has-navigation": props.swiperOptions.navigation
        }]
      }, _attrs))} data-v-7cdc49ab>`);
      if (props.swiperOptions.navigation) {
        _push(`<button class="app-slider__nav-btn app-slider__nav-btn--left" type="button" data-v-7cdc49ab></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(Swiper), mergeProps({
        ...props.swiperOptions,
        navigation: false
      }, {
        class: __props.swiperClasses,
        modules: [unref(Pagination)],
        onSwiper
      }), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      if (props.swiperOptions.navigation) {
        _push(`<button class="app-slider__nav-btn app-slider__nav-btn--right" type="button" data-v-7cdc49ab></button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const AppSlider_vue_vue_type_style_index_0_scoped_7cdc49ab_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/utility/AppSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7cdc49ab"]]);
const breakpointsConst = {
  xs: 500,
  sm: 768,
  md: 1024,
  lg: 1366,
  xl: 1600,
  xxl: 1920
};
export {
  __unplugin_components_0 as _,
  breakpointsConst as b
};
