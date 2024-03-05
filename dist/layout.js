import { defineComponent as k, toRefs as B, computed as b, ref as I, onUnmounted as H, openBlock as d, createBlock as y, withCtx as h, createVNode as w, withKeys as P, withModifiers as U, unref as u, createTextVNode as E, toDisplayString as L, createCommentVNode as M, renderSlot as D, pushScopeId as X, popScopeId as Y, createElementVNode as A, Transition as ne, createElementBlock as S, resolveDynamicComponent as oe, normalizeClass as R, resolveComponent as le, Fragment as V, renderList as G, watch as Z } from "vue";
import { A as W, I as K } from "./Icon-8f2ed8ba.js";
import { A as ae, L as se } from "./Logo-cbfeb6b8.js";
import { P as O, T as ue } from "./Toast-5c462a52.js";
import { _ as x } from "./_plugin-vue_export-helper-dad06003.js";
import { B as j, D as ie, I as re } from "./Input-7f2c48d4.js";
import { G as de } from "./Form-f36966a3.js";
import { I as z } from "./Info-54758b60.js";
import { Separator as ce } from "./marker.js";
import { B as ve } from "./BrandText-d1a46d42.js";
import { BaseError as me } from "./utils/error.js";
import { m as F } from "./match-b8889c93.js";
import { U as N } from "./undefined_theme-2b4e75dd.js";
import "./Popover-38d3223e.js";
const pe = /* @__PURE__ */ k({
  __name: "AccountMenu",
  props: {
    avatar: {},
    menuItems: {}
  },
  setup(c) {
    const m = c, { avatar: l, menuItems: s } = B(m), _ = b(
      () => l && l.value && "icon" in l.value ? l.value.icon : void 0
    ), i = b(
      () => l && l.value && "iconBackend" in l.value ? l.value.iconBackend : void 0
    ), a = b(
      () => l && l.value && "label" in l.value ? l.value.label : void 0
    ), t = b(
      () => l && l.value && "source" in l.value ? l.value.source : void 0
    ), e = I(), o = I(!1), p = (n) => {
      var r;
      n && ((r = e.value) != null && r.$el.contains(n.target)) || (o.value = !1, window.removeEventListener("mousedown", p));
    }, f = () => {
      o.value = !0, window.addEventListener("mousedown", p);
    }, v = (n) => {
      s.value[n].handler(), p();
    };
    return H(() => {
      window.removeEventListener("mousedown", p);
    }), (n, r) => (d(), y(W, {
      class: "account-menu",
      ref_key: "accountMenu",
      ref: e
    }, {
      default: h(() => [
        w(ae, {
          onClick: r[0] || (r[0] = (g) => f()),
          onFocus: r[1] || (r[1] = (g) => f()),
          onKeydown: [
            r[2] || (r[2] = P(U((g) => p(), ["shift"]), ["tab"])),
            r[3] || (r[3] = P((g) => p(), ["tab"]))
          ],
          icon: _.value,
          iconBackend: i.value,
          label: a.value,
          source: t.value
        }, null, 8, ["icon", "iconBackend", "label", "source"]),
        w(O, {
          class: "account-menu",
          onSelect: r[4] || (r[4] = (g) => v(g)),
          items: u(s),
          visible: o.value
        }, null, 8, ["items", "visible"])
      ]),
      _: 1
    }, 512));
  }
});
const je = /* @__PURE__ */ x(pe, [["__scopeId", "data-v-6b125e88"]]), _e = /* @__PURE__ */ k({
  __name: "CurrencySelector",
  props: {
    currencies: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(c, { emit: m }) {
    const l = c, { currencies: s, modelValue: _ } = B(l), i = I(), a = I(!1), t = b(
      () => s.value.reduce((v, n) => (v[n.code] = {
        label: n.label
      }, v), {}) ?? {}
    ), e = b(
      () => s.value.find(({ code: v }) => _.value === v)
    ), o = (v) => {
      var n, r;
      v && ((n = i.value) != null && n.$el.contains(v.target)) || ((r = i.value) == null || r.$el.querySelector(".button").blur(), a.value = !1, window.removeEventListener("mousedown", o));
    }, p = () => {
      a.value = !0, window.addEventListener("mousedown", o);
    }, f = (v) => {
      m("update:modelValue", v), o();
    };
    return H(() => {
      window.removeEventListener("mousedown", o);
    }), (v, n) => (d(), y(W, {
      class: "currency-selector",
      ref_key: "currencySelector",
      ref: i,
      horizontal: "center"
    }, {
      default: h(() => {
        var r;
        return [
          w(j, {
            class: "currency-button",
            onClick: n[0] || (n[0] = (g) => p()),
            onFocus: n[1] || (n[1] = (g) => p()),
            onKeydown: [
              n[2] || (n[2] = P(U((g) => o(), ["shift"]), ["tab"])),
              n[3] || (n[3] = P((g) => o(), ["tab"]))
            ],
            label: (r = e.value) == null ? void 0 : r.symbol,
            mood: "neutral",
            outline: "",
            size: "large-3",
            shape: "round"
          }, null, 8, ["label"]),
          w(O, {
            class: "currency-menu no-spacing",
            onSelect: n[4] || (n[4] = (g) => f(g)),
            items: t.value,
            visible: a.value
          }, null, 8, ["items", "visible"])
        ];
      }),
      _: 1
    }, 512));
  }
});
const Je = /* @__PURE__ */ x(_e, [["__scopeId", "data-v-a650d612"]]), fe = /* @__PURE__ */ k({
  __name: "Form",
  props: {
    fields: {},
    values: {}
  },
  setup(c) {
    const m = c, { fields: l } = B(m);
    return (s, _) => (d(), y(de, {
      fields: u(l),
      values: s.values
    }, {
      "field(dropdown)": h(({ code: i, label: a, options: t, value: e }) => [
        a ? (d(), y(z, {
          key: 0,
          class: "label"
        }, {
          default: h(() => [
            E(L(a), 1)
          ]),
          _: 2
        }, 1024)) : M("", !0),
        w(ie, {
          "onUpdate:modelValue": (o) => s.$emit(`update:${i}`, o),
          items: t.items,
          modelValue: e
        }, null, 8, ["onUpdate:modelValue", "items", "modelValue"])
      ]),
      "field(info)": h(({ label: i }) => [
        w(z, null, {
          default: h(() => [
            E(L(i), 1)
          ]),
          _: 2
        }, 1024)
      ]),
      "field(input)": h(({ code: i, label: a, value: t }) => [
        a ? (d(), y(z, {
          key: 0,
          class: "label"
        }, {
          default: h(() => [
            E(L(a), 1)
          ]),
          _: 2
        }, 1024)) : M("", !0),
        w(re, {
          "onUpdate:modelValue": (e) => s.$emit(`update:${i}`, e),
          modelValue: t
        }, null, 8, ["onUpdate:modelValue", "modelValue"])
      ]),
      _: 1
    }, 8, ["fields", "values"]));
  }
});
const Qe = /* @__PURE__ */ x(fe, [["__scopeId", "data-v-39d44946"]]), he = (c) => (X("data-v-85b21410"), c = c(), Y(), c), ye = /* @__PURE__ */ he(() => /* @__PURE__ */ A("div", { class: "menu-button-lines" }, null, -1)), be = /* @__PURE__ */ k({
  __name: "Header",
  emits: ["menuToggle"],
  setup(c, { emit: m }) {
    const l = () => {
      document.documentElement.scrollTo({
        left: 0,
        top: 0
      });
    };
    return (s, _) => (d(), y(W, {
      class: "header",
      vertical: "center"
    }, {
      default: h(() => [
        w(W, {
          class: "menu-button",
          onClick: _[0] || (_[0] = () => m("menuToggle")),
          vertical: "center"
        }, {
          default: h(() => [
            ye
          ]),
          _: 1
        }),
        w(W, {
          class: "title",
          onClick: _[1] || (_[1] = () => l()),
          vertical: "center"
        }, {
          default: h(() => [
            w(z, { size: "large-2" }, {
              default: h(() => [
                D(s.$slots, "title", {}, void 0, !0)
              ]),
              _: 3
            })
          ]),
          _: 3
        }),
        w(ce),
        D(s.$slots, "end", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
});
const Xe = /* @__PURE__ */ x(be, [["__scopeId", "data-v-85b21410"]]), we = /* @__PURE__ */ k({
  __name: "LocaleSelector",
  props: {
    locales: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(c, { emit: m }) {
    const l = c, { locales: s, modelValue: _ } = B(l), i = I(), a = I(!1), t = b(
      () => s.value.reduce((v, n) => (v[n.code] = {
        icon: n.icon,
        iconBackend: "flag-icons"
      }, v), {})
    ), e = b(
      () => s.value.find((v) => v.code === _.value).icon
    ), o = (v) => {
      var n, r;
      v && ((n = i.value) != null && n.$el.contains(v.target)) || (a.value = !1, (r = i.value) == null || r.$el.querySelector(".button").blur(), window.removeEventListener("mousedown", o));
    }, p = () => {
      a.value = !0, window.addEventListener("mousedown", o);
    }, f = (v) => {
      m("update:modelValue", v), o();
    };
    return H(() => {
      window.removeEventListener("mousedown", o);
    }), (v, n) => (d(), y(W, {
      class: "locale-selector",
      ref_key: "localeSelector",
      ref: i,
      horizontal: "center"
    }, {
      default: h(() => [
        w(j, {
          class: "locale-button",
          onClick: n[0] || (n[0] = (r) => p()),
          onFocus: n[1] || (n[1] = (r) => p()),
          onKeydown: [
            n[2] || (n[2] = P(U((r) => o(), ["shift"]), ["tab"])),
            n[3] || (n[3] = P((r) => o(), ["tab"]))
          ],
          icon: e.value,
          iconBackend: "flag-icons-square",
          mood: "neutral",
          outline: "",
          size: "large-3",
          shape: "round"
        }, null, 8, ["icon"]),
        w(O, {
          class: "locale-menu no-spacing",
          onSelect: n[4] || (n[4] = (r) => f(r)),
          items: t.value,
          visible: a.value
        }, null, 8, ["items", "visible"])
      ]),
      _: 1
    }, 512));
  }
});
const Ye = /* @__PURE__ */ x(we, [["__scopeId", "data-v-dd1fb6f5"]]), ge = {
  key: 0,
  class: "collapse"
}, ke = /* @__PURE__ */ k({
  __name: "Collapse",
  props: {
    expanded: { type: Boolean, default: !1 }
  },
  setup(c) {
    const m = c, { expanded: l } = B(m), s = (a) => {
      const t = a;
      t.style.height = "auto";
    }, _ = (a) => {
      const t = a, e = getComputedStyle(t).width;
      t.style.width = e, t.style.position = "absolute", t.style.visibility = "hidden", t.style.height = "auto";
      const o = getComputedStyle(t).height;
      t.style.width = "", t.style.position = "", t.style.visibility = "", t.style.height = "0", getComputedStyle(t).height, requestAnimationFrame(() => {
        t.style.height = o;
      });
    }, i = (a) => {
      const t = a, e = getComputedStyle(t).height;
      t.style.height = e, getComputedStyle(t).height, requestAnimationFrame(() => {
        t.style.height = "0";
      });
    };
    return (a, t) => (d(), y(ne, {
      name: "collapse",
      onAfterEnter: s,
      onEnter: _,
      onLeave: i
    }, {
      default: h(() => [
        u(l) ? (d(), S("div", ge, [
          D(a.$slots, "default", {}, void 0, !0)
        ])) : M("", !0)
      ]),
      _: 3
    }));
  }
});
const xe = /* @__PURE__ */ x(ke, [["__scopeId", "data-v-10c3004c"]]);
class J extends me {
  getMessage(m) {
    return `Invalid menu item level ${m}`;
  }
}
const $e = /* @__PURE__ */ k({
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
    const m = c, { active: l, fullWidth: s, icon: _, iconBackend: i, label: a, level: t, withSublevel: e } = B(m), o = b(
      () => F(t.value).when(1, () => "large-3").whenAny([2, 3], () => "large").or((n) => {
        throw new J(n);
      }).done
    ), p = b(() => l.value ? "elevated-2" : "elevated"), f = b(
      () => F(t.value).when(1, () => "large").whenAny([2, 3], () => "normal").or((n) => {
        throw new J(n);
      }).done
    ), v = b(() => ({
      active: l.value,
      "full-width": s.value,
      [`level-${t.value}`]: !0,
      "with-sublevel": e.value
    }));
    return (n, r) => (d(), y(oe(n.link ? "a" : "div"), {
      class: R(["menu-item", v.value]),
      href: n.link ? n.link : void 0
    }, {
      default: h(() => [
        u(_) ? (d(), y(K, {
          key: 0,
          class: "item-icon",
          backend: u(i),
          elevation: p.value,
          size: o.value,
          value: u(_)
        }, null, 8, ["backend", "elevation", "size", "value"])) : M("", !0),
        u(s) && u(a) ? (d(), y(z, {
          key: 1,
          elevation: p.value,
          size: f.value
        }, {
          default: h(() => [
            E(L(u(a)), 1)
          ]),
          _: 1
        }, 8, ["elevation", "size"])) : M("", !0),
        u(s) && u(e) ? (d(), y(K, {
          key: 2,
          class: "chevron",
          elevation: p.value,
          size: "large-3",
          value: "chevron-right"
        }, null, 8, ["elevation"])) : M("", !0)
      ]),
      _: 1
    }, 8, ["class", "href"]));
  }
});
const Q = /* @__PURE__ */ x($e, [["__scopeId", "data-v-4f79a7a5"]]), Se = /* @__PURE__ */ k({
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
    const l = c, {
      expandedPrefix: s,
      icon: _,
      iconBackend: i,
      items: a,
      label: t,
      level: e,
      prefix: o,
      router: p,
      translator: f
    } = B(l), v = b(() => p.value.currentRoute.value.meta.menuItem), n = b(() => e.value + 1), r = b(() => e.value + 1), g = (C) => {
      m("update:expandedPrefix", o.value);
      const T = a.value[C];
      "items" in T || p.value.push(T.route);
    };
    return (C, T) => {
      const ee = le("MenuSubsection", !0);
      return d(), S(V, null, [
        u(t) ? (d(), S(V, { key: 0 }, [
          u(e) === 0 ? (d(), S(V, { key: 0 }, [
            C.fullWidth ? (d(), y(z, {
              key: 0,
              class: "section",
              elevation: "elevated"
            }, {
              default: h(() => [
                E(L(u(f)(u(t)).toUpperCase()), 1)
              ]),
              _: 1
            })) : (d(), y(K, {
              key: 1,
              class: "section-collapsed",
              elevation: "elevated",
              size: "large-3",
              value: "dots-horizontal-rounded"
            }))
          ], 64)) : (d(), y(Q, {
            key: 1,
            onClick: T[0] || (T[0] = () => m("update:expandedPrefix", u(o))),
            active: u(s).startsWith(u(o)),
            fullWidth: C.fullWidth,
            icon: u(_),
            iconBackend: u(i),
            label: C.fullWidth ? u(t) : void 0,
            level: u(e),
            withSublevel: ""
          }, null, 8, ["active", "fullWidth", "icon", "iconBackend", "label", "level"]))
        ], 64)) : M("", !0),
        w(xe, {
          expanded: u(e) === 0 || u(s).startsWith(u(o))
        }, {
          default: h(() => [
            (d(!0), S(V, null, G(u(a), ($, q) => (d(), S(V, null, [
              "items" in $ ? (d(), y(ee, {
                key: 0,
                "onUpdate:expandedPrefix": T[1] || (T[1] = (te) => m("update:expandedPrefix", te)),
                expandedPrefix: u(s),
                fullWidth: C.fullWidth,
                icon: $.icon,
                iconBackend: $.iconBackend,
                items: $.items,
                level: r.value,
                label: $.label ? u(f)($.label) : "",
                prefix: `${u(o)}${q}.`,
                router: u(p),
                translator: u(f)
              }, null, 8, ["expandedPrefix", "fullWidth", "icon", "iconBackend", "items", "level", "label", "prefix", "router", "translator"])) : C.fullWidth || u(e) === 0 ? (d(), y(Q, {
                key: 1,
                onClick: U(() => g(q), ["prevent"]),
                active: `${u(o)}${q}` === v.value,
                fullWidth: C.fullWidth,
                icon: $.icon,
                iconBackend: $.iconBackend,
                label: C.fullWidth ? u(f)($.label) : void 0,
                level: n.value,
                link: u(p).resolve($.route).href
              }, null, 8, ["onClick", "active", "fullWidth", "icon", "iconBackend", "label", "level", "link"])) : M("", !0)
            ], 64))), 256))
          ]),
          _: 1
        }, 8, ["expanded"])
      ], 64);
    };
  }
});
const Ie = /* @__PURE__ */ x(Se, [["__scopeId", "data-v-5930d33d"]]), Be = (c) => (X("data-v-303139ca"), c = c(), Y(), c), Ce = { class: "items" }, Me = /* @__PURE__ */ Be(() => /* @__PURE__ */ A("div", { class: "pixel" }, " ", -1)), Te = /* @__PURE__ */ k({
  __name: "SideMenu",
  props: {
    brandText: {},
    fullWidth: { type: Boolean },
    menu: {},
    router: {},
    translator: { type: Function }
  },
  setup(c) {
    const m = c, l = I(""), s = I(!1), { fullWidth: _, router: i } = B(m), a = b(() => _.value || s.value);
    return Z(i.value.currentRoute, (t) => {
      const e = t.meta.menuItem ?? "";
      l.value = e.substring(0, e.lastIndexOf(".") + 1);
    }, { immediate: !0 }), (t, e) => (d(), S("div", {
      class: R(["side-menu", { "full-width": a.value }]),
      onMouseenter: e[2] || (e[2] = (o) => s.value = !0),
      onMouseleave: e[3] || (e[3] = (o) => s.value = !1)
    }, [
      A("div", {
        class: "brand",
        onClick: e[0] || (e[0] = (o) => u(i).push({ name: "default" }))
      }, [
        w(se),
        w(ve, {
          elevation: "elevated-3",
          size: "large-4"
        }, {
          default: h(() => [
            E(L(t.brandText), 1)
          ]),
          _: 1
        })
      ]),
      A("div", Ce, [
        (d(!0), S(V, null, G(t.menu, (o, p) => (d(), y(Ie, {
          expandedPrefix: l.value,
          "onUpdate:expandedPrefix": e[1] || (e[1] = (f) => l.value = f),
          fullWidth: a.value,
          icon: o.icon,
          iconBackend: o.iconBackend,
          items: o.items,
          label: o.label ?? "",
          prefix: `${p}.`,
          router: u(i),
          translator: t.translator
        }, null, 8, ["expandedPrefix", "fullWidth", "icon", "iconBackend", "items", "label", "prefix", "router", "translator"]))), 256)),
        Me
      ])
    ], 34));
  }
});
const Ze = /* @__PURE__ */ x(Te, [["__scopeId", "data-v-303139ca"]]), Ve = /* @__PURE__ */ k({
  __name: "ThemeToggle",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(c, { emit: m }) {
    const l = c, { modelValue: s } = B(l), _ = b(
      () => F(s.value).when("dark", () => "moon").when("light", () => "sun").or((t) => {
        throw new N(t);
      }).done
    ), i = b(
      () => F(s.value).when("dark", () => "accent").when("light", () => "important").or((t) => {
        throw new N(t);
      }).done
    ), a = () => {
      const t = F(s.value).when("dark", () => "light").when("light", () => "dark").or((e) => {
        throw new N(e);
      }).done;
      m("update:modelValue", t);
    };
    return (t, e) => (d(), y(W, { class: "theme-toggle" }, {
      default: h(() => [
        w(j, {
          onClick: e[0] || (e[0] = () => a()),
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
const et = /* @__PURE__ */ x(Ve, [["__scopeId", "data-v-8832a6ee"]]), We = { class: "toasts" }, Ee = /* @__PURE__ */ k({
  __name: "Toasts",
  props: {
    toasts: {}
  },
  emits: ["removeToast"],
  setup(c, { emit: m }) {
    const l = c, { toasts: s } = B(l), _ = b(
      () => Object.entries(s.value).reverse().map(([e, o]) => [Number(e), o])
    ), i = I([]), a = I([]), t = (e) => {
      i.value.includes(e) || (i.value.push(e), clearTimeout(a.value[e]), delete a.value[e], window.setTimeout(() => {
        m("removeToast", e), i.value = i.value.filter((o) => o !== e);
      }, 500));
    };
    return Z(
      s,
      () => {
        for (const e of s.value)
          e.id in a.value || (a.value[e.id] = window.setTimeout(() => {
            t(e.id);
          }, 5e3));
      },
      { deep: !0, immediate: !0 }
    ), (e, o) => (d(), S("div", We, [
      (d(!0), S(V, null, G(_.value, ([p, f]) => (d(), y(ue, {
        onClick: () => t(p),
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
const tt = /* @__PURE__ */ x(Ee, [["__scopeId", "data-v-3d45b4ea"]]);
export {
  je as AccountMenu,
  Je as CurrencySelector,
  Qe as Form,
  Xe as Header,
  Ye as LocaleSelector,
  Ze as SideMenu,
  Q as SideMenuItem,
  Ie as SideMenuSubsection,
  et as ThemeToggle,
  tt as Toasts
};
