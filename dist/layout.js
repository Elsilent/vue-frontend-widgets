import { defineComponent as y, toRefs as B, computed as m, ref as $, onUnmounted as F, openBlock as i, createBlock as f, withCtx as k, createVNode as h, unref as r, createTextVNode as T, toDisplayString as V, createCommentVNode as E, createElementVNode as A, renderSlot as G, createElementBlock as I, normalizeClass as q, resolveComponent as K, Fragment as M, renderList as N, pushScopeId as Q, popScopeId as W, watch as X } from "vue";
import { A as z, I as O } from "./Icon-8f2ed8ba.js";
import { A as Y, L as Z } from "./Logo-d60ece81.js";
import { P as D, B as H, T as ee } from "./Toast-67e6175c.js";
import { _ as S } from "./_plugin-vue_export-helper-dad06003.js";
import { D as ne, I as oe } from "./Input-7e9b7edc.js";
import { G as te } from "./Form-f36966a3.js";
import { I as C } from "./Info-54758b60.js";
import { Separator as le } from "./marker.js";
import { B as ae } from "./BrandText-d1a46d42.js";
import { BaseError as se } from "./utils/error.js";
import { m as L } from "./match-b8889c93.js";
import { U } from "./undefined_theme-2b4e75dd.js";
import "./Popover-38d3223e.js";
const ue = /* @__PURE__ */ y({
  __name: "AccountMenu",
  props: {
    avatar: {},
    menuItems: {}
  },
  setup(d) {
    const v = d, { avatar: e, menuItems: l } = B(v), _ = m(
      () => e && e.value && "icon" in e.value ? e.value.icon : void 0
    ), o = m(
      () => e && e.value && "iconBackend" in e.value ? e.value.iconBackend : void 0
    ), t = m(
      () => e && e.value && "label" in e.value ? e.value.label : void 0
    ), c = m(
      () => e && e.value && "source" in e.value ? e.value.source : void 0
    ), n = $(), u = $(!1), b = (s) => {
      var w;
      s && ((w = n.value) != null && w.$el.contains(s.target)) || (u.value = !1, window.removeEventListener("mousedown", b));
    }, p = () => {
      u.value = !0, window.addEventListener("mousedown", b);
    }, a = (s) => {
      l.value[s].handler(), b();
    };
    return F(() => {
      window.removeEventListener("mousedown", b);
    }), (s, w) => (i(), f(z, {
      class: "account-menu",
      ref_key: "accountMenu",
      ref: n
    }, {
      default: k(() => [
        h(Y, {
          onClick: w[0] || (w[0] = () => p()),
          icon: _.value,
          iconBackend: o.value,
          label: t.value,
          source: c.value
        }, null, 8, ["icon", "iconBackend", "label", "source"]),
        h(D, {
          class: "account-menu",
          onSelect: w[1] || (w[1] = (x) => a(x)),
          items: r(l),
          visible: u.value
        }, null, 8, ["items", "visible"])
      ]),
      _: 1
    }, 512));
  }
});
const Fe = /* @__PURE__ */ S(ue, [["__scopeId", "data-v-1e965d9d"]]), ce = /* @__PURE__ */ y({
  __name: "CurrencySelector",
  props: {
    currencies: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(d, { emit: v }) {
    const e = d, { currencies: l, modelValue: _ } = B(e), o = $(), t = $(!1), c = m(
      () => l.value.reduce((a, s) => (a[s.code] = {
        label: s.label
      }, a), {}) ?? {}
    ), n = m(
      () => l.value.find(({ code: a }) => _.value === a)
    ), u = (a) => {
      var s;
      a && ((s = o.value) != null && s.$el.contains(a.target)) || (console.log("hi"), t.value = !1, window.removeEventListener("mousedown", u));
    }, b = () => {
      t.value = !0, window.addEventListener("mousedown", u);
    }, p = (a) => {
      v("update:modelValue", a), u();
    };
    return F(() => {
      window.removeEventListener("mousedown", u);
    }), (a, s) => (i(), f(z, {
      class: "currency-selector",
      ref_key: "currencySelector",
      ref: o,
      horizontal: "center"
    }, {
      default: k(() => {
        var w;
        return [
          h(H, {
            class: "currency-button",
            onClick: s[0] || (s[0] = () => b()),
            label: (w = n.value) == null ? void 0 : w.symbol,
            mood: "neutral",
            outline: "",
            size: "large-3",
            shape: "round"
          }, null, 8, ["label"]),
          h(D, {
            class: "currency-menu no-spacing",
            onSelect: s[1] || (s[1] = (x) => p(x)),
            items: c.value,
            visible: t.value
          }, null, 8, ["items", "visible"])
        ];
      }),
      _: 1
    }, 512));
  }
});
const Ne = /* @__PURE__ */ S(ce, [["__scopeId", "data-v-6ae04671"]]), re = /* @__PURE__ */ y({
  __name: "Form",
  props: {
    fields: {},
    values: {}
  },
  setup(d) {
    const v = d, { fields: e } = B(v);
    return (l, _) => (i(), f(te, {
      fields: r(e),
      values: l.values
    }, {
      "field(dropdown)": k(({ code: o, label: t, options: c, value: n }) => [
        t ? (i(), f(C, {
          key: 0,
          class: "label"
        }, {
          default: k(() => [
            T(V(t), 1)
          ]),
          _: 2
        }, 1024)) : E("", !0),
        h(ne, {
          "onUpdate:modelValue": (u) => l.$emit(`update:${o}`, u),
          items: c.items,
          modelValue: n
        }, null, 8, ["onUpdate:modelValue", "items", "modelValue"])
      ]),
      "field(info)": k(({ label: o }) => [
        h(C, null, {
          default: k(() => [
            T(V(o), 1)
          ]),
          _: 2
        }, 1024)
      ]),
      "field(input)": k(({ code: o, label: t, value: c }) => [
        t ? (i(), f(C, {
          key: 0,
          class: "label"
        }, {
          default: k(() => [
            T(V(t), 1)
          ]),
          _: 2
        }, 1024)) : E("", !0),
        h(oe, {
          "onUpdate:modelValue": (n) => l.$emit(`update:${o}`, n),
          modelValue: c
        }, null, 8, ["onUpdate:modelValue", "modelValue"])
      ]),
      _: 1
    }, 8, ["fields", "values"]));
  }
});
const De = /* @__PURE__ */ S(re, [["__scopeId", "data-v-39d44946"]]), ie = /* @__PURE__ */ y({
  __name: "Header",
  setup(d) {
    const v = () => {
      document.documentElement.scrollTo({
        left: 0,
        top: 0
      });
    };
    return (e, l) => (i(), f(z, {
      class: "header",
      vertical: "center"
    }, {
      default: k(() => [
        A("div", {
          class: "title",
          onClick: l[0] || (l[0] = () => v())
        }, [
          h(C, { size: "large-2" }, {
            default: k(() => [
              G(e.$slots, "title", {}, void 0, !0)
            ]),
            _: 3
          })
        ]),
        h(le),
        G(e.$slots, "end", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
});
const He = /* @__PURE__ */ S(ie, [["__scopeId", "data-v-71be6924"]]), de = /* @__PURE__ */ y({
  __name: "LocaleSelector",
  props: {
    locales: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(d, { emit: v }) {
    const e = d, { locales: l, modelValue: _ } = B(e), o = $(), t = $(!1), c = m(
      () => l.value.reduce((a, s) => (a[s.code] = {
        icon: s.icon,
        iconBackend: "flag-icons"
      }, a), {})
    ), n = m(
      () => l.value.find((a) => a.code === _.value).icon
    ), u = (a) => {
      var s;
      a && ((s = o.value) != null && s.$el.contains(a.target)) || (t.value = !1, window.removeEventListener("mousedown", u));
    }, b = () => {
      t.value = !0, window.addEventListener("mousedown", u);
    }, p = (a) => {
      v("update:modelValue", a), u();
    };
    return F(() => {
      window.removeEventListener("mousedown", u);
    }), (a, s) => (i(), f(z, {
      class: "locale-selector",
      ref_key: "localeSelector",
      ref: o,
      horizontal: "center"
    }, {
      default: k(() => [
        h(H, {
          class: "locale-button",
          onClick: s[0] || (s[0] = () => b()),
          icon: n.value,
          iconBackend: "flag-icons-square",
          mood: "neutral",
          outline: "",
          size: "large-3",
          shape: "round"
        }, null, 8, ["icon"]),
        h(D, {
          class: "locale-menu no-spacing",
          onSelect: s[1] || (s[1] = (w) => p(w)),
          items: c.value,
          visible: t.value
        }, null, 8, ["items", "visible"])
      ]),
      _: 1
    }, 512));
  }
});
const je = /* @__PURE__ */ S(de, [["__scopeId", "data-v-bee84f7a"]]);
class P extends se {
  getMessage(v) {
    return `Invalid menu item level ${v}`;
  }
}
const ve = /* @__PURE__ */ y({
  __name: "MenuItem",
  props: {
    active: { type: Boolean, default: !1 },
    icon: {},
    iconBackend: {},
    label: {},
    level: { default: 1 },
    withSublevel: { type: Boolean, default: !1 }
  },
  setup(d) {
    const v = d, { active: e, icon: l, iconBackend: _, label: o, level: t, withSublevel: c } = B(v), n = m(
      () => L(t.value).when(1, () => "large-3").whenAny([2, 3], () => "large").or((a) => {
        throw new P(a);
      }).done
    ), u = m(() => e.value ? "elevated-2" : "elevated"), b = m(
      () => L(t.value).when(1, () => "large").whenAny([2, 3], () => "normal").or((a) => {
        throw new P(a);
      }).done
    ), p = m(() => ({
      active: e.value,
      [`level-${t.value}`]: !0,
      "with-sublevel": c.value
    }));
    return (a, s) => (i(), I("div", {
      class: q(["menu-item", p.value])
    }, [
      r(l) ? (i(), f(O, {
        key: 0,
        class: "item-icon",
        backend: r(_),
        elevation: u.value,
        size: n.value,
        value: r(l)
      }, null, 8, ["backend", "elevation", "size", "value"])) : E("", !0),
      h(C, {
        elevation: u.value,
        size: b.value
      }, {
        default: k(() => [
          T(V(r(o)), 1)
        ]),
        _: 1
      }, 8, ["elevation", "size"]),
      r(c) ? (i(), f(O, {
        key: 1,
        class: "chevron",
        elevation: u.value,
        size: "large-3",
        value: "chevron-right"
      }, null, 8, ["elevation"])) : E("", !0)
    ], 2));
  }
});
const R = /* @__PURE__ */ S(ve, [["__scopeId", "data-v-fb1cb1dd"]]), me = /* @__PURE__ */ y({
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
  setup(d) {
    const v = d, { icon: e, iconBackend: l, items: _, label: o, level: t, prefix: c, router: n, translator: u } = B(v), b = m(() => n.value.currentRoute.value.meta.menuItem), p = m(() => Object.entries(_.value).some(([w, x]) => "route" in x && `${c.value}${w}` === b.value)), a = m(() => t.value + 1), s = m(() => t.value + 1);
    return (w, x) => {
      const J = K("MenuSubsection", !0);
      return i(), I(M, null, [
        r(o) ? (i(), I(M, { key: 0 }, [
          r(t) === 0 ? (i(), f(C, {
            key: 0,
            class: "section",
            elevation: "elevated"
          }, {
            default: k(() => [
              T(V(r(u)(r(o)).toUpperCase()), 1)
            ]),
            _: 1
          })) : (i(), f(R, {
            key: 1,
            active: p.value,
            icon: r(e),
            iconBackend: r(l),
            label: r(o),
            level: r(t),
            withSublevel: ""
          }, null, 8, ["active", "icon", "iconBackend", "label", "level"]))
        ], 64)) : E("", !0),
        (i(!0), I(M, null, N(r(_), (g, j) => (i(), I(M, null, [
          "items" in g ? (i(), f(J, {
            key: 0,
            icon: g.icon,
            iconBackend: g.iconBackend,
            items: g.items,
            level: s.value,
            label: g.label ? r(u)(g.label) : "",
            prefix: `${r(c)}${j}.`,
            router: r(n),
            translator: r(u)
          }, null, 8, ["icon", "iconBackend", "items", "level", "label", "prefix", "router", "translator"])) : (i(), f(R, {
            key: 1,
            onClick: () => r(n).push(g.route),
            active: `${r(c)}${j}` === b.value,
            icon: g.icon,
            iconBackend: g.iconBackend,
            label: r(u)(g.label),
            level: a.value
          }, null, 8, ["onClick", "active", "icon", "iconBackend", "label", "level"]))
        ], 64))), 256))
      ], 64);
    };
  }
});
const _e = /* @__PURE__ */ S(me, [["__scopeId", "data-v-284e669f"]]), pe = (d) => (Q("data-v-00bfa0a4"), d = d(), W(), d), fe = { class: "side-menu" }, be = { class: "items" }, we = /* @__PURE__ */ pe(() => /* @__PURE__ */ A("div", { class: "pixel" }, " ", -1)), ke = /* @__PURE__ */ y({
  __name: "SideMenu",
  props: {
    brandText: {},
    menu: {},
    router: {},
    translator: { type: Function }
  },
  setup(d) {
    const v = d, { router: e } = B(v);
    return (l, _) => (i(), I("div", fe, [
      A("div", {
        class: "brand",
        onClick: _[0] || (_[0] = (o) => r(e).push({ name: "default" }))
      }, [
        h(Z),
        h(ae, {
          elevation: "elevated-3",
          size: "large-4"
        }, {
          default: k(() => [
            T(V(l.brandText), 1)
          ]),
          _: 1
        })
      ]),
      A("div", be, [
        (i(!0), I(M, null, N(l.menu, (o, t) => (i(), f(_e, {
          icon: o.icon,
          iconBackend: o.iconBackend,
          items: o.items,
          label: o.label ?? "",
          prefix: `${t}.`,
          router: r(e),
          translator: l.translator
        }, null, 8, ["icon", "iconBackend", "items", "label", "prefix", "router", "translator"]))), 256)),
        we
      ])
    ]));
  }
});
const Ge = /* @__PURE__ */ S(ke, [["__scopeId", "data-v-00bfa0a4"]]), he = /* @__PURE__ */ y({
  __name: "ThemeToggle",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(d, { emit: v }) {
    const e = d, { modelValue: l } = B(e), _ = m(
      () => L(l.value).when("dark", () => "moon").when("light", () => "sun").or((c) => {
        throw new U(c);
      }).done
    ), o = m(
      () => L(l.value).when("dark", () => "accent").when("light", () => "important").or((c) => {
        throw new U(c);
      }).done
    ), t = () => {
      const c = L(l.value).when("dark", () => "light").when("light", () => "dark").or((n) => {
        throw new U(n);
      }).done;
      v("update:modelValue", c);
    };
    return (c, n) => (i(), f(z, { class: "theme-toggle" }, {
      default: k(() => [
        h(H, {
          onClick: n[0] || (n[0] = () => t()),
          icon: _.value,
          mood: o.value,
          outline: "",
          size: "large-2",
          shape: "round"
        }, null, 8, ["icon", "mood"])
      ]),
      _: 1
    }));
  }
});
const Oe = /* @__PURE__ */ S(he, [["__scopeId", "data-v-2d6e4878"]]), ge = { class: "toasts" }, ye = /* @__PURE__ */ y({
  __name: "Toasts",
  props: {
    toasts: {}
  },
  emits: ["removeToast"],
  setup(d, { emit: v }) {
    const e = d, { toasts: l } = B(e), _ = m(
      () => Object.entries(l.value).reverse().map(([n, u]) => [Number(n), u])
    ), o = $([]), t = $([]), c = (n) => {
      o.value.includes(n) || (o.value.push(n), clearTimeout(t.value[n]), delete t.value[n], window.setTimeout(() => {
        v("removeToast", n), o.value = o.value.filter((u) => u !== n);
      }, 500));
    };
    return X(
      l,
      () => {
        for (const n of l.value)
          n.id in t.value || (t.value[n.id] = window.setTimeout(() => {
            c(n.id);
          }, 3e3));
      },
      { deep: !0, immediate: !0 }
    ), (n, u) => (i(), I("div", ge, [
      (i(!0), I(M, null, N(_.value, ([b, p]) => (i(), f(ee, {
        onClick: () => c(b),
        class: q({ "fade-out": o.value.includes(p.id) }),
        icon: p.icon,
        iconBackend: p.iconBackend,
        key: `toast-${p.id}`,
        mood: p.mood,
        message: p.message,
        title: p.title
      }, null, 8, ["onClick", "class", "icon", "iconBackend", "mood", "message", "title"]))), 128))
    ]));
  }
});
const Pe = /* @__PURE__ */ S(ye, [["__scopeId", "data-v-f321e502"]]);
export {
  Fe as AccountMenu,
  Ne as CurrencySelector,
  De as Form,
  He as Header,
  je as LocaleSelector,
  Ge as SideMenu,
  R as SideMenuItem,
  _e as SideMenuSubsection,
  Oe as ThemeToggle,
  Pe as Toasts
};
