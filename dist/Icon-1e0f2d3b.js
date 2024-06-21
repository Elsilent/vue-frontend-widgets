import { defineComponent as i, toRefs as m, computed as _, openBlock as d, createElementBlock as p, normalizeClass as v, renderSlot as x } from "vue";
import { _ as f } from "./_plugin-vue_export-helper-dad06003.js";
import { BaseError as b } from "./utils/error.js";
import { m as $ } from "./match-b8889c93.js";
const g = /* @__PURE__ */ i({
  __name: "Align",
  props: {
    column: { type: Boolean, default: !1 },
    horizontal: {},
    inline: { type: Boolean, default: !1 },
    vertical: {},
    wrap: { type: Boolean, default: !1 }
  },
  setup(t) {
    const a = t, { column: l, horizontal: n, inline: e, vertical: s, wrap: o } = m(a), u = _(() => ({
      column: l.value,
      [`horizontal-${n == null ? void 0 : n.value}`]: n == null ? void 0 : n.value,
      inline: e.value,
      [`vertical-${s == null ? void 0 : s.value}`]: s == null ? void 0 : s.value,
      wrap: o.value
    }));
    return (r, c) => (d(), p("div", {
      class: v(["align", u.value])
    }, [
      x(r.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const z = /* @__PURE__ */ f(g, [["__scopeId", "data-v-1561368d"]]), w = /* @__PURE__ */ i({
  __name: "Card",
  props: {
    kind: {}
  },
  setup(t) {
    return (a, l) => (d(), p("div", {
      class: v(["card", [a.kind ? a.kind : ""]])
    }, [
      x(a.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const E = /* @__PURE__ */ f(w, [["__scopeId", "data-v-0a4e2703"]]);
class h extends b {
  getMessage(a) {
    return `Undefined icon backend: ${a}`;
  }
}
const k = /* @__PURE__ */ i({
  __name: "Icon",
  props: {
    backend: { default: "boxicons" },
    elevation: { default: "normal" },
    mood: {},
    size: { default: "normal" },
    value: {}
  },
  setup(t) {
    const a = t, { backend: l, elevation: n, mood: e, size: s, value: o } = m(a), u = _(
      () => $(l.value).when("boxicons", () => ({ bx: !0, [`bx-${o.value}`]: !0 })).when("boxicons-logo", () => ({ bx: !0, [`bxl-${o.value}`]: !0 })).when("boxicons-solid", () => ({ bx: !0, [`bxs-${o.value}`]: !0 })).when("flag-icons", () => ({ fi: !0, [`fi-${o.value}`]: !0 })).when("flag-icons-square", () => ({ fi: !0, fis: !0, [`fi-${o.value}`]: !0 })).or((c) => {
        throw new h(c);
      }).done
    ), r = _(() => ({
      ...u.value,
      [`elevation-${n.value}`]: !(e != null && e.value),
      [`mood-text-${e == null ? void 0 : e.value}`]: e == null ? void 0 : e.value,
      [`size-${s.value}`]: !0
    }));
    return (c, y) => (d(), p("i", {
      class: v(["icon", r.value])
    }, null, 2));
  }
});
const U = /* @__PURE__ */ f(k, [["__scopeId", "data-v-1b8255ad"]]);
export {
  z as A,
  E as C,
  U as I
};
