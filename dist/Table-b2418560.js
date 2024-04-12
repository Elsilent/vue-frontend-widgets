import { defineComponent as ye, toRefs as $e, computed as O, openBlock as d, createElementBlock as v, normalizeClass as F, unref as a, withModifiers as ce, createElementVNode as _e, normalizeStyle as se, ref as g, onUnmounted as Be, onMounted as Le, watch as we, nextTick as Re, withMemo as We, renderSlot as p, createBlock as He, createCommentVNode as w, createTextVNode as ge, Fragment as C, renderList as q, createVNode as Ce, toDisplayString as je, withCtx as S } from "vue";
import { _ as Te } from "./_plugin-vue_export-helper-dad06003.js";
import { D as Ee } from "./datetime-31a2b505.js";
import { I as Pe } from "./Icon-8f2ed8ba.js";
const Fe = { class: "scrollbar" }, Ie = /* @__PURE__ */ ye({
  __name: "ScrollableArea",
  props: {
    active: { type: Boolean },
    mode: {},
    thumbOffset: {},
    thumbSize: {}
  },
  emits: ["mousedown"],
  setup(ne, { emit: Q }) {
    const re = ne, { active: Z, mode: A, thumbOffset: te, thumbSize: I } = $e(re), m = O(() => {
      const [i, z] = A.value === "vertical" ? ["top", "height"] : ["left", "width"];
      return {
        [i]: `calc(3px + ${te.value} * (100% - ${I.value} - 6px))`,
        [z]: `${I.value}`
      };
    });
    return (i, z) => (d(), v("div", {
      class: F(["scrollable-area", { active: a(Z), [a(A)]: !0 }]),
      onMousedown: z[0] || (z[0] = ce((_) => Q("mousedown", _), ["stop"]))
    }, [
      _e("div", Fe, [
        _e("div", {
          class: "thumb",
          style: se(m.value)
        }, null, 4)
      ])
    ], 34));
  }
});
const Se = /* @__PURE__ */ Te(Ie, [["__scopeId", "data-v-56aba386"]]), Ue = /* @__PURE__ */ ye({
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
  setup(ne, { emit: Q }) {
    const re = ne, { mode: Z, relativeTo: A, scrollPosition: te, scrollHeightDelta: I, scrollWidthDelta: m, staticPosition: i } = $e(re), z = g(!1), _ = g(0), B = g(0), U = g(0), T = g(0), k = g(), x = g(), K = g(), oe = g(), D = g(), L = g(0), H = g(0), b = g(), W = O(() => L.value / (T.value - B.value)), X = O(
      () => `max(56px, (100% - 14px) * ${B.value / T.value})`
    ), G = O(
      () => `max(56px, (100% - 14px) * ${_.value / U.value})`
    ), ue = O(() => H.value / (U.value - _.value)), N = g();
    Be(() => {
      J.disconnect(), ve.disconnect();
    });
    const y = () => {
      k.value && (b.value !== void 0 && (clearTimeout(b.value), b.value = void 0), z.value = !1, k.value = void 0);
    }, le = () => A != null && A.value ? A.value() : N.value, V = (n) => {
      const E = le();
      E && E.scrollTo(n);
    }, ie = (n) => {
      V({
        left: ((oe == null ? void 0 : oe.value) ?? 0) + n * T.value / (B.value - m.value)
      });
    }, de = (n) => {
      V({
        top: ((D == null ? void 0 : D.value) ?? 0) + n * U.value / (_.value - I.value)
      });
    }, ae = (n) => {
      if (k.value) {
        switch (k.value) {
          case "horizontal":
            ie(n.clientX - ((x == null ? void 0 : x.value) ?? 0));
            break;
          case "vertical":
            de(n.clientY - ((K == null ? void 0 : K.value) ?? 0));
            break;
        }
        n.preventDefault();
      }
    }, u = () => {
      k.value = void 0, me(), window.removeEventListener("mousemove", ae), window.removeEventListener("mouseup", u);
    }, c = (n, E) => {
      y(), z.value = !0, k.value = E;
      const P = le();
      switch (k.value) {
        case "horizontal":
          x.value = n.clientX, oe.value = (P == null ? void 0 : P.scrollLeft) ?? 0;
          break;
        case "vertical":
          K.value = n.clientY, D.value = (P == null ? void 0 : P.scrollTop) ?? 0;
          break;
      }
      window.addEventListener("mousemove", ae), window.addEventListener("mouseup", u);
    }, o = (n) => {
      _.value !== n.clientHeight && (_.value = n.clientHeight);
    }, f = (n) => {
      B.value !== n.clientWidth && (B.value = n.clientWidth);
    }, $ = (n) => {
      U.value !== n.scrollHeight && (U.value = n.scrollHeight);
    }, j = (n) => {
      T.value !== n.scrollWidth && (T.value = n.scrollWidth);
    }, ee = (n) => {
      L.value = n.scrollLeft, Q("update:scrollPosition", {
        left: L.value,
        top: H.value
      });
    }, Y = (n) => {
      H.value = n.scrollTop, Q("update:scrollPosition", {
        left: L.value,
        top: H.value
      });
    }, R = () => {
      const n = le();
      n && (o(n), f(n), $(n), j(n));
    }, J = new MutationObserver(() => R()), ve = new ResizeObserver(() => R()), fe = (n) => {
      ee(n.target), Y(n.target);
    }, me = () => {
      R(), !k.value && (y(), z.value = !0, b.value = window.setTimeout(() => {
        z.value = !1;
      }, 2500));
    }, he = () => {
      J.disconnect(), ve.disconnect();
      const n = le();
      n && (J.observe(n, {
        childList: !0,
        subtree: !0
      }), ve.observe(n));
    };
    return Le(() => {
      he();
    }), we(A, () => he()), we(
      te,
      (n) => {
        L.value = n.left, H.value = n.top, Re(() => V(n));
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (n, E) => (d(), v("div", {
      class: F(["scrollable", { [`mode-${a(Z)}`]: !0, static: a(i) }])
    }, [
      n.optimized ? We([n.updateKey], () => (d(), v("div", {
        class: F(["scrollable-content", n.contentClass]),
        ref_key: "content",
        ref: N,
        key: n.updateKey,
        onMousemove: me,
        onScroll: fe
      }, [
        p(n.$slots, "default", {}, void 0, !0)
      ], 34)), E, 0) : (d(), v("div", {
        key: 1,
        class: F(["scrollable-content", n.contentClass]),
        ref_key: "content",
        ref: N,
        onMousemove: me,
        onScroll: fe
      }, [
        p(n.$slots, "default", {}, void 0, !0)
      ], 34)),
      a(Z) !== "vertical" ? (d(), He(Se, {
        key: 2,
        onMousedown: E[1] || (E[1] = ce((P) => c(P, "horizontal"), ["stop"])),
        active: T.value > B.value && (z.value || k.value === "horizontal"),
        class: F({ "scrollbar-visible": T.value > B.value }),
        thumbOffset: W.value,
        thumbSize: X.value,
        mode: "horizontal"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0),
      a(Z) === "both-top" ? (d(), He(Se, {
        key: 3,
        onMousedown: E[2] || (E[2] = ce((P) => c(P, "horizontal"), ["stop"])),
        active: T.value > B.value && (z.value || k.value === "horizontal"),
        class: F({ "scrollbar-visible": T.value > B.value }),
        thumbOffset: W.value,
        thumbSize: X.value,
        mode: "horizontal-top"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0),
      a(Z) !== "horizontal" ? (d(), He(Se, {
        key: 4,
        onMousedown: E[3] || (E[3] = ce((P) => c(P, "vertical"), ["stop"])),
        active: U.value > _.value && (z.value || k.value === "vertical"),
        class: F({ "scrollbar-visible": U.value > _.value }),
        thumbOffset: ue.value,
        thumbSize: G.value,
        mode: "vertical"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0)
    ], 2));
  }
});
const Xe = /* @__PURE__ */ Te(Ue, [["__scopeId", "data-v-21092b38"]]), Ae = ["onClick", "onMousedown", "data-column"], qe = ["onClick"], Ge = ["data-column"], Ye = {
  key: 0,
  class: "cell column cell-additional-header row-number"
}, Je = ["data-additionalHeader", "data-column"], Qe = {
  key: 0,
  class: "cell total top-total row-number"
}, Ze = ["data-column", "data-subcolumn-index"], xe = ["data-column"], Ve = ["onClick", "data-column", "data-subcolumn-index"], Ke = ["data-column", "data-primary-key"], et = ["data-column", "data-primary-key", "data-subcolumn-index"], tt = ["innerHTML"], ot = {
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
  setup(ne, { emit: Q }) {
    const re = ne, {
      additionalHeaders: Z,
      cellClasses: A,
      colorMetrics: te,
      coloredMetrics: I,
      columns: m,
      comparisonColumnKeys: i,
      detailsRows: z,
      dragColumns: _,
      inversedKpis: B,
      noDataMessage: U,
      orderBy: T,
      orderColumnType: k,
      primaryColumn: x,
      rows: K,
      showNoDataMessage: oe,
      showRowNumber: D,
      showTotal: L,
      showTopTotal: H
    } = $e(re), b = g(), W = g(), X = g(0), G = g(0), ue = g(0), N = g({}), y = O(
      () => Object.entries(m.value).filter(([t, { visible: l }]) => l).map(([t, l]) => t)
    ), le = O(
      () => y.value.length + (D.value ? 1 : 0)
    ), V = O(() => X.value > 3), ie = O(
      () => Object.values(K.value).reduce((t, l) => {
        for (const [e, r] of Object.entries(m.value))
          if (r.type !== "string")
            if (i != null && i.value && (r.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(l[e]).reduce((s, [h, M]) => (s[h] = parseFloat(M), s), {}));
              for (const s in t[e])
                t[e][s] > l[e][s] && (t[e][s] = parseFloat(l[e][s]));
            } else
              (!(e in t) || t[e] > l[e]) && (t[e] = parseFloat(l[e]));
        return t;
      }, {})
    ), de = O(
      () => Object.values(K.value).reduce((t, l) => {
        for (const [e, r] of Object.entries(m.value))
          if (r.type !== "string")
            if (i != null && i.value && (r.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(l[e]).reduce((s, [h, M]) => (s[h] = parseFloat(M), s), {}));
              for (const s in t[e])
                t[e][s] < l[e][s] && (t[e][s] = parseFloat(l[e][s]));
            } else
              (!(e in t) || t[e] < l[e]) && (t[e] = parseFloat(l[e]));
        return t;
      }, {})
    ), ae = O(() => i != null && i.value ? y.value.map((t) => m.value[t].rowspan ?? 1).reduce((t, l) => t > l ? t : l) : 1), u = O(
      () => Object.values(K.value).sort((t, l) => {
        const e = (() => {
          const r = J(
            T.value[0].reduce((h, M) => h[M], t),
            k.value
          ), s = J(
            T.value[0].reduce((h, M) => h[M], l),
            k.value
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
      }), z.value[l[x.value]] && t.push(
        ...Object.entries(z.value[l[x.value]]).map(
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
    ), c = O(() => {
      let t = 0;
      for (const e of y.value) {
        const r = m.value[e];
        r.colspan && (i != null && i.value) ? t += r.colspan : t++;
      }
      let l = `repeat(${t}, auto)`;
      return D.value && (l = `min-content ${l}`), {
        "grid-template-columns": l
      };
    }), o = (t) => N.value[t] ? N.value[t].height : 0, f = (t, l, e, r) => {
      const s = {
        ...A.value,
        even: l % 2 === 0
      };
      if (te.value) {
        const h = (() => !B || !B.value ? "positive" : B.value.includes(e) ? "negative" : "positive")();
        s[`color-intensity-${$(t[e], e, r)}`] = !0, s[`color-${h}`] = !0, r !== void 0 && i && i.value && i.value[r] === "difference" ? s.colored = !1 : s.colored = fe(e) >= 0;
      }
      return s;
    }, $ = (t, l, e) => {
      if (m.value[l].type === "string")
        return;
      let r = t, s = de.value[l], h = ie.value[l];
      return i && i.value && e !== void 0 && (r = r[i.value[e]], s = s[i.value[e]], h = h[i.value[e]]), s === h ? 0 : Math.round((r - h) * 10 / (s - h));
    }, j = (t, l) => {
      const e = m.value[t], r = [t];
      l !== void 0 && (i && i.value ? r.push(i.value[l]) : r.push(l.toString()));
      const s = T.value[0] ? T.value[0].every(
        (h, M) => h === r[M]
      ) : !1;
      return {
        "column-main-extended": l === void 0 && (e.rowspan ?? 0) > 1,
        dragged: b.value ? y.value[b.value] === t : !1,
        "drag-mode": V.value,
        orderable: !(i && i.value) || (e.colspan ?? 1) === 1 || l !== void 0,
        "ordered-by": s,
        [`order-direction-${T.value[1] ? "desc" : "asc"}`]: s
      };
    }, ee = (t) => {
      const l = {};
      if (N.value[t])
        if (b.value !== void 0 && y.value[b.value] === t) {
          const { height: e, left: r, width: s } = N.value[t];
          l.left = `${Math.floor(r + ue.value - G.value)}px`, l.height = `${e + 1}px`, l.width = `${Math.round(s)}px`;
        } else {
          const e = y.value.indexOf(t);
          let r = (() => {
            if (b.value === void 0 || W.value === void 0)
              return 0;
            if (b.value < e) {
              if (W.value >= e)
                return -N.value[y.value[b.value]].width;
            } else if (W.value <= e)
              return N.value[y.value[b.value]].width;
            return 0;
          })();
          const { height: s, left: h, width: M } = N.value[t];
          l.left = `${Math.floor(h + r)}px`, l.height = `${s + 1}px`, l.width = `${Math.floor(M)}px`;
        }
      return l;
    }, Y = (t) => {
      const l = m.value[t], e = {};
      return i && i.value && (l.colspan && (e["grid-column-end"] = `span ${l.colspan}`), l.rowspan && (e["grid-row-end"] = `span ${l.rowspan}`)), e;
    }, R = (t) => i && i.value ? i.value[t] : void 0, J = (t, l) => {
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
    }, ve = (t) => t.subindex === void 0 ? t.index + 1 : `${t.index + 1}.${t.subindex + 1}`, fe = (t) => I.value.findIndex((l) => l === t), me = (t) => te.value && !["date", "string"].includes(m.value[t].type), he = (t, l) => {
      if (i && i.value && m.value[t].colspan && l === void 0 || b.value !== void 0 && V.value && y.value[b.value] === t)
        return;
      const e = [t];
      l !== void 0 && (i && i.value ? e.push(i.value[l]) : e.push(l.toString()));
      const r = e.every(
        (h, M) => h === T.value[0][M]
      ), s = (() => r ? !T.value[1] : m.value[t].type !== "string")();
      Q("update:orderBy", [e, s]);
    }, n = (t, l) => {
      _.value && (b.value = y.value.indexOf(t), W.value = b.value, X.value = 0, G.value = l.clientX, ue.value = l.clientX, window.addEventListener("mousemove", E), window.addEventListener("mouseup", P));
    }, E = (t) => {
      if (b.value === void 0)
        return;
      X.value++, ue.value = t.clientX;
      const l = Object.entries(m.value).filter(([M, pe]) => pe.visible).map(([M]) => M).map((M, pe) => ({
        columnIndex: parseInt(pe.toString()),
        sizing: N.value[M]
      })), e = l[b.value].sizing, r = e.width / 2, h = e.left + ue.value - G.value;
      W.value = (() => {
        for (const { columnIndex: M, sizing: pe } of l)
          if (h + r - pe.left - pe.width < 0)
            return M;
        return l.length;
      })();
    }, P = (t) => {
      if (b.value === void 0 || W.value === void 0)
        return;
      V.value && W.value !== b.value && Q("move:column", {
        from: b.value,
        to: W.value
      }), W.value = void 0, X.value = 0, b.value = void 0, window.removeEventListener("mousemove", E), window.removeEventListener("mouseup", P);
    }, Ne = (t) => {
      fe(t) >= 0 ? Q("removeColoredMetric", t) : Q("addColoredMetric", t);
    }, be = g({}), De = (t, l) => {
      l && (be.value[t] = l);
    }, Me = g(), ke = () => {
      if (!Me.value)
        return;
      const t = Me.value.getBoundingClientRect();
      N.value = Object.entries(m.value).reduce(
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
      ke();
    });
    return we(
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
    ), ke(), (t, l) => (d(), v("div", {
      class: F(["table", {
        "with-secondary": !!a(i) && y.value.some((e) => (a(m)[e].colspan || 1) !== 1)
      }]),
      ref_key: "table",
      ref: Me,
      style: se(c.value)
    }, [
      a(D) ? (d(), v("div", {
        key: 0,
        class: "cell column column-main row-number",
        style: se(ae.value > 1 ? { "grid-row-end": `span ${ae.value}` } : void 0)
      }, [
        p(t.$slots, "columnRowNumber", {}, () => [
          ge("#")
        ], !0)
      ], 4)) : w("", !0),
      (d(!0), v(C, null, q(y.value, (e) => (d(), v(C, null, [
        a(m)[e].visible ? (d(), v("div", {
          key: 0,
          class: F(["cell column column-main", j(e)]),
          ref_for: !0,
          ref: (r) => De(e, r),
          onClick: ce(() => he(e), ["stop"]),
          onMousedown: (r) => n(e, r),
          style: se(Y(e)),
          "data-column": e
        }, [
          p(t.$slots, "column", {
            columnKey: e,
            isGhost: !1
          }, void 0, !0),
          me(e) ? (d(), v("div", {
            key: 0,
            class: "toggle-colored no-spacing",
            onClick: ce(() => Ne(e), ["stop"]),
            style: se({ top: `${o(e)}px` })
          }, [
            p(t.$slots, "colorizeLabel", {
              enabled: fe(e) >= 0
            }, void 0, !0)
          ], 12, qe)) : w("", !0)
        ], 46, Ae)) : w("", !0)
      ], 64))), 256)),
      a(_) ? (d(!0), v(C, { key: 1 }, q(y.value, (e) => (d(), v(C, null, [
        a(m)[e].visible ? (d(), v("div", {
          key: 0,
          class: F(["cell column column-main column-ghost", j(e)]),
          style: se(ee(e)),
          "data-column": e
        }, [
          p(t.$slots, "column", {
            columnKey: e,
            isGhost: !0
          }, void 0, !0)
        ], 14, Ge)) : w("", !0)
      ], 64))), 256)) : w("", !0),
      (d(!0), v(C, null, q(a(Z), (e, r) => (d(), v(C, null, [
        a(D) ? (d(), v("div", Ye, [
          Ce(Pe, {
            value: e.icon
          }, null, 8, ["value"])
        ])) : w("", !0),
        (d(!0), v(C, null, q(y.value, (s) => (d(), v("div", {
          class: F(["cell column cell-additional-header", [`cell-additional-header-${s}`]]),
          "data-additionalHeader": r,
          "data-column": s
        }, [
          p(t.$slots, "additionalHeader", {
            additionalHeader: r,
            columnKey: s
          }, void 0, !0)
        ], 10, Je))), 256))
      ], 64))), 256)),
      a(H) && a(L) ? (d(), v(C, { key: 2 }, [
        a(D) ? (d(), v("div", Qe, [
          p(t.$slots, "topTotalRowNumber", {}, void 0, !0)
        ])) : w("", !0),
        (d(!0), v(C, null, q(y.value, (e) => (d(), v(C, null, [
          a(m)[e].visible ? (d(), v(C, { key: 0 }, [
            a(i) && (a(m)[e].colspan || 1) !== 1 ? (d(!0), v(C, { key: 0 }, q(a(m)[e].colspan, (r) => (d(), v("div", {
              class: "cell total top-total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              p(t.$slots, "topTotal", {
                columnKey: e,
                subcolumnKey: R(r - 1),
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
            ], 8, xe))
          ], 64)) : w("", !0)
        ], 64))), 256))
      ], 64)) : w("", !0),
      a(i) ? (d(!0), v(C, { key: 3 }, q(y.value, (e) => (d(), v(C, null, [
        a(m)[e].visible && a(m)[e].colspan ? (d(!0), v(C, { key: 0 }, q(a(m)[e].colspan, (r) => (d(), v("div", {
          class: F(["cell column column-secondary", j(e, r - 1)]),
          onClick: ce(() => he(e, r - 1), ["stop"]),
          "data-column": e,
          "data-subcolumn-index": r - 1
        }, [
          p(t.$slots, "secondaryColumn", {
            columnKey: e,
            subcolumnKey: R(r - 1)
          }, void 0, !0)
        ], 10, Ve))), 256)) : w("", !0)
      ], 64))), 256)) : w("", !0),
      (d(!0), v(C, null, q(u.value, (e, r) => (d(), v(C, null, [
        a(D) ? (d(), v("div", {
          key: 0,
          class: F(["cell row-number", { even: r % 2 === 0 }])
        }, [
          p(t.$slots, "rowNumber", {
            value: ve(e.rowInfo)
          }, () => [
            ge(je(ve(e.rowInfo)), 1)
          ], !0)
        ], 2)) : w("", !0),
        (d(!0), v(C, null, q(y.value, (s) => (d(), v(C, null, [
          !a(i) || (a(m)[s].colspan || 1) === 1 ? (d(), v("div", {
            key: 0,
            class: F(["cell", f(e, r, s)]),
            "data-column": s,
            "data-primary-key": e[a(x)]
          }, [
            p(t.$slots, "row", {
              columnKey: s,
              index: r,
              row: e,
              subindex: e.rowInfo.subindex,
              value: e[s]
            }, void 0, !0)
          ], 10, Ke)) : (d(!0), v(C, { key: 1 }, q(a(m)[s].colspan, (h) => (d(), v("div", {
            class: F(["cell", f(e, r, s, h - 1)]),
            "data-column": s,
            "data-primary-key": e[a(x)],
            "data-subcolumn-index": h - 1
          }, [
            p(t.$slots, "row", {
              columnKey: s,
              index: r,
              row: e,
              spanIndex: a(i) ? a(i)[h - 1] : h - 1,
              subcolumnKey: R(h - 1),
              subindex: e.rowInfo.subindex,
              value: e[s] ? e[s][a(i) ? a(i)[h - 1] : h - 1] : void 0
            }, void 0, !0)
          ], 10, et))), 256))
        ], 64))), 256))
      ], 64))), 256)),
      u.value.length === 0 && a(oe) ? (d(), v("div", {
        class: "cell odd no-data",
        key: "row-no-data",
        style: se({ "grid-column": `1 / span ${le.value}` }),
        innerHTML: a(U)
      }, null, 12, tt)) : w("", !0),
      a(L) ? (d(), v(C, { key: 5 }, [
        a(D) ? (d(), v("div", ot, [
          p(t.$slots, "totalRowNumber", {}, () => [
            ge("#")
          ], !0)
        ])) : w("", !0),
        (d(!0), v(C, null, q(y.value, (e) => (d(), v(C, null, [
          a(m)[e].visible ? (d(), v(C, { key: 0 }, [
            a(i) && (a(m)[e].colspan || 1) !== 1 ? (d(!0), v(C, { key: 0 }, q(a(m)[e].colspan, (r) => (d(), v("div", {
              class: "cell total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              p(t.$slots, "total", {
                columnKey: e,
                subcolumnKey: R(r - 1),
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
const Oe = /* @__PURE__ */ Te(st, [["__scopeId", "data-v-f666b6ca"]]), rt = /* @__PURE__ */ ye({
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
  setup(ne) {
    const Q = ne, {
      additionalHeaders: re,
      cellClasses: Z,
      colorMetrics: A,
      coloredMetrics: te,
      columns: I,
      comparisonColumnKeys: m,
      detailsRows: i,
      dragColumns: z,
      fixedColumnNumber: _,
      inversedKpis: B,
      orderBy: U,
      primaryColumn: T,
      rows: k,
      scrollPosition: x,
      showRowNumber: K,
      showTopTotal: oe,
      showTotal: D
    } = $e(Q), L = g(0), H = g(), b = g(0), W = g(0);
    Be(() => de.disconnect());
    const X = O(
      () => Object.keys(I.value).slice(0, _.value).reduce((u, c) => (u[c] = I.value[c], u), {})
    ), G = O(
      () => Object.keys(I.value).slice(_.value).reduce((u, c) => (u[c] = I.value[c], u), {})
    ), ue = O(
      () => Object.keys(i.value).reduce(
        (u, c) => u + c.length,
        Object.values(k.value).length
      )
    ), N = O(() => {
      var c, o, f;
      const u = {};
      return (c = H.value) != null && c.main && (u["--header-main-height"] = `${H.value.main}px`), (o = H.value) != null && o.secondary && (u["--header-secondary-height"] = `${H.value.secondary}px`), L.value && (u["--fixed-width"] = `${L.value}px`), (f = H.value) != null && f.total && (u["--header-total-height"] = `${H.value.total}px`), b.value ? (u["--total-height"] = `${b.value}px`, u["--bottom-height"] = u["--total-height"]) : (ue.value === 1 ? u["--total-scrollbar-display"] = "none" : u["--total-height"] = "20px", u["--bottom-height"] = "0px"), u;
    }), y = g(), le = g(), V = g(!1), ie = () => {
      if (V.value)
        return;
      V.value = !0, L.value = 0, H.value = void 0, b.value = 0;
      const u = (c) => {
        const o = {
          hasSecondary: !1,
          mainColumnHeight: 0,
          secondaryColumnHeight: 0,
          totalColumnHeight: 0,
          totalHeight: 0,
          width: 0
        };
        if (!c)
          return o;
        const f = [
          ...c.querySelectorAll(".cell.column-main:not(.column-main-extended)")
        ], $ = [
          ...c.querySelectorAll(".cell.column-main.column-main-extended")
        ], j = c.querySelector(".cell.column-secondary"), ee = c.querySelector(".cell.total"), Y = [];
        return f.length > 0 && (o.mainColumnHeight = f[0].offsetHeight, o.width = f.reduce((R, { offsetWidth: J }) => R + J, 0), Y.push(o.mainColumnHeight)), j && (o.hasSecondary = !0, o.secondaryColumnHeight = j.offsetHeight, Y.push(o.secondaryColumnHeight)), $.length > 0 && (o.width = $.reduce((R, { offsetWidth: J }) => R + J, 0), f.length === 0 && (o.mainColumnHeight = $[0].offsetHeight, Y.push(o.mainColumnHeight))), o.totalColumnHeight = Y.reduce((R, J) => R + J + 1, -1), ee && (o.totalHeight = ee.offsetHeight), o;
      };
      Re(() => {
        var f, $;
        const c = u((f = y.value) == null ? void 0 : f.$el), o = u(($ = le.value) == null ? void 0 : $.$el);
        if (o.hasSecondary)
          L.value = c.width, H.value = {
            main: o.mainColumnHeight,
            secondary: o.secondaryColumnHeight,
            total: Math.max(c.totalColumnHeight, o.totalColumnHeight)
          }, b.value = c.totalHeight;
        else {
          const j = Math.max(
            c.totalColumnHeight,
            o.totalColumnHeight
          );
          L.value = c.width, H.value = {
            main: j,
            total: j
          }, b.value = c.totalHeight;
        }
        V.value = !1;
      });
    }, de = new ResizeObserver(() => ie()), ae = g();
    return Re(() => {
      de.disconnect(), ae.value && de.observe(ae.value);
    }), we(k, (u, c) => {
      W.value = Math.random(), c.length || ie();
    }), we(I, () => {
      ie();
    }), (u, c) => (d(), v("div", {
      class: "table-container",
      ref_key: "tableContainer",
      ref: ae
    }, [
      Ce(Xe, {
        "onUpdate:scrollPosition": c[7] || (c[7] = (o) => u.$emit("update:scrollPosition", o)),
        scrollHeightDelta: (H.value ? H.value.total : 0) + b.value - 40,
        scrollPosition: a(x),
        scrollWidthDelta: L.value,
        style: se(N.value),
        updateKey: W.value,
        mode: "both-top",
        optimized: ""
      }, {
        default: S(() => [
          Ce(Oe, {
            class: "fixed",
            ref_key: "fixedTable",
            ref: y,
            onAddColoredMetric: c[0] || (c[0] = (o) => u.$emit("addColoredMetric", o)),
            onRemoveColoredMetric: c[1] || (c[1] = (o) => u.$emit("removeColoredMetric", o)),
            "onUpdate:orderBy": c[2] || (c[2] = (o) => u.$emit("update:orderBy", o)),
            additionalHeaders: a(re),
            cellClasses: a(Z),
            colorMetrics: a(A),
            coloredMetrics: a(te),
            columns: X.value,
            comparisonColumnKeys: a(m),
            detailsRows: a(i),
            dragColumns: !1,
            inversedKpis: a(B),
            orderBy: a(U),
            orderColumnType: a(I)[a(U)[0][0]].type,
            primaryColumn: a(T),
            rows: a(k),
            showNoDataMessage: !0,
            showRowNumber: a(K),
            showTopTotal: a(oe),
            showTotal: a(D)
          }, {
            columnRowNumber: S(() => [
              p(u.$slots, "columnRowNumber", {}, () => [
                ge("#")
              ], !0)
            ]),
            colorizeLabel: S(({ enabled: o }) => [
              p(u.$slots, "colorizeLabel", { enabled: o }, void 0, !0)
            ]),
            column: S(({ columnKey: o, isGhost: f }) => [
              o in X.value ? p(u.$slots, "column", {
                key: 0,
                columnKey: o,
                isGhost: f
              }, void 0, !0) : w("", !0)
            ]),
            additionalHeader: S(({ additionalHeader: o, columnKey: f }) => [
              p(u.$slots, "additionalHeader", {
                additionalHeader: o,
                columnKey: f
              }, void 0, !0)
            ]),
            topTotal: S(({ columnKey: o, subcolumnKey: f, values: $ }) => [
              o in X.value ? p(u.$slots, "topTotal", {
                key: 0,
                columnKey: o,
                subcolumnKey: f,
                values: $
              }, void 0, !0) : w("", !0)
            ]),
            topTotalRowNumber: S(() => [
              p(u.$slots, "topTotalRowNumber", {}, void 0, !0)
            ]),
            secondaryColumn: S(({ columnKey: o, subcolumnKey: f }) => [
              o in X.value ? p(u.$slots, "secondaryColumn", {
                key: 0,
                columnKey: o,
                subcolumnKey: f
              }, void 0, !0) : w("", !0)
            ]),
            rowNumber: S(({ value: o }) => [
              p(u.$slots, "rowNumber", { value: o }, void 0, !0)
            ]),
            row: S(({ columnKey: o, index: f, row: $, spanIndex: j, subcolumnKey: ee, subindex: Y, value: R }) => [
              o in X.value ? p(u.$slots, "row", {
                key: 0,
                columnKey: o,
                index: f,
                row: $,
                spanIndex: j,
                subcolumnKey: ee,
                subindex: Y,
                value: R
              }, void 0, !0) : w("", !0)
            ]),
            totalRowNumber: S(() => [
              p(u.$slots, "totalRowNumber", {}, () => [
                ge("#")
              ], !0)
            ]),
            total: S(({ columnKey: o, subcolumnKey: f, values: $ }) => [
              o in X.value ? p(u.$slots, "total", {
                key: 0,
                columnKey: o,
                subcolumnKey: f,
                values: $
              }, void 0, !0) : w("", !0)
            ]),
            _: 3
          }, 8, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "inversedKpis", "orderBy", "orderColumnType", "primaryColumn", "rows", "showRowNumber", "showTopTotal", "showTotal"]),
          Ce(Oe, {
            ref_key: "scrollableTable",
            ref: le,
            onAddColoredMetric: c[3] || (c[3] = (o) => u.$emit("addColoredMetric", o)),
            "onMove:column": c[4] || (c[4] = ({ from: o, to: f }) => u.$emit("move:column", { from: o + a(_), to: f + a(_) })),
            onRemoveColoredMetric: c[5] || (c[5] = (o) => u.$emit("removeColoredMetric", o)),
            "onUpdate:orderBy": c[6] || (c[6] = (o) => u.$emit("update:orderBy", o)),
            additionalHeaders: a(re),
            cellClasses: a(Z),
            colorMetrics: a(A),
            coloredMetrics: a(te),
            columns: G.value,
            comparisonColumnKeys: a(m),
            detailsRows: a(i),
            inversedKpis: a(B),
            dragColumns: a(z),
            orderBy: a(U),
            orderColumnType: a(I)[a(U)[0][0]].type,
            primaryColumn: a(T),
            rows: a(k),
            showRowNumber: !1,
            showTopTotal: a(oe),
            showTotal: a(D),
            showNoDataMessage: !0,
            noDataMessage: u.noDataMessage,
            style: se(N.value)
          }, {
            colorizeLabel: S(({ enabled: o }) => [
              p(u.$slots, "colorizeLabel", { enabled: o }, void 0, !0)
            ]),
            column: S(({ columnKey: o, isGhost: f }) => [
              o in G.value ? p(u.$slots, "column", {
                key: 0,
                columnKey: o,
                isGhost: f
              }, void 0, !0) : w("", !0)
            ]),
            additionalHeader: S(({ additionalHeader: o, columnKey: f }) => [
              p(u.$slots, "additionalHeader", {
                additionalHeader: o,
                columnKey: f
              }, void 0, !0)
            ]),
            topTotal: S(({ columnKey: o, subcolumnKey: f, values: $ }) => [
              o in G.value ? p(u.$slots, "topTotal", {
                key: 0,
                columnKey: o,
                subcolumnKey: f,
                values: $
              }, void 0, !0) : w("", !0)
            ]),
            secondaryColumn: S(({ columnKey: o, subcolumnKey: f }) => [
              o in G.value ? p(u.$slots, "secondaryColumn", {
                key: 0,
                columnKey: o,
                subcolumnKey: f
              }, void 0, !0) : w("", !0)
            ]),
            row: S(({ columnKey: o, index: f, row: $, spanIndex: j, subcolumnKey: ee, subindex: Y, value: R }) => [
              o in G.value ? p(u.$slots, "row", {
                key: 0,
                columnKey: o,
                index: f,
                row: $,
                spanIndex: j,
                subcolumnKey: ee,
                subindex: Y,
                value: R
              }, void 0, !0) : w("", !0)
            ]),
            total: S(({ columnKey: o, subcolumnKey: f, values: $ }) => [
              o in G.value ? p(u.$slots, "total", {
                key: 0,
                columnKey: o,
                subcolumnKey: f,
                values: $
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
const ct = /* @__PURE__ */ Te(rt, [["__scopeId", "data-v-9140226c"]]);
export {
  Xe as S,
  ct as T,
  Se as a,
  Oe as b
};
