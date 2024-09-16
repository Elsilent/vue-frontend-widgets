import { defineComponent as ae, toRefs as Le, ref as N, computed as H, watch as me, openBlock as u, createElementBlock as d, normalizeClass as x, unref as o, normalizeStyle as te, renderSlot as v, createTextVNode as ie, createCommentVNode as g, Fragment as C, renderList as L, withModifiers as we, createVNode as he, toDisplayString as Te, onUnmounted as Fe, nextTick as He, withCtx as $, createSlots as Re, provide as Be, inject as We, onMounted as qe, onBeforeUnmount as Xe, createBlock as De, mergeProps as Ge } from "vue";
import { S as Je } from "./Scrollable-055852b4.js";
import { D as Ye } from "./datetime-31a2b505.js";
import { I as Qe } from "./Icon-53e685d0.js";
import { _ as je } from "./_plugin-vue_export-helper-dad06003.js";
import { _ as ke, c as ge, e as le, i as Ve, u as Ze, g as xe, h as Ke, w as et } from "./base-9150843e.js";
import { u as Me, a as Q, i as tt, E as ot } from "./popper-b0eadffa.js";
const lt = ["onClick", "onMousedown", "data-column"], at = ["onClick"], rt = ["data-column"], st = {
  key: 0,
  class: "cell column cell-additional-header row-number"
}, nt = ["data-additionalHeader", "data-column"], it = {
  key: 0,
  class: "cell total top-total row-number"
}, ut = ["data-column", "data-subcolumn-index"], dt = ["data-column"], ct = ["onClick", "data-column", "data-subcolumn-index"], pt = ["data-column", "data-primary-key"], vt = ["data-column", "data-primary-key", "data-subcolumn-index"], ft = ["innerHTML"], mt = {
  key: 0,
  class: "cell total row-number"
}, ht = ["data-column", "data-subcolumn-index"], gt = ["data-column"], bt = /* @__PURE__ */ ae({
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
  setup(M, { emit: y }) {
    const k = M, {
      additionalHeaders: S,
      cellClasses: F,
      colorMetrics: D,
      coloredMetrics: R,
      columns: m,
      comparisonColumnKeys: i,
      detailsRows: W,
      dragColumns: B,
      inversedKpis: O,
      noDataMessage: V,
      orderBy: E,
      orderColumnType: q,
      primaryColumn: K,
      rows: f,
      showNoDataMessage: ue,
      showRowNumber: G,
      showTotal: Z,
      showTopTotal: z
    } = Le(k), b = N(), j = N(), X = N(0), J = N(0), re = N(0), A = N({}), T = H(
      () => Object.entries(m.value).filter(([t, { visible: a }]) => a).map(([t, a]) => t)
    ), ve = H(
      () => T.value.length + (G.value ? 1 : 0)
    ), oe = H(() => X.value > 3), de = H(
      () => Object.values(f.value).reduce((t, a) => {
        for (const [e, s] of Object.entries(m.value))
          if (s.type !== "string")
            if (i != null && i.value && (s.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(a[e]).reduce((r, [h, w]) => (r[h] = parseFloat(w), r), {}));
              for (const r in t[e])
                t[e][r] > a[e][r] && (t[e][r] = parseFloat(a[e][r]));
            } else
              (!(e in t) || t[e] > a[e]) && (t[e] = parseFloat(a[e]));
        return t;
      }, {})
    ), ce = H(
      () => Object.values(f.value).reduce((t, a) => {
        for (const [e, s] of Object.entries(m.value))
          if (s.type !== "string")
            if (i != null && i.value && (s.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(a[e]).reduce((r, [h, w]) => (r[h] = parseFloat(w), r), {}));
              for (const r in t[e])
                t[e][r] < a[e][r] && (t[e][r] = parseFloat(a[e][r]));
            } else
              (!(e in t) || t[e] < a[e]) && (t[e] = parseFloat(a[e]));
        return t;
      }, {})
    ), se = H(() => i != null && i.value ? T.value.map((t) => m.value[t].rowspan ?? 1).reduce((t, a) => t > a ? t : a) : 1), n = H(
      () => Object.values(f.value).sort((t, a) => {
        const e = (() => {
          const s = U(
            E.value[0].reduce((h, w) => h[w], t),
            q.value
          ), r = U(
            E.value[0].reduce((h, w) => h[w], a),
            q.value
          );
          return s > r ? 1 : s < r ? -1 : 0;
        })();
        return E.value[1] ? -e : e;
      }).reduce((t, a, e) => (t.push({
        ...a,
        rowInfo: {
          index: e,
          detailable: !0
        }
      }), W.value[a[K.value]] && t.push(
        ...Object.entries(W.value[a[K.value]]).map(
          ([s, r]) => ({
            ...r,
            rowInfo: {
              index: e,
              subindex: +s,
              detailable: !1
            }
          })
        )
      ), t), [])
    ), c = H(() => {
      let t = 0;
      for (const e of T.value) {
        const s = m.value[e];
        s.colspan && (i != null && i.value) ? t += s.colspan : t++;
      }
      let a = `repeat(${t}, auto)`;
      return G.value && (a = `min-content ${a}`), {
        "grid-template-columns": a
      };
    }), l = (t) => A.value[t] ? A.value[t].height : 0, p = (t, a, e, s) => {
      const r = {
        ...F.value,
        even: a % 2 === 0
      };
      if (D.value) {
        const h = (() => !O || !O.value ? "positive" : O.value.includes(e) ? "negative" : "positive")();
        r[`color-intensity-${t.rowInfo.detailable ? _(t[e], e, s) : "none"}`] = !0, r[`color-${h}`] = !0, s !== void 0 && i && i.value && i.value[s].includes("difference") ? r.colored = !1 : r.colored = be(e) >= 0;
      }
      return r;
    }, _ = (t, a, e) => {
      if (m.value[a].type === "string")
        return;
      let s = t || 0, r = ce.value[a] || 0, h = de.value[a] || 0;
      if (i && i.value && e !== void 0 && (s = s[i.value[e]], r = r[i.value[e]], h = h[i.value[e]]), r === h)
        return 0;
      const w = Math.round((s - h) * 10 / (r - h));
      return w > 10 ? 10 : w < 1 ? 0 : w;
    }, P = (t, a) => {
      const e = m.value[t], s = [t];
      a !== void 0 && (i && i.value ? s.push(i.value[a]) : s.push(a.toString()));
      const r = E.value[0] ? E.value[0].every(
        (h, w) => h === s[w]
      ) : !1;
      return {
        "column-main-extended": a === void 0 && (e.rowspan ?? 0) > 1,
        dragged: b.value ? T.value[b.value] === t : !1,
        "drag-mode": oe.value,
        orderable: !(i && i.value) || (e.colspan ?? 1) === 1 || a !== void 0,
        "ordered-by": r,
        [`order-direction-${E.value[1] ? "desc" : "asc"}`]: r
      };
    }, ee = (t) => {
      const a = {};
      if (A.value[t])
        if (b.value !== void 0 && T.value[b.value] === t) {
          const { height: e, left: s, width: r } = A.value[t];
          a.left = `${Math.floor(s + re.value - J.value)}px`, a.height = `${e + 1}px`, a.width = `${Math.round(r)}px`;
        } else {
          const e = T.value.indexOf(t);
          let s = (() => {
            if (b.value === void 0 || j.value === void 0)
              return 0;
            if (b.value < e) {
              if (j.value >= e)
                return -A.value[T.value[b.value]].width;
            } else if (j.value <= e)
              return A.value[T.value[b.value]].width;
            return 0;
          })();
          const { height: r, left: h, width: w } = A.value[t];
          a.left = `${Math.floor(h + s)}px`, a.height = `${r + 1}px`, a.width = `${Math.floor(w)}px`;
        }
      return a;
    }, Y = (t) => {
      const a = m.value[t], e = {};
      return i && i.value && (a.colspan && (e["grid-column-end"] = `span ${a.colspan}`), a.rowspan && (e["grid-row-end"] = `span ${a.rowspan}`)), e;
    }, I = (t) => i && i.value ? i.value[t] : void 0, U = (t, a) => {
      switch (a) {
        case "float":
        case "int":
        case "money":
        case "money_capped":
        case "percent":
        case "time":
          return parseFloat(t ?? 0);
        case "date":
          return Ye.fromISO(t).toUnixInteger();
        default:
          return t;
      }
    }, fe = (t) => t.subindex === void 0 ? t.index + 1 : `${t.index + 1}.${t.subindex + 1}`, be = (t) => R.value.findIndex((a) => a === t), ze = (t) => D.value && !["date", "string"].includes(m.value[t].type), Se = (t, a) => {
      if (i && i.value && m.value[t].colspan && a === void 0 || b.value !== void 0 && oe.value && T.value[b.value] === t)
        return;
      const e = [t];
      a !== void 0 && (i && i.value ? e.push(i.value[a]) : e.push(a.toString()));
      const s = e.every(
        (h, w) => h === E.value[0][w]
      ), r = (() => s ? !E.value[1] : m.value[t].type !== "string")();
      y("update:orderBy", [e, r]);
    }, Pe = (t, a) => {
      B.value && (b.value = T.value.indexOf(t), j.value = b.value, X.value = 0, J.value = a.clientX, re.value = a.clientX, window.addEventListener("mousemove", _e), window.addEventListener("mouseup", Ne));
    }, _e = (t) => {
      if (b.value === void 0)
        return;
      X.value++, re.value = t.clientX;
      const a = Object.entries(m.value).filter(([w, ne]) => ne.visible).map(([w]) => w).map((w, ne) => ({
        columnIndex: parseInt(ne.toString()),
        sizing: A.value[w]
      })), e = a[b.value].sizing, s = e.width / 2, h = e.left + re.value - J.value;
      j.value = (() => {
        for (const { columnIndex: w, sizing: ne } of a)
          if (h + s - ne.left - ne.width < 0)
            return w;
        return a.length;
      })();
    }, Ne = (t) => {
      if (b.value === void 0 || j.value === void 0)
        return;
      oe.value && j.value !== b.value && y("move:column", {
        from: b.value,
        to: j.value
      }), j.value = void 0, X.value = 0, b.value = void 0, window.removeEventListener("mousemove", _e), window.removeEventListener("mouseup", Ne);
    }, Ae = (t) => {
      be(t) >= 0 ? y("removeColoredMetric", t) : y("addColoredMetric", t);
    }, pe = N({}), Ue = (t, a) => {
      a && (pe.value[t] = a);
    }, Ce = N(), ye = () => {
      if (!Ce.value)
        return;
      const t = Ce.value.getBoundingClientRect();
      A.value = Object.entries(m.value).reduce(
        (a, [e, s]) => {
          if (s.visible && pe.value[e]) {
            const r = pe.value[e].getBoundingClientRect();
            a[e] = {
              height: r.height,
              left: r.left - t.left,
              width: r.width
            };
          }
          return a;
        },
        {}
      );
    }, Oe = new ResizeObserver(() => {
      ye();
    });
    return me(
      pe,
      () => {
        Oe.disconnect();
        for (const t of Object.values(pe.value))
          Oe.observe(t);
        ye();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), ye(), (t, a) => (u(), d("div", {
      class: x(["table", {
        "with-secondary": !!o(i) && T.value.some((e) => (o(m)[e].colspan || 1) !== 1)
      }]),
      ref_key: "table",
      ref: Ce,
      style: te(c.value)
    }, [
      o(G) ? (u(), d("div", {
        key: 0,
        class: "cell column column-main row-number",
        style: te(se.value > 1 ? { "grid-row-end": `span ${se.value}` } : void 0)
      }, [
        v(t.$slots, "columnRowNumber", {}, () => [
          ie("#")
        ], !0)
      ], 4)) : g("", !0),
      (u(!0), d(C, null, L(T.value, (e) => (u(), d(C, null, [
        o(m)[e].visible ? (u(), d("div", {
          key: 0,
          class: x(["cell column column-main", P(e)]),
          ref_for: !0,
          ref: (s) => Ue(e, s),
          onClick: we(() => Se(e), ["stop"]),
          onMousedown: (s) => Pe(e, s),
          style: te(Y(e)),
          "data-column": e
        }, [
          v(t.$slots, "column", {
            columnKey: e,
            isGhost: !1
          }, void 0, !0),
          ze(e) ? (u(), d("div", {
            key: 0,
            class: "toggle-colored no-spacing",
            onClick: we(() => Ae(e), ["stop"]),
            style: te({ top: `${l(e)}px` })
          }, [
            v(t.$slots, "colorizeLabel", {
              enabled: be(e) >= 0
            }, void 0, !0)
          ], 12, at)) : g("", !0)
        ], 46, lt)) : g("", !0)
      ], 64))), 256)),
      o(B) ? (u(!0), d(C, { key: 1 }, L(T.value, (e) => (u(), d(C, null, [
        o(m)[e].visible ? (u(), d("div", {
          key: 0,
          class: x(["cell column column-main column-ghost", P(e)]),
          style: te(ee(e)),
          "data-column": e
        }, [
          v(t.$slots, "column", {
            columnKey: e,
            isGhost: !0
          }, void 0, !0)
        ], 14, rt)) : g("", !0)
      ], 64))), 256)) : g("", !0),
      (u(!0), d(C, null, L(o(S), (e, s) => (u(), d(C, null, [
        o(G) ? (u(), d("div", st, [
          he(Qe, {
            value: e.icon
          }, null, 8, ["value"])
        ])) : g("", !0),
        (u(!0), d(C, null, L(T.value, (r) => (u(), d("div", {
          class: x(["cell column cell-additional-header", [`cell-additional-header-${r}`]]),
          "data-additionalHeader": s,
          "data-column": r
        }, [
          v(t.$slots, "additionalHeader", {
            additionalHeader: s,
            columnKey: r
          }, void 0, !0)
        ], 10, nt))), 256))
      ], 64))), 256)),
      o(z) && o(Z) ? (u(), d(C, { key: 2 }, [
        o(G) ? (u(), d("div", it, [
          v(t.$slots, "topTotalRowNumber", {}, void 0, !0)
        ])) : g("", !0),
        (u(!0), d(C, null, L(T.value, (e) => (u(), d(C, null, [
          o(m)[e].visible ? (u(), d(C, { key: 0 }, [
            o(i) && (o(m)[e].colspan || 1) !== 1 ? (u(!0), d(C, { key: 0 }, L(o(m)[e].colspan, (s) => (u(), d("div", {
              class: "cell total top-total",
              "data-column": e,
              "data-subcolumn-index": s - 1
            }, [
              v(t.$slots, "topTotal", {
                columnKey: e,
                subcolumnKey: I(s - 1),
                values: n.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, ut))), 256)) : (u(), d("div", {
              key: 1,
              class: "cell total top-total",
              "data-column": e
            }, [
              v(t.$slots, "topTotal", {
                columnKey: e,
                values: n.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, dt))
          ], 64)) : g("", !0)
        ], 64))), 256))
      ], 64)) : g("", !0),
      o(i) ? (u(!0), d(C, { key: 3 }, L(T.value, (e) => (u(), d(C, null, [
        o(m)[e].visible && o(m)[e].colspan ? (u(!0), d(C, { key: 0 }, L(o(m)[e].colspan, (s) => (u(), d("div", {
          class: x(["cell column column-secondary", P(e, s - 1)]),
          onClick: we(() => Se(e, s - 1), ["stop"]),
          "data-column": e,
          "data-subcolumn-index": s - 1
        }, [
          v(t.$slots, "secondaryColumn", {
            columnKey: e,
            subcolumnKey: I(s - 1)
          }, void 0, !0)
        ], 10, ct))), 256)) : g("", !0)
      ], 64))), 256)) : g("", !0),
      (u(!0), d(C, null, L(n.value, (e, s) => (u(), d(C, null, [
        o(G) ? (u(), d("div", {
          key: 0,
          class: x(["cell row-number", { even: s % 2 === 0 }])
        }, [
          v(t.$slots, "rowNumber", {
            value: fe(e.rowInfo)
          }, () => [
            ie(Te(fe(e.rowInfo)), 1)
          ], !0)
        ], 2)) : g("", !0),
        (u(!0), d(C, null, L(T.value, (r) => (u(), d(C, null, [
          !o(i) || (o(m)[r].colspan || 1) === 1 ? (u(), d("div", {
            key: 0,
            class: x(["cell", p(e, s, r)]),
            "data-column": r,
            "data-primary-key": e[o(K)]
          }, [
            v(t.$slots, `row-${r}`, {
              columnKey: r,
              index: s,
              row: e,
              subindex: e.rowInfo.subindex,
              value: e[r]
            }, void 0, !0)
          ], 10, pt)) : (u(!0), d(C, { key: 1 }, L(o(m)[r].colspan, (h) => (u(), d("div", {
            class: x(["cell", p(e, s, r, h - 1)]),
            "data-column": r,
            "data-primary-key": e[o(K)],
            "data-subcolumn-index": h - 1
          }, [
            v(t.$slots, `row-${r}`, {
              columnKey: r,
              index: s,
              row: e,
              spanIndex: o(i) ? o(i)[h - 1] : h - 1,
              subcolumnKey: I(h - 1),
              subindex: e.rowInfo.subindex,
              value: e[r] ? e[r][o(i) ? o(i)[h - 1] : h - 1] : void 0
            }, void 0, !0)
          ], 10, vt))), 256))
        ], 64))), 256))
      ], 64))), 256)),
      n.value.length === 0 && o(ue) ? (u(), d("div", {
        class: "cell odd no-data",
        key: "row-no-data",
        style: te({ "grid-column": `1 / span ${ve.value}` }),
        innerHTML: o(V)
      }, null, 12, ft)) : g("", !0),
      o(Z) ? (u(), d(C, { key: 5 }, [
        o(G) ? (u(), d("div", mt, [
          v(t.$slots, "totalRowNumber", {}, () => [
            ie("#")
          ], !0)
        ])) : g("", !0),
        (u(!0), d(C, null, L(T.value, (e) => (u(), d(C, null, [
          o(m)[e].visible ? (u(), d(C, { key: 0 }, [
            o(i) && (o(m)[e].colspan || 1) !== 1 ? (u(!0), d(C, { key: 0 }, L(o(m)[e].colspan, (s) => (u(), d("div", {
              class: "cell total",
              "data-column": e,
              "data-subcolumn-index": s - 1
            }, [
              v(t.$slots, "total", {
                columnKey: e,
                subcolumnKey: I(s - 1),
                values: n.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, ht))), 256)) : (u(), d("div", {
              key: 1,
              class: "cell total",
              "data-column": e
            }, [
              v(t.$slots, "total", {
                columnKey: e,
                values: n.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, gt))
          ], 64)) : g("", !0)
        ], 64))), 256))
      ], 64)) : g("", !0)
    ], 6));
  }
});
const Ee = /* @__PURE__ */ je(bt, [["__scopeId", "data-v-b3158389"]]), Ct = /* @__PURE__ */ ae({
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
  setup(M) {
    const y = M, {
      additionalHeaders: k,
      cellClasses: S,
      colorMetrics: F,
      coloredMetrics: D,
      columns: R,
      comparisonColumnKeys: m,
      detailsRows: i,
      dragColumns: W,
      fixedColumnNumber: B,
      inversedKpis: O,
      orderBy: V,
      primaryColumn: E,
      rows: q,
      scrollPosition: K,
      showRowNumber: f,
      showTopTotal: ue,
      showTotal: G
    } = Le(y), Z = N(0), z = N(), b = N(0), j = N(0);
    Fe(() => ce.disconnect());
    const X = H(
      () => Object.keys(R.value).slice(0, B.value).reduce((n, c) => (n[c] = R.value[c], n), {})
    ), J = H(
      () => Object.keys(R.value).slice(B.value).reduce((n, c) => (n[c] = R.value[c], n), {})
    ), re = H(
      () => Object.keys(i.value).reduce(
        (n, c) => n + c.length,
        Object.values(q.value).length
      )
    ), A = H(() => {
      var c, l, p;
      const n = {};
      return (c = z.value) != null && c.main && (n["--header-main-height"] = `${z.value.main}px`), (l = z.value) != null && l.secondary && (n["--header-secondary-height"] = `${z.value.secondary}px`), Z.value && (n["--fixed-width"] = `${Z.value}px`), (p = z.value) != null && p.total && (n["--header-total-height"] = `${z.value.total}px`), b.value ? (n["--total-height"] = `${b.value}px`, n["--bottom-height"] = n["--total-height"]) : (re.value === 1 ? n["--total-scrollbar-display"] = "none" : n["--total-height"] = "20px", n["--bottom-height"] = "0px"), n;
    }), T = N(), ve = N(), oe = N(!1), de = () => {
      if (oe.value)
        return;
      oe.value = !0, Z.value = 0, z.value = void 0, b.value = 0;
      const n = (c) => {
        const l = {
          hasSecondary: !1,
          mainColumnHeight: 0,
          secondaryColumnHeight: 0,
          totalColumnHeight: 0,
          totalHeight: 0,
          width: 0
        };
        if (!c)
          return l;
        const p = [
          ...c.querySelectorAll(".cell.column-main:not(.column-main-extended)")
        ], _ = [
          ...c.querySelectorAll(".cell.column-main.column-main-extended")
        ], P = c.querySelector(".cell.column-secondary"), ee = c.querySelector(".cell.total"), Y = [];
        if (p.length > 0 && (l.mainColumnHeight = p[0].offsetHeight, l.width = p.reduce((I, { offsetWidth: U }) => I + U, 0), Y.push(l.mainColumnHeight)), P && (l.hasSecondary = !0, l.secondaryColumnHeight = P.offsetHeight, Y.push(l.secondaryColumnHeight)), _.length > 0) {
          const I = _.reduce(
            (U, { offsetWidth: fe }) => U + fe,
            0
          );
          p.length === 0 ? (l.width = I, l.mainColumnHeight = _[0].offsetHeight, Y.push(l.mainColumnHeight)) : l.width += I;
        }
        return l.totalColumnHeight = Y.reduce((I, U) => I + U + 1, -1), ee && (l.totalHeight = ee.offsetHeight), l;
      };
      He(() => {
        var p, _;
        const c = n((p = T.value) == null ? void 0 : p.$el), l = n((_ = ve.value) == null ? void 0 : _.$el);
        if (l.hasSecondary)
          Z.value = c.width, z.value = {
            main: l.mainColumnHeight,
            secondary: l.secondaryColumnHeight,
            total: Math.max(c.totalColumnHeight, l.totalColumnHeight)
          }, b.value = c.totalHeight;
        else {
          const P = Math.max(
            c.totalColumnHeight,
            l.totalColumnHeight
          );
          Z.value = c.width, z.value = {
            main: P,
            total: P
          }, b.value = c.totalHeight;
        }
        oe.value = !1;
      });
    }, ce = new ResizeObserver(() => de()), se = N();
    return He(() => {
      ce.disconnect(), se.value && ce.observe(se.value);
    }), me(q, (n, c) => {
      j.value = Math.random(), c.length || de();
    }), me(k, () => {
      j.value = Math.random();
    }), me(R, () => {
      j.value = Math.random(), de();
    }), (n, c) => (u(), d("div", {
      class: "table-container",
      ref_key: "tableContainer",
      ref: se
    }, [
      he(Je, {
        "onUpdate:scrollPosition": c[7] || (c[7] = (l) => n.$emit("update:scrollPosition", l)),
        scrollHeightDelta: (z.value ? z.value.total : 0) + b.value - 40,
        scrollPosition: o(K),
        scrollWidthDelta: Z.value,
        style: te(A.value),
        updateKey: j.value,
        mode: "both-top",
        optimized: ""
      }, {
        default: $(() => [
          he(Ee, {
            class: "fixed",
            ref_key: "fixedTable",
            ref: T,
            onAddColoredMetric: c[0] || (c[0] = (l) => n.$emit("addColoredMetric", l)),
            onRemoveColoredMetric: c[1] || (c[1] = (l) => n.$emit("removeColoredMetric", l)),
            "onUpdate:orderBy": c[2] || (c[2] = (l) => n.$emit("update:orderBy", l)),
            additionalHeaders: o(k),
            cellClasses: o(S),
            colorMetrics: o(F),
            coloredMetrics: o(D),
            columns: X.value,
            comparisonColumnKeys: o(m),
            detailsRows: o(i),
            dragColumns: !1,
            inversedKpis: o(O),
            orderBy: o(V),
            orderColumnType: o(R)[o(V)[0][0]].type,
            primaryColumn: o(E),
            rows: o(q),
            showNoDataMessage: !0,
            showRowNumber: o(f),
            showTopTotal: o(ue),
            showTotal: o(G)
          }, Re({
            columnRowNumber: $(() => [
              v(n.$slots, "columnRowNumber", {}, () => [
                ie("#")
              ], !0)
            ]),
            colorizeLabel: $(({ enabled: l }) => [
              v(n.$slots, "colorizeLabel", { enabled: l }, void 0, !0)
            ]),
            column: $(({ columnKey: l, isGhost: p }) => [
              l in X.value ? v(n.$slots, "column", {
                key: 0,
                columnKey: l,
                isGhost: p
              }, void 0, !0) : g("", !0)
            ]),
            additionalHeader: $(({ additionalHeader: l, columnKey: p }) => [
              v(n.$slots, "additionalHeader", {
                additionalHeader: l,
                columnKey: p
              }, void 0, !0)
            ]),
            topTotal: $(({ columnKey: l, subcolumnKey: p, values: _ }) => [
              l in X.value ? v(n.$slots, "topTotal", {
                key: 0,
                columnKey: l,
                subcolumnKey: p,
                values: _
              }, void 0, !0) : g("", !0)
            ]),
            topTotalRowNumber: $(() => [
              v(n.$slots, "topTotalRowNumber", {}, void 0, !0)
            ]),
            secondaryColumn: $(({ columnKey: l, subcolumnKey: p }) => [
              l in X.value ? v(n.$slots, "secondaryColumn", {
                key: 0,
                columnKey: l,
                subcolumnKey: p
              }, void 0, !0) : g("", !0)
            ]),
            rowNumber: $(({ value: l }) => [
              v(n.$slots, "rowNumber", { value: l }, void 0, !0)
            ]),
            totalRowNumber: $(() => [
              v(n.$slots, "totalRowNumber", {}, () => [
                ie("#")
              ], !0)
            ]),
            total: $(({ columnKey: l, subcolumnKey: p, values: _ }) => [
              l in X.value ? v(n.$slots, "total", {
                key: 0,
                columnKey: l,
                subcolumnKey: p,
                values: _
              }, void 0, !0) : g("", !0)
            ]),
            _: 2
          }, [
            L(Object.keys(X.value), (l) => ({
              name: `row-${l}`,
              fn: $(({ columnKey: p, index: _, row: P, spanIndex: ee, subcolumnKey: Y, subindex: I, value: U }) => [
                v(n.$slots, "row-" + p, {
                  columnKey: p,
                  index: _,
                  row: P,
                  spanIndex: ee,
                  subcolumnKey: Y,
                  subindex: I,
                  value: U
                }, void 0, !0)
              ])
            }))
          ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "inversedKpis", "orderBy", "orderColumnType", "primaryColumn", "rows", "showRowNumber", "showTopTotal", "showTotal"]),
          he(Ee, {
            ref_key: "scrollableTable",
            ref: ve,
            onAddColoredMetric: c[3] || (c[3] = (l) => n.$emit("addColoredMetric", l)),
            "onMove:column": c[4] || (c[4] = ({ from: l, to: p }) => n.$emit("move:column", { from: l + o(B), to: p + o(B) })),
            onRemoveColoredMetric: c[5] || (c[5] = (l) => n.$emit("removeColoredMetric", l)),
            "onUpdate:orderBy": c[6] || (c[6] = (l) => n.$emit("update:orderBy", l)),
            additionalHeaders: o(k),
            cellClasses: o(S),
            colorMetrics: o(F),
            coloredMetrics: o(D),
            columns: J.value,
            comparisonColumnKeys: o(m),
            detailsRows: o(i),
            inversedKpis: o(O),
            dragColumns: o(W),
            orderBy: o(V),
            orderColumnType: o(R)[o(V)[0][0]].type,
            primaryColumn: o(E),
            rows: o(q),
            showRowNumber: !1,
            showTopTotal: o(ue),
            showTotal: o(G),
            showNoDataMessage: !0,
            noDataMessage: n.noDataMessage,
            style: te(A.value)
          }, Re({
            colorizeLabel: $(({ enabled: l }) => [
              v(n.$slots, "colorizeLabel", { enabled: l }, void 0, !0)
            ]),
            column: $(({ columnKey: l, isGhost: p }) => [
              l in J.value ? v(n.$slots, "column", {
                key: 0,
                columnKey: l,
                isGhost: p
              }, void 0, !0) : g("", !0)
            ]),
            additionalHeader: $(({ additionalHeader: l, columnKey: p }) => [
              v(n.$slots, "additionalHeader", {
                additionalHeader: l,
                columnKey: p
              }, void 0, !0)
            ]),
            topTotal: $(({ columnKey: l, subcolumnKey: p, values: _ }) => [
              l in J.value ? v(n.$slots, "topTotal", {
                key: 0,
                columnKey: l,
                subcolumnKey: p,
                values: _
              }, void 0, !0) : g("", !0)
            ]),
            secondaryColumn: $(({ columnKey: l, subcolumnKey: p }) => [
              l in J.value ? v(n.$slots, "secondaryColumn", {
                key: 0,
                columnKey: l,
                subcolumnKey: p
              }, void 0, !0) : g("", !0)
            ]),
            total: $(({ columnKey: l, subcolumnKey: p, values: _ }) => [
              l in J.value ? v(n.$slots, "total", {
                key: 0,
                columnKey: l,
                subcolumnKey: p,
                values: _
              }, void 0, !0) : g("", !0)
            ]),
            _: 2
          }, [
            L(Object.keys(J.value), (l) => ({
              name: `row-${l}`,
              fn: $(({ columnKey: p, index: _, row: P, spanIndex: ee, subcolumnKey: Y, subindex: I, value: U }) => [
                v(n.$slots, "row-" + p, {
                  columnKey: p,
                  index: _,
                  row: P,
                  spanIndex: ee,
                  subcolumnKey: Y,
                  subindex: I,
                  value: U
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
const Xt = /* @__PURE__ */ je(Ct, [["__scopeId", "data-v-585d6e7c"]]), yt = /* @__PURE__ */ ae({
  inheritAttrs: !1
});
function wt(M, y, k, S, F, D) {
  return v(M.$slots, "default");
}
var $t = /* @__PURE__ */ ke(yt, [["render", wt], ["__file", "collection.vue"]]);
const Tt = /* @__PURE__ */ ae({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function Mt(M, y, k, S, F, D) {
  return v(M.$slots, "default");
}
var kt = /* @__PURE__ */ ke(Tt, [["render", Mt], ["__file", "collection-item.vue"]]);
const St = "data-el-collection-item", _t = (M) => {
  const y = `El${M}Collection`, k = `${y}Item`, S = Symbol(y), F = Symbol(k), D = {
    ...$t,
    name: y,
    setup() {
      const m = N(null), i = /* @__PURE__ */ new Map();
      Be(S, {
        itemMap: i,
        getItems: () => {
          const B = o(m);
          if (!B)
            return [];
          const O = Array.from(B.querySelectorAll(`[${St}]`));
          return [...i.values()].sort((E, q) => O.indexOf(E.ref) - O.indexOf(q.ref));
        },
        collectionRef: m
      });
    }
  }, R = {
    ...kt,
    name: k,
    setup(m, { attrs: i }) {
      const W = N(null), B = We(S, void 0);
      Be(F, {
        collectionItemRef: W
      }), qe(() => {
        const O = o(W);
        O && B.itemMap.set(O, {
          ref: O,
          ...i
        });
      }), Xe(() => {
        const O = o(W);
        B.itemMap.delete(O);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: S,
    COLLECTION_ITEM_INJECTION_KEY: F,
    ElCollection: D,
    ElCollectionItem: R
  };
}, $e = ge({
  trigger: Me.trigger,
  effect: {
    ...Q.effect,
    default: "light"
  },
  type: {
    type: le(String)
  },
  placement: {
    type: le(String),
    default: "bottom"
  },
  popperOptions: {
    type: le(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !0
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: le([Number, String]),
    default: 0
  },
  maxHeight: {
    type: le([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  role: {
    type: String,
    default: "menu"
  },
  buttonProps: {
    type: le(Object)
  },
  teleported: Q.teleported
});
ge({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: tt
  }
});
ge({
  onKeydown: { type: le(Function) }
});
_t("Dropdown");
const Nt = ge({
  trigger: Me.trigger,
  placement: $e.placement,
  disabled: Me.disabled,
  visible: Q.visible,
  transition: Q.transition,
  popperOptions: $e.popperOptions,
  tabindex: $e.tabindex,
  content: Q.content,
  popperStyle: Q.popperStyle,
  popperClass: Q.popperClass,
  enterable: {
    ...Q.enterable,
    default: !0
  },
  effect: {
    ...Q.effect,
    default: "light"
  },
  teleported: Q.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: !0
  },
  persistent: {
    type: Boolean,
    default: !0
  },
  "onUpdate:visible": {
    type: Function
  }
}), Ot = {
  "update:visible": (M) => Ve(M),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0
}, Ht = "onUpdate:visible", Rt = ae({
  name: "ElPopover"
}), Bt = /* @__PURE__ */ ae({
  ...Rt,
  props: Nt,
  emits: Ot,
  setup(M, { expose: y, emit: k }) {
    const S = M, F = H(() => S[Ht]), D = Ze("popover"), R = N(), m = H(() => {
      var f;
      return (f = o(R)) == null ? void 0 : f.popperRef;
    }), i = H(() => [
      {
        width: xe(S.width)
      },
      S.popperStyle
    ]), W = H(() => [D.b(), S.popperClass, { [D.m("plain")]: !!S.content }]), B = H(() => S.transition === `${D.namespace.value}-fade-in-linear`), O = () => {
      var f;
      (f = R.value) == null || f.hide();
    }, V = () => {
      k("before-enter");
    }, E = () => {
      k("before-leave");
    }, q = () => {
      k("after-enter");
    }, K = () => {
      k("update:visible", !1), k("after-leave");
    };
    return y({
      popperRef: m,
      hide: O
    }), (f, ue) => (u(), De(o(ot), Ge({
      ref_key: "tooltipRef",
      ref: R
    }, f.$attrs, {
      trigger: f.trigger,
      placement: f.placement,
      disabled: f.disabled,
      visible: f.visible,
      transition: f.transition,
      "popper-options": f.popperOptions,
      tabindex: f.tabindex,
      content: f.content,
      offset: f.offset,
      "show-after": f.showAfter,
      "hide-after": f.hideAfter,
      "auto-close": f.autoClose,
      "show-arrow": f.showArrow,
      "aria-label": f.title,
      effect: f.effect,
      enterable: f.enterable,
      "popper-class": o(W),
      "popper-style": o(i),
      teleported: f.teleported,
      persistent: f.persistent,
      "gpu-acceleration": o(B),
      "onUpdate:visible": o(F),
      onBeforeShow: V,
      onBeforeHide: E,
      onShow: q,
      onHide: K
    }), {
      content: $(() => [
        f.title ? (u(), d("div", {
          key: 0,
          class: x(o(D).e("title")),
          role: "title"
        }, Te(f.title), 3)) : g("v-if", !0),
        v(f.$slots, "default", {}, () => [
          ie(Te(f.content), 1)
        ])
      ]),
      default: $(() => [
        f.$slots.reference ? v(f.$slots, "reference", { key: 0 }) : g("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var Et = /* @__PURE__ */ ke(Bt, [["__file", "popover.vue"]]);
const Ie = (M, y) => {
  const k = y.arg || y.value, S = k == null ? void 0 : k.popperRef;
  S && (S.triggerRef = M);
};
var It = {
  mounted(M, y) {
    Ie(M, y);
  },
  updated(M, y) {
    Ie(M, y);
  }
};
const Lt = "popover", Dt = Ke(It, Lt), jt = et(Et, {
  directive: Dt
});
const Gt = /* @__PURE__ */ ae({
  __name: "Tooltip",
  setup(M) {
    return (y, k) => (u(), De(o(jt), null, {
      reference: $(() => [
        v(y.$slots, "reference")
      ]),
      default: $(() => [
        v(y.$slots, "default")
      ]),
      _: 3
    }));
  }
});
export {
  jt as E,
  Ee as S,
  Xt as T,
  Gt as _
};
