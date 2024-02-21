import { defineComponent as u, toRefs as p, openBlock as t, createElementBlock as _, normalizeStyle as m, unref as e, createBlock as r, createCommentVNode as s, withCtx as v, createTextVNode as f, toDisplayString as b } from "vue";
import { I as g } from "./Info-54758b60.js";
import { I as k } from "./Icon-8f2ed8ba.js";
import { _ as l } from "./_plugin-vue_export-helper-dad06003.js";
const x = /* @__PURE__ */ u({
  __name: "Avatar",
  props: {
    icon: { default: "user-circle" },
    iconBackend: { default: "boxicons" },
    label: {},
    source: {}
  },
  setup(n) {
    const c = n, { icon: i, iconBackend: d, label: a, source: o } = p(c);
    return (h, A) => (t(), _("div", {
      class: "avatar",
      style: m(e(o) ? `background-image: url(${e(o)})` : void 0),
      tabindex: "0"
    }, [
      !e(a) && !e(o) ? (t(), r(k, {
        key: 0,
        backend: e(d),
        value: e(i),
        size: "large"
      }, null, 8, ["backend", "value"])) : s("", !0),
      e(a) && !e(o) ? (t(), r(g, {
        key: 1,
        elevation: "normal",
        size: "large-2"
      }, {
        default: v(() => [
          f(b(e(a)), 1)
        ]),
        _: 1
      })) : s("", !0)
    ], 4));
  }
});
const S = /* @__PURE__ */ l(x, [["__scopeId", "data-v-ee7109e4"]]), y = { class: "logo" };
function I(n, c) {
  return t(), _("div", y);
}
const B = {}, V = /* @__PURE__ */ l(B, [["render", I], ["__scopeId", "data-v-9d03b4ba"]]);
export {
  S as A,
  V as L
};
