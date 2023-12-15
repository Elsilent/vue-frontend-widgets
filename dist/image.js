import { A as fe, L as _e } from "./Logo-d60ece81.js";
import { defineComponent as C, toRefs as I, computed as p, openBlock as v, createBlock as $, normalizeClass as x, withCtx as a, createVNode as t, createTextVNode as m, toDisplayString as g, unref as i, createCommentVNode as q, createElementBlock as w, normalizeStyle as O, ref as P, watch as j, Fragment as z, renderList as D, renderSlot as F } from "vue";
import { C as T, A as f, I as A } from "./Icon-8f2ed8ba.js";
import { I as b } from "./Info-54758b60.js";
import { L as S } from "./LineBarChart-96b2a178.js";
import { a as me } from "./LineBarChart-96b2a178.js";
import { Separator as E } from "./marker.js";
import { f as N } from "./format-14736529.js";
import { _ as B } from "./_plugin-vue_export-helper-dad06003.js";
import { B as R } from "./Badge-7bef385f.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "numeral";
const M = 0.01, G = (d, s) => {
  if (Math.abs(d) < M)
    return Math.abs(s) < M ? "equal" : "less-full";
  if (Math.abs(s) < M)
    return "greater-full";
  const e = (d - s) / s;
  return d > s ? { greater: e } : { less: e };
}, H = /* @__PURE__ */ C({
  __name: "ComparisonKpiCard",
  props: {
    comparisonValue: {},
    formatter: {},
    inversed: { type: Boolean, default: !1 },
    label: {},
    value: {}
  },
  setup(d) {
    const s = d, { comparisonValue: e, inversed: u, value: l } = I(s), h = p(
      () => l === void 0 || l.value === void 0 || e === void 0 || e.value === void 0
    ), c = p(() => h.value ? "equal" : G(l.value, e.value)), K = p(() => {
      const o = "minus", r = "up-arrow-alt", n = "down-arrow-alt";
      switch (c.value) {
        case "equal":
          return o;
        case "greater-full":
          return r;
        case "less-full":
          return n;
      }
      return "less" in c.value ? n : r;
    }), L = p(() => {
      switch (c.value) {
        case "equal":
          return 0;
        case "greater-full":
          return 1;
        case "less-full":
          return -1;
      }
      return "less" in c.value ? c.value.less : c.value.greater;
    }), _ = p(() => {
      const o = "neutral", r = u.value ? "important" : "positive", n = u.value ? "positive" : "important";
      switch (c.value) {
        case "equal":
          return o;
        case "greater-full":
          return r;
        case "less-full":
          return n;
      }
      return "less" in c.value ? n : r;
    }), k = p(() => ({
      loading: h.value
    }));
    return (o, r) => (v(), $(T, {
      class: x(["kpi-card", k.value])
    }, {
      default: a(() => [
        t(f, { column: "" }, {
          default: a(() => [
            t(f, { vertical: "center" }, {
              default: a(() => [
                t(b, {
                  class: "flex-max",
                  size: "large-3"
                }, {
                  default: a(() => [
                    m(g(o.label), 1)
                  ]),
                  _: 1
                }),
                t(b, {
                  important: "",
                  size: "large-3"
                }, {
                  default: a(() => [
                    m(g(i(l) === void 0 ? " " : o.formatter(i(l))), 1)
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
                  value: K.value
                }, null, 8, ["mood", "value"]),
                t(b, { mood: _.value }, {
                  default: a(() => [
                    m(g(i(N).proportion(L.value)), 1)
                  ]),
                  _: 1
                }, 8, ["mood"]),
                t(E),
                t(b, null, {
                  default: a(() => [
                    m(g(i(e) === void 0 ? " " : o.formatter(i(e))), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        i(l) === void 0 || i(e) === void 0 ? (v(), $(f, {
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
const ne = /* @__PURE__ */ B(H, [["__scopeId", "data-v-2721093f"]]), ue = /* @__PURE__ */ C({
  __name: "Dot",
  props: {
    mood: { default: () => ({ mood: "accent" }) }
  },
  setup(d) {
    const s = d, { mood: e } = I(s), u = p(() => {
      const l = {};
      return "mood" in e.value ? l[`mood-background-${e.value}`] = !0 : "chart" in e.value && (l[`chart-${e.value.chart}`] = !0), l;
    });
    return (l, h) => (v(), w("div", {
      class: x(["dot", u.value])
    }, null, 2));
  }
});
const J = /* @__PURE__ */ C({
  __name: "KpiCard",
  props: {
    formatter: { type: Function },
    icon: {},
    label: {},
    mood: {},
    value: {}
  },
  setup(d) {
    const s = d, { value: e } = I(s), u = p(() => ({
      loading: e === void 0 || e.value === void 0
    }));
    return (l, h) => (v(), $(T, {
      class: x(["kpi-card", u.value])
    }, {
      default: a(() => [
        t(f, { vertical: "center" }, {
          default: a(() => [
            t(f, {
              class: "flex-max",
              column: ""
            }, {
              default: a(() => [
                t(b, null, {
                  default: a(() => [
                    m(g(l.label), 1)
                  ]),
                  _: 1
                }),
                t(b, {
                  mood: l.mood,
                  size: "large-3"
                }, {
                  default: a(() => [
                    m(g(i(e) === void 0 ? " " : l.formatter(i(e))), 1)
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
        i(e) === void 0 ? (v(), $(f, {
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
const ce = /* @__PURE__ */ B(J, [["__scopeId", "data-v-e84b3f2e"]]), Q = /* @__PURE__ */ C({
  __name: "ProgressBar",
  props: {
    mood: {},
    value: {}
  },
  setup(d) {
    const s = d, { value: e } = I(s), u = p(() => ({
      "--width": `${e.value * 100}%`
    }));
    return (l, h) => (v(), w("div", {
      class: x(["progress-bar", [`mood-background-${l.mood}`]]),
      style: O(u.value)
    }, null, 6));
  }
});
const U = /* @__PURE__ */ B(Q, [["__scopeId", "data-v-01158dc3"]]), W = /* @__PURE__ */ C({
  __name: "KpiDistributionTable",
  props: {
    dimensionLabel: {},
    metrics: {},
    rows: {}
  },
  setup(d) {
    const s = d, { metrics: e, rows: u } = I(s), l = p(() => {
      const _ = Object.keys(e.value);
      return _[_.length - 1];
    }), h = (_ = !1) => {
      const k = {};
      for (const o of Object.values(u.value))
        for (const [r, n] of Object.entries(o))
          r in k || (k[r] = 0), _ || (k[r] += n);
      return Object.keys(u.value).reduce((o, r) => (o[r] = Object.keys(e.value).reduce(
        (n, y) => (n[y] = k[y] === 0 ? 0 : u.value[r][y] / k[y], n),
        {}
      ), o), {});
    }, c = P(h(!0));
    setTimeout(() => {
      c.value = h();
    }, 10), j(e, () => {
      c.value = h();
    }), j(u, () => {
      c.value = h();
    });
    const K = p(() => Object.values(e.value).map((_) => {
      switch (_.align) {
        case "left":
          return "min-content 1fr";
        case "center":
        default:
          return "max-content 1fr";
      }
    }).join(" ")), L = p(() => ({
      "--alignment": `max-content ${K.value}`
    }));
    return (_, k) => (v(), w("div", {
      class: "kpi-distribution-table",
      style: O(L.value)
    }, [
      t(f, {
        class: "cell header-cell row-first",
        vertical: "center"
      }, {
        default: a(() => [
          t(b, null, {
            default: a(() => [
              m(g(_.dimensionLabel), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      (v(!0), w(z, null, D(i(e), (o, r) => (v(), w(z, null, [
        t(f, {
          class: "cell header-cell",
          horizontal: "center",
          vertical: "center"
        }, {
          default: a(() => [
            t(b, null, {
              default: a(() => [
                m(g(o.label), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024),
        t(f, {
          class: x(["cell header-cell", { "row-last": r === l.value }]),
          horizontal: "center",
          vertical: "center"
        }, {
          default: a(() => [
            t(b, null, {
              default: a(() => [
                m(g(o.label) + " (%)", 1)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["class"])
      ], 64))), 256)),
      (v(!0), w(z, null, D(i(u), (o, r) => (v(), w(z, null, [
        t(f, {
          class: "cell row-first",
          vertical: "center"
        }, {
          default: a(() => [
            F(_.$slots, "cell(dimension)", { value: r }, () => [
              t(b, null, {
                default: a(() => [
                  m(g(r), 1)
                ]),
                _: 2
              }, 1024)
            ], !0)
          ]),
          _: 2
        }, 1024),
        (v(!0), w(z, null, D(i(e), (n, y) => (v(), w(z, null, [
          t(f, {
            class: "cell",
            horizontal: n.align ?? "center",
            vertical: "center"
          }, {
            default: a(() => [
              t(b, null, {
                default: a(() => [
                  m(g(n.formatter(o[y])), 1)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["horizontal"]),
          t(f, {
            class: x(["cell", { "row-last": y === l.value }]),
            horizontal: "center",
            vertical: "center"
          }, {
            default: a(() => [
              t(U, {
                mood: n.mood,
                value: c.value[r][y]
              }, null, 8, ["mood", "value"]),
              t(R, {
                mood: n.mood,
                outline: ""
              }, {
                default: a(() => [
                  m(g(i(N).proportion(c.value[r][y])), 1)
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
const ie = /* @__PURE__ */ B(W, [["__scopeId", "data-v-08dca286"]]);
export {
  fe as Avatar,
  ne as ComparisonKpiCard,
  ue as Dot,
  A as Icon,
  ce as KpiCard,
  ie as KpiDistributionTable,
  me as LineBarChart,
  S as Loader,
  _e as Logo,
  U as ProgressBar
};
