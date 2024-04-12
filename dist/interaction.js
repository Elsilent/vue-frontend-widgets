import { B as Q, D as ue, I as ve, u as me } from "./Input-3b35b476.js";
import { defineComponent as Z, toRefs as se, computed as y, openBlock as r, createBlock as M, withCtx as i, createVNode as f, withModifiers as U, createElementBlock as I, Fragment as z, renderList as H, createTextVNode as D, toDisplayString as L, createCommentVNode as X, normalizeClass as q, unref as v, ref as V, watch as ie, onUnmounted as pe, createElementVNode as oe, normalizeStyle as fe, withKeys as ne, withDirectives as ye, vModelText as ge } from "vue";
import { D as P, a as be } from "./datetime-31a2b505.js";
import { A as $, I as ke } from "./Icon-8f2ed8ba.js";
import { G as _e } from "./Grid-f3d84a6a.js";
import { I as O } from "./Info-54758b60.js";
import { dateFormat as w, normalizeRange as he, tryRangeFromDisplayFormat as we, rangeToDisplayFormat as Me, rangeFromPreset as de } from "./utils/date.js";
import { m as Ce } from "./match-b8889c93.js";
import { _ as ee } from "./_plugin-vue_export-helper-dad06003.js";
import { P as Ve } from "./Popover-38d3223e.js";
import { L as ot } from "./Link-dfe99e72.js";
import { sort as re } from "./utils/sort.js";
import { B as xe } from "./BodyPopover-9b857526.js";
import { P as rt, T as ut } from "./Toast-94452344.js";
import "./utils/error.js";
import "vue-router";
const Ie = 7 * 6, $e = /* @__PURE__ */ Z({
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
  setup(Y, { emit: b }) {
    const B = Y, m = P.now(), c = m.year, { minDate: o, mode: _, monthLabels: p, range: d, weekLabels: k, yearMonth: C } = se(B), x = y(
      () => P.fromFormat(C.value, w.yearMonth).month - 1
    ), A = y(() => P.fromFormat(C.value, w.yearMonth).year), G = y(
      () => p.value.reduce((e, n, g) => (e[g] = n, e), {})
    ), R = y(() => P.fromFormat(d.value[1], w.yearMonthDay)), F = y(() => P.fromFormat(d.value[0], w.yearMonthDay)), S = y(
      () => k != null && k.value ? Array.apply(null, Array(7)).map((e, n) => k.value[n] ?? "") : void 0
    ), T = y(() => {
      const e = P.fromFormat(o.value, w.yearMonthDay).year;
      return new Array(c - e + 1).fill(0).reduce((n, g, ae) => {
        const le = e + ae;
        return n[le] = le.toString(), n;
      }, {});
    }), h = y(
      () => P.fromFormat(C.value, w.yearMonth).startOf("month")
    ), W = y(() => {
      const e = h.value.startOf("week");
      return h.value.hasSame(e, "day") ? h.value.minus(
        be.fromObject({
          weeks: 1
        })
      ) : e;
    }), E = y(
      () => new Array(Ie).fill(0).map(
        (e, n) => W.value.plus({
          days: n
        })
      )
    ), K = (e) => e.hasSame(h.value, "month"), l = (e) => ({
      "in-range": e >= F.value && e <= R.value,
      now: m.hasSame(e, "day"),
      "range-end": e.hasSame(R.value, "day"),
      "range-start": e.hasSame(F.value, "day"),
      "this-month": K(e)
    }), a = (e) => m.hasSame(e, "day") ? "important" : K(e) && e >= F.value && e <= R.value ? "accent" : "neutral", s = y(() => h.value.endOf("month") < m), j = y(
      () => P.fromFormat(o.value, w.yearMonthDay).startOf("month") < h.value
    ), N = () => {
      const e = h.value.month;
      J(e < 12 ? e : 0, e < 12 ? void 0 : h.value.year + 1);
    }, te = () => {
      const e = h.value.month - 2;
      J(e >= 0 ? e : 11, e >= 0 ? void 0 : h.value.year - 1);
    }, J = (e, n) => {
      const g = h.value.set({
        year: n,
        month: parseInt(e) + 1
      }).toFormat(w.yearMonth);
      b("update:yearMonth", g);
    }, u = (e) => {
      const n = Ce(_.value).when("end", () => [d.value[0], e.toFormat(w.yearMonthDay)]).when("start", () => [e.toFormat(w.yearMonthDay), d.value[1]]).done;
      b("update:range", he(n));
    }, t = (e) => {
      const n = h.value.set({
        year: parseInt(e)
      }).toFormat(w.yearMonth);
      b("update:yearMonth", n);
    };
    return (e, n) => (r(), M($, {
      class: "calendar",
      column: ""
    }, {
      default: i(() => [
        f($, { class: "header" }, {
          default: i(() => [
            f(Q, {
              class: "month-picker",
              onClick: n[0] || (n[0] = U(() => te(), ["stop"])),
              disabled: !j.value,
              tabindex: -1,
              icon: "chevron-left",
              mood: "neutral",
              outline: "",
              size: "large-4"
            }, null, 8, ["disabled"]),
            f(ue, {
              class: "flex-max spacing-small",
              "onUpdate:modelValue": n[1] || (n[1] = (g) => J(g)),
              items: G.value,
              modelValue: x.value,
              tabindex: -1,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            f(ue, {
              class: "spacing-small",
              "onUpdate:modelValue": n[2] || (n[2] = (g) => t(g)),
              items: T.value,
              modelValue: A.value,
              tabindex: -1,
              size: "small"
            }, null, 8, ["items", "modelValue"]),
            f(Q, {
              class: "month-picker spacing-small",
              onClick: n[3] || (n[3] = U(() => N(), ["stop"])),
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
        f($, {
          class: "calendar-grid-container flex-max",
          horizontal: "center",
          vertical: "center"
        }, {
          default: i(() => [
            f(_e, {
              class: "calendar-grid no-spacing",
              columns: 7
            }, {
              default: i(() => [
                S.value ? (r(!0), I(z, { key: 0 }, H(S.value, (g) => (r(), M(O, {
                  class: "week-label",
                  important: ""
                }, {
                  default: i(() => [
                    D(L(g), 1)
                  ]),
                  _: 2
                }, 1024))), 256)) : X("", !0),
                (r(!0), I(z, null, H(E.value, (g) => (r(), M(Q, {
                  class: q(["day", l(g)]),
                  onClick: U(() => u(g), ["stop"]),
                  disabled: g > v(m),
                  label: g.day.toString(),
                  mood: a(g),
                  outline: a(g) === "neutral",
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
const ce = /* @__PURE__ */ ee($e, [["__scopeId", "data-v-8d6b8d9a"]]), De = /* @__PURE__ */ Z({
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
  setup(Y, { emit: b }) {
    const B = Y, { dateRangePresets: m, disabled: c, modelValue: o } = se(B), _ = V(!1), p = V(), d = V(), k = (l) => {
      const a = P.fromFormat(l[0], w.yearMonthDay), s = P.fromFormat(l[1], w.yearMonthDay), j = a.toFormat(w.yearMonth), N = a.hasSame(s, "month") && s.endOf("month") < P.now() ? s.plus({ month: 1 }).toFormat(w.yearMonth) : s.toFormat(w.yearMonth);
      return [j, N];
    }, C = () => Me(o.value), x = V(C()), A = (l) => {
      const a = k(l);
      E.value = a[0], K.value = a[1];
    }, G = () => {
      var l;
      _.value || c.value || (_.value = !0, A(o.value), (l = d.value) == null || l.$el.focus());
    }, R = (l) => {
      const [a, s] = de(l);
      return a === o.value[0] && s === o.value[1];
    }, F = V("start"), S = (l) => {
      b("update:modelValue", l), F.value === "start" ? F.value = "end" : T();
    };
    ie(o, () => {
      x.value = C();
    });
    const T = (l) => {
      var a, s, j;
      if (!l || !((a = p.value) != null && a.$el.contains(l.relatedTarget))) {
        _.value = !1, F.value = "start", (s = d.value) == null || s.$el.blur();
        return;
      }
      (j = d.value) == null || j.$el.focus();
    }, h = (l) => {
      const a = de(m.value[l]);
      b("update:modelValue", a), A(a), T();
    }, W = k(o.value), E = V(W[0]), K = V(W[1]);
    return ie(x, (l) => {
      const a = we(l);
      a && b("update:modelValue", a);
    }), (l, a) => (r(), M($, {
      class: "date-range-picker",
      onClick: a[7] || (a[7] = (s) => G()),
      ref_key: "dateRangePicker",
      ref: p,
      tabindex: "-1"
    }, {
      default: i(() => [
        f(ve, {
          ref_key: "dateRangePickerInput",
          ref: d,
          modelValue: x.value,
          "onUpdate:modelValue": a[0] || (a[0] = (s) => x.value = s),
          onFocus: a[1] || (a[1] = (s) => G()),
          onBlur: a[2] || (a[2] = (s) => T(s)),
          disabled: v(c)
        }, null, 8, ["modelValue", "disabled"]),
        f(Q, {
          class: "no-spacing",
          disabled: v(c),
          icon: "calendar",
          mood: "inactive",
          tabindex: "-1"
        }, null, 8, ["disabled"]),
        f(Ve, {
          class: "date-range-picker-body no-spacing",
          visible: _.value
        }, {
          default: i(() => [
            f($, { class: "sections" }, {
              default: i(() => [
                f($, {
                  class: "presets",
                  column: ""
                }, {
                  default: i(() => [
                    (r(!0), I(z, null, H(v(m), (s, j) => (r(), M(O, {
                      class: q(["preset", { active: R(s) }]),
                      onClick: U(() => h(j), ["stop"]),
                      size: "small"
                    }, {
                      default: i(() => [
                        D(L(l.translator(s.label)), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick", "class"]))), 256))
                  ]),
                  _: 1
                }),
                f($, { class: "calendars" }, {
                  default: i(() => [
                    f(ce, {
                      "onUpdate:range": a[3] || (a[3] = (s) => S(s)),
                      yearMonth: E.value,
                      "onUpdate:yearMonth": a[4] || (a[4] = (s) => E.value = s),
                      mode: F.value,
                      monthLabels: l.monthLabels,
                      range: v(o),
                      weekLabels: l.weekLabels
                    }, null, 8, ["yearMonth", "mode", "monthLabels", "range", "weekLabels"]),
                    f(ce, {
                      "onUpdate:range": a[5] || (a[5] = (s) => S(s)),
                      yearMonth: K.value,
                      "onUpdate:yearMonth": a[6] || (a[6] = (s) => K.value = s),
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
const Ze = /* @__PURE__ */ ee(De, [["__scopeId", "data-v-cd797576"]]), Le = { class: "exportBtn" }, Be = { class: "exportBtn-menu_item" }, Fe = ["onClick"], Se = /* @__PURE__ */ Z({
  __name: "DropdownButton",
  props: {
    list: {},
    label: {}
  },
  setup(Y) {
    const b = V(!1), B = () => {
      b.value ? c() : m();
    }, m = () => {
      b.value = !0, window.addEventListener("click", _);
    }, c = () => {
      b.value = !1, window.removeEventListener("click", _);
    };
    pe(() => {
      window.removeEventListener("click", _);
    });
    const o = (p) => {
      p(), c();
    }, _ = (p) => {
      const d = document.getElementsByClassName("exportBtn")[0];
      p.target === d || d.contains(p.target) || c();
    };
    return (p, d) => (r(), I("div", Le, [
      f(Q, {
        onClick: d[0] || (d[0] = (k) => B()),
        label: p.label,
        mood: "accent",
        tabindex: "-1",
        outline: ""
      }, null, 8, ["label"]),
      b.value ? (r(), M($, {
        key: 0,
        class: "exportBtn-menu",
        column: "",
        style: { margin: "0" }
      }, {
        default: i(() => [
          (r(!0), I(z, null, H(p.list, (k) => (r(), I("div", Be, [
            D(L(k.name), 1),
            k.submenu ? (r(), M($, {
              key: 0,
              class: "exportBtn-subMenu",
              column: ""
            }, {
              default: i(() => [
                (r(!0), I(z, null, H(k.submenu, (C) => (r(), I("div", {
                  class: "exportBtn-subMenu_item",
                  onClick: (x) => o(C.handler)
                }, L(C.name), 9, Fe))), 256))
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
const et = /* @__PURE__ */ ee(Se, [["__scopeId", "data-v-206b1898"]]), Te = ["disabled"], Oe = /* @__PURE__ */ Z({
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
  setup(Y, { emit: b }) {
    const B = Y, { disabled: m, items: c, modelValue: o, showAllItemsItem: _, collapseTags: p } = se(B), d = V(!1), k = V(null), C = V(null), x = V(""), A = V(!1), G = V(), R = y(() => !o || !o.value ? !1 : Object.keys(c.value).every((u) => o.value.includes(u))), F = y(() => Object.values(c.value).sort(re).join(", ")), S = y(() => (E(), (x.value ? Object.entries(c.value).filter(([, t]) => t.toLowerCase().includes(x.value.toLowerCase())).map(([t]) => t) : Object.keys(c.value)).sort(re).reduce((t, e) => (t[e] = c.value[e], t), {}))), { selectedItem: T, onKeypressDown: h, onKeypressUp: W, clearSelectedItem: E } = me({
      length: y(() => Object.keys(S.value).length)
    }), K = y(() => o != null && o.value ? -Object.keys(S.value).indexOf(o.value.toString()) : 1), l = y(() => !o || !o.value ? [] : [...o.value].sort(re)), a = y(() => {
      let u = Object.keys(S.value).length;
      return _.value && u++, {
        "--item-count": u,
        "--selection-offset": K.value
      };
    }), s = () => {
      var u;
      m.value || (d.value = !0, A.value = !1, (u = C.value) == null || u.focus());
    }, j = (u) => {
      var t, e;
      (t = k.value) != null && t.$el.contains(u.relatedTarget) || (d.value = !1, x.value = "", (e = C.value) == null || e.blur(), E());
    }, N = (u) => {
      var n;
      if (!(o != null && o.value) || m != null && m.value || !d.value)
        return;
      if (!u) {
        te(Object.keys(c.value));
        return;
      }
      const t = R.value ? [] : [...o.value], e = t.indexOf(u);
      e >= 0 ? t.splice(e, 1) : t.push(u), b("update:modelValue", t), (n = C.value) == null || n.focus({ preventScroll: !0 });
    }, te = (u) => {
      var t;
      b("update:modelValue", u), (t = C.value) == null || t.focus({ preventScroll: !0 });
    }, J = y(() => {
      let u = c.value[l.value[1]];
      for (let t = 2; t < l.value.length; t++)
        u += ", " + c.value[l.value[t]];
      return u;
    });
    return (u, t) => (r(), M($, {
      class: "multiselect-container",
      ref_key: "multiSelectContainer",
      ref: k,
      inline: !u.noInline,
      column: ""
    }, {
      default: i(() => [
        oe("div", {
          class: q(["multiselect", { active: d.value, disabled: v(m) }]),
          onClick: t[9] || (t[9] = (e) => s()),
          style: fe(a.value),
          tabindex: "-1",
          onKeydown: [
            t[10] || (t[10] = ne(U((e) => v(h)(), ["prevent"]), ["down"])),
            t[11] || (t[11] = ne(U((e) => v(W)(), ["prevent"]), ["up"])),
            t[12] || (t[12] = ne(U((e) => N(Object.keys(S.value)[v(T) - 1]), ["prevent"]), ["enter"]))
          ]
        }, [
          f($, {
            class: "current-item",
            vertical: "center"
          }, {
            default: i(() => [
              !v(o) || v(o).length === 0 ? (r(), M(O, {
                key: 0,
                class: "default-value"
              }, {
                default: i(() => [
                  D(" ")
                ]),
                _: 1
              })) : (r(), M($, {
                key: 1,
                class: "current-values",
                wrap: !v(p)
              }, {
                default: i(() => {
                  var e;
                  return [
                    R.value && u.allItemsLabel ? (r(), M(O, {
                      key: 0,
                      class: "current-value all-items",
                      title: F.value
                    }, {
                      default: i(() => [
                        D(L(u.allItemsLabel), 1)
                      ]),
                      _: 1
                    }, 8, ["title"])) : v(p) ? (r(), I(z, { key: 1 }, [
                      f(O, {
                        class: "current-value no-spacing cuttable",
                        onClick: t[0] || (t[0] = () => N(l.value[0]))
                      }, {
                        default: i(() => [
                          D(L(v(c)[l.value[0]]), 1)
                        ]),
                        _: 1
                      }),
                      l.value.length === 2 ? (r(), M(O, {
                        key: 0,
                        class: "current-value no-spacing cuttable",
                        onClick: t[1] || (t[1] = () => N(l.value[1]))
                      }, {
                        default: i(() => [
                          D(L(v(c)[l.value[1]]), 1)
                        ]),
                        _: 1
                      })) : l.value.length > 2 ? (r(), I(z, { key: 1 }, [
                        f(O, {
                          class: "current-value no-spacing",
                          ref_key: "collapseTagRef",
                          ref: G,
                          onMouseover: t[2] || (t[2] = (n) => A.value = !d.value),
                          onMouseleave: t[3] || (t[3] = (n) => A.value = !1)
                        }, {
                          default: i(() => [
                            D(L(u.collapseTagsLabel), 1)
                          ]),
                          _: 1
                        }, 512),
                        u.collapseTagsTooltip ? (r(), M(xe, {
                          key: 0,
                          visible: A.value,
                          autoPosition: "",
                          parentNode: (e = G.value) == null ? void 0 : e.$el,
                          popoverClass: "collapse-tooltip",
                          placementY: "top",
                          placementX: "left"
                        }, {
                          default: i(() => [
                            f(O, null, {
                              default: i(() => [
                                D(L(J.value), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["visible", "parentNode"])) : X("", !0)
                      ], 64)) : X("", !0)
                    ], 64)) : (r(!0), I(z, { key: 2 }, H(l.value, (n) => (r(), M(O, {
                      class: "current-value no-spacing",
                      onClick: U(() => N(n), ["stop"])
                    }, {
                      default: i(() => [
                        D(L(v(c)[n]), 1)
                      ]),
                      _: 2
                    }, 1032, ["onClick"]))), 256))
                  ];
                }),
                _: 1
              }, 8, ["wrap"])),
              ye(oe("input", {
                class: "flex-max new-value-input no-spacing",
                ref_key: "newValueInput",
                ref: C,
                "onUpdate:modelValue": t[4] || (t[4] = (e) => x.value = e),
                onBlur: t[5] || (t[5] = (e) => j(e)),
                onFocus: t[6] || (t[6] = (e) => s()),
                disabled: v(m)
              }, null, 40, Te), [
                [ge, x.value]
              ]),
              f(ke, {
                backend: "boxicons-solid",
                size: "small-2",
                value: "down-arrow"
              })
            ]),
            _: 1
          }),
          f($, {
            class: "dropdown-menu no-spacing",
            column: ""
          }, {
            default: i(() => [
              v(_) ? (r(), M(O, {
                key: 0,
                class: q(["item", { current: R.value, selected: v(T) === 0 }]),
                onClick: t[7] || (t[7] = U((e) => te(Object.keys(v(c))), ["stop"])),
                onMouseover: t[8] || (t[8] = (e) => T.value = 0)
              }, {
                default: i(() => [
                  D(L(u.allItemsLabel), 1)
                ]),
                _: 1
              }, 8, ["class"])) : X("", !0),
              (r(!0), I(z, null, H(S.value, (e, n, g) => {
                var ae;
                return r(), M(O, {
                  class: q(["item no-spacing", { current: ((ae = v(o)) == null ? void 0 : ae.includes(n)) && !R.value, selected: v(T) - 1 === g }]),
                  onClick: U((le) => N(n), ["stop"]),
                  onMouseover: (le) => T.value = g + 1
                }, {
                  default: i(() => [
                    D(L(e), 1)
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
const tt = /* @__PURE__ */ ee(Oe, [["__scopeId", "data-v-c524578a"]]), Pe = ["id", "value"], Re = ["for"], je = /* @__PURE__ */ Z({
  __name: "Toggle",
  props: {
    mood: { default: "positive" },
    modelValue: { type: Boolean },
    id: {}
  },
  emits: ["checked", "unchecked", "update:modelValue"],
  setup(Y, { emit: b }) {
    const B = Y, { modelValue: m, mood: c } = se(B), o = y(() => {
      const p = m.value ? c.value : "inactive";
      return {
        active: m.value,
        [`mood-background-${p}`]: !0,
        [`mood-border-${p}`]: !0
      };
    }), _ = () => {
      const p = !m.value;
      b(p ? "checked" : "unchecked"), b("update:modelValue", p);
    };
    return (p, d) => (r(), I(z, null, [
      oe("input", {
        class: "toggle-input",
        type: "checkbox",
        id: B.id,
        value: v(m),
        onChange: d[0] || (d[0] = (k) => _()),
        onKeyup: d[1] || (d[1] = ne((k) => _(), ["enter"]))
      }, null, 40, Pe),
      oe("label", {
        class: q(["toggle", o.value]),
        for: B.id
      }, null, 10, Re)
    ], 64));
  }
});
const at = /* @__PURE__ */ ee(je, [["__scopeId", "data-v-8aa21e20"]]);
export {
  Q as Button,
  ce as Calendar,
  Ze as DateRangePicker,
  ue as Dropdown,
  et as DropdownButton,
  ve as Input,
  ot as Link,
  tt as MultiSelect,
  rt as PopoverMenu,
  ut as Toast,
  at as Toggle
};
