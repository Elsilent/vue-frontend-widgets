import { defineComponent as R, toRefs as Jr, computed as P, openBlock as D, createElementBlock as W, normalizeClass as Nt, normalizeStyle as nr, renderSlot as ae, getCurrentScope as Qr, onScopeDispose as Yr, unref as v, getCurrentInstance as Ee, onMounted as le, nextTick as xt, watch as L, ref as x, createElementVNode as X, warn as Xr, inject as U, shallowRef as eo, onBeforeUnmount as fe, onBeforeMount as to, provide as Te, withDirectives as rr, cloneVNode as no, Fragment as ro, Text as oo, Comment as ao, createVNode as Be, createBlock as Pe, mergeProps as Ft, withCtx as ue, createCommentVNode as ke, toRef as Le, Teleport as so, Transition as io, vShow as uo, readonly as co, onDeactivated as lo, toDisplayString as fo } from "vue";
import { _ as po } from "./_plugin-vue_export-helper-dad06003.js";
const vo = /* @__PURE__ */ R({
  __name: "Grid",
  props: {
    mobileColumns: {},
    tabletColumns: {},
    columns: {}
  },
  setup(e) {
    const t = e, { mobileColumns: n, tabletColumns: r, columns: o } = Jr(t), a = P(() => ({
      mobile: n !== void 0 && n.value !== void 0,
      tablet: r !== void 0 && r.value !== void 0
    })), s = P(() => ({
      "--mobile-columns": (n == null ? void 0 : n.value) ?? (r == null ? void 0 : r.value) ?? o.value,
      "--tablet-columns": (r == null ? void 0 : r.value) ?? (n == null ? void 0 : n.value) ?? o.value,
      "--columns": o.value
    }));
    return (i, u) => (D(), W("div", {
      class: Nt(["grid", a.value]),
      style: nr(s.value)
    }, [
      ae(i.$slots, "default", {}, void 0, !0)
    ], 6));
  }
});
const Pc = /* @__PURE__ */ po(vo, [["__scopeId", "data-v-64b893e0"]]), re = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e == null ? void 0 : e(o);
  if (n === !1 || !a)
    return t == null ? void 0 : t(o);
};
var gn;
const G = typeof window < "u", go = (e) => typeof e == "string", or = () => {
}, mo = G && ((gn = window == null ? void 0 : window.navigator) == null ? void 0 : gn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function ar(e) {
  return typeof e == "function" ? e() : v(e);
}
function ho(e) {
  return e;
}
function pt(e) {
  return Qr() ? (Yr(e), !0) : !1;
}
function yo(e, t = !0) {
  Ee() ? le(e) : t ? e() : xt(e);
}
function oe(e) {
  var t;
  const n = ar(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const dt = G ? window : void 0;
function Et(...e) {
  let t, n, r, o;
  if (go(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = dt) : [t, n, r, o] = e, !t)
    return or;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((p) => p()), a.length = 0;
  }, i = (p, g, m, h) => (p.addEventListener(g, m, h), () => p.removeEventListener(g, m, h)), u = L(() => [oe(t), ar(o)], ([p, g]) => {
    s(), p && a.push(...n.flatMap((m) => r.map((h) => i(p, m, h, g))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), s();
  };
  return pt(c), c;
}
let mn = !1;
function bo(e, t, n = {}) {
  const { window: r = dt, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  mo && !mn && (mn = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", or)));
  let i = !0;
  const u = (m) => o.some((h) => {
    if (typeof h == "string")
      return Array.from(r.document.querySelectorAll(h)).some((d) => d === m.target || m.composedPath().includes(d));
    {
      const d = oe(h);
      return d && (m.target === d || m.composedPath().includes(d));
    }
  }), p = [
    Et(r, "click", (m) => {
      const h = oe(e);
      if (!(!h || h === m.target || m.composedPath().includes(h))) {
        if (m.detail === 0 && (i = !u(m)), !i) {
          i = !0;
          return;
        }
        t(m);
      }
    }, { passive: !0, capture: a }),
    Et(r, "pointerdown", (m) => {
      const h = oe(e);
      h && (i = !m.composedPath().includes(h) && !u(m));
    }, { passive: !0 }),
    s && Et(r, "blur", (m) => {
      var h;
      const d = oe(e);
      ((h = r.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !(d != null && d.contains(r.document.activeElement)) && t(m);
    })
  ].filter(Boolean);
  return () => p.forEach((m) => m());
}
function sr(e, t = !1) {
  const n = x(), r = () => n.value = !!e();
  return r(), yo(r, t), n;
}
const hn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, yn = "__vueuse_ssr_handlers__";
hn[yn] = hn[yn] || {};
var bn = Object.getOwnPropertySymbols, _o = Object.prototype.hasOwnProperty, wo = Object.prototype.propertyIsEnumerable, Oo = (e, t) => {
  var n = {};
  for (var r in e)
    _o.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && bn)
    for (var r of bn(e))
      t.indexOf(r) < 0 && wo.call(e, r) && (n[r] = e[r]);
  return n;
};
function Cc(e, t, n = {}) {
  const r = n, { window: o = dt } = r, a = Oo(r, ["window"]);
  let s;
  const i = sr(() => o && "ResizeObserver" in o), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = L(() => oe(e), (g) => {
    u(), i.value && o && g && (s = new ResizeObserver(t), s.observe(g, a));
  }, { immediate: !0, flush: "post" }), p = () => {
    u(), c();
  };
  return pt(p), {
    isSupported: i,
    stop: p
  };
}
var _n = Object.getOwnPropertySymbols, Eo = Object.prototype.hasOwnProperty, To = Object.prototype.propertyIsEnumerable, Po = (e, t) => {
  var n = {};
  for (var r in e)
    Eo.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && _n)
    for (var r of _n(e))
      t.indexOf(r) < 0 && To.call(e, r) && (n[r] = e[r]);
  return n;
};
function Sc(e, t, n = {}) {
  const r = n, { window: o = dt } = r, a = Po(r, ["window"]);
  let s;
  const i = sr(() => o && "MutationObserver" in o), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = L(() => oe(e), (g) => {
    u(), i.value && o && g && (s = new MutationObserver(t), s.observe(g, a));
  }, { immediate: !0 }), p = () => {
    u(), c();
  };
  return pt(p), {
    isSupported: i,
    stop: p
  };
}
var wn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(wn || (wn = {}));
var Co = Object.defineProperty, On = Object.getOwnPropertySymbols, So = Object.prototype.hasOwnProperty, Io = Object.prototype.propertyIsEnumerable, En = (e, t, n) => t in e ? Co(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, xo = (e, t) => {
  for (var n in t || (t = {}))
    So.call(t, n) && En(e, n, t[n]);
  if (On)
    for (var n of On(t))
      Io.call(t, n) && En(e, n, t[n]);
  return e;
};
const Ao = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
xo({
  linear: ho
}, Ao);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const st = () => {
}, Ro = Object.prototype.hasOwnProperty, Tn = (e, t) => Ro.call(e, t), $o = Array.isArray, et = (e) => typeof e == "function", vt = (e) => typeof e == "string", Mt = (e) => e !== null && typeof e == "object", No = Object.prototype.toString, Fo = (e) => No.call(e), Ic = (e) => Fo(e).slice(8, -1);
var Mo = typeof global == "object" && global && global.Object === Object && global;
const Lo = Mo;
var jo = typeof self == "object" && self && self.Object === Object && self, Do = Lo || jo || Function("return this")();
const Lt = Do;
var Bo = Lt.Symbol;
const ce = Bo;
var ir = Object.prototype, ko = ir.hasOwnProperty, zo = ir.toString, Fe = ce ? ce.toStringTag : void 0;
function Ho(e) {
  var t = ko.call(e, Fe), n = e[Fe];
  try {
    e[Fe] = void 0;
    var r = !0;
  } catch {
  }
  var o = zo.call(e);
  return r && (t ? e[Fe] = n : delete e[Fe]), o;
}
var Ko = Object.prototype, Uo = Ko.toString;
function Vo(e) {
  return Uo.call(e);
}
var Wo = "[object Null]", qo = "[object Undefined]", Pn = ce ? ce.toStringTag : void 0;
function jt(e) {
  return e == null ? e === void 0 ? qo : Wo : Pn && Pn in Object(e) ? Ho(e) : Vo(e);
}
function Dt(e) {
  return e != null && typeof e == "object";
}
var Zo = "[object Symbol]";
function Bt(e) {
  return typeof e == "symbol" || Dt(e) && jt(e) == Zo;
}
function Go(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Jo = Array.isArray;
const We = Jo;
var Qo = 1 / 0, Cn = ce ? ce.prototype : void 0, Sn = Cn ? Cn.toString : void 0;
function ur(e) {
  if (typeof e == "string")
    return e;
  if (We(e))
    return Go(e, ur) + "";
  if (Bt(e))
    return Sn ? Sn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Qo ? "-0" : t;
}
function it(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Yo(e) {
  return e;
}
var Xo = "[object AsyncFunction]", ea = "[object Function]", ta = "[object GeneratorFunction]", na = "[object Proxy]";
function ra(e) {
  if (!it(e))
    return !1;
  var t = jt(e);
  return t == ea || t == ta || t == Xo || t == na;
}
var oa = Lt["__core-js_shared__"];
const Tt = oa;
var In = function() {
  var e = /[^.]+$/.exec(Tt && Tt.keys && Tt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function aa(e) {
  return !!In && In in e;
}
var sa = Function.prototype, ia = sa.toString;
function ua(e) {
  if (e != null) {
    try {
      return ia.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ca = /[\\^$.*+?()[\]{}|]/g, la = /^\[object .+?Constructor\]$/, fa = Function.prototype, pa = Object.prototype, da = fa.toString, va = pa.hasOwnProperty, ga = RegExp(
  "^" + da.call(va).replace(ca, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ma(e) {
  if (!it(e) || aa(e))
    return !1;
  var t = ra(e) ? ga : la;
  return t.test(ua(e));
}
function ha(e, t) {
  return e == null ? void 0 : e[t];
}
function kt(e, t) {
  var n = ha(e, t);
  return ma(n) ? n : void 0;
}
function ya(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var ba = 800, _a = 16, wa = Date.now;
function Oa(e) {
  var t = 0, n = 0;
  return function() {
    var r = wa(), o = _a - (r - n);
    if (n = r, o > 0) {
      if (++t >= ba)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ea(e) {
  return function() {
    return e;
  };
}
var Ta = function() {
  try {
    var e = kt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ut = Ta;
var Pa = ut ? function(e, t) {
  return ut(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ea(t),
    writable: !0
  });
} : Yo;
const Ca = Pa;
var Sa = Oa(Ca);
const Ia = Sa;
var xa = 9007199254740991, Aa = /^(?:0|[1-9]\d*)$/;
function cr(e, t) {
  var n = typeof e;
  return t = t ?? xa, !!t && (n == "number" || n != "symbol" && Aa.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ra(e, t, n) {
  t == "__proto__" && ut ? ut(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function lr(e, t) {
  return e === t || e !== e && t !== t;
}
var $a = Object.prototype, Na = $a.hasOwnProperty;
function Fa(e, t, n) {
  var r = e[t];
  (!(Na.call(e, t) && lr(r, n)) || n === void 0 && !(t in e)) && Ra(e, t, n);
}
var xn = Math.max;
function Ma(e, t, n) {
  return t = xn(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = xn(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), ya(e, this, i);
  };
}
var La = 9007199254740991;
function ja(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= La;
}
var Da = "[object Arguments]";
function An(e) {
  return Dt(e) && jt(e) == Da;
}
var fr = Object.prototype, Ba = fr.hasOwnProperty, ka = fr.propertyIsEnumerable, za = An(function() {
  return arguments;
}()) ? An : function(e) {
  return Dt(e) && Ba.call(e, "callee") && !ka.call(e, "callee");
};
const pr = za;
var Ha = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ka = /^\w*$/;
function Ua(e, t) {
  if (We(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Bt(e) ? !0 : Ka.test(e) || !Ha.test(e) || t != null && e in Object(t);
}
var Va = kt(Object, "create");
const ze = Va;
function Wa() {
  this.__data__ = ze ? ze(null) : {}, this.size = 0;
}
function qa(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Za = "__lodash_hash_undefined__", Ga = Object.prototype, Ja = Ga.hasOwnProperty;
function Qa(e) {
  var t = this.__data__;
  if (ze) {
    var n = t[e];
    return n === Za ? void 0 : n;
  }
  return Ja.call(t, e) ? t[e] : void 0;
}
var Ya = Object.prototype, Xa = Ya.hasOwnProperty;
function es(e) {
  var t = this.__data__;
  return ze ? t[e] !== void 0 : Xa.call(t, e);
}
var ts = "__lodash_hash_undefined__";
function ns(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ze && t === void 0 ? ts : t, this;
}
function ye(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ye.prototype.clear = Wa;
ye.prototype.delete = qa;
ye.prototype.get = Qa;
ye.prototype.has = es;
ye.prototype.set = ns;
function rs() {
  this.__data__ = [], this.size = 0;
}
function gt(e, t) {
  for (var n = e.length; n--; )
    if (lr(e[n][0], t))
      return n;
  return -1;
}
var os = Array.prototype, as = os.splice;
function ss(e) {
  var t = this.__data__, n = gt(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : as.call(t, n, 1), --this.size, !0;
}
function is(e) {
  var t = this.__data__, n = gt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function us(e) {
  return gt(this.__data__, e) > -1;
}
function cs(e, t) {
  var n = this.__data__, r = gt(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Re(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Re.prototype.clear = rs;
Re.prototype.delete = ss;
Re.prototype.get = is;
Re.prototype.has = us;
Re.prototype.set = cs;
var ls = kt(Lt, "Map");
const fs = ls;
function ps() {
  this.size = 0, this.__data__ = {
    hash: new ye(),
    map: new (fs || Re)(),
    string: new ye()
  };
}
function ds(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function mt(e, t) {
  var n = e.__data__;
  return ds(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function vs(e) {
  var t = mt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function gs(e) {
  return mt(this, e).get(e);
}
function ms(e) {
  return mt(this, e).has(e);
}
function hs(e, t) {
  var n = mt(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function be(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
be.prototype.clear = ps;
be.prototype.delete = vs;
be.prototype.get = gs;
be.prototype.has = ms;
be.prototype.set = hs;
var ys = "Expected a function";
function zt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ys);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (zt.Cache || be)(), n;
}
zt.Cache = be;
var bs = 500;
function _s(e) {
  var t = zt(e, function(r) {
    return n.size === bs && n.clear(), r;
  }), n = t.cache;
  return t;
}
var ws = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Os = /\\(\\)?/g, Es = _s(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ws, function(n, r, o, a) {
    t.push(o ? a.replace(Os, "$1") : r || n);
  }), t;
});
const Ts = Es;
function Ps(e) {
  return e == null ? "" : ur(e);
}
function ht(e, t) {
  return We(e) ? e : Ua(e, t) ? [e] : Ts(Ps(e));
}
var Cs = 1 / 0;
function Ht(e) {
  if (typeof e == "string" || Bt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Cs ? "-0" : t;
}
function Ss(e, t) {
  t = ht(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Ht(t[n++])];
  return n && n == r ? e : void 0;
}
function Is(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Rn = ce ? ce.isConcatSpreadable : void 0;
function xs(e) {
  return We(e) || pr(e) || !!(Rn && e && e[Rn]);
}
function dr(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = xs), o || (o = []); ++a < s; ) {
    var i = e[a];
    t > 0 && n(i) ? t > 1 ? dr(i, t - 1, n, r, o) : Is(o, i) : r || (o[o.length] = i);
  }
  return o;
}
function As(e) {
  var t = e == null ? 0 : e.length;
  return t ? dr(e, 1) : [];
}
function Rs(e) {
  return Ia(Ma(e, void 0, As), e + "");
}
function $s(e, t) {
  return e != null && t in Object(e);
}
function Ns(e, t, n) {
  t = ht(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = Ht(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && ja(o) && cr(s, o) && (We(e) || pr(e)));
}
function Fs(e, t) {
  return e != null && Ns(e, t, $s);
}
function At(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function Kt(e) {
  return e == null;
}
function Ms(e) {
  return e === void 0;
}
function Ls(e, t, n, r) {
  if (!it(e))
    return e;
  t = ht(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var u = Ht(t[o]), c = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (o != s) {
      var p = i[u];
      c = r ? r(p, u, i) : void 0, c === void 0 && (c = it(p) ? p : cr(t[o + 1]) ? [] : {});
    }
    Fa(i, u, c), i = i[u];
  }
  return e;
}
function js(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = Ss(e, s);
    n(i, s) && Ls(a, ht(s, e), i);
  }
  return a;
}
function Ds(e, t) {
  return js(e, t, function(n, r) {
    return Fs(e, r);
  });
}
var Bs = Rs(function(e, t) {
  return e == null ? {} : Ds(e, t);
});
const ks = Bs, xc = (e) => e === void 0, vr = (e) => typeof e == "boolean", He = (e) => typeof e == "number", ct = (e) => typeof Element > "u" ? !1 : e instanceof Element, zs = (e) => vt(e) ? !Number.isNaN(Number(e)) : !1;
class gr extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Ac(e, t) {
  throw new gr(`[${e}] ${t}`);
}
function Ke(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = vt(e) ? new gr(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Hs = "utils/dom/style";
function Rc(e, t = "px") {
  if (!e)
    return "";
  if (He(e) || zs(e))
    return `${e}${t}`;
  if (vt(e))
    return e;
  Ke(Hs, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.3.1 */
var Ks = /* @__PURE__ */ R({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (D(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      X("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), $c = Ks, Us = /* @__PURE__ */ R({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (D(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      X("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      X("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Vs = Us, Ws = /* @__PURE__ */ R({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (D(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      X("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      X("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), qs = Ws, Zs = /* @__PURE__ */ R({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (D(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      X("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Nc = Zs, Gs = /* @__PURE__ */ R({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (D(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      X("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      X("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), Fc = Gs, Js = /* @__PURE__ */ R({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (D(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      X("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Qs = Js, Ys = /* @__PURE__ */ R({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (D(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      X("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Mc = Ys;
const mr = "__epPropKey", M = (e) => e, Xs = (e) => Mt(e) && !!e[mr], Ut = (e, t) => {
  if (!Mt(e) || Xs(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, u = {
    type: a,
    required: !!r,
    validator: n || s ? (c) => {
      let p = !1, g = [];
      if (n && (g = Array.from(n), Tn(e, "default") && g.push(o), p || (p = g.includes(c))), s && (p || (p = s(c))), !p && g.length > 0) {
        const m = [...new Set(g)].map((h) => JSON.stringify(h)).join(", ");
        Xr(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(c)}.`);
      }
      return p;
    } : void 0,
    [mr]: !0
  };
  return Tn(e, "default") && (u.default = o), u;
}, te = (e) => At(Object.entries(e).map(([t, n]) => [
  t,
  Ut(n, t)
])), Lc = M([
  String,
  Object,
  Function
]), jc = {
  validating: Qs,
  success: Vs,
  error: qs
}, hr = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Dc = (e, t) => (e.install = (n) => {
  n.directive(t, e);
}, e), Bc = (e) => (e.install = st, e), lt = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, Pt = "el", ei = "is-", me = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, ti = Symbol("namespaceContextKey"), Vt = (e) => {
  const t = e || (Ee() ? U(ti, x(Pt)) : x(Pt));
  return P(() => v(t) || Pt);
}, qe = (e, t) => {
  const n = Vt(t);
  return {
    namespace: n,
    b: (f = "") => me(n.value, e, f, "", ""),
    e: (f) => f ? me(n.value, e, "", f, "") : "",
    m: (f) => f ? me(n.value, e, "", "", f) : "",
    be: (f, y) => f && y ? me(n.value, e, f, y, "") : "",
    em: (f, y) => f && y ? me(n.value, e, "", f, y) : "",
    bm: (f, y) => f && y ? me(n.value, e, f, "", y) : "",
    bem: (f, y, l) => f && y && l ? me(n.value, e, f, y, l) : "",
    is: (f, ...y) => {
      const l = y.length >= 1 ? y[0] : !0;
      return f && l ? `${ei}${f}` : "";
    },
    cssVar: (f) => {
      const y = {};
      for (const l in f)
        f[l] && (y[`--${n.value}-${l}`] = f[l]);
      return y;
    },
    cssVarName: (f) => `--${n.value}-${f}`,
    cssVarBlock: (f) => {
      const y = {};
      for (const l in f)
        f[l] && (y[`--${n.value}-${e}-${l}`] = f[l]);
      return y;
    },
    cssVarBlockName: (f) => `--${n.value}-${e}-${f}`
  };
}, ni = Ut({
  type: M(Boolean),
  default: null
}), ri = Ut({
  type: M(Function)
}), yr = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: ni,
    [n]: ri
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: u,
      shouldProceed: c,
      onShow: p,
      onHide: g
    }) => {
      const m = Ee(), { emit: h } = m, d = m.props, f = P(() => et(d[n])), y = P(() => d[e] === null), l = (O) => {
        s.value !== !0 && (s.value = !0, i && (i.value = O), et(p) && p(O));
      }, _ = (O) => {
        s.value !== !1 && (s.value = !1, i && (i.value = O), et(g) && g(O));
      }, E = (O) => {
        if (d.disabled === !0 || et(c) && !c())
          return;
        const C = f.value && G;
        C && h(t, !0), (y.value || !C) && l(O);
      }, b = (O) => {
        if (d.disabled === !0 || !G)
          return;
        const C = f.value && G;
        C && h(t, !1), (y.value || !C) && _(O);
      }, T = (O) => {
        vr(O) && (d.disabled && O ? f.value && h(t, !1) : s.value !== O && (O ? l() : _()));
      }, S = () => {
        s.value ? b() : E();
      };
      return L(() => d[e], T), u && m.appContext.config.globalProperties.$route !== void 0 && L(() => ({
        ...m.proxy.$route
      }), () => {
        u.value && s.value && b();
      }), le(() => {
        T(d[e]);
      }), {
        hide: b,
        show: E,
        toggle: S,
        hasUpdateHandler: f
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
};
yr("modelValue");
var H = "top", q = "bottom", Z = "right", K = "left", Wt = "auto", Ze = [H, q, Z, K], Ce = "start", Ue = "end", oi = "clippingParents", br = "viewport", Me = "popper", ai = "reference", $n = Ze.reduce(function(e, t) {
  return e.concat([t + "-" + Ce, t + "-" + Ue]);
}, []), qt = [].concat(Ze, [Wt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ce, t + "-" + Ue]);
}, []), si = "beforeRead", ii = "read", ui = "afterRead", ci = "beforeMain", li = "main", fi = "afterMain", pi = "beforeWrite", di = "write", vi = "afterWrite", gi = [si, ii, ui, ci, li, fi, pi, di, vi];
function ee(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function J(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Se(e) {
  var t = J(e).Element;
  return e instanceof t || e instanceof Element;
}
function V(e) {
  var t = J(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Zt(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = J(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function mi(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !V(a) || !ee(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function hi(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !V(o) || !ee(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(u) {
        o.removeAttribute(u);
      }));
    });
  };
}
var _r = { name: "applyStyles", enabled: !0, phase: "write", fn: mi, effect: hi, requires: ["computeStyles"] };
function Y(e) {
  return e.split("-")[0];
}
var he = Math.max, ft = Math.min, Ie = Math.round;
function xe(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, o = 1;
  if (V(e) && t) {
    var a = e.offsetHeight, s = e.offsetWidth;
    s > 0 && (r = Ie(n.width) / s || 1), a > 0 && (o = Ie(n.height) / a || 1);
  }
  return { width: n.width / r, height: n.height / o, top: n.top / o, right: n.right / r, bottom: n.bottom / o, left: n.left / r, x: n.left / r, y: n.top / o };
}
function Gt(e) {
  var t = xe(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function wr(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Zt(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function se(e) {
  return J(e).getComputedStyle(e);
}
function yi(e) {
  return ["table", "td", "th"].indexOf(ee(e)) >= 0;
}
function pe(e) {
  return ((Se(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function yt(e) {
  return ee(e) === "html" ? e : e.assignedSlot || e.parentNode || (Zt(e) ? e.host : null) || pe(e);
}
function Nn(e) {
  return !V(e) || se(e).position === "fixed" ? null : e.offsetParent;
}
function bi(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && V(e)) {
    var r = se(e);
    if (r.position === "fixed")
      return null;
  }
  var o = yt(e);
  for (Zt(o) && (o = o.host); V(o) && ["html", "body"].indexOf(ee(o)) < 0; ) {
    var a = se(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ge(e) {
  for (var t = J(e), n = Nn(e); n && yi(n) && se(n).position === "static"; )
    n = Nn(n);
  return n && (ee(n) === "html" || ee(n) === "body" && se(n).position === "static") ? t : n || bi(e) || t;
}
function Jt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function je(e, t, n) {
  return he(e, ft(t, n));
}
function _i(e, t, n) {
  var r = je(e, t, n);
  return r > n ? n : r;
}
function Or() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Er(e) {
  return Object.assign({}, Or(), e);
}
function Tr(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var wi = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Er(typeof e != "number" ? e : Tr(e, Ze));
};
function Oi(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Y(n.placement), u = Jt(i), c = [K, Z].indexOf(i) >= 0, p = c ? "height" : "width";
  if (!(!a || !s)) {
    var g = wi(o.padding, n), m = Gt(a), h = u === "y" ? H : K, d = u === "y" ? q : Z, f = n.rects.reference[p] + n.rects.reference[u] - s[u] - n.rects.popper[p], y = s[u] - n.rects.reference[u], l = Ge(a), _ = l ? u === "y" ? l.clientHeight || 0 : l.clientWidth || 0 : 0, E = f / 2 - y / 2, b = g[h], T = _ - m[p] - g[d], S = _ / 2 - m[p] / 2 + E, O = je(b, S, T), C = u;
    n.modifiersData[r] = (t = {}, t[C] = O, t.centerOffset = O - S, t);
  }
}
function Ei(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !wr(t.elements.popper, o) || (t.elements.arrow = o));
}
var Ti = { name: "arrow", enabled: !0, phase: "main", fn: Oi, effect: Ei, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Ae(e) {
  return e.split("-")[1];
}
var Pi = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Ci(e) {
  var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
  return { x: Ie(t * o) / o || 0, y: Ie(n * o) / o || 0 };
}
function Fn(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, u = e.gpuAcceleration, c = e.adaptive, p = e.roundOffsets, g = e.isFixed, m = s.x, h = m === void 0 ? 0 : m, d = s.y, f = d === void 0 ? 0 : d, y = typeof p == "function" ? p({ x: h, y: f }) : { x: h, y: f };
  h = y.x, f = y.y;
  var l = s.hasOwnProperty("x"), _ = s.hasOwnProperty("y"), E = K, b = H, T = window;
  if (c) {
    var S = Ge(n), O = "clientHeight", C = "clientWidth";
    if (S === J(n) && (S = pe(n), se(S).position !== "static" && i === "absolute" && (O = "scrollHeight", C = "scrollWidth")), S = S, o === H || (o === K || o === Z) && a === Ue) {
      b = q;
      var $ = g && S === T && T.visualViewport ? T.visualViewport.height : S[O];
      f -= $ - r.height, f *= u ? 1 : -1;
    }
    if (o === K || (o === H || o === q) && a === Ue) {
      E = Z;
      var I = g && S === T && T.visualViewport ? T.visualViewport.width : S[C];
      h -= I - r.width, h *= u ? 1 : -1;
    }
  }
  var N = Object.assign({ position: i }, c && Pi), A = p === !0 ? Ci({ x: h, y: f }) : { x: h, y: f };
  if (h = A.x, f = A.y, u) {
    var F;
    return Object.assign({}, N, (F = {}, F[b] = _ ? "0" : "", F[E] = l ? "0" : "", F.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + f + "px)" : "translate3d(" + h + "px, " + f + "px, 0)", F));
  }
  return Object.assign({}, N, (t = {}, t[b] = _ ? f + "px" : "", t[E] = l ? h + "px" : "", t.transform = "", t));
}
function Si(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, u = i === void 0 ? !0 : i, c = { placement: Y(t.placement), variation: Ae(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Fn(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Fn(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Pr = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Si, data: {} }, tt = { passive: !0 };
function Ii(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, u = J(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(p) {
    p.addEventListener("scroll", n.update, tt);
  }), i && u.addEventListener("resize", n.update, tt), function() {
    a && c.forEach(function(p) {
      p.removeEventListener("scroll", n.update, tt);
    }), i && u.removeEventListener("resize", n.update, tt);
  };
}
var Cr = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Ii, data: {} }, xi = { left: "right", right: "left", bottom: "top", top: "bottom" };
function at(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return xi[t];
  });
}
var Ai = { start: "end", end: "start" };
function Mn(e) {
  return e.replace(/start|end/g, function(t) {
    return Ai[t];
  });
}
function Qt(e) {
  var t = J(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Yt(e) {
  return xe(pe(e)).left + Qt(e).scrollLeft;
}
function Ri(e) {
  var t = J(e), n = pe(e), r = t.visualViewport, o = n.clientWidth, a = n.clientHeight, s = 0, i = 0;
  return r && (o = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = r.offsetLeft, i = r.offsetTop)), { width: o, height: a, x: s + Yt(e), y: i };
}
function $i(e) {
  var t, n = pe(e), r = Qt(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = he(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = he(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Yt(e), u = -r.scrollTop;
  return se(o || n).direction === "rtl" && (i += he(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: u };
}
function Xt(e) {
  var t = se(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Sr(e) {
  return ["html", "body", "#document"].indexOf(ee(e)) >= 0 ? e.ownerDocument.body : V(e) && Xt(e) ? e : Sr(yt(e));
}
function De(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Sr(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = J(r), s = o ? [a].concat(a.visualViewport || [], Xt(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(De(yt(s)));
}
function Rt(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Ni(e) {
  var t = xe(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Ln(e, t) {
  return t === br ? Rt(Ri(e)) : Se(t) ? Ni(t) : Rt($i(pe(e)));
}
function Fi(e) {
  var t = De(yt(e)), n = ["absolute", "fixed"].indexOf(se(e).position) >= 0, r = n && V(e) ? Ge(e) : e;
  return Se(r) ? t.filter(function(o) {
    return Se(o) && wr(o, r) && ee(o) !== "body";
  }) : [];
}
function Mi(e, t, n) {
  var r = t === "clippingParents" ? Fi(e) : [].concat(t), o = [].concat(r, [n]), a = o[0], s = o.reduce(function(i, u) {
    var c = Ln(e, u);
    return i.top = he(c.top, i.top), i.right = ft(c.right, i.right), i.bottom = ft(c.bottom, i.bottom), i.left = he(c.left, i.left), i;
  }, Ln(e, a));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Ir(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Y(r) : null, a = r ? Ae(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, u;
  switch (o) {
    case H:
      u = { x: s, y: t.y - n.height };
      break;
    case q:
      u = { x: s, y: t.y + t.height };
      break;
    case Z:
      u = { x: t.x + t.width, y: i };
      break;
    case K:
      u = { x: t.x - n.width, y: i };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = o ? Jt(o) : null;
  if (c != null) {
    var p = c === "y" ? "height" : "width";
    switch (a) {
      case Ce:
        u[c] = u[c] - (t[p] / 2 - n[p] / 2);
        break;
      case Ue:
        u[c] = u[c] + (t[p] / 2 - n[p] / 2);
        break;
    }
  }
  return u;
}
function Ve(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.boundary, s = a === void 0 ? oi : a, i = n.rootBoundary, u = i === void 0 ? br : i, c = n.elementContext, p = c === void 0 ? Me : c, g = n.altBoundary, m = g === void 0 ? !1 : g, h = n.padding, d = h === void 0 ? 0 : h, f = Er(typeof d != "number" ? d : Tr(d, Ze)), y = p === Me ? ai : Me, l = e.rects.popper, _ = e.elements[m ? y : p], E = Mi(Se(_) ? _ : _.contextElement || pe(e.elements.popper), s, u), b = xe(e.elements.reference), T = Ir({ reference: b, element: l, strategy: "absolute", placement: o }), S = Rt(Object.assign({}, l, T)), O = p === Me ? S : b, C = { top: E.top - O.top + f.top, bottom: O.bottom - E.bottom + f.bottom, left: E.left - O.left + f.left, right: O.right - E.right + f.right }, $ = e.modifiersData.offset;
  if (p === Me && $) {
    var I = $[o];
    Object.keys(C).forEach(function(N) {
      var A = [Z, q].indexOf(N) >= 0 ? 1 : -1, F = [H, q].indexOf(N) >= 0 ? "y" : "x";
      C[N] += I[F] * A;
    });
  }
  return C;
}
function Li(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, u = n.allowedAutoPlacements, c = u === void 0 ? qt : u, p = Ae(r), g = p ? i ? $n : $n.filter(function(d) {
    return Ae(d) === p;
  }) : Ze, m = g.filter(function(d) {
    return c.indexOf(d) >= 0;
  });
  m.length === 0 && (m = g);
  var h = m.reduce(function(d, f) {
    return d[f] = Ve(e, { placement: f, boundary: o, rootBoundary: a, padding: s })[Y(f)], d;
  }, {});
  return Object.keys(h).sort(function(d, f) {
    return h[d] - h[f];
  });
}
function ji(e) {
  if (Y(e) === Wt)
    return [];
  var t = at(e);
  return [Mn(e), t, Mn(t)];
}
function Di(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, u = n.fallbackPlacements, c = n.padding, p = n.boundary, g = n.rootBoundary, m = n.altBoundary, h = n.flipVariations, d = h === void 0 ? !0 : h, f = n.allowedAutoPlacements, y = t.options.placement, l = Y(y), _ = l === y, E = u || (_ || !d ? [at(y)] : ji(y)), b = [y].concat(E).reduce(function(ve, ne) {
      return ve.concat(Y(ne) === Wt ? Li(t, { placement: ne, boundary: p, rootBoundary: g, padding: c, flipVariations: d, allowedAutoPlacements: f }) : ne);
    }, []), T = t.rects.reference, S = t.rects.popper, O = /* @__PURE__ */ new Map(), C = !0, $ = b[0], I = 0; I < b.length; I++) {
      var N = b[I], A = Y(N), F = Ae(N) === Ce, k = [H, q].indexOf(A) >= 0, B = k ? "width" : "height", j = Ve(t, { placement: N, boundary: p, rootBoundary: g, altBoundary: m, padding: c }), w = k ? F ? Z : K : F ? q : H;
      T[B] > S[B] && (w = at(w));
      var z = at(w), Q = [];
      if (a && Q.push(j[A] <= 0), i && Q.push(j[w] <= 0, j[z] <= 0), Q.every(function(ve) {
        return ve;
      })) {
        $ = N, C = !1;
        break;
      }
      O.set(N, Q);
    }
    if (C)
      for (var Je = d ? 3 : 1, _t = function(ve) {
        var ne = b.find(function(Ye) {
          var Ne = O.get(Ye);
          if (Ne)
            return Ne.slice(0, ve).every(function(_e) {
              return _e;
            });
        });
        if (ne)
          return $ = ne, "break";
      }, $e = Je; $e > 0; $e--) {
        var Qe = _t($e);
        if (Qe === "break")
          break;
      }
    t.placement !== $ && (t.modifiersData[r]._skip = !0, t.placement = $, t.reset = !0);
  }
}
var Bi = { name: "flip", enabled: !0, phase: "main", fn: Di, requiresIfExists: ["offset"], data: { _skip: !1 } };
function jn(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Dn(e) {
  return [H, Z, q, K].some(function(t) {
    return e[t] >= 0;
  });
}
function ki(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Ve(t, { elementContext: "reference" }), i = Ve(t, { altBoundary: !0 }), u = jn(s, r), c = jn(i, o, a), p = Dn(u), g = Dn(c);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: c, isReferenceHidden: p, hasPopperEscaped: g }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": p, "data-popper-escaped": g });
}
var zi = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: ki };
function Hi(e, t, n) {
  var r = Y(e), o = [K, H].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [K, Z].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function Ki(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = qt.reduce(function(p, g) {
    return p[g] = Hi(g, t.rects, a), p;
  }, {}), i = s[t.placement], u = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s;
}
var Ui = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Ki };
function Vi(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Ir({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var xr = { name: "popperOffsets", enabled: !0, phase: "read", fn: Vi, data: {} };
function Wi(e) {
  return e === "x" ? "y" : "x";
}
function qi(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, u = n.boundary, c = n.rootBoundary, p = n.altBoundary, g = n.padding, m = n.tether, h = m === void 0 ? !0 : m, d = n.tetherOffset, f = d === void 0 ? 0 : d, y = Ve(t, { boundary: u, rootBoundary: c, padding: g, altBoundary: p }), l = Y(t.placement), _ = Ae(t.placement), E = !_, b = Jt(l), T = Wi(b), S = t.modifiersData.popperOffsets, O = t.rects.reference, C = t.rects.popper, $ = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f, I = typeof $ == "number" ? { mainAxis: $, altAxis: $ } : Object.assign({ mainAxis: 0, altAxis: 0 }, $), N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, A = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var F, k = b === "y" ? H : K, B = b === "y" ? q : Z, j = b === "y" ? "height" : "width", w = S[b], z = w + y[k], Q = w - y[B], Je = h ? -C[j] / 2 : 0, _t = _ === Ce ? O[j] : C[j], $e = _ === Ce ? -C[j] : -O[j], Qe = t.elements.arrow, ve = h && Qe ? Gt(Qe) : { width: 0, height: 0 }, ne = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Or(), Ye = ne[k], Ne = ne[B], _e = je(0, O[j], ve[j]), Kr = E ? O[j] / 2 - Je - _e - Ye - I.mainAxis : _t - _e - Ye - I.mainAxis, Ur = E ? -O[j] / 2 + Je + _e + Ne + I.mainAxis : $e + _e + Ne + I.mainAxis, wt = t.elements.arrow && Ge(t.elements.arrow), Vr = wt ? b === "y" ? wt.clientTop || 0 : wt.clientLeft || 0 : 0, an = (F = N == null ? void 0 : N[b]) != null ? F : 0, Wr = w + Kr - an - Vr, qr = w + Ur - an, sn = je(h ? ft(z, Wr) : z, w, h ? he(Q, qr) : Q);
      S[b] = sn, A[b] = sn - w;
    }
    if (i) {
      var un, Zr = b === "x" ? H : K, Gr = b === "x" ? q : Z, ge = S[T], Xe = T === "y" ? "height" : "width", cn = ge + y[Zr], ln = ge - y[Gr], Ot = [H, K].indexOf(l) !== -1, fn = (un = N == null ? void 0 : N[T]) != null ? un : 0, pn = Ot ? cn : ge - O[Xe] - C[Xe] - fn + I.altAxis, dn = Ot ? ge + O[Xe] + C[Xe] - fn - I.altAxis : ln, vn = h && Ot ? _i(pn, ge, dn) : je(h ? pn : cn, ge, h ? dn : ln);
      S[T] = vn, A[T] = vn - ge;
    }
    t.modifiersData[r] = A;
  }
}
var Zi = { name: "preventOverflow", enabled: !0, phase: "main", fn: qi, requiresIfExists: ["offset"] };
function Gi(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Ji(e) {
  return e === J(e) || !V(e) ? Qt(e) : Gi(e);
}
function Qi(e) {
  var t = e.getBoundingClientRect(), n = Ie(t.width) / e.offsetWidth || 1, r = Ie(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Yi(e, t, n) {
  n === void 0 && (n = !1);
  var r = V(t), o = V(t) && Qi(t), a = pe(t), s = xe(e, o), i = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (r || !r && !n) && ((ee(t) !== "body" || Xt(a)) && (i = Ji(t)), V(t) ? (u = xe(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : a && (u.x = Yt(a))), { x: s.left + i.scrollLeft - u.x, y: s.top + i.scrollTop - u.y, width: s.width, height: s.height };
}
function Xi(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!n.has(i)) {
        var u = t.get(i);
        u && o(u);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || o(a);
  }), r;
}
function eu(e) {
  var t = Xi(e);
  return gi.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function tu(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function nu(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Bn = { placement: "bottom", modifiers: [], strategy: "absolute" };
function kn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function en(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? Bn : o;
  return function(s, i, u) {
    u === void 0 && (u = a);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Bn, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, p = [], g = !1, m = { state: c, setOptions: function(f) {
      var y = typeof f == "function" ? f(c.options) : f;
      d(), c.options = Object.assign({}, a, c.options, y), c.scrollParents = { reference: Se(s) ? De(s) : s.contextElement ? De(s.contextElement) : [], popper: De(i) };
      var l = eu(nu([].concat(r, c.options.modifiers)));
      return c.orderedModifiers = l.filter(function(_) {
        return _.enabled;
      }), h(), m.update();
    }, forceUpdate: function() {
      if (!g) {
        var f = c.elements, y = f.reference, l = f.popper;
        if (kn(y, l)) {
          c.rects = { reference: Yi(y, Ge(l), c.options.strategy === "fixed"), popper: Gt(l) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(C) {
            return c.modifiersData[C.name] = Object.assign({}, C.data);
          });
          for (var _ = 0; _ < c.orderedModifiers.length; _++) {
            if (c.reset === !0) {
              c.reset = !1, _ = -1;
              continue;
            }
            var E = c.orderedModifiers[_], b = E.fn, T = E.options, S = T === void 0 ? {} : T, O = E.name;
            typeof b == "function" && (c = b({ state: c, options: S, name: O, instance: m }) || c);
          }
        }
      }
    }, update: tu(function() {
      return new Promise(function(f) {
        m.forceUpdate(), f(c);
      });
    }), destroy: function() {
      d(), g = !0;
    } };
    if (!kn(s, i))
      return m;
    m.setOptions(u).then(function(f) {
      !g && u.onFirstUpdate && u.onFirstUpdate(f);
    });
    function h() {
      c.orderedModifiers.forEach(function(f) {
        var y = f.name, l = f.options, _ = l === void 0 ? {} : l, E = f.effect;
        if (typeof E == "function") {
          var b = E({ state: c, name: y, instance: m, options: _ }), T = function() {
          };
          p.push(b || T);
        }
      });
    }
    function d() {
      p.forEach(function(f) {
        return f();
      }), p = [];
    }
    return m;
  };
}
en();
var ru = [Cr, xr, Pr, _r];
en({ defaultModifiers: ru });
var ou = [Cr, xr, Pr, _r, Ui, Bi, Zi, Ti, zi], au = en({ defaultModifiers: ou });
const su = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: u }) => {
      const c = iu(u);
      Object.assign(s.value, c);
    },
    requires: ["computeStyles"]
  }, o = P(() => {
    const { onFirstUpdate: u, placement: c, strategy: p, modifiers: g } = v(n);
    return {
      onFirstUpdate: u,
      placement: c || "bottom",
      strategy: p || "absolute",
      modifiers: [
        ...g || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = eo(), s = x({
    styles: {
      popper: {
        position: v(o).strategy,
        left: "0",
        top: "0"
      },
      arrow: {
        position: "absolute"
      }
    },
    attributes: {}
  }), i = () => {
    a.value && (a.value.destroy(), a.value = void 0);
  };
  return L(o, (u) => {
    const c = v(a);
    c && c.setOptions(u);
  }, {
    deep: !0
  }), L([e, t], ([u, c]) => {
    i(), !(!u || !c) && (a.value = au(u, c, v(o)));
  }), fe(() => {
    i();
  }), {
    state: P(() => {
      var u;
      return { ...((u = v(a)) == null ? void 0 : u.state) || {} };
    }),
    styles: P(() => v(s).styles),
    attributes: P(() => v(s).attributes),
    update: () => {
      var u;
      return (u = v(a)) == null ? void 0 : u.update();
    },
    forceUpdate: () => {
      var u;
      return (u = v(a)) == null ? void 0 : u.forceUpdate();
    },
    instanceRef: P(() => v(a))
  };
};
function iu(e) {
  const t = Object.keys(e.elements), n = At(t.map((o) => [o, e.styles[o] || {}])), r = At(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
function zn() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return pt(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const $t = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, uu = Symbol("elIdInjection"), Ar = () => Ee() ? U(uu, $t) : $t, cu = (e) => {
  const t = Ar();
  !G && t === $t && Ke("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Vt();
  return P(() => v(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let Oe = [];
const Hn = (e) => {
  const t = e;
  t.key === lt.esc && Oe.forEach((n) => n(t));
}, lu = (e) => {
  le(() => {
    Oe.length === 0 && document.addEventListener("keydown", Hn), G && Oe.push(e);
  }), fe(() => {
    Oe = Oe.filter((t) => t !== e), Oe.length === 0 && G && document.removeEventListener("keydown", Hn);
  });
};
let Kn;
const Rr = () => {
  const e = Vt(), t = Ar(), n = P(() => `${e.value}-popper-container-${t.prefix}`), r = P(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, fu = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, pu = () => {
  const { id: e, selector: t } = Rr();
  return to(() => {
    G && (process.env.NODE_ENV === "test" || !Kn && !document.body.querySelector(t.value)) && (Kn = fu(e.value));
  }), {
    id: e,
    selector: t
  };
}, du = te({
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
  }
}), vu = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = zn(), {
    registerTimeout: s,
    cancelTimeout: i
  } = zn();
  return {
    onOpen: (p) => {
      a(() => {
        r(p);
        const g = v(n);
        He(g) && g > 0 && s(() => {
          o(p);
        }, g);
      }, v(e));
    },
    onClose: (p) => {
      i(), a(() => {
        o(p);
      }, v(t));
    }
  };
}, $r = Symbol("elForwardRef"), gu = (e) => {
  Te($r, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, mu = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Un = {
  current: 0
}, Vn = x(0), hu = 2e3, Wn = Symbol("elZIndexContextKey"), yu = Symbol("zIndexContextKey"), bu = (e) => {
  const t = Ee() ? U(Wn, Un) : Un, n = e || (Ee() ? U(yu, void 0) : void 0), r = P(() => {
    const s = v(n);
    return He(s) ? s : hu;
  }), o = P(() => r.value + Vn.value), a = () => (t.current++, Vn.value = t.current, o.value);
  return !G && !U(Wn) && Ke("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
}, _u = te({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Nr = (e) => ks(_u, e);
var de = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const kc = Symbol("formContextKey"), qn = Symbol("formItemContextKey"), tn = Symbol("popper"), Fr = Symbol("popperContent"), wu = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Mr = te({
  role: {
    type: String,
    values: wu,
    default: "tooltip"
  }
}), Ou = R({
  name: "ElPopper",
  inheritAttrs: !1
}), Eu = /* @__PURE__ */ R({
  ...Ou,
  props: Mr,
  setup(e, { expose: t }) {
    const n = e, r = x(), o = x(), a = x(), s = x(), i = P(() => n.role), u = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(u), Te(tn, u), (c, p) => ae(c.$slots, "default");
  }
});
var Tu = /* @__PURE__ */ de(Eu, [["__file", "popper.vue"]]);
const Lr = te({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Pu = R({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Cu = /* @__PURE__ */ R({
  ...Pu,
  props: Lr,
  setup(e, { expose: t }) {
    const n = e, r = qe("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = U(Fr, void 0);
    return L(() => n.arrowOffset, (i) => {
      o.value = i;
    }), fe(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, u) => (D(), W("span", {
      ref_key: "arrowRef",
      ref: a,
      class: Nt(v(r).e("arrow")),
      style: nr(v(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Su = /* @__PURE__ */ de(Cu, [["__file", "arrow.vue"]]);
const Ct = "ElOnlyChild", Iu = R({
  name: Ct,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = U($r), a = mu((r = o == null ? void 0 : o.setForwardRef) != null ? r : st);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i)
        return null;
      if (i.length > 1)
        return Ke(Ct, "requires exact only one valid child."), null;
      const u = jr(i);
      return u ? rr(no(u, n), [[a]]) : (Ke(Ct, "no valid child node found"), null);
    };
  }
});
function jr(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Mt(n))
      switch (n.type) {
        case ao:
          continue;
        case oo:
        case "svg":
          return Zn(n);
        case ro:
          return jr(n.children);
        default:
          return n;
      }
    return Zn(n);
  }
  return null;
}
function Zn(e) {
  const t = qe("only-child");
  return Be("span", {
    class: t.e("content")
  }, [e]);
}
const Dr = te({
  virtualRef: {
    type: M(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: M(Function)
  },
  onMouseleave: {
    type: M(Function)
  },
  onClick: {
    type: M(Function)
  },
  onKeydown: {
    type: M(Function)
  },
  onFocus: {
    type: M(Function)
  },
  onBlur: {
    type: M(Function)
  },
  onContextmenu: {
    type: M(Function)
  },
  id: String,
  open: Boolean
}), xu = R({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Au = /* @__PURE__ */ R({
  ...xu,
  props: Dr,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = U(tn, void 0);
    gu(o);
    const a = P(() => i.value ? n.id : void 0), s = P(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = P(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), u = P(() => i.value ? `${n.open}` : void 0);
    let c;
    return le(() => {
      L(() => n.virtualRef, (p) => {
        p && (o.value = oe(p));
      }, {
        immediate: !0
      }), L(o, (p, g) => {
        c == null || c(), c = void 0, ct(p) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((m) => {
          var h;
          const d = n[m];
          d && (p.addEventListener(m.slice(2).toLowerCase(), d), (h = g == null ? void 0 : g.removeEventListener) == null || h.call(g, m.slice(2).toLowerCase(), d));
        }), c = L([a, s, i, u], (m) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, d) => {
            Kt(m[d]) ? p.removeAttribute(h) : p.setAttribute(h, m[d]);
          });
        }, { immediate: !0 })), ct(g) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((m) => g.removeAttribute(m));
      }, {
        immediate: !0
      });
    }), fe(() => {
      c == null || c(), c = void 0;
    }), t({
      triggerRef: o
    }), (p, g) => p.virtualTriggering ? ke("v-if", !0) : (D(), Pe(v(Iu), Ft({ key: 0 }, p.$attrs, {
      "aria-controls": v(a),
      "aria-describedby": v(s),
      "aria-expanded": v(u),
      "aria-haspopup": v(i)
    }), {
      default: ue(() => [
        ae(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Ru = /* @__PURE__ */ de(Au, [["__file", "trigger.vue"]]);
const St = "focus-trap.focus-after-trapped", It = "focus-trap.focus-after-released", $u = "focus-trap.focusout-prevented", Gn = {
  cancelable: !0,
  bubbles: !1
}, Nu = {
  cancelable: !0,
  bubbles: !1
}, Jn = "focusAfterTrapped", Qn = "focusAfterReleased", Fu = Symbol("elFocusTrap"), nn = x(), bt = x(0), rn = x(0);
let nt = 0;
const Br = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Yn = (e, t) => {
  for (const n of e)
    if (!Mu(n, t))
      return n;
}, Mu = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, Lu = (e) => {
  const t = Br(e), n = Yn(t, e), r = Yn(t.reverse(), e);
  return [n, r];
}, ju = (e) => e instanceof HTMLInputElement && "select" in e, ie = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), rn.value = window.performance.now(), e !== n && ju(e) && t && e.select();
  }
};
function Xn(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const Du = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = Xn(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = Xn(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, Bu = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (ie(r, t), document.activeElement !== n)
      return;
}, er = Du(), ku = () => bt.value > rn.value, rt = () => {
  nn.value = "pointer", bt.value = window.performance.now();
}, tr = () => {
  nn.value = "keyboard", bt.value = window.performance.now();
}, zu = () => (le(() => {
  nt === 0 && (document.addEventListener("mousedown", rt), document.addEventListener("touchstart", rt), document.addEventListener("keydown", tr)), nt++;
}), fe(() => {
  nt--, nt <= 0 && (document.removeEventListener("mousedown", rt), document.removeEventListener("touchstart", rt), document.removeEventListener("keydown", tr));
}), {
  focusReason: nn,
  lastUserFocusTimestamp: bt,
  lastAutomatedFocusTimestamp: rn
}), ot = (e) => new CustomEvent($u, {
  ...Nu,
  detail: e
}), Hu = R({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    Jn,
    Qn,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = x();
    let r, o;
    const { focusReason: a } = zu();
    lu((d) => {
      e.trapped && !s.paused && t("release-requested", d);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (d) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { key: f, altKey: y, ctrlKey: l, metaKey: _, currentTarget: E, shiftKey: b } = d, { loop: T } = e, S = f === lt.tab && !y && !l && !_, O = document.activeElement;
      if (S && O) {
        const C = E, [$, I] = Lu(C);
        if ($ && I) {
          if (!b && O === I) {
            const A = ot({
              focusReason: a.value
            });
            t("focusout-prevented", A), A.defaultPrevented || (d.preventDefault(), T && ie($, !0));
          } else if (b && [$, C].includes(O)) {
            const A = ot({
              focusReason: a.value
            });
            t("focusout-prevented", A), A.defaultPrevented || (d.preventDefault(), T && ie(I, !0));
          }
        } else if (O === C) {
          const A = ot({
            focusReason: a.value
          });
          t("focusout-prevented", A), A.defaultPrevented || d.preventDefault();
        }
      }
    };
    Te(Fu, {
      focusTrapRef: n,
      onKeydown: i
    }), L(() => e.focusTrapEl, (d) => {
      d && (n.value = d);
    }, { immediate: !0 }), L([n], ([d], [f]) => {
      d && (d.addEventListener("keydown", i), d.addEventListener("focusin", p), d.addEventListener("focusout", g)), f && (f.removeEventListener("keydown", i), f.removeEventListener("focusin", p), f.removeEventListener("focusout", g));
    });
    const u = (d) => {
      t(Jn, d);
    }, c = (d) => t(Qn, d), p = (d) => {
      const f = v(n);
      if (!f)
        return;
      const y = d.target, l = d.relatedTarget, _ = y && f.contains(y);
      e.trapped || l && f.contains(l) || (r = l), _ && t("focusin", d), !s.paused && e.trapped && (_ ? o = y : ie(o, !0));
    }, g = (d) => {
      const f = v(n);
      if (!(s.paused || !f))
        if (e.trapped) {
          const y = d.relatedTarget;
          !Kt(y) && !f.contains(y) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const l = ot({
                focusReason: a.value
              });
              t("focusout-prevented", l), l.defaultPrevented || ie(o, !0);
            }
          }, 0);
        } else {
          const y = d.target;
          y && f.contains(y) || t("focusout", d);
        }
    };
    async function m() {
      await xt();
      const d = v(n);
      if (d) {
        er.push(s);
        const f = d.contains(document.activeElement) ? r : document.activeElement;
        if (r = f, !d.contains(f)) {
          const l = new Event(St, Gn);
          d.addEventListener(St, u), d.dispatchEvent(l), l.defaultPrevented || xt(() => {
            let _ = e.focusStartEl;
            vt(_) || (ie(_), document.activeElement !== _ && (_ = "first")), _ === "first" && Bu(Br(d), !0), (document.activeElement === f || _ === "container") && ie(d);
          });
        }
      }
    }
    function h() {
      const d = v(n);
      if (d) {
        d.removeEventListener(St, u);
        const f = new CustomEvent(It, {
          ...Gn,
          detail: {
            focusReason: a.value
          }
        });
        d.addEventListener(It, c), d.dispatchEvent(f), !f.defaultPrevented && (a.value == "keyboard" || !ku() || d.contains(document.activeElement)) && ie(r ?? document.body), d.removeEventListener(It, c), er.remove(s);
      }
    }
    return le(() => {
      e.trapped && m(), L(() => e.trapped, (d) => {
        d ? m() : h();
      });
    }), fe(() => {
      e.trapped && h();
    }), {
      onKeydown: i
    };
  }
});
function Ku(e, t, n, r, o, a) {
  return ae(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Uu = /* @__PURE__ */ de(Hu, [["render", Ku], ["__file", "focus-trap.vue"]]);
const Vu = ["fixed", "absolute"], Wu = te({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: M(Array),
    default: void 0
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: qt,
    default: "bottom"
  },
  popperOptions: {
    type: M(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Vu,
    default: "absolute"
  }
}), kr = te({
  ...Wu,
  id: String,
  style: {
    type: M([String, Array, Object])
  },
  className: {
    type: M([String, Array, Object])
  },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: M([String, Array, Object])
  },
  popperStyle: {
    type: M([String, Array, Object])
  },
  referenceEl: {
    type: M(Object)
  },
  triggerTargetEl: {
    type: M(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...Nr(["ariaLabel"])
}), qu = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Zu = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...Ju(e), ...t]
  };
  return Qu(a, o == null ? void 0 : o.modifiers), a;
}, Gu = (e) => {
  if (G)
    return oe(e);
};
function Ju(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: r } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t ?? 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: r
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n
      }
    }
  ];
}
function Qu(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Yu = 0, Xu = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = U(tn, void 0), a = x(), s = x(), i = P(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), u = P(() => {
    var l;
    const _ = v(a), E = (l = v(s)) != null ? l : Yu;
    return {
      name: "arrow",
      enabled: !Ms(_),
      options: {
        element: _,
        padding: E
      }
    };
  }), c = P(() => ({
    onFirstUpdate: () => {
      d();
    },
    ...Zu(e, [
      v(u),
      v(i)
    ])
  })), p = P(() => Gu(e.referenceEl) || v(r)), { attributes: g, state: m, styles: h, update: d, forceUpdate: f, instanceRef: y } = su(p, n, c);
  return L(y, (l) => t.value = l), le(() => {
    L(() => {
      var l;
      return (l = v(p)) == null ? void 0 : l.getBoundingClientRect();
    }, () => {
      d();
    });
  }), {
    attributes: g,
    arrowRef: a,
    contentRef: n,
    instanceRef: y,
    state: m,
    styles: h,
    role: o,
    forceUpdate: f,
    update: d
  };
}, ec = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = bu(), a = qe("popper"), s = P(() => v(t).popper), i = x(He(e.zIndex) ? e.zIndex : o()), u = P(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), c = P(() => [
    { zIndex: v(i) },
    v(n).popper,
    e.popperStyle || {}
  ]), p = P(() => r.value === "dialog" ? "false" : void 0), g = P(() => v(n).arrow || {});
  return {
    ariaModal: p,
    arrowStyle: g,
    contentAttrs: s,
    contentClass: u,
    contentStyle: c,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = He(e.zIndex) ? e.zIndex : o();
    }
  };
}, tc = (e, t) => {
  const n = x(!1), r = x();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (c) => {
      var p;
      ((p = c.detail) == null ? void 0 : p.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (c) => {
      e.visible && !n.value && (c.target && (r.value = c.target), n.value = !0);
    },
    onFocusoutPrevented: (c) => {
      e.trapping || (c.detail.focusReason === "pointer" && c.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, nc = R({
  name: "ElPopperContent"
}), rc = /* @__PURE__ */ R({
  ...nc,
  props: kr,
  emits: qu,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: u,
      onFocusoutPrevented: c,
      onReleaseRequested: p
    } = tc(r, n), { attributes: g, arrowRef: m, contentRef: h, styles: d, instanceRef: f, role: y, update: l } = Xu(r), {
      ariaModal: _,
      arrowStyle: E,
      contentAttrs: b,
      contentClass: T,
      contentStyle: S,
      updateZIndex: O
    } = ec(r, {
      styles: d,
      attributes: g,
      role: y
    }), C = U(qn, void 0), $ = x();
    Te(Fr, {
      arrowStyle: E,
      arrowRef: m,
      arrowOffset: $
    }), C && (C.addInputId || C.removeInputId) && Te(qn, {
      ...C,
      addInputId: st,
      removeInputId: st
    });
    let I;
    const N = (F = !0) => {
      l(), F && O();
    }, A = () => {
      N(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return le(() => {
      L(() => r.triggerTargetEl, (F, k) => {
        I == null || I(), I = void 0;
        const B = v(F || h.value), j = v(k || h.value);
        ct(B) && (I = L([y, () => r.ariaLabel, _, () => r.id], (w) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((z, Q) => {
            Kt(w[Q]) ? B.removeAttribute(z) : B.setAttribute(z, w[Q]);
          });
        }, { immediate: !0 })), j !== B && ct(j) && ["role", "aria-label", "aria-modal", "id"].forEach((w) => {
          j.removeAttribute(w);
        });
      }, { immediate: !0 }), L(() => r.visible, A, { immediate: !0 });
    }), fe(() => {
      I == null || I(), I = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: f,
      updatePopper: N,
      contentStyle: S
    }), (F, k) => (D(), W("div", Ft({
      ref_key: "contentRef",
      ref: h
    }, v(b), {
      style: v(S),
      class: v(T),
      tabindex: "-1",
      onMouseenter: k[0] || (k[0] = (B) => F.$emit("mouseenter", B)),
      onMouseleave: k[1] || (k[1] = (B) => F.$emit("mouseleave", B))
    }), [
      Be(v(Uu), {
        trapped: v(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": v(h),
        "focus-start-el": v(o),
        onFocusAfterTrapped: v(i),
        onFocusAfterReleased: v(s),
        onFocusin: v(u),
        onFocusoutPrevented: v(c),
        onReleaseRequested: v(p)
      }, {
        default: ue(() => [
          ae(F.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var oc = /* @__PURE__ */ de(rc, [["__file", "content.vue"]]);
const ac = hr(Tu), on = Symbol("elTooltip"), zr = te({
  ...du,
  ...kr,
  appendTo: {
    type: M([String, Object])
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  visible: {
    type: M(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...Nr(["ariaLabel"])
}), Hr = te({
  ...Dr,
  disabled: Boolean,
  trigger: {
    type: M([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: M(Array),
    default: () => [lt.enter, lt.space]
  }
}), {
  useModelToggleProps: sc,
  useModelToggleEmits: ic,
  useModelToggle: uc
} = yr("visible"), cc = te({
  ...Mr,
  ...sc,
  ...zr,
  ...Hr,
  ...Lr,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), lc = [
  ...ic,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], fc = (e, t) => $o(e) ? e.includes(t) : e === t, we = (e, t, n) => (r) => {
  fc(v(e), t) && n(r);
}, pc = R({
  name: "ElTooltipTrigger"
}), dc = /* @__PURE__ */ R({
  ...pc,
  props: Hr,
  setup(e, { expose: t }) {
    const n = e, r = qe("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: u, onToggle: c } = U(on, void 0), p = x(null), g = () => {
      if (v(o) || n.disabled)
        return !0;
    }, m = Le(n, "trigger"), h = re(g, we(m, "hover", i)), d = re(g, we(m, "hover", u)), f = re(g, we(m, "click", (b) => {
      b.button === 0 && c(b);
    })), y = re(g, we(m, "focus", i)), l = re(g, we(m, "focus", u)), _ = re(g, we(m, "contextmenu", (b) => {
      b.preventDefault(), c(b);
    })), E = re(g, (b) => {
      const { code: T } = b;
      n.triggerKeys.includes(T) && (b.preventDefault(), c(b));
    });
    return t({
      triggerRef: p
    }), (b, T) => (D(), Pe(v(Ru), {
      id: v(a),
      "virtual-ref": b.virtualRef,
      open: v(s),
      "virtual-triggering": b.virtualTriggering,
      class: Nt(v(r).e("trigger")),
      onBlur: v(l),
      onClick: v(f),
      onContextmenu: v(_),
      onFocus: v(y),
      onMouseenter: v(h),
      onMouseleave: v(d),
      onKeydown: v(E)
    }, {
      default: ue(() => [
        ae(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var vc = /* @__PURE__ */ de(dc, [["__file", "trigger.vue"]]);
const gc = R({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), mc = /* @__PURE__ */ R({
  ...gc,
  props: zr,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Rr(), o = qe("tooltip"), a = x(null), s = x(!1), {
      controlled: i,
      id: u,
      open: c,
      trigger: p,
      onClose: g,
      onOpen: m,
      onShow: h,
      onHide: d,
      onBeforeShow: f,
      onBeforeHide: y
    } = U(on, void 0), l = P(() => n.transition || `${o.namespace.value}-fade-in-linear`), _ = P(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    fe(() => {
      s.value = !0;
    });
    const E = P(() => v(_) ? !0 : v(c)), b = P(() => n.disabled ? !1 : v(c)), T = P(() => n.appendTo || r.value), S = P(() => {
      var w;
      return (w = n.style) != null ? w : {};
    }), O = P(() => !v(c)), C = () => {
      d();
    }, $ = () => {
      if (v(i))
        return !0;
    }, I = re($, () => {
      n.enterable && v(p) === "hover" && m();
    }), N = re($, () => {
      v(p) === "hover" && g();
    }), A = () => {
      var w, z;
      (z = (w = a.value) == null ? void 0 : w.updatePopper) == null || z.call(w), f == null || f();
    }, F = () => {
      y == null || y();
    }, k = () => {
      h(), j = bo(P(() => {
        var w;
        return (w = a.value) == null ? void 0 : w.popperContentRef;
      }), () => {
        if (v(i))
          return;
        v(p) !== "hover" && g();
      });
    }, B = () => {
      n.virtualTriggering || g();
    };
    let j;
    return L(() => v(c), (w) => {
      w || j == null || j();
    }, {
      flush: "post"
    }), L(() => n.content, () => {
      var w, z;
      (z = (w = a.value) == null ? void 0 : w.updatePopper) == null || z.call(w);
    }), t({
      contentRef: a
    }), (w, z) => (D(), Pe(so, {
      disabled: !w.teleported,
      to: v(T)
    }, [
      Be(io, {
        name: v(l),
        onAfterLeave: C,
        onBeforeEnter: A,
        onAfterEnter: k,
        onBeforeLeave: F
      }, {
        default: ue(() => [
          v(E) ? rr((D(), Pe(v(oc), Ft({
            key: 0,
            id: v(u),
            ref_key: "contentRef",
            ref: a
          }, w.$attrs, {
            "aria-label": w.ariaLabel,
            "aria-hidden": v(O),
            "boundaries-padding": w.boundariesPadding,
            "fallback-placements": w.fallbackPlacements,
            "gpu-acceleration": w.gpuAcceleration,
            offset: w.offset,
            placement: w.placement,
            "popper-options": w.popperOptions,
            strategy: w.strategy,
            effect: w.effect,
            enterable: w.enterable,
            pure: w.pure,
            "popper-class": w.popperClass,
            "popper-style": [w.popperStyle, v(S)],
            "reference-el": w.referenceEl,
            "trigger-target-el": w.triggerTargetEl,
            visible: v(b),
            "z-index": w.zIndex,
            onMouseenter: v(I),
            onMouseleave: v(N),
            onBlur: B,
            onClose: v(g)
          }), {
            default: ue(() => [
              s.value ? ke("v-if", !0) : ae(w.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [uo, v(b)]
          ]) : ke("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var hc = /* @__PURE__ */ de(mc, [["__file", "content.vue"]]);
const yc = ["innerHTML"], bc = { key: 1 }, _c = R({
  name: "ElTooltip"
}), wc = /* @__PURE__ */ R({
  ..._c,
  props: cc,
  emits: lc,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    pu();
    const o = cu(), a = x(), s = x(), i = () => {
      var l;
      const _ = v(a);
      _ && ((l = _.popperInstanceRef) == null || l.update());
    }, u = x(!1), c = x(), { show: p, hide: g, hasUpdateHandler: m } = uc({
      indicator: u,
      toggleReason: c
    }), { onOpen: h, onClose: d } = vu({
      showAfter: Le(r, "showAfter"),
      hideAfter: Le(r, "hideAfter"),
      autoClose: Le(r, "autoClose"),
      open: p,
      close: g
    }), f = P(() => vr(r.visible) && !m.value);
    Te(on, {
      controlled: f,
      id: o,
      open: co(u),
      trigger: Le(r, "trigger"),
      onOpen: (l) => {
        h(l);
      },
      onClose: (l) => {
        d(l);
      },
      onToggle: (l) => {
        v(u) ? d(l) : h(l);
      },
      onShow: () => {
        n("show", c.value);
      },
      onHide: () => {
        n("hide", c.value);
      },
      onBeforeShow: () => {
        n("before-show", c.value);
      },
      onBeforeHide: () => {
        n("before-hide", c.value);
      },
      updatePopper: i
    }), L(() => r.disabled, (l) => {
      l && u.value && (u.value = !1);
    });
    const y = (l) => {
      var _, E;
      const b = (E = (_ = s.value) == null ? void 0 : _.contentRef) == null ? void 0 : E.popperContentRef, T = (l == null ? void 0 : l.relatedTarget) || document.activeElement;
      return b && b.contains(T);
    };
    return lo(() => u.value && g()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: y,
      updatePopper: i,
      onOpen: h,
      onClose: d,
      hide: g
    }), (l, _) => (D(), Pe(v(ac), {
      ref_key: "popperRef",
      ref: a,
      role: l.role
    }, {
      default: ue(() => [
        Be(vc, {
          disabled: l.disabled,
          trigger: l.trigger,
          "trigger-keys": l.triggerKeys,
          "virtual-ref": l.virtualRef,
          "virtual-triggering": l.virtualTriggering
        }, {
          default: ue(() => [
            l.$slots.default ? ae(l.$slots, "default", { key: 0 }) : ke("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        Be(hc, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": l.ariaLabel,
          "boundaries-padding": l.boundariesPadding,
          content: l.content,
          disabled: l.disabled,
          effect: l.effect,
          enterable: l.enterable,
          "fallback-placements": l.fallbackPlacements,
          "hide-after": l.hideAfter,
          "gpu-acceleration": l.gpuAcceleration,
          offset: l.offset,
          persistent: l.persistent,
          "popper-class": l.popperClass,
          "popper-style": l.popperStyle,
          placement: l.placement,
          "popper-options": l.popperOptions,
          pure: l.pure,
          "raw-content": l.rawContent,
          "reference-el": l.referenceEl,
          "trigger-target-el": l.triggerTargetEl,
          "show-after": l.showAfter,
          strategy: l.strategy,
          teleported: l.teleported,
          transition: l.transition,
          "virtual-triggering": l.virtualTriggering,
          "z-index": l.zIndex,
          "append-to": l.appendTo
        }, {
          default: ue(() => [
            ae(l.$slots, "content", {}, () => [
              l.rawContent ? (D(), W("span", {
                key: 0,
                innerHTML: l.content
              }, null, 8, yc)) : (D(), W("span", bc, fo(l.content), 1))
            ]),
            l.showArrow ? (D(), Pe(v(Su), {
              key: 0,
              "arrow-offset": l.arrowOffset
            }, null, 8, ["arrow-offset"])) : ke("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Oc = /* @__PURE__ */ de(wc, [["__file", "tooltip.vue"]]);
const zc = hr(Oc);
export {
  Kt as $,
  ua as A,
  lr as B,
  Ua as C,
  Ht as D,
  zc as E,
  Fs as F,
  Pc as G,
  Yo as H,
  Ke as I,
  At as J,
  Ut as K,
  Re as L,
  fs as M,
  Et as N,
  et as O,
  xc as P,
  kc as Q,
  qn as R,
  ce as S,
  cu as T,
  He as U,
  Nr as V,
  vt as W,
  jc as X,
  Mc as Y,
  Fc as Z,
  de as _,
  zr as a,
  Cc as a0,
  st as a1,
  qs as a2,
  Mt as a3,
  Ac as a4,
  ct as a5,
  Nc as a6,
  $o as a7,
  Ic as a8,
  lt as a9,
  $c as aa,
  qt as ab,
  Sc as ac,
  Bc as ad,
  te as b,
  vr as c,
  M as d,
  qe as e,
  Rc as f,
  hr as g,
  G as h,
  Lc as i,
  Bt as j,
  it as k,
  kt as l,
  ja as m,
  ra as n,
  Dt as o,
  jt as p,
  Lo as q,
  Lt as r,
  We as s,
  pr as t,
  Hr as u,
  cr as v,
  Dc as w,
  Ss as x,
  be as y,
  Is as z
};
