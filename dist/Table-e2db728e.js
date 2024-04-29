import { defineComponent as ye, toRefs as $e, computed as _, openBlock as d, createElementBlock as c, normalizeClass as U, unref as a, withModifiers as ve, createElementVNode as Oe, normalizeStyle as se, ref as g, onUnmounted as Ne, onMounted as We, watch as we, nextTick as Re, withMemo as je, renderSlot as p, createBlock as He, createCommentVNode as w, createTextVNode as ge, Fragment as C, renderList as I, createVNode as Ce, toDisplayString as Ee, withCtx as S, createSlots as _e } from "vue";
import { _ as Te } from "./_plugin-vue_export-helper-dad06003.js";
import { D as Pe } from "./datetime-31a2b505.js";
import { I as Fe } from "./Icon-8f2ed8ba.js";
const Ie = { class: "scrollbar" }, Ue = /* @__PURE__ */ ye({
  __name: "ScrollableArea",
  props: {
    active: { type: Boolean },
    mode: {},
    thumbOffset: {},
    thumbSize: {}
  },
  emits: ["mousedown"],
  setup(ue, { emit: Q }) {
    const re = ue, { active: Z, mode: G, thumbOffset: te, thumbSize: X } = $e(re), m = _(() => {
      const [i, z] = G.value === "vertical" ? ["top", "height"] : ["left", "width"];
      return {
        [i]: `calc(3px + ${te.value} * (100% - ${X.value} - 6px))`,
        [z]: `${X.value}`
      };
    });
    return (i, z) => (d(), c("div", {
      class: U(["scrollable-area", { active: a(Z), [a(G)]: !0 }]),
      onMousedown: z[0] || (z[0] = ve((O) => Q("mousedown", O), ["stop"]))
    }, [
      Oe("div", Ie, [
        Oe("div", {
          class: "thumb",
          style: se(m.value)
        }, null, 4)
      ])
    ], 34));
  }
});
const Se = /* @__PURE__ */ Te(Ue, [["__scopeId", "data-v-56aba386"]]), Xe = /* @__PURE__ */ ye({
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
  setup(ue, { emit: Q }) {
    const re = ue, { mode: Z, relativeTo: G, scrollPosition: te, scrollHeightDelta: X, scrollWidthDelta: m, staticPosition: i } = $e(re), z = g(!1), O = g(0), B = g(0), A = g(0), T = g(0), k = g(), x = g(), K = g(), oe = g(), L = g(), W = g(0), H = g(0), b = g(), j = _(() => W.value / (T.value - B.value)), q = _(
      () => `max(56px, (100% - 14px) * ${B.value / T.value})`
    ), Y = _(
      () => `max(56px, (100% - 14px) * ${O.value / A.value})`
    ), ne = _(() => H.value / (A.value - O.value)), N = g();
    Ne(() => {
      D.disconnect(), ce.disconnect();
    });
    const y = () => {
      k.value && (b.value !== void 0 && (clearTimeout(b.value), b.value = void 0), z.value = !1, k.value = void 0);
    }, le = () => G != null && G.value ? G.value() : N.value, V = (u) => {
      const P = le();
      P && P.scrollTo(u);
    }, ie = (u) => {
      V({
        left: ((oe == null ? void 0 : oe.value) ?? 0) + u * T.value / (B.value - m.value)
      });
    }, de = (u) => {
      V({
        top: ((L == null ? void 0 : L.value) ?? 0) + u * A.value / (O.value - X.value)
      });
    }, ae = (u) => {
      if (k.value) {
        switch (k.value) {
          case "horizontal":
            ie(u.clientX - ((x == null ? void 0 : x.value) ?? 0));
            break;
          case "vertical":
            de(u.clientY - ((K == null ? void 0 : K.value) ?? 0));
            break;
        }
        u.preventDefault();
      }
    }, n = () => {
      k.value = void 0, me(), window.removeEventListener("mousemove", ae), window.removeEventListener("mouseup", n);
    }, v = (u, P) => {
      y(), z.value = !0, k.value = P;
      const F = le();
      switch (k.value) {
        case "horizontal":
          x.value = u.clientX, oe.value = (F == null ? void 0 : F.scrollLeft) ?? 0;
          break;
        case "vertical":
          K.value = u.clientY, L.value = (F == null ? void 0 : F.scrollTop) ?? 0;
          break;
      }
      window.addEventListener("mousemove", ae), window.addEventListener("mouseup", n);
    }, o = (u) => {
      O.value !== u.clientHeight && (O.value = u.clientHeight);
    }, f = (u) => {
      B.value !== u.clientWidth && (B.value = u.clientWidth);
    }, $ = (u) => {
      A.value !== u.scrollHeight && (A.value = u.scrollHeight);
    }, E = (u) => {
      T.value !== u.scrollWidth && (T.value = u.scrollWidth);
    }, ee = (u) => {
      W.value = u.scrollLeft, Q("update:scrollPosition", {
        left: W.value,
        top: H.value
      });
    }, J = (u) => {
      H.value = u.scrollTop, Q("update:scrollPosition", {
        left: W.value,
        top: H.value
      });
    }, R = () => {
      const u = le();
      u && (o(u), f(u), $(u), E(u));
    }, D = new MutationObserver(() => R()), ce = new ResizeObserver(() => R()), fe = (u) => {
      ee(u.target), J(u.target);
    }, me = () => {
      R(), !k.value && (y(), z.value = !0, b.value = window.setTimeout(() => {
        z.value = !1;
      }, 2500));
    }, he = () => {
      D.disconnect(), ce.disconnect();
      const u = le();
      u && (D.observe(u, {
        childList: !0,
        subtree: !0
      }), ce.observe(u));
    };
    return We(() => {
      he();
    }), we(G, () => he()), we(
      te,
      (u) => {
        W.value = u.left, H.value = u.top, Re(() => V(u));
      },
      {
        deep: !0,
        immediate: !0
      }
    ), (u, P) => (d(), c("div", {
      class: U(["scrollable", { [`mode-${a(Z)}`]: !0, static: a(i) }])
    }, [
      u.optimized ? je([u.updateKey], () => (d(), c("div", {
        class: U(["scrollable-content", u.contentClass]),
        ref_key: "content",
        ref: N,
        key: u.updateKey,
        onMousemove: me,
        onScroll: fe
      }, [
        p(u.$slots, "default", {}, void 0, !0)
      ], 34)), P, 0) : (d(), c("div", {
        key: 1,
        class: U(["scrollable-content", u.contentClass]),
        ref_key: "content",
        ref: N,
        onMousemove: me,
        onScroll: fe
      }, [
        p(u.$slots, "default", {}, void 0, !0)
      ], 34)),
      a(Z) !== "vertical" ? (d(), He(Se, {
        key: 2,
        onMousedown: P[1] || (P[1] = ve((F) => v(F, "horizontal"), ["stop"])),
        active: T.value > B.value && (z.value || k.value === "horizontal"),
        class: U({ "scrollbar-visible": T.value > B.value }),
        thumbOffset: j.value,
        thumbSize: q.value,
        mode: "horizontal"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0),
      a(Z) === "both-top" ? (d(), He(Se, {
        key: 3,
        onMousedown: P[2] || (P[2] = ve((F) => v(F, "horizontal"), ["stop"])),
        active: T.value > B.value && (z.value || k.value === "horizontal"),
        class: U({ "scrollbar-visible": T.value > B.value }),
        thumbOffset: j.value,
        thumbSize: q.value,
        mode: "horizontal-top"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0),
      a(Z) !== "horizontal" ? (d(), He(Se, {
        key: 4,
        onMousedown: P[3] || (P[3] = ve((F) => v(F, "vertical"), ["stop"])),
        active: A.value > O.value && (z.value || k.value === "vertical"),
        class: U({ "scrollbar-visible": A.value > O.value }),
        thumbOffset: ne.value,
        thumbSize: Y.value,
        mode: "vertical"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0)
    ], 2));
  }
});
const Ae = /* @__PURE__ */ Te(Xe, [["__scopeId", "data-v-21092b38"]]), qe = ["onClick", "onMousedown", "data-column"], Ge = ["onClick"], Ye = ["data-column"], Je = {
  key: 0,
  class: "cell column cell-additional-header row-number"
}, Qe = ["data-additionalHeader", "data-column"], Ze = {
  key: 0,
  class: "cell total top-total row-number"
}, xe = ["data-column", "data-subcolumn-index"], Ve = ["data-column"], Ke = ["onClick", "data-column", "data-subcolumn-index"], et = ["data-column", "data-primary-key"], tt = ["data-column", "data-primary-key", "data-subcolumn-index"], ot = ["innerHTML"], lt = {
  key: 0,
  class: "cell total row-number"
}, at = ["data-column", "data-subcolumn-index"], st = ["data-column"], rt = /* @__PURE__ */ ye({
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
  setup(ue, { emit: Q }) {
    const re = ue, {
      additionalHeaders: Z,
      cellClasses: G,
      colorMetrics: te,
      coloredMetrics: X,
      columns: m,
      comparisonColumnKeys: i,
      detailsRows: z,
      dragColumns: O,
      inversedKpis: B,
      noDataMessage: A,
      orderBy: T,
      orderColumnType: k,
      primaryColumn: x,
      rows: K,
      showNoDataMessage: oe,
      showRowNumber: L,
      showTotal: W,
      showTopTotal: H
    } = $e(re), b = g(), j = g(), q = g(0), Y = g(0), ne = g(0), N = g({}), y = _(
      () => Object.entries(m.value).filter(([t, { visible: l }]) => l).map(([t, l]) => t)
    ), le = _(
      () => y.value.length + (L.value ? 1 : 0)
    ), V = _(() => q.value > 3), ie = _(
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
    ), de = _(
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
    ), ae = _(() => i != null && i.value ? y.value.map((t) => m.value[t].rowspan ?? 1).reduce((t, l) => t > l ? t : l) : 1), n = _(
      () => Object.values(K.value).sort((t, l) => {
        const e = (() => {
          const r = D(
            T.value[0].reduce((h, M) => h[M], t),
            k.value
          ), s = D(
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
    ), v = _(() => {
      let t = 0;
      for (const e of y.value) {
        const r = m.value[e];
        r.colspan && (i != null && i.value) ? t += r.colspan : t++;
      }
      let l = `repeat(${t}, auto)`;
      return L.value && (l = `min-content ${l}`), {
        "grid-template-columns": l
      };
    }), o = (t) => N.value[t] ? N.value[t].height : 0, f = (t, l, e, r) => {
      const s = {
        ...G.value,
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
    }, E = (t, l) => {
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
          l.left = `${Math.floor(r + ne.value - Y.value)}px`, l.height = `${e + 1}px`, l.width = `${Math.round(s)}px`;
        } else {
          const e = y.value.indexOf(t);
          let r = (() => {
            if (b.value === void 0 || j.value === void 0)
              return 0;
            if (b.value < e) {
              if (j.value >= e)
                return -N.value[y.value[b.value]].width;
            } else if (j.value <= e)
              return N.value[y.value[b.value]].width;
            return 0;
          })();
          const { height: s, left: h, width: M } = N.value[t];
          l.left = `${Math.floor(h + r)}px`, l.height = `${s + 1}px`, l.width = `${Math.floor(M)}px`;
        }
      return l;
    }, J = (t) => {
      const l = m.value[t], e = {};
      return i && i.value && (l.colspan && (e["grid-column-end"] = `span ${l.colspan}`), l.rowspan && (e["grid-row-end"] = `span ${l.rowspan}`)), e;
    }, R = (t) => i && i.value ? i.value[t] : void 0, D = (t, l) => {
      switch (l) {
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
    }, ce = (t) => t.subindex === void 0 ? t.index + 1 : `${t.index + 1}.${t.subindex + 1}`, fe = (t) => X.value.findIndex((l) => l === t), me = (t) => te.value && !["date", "string"].includes(m.value[t].type), he = (t, l) => {
      if (i && i.value && m.value[t].colspan && l === void 0 || b.value !== void 0 && V.value && y.value[b.value] === t)
        return;
      const e = [t];
      l !== void 0 && (i && i.value ? e.push(i.value[l]) : e.push(l.toString()));
      const r = e.every(
        (h, M) => h === T.value[0][M]
      ), s = (() => r ? !T.value[1] : m.value[t].type !== "string")();
      Q("update:orderBy", [e, s]);
    }, u = (t, l) => {
      O.value && (b.value = y.value.indexOf(t), j.value = b.value, q.value = 0, Y.value = l.clientX, ne.value = l.clientX, window.addEventListener("mousemove", P), window.addEventListener("mouseup", F));
    }, P = (t) => {
      if (b.value === void 0)
        return;
      q.value++, ne.value = t.clientX;
      const l = Object.entries(m.value).filter(([M, pe]) => pe.visible).map(([M]) => M).map((M, pe) => ({
        columnIndex: parseInt(pe.toString()),
        sizing: N.value[M]
      })), e = l[b.value].sizing, r = e.width / 2, h = e.left + ne.value - Y.value;
      j.value = (() => {
        for (const { columnIndex: M, sizing: pe } of l)
          if (h + r - pe.left - pe.width < 0)
            return M;
        return l.length;
      })();
    }, F = (t) => {
      if (b.value === void 0 || j.value === void 0)
        return;
      V.value && j.value !== b.value && Q("move:column", {
        from: b.value,
        to: j.value
      }), j.value = void 0, q.value = 0, b.value = void 0, window.removeEventListener("mousemove", P), window.removeEventListener("mouseup", F);
    }, De = (t) => {
      fe(t) >= 0 ? Q("removeColoredMetric", t) : Q("addColoredMetric", t);
    }, be = g({}), Le = (t, l) => {
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
    ), ke(), (t, l) => (d(), c("div", {
      class: U(["table", {
        "with-secondary": !!a(i) && y.value.some((e) => (a(m)[e].colspan || 1) !== 1)
      }]),
      ref_key: "table",
      ref: Me,
      style: se(v.value)
    }, [
      a(L) ? (d(), c("div", {
        key: 0,
        class: "cell column column-main row-number",
        style: se(ae.value > 1 ? { "grid-row-end": `span ${ae.value}` } : void 0)
      }, [
        p(t.$slots, "columnRowNumber", {}, () => [
          ge("#")
        ], !0)
      ], 4)) : w("", !0),
      (d(!0), c(C, null, I(y.value, (e) => (d(), c(C, null, [
        a(m)[e].visible ? (d(), c("div", {
          key: 0,
          class: U(["cell column column-main", E(e)]),
          ref_for: !0,
          ref: (r) => Le(e, r),
          onClick: ve(() => he(e), ["stop"]),
          onMousedown: (r) => u(e, r),
          style: se(J(e)),
          "data-column": e
        }, [
          p(t.$slots, "column", {
            columnKey: e,
            isGhost: !1
          }, void 0, !0),
          me(e) ? (d(), c("div", {
            key: 0,
            class: "toggle-colored no-spacing",
            onClick: ve(() => De(e), ["stop"]),
            style: se({ top: `${o(e)}px` })
          }, [
            p(t.$slots, "colorizeLabel", {
              enabled: fe(e) >= 0
            }, void 0, !0)
          ], 12, Ge)) : w("", !0)
        ], 46, qe)) : w("", !0)
      ], 64))), 256)),
      a(O) ? (d(!0), c(C, { key: 1 }, I(y.value, (e) => (d(), c(C, null, [
        a(m)[e].visible ? (d(), c("div", {
          key: 0,
          class: U(["cell column column-main column-ghost", E(e)]),
          style: se(ee(e)),
          "data-column": e
        }, [
          p(t.$slots, "column", {
            columnKey: e,
            isGhost: !0
          }, void 0, !0)
        ], 14, Ye)) : w("", !0)
      ], 64))), 256)) : w("", !0),
      (d(!0), c(C, null, I(a(Z), (e, r) => (d(), c(C, null, [
        a(L) ? (d(), c("div", Je, [
          Ce(Fe, {
            value: e.icon
          }, null, 8, ["value"])
        ])) : w("", !0),
        (d(!0), c(C, null, I(y.value, (s) => (d(), c("div", {
          class: U(["cell column cell-additional-header", [`cell-additional-header-${s}`]]),
          "data-additionalHeader": r,
          "data-column": s
        }, [
          p(t.$slots, "additionalHeader", {
            additionalHeader: r,
            columnKey: s
          }, void 0, !0)
        ], 10, Qe))), 256))
      ], 64))), 256)),
      a(H) && a(W) ? (d(), c(C, { key: 2 }, [
        a(L) ? (d(), c("div", Ze, [
          p(t.$slots, "topTotalRowNumber", {}, void 0, !0)
        ])) : w("", !0),
        (d(!0), c(C, null, I(y.value, (e) => (d(), c(C, null, [
          a(m)[e].visible ? (d(), c(C, { key: 0 }, [
            a(i) && (a(m)[e].colspan || 1) !== 1 ? (d(!0), c(C, { key: 0 }, I(a(m)[e].colspan, (r) => (d(), c("div", {
              class: "cell total top-total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              p(t.$slots, "topTotal", {
                columnKey: e,
                subcolumnKey: R(r - 1),
                values: n.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, xe))), 256)) : (d(), c("div", {
              key: 1,
              class: "cell total top-total",
              "data-column": e
            }, [
              p(t.$slots, "topTotal", {
                columnKey: e,
                values: n.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, Ve))
          ], 64)) : w("", !0)
        ], 64))), 256))
      ], 64)) : w("", !0),
      a(i) ? (d(!0), c(C, { key: 3 }, I(y.value, (e) => (d(), c(C, null, [
        a(m)[e].visible && a(m)[e].colspan ? (d(!0), c(C, { key: 0 }, I(a(m)[e].colspan, (r) => (d(), c("div", {
          class: U(["cell column column-secondary", E(e, r - 1)]),
          onClick: ve(() => he(e, r - 1), ["stop"]),
          "data-column": e,
          "data-subcolumn-index": r - 1
        }, [
          p(t.$slots, "secondaryColumn", {
            columnKey: e,
            subcolumnKey: R(r - 1)
          }, void 0, !0)
        ], 10, Ke))), 256)) : w("", !0)
      ], 64))), 256)) : w("", !0),
      (d(!0), c(C, null, I(n.value, (e, r) => (d(), c(C, null, [
        a(L) ? (d(), c("div", {
          key: 0,
          class: U(["cell row-number", { even: r % 2 === 0 }])
        }, [
          p(t.$slots, "rowNumber", {
            value: ce(e.rowInfo)
          }, () => [
            ge(Ee(ce(e.rowInfo)), 1)
          ], !0)
        ], 2)) : w("", !0),
        (d(!0), c(C, null, I(y.value, (s) => (d(), c(C, null, [
          !a(i) || (a(m)[s].colspan || 1) === 1 ? (d(), c("div", {
            key: 0,
            class: U(["cell", f(e, r, s)]),
            "data-column": s,
            "data-primary-key": e[a(x)]
          }, [
            p(t.$slots, `row-${s}`, {
              columnKey: s,
              index: r,
              row: e,
              subindex: e.rowInfo.subindex,
              value: e[s]
            }, void 0, !0)
          ], 10, et)) : (d(!0), c(C, { key: 1 }, I(a(m)[s].colspan, (h) => (d(), c("div", {
            class: U(["cell", f(e, r, s, h - 1)]),
            "data-column": s,
            "data-primary-key": e[a(x)],
            "data-subcolumn-index": h - 1
          }, [
            p(t.$slots, `row-${s}`, {
              columnKey: s,
              index: r,
              row: e,
              spanIndex: a(i) ? a(i)[h - 1] : h - 1,
              subcolumnKey: R(h - 1),
              subindex: e.rowInfo.subindex,
              value: e[s] ? e[s][a(i) ? a(i)[h - 1] : h - 1] : void 0
            }, void 0, !0)
          ], 10, tt))), 256))
        ], 64))), 256))
      ], 64))), 256)),
      n.value.length === 0 && a(oe) ? (d(), c("div", {
        class: "cell odd no-data",
        key: "row-no-data",
        style: se({ "grid-column": `1 / span ${le.value}` }),
        innerHTML: a(A)
      }, null, 12, ot)) : w("", !0),
      a(W) ? (d(), c(C, { key: 5 }, [
        a(L) ? (d(), c("div", lt, [
          p(t.$slots, "totalRowNumber", {}, () => [
            ge("#")
          ], !0)
        ])) : w("", !0),
        (d(!0), c(C, null, I(y.value, (e) => (d(), c(C, null, [
          a(m)[e].visible ? (d(), c(C, { key: 0 }, [
            a(i) && (a(m)[e].colspan || 1) !== 1 ? (d(!0), c(C, { key: 0 }, I(a(m)[e].colspan, (r) => (d(), c("div", {
              class: "cell total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              p(t.$slots, "total", {
                columnKey: e,
                subcolumnKey: R(r - 1),
                values: n.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, at))), 256)) : (d(), c("div", {
              key: 1,
              class: "cell total",
              "data-column": e
            }, [
              p(t.$slots, "total", {
                columnKey: e,
                values: n.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, st))
          ], 64)) : w("", !0)
        ], 64))), 256))
      ], 64)) : w("", !0)
    ], 6));
  }
});
const Be = /* @__PURE__ */ Te(rt, [["__scopeId", "data-v-5387f3c9"]]), nt = /* @__PURE__ */ ye({
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
  setup(ue) {
    const Q = ue, {
      additionalHeaders: re,
      cellClasses: Z,
      colorMetrics: G,
      coloredMetrics: te,
      columns: X,
      comparisonColumnKeys: m,
      detailsRows: i,
      dragColumns: z,
      fixedColumnNumber: O,
      inversedKpis: B,
      orderBy: A,
      primaryColumn: T,
      rows: k,
      scrollPosition: x,
      showRowNumber: K,
      showTopTotal: oe,
      showTotal: L
    } = $e(Q), W = g(0), H = g(), b = g(0), j = g(0);
    Ne(() => de.disconnect());
    const q = _(
      () => Object.keys(X.value).slice(0, O.value).reduce((n, v) => (n[v] = X.value[v], n), {})
    ), Y = _(
      () => Object.keys(X.value).slice(O.value).reduce((n, v) => (n[v] = X.value[v], n), {})
    ), ne = _(
      () => Object.keys(i.value).reduce(
        (n, v) => n + v.length,
        Object.values(k.value).length
      )
    ), N = _(() => {
      var v, o, f;
      const n = {};
      return (v = H.value) != null && v.main && (n["--header-main-height"] = `${H.value.main}px`), (o = H.value) != null && o.secondary && (n["--header-secondary-height"] = `${H.value.secondary}px`), W.value && (n["--fixed-width"] = `${W.value}px`), (f = H.value) != null && f.total && (n["--header-total-height"] = `${H.value.total}px`), b.value ? (n["--total-height"] = `${b.value}px`, n["--bottom-height"] = n["--total-height"]) : (ne.value === 1 ? n["--total-scrollbar-display"] = "none" : n["--total-height"] = "20px", n["--bottom-height"] = "0px"), n;
    }), y = g(), le = g(), V = g(!1), ie = () => {
      if (V.value)
        return;
      V.value = !0, W.value = 0, H.value = void 0, b.value = 0;
      const n = (v) => {
        const o = {
          hasSecondary: !1,
          mainColumnHeight: 0,
          secondaryColumnHeight: 0,
          totalColumnHeight: 0,
          totalHeight: 0,
          width: 0
        };
        if (!v)
          return o;
        const f = [
          ...v.querySelectorAll(".cell.column-main:not(.column-main-extended)")
        ], $ = [
          ...v.querySelectorAll(".cell.column-main.column-main-extended")
        ], E = v.querySelector(".cell.column-secondary"), ee = v.querySelector(".cell.total"), J = [];
        return f.length > 0 && (o.mainColumnHeight = f[0].offsetHeight, o.width = f.reduce((R, { offsetWidth: D }) => R + D, 0), J.push(o.mainColumnHeight)), E && (o.hasSecondary = !0, o.secondaryColumnHeight = E.offsetHeight, J.push(o.secondaryColumnHeight)), $.length > 0 && (o.width = $.reduce((R, { offsetWidth: D }) => R + D, 0), f.length === 0 && (o.mainColumnHeight = $[0].offsetHeight, J.push(o.mainColumnHeight))), o.totalColumnHeight = J.reduce((R, D) => R + D + 1, -1), ee && (o.totalHeight = ee.offsetHeight), o;
      };
      Re(() => {
        var f, $;
        const v = n((f = y.value) == null ? void 0 : f.$el), o = n(($ = le.value) == null ? void 0 : $.$el);
        if (o.hasSecondary)
          W.value = v.width, H.value = {
            main: o.mainColumnHeight,
            secondary: o.secondaryColumnHeight,
            total: Math.max(v.totalColumnHeight, o.totalColumnHeight)
          }, b.value = v.totalHeight;
        else {
          const E = Math.max(
            v.totalColumnHeight,
            o.totalColumnHeight
          );
          W.value = v.width, H.value = {
            main: E,
            total: E
          }, b.value = v.totalHeight;
        }
        V.value = !1;
      });
    }, de = new ResizeObserver(() => ie()), ae = g();
    return Re(() => {
      de.disconnect(), ae.value && de.observe(ae.value);
    }), we(k, (n, v) => {
      j.value = Math.random(), v.length || ie();
    }), we(X, () => {
      ie();
    }), (n, v) => (d(), c("div", {
      class: "table-container",
      ref_key: "tableContainer",
      ref: ae
    }, [
      Ce(Ae, {
        "onUpdate:scrollPosition": v[7] || (v[7] = (o) => n.$emit("update:scrollPosition", o)),
        scrollHeightDelta: (H.value ? H.value.total : 0) + b.value - 40,
        scrollPosition: a(x),
        scrollWidthDelta: W.value,
        style: se(N.value),
        updateKey: j.value,
        mode: "both-top",
        optimized: ""
      }, {
        default: S(() => [
          Ce(Be, {
            class: "fixed",
            ref_key: "fixedTable",
            ref: y,
            onAddColoredMetric: v[0] || (v[0] = (o) => n.$emit("addColoredMetric", o)),
            onRemoveColoredMetric: v[1] || (v[1] = (o) => n.$emit("removeColoredMetric", o)),
            "onUpdate:orderBy": v[2] || (v[2] = (o) => n.$emit("update:orderBy", o)),
            additionalHeaders: a(re),
            cellClasses: a(Z),
            colorMetrics: a(G),
            coloredMetrics: a(te),
            columns: q.value,
            comparisonColumnKeys: a(m),
            detailsRows: a(i),
            dragColumns: !1,
            inversedKpis: a(B),
            orderBy: a(A),
            orderColumnType: a(X)[a(A)[0][0]].type,
            primaryColumn: a(T),
            rows: a(k),
            showNoDataMessage: !0,
            showRowNumber: a(K),
            showTopTotal: a(oe),
            showTotal: a(L)
          }, _e({
            columnRowNumber: S(() => [
              p(n.$slots, "columnRowNumber", {}, () => [
                ge("#")
              ], !0)
            ]),
            colorizeLabel: S(({ enabled: o }) => [
              p(n.$slots, "colorizeLabel", { enabled: o }, void 0, !0)
            ]),
            column: S(({ columnKey: o, isGhost: f }) => [
              o in q.value ? p(n.$slots, "column", {
                key: 0,
                columnKey: o,
                isGhost: f
              }, void 0, !0) : w("", !0)
            ]),
            additionalHeader: S(({ additionalHeader: o, columnKey: f }) => [
              p(n.$slots, "additionalHeader", {
                additionalHeader: o,
                columnKey: f
              }, void 0, !0)
            ]),
            topTotal: S(({ columnKey: o, subcolumnKey: f, values: $ }) => [
              o in q.value ? p(n.$slots, "topTotal", {
                key: 0,
                columnKey: o,
                subcolumnKey: f,
                values: $
              }, void 0, !0) : w("", !0)
            ]),
            topTotalRowNumber: S(() => [
              p(n.$slots, "topTotalRowNumber", {}, void 0, !0)
            ]),
            secondaryColumn: S(({ columnKey: o, subcolumnKey: f }) => [
              o in q.value ? p(n.$slots, "secondaryColumn", {
                key: 0,
                columnKey: o,
                subcolumnKey: f
              }, void 0, !0) : w("", !0)
            ]),
            rowNumber: S(({ value: o }) => [
              p(n.$slots, "rowNumber", { value: o }, void 0, !0)
            ]),
            totalRowNumber: S(() => [
              p(n.$slots, "totalRowNumber", {}, () => [
                ge("#")
              ], !0)
            ]),
            total: S(({ columnKey: o, subcolumnKey: f, values: $ }) => [
              o in q.value ? p(n.$slots, "total", {
                key: 0,
                columnKey: o,
                subcolumnKey: f,
                values: $
              }, void 0, !0) : w("", !0)
            ]),
            _: 2
          }, [
            I(Object.keys(q.value), (o) => ({
              name: `row-${o}`,
              fn: S(({ columnKey: f, index: $, row: E, spanIndex: ee, subcolumnKey: J, subindex: R, value: D }) => [
                p(n.$slots, "row-" + f, {
                  columnKey: f,
                  index: $,
                  row: E,
                  spanIndex: ee,
                  subcolumnKey: J,
                  subindex: R,
                  value: D
                }, void 0, !0)
              ])
            }))
          ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "inversedKpis", "orderBy", "orderColumnType", "primaryColumn", "rows", "showRowNumber", "showTopTotal", "showTotal"]),
          Ce(Be, {
            ref_key: "scrollableTable",
            ref: le,
            onAddColoredMetric: v[3] || (v[3] = (o) => n.$emit("addColoredMetric", o)),
            "onMove:column": v[4] || (v[4] = ({ from: o, to: f }) => n.$emit("move:column", { from: o + a(O), to: f + a(O) })),
            onRemoveColoredMetric: v[5] || (v[5] = (o) => n.$emit("removeColoredMetric", o)),
            "onUpdate:orderBy": v[6] || (v[6] = (o) => n.$emit("update:orderBy", o)),
            additionalHeaders: a(re),
            cellClasses: a(Z),
            colorMetrics: a(G),
            coloredMetrics: a(te),
            columns: Y.value,
            comparisonColumnKeys: a(m),
            detailsRows: a(i),
            inversedKpis: a(B),
            dragColumns: a(z),
            orderBy: a(A),
            orderColumnType: a(X)[a(A)[0][0]].type,
            primaryColumn: a(T),
            rows: a(k),
            showRowNumber: !1,
            showTopTotal: a(oe),
            showTotal: a(L),
            showNoDataMessage: !0,
            noDataMessage: n.noDataMessage,
            style: se(N.value)
          }, _e({
            colorizeLabel: S(({ enabled: o }) => [
              p(n.$slots, "colorizeLabel", { enabled: o }, void 0, !0)
            ]),
            column: S(({ columnKey: o, isGhost: f }) => [
              o in Y.value ? p(n.$slots, "column", {
                key: 0,
                columnKey: o,
                isGhost: f
              }, void 0, !0) : w("", !0)
            ]),
            additionalHeader: S(({ additionalHeader: o, columnKey: f }) => [
              p(n.$slots, "additionalHeader", {
                additionalHeader: o,
                columnKey: f
              }, void 0, !0)
            ]),
            topTotal: S(({ columnKey: o, subcolumnKey: f, values: $ }) => [
              o in Y.value ? p(n.$slots, "topTotal", {
                key: 0,
                columnKey: o,
                subcolumnKey: f,
                values: $
              }, void 0, !0) : w("", !0)
            ]),
            secondaryColumn: S(({ columnKey: o, subcolumnKey: f }) => [
              o in Y.value ? p(n.$slots, "secondaryColumn", {
                key: 0,
                columnKey: o,
                subcolumnKey: f
              }, void 0, !0) : w("", !0)
            ]),
            total: S(({ columnKey: o, subcolumnKey: f, values: $ }) => [
              o in Y.value ? p(n.$slots, "total", {
                key: 0,
                columnKey: o,
                subcolumnKey: f,
                values: $
              }, void 0, !0) : w("", !0)
            ]),
            _: 2
          }, [
            I(Object.keys(Y.value), (o) => ({
              name: `row-${o}`,
              fn: S(({ columnKey: f, index: $, row: E, spanIndex: ee, subcolumnKey: J, subindex: R, value: D }) => [
                p(n.$slots, "row-" + f, {
                  columnKey: f,
                  index: $,
                  row: E,
                  spanIndex: ee,
                  subcolumnKey: J,
                  subindex: R,
                  value: D
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
const ct = /* @__PURE__ */ Te(nt, [["__scopeId", "data-v-48f9d37b"]]);
export {
  Ae as S,
  ct as T,
  Se as a,
  Be as b
};
