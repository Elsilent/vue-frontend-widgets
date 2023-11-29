import { defineComponent as Ce, toRefs as ye, computed as B, openBlock as d, createElementBlock as v, normalizeClass as q, unref as l, withModifiers as fe, createElementVNode as Se, normalizeStyle as ue, ref as w, onUnmounted as Be, onMounted as Le, watch as _e, nextTick as Re, renderSlot as m, createBlock as ke, createCommentVNode as g, createTextVNode as be, Fragment as C, renderList as A, createVNode as we, toDisplayString as We, withCtx as _ } from "vue";
import { _ as $e } from "./_plugin-vue_export-helper-dad06003.js";
import { D as je } from "./datetime-31a2b505.js";
import { I as Pe } from "./Icon-a62eb151.js";
const Ee = { class: "scrollbar" }, Fe = /* @__PURE__ */ Ce({
  __name: "ScrollableArea",
  props: {
    active: { type: Boolean },
    mode: {},
    thumbOffset: {},
    thumbSize: {}
  },
  emits: ["mousedown"],
  setup(ie, { emit: G }) {
    const ne = ie, { active: Y, mode: U, thumbOffset: oe, thumbSize: X } = ye(ne), p = B(() => {
      const [n, z] = U.value === "vertical" ? ["top", "height"] : ["left", "width"];
      return {
        [n]: `calc(3px + ${oe.value} * (100% - ${X.value} - 6px))`,
        [z]: `${X.value}`
      };
    });
    return (n, z) => (d(), v("div", {
      class: q(["scrollable-area", { active: l(Y), [l(U)]: !0 }]),
      onMousedown: z[0] || (z[0] = fe((O) => G("mousedown", O), ["stop"]))
    }, [
      Se("div", Ee, [
        Se("div", {
          class: "thumb",
          style: ue(p.value)
        }, null, 4)
      ])
    ], 34));
  }
});
const He = /* @__PURE__ */ $e(Fe, [["__scopeId", "data-v-56aba386"]]), Ie = /* @__PURE__ */ Ce({
  __name: "Scrollable",
  props: {
    mode: { default: "vertical" },
    relativeTo: {},
    scrollPosition: { default: () => ({ left: 0, top: 0 }) },
    scrollHeightDelta: { default: 0 },
    scrollWidthDelta: { default: 0 },
    staticPosition: { type: Boolean, default: !1 }
  },
  emits: ["update:scrollPosition"],
  setup(ie, { emit: G }) {
    const ne = ie, { mode: Y, relativeTo: U, scrollPosition: oe, scrollHeightDelta: X, scrollWidthDelta: p, staticPosition: n } = ye(ne), z = w(!1), O = w(0), N = w(0), E = w(0), $ = w(0), R = w(), x = w(), Z = w(), le = w(), D = w(), L = w(0), k = w(0), b = w(), H = B(() => L.value / ($.value - N.value)), F = B(
      () => `max(56px, (100% - 14px) * ${N.value / $.value})`
    ), de = B(
      () => `max(56px, (100% - 14px) * ${O.value / E.value})`
    ), ae = B(() => k.value / (E.value - O.value)), W = w();
    Be(() => {
      ee.disconnect(), te.disconnect();
    });
    const y = () => {
      R.value && (b.value !== void 0 && (clearTimeout(b.value), b.value = void 0), z.value = !1, R.value = void 0);
    }, V = () => U != null && U.value ? U.value() : W.value, se = (i) => {
      const I = V();
      I && I.scrollTo(i);
    }, ve = (i) => {
      se({
        left: ((le == null ? void 0 : le.value) ?? 0) + i * $.value / (N.value - p.value)
      });
    }, ce = (i) => {
      se({
        top: ((D == null ? void 0 : D.value) ?? 0) + i * E.value / (O.value - X.value)
      });
    }, u = (i) => {
      if (R.value) {
        switch (R.value) {
          case "horizontal":
            ve(i.clientX - ((x == null ? void 0 : x.value) ?? 0));
            break;
          case "vertical":
            ce(i.clientY - ((Z == null ? void 0 : Z.value) ?? 0));
            break;
        }
        i.preventDefault();
      }
    }, c = () => {
      R.value = void 0, ge(), window.removeEventListener("mousemove", u), window.removeEventListener("mouseup", c);
    }, a = (i, I) => {
      y(), z.value = !0, R.value = I;
      const P = V();
      switch (R.value) {
        case "horizontal":
          x.value = i.clientX, le.value = (P == null ? void 0 : P.scrollLeft) ?? 0;
          break;
        case "vertical":
          Z.value = i.clientY, D.value = (P == null ? void 0 : P.scrollTop) ?? 0;
          break;
      }
      window.addEventListener("mousemove", u), window.addEventListener("mouseup", c);
    }, f = (i) => {
      O.value !== i.clientHeight && (O.value = i.clientHeight);
    }, S = (i) => {
      N.value !== i.clientWidth && (N.value = i.clientWidth);
    }, j = (i) => {
      E.value !== i.scrollHeight && (E.value = i.scrollHeight);
    }, T = (i) => {
      $.value !== i.scrollWidth && ($.value = i.scrollWidth);
    }, J = (i) => {
      L.value = i.scrollLeft, G("update:scrollPosition", {
        left: L.value,
        top: k.value
      });
    }, K = (i) => {
      k.value = i.scrollTop, G("update:scrollPosition", {
        left: L.value,
        top: k.value
      });
    }, Q = () => {
      const i = V();
      i && (f(i), S(i), j(i), T(i));
    }, ee = new MutationObserver(() => Q()), te = new ResizeObserver(() => Q()), re = (i) => {
      J(i.target), K(i.target);
    }, ge = () => {
      Q(), !R.value && (y(), z.value = !0, b.value = window.setTimeout(() => {
        z.value = !1;
      }, 2500));
    }, me = () => {
      ee.disconnect(), te.disconnect();
      const i = V();
      i && (ee.observe(i, {
        childList: !0,
        subtree: !0
      }), te.observe(i));
    };
    return Le(() => {
      me();
    }), _e(U, () => me()), _e(
      oe,
      (i) => {
        L.value = i.left, k.value = i.top, Re(() => se(i));
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (i, I) => (d(), v("div", {
      class: q(["scrollable", { [`mode-${l(Y)}`]: !0, static: l(n) }])
    }, [
      Se("div", {
        class: "scrollable-content",
        ref_key: "content",
        ref: W,
        onMousemove: ge,
        onScroll: re
      }, [
        m(i.$slots, "default", {}, void 0, !0)
      ], 544),
      l(Y) !== "vertical" ? (d(), ke(He, {
        key: 0,
        onMousedown: I[0] || (I[0] = fe((P) => a(P, "horizontal"), ["stop"])),
        active: $.value > N.value && (z.value || R.value === "horizontal"),
        class: q({ "scrollbar-visible": $.value > N.value }),
        thumbOffset: H.value,
        thumbSize: F.value,
        mode: "horizontal"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : g("", !0),
      l(Y) === "both-top" ? (d(), ke(He, {
        key: 1,
        onMousedown: I[1] || (I[1] = fe((P) => a(P, "horizontal"), ["stop"])),
        active: $.value > N.value && (z.value || R.value === "horizontal"),
        class: q({ "scrollbar-visible": $.value > N.value }),
        thumbOffset: H.value,
        thumbSize: F.value,
        mode: "horizontal-top"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : g("", !0),
      l(Y) !== "horizontal" ? (d(), ke(He, {
        key: 2,
        onMousedown: I[2] || (I[2] = fe((P) => a(P, "vertical"), ["stop"])),
        active: E.value > O.value && (z.value || R.value === "vertical"),
        class: q({ "scrollbar-visible": E.value > O.value }),
        thumbOffset: ae.value,
        thumbSize: de.value,
        mode: "vertical"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : g("", !0)
    ], 2));
  }
});
const Ue = /* @__PURE__ */ $e(Ie, [["__scopeId", "data-v-705e57ae"]]), Xe = ["onClick", "onMousedown", "data-column"], Ae = ["onClick"], qe = ["data-column"], Ge = {
  key: 0,
  class: "cell column cell-additional-header row-number"
}, Ye = ["data-additionalHeader", "data-column"], xe = {
  key: 0,
  class: "cell total top-total row-number"
}, Je = ["data-column", "data-subcolumn-index"], Qe = ["data-column"], Ze = ["onClick", "data-column", "data-subcolumn-index"], Ve = ["data-column", "data-primary-key"], Ke = ["data-column", "data-primary-key", "data-subcolumn-index"], et = ["innerHTML"], tt = {
  key: 0,
  class: "cell total row-number"
}, ot = ["data-column", "data-subcolumn-index"], lt = ["data-column"], at = /* @__PURE__ */ Ce({
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
  setup(ie, { emit: G }) {
    const ne = ie, {
      additionalHeaders: Y,
      cellClasses: U,
      colorMetrics: oe,
      coloredMetrics: X,
      columns: p,
      comparisonColumnKeys: n,
      detailsRows: z,
      dragColumns: O,
      inversedKpis: N,
      noDataMessage: E,
      orderBy: $,
      orderColumnType: R,
      primaryColumn: x,
      rows: Z,
      showNoDataMessage: le,
      showRowNumber: D,
      showTotal: L,
      showTopTotal: k
    } = ye(ne), b = w(), H = w(), F = w(0), de = w(0), ae = w(0), W = w({}), y = B(
      () => Object.entries(p.value).filter(([t, { visible: o }]) => o).map(([t, o]) => t)
    ), V = B(
      () => y.value.length + (D.value ? 1 : 0)
    ), se = B(() => F.value > 3), ve = B(
      () => Object.values(Z.value).reduce((t, o) => {
        for (const [e, r] of Object.entries(p.value))
          if (r.type !== "string")
            if (n != null && n.value && (r.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(o[e]).reduce((s, [h, M]) => (s[h] = parseFloat(M), s), {}));
              for (const s in t[e])
                t[e][s] > o[e][s] && (t[e][s] = parseFloat(o[e][s]));
            } else
              (!(e in t) || t[e] > o[e]) && (t[e] = parseFloat(o[e]));
        return t;
      }, {})
    ), ce = B(
      () => Object.values(Z.value).reduce((t, o) => {
        for (const [e, r] of Object.entries(p.value))
          if (r.type !== "string")
            if (n != null && n.value && (r.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(o[e]).reduce((s, [h, M]) => (s[h] = parseFloat(M), s), {}));
              for (const s in t[e])
                t[e][s] < o[e][s] && (t[e][s] = parseFloat(o[e][s]));
            } else
              (!(e in t) || t[e] < o[e]) && (t[e] = parseFloat(o[e]));
        return t;
      }, {})
    ), u = B(() => n != null && n.value ? y.value.map((t) => p.value[t].rowspan ?? 1).reduce((t, o) => t > o ? t : o) : 1), c = B(
      () => Object.values(Z.value).sort((t, o) => {
        const e = (() => {
          const r = ee(
            $.value[0].reduce((h, M) => h[M], t),
            R.value
          ), s = ee(
            $.value[0].reduce((h, M) => h[M], o),
            R.value
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
      }), z.value[o[x.value]] && t.push(
        ...Object.entries(z.value[o[x.value]]).map(
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
    ), a = B(() => {
      let t = 0;
      for (const e of y.value) {
        const r = p.value[e];
        r.colspan && (n != null && n.value) ? t += r.colspan : t++;
      }
      let o = `repeat(${t}, auto)`;
      return D.value && (o = `min-content ${o}`), {
        "grid-template-columns": o
      };
    }), f = (t) => W.value[t] ? W.value[t].height : 0, S = (t, o, e, r) => {
      const s = {
        ...U.value,
        even: o % 2 === 0
      };
      if (oe.value) {
        const h = (() => !N || !N.value ? "positive" : N.value.includes(e) ? "negative" : "positive")();
        s[`color-intensity-${j(t[e], e, r)}`] = !0, s[`color-${h}`] = !0, r !== void 0 && n && n.value && n.value[r] === "difference" ? s.colored = !1 : s.colored = re(e) >= 0;
      }
      return s;
    }, j = (t, o, e) => {
      if (p.value[o].type === "string")
        return;
      let r = t, s = ce.value[o], h = ve.value[o];
      return n && n.value && e !== void 0 && (r = r[n.value[e]], s = s[n.value[e]], h = h[n.value[e]]), s === h ? 0 : Math.round((r - h) * 10 / (s - h));
    }, T = (t, o) => {
      const e = p.value[t], r = [t];
      o !== void 0 && (n && n.value ? r.push(n.value[o]) : r.push(o.toString()));
      const s = $.value[0] ? $.value[0].every(
        (h, M) => h === r[M]
      ) : !1;
      return {
        "column-main-extended": o === void 0 && (e.rowspan ?? 0) > 1,
        dragged: b.value ? y.value[b.value] === t : !1,
        "drag-mode": se.value,
        orderable: !(n && n.value) || (e.colspan ?? 1) === 1 || o !== void 0,
        "ordered-by": s,
        [`order-direction-${$.value[1] ? "desc" : "asc"}`]: s
      };
    }, J = (t) => {
      const o = {};
      if (W.value[t])
        if (b.value !== void 0 && y.value[b.value] === t) {
          const { height: e, left: r, width: s } = W.value[t];
          o.left = `${Math.floor(r + ae.value - de.value)}px`, o.height = `${e + 1}px`, o.width = `${Math.round(s)}px`;
        } else {
          const e = y.value.indexOf(t);
          let r = (() => {
            if (b.value === void 0 || H.value === void 0)
              return 0;
            if (b.value < e) {
              if (H.value >= e)
                return -W.value[y.value[b.value]].width;
            } else if (H.value <= e)
              return W.value[y.value[b.value]].width;
            return 0;
          })();
          const { height: s, left: h, width: M } = W.value[t];
          o.left = `${Math.floor(h + r)}px`, o.height = `${s + 1}px`, o.width = `${Math.floor(M)}px`;
        }
      return o;
    }, K = (t) => {
      const o = p.value[t], e = {};
      return n && n.value && (o.colspan && (e["grid-column-end"] = `span ${o.colspan}`), o.rowspan && (e["grid-row-end"] = `span ${o.rowspan}`)), e;
    }, Q = (t) => n && n.value ? n.value[t] : void 0, ee = (t, o) => {
      switch (o) {
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
    }, te = (t) => t.subindex === void 0 ? t.index + 1 : `${t.index + 1}.${t.subindex + 1}`, re = (t) => X.value.findIndex((o) => o === t), ge = (t) => oe.value && !["date", "string"].includes(p.value[t].type), me = (t, o) => {
      if (n && n.value && p.value[t].colspan && o === void 0 || b.value !== void 0 && se.value && y.value[b.value] === t)
        return;
      const e = [t];
      o !== void 0 && (n && n.value ? e.push(n.value[o]) : e.push(o.toString()));
      const r = e.every(
        (h, M) => h === $.value[0][M]
      ), s = (() => r ? !$.value[1] : p.value[t].type !== "string")();
      G("update:orderBy", [e, s]);
    }, i = (t, o) => {
      O.value && (b.value = y.value.indexOf(t), H.value = b.value, F.value = 0, de.value = o.clientX, ae.value = o.clientX, window.addEventListener("mousemove", I), window.addEventListener("mouseup", P));
    }, I = (t) => {
      if (b.value === void 0)
        return;
      F.value++, ae.value = t.clientX;
      const o = Object.entries(p.value).filter(([M, pe]) => pe.visible).map(([M]) => M).map((M, pe) => ({
        columnIndex: parseInt(pe.toString()),
        sizing: W.value[M]
      })), e = o[b.value].sizing, r = e.width / 2, h = e.left + ae.value - de.value;
      H.value = (() => {
        for (const { columnIndex: M, sizing: pe } of o)
          if (h + r - pe.left - pe.width < 0)
            return M;
        return o.length;
      })();
    }, P = (t) => {
      if (b.value === void 0 || H.value === void 0)
        return;
      se.value && H.value !== b.value && G("move:column", {
        from: b.value,
        to: H.value
      }), H.value = void 0, F.value = 0, b.value = void 0, window.removeEventListener("mousemove", I), window.removeEventListener("mouseup", P);
    }, Ne = (t) => {
      re(t) >= 0 ? G("removeColoredMetric", t) : G("addColoredMetric", t);
    }, he = w({}), De = (t, o) => {
      o && (he.value[t] = o);
    }, Te = w(), Me = () => {
      if (!Te.value)
        return;
      const t = Te.value.getBoundingClientRect();
      W.value = Object.entries(p.value).reduce(
        (o, [e, r]) => {
          if (r.visible && he.value[e]) {
            const s = he.value[e].getBoundingClientRect();
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
      Me();
    });
    return _e(
      he,
      () => {
        ze.disconnect();
        for (const t of Object.values(he.value))
          ze.observe(t);
        Me();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), Me(), (t, o) => (d(), v("div", {
      class: q(["table", {
        "with-secondary": !!l(n) && y.value.some((e) => (l(p)[e].colspan || 1) !== 1)
      }]),
      ref_key: "table",
      ref: Te,
      style: ue(a.value)
    }, [
      l(D) ? (d(), v("div", {
        key: 0,
        class: "cell column column-main row-number",
        style: ue(u.value > 1 ? { "grid-row-end": `span ${u.value}` } : void 0)
      }, [
        m(t.$slots, "columnRowNumber", {}, () => [
          be("#")
        ], !0)
      ], 4)) : g("", !0),
      (d(!0), v(C, null, A(y.value, (e) => (d(), v(C, null, [
        l(p)[e].visible ? (d(), v("div", {
          key: 0,
          class: q(["cell column column-main", T(e)]),
          ref_for: !0,
          ref: (r) => De(e, r),
          onClick: fe(() => me(e), ["stop"]),
          onMousedown: (r) => i(e, r),
          style: ue(K(e)),
          "data-column": e
        }, [
          m(t.$slots, "column", {
            columnKey: e,
            isGhost: !1
          }, void 0, !0),
          ge(e) ? (d(), v("div", {
            key: 0,
            class: "toggle-colored no-spacing",
            onClick: fe(() => Ne(e), ["stop"]),
            style: ue({ top: `${f(e)}px` })
          }, [
            m(t.$slots, "colorizeLabel", {
              enabled: re(e) >= 0
            }, void 0, !0)
          ], 12, Ae)) : g("", !0)
        ], 46, Xe)) : g("", !0)
      ], 64))), 256)),
      l(O) ? (d(!0), v(C, { key: 1 }, A(y.value, (e) => (d(), v(C, null, [
        l(p)[e].visible ? (d(), v("div", {
          key: 0,
          class: q(["cell column column-main column-ghost", T(e)]),
          style: ue(J(e)),
          "data-column": e
        }, [
          m(t.$slots, "column", {
            columnKey: e,
            isGhost: !0
          }, void 0, !0)
        ], 14, qe)) : g("", !0)
      ], 64))), 256)) : g("", !0),
      (d(!0), v(C, null, A(l(Y), (e, r) => (d(), v(C, null, [
        l(D) ? (d(), v("div", Ge, [
          we(Pe, {
            value: e.icon
          }, null, 8, ["value"])
        ])) : g("", !0),
        (d(!0), v(C, null, A(y.value, (s) => (d(), v("div", {
          class: q(["cell column cell-additional-header", [`cell-additional-header-${s}`]]),
          "data-additionalHeader": r,
          "data-column": s
        }, [
          m(t.$slots, "additionalHeader", {
            additionalHeader: r,
            columnKey: s
          }, void 0, !0)
        ], 10, Ye))), 256))
      ], 64))), 256)),
      l(k) && l(L) ? (d(), v(C, { key: 2 }, [
        l(D) ? (d(), v("div", xe, [
          m(t.$slots, "topTotalRowNumber", {}, void 0, !0)
        ])) : g("", !0),
        (d(!0), v(C, null, A(y.value, (e) => (d(), v(C, null, [
          l(p)[e].visible ? (d(), v(C, { key: 0 }, [
            l(n) && (l(p)[e].colspan || 1) !== 1 ? (d(!0), v(C, { key: 0 }, A(l(p)[e].colspan, (r) => (d(), v("div", {
              class: "cell total top-total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              m(t.$slots, "topTotal", {
                columnKey: e,
                subcolumnKey: Q(r - 1),
                values: c.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, Je))), 256)) : (d(), v("div", {
              key: 1,
              class: "cell total top-total",
              "data-column": e
            }, [
              m(t.$slots, "topTotal", {
                columnKey: e,
                values: c.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, Qe))
          ], 64)) : g("", !0)
        ], 64))), 256))
      ], 64)) : g("", !0),
      l(n) ? (d(!0), v(C, { key: 3 }, A(y.value, (e) => (d(), v(C, null, [
        l(p)[e].visible && l(p)[e].colspan ? (d(!0), v(C, { key: 0 }, A(l(p)[e].colspan, (r) => (d(), v("div", {
          class: q(["cell column column-secondary", T(e, r - 1)]),
          onClick: fe(() => me(e, r - 1), ["stop"]),
          "data-column": e,
          "data-subcolumn-index": r - 1
        }, [
          m(t.$slots, "secondaryColumn", {
            columnKey: e,
            subcolumnKey: Q(r - 1)
          }, void 0, !0)
        ], 10, Ze))), 256)) : g("", !0)
      ], 64))), 256)) : g("", !0),
      (d(!0), v(C, null, A(c.value, (e, r) => (d(), v(C, null, [
        l(D) ? (d(), v("div", {
          key: 0,
          class: q(["cell row-number", { even: r % 2 === 0 }])
        }, [
          m(t.$slots, "rowNumber", {
            value: te(e.rowInfo)
          }, () => [
            be(We(te(e.rowInfo)), 1)
          ], !0)
        ], 2)) : g("", !0),
        (d(!0), v(C, null, A(y.value, (s) => (d(), v(C, null, [
          !l(n) || (l(p)[s].colspan || 1) === 1 ? (d(), v("div", {
            key: 0,
            class: q(["cell", S(e, r, s)]),
            "data-column": s,
            "data-primary-key": e[l(x)]
          }, [
            m(t.$slots, "row", {
              columnKey: s,
              index: r,
              row: e,
              subindex: e.rowInfo.subindex,
              value: e[s]
            }, void 0, !0)
          ], 10, Ve)) : (d(!0), v(C, { key: 1 }, A(l(p)[s].colspan, (h) => (d(), v("div", {
            class: q(["cell", S(e, r, s, h - 1)]),
            "data-column": s,
            "data-primary-key": e[l(x)],
            "data-subcolumn-index": h - 1
          }, [
            m(t.$slots, "row", {
              columnKey: s,
              index: r,
              row: e,
              spanIndex: l(n) ? l(n)[h - 1] : h - 1,
              subcolumnKey: Q(h - 1),
              subindex: e.rowInfo.subindex,
              value: e[s] ? e[s][l(n) ? l(n)[h - 1] : h - 1] : void 0
            }, void 0, !0)
          ], 10, Ke))), 256))
        ], 64))), 256))
      ], 64))), 256)),
      c.value.length === 0 && l(le) ? (d(), v("div", {
        class: "cell odd no-data",
        key: "row-no-data",
        style: ue({ "grid-column": `1 / span ${V.value}` }),
        innerHTML: l(E)
      }, null, 12, et)) : g("", !0),
      l(L) ? (d(), v(C, { key: 5 }, [
        l(D) ? (d(), v("div", tt, [
          m(t.$slots, "totalRowNumber", {}, () => [
            be("#")
          ], !0)
        ])) : g("", !0),
        (d(!0), v(C, null, A(y.value, (e) => (d(), v(C, null, [
          l(p)[e].visible ? (d(), v(C, { key: 0 }, [
            l(n) && (l(p)[e].colspan || 1) !== 1 ? (d(!0), v(C, { key: 0 }, A(l(p)[e].colspan, (r) => (d(), v("div", {
              class: "cell total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              m(t.$slots, "total", {
                columnKey: e,
                subcolumnKey: Q(r - 1),
                values: c.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, ot))), 256)) : (d(), v("div", {
              key: 1,
              class: "cell total",
              "data-column": e
            }, [
              m(t.$slots, "total", {
                columnKey: e,
                values: c.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, lt))
          ], 64)) : g("", !0)
        ], 64))), 256))
      ], 64)) : g("", !0)
    ], 6));
  }
});
const Oe = /* @__PURE__ */ $e(at, [["__scopeId", "data-v-f5238781"]]), st = /* @__PURE__ */ Ce({
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
    const G = ie, {
      additionalHeaders: ne,
      cellClasses: Y,
      colorMetrics: U,
      coloredMetrics: oe,
      columns: X,
      comparisonColumnKeys: p,
      detailsRows: n,
      dragColumns: z,
      fixedColumnNumber: O,
      inversedKpis: N,
      orderBy: E,
      primaryColumn: $,
      rows: R,
      scrollPosition: x,
      showRowNumber: Z,
      showTopTotal: le,
      showTotal: D
    } = ye(G), L = w(0), k = w(), b = w(0);
    Be(() => ve.disconnect());
    const H = B(
      () => Object.keys(X.value).slice(0, O.value).reduce((u, c) => (u[c] = X.value[c], u), {})
    ), F = B(
      () => Object.keys(X.value).slice(O.value).reduce((u, c) => (u[c] = X.value[c], u), {})
    ), de = B(
      () => Object.keys(n.value).reduce(
        (u, c) => u + c.length,
        Object.values(R.value).length
      )
    ), ae = B(() => {
      var c, a, f;
      const u = {};
      return (c = k.value) != null && c.main && (u["--header-main-height"] = `${k.value.main}px`), (a = k.value) != null && a.secondary && (u["--header-secondary-height"] = `${k.value.secondary}px`), L.value && (u["--fixed-width"] = `${L.value}px`), (f = k.value) != null && f.total && (u["--header-total-height"] = `${k.value.total}px`), b.value ? (u["--total-height"] = `${b.value}px`, u["--bottom-height"] = u["--total-height"]) : (de.value === 1 ? u["--total-scrollbar-display"] = "none" : u["--total-height"] = "20px", u["--bottom-height"] = "0px"), u;
    }), W = w(), y = w(), V = w(!1), se = () => {
      var f, S;
      if (V.value)
        return;
      V.value = !0, L.value = 0, k.value = void 0, b.value = 0;
      const u = (j) => {
        const T = {
          hasSecondary: !1,
          mainColumnHeight: 0,
          secondaryColumnHeight: 0,
          totalColumnHeight: 0,
          totalHeight: 0,
          width: 0
        };
        if (!j)
          return T;
        const J = [...j.querySelectorAll(".cell.column-main")], K = j.querySelector(".cell.column-secondary"), Q = j.querySelector(".cell.total"), ee = [];
        return J.length > 0 && (T.mainColumnHeight = J[0].offsetHeight, T.width = J.reduce((te, { offsetWidth: re }) => te + re, 0), ee.push(T.mainColumnHeight)), K && (T.hasSecondary = !0, T.secondaryColumnHeight = K.offsetHeight, ee.push(T.secondaryColumnHeight)), T.totalColumnHeight = ee.reduce((te, re) => te + re + 1, -1), Q && (T.totalHeight = Q.offsetHeight), T;
      }, c = u((f = W.value) == null ? void 0 : f.$el), a = u((S = y.value) == null ? void 0 : S.$el);
      if (a.hasSecondary)
        L.value = c.width, k.value = {
          main: a.mainColumnHeight,
          secondary: a.secondaryColumnHeight,
          total: Math.max(c.totalColumnHeight, a.totalColumnHeight)
        }, b.value = c.totalHeight;
      else {
        const j = Math.max(
          c.totalColumnHeight,
          a.totalColumnHeight
        );
        L.value = c.width, k.value = {
          main: j,
          total: j
        }, b.value = c.totalHeight;
      }
      Re(() => {
        V.value = !1;
      });
    }, ve = new ResizeObserver(() => se()), ce = w();
    return Re(() => {
      ve.disconnect(), ce.value && ve.observe(ce.value);
    }), (u, c) => (d(), v("div", {
      class: "table-container",
      ref_key: "tableContainer",
      ref: ce
    }, [
      we(Ue, {
        "onUpdate:scrollPosition": c[7] || (c[7] = (a) => u.$emit("update:scrollPosition", a)),
        scrollHeightDelta: (k.value ? k.value.total : 0) + b.value - 40,
        scrollPosition: l(x),
        scrollWidthDelta: L.value,
        style: ue(ae.value),
        mode: "both-top"
      }, {
        default: _(() => [
          we(Oe, {
            class: "fixed",
            ref_key: "fixedTable",
            ref: W,
            onAddColoredMetric: c[0] || (c[0] = (a) => u.$emit("addColoredMetric", a)),
            onRemoveColoredMetric: c[1] || (c[1] = (a) => u.$emit("removeColoredMetric", a)),
            "onUpdate:orderBy": c[2] || (c[2] = (a) => u.$emit("update:orderBy", a)),
            additionalHeaders: l(ne),
            cellClasses: l(Y),
            colorMetrics: l(U),
            coloredMetrics: l(oe),
            columns: H.value,
            comparisonColumnKeys: l(p),
            detailsRows: l(n),
            dragColumns: !1,
            inversedKpis: l(N),
            orderBy: l(E),
            orderColumnType: l(X)[l(E)[0][0]].type,
            primaryColumn: l($),
            rows: l(R),
            showNoDataMessage: !0,
            showRowNumber: l(Z),
            showTopTotal: l(le),
            showTotal: l(D)
          }, {
            columnRowNumber: _(() => [
              m(u.$slots, "columnRowNumber", {}, () => [
                be("#")
              ], !0)
            ]),
            colorizeLabel: _(({ enabled: a }) => [
              m(u.$slots, "colorizeLabel", { enabled: a }, void 0, !0)
            ]),
            column: _(({ columnKey: a, isGhost: f }) => [
              a in H.value ? m(u.$slots, "column", {
                key: 0,
                columnKey: a,
                isGhost: f
              }, void 0, !0) : g("", !0)
            ]),
            additionalHeader: _(({ additionalHeader: a, columnKey: f }) => [
              m(u.$slots, "additionalHeader", {
                additionalHeader: a,
                columnKey: f
              }, void 0, !0)
            ]),
            topTotal: _(({ columnKey: a, subcolumnKey: f, values: S }) => [
              a in H.value ? m(u.$slots, "topTotal", {
                key: 0,
                columnKey: a,
                subcolumnKey: f,
                values: S
              }, void 0, !0) : g("", !0)
            ]),
            topTotalRowNumber: _(() => [
              m(u.$slots, "topTotalRowNumber", {}, void 0, !0)
            ]),
            secondaryColumn: _(({ columnKey: a, subcolumnKey: f }) => [
              a in H.value ? m(u.$slots, "secondaryColumn", {
                key: 0,
                columnKey: a,
                subcolumnKey: f
              }, void 0, !0) : g("", !0)
            ]),
            rowNumber: _(({ value: a }) => [
              m(u.$slots, "rowNumber", { value: a }, void 0, !0)
            ]),
            row: _(({ columnKey: a, index: f, row: S, spanIndex: j, subcolumnKey: T, subindex: J, value: K }) => [
              a in H.value ? m(u.$slots, "row", {
                key: 0,
                columnKey: a,
                index: f,
                row: S,
                spanIndex: j,
                subcolumnKey: T,
                subindex: J,
                value: K
              }, void 0, !0) : g("", !0)
            ]),
            totalRowNumber: _(() => [
              m(u.$slots, "totalRowNumber", {}, () => [
                be("#")
              ], !0)
            ]),
            total: _(({ columnKey: a, subcolumnKey: f, values: S }) => [
              a in H.value ? m(u.$slots, "total", {
                key: 0,
                columnKey: a,
                subcolumnKey: f,
                values: S
              }, void 0, !0) : g("", !0)
            ]),
            _: 3
          }, 8, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "inversedKpis", "orderBy", "orderColumnType", "primaryColumn", "rows", "showRowNumber", "showTopTotal", "showTotal"]),
          we(Oe, {
            ref_key: "scrollableTable",
            ref: y,
            onAddColoredMetric: c[3] || (c[3] = (a) => u.$emit("addColoredMetric", a)),
            "onMove:column": c[4] || (c[4] = ({ from: a, to: f }) => u.$emit("move:column", { from: a + l(O), to: f + l(O) })),
            onRemoveColoredMetric: c[5] || (c[5] = (a) => u.$emit("removeColoredMetric", a)),
            "onUpdate:orderBy": c[6] || (c[6] = (a) => u.$emit("update:orderBy", a)),
            additionalHeaders: l(ne),
            cellClasses: l(Y),
            colorMetrics: l(U),
            coloredMetrics: l(oe),
            columns: F.value,
            comparisonColumnKeys: l(p),
            detailsRows: l(n),
            inversedKpis: l(N),
            dragColumns: l(z),
            orderBy: l(E),
            orderColumnType: l(X)[l(E)[0][0]].type,
            primaryColumn: l($),
            rows: l(R),
            showRowNumber: !1,
            showTopTotal: l(le),
            showTotal: l(D),
            showNoDataMessage: !0,
            noDataMessage: u.noDataMessage,
            style: ue(ae.value)
          }, {
            colorizeLabel: _(({ enabled: a }) => [
              m(u.$slots, "colorizeLabel", { enabled: a }, void 0, !0)
            ]),
            column: _(({ columnKey: a, isGhost: f }) => [
              a in F.value ? m(u.$slots, "column", {
                key: 0,
                columnKey: a,
                isGhost: f
              }, void 0, !0) : g("", !0)
            ]),
            additionalHeader: _(({ additionalHeader: a, columnKey: f }) => [
              m(u.$slots, "additionalHeader", {
                additionalHeader: a,
                columnKey: f
              }, void 0, !0)
            ]),
            topTotal: _(({ columnKey: a, subcolumnKey: f, values: S }) => [
              a in F.value ? m(u.$slots, "topTotal", {
                key: 0,
                columnKey: a,
                subcolumnKey: f,
                values: S
              }, void 0, !0) : g("", !0)
            ]),
            secondaryColumn: _(({ columnKey: a, subcolumnKey: f }) => [
              a in F.value ? m(u.$slots, "secondaryColumn", {
                key: 0,
                columnKey: a,
                subcolumnKey: f
              }, void 0, !0) : g("", !0)
            ]),
            row: _(({ columnKey: a, index: f, row: S, spanIndex: j, subcolumnKey: T, subindex: J, value: K }) => [
              a in F.value ? m(u.$slots, "row", {
                key: 0,
                columnKey: a,
                index: f,
                row: S,
                spanIndex: j,
                subcolumnKey: T,
                subindex: J,
                value: K
              }, void 0, !0) : g("", !0)
            ]),
            total: _(({ columnKey: a, subcolumnKey: f, values: S }) => [
              a in F.value ? m(u.$slots, "total", {
                key: 0,
                columnKey: a,
                subcolumnKey: f,
                values: S
              }, void 0, !0) : g("", !0)
            ]),
            _: 3
          }, 8, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "inversedKpis", "dragColumns", "orderBy", "orderColumnType", "primaryColumn", "rows", "showTopTotal", "showTotal", "noDataMessage", "style"])
        ]),
        _: 3
      }, 8, ["scrollHeightDelta", "scrollPosition", "scrollWidthDelta", "style"])
    ], 512));
  }
});
const dt = /* @__PURE__ */ $e(st, [["__scopeId", "data-v-8c6c2283"]]);
export {
  Ue as S,
  dt as T,
  He as a,
  Oe as b
};
