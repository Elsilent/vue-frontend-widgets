import { A as me } from "./Avatar-681f3a53.js";
import { defineComponent as x, toRefs as B, computed as p, openBlock as v, createBlock as I, normalizeClass as $, withCtx as a, createVNode as t, createTextVNode as g, toDisplayString as b, unref as i, createCommentVNode as q, createElementBlock as y, normalizeStyle as S, ref as N, watch as j, Fragment as z, renderList as L, renderSlot as E } from "vue";
import { C as T, A as f, I as A } from "./Icon-1e0f2d3b.js";
import { I as k } from "./Info-1836ec0c.js";
import { L as P } from "./LineBarChart-00a63364.js";
import { a as be } from "./LineBarChart-00a63364.js";
import { Separator as F } from "./marker.js";
import { f as R } from "./format-d2aab685.js";
import { _ as C } from "./_plugin-vue_export-helper-dad06003.js";
import { B as W } from "./Badge-ed00f7df.js";
import { L as G } from "./Link-194344f3.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "numeral";
const M = 0.01, H = (d, s) => {
  if (Math.abs(d) < M)
    return Math.abs(s) < M ? "equal" : "less-full";
  if (Math.abs(s) < M)
    return "greater-full";
  const e = (d - s) / s;
  return d > s ? { greater: e } : { less: e };
}, J = /* @__PURE__ */ x({
  __name: "ComparisonKpiCard",
  props: {
    comparisonValue: {},
    formatter: {},
    inversed: { type: Boolean, default: !1 },
    label: {},
    value: {}
  },
  setup(d) {
    const s = d, { comparisonValue: e, inversed: c, value: l } = B(s), m = p(
      () => l === void 0 || l.value === void 0 || e === void 0 || e.value === void 0
    ), n = p(() => m.value ? "equal" : H(l.value, e.value)), D = p(() => {
      const o = "minus", r = "up-arrow-alt", u = "down-arrow-alt";
      switch (n.value) {
        case "equal":
          return o;
        case "greater-full":
          return r;
        case "less-full":
          return u;
      }
      return "less" in n.value ? u : r;
    }), K = p(() => {
      switch (n.value) {
        case "equal":
          return 0;
        case "greater-full":
          return 1;
        case "less-full":
          return -1;
      }
      return "less" in n.value ? n.value.less : n.value.greater;
    }), _ = p(() => {
      const o = "neutral", r = c.value ? "important" : "positive", u = c.value ? "positive" : "important";
      switch (n.value) {
        case "equal":
          return o;
        case "greater-full":
          return r;
        case "less-full":
          return u;
      }
      return "less" in n.value ? u : r;
    }), w = p(() => ({
      loading: m.value
    }));
    return (o, r) => (v(), I(T, {
      class: $(["kpi-card", w.value])
    }, {
      default: a(() => [
        t(f, { column: "" }, {
          default: a(() => [
            t(f, { vertical: "center" }, {
              default: a(() => [
                t(k, {
                  class: "flex-max",
                  size: "large-3"
                }, {
                  default: a(() => [
                    g(b(o.label), 1)
                  ]),
                  _: 1
                }),
                t(k, {
                  important: "",
                  size: "large-3"
                }, {
                  default: a(() => [
                    g(b(i(l) === void 0 ? " " : o.formatter(i(l))), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            t(f, {
              class: "spacing-small",
              vertical: "center"
            }, {
              default: a(() => [
                t(A, {
                  mood: _.value,
                  value: D.value
                }, null, 8, ["mood", "value"]),
                t(k, { mood: _.value }, {
                  default: a(() => [
                    g(b(i(R).proportion(K.value)), 1)
                  ]),
                  _: 1
                }, 8, ["mood"]),
                t(F),
                t(k, null, {
                  default: a(() => [
                    g(b(i(e) === void 0 ? " " : o.formatter(i(e))), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        i(l) === void 0 || i(e) === void 0 ? (v(), I(f, {
          key: 0,
          class: "loader-container no-spacing",
          horizontal: "center",
          vertical: "center"
        }, {
          default: a(() => [
            t(P)
          ]),
          _: 1
        })) : q("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const ie = /* @__PURE__ */ C(J, [["__scopeId", "data-v-2721093f"]]), de = /* @__PURE__ */ x({
  __name: "Dot",
  props: {
    mood: { default: () => ({ mood: "accent" }) }
  },
  setup(d) {
    const s = d, { mood: e } = B(s), c = p(() => {
      const l = {};
      return "mood" in e.value ? l[`mood-background-${e.value.mood}`] = !0 : "chart" in e.value && (l[`chart-${e.value.chart}`] = !0), l;
    });
    return (l, m) => (v(), y("div", {
      class: $(["dot", c.value])
    }, null, 2));
  }
});
const Q = /* @__PURE__ */ x({
  __name: "KpiCard",
  props: {
    formatter: { type: Function },
    icon: {},
    label: {},
    mood: {},
    value: {}
  },
  setup(d) {
    const s = d, { value: e } = B(s), c = p(() => ({
      loading: e === void 0 || e.value === void 0
    }));
    return (l, m) => (v(), I(T, {
      class: $(["kpi-card", c.value])
    }, {
      default: a(() => [
        t(f, { vertical: "center" }, {
          default: a(() => [
            t(f, {
              class: "flex-max",
              column: ""
            }, {
              default: a(() => [
                t(k, null, {
                  default: a(() => [
                    g(b(l.label), 1)
                  ]),
                  _: 1
                }),
                t(k, {
                  mood: l.mood,
                  size: "large-3"
                }, {
                  default: a(() => [
                    g(b(i(e) === void 0 ? " " : l.formatter(i(e))), 1)
                  ]),
                  _: 1
                }, 8, ["mood"])
              ]),
              _: 1
            }),
            t(A, {
              mood: l.mood,
              value: l.icon,
              size: "large-6"
            }, null, 8, ["mood", "value"])
          ]),
          _: 1
        }),
        i(e) === void 0 ? (v(), I(f, {
          key: 0,
          class: "loader-container no-spacing",
          horizontal: "center",
          vertical: "center"
        }, {
          default: a(() => [
            t(P)
          ]),
          _: 1
        })) : q("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const ve = /* @__PURE__ */ C(Q, [["__scopeId", "data-v-e84b3f2e"]]), U = /* @__PURE__ */ x({
  __name: "ProgressBar",
  props: {
    mood: {},
    value: {},
    size: { default: "large" }
  },
  setup(d) {
    const s = d, { value: e, size: c } = B(s), l = p(() => ({
      "--width": `${e.value * 100}%`,
      "--height": c.value === "large" ? "30px" : "auto"
    }));
    return (m, n) => (v(), y("div", {
      class: $(["progress-bar", [`mood-background-${m.mood}`]]),
      style: S(l.value)
    }, null, 6));
  }
});
const X = /* @__PURE__ */ C(U, [["__scopeId", "data-v-ac82b9ec"]]), O = "140px", Y = /* @__PURE__ */ x({
  __name: "KpiDistributionTable",
  props: {
    dimensionLabel: {},
    metrics: {},
    rows: {}
  },
  setup(d) {
    const s = d, { metrics: e, rows: c } = B(s), l = p(() => {
      const _ = Object.keys(e.value);
      return _[_.length - 1];
    }), m = (_ = !1) => {
      const w = {};
      for (const o of Object.values(c.value))
        for (const [r, u] of Object.entries(o))
          r in w || (w[r] = 0), _ || (w[r] += +u);
      return Object.keys(c.value).reduce((o, r) => (o[r] = Object.keys(e.value).reduce(
        (u, h) => (u[h] = w[h] === 0 ? 0 : c.value[r][h] / w[h], u),
        {}
      ), o), {});
    }, n = N(m(!0));
    setTimeout(() => {
      n.value = m();
    }, 10), j(e, () => {
      n.value = m();
    }), j(c, () => {
      n.value = m();
    });
    const D = p(
      () => Object.values(e.value).map((_) => {
        switch (_.align) {
          case "left":
            return `1fr ${O}`;
          case "center":
          default:
            return `1fr ${O}`;
        }
      }).join(" ")
    ), K = p(() => ({
      "--alignment": `max-content ${D.value}`,
      "--progressBarWidth": O
    }));
    return (_, w) => (v(), y("div", {
      class: "kpi-distribution-table",
      style: S(K.value)
    }, [
      t(f, {
        class: "cell header-cell row-first",
        vertical: "center"
      }, {
        default: a(() => [
          t(k, null, {
            default: a(() => [
              g(b(_.dimensionLabel), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      (v(!0), y(z, null, L(i(e), (o, r) => (v(), y(z, null, [
        t(f, {
          class: "cell header-cell",
          horizontal: "center",
          vertical: "center"
        }),
        t(f, {
          class: $(["cell header-cell metric", { "row-last": r === l.value }]),
          horizontal: "left",
          vertical: "center"
        }, {
          default: a(() => [
            t(k, null, {
              default: a(() => [
                g(b(o.label), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["class"])
      ], 64))), 256)),
      (v(!0), y(z, null, L(i(c), (o, r) => (v(), y(z, null, [
        t(f, {
          class: "cell row-first",
          vertical: "center"
        }, {
          default: a(() => [
            E(_.$slots, "cell(dimension)", {
              value: { name: r, link: o.link }
            }, () => [
              t(G, {
                to: o.link
              }, {
                default: a(() => [
                  g(b(r), 1)
                ]),
                _: 2
              }, 1032, ["to"])
            ], !0)
          ]),
          _: 2
        }, 1024),
        (v(!0), y(z, null, L(i(e), (u, h) => (v(), y(z, null, [
          t(f, {
            class: "cell",
            horizontal: u.align ?? "center",
            vertical: "center"
          }, {
            default: a(() => [
              t(k, null, {
                default: a(() => [
                  g(b(u.formatter(o[h])), 1)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["horizontal"]),
          t(f, {
            class: $(["cell metric", { "row-last": h === l.value }]),
            column: !0,
            horizontal: "center",
            vertical: "center"
          }, {
            default: a(() => [
              t(X, {
                mood: u.mood,
                value: n.value[r][h]
              }, null, 8, ["mood", "value"]),
              t(W, {
                mood: u.mood,
                outline: ""
              }, {
                default: a(() => [
                  g(b(i(R).proportion(n.value[r][h])), 1)
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
const fe = /* @__PURE__ */ C(Y, [["__scopeId", "data-v-707c5df7"]]);
export {
  me as Avatar,
  ie as ComparisonKpiCard,
  de as Dot,
  A as Icon,
  ve as KpiCard,
  fe as KpiDistributionTable,
  be as LineBarChart,
  P as Loader,
  X as ProgressBar
};
