import { openBlock as s, createElementBlock as o, Fragment as v, renderList as h, createElementVNode as b, defineComponent as Ae, toRefs as we, computed as _, ref as F, watch as be, onMounted as Ve, onUnmounted as Le, normalizeClass as O, unref as i, normalizeStyle as g, createVNode as le, withCtx as x, createTextVNode as k, toDisplayString as j, createCommentVNode as y, createBlock as H, renderSlot as U, pushScopeId as ze, popScopeId as Pe } from "vue";
import { _ as ge } from "./_plugin-vue_export-helper-dad06003.js";
import { I as M } from "./Info-38a17291.js";
const Be = { class: "loader" }, Ie = { class: "loader-line" };
function We(w, ne) {
  return s(), o("div", Be, [
    (s(), o(v, null, h(5, (J) => b("div", Ie)), 64))
  ]);
}
const He = {}, nt = /* @__PURE__ */ ge(He, [["render", We], ["__scopeId", "data-v-b467514e"]]), Re = (w) => (ze("data-v-6a11e328"), w = w(), Pe(), w), Ke = {
  key: 0,
  class: "y-axis-title-container"
}, Xe = {
  key: 1,
  class: "y-axis-labels no-spacing"
}, Ne = {
  key: 2,
  class: "y-axis-labels no-spacing"
}, Ee = { class: "chart-grid no-spacing" }, Fe = { class: "axis-line no-spacing" }, Ge = { class: "chart-bars no-spacing" }, Te = /* @__PURE__ */ Re(() => /* @__PURE__ */ b("div", { class: "separator" }, null, -1)), Ye = {
  key: 0,
  class: "chart-popover-separator no-spacing"
}, qe = { class: "values" }, De = ["d", "stroke-dasharray"], Ue = { class: "chart-hover-sections no-spacing" }, Je = ["onMouseover", "onMouseout"], Qe = {
  key: 0,
  class: "y-axis-labels no-spacing"
}, Ze = {
  key: 1,
  class: "y-axis-labels no-spacing"
}, et = {
  key: 4,
  class: "y-axis-title-container"
}, tt = /* @__PURE__ */ Ae({
  __name: "LineBarChart",
  props: {
    activeLines: {},
    axis: { default: 4 },
    barSumValues: {},
    columnsWithIntegers: { default: () => [] },
    formatters: {},
    minHeight: { type: Boolean, default: !1 },
    moods: {},
    noXAxisLabels: { type: Boolean, default: !1 },
    normalize: { type: Boolean, default: !1 },
    showSecondaryYAxis: { type: Boolean, default: !1 },
    smoothing: { default: 0.15 },
    styles: {},
    values: {},
    yAxisTitles: {}
  },
  setup(w) {
    const ne = w, J = ["dashed", "opaque"], {
      activeLines: V,
      axis: G,
      barSumValues: oe,
      formatters: L,
      minHeight: me,
      moods: re,
      noXAxisLabels: _e,
      normalize: Q,
      showSecondaryYAxis: ue,
      smoothing: ye,
      styles: f,
      values: d,
      yAxisTitles: T,
      columnsWithIntegers: xe
    } = we(ne), z = _(() => Object.values(d.value).map((a) => Object.keys(a))), m = _(() => {
      const a = r.value.filter((u) => f.value[u] === "line").length, l = {
        bar: [],
        line: new Array(a).fill(0).map(() => [])
      }, e = {};
      for (let u = 0; u < ie.value; u++)
        switch (f.value[r.value[u]]) {
          case "bar":
            for (const c of z.value[u])
              c in e || (e[c] = 0), e[c] += d.value[r.value[u]][c];
            break;
          case "line":
            l.line[u % a].push(
              ...Object.values(d.value[r.value[u]])
            );
            break;
        }
      l.bar = Object.values(e);
      const t = {
        bar: {},
        line: {}
      }, n = ["bar", "line"];
      for (const u of n)
        t[u] = r.value.filter((c) => f.value[c] === u).reduce((c, p, I) => {
          const C = u === "bar" ? l[u] : l[u][I % a], se = Math.min(...C, 0);
          let A = Math.max(...C) - se;
          const W = G.value * 2;
          G.value > 2 && A < W && xe.value.includes(p.toString()) && (A = W);
          const E = Math.pow(10, Math.ceil(Math.abs(A)).toString().length - 2), Se = A / (G.value - 1), Ce = Math.ceil(Se / E) * E, D = [se];
          for (let fe = 1; fe < G.value; fe++)
            D.push(D[D.length - 1] + Ce);
          return c[p] = D.reverse(), c;
        }, {});
      return t;
    }), ce = _(() => {
      for (const [a, l] of Object.entries(L.value))
        if (f.value[a] === "bar")
          return l;
    }), Z = _(() => {
      const a = {};
      for (const [l, e] of Object.entries(d.value))
        if (f.value[l] === "bar")
          for (const [t, n] of Object.entries(e))
            t in a || (a[t] = {}), a[t][l] = n;
      return a;
    }), ie = _(() => Object.keys(d.value).length), ve = _(() => {
      const a = ["bar", "line"], l = {
        bar: [],
        line: []
      };
      for (const e of a) {
        let t = r.value[0];
        for (let n = 1; n < r.value.length; n++)
          r.value[n] in m.value[e] && (!(t in m.value[e]) || m.value[e][r.value[n]][0] > m.value[e][t][0]) && (t = r.value[n]);
        l[e] = m.value[e][t];
      }
      return l;
    }), R = _(() => Math.max(...Object.values(d.value).map((a) => Object.values(a).length))), r = _(() => Object.keys(d.value)), Y = _(
      () => T != null && T.value ? Object.values(T.value) : void 0
    ), Me = (a, l) => {
      if (a.length === 0)
        return "";
      const e = Object.entries(a).map(([c, p]) => ({
        left: N(c),
        top: S(p, l)
      })), t = [`M ${e[0].left} ${e[0].top}`], n = (c, p) => ({
        length: Math.hypot(p.top - c.top, p.left - c.left),
        angle: Math.atan2(p.top - c.top, p.left - c.left)
      }), u = (c, p, I, C) => {
        const A = n(p ?? c, I ?? c);
        let W = A.angle;
        C && (W += Math.PI);
        const E = A.length * ye.value;
        return {
          left: c.left + Math.cos(W) * E,
          top: Math.min(c.top + Math.sin(W) * E, 100)
        };
      };
      return e.slice(1).forEach((c, p) => {
        const I = u(e[p], e[p - 1], c, !1), C = u(c, e[p], e[p + 2], !0);
        t.push(
          `C ${I.left},${I.top} ${C.left},${C.top} ${c.left},${c.top}`
        );
      }), t.join(" ");
    }, q = _(() => {
      const a = Object.keys(Z.value).length, e = `${100 / a / 2}%`;
      return a ? {
        left: e,
        right: e
      } : { width: "100%" };
    }), K = F(), ee = F([]), $e = (a, l) => {
      l && (ee.value[a] = l);
    }, $ = F(), P = F(0), te = () => {
      if (!$.value)
        return;
      const a = Math.max(...ee.value.map((t) => t.clientWidth)), l = Math.max(...ee.value.map((t) => t.clientHeight));
      if ($.value.clientWidth > R.value * a)
        P.value = 0;
      else if ($.value.clientWidth < R.value * l)
        P.value = 90;
      else {
        const t = R.value * a;
        P.value = Math.cos($.value.clientWidth / t) * 180 / Math.PI;
      }
      const e = P.value * Math.PI / 180;
      K.value = a * Math.sin(e) + l * Math.cos(e);
    }, Oe = _(() => ({
      "margin-bottom": K.value === void 0 ? void 0 : `${K.value}px`
    })), ke = _(() => {
      const e = `${100 / Object.keys(Z.value).length / 2}%`;
      return {
        height: K.value === void 0 ? void 0 : `${K.value}px`,
        "margin-left": e,
        "margin-right": e
      };
    }), B = F([]), he = (a) => {
      for (const [l, e] of Object.entries(d.value))
        if (f.value[l] !== "bar" && Object.keys(e).length <= a)
          return S(Object.values(e)[a], l);
      return Math.min(
        ...Object.entries(d.value).filter(([l]) => f.value[l] !== "bar").map(
          ([l, e]) => S(Object.values(e)[a], l)
        )
      );
    }, X = (a, l) => {
      const e = re.value[a], t = l ?? J, n = de(e);
      return t.reduce(
        (u, c) => ({
          ...u,
          [c]: n.attributes.includes(c)
        }),
        {
          [`chart-${n.chart}`]: !!n.chart,
          [`mood-${n.mood}`]: !!n.mood
        }
      );
    }, de = (a) => {
      let l = "mood" in a ? a.mood : void 0, e = "chart" in a ? a.chart.toString() : void 0;
      const t = [];
      for (const n of J)
        (l ?? e).endsWith(`-${n}`) && (t.push(n), l ? l = l.substring(0, l.length - n.length - 1) : e && (e = e.substring(0, e.length - n.length - 1)));
      return {
        attributes: t,
        chart: e,
        mood: l
      };
    }, N = (a) => {
      const l = Object.keys(Object.values(d.value)[0]).indexOf(a.toString());
      return R.value === 1 ? 50 : l * 100 / (R.value - 1);
    }, S = (a, l, e) => {
      e || (e = f.value[l]);
      const [t, n] = (() => Q.value ? [
        m.value[e][l][m.value[e][l].length - 1],
        m.value[e][l][0]
      ] : [
        Math.min(
          ...Object.values(m.value[e]).map((c) => c[c.length - 1])
        ),
        Math.max(...Object.values(m.value[e]).map((c) => c[0]))
      ])(), u = n - t <= 0.01 ? 100 : Math.min(100, Math.max(0, (n - a) * 100 / (n - t)));
      switch (e) {
        case "bar":
          return 100 - u;
        case "line":
        default:
          return u;
      }
    }, pe = (a, l) => {
      if (l)
        B.value.push(a);
      else {
        const e = B.value.indexOf(a);
        e >= 0 && B.value.splice(e, 1);
      }
    };
    be(d, () => te());
    const ae = new ResizeObserver(() => {
      te();
    });
    return be($, () => {
      ae.disconnect(), $.value && ae.observe($.value);
    }), Ve(() => {
      te();
    }), Le(() => {
      ae.disconnect();
    }), (a, l) => (s(), o("div", {
      class: O(["line-chart no-spacing", { "min-height": i(me) }]),
      style: g(Oe.value)
    }, [
      Y.value ? (s(), o("div", Ke, [
        le(M, {
          class: "y-axis-title no-spacing",
          important: "",
          size: "small"
        }, {
          default: x(() => [
            k(j(Y.value[0]), 1)
          ]),
          _: 1
        })
      ])) : y("", !0),
      i(Q) ? (s(), o("div", Xe, [
        (s(!0), o(v, null, h(m.value[i(f)[r.value[0]]][r.value[0]], (e) => (s(), H(M, { class: "axis-label" }, {
          default: x(() => [
            k(j(i(L)[r.value[0]](e)), 1)
          ]),
          _: 2
        }, 1024))), 256))
      ])) : (s(), o("div", Ne, [
        (s(!0), o(v, null, h(ve.value[i(f)[r.value[0]]], (e) => (s(), H(M, { class: "axis-label" }, {
          default: x(() => [
            k(j(i(L)[r.value[0]](e)), 1)
          ]),
          _: 2
        }, 1024))), 256))
      ])),
      b("div", {
        class: "chart-contents no-spacing",
        ref_key: "chartContents",
        ref: $
      }, [
        b("div", Ee, [
          (s(!0), o(v, null, h(m.value[i(f)[r.value[0]]][r.value[0]].slice(1), (e) => (s(), o("div", Fe))), 256))
        ]),
        b("div", Ge, [
          (s(!0), o(v, null, h(Z.value, (e, t) => (s(), o("div", {
            class: "chart-bar-container no-spacing",
            style: g({ left: `${N(t)}%` })
          }, [
            Te,
            (s(!0), o(v, null, h(e, (n, u) => (s(), o(v, null, [
              S(n, u) > 0 ? (s(), o("div", {
                key: 0,
                class: O(["chart-bar no-spacing", { ...X(u) }]),
                style: g({ height: `${S(n, u)}%` })
              }, null, 6)) : y("", !0)
            ], 64))), 256))
          ], 4))), 256))
        ]),
        i(oe) && ce.value ? (s(), o("div", {
          key: 0,
          class: "chart-bar-sums no-spacing",
          style: g(q.value)
        }, [
          (s(!0), o(v, null, h(i(oe), (e, t) => (s(), o("div", {
            class: "chart-bar-sum no-spacing",
            style: g({ left: `${N(t)}%`, bottom: `${S(e, t, "bar")}%` })
          }, [
            le(M, null, {
              default: x(() => [
                k(j(ce.value(e)), 1)
              ]),
              _: 2
            }, 1024)
          ], 4))), 256))
        ], 4)) : y("", !0),
        b("div", {
          class: "chart-popovers no-spacing",
          style: g(q.value)
        }, [
          (s(!0), o(v, null, h(z.value[0], (e, t) => (s(), o(v, null, [
            t > 0 ? (s(), o("div", Ye)) : y("", !0),
            b("div", {
              class: O(["chart-popover-container no-spacing", { visible: B.value.includes(e) }])
            }, [
              b("div", {
                class: "chart-popover-line no-spacing",
                style: g({ height: `${100 - he(t)}%` })
              }, null, 4),
              b("div", {
                class: "chart-popover no-spacing",
                style: g({ bottom: `${100 - he(t)}%` })
              }, [
                U(a.$slots, "popover", {
                  index: t,
                  values: r.value.map((n) => Object.values(i(d)[n])[t])
                }, () => [
                  b("div", qe, [
                    (s(!0), o(v, null, h(z.value, (n, u) => (s(), o(v, null, [
                      !i(V) || i(V).includes(r.value[u]) && t <= n.length ? (s(), H(M, {
                        key: 0,
                        class: O(["no-spacing", X(r.value[u])]),
                        important: ""
                      }, {
                        default: x(() => [
                          k(j(i(L)[r.value[u]](i(d)[r.value[u]][n[t]])), 1)
                        ]),
                        _: 2
                      }, 1032, ["class"])) : y("", !0)
                    ], 64))), 256))
                  ]),
                  U(a.$slots, "popoverAfterValues", {
                    index: t,
                    values: r.value.map((n) => Object.values(i(d)[n])[t])
                  }, void 0, !0)
                ], !0)
              ], 4)
            ], 2)
          ], 64))), 256))
        ], 4),
        b("div", {
          class: "chart-lines no-spacing",
          style: g(q.value)
        }, [
          (s(!0), o(v, null, h(i(d), (e, t) => (s(), o(v, null, [
            i(f)[t] === "line" ? (s(), o("svg", {
              key: 0,
              class: O(X(t, [])),
              height: "100%",
              preserveAspectRatio: "none",
              width: "100%",
              viewBox: "0 0 100 100"
            }, [
              b("path", {
                d: Me(e, t),
                "stroke-dasharray": de(i(re)[t]).attributes.includes("dashed") ? "6 4" : void 0,
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2px",
                "vector-effect": "non-scaling-stroke"
              }, null, 8, De)
            ], 2)) : y("", !0)
          ], 64))), 256))
        ], 4),
        b("div", {
          class: "chart-points no-spacing",
          style: g(q.value)
        }, [
          (s(!0), o(v, null, h(i(d), (e, t) => (s(), o(v, null, [
            i(f)[t] === "line" && (!i(V) || i(V).includes(t)) ? (s(!0), o(v, { key: 0 }, h(e, (n, u) => (s(), o("div", {
              class: O(["chart-point", { ...X(t), visible: B.value.includes(u) }]),
              style: g({ left: `${N(u)}%`, top: `${S(n, t)}%` })
            }, null, 6))), 256)) : y("", !0)
          ], 64))), 256))
        ], 4),
        b("div", Ue, [
          (s(!0), o(v, null, h(z.value[0], (e) => (s(), o("div", {
            class: "chart-hover-section no-spacing",
            onMouseover: (t) => pe(e, !0),
            onMouseout: (t) => pe(e, !1)
          }, null, 40, Je))), 256))
        ]),
        i(_e) ? y("", !0) : (s(), o("div", {
          key: 1,
          class: "x-axis-labels no-spacing",
          style: g(ke.value)
        }, [
          (s(!0), o(v, null, h(z.value[0], (e, t) => (s(), o("div", {
            class: O(["x-axis-label-group-container no-spacing", { active: B.value.includes(e) }]),
            style: g({ left: `${N(e)}%` })
          }, [
            b("div", {
              class: "x-axis-label-group no-spacing",
              ref_for: !0,
              ref: (n) => $e(t, n),
              style: g({ transform: `rotate(-${P.value}deg) translateX(-${Math.trunc(8.3 * Math.pow(P.value, 0.4))}%)` })
            }, [
              U(a.$slots, "xAxis", { valueKey: e }, () => [
                (s(!0), o(v, null, h(ie.value, (n) => (s(), o(v, null, [
                  !i(V) || i(V).includes(r.value[n - 1]) ? (s(), H(M, {
                    key: 0,
                    class: O(["x-axis-label no-spacing", { ...X(r.value[n - 1]), "has-label": t <= z.value[n - 1].length }]),
                    important: "",
                    size: "small"
                  }, {
                    default: x(() => [
                      U(a.$slots, "xAxisLabel", {
                        index: t,
                        lineIndex: n - 1,
                        valueKey: e
                      }, void 0, !0)
                    ]),
                    _: 2
                  }, 1032, ["class"])) : y("", !0)
                ], 64))), 256))
              ], !0)
            ], 4)
          ], 6))), 256))
        ], 4))
      ], 512),
      i(ue) ? (s(), o(v, { key: 3 }, [
        i(Q) ? (s(), o("div", Qe, [
          (s(!0), o(v, null, h(m.value[i(f)[r.value[r.value.length - 1]]][r.value[r.value.length - 1]], (e) => (s(), H(M, { class: "axis-label" }, {
            default: x(() => [
              k(j(i(L)[r.value[r.value.length - 1]](e)), 1)
            ]),
            _: 2
          }, 1024))), 256))
        ])) : (s(), o("div", Ze, [
          (s(!0), o(v, null, h(ve.value[i(f)[r.value[r.value.length - 1]]], (e) => (s(), H(M, { class: "axis-label" }, {
            default: x(() => [
              k(j(i(L)[r.value[r.value.length - 1]](e)), 1)
            ]),
            _: 2
          }, 1024))), 256))
        ]))
      ], 64)) : y("", !0),
      i(ue) && Y.value ? (s(), o("div", et, [
        le(M, {
          class: "y-axis-title no-spacing",
          important: "",
          size: "small"
        }, {
          default: x(() => [
            k(j(Y.value[1]), 1)
          ]),
          _: 1
        })
      ])) : y("", !0)
    ], 6));
  }
});
const ot = /* @__PURE__ */ ge(tt, [["__scopeId", "data-v-6a11e328"]]);
export {
  nt as L,
  ot as a
};
