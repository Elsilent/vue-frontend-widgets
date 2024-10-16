import { openBlock as o, createElementBlock as n, Fragment as c, renderList as p, createElementVNode as f, defineComponent as Ke, toRefs as Ee, computed as i, ref as N, watch as Ce, onMounted as Ne, onUnmounted as Xe, normalizeClass as j, unref as v, normalizeStyle as b, createVNode as fe, withCtx as k, createTextVNode as w, toDisplayString as B, createCommentVNode as g, createBlock as oe, renderSlot as ne, pushScopeId as Fe, popScopeId as Re } from "vue";
import { _ as Se } from "./_plugin-vue_export-helper-dad06003.js";
import { I as A } from "./Info-38a17291.js";
const Te = { class: "loader" }, qe = { class: "loader-line" };
function De(C, be) {
  return o(), n("div", Te, [
    (o(), n(c, null, p(5, (re) => f("div", qe)), 64))
  ]);
}
const Ue = {}, pt = /* @__PURE__ */ Se(Ue, [["render", De], ["__scopeId", "data-v-b467514e"]]), Ye = (C) => (Fe("data-v-76150599"), C = C(), Re(), C), Je = {
  key: 0,
  class: "y-axis-title-container"
}, Qe = {
  key: 1,
  class: "y-axis-labels"
}, Ze = { class: "chart-grid no-spacing" }, et = { class: "axis-line no-spacing" }, tt = { class: "chart-bars no-spacing" }, at = /* @__PURE__ */ Ye(() => /* @__PURE__ */ f("div", { class: "separator" }, null, -1)), st = {
  key: 0,
  class: "chart-popover-separator no-spacing"
}, lt = { class: "values" }, ot = ["d", "stroke-dasharray"], nt = { class: "chart-hover-sections no-spacing" }, rt = ["onMouseover", "onMouseout"], ut = {
  key: 2,
  class: "y-axis-labels"
}, ct = {
  key: 3,
  class: "y-axis-title-container"
}, it = /* @__PURE__ */ Ke({
  __name: "LineBarChart",
  props: {
    activeLines: {},
    axis: { default: 4 },
    barSumValues: {},
    columnsWithIntegers: { default: () => [] },
    formatters: {},
    groups: {},
    leftAxisGroup: {},
    leftAxisStyle: {},
    minHeight: { type: Boolean, default: !1 },
    moods: {},
    noXAxisLabels: { type: Boolean, default: !1 },
    rightAxisGroup: {},
    rightAxisStyle: {},
    smoothing: { default: 0.15 },
    styles: {},
    values: {},
    yAxisTitles: {}
  },
  setup(C) {
    const be = C, re = ["dashed", "opaque"], {
      activeLines: S,
      axis: X,
      barSumValues: ge,
      groups: ue,
      formatters: F,
      leftAxisGroup: R,
      leftAxisStyle: T,
      minHeight: Ve,
      moods: me,
      noXAxisLabels: _e,
      rightAxisGroup: q,
      rightAxisStyle: D,
      smoothing: Le,
      styles: m,
      values: d,
      yAxisTitles: U,
      columnsWithIntegers: we
    } = Ee(be), Be = i(() => {
      const e = Object.keys(ee.value).length;
      return e === 0 ? 0 : (12 / e).toFixed(2);
    }), _ = i(() => {
      var t;
      const e = {
        bar: {},
        line: {}
      }, s = {
        line: "__line__",
        bar: "__bar__"
      };
      for (const a of y.value) {
        const l = (t = ue == null ? void 0 : ue.value) == null ? void 0 : t[a];
        switch (m.value[a]) {
          case "bar":
            e.bar[a] = l ?? s.bar;
            break;
          case "line":
          default:
            e.line[a] = l ?? s.line;
            break;
        }
      }
      return e;
    }), ce = i(() => Object.values(d.value).map((e) => Object.keys(e))), ie = i(() => ce.value.reduce(
      (e, s) => s.length > e.length ? s : e,
      []
    )), P = i(() => (T == null ? void 0 : T.value) !== void 0 ? T.value : Object.values(m.value).some((e) => e === "bar") ? "bar" : "line"), Y = i(() => (D == null ? void 0 : D.value) !== void 0 ? D.value : Object.values(m.value).some((e) => e === "line") ? "line" : "bar"), J = i(() => (R == null ? void 0 : R.value) !== void 0 ? R.value : Object.values(_.value[P.value])[0]), Q = i(() => {
      if ((q == null ? void 0 : q.value) !== void 0)
        return q.value;
      if (P.value === "bar" && Y.value === "line")
        return Object.values(_.value[Y.value])[0];
    }), ye = i(() => {
      let e;
      for (const [s, t] of Object.entries(
        _.value[P.value]
      ))
        if (t === J.value) {
          e = s;
          break;
        }
      if (e)
        return F.value[e];
    }), xe = i(() => {
      if (Q.value === void 0)
        return;
      let e;
      for (const [s, t] of Object.entries(
        _.value[Y.value]
      ))
        if (t === Q.value) {
          e = s;
          break;
        }
      if (e)
        return F.value[e];
    }), Z = i(() => {
      const e = {
        line: Object.fromEntries(
          Object.values(_.value.line).map((a) => [a, []])
        ),
        bar: Object.fromEntries(
          Object.values(_.value.bar).map((a) => [
            a,
            Array.from({ length: Object.values(Object.values(d.value)[0]).length }, () => 0)
          ])
        )
      };
      for (const [a, l] of Object.entries(d.value)) {
        const u = m.value[a], r = _.value[u][a];
        switch (u) {
          case "bar":
            let h = 0;
            for (const x of Object.values(l))
              e[u][r][h] += x, h++;
            break;
          case "line":
          default:
            e[u][r].push(...Object.values(d.value[a]));
        }
      }
      const s = {
        bar: {},
        line: {}
      }, t = (a, l, u) => {
        a[l] = Object.fromEntries(
          Object.values(_.value[l]).map((r) => {
            const h = u[r], x = Math.min(...h, 0);
            let I = Math.max(...h) - x;
            const pe = X.value * 2;
            X.value > 2 && I < pe && we.value.includes(r.toString()) && (I = pe);
            const K = Math.pow(10, Math.ceil(Math.abs(I)).toString().length - 2), E = I / (X.value - 1), se = Math.ceil(E / K) * K, le = [x];
            for (let Ae = 1; Ae < X.value; Ae++)
              le.push(le[le.length - 1] + se);
            return [r, le.reverse()];
          })
        );
      };
      return t(s, "bar", e.bar), t(s, "line", e.line), s;
    }), Oe = i(() => {
      for (const [e, s] of Object.entries(F.value))
        if (m.value[e] === "bar")
          return s;
    }), ee = i(() => {
      const e = {};
      for (const [s, t] of Object.entries(d.value))
        if (m.value[s] === "bar")
          for (const [a, l] of Object.entries(t))
            a in e || (e[a] = {}), e[a][s] = l;
      return e;
    }), Pe = i(() => Object.keys(d.value).length), $ = i(() => Math.max(...Object.values(d.value).map((e) => Object.values(e).length))), y = i(() => Object.keys(d.value)), te = i(
      () => U != null && U.value ? Object.values(U.value) : void 0
    ), Ge = (e, s) => {
      if (e.length === 0)
        return "";
      const t = Object.entries(e).map(([r, h]) => ({
        left: z(r),
        top: L(h, s)
      })), a = [`M ${t[0].left} ${t[0].top}`], l = (r, h) => ({
        length: Math.hypot(h.top - r.top, h.left - r.left),
        angle: Math.atan2(h.top - r.top, h.left - r.left)
      }), u = (r, h, x, H) => {
        const K = l(h ?? r, x ?? r);
        let E = K.angle;
        H && (E += Math.PI);
        const se = K.length * Le.value;
        return {
          left: r.left + Math.cos(E) * se,
          top: Math.min(r.top + Math.sin(E) * se, 100)
        };
      };
      return t.slice(1).forEach((r, h) => {
        const x = u(t[h], t[h - 1], r, !1), H = u(r, t[h], t[h + 2], !0);
        a.push(
          `C ${x.left},${x.top} ${H.left},${H.top} ${r.left},${r.top}`
        );
      }), a.join(" ");
    }, ae = i(() => {
      const t = `${100 / (Object.keys(ee.value).length || $.value) / 2}%`;
      return {
        left: t,
        right: t
      };
    }), G = N(), ve = N([]), We = (e, s) => {
      s && (ve.value[e] = s);
    }, O = N(), M = N(0), he = () => {
      if (!O.value)
        return;
      const e = Math.max(...ve.value.map((t) => t.clientWidth)), s = Math.max(...ve.value.map((t) => t.clientHeight));
      if (O.value.clientWidth > $.value * e)
        M.value = 0;
      else if (O.value.clientWidth < $.value * s)
        M.value = 90;
      else {
        const t = $.value * e;
        M.value = Math.min(Math.acos(O.value.clientWidth / t) * 100, 90);
      }
      G.value = e * Math.cos((90 - M.value) / 100);
    }, ze = i(() => ({
      "margin-bottom": G.value === void 0 ? void 0 : `${G.value}px`
    })), He = i(() => {
      const t = `${100 / (Object.keys(ee.value).length || $.value) / 2}%`;
      return {
        height: G.value === void 0 ? void 0 : `${G.value}px`,
        "margin-left": t,
        "margin-right": t
      };
    }), V = N([]), je = (e) => {
      for (const [s, t] of Object.entries(d.value))
        if (m.value[s] !== "bar" && Object.keys(t).length <= e)
          return L(Object.values(t)[e], s);
      return Math.min(
        ...Object.entries(d.value).filter(([s]) => m.value[s] !== "bar").map(
          ([s, t]) => L(Object.values(t)[e], s)
        )
      );
    }, W = (e, s) => {
      const t = me.value[e], a = s ?? re, l = $e(t);
      return a.reduce(
        (u, r) => ({
          ...u,
          [r]: l.attributes.includes(r)
        }),
        {
          [`chart-${l.chart}`]: !!l.chart,
          [`mood-${l.mood}`]: !!l.mood
        }
      );
    }, $e = (e) => {
      let s = "mood" in e ? e.mood : void 0, t = "chart" in e ? e.chart.toString() : void 0;
      const a = [];
      for (const l of re)
        (s ?? t).endsWith(`-${l}`) && (a.push(l), s ? s = s.substring(0, s.length - l.length - 1) : t && (t = t.substring(0, t.length - l.length - 1)));
      return {
        attributes: a,
        chart: t,
        mood: s
      };
    }, z = (e) => {
      let s;
      return typeof e != "symbol" && !isNaN(+e) ? s = +e : s = Object.keys(Object.values(d.value)[0]).indexOf(e.toString()), $.value === 1 ? 50 : s * 100 / ($.value - 1);
    }, Me = (e, s, t) => {
      const a = Z.value[s][t], l = a[a.length - 1], u = a[0], r = u - l <= 0.01 ? 100 : Math.min(100, Math.max(0, (u - e) * 100 / (u - l)));
      switch (s) {
        case "bar":
          return 100 - r;
        case "line":
        default:
          return r;
      }
    }, L = (e, s) => {
      const t = m.value[s], a = _.value[t][s];
      return Me(e, t, a);
    }, Ie = (e) => {
      const s = Object.values(_.value.bar)[0];
      return Me(e, "bar", s);
    }, ke = (e, s) => {
      if (s)
        V.value.push(e);
      else {
        const t = V.value.indexOf(e);
        t >= 0 && V.value.splice(t, 1);
      }
    };
    Ce(d, () => he());
    const de = new ResizeObserver(() => {
      he();
    });
    return Ce(O, () => {
      de.disconnect(), O.value && de.observe(O.value);
    }), Ne(() => {
      he();
    }), Xe(() => {
      de.disconnect();
    }), (e, s) => (o(), n("div", {
      class: j(["line-chart no-spacing", { "min-height": v(Ve), noXAxis: v(_e) }]),
      style: b(ze.value)
    }, [
      te.value ? (o(), n("div", Je, [
        fe(A, {
          class: "y-axis-title no-spacing",
          important: "",
          size: "small"
        }, {
          default: k(() => [
            w(B(te.value[0]), 1)
          ]),
          _: 1
        })
      ])) : g("", !0),
      J.value && ye.value ? (o(), n("div", Qe, [
        (o(!0), n(c, null, p(Z.value[P.value][J.value], (t) => (o(), oe(A, { class: "axis-label" }, {
          default: k(() => [
            w(B(ye.value(t)), 1)
          ]),
          _: 2
        }, 1024))), 256))
      ])) : g("", !0),
      f("div", {
        class: "chart-contents no-spacing",
        ref_key: "chartContents",
        ref: O
      }, [
        f("div", Ze, [
          (o(!0), n(c, null, p(Z.value[P.value][J.value].slice(1), (t) => (o(), n("div", et))), 256))
        ]),
        f("div", tt, [
          (o(!0), n(c, null, p(ee.value, (t, a) => (o(), n("div", {
            class: "chart-bar-container no-spacing",
            style: b({ left: `${z(a)}%`, padding: `0 ${Be.value}%` })
          }, [
            at,
            (o(!0), n(c, null, p(t, (l, u) => (o(), n(c, null, [
              L(l, u) > 0 ? (o(), n("div", {
                key: 0,
                class: j(["chart-bar no-spacing", { ...W(u) }]),
                style: b({ height: `${L(l, u)}%` })
              }, null, 6)) : g("", !0)
            ], 64))), 256))
          ], 4))), 256))
        ]),
        v(ge) && Oe.value ? (o(), n("div", {
          key: 0,
          class: "chart-bar-sums no-spacing",
          style: b(ae.value)
        }, [
          (o(!0), n(c, null, p(v(ge), (t, a) => (o(), n("div", {
            class: "chart-bar-sum no-spacing",
            style: b({ left: `${z(a)}%`, bottom: `${Ie(t)}%` })
          }, [
            fe(A, null, {
              default: k(() => [
                w(B(Oe.value(t)), 1)
              ]),
              _: 2
            }, 1024)
          ], 4))), 256))
        ], 4)) : g("", !0),
        f("div", {
          class: "chart-popovers no-spacing",
          style: b(ae.value)
        }, [
          (o(!0), n(c, null, p(ie.value, (t, a) => (o(), n(c, null, [
            a > 0 ? (o(), n("div", st)) : g("", !0),
            f("div", {
              class: j(["chart-popover-container no-spacing", { visible: V.value.includes(t) }])
            }, [
              f("div", {
                class: "chart-popover-line no-spacing",
                style: b({ height: `${100 - je(a)}%` })
              }, null, 4),
              f("div", {
                class: "chart-popover no-spacing",
                style: b({ bottom: `${100 - je(a)}%` })
              }, [
                ne(e.$slots, "popover", {
                  index: a,
                  key: t,
                  values: y.value.map((l) => Object.values(v(d)[l])[a])
                }, () => [
                  f("div", lt, [
                    (o(!0), n(c, null, p(ce.value, (l, u) => (o(), n(c, null, [
                      !v(S) || v(S).includes(y.value[u]) && a <= l.length ? (o(), oe(A, {
                        key: 0,
                        class: j(["no-spacing", W(y.value[u])]),
                        important: ""
                      }, {
                        default: k(() => [
                          w(B(v(F)[y.value[u]](v(d)[y.value[u]][l[a]])), 1)
                        ]),
                        _: 2
                      }, 1032, ["class"])) : g("", !0)
                    ], 64))), 256))
                  ]),
                  ne(e.$slots, "popoverAfterValues", {
                    index: a,
                    values: y.value.map((l) => Object.values(v(d)[l])[a])
                  }, void 0, !0)
                ], !0)
              ], 4)
            ], 2)
          ], 64))), 256))
        ], 4),
        f("div", {
          class: "chart-lines no-spacing",
          style: b(ae.value)
        }, [
          (o(!0), n(c, null, p(v(d), (t, a) => (o(), n(c, null, [
            v(m)[a] === "line" ? (o(), n("svg", {
              key: 0,
              class: j(W(a, [])),
              height: "100%",
              preserveAspectRatio: "none",
              width: "100%",
              viewBox: "0 0 100 100"
            }, [
              f("path", {
                d: Ge(t, a),
                "stroke-dasharray": $e(v(me)[a]).attributes.includes("dashed") ? "6 4" : void 0,
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2px",
                "vector-effect": "non-scaling-stroke"
              }, null, 8, ot)
            ], 2)) : g("", !0)
          ], 64))), 256))
        ], 4),
        f("div", {
          class: "chart-points no-spacing",
          style: b(ae.value)
        }, [
          (o(!0), n(c, null, p(v(d), (t, a) => (o(), n(c, null, [
            v(m)[a] === "line" && (!v(S) || v(S).includes(a)) ? (o(!0), n(c, { key: 0 }, p(t, (l, u) => (o(), n("div", {
              class: j(["chart-point", { ...W(a), visible: V.value.includes(u) }]),
              style: b({ left: `${z(u)}%`, top: `${L(l, a)}%` })
            }, null, 6))), 256)) : g("", !0)
          ], 64))), 256))
        ], 4),
        f("div", nt, [
          (o(!0), n(c, null, p(ie.value, (t) => (o(), n("div", {
            class: "chart-hover-section no-spacing",
            onMouseover: (a) => ke(t, !0),
            onMouseout: (a) => ke(t, !1)
          }, null, 40, rt))), 256))
        ]),
        v(_e) ? g("", !0) : (o(), n("div", {
          key: 1,
          class: "x-axis-labels no-spacing",
          style: b(He.value)
        }, [
          (o(!0), n(c, null, p(ie.value, (t, a) => (o(), n("div", {
            class: j(["x-axis-label-group-container no-spacing", { active: V.value.includes(t) }]),
            style: b({ left: `${z(t)}%` })
          }, [
            f("div", {
              class: "x-axis-label-group no-spacing",
              ref_for: !0,
              ref: (l) => We(a, l),
              style: b({ transform: `rotate(-${M.value}deg) translateX(-${Math.trunc(9 * Math.pow(M.value, 0.4))}%) translateY(-${M.value > 70 ? 50 : 0}%)` })
            }, [
              ne(e.$slots, "xAxis", { valueKey: t }, () => [
                (o(!0), n(c, null, p(Pe.value, (l) => (o(), n(c, null, [
                  !v(S) || v(S).includes(y.value[l - 1]) ? (o(), oe(A, {
                    key: 0,
                    class: j(["x-axis-label no-spacing", { ...W(y.value[l - 1]), "has-label": a < ce.value[l - 1].length }]),
                    important: "",
                    size: "small"
                  }, {
                    default: k(() => [
                      ne(e.$slots, "xAxisLabel", {
                        index: a,
                        lineIndex: l - 1,
                        valueKey: t
                      }, void 0, !0)
                    ]),
                    _: 2
                  }, 1032, ["class"])) : g("", !0)
                ], 64))), 256))
              ], !0)
            ], 4)
          ], 6))), 256))
        ], 4))
      ], 512),
      Q.value && xe.value ? (o(), n("div", ut, [
        (o(!0), n(c, null, p(Z.value[Y.value][Q.value], (t) => (o(), oe(A, { class: "axis-label" }, {
          default: k(() => [
            w(B(xe.value(t)), 1)
          ]),
          _: 2
        }, 1024))), 256))
      ])) : g("", !0),
      te.value ? (o(), n("div", ct, [
        fe(A, {
          class: "y-axis-title no-spacing",
          important: "",
          size: "small"
        }, {
          default: k(() => [
            w(B(te.value[1]), 1)
          ]),
          _: 1
        })
      ])) : g("", !0)
    ], 6));
  }
});
const ft = /* @__PURE__ */ Se(it, [["__scopeId", "data-v-76150599"]]);
export {
  pt as L,
  ft as a
};
