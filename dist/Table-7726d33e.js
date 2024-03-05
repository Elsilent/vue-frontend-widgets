import { defineComponent as ye, toRefs as $e, computed as B, openBlock as d, createElementBlock as c, normalizeClass as I, unref as l, withModifiers as pe, createElementVNode as _e, normalizeStyle as ie, ref as g, onUnmounted as Be, onMounted as Le, watch as we, nextTick as Re, withMemo as We, renderSlot as p, createBlock as He, createCommentVNode as C, createTextVNode as ge, Fragment as w, renderList as G, createVNode as Ce, toDisplayString as je, withCtx as S } from "vue";
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
  setup(ve, { emit: Q }) {
    const de = ve, { active: Z, mode: A, thumbOffset: le, thumbSize: q } = $e(de), m = B(() => {
      const [i, _] = A.value === "vertical" ? ["top", "height"] : ["left", "width"];
      return {
        [i]: `calc(3px + ${le.value} * (100% - ${q.value} - 6px))`,
        [_]: `${q.value}`
      };
    });
    return (i, _) => (d(), c("div", {
      class: I(["scrollable-area", { active: l(Z), [l(A)]: !0 }]),
      onMousedown: _[0] || (_[0] = pe((O) => Q("mousedown", O), ["stop"]))
    }, [
      _e("div", Fe, [
        _e("div", {
          class: "thumb",
          style: ie(m.value)
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
  setup(ve, { emit: Q }) {
    const de = ve, { mode: Z, relativeTo: A, scrollPosition: le, scrollHeightDelta: q, scrollWidthDelta: m, staticPosition: i } = $e(de), _ = g(!1), O = g(0), N = g(0), U = g(0), $ = g(0), k = g(), x = g(), oe = g(), ae = g(), W = g(), j = g(0), H = g(0), b = g(), E = B(() => j.value / ($.value - N.value)), X = B(
      () => `max(56px, (100% - 14px) * ${N.value / $.value})`
    ), Y = B(
      () => `max(56px, (100% - 14px) * ${O.value / U.value})`
    ), ce = B(() => H.value / (U.value - O.value)), D = g();
    Be(() => {
      ue.disconnect(), ne.disconnect();
    });
    const y = () => {
      k.value && (b.value !== void 0 && (clearTimeout(b.value), b.value = void 0), _.value = !1, k.value = void 0);
    }, se = () => A != null && A.value ? A.value() : D.value, V = (n) => {
      const P = se();
      P && P.scrollTo(n);
    }, he = (n) => {
      V({
        left: ((ae == null ? void 0 : ae.value) ?? 0) + n * $.value / (N.value - m.value)
      });
    }, fe = (n) => {
      V({
        top: ((W == null ? void 0 : W.value) ?? 0) + n * U.value / (O.value - q.value)
      });
    }, re = (n) => {
      if (k.value) {
        switch (k.value) {
          case "horizontal":
            he(n.clientX - ((x == null ? void 0 : x.value) ?? 0));
            break;
          case "vertical":
            fe(n.clientY - ((oe == null ? void 0 : oe.value) ?? 0));
            break;
        }
        n.preventDefault();
      }
    }, u = () => {
      k.value = void 0, ee(), window.removeEventListener("mousemove", re), window.removeEventListener("mouseup", u);
    }, v = (n, P) => {
      y(), _.value = !0, k.value = P;
      const F = se();
      switch (k.value) {
        case "horizontal":
          x.value = n.clientX, ae.value = (F == null ? void 0 : F.scrollLeft) ?? 0;
          break;
        case "vertical":
          oe.value = n.clientY, W.value = (F == null ? void 0 : F.scrollTop) ?? 0;
          break;
      }
      window.addEventListener("mousemove", re), window.addEventListener("mouseup", u);
    }, a = (n) => {
      O.value !== n.clientHeight && (O.value = n.clientHeight);
    }, f = (n) => {
      N.value !== n.clientWidth && (N.value = n.clientWidth);
    }, R = (n) => {
      U.value !== n.scrollHeight && (U.value = n.scrollHeight);
    }, z = (n) => {
      $.value !== n.scrollWidth && ($.value = n.scrollWidth);
    }, T = (n) => {
      j.value = n.scrollLeft, Q("update:scrollPosition", {
        left: j.value,
        top: H.value
      });
    }, J = (n) => {
      H.value = n.scrollTop, Q("update:scrollPosition", {
        left: j.value,
        top: H.value
      });
    }, L = () => {
      const n = se();
      n && (a(n), f(n), R(n), z(n));
    }, ue = new MutationObserver(() => L()), ne = new ResizeObserver(() => L()), K = (n) => {
      T(n.target), J(n.target);
    }, ee = () => {
      L(), !k.value && (y(), _.value = !0, b.value = window.setTimeout(() => {
        _.value = !1;
      }, 2500));
    }, te = () => {
      ue.disconnect(), ne.disconnect();
      const n = se();
      n && (ue.observe(n, {
        childList: !0,
        subtree: !0
      }), ne.observe(n));
    };
    return Le(() => {
      te();
    }), we(A, () => te()), we(
      le,
      (n) => {
        j.value = n.left, H.value = n.top, Re(() => V(n));
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (n, P) => (d(), c("div", {
      class: I(["scrollable", { [`mode-${l(Z)}`]: !0, static: l(i) }])
    }, [
      n.optimized ? We([n.updateKey], () => (d(), c("div", {
        class: I(["scrollable-content", n.contentClass]),
        ref_key: "content",
        ref: D,
        key: n.updateKey,
        onMousemove: ee,
        onScroll: K
      }, [
        p(n.$slots, "default", {}, void 0, !0)
      ], 34)), P, 0) : (d(), c("div", {
        key: 1,
        class: I(["scrollable-content", n.contentClass]),
        ref_key: "content",
        ref: D,
        onMousemove: ee,
        onScroll: K
      }, [
        p(n.$slots, "default", {}, void 0, !0)
      ], 34)),
      l(Z) !== "vertical" ? (d(), He(Se, {
        key: 2,
        onMousedown: P[1] || (P[1] = pe((F) => v(F, "horizontal"), ["stop"])),
        active: $.value > N.value && (_.value || k.value === "horizontal"),
        class: I({ "scrollbar-visible": $.value > N.value }),
        thumbOffset: E.value,
        thumbSize: X.value,
        mode: "horizontal"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : C("", !0),
      l(Z) === "both-top" ? (d(), He(Se, {
        key: 3,
        onMousedown: P[2] || (P[2] = pe((F) => v(F, "horizontal"), ["stop"])),
        active: $.value > N.value && (_.value || k.value === "horizontal"),
        class: I({ "scrollbar-visible": $.value > N.value }),
        thumbOffset: E.value,
        thumbSize: X.value,
        mode: "horizontal-top"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : C("", !0),
      l(Z) !== "horizontal" ? (d(), He(Se, {
        key: 4,
        onMousedown: P[3] || (P[3] = pe((F) => v(F, "vertical"), ["stop"])),
        active: U.value > O.value && (_.value || k.value === "vertical"),
        class: I({ "scrollbar-visible": U.value > O.value }),
        thumbOffset: ce.value,
        thumbSize: Y.value,
        mode: "vertical"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : C("", !0)
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
  setup(ve, { emit: Q }) {
    const de = ve, {
      additionalHeaders: Z,
      cellClasses: A,
      colorMetrics: le,
      coloredMetrics: q,
      columns: m,
      comparisonColumnKeys: i,
      detailsRows: _,
      dragColumns: O,
      inversedKpis: N,
      noDataMessage: U,
      orderBy: $,
      orderColumnType: k,
      primaryColumn: x,
      rows: oe,
      showNoDataMessage: ae,
      showRowNumber: W,
      showTotal: j,
      showTopTotal: H
    } = $e(de), b = g(), E = g(), X = g(0), Y = g(0), ce = g(0), D = g({}), y = B(
      () => Object.entries(m.value).filter(([t, { visible: o }]) => o).map(([t, o]) => t)
    ), se = B(
      () => y.value.length + (W.value ? 1 : 0)
    ), V = B(() => X.value > 3), he = B(
      () => Object.values(oe.value).reduce((t, o) => {
        for (const [e, r] of Object.entries(m.value))
          if (r.type !== "string")
            if (i != null && i.value && (r.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(o[e]).reduce((s, [h, M]) => (s[h] = parseFloat(M), s), {}));
              for (const s in t[e])
                t[e][s] > o[e][s] && (t[e][s] = parseFloat(o[e][s]));
            } else
              (!(e in t) || t[e] > o[e]) && (t[e] = parseFloat(o[e]));
        return t;
      }, {})
    ), fe = B(
      () => Object.values(oe.value).reduce((t, o) => {
        for (const [e, r] of Object.entries(m.value))
          if (r.type !== "string")
            if (i != null && i.value && (r.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(o[e]).reduce((s, [h, M]) => (s[h] = parseFloat(M), s), {}));
              for (const s in t[e])
                t[e][s] < o[e][s] && (t[e][s] = parseFloat(o[e][s]));
            } else
              (!(e in t) || t[e] < o[e]) && (t[e] = parseFloat(o[e]));
        return t;
      }, {})
    ), re = B(() => i != null && i.value ? y.value.map((t) => m.value[t].rowspan ?? 1).reduce((t, o) => t > o ? t : o) : 1), u = B(
      () => Object.values(oe.value).sort((t, o) => {
        const e = (() => {
          const r = ue(
            $.value[0].reduce((h, M) => h[M], t),
            k.value
          ), s = ue(
            $.value[0].reduce((h, M) => h[M], o),
            k.value
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
      }), _.value[o[x.value]] && t.push(
        ...Object.entries(_.value[o[x.value]]).map(
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
    ), v = B(() => {
      let t = 0;
      for (const e of y.value) {
        const r = m.value[e];
        r.colspan && (i != null && i.value) ? t += r.colspan : t++;
      }
      let o = `repeat(${t}, auto)`;
      return W.value && (o = `min-content ${o}`), {
        "grid-template-columns": o
      };
    }), a = (t) => D.value[t] ? D.value[t].height : 0, f = (t, o, e, r) => {
      const s = {
        ...A.value,
        even: o % 2 === 0
      };
      if (le.value) {
        const h = (() => !N || !N.value ? "positive" : N.value.includes(e) ? "negative" : "positive")();
        s[`color-intensity-${R(t[e], e, r)}`] = !0, s[`color-${h}`] = !0, r !== void 0 && i && i.value && i.value[r] === "difference" ? s.colored = !1 : s.colored = K(e) >= 0;
      }
      return s;
    }, R = (t, o, e) => {
      if (m.value[o].type === "string")
        return;
      let r = t, s = fe.value[o], h = he.value[o];
      return i && i.value && e !== void 0 && (r = r[i.value[e]], s = s[i.value[e]], h = h[i.value[e]]), s === h ? 0 : Math.round((r - h) * 10 / (s - h));
    }, z = (t, o) => {
      const e = m.value[t], r = [t];
      o !== void 0 && (i && i.value ? r.push(i.value[o]) : r.push(o.toString()));
      const s = $.value[0] ? $.value[0].every(
        (h, M) => h === r[M]
      ) : !1;
      return {
        "column-main-extended": o === void 0 && (e.rowspan ?? 0) > 1,
        dragged: b.value ? y.value[b.value] === t : !1,
        "drag-mode": V.value,
        orderable: !(i && i.value) || (e.colspan ?? 1) === 1 || o !== void 0,
        "ordered-by": s,
        [`order-direction-${$.value[1] ? "desc" : "asc"}`]: s
      };
    }, T = (t) => {
      const o = {};
      if (D.value[t])
        if (b.value !== void 0 && y.value[b.value] === t) {
          const { height: e, left: r, width: s } = D.value[t];
          o.left = `${Math.floor(r + ce.value - Y.value)}px`, o.height = `${e + 1}px`, o.width = `${Math.round(s)}px`;
        } else {
          const e = y.value.indexOf(t);
          let r = (() => {
            if (b.value === void 0 || E.value === void 0)
              return 0;
            if (b.value < e) {
              if (E.value >= e)
                return -D.value[y.value[b.value]].width;
            } else if (E.value <= e)
              return D.value[y.value[b.value]].width;
            return 0;
          })();
          const { height: s, left: h, width: M } = D.value[t];
          o.left = `${Math.floor(h + r)}px`, o.height = `${s + 1}px`, o.width = `${Math.floor(M)}px`;
        }
      return o;
    }, J = (t) => {
      const o = m.value[t], e = {};
      return i && i.value && (o.colspan && (e["grid-column-end"] = `span ${o.colspan}`), o.rowspan && (e["grid-row-end"] = `span ${o.rowspan}`)), e;
    }, L = (t) => i && i.value ? i.value[t] : void 0, ue = (t, o) => {
      switch (o) {
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
    }, ne = (t) => t.subindex === void 0 ? t.index + 1 : `${t.index + 1}.${t.subindex + 1}`, K = (t) => q.value.findIndex((o) => o === t), ee = (t) => le.value && !["date", "string"].includes(m.value[t].type), te = (t, o) => {
      if (i && i.value && m.value[t].colspan && o === void 0 || b.value !== void 0 && V.value && y.value[b.value] === t)
        return;
      const e = [t];
      o !== void 0 && (i && i.value ? e.push(i.value[o]) : e.push(o.toString()));
      const r = e.every(
        (h, M) => h === $.value[0][M]
      ), s = (() => r ? !$.value[1] : m.value[t].type !== "string")();
      Q("update:orderBy", [e, s]);
    }, n = (t, o) => {
      O.value && (b.value = y.value.indexOf(t), E.value = b.value, X.value = 0, Y.value = o.clientX, ce.value = o.clientX, window.addEventListener("mousemove", P), window.addEventListener("mouseup", F));
    }, P = (t) => {
      if (b.value === void 0)
        return;
      X.value++, ce.value = t.clientX;
      const o = Object.entries(m.value).filter(([M, me]) => me.visible).map(([M]) => M).map((M, me) => ({
        columnIndex: parseInt(me.toString()),
        sizing: D.value[M]
      })), e = o[b.value].sizing, r = e.width / 2, h = e.left + ce.value - Y.value;
      E.value = (() => {
        for (const { columnIndex: M, sizing: me } of o)
          if (h + r - me.left - me.width < 0)
            return M;
        return o.length;
      })();
    }, F = (t) => {
      if (b.value === void 0 || E.value === void 0)
        return;
      V.value && E.value !== b.value && Q("move:column", {
        from: b.value,
        to: E.value
      }), E.value = void 0, X.value = 0, b.value = void 0, window.removeEventListener("mousemove", P), window.removeEventListener("mouseup", F);
    }, Ne = (t) => {
      K(t) >= 0 ? Q("removeColoredMetric", t) : Q("addColoredMetric", t);
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
    ), ke(), (t, o) => (d(), c("div", {
      class: I(["table", {
        "with-secondary": !!l(i) && y.value.some((e) => (l(m)[e].colspan || 1) !== 1)
      }]),
      ref_key: "table",
      ref: Me,
      style: ie(v.value)
    }, [
      l(W) ? (d(), c("div", {
        key: 0,
        class: "cell column column-main row-number",
        style: ie(re.value > 1 ? { "grid-row-end": `span ${re.value}` } : void 0)
      }, [
        p(t.$slots, "columnRowNumber", {}, () => [
          ge("#")
        ], !0)
      ], 4)) : C("", !0),
      (d(!0), c(w, null, G(y.value, (e) => (d(), c(w, null, [
        l(m)[e].visible ? (d(), c("div", {
          key: 0,
          class: I(["cell column column-main", z(e)]),
          ref_for: !0,
          ref: (r) => De(e, r),
          onClick: pe(() => te(e), ["stop"]),
          onMousedown: (r) => n(e, r),
          style: ie(J(e)),
          "data-column": e
        }, [
          p(t.$slots, "column", {
            columnKey: e,
            isGhost: !1
          }, void 0, !0),
          ee(e) ? (d(), c("div", {
            key: 0,
            class: "toggle-colored no-spacing",
            onClick: pe(() => Ne(e), ["stop"]),
            style: ie({ top: `${a(e)}px` })
          }, [
            p(t.$slots, "colorizeLabel", {
              enabled: K(e) >= 0
            }, void 0, !0)
          ], 12, qe)) : C("", !0)
        ], 46, Ae)) : C("", !0)
      ], 64))), 256)),
      l(O) ? (d(!0), c(w, { key: 1 }, G(y.value, (e) => (d(), c(w, null, [
        l(m)[e].visible ? (d(), c("div", {
          key: 0,
          class: I(["cell column column-main column-ghost", z(e)]),
          style: ie(T(e)),
          "data-column": e
        }, [
          p(t.$slots, "column", {
            columnKey: e,
            isGhost: !0
          }, void 0, !0)
        ], 14, Ge)) : C("", !0)
      ], 64))), 256)) : C("", !0),
      (d(!0), c(w, null, G(l(Z), (e, r) => (d(), c(w, null, [
        l(W) ? (d(), c("div", Ye, [
          Ce(Pe, {
            value: e.icon
          }, null, 8, ["value"])
        ])) : C("", !0),
        (d(!0), c(w, null, G(y.value, (s) => (d(), c("div", {
          class: I(["cell column cell-additional-header", [`cell-additional-header-${s}`]]),
          "data-additionalHeader": r,
          "data-column": s
        }, [
          p(t.$slots, "additionalHeader", {
            additionalHeader: r,
            columnKey: s
          }, void 0, !0)
        ], 10, Je))), 256))
      ], 64))), 256)),
      l(H) && l(j) ? (d(), c(w, { key: 2 }, [
        l(W) ? (d(), c("div", Qe, [
          p(t.$slots, "topTotalRowNumber", {}, void 0, !0)
        ])) : C("", !0),
        (d(!0), c(w, null, G(y.value, (e) => (d(), c(w, null, [
          l(m)[e].visible ? (d(), c(w, { key: 0 }, [
            l(i) && (l(m)[e].colspan || 1) !== 1 ? (d(!0), c(w, { key: 0 }, G(l(m)[e].colspan, (r) => (d(), c("div", {
              class: "cell total top-total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              p(t.$slots, "topTotal", {
                columnKey: e,
                subcolumnKey: L(r - 1),
                values: u.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, Ze))), 256)) : (d(), c("div", {
              key: 1,
              class: "cell total top-total",
              "data-column": e
            }, [
              p(t.$slots, "topTotal", {
                columnKey: e,
                values: u.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, xe))
          ], 64)) : C("", !0)
        ], 64))), 256))
      ], 64)) : C("", !0),
      l(i) ? (d(!0), c(w, { key: 3 }, G(y.value, (e) => (d(), c(w, null, [
        l(m)[e].visible && l(m)[e].colspan ? (d(!0), c(w, { key: 0 }, G(l(m)[e].colspan, (r) => (d(), c("div", {
          class: I(["cell column column-secondary", z(e, r - 1)]),
          onClick: pe(() => te(e, r - 1), ["stop"]),
          "data-column": e,
          "data-subcolumn-index": r - 1
        }, [
          p(t.$slots, "secondaryColumn", {
            columnKey: e,
            subcolumnKey: L(r - 1)
          }, void 0, !0)
        ], 10, Ve))), 256)) : C("", !0)
      ], 64))), 256)) : C("", !0),
      (d(!0), c(w, null, G(u.value, (e, r) => (d(), c(w, null, [
        l(W) ? (d(), c("div", {
          key: 0,
          class: I(["cell row-number", { even: r % 2 === 0 }])
        }, [
          p(t.$slots, "rowNumber", {
            value: ne(e.rowInfo)
          }, () => [
            ge(je(ne(e.rowInfo)), 1)
          ], !0)
        ], 2)) : C("", !0),
        (d(!0), c(w, null, G(y.value, (s) => (d(), c(w, null, [
          !l(i) || (l(m)[s].colspan || 1) === 1 ? (d(), c("div", {
            key: 0,
            class: I(["cell", f(e, r, s)]),
            "data-column": s,
            "data-primary-key": e[l(x)]
          }, [
            p(t.$slots, "row", {
              columnKey: s,
              index: r,
              row: e,
              subindex: e.rowInfo.subindex,
              value: e[s]
            }, void 0, !0)
          ], 10, Ke)) : (d(!0), c(w, { key: 1 }, G(l(m)[s].colspan, (h) => (d(), c("div", {
            class: I(["cell", f(e, r, s, h - 1)]),
            "data-column": s,
            "data-primary-key": e[l(x)],
            "data-subcolumn-index": h - 1
          }, [
            p(t.$slots, "row", {
              columnKey: s,
              index: r,
              row: e,
              spanIndex: l(i) ? l(i)[h - 1] : h - 1,
              subcolumnKey: L(h - 1),
              subindex: e.rowInfo.subindex,
              value: e[s] ? e[s][l(i) ? l(i)[h - 1] : h - 1] : void 0
            }, void 0, !0)
          ], 10, et))), 256))
        ], 64))), 256))
      ], 64))), 256)),
      u.value.length === 0 && l(ae) ? (d(), c("div", {
        class: "cell odd no-data",
        key: "row-no-data",
        style: ie({ "grid-column": `1 / span ${se.value}` }),
        innerHTML: l(U)
      }, null, 12, tt)) : C("", !0),
      l(j) ? (d(), c(w, { key: 5 }, [
        l(W) ? (d(), c("div", ot, [
          p(t.$slots, "totalRowNumber", {}, () => [
            ge("#")
          ], !0)
        ])) : C("", !0),
        (d(!0), c(w, null, G(y.value, (e) => (d(), c(w, null, [
          l(m)[e].visible ? (d(), c(w, { key: 0 }, [
            l(i) && (l(m)[e].colspan || 1) !== 1 ? (d(!0), c(w, { key: 0 }, G(l(m)[e].colspan, (r) => (d(), c("div", {
              class: "cell total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              p(t.$slots, "total", {
                columnKey: e,
                subcolumnKey: L(r - 1),
                values: u.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, lt))), 256)) : (d(), c("div", {
              key: 1,
              class: "cell total",
              "data-column": e
            }, [
              p(t.$slots, "total", {
                columnKey: e,
                values: u.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, at))
          ], 64)) : C("", !0)
        ], 64))), 256))
      ], 64)) : C("", !0)
    ], 6));
  }
});
const Oe = /* @__PURE__ */ Te(st, [["__scopeId", "data-v-6c07e227"]]), rt = /* @__PURE__ */ ye({
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
    const Q = ve, {
      additionalHeaders: de,
      cellClasses: Z,
      colorMetrics: A,
      coloredMetrics: le,
      columns: q,
      comparisonColumnKeys: m,
      detailsRows: i,
      dragColumns: _,
      fixedColumnNumber: O,
      inversedKpis: N,
      orderBy: U,
      primaryColumn: $,
      rows: k,
      scrollPosition: x,
      showRowNumber: oe,
      showTopTotal: ae,
      showTotal: W
    } = $e(Q), j = g(0), H = g(), b = g(0), E = g(0);
    Be(() => fe.disconnect());
    const X = B(
      () => Object.keys(q.value).slice(0, O.value).reduce((u, v) => (u[v] = q.value[v], u), {})
    ), Y = B(
      () => Object.keys(q.value).slice(O.value).reduce((u, v) => (u[v] = q.value[v], u), {})
    ), ce = B(
      () => Object.keys(i.value).reduce(
        (u, v) => u + v.length,
        Object.values(k.value).length
      )
    ), D = B(() => {
      var v, a, f;
      const u = {};
      return (v = H.value) != null && v.main && (u["--header-main-height"] = `${H.value.main}px`), (a = H.value) != null && a.secondary && (u["--header-secondary-height"] = `${H.value.secondary}px`), j.value && (u["--fixed-width"] = `${j.value}px`), (f = H.value) != null && f.total && (u["--header-total-height"] = `${H.value.total}px`), b.value ? (u["--total-height"] = `${b.value}px`, u["--bottom-height"] = u["--total-height"]) : (ce.value === 1 ? u["--total-scrollbar-display"] = "none" : u["--total-height"] = "20px", u["--bottom-height"] = "0px"), u;
    }), y = g(), se = g(), V = g(!1), he = () => {
      var f, R;
      if (V.value)
        return;
      V.value = !0, j.value = 0, H.value = void 0, b.value = 0;
      const u = (z) => {
        const T = {
          hasSecondary: !1,
          mainColumnHeight: 0,
          secondaryColumnHeight: 0,
          totalColumnHeight: 0,
          totalHeight: 0,
          width: 0
        };
        if (!z)
          return T;
        const J = [
          ...z.querySelectorAll(".cell.column-main:not(.column-main-extended)")
        ], L = [
          ...z.querySelectorAll(".cell.column-main.column-main-extended")
        ], ue = z.querySelector(".cell.column-secondary"), ne = z.querySelector(".cell.total"), K = [];
        return J.length > 0 && (T.mainColumnHeight = J[0].offsetHeight, T.width = J.reduce((ee, { offsetWidth: te }) => ee + te, 0), K.push(T.mainColumnHeight)), ue && (T.hasSecondary = !0, T.secondaryColumnHeight = ue.offsetHeight, K.push(T.secondaryColumnHeight)), L.length > 0 && (T.width = L.reduce((ee, { offsetWidth: te }) => ee + te, 0), J.length === 0 && (T.mainColumnHeight = L[0].offsetHeight, K.push(T.mainColumnHeight))), T.totalColumnHeight = K.reduce((ee, te) => ee + te + 1, -1), ne && (T.totalHeight = ne.offsetHeight), T;
      }, v = u((f = y.value) == null ? void 0 : f.$el), a = u((R = se.value) == null ? void 0 : R.$el);
      if (a.hasSecondary)
        j.value = v.width, H.value = {
          main: a.mainColumnHeight,
          secondary: a.secondaryColumnHeight,
          total: Math.max(v.totalColumnHeight, a.totalColumnHeight)
        }, b.value = v.totalHeight;
      else {
        const z = Math.max(
          v.totalColumnHeight,
          a.totalColumnHeight
        );
        j.value = v.width, H.value = {
          main: z,
          total: z
        }, b.value = v.totalHeight;
      }
      Re(() => {
        V.value = !1;
      });
    }, fe = new ResizeObserver(() => he()), re = g();
    return Re(() => {
      fe.disconnect(), re.value && fe.observe(re.value);
    }), we(k, () => {
      E.value = Math.random();
    }), (u, v) => (d(), c("div", {
      class: "table-container",
      ref_key: "tableContainer",
      ref: re
    }, [
      Ce(Xe, {
        "onUpdate:scrollPosition": v[7] || (v[7] = (a) => u.$emit("update:scrollPosition", a)),
        scrollHeightDelta: (H.value ? H.value.total : 0) + b.value - 40,
        scrollPosition: l(x),
        scrollWidthDelta: j.value,
        style: ie(D.value),
        updateKey: E.value,
        mode: "both-top",
        optimized: ""
      }, {
        default: S(() => [
          Ce(Oe, {
            class: "fixed",
            ref_key: "fixedTable",
            ref: y,
            onAddColoredMetric: v[0] || (v[0] = (a) => u.$emit("addColoredMetric", a)),
            onRemoveColoredMetric: v[1] || (v[1] = (a) => u.$emit("removeColoredMetric", a)),
            "onUpdate:orderBy": v[2] || (v[2] = (a) => u.$emit("update:orderBy", a)),
            additionalHeaders: l(de),
            cellClasses: l(Z),
            colorMetrics: l(A),
            coloredMetrics: l(le),
            columns: X.value,
            comparisonColumnKeys: l(m),
            detailsRows: l(i),
            dragColumns: !1,
            inversedKpis: l(N),
            orderBy: l(U),
            orderColumnType: l(q)[l(U)[0][0]].type,
            primaryColumn: l($),
            rows: l(k),
            showNoDataMessage: !0,
            showRowNumber: l(oe),
            showTopTotal: l(ae),
            showTotal: l(W)
          }, {
            columnRowNumber: S(() => [
              p(u.$slots, "columnRowNumber", {}, () => [
                ge("#")
              ], !0)
            ]),
            colorizeLabel: S(({ enabled: a }) => [
              p(u.$slots, "colorizeLabel", { enabled: a }, void 0, !0)
            ]),
            column: S(({ columnKey: a, isGhost: f }) => [
              a in X.value ? p(u.$slots, "column", {
                key: 0,
                columnKey: a,
                isGhost: f
              }, void 0, !0) : C("", !0)
            ]),
            additionalHeader: S(({ additionalHeader: a, columnKey: f }) => [
              p(u.$slots, "additionalHeader", {
                additionalHeader: a,
                columnKey: f
              }, void 0, !0)
            ]),
            topTotal: S(({ columnKey: a, subcolumnKey: f, values: R }) => [
              a in X.value ? p(u.$slots, "topTotal", {
                key: 0,
                columnKey: a,
                subcolumnKey: f,
                values: R
              }, void 0, !0) : C("", !0)
            ]),
            topTotalRowNumber: S(() => [
              p(u.$slots, "topTotalRowNumber", {}, void 0, !0)
            ]),
            secondaryColumn: S(({ columnKey: a, subcolumnKey: f }) => [
              a in X.value ? p(u.$slots, "secondaryColumn", {
                key: 0,
                columnKey: a,
                subcolumnKey: f
              }, void 0, !0) : C("", !0)
            ]),
            rowNumber: S(({ value: a }) => [
              p(u.$slots, "rowNumber", { value: a }, void 0, !0)
            ]),
            row: S(({ columnKey: a, index: f, row: R, spanIndex: z, subcolumnKey: T, subindex: J, value: L }) => [
              a in X.value ? p(u.$slots, "row", {
                key: 0,
                columnKey: a,
                index: f,
                row: R,
                spanIndex: z,
                subcolumnKey: T,
                subindex: J,
                value: L
              }, void 0, !0) : C("", !0)
            ]),
            totalRowNumber: S(() => [
              p(u.$slots, "totalRowNumber", {}, () => [
                ge("#")
              ], !0)
            ]),
            total: S(({ columnKey: a, subcolumnKey: f, values: R }) => [
              a in X.value ? p(u.$slots, "total", {
                key: 0,
                columnKey: a,
                subcolumnKey: f,
                values: R
              }, void 0, !0) : C("", !0)
            ]),
            _: 3
          }, 8, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "inversedKpis", "orderBy", "orderColumnType", "primaryColumn", "rows", "showRowNumber", "showTopTotal", "showTotal"]),
          Ce(Oe, {
            ref_key: "scrollableTable",
            ref: se,
            onAddColoredMetric: v[3] || (v[3] = (a) => u.$emit("addColoredMetric", a)),
            "onMove:column": v[4] || (v[4] = ({ from: a, to: f }) => u.$emit("move:column", { from: a + l(O), to: f + l(O) })),
            onRemoveColoredMetric: v[5] || (v[5] = (a) => u.$emit("removeColoredMetric", a)),
            "onUpdate:orderBy": v[6] || (v[6] = (a) => u.$emit("update:orderBy", a)),
            additionalHeaders: l(de),
            cellClasses: l(Z),
            colorMetrics: l(A),
            coloredMetrics: l(le),
            columns: Y.value,
            comparisonColumnKeys: l(m),
            detailsRows: l(i),
            inversedKpis: l(N),
            dragColumns: l(_),
            orderBy: l(U),
            orderColumnType: l(q)[l(U)[0][0]].type,
            primaryColumn: l($),
            rows: l(k),
            showRowNumber: !1,
            showTopTotal: l(ae),
            showTotal: l(W),
            showNoDataMessage: !0,
            noDataMessage: u.noDataMessage,
            style: ie(D.value)
          }, {
            colorizeLabel: S(({ enabled: a }) => [
              p(u.$slots, "colorizeLabel", { enabled: a }, void 0, !0)
            ]),
            column: S(({ columnKey: a, isGhost: f }) => [
              a in Y.value ? p(u.$slots, "column", {
                key: 0,
                columnKey: a,
                isGhost: f
              }, void 0, !0) : C("", !0)
            ]),
            additionalHeader: S(({ additionalHeader: a, columnKey: f }) => [
              p(u.$slots, "additionalHeader", {
                additionalHeader: a,
                columnKey: f
              }, void 0, !0)
            ]),
            topTotal: S(({ columnKey: a, subcolumnKey: f, values: R }) => [
              a in Y.value ? p(u.$slots, "topTotal", {
                key: 0,
                columnKey: a,
                subcolumnKey: f,
                values: R
              }, void 0, !0) : C("", !0)
            ]),
            secondaryColumn: S(({ columnKey: a, subcolumnKey: f }) => [
              a in Y.value ? p(u.$slots, "secondaryColumn", {
                key: 0,
                columnKey: a,
                subcolumnKey: f
              }, void 0, !0) : C("", !0)
            ]),
            row: S(({ columnKey: a, index: f, row: R, spanIndex: z, subcolumnKey: T, subindex: J, value: L }) => [
              a in Y.value ? p(u.$slots, "row", {
                key: 0,
                columnKey: a,
                index: f,
                row: R,
                spanIndex: z,
                subcolumnKey: T,
                subindex: J,
                value: L
              }, void 0, !0) : C("", !0)
            ]),
            total: S(({ columnKey: a, subcolumnKey: f, values: R }) => [
              a in Y.value ? p(u.$slots, "total", {
                key: 0,
                columnKey: a,
                subcolumnKey: f,
                values: R
              }, void 0, !0) : C("", !0)
            ]),
            _: 3
          }, 8, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "inversedKpis", "dragColumns", "orderBy", "orderColumnType", "primaryColumn", "rows", "showTopTotal", "showTotal", "noDataMessage", "style"])
        ]),
        _: 3
      }, 8, ["scrollHeightDelta", "scrollPosition", "scrollWidthDelta", "style", "updateKey"])
    ], 512));
  }
});
const ct = /* @__PURE__ */ Te(rt, [["__scopeId", "data-v-e34c13ff"]]);
export {
  Xe as S,
  ct as T,
  Se as a,
  Oe as b
};
