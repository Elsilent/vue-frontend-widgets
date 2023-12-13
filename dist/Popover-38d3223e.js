import { defineComponent as C, toRefs as w, ref as p, computed as m, watch as $, nextTick as h, openBlock as B, createBlock as k, normalizeClass as z, normalizeStyle as R, withCtx as W, renderSlot as H } from "vue";
import { C as P } from "./Icon-8f2ed8ba.js";
import { _ as S } from "./_plugin-vue_export-helper-dad06003.js";
const T = /* @__PURE__ */ C({
  __name: "Popover",
  props: {
    autoPosition: { type: Boolean, default: !1 },
    parentNode: {},
    popoverClass: {},
    visible: { type: Boolean }
  },
  setup(y) {
    const b = y, { autoPosition: t, parentNode: r, popoverClass: n, visible: c } = w(b), o = p(), l = p(), s = p(), g = m(() => ({
      [(n == null ? void 0 : n.value) ?? ""]: !!n,
      visible: c.value
    })), x = m(() => {
      if (!(!t.value || o.value === void 0 || s.value === void 0))
        return {
          left: `${o.value}px`,
          top: `${s.value}px`
        };
    }), u = () => {
      if (!l.value || !(r != null && r.value))
        return;
      const e = r.value.getBoundingClientRect();
      o.value = 0, s.value = 0, h(() => {
        const a = e.left, d = e.top + document.documentElement.scrollTop, f = l.value.$el.offsetWidth, i = (f - e.width) / 2;
        e.left - i < 0 ? o.value = a : e.left + i + e.width > document.body.clientWidth ? o.value = a - f + e.width : o.value = a - i;
        const _ = l.value.$el.offsetHeight;
        e.bottom + _ > document.body.clientHeight ? s.value = d - _ : s.value = d + e.height;
      });
    }, v = t != null && t.value ? new ResizeObserver(() => u()) : void 0;
    return $(
      c,
      (e) => {
        !(t != null && t.value) || !v || (v.disconnect(), e && h(() => {
          u(), v.observe(l.value.$el);
        }));
      },
      {
        immediate: !0
      }
    ), (e, a) => (B(), k(P, {
      class: z(["no-spacing popover", g.value]),
      ref_key: "popover",
      ref: l,
      style: R(x.value)
    }, {
      default: W(() => [
        H(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["class", "style"]));
  }
});
const I = /* @__PURE__ */ S(T, [["__scopeId", "data-v-37932376"]]);
export {
  I as P
};
