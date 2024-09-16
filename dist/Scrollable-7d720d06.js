import { defineComponent as I, toRefs as ee, computed as m, openBlock as v, createElementBlock as k, normalizeClass as d, unref as c, withModifiers as M, normalizeStyle as J, createElementVNode as Q, ref as l, onUnmounted as de, onMounted as me, watch as K, nextTick as he, withMemo as fe, renderSlot as Z, createBlock as A, createCommentVNode as N } from "vue";
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
  setup(O, { emit: w }) {
    const H = O, { active: h, mode: i, thumbOffset: C, thumbSize: S, size: L, theme: E } = ee(H), u = m(() => {
      const [a, o] = i.value === "vertical" ? ["top", "height"] : ["left", "width"];
      return {
        [a]: `calc(3px + ${C.value} * (100% - ${S.value} - 6px))`,
        [o]: `${S.value}`
      };
    }), s = m(() => L.value === "small"), r = m(() => ({
      "--scrollbar-margin": s.value ? "1px" : "3px",
      "--scrollbar-size": s.value ? "12px" : "14px"
    }));
    return (a, o) => (v(), k("div", {
      class: d(["scrollable-area", { active: c(h), [c(i)]: !0, [c(E)]: !0 }]),
      onMousedown: o[0] || (o[0] = M((f) => w("mousedown", f), ["stop"])),
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
const V = /* @__PURE__ */ te(be, [["__scopeId", "data-v-ee2b7021"]]), ze = /* @__PURE__ */ I({
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
  setup(O, { emit: w }) {
    const H = O, { mode: h, relativeTo: i, scrollPosition: C, scrollHeightDelta: S, scrollWidthDelta: L, staticPosition: E } = ee(H), u = l(0), s = l(0), r = l(0), a = l(0), o = l(), f = l(), y = l(), g = l(), _ = l(), p = l(0), b = l(0), z = l(!1), X = m(() => p.value / (a.value - s.value)), Y = m(
      () => `max(56px, (100% - 14px) * ${s.value / a.value})`
    ), le = m(
      () => `max(56px, (100% - 14px) * ${u.value / r.value})`
    ), oe = m(() => b.value / (r.value - u.value)), $ = l(), P = l(), U = (e) => {
      var t;
      z.value = ((t = P.value) == null ? void 0 : t.contains(e.target)) || !1;
    };
    de(() => {
      window.removeEventListener("mousemove", U), T.disconnect(), D.disconnect();
    });
    const W = () => i != null && i.value ? i.value() : $.value, x = (e) => {
      const t = W();
      t && t.scrollTo(e);
    }, se = (e) => {
      x({
        left: ((g == null ? void 0 : g.value) ?? 0) + e * a.value / (s.value - L.value)
      });
    }, ae = (e) => {
      x({
        top: ((_ == null ? void 0 : _.value) ?? 0) + e * r.value / (u.value - S.value)
      });
    }, j = (e) => {
      if (o.value) {
        switch (o.value) {
          case "horizontal":
            se(e.clientX - ((f == null ? void 0 : f.value) ?? 0));
            break;
          case "vertical":
            ae(e.clientY - ((y == null ? void 0 : y.value) ?? 0));
            break;
        }
        e.preventDefault();
      }
    }, q = () => {
      o.value = void 0, window.removeEventListener("mousemove", j), window.removeEventListener("mouseup", q);
    }, B = (e, t) => {
      o.value = t;
      const n = W();
      switch (o.value) {
        case "horizontal":
          f.value = e.clientX, g.value = (n == null ? void 0 : n.scrollLeft) ?? 0;
          break;
        case "vertical":
          y.value = e.clientY, _.value = (n == null ? void 0 : n.scrollTop) ?? 0;
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
      p.value = e.scrollLeft, w("update:scrollPosition", {
        left: p.value,
        top: b.value
      });
    }, ve = (e) => {
      b.value = e.scrollTop, w("update:scrollPosition", {
        left: p.value,
        top: b.value
      });
    }, R = () => {
      const e = W();
      e && (ne(e), ue(e), re(e), ie(e));
    }, T = new MutationObserver(() => R()), D = new ResizeObserver(() => R()), F = (e) => {
      ce(e.target), ve(e.target);
    }, G = () => {
      T.disconnect(), D.disconnect();
      const e = W();
      e && (T.observe(e, {
        childList: !0,
        subtree: !0
      }), D.observe(e));
    };
    return me(() => {
      P.value && window.addEventListener("mousemove", U), G();
    }), K(i, () => G()), K(
      C,
      (e) => {
        p.value = e.left, b.value = e.top, he(() => x(e));
      },
      {
        deep: !0,
        immediate: !0
      }
    ), K(z, () => R()), (e, t) => (v(), k("div", {
      class: d(["scrollable", { [`mode-${c(h)}`]: !0, static: c(E) }]),
      ref_key: "area",
      ref: P
    }, [
      e.optimized ? fe([e.updateKey], () => (v(), k("div", {
        class: d(["scrollable-content", e.contentClass]),
        ref_key: "content",
        ref: $,
        key: e.updateKey,
        onScroll: F
      }, [
        Z(e.$slots, "default", {}, void 0, !0)
      ], 34)), t, 0) : (v(), k("div", {
        key: 1,
        class: d(["scrollable-content", e.contentClass]),
        ref_key: "content",
        ref: $,
        onScroll: F
      }, [
        Z(e.$slots, "default", {}, void 0, !0)
      ], 34)),
      c(h) !== "vertical" ? (v(), A(V, {
        key: 2,
        onMousedown: t[1] || (t[1] = M((n) => B(n, "horizontal"), ["stop"])),
        active: a.value > s.value && (z.value || o.value === "horizontal"),
        class: d({ "scrollbar-visible": a.value > s.value }),
        thumbOffset: X.value,
        thumbSize: Y.value,
        mode: "horizontal",
        size: e.size,
        theme: e.theme
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize", "size", "theme"])) : N("", !0),
      c(h) === "both-top" ? (v(), A(V, {
        key: 3,
        onMousedown: t[2] || (t[2] = M((n) => B(n, "horizontal"), ["stop"])),
        active: a.value > s.value && (z.value || o.value === "horizontal"),
        class: d({ "scrollbar-visible": a.value > s.value }),
        thumbOffset: X.value,
        thumbSize: Y.value,
        mode: "horizontal-top",
        size: e.size,
        theme: e.theme
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize", "size", "theme"])) : N("", !0),
      c(h) !== "horizontal" ? (v(), A(V, {
        key: 4,
        onMousedown: t[3] || (t[3] = M((n) => B(n, "vertical"), ["stop"])),
        active: r.value > u.value && (z.value || o.value === "vertical"),
        class: d({ "scrollbar-visible": r.value > u.value }),
        thumbOffset: oe.value,
        thumbSize: le.value,
        mode: "vertical",
        size: e.size,
        theme: e.theme
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize", "size", "theme"])) : N("", !0)
    ], 2));
  }
});
const ye = /* @__PURE__ */ te(ze, [["__scopeId", "data-v-3ab46d17"]]);
export {
  ye as S,
  V as a
};
