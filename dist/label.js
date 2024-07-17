import { defineComponent as l, toRefs as p, computed as _, openBlock as c, createElementBlock as d, normalizeClass as i, renderSlot as u } from "vue";
import { _ as f } from "./_plugin-vue_export-helper-dad06003.js";
import { I } from "./Info-38a17291.js";
const m = /* @__PURE__ */ l({
  __name: "Header",
  props: {
    elevation: { default: "normal" },
    important: { type: Boolean, default: !1 },
    size: { default: "large-5" }
  },
  setup(e) {
    const t = e, { elevation: o, important: a, size: r } = p(t), s = _(() => ({
      important: a.value,
      [`elevation-${o.value}`]: !0,
      [`size-${r.value}`]: !0
    }));
    return (n, v) => (c(), d("div", {
      class: i(["header", s.value])
    }, [
      u(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const y = /* @__PURE__ */ f(m, [["__scopeId", "data-v-556f81b4"]]);
export {
  y as Header,
  I as Info
};
