import { A as me, L as ge } from "./Logo-d6af18ef.js";
import { defineComponent as C, toRefs as I, computed as p, openBlock as f, createBlock as L, normalizeClass as x, withCtx as a, createVNode as t, createTextVNode as g, toDisplayString as b, unref as i, createCommentVNode as q, createElementBlock as y, normalizeStyle as O, ref as P, watch as j, Fragment as z, renderList as D, renderSlot as F } from "vue";
import { C as T, A as v, I as A } from "./Icon-8f2ed8ba.js";
import { I as k } from "./Info-54758b60.js";
import { L as S } from "./LineBarChart-8bc1f7a1.js";
import { a as he } from "./LineBarChart-8bc1f7a1.js";
import { Separator as E } from "./marker.js";
import { f as N } from "./format-14736529.js";
import { _ as $ } from "./_plugin-vue_export-helper-dad06003.js";
import { B as R } from "./Badge-86839218.js";
import { L as G } from "./Link-3e37d26a.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "numeral";
import "vue-router";
const M = 0.01, H = (d, s) => {
  if (Math.abs(d) < M)
    return Math.abs(s) < M ? "equal" : "less-full";
  if (Math.abs(s) < M)
    return "greater-full";
  const e = (d - s) / s;
  return d > s ? { greater: e } : { less: e };
}, J = /* @__PURE__ */ C({
  __name: "ComparisonKpiCard",
  props: {
    comparisonValue: {},
    formatter: {},
    inversed: { type: Boolean, default: !1 },
    label: {},
    value: {}
  },
  setup(d) {
    const s = d, { comparisonValue: e, inversed: c, value: l } = I(s), m = p(
      () => l === void 0 || l.value === void 0 || e === void 0 || e.value === void 0
    ), n = p(() => m.value ? "equal" : H(l.value, e.value)), B = p(() => {
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
    return (o, r) => (f(), L(T, {
      class: x(["kpi-card", w.value])
    }, {
      default: a(() => [
        t(v, { column: "" }, {
          default: a(() => [
            t(v, { vertical: "center" }, {
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
            t(v, {
              class: "spacing-small",
              vertical: "center"
            }, {
              default: a(() => [
                t(A, {
                  mood: _.value,
                  value: B.value
                }, null, 8, ["mood", "value"]),
                t(k, { mood: _.value }, {
                  default: a(() => [
                    g(b(i(N).proportion(K.value)), 1)
                  ]),
                  _: 1
                }, 8, ["mood"]),
                t(E),
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
        i(l) === void 0 || i(e) === void 0 ? (f(), L(v, {
          key: 0,
          class: "loader-container no-spacing",
          horizontal: "center",
          vertical: "center"
        }, {
          default: a(() => [
            t(S)
          ]),
          _: 1
        })) : q("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const ie = /* @__PURE__ */ $(J, [["__scopeId", "data-v-2721093f"]]), de = /* @__PURE__ */ C({
  __name: "Dot",
  props: {
    mood: { default: () => ({ mood: "accent" }) }
  },
  setup(d) {
    const s = d, { mood: e } = I(s), c = p(() => {
      const l = {};
      return "mood" in e.value ? l[`mood-background-${e.value.mood}`] = !0 : "chart" in e.value && (l[`chart-${e.value.chart}`] = !0), l;
    });
    return (l, m) => (f(), y("div", {
      class: x(["dot", c.value])
    }, null, 2));
  }
});
const Q = /* @__PURE__ */ C({
  __name: "KpiCard",
  props: {
    formatter: { type: Function },
    icon: {},
    label: {},
    mood: {},
    value: {}
  },
  setup(d) {
    const s = d, { value: e } = I(s), c = p(() => ({
      loading: e === void 0 || e.value === void 0
    }));
    return (l, m) => (f(), L(T, {
      class: x(["kpi-card", c.value])
    }, {
      default: a(() => [
        t(v, { vertical: "center" }, {
          default: a(() => [
            t(v, {
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
        i(e) === void 0 ? (f(), L(v, {
          key: 0,
          class: "loader-container no-spacing",
          horizontal: "center",
          vertical: "center"
        }, {
          default: a(() => [
            t(S)
          ]),
          _: 1
        })) : q("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const fe = /* @__PURE__ */ $(Q, [["__scopeId", "data-v-e84b3f2e"]]), U = /* @__PURE__ */ C({
  __name: "ProgressBar",
  props: {
    mood: {},
    value: {},
    size: { default: "large" }
  },
  setup(d) {
    const s = d, { value: e, size: c } = I(s), l = p(() => ({
      "--width": `${e.value * 100}%`,
      "--height": c.value === "large" ? "30px" : "auto"
    }));
    return (m, n) => (f(), y("div", {
      class: x(["progress-bar", [`mood-background-${m.mood}`]]),
      style: O(l.value)
    }, null, 6));
  }
});
const W = /* @__PURE__ */ $(U, [["__scopeId", "data-v-ac82b9ec"]]), X = /* @__PURE__ */ C({
  __name: "KpiDistributionTable",
  props: {
    dimensionLabel: {},
    metrics: {},
    rows: {}
  },
  setup(d) {
    const s = d, { metrics: e, rows: c } = I(s), l = p(() => {
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
    }, n = P(m(!0));
    setTimeout(() => {
      n.value = m();
    }, 10), j(e, () => {
      n.value = m();
    }), j(c, () => {
      n.value = m();
    });
    const B = p(
      () => Object.values(e.value).map((_) => {
        switch (_.align) {
          case "left":
            return "min-content 1fr";
          case "center":
          default:
            return "max-content 1fr";
        }
      }).join(" ")
    ), K = p(() => ({
      "--alignment": `max-content ${B.value}`
    }));
    return (_, w) => (f(), y("div", {
      class: "kpi-distribution-table",
      style: O(K.value)
    }, [
      t(v, {
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
      (f(!0), y(z, null, D(i(e), (o, r) => (f(), y(z, null, [
        t(v, {
          class: "cell header-cell",
          horizontal: "center",
          vertical: "center"
        }),
        t(v, {
          class: x(["cell header-cell", { "row-last": r === l.value }]),
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
      (f(!0), y(z, null, D(i(c), (o, r) => (f(), y(z, null, [
        t(v, {
          class: "cell row-first",
          vertical: "center"
        }, {
          default: a(() => [
            F(_.$slots, "cell(dimension)", {
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
        (f(!0), y(z, null, D(i(e), (u, h) => (f(), y(z, null, [
          t(v, {
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
          t(v, {
            class: x(["cell", { "row-last": h === l.value }]),
            horizontal: "left",
            vertical: "center"
          }, {
            default: a(() => [
              t(W, {
                mood: u.mood,
                value: n.value[r][h]
              }, null, 8, ["mood", "value"]),
              t(R, {
                mood: u.mood,
                outline: ""
              }, {
                default: a(() => [
                  g(b(i(N).proportion(n.value[r][h])), 1)
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
const ve = /* @__PURE__ */ $(X, [["__scopeId", "data-v-f6abc468"]]);
export {
  me as Avatar,
  ie as ComparisonKpiCard,
  de as Dot,
  A as Icon,
  fe as KpiCard,
  ve as KpiDistributionTable,
  he as LineBarChart,
  S as Loader,
  ge as Logo,
  W as ProgressBar
};
