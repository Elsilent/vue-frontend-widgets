import { defineComponent as ke, toRefs as He, ref as M, computed as N, watch as ve, openBlock as d, createElementBlock as v, normalizeClass as U, unref as a, normalizeStyle as P, renderSlot as f, createTextVNode as ae, createCommentVNode as b, Fragment as g, renderList as k, withModifiers as ge, createVNode as ce, toDisplayString as ze, onUnmounted as _e, nextTick as $e, withCtx as $, createSlots as Me } from "vue";
import { S as De } from "./Scrollable-055852b4.js";
import { D as je } from "./datetime-31a2b505.js";
import { I as Le } from "./Icon-53e685d0.js";
import { _ as Re } from "./_plugin-vue_export-helper-dad06003.js";
const Ie = ["onClick", "onMousedown", "data-column"], Fe = ["onClick"], Ee = ["data-column"], Ue = {
  key: 0,
  class: "cell column cell-additional-header row-number"
}, Pe = ["data-additionalHeader", "data-column"], We = {
  key: 0,
  class: "cell total top-total row-number"
}, Xe = ["data-column", "data-subcolumn-index"], qe = ["data-column"], Ae = ["onClick", "data-column", "data-subcolumn-index"], Ge = ["data-column", "data-primary-key"], Je = ["data-column", "data-primary-key", "data-subcolumn-index"], Qe = ["innerHTML"], Ye = {
  key: 0,
  class: "cell total row-number"
}, Ze = ["data-column", "data-subcolumn-index"], Ve = ["data-column"], xe = /* @__PURE__ */ ke({
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
  setup(fe, { emit: A }) {
    const x = fe, {
      additionalHeaders: se,
      cellClasses: re,
      colorMetrics: K,
      coloredMetrics: I,
      columns: p,
      comparisonColumnKeys: u,
      detailsRows: ne,
      dragColumns: W,
      inversedKpis: G,
      noDataMessage: J,
      orderBy: z,
      orderColumnType: X,
      primaryColumn: Q,
      rows: ee,
      showNoDataMessage: ue,
      showRowNumber: D,
      showTotal: F,
      showTopTotal: R
    } = He(x), h = M(), H = M(), _ = M(0), j = M(0), Y = M(0), S = M({}), w = N(
      () => Object.entries(p.value).filter(([t, { visible: l }]) => l).map(([t, l]) => t)
    ), ie = N(
      () => w.value.length + (D.value ? 1 : 0)
    ), q = N(() => _.value > 3), te = N(
      () => Object.values(ee.value).reduce((t, l) => {
        for (const [e, r] of Object.entries(p.value))
          if (r.type !== "string")
            if (u != null && u.value && (r.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(l[e]).reduce((s, [m, C]) => (s[m] = parseFloat(C), s), {}));
              for (const s in t[e])
                t[e][s] > l[e][s] && (t[e][s] = parseFloat(l[e][s]));
            } else
              (!(e in t) || t[e] > l[e]) && (t[e] = parseFloat(l[e]));
        return t;
      }, {})
    ), oe = N(
      () => Object.values(ee.value).reduce((t, l) => {
        for (const [e, r] of Object.entries(p.value))
          if (r.type !== "string")
            if (u != null && u.value && (r.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(l[e]).reduce((s, [m, C]) => (s[m] = parseFloat(C), s), {}));
              for (const s in t[e])
                t[e][s] < l[e][s] && (t[e][s] = parseFloat(l[e][s]));
            } else
              (!(e in t) || t[e] < l[e]) && (t[e] = parseFloat(l[e]));
        return t;
      }, {})
    ), Z = N(() => u != null && u.value ? w.value.map((t) => p.value[t].rowspan ?? 1).reduce((t, l) => t > l ? t : l) : 1), n = N(
      () => Object.values(ee.value).sort((t, l) => {
        const e = (() => {
          const r = O(
            z.value[0].reduce((m, C) => m[C], t),
            X.value
          ), s = O(
            z.value[0].reduce((m, C) => m[C], l),
            X.value
          );
          return r > s ? 1 : r < s ? -1 : 0;
        })();
        return z.value[1] ? -e : e;
      }).reduce((t, l, e) => (t.push({
        ...l,
        rowInfo: {
          index: e,
          detailable: !0
        }
      }), ne.value[l[Q.value]] && t.push(
        ...Object.entries(ne.value[l[Q.value]]).map(
          ([r, s]) => ({
            ...s,
            rowInfo: {
              index: e,
              subindex: +r,
              detailable: !1
            }
          })
        )
      ), t), [])
    ), i = N(() => {
      let t = 0;
      for (const e of w.value) {
        const r = p.value[e];
        r.colspan && (u != null && u.value) ? t += r.colspan : t++;
      }
      let l = `repeat(${t}, auto)`;
      return D.value && (l = `min-content ${l}`), {
        "grid-template-columns": l
      };
    }), o = (t) => S.value[t] ? S.value[t].height : 0, c = (t, l, e, r) => {
      const s = {
        ...re.value,
        even: l % 2 === 0
      };
      if (K.value) {
        const m = (() => !G || !G.value ? "positive" : G.value.includes(e) ? "negative" : "positive")();
        s[`color-intensity-${t.rowInfo.detailable ? y(t[e], e, r) : "none"}`] = !0, s[`color-${m}`] = !0, r !== void 0 && u && u.value && u.value[r].includes("difference") ? s.colored = !1 : s.colored = me(e) >= 0;
      }
      return s;
    }, y = (t, l, e) => {
      if (p.value[l].type === "string")
        return;
      let r = t || 0, s = oe.value[l] || 0, m = te.value[l] || 0;
      if (u && u.value && e !== void 0 && (r = r[u.value[e]], s = s[u.value[e]], m = m[u.value[e]]), s === m)
        return 0;
      const C = Math.round((r - m) * 10 / (s - m));
      return C > 10 ? 10 : C < 1 ? 0 : C;
    }, B = (t, l) => {
      const e = p.value[t], r = [t];
      l !== void 0 && (u && u.value ? r.push(u.value[l]) : r.push(l.toString()));
      const s = z.value[0] ? z.value[0].every(
        (m, C) => m === r[C]
      ) : !1;
      return {
        "column-main-extended": l === void 0 && (e.rowspan ?? 0) > 1,
        dragged: h.value ? w.value[h.value] === t : !1,
        "drag-mode": q.value,
        orderable: !(u && u.value) || (e.colspan ?? 1) === 1 || l !== void 0,
        "ordered-by": s,
        [`order-direction-${z.value[1] ? "desc" : "asc"}`]: s
      };
    }, E = (t) => {
      const l = {};
      if (S.value[t])
        if (h.value !== void 0 && w.value[h.value] === t) {
          const { height: e, left: r, width: s } = S.value[t];
          l.left = `${Math.floor(r + Y.value - j.value)}px`, l.height = `${e + 1}px`, l.width = `${Math.round(s)}px`;
        } else {
          const e = w.value.indexOf(t);
          let r = (() => {
            if (h.value === void 0 || H.value === void 0)
              return 0;
            if (h.value < e) {
              if (H.value >= e)
                return -S.value[w.value[h.value]].width;
            } else if (H.value <= e)
              return S.value[w.value[h.value]].width;
            return 0;
          })();
          const { height: s, left: m, width: C } = S.value[t];
          l.left = `${Math.floor(m + r)}px`, l.height = `${s + 1}px`, l.width = `${Math.floor(C)}px`;
        }
      return l;
    }, L = (t) => {
      const l = p.value[t], e = {};
      return u && u.value && (l.colspan && (e["grid-column-end"] = `span ${l.colspan}`), l.rowspan && (e["grid-row-end"] = `span ${l.rowspan}`)), e;
    }, T = (t) => u && u.value ? u.value[t] : void 0, O = (t, l) => {
      switch (l) {
        case "float":
        case "int":
        case "money":
        case "money_capped":
        case "percent":
        case "time":
          return parseFloat(t ?? 0);
        case "date":
          return je.fromISO(t).toUnixInteger();
        default:
          return t;
      }
    }, de = (t) => t.subindex === void 0 ? t.index + 1 : `${t.index + 1}.${t.subindex + 1}`, me = (t) => I.value.findIndex((l) => l === t), Be = (t) => K.value && !["date", "string"].includes(p.value[t].type), Ce = (t, l) => {
      if (u && u.value && p.value[t].colspan && l === void 0 || h.value !== void 0 && q.value && w.value[h.value] === t)
        return;
      const e = [t];
      l !== void 0 && (u && u.value ? e.push(u.value[l]) : e.push(l.toString()));
      const r = e.every(
        (m, C) => m === z.value[0][C]
      ), s = (() => r ? !z.value[1] : p.value[t].type !== "string")();
      A("update:orderBy", [e, s]);
    }, Se = (t, l) => {
      W.value && (h.value = w.value.indexOf(t), H.value = h.value, _.value = 0, j.value = l.clientX, Y.value = l.clientX, window.addEventListener("mousemove", be), window.addEventListener("mouseup", we));
    }, be = (t) => {
      if (h.value === void 0)
        return;
      _.value++, Y.value = t.clientX;
      const l = Object.entries(p.value).filter(([C, V]) => V.visible).map(([C]) => C).map((C, V) => ({
        columnIndex: parseInt(V.toString()),
        sizing: S.value[C]
      })), e = l[h.value].sizing, r = e.width / 2, m = e.left + Y.value - j.value;
      H.value = (() => {
        for (const { columnIndex: C, sizing: V } of l)
          if (m + r - V.left - V.width < 0)
            return C;
        return l.length;
      })();
    }, we = (t) => {
      if (h.value === void 0 || H.value === void 0)
        return;
      q.value && H.value !== h.value && A("move:column", {
        from: h.value,
        to: H.value
      }), H.value = void 0, _.value = 0, h.value = void 0, window.removeEventListener("mousemove", be), window.removeEventListener("mouseup", we);
    }, Oe = (t) => {
      me(t) >= 0 ? A("removeColoredMetric", t) : A("addColoredMetric", t);
    }, le = M({}), Ne = (t, l) => {
      l && (le.value[t] = l);
    }, pe = M(), he = () => {
      if (!pe.value)
        return;
      const t = pe.value.getBoundingClientRect();
      S.value = Object.entries(p.value).reduce(
        (l, [e, r]) => {
          if (r.visible && le.value[e]) {
            const s = le.value[e].getBoundingClientRect();
            l[e] = {
              height: s.height,
              left: s.left - t.left,
              width: s.width
            };
          }
          return l;
        },
        {}
      );
    }, ye = new ResizeObserver(() => {
      he();
    });
    return ve(
      le,
      () => {
        ye.disconnect();
        for (const t of Object.values(le.value))
          ye.observe(t);
        he();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), he(), (t, l) => (d(), v("div", {
      class: U(["table", {
        "with-secondary": !!a(u) && w.value.some((e) => (a(p)[e].colspan || 1) !== 1)
      }]),
      ref_key: "table",
      ref: pe,
      style: P(i.value)
    }, [
      a(D) ? (d(), v("div", {
        key: 0,
        class: "cell column column-main row-number",
        style: P(Z.value > 1 ? { "grid-row-end": `span ${Z.value}` } : void 0)
      }, [
        f(t.$slots, "columnRowNumber", {}, () => [
          ae("#")
        ], !0)
      ], 4)) : b("", !0),
      (d(!0), v(g, null, k(w.value, (e) => (d(), v(g, null, [
        a(p)[e].visible ? (d(), v("div", {
          key: 0,
          class: U(["cell column column-main", B(e)]),
          ref_for: !0,
          ref: (r) => Ne(e, r),
          onClick: ge(() => Ce(e), ["stop"]),
          onMousedown: (r) => Se(e, r),
          style: P(L(e)),
          "data-column": e
        }, [
          f(t.$slots, "column", {
            columnKey: e,
            isGhost: !1
          }, void 0, !0),
          Be(e) ? (d(), v("div", {
            key: 0,
            class: "toggle-colored no-spacing",
            onClick: ge(() => Oe(e), ["stop"]),
            style: P({ top: `${o(e)}px` })
          }, [
            f(t.$slots, "colorizeLabel", {
              enabled: me(e) >= 0
            }, void 0, !0)
          ], 12, Fe)) : b("", !0)
        ], 46, Ie)) : b("", !0)
      ], 64))), 256)),
      a(W) ? (d(!0), v(g, { key: 1 }, k(w.value, (e) => (d(), v(g, null, [
        a(p)[e].visible ? (d(), v("div", {
          key: 0,
          class: U(["cell column column-main column-ghost", B(e)]),
          style: P(E(e)),
          "data-column": e
        }, [
          f(t.$slots, "column", {
            columnKey: e,
            isGhost: !0
          }, void 0, !0)
        ], 14, Ee)) : b("", !0)
      ], 64))), 256)) : b("", !0),
      (d(!0), v(g, null, k(a(se), (e, r) => (d(), v(g, null, [
        a(D) ? (d(), v("div", Ue, [
          ce(Le, {
            value: e.icon
          }, null, 8, ["value"])
        ])) : b("", !0),
        (d(!0), v(g, null, k(w.value, (s) => (d(), v("div", {
          class: U(["cell column cell-additional-header", [`cell-additional-header-${s}`]]),
          "data-additionalHeader": r,
          "data-column": s
        }, [
          f(t.$slots, "additionalHeader", {
            additionalHeader: r,
            columnKey: s
          }, void 0, !0)
        ], 10, Pe))), 256))
      ], 64))), 256)),
      a(R) && a(F) ? (d(), v(g, { key: 2 }, [
        a(D) ? (d(), v("div", We, [
          f(t.$slots, "topTotalRowNumber", {}, void 0, !0)
        ])) : b("", !0),
        (d(!0), v(g, null, k(w.value, (e) => (d(), v(g, null, [
          a(p)[e].visible ? (d(), v(g, { key: 0 }, [
            a(u) && (a(p)[e].colspan || 1) !== 1 ? (d(!0), v(g, { key: 0 }, k(a(p)[e].colspan, (r) => (d(), v("div", {
              class: "cell total top-total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              f(t.$slots, "topTotal", {
                columnKey: e,
                subcolumnKey: T(r - 1),
                values: n.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, Xe))), 256)) : (d(), v("div", {
              key: 1,
              class: "cell total top-total",
              "data-column": e
            }, [
              f(t.$slots, "topTotal", {
                columnKey: e,
                values: n.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, qe))
          ], 64)) : b("", !0)
        ], 64))), 256))
      ], 64)) : b("", !0),
      a(u) ? (d(!0), v(g, { key: 3 }, k(w.value, (e) => (d(), v(g, null, [
        a(p)[e].visible && a(p)[e].colspan ? (d(!0), v(g, { key: 0 }, k(a(p)[e].colspan, (r) => (d(), v("div", {
          class: U(["cell column column-secondary", B(e, r - 1)]),
          onClick: ge(() => Ce(e, r - 1), ["stop"]),
          "data-column": e,
          "data-subcolumn-index": r - 1
        }, [
          f(t.$slots, "secondaryColumn", {
            columnKey: e,
            subcolumnKey: T(r - 1)
          }, void 0, !0)
        ], 10, Ae))), 256)) : b("", !0)
      ], 64))), 256)) : b("", !0),
      (d(!0), v(g, null, k(n.value, (e, r) => (d(), v(g, null, [
        a(D) ? (d(), v("div", {
          key: 0,
          class: U(["cell row-number", { even: r % 2 === 0 }])
        }, [
          f(t.$slots, "rowNumber", {
            value: de(e.rowInfo)
          }, () => [
            ae(ze(de(e.rowInfo)), 1)
          ], !0)
        ], 2)) : b("", !0),
        (d(!0), v(g, null, k(w.value, (s) => (d(), v(g, null, [
          !a(u) || (a(p)[s].colspan || 1) === 1 ? (d(), v("div", {
            key: 0,
            class: U(["cell", c(e, r, s)]),
            "data-column": s,
            "data-primary-key": e[a(Q)]
          }, [
            f(t.$slots, `row-${s}`, {
              columnKey: s,
              index: r,
              row: e,
              subindex: e.rowInfo.subindex,
              value: e[s]
            }, void 0, !0)
          ], 10, Ge)) : (d(!0), v(g, { key: 1 }, k(a(p)[s].colspan, (m) => (d(), v("div", {
            class: U(["cell", c(e, r, s, m - 1)]),
            "data-column": s,
            "data-primary-key": e[a(Q)],
            "data-subcolumn-index": m - 1
          }, [
            f(t.$slots, `row-${s}`, {
              columnKey: s,
              index: r,
              row: e,
              spanIndex: a(u) ? a(u)[m - 1] : m - 1,
              subcolumnKey: T(m - 1),
              subindex: e.rowInfo.subindex,
              value: e[s] ? e[s][a(u) ? a(u)[m - 1] : m - 1] : void 0
            }, void 0, !0)
          ], 10, Je))), 256))
        ], 64))), 256))
      ], 64))), 256)),
      n.value.length === 0 && a(ue) ? (d(), v("div", {
        class: "cell odd no-data",
        key: "row-no-data",
        style: P({ "grid-column": `1 / span ${ie.value}` }),
        innerHTML: a(J)
      }, null, 12, Qe)) : b("", !0),
      a(F) ? (d(), v(g, { key: 5 }, [
        a(D) ? (d(), v("div", Ye, [
          f(t.$slots, "totalRowNumber", {}, () => [
            ae("#")
          ], !0)
        ])) : b("", !0),
        (d(!0), v(g, null, k(w.value, (e) => (d(), v(g, null, [
          a(p)[e].visible ? (d(), v(g, { key: 0 }, [
            a(u) && (a(p)[e].colspan || 1) !== 1 ? (d(!0), v(g, { key: 0 }, k(a(p)[e].colspan, (r) => (d(), v("div", {
              class: "cell total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              f(t.$slots, "total", {
                columnKey: e,
                subcolumnKey: T(r - 1),
                values: n.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, Ze))), 256)) : (d(), v("div", {
              key: 1,
              class: "cell total",
              "data-column": e
            }, [
              f(t.$slots, "total", {
                columnKey: e,
                values: n.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, Ve))
          ], 64)) : b("", !0)
        ], 64))), 256))
      ], 64)) : b("", !0)
    ], 6));
  }
});
const Te = /* @__PURE__ */ Re(xe, [["__scopeId", "data-v-b3158389"]]), Ke = /* @__PURE__ */ ke({
  __name: "Table",
  props: {
    additionalHeaders: { default: () => ({}) },
    cellClasses: { default: () => ({}) },
    colorMetrics: { type: Boolean, default: !1 },
    coloredMetrics: { default: () => [] },
    columns: {},
    comparisonColumnKeys: { default: void 0 },
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
  setup(fe) {
    const A = fe, {
      additionalHeaders: x,
      cellClasses: se,
      colorMetrics: re,
      coloredMetrics: K,
      columns: I,
      comparisonColumnKeys: p,
      detailsRows: u,
      dragColumns: ne,
      fixedColumnNumber: W,
      inversedKpis: G,
      orderBy: J,
      primaryColumn: z,
      rows: X,
      scrollPosition: Q,
      showRowNumber: ee,
      showTopTotal: ue,
      showTotal: D
    } = He(A), F = M(0), R = M(), h = M(0), H = M(0);
    _e(() => oe.disconnect());
    const _ = N(
      () => Object.keys(I.value).slice(0, W.value).reduce((n, i) => (n[i] = I.value[i], n), {})
    ), j = N(
      () => Object.keys(I.value).slice(W.value).reduce((n, i) => (n[i] = I.value[i], n), {})
    ), Y = N(
      () => Object.keys(u.value).reduce(
        (n, i) => n + i.length,
        Object.values(X.value).length
      )
    ), S = N(() => {
      var i, o, c;
      const n = {};
      return (i = R.value) != null && i.main && (n["--header-main-height"] = `${R.value.main}px`), (o = R.value) != null && o.secondary && (n["--header-secondary-height"] = `${R.value.secondary}px`), F.value && (n["--fixed-width"] = `${F.value}px`), (c = R.value) != null && c.total && (n["--header-total-height"] = `${R.value.total}px`), h.value ? (n["--total-height"] = `${h.value}px`, n["--bottom-height"] = n["--total-height"]) : (Y.value === 1 ? n["--total-scrollbar-display"] = "none" : n["--total-height"] = "20px", n["--bottom-height"] = "0px"), n;
    }), w = M(), ie = M(), q = M(!1), te = () => {
      if (q.value)
        return;
      q.value = !0, F.value = 0, R.value = void 0, h.value = 0;
      const n = (i) => {
        const o = {
          hasSecondary: !1,
          mainColumnHeight: 0,
          secondaryColumnHeight: 0,
          totalColumnHeight: 0,
          totalHeight: 0,
          width: 0
        };
        if (!i)
          return o;
        const c = [
          ...i.querySelectorAll(".cell.column-main:not(.column-main-extended)")
        ], y = [
          ...i.querySelectorAll(".cell.column-main.column-main-extended")
        ], B = i.querySelector(".cell.column-secondary"), E = i.querySelector(".cell.total"), L = [];
        if (c.length > 0 && (o.mainColumnHeight = c[0].offsetHeight, o.width = c.reduce((T, { offsetWidth: O }) => T + O, 0), L.push(o.mainColumnHeight)), B && (o.hasSecondary = !0, o.secondaryColumnHeight = B.offsetHeight, L.push(o.secondaryColumnHeight)), y.length > 0) {
          const T = y.reduce(
            (O, { offsetWidth: de }) => O + de,
            0
          );
          c.length === 0 ? (o.width = T, o.mainColumnHeight = y[0].offsetHeight, L.push(o.mainColumnHeight)) : o.width += T;
        }
        return o.totalColumnHeight = L.reduce((T, O) => T + O + 1, -1), E && (o.totalHeight = E.offsetHeight), o;
      };
      $e(() => {
        var c, y;
        const i = n((c = w.value) == null ? void 0 : c.$el), o = n((y = ie.value) == null ? void 0 : y.$el);
        if (o.hasSecondary)
          F.value = i.width, R.value = {
            main: o.mainColumnHeight,
            secondary: o.secondaryColumnHeight,
            total: Math.max(i.totalColumnHeight, o.totalColumnHeight)
          }, h.value = i.totalHeight;
        else {
          const B = Math.max(
            i.totalColumnHeight,
            o.totalColumnHeight
          );
          F.value = i.width, R.value = {
            main: B,
            total: B
          }, h.value = i.totalHeight;
        }
        q.value = !1;
      });
    }, oe = new ResizeObserver(() => te()), Z = M();
    return $e(() => {
      oe.disconnect(), Z.value && oe.observe(Z.value);
    }), ve(X, (n, i) => {
      H.value = Math.random(), i.length || te();
    }), ve(x, () => {
      H.value = Math.random();
    }), ve(I, () => {
      H.value = Math.random(), te();
    }), (n, i) => (d(), v("div", {
      class: "table-container",
      ref_key: "tableContainer",
      ref: Z
    }, [
      ce(De, {
        "onUpdate:scrollPosition": i[7] || (i[7] = (o) => n.$emit("update:scrollPosition", o)),
        scrollHeightDelta: (R.value ? R.value.total : 0) + h.value - 40,
        scrollPosition: a(Q),
        scrollWidthDelta: F.value,
        style: P(S.value),
        updateKey: H.value,
        mode: "both-top",
        optimized: ""
      }, {
        default: $(() => [
          ce(Te, {
            class: "fixed",
            ref_key: "fixedTable",
            ref: w,
            onAddColoredMetric: i[0] || (i[0] = (o) => n.$emit("addColoredMetric", o)),
            onRemoveColoredMetric: i[1] || (i[1] = (o) => n.$emit("removeColoredMetric", o)),
            "onUpdate:orderBy": i[2] || (i[2] = (o) => n.$emit("update:orderBy", o)),
            additionalHeaders: a(x),
            cellClasses: a(se),
            colorMetrics: a(re),
            coloredMetrics: a(K),
            columns: _.value,
            comparisonColumnKeys: a(p),
            detailsRows: a(u),
            dragColumns: !1,
            inversedKpis: a(G),
            orderBy: a(J),
            orderColumnType: a(I)[a(J)[0][0]].type,
            primaryColumn: a(z),
            rows: a(X),
            showNoDataMessage: !0,
            showRowNumber: a(ee),
            showTopTotal: a(ue),
            showTotal: a(D)
          }, Me({
            columnRowNumber: $(() => [
              f(n.$slots, "columnRowNumber", {}, () => [
                ae("#")
              ], !0)
            ]),
            colorizeLabel: $(({ enabled: o }) => [
              f(n.$slots, "colorizeLabel", { enabled: o }, void 0, !0)
            ]),
            column: $(({ columnKey: o, isGhost: c }) => [
              o in _.value ? f(n.$slots, "column", {
                key: 0,
                columnKey: o,
                isGhost: c
              }, void 0, !0) : b("", !0)
            ]),
            additionalHeader: $(({ additionalHeader: o, columnKey: c }) => [
              f(n.$slots, "additionalHeader", {
                additionalHeader: o,
                columnKey: c
              }, void 0, !0)
            ]),
            topTotal: $(({ columnKey: o, subcolumnKey: c, values: y }) => [
              o in _.value ? f(n.$slots, "topTotal", {
                key: 0,
                columnKey: o,
                subcolumnKey: c,
                values: y
              }, void 0, !0) : b("", !0)
            ]),
            topTotalRowNumber: $(() => [
              f(n.$slots, "topTotalRowNumber", {}, void 0, !0)
            ]),
            secondaryColumn: $(({ columnKey: o, subcolumnKey: c }) => [
              o in _.value ? f(n.$slots, "secondaryColumn", {
                key: 0,
                columnKey: o,
                subcolumnKey: c
              }, void 0, !0) : b("", !0)
            ]),
            rowNumber: $(({ value: o }) => [
              f(n.$slots, "rowNumber", { value: o }, void 0, !0)
            ]),
            totalRowNumber: $(() => [
              f(n.$slots, "totalRowNumber", {}, () => [
                ae("#")
              ], !0)
            ]),
            total: $(({ columnKey: o, subcolumnKey: c, values: y }) => [
              o in _.value ? f(n.$slots, "total", {
                key: 0,
                columnKey: o,
                subcolumnKey: c,
                values: y
              }, void 0, !0) : b("", !0)
            ]),
            _: 2
          }, [
            k(Object.keys(_.value), (o) => ({
              name: `row-${o}`,
              fn: $(({ columnKey: c, index: y, row: B, spanIndex: E, subcolumnKey: L, subindex: T, value: O }) => [
                f(n.$slots, "row-" + c, {
                  columnKey: c,
                  index: y,
                  row: B,
                  spanIndex: E,
                  subcolumnKey: L,
                  subindex: T,
                  value: O
                }, void 0, !0)
              ])
            }))
          ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "inversedKpis", "orderBy", "orderColumnType", "primaryColumn", "rows", "showRowNumber", "showTopTotal", "showTotal"]),
          ce(Te, {
            ref_key: "scrollableTable",
            ref: ie,
            onAddColoredMetric: i[3] || (i[3] = (o) => n.$emit("addColoredMetric", o)),
            "onMove:column": i[4] || (i[4] = ({ from: o, to: c }) => n.$emit("move:column", { from: o + a(W), to: c + a(W) })),
            onRemoveColoredMetric: i[5] || (i[5] = (o) => n.$emit("removeColoredMetric", o)),
            "onUpdate:orderBy": i[6] || (i[6] = (o) => n.$emit("update:orderBy", o)),
            additionalHeaders: a(x),
            cellClasses: a(se),
            colorMetrics: a(re),
            coloredMetrics: a(K),
            columns: j.value,
            comparisonColumnKeys: a(p),
            detailsRows: a(u),
            inversedKpis: a(G),
            dragColumns: a(ne),
            orderBy: a(J),
            orderColumnType: a(I)[a(J)[0][0]].type,
            primaryColumn: a(z),
            rows: a(X),
            showRowNumber: !1,
            showTopTotal: a(ue),
            showTotal: a(D),
            showNoDataMessage: !0,
            noDataMessage: n.noDataMessage,
            style: P(S.value)
          }, Me({
            colorizeLabel: $(({ enabled: o }) => [
              f(n.$slots, "colorizeLabel", { enabled: o }, void 0, !0)
            ]),
            column: $(({ columnKey: o, isGhost: c }) => [
              o in j.value ? f(n.$slots, "column", {
                key: 0,
                columnKey: o,
                isGhost: c
              }, void 0, !0) : b("", !0)
            ]),
            additionalHeader: $(({ additionalHeader: o, columnKey: c }) => [
              f(n.$slots, "additionalHeader", {
                additionalHeader: o,
                columnKey: c
              }, void 0, !0)
            ]),
            topTotal: $(({ columnKey: o, subcolumnKey: c, values: y }) => [
              o in j.value ? f(n.$slots, "topTotal", {
                key: 0,
                columnKey: o,
                subcolumnKey: c,
                values: y
              }, void 0, !0) : b("", !0)
            ]),
            secondaryColumn: $(({ columnKey: o, subcolumnKey: c }) => [
              o in j.value ? f(n.$slots, "secondaryColumn", {
                key: 0,
                columnKey: o,
                subcolumnKey: c
              }, void 0, !0) : b("", !0)
            ]),
            total: $(({ columnKey: o, subcolumnKey: c, values: y }) => [
              o in j.value ? f(n.$slots, "total", {
                key: 0,
                columnKey: o,
                subcolumnKey: c,
                values: y
              }, void 0, !0) : b("", !0)
            ]),
            _: 2
          }, [
            k(Object.keys(j.value), (o) => ({
              name: `row-${o}`,
              fn: $(({ columnKey: c, index: y, row: B, spanIndex: E, subcolumnKey: L, subindex: T, value: O }) => [
                f(n.$slots, "row-" + c, {
                  columnKey: c,
                  index: y,
                  row: B,
                  spanIndex: E,
                  subcolumnKey: L,
                  subindex: T,
                  value: O
                }, void 0, !0)
              ])
            }))
          ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "inversedKpis", "dragColumns", "orderBy", "orderColumnType", "primaryColumn", "rows", "showTopTotal", "showTotal", "noDataMessage", "style"])
        ]),
        _: 3
      }, 8, ["scrollHeightDelta", "scrollPosition", "scrollWidthDelta", "style", "updateKey"])
    ], 512));
  }
});
const st = /* @__PURE__ */ Re(Ke, [["__scopeId", "data-v-585d6e7c"]]);
export {
  Te as S,
  st as T
};
