import { A as Bo, C as Io } from "./Icon-53e685d0.js";
import { B as Oo } from "./Badge-17fbe620.js";
import { G as $o } from "./Form-41926cc5.js";
import { G as Yo } from "./Grid-f3d84a6a.js";
import { P as Ho } from "./Popover-2a15620c.js";
import { S as Go, a as Ko } from "./Scrollable-055852b4.js";
import { S as Xo, T as Po, _ as xo } from "./Tooltip.vue_vue_type_style_index_0_lang-4b835369.js";
import { onMounted as te, watchEffect as ve, onBeforeUnmount as pe, isRef as ye, computed as h, watch as x, onScopeDispose as Ce, ref as D, getCurrentInstance as ne, inject as F, defineComponent as $, createVNode as H, renderSlot as g, h as be, openBlock as I, createElementBlock as X, unref as o, normalizeClass as A, normalizeStyle as le, createElementVNode as U, toDisplayString as ge, withCtx as S, createBlock as K, resolveDynamicComponent as Ee, createCommentVNode as W, nextTick as Te, useSlots as Se, provide as we, Teleport as he, Transition as Ae, withDirectives as De, mergeProps as Le, createSlots as se, vShow as Me } from "vue";
import { j as ke, g as j, t as Be, u as q, k as ae, l as J, m as Ie, n as _e, r as Oe, N as P, c as Z, e as V, E as Ne, _ as re, i as $e, o as Re, p as Q, w as Ye } from "./base-fd1fc9c4.js";
import { g as ze, i as He, b as Ue, F as Ge, C as Ke, U as ie, c as Ve, d as ee, e as Xe, f as Pe, h as xe } from "./popper-141be11c.js";
import "./_plugin-vue_export-helper-dad06003.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "./Info-38a17291.js";
import "./datetime-31a2b505.js";
const Fe = (...e) => (t) => {
  e.forEach((l) => {
    ke(l) ? l(t) : l.value = t;
  });
};
var G = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(G || {});
const We = (e, t, l, d) => {
  let s = {
    offsetX: 0,
    offsetY: 0
  };
  const u = (m) => {
    const c = m.clientX, p = m.clientY, { offsetX: y, offsetY: E } = s, f = e.value.getBoundingClientRect(), i = f.left, w = f.top, _ = f.width, R = f.height, O = document.documentElement.clientWidth, Y = document.documentElement.clientHeight, z = -i + y, N = -w + E, L = O - i - _ + y, M = Y - w - R + E, T = (n) => {
      let v = y + n.clientX - c, C = E + n.clientY - p;
      d != null && d.value || (v = Math.min(Math.max(v, z), L), C = Math.min(Math.max(C, N), M)), s = {
        offsetX: v,
        offsetY: C
      }, e.value && (e.value.style.transform = `translate(${j(v)}, ${j(C)})`);
    }, k = () => {
      document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", k);
    };
    document.addEventListener("mousemove", T), document.addEventListener("mouseup", k);
  }, r = () => {
    t.value && e.value && t.value.addEventListener("mousedown", u);
  }, a = () => {
    t.value && e.value && t.value.removeEventListener("mousedown", u);
  };
  te(() => {
    ve(() => {
      l.value ? r() : a();
    });
  }), pe(() => {
    a();
  });
}, je = (e, t = {}) => {
  ye(e) || Be("[useLockscreen]", "You need to pass a ref param to this function");
  const l = t.ns || q("popup"), d = h(() => l.bm("parent", "hidden"));
  if (!ae || J(document.body, d.value))
    return;
  let s = 0, u = !1, r = "0";
  const a = () => {
    setTimeout(() => {
      Oe(document == null ? void 0 : document.body, d.value), u && document && (document.body.style.width = r);
    }, 200);
  };
  x(e, (m) => {
    if (!m) {
      a();
      return;
    }
    u = !J(document.body, d.value), u && (r = document.body.style.width), s = ze(l.namespace.value);
    const c = document.documentElement.clientHeight < document.body.scrollHeight, p = Ie(document.body, "overflowY");
    s > 0 && (c || p === "scroll") && u && (document.body.style.width = `calc(100% - ${s}px)`), _e(document.body, d.value);
  }), Ce(() => a());
}, ue = (e) => {
  if (!e)
    return { onClick: P, onMousedown: P, onMouseup: P };
  let t = !1, l = !1;
  return { onClick: (r) => {
    t && l && e(r), t = l = !1;
  }, onMousedown: (r) => {
    t = r.target === r.currentTarget;
  }, onMouseup: (r) => {
    l = r.target === r.currentTarget;
  } };
}, qe = Symbol(), oe = D();
function Ze(e, t = void 0) {
  const l = ne() ? F(qe, oe) : oe;
  return e ? h(() => {
    var d, s;
    return (s = (d = l.value) == null ? void 0 : d[e]) != null ? s : t;
  }) : l;
}
const Je = Z({
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
}), Qe = {
  click: (e) => e instanceof MouseEvent
}, eo = "overlay";
var oo = $({
  name: "ElOverlay",
  props: Je,
  emits: Qe,
  setup(e, { slots: t, emit: l }) {
    const d = q(eo), s = (m) => {
      l("click", m);
    }, { onClick: u, onMousedown: r, onMouseup: a } = ue(e.customMaskEvent ? void 0 : s);
    return () => e.mask ? H("div", {
      class: [d.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: u,
      onMousedown: r,
      onMouseup: a
    }, [g(t, "default")], G.STYLE | G.CLASS | G.PROPS, ["onClick", "onMouseup", "onMousedown"]) : be("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [g(t, "default")]);
  }
});
const to = oo, de = Symbol("dialogInjectionKey"), ce = Z({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: He
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
}), no = {
  close: () => !0
}, lo = ["aria-level"], so = ["aria-label"], ao = ["id"], ro = $({ name: "ElDialogContent" }), io = /* @__PURE__ */ $({
  ...ro,
  props: ce,
  emits: no,
  setup(e) {
    const t = e, { t: l } = Ue(), { Close: d } = Ke, { dialogRef: s, headerRef: u, bodyId: r, ns: a, style: m } = F(de), { focusTrapRef: c } = F(Ge), p = h(() => [
      a.b(),
      a.is("fullscreen", t.fullscreen),
      a.is("draggable", t.draggable),
      a.is("align-center", t.alignCenter),
      { [a.m("center")]: t.center }
    ]), y = Fe(c, s), E = h(() => t.draggable), f = h(() => t.overflow);
    return We(s, u, E, f), (i, w) => (I(), X("div", {
      ref: o(y),
      class: A(o(p)),
      style: le(o(m)),
      tabindex: "-1"
    }, [
      U("header", {
        ref_key: "headerRef",
        ref: u,
        class: A([o(a).e("header"), { "show-close": i.showClose }])
      }, [
        g(i.$slots, "header", {}, () => [
          U("span", {
            role: "heading",
            "aria-level": i.ariaLevel,
            class: A(o(a).e("title"))
          }, ge(i.title), 11, lo)
        ]),
        i.showClose ? (I(), X("button", {
          key: 0,
          "aria-label": o(l)("el.dialog.close"),
          class: A(o(a).e("headerbtn")),
          type: "button",
          onClick: w[0] || (w[0] = (_) => i.$emit("close"))
        }, [
          H(o(Ne), {
            class: A(o(a).e("close"))
          }, {
            default: S(() => [
              (I(), K(Ee(i.closeIcon || o(d))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, so)) : W("v-if", !0)
      ], 2),
      U("div", {
        id: o(r),
        class: A(o(a).e("body"))
      }, [
        g(i.$slots, "default")
      ], 10, ao),
      i.$slots.footer ? (I(), X("footer", {
        key: 0,
        class: A(o(a).e("footer"))
      }, [
        g(i.$slots, "footer")
      ], 2)) : W("v-if", !0)
    ], 6));
  }
});
var uo = /* @__PURE__ */ re(io, [["__file", "dialog-content.vue"]]);
const co = Z({
  ...ce,
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
}), fo = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [ie]: (e) => $e(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, mo = (e, t) => {
  var l;
  const s = ne().emit, { nextZIndex: u } = Ve();
  let r = "";
  const a = ee(), m = ee(), c = D(!1), p = D(!1), y = D(!1), E = D((l = e.zIndex) != null ? l : u());
  let f, i;
  const w = Ze("namespace", Re), _ = h(() => {
    const b = {}, B = `--${w.value}-dialog`;
    return e.fullscreen || (e.top && (b[`${B}-margin-top`] = e.top), e.width && (b[`${B}-width`] = j(e.width))), b;
  }), R = h(() => e.alignCenter ? { display: "flex" } : {});
  function O() {
    s("opened");
  }
  function Y() {
    s("closed"), s(ie, !1), e.destroyOnClose && (y.value = !1);
  }
  function z() {
    s("close");
  }
  function N() {
    i == null || i(), f == null || f(), e.openDelay && e.openDelay > 0 ? { stop: f } = Q(() => k(), e.openDelay) : k();
  }
  function L() {
    f == null || f(), i == null || i(), e.closeDelay && e.closeDelay > 0 ? { stop: i } = Q(() => n(), e.closeDelay) : n();
  }
  function M() {
    function b(B) {
      B || (p.value = !0, c.value = !1);
    }
    e.beforeClose ? e.beforeClose(b) : L();
  }
  function T() {
    e.closeOnClickModal && M();
  }
  function k() {
    ae && (c.value = !0);
  }
  function n() {
    c.value = !1;
  }
  function v() {
    s("openAutoFocus");
  }
  function C() {
    s("closeAutoFocus");
  }
  function fe(b) {
    var B;
    ((B = b.detail) == null ? void 0 : B.focusReason) === "pointer" && b.preventDefault();
  }
  e.lockScroll && je(c);
  function me() {
    e.closeOnPressEscape && M();
  }
  return x(() => e.modelValue, (b) => {
    b ? (p.value = !1, N(), y.value = !0, E.value = Xe(e.zIndex) ? u() : E.value++, Te(() => {
      s("open"), t.value && (t.value.scrollTop = 0);
    })) : c.value && L();
  }), x(() => e.fullscreen, (b) => {
    t.value && (b ? (r = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = r);
  }), te(() => {
    e.modelValue && (c.value = !0, y.value = !0, N());
  }), {
    afterEnter: O,
    afterLeave: Y,
    beforeLeave: z,
    handleClose: M,
    onModalClick: T,
    close: L,
    doClose: n,
    onOpenAutoFocus: v,
    onCloseAutoFocus: C,
    onCloseRequested: me,
    onFocusoutPrevented: fe,
    titleId: a,
    bodyId: m,
    closed: p,
    style: _,
    overlayDialogStyle: R,
    rendered: y,
    visible: c,
    zIndex: E
  };
}, vo = ["aria-label", "aria-labelledby", "aria-describedby"], po = $({
  name: "ElDialog",
  inheritAttrs: !1
}), yo = /* @__PURE__ */ $({
  ...po,
  props: co,
  emits: fo,
  setup(e, { expose: t }) {
    const l = e, d = Se();
    Pe({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, h(() => !!d.title));
    const s = q("dialog"), u = D(), r = D(), a = D(), {
      visible: m,
      titleId: c,
      bodyId: p,
      style: y,
      overlayDialogStyle: E,
      rendered: f,
      zIndex: i,
      afterEnter: w,
      afterLeave: _,
      beforeLeave: R,
      handleClose: O,
      onModalClick: Y,
      onOpenAutoFocus: z,
      onCloseAutoFocus: N,
      onCloseRequested: L,
      onFocusoutPrevented: M
    } = mo(l, u);
    we(de, {
      dialogRef: u,
      headerRef: r,
      bodyId: p,
      ns: s,
      rendered: f,
      style: y
    });
    const T = ue(Y), k = h(() => l.draggable && !l.fullscreen);
    return t({
      visible: m,
      dialogContentRef: a
    }), (n, v) => (I(), K(he, {
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
          De(H(o(to), {
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
                "aria-labelledby": n.title ? void 0 : o(c),
                "aria-describedby": o(p),
                class: A(`${o(s).namespace.value}-overlay-dialog`),
                style: le(o(E)),
                onClick: v[0] || (v[0] = (...C) => o(T).onClick && o(T).onClick(...C)),
                onMousedown: v[1] || (v[1] = (...C) => o(T).onMousedown && o(T).onMousedown(...C)),
                onMouseup: v[2] || (v[2] = (...C) => o(T).onMouseup && o(T).onMouseup(...C))
              }, [
                H(o(xe), {
                  loop: "",
                  trapped: o(m),
                  "focus-start-el": "container",
                  onFocusAfterTrapped: o(z),
                  onFocusAfterReleased: o(N),
                  onFocusoutPrevented: o(M),
                  onReleaseRequested: o(L)
                }, {
                  default: S(() => [
                    o(f) ? (I(), K(uo, Le({
                      key: 0,
                      ref_key: "dialogContentRef",
                      ref: a
                    }, n.$attrs, {
                      center: n.center,
                      "align-center": n.alignCenter,
                      "close-icon": n.closeIcon,
                      draggable: o(k),
                      overflow: n.overflow,
                      fullscreen: n.fullscreen,
                      "show-close": n.showClose,
                      title: n.title,
                      "aria-level": n.headerAriaLevel,
                      onClose: o(O)
                    }), se({
                      header: S(() => [
                        n.$slots.title ? g(n.$slots, "title", { key: 1 }) : g(n.$slots, "header", {
                          key: 0,
                          close: o(O),
                          titleId: o(c),
                          titleClass: o(s).e("title")
                        })
                      ]),
                      default: S(() => [
                        g(n.$slots, "default")
                      ]),
                      _: 2
                    }, [
                      n.$slots.footer ? {
                        name: "footer",
                        fn: S(() => [
                          g(n.$slots, "footer")
                        ])
                      } : void 0
                    ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "show-close", "title", "aria-level", "onClose"])) : W("v-if", !0)
                  ]),
                  _: 3
                }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
              ], 46, vo)
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
var Co = /* @__PURE__ */ re(yo, [["__file", "dialog.vue"]]);
const bo = Ye(Co);
const Lo = /* @__PURE__ */ $({
  __name: "Dialog",
  setup(e) {
    return (t, l) => (I(), K(o(bo), {
      class: "defaultModal",
      "align-center": ""
    }, se({
      default: S(() => [
        g(t.$slots, "default")
      ]),
      _: 2
    }, [
      t.$slots.header ? {
        name: "header",
        fn: S(() => [
          g(t.$slots, "header")
        ]),
        key: "0"
      } : void 0,
      t.$slots.footer ? {
        name: "footer",
        fn: S(() => [
          g(t.$slots, "footer")
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
});
export {
  Bo as Align,
  Oo as Badge,
  Io as Card,
  Lo as Dialog,
  $o as Form,
  Yo as Grid,
  Ho as Popover,
  Go as Scrollable,
  Ko as ScrollableArea,
  Xo as SimpleTable,
  Po as Table,
  xo as Tooltip
};
