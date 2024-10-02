import { openBlock as o, createElementBlock as n, Fragment as c, renderList as p, createElementVNode as f, defineComponent as Ie, toRefs as Ke, computed as h, ref as N, watch as Ce, onMounted as Ee, onUnmounted as Ne, normalizeClass as j, unref as i, normalizeStyle as b, createVNode as fe, withCtx as k, createTextVNode as w, toDisplayString as B, createCommentVNode as g, createBlock as le, renderSlot as oe, pushScopeId as Xe, popScopeId as Re } from "vue";
import { _ as Se } from "./_plugin-vue_export-helper-dad06003.js";
import { I as A } from "./Info-38a17291.js";
const Fe = { class: "loader" }, Te = { class: "loader-line" };
function qe(C, be) {
  return o(), n("div", Fe, [
    (o(), n(c, null, p(5, (ne) => f("div", Te)), 64))
  ]);
}
const De = {}, dt = /* @__PURE__ */ Se(De, [["render", qe], ["__scopeId", "data-v-b467514e"]]), Ue = (C) => (Xe("data-v-bc97eb27"), C = C(), Re(), C), Ye = {
  key: 0,
  class: "y-axis-title-container"
}, Je = {
  key: 1,
  class: "y-axis-labels"
}, Qe = { class: "chart-grid no-spacing" }, Ze = { class: "axis-line no-spacing" }, et = { class: "chart-bars no-spacing" }, tt = /* @__PURE__ */ Ue(() => /* @__PURE__ */ f("div", { class: "separator" }, null, -1)), at = {
  key: 0,
  class: "chart-popover-separator no-spacing"
}, st = { class: "values" }, lt = ["d", "stroke-dasharray"], ot = { class: "chart-hover-sections no-spacing" }, nt = ["onMouseover", "onMouseout"], rt = {
  key: 2,
  class: "y-axis-labels"
}, ut = {
  key: 3,
  class: "y-axis-title-container"
}, ct = /* @__PURE__ */ Ie({
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
    const be = C, ne = ["dashed", "opaque"], {
      activeLines: S,
      axis: X,
      barSumValues: ge,
      groups: re,
      formatters: R,
      leftAxisGroup: F,
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
    } = Ke(be), _ = h(() => {
      var e;
      const t = {
        bar: {},
        line: {}
      }, s = {
        line: "__line__",
        bar: "__bar__"
      };
      for (const a of y.value) {
        const l = (e = re == null ? void 0 : re.value) == null ? void 0 : e[a];
        switch (m.value[a]) {
          case "bar":
            t.bar[a] = l ?? s.bar;
            break;
          case "line":
          default:
            t.line[a] = l ?? s.line;
            break;
        }
      }
      return t;
    }), ue = h(() => Object.values(d.value).map((t) => Object.keys(t))), ce = h(() => ue.value.reduce(
      (t, s) => s.length > t.length ? s : t,
      []
    )), P = h(() => (T == null ? void 0 : T.value) !== void 0 ? T.value : Object.values(m.value).some((t) => t === "bar") ? "bar" : "line"), Y = h(() => (D == null ? void 0 : D.value) !== void 0 ? D.value : Object.values(m.value).some((t) => t === "line") ? "line" : "bar"), J = h(() => (F == null ? void 0 : F.value) !== void 0 ? F.value : Object.values(_.value[P.value])[0]), Q = h(() => {
      if ((q == null ? void 0 : q.value) !== void 0)
        return q.value;
      if (P.value === "bar" && Y.value === "line")
        return Object.values(_.value[Y.value])[0];
    }), ye = h(() => {
      let t;
      for (const [s, e] of Object.entries(_.value[P.value]))
        if (e === J.value) {
          t = s;
          break;
        }
      if (t)
        return R.value[t];
    }), xe = h(() => {
      if (Q.value === void 0)
        return;
      let t;
      for (const [s, e] of Object.entries(_.value[Y.value]))
        if (e === Q.value) {
          t = s;
          break;
        }
      if (t)
        return R.value[t];
    }), Z = h(() => {
      const t = {
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
            let v = 0;
            for (const x of Object.values(l))
              t[u][r][v] += x, v++;
            break;
          case "line":
          default:
            t[u][r].push(...Object.values(d.value[a]));
        }
      }
      const s = {
        bar: {},
        line: {}
      }, e = (a, l, u) => {
        a[l] = Object.fromEntries(
          Object.values(_.value[l]).map((r) => {
            const v = u[r], x = Math.min(...v, 0);
            let I = Math.max(...v) - x;
            const pe = X.value * 2;
            X.value > 2 && I < pe && we.value.includes(r.toString()) && (I = pe);
            const K = Math.pow(10, Math.ceil(Math.abs(I)).toString().length - 2), E = I / (X.value - 1), ae = Math.ceil(E / K) * K, se = [x];
            for (let Ae = 1; Ae < X.value; Ae++)
              se.push(se[se.length - 1] + ae);
            return [r, se.reverse()];
          })
        );
      };
      return e(s, "bar", t.bar), e(s, "line", t.line), s;
    }), Oe = h(() => {
      for (const [t, s] of Object.entries(R.value))
        if (m.value[t] === "bar")
          return s;
    }), ie = h(() => {
      const t = {};
      for (const [s, e] of Object.entries(d.value))
        if (m.value[s] === "bar")
          for (const [a, l] of Object.entries(e))
            a in t || (t[a] = {}), t[a][s] = l;
      return t;
    }), Be = h(() => Object.keys(d.value).length), $ = h(() => Math.max(...Object.values(d.value).map((t) => Object.values(t).length))), y = h(() => Object.keys(d.value)), ee = h(
      () => U != null && U.value ? Object.values(U.value) : void 0
    ), Pe = (t, s) => {
      if (t.length === 0)
        return "";
      const e = Object.entries(t).map(([r, v]) => ({
        left: z(r),
        top: L(v, s)
      })), a = [`M ${e[0].left} ${e[0].top}`], l = (r, v) => ({
        length: Math.hypot(v.top - r.top, v.left - r.left),
        angle: Math.atan2(v.top - r.top, v.left - r.left)
      }), u = (r, v, x, H) => {
        const K = l(v ?? r, x ?? r);
        let E = K.angle;
        H && (E += Math.PI);
        const ae = K.length * Le.value;
        return {
          left: r.left + Math.cos(E) * ae,
          top: Math.min(r.top + Math.sin(E) * ae, 100)
        };
      };
      return e.slice(1).forEach((r, v) => {
        const x = u(e[v], e[v - 1], r, !1), H = u(r, e[v], e[v + 2], !0);
        a.push(
          `C ${x.left},${x.top} ${H.left},${H.top} ${r.left},${r.top}`
        );
      }), a.join(" ");
    }, te = h(() => {
      const e = `${100 / (Object.keys(ie.value).length || $.value) / 2}%`;
      return {
        left: e,
        right: e
      };
    }), G = N(), ve = N([]), Ge = (t, s) => {
      s && (ve.value[t] = s);
    }, O = N(), M = N(0), he = () => {
      if (!O.value)
        return;
      const t = Math.max(...ve.value.map((e) => e.clientWidth)), s = Math.max(...ve.value.map((e) => e.clientHeight));
      if (O.value.clientWidth > $.value * t)
        M.value = 0;
      else if (O.value.clientWidth < $.value * s)
        M.value = 90;
      else {
        const e = $.value * t;
        M.value = Math.min(Math.acos(O.value.clientWidth / e) * 100, 90);
      }
      G.value = t * Math.cos((90 - M.value) / 100);
    }, We = h(() => ({
      "margin-bottom": G.value === void 0 ? void 0 : `${G.value}px`
    })), ze = h(() => {
      const e = `${100 / (Object.keys(ie.value).length || $.value) / 2}%`;
      return {
        height: G.value === void 0 ? void 0 : `${G.value}px`,
        "margin-left": e,
        "margin-right": e
      };
    }), V = N([]), je = (t) => {
      for (const [s, e] of Object.entries(d.value))
        if (m.value[s] !== "bar" && Object.keys(e).length <= t)
          return L(Object.values(e)[t], s);
      return Math.min(
        ...Object.entries(d.value).filter(([s]) => m.value[s] !== "bar").map(
          ([s, e]) => L(Object.values(e)[t], s)
        )
      );
    }, W = (t, s) => {
      const e = me.value[t], a = s ?? ne, l = $e(e);
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
    }, $e = (t) => {
      let s = "mood" in t ? t.mood : void 0, e = "chart" in t ? t.chart.toString() : void 0;
      const a = [];
      for (const l of ne)
        (s ?? e).endsWith(`-${l}`) && (a.push(l), s ? s = s.substring(0, s.length - l.length - 1) : e && (e = e.substring(0, e.length - l.length - 1)));
      return {
        attributes: a,
        chart: e,
        mood: s
      };
    }, z = (t) => {
      let s;
      return typeof t != "symbol" && !isNaN(+t) ? s = +t : s = Object.keys(Object.values(d.value)[0]).indexOf(t.toString()), $.value === 1 ? 50 : s * 100 / ($.value - 1);
    }, Me = (t, s, e) => {
      const a = Z.value[s][e], l = a[a.length - 1], u = a[0], r = u - l <= 0.01 ? 100 : Math.min(100, Math.max(0, (u - t) * 100 / (u - l)));
      switch (s) {
        case "bar":
          return 100 - r;
        case "line":
        default:
          return r;
      }
    }, L = (t, s) => {
      const e = m.value[s], a = _.value[e][s];
      return Me(t, e, a);
    }, He = (t) => {
      const s = Object.values(_.value.bar)[0];
      return Me(t, "bar", s);
    }, ke = (t, s) => {
      if (s)
        V.value.push(t);
      else {
        const e = V.value.indexOf(t);
        e >= 0 && V.value.splice(e, 1);
      }
    };
    Ce(d, () => he());
    const de = new ResizeObserver(() => {
      he();
    });
    return Ce(O, () => {
      de.disconnect(), O.value && de.observe(O.value);
    }), Ee(() => {
      he();
    }), Ne(() => {
      de.disconnect();
    }), (t, s) => (o(), n("div", {
      class: j(["line-chart no-spacing", { "min-height": i(Ve), noXAxis: i(_e) }]),
      style: b(We.value)
    }, [
      ee.value ? (o(), n("div", Ye, [
        fe(A, {
          class: "y-axis-title no-spacing",
          important: "",
          size: "small"
        }, {
          default: k(() => [
            w(B(ee.value[0]), 1)
          ]),
          _: 1
        })
      ])) : g("", !0),
      J.value && ye.value ? (o(), n("div", Je, [
        (o(!0), n(c, null, p(Z.value[P.value][J.value], (e) => (o(), le(A, { class: "axis-label" }, {
          default: k(() => [
            w(B(ye.value(e)), 1)
          ]),
          _: 2
        }, 1024))), 256))
      ])) : g("", !0),
      f("div", {
        class: "chart-contents no-spacing",
        ref_key: "chartContents",
        ref: O
      }, [
        f("div", Qe, [
          (o(!0), n(c, null, p(Z.value[P.value][J.value].slice(1), (e) => (o(), n("div", Ze))), 256))
        ]),
        f("div", et, [
          (o(!0), n(c, null, p(ie.value, (e, a) => (o(), n("div", {
            class: "chart-bar-container no-spacing",
            style: b({ left: `${z(a)}%` })
          }, [
            tt,
            (o(!0), n(c, null, p(e, (l, u) => (o(), n(c, null, [
              L(l, u) > 0 ? (o(), n("div", {
                key: 0,
                class: j(["chart-bar no-spacing", { ...W(u) }]),
                style: b({ height: `${L(l, u)}%` })
              }, null, 6)) : g("", !0)
            ], 64))), 256))
          ], 4))), 256))
        ]),
        i(ge) && Oe.value ? (o(), n("div", {
          key: 0,
          class: "chart-bar-sums no-spacing",
          style: b(te.value)
        }, [
          (o(!0), n(c, null, p(i(ge), (e, a) => (o(), n("div", {
            class: "chart-bar-sum no-spacing",
            style: b({ left: `${z(a)}%`, bottom: `${He(e)}%` })
          }, [
            fe(A, null, {
              default: k(() => [
                w(B(Oe.value(e)), 1)
              ]),
              _: 2
            }, 1024)
          ], 4))), 256))
        ], 4)) : g("", !0),
        f("div", {
          class: "chart-popovers no-spacing",
          style: b(te.value)
        }, [
          (o(!0), n(c, null, p(ce.value, (e, a) => (o(), n(c, null, [
            a > 0 ? (o(), n("div", at)) : g("", !0),
            f("div", {
              class: j(["chart-popover-container no-spacing", { visible: V.value.includes(e) }])
            }, [
              f("div", {
                class: "chart-popover-line no-spacing",
                style: b({ height: `${100 - je(a)}%` })
              }, null, 4),
              f("div", {
                class: "chart-popover no-spacing",
                style: b({ bottom: `${100 - je(a)}%` })
              }, [
                oe(t.$slots, "popover", {
                  index: a,
                  values: y.value.map((l) => Object.values(i(d)[l])[a])
                }, () => [
                  f("div", st, [
                    (o(!0), n(c, null, p(ue.value, (l, u) => (o(), n(c, null, [
                      !i(S) || i(S).includes(y.value[u]) && a <= l.length ? (o(), le(A, {
                        key: 0,
                        class: j(["no-spacing", W(y.value[u])]),
                        important: ""
                      }, {
                        default: k(() => [
                          w(B(i(R)[y.value[u]](i(d)[y.value[u]][l[a]])), 1)
                        ]),
                        _: 2
                      }, 1032, ["class"])) : g("", !0)
                    ], 64))), 256))
                  ]),
                  oe(t.$slots, "popoverAfterValues", {
                    index: a,
                    values: y.value.map((l) => Object.values(i(d)[l])[a])
                  }, void 0, !0)
                ], !0)
              ], 4)
            ], 2)
          ], 64))), 256))
        ], 4),
        f("div", {
          class: "chart-lines no-spacing",
          style: b(te.value)
        }, [
          (o(!0), n(c, null, p(i(d), (e, a) => (o(), n(c, null, [
            i(m)[a] === "line" ? (o(), n("svg", {
              key: 0,
              class: j(W(a, [])),
              height: "100%",
              preserveAspectRatio: "none",
              width: "100%",
              viewBox: "0 0 100 100"
            }, [
              f("path", {
                d: Pe(e, a),
                "stroke-dasharray": $e(i(me)[a]).attributes.includes("dashed") ? "6 4" : void 0,
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2px",
                "vector-effect": "non-scaling-stroke"
              }, null, 8, lt)
            ], 2)) : g("", !0)
          ], 64))), 256))
        ], 4),
        f("div", {
          class: "chart-points no-spacing",
          style: b(te.value)
        }, [
          (o(!0), n(c, null, p(i(d), (e, a) => (o(), n(c, null, [
            i(m)[a] === "line" && (!i(S) || i(S).includes(a)) ? (o(!0), n(c, { key: 0 }, p(e, (l, u) => (o(), n("div", {
              class: j(["chart-point", { ...W(a), visible: V.value.includes(u) }]),
              style: b({ left: `${z(u)}%`, top: `${L(l, a)}%` })
            }, null, 6))), 256)) : g("", !0)
          ], 64))), 256))
        ], 4),
        f("div", ot, [
          (o(!0), n(c, null, p(ce.value, (e) => (o(), n("div", {
            class: "chart-hover-section no-spacing",
            onMouseover: (a) => ke(e, !0),
            onMouseout: (a) => ke(e, !1)
          }, null, 40, nt))), 256))
        ]),
        i(_e) ? g("", !0) : (o(), n("div", {
          key: 1,
          class: "x-axis-labels no-spacing",
          style: b(ze.value)
        }, [
          (o(!0), n(c, null, p(ce.value, (e, a) => (o(), n("div", {
            class: j(["x-axis-label-group-container no-spacing", { active: V.value.includes(e) }]),
            style: b({ left: `${z(e)}%` })
          }, [
            f("div", {
              class: "x-axis-label-group no-spacing",
              ref_for: !0,
              ref: (l) => Ge(a, l),
              style: b({ transform: `rotate(-${M.value}deg) translateX(-${Math.trunc(9 * Math.pow(M.value, 0.4))}%) translateY(-${M.value > 70 ? 50 : 0}%)` })
            }, [
              oe(t.$slots, "xAxis", { valueKey: e }, () => [
                (o(!0), n(c, null, p(Be.value, (l) => (o(), n(c, null, [
                  !i(S) || i(S).includes(y.value[l - 1]) ? (o(), le(A, {
                    key: 0,
                    class: j(["x-axis-label no-spacing", { ...W(y.value[l - 1]), "has-label": a < ue.value[l - 1].length }]),
                    important: "",
                    size: "small"
                  }, {
                    default: k(() => [
                      oe(t.$slots, "xAxisLabel", {
                        index: a,
                        lineIndex: l - 1,
                        valueKey: e
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
      Q.value && xe.value ? (o(), n("div", rt, [
        (o(!0), n(c, null, p(Z.value[Y.value][Q.value], (e) => (o(), le(A, { class: "axis-label" }, {
          default: k(() => [
            w(B(xe.value(e)), 1)
          ]),
          _: 2
        }, 1024))), 256))
      ])) : g("", !0),
      ee.value ? (o(), n("div", ut, [
        fe(A, {
          class: "y-axis-title no-spacing",
          important: "",
          size: "small"
        }, {
          default: k(() => [
            w(B(ee.value[1]), 1)
          ]),
          _: 1
        })
      ])) : g("", !0)
    ], 6));
  }
});
const pt = /* @__PURE__ */ Se(ct, [["__scopeId", "data-v-bc97eb27"]]);
export {
  dt as L,
  pt as a
};
