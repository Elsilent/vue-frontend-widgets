import { defineComponent as l, toRefs as p, computed as d, openBlock as _, createElementBlock as c, normalizeClass as i, renderSlot as u } from "vue";
import { _ as m } from "./_plugin-vue_export-helper-dad06003.js";
import { I } from "./Info-1836ec0c.js";
const f = /* @__PURE__ */ l({
  __name: "Header",
  props: {
    elevation: { default: "normal" },
    important: { type: Boolean, default: !1 },
    size: { default: "large-5" }
  },
  setup(e) {
    const t = e, { elevation: o, important: a, size: r } = p(t), s = d(() => ({
      important: a.value,
      [`elevation-${o.value}`]: !0,
      [`size-${r.value}`]: !0
    }));
    return (n, v) => (_(), c("div", {
      class: i(["header", s.value])
    }, [
      u(n.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const y = /* @__PURE__ */ m(f, [["__scopeId", "data-v-e4abd380"]]);
export {
  y as Header,
  I as Info
};
