import { defineComponent as u, toRefs as p, computed as _, openBlock as f, createElementBlock as i, normalizeClass as v, renderSlot as m } from "vue";
import { _ as d } from "./_plugin-vue_export-helper-dad06003.js";
const x = /* @__PURE__ */ u({
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
    return (c, I) => (f(), i("div", {
      class: v(["info-text", r.value])
    }, [
      m(c.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const B = /* @__PURE__ */ d(x, [["__scopeId", "data-v-4284e58f"]]);
export {
  B as I
};
