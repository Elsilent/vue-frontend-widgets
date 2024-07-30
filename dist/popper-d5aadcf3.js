import { getCurrentScope as Xr, onScopeDispose as eo, unref as v, getCurrentInstance as Oe, onMounted as fe, nextTick as $t, ref as x, readonly as or, watch as L, defineComponent as A, openBlock as j, createElementBlock as q, createElementVNode as ee, warn as to, inject as V, computed as C, isRef as no, shallowRef as ro, onBeforeUnmount as pe, onBeforeMount as oo, provide as Te, mergeProps as vt, renderSlot as ae, normalizeClass as ar, normalizeStyle as ao, withDirectives as sr, cloneVNode as so, Fragment as io, Text as lo, Comment as co, createVNode as ze, createBlock as Ce, withCtx as ce, createCommentVNode as He, toRef as je, Teleport as uo, Transition as fo, vShow as po, onDeactivated as vo, toDisplayString as mo } from "vue";
const re = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e == null ? void 0 : e(o);
  if (n === !1 || !a)
    return t == null ? void 0 : t(o);
};
var hn;
const k = typeof window < "u", go = (e) => typeof e == "string", ir = () => {
}, ho = k && ((hn = window == null ? void 0 : window.navigator) == null ? void 0 : hn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Mt(e) {
  return typeof e == "function" ? e() : v(e);
}
function yo(e) {
  return e;
}
function qe(e) {
  return Xr() ? (eo(e), !0) : !1;
}
function bo(e, t = !0) {
  Oe() ? fe(e) : t ? e() : $t(e);
}
function kc(e, t, n = {}) {
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
  function l(...c) {
    s(), o.value = !0, a = setTimeout(() => {
      o.value = !1, a = null, e(...c);
    }, Mt(t));
  }
  return r && (o.value = !0, k && l()), qe(i), {
    isPending: or(o),
    start: l,
    stop: i
  };
}
function oe(e) {
  var t;
  const n = Mt(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const mt = k ? window : void 0;
function Ct(...e) {
  let t, n, r, o;
  if (go(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = mt) : [t, n, r, o] = e, !t)
    return ir;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((p) => p()), a.length = 0;
  }, i = (p, m, g, h) => (p.addEventListener(m, g, h), () => p.removeEventListener(m, g, h)), l = L(() => [oe(t), Mt(o)], ([p, m]) => {
    s(), p && a.push(...n.flatMap((g) => r.map((h) => i(p, g, h, m))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), s();
  };
  return qe(c), c;
}
let yn = !1;
function wo(e, t, n = {}) {
  const { window: r = mt, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  ho && !yn && (yn = !0, Array.from(r.document.body.children).forEach((g) => g.addEventListener("click", ir)));
  let i = !0;
  const l = (g) => o.some((h) => {
    if (typeof h == "string")
      return Array.from(r.document.querySelectorAll(h)).some((d) => d === g.target || g.composedPath().includes(d));
    {
      const d = oe(h);
      return d && (g.target === d || g.composedPath().includes(d));
    }
  }), p = [
    Ct(r, "click", (g) => {
      const h = oe(e);
      if (!(!h || h === g.target || g.composedPath().includes(h))) {
        if (g.detail === 0 && (i = !l(g)), !i) {
          i = !0;
          return;
        }
        t(g);
      }
    }, { passive: !0, capture: a }),
    Ct(r, "pointerdown", (g) => {
      const h = oe(e);
      h && (i = !g.composedPath().includes(h) && !l(g));
    }, { passive: !0 }),
    s && Ct(r, "blur", (g) => {
      var h;
      const d = oe(e);
      ((h = r.document.activeElement) == null ? void 0 : h.tagName) === "IFRAME" && !(d != null && d.contains(r.document.activeElement)) && t(g);
    })
  ].filter(Boolean);
  return () => p.forEach((g) => g());
}
function lr(e, t = !1) {
  const n = x(), r = () => n.value = !!e();
  return r(), bo(r, t), n;
}
const bn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, wn = "__vueuse_ssr_handlers__";
bn[wn] = bn[wn] || {};
var _n = Object.getOwnPropertySymbols, _o = Object.prototype.hasOwnProperty, Eo = Object.prototype.propertyIsEnumerable, Oo = (e, t) => {
  var n = {};
  for (var r in e)
    _o.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && _n)
    for (var r of _n(e))
      t.indexOf(r) < 0 && Eo.call(e, r) && (n[r] = e[r]);
  return n;
};
function zc(e, t, n = {}) {
  const r = n, { window: o = mt } = r, a = Oo(r, ["window"]);
  let s;
  const i = lr(() => o && "ResizeObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, c = L(() => oe(e), (m) => {
    l(), i.value && o && m && (s = new ResizeObserver(t), s.observe(m, a));
  }, { immediate: !0, flush: "post" }), p = () => {
    l(), c();
  };
  return qe(p), {
    isSupported: i,
    stop: p
  };
}
var En = Object.getOwnPropertySymbols, To = Object.prototype.hasOwnProperty, Co = Object.prototype.propertyIsEnumerable, Po = (e, t) => {
  var n = {};
  for (var r in e)
    To.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && En)
    for (var r of En(e))
      t.indexOf(r) < 0 && Co.call(e, r) && (n[r] = e[r]);
  return n;
};
function Hc(e, t, n = {}) {
  const r = n, { window: o = mt } = r, a = Po(r, ["window"]);
  let s;
  const i = lr(() => o && "MutationObserver" in o), l = () => {
    s && (s.disconnect(), s = void 0);
  }, c = L(() => oe(e), (m) => {
    l(), i.value && o && m && (s = new MutationObserver(t), s.observe(m, a));
  }, { immediate: !0 }), p = () => {
    l(), c();
  };
  return qe(p), {
    isSupported: i,
    stop: p
  };
}
var On;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(On || (On = {}));
var So = Object.defineProperty, Tn = Object.getOwnPropertySymbols, xo = Object.prototype.hasOwnProperty, Io = Object.prototype.propertyIsEnumerable, Cn = (e, t, n) => t in e ? So(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ao = (e, t) => {
  for (var n in t || (t = {}))
    xo.call(t, n) && Cn(e, n, t[n]);
  if (Tn)
    for (var n of Tn(t))
      Io.call(t, n) && Cn(e, n, t[n]);
  return e;
};
const $o = {
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
Ao({
  linear: yo
}, $o);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const lt = () => {
}, No = Object.prototype.hasOwnProperty, Pn = (e, t) => No.call(e, t), Ro = Array.isArray, tt = (e) => typeof e == "function", gt = (e) => typeof e == "string", Lt = (e) => e !== null && typeof e == "object", Fo = Object.prototype.toString, Mo = (e) => Fo.call(e), Kc = (e) => Mo(e).slice(8, -1), Lo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Do = /-(\w)/g, jo = Lo((e) => e.replace(Do, (t, n) => n ? n.toUpperCase() : ""));
var Bo = typeof global == "object" && global && global.Object === Object && global;
const ko = Bo;
var zo = typeof self == "object" && self && self.Object === Object && self, Ho = ko || zo || Function("return this")();
const Dt = Ho;
var Ko = Dt.Symbol;
const ue = Ko;
var cr = Object.prototype, Uo = cr.hasOwnProperty, Vo = cr.toString, Le = ue ? ue.toStringTag : void 0;
function Wo(e) {
  var t = Uo.call(e, Le), n = e[Le];
  try {
    e[Le] = void 0;
    var r = !0;
  } catch {
  }
  var o = Vo.call(e);
  return r && (t ? e[Le] = n : delete e[Le]), o;
}
var qo = Object.prototype, Zo = qo.toString;
function Go(e) {
  return Zo.call(e);
}
var Jo = "[object Null]", Yo = "[object Undefined]", Sn = ue ? ue.toStringTag : void 0;
function jt(e) {
  return e == null ? e === void 0 ? Yo : Jo : Sn && Sn in Object(e) ? Wo(e) : Go(e);
}
function Bt(e) {
  return e != null && typeof e == "object";
}
var Qo = "[object Symbol]";
function kt(e) {
  return typeof e == "symbol" || Bt(e) && jt(e) == Qo;
}
function Xo(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var ea = Array.isArray;
const Ze = ea;
var ta = 1 / 0, xn = ue ? ue.prototype : void 0, In = xn ? xn.toString : void 0;
function ur(e) {
  if (typeof e == "string")
    return e;
  if (Ze(e))
    return Xo(e, ur) + "";
  if (kt(e))
    return In ? In.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ta ? "-0" : t;
}
function ct(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function na(e) {
  return e;
}
var ra = "[object AsyncFunction]", oa = "[object Function]", aa = "[object GeneratorFunction]", sa = "[object Proxy]";
function ia(e) {
  if (!ct(e))
    return !1;
  var t = jt(e);
  return t == oa || t == aa || t == ra || t == sa;
}
var la = Dt["__core-js_shared__"];
const Pt = la;
var An = function() {
  var e = /[^.]+$/.exec(Pt && Pt.keys && Pt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ca(e) {
  return !!An && An in e;
}
var ua = Function.prototype, fa = ua.toString;
function pa(e) {
  if (e != null) {
    try {
      return fa.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var da = /[\\^$.*+?()[\]{}|]/g, va = /^\[object .+?Constructor\]$/, ma = Function.prototype, ga = Object.prototype, ha = ma.toString, ya = ga.hasOwnProperty, ba = RegExp(
  "^" + ha.call(ya).replace(da, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function wa(e) {
  if (!ct(e) || ca(e))
    return !1;
  var t = ia(e) ? ba : va;
  return t.test(pa(e));
}
function _a(e, t) {
  return e == null ? void 0 : e[t];
}
function zt(e, t) {
  var n = _a(e, t);
  return wa(n) ? n : void 0;
}
function Ea(e, t, n) {
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
var Oa = 800, Ta = 16, Ca = Date.now;
function Pa(e) {
  var t = 0, n = 0;
  return function() {
    var r = Ca(), o = Ta - (r - n);
    if (n = r, o > 0) {
      if (++t >= Oa)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Sa(e) {
  return function() {
    return e;
  };
}
var xa = function() {
  try {
    var e = zt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ut = xa;
var Ia = ut ? function(e, t) {
  return ut(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Sa(t),
    writable: !0
  });
} : na;
const Aa = Ia;
var $a = Pa(Aa);
const Na = $a;
var Ra = 9007199254740991, Fa = /^(?:0|[1-9]\d*)$/;
function fr(e, t) {
  var n = typeof e;
  return t = t ?? Ra, !!t && (n == "number" || n != "symbol" && Fa.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ma(e, t, n) {
  t == "__proto__" && ut ? ut(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function pr(e, t) {
  return e === t || e !== e && t !== t;
}
var La = Object.prototype, Da = La.hasOwnProperty;
function ja(e, t, n) {
  var r = e[t];
  (!(Da.call(e, t) && pr(r, n)) || n === void 0 && !(t in e)) && Ma(e, t, n);
}
var $n = Math.max;
function Ba(e, t, n) {
  return t = $n(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = $n(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), Ea(e, this, i);
  };
}
var ka = 9007199254740991;
function za(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ka;
}
var Ha = "[object Arguments]";
function Nn(e) {
  return Bt(e) && jt(e) == Ha;
}
var dr = Object.prototype, Ka = dr.hasOwnProperty, Ua = dr.propertyIsEnumerable, Va = Nn(function() {
  return arguments;
}()) ? Nn : function(e) {
  return Bt(e) && Ka.call(e, "callee") && !Ua.call(e, "callee");
};
const vr = Va;
var Wa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, qa = /^\w*$/;
function Za(e, t) {
  if (Ze(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || kt(e) ? !0 : qa.test(e) || !Wa.test(e) || t != null && e in Object(t);
}
var Ga = zt(Object, "create");
const Ke = Ga;
function Ja() {
  this.__data__ = Ke ? Ke(null) : {}, this.size = 0;
}
function Ya(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Qa = "__lodash_hash_undefined__", Xa = Object.prototype, es = Xa.hasOwnProperty;
function ts(e) {
  var t = this.__data__;
  if (Ke) {
    var n = t[e];
    return n === Qa ? void 0 : n;
  }
  return es.call(t, e) ? t[e] : void 0;
}
var ns = Object.prototype, rs = ns.hasOwnProperty;
function os(e) {
  var t = this.__data__;
  return Ke ? t[e] !== void 0 : rs.call(t, e);
}
var as = "__lodash_hash_undefined__";
function ss(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Ke && t === void 0 ? as : t, this;
}
function ye(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ye.prototype.clear = Ja;
ye.prototype.delete = Ya;
ye.prototype.get = ts;
ye.prototype.has = os;
ye.prototype.set = ss;
function is() {
  this.__data__ = [], this.size = 0;
}
function ht(e, t) {
  for (var n = e.length; n--; )
    if (pr(e[n][0], t))
      return n;
  return -1;
}
var ls = Array.prototype, cs = ls.splice;
function us(e) {
  var t = this.__data__, n = ht(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : cs.call(t, n, 1), --this.size, !0;
}
function fs(e) {
  var t = this.__data__, n = ht(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ps(e) {
  return ht(this.__data__, e) > -1;
}
function ds(e, t) {
  var n = this.__data__, r = ht(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Ne(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ne.prototype.clear = is;
Ne.prototype.delete = us;
Ne.prototype.get = fs;
Ne.prototype.has = ps;
Ne.prototype.set = ds;
var vs = zt(Dt, "Map");
const ms = vs;
function gs() {
  this.size = 0, this.__data__ = {
    hash: new ye(),
    map: new (ms || Ne)(),
    string: new ye()
  };
}
function hs(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function yt(e, t) {
  var n = e.__data__;
  return hs(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ys(e) {
  var t = yt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function bs(e) {
  return yt(this, e).get(e);
}
function ws(e) {
  return yt(this, e).has(e);
}
function _s(e, t) {
  var n = yt(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function be(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
be.prototype.clear = gs;
be.prototype.delete = ys;
be.prototype.get = bs;
be.prototype.has = ws;
be.prototype.set = _s;
var Es = "Expected a function";
function Ht(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Es);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (Ht.Cache || be)(), n;
}
Ht.Cache = be;
var Os = 500;
function Ts(e) {
  var t = Ht(e, function(r) {
    return n.size === Os && n.clear(), r;
  }), n = t.cache;
  return t;
}
var Cs = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ps = /\\(\\)?/g, Ss = Ts(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Cs, function(n, r, o, a) {
    t.push(o ? a.replace(Ps, "$1") : r || n);
  }), t;
});
const xs = Ss;
function Is(e) {
  return e == null ? "" : ur(e);
}
function bt(e, t) {
  return Ze(e) ? e : Za(e, t) ? [e] : xs(Is(e));
}
var As = 1 / 0;
function Kt(e) {
  if (typeof e == "string" || kt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -As ? "-0" : t;
}
function mr(e, t) {
  t = bt(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Kt(t[n++])];
  return n && n == r ? e : void 0;
}
function $s(e, t, n) {
  var r = e == null ? void 0 : mr(e, t);
  return r === void 0 ? n : r;
}
function Ns(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Rn = ue ? ue.isConcatSpreadable : void 0;
function Rs(e) {
  return Ze(e) || vr(e) || !!(Rn && e && e[Rn]);
}
function gr(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = Rs), o || (o = []); ++a < s; ) {
    var i = e[a];
    t > 0 && n(i) ? t > 1 ? gr(i, t - 1, n, r, o) : Ns(o, i) : r || (o[o.length] = i);
  }
  return o;
}
function Fs(e) {
  var t = e == null ? 0 : e.length;
  return t ? gr(e, 1) : [];
}
function Ms(e) {
  return Na(Ba(e, void 0, Fs), e + "");
}
function Ls(e, t) {
  return e != null && t in Object(e);
}
function Ds(e, t, n) {
  t = bt(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = Kt(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && za(o) && fr(s, o) && (Ze(e) || vr(e)));
}
function js(e, t) {
  return e != null && Ds(e, t, Ls);
}
function Nt(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function Ut(e) {
  return e == null;
}
function Bs(e) {
  return e === void 0;
}
function ks(e, t, n, r) {
  if (!ct(e))
    return e;
  t = bt(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var l = Kt(t[o]), c = n;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return e;
    if (o != s) {
      var p = i[l];
      c = r ? r(p, l, i) : void 0, c === void 0 && (c = ct(p) ? p : fr(t[o + 1]) ? [] : {});
    }
    ja(i, l, c), i = i[l];
  }
  return e;
}
function zs(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = mr(e, s);
    n(i, s) && ks(a, bt(s, e), i);
  }
  return a;
}
function Hs(e, t) {
  return zs(e, t, function(n, r) {
    return js(e, r);
  });
}
var Ks = Ms(function(e, t) {
  return e == null ? {} : Hs(e, t);
});
const Us = Ks, Vs = (e) => e === void 0, hr = (e) => typeof e == "boolean", Ue = (e) => typeof e == "number", ft = (e) => typeof Element > "u" ? !1 : e instanceof Element, Ws = (e) => gt(e) ? !Number.isNaN(Number(e)) : !1;
class yr extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Uc(e, t) {
  throw new yr(`[${e}] ${t}`);
}
function Pe(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = gt(e) ? new yr(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const qs = "utils/dom/style", br = (e = "") => e.split(" ").filter((t) => !!t.trim()), Vc = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
}, Wc = (e, t) => {
  !e || !t.trim() || e.classList.add(...br(t));
}, qc = (e, t) => {
  !e || !t.trim() || e.classList.remove(...br(t));
}, Zc = (e, t) => {
  var n;
  if (!k || !e || !t)
    return "";
  let r = jo(t);
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
function Zs(e, t = "px") {
  if (!e)
    return "";
  if (Ue(e) || Ws(e))
    return `${e}${t}`;
  if (gt(e))
    return e;
  Pe(qs, "binding value must be a string or number");
}
let nt;
const Gc = (e) => {
  var t;
  if (!k)
    return 0;
  if (nt !== void 0)
    return nt;
  const n = document.createElement("div");
  n.className = `${e}-scrollbar__wrap`, n.style.visibility = "hidden", n.style.width = "100px", n.style.position = "absolute", n.style.top = "-9999px", document.body.appendChild(n);
  const r = n.offsetWidth;
  n.style.overflow = "scroll";
  const o = document.createElement("div");
  o.style.width = "100%", n.appendChild(o);
  const a = o.offsetWidth;
  return (t = n.parentNode) == null || t.removeChild(n), nt = r - a, nt;
};
function Jc(e, t) {
  if (!k)
    return;
  if (!t) {
    e.scrollTop = 0;
    return;
  }
  const n = [];
  let r = t.offsetParent;
  for (; r !== null && e !== r && e.contains(r); )
    n.push(r), r = r.offsetParent;
  const o = t.offsetTop + n.reduce((l, c) => l + c.offsetTop, 0), a = o + t.offsetHeight, s = e.scrollTop, i = s + e.clientHeight;
  o < s ? e.scrollTop = o : a > i && (e.scrollTop = a - e.clientHeight);
}
/*! Element Plus Icons Vue v2.3.1 */
var Gs = /* @__PURE__ */ A({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (t, n) => (j(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
      })
    ]));
  }
}), Yc = Gs, Js = /* @__PURE__ */ A({
  name: "CircleCheck",
  __name: "circle-check",
  setup(e) {
    return (t, n) => (j(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      ee("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
      })
    ]));
  }
}), Ys = Js, Qs = /* @__PURE__ */ A({
  name: "CircleClose",
  __name: "circle-close",
  setup(e) {
    return (t, n) => (j(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      ee("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), Xs = Qs, ei = /* @__PURE__ */ A({
  name: "Close",
  __name: "close",
  setup(e) {
    return (t, n) => (j(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ti = ei, ni = /* @__PURE__ */ A({
  name: "Hide",
  __name: "hide",
  setup(e) {
    return (t, n) => (j(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z"
      }),
      ee("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z"
      })
    ]));
  }
}), Qc = ni, ri = /* @__PURE__ */ A({
  name: "Loading",
  __name: "loading",
  setup(e) {
    return (t, n) => (j(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
      })
    ]));
  }
}), oi = ri, ai = /* @__PURE__ */ A({
  name: "View",
  __name: "view",
  setup(e) {
    return (t, n) => (j(), q("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      ee("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Xc = ai;
const wr = "__epPropKey", N = (e) => e, si = (e) => Lt(e) && !!e[wr], Vt = (e, t) => {
  if (!Lt(e) || si(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, l = {
    type: a,
    required: !!r,
    validator: n || s ? (c) => {
      let p = !1, m = [];
      if (n && (m = Array.from(n), Pn(e, "default") && m.push(o), p || (p = m.includes(c))), s && (p || (p = s(c))), !p && m.length > 0) {
        const g = [...new Set(m)].map((h) => JSON.stringify(h)).join(", ");
        to(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${g}], got value ${JSON.stringify(c)}.`);
      }
      return p;
    } : void 0,
    [wr]: !0
  };
  return Pn(e, "default") && (l.default = o), l;
}, J = (e) => Nt(Object.entries(e).map(([t, n]) => [
  t,
  Vt(n, t)
])), eu = N([
  String,
  Object,
  Function
]), tu = {
  Close: ti
}, nu = {
  validating: oi,
  success: Ys,
  error: Xs
}, Wt = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, ru = (e, t) => (e.install = (n) => {
  n.directive(t, e);
}, e), ou = (e) => (e.install = lt, e), pt = {
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
}, au = "update:modelValue", su = "change", iu = ({ from: e, replacement: t, scope: n, version: r, ref: o, type: a = "API" }, s) => {
  L(() => v(s), (i) => {
    i && Pe(n, `[${a}] ${e} is about to be deprecated in version ${r}, please use ${t} instead.
For more detail, please visit: ${o}
`);
  }, {
    immediate: !0
  });
};
var ii = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const li = (e) => (t, n) => ci(t, n, v(e)), ci = (e, t, n) => $s(n, e, e).replace(/\{(\w+)\}/g, (r, o) => {
  var a;
  return `${(a = t == null ? void 0 : t[o]) != null ? a : `{${o}}`}`;
}), ui = (e) => {
  const t = C(() => v(e).name), n = no(e) ? e : x(e);
  return {
    lang: t,
    locale: n,
    t: li(e)
  };
}, fi = Symbol("localeContextKey"), lu = (e) => {
  const t = e || V(fi, x());
  return ui(C(() => t.value || ii));
}, St = "el", pi = "is-", ge = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, di = Symbol("namespaceContextKey"), qt = (e) => {
  const t = e || (Oe() ? V(di, x(St)) : x(St));
  return C(() => v(t) || St);
}, Re = (e, t) => {
  const n = qt(t);
  return {
    namespace: n,
    b: (f = "") => ge(n.value, e, f, "", ""),
    e: (f) => f ? ge(n.value, e, "", f, "") : "",
    m: (f) => f ? ge(n.value, e, "", "", f) : "",
    be: (f, y) => f && y ? ge(n.value, e, f, y, "") : "",
    em: (f, y) => f && y ? ge(n.value, e, "", f, y) : "",
    bm: (f, y) => f && y ? ge(n.value, e, f, "", y) : "",
    bem: (f, y, u) => f && y && u ? ge(n.value, e, f, y, u) : "",
    is: (f, ...y) => {
      const u = y.length >= 1 ? y[0] : !0;
      return f && u ? `${pi}${f}` : "";
    },
    cssVar: (f) => {
      const y = {};
      for (const u in f)
        f[u] && (y[`--${n.value}-${u}`] = f[u]);
      return y;
    },
    cssVarName: (f) => `--${n.value}-${f}`,
    cssVarBlock: (f) => {
      const y = {};
      for (const u in f)
        f[u] && (y[`--${n.value}-${e}-${u}`] = f[u]);
      return y;
    },
    cssVarBlockName: (f) => `--${n.value}-${e}-${f}`
  };
}, vi = Vt({
  type: N(Boolean),
  default: null
}), mi = Vt({
  type: N(Function)
}), _r = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: vi,
    [n]: mi
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: l,
      shouldProceed: c,
      onShow: p,
      onHide: m
    }) => {
      const g = Oe(), { emit: h } = g, d = g.props, f = C(() => tt(d[n])), y = C(() => d[e] === null), u = (E) => {
        s.value !== !0 && (s.value = !0, i && (i.value = E), tt(p) && p(E));
      }, w = (E) => {
        s.value !== !1 && (s.value = !1, i && (i.value = E), tt(m) && m(E));
      }, O = (E) => {
        if (d.disabled === !0 || tt(c) && !c())
          return;
        const P = f.value && k;
        P && h(t, !0), (y.value || !P) && u(E);
      }, b = (E) => {
        if (d.disabled === !0 || !k)
          return;
        const P = f.value && k;
        P && h(t, !1), (y.value || !P) && w(E);
      }, T = (E) => {
        hr(E) && (d.disabled && E ? f.value && h(t, !1) : s.value !== E && (E ? u() : w()));
      }, S = () => {
        s.value ? b() : O();
      };
      return L(() => d[e], T), l && g.appContext.config.globalProperties.$route !== void 0 && L(() => ({
        ...g.proxy.$route
      }), () => {
        l.value && s.value && b();
      }), fe(() => {
        T(d[e]);
      }), {
        hide: b,
        show: O,
        toggle: S,
        hasUpdateHandler: f
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
};
_r("modelValue");
var K = "top", Z = "bottom", G = "right", U = "left", Zt = "auto", Ge = [K, Z, G, U], Se = "start", Ve = "end", gi = "clippingParents", Er = "viewport", De = "popper", hi = "reference", Fn = Ge.reduce(function(e, t) {
  return e.concat([t + "-" + Se, t + "-" + Ve]);
}, []), Gt = [].concat(Ge, [Zt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Se, t + "-" + Ve]);
}, []), yi = "beforeRead", bi = "read", wi = "afterRead", _i = "beforeMain", Ei = "main", Oi = "afterMain", Ti = "beforeWrite", Ci = "write", Pi = "afterWrite", Si = [yi, bi, wi, _i, Ei, Oi, Ti, Ci, Pi];
function te(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Y(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function xe(e) {
  var t = Y(e).Element;
  return e instanceof t || e instanceof Element;
}
function W(e) {
  var t = Y(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Jt(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Y(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function xi(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !W(a) || !te(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function Ii(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !W(o) || !te(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
var Or = { name: "applyStyles", enabled: !0, phase: "write", fn: xi, effect: Ii, requires: ["computeStyles"] };
function X(e) {
  return e.split("-")[0];
}
var he = Math.max, dt = Math.min, Ie = Math.round;
function Ae(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, o = 1;
  if (W(e) && t) {
    var a = e.offsetHeight, s = e.offsetWidth;
    s > 0 && (r = Ie(n.width) / s || 1), a > 0 && (o = Ie(n.height) / a || 1);
  }
  return { width: n.width / r, height: n.height / o, top: n.top / o, right: n.right / r, bottom: n.bottom / o, left: n.left / r, x: n.left / r, y: n.top / o };
}
function Yt(e) {
  var t = Ae(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function Tr(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Jt(n)) {
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
  return Y(e).getComputedStyle(e);
}
function Ai(e) {
  return ["table", "td", "th"].indexOf(te(e)) >= 0;
}
function de(e) {
  return ((xe(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function wt(e) {
  return te(e) === "html" ? e : e.assignedSlot || e.parentNode || (Jt(e) ? e.host : null) || de(e);
}
function Mn(e) {
  return !W(e) || se(e).position === "fixed" ? null : e.offsetParent;
}
function $i(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && W(e)) {
    var r = se(e);
    if (r.position === "fixed")
      return null;
  }
  var o = wt(e);
  for (Jt(o) && (o = o.host); W(o) && ["html", "body"].indexOf(te(o)) < 0; ) {
    var a = se(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Je(e) {
  for (var t = Y(e), n = Mn(e); n && Ai(n) && se(n).position === "static"; )
    n = Mn(n);
  return n && (te(n) === "html" || te(n) === "body" && se(n).position === "static") ? t : n || $i(e) || t;
}
function Qt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Be(e, t, n) {
  return he(e, dt(t, n));
}
function Ni(e, t, n) {
  var r = Be(e, t, n);
  return r > n ? n : r;
}
function Cr() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Pr(e) {
  return Object.assign({}, Cr(), e);
}
function Sr(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Ri = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Pr(typeof e != "number" ? e : Sr(e, Ge));
};
function Fi(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = X(n.placement), l = Qt(i), c = [U, G].indexOf(i) >= 0, p = c ? "height" : "width";
  if (!(!a || !s)) {
    var m = Ri(o.padding, n), g = Yt(a), h = l === "y" ? K : U, d = l === "y" ? Z : G, f = n.rects.reference[p] + n.rects.reference[l] - s[l] - n.rects.popper[p], y = s[l] - n.rects.reference[l], u = Je(a), w = u ? l === "y" ? u.clientHeight || 0 : u.clientWidth || 0 : 0, O = f / 2 - y / 2, b = m[h], T = w - g[p] - m[d], S = w / 2 - g[p] / 2 + O, E = Be(b, S, T), P = l;
    n.modifiersData[r] = (t = {}, t[P] = E, t.centerOffset = E - S, t);
  }
}
function Mi(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !Tr(t.elements.popper, o) || (t.elements.arrow = o));
}
var Li = { name: "arrow", enabled: !0, phase: "main", fn: Fi, effect: Mi, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function $e(e) {
  return e.split("-")[1];
}
var Di = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function ji(e) {
  var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
  return { x: Ie(t * o) / o || 0, y: Ie(n * o) / o || 0 };
}
function Ln(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, c = e.adaptive, p = e.roundOffsets, m = e.isFixed, g = s.x, h = g === void 0 ? 0 : g, d = s.y, f = d === void 0 ? 0 : d, y = typeof p == "function" ? p({ x: h, y: f }) : { x: h, y: f };
  h = y.x, f = y.y;
  var u = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), O = U, b = K, T = window;
  if (c) {
    var S = Je(n), E = "clientHeight", P = "clientWidth";
    if (S === Y(n) && (S = de(n), se(S).position !== "static" && i === "absolute" && (E = "scrollHeight", P = "scrollWidth")), S = S, o === K || (o === U || o === G) && a === Ve) {
      b = Z;
      var R = m && S === T && T.visualViewport ? T.visualViewport.height : S[E];
      f -= R - r.height, f *= l ? 1 : -1;
    }
    if (o === U || (o === K || o === Z) && a === Ve) {
      O = G;
      var I = m && S === T && T.visualViewport ? T.visualViewport.width : S[P];
      h -= I - r.width, h *= l ? 1 : -1;
    }
  }
  var F = Object.assign({ position: i }, c && Di), $ = p === !0 ? ji({ x: h, y: f }) : { x: h, y: f };
  if (h = $.x, f = $.y, l) {
    var M;
    return Object.assign({}, F, (M = {}, M[b] = w ? "0" : "", M[O] = u ? "0" : "", M.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + f + "px)" : "translate3d(" + h + "px, " + f + "px, 0)", M));
  }
  return Object.assign({}, F, (t = {}, t[b] = w ? f + "px" : "", t[O] = u ? h + "px" : "", t.transform = "", t));
}
function Bi(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, l = i === void 0 ? !0 : i, c = { placement: X(t.placement), variation: $e(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Ln(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ln(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var xr = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Bi, data: {} }, rt = { passive: !0 };
function ki(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, l = Y(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(p) {
    p.addEventListener("scroll", n.update, rt);
  }), i && l.addEventListener("resize", n.update, rt), function() {
    a && c.forEach(function(p) {
      p.removeEventListener("scroll", n.update, rt);
    }), i && l.removeEventListener("resize", n.update, rt);
  };
}
var Ir = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: ki, data: {} }, zi = { left: "right", right: "left", bottom: "top", top: "bottom" };
function it(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return zi[t];
  });
}
var Hi = { start: "end", end: "start" };
function Dn(e) {
  return e.replace(/start|end/g, function(t) {
    return Hi[t];
  });
}
function Xt(e) {
  var t = Y(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function en(e) {
  return Ae(de(e)).left + Xt(e).scrollLeft;
}
function Ki(e) {
  var t = Y(e), n = de(e), r = t.visualViewport, o = n.clientWidth, a = n.clientHeight, s = 0, i = 0;
  return r && (o = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = r.offsetLeft, i = r.offsetTop)), { width: o, height: a, x: s + en(e), y: i };
}
function Ui(e) {
  var t, n = de(e), r = Xt(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = he(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = he(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + en(e), l = -r.scrollTop;
  return se(o || n).direction === "rtl" && (i += he(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: l };
}
function tn(e) {
  var t = se(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Ar(e) {
  return ["html", "body", "#document"].indexOf(te(e)) >= 0 ? e.ownerDocument.body : W(e) && tn(e) ? e : Ar(wt(e));
}
function ke(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Ar(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = Y(r), s = o ? [a].concat(a.visualViewport || [], tn(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(ke(wt(s)));
}
function Rt(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Vi(e) {
  var t = Ae(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function jn(e, t) {
  return t === Er ? Rt(Ki(e)) : xe(t) ? Vi(t) : Rt(Ui(de(e)));
}
function Wi(e) {
  var t = ke(wt(e)), n = ["absolute", "fixed"].indexOf(se(e).position) >= 0, r = n && W(e) ? Je(e) : e;
  return xe(r) ? t.filter(function(o) {
    return xe(o) && Tr(o, r) && te(o) !== "body";
  }) : [];
}
function qi(e, t, n) {
  var r = t === "clippingParents" ? Wi(e) : [].concat(t), o = [].concat(r, [n]), a = o[0], s = o.reduce(function(i, l) {
    var c = jn(e, l);
    return i.top = he(c.top, i.top), i.right = dt(c.right, i.right), i.bottom = dt(c.bottom, i.bottom), i.left = he(c.left, i.left), i;
  }, jn(e, a));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function $r(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? X(r) : null, a = r ? $e(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, l;
  switch (o) {
    case K:
      l = { x: s, y: t.y - n.height };
      break;
    case Z:
      l = { x: s, y: t.y + t.height };
      break;
    case G:
      l = { x: t.x + t.width, y: i };
      break;
    case U:
      l = { x: t.x - n.width, y: i };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var c = o ? Qt(o) : null;
  if (c != null) {
    var p = c === "y" ? "height" : "width";
    switch (a) {
      case Se:
        l[c] = l[c] - (t[p] / 2 - n[p] / 2);
        break;
      case Ve:
        l[c] = l[c] + (t[p] / 2 - n[p] / 2);
        break;
    }
  }
  return l;
}
function We(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.boundary, s = a === void 0 ? gi : a, i = n.rootBoundary, l = i === void 0 ? Er : i, c = n.elementContext, p = c === void 0 ? De : c, m = n.altBoundary, g = m === void 0 ? !1 : m, h = n.padding, d = h === void 0 ? 0 : h, f = Pr(typeof d != "number" ? d : Sr(d, Ge)), y = p === De ? hi : De, u = e.rects.popper, w = e.elements[g ? y : p], O = qi(xe(w) ? w : w.contextElement || de(e.elements.popper), s, l), b = Ae(e.elements.reference), T = $r({ reference: b, element: u, strategy: "absolute", placement: o }), S = Rt(Object.assign({}, u, T)), E = p === De ? S : b, P = { top: O.top - E.top + f.top, bottom: E.bottom - O.bottom + f.bottom, left: O.left - E.left + f.left, right: E.right - O.right + f.right }, R = e.modifiersData.offset;
  if (p === De && R) {
    var I = R[o];
    Object.keys(P).forEach(function(F) {
      var $ = [G, Z].indexOf(F) >= 0 ? 1 : -1, M = [K, Z].indexOf(F) >= 0 ? "y" : "x";
      P[F] += I[M] * $;
    });
  }
  return P;
}
function Zi(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, l = n.allowedAutoPlacements, c = l === void 0 ? Gt : l, p = $e(r), m = p ? i ? Fn : Fn.filter(function(d) {
    return $e(d) === p;
  }) : Ge, g = m.filter(function(d) {
    return c.indexOf(d) >= 0;
  });
  g.length === 0 && (g = m);
  var h = g.reduce(function(d, f) {
    return d[f] = We(e, { placement: f, boundary: o, rootBoundary: a, padding: s })[X(f)], d;
  }, {});
  return Object.keys(h).sort(function(d, f) {
    return h[d] - h[f];
  });
}
function Gi(e) {
  if (X(e) === Zt)
    return [];
  var t = it(e);
  return [Dn(e), t, Dn(t)];
}
function Ji(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, l = n.fallbackPlacements, c = n.padding, p = n.boundary, m = n.rootBoundary, g = n.altBoundary, h = n.flipVariations, d = h === void 0 ? !0 : h, f = n.allowedAutoPlacements, y = t.options.placement, u = X(y), w = u === y, O = l || (w || !d ? [it(y)] : Gi(y)), b = [y].concat(O).reduce(function(ve, ne) {
      return ve.concat(X(ne) === Zt ? Zi(t, { placement: ne, boundary: p, rootBoundary: m, padding: c, flipVariations: d, allowedAutoPlacements: f }) : ne);
    }, []), T = t.rects.reference, S = t.rects.popper, E = /* @__PURE__ */ new Map(), P = !0, R = b[0], I = 0; I < b.length; I++) {
      var F = b[I], $ = X(F), M = $e(F) === Se, z = [K, Z].indexOf($) >= 0, B = z ? "width" : "height", D = We(t, { placement: F, boundary: p, rootBoundary: m, altBoundary: g, padding: c }), _ = z ? M ? G : U : M ? Z : K;
      T[B] > S[B] && (_ = it(_));
      var H = it(_), Q = [];
      if (a && Q.push(D[$] <= 0), i && Q.push(D[_] <= 0, D[H] <= 0), Q.every(function(ve) {
        return ve;
      })) {
        R = F, P = !1;
        break;
      }
      E.set(F, Q);
    }
    if (P)
      for (var Ye = d ? 3 : 1, Et = function(ve) {
        var ne = b.find(function(Xe) {
          var Me = E.get(Xe);
          if (Me)
            return Me.slice(0, ve).every(function(we) {
              return we;
            });
        });
        if (ne)
          return R = ne, "break";
      }, Fe = Ye; Fe > 0; Fe--) {
        var Qe = Et(Fe);
        if (Qe === "break")
          break;
      }
    t.placement !== R && (t.modifiersData[r]._skip = !0, t.placement = R, t.reset = !0);
  }
}
var Yi = { name: "flip", enabled: !0, phase: "main", fn: Ji, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Bn(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function kn(e) {
  return [K, G, Z, U].some(function(t) {
    return e[t] >= 0;
  });
}
function Qi(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = We(t, { elementContext: "reference" }), i = We(t, { altBoundary: !0 }), l = Bn(s, r), c = Bn(i, o, a), p = kn(l), m = kn(c);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: p, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": p, "data-popper-escaped": m });
}
var Xi = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: Qi };
function el(e, t, n) {
  var r = X(e), o = [U, K].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [U, G].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function tl(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = Gt.reduce(function(p, m) {
    return p[m] = el(m, t.rects, a), p;
  }, {}), i = s[t.placement], l = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s;
}
var nl = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: tl };
function rl(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = $r({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var Nr = { name: "popperOffsets", enabled: !0, phase: "read", fn: rl, data: {} };
function ol(e) {
  return e === "x" ? "y" : "x";
}
function al(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, l = n.boundary, c = n.rootBoundary, p = n.altBoundary, m = n.padding, g = n.tether, h = g === void 0 ? !0 : g, d = n.tetherOffset, f = d === void 0 ? 0 : d, y = We(t, { boundary: l, rootBoundary: c, padding: m, altBoundary: p }), u = X(t.placement), w = $e(t.placement), O = !w, b = Qt(u), T = ol(b), S = t.modifiersData.popperOffsets, E = t.rects.reference, P = t.rects.popper, R = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f, I = typeof R == "number" ? { mainAxis: R, altAxis: R } : Object.assign({ mainAxis: 0, altAxis: 0 }, R), F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, $ = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var M, z = b === "y" ? K : U, B = b === "y" ? Z : G, D = b === "y" ? "height" : "width", _ = S[b], H = _ + y[z], Q = _ - y[B], Ye = h ? -P[D] / 2 : 0, Et = w === Se ? E[D] : P[D], Fe = w === Se ? -P[D] : -E[D], Qe = t.elements.arrow, ve = h && Qe ? Yt(Qe) : { width: 0, height: 0 }, ne = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Cr(), Xe = ne[z], Me = ne[B], we = Be(0, E[D], ve[D]), Wr = O ? E[D] / 2 - Ye - we - Xe - I.mainAxis : Et - we - Xe - I.mainAxis, qr = O ? -E[D] / 2 + Ye + we + Me + I.mainAxis : Fe + we + Me + I.mainAxis, Ot = t.elements.arrow && Je(t.elements.arrow), Zr = Ot ? b === "y" ? Ot.clientTop || 0 : Ot.clientLeft || 0 : 0, ln = (M = F == null ? void 0 : F[b]) != null ? M : 0, Gr = _ + Wr - ln - Zr, Jr = _ + qr - ln, cn = Be(h ? dt(H, Gr) : H, _, h ? he(Q, Jr) : Q);
      S[b] = cn, $[b] = cn - _;
    }
    if (i) {
      var un, Yr = b === "x" ? K : U, Qr = b === "x" ? Z : G, me = S[T], et = T === "y" ? "height" : "width", fn = me + y[Yr], pn = me - y[Qr], Tt = [K, U].indexOf(u) !== -1, dn = (un = F == null ? void 0 : F[T]) != null ? un : 0, vn = Tt ? fn : me - E[et] - P[et] - dn + I.altAxis, mn = Tt ? me + E[et] + P[et] - dn - I.altAxis : pn, gn = h && Tt ? Ni(vn, me, mn) : Be(h ? vn : fn, me, h ? mn : pn);
      S[T] = gn, $[T] = gn - me;
    }
    t.modifiersData[r] = $;
  }
}
var sl = { name: "preventOverflow", enabled: !0, phase: "main", fn: al, requiresIfExists: ["offset"] };
function il(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function ll(e) {
  return e === Y(e) || !W(e) ? Xt(e) : il(e);
}
function cl(e) {
  var t = e.getBoundingClientRect(), n = Ie(t.width) / e.offsetWidth || 1, r = Ie(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function ul(e, t, n) {
  n === void 0 && (n = !1);
  var r = W(t), o = W(t) && cl(t), a = de(t), s = Ae(e, o), i = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (r || !r && !n) && ((te(t) !== "body" || tn(a)) && (i = ll(t)), W(t) ? (l = Ae(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = en(a))), { x: s.left + i.scrollLeft - l.x, y: s.top + i.scrollTop - l.y, width: s.width, height: s.height };
}
function fl(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!n.has(i)) {
        var l = t.get(i);
        l && o(l);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || o(a);
  }), r;
}
function pl(e) {
  var t = fl(e);
  return Si.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function dl(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function vl(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var zn = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Hn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function nn(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? zn : o;
  return function(s, i, l) {
    l === void 0 && (l = a);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, zn, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, p = [], m = !1, g = { state: c, setOptions: function(f) {
      var y = typeof f == "function" ? f(c.options) : f;
      d(), c.options = Object.assign({}, a, c.options, y), c.scrollParents = { reference: xe(s) ? ke(s) : s.contextElement ? ke(s.contextElement) : [], popper: ke(i) };
      var u = pl(vl([].concat(r, c.options.modifiers)));
      return c.orderedModifiers = u.filter(function(w) {
        return w.enabled;
      }), h(), g.update();
    }, forceUpdate: function() {
      if (!m) {
        var f = c.elements, y = f.reference, u = f.popper;
        if (Hn(y, u)) {
          c.rects = { reference: ul(y, Je(u), c.options.strategy === "fixed"), popper: Yt(u) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(P) {
            return c.modifiersData[P.name] = Object.assign({}, P.data);
          });
          for (var w = 0; w < c.orderedModifiers.length; w++) {
            if (c.reset === !0) {
              c.reset = !1, w = -1;
              continue;
            }
            var O = c.orderedModifiers[w], b = O.fn, T = O.options, S = T === void 0 ? {} : T, E = O.name;
            typeof b == "function" && (c = b({ state: c, options: S, name: E, instance: g }) || c);
          }
        }
      }
    }, update: dl(function() {
      return new Promise(function(f) {
        g.forceUpdate(), f(c);
      });
    }), destroy: function() {
      d(), m = !0;
    } };
    if (!Hn(s, i))
      return g;
    g.setOptions(l).then(function(f) {
      !m && l.onFirstUpdate && l.onFirstUpdate(f);
    });
    function h() {
      c.orderedModifiers.forEach(function(f) {
        var y = f.name, u = f.options, w = u === void 0 ? {} : u, O = f.effect;
        if (typeof O == "function") {
          var b = O({ state: c, name: y, instance: g, options: w }), T = function() {
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
    return g;
  };
}
nn();
var ml = [Ir, Nr, xr, Or];
nn({ defaultModifiers: ml });
var gl = [Ir, Nr, xr, Or, nl, Yi, sl, Li, Xi], hl = nn({ defaultModifiers: gl });
const yl = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: l }) => {
      const c = bl(l);
      Object.assign(s.value, c);
    },
    requires: ["computeStyles"]
  }, o = C(() => {
    const { onFirstUpdate: l, placement: c, strategy: p, modifiers: m } = v(n);
    return {
      onFirstUpdate: l,
      placement: c || "bottom",
      strategy: p || "absolute",
      modifiers: [
        ...m || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = ro(), s = x({
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
  return L(o, (l) => {
    const c = v(a);
    c && c.setOptions(l);
  }, {
    deep: !0
  }), L([e, t], ([l, c]) => {
    i(), !(!l || !c) && (a.value = hl(l, c, v(o)));
  }), pe(() => {
    i();
  }), {
    state: C(() => {
      var l;
      return { ...((l = v(a)) == null ? void 0 : l.state) || {} };
    }),
    styles: C(() => v(s).styles),
    attributes: C(() => v(s).attributes),
    update: () => {
      var l;
      return (l = v(a)) == null ? void 0 : l.update();
    },
    forceUpdate: () => {
      var l;
      return (l = v(a)) == null ? void 0 : l.forceUpdate();
    },
    instanceRef: C(() => v(a))
  };
};
function bl(e) {
  const t = Object.keys(e.elements), n = Nt(t.map((o) => [o, e.styles[o] || {}])), r = Nt(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
function Kn() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return qe(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Ft = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, wl = Symbol("elIdInjection"), Rr = () => Oe() ? V(wl, Ft) : Ft, _l = (e) => {
  const t = Rr();
  !k && t === Ft && Pe("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = qt();
  return C(() => v(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let Ee = [];
const Un = (e) => {
  const t = e;
  t.key === pt.esc && Ee.forEach((n) => n(t));
}, El = (e) => {
  fe(() => {
    Ee.length === 0 && document.addEventListener("keydown", Un), k && Ee.push(e);
  }), pe(() => {
    Ee = Ee.filter((t) => t !== e), Ee.length === 0 && k && document.removeEventListener("keydown", Un);
  });
};
let Vn;
const Fr = () => {
  const e = qt(), t = Rr(), n = C(() => `${e.value}-popper-container-${t.prefix}`), r = C(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, Ol = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, Tl = () => {
  const { id: e, selector: t } = Fr();
  return oo(() => {
    k && (process.env.NODE_ENV === "test" || !Vn && !document.body.querySelector(t.value)) && (Vn = Ol(e.value));
  }), {
    id: e,
    selector: t
  };
}, Cl = J({
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
}), Pl = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = Kn(), {
    registerTimeout: s,
    cancelTimeout: i
  } = Kn();
  return {
    onOpen: (p) => {
      a(() => {
        r(p);
        const m = v(n);
        Ue(m) && m > 0 && s(() => {
          o(p);
        }, m);
      }, v(e));
    },
    onClose: (p) => {
      i(), a(() => {
        o(p);
      }, v(t));
    }
  };
}, Mr = Symbol("elForwardRef"), Sl = (e) => {
  Te(Mr, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, xl = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Wn = {
  current: 0
}, qn = x(0), Il = 2e3, Zn = Symbol("elZIndexContextKey"), Al = Symbol("zIndexContextKey"), $l = (e) => {
  const t = Oe() ? V(Zn, Wn) : Wn, n = e || (Oe() ? V(Al, void 0) : void 0), r = C(() => {
    const s = v(n);
    return Ue(s) ? s : Il;
  }), o = C(() => r.value + qn.value), a = () => (t.current++, qn.value = t.current, o.value);
  return !k && !V(Zn) && Pe("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
}, Nl = J({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Lr = (e) => Us(Nl, e);
var ie = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const Rl = J({
  size: {
    type: N([Number, String])
  },
  color: {
    type: String
  }
}), Fl = A({
  name: "ElIcon",
  inheritAttrs: !1
}), Ml = /* @__PURE__ */ A({
  ...Fl,
  props: Rl,
  setup(e) {
    const t = e, n = Re("icon"), r = C(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: Vs(o) ? void 0 : Zs(o),
        "--color": a
      };
    });
    return (o, a) => (j(), q("i", vt({
      class: v(n).b(),
      style: v(r)
    }, o.$attrs), [
      ae(o.$slots, "default")
    ], 16));
  }
});
var Ll = /* @__PURE__ */ ie(Ml, [["__file", "icon.vue"]]);
const cu = Wt(Ll), uu = Symbol("formContextKey"), Gn = Symbol("formItemContextKey"), rn = Symbol("popper"), Dr = Symbol("popperContent"), Dl = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], jr = J({
  role: {
    type: String,
    values: Dl,
    default: "tooltip"
  }
}), jl = A({
  name: "ElPopper",
  inheritAttrs: !1
}), Bl = /* @__PURE__ */ A({
  ...jl,
  props: jr,
  setup(e, { expose: t }) {
    const n = e, r = x(), o = x(), a = x(), s = x(), i = C(() => n.role), l = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(l), Te(rn, l), (c, p) => ae(c.$slots, "default");
  }
});
var kl = /* @__PURE__ */ ie(Bl, [["__file", "popper.vue"]]);
const Br = J({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), zl = A({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Hl = /* @__PURE__ */ A({
  ...zl,
  props: Br,
  setup(e, { expose: t }) {
    const n = e, r = Re("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = V(Dr, void 0);
    return L(() => n.arrowOffset, (i) => {
      o.value = i;
    }), pe(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, l) => (j(), q("span", {
      ref_key: "arrowRef",
      ref: a,
      class: ar(v(r).e("arrow")),
      style: ao(v(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Kl = /* @__PURE__ */ ie(Hl, [["__file", "arrow.vue"]]);
const xt = "ElOnlyChild", Ul = A({
  name: xt,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = V(Mr), a = xl((r = o == null ? void 0 : o.setForwardRef) != null ? r : lt);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i)
        return null;
      if (i.length > 1)
        return Pe(xt, "requires exact only one valid child."), null;
      const l = kr(i);
      return l ? sr(so(l, n), [[a]]) : (Pe(xt, "no valid child node found"), null);
    };
  }
});
function kr(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Lt(n))
      switch (n.type) {
        case co:
          continue;
        case lo:
        case "svg":
          return Jn(n);
        case io:
          return kr(n.children);
        default:
          return n;
      }
    return Jn(n);
  }
  return null;
}
function Jn(e) {
  const t = Re("only-child");
  return ze("span", {
    class: t.e("content")
  }, [e]);
}
const zr = J({
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
}), Vl = A({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Wl = /* @__PURE__ */ A({
  ...Vl,
  props: zr,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = V(rn, void 0);
    Sl(o);
    const a = C(() => i.value ? n.id : void 0), s = C(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = C(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), l = C(() => i.value ? `${n.open}` : void 0);
    let c;
    return fe(() => {
      L(() => n.virtualRef, (p) => {
        p && (o.value = oe(p));
      }, {
        immediate: !0
      }), L(o, (p, m) => {
        c == null || c(), c = void 0, ft(p) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((g) => {
          var h;
          const d = n[g];
          d && (p.addEventListener(g.slice(2).toLowerCase(), d), (h = m == null ? void 0 : m.removeEventListener) == null || h.call(m, g.slice(2).toLowerCase(), d));
        }), c = L([a, s, i, l], (g) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((h, d) => {
            Ut(g[d]) ? p.removeAttribute(h) : p.setAttribute(h, g[d]);
          });
        }, { immediate: !0 })), ft(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((g) => m.removeAttribute(g));
      }, {
        immediate: !0
      });
    }), pe(() => {
      c == null || c(), c = void 0;
    }), t({
      triggerRef: o
    }), (p, m) => p.virtualTriggering ? He("v-if", !0) : (j(), Ce(v(Ul), vt({ key: 0 }, p.$attrs, {
      "aria-controls": v(a),
      "aria-describedby": v(s),
      "aria-expanded": v(l),
      "aria-haspopup": v(i)
    }), {
      default: ce(() => [
        ae(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var ql = /* @__PURE__ */ ie(Wl, [["__file", "trigger.vue"]]);
const It = "focus-trap.focus-after-trapped", At = "focus-trap.focus-after-released", Zl = "focus-trap.focusout-prevented", Yn = {
  cancelable: !0,
  bubbles: !1
}, Gl = {
  cancelable: !0,
  bubbles: !1
}, Qn = "focusAfterTrapped", Xn = "focusAfterReleased", Jl = Symbol("elFocusTrap"), on = x(), _t = x(0), an = x(0);
let ot = 0;
const Hr = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, er = (e, t) => {
  for (const n of e)
    if (!Yl(n, t))
      return n;
}, Yl = (e, t) => {
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
}, Ql = (e) => {
  const t = Hr(e), n = er(t, e), r = er(t.reverse(), e);
  return [n, r];
}, Xl = (e) => e instanceof HTMLInputElement && "select" in e, le = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), an.value = window.performance.now(), e !== n && Xl(e) && t && e.select();
  }
};
function tr(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const ec = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = tr(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = tr(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, tc = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (le(r, t), document.activeElement !== n)
      return;
}, nr = ec(), nc = () => _t.value > an.value, at = () => {
  on.value = "pointer", _t.value = window.performance.now();
}, rr = () => {
  on.value = "keyboard", _t.value = window.performance.now();
}, rc = () => (fe(() => {
  ot === 0 && (document.addEventListener("mousedown", at), document.addEventListener("touchstart", at), document.addEventListener("keydown", rr)), ot++;
}), pe(() => {
  ot--, ot <= 0 && (document.removeEventListener("mousedown", at), document.removeEventListener("touchstart", at), document.removeEventListener("keydown", rr));
}), {
  focusReason: on,
  lastUserFocusTimestamp: _t,
  lastAutomatedFocusTimestamp: an
}), st = (e) => new CustomEvent(Zl, {
  ...Gl,
  detail: e
}), oc = A({
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
    Qn,
    Xn,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = x();
    let r, o;
    const { focusReason: a } = rc();
    El((d) => {
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
      const { key: f, altKey: y, ctrlKey: u, metaKey: w, currentTarget: O, shiftKey: b } = d, { loop: T } = e, S = f === pt.tab && !y && !u && !w, E = document.activeElement;
      if (S && E) {
        const P = O, [R, I] = Ql(P);
        if (R && I) {
          if (!b && E === I) {
            const $ = st({
              focusReason: a.value
            });
            t("focusout-prevented", $), $.defaultPrevented || (d.preventDefault(), T && le(R, !0));
          } else if (b && [R, P].includes(E)) {
            const $ = st({
              focusReason: a.value
            });
            t("focusout-prevented", $), $.defaultPrevented || (d.preventDefault(), T && le(I, !0));
          }
        } else if (E === P) {
          const $ = st({
            focusReason: a.value
          });
          t("focusout-prevented", $), $.defaultPrevented || d.preventDefault();
        }
      }
    };
    Te(Jl, {
      focusTrapRef: n,
      onKeydown: i
    }), L(() => e.focusTrapEl, (d) => {
      d && (n.value = d);
    }, { immediate: !0 }), L([n], ([d], [f]) => {
      d && (d.addEventListener("keydown", i), d.addEventListener("focusin", p), d.addEventListener("focusout", m)), f && (f.removeEventListener("keydown", i), f.removeEventListener("focusin", p), f.removeEventListener("focusout", m));
    });
    const l = (d) => {
      t(Qn, d);
    }, c = (d) => t(Xn, d), p = (d) => {
      const f = v(n);
      if (!f)
        return;
      const y = d.target, u = d.relatedTarget, w = y && f.contains(y);
      e.trapped || u && f.contains(u) || (r = u), w && t("focusin", d), !s.paused && e.trapped && (w ? o = y : le(o, !0));
    }, m = (d) => {
      const f = v(n);
      if (!(s.paused || !f))
        if (e.trapped) {
          const y = d.relatedTarget;
          !Ut(y) && !f.contains(y) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const u = st({
                focusReason: a.value
              });
              t("focusout-prevented", u), u.defaultPrevented || le(o, !0);
            }
          }, 0);
        } else {
          const y = d.target;
          y && f.contains(y) || t("focusout", d);
        }
    };
    async function g() {
      await $t();
      const d = v(n);
      if (d) {
        nr.push(s);
        const f = d.contains(document.activeElement) ? r : document.activeElement;
        if (r = f, !d.contains(f)) {
          const u = new Event(It, Yn);
          d.addEventListener(It, l), d.dispatchEvent(u), u.defaultPrevented || $t(() => {
            let w = e.focusStartEl;
            gt(w) || (le(w), document.activeElement !== w && (w = "first")), w === "first" && tc(Hr(d), !0), (document.activeElement === f || w === "container") && le(d);
          });
        }
      }
    }
    function h() {
      const d = v(n);
      if (d) {
        d.removeEventListener(It, l);
        const f = new CustomEvent(At, {
          ...Yn,
          detail: {
            focusReason: a.value
          }
        });
        d.addEventListener(At, c), d.dispatchEvent(f), !f.defaultPrevented && (a.value == "keyboard" || !nc() || d.contains(document.activeElement)) && le(r ?? document.body), d.removeEventListener(At, c), nr.remove(s);
      }
    }
    return fe(() => {
      e.trapped && g(), L(() => e.trapped, (d) => {
        d ? g() : h();
      });
    }), pe(() => {
      e.trapped && h();
    }), {
      onKeydown: i
    };
  }
});
function ac(e, t, n, r, o, a) {
  return ae(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var sc = /* @__PURE__ */ ie(oc, [["render", ac], ["__file", "focus-trap.vue"]]);
const ic = ["fixed", "absolute"], lc = J({
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
    values: Gt,
    default: "bottom"
  },
  popperOptions: {
    type: N(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: ic,
    default: "absolute"
  }
}), Kr = J({
  ...lc,
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
  ...Lr(["ariaLabel"])
}), cc = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, uc = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...pc(e), ...t]
  };
  return dc(a, o == null ? void 0 : o.modifiers), a;
}, fc = (e) => {
  if (k)
    return oe(e);
};
function pc(e) {
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
function dc(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const vc = 0, mc = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = V(rn, void 0), a = x(), s = x(), i = C(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), l = C(() => {
    var u;
    const w = v(a), O = (u = v(s)) != null ? u : vc;
    return {
      name: "arrow",
      enabled: !Bs(w),
      options: {
        element: w,
        padding: O
      }
    };
  }), c = C(() => ({
    onFirstUpdate: () => {
      d();
    },
    ...uc(e, [
      v(l),
      v(i)
    ])
  })), p = C(() => fc(e.referenceEl) || v(r)), { attributes: m, state: g, styles: h, update: d, forceUpdate: f, instanceRef: y } = yl(p, n, c);
  return L(y, (u) => t.value = u), fe(() => {
    L(() => {
      var u;
      return (u = v(p)) == null ? void 0 : u.getBoundingClientRect();
    }, () => {
      d();
    });
  }), {
    attributes: m,
    arrowRef: a,
    contentRef: n,
    instanceRef: y,
    state: g,
    styles: h,
    role: o,
    forceUpdate: f,
    update: d
  };
}, gc = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = $l(), a = Re("popper"), s = C(() => v(t).popper), i = x(Ue(e.zIndex) ? e.zIndex : o()), l = C(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), c = C(() => [
    { zIndex: v(i) },
    v(n).popper,
    e.popperStyle || {}
  ]), p = C(() => r.value === "dialog" ? "false" : void 0), m = C(() => v(n).arrow || {});
  return {
    ariaModal: p,
    arrowStyle: m,
    contentAttrs: s,
    contentClass: l,
    contentStyle: c,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = Ue(e.zIndex) ? e.zIndex : o();
    }
  };
}, hc = (e, t) => {
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
}, yc = A({
  name: "ElPopperContent"
}), bc = /* @__PURE__ */ A({
  ...yc,
  props: Kr,
  emits: cc,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: l,
      onFocusoutPrevented: c,
      onReleaseRequested: p
    } = hc(r, n), { attributes: m, arrowRef: g, contentRef: h, styles: d, instanceRef: f, role: y, update: u } = mc(r), {
      ariaModal: w,
      arrowStyle: O,
      contentAttrs: b,
      contentClass: T,
      contentStyle: S,
      updateZIndex: E
    } = gc(r, {
      styles: d,
      attributes: m,
      role: y
    }), P = V(Gn, void 0), R = x();
    Te(Dr, {
      arrowStyle: O,
      arrowRef: g,
      arrowOffset: R
    }), P && Te(Gn, {
      ...P,
      addInputId: lt,
      removeInputId: lt
    });
    let I;
    const F = (M = !0) => {
      u(), M && E();
    }, $ = () => {
      F(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return fe(() => {
      L(() => r.triggerTargetEl, (M, z) => {
        I == null || I(), I = void 0;
        const B = v(M || h.value), D = v(z || h.value);
        ft(B) && (I = L([y, () => r.ariaLabel, w, () => r.id], (_) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((H, Q) => {
            Ut(_[Q]) ? B.removeAttribute(H) : B.setAttribute(H, _[Q]);
          });
        }, { immediate: !0 })), D !== B && ft(D) && ["role", "aria-label", "aria-modal", "id"].forEach((_) => {
          D.removeAttribute(_);
        });
      }, { immediate: !0 }), L(() => r.visible, $, { immediate: !0 });
    }), pe(() => {
      I == null || I(), I = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: f,
      updatePopper: F,
      contentStyle: S
    }), (M, z) => (j(), q("div", vt({
      ref_key: "contentRef",
      ref: h
    }, v(b), {
      style: v(S),
      class: v(T),
      tabindex: "-1",
      onMouseenter: z[0] || (z[0] = (B) => M.$emit("mouseenter", B)),
      onMouseleave: z[1] || (z[1] = (B) => M.$emit("mouseleave", B))
    }), [
      ze(v(sc), {
        trapped: v(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": v(h),
        "focus-start-el": v(o),
        onFocusAfterTrapped: v(i),
        onFocusAfterReleased: v(s),
        onFocusin: v(l),
        onFocusoutPrevented: v(c),
        onReleaseRequested: v(p)
      }, {
        default: ce(() => [
          ae(M.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var wc = /* @__PURE__ */ ie(bc, [["__file", "content.vue"]]);
const _c = Wt(kl), sn = Symbol("elTooltip"), Ur = J({
  ...Cl,
  ...Kr,
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
  ...Lr(["ariaLabel"])
}), Vr = J({
  ...zr,
  disabled: Boolean,
  trigger: {
    type: N([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: N(Array),
    default: () => [pt.enter, pt.space]
  }
}), {
  useModelToggleProps: Ec,
  useModelToggleEmits: Oc,
  useModelToggle: Tc
} = _r("visible"), Cc = J({
  ...jr,
  ...Ec,
  ...Ur,
  ...Vr,
  ...Br,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Pc = [
  ...Oc,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Sc = (e, t) => Ro(e) ? e.includes(t) : e === t, _e = (e, t, n) => (r) => {
  Sc(v(e), t) && n(r);
}, xc = A({
  name: "ElTooltipTrigger"
}), Ic = /* @__PURE__ */ A({
  ...xc,
  props: Vr,
  setup(e, { expose: t }) {
    const n = e, r = Re("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: l, onToggle: c } = V(sn, void 0), p = x(null), m = () => {
      if (v(o) || n.disabled)
        return !0;
    }, g = je(n, "trigger"), h = re(m, _e(g, "hover", i)), d = re(m, _e(g, "hover", l)), f = re(m, _e(g, "click", (b) => {
      b.button === 0 && c(b);
    })), y = re(m, _e(g, "focus", i)), u = re(m, _e(g, "focus", l)), w = re(m, _e(g, "contextmenu", (b) => {
      b.preventDefault(), c(b);
    })), O = re(m, (b) => {
      const { code: T } = b;
      n.triggerKeys.includes(T) && (b.preventDefault(), c(b));
    });
    return t({
      triggerRef: p
    }), (b, T) => (j(), Ce(v(ql), {
      id: v(a),
      "virtual-ref": b.virtualRef,
      open: v(s),
      "virtual-triggering": b.virtualTriggering,
      class: ar(v(r).e("trigger")),
      onBlur: v(u),
      onClick: v(f),
      onContextmenu: v(w),
      onFocus: v(y),
      onMouseenter: v(h),
      onMouseleave: v(d),
      onKeydown: v(O)
    }, {
      default: ce(() => [
        ae(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Ac = /* @__PURE__ */ ie(Ic, [["__file", "trigger.vue"]]);
const $c = A({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), Nc = /* @__PURE__ */ A({
  ...$c,
  props: Ur,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Fr(), o = Re("tooltip"), a = x(null), s = x(!1), {
      controlled: i,
      id: l,
      open: c,
      trigger: p,
      onClose: m,
      onOpen: g,
      onShow: h,
      onHide: d,
      onBeforeShow: f,
      onBeforeHide: y
    } = V(sn, void 0), u = C(() => n.transition || `${o.namespace.value}-fade-in-linear`), w = C(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    pe(() => {
      s.value = !0;
    });
    const O = C(() => v(w) ? !0 : v(c)), b = C(() => n.disabled ? !1 : v(c)), T = C(() => n.appendTo || r.value), S = C(() => {
      var _;
      return (_ = n.style) != null ? _ : {};
    }), E = C(() => !v(c)), P = () => {
      d();
    }, R = () => {
      if (v(i))
        return !0;
    }, I = re(R, () => {
      n.enterable && v(p) === "hover" && g();
    }), F = re(R, () => {
      v(p) === "hover" && m();
    }), $ = () => {
      var _, H;
      (H = (_ = a.value) == null ? void 0 : _.updatePopper) == null || H.call(_), f == null || f();
    }, M = () => {
      y == null || y();
    }, z = () => {
      h(), D = wo(C(() => {
        var _;
        return (_ = a.value) == null ? void 0 : _.popperContentRef;
      }), () => {
        if (v(i))
          return;
        v(p) !== "hover" && m();
      });
    }, B = () => {
      n.virtualTriggering || m();
    };
    let D;
    return L(() => v(c), (_) => {
      _ || D == null || D();
    }, {
      flush: "post"
    }), L(() => n.content, () => {
      var _, H;
      (H = (_ = a.value) == null ? void 0 : _.updatePopper) == null || H.call(_);
    }), t({
      contentRef: a
    }), (_, H) => (j(), Ce(uo, {
      disabled: !_.teleported,
      to: v(T)
    }, [
      ze(fo, {
        name: v(u),
        onAfterLeave: P,
        onBeforeEnter: $,
        onAfterEnter: z,
        onBeforeLeave: M
      }, {
        default: ce(() => [
          v(O) ? sr((j(), Ce(v(wc), vt({
            key: 0,
            id: v(l),
            ref_key: "contentRef",
            ref: a
          }, _.$attrs, {
            "aria-label": _.ariaLabel,
            "aria-hidden": v(E),
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
            onMouseleave: v(F),
            onBlur: B,
            onClose: v(m)
          }), {
            default: ce(() => [
              s.value ? He("v-if", !0) : ae(_.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [po, v(b)]
          ]) : He("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var Rc = /* @__PURE__ */ ie(Nc, [["__file", "content.vue"]]);
const Fc = ["innerHTML"], Mc = { key: 1 }, Lc = A({
  name: "ElTooltip"
}), Dc = /* @__PURE__ */ A({
  ...Lc,
  props: Cc,
  emits: Pc,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    Tl();
    const o = _l(), a = x(), s = x(), i = () => {
      var u;
      const w = v(a);
      w && ((u = w.popperInstanceRef) == null || u.update());
    }, l = x(!1), c = x(), { show: p, hide: m, hasUpdateHandler: g } = Tc({
      indicator: l,
      toggleReason: c
    }), { onOpen: h, onClose: d } = Pl({
      showAfter: je(r, "showAfter"),
      hideAfter: je(r, "hideAfter"),
      autoClose: je(r, "autoClose"),
      open: p,
      close: m
    }), f = C(() => hr(r.visible) && !g.value);
    Te(sn, {
      controlled: f,
      id: o,
      open: or(l),
      trigger: je(r, "trigger"),
      onOpen: (u) => {
        h(u);
      },
      onClose: (u) => {
        d(u);
      },
      onToggle: (u) => {
        v(l) ? d(u) : h(u);
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
    }), L(() => r.disabled, (u) => {
      u && l.value && (l.value = !1);
    });
    const y = (u) => {
      var w, O;
      const b = (O = (w = s.value) == null ? void 0 : w.contentRef) == null ? void 0 : O.popperContentRef, T = (u == null ? void 0 : u.relatedTarget) || document.activeElement;
      return b && b.contains(T);
    };
    return vo(() => l.value && m()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: y,
      updatePopper: i,
      onOpen: h,
      onClose: d,
      hide: m
    }), (u, w) => (j(), Ce(v(_c), {
      ref_key: "popperRef",
      ref: a,
      role: u.role
    }, {
      default: ce(() => [
        ze(Ac, {
          disabled: u.disabled,
          trigger: u.trigger,
          "trigger-keys": u.triggerKeys,
          "virtual-ref": u.virtualRef,
          "virtual-triggering": u.virtualTriggering
        }, {
          default: ce(() => [
            u.$slots.default ? ae(u.$slots, "default", { key: 0 }) : He("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        ze(Rc, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": u.ariaLabel,
          "boundaries-padding": u.boundariesPadding,
          content: u.content,
          disabled: u.disabled,
          effect: u.effect,
          enterable: u.enterable,
          "fallback-placements": u.fallbackPlacements,
          "hide-after": u.hideAfter,
          "gpu-acceleration": u.gpuAcceleration,
          offset: u.offset,
          persistent: u.persistent,
          "popper-class": u.popperClass,
          "popper-style": u.popperStyle,
          placement: u.placement,
          "popper-options": u.popperOptions,
          pure: u.pure,
          "raw-content": u.rawContent,
          "reference-el": u.referenceEl,
          "trigger-target-el": u.triggerTargetEl,
          "show-after": u.showAfter,
          strategy: u.strategy,
          teleported: u.teleported,
          transition: u.transition,
          "virtual-triggering": u.virtualTriggering,
          "z-index": u.zIndex,
          "append-to": u.appendTo
        }, {
          default: ce(() => [
            ae(u.$slots, "content", {}, () => [
              u.rawContent ? (j(), q("span", {
                key: 0,
                innerHTML: u.content
              }, null, 8, Fc)) : (j(), q("span", Mc, mo(u.content), 1))
            ]),
            u.showArrow ? (j(), Ce(v(Kl), {
              key: 0,
              "arrow-offset": u.arrowOffset
            }, null, 8, ["arrow-offset"])) : He("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var jc = /* @__PURE__ */ ie(Dc, [["__file", "tooltip.vue"]]);
const fu = Wt(jc);
export {
  Kt as $,
  ru as A,
  kt as B,
  tu as C,
  ct as D,
  cu as E,
  Jl as F,
  zt as G,
  Dt as H,
  za as I,
  ia as J,
  Bt as K,
  jt as L,
  ko as M,
  lt as N,
  Ze as O,
  vr as P,
  fr as Q,
  Ne as R,
  ms as S,
  be as T,
  au as U,
  Ns as V,
  pa as W,
  ue as X,
  pr as Y,
  Za as Z,
  ie as _,
  Zs as a,
  $s as a0,
  js as a1,
  mr as a2,
  na as a3,
  Pe as a4,
  Nt as a5,
  Vt as a6,
  Ct as a7,
  uu as a8,
  Gn as a9,
  Ue as aa,
  Lr as ab,
  gt as ac,
  nu as ad,
  Xc as ae,
  Qc as af,
  Ut as ag,
  zc as ah,
  Xs as ai,
  Lt as aj,
  ft as ak,
  ti as al,
  Ro as am,
  ho as an,
  Vs as ao,
  Kc as ap,
  pt as aq,
  Jc as ar,
  su as as,
  Yc as at,
  Gt as au,
  Hc as av,
  ou as aw,
  k as b,
  Zc as c,
  Wc as d,
  J as e,
  N as f,
  Gc as g,
  Vc as h,
  tt as i,
  eu as j,
  lu as k,
  hr as l,
  $l as m,
  _l as n,
  Bs as o,
  St as p,
  kc as q,
  qc as r,
  iu as s,
  Uc as t,
  Re as u,
  sc as v,
  Wt as w,
  Vr as x,
  Ur as y,
  fu as z
};
