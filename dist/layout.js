import { defineComponent as y, toRefs as I, computed as m, ref as C, onUnmounted as F, openBlock as r, createBlock as b, withCtx as f, createVNode as w, unref as s, createTextVNode as x, toDisplayString as V, createCommentVNode as z, createElementVNode as A, renderSlot as G, createElementBlock as B, normalizeClass as J, resolveComponent as K, Fragment as L, renderList as q, pushScopeId as Q, popScopeId as W } from "vue";
import { A as T, I as P } from "./Icon-a62eb151.js";
import { A as X, L as Y } from "./Logo-008c186d.js";
import { P as N, B as D } from "./PopoverMenu-e192d7d1.js";
import { _ as S } from "./_plugin-vue_export-helper-dad06003.js";
import { D as Z, I as ee } from "./Input-07c967f5.js";
import { G as ne } from "./Form-0beea48d.js";
import { I as $ } from "./Info-54758b60.js";
import { Separator as oe } from "./marker.js";
import { B as te } from "./BrandText-d1a46d42.js";
import { BaseError as le } from "./utils/error.js";
import { m as E } from "./match-b8889c93.js";
import { U } from "./undefined_theme-2b4e75dd.js";
import "./Popover-1f546f1f.js";
const ae = /* @__PURE__ */ y({
  __name: "AccountMenu",
  props: {
    avatar: {},
    menuItems: {}
  },
  setup(i) {
    const v = i, { avatar: e, menuItems: t } = I(v), _ = m(
      () => e && e.value && "icon" in e.value ? e.value.icon : void 0
    ), a = m(
      () => e && e.value && "iconBackend" in e.value ? e.value.iconBackend : void 0
    ), l = m(
      () => e && e.value && "label" in e.value ? e.value.label : void 0
    ), c = m(
      () => e && e.value && "source" in e.value ? e.value.source : void 0
    ), d = C(), u = C(!1), k = (o) => {
      var p;
      o && ((p = d.value) != null && p.$el.contains(o.target)) || (u.value = !1, window.removeEventListener("mousedown", k));
    }, g = () => {
      u.value = !0, window.addEventListener("mousedown", k);
    }, n = (o) => {
      t.value[o].handler(), k();
    };
    return F(() => {
      window.removeEventListener("mousedown", k);
    }), (o, p) => (r(), b(T, {
      class: "account-menu",
      ref_key: "accountMenu",
      ref: d
    }, {
      default: f(() => [
        w(X, {
          onClick: p[0] || (p[0] = () => g()),
          icon: _.value,
          iconBackend: a.value,
          label: l.value,
          source: c.value
        }, null, 8, ["icon", "iconBackend", "label", "source"]),
        w(N, {
          class: "account-menu",
          onSelect: p[1] || (p[1] = (M) => n(M)),
          items: s(t),
          visible: u.value
        }, null, 8, ["items", "visible"])
      ]),
      _: 1
    }, 512));
  }
});
const ze = /* @__PURE__ */ S(ae, [["__scopeId", "data-v-1e965d9d"]]), se = /* @__PURE__ */ y({
  __name: "CurrencySelector",
  props: {
    currencies: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(i, { emit: v }) {
    const e = i, { currencies: t, modelValue: _ } = I(e), a = C(), l = C(!1), c = m(
      () => t.value.reduce((n, o) => (n[o.code] = {
        label: o.label
      }, n), {}) ?? {}
    ), d = m(
      () => t.value.find(({ code: n }) => _.value === n)
    ), u = (n) => {
      var o;
      n && ((o = a.value) != null && o.$el.contains(n.target)) || (console.log("hi"), l.value = !1, window.removeEventListener("mousedown", u));
    }, k = () => {
      l.value = !0, window.addEventListener("mousedown", u);
    }, g = (n) => {
      v("update:modelValue", n), u();
    };
    return F(() => {
      window.removeEventListener("mousedown", u);
    }), (n, o) => (r(), b(T, {
      class: "currency-selector",
      ref_key: "currencySelector",
      ref: a,
      horizontal: "center"
    }, {
      default: f(() => {
        var p;
        return [
          w(D, {
            class: "currency-button",
            onClick: o[0] || (o[0] = () => k()),
            label: (p = d.value) == null ? void 0 : p.symbol,
            mood: "neutral",
            outline: "",
            size: "large-3",
            shape: "round"
          }, null, 8, ["label"]),
          w(N, {
            class: "currency-menu no-spacing",
            onSelect: o[1] || (o[1] = (M) => g(M)),
            items: c.value,
            visible: l.value
          }, null, 8, ["items", "visible"])
        ];
      }),
      _: 1
    }, 512));
  }
});
const Te = /* @__PURE__ */ S(se, [["__scopeId", "data-v-6ae04671"]]), ue = /* @__PURE__ */ y({
  __name: "Form",
  props: {
    fields: {},
    values: {}
  },
  setup(i) {
    const v = i, { fields: e } = I(v);
    return (t, _) => (r(), b(ne, {
      fields: s(e),
      values: t.values
    }, {
      "field(dropdown)": f(({ code: a, label: l, options: c, value: d }) => [
        l ? (r(), b($, {
          key: 0,
          class: "label"
        }, {
          default: f(() => [
            x(V(l), 1)
          ]),
          _: 2
        }, 1024)) : z("", !0),
        w(Z, {
          "onUpdate:modelValue": (u) => t.$emit(`update:${a}`, u),
          items: c.items,
          modelValue: d
        }, null, 8, ["onUpdate:modelValue", "items", "modelValue"])
      ]),
      "field(info)": f(({ label: a }) => [
        w($, null, {
          default: f(() => [
            x(V(a), 1)
          ]),
          _: 2
        }, 1024)
      ]),
      "field(input)": f(({ code: a, label: l, value: c }) => [
        l ? (r(), b($, {
          key: 0,
          class: "label"
        }, {
          default: f(() => [
            x(V(l), 1)
          ]),
          _: 2
        }, 1024)) : z("", !0),
        w(ee, {
          "onUpdate:modelValue": (d) => t.$emit(`update:${a}`, d),
          modelValue: c
        }, null, 8, ["onUpdate:modelValue", "modelValue"])
      ]),
      _: 1
    }, 8, ["fields", "values"]));
  }
});
const Ae = /* @__PURE__ */ S(ue, [["__scopeId", "data-v-39d44946"]]), ce = /* @__PURE__ */ y({
  __name: "Header",
  setup(i) {
    const v = () => {
      document.documentElement.scrollTo({
        left: 0,
        top: 0
      });
    };
    return (e, t) => (r(), b(T, {
      class: "header",
      vertical: "center"
    }, {
      default: f(() => [
        A("div", {
          class: "title",
          onClick: t[0] || (t[0] = () => v())
        }, [
          w($, { size: "large-2" }, {
            default: f(() => [
              G(e.$slots, "title", {}, void 0, !0)
            ]),
            _: 3
          })
        ]),
        w(oe),
        G(e.$slots, "end", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
});
const Ue = /* @__PURE__ */ S(ce, [["__scopeId", "data-v-71be6924"]]), re = /* @__PURE__ */ y({
  __name: "LocaleSelector",
  props: {
    locales: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(i, { emit: v }) {
    const e = i, { locales: t, modelValue: _ } = I(e), a = C(), l = C(!1), c = m(
      () => t.value.reduce((n, o) => (n[o.code] = {
        icon: o.icon,
        iconBackend: "flag-icons"
      }, n), {})
    ), d = m(
      () => t.value.find((n) => n.code === _.value).icon
    ), u = (n) => {
      var o;
      n && ((o = a.value) != null && o.$el.contains(n.target)) || (l.value = !1, window.removeEventListener("mousedown", u));
    }, k = () => {
      l.value = !0, window.addEventListener("mousedown", u);
    }, g = (n) => {
      v("update:modelValue", n), u();
    };
    return F(() => {
      window.removeEventListener("mousedown", u);
    }), (n, o) => (r(), b(T, {
      class: "locale-selector",
      ref_key: "localeSelector",
      ref: a,
      horizontal: "center"
    }, {
      default: f(() => [
        w(D, {
          class: "locale-button",
          onClick: o[0] || (o[0] = () => k()),
          icon: d.value,
          iconBackend: "flag-icons-square",
          mood: "neutral",
          outline: "",
          size: "large-3",
          shape: "round"
        }, null, 8, ["icon"]),
        w(N, {
          class: "locale-menu no-spacing",
          onSelect: o[1] || (o[1] = (p) => g(p)),
          items: c.value,
          visible: l.value
        }, null, 8, ["items", "visible"])
      ]),
      _: 1
    }, 512));
  }
});
const Fe = /* @__PURE__ */ S(re, [["__scopeId", "data-v-bee84f7a"]]);
class R extends le {
  getMessage(v) {
    return `Invalid menu item level ${v}`;
  }
}
const ie = /* @__PURE__ */ y({
  __name: "MenuItem",
  props: {
    active: { type: Boolean, default: !1 },
    icon: {},
    iconBackend: {},
    label: {},
    level: { default: 1 },
    withSublevel: { type: Boolean, default: !1 }
  },
  setup(i) {
    const v = i, { active: e, icon: t, iconBackend: _, label: a, level: l, withSublevel: c } = I(v), d = m(
      () => E(l.value).when(1, () => "large-3").whenAny([2, 3], () => "large").or((n) => {
        throw new R(n);
      }).done
    ), u = m(() => e.value ? "elevated-2" : "elevated"), k = m(
      () => E(l.value).when(1, () => "large").whenAny([2, 3], () => "normal").or((n) => {
        throw new R(n);
      }).done
    ), g = m(() => ({
      active: e.value,
      [`level-${l.value}`]: !0,
      "with-sublevel": c.value
    }));
    return (n, o) => (r(), B("div", {
      class: J(["menu-item", g.value])
    }, [
      s(t) ? (r(), b(P, {
        key: 0,
        class: "item-icon",
        backend: s(_),
        elevation: u.value,
        size: d.value,
        value: s(t)
      }, null, 8, ["backend", "elevation", "size", "value"])) : z("", !0),
      w($, {
        elevation: u.value,
        size: k.value
      }, {
        default: f(() => [
          x(V(s(a)), 1)
        ]),
        _: 1
      }, 8, ["elevation", "size"]),
      s(c) ? (r(), b(P, {
        key: 1,
        class: "chevron",
        elevation: u.value,
        size: "large-3",
        value: "chevron-right"
      }, null, 8, ["elevation"])) : z("", !0)
    ], 2));
  }
});
const j = /* @__PURE__ */ S(ie, [["__scopeId", "data-v-fb1cb1dd"]]), de = /* @__PURE__ */ y({
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
  setup(i) {
    const v = i, { icon: e, iconBackend: t, items: _, label: a, level: l, prefix: c, router: d, translator: u } = I(v), k = m(() => d.value.currentRoute.value.meta.menuItem), g = m(() => Object.entries(_.value).some(([p, M]) => "route" in M && `${c.value}${p}` === k.value)), n = m(() => l.value + 1), o = m(() => l.value + 1);
    return (p, M) => {
      const O = K("MenuSubsection", !0);
      return r(), B(L, null, [
        s(a) ? (r(), B(L, { key: 0 }, [
          s(l) === 0 ? (r(), b($, {
            key: 0,
            class: "section",
            elevation: "elevated"
          }, {
            default: f(() => [
              x(V(s(u)(s(a)).toUpperCase()), 1)
            ]),
            _: 1
          })) : (r(), b(j, {
            key: 1,
            active: g.value,
            icon: s(e),
            iconBackend: s(t),
            label: s(a),
            level: s(l),
            withSublevel: ""
          }, null, 8, ["active", "icon", "iconBackend", "label", "level"]))
        ], 64)) : z("", !0),
        (r(!0), B(L, null, q(s(_), (h, H) => (r(), B(L, null, [
          "items" in h ? (r(), b(O, {
            key: 0,
            icon: h.icon,
            iconBackend: h.iconBackend,
            items: h.items,
            level: o.value,
            label: h.label ? s(u)(h.label) : "",
            prefix: `${s(c)}${H}.`,
            router: s(d),
            translator: s(u)
          }, null, 8, ["icon", "iconBackend", "items", "level", "label", "prefix", "router", "translator"])) : (r(), b(j, {
            key: 1,
            onClick: () => s(d).push(h.route),
            active: `${s(c)}${H}` === k.value,
            icon: h.icon,
            iconBackend: h.iconBackend,
            label: s(u)(h.label),
            level: n.value
          }, null, 8, ["onClick", "active", "icon", "iconBackend", "label", "level"]))
        ], 64))), 256))
      ], 64);
    };
  }
});
const ve = /* @__PURE__ */ S(de, [["__scopeId", "data-v-284e669f"]]), me = (i) => (Q("data-v-00bfa0a4"), i = i(), W(), i), _e = { class: "side-menu" }, pe = { class: "items" }, fe = /* @__PURE__ */ me(() => /* @__PURE__ */ A("div", { class: "pixel" }, " ", -1)), be = /* @__PURE__ */ y({
  __name: "SideMenu",
  props: {
    brandText: {},
    menu: {},
    router: {},
    translator: { type: Function }
  },
  setup(i) {
    const v = i, { router: e } = I(v);
    return (t, _) => (r(), B("div", _e, [
      A("div", {
        class: "brand",
        onClick: _[0] || (_[0] = (a) => s(e).push({ name: "default" }))
      }, [
        w(Y),
        w(te, {
          elevation: "elevated-3",
          size: "large-4"
        }, {
          default: f(() => [
            x(V(t.brandText), 1)
          ]),
          _: 1
        })
      ]),
      A("div", pe, [
        (r(!0), B(L, null, q(t.menu, (a, l) => (r(), b(ve, {
          icon: a.icon,
          iconBackend: a.iconBackend,
          items: a.items,
          label: a.label ?? "",
          prefix: `${l}.`,
          router: s(e),
          translator: t.translator
        }, null, 8, ["icon", "iconBackend", "items", "label", "prefix", "router", "translator"]))), 256)),
        fe
      ])
    ]));
  }
});
const Ne = /* @__PURE__ */ S(be, [["__scopeId", "data-v-00bfa0a4"]]), we = /* @__PURE__ */ y({
  __name: "ThemeToggle",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(i, { emit: v }) {
    const e = i, { modelValue: t } = I(e), _ = m(
      () => E(t.value).when("dark", () => "moon").when("light", () => "sun").or((c) => {
        throw new U(c);
      }).done
    ), a = m(
      () => E(t.value).when("dark", () => "accent").when("light", () => "important").or((c) => {
        throw new U(c);
      }).done
    ), l = () => {
      const c = E(t.value).when("dark", () => "light").when("light", () => "dark").or((d) => {
        throw new U(d);
      }).done;
      v("update:modelValue", c);
    };
    return (c, d) => (r(), b(T, { class: "theme-toggle" }, {
      default: f(() => [
        w(D, {
          onClick: d[0] || (d[0] = () => l()),
          icon: _.value,
          mood: a.value,
          outline: "",
          size: "large-2",
          shape: "round"
        }, null, 8, ["icon", "mood"])
      ]),
      _: 1
    }));
  }
});
const De = /* @__PURE__ */ S(we, [["__scopeId", "data-v-2d6e4878"]]);
export {
  ze as AccountMenu,
  Te as CurrencySelector,
  Ae as Form,
  Ue as Header,
  Fe as LocaleSelector,
  Ne as SideMenu,
  j as SideMenuItem,
  ve as SideMenuSubsection,
  De as ThemeToggle
};
