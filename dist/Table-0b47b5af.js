import { defineComponent as $e, toRefs as Te, computed as N, openBlock as d, createElementBlock as v, normalizeClass as x, unref as o, withModifiers as pe, createElementVNode as Oe, normalizeStyle as se, ref as g, onUnmounted as Ne, onMounted as Le, watch as ge, nextTick as Re, withMemo as We, renderSlot as m, createBlock as Se, createCommentVNode as w, onUpdated as je, createTextVNode as we, Fragment as C, renderList as Y, createVNode as ye, toDisplayString as Pe, withCtx as k } from "vue";
import { _ as Me } from "./_plugin-vue_export-helper-dad06003.js";
import { D as Ee } from "./datetime-31a2b505.js";
import { I as Fe } from "./Icon-8f2ed8ba.js";
const Ie = { class: "scrollbar" }, Ue = /* @__PURE__ */ $e({
  __name: "ScrollableArea",
  props: {
    active: { type: Boolean },
    mode: {},
    thumbOffset: {},
    thumbSize: {}
  },
  emits: ["mousedown"],
  setup(ie, { emit: Q }) {
    const re = ie, { active: Z, mode: X, thumbOffset: oe, thumbSize: A } = Te(re), p = N(() => {
      const [n, j] = X.value === "vertical" ? ["top", "height"] : ["left", "width"];
      return {
        [n]: `calc(3px + ${oe.value} * (100% - ${A.value} - 6px))`,
        [j]: `${A.value}`
      };
    });
    return (n, j) => (d(), v("div", {
      class: x(["scrollable-area", { active: o(Z), [o(X)]: !0 }]),
      onMousedown: j[0] || (j[0] = pe((R) => Q("mousedown", R), ["stop"]))
    }, [
      Oe("div", Ie, [
        Oe("div", {
          class: "thumb",
          style: se(p.value)
        }, null, 4)
      ])
    ], 34));
  }
});
const _e = /* @__PURE__ */ Me(Ue, [["__scopeId", "data-v-56aba386"]]), Xe = /* @__PURE__ */ $e({
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
  setup(ie, { emit: Q }) {
    const re = ie, { mode: Z, relativeTo: X, scrollPosition: oe, scrollHeightDelta: A, scrollWidthDelta: p, staticPosition: n, updateKey: j } = Te(re), R = g(!1), P = g(0), D = g(0), T = g(0), z = g(0), H = g(), ee = g(), le = g(), L = g(), E = g(), M = g(0), h = g(0), O = g(), F = N(() => M.value / (z.value - D.value)), q = N(
      () => `max(56px, (100% - 14px) * ${D.value / z.value})`
    ), ue = N(
      () => `max(56px, (100% - 14px) * ${P.value / T.value})`
    ), I = N(() => h.value / (T.value - P.value)), y = g();
    Ne(() => {
      te.disconnect(), K.disconnect();
    });
    const de = () => {
      H.value && (O.value !== void 0 && (clearTimeout(O.value), O.value = void 0), R.value = !1, H.value = void 0);
    }, J = () => X != null && X.value ? X.value() : y.value, ve = (i) => {
      const W = J();
      W && W.scrollTo(i);
    }, ce = (i) => {
      ve({
        left: ((L == null ? void 0 : L.value) ?? 0) + i * z.value / (D.value - p.value)
      });
    }, ne = (i) => {
      ve({
        top: ((E == null ? void 0 : E.value) ?? 0) + i * T.value / (P.value - A.value)
      });
    }, u = (i) => {
      if (H.value) {
        switch (H.value) {
          case "horizontal":
            ce(i.clientX - ((ee == null ? void 0 : ee.value) ?? 0));
            break;
          case "vertical":
            ne(i.clientY - ((le == null ? void 0 : le.value) ?? 0));
            break;
        }
        i.preventDefault();
      }
    }, c = () => {
      H.value = void 0, he(), window.removeEventListener("mousemove", u), window.removeEventListener("mouseup", c);
    }, a = (i, W) => {
      de(), R.value = !0, H.value = W;
      const U = J();
      switch (H.value) {
        case "horizontal":
          ee.value = i.clientX, L.value = (U == null ? void 0 : U.scrollLeft) ?? 0;
          break;
        case "vertical":
          le.value = i.clientY, E.value = (U == null ? void 0 : U.scrollTop) ?? 0;
          break;
      }
      window.addEventListener("mousemove", u), window.addEventListener("mouseup", c);
    }, f = (i) => {
      P.value !== i.clientHeight && (P.value = i.clientHeight);
    }, S = (i) => {
      D.value !== i.clientWidth && (D.value = i.clientWidth);
    }, B = (i) => {
      T.value !== i.scrollHeight && (T.value = i.scrollHeight);
    }, _ = (i) => {
      z.value !== i.scrollWidth && (z.value = i.scrollWidth);
    }, V = (i) => {
      M.value = i.scrollLeft, Q("update:scrollPosition", {
        left: M.value,
        top: h.value
      });
    }, G = (i) => {
      h.value = i.scrollTop, Q("update:scrollPosition", {
        left: M.value,
        top: h.value
      });
    }, ae = () => {
      const i = J();
      i && (f(i), S(i), B(i), _(i));
    }, te = new MutationObserver(() => ae()), K = new ResizeObserver(() => ae()), fe = (i) => {
      V(i.target), G(i.target);
    }, he = () => {
      ae(), !H.value && (de(), R.value = !0, O.value = window.setTimeout(() => {
        R.value = !1;
      }, 2500));
    }, Ce = () => {
      te.disconnect(), K.disconnect();
      const i = J();
      i && (te.observe(i, {
        childList: !0,
        subtree: !0
      }), K.observe(i));
    };
    return Le(() => {
      Ce();
    }), ge(X, () => Ce()), ge(
      oe,
      (i) => {
        M.value = i.left, h.value = i.top, Re(() => ve(i));
      },
      {
        deep: !0,
        immediate: !0
      }
    ), ge(j, () => {
      console.log(j.value);
    }), (i, W) => (d(), v("div", {
      class: x(["scrollable", { [`mode-${o(Z)}`]: !0, static: o(n) }])
    }, [
      We(i.optimized ? [o(j)] : void 0, () => (d(), v("div", {
        class: "scrollable-content",
        ref_key: "content",
        ref: y,
        key: o(j),
        onMousemove: he,
        onScroll: fe
      }, [
        m(i.$slots, "default", {}, void 0, !0)
      ], 32)), W, 0),
      o(Z) !== "vertical" ? (d(), Se(_e, {
        key: 0,
        onMousedown: W[1] || (W[1] = pe((U) => a(U, "horizontal"), ["stop"])),
        active: z.value > D.value && (R.value || H.value === "horizontal"),
        class: x({ "scrollbar-visible": z.value > D.value }),
        thumbOffset: F.value,
        thumbSize: q.value,
        mode: "horizontal"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0),
      o(Z) === "both-top" ? (d(), Se(_e, {
        key: 1,
        onMousedown: W[2] || (W[2] = pe((U) => a(U, "horizontal"), ["stop"])),
        active: z.value > D.value && (R.value || H.value === "horizontal"),
        class: x({ "scrollbar-visible": z.value > D.value }),
        thumbOffset: F.value,
        thumbSize: q.value,
        mode: "horizontal-top"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0),
      o(Z) !== "horizontal" ? (d(), Se(_e, {
        key: 2,
        onMousedown: W[3] || (W[3] = pe((U) => a(U, "vertical"), ["stop"])),
        active: T.value > P.value && (R.value || H.value === "vertical"),
        class: x({ "scrollbar-visible": T.value > P.value }),
        thumbOffset: I.value,
        thumbSize: ue.value,
        mode: "vertical"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0)
    ], 2));
  }
});
const Ae = /* @__PURE__ */ Me(Xe, [["__scopeId", "data-v-a8f76777"]]), qe = ["onClick", "onMousedown", "data-column"], Ge = ["onClick"], Ye = ["data-column"], xe = {
  key: 0,
  class: "cell column cell-additional-header row-number"
}, Je = ["data-additionalHeader", "data-column"], Qe = {
  key: 0,
  class: "cell total top-total row-number"
}, Ze = ["data-column", "data-subcolumn-index"], Ve = ["data-column"], Ke = ["onClick", "data-column", "data-subcolumn-index"], et = ["data-column", "data-primary-key"], tt = ["data-column", "data-primary-key", "data-subcolumn-index"], ot = ["innerHTML"], lt = {
  key: 0,
  class: "cell total row-number"
}, at = ["data-column", "data-subcolumn-index"], st = ["data-column"], rt = /* @__PURE__ */ $e({
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
  setup(ie, { emit: Q }) {
    const re = ie, {
      additionalHeaders: Z,
      cellClasses: X,
      colorMetrics: oe,
      coloredMetrics: A,
      columns: p,
      comparisonColumnKeys: n,
      detailsRows: j,
      dragColumns: R,
      inversedKpis: P,
      noDataMessage: D,
      orderBy: T,
      orderColumnType: z,
      primaryColumn: H,
      rows: ee,
      showNoDataMessage: le,
      showRowNumber: L,
      showTotal: E,
      showTopTotal: M
    } = Te(re);
    je(() => console.log(`updated ${Object.values(p.value).length}`));
    const h = g(), O = g(), F = g(0), q = g(0), ue = g(0), I = g({}), y = N(
      () => Object.entries(p.value).filter(([t, { visible: l }]) => l).map(([t, l]) => t)
    ), de = N(
      () => y.value.length + (L.value ? 1 : 0)
    ), J = N(() => F.value > 3), ve = N(
      () => Object.values(ee.value).reduce((t, l) => {
        for (const [e, r] of Object.entries(p.value))
          if (r.type !== "string")
            if (n != null && n.value && (r.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(l[e]).reduce((s, [b, $]) => (s[b] = parseFloat($), s), {}));
              for (const s in t[e])
                t[e][s] > l[e][s] && (t[e][s] = parseFloat(l[e][s]));
            } else
              (!(e in t) || t[e] > l[e]) && (t[e] = parseFloat(l[e]));
        return t;
      }, {})
    ), ce = N(
      () => Object.values(ee.value).reduce((t, l) => {
        for (const [e, r] of Object.entries(p.value))
          if (r.type !== "string")
            if (n != null && n.value && (r.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(l[e]).reduce((s, [b, $]) => (s[b] = parseFloat($), s), {}));
              for (const s in t[e])
                t[e][s] < l[e][s] && (t[e][s] = parseFloat(l[e][s]));
            } else
              (!(e in t) || t[e] < l[e]) && (t[e] = parseFloat(l[e]));
        return t;
      }, {})
    ), ne = N(() => n != null && n.value ? y.value.map((t) => p.value[t].rowspan ?? 1).reduce((t, l) => t > l ? t : l) : 1), u = N(
      () => Object.values(ee.value).sort((t, l) => {
        const e = (() => {
          const r = ae(
            T.value[0].reduce((b, $) => b[$], t),
            z.value
          ), s = ae(
            T.value[0].reduce((b, $) => b[$], l),
            z.value
          );
          return r > s ? 1 : r < s ? -1 : 0;
        })();
        return T.value[1] ? -e : e;
      }).reduce((t, l, e) => (t.push({
        ...l,
        rowInfo: {
          index: e,
          detailable: !0
        }
      }), j.value[l[H.value]] && t.push(
        ...Object.entries(j.value[l[H.value]]).map(
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
    ), c = N(() => {
      let t = 0;
      for (const e of y.value) {
        const r = p.value[e];
        r.colspan && (n != null && n.value) ? t += r.colspan : t++;
      }
      let l = `repeat(${t}, auto)`;
      return L.value && (l = `min-content ${l}`), {
        "grid-template-columns": l
      };
    }), a = (t) => I.value[t] ? I.value[t].height : 0, f = (t, l, e, r) => {
      const s = {
        ...X.value,
        even: l % 2 === 0
      };
      if (oe.value) {
        const b = (() => !P || !P.value ? "positive" : P.value.includes(e) ? "negative" : "positive")();
        s[`color-intensity-${S(t[e], e, r)}`] = !0, s[`color-${b}`] = !0, r !== void 0 && n && n.value && n.value[r] === "difference" ? s.colored = !1 : s.colored = K(e) >= 0;
      }
      return s;
    }, S = (t, l, e) => {
      if (p.value[l].type === "string")
        return;
      let r = t, s = ce.value[l], b = ve.value[l];
      return n && n.value && e !== void 0 && (r = r[n.value[e]], s = s[n.value[e]], b = b[n.value[e]]), s === b ? 0 : Math.round((r - b) * 10 / (s - b));
    }, B = (t, l) => {
      const e = p.value[t], r = [t];
      l !== void 0 && (n && n.value ? r.push(n.value[l]) : r.push(l.toString()));
      const s = T.value[0] ? T.value[0].every(
        (b, $) => b === r[$]
      ) : !1;
      return {
        "column-main-extended": l === void 0 && (e.rowspan ?? 0) > 1,
        dragged: h.value ? y.value[h.value] === t : !1,
        "drag-mode": J.value,
        orderable: !(n && n.value) || (e.colspan ?? 1) === 1 || l !== void 0,
        "ordered-by": s,
        [`order-direction-${T.value[1] ? "desc" : "asc"}`]: s
      };
    }, _ = (t) => {
      const l = {};
      if (I.value[t])
        if (h.value !== void 0 && y.value[h.value] === t) {
          const { height: e, left: r, width: s } = I.value[t];
          l.left = `${Math.floor(r + ue.value - q.value)}px`, l.height = `${e + 1}px`, l.width = `${Math.round(s)}px`;
        } else {
          const e = y.value.indexOf(t);
          let r = (() => {
            if (h.value === void 0 || O.value === void 0)
              return 0;
            if (h.value < e) {
              if (O.value >= e)
                return -I.value[y.value[h.value]].width;
            } else if (O.value <= e)
              return I.value[y.value[h.value]].width;
            return 0;
          })();
          const { height: s, left: b, width: $ } = I.value[t];
          l.left = `${Math.floor(b + r)}px`, l.height = `${s + 1}px`, l.width = `${Math.floor($)}px`;
        }
      return l;
    }, V = (t) => {
      const l = p.value[t], e = {};
      return n && n.value && (l.colspan && (e["grid-column-end"] = `span ${l.colspan}`), l.rowspan && (e["grid-row-end"] = `span ${l.rowspan}`)), e;
    }, G = (t) => n && n.value ? n.value[t] : void 0, ae = (t, l) => {
      switch (l) {
        case "float":
        case "int":
        case "money":
        case "money_capped":
        case "percent":
        case "time":
          return parseFloat(t ?? 0);
        case "date":
          return Ee.fromISO(t).toUnixInteger();
        default:
          return t;
      }
    }, te = (t) => t.subindex === void 0 ? t.index + 1 : `${t.index + 1}.${t.subindex + 1}`, K = (t) => A.value.findIndex((l) => l === t), fe = (t) => oe.value && !["date", "string"].includes(p.value[t].type), he = (t, l) => {
      if (n && n.value && p.value[t].colspan && l === void 0 || h.value !== void 0 && J.value && y.value[h.value] === t)
        return;
      const e = [t];
      l !== void 0 && (n && n.value ? e.push(n.value[l]) : e.push(l.toString()));
      const r = e.every(
        (b, $) => b === T.value[0][$]
      ), s = (() => r ? !T.value[1] : p.value[t].type !== "string")();
      Q("update:orderBy", [e, s]);
    }, Ce = (t, l) => {
      R.value && (h.value = y.value.indexOf(t), O.value = h.value, F.value = 0, q.value = l.clientX, ue.value = l.clientX, window.addEventListener("mousemove", i), window.addEventListener("mouseup", W));
    }, i = (t) => {
      if (h.value === void 0)
        return;
      F.value++, ue.value = t.clientX;
      const l = Object.entries(p.value).filter(([$, me]) => me.visible).map(([$]) => $).map(($, me) => ({
        columnIndex: parseInt(me.toString()),
        sizing: I.value[$]
      })), e = l[h.value].sizing, r = e.width / 2, b = e.left + ue.value - q.value;
      O.value = (() => {
        for (const { columnIndex: $, sizing: me } of l)
          if (b + r - me.left - me.width < 0)
            return $;
        return l.length;
      })();
    }, W = (t) => {
      if (h.value === void 0 || O.value === void 0)
        return;
      J.value && O.value !== h.value && Q("move:column", {
        from: h.value,
        to: O.value
      }), O.value = void 0, F.value = 0, h.value = void 0, window.removeEventListener("mousemove", i), window.removeEventListener("mouseup", W);
    }, U = (t) => {
      K(t) >= 0 ? Q("removeColoredMetric", t) : Q("addColoredMetric", t);
    }, be = g({}), De = (t, l) => {
      l && (be.value[t] = l);
    }, ke = g(), He = () => {
      if (!ke.value)
        return;
      const t = ke.value.getBoundingClientRect();
      I.value = Object.entries(p.value).reduce(
        (l, [e, r]) => {
          if (r.visible && be.value[e]) {
            const s = be.value[e].getBoundingClientRect();
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
    }, ze = new ResizeObserver(() => {
      He();
    });
    return ge(
      be,
      () => {
        ze.disconnect();
        for (const t of Object.values(be.value))
          ze.observe(t);
        He();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), He(), (t, l) => (d(), v("div", {
      class: x(["table", {
        "with-secondary": !!o(n) && y.value.some((e) => (o(p)[e].colspan || 1) !== 1)
      }]),
      ref_key: "table",
      ref: ke,
      style: se(c.value)
    }, [
      o(L) ? (d(), v("div", {
        key: 0,
        class: "cell column column-main row-number",
        style: se(ne.value > 1 ? { "grid-row-end": `span ${ne.value}` } : void 0)
      }, [
        m(t.$slots, "columnRowNumber", {}, () => [
          we("#")
        ], !0)
      ], 4)) : w("", !0),
      (d(!0), v(C, null, Y(y.value, (e) => (d(), v(C, null, [
        o(p)[e].visible ? (d(), v("div", {
          key: 0,
          class: x(["cell column column-main", B(e)]),
          ref_for: !0,
          ref: (r) => De(e, r),
          onClick: pe(() => he(e), ["stop"]),
          onMousedown: (r) => Ce(e, r),
          style: se(V(e)),
          "data-column": e
        }, [
          m(t.$slots, "column", {
            columnKey: e,
            isGhost: !1
          }, void 0, !0),
          fe(e) ? (d(), v("div", {
            key: 0,
            class: "toggle-colored no-spacing",
            onClick: pe(() => U(e), ["stop"]),
            style: se({ top: `${a(e)}px` })
          }, [
            m(t.$slots, "colorizeLabel", {
              enabled: K(e) >= 0
            }, void 0, !0)
          ], 12, Ge)) : w("", !0)
        ], 46, qe)) : w("", !0)
      ], 64))), 256)),
      o(R) ? (d(!0), v(C, { key: 1 }, Y(y.value, (e) => (d(), v(C, null, [
        o(p)[e].visible ? (d(), v("div", {
          key: 0,
          class: x(["cell column column-main column-ghost", B(e)]),
          style: se(_(e)),
          "data-column": e
        }, [
          m(t.$slots, "column", {
            columnKey: e,
            isGhost: !0
          }, void 0, !0)
        ], 14, Ye)) : w("", !0)
      ], 64))), 256)) : w("", !0),
      (d(!0), v(C, null, Y(o(Z), (e, r) => (d(), v(C, null, [
        o(L) ? (d(), v("div", xe, [
          ye(Fe, {
            value: e.icon
          }, null, 8, ["value"])
        ])) : w("", !0),
        (d(!0), v(C, null, Y(y.value, (s) => (d(), v("div", {
          class: x(["cell column cell-additional-header", [`cell-additional-header-${s}`]]),
          "data-additionalHeader": r,
          "data-column": s
        }, [
          m(t.$slots, "additionalHeader", {
            additionalHeader: r,
            columnKey: s
          }, void 0, !0)
        ], 10, Je))), 256))
      ], 64))), 256)),
      o(M) && o(E) ? (d(), v(C, { key: 2 }, [
        o(L) ? (d(), v("div", Qe, [
          m(t.$slots, "topTotalRowNumber", {}, void 0, !0)
        ])) : w("", !0),
        (d(!0), v(C, null, Y(y.value, (e) => (d(), v(C, null, [
          o(p)[e].visible ? (d(), v(C, { key: 0 }, [
            o(n) && (o(p)[e].colspan || 1) !== 1 ? (d(!0), v(C, { key: 0 }, Y(o(p)[e].colspan, (r) => (d(), v("div", {
              class: "cell total top-total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              m(t.$slots, "topTotal", {
                columnKey: e,
                subcolumnKey: G(r - 1),
                values: u.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, Ze))), 256)) : (d(), v("div", {
              key: 1,
              class: "cell total top-total",
              "data-column": e
            }, [
              m(t.$slots, "topTotal", {
                columnKey: e,
                values: u.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, Ve))
          ], 64)) : w("", !0)
        ], 64))), 256))
      ], 64)) : w("", !0),
      o(n) ? (d(!0), v(C, { key: 3 }, Y(y.value, (e) => (d(), v(C, null, [
        o(p)[e].visible && o(p)[e].colspan ? (d(!0), v(C, { key: 0 }, Y(o(p)[e].colspan, (r) => (d(), v("div", {
          class: x(["cell column column-secondary", B(e, r - 1)]),
          onClick: pe(() => he(e, r - 1), ["stop"]),
          "data-column": e,
          "data-subcolumn-index": r - 1
        }, [
          m(t.$slots, "secondaryColumn", {
            columnKey: e,
            subcolumnKey: G(r - 1)
          }, void 0, !0)
        ], 10, Ke))), 256)) : w("", !0)
      ], 64))), 256)) : w("", !0),
      (d(!0), v(C, null, Y(u.value, (e, r) => (d(), v(C, null, [
        o(L) ? (d(), v("div", {
          key: 0,
          class: x(["cell row-number", { even: r % 2 === 0 }])
        }, [
          m(t.$slots, "rowNumber", {
            value: te(e.rowInfo)
          }, () => [
            we(Pe(te(e.rowInfo)), 1)
          ], !0)
        ], 2)) : w("", !0),
        (d(!0), v(C, null, Y(y.value, (s) => (d(), v(C, null, [
          !o(n) || (o(p)[s].colspan || 1) === 1 ? (d(), v("div", {
            key: 0,
            class: x(["cell", f(e, r, s)]),
            "data-column": s,
            "data-primary-key": e[o(H)]
          }, [
            m(t.$slots, "row", {
              columnKey: s,
              index: r,
              row: e,
              subindex: e.rowInfo.subindex,
              value: e[s]
            }, void 0, !0)
          ], 10, et)) : (d(!0), v(C, { key: 1 }, Y(o(p)[s].colspan, (b) => (d(), v("div", {
            class: x(["cell", f(e, r, s, b - 1)]),
            "data-column": s,
            "data-primary-key": e[o(H)],
            "data-subcolumn-index": b - 1
          }, [
            m(t.$slots, "row", {
              columnKey: s,
              index: r,
              row: e,
              spanIndex: o(n) ? o(n)[b - 1] : b - 1,
              subcolumnKey: G(b - 1),
              subindex: e.rowInfo.subindex,
              value: e[s] ? e[s][o(n) ? o(n)[b - 1] : b - 1] : void 0
            }, void 0, !0)
          ], 10, tt))), 256))
        ], 64))), 256))
      ], 64))), 256)),
      u.value.length === 0 && o(le) ? (d(), v("div", {
        class: "cell odd no-data",
        key: "row-no-data",
        style: se({ "grid-column": `1 / span ${de.value}` }),
        innerHTML: o(D)
      }, null, 12, ot)) : w("", !0),
      o(E) ? (d(), v(C, { key: 5 }, [
        o(L) ? (d(), v("div", lt, [
          m(t.$slots, "totalRowNumber", {}, () => [
            we("#")
          ], !0)
        ])) : w("", !0),
        (d(!0), v(C, null, Y(y.value, (e) => (d(), v(C, null, [
          o(p)[e].visible ? (d(), v(C, { key: 0 }, [
            o(n) && (o(p)[e].colspan || 1) !== 1 ? (d(!0), v(C, { key: 0 }, Y(o(p)[e].colspan, (r) => (d(), v("div", {
              class: "cell total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              m(t.$slots, "total", {
                columnKey: e,
                subcolumnKey: G(r - 1),
                values: u.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, at))), 256)) : (d(), v("div", {
              key: 1,
              class: "cell total",
              "data-column": e
            }, [
              m(t.$slots, "total", {
                columnKey: e,
                values: u.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, st))
          ], 64)) : w("", !0)
        ], 64))), 256))
      ], 64)) : w("", !0)
    ], 6));
  }
});
const Be = /* @__PURE__ */ Me(rt, [["__scopeId", "data-v-4fdb8f08"]]), ut = /* @__PURE__ */ $e({
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
  setup(ie) {
    const Q = ie, {
      additionalHeaders: re,
      cellClasses: Z,
      colorMetrics: X,
      coloredMetrics: oe,
      columns: A,
      comparisonColumnKeys: p,
      detailsRows: n,
      dragColumns: j,
      fixedColumnNumber: R,
      inversedKpis: P,
      orderBy: D,
      primaryColumn: T,
      rows: z,
      scrollPosition: H,
      showRowNumber: ee,
      showTopTotal: le,
      showTotal: L
    } = Te(Q), E = g(0), M = g(), h = g(0), O = g(0);
    Ne(() => ce.disconnect());
    const F = N(
      () => Object.keys(A.value).slice(0, R.value).reduce((u, c) => (u[c] = A.value[c], u), {})
    ), q = N(
      () => Object.keys(A.value).slice(R.value).reduce((u, c) => (u[c] = A.value[c], u), {})
    ), ue = N(
      () => Object.keys(n.value).reduce(
        (u, c) => u + c.length,
        Object.values(z.value).length
      )
    ), I = N(() => {
      var c, a, f;
      const u = {};
      return (c = M.value) != null && c.main && (u["--header-main-height"] = `${M.value.main}px`), (a = M.value) != null && a.secondary && (u["--header-secondary-height"] = `${M.value.secondary}px`), E.value && (u["--fixed-width"] = `${E.value}px`), (f = M.value) != null && f.total && (u["--header-total-height"] = `${M.value.total}px`), h.value ? (u["--total-height"] = `${h.value}px`, u["--bottom-height"] = u["--total-height"]) : (ue.value === 1 ? u["--total-scrollbar-display"] = "none" : u["--total-height"] = "20px", u["--bottom-height"] = "0px"), u;
    }), y = g(), de = g(), J = g(!1), ve = () => {
      var f, S;
      if (J.value)
        return;
      J.value = !0, E.value = 0, M.value = void 0, h.value = 0;
      const u = (B) => {
        const _ = {
          hasSecondary: !1,
          mainColumnHeight: 0,
          secondaryColumnHeight: 0,
          totalColumnHeight: 0,
          totalHeight: 0,
          width: 0
        };
        if (!B)
          return _;
        const V = [...B.querySelectorAll(".cell.column-main")], G = B.querySelector(".cell.column-secondary"), ae = B.querySelector(".cell.total"), te = [];
        return V.length > 0 && (_.mainColumnHeight = V[0].offsetHeight, _.width = V.reduce((K, { offsetWidth: fe }) => K + fe, 0), te.push(_.mainColumnHeight)), G && (_.hasSecondary = !0, _.secondaryColumnHeight = G.offsetHeight, te.push(_.secondaryColumnHeight)), _.totalColumnHeight = te.reduce((K, fe) => K + fe + 1, -1), ae && (_.totalHeight = ae.offsetHeight), _;
      }, c = u((f = y.value) == null ? void 0 : f.$el), a = u((S = de.value) == null ? void 0 : S.$el);
      if (a.hasSecondary)
        E.value = c.width, M.value = {
          main: a.mainColumnHeight,
          secondary: a.secondaryColumnHeight,
          total: Math.max(c.totalColumnHeight, a.totalColumnHeight)
        }, h.value = c.totalHeight;
      else {
        const B = Math.max(
          c.totalColumnHeight,
          a.totalColumnHeight
        );
        E.value = c.width, M.value = {
          main: B,
          total: B
        }, h.value = c.totalHeight;
      }
      Re(() => {
        J.value = !1;
      });
    }, ce = new ResizeObserver(() => ve()), ne = g();
    return Re(() => {
      ce.disconnect(), ne.value && ce.observe(ne.value);
    }), ge(z, () => {
      O.value = Math.random();
    }), (u, c) => (d(), v("div", {
      class: "table-container",
      ref_key: "tableContainer",
      ref: ne
    }, [
      ye(Ae, {
        "onUpdate:scrollPosition": c[7] || (c[7] = (a) => u.$emit("update:scrollPosition", a)),
        scrollHeightDelta: (M.value ? M.value.total : 0) + h.value - 40,
        scrollPosition: o(H),
        scrollWidthDelta: E.value,
        style: se(I.value),
        updateKey: O.value,
        mode: "both-top",
        optimized: ""
      }, {
        default: k(() => [
          ye(Be, {
            class: "fixed",
            ref_key: "fixedTable",
            ref: y,
            onAddColoredMetric: c[0] || (c[0] = (a) => u.$emit("addColoredMetric", a)),
            onRemoveColoredMetric: c[1] || (c[1] = (a) => u.$emit("removeColoredMetric", a)),
            "onUpdate:orderBy": c[2] || (c[2] = (a) => u.$emit("update:orderBy", a)),
            additionalHeaders: o(re),
            cellClasses: o(Z),
            colorMetrics: o(X),
            coloredMetrics: o(oe),
            columns: F.value,
            comparisonColumnKeys: o(p),
            detailsRows: o(n),
            dragColumns: !1,
            inversedKpis: o(P),
            orderBy: o(D),
            orderColumnType: o(A)[o(D)[0][0]].type,
            primaryColumn: o(T),
            rows: o(z),
            showNoDataMessage: !0,
            showRowNumber: o(ee),
            showTopTotal: o(le),
            showTotal: o(L)
          }, {
            columnRowNumber: k(() => [
              m(u.$slots, "columnRowNumber", {}, () => [
                we("#")
              ], !0)
            ]),
            colorizeLabel: k(({ enabled: a }) => [
              m(u.$slots, "colorizeLabel", { enabled: a }, void 0, !0)
            ]),
            column: k(({ columnKey: a, isGhost: f }) => [
              a in F.value ? m(u.$slots, "column", {
                key: 0,
                columnKey: a,
                isGhost: f
              }, void 0, !0) : w("", !0)
            ]),
            additionalHeader: k(({ additionalHeader: a, columnKey: f }) => [
              m(u.$slots, "additionalHeader", {
                additionalHeader: a,
                columnKey: f
              }, void 0, !0)
            ]),
            topTotal: k(({ columnKey: a, subcolumnKey: f, values: S }) => [
              a in F.value ? m(u.$slots, "topTotal", {
                key: 0,
                columnKey: a,
                subcolumnKey: f,
                values: S
              }, void 0, !0) : w("", !0)
            ]),
            topTotalRowNumber: k(() => [
              m(u.$slots, "topTotalRowNumber", {}, void 0, !0)
            ]),
            secondaryColumn: k(({ columnKey: a, subcolumnKey: f }) => [
              a in F.value ? m(u.$slots, "secondaryColumn", {
                key: 0,
                columnKey: a,
                subcolumnKey: f
              }, void 0, !0) : w("", !0)
            ]),
            rowNumber: k(({ value: a }) => [
              m(u.$slots, "rowNumber", { value: a }, void 0, !0)
            ]),
            row: k(({ columnKey: a, index: f, row: S, spanIndex: B, subcolumnKey: _, subindex: V, value: G }) => [
              a in F.value ? m(u.$slots, "row", {
                key: 0,
                columnKey: a,
                index: f,
                row: S,
                spanIndex: B,
                subcolumnKey: _,
                subindex: V,
                value: G
              }, void 0, !0) : w("", !0)
            ]),
            totalRowNumber: k(() => [
              m(u.$slots, "totalRowNumber", {}, () => [
                we("#")
              ], !0)
            ]),
            total: k(({ columnKey: a, subcolumnKey: f, values: S }) => [
              a in F.value ? m(u.$slots, "total", {
                key: 0,
                columnKey: a,
                subcolumnKey: f,
                values: S
              }, void 0, !0) : w("", !0)
            ]),
            _: 3
          }, 8, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "inversedKpis", "orderBy", "orderColumnType", "primaryColumn", "rows", "showRowNumber", "showTopTotal", "showTotal"]),
          ye(Be, {
            ref_key: "scrollableTable",
            ref: de,
            onAddColoredMetric: c[3] || (c[3] = (a) => u.$emit("addColoredMetric", a)),
            "onMove:column": c[4] || (c[4] = ({ from: a, to: f }) => u.$emit("move:column", { from: a + o(R), to: f + o(R) })),
            onRemoveColoredMetric: c[5] || (c[5] = (a) => u.$emit("removeColoredMetric", a)),
            "onUpdate:orderBy": c[6] || (c[6] = (a) => u.$emit("update:orderBy", a)),
            additionalHeaders: o(re),
            cellClasses: o(Z),
            colorMetrics: o(X),
            coloredMetrics: o(oe),
            columns: q.value,
            comparisonColumnKeys: o(p),
            detailsRows: o(n),
            inversedKpis: o(P),
            dragColumns: o(j),
            orderBy: o(D),
            orderColumnType: o(A)[o(D)[0][0]].type,
            primaryColumn: o(T),
            rows: o(z),
            showRowNumber: !1,
            showTopTotal: o(le),
            showTotal: o(L),
            showNoDataMessage: !0,
            noDataMessage: u.noDataMessage,
            style: se(I.value)
          }, {
            colorizeLabel: k(({ enabled: a }) => [
              m(u.$slots, "colorizeLabel", { enabled: a }, void 0, !0)
            ]),
            column: k(({ columnKey: a, isGhost: f }) => [
              a in q.value ? m(u.$slots, "column", {
                key: 0,
                columnKey: a,
                isGhost: f
              }, void 0, !0) : w("", !0)
            ]),
            additionalHeader: k(({ additionalHeader: a, columnKey: f }) => [
              m(u.$slots, "additionalHeader", {
                additionalHeader: a,
                columnKey: f
              }, void 0, !0)
            ]),
            topTotal: k(({ columnKey: a, subcolumnKey: f, values: S }) => [
              a in q.value ? m(u.$slots, "topTotal", {
                key: 0,
                columnKey: a,
                subcolumnKey: f,
                values: S
              }, void 0, !0) : w("", !0)
            ]),
            secondaryColumn: k(({ columnKey: a, subcolumnKey: f }) => [
              a in q.value ? m(u.$slots, "secondaryColumn", {
                key: 0,
                columnKey: a,
                subcolumnKey: f
              }, void 0, !0) : w("", !0)
            ]),
            row: k(({ columnKey: a, index: f, row: S, spanIndex: B, subcolumnKey: _, subindex: V, value: G }) => [
              a in q.value ? m(u.$slots, "row", {
                key: 0,
                columnKey: a,
                index: f,
                row: S,
                spanIndex: B,
                subcolumnKey: _,
                subindex: V,
                value: G
              }, void 0, !0) : w("", !0)
            ]),
            total: k(({ columnKey: a, subcolumnKey: f, values: S }) => [
              a in q.value ? m(u.$slots, "total", {
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
const ct = /* @__PURE__ */ Me(ut, [["__scopeId", "data-v-157d1b2f"]]);
export {
  Ae as S,
  ct as T,
  _e as a,
  Be as b
};
