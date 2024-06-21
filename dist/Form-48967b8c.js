import { defineComponent as n, openBlock as t, createBlock as s, withCtx as l, createElementBlock as a, Fragment as _, renderList as p, renderSlot as m } from "vue";
import { A as i } from "./Icon-1e0f2d3b.js";
import { _ as u } from "./_plugin-vue_export-helper-dad06003.js";
const c = /* @__PURE__ */ n({
  __name: "Form",
  props: {
    fields: {},
    values: {}
  },
  setup(f) {
    return (e, d) => (t(), s(i, { column: "" }, {
      default: l(() => [
        (t(!0), a(_, null, p(e.fields, (o, r) => m(e.$slots, `field(${o.type})`, {
          code: r,
          label: o.label,
          options: o.options,
          value: e.values[r]
        }, void 0, !0)), 256))
      ]),
      _: 3
    }));
  }
});
const g = /* @__PURE__ */ u(c, [["__scopeId", "data-v-7ef15bfa"]]);
export {
  g as G
};
