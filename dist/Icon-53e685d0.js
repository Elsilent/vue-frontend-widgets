import { defineComponent as i, toRefs as m, computed as _, openBlock as d, createElementBlock as p, normalizeClass as v, renderSlot as $ } from "vue";
import { _ as f } from "./_plugin-vue_export-helper-dad06003.js";
import { BaseError as g } from "./utils/error.js";
import { m as w } from "./match-b8889c93.js";
const h = /* @__PURE__ */ i({
  __name: "Align",
  props: {
    column: { type: Boolean, default: !1 },
    horizontal: {},
    inline: { type: Boolean, default: !1 },
    vertical: {},
    wrap: { type: Boolean, default: !1 }
  },
  setup(t) {
    const a = t, { column: o, horizontal: n, inline: e, vertical: s, wrap: l } = m(a), r = _(() => ({
      column: o.value,
      [`horizontal-${n == null ? void 0 : n.value}`]: n == null ? void 0 : n.value,
      inline: e.value,
      [`vertical-${s == null ? void 0 : s.value}`]: s == null ? void 0 : s.value,
      wrap: l.value
    }));
    return (u, c) => (d(), p("div", {
      class: v(["align", r.value])
    }, [
      $(u.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const z = /* @__PURE__ */ f(h, [["__scopeId", "data-v-1561368d"]]), k = /* @__PURE__ */ i({
  __name: "Card",
  props: {
    kind: {}
  },
  setup(t) {
    return (a, o) => (d(), p("div", {
      class: v(["card", [a.kind ? a.kind : ""]])
    }, [
      $(a.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const E = /* @__PURE__ */ f(k, [["__scopeId", "data-v-0a4e2703"]]);
class y extends g {
  getMessage(a) {
    return `Undefined icon backend: ${a}`;
  }
}
const I = /* @__PURE__ */ i({
  __name: "Icon",
  props: {
    backend: { default: "solid" },
    elevation: { default: "normal" },
    mood: {},
    size: { default: "normal" },
    value: {}
  },
  setup(t) {
    const a = t, { backend: o, elevation: n, mood: e, size: s, value: l } = m(a), r = _(
      () => w(o.value).when("solid", () => ({ "fa-solid": !0, [`fa-${l.value}`]: !0 })).when("regular", () => ({ "fa-regular": !0, [`fa-${l.value}`]: !0 })).when("brands", () => ({ "fa-brands": !0, [`fa-${l.value}`]: !0 })).when("flag-icons", () => ({ fi: !0, [`fi-${l.value}`]: !0 })).when("flag-icons-square", () => ({ fi: !0, fis: !0, [`fi-${l.value}`]: !0 })).or((c) => {
        throw new y(c);
      }).done
    ), u = _(() => ({
      ...r.value,
      [`elevation-${n.value}`]: !(e != null && e.value),
      [`mood-text-${e == null ? void 0 : e.value}`]: e == null ? void 0 : e.value,
      [`size-${s.value}`]: !0
    }));
    return (c, B) => (d(), p("i", {
      class: v(["icon", u.value])
    }, null, 2));
  }
});
const U = /* @__PURE__ */ f(I, [["__scopeId", "data-v-9c816373"]]);
export {
  z as A,
  E as C,
  U as I
};
