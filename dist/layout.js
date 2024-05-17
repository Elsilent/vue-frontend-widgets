import { defineComponent as g, toRefs as B, computed as y, ref as I, onUnmounted as H, openBlock as r, createBlock as h, withCtx as b, createVNode as w, withKeys as P, withModifiers as U, unref as u, createTextVNode as E, toDisplayString as L, createCommentVNode as T, renderSlot as D, pushScopeId as X, popScopeId as Y, createElementVNode as F, Transition as ne, createElementBlock as S, resolveDynamicComponent as oe, normalizeClass as R, resolveComponent as le, Fragment as V, renderList as G, watch as Z } from "vue";
import { A as W, I as K } from "./Icon-8f2ed8ba.js";
import { A as ae, L as se, B as ue } from "./BrandText-bbfcb065.js";
import { P as O, T as ie } from "./Toast-9422356d.js";
import { _ as x } from "./_plugin-vue_export-helper-dad06003.js";
import { B as j, D as re, I as de } from "./Input-a4b31ab2.js";
import { G as ce } from "./Form-f36966a3.js";
import { I as z } from "./Info-54758b60.js";
import { Separator as ve } from "./marker.js";
import { B as me } from "./BrandText-d1a46d42.js";
import { BaseError as pe } from "./utils/error.js";
import { m as A } from "./match-b8889c93.js";
import { U as N } from "./undefined_theme-2b4e75dd.js";
import "./Popover-38d3223e.js";
const _e = /* @__PURE__ */ g({
  __name: "AccountMenu",
  props: {
    avatar: {},
    menuItems: {}
  },
  setup(c) {
    const m = c, { avatar: l, menuItems: s } = B(m), _ = y(
      () => l && l.value && "icon" in l.value ? l.value.icon : void 0
    ), i = y(
      () => l && l.value && "iconBackend" in l.value ? l.value.iconBackend : void 0
    ), a = y(
      () => l && l.value && "label" in l.value ? l.value.label : void 0
    ), e = y(
      () => l && l.value && "source" in l.value ? l.value.source : void 0
    ), t = I(), o = I(!1), p = (n) => {
      var d;
      n && ((d = t.value) != null && d.$el.contains(n.target)) || (o.value = !1, window.removeEventListener("mousedown", p));
    }, f = () => {
      o.value = !0, window.addEventListener("mousedown", p);
    }, v = (n) => {
      s.value[n].handler(), p();
    };
    return H(() => {
      window.removeEventListener("mousedown", p);
    }), (n, d) => (r(), h(W, {
      class: "account-menu",
      ref_key: "accountMenu",
      ref: t
    }, {
      default: b(() => [
        w(ae, {
          onClick: d[0] || (d[0] = (k) => f()),
          onFocus: d[1] || (d[1] = (k) => f()),
          onKeydown: [
            d[2] || (d[2] = P(U((k) => p(), ["shift"]), ["tab"])),
            d[3] || (d[3] = P((k) => p(), ["tab"]))
          ],
          icon: _.value,
          iconBackend: i.value,
          label: a.value,
          source: e.value
        }, null, 8, ["icon", "iconBackend", "label", "source"]),
        w(O, {
          class: "account-menu",
          onSelect: d[4] || (d[4] = (k) => v(k)),
          items: u(s),
          visible: o.value
        }, null, 8, ["items", "visible"])
      ]),
      _: 1
    }, 512));
  }
});
const Qe = /* @__PURE__ */ x(_e, [["__scopeId", "data-v-6b125e88"]]), fe = /* @__PURE__ */ g({
  __name: "CurrencySelector",
  props: {
    currencies: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(c, { emit: m }) {
    const l = c, { currencies: s, modelValue: _ } = B(l), i = I(), a = I(!1), e = y(
      () => s.value.reduce((v, n) => (v[n.code] = {
        label: n.label
      }, v), {}) ?? {}
    ), t = y(
      () => s.value.find(({ code: v }) => _.value === v)
    ), o = (v) => {
      var n, d;
      v && ((n = i.value) != null && n.$el.contains(v.target)) || ((d = i.value) == null || d.$el.querySelector(".button").blur(), a.value = !1, window.removeEventListener("mousedown", o));
    }, p = () => {
      a.value = !0, window.addEventListener("mousedown", o);
    }, f = (v) => {
      m("update:modelValue", v), o();
    };
    return H(() => {
      window.removeEventListener("mousedown", o);
    }), (v, n) => (r(), h(W, {
      class: "currency-selector",
      ref_key: "currencySelector",
      ref: i,
      horizontal: "center"
    }, {
      default: b(() => {
        var d;
        return [
          w(j, {
            class: "currency-button",
            onClick: n[0] || (n[0] = (k) => p()),
            onFocus: n[1] || (n[1] = (k) => p()),
            onKeydown: [
              n[2] || (n[2] = P(U((k) => o(), ["shift"]), ["tab"])),
              n[3] || (n[3] = P((k) => o(), ["tab"]))
            ],
            label: (d = t.value) == null ? void 0 : d.symbol,
            mood: "neutral",
            outline: "",
            size: "large-3",
            shape: "normal"
          }, null, 8, ["label"]),
          w(O, {
            class: "currency-menu no-spacing",
            onSelect: n[4] || (n[4] = (k) => f(k)),
            items: e.value,
            visible: a.value
          }, null, 8, ["items", "visible"])
        ];
      }),
      _: 1
    }, 512));
  }
});
const Xe = /* @__PURE__ */ x(fe, [["__scopeId", "data-v-0cb2d935"]]), he = /* @__PURE__ */ g({
  __name: "Form",
  props: {
    fields: {},
    values: {}
  },
  setup(c) {
    const m = c, { fields: l } = B(m);
    return (s, _) => (r(), h(ce, {
      fields: u(l),
      values: s.values
    }, {
      "field(dropdown)": b(({ code: i, label: a, options: e, value: t }) => [
        a ? (r(), h(z, {
          key: 0,
          class: "label"
        }, {
          default: b(() => [
            E(L(a), 1)
          ]),
          _: 2
        }, 1024)) : T("", !0),
        w(re, {
          "onUpdate:modelValue": (o) => s.$emit(`update:${i}`, o),
          items: e.items,
          modelValue: t
        }, null, 8, ["onUpdate:modelValue", "items", "modelValue"])
      ]),
      "field(info)": b(({ label: i }) => [
        w(z, null, {
          default: b(() => [
            E(L(i), 1)
          ]),
          _: 2
        }, 1024)
      ]),
      "field(input)": b(({ code: i, label: a, value: e }) => [
        a ? (r(), h(z, {
          key: 0,
          class: "label"
        }, {
          default: b(() => [
            E(L(a), 1)
          ]),
          _: 2
        }, 1024)) : T("", !0),
        w(de, {
          "onUpdate:modelValue": (t) => s.$emit(`update:${i}`, t),
          modelValue: e
        }, null, 8, ["onUpdate:modelValue", "modelValue"])
      ]),
      _: 1
    }, 8, ["fields", "values"]));
  }
});
const Ye = /* @__PURE__ */ x(he, [["__scopeId", "data-v-39d44946"]]), be = (c) => (X("data-v-85b21410"), c = c(), Y(), c), ye = /* @__PURE__ */ be(() => /* @__PURE__ */ F("div", { class: "menu-button-lines" }, null, -1)), we = /* @__PURE__ */ g({
  __name: "Header",
  emits: ["menuToggle"],
  setup(c, { emit: m }) {
    const l = () => {
      document.documentElement.scrollTo({
        left: 0,
        top: 0
      });
    };
    return (s, _) => (r(), h(W, {
      class: "header",
      vertical: "center"
    }, {
      default: b(() => [
        w(W, {
          class: "menu-button",
          onClick: _[0] || (_[0] = () => m("menuToggle")),
          vertical: "center"
        }, {
          default: b(() => [
            ye
          ]),
          _: 1
        }),
        w(W, {
          class: "title",
          onClick: _[1] || (_[1] = () => l()),
          vertical: "center"
        }, {
          default: b(() => [
            w(z, { size: "large-2" }, {
              default: b(() => [
                D(s.$slots, "title", {}, void 0, !0)
              ]),
              _: 3
            })
          ]),
          _: 3
        }),
        w(ve),
        D(s.$slots, "end", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
});
const Ze = /* @__PURE__ */ x(we, [["__scopeId", "data-v-85b21410"]]), ke = /* @__PURE__ */ g({
  __name: "LocaleSelector",
  props: {
    locales: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(c, { emit: m }) {
    const l = c, { locales: s, modelValue: _ } = B(l), i = I(), a = I(!1), e = y(
      () => s.value.reduce((v, n) => (v[n.code] = {
        icon: n.icon,
        iconBackend: "flag-icons"
      }, v), {})
    ), t = y(
      () => s.value.find((v) => v.code === _.value).icon
    ), o = (v) => {
      var n, d;
      v && ((n = i.value) != null && n.$el.contains(v.target)) || (a.value = !1, (d = i.value) == null || d.$el.querySelector(".button").blur(), window.removeEventListener("mousedown", o));
    }, p = () => {
      a.value = !0, window.addEventListener("mousedown", o);
    }, f = (v) => {
      m("update:modelValue", v), o();
    };
    return H(() => {
      window.removeEventListener("mousedown", o);
    }), (v, n) => (r(), h(W, {
      class: "locale-selector",
      ref_key: "localeSelector",
      ref: i,
      horizontal: "center"
    }, {
      default: b(() => [
        w(j, {
          class: "locale-button",
          onClick: n[0] || (n[0] = (d) => p()),
          onFocus: n[1] || (n[1] = (d) => p()),
          onKeydown: [
            n[2] || (n[2] = P(U((d) => o(), ["shift"]), ["tab"])),
            n[3] || (n[3] = P((d) => o(), ["tab"]))
          ],
          icon: t.value,
          iconBackend: "flag-icons-square",
          mood: "neutral",
          outline: "",
          size: "large-3",
          shape: "round"
        }, null, 8, ["icon"]),
        w(O, {
          class: "locale-menu no-spacing",
          onSelect: n[4] || (n[4] = (d) => f(d)),
          items: e.value,
          visible: a.value
        }, null, 8, ["items", "visible"])
      ]),
      _: 1
    }, 512));
  }
});
const et = /* @__PURE__ */ x(ke, [["__scopeId", "data-v-dd1fb6f5"]]), ge = {
  key: 0,
  class: "collapse"
}, xe = /* @__PURE__ */ g({
  __name: "Collapse",
  props: {
    expanded: { type: Boolean, default: !1 }
  },
  setup(c) {
    const m = c, { expanded: l } = B(m), s = (a) => {
      const e = a;
      e.style.height = "auto";
    }, _ = (a) => {
      const e = a, t = getComputedStyle(e).width;
      e.style.width = t, e.style.position = "absolute", e.style.visibility = "hidden", e.style.height = "auto";
      const o = getComputedStyle(e).height;
      e.style.width = "", e.style.position = "", e.style.visibility = "", e.style.height = "0", getComputedStyle(e).height, requestAnimationFrame(() => {
        e.style.height = o;
      });
    }, i = (a) => {
      const e = a, t = getComputedStyle(e).height;
      e.style.height = t, getComputedStyle(e).height, requestAnimationFrame(() => {
        e.style.height = "0";
      });
    };
    return (a, e) => (r(), h(ne, {
      name: "collapse",
      onAfterEnter: s,
      onEnter: _,
      onLeave: i
    }, {
      default: b(() => [
        u(l) ? (r(), S("div", ge, [
          D(a.$slots, "default", {}, void 0, !0)
        ])) : T("", !0)
      ]),
      _: 3
    }));
  }
});
const $e = /* @__PURE__ */ x(xe, [["__scopeId", "data-v-10c3004c"]]);
class J extends pe {
  getMessage(m) {
    return `Invalid menu item level ${m}`;
  }
}
const Se = /* @__PURE__ */ g({
  __name: "MenuItem",
  props: {
    active: { type: Boolean, default: !1 },
    fullWidth: { type: Boolean },
    icon: {},
    iconBackend: {},
    label: {},
    level: { default: 1 },
    withSublevel: { type: Boolean, default: !1 },
    link: {}
  },
  setup(c) {
    const m = c, { active: l, fullWidth: s, icon: _, iconBackend: i, label: a, level: e, withSublevel: t } = B(m), o = y(
      () => A(e.value).when(1, () => "large-3").whenAny([2, 3], () => "large").or((n) => {
        throw new J(n);
      }).done
    ), p = y(() => l.value ? "elevated-2" : "elevated"), f = y(
      () => A(e.value).when(1, () => "large").whenAny([2, 3], () => "normal").or((n) => {
        throw new J(n);
      }).done
    ), v = y(() => ({
      active: l.value,
      "full-width": s.value,
      [`level-${e.value}`]: !0,
      "with-sublevel": t.value
    }));
    return (n, d) => (r(), h(oe(n.link ? "a" : "div"), {
      class: R(["menu-item", v.value]),
      href: n.link ? n.link : void 0
    }, {
      default: b(() => [
        u(_) ? (r(), h(K, {
          key: 0,
          class: "item-icon",
          backend: u(i),
          elevation: p.value,
          size: o.value,
          value: u(_)
        }, null, 8, ["backend", "elevation", "size", "value"])) : T("", !0),
        u(s) && u(a) ? (r(), h(z, {
          key: 1,
          elevation: p.value,
          size: f.value
        }, {
          default: b(() => [
            E(L(u(a)), 1)
          ]),
          _: 1
        }, 8, ["elevation", "size"])) : T("", !0),
        u(s) && u(t) ? (r(), h(K, {
          key: 2,
          class: "chevron",
          elevation: p.value,
          size: "large-3",
          value: "chevron-right"
        }, null, 8, ["elevation"])) : T("", !0)
      ]),
      _: 1
    }, 8, ["class", "href"]));
  }
});
const Q = /* @__PURE__ */ x(Se, [["__scopeId", "data-v-e982b607"]]), Ie = /* @__PURE__ */ g({
  __name: "MenuSubsection",
  props: {
    fullWidth: { type: Boolean },
    expandedPrefix: {},
    icon: {},
    iconBackend: {},
    items: {},
    label: {},
    level: { default: 0 },
    prefix: {},
    router: {},
    translator: {}
  },
  emits: ["update:expandedPrefix"],
  setup(c, { emit: m }) {
    const l = c, { expandedPrefix: s, icon: _, iconBackend: i, items: a, label: e, level: t, prefix: o, router: p, translator: f } = B(l), v = y(() => p.value.currentRoute.value.meta.menuItem), n = y(() => t.value + 1), d = y(() => t.value + 1), k = (C) => {
      m("update:expandedPrefix", o.value);
      const M = a.value[C];
      "items" in M || p.value.push(M.route);
    };
    return (C, M) => {
      const ee = le("MenuSubsection", !0);
      return r(), S(V, null, [
        u(e) ? (r(), S(V, { key: 0 }, [
          u(t) === 0 ? (r(), S(V, { key: 0 }, [
            C.fullWidth ? (r(), h(z, {
              key: 0,
              class: "section",
              elevation: "elevated"
            }, {
              default: b(() => [
                E(L(u(f)(u(e)).toUpperCase()), 1)
              ]),
              _: 1
            })) : (r(), h(K, {
              key: 1,
              class: "section-collapsed",
              elevation: "elevated",
              size: "large-3",
              value: "dots-horizontal-rounded"
            }))
          ], 64)) : (r(), h(Q, {
            key: 1,
            onClick: M[0] || (M[0] = () => m("update:expandedPrefix", u(o))),
            active: u(s).startsWith(u(o)),
            fullWidth: C.fullWidth,
            icon: u(_),
            iconBackend: u(i),
            label: C.fullWidth ? u(e) : void 0,
            level: u(t),
            withSublevel: ""
          }, null, 8, ["active", "fullWidth", "icon", "iconBackend", "label", "level"]))
        ], 64)) : T("", !0),
        w($e, {
          expanded: u(t) === 0 || u(s).startsWith(u(o))
        }, {
          default: b(() => [
            (r(!0), S(V, null, G(u(a), ($, q) => (r(), S(V, null, [
              "items" in $ ? (r(), h(ee, {
                key: 0,
                "onUpdate:expandedPrefix": M[1] || (M[1] = (te) => m("update:expandedPrefix", te)),
                expandedPrefix: u(s),
                fullWidth: C.fullWidth,
                icon: $.icon,
                iconBackend: $.iconBackend,
                items: $.items,
                level: d.value,
                label: $.label ? u(f)($.label) : "",
                prefix: `${u(o)}${q}.`,
                router: u(p),
                translator: u(f)
              }, null, 8, ["expandedPrefix", "fullWidth", "icon", "iconBackend", "items", "level", "label", "prefix", "router", "translator"])) : C.fullWidth || u(t) === 0 ? (r(), h(Q, {
                key: 1,
                onClick: U(() => k(q), ["prevent"]),
                active: `${u(o)}${q}` === v.value,
                fullWidth: C.fullWidth,
                icon: $.icon,
                iconBackend: $.iconBackend,
                label: C.fullWidth ? u(f)($.label) : void 0,
                level: n.value,
                link: u(p).resolve($.route).href
              }, null, 8, ["onClick", "active", "fullWidth", "icon", "iconBackend", "label", "level", "link"])) : T("", !0)
            ], 64))), 256))
          ]),
          _: 1
        }, 8, ["expanded"])
      ], 64);
    };
  }
});
const Be = /* @__PURE__ */ x(Ie, [["__scopeId", "data-v-d52b95ab"]]), Ce = (c) => (X("data-v-80badbf3"), c = c(), Y(), c), Te = { class: "brand" }, Me = { class: "items" }, Ve = /* @__PURE__ */ Ce(() => /* @__PURE__ */ F("div", { class: "pixel" }, " ", -1)), We = /* @__PURE__ */ g({
  __name: "SideMenu",
  props: {
    brandText: {},
    fullWidth: { type: Boolean },
    menu: {},
    router: {},
    translator: { type: Function }
  },
  setup(c) {
    const m = c, l = I(""), s = I(!1), { fullWidth: _, router: i } = B(m), a = y(() => _.value || s.value);
    return Z(
      i.value.currentRoute,
      (e) => {
        const t = e.meta.menuItem ?? "";
        l.value = t.substring(0, t.lastIndexOf(".") + 1);
      },
      { immediate: !0 }
    ), (e, t) => (r(), S("div", {
      class: R(["side-menu", { "full-width": a.value }]),
      onMouseenter: t[2] || (t[2] = (o) => s.value = !0),
      onMouseleave: t[3] || (t[3] = (o) => s.value = !1)
    }, [
      F("div", {
        class: "brand-container",
        onClick: t[0] || (t[0] = (o) => u(i).push({ name: "default" }))
      }, [
        F("div", Te, [
          w(se, { "force-dark-mode": "" }),
          e.brandText ? (r(), h(me, {
            key: 0,
            elevation: "elevated-3",
            size: "large-4"
          }, {
            default: b(() => [
              E(L(e.brandText), 1)
            ]),
            _: 1
          })) : (r(), h(ue, {
            key: 1,
            full: "",
            "force-dark-mode": ""
          }))
        ])
      ]),
      F("div", Me, [
        (r(!0), S(V, null, G(e.menu, (o, p) => (r(), h(Be, {
          expandedPrefix: l.value,
          "onUpdate:expandedPrefix": t[1] || (t[1] = (f) => l.value = f),
          fullWidth: a.value,
          icon: o.icon,
          iconBackend: o.iconBackend,
          items: o.items,
          label: o.label ?? "",
          prefix: `${p}.`,
          router: u(i),
          translator: e.translator
        }, null, 8, ["expandedPrefix", "fullWidth", "icon", "iconBackend", "items", "label", "prefix", "router", "translator"]))), 256)),
        Ve
      ])
    ], 34));
  }
});
const tt = /* @__PURE__ */ x(We, [["__scopeId", "data-v-80badbf3"]]), Ee = /* @__PURE__ */ g({
  __name: "ThemeToggle",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(c, { emit: m }) {
    const l = c, { modelValue: s } = B(l), _ = y(
      () => A(s.value).when("dark", () => "moon").when("light", () => "sun").or((e) => {
        throw new N(e);
      }).done
    ), i = y(
      () => A(s.value).when("dark", () => "accent").when("light", () => "important").or((e) => {
        throw new N(e);
      }).done
    ), a = () => {
      const e = A(s.value).when("dark", () => "light").when("light", () => "dark").or((t) => {
        throw new N(t);
      }).done;
      m("update:modelValue", e);
    };
    return (e, t) => (r(), h(W, { class: "theme-toggle" }, {
      default: b(() => [
        w(j, {
          onClick: t[0] || (t[0] = () => a()),
          icon: _.value,
          mood: i.value,
          outline: "",
          size: "large-2",
          shape: "round"
        }, null, 8, ["icon", "mood"])
      ]),
      _: 1
    }));
  }
});
const nt = /* @__PURE__ */ x(Ee, [["__scopeId", "data-v-8832a6ee"]]), Le = { class: "toasts" }, ze = /* @__PURE__ */ g({
  __name: "Toasts",
  props: {
    toasts: {}
  },
  emits: ["removeToast"],
  setup(c, { emit: m }) {
    const l = c, { toasts: s } = B(l), _ = y(
      () => Object.entries(s.value).reverse().map(([t, o]) => [Number(t), o])
    ), i = I([]), a = I([]), e = (t) => {
      i.value.includes(t) || (i.value.push(t), clearTimeout(a.value[t]), delete a.value[t], window.setTimeout(() => {
        m("removeToast", t), i.value = i.value.filter((o) => o !== t);
      }, 500));
    };
    return Z(
      s,
      () => {
        for (const t of s.value)
          t.id in a.value || (a.value[t.id] = window.setTimeout(() => {
            e(t.id);
          }, 5e3));
      },
      { deep: !0, immediate: !0 }
    ), (t, o) => (r(), S("div", Le, [
      (r(!0), S(V, null, G(_.value, ([p, f]) => (r(), h(ie, {
        onClick: () => e(p),
        class: R({ "fade-out": i.value.includes(f.id) }),
        icon: f.icon,
        iconBackend: f.iconBackend,
        key: `toast-${f.id}`,
        mood: f.mood,
        message: f.message,
        title: f.title
      }, null, 8, ["onClick", "class", "icon", "iconBackend", "mood", "message", "title"]))), 128))
    ]));
  }
});
const ot = /* @__PURE__ */ x(ze, [["__scopeId", "data-v-3d45b4ea"]]);
export {
  Qe as AccountMenu,
  Xe as CurrencySelector,
  Ye as Form,
  Ze as Header,
  et as LocaleSelector,
  tt as SideMenu,
  Q as SideMenuItem,
  Be as SideMenuSubsection,
  nt as ThemeToggle,
  ot as Toasts
};
