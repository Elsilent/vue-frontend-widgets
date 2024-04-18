import { openBlock as l, createElementBlock as n, Fragment as v, renderList as d, createElementVNode as b, defineComponent as ke, toRefs as je, computed as _, ref as E, watch as be, onMounted as Ce, onUnmounted as Ae, normalizeClass as O, unref as c, normalizeStyle as g, createVNode as le, withCtx as x, createTextVNode as k, toDisplayString as j, createCommentVNode as y, createBlock as H, renderSlot as q, pushScopeId as Se, popScopeId as we } from "vue";
import { _ as ge } from "./_plugin-vue_export-helper-dad06003.js";
import { I as $ } from "./Info-54758b60.js";
const Ve = { class: "loader" }, ze = { class: "loader-line" };
function Le(w, oe) {
  return l(), n("div", Ve, [
    (l(), n(v, null, d(5, (D) => b("div", ze)), 64))
  ]);
}
const Pe = {}, tt = /* @__PURE__ */ ge(Pe, [["render", Le], ["__scopeId", "data-v-b6993c44"]]), Be = (w) => (Se("data-v-01286296"), w = w(), we(), w), He = {
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
    } = je(oe), L = _(() => Object.values(h.value).map((s) => Object.keys(s))), m = _(() => {
      const s = {
        bar: [],
        line: []
      }, o = {};
      for (let a = 0; a < Q.value; a++)
        switch (f.value[u.value[a]]) {
          case "bar":
            for (const r of L.value[a])
              r in o || (o[r] = 0), o[r] += h.value[u.value[a]][r];
            break;
          case "line":
            s.line.push(...Object.values(h.value[u.value[a]]));
            break;
        }
      s.bar = Object.values(o);
      for (let a = 0; a < Q.value; a++)
        f.value[u.value[a]] === "line" && s.line.push(...Object.values(h.value[u.value[a]]));
      const e = {
        bar: {},
        line: {}
      }, t = ["bar", "line"];
      for (const a of t)
        e[a] = u.value.filter((r) => f.value[r] === a).reduce((r, i) => {
          const p = s[a], A = Math.min(...p, 0), ae = Math.max(...p) - A, se = Math.pow(10, Math.ceil(Math.abs(ae)).toString().length - 2), Y = ae / (ne.value - 1), N = Math.ceil(Y / se) * se, S = [A];
          for (let fe = 1; fe < ne.value; fe++)
            S.push(S[S.length - 1] + N);
          return r[i] = S.reverse(), r;
        }, {});
      return e;
    }), ie = _(() => {
      for (const [s, o] of Object.entries(z.value))
        if (f.value[s] === "bar")
          return o;
    }), J = _(() => {
      const s = {};
      for (const [o, e] of Object.entries(h.value))
        if (f.value[o] === "bar")
          for (const [t, a] of Object.entries(e))
            t in s || (s[t] = {}), s[t][o] = a;
      return s;
    }), Q = _(() => Object.keys(h.value).length), ve = _(() => {
      const s = ["bar", "line"], o = {
        bar: [],
        line: []
      };
      for (const e of s) {
        let t = u.value[0];
        for (let a = 1; a < u.value.length; a++)
          u.value[a] in m.value[e] && (!(t in m.value[e]) || m.value[e][u.value[a]][0] > m.value[e][t][0]) && (t = u.value[a]);
        o[e] = m.value[e][t];
      }
      return o;
    }), I = _(() => Math.max(...Object.values(h.value).map((s) => Object.values(s).length))), u = _(() => Object.keys(h.value)), G = _(
      () => F != null && F.value ? Object.values(F.value) : void 0
    ), xe = (s, o) => {
      if (s.length === 0)
        return "";
      const e = Object.entries(s).map(([i, p]) => ({
        left: K(i),
        top: C(p, o)
      })), t = [`M ${e[0].left} ${e[0].top}`], a = (i, p) => ({
        length: Math.hypot(p.top - i.top, p.left - i.left),
        angle: Math.atan2(p.top - i.top, p.left - i.left)
      }), r = (i, p, A, X) => {
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
        const A = r(e[p], e[p - 1], i, !1), X = r(i, e[p], e[p + 2], !0);
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
    }), R = E(), Z = E([]), $e = (s, o) => {
      o && (Z.value[s] = o);
    }, M = E(), P = E(0), ee = () => {
      if (!M.value)
        return;
      const s = Math.max(...Z.value.map((t) => t.clientWidth)), o = Math.max(...Z.value.map((t) => t.clientHeight));
      if (M.value.clientWidth > I.value * s)
        P.value = 0;
      else if (M.value.clientWidth < I.value * o)
        P.value = 90;
      else {
        const t = I.value * s;
        P.value = Math.cos(M.value.clientWidth / t) * 180 / Math.PI;
      }
      const e = P.value * Math.PI / 180;
      R.value = s * Math.sin(e) + o * Math.cos(e);
    }, Me = _(() => ({
      "margin-bottom": R.value === void 0 ? void 0 : `${R.value}px`
    })), Oe = _(() => {
      const e = `${100 / Object.keys(J.value).length / 2}%`;
      return {
        height: R.value === void 0 ? void 0 : `${R.value}px`,
        "margin-left": e,
        "margin-right": e
      };
    }), B = E([]), he = (s) => {
      for (const [o, e] of Object.entries(h.value))
        if (f.value[o] !== "bar" && Object.keys(e).length <= s)
          return C(Object.values(e)[s], o);
      return Math.min(
        ...Object.entries(h.value).filter(([o]) => f.value[o] !== "bar").map(
          ([o, e]) => C(Object.values(e)[s], o)
        )
      );
    }, W = (s, o) => {
      const e = re.value[s], t = o ?? D, a = de(e);
      return t.reduce(
        (r, i) => ({
          ...r,
          [i]: a.attributes.includes(i)
        }),
        {
          [`chart-${a.chart}`]: !!a.chart,
          [`mood-${a.mood}`]: !!a.mood
        }
      );
    }, de = (s) => {
      let o = !1, e = "mood" in s ? s.mood : void 0, t = "chart" in s ? s.chart.toString() : void 0;
      const a = [];
      do
        for (const r of D)
          (e ?? t).endsWith(`-${r}`) && (a.push(r), e ? e = e.substring(0, e.length - r.length - 1) : t && (t = t.substring(0, t.length - r.length - 1)), o = !0);
      while (o);
      return {
        attributes: a,
        chart: t,
        mood: e
      };
    }, K = (s) => {
      const o = Object.keys(Object.values(h.value)[0]).indexOf(s);
      return I.value === 1 ? 50 : o * 100 / (I.value - 1);
    }, C = (s, o, e) => {
      e || (e = f.value[o]);
      const [t, a] = (() => U.value ? [
        m.value[e][o][m.value[e][o].length - 1],
        m.value[e][o][0]
      ] : [
        Math.min(
          ...Object.values(m.value[e]).map((i) => i[i.length - 1])
        ),
        Math.max(...Object.values(m.value[e]).map((i) => i[0]))
      ])(), r = a - t <= 0.01 ? 100 : Math.min(100, Math.max(0, (a - s) * 100 / (a - t)));
      switch (e) {
        case "bar":
          return 100 - r;
        case "line":
        default:
          return r;
      }
    }, pe = (s, o) => {
      if (o)
        B.value.push(s);
      else {
        const e = B.value.indexOf(s);
        e >= 0 && B.value.splice(e, 1);
      }
    };
    be(h, () => ee());
    const te = new ResizeObserver(() => {
      ee();
    });
    return be(M, () => {
      te.disconnect(), M.value && te.observe(M.value);
    }), Ce(() => {
      ee();
    }), Ae(() => {
      te.disconnect();
    }), (s, o) => (l(), n("div", {
      class: O(["line-chart no-spacing", { "min-height": c(me) }]),
      style: g(Me.value)
    }, [
      G.value ? (l(), n("div", He, [
        le($, {
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
      c(U) ? (l(), n("div", Ie, [
        (l(!0), n(v, null, d(m.value[c(f)[u.value[0]]][u.value[0]], (e) => (l(), H($, { class: "axis-label" }, {
          default: x(() => [
            k(j(c(z)[u.value[0]](e)), 1)
          ]),
          _: 2
        }, 1024))), 256))
      ])) : (l(), n("div", Re, [
        (l(!0), n(v, null, d(ve.value[c(f)[u.value[0]]], (e) => (l(), H($, { class: "axis-label" }, {
          default: x(() => [
            k(j(c(z)[u.value[0]](e)), 1)
          ]),
          _: 2
        }, 1024))), 256))
      ])),
      b("div", {
        class: "chart-contents no-spacing",
        ref_key: "chartContents",
        ref: M
      }, [
        b("div", We, [
          (l(!0), n(v, null, d(m.value[c(f)[u.value[0]]][u.value[0]].slice(1), (e) => (l(), n("div", Ke))), 256))
        ]),
        b("div", Xe, [
          (l(!0), n(v, null, d(J.value, (e, t) => (l(), n("div", {
            class: "chart-bar-container no-spacing",
            style: g({ left: `${K(t)}%` })
          }, [
            Ne,
            (l(!0), n(v, null, d(e, (a, r) => (l(), n(v, null, [
              C(a, r) > 0 ? (l(), n("div", {
                key: 0,
                class: O(["chart-bar no-spacing", { ...W(r) }]),
                style: g({ height: `${C(a, r)}%` })
              }, null, 6)) : y("", !0)
            ], 64))), 256))
          ], 4))), 256))
        ]),
        c(ue) && ie.value ? (l(), n("div", {
          key: 0,
          class: "chart-bar-sums no-spacing",
          style: g(T.value)
        }, [
          (l(!0), n(v, null, d(c(ue), (e, t) => (l(), n("div", {
            class: "chart-bar-sum no-spacing",
            style: g({ left: `${K(t)}%`, bottom: `${C(e, t, "bar")}%` })
          }, [
            le($, null, {
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
          (l(!0), n(v, null, d(L.value[0], (e, t) => (l(), n(v, null, [
            t > 0 ? (l(), n("div", Ee)) : y("", !0),
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
                q(s.$slots, "popover", {
                  index: t,
                  values: u.value.map((a) => Object.values(c(h)[a])[t])
                }, () => [
                  b("div", Fe, [
                    (l(!0), n(v, null, d(L.value, (a, r) => (l(), n(v, null, [
                      !c(V) || c(V).includes(u.value[r]) && t <= a.length ? (l(), H($, {
                        key: 0,
                        class: O(["no-spacing", W(u.value[r])]),
                        important: ""
                      }, {
                        default: x(() => [
                          k(j(c(z)[u.value[r]](c(h)[u.value[r]][a[t]])), 1)
                        ]),
                        _: 2
                      }, 1032, ["class"])) : y("", !0)
                    ], 64))), 256))
                  ]),
                  q(s.$slots, "popoverAfterValues", {
                    index: t,
                    values: u.value.map((a) => Object.values(c(h)[a])[t])
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
          (l(!0), n(v, null, d(c(h), (e, t) => (l(), n(v, null, [
            c(f)[t] === "line" ? (l(), n("svg", {
              key: 0,
              class: O(W(t, [])),
              height: "100%",
              preserveAspectRatio: "none",
              width: "100%",
              viewBox: "0 0 100 100"
            }, [
              b("path", {
                d: xe(e, t),
                "stroke-dasharray": de(c(re)[t]).attributes.includes("dashed") ? "6 4" : void 0,
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
          (l(!0), n(v, null, d(c(h), (e, t) => (l(), n(v, null, [
            c(f)[t] === "line" && (!c(V) || c(V).includes(t)) ? (l(!0), n(v, { key: 0 }, d(e, (a, r) => (l(), n("div", {
              class: O(["chart-point", { ...W(t), visible: B.value.includes(r) }]),
              style: g({ left: `${K(r)}%`, top: `${C(a, t)}%` })
            }, null, 6))), 256)) : y("", !0)
          ], 64))), 256))
        ], 4),
        b("div", Te, [
          (l(!0), n(v, null, d(L.value[0], (e) => (l(), n("div", {
            class: "chart-hover-section no-spacing",
            onMouseover: (t) => pe(e, !0),
            onMouseout: (t) => pe(e, !1)
          }, null, 40, Ye))), 256))
        ]),
        c(_e) ? y("", !0) : (l(), n("div", {
          key: 1,
          class: "x-axis-labels no-spacing",
          style: g(Oe.value)
        }, [
          (l(!0), n(v, null, d(L.value[0], (e, t) => (l(), n("div", {
            class: O(["x-axis-label-group-container no-spacing", { active: B.value.includes(e) }]),
            style: g({ left: `${K(e)}%` })
          }, [
            b("div", {
              class: "x-axis-label-group no-spacing",
              ref_for: !0,
              ref: (a) => $e(t, a),
              style: g({ transform: `rotate(-${P.value}deg) translateX(-${P.value * 50 / 90}%)` })
            }, [
              q(s.$slots, "xAxis", { valueKey: e }, () => [
                (l(!0), n(v, null, d(Q.value, (a) => (l(), n(v, null, [
                  !c(V) || c(V).includes(u.value[a - 1]) ? (l(), H($, {
                    key: 0,
                    class: O(["x-axis-label no-spacing", { ...W(u.value[a - 1]), "has-label": t <= L.value[a - 1].length }]),
                    important: "",
                    size: "small"
                  }, {
                    default: x(() => [
                      q(s.$slots, "xAxisLabel", {
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
      c(ce) ? (l(), n(v, { key: 3 }, [
        c(U) ? (l(), n("div", qe, [
          (l(!0), n(v, null, d(m.value[c(f)[u.value[u.value.length - 1]]][u.value[u.value.length - 1]], (e) => (l(), H($, { class: "axis-label" }, {
            default: x(() => [
              k(j(c(z)[u.value[u.value.length - 1]](e)), 1)
            ]),
            _: 2
          }, 1024))), 256))
        ])) : (l(), n("div", De, [
          (l(!0), n(v, null, d(ve.value[c(f)[u.value[u.value.length - 1]]], (e) => (l(), H($, { class: "axis-label" }, {
            default: x(() => [
              k(j(c(z)[u.value[u.value.length - 1]](e)), 1)
            ]),
            _: 2
          }, 1024))), 256))
        ]))
      ], 64)) : y("", !0),
      c(ce) && G.value ? (l(), n("div", Ue, [
        le($, {
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
const at = /* @__PURE__ */ ge(Je, [["__scopeId", "data-v-01286296"]]);
export {
  tt as L,
  at as a
};
