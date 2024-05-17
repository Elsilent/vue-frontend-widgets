import { defineComponent as ye, toRefs as $e, computed as O, openBlock as d, createElementBlock as c, normalizeClass as U, unref as a, withModifiers as ve, createElementVNode as _e, normalizeStyle as re, ref as g, onUnmounted as Ne, onMounted as We, watch as pe, nextTick as Re, withMemo as je, renderSlot as m, createBlock as He, createCommentVNode as w, createTextVNode as we, Fragment as C, renderList as I, createVNode as Ce, toDisplayString as Ee, withCtx as S, createSlots as Oe } from "vue";
import { _ as Me } from "./_plugin-vue_export-helper-dad06003.js";
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
    const te = ue, { active: Z, mode: G, thumbOffset: oe, thumbSize: X } = $e(te), p = O(() => {
      const [i, z] = G.value === "vertical" ? ["top", "height"] : ["left", "width"];
      return {
        [i]: `calc(3px + ${oe.value} * (100% - ${X.value} - 6px))`,
        [z]: `${X.value}`
      };
    });
    return (i, z) => (d(), c("div", {
      class: U(["scrollable-area", { active: a(Z), [a(G)]: !0 }]),
      onMousedown: z[0] || (z[0] = ve((_) => Q("mousedown", _), ["stop"]))
    }, [
      _e("div", Ie, [
        _e("div", {
          class: "thumb",
          style: re(p.value)
        }, null, 4)
      ])
    ], 34));
  }
});
const Se = /* @__PURE__ */ Me(Ue, [["__scopeId", "data-v-56aba386"]]), Xe = /* @__PURE__ */ ye({
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
    const te = ue, { mode: Z, relativeTo: G, scrollPosition: oe, scrollHeightDelta: X, scrollWidthDelta: p, staticPosition: i } = $e(te), z = g(!1), _ = g(0), B = g(0), A = g(0), M = g(0), k = g(), x = g(), K = g(), le = g(), W = g(), j = g(0), H = g(0), b = g(), N = O(() => j.value / (M.value - B.value)), q = O(
      () => `max(56px, (100% - 14px) * ${B.value / M.value})`
    ), Y = O(
      () => `max(56px, (100% - 14px) * ${_.value / A.value})`
    ), ne = O(() => H.value / (A.value - _.value)), D = g();
    Ne(() => {
      L.disconnect(), ce.disconnect();
    });
    const y = () => {
      k.value && (b.value !== void 0 && (clearTimeout(b.value), b.value = void 0), z.value = !1, k.value = void 0);
    }, ae = () => G != null && G.value ? G.value() : D.value, V = (u) => {
      const P = ae();
      P && P.scrollTo(u);
    }, ie = (u) => {
      V({
        left: ((le == null ? void 0 : le.value) ?? 0) + u * M.value / (B.value - p.value)
      });
    }, de = (u) => {
      V({
        top: ((W == null ? void 0 : W.value) ?? 0) + u * A.value / (_.value - X.value)
      });
    }, se = (u) => {
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
      k.value = void 0, he(), window.removeEventListener("mousemove", se), window.removeEventListener("mouseup", n);
    }, v = (u, P) => {
      y(), z.value = !0, k.value = P;
      const F = ae();
      switch (k.value) {
        case "horizontal":
          x.value = u.clientX, le.value = (F == null ? void 0 : F.scrollLeft) ?? 0;
          break;
        case "vertical":
          K.value = u.clientY, W.value = (F == null ? void 0 : F.scrollTop) ?? 0;
          break;
      }
      window.addEventListener("mousemove", se), window.addEventListener("mouseup", n);
    }, o = (u) => {
      _.value !== u.clientHeight && (_.value = u.clientHeight);
    }, f = (u) => {
      B.value !== u.clientWidth && (B.value = u.clientWidth);
    }, $ = (u) => {
      A.value !== u.scrollHeight && (A.value = u.scrollHeight);
    }, E = (u) => {
      M.value !== u.scrollWidth && (M.value = u.scrollWidth);
    }, ee = (u) => {
      j.value = u.scrollLeft, Q("update:scrollPosition", {
        left: j.value,
        top: H.value
      });
    }, J = (u) => {
      H.value = u.scrollTop, Q("update:scrollPosition", {
        left: j.value,
        top: H.value
      });
    }, R = () => {
      const u = ae();
      u && (o(u), f(u), $(u), E(u));
    }, L = new MutationObserver(() => R()), ce = new ResizeObserver(() => R()), fe = (u) => {
      ee(u.target), J(u.target);
    }, he = () => {
      R(), !k.value && (y(), z.value = !0, b.value = window.setTimeout(() => {
        z.value = !1;
      }, 2500));
    }, be = () => {
      L.disconnect(), ce.disconnect();
      const u = ae();
      u && (L.observe(u, {
        childList: !0,
        subtree: !0
      }), ce.observe(u));
    };
    return We(() => {
      be();
    }), pe(G, () => be()), pe(
      oe,
      (u) => {
        j.value = u.left, H.value = u.top, Re(() => V(u));
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
        ref: D,
        key: u.updateKey,
        onMousemove: he,
        onScroll: fe
      }, [
        m(u.$slots, "default", {}, void 0, !0)
      ], 34)), P, 0) : (d(), c("div", {
        key: 1,
        class: U(["scrollable-content", u.contentClass]),
        ref_key: "content",
        ref: D,
        onMousemove: he,
        onScroll: fe
      }, [
        m(u.$slots, "default", {}, void 0, !0)
      ], 34)),
      a(Z) !== "vertical" ? (d(), He(Se, {
        key: 2,
        onMousedown: P[1] || (P[1] = ve((F) => v(F, "horizontal"), ["stop"])),
        active: M.value > B.value && (z.value || k.value === "horizontal"),
        class: U({ "scrollbar-visible": M.value > B.value }),
        thumbOffset: N.value,
        thumbSize: q.value,
        mode: "horizontal"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0),
      a(Z) === "both-top" ? (d(), He(Se, {
        key: 3,
        onMousedown: P[2] || (P[2] = ve((F) => v(F, "horizontal"), ["stop"])),
        active: M.value > B.value && (z.value || k.value === "horizontal"),
        class: U({ "scrollbar-visible": M.value > B.value }),
        thumbOffset: N.value,
        thumbSize: q.value,
        mode: "horizontal-top"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0),
      a(Z) !== "horizontal" ? (d(), He(Se, {
        key: 4,
        onMousedown: P[3] || (P[3] = ve((F) => v(F, "vertical"), ["stop"])),
        active: A.value > _.value && (z.value || k.value === "vertical"),
        class: U({ "scrollbar-visible": A.value > _.value }),
        thumbOffset: ne.value,
        thumbSize: Y.value,
        mode: "vertical"
      }, null, 8, ["active", "class", "thumbOffset", "thumbSize"])) : w("", !0)
    ], 2));
  }
});
const Ae = /* @__PURE__ */ Me(Xe, [["__scopeId", "data-v-21092b38"]]), qe = ["onClick", "onMousedown", "data-column"], Ge = ["onClick"], Ye = ["data-column"], Je = {
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
    const te = ue, {
      additionalHeaders: Z,
      cellClasses: G,
      colorMetrics: oe,
      coloredMetrics: X,
      columns: p,
      comparisonColumnKeys: i,
      detailsRows: z,
      dragColumns: _,
      inversedKpis: B,
      noDataMessage: A,
      orderBy: M,
      orderColumnType: k,
      primaryColumn: x,
      rows: K,
      showNoDataMessage: le,
      showRowNumber: W,
      showTotal: j,
      showTopTotal: H
    } = $e(te), b = g(), N = g(), q = g(0), Y = g(0), ne = g(0), D = g({}), y = O(
      () => Object.entries(p.value).filter(([t, { visible: l }]) => l).map(([t, l]) => t)
    ), ae = O(
      () => y.value.length + (W.value ? 1 : 0)
    ), V = O(() => q.value > 3), ie = O(
      () => Object.values(K.value).reduce((t, l) => {
        for (const [e, r] of Object.entries(p.value))
          if (r.type !== "string")
            if (i != null && i.value && (r.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(l[e]).reduce((s, [h, T]) => (s[h] = parseFloat(T), s), {}));
              for (const s in t[e])
                t[e][s] > l[e][s] && (t[e][s] = parseFloat(l[e][s]));
            } else
              (!(e in t) || t[e] > l[e]) && (t[e] = parseFloat(l[e]));
        return t;
      }, {})
    ), de = O(
      () => Object.values(K.value).reduce((t, l) => {
        for (const [e, r] of Object.entries(p.value))
          if (r.type !== "string")
            if (i != null && i.value && (r.colspan ?? 0) > 1) {
              e in t || (t[e] = Object.entries(l[e]).reduce((s, [h, T]) => (s[h] = parseFloat(T), s), {}));
              for (const s in t[e])
                t[e][s] < l[e][s] && (t[e][s] = parseFloat(l[e][s]));
            } else
              (!(e in t) || t[e] < l[e]) && (t[e] = parseFloat(l[e]));
        return t;
      }, {})
    ), se = O(() => i != null && i.value ? y.value.map((t) => p.value[t].rowspan ?? 1).reduce((t, l) => t > l ? t : l) : 1), n = O(
      () => Object.values(K.value).sort((t, l) => {
        const e = (() => {
          const r = L(
            M.value[0].reduce((h, T) => h[T], t),
            k.value
          ), s = L(
            M.value[0].reduce((h, T) => h[T], l),
            k.value
          );
          return r > s ? 1 : r < s ? -1 : 0;
        })();
        return M.value[1] ? -e : e;
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
    ), v = O(() => {
      let t = 0;
      for (const e of y.value) {
        const r = p.value[e];
        r.colspan && (i != null && i.value) ? t += r.colspan : t++;
      }
      let l = `repeat(${t}, auto)`;
      return W.value && (l = `min-content ${l}`), {
        "grid-template-columns": l
      };
    }), o = (t) => D.value[t] ? D.value[t].height : 0, f = (t, l, e, r) => {
      const s = {
        ...G.value,
        even: l % 2 === 0
      };
      if (oe.value) {
        const h = (() => !B || !B.value ? "positive" : B.value.includes(e) ? "negative" : "positive")();
        s[`color-intensity-${$(t[e], e, r)}`] = !0, s[`color-${h}`] = !0, r !== void 0 && i && i.value && i.value[r] === "difference" ? s.colored = !1 : s.colored = fe(e) >= 0;
      }
      return s;
    }, $ = (t, l, e) => {
      if (p.value[l].type === "string")
        return;
      let r = t, s = de.value[l], h = ie.value[l];
      return i && i.value && e !== void 0 && (r = r[i.value[e]], s = s[i.value[e]], h = h[i.value[e]]), s === h ? 0 : Math.round((r - h) * 10 / (s - h));
    }, E = (t, l) => {
      const e = p.value[t], r = [t];
      l !== void 0 && (i && i.value ? r.push(i.value[l]) : r.push(l.toString()));
      const s = M.value[0] ? M.value[0].every(
        (h, T) => h === r[T]
      ) : !1;
      return {
        "column-main-extended": l === void 0 && (e.rowspan ?? 0) > 1,
        dragged: b.value ? y.value[b.value] === t : !1,
        "drag-mode": V.value,
        orderable: !(i && i.value) || (e.colspan ?? 1) === 1 || l !== void 0,
        "ordered-by": s,
        [`order-direction-${M.value[1] ? "desc" : "asc"}`]: s
      };
    }, ee = (t) => {
      const l = {};
      if (D.value[t])
        if (b.value !== void 0 && y.value[b.value] === t) {
          const { height: e, left: r, width: s } = D.value[t];
          l.left = `${Math.floor(r + ne.value - Y.value)}px`, l.height = `${e + 1}px`, l.width = `${Math.round(s)}px`;
        } else {
          const e = y.value.indexOf(t);
          let r = (() => {
            if (b.value === void 0 || N.value === void 0)
              return 0;
            if (b.value < e) {
              if (N.value >= e)
                return -D.value[y.value[b.value]].width;
            } else if (N.value <= e)
              return D.value[y.value[b.value]].width;
            return 0;
          })();
          const { height: s, left: h, width: T } = D.value[t];
          l.left = `${Math.floor(h + r)}px`, l.height = `${s + 1}px`, l.width = `${Math.floor(T)}px`;
        }
      return l;
    }, J = (t) => {
      const l = p.value[t], e = {};
      return i && i.value && (l.colspan && (e["grid-column-end"] = `span ${l.colspan}`), l.rowspan && (e["grid-row-end"] = `span ${l.rowspan}`)), e;
    }, R = (t) => i && i.value ? i.value[t] : void 0, L = (t, l) => {
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
    }, ce = (t) => t.subindex === void 0 ? t.index + 1 : `${t.index + 1}.${t.subindex + 1}`, fe = (t) => X.value.findIndex((l) => l === t), he = (t) => oe.value && !["date", "string"].includes(p.value[t].type), be = (t, l) => {
      if (i && i.value && p.value[t].colspan && l === void 0 || b.value !== void 0 && V.value && y.value[b.value] === t)
        return;
      const e = [t];
      l !== void 0 && (i && i.value ? e.push(i.value[l]) : e.push(l.toString()));
      const r = e.every(
        (h, T) => h === M.value[0][T]
      ), s = (() => r ? !M.value[1] : p.value[t].type !== "string")();
      Q("update:orderBy", [e, s]);
    }, u = (t, l) => {
      _.value && (b.value = y.value.indexOf(t), N.value = b.value, q.value = 0, Y.value = l.clientX, ne.value = l.clientX, window.addEventListener("mousemove", P), window.addEventListener("mouseup", F));
    }, P = (t) => {
      if (b.value === void 0)
        return;
      q.value++, ne.value = t.clientX;
      const l = Object.entries(p.value).filter(([T, me]) => me.visible).map(([T]) => T).map((T, me) => ({
        columnIndex: parseInt(me.toString()),
        sizing: D.value[T]
      })), e = l[b.value].sizing, r = e.width / 2, h = e.left + ne.value - Y.value;
      N.value = (() => {
        for (const { columnIndex: T, sizing: me } of l)
          if (h + r - me.left - me.width < 0)
            return T;
        return l.length;
      })();
    }, F = (t) => {
      if (b.value === void 0 || N.value === void 0)
        return;
      V.value && N.value !== b.value && Q("move:column", {
        from: b.value,
        to: N.value
      }), N.value = void 0, q.value = 0, b.value = void 0, window.removeEventListener("mousemove", P), window.removeEventListener("mouseup", F);
    }, De = (t) => {
      fe(t) >= 0 ? Q("removeColoredMetric", t) : Q("addColoredMetric", t);
    }, ge = g({}), Le = (t, l) => {
      l && (ge.value[t] = l);
    }, Te = g(), ke = () => {
      if (!Te.value)
        return;
      const t = Te.value.getBoundingClientRect();
      D.value = Object.entries(p.value).reduce(
        (l, [e, r]) => {
          if (r.visible && ge.value[e]) {
            const s = ge.value[e].getBoundingClientRect();
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
    return pe(
      ge,
      () => {
        ze.disconnect();
        for (const t of Object.values(ge.value))
          ze.observe(t);
        ke();
      },
      {
        deep: !0,
        immediate: !0
      }
    ), ke(), (t, l) => (d(), c("div", {
      class: U(["table", {
        "with-secondary": !!a(i) && y.value.some((e) => (a(p)[e].colspan || 1) !== 1)
      }]),
      ref_key: "table",
      ref: Te,
      style: re(v.value)
    }, [
      a(W) ? (d(), c("div", {
        key: 0,
        class: "cell column column-main row-number",
        style: re(se.value > 1 ? { "grid-row-end": `span ${se.value}` } : void 0)
      }, [
        m(t.$slots, "columnRowNumber", {}, () => [
          we("#")
        ], !0)
      ], 4)) : w("", !0),
      (d(!0), c(C, null, I(y.value, (e) => (d(), c(C, null, [
        a(p)[e].visible ? (d(), c("div", {
          key: 0,
          class: U(["cell column column-main", E(e)]),
          ref_for: !0,
          ref: (r) => Le(e, r),
          onClick: ve(() => be(e), ["stop"]),
          onMousedown: (r) => u(e, r),
          style: re(J(e)),
          "data-column": e
        }, [
          m(t.$slots, "column", {
            columnKey: e,
            isGhost: !1
          }, void 0, !0),
          he(e) ? (d(), c("div", {
            key: 0,
            class: "toggle-colored no-spacing",
            onClick: ve(() => De(e), ["stop"]),
            style: re({ top: `${o(e)}px` })
          }, [
            m(t.$slots, "colorizeLabel", {
              enabled: fe(e) >= 0
            }, void 0, !0)
          ], 12, Ge)) : w("", !0)
        ], 46, qe)) : w("", !0)
      ], 64))), 256)),
      a(_) ? (d(!0), c(C, { key: 1 }, I(y.value, (e) => (d(), c(C, null, [
        a(p)[e].visible ? (d(), c("div", {
          key: 0,
          class: U(["cell column column-main column-ghost", E(e)]),
          style: re(ee(e)),
          "data-column": e
        }, [
          m(t.$slots, "column", {
            columnKey: e,
            isGhost: !0
          }, void 0, !0)
        ], 14, Ye)) : w("", !0)
      ], 64))), 256)) : w("", !0),
      (d(!0), c(C, null, I(a(Z), (e, r) => (d(), c(C, null, [
        a(W) ? (d(), c("div", Je, [
          Ce(Fe, {
            value: e.icon
          }, null, 8, ["value"])
        ])) : w("", !0),
        (d(!0), c(C, null, I(y.value, (s) => (d(), c("div", {
          class: U(["cell column cell-additional-header", [`cell-additional-header-${s}`]]),
          "data-additionalHeader": r,
          "data-column": s
        }, [
          m(t.$slots, "additionalHeader", {
            additionalHeader: r,
            columnKey: s
          }, void 0, !0)
        ], 10, Qe))), 256))
      ], 64))), 256)),
      a(H) && a(j) ? (d(), c(C, { key: 2 }, [
        a(W) ? (d(), c("div", Ze, [
          m(t.$slots, "topTotalRowNumber", {}, void 0, !0)
        ])) : w("", !0),
        (d(!0), c(C, null, I(y.value, (e) => (d(), c(C, null, [
          a(p)[e].visible ? (d(), c(C, { key: 0 }, [
            a(i) && (a(p)[e].colspan || 1) !== 1 ? (d(!0), c(C, { key: 0 }, I(a(p)[e].colspan, (r) => (d(), c("div", {
              class: "cell total top-total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              m(t.$slots, "topTotal", {
                columnKey: e,
                subcolumnKey: R(r - 1),
                values: n.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, xe))), 256)) : (d(), c("div", {
              key: 1,
              class: "cell total top-total",
              "data-column": e
            }, [
              m(t.$slots, "topTotal", {
                columnKey: e,
                values: n.value.map((r) => r[e])
              }, void 0, !0)
            ], 8, Ve))
          ], 64)) : w("", !0)
        ], 64))), 256))
      ], 64)) : w("", !0),
      a(i) ? (d(!0), c(C, { key: 3 }, I(y.value, (e) => (d(), c(C, null, [
        a(p)[e].visible && a(p)[e].colspan ? (d(!0), c(C, { key: 0 }, I(a(p)[e].colspan, (r) => (d(), c("div", {
          class: U(["cell column column-secondary", E(e, r - 1)]),
          onClick: ve(() => be(e, r - 1), ["stop"]),
          "data-column": e,
          "data-subcolumn-index": r - 1
        }, [
          m(t.$slots, "secondaryColumn", {
            columnKey: e,
            subcolumnKey: R(r - 1)
          }, void 0, !0)
        ], 10, Ke))), 256)) : w("", !0)
      ], 64))), 256)) : w("", !0),
      (d(!0), c(C, null, I(n.value, (e, r) => (d(), c(C, null, [
        a(W) ? (d(), c("div", {
          key: 0,
          class: U(["cell row-number", { even: r % 2 === 0 }])
        }, [
          m(t.$slots, "rowNumber", {
            value: ce(e.rowInfo)
          }, () => [
            we(Ee(ce(e.rowInfo)), 1)
          ], !0)
        ], 2)) : w("", !0),
        (d(!0), c(C, null, I(y.value, (s) => (d(), c(C, null, [
          !a(i) || (a(p)[s].colspan || 1) === 1 ? (d(), c("div", {
            key: 0,
            class: U(["cell", f(e, r, s)]),
            "data-column": s,
            "data-primary-key": e[a(x)]
          }, [
            m(t.$slots, `row-${s}`, {
              columnKey: s,
              index: r,
              row: e,
              subindex: e.rowInfo.subindex,
              value: e[s]
            }, void 0, !0)
          ], 10, et)) : (d(!0), c(C, { key: 1 }, I(a(p)[s].colspan, (h) => (d(), c("div", {
            class: U(["cell", f(e, r, s, h - 1)]),
            "data-column": s,
            "data-primary-key": e[a(x)],
            "data-subcolumn-index": h - 1
          }, [
            m(t.$slots, `row-${s}`, {
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
      n.value.length === 0 && a(le) ? (d(), c("div", {
        class: "cell odd no-data",
        key: "row-no-data",
        style: re({ "grid-column": `1 / span ${ae.value}` }),
        innerHTML: a(A)
      }, null, 12, ot)) : w("", !0),
      a(j) ? (d(), c(C, { key: 5 }, [
        a(W) ? (d(), c("div", lt, [
          m(t.$slots, "totalRowNumber", {}, () => [
            we("#")
          ], !0)
        ])) : w("", !0),
        (d(!0), c(C, null, I(y.value, (e) => (d(), c(C, null, [
          a(p)[e].visible ? (d(), c(C, { key: 0 }, [
            a(i) && (a(p)[e].colspan || 1) !== 1 ? (d(!0), c(C, { key: 0 }, I(a(p)[e].colspan, (r) => (d(), c("div", {
              class: "cell total",
              "data-column": e,
              "data-subcolumn-index": r - 1
            }, [
              m(t.$slots, "total", {
                columnKey: e,
                subcolumnKey: R(r - 1),
                values: n.value.map((s) => s[e])
              }, void 0, !0)
            ], 8, at))), 256)) : (d(), c("div", {
              key: 1,
              class: "cell total",
              "data-column": e
            }, [
              m(t.$slots, "total", {
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
const Be = /* @__PURE__ */ Me(rt, [["__scopeId", "data-v-ef883ea1"]]), nt = /* @__PURE__ */ ye({
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
      additionalHeaders: te,
      cellClasses: Z,
      colorMetrics: G,
      coloredMetrics: oe,
      columns: X,
      comparisonColumnKeys: p,
      detailsRows: i,
      dragColumns: z,
      fixedColumnNumber: _,
      inversedKpis: B,
      orderBy: A,
      primaryColumn: M,
      rows: k,
      scrollPosition: x,
      showRowNumber: K,
      showTopTotal: le,
      showTotal: W
    } = $e(Q), j = g(0), H = g(), b = g(0), N = g(0);
    Ne(() => de.disconnect());
    const q = O(
      () => Object.keys(X.value).slice(0, _.value).reduce((n, v) => (n[v] = X.value[v], n), {})
    ), Y = O(
      () => Object.keys(X.value).slice(_.value).reduce((n, v) => (n[v] = X.value[v], n), {})
    ), ne = O(
      () => Object.keys(i.value).reduce(
        (n, v) => n + v.length,
        Object.values(k.value).length
      )
    ), D = O(() => {
      var v, o, f;
      const n = {};
      return (v = H.value) != null && v.main && (n["--header-main-height"] = `${H.value.main}px`), (o = H.value) != null && o.secondary && (n["--header-secondary-height"] = `${H.value.secondary}px`), j.value && (n["--fixed-width"] = `${j.value}px`), (f = H.value) != null && f.total && (n["--header-total-height"] = `${H.value.total}px`), b.value ? (n["--total-height"] = `${b.value}px`, n["--bottom-height"] = n["--total-height"]) : (ne.value === 1 ? n["--total-scrollbar-display"] = "none" : n["--total-height"] = "20px", n["--bottom-height"] = "0px"), n;
    }), y = g(), ae = g(), V = g(!1), ie = () => {
      if (V.value)
        return;
      V.value = !0, j.value = 0, H.value = void 0, b.value = 0;
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
        return f.length > 0 && (o.mainColumnHeight = f[0].offsetHeight, o.width = f.reduce((R, { offsetWidth: L }) => R + L, 0), J.push(o.mainColumnHeight)), E && (o.hasSecondary = !0, o.secondaryColumnHeight = E.offsetHeight, J.push(o.secondaryColumnHeight)), $.length > 0 && (o.width = $.reduce((R, { offsetWidth: L }) => R + L, 0), f.length === 0 && (o.mainColumnHeight = $[0].offsetHeight, J.push(o.mainColumnHeight))), o.totalColumnHeight = J.reduce((R, L) => R + L + 1, -1), ee && (o.totalHeight = ee.offsetHeight), o;
      };
      Re(() => {
        var f, $;
        const v = n((f = y.value) == null ? void 0 : f.$el), o = n(($ = ae.value) == null ? void 0 : $.$el);
        if (o.hasSecondary)
          j.value = v.width, H.value = {
            main: o.mainColumnHeight,
            secondary: o.secondaryColumnHeight,
            total: Math.max(v.totalColumnHeight, o.totalColumnHeight)
          }, b.value = v.totalHeight;
        else {
          const E = Math.max(
            v.totalColumnHeight,
            o.totalColumnHeight
          );
          j.value = v.width, H.value = {
            main: E,
            total: E
          }, b.value = v.totalHeight;
        }
        V.value = !1;
      });
    }, de = new ResizeObserver(() => ie()), se = g();
    return Re(() => {
      de.disconnect(), se.value && de.observe(se.value);
    }), pe(k, (n, v) => {
      N.value = Math.random(), v.length || ie();
    }), pe(te, () => {
      N.value = Math.random();
    }), pe(X, () => {
      ie();
    }), (n, v) => (d(), c("div", {
      class: "table-container",
      ref_key: "tableContainer",
      ref: se
    }, [
      Ce(Ae, {
        "onUpdate:scrollPosition": v[7] || (v[7] = (o) => n.$emit("update:scrollPosition", o)),
        scrollHeightDelta: (H.value ? H.value.total : 0) + b.value - 40,
        scrollPosition: a(x),
        scrollWidthDelta: j.value,
        style: re(D.value),
        updateKey: N.value,
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
            additionalHeaders: a(te),
            cellClasses: a(Z),
            colorMetrics: a(G),
            coloredMetrics: a(oe),
            columns: q.value,
            comparisonColumnKeys: a(p),
            detailsRows: a(i),
            dragColumns: !1,
            inversedKpis: a(B),
            orderBy: a(A),
            orderColumnType: a(X)[a(A)[0][0]].type,
            primaryColumn: a(M),
            rows: a(k),
            showNoDataMessage: !0,
            showRowNumber: a(K),
            showTopTotal: a(le),
            showTotal: a(W)
          }, Oe({
            columnRowNumber: S(() => [
              m(n.$slots, "columnRowNumber", {}, () => [
                we("#")
              ], !0)
            ]),
            colorizeLabel: S(({ enabled: o }) => [
              m(n.$slots, "colorizeLabel", { enabled: o }, void 0, !0)
            ]),
            column: S(({ columnKey: o, isGhost: f }) => [
              o in q.value ? m(n.$slots, "column", {
                key: 0,
                columnKey: o,
                isGhost: f
              }, void 0, !0) : w("", !0)
            ]),
            additionalHeader: S(({ additionalHeader: o, columnKey: f }) => [
              m(n.$slots, "additionalHeader", {
                additionalHeader: o,
                columnKey: f
              }, void 0, !0)
            ]),
            topTotal: S(({ columnKey: o, subcolumnKey: f, values: $ }) => [
              o in q.value ? m(n.$slots, "topTotal", {
                key: 0,
                columnKey: o,
                subcolumnKey: f,
                values: $
              }, void 0, !0) : w("", !0)
            ]),
            topTotalRowNumber: S(() => [
              m(n.$slots, "topTotalRowNumber", {}, void 0, !0)
            ]),
            secondaryColumn: S(({ columnKey: o, subcolumnKey: f }) => [
              o in q.value ? m(n.$slots, "secondaryColumn", {
                key: 0,
                columnKey: o,
                subcolumnKey: f
              }, void 0, !0) : w("", !0)
            ]),
            rowNumber: S(({ value: o }) => [
              m(n.$slots, "rowNumber", { value: o }, void 0, !0)
            ]),
            totalRowNumber: S(() => [
              m(n.$slots, "totalRowNumber", {}, () => [
                we("#")
              ], !0)
            ]),
            total: S(({ columnKey: o, subcolumnKey: f, values: $ }) => [
              o in q.value ? m(n.$slots, "total", {
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
              fn: S(({ columnKey: f, index: $, row: E, spanIndex: ee, subcolumnKey: J, subindex: R, value: L }) => [
                m(n.$slots, "row-" + f, {
                  columnKey: f,
                  index: $,
                  row: E,
                  spanIndex: ee,
                  subcolumnKey: J,
                  subindex: R,
                  value: L
                }, void 0, !0)
              ])
            }))
          ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "inversedKpis", "orderBy", "orderColumnType", "primaryColumn", "rows", "showRowNumber", "showTopTotal", "showTotal"]),
          Ce(Be, {
            ref_key: "scrollableTable",
            ref: ae,
            onAddColoredMetric: v[3] || (v[3] = (o) => n.$emit("addColoredMetric", o)),
            "onMove:column": v[4] || (v[4] = ({ from: o, to: f }) => n.$emit("move:column", { from: o + a(_), to: f + a(_) })),
            onRemoveColoredMetric: v[5] || (v[5] = (o) => n.$emit("removeColoredMetric", o)),
            "onUpdate:orderBy": v[6] || (v[6] = (o) => n.$emit("update:orderBy", o)),
            additionalHeaders: a(te),
            cellClasses: a(Z),
            colorMetrics: a(G),
            coloredMetrics: a(oe),
            columns: Y.value,
            comparisonColumnKeys: a(p),
            detailsRows: a(i),
            inversedKpis: a(B),
            dragColumns: a(z),
            orderBy: a(A),
            orderColumnType: a(X)[a(A)[0][0]].type,
            primaryColumn: a(M),
            rows: a(k),
            showRowNumber: !1,
            showTopTotal: a(le),
            showTotal: a(W),
            showNoDataMessage: !0,
            noDataMessage: n.noDataMessage,
            style: re(D.value)
          }, Oe({
            colorizeLabel: S(({ enabled: o }) => [
              m(n.$slots, "colorizeLabel", { enabled: o }, void 0, !0)
            ]),
            column: S(({ columnKey: o, isGhost: f }) => [
              o in Y.value ? m(n.$slots, "column", {
                key: 0,
                columnKey: o,
                isGhost: f
              }, void 0, !0) : w("", !0)
            ]),
            additionalHeader: S(({ additionalHeader: o, columnKey: f }) => [
              m(n.$slots, "additionalHeader", {
                additionalHeader: o,
                columnKey: f
              }, void 0, !0)
            ]),
            topTotal: S(({ columnKey: o, subcolumnKey: f, values: $ }) => [
              o in Y.value ? m(n.$slots, "topTotal", {
                key: 0,
                columnKey: o,
                subcolumnKey: f,
                values: $
              }, void 0, !0) : w("", !0)
            ]),
            secondaryColumn: S(({ columnKey: o, subcolumnKey: f }) => [
              o in Y.value ? m(n.$slots, "secondaryColumn", {
                key: 0,
                columnKey: o,
                subcolumnKey: f
              }, void 0, !0) : w("", !0)
            ]),
            total: S(({ columnKey: o, subcolumnKey: f, values: $ }) => [
              o in Y.value ? m(n.$slots, "total", {
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
              fn: S(({ columnKey: f, index: $, row: E, spanIndex: ee, subcolumnKey: J, subindex: R, value: L }) => [
                m(n.$slots, "row-" + f, {
                  columnKey: f,
                  index: $,
                  row: E,
                  spanIndex: ee,
                  subcolumnKey: J,
                  subindex: R,
                  value: L
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
const ct = /* @__PURE__ */ Me(nt, [["__scopeId", "data-v-71bb480e"]]);
export {
  Ae as S,
  ct as T,
  Se as a,
  Be as b
};
