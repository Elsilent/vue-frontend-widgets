import { defineComponent as ue, toRefs as _e, computed as L, openBlock as d, createElementBlock as c, normalizeClass as q, unref as o, withModifiers as fe, createElementVNode as De, normalizeStyle as ie, ref as b, onUnmounted as Ue, onMounted as Fe, watch as ge, nextTick as Be, withMemo as Ge, renderSlot as m, createBlock as Te, createCommentVNode as w, createTextVNode as ye, Fragment as S, renderList as Z, createVNode as Me, toDisplayString as ze, withCtx as z, createSlots as Pe, provide as We, inject as Ye, onBeforeUnmount as Je, mergeProps as Ve } from "vue";
import { _ as Se } from "./_plugin-vue_export-helper-dad06003.js";
import { D as Qe } from "./datetime-31a2b505.js";
import { I as Ze } from "./Icon-1e0f2d3b.js";
import { _ as Le, b as ke, u as Ee, a as se, d as pe, i as xe, c as Ke, e as et, f as tt, E as ot, w as lt, g as at } from "./popper-1247c27c.js";
const st = { class: "scrollbar" }, rt = /* @__PURE__ */ ue({
  __name: "ScrollableArea",
  props: {
    active: { type: Boolean },
    mode: {},
    thumbOffset: {},
    thumbSize: {}
  },
  emits: ["mousedown"],
  setup(k, { emit: C }) {
    const O = k, { active: $, mode: I, thumbOffset: W, thumbSize: D } = _e(O), h = L(() => {
      const [i, H] = I.value === "vertical" ? ["top", "height"] : ["left", "width"];
      return {
        [i]: `calc(3px + ${W.value} * (100% - ${D.value} - 6px))`,
        [H]: `${D.value}`
      };
    });
    return (i, H) => (d(), c("div", {
      class: q(["scrollable-area", { active: o($), [o(I)]: !0 }]),
      onMousedown: H[0] || (H[0] = fe((M) => C("mousedown", M), ["stop"]))
    }, [
      De("div", st, [
        De("div", {
          class: "thumb",
          style: ie(h.value)
        }, null, 4)
      ])
    ], 34));
  }
});
const Re = /* @__PURE__ */ Se(rt, [["__scopeId", "data-v-56aba386"]]), nt = /* @__PURE__ */ ue({
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
    updateKey: {}
  },
  emits: ["update:scrollPosition"],
  setup(k, { emit: C }) {
    const O = k, { mode: $, relativeTo: I, scrollPosition: W, scrollHeightDelta: D, scrollWidthDelta: h, staticPosition: i } = _e(O), H = b(!1), M = b(0), T = b(0), A = b(0), _ = b(0), B = b(), K = b(), f = b(), le = b(), G = b(), Y = b(0), P = b(0), y = b(), U = L(() => Y.value / (_.value - T.value)), x = L(
      () => `max(56px, (100% - 14px) * ${T.value / _.value})`
    ), ee = L(
      () => `max(56px, (100% - 14px) * ${M.value / A.value})`
    ), de = L(() => P.value / (A.value - M.value)), F = b();
    Ue(() => {
      X.disconnect(), me.disconnect();
    });
    const R = () => {
      B.value && (y.value !== void 0 && (clearTimeout(y.value), y.value = void 0), H.value = !1, B.value = void 0);
    }, re = () => I != null && I.value ? I.value() : F.value, oe = (u) => {
      const V = re();
      V && V.scrollTo(u);
    }, ce = (u) => {
      oe({
        left: ((le == null ? void 0 : le.value) ?? 0) + u * _.value / (T.value - h.value)
      });
    }, ve = (u) => {
      oe({
        top: ((G == null ? void 0 : G.value) ?? 0) + u * A.value / (M.value - D.value)
      });
    }, ne = (u) => {
      if (B.value) {
        switch (B.value) {
          case "horizontal":
            ce(u.clientX - ((K == null ? void 0 : K.value) ?? 0));
            break;
          case "vertical":
            ve(u.clientY - ((f == null ? void 0 : f.value) ?? 0));
            break;
        }
        u.preventDefault();
      }
    }, n = () => {
      B.value = void 0, Ce(), window.removeEventListener("mousemove", ne), window.removeEventListener("mouseup", n);
    }, v = (u, V) => {
      R(), H.value = !0, B.value = V;
      const Q = re();
      switch (B.value) {
        case "horizontal":
          K.value = u.clientX, le.value = (Q == null ? void 0 : Q.scrollLeft) ?? 0;
          break;
        case "vertical":
          f.value = u.clientY, G.value = (Q == null ? void 0 : Q.scrollTop) ?? 0;
          break;
      }
      window.addEventListener("mousemove", ne), window.addEventListener("mouseup", n);
    }, l = (u) => {
      M.value !== u.clientHeight && (M.value = u.clientHeight);
    }, p = (u) => {
      T.value !== u.clientWidth && (T.value = u.clientWidth);
    }, E = (u) => {
      A.value !== u.scrollHeight && (A.value = u.scrollHeight);
    }, J = (u) => {
      _.value !== u.scrollWidth && (_.value = u.scrollWidth);
    }, ae = (u) => {
      Y.value = u.scrollLeft, C("update:scrollPosition", {
        left: Y.value,
        top: P.value
      });
    }, te = (u) => {
      P.value = u.scrollTop, C("update:scrollPosition", {
        left: Y.value,
        top: P.value
      });
    }, j = () => {
      const u = re();
      u && (l(u), p(u), E(u), J(u));
    }, X = new MutationObserver(() => j()), me = new ResizeObserver(() => j()), he = (u) => {
      ae(u.target), te(u.target);
    }, Ce = () => {
      j(), !B.value && (R(), H.value = !0, y.value = window.setTimeout(() => {
        H.value = !1;
      }, 2500));
    }, we = () => {
      X.disconnect(), me.disconnect();
      const u = re();
      u && (X.observe(u, {
        childList: !0,
        subtree: !0
      }), me.observe(u));
    };
    return Fe(() => {
      we();
    }), ge(I, () => we()), ge(
      W,
      (u) => {
        Y.value = u.left, P.value = u.top, Be(() => oe(u));
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (u, V) => (d(), c("div", {
      class: q(["scrollable", { [`mode-${o($)}`]: !0, static: o(i) }])
    }, [
      u.optimized ? Ge([u.updateKey], () => (d(), c("div", {
        class: q(["scrollable-content", u.contentClass]),
        ref_key: "content",
        ref: F,
        key: u.updateKey,
        onMousemove: Ce,
        onScroll: he
      }, [
        m(u.$slots, "default", {}, void 0, !0)
      ], 34)), V, 0) : (d(), c("div", {
        key: 1,
        class: q(["scrollable-content", u.contentClass]),
        ref_key: "content",
        ref: F,
        onMousemove: Ce,
        onScroll: he
      }, [
        m(u.$slots, "default", {}, void 0, !0)
      ], 34)),
      o($) !== "vertical" ? (d(), Te(Re, {
        key: 2,
        onMousedown: V[1] || (V[1] = fe((Q) => v(Q, "horizontal"), ["stop"])),
        active: _.value > T.value && (H.value || B.value === "horizontal"),
        class: q({ "scrollbar-visible": _.value > T.value }),
        thumbOffset: U.value,
        thumbSize: x.value,
        mode: "horizontal"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0),
      o($) === "both-top" ? (d(), Te(Re, {
        key: 3,
        onMousedown: V[2] || (V[2] = fe((Q) => v(Q, "horizontal"), ["stop"])),
        active: _.value > T.value && (H.value || B.value === "horizontal"),
        class: q({ "scrollbar-visible": _.value > T.value }),
        thumbOffset: U.value,
        thumbSize: x.value,
        mode: "horizontal-top"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0),
      o($) !== "horizontal" ? (d(), Te(Re, {
        key: 4,
        onMousedown: V[3] || (V[3] = fe((Q) => v(Q, "vertical"), ["stop"])),
        active: A.value > M.value && (H.value || B.value === "vertical"),
        class: q({ "scrollbar-visible": A.value > M.value }),
        thumbOffset: de.value,
        thumbSize: ee.value,
        mode: "vertical"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0)
    ], 2));
  }
});
const it = /* @__PURE__ */ Se(nt, [["__scopeId", "data-v-21092b38"]]), ut = ["onClick", "onMousedown", "data-column"], dt = ["onClick"], ct = ["data-column"], vt = {
  key: 0,
  class: "cell column cell-additional-header row-number"
}, pt = ["data-additionalHeader", "data-column"], ft = {
  key: 0,
  class: "cell total top-total row-number"
}, mt = ["data-column", "data-subcolumn-index"], ht = ["data-column"], bt = ["onClick", "data-column", "data-subcolumn-index"], gt = ["data-column", "data-primary-key"], yt = ["data-column", "data-primary-key", "data-subcolumn-index"], Ct = ["innerHTML"], wt = {
  key: 0,
  class: "cell total row-number"
}, $t = ["data-column", "data-subcolumn-index"], Tt = ["data-column"], Mt = /* @__PURE__ */ ue({
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
  setup(k, { emit: C }) {
    const O = k, {
      additionalHeaders: $,
      cellClasses: I,
      colorMetrics: W,
      coloredMetrics: D,
      columns: h,
      comparisonColumnKeys: i,
      detailsRows: H,
      dragColumns: M,
      inversedKpis: T,
      noDataMessage: A,
      orderBy: _,
      orderColumnType: B,
      primaryColumn: K,
      rows: f,
      showNoDataMessage: le,
      showRowNumber: G,
      showTotal: Y,
      showTopTotal: P
    } = _e(O), y = b(), U = b(), x = b(0), ee = b(0), de = b(0), F = b({}), R = L(
      () => Object.entries(h.value).filter(([t, { visible: a }]) => a).map(([t, a]) => t)
    ), re = L(
      () => R.value.length + (G.value ? 1 : 0)
    ), oe = L(() => x.value > 3), ce = L(
      () => Object.values(f.value).reduce((t, a) => {
        for (const [e, r] of Object.entries(h.value))
          if (r.type !== "string")
            if (i != null && i.value && (r.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(a[e]).reduce((s, [g, N]) => (s[g] = parseFloat(N), s), {}));
              for (const s in t[e])
                t[e][s] > a[e][s] && (t[e][s] = parseFloat(a[e][s]));
            } else
              (!(e in t) || t[e] > a[e]) && (t[e] = parseFloat(a[e]));
        return t;
      }, {})
    ), ve = L(
      () => Object.values(f.value).reduce((t, a) => {
        for (const [e, r] of Object.entries(h.value))
          if (r.type !== "string")
            if (i != null && i.value && (r.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(a[e]).reduce((s, [g, N]) => (s[g] = parseFloat(N), s), {}));
              for (const s in t[e])
                t[e][s] < a[e][s] && (t[e][s] = parseFloat(a[e][s]));
            } else
              (!(e in t) || t[e] < a[e]) && (t[e] = parseFloat(a[e]));
        return t;
      }, {})
    ), ne = L(() => i != null && i.value ? R.value.map((t) => h.value[t].rowspan ?? 1).reduce((t, a) => t > a ? t : a) : 1), n = L(
      () => Object.values(f.value).sort((t, a) => {
        const e = (() => {
          const r = X(
            _.value[0].reduce((g, N) => g[N], t),
            B.value
          ), s = X(
            _.value[0].reduce((g, N) => g[N], a),
            B.value
          );
          return r > s ? 1 : r < s ? -1 : 0;
        })();
        return _.value[1] ? -e : e;
      }).reduce((t, a, e) => (t.push({
        ...a,
        rowInfo: {
          index: e,
          detailable: !0
        }
      }), H.value[a[K.value]] && t.push(
        ...Object.entries(H.value[a[K.value]]).map(
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
    ), v = L(() => {
      let t = 0;
      for (const e of R.value) {
        const r = h.value[e];
        r.colspan && (i != null && i.value) ? t += r.colspan : t++;
      }
      let a = `repeat(${t}, auto)`;
      return G.value && (a = `min-content ${a}`), {
        "grid-template-columns": a
      };
    }), l = (t) => F.value[t] ? F.value[t].height : 0, p = (t, a, e, r) => {
      const s = {
        ...I.value,
        even: a % 2 === 0
      };
      if (W.value) {
        const g = (() => !T || !T.value ? "positive" : T.value.includes(e) ? "negative" : "positive")();
        s[`color-intensity-${t.rowInfo.detailable ? E(t[e], e, r) : "none"}`] = !0, s[`color-${g}`] = !0, r !== void 0 && i && i.value && i.value[r].includes("difference") ? s.colored = !1 : s.colored = he(e) >= 0;
      }
      return s;
    }, E = (t, a, e) => {
      if (h.value[a].type === "string")
        return;
      let r = t || 0, s = ve.value[a] || 0, g = ce.value[a] || 0;
      if (i && i.value && e !== void 0 && (r = r[i.value[e]], s = s[i.value[e]], g = g[i.value[e]]), s === g)
        return 0;
      const N = Math.round((r - g) * 10 / (s - g));
      return N > 10 ? 10 : N < 1 ? 0 : N;
    }, J = (t, a) => {
      const e = h.value[t], r = [t];
      a !== void 0 && (i && i.value ? r.push(i.value[a]) : r.push(a.toString()));
      const s = _.value[0] ? _.value[0].every(
        (g, N) => g === r[N]
      ) : !1;
      return {
        "column-main-extended": a === void 0 && (e.rowspan ?? 0) > 1,
        dragged: y.value ? R.value[y.value] === t : !1,
        "drag-mode": oe.value,
        orderable: !(i && i.value) || (e.colspan ?? 1) === 1 || a !== void 0,
        "ordered-by": s,
        [`order-direction-${_.value[1] ? "desc" : "asc"}`]: s
      };
    }, ae = (t) => {
      const a = {};
      if (F.value[t])
        if (y.value !== void 0 && R.value[y.value] === t) {
          const { height: e, left: r, width: s } = F.value[t];
          a.left = `${Math.floor(r + de.value - ee.value)}px`, a.height = `${e + 1}px`, a.width = `${Math.round(s)}px`;
        } else {
          const e = R.value.indexOf(t);
          let r = (() => {
            if (y.value === void 0 || U.value === void 0)
              return 0;
            if (y.value < e) {
              if (U.value >= e)
                return -F.value[R.value[y.value]].width;
            } else if (U.value <= e)
              return F.value[R.value[y.value]].width;
            return 0;
          })();
          const { height: s, left: g, width: N } = F.value[t];
          a.left = `${Math.floor(g + r)}px`, a.height = `${s + 1}px`, a.width = `${Math.floor(N)}px`;
        }
      return a;
    }, te = (t) => {
      const a = h.value[t], e = {};
      return i && i.value && (a.colspan && (e["grid-column-end"] = `span ${a.colspan}`), a.rowspan && (e["grid-row-end"] = `span ${a.rowspan}`)), e;
    }, j = (t) => i && i.value ? i.value[t] : void 0, X = (t, a) => {
      switch (a) {
        case "float":
        case "int":
        case "money":
        case "money_capped":
        case "percent":
        case "time":
          return parseFloat(t ?? 0);
        case "date":
          return Qe.fromISO(t).toUnixInteger();
        default:
          return t;
      }
    }, me = (t) => t.subindex === void 0 ? t.index + 1 : `${t.index + 1}.${t.subindex + 1}`, he = (t) => D.value.findIndex((a) => a === t), Ce = (t) => W.value && !["date", "string"].includes(h.value[t].type), we = (t, a) => {
      if (i && i.value && h.value[t].colspan && a === void 0 || y.value !== void 0 && oe.value && R.value[y.value] === t)
        return;
      const e = [t];
      a !== void 0 && (i && i.value ? e.push(i.value[a]) : e.push(a.toString()));
      const r = e.every(
        (g, N) => g === _.value[0][N]
      ), s = (() => r ? !_.value[1] : h.value[t].type !== "string")();
      C("update:orderBy", [e, s]);
    }, u = (t, a) => {
      M.value && (y.value = R.value.indexOf(t), U.value = y.value, x.value = 0, ee.value = a.clientX, de.value = a.clientX, window.addEventListener("mousemove", V), window.addEventListener("mouseup", Q));
    }, V = (t) => {
      if (y.value === void 0)
        return;
      x.value++, de.value = t.clientX;
      const a = Object.entries(h.value).filter(([N, be]) => be.visible).map(([N]) => N).map((N, be) => ({
        columnIndex: parseInt(be.toString()),
        sizing: F.value[N]
      })), e = a[y.value].sizing, r = e.width / 2, g = e.left + de.value - ee.value;
      U.value = (() => {
        for (const { columnIndex: N, sizing: be } of a)
          if (g + r - be.left - be.width < 0)
            return N;
        return a.length;
      })();
    }, Q = (t) => {
      if (y.value === void 0 || U.value === void 0)
        return;
      oe.value && U.value !== y.value && C("move:column", {
        from: y.value,
        to: U.value
      }), U.value = void 0, x.value = 0, y.value = void 0, window.removeEventListener("mousemove", V), window.removeEventListener("mouseup", Q);
    }, Xe = (t) => {
      he(t) >= 0 ? C("removeColoredMetric", t) : C("addColoredMetric", t);
    }, $e = b({}), qe = (t, a) => {
      a && ($e.value[t] = a);
    }, Oe = b(), He = () => {
      if (!Oe.value)
        return;
      const t = Oe.value.getBoundingClientRect();
      F.value = Object.entries(h.value).reduce(
        (a, [e, r]) => {
          if (r.visible && $e.value[e]) {
            const s = $e.value[e].getBoundingClientRect();
            a[e] = {
              height: s.height,
              left: s.left - t.left,
              width: s.width
            };
          }
          return a;
        },
        {}
      );
    }, Ie = new ResizeObserver(() => {
      He();
    });
    return ge(
      $e,
      () => {
        Ie.disconnect();
        for (const t of Object.values($e.value))
          Ie.observe(t);
        He();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), He(), (t, a) => (d(), c("div", {
      class: q(["table", {
        "with-secondary": !!o(i) && R.value.some((e) => (o(h)[e].colspan || 1) !== 1)
      }]),
      ref_key: "table",
      ref: Oe,
      style: ie(v.value)
    }, [
      o(G) ? (d(), c("div", {
        key: 0,
        class: "cell column column-main row-number",
        style: ie(ne.value > 1 ? { "grid-row-end": `span ${ne.value}` } : void 0)
      }, [
        m(t.$slots, "columnRowNumber", {}, () => [
          ye("#")
        ], !0)
      ], 4)) : w("", !0),
      (d(!0), c(S, null, Z(R.value, (e) => (d(), c(S, null, [
        o(h)[e].visible ? (d(), c("div", {
          key: 0,
          class: q(["cell column column-main", J(e)]),
          ref_for: !0,
          ref: (r) => qe(e, r),
          onClick: fe(() => we(e), ["stop"]),
          onMousedown: (r) => u(e, r),
          style: ie(te(e)),
          "data-column": e
        }, [
          m(t.$slots, "column", {
            columnKey: e,
            isGhost: !1
          }, void 0, !0),
          Ce(e) ? (d(), c("div", {
            key: 0,
            class: "toggle-colored no-spacing",
            onClick: fe(() => Xe(e), ["stop"]),
            style: ie({ top: `${l(e)}px` })
          }, [
            m(t.$slots, "colorizeLabel", {
              enabled: he(e) >= 0
            }, void 0, !0)
          ], 12, dt)) : w("", !0)
        ], 46, ut)) : w("", !0)
      ], 64))), 256)),
      o(M) ? (d(!0), c(S, { key: 1 }, Z(R.value, (e) => (d(), c(S, null, [
        o(h)[e].visible ? (d(), c("div", {
          key: 0,
          class: q(["cell column column-main column-ghost", J(e)]),
          style: ie(ae(e)),
          "data-column": e
        }, [
          m(t.$slots, "column", {
            columnKey: e,
            isGhost: !0
          }, void 0, !0)
        ], 14, ct)) : w("", !0)
      ], 64))), 256)) : w("", !0),
      (d(!0), c(S, null, Z(o($), (e, r) => (d(), c(S, null, [
        o(G) ? (d(), c("div", vt, [
          Me(Ze, {
            value: e.icon
          }, null, 8, ["value"])
        ])) : w("", !0),
        (d(!0), c(S, null, Z(R.value, (s) => (d(), c("div", {
          class: q(["cell column cell-additional-header", [`cell-additional-header-${s}`]]),
          "data-additionalHeader": r,
          "data-column": s
        }, [
          m(t.$slots, "additionalHeader", {
            additionalHeader: r,
            columnKey: s
          }, void 0, !0)
        ], 10, pt))), 256))
      ], 64))), 256)),
      o(P) && o(Y) ? (d(), c(S, { key: 2 }, [
        o(G) ? (d(), c("div", ft, [
          m(t.$slots, "topTotalRowNumber", {}, void 0, !0)
        ])) : w("", !0),
        (d(!0), c(S, null, Z(R.value, (e) => (d(), c(S, null, [
          o(h)[e].visible ? (d(), c(S, { key: 0 }, [
            o(i) && (o(h)[e].colspan || 1) !== 1 ? (d(!0), c(S, { key: 0 }, Z(o(h)[e].colspan, (r) => (d(), c("div", {
              class: "cell total top-total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              m(t.$slots, "topTotal", {
                columnKey: e,
                subcolumnKey: j(r - 1),
                values: n.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, mt))), 256)) : (d(), c("div", {
              key: 1,
              class: "cell total top-total",
              "data-column": e
            }, [
              m(t.$slots, "topTotal", {
                columnKey: e,
                values: n.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, ht))
          ], 64)) : w("", !0)
        ], 64))), 256))
      ], 64)) : w("", !0),
      o(i) ? (d(!0), c(S, { key: 3 }, Z(R.value, (e) => (d(), c(S, null, [
        o(h)[e].visible && o(h)[e].colspan ? (d(!0), c(S, { key: 0 }, Z(o(h)[e].colspan, (r) => (d(), c("div", {
          class: q(["cell column column-secondary", J(e, r - 1)]),
          onClick: fe(() => we(e, r - 1), ["stop"]),
          "data-column": e,
          "data-subcolumn-index": r - 1
        }, [
          m(t.$slots, "secondaryColumn", {
            columnKey: e,
            subcolumnKey: j(r - 1)
          }, void 0, !0)
        ], 10, bt))), 256)) : w("", !0)
      ], 64))), 256)) : w("", !0),
      (d(!0), c(S, null, Z(n.value, (e, r) => (d(), c(S, null, [
        o(G) ? (d(), c("div", {
          key: 0,
          class: q(["cell row-number", { even: r % 2 === 0 }])
        }, [
          m(t.$slots, "rowNumber", {
            value: me(e.rowInfo)
          }, () => [
            ye(ze(me(e.rowInfo)), 1)
          ], !0)
        ], 2)) : w("", !0),
        (d(!0), c(S, null, Z(R.value, (s) => (d(), c(S, null, [
          !o(i) || (o(h)[s].colspan || 1) === 1 ? (d(), c("div", {
            key: 0,
            class: q(["cell", p(e, r, s)]),
            "data-column": s,
            "data-primary-key": e[o(K)]
          }, [
            m(t.$slots, `row-${s}`, {
              columnKey: s,
              index: r,
              row: e,
              subindex: e.rowInfo.subindex,
              value: e[s]
            }, void 0, !0)
          ], 10, gt)) : (d(!0), c(S, { key: 1 }, Z(o(h)[s].colspan, (g) => (d(), c("div", {
            class: q(["cell", p(e, r, s, g - 1)]),
            "data-column": s,
            "data-primary-key": e[o(K)],
            "data-subcolumn-index": g - 1
          }, [
            m(t.$slots, `row-${s}`, {
              columnKey: s,
              index: r,
              row: e,
              spanIndex: o(i) ? o(i)[g - 1] : g - 1,
              subcolumnKey: j(g - 1),
              subindex: e.rowInfo.subindex,
              value: e[s] ? e[s][o(i) ? o(i)[g - 1] : g - 1] : void 0
            }, void 0, !0)
          ], 10, yt))), 256))
        ], 64))), 256))
      ], 64))), 256)),
      n.value.length === 0 && o(le) ? (d(), c("div", {
        class: "cell odd no-data",
        key: "row-no-data",
        style: ie({ "grid-column": `1 / span ${re.value}` }),
        innerHTML: o(A)
      }, null, 12, Ct)) : w("", !0),
      o(Y) ? (d(), c(S, { key: 5 }, [
        o(G) ? (d(), c("div", wt, [
          m(t.$slots, "totalRowNumber", {}, () => [
            ye("#")
          ], !0)
        ])) : w("", !0),
        (d(!0), c(S, null, Z(R.value, (e) => (d(), c(S, null, [
          o(h)[e].visible ? (d(), c(S, { key: 0 }, [
            o(i) && (o(h)[e].colspan || 1) !== 1 ? (d(!0), c(S, { key: 0 }, Z(o(h)[e].colspan, (r) => (d(), c("div", {
              class: "cell total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              m(t.$slots, "total", {
                columnKey: e,
                subcolumnKey: j(r - 1),
                values: n.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, $t))), 256)) : (d(), c("div", {
              key: 1,
              class: "cell total",
              "data-column": e
            }, [
              m(t.$slots, "total", {
                columnKey: e,
                values: n.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, Tt))
          ], 64)) : w("", !0)
        ], 64))), 256))
      ], 64)) : w("", !0)
    ], 6));
  }
});
const je = /* @__PURE__ */ Se(Mt, [["__scopeId", "data-v-457354a2"]]), _t = /* @__PURE__ */ ue({
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
  setup(k) {
    const C = k, {
      additionalHeaders: O,
      cellClasses: $,
      colorMetrics: I,
      coloredMetrics: W,
      columns: D,
      comparisonColumnKeys: h,
      detailsRows: i,
      dragColumns: H,
      fixedColumnNumber: M,
      inversedKpis: T,
      orderBy: A,
      primaryColumn: _,
      rows: B,
      scrollPosition: K,
      showRowNumber: f,
      showTopTotal: le,
      showTotal: G
    } = _e(C), Y = b(0), P = b(), y = b(0), U = b(0);
    Ue(() => ve.disconnect());
    const x = L(
      () => Object.keys(D.value).slice(0, M.value).reduce((n, v) => (n[v] = D.value[v], n), {})
    ), ee = L(
      () => Object.keys(D.value).slice(M.value).reduce((n, v) => (n[v] = D.value[v], n), {})
    ), de = L(
      () => Object.keys(i.value).reduce(
        (n, v) => n + v.length,
        Object.values(B.value).length
      )
    ), F = L(() => {
      var v, l, p;
      const n = {};
      return (v = P.value) != null && v.main && (n["--header-main-height"] = `${P.value.main}px`), (l = P.value) != null && l.secondary && (n["--header-secondary-height"] = `${P.value.secondary}px`), Y.value && (n["--fixed-width"] = `${Y.value}px`), (p = P.value) != null && p.total && (n["--header-total-height"] = `${P.value.total}px`), y.value ? (n["--total-height"] = `${y.value}px`, n["--bottom-height"] = n["--total-height"]) : (de.value === 1 ? n["--total-scrollbar-display"] = "none" : n["--total-height"] = "20px", n["--bottom-height"] = "0px"), n;
    }), R = b(), re = b(), oe = b(!1), ce = () => {
      if (oe.value)
        return;
      oe.value = !0, Y.value = 0, P.value = void 0, y.value = 0;
      const n = (v) => {
        const l = {
          hasSecondary: !1,
          mainColumnHeight: 0,
          secondaryColumnHeight: 0,
          totalColumnHeight: 0,
          totalHeight: 0,
          width: 0
        };
        if (!v)
          return l;
        const p = [
          ...v.querySelectorAll(".cell.column-main:not(.column-main-extended)")
        ], E = [
          ...v.querySelectorAll(".cell.column-main.column-main-extended")
        ], J = v.querySelector(".cell.column-secondary"), ae = v.querySelector(".cell.total"), te = [];
        return p.length > 0 && (l.mainColumnHeight = p[0].offsetHeight, l.width = p.reduce((j, { offsetWidth: X }) => j + X, 0), te.push(l.mainColumnHeight)), J && (l.hasSecondary = !0, l.secondaryColumnHeight = J.offsetHeight, te.push(l.secondaryColumnHeight)), E.length > 0 && (l.width = E.reduce((j, { offsetWidth: X }) => j + X, 0), p.length === 0 && (l.mainColumnHeight = E[0].offsetHeight, te.push(l.mainColumnHeight))), l.totalColumnHeight = te.reduce((j, X) => j + X + 1, -1), ae && (l.totalHeight = ae.offsetHeight), l;
      };
      Be(() => {
        var p, E;
        const v = n((p = R.value) == null ? void 0 : p.$el), l = n((E = re.value) == null ? void 0 : E.$el);
        if (l.hasSecondary)
          Y.value = v.width, P.value = {
            main: l.mainColumnHeight,
            secondary: l.secondaryColumnHeight,
            total: Math.max(v.totalColumnHeight, l.totalColumnHeight)
          }, y.value = v.totalHeight;
        else {
          const J = Math.max(
            v.totalColumnHeight,
            l.totalColumnHeight
          );
          Y.value = v.width, P.value = {
            main: J,
            total: J
          }, y.value = v.totalHeight;
        }
        oe.value = !1;
      });
    }, ve = new ResizeObserver(() => ce()), ne = b();
    return Be(() => {
      ve.disconnect(), ne.value && ve.observe(ne.value);
    }), ge(B, (n, v) => {
      U.value = Math.random(), v.length || ce();
    }), ge(O, () => {
      U.value = Math.random();
    }), ge(D, () => {
      U.value = Math.random(), ce();
    }), (n, v) => (d(), c("div", {
      class: "table-container",
      ref_key: "tableContainer",
      ref: ne
    }, [
      Me(it, {
        "onUpdate:scrollPosition": v[7] || (v[7] = (l) => n.$emit("update:scrollPosition", l)),
        scrollHeightDelta: (P.value ? P.value.total : 0) + y.value - 40,
        scrollPosition: o(K),
        scrollWidthDelta: Y.value,
        style: ie(F.value),
        updateKey: U.value,
        mode: "both-top",
        optimized: ""
      }, {
        default: z(() => [
          Me(je, {
            class: "fixed",
            ref_key: "fixedTable",
            ref: R,
            onAddColoredMetric: v[0] || (v[0] = (l) => n.$emit("addColoredMetric", l)),
            onRemoveColoredMetric: v[1] || (v[1] = (l) => n.$emit("removeColoredMetric", l)),
            "onUpdate:orderBy": v[2] || (v[2] = (l) => n.$emit("update:orderBy", l)),
            additionalHeaders: o(O),
            cellClasses: o($),
            colorMetrics: o(I),
            coloredMetrics: o(W),
            columns: x.value,
            comparisonColumnKeys: o(h),
            detailsRows: o(i),
            dragColumns: !1,
            inversedKpis: o(T),
            orderBy: o(A),
            orderColumnType: o(D)[o(A)[0][0]].type,
            primaryColumn: o(_),
            rows: o(B),
            showNoDataMessage: !0,
            showRowNumber: o(f),
            showTopTotal: o(le),
            showTotal: o(G)
          }, Pe({
            columnRowNumber: z(() => [
              m(n.$slots, "columnRowNumber", {}, () => [
                ye("#")
              ], !0)
            ]),
            colorizeLabel: z(({ enabled: l }) => [
              m(n.$slots, "colorizeLabel", { enabled: l }, void 0, !0)
            ]),
            column: z(({ columnKey: l, isGhost: p }) => [
              l in x.value ? m(n.$slots, "column", {
                key: 0,
                columnKey: l,
                isGhost: p
              }, void 0, !0) : w("", !0)
            ]),
            additionalHeader: z(({ additionalHeader: l, columnKey: p }) => [
              m(n.$slots, "additionalHeader", {
                additionalHeader: l,
                columnKey: p
              }, void 0, !0)
            ]),
            topTotal: z(({ columnKey: l, subcolumnKey: p, values: E }) => [
              l in x.value ? m(n.$slots, "topTotal", {
                key: 0,
                columnKey: l,
                subcolumnKey: p,
                values: E
              }, void 0, !0) : w("", !0)
            ]),
            topTotalRowNumber: z(() => [
              m(n.$slots, "topTotalRowNumber", {}, void 0, !0)
            ]),
            secondaryColumn: z(({ columnKey: l, subcolumnKey: p }) => [
              l in x.value ? m(n.$slots, "secondaryColumn", {
                key: 0,
                columnKey: l,
                subcolumnKey: p
              }, void 0, !0) : w("", !0)
            ]),
            rowNumber: z(({ value: l }) => [
              m(n.$slots, "rowNumber", { value: l }, void 0, !0)
            ]),
            totalRowNumber: z(() => [
              m(n.$slots, "totalRowNumber", {}, () => [
                ye("#")
              ], !0)
            ]),
            total: z(({ columnKey: l, subcolumnKey: p, values: E }) => [
              l in x.value ? m(n.$slots, "total", {
                key: 0,
                columnKey: l,
                subcolumnKey: p,
                values: E
              }, void 0, !0) : w("", !0)
            ]),
            _: 2
          }, [
            Z(Object.keys(x.value), (l) => ({
              name: `row-${l}`,
              fn: z(({ columnKey: p, index: E, row: J, spanIndex: ae, subcolumnKey: te, subindex: j, value: X }) => [
                m(n.$slots, "row-" + p, {
                  columnKey: p,
                  index: E,
                  row: J,
                  spanIndex: ae,
                  subcolumnKey: te,
                  subindex: j,
                  value: X
                }, void 0, !0)
              ])
            }))
          ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "inversedKpis", "orderBy", "orderColumnType", "primaryColumn", "rows", "showRowNumber", "showTopTotal", "showTotal"]),
          Me(je, {
            ref_key: "scrollableTable",
            ref: re,
            onAddColoredMetric: v[3] || (v[3] = (l) => n.$emit("addColoredMetric", l)),
            "onMove:column": v[4] || (v[4] = ({ from: l, to: p }) => n.$emit("move:column", { from: l + o(M), to: p + o(M) })),
            onRemoveColoredMetric: v[5] || (v[5] = (l) => n.$emit("removeColoredMetric", l)),
            "onUpdate:orderBy": v[6] || (v[6] = (l) => n.$emit("update:orderBy", l)),
            additionalHeaders: o(O),
            cellClasses: o($),
            colorMetrics: o(I),
            coloredMetrics: o(W),
            columns: ee.value,
            comparisonColumnKeys: o(h),
            detailsRows: o(i),
            inversedKpis: o(T),
            dragColumns: o(H),
            orderBy: o(A),
            orderColumnType: o(D)[o(A)[0][0]].type,
            primaryColumn: o(_),
            rows: o(B),
            showRowNumber: !1,
            showTopTotal: o(le),
            showTotal: o(G),
            showNoDataMessage: !0,
            noDataMessage: n.noDataMessage,
            style: ie(F.value)
          }, Pe({
            colorizeLabel: z(({ enabled: l }) => [
              m(n.$slots, "colorizeLabel", { enabled: l }, void 0, !0)
            ]),
            column: z(({ columnKey: l, isGhost: p }) => [
              l in ee.value ? m(n.$slots, "column", {
                key: 0,
                columnKey: l,
                isGhost: p
              }, void 0, !0) : w("", !0)
            ]),
            additionalHeader: z(({ additionalHeader: l, columnKey: p }) => [
              m(n.$slots, "additionalHeader", {
                additionalHeader: l,
                columnKey: p
              }, void 0, !0)
            ]),
            topTotal: z(({ columnKey: l, subcolumnKey: p, values: E }) => [
              l in ee.value ? m(n.$slots, "topTotal", {
                key: 0,
                columnKey: l,
                subcolumnKey: p,
                values: E
              }, void 0, !0) : w("", !0)
            ]),
            secondaryColumn: z(({ columnKey: l, subcolumnKey: p }) => [
              l in ee.value ? m(n.$slots, "secondaryColumn", {
                key: 0,
                columnKey: l,
                subcolumnKey: p
              }, void 0, !0) : w("", !0)
            ]),
            total: z(({ columnKey: l, subcolumnKey: p, values: E }) => [
              l in ee.value ? m(n.$slots, "total", {
                key: 0,
                columnKey: l,
                subcolumnKey: p,
                values: E
              }, void 0, !0) : w("", !0)
            ]),
            _: 2
          }, [
            Z(Object.keys(ee.value), (l) => ({
              name: `row-${l}`,
              fn: z(({ columnKey: p, index: E, row: J, spanIndex: ae, subcolumnKey: te, subindex: j, value: X }) => [
                m(n.$slots, "row-" + p, {
                  columnKey: p,
                  index: E,
                  row: J,
                  spanIndex: ae,
                  subcolumnKey: te,
                  subindex: j,
                  value: X
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
const Vt = /* @__PURE__ */ Se(_t, [["__scopeId", "data-v-1ab683a6"]]), St = /* @__PURE__ */ ue({
  inheritAttrs: !1
});
function kt(k, C, O, $, I, W) {
  return m(k.$slots, "default");
}
var Ot = /* @__PURE__ */ Le(St, [["render", kt], ["__file", "collection.vue"]]);
const Ht = /* @__PURE__ */ ue({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function Rt(k, C, O, $, I, W) {
  return m(k.$slots, "default");
}
var Nt = /* @__PURE__ */ Le(Ht, [["render", Rt], ["__file", "collection-item.vue"]]);
const Bt = "data-el-collection-item", zt = (k) => {
  const C = `El${k}Collection`, O = `${C}Item`, $ = Symbol(C), I = Symbol(O), W = {
    ...Ot,
    name: C,
    setup() {
      const h = b(null), i = /* @__PURE__ */ new Map();
      We($, {
        itemMap: i,
        getItems: () => {
          const M = o(h);
          if (!M)
            return [];
          const T = Array.from(M.querySelectorAll(`[${Bt}]`));
          return [...i.values()].sort((_, B) => T.indexOf(_.ref) - T.indexOf(B.ref));
        },
        collectionRef: h
      });
    }
  }, D = {
    ...Nt,
    name: O,
    setup(h, { attrs: i }) {
      const H = b(null), M = Ye($, void 0);
      We(I, {
        collectionItemRef: H
      }), Fe(() => {
        const T = o(H);
        T && M.itemMap.set(T, {
          ref: T,
          ...i
        });
      }), Je(() => {
        const T = o(H);
        M.itemMap.delete(T);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: $,
    COLLECTION_ITEM_INJECTION_KEY: I,
    ElCollection: W,
    ElCollectionItem: D
  };
}, Ne = ke({
  trigger: Ee.trigger,
  effect: {
    ...se.effect,
    default: "light"
  },
  type: {
    type: pe(String)
  },
  placement: {
    type: pe(String),
    default: "bottom"
  },
  popperOptions: {
    type: pe(Object),
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
    type: pe([Number, String]),
    default: 0
  },
  maxHeight: {
    type: pe([Number, String]),
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
    type: pe(Object)
  },
  teleported: se.teleported
});
ke({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: xe
  }
});
ke({
  onKeydown: { type: pe(Function) }
});
zt("Dropdown");
const Et = ke({
  trigger: Ee.trigger,
  placement: Ne.placement,
  disabled: Ee.disabled,
  visible: se.visible,
  transition: se.transition,
  popperOptions: Ne.popperOptions,
  tabindex: Ne.tabindex,
  content: se.content,
  popperStyle: se.popperStyle,
  popperClass: se.popperClass,
  enterable: {
    ...se.enterable,
    default: !0
  },
  effect: {
    ...se.effect,
    default: "light"
  },
  teleported: se.teleported,
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
}), Lt = {
  "update:visible": (k) => Ke(k),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0
}, It = "onUpdate:visible", Dt = ue({
  name: "ElPopover"
}), Pt = /* @__PURE__ */ ue({
  ...Dt,
  props: Et,
  emits: Lt,
  setup(k, { expose: C, emit: O }) {
    const $ = k, I = L(() => $[It]), W = et("popover"), D = b(), h = L(() => {
      var f;
      return (f = o(D)) == null ? void 0 : f.popperRef;
    }), i = L(() => [
      {
        width: tt($.width)
      },
      $.popperStyle
    ]), H = L(() => [W.b(), $.popperClass, { [W.m("plain")]: !!$.content }]), M = L(() => $.transition === `${W.namespace.value}-fade-in-linear`), T = () => {
      var f;
      (f = D.value) == null || f.hide();
    }, A = () => {
      O("before-enter");
    }, _ = () => {
      O("before-leave");
    }, B = () => {
      O("after-enter");
    }, K = () => {
      O("update:visible", !1), O("after-leave");
    };
    return C({
      popperRef: h,
      hide: T
    }), (f, le) => (d(), Te(o(ot), Ve({
      ref_key: "tooltipRef",
      ref: D
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
      "popper-class": o(H),
      "popper-style": o(i),
      teleported: f.teleported,
      persistent: f.persistent,
      "gpu-acceleration": o(M),
      "onUpdate:visible": o(I),
      onBeforeShow: A,
      onBeforeHide: _,
      onShow: B,
      onHide: K
    }), {
      content: z(() => [
        f.title ? (d(), c("div", {
          key: 0,
          class: q(o(W).e("title")),
          role: "title"
        }, ze(f.title), 3)) : w("v-if", !0),
        m(f.$slots, "default", {}, () => [
          ye(ze(f.content), 1)
        ])
      ]),
      default: z(() => [
        f.$slots.reference ? m(f.$slots, "reference", { key: 0 }) : w("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var Wt = /* @__PURE__ */ Le(Pt, [["__file", "popover.vue"]]);
const Ae = (k, C) => {
  const O = C.arg || C.value, $ = O == null ? void 0 : O.popperRef;
  $ && ($.triggerRef = k);
};
var jt = {
  mounted(k, C) {
    Ae(k, C);
  },
  updated(k, C) {
    Ae(k, C);
  }
};
const At = "popover", Ut = lt(jt, At), Ft = at(Wt, {
  directive: Ut
});
const Qt = /* @__PURE__ */ ue({
  __name: "Tooltip",
  setup(k) {
    return (C, O) => (d(), Te(o(Ft), null, {
      reference: z(() => [
        m(C.$slots, "reference")
      ]),
      default: z(() => [
        m(C.$slots, "default")
      ]),
      _: 3
    }));
  }
});
export {
  it as S,
  Vt as T,
  Qt as _,
  Re as a,
  je as b
};
