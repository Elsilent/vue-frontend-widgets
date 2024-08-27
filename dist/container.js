import { A as Qo, C as et } from "./Icon-53e685d0.js";
import { B as tt } from "./Badge-17fbe620.js";
import { G as st } from "./Form-41926cc5.js";
import { G as at } from "./Grid-f3d84a6a.js";
import { P as rt } from "./Popover-2a15620c.js";
import { S as ct, a as dt, b as ft, T as vt, _ as mt } from "./Tooltip.vue_vue_type_style_index_0_lang-ab4e97de.js";
import { onMounted as fe, watchEffect as De, onBeforeUnmount as Me, isRef as Ne, watch as Z, onScopeDispose as Ae, defineComponent as Y, createVNode as U, renderSlot as C, h as Le, inject as ne, computed as I, openBlock as L, createElementBlock as q, unref as n, normalizeClass as _, normalizeStyle as ve, createElementVNode as K, toDisplayString as Be, withCtx as S, createBlock as W, resolveDynamicComponent as Ie, createCommentVNode as J, getCurrentInstance as Oe, ref as B, nextTick as Re, useSlots as $e, provide as Ye, Teleport as Ve, Transition as ze, withDirectives as He, mergeProps as Ge, createSlots as me, vShow as Ue } from "vue";
import { i as pe, e as Q, g as Ke, N as X, h as Xe, j as ye, t as Pe, u as oe, k as he, l as se, m as Fe, n as We, r as je, c as te, o as j, E as xe, _ as Ee, p as qe, q as Ze, s as le, w as Je } from "./base-23b650f4.js";
import { g as Qe, i as eo, u as oo, F as to, C as no, U as ge, a as so, b as ae, c as lo, d as ao, e as io, E as ro } from "./popper-34338ba4.js";
import "./_plugin-vue_export-helper-dad06003.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "./Info-38a17291.js";
import "./datetime-31a2b505.js";
const uo = (...e) => (o) => {
  e.forEach((t) => {
    pe(t) ? t(o) : t.value = o;
  });
};
var P = /* @__PURE__ */ ((e) => (e[e.TEXT = 1] = "TEXT", e[e.CLASS = 2] = "CLASS", e[e.STYLE = 4] = "STYLE", e[e.PROPS = 8] = "PROPS", e[e.FULL_PROPS = 16] = "FULL_PROPS", e[e.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", e[e.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", e[e.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", e[e.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", e[e.NEED_PATCH = 512] = "NEED_PATCH", e[e.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", e[e.HOISTED = -1] = "HOISTED", e[e.BAIL = -2] = "BAIL", e))(P || {});
const co = (e, o, t, l) => {
  let s = {
    offsetX: 0,
    offsetY: 0
  };
  const u = (v) => {
    const d = v.clientX, y = v.clientY, { offsetX: h, offsetY: b } = s, f = e.value.getBoundingClientRect(), c = f.left, w = f.top, O = f.width, V = f.height, R = document.documentElement.clientWidth, z = document.documentElement.clientHeight, H = -c + h, $ = -w + b, D = R - c - O + h, M = z - w - V + b, T = (a) => {
      let m = h + a.clientX - d, E = b + a.clientY - y;
      l != null && l.value || (m = Math.min(Math.max(m, H), D), E = Math.min(Math.max(E, $), M)), s = {
        offsetX: m,
        offsetY: E
      }, e.value && (e.value.style.transform = `translate(${Q(m)}, ${Q(E)})`);
    }, N = () => {
      document.removeEventListener("mousemove", T), document.removeEventListener("mouseup", N);
    };
    document.addEventListener("mousemove", T), document.addEventListener("mouseup", N);
  }, i = () => {
    o.value && e.value && o.value.addEventListener("mousedown", u);
  }, r = () => {
    o.value && e.value && o.value.removeEventListener("mousedown", u);
  };
  fe(() => {
    De(() => {
      t.value ? i() : r();
    });
  }), Me(() => {
    r();
  });
};
let fo;
function vo(e, o = fo) {
  o && o.active && o.effects.push(e);
}
const ie = (e) => {
  const o = new Set(e);
  return o.w = 0, o.n = 0, o;
}, Ce = (e) => (e.w & k) > 0, be = (e) => (e.n & k) > 0, mo = ({ deps: e }) => {
  if (e.length)
    for (let o = 0; o < e.length; o++)
      e[o].w |= k;
}, po = (e) => {
  const { deps: o } = e;
  if (o.length) {
    let t = 0;
    for (let l = 0; l < o.length; l++) {
      const s = o[l];
      Ce(s) && !be(s) ? s.delete(e) : o[t++] = s, s.w &= ~k, s.n &= ~k;
    }
    o.length = t;
  }
};
let G = 0, k = 1;
const ee = 30;
let p;
Symbol(process.env.NODE_ENV !== "production" ? "iterate" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class yo {
  constructor(o, t = null, l) {
    this.fn = o, this.scheduler = t, this.active = !0, this.deps = [], this.parent = void 0, vo(this, l);
  }
  run() {
    if (!this.active)
      return this.fn();
    let o = p, t = F;
    for (; o; ) {
      if (o === this)
        return;
      o = o.parent;
    }
    try {
      return this.parent = p, p = this, F = !0, k = 1 << ++G, G <= ee ? mo(this) : re(this), this.fn();
    } finally {
      G <= ee && po(this), k = 1 << --G, p = this.parent, F = t, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    p === this ? this.deferStop = !0 : this.active && (re(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function re(e) {
  const { deps: o } = e;
  if (o.length) {
    for (let t = 0; t < o.length; t++)
      o[t].delete(e);
    o.length = 0;
  }
}
let F = !0;
function ue(e, o) {
  let t = !1;
  G <= ee ? be(e) || (e.n |= k, t = !Ce(e)) : t = !e.has(p), t && (e.add(p), p.deps.push(e), process.env.NODE_ENV !== "production" && p.onTrack && p.onTrack(
    ye(
      {
        effect: p
      },
      o
    )
  ));
}
function ce(e, o) {
  const t = Xe(e) ? e : [...e];
  for (const l of t)
    l.computed && de(l, o);
  for (const l of t)
    l.computed || de(l, o);
}
function de(e, o) {
  (e !== p || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(ye({ effect: e }, o)), e.scheduler ? e.scheduler() : e.run());
}
new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ke)
);
function x(e) {
  const o = e && e.__v_raw;
  return o ? x(o) : e;
}
function ho(e) {
  F && p && (e = x(e), process.env.NODE_ENV !== "production" ? ue(e.dep || (e.dep = ie()), {
    target: e,
    type: "get",
    key: "value"
  }) : ue(e.dep || (e.dep = ie())));
}
function Eo(e, o) {
  e = x(e);
  const t = e.dep;
  t && (process.env.NODE_ENV !== "production" ? ce(t, {
    target: e,
    type: "set",
    key: "value",
    newValue: o
  }) : ce(t));
}
class go {
  constructor(o, t, l, s) {
    this._setter = t, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new yo(o, () => {
      this._dirty || (this._dirty = !0, Eo(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = l;
  }
  get value() {
    const o = x(this);
    return ho(o), (o._dirty || !o._cacheable) && (o._dirty = !1, o._value = o.effect.run()), o._value;
  }
  set value(o) {
    this._setter(o);
  }
}
function Co(e, o, t = !1) {
  let l, s;
  const u = pe(e);
  u ? (l = e, s = process.env.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : X) : (l = e.get, s = e.set);
  const i = new go(l, s, u || !s, t);
  return process.env.NODE_ENV !== "production" && o && !t && (i.effect.onTrack = o.onTrack, i.effect.onTrigger = o.onTrigger), i;
}
const bo = (e, o = {}) => {
  Ne(e) || Pe("[useLockscreen]", "You need to pass a ref param to this function");
  const t = o.ns || oe("popup"), l = Co(() => t.bm("parent", "hidden"));
  if (!he || se(document.body, l.value))
    return;
  let s = 0, u = !1, i = "0";
  const r = () => {
    setTimeout(() => {
      je(document == null ? void 0 : document.body, l.value), u && document && (document.body.style.width = i);
    }, 200);
  };
  Z(e, (v) => {
    if (!v) {
      r();
      return;
    }
    u = !se(document.body, l.value), u && (i = document.body.style.width), s = Qe(t.namespace.value);
    const d = document.documentElement.clientHeight < document.body.scrollHeight, y = Fe(document.body, "overflowY");
    s > 0 && (d || y === "scroll") && u && (document.body.style.width = `calc(100% - ${s}px)`), We(document.body, l.value);
  }), Ae(() => r());
}, Te = (e) => {
  if (!e)
    return { onClick: X, onMousedown: X, onMouseup: X };
  let o = !1, t = !1;
  return { onClick: (i) => {
    o && t && e(i), o = t = !1;
  }, onMousedown: (i) => {
    o = i.target === i.currentTarget;
  }, onMouseup: (i) => {
    t = i.target === i.currentTarget;
  } };
}, To = te({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: {
    type: Boolean,
    default: !1
  },
  overlayClass: {
    type: j([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: j([String, Number])
  }
}), So = {
  click: (e) => e instanceof MouseEvent
}, wo = "overlay";
var _o = Y({
  name: "ElOverlay",
  props: To,
  emits: So,
  setup(e, { slots: o, emit: t }) {
    const l = oe(wo), s = (v) => {
      t("click", v);
    }, { onClick: u, onMousedown: i, onMouseup: r } = Te(e.customMaskEvent ? void 0 : s);
    return () => e.mask ? U("div", {
      class: [l.b(), e.overlayClass],
      style: {
        zIndex: e.zIndex
      },
      onClick: u,
      onMousedown: i,
      onMouseup: r
    }, [C(o, "default")], P.STYLE | P.CLASS | P.PROPS, ["onClick", "onMouseup", "onMousedown"]) : Le("div", {
      class: e.overlayClass,
      style: {
        zIndex: e.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [C(o, "default")]);
  }
});
const ko = _o, Se = Symbol("dialogInjectionKey"), we = te({
  center: Boolean,
  alignCenter: Boolean,
  closeIcon: {
    type: eo
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
}), Do = {
  close: () => !0
}, Mo = ["aria-level"], No = ["aria-label"], Ao = ["id"], Lo = Y({ name: "ElDialogContent" }), Bo = /* @__PURE__ */ Y({
  ...Lo,
  props: we,
  emits: Do,
  setup(e) {
    const o = e, { t } = oo(), { Close: l } = no, { dialogRef: s, headerRef: u, bodyId: i, ns: r, style: v } = ne(Se), { focusTrapRef: d } = ne(to), y = I(() => [
      r.b(),
      r.is("fullscreen", o.fullscreen),
      r.is("draggable", o.draggable),
      r.is("align-center", o.alignCenter),
      { [r.m("center")]: o.center }
    ]), h = uo(d, s), b = I(() => o.draggable), f = I(() => o.overflow);
    return co(s, u, b, f), (c, w) => (L(), q("div", {
      ref: n(h),
      class: _(n(y)),
      style: ve(n(v)),
      tabindex: "-1"
    }, [
      K("header", {
        ref_key: "headerRef",
        ref: u,
        class: _([n(r).e("header"), { "show-close": c.showClose }])
      }, [
        C(c.$slots, "header", {}, () => [
          K("span", {
            role: "heading",
            "aria-level": c.ariaLevel,
            class: _(n(r).e("title"))
          }, Be(c.title), 11, Mo)
        ]),
        c.showClose ? (L(), q("button", {
          key: 0,
          "aria-label": n(t)("el.dialog.close"),
          class: _(n(r).e("headerbtn")),
          type: "button",
          onClick: w[0] || (w[0] = (O) => c.$emit("close"))
        }, [
          U(n(xe), {
            class: _(n(r).e("close"))
          }, {
            default: S(() => [
              (L(), W(Ie(c.closeIcon || n(l))))
            ]),
            _: 1
          }, 8, ["class"])
        ], 10, No)) : J("v-if", !0)
      ], 2),
      K("div", {
        id: n(i),
        class: _(n(r).e("body"))
      }, [
        C(c.$slots, "default")
      ], 10, Ao),
      c.$slots.footer ? (L(), q("footer", {
        key: 0,
        class: _(n(r).e("footer"))
      }, [
        C(c.$slots, "footer")
      ], 2)) : J("v-if", !0)
    ], 6));
  }
});
var Io = /* @__PURE__ */ Ee(Bo, [["__file", "dialog-content.vue"]]);
const Oo = te({
  ...we,
  appendToBody: Boolean,
  appendTo: {
    type: j(String),
    default: "body"
  },
  beforeClose: {
    type: j(Function)
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
}), Ro = {
  open: () => !0,
  opened: () => !0,
  close: () => !0,
  closed: () => !0,
  [ge]: (e) => qe(e),
  openAutoFocus: () => !0,
  closeAutoFocus: () => !0
}, $o = (e, o) => {
  var t;
  const s = Oe().emit, { nextZIndex: u } = so();
  let i = "";
  const r = ae(), v = ae(), d = B(!1), y = B(!1), h = B(!1), b = B((t = e.zIndex) != null ? t : u());
  let f, c;
  const w = lo("namespace", Ze), O = I(() => {
    const g = {}, A = `--${w.value}-dialog`;
    return e.fullscreen || (e.top && (g[`${A}-margin-top`] = e.top), e.width && (g[`${A}-width`] = Q(e.width))), g;
  }), V = I(() => e.alignCenter ? { display: "flex" } : {});
  function R() {
    s("opened");
  }
  function z() {
    s("closed"), s(ge, !1), e.destroyOnClose && (h.value = !1);
  }
  function H() {
    s("close");
  }
  function $() {
    c == null || c(), f == null || f(), e.openDelay && e.openDelay > 0 ? { stop: f } = le(() => N(), e.openDelay) : N();
  }
  function D() {
    f == null || f(), c == null || c(), e.closeDelay && e.closeDelay > 0 ? { stop: c } = le(() => a(), e.closeDelay) : a();
  }
  function M() {
    function g(A) {
      A || (y.value = !0, d.value = !1);
    }
    e.beforeClose ? e.beforeClose(g) : D();
  }
  function T() {
    e.closeOnClickModal && M();
  }
  function N() {
    he && (d.value = !0);
  }
  function a() {
    d.value = !1;
  }
  function m() {
    s("openAutoFocus");
  }
  function E() {
    s("closeAutoFocus");
  }
  function _e(g) {
    var A;
    ((A = g.detail) == null ? void 0 : A.focusReason) === "pointer" && g.preventDefault();
  }
  e.lockScroll && bo(d);
  function ke() {
    e.closeOnPressEscape && M();
  }
  return Z(() => e.modelValue, (g) => {
    g ? (y.value = !1, $(), h.value = !0, b.value = ao(e.zIndex) ? u() : b.value++, Re(() => {
      s("open"), o.value && (o.value.scrollTop = 0);
    })) : d.value && D();
  }), Z(() => e.fullscreen, (g) => {
    o.value && (g ? (i = o.value.style.transform, o.value.style.transform = "") : o.value.style.transform = i);
  }), fe(() => {
    e.modelValue && (d.value = !0, h.value = !0, $());
  }), {
    afterEnter: R,
    afterLeave: z,
    beforeLeave: H,
    handleClose: M,
    onModalClick: T,
    close: D,
    doClose: a,
    onOpenAutoFocus: m,
    onCloseAutoFocus: E,
    onCloseRequested: ke,
    onFocusoutPrevented: _e,
    titleId: r,
    bodyId: v,
    closed: y,
    style: O,
    overlayDialogStyle: V,
    rendered: h,
    visible: d,
    zIndex: b
  };
}, Yo = ["aria-label", "aria-labelledby", "aria-describedby"], Vo = Y({
  name: "ElDialog",
  inheritAttrs: !1
}), zo = /* @__PURE__ */ Y({
  ...Vo,
  props: Oo,
  emits: Ro,
  setup(e, { expose: o }) {
    const t = e, l = $e();
    io({
      scope: "el-dialog",
      from: "the title slot",
      replacement: "the header slot",
      version: "3.0.0",
      ref: "https://element-plus.org/en-US/component/dialog.html#slots"
    }, I(() => !!l.title));
    const s = oe("dialog"), u = B(), i = B(), r = B(), {
      visible: v,
      titleId: d,
      bodyId: y,
      style: h,
      overlayDialogStyle: b,
      rendered: f,
      zIndex: c,
      afterEnter: w,
      afterLeave: O,
      beforeLeave: V,
      handleClose: R,
      onModalClick: z,
      onOpenAutoFocus: H,
      onCloseAutoFocus: $,
      onCloseRequested: D,
      onFocusoutPrevented: M
    } = $o(t, u);
    Ye(Se, {
      dialogRef: u,
      headerRef: i,
      bodyId: y,
      ns: s,
      rendered: f,
      style: h
    });
    const T = Te(z), N = I(() => t.draggable && !t.fullscreen);
    return o({
      visible: v,
      dialogContentRef: r
    }), (a, m) => (L(), W(Ve, {
      to: a.appendTo,
      disabled: a.appendTo !== "body" ? !1 : !a.appendToBody
    }, [
      U(ze, {
        name: "dialog-fade",
        onAfterEnter: n(w),
        onAfterLeave: n(O),
        onBeforeLeave: n(V),
        persisted: ""
      }, {
        default: S(() => [
          He(U(n(ko), {
            "custom-mask-event": "",
            mask: a.modal,
            "overlay-class": a.modalClass,
            "z-index": n(c)
          }, {
            default: S(() => [
              K("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": a.title || void 0,
                "aria-labelledby": a.title ? void 0 : n(d),
                "aria-describedby": n(y),
                class: _(`${n(s).namespace.value}-overlay-dialog`),
                style: ve(n(b)),
                onClick: m[0] || (m[0] = (...E) => n(T).onClick && n(T).onClick(...E)),
                onMousedown: m[1] || (m[1] = (...E) => n(T).onMousedown && n(T).onMousedown(...E)),
                onMouseup: m[2] || (m[2] = (...E) => n(T).onMouseup && n(T).onMouseup(...E))
              }, [
                U(n(ro), {
                  loop: "",
                  trapped: n(v),
                  "focus-start-el": "container",
                  onFocusAfterTrapped: n(H),
                  onFocusAfterReleased: n($),
                  onFocusoutPrevented: n(M),
                  onReleaseRequested: n(D)
                }, {
                  default: S(() => [
                    n(f) ? (L(), W(Io, Ge({
                      key: 0,
                      ref_key: "dialogContentRef",
                      ref: r
                    }, a.$attrs, {
                      center: a.center,
                      "align-center": a.alignCenter,
                      "close-icon": a.closeIcon,
                      draggable: n(N),
                      overflow: a.overflow,
                      fullscreen: a.fullscreen,
                      "show-close": a.showClose,
                      title: a.title,
                      "aria-level": a.headerAriaLevel,
                      onClose: n(R)
                    }), me({
                      header: S(() => [
                        a.$slots.title ? C(a.$slots, "title", { key: 1 }) : C(a.$slots, "header", {
                          key: 0,
                          close: n(R),
                          titleId: n(d),
                          titleClass: n(s).e("title")
                        })
                      ]),
                      default: S(() => [
                        C(a.$slots, "default")
                      ]),
                      _: 2
                    }, [
                      a.$slots.footer ? {
                        name: "footer",
                        fn: S(() => [
                          C(a.$slots, "footer")
                        ])
                      } : void 0
                    ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "show-close", "title", "aria-level", "onClose"])) : J("v-if", !0)
                  ]),
                  _: 3
                }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
              ], 46, Yo)
            ]),
            _: 3
          }, 8, ["mask", "overlay-class", "z-index"]), [
            [Ue, n(v)]
          ])
        ]),
        _: 3
      }, 8, ["onAfterEnter", "onAfterLeave", "onBeforeLeave"])
    ], 8, ["to", "disabled"]));
  }
});
var Ho = /* @__PURE__ */ Ee(zo, [["__file", "dialog.vue"]]);
const Go = Je(Ho);
const qo = /* @__PURE__ */ Y({
  __name: "Dialog",
  setup(e) {
    return (o, t) => (L(), W(n(Go), {
      class: "defaultModal",
      "align-center": ""
    }, me({
      default: S(() => [
        C(o.$slots, "default")
      ]),
      _: 2
    }, [
      o.$slots.header ? {
        name: "header",
        fn: S(() => [
          C(o.$slots, "header")
        ]),
        key: "0"
      } : void 0,
      o.$slots.footer ? {
        name: "footer",
        fn: S(() => [
          C(o.$slots, "footer")
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
});
export {
  Qo as Align,
  tt as Badge,
  et as Card,
  qo as Dialog,
  st as Form,
  at as Grid,
  rt as Popover,
  ct as Scrollable,
  dt as ScrollableArea,
  ft as SimpleTable,
  vt as Table,
  mt as Tooltip
};
