import { A as Ne, C as Ie } from "./Icon-8f2ed8ba.js";
import { B as _e } from "./Badge-86839218.js";
import { G as Oe } from "./Form-f36966a3.js";
import { _, b as C, u as N, a, d as c, i as R, c as k, e as U, f as j, E as D, w as V, g as G } from "./popper-8d91d16d.js";
import { G as Pe } from "./popper-8d91d16d.js";
import { P as Le } from "./Popover-38d3223e.js";
import { S as Re, a as ke, b as Ue, T as je } from "./Table-f3cb8e7b.js";
import { defineComponent as g, renderSlot as m, ref as I, provide as O, inject as K, onMounted as F, unref as l, onBeforeUnmount as H, computed as y, openBlock as T, createBlock as L, mergeProps as z, withCtx as h, createElementBlock as J, normalizeClass as Y, toDisplayString as B, createCommentVNode as P, createTextVNode as q } from "vue";
import "./_plugin-vue_export-helper-dad06003.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "./Info-54758b60.js";
import "./datetime-31a2b505.js";
const W = /* @__PURE__ */ g({
  inheritAttrs: !1
});
function Q(o, t, n, r, f, p) {
  return m(o.$slots, "default");
}
var X = /* @__PURE__ */ _(W, [["render", Q], ["__file", "collection.vue"]]);
const Z = /* @__PURE__ */ g({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function x(o, t, n, r, f, p) {
  return m(o.$slots, "default");
}
var ee = /* @__PURE__ */ _(Z, [["render", x], ["__file", "collection-item.vue"]]);
const te = "data-el-collection-item", oe = (o) => {
  const t = `El${o}Collection`, n = `${t}Item`, r = Symbol(t), f = Symbol(n), p = {
    ...X,
    name: t,
    setup() {
      const v = I(null), d = /* @__PURE__ */ new Map();
      O(r, {
        itemMap: d,
        getItems: () => {
          const i = l(v);
          if (!i)
            return [];
          const s = Array.from(i.querySelectorAll(`[${te}]`));
          return [...d.values()].sort((E, S) => s.indexOf(E.ref) - s.indexOf(S.ref));
        },
        collectionRef: v
      });
    }
  }, b = {
    ...ee,
    name: n,
    setup(v, { attrs: d }) {
      const u = I(null), i = K(r, void 0);
      O(f, {
        collectionItemRef: u
      }), F(() => {
        const s = l(u);
        s && i.itemMap.set(s, {
          ref: s,
          ...d
        });
      }), H(() => {
        const s = l(u);
        i.itemMap.delete(s);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: r,
    COLLECTION_ITEM_INJECTION_KEY: f,
    ElCollection: p,
    ElCollectionItem: b
  };
}, w = C({
  trigger: N.trigger,
  effect: {
    ...a.effect,
    default: "light"
  },
  type: {
    type: c(String)
  },
  placement: {
    type: c(String),
    default: "bottom"
  },
  popperOptions: {
    type: c(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !0
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: c([Number, String]),
    default: 0
  },
  maxHeight: {
    type: c([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  role: {
    type: String,
    default: "menu"
  },
  buttonProps: {
    type: c(Object)
  },
  teleported: a.teleported
});
C({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: R
  }
});
C({
  onKeydown: { type: c(Function) }
});
oe("Dropdown");
const re = C({
  trigger: N.trigger,
  placement: w.placement,
  disabled: N.disabled,
  visible: a.visible,
  transition: a.transition,
  popperOptions: w.popperOptions,
  tabindex: w.tabindex,
  content: a.content,
  popperStyle: a.popperStyle,
  popperClass: a.popperClass,
  enterable: {
    ...a.enterable,
    default: !0
  },
  effect: {
    ...a.effect,
    default: "light"
  },
  teleported: a.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: !0
  },
  persistent: {
    type: Boolean,
    default: !0
  },
  "onUpdate:visible": {
    type: Function
  }
}), ne = {
  "update:visible": (o) => k(o),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0
}, le = "onUpdate:visible", se = g({
  name: "ElPopover"
}), ae = /* @__PURE__ */ g({
  ...se,
  props: re,
  emits: ne,
  setup(o, { expose: t, emit: n }) {
    const r = o, f = y(() => r[le]), p = U("popover"), b = I(), v = y(() => {
      var e;
      return (e = l(b)) == null ? void 0 : e.popperRef;
    }), d = y(() => [
      {
        width: j(r.width)
      },
      r.popperStyle
    ]), u = y(() => [p.b(), r.popperClass, { [p.m("plain")]: !!r.content }]), i = y(() => r.transition === `${p.namespace.value}-fade-in-linear`), s = () => {
      var e;
      (e = b.value) == null || e.hide();
    }, $ = () => {
      n("before-enter");
    }, E = () => {
      n("before-leave");
    }, S = () => {
      n("after-enter");
    }, M = () => {
      n("update:visible", !1), n("after-leave");
    };
    return t({
      popperRef: v,
      hide: s
    }), (e, ue) => (T(), L(l(D), z({
      ref_key: "tooltipRef",
      ref: b
    }, e.$attrs, {
      trigger: e.trigger,
      placement: e.placement,
      disabled: e.disabled,
      visible: e.visible,
      transition: e.transition,
      "popper-options": e.popperOptions,
      tabindex: e.tabindex,
      content: e.content,
      offset: e.offset,
      "show-after": e.showAfter,
      "hide-after": e.hideAfter,
      "auto-close": e.autoClose,
      "show-arrow": e.showArrow,
      "aria-label": e.title,
      effect: e.effect,
      enterable: e.enterable,
      "popper-class": l(u),
      "popper-style": l(d),
      teleported: e.teleported,
      persistent: e.persistent,
      "gpu-acceleration": l(i),
      "onUpdate:visible": l(f),
      onBeforeShow: $,
      onBeforeHide: E,
      onShow: S,
      onHide: M
    }), {
      content: h(() => [
        e.title ? (T(), J("div", {
          key: 0,
          class: Y(l(p).e("title")),
          role: "title"
        }, B(e.title), 3)) : P("v-if", !0),
        m(e.$slots, "default", {}, () => [
          q(B(e.content), 1)
        ])
      ]),
      default: h(() => [
        e.$slots.reference ? m(e.$slots, "reference", { key: 0 }) : P("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var pe = /* @__PURE__ */ _(ae, [["__file", "popover.vue"]]);
const A = (o, t) => {
  const n = t.arg || t.value, r = n == null ? void 0 : n.popperRef;
  r && (r.triggerRef = o);
};
var ie = {
  mounted(o, t) {
    A(o, t);
  },
  updated(o, t) {
    A(o, t);
  }
};
const ce = "popover", fe = V(ie, ce), de = G(pe, {
  directive: fe
});
const Ee = /* @__PURE__ */ g({
  __name: "Tooltip",
  setup(o) {
    return (t, n) => (T(), L(l(de), null, {
      reference: h(() => [
        m(t.$slots, "reference")
      ]),
      default: h(() => [
        m(t.$slots, "default")
      ]),
      _: 3
    }));
  }
});
export {
  Ne as Align,
  _e as Badge,
  Ie as Card,
  Oe as Form,
  Pe as Grid,
  Le as Popover,
  Re as Scrollable,
  ke as ScrollableArea,
  Ue as SimpleTable,
  je as Table,
  Ee as Tooltip
};
