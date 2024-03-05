import { B as Q, D as se, I as me, u as ve } from "./Input-7f2c48d4.js";
import { defineComponent as ee, toRefs as te, computed as i, openBlock as v, createBlock as V, withCtx as c, createVNode as p, withModifiers as S, createElementBlock as W, Fragment as q, renderList as H, createTextVNode as A, toDisplayString as E, createCommentVNode as ie, normalizeClass as G, unref as m, ref as F, watch as re, createElementVNode as Z, normalizeStyle as pe, withKeys as X, withDirectives as fe, vModelText as ye } from "vue";
import { D as C, a as ge } from "./datetime-31a2b505.js";
import { A as D, I as be } from "./Icon-8f2ed8ba.js";
import { G as he } from "./Grid-f3d84a6a.js";
import { I as Y } from "./Info-54758b60.js";
import { dateFormat as h, normalizeRange as ke, tryRangeFromDisplayFormat as Me, rangeToDisplayFormat as _e, rangeFromPreset as ue } from "./utils/date.js";
import { m as we } from "./match-b8889c93.js";
import { _ as ae } from "./_plugin-vue_export-helper-dad06003.js";
import { P as Ie } from "./Popover-38d3223e.js";
import { L as Qe } from "./Link-3e37d26a.js";
import { sort as le } from "./utils/sort.js";
import { P as Ze, T as et } from "./Toast-5c462a52.js";
import "./utils/error.js";
import "vue-router";
const Ve = 7 * 6, xe = /* @__PURE__ */ ee({
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
  setup(B, { emit: M }) {
    const $ = B, d = C.now(), k = d.year, { minDate: n, mode: w, monthLabels: g, range: f, weekLabels: _, yearMonth: I } = te($), O = i(
      () => C.fromFormat(I.value, h.yearMonth).month - 1
    ), K = i(() => C.fromFormat(I.value, h.yearMonth).year), L = i(
      () => g.value.reduce((e, u, y) => (e[y] = u, e), {})
    ), R = i(() => C.fromFormat(f.value[1], h.yearMonthDay)), x = i(() => C.fromFormat(f.value[0], h.yearMonthDay)), j = i(
      () => _ != null && _.value ? Array.apply(null, Array(7)).map((e, u) => _.value[u] ?? "") : void 0
    ), z = i(() => {
      const e = C.fromFormat(n.value, h.yearMonthDay).year;
      return new Array(k - e + 1).fill(0).reduce((u, y, ce) => {
        const oe = e + ce;
        return u[oe] = oe.toString(), u;
      }, {});
    }), b = i(
      () => C.fromFormat(I.value, h.yearMonth).startOf("month")
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
    ), P = (e) => e.hasSame(b.value, "month"), s = (e) => ({
      "in-range": e >= x.value && e <= R.value,
      now: d.hasSame(e, "day"),
      "range-end": e.hasSame(R.value, "day"),
      "range-start": e.hasSame(x.value, "day"),
      "this-month": P(e)
    }), t = (e) => d.hasSame(e, "day") ? "important" : P(e) && e >= x.value && e <= R.value ? "accent" : "neutral", l = i(() => b.value.endOf("month") < d), o = i(
      () => C.fromFormat(n.value, h.yearMonthDay).startOf("month") < b.value
    ), a = () => {
      const e = b.value.month;
      T(e < 12 ? e : 0, e < 12 ? void 0 : b.value.year + 1);
    }, r = () => {
      const e = b.value.month - 2;
      T(e >= 0 ? e : 11, e >= 0 ? void 0 : b.value.year - 1);
    }, T = (e, u) => {
      const y = b.value.set({
        year: u,
        month: parseInt(e) + 1
      }).toFormat(h.yearMonth);
      M("update:yearMonth", y);
    }, ne = (e) => {
      const u = we(w.value).when("end", () => [f.value[0], e.toFormat(h.yearMonthDay)]).when("start", () => [e.toFormat(h.yearMonthDay), f.value[1]]).done;
      M("update:range", ke(u));
    }, J = (e) => {
      const u = b.value.set({
        year: parseInt(e)
      }).toFormat(h.yearMonth);
      M("update:yearMonth", u);
    };
    return (e, u) => (v(), V(D, {
      class: "calendar",
      column: ""
    }, {
      default: c(() => [
        p(D, { class: "header" }, {
          default: c(() => [
            p(Q, {
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
              "onUpdate:modelValue": u[1] || (u[1] = (y) => T(y)),
              items: L.value,
              modelValue: O.value,
              tabindex: -1,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            p(se, {
              class: "spacing-small",
              "onUpdate:modelValue": u[2] || (u[2] = (y) => J(y)),
              items: z.value,
              modelValue: K.value,
              tabindex: -1,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            p(Q, {
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
                j.value ? (v(!0), W(q, { key: 0 }, H(j.value, (y) => (v(), V(Y, {
                  class: "week-label",
                  important: ""
                }, {
                  default: c(() => [
                    A(E(y), 1)
                  ]),
                  _: 2
                }, 1024))), 256)) : ie("", !0),
                (v(!0), W(q, null, H(U.value, (y) => (v(), V(Q, {
                  class: G(["day", s(y)]),
                  onClick: S(() => ne(y), ["stop"]),
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
const de = /* @__PURE__ */ ae(xe, [["__scopeId", "data-v-8d6b8d9a"]]), Ce = /* @__PURE__ */ ee({
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
  setup(B, { emit: M }) {
    const $ = B, { dateRangePresets: d, disabled: k, modelValue: n } = te($), w = F(!1), g = F(), f = F(), _ = (s) => {
      const t = C.fromFormat(s[0], h.yearMonthDay), l = C.fromFormat(s[1], h.yearMonthDay), o = t.toFormat(h.yearMonth), a = t.hasSame(l, "month") && l.endOf("month") < C.now() ? l.plus({ month: 1 }).toFormat(h.yearMonth) : l.toFormat(h.yearMonth);
      return [o, a];
    }, I = () => _e(n.value), O = F(I()), K = (s) => {
      const t = _(s);
      U.value = t[0], P.value = t[1];
    }, L = () => {
      var s;
      w.value || k.value || (w.value = !0, K(n.value), (s = f.value) == null || s.$el.focus());
    }, R = (s) => {
      const [t, l] = ue(s);
      return t === n.value[0] && l === n.value[1];
    }, x = F("start"), j = (s) => {
      M("update:modelValue", s), x.value === "start" ? x.value = "end" : z();
    };
    re(n, () => {
      O.value = I();
    });
    const z = (s) => {
      var t, l, o;
      if (!s || !((t = g.value) != null && t.$el.contains(s.relatedTarget))) {
        w.value = !1, x.value = "start", (l = f.value) == null || l.$el.blur();
        return;
      }
      (o = f.value) == null || o.$el.focus();
    }, b = (s) => {
      const t = ue(d.value[s]);
      M("update:modelValue", t), K(t), z();
    }, N = _(n.value), U = F(N[0]), P = F(N[1]);
    return re(O, (s) => {
      const t = Me(s);
      t && M("update:modelValue", t);
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
          onBlur: t[2] || (t[2] = (l) => z(l)),
          disabled: m(k)
        }, null, 8, ["modelValue", "disabled"]),
        p(Q, {
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
                      class: G(["preset", { active: R(l) }]),
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
                      "onUpdate:range": t[3] || (t[3] = (l) => j(l)),
                      yearMonth: U.value,
                      "onUpdate:yearMonth": t[4] || (t[4] = (l) => U.value = l),
                      mode: x.value,
                      monthLabels: s.monthLabels,
                      range: m(n),
                      weekLabels: s.weekLabels
                    }, null, 8, ["yearMonth", "mode", "monthLabels", "range", "weekLabels"]),
                    p(de, {
                      "onUpdate:range": t[5] || (t[5] = (l) => j(l)),
                      yearMonth: P.value,
                      "onUpdate:yearMonth": t[6] || (t[6] = (l) => P.value = l),
                      mode: x.value,
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
const Ge = /* @__PURE__ */ ae(Ce, [["__scopeId", "data-v-cd797576"]]), Fe = ["disabled"], De = /* @__PURE__ */ ee({
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
  setup(B, { emit: M }) {
    const $ = B, { disabled: d, items: k, modelValue: n, showAllItemsItem: w } = te($), g = F(!1), f = F(null), _ = F(null), I = F(""), O = i(() => !n || !n.value ? !1 : Object.keys(k.value).every((o) => n.value.includes(o))), K = i(() => Object.values(k.value).sort(le).join(", ")), L = i(() => (z(), (I.value ? Object.entries(k.value).filter(([, a]) => a.toLowerCase().includes(I.value.toLowerCase())).map(([a]) => a) : Object.keys(k.value)).sort(le).reduce((a, r) => (a[r] = k.value[r], a), {}))), { selectedItem: R, onKeypressDown: x, onKeypressUp: j, clearSelectedItem: z } = ve({
      length: i(() => Object.keys(L.value).length - 1)
    }), b = i(() => n != null && n.value ? -Object.keys(L.value).indexOf(n.value.toString()) : 1), N = i(() => !n || !n.value ? [] : [...n.value].sort(le)), U = i(() => {
      let o = Object.keys(L.value).length;
      return w.value && o++, {
        "--item-count": o,
        "--selection-offset": b.value
      };
    }), P = () => {
      var o;
      d.value || (g.value = !0, (o = _.value) == null || o.focus());
    }, s = (o) => {
      var a, r, T;
      if (!((a = f.value) != null && a.$el.contains(o.relatedTarget))) {
        g.value = !1, I.value = "", (r = _.value) == null || r.blur();
        return;
      }
      (T = _.value) == null || T.focus();
    }, t = (o) => {
      if (!(n != null && n.value) || d != null && d.value || !g.value)
        return;
      const a = [...n.value], r = a.indexOf(o);
      r >= 0 ? a.splice(r, 1) : a.push(o), M("update:modelValue", a);
    }, l = (o) => {
      M("update:modelValue", o);
    };
    return (o, a) => (v(), V(D, {
      class: "multiselect-container",
      ref_key: "multiSelectContainer",
      ref: f,
      inline: !o.noInline,
      column: ""
    }, {
      default: c(() => [
        Z("div", {
          class: G(["multiselect", { active: g.value, disabled: m(d) }]),
          onClick: a[4] || (a[4] = (r) => P()),
          style: pe(U.value),
          tabindex: "-1",
          onKeydown: [
            a[5] || (a[5] = X(S((r) => m(x)(), ["prevent"]), ["down"])),
            a[6] || (a[6] = X(S((r) => m(j)(), ["prevent"]), ["up"])),
            a[7] || (a[7] = X(S((r) => t(Object.keys(L.value)[m(R)]), ["prevent"]), ["enter"]))
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
              fe(Z("input", {
                class: "flex-max new-value-input no-spacing",
                ref_key: "newValueInput",
                ref: _,
                "onUpdate:modelValue": a[0] || (a[0] = (r) => I.value = r),
                onBlur: a[1] || (a[1] = (r) => s(r)),
                onFocus: a[2] || (a[2] = (r) => P()),
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
              (v(!0), W(q, null, H(L.value, (r, T, ne) => {
                var J;
                return v(), V(Y, {
                  class: G(["item no-spacing", { current: (J = m(n)) == null ? void 0 : J.includes(T), selected: m(R) === ne }]),
                  onClick: S((e) => t(T), ["stop"])
                }, {
                  default: c(() => [
                    A(E(r), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick", "class"]);
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
const We = /* @__PURE__ */ ae(De, [["__scopeId", "data-v-d8373154"]]), Le = ["id", "value"], Se = ["for"], $e = /* @__PURE__ */ ee({
  __name: "Toggle",
  props: {
    mood: { default: "positive" },
    modelValue: { type: Boolean },
    id: {}
  },
  emits: ["checked", "unchecked", "update:modelValue"],
  setup(B, { emit: M }) {
    const $ = B, { modelValue: d, mood: k } = te($), n = i(() => {
      const g = d.value ? k.value : "inactive";
      return {
        active: d.value,
        [`mood-background-${g}`]: !0,
        [`mood-border-${g}`]: !0
      };
    }), w = () => {
      const g = !d.value;
      M(g ? "checked" : "unchecked"), M("update:modelValue", g);
    };
    return (g, f) => (v(), W(q, null, [
      Z("input", {
        class: "toggle-input",
        type: "checkbox",
        id: $.id,
        value: m(d),
        onChange: f[0] || (f[0] = (_) => w()),
        onKeyup: f[1] || (f[1] = X((_) => w(), ["enter"]))
      }, null, 40, Le),
      Z("label", {
        class: G(["toggle", n.value]),
        for: $.id
      }, null, 10, Se)
    ], 64));
  }
});
const qe = /* @__PURE__ */ ae($e, [["__scopeId", "data-v-8aa21e20"]]);
export {
  Q as Button,
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
