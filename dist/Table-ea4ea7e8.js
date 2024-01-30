import { defineComponent as ye, toRefs as $e, computed as B, openBlock as d, createElementBlock as v, normalizeClass as G, unref as l, withModifiers as fe, createElementVNode as _e, normalizeStyle as ne, ref as g, onUnmounted as Be, onMounted as Le, watch as Ce, nextTick as Re, withMemo as We, renderSlot as p, createBlock as He, createCommentVNode as w, createTextVNode as ge, Fragment as C, renderList as q, createVNode as we, toDisplayString as je, withCtx as H } from "vue";
import { _ as Te } from "./_plugin-vue_export-helper-dad06003.js";
import { D as Pe } from "./datetime-31a2b505.js";
import { I as Ee } from "./Icon-8f2ed8ba.js";
const Fe = { class: "scrollbar" }, Ie = /* @__PURE__ */ ye({
  __name: "ScrollableArea",
  props: {
    active: { type: Boolean },
    mode: {},
    thumbOffset: {},
    thumbSize: {}
  },
  emits: ["mousedown"],
  setup(ve, { emit: J }) {
    const ie = ve, { active: Q, mode: X, thumbOffset: oe, thumbSize: A } = $e(ie), m = B(() => {
      const [n, z] = X.value === "vertical" ? ["top", "height"] : ["left", "width"];
      return {
        [n]: `calc(3px + ${oe.value} * (100% - ${A.value} - 6px))`,
        [z]: `${A.value}`
      };
    });
    return (n, z) => (d(), v("div", {
      class: G(["scrollable-area", { active: l(Q), [l(X)]: !0 }]),
      onMousedown: z[0] || (z[0] = fe((_) => J("mousedown", _), ["stop"]))
    }, [
      _e("div", Fe, [
        _e("div", {
          class: "thumb",
          style: ne(m.value)
        }, null, 4)
      ])
    ], 34));
  }
});
const Se = /* @__PURE__ */ Te(Ie, [["__scopeId", "data-v-56aba386"]]), Ue = /* @__PURE__ */ ye({
  __name: "Scrollable",
  props: {
    mode: { default: "vertical" },
    optimized: { type: Boolean, default: !1 },
    relativeTo: {},
    scrollPosition: { default: () => ({ left: 0, top: 0 }) },
    scrollHeightDelta: { default: 0 },
    scrollWidthDelta: { default: 0 },
    staticPosition: { type: Boolean, default: !1 },
    updateKey: {}
  },
  emits: ["update:scrollPosition"],
  setup(ve, { emit: J }) {
    const ie = ve, { mode: Q, relativeTo: X, scrollPosition: oe, scrollHeightDelta: A, scrollWidthDelta: m, staticPosition: n } = $e(ie), z = g(!1), _ = g(0), N = g(0), I = g(0), $ = g(0), M = g(), Z = g(), K = g(), le = g(), L = g(), W = g(0), k = g(0), b = g(), j = B(() => W.value / ($.value - N.value)), U = B(
      () => `max(56px, (100% - 14px) * ${N.value / $.value})`
    ), Y = B(
      () => `max(56px, (100% - 14px) * ${_.value / I.value})`
    ), de = B(() => k.value / (I.value - _.value)), D = g();
    Be(() => {
      re.disconnect(), ee.disconnect();
    });
    const y = () => {
      M.value && (b.value !== void 0 && (clearTimeout(b.value), b.value = void 0), z.value = !1, M.value = void 0);
    }, ae = () => X != null && X.value ? X.value() : D.value, V = (i) => {
      const E = ae();
      E && E.scrollTo(i);
    }, me = (i) => {
      V({
        left: ((le == null ? void 0 : le.value) ?? 0) + i * $.value / (N.value - m.value)
      });
    }, ce = (i) => {
      V({
        top: ((L == null ? void 0 : L.value) ?? 0) + i * I.value / (_.value - A.value)
      });
    }, se = (i) => {
      if (M.value) {
        switch (M.value) {
          case "horizontal":
            me(i.clientX - ((Z == null ? void 0 : Z.value) ?? 0));
            break;
          case "vertical":
            ce(i.clientY - ((K == null ? void 0 : K.value) ?? 0));
            break;
        }
        i.preventDefault();
      }
    }, u = () => {
      M.value = void 0, ue(), window.removeEventListener("mousemove", se), window.removeEventListener("mouseup", u);
    }, c = (i, E) => {
      y(), z.value = !0, M.value = E;
      const F = ae();
      switch (M.value) {
        case "horizontal":
          Z.value = i.clientX, le.value = (F == null ? void 0 : F.scrollLeft) ?? 0;
          break;
        case "vertical":
          K.value = i.clientY, L.value = (F == null ? void 0 : F.scrollTop) ?? 0;
          break;
      }
      window.addEventListener("mousemove", se), window.addEventListener("mouseup", u);
    }, a = (i) => {
      _.value !== i.clientHeight && (_.value = i.clientHeight);
    }, f = (i) => {
      N.value !== i.clientWidth && (N.value = i.clientWidth);
    }, S = (i) => {
      I.value !== i.scrollHeight && (I.value = i.scrollHeight);
    }, O = (i) => {
      $.value !== i.scrollWidth && ($.value = i.scrollWidth);
    }, R = (i) => {
      W.value = i.scrollLeft, J("update:scrollPosition", {
        left: W.value,
        top: k.value
      });
    }, x = (i) => {
      k.value = i.scrollTop, J("update:scrollPosition", {
        left: W.value,
        top: k.value
      });
    }, P = () => {
      const i = ae();
      i && (a(i), f(i), S(i), O(i));
    }, re = new MutationObserver(() => P()), ee = new ResizeObserver(() => P()), te = (i) => {
      R(i.target), x(i.target);
    }, ue = () => {
      P(), !M.value && (y(), z.value = !0, b.value = window.setTimeout(() => {
        z.value = !1;
      }, 2500));
    }, he = () => {
      re.disconnect(), ee.disconnect();
      const i = ae();
      i && (re.observe(i, {
        childList: !0,
        subtree: !0
      }), ee.observe(i));
    };
    return Le(() => {
      he();
    }), Ce(X, () => he()), Ce(
      oe,
      (i) => {
        W.value = i.left, k.value = i.top, Re(() => V(i));
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (i, E) => (d(), v("div", {
      class: G(["scrollable", { [`mode-${l(Q)}`]: !0, static: l(n) }])
    }, [
      i.optimized ? We([i.updateKey], () => (d(), v("div", {
        class: "scrollable-content",
        ref_key: "content",
        ref: D,
        key: i.updateKey,
        onMousemove: ue,
        onScroll: te
      }, [
        p(i.$slots, "default", {}, void 0, !0)
      ], 32)), E, 0) : (d(), v("div", {
        key: 1,
        class: "scrollable-content",
        ref_key: "content",
        ref: D,
        onMousemove: ue,
        onScroll: te
      }, [
        p(i.$slots, "default", {}, void 0, !0)
      ], 544)),
      l(Q) !== "vertical" ? (d(), He(Se, {
        key: 2,
        onMousedown: E[1] || (E[1] = fe((F) => c(F, "horizontal"), ["stop"])),
        active: $.value > N.value && (z.value || M.value === "horizontal"),
        class: G({ "scrollbar-visible": $.value > N.value }),
        thumbOffset: j.value,
        thumbSize: U.value,
        mode: "horizontal"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0),
      l(Q) === "both-top" ? (d(), He(Se, {
        key: 3,
        onMousedown: E[2] || (E[2] = fe((F) => c(F, "horizontal"), ["stop"])),
        active: $.value > N.value && (z.value || M.value === "horizontal"),
        class: G({ "scrollbar-visible": $.value > N.value }),
        thumbOffset: j.value,
        thumbSize: U.value,
        mode: "horizontal-top"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0),
      l(Q) !== "horizontal" ? (d(), He(Se, {
        key: 4,
        onMousedown: E[3] || (E[3] = fe((F) => c(F, "vertical"), ["stop"])),
        active: I.value > _.value && (z.value || M.value === "vertical"),
        class: G({ "scrollbar-visible": I.value > _.value }),
        thumbOffset: de.value,
        thumbSize: Y.value,
        mode: "vertical"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0)
    ], 2));
  }
});
const Xe = /* @__PURE__ */ Te(Ue, [["__scopeId", "data-v-dee00969"]]), Ae = ["onClick", "onMousedown", "data-column"], qe = ["onClick"], Ge = ["data-column"], Ye = {
  key: 0,
  class: "cell column cell-additional-header row-number"
}, Je = ["data-additionalHeader", "data-column"], Qe = {
  key: 0,
  class: "cell total top-total row-number"
}, Ze = ["data-column", "data-subcolumn-index"], Ve = ["data-column"], xe = ["onClick", "data-column", "data-subcolumn-index"], Ke = ["data-column", "data-primary-key"], et = ["data-column", "data-primary-key", "data-subcolumn-index"], tt = ["innerHTML"], ot = {
  key: 0,
  class: "cell total row-number"
}, lt = ["data-column", "data-subcolumn-index"], at = ["data-column"], st = /* @__PURE__ */ ye({
  __name: "SimpleTable",
  props: {
    additionalHeaders: { default: () => ({}) },
    cellClasses: { default: () => ({}) },
    colorMetrics: { type: Boolean, default: !1 },
    coloredMetrics: { default: () => [] },
    columns: {},
    comparisonColumnKeys: {},
    detailsRows: {},
    dragColumns: { type: Boolean, default: !1 },
    inversedKpis: {},
    noDataMessage: { default: "&nbsp;" },
    orderBy: {},
    orderColumnType: {},
    primaryColumn: { default: "id" },
    rows: {},
    showNoDataMessage: { type: Boolean, default: !1 },
    showRowNumber: { type: Boolean, default: !0 },
    showTotal: { type: Boolean, default: !0 },
    showTopTotal: { type: Boolean, default: !1 }
  },
  emits: ["update:orderBy", "addColoredMetric", "removeColoredMetric", "move:column"],
  setup(ve, { emit: J }) {
    const ie = ve, {
      additionalHeaders: Q,
      cellClasses: X,
      colorMetrics: oe,
      coloredMetrics: A,
      columns: m,
      comparisonColumnKeys: n,
      detailsRows: z,
      dragColumns: _,
      inversedKpis: N,
      noDataMessage: I,
      orderBy: $,
      orderColumnType: M,
      primaryColumn: Z,
      rows: K,
      showNoDataMessage: le,
      showRowNumber: L,
      showTotal: W,
      showTopTotal: k
    } = $e(ie), b = g(), j = g(), U = g(0), Y = g(0), de = g(0), D = g({}), y = B(
      () => Object.entries(m.value).filter(([t, { visible: o }]) => o).map(([t, o]) => t)
    ), ae = B(
      () => y.value.length + (L.value ? 1 : 0)
    ), V = B(() => U.value > 3), me = B(
      () => Object.values(K.value).reduce((t, o) => {
        for (const [e, r] of Object.entries(m.value))
          if (r.type !== "string")
            if (n != null && n.value && (r.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(o[e]).reduce((s, [h, T]) => (s[h] = parseFloat(T), s), {}));
              for (const s in t[e])
                t[e][s] > o[e][s] && (t[e][s] = parseFloat(o[e][s]));
            } else
              (!(e in t) || t[e] > o[e]) && (t[e] = parseFloat(o[e]));
        return t;
      }, {})
    ), ce = B(
      () => Object.values(K.value).reduce((t, o) => {
        for (const [e, r] of Object.entries(m.value))
          if (r.type !== "string")
            if (n != null && n.value && (r.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(o[e]).reduce((s, [h, T]) => (s[h] = parseFloat(T), s), {}));
              for (const s in t[e])
                t[e][s] < o[e][s] && (t[e][s] = parseFloat(o[e][s]));
            } else
              (!(e in t) || t[e] < o[e]) && (t[e] = parseFloat(o[e]));
        return t;
      }, {})
    ), se = B(() => n != null && n.value ? y.value.map((t) => m.value[t].rowspan ?? 1).reduce((t, o) => t > o ? t : o) : 1), u = B(
      () => Object.values(K.value).sort((t, o) => {
        const e = (() => {
          const r = re(
            $.value[0].reduce((h, T) => h[T], t),
            M.value
          ), s = re(
            $.value[0].reduce((h, T) => h[T], o),
            M.value
          );
          return r > s ? 1 : r < s ? -1 : 0;
        })();
        return $.value[1] ? -e : e;
      }).reduce((t, o, e) => (t.push({
        ...o,
        rowInfo: {
          index: e,
          detailable: !0
        }
      }), z.value[o[Z.value]] && t.push(
        ...Object.entries(z.value[o[Z.value]]).map(
          ([r, s]) => ({
            ...s,
            rowInfo: {
              index: e,
              subindex: r,
              detailable: !1
            }
          })
        )
      ), t), [])
    ), c = B(() => {
      let t = 0;
      for (const e of y.value) {
        const r = m.value[e];
        r.colspan && (n != null && n.value) ? t += r.colspan : t++;
      }
      let o = `repeat(${t}, auto)`;
      return L.value && (o = `min-content ${o}`), {
        "grid-template-columns": o
      };
    }), a = (t) => D.value[t] ? D.value[t].height : 0, f = (t, o, e, r) => {
      const s = {
        ...X.value,
        even: o % 2 === 0
      };
      if (oe.value) {
        const h = (() => !N || !N.value ? "positive" : N.value.includes(e) ? "negative" : "positive")();
        s[`color-intensity-${S(t[e], e, r)}`] = !0, s[`color-${h}`] = !0, r !== void 0 && n && n.value && n.value[r] === "difference" ? s.colored = !1 : s.colored = te(e) >= 0;
      }
      return s;
    }, S = (t, o, e) => {
      if (m.value[o].type === "string")
        return;
      let r = t, s = ce.value[o], h = me.value[o];
      return n && n.value && e !== void 0 && (r = r[n.value[e]], s = s[n.value[e]], h = h[n.value[e]]), s === h ? 0 : Math.round((r - h) * 10 / (s - h));
    }, O = (t, o) => {
      const e = m.value[t], r = [t];
      o !== void 0 && (n && n.value ? r.push(n.value[o]) : r.push(o.toString()));
      const s = $.value[0] ? $.value[0].every(
        (h, T) => h === r[T]
      ) : !1;
      return {
        "column-main-extended": o === void 0 && (e.rowspan ?? 0) > 1,
        dragged: b.value ? y.value[b.value] === t : !1,
        "drag-mode": V.value,
        orderable: !(n && n.value) || (e.colspan ?? 1) === 1 || o !== void 0,
        "ordered-by": s,
        [`order-direction-${$.value[1] ? "desc" : "asc"}`]: s
      };
    }, R = (t) => {
      const o = {};
      if (D.value[t])
        if (b.value !== void 0 && y.value[b.value] === t) {
          const { height: e, left: r, width: s } = D.value[t];
          o.left = `${Math.floor(r + de.value - Y.value)}px`, o.height = `${e + 1}px`, o.width = `${Math.round(s)}px`;
        } else {
          const e = y.value.indexOf(t);
          let r = (() => {
            if (b.value === void 0 || j.value === void 0)
              return 0;
            if (b.value < e) {
              if (j.value >= e)
                return -D.value[y.value[b.value]].width;
            } else if (j.value <= e)
              return D.value[y.value[b.value]].width;
            return 0;
          })();
          const { height: s, left: h, width: T } = D.value[t];
          o.left = `${Math.floor(h + r)}px`, o.height = `${s + 1}px`, o.width = `${Math.floor(T)}px`;
        }
      return o;
    }, x = (t) => {
      const o = m.value[t], e = {};
      return n && n.value && (o.colspan && (e["grid-column-end"] = `span ${o.colspan}`), o.rowspan && (e["grid-row-end"] = `span ${o.rowspan}`)), e;
    }, P = (t) => n && n.value ? n.value[t] : void 0, re = (t, o) => {
      switch (o) {
        case "float":
        case "int":
        case "money":
        case "money_capped":
        case "percent":
        case "time":
          return parseFloat(t ?? 0);
        case "date":
          return Pe.fromISO(t).toUnixInteger();
        default:
          return t;
      }
    }, ee = (t) => t.subindex === void 0 ? t.index + 1 : `${t.index + 1}.${t.subindex + 1}`, te = (t) => A.value.findIndex((o) => o === t), ue = (t) => oe.value && !["date", "string"].includes(m.value[t].type), he = (t, o) => {
      if (n && n.value && m.value[t].colspan && o === void 0 || b.value !== void 0 && V.value && y.value[b.value] === t)
        return;
      const e = [t];
      o !== void 0 && (n && n.value ? e.push(n.value[o]) : e.push(o.toString()));
      const r = e.every(
        (h, T) => h === $.value[0][T]
      ), s = (() => r ? !$.value[1] : m.value[t].type !== "string")();
      J("update:orderBy", [e, s]);
    }, i = (t, o) => {
      _.value && (b.value = y.value.indexOf(t), j.value = b.value, U.value = 0, Y.value = o.clientX, de.value = o.clientX, window.addEventListener("mousemove", E), window.addEventListener("mouseup", F));
    }, E = (t) => {
      if (b.value === void 0)
        return;
      U.value++, de.value = t.clientX;
      const o = Object.entries(m.value).filter(([T, pe]) => pe.visible).map(([T]) => T).map((T, pe) => ({
        columnIndex: parseInt(pe.toString()),
        sizing: D.value[T]
      })), e = o[b.value].sizing, r = e.width / 2, h = e.left + de.value - Y.value;
      j.value = (() => {
        for (const { columnIndex: T, sizing: pe } of o)
          if (h + r - pe.left - pe.width < 0)
            return T;
        return o.length;
      })();
    }, F = (t) => {
      if (b.value === void 0 || j.value === void 0)
        return;
      V.value && j.value !== b.value && J("move:column", {
        from: b.value,
        to: j.value
      }), j.value = void 0, U.value = 0, b.value = void 0, window.removeEventListener("mousemove", E), window.removeEventListener("mouseup", F);
    }, Ne = (t) => {
      te(t) >= 0 ? J("removeColoredMetric", t) : J("addColoredMetric", t);
    }, be = g({}), De = (t, o) => {
      o && (be.value[t] = o);
    }, Me = g(), ke = () => {
      if (!Me.value)
        return;
      const t = Me.value.getBoundingClientRect();
      D.value = Object.entries(m.value).reduce(
        (o, [e, r]) => {
          if (r.visible && be.value[e]) {
            const s = be.value[e].getBoundingClientRect();
            o[e] = {
              height: s.height,
              left: s.left - t.left,
              width: s.width
            };
          }
          return o;
        },
        {}
      );
    }, ze = new ResizeObserver(() => {
      ke();
    });
    return Ce(
      be,
      () => {
        ze.disconnect();
        for (const t of Object.values(be.value))
          ze.observe(t);
        ke();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), ke(), (t, o) => (d(), v("div", {
      class: G(["table", {
        "with-secondary": !!l(n) && y.value.some((e) => (l(m)[e].colspan || 1) !== 1)
      }]),
      ref_key: "table",
      ref: Me,
      style: ne(c.value)
    }, [
      l(L) ? (d(), v("div", {
        key: 0,
        class: "cell column column-main row-number",
        style: ne(se.value > 1 ? { "grid-row-end": `span ${se.value}` } : void 0)
      }, [
        p(t.$slots, "columnRowNumber", {}, () => [
          ge("#")
        ], !0)
      ], 4)) : w("", !0),
      (d(!0), v(C, null, q(y.value, (e) => (d(), v(C, null, [
        l(m)[e].visible ? (d(), v("div", {
          key: 0,
          class: G(["cell column column-main", O(e)]),
          ref_for: !0,
          ref: (r) => De(e, r),
          onClick: fe(() => he(e), ["stop"]),
          onMousedown: (r) => i(e, r),
          style: ne(x(e)),
          "data-column": e
        }, [
          p(t.$slots, "column", {
            columnKey: e,
            isGhost: !1
          }, void 0, !0),
          ue(e) ? (d(), v("div", {
            key: 0,
            class: "toggle-colored no-spacing",
            onClick: fe(() => Ne(e), ["stop"]),
            style: ne({ top: `${a(e)}px` })
          }, [
            p(t.$slots, "colorizeLabel", {
              enabled: te(e) >= 0
            }, void 0, !0)
          ], 12, qe)) : w("", !0)
        ], 46, Ae)) : w("", !0)
      ], 64))), 256)),
      l(_) ? (d(!0), v(C, { key: 1 }, q(y.value, (e) => (d(), v(C, null, [
        l(m)[e].visible ? (d(), v("div", {
          key: 0,
          class: G(["cell column column-main column-ghost", O(e)]),
          style: ne(R(e)),
          "data-column": e
        }, [
          p(t.$slots, "column", {
            columnKey: e,
            isGhost: !0
          }, void 0, !0)
        ], 14, Ge)) : w("", !0)
      ], 64))), 256)) : w("", !0),
      (d(!0), v(C, null, q(l(Q), (e, r) => (d(), v(C, null, [
        l(L) ? (d(), v("div", Ye, [
          we(Ee, {
            value: e.icon
          }, null, 8, ["value"])
        ])) : w("", !0),
        (d(!0), v(C, null, q(y.value, (s) => (d(), v("div", {
          class: G(["cell column cell-additional-header", [`cell-additional-header-${s}`]]),
          "data-additionalHeader": r,
          "data-column": s
        }, [
          p(t.$slots, "additionalHeader", {
            additionalHeader: r,
            columnKey: s
          }, void 0, !0)
        ], 10, Je))), 256))
      ], 64))), 256)),
      l(k) && l(W) ? (d(), v(C, { key: 2 }, [
        l(L) ? (d(), v("div", Qe, [
          p(t.$slots, "topTotalRowNumber", {}, void 0, !0)
        ])) : w("", !0),
        (d(!0), v(C, null, q(y.value, (e) => (d(), v(C, null, [
          l(m)[e].visible ? (d(), v(C, { key: 0 }, [
            l(n) && (l(m)[e].colspan || 1) !== 1 ? (d(!0), v(C, { key: 0 }, q(l(m)[e].colspan, (r) => (d(), v("div", {
              class: "cell total top-total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              p(t.$slots, "topTotal", {
                columnKey: e,
                subcolumnKey: P(r - 1),
                values: u.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, Ze))), 256)) : (d(), v("div", {
              key: 1,
              class: "cell total top-total",
              "data-column": e
            }, [
              p(t.$slots, "topTotal", {
                columnKey: e,
                values: u.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, Ve))
          ], 64)) : w("", !0)
        ], 64))), 256))
      ], 64)) : w("", !0),
      l(n) ? (d(!0), v(C, { key: 3 }, q(y.value, (e) => (d(), v(C, null, [
        l(m)[e].visible && l(m)[e].colspan ? (d(!0), v(C, { key: 0 }, q(l(m)[e].colspan, (r) => (d(), v("div", {
          class: G(["cell column column-secondary", O(e, r - 1)]),
          onClick: fe(() => he(e, r - 1), ["stop"]),
          "data-column": e,
          "data-subcolumn-index": r - 1
        }, [
          p(t.$slots, "secondaryColumn", {
            columnKey: e,
            subcolumnKey: P(r - 1)
          }, void 0, !0)
        ], 10, xe))), 256)) : w("", !0)
      ], 64))), 256)) : w("", !0),
      (d(!0), v(C, null, q(u.value, (e, r) => (d(), v(C, null, [
        l(L) ? (d(), v("div", {
          key: 0,
          class: G(["cell row-number", { even: r % 2 === 0 }])
        }, [
          p(t.$slots, "rowNumber", {
            value: ee(e.rowInfo)
          }, () => [
            ge(je(ee(e.rowInfo)), 1)
          ], !0)
        ], 2)) : w("", !0),
        (d(!0), v(C, null, q(y.value, (s) => (d(), v(C, null, [
          !l(n) || (l(m)[s].colspan || 1) === 1 ? (d(), v("div", {
            key: 0,
            class: G(["cell", f(e, r, s)]),
            "data-column": s,
            "data-primary-key": e[l(Z)]
          }, [
            p(t.$slots, "row", {
              columnKey: s,
              index: r,
              row: e,
              subindex: e.rowInfo.subindex,
              value: e[s]
            }, void 0, !0)
          ], 10, Ke)) : (d(!0), v(C, { key: 1 }, q(l(m)[s].colspan, (h) => (d(), v("div", {
            class: G(["cell", f(e, r, s, h - 1)]),
            "data-column": s,
            "data-primary-key": e[l(Z)],
            "data-subcolumn-index": h - 1
          }, [
            p(t.$slots, "row", {
              columnKey: s,
              index: r,
              row: e,
              spanIndex: l(n) ? l(n)[h - 1] : h - 1,
              subcolumnKey: P(h - 1),
              subindex: e.rowInfo.subindex,
              value: e[s] ? e[s][l(n) ? l(n)[h - 1] : h - 1] : void 0
            }, void 0, !0)
          ], 10, et))), 256))
        ], 64))), 256))
      ], 64))), 256)),
      u.value.length === 0 && l(le) ? (d(), v("div", {
        class: "cell odd no-data",
        key: "row-no-data",
        style: ne({ "grid-column": `1 / span ${ae.value}` }),
        innerHTML: l(I)
      }, null, 12, tt)) : w("", !0),
      l(W) ? (d(), v(C, { key: 5 }, [
        l(L) ? (d(), v("div", ot, [
          p(t.$slots, "totalRowNumber", {}, () => [
            ge("#")
          ], !0)
        ])) : w("", !0),
        (d(!0), v(C, null, q(y.value, (e) => (d(), v(C, null, [
          l(m)[e].visible ? (d(), v(C, { key: 0 }, [
            l(n) && (l(m)[e].colspan || 1) !== 1 ? (d(!0), v(C, { key: 0 }, q(l(m)[e].colspan, (r) => (d(), v("div", {
              class: "cell total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              p(t.$slots, "total", {
                columnKey: e,
                subcolumnKey: P(r - 1),
                values: u.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, lt))), 256)) : (d(), v("div", {
              key: 1,
              class: "cell total",
              "data-column": e
            }, [
              p(t.$slots, "total", {
                columnKey: e,
                values: u.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, at))
          ], 64)) : w("", !0)
        ], 64))), 256))
      ], 64)) : w("", !0)
    ], 6));
  }
});
const Oe = /* @__PURE__ */ Te(st, [["__scopeId", "data-v-f5238781"]]), rt = /* @__PURE__ */ ye({
  __name: "Table",
  props: {
    additionalHeaders: { default: () => ({}) },
    cellClasses: { default: () => ({}) },
    colorMetrics: { type: Boolean, default: !1 },
    coloredMetrics: { default: () => [] },
    columns: {},
    comparisonColumnKeys: { default: () => [] },
    detailsRows: {},
    dragColumns: { type: Boolean, default: !1 },
    fixedColumnNumber: { default: 1 },
    inversedKpis: { default: () => [] },
    noDataMessage: {},
    orderBy: {},
    primaryColumn: { default: "id" },
    rows: {},
    scrollPosition: { default: () => ({ left: 0, top: 0 }) },
    showRowNumber: { type: Boolean, default: !0 },
    showTopTotal: { type: Boolean, default: !1 },
    showTotal: { type: Boolean, default: !0 }
  },
  setup(ve) {
    const J = ve, {
      additionalHeaders: ie,
      cellClasses: Q,
      colorMetrics: X,
      coloredMetrics: oe,
      columns: A,
      comparisonColumnKeys: m,
      detailsRows: n,
      dragColumns: z,
      fixedColumnNumber: _,
      inversedKpis: N,
      orderBy: I,
      primaryColumn: $,
      rows: M,
      scrollPosition: Z,
      showRowNumber: K,
      showTopTotal: le,
      showTotal: L
    } = $e(J), W = g(0), k = g(), b = g(0), j = g(0);
    Be(() => ce.disconnect());
    const U = B(
      () => Object.keys(A.value).slice(0, _.value).reduce((u, c) => (u[c] = A.value[c], u), {})
    ), Y = B(
      () => Object.keys(A.value).slice(_.value).reduce((u, c) => (u[c] = A.value[c], u), {})
    ), de = B(
      () => Object.keys(n.value).reduce(
        (u, c) => u + c.length,
        Object.values(M.value).length
      )
    ), D = B(() => {
      var c, a, f;
      const u = {};
      return (c = k.value) != null && c.main && (u["--header-main-height"] = `${k.value.main}px`), (a = k.value) != null && a.secondary && (u["--header-secondary-height"] = `${k.value.secondary}px`), W.value && (u["--fixed-width"] = `${W.value}px`), (f = k.value) != null && f.total && (u["--header-total-height"] = `${k.value.total}px`), b.value ? (u["--total-height"] = `${b.value}px`, u["--bottom-height"] = u["--total-height"]) : (de.value === 1 ? u["--total-scrollbar-display"] = "none" : u["--total-height"] = "20px", u["--bottom-height"] = "0px"), u;
    }), y = g(), ae = g(), V = g(!1), me = () => {
      var f, S;
      if (V.value)
        return;
      V.value = !0, W.value = 0, k.value = void 0, b.value = 0;
      const u = (O) => {
        const R = {
          hasSecondary: !1,
          mainColumnHeight: 0,
          secondaryColumnHeight: 0,
          totalColumnHeight: 0,
          totalHeight: 0,
          width: 0
        };
        if (!O)
          return R;
        const x = [...O.querySelectorAll(".cell.column-main")], P = O.querySelector(".cell.column-secondary"), re = O.querySelector(".cell.total"), ee = [];
        return x.length > 0 && (R.mainColumnHeight = x[0].offsetHeight, R.width = x.reduce((te, { offsetWidth: ue }) => te + ue, 0), ee.push(R.mainColumnHeight)), P && (R.hasSecondary = !0, R.secondaryColumnHeight = P.offsetHeight, ee.push(R.secondaryColumnHeight)), R.totalColumnHeight = ee.reduce((te, ue) => te + ue + 1, -1), re && (R.totalHeight = re.offsetHeight), R;
      }, c = u((f = y.value) == null ? void 0 : f.$el), a = u((S = ae.value) == null ? void 0 : S.$el);
      if (a.hasSecondary)
        W.value = c.width, k.value = {
          main: a.mainColumnHeight,
          secondary: a.secondaryColumnHeight,
          total: Math.max(c.totalColumnHeight, a.totalColumnHeight)
        }, b.value = c.totalHeight;
      else {
        const O = Math.max(
          c.totalColumnHeight,
          a.totalColumnHeight
        );
        W.value = c.width, k.value = {
          main: O,
          total: O
        }, b.value = c.totalHeight;
      }
      Re(() => {
        V.value = !1;
      });
    }, ce = new ResizeObserver(() => me()), se = g();
    return Re(() => {
      ce.disconnect(), se.value && ce.observe(se.value);
    }), Ce(M, () => {
      j.value = Math.random();
    }), (u, c) => (d(), v("div", {
      class: "table-container",
      ref_key: "tableContainer",
      ref: se
    }, [
      we(Xe, {
        "onUpdate:scrollPosition": c[7] || (c[7] = (a) => u.$emit("update:scrollPosition", a)),
        scrollHeightDelta: (k.value ? k.value.total : 0) + b.value - 40,
        scrollPosition: l(Z),
        scrollWidthDelta: W.value,
        style: ne(D.value),
        updateKey: j.value,
        mode: "both-top",
        optimized: ""
      }, {
        default: H(() => [
          we(Oe, {
            class: "fixed",
            ref_key: "fixedTable",
            ref: y,
            onAddColoredMetric: c[0] || (c[0] = (a) => u.$emit("addColoredMetric", a)),
            onRemoveColoredMetric: c[1] || (c[1] = (a) => u.$emit("removeColoredMetric", a)),
            "onUpdate:orderBy": c[2] || (c[2] = (a) => u.$emit("update:orderBy", a)),
            additionalHeaders: l(ie),
            cellClasses: l(Q),
            colorMetrics: l(X),
            coloredMetrics: l(oe),
            columns: U.value,
            comparisonColumnKeys: l(m),
            detailsRows: l(n),
            dragColumns: !1,
            inversedKpis: l(N),
            orderBy: l(I),
            orderColumnType: l(A)[l(I)[0][0]].type,
            primaryColumn: l($),
            rows: l(M),
            showNoDataMessage: !0,
            showRowNumber: l(K),
            showTopTotal: l(le),
            showTotal: l(L)
          }, {
            columnRowNumber: H(() => [
              p(u.$slots, "columnRowNumber", {}, () => [
                ge("#")
              ], !0)
            ]),
            colorizeLabel: H(({ enabled: a }) => [
              p(u.$slots, "colorizeLabel", { enabled: a }, void 0, !0)
            ]),
            column: H(({ columnKey: a, isGhost: f }) => [
              a in U.value ? p(u.$slots, "column", {
                key: 0,
                columnKey: a,
                isGhost: f
              }, void 0, !0) : w("", !0)
            ]),
            additionalHeader: H(({ additionalHeader: a, columnKey: f }) => [
              p(u.$slots, "additionalHeader", {
                additionalHeader: a,
                columnKey: f
              }, void 0, !0)
            ]),
            topTotal: H(({ columnKey: a, subcolumnKey: f, values: S }) => [
              a in U.value ? p(u.$slots, "topTotal", {
                key: 0,
                columnKey: a,
                subcolumnKey: f,
                values: S
              }, void 0, !0) : w("", !0)
            ]),
            topTotalRowNumber: H(() => [
              p(u.$slots, "topTotalRowNumber", {}, void 0, !0)
            ]),
            secondaryColumn: H(({ columnKey: a, subcolumnKey: f }) => [
              a in U.value ? p(u.$slots, "secondaryColumn", {
                key: 0,
                columnKey: a,
                subcolumnKey: f
              }, void 0, !0) : w("", !0)
            ]),
            rowNumber: H(({ value: a }) => [
              p(u.$slots, "rowNumber", { value: a }, void 0, !0)
            ]),
            row: H(({ columnKey: a, index: f, row: S, spanIndex: O, subcolumnKey: R, subindex: x, value: P }) => [
              a in U.value ? p(u.$slots, "row", {
                key: 0,
                columnKey: a,
                index: f,
                row: S,
                spanIndex: O,
                subcolumnKey: R,
                subindex: x,
                value: P
              }, void 0, !0) : w("", !0)
            ]),
            totalRowNumber: H(() => [
              p(u.$slots, "totalRowNumber", {}, () => [
                ge("#")
              ], !0)
            ]),
            total: H(({ columnKey: a, subcolumnKey: f, values: S }) => [
              a in U.value ? p(u.$slots, "total", {
                key: 0,
                columnKey: a,
                subcolumnKey: f,
                values: S
              }, void 0, !0) : w("", !0)
            ]),
            _: 3
          }, 8, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "inversedKpis", "orderBy", "orderColumnType", "primaryColumn", "rows", "showRowNumber", "showTopTotal", "showTotal"]),
          we(Oe, {
            ref_key: "scrollableTable",
            ref: ae,
            onAddColoredMetric: c[3] || (c[3] = (a) => u.$emit("addColoredMetric", a)),
            "onMove:column": c[4] || (c[4] = ({ from: a, to: f }) => u.$emit("move:column", { from: a + l(_), to: f + l(_) })),
            onRemoveColoredMetric: c[5] || (c[5] = (a) => u.$emit("removeColoredMetric", a)),
            "onUpdate:orderBy": c[6] || (c[6] = (a) => u.$emit("update:orderBy", a)),
            additionalHeaders: l(ie),
            cellClasses: l(Q),
            colorMetrics: l(X),
            coloredMetrics: l(oe),
            columns: Y.value,
            comparisonColumnKeys: l(m),
            detailsRows: l(n),
            inversedKpis: l(N),
            dragColumns: l(z),
            orderBy: l(I),
            orderColumnType: l(A)[l(I)[0][0]].type,
            primaryColumn: l($),
            rows: l(M),
            showRowNumber: !1,
            showTopTotal: l(le),
            showTotal: l(L),
            showNoDataMessage: !0,
            noDataMessage: u.noDataMessage,
            style: ne(D.value)
          }, {
            colorizeLabel: H(({ enabled: a }) => [
              p(u.$slots, "colorizeLabel", { enabled: a }, void 0, !0)
            ]),
            column: H(({ columnKey: a, isGhost: f }) => [
              a in Y.value ? p(u.$slots, "column", {
                key: 0,
                columnKey: a,
                isGhost: f
              }, void 0, !0) : w("", !0)
            ]),
            additionalHeader: H(({ additionalHeader: a, columnKey: f }) => [
              p(u.$slots, "additionalHeader", {
                additionalHeader: a,
                columnKey: f
              }, void 0, !0)
            ]),
            topTotal: H(({ columnKey: a, subcolumnKey: f, values: S }) => [
              a in Y.value ? p(u.$slots, "topTotal", {
                key: 0,
                columnKey: a,
                subcolumnKey: f,
                values: S
              }, void 0, !0) : w("", !0)
            ]),
            secondaryColumn: H(({ columnKey: a, subcolumnKey: f }) => [
              a in Y.value ? p(u.$slots, "secondaryColumn", {
                key: 0,
                columnKey: a,
                subcolumnKey: f
              }, void 0, !0) : w("", !0)
            ]),
            row: H(({ columnKey: a, index: f, row: S, spanIndex: O, subcolumnKey: R, subindex: x, value: P }) => [
              a in Y.value ? p(u.$slots, "row", {
                key: 0,
                columnKey: a,
                index: f,
                row: S,
                spanIndex: O,
                subcolumnKey: R,
                subindex: x,
                value: P
              }, void 0, !0) : w("", !0)
            ]),
            total: H(({ columnKey: a, subcolumnKey: f, values: S }) => [
              a in Y.value ? p(u.$slots, "total", {
                key: 0,
                columnKey: a,
                subcolumnKey: f,
                values: S
              }, void 0, !0) : w("", !0)
            ]),
            _: 3
          }, 8, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "inversedKpis", "dragColumns", "orderBy", "orderColumnType", "primaryColumn", "rows", "showTopTotal", "showTotal", "noDataMessage", "style"])
        ]),
        _: 3
      }, 8, ["scrollHeightDelta", "scrollPosition", "scrollWidthDelta", "style", "updateKey"])
    ], 512));
  }
});
const vt = /* @__PURE__ */ Te(rt, [["__scopeId", "data-v-157d1b2f"]]);
export {
  Xe as S,
  vt as T,
  Se as a,
  Oe as b
};
