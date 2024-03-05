import { defineComponent as u, toRefs as p, openBlock as t, createElementBlock as _, normalizeStyle as m, unref as e, createBlock as r, createCommentVNode as s, withCtx as v, createTextVNode as f, toDisplayString as g } from "vue";
import { I as k } from "./Info-54758b60.js";
import { I as x } from "./Icon-8f2ed8ba.js";
import { _ as l } from "./_plugin-vue_export-helper-dad06003.js";
const y = /* @__PURE__ */ u({
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
      !e(a) && !e(o) ? (t(), r(x, {
        key: 0,
        backend: e(d),
        value: e(i),
        size: "large"
      }, null, 8, ["backend", "value"])) : s("", !0),
      e(a) && !e(o) ? (t(), r(k, {
        key: 1,
        elevation: "normal",
        size: "large-2"
      }, {
        default: v(() => [
          f(g(e(a)), 1)
        ]),
        _: 1
      })) : s("", !0)
    ], 4));
  }
});
const S = /* @__PURE__ */ l(y, [["__scopeId", "data-v-ee7109e4"]]), b = { class: "logo" };
function I(n, c) {
  return t(), _("div", b);
}
const B = {}, V = /* @__PURE__ */ l(B, [["render", I], ["__scopeId", "data-v-756d1781"]]);
export {
  S as A,
  V as L
};
