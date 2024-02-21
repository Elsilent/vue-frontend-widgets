import { defineComponent as $, toRefs as B, computed as _, ref as M, onUnmounted as U, openBlock as d, createBlock as w, withCtx as k, createVNode as y, unref as i, createTextVNode as V, toDisplayString as x, createCommentVNode as E, createElementVNode as A, renderSlot as j, resolveDynamicComponent as K, normalizeClass as R, resolveComponent as Q, createElementBlock as I, Fragment as T, renderList as N, withModifiers as W, pushScopeId as X, popScopeId as Y, watch as Z } from "vue";
import { A as z, I as G } from "./Icon-8f2ed8ba.js";
import { A as ee, L as ne } from "./Logo-d6af18ef.js";
import { P as D, T as oe } from "./Toast-9554fdeb.js";
import { _ as S } from "./_plugin-vue_export-helper-dad06003.js";
import { B as q, D as te, I as le } from "./Input-b2f3286e.js";
import { G as ae } from "./Form-f36966a3.js";
import { I as C } from "./Info-54758b60.js";
import { Separator as se } from "./marker.js";
import { B as ue } from "./BrandText-d1a46d42.js";
import { BaseError as re } from "./utils/error.js";
import { m as L } from "./match-b8889c93.js";
import { U as F } from "./undefined_theme-2b4e75dd.js";
import "./Popover-38d3223e.js";
const ce = /* @__PURE__ */ $({
  __name: "AccountMenu",
  props: {
    avatar: {},
    menuItems: {}
  },
  setup(v) {
    const m = v, { avatar: n, menuItems: s } = B(m), p = _(
      () => n && n.value && "icon" in n.value ? n.value.icon : void 0
    ), t = _(
      () => n && n.value && "iconBackend" in n.value ? n.value.iconBackend : void 0
    ), l = _(
      () => n && n.value && "label" in n.value ? n.value.label : void 0
    ), c = _(
      () => n && n.value && "source" in n.value ? n.value.source : void 0
    ), o = M(), u = M(!1), f = (e) => {
      var r;
      e && ((r = o.value) != null && r.$el.contains(e.target)) || (u.value = !1, window.removeEventListener("mousedown", f));
    }, b = () => {
      u.value = !0, window.addEventListener("mousedown", f);
    }, a = (e) => {
      s.value[e].handler(), f();
    };
    return U(() => {
      window.removeEventListener("mousedown", f);
    }), (e, r) => (d(), w(z, {
      class: "account-menu",
      ref_key: "accountMenu",
      ref: o
    }, {
      default: k(() => [
        y(ee, {
          onClick: r[0] || (r[0] = (g) => b()),
          onFocus: r[1] || (r[1] = (g) => b()),
          onBlur: r[2] || (r[2] = (g) => f()),
          icon: p.value,
          iconBackend: t.value,
          label: l.value,
          source: c.value
        }, null, 8, ["icon", "iconBackend", "label", "source"]),
        y(D, {
          class: "account-menu",
          onSelect: r[3] || (r[3] = (g) => a(g)),
          items: i(s),
          visible: u.value
        }, null, 8, ["items", "visible"])
      ]),
      _: 1
    }, 512));
  }
});
const De = /* @__PURE__ */ S(ce, [["__scopeId", "data-v-12c732ef"]]), ie = /* @__PURE__ */ $({
  __name: "CurrencySelector",
  props: {
    currencies: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(v, { emit: m }) {
    const n = v, { currencies: s, modelValue: p } = B(n), t = M(), l = M(!1), c = _(
      () => s.value.reduce((a, e) => (a[e.code] = {
        label: e.label
      }, a), {}) ?? {}
    ), o = _(
      () => s.value.find(({ code: a }) => p.value === a)
    ), u = (a) => {
      var e, r;
      a && ((e = t.value) != null && e.$el.contains(a.target)) || ((r = t.value) == null || r.$el.querySelector(".button").blur(), l.value = !1, window.removeEventListener("mousedown", u));
    }, f = () => {
      l.value = !0, window.addEventListener("mousedown", u);
    }, b = (a) => {
      m("update:modelValue", a), u();
    };
    return U(() => {
      window.removeEventListener("mousedown", u);
    }), (a, e) => (d(), w(z, {
      class: "currency-selector",
      ref_key: "currencySelector",
      ref: t,
      horizontal: "center"
    }, {
      default: k(() => {
        var r;
        return [
          y(q, {
            class: "currency-button",
            onClick: e[0] || (e[0] = (g) => f()),
            onFocus: e[1] || (e[1] = (g) => f()),
            onBlur: e[2] || (e[2] = (g) => u()),
            label: (r = o.value) == null ? void 0 : r.symbol,
            mood: "neutral",
            outline: "",
            size: "large-3",
            shape: "round"
          }, null, 8, ["label"]),
          y(D, {
            class: "currency-menu no-spacing",
            onSelect: e[3] || (e[3] = (g) => b(g)),
            items: c.value,
            visible: l.value
          }, null, 8, ["items", "visible"])
        ];
      }),
      _: 1
    }, 512));
  }
});
const qe = /* @__PURE__ */ S(ie, [["__scopeId", "data-v-91f9ede2"]]), de = /* @__PURE__ */ $({
  __name: "Form",
  props: {
    fields: {},
    values: {}
  },
  setup(v) {
    const m = v, { fields: n } = B(m);
    return (s, p) => (d(), w(ae, {
      fields: i(n),
      values: s.values
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
        }, 1024)) : E("", !0),
        y(te, {
          "onUpdate:modelValue": (u) => s.$emit(`update:${t}`, u),
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
        }, 1024)) : E("", !0),
        y(le, {
          "onUpdate:modelValue": (o) => s.$emit(`update:${t}`, o),
          modelValue: c
        }, null, 8, ["onUpdate:modelValue", "modelValue"])
      ]),
      _: 1
    }, 8, ["fields", "values"]));
  }
});
const He = /* @__PURE__ */ S(de, [["__scopeId", "data-v-39d44946"]]), ve = /* @__PURE__ */ $({
  __name: "Header",
  setup(v) {
    const m = () => {
      document.documentElement.scrollTo({
        left: 0,
        top: 0
      });
    };
    return (n, s) => (d(), w(z, {
      class: "header",
      vertical: "center"
    }, {
      default: k(() => [
        A("div", {
          class: "title",
          onClick: s[0] || (s[0] = () => m())
        }, [
          y(C, { size: "large-2" }, {
            default: k(() => [
              j(n.$slots, "title", {}, void 0, !0)
            ]),
            _: 3
          })
        ]),
        y(se),
        j(n.$slots, "end", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
});
const je = /* @__PURE__ */ S(ve, [["__scopeId", "data-v-b7acc042"]]), me = /* @__PURE__ */ $({
  __name: "LocaleSelector",
  props: {
    locales: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(v, { emit: m }) {
    const n = v, { locales: s, modelValue: p } = B(n), t = M(), l = M(!1), c = _(
      () => s.value.reduce((a, e) => (a[e.code] = {
        icon: e.icon,
        iconBackend: "flag-icons"
      }, a), {})
    ), o = _(
      () => s.value.find((a) => a.code === p.value).icon
    ), u = (a) => {
      var e, r;
      a && ((e = t.value) != null && e.$el.contains(a.target)) || (l.value = !1, (r = t.value) == null || r.$el.querySelector(".button").blur(), window.removeEventListener("mousedown", u));
    }, f = () => {
      l.value = !0, window.addEventListener("mousedown", u);
    }, b = (a) => {
      m("update:modelValue", a), u();
    };
    return U(() => {
      window.removeEventListener("mousedown", u);
    }), (a, e) => (d(), w(z, {
      class: "locale-selector",
      ref_key: "localeSelector",
      ref: t,
      horizontal: "center"
    }, {
      default: k(() => [
        y(q, {
          class: "locale-button",
          onClick: e[0] || (e[0] = (r) => f()),
          onFocus: e[1] || (e[1] = (r) => f()),
          onBlur: e[2] || (e[2] = (r) => u()),
          icon: o.value,
          iconBackend: "flag-icons-square",
          mood: "neutral",
          outline: "",
          size: "large-3",
          shape: "round"
        }, null, 8, ["icon"]),
        y(D, {
          class: "locale-menu no-spacing",
          onSelect: e[3] || (e[3] = (r) => b(r)),
          items: c.value,
          visible: l.value
        }, null, 8, ["items", "visible"])
      ]),
      _: 1
    }, 512));
  }
});
const Ge = /* @__PURE__ */ S(me, [["__scopeId", "data-v-d44715a8"]]);
class O extends re {
  getMessage(m) {
    return `Invalid menu item level ${m}`;
  }
}
const _e = /* @__PURE__ */ $({
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
    const m = v, { active: n, icon: s, iconBackend: p, label: t, level: l, withSublevel: c } = B(m), o = _(
      () => L(l.value).when(1, () => "large-3").whenAny([2, 3], () => "large").or((a) => {
        throw new O(a);
      }).done
    ), u = _(() => n.value ? "elevated-2" : "elevated"), f = _(
      () => L(l.value).when(1, () => "large").whenAny([2, 3], () => "normal").or((a) => {
        throw new O(a);
      }).done
    ), b = _(() => ({
      active: n.value,
      [`level-${l.value}`]: !0,
      "with-sublevel": c.value
    }));
    return (a, e) => (d(), w(K(a.link ? "a" : "div"), {
      class: R(["menu-item", b.value]),
      href: a.link ? a.link : void 0
    }, {
      default: k(() => [
        i(s) ? (d(), w(G, {
          key: 0,
          class: "item-icon",
          backend: i(p),
          elevation: u.value,
          size: o.value,
          value: i(s)
        }, null, 8, ["backend", "elevation", "size", "value"])) : E("", !0),
        y(C, {
          elevation: u.value,
          size: f.value
        }, {
          default: k(() => [
            V(x(i(t)), 1)
          ]),
          _: 1
        }, 8, ["elevation", "size"]),
        i(c) ? (d(), w(G, {
          key: 1,
          class: "chevron",
          elevation: u.value,
          size: "large-3",
          value: "chevron-right"
        }, null, 8, ["elevation"])) : E("", !0)
      ]),
      _: 1
    }, 8, ["class", "href"]));
  }
});
const P = /* @__PURE__ */ S(_e, [["__scopeId", "data-v-78a874f4"]]), pe = /* @__PURE__ */ $({
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
    const m = v, { icon: n, iconBackend: s, items: p, label: t, level: l, prefix: c, router: o, translator: u } = B(m), f = _(() => o.value.currentRoute.value.meta.menuItem), b = _(() => Object.entries(p.value).some(([r, g]) => "route" in g && `${c.value}${r}` === f.value)), a = _(() => l.value + 1), e = _(() => l.value + 1);
    return (r, g) => {
      const J = Q("MenuSubsection", !0);
      return d(), I(T, null, [
        i(t) ? (d(), I(T, { key: 0 }, [
          i(l) === 0 ? (d(), w(C, {
            key: 0,
            class: "section",
            elevation: "elevated"
          }, {
            default: k(() => [
              V(x(i(u)(i(t)).toUpperCase()), 1)
            ]),
            _: 1
          })) : (d(), w(P, {
            key: 1,
            active: b.value,
            icon: i(n),
            iconBackend: i(s),
            label: i(t),
            level: i(l),
            withSublevel: ""
          }, null, 8, ["active", "icon", "iconBackend", "label", "level"]))
        ], 64)) : E("", !0),
        (d(!0), I(T, null, N(i(p), (h, H) => (d(), I(T, null, [
          "items" in h ? (d(), w(J, {
            key: 0,
            icon: h.icon,
            iconBackend: h.iconBackend,
            items: h.items,
            level: e.value,
            label: h.label ? i(u)(h.label) : "",
            prefix: `${i(c)}${H}.`,
            router: i(o),
            translator: i(u)
          }, null, 8, ["icon", "iconBackend", "items", "level", "label", "prefix", "router", "translator"])) : (d(), w(P, {
            key: 1,
            onClick: W(() => i(o).push(h.route), ["prevent"]),
            active: `${i(c)}${H}` === f.value,
            icon: h.icon,
            iconBackend: h.iconBackend,
            label: i(u)(h.label),
            level: a.value,
            link: i(o).resolve({ name: h.route.name }).href
          }, null, 8, ["onClick", "active", "icon", "iconBackend", "label", "level", "link"]))
        ], 64))), 256))
      ], 64);
    };
  }
});
const fe = /* @__PURE__ */ S(pe, [["__scopeId", "data-v-e2b93ab7"]]), be = (v) => (X("data-v-00bfa0a4"), v = v(), Y(), v), we = { class: "side-menu" }, ke = { class: "items" }, ye = /* @__PURE__ */ be(() => /* @__PURE__ */ A("div", { class: "pixel" }, " ", -1)), ge = /* @__PURE__ */ $({
  __name: "SideMenu",
  props: {
    brandText: {},
    menu: {},
    router: {},
    translator: { type: Function }
  },
  setup(v) {
    const m = v, { router: n } = B(m);
    return (s, p) => (d(), I("div", we, [
      A("div", {
        class: "brand",
        onClick: p[0] || (p[0] = (t) => i(n).push({ name: "default" }))
      }, [
        y(ne),
        y(ue, {
          elevation: "elevated-3",
          size: "large-4"
        }, {
          default: k(() => [
            V(x(s.brandText), 1)
          ]),
          _: 1
        })
      ]),
      A("div", ke, [
        (d(!0), I(T, null, N(s.menu, (t, l) => (d(), w(fe, {
          icon: t.icon,
          iconBackend: t.iconBackend,
          items: t.items,
          label: t.label ?? "",
          prefix: `${l}.`,
          router: i(n),
          translator: s.translator
        }, null, 8, ["icon", "iconBackend", "items", "label", "prefix", "router", "translator"]))), 256)),
        ye
      ])
    ]));
  }
});
const Oe = /* @__PURE__ */ S(ge, [["__scopeId", "data-v-00bfa0a4"]]), he = /* @__PURE__ */ $({
  __name: "ThemeToggle",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(v, { emit: m }) {
    const n = v, { modelValue: s } = B(n), p = _(
      () => L(s.value).when("dark", () => "moon").when("light", () => "sun").or((c) => {
        throw new F(c);
      }).done
    ), t = _(
      () => L(s.value).when("dark", () => "accent").when("light", () => "important").or((c) => {
        throw new F(c);
      }).done
    ), l = () => {
      const c = L(s.value).when("dark", () => "light").when("light", () => "dark").or((o) => {
        throw new F(o);
      }).done;
      m("update:modelValue", c);
    };
    return (c, o) => (d(), w(z, { class: "theme-toggle" }, {
      default: k(() => [
        y(q, {
          onClick: o[0] || (o[0] = () => l()),
          icon: p.value,
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
const Pe = /* @__PURE__ */ S(he, [["__scopeId", "data-v-8832a6ee"]]), $e = { class: "toasts" }, Se = /* @__PURE__ */ $({
  __name: "Toasts",
  props: {
    toasts: {}
  },
  emits: ["removeToast"],
  setup(v, { emit: m }) {
    const n = v, { toasts: s } = B(n), p = _(
      () => Object.entries(s.value).reverse().map(([o, u]) => [Number(o), u])
    ), t = M([]), l = M([]), c = (o) => {
      t.value.includes(o) || (t.value.push(o), clearTimeout(l.value[o]), delete l.value[o], window.setTimeout(() => {
        m("removeToast", o), t.value = t.value.filter((u) => u !== o);
      }, 500));
    };
    return Z(
      s,
      () => {
        for (const o of s.value)
          o.id in l.value || (l.value[o.id] = window.setTimeout(() => {
            c(o.id);
          }, 5e3));
      },
      { deep: !0, immediate: !0 }
    ), (o, u) => (d(), I("div", $e, [
      (d(!0), I(T, null, N(p.value, ([f, b]) => (d(), w(oe, {
        onClick: () => c(f),
        class: R({ "fade-out": t.value.includes(b.id) }),
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
const Re = /* @__PURE__ */ S(Se, [["__scopeId", "data-v-3d45b4ea"]]);
export {
  De as AccountMenu,
  qe as CurrencySelector,
  He as Form,
  je as Header,
  Ge as LocaleSelector,
  Oe as SideMenu,
  P as SideMenuItem,
  fe as SideMenuSubsection,
  Pe as ThemeToggle,
  Re as Toasts
};
