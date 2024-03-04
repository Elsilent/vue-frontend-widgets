import { defineComponent as k, toRefs as I, computed as y, ref as S, onUnmounted as D, openBlock as r, createBlock as h, withCtx as f, createVNode as g, unref as s, createTextVNode as W, toDisplayString as E, createCommentVNode as C, renderSlot as N, pushScopeId as K, popScopeId as Q, createElementVNode as A, Transition as ee, createElementBlock as b, normalizeClass as H, resolveComponent as te, Fragment as M, renderList as R, watch as X } from "vue";
import { A as V, I as q } from "./Icon-8f2ed8ba.js";
import { A as ne, L as le } from "./Logo-1a75abfd.js";
import { P as G, T as oe } from "./Toast-b8a89e8e.js";
import { _ as x } from "./_plugin-vue_export-helper-dad06003.js";
import { B as O, D as ae, I as se } from "./Input-8e3a6104.js";
import { G as ue } from "./Form-f36966a3.js";
import { I as L } from "./Info-54758b60.js";
import { Separator as ie } from "./marker.js";
import { B as re } from "./BrandText-d1a46d42.js";
import { BaseError as ce } from "./utils/error.js";
import { m as P } from "./match-b8889c93.js";
import { U as F } from "./undefined_theme-2b4e75dd.js";
import "./Popover-38d3223e.js";
const de = /* @__PURE__ */ k({
  __name: "AccountMenu",
  props: {
    avatar: {},
    menuItems: {}
  },
  setup(c) {
    const v = c, { avatar: n, menuItems: a } = I(v), m = y(
      () => n && n.value && "icon" in n.value ? n.value.icon : void 0
    ), i = y(
      () => n && n.value && "iconBackend" in n.value ? n.value.iconBackend : void 0
    ), l = y(
      () => n && n.value && "label" in n.value ? n.value.label : void 0
    ), t = y(
      () => n && n.value && "source" in n.value ? n.value.source : void 0
    ), e = S(), o = S(!1), _ = (u) => {
      var w;
      u && ((w = e.value) != null && w.$el.contains(u.target)) || (o.value = !1, window.removeEventListener("mousedown", _));
    }, p = () => {
      o.value = !0, window.addEventListener("mousedown", _);
    }, d = (u) => {
      a.value[u].handler(), _();
    };
    return D(() => {
      window.removeEventListener("mousedown", _);
    }), (u, w) => (r(), h(V, {
      class: "account-menu",
      ref_key: "accountMenu",
      ref: e
    }, {
      default: f(() => [
        g(ne, {
          onClick: w[0] || (w[0] = () => p()),
          icon: m.value,
          iconBackend: i.value,
          label: l.value,
          source: t.value
        }, null, 8, ["icon", "iconBackend", "label", "source"]),
        g(G, {
          class: "account-menu",
          onSelect: w[1] || (w[1] = (z) => d(z)),
          items: s(a),
          visible: o.value
        }, null, 8, ["items", "visible"])
      ]),
      _: 1
    }, 512));
  }
});
const Ge = /* @__PURE__ */ x(de, [["__scopeId", "data-v-0acd5249"]]), ve = /* @__PURE__ */ k({
  __name: "CurrencySelector",
  props: {
    currencies: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(c, { emit: v }) {
    const n = c, { currencies: a, modelValue: m } = I(n), i = S(), l = S(!1), t = y(
      () => a.value.reduce((d, u) => (d[u.code] = {
        label: u.label
      }, d), {}) ?? {}
    ), e = y(
      () => a.value.find(({ code: d }) => m.value === d)
    ), o = (d) => {
      var u;
      d && ((u = i.value) != null && u.$el.contains(d.target)) || (console.log("hi"), l.value = !1, window.removeEventListener("mousedown", o));
    }, _ = () => {
      l.value = !0, window.addEventListener("mousedown", o);
    }, p = (d) => {
      v("update:modelValue", d), o();
    };
    return D(() => {
      window.removeEventListener("mousedown", o);
    }), (d, u) => (r(), h(V, {
      class: "currency-selector",
      ref_key: "currencySelector",
      ref: i,
      horizontal: "center"
    }, {
      default: f(() => {
        var w;
        return [
          g(O, {
            class: "currency-button",
            onClick: u[0] || (u[0] = () => _()),
            label: (w = e.value) == null ? void 0 : w.symbol,
            mood: "neutral",
            outline: "",
            size: "large-3",
            shape: "round"
          }, null, 8, ["label"]),
          g(G, {
            class: "currency-menu no-spacing",
            onSelect: u[1] || (u[1] = (z) => p(z)),
            items: t.value,
            visible: l.value
          }, null, 8, ["items", "visible"])
        ];
      }),
      _: 1
    }, 512));
  }
});
const Oe = /* @__PURE__ */ x(ve, [["__scopeId", "data-v-abdcf3a7"]]), me = /* @__PURE__ */ k({
  __name: "Form",
  props: {
    fields: {},
    values: {}
  },
  setup(c) {
    const v = c, { fields: n } = I(v);
    return (a, m) => (r(), h(ue, {
      fields: s(n),
      values: a.values
    }, {
      "field(dropdown)": f(({ code: i, label: l, options: t, value: e }) => [
        l ? (r(), h(L, {
          key: 0,
          class: "label"
        }, {
          default: f(() => [
            W(E(l), 1)
          ]),
          _: 2
        }, 1024)) : C("", !0),
        g(ae, {
          "onUpdate:modelValue": (o) => a.$emit(`update:${i}`, o),
          items: t.items,
          modelValue: e
        }, null, 8, ["onUpdate:modelValue", "items", "modelValue"])
      ]),
      "field(info)": f(({ label: i }) => [
        g(L, null, {
          default: f(() => [
            W(E(i), 1)
          ]),
          _: 2
        }, 1024)
      ]),
      "field(input)": f(({ code: i, label: l, value: t }) => [
        l ? (r(), h(L, {
          key: 0,
          class: "label"
        }, {
          default: f(() => [
            W(E(l), 1)
          ]),
          _: 2
        }, 1024)) : C("", !0),
        g(se, {
          "onUpdate:modelValue": (e) => a.$emit(`update:${i}`, e),
          modelValue: t
        }, null, 8, ["onUpdate:modelValue", "modelValue"])
      ]),
      _: 1
    }, 8, ["fields", "values"]));
  }
});
const je = /* @__PURE__ */ x(me, [["__scopeId", "data-v-39d44946"]]), pe = (c) => (K("data-v-85b21410"), c = c(), Q(), c), _e = /* @__PURE__ */ pe(() => /* @__PURE__ */ A("div", { class: "menu-button-lines" }, null, -1)), fe = /* @__PURE__ */ k({
  __name: "Header",
  emits: ["menuToggle"],
  setup(c, { emit: v }) {
    const n = () => {
      document.documentElement.scrollTo({
        left: 0,
        top: 0
      });
    };
    return (a, m) => (r(), h(V, {
      class: "header",
      vertical: "center"
    }, {
      default: f(() => [
        g(V, {
          class: "menu-button",
          onClick: m[0] || (m[0] = () => v("menuToggle")),
          vertical: "center"
        }, {
          default: f(() => [
            _e
          ]),
          _: 1
        }),
        g(V, {
          class: "title",
          onClick: m[1] || (m[1] = () => n()),
          vertical: "center"
        }, {
          default: f(() => [
            g(L, { size: "large-2" }, {
              default: f(() => [
                N(a.$slots, "title", {}, void 0, !0)
              ]),
              _: 3
            })
          ]),
          _: 3
        }),
        g(ie),
        N(a.$slots, "end", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
});
const Je = /* @__PURE__ */ x(fe, [["__scopeId", "data-v-85b21410"]]), he = /* @__PURE__ */ k({
  __name: "LocaleSelector",
  props: {
    locales: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(c, { emit: v }) {
    const n = c, { locales: a, modelValue: m } = I(n), i = S(), l = S(!1), t = y(
      () => a.value.reduce((d, u) => (d[u.code] = {
        icon: u.icon,
        iconBackend: "flag-icons"
      }, d), {})
    ), e = y(
      () => a.value.find((d) => d.code === m.value).icon
    ), o = (d) => {
      var u;
      d && ((u = i.value) != null && u.$el.contains(d.target)) || (l.value = !1, window.removeEventListener("mousedown", o));
    }, _ = () => {
      l.value = !0, window.addEventListener("mousedown", o);
    }, p = (d) => {
      v("update:modelValue", d), o();
    };
    return D(() => {
      window.removeEventListener("mousedown", o);
    }), (d, u) => (r(), h(V, {
      class: "locale-selector",
      ref_key: "localeSelector",
      ref: i,
      horizontal: "center"
    }, {
      default: f(() => [
        g(O, {
          class: "locale-button",
          onClick: u[0] || (u[0] = () => _()),
          icon: e.value,
          iconBackend: "flag-icons-square",
          mood: "neutral",
          outline: "",
          size: "large-3",
          shape: "round"
        }, null, 8, ["icon"]),
        g(G, {
          class: "locale-menu no-spacing",
          onSelect: u[1] || (u[1] = (w) => p(w)),
          items: t.value,
          visible: l.value
        }, null, 8, ["items", "visible"])
      ]),
      _: 1
    }, 512));
  }
});
const Ke = /* @__PURE__ */ x(he, [["__scopeId", "data-v-323ba705"]]), ye = {
  key: 0,
  class: "collapse"
}, ge = /* @__PURE__ */ k({
  __name: "Collapse",
  props: {
    expanded: { type: Boolean, default: !1 }
  },
  setup(c) {
    const v = c, { expanded: n } = I(v), a = (l) => {
      const t = l;
      t.style.height = "auto";
    }, m = (l) => {
      const t = l, e = getComputedStyle(t).width;
      t.style.width = e, t.style.position = "absolute", t.style.visibility = "hidden", t.style.height = "auto";
      const o = getComputedStyle(t).height;
      t.style.width = "", t.style.position = "", t.style.visibility = "", t.style.height = "0", getComputedStyle(t).height, requestAnimationFrame(() => {
        t.style.height = o;
      });
    }, i = (l) => {
      const t = l, e = getComputedStyle(t).height;
      t.style.height = e, getComputedStyle(t).height, requestAnimationFrame(() => {
        t.style.height = "0";
      });
    };
    return (l, t) => (r(), h(ee, {
      name: "collapse",
      onAfterEnter: a,
      onEnter: m,
      onLeave: i
    }, {
      default: f(() => [
        s(n) ? (r(), b("div", ye, [
          N(l.$slots, "default", {}, void 0, !0)
        ])) : C("", !0)
      ]),
      _: 3
    }));
  }
});
const we = /* @__PURE__ */ x(ge, [["__scopeId", "data-v-10c3004c"]]);
class j extends ce {
  getMessage(v) {
    return `Invalid menu item level ${v}`;
  }
}
const be = /* @__PURE__ */ k({
  __name: "MenuItem",
  props: {
    active: { type: Boolean, default: !1 },
    fullWidth: { type: Boolean },
    icon: {},
    iconBackend: {},
    label: {},
    level: { default: 1 },
    withSublevel: { type: Boolean, default: !1 }
  },
  setup(c) {
    const v = c, { active: n, fullWidth: a, icon: m, iconBackend: i, label: l, level: t, withSublevel: e } = I(v), o = y(
      () => P(t.value).when(1, () => "large-3").whenAny([2, 3], () => "large").or((u) => {
        throw new j(u);
      }).done
    ), _ = y(() => n.value ? "elevated-2" : "elevated"), p = y(
      () => P(t.value).when(1, () => "large").whenAny([2, 3], () => "normal").or((u) => {
        throw new j(u);
      }).done
    ), d = y(() => ({
      active: n.value,
      "full-width": a.value,
      [`level-${t.value}`]: !0,
      "with-sublevel": e.value
    }));
    return (u, w) => (r(), b("div", {
      class: H(["menu-item", d.value])
    }, [
      s(m) ? (r(), h(q, {
        key: 0,
        class: "item-icon",
        backend: s(i),
        elevation: _.value,
        size: o.value,
        value: s(m)
      }, null, 8, ["backend", "elevation", "size", "value"])) : C("", !0),
      s(a) && s(l) ? (r(), h(L, {
        key: 1,
        elevation: _.value,
        size: p.value
      }, {
        default: f(() => [
          W(E(s(l)), 1)
        ]),
        _: 1
      }, 8, ["elevation", "size"])) : C("", !0),
      s(a) && s(e) ? (r(), h(q, {
        key: 2,
        class: "chevron",
        elevation: _.value,
        size: "large-3",
        value: "chevron-right"
      }, null, 8, ["elevation"])) : C("", !0)
    ], 2));
  }
});
const J = /* @__PURE__ */ x(be, [["__scopeId", "data-v-a2af5406"]]), ke = /* @__PURE__ */ k({
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
  setup(c, { emit: v }) {
    const n = c, {
      expandedPrefix: a,
      icon: m,
      iconBackend: i,
      items: l,
      label: t,
      level: e,
      prefix: o,
      router: _,
      translator: p
    } = I(n), d = y(() => _.value.currentRoute.value.meta.menuItem), u = y(() => e.value + 1), w = y(() => e.value + 1), z = (B) => {
      v("update:expandedPrefix", o.value);
      const T = l.value[B];
      "items" in T || _.value.push(T.route);
    };
    return (B, T) => {
      const Y = te("MenuSubsection", !0);
      return r(), b(M, null, [
        s(t) ? (r(), b(M, { key: 0 }, [
          s(e) === 0 ? (r(), b(M, { key: 0 }, [
            B.fullWidth ? (r(), h(L, {
              key: 0,
              class: "section",
              elevation: "elevated"
            }, {
              default: f(() => [
                W(E(s(p)(s(t)).toUpperCase()), 1)
              ]),
              _: 1
            })) : (r(), h(q, {
              key: 1,
              class: "section-collapsed",
              elevation: "elevated",
              size: "large-3",
              value: "dots-horizontal-rounded"
            }))
          ], 64)) : (r(), h(J, {
            key: 1,
            onClick: T[0] || (T[0] = () => v("update:expandedPrefix", s(o))),
            active: s(a).startsWith(s(o)),
            fullWidth: B.fullWidth,
            icon: s(m),
            iconBackend: s(i),
            label: B.fullWidth ? s(t) : void 0,
            level: s(e),
            withSublevel: ""
          }, null, 8, ["active", "fullWidth", "icon", "iconBackend", "label", "level"]))
        ], 64)) : C("", !0),
        g(we, {
          expanded: s(e) === 0 || s(a).startsWith(s(o))
        }, {
          default: f(() => [
            (r(!0), b(M, null, R(s(l), ($, U) => (r(), b(M, null, [
              "items" in $ ? (r(), h(Y, {
                key: 0,
                "onUpdate:expandedPrefix": T[1] || (T[1] = (Z) => v("update:expandedPrefix", Z)),
                expandedPrefix: s(a),
                fullWidth: B.fullWidth,
                icon: $.icon,
                iconBackend: $.iconBackend,
                items: $.items,
                level: w.value,
                label: $.label ? s(p)($.label) : "",
                prefix: `${s(o)}${U}.`,
                router: s(_),
                translator: s(p)
              }, null, 8, ["expandedPrefix", "fullWidth", "icon", "iconBackend", "items", "level", "label", "prefix", "router", "translator"])) : B.fullWidth || s(e) === 0 ? (r(), h(J, {
                key: 1,
                onClick: () => z(U),
                active: `${s(o)}${U}` === d.value,
                fullWidth: B.fullWidth,
                icon: $.icon,
                iconBackend: $.iconBackend,
                label: B.fullWidth ? s(p)($.label) : void 0,
                level: u.value
              }, null, 8, ["onClick", "active", "fullWidth", "icon", "iconBackend", "label", "level"])) : C("", !0)
            ], 64))), 256))
          ]),
          _: 1
        }, 8, ["expanded"])
      ], 64);
    };
  }
});
const xe = /* @__PURE__ */ x(ke, [["__scopeId", "data-v-fd041c1e"]]), Se = (c) => (K("data-v-303139ca"), c = c(), Q(), c), Ie = { class: "items" }, Be = /* @__PURE__ */ Se(() => /* @__PURE__ */ A("div", { class: "pixel" }, " ", -1)), $e = /* @__PURE__ */ k({
  __name: "SideMenu",
  props: {
    brandText: {},
    fullWidth: { type: Boolean },
    menu: {},
    router: {},
    translator: { type: Function }
  },
  setup(c) {
    const v = c, n = S(""), a = S(!1), { fullWidth: m, router: i } = I(v), l = y(() => m.value || a.value);
    return X(i.value.currentRoute, (t) => {
      const e = t.meta.menuItem ?? "";
      n.value = e.substring(0, e.lastIndexOf(".") + 1);
    }, { immediate: !0 }), (t, e) => (r(), b("div", {
      class: H(["side-menu", { "full-width": l.value }]),
      onMouseenter: e[2] || (e[2] = (o) => a.value = !0),
      onMouseleave: e[3] || (e[3] = (o) => a.value = !1)
    }, [
      A("div", {
        class: "brand",
        onClick: e[0] || (e[0] = (o) => s(i).push({ name: "default" }))
      }, [
        g(le),
        g(re, {
          elevation: "elevated-3",
          size: "large-4"
        }, {
          default: f(() => [
            W(E(t.brandText), 1)
          ]),
          _: 1
        })
      ]),
      A("div", Ie, [
        (r(!0), b(M, null, R(t.menu, (o, _) => (r(), h(xe, {
          expandedPrefix: n.value,
          "onUpdate:expandedPrefix": e[1] || (e[1] = (p) => n.value = p),
          fullWidth: l.value,
          icon: o.icon,
          iconBackend: o.iconBackend,
          items: o.items,
          label: o.label ?? "",
          prefix: `${_}.`,
          router: s(i),
          translator: t.translator
        }, null, 8, ["expandedPrefix", "fullWidth", "icon", "iconBackend", "items", "label", "prefix", "router", "translator"]))), 256)),
        Be
      ])
    ], 34));
  }
});
const Qe = /* @__PURE__ */ x($e, [["__scopeId", "data-v-303139ca"]]), Ce = /* @__PURE__ */ k({
  __name: "ThemeToggle",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(c, { emit: v }) {
    const n = c, { modelValue: a } = I(n), m = y(
      () => P(a.value).when("dark", () => "moon").when("light", () => "sun").or((t) => {
        throw new F(t);
      }).done
    ), i = y(
      () => P(a.value).when("dark", () => "accent").when("light", () => "important").or((t) => {
        throw new F(t);
      }).done
    ), l = () => {
      const t = P(a.value).when("dark", () => "light").when("light", () => "dark").or((e) => {
        throw new F(e);
      }).done;
      v("update:modelValue", t);
    };
    return (t, e) => (r(), h(V, { class: "theme-toggle" }, {
      default: f(() => [
        g(O, {
          onClick: e[0] || (e[0] = () => l()),
          icon: m.value,
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
const Xe = /* @__PURE__ */ x(Ce, [["__scopeId", "data-v-8832a6ee"]]), Te = { class: "toasts" }, Me = /* @__PURE__ */ k({
  __name: "Toasts",
  props: {
    toasts: {}
  },
  emits: ["removeToast"],
  setup(c, { emit: v }) {
    const n = c, { toasts: a } = I(n), m = y(
      () => Object.entries(a.value).reverse().map(([e, o]) => [Number(e), o])
    ), i = S([]), l = S([]), t = (e) => {
      i.value.includes(e) || (i.value.push(e), clearTimeout(l.value[e]), delete l.value[e], window.setTimeout(() => {
        v("removeToast", e), i.value = i.value.filter((o) => o !== e);
      }, 500));
    };
    return X(
      a,
      () => {
        for (const e of a.value)
          e.id in l.value || (l.value[e.id] = window.setTimeout(() => {
            t(e.id);
          }, 5e3));
      },
      { deep: !0, immediate: !0 }
    ), (e, o) => (r(), b("div", Te, [
      (r(!0), b(M, null, R(m.value, ([_, p]) => (r(), h(oe, {
        onClick: () => t(_),
        class: H({ "fade-out": i.value.includes(p.id) }),
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
const Ye = /* @__PURE__ */ x(Me, [["__scopeId", "data-v-3d45b4ea"]]);
export {
  Ge as AccountMenu,
  Oe as CurrencySelector,
  je as Form,
  Je as Header,
  Ke as LocaleSelector,
  Qe as SideMenu,
  J as SideMenuItem,
  xe as SideMenuSubsection,
  Xe as ThemeToggle,
  Ye as Toasts
};
