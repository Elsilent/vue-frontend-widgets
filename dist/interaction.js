import { B as H, D as ae, I as ie } from "./Input-8e3a6104.js";
import { defineComponent as J, toRefs as K, computed as c, openBlock as d, createBlock as M, withCtx as r, createVNode as i, withModifiers as A, createElementBlock as E, Fragment as G, renderList as W, createTextVNode as z, toDisplayString as Y, createCommentVNode as se, normalizeClass as N, unref as b, ref as F, watch as te, createElementVNode as le, normalizeStyle as me, withDirectives as ve, vModelText as pe } from "vue";
import { D as C, a as fe } from "./datetime-31a2b505.js";
import { A as L, I as ye } from "./Icon-8f2ed8ba.js";
import { G as ge } from "./Grid-f3d84a6a.js";
import { I as j } from "./Info-54758b60.js";
import { dateFormat as f, normalizeRange as he, tryRangeFromDisplayFormat as be, rangeToDisplayFormat as ke, rangeFromPreset as ne } from "./utils/date.js";
import { m as _e } from "./match-b8889c93.js";
import { _ as Q } from "./_plugin-vue_export-helper-dad06003.js";
import { P as Me } from "./Popover-38d3223e.js";
import { L as qe } from "./Link-3e37d26a.js";
import { sort as Z } from "./utils/sort.js";
import { P as Je, T as Ke } from "./Toast-b8a89e8e.js";
import "./utils/error.js";
import "vue-router";
const we = 7 * 6, Ve = /* @__PURE__ */ J({
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
  setup(D, { emit: h }) {
    const S = D, u = C.now(), y = u.year, { minDate: l, mode: w, monthLabels: v, range: g, weekLabels: k, yearMonth: _ } = K(S), x = c(
      () => C.fromFormat(_.value, f.yearMonth).month - 1
    ), U = c(() => C.fromFormat(_.value, f.yearMonth).year), P = c(
      () => v.value.reduce((t, s, m) => (t[m] = s, t), {})
    ), T = c(() => C.fromFormat(g.value[1], f.yearMonthDay)), V = c(() => C.fromFormat(g.value[0], f.yearMonthDay)), O = c(
      () => k != null && k.value ? Array.apply(null, Array(7)).map((t, s) => k.value[s] ?? "") : void 0
    ), R = c(() => {
      const t = C.fromFormat(l.value, f.yearMonthDay).year;
      return new Array(y - t + 1).fill(0).reduce((s, m, de) => {
        const ee = t + de;
        return s[ee] = ee.toString(), s;
      }, {});
    }), p = c(
      () => C.fromFormat(_.value, f.yearMonth).startOf("month")
    ), B = c(() => {
      const t = p.value.startOf("week");
      return p.value.hasSame(t, "day") ? p.value.minus(
        fe.fromObject({
          weeks: 1
        })
      ) : t;
    }), $ = c(
      () => new Array(we).fill(0).map(
        (t, s) => B.value.plus({
          days: s
        })
      )
    ), o = (t) => t.hasSame(p.value, "month"), a = (t) => ({
      "in-range": t >= V.value && t <= T.value,
      now: u.hasSame(t, "day"),
      "range-end": t.hasSame(T.value, "day"),
      "range-start": t.hasSame(V.value, "day"),
      "this-month": o(t)
    }), e = (t) => u.hasSame(t, "day") ? "important" : o(t) && t >= V.value && t <= T.value ? "accent" : "neutral", n = c(() => p.value.endOf("month") < u), I = c(
      () => C.fromFormat(l.value, f.yearMonthDay).startOf("month") < p.value
    ), q = () => {
      const t = p.value.month;
      X(t < 12 ? t : 0, t < 12 ? void 0 : p.value.year + 1);
    }, re = () => {
      const t = p.value.month - 2;
      X(t >= 0 ? t : 11, t >= 0 ? void 0 : p.value.year - 1);
    }, X = (t, s) => {
      const m = p.value.set({
        year: s,
        month: parseInt(t) + 1
      }).toFormat(f.yearMonth);
      h("update:yearMonth", m);
    }, ue = (t) => {
      const s = _e(w.value).when("end", () => [g.value[0], t.toFormat(f.yearMonthDay)]).when("start", () => [t.toFormat(f.yearMonthDay), g.value[1]]).done;
      h("update:range", he(s));
    }, ce = (t) => {
      const s = p.value.set({
        year: parseInt(t)
      }).toFormat(f.yearMonth);
      h("update:yearMonth", s);
    };
    return (t, s) => (d(), M(L, {
      class: "calendar",
      column: ""
    }, {
      default: r(() => [
        i(L, { class: "header" }, {
          default: r(() => [
            i(H, {
              class: "month-picker",
              onClick: s[0] || (s[0] = A(() => re(), ["stop"])),
              disabled: !I.value,
              icon: "chevron-left",
              mood: "neutral",
              outline: "",
              size: "large-4"
            }, null, 8, ["disabled"]),
            i(ae, {
              class: "flex-max spacing-small",
              "onUpdate:modelValue": s[1] || (s[1] = (m) => X(m)),
              items: P.value,
              modelValue: x.value,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            i(ae, {
              class: "spacing-small",
              "onUpdate:modelValue": s[2] || (s[2] = (m) => ce(m)),
              items: R.value,
              modelValue: U.value,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            i(H, {
              class: "month-picker spacing-small",
              onClick: s[3] || (s[3] = A(() => q(), ["stop"])),
              disabled: !n.value,
              icon: "chevron-right",
              mood: "neutral",
              outline: "",
              size: "large-4"
            }, null, 8, ["disabled"])
          ]),
          _: 1
        }),
        i(L, {
          class: "calendar-grid-container flex-max",
          horizontal: "center",
          vertical: "center"
        }, {
          default: r(() => [
            i(ge, {
              class: "calendar-grid no-spacing",
              columns: 7
            }, {
              default: r(() => [
                O.value ? (d(!0), E(G, { key: 0 }, W(O.value, (m) => (d(), M(j, {
                  class: "week-label",
                  important: ""
                }, {
                  default: r(() => [
                    z(Y(m), 1)
                  ]),
                  _: 2
                }, 1024))), 256)) : se("", !0),
                (d(!0), E(G, null, W($.value, (m) => (d(), M(H, {
                  class: N(["day", a(m)]),
                  onClick: A(() => ue(m), ["stop"]),
                  disabled: m > b(u),
                  label: m.day.toString(),
                  mood: e(m),
                  outline: e(m) === "neutral"
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
const oe = /* @__PURE__ */ Q(Ve, [["__scopeId", "data-v-e0ea2f05"]]), Ie = /* @__PURE__ */ J({
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
  setup(D, { emit: h }) {
    const S = D, { dateRangePresets: u, disabled: y, modelValue: l } = K(S), w = F(!1), v = F(), g = F(), k = (a) => {
      const e = C.fromFormat(a[0], f.yearMonthDay), n = C.fromFormat(a[1], f.yearMonthDay), I = e.toFormat(f.yearMonth), q = e.hasSame(n, "month") && n.endOf("month") < C.now() ? n.plus({ month: 1 }).toFormat(f.yearMonth) : n.toFormat(f.yearMonth);
      return [I, q];
    }, _ = () => ke(l.value), x = F(_()), U = (a) => {
      const e = k(a);
      $.value = e[0], o.value = e[1];
    }, P = () => {
      var a;
      w.value || y.value || (w.value = !0, U(l.value), (a = g.value) == null || a.$el.focus());
    }, T = (a) => {
      const [e, n] = ne(a);
      return e === l.value[0] && n === l.value[1];
    }, V = F("start"), O = (a) => {
      h("update:modelValue", a), V.value === "start" ? V.value = "end" : R();
    };
    te(l, () => {
      x.value = _();
    });
    const R = (a) => {
      var e, n, I;
      if (!a || !((e = v.value) != null && e.$el.contains(a.relatedTarget))) {
        w.value = !1, V.value = "start", (n = g.value) == null || n.$el.blur();
        return;
      }
      (I = g.value) == null || I.$el.focus();
    }, p = (a) => {
      const e = ne(u.value[a]);
      h("update:modelValue", e), U(e), R();
    }, B = k(l.value), $ = F(B[0]), o = F(B[1]);
    return te(x, (a) => {
      const e = be(a);
      e && h("update:modelValue", e);
    }), (a, e) => (d(), M(L, {
      class: "date-range-picker",
      onClick: e[6] || (e[6] = () => P()),
      ref_key: "dateRangePicker",
      ref: v,
      tabindex: "-1"
    }, {
      default: r(() => [
        i(ie, {
          ref_key: "dateRangePickerInput",
          ref: g,
          modelValue: x.value,
          "onUpdate:modelValue": e[0] || (e[0] = (n) => x.value = n),
          onBlur: e[1] || (e[1] = (n) => R(n)),
          disabled: b(y)
        }, null, 8, ["modelValue", "disabled"]),
        i(H, {
          class: "no-spacing",
          disabled: b(y),
          icon: "calendar",
          mood: "inactive"
        }, null, 8, ["disabled"]),
        i(Me, {
          class: "date-range-picker-body no-spacing",
          visible: w.value
        }, {
          default: r(() => [
            i(L, { class: "sections" }, {
              default: r(() => [
                i(L, {
                  class: "presets",
                  column: ""
                }, {
                  default: r(() => [
                    (d(!0), E(G, null, W(b(u), (n, I) => (d(), M(j, {
                      class: N(["preset", { active: T(n) }]),
                      onClick: A(() => p(I), ["stop"]),
                      size: "small"
                    }, {
                      default: r(() => [
                        z(Y(a.translator(n.label)), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick", "class"]))), 256))
                  ]),
                  _: 1
                }),
                i(L, { class: "calendars" }, {
                  default: r(() => [
                    i(oe, {
                      "onUpdate:range": e[2] || (e[2] = (n) => O(n)),
                      yearMonth: $.value,
                      "onUpdate:yearMonth": e[3] || (e[3] = (n) => $.value = n),
                      mode: V.value,
                      monthLabels: a.monthLabels,
                      range: b(l),
                      weekLabels: a.weekLabels
                    }, null, 8, ["yearMonth", "mode", "monthLabels", "range", "weekLabels"]),
                    i(oe, {
                      "onUpdate:range": e[4] || (e[4] = (n) => O(n)),
                      yearMonth: o.value,
                      "onUpdate:yearMonth": e[5] || (e[5] = (n) => o.value = n),
                      mode: V.value,
                      monthLabels: a.monthLabels,
                      range: b(l),
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
const Ye = /* @__PURE__ */ Q(Ie, [["__scopeId", "data-v-47304ce0"]]), Ce = ["disabled"], Fe = /* @__PURE__ */ J({
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
  setup(D, { emit: h }) {
    const S = D, { disabled: u, items: y, modelValue: l, showAllItemsItem: w } = K(S), v = F(!1), g = F(null), k = F(null), _ = F(""), x = c(() => !l || !l.value ? !1 : Object.keys(y.value).every((o) => l.value.includes(o))), U = c(() => Object.values(y.value).sort(Z).join(", ")), P = c(() => (_.value ? Object.entries(y.value).filter(([, a]) => a.toLowerCase().includes(_.value.toLowerCase())).map(([a]) => a) : Object.keys(y.value)).sort(Z).reduce((a, e) => (a[e] = y.value[e], a), {})), T = c(() => !(l != null && l.value) || l.value === void 0 ? 1 : -Object.keys(P.value).indexOf(l.value.toString())), V = c(() => !l || !l.value ? [] : [...l.value].sort(Z)), O = c(() => {
      let o = Object.keys(P.value).length;
      return w.value && o++, {
        "--item-count": o,
        "--selection-offset": T.value
      };
    }), R = () => {
      var o;
      u.value || (v.value = !0, (o = k.value) == null || o.focus());
    }, p = (o) => {
      var a, e, n;
      if (!((a = g.value) != null && a.$el.contains(o.relatedTarget))) {
        v.value = !1, _.value = "", (e = k.value) == null || e.blur();
        return;
      }
      (n = k.value) == null || n.focus();
    }, B = (o) => {
      if (!(l != null && l.value) || u != null && u.value || !v.value)
        return;
      const a = [...l.value], e = a.indexOf(o);
      e >= 0 ? a.splice(e, 1) : a.push(o), h("update:modelValue", a);
    }, $ = (o) => {
      h("update:modelValue", o);
    };
    return (o, a) => (d(), M(L, {
      class: "multiselect-container",
      ref_key: "multiSelectContainer",
      ref: g,
      inline: !o.noInline,
      column: ""
    }, {
      default: r(() => [
        le("div", {
          class: N(["multiselect", { active: v.value, disabled: b(u) }]),
          onClick: a[3] || (a[3] = () => R()),
          style: me(O.value),
          tabindex: "-1"
        }, [
          i(L, {
            class: "current-item",
            vertical: "center"
          }, {
            default: r(() => [
              !b(l) || b(l).length === 0 ? (d(), M(j, {
                key: 0,
                class: "default-value"
              }, {
                default: r(() => [
                  z(" ")
                ]),
                _: 1
              })) : (d(), M(L, {
                key: 1,
                class: "current-values",
                wrap: ""
              }, {
                default: r(() => [
                  x.value && o.allItemsLabel ? (d(), M(j, {
                    key: 0,
                    class: "current-value all-items",
                    title: U.value
                  }, {
                    default: r(() => [
                      z(Y(o.allItemsLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["title"])) : (d(!0), E(G, { key: 1 }, W(V.value, (e) => (d(), M(j, {
                    class: "current-value no-spacing",
                    onClick: A(() => B(e), ["stop"])
                  }, {
                    default: r(() => [
                      z(Y(b(y)[e]), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 256))
                ]),
                _: 1
              })),
              ve(le("input", {
                class: "flex-max new-value-input no-spacing",
                ref_key: "newValueInput",
                ref: k,
                "onUpdate:modelValue": a[0] || (a[0] = (e) => _.value = e),
                onBlur: a[1] || (a[1] = (e) => p(e)),
                disabled: b(u)
              }, null, 40, Ce), [
                [pe, _.value]
              ]),
              i(ye, {
                backend: "boxicons-solid",
                size: "small-2",
                value: "down-arrow"
              })
            ]),
            _: 1
          }),
          i(L, {
            class: "dropdown-menu no-spacing",
            column: ""
          }, {
            default: r(() => [
              b(w) ? (d(), M(j, {
                key: 0,
                class: N(["item", { current: x.value }]),
                onClick: a[2] || (a[2] = A(() => $(Object.keys(b(y))), ["stop"]))
              }, {
                default: r(() => [
                  z(Y(o.allItemsLabel), 1)
                ]),
                _: 1
              }, 8, ["class"])) : se("", !0),
              (d(!0), E(G, null, W(P.value, (e, n) => {
                var I;
                return d(), M(j, {
                  class: N(["item no-spacing", { current: (I = b(l)) == null ? void 0 : I.includes(n) }]),
                  onClick: A((q) => B(n), ["stop"])
                }, {
                  default: r(() => [
                    z(Y(e), 1)
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
const Ne = /* @__PURE__ */ Q(Fe, [["__scopeId", "data-v-6eb63abe"]]), Le = /* @__PURE__ */ J({
  __name: "Toggle",
  props: {
    mood: { default: "positive" },
    modelValue: { type: Boolean }
  },
  emits: ["checked", "unchecked", "update:modelValue"],
  setup(D, { emit: h }) {
    const S = D, { modelValue: u, mood: y } = K(S), l = c(() => {
      const v = u.value ? y.value : "inactive";
      return {
        active: u.value,
        [`mood-background-${v}`]: !0,
        [`mood-border-${v}`]: !0
      };
    }), w = () => {
      const v = !u.value;
      h(v ? "checked" : "unchecked"), h("update:modelValue", v);
    };
    return (v, g) => (d(), E("div", {
      class: N(["toggle", l.value]),
      onClick: g[0] || (g[0] = () => w())
    }, null, 2));
  }
});
const Ee = /* @__PURE__ */ Q(Le, [["__scopeId", "data-v-49b20089"]]);
export {
  H as Button,
  oe as Calendar,
  Ye as DateRangePicker,
  ae as Dropdown,
  ie as Input,
  qe as Link,
  Ne as MultiSelect,
  Je as PopoverMenu,
  Ke as Toast,
  Ee as Toggle
};
