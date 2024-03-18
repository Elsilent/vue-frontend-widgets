import { B as X, D as se, I as me, u as ve } from "./Input-7f2c48d4.js";
import { defineComponent as te, toRefs as ae, computed as i, openBlock as v, createBlock as V, withCtx as c, createVNode as p, withModifiers as S, createElementBlock as W, Fragment as q, renderList as H, createTextVNode as A, toDisplayString as E, createCommentVNode as ie, normalizeClass as G, unref as m, ref as F, watch as re, createElementVNode as ee, normalizeStyle as pe, withKeys as Z, withDirectives as fe, vModelText as ye } from "vue";
import { D as x, a as ge } from "./datetime-31a2b505.js";
import { A as D, I as be } from "./Icon-8f2ed8ba.js";
import { G as he } from "./Grid-f3d84a6a.js";
import { I as Y } from "./Info-54758b60.js";
import { dateFormat as h, normalizeRange as ke, tryRangeFromDisplayFormat as Me, rangeToDisplayFormat as _e, rangeFromPreset as ue } from "./utils/date.js";
import { m as we } from "./match-b8889c93.js";
import { _ as ne } from "./_plugin-vue_export-helper-dad06003.js";
import { P as Ie } from "./Popover-38d3223e.js";
import { L as Qe } from "./Link-dfe99e72.js";
import { sort as le } from "./utils/sort.js";
import { P as Ze, T as et } from "./Toast-5c462a52.js";
import "./utils/error.js";
import "vue-router";
const Ve = 7 * 6, Ce = /* @__PURE__ */ te({
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
  setup(j, { emit: _ }) {
    const $ = j, d = x.now(), k = d.year, { minDate: n, mode: w, monthLabels: g, range: f, weekLabels: M, yearMonth: I } = ae($), O = i(
      () => x.fromFormat(I.value, h.yearMonth).month - 1
    ), K = i(() => x.fromFormat(I.value, h.yearMonth).year), L = i(
      () => g.value.reduce((e, u, y) => (e[y] = u, e), {})
    ), P = i(() => x.fromFormat(f.value[1], h.yearMonthDay)), C = i(() => x.fromFormat(f.value[0], h.yearMonthDay)), z = i(
      () => M != null && M.value ? Array.apply(null, Array(7)).map((e, u) => M.value[u] ?? "") : void 0
    ), B = i(() => {
      const e = x.fromFormat(n.value, h.yearMonthDay).year;
      return new Array(k - e + 1).fill(0).reduce((u, y, ce) => {
        const oe = e + ce;
        return u[oe] = oe.toString(), u;
      }, {});
    }), b = i(
      () => x.fromFormat(I.value, h.yearMonth).startOf("month")
    ), N = i(() => {
      const e = b.value.startOf("week");
      return b.value.hasSame(e, "day") ? b.value.minus(
        ge.fromObject({
          weeks: 1
        })
      ) : e;
    }), U = i(
      () => new Array(Ve).fill(0).map(
        (e, u) => N.value.plus({
          days: u
        })
      )
    ), T = (e) => e.hasSame(b.value, "month"), s = (e) => ({
      "in-range": e >= C.value && e <= P.value,
      now: d.hasSame(e, "day"),
      "range-end": e.hasSame(P.value, "day"),
      "range-start": e.hasSame(C.value, "day"),
      "this-month": T(e)
    }), t = (e) => d.hasSame(e, "day") ? "important" : T(e) && e >= C.value && e <= P.value ? "accent" : "neutral", l = i(() => b.value.endOf("month") < d), o = i(
      () => x.fromFormat(n.value, h.yearMonthDay).startOf("month") < b.value
    ), a = () => {
      const e = b.value.month;
      R(e < 12 ? e : 0, e < 12 ? void 0 : b.value.year + 1);
    }, r = () => {
      const e = b.value.month - 2;
      R(e >= 0 ? e : 11, e >= 0 ? void 0 : b.value.year - 1);
    }, R = (e, u) => {
      const y = b.value.set({
        year: u,
        month: parseInt(e) + 1
      }).toFormat(h.yearMonth);
      _("update:yearMonth", y);
    }, J = (e) => {
      const u = we(w.value).when("end", () => [f.value[0], e.toFormat(h.yearMonthDay)]).when("start", () => [e.toFormat(h.yearMonthDay), f.value[1]]).done;
      _("update:range", ke(u));
    }, Q = (e) => {
      const u = b.value.set({
        year: parseInt(e)
      }).toFormat(h.yearMonth);
      _("update:yearMonth", u);
    };
    return (e, u) => (v(), V(D, {
      class: "calendar",
      column: ""
    }, {
      default: c(() => [
        p(D, { class: "header" }, {
          default: c(() => [
            p(X, {
              class: "month-picker",
              onClick: u[0] || (u[0] = S(() => r(), ["stop"])),
              disabled: !o.value,
              tabindex: -1,
              icon: "chevron-left",
              mood: "neutral",
              outline: "",
              size: "large-4"
            }, null, 8, ["disabled"]),
            p(se, {
              class: "flex-max spacing-small",
              "onUpdate:modelValue": u[1] || (u[1] = (y) => R(y)),
              items: L.value,
              modelValue: O.value,
              tabindex: -1,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            p(se, {
              class: "spacing-small",
              "onUpdate:modelValue": u[2] || (u[2] = (y) => Q(y)),
              items: B.value,
              modelValue: K.value,
              tabindex: -1,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            p(X, {
              class: "month-picker spacing-small",
              onClick: u[3] || (u[3] = S(() => a(), ["stop"])),
              disabled: !l.value,
              tabindex: -1,
              icon: "chevron-right",
              mood: "neutral",
              outline: "",
              size: "large-4"
            }, null, 8, ["disabled"])
          ]),
          _: 1
        }),
        p(D, {
          class: "calendar-grid-container flex-max",
          horizontal: "center",
          vertical: "center"
        }, {
          default: c(() => [
            p(he, {
              class: "calendar-grid no-spacing",
              columns: 7
            }, {
              default: c(() => [
                z.value ? (v(!0), W(q, { key: 0 }, H(z.value, (y) => (v(), V(Y, {
                  class: "week-label",
                  important: ""
                }, {
                  default: c(() => [
                    A(E(y), 1)
                  ]),
                  _: 2
                }, 1024))), 256)) : ie("", !0),
                (v(!0), W(q, null, H(U.value, (y) => (v(), V(X, {
                  class: G(["day", s(y)]),
                  onClick: S(() => J(y), ["stop"]),
                  disabled: y > m(d),
                  label: y.day.toString(),
                  mood: t(y),
                  outline: t(y) === "neutral",
                  tabindex: "-1"
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
const de = /* @__PURE__ */ ne(Ce, [["__scopeId", "data-v-8d6b8d9a"]]), xe = /* @__PURE__ */ te({
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
  setup(j, { emit: _ }) {
    const $ = j, { dateRangePresets: d, disabled: k, modelValue: n } = ae($), w = F(!1), g = F(), f = F(), M = (s) => {
      const t = x.fromFormat(s[0], h.yearMonthDay), l = x.fromFormat(s[1], h.yearMonthDay), o = t.toFormat(h.yearMonth), a = t.hasSame(l, "month") && l.endOf("month") < x.now() ? l.plus({ month: 1 }).toFormat(h.yearMonth) : l.toFormat(h.yearMonth);
      return [o, a];
    }, I = () => _e(n.value), O = F(I()), K = (s) => {
      const t = M(s);
      U.value = t[0], T.value = t[1];
    }, L = () => {
      var s;
      w.value || k.value || (w.value = !0, K(n.value), (s = f.value) == null || s.$el.focus());
    }, P = (s) => {
      const [t, l] = ue(s);
      return t === n.value[0] && l === n.value[1];
    }, C = F("start"), z = (s) => {
      _("update:modelValue", s), C.value === "start" ? C.value = "end" : B();
    };
    re(n, () => {
      O.value = I();
    });
    const B = (s) => {
      var t, l, o;
      if (!s || !((t = g.value) != null && t.$el.contains(s.relatedTarget))) {
        w.value = !1, C.value = "start", (l = f.value) == null || l.$el.blur();
        return;
      }
      (o = f.value) == null || o.$el.focus();
    }, b = (s) => {
      const t = ue(d.value[s]);
      _("update:modelValue", t), K(t), B();
    }, N = M(n.value), U = F(N[0]), T = F(N[1]);
    return re(O, (s) => {
      const t = Me(s);
      t && _("update:modelValue", t);
    }), (s, t) => (v(), V(D, {
      class: "date-range-picker",
      onClick: t[7] || (t[7] = (l) => L()),
      ref_key: "dateRangePicker",
      ref: g,
      tabindex: "-1"
    }, {
      default: c(() => [
        p(me, {
          ref_key: "dateRangePickerInput",
          ref: f,
          modelValue: O.value,
          "onUpdate:modelValue": t[0] || (t[0] = (l) => O.value = l),
          onFocus: t[1] || (t[1] = (l) => L()),
          onBlur: t[2] || (t[2] = (l) => B(l)),
          disabled: m(k)
        }, null, 8, ["modelValue", "disabled"]),
        p(X, {
          class: "no-spacing",
          disabled: m(k),
          icon: "calendar",
          mood: "inactive",
          tabindex: "-1"
        }, null, 8, ["disabled"]),
        p(Ie, {
          class: "date-range-picker-body no-spacing",
          visible: w.value
        }, {
          default: c(() => [
            p(D, { class: "sections" }, {
              default: c(() => [
                p(D, {
                  class: "presets",
                  column: ""
                }, {
                  default: c(() => [
                    (v(!0), W(q, null, H(m(d), (l, o) => (v(), V(Y, {
                      class: G(["preset", { active: P(l) }]),
                      onClick: S(() => b(o), ["stop"]),
                      size: "small"
                    }, {
                      default: c(() => [
                        A(E(s.translator(l.label)), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick", "class"]))), 256))
                  ]),
                  _: 1
                }),
                p(D, { class: "calendars" }, {
                  default: c(() => [
                    p(de, {
                      "onUpdate:range": t[3] || (t[3] = (l) => z(l)),
                      yearMonth: U.value,
                      "onUpdate:yearMonth": t[4] || (t[4] = (l) => U.value = l),
                      mode: C.value,
                      monthLabels: s.monthLabels,
                      range: m(n),
                      weekLabels: s.weekLabels
                    }, null, 8, ["yearMonth", "mode", "monthLabels", "range", "weekLabels"]),
                    p(de, {
                      "onUpdate:range": t[5] || (t[5] = (l) => z(l)),
                      yearMonth: T.value,
                      "onUpdate:yearMonth": t[6] || (t[6] = (l) => T.value = l),
                      mode: C.value,
                      monthLabels: s.monthLabels,
                      range: m(n),
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
const Ge = /* @__PURE__ */ ne(xe, [["__scopeId", "data-v-cd797576"]]), Fe = ["disabled"], De = /* @__PURE__ */ te({
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
  setup(j, { emit: _ }) {
    const $ = j, { disabled: d, items: k, modelValue: n, showAllItemsItem: w } = ae($), g = F(!1), f = F(null), M = F(null), I = F(""), O = i(() => !n || !n.value ? !1 : Object.keys(k.value).every((o) => n.value.includes(o))), K = i(() => Object.values(k.value).sort(le).join(", ")), L = i(() => (B(), (I.value ? Object.entries(k.value).filter(([, a]) => a.toLowerCase().includes(I.value.toLowerCase())).map(([a]) => a) : Object.keys(k.value)).sort(le).reduce((a, r) => (a[r] = k.value[r], a), {}))), { selectedItem: P, onKeypressDown: C, onKeypressUp: z, clearSelectedItem: B } = ve({
      length: i(() => Object.keys(L.value).length - 1)
    }), b = i(() => n != null && n.value ? -Object.keys(L.value).indexOf(n.value.toString()) : 1), N = i(() => !n || !n.value ? [] : [...n.value].sort(le)), U = i(() => {
      let o = Object.keys(L.value).length;
      return w.value && o++, {
        "--item-count": o,
        "--selection-offset": b.value
      };
    }), T = () => {
      var o;
      d.value || (g.value = !0, (o = M.value) == null || o.focus());
    }, s = (o) => {
      var a, r;
      (a = f.value) != null && a.$el.contains(o.relatedTarget) || (g.value = !1, I.value = "", (r = M.value) == null || r.blur(), B());
    }, t = (o) => {
      var R;
      if (!(n != null && n.value) || d != null && d.value || !g.value)
        return;
      const a = [...n.value], r = a.indexOf(o);
      r >= 0 ? a.splice(r, 1) : a.push(o), _("update:modelValue", a), (R = M.value) == null || R.focus({ preventScroll: !0 });
    }, l = (o) => {
      var a;
      _("update:modelValue", o), (a = M.value) == null || a.focus({ preventScroll: !0 });
    };
    return (o, a) => (v(), V(D, {
      class: "multiselect-container",
      ref_key: "multiSelectContainer",
      ref: f,
      inline: !o.noInline,
      column: ""
    }, {
      default: c(() => [
        ee("div", {
          class: G(["multiselect", { active: g.value, disabled: m(d) }]),
          onClick: a[4] || (a[4] = (r) => T()),
          style: pe(U.value),
          tabindex: "-1",
          onKeydown: [
            a[5] || (a[5] = Z(S((r) => m(C)(), ["prevent"]), ["down"])),
            a[6] || (a[6] = Z(S((r) => m(z)(), ["prevent"]), ["up"])),
            a[7] || (a[7] = Z(S((r) => t(Object.keys(L.value)[m(P)]), ["prevent"]), ["enter"]))
          ]
        }, [
          p(D, {
            class: "current-item",
            vertical: "center"
          }, {
            default: c(() => [
              !m(n) || m(n).length === 0 ? (v(), V(Y, {
                key: 0,
                class: "default-value"
              }, {
                default: c(() => [
                  A(" ")
                ]),
                _: 1
              })) : (v(), V(D, {
                key: 1,
                class: "current-values",
                wrap: ""
              }, {
                default: c(() => [
                  O.value && o.allItemsLabel ? (v(), V(Y, {
                    key: 0,
                    class: "current-value all-items",
                    title: K.value
                  }, {
                    default: c(() => [
                      A(E(o.allItemsLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["title"])) : (v(!0), W(q, { key: 1 }, H(N.value, (r) => (v(), V(Y, {
                    class: "current-value no-spacing",
                    onClick: S(() => t(r), ["stop"])
                  }, {
                    default: c(() => [
                      A(E(m(k)[r]), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))), 256))
                ]),
                _: 1
              })),
              fe(ee("input", {
                class: "flex-max new-value-input no-spacing",
                ref_key: "newValueInput",
                ref: M,
                "onUpdate:modelValue": a[0] || (a[0] = (r) => I.value = r),
                onBlur: a[1] || (a[1] = (r) => s(r)),
                onFocus: a[2] || (a[2] = (r) => T()),
                disabled: m(d)
              }, null, 40, Fe), [
                [ye, I.value]
              ]),
              p(be, {
                backend: "boxicons-solid",
                size: "small-2",
                value: "down-arrow"
              })
            ]),
            _: 1
          }),
          p(D, {
            class: "dropdown-menu no-spacing",
            column: ""
          }, {
            default: c(() => [
              m(w) ? (v(), V(Y, {
                key: 0,
                class: G(["item", { current: O.value }]),
                onClick: a[3] || (a[3] = S((r) => l(Object.keys(m(k))), ["stop"]))
              }, {
                default: c(() => [
                  A(E(o.allItemsLabel), 1)
                ]),
                _: 1
              }, 8, ["class"])) : ie("", !0),
              (v(!0), W(q, null, H(L.value, (r, R, J) => {
                var Q;
                return v(), V(Y, {
                  class: G(["item no-spacing", { current: (Q = m(n)) == null ? void 0 : Q.includes(R), selected: m(P) === J }]),
                  onClick: S((e) => t(R), ["stop"]),
                  onMouseover: (e) => P.value = J
                }, {
                  default: c(() => [
                    A(E(r), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick", "class", "onMouseover"]);
              }), 256))
            ]),
            _: 1
          })
        ], 38)
      ]),
      _: 1
    }, 8, ["inline"]));
  }
});
const We = /* @__PURE__ */ ne(De, [["__scopeId", "data-v-f62bf379"]]), Le = ["id", "value"], Se = ["for"], $e = /* @__PURE__ */ te({
  __name: "Toggle",
  props: {
    mood: { default: "positive" },
    modelValue: { type: Boolean },
    id: {}
  },
  emits: ["checked", "unchecked", "update:modelValue"],
  setup(j, { emit: _ }) {
    const $ = j, { modelValue: d, mood: k } = ae($), n = i(() => {
      const g = d.value ? k.value : "inactive";
      return {
        active: d.value,
        [`mood-background-${g}`]: !0,
        [`mood-border-${g}`]: !0
      };
    }), w = () => {
      const g = !d.value;
      _(g ? "checked" : "unchecked"), _("update:modelValue", g);
    };
    return (g, f) => (v(), W(q, null, [
      ee("input", {
        class: "toggle-input",
        type: "checkbox",
        id: $.id,
        value: m(d),
        onChange: f[0] || (f[0] = (M) => w()),
        onKeyup: f[1] || (f[1] = Z((M) => w(), ["enter"]))
      }, null, 40, Le),
      ee("label", {
        class: G(["toggle", n.value]),
        for: $.id
      }, null, 10, Se)
    ], 64));
  }
});
const qe = /* @__PURE__ */ ne($e, [["__scopeId", "data-v-8aa21e20"]]);
export {
  X as Button,
  de as Calendar,
  Ge as DateRangePicker,
  se as Dropdown,
  me as Input,
  Qe as Link,
  We as MultiSelect,
  Ze as PopoverMenu,
  et as Toast,
  qe as Toggle
};
