import { defineComponent as l, toRefs as c, computed as u, openBlock as _, createElementBlock as m, normalizeClass as f, createVNode as p, unref as t, withCtx as i, renderSlot as v } from "vue";
import { I as B } from "./Info-38a17291.js";
import { _ as g } from "./_plugin-vue_export-helper-dad06003.js";
const x = /* @__PURE__ */ l({
  __name: "Badge",
  props: {
    mood: { default: "accent" },
    outline: { type: Boolean, default: !1 },
    size: { default: "normal" }
  },
  setup(a) {
    const s = a, { mood: e, outline: o, size: d } = c(s), n = u(() => ({
      [`mood-background-${e.value}`]: !o.value,
      [`mood-border-${e.value}`]: !0,
      [`size-${d.value}`]: !0
    }));
    return (r, z) => (_(), m("div", {
      class: f(["badge", n.value])
    }, [
      p(B, {
        mood: t(o) ? t(e) : "white"
      }, {
        default: i(() => [
          v(r.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["mood"])
    ], 2));
  }
});
const k = /* @__PURE__ */ g(x, [["__scopeId", "data-v-197f8c36"]]);
export {
  k as B
};
