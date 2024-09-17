import { openBlock as l, createElementBlock as n, Fragment as c, renderList as p, createElementVNode as f, defineComponent as Le, toRefs as Se, computed as h, ref as N, watch as xe, onMounted as we, onUnmounted as Pe, normalizeClass as y, unref as r, normalizeStyle as m, createVNode as ue, withCtx as k, createTextVNode as B, toDisplayString as E, createCommentVNode as b, createBlock as U, renderSlot as Y, pushScopeId as Be, popScopeId as Ee } from "vue";
import { _ as $e } from "./_plugin-vue_export-helper-dad06003.js";
import { I as A } from "./Info-38a17291.js";
const We = { class: "loader" }, ze = { class: "loader-line" };
function Ge(V, re) {
  return l(), n("div", We, [
    (l(), n(c, null, p(5, (J) => f("div", ze)), 64))
  ]);
}
const He = {}, lt = /* @__PURE__ */ $e(He, [["render", Ge], ["__scopeId", "data-v-b467514e"]]), Ie = (V) => (Be("data-v-d14ea85c"), V = V(), Ee(), V), Ne = {
  key: 0,
  class: "y-axis-title-container"
}, Xe = {
  key: 1,
  class: "y-axis-labels"
}, Re = { class: "chart-grid no-spacing" }, Fe = { class: "axis-line no-spacing" }, Ke = { class: "chart-bars no-spacing" }, Te = /* @__PURE__ */ Ie(() => /* @__PURE__ */ f("div", { class: "separator" }, null, -1)), qe = {
  key: 0,
  class: "chart-popover-separator no-spacing"
}, De = { class: "values" }, Ue = ["d", "stroke-dasharray"], Ye = { class: "chart-hover-sections no-spacing" }, Je = ["onMouseover", "onMouseout"], Qe = {
  key: 2,
  class: "y-axis-labels"
}, Ze = {
  key: 3,
  class: "y-axis-title-container"
}, et = /* @__PURE__ */ Le({
  __name: "LineBarChart",
  props: {
    activeLines: {},
    axis: { default: 4 },
    barSumValues: {},
    columnsWithIntegers: { default: () => [] },
    formatters: {},
    groups: {},
    leftAxisGroup: {},
    minHeight: { type: Boolean, default: !1 },
    moods: {},
    noXAxisLabels: { type: Boolean, default: !1 },
    rightAxisGroup: {},
    smoothing: { default: 0.15 },
    styles: {},
    values: {},
    yAxisTitles: {}
  },
  setup(V) {
    const re = V, J = ["dashed", "opaque"], {
      activeLines: L,
      axis: X,
      barSumValues: ce,
      groups: Q,
      formatters: R,
      leftAxisGroup: Z,
      minHeight: Oe,
      moods: ie,
      noXAxisLabels: ve,
      rightAxisGroup: S,
      smoothing: Me,
      styles: x,
      values: d,
      yAxisTitles: F,
      columnsWithIntegers: je
    } = Se(re), $ = h(
      () => (Q == null ? void 0 : Q.value) ?? Object.fromEntries(g.value.map((t) => [t, 0]))
    ), ee = h(() => Object.values(d.value).map((t) => Object.keys(t))), te = h(() => ee.value.reduce(
      (t, a) => a.length > t.length ? a : t,
      []
    )), K = h(
      () => (Z == null ? void 0 : Z.value) ?? $.value[g.value[0]]
    ), he = h(() => {
      const t = Object.entries($.value).find(([, e]) => e === K.value);
      if (!t)
        return;
      const [a] = t;
      return R.value[a];
    }), de = h(() => {
      if (!(S != null && S.value))
        return;
      const t = Object.entries($.value).find(([, e]) => e === S.value);
      if (!t)
        return;
      const [a] = t;
      return R.value[a];
    }), T = h(() => {
      const t = Object.fromEntries(
        Object.values($.value).map((e) => [e, []])
      );
      for (let e = 0; e < fe.value; e++)
        t[$.value[g.value[e]]].push(...Object.values(d.value[g.value[e]]));
      return Object.fromEntries(
        Object.values($.value).map((e) => {
          const s = t[e], o = Math.min(...s, 0);
          let u = Math.max(...s) - o;
          const v = X.value * 2;
          X.value > 2 && u < v && je.value.includes(e.toString()) && (u = v);
          const C = Math.pow(10, Math.ceil(Math.abs(u)).toString().length - 2), P = u / (X.value - 1), _e = Math.ceil(P / C) * C, H = [o];
          for (let I = 1; I < X.value; I++)
            H.push(H[H.length - 1] + _e);
          return [e, H.reverse()];
        })
      );
    }), pe = h(() => {
      for (const [t, a] of Object.entries(R.value))
        if (x.value[t] === "bar")
          return a;
    }), se = h(() => {
      const t = {};
      for (const [a, e] of Object.entries(d.value))
        if (x.value[a] === "bar")
          for (const [s, o] of Object.entries(e))
            s in t || (t[s] = {}), t[s][a] = o;
      return t;
    }), fe = h(() => Object.keys(d.value).length), O = h(() => Math.max(...Object.values(d.value).map((t) => Object.values(t).length))), g = h(() => Object.keys(d.value)), q = h(
      () => F != null && F.value ? Object.values(F.value) : void 0
    ), Ce = (t, a) => {
      if (t.length === 0)
        return "";
      const e = Object.entries(t).map(([u, v]) => ({
        left: G(u),
        top: j(v, a)
      })), s = [`M ${e[0].left} ${e[0].top}`], o = (u, v) => ({
        length: Math.hypot(v.top - u.top, v.left - u.left),
        angle: Math.atan2(v.top - u.top, v.left - u.left)
      }), i = (u, v, C, P) => {
        const I = o(v ?? u, C ?? u);
        let ne = I.angle;
        P && (ne += Math.PI);
        const ye = I.length * Me.value;
        return {
          left: u.left + Math.cos(ne) * ye,
          top: Math.min(u.top + Math.sin(ne) * ye, 100)
        };
      };
      return e.slice(1).forEach((u, v) => {
        const C = i(e[v], e[v - 1], u, !1), P = i(u, e[v], e[v + 2], !0);
        s.push(
          `C ${C.left},${C.top} ${P.left},${P.top} ${u.left},${u.top}`
        );
      }), s.join(" ");
    }, D = h(() => {
      const e = `${100 / (Object.keys(se.value).length || O.value) / 2}%`;
      return {
        left: e,
        right: e
      };
    }), W = N(), ae = N([]), ke = (t, a) => {
      a && (ae.value[t] = a);
    }, _ = N(), M = N(0), le = () => {
      if (!_.value)
        return;
      const t = Math.max(...ae.value.map((e) => e.clientWidth)), a = Math.max(...ae.value.map((e) => e.clientHeight));
      if (_.value.clientWidth > O.value * t)
        M.value = 0;
      else if (_.value.clientWidth < O.value * a)
        M.value = 90;
      else {
        const e = O.value * t;
        M.value = Math.min(Math.acos(_.value.clientWidth / e) * 100, 90);
      }
      W.value = t * Math.cos((90 - M.value) / 100);
    }, Ae = h(() => ({
      "margin-bottom": W.value === void 0 ? void 0 : `${W.value}px`
    })), Ve = h(() => {
      const e = `${100 / (Object.keys(se.value).length || O.value) / 2}%`;
      return {
        height: W.value === void 0 ? void 0 : `${W.value}px`,
        "margin-left": e,
        "margin-right": e
      };
    }), w = N([]), me = (t) => {
      for (const [a, e] of Object.entries(d.value))
        if (x.value[a] !== "bar" && Object.keys(e).length <= t)
          return j(Object.values(e)[t], a);
      return Math.min(
        ...Object.entries(d.value).filter(([a]) => x.value[a] !== "bar").map(
          ([a, e]) => j(Object.values(e)[t], a)
        )
      );
    }, z = (t, a) => {
      const e = ie.value[t], s = a ?? J, o = ge(e);
      return s.reduce(
        (i, u) => ({
          ...i,
          [u]: o.attributes.includes(u)
        }),
        {
          [`chart-${o.chart}`]: !!o.chart,
          [`mood-${o.mood}`]: !!o.mood
        }
      );
    }, ge = (t) => {
      let a = "mood" in t ? t.mood : void 0, e = "chart" in t ? t.chart.toString() : void 0;
      const s = [];
      for (const o of J)
        (a ?? e).endsWith(`-${o}`) && (s.push(o), a ? a = a.substring(0, a.length - o.length - 1) : e && (e = e.substring(0, e.length - o.length - 1)));
      return {
        attributes: s,
        chart: e,
        mood: a
      };
    }, G = (t) => {
      let a;
      return typeof t != "symbol" && !isNaN(+t) ? a = +t : a = Object.keys(Object.values(d.value)[0]).indexOf(t.toString()), O.value === 1 ? 50 : a * 100 / (O.value - 1);
    }, j = (t, a) => {
      const e = T.value[$.value[a]], s = e[e.length - 1], o = e[0], i = o - s <= 0.01 ? 100 : Math.min(100, Math.max(0, (o - t) * 100 / (o - s)));
      switch (x.value[a]) {
        case "bar":
          return 100 - i;
        case "line":
        default:
          return i;
      }
    }, be = (t, a) => {
      if (a)
        w.value.push(t);
      else {
        const e = w.value.indexOf(t);
        e >= 0 && w.value.splice(e, 1);
      }
    };
    xe(d, () => le());
    const oe = new ResizeObserver(() => {
      le();
    });
    return xe(_, () => {
      oe.disconnect(), _.value && oe.observe(_.value);
    }), we(() => {
      le();
    }), Pe(() => {
      oe.disconnect();
    }), (t, a) => (l(), n("div", {
      class: y(["line-chart no-spacing", { "min-height": r(Oe), noXAxis: r(ve) }]),
      style: m(Ae.value)
    }, [
      q.value ? (l(), n("div", Ne, [
        ue(A, {
          class: "y-axis-title no-spacing",
          important: "",
          size: "small"
        }, {
          default: k(() => [
            B(E(q.value[0]), 1)
          ]),
          _: 1
        })
      ])) : b("", !0),
      K.value && he.value ? (l(), n("div", Xe, [
        (l(!0), n(c, null, p(T.value[K.value], (e) => (l(), U(A, { class: "axis-label" }, {
          default: k(() => [
            B(E(he.value(e)), 1)
          ]),
          _: 2
        }, 1024))), 256))
      ])) : b("", !0),
      f("div", {
        class: "chart-contents no-spacing",
        ref_key: "chartContents",
        ref: _
      }, [
        f("div", Re, [
          (l(!0), n(c, null, p(T.value[K.value].slice(1), (e) => (l(), n("div", Fe))), 256))
        ]),
        f("div", Ke, [
          (l(!0), n(c, null, p(se.value, (e, s) => (l(), n("div", {
            class: "chart-bar-container no-spacing",
            style: m({ left: `${G(s)}%` })
          }, [
            Te,
            (l(!0), n(c, null, p(e, (o, i) => (l(), n(c, null, [
              j(o, i) > 0 ? (l(), n("div", {
                key: 0,
                class: y(["chart-bar no-spacing", { ...z(i) }]),
                style: m({ height: `${j(o, i)}%` })
              }, null, 6)) : b("", !0)
            ], 64))), 256))
          ], 4))), 256))
        ]),
        r(ce) && pe.value ? (l(), n("div", {
          key: 0,
          class: "chart-bar-sums no-spacing",
          style: m(D.value)
        }, [
          (l(!0), n(c, null, p(r(ce), (e, s) => (l(), n("div", {
            class: "chart-bar-sum no-spacing",
            style: m({ left: `${G(s)}%`, bottom: `${j(e, s)}%` })
          }, [
            ue(A, null, {
              default: k(() => [
                B(E(pe.value(e)), 1)
              ]),
              _: 2
            }, 1024)
          ], 4))), 256))
        ], 4)) : b("", !0),
        f("div", {
          class: "chart-popovers no-spacing",
          style: m(D.value)
        }, [
          (l(!0), n(c, null, p(te.value, (e, s) => (l(), n(c, null, [
            s > 0 ? (l(), n("div", qe)) : b("", !0),
            f("div", {
              class: y(["chart-popover-container no-spacing", { visible: w.value.includes(e) }])
            }, [
              f("div", {
                class: "chart-popover-line no-spacing",
                style: m({ height: `${100 - me(s)}%` })
              }, null, 4),
              f("div", {
                class: "chart-popover no-spacing",
                style: m({ bottom: `${100 - me(s)}%` })
              }, [
                Y(t.$slots, "popover", {
                  index: s,
                  values: g.value.map((o) => Object.values(r(d)[o])[s])
                }, () => [
                  f("div", De, [
                    (l(!0), n(c, null, p(ee.value, (o, i) => (l(), n(c, null, [
                      !r(L) || r(L).includes(g.value[i]) && s <= o.length ? (l(), U(A, {
                        key: 0,
                        class: y(["no-spacing", z(g.value[i])]),
                        important: ""
                      }, {
                        default: k(() => [
                          B(E(r(R)[g.value[i]](r(d)[g.value[i]][o[s]])), 1)
                        ]),
                        _: 2
                      }, 1032, ["class"])) : b("", !0)
                    ], 64))), 256))
                  ]),
                  Y(t.$slots, "popoverAfterValues", {
                    index: s,
                    values: g.value.map((o) => Object.values(r(d)[o])[s])
                  }, void 0, !0)
                ], !0)
              ], 4)
            ], 2)
          ], 64))), 256))
        ], 4),
        f("div", {
          class: "chart-lines no-spacing",
          style: m(D.value)
        }, [
          (l(!0), n(c, null, p(r(d), (e, s) => (l(), n(c, null, [
            r(x)[s] === "line" ? (l(), n("svg", {
              key: 0,
              class: y(z(s, [])),
              height: "100%",
              preserveAspectRatio: "none",
              width: "100%",
              viewBox: "0 0 100 100"
            }, [
              f("path", {
                d: Ce(e, s),
                "stroke-dasharray": ge(r(ie)[s]).attributes.includes("dashed") ? "6 4" : void 0,
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2px",
                "vector-effect": "non-scaling-stroke"
              }, null, 8, Ue)
            ], 2)) : b("", !0)
          ], 64))), 256))
        ], 4),
        f("div", {
          class: "chart-points no-spacing",
          style: m(D.value)
        }, [
          (l(!0), n(c, null, p(r(d), (e, s) => (l(), n(c, null, [
            r(x)[s] === "line" && (!r(L) || r(L).includes(s)) ? (l(!0), n(c, { key: 0 }, p(e, (o, i) => (l(), n("div", {
              class: y(["chart-point", { ...z(s), visible: w.value.includes(i) }]),
              style: m({ left: `${G(i)}%`, top: `${j(o, s)}%` })
            }, null, 6))), 256)) : b("", !0)
          ], 64))), 256))
        ], 4),
        f("div", Ye, [
          (l(!0), n(c, null, p(te.value, (e) => (l(), n("div", {
            class: "chart-hover-section no-spacing",
            onMouseover: (s) => be(e, !0),
            onMouseout: (s) => be(e, !1)
          }, null, 40, Je))), 256))
        ]),
        r(ve) ? b("", !0) : (l(), n("div", {
          key: 1,
          class: "x-axis-labels no-spacing",
          style: m(Ve.value)
        }, [
          (l(!0), n(c, null, p(te.value, (e, s) => (l(), n("div", {
            class: y(["x-axis-label-group-container no-spacing", { active: w.value.includes(e) }]),
            style: m({ left: `${G(e)}%` })
          }, [
            f("div", {
              class: "x-axis-label-group no-spacing",
              ref_for: !0,
              ref: (o) => ke(s, o),
              style: m({ transform: `rotate(-${M.value}deg) translateX(-${Math.trunc(9 * Math.pow(M.value, 0.4))}%) translateY(-${M.value > 70 ? 50 : 0}%)` })
            }, [
              Y(t.$slots, "xAxis", { valueKey: e }, () => [
                (l(!0), n(c, null, p(fe.value, (o) => (l(), n(c, null, [
                  !r(L) || r(L).includes(g.value[o - 1]) ? (l(), U(A, {
                    key: 0,
                    class: y(["x-axis-label no-spacing", { ...z(g.value[o - 1]), "has-label": s < ee.value[o - 1].length }]),
                    important: "",
                    size: "small"
                  }, {
                    default: k(() => [
                      Y(t.$slots, "xAxisLabel", {
                        index: s,
                        lineIndex: o - 1,
                        valueKey: e
                      }, void 0, !0)
                    ]),
                    _: 2
                  }, 1032, ["class"])) : b("", !0)
                ], 64))), 256))
              ], !0)
            ], 4)
          ], 6))), 256))
        ], 4))
      ], 512),
      r(S) && de.value ? (l(), n("div", Qe, [
        (l(!0), n(c, null, p(T.value[r(S)], (e) => (l(), U(A, { class: "axis-label" }, {
          default: k(() => [
            B(E(de.value(e)), 1)
          ]),
          _: 2
        }, 1024))), 256))
      ])) : b("", !0),
      q.value ? (l(), n("div", Ze, [
        ue(A, {
          class: "y-axis-title no-spacing",
          important: "",
          size: "small"
        }, {
          default: k(() => [
            B(E(q.value[1]), 1)
          ]),
          _: 1
        })
      ])) : b("", !0)
    ], 6));
  }
});
const ot = /* @__PURE__ */ $e(et, [["__scopeId", "data-v-d14ea85c"]]);
export {
  lt as L,
  ot as a
};
