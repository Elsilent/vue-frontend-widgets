import { openBlock as l, createElementBlock as o, Fragment as v, renderList as h, createElementVNode as g, defineComponent as we, toRefs as Le, computed as _, ref as E, watch as me, onMounted as Ve, onUnmounted as Be, normalizeClass as O, unref as i, normalizeStyle as b, createVNode as ne, withCtx as x, createTextVNode as j, toDisplayString as k, createCommentVNode as y, createBlock as I, renderSlot as U, pushScopeId as Pe, popScopeId as ze } from "vue";
import { _ as _e } from "./_plugin-vue_export-helper-dad06003.js";
import { I as M } from "./Info-38a17291.js";
const We = { class: "loader" }, He = { class: "loader-line" };
function Ie(L, oe) {
  return l(), o("div", We, [
    (l(), o(v, null, h(5, (J) => g("div", He)), 64))
  ]);
}
const Ne = {}, ot = /* @__PURE__ */ _e(Ne, [["render", Ie], ["__scopeId", "data-v-b467514e"]]), Xe = (L) => (Pe("data-v-dbf3cdc6"), L = L(), ze(), L), Ke = {
  key: 0,
  class: "y-axis-title-container"
}, Re = {
  key: 1,
  class: "y-axis-labels no-spacing"
}, Ee = {
  key: 2,
  class: "y-axis-labels no-spacing"
}, Fe = { class: "chart-grid no-spacing" }, Ge = { class: "axis-line no-spacing" }, Te = { class: "chart-bars no-spacing" }, Ye = /* @__PURE__ */ Xe(() => /* @__PURE__ */ g("div", { class: "separator" }, null, -1)), qe = {
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
      minHeight: ye,
      moods: re,
      noXAxisLabels: ce,
      normalize: Q,
      showSecondaryYAxis: ie,
      smoothing: xe,
      styles: f,
      values: d,
      yAxisTitles: G,
      columnsWithIntegers: Me
    } = Le(oe), T = _(() => Object.values(d.value).map((t) => Object.keys(t))), Z = _(() => T.value.reduce(
      (t, s) => s.length > t.length ? s : t,
      []
    )), m = _(() => {
      const t = u.value.filter((r) => f.value[r] === "line").length, s = {
        bar: [],
        line: new Array(t).fill(0).map(() => [])
      }, e = {};
      for (let r = 0; r < he.value; r++)
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
          const S = r === "bar" ? s[r] : s[r][W % t], le = Math.min(...S, 0);
          let w = Math.max(...S) - le;
          const H = F.value * 2;
          F.value > 2 && w < H && Me.value.includes(p.toString()) && (w = H);
          const R = Math.pow(10, Math.ceil(Math.abs(w)).toString().length - 2), Ae = w / (F.value - 1), Se = Math.ceil(Ae / R) * R, D = [le];
          for (let be = 1; be < F.value; be++)
            D.push(D[D.length - 1] + Se);
          return c[p] = D.reverse(), c;
        }, {});
      return a;
    }), ve = _(() => {
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
    }), he = _(() => Object.keys(d.value).length), de = _(() => {
      const t = ["bar", "line"], s = {
        bar: [],
        line: []
      };
      for (const e of t) {
        let a = u.value[0];
        for (let n = 1; n < u.value.length; n++)
          u.value[n] in m.value[e] && (!(a in m.value[e]) || m.value[e][u.value[n]][0] > m.value[e][a][0]) && (a = u.value[n]);
        s[e] = m.value[e][a];
      }
      return s;
    }), C = _(() => Math.max(...Object.values(d.value).map((t) => Object.values(t).length))), u = _(() => Object.keys(d.value)), Y = _(
      () => G != null && G.value ? Object.values(G.value) : void 0
    ), $e = (t, s) => {
      if (t.length === 0)
        return "";
      const e = Object.entries(t).map(([c, p]) => ({
        left: K(c),
        top: A(p, s)
      })), a = [`M ${e[0].left} ${e[0].top}`], n = (c, p) => ({
        length: Math.hypot(p.top - c.top, p.left - c.left),
        angle: Math.atan2(p.top - c.top, p.left - c.left)
      }), r = (c, p, W, S) => {
        const w = n(p ?? c, W ?? c);
        let H = w.angle;
        S && (H += Math.PI);
        const R = w.length * xe.value;
        return {
          left: c.left + Math.cos(H) * R,
          top: Math.min(c.top + Math.sin(H) * R, 100)
        };
      };
      return e.slice(1).forEach((c, p) => {
        const W = r(e[p], e[p - 1], c, !1), S = r(c, e[p], e[p + 2], !0);
        a.push(
          `C ${W.left},${W.top} ${S.left},${S.top} ${c.left},${c.top}`
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
    }, $ = E(), P = E(0), ae = () => {
      if (!$.value)
        return;
      const t = Math.max(...te.value.map((e) => e.clientWidth)), s = Math.max(...te.value.map((e) => e.clientHeight));
      if ($.value.clientWidth > C.value * t)
        P.value = 0;
      else if ($.value.clientWidth < C.value * s)
        P.value = 90;
      else {
        const e = C.value * t;
        P.value = Math.min(Math.acos($.value.clientWidth / e) * 100, 90);
      }
      N.value = t * Math.cos((90 - P.value) / 100);
    }, je = _(() => ({
      "margin-bottom": N.value === void 0 ? void 0 : `${N.value}px`
    })), ke = _(() => {
      const e = `${100 / (Object.keys(ee.value).length || C.value) / 2}%`;
      return {
        height: N.value === void 0 ? void 0 : `${N.value}px`,
        "margin-left": e,
        "margin-right": e
      };
    }), z = E([]), pe = (t) => {
      for (const [s, e] of Object.entries(d.value))
        if (f.value[s] !== "bar" && Object.keys(e).length <= t)
          return A(Object.values(e)[t], s);
      return Math.min(
        ...Object.entries(d.value).filter(([s]) => f.value[s] !== "bar").map(
          ([s, e]) => A(Object.values(e)[t], s)
        )
      );
    }, X = (t, s) => {
      const e = re.value[t], a = s ?? J, n = fe(e);
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
    }, fe = (t) => {
      let s = "mood" in t ? t.mood : void 0, e = "chart" in t ? t.chart.toString() : void 0;
      const a = [];
      for (const n of J)
        (s ?? e).endsWith(`-${n}`) && (a.push(n), s ? s = s.substring(0, s.length - n.length - 1) : e && (e = e.substring(0, e.length - n.length - 1)));
      return {
        attributes: a,
        chart: e,
        mood: s
      };
    }, K = (t) => {
      let s;
      return typeof t != "symbol" && !isNaN(+t) ? s = +t : s = Object.keys(Object.values(d.value)[0]).indexOf(t.toString()), C.value === 1 ? 50 : s * 100 / (C.value - 1);
    }, A = (t, s, e) => {
      e || (e = f.value[s]);
      const [a, n] = (() => Q.value ? [
        m.value[e][s][m.value[e][s].length - 1],
        m.value[e][s][0]
      ] : [
        Math.min(
          ...Object.values(m.value[e]).map((c) => c[c.length - 1])
        ),
        Math.max(...Object.values(m.value[e]).map((c) => c[0]))
      ])(), r = n - a <= 0.01 ? 100 : Math.min(100, Math.max(0, (n - t) * 100 / (n - a)));
      switch (e) {
        case "bar":
          return 100 - r;
        case "line":
        default:
          return r;
      }
    }, ge = (t, s) => {
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
    return me($, () => {
      se.disconnect(), $.value && se.observe($.value);
    }), Ve(() => {
      ae();
    }), Be(() => {
      se.disconnect();
    }), (t, s) => (l(), o("div", {
      class: O(["line-chart no-spacing", { "min-height": i(ye), noXAxis: i(ce) }]),
      style: b(je.value)
    }, [
      Y.value ? (l(), o("div", Ke, [
        ne(M, {
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
      i(Q) ? (l(), o("div", Re, [
        (l(!0), o(v, null, h(m.value[i(f)[u.value[0]]][u.value[0]], (e) => (l(), I(M, { class: "axis-label" }, {
          default: x(() => [
            j(k(i(B)[u.value[0]](e)), 1)
          ]),
          _: 2
        }, 1024))), 256))
      ])) : (l(), o("div", Ee, [
        (l(!0), o(v, null, h(de.value[i(f)[u.value[0]]], (e) => (l(), I(M, { class: "axis-label" }, {
          default: x(() => [
            j(k(i(B)[u.value[0]](e)), 1)
          ]),
          _: 2
        }, 1024))), 256))
      ])),
      g("div", {
        class: "chart-contents no-spacing",
        ref_key: "chartContents",
        ref: $
      }, [
        g("div", Fe, [
          (l(!0), o(v, null, h(m.value[i(f)[u.value[0]]][u.value[0]].slice(1), (e) => (l(), o("div", Ge))), 256))
        ]),
        g("div", Te, [
          (l(!0), o(v, null, h(ee.value, (e, a) => (l(), o("div", {
            class: "chart-bar-container no-spacing",
            style: b({ left: `${K(a)}%` })
          }, [
            Ye,
            (l(!0), o(v, null, h(e, (n, r) => (l(), o(v, null, [
              A(n, r) > 0 ? (l(), o("div", {
                key: 0,
                class: O(["chart-bar no-spacing", { ...X(r) }]),
                style: b({ height: `${A(n, r)}%` })
              }, null, 6)) : y("", !0)
            ], 64))), 256))
          ], 4))), 256))
        ]),
        i(ue) && ve.value ? (l(), o("div", {
          key: 0,
          class: "chart-bar-sums no-spacing",
          style: b(q.value)
        }, [
          (l(!0), o(v, null, h(i(ue), (e, a) => (l(), o("div", {
            class: "chart-bar-sum no-spacing",
            style: b({ left: `${K(a)}%`, bottom: `${A(e, a, "bar")}%` })
          }, [
            ne(M, null, {
              default: x(() => [
                j(k(ve.value(e)), 1)
              ]),
              _: 2
            }, 1024)
          ], 4))), 256))
        ], 4)) : y("", !0),
        g("div", {
          class: "chart-popovers no-spacing",
          style: b(q.value)
        }, [
          (l(!0), o(v, null, h(Z.value, (e, a) => (l(), o(v, null, [
            a > 0 ? (l(), o("div", qe)) : y("", !0),
            g("div", {
              class: O(["chart-popover-container no-spacing", { visible: z.value.includes(e) }])
            }, [
              g("div", {
                class: "chart-popover-line no-spacing",
                style: b({ height: `${100 - pe(a)}%` })
              }, null, 4),
              g("div", {
                class: "chart-popover no-spacing",
                style: b({ bottom: `${100 - pe(a)}%` })
              }, [
                U(t.$slots, "popover", {
                  index: a,
                  values: u.value.map((n) => Object.values(i(d)[n])[a])
                }, () => [
                  g("div", De, [
                    (l(!0), o(v, null, h(T.value, (n, r) => (l(), o(v, null, [
                      !i(V) || i(V).includes(u.value[r]) && a <= n.length ? (l(), I(M, {
                        key: 0,
                        class: O(["no-spacing", X(u.value[r])]),
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
          style: b(q.value)
        }, [
          (l(!0), o(v, null, h(i(d), (e, a) => (l(), o(v, null, [
            i(f)[a] === "line" ? (l(), o("svg", {
              key: 0,
              class: O(X(a, [])),
              height: "100%",
              preserveAspectRatio: "none",
              width: "100%",
              viewBox: "0 0 100 100"
            }, [
              g("path", {
                d: $e(e, a),
                "stroke-dasharray": fe(i(re)[a]).attributes.includes("dashed") ? "6 4" : void 0,
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
          style: b(q.value)
        }, [
          (l(!0), o(v, null, h(i(d), (e, a) => (l(), o(v, null, [
            i(f)[a] === "line" && (!i(V) || i(V).includes(a)) ? (l(!0), o(v, { key: 0 }, h(e, (n, r) => (l(), o("div", {
              class: O(["chart-point", { ...X(a), visible: z.value.includes(r) }]),
              style: b({ left: `${K(r)}%`, top: `${A(n, a)}%` })
            }, null, 6))), 256)) : y("", !0)
          ], 64))), 256))
        ], 4),
        g("div", Je, [
          (l(!0), o(v, null, h(Z.value, (e) => (l(), o("div", {
            class: "chart-hover-section no-spacing",
            onMouseover: (a) => ge(e, !0),
            onMouseout: (a) => ge(e, !1)
          }, null, 40, Qe))), 256))
        ]),
        i(ce) ? y("", !0) : (l(), o("div", {
          key: 1,
          class: "x-axis-labels no-spacing",
          style: b(ke.value)
        }, [
          (l(!0), o(v, null, h(Z.value, (e, a) => (l(), o("div", {
            class: O(["x-axis-label-group-container no-spacing", { active: z.value.includes(e) }]),
            style: b({ left: `${K(e)}%` })
          }, [
            g("div", {
              class: "x-axis-label-group no-spacing",
              ref_for: !0,
              ref: (n) => Oe(a, n),
              style: b({ transform: `rotate(-${P.value}deg) translateX(-${Math.trunc(8.3 * Math.pow(P.value, 0.4))}%)` })
            }, [
              U(t.$slots, "xAxis", { valueKey: e }, () => [
                (l(!0), o(v, null, h(he.value, (n) => (l(), o(v, null, [
                  !i(V) || i(V).includes(u.value[n - 1]) ? (l(), I(M, {
                    key: 0,
                    class: O(["x-axis-label no-spacing", { ...X(u.value[n - 1]), "has-label": a < T.value[n - 1].length }]),
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
      i(ie) ? (l(), o(v, { key: 3 }, [
        i(Q) ? (l(), o("div", Ze, [
          (l(!0), o(v, null, h(m.value[i(f)[u.value[u.value.length - 1]]][u.value[u.value.length - 1]], (e) => (l(), I(M, { class: "axis-label" }, {
            default: x(() => [
              j(k(i(B)[u.value[u.value.length - 1]](e)), 1)
            ]),
            _: 2
          }, 1024))), 256))
        ])) : (l(), o("div", et, [
          (l(!0), o(v, null, h(de.value[i(f)[u.value[u.value.length - 1]]], (e) => (l(), I(M, { class: "axis-label" }, {
            default: x(() => [
              j(k(i(B)[u.value[u.value.length - 1]](e)), 1)
            ]),
            _: 2
          }, 1024))), 256))
        ]))
      ], 64)) : y("", !0),
      i(ie) && Y.value ? (l(), o("div", tt, [
        ne(M, {
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
const ut = /* @__PURE__ */ _e(at, [["__scopeId", "data-v-dbf3cdc6"]]);
export {
  ot as L,
  ut as a
};
