import { defineComponent as l, toRefs as d, computed as p, openBlock as _, createElementBlock as c, normalizeClass as i, renderSlot as u } from "vue";
import { _ as m } from "./_plugin-vue_export-helper-dad06003.js";
const v = /* @__PURE__ */ l({
  __name: "Header",
  props: {
    elevation: { default: "normal" },
    important: { type: Boolean, default: !1 },
    size: { default: "large-5" }
  },
  setup(e) {
    const t = e, { elevation: a, important: o, size: s } = d(t), r = p(() => ({
      important: o.value,
      [`elevation-${a.value}`]: !0,
      [`size-${s.value}`]: !0
    }));
    return (n, f) => (_(), c("div", {
      class: i(["header", r.value])
    }, [
      u(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const x = /* @__PURE__ */ m(v, [["__scopeId", "data-v-e4abd380"]]);
export {
  x as H
};
