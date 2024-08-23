import { defineComponent as l, toRefs as p, computed as _, openBlock as c, createElementBlock as d, normalizeClass as i, renderSlot as u } from "vue";
import { _ as m } from "./_plugin-vue_export-helper-dad06003.js";
const f = /* @__PURE__ */ l({
  __name: "Header",
  props: {
    elevation: { default: "normal" },
    important: { type: Boolean, default: !1 },
    size: { default: "large-5" }
  },
  setup(e) {
    const t = e, { elevation: o, important: a, size: s } = p(t), r = _(() => ({
      important: a.value,
      [`elevation-${o.value}`]: !0,
      [`size-${s.value}`]: !0
    }));
    return (n, v) => (c(), d("div", {
      class: i(["header", r.value])
    }, [
      u(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const x = /* @__PURE__ */ m(f, [["__scopeId", "data-v-556f81b4"]]);
export {
  x as H
};
