import { getCurrentScope as Qr, onScopeDispose as Yr, unref as v, getCurrentInstance as Ee, onMounted as le, nextTick as xt, ref as x, readonly as nr, watch as M, defineComponent as L, openBlock as D, createElementBlock as G, createElementVNode as X, warn as Xr, inject as V, computed as C, shallowRef as eo, onBeforeUnmount as fe, onBeforeMount as to, provide as Te, renderSlot as ue, normalizeClass as rr, normalizeStyle as no, withDirectives as or, cloneVNode as ro, Fragment as oo, Text as ao, Comment as so, createVNode as Be, createBlock as Ce, mergeProps as Ft, withCtx as ie, createCommentVNode as ke, toRef as Me, Teleport as io, Transition as uo, vShow as co, onDeactivated as lo, toDisplayString as fo } from "vue";
const re = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e == null ? void 0 : e(o);
  if (n === !1 || !a)
    return t == null ? void 0 : t(o);
};
var gn;
const U = typeof window < "u", po = (e) => typeof e == "string", ar = () => {
}, vo = U && ((gn = window == null ? void 0 : window.navigator) == null ? void 0 : gn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Nt(e) {
  return typeof e == "function" ? e() : v(e);
}
function go(e) {
  return e;
}
function We(e) {
  return Qr() ? (Yr(e), !0) : !1;
}
function mo(e, t = !0) {
  Ee() ? le(e) : t ? e() : xt(e);
}
function Pc(e, t, n = {}) {
  const {
    immediate: r = !0
  } = n, o = x(!1);
  let a = null;
  function s() {
    a && (clearTimeout(a), a = null);
  }
  function i() {
    o.value = !1, s();
  }
  function u(...c) {
    s(), o.value = !0, a = setTimeout(() => {
      o.value = !1, a = null, e(...c);
    }, Nt(t));
  }
  return r && (o.value = !0, U && u()), We(i), {
    isPending: nr(o),
    start: u,
    stop: i
  };
}
function oe(e) {
  var t;
  const n = Nt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const dt = U ? window : void 0;
function Et(...e) {
  let t, n, r, o;
  if (po(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = dt) : [t, n, r, o] = e, !t)
    return ar;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((p) => p()), a.length = 0;
  }, i = (p, g, m, h) => (p.addEventListener(g, m, h), () => p.removeEventListener(g, m, h)), u = M(() => [oe(t), Nt(o)], ([p, g]) => {
    s(), p && a.push(...n.flatMap((m) => r.map((h) => i(p, m, h, g))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), s();
  };
  return We(c), c;
}
let mn = !1;
function ho(e, t, n = {}) {
  const { window: r = dt, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  vo && !mn && (mn = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", ar)));
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
  return r(), mo(r, t), n;
}
const hn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, yn = "__vueuse_ssr_handlers__";
hn[yn] = hn[yn] || {};
var bn = Object.getOwnPropertySymbols, yo = Object.prototype.hasOwnProperty, bo = Object.prototype.propertyIsEnumerable, wo = (e, t) => {
  var n = {};
  for (var r in e)
    yo.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && bn)
    for (var r of bn(e))
      t.indexOf(r) < 0 && bo.call(e, r) && (n[r] = e[r]);
  return n;
};
function Sc(e, t, n = {}) {
  const r = n, { window: o = dt } = r, a = wo(r, ["window"]);
  let s;
  const i = sr(() => o && "ResizeObserver" in o), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = M(() => oe(e), (g) => {
    u(), i.value && o && g && (s = new ResizeObserver(t), s.observe(g, a));
  }, { immediate: !0, flush: "post" }), p = () => {
    u(), c();
  };
  return We(p), {
    isSupported: i,
    stop: p
  };
}
var wn = Object.getOwnPropertySymbols, _o = Object.prototype.hasOwnProperty, Oo = Object.prototype.propertyIsEnumerable, Eo = (e, t) => {
  var n = {};
  for (var r in e)
    _o.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && wn)
    for (var r of wn(e))
      t.indexOf(r) < 0 && Oo.call(e, r) && (n[r] = e[r]);
  return n;
};
function Ic(e, t, n = {}) {
  const r = n, { window: o = dt } = r, a = Eo(r, ["window"]);
  let s;
  const i = sr(() => o && "MutationObserver" in o), u = () => {
    s && (s.disconnect(), s = void 0);
  }, c = M(() => oe(e), (g) => {
    u(), i.value && o && g && (s = new MutationObserver(t), s.observe(g, a));
  }, { immediate: !0 }), p = () => {
    u(), c();
  };
  return We(p), {
    isSupported: i,
    stop: p
  };
}
var _n;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(_n || (_n = {}));
var To = Object.defineProperty, On = Object.getOwnPropertySymbols, Co = Object.prototype.hasOwnProperty, Po = Object.prototype.propertyIsEnumerable, En = (e, t, n) => t in e ? To(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, So = (e, t) => {
  for (var n in t || (t = {}))
    Co.call(t, n) && En(e, n, t[n]);
  if (On)
    for (var n of On(t))
      Po.call(t, n) && En(e, n, t[n]);
  return e;
};
const Io = {
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
So({
  linear: go
}, Io);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const it = () => {
}, xo = Object.prototype.hasOwnProperty, Tn = (e, t) => xo.call(e, t), Ao = Array.isArray, tt = (e) => typeof e == "function", vt = (e) => typeof e == "string", Lt = (e) => e !== null && typeof e == "object", Ro = Object.prototype.toString, $o = (e) => Ro.call(e), xc = (e) => $o(e).slice(8, -1), Fo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, No = /-(\w)/g, Lo = Fo((e) => e.replace(No, (t, n) => n ? n.toUpperCase() : ""));
var Mo = typeof global == "object" && global && global.Object === Object && global;
const jo = Mo;
var Do = typeof self == "object" && self && self.Object === Object && self, Bo = jo || Do || Function("return this")();
const Mt = Bo;
var ko = Mt.Symbol;
const ce = ko;
var ir = Object.prototype, zo = ir.hasOwnProperty, Ho = ir.toString, Ne = ce ? ce.toStringTag : void 0;
function Ko(e) {
  var t = zo.call(e, Ne), n = e[Ne];
  try {
    e[Ne] = void 0;
    var r = !0;
  } catch {
  }
  var o = Ho.call(e);
  return r && (t ? e[Ne] = n : delete e[Ne]), o;
}
var Uo = Object.prototype, Vo = Uo.toString;
function Wo(e) {
  return Vo.call(e);
}
var qo = "[object Null]", Zo = "[object Undefined]", Cn = ce ? ce.toStringTag : void 0;
function jt(e) {
  return e == null ? e === void 0 ? Zo : qo : Cn && Cn in Object(e) ? Ko(e) : Wo(e);
}
function Dt(e) {
  return e != null && typeof e == "object";
}
var Go = "[object Symbol]";
function Bt(e) {
  return typeof e == "symbol" || Dt(e) && jt(e) == Go;
}
function Jo(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Qo = Array.isArray;
const qe = Qo;
var Yo = 1 / 0, Pn = ce ? ce.prototype : void 0, Sn = Pn ? Pn.toString : void 0;
function ur(e) {
  if (typeof e == "string")
    return e;
  if (qe(e))
    return Jo(e, ur) + "";
  if (Bt(e))
    return Sn ? Sn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Yo ? "-0" : t;
}
function ut(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Xo(e) {
  return e;
}
var ea = "[object AsyncFunction]", ta = "[object Function]", na = "[object GeneratorFunction]", ra = "[object Proxy]";
function oa(e) {
  if (!ut(e))
    return !1;
  var t = jt(e);
  return t == ta || t == na || t == ea || t == ra;
}
var aa = Mt["__core-js_shared__"];
const Tt = aa;
var In = function() {
  var e = /[^.]+$/.exec(Tt && Tt.keys && Tt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function sa(e) {
  return !!In && In in e;
}
var ia = Function.prototype, ua = ia.toString;
function ca(e) {
  if (e != null) {
    try {
      return ua.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var la = /[\\^$.*+?()[\]{}|]/g, fa = /^\[object .+?Constructor\]$/, pa = Function.prototype, da = Object.prototype, va = pa.toString, ga = da.hasOwnProperty, ma = RegExp(
  "^" + va.call(ga).replace(la, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ha(e) {
  if (!ut(e) || sa(e))
    return !1;
  var t = oa(e) ? ma : fa;
  return t.test(ca(e));
}
function ya(e, t) {
  return e == null ? void 0 : e[t];
}
function kt(e, t) {
  var n = ya(e, t);
  return ha(n) ? n : void 0;
}
function ba(e, t, n) {
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
var wa = 800, _a = 16, Oa = Date.now;
function Ea(e) {
  var t = 0, n = 0;
  return function() {
    var r = Oa(), o = _a - (r - n);
    if (n = r, o > 0) {
      if (++t >= wa)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ta(e) {
  return function() {
    return e;
  };
}
var Ca = function() {
  try {
    var e = kt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ct = Ca;
var Pa = ct ? function(e, t) {
  return ct(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ta(t),
    writable: !0
  });
} : Xo;
const Sa = Pa;
var Ia = Ea(Sa);
const xa = Ia;
var Aa = 9007199254740991, Ra = /^(?:0|[1-9]\d*)$/;
function cr(e, t) {
  var n = typeof e;
  return t = t ?? Aa, !!t && (n == "number" || n != "symbol" && Ra.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function $a(e, t, n) {
  t == "__proto__" && ct ? ct(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function lr(e, t) {
  return e === t || e !== e && t !== t;
}
var Fa = Object.prototype, Na = Fa.hasOwnProperty;
function La(e, t, n) {
  var r = e[t];
  (!(Na.call(e, t) && lr(r, n)) || n === void 0 && !(t in e)) && $a(e, t, n);
}
var xn = Math.max;
function Ma(e, t, n) {
  return t = xn(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = xn(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), ba(e, this, i);
  };
}
var ja = 9007199254740991;
function Da(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ja;
}
var Ba = "[object Arguments]";
function An(e) {
  return Dt(e) && jt(e) == Ba;
}
var fr = Object.prototype, ka = fr.hasOwnProperty, za = fr.propertyIsEnumerable, Ha = An(function() {
  return arguments;
}()) ? An : function(e) {
  return Dt(e) && ka.call(e, "callee") && !za.call(e, "callee");
};
const pr = Ha;
var Ka = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ua = /^\w*$/;
function Va(e, t) {
  if (qe(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Bt(e) ? !0 : Ua.test(e) || !Ka.test(e) || t != null && e in Object(t);
}
var Wa = kt(Object, "create");
const ze = Wa;
function qa() {
  this.__data__ = ze ? ze(null) : {}, this.size = 0;
}
function Za(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ga = "__lodash_hash_undefined__", Ja = Object.prototype, Qa = Ja.hasOwnProperty;
function Ya(e) {
  var t = this.__data__;
  if (ze) {
    var n = t[e];
    return n === Ga ? void 0 : n;
  }
  return Qa.call(t, e) ? t[e] : void 0;
}
var Xa = Object.prototype, es = Xa.hasOwnProperty;
function ts(e) {
  var t = this.__data__;
  return ze ? t[e] !== void 0 : es.call(t, e);
}
var ns = "__lodash_hash_undefined__";
function rs(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ze && t === void 0 ? ns : t, this;
}
function ye(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ye.prototype.clear = qa;
ye.prototype.delete = Za;
ye.prototype.get = Ya;
ye.prototype.has = ts;
ye.prototype.set = rs;
function os() {
  this.__data__ = [], this.size = 0;
}
function gt(e, t) {
  for (var n = e.length; n--; )
    if (lr(e[n][0], t))
      return n;
  return -1;
}
var as = Array.prototype, ss = as.splice;
function is(e) {
  var t = this.__data__, n = gt(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : ss.call(t, n, 1), --this.size, !0;
}
function us(e) {
  var t = this.__data__, n = gt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function cs(e) {
  return gt(this.__data__, e) > -1;
}
function ls(e, t) {
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
Re.prototype.clear = os;
Re.prototype.delete = is;
Re.prototype.get = us;
Re.prototype.has = cs;
Re.prototype.set = ls;
var fs = kt(Mt, "Map");
const ps = fs;
function ds() {
  this.size = 0, this.__data__ = {
    hash: new ye(),
    map: new (ps || Re)(),
    string: new ye()
  };
}
function vs(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function mt(e, t) {
  var n = e.__data__;
  return vs(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function gs(e) {
  var t = mt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ms(e) {
  return mt(this, e).get(e);
}
function hs(e) {
  return mt(this, e).has(e);
}
function ys(e, t) {
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
be.prototype.clear = ds;
be.prototype.delete = gs;
be.prototype.get = ms;
be.prototype.has = hs;
be.prototype.set = ys;
var bs = "Expected a function";
function zt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(bs);
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
var ws = 500;
function _s(e) {
  var t = zt(e, function(r) {
    return n.size === ws && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Os = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Es = /\\(\\)?/g, Ts = _s(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Os, function(n, r, o, a) {
    t.push(o ? a.replace(Es, "$1") : r || n);
  }), t;
});
const Cs = Ts;
function Ps(e) {
  return e == null ? "" : ur(e);
}
function ht(e, t) {
  return qe(e) ? e : Va(e, t) ? [e] : Cs(Ps(e));
}
var Ss = 1 / 0;
function Ht(e) {
  if (typeof e == "string" || Bt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Ss ? "-0" : t;
}
function Is(e, t) {
  t = ht(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Ht(t[n++])];
  return n && n == r ? e : void 0;
}
function xs(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Rn = ce ? ce.isConcatSpreadable : void 0;
function As(e) {
  return qe(e) || pr(e) || !!(Rn && e && e[Rn]);
}
function dr(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = As), o || (o = []); ++a < s; ) {
    var i = e[a];
    t > 0 && n(i) ? t > 1 ? dr(i, t - 1, n, r, o) : xs(o, i) : r || (o[o.length] = i);
  }
  return o;
}
function Rs(e) {
  var t = e == null ? 0 : e.length;
  return t ? dr(e, 1) : [];
}
function $s(e) {
  return xa(Ma(e, void 0, Rs), e + "");
}
function Fs(e, t) {
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
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Da(o) && cr(s, o) && (qe(e) || pr(e)));
}
function Ls(e, t) {
  return e != null && Ns(e, t, Fs);
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
function js(e, t, n, r) {
  if (!ut(e))
    return e;
  t = ht(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var u = Ht(t[o]), c = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (o != s) {
      var p = i[u];
      c = r ? r(p, u, i) : void 0, c === void 0 && (c = ut(p) ? p : cr(t[o + 1]) ? [] : {});
    }
    La(i, u, c), i = i[u];
  }
  return e;
}
function Ds(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = Is(e, s);
    n(i, s) && js(a, ht(s, e), i);
  }
  return a;
}
function Bs(e, t) {
  return Ds(e, t, function(n, r) {
    return Ls(e, r);
  });
}
var ks = $s(function(e, t) {
  return e == null ? {} : Bs(e, t);
});
const zs = ks, Ac = (e) => e === void 0, vr = (e) => typeof e == "boolean", He = (e) => typeof e == "number", lt = (e) => typeof Element > "u" ? !1 : e instanceof Element, Hs = (e) => vt(e) ? !Number.isNaN(Number(e)) : !1;
class gr extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Rc(e, t) {
  throw new gr(`[${e}] ${t}`);
}
function Ke(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = vt(e) ? new gr(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Ks = "utils/dom/style", mr = (e = "") => e.split(" ").filter((t) => !!t.trim()), $c = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, Fc = (e, t) => {
  !e || !t.trim() || e.classList.add(...mr(t));
}, Nc = (e, t) => {
  !e || !t.trim() || e.classList.remove(...mr(t));
}, Lc = (e, t) => {
  var n;
  if (!U || !e || !t)
    return "";
  let r = Lo(t);
  r === "float" && (r = "cssFloat");
  try {
    const o = e.style[r];
    if (o)
      return o;
    const a = (n = document.defaultView) == null ? void 0 : n.getComputedStyle(e, "");
    return a ? a[r] : "";
  } catch {
    return e.style[r];
  }
};
function Mc(e, t = "px") {
  if (!e)
    return "";
  if (He(e) || Hs(e))
    return `${e}${t}`;
  if (vt(e))
    return e;
  Ke(Ks, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.3.1 */
var Us = /* @__PURE__ */ L({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (D(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      X("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), jc = Us, Vs = /* @__PURE__ */ L({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (D(), G("svg", {
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
}), Ws = Vs, qs = /* @__PURE__ */ L({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (D(), G("svg", {
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
}), Zs = qs, Gs = /* @__PURE__ */ L({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (D(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      X("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Js = Gs, Qs = /* @__PURE__ */ L({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (D(), G("svg", {
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
}), Dc = Qs, Ys = /* @__PURE__ */ L({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (D(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      X("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), Xs = Ys, ei = /* @__PURE__ */ L({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (D(), G("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      X("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Bc = ei;
const hr = "__epPropKey", N = (e) => e, ti = (e) => Lt(e) && !!e[hr], Ut = (e, t) => {
  if (!Lt(e) || ti(e))
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
    [hr]: !0
  };
  return Tn(e, "default") && (u.default = o), u;
}, te = (e) => At(Object.entries(e).map(([t, n]) => [
  t,
  Ut(n, t)
])), kc = N([
  String,
  Object,
  Function
]), zc = {
  Close: Js
}, Hc = {
  validating: Xs,
  success: Ws,
  error: Zs
}, yr = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Kc = (e, t) => (e.install = (n) => {
  n.directive(t, e);
}, e), Uc = (e) => (e.install = it, e), ft = {
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
}, Ct = "el", ni = "is-", me = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, ri = Symbol("namespaceContextKey"), Vt = (e) => {
  const t = e || (Ee() ? V(ri, x(Ct)) : x(Ct));
  return C(() => v(t) || Ct);
}, Ze = (e, t) => {
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
      return f && l ? `${ni}${f}` : "";
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
}, oi = Ut({
  type: N(Boolean),
  default: null
}), ai = Ut({
  type: N(Function)
}), br = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: oi,
    [n]: ai
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
      const m = Ee(), { emit: h } = m, d = m.props, f = C(() => tt(d[n])), y = C(() => d[e] === null), l = (O) => {
        s.value !== !0 && (s.value = !0, i && (i.value = O), tt(p) && p(O));
      }, w = (O) => {
        s.value !== !1 && (s.value = !1, i && (i.value = O), tt(g) && g(O));
      }, E = (O) => {
        if (d.disabled === !0 || tt(c) && !c())
          return;
        const P = f.value && U;
        P && h(t, !0), (y.value || !P) && l(O);
      }, b = (O) => {
        if (d.disabled === !0 || !U)
          return;
        const P = f.value && U;
        P && h(t, !1), (y.value || !P) && w(O);
      }, T = (O) => {
        vr(O) && (d.disabled && O ? f.value && h(t, !1) : s.value !== O && (O ? l() : w()));
      }, S = () => {
        s.value ? b() : E();
      };
      return M(() => d[e], T), u && m.appContext.config.globalProperties.$route !== void 0 && M(() => ({
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
br("modelValue");
var H = "top", q = "bottom", Z = "right", K = "left", Wt = "auto", Ge = [H, q, Z, K], Pe = "start", Ue = "end", si = "clippingParents", wr = "viewport", Le = "popper", ii = "reference", $n = Ge.reduce(function(e, t) {
  return e.concat([t + "-" + Pe, t + "-" + Ue]);
}, []), qt = [].concat(Ge, [Wt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Pe, t + "-" + Ue]);
}, []), ui = "beforeRead", ci = "read", li = "afterRead", fi = "beforeMain", pi = "main", di = "afterMain", vi = "beforeWrite", gi = "write", mi = "afterWrite", hi = [ui, ci, li, fi, pi, di, vi, gi, mi];
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
function W(e) {
  var t = J(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Zt(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = J(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function yi(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !W(a) || !ee(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function bi(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !W(o) || !ee(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(u) {
        o.removeAttribute(u);
      }));
    });
  };
}
var _r = { name: "applyStyles", enabled: !0, phase: "write", fn: yi, effect: bi, requires: ["computeStyles"] };
function Y(e) {
  return e.split("-")[0];
}
var he = Math.max, pt = Math.min, Ie = Math.round;
function xe(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, o = 1;
  if (W(e) && t) {
    var a = e.offsetHeight, s = e.offsetWidth;
    s > 0 && (r = Ie(n.width) / s || 1), a > 0 && (o = Ie(n.height) / a || 1);
  }
  return { width: n.width / r, height: n.height / o, top: n.top / o, right: n.right / r, bottom: n.bottom / o, left: n.left / r, x: n.left / r, y: n.top / o };
}
function Gt(e) {
  var t = xe(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Or(e, t) {
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
function ae(e) {
  return J(e).getComputedStyle(e);
}
function wi(e) {
  return ["table", "td", "th"].indexOf(ee(e)) >= 0;
}
function pe(e) {
  return ((Se(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function yt(e) {
  return ee(e) === "html" ? e : e.assignedSlot || e.parentNode || (Zt(e) ? e.host : null) || pe(e);
}
function Fn(e) {
  return !W(e) || ae(e).position === "fixed" ? null : e.offsetParent;
}
function _i(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && W(e)) {
    var r = ae(e);
    if (r.position === "fixed")
      return null;
  }
  var o = yt(e);
  for (Zt(o) && (o = o.host); W(o) && ["html", "body"].indexOf(ee(o)) < 0; ) {
    var a = ae(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Je(e) {
  for (var t = J(e), n = Fn(e); n && wi(n) && ae(n).position === "static"; )
    n = Fn(n);
  return n && (ee(n) === "html" || ee(n) === "body" && ae(n).position === "static") ? t : n || _i(e) || t;
}
function Jt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function je(e, t, n) {
  return he(e, pt(t, n));
}
function Oi(e, t, n) {
  var r = je(e, t, n);
  return r > n ? n : r;
}
function Er() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Tr(e) {
  return Object.assign({}, Er(), e);
}
function Cr(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Ei = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Tr(typeof e != "number" ? e : Cr(e, Ge));
};
function Ti(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Y(n.placement), u = Jt(i), c = [K, Z].indexOf(i) >= 0, p = c ? "height" : "width";
  if (!(!a || !s)) {
    var g = Ei(o.padding, n), m = Gt(a), h = u === "y" ? H : K, d = u === "y" ? q : Z, f = n.rects.reference[p] + n.rects.reference[u] - s[u] - n.rects.popper[p], y = s[u] - n.rects.reference[u], l = Je(a), w = l ? u === "y" ? l.clientHeight || 0 : l.clientWidth || 0 : 0, E = f / 2 - y / 2, b = g[h], T = w - m[p] - g[d], S = w / 2 - m[p] / 2 + E, O = je(b, S, T), P = u;
    n.modifiersData[r] = (t = {}, t[P] = O, t.centerOffset = O - S, t);
  }
}
function Ci(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !Or(t.elements.popper, o) || (t.elements.arrow = o));
}
var Pi = { name: "arrow", enabled: !0, phase: "main", fn: Ti, effect: Ci, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Ae(e) {
  return e.split("-")[1];
}
var Si = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Ii(e) {
  var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
  return { x: Ie(t * o) / o || 0, y: Ie(n * o) / o || 0 };
}
function Nn(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, u = e.gpuAcceleration, c = e.adaptive, p = e.roundOffsets, g = e.isFixed, m = s.x, h = m === void 0 ? 0 : m, d = s.y, f = d === void 0 ? 0 : d, y = typeof p == "function" ? p({ x: h, y: f }) : { x: h, y: f };
  h = y.x, f = y.y;
  var l = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), E = K, b = H, T = window;
  if (c) {
    var S = Je(n), O = "clientHeight", P = "clientWidth";
    if (S === J(n) && (S = pe(n), ae(S).position !== "static" && i === "absolute" && (O = "scrollHeight", P = "scrollWidth")), S = S, o === H || (o === K || o === Z) && a === Ue) {
      b = q;
      var R = g && S === T && T.visualViewport ? T.visualViewport.height : S[O];
      f -= R - r.height, f *= u ? 1 : -1;
    }
    if (o === K || (o === H || o === q) && a === Ue) {
      E = Z;
      var I = g && S === T && T.visualViewport ? T.visualViewport.width : S[P];
      h -= I - r.width, h *= u ? 1 : -1;
    }
  }
  var $ = Object.assign({ position: i }, c && Si), A = p === !0 ? Ii({ x: h, y: f }) : { x: h, y: f };
  if (h = A.x, f = A.y, u) {
    var F;
    return Object.assign({}, $, (F = {}, F[b] = w ? "0" : "", F[E] = l ? "0" : "", F.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + f + "px)" : "translate3d(" + h + "px, " + f + "px, 0)", F));
  }
  return Object.assign({}, $, (t = {}, t[b] = w ? f + "px" : "", t[E] = l ? h + "px" : "", t.transform = "", t));
}
function xi(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, u = i === void 0 ? !0 : i, c = { placement: Y(t.placement), variation: Ae(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Nn(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Nn(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Pr = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: xi, data: {} }, nt = { passive: !0 };
function Ai(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, u = J(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(p) {
    p.addEventListener("scroll", n.update, nt);
  }), i && u.addEventListener("resize", n.update, nt), function() {
    a && c.forEach(function(p) {
      p.removeEventListener("scroll", n.update, nt);
    }), i && u.removeEventListener("resize", n.update, nt);
  };
}
var Sr = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: Ai, data: {} }, Ri = { left: "right", right: "left", bottom: "top", top: "bottom" };
function st(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Ri[t];
  });
}
var $i = { start: "end", end: "start" };
function Ln(e) {
  return e.replace(/start|end/g, function(t) {
    return $i[t];
  });
}
function Qt(e) {
  var t = J(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Yt(e) {
  return xe(pe(e)).left + Qt(e).scrollLeft;
}
function Fi(e) {
  var t = J(e), n = pe(e), r = t.visualViewport, o = n.clientWidth, a = n.clientHeight, s = 0, i = 0;
  return r && (o = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = r.offsetLeft, i = r.offsetTop)), { width: o, height: a, x: s + Yt(e), y: i };
}
function Ni(e) {
  var t, n = pe(e), r = Qt(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = he(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = he(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Yt(e), u = -r.scrollTop;
  return ae(o || n).direction === "rtl" && (i += he(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: u };
}
function Xt(e) {
  var t = ae(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Ir(e) {
  return ["html", "body", "#document"].indexOf(ee(e)) >= 0 ? e.ownerDocument.body : W(e) && Xt(e) ? e : Ir(yt(e));
}
function De(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ir(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = J(r), s = o ? [a].concat(a.visualViewport || [], Xt(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(De(yt(s)));
}
function Rt(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Li(e) {
  var t = xe(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Mn(e, t) {
  return t === wr ? Rt(Fi(e)) : Se(t) ? Li(t) : Rt(Ni(pe(e)));
}
function Mi(e) {
  var t = De(yt(e)), n = ["absolute", "fixed"].indexOf(ae(e).position) >= 0, r = n && W(e) ? Je(e) : e;
  return Se(r) ? t.filter(function(o) {
    return Se(o) && Or(o, r) && ee(o) !== "body";
  }) : [];
}
function ji(e, t, n) {
  var r = t === "clippingParents" ? Mi(e) : [].concat(t), o = [].concat(r, [n]), a = o[0], s = o.reduce(function(i, u) {
    var c = Mn(e, u);
    return i.top = he(c.top, i.top), i.right = pt(c.right, i.right), i.bottom = pt(c.bottom, i.bottom), i.left = he(c.left, i.left), i;
  }, Mn(e, a));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function xr(e) {
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
      case Pe:
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
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.boundary, s = a === void 0 ? si : a, i = n.rootBoundary, u = i === void 0 ? wr : i, c = n.elementContext, p = c === void 0 ? Le : c, g = n.altBoundary, m = g === void 0 ? !1 : g, h = n.padding, d = h === void 0 ? 0 : h, f = Tr(typeof d != "number" ? d : Cr(d, Ge)), y = p === Le ? ii : Le, l = e.rects.popper, w = e.elements[m ? y : p], E = ji(Se(w) ? w : w.contextElement || pe(e.elements.popper), s, u), b = xe(e.elements.reference), T = xr({ reference: b, element: l, strategy: "absolute", placement: o }), S = Rt(Object.assign({}, l, T)), O = p === Le ? S : b, P = { top: E.top - O.top + f.top, bottom: O.bottom - E.bottom + f.bottom, left: E.left - O.left + f.left, right: O.right - E.right + f.right }, R = e.modifiersData.offset;
  if (p === Le && R) {
    var I = R[o];
    Object.keys(P).forEach(function($) {
      var A = [Z, q].indexOf($) >= 0 ? 1 : -1, F = [H, q].indexOf($) >= 0 ? "y" : "x";
      P[$] += I[F] * A;
    });
  }
  return P;
}
function Di(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, u = n.allowedAutoPlacements, c = u === void 0 ? qt : u, p = Ae(r), g = p ? i ? $n : $n.filter(function(d) {
    return Ae(d) === p;
  }) : Ge, m = g.filter(function(d) {
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
function Bi(e) {
  if (Y(e) === Wt)
    return [];
  var t = st(e);
  return [Ln(e), t, Ln(t)];
}
function ki(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, u = n.fallbackPlacements, c = n.padding, p = n.boundary, g = n.rootBoundary, m = n.altBoundary, h = n.flipVariations, d = h === void 0 ? !0 : h, f = n.allowedAutoPlacements, y = t.options.placement, l = Y(y), w = l === y, E = u || (w || !d ? [st(y)] : Bi(y)), b = [y].concat(E).reduce(function(ve, ne) {
      return ve.concat(Y(ne) === Wt ? Di(t, { placement: ne, boundary: p, rootBoundary: g, padding: c, flipVariations: d, allowedAutoPlacements: f }) : ne);
    }, []), T = t.rects.reference, S = t.rects.popper, O = /* @__PURE__ */ new Map(), P = !0, R = b[0], I = 0; I < b.length; I++) {
      var $ = b[I], A = Y($), F = Ae($) === Pe, k = [H, q].indexOf(A) >= 0, B = k ? "width" : "height", j = Ve(t, { placement: $, boundary: p, rootBoundary: g, altBoundary: m, padding: c }), _ = k ? F ? Z : K : F ? q : H;
      T[B] > S[B] && (_ = st(_));
      var z = st(_), Q = [];
      if (a && Q.push(j[A] <= 0), i && Q.push(j[_] <= 0, j[z] <= 0), Q.every(function(ve) {
        return ve;
      })) {
        R = $, P = !1;
        break;
      }
      O.set($, Q);
    }
    if (P)
      for (var Qe = d ? 3 : 1, wt = function(ve) {
        var ne = b.find(function(Xe) {
          var Fe = O.get(Xe);
          if (Fe)
            return Fe.slice(0, ve).every(function(we) {
              return we;
            });
        });
        if (ne)
          return R = ne, "break";
      }, $e = Qe; $e > 0; $e--) {
        var Ye = wt($e);
        if (Ye === "break")
          break;
      }
    t.placement !== R && (t.modifiersData[r]._skip = !0, t.placement = R, t.reset = !0);
  }
}
var zi = { name: "flip", enabled: !0, phase: "main", fn: ki, requiresIfExists: ["offset"], data: { _skip: !1 } };
function jn(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function Dn(e) {
  return [H, Z, q, K].some(function(t) {
    return e[t] >= 0;
  });
}
function Hi(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Ve(t, { elementContext: "reference" }), i = Ve(t, { altBoundary: !0 }), u = jn(s, r), c = jn(i, o, a), p = Dn(u), g = Dn(c);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: c, isReferenceHidden: p, hasPopperEscaped: g }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": p, "data-popper-escaped": g });
}
var Ki = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Hi };
function Ui(e, t, n) {
  var r = Y(e), o = [K, H].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [K, Z].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function Vi(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = qt.reduce(function(p, g) {
    return p[g] = Ui(g, t.rects, a), p;
  }, {}), i = s[t.placement], u = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s;
}
var Wi = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: Vi };
function qi(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = xr({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var Ar = { name: "popperOffsets", enabled: !0, phase: "read", fn: qi, data: {} };
function Zi(e) {
  return e === "x" ? "y" : "x";
}
function Gi(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, u = n.boundary, c = n.rootBoundary, p = n.altBoundary, g = n.padding, m = n.tether, h = m === void 0 ? !0 : m, d = n.tetherOffset, f = d === void 0 ? 0 : d, y = Ve(t, { boundary: u, rootBoundary: c, padding: g, altBoundary: p }), l = Y(t.placement), w = Ae(t.placement), E = !w, b = Jt(l), T = Zi(b), S = t.modifiersData.popperOffsets, O = t.rects.reference, P = t.rects.popper, R = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f, I = typeof R == "number" ? { mainAxis: R, altAxis: R } : Object.assign({ mainAxis: 0, altAxis: 0 }, R), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, A = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var F, k = b === "y" ? H : K, B = b === "y" ? q : Z, j = b === "y" ? "height" : "width", _ = S[b], z = _ + y[k], Q = _ - y[B], Qe = h ? -P[j] / 2 : 0, wt = w === Pe ? O[j] : P[j], $e = w === Pe ? -P[j] : -O[j], Ye = t.elements.arrow, ve = h && Ye ? Gt(Ye) : { width: 0, height: 0 }, ne = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Er(), Xe = ne[k], Fe = ne[B], we = je(0, O[j], ve[j]), Ur = E ? O[j] / 2 - Qe - we - Xe - I.mainAxis : wt - we - Xe - I.mainAxis, Vr = E ? -O[j] / 2 + Qe + we + Fe + I.mainAxis : $e + we + Fe + I.mainAxis, _t = t.elements.arrow && Je(t.elements.arrow), Wr = _t ? b === "y" ? _t.clientTop || 0 : _t.clientLeft || 0 : 0, an = (F = $ == null ? void 0 : $[b]) != null ? F : 0, qr = _ + Ur - an - Wr, Zr = _ + Vr - an, sn = je(h ? pt(z, qr) : z, _, h ? he(Q, Zr) : Q);
      S[b] = sn, A[b] = sn - _;
    }
    if (i) {
      var un, Gr = b === "x" ? H : K, Jr = b === "x" ? q : Z, ge = S[T], et = T === "y" ? "height" : "width", cn = ge + y[Gr], ln = ge - y[Jr], Ot = [H, K].indexOf(l) !== -1, fn = (un = $ == null ? void 0 : $[T]) != null ? un : 0, pn = Ot ? cn : ge - O[et] - P[et] - fn + I.altAxis, dn = Ot ? ge + O[et] + P[et] - fn - I.altAxis : ln, vn = h && Ot ? Oi(pn, ge, dn) : je(h ? pn : cn, ge, h ? dn : ln);
      S[T] = vn, A[T] = vn - ge;
    }
    t.modifiersData[r] = A;
  }
}
var Ji = { name: "preventOverflow", enabled: !0, phase: "main", fn: Gi, requiresIfExists: ["offset"] };
function Qi(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Yi(e) {
  return e === J(e) || !W(e) ? Qt(e) : Qi(e);
}
function Xi(e) {
  var t = e.getBoundingClientRect(), n = Ie(t.width) / e.offsetWidth || 1, r = Ie(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function eu(e, t, n) {
  n === void 0 && (n = !1);
  var r = W(t), o = W(t) && Xi(t), a = pe(t), s = xe(e, o), i = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (r || !r && !n) && ((ee(t) !== "body" || Xt(a)) && (i = Yi(t)), W(t) ? (u = xe(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : a && (u.x = Yt(a))), { x: s.left + i.scrollLeft - u.x, y: s.top + i.scrollTop - u.y, width: s.width, height: s.height };
}
function tu(e) {
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
function nu(e) {
  var t = tu(e);
  return hi.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function ru(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function ou(e) {
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
      var l = nu(ou([].concat(r, c.options.modifiers)));
      return c.orderedModifiers = l.filter(function(w) {
        return w.enabled;
      }), h(), m.update();
    }, forceUpdate: function() {
      if (!g) {
        var f = c.elements, y = f.reference, l = f.popper;
        if (kn(y, l)) {
          c.rects = { reference: eu(y, Je(l), c.options.strategy === "fixed"), popper: Gt(l) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(P) {
            return c.modifiersData[P.name] = Object.assign({}, P.data);
          });
          for (var w = 0; w < c.orderedModifiers.length; w++) {
            if (c.reset === !0) {
              c.reset = !1, w = -1;
              continue;
            }
            var E = c.orderedModifiers[w], b = E.fn, T = E.options, S = T === void 0 ? {} : T, O = E.name;
            typeof b == "function" && (c = b({ state: c, options: S, name: O, instance: m }) || c);
          }
        }
      }
    }, update: ru(function() {
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
        var y = f.name, l = f.options, w = l === void 0 ? {} : l, E = f.effect;
        if (typeof E == "function") {
          var b = E({ state: c, name: y, instance: m, options: w }), T = function() {
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
var au = [Sr, Ar, Pr, _r];
en({ defaultModifiers: au });
var su = [Sr, Ar, Pr, _r, Wi, zi, Ji, Pi, Ki], iu = en({ defaultModifiers: su });
const uu = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: u }) => {
      const c = cu(u);
      Object.assign(s.value, c);
    },
    requires: ["computeStyles"]
  }, o = C(() => {
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
  return M(o, (u) => {
    const c = v(a);
    c && c.setOptions(u);
  }, {
    deep: !0
  }), M([e, t], ([u, c]) => {
    i(), !(!u || !c) && (a.value = iu(u, c, v(o)));
  }), fe(() => {
    i();
  }), {
    state: C(() => {
      var u;
      return { ...((u = v(a)) == null ? void 0 : u.state) || {} };
    }),
    styles: C(() => v(s).styles),
    attributes: C(() => v(s).attributes),
    update: () => {
      var u;
      return (u = v(a)) == null ? void 0 : u.update();
    },
    forceUpdate: () => {
      var u;
      return (u = v(a)) == null ? void 0 : u.forceUpdate();
    },
    instanceRef: C(() => v(a))
  };
};
function cu(e) {
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
  return We(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const $t = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, lu = Symbol("elIdInjection"), Rr = () => Ee() ? V(lu, $t) : $t, fu = (e) => {
  const t = Rr();
  !U && t === $t && Ke("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Vt();
  return C(() => v(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let Oe = [];
const Hn = (e) => {
  const t = e;
  t.key === ft.esc && Oe.forEach((n) => n(t));
}, pu = (e) => {
  le(() => {
    Oe.length === 0 && document.addEventListener("keydown", Hn), U && Oe.push(e);
  }), fe(() => {
    Oe = Oe.filter((t) => t !== e), Oe.length === 0 && U && document.removeEventListener("keydown", Hn);
  });
};
let Kn;
const $r = () => {
  const e = Vt(), t = Rr(), n = C(() => `${e.value}-popper-container-${t.prefix}`), r = C(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, du = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, vu = () => {
  const { id: e, selector: t } = $r();
  return to(() => {
    U && (process.env.NODE_ENV === "test" || !Kn && !document.body.querySelector(t.value)) && (Kn = du(e.value));
  }), {
    id: e,
    selector: t
  };
}, gu = te({
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
}), mu = ({
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
}, Fr = Symbol("elForwardRef"), hu = (e) => {
  Te(Fr, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, yu = (e) => ({
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
}, Vn = x(0), bu = 2e3, Wn = Symbol("elZIndexContextKey"), wu = Symbol("zIndexContextKey"), _u = (e) => {
  const t = Ee() ? V(Wn, Un) : Un, n = e || (Ee() ? V(wu, void 0) : void 0), r = C(() => {
    const s = v(n);
    return He(s) ? s : bu;
  }), o = C(() => r.value + Vn.value), a = () => (t.current++, Vn.value = t.current, o.value);
  return !U && !V(Wn) && Ke("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
}, Ou = te({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Nr = (e) => zs(Ou, e);
var de = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const Vc = Symbol("formContextKey"), qn = Symbol("formItemContextKey"), tn = Symbol("popper"), Lr = Symbol("popperContent"), Eu = [
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
    values: Eu,
    default: "tooltip"
  }
}), Tu = L({
  name: "ElPopper",
  inheritAttrs: !1
}), Cu = /* @__PURE__ */ L({
  ...Tu,
  props: Mr,
  setup(e, { expose: t }) {
    const n = e, r = x(), o = x(), a = x(), s = x(), i = C(() => n.role), u = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(u), Te(tn, u), (c, p) => ue(c.$slots, "default");
  }
});
var Pu = /* @__PURE__ */ de(Cu, [["__file", "popper.vue"]]);
const jr = te({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Su = L({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Iu = /* @__PURE__ */ L({
  ...Su,
  props: jr,
  setup(e, { expose: t }) {
    const n = e, r = Ze("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = V(Lr, void 0);
    return M(() => n.arrowOffset, (i) => {
      o.value = i;
    }), fe(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, u) => (D(), G("span", {
      ref_key: "arrowRef",
      ref: a,
      class: rr(v(r).e("arrow")),
      style: no(v(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var xu = /* @__PURE__ */ de(Iu, [["__file", "arrow.vue"]]);
const Pt = "ElOnlyChild", Au = L({
  name: Pt,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = V(Fr), a = yu((r = o == null ? void 0 : o.setForwardRef) != null ? r : it);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i)
        return null;
      if (i.length > 1)
        return Ke(Pt, "requires exact only one valid child."), null;
      const u = Dr(i);
      return u ? or(ro(u, n), [[a]]) : (Ke(Pt, "no valid child node found"), null);
    };
  }
});
function Dr(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Lt(n))
      switch (n.type) {
        case so:
          continue;
        case ao:
        case "svg":
          return Zn(n);
        case oo:
          return Dr(n.children);
        default:
          return n;
      }
    return Zn(n);
  }
  return null;
}
function Zn(e) {
  const t = Ze("only-child");
  return Be("span", {
    class: t.e("content")
  }, [e]);
}
const Br = te({
  virtualRef: {
    type: N(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: N(Function)
  },
  onMouseleave: {
    type: N(Function)
  },
  onClick: {
    type: N(Function)
  },
  onKeydown: {
    type: N(Function)
  },
  onFocus: {
    type: N(Function)
  },
  onBlur: {
    type: N(Function)
  },
  onContextmenu: {
    type: N(Function)
  },
  id: String,
  open: Boolean
}), Ru = L({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), $u = /* @__PURE__ */ L({
  ...Ru,
  props: Br,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = V(tn, void 0);
    hu(o);
    const a = C(() => i.value ? n.id : void 0), s = C(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = C(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), u = C(() => i.value ? `${n.open}` : void 0);
    let c;
    return le(() => {
      M(() => n.virtualRef, (p) => {
        p && (o.value = oe(p));
      }, {
        immediate: !0
      }), M(o, (p, g) => {
        c == null || c(), c = void 0, lt(p) && ([
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
        }), c = M([a, s, i, u], (m) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, d) => {
            Kt(m[d]) ? p.removeAttribute(h) : p.setAttribute(h, m[d]);
          });
        }, { immediate: !0 })), lt(g) && [
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
    }), (p, g) => p.virtualTriggering ? ke("v-if", !0) : (D(), Ce(v(Au), Ft({ key: 0 }, p.$attrs, {
      "aria-controls": v(a),
      "aria-describedby": v(s),
      "aria-expanded": v(u),
      "aria-haspopup": v(i)
    }), {
      default: ie(() => [
        ue(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var Fu = /* @__PURE__ */ de($u, [["__file", "trigger.vue"]]);
const St = "focus-trap.focus-after-trapped", It = "focus-trap.focus-after-released", Nu = "focus-trap.focusout-prevented", Gn = {
  cancelable: !0,
  bubbles: !1
}, Lu = {
  cancelable: !0,
  bubbles: !1
}, Jn = "focusAfterTrapped", Qn = "focusAfterReleased", Mu = Symbol("elFocusTrap"), nn = x(), bt = x(0), rn = x(0);
let rt = 0;
const kr = (e) => {
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
    if (!ju(n, t))
      return n;
}, ju = (e, t) => {
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
}, Du = (e) => {
  const t = kr(e), n = Yn(t, e), r = Yn(t.reverse(), e);
  return [n, r];
}, Bu = (e) => e instanceof HTMLInputElement && "select" in e, se = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), rn.value = window.performance.now(), e !== n && Bu(e) && t && e.select();
  }
};
function Xn(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const ku = () => {
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
}, zu = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (se(r, t), document.activeElement !== n)
      return;
}, er = ku(), Hu = () => bt.value > rn.value, ot = () => {
  nn.value = "pointer", bt.value = window.performance.now();
}, tr = () => {
  nn.value = "keyboard", bt.value = window.performance.now();
}, Ku = () => (le(() => {
  rt === 0 && (document.addEventListener("mousedown", ot), document.addEventListener("touchstart", ot), document.addEventListener("keydown", tr)), rt++;
}), fe(() => {
  rt--, rt <= 0 && (document.removeEventListener("mousedown", ot), document.removeEventListener("touchstart", ot), document.removeEventListener("keydown", tr));
}), {
  focusReason: nn,
  lastUserFocusTimestamp: bt,
  lastAutomatedFocusTimestamp: rn
}), at = (e) => new CustomEvent(Nu, {
  ...Lu,
  detail: e
}), Uu = L({
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
    const { focusReason: a } = Ku();
    pu((d) => {
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
      const { key: f, altKey: y, ctrlKey: l, metaKey: w, currentTarget: E, shiftKey: b } = d, { loop: T } = e, S = f === ft.tab && !y && !l && !w, O = document.activeElement;
      if (S && O) {
        const P = E, [R, I] = Du(P);
        if (R && I) {
          if (!b && O === I) {
            const A = at({
              focusReason: a.value
            });
            t("focusout-prevented", A), A.defaultPrevented || (d.preventDefault(), T && se(R, !0));
          } else if (b && [R, P].includes(O)) {
            const A = at({
              focusReason: a.value
            });
            t("focusout-prevented", A), A.defaultPrevented || (d.preventDefault(), T && se(I, !0));
          }
        } else if (O === P) {
          const A = at({
            focusReason: a.value
          });
          t("focusout-prevented", A), A.defaultPrevented || d.preventDefault();
        }
      }
    };
    Te(Mu, {
      focusTrapRef: n,
      onKeydown: i
    }), M(() => e.focusTrapEl, (d) => {
      d && (n.value = d);
    }, { immediate: !0 }), M([n], ([d], [f]) => {
      d && (d.addEventListener("keydown", i), d.addEventListener("focusin", p), d.addEventListener("focusout", g)), f && (f.removeEventListener("keydown", i), f.removeEventListener("focusin", p), f.removeEventListener("focusout", g));
    });
    const u = (d) => {
      t(Jn, d);
    }, c = (d) => t(Qn, d), p = (d) => {
      const f = v(n);
      if (!f)
        return;
      const y = d.target, l = d.relatedTarget, w = y && f.contains(y);
      e.trapped || l && f.contains(l) || (r = l), w && t("focusin", d), !s.paused && e.trapped && (w ? o = y : se(o, !0));
    }, g = (d) => {
      const f = v(n);
      if (!(s.paused || !f))
        if (e.trapped) {
          const y = d.relatedTarget;
          !Kt(y) && !f.contains(y) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const l = at({
                focusReason: a.value
              });
              t("focusout-prevented", l), l.defaultPrevented || se(o, !0);
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
            let w = e.focusStartEl;
            vt(w) || (se(w), document.activeElement !== w && (w = "first")), w === "first" && zu(kr(d), !0), (document.activeElement === f || w === "container") && se(d);
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
        d.addEventListener(It, c), d.dispatchEvent(f), !f.defaultPrevented && (a.value == "keyboard" || !Hu() || d.contains(document.activeElement)) && se(r ?? document.body), d.removeEventListener(It, c), er.remove(s);
      }
    }
    return le(() => {
      e.trapped && m(), M(() => e.trapped, (d) => {
        d ? m() : h();
      });
    }), fe(() => {
      e.trapped && h();
    }), {
      onKeydown: i
    };
  }
});
function Vu(e, t, n, r, o, a) {
  return ue(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var Wu = /* @__PURE__ */ de(Uu, [["render", Vu], ["__file", "focus-trap.vue"]]);
const qu = ["fixed", "absolute"], Zu = te({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: N(Array),
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
    type: N(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: qu,
    default: "absolute"
  }
}), zr = te({
  ...Zu,
  id: String,
  style: {
    type: N([String, Array, Object])
  },
  className: {
    type: N([String, Array, Object])
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
    type: N([String, Array, Object])
  },
  popperStyle: {
    type: N([String, Array, Object])
  },
  referenceEl: {
    type: N(Object)
  },
  triggerTargetEl: {
    type: N(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...Nr(["ariaLabel"])
}), Gu = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Ju = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...Yu(e), ...t]
  };
  return Xu(a, o == null ? void 0 : o.modifiers), a;
}, Qu = (e) => {
  if (U)
    return oe(e);
};
function Yu(e) {
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
function Xu(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const ec = 0, tc = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = V(tn, void 0), a = x(), s = x(), i = C(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), u = C(() => {
    var l;
    const w = v(a), E = (l = v(s)) != null ? l : ec;
    return {
      name: "arrow",
      enabled: !Ms(w),
      options: {
        element: w,
        padding: E
      }
    };
  }), c = C(() => ({
    onFirstUpdate: () => {
      d();
    },
    ...Ju(e, [
      v(u),
      v(i)
    ])
  })), p = C(() => Qu(e.referenceEl) || v(r)), { attributes: g, state: m, styles: h, update: d, forceUpdate: f, instanceRef: y } = uu(p, n, c);
  return M(y, (l) => t.value = l), le(() => {
    M(() => {
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
}, nc = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = _u(), a = Ze("popper"), s = C(() => v(t).popper), i = x(He(e.zIndex) ? e.zIndex : o()), u = C(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), c = C(() => [
    { zIndex: v(i) },
    v(n).popper,
    e.popperStyle || {}
  ]), p = C(() => r.value === "dialog" ? "false" : void 0), g = C(() => v(n).arrow || {});
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
}, rc = (e, t) => {
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
}, oc = L({
  name: "ElPopperContent"
}), ac = /* @__PURE__ */ L({
  ...oc,
  props: zr,
  emits: Gu,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: u,
      onFocusoutPrevented: c,
      onReleaseRequested: p
    } = rc(r, n), { attributes: g, arrowRef: m, contentRef: h, styles: d, instanceRef: f, role: y, update: l } = tc(r), {
      ariaModal: w,
      arrowStyle: E,
      contentAttrs: b,
      contentClass: T,
      contentStyle: S,
      updateZIndex: O
    } = nc(r, {
      styles: d,
      attributes: g,
      role: y
    }), P = V(qn, void 0), R = x();
    Te(Lr, {
      arrowStyle: E,
      arrowRef: m,
      arrowOffset: R
    }), P && Te(qn, {
      ...P,
      addInputId: it,
      removeInputId: it
    });
    let I;
    const $ = (F = !0) => {
      l(), F && O();
    }, A = () => {
      $(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return le(() => {
      M(() => r.triggerTargetEl, (F, k) => {
        I == null || I(), I = void 0;
        const B = v(F || h.value), j = v(k || h.value);
        lt(B) && (I = M([y, () => r.ariaLabel, w, () => r.id], (_) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((z, Q) => {
            Kt(_[Q]) ? B.removeAttribute(z) : B.setAttribute(z, _[Q]);
          });
        }, { immediate: !0 })), j !== B && lt(j) && ["role", "aria-label", "aria-modal", "id"].forEach((_) => {
          j.removeAttribute(_);
        });
      }, { immediate: !0 }), M(() => r.visible, A, { immediate: !0 });
    }), fe(() => {
      I == null || I(), I = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: f,
      updatePopper: $,
      contentStyle: S
    }), (F, k) => (D(), G("div", Ft({
      ref_key: "contentRef",
      ref: h
    }, v(b), {
      style: v(S),
      class: v(T),
      tabindex: "-1",
      onMouseenter: k[0] || (k[0] = (B) => F.$emit("mouseenter", B)),
      onMouseleave: k[1] || (k[1] = (B) => F.$emit("mouseleave", B))
    }), [
      Be(v(Wu), {
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
        default: ie(() => [
          ue(F.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var sc = /* @__PURE__ */ de(ac, [["__file", "content.vue"]]);
const ic = yr(Pu), on = Symbol("elTooltip"), Hr = te({
  ...gu,
  ...zr,
  appendTo: {
    type: N([String, Object])
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
    type: N(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...Nr(["ariaLabel"])
}), Kr = te({
  ...Br,
  disabled: Boolean,
  trigger: {
    type: N([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: N(Array),
    default: () => [ft.enter, ft.space]
  }
}), {
  useModelToggleProps: uc,
  useModelToggleEmits: cc,
  useModelToggle: lc
} = br("visible"), fc = te({
  ...Mr,
  ...uc,
  ...Hr,
  ...Kr,
  ...jr,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), pc = [
  ...cc,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], dc = (e, t) => Ao(e) ? e.includes(t) : e === t, _e = (e, t, n) => (r) => {
  dc(v(e), t) && n(r);
}, vc = L({
  name: "ElTooltipTrigger"
}), gc = /* @__PURE__ */ L({
  ...vc,
  props: Kr,
  setup(e, { expose: t }) {
    const n = e, r = Ze("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: u, onToggle: c } = V(on, void 0), p = x(null), g = () => {
      if (v(o) || n.disabled)
        return !0;
    }, m = Me(n, "trigger"), h = re(g, _e(m, "hover", i)), d = re(g, _e(m, "hover", u)), f = re(g, _e(m, "click", (b) => {
      b.button === 0 && c(b);
    })), y = re(g, _e(m, "focus", i)), l = re(g, _e(m, "focus", u)), w = re(g, _e(m, "contextmenu", (b) => {
      b.preventDefault(), c(b);
    })), E = re(g, (b) => {
      const { code: T } = b;
      n.triggerKeys.includes(T) && (b.preventDefault(), c(b));
    });
    return t({
      triggerRef: p
    }), (b, T) => (D(), Ce(v(Fu), {
      id: v(a),
      "virtual-ref": b.virtualRef,
      open: v(s),
      "virtual-triggering": b.virtualTriggering,
      class: rr(v(r).e("trigger")),
      onBlur: v(l),
      onClick: v(f),
      onContextmenu: v(w),
      onFocus: v(y),
      onMouseenter: v(h),
      onMouseleave: v(d),
      onKeydown: v(E)
    }, {
      default: ie(() => [
        ue(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var mc = /* @__PURE__ */ de(gc, [["__file", "trigger.vue"]]);
const hc = L({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), yc = /* @__PURE__ */ L({
  ...hc,
  props: Hr,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = $r(), o = Ze("tooltip"), a = x(null), s = x(!1), {
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
    } = V(on, void 0), l = C(() => n.transition || `${o.namespace.value}-fade-in-linear`), w = C(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    fe(() => {
      s.value = !0;
    });
    const E = C(() => v(w) ? !0 : v(c)), b = C(() => n.disabled ? !1 : v(c)), T = C(() => n.appendTo || r.value), S = C(() => {
      var _;
      return (_ = n.style) != null ? _ : {};
    }), O = C(() => !v(c)), P = () => {
      d();
    }, R = () => {
      if (v(i))
        return !0;
    }, I = re(R, () => {
      n.enterable && v(p) === "hover" && m();
    }), $ = re(R, () => {
      v(p) === "hover" && g();
    }), A = () => {
      var _, z;
      (z = (_ = a.value) == null ? void 0 : _.updatePopper) == null || z.call(_), f == null || f();
    }, F = () => {
      y == null || y();
    }, k = () => {
      h(), j = ho(C(() => {
        var _;
        return (_ = a.value) == null ? void 0 : _.popperContentRef;
      }), () => {
        if (v(i))
          return;
        v(p) !== "hover" && g();
      });
    }, B = () => {
      n.virtualTriggering || g();
    };
    let j;
    return M(() => v(c), (_) => {
      _ || j == null || j();
    }, {
      flush: "post"
    }), M(() => n.content, () => {
      var _, z;
      (z = (_ = a.value) == null ? void 0 : _.updatePopper) == null || z.call(_);
    }), t({
      contentRef: a
    }), (_, z) => (D(), Ce(io, {
      disabled: !_.teleported,
      to: v(T)
    }, [
      Be(uo, {
        name: v(l),
        onAfterLeave: P,
        onBeforeEnter: A,
        onAfterEnter: k,
        onBeforeLeave: F
      }, {
        default: ie(() => [
          v(E) ? or((D(), Ce(v(sc), Ft({
            key: 0,
            id: v(u),
            ref_key: "contentRef",
            ref: a
          }, _.$attrs, {
            "aria-label": _.ariaLabel,
            "aria-hidden": v(O),
            "boundaries-padding": _.boundariesPadding,
            "fallback-placements": _.fallbackPlacements,
            "gpu-acceleration": _.gpuAcceleration,
            offset: _.offset,
            placement: _.placement,
            "popper-options": _.popperOptions,
            strategy: _.strategy,
            effect: _.effect,
            enterable: _.enterable,
            pure: _.pure,
            "popper-class": _.popperClass,
            "popper-style": [_.popperStyle, v(S)],
            "reference-el": _.referenceEl,
            "trigger-target-el": _.triggerTargetEl,
            visible: v(b),
            "z-index": _.zIndex,
            onMouseenter: v(I),
            onMouseleave: v($),
            onBlur: B,
            onClose: v(g)
          }), {
            default: ie(() => [
              s.value ? ke("v-if", !0) : ue(_.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [co, v(b)]
          ]) : ke("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var bc = /* @__PURE__ */ de(yc, [["__file", "content.vue"]]);
const wc = ["innerHTML"], _c = { key: 1 }, Oc = L({
  name: "ElTooltip"
}), Ec = /* @__PURE__ */ L({
  ...Oc,
  props: fc,
  emits: pc,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    vu();
    const o = fu(), a = x(), s = x(), i = () => {
      var l;
      const w = v(a);
      w && ((l = w.popperInstanceRef) == null || l.update());
    }, u = x(!1), c = x(), { show: p, hide: g, hasUpdateHandler: m } = lc({
      indicator: u,
      toggleReason: c
    }), { onOpen: h, onClose: d } = mu({
      showAfter: Me(r, "showAfter"),
      hideAfter: Me(r, "hideAfter"),
      autoClose: Me(r, "autoClose"),
      open: p,
      close: g
    }), f = C(() => vr(r.visible) && !m.value);
    Te(on, {
      controlled: f,
      id: o,
      open: nr(u),
      trigger: Me(r, "trigger"),
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
    }), M(() => r.disabled, (l) => {
      l && u.value && (u.value = !1);
    });
    const y = (l) => {
      var w, E;
      const b = (E = (w = s.value) == null ? void 0 : w.contentRef) == null ? void 0 : E.popperContentRef, T = (l == null ? void 0 : l.relatedTarget) || document.activeElement;
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
    }), (l, w) => (D(), Ce(v(ic), {
      ref_key: "popperRef",
      ref: a,
      role: l.role
    }, {
      default: ie(() => [
        Be(mc, {
          disabled: l.disabled,
          trigger: l.trigger,
          "trigger-keys": l.triggerKeys,
          "virtual-ref": l.virtualRef,
          "virtual-triggering": l.virtualTriggering
        }, {
          default: ie(() => [
            l.$slots.default ? ue(l.$slots, "default", { key: 0 }) : ke("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        Be(bc, {
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
          default: ie(() => [
            ue(l.$slots, "content", {}, () => [
              l.rawContent ? (D(), G("span", {
                key: 0,
                innerHTML: l.content
              }, null, 8, wc)) : (D(), G("span", _c, fo(l.content), 1))
            ]),
            l.showArrow ? (D(), Ce(v(xu), {
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
var Tc = /* @__PURE__ */ de(Ec, [["__file", "tooltip.vue"]]);
const Wc = yr(Tc);
export {
  Xo as $,
  Bt as A,
  ut as B,
  zc as C,
  kt as D,
  Wu as E,
  Mu as F,
  Mt as G,
  Da as H,
  oa as I,
  Dt as J,
  jt as K,
  jo as L,
  qe as M,
  it as N,
  pr as O,
  cr as P,
  Re as Q,
  ps as R,
  be as S,
  xs as T,
  ca as U,
  ce as V,
  lr as W,
  Va as X,
  Ht as Y,
  Ls as Z,
  de as _,
  te as a,
  At as a0,
  Ut as a1,
  Et as a2,
  Vc as a3,
  qn as a4,
  He as a5,
  Nr as a6,
  vt as a7,
  Hc as a8,
  Bc as a9,
  Dc as aa,
  Kt as ab,
  Sc as ac,
  Zs as ad,
  Lt as ae,
  lt as af,
  Js as ag,
  Ao as ah,
  vo as ai,
  xc as aj,
  ft as ak,
  jc as al,
  qt as am,
  Ic as an,
  Uc as ao,
  Is as b,
  N as c,
  Ke as d,
  Ac as e,
  Mc as f,
  tt as g,
  $c as h,
  U as i,
  Lc as j,
  Fc as k,
  kc as l,
  vr as m,
  _u as n,
  fu as o,
  Ms as p,
  Ct as q,
  Nc as r,
  Pc as s,
  Rc as t,
  Ze as u,
  Kr as v,
  yr as w,
  Hr as x,
  Wc as y,
  Kc as z
};
