import { defineComponent, mergeProps, useSSRContext, computed, createVNode, resolveDynamicComponent, unref, withCtx, renderSlot, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderVNode, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "AppSpinner",
  __ssrInlineRender: true,
  props: {
    accent: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 24
    },
    darkMode: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: "#ffffff"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex overflow-hidden",
        style: { "--bgColor": __props.bgColor }
      }, _attrs))} data-v-9f91362b><div class="${ssrRenderClass([{
        "loader--accent": __props.accent,
        "loader--dark": __props.darkMode
      }, "loader"])}" style="${ssrRenderStyle({
        "--size": `${__props.size}px`,
        ...__props.bgColor && { "--bgColor": __props.bgColor }
      })}" data-v-9f91362b> Loading... </div></div>`);
    };
  }
});
const AppSpinner_vue_vue_type_style_index_0_scoped_9f91362b_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/utility/AppSpinner.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9f91362b"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 6 9",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    class: "arrow-icon"
  }, _attrs))}><g class="arrow-head"><path d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8" stroke="currentColor" stroke-width="2"></path></g><g class="arrow-body"><path d="M3.5 4.5H0" stroke="currentColor" stroke-width="2"></path></g></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/utility/AppArrow.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppButton",
  __ssrInlineRender: true,
  props: {
    type: { default: "button" },
    secondary: { type: Boolean, default: false },
    text: { type: Boolean, default: false },
    loading: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    rippleDisabled: { type: Boolean, default: false },
    success: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
    to: { default: "" },
    leftSlotClass: { default: "" },
    contentClass: { default: "" },
    href: { default: "" },
    bordered: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => {
      if (props.to)
        return "router-link";
      if (props.href)
        return "a";
      return "button";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppArrow = __unplugin_components_0$1;
      const _component_AppSpinner = __unplugin_components_1;
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(tag)), mergeProps({
        ref: "buttonRef",
        class: "app-button button"
      }, _ctx.$attrs, {
        class: [
          props.block ? "flex w-full" : "inline-flex",
          {
            "has-error": props.error,
            "has-success": props.success,
            "is-disabled": props.disabled,
            "is-secondary": props.secondary,
            "is-text": props.text,
            "is-bordered": props.bordered
          }
        ],
        type: props.type,
        disabled: props.disabled || props.loading,
        to: props.to,
        href: props.href
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="button__hover-bg" data-v-d31cd888${_scopeId}></div><div class="${ssrRenderClass([[props.contentClass, props.loading ? "opacity-0" : "opacity-100"], "button__content button-arrow relative flex flex-nowrap justify-center items-center transition-opacity gap-2 duration-200"])}" data-v-d31cd888${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            if (!props.text) {
              _push2(ssrRenderComponent(_component_AppArrow, { class: "inline-block translate-y-[-0.5px]" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_AppSpinner, {
              size: 24,
              class: ["transition-opacity duration-200 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2", props.loading ? "opacity-100" : "opacity-0"]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "button__hover-bg" }),
              createVNode("div", {
                class: ["button__content button-arrow relative flex flex-nowrap justify-center items-center transition-opacity gap-2 duration-200", [props.contentClass, props.loading ? "opacity-0" : "opacity-100"]]
              }, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true),
                !props.text ? (openBlock(), createBlock(_component_AppArrow, {
                  key: 0,
                  class: "inline-block translate-y-[-0.5px]"
                })) : createCommentVNode("", true)
              ], 2),
              createVNode(_component_AppSpinner, {
                size: 24,
                class: ["transition-opacity duration-200 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2", props.loading ? "opacity-100" : "opacity-0"]
              }, null, 8, ["class"])
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const AppButton_vue_vue_type_style_index_0_scoped_d31cd888_lang = "";
const AppButton_vue_vue_type_style_index_1_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/utility/AppButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d31cd888"]]);
export {
  __unplugin_components_0 as _,
  _export_sfc as a
};
