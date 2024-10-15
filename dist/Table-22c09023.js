import { defineComponent as Re, toRefs as Oe, ref as T, computed as O, watch as ve, openBlock as d, createElementBlock as v, normalizeClass as X, unref as a, normalizeStyle as q, renderSlot as p, createTextVNode as se, createCommentVNode as b, Fragment as g, renderList as k, withModifiers as we, createVNode as ce, toDisplayString as _e, onUnmounted as Le, nextTick as ke, withCtx as $, createSlots as Be } from "vue";
import { S as Ie } from "./Scrollable-bc459f53.js";
import { D as Fe } from "./datetime-31a2b505.js";
import { I as Ee } from "./Icon-53e685d0.js";
import { _ as Se } from "./_plugin-vue_export-helper-dad06003.js";
const Ue = ["onClick", "onMousedown", "data-column"], Pe = ["onClick"], We = ["data-column"], Xe = {
  key: 0,
  class: "cell column cell-additional-header row-number"
}, qe = ["data-additionalHeader", "data-column"], Ae = {
  key: 0,
  class: "cell total top-total row-number"
}, Ge = ["data-column", "data-subcolumn-index"], Je = ["data-column"], Qe = ["onClick", "data-column", "data-subcolumn-index"], Ye = ["data-column", "data-primary-key"], Ze = ["data-column", "data-primary-key", "data-subcolumn-index"], Ve = ["innerHTML"], xe = {
  key: 0,
  class: "cell total row-number"
}, Ke = ["data-column", "data-subcolumn-index"], et = ["data-column"], tt = /* @__PURE__ */ Re({
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
    globalColoredMetrics: { type: Boolean, default: !1 },
    inversedKpis: {},
    neutralColoredMetrics: { type: Boolean, default: !1 },
    noDataMessage: { default: "&nbsp;" },
    orderBy: {},
    orderColumnType: {},
    primaryColumn: { default: "id" },
    rows: {},
    showNoDataMessage: { type: Boolean, default: !1 },
    showRowNumber: { type: Boolean, default: !0 },
    showToggleColored: { type: Boolean, default: !0 },
    showTotal: { type: Boolean, default: !0 },
    showTopTotal: { type: Boolean, default: !1 },
    useOrderBy: { type: Boolean, default: !0 }
  },
  emits: ["update:orderBy", "addColoredMetric", "removeColoredMetric", "move:column"],
  setup(fe, { emit: G }) {
    const oe = fe, {
      additionalHeaders: ue,
      cellClasses: pe,
      colorMetrics: ne,
      coloredMetrics: U,
      columns: m,
      comparisonColumnKeys: n,
      detailsRows: ie,
      dragColumns: A,
      globalColoredMetrics: me,
      inversedKpis: J,
      neutralColoredMetrics: he,
      noDataMessage: Q,
      orderBy: S,
      orderColumnType: D,
      primaryColumn: Y,
      rows: Z,
      showNoDataMessage: ge,
      showRowNumber: _,
      showTotal: le,
      showTopTotal: V,
      useOrderBy: L
    } = Oe(oe), h = T(), M = T(), P = T(0), I = T(0), N = T(0), z = T({}), w = O(
      () => Object.entries(m.value).filter(([t, { visible: l }]) => l).map(([t, l]) => t)
    ), de = O(() => {
      let t = _.value ? 1 : 0;
      return n != null && n.value ? (w.value.forEach((l) => {
        var e;
        t += ((e = m.value[l]) == null ? void 0 : e.colspan) || 1;
      }), t) : t + w.value.length;
    }), x = O(() => P.value > 3), K = O(
      () => Object.values(Z.value).reduce((t, l) => {
        for (const [e, s] of Object.entries(m.value))
          if (s.type !== "string")
            if (n != null && n.value && (s.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(l[e]).reduce((r, [f, C]) => (r[f] = parseFloat(C), r), {}));
              for (const r in t[e])
                t[e][r] > l[e][r] && (t[e][r] = parseFloat(l[e][r]));
            } else
              (!(e in t) || t[e] > l[e]) && (t[e] = parseFloat(l[e]));
        return t;
      }, {})
    ), ee = O(
      () => Object.values(Z.value).reduce((t, l) => {
        for (const [e, s] of Object.entries(m.value))
          if (s.type !== "string")
            if (n != null && n.value && (s.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(l[e]).reduce((r, [f, C]) => (r[f] = parseFloat(C), r), {}));
              for (const r in t[e])
                t[e][r] < l[e][r] && (t[e][r] = parseFloat(l[e][r]));
            } else
              (!(e in t) || t[e] < l[e]) && (t[e] = parseFloat(l[e]));
        return t;
      }, {})
    ), te = O(() => n != null && n.value ? w.value.map((t) => m.value[t].rowspan ?? 1).reduce((t, l) => t > l ? t : l) : 1), F = O(
      () => (!L.value || (D == null ? void 0 : D.value) === void 0 ? Object.values(Z.value) : Object.values(Z.value).sort((l, e) => {
        const s = (() => {
          const r = H(
            S.value[0].reduce((C, E) => C[E], l),
            D.value
          ), f = H(
            S.value[0].reduce((C, E) => C[E], e),
            D.value
          );
          return r > f ? 1 : r < f ? -1 : 0;
        })();
        return S.value[1] ? -s : s;
      })).reduce((l, e, s) => (l.push({
        ...e,
        rowInfo: {
          index: s,
          detailable: !0
        }
      }), ie.value[e[Y.value]] && l.push(
        ...Object.entries(ie.value[e[Y.value]]).map(
          ([r, f]) => ({
            ...f,
            rowInfo: {
              index: s,
              subindex: +r,
              detailable: !1
            }
          })
        )
      ), l), [])
    ), u = O(() => {
      let t = 0;
      for (const e of w.value) {
        const s = m.value[e];
        s.colspan && (n != null && n.value) ? t += s.colspan : t++;
      }
      let l = `repeat(${t}, auto)`;
      return _.value && (l = `min-content ${l}`), {
        "grid-template-columns": l
      };
    }), i = (t) => z.value[t] ? z.value[t].height : 0, o = (t, l, e, s) => {
      const r = {
        ...pe.value,
        even: l % 2 === 0
      };
      if (ne.value) {
        const f = (() => he.value ? "important-alt" : !J || !J.value ? "positive" : J.value.includes(e) ? "negative" : "positive")();
        r[`color-intensity-${t.rowInfo.detailable ? c(t[e], e, s) : "none"}`] = !0, r[`color-${f}`] = !0, s !== void 0 && n && n.value && n.value[s].includes("difference") ? r.colored = !1 : r.colored = ae(e) >= 0;
      }
      return r;
    }, c = (t, l, e) => {
      if (m.value[l].type === "string")
        return;
      let s = t || 0, r = ee.value[l] || 0, f = K.value[l] || 0;
      if (n && n.value && e !== void 0 && (s = s[n.value[e]], r = r[n.value[e]], f = f[n.value[e]]), me.value && (r = Math.max(...Object.values(ee.value)), f = Math.min(...Object.values(K.value))), r === f)
        return 0;
      const C = Math.round((s - f) * 10 / (r - f));
      return C > 10 ? 10 : C < 1 ? 0 : C;
    }, y = (t, l) => {
      const e = m.value[t], s = [t];
      l !== void 0 && (n && n.value ? s.push(n.value[l]) : s.push(l.toString()));
      const r = S.value[0] ? S.value[0].every(
        (f, C) => f === s[C]
      ) : !1;
      return {
        "column-main-extended": l === void 0 && (e.rowspan ?? 0) > 1,
        dragged: h.value ? w.value[h.value] === t : !1,
        "drag-mode": x.value,
        orderable: L.value && (!(n && n.value) || (e.colspan ?? 1) === 1 || l !== void 0),
        "ordered-by": r,
        [`order-direction-${S.value[1] ? "desc" : "asc"}`]: r
      };
    }, j = (t) => {
      const l = {};
      if (z.value[t])
        if (h.value !== void 0 && w.value[h.value] === t) {
          const { height: e, left: s, width: r } = z.value[t];
          l.left = `${Math.floor(s + N.value - I.value)}px`, l.height = `${e + 1}px`, l.width = `${Math.round(r)}px`;
        } else {
          const e = w.value.indexOf(t);
          let s = (() => {
            if (h.value === void 0 || M.value === void 0)
              return 0;
            if (h.value < e) {
              if (M.value >= e)
                return -z.value[w.value[h.value]].width;
            } else if (M.value <= e)
              return z.value[w.value[h.value]].width;
            return 0;
          })();
          const { height: r, left: f, width: C } = z.value[t];
          l.left = `${Math.floor(f + s)}px`, l.height = `${r + 1}px`, l.width = `${Math.floor(C)}px`;
        }
      return l;
    }, W = (t) => {
      const l = m.value[t], e = {};
      return n && n.value && (l.colspan && (e["grid-column-end"] = `span ${l.colspan}`), l.rowspan && (e["grid-row-end"] = `span ${l.rowspan}`)), e;
    }, B = (t) => n && n.value ? n.value[t] : void 0, H = (t, l) => {
      switch (l) {
        case "float":
        case "int":
        case "money":
        case "money_capped":
        case "percent":
        case "time":
          return parseFloat(t ?? 0);
        case "date":
          return Fe.fromISO(t).toUnixInteger();
        default:
          return t;
      }
    }, R = (t) => t.subindex === void 0 ? t.index + 1 : `${t.index + 1}.${t.subindex + 1}`, ae = (t) => U.value.findIndex((l) => l === t), Ne = (t) => ne.value && !["date", "string"].includes(m.value[t].type), ye = (t, l) => {
      if (n && n.value && m.value[t].colspan && l === void 0 || h.value !== void 0 && x.value && w.value[h.value] === t || !L.value)
        return;
      const e = [t];
      l !== void 0 && (n && n.value ? e.push(n.value[l]) : e.push(l.toString()));
      const s = e.every(
        (f, C) => f === S.value[0][C]
      ), r = (() => s ? !S.value[1] : m.value[t].type !== "string")();
      G("update:orderBy", [e, r]);
    }, ze = (t, l) => {
      A.value && (h.value = w.value.indexOf(t), M.value = h.value, P.value = 0, I.value = l.clientX, N.value = l.clientX, window.addEventListener("mousemove", $e), window.addEventListener("mouseup", Me));
    }, $e = (t) => {
      if (h.value === void 0)
        return;
      P.value++, N.value = t.clientX;
      const l = Object.entries(m.value).filter(([C, E]) => E.visible).map(([C]) => C).map((C, E) => ({
        columnIndex: parseInt(E.toString()),
        sizing: z.value[C]
      })), e = l[h.value].sizing, s = e.width / 2, f = e.left + N.value - I.value;
      M.value = (() => {
        for (const { columnIndex: C, sizing: E } of l)
          if (f + s - E.left - E.width < 0)
            return C;
        return l.length;
      })();
    }, Me = (t) => {
      if (h.value === void 0 || M.value === void 0)
        return;
      x.value && M.value !== h.value && G("move:column", {
        from: h.value,
        to: M.value
      }), M.value = void 0, P.value = 0, h.value = void 0, window.removeEventListener("mousemove", $e), window.removeEventListener("mouseup", Me);
    }, je = (t) => {
      ae(t) >= 0 ? G("removeColoredMetric", t) : G("addColoredMetric", t);
    }, re = T({}), De = (t, l) => {
      l && (re.value[t] = l);
    }, Ce = T(), be = () => {
      if (!Ce.value)
        return;
      const t = Ce.value.getBoundingClientRect();
      z.value = Object.entries(m.value).reduce(
        (l, [e, s]) => {
          if (s.visible && re.value[e]) {
            const r = re.value[e].getBoundingClientRect();
            l[e] = {
              height: r.height,
              left: r.left - t.left,
              width: r.width
            };
          }
          return l;
        },
        {}
      );
    }, Te = new ResizeObserver(() => {
      be();
    });
    return ve(
      re,
      () => {
        Te.disconnect();
        for (const t of Object.values(re.value))
          Te.observe(t);
        be();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), be(), (t, l) => (d(), v("div", {
      class: X(["table", {
        "with-secondary": !!a(n) && w.value.some((e) => (a(m)[e].colspan || 1) !== 1)
      }]),
      ref_key: "table",
      ref: Ce,
      style: q(u.value)
    }, [
      a(_) ? (d(), v("div", {
        key: 0,
        class: "cell column column-main row-number",
        style: q(te.value > 1 ? { "grid-row-end": `span ${te.value}` } : void 0)
      }, [
        p(t.$slots, "columnRowNumber", {}, () => [
          se("#")
        ], !0)
      ], 4)) : b("", !0),
      (d(!0), v(g, null, k(w.value, (e) => (d(), v(g, null, [
        a(m)[e].visible ? (d(), v("div", {
          key: 0,
          class: X(["cell column column-main", y(e)]),
          ref_for: !0,
          ref: (s) => De(e, s),
          onClick: we(() => ye(e), ["stop"]),
          onMousedown: (s) => ze(e, s),
          style: q(W(e)),
          "data-column": e
        }, [
          p(t.$slots, "column", {
            columnKey: e,
            isGhost: !1
          }, void 0, !0),
          t.showToggleColored && Ne(e) ? (d(), v("div", {
            key: 0,
            class: "toggle-colored no-spacing",
            onClick: we(() => je(e), ["stop"]),
            style: q({ top: `${i(e)}px` })
          }, [
            p(t.$slots, "colorizeLabel", {
              enabled: ae(e) >= 0
            }, void 0, !0)
          ], 12, Pe)) : b("", !0)
        ], 46, Ue)) : b("", !0)
      ], 64))), 256)),
      a(A) ? (d(!0), v(g, { key: 1 }, k(w.value, (e) => (d(), v(g, null, [
        a(m)[e].visible ? (d(), v("div", {
          key: 0,
          class: X(["cell column column-main column-ghost", y(e)]),
          style: q(j(e)),
          "data-column": e
        }, [
          p(t.$slots, "column", {
            columnKey: e,
            isGhost: !0
          }, void 0, !0)
        ], 14, We)) : b("", !0)
      ], 64))), 256)) : b("", !0),
      (d(!0), v(g, null, k(a(ue), (e, s) => (d(), v(g, null, [
        a(_) ? (d(), v("div", Xe, [
          ce(Ee, {
            value: e.icon
          }, null, 8, ["value"])
        ])) : b("", !0),
        (d(!0), v(g, null, k(w.value, (r) => (d(), v("div", {
          class: X(["cell column cell-additional-header", [`cell-additional-header-${r}`]]),
          "data-additionalHeader": s,
          "data-column": r
        }, [
          p(t.$slots, "additionalHeader", {
            additionalHeader: s,
            columnKey: r
          }, void 0, !0)
        ], 10, qe))), 256))
      ], 64))), 256)),
      a(V) && a(le) ? (d(), v(g, { key: 2 }, [
        a(_) ? (d(), v("div", Ae, [
          p(t.$slots, "topTotalRowNumber", {}, void 0, !0)
        ])) : b("", !0),
        (d(!0), v(g, null, k(w.value, (e) => (d(), v(g, null, [
          a(m)[e].visible ? (d(), v(g, { key: 0 }, [
            a(n) && (a(m)[e].colspan || 1) !== 1 ? (d(!0), v(g, { key: 0 }, k(a(m)[e].colspan, (s) => (d(), v("div", {
              class: "cell total top-total",
              "data-column": e,
              "data-subcolumn-index": s - 1
            }, [
              p(t.$slots, "topTotal", {
                columnKey: e,
                subcolumnKey: B(s - 1),
                values: F.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, Ge))), 256)) : (d(), v("div", {
              key: 1,
              class: "cell total top-total",
              "data-column": e
            }, [
              p(t.$slots, "topTotal", {
                columnKey: e,
                values: F.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, Je))
          ], 64)) : b("", !0)
        ], 64))), 256))
      ], 64)) : b("", !0),
      a(n) ? (d(!0), v(g, { key: 3 }, k(w.value, (e) => (d(), v(g, null, [
        a(m)[e].visible && a(m)[e].colspan ? (d(!0), v(g, { key: 0 }, k(a(m)[e].colspan, (s) => (d(), v("div", {
          class: X(["cell column column-secondary", y(e, s - 1)]),
          onClick: we(() => ye(e, s - 1), ["stop"]),
          "data-column": e,
          "data-subcolumn-index": s - 1
        }, [
          p(t.$slots, "secondaryColumn", {
            columnKey: e,
            subcolumnKey: B(s - 1)
          }, void 0, !0)
        ], 10, Qe))), 256)) : b("", !0)
      ], 64))), 256)) : b("", !0),
      (d(!0), v(g, null, k(F.value, (e, s) => (d(), v(g, null, [
        a(_) ? (d(), v("div", {
          key: 0,
          class: X(["cell row-number", { even: s % 2 === 0 }])
        }, [
          p(t.$slots, "rowNumber", {
            value: R(e.rowInfo)
          }, () => [
            se(_e(R(e.rowInfo)), 1)
          ], !0)
        ], 2)) : b("", !0),
        (d(!0), v(g, null, k(w.value, (r) => (d(), v(g, null, [
          !a(n) || (a(m)[r].colspan || 1) === 1 ? (d(), v("div", {
            key: 0,
            class: X(["cell", o(e, s, r)]),
            "data-column": r,
            "data-primary-key": e[a(Y)]
          }, [
            p(t.$slots, `row-${r}`, {
              columnKey: r,
              index: s,
              row: e,
              subindex: e.rowInfo.subindex,
              value: e[r]
            }, void 0, !0)
          ], 10, Ye)) : (d(!0), v(g, { key: 1 }, k(a(m)[r].colspan, (f) => (d(), v("div", {
            class: X(["cell", o(e, s, r, f - 1)]),
            "data-column": r,
            "data-primary-key": e[a(Y)],
            "data-subcolumn-index": f - 1
          }, [
            p(t.$slots, `row-${r}`, {
              columnKey: r,
              index: s,
              row: e,
              spanIndex: a(n) ? a(n)[f - 1] : f - 1,
              subcolumnKey: B(f - 1),
              subindex: e.rowInfo.subindex,
              value: e[r] ? e[r][a(n) ? a(n)[f - 1] : f - 1] : void 0
            }, void 0, !0)
          ], 10, Ze))), 256))
        ], 64))), 256))
      ], 64))), 256)),
      F.value.length === 0 && a(ge) ? (d(), v("div", {
        class: "cell odd no-data",
        key: "row-no-data",
        style: q({ "grid-column": `1 / span ${de.value}` }),
        innerHTML: a(Q)
      }, null, 12, Ve)) : b("", !0),
      a(le) ? (d(), v(g, { key: 5 }, [
        a(_) ? (d(), v("div", xe, [
          p(t.$slots, "totalRowNumber", {}, () => [
            se("#")
          ], !0)
        ])) : b("", !0),
        (d(!0), v(g, null, k(w.value, (e) => (d(), v(g, null, [
          a(m)[e].visible ? (d(), v(g, { key: 0 }, [
            a(n) && (a(m)[e].colspan || 1) !== 1 ? (d(!0), v(g, { key: 0 }, k(a(m)[e].colspan, (s) => (d(), v("div", {
              class: "cell total",
              "data-column": e,
              "data-subcolumn-index": s - 1
            }, [
              p(t.$slots, "total", {
                columnKey: e,
                subcolumnKey: B(s - 1),
                values: F.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, Ke))), 256)) : (d(), v("div", {
              key: 1,
              class: "cell total",
              "data-column": e
            }, [
              p(t.$slots, "total", {
                columnKey: e,
                values: F.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, et))
          ], 64)) : b("", !0)
        ], 64))), 256))
      ], 64)) : b("", !0)
    ], 6));
  }
});
const He = /* @__PURE__ */ Se(tt, [["__scopeId", "data-v-df3f729c"]]), ot = /* @__PURE__ */ Re({
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
    globalColoredMetrics: { type: Boolean, default: !1 },
    inversedKpis: { default: () => [] },
    neutralColoredMetrics: { type: Boolean, default: !1 },
    noDataMessage: {},
    orderBy: {},
    primaryColumn: { default: "id" },
    rows: {},
    scrollPosition: { default: () => ({ left: 0, top: 0 }) },
    showRowNumber: { type: Boolean, default: !0 },
    showToggleColored: { type: Boolean, default: !0 },
    showTopTotal: { type: Boolean, default: !1 },
    showTotal: { type: Boolean, default: !0 },
    useOrderBy: { type: Boolean, default: !0 }
  },
  setup(fe) {
    const G = fe, {
      additionalHeaders: oe,
      cellClasses: ue,
      colorMetrics: pe,
      coloredMetrics: ne,
      columns: U,
      comparisonColumnKeys: m,
      detailsRows: n,
      dragColumns: ie,
      fixedColumnNumber: A,
      globalColoredMetrics: me,
      inversedKpis: J,
      neutralColoredMetrics: he,
      orderBy: Q,
      primaryColumn: S,
      rows: D,
      scrollPosition: Y,
      showRowNumber: Z,
      showToggleColored: ge,
      showTopTotal: _,
      showTotal: le,
      useOrderBy: V
    } = Oe(G), L = T(0), h = T(), M = T(0), P = T(0);
    Le(() => te.disconnect());
    const I = O(
      () => Object.keys(U.value).slice(0, A.value).reduce((u, i) => (u[i] = U.value[i], u), {})
    ), N = O(
      () => Object.keys(U.value).slice(A.value).reduce((u, i) => (u[i] = U.value[i], u), {})
    ), z = O(
      () => Object.keys(n.value).reduce(
        (u, i) => u + i.length,
        Object.values(D.value).length
      )
    ), w = O(() => {
      var i, o, c;
      const u = {};
      return (i = h.value) != null && i.main && (u["--header-main-height"] = `${h.value.main}px`), (o = h.value) != null && o.secondary && (u["--header-secondary-height"] = `${h.value.secondary}px`), L.value && (u["--fixed-width"] = `${L.value}px`), (c = h.value) != null && c.total && (u["--header-total-height"] = `${h.value.total}px`), M.value ? (u["--total-height"] = `${M.value}px`, u["--bottom-height"] = u["--total-height"]) : (z.value === 1 ? u["--total-scrollbar-display"] = "none" : u["--total-height"] = "20px", u["--bottom-height"] = "0px"), u;
    }), de = T(), x = T(), K = T(!1), ee = () => {
      if (K.value)
        return;
      K.value = !0, L.value = 0, h.value = void 0, M.value = 0;
      const u = (i) => {
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
        ], j = i.querySelector(".cell.column-secondary"), W = i.querySelector(".cell.total"), B = [];
        if (c.length > 0 && (o.mainColumnHeight = c[0].offsetHeight, o.width = c.reduce((H, { offsetWidth: R }) => H + R, 0), B.push(o.mainColumnHeight)), j && (o.hasSecondary = !0, o.secondaryColumnHeight = j.offsetHeight, B.push(o.secondaryColumnHeight)), y.length > 0) {
          const H = y.reduce(
            (R, { offsetWidth: ae }) => R + ae,
            0
          );
          c.length === 0 ? (o.width = H, o.mainColumnHeight = y[0].offsetHeight, B.push(o.mainColumnHeight)) : o.width += H;
        }
        return o.totalColumnHeight = B.reduce((H, R) => H + R + 1, -1), W && (o.totalHeight = W.offsetHeight), o;
      };
      ke(() => {
        var c, y;
        const i = u((c = de.value) == null ? void 0 : c.$el), o = u((y = x.value) == null ? void 0 : y.$el);
        if (o.hasSecondary)
          L.value = i.width, h.value = {
            main: o.mainColumnHeight,
            secondary: o.secondaryColumnHeight,
            total: Math.max(i.totalColumnHeight, o.totalColumnHeight)
          }, M.value = i.totalHeight;
        else {
          const j = Math.max(
            i.totalColumnHeight,
            o.totalColumnHeight
          );
          L.value = i.width, h.value = {
            main: j,
            total: j
          }, M.value = i.totalHeight;
        }
        K.value = !1;
      });
    }, te = new ResizeObserver(() => ee()), F = T();
    return ke(() => {
      te.disconnect(), F.value && te.observe(F.value);
    }), ve(D, (u, i) => {
      P.value = Math.random(), i.length || ee();
    }), ve(oe, () => {
      P.value = Math.random();
    }), ve(U, () => {
      P.value = Math.random(), ee();
    }), (u, i) => (d(), v("div", {
      class: "table-container",
      ref_key: "tableContainer",
      ref: F
    }, [
      ce(Ie, {
        "onUpdate:scrollPosition": i[7] || (i[7] = (o) => u.$emit("update:scrollPosition", o)),
        scrollHeightDelta: (h.value ? h.value.total : 0) + M.value - 40,
        scrollPosition: a(Y),
        scrollWidthDelta: L.value,
        style: q(w.value),
        updateKey: P.value,
        mode: "both-top",
        optimized: ""
      }, {
        default: $(() => [
          ce(He, {
            class: "fixed",
            ref_key: "fixedTable",
            ref: de,
            onAddColoredMetric: i[0] || (i[0] = (o) => u.$emit("addColoredMetric", o)),
            onRemoveColoredMetric: i[1] || (i[1] = (o) => u.$emit("removeColoredMetric", o)),
            "onUpdate:orderBy": i[2] || (i[2] = (o) => u.$emit("update:orderBy", o)),
            additionalHeaders: a(oe),
            cellClasses: a(ue),
            columns: I.value,
            comparisonColumnKeys: a(m),
            detailsRows: a(n),
            dragColumns: !1,
            inversedKpis: a(J),
            orderBy: a(Q),
            orderColumnType: a(V) ? a(U)[a(Q)[0][0]].type : void 0,
            primaryColumn: a(S),
            rows: a(D),
            showNoDataMessage: !0,
            showRowNumber: a(Z),
            showTopTotal: a(_),
            showTotal: a(le),
            useOrderBy: a(V)
          }, Be({
            columnRowNumber: $(() => [
              p(u.$slots, "columnRowNumber", {}, () => [
                se("#")
              ], !0)
            ]),
            colorizeLabel: $(({ enabled: o }) => [
              p(u.$slots, "colorizeLabel", { enabled: o }, void 0, !0)
            ]),
            column: $(({ columnKey: o, isGhost: c }) => [
              o in I.value ? p(u.$slots, "column", {
                key: 0,
                columnKey: o,
                isGhost: c
              }, void 0, !0) : b("", !0)
            ]),
            additionalHeader: $(({ additionalHeader: o, columnKey: c }) => [
              p(u.$slots, "additionalHeader", {
                additionalHeader: o,
                columnKey: c
              }, void 0, !0)
            ]),
            topTotal: $(({ columnKey: o, subcolumnKey: c, values: y }) => [
              o in I.value ? p(u.$slots, "topTotal", {
                key: 0,
                columnKey: o,
                subcolumnKey: c,
                values: y
              }, void 0, !0) : b("", !0)
            ]),
            topTotalRowNumber: $(() => [
              p(u.$slots, "topTotalRowNumber", {}, void 0, !0)
            ]),
            secondaryColumn: $(({ columnKey: o, subcolumnKey: c }) => [
              o in I.value ? p(u.$slots, "secondaryColumn", {
                key: 0,
                columnKey: o,
                subcolumnKey: c
              }, void 0, !0) : b("", !0)
            ]),
            rowNumber: $(({ value: o }) => [
              p(u.$slots, "rowNumber", { value: o }, void 0, !0)
            ]),
            totalRowNumber: $(() => [
              p(u.$slots, "totalRowNumber", {}, () => [
                se("#")
              ], !0)
            ]),
            total: $(({ columnKey: o, subcolumnKey: c, values: y }) => [
              o in I.value ? p(u.$slots, "total", {
                key: 0,
                columnKey: o,
                subcolumnKey: c,
                values: y
              }, void 0, !0) : b("", !0)
            ]),
            _: 2
          }, [
            k(Object.keys(I.value), (o) => ({
              name: `row-${o}`,
              fn: $(({ columnKey: c, index: y, row: j, spanIndex: W, subcolumnKey: B, subindex: H, value: R }) => [
                p(u.$slots, "row-" + c, {
                  columnKey: c,
                  index: y,
                  row: j,
                  spanIndex: W,
                  subcolumnKey: B,
                  subindex: H,
                  value: R
                }, void 0, !0)
              ])
            }))
          ]), 1032, ["additionalHeaders", "cellClasses", "columns", "comparisonColumnKeys", "detailsRows", "inversedKpis", "orderBy", "orderColumnType", "primaryColumn", "rows", "showRowNumber", "showTopTotal", "showTotal", "useOrderBy"]),
          ce(He, {
            ref_key: "scrollableTable",
            ref: x,
            onAddColoredMetric: i[3] || (i[3] = (o) => u.$emit("addColoredMetric", o)),
            "onMove:column": i[4] || (i[4] = ({ from: o, to: c }) => u.$emit("move:column", { from: o + a(A), to: c + a(A) })),
            onRemoveColoredMetric: i[5] || (i[5] = (o) => u.$emit("removeColoredMetric", o)),
            "onUpdate:orderBy": i[6] || (i[6] = (o) => u.$emit("update:orderBy", o)),
            additionalHeaders: a(oe),
            cellClasses: a(ue),
            colorMetrics: a(pe),
            coloredMetrics: a(ne),
            columns: N.value,
            comparisonColumnKeys: a(m),
            detailsRows: a(n),
            dragColumns: a(ie),
            globalColoredMetrics: a(me),
            inversedKpis: a(J),
            neutralColoredMetrics: a(he),
            noDataMessage: u.noDataMessage,
            orderBy: a(Q),
            orderColumnType: a(V) ? a(U)[a(Q)[0][0]].type : void 0,
            primaryColumn: a(S),
            rows: a(D),
            showRowNumber: !1,
            showToggleColored: a(ge),
            showTopTotal: a(_),
            showTotal: a(le),
            showNoDataMessage: !0,
            style: q(w.value),
            useOrderBy: a(V)
          }, Be({
            colorizeLabel: $(({ enabled: o }) => [
              p(u.$slots, "colorizeLabel", { enabled: o }, void 0, !0)
            ]),
            column: $(({ columnKey: o, isGhost: c }) => [
              o in N.value ? p(u.$slots, "column", {
                key: 0,
                columnKey: o,
                isGhost: c
              }, void 0, !0) : b("", !0)
            ]),
            additionalHeader: $(({ additionalHeader: o, columnKey: c }) => [
              p(u.$slots, "additionalHeader", {
                additionalHeader: o,
                columnKey: c
              }, void 0, !0)
            ]),
            topTotal: $(({ columnKey: o, subcolumnKey: c, values: y }) => [
              o in N.value ? p(u.$slots, "topTotal", {
                key: 0,
                columnKey: o,
                subcolumnKey: c,
                values: y
              }, void 0, !0) : b("", !0)
            ]),
            secondaryColumn: $(({ columnKey: o, subcolumnKey: c }) => [
              o in N.value ? p(u.$slots, "secondaryColumn", {
                key: 0,
                columnKey: o,
                subcolumnKey: c
              }, void 0, !0) : b("", !0)
            ]),
            total: $(({ columnKey: o, subcolumnKey: c, values: y }) => [
              o in N.value ? p(u.$slots, "total", {
                key: 0,
                columnKey: o,
                subcolumnKey: c,
                values: y
              }, void 0, !0) : b("", !0)
            ]),
            _: 2
          }, [
            k(Object.keys(N.value), (o) => ({
              name: `row-${o}`,
              fn: $(({ columnKey: c, index: y, row: j, spanIndex: W, subcolumnKey: B, subindex: H, value: R }) => [
                p(u.$slots, "row-" + c, {
                  columnKey: c,
                  index: y,
                  row: j,
                  spanIndex: W,
                  subcolumnKey: B,
                  subindex: H,
                  value: R
                }, void 0, !0)
              ])
            }))
          ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "dragColumns", "globalColoredMetrics", "inversedKpis", "neutralColoredMetrics", "noDataMessage", "orderBy", "orderColumnType", "primaryColumn", "rows", "showToggleColored", "showTopTotal", "showTotal", "style", "useOrderBy"])
        ]),
        _: 3
      }, 8, ["scrollHeightDelta", "scrollPosition", "scrollWidthDelta", "style", "updateKey"])
    ], 512));
  }
});
const nt = /* @__PURE__ */ Se(ot, [["__scopeId", "data-v-8d869631"]]);
export {
  He as S,
  nt as T
};
