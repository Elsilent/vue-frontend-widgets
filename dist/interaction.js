import { B as J, D as ne, I as we } from "./Input-8e3a6104.js";
import { defineComponent as K, toRefs as W, computed as m, openBlock as y, createBlock as S, withCtx as h, createVNode as _, withModifiers as $, createElementBlock as j, Fragment as G, renderList as q, createTextVNode as N, toDisplayString as U, createCommentVNode as ge, normalizeClass as Y, unref as g, ref as O, watch as le, reactive as Ve, inject as te, h as Ce, getCurrentInstance as Ie, watchEffect as Se, renderSlot as oe, createElementVNode as re, normalizeStyle as xe, withDirectives as Le, vModelText as De } from "vue";
import { D, a as Oe } from "./datetime-31a2b505.js";
import { A, I as Ae } from "./Icon-8f2ed8ba.js";
import { G as Ee } from "./Grid-f3d84a6a.js";
import { I as R } from "./Info-54758b60.js";
import { dateFormat as V, normalizeRange as Re, tryRangeFromDisplayFormat as Pe, rangeToDisplayFormat as Fe, rangeFromPreset as se } from "./utils/date.js";
import { m as Be } from "./match-b8889c93.js";
import { _ as H } from "./_plugin-vue_export-helper-dad06003.js";
import { P as Te } from "./Popover-38d3223e.js";
import { sort as ee } from "./utils/sort.js";
import { P as kt, T as bt } from "./Toast-b8a89e8e.js";
import "./utils/error.js";
const Ne = 7 * 6, $e = /* @__PURE__ */ K({
  __name: "Calendar",
  props: {
    minDate: { default: "2020-01-01" },
    mode: {},
    monthLabels: {},
    range: {},
    weekLabels: {},
    yearMonth: {}
  },
  emits: ["update:range", "update:yearMonth"],
  setup(e, { emit: t }) {
    const s = e, l = D.now(), d = l.year, { minDate: n, mode: k, monthLabels: w, range: c, weekLabels: f, yearMonth: I } = W(s), C = m(
      () => D.fromFormat(I.value, V.yearMonth).month - 1
    ), x = m(() => D.fromFormat(I.value, V.yearMonth).year), P = m(
      () => w.value.reduce((r, p, M) => (r[M] = p, r), {})
    ), F = m(() => D.fromFormat(c.value[1], V.yearMonthDay)), L = m(() => D.fromFormat(c.value[0], V.yearMonthDay)), B = m(
      () => f != null && f.value ? Array.apply(null, Array(7)).map((r, p) => f.value[p] ?? "") : void 0
    ), T = m(() => {
      const r = D.fromFormat(n.value, V.yearMonthDay).year;
      return new Array(d - r + 1).fill(0).reduce((p, M, Me) => {
        const ae = r + Me;
        return p[ae] = ae.toString(), p;
      }, {});
    }), b = m(
      () => D.fromFormat(I.value, V.yearMonth).startOf("month")
    ), z = m(() => {
      const r = b.value.startOf("week");
      return b.value.hasSame(r, "day") ? b.value.minus(
        Oe.fromObject({
          weeks: 1
        })
      ) : r;
    }), v = m(
      () => new Array(Ne).fill(0).map(
        (r, p) => z.value.plus({
          days: p
        })
      )
    ), u = (r) => r.hasSame(b.value, "month"), a = (r) => ({
      "in-range": r >= L.value && r <= F.value,
      now: l.hasSame(r, "day"),
      "range-end": r.hasSame(F.value, "day"),
      "range-start": r.hasSame(L.value, "day"),
      "this-month": u(r)
    }), o = (r) => l.hasSame(r, "day") ? "important" : u(r) && r >= L.value && r <= F.value ? "accent" : "neutral", i = m(() => b.value.endOf("month") < l), E = m(
      () => D.fromFormat(n.value, V.yearMonthDay).startOf("month") < b.value
    ), X = () => {
      const r = b.value.month;
      Z(r < 12 ? r : 0, r < 12 ? void 0 : b.value.year + 1);
    }, _e = () => {
      const r = b.value.month - 2;
      Z(r >= 0 ? r : 11, r >= 0 ? void 0 : b.value.year - 1);
    }, Z = (r, p) => {
      const M = b.value.set({
        year: p,
        month: parseInt(r) + 1
      }).toFormat(V.yearMonth);
      t("update:yearMonth", M);
    }, ke = (r) => {
      const p = Be(k.value).when("end", () => [c.value[0], r.toFormat(V.yearMonthDay)]).when("start", () => [r.toFormat(V.yearMonthDay), c.value[1]]).done;
      t("update:range", Re(p));
    }, be = (r) => {
      const p = b.value.set({
        year: parseInt(r)
      }).toFormat(V.yearMonth);
      t("update:yearMonth", p);
    };
    return (r, p) => (y(), S(A, {
      class: "calendar",
      column: ""
    }, {
      default: h(() => [
        _(A, { class: "header" }, {
          default: h(() => [
            _(J, {
              class: "month-picker",
              onClick: p[0] || (p[0] = $(() => _e(), ["stop"])),
              disabled: !E.value,
              icon: "chevron-left",
              mood: "neutral",
              outline: "",
              size: "large-4"
            }, null, 8, ["disabled"]),
            _(ne, {
              class: "flex-max spacing-small",
              "onUpdate:modelValue": p[1] || (p[1] = (M) => Z(M)),
              items: P.value,
              modelValue: C.value,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            _(ne, {
              class: "spacing-small",
              "onUpdate:modelValue": p[2] || (p[2] = (M) => be(M)),
              items: T.value,
              modelValue: x.value,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            _(J, {
              class: "month-picker spacing-small",
              onClick: p[3] || (p[3] = $(() => X(), ["stop"])),
              disabled: !i.value,
              icon: "chevron-right",
              mood: "neutral",
              outline: "",
              size: "large-4"
            }, null, 8, ["disabled"])
          ]),
          _: 1
        }),
        _(A, {
          class: "calendar-grid-container flex-max",
          horizontal: "center",
          vertical: "center"
        }, {
          default: h(() => [
            _(Ee, {
              class: "calendar-grid no-spacing",
              columns: 7
            }, {
              default: h(() => [
                B.value ? (y(!0), j(G, { key: 0 }, q(B.value, (M) => (y(), S(R, {
                  class: "week-label",
                  important: ""
                }, {
                  default: h(() => [
                    N(U(M), 1)
                  ]),
                  _: 2
                }, 1024))), 256)) : ge("", !0),
                (y(!0), j(G, null, q(v.value, (M) => (y(), S(J, {
                  class: Y(["day", a(M)]),
                  onClick: $(() => ke(M), ["stop"]),
                  disabled: M > g(l),
                  label: M.day.toString(),
                  mood: o(M),
                  outline: o(M) === "neutral"
                }, null, 8, ["onClick", "class", "disabled", "label", "mood", "outline"]))), 256))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
const ue = /* @__PURE__ */ H($e, [["__scopeId", "data-v-e0ea2f05"]]), je = /* @__PURE__ */ K({
  __name: "DateRangePicker",
  props: {
    dateRangePresets: {},
    disabled: { type: Boolean, default: !1 },
    modelValue: {},
    monthLabels: {},
    translator: {},
    weekLabels: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, { dateRangePresets: l, disabled: d, modelValue: n } = W(s), k = O(!1), w = O(), c = O(), f = (a) => {
      const o = D.fromFormat(a[0], V.yearMonthDay), i = D.fromFormat(a[1], V.yearMonthDay), E = o.toFormat(V.yearMonth), X = o.hasSame(i, "month") && i.endOf("month") < D.now() ? i.plus({ month: 1 }).toFormat(V.yearMonth) : i.toFormat(V.yearMonth);
      return [E, X];
    }, I = () => Fe(n.value), C = O(I()), x = (a) => {
      const o = f(a);
      v.value = o[0], u.value = o[1];
    }, P = () => {
      var a;
      k.value || d.value || (k.value = !0, x(n.value), (a = c.value) == null || a.$el.focus());
    }, F = (a) => {
      const [o, i] = se(a);
      return o === n.value[0] && i === n.value[1];
    }, L = O("start"), B = (a) => {
      t("update:modelValue", a), L.value === "start" ? L.value = "end" : T();
    };
    le(n, () => {
      C.value = I();
    });
    const T = (a) => {
      var o, i, E;
      if (!a || !((o = w.value) != null && o.$el.contains(a.relatedTarget))) {
        k.value = !1, L.value = "start", (i = c.value) == null || i.$el.blur();
        return;
      }
      (E = c.value) == null || E.$el.focus();
    }, b = (a) => {
      const o = se(l.value[a]);
      t("update:modelValue", o), x(o), T();
    }, z = f(n.value), v = O(z[0]), u = O(z[1]);
    return le(C, (a) => {
      const o = Pe(a);
      o && t("update:modelValue", o);
    }), (a, o) => (y(), S(A, {
      class: "date-range-picker",
      onClick: o[6] || (o[6] = () => P()),
      ref_key: "dateRangePicker",
      ref: w,
      tabindex: "-1"
    }, {
      default: h(() => [
        _(we, {
          ref_key: "dateRangePickerInput",
          ref: c,
          modelValue: C.value,
          "onUpdate:modelValue": o[0] || (o[0] = (i) => C.value = i),
          onBlur: o[1] || (o[1] = (i) => T(i)),
          disabled: g(d)
        }, null, 8, ["modelValue", "disabled"]),
        _(J, {
          class: "no-spacing",
          disabled: g(d),
          icon: "calendar",
          mood: "inactive"
        }, null, 8, ["disabled"]),
        _(Te, {
          class: "date-range-picker-body no-spacing",
          visible: k.value
        }, {
          default: h(() => [
            _(A, { class: "sections" }, {
              default: h(() => [
                _(A, {
                  class: "presets",
                  column: ""
                }, {
                  default: h(() => [
                    (y(!0), j(G, null, q(g(l), (i, E) => (y(), S(R, {
                      class: Y(["preset", { active: F(i) }]),
                      onClick: $(() => b(E), ["stop"]),
                      size: "small"
                    }, {
                      default: h(() => [
                        N(U(a.translator(i.label)), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick", "class"]))), 256))
                  ]),
                  _: 1
                }),
                _(A, { class: "calendars" }, {
                  default: h(() => [
                    _(ue, {
                      "onUpdate:range": o[2] || (o[2] = (i) => B(i)),
                      yearMonth: v.value,
                      "onUpdate:yearMonth": o[3] || (o[3] = (i) => v.value = i),
                      mode: L.value,
                      monthLabels: a.monthLabels,
                      range: g(n),
                      weekLabels: a.weekLabels
                    }, null, 8, ["yearMonth", "mode", "monthLabels", "range", "weekLabels"]),
                    _(ue, {
                      "onUpdate:range": o[4] || (o[4] = (i) => B(i)),
                      yearMonth: u.value,
                      "onUpdate:yearMonth": o[5] || (o[5] = (i) => u.value = i),
                      mode: L.value,
                      monthLabels: a.monthLabels,
                      range: g(n),
                      weekLabels: a.weekLabels
                    }, null, 8, ["yearMonth", "mode", "monthLabels", "range", "weekLabels"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["visible"])
      ]),
      _: 1
    }, 512));
  }
});
const ft = /* @__PURE__ */ H(je, [["__scopeId", "data-v-47304ce0"]]);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const ze = typeof window < "u", Ue = () => {
}, Q = Array.isArray;
function ce(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Ye(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const s in e)
    if (!Ke(e[s], t[s]))
      return !1;
  return !0;
}
function Ke(e, t) {
  return Q(e) ? ie(e, t) : Q(t) ? ie(t, e) : e === t;
}
function ie(e, t) {
  return Q(t) ? e.length === t.length && e.every((s, l) => s === t[l]) : e.length === 1 && e[0] === t;
}
var de;
(function(e) {
  e.pop = "pop", e.push = "push";
})(de || (de = {}));
var me;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(me || (me = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var ve;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(ve || (ve = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const ye = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Ge = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function fe(e) {
  const t = te(ye), s = te(Ge), l = m(() => t.resolve(g(e.to))), d = m(() => {
    const { matched: c } = l.value, { length: f } = c, I = c[f - 1], C = s.matched;
    if (!I || !C.length)
      return -1;
    const x = C.findIndex(ce.bind(null, I));
    if (x > -1)
      return x;
    const P = pe(c[f - 2]);
    return (
      // we are dealing with nested routes
      f > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      pe(I) === P && // avoid comparing the child with its parent
      C[C.length - 1].path !== P ? C.findIndex(ce.bind(null, c[f - 2])) : x
    );
  }), n = m(() => d.value > -1 && Je(s.params, l.value.params)), k = m(() => d.value > -1 && d.value === s.matched.length - 1 && Ye(s.params, l.value.params));
  function w(c = {}) {
    return He(c) ? t[g(e.replace) ? "replace" : "push"](
      g(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Ue) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && ze) {
    const c = Ie();
    if (c) {
      const f = {
        route: l.value,
        isActive: n.value,
        isExactActive: k.value
      };
      c.__vrl_devtools = c.__vrl_devtools || [], c.__vrl_devtools.push(f), Se(() => {
        f.route = l.value, f.isActive = n.value, f.isExactActive = k.value;
      }, { flush: "post" });
    }
  }
  return {
    route: l,
    href: m(() => l.value.href),
    isActive: n,
    isExactActive: k,
    navigate: w
  };
}
const qe = /* @__PURE__ */ K({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: fe,
  setup(e, { slots: t }) {
    const s = Ve(fe(e)), { options: l } = te(ye), d = m(() => ({
      [he(e.activeClass, l.linkActiveClass, "router-link-active")]: s.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [he(e.exactActiveClass, l.linkExactActiveClass, "router-link-exact-active")]: s.isExactActive
    }));
    return () => {
      const n = t.default && t.default(s);
      return e.custom ? n : Ce("a", {
        "aria-current": s.isExactActive ? e.ariaCurrentValue : null,
        href: s.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: s.navigate,
        class: d.value
      }, n);
    };
  }
}), We = qe;
function He(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function Je(e, t) {
  for (const s in t) {
    const l = t[s], d = e[s];
    if (typeof l == "string") {
      if (l !== d)
        return !1;
    } else if (!Q(d) || d.length !== l.length || l.some((n, k) => n !== d[k]))
      return !1;
  }
  return !0;
}
function pe(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const he = (e, t, s) => e ?? t ?? s, Qe = ["href"], Xe = /* @__PURE__ */ K({
  __name: "Link",
  props: {
    to: {}
  },
  setup(e) {
    const t = e, { to: s } = W(t);
    return (l, d) => typeof g(s) == "string" || "name" in g(s) ? (y(), S(g(We), {
      key: 0,
      class: "link",
      to: g(s)
    }, {
      default: h(() => [
        _(R, { mood: "important-alt" }, {
          default: h(() => [
            oe(l.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["to"])) : (y(), j("a", {
      key: 1,
      class: "link",
      href: g(s).toString()
    }, [
      _(R, { mood: "important-alt" }, {
        default: h(() => [
          oe(l.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ], 8, Qe));
  }
});
const pt = /* @__PURE__ */ H(Xe, [["__scopeId", "data-v-1937b929"]]), Ze = ["disabled"], et = /* @__PURE__ */ K({
  __name: "MultiSelect",
  props: {
    allItemsLabel: {},
    disabled: { type: Boolean, default: !1 },
    items: {},
    modelValue: {},
    noInline: { type: Boolean, default: !1 },
    showAllItemsItem: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, { disabled: l, items: d, modelValue: n } = W(s), k = O(!1), w = O(null), c = O(null), f = O(""), I = m(() => !n || !n.value ? !1 : Object.keys(d.value).every((v) => n.value.includes(v))), C = m(() => Object.values(d.value).sort(ee).join(", ")), x = m(() => (f.value ? Object.entries(d.value).filter(([, u]) => u.toLowerCase().includes(f.value.toLowerCase())).map(([u]) => u) : Object.keys(d.value)).sort(ee).reduce((u, a) => (u[a] = d.value[a], u), {})), P = m(() => !(n != null && n.value) || n.value === void 0 ? 1 : -Object.keys(x.value).indexOf(n.value.toString())), F = m(() => !n || !n.value ? [] : [...n.value].sort(ee)), L = m(() => ({
      "--item-count": Object.keys(x.value).length,
      "--selection-offset": P.value
    })), B = () => {
      var v;
      l.value || (k.value = !0, (v = c.value) == null || v.focus());
    }, T = (v) => {
      var u, a, o;
      if (!((u = w.value) != null && u.$el.contains(v.relatedTarget))) {
        k.value = !1, f.value = "", (a = c.value) == null || a.blur();
        return;
      }
      (o = c.value) == null || o.focus();
    }, b = (v) => {
      if (!(n != null && n.value) || l != null && l.value || !k.value)
        return;
      const u = [...n.value], a = u.indexOf(v);
      a >= 0 ? u.splice(a, 1) : u.push(v), t("update:modelValue", u);
    }, z = (v) => {
      t("update:modelValue", v);
    };
    return (v, u) => (y(), S(A, {
      class: "multiselect-container",
      ref_key: "multiSelectContainer",
      ref: w,
      inline: !v.noInline,
      column: ""
    }, {
      default: h(() => [
        re("div", {
          class: Y(["multiselect", { active: k.value, disabled: g(l) }]),
          onClick: u[3] || (u[3] = () => B()),
          style: xe(L.value),
          tabindex: "-1"
        }, [
          _(A, {
            class: "current-item",
            vertical: "center"
          }, {
            default: h(() => [
              !g(n) || g(n).length === 0 ? (y(), S(R, {
                key: 0,
                class: "default-value"
              }, {
                default: h(() => [
                  N(" ")
                ]),
                _: 1
              })) : (y(), S(A, {
                key: 1,
                class: "current-values",
                wrap: ""
              }, {
                default: h(() => [
                  I.value && v.allItemsLabel ? (y(), S(R, {
                    key: 0,
                    class: "current-value all-items",
                    title: C.value
                  }, {
                    default: h(() => [
                      N(U(v.allItemsLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["title"])) : (y(!0), j(G, { key: 1 }, q(F.value, (a) => (y(), S(R, {
                    class: "current-value no-spacing",
                    onClick: $(() => b(a), ["stop"])
                  }, {
                    default: h(() => [
                      N(U(g(d)[a]), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 256))
                ]),
                _: 1
              })),
              Le(re("input", {
                class: "flex-max new-value-input no-spacing",
                ref_key: "newValueInput",
                ref: c,
                "onUpdate:modelValue": u[0] || (u[0] = (a) => f.value = a),
                onBlur: u[1] || (u[1] = (a) => T(a)),
                disabled: g(l)
              }, null, 40, Ze), [
                [De, f.value]
              ]),
              _(Ae, {
                backend: "boxicons-solid",
                size: "small-2",
                value: "down-arrow"
              })
            ]),
            _: 1
          }),
          _(A, {
            class: "dropdown-menu no-spacing",
            column: ""
          }, {
            default: h(() => [
              v.showAllItemsItem ? (y(), S(R, {
                key: 0,
                class: Y(["item", { current: I.value }]),
                onClick: u[2] || (u[2] = $(() => z(Object.keys(g(d))), ["stop"]))
              }, {
                default: h(() => [
                  N(U(v.allItemsLabel), 1)
                ]),
                _: 1
              }, 8, ["class"])) : ge("", !0),
              (y(!0), j(G, null, q(x.value, (a, o) => {
                var i;
                return y(), S(R, {
                  class: Y(["item no-spacing", { current: (i = g(n)) == null ? void 0 : i.includes(o) }]),
                  onClick: $((E) => b(o), ["stop"])
                }, {
                  default: h(() => [
                    N(U(a), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick", "class"]);
              }), 256))
            ]),
            _: 1
          })
        ], 6)
      ]),
      _: 1
    }, 8, ["inline"]));
  }
});
const ht = /* @__PURE__ */ H(et, [["__scopeId", "data-v-cd08ea4b"]]), tt = /* @__PURE__ */ K({
  __name: "Toggle",
  props: {
    mood: { default: "positive" },
    modelValue: { type: Boolean }
  },
  emits: ["checked", "unchecked", "update:modelValue"],
  setup(e, { emit: t }) {
    const s = e, { modelValue: l, mood: d } = W(s), n = m(() => {
      const w = l.value ? d.value : "inactive";
      return {
        active: l.value,
        [`mood-background-${w}`]: !0,
        [`mood-border-${w}`]: !0
      };
    }), k = () => {
      const w = !l.value;
      t(w ? "checked" : "unchecked"), t("update:modelValue", w);
    };
    return (w, c) => (y(), j("div", {
      class: Y(["toggle", n.value]),
      onClick: c[0] || (c[0] = () => k())
    }, null, 2));
  }
});
const gt = /* @__PURE__ */ H(tt, [["__scopeId", "data-v-49b20089"]]);
export {
  J as Button,
  ue as Calendar,
  ft as DateRangePicker,
  ne as Dropdown,
  we as Input,
  pt as Link,
  ht as MultiSelect,
  kt as PopoverMenu,
  bt as Toast,
  gt as Toggle
};
