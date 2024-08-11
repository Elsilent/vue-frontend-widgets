import { openBlock as l, createElementBlock as o, Fragment as v, renderList as h, createElementVNode as g, defineComponent as we, toRefs as Le, computed as _, ref as E, watch as me, onMounted as Ve, onUnmounted as Be, normalizeClass as O, unref as i, normalizeStyle as m, createVNode as ne, withCtx as x, createTextVNode as j, toDisplayString as k, createCommentVNode as y, createBlock as I, renderSlot as U, pushScopeId as Pe, popScopeId as ze } from "vue";
import { _ as be } from "./_plugin-vue_export-helper-dad06003.js";
import { I as $ } from "./Info-38a17291.js";
const We = { class: "loader" }, He = { class: "loader-line" };
function Ie(L, oe) {
  return l(), o("div", We, [
    (l(), o(v, null, h(5, (J) => g("div", He)), 64))
  ]);
}
const Ne = {}, ot = /* @__PURE__ */ be(Ne, [["render", Ie], ["__scopeId", "data-v-b467514e"]]), Ke = (L) => (Pe("data-v-9c654606"), L = L(), ze(), L), Re = {
  key: 0,
  class: "y-axis-title-container"
}, Xe = {
  key: 1,
  class: "y-axis-labels no-spacing"
}, Ee = {
  key: 2,
  class: "y-axis-labels no-spacing"
}, Fe = { class: "chart-grid no-spacing" }, Ge = { class: "axis-line no-spacing" }, Te = { class: "chart-bars no-spacing" }, Ye = /* @__PURE__ */ Ke(() => /* @__PURE__ */ g("div", { class: "separator" }, null, -1)), qe = {
  key: 0,
  class: "chart-popover-separator no-spacing"
}, De = { class: "values" }, Ue = ["d", "stroke-dasharray"], Je = { class: "chart-hover-sections no-spacing" }, Qe = ["onMouseover", "onMouseout"], Ze = {
  key: 0,
  class: "y-axis-labels no-spacing"
}, et = {
  key: 1,
  class: "y-axis-labels no-spacing"
}, tt = {
  key: 4,
  class: "y-axis-title-container"
}, at = /* @__PURE__ */ we({
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
  setup(L) {
    const oe = L, J = ["dashed", "opaque"], {
      activeLines: V,
      axis: F,
      barSumValues: ue,
      formatters: B,
      minHeight: _e,
      moods: re,
      noXAxisLabels: ye,
      normalize: Q,
      showSecondaryYAxis: ce,
      smoothing: xe,
      styles: f,
      values: d,
      yAxisTitles: G,
      columnsWithIntegers: $e
    } = Le(oe), T = _(() => Object.values(d.value).map((t) => Object.keys(t))), Z = _(() => T.value.reduce(
      (t, s) => s.length > t.length ? s : t,
      []
    )), b = _(() => {
      const t = u.value.filter((r) => f.value[r] === "line").length, s = {
        bar: [],
        line: new Array(t).fill(0).map(() => [])
      }, e = {};
      for (let r = 0; r < ve.value; r++)
        switch (f.value[u.value[r]]) {
          case "bar":
            for (const c of T.value[r])
              c in e || (e[c] = 0), e[c] += d.value[u.value[r]][c];
            break;
          case "line":
            s.line[r % t].push(
              ...Object.values(d.value[u.value[r]])
            );
            break;
        }
      s.bar = Object.values(e);
      const a = {
        bar: {},
        line: {}
      }, n = ["bar", "line"];
      for (const r of n)
        a[r] = u.value.filter((c) => f.value[c] === r).reduce((c, p, W) => {
          const A = r === "bar" ? s[r] : s[r][W % t], le = Math.min(...A, 0);
          let w = Math.max(...A) - le;
          const H = F.value * 2;
          F.value > 2 && w < H && $e.value.includes(p.toString()) && (w = H);
          const X = Math.pow(10, Math.ceil(Math.abs(w)).toString().length - 2), Se = w / (F.value - 1), Ae = Math.ceil(Se / X) * X, D = [le];
          for (let ge = 1; ge < F.value; ge++)
            D.push(D[D.length - 1] + Ae);
          return c[p] = D.reverse(), c;
        }, {});
      return a;
    }), ie = _(() => {
      for (const [t, s] of Object.entries(B.value))
        if (f.value[t] === "bar")
          return s;
    }), ee = _(() => {
      const t = {};
      for (const [s, e] of Object.entries(d.value))
        if (f.value[s] === "bar")
          for (const [a, n] of Object.entries(e))
            a in t || (t[a] = {}), t[a][s] = n;
      return t;
    }), ve = _(() => Object.keys(d.value).length), he = _(() => {
      const t = ["bar", "line"], s = {
        bar: [],
        line: []
      };
      for (const e of t) {
        let a = u.value[0];
        for (let n = 1; n < u.value.length; n++)
          u.value[n] in b.value[e] && (!(a in b.value[e]) || b.value[e][u.value[n]][0] > b.value[e][a][0]) && (a = u.value[n]);
        s[e] = b.value[e][a];
      }
      return s;
    }), C = _(() => Math.max(...Object.values(d.value).map((t) => Object.values(t).length))), u = _(() => Object.keys(d.value)), Y = _(
      () => G != null && G.value ? Object.values(G.value) : void 0
    ), Me = (t, s) => {
      if (t.length === 0)
        return "";
      const e = Object.entries(t).map(([c, p]) => ({
        left: R(c),
        top: S(p, s)
      })), a = [`M ${e[0].left} ${e[0].top}`], n = (c, p) => ({
        length: Math.hypot(p.top - c.top, p.left - c.left),
        angle: Math.atan2(p.top - c.top, p.left - c.left)
      }), r = (c, p, W, A) => {
        const w = n(p ?? c, W ?? c);
        let H = w.angle;
        A && (H += Math.PI);
        const X = w.length * xe.value;
        return {
          left: c.left + Math.cos(H) * X,
          top: Math.min(c.top + Math.sin(H) * X, 100)
        };
      };
      return e.slice(1).forEach((c, p) => {
        const W = r(e[p], e[p - 1], c, !1), A = r(c, e[p], e[p + 2], !0);
        a.push(
          `C ${W.left},${W.top} ${A.left},${A.top} ${c.left},${c.top}`
        );
      }), a.join(" ");
    }, q = _(() => {
      const e = `${100 / (Object.keys(ee.value).length || C.value) / 2}%`;
      return {
        left: e,
        right: e
      };
    }), N = E(), te = E([]), Oe = (t, s) => {
      s && (te.value[t] = s);
    }, M = E(), P = E(0), ae = () => {
      if (!M.value)
        return;
      const t = Math.max(...te.value.map((e) => e.clientWidth)), s = Math.max(...te.value.map((e) => e.clientHeight));
      if (M.value.clientWidth > C.value * t)
        P.value = 0;
      else if (M.value.clientWidth < C.value * s)
        P.value = 90;
      else {
        const e = C.value * t;
        P.value = Math.acos(M.value.clientWidth / e) * 100;
      }
      N.value = t * Math.cos((90 - P.value) / 100);
    }, je = _(() => ({
      // 3 rem equals padding + margin
      "margin-bottom": N.value === void 0 ? void 0 : `calc(${N.value}px - 3rem)`
    })), ke = _(() => {
      const e = `${100 / (Object.keys(ee.value).length || C.value) / 2}%`;
      return {
        height: N.value === void 0 ? void 0 : `${N.value}px`,
        "margin-left": e,
        "margin-right": e
      };
    }), z = E([]), de = (t) => {
      for (const [s, e] of Object.entries(d.value))
        if (f.value[s] !== "bar" && Object.keys(e).length <= t)
          return S(Object.values(e)[t], s);
      return Math.min(
        ...Object.entries(d.value).filter(([s]) => f.value[s] !== "bar").map(
          ([s, e]) => S(Object.values(e)[t], s)
        )
      );
    }, K = (t, s) => {
      const e = re.value[t], a = s ?? J, n = pe(e);
      return a.reduce(
        (r, c) => ({
          ...r,
          [c]: n.attributes.includes(c)
        }),
        {
          [`chart-${n.chart}`]: !!n.chart,
          [`mood-${n.mood}`]: !!n.mood
        }
      );
    }, pe = (t) => {
      let s = "mood" in t ? t.mood : void 0, e = "chart" in t ? t.chart.toString() : void 0;
      const a = [];
      for (const n of J)
        (s ?? e).endsWith(`-${n}`) && (a.push(n), s ? s = s.substring(0, s.length - n.length - 1) : e && (e = e.substring(0, e.length - n.length - 1)));
      return {
        attributes: a,
        chart: e,
        mood: s
      };
    }, R = (t) => {
      let s;
      return typeof t != "symbol" && !isNaN(+t) ? s = +t : s = Object.keys(Object.values(d.value)[0]).indexOf(t.toString()), C.value === 1 ? 50 : s * 100 / (C.value - 1);
    }, S = (t, s, e) => {
      e || (e = f.value[s]);
      const [a, n] = (() => Q.value ? [
        b.value[e][s][b.value[e][s].length - 1],
        b.value[e][s][0]
      ] : [
        Math.min(
          ...Object.values(b.value[e]).map((c) => c[c.length - 1])
        ),
        Math.max(...Object.values(b.value[e]).map((c) => c[0]))
      ])(), r = n - a <= 0.01 ? 100 : Math.min(100, Math.max(0, (n - t) * 100 / (n - a)));
      switch (e) {
        case "bar":
          return 100 - r;
        case "line":
        default:
          return r;
      }
    }, fe = (t, s) => {
      if (s)
        z.value.push(t);
      else {
        const e = z.value.indexOf(t);
        e >= 0 && z.value.splice(e, 1);
      }
    };
    me(d, () => ae());
    const se = new ResizeObserver(() => {
      ae();
    });
    return me(M, () => {
      se.disconnect(), M.value && se.observe(M.value);
    }), Ve(() => {
      ae();
    }), Be(() => {
      se.disconnect();
    }), (t, s) => (l(), o("div", {
      class: O(["line-chart no-spacing", { "min-height": i(_e) }]),
      style: m(je.value)
    }, [
      Y.value ? (l(), o("div", Re, [
        ne($, {
          class: "y-axis-title no-spacing",
          important: "",
          size: "small"
        }, {
          default: x(() => [
            j(k(Y.value[0]), 1)
          ]),
          _: 1
        })
      ])) : y("", !0),
      i(Q) ? (l(), o("div", Xe, [
        (l(!0), o(v, null, h(b.value[i(f)[u.value[0]]][u.value[0]], (e) => (l(), I($, { class: "axis-label" }, {
          default: x(() => [
            j(k(i(B)[u.value[0]](e)), 1)
          ]),
          _: 2
        }, 1024))), 256))
      ])) : (l(), o("div", Ee, [
        (l(!0), o(v, null, h(he.value[i(f)[u.value[0]]], (e) => (l(), I($, { class: "axis-label" }, {
          default: x(() => [
            j(k(i(B)[u.value[0]](e)), 1)
          ]),
          _: 2
        }, 1024))), 256))
      ])),
      g("div", {
        class: "chart-contents no-spacing",
        ref_key: "chartContents",
        ref: M
      }, [
        g("div", Fe, [
          (l(!0), o(v, null, h(b.value[i(f)[u.value[0]]][u.value[0]].slice(1), (e) => (l(), o("div", Ge))), 256))
        ]),
        g("div", Te, [
          (l(!0), o(v, null, h(ee.value, (e, a) => (l(), o("div", {
            class: "chart-bar-container no-spacing",
            style: m({ left: `${R(a)}%` })
          }, [
            Ye,
            (l(!0), o(v, null, h(e, (n, r) => (l(), o(v, null, [
              S(n, r) > 0 ? (l(), o("div", {
                key: 0,
                class: O(["chart-bar no-spacing", { ...K(r) }]),
                style: m({ height: `${S(n, r)}%` })
              }, null, 6)) : y("", !0)
            ], 64))), 256))
          ], 4))), 256))
        ]),
        i(ue) && ie.value ? (l(), o("div", {
          key: 0,
          class: "chart-bar-sums no-spacing",
          style: m(q.value)
        }, [
          (l(!0), o(v, null, h(i(ue), (e, a) => (l(), o("div", {
            class: "chart-bar-sum no-spacing",
            style: m({ left: `${R(a)}%`, bottom: `${S(e, a, "bar")}%` })
          }, [
            ne($, null, {
              default: x(() => [
                j(k(ie.value(e)), 1)
              ]),
              _: 2
            }, 1024)
          ], 4))), 256))
        ], 4)) : y("", !0),
        g("div", {
          class: "chart-popovers no-spacing",
          style: m(q.value)
        }, [
          (l(!0), o(v, null, h(Z.value, (e, a) => (l(), o(v, null, [
            a > 0 ? (l(), o("div", qe)) : y("", !0),
            g("div", {
              class: O(["chart-popover-container no-spacing", { visible: z.value.includes(e) }])
            }, [
              g("div", {
                class: "chart-popover-line no-spacing",
                style: m({ height: `${100 - de(a)}%` })
              }, null, 4),
              g("div", {
                class: "chart-popover no-spacing",
                style: m({ bottom: `${100 - de(a)}%` })
              }, [
                U(t.$slots, "popover", {
                  index: a,
                  values: u.value.map((n) => Object.values(i(d)[n])[a])
                }, () => [
                  g("div", De, [
                    (l(!0), o(v, null, h(T.value, (n, r) => (l(), o(v, null, [
                      !i(V) || i(V).includes(u.value[r]) && a <= n.length ? (l(), I($, {
                        key: 0,
                        class: O(["no-spacing", K(u.value[r])]),
                        important: ""
                      }, {
                        default: x(() => [
                          j(k(i(B)[u.value[r]](i(d)[u.value[r]][n[a]])), 1)
                        ]),
                        _: 2
                      }, 1032, ["class"])) : y("", !0)
                    ], 64))), 256))
                  ]),
                  U(t.$slots, "popoverAfterValues", {
                    index: a,
                    values: u.value.map((n) => Object.values(i(d)[n])[a])
                  }, void 0, !0)
                ], !0)
              ], 4)
            ], 2)
          ], 64))), 256))
        ], 4),
        g("div", {
          class: "chart-lines no-spacing",
          style: m(q.value)
        }, [
          (l(!0), o(v, null, h(i(d), (e, a) => (l(), o(v, null, [
            i(f)[a] === "line" ? (l(), o("svg", {
              key: 0,
              class: O(K(a, [])),
              height: "100%",
              preserveAspectRatio: "none",
              width: "100%",
              viewBox: "0 0 100 100"
            }, [
              g("path", {
                d: Me(e, a),
                "stroke-dasharray": pe(i(re)[a]).attributes.includes("dashed") ? "6 4" : void 0,
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2px",
                "vector-effect": "non-scaling-stroke"
              }, null, 8, Ue)
            ], 2)) : y("", !0)
          ], 64))), 256))
        ], 4),
        g("div", {
          class: "chart-points no-spacing",
          style: m(q.value)
        }, [
          (l(!0), o(v, null, h(i(d), (e, a) => (l(), o(v, null, [
            i(f)[a] === "line" && (!i(V) || i(V).includes(a)) ? (l(!0), o(v, { key: 0 }, h(e, (n, r) => (l(), o("div", {
              class: O(["chart-point", { ...K(a), visible: z.value.includes(r) }]),
              style: m({ left: `${R(r)}%`, top: `${S(n, a)}%` })
            }, null, 6))), 256)) : y("", !0)
          ], 64))), 256))
        ], 4),
        g("div", Je, [
          (l(!0), o(v, null, h(Z.value, (e) => (l(), o("div", {
            class: "chart-hover-section no-spacing",
            onMouseover: (a) => fe(e, !0),
            onMouseout: (a) => fe(e, !1)
          }, null, 40, Qe))), 256))
        ]),
        i(ye) ? y("", !0) : (l(), o("div", {
          key: 1,
          class: "x-axis-labels no-spacing",
          style: m(ke.value)
        }, [
          (l(!0), o(v, null, h(Z.value, (e, a) => (l(), o("div", {
            class: O(["x-axis-label-group-container no-spacing", { active: z.value.includes(e) }]),
            style: m({ left: `${R(e)}%` })
          }, [
            g("div", {
              class: "x-axis-label-group no-spacing",
              ref_for: !0,
              ref: (n) => Oe(a, n),
              style: m({ transform: `rotate(-${P.value}deg) translateX(-${Math.trunc(8.3 * Math.pow(P.value, 0.4))}%)` })
            }, [
              U(t.$slots, "xAxis", { valueKey: e }, () => [
                (l(!0), o(v, null, h(ve.value, (n) => (l(), o(v, null, [
                  !i(V) || i(V).includes(u.value[n - 1]) ? (l(), I($, {
                    key: 0,
                    class: O(["x-axis-label no-spacing", { ...K(u.value[n - 1]), "has-label": a < T.value[n - 1].length }]),
                    important: "",
                    size: "small"
                  }, {
                    default: x(() => [
                      U(t.$slots, "xAxisLabel", {
                        index: a,
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
      i(ce) ? (l(), o(v, { key: 3 }, [
        i(Q) ? (l(), o("div", Ze, [
          (l(!0), o(v, null, h(b.value[i(f)[u.value[u.value.length - 1]]][u.value[u.value.length - 1]], (e) => (l(), I($, { class: "axis-label" }, {
            default: x(() => [
              j(k(i(B)[u.value[u.value.length - 1]](e)), 1)
            ]),
            _: 2
          }, 1024))), 256))
        ])) : (l(), o("div", et, [
          (l(!0), o(v, null, h(he.value[i(f)[u.value[u.value.length - 1]]], (e) => (l(), I($, { class: "axis-label" }, {
            default: x(() => [
              j(k(i(B)[u.value[u.value.length - 1]](e)), 1)
            ]),
            _: 2
          }, 1024))), 256))
        ]))
      ], 64)) : y("", !0),
      i(ce) && Y.value ? (l(), o("div", tt, [
        ne($, {
          class: "y-axis-title no-spacing",
          important: "",
          size: "small"
        }, {
          default: x(() => [
            j(k(Y.value[1]), 1)
          ]),
          _: 1
        })
      ])) : y("", !0)
    ], 6));
  }
});
const ut = /* @__PURE__ */ be(at, [["__scopeId", "data-v-9c654606"]]);
export {
  ot as L,
  ut as a
};
