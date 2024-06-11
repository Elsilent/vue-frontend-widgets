import { getCurrentScope as Gr, onScopeDispose as Jr, unref as v, getCurrentInstance as Ee, onMounted as le, nextTick as xt, watch as L, ref as x, defineComponent as M, openBlock as D, createElementBlock as G, createElementVNode as X, warn as Qr, inject as U, computed as P, shallowRef as Yr, onBeforeUnmount as fe, onBeforeMount as Xr, provide as Te, renderSlot as ue, normalizeClass as tr, normalizeStyle as eo, withDirectives as nr, cloneVNode as to, Fragment as no, Text as ro, Comment as oo, createVNode as Be, createBlock as Ce, mergeProps as Nt, withCtx as ie, createCommentVNode as ke, toRef as Le, Teleport as ao, Transition as so, vShow as io, readonly as uo, onDeactivated as co, toDisplayString as lo } from "vue";
const re = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e == null ? void 0 : e(o);
  if (n === !1 || !a)
    return t == null ? void 0 : t(o);
};
var vn;
const Z = typeof window < "u", fo = (e) => typeof e == "string", rr = () => {
}, po = Z && ((vn = window == null ? void 0 : window.navigator) == null ? void 0 : vn.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function or(e) {
  return typeof e == "function" ? e() : v(e);
}
function vo(e) {
  return e;
}
function pt(e) {
  return Gr() ? (Jr(e), !0) : !1;
}
function go(e, t = !0) {
  Ee() ? le(e) : t ? e() : xt(e);
}
function oe(e) {
  var t;
  const n = or(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const dt = Z ? window : void 0;
function Et(...e) {
  let t, n, r, o;
  if (fo(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = dt) : [t, n, r, o] = e, !t)
    return rr;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((p) => p()), a.length = 0;
  }, i = (p, g, m, h) => (p.addEventListener(g, m, h), () => p.removeEventListener(g, m, h)), u = L(() => [oe(t), or(o)], ([p, g]) => {
    s(), p && a.push(...n.flatMap((m) => r.map((h) => i(p, m, h, g))));
  }, { immediate: !0, flush: "post" }), c = () => {
    u(), s();
  };
  return pt(c), c;
}
let gn = !1;
function mo(e, t, n = {}) {
  const { window: r = dt, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  po && !gn && (gn = !0, Array.from(r.document.body.children).forEach((m) => m.addEventListener("click", rr)));
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
function ar(e, t = !1) {
  const n = x(), r = () => n.value = !!e();
  return r(), go(r, t), n;
}
const mn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, hn = "__vueuse_ssr_handlers__";
mn[hn] = mn[hn] || {};
var yn = Object.getOwnPropertySymbols, ho = Object.prototype.hasOwnProperty, yo = Object.prototype.propertyIsEnumerable, bo = (e, t) => {
  var n = {};
  for (var r in e)
    ho.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && yn)
    for (var r of yn(e))
      t.indexOf(r) < 0 && yo.call(e, r) && (n[r] = e[r]);
  return n;
};
function _c(e, t, n = {}) {
  const r = n, { window: o = dt } = r, a = bo(r, ["window"]);
  let s;
  const i = ar(() => o && "ResizeObserver" in o), u = () => {
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
var bn = Object.getOwnPropertySymbols, wo = Object.prototype.hasOwnProperty, _o = Object.prototype.propertyIsEnumerable, Oo = (e, t) => {
  var n = {};
  for (var r in e)
    wo.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && bn)
    for (var r of bn(e))
      t.indexOf(r) < 0 && _o.call(e, r) && (n[r] = e[r]);
  return n;
};
function Oc(e, t, n = {}) {
  const r = n, { window: o = dt } = r, a = Oo(r, ["window"]);
  let s;
  const i = ar(() => o && "MutationObserver" in o), u = () => {
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
var Eo = Object.defineProperty, _n = Object.getOwnPropertySymbols, To = Object.prototype.hasOwnProperty, Co = Object.prototype.propertyIsEnumerable, On = (e, t, n) => t in e ? Eo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Po = (e, t) => {
  for (var n in t || (t = {}))
    To.call(t, n) && On(e, n, t[n]);
  if (_n)
    for (var n of _n(t))
      Co.call(t, n) && On(e, n, t[n]);
  return e;
};
const So = {
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
Po({
  linear: vo
}, So);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const st = () => {
}, Io = Object.prototype.hasOwnProperty, En = (e, t) => Io.call(e, t), xo = Array.isArray, et = (e) => typeof e == "function", vt = (e) => typeof e == "string", Ft = (e) => e !== null && typeof e == "object", Ao = Object.prototype.toString, Ro = (e) => Ao.call(e), Ec = (e) => Ro(e).slice(8, -1);
var $o = typeof global == "object" && global && global.Object === Object && global;
const No = $o;
var Fo = typeof self == "object" && self && self.Object === Object && self, Mo = No || Fo || Function("return this")();
const Mt = Mo;
var Lo = Mt.Symbol;
const ce = Lo;
var sr = Object.prototype, jo = sr.hasOwnProperty, Do = sr.toString, Fe = ce ? ce.toStringTag : void 0;
function Bo(e) {
  var t = jo.call(e, Fe), n = e[Fe];
  try {
    e[Fe] = void 0;
    var r = !0;
  } catch {
  }
  var o = Do.call(e);
  return r && (t ? e[Fe] = n : delete e[Fe]), o;
}
var ko = Object.prototype, zo = ko.toString;
function Ho(e) {
  return zo.call(e);
}
var Ko = "[object Null]", Uo = "[object Undefined]", Tn = ce ? ce.toStringTag : void 0;
function Lt(e) {
  return e == null ? e === void 0 ? Uo : Ko : Tn && Tn in Object(e) ? Bo(e) : Ho(e);
}
function jt(e) {
  return e != null && typeof e == "object";
}
var Vo = "[object Symbol]";
function Dt(e) {
  return typeof e == "symbol" || jt(e) && Lt(e) == Vo;
}
function Wo(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var qo = Array.isArray;
const We = qo;
var Zo = 1 / 0, Cn = ce ? ce.prototype : void 0, Pn = Cn ? Cn.toString : void 0;
function ir(e) {
  if (typeof e == "string")
    return e;
  if (We(e))
    return Wo(e, ir) + "";
  if (Dt(e))
    return Pn ? Pn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Zo ? "-0" : t;
}
function it(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Go(e) {
  return e;
}
var Jo = "[object AsyncFunction]", Qo = "[object Function]", Yo = "[object GeneratorFunction]", Xo = "[object Proxy]";
function ea(e) {
  if (!it(e))
    return !1;
  var t = Lt(e);
  return t == Qo || t == Yo || t == Jo || t == Xo;
}
var ta = Mt["__core-js_shared__"];
const Tt = ta;
var Sn = function() {
  var e = /[^.]+$/.exec(Tt && Tt.keys && Tt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function na(e) {
  return !!Sn && Sn in e;
}
var ra = Function.prototype, oa = ra.toString;
function aa(e) {
  if (e != null) {
    try {
      return oa.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var sa = /[\\^$.*+?()[\]{}|]/g, ia = /^\[object .+?Constructor\]$/, ua = Function.prototype, ca = Object.prototype, la = ua.toString, fa = ca.hasOwnProperty, pa = RegExp(
  "^" + la.call(fa).replace(sa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function da(e) {
  if (!it(e) || na(e))
    return !1;
  var t = ea(e) ? pa : ia;
  return t.test(aa(e));
}
function va(e, t) {
  return e == null ? void 0 : e[t];
}
function Bt(e, t) {
  var n = va(e, t);
  return da(n) ? n : void 0;
}
function ga(e, t, n) {
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
var ma = 800, ha = 16, ya = Date.now;
function ba(e) {
  var t = 0, n = 0;
  return function() {
    var r = ya(), o = ha - (r - n);
    if (n = r, o > 0) {
      if (++t >= ma)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function wa(e) {
  return function() {
    return e;
  };
}
var _a = function() {
  try {
    var e = Bt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const ut = _a;
var Oa = ut ? function(e, t) {
  return ut(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: wa(t),
    writable: !0
  });
} : Go;
const Ea = Oa;
var Ta = ba(Ea);
const Ca = Ta;
var Pa = 9007199254740991, Sa = /^(?:0|[1-9]\d*)$/;
function ur(e, t) {
  var n = typeof e;
  return t = t ?? Pa, !!t && (n == "number" || n != "symbol" && Sa.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ia(e, t, n) {
  t == "__proto__" && ut ? ut(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function cr(e, t) {
  return e === t || e !== e && t !== t;
}
var xa = Object.prototype, Aa = xa.hasOwnProperty;
function Ra(e, t, n) {
  var r = e[t];
  (!(Aa.call(e, t) && cr(r, n)) || n === void 0 && !(t in e)) && Ia(e, t, n);
}
var In = Math.max;
function $a(e, t, n) {
  return t = In(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = In(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), ga(e, this, i);
  };
}
var Na = 9007199254740991;
function Fa(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Na;
}
var Ma = "[object Arguments]";
function xn(e) {
  return jt(e) && Lt(e) == Ma;
}
var lr = Object.prototype, La = lr.hasOwnProperty, ja = lr.propertyIsEnumerable, Da = xn(function() {
  return arguments;
}()) ? xn : function(e) {
  return jt(e) && La.call(e, "callee") && !ja.call(e, "callee");
};
const fr = Da;
var Ba = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, ka = /^\w*$/;
function za(e, t) {
  if (We(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Dt(e) ? !0 : ka.test(e) || !Ba.test(e) || t != null && e in Object(t);
}
var Ha = Bt(Object, "create");
const ze = Ha;
function Ka() {
  this.__data__ = ze ? ze(null) : {}, this.size = 0;
}
function Ua(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Va = "__lodash_hash_undefined__", Wa = Object.prototype, qa = Wa.hasOwnProperty;
function Za(e) {
  var t = this.__data__;
  if (ze) {
    var n = t[e];
    return n === Va ? void 0 : n;
  }
  return qa.call(t, e) ? t[e] : void 0;
}
var Ga = Object.prototype, Ja = Ga.hasOwnProperty;
function Qa(e) {
  var t = this.__data__;
  return ze ? t[e] !== void 0 : Ja.call(t, e);
}
var Ya = "__lodash_hash_undefined__";
function Xa(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ze && t === void 0 ? Ya : t, this;
}
function ye(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ye.prototype.clear = Ka;
ye.prototype.delete = Ua;
ye.prototype.get = Za;
ye.prototype.has = Qa;
ye.prototype.set = Xa;
function es() {
  this.__data__ = [], this.size = 0;
}
function gt(e, t) {
  for (var n = e.length; n--; )
    if (cr(e[n][0], t))
      return n;
  return -1;
}
var ts = Array.prototype, ns = ts.splice;
function rs(e) {
  var t = this.__data__, n = gt(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : ns.call(t, n, 1), --this.size, !0;
}
function os(e) {
  var t = this.__data__, n = gt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function as(e) {
  return gt(this.__data__, e) > -1;
}
function ss(e, t) {
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
Re.prototype.clear = es;
Re.prototype.delete = rs;
Re.prototype.get = os;
Re.prototype.has = as;
Re.prototype.set = ss;
var is = Bt(Mt, "Map");
const us = is;
function cs() {
  this.size = 0, this.__data__ = {
    hash: new ye(),
    map: new (us || Re)(),
    string: new ye()
  };
}
function ls(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function mt(e, t) {
  var n = e.__data__;
  return ls(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function fs(e) {
  var t = mt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ps(e) {
  return mt(this, e).get(e);
}
function ds(e) {
  return mt(this, e).has(e);
}
function vs(e, t) {
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
be.prototype.clear = cs;
be.prototype.delete = fs;
be.prototype.get = ps;
be.prototype.has = ds;
be.prototype.set = vs;
var gs = "Expected a function";
function kt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(gs);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (kt.Cache || be)(), n;
}
kt.Cache = be;
var ms = 500;
function hs(e) {
  var t = kt(e, function(r) {
    return n.size === ms && n.clear(), r;
  }), n = t.cache;
  return t;
}
var ys = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, bs = /\\(\\)?/g, ws = hs(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ys, function(n, r, o, a) {
    t.push(o ? a.replace(bs, "$1") : r || n);
  }), t;
});
const _s = ws;
function Os(e) {
  return e == null ? "" : ir(e);
}
function ht(e, t) {
  return We(e) ? e : za(e, t) ? [e] : _s(Os(e));
}
var Es = 1 / 0;
function zt(e) {
  if (typeof e == "string" || Dt(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Es ? "-0" : t;
}
function Ts(e, t) {
  t = ht(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[zt(t[n++])];
  return n && n == r ? e : void 0;
}
function Cs(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var An = ce ? ce.isConcatSpreadable : void 0;
function Ps(e) {
  return We(e) || fr(e) || !!(An && e && e[An]);
}
function pr(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = Ps), o || (o = []); ++a < s; ) {
    var i = e[a];
    t > 0 && n(i) ? t > 1 ? pr(i, t - 1, n, r, o) : Cs(o, i) : r || (o[o.length] = i);
  }
  return o;
}
function Ss(e) {
  var t = e == null ? 0 : e.length;
  return t ? pr(e, 1) : [];
}
function Is(e) {
  return Ca($a(e, void 0, Ss), e + "");
}
function xs(e, t) {
  return e != null && t in Object(e);
}
function As(e, t, n) {
  t = ht(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = zt(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Fa(o) && ur(s, o) && (We(e) || fr(e)));
}
function Rs(e, t) {
  return e != null && As(e, t, xs);
}
function At(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
function Ht(e) {
  return e == null;
}
function $s(e) {
  return e === void 0;
}
function Ns(e, t, n, r) {
  if (!it(e))
    return e;
  t = ht(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var u = zt(t[o]), c = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (o != s) {
      var p = i[u];
      c = r ? r(p, u, i) : void 0, c === void 0 && (c = it(p) ? p : ur(t[o + 1]) ? [] : {});
    }
    Ra(i, u, c), i = i[u];
  }
  return e;
}
function Fs(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = Ts(e, s);
    n(i, s) && Ns(a, ht(s, e), i);
  }
  return a;
}
function Ms(e, t) {
  return Fs(e, t, function(n, r) {
    return Rs(e, r);
  });
}
var Ls = Is(function(e, t) {
  return e == null ? {} : Ms(e, t);
});
const js = Ls, Tc = (e) => e === void 0, dr = (e) => typeof e == "boolean", He = (e) => typeof e == "number", ct = (e) => typeof Element > "u" ? !1 : e instanceof Element, Ds = (e) => vt(e) ? !Number.isNaN(Number(e)) : !1;
class vr extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function Cc(e, t) {
  throw new vr(`[${e}] ${t}`);
}
function Ke(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = vt(e) ? new vr(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const Bs = "utils/dom/style";
function Pc(e, t = "px") {
  if (!e)
    return "";
  if (He(e) || Ds(e))
    return `${e}${t}`;
  if (vt(e))
    return e;
  Ke(Bs, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.3.1 */
var ks = /* @__PURE__ */ M({
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
}), Sc = ks, zs = /* @__PURE__ */ M({
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
}), Hs = zs, Ks = /* @__PURE__ */ M({
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
}), Us = Ks, Vs = /* @__PURE__ */ M({
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
}), Ic = Vs, Ws = /* @__PURE__ */ M({
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
}), xc = Ws, qs = /* @__PURE__ */ M({
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
}), Zs = qs, Gs = /* @__PURE__ */ M({
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
}), Ac = Gs;
const gr = "__epPropKey", F = (e) => e, Js = (e) => Ft(e) && !!e[gr], Kt = (e, t) => {
  if (!Ft(e) || Js(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: s } = e, u = {
    type: a,
    required: !!r,
    validator: n || s ? (c) => {
      let p = !1, g = [];
      if (n && (g = Array.from(n), En(e, "default") && g.push(o), p || (p = g.includes(c))), s && (p || (p = s(c))), !p && g.length > 0) {
        const m = [...new Set(g)].map((h) => JSON.stringify(h)).join(", ");
        Qr(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${m}], got value ${JSON.stringify(c)}.`);
      }
      return p;
    } : void 0,
    [gr]: !0
  };
  return En(e, "default") && (u.default = o), u;
}, te = (e) => At(Object.entries(e).map(([t, n]) => [
  t,
  Kt(n, t)
])), Rc = F([
  String,
  Object,
  Function
]), $c = {
  validating: Zs,
  success: Hs,
  error: Us
}, mr = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t ?? {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, Nc = (e, t) => (e.install = (n) => {
  n.directive(t, e);
}, e), Fc = (e) => (e.install = st, e), lt = {
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
}, Ct = "el", Qs = "is-", me = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, Ys = Symbol("namespaceContextKey"), Ut = (e) => {
  const t = e || (Ee() ? U(Ys, x(Ct)) : x(Ct));
  return P(() => v(t) || Ct);
}, qe = (e, t) => {
  const n = Ut(t);
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
      return f && l ? `${Qs}${f}` : "";
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
}, Xs = Kt({
  type: F(Boolean),
  default: null
}), ei = Kt({
  type: F(Function)
}), hr = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: Xs,
    [n]: ei
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
      }, w = (O) => {
        s.value !== !1 && (s.value = !1, i && (i.value = O), et(g) && g(O));
      }, E = (O) => {
        if (d.disabled === !0 || et(c) && !c())
          return;
        const C = f.value && Z;
        C && h(t, !0), (y.value || !C) && l(O);
      }, b = (O) => {
        if (d.disabled === !0 || !Z)
          return;
        const C = f.value && Z;
        C && h(t, !1), (y.value || !C) && w(O);
      }, T = (O) => {
        dr(O) && (d.disabled && O ? f.value && h(t, !1) : s.value !== O && (O ? l() : w()));
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
hr("modelValue");
var H = "top", W = "bottom", q = "right", K = "left", Vt = "auto", Ze = [H, W, q, K], Pe = "start", Ue = "end", ti = "clippingParents", yr = "viewport", Me = "popper", ni = "reference", Rn = Ze.reduce(function(e, t) {
  return e.concat([t + "-" + Pe, t + "-" + Ue]);
}, []), Wt = [].concat(Ze, [Vt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Pe, t + "-" + Ue]);
}, []), ri = "beforeRead", oi = "read", ai = "afterRead", si = "beforeMain", ii = "main", ui = "afterMain", ci = "beforeWrite", li = "write", fi = "afterWrite", pi = [ri, oi, ai, si, ii, ui, ci, li, fi];
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
function qt(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = J(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function di(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !V(a) || !ee(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function vi(e) {
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
var br = { name: "applyStyles", enabled: !0, phase: "write", fn: di, effect: vi, requires: ["computeStyles"] };
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
function Zt(e) {
  var t = xe(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function wr(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && qt(n)) {
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
function gi(e) {
  return ["table", "td", "th"].indexOf(ee(e)) >= 0;
}
function pe(e) {
  return ((Se(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function yt(e) {
  return ee(e) === "html" ? e : e.assignedSlot || e.parentNode || (qt(e) ? e.host : null) || pe(e);
}
function $n(e) {
  return !V(e) || ae(e).position === "fixed" ? null : e.offsetParent;
}
function mi(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && V(e)) {
    var r = ae(e);
    if (r.position === "fixed")
      return null;
  }
  var o = yt(e);
  for (qt(o) && (o = o.host); V(o) && ["html", "body"].indexOf(ee(o)) < 0; ) {
    var a = ae(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Ge(e) {
  for (var t = J(e), n = $n(e); n && gi(n) && ae(n).position === "static"; )
    n = $n(n);
  return n && (ee(n) === "html" || ee(n) === "body" && ae(n).position === "static") ? t : n || mi(e) || t;
}
function Gt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function je(e, t, n) {
  return he(e, ft(t, n));
}
function hi(e, t, n) {
  var r = je(e, t, n);
  return r > n ? n : r;
}
function _r() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function Or(e) {
  return Object.assign({}, _r(), e);
}
function Er(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var yi = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, Or(typeof e != "number" ? e : Er(e, Ze));
};
function bi(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Y(n.placement), u = Gt(i), c = [K, q].indexOf(i) >= 0, p = c ? "height" : "width";
  if (!(!a || !s)) {
    var g = yi(o.padding, n), m = Zt(a), h = u === "y" ? H : K, d = u === "y" ? W : q, f = n.rects.reference[p] + n.rects.reference[u] - s[u] - n.rects.popper[p], y = s[u] - n.rects.reference[u], l = Ge(a), w = l ? u === "y" ? l.clientHeight || 0 : l.clientWidth || 0 : 0, E = f / 2 - y / 2, b = g[h], T = w - m[p] - g[d], S = w / 2 - m[p] / 2 + E, O = je(b, S, T), C = u;
    n.modifiersData[r] = (t = {}, t[C] = O, t.centerOffset = O - S, t);
  }
}
function wi(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !wr(t.elements.popper, o) || (t.elements.arrow = o));
}
var _i = { name: "arrow", enabled: !0, phase: "main", fn: bi, effect: wi, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Ae(e) {
  return e.split("-")[1];
}
var Oi = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Ei(e) {
  var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
  return { x: Ie(t * o) / o || 0, y: Ie(n * o) / o || 0 };
}
function Nn(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, u = e.gpuAcceleration, c = e.adaptive, p = e.roundOffsets, g = e.isFixed, m = s.x, h = m === void 0 ? 0 : m, d = s.y, f = d === void 0 ? 0 : d, y = typeof p == "function" ? p({ x: h, y: f }) : { x: h, y: f };
  h = y.x, f = y.y;
  var l = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), E = K, b = H, T = window;
  if (c) {
    var S = Ge(n), O = "clientHeight", C = "clientWidth";
    if (S === J(n) && (S = pe(n), ae(S).position !== "static" && i === "absolute" && (O = "scrollHeight", C = "scrollWidth")), S = S, o === H || (o === K || o === q) && a === Ue) {
      b = W;
      var R = g && S === T && T.visualViewport ? T.visualViewport.height : S[O];
      f -= R - r.height, f *= u ? 1 : -1;
    }
    if (o === K || (o === H || o === W) && a === Ue) {
      E = q;
      var I = g && S === T && T.visualViewport ? T.visualViewport.width : S[C];
      h -= I - r.width, h *= u ? 1 : -1;
    }
  }
  var $ = Object.assign({ position: i }, c && Oi), A = p === !0 ? Ei({ x: h, y: f }) : { x: h, y: f };
  if (h = A.x, f = A.y, u) {
    var N;
    return Object.assign({}, $, (N = {}, N[b] = w ? "0" : "", N[E] = l ? "0" : "", N.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + f + "px)" : "translate3d(" + h + "px, " + f + "px, 0)", N));
  }
  return Object.assign({}, $, (t = {}, t[b] = w ? f + "px" : "", t[E] = l ? h + "px" : "", t.transform = "", t));
}
function Ti(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, u = i === void 0 ? !0 : i, c = { placement: Y(t.placement), variation: Ae(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Nn(Object.assign({}, c, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Nn(Object.assign({}, c, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var Tr = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Ti, data: {} }, tt = { passive: !0 };
function Ci(e) {
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
}, effect: Ci, data: {} }, Pi = { left: "right", right: "left", bottom: "top", top: "bottom" };
function at(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Pi[t];
  });
}
var Si = { start: "end", end: "start" };
function Fn(e) {
  return e.replace(/start|end/g, function(t) {
    return Si[t];
  });
}
function Jt(e) {
  var t = J(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Qt(e) {
  return xe(pe(e)).left + Jt(e).scrollLeft;
}
function Ii(e) {
  var t = J(e), n = pe(e), r = t.visualViewport, o = n.clientWidth, a = n.clientHeight, s = 0, i = 0;
  return r && (o = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = r.offsetLeft, i = r.offsetTop)), { width: o, height: a, x: s + Qt(e), y: i };
}
function xi(e) {
  var t, n = pe(e), r = Jt(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = he(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = he(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Qt(e), u = -r.scrollTop;
  return ae(o || n).direction === "rtl" && (i += he(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: u };
}
function Yt(e) {
  var t = ae(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Pr(e) {
  return ["html", "body", "#document"].indexOf(ee(e)) >= 0 ? e.ownerDocument.body : V(e) && Yt(e) ? e : Pr(yt(e));
}
function De(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = Pr(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = J(r), s = o ? [a].concat(a.visualViewport || [], Yt(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(De(yt(s)));
}
function Rt(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Ai(e) {
  var t = xe(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Mn(e, t) {
  return t === yr ? Rt(Ii(e)) : Se(t) ? Ai(t) : Rt(xi(pe(e)));
}
function Ri(e) {
  var t = De(yt(e)), n = ["absolute", "fixed"].indexOf(ae(e).position) >= 0, r = n && V(e) ? Ge(e) : e;
  return Se(r) ? t.filter(function(o) {
    return Se(o) && wr(o, r) && ee(o) !== "body";
  }) : [];
}
function $i(e, t, n) {
  var r = t === "clippingParents" ? Ri(e) : [].concat(t), o = [].concat(r, [n]), a = o[0], s = o.reduce(function(i, u) {
    var c = Mn(e, u);
    return i.top = he(c.top, i.top), i.right = ft(c.right, i.right), i.bottom = ft(c.bottom, i.bottom), i.left = he(c.left, i.left), i;
  }, Mn(e, a));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Sr(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Y(r) : null, a = r ? Ae(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, u;
  switch (o) {
    case H:
      u = { x: s, y: t.y - n.height };
      break;
    case W:
      u = { x: s, y: t.y + t.height };
      break;
    case q:
      u = { x: t.x + t.width, y: i };
      break;
    case K:
      u = { x: t.x - n.width, y: i };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var c = o ? Gt(o) : null;
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
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.boundary, s = a === void 0 ? ti : a, i = n.rootBoundary, u = i === void 0 ? yr : i, c = n.elementContext, p = c === void 0 ? Me : c, g = n.altBoundary, m = g === void 0 ? !1 : g, h = n.padding, d = h === void 0 ? 0 : h, f = Or(typeof d != "number" ? d : Er(d, Ze)), y = p === Me ? ni : Me, l = e.rects.popper, w = e.elements[m ? y : p], E = $i(Se(w) ? w : w.contextElement || pe(e.elements.popper), s, u), b = xe(e.elements.reference), T = Sr({ reference: b, element: l, strategy: "absolute", placement: o }), S = Rt(Object.assign({}, l, T)), O = p === Me ? S : b, C = { top: E.top - O.top + f.top, bottom: O.bottom - E.bottom + f.bottom, left: E.left - O.left + f.left, right: O.right - E.right + f.right }, R = e.modifiersData.offset;
  if (p === Me && R) {
    var I = R[o];
    Object.keys(C).forEach(function($) {
      var A = [q, W].indexOf($) >= 0 ? 1 : -1, N = [H, W].indexOf($) >= 0 ? "y" : "x";
      C[$] += I[N] * A;
    });
  }
  return C;
}
function Ni(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, u = n.allowedAutoPlacements, c = u === void 0 ? Wt : u, p = Ae(r), g = p ? i ? Rn : Rn.filter(function(d) {
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
function Fi(e) {
  if (Y(e) === Vt)
    return [];
  var t = at(e);
  return [Fn(e), t, Fn(t)];
}
function Mi(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, u = n.fallbackPlacements, c = n.padding, p = n.boundary, g = n.rootBoundary, m = n.altBoundary, h = n.flipVariations, d = h === void 0 ? !0 : h, f = n.allowedAutoPlacements, y = t.options.placement, l = Y(y), w = l === y, E = u || (w || !d ? [at(y)] : Fi(y)), b = [y].concat(E).reduce(function(ve, ne) {
      return ve.concat(Y(ne) === Vt ? Ni(t, { placement: ne, boundary: p, rootBoundary: g, padding: c, flipVariations: d, allowedAutoPlacements: f }) : ne);
    }, []), T = t.rects.reference, S = t.rects.popper, O = /* @__PURE__ */ new Map(), C = !0, R = b[0], I = 0; I < b.length; I++) {
      var $ = b[I], A = Y($), N = Ae($) === Pe, k = [H, W].indexOf(A) >= 0, B = k ? "width" : "height", j = Ve(t, { placement: $, boundary: p, rootBoundary: g, altBoundary: m, padding: c }), _ = k ? N ? q : K : N ? W : H;
      T[B] > S[B] && (_ = at(_));
      var z = at(_), Q = [];
      if (a && Q.push(j[A] <= 0), i && Q.push(j[_] <= 0, j[z] <= 0), Q.every(function(ve) {
        return ve;
      })) {
        R = $, C = !1;
        break;
      }
      O.set($, Q);
    }
    if (C)
      for (var Je = d ? 3 : 1, wt = function(ve) {
        var ne = b.find(function(Ye) {
          var Ne = O.get(Ye);
          if (Ne)
            return Ne.slice(0, ve).every(function(we) {
              return we;
            });
        });
        if (ne)
          return R = ne, "break";
      }, $e = Je; $e > 0; $e--) {
        var Qe = wt($e);
        if (Qe === "break")
          break;
      }
    t.placement !== R && (t.modifiersData[r]._skip = !0, t.placement = R, t.reset = !0);
  }
}
var Li = { name: "flip", enabled: !0, phase: "main", fn: Mi, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Ln(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function jn(e) {
  return [H, q, W, K].some(function(t) {
    return e[t] >= 0;
  });
}
function ji(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = Ve(t, { elementContext: "reference" }), i = Ve(t, { altBoundary: !0 }), u = Ln(s, r), c = Ln(i, o, a), p = jn(u), g = jn(c);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: c, isReferenceHidden: p, hasPopperEscaped: g }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": p, "data-popper-escaped": g });
}
var Di = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: ji };
function Bi(e, t, n) {
  var r = Y(e), o = [K, H].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [K, q].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function ki(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = Wt.reduce(function(p, g) {
    return p[g] = Bi(g, t.rects, a), p;
  }, {}), i = s[t.placement], u = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = s;
}
var zi = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: ki };
function Hi(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Sr({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var Ir = { name: "popperOffsets", enabled: !0, phase: "read", fn: Hi, data: {} };
function Ki(e) {
  return e === "x" ? "y" : "x";
}
function Ui(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, u = n.boundary, c = n.rootBoundary, p = n.altBoundary, g = n.padding, m = n.tether, h = m === void 0 ? !0 : m, d = n.tetherOffset, f = d === void 0 ? 0 : d, y = Ve(t, { boundary: u, rootBoundary: c, padding: g, altBoundary: p }), l = Y(t.placement), w = Ae(t.placement), E = !w, b = Gt(l), T = Ki(b), S = t.modifiersData.popperOffsets, O = t.rects.reference, C = t.rects.popper, R = typeof f == "function" ? f(Object.assign({}, t.rects, { placement: t.placement })) : f, I = typeof R == "number" ? { mainAxis: R, altAxis: R } : Object.assign({ mainAxis: 0, altAxis: 0 }, R), $ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, A = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var N, k = b === "y" ? H : K, B = b === "y" ? W : q, j = b === "y" ? "height" : "width", _ = S[b], z = _ + y[k], Q = _ - y[B], Je = h ? -C[j] / 2 : 0, wt = w === Pe ? O[j] : C[j], $e = w === Pe ? -C[j] : -O[j], Qe = t.elements.arrow, ve = h && Qe ? Zt(Qe) : { width: 0, height: 0 }, ne = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : _r(), Ye = ne[k], Ne = ne[B], we = je(0, O[j], ve[j]), Hr = E ? O[j] / 2 - Je - we - Ye - I.mainAxis : wt - we - Ye - I.mainAxis, Kr = E ? -O[j] / 2 + Je + we + Ne + I.mainAxis : $e + we + Ne + I.mainAxis, _t = t.elements.arrow && Ge(t.elements.arrow), Ur = _t ? b === "y" ? _t.clientTop || 0 : _t.clientLeft || 0 : 0, on = (N = $ == null ? void 0 : $[b]) != null ? N : 0, Vr = _ + Hr - on - Ur, Wr = _ + Kr - on, an = je(h ? ft(z, Vr) : z, _, h ? he(Q, Wr) : Q);
      S[b] = an, A[b] = an - _;
    }
    if (i) {
      var sn, qr = b === "x" ? H : K, Zr = b === "x" ? W : q, ge = S[T], Xe = T === "y" ? "height" : "width", un = ge + y[qr], cn = ge - y[Zr], Ot = [H, K].indexOf(l) !== -1, ln = (sn = $ == null ? void 0 : $[T]) != null ? sn : 0, fn = Ot ? un : ge - O[Xe] - C[Xe] - ln + I.altAxis, pn = Ot ? ge + O[Xe] + C[Xe] - ln - I.altAxis : cn, dn = h && Ot ? hi(fn, ge, pn) : je(h ? fn : un, ge, h ? pn : cn);
      S[T] = dn, A[T] = dn - ge;
    }
    t.modifiersData[r] = A;
  }
}
var Vi = { name: "preventOverflow", enabled: !0, phase: "main", fn: Ui, requiresIfExists: ["offset"] };
function Wi(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function qi(e) {
  return e === J(e) || !V(e) ? Jt(e) : Wi(e);
}
function Zi(e) {
  var t = e.getBoundingClientRect(), n = Ie(t.width) / e.offsetWidth || 1, r = Ie(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Gi(e, t, n) {
  n === void 0 && (n = !1);
  var r = V(t), o = V(t) && Zi(t), a = pe(t), s = xe(e, o), i = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (r || !r && !n) && ((ee(t) !== "body" || Yt(a)) && (i = qi(t)), V(t) ? (u = xe(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : a && (u.x = Qt(a))), { x: s.left + i.scrollLeft - u.x, y: s.top + i.scrollTop - u.y, width: s.width, height: s.height };
}
function Ji(e) {
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
function Qi(e) {
  var t = Ji(e);
  return pi.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Yi(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Xi(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Dn = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Bn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Xt(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? Dn : o;
  return function(s, i, u) {
    u === void 0 && (u = a);
    var c = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Dn, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, p = [], g = !1, m = { state: c, setOptions: function(f) {
      var y = typeof f == "function" ? f(c.options) : f;
      d(), c.options = Object.assign({}, a, c.options, y), c.scrollParents = { reference: Se(s) ? De(s) : s.contextElement ? De(s.contextElement) : [], popper: De(i) };
      var l = Qi(Xi([].concat(r, c.options.modifiers)));
      return c.orderedModifiers = l.filter(function(w) {
        return w.enabled;
      }), h(), m.update();
    }, forceUpdate: function() {
      if (!g) {
        var f = c.elements, y = f.reference, l = f.popper;
        if (Bn(y, l)) {
          c.rects = { reference: Gi(y, Ge(l), c.options.strategy === "fixed"), popper: Zt(l) }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(C) {
            return c.modifiersData[C.name] = Object.assign({}, C.data);
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
    }, update: Yi(function() {
      return new Promise(function(f) {
        m.forceUpdate(), f(c);
      });
    }), destroy: function() {
      d(), g = !0;
    } };
    if (!Bn(s, i))
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
Xt();
var eu = [Cr, Ir, Tr, br];
Xt({ defaultModifiers: eu });
var tu = [Cr, Ir, Tr, br, zi, Li, Vi, _i, Di], nu = Xt({ defaultModifiers: tu });
const ru = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: u }) => {
      const c = ou(u);
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
  }), a = Yr(), s = x({
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
    i(), !(!u || !c) && (a.value = nu(u, c, v(o)));
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
function ou(e) {
  const t = Object.keys(e.elements), n = At(t.map((o) => [o, e.styles[o] || {}])), r = At(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
function kn() {
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
}, au = Symbol("elIdInjection"), xr = () => Ee() ? U(au, $t) : $t, su = (e) => {
  const t = xr();
  !Z && t === $t && Ke("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Ut();
  return P(() => v(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let Oe = [];
const zn = (e) => {
  const t = e;
  t.key === lt.esc && Oe.forEach((n) => n(t));
}, iu = (e) => {
  le(() => {
    Oe.length === 0 && document.addEventListener("keydown", zn), Z && Oe.push(e);
  }), fe(() => {
    Oe = Oe.filter((t) => t !== e), Oe.length === 0 && Z && document.removeEventListener("keydown", zn);
  });
};
let Hn;
const Ar = () => {
  const e = Ut(), t = xr(), n = P(() => `${e.value}-popper-container-${t.prefix}`), r = P(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, uu = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, cu = () => {
  const { id: e, selector: t } = Ar();
  return Xr(() => {
    Z && (process.env.NODE_ENV === "test" || !Hn && !document.body.querySelector(t.value)) && (Hn = uu(e.value));
  }), {
    id: e,
    selector: t
  };
}, lu = te({
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
}), fu = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = kn(), {
    registerTimeout: s,
    cancelTimeout: i
  } = kn();
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
}, Rr = Symbol("elForwardRef"), pu = (e) => {
  Te(Rr, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, du = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Kn = {
  current: 0
}, Un = x(0), vu = 2e3, Vn = Symbol("elZIndexContextKey"), gu = Symbol("zIndexContextKey"), mu = (e) => {
  const t = Ee() ? U(Vn, Kn) : Kn, n = e || (Ee() ? U(gu, void 0) : void 0), r = P(() => {
    const s = v(n);
    return He(s) ? s : vu;
  }), o = P(() => r.value + Un.value), a = () => (t.current++, Un.value = t.current, o.value);
  return !Z && !U(Vn) && Ke("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
}, hu = te({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), $r = (e) => js(hu, e);
var de = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const Mc = Symbol("formContextKey"), Wn = Symbol("formItemContextKey"), en = Symbol("popper"), Nr = Symbol("popperContent"), yu = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Fr = te({
  role: {
    type: String,
    values: yu,
    default: "tooltip"
  }
}), bu = M({
  name: "ElPopper",
  inheritAttrs: !1
}), wu = /* @__PURE__ */ M({
  ...bu,
  props: Fr,
  setup(e, { expose: t }) {
    const n = e, r = x(), o = x(), a = x(), s = x(), i = P(() => n.role), u = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(u), Te(en, u), (c, p) => ue(c.$slots, "default");
  }
});
var _u = /* @__PURE__ */ de(wu, [["__file", "popper.vue"]]);
const Mr = te({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Ou = M({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Eu = /* @__PURE__ */ M({
  ...Ou,
  props: Mr,
  setup(e, { expose: t }) {
    const n = e, r = qe("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = U(Nr, void 0);
    return L(() => n.arrowOffset, (i) => {
      o.value = i;
    }), fe(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, u) => (D(), G("span", {
      ref_key: "arrowRef",
      ref: a,
      class: tr(v(r).e("arrow")),
      style: eo(v(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var Tu = /* @__PURE__ */ de(Eu, [["__file", "arrow.vue"]]);
const Pt = "ElOnlyChild", Cu = M({
  name: Pt,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = U(Rr), a = du((r = o == null ? void 0 : o.setForwardRef) != null ? r : st);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i)
        return null;
      if (i.length > 1)
        return Ke(Pt, "requires exact only one valid child."), null;
      const u = Lr(i);
      return u ? nr(to(u, n), [[a]]) : (Ke(Pt, "no valid child node found"), null);
    };
  }
});
function Lr(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Ft(n))
      switch (n.type) {
        case oo:
          continue;
        case ro:
        case "svg":
          return qn(n);
        case no:
          return Lr(n.children);
        default:
          return n;
      }
    return qn(n);
  }
  return null;
}
function qn(e) {
  const t = qe("only-child");
  return Be("span", {
    class: t.e("content")
  }, [e]);
}
const jr = te({
  virtualRef: {
    type: F(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: {
    type: F(Function)
  },
  onMouseleave: {
    type: F(Function)
  },
  onClick: {
    type: F(Function)
  },
  onKeydown: {
    type: F(Function)
  },
  onFocus: {
    type: F(Function)
  },
  onBlur: {
    type: F(Function)
  },
  onContextmenu: {
    type: F(Function)
  },
  id: String,
  open: Boolean
}), Pu = M({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), Su = /* @__PURE__ */ M({
  ...Pu,
  props: jr,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = U(en, void 0);
    pu(o);
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
            Ht(m[d]) ? p.removeAttribute(h) : p.setAttribute(h, m[d]);
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
    }), (p, g) => p.virtualTriggering ? ke("v-if", !0) : (D(), Ce(v(Cu), Nt({ key: 0 }, p.$attrs, {
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
var Iu = /* @__PURE__ */ de(Su, [["__file", "trigger.vue"]]);
const St = "focus-trap.focus-after-trapped", It = "focus-trap.focus-after-released", xu = "focus-trap.focusout-prevented", Zn = {
  cancelable: !0,
  bubbles: !1
}, Au = {
  cancelable: !0,
  bubbles: !1
}, Gn = "focusAfterTrapped", Jn = "focusAfterReleased", Ru = Symbol("elFocusTrap"), tn = x(), bt = x(0), nn = x(0);
let nt = 0;
const Dr = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Qn = (e, t) => {
  for (const n of e)
    if (!$u(n, t))
      return n;
}, $u = (e, t) => {
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
}, Nu = (e) => {
  const t = Dr(e), n = Qn(t, e), r = Qn(t.reverse(), e);
  return [n, r];
}, Fu = (e) => e instanceof HTMLInputElement && "select" in e, se = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), nn.value = window.performance.now(), e !== n && Fu(e) && t && e.select();
  }
};
function Yn(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const Mu = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = Yn(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = Yn(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, Lu = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (se(r, t), document.activeElement !== n)
      return;
}, Xn = Mu(), ju = () => bt.value > nn.value, rt = () => {
  tn.value = "pointer", bt.value = window.performance.now();
}, er = () => {
  tn.value = "keyboard", bt.value = window.performance.now();
}, Du = () => (le(() => {
  nt === 0 && (document.addEventListener("mousedown", rt), document.addEventListener("touchstart", rt), document.addEventListener("keydown", er)), nt++;
}), fe(() => {
  nt--, nt <= 0 && (document.removeEventListener("mousedown", rt), document.removeEventListener("touchstart", rt), document.removeEventListener("keydown", er));
}), {
  focusReason: tn,
  lastUserFocusTimestamp: bt,
  lastAutomatedFocusTimestamp: nn
}), ot = (e) => new CustomEvent(xu, {
  ...Au,
  detail: e
}), Bu = M({
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
    Gn,
    Jn,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = x();
    let r, o;
    const { focusReason: a } = Du();
    iu((d) => {
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
      const { key: f, altKey: y, ctrlKey: l, metaKey: w, currentTarget: E, shiftKey: b } = d, { loop: T } = e, S = f === lt.tab && !y && !l && !w, O = document.activeElement;
      if (S && O) {
        const C = E, [R, I] = Nu(C);
        if (R && I) {
          if (!b && O === I) {
            const A = ot({
              focusReason: a.value
            });
            t("focusout-prevented", A), A.defaultPrevented || (d.preventDefault(), T && se(R, !0));
          } else if (b && [R, C].includes(O)) {
            const A = ot({
              focusReason: a.value
            });
            t("focusout-prevented", A), A.defaultPrevented || (d.preventDefault(), T && se(I, !0));
          }
        } else if (O === C) {
          const A = ot({
            focusReason: a.value
          });
          t("focusout-prevented", A), A.defaultPrevented || d.preventDefault();
        }
      }
    };
    Te(Ru, {
      focusTrapRef: n,
      onKeydown: i
    }), L(() => e.focusTrapEl, (d) => {
      d && (n.value = d);
    }, { immediate: !0 }), L([n], ([d], [f]) => {
      d && (d.addEventListener("keydown", i), d.addEventListener("focusin", p), d.addEventListener("focusout", g)), f && (f.removeEventListener("keydown", i), f.removeEventListener("focusin", p), f.removeEventListener("focusout", g));
    });
    const u = (d) => {
      t(Gn, d);
    }, c = (d) => t(Jn, d), p = (d) => {
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
          !Ht(y) && !f.contains(y) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const l = ot({
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
        Xn.push(s);
        const f = d.contains(document.activeElement) ? r : document.activeElement;
        if (r = f, !d.contains(f)) {
          const l = new Event(St, Zn);
          d.addEventListener(St, u), d.dispatchEvent(l), l.defaultPrevented || xt(() => {
            let w = e.focusStartEl;
            vt(w) || (se(w), document.activeElement !== w && (w = "first")), w === "first" && Lu(Dr(d), !0), (document.activeElement === f || w === "container") && se(d);
          });
        }
      }
    }
    function h() {
      const d = v(n);
      if (d) {
        d.removeEventListener(St, u);
        const f = new CustomEvent(It, {
          ...Zn,
          detail: {
            focusReason: a.value
          }
        });
        d.addEventListener(It, c), d.dispatchEvent(f), !f.defaultPrevented && (a.value == "keyboard" || !ju() || d.contains(document.activeElement)) && se(r ?? document.body), d.removeEventListener(It, c), Xn.remove(s);
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
function ku(e, t, n, r, o, a) {
  return ue(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var zu = /* @__PURE__ */ de(Bu, [["render", ku], ["__file", "focus-trap.vue"]]);
const Hu = ["fixed", "absolute"], Ku = te({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: F(Array),
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
    values: Wt,
    default: "bottom"
  },
  popperOptions: {
    type: F(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Hu,
    default: "absolute"
  }
}), Br = te({
  ...Ku,
  id: String,
  style: {
    type: F([String, Array, Object])
  },
  className: {
    type: F([String, Array, Object])
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
    type: F([String, Array, Object])
  },
  popperStyle: {
    type: F([String, Array, Object])
  },
  referenceEl: {
    type: F(Object)
  },
  triggerTargetEl: {
    type: F(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...$r(["ariaLabel"])
}), Uu = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Vu = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [...qu(e), ...t]
  };
  return Zu(a, o == null ? void 0 : o.modifiers), a;
}, Wu = (e) => {
  if (Z)
    return oe(e);
};
function qu(e) {
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
function Zu(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Gu = 0, Ju = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = U(en, void 0), a = x(), s = x(), i = P(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), u = P(() => {
    var l;
    const w = v(a), E = (l = v(s)) != null ? l : Gu;
    return {
      name: "arrow",
      enabled: !$s(w),
      options: {
        element: w,
        padding: E
      }
    };
  }), c = P(() => ({
    onFirstUpdate: () => {
      d();
    },
    ...Vu(e, [
      v(u),
      v(i)
    ])
  })), p = P(() => Wu(e.referenceEl) || v(r)), { attributes: g, state: m, styles: h, update: d, forceUpdate: f, instanceRef: y } = ru(p, n, c);
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
}, Qu = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = mu(), a = qe("popper"), s = P(() => v(t).popper), i = x(He(e.zIndex) ? e.zIndex : o()), u = P(() => [
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
}, Yu = (e, t) => {
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
}, Xu = M({
  name: "ElPopperContent"
}), ec = /* @__PURE__ */ M({
  ...Xu,
  props: Br,
  emits: Uu,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: u,
      onFocusoutPrevented: c,
      onReleaseRequested: p
    } = Yu(r, n), { attributes: g, arrowRef: m, contentRef: h, styles: d, instanceRef: f, role: y, update: l } = Ju(r), {
      ariaModal: w,
      arrowStyle: E,
      contentAttrs: b,
      contentClass: T,
      contentStyle: S,
      updateZIndex: O
    } = Qu(r, {
      styles: d,
      attributes: g,
      role: y
    }), C = U(Wn, void 0), R = x();
    Te(Nr, {
      arrowStyle: E,
      arrowRef: m,
      arrowOffset: R
    }), C && (C.addInputId || C.removeInputId) && Te(Wn, {
      ...C,
      addInputId: st,
      removeInputId: st
    });
    let I;
    const $ = (N = !0) => {
      l(), N && O();
    }, A = () => {
      $(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return le(() => {
      L(() => r.triggerTargetEl, (N, k) => {
        I == null || I(), I = void 0;
        const B = v(N || h.value), j = v(k || h.value);
        ct(B) && (I = L([y, () => r.ariaLabel, w, () => r.id], (_) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((z, Q) => {
            Ht(_[Q]) ? B.removeAttribute(z) : B.setAttribute(z, _[Q]);
          });
        }, { immediate: !0 })), j !== B && ct(j) && ["role", "aria-label", "aria-modal", "id"].forEach((_) => {
          j.removeAttribute(_);
        });
      }, { immediate: !0 }), L(() => r.visible, A, { immediate: !0 });
    }), fe(() => {
      I == null || I(), I = void 0;
    }), t({
      popperContentRef: h,
      popperInstanceRef: f,
      updatePopper: $,
      contentStyle: S
    }), (N, k) => (D(), G("div", Nt({
      ref_key: "contentRef",
      ref: h
    }, v(b), {
      style: v(S),
      class: v(T),
      tabindex: "-1",
      onMouseenter: k[0] || (k[0] = (B) => N.$emit("mouseenter", B)),
      onMouseleave: k[1] || (k[1] = (B) => N.$emit("mouseleave", B))
    }), [
      Be(v(zu), {
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
          ue(N.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var tc = /* @__PURE__ */ de(ec, [["__file", "content.vue"]]);
const nc = mr(_u), rn = Symbol("elTooltip"), kr = te({
  ...lu,
  ...Br,
  appendTo: {
    type: F([String, Object])
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
    type: F(Boolean),
    default: null
  },
  transition: String,
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: Boolean,
  ...$r(["ariaLabel"])
}), zr = te({
  ...jr,
  disabled: Boolean,
  trigger: {
    type: F([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: F(Array),
    default: () => [lt.enter, lt.space]
  }
}), {
  useModelToggleProps: rc,
  useModelToggleEmits: oc,
  useModelToggle: ac
} = hr("visible"), sc = te({
  ...Fr,
  ...rc,
  ...kr,
  ...zr,
  ...Mr,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), ic = [
  ...oc,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], uc = (e, t) => xo(e) ? e.includes(t) : e === t, _e = (e, t, n) => (r) => {
  uc(v(e), t) && n(r);
}, cc = M({
  name: "ElTooltipTrigger"
}), lc = /* @__PURE__ */ M({
  ...cc,
  props: zr,
  setup(e, { expose: t }) {
    const n = e, r = qe("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: u, onToggle: c } = U(rn, void 0), p = x(null), g = () => {
      if (v(o) || n.disabled)
        return !0;
    }, m = Le(n, "trigger"), h = re(g, _e(m, "hover", i)), d = re(g, _e(m, "hover", u)), f = re(g, _e(m, "click", (b) => {
      b.button === 0 && c(b);
    })), y = re(g, _e(m, "focus", i)), l = re(g, _e(m, "focus", u)), w = re(g, _e(m, "contextmenu", (b) => {
      b.preventDefault(), c(b);
    })), E = re(g, (b) => {
      const { code: T } = b;
      n.triggerKeys.includes(T) && (b.preventDefault(), c(b));
    });
    return t({
      triggerRef: p
    }), (b, T) => (D(), Ce(v(Iu), {
      id: v(a),
      "virtual-ref": b.virtualRef,
      open: v(s),
      "virtual-triggering": b.virtualTriggering,
      class: tr(v(r).e("trigger")),
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
var fc = /* @__PURE__ */ de(lc, [["__file", "trigger.vue"]]);
const pc = M({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), dc = /* @__PURE__ */ M({
  ...pc,
  props: kr,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Ar(), o = qe("tooltip"), a = x(null), s = x(!1), {
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
    } = U(rn, void 0), l = P(() => n.transition || `${o.namespace.value}-fade-in-linear`), w = P(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    fe(() => {
      s.value = !0;
    });
    const E = P(() => v(w) ? !0 : v(c)), b = P(() => n.disabled ? !1 : v(c)), T = P(() => n.appendTo || r.value), S = P(() => {
      var _;
      return (_ = n.style) != null ? _ : {};
    }), O = P(() => !v(c)), C = () => {
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
    }, N = () => {
      y == null || y();
    }, k = () => {
      h(), j = mo(P(() => {
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
    return L(() => v(c), (_) => {
      _ || j == null || j();
    }, {
      flush: "post"
    }), L(() => n.content, () => {
      var _, z;
      (z = (_ = a.value) == null ? void 0 : _.updatePopper) == null || z.call(_);
    }), t({
      contentRef: a
    }), (_, z) => (D(), Ce(ao, {
      disabled: !_.teleported,
      to: v(T)
    }, [
      Be(so, {
        name: v(l),
        onAfterLeave: C,
        onBeforeEnter: A,
        onAfterEnter: k,
        onBeforeLeave: N
      }, {
        default: ie(() => [
          v(E) ? nr((D(), Ce(v(tc), Nt({
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
            [io, v(b)]
          ]) : ke("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var vc = /* @__PURE__ */ de(dc, [["__file", "content.vue"]]);
const gc = ["innerHTML"], mc = { key: 1 }, hc = M({
  name: "ElTooltip"
}), yc = /* @__PURE__ */ M({
  ...hc,
  props: sc,
  emits: ic,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    cu();
    const o = su(), a = x(), s = x(), i = () => {
      var l;
      const w = v(a);
      w && ((l = w.popperInstanceRef) == null || l.update());
    }, u = x(!1), c = x(), { show: p, hide: g, hasUpdateHandler: m } = ac({
      indicator: u,
      toggleReason: c
    }), { onOpen: h, onClose: d } = fu({
      showAfter: Le(r, "showAfter"),
      hideAfter: Le(r, "hideAfter"),
      autoClose: Le(r, "autoClose"),
      open: p,
      close: g
    }), f = P(() => dr(r.visible) && !m.value);
    Te(rn, {
      controlled: f,
      id: o,
      open: uo(u),
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
      var w, E;
      const b = (E = (w = s.value) == null ? void 0 : w.contentRef) == null ? void 0 : E.popperContentRef, T = (l == null ? void 0 : l.relatedTarget) || document.activeElement;
      return b && b.contains(T);
    };
    return co(() => u.value && g()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: y,
      updatePopper: i,
      onOpen: h,
      onClose: d,
      hide: g
    }), (l, w) => (D(), Ce(v(nc), {
      ref_key: "popperRef",
      ref: a,
      role: l.role
    }, {
      default: ie(() => [
        Be(fc, {
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
        Be(vc, {
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
              }, null, 8, gc)) : (D(), G("span", mc, lo(l.content), 1))
            ]),
            l.showArrow ? (D(), Ce(v(Tu), {
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
var bc = /* @__PURE__ */ de(yc, [["__file", "tooltip.vue"]]);
const Lc = mr(bc);
export {
  _c as $,
  aa as A,
  cr as B,
  za as C,
  zt as D,
  Lc as E,
  Rs as F,
  Go as G,
  Ke as H,
  At as I,
  Kt as J,
  Et as K,
  Re as L,
  us as M,
  et as N,
  Tc as O,
  Mc as P,
  Wn as Q,
  su as R,
  ce as S,
  He as T,
  $r as U,
  vt as V,
  $c as W,
  Ac as X,
  xc as Y,
  Ht as Z,
  de as _,
  kr as a,
  st as a0,
  Us as a1,
  Ft as a2,
  Cc as a3,
  ct as a4,
  Ic as a5,
  xo as a6,
  Ec as a7,
  lt as a8,
  Sc as a9,
  Wt as aa,
  Oc as ab,
  Fc as ac,
  te as b,
  dr as c,
  F as d,
  qe as e,
  Pc as f,
  mr as g,
  Z as h,
  Rc as i,
  Dt as j,
  it as k,
  Bt as l,
  Fa as m,
  ea as n,
  jt as o,
  Lt as p,
  No as q,
  Mt as r,
  We as s,
  fr as t,
  zr as u,
  ur as v,
  Nc as w,
  Ts as x,
  be as y,
  Cs as z
};
