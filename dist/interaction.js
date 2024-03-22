import { B as ee, D as ue, I as ve, u as me } from "./Input-7f2c48d4.js";
import { defineComponent as ne, toRefs as oe, computed as c, openBlock as d, createBlock as M, withCtx as u, createVNode as v, withModifiers as R, createElementBlock as N, Fragment as K, renderList as H, createTextVNode as S, toDisplayString as B, createCommentVNode as te, normalizeClass as X, unref as i, ref as _, watch as ie, createElementVNode as le, normalizeStyle as pe, withKeys as ae, withDirectives as fe, vModelText as ye } from "vue";
import { D as $, a as ge } from "./datetime-31a2b505.js";
import { A as D, I as be } from "./Icon-8f2ed8ba.js";
import { G as ke } from "./Grid-f3d84a6a.js";
import { I as T } from "./Info-54758b60.js";
import { dateFormat as b, normalizeRange as he, tryRangeFromDisplayFormat as Me, rangeToDisplayFormat as _e, rangeFromPreset as de } from "./utils/date.js";
import { m as we } from "./match-b8889c93.js";
import { _ as se } from "./_plugin-vue_export-helper-dad06003.js";
import { P as Ve } from "./Popover-38d3223e.js";
import { L as Ze } from "./Link-dfe99e72.js";
import { sort as re } from "./utils/sort.js";
import { B as Ie } from "./BodyPopover-9b857526.js";
import { P as tt, T as at } from "./Toast-5c462a52.js";
import "./utils/error.js";
import "vue-router";
const Ce = 7 * 6, xe = /* @__PURE__ */ ne({
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
  setup(E, { emit: k }) {
    const j = E, m = $.now(), p = m.year, { minDate: o, mode: w, monthLabels: h, range: f, weekLabels: V, yearMonth: I } = oe(j), C = c(
      () => $.fromFormat(I.value, b.yearMonth).month - 1
    ), z = c(() => $.fromFormat(I.value, b.yearMonth).year), G = c(
      () => h.value.reduce((e, n, y) => (e[y] = n, e), {})
    ), O = c(() => $.fromFormat(f.value[1], b.yearMonthDay)), x = c(() => $.fromFormat(f.value[0], b.yearMonthDay)), F = c(
      () => V != null && V.value ? Array.apply(null, Array(7)).map((e, n) => V.value[n] ?? "") : void 0
    ), L = c(() => {
      const e = $.fromFormat(o.value, b.yearMonthDay).year;
      return new Array(p - e + 1).fill(0).reduce((n, y, Q) => {
        const Z = e + Q;
        return n[Z] = Z.toString(), n;
      }, {});
    }), g = c(
      () => $.fromFormat(I.value, b.yearMonth).startOf("month")
    ), W = c(() => {
      const e = g.value.startOf("week");
      return g.value.hasSame(e, "day") ? g.value.minus(
        ge.fromObject({
          weeks: 1
        })
      ) : e;
    }), A = c(
      () => new Array(Ce).fill(0).map(
        (e, n) => W.value.plus({
          days: n
        })
      )
    ), Y = (e) => e.hasSame(g.value, "month"), l = (e) => ({
      "in-range": e >= x.value && e <= O.value,
      now: m.hasSame(e, "day"),
      "range-end": e.hasSame(O.value, "day"),
      "range-start": e.hasSame(x.value, "day"),
      "this-month": Y(e)
    }), a = (e) => m.hasSame(e, "day") ? "important" : Y(e) && e >= x.value && e <= O.value ? "accent" : "neutral", s = c(() => g.value.endOf("month") < m), P = c(
      () => $.fromFormat(o.value, b.yearMonthDay).startOf("month") < g.value
    ), U = () => {
      const e = g.value.month;
      q(e < 12 ? e : 0, e < 12 ? void 0 : g.value.year + 1);
    }, J = () => {
      const e = g.value.month - 2;
      q(e >= 0 ? e : 11, e >= 0 ? void 0 : g.value.year - 1);
    }, q = (e, n) => {
      const y = g.value.set({
        year: n,
        month: parseInt(e) + 1
      }).toFormat(b.yearMonth);
      k("update:yearMonth", y);
    }, r = (e) => {
      const n = we(w.value).when("end", () => [f.value[0], e.toFormat(b.yearMonthDay)]).when("start", () => [e.toFormat(b.yearMonthDay), f.value[1]]).done;
      k("update:range", he(n));
    }, t = (e) => {
      const n = g.value.set({
        year: parseInt(e)
      }).toFormat(b.yearMonth);
      k("update:yearMonth", n);
    };
    return (e, n) => (d(), M(D, {
      class: "calendar",
      column: ""
    }, {
      default: u(() => [
        v(D, { class: "header" }, {
          default: u(() => [
            v(ee, {
              class: "month-picker",
              onClick: n[0] || (n[0] = R(() => J(), ["stop"])),
              disabled: !P.value,
              tabindex: -1,
              icon: "chevron-left",
              mood: "neutral",
              outline: "",
              size: "large-4"
            }, null, 8, ["disabled"]),
            v(ue, {
              class: "flex-max spacing-small",
              "onUpdate:modelValue": n[1] || (n[1] = (y) => q(y)),
              items: G.value,
              modelValue: C.value,
              tabindex: -1,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            v(ue, {
              class: "spacing-small",
              "onUpdate:modelValue": n[2] || (n[2] = (y) => t(y)),
              items: L.value,
              modelValue: z.value,
              tabindex: -1,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            v(ee, {
              class: "month-picker spacing-small",
              onClick: n[3] || (n[3] = R(() => U(), ["stop"])),
              disabled: !s.value,
              tabindex: -1,
              icon: "chevron-right",
              mood: "neutral",
              outline: "",
              size: "large-4"
            }, null, 8, ["disabled"])
          ]),
          _: 1
        }),
        v(D, {
          class: "calendar-grid-container flex-max",
          horizontal: "center",
          vertical: "center"
        }, {
          default: u(() => [
            v(ke, {
              class: "calendar-grid no-spacing",
              columns: 7
            }, {
              default: u(() => [
                F.value ? (d(!0), N(K, { key: 0 }, H(F.value, (y) => (d(), M(T, {
                  class: "week-label",
                  important: ""
                }, {
                  default: u(() => [
                    S(B(y), 1)
                  ]),
                  _: 2
                }, 1024))), 256)) : te("", !0),
                (d(!0), N(K, null, H(A.value, (y) => (d(), M(ee, {
                  class: X(["day", l(y)]),
                  onClick: R(() => r(y), ["stop"]),
                  disabled: y > i(m),
                  label: y.day.toString(),
                  mood: a(y),
                  outline: a(y) === "neutral",
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
const ce = /* @__PURE__ */ se(xe, [["__scopeId", "data-v-8d6b8d9a"]]), Fe = /* @__PURE__ */ ne({
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
  setup(E, { emit: k }) {
    const j = E, { dateRangePresets: m, disabled: p, modelValue: o } = oe(j), w = _(!1), h = _(), f = _(), V = (l) => {
      const a = $.fromFormat(l[0], b.yearMonthDay), s = $.fromFormat(l[1], b.yearMonthDay), P = a.toFormat(b.yearMonth), U = a.hasSame(s, "month") && s.endOf("month") < $.now() ? s.plus({ month: 1 }).toFormat(b.yearMonth) : s.toFormat(b.yearMonth);
      return [P, U];
    }, I = () => _e(o.value), C = _(I()), z = (l) => {
      const a = V(l);
      A.value = a[0], Y.value = a[1];
    }, G = () => {
      var l;
      w.value || p.value || (w.value = !0, z(o.value), (l = f.value) == null || l.$el.focus());
    }, O = (l) => {
      const [a, s] = de(l);
      return a === o.value[0] && s === o.value[1];
    }, x = _("start"), F = (l) => {
      k("update:modelValue", l), x.value === "start" ? x.value = "end" : L();
    };
    ie(o, () => {
      C.value = I();
    });
    const L = (l) => {
      var a, s, P;
      if (!l || !((a = h.value) != null && a.$el.contains(l.relatedTarget))) {
        w.value = !1, x.value = "start", (s = f.value) == null || s.$el.blur();
        return;
      }
      (P = f.value) == null || P.$el.focus();
    }, g = (l) => {
      const a = de(m.value[l]);
      k("update:modelValue", a), z(a), L();
    }, W = V(o.value), A = _(W[0]), Y = _(W[1]);
    return ie(C, (l) => {
      const a = Me(l);
      a && k("update:modelValue", a);
    }), (l, a) => (d(), M(D, {
      class: "date-range-picker",
      onClick: a[7] || (a[7] = (s) => G()),
      ref_key: "dateRangePicker",
      ref: h,
      tabindex: "-1"
    }, {
      default: u(() => [
        v(ve, {
          ref_key: "dateRangePickerInput",
          ref: f,
          modelValue: C.value,
          "onUpdate:modelValue": a[0] || (a[0] = (s) => C.value = s),
          onFocus: a[1] || (a[1] = (s) => G()),
          onBlur: a[2] || (a[2] = (s) => L(s)),
          disabled: i(p)
        }, null, 8, ["modelValue", "disabled"]),
        v(ee, {
          class: "no-spacing",
          disabled: i(p),
          icon: "calendar",
          mood: "inactive",
          tabindex: "-1"
        }, null, 8, ["disabled"]),
        v(Ve, {
          class: "date-range-picker-body no-spacing",
          visible: w.value
        }, {
          default: u(() => [
            v(D, { class: "sections" }, {
              default: u(() => [
                v(D, {
                  class: "presets",
                  column: ""
                }, {
                  default: u(() => [
                    (d(!0), N(K, null, H(i(m), (s, P) => (d(), M(T, {
                      class: X(["preset", { active: O(s) }]),
                      onClick: R(() => g(P), ["stop"]),
                      size: "small"
                    }, {
                      default: u(() => [
                        S(B(l.translator(s.label)), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick", "class"]))), 256))
                  ]),
                  _: 1
                }),
                v(D, { class: "calendars" }, {
                  default: u(() => [
                    v(ce, {
                      "onUpdate:range": a[3] || (a[3] = (s) => F(s)),
                      yearMonth: A.value,
                      "onUpdate:yearMonth": a[4] || (a[4] = (s) => A.value = s),
                      mode: x.value,
                      monthLabels: l.monthLabels,
                      range: i(o),
                      weekLabels: l.weekLabels
                    }, null, 8, ["yearMonth", "mode", "monthLabels", "range", "weekLabels"]),
                    v(ce, {
                      "onUpdate:range": a[5] || (a[5] = (s) => F(s)),
                      yearMonth: Y.value,
                      "onUpdate:yearMonth": a[6] || (a[6] = (s) => Y.value = s),
                      mode: x.value,
                      monthLabels: l.monthLabels,
                      range: i(o),
                      weekLabels: l.weekLabels
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
const Xe = /* @__PURE__ */ se(Fe, [["__scopeId", "data-v-cd797576"]]), Le = ["disabled"], Se = /* @__PURE__ */ ne({
  __name: "MultiSelect",
  props: {
    allItemsLabel: {},
    disabled: { type: Boolean, default: !1 },
    items: {},
    modelValue: {},
    noInline: { type: Boolean, default: !1 },
    showAllItemsItem: { type: Boolean, default: !1 },
    collapseTags: { type: Boolean, default: !1 },
    collapseTagsLabel: { default: "" },
    collapseTagsTooltip: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(E, { emit: k }) {
    const j = E, { disabled: m, items: p, modelValue: o, showAllItemsItem: w, collapseTags: h } = oe(j), f = _(!1), V = _(null), I = _(null), C = _(""), z = _(!1), G = _(), O = c(() => !o || !o.value ? !1 : Object.keys(p.value).every((r) => o.value.includes(r))), x = c(() => Object.values(p.value).sort(re).join(", ")), F = c(() => (A(), (C.value ? Object.entries(p.value).filter(([, t]) => t.toLowerCase().includes(C.value.toLowerCase())).map(([t]) => t) : Object.keys(p.value)).sort(re).reduce((t, e) => (t[e] = p.value[e], t), {}))), { selectedItem: L, onKeypressDown: g, onKeypressUp: W, clearSelectedItem: A } = me({
      length: c(() => Object.keys(F.value).length)
    }), Y = c(() => o != null && o.value ? -Object.keys(F.value).indexOf(o.value.toString()) : 1), l = c(() => !o || !o.value ? [] : [...o.value].sort(re)), a = c(() => {
      let r = Object.keys(F.value).length;
      return w.value && r++, {
        "--item-count": r,
        "--selection-offset": Y.value
      };
    }), s = () => {
      var r;
      m.value || (f.value = !0, z.value = !1, (r = I.value) == null || r.focus());
    }, P = (r) => {
      var t, e;
      (t = V.value) != null && t.$el.contains(r.relatedTarget) || (f.value = !1, C.value = "", (e = I.value) == null || e.blur(), A());
    }, U = (r) => {
      var n;
      if (!(o != null && o.value) || m != null && m.value || !f.value)
        return;
      if (!r) {
        J(Object.keys(p.value));
        return;
      }
      const t = O.value ? [] : [...o.value], e = t.indexOf(r);
      e >= 0 ? t.splice(e, 1) : t.push(r), k("update:modelValue", t), (n = I.value) == null || n.focus({ preventScroll: !0 });
    }, J = (r) => {
      var t;
      k("update:modelValue", r), (t = I.value) == null || t.focus({ preventScroll: !0 });
    }, q = c(() => {
      let r = p.value[l.value[1]];
      for (let t = 2; t < l.value.length; t++)
        r += ", " + p.value[l.value[t]];
      return r;
    });
    return (r, t) => (d(), M(D, {
      class: "multiselect-container",
      ref_key: "multiSelectContainer",
      ref: V,
      inline: !r.noInline,
      column: ""
    }, {
      default: u(() => [
        le("div", {
          class: X(["multiselect", { active: f.value, disabled: i(m) }]),
          onClick: t[9] || (t[9] = (e) => s()),
          style: pe(a.value),
          tabindex: "-1",
          onKeydown: [
            t[10] || (t[10] = ae(R((e) => i(g)(), ["prevent"]), ["down"])),
            t[11] || (t[11] = ae(R((e) => i(W)(), ["prevent"]), ["up"])),
            t[12] || (t[12] = ae(R((e) => U(Object.keys(F.value)[i(L) - 1]), ["prevent"]), ["enter"]))
          ]
        }, [
          v(D, {
            class: "current-item",
            vertical: "center"
          }, {
            default: u(() => [
              !i(o) || i(o).length === 0 ? (d(), M(T, {
                key: 0,
                class: "default-value"
              }, {
                default: u(() => [
                  S(" ")
                ]),
                _: 1
              })) : (d(), M(D, {
                key: 1,
                class: "current-values",
                wrap: !i(h)
              }, {
                default: u(() => {
                  var e;
                  return [
                    O.value && r.allItemsLabel ? (d(), M(T, {
                      key: 0,
                      class: "current-value all-items",
                      title: x.value
                    }, {
                      default: u(() => [
                        S(B(r.allItemsLabel), 1)
                      ]),
                      _: 1
                    }, 8, ["title"])) : i(h) ? (d(), N(K, { key: 1 }, [
                      v(T, {
                        class: "current-value no-spacing cuttable",
                        onClick: t[0] || (t[0] = () => U(l.value[0]))
                      }, {
                        default: u(() => [
                          S(B(i(p)[l.value[0]]), 1)
                        ]),
                        _: 1
                      }),
                      l.value.length === 2 ? (d(), M(T, {
                        key: 0,
                        class: "current-value no-spacing cuttable",
                        onClick: t[1] || (t[1] = () => U(l.value[1]))
                      }, {
                        default: u(() => [
                          S(B(i(p)[l.value[1]]), 1)
                        ]),
                        _: 1
                      })) : l.value.length > 2 ? (d(), N(K, { key: 1 }, [
                        v(T, {
                          class: "current-value no-spacing",
                          ref_key: "collapseTagRef",
                          ref: G,
                          onMouseover: t[2] || (t[2] = (n) => z.value = !f.value),
                          onMouseleave: t[3] || (t[3] = (n) => z.value = !1)
                        }, {
                          default: u(() => [
                            S(B(r.collapseTagsLabel), 1)
                          ]),
                          _: 1
                        }, 512),
                        r.collapseTagsTooltip ? (d(), M(Ie, {
                          key: 0,
                          visible: z.value,
                          autoPosition: "",
                          parentNode: (e = G.value) == null ? void 0 : e.$el,
                          popoverClass: "collapse-tooltip",
                          placementY: "top",
                          placementX: "left"
                        }, {
                          default: u(() => [
                            v(T, null, {
                              default: u(() => [
                                S(B(q.value), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["visible", "parentNode"])) : te("", !0)
                      ], 64)) : te("", !0)
                    ], 64)) : (d(!0), N(K, { key: 2 }, H(l.value, (n) => (d(), M(T, {
                      class: "current-value no-spacing",
                      onClick: R(() => U(n), ["stop"])
                    }, {
                      default: u(() => [
                        S(B(i(p)[n]), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"]))), 256))
                  ];
                }),
                _: 1
              }, 8, ["wrap"])),
              fe(le("input", {
                class: "flex-max new-value-input no-spacing",
                ref_key: "newValueInput",
                ref: I,
                "onUpdate:modelValue": t[4] || (t[4] = (e) => C.value = e),
                onBlur: t[5] || (t[5] = (e) => P(e)),
                onFocus: t[6] || (t[6] = (e) => s()),
                disabled: i(m)
              }, null, 40, Le), [
                [ye, C.value]
              ]),
              v(be, {
                backend: "boxicons-solid",
                size: "small-2",
                value: "down-arrow"
              })
            ]),
            _: 1
          }),
          v(D, {
            class: "dropdown-menu no-spacing",
            column: ""
          }, {
            default: u(() => [
              i(w) ? (d(), M(T, {
                key: 0,
                class: X(["item", { current: O.value, selected: i(L) === 0 }]),
                onClick: t[7] || (t[7] = R((e) => J(Object.keys(i(p))), ["stop"])),
                onMouseover: t[8] || (t[8] = (e) => L.value = 0)
              }, {
                default: u(() => [
                  S(B(r.allItemsLabel), 1)
                ]),
                _: 1
              }, 8, ["class"])) : te("", !0),
              (d(!0), N(K, null, H(F.value, (e, n, y) => {
                var Q;
                return d(), M(T, {
                  class: X(["item no-spacing", { current: ((Q = i(o)) == null ? void 0 : Q.includes(n)) && !O.value, selected: i(L) - 1 === y }]),
                  onClick: R((Z) => U(n), ["stop"]),
                  onMouseover: (Z) => L.value = y + 1
                }, {
                  default: u(() => [
                    S(B(e), 1)
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
const qe = /* @__PURE__ */ se(Se, [["__scopeId", "data-v-c524578a"]]), Te = ["id", "value"], $e = ["for"], De = /* @__PURE__ */ ne({
  __name: "Toggle",
  props: {
    mood: { default: "positive" },
    modelValue: { type: Boolean },
    id: {}
  },
  emits: ["checked", "unchecked", "update:modelValue"],
  setup(E, { emit: k }) {
    const j = E, { modelValue: m, mood: p } = oe(j), o = c(() => {
      const h = m.value ? p.value : "inactive";
      return {
        active: m.value,
        [`mood-background-${h}`]: !0,
        [`mood-border-${h}`]: !0
      };
    }), w = () => {
      const h = !m.value;
      k(h ? "checked" : "unchecked"), k("update:modelValue", h);
    };
    return (h, f) => (d(), N(K, null, [
      le("input", {
        class: "toggle-input",
        type: "checkbox",
        id: j.id,
        value: i(m),
        onChange: f[0] || (f[0] = (V) => w()),
        onKeyup: f[1] || (f[1] = ae((V) => w(), ["enter"]))
      }, null, 40, Te),
      le("label", {
        class: X(["toggle", o.value]),
        for: j.id
      }, null, 10, $e)
    ], 64));
  }
});
const He = /* @__PURE__ */ se(De, [["__scopeId", "data-v-8aa21e20"]]);
export {
  ee as Button,
  ce as Calendar,
  Xe as DateRangePicker,
  ue as Dropdown,
  ve as Input,
  Ze as Link,
  qe as MultiSelect,
  tt as PopoverMenu,
  at as Toast,
  He as Toggle
};
