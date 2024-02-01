import { defineComponent as ge, toRefs as ye, ref as P, openBlock as C, createElementBlock as L, normalizeClass as M, createElementVNode as V, withModifiers as je, toDisplayString as N, unref as g, createVNode as R, withCtx as w, createCommentVNode as U, Fragment as q, renderList as Te, createBlock as I, pushScopeId as rn, popScopeId as sn, computed as j, watch as Xe, nextTick as Ye, Teleport as on, normalizeStyle as an, renderSlot as yt, onUnmounted as dr, createTextVNode as F, onMounted as fr, createSlots as pr, normalizeProps as vr, guardReactiveProps as mr } from "vue";
import be from "numeral";
import { L as Et, a as hr } from "./LineBarChart-96b2a178.js";
import { P as xt } from "./Popover-38d3223e.js";
import { _ as _e } from "./_plugin-vue_export-helper-dad06003.js";
import { C as ln, A as Z, I as Ie } from "./Icon-8f2ed8ba.js";
import { I as z } from "./Info-54758b60.js";
import { D as un, I as cn, B as Vt } from "./Input-8e3a6104.js";
import { Separator as br } from "./marker.js";
import { T as gr, S as pt } from "./Table-7c57c51c.js";
import { H as ze } from "./Header-8b49a8fe.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "./datetime-31a2b505.js";
function dn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: yr } = Object.prototype, { getPrototypeOf: Rt } = Object, Ke = ((e) => (t) => {
  const n = yr.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), oe = (e) => (e = e.toLowerCase(), (t) => Ke(t) === e), et = (e) => (t) => typeof t === e, { isArray: Pe } = Array, Ue = et("undefined");
function _r(e) {
  return e !== null && !Ue(e) && e.constructor !== null && !Ue(e.constructor) && ne(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const fn = oe("ArrayBuffer");
function wr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && fn(e.buffer), t;
}
const Sr = et("string"), ne = et("function"), pn = et("number"), tt = (e) => e !== null && typeof e == "object", Cr = (e) => e === !0 || e === !1, Je = (e) => {
  if (Ke(e) !== "object")
    return !1;
  const t = Rt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Or = oe("Date"), Er = oe("File"), xr = oe("Blob"), Rr = oe("FileList"), Tr = (e) => tt(e) && ne(e.pipe), Ar = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ne(e.append) && ((t = Ke(e)) === "formdata" || // detect form-data instance
  t === "object" && ne(e.toString) && e.toString() === "[object FormData]"));
}, Pr = oe("URLSearchParams"), kr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $e(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Pe(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let d;
    for (r = 0; r < a; r++)
      d = o[r], t.call(null, e[d], d, e);
  }
}
function vn(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const mn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), hn = (e) => !Ue(e) && e !== mn;
function _t() {
  const { caseless: e } = hn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && vn(t, s) || s;
    Je(t[o]) && Je(r) ? t[o] = _t(t[o], r) : Je(r) ? t[o] = _t({}, r) : Pe(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && $e(arguments[r], n);
  return t;
}
const Nr = (e, t, n, { allOwnKeys: r } = {}) => ($e(t, (s, o) => {
  n && ne(s) ? e[o] = dn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Fr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Lr = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Br = (e, t, n, r) => {
  let s, o, a;
  const d = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      a = s[o], (!r || r(a, e, t)) && !d[a] && (t[a] = e[a], d[a] = !0);
    e = n !== !1 && Rt(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Dr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Ir = (e) => {
  if (!e)
    return null;
  if (Pe(e))
    return e;
  let t = e.length;
  if (!pn(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, zr = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Rt(Uint8Array)), jr = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Ur = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, $r = oe("HTMLFormElement"), Mr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), qt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Hr = oe("RegExp"), bn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  $e(n, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (r[o] = a || s);
  }), Object.defineProperties(e, r);
}, Vr = (e) => {
  bn(e, (t, n) => {
    if (ne(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (ne(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, qr = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Pe(e) ? r(e) : r(String(e).split(t)), n;
}, Jr = () => {
}, Wr = (e, t) => (e = +e, Number.isFinite(e) ? e : t), vt = "abcdefghijklmnopqrstuvwxyz", Jt = "0123456789", gn = {
  DIGIT: Jt,
  ALPHA: vt,
  ALPHA_DIGIT: vt + vt.toUpperCase() + Jt
}, Gr = (e = 16, t = gn.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Xr(e) {
  return !!(e && ne(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Yr = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (tt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Pe(r) ? [] : {};
        return $e(r, (a, d) => {
          const h = n(a, s + 1);
          !Ue(h) && (o[d] = h);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Qr = oe("AsyncFunction"), Zr = (e) => e && (tt(e) || ne(e)) && ne(e.then) && ne(e.catch), f = {
  isArray: Pe,
  isArrayBuffer: fn,
  isBuffer: _r,
  isFormData: Ar,
  isArrayBufferView: wr,
  isString: Sr,
  isNumber: pn,
  isBoolean: Cr,
  isObject: tt,
  isPlainObject: Je,
  isUndefined: Ue,
  isDate: Or,
  isFile: Er,
  isBlob: xr,
  isRegExp: Hr,
  isFunction: ne,
  isStream: Tr,
  isURLSearchParams: Pr,
  isTypedArray: zr,
  isFileList: Rr,
  forEach: $e,
  merge: _t,
  extend: Nr,
  trim: kr,
  stripBOM: Fr,
  inherits: Lr,
  toFlatObject: Br,
  kindOf: Ke,
  kindOfTest: oe,
  endsWith: Dr,
  toArray: Ir,
  forEachEntry: jr,
  matchAll: Ur,
  isHTMLForm: $r,
  hasOwnProperty: qt,
  hasOwnProp: qt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: bn,
  freezeMethods: Vr,
  toObjectSet: qr,
  toCamelCase: Mr,
  noop: Jr,
  toFiniteNumber: Wr,
  findKey: vn,
  global: mn,
  isContextDefined: hn,
  ALPHABET: gn,
  generateString: Gr,
  isSpecCompliantForm: Xr,
  toJSONObject: Yr,
  isAsyncFn: Qr,
  isThenable: Zr
};
function B(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
f.inherits(B, Error, {
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
      config: f.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const yn = B.prototype, _n = {};
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
  _n[e] = { value: e };
});
Object.defineProperties(B, _n);
Object.defineProperty(yn, "isAxiosError", { value: !0 });
B.from = (e, t, n, r, s, o) => {
  const a = Object.create(yn);
  return f.toFlatObject(e, a, function(h) {
    return h !== Error.prototype;
  }, (d) => d !== "isAxiosError"), B.call(a, e.message, t, n, r, s), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const Kr = null;
function wt(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function wn(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Wt(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = wn(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function es(e) {
  return f.isArray(e) && !e.some(wt);
}
const ts = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function nt(e, t, n) {
  if (!f.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = f.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, y) {
    return !f.isUndefined(y[m]);
  });
  const r = n.metaTokens, s = n.visitor || c, o = n.dots, a = n.indexes, h = (n.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(t);
  if (!f.isFunction(s))
    throw new TypeError("visitor must be a function");
  function p(v) {
    if (v === null)
      return "";
    if (f.isDate(v))
      return v.toISOString();
    if (!h && f.isBlob(v))
      throw new B("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(v) || f.isTypedArray(v) ? h && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function c(v, m, y) {
    let E = v;
    if (v && !y && typeof v == "object") {
      if (f.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), v = JSON.stringify(v);
      else if (f.isArray(v) && es(v) || (f.isFileList(v) || f.endsWith(m, "[]")) && (E = f.toArray(v)))
        return m = wn(m), E.forEach(function(H, K) {
          !(f.isUndefined(H) || H === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Wt([m], K, o) : a === null ? m : m + "[]",
            p(H)
          );
        }), !1;
    }
    return wt(v) ? !0 : (t.append(Wt(y, m, o), p(v)), !1);
  }
  const _ = [], T = Object.assign(ts, {
    defaultVisitor: c,
    convertValue: p,
    isVisitable: wt
  });
  function S(v, m) {
    if (!f.isUndefined(v)) {
      if (_.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      _.push(v), f.forEach(v, function(E, D) {
        (!(f.isUndefined(E) || E === null) && s.call(
          t,
          E,
          f.isString(D) ? D.trim() : D,
          m,
          T
        )) === !0 && S(E, m ? m.concat(D) : [D]);
      }), _.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return S(e), t;
}
function Gt(e) {
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
function Tt(e, t) {
  this._pairs = [], e && nt(e, this, t);
}
const Sn = Tt.prototype;
Sn.append = function(t, n) {
  this._pairs.push([t, n]);
};
Sn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Gt);
  } : Gt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function ns(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Cn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ns, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = f.isURLSearchParams(t) ? t.toString() : new Tt(t, n).toString(r), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class rs {
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
    f.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Xt = rs, On = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ss = typeof URLSearchParams < "u" ? URLSearchParams : Tt, os = typeof FormData < "u" ? FormData : null, as = typeof Blob < "u" ? Blob : null, ls = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ss,
    FormData: os,
    Blob: as
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, En = typeof window < "u" && typeof document < "u", is = ((e) => En && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), us = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: En,
  hasStandardBrowserEnv: is,
  hasStandardBrowserWebWorkerEnv: us
}, Symbol.toStringTag, { value: "Module" })), se = {
  ...cs,
  ...ls
};
function ds(e, t) {
  return nt(e, new se.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return se.isNode && f.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function fs(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ps(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function xn(e) {
  function t(n, r, s, o) {
    let a = n[o++];
    const d = Number.isFinite(+a), h = o >= n.length;
    return a = !a && f.isArray(s) ? s.length : a, h ? (f.hasOwnProp(s, a) ? s[a] = [s[a], r] : s[a] = r, !d) : ((!s[a] || !f.isObject(s[a])) && (s[a] = []), t(n, r, s[a], o) && f.isArray(s[a]) && (s[a] = ps(s[a])), !d);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const n = {};
    return f.forEachEntry(e, (r, s) => {
      t(fs(r), s, n, 0);
    }), n;
  }
  return null;
}
function vs(e, t, n) {
  if (f.isString(e))
    try {
      return (t || JSON.parse)(e), f.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const At = {
  transitional: On,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = f.isObject(t);
    if (o && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
      return s && s ? JSON.stringify(xn(t)) : t;
    if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t))
      return t;
    if (f.isArrayBufferView(t))
      return t.buffer;
    if (f.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let d;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ds(t, this.formSerializer).toString();
      if ((d = f.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return nt(
          d ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), vs(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || At.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && f.isString(t) && (r && !this.responseType || s)) {
      const a = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (d) {
        if (a)
          throw d.name === "SyntaxError" ? B.from(d, B.ERR_BAD_RESPONSE, this, null, this.response) : d;
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
    FormData: se.classes.FormData,
    Blob: se.classes.Blob
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
f.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  At.headers[e] = {};
});
const Pt = At, ms = f.toObjectSet([
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
]), hs = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), n = a.substring(0, s).trim().toLowerCase(), r = a.substring(s + 1).trim(), !(!n || t[n] && ms[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Yt = Symbol("internals");
function De(e) {
  return e && String(e).trim().toLowerCase();
}
function We(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(We) : String(e);
}
function bs(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const gs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function mt(e, t, n, r, s) {
  if (f.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!f.isString(t)) {
    if (f.isString(r))
      return t.indexOf(r) !== -1;
    if (f.isRegExp(r))
      return r.test(t);
  }
}
function ys(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function _s(e, t) {
  const n = f.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, a) {
        return this[r].call(this, t, s, o, a);
      },
      configurable: !0
    });
  });
}
class rt {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(d, h, p) {
      const c = De(h);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const _ = f.findKey(s, c);
      (!_ || s[_] === void 0 || p === !0 || p === void 0 && s[_] !== !1) && (s[_ || h] = We(d));
    }
    const a = (d, h) => f.forEach(d, (p, c) => o(p, c, h));
    return f.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : f.isString(t) && (t = t.trim()) && !gs(t) ? a(hs(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = De(t), t) {
      const r = f.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return bs(s);
        if (f.isFunction(n))
          return n.call(this, s, r);
        if (f.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = De(t), t) {
      const r = f.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || mt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(a) {
      if (a = De(a), a) {
        const d = f.findKey(r, a);
        d && (!n || mt(r, r[d], d, n)) && (delete r[d], s = !0);
      }
    }
    return f.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || mt(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return f.forEach(this, (s, o) => {
      const a = f.findKey(r, o);
      if (a) {
        n[a] = We(s), delete n[o];
        return;
      }
      const d = t ? ys(o) : String(o).trim();
      d !== o && delete n[o], n[d] = We(s), r[d] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && f.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Yt] = this[Yt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const d = De(a);
      r[d] || (_s(s, a), r[d] = !0);
    }
    return f.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
rt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors(rt.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
f.freezeMethods(rt);
const de = rt;
function ht(e, t) {
  const n = this || Pt, r = t || n, s = de.from(r.headers);
  let o = r.data;
  return f.forEach(e, function(d) {
    o = d.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Rn(e) {
  return !!(e && e.__CANCEL__);
}
function Me(e, t, n) {
  B.call(this, e ?? "canceled", B.ERR_CANCELED, t, n), this.name = "CanceledError";
}
f.inherits(Me, B, {
  __CANCEL__: !0
});
function ws(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new B(
    "Request failed with status code " + n.status,
    [B.ERR_BAD_REQUEST, B.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Ss = se.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, s, o, a, d) {
        const h = [];
        h.push(n + "=" + encodeURIComponent(r)), f.isNumber(s) && h.push("expires=" + new Date(s).toGMTString()), f.isString(o) && h.push("path=" + o), f.isString(a) && h.push("domain=" + a), d === !0 && h.push("secure"), document.cookie = h.join("; ");
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
function Cs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Os(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Tn(e, t) {
  return e && !Cs(t) ? Os(e, t) : t;
}
const Es = se.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let a = o;
      return t && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), {
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
    return r = s(window.location.href), function(a) {
      const d = f.isString(a) ? s(a) : a;
      return d.protocol === r.protocol && d.host === r.host;
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
function xs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Rs(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const p = Date.now(), c = r[o];
    a || (a = p), n[s] = h, r[s] = p;
    let _ = o, T = 0;
    for (; _ !== s; )
      T += n[_++], _ = _ % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), p - a < t)
      return;
    const S = c && p - c;
    return S ? Math.round(T * 1e3 / S) : void 0;
  };
}
function Qt(e, t) {
  let n = 0;
  const r = Rs(50, 250);
  return (s) => {
    const o = s.loaded, a = s.lengthComputable ? s.total : void 0, d = o - n, h = r(d), p = o <= a;
    n = o;
    const c = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: d,
      rate: h || void 0,
      estimated: h && a && p ? (a - o) / h : void 0,
      event: s
    };
    c[t ? "download" : "upload"] = !0, e(c);
  };
}
const Ts = typeof XMLHttpRequest < "u", As = Ts && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = de.from(e.headers).normalize(), a = e.responseType;
    let d;
    function h() {
      e.cancelToken && e.cancelToken.unsubscribe(d), e.signal && e.signal.removeEventListener("abort", d);
    }
    let p;
    if (f.isFormData(s)) {
      if (se.hasStandardBrowserEnv || se.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((p = o.getContentType()) !== !1) {
        const [v, ...m] = p ? p.split(";").map((y) => y.trim()).filter(Boolean) : [];
        o.setContentType([v || "multipart/form-data", ...m].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(v + ":" + m));
    }
    const _ = Tn(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Cn(_, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function T() {
      if (!c)
        return;
      const v = de.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: v,
        config: e,
        request: c
      };
      ws(function(D) {
        n(D), h();
      }, function(D) {
        r(D), h();
      }, y), c = null;
    }
    if ("onloadend" in c ? c.onloadend = T : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, c.onabort = function() {
      c && (r(new B("Request aborted", B.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new B("Network Error", B.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const y = e.transitional || On;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), r(new B(
        m,
        y.clarifyTimeoutError ? B.ETIMEDOUT : B.ECONNABORTED,
        e,
        c
      )), c = null;
    }, se.hasStandardBrowserEnv) {
      const v = Es(_) && e.xsrfCookieName && Ss.read(e.xsrfCookieName);
      v && o.set(e.xsrfHeaderName, v);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in c && f.forEach(o.toJSON(), function(m, y) {
      c.setRequestHeader(y, m);
    }), f.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), a && a !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Qt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Qt(e.onUploadProgress)), (e.cancelToken || e.signal) && (d = (v) => {
      c && (r(!v || v.type ? new Me(null, e, c) : v), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(d), e.signal && (e.signal.aborted ? d() : e.signal.addEventListener("abort", d)));
    const S = xs(_);
    if (S && se.protocols.indexOf(S) === -1) {
      r(new B("Unsupported protocol " + S + ":", B.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, St = {
  http: Kr,
  xhr: As
};
f.forEach(St, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Zt = (e) => `- ${e}`, Ps = (e) => f.isFunction(e) || e === null || e === !1, An = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let a;
      if (r = n, !Ps(n) && (r = St[(a = String(n)).toLowerCase()], r === void 0))
        throw new B(`Unknown adapter '${a}'`);
      if (r)
        break;
      s[a || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([d, h]) => `adapter ${d} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? o.length > 1 ? `since :
` + o.map(Zt).join(`
`) : " " + Zt(o[0]) : "as no adapter specified";
      throw new B(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: St
};
function bt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Me(null, e);
}
function Kt(e) {
  return bt(e), e.headers = de.from(e.headers), e.data = ht.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), An.getAdapter(e.adapter || Pt.adapter)(e).then(function(r) {
    return bt(e), r.data = ht.call(
      e,
      e.transformResponse,
      r
    ), r.headers = de.from(r.headers), r;
  }, function(r) {
    return Rn(r) || (bt(e), r && r.response && (r.response.data = ht.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = de.from(r.response.headers))), Promise.reject(r);
  });
}
const en = (e) => e instanceof de ? e.toJSON() : e;
function Ae(e, t) {
  t = t || {};
  const n = {};
  function r(p, c, _) {
    return f.isPlainObject(p) && f.isPlainObject(c) ? f.merge.call({ caseless: _ }, p, c) : f.isPlainObject(c) ? f.merge({}, c) : f.isArray(c) ? c.slice() : c;
  }
  function s(p, c, _) {
    if (f.isUndefined(c)) {
      if (!f.isUndefined(p))
        return r(void 0, p, _);
    } else
      return r(p, c, _);
  }
  function o(p, c) {
    if (!f.isUndefined(c))
      return r(void 0, c);
  }
  function a(p, c) {
    if (f.isUndefined(c)) {
      if (!f.isUndefined(p))
        return r(void 0, p);
    } else
      return r(void 0, c);
  }
  function d(p, c, _) {
    if (_ in t)
      return r(p, c);
    if (_ in e)
      return r(void 0, p);
  }
  const h = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: d,
    headers: (p, c) => s(en(p), en(c), !0)
  };
  return f.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const _ = h[c] || s, T = _(e[c], t[c], c);
    f.isUndefined(T) && _ !== d || (n[c] = T);
  }), n;
}
const Pn = "1.6.1", kt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  kt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const tn = {};
kt.transitional = function(t, n, r) {
  function s(o, a) {
    return "[Axios v" + Pn + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
  }
  return (o, a, d) => {
    if (t === !1)
      throw new B(
        s(a, " has been removed" + (n ? " in " + n : "")),
        B.ERR_DEPRECATED
      );
    return n && !tn[a] && (tn[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, d) : !0;
  };
};
function ks(e, t, n) {
  if (typeof e != "object")
    throw new B("options must be an object", B.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], a = t[o];
    if (a) {
      const d = e[o], h = d === void 0 || a(d, o, e);
      if (h !== !0)
        throw new B("option " + o + " must be " + h, B.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new B("Unknown option " + o, B.ERR_BAD_OPTION);
  }
}
const Ct = {
  assertOptions: ks,
  validators: kt
}, he = Ct.validators;
class Qe {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Xt(),
      response: new Xt()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ae(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Ct.assertOptions(r, {
      silentJSONParsing: he.transitional(he.boolean),
      forcedJSONParsing: he.transitional(he.boolean),
      clarifyTimeoutError: he.transitional(he.boolean)
    }, !1), s != null && (f.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ct.assertOptions(s, {
      encode: he.function,
      serialize: he.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && f.merge(
      o.common,
      o[n.method]
    );
    o && f.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete o[v];
      }
    ), n.headers = de.concat(a, o);
    const d = [];
    let h = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (h = h && m.synchronous, d.unshift(m.fulfilled, m.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(m) {
      p.push(m.fulfilled, m.rejected);
    });
    let c, _ = 0, T;
    if (!h) {
      const v = [Kt.bind(this), void 0];
      for (v.unshift.apply(v, d), v.push.apply(v, p), T = v.length, c = Promise.resolve(n); _ < T; )
        c = c.then(v[_++], v[_++]);
      return c;
    }
    T = d.length;
    let S = n;
    for (_ = 0; _ < T; ) {
      const v = d[_++], m = d[_++];
      try {
        S = v(S);
      } catch (y) {
        m.call(this, y);
        break;
      }
    }
    try {
      c = Kt.call(this, S);
    } catch (v) {
      return Promise.reject(v);
    }
    for (_ = 0, T = p.length; _ < T; )
      c = c.then(p[_++], p[_++]);
    return c;
  }
  getUri(t) {
    t = Ae(this.defaults, t);
    const n = Tn(t.baseURL, t.url);
    return Cn(n, t.params, t.paramsSerializer);
  }
}
f.forEach(["delete", "get", "head", "options"], function(t) {
  Qe.prototype[t] = function(n, r) {
    return this.request(Ae(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, a, d) {
      return this.request(Ae(d || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  Qe.prototype[t] = n(), Qe.prototype[t + "Form"] = n(!0);
});
const Ge = Qe;
class Nt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const a = new Promise((d) => {
        r.subscribe(d), o = d;
      }).then(s);
      return a.cancel = function() {
        r.unsubscribe(o);
      }, a;
    }, t(function(o, a, d) {
      r.reason || (r.reason = new Me(o, a, d), n(r.reason));
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
      token: new Nt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Ns = Nt;
function Fs(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ls(e) {
  return f.isObject(e) && e.isAxiosError === !0;
}
const Ot = {
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
Object.entries(Ot).forEach(([e, t]) => {
  Ot[t] = e;
});
const Bs = Ot;
function kn(e) {
  const t = new Ge(e), n = dn(Ge.prototype.request, t);
  return f.extend(n, Ge.prototype, t, { allOwnKeys: !0 }), f.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return kn(Ae(e, s));
  }, n;
}
const $ = kn(Pt);
$.Axios = Ge;
$.CanceledError = Me;
$.CancelToken = Ns;
$.isCancel = Rn;
$.VERSION = Pn;
$.toFormData = nt;
$.AxiosError = B;
$.Cancel = $.CanceledError;
$.all = function(t) {
  return Promise.all(t);
};
$.spread = Fs;
$.isAxiosError = Ls;
$.mergeConfig = Ae;
$.AxiosHeaders = de;
$.formToJSON = (e) => xn(f.isHTMLForm(e) ? new FormData(e) : e);
$.getAdapter = An.getAdapter;
$.HttpStatusCode = Bs;
$.default = $;
const Ze = $;
be.localeData().delimiters.thousands = " ";
be.localeData().delimiters.decimal = ",";
const Ds = (e) => e === void 0 ? void 0 : JSON.parse(JSON.stringify(e)), Is = (e) => {
  if (!Array.isArray(e) && Object.getPrototypeOf(e) !== Object.prototype)
    throw new Error(
      "Tried cloning instance of a class. Consider implementing clone method instead."
    );
  return Ds(e);
}, zs = {
  key: 0,
  class: "popover-header"
}, js = {
  key: 1,
  class: "popover-body"
}, Us = {
  important: "",
  size: "small"
}, $s = { size: "small" }, Ms = /* @__PURE__ */ ge({
  __name: "CellHint",
  props: {
    format: {},
    label: {},
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { format: n, label: r, title: s, url: o } = ye(t), a = P(), d = P(!1), h = P(), p = (m) => {
      var y;
      m && (!m.target || (y = h.value) != null && y.contains(m.target)) || (d.value = !1, window.removeEventListener("mouseup", p));
    }, c = (m) => m.map(({ name: y, valueFormatted: E }) => ({
      label: y,
      value: E
    })), _ = (m) => m.map(({ name: y, rate: E, value: D }) => ({
      label: y,
      value: `${be(D).format("0,0")} (${be(E).format("0,0.00")}%)`
    })), T = (m) => {
      switch (n.value) {
        case "distribution":
          return c(m);
        case "rated_distribution":
          return _(m);
        default:
          throw new Error(`Unsupported format: ${n.value}`);
      }
    }, S = async () => {
      if (window.addEventListener("mouseup", p), a.value)
        return;
      const m = (await Ze(o.value)).data;
      a.value = T(m);
    }, v = async () => {
      d.value = !0, await S();
    };
    return (m, y) => (C(), L("div", {
      class: M(["cell-hint", { visible: d.value }]),
      ref_key: "root",
      ref: h,
      onMouseover: y[1] || (y[1] = () => v()),
      onMouseout: y[2] || (y[2] = () => p())
    }, [
      V("span", {
        class: "label",
        onClick: y[0] || (y[0] = je(() => v(), ["stop"]))
      }, N(g(r)), 1),
      R(xt, {
        visible: d.value,
        parentClass: "cell",
        popoverClass: "cell-hint-popover"
      }, {
        default: w(() => [
          g(s) ? (C(), L("div", zs, N(g(s)), 1)) : U("", !0),
          a.value ? (C(), L("div", js, [
            (C(!0), L(q, null, Te(a.value, ({ label: E, value: D }, H) => (C(), L("div", {
              key: `line-${H}`
            }, [
              V("b", Us, N(E) + ": ", 1),
              V("span", $s, N(D), 1)
            ]))), 128))
          ])) : (C(), I(Et, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ], 34));
  }
});
const nn = /* @__PURE__ */ _e(Ms, [["__scopeId", "data-v-9c7f570a"]]), Hs = (e) => (rn("data-v-7a1d1810"), e = e(), sn(), e), Vs = { class: "column-hint" }, qs = /* @__PURE__ */ Hs(() => /* @__PURE__ */ V("i", { class: "la la-question-circle" }, null, -1)), Js = { class: "popover-header" }, Ws = { class: "popover-body" }, Gs = /* @__PURE__ */ ge({
  __name: "ColumnHint",
  props: {
    description: {},
    title: {},
    visible: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { description: n, title: r, visible: s } = ye(t);
    return (o, a) => (C(), L("div", Vs, [
      qs,
      R(xt, {
        visible: g(s),
        parentClass: "cell",
        popoverClass: "column-hint-popover"
      }, {
        default: w(() => [
          V("div", Js, N(g(r)), 1),
          V("div", Ws, N(g(n)), 1)
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const Xs = /* @__PURE__ */ _e(Gs, [["__scopeId", "data-v-7a1d1810"]]), Ys = /* @__PURE__ */ ge({
  __name: "BodyPopover",
  props: {
    autoPosition: { type: Boolean, default: !1 },
    parentNode: {},
    popoverClass: {},
    visible: { type: Boolean }
  },
  setup(e) {
    const t = e, { autoPosition: n, parentNode: r, popoverClass: s, visible: o } = ye(t), a = P(), d = P(), h = P(), p = j(() => ({
      [(s == null ? void 0 : s.value) ?? ""]: !!s,
      visible: o.value
    })), c = j(() => {
      if (!(!n.value || a.value === void 0 || h.value === void 0))
        return {
          left: `${a.value}px`,
          top: `${h.value}px`
        };
    }), _ = () => {
      if (!d.value || !(r != null && r.value))
        return;
      const S = r.value.getBoundingClientRect();
      a.value = 0, h.value = 0, Ye(() => {
        const v = S.left, m = S.top + document.documentElement.scrollTop, y = d.value.$el.offsetWidth, E = (y - S.width) / 2;
        S.left - E < 0 ? a.value = v : S.left + E + S.width > document.body.clientWidth ? a.value = v - y + S.width : a.value = v - E;
        const D = d.value.$el.offsetHeight;
        S.bottom + D > document.body.clientHeight ? h.value = m - D : h.value = m + S.height;
      });
    }, T = n != null && n.value ? new ResizeObserver(() => _()) : void 0;
    return Xe(
      o,
      (S) => {
        !(n != null && n.value) || !T || (T.disconnect(), S && Ye(() => {
          _(), T.observe(d.value.$el);
        }));
      },
      {
        immediate: !0
      }
    ), (S, v) => (C(), I(on, { to: "#app > .app-container" }, [
      R(ln, {
        class: M(["no-spacing popover", p.value]),
        ref_key: "popover",
        ref: d,
        style: an(c.value)
      }, {
        default: w(() => [
          yt(S.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["class", "style"])
    ]));
  }
});
const Qs = /* @__PURE__ */ _e(Ys, [["__scopeId", "data-v-d948a8f2"]]), Zs = /* @__PURE__ */ ge({
  __name: "DetailsSelector",
  props: {
    labels: {},
    open: { type: Boolean, default: !1 },
    title: {}
  },
  emits: ["hideDetails", "showDetails"],
  setup(e, { emit: t }) {
    const n = e, { labels: r, open: s, title: o } = ye(n), a = P(!1), d = P(), h = P(), p = (T) => {
      var S, v;
      !T.target || (S = h.value) != null && S.contains(T.target) || (v = d.value) != null && v.$el.contains(T.target) || (a.value = !1, window.removeEventListener("mouseup", p));
    }, c = () => {
      if (s.value) {
        t("hideDetails");
        return;
      }
      if (a.value) {
        a.value = !1;
        return;
      }
      a.value = !0, window.addEventListener("mouseup", p);
    }, _ = (T) => {
      if (a.value = !1, s.value) {
        t("hideDetails");
        return;
      }
      t("showDetails", T);
    };
    return dr(() => {
      window.removeEventListener("mouseup", p);
    }), (T, S) => (C(), L("div", {
      class: "details-selector-container",
      ref_key: "root",
      ref: h,
      onClick: S[0] || (S[0] = je(() => c(), ["stop"]))
    }, [
      R(Z, {
        class: "details-selector",
        vertical: "center"
      }, {
        default: w(() => [
          g(o) ? (C(), I(z, {
            key: 0,
            mood: "important-alt",
            size: "small"
          }, {
            default: w(() => [
              F(N(g(o)), 1)
            ]),
            _: 1
          })) : U("", !0),
          R(Ie, {
            value: g(s) ? "chevron-up" : "chevron-down",
            mood: "important-alt",
            size: "large-2"
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      R(Qs, {
        ref_key: "popover",
        ref: d,
        parentNode: h.value,
        visible: a.value,
        autoPosition: "",
        popoverClass: "details-selector-popover"
      }, {
        default: w(() => [
          (C(!0), L(q, null, Te(g(r), (v, m) => (C(), I(z, {
            class: "dropdown-item",
            onClick: je(() => _(m), ["stop"]),
            contrast: ""
          }, {
            default: w(() => [
              F(N(v), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 256))
        ]),
        _: 1
      }, 8, ["parentNode", "visible"])
    ], 512));
  }
});
const Ks = /* @__PURE__ */ _e(Zs, [["__scopeId", "data-v-4f3c5e9b"]]), eo = { class: "pagination" }, to = ["onClick"], no = /* @__PURE__ */ ge({
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
    const n = e, { currentPageSize: r, id: s, pageNumber: o, pageRadius: a, pageSizeLabel: d, pageSizes: h, rowCount: p } = ye(n), c = j(() => Math.min(...h.value)), _ = j(() => Math.ceil(p.value / r.value)), T = j(
      () => h.value.reduce((m, y) => (m[y] = y.toString(), m), {})
    ), S = j(() => {
      const m = [];
      for (let y = a.value - 1; y > 0; y--)
        o.value > y && m.push(o.value - y);
      m.push(o.value);
      for (let y = 1; y < a.value; y++)
        o.value < _.value - y - 1 && m.push(o.value + y);
      return m;
    }), v = (m) => {
      r.value !== m && t("update:currentPageSize", m);
    };
    return (m, y) => (C(), L("div", eo, [
      g(p) > g(r) ? (C(), L(q, { key: 0 }, [
        g(o) > 0 ? (C(), I(z, {
          key: 0,
          class: "page",
          onClick: y[0] || (y[0] = () => t("update:pageNumber", 0)),
          mood: "important-alt"
        }, {
          default: w(() => [
            F("1")
          ]),
          _: 1
        })) : U("", !0),
        g(o) > g(a) ? (C(), I(z, {
          key: 1,
          class: "page-separator"
        }, {
          default: w(() => [
            F("…")
          ]),
          _: 1
        })) : U("", !0),
        (C(!0), L(q, null, Te(S.value, (E) => (C(), L("div", {
          class: M(["page", { current: E === g(o) }]),
          onClick: () => t("update:pageNumber", E),
          key: E
        }, N(E + 1), 11, to))), 128)),
        g(o) < _.value - g(a) - 1 ? (C(), I(z, {
          key: 2,
          class: "page-separator"
        }, {
          default: w(() => [
            F("…")
          ]),
          _: 1
        })) : U("", !0),
        g(o) < _.value - 1 ? (C(), I(z, {
          key: 3,
          class: "page",
          onClick: y[1] || (y[1] = () => t("update:pageNumber", _.value - 1)),
          mood: "important-alt"
        }, {
          default: w(() => [
            F(N(_.value), 1)
          ]),
          _: 1
        })) : U("", !0),
        R(z, { class: "page-size-label" }, {
          default: w(() => [
            F(N(g(d)), 1)
          ]),
          _: 1
        })
      ], 64)) : U("", !0),
      g(p) > c.value ? (C(), I(un, {
        key: 1,
        class: "page-size-selector",
        "onUpdate:modelValue": y[2] || (y[2] = (E) => v(parseInt(E.toString()))),
        id: g(s),
        items: T.value,
        modelValue: g(r)
      }, {
        item: w(({ item: E }) => [
          F(N(E), 1)
        ]),
        _: 1
      }, 8, ["id", "items", "modelValue"])) : U("", !0)
    ]));
  }
});
const ro = /* @__PURE__ */ _e(no, [["__scopeId", "data-v-764cc1be"]]), so = (e) => (rn("data-v-b4f986aa"), e = e(), sn(), e), oo = /* @__PURE__ */ so(() => /* @__PURE__ */ V("i", { class: "la la-eye secondary" }, null, -1)), ao = /* @__PURE__ */ ge({
  __name: "TrendChart",
  props: {
    formatter: { type: Function },
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { formatter: n, title: r, url: s } = ye(t), o = P(!1), a = P([]), d = P(), h = j(() => d.value ? Object.assign({}, d.value) : {}), p = j(() => {
      var y;
      switch ((y = d.value) == null ? void 0 : y.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return d.value[0];
        default:
          return d.value.slice(d.value.length / 2).reduce((E, D) => E + D, 0) / Math.ceil(d.value.length / 2);
      }
    }), c = j(() => {
      var y;
      switch ((y = d.value) == null ? void 0 : y.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return d.value[0];
        default:
          return d.value.slice(0, d.value.length / 2).reduce((E, D) => E + D, 0) / Math.floor(d.value.length / 2);
      }
    }), _ = j(() => c.value > p.value ? "negative" : c.value < p.value ? "positive" : "neutral"), T = j(() => {
      if (!d.value)
        return {};
      const y = new Array(d.value.length).fill(0).map(
        (E, D) => c.value + (p.value - c.value) * D / (d.value.length - 1)
      );
      return Object.assign({}, y);
    }), S = async () => {
      if (!d.value)
        return;
      const y = (await Ze({ url: s.value })).data;
      a.value = Object.keys(y), d.value = Object.values(y);
    }, v = () => {
      o.value = !1, window.removeEventListener("mouseup", v);
    }, m = async () => {
      o.value = !0, window.addEventListener("mouseup", v), await S();
    };
    return (y, E) => (C(), L("div", {
      class: "trend-chart-container",
      onClick: E[0] || (E[0] = je(() => m(), ["stop"]))
    }, [
      oo,
      R(xt, {
        visible: o.value,
        parentClass: "cell",
        popoverClass: "trend-chart-popover"
      }, {
        default: w(() => [
          g(r) ? (C(), I(ze, {
            key: 0,
            size: "small-3"
          }, {
            default: w(() => [
              F(N(g(r)), 1)
            ]),
            _: 1
          })) : U("", !0),
          d.value ? (C(), I(hr, {
            key: 1,
            activeLines: ["values"],
            formatters: { trend: g(n), values: g(n) },
            moods: { trend: { mood: _.value }, values: { mood: "important" } },
            styles: { trend: "line", values: "line" },
            values: { trend: T.value, values: h.value }
          }, {
            "x-axis-label": w(({ index: D }) => [
              F(N(a.value[D]), 1)
            ]),
            _: 1
          }, 8, ["formatters", "moods", "values"])) : (C(), I(Et, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const lo = /* @__PURE__ */ _e(ao, [["__scopeId", "data-v-b4f986aa"]]), io = { class: "common-table" }, uo = {
  key: 0,
  class: "controls d-flex justify-content-end mb-1"
}, co = ["onMouseover", "onMouseout"], fo = ["href"], po = ["href"], vo = ["onClick"], gt = 50, mo = /* @__PURE__ */ ge({
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
    uncolorizeLabel: {}
  },
  emits: ["move:column"],
  setup(e, { emit: t }) {
    const n = e, r = async (l, u) => typeof l == "function" ? await l(u) : (await Ze({
      ...l,
      params: {
        ...l.params,
        ...u
      }
    })).data, s = async (l, u) => typeof l == "function" ? await l(u) : (await Ze({
      ...l,
      params: {
        ...l.params ?? {},
        filter: u.inlineFilters.value,
        page_number: u.pageNumber,
        page_size: u.pageSize,
        order: u.orderBy,
        reversed: u.reversed
      }
    })).data, {
      cellClasses: o,
      clientCurrencyDecimal: a,
      clientCurrencySymbol: d,
      clientCurrencySymbolPrefix: h,
      colorMetrics: p,
      columns: c,
      columnDetails: _,
      columnLinks: T,
      comparisonColumns: S,
      defaultOrderBy: v,
      detailsColumn: m,
      detailsRequests: y,
      dragColumns: E,
      fixedColumnNumber: D,
      inlineFilterOperators: H,
      inversedKpis: K,
      primaryColumn: J,
      primaryColumnAlias: fe,
      request: we,
      rows: ae,
      shortenColumns: G,
      showInlineFilters: ke,
      showRowNumber: le,
      showPagination: st,
      showTopTotal: ot,
      total: pe,
      totalColumnKey: at,
      trendUrl: Ne
    } = ye(n), Fe = () => {
      const l = {};
      for (const u of Object.keys(c.value))
        u in H.value && (l[u] = {
          operator: Object.keys(H.value[u])[0],
          value: ""
        });
      return l;
    }, xe = P([]), ie = P({}), Se = P([]), Le = P({}), Ce = P([]), ve = P({}), A = P(!1), x = P(!1), k = P([]), X = P(!1), ee = P(Fe()), Oe = P(!0), Y = P(), me = P(0), Ee = P(20), He = P(0), re = P(), ue = P(), Nn = j(() => {
      const l = {};
      return x.value && (l.inline_filters = {
        icon: "filter"
      }), l;
    }), Fn = j(
      () => S != null && S.value ? Object.keys(S.value) : void 0
    ), Ln = j(
      () => Ce.value.reduce((l, u) => (l[u] = Is(c.value[u]), l), {})
    ), Ft = j(() => {
      if (y != null && y.value)
        return Object.entries(y.value).reduce((l, [u, { label: i }]) => (l[u] = i, l), {});
    }), Lt = j(() => [...xe.value].sort((l, u) => {
      const i = (() => {
        const b = it(
          Y.value[0].reduce((W, ce) => W[ce], l),
          c.value[Y.value[0][0]].type
        ), O = it(
          Y.value[0].reduce((W, ce) => W[ce], u),
          c.value[Y.value[0][0]].type
        );
        return b > O ? 1 : b < O ? -1 : 0;
      })();
      return Y.value[1] ? -i : i;
    })), Bt = j(() => !we.value || X.value ? Lt.value : Lt.value.slice(
      me.value * Ee.value,
      (me.value + 1) * Ee.value
    )), Bn = (l) => {
      Se.value.includes(l) || Se.value.push(l);
    }, Ve = (l, u) => !G.value || !G.value.includes(l) ? !1 : u.length > gt, Dn = (l) => !!l.tooltipTitle && !!l.tooltipDescription, In = (l, u) => {
      var b;
      const i = ((b = K == null ? void 0 : K.value) == null ? void 0 : b.includes(u)) ?? !1;
      return l > 0 ? i ? "negative" : "positive" : l < 0 ? i ? "positive" : "negative" : "neutral";
    }, Dt = (l, u, i) => {
      if (re.value)
        return te(
          re.value[l][u],
          S.value[u].type ?? c.value[l].type,
          i
        );
    }, te = (l, u, i) => {
      let b = it(l, u);
      switch (u) {
        case "float":
          return be(parseFloat(b)).format("0,0.00");
        case "int":
          return be(parseInt(b)).format("0,0");
        case "money": {
          let O = "0,0";
          a.value > 0 && (O += "." + "0".repeat(a.value));
          const W = be(parseFloat(b)).format(O);
          return h.value ? d.value + " " + W : W + " " + d.value;
        }
        case "money_capped": {
          const O = parseFloat(b.toFixed(a.value)) == 0;
          if (b > 0 && b < 1 && O) {
            const W = a.value === 0 ? 1 : parseFloat("0." + "0".repeat(a.value - 1) + "1");
            return h.value ? `< ${d.value} ${W}` : `< ${W} ${d.value}`;
          } else
            return te(l, "money", i);
        }
        case "percent": {
          let O = be(parseFloat(b)).format("0,0.00") + "%";
          return i === "difference" && b > 0 && (O = `+${O}`), O;
        }
        case "time":
          return `${te(Math.floor(parseInt(b) / 60), "int")}mn${te(
            parseInt(b) % 60,
            "int"
          )}s`;
        default:
          return b.toString();
      }
    }, zn = async (l, u) => {
      if (ie.value[l] && ie.value[l][u[J.value]])
        return ie.value[l][u[J.value]];
      const { rows: i } = await r(y.value[l].request, {
        row: u,
        primaryColumn: (fe == null ? void 0 : fe.value) ?? J.value,
        primaryColumnValue: u[J.value]
      });
      return ie.value[l] || (ie.value[l] = {}), ie.value[l][u[J.value]] = Object.values(i), ie.value[l][u[J.value]];
    }, It = (l, u) => {
      const i = new URL(l.url, location.origin);
      if (Array.isArray(l.columns))
        for (const b of l.columns)
          i.searchParams.set(b, u[b]);
      else
        for (const [b, O] of Object.entries(l.columns))
          i.searchParams.set(O, u[b]);
      return i;
    }, jn = (l, u) => {
      const i = new URL(_.value[l].baseUrl, location.origin);
      if (Array.isArray(_.value[l].columns))
        for (const b of _.value[l].columns)
          i.searchParams.set(b, u[b]);
      else
        for (const [b, O] of Object.entries(_.value[l].columns))
          i.searchParams.set(O, u[b]);
      return i.toString();
    }, Un = (l) => {
      if (l.totalUrl)
        return new URL(l.totalUrl).toString();
      const u = new URL(l.baseUrl);
      return u.searchParams.set("total", "true"), u.toString();
    }, $n = (l) => !G.value || !G.value.includes(l) ? -1 : k.value.indexOf(l), Mn = (l) => {
      if (l in ee.value)
        return ee.value[l].operator;
    }, Hn = (l) => {
      if (l in ee.value)
        return ee.value[l].value;
    }, lt = (l) => H.value[l], Vn = (l) => {
      const u = lt(l);
      if (!u)
        return;
      const i = ["normal", "small"];
      let b = 0;
      for (const O of Object.values(u)) {
        const W = i.indexOf(O.size ?? "normal");
        W > b && (b = W);
      }
      return {
        [`size-${i[b]}`]: !0
      };
    }, qn = (l) => {
      const u = lt(l);
      return u ? Object.entries(u).reduce((i, [b, O]) => (i[b] = O.label, i), {}) : {};
    }, Jn = (l) => c.value[l].type === "string" ? "text" : "number", zt = () => `Table_OrderBy_${location.pathname}`, Wn = () => `Table_PageSize_${location.pathname}`, it = (l, u) => {
      switch (u) {
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
    }, Gn = (l, u) => {
      if (!Ne)
        return "";
      const i = new URL(
        u ? Ne.value[u] : Ne.value,
        location.origin
      );
      return i.searchParams.set((fe == null ? void 0 : fe.value) ?? J.value, l[J.value]), i.toString();
    }, qe = (l, u, i) => Ve(l, u) ? [] : i ? (m == null ? void 0 : m.value) === l ? ["flex-grow-1", "text-left"] : G.value && G.value.includes(l) && Bt.value.some((b) => Ve(l, b[l])) ? ["flex-grow-1", "text-left"] : ["flex-grow-1"] : ["flew-grow-1"], Xn = (l) => l in H.value, Yn = () => {
      ke.value && (A.value = !1);
    }, jt = (l, u) => !(!(T != null && T.value) || !(u in T.value) || "disable_for" in T.value[u] && T.value[u].disable_for.includes(l[J.value])), Qn = (l, u) => {
      const [i] = Ce.value.splice(l, 1);
      Ce.value.splice(u, 0, i), t("move:column", { from: l, to: u });
    }, Zn = (l) => {
      const u = Se.value.indexOf(l);
      u < 0 || Se.value.splice(u, 1);
    }, Ut = (l, u) => {
      Le.value[l] = u;
    }, Be = (l, u) => !G.value || !G.value.includes(u) || l.length <= gt ? l : `${l.substring(0, gt - 3)}...`, Kn = (l) => {
      if (!ue.value)
        return;
      const u = {
        left: ue.value.$el.scrollLeft,
        top: ue.value.$el.scrollTop
      };
      delete ve.value[l[J.value]], Ye(() => {
        ue.value.$el.scrollTo(u);
      });
    }, er = (l, u) => {
      const i = l.target.value;
      Mt(u, { value: i });
    }, tr = (l, u) => {
      l.key === "Enter" && l.target.blur();
    }, nr = async (l, u) => {
      if (!ue.value)
        return;
      const i = {
        left: ue.value.$el.scrollLeft,
        top: ue.value.$el.scrollTop
      };
      Oe.value = !0, ve.value[u[J.value]] = await zn(l, u), Ye(() => {
        ue.value.$el.scrollTo(i), Oe.value = !1;
      });
    }, rr = async (l = !1) => {
      await or(l) || await sr(l) || await Ht(l);
    }, ut = async (l) => {
      await ct(l), me.value = l;
    }, $t = async (l) => {
      const u = Wn();
      if (l === void 0) {
        const i = localStorage.getItem(u);
        i && (Ee.value = parseInt(i));
      } else
        localStorage.setItem(u, l.toString()), await ct(0, l), me.value = 0, Ee.value = l;
    }, Mt = (l, { operator: u, value: i }) => {
      if (u || (u = Object.keys(lt(l))[0]), !u)
        return;
      const b = {
        ...ee.value[l],
        operator: u
      };
      i !== void 0 && (b.value = i), ee.value[l] = b, ut(0);
    }, sr = async (l) => {
      const u = (() => {
        for (const O in localStorage) {
          if (!O.startsWith("DataTables_"))
            continue;
          const W = O.substring(O.indexOf("/"));
          if (location.pathname !== W)
            return;
          const ce = localStorage.getItem(O);
          return ce ? JSON.parse(ce) : void 0;
        }
      })();
      if (!u || !u.order || !u.order[0] || typeof u.order[0][0] == "number")
        return !1;
      const i = u.order[0][0].lastIndexOf("-"), b = i === -1 ? [
        [u.order[0][0]],
        u.order[0][1] === "desc"
      ] : [
        [
          u.order[0][0].substring(0, i),
          u.order[0][0].substring(i + 1)
        ],
        u.order[0][1] === "desc"
      ];
      return await Re(b, !1, l), !0;
    }, Ht = async (l) => {
      if (v != null && v.value) {
        await Re(v.value, !1, l);
        return;
      }
      const [u, { colspan: i }] = Object.entries(c.value).find(
        ([b, { visible: O }]) => O
      );
      if (i === -1) {
        await Re([[u], !1], !1, l);
        return;
      }
      await Re(
        [
          [
            u,
            (S != null && S.value ? Object.keys(S.value)[0] : 0).toString()
          ],
          !1
        ],
        !1,
        l
      );
    }, or = async (l) => {
      const u = localStorage.getItem(zt());
      return u ? (await Re(JSON.parse(u), !1, l), !0) : !1;
    }, ar = async (l, u, i) => {
      if (!we.value)
        return !1;
      if (X.value)
        return !0;
      const b = await s(we.value, {
        inlineFilters: ee.value,
        pageNumber: l,
        pageSize: u,
        orderBy: i[0],
        reversed: i[1]
      });
      return xe.value = Object.values(b.rows), X.value = b.paginated !== !0, He.value = b.rowCount, b.detailedRows ? ve.value = b.detailedRows : ve.value = {}, b.total && (re.value = b.total), !0;
    }, lr = () => {
      if (!(ae != null && ae.value))
        return !1;
      let l = Object.values(ae.value);
      for (const [u, i] of Object.entries(ee.value))
        i.value && (l = l.filter(
          (b) => H.value[u][i.operator].callback(
            b[u],
            i.value
          )
        ));
      return xe.value = l, He.value = l.length, !0;
    }, ct = async (l, u, i) => {
      l === void 0 && (l = me.value), u === void 0 && (u = Ee.value), i === void 0 && (i = Y.value), Oe.value = !0, lr() || await ar(me.value, Ee.value, Y.value), Oe.value = !1;
    }, ir = () => {
      ke.value && (A.value = !0);
    }, ur = (l) => {
      if (!G.value || !G.value.includes(l))
        return;
      const u = $n(l);
      u >= 0 ? k.value.splice(u, 1) : k.value.push(l);
    }, cr = () => {
      x.value = !x.value, x.value && (ee.value = Fe());
    }, Re = async (l, u = !0, i = !0) => {
      me.value = 0, i && await ct(void 0, void 0, l), Y.value = l, u && localStorage.setItem(zt(), JSON.stringify(l));
    };
    return fr(() => {
      Ce.value = Object.keys(c.value), re.value = pe == null ? void 0 : pe.value, Promise.all([Ht(!1), $t()]).then(() => rr(!0));
    }), Xe(c, () => {
      ee.value = Fe();
    }), Xe(
      we,
      () => {
        X.value = !1, ut(0);
      },
      { deep: !0 }
    ), (l, u) => (C(), L("div", io, [
      g(st) ? (C(), L("div", uo, [
        R(ro, {
          "onUpdate:pageNumber": u[0] || (u[0] = (i) => ut(i)),
          "onUpdate:currentPageSize": u[1] || (u[1] = (i) => $t(i)),
          currentPageSize: Ee.value,
          pageNumber: me.value,
          pageSizeLabel: l.pageSizeLabel,
          rowCount: He.value
        }, null, 8, ["currentPageSize", "pageNumber", "pageSizeLabel", "rowCount"])
      ])) : U("", !0),
      V("div", {
        class: "table-container",
        onMouseover: u[7] || (u[7] = () => ir()),
        onMouseout: u[8] || (u[8] = () => Yn())
      }, [
        V("div", {
          class: M(["action-buttons", { active: A.value }])
        }, [
          g(ke) ? (C(), L("button", {
            key: 0,
            class: "btn btn-small btn-success",
            onClick: u[2] || (u[2] = () => cr())
          }, [
            V("div", {
              class: M(["las", x.value ? "la-trash" : "la-filter"])
            }, null, 2)
          ])) : U("", !0)
        ], 2),
        Y.value ? (C(), I(gr, {
          key: 0,
          ref_key: "table",
          ref: ue,
          onAddColoredMetric: u[3] || (u[3] = (i) => Bn(i)),
          "onMove:column": u[4] || (u[4] = ({ from: i, to: b }) => Qn(i, b)),
          onRemoveColoredMetric: u[5] || (u[5] = (i) => Zn(i)),
          "onUpdate:orderBy": u[6] || (u[6] = (i) => Re(i)),
          additionalHeaders: Nn.value,
          cellClasses: g(o),
          colorMetrics: g(p),
          coloredMetrics: Se.value,
          columns: Ln.value,
          comparisonColumnKeys: Fn.value,
          detailsRows: ve.value,
          dragColumns: g(E),
          fixedColumnNumber: g(D),
          inversedKpis: g(K),
          orderBy: Y.value,
          primaryColumn: g(J),
          rows: Bt.value,
          showRowNumber: g(le),
          showTotal: !!re.value,
          showTopTotal: g(ot)
        }, pr({
          colorizeLabel: w(({ enabled: i }) => [
            R(z, {
              mood: "white",
              size: "small"
            }, {
              default: w(() => [
                i ? (C(), L(q, { key: 0 }, [
                  F(N(l.uncolorizeLabel), 1)
                ], 64)) : (C(), L(q, { key: 1 }, [
                  F(N(l.colorizeLabel), 1)
                ], 64))
              ]),
              _: 2
            }, 1024)
          ]),
          columnRowNumber: w(() => [
            R(z, {
              contrast: "",
              size: "small"
            }, {
              default: w(() => [
                F("#")
              ]),
              _: 1
            })
          ]),
          rowNumber: w(({ value: i }) => [
            R(z, {
              contrast: "",
              size: "small"
            }, {
              default: w(() => [
                F(N(i), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          totalRowNumber: w(() => [
            R(z, {
              contrast: "",
              size: "small"
            }, {
              default: w(() => [
                F("#")
              ]),
              _: 1
            })
          ]),
          column: w(({ columnKey: i, isGhost: b }) => [
            V("div", {
              class: "d-flex align-items-center",
              onMouseover: () => Ut(i, !0),
              onMouseout: () => Ut(i, !1)
            }, [
              R(z, {
                contrast: "",
                size: "small"
              }, {
                default: w(() => [
                  F(N(g(c)[i].label), 1)
                ]),
                _: 2
              }, 1024),
              !b && Dn(g(c)[i]) ? (C(), I(Xs, {
                key: 0,
                description: g(c)[i].tooltipDescription,
                title: g(c)[i].tooltipTitle,
                visible: Le.value[i]
              }, null, 8, ["description", "title", "visible"])) : U("", !0)
            ], 40, co)
          ]),
          row: w(({ columnKey: i, index: b, row: O, spanIndex: W, subcolumnKey: ce, subindex: dt, value: Q }) => [
            yt(l.$slots, "row", vr(mr({
              columnKey: i,
              index: b,
              row: O,
              spanIndex: W,
              subcolumnKey: ce,
              subindex: dt,
              value: Q
            })), () => [
              dt === void 0 && i === "trend" ? (C(), I(lo, {
                key: 0,
                class: M(qe(i, Q, O.rowInfo.detailable)),
                formatter: (ft) => te(ft, "int"),
                title: l.trendChartTitle,
                url: Gn(O, ce)
              }, null, 8, ["class", "formatter", "title", "url"])) : O.rowInfo.detailable && i === g(m) ? (C(), L(q, { key: 1 }, [
                jt(O, i) && O.rowInfo.detailable ? (C(), I(z, {
                  key: 0,
                  class: M(qe(i, Q, O.rowInfo.detailable)),
                  contrast: "",
                  size: "small"
                }, {
                  default: w(() => [
                    V("a", {
                      class: "column-link",
                      href: It(g(T)[i], O).toString()
                    }, N(Be(te(Q, g(c)[i].type), i)), 9, fo)
                  ]),
                  _: 2
                }, 1032, ["class"])) : (C(), I(z, {
                  key: 1,
                  contrast: "",
                  size: "small"
                }, {
                  default: w(() => [
                    F(N(te(Q, g(c)[i].type)), 1)
                  ]),
                  _: 2
                }, 1024))
              ], 64)) : jt(O, i) && O.rowInfo.detailable ? (C(), I(z, {
                key: 2,
                class: M(qe(i, Q, O.rowInfo.detailable)),
                contrast: "",
                size: "small"
              }, {
                default: w(() => [
                  V("a", {
                    class: "column-link",
                    href: It(g(T)[i], O).toString()
                  }, N(Be(te(Q, g(c)[i].type), i)), 9, po)
                ]),
                _: 2
              }, 1032, ["class"])) : dt === void 0 && Q >= 0.01 && i in g(_) ? (C(), I(nn, {
                key: 3,
                format: g(_)[i].format,
                label: Be(te(Q, g(c)[i].type), i),
                title: g(_)[i].title,
                url: jn(i, O)
              }, null, 8, ["format", "label", "title", "url"])) : (C(), I(z, {
                key: 4,
                class: M(qe(i, Q, O.rowInfo.detailable)),
                contrast: "",
                size: "small"
              }, {
                default: w(() => [
                  F(N(Be(te(Q, g(c)[i].type), i)), 1)
                ]),
                _: 2
              }, 1032, ["class"])),
              Ve(i, Q) ? (C(), L("i", {
                key: 5,
                class: M(["flex-grow-1 expand-column fa", k.value.includes(i) ? "fa-compress-alt" : "fa-expand-alt"]),
                onClick: () => ur(i)
              }, null, 10, vo)) : U("", !0),
              Ft.value && O.rowInfo.detailable && i === g(m) ? (C(), L(q, { key: 6 }, [
                Ve(i, Q) ? U("", !0) : (C(), I(br, { key: 0 })),
                R(Ks, {
                  onHideDetails: () => Kn(O),
                  onShowDetails: (ft) => nr(ft, O),
                  labels: Ft.value,
                  open: ve.value[O[g(J)]] !== void 0,
                  title: l.detailsSelectorTitle
                }, null, 8, ["onHideDetails", "onShowDetails", "labels", "open", "title"])
              ], 64)) : U("", !0)
            ], !0)
          ]),
          additionalHeader: w(({ additionalHeader: i, columnKey: b }) => [
            i === "inline_filters" && Xn(b) ? (C(), L("div", {
              key: 0,
              class: M(["d-flex inline-filter", Vn(b)])
            }, [
              R(un, {
                class: "inline-filter-dropdown",
                "onUpdate:modelValue": (O) => Mt(b, { operator: O.toString() }),
                id: `additional_header_${b}`,
                items: qn(b),
                modelValue: Mn(b)
              }, {
                item: w(({ item: O }) => [
                  R(z, {
                    contrast: "",
                    size: "small"
                  }, {
                    default: w(() => [
                      F(N(O), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["onUpdate:modelValue", "id", "items", "modelValue"]),
              R(cn, {
                class: "flex-grow-1 inline-filter-input",
                onBlur: (O) => er(O, b),
                onKeyup: (O) => tr(O),
                modelValue: Hn(b),
                type: Jn(b)
              }, null, 8, ["onBlur", "onKeyup", "modelValue", "type"])
            ], 2)) : U("", !0)
          ]),
          total: w(({ columnKey: i, subcolumnKey: b, values: O }) => [
            yt(l.$slots, g(pe), {
              columnKey: i,
              subcolumnKey: b,
              values: O
            }, () => [
              l.totalTitle && i === g(at) ? (C(), I(z, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: w(() => [
                  F(N(l.totalTitle(He.value ?? xe.value.length)), 1)
                ]),
                _: 1
              })) : re.value ? (C(), L(q, { key: 1 }, [
                b && g(S) && g(S)[b].format === "difference" ? (C(), I(z, {
                  key: 0,
                  mood: In(re.value[i][b], i),
                  contrast: "",
                  size: "small"
                }, {
                  default: w(() => [
                    F(N(Dt(i, b, g(S)[b].format)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"])) : re.value && re.value[i] >= 0.01 && i in g(_) ? (C(), I(nn, {
                  key: 1,
                  format: g(_)[i].format,
                  label: Be(te(re.value[i], g(c)[i].type, g(S) && b ? g(S)[b].format : void 0), i),
                  title: g(_)[i].title,
                  url: Un(g(_)[i])
                }, null, 8, ["format", "label", "title", "url"])) : i !== "trend" ? (C(), I(z, {
                  key: 2,
                  contrast: "",
                  size: "small"
                }, {
                  default: w(() => [
                    b ? (C(), L(q, { key: 0 }, [
                      F(N(Dt(i, b, g(S) ? g(S)[b].format : void 0)), 1)
                    ], 64)) : (C(), L(q, { key: 1 }, [
                      F(N(te(re.value[i], g(c)[i].type)), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024)) : U("", !0)
              ], 64)) : U("", !0)
            ], !0)
          ]),
          _: 2
        }, [
          g(S) ? {
            name: "secondaryColumn",
            fn: w(({ subcolumnKey: i }) => [
              i ? (C(), I(z, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: w(() => [
                  F(N(g(S)[i].label), 1)
                ]),
                _: 2
              }, 1024)) : U("", !0)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "dragColumns", "fixedColumnNumber", "inversedKpis", "orderBy", "primaryColumn", "rows", "showRowNumber", "showTotal", "showTopTotal"])) : U("", !0)
      ], 32),
      V("div", {
        class: M(["loading-overlay", { visible: Oe.value }])
      }, [
        R(Et)
      ], 2)
    ]));
  }
});
const Lo = /* @__PURE__ */ _e(mo, [["__scopeId", "data-v-861a659b"]]), ho = ["onClick"], bo = ["onClick"], go = { class: "items" }, yo = /* @__PURE__ */ ge({
  __name: "KpiSelector",
  props: {
    applyLabel: {},
    columns: {},
    defaultValue: {},
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
    const n = e, { columns: r, defaultValue: s, groupNames: o, modelValue: a, showModalLabel: d } = ye(n), h = P(Object.keys(o.value)[0]), p = P([...a.value]), c = P([]), _ = P([]), T = P(""), S = P(void 0), v = P({ left: 0, top: 0 }), m = P({ left: 0, top: 0 }), y = P({ left: 0, top: 0 }), E = P(void 0), D = P(void 0), H = P(void 0), K = P(void 0), J = j(() => Object.fromEntries(
      Object.entries(r.value).filter(([A, x]) => x.fixed !== !0 && (T.value.trim() === "" || x.label.toLowerCase().includes(T.value.trim().toLowerCase())))
    )), fe = j(() => Object.keys(o.value).reduce((A, x) => (A[x] = Object.fromEntries(
      Object.entries(J.value).filter(([k, X]) => X.group === x)
    ), A), {})), we = j(() => h.value === void 0 ? void 0 : fe.value[h.value]), ae = j(() => Object.fromEntries(
      Object.entries(o.value).filter(([A, x]) => Object.values(J.value).some((k) => k.group === A))
    )), G = j(() => {
      if (!(D.value === void 0 || H.value === void 0 || K.value === void 0))
        return D.value + K.value - H.value - y.value.top;
    }), ke = j(() => {
      if (G.value !== void 0)
        return `${G.value}px`;
    }), le = j(() => {
      if (E.value === void 0 || G.value === void 0)
        return;
      const A = p.value.indexOf(E.value), x = A - 1 - p.value.slice(0, A).reverse().findIndex((Y) => r.value[Y].fixed === !0);
      let k = p.value.slice(A + 1).findIndex((Y) => r.value[Y].fixed === !0);
      k >= 0 ? k += A + 1 : k = p.value.length;
      const X = st(p.value[x]), ee = X.offsetHeight, Oe = Math.min(
        Math.round((G.value - X.offsetTop) / ee - 1),
        k - x - 1
      );
      return x + Oe + 1;
    }), st = (A) => _.value[p.value.indexOf(A)], ot = (A) => c.value[p.value.indexOf(A)], pe = (A = !1, x) => {
      x && x.target !== x.currentTarget || (A && (p.value = [...a.value]), S.value = !1, h.value = Object.keys(o.value)[0]);
    }, at = (A) => {
      const x = p.value.indexOf(A);
      x >= 0 && p.value.splice(x, 1);
    }, Ne = () => {
      p.value = [...s.value];
    }, Fe = (A) => {
      const x = [...A];
      t("update:modelValue", x), pe(!1);
    }, xe = (A) => {
      h.value = A.toString();
    }, ie = () => {
      S.value = !0;
    }, Se = (A) => {
      const x = p.value.indexOf(A);
      x >= 0 ? p.value.splice(x, 1) : p.value.push(A);
    }, Le = (A) => {
      K.value = A.clientY;
    }, Ce = () => {
      const A = le.value;
      if (E.value !== void 0 && A !== void 0) {
        const x = p.value.indexOf(E.value);
        p.value.splice(x, 1), p.value.splice(A, 0, E.value);
      }
      E.value = void 0, D.value = void 0, H.value = void 0, K.value = void 0, window.removeEventListener("mousemove", Le), window.removeEventListener("mouseup", Ce);
    }, ve = (A, x) => {
      E.value = x, D.value = ot(x).$el.offsetTop, H.value = A.clientY, K.value = A.clientY, window.addEventListener("mousemove", Le), window.addEventListener("mouseup", Ce);
    };
    return Xe(T, (A) => {
      A ? (!h.value || !(h.value in ae.value)) && (h.value = Object.keys(ae.value)[0]) : h.value || (h.value = Object.keys(ae.value)[0]);
    }), (A, x) => (C(), L(q, null, [
      R(Vt, {
        onClick: x[0] || (x[0] = () => ie()),
        label: g(d),
        mood: "neutral"
      }, null, 8, ["label"]),
      (C(), I(on, { to: "#app > .app-container" }, [
        R(Z, {
          class: M(["kpi-selector-container no-spacing", { visible: S.value, hidden: S.value === !1 }]),
          onClick: x[8] || (x[8] = je((k) => pe(!0, k), ["stop"])),
          column: "",
          horizontal: "center",
          vertical: "center"
        }, {
          default: w(() => [
            R(ln, { class: "kpi-selector" }, {
              default: w(() => [
                R(Z, {
                  class: "title",
                  vertical: "center"
                }, {
                  default: w(() => [
                    R(ze, {
                      class: "flex-max",
                      size: "large-2"
                    }, {
                      default: w(() => [
                        F(N(A.title), 1)
                      ]),
                      _: 1
                    }),
                    R(Z, {
                      class: "flex-max no-spacing search-container",
                      vertical: "center"
                    }, {
                      default: w(() => [
                        R(cn, {
                          class: "flex-max search",
                          modelValue: T.value,
                          "onUpdate:modelValue": x[1] || (x[1] = (k) => T.value = k),
                          placeholder: A.filterLabel
                        }, null, 8, ["modelValue", "placeholder"]),
                        R(Ie, {
                          class: "no-spacing",
                          value: "search-alt-2"
                        })
                      ]),
                      _: 1
                    }),
                    R(Z, {
                      class: "close-container flex-max no-spacing",
                      horizontal: "right"
                    }, {
                      default: w(() => [
                        R(Ie, {
                          class: "close",
                          onClick: x[2] || (x[2] = () => pe(!0)),
                          size: "large-3",
                          value: "x"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                R(Z, { class: "body flex-max no-spacing" }, {
                  default: w(() => [
                    h.value !== void 0 && we.value !== void 0 ? (C(), L(q, { key: 0 }, [
                      R(Z, {
                        class: "groups flex-max",
                        column: ""
                      }, {
                        default: w(() => [
                          R(ze, { size: "large-2" }, {
                            default: w(() => [
                              F(N(A.groupsTitle), 1)
                            ]),
                            _: 1
                          }),
                          R(pt, {
                            class: "flex-max no-spacing",
                            "onUpdate:scrollPosition": x[3] || (x[3] = (k) => v.value = k),
                            scrollPosition: v.value
                          }, {
                            default: w(() => [
                              (C(!0), L(q, null, Te(Object.entries(ae.value), ([k, X]) => (C(), L("div", {
                                class: M(["item no-spacing", { selected: h.value === k }]),
                                onClick: () => xe(k)
                              }, [
                                R(z, { size: "small" }, {
                                  default: w(() => [
                                    F(N(X), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ], 10, ho))), 256))
                            ]),
                            _: 1
                          }, 8, ["scrollPosition"])
                        ]),
                        _: 1
                      }),
                      R(Z, {
                        class: "group-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: w(() => [
                          R(ze, { size: "large-2" }, {
                            default: w(() => [
                              F(N(g(o)[h.value]), 1)
                            ]),
                            _: 1
                          }),
                          R(pt, {
                            class: "flex-max no-spacing",
                            "onUpdate:scrollPosition": x[4] || (x[4] = (k) => m.value = k),
                            scrollPosition: m.value
                          }, {
                            default: w(() => [
                              (C(!0), L(q, null, Te(Object.entries(we.value), ([k, X]) => (C(), L("div", {
                                class: M(["item no-spacing", { selected: p.value.includes(k) }]),
                                onClick: () => Se(k),
                                key: k
                              }, [
                                R(z, { size: "small" }, {
                                  default: w(() => [
                                    F(N(X.label), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ], 10, bo))), 128))
                            ]),
                            _: 1
                          }, 8, ["scrollPosition"])
                        ]),
                        _: 1
                      }),
                      R(Z, {
                        class: "enabled-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: w(() => [
                          R(Z, {
                            class: "header",
                            vertical: "center"
                          }, {
                            default: w(() => [
                              R(ze, {
                                class: "flex-max",
                                size: "large-2"
                              }, {
                                default: w(() => [
                                  F(N(A.orderTitle), 1)
                                ]),
                                _: 1
                              }),
                              R(z, {
                                class: "reset",
                                onClick: x[5] || (x[5] = () => Ne()),
                                mood: "important-alt",
                                size: "small"
                              }, {
                                default: w(() => [
                                  F(N(A.resetLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          R(pt, {
                            class: "flex-max no-spacing",
                            "onUpdate:scrollPosition": x[6] || (x[6] = (k) => y.value = k),
                            contentClass: E.value === void 0 ? void 0 : "dragged",
                            scrollPosition: y.value
                          }, {
                            default: w(() => [
                              V("div", go, [
                                (C(!0), L(q, null, Te(p.value, (k) => (C(), L("div", {
                                  class: "item-container no-spacing",
                                  ref_for: !0,
                                  ref_key: "enabledColumnContainers",
                                  ref: _
                                }, [
                                  V("div", {
                                    class: M(["separator-top no-spacing", { "place-after": le.value !== void 0 && E.value !== void 0 && k === p.value[le.value] && le.value < p.value.indexOf(E.value) }])
                                  }, null, 2),
                                  R(Z, {
                                    class: M(["item no-spacing", { dragged: k === E.value }]),
                                    ref_for: !0,
                                    ref_key: "enabledColumnElements",
                                    ref: c,
                                    style: an(k === E.value ? { top: ke.value } : void 0),
                                    vertical: "center"
                                  }, {
                                    default: w(() => [
                                      g(r)[k].fixed ? (C(), I(z, {
                                        key: 0,
                                        class: M(["flex-max", { fixed: g(r)[k].fixed }]),
                                        size: "small"
                                      }, {
                                        default: w(() => [
                                          F(N(g(r)[k].label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])) : (C(), L(q, { key: 1 }, [
                                        R(Ie, {
                                          class: "move",
                                          onMousedown: (X) => ve(X, k),
                                          value: "dots-vertical-rounded"
                                        }, null, 8, ["onMousedown"]),
                                        R(z, {
                                          class: "flex-max no-spacing",
                                          size: "small"
                                        }, {
                                          default: w(() => [
                                            F(N(g(r)[k].label), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        R(Ie, {
                                          class: "no-spacing remove",
                                          onClick: () => at(k),
                                          value: "trash"
                                        }, null, 8, ["onClick"])
                                      ], 64))
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "style"]),
                                  V("div", {
                                    class: M(["separator-bottom no-spacing", { "place-after": le.value !== void 0 && E.value !== void 0 && k === p.value[le.value] && le.value >= p.value.indexOf(E.value) }])
                                  }, null, 2)
                                ], 512))), 256))
                              ])
                            ]),
                            _: 1
                          }, 8, ["contentClass", "scrollPosition"])
                        ]),
                        _: 1
                      })
                    ], 64)) : (C(), I(Z, {
                      key: 1,
                      class: "flex-max",
                      horizontal: "center",
                      vertical: "center"
                    }, {
                      default: w(() => [
                        R(z, { size: "small" }, {
                          default: w(() => [
                            F(N(A.noColumnsFoundLabel), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }))
                  ]),
                  _: 1
                }),
                R(Z, {
                  class: "controls no-spacing",
                  horizontal: "right"
                }, {
                  default: w(() => [
                    R(Vt, {
                      onClick: x[7] || (x[7] = () => Fe(p.value)),
                      label: A.applyLabel,
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
const Bo = /* @__PURE__ */ _e(yo, [["__scopeId", "data-v-aaf5fd34"]]);
export {
  Lo as CommonTable,
  Bo as KpiSelector
};
