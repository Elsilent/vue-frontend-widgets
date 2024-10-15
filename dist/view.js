import { defineComponent as _e, toRefs as Ee, ref as T, openBlock as _, createElementBlock as I, createVNode as E, unref as g, normalizeClass as K, createElementVNode as Y, toDisplayString as P, withCtx as w, Fragment as G, renderList as ye, createBlock as D, withDirectives as mr, createTextVNode as N, createCommentVNode as W, withModifiers as fn, computed as $, normalizeStyle as et, onMounted as dn, watch as De, createSlots as pn, renderSlot as tt, normalizeProps as mn, guardReactiveProps as vn, nextTick as Yt, pushScopeId as vr, popScopeId as hr, Teleport as br } from "vue";
import { _ as kt, E as gr } from "./Tooltip.vue_vue_type_style_index_0_lang-1df1b3e8.js";
import { I as ze, A as oe, C as yr } from "./Icon-53e685d0.js";
import { _ as Te } from "./_plugin-vue_export-helper-dad06003.js";
import ee from "numeral";
import { cloneObject as wr } from "./utils/clone.js";
import { D as _r, B as St, I as Cr } from "./Input-301d9b5d.js";
import { L as ot, a as Sr } from "./LineBarChart-7e6a2e7e.js";
import { I as j } from "./Info-38a17291.js";
import "./base-b0eb9adb.js";
import "./popper-2d1cdbf9.js";
import { C as Or, E as Rr, S as xr, O as Er } from "./Option-fea03504.js";
import { L as Zt } from "./Link-882cf82b.js";
import { Separator as Tr } from "./marker.js";
import { T as hn } from "./Table-22c09023.js";
import { H as We } from "./Header-37ffd1ab.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "./tag-a5bec4a1.js";
import "./index-89580093.js";
import "./index-8cf906aa.js";
import "./Scrollable-bc459f53.js";
import "./datetime-31a2b505.js";
const kr = { class: "column-hint" }, Ar = /* @__PURE__ */ _e({
  __name: "ColumnHint",
  props: {
    description: {},
    title: {},
    visible: { type: Boolean, default: void 0 },
    iconValue: { default: "circle-question" },
    iconBackend: { default: "solid" },
    iconElevation: { default: "normal" }
  },
  setup(e) {
    const t = e, { description: n, title: r, visible: a, iconValue: s, iconBackend: o } = Ee(t), u = T();
    return (b, v) => (_(), I("div", kr, [
      E(ze, {
        value: g(s),
        backend: g(o),
        elevation: b.iconElevation,
        ref_key: "iconRef",
        ref: u,
        size: "small"
      }, null, 8, ["value", "backend", "elevation"]),
      E(kt, {
        title: g(r),
        content: g(n),
        "show-arrow": !1,
        persistent: !1,
        offset: 0,
        "virtual-ref": u.value,
        trigger: "hover",
        visible: g(a),
        "virtual-triggering": "",
        width: "15rem"
      }, null, 8, ["title", "content", "virtual-ref", "visible"])
    ]));
  }
});
const Nr = /* @__PURE__ */ Te(Ar, [["__scopeId", "data-v-36cbb3a6"]]);
function bn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Fr } = Object.prototype, { getPrototypeOf: At } = Object, lt = ((e) => (t) => {
  const n = Fr.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ve = (e) => (e = e.toLowerCase(), (t) => lt(t) === e), it = (e) => (t) => typeof t === e, { isArray: Me } = Array, Ge = it("undefined");
function Pr(e) {
  return e !== null && !Ge(e) && e.constructor !== null && !Ge(e.constructor) && ue(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const gn = ve("ArrayBuffer");
function Dr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && gn(e.buffer), t;
}
const Lr = it("string"), ue = it("function"), yn = it("number"), ut = (e) => e !== null && typeof e == "object", Br = (e) => e === !0 || e === !1, nt = (e) => {
  if (lt(e) !== "object")
    return !1;
  const t = At(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ir = ve("Date"), jr = ve("File"), zr = ve("Blob"), Ur = ve("FileList"), Mr = (e) => ut(e) && ue(e.pipe), $r = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ue(e.append) && ((t = lt(e)) === "formdata" || // detect form-data instance
  t === "object" && ue(e.toString) && e.toString() === "[object FormData]"));
}, Vr = ve("URLSearchParams"), Hr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ye(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, a;
  if (typeof e != "object" && (e = [e]), Me(e))
    for (r = 0, a = e.length; r < a; r++)
      t.call(null, e[r], r, e);
  else {
    const s = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = s.length;
    let u;
    for (r = 0; r < o; r++)
      u = s[r], t.call(null, e[u], u, e);
  }
}
function wn(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, a;
  for (; r-- > 0; )
    if (a = n[r], t === a.toLowerCase())
      return a;
  return null;
}
const _n = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), Cn = (e) => !Ge(e) && e !== _n;
function Ot() {
  const { caseless: e } = Cn(this) && this || {}, t = {}, n = (r, a) => {
    const s = e && wn(t, a) || a;
    nt(t[s]) && nt(r) ? t[s] = Ot(t[s], r) : nt(r) ? t[s] = Ot({}, r) : Me(r) ? t[s] = r.slice() : t[s] = r;
  };
  for (let r = 0, a = arguments.length; r < a; r++)
    arguments[r] && Ye(arguments[r], n);
  return t;
}
const qr = (e, t, n, { allOwnKeys: r } = {}) => (Ye(t, (a, s) => {
  n && ue(a) ? e[s] = bn(a, n) : e[s] = a;
}, { allOwnKeys: r }), e), Jr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Wr = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Gr = (e, t, n, r) => {
  let a, s, o;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (a = Object.getOwnPropertyNames(e), s = a.length; s-- > 0; )
      o = a[s], (!r || r(o, e, t)) && !u[o] && (t[o] = e[o], u[o] = !0);
    e = n !== !1 && At(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Xr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Yr = (e) => {
  if (!e)
    return null;
  if (Me(e))
    return e;
  let t = e.length;
  if (!yn(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Zr = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && At(Uint8Array)), Qr = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let a;
  for (; (a = r.next()) && !a.done; ) {
    const s = a.value;
    t.call(e, s[0], s[1]);
  }
}, Kr = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, es = ve("HTMLFormElement"), ts = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, a) {
    return r.toUpperCase() + a;
  }
), Qt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ns = ve("RegExp"), Sn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Ye(n, (a, s) => {
    let o;
    (o = t(a, s, e)) !== !1 && (r[s] = o || a);
  }), Object.defineProperties(e, r);
}, rs = (e) => {
  Sn(e, (t, n) => {
    if (ue(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (ue(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ss = (e, t) => {
  const n = {}, r = (a) => {
    a.forEach((s) => {
      n[s] = !0;
    });
  };
  return Me(e) ? r(e) : r(String(e).split(t)), n;
}, as = () => {
}, os = (e, t) => (e = +e, Number.isFinite(e) ? e : t), gt = "abcdefghijklmnopqrstuvwxyz", Kt = "0123456789", On = {
  DIGIT: Kt,
  ALPHA: gt,
  ALPHA_DIGIT: gt + gt.toUpperCase() + Kt
}, ls = (e = 16, t = On.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function is(e) {
  return !!(e && ue(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const us = (e) => {
  const t = new Array(10), n = (r, a) => {
    if (ut(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[a] = r;
        const s = Me(r) ? [] : {};
        return Ye(r, (o, u) => {
          const b = n(o, a + 1);
          !Ge(b) && (s[u] = b);
        }), t[a] = void 0, s;
      }
    }
    return r;
  };
  return n(e, 0);
}, cs = ve("AsyncFunction"), fs = (e) => e && (ut(e) || ue(e)) && ue(e.then) && ue(e.catch), d = {
  isArray: Me,
  isArrayBuffer: gn,
  isBuffer: Pr,
  isFormData: $r,
  isArrayBufferView: Dr,
  isString: Lr,
  isNumber: yn,
  isBoolean: Br,
  isObject: ut,
  isPlainObject: nt,
  isUndefined: Ge,
  isDate: Ir,
  isFile: jr,
  isBlob: zr,
  isRegExp: ns,
  isFunction: ue,
  isStream: Mr,
  isURLSearchParams: Vr,
  isTypedArray: Zr,
  isFileList: Ur,
  forEach: Ye,
  merge: Ot,
  extend: qr,
  trim: Hr,
  stripBOM: Jr,
  inherits: Wr,
  toFlatObject: Gr,
  kindOf: lt,
  kindOfTest: ve,
  endsWith: Xr,
  toArray: Yr,
  forEachEntry: Qr,
  matchAll: Kr,
  isHTMLForm: es,
  hasOwnProperty: Qt,
  hasOwnProp: Qt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Sn,
  freezeMethods: rs,
  toObjectSet: ss,
  toCamelCase: ts,
  noop: as,
  toFiniteNumber: os,
  findKey: wn,
  global: _n,
  isContextDefined: Cn,
  ALPHABET: On,
  generateString: ls,
  isSpecCompliantForm: is,
  toJSONObject: us,
  isAsyncFn: cs,
  isThenable: fs
};
function B(e, t, n, r, a) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), a && (this.response = a);
}
d.inherits(B, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: d.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Rn = B.prototype, xn = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  xn[e] = { value: e };
});
Object.defineProperties(B, xn);
Object.defineProperty(Rn, "isAxiosError", { value: !0 });
B.from = (e, t, n, r, a, s) => {
  const o = Object.create(Rn);
  return d.toFlatObject(e, o, function(b) {
    return b !== Error.prototype;
  }, (u) => u !== "isAxiosError"), B.call(o, e.message, t, n, r, a), o.cause = e, o.name = e.name, s && Object.assign(o, s), o;
};
const ds = null;
function Rt(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function En(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function en(e, t, n) {
  return e ? e.concat(t).map(function(a, s) {
    return a = En(a), !n && s ? "[" + a + "]" : a;
  }).join(n ? "." : "") : t;
}
function ps(e) {
  return d.isArray(e) && !e.some(Rt);
}
const ms = d.toFlatObject(d, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ct(e, t, n) {
  if (!d.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = d.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, C) {
    return !d.isUndefined(C[h]);
  });
  const r = n.metaTokens, a = n.visitor || c, s = n.dots, o = n.indexes, b = (n.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(t);
  if (!d.isFunction(a))
    throw new TypeError("visitor must be a function");
  function v(m) {
    if (m === null)
      return "";
    if (d.isDate(m))
      return m.toISOString();
    if (!b && d.isBlob(m))
      throw new B("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(m) || d.isTypedArray(m) ? b && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function c(m, h, C) {
    let O = m;
    if (m && !C && typeof m == "object") {
      if (d.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), m = JSON.stringify(m);
      else if (d.isArray(m) && ps(m) || (d.isFileList(m) || d.endsWith(h, "[]")) && (O = d.toArray(m)))
        return h = En(h), O.forEach(function(le, Z) {
          !(d.isUndefined(le) || le === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? en([h], Z, s) : o === null ? h : h + "[]",
            v(le)
          );
        }), !1;
    }
    return Rt(m) ? !0 : (t.append(en(C, h, s), v(m)), !1);
  }
  const y = [], A = Object.assign(ms, {
    defaultVisitor: c,
    convertValue: v,
    isVisitable: Rt
  });
  function S(m, h) {
    if (!d.isUndefined(m)) {
      if (y.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      y.push(m), d.forEach(m, function(O, U) {
        (!(d.isUndefined(O) || O === null) && a.call(
          t,
          O,
          d.isString(U) ? U.trim() : U,
          h,
          A
        )) === !0 && S(O, h ? h.concat(U) : [U]);
      }), y.pop();
    }
  }
  if (!d.isObject(e))
    throw new TypeError("data must be an object");
  return S(e), t;
}
function tn(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Nt(e, t) {
  this._pairs = [], e && ct(e, this, t);
}
const Tn = Nt.prototype;
Tn.append = function(t, n) {
  this._pairs.push([t, n]);
};
Tn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, tn);
  } : tn;
  return this._pairs.map(function(a) {
    return n(a[0]) + "=" + n(a[1]);
  }, "").join("&");
};
function vs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function kn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || vs, a = n && n.serialize;
  let s;
  if (a ? s = a(t, n) : s = d.isURLSearchParams(t) ? t.toString() : new Nt(t, n).toString(r), s) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s;
  }
  return e;
}
class hs {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    d.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const nn = hs, An = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, bs = typeof URLSearchParams < "u" ? URLSearchParams : Nt, gs = typeof FormData < "u" ? FormData : null, ys = typeof Blob < "u" ? Blob : null, ws = {
  isBrowser: !0,
  classes: {
    URLSearchParams: bs,
    FormData: gs,
    Blob: ys
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Nn = typeof window < "u" && typeof document < "u", _s = ((e) => Nn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Cs = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), Ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Nn,
  hasStandardBrowserEnv: _s,
  hasStandardBrowserWebWorkerEnv: Cs
}, Symbol.toStringTag, { value: "Module" })), me = {
  ...Ss,
  ...ws
};
function Os(e, t) {
  return ct(e, new me.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, a, s) {
      return me.isNode && d.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Rs(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function xs(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const a = n.length;
  let s;
  for (r = 0; r < a; r++)
    s = n[r], t[s] = e[s];
  return t;
}
function Fn(e) {
  function t(n, r, a, s) {
    let o = n[s++];
    const u = Number.isFinite(+o), b = s >= n.length;
    return o = !o && d.isArray(a) ? a.length : o, b ? (d.hasOwnProp(a, o) ? a[o] = [a[o], r] : a[o] = r, !u) : ((!a[o] || !d.isObject(a[o])) && (a[o] = []), t(n, r, a[o], s) && d.isArray(a[o]) && (a[o] = xs(a[o])), !u);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const n = {};
    return d.forEachEntry(e, (r, a) => {
      t(Rs(r), a, n, 0);
    }), n;
  }
  return null;
}
function Es(e, t, n) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ft = {
  transitional: An,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", a = r.indexOf("application/json") > -1, s = d.isObject(t);
    if (s && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t))
      return a && a ? JSON.stringify(Fn(t)) : t;
    if (d.isArrayBuffer(t) || d.isBuffer(t) || d.isStream(t) || d.isFile(t) || d.isBlob(t))
      return t;
    if (d.isArrayBufferView(t))
      return t.buffer;
    if (d.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (s) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Os(t, this.formSerializer).toString();
      if ((u = d.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const b = this.env && this.env.FormData;
        return ct(
          u ? { "files[]": t } : t,
          b && new b(),
          this.formSerializer
        );
      }
    }
    return s || a ? (n.setContentType("application/json", !1), Es(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ft.transitional, r = n && n.forcedJSONParsing, a = this.responseType === "json";
    if (t && d.isString(t) && (r && !this.responseType || a)) {
      const o = !(n && n.silentJSONParsing) && a;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (o)
          throw u.name === "SyntaxError" ? B.from(u, B.ERR_BAD_RESPONSE, this, null, this.response) : u;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: me.classes.FormData,
    Blob: me.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
d.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ft.headers[e] = {};
});
const Pt = Ft, Ts = d.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), ks = (e) => {
  const t = {};
  let n, r, a;
  return e && e.split(`
`).forEach(function(o) {
    a = o.indexOf(":"), n = o.substring(0, a).trim().toLowerCase(), r = o.substring(a + 1).trim(), !(!n || t[n] && Ts[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, rn = Symbol("internals");
function Je(e) {
  return e && String(e).trim().toLowerCase();
}
function rt(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(rt) : String(e);
}
function As(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Ns = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function yt(e, t, n, r, a) {
  if (d.isFunction(r))
    return r.call(this, t, n);
  if (a && (t = n), !!d.isString(t)) {
    if (d.isString(r))
      return t.indexOf(r) !== -1;
    if (d.isRegExp(r))
      return r.test(t);
  }
}
function Fs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ps(e, t) {
  const n = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(a, s, o) {
        return this[r].call(this, t, a, s, o);
      },
      configurable: !0
    });
  });
}
class ft {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const a = this;
    function s(u, b, v) {
      const c = Je(b);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const y = d.findKey(a, c);
      (!y || a[y] === void 0 || v === !0 || v === void 0 && a[y] !== !1) && (a[y || b] = rt(u));
    }
    const o = (u, b) => d.forEach(u, (v, c) => s(v, c, b));
    return d.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : d.isString(t) && (t = t.trim()) && !Ns(t) ? o(ks(t), n) : t != null && s(n, t, r), this;
  }
  get(t, n) {
    if (t = Je(t), t) {
      const r = d.findKey(this, t);
      if (r) {
        const a = this[r];
        if (!n)
          return a;
        if (n === !0)
          return As(a);
        if (d.isFunction(n))
          return n.call(this, a, r);
        if (d.isRegExp(n))
          return n.exec(a);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Je(t), t) {
      const r = d.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || yt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let a = !1;
    function s(o) {
      if (o = Je(o), o) {
        const u = d.findKey(r, o);
        u && (!n || yt(r, r[u], u, n)) && (delete r[u], a = !0);
      }
    }
    return d.isArray(t) ? t.forEach(s) : s(t), a;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, a = !1;
    for (; r--; ) {
      const s = n[r];
      (!t || yt(this, this[s], s, t, !0)) && (delete this[s], a = !0);
    }
    return a;
  }
  normalize(t) {
    const n = this, r = {};
    return d.forEach(this, (a, s) => {
      const o = d.findKey(r, s);
      if (o) {
        n[o] = rt(a), delete n[s];
        return;
      }
      const u = t ? Fs(s) : String(s).trim();
      u !== s && delete n[s], n[u] = rt(a), r[u] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (r, a) => {
      r != null && r !== !1 && (n[a] = t && d.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((a) => r.set(a)), r;
  }
  static accessor(t) {
    const r = (this[rn] = this[rn] = {
      accessors: {}
    }).accessors, a = this.prototype;
    function s(o) {
      const u = Je(o);
      r[u] || (Ps(a, o), r[u] = !0);
    }
    return d.isArray(t) ? t.forEach(s) : s(t), this;
  }
}
ft.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(ft.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
d.freezeMethods(ft);
const we = ft;
function wt(e, t) {
  const n = this || Pt, r = t || n, a = we.from(r.headers);
  let s = r.data;
  return d.forEach(e, function(u) {
    s = u.call(n, s, a.normalize(), t ? t.status : void 0);
  }), a.normalize(), s;
}
function Pn(e) {
  return !!(e && e.__CANCEL__);
}
function Ze(e, t, n) {
  B.call(this, e ?? "canceled", B.ERR_CANCELED, t, n), this.name = "CanceledError";
}
d.inherits(Ze, B, {
  __CANCEL__: !0
});
function Ds(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new B(
    "Request failed with status code " + n.status,
    [B.ERR_BAD_REQUEST, B.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Ls = me.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, a, s, o, u) {
        const b = [];
        b.push(n + "=" + encodeURIComponent(r)), d.isNumber(a) && b.push("expires=" + new Date(a).toGMTString()), d.isString(s) && b.push("path=" + s), d.isString(o) && b.push("domain=" + o), u === !0 && b.push("secure"), document.cookie = b.join("; ");
      },
      read: function(n) {
        const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
        return r ? decodeURIComponent(r[3]) : null;
      },
      remove: function(n) {
        this.write(n, "", Date.now() - 864e5);
      }
    };
  }()
) : (
  // Non standard browser env (web workers, react-native) lack needed support.
  function() {
    return {
      write: function() {
      },
      read: function() {
        return null;
      },
      remove: function() {
      }
    };
  }()
);
function Bs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Is(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Dn(e, t) {
  return e && !Bs(t) ? Is(e, t) : t;
}
const js = me.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function a(s) {
      let o = s;
      return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = a(window.location.href), function(o) {
      const u = d.isString(o) ? a(o) : o;
      return u.protocol === r.protocol && u.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function() {
    return function() {
      return !0;
    };
  }()
);
function zs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Us(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let a = 0, s = 0, o;
  return t = t !== void 0 ? t : 1e3, function(b) {
    const v = Date.now(), c = r[s];
    o || (o = v), n[a] = b, r[a] = v;
    let y = s, A = 0;
    for (; y !== a; )
      A += n[y++], y = y % e;
    if (a = (a + 1) % e, a === s && (s = (s + 1) % e), v - o < t)
      return;
    const S = c && v - c;
    return S ? Math.round(A * 1e3 / S) : void 0;
  };
}
function sn(e, t) {
  let n = 0;
  const r = Us(50, 250);
  return (a) => {
    const s = a.loaded, o = a.lengthComputable ? a.total : void 0, u = s - n, b = r(u), v = s <= o;
    n = s;
    const c = {
      loaded: s,
      total: o,
      progress: o ? s / o : void 0,
      bytes: u,
      rate: b || void 0,
      estimated: b && o && v ? (o - s) / b : void 0,
      event: a
    };
    c[t ? "download" : "upload"] = !0, e(c);
  };
}
const Ms = typeof XMLHttpRequest < "u", $s = Ms && function(e) {
  return new Promise(function(n, r) {
    let a = e.data;
    const s = we.from(e.headers).normalize(), o = e.responseType;
    let u;
    function b() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let v;
    if (d.isFormData(a)) {
      if (me.hasStandardBrowserEnv || me.hasStandardBrowserWebWorkerEnv)
        s.setContentType(!1);
      else if ((v = s.getContentType()) !== !1) {
        const [m, ...h] = v ? v.split(";").map((C) => C.trim()).filter(Boolean) : [];
        s.setContentType([m || "multipart/form-data", ...h].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const m = e.auth.username || "", h = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      s.set("Authorization", "Basic " + btoa(m + ":" + h));
    }
    const y = Dn(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), kn(y, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function A() {
      if (!c)
        return;
      const m = we.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), C = {
        data: !o || o === "text" || o === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: m,
        config: e,
        request: c
      };
      Ds(function(U) {
        n(U), b();
      }, function(U) {
        r(U), b();
      }, C), c = null;
    }
    if ("onloadend" in c ? c.onloadend = A : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, c.onabort = function() {
      c && (r(new B("Request aborted", B.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new B("Network Error", B.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let h = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const C = e.transitional || An;
      e.timeoutErrorMessage && (h = e.timeoutErrorMessage), r(new B(
        h,
        C.clarifyTimeoutError ? B.ETIMEDOUT : B.ECONNABORTED,
        e,
        c
      )), c = null;
    }, me.hasStandardBrowserEnv) {
      const m = js(y) && e.xsrfCookieName && Ls.read(e.xsrfCookieName);
      m && s.set(e.xsrfHeaderName, m);
    }
    a === void 0 && s.setContentType(null), "setRequestHeader" in c && d.forEach(s.toJSON(), function(h, C) {
      c.setRequestHeader(C, h);
    }), d.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), o && o !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", sn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", sn(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (m) => {
      c && (r(!m || m.type ? new Ze(null, e, c) : m), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const S = zs(y);
    if (S && me.protocols.indexOf(S) === -1) {
      r(new B("Unsupported protocol " + S + ":", B.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(a || null);
  });
}, xt = {
  http: ds,
  xhr: $s
};
d.forEach(xt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const an = (e) => `- ${e}`, Vs = (e) => d.isFunction(e) || e === null || e === !1, Ln = {
  getAdapter: (e) => {
    e = d.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const a = {};
    for (let s = 0; s < t; s++) {
      n = e[s];
      let o;
      if (r = n, !Vs(n) && (r = xt[(o = String(n)).toLowerCase()], r === void 0))
        throw new B(`Unknown adapter '${o}'`);
      if (r)
        break;
      a[o || "#" + s] = r;
    }
    if (!r) {
      const s = Object.entries(a).map(
        ([u, b]) => `adapter ${u} ` + (b === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? s.length > 1 ? `since :
` + s.map(an).join(`
`) : " " + an(s[0]) : "as no adapter specified";
      throw new B(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: xt
};
function _t(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ze(null, e);
}
function on(e) {
  return _t(e), e.headers = we.from(e.headers), e.data = wt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ln.getAdapter(e.adapter || Pt.adapter)(e).then(function(r) {
    return _t(e), r.data = wt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = we.from(r.headers), r;
  }, function(r) {
    return Pn(r) || (_t(e), r && r.response && (r.response.data = wt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = we.from(r.response.headers))), Promise.reject(r);
  });
}
const ln = (e) => e instanceof we ? e.toJSON() : e;
function Ue(e, t) {
  t = t || {};
  const n = {};
  function r(v, c, y) {
    return d.isPlainObject(v) && d.isPlainObject(c) ? d.merge.call({ caseless: y }, v, c) : d.isPlainObject(c) ? d.merge({}, c) : d.isArray(c) ? c.slice() : c;
  }
  function a(v, c, y) {
    if (d.isUndefined(c)) {
      if (!d.isUndefined(v))
        return r(void 0, v, y);
    } else
      return r(v, c, y);
  }
  function s(v, c) {
    if (!d.isUndefined(c))
      return r(void 0, c);
  }
  function o(v, c) {
    if (d.isUndefined(c)) {
      if (!d.isUndefined(v))
        return r(void 0, v);
    } else
      return r(void 0, c);
  }
  function u(v, c, y) {
    if (y in t)
      return r(v, c);
    if (y in e)
      return r(void 0, v);
  }
  const b = {
    url: s,
    method: s,
    data: s,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: u,
    headers: (v, c) => a(ln(v), ln(c), !0)
  };
  return d.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const y = b[c] || a, A = y(e[c], t[c], c);
    d.isUndefined(A) && y !== u || (n[c] = A);
  }), n;
}
const Bn = "1.6.1", Dt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Dt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const un = {};
Dt.transitional = function(t, n, r) {
  function a(s, o) {
    return "[Axios v" + Bn + "] Transitional option '" + s + "'" + o + (r ? ". " + r : "");
  }
  return (s, o, u) => {
    if (t === !1)
      throw new B(
        a(o, " has been removed" + (n ? " in " + n : "")),
        B.ERR_DEPRECATED
      );
    return n && !un[o] && (un[o] = !0, console.warn(
      a(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(s, o, u) : !0;
  };
};
function Hs(e, t, n) {
  if (typeof e != "object")
    throw new B("options must be an object", B.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let a = r.length;
  for (; a-- > 0; ) {
    const s = r[a], o = t[s];
    if (o) {
      const u = e[s], b = u === void 0 || o(u, s, e);
      if (b !== !0)
        throw new B("option " + s + " must be " + b, B.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new B("Unknown option " + s, B.ERR_BAD_OPTION);
  }
}
const Et = {
  assertOptions: Hs,
  validators: Dt
}, xe = Et.validators;
class at {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new nn(),
      response: new nn()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ue(this.defaults, n);
    const { transitional: r, paramsSerializer: a, headers: s } = n;
    r !== void 0 && Et.assertOptions(r, {
      silentJSONParsing: xe.transitional(xe.boolean),
      forcedJSONParsing: xe.transitional(xe.boolean),
      clarifyTimeoutError: xe.transitional(xe.boolean)
    }, !1), a != null && (d.isFunction(a) ? n.paramsSerializer = {
      serialize: a
    } : Et.assertOptions(a, {
      encode: xe.function,
      serialize: xe.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = s && d.merge(
      s.common,
      s[n.method]
    );
    s && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete s[m];
      }
    ), n.headers = we.concat(o, s);
    const u = [];
    let b = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (b = b && h.synchronous, u.unshift(h.fulfilled, h.rejected));
    });
    const v = [];
    this.interceptors.response.forEach(function(h) {
      v.push(h.fulfilled, h.rejected);
    });
    let c, y = 0, A;
    if (!b) {
      const m = [on.bind(this), void 0];
      for (m.unshift.apply(m, u), m.push.apply(m, v), A = m.length, c = Promise.resolve(n); y < A; )
        c = c.then(m[y++], m[y++]);
      return c;
    }
    A = u.length;
    let S = n;
    for (y = 0; y < A; ) {
      const m = u[y++], h = u[y++];
      try {
        S = m(S);
      } catch (C) {
        h.call(this, C);
        break;
      }
    }
    try {
      c = on.call(this, S);
    } catch (m) {
      return Promise.reject(m);
    }
    for (y = 0, A = v.length; y < A; )
      c = c.then(v[y++], v[y++]);
    return c;
  }
  getUri(t) {
    t = Ue(this.defaults, t);
    const n = Dn(t.baseURL, t.url);
    return kn(n, t.params, t.paramsSerializer);
  }
}
d.forEach(["delete", "get", "head", "options"], function(t) {
  at.prototype[t] = function(n, r) {
    return this.request(Ue(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(s, o, u) {
      return this.request(Ue(u || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: s,
        data: o
      }));
    };
  }
  at.prototype[t] = n(), at.prototype[t + "Form"] = n(!0);
});
const st = at;
class Lt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(s) {
      n = s;
    });
    const r = this;
    this.promise.then((a) => {
      if (!r._listeners)
        return;
      let s = r._listeners.length;
      for (; s-- > 0; )
        r._listeners[s](a);
      r._listeners = null;
    }), this.promise.then = (a) => {
      let s;
      const o = new Promise((u) => {
        r.subscribe(u), s = u;
      }).then(a);
      return o.cancel = function() {
        r.unsubscribe(s);
      }, o;
    }, t(function(s, o, u) {
      r.reason || (r.reason = new Ze(s, o, u), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Lt(function(a) {
        t = a;
      }),
      cancel: t
    };
  }
}
const qs = Lt;
function Js(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ws(e) {
  return d.isObject(e) && e.isAxiosError === !0;
}
const Tt = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Tt).forEach(([e, t]) => {
  Tt[t] = e;
});
const Gs = Tt;
function In(e) {
  const t = new st(e), n = bn(st.prototype.request, t);
  return d.extend(n, st.prototype, t, { allOwnKeys: !0 }), d.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(a) {
    return In(Ue(e, a));
  }, n;
}
const q = In(Pt);
q.Axios = st;
q.CanceledError = Ze;
q.CancelToken = qs;
q.isCancel = Pn;
q.VERSION = Bn;
q.toFormData = ct;
q.AxiosError = B;
q.Cancel = q.CanceledError;
q.all = function(t) {
  return Promise.all(t);
};
q.spread = Js;
q.isAxiosError = Ws;
q.mergeConfig = Ue;
q.AxiosHeaders = we;
q.formToJSON = (e) => Fn(d.isHTMLForm(e) ? new FormData(e) : e);
q.getAdapter = Ln.getAdapter;
q.HttpStatusCode = Gs;
q.default = q;
const Xe = q;
ee.localeData().delimiters.thousands = " ";
ee.localeData().delimiters.decimal = ",";
function jn(e, t, n) {
  const r = {};
  for (const [a, s] of Object.entries(e))
    if (a in n)
      if ((n[a].colspan ?? 0) > 1) {
        const o = t ? t[a] : void 0;
        let u;
        o === void 0 ? u = 100 : s === 0 ? u = -100 : u = (s - o) / s * 100, r[a] = {
          original: s,
          comparison: o ?? 0,
          difference: u
        };
      } else
        r[a] = s;
  return r;
}
function Xs(e, t, n, r) {
  const a = {};
  for (const s of Object.values(e)) {
    const o = s[r], u = Object.values(t).find(
      (b) => b[r] === o
    );
    a[o] = jn(s, u, n);
  }
  return a;
}
const Ys = { class: "label" }, Zs = {
  important: "",
  size: "small"
}, Qs = { size: "small" }, Ks = /* @__PURE__ */ _e({
  __name: "CellHint",
  props: {
    format: {},
    label: {},
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { format: n, label: r, title: a, url: s } = Ee(t), o = T(), u = T(!1), b = T(), v = (m) => m.map(({ name: h, valueFormatted: C }) => ({
      label: h,
      value: C
    })), c = (m) => m.map(({ name: h, rate: C, value: O }) => ({
      label: h,
      value: `${ee(O).format("0,0")} (${ee(C).format("0,0.00")}%)`
    })), y = (m) => {
      switch (n.value) {
        case "distribution":
          return v(m);
        case "rated_distribution":
          return c(m);
        default:
          throw new Error(`Unsupported format: ${n.value}`);
      }
    }, A = async () => {
      if (o.value)
        return;
      const m = (await Xe(s.value)).data;
      o.value = y(m);
    }, S = async () => {
      u.value = !0, await A();
    };
    return (m, h) => {
      var C;
      return _(), I("div", {
        class: K(["cell-hint", { visible: u.value }]),
        ref_key: "root",
        ref: b,
        onMouseover: S,
        onMouseleave: h[0] || (h[0] = (O) => u.value = !1)
      }, [
        Y("span", Ys, P(g(r)), 1),
        E(kt, {
          title: g(a),
          "show-arrow": !1,
          persistent: !1,
          offset: 0,
          "virtual-triggering": "",
          visible: u.value,
          "virtual-ref": (C = b.value) == null ? void 0 : C.closest(".cell"),
          width: "15rem",
          "popper-class": "cell-hint-popover"
        }, {
          default: w(() => [
            o.value ? (_(!0), I(G, { key: 0 }, ye(o.value, ({ label: O, value: U }, le) => (_(), I("div", {
              key: `line-${le}`
            }, [
              Y("b", Zs, P(O) + ": ", 1),
              Y("span", Qs, P(U), 1)
            ]))), 128)) : (_(), D(ot, { key: 1 }))
          ]),
          _: 1
        }, 8, ["title", "visible", "virtual-ref"])
      ], 34);
    };
  }
});
const cn = /* @__PURE__ */ Te(Ks, [["__scopeId", "data-v-23cadab0"]]), ea = /* @__PURE__ */ _e({
  __name: "DetailsSelector",
  props: {
    labels: {},
    open: { type: Boolean, default: !1 },
    title: {}
  },
  emits: ["hideDetails", "showDetails"],
  setup(e, { emit: t }) {
    const n = e, { labels: r, open: a, title: s } = Ee(n), o = T(!1), u = T(), b = () => {
      if (a.value) {
        t("hideDetails");
        return;
      }
      o.value = !o.value;
    }, v = (y) => {
      if (o.value = !1, a.value) {
        t("hideDetails");
        return;
      }
      t("showDetails", y);
    }, c = () => {
      o.value = !1;
    };
    return (y, A) => (_(), I("div", {
      class: "details-selector-container",
      onClick: b
    }, [
      E(g(gr), {
        "show-arrow": !1,
        "popper-class": "details-selector-popover",
        teleported: !1,
        persistent: !1,
        visible: o.value,
        "hide-after": 0,
        offset: 0,
        ref_key: "popover",
        ref: u
      }, {
        reference: w(() => [
          mr((_(), D(oe, {
            class: "details-selector",
            vertical: "center"
          }, {
            default: w(() => [
              g(s) ? (_(), D(j, {
                key: 0,
                mood: "important-alt",
                size: "small"
              }, {
                default: w(() => [
                  N(P(g(s)), 1)
                ]),
                _: 1
              })) : W("", !0),
              E(ze, {
                value: g(a) ? "chevron-up" : "chevron-down",
                mood: "important-alt",
                size: "small-2"
              }, null, 8, ["value"])
            ]),
            _: 1
          })), [
            [g(Or), c]
          ])
        ]),
        default: w(() => [
          (_(!0), I(G, null, ye(g(r), (S, m) => (_(), D(j, {
            class: "dropdown-item",
            onClick: fn(() => v(m), ["stop"]),
            contrast: ""
          }, {
            default: w(() => [
              N(P(S), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 256))
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const ta = /* @__PURE__ */ _e({
  __name: "InputWithSelect",
  props: ["value", "select", "items", "width"],
  emits: ["update:value", "update:select"],
  setup(e) {
    const t = e, n = T(t.value), r = T(t.select), a = $(() => t.width === "small" ? 50 : 100);
    return (s, o) => (_(), D(g(Rr), {
      modelValue: n.value,
      "onUpdate:modelValue": o[2] || (o[2] = (u) => n.value = u),
      onChange: o[3] || (o[3] = (u) => s.$emit("update:value", { value: u, operator: r.value })),
      placeholder: "",
      class: "input-with-select",
      size: "default",
      min: "0",
      style: et({ minWidth: `${80 + a.value}px` })
    }, {
      prepend: w(() => [
        E(xr, {
          modelValue: r.value,
          "onUpdate:modelValue": o[0] || (o[0] = (u) => r.value = u),
          onChange: o[1] || (o[1] = (u) => s.$emit("update:select", { operator: u, value: n.value })),
          style: et(`width: ${a.value}px`),
          size: "default"
        }, {
          default: w(() => [
            (_(!0), I(G, null, ye(e.items, (u, b) => (_(), D(Er, {
              key: b,
              value: b,
              label: u,
              size: "default",
              style: et({ textAlign: e.width === "small" ? "center" : "left" })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style"])
      ]),
      _: 1
    }, 8, ["modelValue", "style"]));
  }
});
const na = /* @__PURE__ */ Te(ta, [["__scopeId", "data-v-e2be7f01"]]), ra = { class: "pagination" }, sa = /* @__PURE__ */ _e({
  __name: "Pagination",
  props: {
    currentPageSize: {},
    id: { default: "pagination" },
    pageNumber: {},
    pageRadius: { default: 3 },
    pageSizeLabel: {},
    pageSizes: { default: () => [20, 50, 100, 500] },
    rowCount: {}
  },
  emits: ["update:currentPageSize", "update:pageNumber"],
  setup(e, { emit: t }) {
    const n = e, { currentPageSize: r, id: a, pageNumber: s, pageRadius: o, pageSizeLabel: u, pageSizes: b, rowCount: v } = Ee(n), c = $(() => Math.min(...b.value)), y = $(() => Math.ceil(v.value / r.value)), A = $(
      () => b.value.reduce((h, C) => (h[C] = C.toString(), h), {})
    ), S = $(() => {
      const h = [];
      for (let C = o.value - 1; C > 0; C--)
        s.value > C && h.push(s.value - C);
      h.push(s.value);
      for (let C = 1; C < o.value; C++)
        s.value < y.value - C - 1 && h.push(s.value + C);
      return h;
    }), m = (h) => {
      r.value !== h && t("update:currentPageSize", h);
    };
    return (h, C) => (_(), I("div", ra, [
      g(v) > g(r) ? (_(), I(G, { key: 0 }, [
        g(s) > 0 ? (_(), D(j, {
          key: 0,
          class: "page",
          onClick: C[0] || (C[0] = () => t("update:pageNumber", 0)),
          mood: "important-alt"
        }, {
          default: w(() => [
            N("1")
          ]),
          _: 1
        })) : W("", !0),
        g(s) > g(o) ? (_(), D(j, {
          key: 1,
          class: "page-separator"
        }, {
          default: w(() => [
            N("…")
          ]),
          _: 1
        })) : W("", !0),
        (_(!0), I(G, null, ye(S.value, (O) => (_(), D(j, {
          class: K(["page", { current: O === g(s) }]),
          onClick: () => t("update:pageNumber", O),
          key: O
        }, {
          default: w(() => [
            N(P(O + 1), 1)
          ]),
          _: 2
        }, 1032, ["onClick", "class"]))), 128)),
        g(s) < y.value - g(o) - 1 ? (_(), D(j, {
          key: 2,
          class: "page-separator"
        }, {
          default: w(() => [
            N("…")
          ]),
          _: 1
        })) : W("", !0),
        g(s) < y.value - 1 ? (_(), D(j, {
          key: 3,
          class: "page",
          onClick: C[1] || (C[1] = () => t("update:pageNumber", y.value - 1)),
          mood: "important-alt"
        }, {
          default: w(() => [
            N(P(y.value), 1)
          ]),
          _: 1
        })) : W("", !0),
        E(j, { class: "page-size-label" }, {
          default: w(() => [
            N(P(g(u)), 1)
          ]),
          _: 1
        })
      ], 64)) : W("", !0),
      g(v) > c.value ? (_(), D(_r, {
        key: 1,
        class: "page-size-selector no-spacing",
        "onUpdate:modelValue": C[2] || (C[2] = (O) => m(parseInt(O.toString()))),
        id: g(a),
        items: A.value,
        modelValue: g(r)
      }, {
        item: w(({ item: O }) => [
          N(P(O), 1)
        ]),
        _: 1
      }, 8, ["id", "items", "modelValue"])) : W("", !0)
    ]));
  }
});
const aa = /* @__PURE__ */ Te(sa, [["__scopeId", "data-v-c7e19feb"]]), oa = { class: "trend-chart-container" }, la = { class: "trend-chart-content" }, ia = /* @__PURE__ */ _e({
  __name: "TrendChart",
  props: {
    formatter: { type: Function },
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { formatter: n, title: r, url: a } = Ee(t), s = T(), o = T([]), u = T(), b = $(() => u.value ? Object.assign({}, u.value) : {}), v = $(() => {
      var h;
      switch ((h = u.value) == null ? void 0 : h.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return u.value[0];
        default:
          return u.value.slice(u.value.length / 2).reduce((C, O) => C + O, 0) / Math.ceil(u.value.length / 2);
      }
    }), c = $(() => {
      var h;
      switch ((h = u.value) == null ? void 0 : h.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return u.value[0];
        default:
          return u.value.slice(0, u.value.length / 2).reduce((C, O) => C + O, 0) / Math.floor(u.value.length / 2);
      }
    }), y = $(() => c.value > v.value ? "negative" : c.value < v.value ? "positive" : "neutral"), A = $(() => {
      if (!u.value)
        return {};
      const h = new Array(u.value.length).fill(0).map(
        (C, O) => c.value + (v.value - c.value) * O / (u.value.length - 1)
      );
      return Object.assign({}, h);
    }), S = async () => {
      if (u.value)
        return;
      const h = (await Xe({ url: a.value })).data;
      o.value = Object.keys(h), u.value = Object.values(h);
    }, m = async () => {
      await S();
    };
    return (h, C) => (_(), I("div", oa, [
      Y("i", {
        class: "la la-eye secondary",
        ref_key: "iconRef",
        ref: s
      }, null, 512),
      E(kt, {
        width: "500",
        trigger: "click",
        persistent: !1,
        "show-arrow": !1,
        "popper-class": "trend-chart-popover",
        "virtual-ref": s.value,
        "virtual-triggering": "",
        "append-to": ".app-container",
        "popper-options": { modifiers: [{ name: "eventListeners", options: { scroll: !1 } }], strategy: "fixed" },
        onShow: m
      }, {
        default: w(() => [
          g(r) ? (_(), D(We, {
            key: 0,
            size: "large-2"
          }, {
            default: w(() => [
              N(P(g(r)), 1)
            ]),
            _: 1
          })) : W("", !0),
          Y("div", la, [
            u.value ? (_(), D(Sr, {
              key: 0,
              activeLines: ["values"],
              formatters: { trend: g(n), values: g(n) },
              moods: { trend: { mood: y.value }, values: { mood: "important" } },
              styles: { trend: "line", values: "line" },
              values: { trend: A.value, values: b.value },
              "no-x-axis-labels": !0
            }, null, 8, ["formatters", "moods", "values"])) : (_(), D(ot, { key: 1 }))
          ])
        ]),
        _: 1
      }, 8, ["virtual-ref"])
    ]));
  }
});
const ua = /* @__PURE__ */ Te(ia, [["__scopeId", "data-v-c57a26a4"]]), ca = { class: "common-table" }, fa = {
  key: 0,
  class: "controls"
}, da = ["onMouseover", "onMouseleave"], pa = ["onClick"], Ct = 50, ma = /* @__PURE__ */ _e({
  __name: "CommonTable",
  props: {
    cellClasses: { default: () => ({}) },
    clientCurrencyDecimal: { default: 0 },
    clientCurrencySymbol: { default: "" },
    clientCurrencySymbolPrefix: { type: Boolean, default: !0 },
    colorMetrics: { type: Boolean, default: !1 },
    colorizeLabel: {},
    columns: {},
    columnDetails: { default: () => ({}) },
    columnLinks: { default: () => ({}) },
    comparisonColumns: {},
    comparisonRequest: {},
    defaultOrderBy: {},
    detailsColumn: {},
    detailsRequests: {},
    detailsSelectorTitle: {},
    dragColumns: { type: Boolean, default: !1 },
    fixedColumnNumber: { default: 1 },
    inlineFilterOperators: { default: () => ({}) },
    inversedKpis: {},
    pageSizeLabel: {},
    primaryColumn: { default: "id" },
    primaryColumnAlias: {},
    request: {},
    rows: {},
    shortenColumns: {},
    showInlineFilters: { type: Boolean, default: !1 },
    showRowNumber: { type: Boolean, default: !0 },
    showPagination: { type: Boolean, default: !0 },
    showTopTotal: { type: Boolean, default: !1 },
    total: {},
    totalTitle: {},
    totalColumnKey: {},
    trendChartTitle: {},
    trendUrl: {},
    uncolorizeLabel: {},
    noDataMessage: {}
  },
  emits: ["move:column", "update:loading", "update:orderBy"],
  setup(e, { emit: t }) {
    const n = e, r = async (l, i) => typeof l == "function" ? await l(i) : (await Xe({
      ...l,
      params: {
        ...l.params,
        [i.primaryColumn]: i.primaryColumnValue
      }
    })).data, a = async (l, i) => typeof l == "function" ? await l(i) : (await Xe({
      ...l,
      params: {
        ...l.params ?? {},
        filter: i.inlineFilters ? Object.fromEntries(
          Object.entries(i.inlineFilters).filter(([f, p]) => p.value !== "")
        ) : void 0,
        page_number: i.pageNumber,
        page_size: i.pageSize,
        order: i.orderBy,
        reversed: i.reversed
      }
    })).data, {
      cellClasses: s,
      clientCurrencyDecimal: o,
      clientCurrencySymbol: u,
      clientCurrencySymbolPrefix: b,
      colorMetrics: v,
      columns: c,
      columnDetails: y,
      columnLinks: A,
      comparisonColumns: S,
      comparisonRequest: m,
      defaultOrderBy: h,
      detailsColumn: C,
      detailsRequests: O,
      dragColumns: U,
      fixedColumnNumber: le,
      inlineFilterOperators: Z,
      inversedKpis: ce,
      primaryColumn: V,
      primaryColumnAlias: pe,
      request: J,
      rows: Ce,
      shortenColumns: Q,
      showInlineFilters: z,
      showRowNumber: ie,
      showPagination: te,
      showTopTotal: M,
      total: X,
      totalColumnKey: fe,
      trendUrl: Se,
      noDataMessage: Le
    } = Ee(n), he = () => {
      const l = {};
      for (const i of Object.keys(c.value))
        i in Z.value && (l[i] = {
          operator: Object.keys(Z.value[i])[0],
          value: ""
        });
      return l;
    }, Oe = T([]), R = T(void 0), x = T({}), L = T([]), ne = T({}), ke = T([]), Re = T({}), Ae = T(!1), $e = T(!1), Ve = T([]), He = T(!1), re = T(he()), Ne = T(!0), be = T(), Fe = T(0), Be = T(20), qe = T(0), se = T(), ge = T(), zn = $(() => {
      const l = {};
      return $e.value && (l.inline_filters = {
        icon: "filter"
      }), l;
    }), Un = $(
      () => S != null && S.value ? Object.keys(S.value) : void 0
    ), Bt = $(
      () => ke.value.reduce((l, i) => (l[i] = wr(c.value[i]), l), {})
    ), It = $(() => {
      if (O != null && O.value)
        return Object.entries(O.value).reduce((l, [i, { label: f }]) => (l[i] = f, l), {});
    }), jt = $(() => [...Oe.value].sort((l, i) => {
      const f = (() => {
        const p = dt(
          be.value[0].reduce((F, H) => F[H], l),
          c.value[be.value[0][0]].type
        ), k = dt(
          be.value[0].reduce((F, H) => F[H], i),
          c.value[be.value[0][0]].type
        );
        return p > k ? 1 : p < k ? -1 : 0;
      })();
      return be.value[1] ? -f : f;
    })), zt = $(() => J != null && J.value && !He.value || !te.value ? jt.value : jt.value.slice(
      Fe.value * Be.value,
      (Fe.value + 1) * Be.value
    )), Mn = (l) => {
      L.value.includes(l) || L.value.push(l);
    }, Qe = (l, i) => !Q.value || !Q.value.includes(l) ? !1 : String(i || "").length > Ct, $n = (l) => !!l.tooltipTitle && !!l.tooltipContent, Ke = (l, i, f) => {
      var k;
      if (!f || !(S != null && S.value) || !(f in S.value) || S.value[f].format !== "difference")
        return;
      const p = ((k = ce == null ? void 0 : ce.value) == null ? void 0 : k.includes(i)) ?? !1;
      return l > 0 ? p ? "negative" : "positive" : l < 0 ? p ? "positive" : "negative" : "neutral";
    }, Ie = (l, i, f) => {
      if (l === null)
        return "";
      let p = dt(l, i);
      switch (i) {
        case "float":
          return ee(parseFloat(p)).format("0,0.00");
        case "int":
          return ee(parseInt(p)).format("0,0");
        case "money": {
          let k = "0,0";
          o.value > 0 && (k += "." + "0".repeat(o.value));
          const F = ee(parseFloat(p)).format(k);
          return b.value ? u.value + " " + F : F + " " + u.value;
        }
        case "money_capped": {
          const k = parseFloat(p.toFixed(o.value)) == 0;
          if (p > 0 && p < 1 && k) {
            const F = o.value === 0 ? 1 : ee(parseFloat("0." + "0".repeat(o.value - 1) + "1")).format(
              "0.0" + o.value
            );
            return b.value ? `< ${u.value} ${F}` : `< ${F} ${u.value}`;
          } else
            return Ie(l, "money", f);
        }
        case "percent": {
          let k = ee(parseFloat(p)).format("0,0.00") + "%";
          return f === "difference" && p > 0 && (k = `+${k}`), k;
        }
        case "time":
          return `${Ie(Math.floor(parseInt(p) / 60), "int")}mn${Ie(
            parseInt(p) % 60,
            "int"
          )}s`;
        default:
          return p == null ? void 0 : p.toString();
      }
    }, Vn = async (l, i) => {
      if (x.value[l] && x.value[l][i[V.value]])
        return x.value[l][i[V.value]];
      const { rows: f } = await r(O.value[l].request, {
        row: i,
        primaryColumn: (pe == null ? void 0 : pe.value) ?? V.value,
        primaryColumnValue: i[V.value]
      });
      return x.value[l] || (x.value[l] = {}), x.value[l][i[V.value]] = Object.values(f), x.value[l][i[V.value]];
    }, Ut = (l, i) => {
      if (!l)
        return i.url;
      const f = new URL(l.url, location.origin);
      if (Array.isArray(l.columns))
        for (const p of l.columns)
          f.searchParams.set(p, i[p]);
      else
        for (const [p, k] of Object.entries(l.columns))
          f.searchParams.set(k, i[p]);
      return f;
    }, Hn = (l, i) => {
      const f = new URL(y.value[l].baseUrl, location.origin);
      if (Array.isArray(y.value[l].columns))
        for (const p of y.value[l].columns)
          f.searchParams.set(p, i[p]);
      else
        for (const [p, k] of Object.entries(y.value[l].columns))
          f.searchParams.set(k, i[p]);
      return f.toString();
    }, qn = (l) => {
      if (l.totalUrl)
        return new URL(l.totalUrl).toString();
      const i = new URL(l.baseUrl);
      return i.searchParams.set("total", "true"), i.toString();
    }, Jn = (l) => !Q.value || !Q.value.includes(l) ? -1 : Ve.value.indexOf(l), Wn = (l) => {
      if (l in re.value)
        return re.value[l].operator;
    }, Gn = (l) => {
      if (l in re.value)
        return re.value[l].value;
    }, Mt = (l) => Z.value[l], Xn = (l) => {
      const i = Mt(l);
      if (i)
        return Object.values(i).some((f) => f.size === "small") ? "small" : "normal";
    }, Yn = (l) => {
      const i = Mt(l);
      return i ? Object.entries(i).reduce((f, [p, k]) => (f[p] = k.label, f), {}) : {};
    }, Zn = (l) => c.value[l].type === "string" ? "text" : "number", $t = () => `Table_OrderBy_${location.pathname}`, Qn = () => `Table_PageSize_${location.pathname}`, dt = (l, i) => {
      switch (i) {
        case "float":
        case "int":
        case "money":
        case "money_capped":
        case "percent":
        case "time":
          return parseFloat(l ?? 0);
        default:
          return l;
      }
    }, Pe = (l, i, f, p = !1) => {
      const [k, F] = (() => !f || !(S != null && S.value) || !(f in S.value) ? [c.value[i].type, void 0] : [
        S.value[f].type ?? c.value[i].type,
        S.value[f].format
      ])();
      let H = Ie(l, k);
      return F === "difference" && (H = l > 0 ? `+${H}` : H), p ? Jt(H, i) : H;
    }, Kn = (l, i) => {
      if (!Se)
        return "";
      const f = new URL(
        i ? Se.value[i] : Se.value,
        location.origin
      );
      return f.searchParams.set((pe == null ? void 0 : pe.value) || V.value, l[V.value]), f.toString();
    }, Vt = (l, i, f) => Qe(l, i) ? [] : f ? (C == null ? void 0 : C.value) === l ? ["flex-grow-1", "text-left"] : Q.value && Q.value.includes(l) && zt.value.some((p) => Qe(l, p[l])) ? ["flex-grow-1", "text-left"] : ["flex-grow-1"] : ["flew-grow-1"], er = (l) => l in Z.value, tr = () => {
      z.value && (Ae.value = !1);
    }, Ht = (l, i) => {
      if (!(A != null && A.value) || !(i in A.value))
        return !1;
      const f = A.value[i];
      return f === null ? !!l.url : !("disable_for" in f && f.disable_for.includes(l[V.value]));
    }, nr = (l, i) => {
      const [f] = ke.value.splice(l, 1);
      ke.value.splice(i, 0, f), t("move:column", { from: l, to: i });
    }, rr = (l) => {
      const i = L.value.indexOf(l);
      i < 0 || L.value.splice(i, 1);
    }, qt = (l, i) => {
      ne.value[l] = i;
    }, Jt = (l, i) => !Q.value || !Q.value.includes(i) || Ve.value.includes(i) || String(l || "").length <= Ct ? l : `${l.substring(0, Ct - 3)}...`, sr = (l) => {
      if (!ge.value)
        return;
      const i = {
        left: ge.value.$el.scrollLeft,
        top: ge.value.$el.scrollTop
      };
      delete Re.value[l[V.value]], Yt(() => {
        ge.value.$el.scrollTo(i);
      });
    }, ar = async (l, i) => {
      if (!ge.value)
        return;
      const f = {
        left: ge.value.$el.scrollLeft,
        top: ge.value.$el.scrollTop
      };
      Ne.value = !0, Re.value[i[V.value]] = await Vn(l, i), Yt(() => {
        ge.value.$el.scrollTo(f), Ne.value = !1;
      });
    }, or = async (l = !1) => {
      await ir(l) || await lr(l) || await mt(l);
    }, pt = async (l) => {
      await vt(l), Fe.value = l;
    }, Wt = async (l) => {
      const i = Qn();
      if (l === void 0) {
        const f = localStorage.getItem(i);
        f && (Be.value = parseInt(f));
      } else
        localStorage.setItem(i, l.toString()), await vt(0, l), Fe.value = 0, Be.value = l;
    }, Gt = (l, { operator: i, value: f }) => {
      const p = re.value[l].value !== f || re.value[l].operator !== i && re.value[l].value;
      re.value[l] = { operator: i, value: f }, p && (He.value = !1, pt(0));
    }, lr = async (l) => {
      const i = (() => {
        for (const k in localStorage) {
          if (!k.startsWith("DataTables_"))
            continue;
          const F = k.substring(k.indexOf("/"));
          if (location.pathname !== F)
            return;
          const H = localStorage.getItem(k);
          return H ? JSON.parse(H) : void 0;
        }
      })();
      if (!i || !i.order || !i.order[0] || typeof i.order[0][0] == "number")
        return !1;
      const f = i.order[0][0].lastIndexOf("-"), p = f === -1 ? [
        [i.order[0][0]],
        i.order[0][1] === "desc"
      ] : [
        [
          i.order[0][0].substring(0, f),
          i.order[0][0].substring(f + 1)
        ],
        i.order[0][1] === "desc"
      ];
      return await je(p, !1, l), !0;
    }, mt = async (l) => {
      if (h != null && h.value) {
        await je(h.value, !1, l);
        return;
      }
      const [i, { colspan: f }] = Object.entries(c.value).find(
        ([p, { visible: k }]) => k
      );
      if (f === -1) {
        await je([[i], !1], !1, l);
        return;
      }
      await je(
        [
          [
            i,
            (S != null && S.value ? Object.keys(S.value)[0] : 0).toString()
          ],
          !1
        ],
        !1,
        l
      );
    }, ir = async (l) => {
      const i = localStorage.getItem($t());
      if (i) {
        const f = JSON.parse(i)[0][0];
        if (c.value[f])
          return await je(JSON.parse(i), !1, l), !0;
      } else
        return !1;
    }, ur = async (l, i, f) => {
      if (!(J != null && J.value))
        return !1;
      if (He.value)
        return !0;
      const [p, k] = await (async () => {
        const F = [
          a(J.value, {
            inlineFilters: re.value,
            pageNumber: l,
            pageSize: i,
            orderBy: f[0],
            reversed: f[1]
          })
        ];
        m != null && m.value && F.push(
          a(m.value, {
            inlineFilters: re.value,
            pageNumber: l,
            pageSize: i,
            orderBy: f[0],
            reversed: f[1]
          })
        );
        const H = await Promise.all(F);
        if (H.length > 1 && H.some((de) => de.paginated === !0))
          throw new Error("Paginated fetching is not supported for separate comparison requests.");
        return H;
      })();
      return k ? (R.value = [p, k], Xt()) : Oe.value = Object.values(p.rows), He.value = p.paginated === !1, qe.value = p.row_count, p.detailedRows ? Re.value = p.detailedRows : Re.value = {}, p.total && !k && (se.value = p.total), !0;
    }, Xt = () => {
      if (!R.value)
        return;
      const [l, i] = R.value;
      Oe.value = Object.values(
        Xs(l.rows, i.rows, c.value, V.value)
      ), l.total && (se.value = jn(l.total, i.total, c.value));
    }, cr = () => {
      if (!(Ce != null && Ce.value))
        return !1;
      let l = Object.values(Ce.value);
      for (const [i, f] of Object.entries(re.value))
        f.value && (l = l.filter(
          (p) => Z.value[i][f.operator].callback(
            p[i],
            f.value
          )
        ));
      return Oe.value = l, qe.value = l.length, !0;
    }, vt = async (l, i, f) => {
      l === void 0 && (l = Fe.value), i === void 0 && (i = Be.value), f === void 0 && (f = be.value), Ne.value = !0, cr() || await ur(l, i, f), Ne.value = !1;
    }, fr = () => {
      z.value && (Ae.value = !0);
    }, dr = (l) => {
      if (!Q.value || !Q.value.includes(l))
        return;
      const i = Jn(l);
      i >= 0 ? Ve.value.splice(i, 1) : Ve.value.push(l);
    }, pr = () => {
      $e.value = !$e.value, $e.value && (re.value = he());
    }, je = async (l, i = !0, f = !0) => {
      Fe.value = 0, be.value = l, f && await vt(void 0, void 0, l), i && localStorage.setItem($t(), JSON.stringify(l)), t("update:orderBy", l);
    };
    return dn(() => {
      ke.value = Object.keys(c.value), se.value = X == null ? void 0 : X.value, Promise.all([mt(!1), Wt()]).then(() => or(!0));
    }), De(c, () => {
      ke.value = Object.keys(c.value), re.value = he(), R && Xt();
    }), De(Ne, () => {
      t("update:loading", Ne.value);
    }), h && De(h, (l, i) => {
      (l == null ? void 0 : l[0][0]) !== (i == null ? void 0 : i[0][0]) && mt(!0);
    }), J && De(
      J,
      () => {
        He.value = !1, pt(0);
      },
      { deep: !0 }
    ), (l, i) => (_(), I("div", ca, [
      g(te) ? (_(), I("div", fa, [
        E(aa, {
          "onUpdate:pageNumber": i[0] || (i[0] = (f) => pt(f)),
          "onUpdate:currentPageSize": i[1] || (i[1] = (f) => Wt(f)),
          currentPageSize: Be.value,
          pageNumber: Fe.value,
          pageSizeLabel: l.pageSizeLabel,
          rowCount: qe.value
        }, null, 8, ["currentPageSize", "pageNumber", "pageSizeLabel", "rowCount"])
      ])) : W("", !0),
      Y("div", {
        class: "table-container",
        onMouseover: i[7] || (i[7] = () => fr()),
        onMouseout: i[8] || (i[8] = () => tr())
      }, [
        Y("div", {
          class: K(["action-buttons", { active: Ae.value }])
        }, [
          g(z) ? (_(), D(St, {
            key: 0,
            onClick: i[2] || (i[2] = () => pr()),
            icon: $e.value ? "trash-can" : "filter",
            mood: "positive"
          }, null, 8, ["icon"])) : W("", !0)
        ], 2),
        be.value ? (_(), D(hn, {
          key: 0,
          ref_key: "table",
          ref: ge,
          onAddColoredMetric: i[3] || (i[3] = (f) => Mn(f)),
          "onMove:column": i[4] || (i[4] = ({ from: f, to: p }) => nr(f, p)),
          onRemoveColoredMetric: i[5] || (i[5] = (f) => rr(f)),
          "onUpdate:orderBy": i[6] || (i[6] = (f) => je(f)),
          additionalHeaders: zn.value,
          cellClasses: g(s),
          colorMetrics: g(v),
          coloredMetrics: L.value,
          columns: Bt.value,
          comparisonColumnKeys: Un.value,
          detailsRows: Re.value,
          dragColumns: g(U),
          fixedColumnNumber: g(le),
          inversedKpis: g(ce),
          orderBy: be.value,
          primaryColumn: g(V),
          rows: zt.value,
          showRowNumber: g(ie),
          showTotal: !!se.value,
          showTopTotal: g(M),
          noDataMessage: g(Le)
        }, pn({
          colorizeLabel: w(({ enabled: f }) => [
            E(j, {
              mood: "white",
              size: "small"
            }, {
              default: w(() => [
                f ? (_(), I(G, { key: 0 }, [
                  N(P(l.uncolorizeLabel), 1)
                ], 64)) : (_(), I(G, { key: 1 }, [
                  N(P(l.colorizeLabel), 1)
                ], 64))
              ]),
              _: 2
            }, 1024)
          ]),
          columnRowNumber: w(() => [
            E(j, {
              class: "column-label",
              contrast: "",
              size: "small"
            }, {
              default: w(() => [
                N("#")
              ]),
              _: 1
            })
          ]),
          rowNumber: w(({ value: f }) => [
            E(j, {
              contrast: "",
              size: "small"
            }, {
              default: w(() => [
                N(P(f), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          totalRowNumber: w(() => [
            E(j, {
              class: "total-label",
              contrast: "",
              size: "small"
            }, {
              default: w(() => [
                N("#")
              ]),
              _: 1
            })
          ]),
          column: w(({ columnKey: f, isGhost: p }) => [
            tt(l.$slots, "columnAdditional", {
              columnKey: f,
              isGhost: p
            }, void 0, !0),
            Y("div", {
              class: "d-flex align-items-center",
              onMouseover: () => qt(f, !0),
              onMouseleave: () => qt(f, !1)
            }, [
              E(j, {
                class: "column-label",
                contrast: "",
                size: "small"
              }, {
                default: w(() => [
                  N(P(g(c)[f].label), 1)
                ]),
                _: 2
              }, 1024),
              !p && $n(g(c)[f]) ? (_(), D(Nr, {
                key: 0,
                description: g(c)[f].tooltipContent,
                title: g(c)[f].tooltipTitle,
                visible: ne.value[f],
                "icon-backend": "regular"
              }, null, 8, ["description", "title", "visible"])) : W("", !0)
            ], 40, da)
          ]),
          additionalHeader: w(({ additionalHeader: f, columnKey: p }) => [
            f === "inline_filters" && er(p) ? (_(), D(na, {
              key: 0,
              value: Gn(p),
              "onUpdate:value": (k) => Gt(p, k),
              type: Zn(p),
              select: Wn(p),
              "onUpdate:select": (k) => Gt(p, k),
              items: Yn(p),
              width: Xn(p)
            }, null, 8, ["value", "onUpdate:value", "type", "select", "onUpdate:select", "items", "width"])) : W("", !0)
          ]),
          total: w(({ columnKey: f, subcolumnKey: p, values: k }) => [
            tt(l.$slots, "total", {
              columnKey: f,
              subcolumnKey: p,
              values: k,
              row: se.value
            }, () => {
              var F;
              return [
                l.totalTitle && f === g(fe) ? (_(), D(j, {
                  key: 0,
                  class: "total-label",
                  contrast: "",
                  size: "small"
                }, {
                  default: w(() => [
                    typeof l.totalTitle == "function" ? (_(), I(G, { key: 0 }, [
                      N(P(l.totalTitle(qe.value ?? Oe.value.length)), 1)
                    ], 64)) : (_(), I(G, { key: 1 }, [
                      N(P(l.totalTitle) + ": " + P(qe.value ?? Oe.value.length), 1)
                    ], 64))
                  ]),
                  _: 1
                })) : se.value ? (_(), I(G, { key: 1 }, [
                  se.value && se.value[f] >= 0.01 && f in g(y) ? (_(), D(cn, {
                    key: 0,
                    format: g(y)[f].format,
                    label: Jt(Ie(se.value[f], g(c)[f].type, g(S) && p ? g(S)[p].format : void 0), f),
                    title: g(y)[f].title,
                    url: qn(g(y)[f])
                  }, null, 8, ["format", "label", "title", "url"])) : p ? (_(), D(j, {
                    key: 1,
                    class: "total-label",
                    mood: Ke((F = se.value[f]) == null ? void 0 : F[p], f, p),
                    contrast: "",
                    size: "small"
                  }, {
                    default: w(() => {
                      var H;
                      return [
                        N(P(Pe((H = se.value[f]) == null ? void 0 : H[p], f, p)), 1)
                      ];
                    }),
                    _: 2
                  }, 1032, ["mood"])) : (_(), D(j, {
                    key: 2,
                    class: "total-label",
                    mood: Ke(se.value[f], f, p),
                    contrast: "",
                    size: "small"
                  }, {
                    default: w(() => [
                      N(P(Pe(se.value[f], f)), 1)
                    ]),
                    _: 2
                  }, 1032, ["mood"]))
                ], 64)) : W("", !0)
              ];
            }, !0)
          ]),
          _: 2
        }, [
          g(S) ? {
            name: "secondaryColumn",
            fn: w(({ subcolumnKey: f }) => [
              f ? (_(), D(j, {
                key: 0,
                class: "column-label",
                contrast: "",
                size: "small"
              }, {
                default: w(() => [
                  N(P(g(S)[f].label), 1)
                ]),
                _: 2
              }, 1024)) : W("", !0)
            ]),
            key: "0"
          } : void 0,
          ye(Object.keys(Bt.value), (f) => ({
            name: `row-${f}`,
            fn: w(({ columnKey: p, index: k, row: F, spanIndex: H, subcolumnKey: de, subindex: ht, value: ae }) => [
              tt(l.$slots, "row-" + p, mn(vn({
                columnKey: p,
                index: k,
                row: F,
                spanIndex: H,
                subcolumnKey: de,
                subindex: ht,
                value: ae
              })), () => [
                ht === void 0 && p === "trend" && g(Se) ? (_(), D(ua, {
                  key: 0,
                  class: K(Vt(p, ae, F.rowInfo.detailable)),
                  formatter: (bt) => Ie(bt, "int"),
                  title: l.trendChartTitle,
                  url: Kn(F, de)
                }, null, 8, ["class", "formatter", "title", "url"])) : F.rowInfo.detailable && p === g(C) ? (_(), I(G, { key: 1 }, [
                  Ht(F, p) && F.rowInfo.detailable ? (_(), D(Zt, {
                    key: 0,
                    to: Ut(g(A)[p], F).toString(),
                    "is-external": !!F.url,
                    contrast: "",
                    size: "small"
                  }, {
                    default: w(() => [
                      N(P(Pe(ae, p, de, !0)), 1)
                    ]),
                    _: 2
                  }, 1032, ["to", "is-external"])) : (_(), D(j, {
                    key: 1,
                    mood: Ke(ae, p, de),
                    contrast: "",
                    size: "small"
                  }, {
                    default: w(() => [
                      N(P(Pe(ae, p, de)), 1)
                    ]),
                    _: 2
                  }, 1032, ["mood"]))
                ], 64)) : Ht(F, p) && F.rowInfo.detailable ? (_(), D(Zt, {
                  key: 2,
                  to: Ut(g(A)[p], F).toString(),
                  "is-external": !!F.url,
                  contrast: "",
                  size: "small"
                }, {
                  default: w(() => [
                    N(P(Pe(ae, p, de, !0)), 1)
                  ]),
                  _: 2
                }, 1032, ["to", "is-external"])) : ht === void 0 && ae >= 0.01 && p in g(y) ? (_(), D(cn, {
                  key: 3,
                  format: g(y)[p].format,
                  label: Pe(ae, p, de, !0),
                  title: g(y)[p].title,
                  url: Hn(p, F)
                }, null, 8, ["format", "label", "title", "url"])) : (_(), D(j, {
                  key: 4,
                  class: K(Vt(p, ae, F.rowInfo.detailable)),
                  mood: Ke(ae, p, de),
                  contrast: "",
                  size: "small"
                }, {
                  default: w(() => [
                    N(P(Pe(ae, p, de, !0)), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "mood"])),
                Qe(p, ae) ? (_(), I("i", {
                  key: 5,
                  class: K(["flex-grow-1 expand-column fa", Ve.value.includes(p) ? "fa-compress-alt" : "fa-expand-alt"]),
                  onClick: () => dr(p)
                }, null, 10, pa)) : W("", !0)
              ], !0),
              It.value && F.rowInfo.detailable && p === g(C) ? (_(), I(G, { key: 0 }, [
                Qe(p, ae) ? W("", !0) : (_(), D(Tr, { key: 0 })),
                E(ea, {
                  onHideDetails: () => sr(F),
                  onShowDetails: (bt) => ar(bt, F),
                  labels: It.value,
                  open: Re.value[F[g(V)]] !== void 0,
                  title: l.detailsSelectorTitle
                }, null, 8, ["onHideDetails", "onShowDetails", "labels", "open", "title"])
              ], 64)) : W("", !0)
            ])
          }))
        ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "dragColumns", "fixedColumnNumber", "inversedKpis", "orderBy", "primaryColumn", "rows", "showRowNumber", "showTotal", "showTopTotal", "noDataMessage"])) : W("", !0)
      ], 32),
      Y("div", {
        class: K(["loading-overlay", { visible: Ne.value }])
      }, [
        E(ot)
      ], 2)
    ]));
  }
});
const Xa = /* @__PURE__ */ Te(ma, [["__scopeId", "data-v-3156fe5f"]]), va = (e) => (vr("data-v-03634614"), e = e(), hr(), e), ha = {
  key: 0,
  class: "intersection"
}, ba = /* @__PURE__ */ va(() => /* @__PURE__ */ Y("div", { class: "line" }, null, -1)), ga = /* @__PURE__ */ _e({
  __name: "IntersectionTable",
  props: {
    cellClasses: { default: () => ({}) },
    clientCurrencyDecimal: { default: 0 },
    clientCurrencySymbol: { default: "" },
    clientCurrencySymbolPrefix: { type: Boolean, default: !0 },
    colorMetrics: { type: Boolean, default: !1 },
    colorizeLabel: {},
    columns: {},
    fixedColumnNumber: { default: 1 },
    intersectionColumn: {},
    intersectionColumnLabels: {},
    primaryColumn: { default: "id" },
    request: {},
    rows: {},
    trendChartTitle: {},
    uncolorizeLabel: {},
    noDataMessage: {}
  },
  emits: ["move:column", "update:loading"],
  setup(e, { emit: t }) {
    const n = e, r = async (z) => (await Xe(z)).data, {
      cellClasses: a,
      clientCurrencyDecimal: s,
      clientCurrencySymbol: o,
      clientCurrencySymbolPrefix: u,
      columns: b,
      fixedColumnNumber: v,
      intersectionColumn: c,
      intersectionColumnLabels: y,
      primaryColumn: A,
      request: S,
      rows: m,
      noDataMessage: h
    } = Ee(n), C = T([]), O = T({}), U = T(!0), le = T(), Z = (z, ie, te) => {
      if (z === null)
        return "";
      let M = ce(z, ie);
      switch (ie) {
        case "float":
          return ee(parseFloat(M)).format("0,0.00");
        case "int":
          return ee(parseInt(M)).format("0,0");
        case "money": {
          let X = "0,0";
          s.value > 0 && (X += "." + "0".repeat(s.value));
          const fe = ee(parseFloat(M)).format(X);
          return u.value ? o.value + " " + fe : fe + " " + o.value;
        }
        case "money_capped": {
          const X = parseFloat(M.toFixed(s.value)) == 0;
          if (M > 0 && M < 1 && X) {
            const fe = s.value === 0 ? 1 : ee(parseFloat("0." + "0".repeat(s.value - 1) + "1")).format(
              "0.0" + s.value
            );
            return u.value ? `< ${o.value} ${fe}` : `< ${fe} ${o.value}`;
          } else
            return Z(z, "money", te);
        }
        case "percent": {
          let X = ee(parseFloat(M)).format("0,0.00") + "%";
          return te === "difference" && M > 0 && (X = `+${X}`), X;
        }
        case "time":
          return `${Z(Math.floor(parseInt(M) / 60), "int")}mn${Z(
            parseInt(M) % 60,
            "int"
          )}s`;
        default:
          return M == null ? void 0 : M.toString();
      }
    }, ce = (z, ie) => {
      switch (ie) {
        case "float":
        case "int":
        case "money":
        case "money_capped":
        case "percent":
        case "time":
          return parseFloat(z ?? 0);
        default:
          return z;
      }
    }, V = (z, ie, te) => {
      const M = O.value[ie].type;
      return Z(z, M);
    }, pe = (z, ie) => ["flex-grow-1"], J = async () => {
      if (!(S != null && S.value))
        return !1;
      const z = await r(S.value);
      return C.value = Object.values(z.rows), O.value = z.columns, !0;
    }, Ce = () => {
      if (!(m != null && m.value))
        return !1;
      let z = Object.values(m.value);
      return C.value = z, !0;
    }, Q = async () => {
      U.value = !0, Ce() || await J(), U.value = !1;
    };
    return dn(() => {
      (b == null ? void 0 : b.value) !== void 0 && (O.value = b.value), Q();
    }), De(U, () => {
      t("update:loading", U.value);
    }), S && De(
      S,
      () => {
        Q();
      },
      { deep: !0 }
    ), (z, ie) => U.value ? (_(), D(ot, { key: 1 })) : (_(), D(hn, {
      key: 0,
      class: "intersection-table",
      ref_key: "table",
      ref: le,
      cellClasses: g(a),
      colorMetrics: !0,
      coloredMetrics: Object.keys(O.value),
      columns: O.value,
      detailsRows: {},
      dragColumns: !1,
      fixedColumnNumber: g(v),
      neutralColoredMetrics: !0,
      noDataMessage: g(h),
      orderBy: [[], !1],
      primaryColumn: g(A),
      rows: C.value,
      showRowNumber: !1,
      showToggleColored: !1,
      showTotal: !1,
      useOrderBy: !1,
      globalColoredMetrics: ""
    }, pn({
      column: w(({ columnKey: te }) => [
        te === g(c) ? (_(), I("div", ha, [
          E(j, {
            class: "column-label",
            contrast: "",
            size: "small"
          }, {
            default: w(() => [
              N(P(g(y)[0]), 1)
            ]),
            _: 1
          }),
          ba,
          E(j, {
            class: "column-label",
            contrast: "",
            size: "small"
          }, {
            default: w(() => [
              N(P(g(y)[1]), 1)
            ]),
            _: 1
          })
        ])) : W("", !0),
        E(j, {
          class: "column-label",
          contrast: "",
          size: "small"
        }, {
          default: w(() => [
            N(P(O.value[te].label), 1)
          ]),
          _: 2
        }, 1024)
      ]),
      _: 2
    }, [
      ye(Object.keys(O.value), (te) => ({
        name: `row-${te}`,
        fn: w(({ columnKey: M, index: X, row: fe, spanIndex: Se, subcolumnKey: Le, value: he }) => [
          tt(z.$slots, "row-" + M, mn(vn({
            columnKey: M,
            index: X,
            row: fe,
            spanIndex: Se,
            subcolumnKey: Le,
            value: he
          })), () => [
            E(j, {
              class: K(pe()),
              contrast: "",
              size: "small"
            }, {
              default: w(() => [
                N(P(V(he, M)), 1)
              ]),
              _: 2
            }, 1032, ["class"])
          ], !0)
        ])
      }))
    ]), 1032, ["cellClasses", "coloredMetrics", "columns", "fixedColumnNumber", "noDataMessage", "primaryColumn", "rows"]));
  }
});
const Ya = /* @__PURE__ */ Te(ga, [["__scopeId", "data-v-03634614"]]), ya = { class: "scrollable flex-max no-spacing" }, wa = ["onClick"], _a = { class: "scrollable flex-max no-spacing" }, Ca = ["onClick"], Sa = { class: "scrollable" }, Oa = { class: "items flex-max no-spacing" }, Ra = /* @__PURE__ */ _e({
  __name: "KpiSelector",
  props: {
    applyLabel: {},
    columns: {},
    defaultValue: {},
    disabled: { type: Boolean },
    filterLabel: {},
    groupNames: {},
    groupsTitle: {},
    modelValue: {},
    noColumnsFoundLabel: {},
    orderTitle: {},
    resetLabel: {},
    showModalLabel: {},
    title: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, { columns: r, defaultValue: a, groupNames: s, modelValue: o, showModalLabel: u } = Ee(n), b = T(Object.keys(s.value)[0]), v = T([...o.value]), c = T([]), y = T([]), A = T(""), S = T(void 0), m = T(void 0), h = T(void 0), C = T(void 0), O = T(void 0), U = $(() => Object.fromEntries(
      Object.entries(r.value).filter(
        ([R, x]) => x.fixed !== !0 && (A.value.trim() === "" || x.label.toLowerCase().includes(A.value.trim().toLowerCase()))
      )
    )), le = $(() => Object.keys(s.value).reduce((R, x) => (R[x] = Object.fromEntries(
      Object.entries(U.value).filter(([L, ne]) => ne.group === x)
    ), R), {})), Z = $(
      () => b.value === void 0 ? void 0 : le.value[b.value]
    ), ce = $(() => Object.fromEntries(
      Object.entries(s.value).filter(
        ([R, x]) => Object.values(U.value).some((L) => L.group === R)
      )
    )), V = $(() => {
      if (!(h.value === void 0 || C.value === void 0 || O.value === void 0))
        return h.value + O.value - C.value;
    }), pe = $(() => {
      if (V.value !== void 0)
        return `${V.value}px`;
    }), J = $(() => {
      if (m.value === void 0 || V.value === void 0)
        return;
      const R = v.value.indexOf(m.value), x = R - 1 - v.value.slice(0, R).reverse().findIndex((Ae) => r.value[Ae].fixed === !0);
      let L = v.value.slice(R + 1).findIndex((Ae) => r.value[Ae].fixed === !0);
      L >= 0 ? L += R + 1 : L = v.value.length;
      const ne = Ce(v.value[x]), ke = ne.offsetHeight, Re = Math.min(
        Math.round((V.value - ne.offsetTop) / ke - 1),
        L - x - 1
      );
      return x + Re + 1;
    }), Ce = (R) => y.value[v.value.indexOf(R)], Q = (R) => c.value[v.value.indexOf(R)], z = (R = !1, x) => {
      x && x.target !== x.currentTarget || (R && (v.value = [...o.value]), S.value = !1, b.value = Object.keys(s.value)[0]);
    }, ie = (R) => {
      const x = v.value.indexOf(R);
      x >= 0 && v.value.splice(x, 1);
    }, te = () => {
      v.value = [...a.value];
    }, M = (R) => {
      const x = [...R];
      t("update:modelValue", x), z(!1);
    }, X = (R) => {
      b.value = R.toString();
    }, fe = () => {
      S.value = !0;
    }, Se = (R) => {
      const x = v.value.indexOf(R);
      x >= 0 ? v.value.splice(x, 1) : v.value.push(R);
    }, Le = (R) => {
      O.value = R.clientY;
    }, he = () => {
      const R = J.value;
      if (m.value !== void 0 && R !== void 0) {
        const x = v.value.indexOf(m.value);
        v.value.splice(x, 1), v.value.splice(R, 0, m.value);
      }
      m.value = void 0, h.value = void 0, C.value = void 0, O.value = void 0, window.removeEventListener("mousemove", Le), window.removeEventListener("mouseup", he);
    }, Oe = (R, x) => {
      m.value = x, h.value = Q(x).$el.offsetTop, C.value = R.clientY, O.value = R.clientY, window.addEventListener("mousemove", Le), window.addEventListener("mouseup", he);
    };
    return De(A, (R) => {
      R ? (!b.value || !(b.value in ce.value)) && (b.value = Object.keys(ce.value)[0]) : b.value || (b.value = Object.keys(ce.value)[0]);
    }), (R, x) => (_(), I(G, null, [
      E(St, {
        onClick: x[0] || (x[0] = () => fe()),
        disabled: R.disabled,
        label: g(u),
        mood: "neutral",
        tabindex: "-1"
      }, null, 8, ["disabled", "label"]),
      (_(), D(br, { to: "#app > .app-container" }, [
        E(oe, {
          class: K(["kpi-selector-container no-spacing", { visible: S.value, hidden: S.value === !1 }]),
          onClick: x[5] || (x[5] = fn((L) => z(!0, L), ["stop"])),
          column: "",
          horizontal: "center",
          vertical: "center"
        }, {
          default: w(() => [
            E(yr, { class: "kpi-selector" }, {
              default: w(() => [
                E(oe, {
                  class: "title",
                  vertical: "center"
                }, {
                  default: w(() => [
                    E(We, {
                      class: "flex-max",
                      size: "large-2"
                    }, {
                      default: w(() => [
                        N(P(R.title), 1)
                      ]),
                      _: 1
                    }),
                    E(oe, {
                      class: "flex-max no-spacing search-container",
                      vertical: "center"
                    }, {
                      default: w(() => [
                        E(Cr, {
                          class: "flex-max search",
                          modelValue: A.value,
                          "onUpdate:modelValue": x[1] || (x[1] = (L) => A.value = L),
                          placeholder: R.filterLabel
                        }, null, 8, ["modelValue", "placeholder"]),
                        E(ze, {
                          class: "no-spacing",
                          value: "magnifying-glass"
                        })
                      ]),
                      _: 1
                    }),
                    E(oe, {
                      class: "close-container flex-max no-spacing",
                      horizontal: "right"
                    }, {
                      default: w(() => [
                        E(ze, {
                          class: "close",
                          onClick: x[2] || (x[2] = () => z(!0)),
                          value: "xmark"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                E(oe, { class: "body flex-max no-spacing" }, {
                  default: w(() => [
                    b.value !== void 0 && Z.value !== void 0 ? (_(), I(G, { key: 0 }, [
                      E(oe, {
                        class: "groups flex-max",
                        column: ""
                      }, {
                        default: w(() => [
                          E(We, { size: "large-2" }, {
                            default: w(() => [
                              N(P(R.groupsTitle), 1)
                            ]),
                            _: 1
                          }),
                          Y("div", ya, [
                            (_(!0), I(G, null, ye(Object.entries(ce.value), ([L, ne]) => (_(), I("div", {
                              class: K(["item no-spacing", { selected: b.value === L }]),
                              onClick: () => X(L)
                            }, [
                              E(j, { size: "small" }, {
                                default: w(() => [
                                  N(P(ne), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, wa))), 256))
                          ])
                        ]),
                        _: 1
                      }),
                      E(oe, {
                        class: "group-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: w(() => [
                          E(We, { size: "large-2" }, {
                            default: w(() => [
                              N(P(g(s)[b.value]), 1)
                            ]),
                            _: 1
                          }),
                          Y("div", _a, [
                            (_(!0), I(G, null, ye(Object.entries(Z.value), ([L, ne]) => (_(), I("div", {
                              class: K(["item no-spacing", { selected: v.value.includes(L) }]),
                              onClick: () => Se(L),
                              key: L
                            }, [
                              E(j, { size: "small" }, {
                                default: w(() => [
                                  N(P(ne.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, Ca))), 128))
                          ])
                        ]),
                        _: 1
                      }),
                      E(oe, {
                        class: "enabled-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: w(() => [
                          E(oe, {
                            class: "header",
                            vertical: "center"
                          }, {
                            default: w(() => [
                              E(We, {
                                class: "flex-max",
                                size: "large-2"
                              }, {
                                default: w(() => [
                                  N(P(R.orderTitle), 1)
                                ]),
                                _: 1
                              }),
                              E(j, {
                                class: "reset",
                                onClick: x[3] || (x[3] = () => te()),
                                mood: "important-alt",
                                size: "small"
                              }, {
                                default: w(() => [
                                  N(P(R.resetLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          Y("div", Sa, [
                            Y("div", Oa, [
                              (_(!0), I(G, null, ye(v.value, (L) => (_(), I("div", {
                                class: "item-container no-spacing",
                                ref_for: !0,
                                ref_key: "enabledColumnContainers",
                                ref: y
                              }, [
                                Y("div", {
                                  class: K(["separator-top no-spacing", { "place-after": J.value !== void 0 && m.value !== void 0 && L === v.value[J.value] && J.value < v.value.indexOf(m.value) }])
                                }, null, 2),
                                E(oe, {
                                  class: K(["item no-spacing", { dragged: L === m.value }]),
                                  ref_for: !0,
                                  ref_key: "enabledColumnElements",
                                  ref: c,
                                  style: et(L === m.value ? { top: pe.value } : void 0),
                                  vertical: "center"
                                }, {
                                  default: w(() => [
                                    g(r)[L].fixed ? (_(), D(j, {
                                      key: 0,
                                      class: K(["flex-max", { fixed: g(r)[L].fixed }]),
                                      size: "small"
                                    }, {
                                      default: w(() => [
                                        N(P(g(r)[L].label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])) : (_(), I(G, { key: 1 }, [
                                      E(ze, {
                                        class: "move",
                                        onMousedown: (ne) => Oe(ne, L),
                                        value: "ellipsis-vertical"
                                      }, null, 8, ["onMousedown"]),
                                      E(j, {
                                        class: "flex-max no-spacing",
                                        size: "small"
                                      }, {
                                        default: w(() => [
                                          N(P(g(r)[L].label), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      E(ze, {
                                        class: "no-spacing remove",
                                        onClick: () => ie(L),
                                        value: "trash-can",
                                        backend: "regular"
                                      }, null, 8, ["onClick"])
                                    ], 64))
                                  ]),
                                  _: 2
                                }, 1032, ["class", "style"]),
                                Y("div", {
                                  class: K(["separator-bottom no-spacing", { "place-after": J.value !== void 0 && m.value !== void 0 && L === v.value[J.value] && J.value >= v.value.indexOf(m.value) }])
                                }, null, 2)
                              ], 512))), 256))
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ], 64)) : (_(), D(oe, {
                      key: 1,
                      class: "flex-max",
                      horizontal: "center",
                      vertical: "center"
                    }, {
                      default: w(() => [
                        E(j, { size: "small" }, {
                          default: w(() => [
                            N(P(R.noColumnsFoundLabel), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }))
                  ]),
                  _: 1
                }),
                E(oe, {
                  class: "controls no-spacing",
                  horizontal: "right"
                }, {
                  default: w(() => [
                    E(St, {
                      onClick: x[4] || (x[4] = () => M(v.value)),
                      label: R.applyLabel,
                      mood: "positive"
                    }, null, 8, ["label"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["class"])
      ]))
    ], 64));
  }
});
const Za = /* @__PURE__ */ Te(Ra, [["__scopeId", "data-v-f095228a"]]);
export {
  Nr as ColumnHint,
  Xa as CommonTable,
  Ya as IntersectionTable,
  Za as KpiSelector
};
