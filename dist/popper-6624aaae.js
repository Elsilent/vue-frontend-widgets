import { L as lt, M as qn, c as J, O as Br, P as Vn, Q as Hr, R as Ur, I as zr, S as Kr, T as Wr, G as qr, d as N, j as Vr, f as Gn, m as Ge, k as Zn, C as on, e as et, U as Jn, b as X, x as tt, _ as ue, u as Be, N as Tt, A as Gr, H as nt, F as St, v as Zr, h as an, w as Qn, y as Jr } from "./base-d7e543b4.js";
import { watch as j, ref as A, getCurrentInstance as rt, computed as C, onMounted as ge, unref as d, shallowRef as Qr, onBeforeUnmount as le, inject as q, onBeforeMount as Yr, provide as we, defineComponent as D, renderSlot as se, openBlock as Z, createElementBlock as ot, normalizeClass as Yn, normalizeStyle as Xr, withDirectives as Xn, cloneVNode as eo, Fragment as to, Text as no, Comment as ro, createVNode as je, createBlock as Oe, mergeProps as It, withCtx as ae, createCommentVNode as Me, nextTick as sn, toRef as Fe, Teleport as oo, Transition as ao, vShow as so, readonly as io, onDeactivated as uo, toDisplayString as lo } from "vue";
const te = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (o) => {
  const a = e == null ? void 0 : e(o);
  if (n === !1 || !a)
    return t == null ? void 0 : t(o);
};
function ne(e) {
  var t;
  const n = qn(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const ct = J ? window : void 0;
function bt(...e) {
  let t, n, r, o;
  if (Br(e[0]) || Array.isArray(e[0]) ? ([n, r, o] = e, t = ct) : [t, n, r, o] = e, !t)
    return Vn;
  Array.isArray(n) || (n = [n]), Array.isArray(r) || (r = [r]);
  const a = [], s = () => {
    a.forEach((p) => p()), a.length = 0;
  }, i = (p, h, g, m) => (p.addEventListener(h, g, m), () => p.removeEventListener(h, g, m)), u = j(() => [ne(t), qn(o)], ([p, h]) => {
    s(), p && a.push(...n.flatMap((g) => r.map((m) => i(p, g, m, h))));
  }, { immediate: !0, flush: "post" }), l = () => {
    u(), s();
  };
  return lt(l), l;
}
let un = !1;
function co(e, t, n = {}) {
  const { window: r = ct, ignore: o = [], capture: a = !0, detectIframe: s = !1 } = n;
  if (!r)
    return;
  zr && !un && (un = !0, Array.from(r.document.body.children).forEach((g) => g.addEventListener("click", Vn)));
  let i = !0;
  const u = (g) => o.some((m) => {
    if (typeof m == "string")
      return Array.from(r.document.querySelectorAll(m)).some((c) => c === g.target || g.composedPath().includes(c));
    {
      const c = ne(m);
      return c && (g.target === c || g.composedPath().includes(c));
    }
  }), p = [
    bt(r, "click", (g) => {
      const m = ne(e);
      if (!(!m || m === g.target || g.composedPath().includes(m))) {
        if (g.detail === 0 && (i = !u(g)), !i) {
          i = !0;
          return;
        }
        t(g);
      }
    }, { passive: !0, capture: a }),
    bt(r, "pointerdown", (g) => {
      const m = ne(e);
      m && (i = !g.composedPath().includes(m) && !u(g));
    }, { passive: !0 }),
    s && bt(r, "blur", (g) => {
      var m;
      const c = ne(e);
      ((m = r.document.activeElement) == null ? void 0 : m.tagName) === "IFRAME" && !(c != null && c.contains(r.document.activeElement)) && t(g);
    })
  ].filter(Boolean);
  return () => p.forEach((g) => g());
}
function er(e, t = !1) {
  const n = A(), r = () => n.value = !!e();
  return r(), Hr(r, t), n;
}
const ln = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, cn = "__vueuse_ssr_handlers__";
ln[cn] = ln[cn] || {};
var fn = Object.getOwnPropertySymbols, fo = Object.prototype.hasOwnProperty, po = Object.prototype.propertyIsEnumerable, vo = (e, t) => {
  var n = {};
  for (var r in e)
    fo.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && fn)
    for (var r of fn(e))
      t.indexOf(r) < 0 && po.call(e, r) && (n[r] = e[r]);
  return n;
};
function Yu(e, t, n = {}) {
  const r = n, { window: o = ct } = r, a = vo(r, ["window"]);
  let s;
  const i = er(() => o && "ResizeObserver" in o), u = () => {
    s && (s.disconnect(), s = void 0);
  }, l = j(() => ne(e), (h) => {
    u(), i.value && o && h && (s = new ResizeObserver(t), s.observe(h, a));
  }, { immediate: !0, flush: "post" }), p = () => {
    u(), l();
  };
  return lt(p), {
    isSupported: i,
    stop: p
  };
}
var pn = Object.getOwnPropertySymbols, go = Object.prototype.hasOwnProperty, mo = Object.prototype.propertyIsEnumerable, ho = (e, t) => {
  var n = {};
  for (var r in e)
    go.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && pn)
    for (var r of pn(e))
      t.indexOf(r) < 0 && mo.call(e, r) && (n[r] = e[r]);
  return n;
};
function Xu(e, t, n = {}) {
  const r = n, { window: o = ct } = r, a = ho(r, ["window"]);
  let s;
  const i = er(() => o && "MutationObserver" in o), u = () => {
    s && (s.disconnect(), s = void 0);
  }, l = j(() => ne(e), (h) => {
    u(), i.value && o && h && (s = new MutationObserver(t), s.observe(h, a));
  }, { immediate: !0 }), p = () => {
    u(), l();
  };
  return lt(p), {
    isSupported: i,
    stop: p
  };
}
var dn;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(dn || (dn = {}));
var yo = Object.defineProperty, vn = Object.getOwnPropertySymbols, bo = Object.prototype.hasOwnProperty, wo = Object.prototype.propertyIsEnumerable, gn = (e, t, n) => t in e ? yo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Oo = (e, t) => {
  for (var n in t || (t = {}))
    bo.call(t, n) && gn(e, n, t[n]);
  if (vn)
    for (var n of vn(t))
      wo.call(t, n) && gn(e, n, t[n]);
  return e;
};
const Eo = {
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
Oo({
  linear: Ur
}, Eo);
var _o = typeof global == "object" && global && global.Object === Object && global;
const To = _o;
var Po = typeof self == "object" && self && self.Object === Object && self, Co = To || Po || Function("return this")();
const xt = Co;
var So = xt.Symbol;
const ie = So;
var tr = Object.prototype, Io = tr.hasOwnProperty, xo = tr.toString, Ae = ie ? ie.toStringTag : void 0;
function Ao(e) {
  var t = Io.call(e, Ae), n = e[Ae];
  try {
    e[Ae] = void 0;
    var r = !0;
  } catch {
  }
  var o = xo.call(e);
  return r && (t ? e[Ae] = n : delete e[Ae]), o;
}
var Ro = Object.prototype, Fo = Ro.toString;
function $o(e) {
  return Fo.call(e);
}
var No = "[object Null]", jo = "[object Undefined]", mn = ie ? ie.toStringTag : void 0;
function At(e) {
  return e == null ? e === void 0 ? jo : No : mn && mn in Object(e) ? Ao(e) : $o(e);
}
function Rt(e) {
  return e != null && typeof e == "object";
}
var Mo = "[object Symbol]";
function Ft(e) {
  return typeof e == "symbol" || Rt(e) && At(e) == Mo;
}
function Lo(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var Do = Array.isArray;
const He = Do;
var ko = 1 / 0, hn = ie ? ie.prototype : void 0, yn = hn ? hn.toString : void 0;
function nr(e) {
  if (typeof e == "string")
    return e;
  if (He(e))
    return Lo(e, nr) + "";
  if (Ft(e))
    return yn ? yn.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -ko ? "-0" : t;
}
function at(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Bo(e) {
  return e;
}
var Ho = "[object AsyncFunction]", Uo = "[object Function]", zo = "[object GeneratorFunction]", Ko = "[object Proxy]";
function Wo(e) {
  if (!at(e))
    return !1;
  var t = At(e);
  return t == Uo || t == zo || t == Ho || t == Ko;
}
var qo = xt["__core-js_shared__"];
const wt = qo;
var bn = function() {
  var e = /[^.]+$/.exec(wt && wt.keys && wt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Vo(e) {
  return !!bn && bn in e;
}
var Go = Function.prototype, Zo = Go.toString;
function Jo(e) {
  if (e != null) {
    try {
      return Zo.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Qo = /[\\^$.*+?()[\]{}|]/g, Yo = /^\[object .+?Constructor\]$/, Xo = Function.prototype, ea = Object.prototype, ta = Xo.toString, na = ea.hasOwnProperty, ra = RegExp(
  "^" + ta.call(na).replace(Qo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function oa(e) {
  if (!at(e) || Vo(e))
    return !1;
  var t = Wo(e) ? ra : Yo;
  return t.test(Jo(e));
}
function aa(e, t) {
  return e == null ? void 0 : e[t];
}
function $t(e, t) {
  var n = aa(e, t);
  return oa(n) ? n : void 0;
}
function sa(e, t, n) {
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
var ia = 800, ua = 16, la = Date.now;
function ca(e) {
  var t = 0, n = 0;
  return function() {
    var r = la(), o = ua - (r - n);
    if (n = r, o > 0) {
      if (++t >= ia)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function fa(e) {
  return function() {
    return e;
  };
}
var pa = function() {
  try {
    var e = $t(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
const st = pa;
var da = st ? function(e, t) {
  return st(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: fa(t),
    writable: !0
  });
} : Bo;
const va = da;
var ga = ca(va);
const ma = ga;
var ha = 9007199254740991, ya = /^(?:0|[1-9]\d*)$/;
function rr(e, t) {
  var n = typeof e;
  return t = t ?? ha, !!t && (n == "number" || n != "symbol" && ya.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ba(e, t, n) {
  t == "__proto__" && st ? st(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function or(e, t) {
  return e === t || e !== e && t !== t;
}
var wa = Object.prototype, Oa = wa.hasOwnProperty;
function Ea(e, t, n) {
  var r = e[t];
  (!(Oa.call(e, t) && or(r, n)) || n === void 0 && !(t in e)) && ba(e, t, n);
}
var wn = Math.max;
function _a(e, t, n) {
  return t = wn(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, a = wn(r.length - t, 0), s = Array(a); ++o < a; )
      s[o] = r[t + o];
    o = -1;
    for (var i = Array(t + 1); ++o < t; )
      i[o] = r[o];
    return i[t] = n(s), sa(e, this, i);
  };
}
var Ta = 9007199254740991;
function Pa(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ta;
}
var Ca = "[object Arguments]";
function On(e) {
  return Rt(e) && At(e) == Ca;
}
var ar = Object.prototype, Sa = ar.hasOwnProperty, Ia = ar.propertyIsEnumerable, xa = On(function() {
  return arguments;
}()) ? On : function(e) {
  return Rt(e) && Sa.call(e, "callee") && !Ia.call(e, "callee");
};
const sr = xa;
var Aa = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ra = /^\w*$/;
function Fa(e, t) {
  if (He(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Ft(e) ? !0 : Ra.test(e) || !Aa.test(e) || t != null && e in Object(t);
}
var $a = $t(Object, "create");
const Le = $a;
function Na() {
  this.__data__ = Le ? Le(null) : {}, this.size = 0;
}
function ja(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ma = "__lodash_hash_undefined__", La = Object.prototype, Da = La.hasOwnProperty;
function ka(e) {
  var t = this.__data__;
  if (Le) {
    var n = t[e];
    return n === Ma ? void 0 : n;
  }
  return Da.call(t, e) ? t[e] : void 0;
}
var Ba = Object.prototype, Ha = Ba.hasOwnProperty;
function Ua(e) {
  var t = this.__data__;
  return Le ? t[e] !== void 0 : Ha.call(t, e);
}
var za = "__lodash_hash_undefined__";
function Ka(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Le && t === void 0 ? za : t, this;
}
function ve(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ve.prototype.clear = Na;
ve.prototype.delete = ja;
ve.prototype.get = ka;
ve.prototype.has = Ua;
ve.prototype.set = Ka;
function Wa() {
  this.__data__ = [], this.size = 0;
}
function ft(e, t) {
  for (var n = e.length; n--; )
    if (or(e[n][0], t))
      return n;
  return -1;
}
var qa = Array.prototype, Va = qa.splice;
function Ga(e) {
  var t = this.__data__, n = ft(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Va.call(t, n, 1), --this.size, !0;
}
function Za(e) {
  var t = this.__data__, n = ft(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ja(e) {
  return ft(this.__data__, e) > -1;
}
function Qa(e, t) {
  var n = this.__data__, r = ft(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Se(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Se.prototype.clear = Wa;
Se.prototype.delete = Ga;
Se.prototype.get = Za;
Se.prototype.has = Ja;
Se.prototype.set = Qa;
var Ya = $t(xt, "Map");
const Xa = Ya;
function es() {
  this.size = 0, this.__data__ = {
    hash: new ve(),
    map: new (Xa || Se)(),
    string: new ve()
  };
}
function ts(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function pt(e, t) {
  var n = e.__data__;
  return ts(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function ns(e) {
  var t = pt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function rs(e) {
  return pt(this, e).get(e);
}
function os(e) {
  return pt(this, e).has(e);
}
function as(e, t) {
  var n = pt(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function me(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
me.prototype.clear = es;
me.prototype.delete = ns;
me.prototype.get = rs;
me.prototype.has = os;
me.prototype.set = as;
var ss = "Expected a function";
function Nt(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ss);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var s = e.apply(this, r);
    return n.cache = a.set(o, s) || a, s;
  };
  return n.cache = new (Nt.Cache || me)(), n;
}
Nt.Cache = me;
var is = 500;
function us(e) {
  var t = Nt(e, function(r) {
    return n.size === is && n.clear(), r;
  }), n = t.cache;
  return t;
}
var ls = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, cs = /\\(\\)?/g, fs = us(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ls, function(n, r, o, a) {
    t.push(o ? a.replace(cs, "$1") : r || n);
  }), t;
});
const ps = fs;
function ds(e) {
  return e == null ? "" : nr(e);
}
function dt(e, t) {
  return He(e) ? e : Fa(e, t) ? [e] : ps(ds(e));
}
var vs = 1 / 0;
function jt(e) {
  if (typeof e == "string" || Ft(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -vs ? "-0" : t;
}
function gs(e, t) {
  t = dt(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[jt(t[n++])];
  return n && n == r ? e : void 0;
}
function ms(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var En = ie ? ie.isConcatSpreadable : void 0;
function hs(e) {
  return He(e) || sr(e) || !!(En && e && e[En]);
}
function ir(e, t, n, r, o) {
  var a = -1, s = e.length;
  for (n || (n = hs), o || (o = []); ++a < s; ) {
    var i = e[a];
    t > 0 && n(i) ? t > 1 ? ir(i, t - 1, n, r, o) : ms(o, i) : r || (o[o.length] = i);
  }
  return o;
}
function ys(e) {
  var t = e == null ? 0 : e.length;
  return t ? ir(e, 1) : [];
}
function bs(e) {
  return ma(_a(e, void 0, ys), e + "");
}
function ws(e, t) {
  return e != null && t in Object(e);
}
function Os(e, t, n) {
  t = dt(t, e);
  for (var r = -1, o = t.length, a = !1; ++r < o; ) {
    var s = jt(t[r]);
    if (!(a = e != null && n(e, s)))
      break;
    e = e[s];
  }
  return a || ++r != o ? a : (o = e == null ? 0 : e.length, !!o && Pa(o) && rr(s, o) && (He(e) || sr(e)));
}
function Es(e, t) {
  return e != null && Os(e, t, ws);
}
function _s(e) {
  return e === void 0;
}
function Ts(e, t, n, r) {
  if (!at(e))
    return e;
  t = dt(t, e);
  for (var o = -1, a = t.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var u = jt(t[o]), l = n;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return e;
    if (o != s) {
      var p = i[u];
      l = r ? r(p, u, i) : void 0, l === void 0 && (l = at(p) ? p : rr(t[o + 1]) ? [] : {});
    }
    Ea(i, u, l), i = i[u];
  }
  return e;
}
function Ps(e, t, n) {
  for (var r = -1, o = t.length, a = {}; ++r < o; ) {
    var s = t[r], i = gs(e, s);
    n(i, s) && Ts(a, dt(s, e), i);
  }
  return a;
}
function Cs(e, t) {
  return Ps(e, t, function(n, r) {
    return Es(e, r);
  });
}
var Ss = bs(function(e, t) {
  return e == null ? {} : Cs(e, t);
});
const Is = Ss, el = N([
  String,
  Object,
  Function
]), tl = {
  Close: Vr
}, nl = {
  validating: Kr,
  success: Wr,
  error: qr
}, it = {
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
}, xs = Gn({
  type: N(Boolean),
  default: null
}), As = Gn({
  type: N(Function)
}), ur = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, r = [t], o = {
    [e]: xs,
    [n]: As
  };
  return {
    useModelToggle: ({
      indicator: s,
      toggleReason: i,
      shouldHideWhenRouteChanges: u,
      shouldProceed: l,
      onShow: p,
      onHide: h
    }) => {
      const g = rt(), { emit: m } = g, c = g.props, v = C(() => Ge(c[n])), w = C(() => c[e] === null), f = (E) => {
        s.value !== !0 && (s.value = !0, i && (i.value = E), Ge(p) && p(E));
      }, b = (E) => {
        s.value !== !1 && (s.value = !1, i && (i.value = E), Ge(h) && h(E));
      }, _ = (E) => {
        if (c.disabled === !0 || Ge(l) && !l())
          return;
        const P = v.value && J;
        P && m(t, !0), (w.value || !P) && f(E);
      }, y = (E) => {
        if (c.disabled === !0 || !J)
          return;
        const P = v.value && J;
        P && m(t, !1), (w.value || !P) && b(E);
      }, T = (E) => {
        Zn(E) && (c.disabled && E ? v.value && m(t, !1) : s.value !== E && (E ? f() : b()));
      }, S = () => {
        s.value ? y() : _();
      };
      return j(() => c[e], T), u && g.appContext.config.globalProperties.$route !== void 0 && j(() => ({
        ...g.proxy.$route
      }), () => {
        u.value && s.value && y();
      }), ge(() => {
        T(c[e]);
      }), {
        hide: y,
        show: _,
        toggle: S,
        hasUpdateHandler: v
      };
    },
    useModelToggleProps: o,
    useModelToggleEmits: r
  };
};
ur("modelValue");
var H = "top", K = "bottom", W = "right", U = "left", Mt = "auto", Ue = [H, K, W, U], Ee = "start", De = "end", Rs = "clippingParents", lr = "viewport", Re = "popper", Fs = "reference", _n = Ue.reduce(function(e, t) {
  return e.concat([t + "-" + Ee, t + "-" + De]);
}, []), Lt = [].concat(Ue, [Mt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ee, t + "-" + De]);
}, []), $s = "beforeRead", Ns = "read", js = "afterRead", Ms = "beforeMain", Ls = "main", Ds = "afterMain", ks = "beforeWrite", Bs = "write", Hs = "afterWrite", Us = [$s, Ns, js, Ms, Ls, Ds, ks, Bs, Hs];
function Y(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function V(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function _e(e) {
  var t = V(e).Element;
  return e instanceof t || e instanceof Element;
}
function z(e) {
  var t = V(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Dt(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = V(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function zs(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !z(a) || !Y(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function Ks(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(u, l) {
        return u[l] = "", u;
      }, {});
      !z(o) || !Y(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(u) {
        o.removeAttribute(u);
      }));
    });
  };
}
var cr = { name: "applyStyles", enabled: !0, phase: "write", fn: zs, effect: Ks, requires: ["computeStyles"] };
function Q(e) {
  return e.split("-")[0];
}
var de = Math.max, ut = Math.min, Te = Math.round;
function Pe(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), r = 1, o = 1;
  if (z(e) && t) {
    var a = e.offsetHeight, s = e.offsetWidth;
    s > 0 && (r = Te(n.width) / s || 1), a > 0 && (o = Te(n.height) / a || 1);
  }
  return { width: n.width / r, height: n.height / o, top: n.top / o, right: n.right / r, bottom: n.bottom / o, left: n.left / r, x: n.left / r, y: n.top / o };
}
function kt(e) {
  var t = Pe(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: r };
}
function fr(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && Dt(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function re(e) {
  return V(e).getComputedStyle(e);
}
function Ws(e) {
  return ["table", "td", "th"].indexOf(Y(e)) >= 0;
}
function ce(e) {
  return ((_e(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function vt(e) {
  return Y(e) === "html" ? e : e.assignedSlot || e.parentNode || (Dt(e) ? e.host : null) || ce(e);
}
function Tn(e) {
  return !z(e) || re(e).position === "fixed" ? null : e.offsetParent;
}
function qs(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && z(e)) {
    var r = re(e);
    if (r.position === "fixed")
      return null;
  }
  var o = vt(e);
  for (Dt(o) && (o = o.host); z(o) && ["html", "body"].indexOf(Y(o)) < 0; ) {
    var a = re(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function ze(e) {
  for (var t = V(e), n = Tn(e); n && Ws(n) && re(n).position === "static"; )
    n = Tn(n);
  return n && (Y(n) === "html" || Y(n) === "body" && re(n).position === "static") ? t : n || qs(e) || t;
}
function Bt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function $e(e, t, n) {
  return de(e, ut(t, n));
}
function Vs(e, t, n) {
  var r = $e(e, t, n);
  return r > n ? n : r;
}
function pr() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function dr(e) {
  return Object.assign({}, pr(), e);
}
function vr(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var Gs = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, dr(typeof e != "number" ? e : vr(e, Ue));
};
function Zs(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = Q(n.placement), u = Bt(i), l = [U, W].indexOf(i) >= 0, p = l ? "height" : "width";
  if (!(!a || !s)) {
    var h = Gs(o.padding, n), g = kt(a), m = u === "y" ? H : U, c = u === "y" ? K : W, v = n.rects.reference[p] + n.rects.reference[u] - s[u] - n.rects.popper[p], w = s[u] - n.rects.reference[u], f = ze(a), b = f ? u === "y" ? f.clientHeight || 0 : f.clientWidth || 0 : 0, _ = v / 2 - w / 2, y = h[m], T = b - g[p] - h[c], S = b / 2 - g[p] / 2 + _, E = $e(y, S, T), P = u;
    n.modifiersData[r] = (t = {}, t[P] = E, t.centerOffset = E - S, t);
  }
}
function Js(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || !fr(t.elements.popper, o) || (t.elements.arrow = o));
}
var Qs = { name: "arrow", enabled: !0, phase: "main", fn: Zs, effect: Js, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Ce(e) {
  return e.split("-")[1];
}
var Ys = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Xs(e) {
  var t = e.x, n = e.y, r = window, o = r.devicePixelRatio || 1;
  return { x: Te(t * o) / o || 0, y: Te(n * o) / o || 0 };
}
function Pn(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, u = e.gpuAcceleration, l = e.adaptive, p = e.roundOffsets, h = e.isFixed, g = s.x, m = g === void 0 ? 0 : g, c = s.y, v = c === void 0 ? 0 : c, w = typeof p == "function" ? p({ x: m, y: v }) : { x: m, y: v };
  m = w.x, v = w.y;
  var f = s.hasOwnProperty("x"), b = s.hasOwnProperty("y"), _ = U, y = H, T = window;
  if (l) {
    var S = ze(n), E = "clientHeight", P = "clientWidth";
    if (S === V(n) && (S = ce(n), re(S).position !== "static" && i === "absolute" && (E = "scrollHeight", P = "scrollWidth")), S = S, o === H || (o === U || o === W) && a === De) {
      y = K;
      var R = h && S === T && T.visualViewport ? T.visualViewport.height : S[E];
      v -= R - r.height, v *= u ? 1 : -1;
    }
    if (o === U || (o === H || o === K) && a === De) {
      _ = W;
      var I = h && S === T && T.visualViewport ? T.visualViewport.width : S[P];
      m -= I - r.width, m *= u ? 1 : -1;
    }
  }
  var F = Object.assign({ position: i }, l && Ys), x = p === !0 ? Xs({ x: m, y: v }) : { x: m, y: v };
  if (m = x.x, v = x.y, u) {
    var $;
    return Object.assign({}, F, ($ = {}, $[y] = b ? "0" : "", $[_] = f ? "0" : "", $.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + v + "px)" : "translate3d(" + m + "px, " + v + "px, 0)", $));
  }
  return Object.assign({}, F, (t = {}, t[y] = b ? v + "px" : "", t[_] = f ? m + "px" : "", t.transform = "", t));
}
function ei(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, u = i === void 0 ? !0 : i, l = { placement: Q(t.placement), variation: Ce(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: o, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Pn(Object.assign({}, l, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: s, roundOffsets: u })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Pn(Object.assign({}, l, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: u })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var gr = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: ei, data: {} }, Ze = { passive: !0 };
function ti(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, u = V(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && l.forEach(function(p) {
    p.addEventListener("scroll", n.update, Ze);
  }), i && u.addEventListener("resize", n.update, Ze), function() {
    a && l.forEach(function(p) {
      p.removeEventListener("scroll", n.update, Ze);
    }), i && u.removeEventListener("resize", n.update, Ze);
  };
}
var mr = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: ti, data: {} }, ni = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Xe(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ni[t];
  });
}
var ri = { start: "end", end: "start" };
function Cn(e) {
  return e.replace(/start|end/g, function(t) {
    return ri[t];
  });
}
function Ht(e) {
  var t = V(e), n = t.pageXOffset, r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function Ut(e) {
  return Pe(ce(e)).left + Ht(e).scrollLeft;
}
function oi(e) {
  var t = V(e), n = ce(e), r = t.visualViewport, o = n.clientWidth, a = n.clientHeight, s = 0, i = 0;
  return r && (o = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = r.offsetLeft, i = r.offsetTop)), { width: o, height: a, x: s + Ut(e), y: i };
}
function ai(e) {
  var t, n = ce(e), r = Ht(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = de(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = de(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + Ut(e), u = -r.scrollTop;
  return re(o || n).direction === "rtl" && (i += de(n.clientWidth, o ? o.clientWidth : 0) - a), { width: a, height: s, x: i, y: u };
}
function zt(e) {
  var t = re(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function hr(e) {
  return ["html", "body", "#document"].indexOf(Y(e)) >= 0 ? e.ownerDocument.body : z(e) && zt(e) ? e : hr(vt(e));
}
function Ne(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = hr(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = V(r), s = o ? [a].concat(a.visualViewport || [], zt(r) ? r : []) : r, i = t.concat(s);
  return o ? i : i.concat(Ne(vt(s)));
}
function Pt(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function si(e) {
  var t = Pe(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Sn(e, t) {
  return t === lr ? Pt(oi(e)) : _e(t) ? si(t) : Pt(ai(ce(e)));
}
function ii(e) {
  var t = Ne(vt(e)), n = ["absolute", "fixed"].indexOf(re(e).position) >= 0, r = n && z(e) ? ze(e) : e;
  return _e(r) ? t.filter(function(o) {
    return _e(o) && fr(o, r) && Y(o) !== "body";
  }) : [];
}
function ui(e, t, n) {
  var r = t === "clippingParents" ? ii(e) : [].concat(t), o = [].concat(r, [n]), a = o[0], s = o.reduce(function(i, u) {
    var l = Sn(e, u);
    return i.top = de(l.top, i.top), i.right = ut(l.right, i.right), i.bottom = ut(l.bottom, i.bottom), i.left = de(l.left, i.left), i;
  }, Sn(e, a));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function yr(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? Q(r) : null, a = r ? Ce(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, u;
  switch (o) {
    case H:
      u = { x: s, y: t.y - n.height };
      break;
    case K:
      u = { x: s, y: t.y + t.height };
      break;
    case W:
      u = { x: t.x + t.width, y: i };
      break;
    case U:
      u = { x: t.x - n.width, y: i };
      break;
    default:
      u = { x: t.x, y: t.y };
  }
  var l = o ? Bt(o) : null;
  if (l != null) {
    var p = l === "y" ? "height" : "width";
    switch (a) {
      case Ee:
        u[l] = u[l] - (t[p] / 2 - n[p] / 2);
        break;
      case De:
        u[l] = u[l] + (t[p] / 2 - n[p] / 2);
        break;
    }
  }
  return u;
}
function ke(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.boundary, s = a === void 0 ? Rs : a, i = n.rootBoundary, u = i === void 0 ? lr : i, l = n.elementContext, p = l === void 0 ? Re : l, h = n.altBoundary, g = h === void 0 ? !1 : h, m = n.padding, c = m === void 0 ? 0 : m, v = dr(typeof c != "number" ? c : vr(c, Ue)), w = p === Re ? Fs : Re, f = e.rects.popper, b = e.elements[g ? w : p], _ = ui(_e(b) ? b : b.contextElement || ce(e.elements.popper), s, u), y = Pe(e.elements.reference), T = yr({ reference: y, element: f, strategy: "absolute", placement: o }), S = Pt(Object.assign({}, f, T)), E = p === Re ? S : y, P = { top: _.top - E.top + v.top, bottom: E.bottom - _.bottom + v.bottom, left: _.left - E.left + v.left, right: E.right - _.right + v.right }, R = e.modifiersData.offset;
  if (p === Re && R) {
    var I = R[o];
    Object.keys(P).forEach(function(F) {
      var x = [W, K].indexOf(F) >= 0 ? 1 : -1, $ = [H, K].indexOf(F) >= 0 ? "y" : "x";
      P[F] += I[$] * x;
    });
  }
  return P;
}
function li(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, u = n.allowedAutoPlacements, l = u === void 0 ? Lt : u, p = Ce(r), h = p ? i ? _n : _n.filter(function(c) {
    return Ce(c) === p;
  }) : Ue, g = h.filter(function(c) {
    return l.indexOf(c) >= 0;
  });
  g.length === 0 && (g = h);
  var m = g.reduce(function(c, v) {
    return c[v] = ke(e, { placement: v, boundary: o, rootBoundary: a, padding: s })[Q(v)], c;
  }, {});
  return Object.keys(m).sort(function(c, v) {
    return m[c] - m[v];
  });
}
function ci(e) {
  if (Q(e) === Mt)
    return [];
  var t = Xe(e);
  return [Cn(e), t, Cn(t)];
}
function fi(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, u = n.fallbackPlacements, l = n.padding, p = n.boundary, h = n.rootBoundary, g = n.altBoundary, m = n.flipVariations, c = m === void 0 ? !0 : m, v = n.allowedAutoPlacements, w = t.options.placement, f = Q(w), b = f === w, _ = u || (b || !c ? [Xe(w)] : ci(w)), y = [w].concat(_).reduce(function(fe, ee) {
      return fe.concat(Q(ee) === Mt ? li(t, { placement: ee, boundary: p, rootBoundary: h, padding: l, flipVariations: c, allowedAutoPlacements: v }) : ee);
    }, []), T = t.rects.reference, S = t.rects.popper, E = /* @__PURE__ */ new Map(), P = !0, R = y[0], I = 0; I < y.length; I++) {
      var F = y[I], x = Q(F), $ = Ce(F) === Ee, k = [H, K].indexOf(x) >= 0, L = k ? "width" : "height", M = ke(t, { placement: F, boundary: p, rootBoundary: h, altBoundary: g, padding: l }), O = k ? $ ? W : U : $ ? K : H;
      T[L] > S[L] && (O = Xe(O));
      var B = Xe(O), G = [];
      if (a && G.push(M[x] <= 0), i && G.push(M[O] <= 0, M[B] <= 0), G.every(function(fe) {
        return fe;
      })) {
        R = F, P = !1;
        break;
      }
      E.set(F, G);
    }
    if (P)
      for (var Ke = c ? 3 : 1, mt = function(fe) {
        var ee = y.find(function(qe) {
          var xe = E.get(qe);
          if (xe)
            return xe.slice(0, fe).every(function(he) {
              return he;
            });
        });
        if (ee)
          return R = ee, "break";
      }, Ie = Ke; Ie > 0; Ie--) {
        var We = mt(Ie);
        if (We === "break")
          break;
      }
    t.placement !== R && (t.modifiersData[r]._skip = !0, t.placement = R, t.reset = !0);
  }
}
var pi = { name: "flip", enabled: !0, phase: "main", fn: fi, requiresIfExists: ["offset"], data: { _skip: !1 } };
function In(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function xn(e) {
  return [H, W, K, U].some(function(t) {
    return e[t] >= 0;
  });
}
function di(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = ke(t, { elementContext: "reference" }), i = ke(t, { altBoundary: !0 }), u = In(s, r), l = In(i, o, a), p = xn(u), h = xn(l);
  t.modifiersData[n] = { referenceClippingOffsets: u, popperEscapeOffsets: l, isReferenceHidden: p, hasPopperEscaped: h }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": p, "data-popper-escaped": h });
}
var vi = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: di };
function gi(e, t, n) {
  var r = Q(e), o = [U, H].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [U, W].indexOf(r) >= 0 ? { x: i, y: s } : { x: s, y: i };
}
function mi(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = Lt.reduce(function(p, h) {
    return p[h] = gi(h, t.rects, a), p;
  }, {}), i = s[t.placement], u = i.x, l = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = s;
}
var hi = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: mi };
function yi(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = yr({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var br = { name: "popperOffsets", enabled: !0, phase: "read", fn: yi, data: {} };
function bi(e) {
  return e === "x" ? "y" : "x";
}
function wi(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, u = n.boundary, l = n.rootBoundary, p = n.altBoundary, h = n.padding, g = n.tether, m = g === void 0 ? !0 : g, c = n.tetherOffset, v = c === void 0 ? 0 : c, w = ke(t, { boundary: u, rootBoundary: l, padding: h, altBoundary: p }), f = Q(t.placement), b = Ce(t.placement), _ = !b, y = Bt(f), T = bi(y), S = t.modifiersData.popperOffsets, E = t.rects.reference, P = t.rects.popper, R = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, I = typeof R == "number" ? { mainAxis: R, altAxis: R } : Object.assign({ mainAxis: 0, altAxis: 0 }, R), F = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, x = { x: 0, y: 0 };
  if (S) {
    if (a) {
      var $, k = y === "y" ? H : U, L = y === "y" ? K : W, M = y === "y" ? "height" : "width", O = S[y], B = O + w[k], G = O - w[L], Ke = m ? -P[M] / 2 : 0, mt = b === Ee ? E[M] : P[M], Ie = b === Ee ? -P[M] : -E[M], We = t.elements.arrow, fe = m && We ? kt(We) : { width: 0, height: 0 }, ee = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : pr(), qe = ee[k], xe = ee[L], he = $e(0, E[M], fe[M]), $r = _ ? E[M] / 2 - Ke - he - qe - I.mainAxis : mt - he - qe - I.mainAxis, Nr = _ ? -E[M] / 2 + Ke + he + xe + I.mainAxis : Ie + he + xe + I.mainAxis, ht = t.elements.arrow && ze(t.elements.arrow), jr = ht ? y === "y" ? ht.clientTop || 0 : ht.clientLeft || 0 : 0, Zt = ($ = F == null ? void 0 : F[y]) != null ? $ : 0, Mr = O + $r - Zt - jr, Lr = O + Nr - Zt, Jt = $e(m ? ut(B, Mr) : B, O, m ? de(G, Lr) : G);
      S[y] = Jt, x[y] = Jt - O;
    }
    if (i) {
      var Qt, Dr = y === "x" ? H : U, kr = y === "x" ? K : W, pe = S[T], Ve = T === "y" ? "height" : "width", Yt = pe + w[Dr], Xt = pe - w[kr], yt = [H, U].indexOf(f) !== -1, en = (Qt = F == null ? void 0 : F[T]) != null ? Qt : 0, tn = yt ? Yt : pe - E[Ve] - P[Ve] - en + I.altAxis, nn = yt ? pe + E[Ve] + P[Ve] - en - I.altAxis : Xt, rn = m && yt ? Vs(tn, pe, nn) : $e(m ? tn : Yt, pe, m ? nn : Xt);
      S[T] = rn, x[T] = rn - pe;
    }
    t.modifiersData[r] = x;
  }
}
var Oi = { name: "preventOverflow", enabled: !0, phase: "main", fn: wi, requiresIfExists: ["offset"] };
function Ei(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function _i(e) {
  return e === V(e) || !z(e) ? Ht(e) : Ei(e);
}
function Ti(e) {
  var t = e.getBoundingClientRect(), n = Te(t.width) / e.offsetWidth || 1, r = Te(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function Pi(e, t, n) {
  n === void 0 && (n = !1);
  var r = z(t), o = z(t) && Ti(t), a = ce(t), s = Pe(e, o), i = { scrollLeft: 0, scrollTop: 0 }, u = { x: 0, y: 0 };
  return (r || !r && !n) && ((Y(t) !== "body" || zt(a)) && (i = _i(t)), z(t) ? (u = Pe(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : a && (u.x = Ut(a))), { x: s.left + i.scrollLeft - u.x, y: s.top + i.scrollTop - u.y, width: s.width, height: s.height };
}
function Ci(e) {
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
function Si(e) {
  var t = Ci(e);
  return Us.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Ii(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function xi(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, { options: Object.assign({}, o.options, r.options), data: Object.assign({}, o.data, r.data) }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var An = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Rn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Kt(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? An : o;
  return function(s, i, u) {
    u === void 0 && (u = a);
    var l = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, An, a), modifiersData: {}, elements: { reference: s, popper: i }, attributes: {}, styles: {} }, p = [], h = !1, g = { state: l, setOptions: function(v) {
      var w = typeof v == "function" ? v(l.options) : v;
      c(), l.options = Object.assign({}, a, l.options, w), l.scrollParents = { reference: _e(s) ? Ne(s) : s.contextElement ? Ne(s.contextElement) : [], popper: Ne(i) };
      var f = Si(xi([].concat(r, l.options.modifiers)));
      return l.orderedModifiers = f.filter(function(b) {
        return b.enabled;
      }), m(), g.update();
    }, forceUpdate: function() {
      if (!h) {
        var v = l.elements, w = v.reference, f = v.popper;
        if (Rn(w, f)) {
          l.rects = { reference: Pi(w, ze(f), l.options.strategy === "fixed"), popper: kt(f) }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(P) {
            return l.modifiersData[P.name] = Object.assign({}, P.data);
          });
          for (var b = 0; b < l.orderedModifiers.length; b++) {
            if (l.reset === !0) {
              l.reset = !1, b = -1;
              continue;
            }
            var _ = l.orderedModifiers[b], y = _.fn, T = _.options, S = T === void 0 ? {} : T, E = _.name;
            typeof y == "function" && (l = y({ state: l, options: S, name: E, instance: g }) || l);
          }
        }
      }
    }, update: Ii(function() {
      return new Promise(function(v) {
        g.forceUpdate(), v(l);
      });
    }), destroy: function() {
      c(), h = !0;
    } };
    if (!Rn(s, i))
      return g;
    g.setOptions(u).then(function(v) {
      !h && u.onFirstUpdate && u.onFirstUpdate(v);
    });
    function m() {
      l.orderedModifiers.forEach(function(v) {
        var w = v.name, f = v.options, b = f === void 0 ? {} : f, _ = v.effect;
        if (typeof _ == "function") {
          var y = _({ state: l, name: w, instance: g, options: b }), T = function() {
          };
          p.push(y || T);
        }
      });
    }
    function c() {
      p.forEach(function(v) {
        return v();
      }), p = [];
    }
    return g;
  };
}
Kt();
var Ai = [mr, br, gr, cr];
Kt({ defaultModifiers: Ai });
var Ri = [mr, br, gr, cr, hi, pi, Oi, Qs, vi], Fi = Kt({ defaultModifiers: Ri });
const $i = (e, t, n = {}) => {
  const r = {
    name: "updateState",
    enabled: !0,
    phase: "write",
    fn: ({ state: u }) => {
      const l = Ni(u);
      Object.assign(s.value, l);
    },
    requires: ["computeStyles"]
  }, o = C(() => {
    const { onFirstUpdate: u, placement: l, strategy: p, modifiers: h } = d(n);
    return {
      onFirstUpdate: u,
      placement: l || "bottom",
      strategy: p || "absolute",
      modifiers: [
        ...h || [],
        r,
        { name: "applyStyles", enabled: !1 }
      ]
    };
  }), a = Qr(), s = A({
    styles: {
      popper: {
        position: d(o).strategy,
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
  return j(o, (u) => {
    const l = d(a);
    l && l.setOptions(u);
  }, {
    deep: !0
  }), j([e, t], ([u, l]) => {
    i(), !(!u || !l) && (a.value = Fi(u, l, d(o)));
  }), le(() => {
    i();
  }), {
    state: C(() => {
      var u;
      return { ...((u = d(a)) == null ? void 0 : u.state) || {} };
    }),
    styles: C(() => d(s).styles),
    attributes: C(() => d(s).attributes),
    update: () => {
      var u;
      return (u = d(a)) == null ? void 0 : u.update();
    },
    forceUpdate: () => {
      var u;
      return (u = d(a)) == null ? void 0 : u.forceUpdate();
    },
    instanceRef: C(() => d(a))
  };
};
function Ni(e) {
  const t = Object.keys(e.elements), n = on(t.map((o) => [o, e.styles[o] || {}])), r = on(t.map((o) => [o, e.attributes[o]]));
  return {
    styles: n,
    attributes: r
  };
}
function Fn() {
  let e;
  const t = (r, o) => {
    n(), e = window.setTimeout(r, o);
  }, n = () => window.clearTimeout(e);
  return lt(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
const Ct = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, ji = Symbol("elIdInjection"), wr = () => rt() ? q(ji, Ct) : Ct, Mi = (e) => {
  const t = wr();
  !J && t === Ct && et("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const n = Jn();
  return C(() => d(e) || `${n.value}-id-${t.prefix}-${t.current++}`);
};
let be = [];
const $n = (e) => {
  const t = e;
  t.key === it.esc && be.forEach((n) => n(t));
}, Li = (e) => {
  ge(() => {
    be.length === 0 && document.addEventListener("keydown", $n), J && be.push(e);
  }), le(() => {
    be = be.filter((t) => t !== e), be.length === 0 && J && document.removeEventListener("keydown", $n);
  });
};
let Nn;
const Or = () => {
  const e = Jn(), t = wr(), n = C(() => `${e.value}-popper-container-${t.prefix}`), r = C(() => `#${n.value}`);
  return {
    id: n,
    selector: r
  };
}, Di = (e) => {
  const t = document.createElement("div");
  return t.id = e, document.body.appendChild(t), t;
}, ki = () => {
  const { id: e, selector: t } = Or();
  return Yr(() => {
    J && (process.env.NODE_ENV === "test" || !Nn && !document.body.querySelector(t.value)) && (Nn = Di(e.value));
  }), {
    id: e,
    selector: t
  };
}, Bi = X({
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
}), Hi = ({
  showAfter: e,
  hideAfter: t,
  autoClose: n,
  open: r,
  close: o
}) => {
  const { registerTimeout: a } = Fn(), {
    registerTimeout: s,
    cancelTimeout: i
  } = Fn();
  return {
    onOpen: (p) => {
      a(() => {
        r(p);
        const h = d(n);
        tt(h) && h > 0 && s(() => {
          o(p);
        }, h);
      }, d(e));
    },
    onClose: (p) => {
      i(), a(() => {
        o(p);
      }, d(t));
    }
  };
}, Er = Symbol("elForwardRef"), Ui = (e) => {
  we(Er, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, zi = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), jn = {
  current: 0
}, Mn = A(0), Ki = 2e3, Ln = Symbol("elZIndexContextKey"), Wi = Symbol("zIndexContextKey"), qi = (e) => {
  const t = rt() ? q(Ln, jn) : jn, n = e || (rt() ? q(Wi, void 0) : void 0), r = C(() => {
    const s = d(n);
    return tt(s) ? s : Ki;
  }), o = C(() => r.value + Mn.value), a = () => (t.current++, Mn.value = t.current, o.value);
  return !J && !q(Ln) && et("ZIndexInjection", `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`), {
    initialZIndex: r,
    currentZIndex: o,
    nextZIndex: a
  };
}, Vi = X({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), _r = (e) => Is(Vi, e), Wt = Symbol("popper"), Tr = Symbol("popperContent"), Gi = [
  "dialog",
  "grid",
  "group",
  "listbox",
  "menu",
  "navigation",
  "tooltip",
  "tree"
], Pr = X({
  role: {
    type: String,
    values: Gi,
    default: "tooltip"
  }
}), Zi = D({
  name: "ElPopper",
  inheritAttrs: !1
}), Ji = /* @__PURE__ */ D({
  ...Zi,
  props: Pr,
  setup(e, { expose: t }) {
    const n = e, r = A(), o = A(), a = A(), s = A(), i = C(() => n.role), u = {
      triggerRef: r,
      popperInstanceRef: o,
      contentRef: a,
      referenceRef: s,
      role: i
    };
    return t(u), we(Wt, u), (l, p) => se(l.$slots, "default");
  }
});
var Qi = /* @__PURE__ */ ue(Ji, [["__file", "popper.vue"]]);
const Cr = X({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), Yi = D({
  name: "ElPopperArrow",
  inheritAttrs: !1
}), Xi = /* @__PURE__ */ D({
  ...Yi,
  props: Cr,
  setup(e, { expose: t }) {
    const n = e, r = Be("popper"), { arrowOffset: o, arrowRef: a, arrowStyle: s } = q(Tr, void 0);
    return j(() => n.arrowOffset, (i) => {
      o.value = i;
    }), le(() => {
      a.value = void 0;
    }), t({
      arrowRef: a
    }), (i, u) => (Z(), ot("span", {
      ref_key: "arrowRef",
      ref: a,
      class: Yn(d(r).e("arrow")),
      style: Xr(d(s)),
      "data-popper-arrow": ""
    }, null, 6));
  }
});
var eu = /* @__PURE__ */ ue(Xi, [["__file", "arrow.vue"]]);
const Ot = "ElOnlyChild", tu = D({
  name: Ot,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var r;
    const o = q(Er), a = zi((r = o == null ? void 0 : o.setForwardRef) != null ? r : Tt);
    return () => {
      var s;
      const i = (s = t.default) == null ? void 0 : s.call(t, n);
      if (!i)
        return null;
      if (i.length > 1)
        return et(Ot, "requires exact only one valid child."), null;
      const u = Sr(i);
      return u ? Xn(eo(u, n), [[a]]) : (et(Ot, "no valid child node found"), null);
    };
  }
});
function Sr(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Gr(n))
      switch (n.type) {
        case ro:
          continue;
        case no:
        case "svg":
          return Dn(n);
        case to:
          return Sr(n.children);
        default:
          return n;
      }
    return Dn(n);
  }
  return null;
}
function Dn(e) {
  const t = Be("only-child");
  return je("span", {
    class: t.e("content")
  }, [e]);
}
const Ir = X({
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
}), nu = D({
  name: "ElPopperTrigger",
  inheritAttrs: !1
}), ru = /* @__PURE__ */ D({
  ...nu,
  props: Ir,
  setup(e, { expose: t }) {
    const n = e, { role: r, triggerRef: o } = q(Wt, void 0);
    Ui(o);
    const a = C(() => i.value ? n.id : void 0), s = C(() => {
      if (r && r.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), i = C(() => {
      if (r && r.value !== "tooltip")
        return r.value;
    }), u = C(() => i.value ? `${n.open}` : void 0);
    let l;
    return ge(() => {
      j(() => n.virtualRef, (p) => {
        p && (o.value = ne(p));
      }, {
        immediate: !0
      }), j(o, (p, h) => {
        l == null || l(), l = void 0, nt(p) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((g) => {
          var m;
          const c = n[g];
          c && (p.addEventListener(g.slice(2).toLowerCase(), c), (m = h == null ? void 0 : h.removeEventListener) == null || m.call(h, g.slice(2).toLowerCase(), c));
        }), l = j([a, s, i, u], (g) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((m, c) => {
            St(g[c]) ? p.removeAttribute(m) : p.setAttribute(m, g[c]);
          });
        }, { immediate: !0 })), nt(h) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((g) => h.removeAttribute(g));
      }, {
        immediate: !0
      });
    }), le(() => {
      l == null || l(), l = void 0;
    }), t({
      triggerRef: o
    }), (p, h) => p.virtualTriggering ? Me("v-if", !0) : (Z(), Oe(d(tu), It({ key: 0 }, p.$attrs, {
      "aria-controls": d(a),
      "aria-describedby": d(s),
      "aria-expanded": d(u),
      "aria-haspopup": d(i)
    }), {
      default: ae(() => [
        se(p.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var ou = /* @__PURE__ */ ue(ru, [["__file", "trigger.vue"]]);
const Et = "focus-trap.focus-after-trapped", _t = "focus-trap.focus-after-released", au = "focus-trap.focusout-prevented", kn = {
  cancelable: !0,
  bubbles: !1
}, su = {
  cancelable: !0,
  bubbles: !1
}, Bn = "focusAfterTrapped", Hn = "focusAfterReleased", iu = Symbol("elFocusTrap"), qt = A(), gt = A(0), Vt = A(0);
let Je = 0;
const xr = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 || r === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Un = (e, t) => {
  for (const n of e)
    if (!uu(n, t))
      return n;
}, uu = (e, t) => {
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
}, lu = (e) => {
  const t = xr(e), n = Un(t, e), r = Un(t.reverse(), e);
  return [n, r];
}, cu = (e) => e instanceof HTMLInputElement && "select" in e, oe = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), Vt.value = window.performance.now(), e !== n && cu(e) && t && e.select();
  }
};
function zn(e, t) {
  const n = [...e], r = e.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
const fu = () => {
  let e = [];
  return {
    push: (r) => {
      const o = e[0];
      o && r !== o && o.pause(), e = zn(e, r), e.unshift(r);
    },
    remove: (r) => {
      var o, a;
      e = zn(e, r), (a = (o = e[0]) == null ? void 0 : o.resume) == null || a.call(o);
    }
  };
}, pu = (e, t = !1) => {
  const n = document.activeElement;
  for (const r of e)
    if (oe(r, t), document.activeElement !== n)
      return;
}, Kn = fu(), du = () => gt.value > Vt.value, Qe = () => {
  qt.value = "pointer", gt.value = window.performance.now();
}, Wn = () => {
  qt.value = "keyboard", gt.value = window.performance.now();
}, vu = () => (ge(() => {
  Je === 0 && (document.addEventListener("mousedown", Qe), document.addEventListener("touchstart", Qe), document.addEventListener("keydown", Wn)), Je++;
}), le(() => {
  Je--, Je <= 0 && (document.removeEventListener("mousedown", Qe), document.removeEventListener("touchstart", Qe), document.removeEventListener("keydown", Wn));
}), {
  focusReason: qt,
  lastUserFocusTimestamp: gt,
  lastAutomatedFocusTimestamp: Vt
}), Ye = (e) => new CustomEvent(au, {
  ...su,
  detail: e
}), gu = D({
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
    Bn,
    Hn,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = A();
    let r, o;
    const { focusReason: a } = vu();
    Li((c) => {
      e.trapped && !s.paused && t("release-requested", c);
    });
    const s = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (c) => {
      if (!e.loop && !e.trapped || s.paused)
        return;
      const { key: v, altKey: w, ctrlKey: f, metaKey: b, currentTarget: _, shiftKey: y } = c, { loop: T } = e, S = v === it.tab && !w && !f && !b, E = document.activeElement;
      if (S && E) {
        const P = _, [R, I] = lu(P);
        if (R && I) {
          if (!y && E === I) {
            const x = Ye({
              focusReason: a.value
            });
            t("focusout-prevented", x), x.defaultPrevented || (c.preventDefault(), T && oe(R, !0));
          } else if (y && [R, P].includes(E)) {
            const x = Ye({
              focusReason: a.value
            });
            t("focusout-prevented", x), x.defaultPrevented || (c.preventDefault(), T && oe(I, !0));
          }
        } else if (E === P) {
          const x = Ye({
            focusReason: a.value
          });
          t("focusout-prevented", x), x.defaultPrevented || c.preventDefault();
        }
      }
    };
    we(iu, {
      focusTrapRef: n,
      onKeydown: i
    }), j(() => e.focusTrapEl, (c) => {
      c && (n.value = c);
    }, { immediate: !0 }), j([n], ([c], [v]) => {
      c && (c.addEventListener("keydown", i), c.addEventListener("focusin", p), c.addEventListener("focusout", h)), v && (v.removeEventListener("keydown", i), v.removeEventListener("focusin", p), v.removeEventListener("focusout", h));
    });
    const u = (c) => {
      t(Bn, c);
    }, l = (c) => t(Hn, c), p = (c) => {
      const v = d(n);
      if (!v)
        return;
      const w = c.target, f = c.relatedTarget, b = w && v.contains(w);
      e.trapped || f && v.contains(f) || (r = f), b && t("focusin", c), !s.paused && e.trapped && (b ? o = w : oe(o, !0));
    }, h = (c) => {
      const v = d(n);
      if (!(s.paused || !v))
        if (e.trapped) {
          const w = c.relatedTarget;
          !St(w) && !v.contains(w) && setTimeout(() => {
            if (!s.paused && e.trapped) {
              const f = Ye({
                focusReason: a.value
              });
              t("focusout-prevented", f), f.defaultPrevented || oe(o, !0);
            }
          }, 0);
        } else {
          const w = c.target;
          w && v.contains(w) || t("focusout", c);
        }
    };
    async function g() {
      await sn();
      const c = d(n);
      if (c) {
        Kn.push(s);
        const v = c.contains(document.activeElement) ? r : document.activeElement;
        if (r = v, !c.contains(v)) {
          const f = new Event(Et, kn);
          c.addEventListener(Et, u), c.dispatchEvent(f), f.defaultPrevented || sn(() => {
            let b = e.focusStartEl;
            Zr(b) || (oe(b), document.activeElement !== b && (b = "first")), b === "first" && pu(xr(c), !0), (document.activeElement === v || b === "container") && oe(c);
          });
        }
      }
    }
    function m() {
      const c = d(n);
      if (c) {
        c.removeEventListener(Et, u);
        const v = new CustomEvent(_t, {
          ...kn,
          detail: {
            focusReason: a.value
          }
        });
        c.addEventListener(_t, l), c.dispatchEvent(v), !v.defaultPrevented && (a.value == "keyboard" || !du() || c.contains(document.activeElement)) && oe(r ?? document.body), c.removeEventListener(_t, l), Kn.remove(s);
      }
    }
    return ge(() => {
      e.trapped && g(), j(() => e.trapped, (c) => {
        c ? g() : m();
      });
    }), le(() => {
      e.trapped && m();
    }), {
      onKeydown: i
    };
  }
});
function mu(e, t, n, r, o, a) {
  return se(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var hu = /* @__PURE__ */ ue(gu, [["render", mu], ["__file", "focus-trap.vue"]]);
const yu = ["fixed", "absolute"], bu = X({
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
    values: Lt,
    default: "bottom"
  },
  popperOptions: {
    type: N(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: yu,
    default: "absolute"
  }
}), Ar = X({
  ...bu,
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
  ..._r(["ariaLabel"])
}), wu = {
  mouseenter: (e) => e instanceof MouseEvent,
  mouseleave: (e) => e instanceof MouseEvent,
  focus: () => !0,
  blur: () => !0,
  close: () => !0
}, Ou = (e, t = []) => {
  const { placement: n, strategy: r, popperOptions: o } = e, a = {
    placement: n,
    strategy: r,
    ...o,
    modifiers: [..._u(e), ...t]
  };
  return Tu(a, o == null ? void 0 : o.modifiers), a;
}, Eu = (e) => {
  if (J)
    return ne(e);
};
function _u(e) {
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
function Tu(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t ?? []]);
}
const Pu = 0, Cu = (e) => {
  const { popperInstanceRef: t, contentRef: n, triggerRef: r, role: o } = q(Wt, void 0), a = A(), s = A(), i = C(() => ({
    name: "eventListeners",
    enabled: !!e.visible
  })), u = C(() => {
    var f;
    const b = d(a), _ = (f = d(s)) != null ? f : Pu;
    return {
      name: "arrow",
      enabled: !_s(b),
      options: {
        element: b,
        padding: _
      }
    };
  }), l = C(() => ({
    onFirstUpdate: () => {
      c();
    },
    ...Ou(e, [
      d(u),
      d(i)
    ])
  })), p = C(() => Eu(e.referenceEl) || d(r)), { attributes: h, state: g, styles: m, update: c, forceUpdate: v, instanceRef: w } = $i(p, n, l);
  return j(w, (f) => t.value = f), ge(() => {
    j(() => {
      var f;
      return (f = d(p)) == null ? void 0 : f.getBoundingClientRect();
    }, () => {
      c();
    });
  }), {
    attributes: h,
    arrowRef: a,
    contentRef: n,
    instanceRef: w,
    state: g,
    styles: m,
    role: o,
    forceUpdate: v,
    update: c
  };
}, Su = (e, {
  attributes: t,
  styles: n,
  role: r
}) => {
  const { nextZIndex: o } = qi(), a = Be("popper"), s = C(() => d(t).popper), i = A(tt(e.zIndex) ? e.zIndex : o()), u = C(() => [
    a.b(),
    a.is("pure", e.pure),
    a.is(e.effect),
    e.popperClass
  ]), l = C(() => [
    { zIndex: d(i) },
    d(n).popper,
    e.popperStyle || {}
  ]), p = C(() => r.value === "dialog" ? "false" : void 0), h = C(() => d(n).arrow || {});
  return {
    ariaModal: p,
    arrowStyle: h,
    contentAttrs: s,
    contentClass: u,
    contentStyle: l,
    contentZIndex: i,
    updateZIndex: () => {
      i.value = tt(e.zIndex) ? e.zIndex : o();
    }
  };
}, Iu = (e, t) => {
  const n = A(!1), r = A();
  return {
    focusStartRef: r,
    trapped: n,
    onFocusAfterReleased: (l) => {
      var p;
      ((p = l.detail) == null ? void 0 : p.focusReason) !== "pointer" && (r.value = "first", t("blur"));
    },
    onFocusAfterTrapped: () => {
      t("focus");
    },
    onFocusInTrap: (l) => {
      e.visible && !n.value && (l.target && (r.value = l.target), n.value = !0);
    },
    onFocusoutPrevented: (l) => {
      e.trapping || (l.detail.focusReason === "pointer" && l.preventDefault(), n.value = !1);
    },
    onReleaseRequested: () => {
      n.value = !1, t("close");
    }
  };
}, xu = D({
  name: "ElPopperContent"
}), Au = /* @__PURE__ */ D({
  ...xu,
  props: Ar,
  emits: wu,
  setup(e, { expose: t, emit: n }) {
    const r = e, {
      focusStartRef: o,
      trapped: a,
      onFocusAfterReleased: s,
      onFocusAfterTrapped: i,
      onFocusInTrap: u,
      onFocusoutPrevented: l,
      onReleaseRequested: p
    } = Iu(r, n), { attributes: h, arrowRef: g, contentRef: m, styles: c, instanceRef: v, role: w, update: f } = Cu(r), {
      ariaModal: b,
      arrowStyle: _,
      contentAttrs: y,
      contentClass: T,
      contentStyle: S,
      updateZIndex: E
    } = Su(r, {
      styles: c,
      attributes: h,
      role: w
    }), P = q(an, void 0), R = A();
    we(Tr, {
      arrowStyle: _,
      arrowRef: g,
      arrowOffset: R
    }), P && we(an, {
      ...P,
      addInputId: Tt,
      removeInputId: Tt
    });
    let I;
    const F = ($ = !0) => {
      f(), $ && E();
    }, x = () => {
      F(!1), r.visible && r.focusOnShow ? a.value = !0 : r.visible === !1 && (a.value = !1);
    };
    return ge(() => {
      j(() => r.triggerTargetEl, ($, k) => {
        I == null || I(), I = void 0;
        const L = d($ || m.value), M = d(k || m.value);
        nt(L) && (I = j([w, () => r.ariaLabel, b, () => r.id], (O) => {
          ["role", "aria-label", "aria-modal", "id"].forEach((B, G) => {
            St(O[G]) ? L.removeAttribute(B) : L.setAttribute(B, O[G]);
          });
        }, { immediate: !0 })), M !== L && nt(M) && ["role", "aria-label", "aria-modal", "id"].forEach((O) => {
          M.removeAttribute(O);
        });
      }, { immediate: !0 }), j(() => r.visible, x, { immediate: !0 });
    }), le(() => {
      I == null || I(), I = void 0;
    }), t({
      popperContentRef: m,
      popperInstanceRef: v,
      updatePopper: F,
      contentStyle: S
    }), ($, k) => (Z(), ot("div", It({
      ref_key: "contentRef",
      ref: m
    }, d(y), {
      style: d(S),
      class: d(T),
      tabindex: "-1",
      onMouseenter: k[0] || (k[0] = (L) => $.$emit("mouseenter", L)),
      onMouseleave: k[1] || (k[1] = (L) => $.$emit("mouseleave", L))
    }), [
      je(d(hu), {
        trapped: d(a),
        "trap-on-focus-in": !0,
        "focus-trap-el": d(m),
        "focus-start-el": d(o),
        onFocusAfterTrapped: d(i),
        onFocusAfterReleased: d(s),
        onFocusin: d(u),
        onFocusoutPrevented: d(l),
        onReleaseRequested: d(p)
      }, {
        default: ae(() => [
          se($.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
    ], 16));
  }
});
var Ru = /* @__PURE__ */ ue(Au, [["__file", "content.vue"]]);
const Fu = Qn(Qi), Gt = Symbol("elTooltip"), Rr = X({
  ...Bi,
  ...Ar,
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
  ..._r(["ariaLabel"])
}), Fr = X({
  ...Ir,
  disabled: Boolean,
  trigger: {
    type: N([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: N(Array),
    default: () => [it.enter, it.space]
  }
}), {
  useModelToggleProps: $u,
  useModelToggleEmits: Nu,
  useModelToggle: ju
} = ur("visible"), Mu = X({
  ...Pr,
  ...$u,
  ...Rr,
  ...Fr,
  ...Cr,
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Lu = [
  ...Nu,
  "before-show",
  "before-hide",
  "show",
  "hide",
  "open",
  "close"
], Du = (e, t) => Jr(e) ? e.includes(t) : e === t, ye = (e, t, n) => (r) => {
  Du(d(e), t) && n(r);
}, ku = D({
  name: "ElTooltipTrigger"
}), Bu = /* @__PURE__ */ D({
  ...ku,
  props: Fr,
  setup(e, { expose: t }) {
    const n = e, r = Be("tooltip"), { controlled: o, id: a, open: s, onOpen: i, onClose: u, onToggle: l } = q(Gt, void 0), p = A(null), h = () => {
      if (d(o) || n.disabled)
        return !0;
    }, g = Fe(n, "trigger"), m = te(h, ye(g, "hover", i)), c = te(h, ye(g, "hover", u)), v = te(h, ye(g, "click", (y) => {
      y.button === 0 && l(y);
    })), w = te(h, ye(g, "focus", i)), f = te(h, ye(g, "focus", u)), b = te(h, ye(g, "contextmenu", (y) => {
      y.preventDefault(), l(y);
    })), _ = te(h, (y) => {
      const { code: T } = y;
      n.triggerKeys.includes(T) && (y.preventDefault(), l(y));
    });
    return t({
      triggerRef: p
    }), (y, T) => (Z(), Oe(d(ou), {
      id: d(a),
      "virtual-ref": y.virtualRef,
      open: d(s),
      "virtual-triggering": y.virtualTriggering,
      class: Yn(d(r).e("trigger")),
      onBlur: d(f),
      onClick: d(v),
      onContextmenu: d(b),
      onFocus: d(w),
      onMouseenter: d(m),
      onMouseleave: d(c),
      onKeydown: d(_)
    }, {
      default: ae(() => [
        se(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]));
  }
});
var Hu = /* @__PURE__ */ ue(Bu, [["__file", "trigger.vue"]]);
const Uu = D({
  name: "ElTooltipContent",
  inheritAttrs: !1
}), zu = /* @__PURE__ */ D({
  ...Uu,
  props: Rr,
  setup(e, { expose: t }) {
    const n = e, { selector: r } = Or(), o = Be("tooltip"), a = A(null), s = A(!1), {
      controlled: i,
      id: u,
      open: l,
      trigger: p,
      onClose: h,
      onOpen: g,
      onShow: m,
      onHide: c,
      onBeforeShow: v,
      onBeforeHide: w
    } = q(Gt, void 0), f = C(() => n.transition || `${o.namespace.value}-fade-in-linear`), b = C(() => process.env.NODE_ENV === "test" ? !0 : n.persistent);
    le(() => {
      s.value = !0;
    });
    const _ = C(() => d(b) ? !0 : d(l)), y = C(() => n.disabled ? !1 : d(l)), T = C(() => n.appendTo || r.value), S = C(() => {
      var O;
      return (O = n.style) != null ? O : {};
    }), E = C(() => !d(l)), P = () => {
      c();
    }, R = () => {
      if (d(i))
        return !0;
    }, I = te(R, () => {
      n.enterable && d(p) === "hover" && g();
    }), F = te(R, () => {
      d(p) === "hover" && h();
    }), x = () => {
      var O, B;
      (B = (O = a.value) == null ? void 0 : O.updatePopper) == null || B.call(O), v == null || v();
    }, $ = () => {
      w == null || w();
    }, k = () => {
      m(), M = co(C(() => {
        var O;
        return (O = a.value) == null ? void 0 : O.popperContentRef;
      }), () => {
        if (d(i))
          return;
        d(p) !== "hover" && h();
      });
    }, L = () => {
      n.virtualTriggering || h();
    };
    let M;
    return j(() => d(l), (O) => {
      O || M == null || M();
    }, {
      flush: "post"
    }), j(() => n.content, () => {
      var O, B;
      (B = (O = a.value) == null ? void 0 : O.updatePopper) == null || B.call(O);
    }), t({
      contentRef: a
    }), (O, B) => (Z(), Oe(oo, {
      disabled: !O.teleported,
      to: d(T)
    }, [
      je(ao, {
        name: d(f),
        onAfterLeave: P,
        onBeforeEnter: x,
        onAfterEnter: k,
        onBeforeLeave: $
      }, {
        default: ae(() => [
          d(_) ? Xn((Z(), Oe(d(Ru), It({
            key: 0,
            id: d(u),
            ref_key: "contentRef",
            ref: a
          }, O.$attrs, {
            "aria-label": O.ariaLabel,
            "aria-hidden": d(E),
            "boundaries-padding": O.boundariesPadding,
            "fallback-placements": O.fallbackPlacements,
            "gpu-acceleration": O.gpuAcceleration,
            offset: O.offset,
            placement: O.placement,
            "popper-options": O.popperOptions,
            strategy: O.strategy,
            effect: O.effect,
            enterable: O.enterable,
            pure: O.pure,
            "popper-class": O.popperClass,
            "popper-style": [O.popperStyle, d(S)],
            "reference-el": O.referenceEl,
            "trigger-target-el": O.triggerTargetEl,
            visible: d(y),
            "z-index": O.zIndex,
            onMouseenter: d(I),
            onMouseleave: d(F),
            onBlur: L,
            onClose: d(h)
          }), {
            default: ae(() => [
              s.value ? Me("v-if", !0) : se(O.$slots, "default", { key: 0 })
            ]),
            _: 3
          }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onClose"])), [
            [so, d(y)]
          ]) : Me("v-if", !0)
        ]),
        _: 3
      }, 8, ["name"])
    ], 8, ["disabled", "to"]));
  }
});
var Ku = /* @__PURE__ */ ue(zu, [["__file", "content.vue"]]);
const Wu = ["innerHTML"], qu = { key: 1 }, Vu = D({
  name: "ElTooltip"
}), Gu = /* @__PURE__ */ D({
  ...Vu,
  props: Mu,
  emits: Lu,
  setup(e, { expose: t, emit: n }) {
    const r = e;
    ki();
    const o = Mi(), a = A(), s = A(), i = () => {
      var f;
      const b = d(a);
      b && ((f = b.popperInstanceRef) == null || f.update());
    }, u = A(!1), l = A(), { show: p, hide: h, hasUpdateHandler: g } = ju({
      indicator: u,
      toggleReason: l
    }), { onOpen: m, onClose: c } = Hi({
      showAfter: Fe(r, "showAfter"),
      hideAfter: Fe(r, "hideAfter"),
      autoClose: Fe(r, "autoClose"),
      open: p,
      close: h
    }), v = C(() => Zn(r.visible) && !g.value);
    we(Gt, {
      controlled: v,
      id: o,
      open: io(u),
      trigger: Fe(r, "trigger"),
      onOpen: (f) => {
        m(f);
      },
      onClose: (f) => {
        c(f);
      },
      onToggle: (f) => {
        d(u) ? c(f) : m(f);
      },
      onShow: () => {
        n("show", l.value);
      },
      onHide: () => {
        n("hide", l.value);
      },
      onBeforeShow: () => {
        n("before-show", l.value);
      },
      onBeforeHide: () => {
        n("before-hide", l.value);
      },
      updatePopper: i
    }), j(() => r.disabled, (f) => {
      f && u.value && (u.value = !1);
    });
    const w = (f) => {
      var b, _;
      const y = (_ = (b = s.value) == null ? void 0 : b.contentRef) == null ? void 0 : _.popperContentRef, T = (f == null ? void 0 : f.relatedTarget) || document.activeElement;
      return y && y.contains(T);
    };
    return uo(() => u.value && h()), t({
      popperRef: a,
      contentRef: s,
      isFocusInsideContent: w,
      updatePopper: i,
      onOpen: m,
      onClose: c,
      hide: h
    }), (f, b) => (Z(), Oe(d(Fu), {
      ref_key: "popperRef",
      ref: a,
      role: f.role
    }, {
      default: ae(() => [
        je(Hu, {
          disabled: f.disabled,
          trigger: f.trigger,
          "trigger-keys": f.triggerKeys,
          "virtual-ref": f.virtualRef,
          "virtual-triggering": f.virtualTriggering
        }, {
          default: ae(() => [
            f.$slots.default ? se(f.$slots, "default", { key: 0 }) : Me("v-if", !0)
          ]),
          _: 3
        }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
        je(Ku, {
          ref_key: "contentRef",
          ref: s,
          "aria-label": f.ariaLabel,
          "boundaries-padding": f.boundariesPadding,
          content: f.content,
          disabled: f.disabled,
          effect: f.effect,
          enterable: f.enterable,
          "fallback-placements": f.fallbackPlacements,
          "hide-after": f.hideAfter,
          "gpu-acceleration": f.gpuAcceleration,
          offset: f.offset,
          persistent: f.persistent,
          "popper-class": f.popperClass,
          "popper-style": f.popperStyle,
          placement: f.placement,
          "popper-options": f.popperOptions,
          pure: f.pure,
          "raw-content": f.rawContent,
          "reference-el": f.referenceEl,
          "trigger-target-el": f.triggerTargetEl,
          "show-after": f.showAfter,
          strategy: f.strategy,
          teleported: f.teleported,
          transition: f.transition,
          "virtual-triggering": f.virtualTriggering,
          "z-index": f.zIndex,
          "append-to": f.appendTo
        }, {
          default: ae(() => [
            se(f.$slots, "content", {}, () => [
              f.rawContent ? (Z(), ot("span", {
                key: 0,
                innerHTML: f.content
              }, null, 8, Wu)) : (Z(), ot("span", qu, lo(f.content), 1))
            ]),
            f.showArrow ? (Z(), Oe(d(eu), {
              key: 0,
              "arrow-offset": f.arrowOffset
            }, null, 8, ["arrow-offset"])) : Me("v-if", !0)
          ]),
          _: 3
        }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
      ]),
      _: 3
    }, 8, ["role"]));
  }
});
var Zu = /* @__PURE__ */ ue(Gu, [["__file", "tooltip.vue"]]);
const rl = Qn(Zu);
export {
  Fa as A,
  jt as B,
  tl as C,
  Es as D,
  rl as E,
  iu as F,
  Bo as G,
  bt as H,
  Yu as I,
  it as J,
  Lt as K,
  Se as L,
  Xa as M,
  Xu as N,
  ie as S,
  nl as V,
  Rr as a,
  gs as b,
  qi as c,
  Mi as d,
  _s as e,
  hu as f,
  _r as g,
  Ft as h,
  el as i,
  at as j,
  $t as k,
  Pa as l,
  Wo as m,
  Rt as n,
  At as o,
  Is as p,
  To as q,
  xt as r,
  He as s,
  sr as t,
  Fr as u,
  rr as v,
  me as w,
  ms as x,
  Jo as y,
  or as z
};
