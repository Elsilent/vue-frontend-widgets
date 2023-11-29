import { openBlock as s, createElementBlock as n, Fragment as v, renderList as d, createElementVNode as b, defineComponent as ke, toRefs as je, computed as _, ref as E, watch as be, onMounted as Ce, onUnmounted as Ae, normalizeClass as O, unref as r, normalizeStyle as g, createVNode as le, withCtx as x, createTextVNode as k, toDisplayString as j, createCommentVNode as y, createBlock as H, renderSlot as q, pushScopeId as Se, popScopeId as we } from "vue";
import { _ as ge } from "./_plugin-vue_export-helper-dad06003.js";
import { I as M } from "./Info-54758b60.js";
const Ve = { class: "loader" }, ze = { class: "loader-line" };
function Le(w, oe) {
  return s(), n("div", Ve, [
    (s(), n(v, null, d(5, (D) => b("div", ze)), 64))
  ]);
}
const Pe = {}, tt = /* @__PURE__ */ ge(Pe, [["render", Le], ["__scopeId", "data-v-b6993c44"]]), Be = (w) => (Se("data-v-8c661cbf"), w = w(), we(), w), He = {
  key: 0,
  class: "y-axis-title-container"
}, Ie = {
  key: 1,
  class: "y-axis-labels no-spacing"
}, Re = {
  key: 2,
  class: "y-axis-labels no-spacing"
}, We = { class: "chart-grid no-spacing" }, Ke = { class: "axis-line no-spacing" }, Xe = { class: "chart-bars no-spacing" }, Ne = /* @__PURE__ */ Be(() => /* @__PURE__ */ b("div", { class: "separator" }, null, -1)), Ee = {
  key: 0,
  class: "chart-popover-separator no-spacing"
}, Fe = { class: "values" }, Ge = ["d", "stroke-dasharray"], Te = { class: "chart-hover-sections no-spacing" }, Ye = ["onMouseover", "onMouseout"], qe = {
  key: 0,
  class: "y-axis-labels no-spacing"
}, De = {
  key: 1,
  class: "y-axis-labels no-spacing"
}, Ue = {
  key: 4,
  class: "y-axis-title-container"
}, Je = /* @__PURE__ */ ke({
  __name: "LineBarChart",
  props: {
    activeLines: {},
    axis: { default: 4 },
    barSumValues: {},
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
    const oe = w, D = ["dashed", "opaque"], {
      activeLines: V,
      axis: ne,
      barSumValues: ue,
      formatters: z,
      minHeight: me,
      moods: re,
      noXAxisLabels: _e,
      normalize: U,
      showSecondaryYAxis: ce,
      smoothing: ye,
      styles: f,
      values: h,
      yAxisTitles: F
    } = je(oe), L = _(() => Object.values(h.value).map((l) => Object.keys(l))), m = _(() => {
      const l = {
        bar: [],
        line: []
      }, o = {};
      for (let a = 0; a < Q.value; a++)
        switch (f.value[u.value[a]]) {
          case "bar":
            for (const c of L.value[a])
              c in o || (o[c] = 0), o[c] += h.value[u.value[a]][c];
            break;
          case "line":
            l.line.push(
              ...Object.values(h.value[u.value[a]])
            );
            break;
        }
      l.bar = Object.values(o);
      for (let a = 0; a < Q.value; a++)
        f.value[u.value[a]] === "line" && l.line.push(
          ...Object.values(h.value[u.value[a]])
        );
      const e = {
        bar: {},
        line: {}
      }, t = ["bar", "line"];
      for (const a of t)
        e[a] = u.value.filter((c) => f.value[c] === a).reduce((c, i) => {
          const p = l[a], A = Math.min(...p, 0), ae = Math.max(...p) - A, se = Math.pow(10, Math.ceil(Math.abs(ae)).toString().length - 2), Y = ae / (ne.value - 1), N = Math.ceil(Y / se) * se, S = [A];
          for (let fe = 1; fe < ne.value; fe++)
            S.push(S[S.length - 1] + N);
          return c[i] = S.reverse(), c;
        }, {});
      return e;
    }), ie = _(() => {
      for (const [l, o] of Object.entries(z.value))
        if (f.value[l] === "bar")
          return o;
    }), J = _(() => {
      const l = {};
      for (const [o, e] of Object.entries(h.value))
        if (f.value[o] === "bar")
          for (const [t, a] of Object.entries(e))
            t in l || (l[t] = {}), l[t][o] = a;
      return l;
    }), Q = _(() => Object.keys(h.value).length), ve = _(() => {
      const l = ["bar", "line"], o = {
        bar: [],
        line: []
      };
      for (const e of l) {
        let t = u.value[0];
        for (let a = 1; a < u.value.length; a++)
          u.value[a] in m.value[e] && (!(t in m.value[e]) || m.value[e][u.value[a]][0] > m.value[e][t][0]) && (t = u.value[a]);
        o[e] = m.value[e][t];
      }
      return o;
    }), I = _(() => Math.max(...Object.values(h.value).map((l) => Object.values(l).length))), u = _(() => Object.keys(h.value)), G = _(
      () => F != null && F.value ? Object.values(F.value) : void 0
    ), xe = (l, o) => {
      if (l.length === 0)
        return "";
      const e = Object.entries(l).map(([i, p]) => ({
        left: K(i),
        top: C(p, o)
      })), t = [`M ${e[0].left} ${e[0].top}`], a = (i, p) => ({
        length: Math.hypot(p.top - i.top, p.left - i.left),
        angle: Math.atan2(p.top - i.top, p.left - i.left)
      }), c = (i, p, A, X) => {
        const Y = a(p ?? i, A ?? i);
        let N = Y.angle;
        X && (N += Math.PI);
        const S = Y.length * ye.value;
        return {
          left: i.left + Math.cos(N) * S,
          top: i.top + Math.sin(N) * S
        };
      };
      return e.slice(1).forEach((i, p) => {
        const A = c(e[p], e[p - 1], i, !1), X = c(i, e[p], e[p + 2], !0);
        t.push(
          `C ${A.left},${A.top} ${X.left},${X.top} ${i.left},${i.top}`
        );
      }), t.join(" ");
    }, T = _(() => {
      const e = `${100 / Object.keys(J.value).length / 2}%`;
      return {
        left: e,
        right: e
      };
    }), R = E(), Z = E([]), Me = (l, o) => {
      o && (Z.value[l] = o);
    }, $ = E(), P = E(0), ee = () => {
      if (!$.value)
        return;
      const l = Math.max(...Z.value.map((t) => t.clientWidth)), o = Math.max(...Z.value.map((t) => t.clientHeight));
      if ($.value.clientWidth > I.value * l)
        P.value = 0;
      else if ($.value.clientWidth < I.value * o)
        P.value = 90;
      else {
        const t = I.value * l;
        P.value = Math.cos($.value.clientWidth / t) * 180 / Math.PI;
      }
      const e = P.value * Math.PI / 180;
      R.value = l * Math.sin(e) + o * Math.cos(e);
    }, $e = _(() => ({
      "margin-bottom": R.value === void 0 ? void 0 : `${R.value}px`
    })), Oe = _(() => {
      const e = `${100 / Object.keys(J.value).length / 2}%`;
      return {
        height: R.value === void 0 ? void 0 : `${R.value}px`,
        "margin-left": e,
        "margin-right": e
      };
    }), B = E([]), he = (l) => {
      for (const [o, e] of Object.entries(h.value))
        if (f.value[o] !== "bar" && Object.keys(e).length <= l)
          return C(Object.values(e)[l], o);
      return Math.min(
        ...Object.entries(h.value).filter(([o]) => f.value[o] !== "bar").map(
          ([o, e]) => C(Object.values(e)[l], o)
        )
      );
    }, W = (l, o) => {
      const e = re.value[l], t = o ?? D, a = de(e);
      return t.reduce(
        (c, i) => ({
          ...c,
          [i]: a.attributes.includes(i)
        }),
        {
          [`mood-${a.mood}`]: !0
        }
      );
    }, de = (l) => {
      let o = !1, e = l;
      const t = [];
      do
        for (const a of D)
          e.endsWith(`-${a}`) && (t.push(a), e = e.substring(0, e.length - a.length - 1), o = !0);
      while (o);
      return {
        attributes: t,
        mood: e
      };
    }, K = (l) => {
      const o = Object.keys(Object.values(h.value)[0]).indexOf(l);
      return I.value === 1 ? 50 : o * 100 / (I.value - 1);
    }, C = (l, o, e) => {
      e || (e = f.value[o]);
      const [t, a] = (() => U.value ? [
        m.value[e][o][m.value[e][o].length - 1],
        m.value[e][o][0]
      ] : [
        Math.min(
          ...Object.values(m.value[e]).map((i) => i[i.length - 1])
        ),
        Math.max(...Object.values(m.value[e]).map((i) => i[0]))
      ])(), c = a - t <= 0.01 ? 100 : Math.min(100, Math.max(0, (a - l) * 100 / (a - t)));
      switch (e) {
        case "bar":
          return 100 - c;
        case "line":
        default:
          return c;
      }
    }, pe = (l, o) => {
      if (o)
        B.value.push(l);
      else {
        const e = B.value.indexOf(l);
        e >= 0 && B.value.splice(e, 1);
      }
    };
    be(
      h,
      () => {
        ee();
      }
    );
    const te = new ResizeObserver(() => {
      ee();
    });
    return be(
      $,
      () => {
        te.disconnect(), $.value && te.observe($.value);
      }
    ), Ce(() => {
      ee();
    }), Ae(() => {
      te.disconnect();
    }), (l, o) => (s(), n("div", {
      class: O(["line-chart no-spacing", { "min-height": r(me) }]),
      style: g($e.value)
    }, [
      G.value ? (s(), n("div", He, [
        le(M, {
          class: "y-axis-title no-spacing",
          important: "",
          size: "small"
        }, {
          default: x(() => [
            k(j(G.value[0]), 1)
          ]),
          _: 1
        })
      ])) : y("", !0),
      r(U) ? (s(), n("div", Ie, [
        (s(!0), n(v, null, d(m.value[r(f)[u.value[0]]][u.value[0]], (e) => (s(), H(M, { class: "axis-label" }, {
          default: x(() => [
            k(j(r(z)[u.value[0]](e)), 1)
          ]),
          _: 2
        }, 1024))), 256))
      ])) : (s(), n("div", Re, [
        (s(!0), n(v, null, d(ve.value[r(f)[u.value[0]]], (e) => (s(), H(M, { class: "axis-label" }, {
          default: x(() => [
            k(j(r(z)[u.value[0]](e)), 1)
          ]),
          _: 2
        }, 1024))), 256))
      ])),
      b("div", {
        class: "chart-contents no-spacing",
        ref_key: "chartContents",
        ref: $
      }, [
        b("div", We, [
          (s(!0), n(v, null, d(m.value[r(f)[u.value[0]]][u.value[0]].slice(1), (e) => (s(), n("div", Ke))), 256))
        ]),
        b("div", Xe, [
          (s(!0), n(v, null, d(J.value, (e, t) => (s(), n("div", {
            class: "chart-bar-container no-spacing",
            style: g({ left: `${K(t)}%` })
          }, [
            Ne,
            (s(!0), n(v, null, d(e, (a, c) => (s(), n(v, null, [
              C(a, c) > 0 ? (s(), n("div", {
                key: 0,
                class: O(["chart-bar no-spacing", { ...W(c) }]),
                style: g({ height: `${C(a, c)}%` })
              }, null, 6)) : y("", !0)
            ], 64))), 256))
          ], 4))), 256))
        ]),
        r(ue) && ie.value ? (s(), n("div", {
          key: 0,
          class: "chart-bar-sums no-spacing",
          style: g(T.value)
        }, [
          (s(!0), n(v, null, d(r(ue), (e, t) => (s(), n("div", {
            class: "chart-bar-sum no-spacing",
            style: g({ left: `${K(t)}%`, bottom: `${C(e, t, "bar")}%` })
          }, [
            le(M, null, {
              default: x(() => [
                k(j(ie.value(e)), 1)
              ]),
              _: 2
            }, 1024)
          ], 4))), 256))
        ], 4)) : y("", !0),
        b("div", {
          class: "chart-popovers no-spacing",
          style: g(T.value)
        }, [
          (s(!0), n(v, null, d(L.value[0], (e, t) => (s(), n(v, null, [
            t > 0 ? (s(), n("div", Ee)) : y("", !0),
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
                q(l.$slots, "popover", {
                  index: t,
                  values: u.value.map((a) => Object.values(r(h)[a])[t])
                }, () => [
                  b("div", Fe, [
                    (s(!0), n(v, null, d(L.value, (a, c) => (s(), n(v, null, [
                      !r(V) || r(V).includes(u.value[c]) && t <= a.length ? (s(), H(M, {
                        key: 0,
                        class: O(["no-spacing", W(u.value[c])]),
                        important: ""
                      }, {
                        default: x(() => [
                          k(j(r(z)[u.value[c]](r(h)[u.value[c]][a[t]])), 1)
                        ]),
                        _: 2
                      }, 1032, ["class"])) : y("", !0)
                    ], 64))), 256))
                  ]),
                  q(l.$slots, "popoverAfterValues", {
                    index: t,
                    values: u.value.map((a) => Object.values(r(h)[a])[t])
                  }, void 0, !0)
                ], !0)
              ], 4)
            ], 2)
          ], 64))), 256))
        ], 4),
        b("div", {
          class: "chart-lines no-spacing",
          style: g(T.value)
        }, [
          (s(!0), n(v, null, d(r(h), (e, t) => (s(), n(v, null, [
            r(f)[t] === "line" ? (s(), n("svg", {
              key: 0,
              class: O(W(t, [])),
              height: "100%",
              preserveAspectRatio: "none",
              width: "100%",
              viewBox: "0 0 100 100"
            }, [
              b("path", {
                d: xe(e, t),
                "stroke-dasharray": de(r(re)[t]).attributes.includes("dashed") ? "6 4" : void 0,
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2px",
                "vector-effect": "non-scaling-stroke"
              }, null, 8, Ge)
            ], 2)) : y("", !0)
          ], 64))), 256))
        ], 4),
        b("div", {
          class: "chart-points no-spacing",
          style: g(T.value)
        }, [
          (s(!0), n(v, null, d(r(h), (e, t) => (s(), n(v, null, [
            r(f)[t] === "line" && (!r(V) || r(V).includes(t)) ? (s(!0), n(v, { key: 0 }, d(e, (a, c) => (s(), n("div", {
              class: O(["chart-point", { ...W(t), visible: B.value.includes(c) }]),
              style: g({ left: `${K(c)}%`, top: `${C(a, t)}%` })
            }, null, 6))), 256)) : y("", !0)
          ], 64))), 256))
        ], 4),
        b("div", Te, [
          (s(!0), n(v, null, d(L.value[0], (e) => (s(), n("div", {
            class: "chart-hover-section no-spacing",
            onMouseover: (t) => pe(e, !0),
            onMouseout: (t) => pe(e, !1)
          }, null, 40, Ye))), 256))
        ]),
        r(_e) ? y("", !0) : (s(), n("div", {
          key: 1,
          class: "x-axis-labels no-spacing",
          style: g(Oe.value)
        }, [
          (s(!0), n(v, null, d(L.value[0], (e, t) => (s(), n("div", {
            class: O(["x-axis-label-group-container no-spacing", { active: B.value.includes(e) }]),
            style: g({ left: `${K(e)}%` })
          }, [
            b("div", {
              class: "x-axis-label-group no-spacing",
              ref_for: !0,
              ref: (a) => Me(t, a),
              style: g({ transform: `rotate(-${P.value}deg) translateX(-${P.value * 50 / 90}%)` })
            }, [
              q(l.$slots, "xAxis", { valueKey: e }, () => [
                (s(!0), n(v, null, d(Q.value, (a) => (s(), n(v, null, [
                  !r(V) || r(V).includes(u.value[a - 1]) ? (s(), H(M, {
                    key: 0,
                    class: O(["x-axis-label no-spacing", { ...W(u.value[a - 1]), "has-label": t <= L.value[a - 1].length }]),
                    important: "",
                    size: "small"
                  }, {
                    default: x(() => [
                      q(l.$slots, "xAxisLabel", {
                        index: t,
                        lineIndex: a - 1,
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
      r(ce) ? (s(), n(v, { key: 3 }, [
        r(U) ? (s(), n("div", qe, [
          (s(!0), n(v, null, d(m.value[r(f)[u.value[u.value.length - 1]]][u.value[u.value.length - 1]], (e) => (s(), H(M, { class: "axis-label" }, {
            default: x(() => [
              k(j(r(z)[u.value[u.value.length - 1]](e)), 1)
            ]),
            _: 2
          }, 1024))), 256))
        ])) : (s(), n("div", De, [
          (s(!0), n(v, null, d(ve.value[r(f)[u.value[u.value.length - 1]]], (e) => (s(), H(M, { class: "axis-label" }, {
            default: x(() => [
              k(j(r(z)[u.value[u.value.length - 1]](e)), 1)
            ]),
            _: 2
          }, 1024))), 256))
        ]))
      ], 64)) : y("", !0),
      r(ce) && G.value ? (s(), n("div", Ue, [
        le(M, {
          class: "y-axis-title no-spacing",
          important: "",
          size: "small"
        }, {
          default: x(() => [
            k(j(G.value[1]), 1)
          ]),
          _: 1
        })
      ])) : y("", !0)
    ], 6));
  }
});
const at = /* @__PURE__ */ ge(Je, [["__scopeId", "data-v-8c661cbf"]]);
export {
  tt as L,
  at as a
};
