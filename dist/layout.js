import { defineComponent as g, toRefs as B, computed as b, ref as I, onUnmounted as H, openBlock as d, createBlock as h, withCtx as y, createVNode as w, withKeys as L, withModifiers as q, unref as u, createTextVNode as z, toDisplayString as P, createCommentVNode as M, renderSlot as U, pushScopeId as X, popScopeId as Y, createElementVNode as F, Transition as ne, createElementBlock as S, resolveDynamicComponent as le, normalizeClass as R, resolveComponent as oe, Fragment as V, renderList as G, watch as Z } from "vue";
import { A as W, I as K } from "./Icon-53e685d0.js";
import { A as ae } from "./Avatar-1ceb631f.js";
import { P as O, T as se } from "./Toast-2cabbf64.js";
import { _ as $ } from "./_plugin-vue_export-helper-dad06003.js";
import { B as j, D as ue, I as ie } from "./Input-67b6bfb1.js";
import { G as re } from "./Form-41926cc5.js";
import { I as E } from "./Info-38a17291.js";
import { Separator as de } from "./marker.js";
import { BaseError as ce } from "./utils/error.js";
import { m as A } from "./match-b8889c93.js";
import { U as D } from "./undefined_theme-2b4e75dd.js";
import "./Popover-2a15620c.js";
const ve = /* @__PURE__ */ g({
  __name: "AccountMenu",
  props: {
    avatar: {},
    menuItems: {}
  },
  setup(c) {
    const m = c, { avatar: o, menuItems: s } = B(m), _ = b(
      () => o && o.value && "icon" in o.value ? o.value.icon : void 0
    ), i = b(
      () => o && o.value && "iconBackend" in o.value ? o.value.iconBackend : void 0
    ), a = b(
      () => o && o.value && "label" in o.value ? o.value.label : void 0
    ), t = b(
      () => o && o.value && "source" in o.value ? o.value.source : void 0
    ), e = I(), l = I(!1), p = (n) => {
      var r;
      n && ((r = e.value) != null && r.$el.contains(n.target)) || (l.value = !1, window.removeEventListener("mousedown", p));
    }, f = () => {
      l.value = !0, window.addEventListener("mousedown", p);
    }, v = (n) => {
      s.value[n].handler(), p();
    };
    return H(() => {
      window.removeEventListener("mousedown", p);
    }), (n, r) => (d(), h(W, {
      class: "account-menu",
      ref_key: "accountMenu",
      ref: e
    }, {
      default: y(() => [
        w(ae, {
          onClick: r[0] || (r[0] = (k) => f()),
          onFocus: r[1] || (r[1] = (k) => f()),
          onKeydown: [
            r[2] || (r[2] = L(q((k) => p(), ["shift"]), ["tab"])),
            r[3] || (r[3] = L((k) => p(), ["tab"]))
          ],
          icon: _.value,
          iconBackend: i.value,
          label: a.value,
          source: t.value
        }, null, 8, ["icon", "iconBackend", "label", "source"]),
        w(O, {
          class: "account-menu",
          onSelect: r[4] || (r[4] = (k) => v(k)),
          items: u(s),
          visible: l.value
        }, null, 8, ["items", "visible"])
      ]),
      _: 1
    }, 512));
  }
});
const Ge = /* @__PURE__ */ $(ve, [["__scopeId", "data-v-6b125e88"]]), me = /* @__PURE__ */ g({
  __name: "CurrencySelector",
  props: {
    currencies: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(c, { emit: m }) {
    const o = c, { currencies: s, modelValue: _ } = B(o), i = I(), a = I(!1), t = b(
      () => s.value.reduce((v, n) => (v[n.code] = {
        label: n.label
      }, v), {}) ?? {}
    ), e = b(
      () => s.value.find(({ code: v }) => _.value === v)
    ), l = (v) => {
      var n, r;
      v && ((n = i.value) != null && n.$el.contains(v.target)) || ((r = i.value) == null || r.$el.querySelector(".button").blur(), a.value = !1, window.removeEventListener("mousedown", l));
    }, p = () => {
      a.value = !0, window.addEventListener("mousedown", l);
    }, f = (v) => {
      m("update:modelValue", v), l();
    };
    return H(() => {
      window.removeEventListener("mousedown", l);
    }), (v, n) => (d(), h(W, {
      class: "currency-selector",
      ref_key: "currencySelector",
      ref: i,
      horizontal: "center"
    }, {
      default: y(() => {
        var r;
        return [
          w(j, {
            class: "currency-button",
            onClick: n[0] || (n[0] = (k) => p()),
            onFocus: n[1] || (n[1] = (k) => p()),
            onKeydown: [
              n[2] || (n[2] = L(q((k) => l(), ["shift"]), ["tab"])),
              n[3] || (n[3] = L((k) => l(), ["tab"]))
            ],
            label: (r = e.value) == null ? void 0 : r.symbol,
            mood: "neutral",
            outline: "",
            size: "large-3",
            shape: "normal"
          }, null, 8, ["label"]),
          w(O, {
            class: "currency-menu no-spacing",
            onSelect: n[4] || (n[4] = (k) => f(k)),
            items: t.value,
            visible: a.value
          }, null, 8, ["items", "visible"])
        ];
      }),
      _: 1
    }, 512));
  }
});
const Oe = /* @__PURE__ */ $(me, [["__scopeId", "data-v-0cb2d935"]]), pe = /* @__PURE__ */ g({
  __name: "Form",
  props: {
    fields: {},
    values: {}
  },
  setup(c) {
    const m = c, { fields: o } = B(m);
    return (s, _) => (d(), h(re, {
      fields: u(o),
      values: s.values
    }, {
      "field(dropdown)": y(({ code: i, label: a, options: t, value: e }) => [
        a ? (d(), h(E, {
          key: 0,
          class: "label"
        }, {
          default: y(() => [
            z(P(a), 1)
          ]),
          _: 2
        }, 1024)) : M("", !0),
        w(ue, {
          "onUpdate:modelValue": (l) => s.$emit(`update:${i}`, l),
          items: t.items,
          modelValue: e
        }, null, 8, ["onUpdate:modelValue", "items", "modelValue"])
      ]),
      "field(info)": y(({ label: i }) => [
        w(E, null, {
          default: y(() => [
            z(P(i), 1)
          ]),
          _: 2
        }, 1024)
      ]),
      "field(input)": y(({ code: i, label: a, value: t }) => [
        a ? (d(), h(E, {
          key: 0,
          class: "label"
        }, {
          default: y(() => [
            z(P(a), 1)
          ]),
          _: 2
        }, 1024)) : M("", !0),
        w(ie, {
          "onUpdate:modelValue": (e) => s.$emit(`update:${i}`, e),
          modelValue: t
        }, null, 8, ["onUpdate:modelValue", "modelValue"])
      ]),
      _: 1
    }, 8, ["fields", "values"]));
  }
});
const je = /* @__PURE__ */ $(pe, [["__scopeId", "data-v-39d44946"]]), _e = (c) => (X("data-v-c7100892"), c = c(), Y(), c), fe = /* @__PURE__ */ _e(() => /* @__PURE__ */ F("div", { class: "menu-button-lines" }, null, -1)), he = /* @__PURE__ */ g({
  __name: "Header",
  emits: ["menuToggle"],
  setup(c, { emit: m }) {
    const o = () => {
      document.documentElement.scrollTo({
        left: 0,
        top: 0
      });
    };
    return (s, _) => (d(), h(W, {
      class: "header",
      vertical: "center"
    }, {
      default: y(() => [
        w(W, {
          class: "menu-button",
          onClick: _[0] || (_[0] = () => m("menuToggle")),
          vertical: "center"
        }, {
          default: y(() => [
            fe
          ]),
          _: 1
        }),
        w(W, {
          class: "title",
          onClick: _[1] || (_[1] = () => o()),
          vertical: "center"
        }, {
          default: y(() => [
            w(E, { size: "large-2" }, {
              default: y(() => [
                U(s.$slots, "title", {}, void 0, !0)
              ]),
              _: 3
            })
          ]),
          _: 3
        }),
        w(de),
        U(s.$slots, "end", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
});
const Je = /* @__PURE__ */ $(he, [["__scopeId", "data-v-c7100892"]]), ye = /* @__PURE__ */ g({
  __name: "LocaleSelector",
  props: {
    locales: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(c, { emit: m }) {
    const o = c, { locales: s, modelValue: _ } = B(o), i = I(), a = I(!1), t = b(
      () => s.value.reduce((v, n) => (v[n.code] = {
        icon: n.icon,
        iconBackend: "flag-icons"
      }, v), {})
    ), e = b(
      () => s.value.find((v) => v.code === _.value).icon
    ), l = (v) => {
      var n, r;
      v && ((n = i.value) != null && n.$el.contains(v.target)) || (a.value = !1, (r = i.value) == null || r.$el.querySelector(".button").blur(), window.removeEventListener("mousedown", l));
    }, p = () => {
      a.value = !0, window.addEventListener("mousedown", l);
    }, f = (v) => {
      m("update:modelValue", v), l();
    };
    return H(() => {
      window.removeEventListener("mousedown", l);
    }), (v, n) => (d(), h(W, {
      class: "locale-selector",
      ref_key: "localeSelector",
      ref: i,
      horizontal: "center"
    }, {
      default: y(() => [
        w(j, {
          class: "locale-button",
          onClick: n[0] || (n[0] = (r) => p()),
          onFocus: n[1] || (n[1] = (r) => p()),
          onKeydown: [
            n[2] || (n[2] = L(q((r) => l(), ["shift"]), ["tab"])),
            n[3] || (n[3] = L((r) => l(), ["tab"]))
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
const Qe = /* @__PURE__ */ $(ye, [["__scopeId", "data-v-dd1fb6f5"]]), be = {
  key: 0,
  class: "collapse"
}, we = /* @__PURE__ */ g({
  __name: "Collapse",
  props: {
    expanded: { type: Boolean, default: !1 }
  },
  setup(c) {
    const m = c, { expanded: o } = B(m), s = (a) => {
      const t = a;
      t.style.height = "auto";
    }, _ = (a) => {
      const t = a, e = getComputedStyle(t).width;
      t.style.width = e, t.style.position = "absolute", t.style.visibility = "hidden", t.style.height = "auto";
      const l = getComputedStyle(t).height;
      t.style.width = "", t.style.position = "", t.style.visibility = "", t.style.height = "0", getComputedStyle(t).height, requestAnimationFrame(() => {
        t.style.height = l;
      });
    }, i = (a) => {
      const t = a, e = getComputedStyle(t).height;
      t.style.height = e, getComputedStyle(t).height, requestAnimationFrame(() => {
        t.style.height = "0";
      });
    };
    return (a, t) => (d(), h(ne, {
      name: "collapse",
      onAfterEnter: s,
      onEnter: _,
      onLeave: i
    }, {
      default: y(() => [
        u(o) ? (d(), S("div", be, [
          U(a.$slots, "default", {}, void 0, !0)
        ])) : M("", !0)
      ]),
      _: 3
    }));
  }
});
const ke = /* @__PURE__ */ $(we, [["__scopeId", "data-v-10c3004c"]]);
class J extends ce {
  getMessage(m) {
    return `Invalid menu item level ${m}`;
  }
}
const ge = /* @__PURE__ */ g({
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
    const m = c, { active: o, fullWidth: s, icon: _, iconBackend: i, label: a, level: t, withSublevel: e } = B(m), l = b(
      () => A(t.value).when(1, () => "large-3").whenAny([2, 3], () => "large").or((n) => {
        throw new J(n);
      }).done
    ), p = b(() => o.value ? "elevated-2" : "elevated"), f = b(
      () => A(t.value).when(1, () => "large").whenAny([2, 3], () => "normal").or((n) => {
        throw new J(n);
      }).done
    ), v = b(() => ({
      active: o.value,
      "full-width": s.value,
      [`level-${t.value}`]: !0,
      "with-sublevel": e.value
    }));
    return (n, r) => (d(), h(le(n.link ? "a" : "div"), {
      class: R(["menu-item", v.value]),
      href: n.link ? n.link : void 0
    }, {
      default: y(() => [
        u(_) ? (d(), h(K, {
          key: 0,
          class: "item-icon",
          backend: u(i),
          elevation: p.value,
          size: l.value,
          value: u(_)
        }, null, 8, ["backend", "elevation", "size", "value"])) : M("", !0),
        u(s) && u(a) ? (d(), h(E, {
          key: 1,
          elevation: p.value,
          size: f.value
        }, {
          default: y(() => [
            z(P(u(a)), 1)
          ]),
          _: 1
        }, 8, ["elevation", "size"])) : M("", !0),
        u(s) && u(e) ? (d(), h(K, {
          key: 2,
          class: "chevron",
          elevation: p.value,
          size: "small-2",
          value: "chevron-right"
        }, null, 8, ["elevation"])) : M("", !0)
      ]),
      _: 1
    }, 8, ["class", "href"]));
  }
});
const Q = /* @__PURE__ */ $(ge, [["__scopeId", "data-v-02af8c24"]]), $e = /* @__PURE__ */ g({
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
    const o = c, { expandedPrefix: s, icon: _, iconBackend: i, items: a, label: t, level: e, prefix: l, router: p, translator: f } = B(o), v = b(() => p.value.currentRoute.value.meta.menuItem), n = b(() => e.value + 1), r = b(() => e.value + 1), k = (C) => {
      m("update:expandedPrefix", l.value);
      const T = a.value[C];
      "items" in T || p.value.push(T.route);
    };
    return (C, T) => {
      const ee = oe("MenuSubsection", !0);
      return d(), S(V, null, [
        u(t) ? (d(), S(V, { key: 0 }, [
          u(e) === 0 ? (d(), S(V, { key: 0 }, [
            C.fullWidth ? (d(), h(E, {
              key: 0,
              class: "section",
              elevation: "elevated"
            }, {
              default: y(() => [
                z(P(u(f)(u(t)).toUpperCase()), 1)
              ]),
              _: 1
            })) : (d(), h(K, {
              key: 1,
              class: "section-collapsed",
              elevation: "elevated",
              size: "large-3",
              value: "ellipsis"
            }))
          ], 64)) : (d(), h(Q, {
            key: 1,
            onClick: T[0] || (T[0] = () => m("update:expandedPrefix", u(l))),
            active: u(s).startsWith(u(l)),
            fullWidth: C.fullWidth,
            icon: u(_),
            iconBackend: u(i),
            label: C.fullWidth ? u(t) : void 0,
            level: u(e),
            withSublevel: ""
          }, null, 8, ["active", "fullWidth", "icon", "iconBackend", "label", "level"]))
        ], 64)) : M("", !0),
        w(ke, {
          expanded: u(e) === 0 || u(s).startsWith(u(l))
        }, {
          default: y(() => [
            (d(!0), S(V, null, G(u(a), (x, N) => (d(), S(V, null, [
              "items" in x ? (d(), h(ee, {
                key: 0,
                "onUpdate:expandedPrefix": T[1] || (T[1] = (te) => m("update:expandedPrefix", te)),
                expandedPrefix: u(s),
                fullWidth: C.fullWidth,
                icon: x.icon,
                iconBackend: x.iconBackend,
                items: x.items,
                level: r.value,
                label: x.label ? u(f)(x.label) : "",
                prefix: `${u(l)}${N}.`,
                router: u(p),
                translator: u(f)
              }, null, 8, ["expandedPrefix", "fullWidth", "icon", "iconBackend", "items", "level", "label", "prefix", "router", "translator"])) : C.fullWidth || u(e) === 0 ? (d(), h(Q, {
                key: 1,
                onClick: q(() => k(N), ["prevent"]),
                active: `${u(l)}${N}` === v.value,
                fullWidth: C.fullWidth,
                icon: x.icon,
                iconBackend: x.iconBackend,
                label: C.fullWidth ? u(f)(x.label) : void 0,
                level: n.value,
                link: u(p).resolve(x.route).href
              }, null, 8, ["onClick", "active", "fullWidth", "icon", "iconBackend", "label", "level", "link"])) : M("", !0)
            ], 64))), 256))
          ]),
          _: 1
        }, 8, ["expanded"])
      ], 64);
    };
  }
});
const xe = /* @__PURE__ */ $($e, [["__scopeId", "data-v-f2bc00a6"]]), Se = (c) => (X("data-v-463ef115"), c = c(), Y(), c), Ie = { class: "brand" }, Be = { class: "items" }, Ce = /* @__PURE__ */ Se(() => /* @__PURE__ */ F("div", { class: "pixel" }, " ", -1)), Me = /* @__PURE__ */ g({
  __name: "SideMenu",
  props: {
    fullWidth: { type: Boolean },
    menu: {},
    router: {},
    translator: { type: Function }
  },
  setup(c) {
    const m = c, o = I(""), s = I(!1), { fullWidth: _, router: i } = B(m), a = b(() => _.value || s.value);
    return Z(
      i.value.currentRoute,
      (t) => {
        const e = t.meta.menuItem ?? "";
        o.value = e.substring(0, e.lastIndexOf(".") + 1);
      },
      { immediate: !0 }
    ), (t, e) => (d(), S("div", {
      class: R(["side-menu", { "full-width": a.value }]),
      onMouseenter: e[2] || (e[2] = (l) => s.value = !0),
      onMouseleave: e[3] || (e[3] = (l) => s.value = !1)
    }, [
      F("div", {
        class: "brand-container",
        onClick: e[0] || (e[0] = (l) => u(i).push({ name: "default" }))
      }, [
        F("div", Ie, [
          U(t.$slots, "header", {}, void 0, !0)
        ])
      ]),
      F("div", Be, [
        (d(!0), S(V, null, G(t.menu, (l, p) => (d(), h(xe, {
          expandedPrefix: o.value,
          "onUpdate:expandedPrefix": e[1] || (e[1] = (f) => o.value = f),
          fullWidth: a.value,
          icon: l.icon,
          iconBackend: l.iconBackend,
          items: l.items,
          label: l.label ?? "",
          prefix: `${p}.`,
          router: u(i),
          translator: t.translator
        }, null, 8, ["expandedPrefix", "fullWidth", "icon", "iconBackend", "items", "label", "prefix", "router", "translator"]))), 256)),
        Ce
      ])
    ], 34));
  }
});
const Xe = /* @__PURE__ */ $(Me, [["__scopeId", "data-v-463ef115"]]), Te = /* @__PURE__ */ g({
  __name: "ThemeToggle",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(c, { emit: m }) {
    const o = c, { modelValue: s } = B(o), _ = b(
      () => A(s.value).when("dark", () => "moon").when("light", () => "sun").or((t) => {
        throw new D(t);
      }).done
    ), i = b(
      () => A(s.value).when("dark", () => "accent").when("light", () => "important").or((t) => {
        throw new D(t);
      }).done
    ), a = () => {
      const t = A(s.value).when("dark", () => "light").when("light", () => "dark").or((e) => {
        throw new D(e);
      }).done;
      m("update:modelValue", t);
    };
    return (t, e) => (d(), h(W, { class: "theme-toggle" }, {
      default: y(() => [
        w(j, {
          onClick: e[0] || (e[0] = () => a()),
          icon: _.value,
          iconBackend: "regular",
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
const Ye = /* @__PURE__ */ $(Te, [["__scopeId", "data-v-9593fe92"]]), Ve = { class: "toasts" }, We = /* @__PURE__ */ g({
  __name: "Toasts",
  props: {
    toasts: {}
  },
  emits: ["removeToast"],
  setup(c, { emit: m }) {
    const o = c, { toasts: s } = B(o), _ = b(
      () => Object.entries(s.value).reverse().map(([e, l]) => [Number(e), l])
    ), i = I([]), a = I([]), t = (e) => {
      i.value.includes(e) || (i.value.push(e), clearTimeout(a.value[e]), delete a.value[e], window.setTimeout(() => {
        m("removeToast", e), i.value = i.value.filter((l) => l !== e);
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
    ), (e, l) => (d(), S("div", Ve, [
      (d(!0), S(V, null, G(_.value, ([p, f]) => (d(), h(se, {
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
const Ze = /* @__PURE__ */ $(We, [["__scopeId", "data-v-3d45b4ea"]]);
export {
  Ge as AccountMenu,
  Oe as CurrencySelector,
  je as Form,
  Je as Header,
  Qe as LocaleSelector,
  Xe as SideMenu,
  Q as SideMenuItem,
  xe as SideMenuSubsection,
  Ye as ThemeToggle,
  Ze as Toasts
};
