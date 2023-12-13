import { A as fe, L as _e } from "./Logo-d60ece81.js";
import { defineComponent as C, toRefs as I, computed as p, openBlock as v, createBlock as B, normalizeClass as x, withCtx as t, createVNode as e, createTextVNode as m, toDisplayString as g, unref as i, createCommentVNode as q, createElementBlock as w, normalizeStyle as O, ref as P, watch as j, Fragment as z, renderList as D, renderSlot as F } from "vue";
import { C as T, A as f, I as A } from "./Icon-8f2ed8ba.js";
import { I as b } from "./Info-54758b60.js";
import { L as S } from "./LineBarChart-02e03964.js";
import { a as me } from "./LineBarChart-02e03964.js";
import { Separator as E } from "./marker.js";
import { f as N } from "./format-14736529.js";
import { _ as $ } from "./_plugin-vue_export-helper-dad06003.js";
import { B as R } from "./Badge-7bef385f.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "numeral";
const M = 0.01, G = (d, s) => {
  if (Math.abs(d) < M)
    return Math.abs(s) < M ? "equal" : "less-full";
  if (Math.abs(s) < M)
    return "greater-full";
  const a = (d - s) / s;
  return d > s ? { greater: a } : { less: a };
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
    const s = d, { comparisonValue: a, inversed: u, value: r } = I(s), h = p(
      () => r === void 0 || r.value === void 0 || a === void 0 || a.value === void 0
    ), c = p(() => h.value ? "equal" : G(r.value, a.value)), K = p(() => {
      const o = "minus", l = "up-arrow-alt", n = "down-arrow-alt";
      switch (c.value) {
        case "equal":
          return o;
        case "greater-full":
          return l;
        case "less-full":
          return n;
      }
      return "less" in c.value ? n : l;
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
      const o = "neutral", l = u.value ? "important" : "positive", n = u.value ? "positive" : "important";
      switch (c.value) {
        case "equal":
          return o;
        case "greater-full":
          return l;
        case "less-full":
          return n;
      }
      return "less" in c.value ? n : l;
    }), k = p(() => ({
      loading: h.value
    }));
    return (o, l) => (v(), B(T, {
      class: x(["kpi-card", k.value])
    }, {
      default: t(() => [
        e(f, { column: "" }, {
          default: t(() => [
            e(f, { vertical: "center" }, {
              default: t(() => [
                e(b, {
                  class: "flex-max",
                  size: "large-3"
                }, {
                  default: t(() => [
                    m(g(o.label), 1)
                  ]),
                  _: 1
                }),
                e(b, {
                  important: "",
                  size: "large-3"
                }, {
                  default: t(() => [
                    m(g(i(r) === void 0 ? " " : o.formatter(i(r))), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            e(f, {
              class: "spacing-small",
              vertical: "center"
            }, {
              default: t(() => [
                e(A, {
                  mood: _.value,
                  value: K.value
                }, null, 8, ["mood", "value"]),
                e(b, { mood: _.value }, {
                  default: t(() => [
                    m(g(i(N).proportion(L.value)), 1)
                  ]),
                  _: 1
                }, 8, ["mood"]),
                e(E),
                e(b, null, {
                  default: t(() => [
                    m(g(i(a) === void 0 ? " " : o.formatter(i(a))), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        i(r) === void 0 || i(a) === void 0 ? (v(), B(f, {
          key: 0,
          class: "loader-container no-spacing",
          horizontal: "center",
          vertical: "center"
        }, {
          default: t(() => [
            e(S)
          ]),
          _: 1
        })) : q("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const ne = /* @__PURE__ */ $(H, [["__scopeId", "data-v-2721093f"]]), ue = /* @__PURE__ */ C({
  __name: "Dot",
  props: {
    mood: { default: "accent" }
  },
  setup(d) {
    const s = d, { mood: a } = I(s), u = p(() => ({
      [`mood-background-${a.value}`]: !0
    }));
    return (r, h) => (v(), w("div", {
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
    const s = d, { value: a } = I(s), u = p(() => ({
      loading: a === void 0 || a.value === void 0
    }));
    return (r, h) => (v(), B(T, {
      class: x(["kpi-card", u.value])
    }, {
      default: t(() => [
        e(f, { vertical: "center" }, {
          default: t(() => [
            e(f, {
              class: "flex-max",
              column: ""
            }, {
              default: t(() => [
                e(b, null, {
                  default: t(() => [
                    m(g(r.label), 1)
                  ]),
                  _: 1
                }),
                e(b, {
                  mood: r.mood,
                  size: "large-3"
                }, {
                  default: t(() => [
                    m(g(i(a) === void 0 ? " " : r.formatter(i(a))), 1)
                  ]),
                  _: 1
                }, 8, ["mood"])
              ]),
              _: 1
            }),
            e(A, {
              mood: r.mood,
              value: r.icon,
              size: "large-6"
            }, null, 8, ["mood", "value"])
          ]),
          _: 1
        }),
        i(a) === void 0 ? (v(), B(f, {
          key: 0,
          class: "loader-container no-spacing",
          horizontal: "center",
          vertical: "center"
        }, {
          default: t(() => [
            e(S)
          ]),
          _: 1
        })) : q("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const ce = /* @__PURE__ */ $(J, [["__scopeId", "data-v-e84b3f2e"]]), Q = /* @__PURE__ */ C({
  __name: "ProgressBar",
  props: {
    mood: {},
    value: {}
  },
  setup(d) {
    const s = d, { value: a } = I(s), u = p(() => ({
      "--width": `${a.value * 100}%`
    }));
    return (r, h) => (v(), w("div", {
      class: x(["progress-bar", [`mood-background-${r.mood}`]]),
      style: O(u.value)
    }, null, 6));
  }
});
const U = /* @__PURE__ */ $(Q, [["__scopeId", "data-v-01158dc3"]]), W = /* @__PURE__ */ C({
  __name: "KpiDistributionTable",
  props: {
    dimensionLabel: {},
    metrics: {},
    rows: {}
  },
  setup(d) {
    const s = d, { metrics: a, rows: u } = I(s), r = p(() => {
      const _ = Object.keys(a.value);
      return _[_.length - 1];
    }), h = (_ = !1) => {
      const k = {};
      for (const o of Object.values(u.value))
        for (const [l, n] of Object.entries(o))
          l in k || (k[l] = 0), _ || (k[l] += n);
      return Object.keys(u.value).reduce((o, l) => (o[l] = Object.keys(a.value).reduce(
        (n, y) => (n[y] = k[y] === 0 ? 0 : u.value[l][y] / k[y], n),
        {}
      ), o), {});
    }, c = P(h(!0));
    setTimeout(() => {
      c.value = h();
    }, 10), j(a, () => {
      c.value = h();
    }), j(u, () => {
      c.value = h();
    });
    const K = p(() => Object.values(a.value).map((_) => {
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
      e(f, {
        class: "cell header-cell row-first",
        vertical: "center"
      }, {
        default: t(() => [
          e(b, null, {
            default: t(() => [
              m(g(_.dimensionLabel), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      (v(!0), w(z, null, D(i(a), (o, l) => (v(), w(z, null, [
        e(f, {
          class: "cell header-cell",
          horizontal: "center",
          vertical: "center"
        }, {
          default: t(() => [
            e(b, null, {
              default: t(() => [
                m(g(o.label), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1024),
        e(f, {
          class: x(["cell header-cell", { "row-last": l === r.value }]),
          horizontal: "center",
          vertical: "center"
        }, {
          default: t(() => [
            e(b, null, {
              default: t(() => [
                m(g(o.label) + " (%)", 1)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["class"])
      ], 64))), 256)),
      (v(!0), w(z, null, D(i(u), (o, l) => (v(), w(z, null, [
        e(f, {
          class: "cell row-first",
          vertical: "center"
        }, {
          default: t(() => [
            F(_.$slots, "cell(dimension)", { value: l }, () => [
              e(b, null, {
                default: t(() => [
                  m(g(l), 1)
                ]),
                _: 2
              }, 1024)
            ], !0)
          ]),
          _: 2
        }, 1024),
        (v(!0), w(z, null, D(i(a), (n, y) => (v(), w(z, null, [
          e(f, {
            class: "cell",
            horizontal: n.align ?? "center",
            vertical: "center"
          }, {
            default: t(() => [
              e(b, null, {
                default: t(() => [
                  m(g(n.formatter(o[y])), 1)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["horizontal"]),
          e(f, {
            class: x(["cell", { "row-last": y === r.value }]),
            horizontal: "center",
            vertical: "center"
          }, {
            default: t(() => [
              e(U, {
                mood: n.mood,
                value: c.value[l][y]
              }, null, 8, ["mood", "value"]),
              e(R, {
                mood: n.mood,
                outline: ""
              }, {
                default: t(() => [
                  m(g(i(N).proportion(c.value[l][y])), 1)
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
const ie = /* @__PURE__ */ $(W, [["__scopeId", "data-v-08dca286"]]);
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
