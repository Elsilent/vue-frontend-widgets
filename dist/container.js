import { A as fe } from "./Icon-53e685d0.js";
import { C as No } from "./Icon-53e685d0.js";
import { B as Yo } from "./Badge-17fbe620.js";
import { defineComponent as I, toRefs as me, openBlock as A, createBlock as H, unref as o, withCtx as S, renderSlot as p, onMounted as oe, watchEffect as ve, onBeforeUnmount as pe, isRef as ye, computed as _, watch as F, onScopeDispose as Ce, createVNode as G, h as Ee, inject as Z, createElementBlock as X, normalizeClass as h, normalizeStyle as te, createElementVNode as U, toDisplayString as be, resolveDynamicComponent as ge, createCommentVNode as P, getCurrentInstance as Te, ref as B, nextTick as Se, useSlots as we, provide as he, Teleport as Ae, Transition as _e, withDirectives as De, mergeProps as Le, createSlots as ne, vShow as Me } from "vue";
import { G as Go } from "./Form-41926cc5.js";
import { u as ke } from "./use-global-config-d0f906a0.js";
import { G as Uo } from "./use-global-config-d0f906a0.js";
import { P as Vo } from "./Popover-2a15620c.js";
import { S as xo, a as Fo } from "./Scrollable-bc459f53.js";
import { S as Wo, T as jo } from "./Table-22c09023.js";
import { _ as Zo } from "./Tooltip.vue_vue_type_style_index_0_lang-1df1b3e8.js";
import { k as Be, c as W, t as Ie, u as j, j as le, o as J, p as $e, q as Oe, r as Ne, N as x, a as q, d as V, _ as se, l as Re, s as Ye, v as Q, w as ze } from "./base-b0eb9adb.js";
import { E as Ge } from "./index-89580093.js";
import { i as He, F as Ue, C as Ke, c as Ve, d as ee, e as Xe, f as xe } from "./popper-2d1cdbf9.js";
import { g as Fe, u as Pe, U as ae, a as We } from "./index-8cf906aa.js";
import "./_plugin-vue_export-helper-dad06003.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "./Info-38a17291.js";
import "./datetime-31a2b505.js";
const Bo = /* @__PURE__ */ I({
  __name: "ButtonGroup",
  props: {
    column: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { column: l } = me(t);
    return (d, s) => (A(), H(fe, {
      class: "button-group",
      column: o(l)
    }, {
      default: S(() => [
        p(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["column"]));
  }
});
const je = (...e) => (t) => {
  e.forEach((l) => {
    Be(l) ? l(t) : l.value = t;
  });
};
var K = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(K || {});
const qe = (e, t, l, d) => {
  let s = {
    offsetX: 0,
    offsetY: 0
  };
  const u = (m) => {
    const c = m.clientX, y = m.clientY, { offsetX: C, offsetY: g } = s, f = e.value.getBoundingClientRect(), i = f.left, w = f.top, $ = f.width, R = f.height, O = document.documentElement.clientWidth, Y = document.documentElement.clientHeight, z = -i + C, N = -w + g, D = O - i - $ + C, L = Y - w - R + g, T = (n) => {
      let v = C + n.clientX - c, E = g + n.clientY - y;
      d != null && d.value || (v = Math.min(Math.max(v, z), D), E = Math.min(Math.max(E, N), L)), s = {
        offsetX: v,
        offsetY: E
      }, e.value && (e.value.style.transform = `translate(${W(v)}, ${W(E)})`);
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
    ve(() => {
      l.value ? r() : a();
    });
  }), pe(() => {
    a();
  });
}, Ze = (e, t = {}) => {
  ye(e) || Ie("[useLockscreen]", "You need to pass a ref param to this function");
  const l = t.ns || j("popup"), d = _(() => l.bm("parent", "hidden"));
  if (!le || J(document.body, d.value))
    return;
  let s = 0, u = !1, r = "0";
  const a = () => {
    setTimeout(() => {
      Ne(document == null ? void 0 : document.body, d.value), u && document && (document.body.style.width = r);
    }, 200);
  };
  F(e, (m) => {
    if (!m) {
      a();
      return;
    }
    u = !J(document.body, d.value), u && (r = document.body.style.width), s = Fe(l.namespace.value);
    const c = document.documentElement.clientHeight < document.body.scrollHeight, y = $e(document.body, "overflowY");
    s > 0 && (c || y === "scroll") && u && (document.body.style.width = `calc(100% - ${s}px)`), Oe(document.body, d.value);
  }), Ce(() => a());
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
}, Je = q({
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
var oo = I({
  name: "ElOverlay",
  props: Je,
  emits: Qe,
  setup(e, { slots: t, emit: l }) {
    const d = j(eo), s = (m) => {
      l("click", m);
    }, { onClick: u, onMousedown: r, onMouseup: a } = re(e.customMaskEvent ? void 0 : s);
    return () => e.mask ? G("div", {
      class: [d.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: u,
      onMousedown: r,
      onMouseup: a
    }, [p(t, "default")], K.STYLE | K.CLASS | K.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Ee("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [p(t, "default")]);
  }
});
const to = oo, ie = Symbol("dialogInjectionKey"), ue = q({
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
}, lo = ["aria-level"], so = ["aria-label"], ao = ["id"], ro = I({ name: "ElDialogContent" }), io = /* @__PURE__ */ I({
  ...ro,
  props: ue,
  emits: no,
  setup(e) {
    const t = e, { t: l } = Pe(), { Close: d } = Ke, { dialogRef: s, headerRef: u, bodyId: r, ns: a, style: m } = Z(ie), { focusTrapRef: c } = Z(Ue), y = _(() => [
      a.b(),
      a.is("fullscreen", t.fullscreen),
      a.is("draggable", t.draggable),
      a.is("align-center", t.alignCenter),
      { [a.m("center")]: t.center }
    ]), C = je(c, s), g = _(() => t.draggable), f = _(() => t.overflow);
    return qe(s, u, g, f), (i, w) => (A(), X("div", {
      ref: o(C),
      class: h(o(y)),
      style: te(o(m)),
      tabindex: "-1"
    }, [
      U("header", {
        ref_key: "headerRef",
        ref: u,
        class: h([o(a).e("header"), { "show-close": i.showClose }])
      }, [
        p(i.$slots, "header", {}, () => [
          U("span", {
            role: "heading",
            "aria-level": i.ariaLevel,
            class: h(o(a).e("title"))
          }, be(i.title), 11, lo)
        ]),
        i.showClose ? (A(), X("button", {
          key: 0,
          "aria-label": o(l)("el.dialog.close"),
          class: h(o(a).e("headerbtn")),
          type: "button",
          onClick: w[0] || (w[0] = ($) => i.$emit("close"))
        }, [
          G(o(Ge), {
            class: h(o(a).e("close"))
          }, {
            default: S(() => [
              (A(), H(ge(i.closeIcon || o(d))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, so)) : P("v-if", !0)
      ], 2),
      U("div", {
        id: o(r),
        class: h(o(a).e("body"))
      }, [
        p(i.$slots, "default")
      ], 10, ao),
      i.$slots.footer ? (A(), X("footer", {
        key: 0,
        class: h(o(a).e("footer"))
      }, [
        p(i.$slots, "footer")
      ], 2)) : P("v-if", !0)
    ], 6));
  }
});
var uo = /* @__PURE__ */ se(io, [["__file", "dialog-content.vue"]]);
const co = q({
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
}), fo = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [ae]: (e) => Re(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, mo = (e, t) => {
  var l;
  const s = Te().emit, { nextZIndex: u } = Ve();
  let r = "";
  const a = ee(), m = ee(), c = B(!1), y = B(!1), C = B(!1), g = B((l = e.zIndex) != null ? l : u());
  let f, i;
  const w = ke("namespace", Ye), $ = _(() => {
    const b = {}, k = `--${w.value}-dialog`;
    return e.fullscreen || (e.top && (b[`${k}-margin-top`] = e.top), e.width && (b[`${k}-width`] = W(e.width))), b;
  }), R = _(() => e.alignCenter ? { display: "flex" } : {});
  function O() {
    s("opened");
  }
  function Y() {
    s("closed"), s(ae, !1), e.destroyOnClose && (C.value = !1);
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
    function b(k) {
      k || (y.value = !0, c.value = !1);
    }
    e.beforeClose ? e.beforeClose(b) : D();
  }
  function T() {
    e.closeOnClickModal && L();
  }
  function M() {
    le && (c.value = !0);
  }
  function n() {
    c.value = !1;
  }
  function v() {
    s("openAutoFocus");
  }
  function E() {
    s("closeAutoFocus");
  }
  function de(b) {
    var k;
    ((k = b.detail) == null ? void 0 : k.focusReason) === "pointer" && b.preventDefault();
  }
  e.lockScroll && Ze(c);
  function ce() {
    e.closeOnPressEscape && L();
  }
  return F(() => e.modelValue, (b) => {
    b ? (y.value = !1, N(), C.value = !0, g.value = Xe(e.zIndex) ? u() : g.value++, Se(() => {
      s("open"), t.value && (t.value.scrollTop = 0);
    })) : c.value && D();
  }), F(() => e.fullscreen, (b) => {
    t.value && (b ? (r = t.value.style.transform, t.value.style.transform = "") : t.value.style.transform = r);
  }), oe(() => {
    e.modelValue && (c.value = !0, C.value = !0, N());
  }), {
    afterEnter: O,
    afterLeave: Y,
    beforeLeave: z,
    handleClose: L,
    onModalClick: T,
    close: D,
    doClose: n,
    onOpenAutoFocus: v,
    onCloseAutoFocus: E,
    onCloseRequested: ce,
    onFocusoutPrevented: de,
    titleId: a,
    bodyId: m,
    closed: y,
    style: $,
    overlayDialogStyle: R,
    rendered: C,
    visible: c,
    zIndex: g
  };
}, vo = ["aria-label", "aria-labelledby", "aria-describedby"], po = I({
  name: "ElDialog",
  inheritAttrs: !1
}), yo = /* @__PURE__ */ I({
  ...po,
  props: co,
  emits: fo,
  setup(e, { expose: t }) {
    const l = e, d = we();
    We({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, _(() => !!d.title));
    const s = j("dialog"), u = B(), r = B(), a = B(), {
      visible: m,
      titleId: c,
      bodyId: y,
      style: C,
      overlayDialogStyle: g,
      rendered: f,
      zIndex: i,
      afterEnter: w,
      afterLeave: $,
      beforeLeave: R,
      handleClose: O,
      onModalClick: Y,
      onOpenAutoFocus: z,
      onCloseAutoFocus: N,
      onCloseRequested: D,
      onFocusoutPrevented: L
    } = mo(l, u);
    he(ie, {
      dialogRef: u,
      headerRef: r,
      bodyId: y,
      ns: s,
      rendered: f,
      style: C
    });
    const T = re(Y), M = _(() => l.draggable && !l.fullscreen);
    return t({
      visible: m,
      dialogContentRef: a
    }), (n, v) => (A(), H(Ae, {
      to: n.appendTo,
      disabled: n.appendTo !== "body" ? !1 : !n.appendToBody
    }, [
      G(_e, {
        name: "dialog-fade",
        onAfterEnter: o(w),
        onAfterLeave: o($),
        onBeforeLeave: o(R),
        persisted: ""
      }, {
        default: S(() => [
          De(G(o(to), {
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
                "aria-describedby": o(y),
                class: h(`${o(s).namespace.value}-overlay-dialog`),
                style: te(o(g)),
                onClick: v[0] || (v[0] = (...E) => o(T).onClick && o(T).onClick(...E)),
                onMousedown: v[1] || (v[1] = (...E) => o(T).onMousedown && o(T).onMousedown(...E)),
                onMouseup: v[2] || (v[2] = (...E) => o(T).onMouseup && o(T).onMouseup(...E))
              }, [
                G(o(xe), {
                  loop: "",
                  trapped: o(m),
                  "focus-start-el": "container",
                  onFocusAfterTrapped: o(z),
                  onFocusAfterReleased: o(N),
                  onFocusoutPrevented: o(L),
                  onReleaseRequested: o(D)
                }, {
                  default: S(() => [
                    o(f) ? (A(), H(uo, Le({
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
                        n.$slots.title ? p(n.$slots, "title", { key: 1 }) : p(n.$slots, "header", {
                          key: 0,
                          close: o(O),
                          titleId: o(c),
                          titleClass: o(s).e("title")
                        })
                      ]),
                      default: S(() => [
                        p(n.$slots, "default")
                      ]),
                      _: 2
                    }, [
                      n.$slots.footer ? {
                        name: "footer",
                        fn: S(() => [
                          p(n.$slots, "footer")
                        ])
                      } : void 0
                    ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "show-close", "title", "aria-level", "onClose"])) : P("v-if", !0)
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
var Co = /* @__PURE__ */ se(yo, [["__file", "dialog.vue"]]);
const Eo = ze(Co);
const Io = /* @__PURE__ */ I({
  __name: "Dialog",
  setup(e) {
    return (t, l) => (A(), H(o(Eo), {
      class: "defaultModal",
      "align-center": ""
    }, ne({
      default: S(() => [
        p(t.$slots, "default")
      ]),
      _: 2
    }, [
      t.$slots.header ? {
        name: "header",
        fn: S(() => [
          p(t.$slots, "header")
        ]),
        key: "0"
      } : void 0,
      t.$slots.footer ? {
        name: "footer",
        fn: S(() => [
          p(t.$slots, "footer")
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
});
export {
  fe as Align,
  Yo as Badge,
  Bo as ButtonGroup,
  No as Card,
  Io as Dialog,
  Go as Form,
  Uo as Grid,
  Vo as Popover,
  xo as Scrollable,
  Fo as ScrollableArea,
  Wo as SimpleTable,
  jo as Table,
  Zo as Tooltip
};
