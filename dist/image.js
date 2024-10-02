import { A as ke } from "./Avatar-1ceb631f.js";
import { defineComponent as C, toRefs as D, computed as g, openBlock as n, createBlock as w, normalizeClass as $, withCtx as l, createVNode as t, createTextVNode as p, toDisplayString as m, unref as u, createCommentVNode as I, createElementBlock as y, renderSlot as A, normalizeStyle as F, ref as N, watch as T, Fragment as B, renderList as M } from "vue";
import { C as x, A as v, I as S } from "./Icon-53e685d0.js";
import { I as h } from "./Info-38a17291.js";
import { L as P } from "./LineBarChart-dfc669d6.js";
import { a as ze } from "./LineBarChart-dfc669d6.js";
import { Separator as E } from "./marker.js";
import { f as R } from "./format-d2aab685.js";
import { _ as K } from "./_plugin-vue_export-helper-dad06003.js";
import { _ as V } from "./Tooltip.vue_vue_type_style_index_0_lang-f467a343.js";
import { B as W } from "./Badge-17fbe620.js";
import { L as G } from "./Link-882cf82b.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "numeral";
import "./base-d7e543b4.js";
import "./popper-6624aaae.js";
const O = 0.01, H = (f, c) => {
  if (Math.abs(f) < O)
    return Math.abs(c) < O ? "equal" : "less-full";
  if (Math.abs(c) < O)
    return "greater-full";
  const e = (f - c) / c;
  return f > c ? { greater: e } : { less: e };
}, J = /* @__PURE__ */ C({
  __name: "ComparisonKpiCard",
  props: {
    comparisonValue: {},
    formatter: {},
    inversed: { type: Boolean, default: !1 },
    label: {},
    value: {}
  },
  setup(f) {
    const c = f, { comparisonValue: e, inversed: d, value: a } = D(c), b = g(
      () => a === void 0 || a.value === void 0 || e === void 0 || e.value === void 0
    ), o = g(() => b.value ? "equal" : H(a.value, e.value)), L = g(() => {
      const s = "minus", r = "arrow-up", i = "arrow-down";
      switch (o.value) {
        case "equal":
          return s;
        case "greater-full":
          return r;
        case "less-full":
          return i;
      }
      return "less" in o.value ? i : r;
    }), q = g(() => {
      switch (o.value) {
        case "equal":
          return 0;
        case "greater-full":
          return 1;
        case "less-full":
          return -1;
      }
      return "less" in o.value ? o.value.less : o.value.greater;
    }), _ = g(() => {
      const s = "neutral", r = d.value ? "important" : "positive", i = d.value ? "positive" : "important";
      switch (o.value) {
        case "equal":
          return s;
        case "greater-full":
          return r;
        case "less-full":
          return i;
      }
      return "less" in o.value ? i : r;
    }), z = g(() => ({
      loading: b.value
    }));
    return (s, r) => (n(), w(x, {
      class: $(["kpi-card", z.value])
    }, {
      default: l(() => [
        t(v, { column: "" }, {
          default: l(() => [
            t(v, { vertical: "center" }, {
              default: l(() => [
                t(h, {
                  class: "flex-max",
                  size: "large-3"
                }, {
                  default: l(() => [
                    p(m(s.label), 1)
                  ]),
                  _: 1
                }),
                t(h, {
                  important: "",
                  size: "large-3"
                }, {
                  default: l(() => [
                    p(m(u(a) === void 0 ? " " : s.formatter(u(a))), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            t(v, {
              class: "spacing-small",
              vertical: "center"
            }, {
              default: l(() => [
                t(S, {
                  mood: _.value,
                  value: L.value,
                  size: "small"
                }, null, 8, ["mood", "value"]),
                t(h, { mood: _.value }, {
                  default: l(() => [
                    p(m(u(R).proportion(q.value)), 1)
                  ]),
                  _: 1
                }, 8, ["mood"]),
                t(E),
                t(h, null, {
                  default: l(() => [
                    p(m(u(e) === void 0 ? " " : s.formatter(u(e))), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        u(a) === void 0 || u(e) === void 0 ? (n(), w(v, {
          key: 0,
          class: "loader-container no-spacing",
          horizontal: "center",
          vertical: "center"
        }, {
          default: l(() => [
            t(P)
          ]),
          _: 1
        })) : I("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const pe = /* @__PURE__ */ K(J, [["__scopeId", "data-v-78f79f36"]]), me = /* @__PURE__ */ C({
  __name: "Dot",
  props: {
    mood: { default: () => ({ mood: "accent" }) }
  },
  setup(f) {
    const c = f, { mood: e } = D(c), d = g(() => {
      const a = {};
      return "mood" in e.value ? a[`mood-background-${e.value.mood}`] = !0 : "chart" in e.value && (a[`chart-${e.value.chart}`] = !0), a;
    });
    return (a, b) => (n(), y("div", {
      class: $(["dot", d.value])
    }, null, 2));
  }
});
const Q = /* @__PURE__ */ C({
  __name: "KpiCard",
  props: {
    formatter: { type: Function },
    icon: {},
    iconBackend: {},
    label: {},
    mood: {},
    value: {},
    isValueFirst: { type: Boolean },
    tooltip: {}
  },
  setup(f) {
    const c = f, { value: e } = D(c), d = g(() => ({
      loading: e === void 0 || e.value === void 0
    }));
    return (a, b) => (n(), w(x, {
      class: $(["kpi-card", d.value])
    }, {
      default: l(() => [
        t(v, { vertical: "center" }, {
          default: l(() => [
            t(v, {
              class: "flex-max",
              column: ""
            }, {
              default: l(() => [
                a.isValueFirst ? (n(), w(h, {
                  key: 0,
                  mood: a.mood,
                  size: "large-5"
                }, {
                  default: l(() => [
                    p(m(u(e) === void 0 ? " " : a.formatter(u(e))), 1)
                  ]),
                  _: 1
                }, 8, ["mood"])) : I("", !0),
                t(h, { size: "large-2" }, {
                  default: l(() => {
                    var o;
                    return [
                      p(m(a.label), 1),
                      (o = a.tooltip) != null && o.length ? (n(), w(V, { key: 0 }, {
                        reference: l(() => [
                          t(S, {
                            class: "kpi-tooltip",
                            value: "circle-question",
                            backend: "regular"
                          })
                        ]),
                        default: l(() => [
                          p(m(a.tooltip), 1)
                        ]),
                        _: 1
                      })) : I("", !0)
                    ];
                  }),
                  _: 1
                }),
                a.isValueFirst ? I("", !0) : (n(), w(h, {
                  key: 1,
                  mood: a.mood,
                  size: "large-5"
                }, {
                  default: l(() => [
                    p(m(u(e) === void 0 ? " " : a.formatter(u(e))), 1)
                  ]),
                  _: 1
                }, 8, ["mood"]))
              ]),
              _: 1
            }),
            t(S, {
              class: "kpi-icon no-spacing",
              mood: a.mood,
              value: a.icon,
              size: "large-6",
              backend: a.iconBackend || "solid"
            }, null, 8, ["mood", "value", "backend"])
          ]),
          _: 1
        }),
        A(a.$slots, "default", {}, void 0, !0),
        u(e) === void 0 ? (n(), w(v, {
          key: 0,
          class: "loader-container no-spacing",
          horizontal: "center",
          vertical: "center"
        }, {
          default: l(() => [
            t(P)
          ]),
          _: 1
        })) : I("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
const _e = /* @__PURE__ */ K(Q, [["__scopeId", "data-v-d6f42250"]]), U = /* @__PURE__ */ C({
  __name: "ProgressBar",
  props: {
    mood: {},
    value: {},
    size: { default: "large" }
  },
  setup(f) {
    const c = f, { value: e, size: d } = D(c), a = g(() => ({
      "--width": `${e.value * 100}%`,
      "--height": d.value === "large" ? "30px" : "auto"
    }));
    return (b, o) => (n(), y("div", {
      class: $(["progress-bar", [`mood-background-${b.mood}`]]),
      style: F(a.value)
    }, null, 6));
  }
});
const X = /* @__PURE__ */ K(U, [["__scopeId", "data-v-ac82b9ec"]]), j = "140px", Y = /* @__PURE__ */ C({
  __name: "KpiDistributionTable",
  props: {
    dimensionLabel: {},
    metrics: {},
    rows: {}
  },
  setup(f) {
    const c = f, { metrics: e, rows: d } = D(c), a = g(() => {
      const _ = Object.keys(e.value);
      return _[_.length - 1];
    }), b = (_ = !1) => {
      const z = {};
      for (const s of Object.values(d.value))
        for (const [r, i] of Object.entries(s))
          r in z || (z[r] = 0), _ || (z[r] += +i);
      return Object.keys(d.value).reduce((s, r) => (s[r] = Object.keys(e.value).reduce(
        (i, k) => (i[k] = z[k] === 0 ? 0 : d.value[r][k] / z[k], i),
        {}
      ), s), {});
    }, o = N(b(!0));
    setTimeout(() => {
      o.value = b();
    }, 10), T(e, () => {
      o.value = b();
    }), T(d, () => {
      o.value = b();
    });
    const L = g(
      () => Object.values(e.value).map((_) => {
        switch (_.align) {
          case "left":
            return `1fr ${j}`;
          case "center":
          default:
            return `1fr ${j}`;
        }
      }).join(" ")
    ), q = g(() => ({
      "--alignment": `max-content ${L.value}`,
      "--progressBarWidth": j
    }));
    return (_, z) => (n(), y("div", {
      class: "kpi-distribution-table",
      style: F(q.value)
    }, [
      t(v, {
        class: "cell header-cell row-first",
        vertical: "center"
      }, {
        default: l(() => [
          t(h, null, {
            default: l(() => [
              p(m(_.dimensionLabel), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      (n(!0), y(B, null, M(u(e), (s, r) => (n(), y(B, null, [
        t(v, {
          class: "cell header-cell",
          horizontal: "center",
          vertical: "center"
        }),
        t(v, {
          class: $(["cell header-cell metric", { "row-last": r === a.value }]),
          horizontal: "left",
          vertical: "center"
        }, {
          default: l(() => [
            t(h, null, {
              default: l(() => [
                p(m(s.label), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["class"])
      ], 64))), 256)),
      (n(!0), y(B, null, M(u(d), (s, r) => (n(), y(B, null, [
        t(v, {
          class: "cell row-first",
          vertical: "center"
        }, {
          default: l(() => [
            A(_.$slots, "cell(dimension)", {
              value: { name: r, link: s.link }
            }, () => [
              t(G, {
                to: s.link
              }, {
                default: l(() => [
                  p(m(r), 1)
                ]),
                _: 2
              }, 1032, ["to"])
            ], !0)
          ]),
          _: 2
        }, 1024),
        (n(!0), y(B, null, M(u(e), (i, k) => (n(), y(B, null, [
          t(v, {
            class: "cell",
            horizontal: i.align ?? "center",
            vertical: "center"
          }, {
            default: l(() => [
              t(h, null, {
                default: l(() => [
                  p(m(i.formatter(s[k])), 1)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["horizontal"]),
          t(v, {
            class: $(["cell metric", { "row-last": k === a.value }]),
            column: !0,
            horizontal: "center",
            vertical: "center"
          }, {
            default: l(() => [
              t(X, {
                mood: i.mood,
                value: o.value[r][k]
              }, null, 8, ["mood", "value"]),
              t(W, {
                mood: i.mood,
                outline: ""
              }, {
                default: l(() => [
                  p(m(u(R).proportion(o.value[r][k])), 1)
                ]),
                _: 2
              }, 1032, ["mood"])
            ]),
            _: 2
          }, 1032, ["class"])
        ], 64))), 256))
      ], 64))), 256))
    ], 4));
  }
});
const ge = /* @__PURE__ */ K(Y, [["__scopeId", "data-v-707c5df7"]]);
export {
  ke as Avatar,
  pe as ComparisonKpiCard,
  me as Dot,
  S as Icon,
  _e as KpiCard,
  ge as KpiDistributionTable,
  ze as LineBarChart,
  P as Loader,
  X as ProgressBar
};
