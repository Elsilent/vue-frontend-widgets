import { defineComponent as u, toRefs as v, computed as t, openBlock as _, createElementBlock as d, normalizeClass as i, normalizeStyle as p, renderSlot as m } from "vue";
import { _ as f } from "./_plugin-vue_export-helper-dad06003.js";
const y = /* @__PURE__ */ u({
  __name: "Grid",
  props: {
    mobileColumns: {},
    tabletColumns: {},
    columns: {}
  },
  setup(l) {
    const a = l, { mobileColumns: e, tabletColumns: o, columns: s } = v(a), c = t(() => ({
      mobile: e !== void 0 && e.value !== void 0,
      tablet: o !== void 0 && o.value !== void 0
    })), n = t(() => ({
      "--mobile-columns": (e == null ? void 0 : e.value) ?? (o == null ? void 0 : o.value) ?? s.value,
      "--tablet-columns": (o == null ? void 0 : o.value) ?? (e == null ? void 0 : e.value) ?? s.value,
      "--columns": s.value
    }));
    return (r, G) => (_(), d("div", {
      class: i(["grid", c.value]),
      style: p(n.value)
    }, [
      m(r.$slots, "default", {}, void 0, !0)
    ], 6));
  }
});
const g = /* @__PURE__ */ f(y, [["__scopeId", "data-v-64b893e0"]]);
export {
  g as G
};
