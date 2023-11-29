import { defineComponent as r, toRefs as l, computed as c, openBlock as _, createElementBlock as d, normalizeClass as p, renderSlot as u } from "vue";
import { _ as i } from "./_plugin-vue_export-helper-dad06003.js";
const m = /* @__PURE__ */ r({
  __name: "BrandText",
  props: {
    elevation: { default: "normal" },
    size: { default: "normal" }
  },
  setup(e) {
    const t = e, { elevation: o, size: s } = l(t), a = c(() => ({
      [`elevation-${o.value}`]: !0,
      [`size-${s.value}`]: !0
    }));
    return (n, v) => (_(), d("div", {
      class: p(["brand-text", a.value])
    }, [
      u(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const B = /* @__PURE__ */ i(m, [["__scopeId", "data-v-2524cde6"]]);
export {
  B
};
