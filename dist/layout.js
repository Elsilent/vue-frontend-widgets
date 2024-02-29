import { defineComponent as h, toRefs as I, computed as p, ref as M, onUnmounted as D, openBlock as d, createBlock as w, withCtx as k, createVNode as y, withKeys as L, withModifiers as U, unref as i, createTextVNode as V, toDisplayString as x, createCommentVNode as z, createElementVNode as F, renderSlot as G, resolveDynamicComponent as W, normalizeClass as J, resolveComponent as X, createElementBlock as B, Fragment as T, renderList as K, pushScopeId as Y, popScopeId as Z, watch as ee } from "vue";
import { A, I as O } from "./Icon-8f2ed8ba.js";
import { A as ne, L as oe } from "./Logo-d6af18ef.js";
import { P as q, T as te } from "./Toast-de12191e.js";
import { _ as S } from "./_plugin-vue_export-helper-dad06003.js";
import { B as H, D as le, I as ae } from "./Input-b2f3286e.js";
import { G as se } from "./Form-f36966a3.js";
import { I as C } from "./Info-54758b60.js";
import { Separator as ue } from "./marker.js";
import { B as re } from "./BrandText-d1a46d42.js";
import { BaseError as ce } from "./utils/error.js";
import { m as E } from "./match-b8889c93.js";
import { U as N } from "./undefined_theme-2b4e75dd.js";
import "./Popover-38d3223e.js";
const ie = /* @__PURE__ */ h({
  __name: "AccountMenu",
  props: {
    avatar: {},
    menuItems: {}
  },
  setup(v) {
    const m = v, { avatar: n, menuItems: u } = I(m), f = p(
      () => n && n.value && "icon" in n.value ? n.value.icon : void 0
    ), t = p(
      () => n && n.value && "iconBackend" in n.value ? n.value.iconBackend : void 0
    ), l = p(
      () => n && n.value && "label" in n.value ? n.value.label : void 0
    ), c = p(
      () => n && n.value && "source" in n.value ? n.value.source : void 0
    ), o = M(), a = M(!1), _ = (e) => {
      var r;
      e && ((r = o.value) != null && r.$el.contains(e.target)) || (a.value = !1, window.removeEventListener("mousedown", _));
    }, b = () => {
      a.value = !0, window.addEventListener("mousedown", _);
    }, s = (e) => {
      u.value[e].handler(), _();
    };
    return D(() => {
      window.removeEventListener("mousedown", _);
    }), (e, r) => (d(), w(A, {
      class: "account-menu",
      ref_key: "accountMenu",
      ref: o
    }, {
      default: k(() => [
        y(ne, {
          onClick: r[0] || (r[0] = (g) => b()),
          onFocus: r[1] || (r[1] = (g) => b()),
          onKeydown: [
            r[2] || (r[2] = L(U((g) => _(), ["shift"]), ["tab"])),
            r[3] || (r[3] = L((g) => _(), ["tab"]))
          ],
          icon: f.value,
          iconBackend: t.value,
          label: l.value,
          source: c.value
        }, null, 8, ["icon", "iconBackend", "label", "source"]),
        y(q, {
          class: "account-menu",
          onSelect: r[4] || (r[4] = (g) => s(g)),
          items: i(u),
          visible: a.value
        }, null, 8, ["items", "visible"])
      ]),
      _: 1
    }, 512));
  }
});
const Ke = /* @__PURE__ */ S(ie, [["__scopeId", "data-v-6b125e88"]]), de = /* @__PURE__ */ h({
  __name: "CurrencySelector",
  props: {
    currencies: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(v, { emit: m }) {
    const n = v, { currencies: u, modelValue: f } = I(n), t = M(), l = M(!1), c = p(
      () => u.value.reduce((s, e) => (s[e.code] = {
        label: e.label
      }, s), {}) ?? {}
    ), o = p(
      () => u.value.find(({ code: s }) => f.value === s)
    ), a = (s) => {
      var e, r;
      s && ((e = t.value) != null && e.$el.contains(s.target)) || ((r = t.value) == null || r.$el.querySelector(".button").blur(), l.value = !1, window.removeEventListener("mousedown", a));
    }, _ = () => {
      l.value = !0, window.addEventListener("mousedown", a);
    }, b = (s) => {
      m("update:modelValue", s), a();
    };
    return D(() => {
      window.removeEventListener("mousedown", a);
    }), (s, e) => (d(), w(A, {
      class: "currency-selector",
      ref_key: "currencySelector",
      ref: t,
      horizontal: "center"
    }, {
      default: k(() => {
        var r;
        return [
          y(H, {
            class: "currency-button",
            onClick: e[0] || (e[0] = (g) => _()),
            onFocus: e[1] || (e[1] = (g) => _()),
            onKeydown: [
              e[2] || (e[2] = L(U((g) => a(), ["shift"]), ["tab"])),
              e[3] || (e[3] = L((g) => a(), ["tab"]))
            ],
            label: (r = o.value) == null ? void 0 : r.symbol,
            mood: "neutral",
            outline: "",
            size: "large-3",
            shape: "round"
          }, null, 8, ["label"]),
          y(q, {
            class: "currency-menu no-spacing",
            onSelect: e[4] || (e[4] = (g) => b(g)),
            items: c.value,
            visible: l.value
          }, null, 8, ["items", "visible"])
        ];
      }),
      _: 1
    }, 512));
  }
});
const qe = /* @__PURE__ */ S(de, [["__scopeId", "data-v-a650d612"]]), ve = /* @__PURE__ */ h({
  __name: "Form",
  props: {
    fields: {},
    values: {}
  },
  setup(v) {
    const m = v, { fields: n } = I(m);
    return (u, f) => (d(), w(se, {
      fields: i(n),
      values: u.values
    }, {
      "field(dropdown)": k(({ code: t, label: l, options: c, value: o }) => [
        l ? (d(), w(C, {
          key: 0,
          class: "label"
        }, {
          default: k(() => [
            V(x(l), 1)
          ]),
          _: 2
        }, 1024)) : z("", !0),
        y(le, {
          "onUpdate:modelValue": (a) => u.$emit(`update:${t}`, a),
          items: c.items,
          modelValue: o
        }, null, 8, ["onUpdate:modelValue", "items", "modelValue"])
      ]),
      "field(info)": k(({ label: t }) => [
        y(C, null, {
          default: k(() => [
            V(x(t), 1)
          ]),
          _: 2
        }, 1024)
      ]),
      "field(input)": k(({ code: t, label: l, value: c }) => [
        l ? (d(), w(C, {
          key: 0,
          class: "label"
        }, {
          default: k(() => [
            V(x(l), 1)
          ]),
          _: 2
        }, 1024)) : z("", !0),
        y(ae, {
          "onUpdate:modelValue": (o) => u.$emit(`update:${t}`, o),
          modelValue: c
        }, null, 8, ["onUpdate:modelValue", "modelValue"])
      ]),
      _: 1
    }, 8, ["fields", "values"]));
  }
});
const He = /* @__PURE__ */ S(ve, [["__scopeId", "data-v-39d44946"]]), me = /* @__PURE__ */ h({
  __name: "Header",
  setup(v) {
    const m = () => {
      document.documentElement.scrollTo({
        left: 0,
        top: 0
      });
    };
    return (n, u) => (d(), w(A, {
      class: "header",
      vertical: "center"
    }, {
      default: k(() => [
        F("div", {
          class: "title",
          onClick: u[0] || (u[0] = () => m())
        }, [
          y(C, { size: "large-2" }, {
            default: k(() => [
              G(n.$slots, "title", {}, void 0, !0)
            ]),
            _: 3
          })
        ]),
        y(ue),
        G(n.$slots, "end", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
});
const je = /* @__PURE__ */ S(me, [["__scopeId", "data-v-b7acc042"]]), _e = /* @__PURE__ */ h({
  __name: "LocaleSelector",
  props: {
    locales: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(v, { emit: m }) {
    const n = v, { locales: u, modelValue: f } = I(n), t = M(), l = M(!1), c = p(
      () => u.value.reduce((s, e) => (s[e.code] = {
        icon: e.icon,
        iconBackend: "flag-icons"
      }, s), {})
    ), o = p(
      () => u.value.find((s) => s.code === f.value).icon
    ), a = (s) => {
      var e, r;
      s && ((e = t.value) != null && e.$el.contains(s.target)) || (l.value = !1, (r = t.value) == null || r.$el.querySelector(".button").blur(), window.removeEventListener("mousedown", a));
    }, _ = () => {
      l.value = !0, window.addEventListener("mousedown", a);
    }, b = (s) => {
      m("update:modelValue", s), a();
    };
    return D(() => {
      window.removeEventListener("mousedown", a);
    }), (s, e) => (d(), w(A, {
      class: "locale-selector",
      ref_key: "localeSelector",
      ref: t,
      horizontal: "center"
    }, {
      default: k(() => [
        y(H, {
          class: "locale-button",
          onClick: e[0] || (e[0] = (r) => _()),
          onFocus: e[1] || (e[1] = (r) => _()),
          onKeydown: [
            e[2] || (e[2] = L(U((r) => a(), ["shift"]), ["tab"])),
            e[3] || (e[3] = L((r) => a(), ["tab"]))
          ],
          icon: o.value,
          iconBackend: "flag-icons-square",
          mood: "neutral",
          outline: "",
          size: "large-3",
          shape: "round"
        }, null, 8, ["icon"]),
        y(q, {
          class: "locale-menu no-spacing",
          onSelect: e[4] || (e[4] = (r) => b(r)),
          items: c.value,
          visible: l.value
        }, null, 8, ["items", "visible"])
      ]),
      _: 1
    }, 512));
  }
});
const Ge = /* @__PURE__ */ S(_e, [["__scopeId", "data-v-dd1fb6f5"]]);
class P extends ce {
  getMessage(m) {
    return `Invalid menu item level ${m}`;
  }
}
const pe = /* @__PURE__ */ h({
  __name: "MenuItem",
  props: {
    active: { type: Boolean, default: !1 },
    icon: {},
    iconBackend: {},
    label: {},
    level: { default: 1 },
    withSublevel: { type: Boolean, default: !1 },
    link: {}
  },
  setup(v) {
    const m = v, { active: n, icon: u, iconBackend: f, label: t, level: l, withSublevel: c } = I(m), o = p(
      () => E(l.value).when(1, () => "large-3").whenAny([2, 3], () => "large").or((s) => {
        throw new P(s);
      }).done
    ), a = p(() => n.value ? "elevated-2" : "elevated"), _ = p(
      () => E(l.value).when(1, () => "large").whenAny([2, 3], () => "normal").or((s) => {
        throw new P(s);
      }).done
    ), b = p(() => ({
      active: n.value,
      [`level-${l.value}`]: !0,
      "with-sublevel": c.value
    }));
    return (s, e) => (d(), w(W(s.link ? "a" : "div"), {
      class: J(["menu-item", b.value]),
      href: s.link ? s.link : void 0
    }, {
      default: k(() => [
        i(u) ? (d(), w(O, {
          key: 0,
          class: "item-icon",
          backend: i(f),
          elevation: a.value,
          size: o.value,
          value: i(u)
        }, null, 8, ["backend", "elevation", "size", "value"])) : z("", !0),
        y(C, {
          elevation: a.value,
          size: _.value
        }, {
          default: k(() => [
            V(x(i(t)), 1)
          ]),
          _: 1
        }, 8, ["elevation", "size"]),
        i(c) ? (d(), w(O, {
          key: 1,
          class: "chevron",
          elevation: a.value,
          size: "large-3",
          value: "chevron-right"
        }, null, 8, ["elevation"])) : z("", !0)
      ]),
      _: 1
    }, 8, ["class", "href"]));
  }
});
const R = /* @__PURE__ */ S(pe, [["__scopeId", "data-v-78a874f4"]]), fe = /* @__PURE__ */ h({
  __name: "MenuSubsection",
  props: {
    icon: {},
    iconBackend: {},
    items: {},
    label: {},
    level: { default: 0 },
    prefix: {},
    router: {},
    translator: {}
  },
  setup(v) {
    const m = v, { icon: n, iconBackend: u, items: f, label: t, level: l, prefix: c, router: o, translator: a } = I(m), _ = p(() => o.value.currentRoute.value.meta.menuItem), b = p(() => Object.entries(f.value).some(([r, g]) => "route" in g && `${c.value}${r}` === _.value)), s = p(() => l.value + 1), e = p(() => l.value + 1);
    return (r, g) => {
      const Q = X("MenuSubsection", !0);
      return d(), B(T, null, [
        i(t) ? (d(), B(T, { key: 0 }, [
          i(l) === 0 ? (d(), w(C, {
            key: 0,
            class: "section",
            elevation: "elevated"
          }, {
            default: k(() => [
              V(x(i(a)(i(t)).toUpperCase()), 1)
            ]),
            _: 1
          })) : (d(), w(R, {
            key: 1,
            active: b.value,
            icon: i(n),
            iconBackend: i(u),
            label: i(t),
            level: i(l),
            withSublevel: ""
          }, null, 8, ["active", "icon", "iconBackend", "label", "level"]))
        ], 64)) : z("", !0),
        (d(!0), B(T, null, K(i(f), ($, j) => (d(), B(T, null, [
          "items" in $ ? (d(), w(Q, {
            key: 0,
            icon: $.icon,
            iconBackend: $.iconBackend,
            items: $.items,
            level: e.value,
            label: $.label ? i(a)($.label) : "",
            prefix: `${i(c)}${j}.`,
            router: i(o),
            translator: i(a)
          }, null, 8, ["icon", "iconBackend", "items", "level", "label", "prefix", "router", "translator"])) : (d(), w(R, {
            key: 1,
            onClick: U(() => i(o).push($.route), ["prevent"]),
            active: `${i(c)}${j}` === _.value,
            icon: $.icon,
            iconBackend: $.iconBackend,
            label: i(a)($.label),
            level: s.value,
            link: i(o).resolve({ name: $.route.name }).href
          }, null, 8, ["onClick", "active", "icon", "iconBackend", "label", "level", "link"]))
        ], 64))), 256))
      ], 64);
    };
  }
});
const be = /* @__PURE__ */ S(fe, [["__scopeId", "data-v-e2b93ab7"]]), we = (v) => (Y("data-v-00bfa0a4"), v = v(), Z(), v), ke = { class: "side-menu" }, ye = { class: "items" }, ge = /* @__PURE__ */ we(() => /* @__PURE__ */ F("div", { class: "pixel" }, " ", -1)), $e = /* @__PURE__ */ h({
  __name: "SideMenu",
  props: {
    brandText: {},
    menu: {},
    router: {},
    translator: { type: Function }
  },
  setup(v) {
    const m = v, { router: n } = I(m);
    return (u, f) => (d(), B("div", ke, [
      F("div", {
        class: "brand",
        onClick: f[0] || (f[0] = (t) => i(n).push({ name: "default" }))
      }, [
        y(oe),
        y(re, {
          elevation: "elevated-3",
          size: "large-4"
        }, {
          default: k(() => [
            V(x(u.brandText), 1)
          ]),
          _: 1
        })
      ]),
      F("div", ye, [
        (d(!0), B(T, null, K(u.menu, (t, l) => (d(), w(be, {
          icon: t.icon,
          iconBackend: t.iconBackend,
          items: t.items,
          label: t.label ?? "",
          prefix: `${l}.`,
          router: i(n),
          translator: u.translator
        }, null, 8, ["icon", "iconBackend", "items", "label", "prefix", "router", "translator"]))), 256)),
        ge
      ])
    ]));
  }
});
const Oe = /* @__PURE__ */ S($e, [["__scopeId", "data-v-00bfa0a4"]]), he = /* @__PURE__ */ h({
  __name: "ThemeToggle",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(v, { emit: m }) {
    const n = v, { modelValue: u } = I(n), f = p(
      () => E(u.value).when("dark", () => "moon").when("light", () => "sun").or((c) => {
        throw new N(c);
      }).done
    ), t = p(
      () => E(u.value).when("dark", () => "accent").when("light", () => "important").or((c) => {
        throw new N(c);
      }).done
    ), l = () => {
      const c = E(u.value).when("dark", () => "light").when("light", () => "dark").or((o) => {
        throw new N(o);
      }).done;
      m("update:modelValue", c);
    };
    return (c, o) => (d(), w(A, { class: "theme-toggle" }, {
      default: k(() => [
        y(H, {
          onClick: o[0] || (o[0] = () => l()),
          icon: f.value,
          mood: t.value,
          outline: "",
          size: "large-2",
          shape: "round"
        }, null, 8, ["icon", "mood"])
      ]),
      _: 1
    }));
  }
});
const Pe = /* @__PURE__ */ S(he, [["__scopeId", "data-v-8832a6ee"]]), Se = { class: "toasts" }, Ie = /* @__PURE__ */ h({
  __name: "Toasts",
  props: {
    toasts: {}
  },
  emits: ["removeToast"],
  setup(v, { emit: m }) {
    const n = v, { toasts: u } = I(n), f = p(
      () => Object.entries(u.value).reverse().map(([o, a]) => [Number(o), a])
    ), t = M([]), l = M([]), c = (o) => {
      t.value.includes(o) || (t.value.push(o), clearTimeout(l.value[o]), delete l.value[o], window.setTimeout(() => {
        m("removeToast", o), t.value = t.value.filter((a) => a !== o);
      }, 500));
    };
    return ee(
      u,
      () => {
        for (const o of u.value)
          o.id in l.value || (l.value[o.id] = window.setTimeout(() => {
            c(o.id);
          }, 5e3));
      },
      { deep: !0, immediate: !0 }
    ), (o, a) => (d(), B("div", Se, [
      (d(!0), B(T, null, K(f.value, ([_, b]) => (d(), w(te, {
        onClick: () => c(_),
        class: J({ "fade-out": t.value.includes(b.id) }),
        icon: b.icon,
        iconBackend: b.iconBackend,
        key: `toast-${b.id}`,
        mood: b.mood,
        message: b.message,
        title: b.title
      }, null, 8, ["onClick", "class", "icon", "iconBackend", "mood", "message", "title"]))), 128))
    ]));
  }
});
const Re = /* @__PURE__ */ S(Ie, [["__scopeId", "data-v-3d45b4ea"]]);
export {
  Ke as AccountMenu,
  qe as CurrencySelector,
  He as Form,
  je as Header,
  Ge as LocaleSelector,
  Oe as SideMenu,
  R as SideMenuItem,
  be as SideMenuSubsection,
  Pe as ThemeToggle,
  Re as Toasts
};
