import { defineComponent as u, toRefs as p, openBlock as a, createElementBlock as _, normalizeStyle as m, unref as e, createBlock as r, createCommentVNode as s, withCtx as v, createTextVNode as f, toDisplayString as b } from "vue";
import { I as g } from "./Info-54758b60.js";
import { I as k } from "./Icon-a62eb151.js";
import { _ as l } from "./_plugin-vue_export-helper-dad06003.js";
const x = /* @__PURE__ */ u({
  __name: "Avatar",
  props: {
    icon: { default: "user-circle" },
    iconBackend: { default: "boxicons" },
    label: {},
    source: {}
  },
  setup(c) {
    const n = c, { icon: i, iconBackend: d, label: t, source: o } = p(n);
    return (h, A) => (a(), _("div", {
      class: "avatar",
      style: m(e(o) ? `background-image: url(${e(o)})` : void 0)
    }, [
      !e(t) && !e(o) ? (a(), r(k, {
        key: 0,
        backend: e(d),
        value: e(i),
        size: "large"
      }, null, 8, ["backend", "value"])) : s("", !0),
      e(t) && !e(o) ? (a(), r(g, {
        key: 1,
        elevation: "normal",
        size: "large-2"
      }, {
        default: v(() => [
          f(b(e(t)), 1)
        ]),
        _: 1
      })) : s("", !0)
    ], 4));
  }
});
const S = /* @__PURE__ */ l(x, [["__scopeId", "data-v-786ab050"]]), y = { class: "logo" };
function I(c, n) {
  return a(), _("div", y);
}
const B = {}, V = /* @__PURE__ */ l(B, [["render", I], ["__scopeId", "data-v-9d03b4ba"]]);
export {
  S as A,
  V as L
};
