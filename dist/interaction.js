import { B as J } from "./PopoverMenu-e192d7d1.js";
import { P as bt } from "./PopoverMenu-e192d7d1.js";
import { defineComponent as U, toRefs as W, computed as m, openBlock as b, createBlock as I, withCtx as h, createVNode as g, withModifiers as z, createElementBlock as $, Fragment as K, renderList as G, createTextVNode as j, toDisplayString as Y, createCommentVNode as Me, normalizeClass as q, unref as y, ref as E, watch as ne, reactive as we, inject as te, h as Ve, getCurrentInstance as Ce, watchEffect as xe, renderSlot as oe, createElementVNode as le, normalizeStyle as Se, withDirectives as De, vModelText as Ie } from "vue";
import { D as O, a as Le } from "./datetime-31a2b505.js";
import { A, I as Oe } from "./Icon-a62eb151.js";
import { D as re, I as Ee } from "./Input-07c967f5.js";
import { G as Ae } from "./Grid-f3d84a6a.js";
import { I as F } from "./Info-54758b60.js";
import { dateFormat as C, normalizeRange as Re, tryRangeFromDisplayFormat as Pe, rangeToDisplayFormat as Fe, rangeFromPreset as se } from "./utils/date.js";
import { m as Be } from "./match-b8889c93.js";
import { _ as H } from "./_plugin-vue_export-helper-dad06003.js";
import { P as Ne } from "./Popover-1f546f1f.js";
import { sort as ee } from "./utils/sort.js";
import "./utils/error.js";
const Te = 7 * 6, $e = /* @__PURE__ */ U({
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
    const r = e, o = O.now(), i = o.year, { minDate: a, mode: _, monthLabels: V, range: u, weekLabels: f, yearMonth: S } = W(r), x = m(
      () => O.fromFormat(S.value, C.yearMonth).month - 1
    ), D = m(() => O.fromFormat(S.value, C.yearMonth).year), R = m(
      () => V.value.reduce((n, p, w) => (n[w] = p, n), {})
    ), B = m(() => O.fromFormat(u.value[1], C.yearMonthDay)), L = m(() => O.fromFormat(u.value[0], C.yearMonthDay)), N = m(
      () => f != null && f.value ? Array.apply(null, Array(7)).map((n, p) => f.value[p] ?? "") : void 0
    ), T = m(() => {
      const n = O.fromFormat(a.value, C.yearMonthDay).year;
      return new Array(i - n + 1).fill(0).reduce((p, w, be) => {
        const ae = n + be;
        return p[ae] = ae.toString(), p;
      }, {});
    }), M = m(
      () => O.fromFormat(S.value, C.yearMonth).startOf("month")
    ), k = m(() => {
      const n = M.value.startOf("week");
      return M.value.hasSame(n, "day") ? M.value.minus(
        Le.fromObject({
          weeks: 1
        })
      ) : n;
    }), c = m(
      () => new Array(Te).fill(0).map(
        (n, p) => k.value.plus({
          days: p
        })
      )
    ), v = (n) => n.hasSame(M.value, "month"), s = (n) => ({
      "in-range": n >= L.value && n <= B.value,
      now: o.hasSame(n, "day"),
      "range-end": n.hasSame(B.value, "day"),
      "range-start": n.hasSame(L.value, "day"),
      "this-month": v(n)
    }), l = (n) => o.hasSame(n, "day") ? "important" : v(n) && n >= L.value && n <= B.value ? "accent" : "neutral", d = m(() => M.value.endOf("month") < o), P = m(
      () => O.fromFormat(a.value, C.yearMonthDay).startOf("month") < M.value
    ), X = () => {
      const n = M.value.month;
      Z(n < 12 ? n : 0, n < 12 ? void 0 : M.value.year + 1);
    }, ye = () => {
      const n = M.value.month - 2;
      Z(n >= 0 ? n : 11, n >= 0 ? void 0 : M.value.year - 1);
    }, Z = (n, p) => {
      const w = M.value.set({
        year: p,
        month: parseInt(n) + 1
      }).toFormat(C.yearMonth);
      t("update:yearMonth", w);
    }, _e = (n) => {
      const p = Be(_.value).when("end", () => [u.value[0], n.toFormat(C.yearMonthDay)]).when("start", () => [n.toFormat(C.yearMonthDay), u.value[1]]).done;
      t("update:range", Re(p));
    }, ke = (n) => {
      const p = M.value.set({
        year: parseInt(n)
      }).toFormat(C.yearMonth);
      t("update:yearMonth", p);
    };
    return (n, p) => (b(), I(A, {
      class: "calendar",
      column: ""
    }, {
      default: h(() => [
        g(A, { class: "header" }, {
          default: h(() => [
            g(J, {
              class: "month-picker",
              onClick: p[0] || (p[0] = z(() => ye(), ["stop"])),
              disabled: !P.value,
              icon: "chevron-left",
              mood: "neutral",
              outline: "",
              size: "large-4"
            }, null, 8, ["disabled"]),
            g(re, {
              class: "flex-max spacing-small",
              "onUpdate:modelValue": p[1] || (p[1] = (w) => Z(w)),
              items: R.value,
              modelValue: x.value,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            g(re, {
              class: "spacing-small",
              "onUpdate:modelValue": p[2] || (p[2] = (w) => ke(w)),
              items: T.value,
              modelValue: D.value,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            g(J, {
              class: "month-picker spacing-small",
              onClick: p[3] || (p[3] = z(() => X(), ["stop"])),
              disabled: !d.value,
              icon: "chevron-right",
              mood: "neutral",
              outline: "",
              size: "large-4"
            }, null, 8, ["disabled"])
          ]),
          _: 1
        }),
        g(A, {
          class: "calendar-grid-container flex-max",
          horizontal: "center",
          vertical: "center"
        }, {
          default: h(() => [
            g(Ae, {
              class: "calendar-grid no-spacing",
              columns: 7
            }, {
              default: h(() => [
                N.value ? (b(!0), $(K, { key: 0 }, G(N.value, (w) => (b(), I(F, {
                  class: "week-label",
                  important: ""
                }, {
                  default: h(() => [
                    j(Y(w), 1)
                  ]),
                  _: 2
                }, 1024))), 256)) : Me("", !0),
                (b(!0), $(K, null, G(c.value, (w) => (b(), I(J, {
                  class: q(["day", s(w)]),
                  onClick: z(() => _e(w), ["stop"]),
                  disabled: w > y(o),
                  label: w.day.toString(),
                  mood: l(w),
                  outline: l(w) === "neutral"
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
const ue = /* @__PURE__ */ H($e, [["__scopeId", "data-v-e0ea2f05"]]), je = /* @__PURE__ */ U({
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
    const r = e, { dateRangePresets: o, disabled: i, modelValue: a } = W(r), _ = E(!1), V = E(), u = E(), f = (s) => {
      const l = O.fromFormat(s[0], C.yearMonthDay), d = O.fromFormat(s[1], C.yearMonthDay), P = l.toFormat(C.yearMonth), X = l.hasSame(d, "month") && d.endOf("month") < O.now() ? d.plus({ month: 1 }).toFormat(C.yearMonth) : d.toFormat(C.yearMonth);
      return [P, X];
    }, S = () => Fe(a.value), x = E(S()), D = (s) => {
      const l = f(s);
      c.value = l[0], v.value = l[1];
    }, R = () => {
      var s;
      _.value || i.value || (_.value = !0, D(a.value), (s = u.value) == null || s.$el.focus());
    }, B = (s) => {
      const [l, d] = se(s);
      return l === a.value[0] && d === a.value[1];
    }, L = E("start"), N = (s) => {
      t("update:modelValue", s), L.value === "start" ? L.value = "end" : T();
    };
    ne(a, () => {
      x.value = S();
    });
    const T = (s) => {
      var l, d, P;
      if (!s || !((l = V.value) != null && l.$el.contains(s.relatedTarget))) {
        _.value = !1, L.value = "start", (d = u.value) == null || d.$el.blur();
        return;
      }
      (P = u.value) == null || P.$el.focus();
    }, M = (s) => {
      const l = se(o.value[s]);
      t("update:modelValue", l), D(l), T();
    }, k = f(a.value), c = E(k[0]), v = E(k[1]);
    return ne(x, (s) => {
      const l = Pe(s);
      l && t("update:modelValue", l);
    }), (s, l) => (b(), I(A, {
      class: "date-range-picker",
      onClick: l[6] || (l[6] = () => R()),
      ref_key: "dateRangePicker",
      ref: V,
      tabindex: "-1"
    }, {
      default: h(() => [
        g(Ee, {
          ref_key: "dateRangePickerInput",
          ref: u,
          modelValue: x.value,
          "onUpdate:modelValue": l[0] || (l[0] = (d) => x.value = d),
          onBlur: l[1] || (l[1] = (d) => T(d)),
          disabled: y(i)
        }, null, 8, ["modelValue", "disabled"]),
        g(J, {
          class: "no-spacing",
          disabled: y(i),
          icon: "calendar",
          mood: "inactive"
        }, null, 8, ["disabled"]),
        g(Ne, {
          class: "date-range-picker-body no-spacing",
          visible: _.value
        }, {
          default: h(() => [
            g(A, { class: "sections" }, {
              default: h(() => [
                g(A, {
                  class: "presets",
                  column: ""
                }, {
                  default: h(() => [
                    (b(!0), $(K, null, G(y(o), (d, P) => (b(), I(F, {
                      class: q(["preset", { active: B(d) }]),
                      onClick: z(() => M(P), ["stop"]),
                      size: "small"
                    }, {
                      default: h(() => [
                        j(Y(s.translator(d.label)), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick", "class"]))), 256))
                  ]),
                  _: 1
                }),
                g(A, { class: "calendars" }, {
                  default: h(() => [
                    g(ue, {
                      "onUpdate:range": l[2] || (l[2] = (d) => N(d)),
                      yearMonth: c.value,
                      "onUpdate:yearMonth": l[3] || (l[3] = (d) => c.value = d),
                      mode: L.value,
                      monthLabels: s.monthLabels,
                      range: y(a),
                      weekLabels: s.weekLabels
                    }, null, 8, ["yearMonth", "mode", "monthLabels", "range", "weekLabels"]),
                    g(ue, {
                      "onUpdate:range": l[4] || (l[4] = (d) => N(d)),
                      yearMonth: v.value,
                      "onUpdate:yearMonth": l[5] || (l[5] = (d) => v.value = d),
                      mode: L.value,
                      monthLabels: s.monthLabels,
                      range: y(a),
                      weekLabels: s.weekLabels
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
const pt = /* @__PURE__ */ H(je, [["__scopeId", "data-v-47304ce0"]]);
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
  for (const r in e)
    if (!Ke(e[r], t[r]))
      return !1;
  return !0;
}
function Ke(e, t) {
  return Q(e) ? ie(e, t) : Q(t) ? ie(t, e) : e === t;
}
function ie(e, t) {
  return Q(t) ? e.length === t.length && e.every((r, o) => r === t[o]) : e.length === 1 && e[0] === t;
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
const ge = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Ge = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function fe(e) {
  const t = te(ge), r = te(Ge), o = m(() => t.resolve(y(e.to))), i = m(() => {
    const { matched: u } = o.value, { length: f } = u, S = u[f - 1], x = r.matched;
    if (!S || !x.length)
      return -1;
    const D = x.findIndex(ce.bind(null, S));
    if (D > -1)
      return D;
    const R = pe(u[f - 2]);
    return (
      // we are dealing with nested routes
      f > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      pe(S) === R && // avoid comparing the child with its parent
      x[x.length - 1].path !== R ? x.findIndex(ce.bind(null, u[f - 2])) : D
    );
  }), a = m(() => i.value > -1 && Je(r.params, o.value.params)), _ = m(() => i.value > -1 && i.value === r.matched.length - 1 && Ye(r.params, o.value.params));
  function V(u = {}) {
    return He(u) ? t[y(e.replace) ? "replace" : "push"](
      y(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(Ue) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && ze) {
    const u = Ce();
    if (u) {
      const f = {
        route: o.value,
        isActive: a.value,
        isExactActive: _.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(f), xe(() => {
        f.route = o.value, f.isActive = a.value, f.isExactActive = _.value;
      }, { flush: "post" });
    }
  }
  return {
    route: o,
    href: m(() => o.value.href),
    isActive: a,
    isExactActive: _,
    navigate: V
  };
}
const qe = /* @__PURE__ */ U({
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
    const r = we(fe(e)), { options: o } = te(ge), i = m(() => ({
      [he(e.activeClass, o.linkActiveClass, "router-link-active")]: r.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [he(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive
    }));
    return () => {
      const a = t.default && t.default(r);
      return e.custom ? a : Ve("a", {
        "aria-current": r.isExactActive ? e.ariaCurrentValue : null,
        href: r.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: r.navigate,
        class: i.value
      }, a);
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
  for (const r in t) {
    const o = t[r], i = e[r];
    if (typeof o == "string") {
      if (o !== i)
        return !1;
    } else if (!Q(i) || i.length !== o.length || o.some((a, _) => a !== i[_]))
      return !1;
  }
  return !0;
}
function pe(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const he = (e, t, r) => e ?? t ?? r, Qe = ["href"], Xe = /* @__PURE__ */ U({
  __name: "Link",
  props: {
    to: {}
  },
  setup(e) {
    const t = e, { to: r } = W(t);
    return (o, i) => typeof y(r) == "string" || "name" in y(r) ? (b(), I(y(We), {
      key: 0,
      class: "link",
      to: y(r)
    }, {
      default: h(() => [
        g(F, { mood: "important-alt" }, {
          default: h(() => [
            oe(o.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["to"])) : (b(), $("a", {
      key: 1,
      class: "link",
      href: y(r).toString()
    }, [
      g(F, { mood: "important-alt" }, {
        default: h(() => [
          oe(o.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ], 8, Qe));
  }
});
const ht = /* @__PURE__ */ H(Xe, [["__scopeId", "data-v-1937b929"]]), Ze = ["disabled"], et = /* @__PURE__ */ U({
  __name: "MultiSelect",
  props: {
    allItemsLabel: {},
    disabled: { type: Boolean, default: !1 },
    items: {},
    modelValue: {},
    noInline: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, { disabled: o, items: i, modelValue: a } = W(r), _ = E(!1), V = E(null), u = E(null), f = E(""), S = m(() => !a || !a.value ? !1 : Object.keys(i.value).every((k) => a.value.includes(k))), x = m(() => Object.values(i.value).sort(ee).join(", ")), D = m(() => (f.value ? Object.entries(i.value).filter(([, c]) => c.toLowerCase().includes(f.value.toLowerCase())).map(([c]) => c) : Object.keys(i.value)).sort(ee).reduce((c, v) => (c[v] = i.value[v], c), {})), R = m(() => !(a != null && a.value) || a.value === void 0 ? 1 : -Object.keys(D.value).indexOf(a.value.toString())), B = m(() => !a || !a.value ? [] : [...a.value].sort(ee)), L = m(() => ({
      "--item-count": Object.keys(D.value).length,
      "--selection-offset": R.value
    })), N = () => {
      var k;
      o.value || (_.value = !0, (k = u.value) == null || k.focus());
    }, T = (k) => {
      var c, v, s;
      if (!((c = V.value) != null && c.$el.contains(k.relatedTarget))) {
        _.value = !1, f.value = "", (v = u.value) == null || v.blur();
        return;
      }
      (s = u.value) == null || s.focus();
    }, M = (k) => {
      if (!a || !a.value || o && o.value || !_.value)
        return;
      const c = [...a.value], v = c.indexOf(k);
      v >= 0 ? c.splice(v, 1) : c.push(k), t("update:modelValue", c);
    };
    return (k, c) => (b(), I(A, {
      class: "multiselect-container",
      ref_key: "multiSelectContainer",
      ref: V,
      inline: !k.noInline,
      column: ""
    }, {
      default: h(() => [
        le("div", {
          class: q(["multiselect", { active: _.value, disabled: y(o) }]),
          onClick: c[2] || (c[2] = () => N()),
          style: Se(L.value),
          tabindex: "-1"
        }, [
          g(A, {
            class: "current-item",
            vertical: "center"
          }, {
            default: h(() => [
              !y(a) || y(a).length === 0 ? (b(), I(F, {
                key: 0,
                class: "default-value"
              }, {
                default: h(() => [
                  j(" ")
                ]),
                _: 1
              })) : (b(), I(A, {
                key: 1,
                class: "current-values",
                wrap: ""
              }, {
                default: h(() => [
                  S.value && k.allItemsLabel ? (b(), I(F, {
                    key: 0,
                    class: "current-value all-items",
                    title: x.value
                  }, {
                    default: h(() => [
                      j(Y(k.allItemsLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["title"])) : (b(!0), $(K, { key: 1 }, G(B.value, (v) => (b(), I(F, {
                    class: "current-value no-spacing",
                    onClick: z(() => M(v), ["stop"])
                  }, {
                    default: h(() => [
                      j(Y(y(i)[v]), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 256))
                ]),
                _: 1
              })),
              De(le("input", {
                class: "flex-max new-value-input no-spacing",
                ref_key: "newValueInput",
                ref: u,
                onBlur: c[0] || (c[0] = (v) => T(v)),
                disabled: y(o),
                "onUpdate:modelValue": c[1] || (c[1] = (v) => f.value = v)
              }, null, 40, Ze), [
                [Ie, f.value]
              ]),
              g(Oe, {
                backend: "boxicons-solid",
                size: "small-2",
                value: "down-arrow"
              })
            ]),
            _: 1
          }),
          g(A, {
            class: "dropdown-menu no-spacing",
            column: ""
          }, {
            default: h(() => [
              (b(!0), $(K, null, G(D.value, (v, s) => {
                var l;
                return b(), I(F, {
                  class: q(["item no-spacing", { current: (l = y(a)) == null ? void 0 : l.includes(s) }]),
                  onClick: z(() => M(s), ["stop"])
                }, {
                  default: h(() => [
                    j(Y(v), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "onClick"]);
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
const gt = /* @__PURE__ */ H(et, [["__scopeId", "data-v-e8639c6c"]]), tt = /* @__PURE__ */ U({
  __name: "Toggle",
  props: {
    mood: { default: "positive" },
    modelValue: { type: Boolean }
  },
  emits: ["checked", "unchecked", "update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, { modelValue: o, mood: i } = W(r), a = m(() => {
      const V = o.value ? i.value : "inactive";
      return {
        active: o.value,
        [`mood-background-${V}`]: !0,
        [`mood-border-${V}`]: !0
      };
    }), _ = () => {
      const V = !o.value;
      t(V ? "checked" : "unchecked"), t("update:modelValue", V);
    };
    return (V, u) => (b(), $("div", {
      class: q(["toggle", a.value]),
      onClick: u[0] || (u[0] = () => _())
    }, null, 2));
  }
});
const yt = /* @__PURE__ */ H(tt, [["__scopeId", "data-v-49b20089"]]);
export {
  J as Button,
  ue as Calendar,
  pt as DateRangePicker,
  re as Dropdown,
  Ee as Input,
  ht as Link,
  gt as MultiSelect,
  bt as PopoverMenu,
  yt as Toggle
};
