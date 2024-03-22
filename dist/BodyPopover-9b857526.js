import { defineComponent as w, toRefs as $, ref as u, computed as m, watch as k, nextTick as _, openBlock as z, createBlock as P, Teleport as T, createVNode as W, normalizeClass as H, normalizeStyle as S, withCtx as X, renderSlot as Y } from "vue";
import { C as O } from "./Icon-8f2ed8ba.js";
import { _ as A } from "./_plugin-vue_export-helper-dad06003.js";
const D = /* @__PURE__ */ w({
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
  setup(h) {
    const y = h, { autoPosition: t, parentNode: i, popoverClass: r, visible: c, placementY: b, placementX: d } = $(y), l = u(), s = u(), a = u(), g = m(() => ({
      [(r == null ? void 0 : r.value) ?? ""]: !!r,
      visible: c.value
    })), B = m(() => {
      if (!(!t.value || l.value === void 0 || a.value === void 0))
        return {
          left: `${l.value}px`,
          top: `${a.value}px`
        };
    }), f = () => {
      if (!s.value || !(i != null && i.value))
        return;
      const e = i.value.getBoundingClientRect();
      l.value = 0, a.value = 0, _(() => {
        x(e), C(e);
      });
    }, x = (e) => {
      const o = e.left, n = s.value.$el.offsetWidth, p = (n - e.width) / 2;
      e.left - p < 0 ? l.value = o : d.value === "right" || e.left + p + e.width > document.body.clientWidth ? l.value = o - n + e.width : d.value === "left" ? l.value = o : l.value = o - p;
    }, C = (e) => {
      const o = e.top + document.documentElement.scrollTop, n = s.value.$el.offsetHeight;
      b.value === "top" || e.bottom + n > document.body.clientHeight ? a.value = o - n : a.value = o + e.height;
    }, v = t != null && t.value ? new ResizeObserver(() => f()) : void 0;
    return k(
      c,
      (e) => {
        !(t != null && t.value) || !v || (v.disconnect(), e && _(() => {
          f(), v.observe(s.value.$el);
        }));
      },
      {
        immediate: !0
      }
    ), (e, o) => (z(), P(T, { to: "#app > .app-container" }, [
      W(O, {
        class: H(["no-spacing popover", g.value]),
        ref_key: "popover",
        ref: s,
        style: S(B.value)
      }, {
        default: X(() => [
          Y(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["class", "style"])
    ]));
  }
});
const N = /* @__PURE__ */ A(D, [["__scopeId", "data-v-f4355a7b"]]);
export {
  N as B
};
