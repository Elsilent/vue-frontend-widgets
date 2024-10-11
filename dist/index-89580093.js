import { inject as l, computed as n, unref as t, defineComponent as r, openBlock as p, createElementBlock as u, mergeProps as d, renderSlot as f } from "vue";
import { b as m, a as _, d as S, u as z, i as b, c as y, _ as E, w as I } from "./base-b0eb9adb.js";
const P = ["", "default", "small", "large"], B = m({
  type: String,
  values: P,
  required: !1
}), g = Symbol("size"), C = () => {
  const s = l(g, {});
  return n(() => t(s.size) || "");
}, v = _({
  size: {
    type: S([Number, String])
  },
  color: {
    type: String
  }
}), N = r({
  name: "ElIcon",
  inheritAttrs: !1
}), h = /* @__PURE__ */ r({
  ...N,
  props: v,
  setup(s) {
    const c = s, i = z("icon"), a = n(() => {
      const { size: e, color: o } = c;
      return !e && !o ? {} : {
        fontSize: b(e) ? void 0 : y(e),
        "--color": o
      };
    });
    return (e, o) => (p(), u("i", d({
      class: t(i).b(),
      style: t(a)
    }, e.$attrs), [
      f(e.$slots, "default")
    ], 16));
  }
});
var j = /* @__PURE__ */ E(h, [["__file", "icon.vue"]]);
const T = I(j);
export {
  T as E,
  g as S,
  B as a,
  P as c,
  C as u
};
