import { defineComponent as p, toRefs as f, computed as _, openBlock as d, createElementBlock as i, normalizeClass as m, renderSlot as x } from "vue";
import { _ as v } from "./_plugin-vue_export-helper-dad06003.js";
import { BaseError as b } from "./utils/error.js";
import { m as $ } from "./match-b8889c93.js";
const g = /* @__PURE__ */ p({
  __name: "Align",
  props: {
    column: { type: Boolean, default: !1 },
    horizontal: {},
    inline: { type: Boolean, default: !1 },
    vertical: {},
    wrap: { type: Boolean, default: !1 }
  },
  setup(t) {
    const o = t, { column: l, horizontal: n, inline: e, vertical: a, wrap: s } = f(o), c = _(() => ({
      column: l.value,
      [`horizontal-${n == null ? void 0 : n.value}`]: n == null ? void 0 : n.value,
      inline: e.value,
      [`vertical-${a == null ? void 0 : a.value}`]: a == null ? void 0 : a.value,
      wrap: s.value
    }));
    return (u, r) => (d(), i("div", {
      class: m(["align", c.value])
    }, [
      x(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const U = /* @__PURE__ */ v(g, [["__scopeId", "data-v-1561368d"]]), h = { class: "card" };
function w(t, o) {
  return d(), i("div", h, [
    x(t.$slots, "default", {}, void 0, !0)
  ]);
}
const y = {}, q = /* @__PURE__ */ v(y, [["render", w], ["__scopeId", "data-v-a37ddce4"]]);
class I extends b {
  getMessage(o) {
    return `Undefined icon backend: ${o}`;
  }
}
const B = /* @__PURE__ */ p({
  __name: "Icon",
  props: {
    backend: { default: "boxicons" },
    elevation: { default: "normal" },
    mood: {},
    size: { default: "normal" },
    value: {}
  },
  setup(t) {
    const o = t, { backend: l, elevation: n, mood: e, size: a, value: s } = f(o), c = _(
      () => $(l.value).when("boxicons", () => ({ bx: !0, [`bx-${s.value}`]: !0 })).when("boxicons-logo", () => ({ bx: !0, [`bxl-${s.value}`]: !0 })).when("boxicons-solid", () => ({ bx: !0, [`bxs-${s.value}`]: !0 })).when("flag-icons", () => ({ fi: !0, [`fi-${s.value}`]: !0 })).when("flag-icons-square", () => ({ fi: !0, fis: !0, [`fi-${s.value}`]: !0 })).or((r) => {
        throw new I(r);
      }).done
    ), u = _(() => ({
      ...c.value,
      [`elevation-${n.value}`]: !(e != null && e.value),
      [`mood-text-${e == null ? void 0 : e.value}`]: e == null ? void 0 : e.value,
      [`size-${a.value}`]: !0
    }));
    return (r, k) => (d(), i("i", {
      class: m(["icon", u.value])
    }, null, 2));
  }
});
const M = /* @__PURE__ */ v(B, [["__scopeId", "data-v-1b8255ad"]]);
export {
  U as A,
  q as C,
  M as I
};
