import { defineComponent as t, computed as a, openBlock as l, createElementBlock as p, mergeProps as f, unref as s, renderSlot as u } from "vue";
import { b as d, d as m, u as _, i as y, a as b, _ as E, w as I } from "./base-d7e543b4.js";
const P = d({
  size: {
    type: m([Number, String])
  },
  color: {
    type: String
  }
}), S = t({
  name: "ElIcon",
  inheritAttrs: !1
}), g = /* @__PURE__ */ t({
  ...S,
  props: P,
  setup(n) {
    const r = n, c = _("icon"), i = a(() => {
      const { size: e, color: o } = r;
      return !e && !o ? {} : {
        fontSize: y(e) ? void 0 : b(e),
        "--color": o
      };
    });
    return (e, o) => (l(), p("i", f({
      class: s(c).b(),
      style: s(i)
    }, e.$attrs), [
      u(e.$slots, "default")
    ], 16));
  }
});
var h = /* @__PURE__ */ E(g, [["__file", "icon.vue"]]);
const k = I(h);
export {
  k as E
};
