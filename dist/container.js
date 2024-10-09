import { A as Io, C as _o } from "./Icon-53e685d0.js";
import { B as No } from "./Badge-17fbe620.js";
import { G as Ro } from "./Form-41926cc5.js";
import { u as fe } from "./use-global-config-d0f906a0.js";
import { G as zo } from "./use-global-config-d0f906a0.js";
import { P as Uo } from "./Popover-2a15620c.js";
import { S as Ko, a as Vo } from "./Scrollable-bc459f53.js";
import { S as xo, T as Fo } from "./Table-6dfe532d.js";
import { _ as Wo } from "./Tooltip.vue_vue_type_style_index_0_lang-1df1b3e8.js";
import { onMounted as oe, watchEffect as me, onBeforeUnmount as ve, isRef as pe, computed as A, watch as F, onScopeDispose as ye, defineComponent as $, createVNode as H, renderSlot as b, h as Ce, inject as Z, openBlock as B, createElementBlock as X, unref as o, normalizeClass as h, normalizeStyle as te, createElementVNode as U, toDisplayString as Ee, withCtx as S, createBlock as K, resolveDynamicComponent as be, createCommentVNode as P, getCurrentInstance as ge, ref as I, nextTick as Te, useSlots as Se, provide as we, Teleport as he, Transition as Ae, withDirectives as De, mergeProps as Le, createSlots as ne, vShow as Me } from "vue";
import { k as ke, c as W, t as Be, u as j, j as le, o as J, p as Ie, q as _e, r as Oe, N as x, a as q, d as V, _ as se, l as Ne, s as $e, v as Q, w as Re } from "./base-b0eb9adb.js";
import { E as Ye } from "./index-89580093.js";
import { i as ze, F as He, C as Ue, c as Ge, d as ee, e as Ke, f as Ve } from "./popper-2d1cdbf9.js";
import { g as Xe, u as xe, U as ae, a as Fe } from "./index-8cf906aa.js";
import "./_plugin-vue_export-helper-dad06003.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "./Info-38a17291.js";
import "./datetime-31a2b505.js";
const Pe = (...e) => (t) => {
  e.forEach((l) => {
    ke(l) ? l(t) : l.value = t;
  });
};
var G = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(G || {});
const We = (e, t, l, c) => {
  let s = {
    offsetX: 0,
    offsetY: 0
  };
  const u = (m) => {
    const d = m.clientX, p = m.clientY, { offsetX: y, offsetY: g } = s, f = e.value.getBoundingClientRect(), i = f.left, w = f.top, _ = f.width, R = f.height, O = document.documentElement.clientWidth, Y = document.documentElement.clientHeight, z = -i + y, N = -w + g, D = O - i - _ + y, L = Y - w - R + g, T = (n) => {
      let v = y + n.clientX - d, C = g + n.clientY - p;
      c != null && c.value || (v = Math.min(Math.max(v, z), D), C = Math.min(Math.max(C, N), L)), s = {
        offsetX: v,
        offsetY: C
      }, e.value && (e.value.style.transform = `translate(${W(v)}, ${W(C)})`);
    }, M = () => {
      document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", M);
    };
    document.addEventListener("mousemove", T), document.addEventListener("mouseup", M);
  }, r = () => {
    t.value && e.value && t.value.addEventListener("mousedown", u);
  }, a = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", u);
  };
  oe(() => {
    me(() => {
      l.value ? r() : a();
    });
  }), ve(() => {
    a();
  });
}, je = (e, t = {}) => {
  pe(e) || Be("[useLockscreen]", "You need to pass a ref param to this function");
  const l = t.ns || j("popup"), c = A(() => l.bm("parent", "hidden"));
  if (!le || J(document.body, c.value))
    return;
  let s = 0, u = !1, r = "0";
  const a = () => {
    setTimeout(() => {
      Oe(document == null ? void 0 : document.body, c.value), u && document && (document.body.style.width = r);
    }, 200);
  };
  F(e, (m) => {
    if (!m) {
      a();
      return;
    }
    u = !J(document.body, c.value), u && (r = document.body.style.width), s = Xe(l.namespace.value);
    const d = document.documentElement.clientHeight < document.body.scrollHeight, p = Ie(document.body, "overflowY");
    s > 0 && (d || p === "scroll") && u && (document.body.style.width = `calc(100% - ${s}px)`), _e(document.body, c.value);
  }), ye(() => a());
}, re = (e) => {
  if (!e)
    return { onClick: x, onMousedown: x, onMouseup: x };
  let t = !1, l = !1;
  return { onClick: (r) => {
    t && l && e(r), t = l = !1;
  }, onMousedown: (r) => {
    t = r.target === r.currentTarget;
  }, onMouseup: (r) => {
    l = r.target === r.currentTarget;
  } };
}, qe = q({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: {
    type: Boolean,
    default: !1
  },
  overlayClass: {
    type: V([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: V([String, Number])
  }
}), Ze = {
  click: (e) => e instanceof MouseEvent
}, Je = "overlay";
var Qe = $({
  name: "ElOverlay",
  props: qe,
  emits: Ze,
  setup(e, { slots: t, emit: l }) {
    const c = j(Je), s = (m) => {
      l("click", m);
    }, { onClick: u, onMousedown: r, onMouseup: a } = re(e.customMaskEvent ? void 0 : s);
    return () => e.mask ? H("div", {
      class: [c.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: u,
      onMousedown: r,
      onMouseup: a
    }, [b(t, "default")], G.STYLE | G.CLASS | G.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Ce("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [b(t, "default")]);
  }
});
const eo = Qe, ie = Symbol("dialogInjectionKey"), ue = q({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: ze
  },
  draggable: Boolean,
  overflow: Boolean,
  fullscreen: Boolean,
  showClose: {
    type: Boolean,
    default: !0
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
}), oo = {
  close: () => !0
}, to = ["aria-level"], no = ["aria-label"], lo = ["id"], so = $({ name: "ElDialogContent" }), ao = /* @__PURE__ */ $({
  ...so,
  props: ue,
  emits: oo,
  setup(e) {
    const t = e, { t: l } = xe(), { Close: c } = Ue, { dialogRef: s, headerRef: u, bodyId: r, ns: a, style: m } = Z(ie), { focusTrapRef: d } = Z(He), p = A(() => [
      a.b(),
      a.is("fullscreen", t.fullscreen),
      a.is("draggable", t.draggable),
      a.is("align-center", t.alignCenter),
      { [a.m("center")]: t.center }
    ]), y = Pe(d, s), g = A(() => t.draggable), f = A(() => t.overflow);
    return We(s, u, g, f), (i, w) => (B(), X("div", {
      ref: o(y),
      class: h(o(p)),
      style: te(o(m)),
      tabindex: "-1"
    }, [
      U("header", {
        ref_key: "headerRef",
        ref: u,
        class: h([o(a).e("header"), { "show-close": i.showClose }])
      }, [
        b(i.$slots, "header", {}, () => [
          U("span", {
            role: "heading",
            "aria-level": i.ariaLevel,
            class: h(o(a).e("title"))
          }, Ee(i.title), 11, to)
        ]),
        i.showClose ? (B(), X("button", {
          key: 0,
          "aria-label": o(l)("el.dialog.close"),
          class: h(o(a).e("headerbtn")),
          type: "button",
          onClick: w[0] || (w[0] = (_) => i.$emit("close"))
        }, [
          H(o(Ye), {
            class: h(o(a).e("close"))
          }, {
            default: S(() => [
              (B(), K(be(i.closeIcon || o(c))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, no)) : P("v-if", !0)
      ], 2),
      U("div", {
        id: o(r),
        class: h(o(a).e("body"))
      }, [
        b(i.$slots, "default")
      ], 10, lo),
      i.$slots.footer ? (B(), X("footer", {
        key: 0,
        class: h(o(a).e("footer"))
      }, [
        b(i.$slots, "footer")
      ], 2)) : P("v-if", !0)
    ], 6));
  }
});
var ro = /* @__PURE__ */ se(ao, [["__file", "dialog-content.vue"]]);
const io = q({
  ...ue,
  appendToBody: Boolean,
  appendTo: {
    type: V(String),
    default: "body"
  },
  beforeClose: {
    type: V(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: !0
  },
  closeOnPressEscape: {
    type: Boolean,
    default: !0
  },
  lockScroll: {
    type: Boolean,
    default: !0
  },
  modal: {
    type: Boolean,
    default: !0
  },
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: {
    type: Boolean,
    default: !1
  },
  headerAriaLevel: {
    type: String,
    default: "2"
  }
}), uo = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [ae]: (e) => Ne(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, co = (e, t) => {
  var l;
  const s = ge().emit, { nextZIndex: u } = Ge();
  let r = "";
  const a = ee(), m = ee(), d = I(!1), p = I(!1), y = I(!1), g = I((l = e.zIndex) != null ? l : u());
  let f, i;
  const w = fe("namespace", $e), _ = A(() => {
    const E = {}, k = `--${w.value}-dialog`;
    return e.fullscreen || (e.top && (E[`${k}-margin-top`] = e.top), e.width && (E[`${k}-width`] = W(e.width))), E;
  }), R = A(() => e.alignCenter ? { display: "flex" } : {});
  function O() {
    s("opened");
  }
  function Y() {
    s("closed"), s(ae, !1), e.destroyOnClose && (y.value = !1);
  }
  function z() {
    s("close");
  }
  function N() {
    i == null || i(), f == null || f(), e.openDelay && e.openDelay > 0 ? { stop: f } = Q(() => M(), e.openDelay) : M();
  }
  function D() {
    f == null || f(), i == null || i(), e.closeDelay && e.closeDelay > 0 ? { stop: i } = Q(() => n(), e.closeDelay) : n();
  }
  function L() {
    function E(k) {
      k || (p.value = !0, d.value = !1);
    }
    e.beforeClose ? e.beforeClose(E) : D();
  }
  function T() {
    e.closeOnClickModal && L();
  }
  function M() {
    le && (d.value = !0);
  }
  function n() {
    d.value = !1;
  }
  function v() {
    s("openAutoFocus");
  }
  function C() {
    s("closeAutoFocus");
  }
  function de(E) {
    var k;
    ((k = E.detail) == null ? void 0 : k.focusReason) === "pointer" && E.preventDefault();
  }
  e.lockScroll && je(d);
  function ce() {
    e.closeOnPressEscape && L();
  }
  return F(() => e.modelValue, (E) => {
    E ? (p.value = !1, N(), y.value = !0, g.value = Ke(e.zIndex) ? u() : g.value++, Te(() => {
      s("open"), t.value && (t.value.scrollTop = 0);
    })) : d.value && D();
  }), F(() => e.fullscreen, (E) => {
    t.value && (E ? (r = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = r);
  }), oe(() => {
    e.modelValue && (d.value = !0, y.value = !0, N());
  }), {
    afterEnter: O,
    afterLeave: Y,
    beforeLeave: z,
    handleClose: L,
    onModalClick: T,
    close: D,
    doClose: n,
    onOpenAutoFocus: v,
    onCloseAutoFocus: C,
    onCloseRequested: ce,
    onFocusoutPrevented: de,
    titleId: a,
    bodyId: m,
    closed: p,
    style: _,
    overlayDialogStyle: R,
    rendered: y,
    visible: d,
    zIndex: g
  };
}, fo = ["aria-label", "aria-labelledby", "aria-describedby"], mo = $({
  name: "ElDialog",
  inheritAttrs: !1
}), vo = /* @__PURE__ */ $({
  ...mo,
  props: io,
  emits: uo,
  setup(e, { expose: t }) {
    const l = e, c = Se();
    Fe({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, A(() => !!c.title));
    const s = j("dialog"), u = I(), r = I(), a = I(), {
      visible: m,
      titleId: d,
      bodyId: p,
      style: y,
      overlayDialogStyle: g,
      rendered: f,
      zIndex: i,
      afterEnter: w,
      afterLeave: _,
      beforeLeave: R,
      handleClose: O,
      onModalClick: Y,
      onOpenAutoFocus: z,
      onCloseAutoFocus: N,
      onCloseRequested: D,
      onFocusoutPrevented: L
    } = co(l, u);
    we(ie, {
      dialogRef: u,
      headerRef: r,
      bodyId: p,
      ns: s,
      rendered: f,
      style: y
    });
    const T = re(Y), M = A(() => l.draggable && !l.fullscreen);
    return t({
      visible: m,
      dialogContentRef: a
    }), (n, v) => (B(), K(he, {
      to: n.appendTo,
      disabled: n.appendTo !== "body" ? !1 : !n.appendToBody
    }, [
      H(Ae, {
        name: "dialog-fade",
        onAfterEnter: o(w),
        onAfterLeave: o(_),
        onBeforeLeave: o(R),
        persisted: ""
      }, {
        default: S(() => [
          De(H(o(eo), {
            "custom-mask-event": "",
            mask: n.modal,
            "overlay-class": n.modalClass,
            "z-index": o(i)
          }, {
            default: S(() => [
              U("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": n.title || void 0,
                "aria-labelledby": n.title ? void 0 : o(d),
                "aria-describedby": o(p),
                class: h(`${o(s).namespace.value}-overlay-dialog`),
                style: te(o(g)),
                onClick: v[0] || (v[0] = (...C) => o(T).onClick && o(T).onClick(...C)),
                onMousedown: v[1] || (v[1] = (...C) => o(T).onMousedown && o(T).onMousedown(...C)),
                onMouseup: v[2] || (v[2] = (...C) => o(T).onMouseup && o(T).onMouseup(...C))
              }, [
                H(o(Ve), {
                  loop: "",
                  trapped: o(m),
                  "focus-start-el": "container",
                  onFocusAfterTrapped: o(z),
                  onFocusAfterReleased: o(N),
                  onFocusoutPrevented: o(L),
                  onReleaseRequested: o(D)
                }, {
                  default: S(() => [
                    o(f) ? (B(), K(ro, Le({
                      key: 0,
                      ref_key: "dialogContentRef",
                      ref: a
                    }, n.$attrs, {
                      center: n.center,
                      "align-center": n.alignCenter,
                      "close-icon": n.closeIcon,
                      draggable: o(M),
                      overflow: n.overflow,
                      fullscreen: n.fullscreen,
                      "show-close": n.showClose,
                      title: n.title,
                      "aria-level": n.headerAriaLevel,
                      onClose: o(O)
                    }), ne({
                      header: S(() => [
                        n.$slots.title ? b(n.$slots, "title", { key: 1 }) : b(n.$slots, "header", {
                          key: 0,
                          close: o(O),
                          titleId: o(d),
                          titleClass: o(s).e("title")
                        })
                      ]),
                      default: S(() => [
                        b(n.$slots, "default")
                      ]),
                      _: 2
                    }, [
                      n.$slots.footer ? {
                        name: "footer",
                        fn: S(() => [
                          b(n.$slots, "footer")
                        ])
                      } : void 0
                    ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "show-close", "title", "aria-level", "onClose"])) : P("v-if", !0)
                  ]),
                  _: 3
                }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
              ], 46, fo)
            ]),
            _: 3
          }, 8, ["mask", "overlay-class", "z-index"]), [
            [Me, o(m)]
          ])
        ]),
        _: 3
      }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
    ], 8, ["to", "disabled"]));
  }
});
var po = /* @__PURE__ */ se(vo, [["__file", "dialog.vue"]]);
const yo = Re(po);
const Mo = /* @__PURE__ */ $({
  __name: "Dialog",
  setup(e) {
    return (t, l) => (B(), K(o(yo), {
      class: "defaultModal",
      "align-center": ""
    }, ne({
      default: S(() => [
        b(t.$slots, "default")
      ]),
      _: 2
    }, [
      t.$slots.header ? {
        name: "header",
        fn: S(() => [
          b(t.$slots, "header")
        ]),
        key: "0"
      } : void 0,
      t.$slots.footer ? {
        name: "footer",
        fn: S(() => [
          b(t.$slots, "footer")
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
});
export {
  Io as Align,
  No as Badge,
  _o as Card,
  Mo as Dialog,
  Ro as Form,
  zo as Grid,
  Uo as Popover,
  Ko as Scrollable,
  Vo as ScrollableArea,
  xo as SimpleTable,
  Fo as Table,
  Wo as Tooltip
};
