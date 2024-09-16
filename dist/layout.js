import { defineComponent as x, toRefs as B, computed as b, ref as g, onUnmounted as H, openBlock as c, createBlock as y, withCtx as h, createVNode as w, withKeys as L, withModifiers as q, unref as u, createTextVNode as P, toDisplayString as z, createCommentVNode as M, renderSlot as U, pushScopeId as X, popScopeId as Y, createElementVNode as F, Transition as ne, createElementBlock as I, resolveDynamicComponent as le, normalizeClass as R, resolveComponent as oe, Fragment as V, renderList as G, watch as Z } from "vue";
import { A as W, I as K } from "./Icon-53e685d0.js";
import { A as se } from "./Avatar-1ceb631f.js";
import { P as O, T as ae } from "./Toast-b1db726d.js";
import { _ as $ } from "./_plugin-vue_export-helper-dad06003.js";
import { B as j, D as ue, I as ie } from "./Input-301d9b5d.js";
import { G as re } from "./Form-41926cc5.js";
import { I as E } from "./Info-38a17291.js";
import { Separator as de } from "./marker.js";
import { BaseError as ce } from "./utils/error.js";
import { m as A } from "./match-b8889c93.js";
import { S as ve } from "./Scrollable-055852b4.js";
import { U as D } from "./undefined_theme-2b4e75dd.js";
import "./Popover-2a15620c.js";
const me = /* @__PURE__ */ x({
  __name: "AccountMenu",
  props: {
    avatar: {},
    menuItems: {}
  },
  setup(v) {
    const p = v, { avatar: o, menuItems: a } = B(p), f = b(
      () => o && o.value && "icon" in o.value ? o.value.icon : void 0
    ), i = b(
      () => o && o.value && "iconBackend" in o.value ? o.value.iconBackend : void 0
    ), s = b(
      () => o && o.value && "label" in o.value ? o.value.label : void 0
    ), e = b(
      () => o && o.value && "source" in o.value ? o.value.source : void 0
    ), t = g(), n = g(!1), r = (l) => {
      var d;
      l && ((d = t.value) != null && d.$el.contains(l.target)) || (n.value = !1, window.removeEventListener("mousedown", r));
    }, _ = () => {
      n.value = !0, window.addEventListener("mousedown", r);
    }, m = (l) => {
      a.value[l].handler(), r();
    };
    return H(() => {
      window.removeEventListener("mousedown", r);
    }), (l, d) => (c(), y(W, {
      class: "account-menu",
      ref_key: "accountMenu",
      ref: t
    }, {
      default: h(() => [
        w(se, {
          onClick: d[0] || (d[0] = (k) => _()),
          onFocus: d[1] || (d[1] = (k) => _()),
          onKeydown: [
            d[2] || (d[2] = L(q((k) => r(), ["shift"]), ["tab"])),
            d[3] || (d[3] = L((k) => r(), ["tab"]))
          ],
          icon: f.value,
          iconBackend: i.value,
          label: s.value,
          source: e.value
        }, null, 8, ["icon", "iconBackend", "label", "source"]),
        w(O, {
          class: "account-menu",
          onSelect: d[4] || (d[4] = (k) => m(k)),
          items: u(a),
          visible: n.value
        }, null, 8, ["items", "visible"])
      ]),
      _: 1
    }, 512));
  }
});
const je = /* @__PURE__ */ $(me, [["__scopeId", "data-v-6b125e88"]]), pe = /* @__PURE__ */ x({
  __name: "CurrencySelector",
  props: {
    currencies: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(v, { emit: p }) {
    const o = v, { currencies: a, modelValue: f } = B(o), i = g(), s = g(!1), e = b(
      () => a.value.reduce((m, l) => (m[l.code] = {
        label: l.label
      }, m), {}) ?? {}
    ), t = b(
      () => a.value.find(({ code: m }) => f.value === m)
    ), n = (m) => {
      var l, d;
      m && ((l = i.value) != null && l.$el.contains(m.target)) || ((d = i.value) == null || d.$el.querySelector(".button").blur(), s.value = !1, window.removeEventListener("mousedown", n));
    }, r = () => {
      s.value = !0, window.addEventListener("mousedown", n);
    }, _ = (m) => {
      p("update:modelValue", m), n();
    };
    return H(() => {
      window.removeEventListener("mousedown", n);
    }), (m, l) => (c(), y(W, {
      class: "currency-selector",
      ref_key: "currencySelector",
      ref: i,
      horizontal: "center"
    }, {
      default: h(() => {
        var d;
        return [
          w(j, {
            class: "currency-button",
            onClick: l[0] || (l[0] = (k) => r()),
            onFocus: l[1] || (l[1] = (k) => r()),
            onKeydown: [
              l[2] || (l[2] = L(q((k) => n(), ["shift"]), ["tab"])),
              l[3] || (l[3] = L((k) => n(), ["tab"]))
            ],
            label: (d = t.value) == null ? void 0 : d.symbol,
            mood: "neutral",
            outline: "",
            size: "large-3",
            shape: "normal"
          }, null, 8, ["label"]),
          w(O, {
            class: "currency-menu no-spacing",
            onSelect: l[4] || (l[4] = (k) => _(k)),
            items: e.value,
            visible: s.value
          }, null, 8, ["items", "visible"])
        ];
      }),
      _: 1
    }, 512));
  }
});
const Je = /* @__PURE__ */ $(pe, [["__scopeId", "data-v-0cb2d935"]]), fe = /* @__PURE__ */ x({
  __name: "Form",
  props: {
    fields: {},
    values: {}
  },
  setup(v) {
    const p = v, { fields: o } = B(p);
    return (a, f) => (c(), y(re, {
      fields: u(o),
      values: a.values
    }, {
      "field(dropdown)": h(({ code: i, label: s, options: e, value: t }) => [
        s ? (c(), y(E, {
          key: 0,
          class: "label"
        }, {
          default: h(() => [
            P(z(s), 1)
          ]),
          _: 2
        }, 1024)) : M("", !0),
        w(ue, {
          "onUpdate:modelValue": (n) => a.$emit(`update:${i}`, n),
          items: e.items,
          modelValue: t
        }, null, 8, ["onUpdate:modelValue", "items", "modelValue"])
      ]),
      "field(info)": h(({ label: i }) => [
        w(E, null, {
          default: h(() => [
            P(z(i), 1)
          ]),
          _: 2
        }, 1024)
      ]),
      "field(input)": h(({ code: i, label: s, value: e }) => [
        s ? (c(), y(E, {
          key: 0,
          class: "label"
        }, {
          default: h(() => [
            P(z(s), 1)
          ]),
          _: 2
        }, 1024)) : M("", !0),
        w(ie, {
          "onUpdate:modelValue": (t) => a.$emit(`update:${i}`, t),
          modelValue: e
        }, null, 8, ["onUpdate:modelValue", "modelValue"])
      ]),
      _: 1
    }, 8, ["fields", "values"]));
  }
});
const Qe = /* @__PURE__ */ $(fe, [["__scopeId", "data-v-39d44946"]]), _e = (v) => (X("data-v-c7100892"), v = v(), Y(), v), he = /* @__PURE__ */ _e(() => /* @__PURE__ */ F("div", { class: "menu-button-lines" }, null, -1)), ye = /* @__PURE__ */ x({
  __name: "Header",
  emits: ["menuToggle"],
  setup(v, { emit: p }) {
    const o = () => {
      document.documentElement.scrollTo({
        left: 0,
        top: 0
      });
    };
    return (a, f) => (c(), y(W, {
      class: "header",
      vertical: "center"
    }, {
      default: h(() => [
        w(W, {
          class: "menu-button",
          onClick: f[0] || (f[0] = () => p("menuToggle")),
          vertical: "center"
        }, {
          default: h(() => [
            he
          ]),
          _: 1
        }),
        w(W, {
          class: "title",
          onClick: f[1] || (f[1] = () => o()),
          vertical: "center"
        }, {
          default: h(() => [
            w(E, { size: "large-2" }, {
              default: h(() => [
                U(a.$slots, "title", {}, void 0, !0)
              ]),
              _: 3
            })
          ]),
          _: 3
        }),
        w(de),
        U(a.$slots, "end", {}, void 0, !0)
      ]),
      _: 3
    }));
  }
});
const Xe = /* @__PURE__ */ $(ye, [["__scopeId", "data-v-c7100892"]]), be = /* @__PURE__ */ x({
  __name: "LocaleSelector",
  props: {
    locales: {},
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(v, { emit: p }) {
    const o = v, { locales: a, modelValue: f } = B(o), i = g(), s = g(!1), e = b(
      () => a.value.reduce((m, l) => (m[l.code] = {
        icon: l.icon,
        iconBackend: "flag-icons"
      }, m), {})
    ), t = b(
      () => a.value.find((m) => m.code === f.value).icon
    ), n = (m) => {
      var l, d;
      m && ((l = i.value) != null && l.$el.contains(m.target)) || (s.value = !1, (d = i.value) == null || d.$el.querySelector(".button").blur(), window.removeEventListener("mousedown", n));
    }, r = () => {
      s.value = !0, window.addEventListener("mousedown", n);
    }, _ = (m) => {
      p("update:modelValue", m), n();
    };
    return H(() => {
      window.removeEventListener("mousedown", n);
    }), (m, l) => (c(), y(W, {
      class: "locale-selector",
      ref_key: "localeSelector",
      ref: i,
      horizontal: "center"
    }, {
      default: h(() => [
        w(j, {
          class: "locale-button",
          onClick: l[0] || (l[0] = (d) => r()),
          onFocus: l[1] || (l[1] = (d) => r()),
          onKeydown: [
            l[2] || (l[2] = L(q((d) => n(), ["shift"]), ["tab"])),
            l[3] || (l[3] = L((d) => n(), ["tab"]))
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
          onSelect: l[4] || (l[4] = (d) => _(d)),
          items: e.value,
          visible: s.value
        }, null, 8, ["items", "visible"])
      ]),
      _: 1
    }, 512));
  }
});
const Ye = /* @__PURE__ */ $(be, [["__scopeId", "data-v-dd1fb6f5"]]), we = {
  key: 0,
  class: "collapse"
}, ke = /* @__PURE__ */ x({
  __name: "Collapse",
  props: {
    expanded: { type: Boolean, default: !1 }
  },
  setup(v) {
    const p = v, { expanded: o } = B(p), a = (s) => {
      const e = s;
      e.style.height = "auto";
    }, f = (s) => {
      const e = s, t = getComputedStyle(e).width;
      e.style.width = t, e.style.position = "absolute", e.style.visibility = "hidden", e.style.height = "auto";
      const n = getComputedStyle(e).height;
      e.style.width = "", e.style.position = "", e.style.visibility = "", e.style.height = "0", getComputedStyle(e).height, requestAnimationFrame(() => {
        e.style.height = n;
      });
    }, i = (s) => {
      const e = s, t = getComputedStyle(e).height;
      e.style.height = t, getComputedStyle(e).height, requestAnimationFrame(() => {
        e.style.height = "0";
      });
    };
    return (s, e) => (c(), y(ne, {
      name: "collapse",
      onAfterEnter: a,
      onEnter: f,
      onLeave: i
    }, {
      default: h(() => [
        u(o) ? (c(), I("div", we, [
          U(s.$slots, "default", {}, void 0, !0)
        ])) : M("", !0)
      ]),
      _: 3
    }));
  }
});
const ge = /* @__PURE__ */ $(ke, [["__scopeId", "data-v-10c3004c"]]);
class J extends ce {
  getMessage(p) {
    return `Invalid menu item level ${p}`;
  }
}
const xe = /* @__PURE__ */ x({
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
  setup(v) {
    const p = v, { active: o, fullWidth: a, icon: f, iconBackend: i, label: s, level: e, withSublevel: t } = B(p), n = b(
      () => A(e.value).when(1, () => "large-3").whenAny([2, 3], () => "large").or((l) => {
        throw new J(l);
      }).done
    ), r = b(() => o.value ? "elevated-2" : "elevated"), _ = b(
      () => A(e.value).when(1, () => "large").whenAny([2, 3], () => "normal").or((l) => {
        throw new J(l);
      }).done
    ), m = b(() => ({
      active: o.value,
      "full-width": a.value,
      [`level-${e.value}`]: !0,
      "with-sublevel": t.value
    }));
    return (l, d) => (c(), y(le(l.link ? "a" : "div"), {
      class: R(["menu-item", m.value]),
      href: l.link ? l.link : void 0
    }, {
      default: h(() => [
        u(f) ? (c(), y(K, {
          key: 0,
          class: "item-icon",
          backend: u(i),
          elevation: r.value,
          size: n.value,
          value: u(f)
        }, null, 8, ["backend", "elevation", "size", "value"])) : M("", !0),
        u(a) && u(s) ? (c(), y(E, {
          key: 1,
          elevation: r.value,
          size: _.value
        }, {
          default: h(() => [
            P(z(u(s)), 1)
          ]),
          _: 1
        }, 8, ["elevation", "size"])) : M("", !0),
        u(a) && u(t) ? (c(), y(K, {
          key: 2,
          class: "chevron",
          elevation: r.value,
          size: "small-2",
          value: "chevron-right"
        }, null, 8, ["elevation"])) : M("", !0)
      ]),
      _: 1
    }, 8, ["class", "href"]));
  }
});
const Q = /* @__PURE__ */ $(xe, [["__scopeId", "data-v-02af8c24"]]), $e = /* @__PURE__ */ x({
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
  setup(v, { emit: p }) {
    const o = v, { expandedPrefix: a, icon: f, iconBackend: i, items: s, label: e, level: t, prefix: n, router: r, translator: _ } = B(o), m = b(() => r.value.currentRoute.value.meta.menuItem), l = b(() => t.value + 1), d = b(() => t.value + 1), k = (C) => {
      p("update:expandedPrefix", n.value);
      const T = s.value[C];
      "items" in T || r.value.push(T.route);
    };
    return (C, T) => {
      const ee = oe("MenuSubsection", !0);
      return c(), I(V, null, [
        u(e) ? (c(), I(V, { key: 0 }, [
          u(t) === 0 ? (c(), I(V, { key: 0 }, [
            C.fullWidth ? (c(), y(E, {
              key: 0,
              class: "section",
              elevation: "elevated"
            }, {
              default: h(() => [
                P(z(u(_)(u(e)).toUpperCase()), 1)
              ]),
              _: 1
            })) : (c(), y(K, {
              key: 1,
              class: "section-collapsed",
              elevation: "elevated",
              size: "large-3",
              value: "ellipsis"
            }))
          ], 64)) : (c(), y(Q, {
            key: 1,
            onClick: T[0] || (T[0] = () => p("update:expandedPrefix", u(n))),
            active: u(a).startsWith(u(n)),
            fullWidth: C.fullWidth,
            icon: u(f),
            iconBackend: u(i),
            label: C.fullWidth ? u(e) : void 0,
            level: u(t),
            withSublevel: ""
          }, null, 8, ["active", "fullWidth", "icon", "iconBackend", "label", "level"]))
        ], 64)) : M("", !0),
        w(ge, {
          expanded: u(t) === 0 || u(a).startsWith(u(n))
        }, {
          default: h(() => [
            (c(!0), I(V, null, G(u(s), (S, N) => (c(), I(V, null, [
              "items" in S ? (c(), y(ee, {
                key: 0,
                "onUpdate:expandedPrefix": T[1] || (T[1] = (te) => p("update:expandedPrefix", te)),
                expandedPrefix: u(a),
                fullWidth: C.fullWidth,
                icon: S.icon,
                iconBackend: S.iconBackend,
                items: S.items,
                level: d.value,
                label: S.label ? u(_)(S.label) : "",
                prefix: `${u(n)}${N}.`,
                router: u(r),
                translator: u(_)
              }, null, 8, ["expandedPrefix", "fullWidth", "icon", "iconBackend", "items", "level", "label", "prefix", "router", "translator"])) : C.fullWidth || u(t) === 0 ? (c(), y(Q, {
                key: 1,
                onClick: q(() => k(N), ["prevent"]),
                active: `${u(n)}${N}` === m.value,
                fullWidth: C.fullWidth,
                icon: S.icon,
                iconBackend: S.iconBackend,
                label: C.fullWidth ? u(_)(S.label) : void 0,
                level: l.value,
                link: u(r).resolve(S.route).href
              }, null, 8, ["onClick", "active", "fullWidth", "icon", "iconBackend", "label", "level", "link"])) : M("", !0)
            ], 64))), 256))
          ]),
          _: 1
        }, 8, ["expanded"])
      ], 64);
    };
  }
});
const Se = /* @__PURE__ */ $($e, [["__scopeId", "data-v-f2bc00a6"]]), Ie = (v) => (X("data-v-c2e25788"), v = v(), Y(), v), Be = { class: "brand" }, Ce = { class: "items" }, Me = /* @__PURE__ */ Ie(() => /* @__PURE__ */ F("div", { class: "pixel" }, " ", -1)), Te = /* @__PURE__ */ x({
  __name: "SideMenu",
  props: {
    fullWidth: { type: Boolean },
    menu: {},
    router: {},
    translator: { type: Function }
  },
  setup(v) {
    const p = v, o = g(""), a = g(!1), { fullWidth: f, router: i } = B(p), s = b(() => f.value || a.value), e = g({ left: 0, top: 0 });
    return Z(
      i.value.currentRoute,
      (t) => {
        const n = t.meta.menuItem ?? "";
        o.value = n.substring(0, n.lastIndexOf(".") + 1);
      },
      { immediate: !0 }
    ), (t, n) => (c(), I("div", {
      class: R(["side-menu", { "full-width": s.value }]),
      onMouseenter: n[3] || (n[3] = (r) => a.value = !0),
      onMouseleave: n[4] || (n[4] = (r) => a.value = !1)
    }, [
      F("div", {
        class: "brand-container",
        onClick: n[0] || (n[0] = (r) => u(i).push({ name: "default" }))
      }, [
        F("div", Be, [
          U(t.$slots, "header", {}, void 0, !0)
        ])
      ]),
      w(ve, {
        class: "flex-max no-spacing",
        "onUpdate:scrollPosition": n[2] || (n[2] = (r) => e.value = r),
        scrollPosition: e.value,
        size: "small",
        theme: "dark"
      }, {
        default: h(() => [
          F("div", Ce, [
            (c(!0), I(V, null, G(t.menu, (r, _) => (c(), y(Se, {
              expandedPrefix: o.value,
              "onUpdate:expandedPrefix": n[1] || (n[1] = (m) => o.value = m),
              fullWidth: s.value,
              icon: r.icon,
              iconBackend: r.iconBackend,
              items: r.items,
              label: r.label ?? "",
              prefix: `${_}.`,
              router: u(i),
              translator: t.translator
            }, null, 8, ["expandedPrefix", "fullWidth", "icon", "iconBackend", "items", "label", "prefix", "router", "translator"]))), 256)),
            Me
          ])
        ]),
        _: 1
      }, 8, ["scrollPosition"])
    ], 34));
  }
});
const Ze = /* @__PURE__ */ $(Te, [["__scopeId", "data-v-c2e25788"]]), Ve = /* @__PURE__ */ x({
  __name: "ThemeToggle",
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(v, { emit: p }) {
    const o = v, { modelValue: a } = B(o), f = b(
      () => A(a.value).when("dark", () => "moon").when("light", () => "sun").or((e) => {
        throw new D(e);
      }).done
    ), i = b(
      () => A(a.value).when("dark", () => "accent").when("light", () => "important").or((e) => {
        throw new D(e);
      }).done
    ), s = () => {
      const e = A(a.value).when("dark", () => "light").when("light", () => "dark").or((t) => {
        throw new D(t);
      }).done;
      p("update:modelValue", e);
    };
    return (e, t) => (c(), y(W, { class: "theme-toggle" }, {
      default: h(() => [
        w(j, {
          onClick: t[0] || (t[0] = () => s()),
          icon: f.value,
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
const et = /* @__PURE__ */ $(Ve, [["__scopeId", "data-v-9593fe92"]]), We = { class: "toasts" }, Ee = /* @__PURE__ */ x({
  __name: "Toasts",
  props: {
    toasts: {}
  },
  emits: ["removeToast"],
  setup(v, { emit: p }) {
    const o = v, { toasts: a } = B(o), f = b(
      () => Object.entries(a.value).reverse().map(([t, n]) => [Number(t), n])
    ), i = g([]), s = g([]), e = (t) => {
      i.value.includes(t) || (i.value.push(t), clearTimeout(s.value[t]), delete s.value[t], window.setTimeout(() => {
        p("removeToast", t), i.value = i.value.filter((n) => n !== t);
      }, 500));
    };
    return Z(
      a,
      () => {
        for (const t of a.value)
          t.id in s.value || (s.value[t.id] = window.setTimeout(() => {
            e(t.id);
          }, 5e3));
      },
      { deep: !0, immediate: !0 }
    ), (t, n) => (c(), I("div", We, [
      (c(!0), I(V, null, G(f.value, ([r, _]) => (c(), y(ae, {
        onClick: () => e(r),
        class: R({ "fade-out": i.value.includes(_.id) }),
        icon: _.icon,
        iconBackend: _.iconBackend,
        key: `toast-${_.id}`,
        mood: _.mood,
        message: _.message,
        title: _.title
      }, null, 8, ["onClick", "class", "icon", "iconBackend", "mood", "message", "title"]))), 128))
    ]));
  }
});
const tt = /* @__PURE__ */ $(Ee, [["__scopeId", "data-v-3d45b4ea"]]);
export {
  je as AccountMenu,
  Je as CurrencySelector,
  Qe as Form,
  Xe as Header,
  Ye as LocaleSelector,
  Ze as SideMenu,
  Q as SideMenuItem,
  Se as SideMenuSubsection,
  et as ThemeToggle,
  tt as Toasts
};
