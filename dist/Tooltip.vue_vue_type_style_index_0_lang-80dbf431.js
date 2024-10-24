import { defineComponent as g, renderSlot as m, ref as N, provide as T, inject as R, onMounted as k, unref as l, onBeforeUnmount as U, computed as y, openBlock as I, createBlock as L, mergeProps as j, withCtx as h, createElementBlock as D, normalizeClass as V, toDisplayString as B, createCommentVNode as P, createTextVNode as K } from "vue";
import { _ as $, a as E, d as c, l as H, u as z, c as F, m as J, w as Y } from "./base-3d5ba31d.js";
import { u as S, a as i, i as q, E as G } from "./popper-e6bb9b68.js";
const W = /* @__PURE__ */ g({
  inheritAttrs: !1
});
function Q(o, t, n, r, f, p) {
  return m(o.$slots, "default");
}
var X = /* @__PURE__ */ $(W, [["render", Q], ["__file", "collection.vue"]]);
const Z = /* @__PURE__ */ g({
  name: "ElCollectionItem",
  inheritAttrs: !1
});
function x(o, t, n, r, f, p) {
  return m(o.$slots, "default");
}
var ee = /* @__PURE__ */ $(Z, [["render", x], ["__file", "collection-item.vue"]]);
const te = "data-el-collection-item", oe = (o) => {
  const t = `El${o}Collection`, n = `${t}Item`, r = Symbol(t), f = Symbol(n), p = {
    ...X,
    name: t,
    setup() {
      const b = N(null), d = /* @__PURE__ */ new Map();
      T(r, {
        itemMap: d,
        getItems: () => {
          const a = l(b);
          if (!a)
            return [];
          const s = Array.from(a.querySelectorAll(`[${te}]`));
          return [...d.values()].sort((C, _) => s.indexOf(C.ref) - s.indexOf(_.ref));
        },
        collectionRef: b
      });
    }
  }, v = {
    ...ee,
    name: n,
    setup(b, { attrs: d }) {
      const u = N(null), a = R(r, void 0);
      T(f, {
        collectionItemRef: u
      }), k(() => {
        const s = l(u);
        s && a.itemMap.set(s, {
          ref: s,
          ...d
        });
      }), U(() => {
        const s = l(u);
        a.itemMap.delete(s);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: r,
    COLLECTION_ITEM_INJECTION_KEY: f,
    ElCollection: p,
    ElCollectionItem: v
  };
}, w = E({
  trigger: S.trigger,
  effect: {
    ...i.effect,
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
  teleported: i.teleported
});
E({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: q
  }
});
E({
  onKeydown: { type: c(Function) }
});
oe("Dropdown");
const re = E({
  trigger: S.trigger,
  placement: w.placement,
  disabled: S.disabled,
  visible: i.visible,
  transition: i.transition,
  popperOptions: w.popperOptions,
  tabindex: w.tabindex,
  content: i.content,
  popperStyle: i.popperStyle,
  popperClass: i.popperClass,
  enterable: {
    ...i.enterable,
    default: !0
  },
  effect: {
    ...i.effect,
    default: "light"
  },
  teleported: i.teleported,
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
  "update:visible": (o) => H(o),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0
}, le = "onUpdate:visible", se = g({
  name: "ElPopover"
}), ie = /* @__PURE__ */ g({
  ...se,
  props: re,
  emits: ne,
  setup(o, { expose: t, emit: n }) {
    const r = o, f = y(() => r[le]), p = z("popover"), v = N(), b = y(() => {
      var e;
      return (e = l(v)) == null ? void 0 : e.popperRef;
    }), d = y(() => [
      {
        width: F(r.width)
      },
      r.popperStyle
    ]), u = y(() => [p.b(), r.popperClass, { [p.m("plain")]: !!r.content }]), a = y(() => r.transition === `${p.namespace.value}-fade-in-linear`), s = () => {
      var e;
      (e = v.value) == null || e.hide();
    }, O = () => {
      n("before-enter");
    }, C = () => {
      n("before-leave");
    }, _ = () => {
      n("after-enter");
    }, M = () => {
      n("update:visible", !1), n("after-leave");
    };
    return t({
      popperRef: b,
      hide: s
    }), (e, ue) => (I(), L(l(G), j({
      ref_key: "tooltipRef",
      ref: v
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
      "gpu-acceleration": l(a),
      "onUpdate:visible": l(f),
      onBeforeShow: O,
      onBeforeHide: C,
      onShow: _,
      onHide: M
    }), {
      content: h(() => [
        e.title ? (I(), D("div", {
          key: 0,
          class: V(l(p).e("title")),
          role: "title"
        }, B(e.title), 3)) : P("v-if", !0),
        m(e.$slots, "default", {}, () => [
          K(B(e.content), 1)
        ])
      ]),
      default: h(() => [
        e.$slots.reference ? m(e.$slots, "reference", { key: 0 }) : P("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var pe = /* @__PURE__ */ $(ie, [["__file", "popover.vue"]]);
const A = (o, t) => {
  const n = t.arg || t.value, r = n == null ? void 0 : n.popperRef;
  r && (r.triggerRef = o);
};
var ae = {
  mounted(o, t) {
    A(o, t);
  },
  updated(o, t) {
    A(o, t);
  }
};
const ce = "popover", fe = J(ae, ce), de = Y(pe, {
  directive: fe
});
const ye = /* @__PURE__ */ g({
  __name: "Tooltip",
  setup(o) {
    return (t, n) => (I(), L(l(de), null, {
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
  de as E,
  ye as _
};
