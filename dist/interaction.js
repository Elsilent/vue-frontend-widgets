import { B as Z, D as ue, I as pe, u as fe } from "./Input-633fea29.js";
import { defineComponent as ee, toRefs as se, computed as g, openBlock as s, createBlock as _, withCtx as u, createVNode as m, withModifiers as z, createElementBlock as x, Fragment as U, renderList as H, createTextVNode as $, toDisplayString as B, createCommentVNode as X, normalizeClass as q, unref as v, ref as V, watch as ie, onUnmounted as ye, normalizeStyle as ve, createElementVNode as oe, withKeys as ne, withDirectives as ge, vModelText as be } from "vue";
import { D as P, a as _e } from "./datetime-31a2b505.js";
import { A as L, I as me } from "./Icon-8f2ed8ba.js";
import { G as ke } from "./Grid-f3d84a6a.js";
import { I as D } from "./Info-54758b60.js";
import { dateFormat as M, normalizeRange as he, tryRangeFromDisplayFormat as we, rangeToDisplayFormat as Me, rangeFromPreset as de } from "./utils/date.js";
import { m as Ce } from "./match-b8889c93.js";
import { _ as J } from "./_plugin-vue_export-helper-dad06003.js";
import { P as Ve } from "./Popover-38d3223e.js";
import { L as it } from "./Link-dfe99e72.js";
import { sort as re } from "./utils/sort.js";
import { B as xe } from "./BodyPopover-9b857526.js";
import { P as ct, T as vt } from "./Toast-934c7397.js";
import "./utils/error.js";
import "vue-router";
const Ie = 7 * 6, $e = /* @__PURE__ */ ee({
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
  setup(A, { emit: y }) {
    const S = A, f = P.now(), c = f.year, { minDate: o, mode: h, monthLabels: p, range: d, weekLabels: k, yearMonth: C } = se(S), I = g(
      () => P.fromFormat(C.value, M.yearMonth).month - 1
    ), N = g(() => P.fromFormat(C.value, M.yearMonth).year), G = g(
      () => p.value.reduce((e, n, b) => (e[b] = n, e), {})
    ), R = g(() => P.fromFormat(d.value[1], M.yearMonthDay)), F = g(() => P.fromFormat(d.value[0], M.yearMonthDay)), T = g(
      () => k != null && k.value ? Array.apply(null, Array(7)).map((e, n) => k.value[n] ?? "") : void 0
    ), O = g(() => {
      const e = P.fromFormat(o.value, M.yearMonthDay).year;
      return new Array(c - e + 1).fill(0).reduce((n, b, ae) => {
        const le = e + ae;
        return n[le] = le.toString(), n;
      }, {});
    }), w = g(
      () => P.fromFormat(C.value, M.yearMonth).startOf("month")
    ), W = g(() => {
      const e = w.value.startOf("week");
      return w.value.hasSame(e, "day") ? w.value.minus(
        _e.fromObject({
          weeks: 1
        })
      ) : e;
    }), E = g(
      () => new Array(Ie).fill(0).map(
        (e, n) => W.value.plus({
          days: n
        })
      )
    ), K = (e) => e.hasSame(w.value, "month"), l = (e) => ({
      "in-range": e >= F.value && e <= R.value,
      now: f.hasSame(e, "day"),
      "range-end": e.hasSame(R.value, "day"),
      "range-start": e.hasSame(F.value, "day"),
      "this-month": K(e)
    }), a = (e) => f.hasSame(e, "day") ? "important" : K(e) && e >= F.value && e <= R.value ? "accent" : "neutral", r = g(() => w.value.endOf("month") < f), j = g(
      () => P.fromFormat(o.value, M.yearMonthDay).startOf("month") < w.value
    ), Y = () => {
      const e = w.value.month;
      Q(e < 12 ? e : 0, e < 12 ? void 0 : w.value.year + 1);
    }, te = () => {
      const e = w.value.month - 2;
      Q(e >= 0 ? e : 11, e >= 0 ? void 0 : w.value.year - 1);
    }, Q = (e, n) => {
      const b = w.value.set({
        year: n,
        month: parseInt(e) + 1
      }).toFormat(M.yearMonth);
      y("update:yearMonth", b);
    }, i = (e) => {
      const n = Ce(h.value).when("end", () => [d.value[0], e.toFormat(M.yearMonthDay)]).when("start", () => [e.toFormat(M.yearMonthDay), d.value[1]]).done;
      y("update:range", he(n));
    }, t = (e) => {
      const n = w.value.set({
        year: parseInt(e)
      }).toFormat(M.yearMonth);
      y("update:yearMonth", n);
    };
    return (e, n) => (s(), _(L, {
      class: "calendar",
      column: ""
    }, {
      default: u(() => [
        m(L, { class: "header" }, {
          default: u(() => [
            m(Z, {
              class: "month-picker",
              onClick: n[0] || (n[0] = z(() => te(), ["stop"])),
              disabled: !j.value,
              tabindex: -1,
              icon: "chevron-left",
              mood: "neutral",
              outline: "",
              size: "large-4"
            }, null, 8, ["disabled"]),
            m(ue, {
              class: "flex-max spacing-small",
              "onUpdate:modelValue": n[1] || (n[1] = (b) => Q(b)),
              items: G.value,
              modelValue: I.value,
              tabindex: -1,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            m(ue, {
              class: "spacing-small",
              "onUpdate:modelValue": n[2] || (n[2] = (b) => t(b)),
              items: O.value,
              modelValue: N.value,
              tabindex: -1,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            m(Z, {
              class: "month-picker spacing-small",
              onClick: n[3] || (n[3] = z(() => Y(), ["stop"])),
              disabled: !r.value,
              tabindex: -1,
              icon: "chevron-right",
              mood: "neutral",
              outline: "",
              size: "large-4"
            }, null, 8, ["disabled"])
          ]),
          _: 1
        }),
        m(L, {
          class: "calendar-grid-container flex-max",
          horizontal: "center",
          vertical: "center"
        }, {
          default: u(() => [
            m(ke, {
              class: "calendar-grid no-spacing",
              columns: 7
            }, {
              default: u(() => [
                T.value ? (s(!0), x(U, { key: 0 }, H(T.value, (b) => (s(), _(D, {
                  class: "week-label",
                  important: ""
                }, {
                  default: u(() => [
                    $(B(b), 1)
                  ]),
                  _: 2
                }, 1024))), 256)) : X("", !0),
                (s(!0), x(U, null, H(E.value, (b) => (s(), _(Z, {
                  class: q(["day", l(b)]),
                  onClick: z(() => i(b), ["stop"]),
                  disabled: b > v(f),
                  label: b.day.toString(),
                  mood: a(b),
                  outline: a(b) === "neutral",
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
const ce = /* @__PURE__ */ J($e, [["__scopeId", "data-v-8d6b8d9a"]]), De = /* @__PURE__ */ ee({
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
  setup(A, { emit: y }) {
    const S = A, { dateRangePresets: f, disabled: c, modelValue: o } = se(S), h = V(!1), p = V(), d = V(), k = (l) => {
      const a = P.fromFormat(l[0], M.yearMonthDay), r = P.fromFormat(l[1], M.yearMonthDay), j = a.toFormat(M.yearMonth), Y = a.hasSame(r, "month") && r.endOf("month") < P.now() ? r.plus({ month: 1 }).toFormat(M.yearMonth) : r.toFormat(M.yearMonth);
      return [j, Y];
    }, C = () => Me(o.value), I = V(C()), N = (l) => {
      const a = k(l);
      E.value = a[0], K.value = a[1];
    }, G = () => {
      var l;
      h.value || c.value || (h.value = !0, N(o.value), (l = d.value) == null || l.$el.focus());
    }, R = (l) => {
      const [a, r] = de(l);
      return a === o.value[0] && r === o.value[1];
    }, F = V("start"), T = (l) => {
      y("update:modelValue", l), F.value === "start" ? F.value = "end" : O();
    };
    ie(o, () => {
      I.value = C();
    });
    const O = (l) => {
      var a, r, j;
      if (!l || !((a = p.value) != null && a.$el.contains(l.relatedTarget))) {
        h.value = !1, F.value = "start", (r = d.value) == null || r.$el.blur();
        return;
      }
      (j = d.value) == null || j.$el.focus();
    }, w = (l) => {
      const a = de(f.value[l]);
      y("update:modelValue", a), N(a), O();
    }, W = k(o.value), E = V(W[0]), K = V(W[1]);
    return ie(I, (l) => {
      const a = we(l);
      a && y("update:modelValue", a);
    }), (l, a) => (s(), _(L, {
      class: "date-range-picker",
      onClick: a[7] || (a[7] = (r) => G()),
      ref_key: "dateRangePicker",
      ref: p,
      tabindex: "-1"
    }, {
      default: u(() => [
        m(pe, {
          ref_key: "dateRangePickerInput",
          ref: d,
          modelValue: I.value,
          "onUpdate:modelValue": a[0] || (a[0] = (r) => I.value = r),
          onFocus: a[1] || (a[1] = (r) => G()),
          onBlur: a[2] || (a[2] = (r) => O(r)),
          disabled: v(c)
        }, null, 8, ["modelValue", "disabled"]),
        m(Z, {
          class: "no-spacing",
          disabled: v(c),
          icon: "calendar",
          mood: "inactive",
          tabindex: "-1"
        }, null, 8, ["disabled"]),
        m(Ve, {
          class: "date-range-picker-body no-spacing",
          visible: h.value
        }, {
          default: u(() => [
            m(L, { class: "sections" }, {
              default: u(() => [
                m(L, {
                  class: "presets",
                  column: ""
                }, {
                  default: u(() => [
                    (s(!0), x(U, null, H(v(f), (r, j) => (s(), _(D, {
                      class: q(["preset", { active: R(r) }]),
                      onClick: z(() => w(j), ["stop"]),
                      size: "small"
                    }, {
                      default: u(() => [
                        $(B(l.translator(r.label)), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick", "class"]))), 256))
                  ]),
                  _: 1
                }),
                m(L, { class: "calendars" }, {
                  default: u(() => [
                    m(ce, {
                      "onUpdate:range": a[3] || (a[3] = (r) => T(r)),
                      yearMonth: E.value,
                      "onUpdate:yearMonth": a[4] || (a[4] = (r) => E.value = r),
                      mode: F.value,
                      monthLabels: l.monthLabels,
                      range: v(o),
                      weekLabels: l.weekLabels
                    }, null, 8, ["yearMonth", "mode", "monthLabels", "range", "weekLabels"]),
                    m(ce, {
                      "onUpdate:range": a[5] || (a[5] = (r) => T(r)),
                      yearMonth: K.value,
                      "onUpdate:yearMonth": a[6] || (a[6] = (r) => K.value = r),
                      mode: F.value,
                      monthLabels: l.monthLabels,
                      range: v(o),
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
const lt = /* @__PURE__ */ J(De, [["__scopeId", "data-v-cd797576"]]), Le = { class: "loader" };
function Be(A, y) {
  return s(), x("div", Le);
}
const Se = {}, Fe = /* @__PURE__ */ J(Se, [["render", Be], ["__scopeId", "data-v-c3390b50"]]), Te = { class: "exportBtn" }, Oe = { class: "exportBtn-menu_item" }, Pe = ["onClick"], Re = /* @__PURE__ */ ee({
  __name: "DropdownButton",
  props: {
    list: {},
    label: {},
    loading: { type: Boolean, default: !1 }
  },
  setup(A) {
    const y = V(!1), S = () => {
      y.value ? c() : f();
    }, f = () => {
      y.value = !0, window.addEventListener("click", h);
    }, c = () => {
      y.value = !1, window.removeEventListener("click", h);
    };
    ye(() => {
      window.removeEventListener("click", h);
    });
    const o = (p) => {
      p(), c();
    }, h = (p) => {
      const d = document.getElementsByClassName("exportBtn")[0];
      p.target === d || d.contains(p.target) || c();
    };
    return (p, d) => (s(), x("div", Te, [
      m(Z, {
        onClick: d[0] || (d[0] = (k) => S()),
        label: p.label,
        mood: "accent",
        tabindex: "-1",
        outline: ""
      }, {
        default: u(() => [
          p.loading ? (s(), _(Fe, {
            key: 0,
            class: "loader no-spacing"
          })) : (s(), _(me, {
            key: 1,
            class: "chevron no-spacing",
            mood: "accent",
            size: "large-3",
            value: "chevron-down",
            style: ve(y.value ? { transform: "rotate(180deg)" } : "")
          }, null, 8, ["style"]))
        ]),
        _: 1
      }, 8, ["label"]),
      y.value ? (s(), _(L, {
        key: 0,
        class: "exportBtn-menu",
        column: "",
        style: { margin: "0" }
      }, {
        default: u(() => [
          (s(!0), x(U, null, H(p.list, (k) => (s(), x("div", Oe, [
            m(D, null, {
              default: u(() => [
                $(B(k.name), 1)
              ]),
              _: 2
            }, 1024),
            k.submenu ? (s(), _(L, {
              key: 0,
              class: "exportBtn-subMenu",
              column: ""
            }, {
              default: u(() => [
                (s(!0), x(U, null, H(k.submenu, (C) => (s(), x("div", {
                  class: "exportBtn-subMenu_item",
                  onClick: (I) => o(C.handler)
                }, [
                  m(D, null, {
                    default: u(() => [
                      $(B(C.name), 1)
                    ]),
                    _: 2
                  }, 1024)
                ], 8, Pe))), 256))
              ]),
              _: 2
            }, 1024)) : X("", !0)
          ]))), 256))
        ]),
        _: 1
      })) : X("", !0)
    ]));
  }
});
const nt = /* @__PURE__ */ J(Re, [["__scopeId", "data-v-fffcabe1"]]), je = ["disabled"], ze = /* @__PURE__ */ ee({
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
  setup(A, { emit: y }) {
    const S = A, { disabled: f, items: c, modelValue: o, showAllItemsItem: h, collapseTags: p } = se(S), d = V(!1), k = V(null), C = V(null), I = V(""), N = V(!1), G = V(), R = g(() => !o || !o.value ? !1 : Object.keys(c.value).every((i) => o.value.includes(i))), F = g(() => Object.values(c.value).sort(re).join(", ")), T = g(() => (E(), (I.value ? Object.entries(c.value).filter(([, t]) => t.toLowerCase().includes(I.value.toLowerCase())).map(([t]) => t) : Object.keys(c.value)).sort(re).reduce((t, e) => (t[e] = c.value[e], t), {}))), { selectedItem: O, onKeypressDown: w, onKeypressUp: W, clearSelectedItem: E } = fe({
      length: g(() => Object.keys(T.value).length)
    }), K = g(() => o != null && o.value ? -Object.keys(T.value).indexOf(o.value.toString()) : 1), l = g(() => !o || !o.value ? [] : [...o.value].sort(re)), a = g(() => {
      let i = Object.keys(T.value).length;
      return h.value && i++, {
        "--item-count": i,
        "--selection-offset": K.value
      };
    }), r = () => {
      var i;
      f.value || (d.value = !0, N.value = !1, (i = C.value) == null || i.focus());
    }, j = (i) => {
      var t, e;
      (t = k.value) != null && t.$el.contains(i.relatedTarget) || (d.value = !1, I.value = "", (e = C.value) == null || e.blur(), E());
    }, Y = (i) => {
      var n;
      if (!(o != null && o.value) || f != null && f.value || !d.value)
        return;
      if (!i) {
        te(Object.keys(c.value));
        return;
      }
      const t = R.value ? [] : [...o.value], e = t.indexOf(i);
      e >= 0 ? t.splice(e, 1) : t.push(i), y("update:modelValue", t), (n = C.value) == null || n.focus({ preventScroll: !0 });
    }, te = (i) => {
      var t;
      y("update:modelValue", i), (t = C.value) == null || t.focus({ preventScroll: !0 });
    }, Q = g(() => {
      let i = c.value[l.value[1]];
      for (let t = 2; t < l.value.length; t++)
        i += ", " + c.value[l.value[t]];
      return i;
    });
    return (i, t) => (s(), _(L, {
      class: "multiselect-container",
      ref_key: "multiSelectContainer",
      ref: k,
      inline: !i.noInline,
      column: ""
    }, {
      default: u(() => [
        oe("div", {
          class: q(["multiselect", { active: d.value, disabled: v(f) }]),
          onClick: t[9] || (t[9] = (e) => r()),
          style: ve(a.value),
          tabindex: "-1",
          onKeydown: [
            t[10] || (t[10] = ne(z((e) => v(w)(), ["prevent"]), ["down"])),
            t[11] || (t[11] = ne(z((e) => v(W)(), ["prevent"]), ["up"])),
            t[12] || (t[12] = ne(z((e) => Y(Object.keys(T.value)[v(O) - 1]), ["prevent"]), ["enter"]))
          ]
        }, [
          m(L, {
            class: "current-item",
            vertical: "center"
          }, {
            default: u(() => [
              !v(o) || v(o).length === 0 ? (s(), _(D, {
                key: 0,
                class: "default-value"
              }, {
                default: u(() => [
                  $(" ")
                ]),
                _: 1
              })) : (s(), _(L, {
                key: 1,
                class: "current-values",
                wrap: !v(p)
              }, {
                default: u(() => {
                  var e;
                  return [
                    R.value && i.allItemsLabel ? (s(), _(D, {
                      key: 0,
                      class: "current-value all-items",
                      title: F.value
                    }, {
                      default: u(() => [
                        $(B(i.allItemsLabel), 1)
                      ]),
                      _: 1
                    }, 8, ["title"])) : v(p) ? (s(), x(U, { key: 1 }, [
                      m(D, {
                        class: "current-value no-spacing cuttable",
                        onClick: t[0] || (t[0] = () => Y(l.value[0]))
                      }, {
                        default: u(() => [
                          $(B(v(c)[l.value[0]]), 1)
                        ]),
                        _: 1
                      }),
                      l.value.length === 2 ? (s(), _(D, {
                        key: 0,
                        class: "current-value no-spacing cuttable",
                        onClick: t[1] || (t[1] = () => Y(l.value[1]))
                      }, {
                        default: u(() => [
                          $(B(v(c)[l.value[1]]), 1)
                        ]),
                        _: 1
                      })) : l.value.length > 2 ? (s(), x(U, { key: 1 }, [
                        m(D, {
                          class: "current-value no-spacing",
                          ref_key: "collapseTagRef",
                          ref: G,
                          onMouseover: t[2] || (t[2] = (n) => N.value = !d.value),
                          onMouseleave: t[3] || (t[3] = (n) => N.value = !1)
                        }, {
                          default: u(() => [
                            $(B(i.collapseTagsLabel), 1)
                          ]),
                          _: 1
                        }, 512),
                        i.collapseTagsTooltip ? (s(), _(xe, {
                          key: 0,
                          visible: N.value,
                          autoPosition: "",
                          parentNode: (e = G.value) == null ? void 0 : e.$el,
                          popoverClass: "collapse-tooltip",
                          placementY: "top",
                          placementX: "left"
                        }, {
                          default: u(() => [
                            m(D, null, {
                              default: u(() => [
                                $(B(Q.value), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["visible", "parentNode"])) : X("", !0)
                      ], 64)) : X("", !0)
                    ], 64)) : (s(!0), x(U, { key: 2 }, H(l.value, (n) => (s(), _(D, {
                      class: "current-value no-spacing",
                      onClick: z(() => Y(n), ["stop"])
                    }, {
                      default: u(() => [
                        $(B(v(c)[n]), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"]))), 256))
                  ];
                }),
                _: 1
              }, 8, ["wrap"])),
              ge(oe("input", {
                class: "flex-max new-value-input no-spacing",
                ref_key: "newValueInput",
                ref: C,
                "onUpdate:modelValue": t[4] || (t[4] = (e) => I.value = e),
                onBlur: t[5] || (t[5] = (e) => j(e)),
                onFocus: t[6] || (t[6] = (e) => r()),
                disabled: v(f)
              }, null, 40, je), [
                [be, I.value]
              ]),
              m(me, {
                backend: "boxicons-solid",
                size: "small-2",
                value: "down-arrow"
              })
            ]),
            _: 1
          }),
          m(L, {
            class: "dropdown-menu no-spacing",
            column: ""
          }, {
            default: u(() => [
              v(h) ? (s(), _(D, {
                key: 0,
                class: q(["item", { current: R.value, selected: v(O) === 0 }]),
                onClick: t[7] || (t[7] = z((e) => te(Object.keys(v(c))), ["stop"])),
                onMouseover: t[8] || (t[8] = (e) => O.value = 0)
              }, {
                default: u(() => [
                  $(B(i.allItemsLabel), 1)
                ]),
                _: 1
              }, 8, ["class"])) : X("", !0),
              (s(!0), x(U, null, H(T.value, (e, n, b) => {
                var ae;
                return s(), _(D, {
                  class: q(["item no-spacing", { current: ((ae = v(o)) == null ? void 0 : ae.includes(n)) && !R.value, selected: v(O) - 1 === b }]),
                  onClick: z((le) => Y(n), ["stop"]),
                  onMouseover: (le) => O.value = b + 1
                }, {
                  default: u(() => [
                    $(B(e), 1)
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
const ot = /* @__PURE__ */ J(ze, [["__scopeId", "data-v-c524578a"]]), Ue = ["id", "value"], Ae = ["for"], Ne = /* @__PURE__ */ ee({
  __name: "Toggle",
  props: {
    mood: { default: "positive" },
    modelValue: { type: Boolean },
    id: {}
  },
  emits: ["checked", "unchecked", "update:modelValue"],
  setup(A, { emit: y }) {
    const S = A, { modelValue: f, mood: c } = se(S), o = g(() => {
      const p = f.value ? c.value : "inactive";
      return {
        active: f.value,
        [`mood-background-${p}`]: !0,
        [`mood-border-${p}`]: !0
      };
    }), h = () => {
      const p = !f.value;
      y(p ? "checked" : "unchecked"), y("update:modelValue", p);
    };
    return (p, d) => (s(), x(U, null, [
      oe("input", {
        class: "toggle-input",
        type: "checkbox",
        id: S.id,
        value: v(f),
        onChange: d[0] || (d[0] = (k) => h()),
        onKeyup: d[1] || (d[1] = ne((k) => h(), ["enter"]))
      }, null, 40, Ue),
      oe("label", {
        class: q(["toggle", o.value]),
        for: S.id
      }, null, 10, Ae)
    ], 64));
  }
});
const st = /* @__PURE__ */ J(Ne, [["__scopeId", "data-v-8aa21e20"]]);
export {
  Z as Button,
  ce as Calendar,
  lt as DateRangePicker,
  ue as Dropdown,
  nt as DropdownButton,
  pe as Input,
  it as Link,
  ot as MultiSelect,
  ct as PopoverMenu,
  vt as Toast,
  st as Toggle
};
