import { B as q, D as ae, I as ie } from "./Input-8e3a6104.js";
import { defineComponent as H, toRefs as J, computed as d, openBlock as i, createBlock as w, withCtx as u, createVNode as m, withModifiers as j, createElementBlock as N, Fragment as G, renderList as W, createTextVNode as $, toDisplayString as U, createCommentVNode as se, normalizeClass as Y, unref as M, ref as C, watch as te, createElementVNode as le, normalizeStyle as me, withDirectives as ve, vModelText as pe } from "vue";
import { D as I, a as fe } from "./datetime-31a2b505.js";
import { A as F, I as ye } from "./Icon-8f2ed8ba.js";
import { G as ge } from "./Grid-f3d84a6a.js";
import { I as z } from "./Info-54758b60.js";
import { dateFormat as y, normalizeRange as he, tryRangeFromDisplayFormat as be, rangeToDisplayFormat as ke, rangeFromPreset as ne } from "./utils/date.js";
import { m as _e } from "./match-b8889c93.js";
import { _ as K } from "./_plugin-vue_export-helper-dad06003.js";
import { P as Me } from "./Popover-38d3223e.js";
import { L as qe } from "./Link-3e37d26a.js";
import { sort as Z } from "./utils/sort.js";
import { P as Je, T as Ke } from "./Toast-b8a89e8e.js";
import "./utils/error.js";
import "vue-router";
const we = 7 * 6, Ve = /* @__PURE__ */ H({
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
  setup(P, { emit: h }) {
    const T = P, c = I.now(), g = c.year, { minDate: l, mode: k, monthLabels: b, range: v, weekLabels: _, yearMonth: L } = J(T), x = d(
      () => I.fromFormat(L.value, y.yearMonth).month - 1
    ), S = d(() => I.fromFormat(L.value, y.yearMonth).year), E = d(
      () => b.value.reduce((t, r, f) => (t[f] = r, t), {})
    ), O = d(() => I.fromFormat(v.value[1], y.yearMonthDay)), V = d(() => I.fromFormat(v.value[0], y.yearMonthDay)), R = d(
      () => _ != null && _.value ? Array.apply(null, Array(7)).map((t, r) => _.value[r] ?? "") : void 0
    ), B = d(() => {
      const t = I.fromFormat(l.value, y.yearMonthDay).year;
      return new Array(g - t + 1).fill(0).reduce((r, f, de) => {
        const ee = t + de;
        return r[ee] = ee.toString(), r;
      }, {});
    }), p = d(
      () => I.fromFormat(L.value, y.yearMonth).startOf("month")
    ), A = d(() => {
      const t = p.value.startOf("week");
      return p.value.hasSame(t, "day") ? p.value.minus(
        fe.fromObject({
          weeks: 1
        })
      ) : t;
    }), s = d(
      () => new Array(we).fill(0).map(
        (t, r) => A.value.plus({
          days: r
        })
      )
    ), n = (t) => t.hasSame(p.value, "month"), e = (t) => ({
      "in-range": t >= V.value && t <= O.value,
      now: c.hasSame(t, "day"),
      "range-end": t.hasSame(O.value, "day"),
      "range-start": t.hasSame(V.value, "day"),
      "this-month": n(t)
    }), a = (t) => c.hasSame(t, "day") ? "important" : n(t) && t >= V.value && t <= O.value ? "accent" : "neutral", o = d(() => p.value.endOf("month") < c), D = d(
      () => I.fromFormat(l.value, y.yearMonthDay).startOf("month") < p.value
    ), Q = () => {
      const t = p.value.month;
      X(t < 12 ? t : 0, t < 12 ? void 0 : p.value.year + 1);
    }, re = () => {
      const t = p.value.month - 2;
      X(t >= 0 ? t : 11, t >= 0 ? void 0 : p.value.year - 1);
    }, X = (t, r) => {
      const f = p.value.set({
        year: r,
        month: parseInt(t) + 1
      }).toFormat(y.yearMonth);
      h("update:yearMonth", f);
    }, ue = (t) => {
      const r = _e(k.value).when("end", () => [v.value[0], t.toFormat(y.yearMonthDay)]).when("start", () => [t.toFormat(y.yearMonthDay), v.value[1]]).done;
      h("update:range", he(r));
    }, ce = (t) => {
      const r = p.value.set({
        year: parseInt(t)
      }).toFormat(y.yearMonth);
      h("update:yearMonth", r);
    };
    return (t, r) => (i(), w(F, {
      class: "calendar",
      column: ""
    }, {
      default: u(() => [
        m(F, { class: "header" }, {
          default: u(() => [
            m(q, {
              class: "month-picker",
              onClick: r[0] || (r[0] = j(() => re(), ["stop"])),
              disabled: !D.value,
              icon: "chevron-left",
              mood: "neutral",
              outline: "",
              size: "large-4"
            }, null, 8, ["disabled"]),
            m(ae, {
              class: "flex-max spacing-small",
              "onUpdate:modelValue": r[1] || (r[1] = (f) => X(f)),
              items: E.value,
              modelValue: x.value,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            m(ae, {
              class: "spacing-small",
              "onUpdate:modelValue": r[2] || (r[2] = (f) => ce(f)),
              items: B.value,
              modelValue: S.value,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            m(q, {
              class: "month-picker spacing-small",
              onClick: r[3] || (r[3] = j(() => Q(), ["stop"])),
              disabled: !o.value,
              icon: "chevron-right",
              mood: "neutral",
              outline: "",
              size: "large-4"
            }, null, 8, ["disabled"])
          ]),
          _: 1
        }),
        m(F, {
          class: "calendar-grid-container flex-max",
          horizontal: "center",
          vertical: "center"
        }, {
          default: u(() => [
            m(ge, {
              class: "calendar-grid no-spacing",
              columns: 7
            }, {
              default: u(() => [
                R.value ? (i(!0), N(G, { key: 0 }, W(R.value, (f) => (i(), w(z, {
                  class: "week-label",
                  important: ""
                }, {
                  default: u(() => [
                    $(U(f), 1)
                  ]),
                  _: 2
                }, 1024))), 256)) : se("", !0),
                (i(!0), N(G, null, W(s.value, (f) => (i(), w(q, {
                  class: Y(["day", e(f)]),
                  onClick: j(() => ue(f), ["stop"]),
                  disabled: f > M(c),
                  label: f.day.toString(),
                  mood: a(f),
                  outline: a(f) === "neutral"
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
const oe = /* @__PURE__ */ K(Ve, [["__scopeId", "data-v-e0ea2f05"]]), Ie = /* @__PURE__ */ H({
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
  setup(P, { emit: h }) {
    const T = P, { dateRangePresets: c, disabled: g, modelValue: l } = J(T), k = C(!1), b = C(), v = C(), _ = (e) => {
      const a = I.fromFormat(e[0], y.yearMonthDay), o = I.fromFormat(e[1], y.yearMonthDay), D = a.toFormat(y.yearMonth), Q = a.hasSame(o, "month") && o.endOf("month") < I.now() ? o.plus({ month: 1 }).toFormat(y.yearMonth) : o.toFormat(y.yearMonth);
      return [D, Q];
    }, L = () => ke(l.value), x = C(L()), S = (e) => {
      const a = _(e);
      s.value = a[0], n.value = a[1];
    }, E = () => {
      var e;
      k.value || g.value || (k.value = !0, S(l.value), (e = v.value) == null || e.$el.focus());
    }, O = (e) => {
      const [a, o] = ne(e);
      return a === l.value[0] && o === l.value[1];
    }, V = C("start"), R = (e) => {
      h("update:modelValue", e), V.value === "start" ? V.value = "end" : B();
    };
    te(l, () => {
      x.value = L();
    });
    const B = (e) => {
      var a, o, D;
      if (!e || !((a = b.value) != null && a.$el.contains(e.relatedTarget))) {
        k.value = !1, V.value = "start", (o = v.value) == null || o.$el.blur();
        return;
      }
      (D = v.value) == null || D.$el.focus();
    }, p = (e) => {
      const a = ne(c.value[e]);
      h("update:modelValue", a), S(a), B();
    }, A = _(l.value), s = C(A[0]), n = C(A[1]);
    return te(x, (e) => {
      const a = be(e);
      a && h("update:modelValue", a);
    }), (e, a) => (i(), w(F, {
      class: "date-range-picker",
      onClick: a[6] || (a[6] = () => E()),
      ref_key: "dateRangePicker",
      ref: b,
      tabindex: "-1"
    }, {
      default: u(() => [
        m(ie, {
          ref_key: "dateRangePickerInput",
          ref: v,
          modelValue: x.value,
          "onUpdate:modelValue": a[0] || (a[0] = (o) => x.value = o),
          onBlur: a[1] || (a[1] = (o) => B(o)),
          disabled: M(g)
        }, null, 8, ["modelValue", "disabled"]),
        m(q, {
          class: "no-spacing",
          disabled: M(g),
          icon: "calendar",
          mood: "inactive"
        }, null, 8, ["disabled"]),
        m(Me, {
          class: "date-range-picker-body no-spacing",
          visible: k.value
        }, {
          default: u(() => [
            m(F, { class: "sections" }, {
              default: u(() => [
                m(F, {
                  class: "presets",
                  column: ""
                }, {
                  default: u(() => [
                    (i(!0), N(G, null, W(M(c), (o, D) => (i(), w(z, {
                      class: Y(["preset", { active: O(o) }]),
                      onClick: j(() => p(D), ["stop"]),
                      size: "small"
                    }, {
                      default: u(() => [
                        $(U(e.translator(o.label)), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick", "class"]))), 256))
                  ]),
                  _: 1
                }),
                m(F, { class: "calendars" }, {
                  default: u(() => [
                    m(oe, {
                      "onUpdate:range": a[2] || (a[2] = (o) => R(o)),
                      yearMonth: s.value,
                      "onUpdate:yearMonth": a[3] || (a[3] = (o) => s.value = o),
                      mode: V.value,
                      monthLabels: e.monthLabels,
                      range: M(l),
                      weekLabels: e.weekLabels
                    }, null, 8, ["yearMonth", "mode", "monthLabels", "range", "weekLabels"]),
                    m(oe, {
                      "onUpdate:range": a[4] || (a[4] = (o) => R(o)),
                      yearMonth: n.value,
                      "onUpdate:yearMonth": a[5] || (a[5] = (o) => n.value = o),
                      mode: V.value,
                      monthLabels: e.monthLabels,
                      range: M(l),
                      weekLabels: e.weekLabels
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
const Ye = /* @__PURE__ */ K(Ie, [["__scopeId", "data-v-47304ce0"]]), Ce = ["disabled"], Fe = /* @__PURE__ */ H({
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
  setup(P, { emit: h }) {
    const T = P, { disabled: c, items: g, modelValue: l } = J(T), k = C(!1), b = C(null), v = C(null), _ = C(""), L = d(() => !l || !l.value ? !1 : Object.keys(g.value).every((s) => l.value.includes(s))), x = d(() => Object.values(g.value).sort(Z).join(", ")), S = d(() => (_.value ? Object.entries(g.value).filter(([, n]) => n.toLowerCase().includes(_.value.toLowerCase())).map(([n]) => n) : Object.keys(g.value)).sort(Z).reduce((n, e) => (n[e] = g.value[e], n), {})), E = d(() => !(l != null && l.value) || l.value === void 0 ? 1 : -Object.keys(S.value).indexOf(l.value.toString())), O = d(() => !l || !l.value ? [] : [...l.value].sort(Z)), V = d(() => ({
      "--item-count": Object.keys(S.value).length,
      "--selection-offset": E.value
    })), R = () => {
      var s;
      c.value || (k.value = !0, (s = v.value) == null || s.focus());
    }, B = (s) => {
      var n, e, a;
      if (!((n = b.value) != null && n.$el.contains(s.relatedTarget))) {
        k.value = !1, _.value = "", (e = v.value) == null || e.blur();
        return;
      }
      (a = v.value) == null || a.focus();
    }, p = (s) => {
      if (!(l != null && l.value) || c != null && c.value || !k.value)
        return;
      const n = [...l.value], e = n.indexOf(s);
      e >= 0 ? n.splice(e, 1) : n.push(s), h("update:modelValue", n);
    }, A = (s) => {
      h("update:modelValue", s);
    };
    return (s, n) => (i(), w(F, {
      class: "multiselect-container",
      ref_key: "multiSelectContainer",
      ref: b,
      inline: !s.noInline,
      column: ""
    }, {
      default: u(() => [
        le("div", {
          class: Y(["multiselect", { active: k.value, disabled: M(c) }]),
          onClick: n[3] || (n[3] = () => R()),
          style: me(V.value),
          tabindex: "-1"
        }, [
          m(F, {
            class: "current-item",
            vertical: "center"
          }, {
            default: u(() => [
              !M(l) || M(l).length === 0 ? (i(), w(z, {
                key: 0,
                class: "default-value"
              }, {
                default: u(() => [
                  $(" ")
                ]),
                _: 1
              })) : (i(), w(F, {
                key: 1,
                class: "current-values",
                wrap: ""
              }, {
                default: u(() => [
                  L.value && s.allItemsLabel ? (i(), w(z, {
                    key: 0,
                    class: "current-value all-items",
                    title: x.value
                  }, {
                    default: u(() => [
                      $(U(s.allItemsLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["title"])) : (i(!0), N(G, { key: 1 }, W(O.value, (e) => (i(), w(z, {
                    class: "current-value no-spacing",
                    onClick: j(() => p(e), ["stop"])
                  }, {
                    default: u(() => [
                      $(U(M(g)[e]), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 256))
                ]),
                _: 1
              })),
              ve(le("input", {
                class: "flex-max new-value-input no-spacing",
                ref_key: "newValueInput",
                ref: v,
                "onUpdate:modelValue": n[0] || (n[0] = (e) => _.value = e),
                onBlur: n[1] || (n[1] = (e) => B(e)),
                disabled: M(c)
              }, null, 40, Ce), [
                [pe, _.value]
              ]),
              m(ye, {
                backend: "boxicons-solid",
                size: "small-2",
                value: "down-arrow"
              })
            ]),
            _: 1
          }),
          m(F, {
            class: "dropdown-menu no-spacing",
            column: ""
          }, {
            default: u(() => [
              s.showAllItemsItem ? (i(), w(z, {
                key: 0,
                class: Y(["item", { current: L.value }]),
                onClick: n[2] || (n[2] = j(() => A(Object.keys(M(g))), ["stop"]))
              }, {
                default: u(() => [
                  $(U(s.allItemsLabel), 1)
                ]),
                _: 1
              }, 8, ["class"])) : se("", !0),
              (i(!0), N(G, null, W(S.value, (e, a) => {
                var o;
                return i(), w(z, {
                  class: Y(["item no-spacing", { current: (o = M(l)) == null ? void 0 : o.includes(a) }]),
                  onClick: j((D) => p(a), ["stop"])
                }, {
                  default: u(() => [
                    $(U(e), 1)
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
const Ne = /* @__PURE__ */ K(Fe, [["__scopeId", "data-v-cd08ea4b"]]), Le = /* @__PURE__ */ H({
  __name: "Toggle",
  props: {
    mood: { default: "positive" },
    modelValue: { type: Boolean }
  },
  emits: ["checked", "unchecked", "update:modelValue"],
  setup(P, { emit: h }) {
    const T = P, { modelValue: c, mood: g } = J(T), l = d(() => {
      const b = c.value ? g.value : "inactive";
      return {
        active: c.value,
        [`mood-background-${b}`]: !0,
        [`mood-border-${b}`]: !0
      };
    }), k = () => {
      const b = !c.value;
      h(b ? "checked" : "unchecked"), h("update:modelValue", b);
    };
    return (b, v) => (i(), N("div", {
      class: Y(["toggle", l.value]),
      onClick: v[0] || (v[0] = () => k())
    }, null, 2));
  }
});
const Ee = /* @__PURE__ */ K(Le, [["__scopeId", "data-v-49b20089"]]);
export {
  q as Button,
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
