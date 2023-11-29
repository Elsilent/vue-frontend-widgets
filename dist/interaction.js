import { B as W } from "./PopoverMenu-e192d7d1.js";
import { P as yt } from "./PopoverMenu-e192d7d1.js";
import { defineComponent as z, toRefs as G, computed as v, openBlock as M, createBlock as O, withCtx as h, createVNode as y, withModifiers as $, createElementBlock as j, Fragment as J, renderList as Q, normalizeClass as K, unref as _, ref as I, watch as ae, createTextVNode as Y, toDisplayString as H, reactive as ke, inject as ee, h as be, getCurrentInstance as Me, watchEffect as Ve, renderSlot as ne, createElementVNode as oe, normalizeStyle as we, withDirectives as xe, vModelText as Ce } from "vue";
import { D, a as Se } from "./datetime-31a2b505.js";
import { A as E, I as De } from "./Icon-a62eb151.js";
import { D as le, I as Ie } from "./Input-07c967f5.js";
import { G as Oe } from "./Grid-f3d84a6a.js";
import { dateFormat as w, normalizeRange as Ee, tryRangeFromDisplayFormat as Le, rangeToDisplayFormat as Re, rangeFromPreset as re } from "./utils/date.js";
import { m as Ae } from "./match-b8889c93.js";
import { _ as q } from "./_plugin-vue_export-helper-dad06003.js";
import { I as N } from "./Info-54758b60.js";
import { P as Pe } from "./Popover-1f546f1f.js";
import { sort as Z } from "./utils/sort.js";
import "./utils/error.js";
const Fe = 7 * 6, Be = /* @__PURE__ */ z({
  __name: "Calendar",
  props: {
    minDate: { default: "2020-01-01" },
    mode: {},
    monthLabels: {},
    range: {},
    yearMonth: {}
  },
  emits: ["update:range", "update:yearMonth"],
  setup(e, { emit: t }) {
    const r = e, n = D.now(), i = n.year, { minDate: a, mode: k, monthLabels: V, range: u, yearMonth: f } = G(r), L = v(
      () => D.fromFormat(f.value, w.yearMonth).month - 1
    ), C = v(() => D.fromFormat(f.value, w.yearMonth).year), S = v(
      () => V.value.reduce((o, p, x) => (o[x] = p, o), {})
    ), R = v(() => D.fromFormat(u.value[1], w.yearMonthDay)), F = v(() => D.fromFormat(u.value[0], w.yearMonthDay)), A = v(() => {
      const o = D.fromFormat(a.value, w.yearMonthDay).year;
      return new Array(i - o + 1).fill(0).reduce((p, x, _e) => {
        const te = o + _e;
        return p[te] = te.toString(), p;
      }, {});
    }), b = v(
      () => D.fromFormat(f.value, w.yearMonth).startOf("month")
    ), B = v(() => {
      const o = b.value.startOf("week");
      return b.value.hasSame(o, "day") ? b.value.minus(
        Se.fromObject({
          weeks: 1
        })
      ) : o;
    }), T = v(
      () => new Array(Fe).fill(0).map(
        (o, p) => B.value.plus({
          days: p
        })
      )
    ), g = (o) => o.hasSame(b.value, "month"), c = (o) => ({
      "in-range": o >= F.value && o <= R.value,
      now: n.hasSame(o, "day"),
      "range-end": o.hasSame(R.value, "day"),
      "range-start": o.hasSame(F.value, "day"),
      "this-month": g(o)
    }), m = (o) => n.hasSame(o, "day") ? "important" : g(o) && o >= F.value && o <= R.value ? "accent" : "neutral", s = v(() => b.value.endOf("month") < n), l = v(
      () => D.fromFormat(a.value, w.yearMonthDay).startOf("month") < b.value
    ), d = () => {
      const o = b.value.month;
      U(o < 12 ? o : 0, o < 12 ? void 0 : b.value.year + 1);
    }, P = () => {
      const o = b.value.month - 2;
      U(o >= 0 ? o : 11, o >= 0 ? void 0 : b.value.year - 1);
    }, U = (o, p) => {
      const x = b.value.set({
        year: p,
        month: parseInt(o) + 1
      }).toFormat(w.yearMonth);
      t("update:yearMonth", x);
    }, ge = (o) => {
      const p = Ae(k.value).when("end", () => [u.value[0], o.toFormat(w.yearMonthDay)]).when("start", () => [o.toFormat(w.yearMonthDay), u.value[1]]).done;
      t("update:range", Ee(p));
    }, ye = (o) => {
      const p = b.value.set({
        year: parseInt(o)
      }).toFormat(w.yearMonth);
      t("update:yearMonth", p);
    };
    return (o, p) => (M(), O(E, {
      class: "calendar",
      column: ""
    }, {
      default: h(() => [
        y(E, { class: "header" }, {
          default: h(() => [
            y(W, {
              class: "month-picker",
              onClick: p[0] || (p[0] = $(() => P(), ["stop"])),
              disabled: !l.value,
              icon: "chevron-left",
              mood: "neutral",
              outline: "",
              size: "large-4"
            }, null, 8, ["disabled"]),
            y(le, {
              class: "flex-max spacing-small",
              "onUpdate:modelValue": p[1] || (p[1] = (x) => U(x)),
              items: S.value,
              modelValue: L.value,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            y(le, {
              class: "spacing-small",
              "onUpdate:modelValue": p[2] || (p[2] = (x) => ye(x)),
              items: A.value,
              modelValue: C.value,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            y(W, {
              class: "month-picker spacing-small",
              onClick: p[3] || (p[3] = $(() => d(), ["stop"])),
              disabled: !s.value,
              icon: "chevron-right",
              mood: "neutral",
              outline: "",
              size: "large-4"
            }, null, 8, ["disabled"])
          ]),
          _: 1
        }),
        y(E, {
          class: "calendar-grid-container flex-max",
          horizontal: "center",
          vertical: "center"
        }, {
          default: h(() => [
            y(Oe, {
              class: "calendar-grid no-spacing",
              columns: 7
            }, {
              default: h(() => [
                (M(!0), j(J, null, Q(T.value, (x) => (M(), O(W, {
                  class: K(["day", c(x)]),
                  onClick: $(() => ge(x), ["stop"]),
                  disabled: x > _(n),
                  label: x.day.toString(),
                  mood: m(x),
                  outline: m(x) === "neutral"
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
const se = /* @__PURE__ */ q(Be, [["__scopeId", "data-v-b6dd336b"]]), Ne = /* @__PURE__ */ z({
  __name: "DateRangePicker",
  props: {
    dateRangePresets: {},
    disabled: { type: Boolean, default: !1 },
    modelValue: {},
    monthLabels: {},
    translator: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, { dateRangePresets: n, disabled: i, modelValue: a } = G(r), k = I(!1), V = I(), u = I(), f = (s) => {
      const l = D.fromFormat(s[0], w.yearMonthDay), d = D.fromFormat(s[1], w.yearMonthDay), P = l.toFormat(w.yearMonth), U = l.hasSame(d, "month") && d.endOf("month") < D.now() ? d.plus({ month: 1 }).toFormat(w.yearMonth) : d.toFormat(w.yearMonth);
      return [P, U];
    }, L = () => Re(a.value), C = I(L()), S = (s) => {
      const l = f(s);
      c.value = l[0], m.value = l[1];
    }, R = () => {
      var s;
      k.value || i.value || (k.value = !0, S(a.value), (s = u.value) == null || s.$el.focus());
    }, F = (s) => {
      const [l, d] = re(s);
      return l === a.value[0] && d === a.value[1];
    }, A = I("start"), b = (s) => {
      t("update:modelValue", s), A.value === "start" ? A.value = "end" : B();
    };
    ae(a, () => {
      C.value = L();
    });
    const B = (s) => {
      var l, d, P;
      if (!s || !((l = V.value) != null && l.$el.contains(s.relatedTarget))) {
        k.value = !1, A.value = "start", (d = u.value) == null || d.$el.blur();
        return;
      }
      (P = u.value) == null || P.$el.focus();
    }, T = (s) => {
      const l = re(n.value[s]);
      t("update:modelValue", l), S(l), B();
    }, g = f(a.value), c = I(g[0]), m = I(g[1]);
    return ae(C, (s) => {
      const l = Le(s);
      l && t("update:modelValue", l);
    }), (s, l) => (M(), O(E, {
      class: "date-range-picker",
      onClick: l[6] || (l[6] = () => R()),
      ref_key: "dateRangePicker",
      ref: V,
      tabindex: "-1"
    }, {
      default: h(() => [
        y(Ie, {
          ref_key: "dateRangePickerInput",
          ref: u,
          modelValue: C.value,
          "onUpdate:modelValue": l[0] || (l[0] = (d) => C.value = d),
          onBlur: l[1] || (l[1] = (d) => B(d)),
          disabled: _(i)
        }, null, 8, ["modelValue", "disabled"]),
        y(W, {
          class: "no-spacing",
          disabled: _(i),
          icon: "calendar",
          mood: "inactive"
        }, null, 8, ["disabled"]),
        y(Pe, {
          class: "date-range-picker-body no-spacing",
          visible: k.value
        }, {
          default: h(() => [
            y(E, { class: "sections" }, {
              default: h(() => [
                y(E, {
                  class: "presets",
                  column: ""
                }, {
                  default: h(() => [
                    (M(!0), j(J, null, Q(_(n), (d, P) => (M(), O(N, {
                      class: K(["preset", { active: F(d) }]),
                      onClick: $(() => T(P), ["stop"]),
                      size: "small"
                    }, {
                      default: h(() => [
                        Y(H(s.translator(d.label)), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick", "class"]))), 256))
                  ]),
                  _: 1
                }),
                y(E, { class: "calendars" }, {
                  default: h(() => [
                    y(se, {
                      "onUpdate:range": l[2] || (l[2] = (d) => b(d)),
                      range: _(a),
                      yearMonth: c.value,
                      "onUpdate:yearMonth": l[3] || (l[3] = (d) => c.value = d),
                      mode: A.value,
                      monthLabels: s.monthLabels
                    }, null, 8, ["range", "yearMonth", "mode", "monthLabels"]),
                    y(se, {
                      "onUpdate:range": l[4] || (l[4] = (d) => b(d)),
                      range: _(a),
                      yearMonth: m.value,
                      "onUpdate:yearMonth": l[5] || (l[5] = (d) => m.value = d),
                      mode: A.value,
                      monthLabels: s.monthLabels
                    }, null, 8, ["range", "yearMonth", "mode", "monthLabels"])
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
const mt = /* @__PURE__ */ q(Ne, [["__scopeId", "data-v-34fdd6cc"]]);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const Te = typeof window < "u", $e = () => {
}, X = Array.isArray;
function ue(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function je(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const r in e)
    if (!ze(e[r], t[r]))
      return !1;
  return !0;
}
function ze(e, t) {
  return X(e) ? ce(e, t) : X(t) ? ce(t, e) : e === t;
}
function ce(e, t) {
  return X(t) ? e.length === t.length && e.every((r, n) => r === t[n]) : e.length === 1 && e[0] === t;
}
var ie;
(function(e) {
  e.pop = "pop", e.push = "push";
})(ie || (ie = {}));
var de;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})(de || (de = {}));
Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var me;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(me || (me = {}));
Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : "");
const he = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Ue = Symbol(process.env.NODE_ENV !== "production" ? "route location" : "");
Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function ve(e) {
  const t = ee(he), r = ee(Ue), n = v(() => t.resolve(_(e.to))), i = v(() => {
    const { matched: u } = n.value, { length: f } = u, L = u[f - 1], C = r.matched;
    if (!L || !C.length)
      return -1;
    const S = C.findIndex(ue.bind(null, L));
    if (S > -1)
      return S;
    const R = fe(u[f - 2]);
    return (
      // we are dealing with nested routes
      f > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      fe(L) === R && // avoid comparing the child with its parent
      C[C.length - 1].path !== R ? C.findIndex(ue.bind(null, u[f - 2])) : S
    );
  }), a = v(() => i.value > -1 && qe(r.params, n.value.params)), k = v(() => i.value > -1 && i.value === r.matched.length - 1 && je(r.params, n.value.params));
  function V(u = {}) {
    return Ge(u) ? t[_(e.replace) ? "replace" : "push"](
      _(e.to)
      // avoid uncaught errors are they are logged anyway
    ).catch($e) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && Te) {
    const u = Me();
    if (u) {
      const f = {
        route: n.value,
        isActive: a.value,
        isExactActive: k.value
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(f), Ve(() => {
        f.route = n.value, f.isActive = a.value, f.isExactActive = k.value;
      }, { flush: "post" });
    }
  }
  return {
    route: n,
    href: v(() => n.value.href),
    isActive: a,
    isExactActive: k,
    navigate: V
  };
}
const Ye = /* @__PURE__ */ z({
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
  useLink: ve,
  setup(e, { slots: t }) {
    const r = ke(ve(e)), { options: n } = ee(he), i = v(() => ({
      [pe(e.activeClass, n.linkActiveClass, "router-link-active")]: r.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [pe(e.exactActiveClass, n.linkExactActiveClass, "router-link-exact-active")]: r.isExactActive
    }));
    return () => {
      const a = t.default && t.default(r);
      return e.custom ? a : be("a", {
        "aria-current": r.isExactActive ? e.ariaCurrentValue : null,
        href: r.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: r.navigate,
        class: i.value
      }, a);
    };
  }
}), Ke = Ye;
function Ge(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function qe(e, t) {
  for (const r in t) {
    const n = t[r], i = e[r];
    if (typeof n == "string") {
      if (n !== i)
        return !1;
    } else if (!X(i) || i.length !== n.length || n.some((a, k) => a !== i[k]))
      return !1;
  }
  return !0;
}
function fe(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const pe = (e, t, r) => e ?? t ?? r, We = ["href"], He = /* @__PURE__ */ z({
  __name: "Link",
  props: {
    to: {}
  },
  setup(e) {
    const t = e, { to: r } = G(t);
    return (n, i) => typeof _(r) == "string" || "name" in _(r) ? (M(), O(_(Ke), {
      key: 0,
      class: "link",
      to: _(r)
    }, {
      default: h(() => [
        y(N, { mood: "important-alt" }, {
          default: h(() => [
            ne(n.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["to"])) : (M(), j("a", {
      key: 1,
      class: "link",
      href: _(r).toString()
    }, [
      y(N, { mood: "important-alt" }, {
        default: h(() => [
          ne(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ], 8, We));
  }
});
const vt = /* @__PURE__ */ q(He, [["__scopeId", "data-v-1937b929"]]), Je = ["disabled"], Qe = /* @__PURE__ */ z({
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
    const r = e, { disabled: n, items: i, modelValue: a } = G(r), k = I(!1), V = I(null), u = I(null), f = I(""), L = v(() => !a || !a.value ? !1 : Object.keys(i.value).every((g) => a.value.includes(g))), C = v(() => Object.values(i.value).sort(Z).join(", ")), S = v(() => (f.value ? Object.entries(i.value).filter(([, c]) => c.toLowerCase().includes(f.value.toLowerCase())).map(([c]) => c) : Object.keys(i.value)).sort(Z).reduce((c, m) => (c[m] = i.value[m], c), {})), R = v(() => !(a != null && a.value) || a.value === void 0 ? 1 : -Object.keys(S.value).indexOf(a.value.toString())), F = v(() => !a || !a.value ? [] : [...a.value].sort(Z)), A = v(() => ({
      "--item-count": Object.keys(S.value).length,
      "--selection-offset": R.value
    })), b = () => {
      var g;
      n.value || (k.value = !0, (g = u.value) == null || g.focus());
    }, B = (g) => {
      var c, m, s;
      if (!((c = V.value) != null && c.$el.contains(g.relatedTarget))) {
        k.value = !1, f.value = "", (m = u.value) == null || m.blur();
        return;
      }
      (s = u.value) == null || s.focus();
    }, T = (g) => {
      if (!a || !a.value || n && n.value || !k.value)
        return;
      const c = [...a.value], m = c.indexOf(g);
      m >= 0 ? c.splice(m, 1) : c.push(g), t("update:modelValue", c);
    };
    return (g, c) => (M(), O(E, {
      class: "multiselect-container",
      ref_key: "multiSelectContainer",
      ref: V,
      inline: !g.noInline,
      column: ""
    }, {
      default: h(() => [
        oe("div", {
          class: K(["multiselect", { active: k.value, disabled: _(n) }]),
          onClick: c[2] || (c[2] = () => b()),
          style: we(A.value),
          tabindex: "-1"
        }, [
          y(E, {
            class: "current-item",
            vertical: "center"
          }, {
            default: h(() => [
              !_(a) || _(a).length === 0 ? (M(), O(N, {
                key: 0,
                class: "default-value"
              }, {
                default: h(() => [
                  Y(" ")
                ]),
                _: 1
              })) : (M(), O(E, {
                key: 1,
                class: "current-values",
                wrap: ""
              }, {
                default: h(() => [
                  L.value && g.allItemsLabel ? (M(), O(N, {
                    key: 0,
                    class: "current-value all-items",
                    title: C.value
                  }, {
                    default: h(() => [
                      Y(H(g.allItemsLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["title"])) : (M(!0), j(J, { key: 1 }, Q(F.value, (m) => (M(), O(N, {
                    class: "current-value no-spacing",
                    onClick: $(() => T(m), ["stop"])
                  }, {
                    default: h(() => [
                      Y(H(_(i)[m]), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 256))
                ]),
                _: 1
              })),
              xe(oe("input", {
                class: "flex-max new-value-input no-spacing",
                ref_key: "newValueInput",
                ref: u,
                onBlur: c[0] || (c[0] = (m) => B(m)),
                disabled: _(n),
                "onUpdate:modelValue": c[1] || (c[1] = (m) => f.value = m)
              }, null, 40, Je), [
                [Ce, f.value]
              ]),
              y(De, {
                backend: "boxicons-solid",
                size: "small-2",
                value: "down-arrow"
              })
            ]),
            _: 1
          }),
          y(E, {
            class: "dropdown-menu no-spacing",
            column: ""
          }, {
            default: h(() => [
              (M(!0), j(J, null, Q(S.value, (m, s) => {
                var l;
                return M(), O(N, {
                  class: K(["item no-spacing", { current: (l = _(a)) == null ? void 0 : l.includes(s) }]),
                  onClick: $(() => T(s), ["stop"])
                }, {
                  default: h(() => [
                    Y(H(m), 1)
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
const ft = /* @__PURE__ */ q(Qe, [["__scopeId", "data-v-e8639c6c"]]), Xe = /* @__PURE__ */ z({
  __name: "Toggle",
  props: {
    mood: { default: "positive" },
    modelValue: { type: Boolean }
  },
  emits: ["checked", "unchecked", "update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, { modelValue: n, mood: i } = G(r), a = v(() => {
      const V = n.value ? i.value : "inactive";
      return {
        active: n.value,
        [`mood-background-${V}`]: !0,
        [`mood-border-${V}`]: !0
      };
    }), k = () => {
      const V = !n.value;
      t(V ? "checked" : "unchecked"), t("update:modelValue", V);
    };
    return (V, u) => (M(), j("div", {
      class: K(["toggle", a.value]),
      onClick: u[0] || (u[0] = () => k())
    }, null, 2));
  }
});
const pt = /* @__PURE__ */ q(Xe, [["__scopeId", "data-v-49b20089"]]);
export {
  W as Button,
  se as Calendar,
  mt as DateRangePicker,
  le as Dropdown,
  Ie as Input,
  vt as Link,
  ft as MultiSelect,
  yt as PopoverMenu,
  pt as Toggle
};
