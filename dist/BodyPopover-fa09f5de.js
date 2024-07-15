import { defineComponent as k, toRefs as z, ref as p, computed as h, watch as P, nextTick as y, openBlock as T, createBlock as W, Teleport as H, createVNode as X, normalizeClass as Y, normalizeStyle as O, withCtx as q, renderSlot as A } from "vue";
import { C as D } from "./Icon-53e685d0.js";
import { _ as E } from "./_plugin-vue_export-helper-dad06003.js";
const g = "#app > .app-container", I = /* @__PURE__ */ k({
  inheritAttrs: !1,
  __name: "BodyPopover",
  props: {
    autoPosition: { type: Boolean, default: !1 },
    parentNode: {},
    popoverClass: {},
    visible: { type: Boolean },
    placementY: { default: "bottom" },
    placementX: { default: "center" }
  },
  setup(b) {
    var _;
    const B = b, { autoPosition: t, parentNode: i, popoverClass: r, visible: d, placementY: C, placementX: f } = z(B), l = p(), s = p(), n = p(), c = (_ = document.body.querySelector(g)) == null ? void 0 : _.getBoundingClientRect(), x = h(() => ({
      [(r == null ? void 0 : r.value) ?? ""]: !!r,
      visible: d.value
    })), w = h(() => {
      if (!(!t.value || l.value === void 0 || n.value === void 0))
        return {
          left: `${l.value}px`,
          top: `${n.value}px`
        };
    }), m = () => {
      if (!s.value || !(i != null && i.value))
        return;
      const e = i.value.getBoundingClientRect();
      l.value = 0, n.value = 0, y(() => {
        $(e), S(e);
      });
    }, $ = (e) => {
      const o = e.left, a = s.value.$el.offsetWidth, u = (a - e.width) / 2;
      e.left - u < 0 ? l.value = o : f.value === "right" || e.left + u + e.width > document.body.clientWidth ? l.value = o - a + e.width : f.value === "left" ? l.value = o : l.value = o - u;
    }, S = (e) => {
      const o = e.top + document.documentElement.scrollTop - ((c == null ? void 0 : c.top) || 0), a = s.value.$el.offsetHeight;
      C.value === "top" || e.bottom + a > document.body.clientHeight ? n.value = o - a : n.value = o + e.height;
    }, v = t != null && t.value ? new ResizeObserver(() => m()) : void 0;
    return P(
      d,
      (e) => {
        !(t != null && t.value) || !v || (v.disconnect(), e && y(() => {
          m(), v.observe(s.value.$el);
        }));
      },
      {
        immediate: !0
      }
    ), (e, o) => (T(), W(H, { to: g }, [
      X(D, {
        class: Y(["no-spacing popover", x.value]),
        ref_key: "popover",
        ref: s,
        style: O(w.value)
      }, {
        default: q(() => [
          A(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["class", "style"])
    ]));
  }
});
const j = /* @__PURE__ */ E(I, [["__scopeId", "data-v-354469ce"]]);
export {
  j as B
};
