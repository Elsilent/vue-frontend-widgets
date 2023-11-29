import { defineComponent as u, toRefs as p, computed as _, openBlock as i, createElementBlock as v, normalizeClass as f, renderSlot as m } from "vue";
import { _ as d } from "./_plugin-vue_export-helper-dad06003.js";
const I = /* @__PURE__ */ u({
  __name: "Info",
  props: {
    contrast: { type: Boolean },
    elevation: { default: "normal" },
    important: { type: Boolean, default: !1 },
    mood: {},
    size: { default: "normal" }
  },
  setup(t) {
    const a = t, { contrast: n, elevation: o, important: s, mood: e, size: l } = p(a), r = _(() => ({
      contrast: e != null && e.value ? !1 : n.value,
      important: s.value,
      [`elevation-${o.value}`]: !(e != null && e.value),
      [`mood-text-${e == null ? void 0 : e.value}`]: e == null ? void 0 : e.value,
      [`size-${l.value}`]: !0
    }));
    return (c, x) => (i(), v("div", {
      class: f(["info", r.value])
    }, [
      m(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const B = /* @__PURE__ */ d(I, [["__scopeId", "data-v-a160a6b6"]]);
export {
  B as I
};
