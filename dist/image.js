import { A as Vi } from "./Avatar-1ceb631f.js";
import { defineComponent as le, toRefs as ue, computed as M, openBlock as _, createBlock as Z, normalizeClass as H, withCtx as b, createVNode as p, createTextVNode as w, toDisplayString as y, unref as D, createCommentVNode as q, createElementBlock as m, renderSlot as it, normalizeStyle as we, ref as gt, watch as Ze, Fragment as T, renderList as W, createElementVNode as X, TransitionGroup as pt, Transition as bt } from "vue";
import { C as at, A as I, I as Ee } from "./Icon-53e685d0.js";
import { I as z } from "./Info-38a17291.js";
import { L as st } from "./LineBarChart-d93bd8fa.js";
import { a as Ui } from "./LineBarChart-d93bd8fa.js";
import { Separator as mt } from "./marker.js";
import { f as nt } from "./format-d2aab685.js";
import { _ as ce } from "./_plugin-vue_export-helper-dad06003.js";
import { _ as Pt } from "./Tooltip.vue_vue_type_style_index_0_lang-1df1b3e8.js";
import { B as At } from "./Badge-17fbe620.js";
import { L as Ct } from "./Link-882cf82b.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "numeral";
import "./base-b0eb9adb.js";
import "./popper-2d1cdbf9.js";
const me = 0.01, yt = (t, e) => {
  if (Math.abs(t) < me)
    return Math.abs(e) < me ? "equal" : "less-full";
  if (Math.abs(e) < me)
    return "greater-full";
  const r = (t - e) / e;
  return t > e ? { greater: r } : { less: r };
}, St = /* @__PURE__ */ le({
  __name: "ComparisonKpiCard",
  props: {
    comparisonValue: {},
    formatter: {},
    inversed: { type: Boolean, default: !1 },
    label: {},
    value: {}
  },
  setup(t) {
    const e = t, { comparisonValue: r, inversed: i, value: a } = ue(e), s = M(
      () => a === void 0 || a.value === void 0 || r === void 0 || r.value === void 0
    ), n = M(() => s.value ? "equal" : yt(a.value, r.value)), o = M(() => {
      const l = "minus", d = "arrow-up", f = "arrow-down";
      switch (n.value) {
        case "equal":
          return l;
        case "greater-full":
          return d;
        case "less-full":
          return f;
      }
      return "less" in n.value ? f : d;
    }), u = M(() => {
      switch (n.value) {
        case "equal":
          return 0;
        case "greater-full":
          return 1;
        case "less-full":
          return -1;
      }
      return "less" in n.value ? n.value.less : n.value.greater;
    }), c = M(() => {
      const l = "neutral", d = i.value ? "important" : "positive", f = i.value ? "positive" : "important";
      switch (n.value) {
        case "equal":
          return l;
        case "greater-full":
          return d;
        case "less-full":
          return f;
      }
      return "less" in n.value ? f : d;
    }), h = M(() => ({
      loading: s.value
    }));
    return (l, d) => (_(), Z(at, {
      class: H(["kpi-card", h.value])
    }, {
      default: b(() => [
        p(I, { column: "" }, {
          default: b(() => [
            p(I, { vertical: "center" }, {
              default: b(() => [
                p(z, {
                  class: "flex-max",
                  size: "large-3"
                }, {
                  default: b(() => [
                    w(y(l.label), 1)
                  ]),
                  _: 1
                }),
                p(z, {
                  important: "",
                  size: "large-3"
                }, {
                  default: b(() => [
                    w(y(D(a) === void 0 ? " " : l.formatter(D(a))), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            p(I, {
              class: "spacing-small",
              vertical: "center"
            }, {
              default: b(() => [
                p(Ee, {
                  mood: c.value,
                  value: o.value,
                  size: "small"
                }, null, 8, ["mood", "value"]),
                p(z, { mood: c.value }, {
                  default: b(() => [
                    w(y(D(nt).proportion(u.value)), 1)
                  ]),
                  _: 1
                }, 8, ["mood"]),
                p(mt),
                p(z, null, {
                  default: b(() => [
                    w(y(D(r) === void 0 ? " " : l.formatter(D(r))), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        D(a) === void 0 || D(r) === void 0 ? (_(), Z(I, {
          key: 0,
          class: "loader-container no-spacing",
          horizontal: "center",
          vertical: "center"
        }, {
          default: b(() => [
            p(st)
          ]),
          _: 1
        })) : q("", !0)
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const Mi = /* @__PURE__ */ ce(St, [["__scopeId", "data-v-78f79f36"]]), Ti = /* @__PURE__ */ le({
  __name: "Dot",
  props: {
    mood: { default: () => ({ mood: "accent" }) }
  },
  setup(t) {
    const e = t, { mood: r } = ue(e), i = M(() => {
      const a = {};
      return "mood" in r.value ? a[`mood-background-${r.value.mood}`] = !0 : "chart" in r.value && (a[`chart-${r.value.chart}`] = !0), a;
    });
    return (a, s) => (_(), m("div", {
      class: H(["dot", i.value])
    }, null, 2));
  }
});
const Et = /* @__PURE__ */ le({
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
  setup(t) {
    const e = t, { value: r } = ue(e), i = M(() => ({
      loading: r === void 0 || r.value === void 0
    }));
    return (a, s) => (_(), Z(at, {
      class: H(["kpi-card", i.value])
    }, {
      default: b(() => [
        p(I, { vertical: "center" }, {
          default: b(() => [
            p(I, {
              class: "flex-max",
              column: ""
            }, {
              default: b(() => [
                a.isValueFirst ? (_(), Z(z, {
                  key: 0,
                  mood: a.mood,
                  size: "large-5"
                }, {
                  default: b(() => [
                    w(y(D(r) === void 0 ? " " : a.formatter(D(r))), 1)
                  ]),
                  _: 1
                }, 8, ["mood"])) : q("", !0),
                p(z, { size: "large-2" }, {
                  default: b(() => {
                    var n;
                    return [
                      w(y(a.label), 1),
                      (n = a.tooltip) != null && n.length ? (_(), Z(Pt, {
                        key: 0,
                        width: "200",
                        "popper-style": { overflowWrap: "normal" }
                      }, {
                        reference: b(() => [
                          p(Ee, {
                            class: "kpi-tooltip",
                            value: "circle-question",
                            backend: "regular"
                          })
                        ]),
                        default: b(() => [
                          w(y(a.tooltip), 1)
                        ]),
                        _: 1
                      })) : q("", !0)
                    ];
                  }),
                  _: 1
                }),
                a.isValueFirst ? q("", !0) : (_(), Z(z, {
                  key: 1,
                  mood: a.mood,
                  size: "large-5"
                }, {
                  default: b(() => [
                    w(y(D(r) === void 0 ? " " : a.formatter(D(r))), 1)
                  ]),
                  _: 1
                }, 8, ["mood"]))
              ]),
              _: 1
            }),
            p(Ee, {
              class: "kpi-icon no-spacing",
              mood: a.mood,
              value: a.icon,
              size: "large-6",
              backend: a.iconBackend || "solid"
            }, null, 8, ["mood", "value", "backend"])
          ]),
          _: 1
        }),
        it(a.$slots, "default", {}, void 0, !0),
        D(r) === void 0 ? (_(), Z(I, {
          key: 0,
          class: "loader-container no-spacing",
          horizontal: "center",
          vertical: "center"
        }, {
          default: b(() => [
            p(st)
          ]),
          _: 1
        })) : q("", !0)
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
const Li = /* @__PURE__ */ ce(Et, [["__scopeId", "data-v-d994f674"]]), Ot = /* @__PURE__ */ le({
  __name: "ProgressBar",
  props: {
    mood: {},
    value: {},
    size: { default: "large" }
  },
  setup(t) {
    const e = t, { value: r, size: i } = ue(e), a = M(() => ({
      "--width": `${r.value * 100}%`,
      "--height": i.value === "large" ? "30px" : "auto"
    }));
    return (s, n) => (_(), m("div", {
      class: H(["progress-bar", [`mood-background-${s.mood}`]]),
      style: we(a.value)
    }, null, 6));
  }
});
const Dt = /* @__PURE__ */ ce(Ot, [["__scopeId", "data-v-ac82b9ec"]]), Pe = "140px", wt = /* @__PURE__ */ le({
  __name: "KpiDistributionTable",
  props: {
    dimensionLabel: {},
    metrics: {},
    rows: {}
  },
  setup(t) {
    const e = t, { metrics: r, rows: i } = ue(e), a = M(() => {
      const c = Object.keys(r.value);
      return c[c.length - 1];
    }), s = (c = !1) => {
      const h = {};
      for (const l of Object.values(i.value))
        for (const [d, f] of Object.entries(l))
          d in h || (h[d] = 0), c || (h[d] += +f);
      return Object.keys(i.value).reduce((l, d) => (l[d] = Object.keys(r.value).reduce(
        (f, g) => (f[g] = h[g] === 0 ? 0 : i.value[d][g] / h[g], f),
        {}
      ), l), {});
    }, n = gt(s(!0));
    setTimeout(() => {
      n.value = s();
    }, 10), Ze(r, () => {
      n.value = s();
    }), Ze(i, () => {
      n.value = s();
    });
    const o = M(
      () => Object.values(r.value).map((c) => {
        switch (c.align) {
          case "left":
            return `1fr ${Pe}`;
          case "center":
          default:
            return `1fr ${Pe}`;
        }
      }).join(" ")
    ), u = M(() => ({
      "--alignment": `max-content ${o.value}`,
      "--progressBarWidth": Pe
    }));
    return (c, h) => (_(), m("div", {
      class: "kpi-distribution-table",
      style: we(u.value)
    }, [
      p(I, {
        class: "cell header-cell row-first",
        vertical: "center"
      }, {
        default: b(() => [
          p(z, null, {
            default: b(() => [
              w(y(c.dimensionLabel), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      (_(!0), m(T, null, W(D(r), (l, d) => (_(), m(T, null, [
        p(I, {
          class: "cell header-cell",
          horizontal: "center",
          vertical: "center"
        }),
        p(I, {
          class: H(["cell header-cell metric", { "row-last": d === a.value }]),
          horizontal: "left",
          vertical: "center"
        }, {
          default: b(() => [
            p(z, null, {
              default: b(() => [
                w(y(l.label), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["class"])
      ], 64))), 256)),
      (_(!0), m(T, null, W(D(i), (l, d) => (_(), m(T, null, [
        p(I, {
          class: "cell row-first",
          vertical: "center"
        }, {
          default: b(() => [
            it(c.$slots, "cell(dimension)", {
              value: { name: d, link: l.link }
            }, () => [
              p(Ct, {
                to: l.link
              }, {
                default: b(() => [
                  w(y(d), 1)
                ]),
                _: 2
              }, 1032, ["to"])
            ], !0)
          ]),
          _: 2
        }, 1024),
        (_(!0), m(T, null, W(D(r), (f, g) => (_(), m(T, null, [
          p(I, {
            class: "cell",
            horizontal: f.align ?? "center",
            vertical: "center"
          }, {
            default: b(() => [
              p(z, null, {
                default: b(() => [
                  w(y(f.formatter(l[g])), 1)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["horizontal"]),
          p(I, {
            class: H(["cell metric", { "row-last": g === a.value }]),
            column: !0,
            horizontal: "center",
            vertical: "center"
          }, {
            default: b(() => [
              p(Dt, {
                mood: f.mood,
                value: n.value[d][g]
              }, null, 8, ["mood", "value"]),
              p(At, {
                mood: f.mood,
                outline: ""
              }, {
                default: b(() => [
                  w(y(D(nt).proportion(n.value[d][g])), 1)
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
const ki = /* @__PURE__ */ ce(wt, [["__scopeId", "data-v-707c5df7"]]);
var Ie = {}, Re = {}, ve = {}, Me = {}, P = {};
Object.defineProperty(P, "__esModule", { value: !0 });
P._ = void 0;
P.SPACE = " ";
P.FILL = "fill";
P.NONE = "none";
P.DRAW_LINE_VERTICAL = "V";
P.DRAW_LINE_HORIZONTAL = "H";
P.DRAW_LINE = "L";
P.CLOSE_PATH = "Z";
P.MOVE_CURSOR = "M";
P.DRAW_CURVE_CUBIC_BEZIER = "C";
P.DRAW_CURVE_SMOOTH = "S";
P.DRAW_CURVE_QUADRATIC = "Q";
P.DRAW_CURVE_QUADRATIC_CONTINUATION = "T";
P.DRAW_ARC = "A";
var Te = {};
Object.defineProperty(Te, "__esModule", { value: !0 });
function It(t) {
  return typeof t == "string";
}
Te.isString = It;
var N = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Math;
  t.abs = e.abs, t.min = e.min, t.max = e.max, t.floor = e.floor, t.round = e.round, t.sqrt = e.sqrt, t.pow = e.pow, t.cos = e.cos, t.asin = e.asin, t.sin = e.sin, t.tan = e.tan, t.PI = e.PI, t.QUADRATIC_RATIO = 2 / 3, t.EPSILON = t.pow(2, -52);
})(N);
Object.defineProperty(Me, "__esModule", { value: !0 });
var Ae = P, Rt = Te, Mt = N;
function Tt(t, e) {
  if (e === void 0 && (e = Mt.round), Rt.isString(t))
    return t;
  for (var r = [], i = 0; i < t.length; i++) {
    var a = t[i];
    r.push(Ae.MOVE_CURSOR, e(a[0]), e(a[1]), Ae.DRAW_CURVE_CUBIC_BEZIER);
    for (var s = void 0, n = 2; n < a.length; n += 6) {
      var o = e(a[n]), u = e(a[n + 1]), c = e(a[n + 2]), h = e(a[n + 3]), l = e(a[n + 4]), d = e(a[n + 5]), f = o == l && c == l && u == d && h == d;
      (!f || s != (s = "" + o + u + c + h + l + d)) && r.push(o, u, c, h, l, d);
    }
  }
  return r.join(Ae.SPACE);
}
Me.renderPath = Tt;
var ie = {};
Object.defineProperty(ie, "__esModule", { value: !0 });
var Lt = P;
function kt() {
  throw new Error(Array.prototype.join.call(arguments, Lt.SPACE));
}
ie.raiseError = kt;
var Le = {}, ke = {}, ae = {}, je = {};
Object.defineProperty(je, "__esModule", { value: !0 });
var jt = typeof window < "u" && window.navigator.userAgent;
je.isEdge = /(MSIE |Trident\/|Edge\/)/i.test(jt);
Object.defineProperty(ae, "__esModule", { value: !0 });
var $t = je, zt = $t.isEdge ? Array : Float32Array;
function Vt(t) {
  return new zt(t);
}
ae.createNumberArray = Vt;
var _e = {};
Object.defineProperty(_e, "__esModule", { value: !0 });
var de = N;
function Nt(t) {
  for (var e = t[0], r = t[1], i = r, a = e, s = 2; s < t.length; s += 6) {
    var n = t[s + 4], o = t[s + 5];
    e = de.min(e, n), a = de.max(a, n), r = de.min(r, o), i = de.max(i, o);
  }
  return {
    x: e,
    w: a - e,
    y: r,
    h: i - r
  };
}
function Ut(t, e, r) {
  var i = Nt(r);
  return {
    x: i.x + i.w * t,
    y: i.y + i.h * e
  };
}
_e.computeAbsoluteOrigin = Ut;
Object.defineProperty(ke, "__esModule", { value: !0 });
var Ft = ae, Bt = _e;
function ot(t, e, r) {
  var i = t.length, a = e.length;
  if (i < a)
    return ot(e, t, r);
  e.length = i;
  for (var s = a; s < i; s++) {
    var n = t[s], o = r.x, u = r.y;
    if (!r.absolute) {
      var c = Bt.computeAbsoluteOrigin(o, u, n);
      o = c.x, u = c.y;
    }
    for (var h = Ft.createNumberArray(n.length), l = 0; l < n.length; l += 2)
      h[l] = o, h[l + 1] = u;
    e[s] = h;
  }
}
ke.fillSegments = ot;
var $e = {}, ze = {};
Object.defineProperty(ze, "__esModule", { value: !0 });
var Wt = ae;
function qt(t, e) {
  var r = t.length, i = r - e, a = Wt.createNumberArray(e), s;
  for (s = 0; s < e; s++)
    a[s] = t[s];
  for (s = e; s < r; s++)
    t[s - e] = t[s];
  for (s = 0; s < e; s++)
    t[i + s] = a[s];
}
ze.rotatePoints = qt;
var ge = {};
Object.defineProperty(ge, "__esModule", { value: !0 });
var Ht = N;
function Gt(t, e, r, i) {
  return Ht.sqrt((t - r) * (t - r) + (e - i) * (e - i));
}
ge.distance = Gt;
Object.defineProperty($e, "__esModule", { value: !0 });
var Qt = ze, Zt = P, Kt = ge, Jt = _e;
function Yt(t, e, r, i) {
  var a = i.length;
  if (!(i[a - 2] !== i[0] || i[a - 1] !== i[1])) {
    if (!t) {
      var s = Jt.computeAbsoluteOrigin(e, r, i);
      e = s.x, r = s.y;
    }
    var n = i.slice(2);
    a = n.length;
    for (var o, u, c = 0; c < a; c += 6) {
      var h = Kt.distance(e, e, n[c], n[c + 1]);
      (u === Zt._ || h < u) && (u = h, o = c);
    }
    Qt.rotatePoints(n, o), i[0] = n[a - 2], i[1] = n[a - 1];
    for (var c = 0; c < n.length; c++)
      i[c + 2] = n[c];
  }
}
$e.normalizePoints = Yt;
var pe = {};
Object.defineProperty(pe, "__esModule", { value: !0 });
var Xt = N, xt = ae;
function er(t, e) {
  for (var r = t[0].length, i = 0; i < r; i++) {
    var a = t[0][i], s = t[1][i], n = Xt.max(a.length + e, s.length + e);
    t[0][i] = Oe(a, n), t[1][i] = Oe(s, n);
  }
}
pe.fillPoints = er;
function Oe(t, e) {
  var r = e - t.length, i = Math.ceil(e / t.length), a = xt.createNumberArray(e);
  a[0] = t[0], a[1] = t[1];
  for (var s = 1, n = 1; n < e - 1; ) {
    a[++n] = t[++s], a[++n] = t[++s], a[++n] = t[++s], a[++n] = t[++s];
    var o = a[++n] = t[++s], u = a[++n] = t[++s];
    if (r)
      for (var c = 0; c < i && r; c++)
        a[n + 5] = a[n + 3] = a[n + 1] = o, a[n + 6] = a[n + 4] = a[n + 2] = u, n += 6, r -= 6;
  }
  return a;
}
pe.fillSubpath = Oe;
var Ve = {}, Ne = {};
Object.defineProperty(Ne, "__esModule", { value: !0 });
var tr = N, rr = ge;
function ir(t) {
  for (var e = t.length, r = t[e - 2], i = t[e - 1], a = 0, s = 0; s < e; s += 6)
    a += rr.distance(t[s], t[s + 1], r, i), r = t[s], i = t[s + 1];
  return tr.floor(a);
}
Ne.perimeterPoints = ir;
Object.defineProperty(Ve, "__esModule", { value: !0 });
var ar = Ne;
function sr(t) {
  return t.map(function(e) {
    return {
      points: e,
      perimeter: ar.perimeterPoints(e)
    };
  }).sort(function(e, r) {
    return r.perimeter - e.perimeter;
  }).map(function(e) {
    return e.points;
  });
}
Ve.getSortedSegments = sr;
Object.defineProperty(Le, "__esModule", { value: !0 });
var nr = ke, Ke = $e, or = pe, Ce = P, lr = ie, Je = Ve;
function ur(t, e, r) {
  r.optimize === Ce.FILL && (t = Je.getSortedSegments(t), e = Je.getSortedSegments(e)), t.length !== e.length && (r.optimize === Ce.FILL ? nr.fillSegments(t, e, r.origin) : lr.raiseError("optimize:none requires equal lengths"));
  var i = Array(2);
  if (i[0] = t, i[1] = e, r.optimize === Ce.FILL) {
    for (var a = r.origin, s = a.x, n = a.y, o = a.absolute, u = 0; u < t.length; u++)
      Ke.normalizePoints(o, s, n, i[0][u]), Ke.normalizePoints(o, s, n, i[1][u]);
    or.fillPoints(i, r.addPoints * 6);
  }
  return i;
}
Le.normalizePaths = ur;
var Ue = {};
Object.defineProperty(Ue, "__esModule", { value: !0 });
function cr(t, e) {
  for (var r in e)
    t.hasOwnProperty(r) || (t[r] = e[r]);
  return t;
}
Ue.fillObject = cr;
Object.defineProperty(ve, "__esModule", { value: !0 });
var hr = Me, ee = N, dr = ie, fr = Le, vr = Ue, _r = ae, lt = P, gr = {
  addPoints: 0,
  optimize: lt.FILL,
  origin: { x: 0, y: 0 },
  precision: 0
};
function pr(t, e) {
  e = vr.fillObject(e, gr), (!t || t.length < 2) && dr.raiseError("invalid arguments");
  for (var r = t.length - 1, i = Array(r), a = 0; a < r; a++)
    i[a] = br(t[a], t[a + 1], e);
  var s = e.precision ? function(n) {
    return n.toFixed(e.precision);
  } : lt._;
  return function(n) {
    var o = r * n, u = ee.min(ee.floor(o), r - 1);
    return hr.renderPath(i[u]((o - u) / (u + 1)), s);
  };
}
ve.interpolatePath = pr;
function br(t, e, r) {
  var i = fr.normalizePaths(t.getData(), e.getData(), r), a = i[0].length;
  return function(s) {
    if (ee.abs(s - 0) < ee.EPSILON)
      return t.getStringData();
    if (ee.abs(s - 1) < ee.EPSILON)
      return e.getStringData();
    for (var n = Array(a), o = 0; o < a; o++)
      n[o] = ut(i[0][o], i[1][o], s);
    return n;
  };
}
function ut(t, e, r) {
  for (var i = t.length, a = _r.createNumberArray(i), s = 0; s < i; s++)
    a[s] = t[s] + (e[s] - t[s]) * r;
  return a;
}
ve.mixPoints = ut;
var be = {}, Fe = {}, Be = {}, We = {};
Object.defineProperty(We, "__esModule", { value: !0 });
var mr = P;
function Pr(t, e) {
  return t === mr._ ? e : t;
}
We.coalesce = Pr;
var qe = {};
Object.defineProperty(qe, "__esModule", { value: !0 });
var C = N, Ye = C.PI * 120 / 180, fe = C.PI * 2;
function ct(t, e, r, i, a, s, n, o, u, c, h, l, d) {
  if (r <= 0 || i <= 0)
    return [t, e, o, u, o, u];
  var f = C.PI / 180 * (+a || 0), g = C.cos(f), S = C.sin(f), E = !!c;
  if (!E) {
    var A = t, L = o;
    t = A * g - e * -S, e = A * -S + e * g, o = L * g - u * -S, u = L * -S + u * g;
    var R = (t - o) / 2, k = (e - u) / 2, U = R * R / (r * r) + k * k / (i * i);
    U > 1 && (U = C.sqrt(U), r = U * r, i = U * i);
    var J = (s === n ? -1 : 1) * C.sqrt(C.abs((r * r * i * i - r * r * k * k - i * i * R * R) / (r * r * k * k + i * i * R * R)));
    l = J * r * k / i + (t + o) / 2, d = J * -i * R / r + (e + u) / 2, c = C.asin((e - d) / i), h = C.asin((u - d) / i), t < l && (c = C.PI - c), o < l && (h = C.PI - h), c < 0 && (c += fe), h < 0 && (h += fe), n && c > h && (c -= fe), !n && h > c && (h -= fe);
  }
  var O;
  if (C.abs(h - c) > Ye) {
    var j = h, ft = o, vt = u;
    h = c + Ye * (n && h > c ? 1 : -1), o = l + r * C.cos(h), u = d + i * C.sin(h), O = ct(o, u, r, i, a, 0, n, ft, vt, h, j, l, d);
  } else
    O = [];
  var he = 4 / 3 * C.tan((h - c) / 4);
  if (O.splice(0, 0, 2 * t - (t + he * r * C.sin(c)), 2 * e - (e - he * i * C.cos(c)), o + he * r * C.sin(h), u - he * i * C.cos(h), o, u), !E)
    for (var Y = 0, _t = O.length; Y < _t; Y += 2) {
      var Ge = O[Y], Qe = O[Y + 1];
      O[Y] = Ge * g - Qe * S, O[Y + 1] = Ge * S + Qe * g;
    }
  return O;
}
qe.arcToCurve = ct;
Object.defineProperty(Be, "__esModule", { value: !0 });
var v = P, x = We, Ar = ie, G = N, Cr = qe, yr = { M: 2, H: 1, V: 1, L: 2, Z: 0, C: 6, S: 4, Q: 4, T: 2, A: 7 };
function F(t, e, r, i, a, s, n) {
  var o = t.x, u = t.y;
  t.x = x.coalesce(s, o), t.y = x.coalesce(n, u), t.current.push(x.coalesce(e, o), r = x.coalesce(r, u), i = x.coalesce(i, o), a = x.coalesce(a, u), t.x, t.y), t.lc = t.c;
}
function Sr(t) {
  var e = t.c, r = t.t, i = t.x, a = t.y;
  if (e === v.DRAW_LINE_VERTICAL)
    r[0] += a;
  else if (e === v.DRAW_LINE_HORIZONTAL)
    r[0] += i;
  else if (e === v.DRAW_ARC)
    r[5] += i, r[6] += a;
  else
    for (var s = 0; s < r.length; s += 2)
      r[s] += i, r[s + 1] += a;
}
function Er(t) {
  return t.replace(/[\^\s]*([mhvlzcsqta]|\-?\d*\.?\d+)[,\$\s]*/gi, " $1").replace(/([mhvlzcsqta])/gi, " $1").trim().split("  ").map(Or);
}
function Or(t) {
  return t.split(v.SPACE).map(Dr);
}
function Dr(t, e) {
  return e === 0 ? t : +t;
}
function wr(t) {
  for (var e = {
    x: 0,
    y: 0,
    segments: []
  }, r = Er(t), i = 0; i < r.length; i++) {
    var a = r[i], s = a[0], n = s.toUpperCase(), o = n !== v.CLOSE_PATH && n !== s;
    e.c = n;
    var u = yr[n], c = a, h = 1;
    do {
      e.t = c.length === 1 ? c : c.slice(h, h + u), o && Sr(e);
      var l = e.t, d = e.x, f = e.y, g = void 0, S = void 0, E = void 0, A = void 0, L = void 0, R = void 0;
      if (n === v.MOVE_CURSOR)
        e.segments.push(e.current = [e.x = l[0], e.y = l[1]]);
      else if (n === v.DRAW_LINE_HORIZONTAL)
        F(e, v._, v._, v._, v._, l[0], v._);
      else if (n === v.DRAW_LINE_VERTICAL)
        F(e, v._, v._, v._, v._, v._, l[0]);
      else if (n === v.DRAW_LINE)
        F(e, v._, v._, v._, v._, l[0], l[1]);
      else if (n === v.CLOSE_PATH)
        F(e, v._, v._, v._, v._, e.current[0], e.current[1]);
      else if (n === v.DRAW_CURVE_CUBIC_BEZIER)
        F(e, l[0], l[1], l[2], l[3], l[4], l[5]), e.cx = l[2], e.cy = l[3];
      else if (n === v.DRAW_CURVE_SMOOTH) {
        var k = e.lc !== v.DRAW_CURVE_SMOOTH && e.lc !== v.DRAW_CURVE_CUBIC_BEZIER;
        g = k ? v._ : d * 2 - e.cx, S = k ? v._ : f * 2 - e.cy, F(e, g, S, l[0], l[1], l[2], l[3]), e.cx = l[0], e.cy = l[1];
      } else if (n === v.DRAW_CURVE_QUADRATIC) {
        var U = l[0], J = l[1];
        E = l[2], A = l[3], F(e, d + (U - d) * G.QUADRATIC_RATIO, f + (J - f) * G.QUADRATIC_RATIO, E + (U - E) * G.QUADRATIC_RATIO, A + (J - A) * G.QUADRATIC_RATIO, E, A), e.cx = U, e.cy = J;
      } else if (n === v.DRAW_CURVE_QUADRATIC_CONTINUATION)
        E = l[0], A = l[1], e.lc === v.DRAW_CURVE_QUADRATIC || e.lc === v.DRAW_CURVE_QUADRATIC_CONTINUATION ? (g = d + (d * 2 - e.cx - d) * G.QUADRATIC_RATIO, S = f + (f * 2 - e.cy - f) * G.QUADRATIC_RATIO, L = E + (d * 2 - e.cx - E) * G.QUADRATIC_RATIO, R = A + (f * 2 - e.cy - A) * G.QUADRATIC_RATIO) : (g = L = d, S = R = f), F(e, g, S, L, R, E, A), e.cx = L, e.cy = R;
      else if (n === v.DRAW_ARC)
        for (var O = Cr.arcToCurve(d, f, l[0], l[1], l[2], l[3], l[4], l[5], l[6]), j = 0; j < O.length; j += 6)
          F(e, O[j], O[j + 1], O[j + 2], O[j + 3], O[j + 4], O[j + 5]);
      else
        Ar.raiseError(e.c, " is not supported");
      h += u;
    } while (h < c.length);
  }
  return e.segments;
}
Be.parsePoints = wr;
Object.defineProperty(Fe, "__esModule", { value: !0 });
var Ir = ie, Xe = Be, Rr = P, Mr = /^([#|\.]|path)/i;
function Tr(t) {
  if (Array.isArray(t))
    return { data: t, stringData: Rr._ };
  var e;
  if (typeof t == "string" && Mr.test(t) ? t = document.querySelector(t) : e = t, typeof t == "string")
    return { data: Xe.parsePoints(t), stringData: e };
  var r = t;
  return r.tagName.toUpperCase() === "PATH" ? (e = r.getAttribute("d"), { data: Xe.parsePoints(e), stringData: e }) : Ir.raiseError("Unsupported element ", r.tagName);
}
Fe.convertToPathData = Tr;
Object.defineProperty(be, "__esModule", { value: !0 });
var Lr = Fe, kr = N, ye = P, jr = function() {
  function t(e) {
    var r = Lr.convertToPathData(e), i = r.data, a = r.stringData;
    this.data = i, this.stringData = a;
  }
  return t.prototype.getData = function() {
    return this.data;
  }, t.prototype.getStringData = function() {
    return this.stringData || (this.stringData = this.render());
  }, t.prototype.render = function(e) {
    e === void 0 && (e = kr.round);
    for (var r = this.data, i = [], a = 0; a < r.length; a++) {
      var s = r[a];
      i.push(ye.MOVE_CURSOR, e(s[0]), e(s[1]), ye.DRAW_CURVE_CUBIC_BEZIER);
      for (var n = void 0, o = 2; o < s.length; o += 6) {
        var u = e(s[o]), c = e(s[o + 1]), h = e(s[o + 2]), l = e(s[o + 3]), d = e(s[o + 4]), f = e(s[o + 5]), g = u == d && h == d && c == f && l == f;
        (!g || n != (n = "" + u + c + h + l + d + f)) && i.push(u, c, h, l, d, f);
      }
    }
    return i.join(ye.SPACE);
  }, t;
}();
be.Path = jr;
Object.defineProperty(Re, "__esModule", { value: !0 });
var $r = ve, zr = be;
function Vr(t, e) {
  return $r.interpolatePath(t.map(function(r) {
    return new zr.Path(r);
  }), e || {});
}
Re.interpolate = Vr;
Object.defineProperty(Ie, "__esModule", { value: !0 });
var Nr = Re, Ur = Ie.interpolate = Nr.interpolate, Fr = be;
Ie.Path = Fr.Path;
var re = Object.freeze({
  Linear: Object.freeze({
    None: function(t) {
      return t;
    },
    In: function(t) {
      return t;
    },
    Out: function(t) {
      return t;
    },
    InOut: function(t) {
      return t;
    }
  }),
  Quadratic: Object.freeze({
    In: function(t) {
      return t * t;
    },
    Out: function(t) {
      return t * (2 - t);
    },
    InOut: function(t) {
      return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
    }
  }),
  Cubic: Object.freeze({
    In: function(t) {
      return t * t * t;
    },
    Out: function(t) {
      return --t * t * t + 1;
    },
    InOut: function(t) {
      return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
    }
  }),
  Quartic: Object.freeze({
    In: function(t) {
      return t * t * t * t;
    },
    Out: function(t) {
      return 1 - --t * t * t * t;
    },
    InOut: function(t) {
      return (t *= 2) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2);
    }
  }),
  Quintic: Object.freeze({
    In: function(t) {
      return t * t * t * t * t;
    },
    Out: function(t) {
      return --t * t * t * t * t + 1;
    },
    InOut: function(t) {
      return (t *= 2) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2);
    }
  }),
  Sinusoidal: Object.freeze({
    In: function(t) {
      return 1 - Math.sin((1 - t) * Math.PI / 2);
    },
    Out: function(t) {
      return Math.sin(t * Math.PI / 2);
    },
    InOut: function(t) {
      return 0.5 * (1 - Math.sin(Math.PI * (0.5 - t)));
    }
  }),
  Exponential: Object.freeze({
    In: function(t) {
      return t === 0 ? 0 : Math.pow(1024, t - 1);
    },
    Out: function(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    },
    InOut: function(t) {
      return t === 0 ? 0 : t === 1 ? 1 : (t *= 2) < 1 ? 0.5 * Math.pow(1024, t - 1) : 0.5 * (-Math.pow(2, -10 * (t - 1)) + 2);
    }
  }),
  Circular: Object.freeze({
    In: function(t) {
      return 1 - Math.sqrt(1 - t * t);
    },
    Out: function(t) {
      return Math.sqrt(1 - --t * t);
    },
    InOut: function(t) {
      return (t *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    }
  }),
  Elastic: Object.freeze({
    In: function(t) {
      return t === 0 ? 0 : t === 1 ? 1 : -Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI);
    },
    Out: function(t) {
      return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t - 0.1) * 5 * Math.PI) + 1;
    },
    InOut: function(t) {
      return t === 0 ? 0 : t === 1 ? 1 : (t *= 2, t < 1 ? -0.5 * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI) : 0.5 * Math.pow(2, -10 * (t - 1)) * Math.sin((t - 1.1) * 5 * Math.PI) + 1);
    }
  }),
  Back: Object.freeze({
    In: function(t) {
      var e = 1.70158;
      return t === 1 ? 1 : t * t * ((e + 1) * t - e);
    },
    Out: function(t) {
      var e = 1.70158;
      return t === 0 ? 0 : --t * t * ((e + 1) * t + e) + 1;
    },
    InOut: function(t) {
      var e = 2.5949095;
      return (t *= 2) < 1 ? 0.5 * (t * t * ((e + 1) * t - e)) : 0.5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
    }
  }),
  Bounce: Object.freeze({
    In: function(t) {
      return 1 - re.Bounce.Out(1 - t);
    },
    Out: function(t) {
      return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    },
    InOut: function(t) {
      return t < 0.5 ? re.Bounce.In(t * 2) * 0.5 : re.Bounce.Out(t * 2 - 1) * 0.5 + 0.5;
    }
  }),
  generatePow: function(t) {
    return t === void 0 && (t = 4), t = t < Number.EPSILON ? Number.EPSILON : t, t = t > 1e4 ? 1e4 : t, {
      In: function(e) {
        return Math.pow(e, t);
      },
      Out: function(e) {
        return 1 - Math.pow(1 - e, t);
      },
      InOut: function(e) {
        return e < 0.5 ? Math.pow(e * 2, t) / 2 : (1 - Math.pow(2 - e * 2, t)) / 2 + 0.5;
      }
    };
  }
}), te = function() {
  return performance.now();
}, ht = (
  /** @class */
  function() {
    function t() {
      for (var e = [], r = 0; r < arguments.length; r++)
        e[r] = arguments[r];
      this._tweens = {}, this._tweensAddedDuringUpdate = {}, this.add.apply(this, e);
    }
    return t.prototype.getAll = function() {
      var e = this;
      return Object.keys(this._tweens).map(function(r) {
        return e._tweens[r];
      });
    }, t.prototype.removeAll = function() {
      this._tweens = {};
    }, t.prototype.add = function() {
      for (var e, r = [], i = 0; i < arguments.length; i++)
        r[i] = arguments[i];
      for (var a = 0, s = r; a < s.length; a++) {
        var n = s[a];
        (e = n._group) === null || e === void 0 || e.remove(n), n._group = this, this._tweens[n.getId()] = n, this._tweensAddedDuringUpdate[n.getId()] = n;
      }
    }, t.prototype.remove = function() {
      for (var e = [], r = 0; r < arguments.length; r++)
        e[r] = arguments[r];
      for (var i = 0, a = e; i < a.length; i++) {
        var s = a[i];
        s._group = void 0, delete this._tweens[s.getId()], delete this._tweensAddedDuringUpdate[s.getId()];
      }
    }, t.prototype.allStopped = function() {
      return this.getAll().every(function(e) {
        return !e.isPlaying();
      });
    }, t.prototype.update = function(e, r) {
      e === void 0 && (e = te()), r === void 0 && (r = !0);
      var i = Object.keys(this._tweens);
      if (i.length !== 0)
        for (; i.length > 0; ) {
          this._tweensAddedDuringUpdate = {};
          for (var a = 0; a < i.length; a++) {
            var s = this._tweens[i[a]], n = !r;
            s && s.update(e, n) === !1 && !r && this.remove(s);
          }
          i = Object.keys(this._tweensAddedDuringUpdate);
        }
    }, t;
  }()
), K = {
  Linear: function(t, e) {
    var r = t.length - 1, i = r * e, a = Math.floor(i), s = K.Utils.Linear;
    return e < 0 ? s(t[0], t[1], i) : e > 1 ? s(t[r], t[r - 1], r - i) : s(t[a], t[a + 1 > r ? r : a + 1], i - a);
  },
  Bezier: function(t, e) {
    for (var r = 0, i = t.length - 1, a = Math.pow, s = K.Utils.Bernstein, n = 0; n <= i; n++)
      r += a(1 - e, i - n) * a(e, n) * t[n] * s(i, n);
    return r;
  },
  CatmullRom: function(t, e) {
    var r = t.length - 1, i = r * e, a = Math.floor(i), s = K.Utils.CatmullRom;
    return t[0] === t[r] ? (e < 0 && (a = Math.floor(i = r * (1 + e))), s(t[(a - 1 + r) % r], t[a], t[(a + 1) % r], t[(a + 2) % r], i - a)) : e < 0 ? t[0] - (s(t[0], t[0], t[1], t[1], -i) - t[0]) : e > 1 ? t[r] - (s(t[r], t[r], t[r - 1], t[r - 1], i - r) - t[r]) : s(t[a ? a - 1 : 0], t[a], t[r < a + 1 ? r : a + 1], t[r < a + 2 ? r : a + 2], i - a);
  },
  Utils: {
    Linear: function(t, e, r) {
      return (e - t) * r + t;
    },
    Bernstein: function(t, e) {
      var r = K.Utils.Factorial;
      return r(t) / r(e) / r(t - e);
    },
    Factorial: function() {
      var t = [1];
      return function(e) {
        var r = 1;
        if (t[e])
          return t[e];
        for (var i = e; i > 1; i--)
          r *= i;
        return t[e] = r, r;
      };
    }(),
    CatmullRom: function(t, e, r, i, a) {
      var s = (r - t) * 0.5, n = (i - e) * 0.5, o = a * a, u = a * o;
      return (2 * e - 2 * r + s + n) * u + (-3 * e + 3 * r - 2 * s - n) * o + s * a + e;
    }
  }
}, He = (
  /** @class */
  function() {
    function t() {
    }
    return t.nextId = function() {
      return t._nextId++;
    }, t._nextId = 0, t;
  }()
), De = new ht(), Br = (
  /** @class */
  function() {
    function t(e, r) {
      this._isPaused = !1, this._pauseStart = 0, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._isDynamic = !1, this._initialRepeat = 0, this._repeat = 0, this._yoyo = !1, this._isPlaying = !1, this._reversed = !1, this._delayTime = 0, this._startTime = 0, this._easingFunction = re.Linear.None, this._interpolationFunction = K.Linear, this._chainedTweens = [], this._onStartCallbackFired = !1, this._onEveryStartCallbackFired = !1, this._id = He.nextId(), this._isChainStopped = !1, this._propertiesAreSetUp = !1, this._goToEnd = !1, this._object = e, typeof r == "object" ? (this._group = r, r.add(this)) : r === !0 && (this._group = De, De.add(this));
    }
    return t.prototype.getId = function() {
      return this._id;
    }, t.prototype.isPlaying = function() {
      return this._isPlaying;
    }, t.prototype.isPaused = function() {
      return this._isPaused;
    }, t.prototype.getDuration = function() {
      return this._duration;
    }, t.prototype.to = function(e, r) {
      if (r === void 0 && (r = 1e3), this._isPlaying)
        throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");
      return this._valuesEnd = e, this._propertiesAreSetUp = !1, this._duration = r < 0 ? 0 : r, this;
    }, t.prototype.duration = function(e) {
      return e === void 0 && (e = 1e3), this._duration = e < 0 ? 0 : e, this;
    }, t.prototype.dynamic = function(e) {
      return e === void 0 && (e = !1), this._isDynamic = e, this;
    }, t.prototype.start = function(e, r) {
      if (e === void 0 && (e = te()), r === void 0 && (r = !1), this._isPlaying)
        return this;
      if (this._repeat = this._initialRepeat, this._reversed) {
        this._reversed = !1;
        for (var i in this._valuesStartRepeat)
          this._swapEndStartRepeatValues(i), this._valuesStart[i] = this._valuesStartRepeat[i];
      }
      if (this._isPlaying = !0, this._isPaused = !1, this._onStartCallbackFired = !1, this._onEveryStartCallbackFired = !1, this._isChainStopped = !1, this._startTime = e, this._startTime += this._delayTime, !this._propertiesAreSetUp || r) {
        if (this._propertiesAreSetUp = !0, !this._isDynamic) {
          var a = {};
          for (var s in this._valuesEnd)
            a[s] = this._valuesEnd[s];
          this._valuesEnd = a;
        }
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, r);
      }
      return this;
    }, t.prototype.startFromCurrentValues = function(e) {
      return this.start(e, !0);
    }, t.prototype._setupProperties = function(e, r, i, a, s) {
      for (var n in i) {
        var o = e[n], u = Array.isArray(o), c = u ? "array" : typeof o, h = !u && Array.isArray(i[n]);
        if (!(c === "undefined" || c === "function")) {
          if (h) {
            var l = i[n];
            if (l.length === 0)
              continue;
            for (var d = [o], f = 0, g = l.length; f < g; f += 1) {
              var S = this._handleRelativeValue(o, l[f]);
              if (isNaN(S)) {
                h = !1, console.warn("Found invalid interpolation list. Skipping.");
                break;
              }
              d.push(S);
            }
            h && (i[n] = d);
          }
          if ((c === "object" || u) && o && !h) {
            r[n] = u ? [] : {};
            var E = o;
            for (var A in E)
              r[n][A] = E[A];
            a[n] = u ? [] : {};
            var l = i[n];
            if (!this._isDynamic) {
              var L = {};
              for (var A in l)
                L[A] = l[A];
              i[n] = l = L;
            }
            this._setupProperties(E, r[n], l, a[n], s);
          } else
            (typeof r[n] > "u" || s) && (r[n] = o), u || (r[n] *= 1), h ? a[n] = i[n].slice().reverse() : a[n] = r[n] || 0;
        }
      }
    }, t.prototype.stop = function() {
      return this._isChainStopped || (this._isChainStopped = !0, this.stopChainedTweens()), this._isPlaying ? (this._isPlaying = !1, this._isPaused = !1, this._onStopCallback && this._onStopCallback(this._object), this) : this;
    }, t.prototype.end = function() {
      return this._goToEnd = !0, this.update(this._startTime + this._duration), this;
    }, t.prototype.pause = function(e) {
      return e === void 0 && (e = te()), this._isPaused || !this._isPlaying ? this : (this._isPaused = !0, this._pauseStart = e, this);
    }, t.prototype.resume = function(e) {
      return e === void 0 && (e = te()), !this._isPaused || !this._isPlaying ? this : (this._isPaused = !1, this._startTime += e - this._pauseStart, this._pauseStart = 0, this);
    }, t.prototype.stopChainedTweens = function() {
      for (var e = 0, r = this._chainedTweens.length; e < r; e++)
        this._chainedTweens[e].stop();
      return this;
    }, t.prototype.group = function(e) {
      return e ? (e.add(this), this) : (console.warn("tween.group() without args has been removed, use group.add(tween) instead."), this);
    }, t.prototype.remove = function() {
      var e;
      return (e = this._group) === null || e === void 0 || e.remove(this), this;
    }, t.prototype.delay = function(e) {
      return e === void 0 && (e = 0), this._delayTime = e, this;
    }, t.prototype.repeat = function(e) {
      return e === void 0 && (e = 0), this._initialRepeat = e, this._repeat = e, this;
    }, t.prototype.repeatDelay = function(e) {
      return this._repeatDelayTime = e, this;
    }, t.prototype.yoyo = function(e) {
      return e === void 0 && (e = !1), this._yoyo = e, this;
    }, t.prototype.easing = function(e) {
      return e === void 0 && (e = re.Linear.None), this._easingFunction = e, this;
    }, t.prototype.interpolation = function(e) {
      return e === void 0 && (e = K.Linear), this._interpolationFunction = e, this;
    }, t.prototype.chain = function() {
      for (var e = [], r = 0; r < arguments.length; r++)
        e[r] = arguments[r];
      return this._chainedTweens = e, this;
    }, t.prototype.onStart = function(e) {
      return this._onStartCallback = e, this;
    }, t.prototype.onEveryStart = function(e) {
      return this._onEveryStartCallback = e, this;
    }, t.prototype.onUpdate = function(e) {
      return this._onUpdateCallback = e, this;
    }, t.prototype.onRepeat = function(e) {
      return this._onRepeatCallback = e, this;
    }, t.prototype.onComplete = function(e) {
      return this._onCompleteCallback = e, this;
    }, t.prototype.onStop = function(e) {
      return this._onStopCallback = e, this;
    }, t.prototype.update = function(e, r) {
      var i = this, a;
      if (e === void 0 && (e = te()), r === void 0 && (r = t.autoStartOnUpdate), this._isPaused)
        return !0;
      var s;
      if (!this._goToEnd && !this._isPlaying)
        if (r)
          this.start(e, !0);
        else
          return !1;
      if (this._goToEnd = !1, e < this._startTime)
        return !0;
      this._onStartCallbackFired === !1 && (this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = !0), this._onEveryStartCallbackFired === !1 && (this._onEveryStartCallback && this._onEveryStartCallback(this._object), this._onEveryStartCallbackFired = !0);
      var n = e - this._startTime, o = this._duration + ((a = this._repeatDelayTime) !== null && a !== void 0 ? a : this._delayTime), u = this._duration + this._repeat * o, c = function() {
        if (i._duration === 0 || n > u)
          return 1;
        var S = Math.trunc(n / o), E = n - S * o, A = Math.min(E / i._duration, 1);
        return A === 0 && n === i._duration ? 1 : A;
      }, h = c(), l = this._easingFunction(h);
      if (this._updateProperties(this._object, this._valuesStart, this._valuesEnd, l), this._onUpdateCallback && this._onUpdateCallback(this._object, h), this._duration === 0 || n >= this._duration)
        if (this._repeat > 0) {
          var d = Math.min(Math.trunc((n - this._duration) / o) + 1, this._repeat);
          isFinite(this._repeat) && (this._repeat -= d);
          for (s in this._valuesStartRepeat)
            !this._yoyo && typeof this._valuesEnd[s] == "string" && (this._valuesStartRepeat[s] = // eslint-disable-next-line
            // @ts-ignore FIXME?
            this._valuesStartRepeat[s] + parseFloat(this._valuesEnd[s])), this._yoyo && this._swapEndStartRepeatValues(s), this._valuesStart[s] = this._valuesStartRepeat[s];
          return this._yoyo && (this._reversed = !this._reversed), this._startTime += o * d, this._onRepeatCallback && this._onRepeatCallback(this._object), this._onEveryStartCallbackFired = !1, !0;
        } else {
          this._onCompleteCallback && this._onCompleteCallback(this._object);
          for (var f = 0, g = this._chainedTweens.length; f < g; f++)
            this._chainedTweens[f].start(this._startTime + this._duration, !1);
          return this._isPlaying = !1, !1;
        }
      return !0;
    }, t.prototype._updateProperties = function(e, r, i, a) {
      for (var s in i)
        if (r[s] !== void 0) {
          var n = r[s] || 0, o = i[s], u = Array.isArray(e[s]), c = Array.isArray(o), h = !u && c;
          h ? e[s] = this._interpolationFunction(o, a) : typeof o == "object" && o ? this._updateProperties(e[s], n, o, a) : (o = this._handleRelativeValue(n, o), typeof o == "number" && (e[s] = n + (o - n) * a));
        }
    }, t.prototype._handleRelativeValue = function(e, r) {
      return typeof r != "string" ? r : r.charAt(0) === "+" || r.charAt(0) === "-" ? e + parseFloat(r) : parseFloat(r);
    }, t.prototype._swapEndStartRepeatValues = function(e) {
      var r = this._valuesStartRepeat[e], i = this._valuesEnd[e];
      typeof i == "string" ? this._valuesStartRepeat[e] = this._valuesStartRepeat[e] + parseFloat(i) : this._valuesStartRepeat[e] = this._valuesEnd[e], this._valuesEnd[e] = r;
    }, t.autoStartOnUpdate = !1, t;
  }()
), Wr = "25.0.0", qr = He.nextId, V = De, Hr = V.getAll.bind(V), Gr = V.removeAll.bind(V), Qr = V.add.bind(V), Zr = V.remove.bind(V), Kr = V.update.bind(V), Se = {
  Easing: re,
  Group: ht,
  Interpolation: K,
  now: te,
  Sequence: He,
  nextId: qr,
  Tween: Br,
  VERSION: Wr,
  /**
   * @deprecated The global TWEEN Group will be removed in a following major
   * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
   * group.
   *
   * Old code:
   *
   * ```js
   * import * as TWEEN from '@tweenjs/tween.js'
   *
   * //...
   *
   * const tween = new TWEEN.Tween(obj)
   * const tween2 = new TWEEN.Tween(obj2)
   *
   * //...
   *
   * requestAnimationFrame(function loop(time) {
   *   TWEEN.update(time)
   *   requestAnimationFrame(loop)
   * })
   * ```
   *
   * New code:
   *
   * ```js
   * import {Tween, Group} from '@tweenjs/tween.js'
   *
   * //...
   *
   * const tween = new Tween(obj)
   * const tween2 = new TWEEN.Tween(obj2)
   *
   * //...
   *
   * const group = new Group()
   * group.add(tween)
   * group.add(tween2)
   *
   * //...
   *
   * requestAnimationFrame(function loop(time) {
   *   group.update(time)
   *   requestAnimationFrame(loop)
   * })
   * ```
   */
  getAll: Hr,
  /**
   * @deprecated The global TWEEN Group will be removed in a following major
   * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
   * group.
   *
   * Old code:
   *
   * ```js
   * import * as TWEEN from '@tweenjs/tween.js'
   *
   * //...
   *
   * const tween = new TWEEN.Tween(obj)
   * const tween2 = new TWEEN.Tween(obj2)
   *
   * //...
   *
   * requestAnimationFrame(function loop(time) {
   *   TWEEN.update(time)
   *   requestAnimationFrame(loop)
   * })
   * ```
   *
   * New code:
   *
   * ```js
   * import {Tween, Group} from '@tweenjs/tween.js'
   *
   * //...
   *
   * const tween = new Tween(obj)
   * const tween2 = new TWEEN.Tween(obj2)
   *
   * //...
   *
   * const group = new Group()
   * group.add(tween)
   * group.add(tween2)
   *
   * //...
   *
   * requestAnimationFrame(function loop(time) {
   *   group.update(time)
   *   requestAnimationFrame(loop)
   * })
   * ```
   */
  removeAll: Gr,
  /**
   * @deprecated The global TWEEN Group will be removed in a following major
   * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
   * group.
   *
   * Old code:
   *
   * ```js
   * import * as TWEEN from '@tweenjs/tween.js'
   *
   * //...
   *
   * const tween = new TWEEN.Tween(obj)
   * const tween2 = new TWEEN.Tween(obj2)
   *
   * //...
   *
   * requestAnimationFrame(function loop(time) {
   *   TWEEN.update(time)
   *   requestAnimationFrame(loop)
   * })
   * ```
   *
   * New code:
   *
   * ```js
   * import {Tween, Group} from '@tweenjs/tween.js'
   *
   * //...
   *
   * const tween = new Tween(obj)
   * const tween2 = new TWEEN.Tween(obj2)
   *
   * //...
   *
   * const group = new Group()
   * group.add(tween)
   * group.add(tween2)
   *
   * //...
   *
   * requestAnimationFrame(function loop(time) {
   *   group.update(time)
   *   requestAnimationFrame(loop)
   * })
   * ```
   */
  add: Qr,
  /**
   * @deprecated The global TWEEN Group will be removed in a following major
   * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
   * group.
   *
   * Old code:
   *
   * ```js
   * import * as TWEEN from '@tweenjs/tween.js'
   *
   * //...
   *
   * const tween = new TWEEN.Tween(obj)
   * const tween2 = new TWEEN.Tween(obj2)
   *
   * //...
   *
   * requestAnimationFrame(function loop(time) {
   *   TWEEN.update(time)
   *   requestAnimationFrame(loop)
   * })
   * ```
   *
   * New code:
   *
   * ```js
   * import {Tween, Group} from '@tweenjs/tween.js'
   *
   * //...
   *
   * const tween = new Tween(obj)
   * const tween2 = new TWEEN.Tween(obj2)
   *
   * //...
   *
   * const group = new Group()
   * group.add(tween)
   * group.add(tween2)
   *
   * //...
   *
   * requestAnimationFrame(function loop(time) {
   *   group.update(time)
   *   requestAnimationFrame(loop)
   * })
   * ```
   */
  remove: Zr,
  /**
   * @deprecated The global TWEEN Group will be removed in a following major
   * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
   * group.
   *
   * Old code:
   *
   * ```js
   * import * as TWEEN from '@tweenjs/tween.js'
   *
   * //...
   *
   * const tween = new TWEEN.Tween(obj)
   * const tween2 = new TWEEN.Tween(obj2)
   *
   * //...
   *
   * requestAnimationFrame(function loop(time) {
   *   TWEEN.update(time)
   *   requestAnimationFrame(loop)
   * })
   * ```
   *
   * New code:
   *
   * ```js
   * import {Tween, Group} from '@tweenjs/tween.js'
   *
   * //...
   *
   * const tween = new Tween(obj)
   * const tween2 = new TWEEN.Tween(obj2)
   *
   * //...
   *
   * const group = new Group()
   * group.add(tween)
   * group.add(tween2)
   *
   * //...
   *
   * requestAnimationFrame(function loop(time) {
   *   group.update(time)
   *   requestAnimationFrame(loop)
   * })
   * ```
   */
  update: Kr
};
const $ = (t) => Math.round(t * 10) / 10, ne = (t) => Number(t).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"), xe = (t, e, r, i) => ` C${$((r + t) / 2)},${e} ${$((r + t) / 2)},${i} ${r},${i}`, et = (t, e, r, i) => ` C${t},${$((i + e) / 2)} ${r},${$((i + e) / 2)} ${r},${i}`, tt = (t, e, r, i) => {
  let a = `M${e[0]},${r[0]}`;
  for (let s = 0; s < e.length - 1; s++)
    a += xe(e[s], r[s], e[s + 1], r[s + 1]);
  a += ` L${[...e].pop()},${[...i].pop()}`;
  for (let s = e.length - 1; s > 0; s--)
    a += xe(e[s], i[s], e[s - 1], i[s - 1]);
  return a += " Z", a;
}, rt = (t, e, r, i) => {
  let a = `M${e[0]},${i[0]}`;
  for (let s = 0; s < e.length - 1; s++)
    a += et(e[s], i[s], e[s + 1], i[s + 1]);
  a += ` L${[...r].pop()},${[...i].pop()}`;
  for (let s = e.length - 1; s > 0; s--)
    a += et(r[s], i[s], r[s - 1], i[s - 1]);
  return a += " Z", a;
}, B = (t, e) => {
  typeof e == "object" && Object.keys(e).forEach((r) => {
    t.setAttribute(r, e[r]);
  });
}, Jr = (t, ...e) => {
  e.forEach((r) => {
    t.removeAttribute(r);
  });
}, se = (t, e, r) => {
  const i = document.createElementNS("http://www.w3.org/2000/svg", t);
  return typeof r == "object" && B(i, r), typeof e < "u" && e.appendChild(i), i;
}, dt = (t, e = "horizontal") => typeof t == "string" ? `background-color: ${t}` : t.length === 1 ? `background-color: ${t[0]}` : `background-image: linear-gradient(${e === "horizontal" ? "to right, " : ""}${t.join(", ")})`, Yr = [
  "#FF4589",
  "#FF5050",
  "#05DF9D",
  "#4FF2FD",
  "#2D9CDB",
  "#A0BBFF",
  "#FFD76F",
  "#F2C94C",
  "#FF9A9A",
  "#FFB178"
], oe = (t) => {
  const e = [...Yr], r = [];
  for (let i = 0; i < t; i++) {
    const a = Math.abs(Math.round(Math.random() * (e.length - 1)));
    r.push(e[a]), e.splice(a, 1);
  }
  return r;
}, Xr = (t) => Math.random().toString(36).replace("0.", t || "");
let xr = class Q {
  constructor(e) {
    this.containerSelector = e.container, this.gradientDirection = e.gradientDirection && e.gradientDirection === "vertical" ? "vertical" : "horizontal", this.direction = e.direction && e.direction === "vertical" ? "vertical" : "horizontal", this.labels = Q.getLabels(e), this.subLabels = Q.getSubLabels(e), this.values = Q.getValues(e), this.percentages = this.createPercentages(), this.colors = e.data.colors || oe(this.is2d() ? this.getSubDataSize() : 2), this.displayPercent = e.displayPercent || !1, this.data = e.data, this.height = e.height, this.width = e.width, this.subLabelValue = e.subLabelValue || "percent";
  }
  /**
  An example of a two-dimensional funnel graph
  #0..................
                     ...#1................
                                         ......
  #0********************#1**                    #2.........................#3 (A)
                            *******************
                                                #2*************************#3 (B)
                                                #2+++++++++++++++++++++++++#3 (C)
                            +++++++++++++++++++
  #0++++++++++++++++++++#1++                    #2-------------------------#3 (D)
                                         ------
                     ---#1----------------
  #0-----------------
   Main axis is the primary axis of the graph.
   In a horizontal graph it's the X axis, and Y is the cross axis.
   However we use the names "main" and "cross" axis,
   because in a vertical graph the primary axis is the Y axis
   and the cross axis is the X axis.
   First step of drawing the funnel graph is getting the coordinates of points,
   that are used when drawing the paths.
   There are 4 paths in the example above: A, B, C and D.
   Such funnel has 3 labels and 3 subLabels.
   This means that the main axis has 4 points (number of labels + 1)
   One the ASCII illustrated graph above, those points are illustrated with a # symbol.
  */
  getMainAxisPoints() {
    const e = this.getDataSize(), r = [], i = this.isVertical() ? this.getHeight() : this.getWidth();
    for (let a = 0; a <= e; a++)
      r.push($(i * a / e));
    return r;
  }
  getCrossAxisPoints() {
    const e = [], r = this.getFullDimension(), i = r / 2;
    if (this.is2d()) {
      const a = this.getValues2d(), s = Math.max(...a);
      a.push([...a].pop()), e.push(a.map((u) => $((s - u) / s * i)));
      const n = this.getPercentages2d(), o = e[0];
      for (let u = 1; u < this.getSubDataSize(); u++) {
        const c = e[u - 1], h = [];
        for (let l = 0; l < this.getDataSize(); l++)
          h.push($(
            // eslint-disable-next-line comma-dangle
            c[l] + (r - o[l] * 2) * (n[l][u - 1] / 100)
          ));
        h.push([...h].pop()), e.push(h);
      }
      e.push(o.map((u) => r - u));
    } else {
      const a = Math.max(...this.values), s = [...this.values].concat([...this.values].pop());
      e.push(s.map((n) => $((a - n) / a * i))), e.push(e[0].map((n) => r - n));
    }
    return e;
  }
  getGraphType() {
    return this.values && this.values[0] instanceof Array ? "2d" : "normal";
  }
  is2d() {
    return this.getGraphType() === "2d";
  }
  isVertical() {
    return this.direction === "vertical";
  }
  getDataSize() {
    return this.values.length;
  }
  getSubDataSize() {
    return this.values[0].length;
  }
  getFullDimension() {
    return this.isVertical() ? this.getWidth() : this.getHeight();
  }
  static getSubLabels(e) {
    if (!e.data)
      throw new Error("Data is missing");
    const { data: r } = e;
    return typeof r.subLabels > "u" ? [] : r.subLabels;
  }
  static getLabels(e) {
    if (!e.data)
      throw new Error("Data is missing");
    const { data: r } = e;
    return typeof r.labels > "u" ? [] : r.labels;
  }
  addLabels() {
    const e = document.createElement("div");
    e.setAttribute("class", "svg-funnel-js__labels"), this.percentages.forEach((r, i) => {
      const a = document.createElement("div");
      a.setAttribute("class", `svg-funnel-js__label label-${i + 1}`);
      const s = document.createElement("div");
      s.setAttribute("class", "label__title"), s.textContent = this.labels[i] || "";
      const n = document.createElement("div");
      n.setAttribute("class", "label__value");
      const o = this.is2d() ? this.getValues2d()[i] : this.values[i];
      n.textContent = ne(o);
      const u = document.createElement("div");
      if (u.setAttribute("class", "label__percentage"), u.textContent = `${r.toString()}%`, a.appendChild(n), a.appendChild(s), this.displayPercent && a.appendChild(u), this.is2d()) {
        const c = document.createElement("div");
        c.setAttribute("class", "label__segment-percentages");
        let h = '<ul class="segment-percentage__list">';
        const l = this.getPercentages2d();
        this.subLabels.forEach((d, f) => {
          const g = this.subLabelValue === "percent" ? `${l[i][f]}%` : ne(this.values[i][f]);
          h += `<li>${this.subLabels[f]}:
    <span class="percentage__list-label">${g}</span>
 </li>`;
        }), h += "</ul>", c.innerHTML = h, a.appendChild(c);
      }
      e.appendChild(a);
    }), this.container.appendChild(e);
  }
  addSubLabels() {
    if (this.subLabels) {
      const e = document.createElement("div");
      e.setAttribute("class", "svg-funnel-js__subLabels");
      let r = "";
      this.subLabels.forEach((i, a) => {
        r += `<div class="svg-funnel-js__subLabel svg-funnel-js__subLabel-${a + 1}">
    <div class="svg-funnel-js__subLabel--color"
        style="${dt(this.colors[a], this.gradientDirection)}"></div>
    <div class="svg-funnel-js__subLabel--title">${i}</div>
</div>`;
      }), e.innerHTML = r, this.container.appendChild(e);
    }
  }
  createContainer() {
    if (!this.containerSelector)
      throw new Error("Container is missing");
    if (typeof this.containerSelector == "string") {
      if (this.container = document.querySelector(this.containerSelector), !this.container)
        throw new Error(`Container cannot be found (selector: ${this.containerSelector}).`);
    } else if (this.container instanceof HTMLElement)
      this.container = this.containerSelector;
    else
      throw new Error("Container must either be a selector string or an HTMLElement.");
    this.container.classList.add("svg-funnel-js"), this.graphContainer = document.createElement("div"), this.graphContainer.classList.add("svg-funnel-js__container"), this.container.appendChild(this.graphContainer), this.direction === "vertical" && this.container.classList.add("svg-funnel-js--vertical");
  }
  setValues(e) {
    return this.values = e, this;
  }
  setDirection(e) {
    return this.direction = e, this;
  }
  setHeight(e) {
    return this.height = e, this;
  }
  setWidth(e) {
    return this.width = e, this;
  }
  static getValues(e) {
    if (!e.data)
      return [];
    const { data: r } = e;
    return typeof r == "object" ? r.values : [];
  }
  getValues2d() {
    const e = [];
    return this.values.forEach((r) => {
      e.push(r.reduce((i, a) => i + a, 0));
    }), e;
  }
  getPercentages2d() {
    const e = [];
    return this.values.forEach((r) => {
      const i = r.reduce((a, s) => a + s, 0);
      e.push(r.map((a) => i === 0 ? 0 : $(a * 100 / i)));
    }), e;
  }
  createPercentages() {
    let e = [];
    this.is2d() ? e = this.getValues2d() : e = [...this.values];
    const r = Math.max(...e);
    return e.map((i) => i === 0 ? 0 : $(i * 100 / r));
  }
  applyGradient(e, r, i, a) {
    const s = e.querySelector("defs") === null ? se("defs", e) : e.querySelector("defs"), n = Xr(`funnelGradient-${a}-`), o = se("linearGradient", s, {
      id: n
    });
    this.gradientDirection === "vertical" && B(o, {
      x1: "0",
      x2: "0",
      y1: "0",
      y2: "1"
    });
    const u = i.length;
    for (let c = 0; c < u; c++)
      se("stop", o, {
        "stop-color": i[c],
        offset: `${Math.round(100 * c / (u - 1))}%`
      });
    B(r, {
      fill: `url("#${n}")`,
      stroke: `url("#${n}")`
    });
  }
  makeSVG() {
    const e = se("svg", this.graphContainer, {
      width: this.getWidth(),
      height: this.getHeight()
    }), r = this.getCrossAxisPoints().length - 1;
    for (let i = 0; i < r; i++) {
      const a = se("path", e), s = this.is2d() ? this.colors[i] : this.colors, n = typeof s == "string" || s.length === 1 ? "solid" : "gradient";
      n === "solid" ? B(a, {
        fill: s,
        stroke: s
      }) : n === "gradient" && this.applyGradient(e, a, s, i + 1), e.appendChild(a);
    }
    this.graphContainer.appendChild(e);
  }
  getSVG() {
    const e = this.container.querySelector("svg");
    if (!e)
      throw new Error("No SVG found inside of the container");
    return e;
  }
  getWidth() {
    return this.width || this.graphContainer.clientWidth;
  }
  getHeight() {
    return this.height || this.graphContainer.clientHeight;
  }
  getPathDefinitions() {
    const e = this.getCrossAxisPoints().length - 1, r = [];
    for (let i = 0; i < e; i++)
      if (this.isVertical()) {
        const a = this.getCrossAxisPoints()[i], s = this.getCrossAxisPoints()[i + 1], n = this.getMainAxisPoints(), o = rt(i, a, s, n);
        r.push(o);
      } else {
        const a = this.getMainAxisPoints(), s = this.getCrossAxisPoints()[i], n = this.getCrossAxisPoints()[i + 1], o = tt(i, a, s, n);
        r.push(o);
      }
    return r;
  }
  getPathMedian(e) {
    if (this.isVertical()) {
      const o = this.getCrossAxisPoints()[e], u = this.getCrossAxisPoints()[e + 1], c = this.getMainAxisPoints(), h = [], l = [];
      return o.forEach((d, f) => {
        const g = (d + u[f]) / 2;
        h.push(g - 1), l.push(g + 1);
      }), rt(e, h, l, c);
    }
    const r = this.getMainAxisPoints(), i = this.getCrossAxisPoints()[e], a = this.getCrossAxisPoints()[e + 1], s = [], n = [];
    return i.forEach((o, u) => {
      const c = (o + a[u]) / 2;
      s.push(c - 1), n.push(c + 1);
    }), tt(e, r, s, n);
  }
  drawPaths() {
    const r = this.getSVG().querySelectorAll("path");
    this.getPathDefinitions().forEach((a, s) => {
      r[s].setAttribute("d", a);
    });
  }
  draw() {
    this.createContainer(), this.makeSVG(), this.addLabels(), this.is2d() && this.addSubLabels(), this.drawPaths();
  }
  /*
      Methods
   */
  makeVertical() {
    if (this.direction === "vertical")
      return !0;
    this.direction = "vertical", this.container.classList.add("svg-funnel-js--vertical");
    const e = this.getSVG(), r = this.getHeight(), i = this.getWidth();
    return B(e, { height: r, width: i }), this.drawPaths(), !0;
  }
  makeHorizontal() {
    if (this.direction === "horizontal")
      return !0;
    this.direction = "horizontal", this.container.classList.remove("svg-funnel-js--vertical");
    const e = this.getSVG(), r = this.getHeight(), i = this.getWidth();
    return B(e, { height: r, width: i }), this.drawPaths(), !0;
  }
  toggleDirection() {
    this.direction === "horizontal" ? this.makeVertical() : this.makeHorizontal();
  }
  gradientMakeVertical() {
    if (this.gradientDirection === "vertical")
      return !0;
    this.gradientDirection = "vertical";
    const e = this.graphContainer.querySelectorAll("linearGradient");
    for (let r = 0; r < e.length; r++)
      B(e[r], {
        x1: "0",
        x2: "0",
        y1: "0",
        y2: "1"
      });
    return !0;
  }
  gradientMakeHorizontal() {
    if (this.gradientDirection === "horizontal")
      return !0;
    this.gradientDirection = "horizontal";
    const e = this.graphContainer.querySelectorAll("linearGradient");
    for (let r = 0; r < e.length; r++)
      Jr(e[r], "x1", "x2", "y1", "y2");
    return !0;
  }
  gradientToggleDirection() {
    this.gradientDirection === "horizontal" ? this.gradientMakeVertical() : this.gradientMakeHorizontal();
  }
  updateWidth(e) {
    this.width = e;
    const r = this.getSVG(), i = this.getWidth();
    return B(r, { width: i }), this.drawPaths(), !0;
  }
  updateHeight(e) {
    this.height = e;
    const r = this.getSVG(), i = this.getHeight();
    return B(r, { height: i }), this.drawPaths(), !0;
  }
  // @TODO: refactor data update
  updateData(e) {
    const r = this.container.querySelector(".svg-funnel-js__labels"), i = this.container.querySelector(".svg-funnel-js__subLabels");
    r && r.remove(), i && i.remove(), this.labels = [], this.colors = oe(this.is2d() ? this.getSubDataSize() : 2), this.values = [], this.percentages = [], typeof e.labels < "u" && (this.labels = Q.getLabels({ data: e })), typeof e.colors < "u" && (this.colors = e.colors || oe(this.is2d() ? this.getSubDataSize() : 2)), typeof e.values < "u" && (Object.prototype.toString.call(e.values[0]) !== Object.prototype.toString.call(this.values[0]) ? (this.container.querySelector("svg").remove(), this.values = Q.getValues({ data: e }), this.makeSVG()) : this.values = Q.getValues({ data: e }), this.drawPaths()), this.percentages = this.createPercentages(), this.addLabels(), typeof e.subLabels < "u" && (this.subLabels = Q.getSubLabels({ data: e }), this.addSubLabels());
  }
  update(e) {
    typeof e.displayPercent < "u" && this.displayPercent !== e.displayPercent && (this.displayPercent === !0 ? this.container.querySelectorAll(".label__percentage").forEach((r) => {
      r.remove();
    }) : this.container.querySelectorAll(".svg-funnel-js__label").forEach((r, i) => {
      const a = this.percentages[i], s = document.createElement("div");
      s.setAttribute("class", "label__percentage"), a !== 100 && (s.textContent = `${a.toString()}%`, r.appendChild(s));
    })), typeof e.height < "u" && this.updateHeight(e.height), typeof e.width < "u" && this.updateWidth(e.width), typeof e.gradientDirection < "u" && (e.gradientDirection === "vertical" ? this.gradientMakeVertical() : e.gradientDirection === "horizontal" && this.gradientMakeHorizontal()), typeof e.direction < "u" && (e.direction === "vertical" ? this.makeVertical() : e.direction === "horizontal" && this.makeHorizontal()), typeof e.data < "u" && this.updateData(e.data);
  }
};
const ei = {
  name: "VueFunnelGraph",
  props: {
    animated: {
      type: Boolean,
      default: !1
    },
    width: [String, Number],
    height: [String, Number],
    values: Array,
    labels: Array,
    colors: {
      type: Array,
      default() {
        return [];
      }
    },
    subLabels: Array,
    subLabelValue: {
      type: String,
      default: "percent"
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    gradientDirection: {
      type: String,
      default: "horizontal"
    },
    displayPercentage: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      paths: [],
      prevPaths: [],
      // paths before update, used for animations
      graph: null,
      tween: null,
      defaultColors: oe(10)
    };
  },
  computed: {
    valuesFormatted() {
      return this.graph.is2d() ? this.graph.getValues2d().map((t) => ne(t)) : this.values.map((t) => ne(t));
    },
    colorSet() {
      const t = [];
      let e = 0;
      for (let r = 0; r < this.paths.length; r++) {
        const i = this.graph.is2d() ? this.getColors[r] : this.getColors, a = typeof i == "string" || i.length === 1 ? "solid" : "gradient";
        a === "gradient" && (e += 1), t.push({
          values: i,
          fillMode: a,
          fill: a === "solid" ? i : `url('#funnelGradient-${e}')`
        });
      }
      return t;
    },
    gradientSet() {
      const t = [];
      return this.colorSet.forEach((e) => {
        e.fillMode === "gradient" && t.push(e);
      }), t;
    },
    getColors() {
      return this.colors instanceof Array && this.colors.length === 0 ? oe(this.is2d() ? this.values[0].length : 2) : this.colors.length < this.paths.length ? [...this.colors].concat(
        [...this.defaultColors].splice(this.paths.length, this.paths.length - this.colors.length)
      ) : this.colors;
    },
    gradientAngle() {
      return `rotate(${this.gradientDirection === "vertical" ? 90 : 0})`;
    }
  },
  methods: {
    enterTransition(t, e) {
      this.animated || e(), setTimeout(() => e(), 700);
    },
    leaveTransition(t, e) {
      this.animated || e(), setTimeout(() => e(), 700);
    },
    is2d() {
      return this.graph.is2d();
    },
    percentages() {
      return this.graph.createPercentages();
    },
    twoDimPercentages() {
      return this.is2d() ? this.graph.getPercentages2d() : [];
    },
    subLabelBackgrounds(t) {
      return this.is2d() ? dt(this.getColors[t], this.gradientDirection) : [];
    },
    offsetColor(t, e) {
      return `${Math.round(100 * t / (e - 1))}%`;
    },
    makeAnimations() {
      this.tween !== null && this.tween.stop();
      const t = [], e = this.prevPaths.length !== this.paths.length;
      let r = { x: 0.5, y: 0.5 };
      e && (r = { x: 0, y: 0.5 }, this.graph.isVertical() && (r = { x: 1, y: 1 }), this.graph.is2d() || (r = { x: 0, y: 1 })), this.paths.forEach((s, n) => {
        let o = this.prevPaths[n] || this.graph.getPathMedian(n);
        e && (o = this.graph.getPathMedian(n));
        const u = Ur([o, s], {
          addPoints: 1,
          origin: r,
          optimize: "fill",
          precision: 1
        });
        t.push(u);
      });
      function i() {
        Se.update() && requestAnimationFrame(i);
      }
      const a = { value: 0 };
      this.tween = new Se.Tween(a).to({ value: 1 }, 700).easing(Se.Easing.Cubic.InOut).onUpdate(() => {
        for (let s = 0; s < this.paths.length; s++)
          this.$set(this.paths, s, t[s](a.value));
      }), this.tween.start(), i();
    },
    drawPaths() {
      this.prevPaths = this.paths, this.paths = [], this.graph.getPathDefinitions().forEach((e) => {
        this.paths.push(e);
      });
    },
    format(t) {
      return ne(t);
    }
  },
  created() {
    this.graph = new xr({
      height: this.height,
      width: this.width,
      direction: this.direction,
      data: {
        labels: this.labels,
        values: this.values
      }
    }), this.drawPaths(), this.animated && this.makeAnimations();
  },
  watch: {
    values() {
      this.graph.setValues(this.values), this.drawPaths(), this.animated && this.makeAnimations();
    },
    direction() {
      this.graph.setDirection(this.direction).setWidth(this.width).setHeight(this.height), this.drawPaths();
    }
  }
}, ti = { class: "svg-funnel-js__container" }, ri = ["width", "height"], ii = ["id", "gradientTransform"], ai = ["stop-color", "offset"], si = ["fill", "stroke", "d"], ni = { class: "label__value" }, oi = {
  key: 0,
  class: "label__title"
}, li = {
  key: 1,
  class: "label__percentage"
}, ui = {
  key: 2,
  class: "label__segment-percentages"
}, ci = { class: "segment-percentage__list" }, hi = {
  key: 0,
  class: "percentage__list-label"
}, di = {
  key: 1,
  class: "percentage__list-label"
}, fi = {
  key: 0,
  class: "svg-funnel-js__subLabels"
}, vi = { class: "svg-funnel-js__subLabel--title" };
function _i(t, e, r, i, a, s) {
  return _(), m("div", {
    class: H(["funnel svg-funnel-js", { "svg-funnel-js--vertical": r.direction === "vertical" }])
  }, [
    X("div", ti, [
      (_(), m("svg", {
        width: r.width,
        height: r.height
      }, [
        X("defs", null, [
          (_(!0), m(T, null, W(s.gradientSet, (n, o) => (_(), m("linearGradient", {
            id: `funnelGradient-${o + 1}`,
            key: o,
            gradientTransform: s.gradientAngle
          }, [
            (_(!0), m(T, null, W(n.values, (u, c) => (_(), m("stop", {
              "stop-color": u,
              offset: s.offsetColor(c, n.values.length),
              key: c
            }, null, 8, ai))), 128))
          ], 8, ii))), 128))
        ]),
        (_(!0), m(T, null, W(a.paths, (n, o) => (_(), m("path", {
          fill: s.colorSet[o].fill,
          stroke: s.colorSet[o].fill,
          d: n,
          key: o
        }, null, 8, si))), 128))
      ], 8, ri))
    ]),
    p(pt, {
      class: "svg-funnel-js__labels",
      name: "appear",
      tag: "div",
      onEnter: s.enterTransition,
      onLeave: s.leaveTransition
    }, {
      default: b(() => [
        (_(!0), m(T, null, W(s.valuesFormatted, (n, o) => (_(), m("div", {
          class: H(["svg-funnel-js__label", `label-${o + 1}`]),
          key: r.labels[o].toLowerCase().split(" ").join("-")
        }, [
          X("div", ni, y(n), 1),
          r.labels ? (_(), m("div", oi, y(r.labels[o]), 1)) : q("", !0),
          r.displayPercentage && s.percentages()[o] !== 100 ? (_(), m("div", li, y(s.percentages()[o]) + "% ", 1)) : q("", !0),
          s.is2d() ? (_(), m("div", ui, [
            X("ul", ci, [
              (_(!0), m(T, null, W(r.subLabels, (u, c) => (_(), m("li", { key: c }, [
                w(y(u) + ": ", 1),
                r.subLabelValue === "percent" ? (_(), m("span", hi, y(s.twoDimPercentages()[o][c]) + "%", 1)) : (_(), m("span", di, y(s.format(r.values[o][c])), 1))
              ]))), 128))
            ])
          ])) : q("", !0)
        ], 2))), 128))
      ]),
      _: 1
    }, 8, ["onEnter", "onLeave"]),
    p(bt, {
      name: "fade",
      onEnter: s.enterTransition,
      onLeave: s.leaveTransition
    }, {
      default: b(() => [
        s.is2d() ? (_(), m("div", fi, [
          (_(!0), m(T, null, W(r.subLabels, (n, o) => (_(), m("div", {
            class: H(`svg-funnel-js__subLabel svg-funnel-js__subLabel-${o + 1}`),
            key: o
          }, [
            X("div", {
              class: "svg-funnel-js__subLabel--color",
              style: we(s.subLabelBackgrounds(o))
            }, null, 4),
            X("div", vi, y(n), 1)
          ], 2))), 128))
        ])) : q("", !0)
      ]),
      _: 1
    }, 8, ["onEnter", "onLeave"])
  ], 2);
}
const ji = /* @__PURE__ */ ce(ei, [["render", _i], ["__scopeId", "data-v-07cd7986"]]);
export {
  Vi as Avatar,
  Mi as ComparisonKpiCard,
  Ti as Dot,
  ji as FunnelGraph,
  Ee as Icon,
  Li as KpiCard,
  ki as KpiDistributionTable,
  Ui as LineBarChart,
  st as Loader,
  Dt as ProgressBar
};
