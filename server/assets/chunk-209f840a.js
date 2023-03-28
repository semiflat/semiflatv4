import { openBlock, createElementBlock, createElementVNode } from "vue";
const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createElementVNode("rect", {
  width: "24",
  height: "24",
  rx: "12",
  fill: "currentColor"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M6 13L10 17L18 7",
  stroke: "white",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_4);
}
const CheckIcon = { render };
export {
  CheckIcon as C
};
