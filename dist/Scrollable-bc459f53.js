import { defineComponent as I, toRefs as ee, computed as f, openBlock as m, createElementBlock as O, normalizeClass as h, unref as v, withModifiers as H, normalizeStyle as J, createElementVNode as Q, ref as l, onUnmounted as de, onMounted as me, watch as K, nextTick as he, withMemo as fe, renderSlot as Z, createBlock as A, createCommentVNode as N } from "vue";
import { _ as te } from "./_plugin-vue_export-helper-dad06003.js";
const pe = { class: "scrollbar" }, be = /* @__PURE__ */ I({
  __name: "ScrollableArea",
  props: {
    active: { type: Boolean },
    mode: {},
    thumbOffset: {},
    thumbSize: {},
    size: { default: "normal" },
    theme: { default: "light" }
  },
  emits: ["mousedown"],
  setup(z, { emit: p }) {
    const d = z, { active: i, mode: c, thumbOffset: C, thumbSize: g, size: L, theme: E } = ee(d), u = f(() => {
      const [a, o] = c.value === "vertical" ? ["top", "height"] : ["left", "width"];
      return {
        [a]: `calc(3px + ${C.value} * (100% - ${g.value} - 6px))`,
        [o]: `${g.value}`
      };
    }), s = f(() => L.value === "small"), r = f(() => ({
      "--scrollbar-margin": s.value ? "1px" : "3px",
      "--scrollbar-size": s.value ? "12px" : "14px"
    }));
    return (a, o) => (m(), O("div", {
      class: h(["scrollable-area", { active: v(i), [v(c)]: !0, [v(E)]: !0 }]),
      onMousedown: o[0] || (o[0] = H((b) => p("mousedown", b), ["stop"])),
      style: J(r.value)
    }, [
      Q("div", pe, [
        Q("div", {
          class: "thumb",
          style: J(u.value)
        }, null, 4)
      ])
    ], 38));
  }
});
const V = /* @__PURE__ */ te(be, [["__scopeId", "data-v-e4641e82"]]), ze = (z, p) => {
  let d = null;
  return (...i) => {
    d === null && (z(...i), d = setTimeout(() => {
      d = null;
    }, p));
  };
}, we = /* @__PURE__ */ I({
  __name: "Scrollable",
  props: {
    contentClass: {},
    mode: { default: "vertical" },
    optimized: { type: Boolean, default: !1 },
    relativeTo: {},
    scrollPosition: { default: () => ({ left: 0, top: 0 }) },
    scrollHeightDelta: { default: 0 },
    scrollWidthDelta: { default: 0 },
    staticPosition: { type: Boolean, default: !1 },
    updateKey: {},
    size: { default: "normal" },
    theme: { default: "light" }
  },
  emits: ["update:scrollPosition"],
  setup(z, { emit: p }) {
    const d = z, { mode: i, relativeTo: c, scrollPosition: C, scrollHeightDelta: g, scrollWidthDelta: L, staticPosition: E } = ee(d), u = l(0), s = l(0), r = l(0), a = l(0), o = l(), b = l(), _ = l(), W = l(), k = l(), w = l(0), S = l(0), y = l(!1), X = f(() => w.value / (a.value - s.value)), Y = f(
      () => `max(56px, (100% - 14px) * ${s.value / a.value})`
    ), le = f(
      () => `max(56px, (100% - 14px) * ${u.value / r.value})`
    ), oe = f(() => S.value / (r.value - u.value)), $ = l(), P = l(), U = (e) => {
      var t;
      y.value = ((t = P.value) == null ? void 0 : t.contains(e.target)) || !1;
    };
    de(() => {
      window.removeEventListener("mousemove", U), R.disconnect(), D.disconnect();
    });
    const M = () => c != null && c.value ? c.value() : $.value, T = (e) => {
      const t = M();
      t && t.scrollTo(e);
    }, se = (e) => {
      T({
        left: ((W == null ? void 0 : W.value) ?? 0) + e * a.value / (s.value - L.value)
      });
    }, ae = (e) => {
      T({
        top: ((k == null ? void 0 : k.value) ?? 0) + e * r.value / (u.value - g.value)
      });
    }, j = ze((e) => {
      if (o.value)
        switch (o.value) {
          case "horizontal":
            se(e.clientX - ((b == null ? void 0 : b.value) ?? 0));
            break;
          case "vertical":
            ae(e.clientY - ((_ == null ? void 0 : _.value) ?? 0));
            break;
        }
    }, 80), q = () => {
      o.value = void 0, window.removeEventListener("mousemove", j), window.removeEventListener("mouseup", q);
    }, x = (e, t) => {
      e.preventDefault(), e.stopPropagation(), o.value = t;
      const n = M();
      switch (o.value) {
        case "horizontal":
          b.value = e.clientX, W.value = (n == null ? void 0 : n.scrollLeft) ?? 0;
          break;
        case "vertical":
          _.value = e.clientY, k.value = (n == null ? void 0 : n.scrollTop) ?? 0;
          break;
      }
      window.addEventListener("mousemove", j), window.addEventListener("mouseup", q);
    }, ne = (e) => {
      u.value !== e.clientHeight && (u.value = e.clientHeight);
    }, ue = (e) => {
      s.value !== e.clientWidth && (s.value = e.clientWidth);
    }, re = (e) => {
      r.value !== e.scrollHeight && (r.value = e.scrollHeight);
    }, ie = (e) => {
      a.value !== e.scrollWidth && (a.value = e.scrollWidth);
    }, ce = (e) => {
      w.value = e.scrollLeft, p("update:scrollPosition", {
        left: w.value,
        top: S.value
      });
    }, ve = (e) => {
      S.value = e.scrollTop, p("update:scrollPosition", {
        left: w.value,
        top: S.value
      });
    }, B = () => {
      const e = M();
      e && (ne(e), ue(e), re(e), ie(e));
    }, R = new MutationObserver(() => B()), D = new ResizeObserver(() => B()), F = (e) => {
      ce(e.target), ve(e.target);
    }, G = () => {
      R.disconnect(), D.disconnect();
      const e = M();
      e && (R.observe(e, {
        childList: !0,
        subtree: !0
      }), D.observe(e));
    };
    return me(() => {
      P.value && window.addEventListener("mousemove", U), G();
    }), K(c, () => G()), K(
      C,
      (e) => {
        w.value = e.left, S.value = e.top, he(() => T(e));
      },
      {
        deep: !0,
        immediate: !0
      }
    ), K(y, () => B()), (e, t) => (m(), O("div", {
      class: h(["scrollable", { [`mode-${v(i)}`]: !0, static: v(E) }]),
      ref_key: "area",
      ref: P
    }, [
      e.optimized ? fe([e.updateKey], () => (m(), O("div", {
        class: h(["scrollable-content", e.contentClass]),
        ref_key: "content",
        ref: $,
        key: e.updateKey,
        onScroll: F
      }, [
        Z(e.$slots, "default", {}, void 0, !0)
      ], 34)), t, 0) : (m(), O("div", {
        key: 1,
        class: h(["scrollable-content", e.contentClass]),
        ref_key: "content",
        ref: $,
        onScroll: F
      }, [
        Z(e.$slots, "default", {}, void 0, !0)
      ], 34)),
      v(i) !== "vertical" ? (m(), A(V, {
        key: 2,
        onMousedown: t[1] || (t[1] = H((n) => x(n, "horizontal"), ["stop"])),
        active: a.value > s.value && (y.value || o.value === "horizontal"),
        class: h({ "scrollbar-visible": a.value > s.value }),
        thumbOffset: X.value,
        thumbSize: Y.value,
        mode: "horizontal",
        size: e.size,
        theme: e.theme
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize", "size", "theme"])) : N("", !0),
      v(i) === "both-top" ? (m(), A(V, {
        key: 3,
        onMousedown: t[2] || (t[2] = H((n) => x(n, "horizontal"), ["stop"])),
        active: a.value > s.value && (y.value || o.value === "horizontal"),
        class: h({ "scrollbar-visible": a.value > s.value }),
        thumbOffset: X.value,
        thumbSize: Y.value,
        mode: "horizontal-top",
        size: e.size,
        theme: e.theme
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize", "size", "theme"])) : N("", !0),
      v(i) !== "horizontal" ? (m(), A(V, {
        key: 4,
        onMousedown: t[3] || (t[3] = H((n) => x(n, "vertical"), ["stop"])),
        active: r.value > u.value && (y.value || o.value === "vertical"),
        class: h({ "scrollbar-visible": r.value > u.value }),
        thumbOffset: oe.value,
        thumbSize: le.value,
        mode: "vertical",
        size: e.size,
        theme: e.theme
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize", "size", "theme"])) : N("", !0)
    ], 2));
  }
});
const _e = /* @__PURE__ */ te(we, [["__scopeId", "data-v-35924d50"]]);
export {
  _e as S,
  V as a
};
