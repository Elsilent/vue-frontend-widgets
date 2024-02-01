import { defineComponent as ye, toRefs as _e, ref as P, openBlock as S, createElementBlock as L, normalizeClass as M, createElementVNode as V, withModifiers as je, toDisplayString as N, unref as g, createVNode as R, withCtx as w, createCommentVNode as U, Fragment as q, renderList as Te, createBlock as I, pushScopeId as rn, popScopeId as sn, computed as j, watch as Ye, nextTick as Qe, Teleport as on, normalizeStyle as an, renderSlot as yt, onUnmounted as dr, createTextVNode as F, onMounted as fr, createSlots as pr, normalizeProps as vr, guardReactiveProps as mr } from "vue";
import ge from "numeral";
import { L as Et, a as hr } from "./LineBarChart-96b2a178.js";
import { P as xt } from "./Popover-38d3223e.js";
import { _ as we } from "./_plugin-vue_export-helper-dad06003.js";
import { C as ln, A as Y, I as Ie } from "./Icon-8f2ed8ba.js";
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
const { toString: yr } = Object.prototype, { getPrototypeOf: Rt } = Object, et = ((e) => (t) => {
  const n = yr.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), oe = (e) => (e = e.toLowerCase(), (t) => et(t) === e), tt = (e) => (t) => typeof t === e, { isArray: Pe } = Array, Ue = tt("undefined");
function _r(e) {
  return e !== null && !Ue(e) && e.constructor !== null && !Ue(e.constructor) && ee(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const fn = oe("ArrayBuffer");
function wr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && fn(e.buffer), t;
}
const Sr = tt("string"), ee = tt("function"), pn = tt("number"), nt = (e) => e !== null && typeof e == "object", Cr = (e) => e === !0 || e === !1, We = (e) => {
  if (et(e) !== "object")
    return !1;
  const t = Rt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Or = oe("Date"), Er = oe("File"), xr = oe("Blob"), Rr = oe("FileList"), Tr = (e) => nt(e) && ee(e.pipe), Ar = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ee(e.append) && ((t = et(e)) === "formdata" || // detect form-data instance
  t === "object" && ee(e.toString) && e.toString() === "[object FormData]"));
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
    let c;
    for (r = 0; r < a; r++)
      c = o[r], t.call(null, e[c], c, e);
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
    We(t[o]) && We(r) ? t[o] = _t(t[o], r) : We(r) ? t[o] = _t({}, r) : Pe(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && $e(arguments[r], n);
  return t;
}
const Nr = (e, t, n, { allOwnKeys: r } = {}) => ($e(t, (s, o) => {
  n && ee(s) ? e[o] = dn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Fr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Lr = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Br = (e, t, n, r) => {
  let s, o, a;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      a = s[o], (!r || r(a, e, t)) && !c[a] && (t[a] = e[a], c[a] = !0);
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
    if (ee(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (ee(r)) {
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
  return !!(e && ee(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Yr = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (nt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Pe(r) ? [] : {};
        return $e(r, (a, c) => {
          const p = n(a, s + 1);
          !Ue(p) && (o[c] = p);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Qr = oe("AsyncFunction"), Zr = (e) => e && (nt(e) || ee(e)) && ee(e.then) && ee(e.catch), f = {
  isArray: Pe,
  isArrayBuffer: fn,
  isBuffer: _r,
  isFormData: Ar,
  isArrayBufferView: wr,
  isString: Sr,
  isNumber: pn,
  isBoolean: Cr,
  isObject: nt,
  isPlainObject: We,
  isUndefined: Ue,
  isDate: Or,
  isFile: Er,
  isBlob: xr,
  isRegExp: Hr,
  isFunction: ee,
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
  kindOf: et,
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
  return f.toFlatObject(e, a, function(p) {
    return p !== Error.prototype;
  }, (c) => c !== "isAxiosError"), B.call(a, e.message, t, n, r, s), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
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
function rt(e, t, n) {
  if (!f.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = f.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, m) {
    return !f.isUndefined(m[h]);
  });
  const r = n.metaTokens, s = n.visitor || d, o = n.dots, a = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(t);
  if (!f.isFunction(s))
    throw new TypeError("visitor must be a function");
  function _(v) {
    if (v === null)
      return "";
    if (f.isDate(v))
      return v.toISOString();
    if (!p && f.isBlob(v))
      throw new B("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(v) || f.isTypedArray(v) ? p && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function d(v, h, m) {
    let A = v;
    if (v && !m && typeof v == "object") {
      if (f.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), v = JSON.stringify(v);
      else if (f.isArray(v) && es(v) || (f.isFileList(v) || f.endsWith(h, "[]")) && (A = f.toArray(v)))
        return h = wn(h), A.forEach(function(H, ae) {
          !(f.isUndefined(H) || H === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Wt([h], ae, o) : a === null ? h : h + "[]",
            _(H)
          );
        }), !1;
    }
    return wt(v) ? !0 : (t.append(Wt(m, h, o), _(v)), !1);
  }
  const y = [], T = Object.assign(ts, {
    defaultVisitor: d,
    convertValue: _,
    isVisitable: wt
  });
  function C(v, h) {
    if (!f.isUndefined(v)) {
      if (y.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      y.push(v), f.forEach(v, function(A, D) {
        (!(f.isUndefined(A) || A === null) && s.call(
          t,
          A,
          f.isString(D) ? D.trim() : D,
          h,
          T
        )) === !0 && C(A, h ? h.concat(D) : [D]);
      }), y.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return C(e), t;
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
  this._pairs = [], e && rt(e, this, t);
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
  return rt(e, new se.classes.URLSearchParams(), Object.assign({
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
    const c = Number.isFinite(+a), p = o >= n.length;
    return a = !a && f.isArray(s) ? s.length : a, p ? (f.hasOwnProp(s, a) ? s[a] = [s[a], r] : s[a] = r, !c) : ((!s[a] || !f.isObject(s[a])) && (s[a] = []), t(n, r, s[a], o) && f.isArray(s[a]) && (s[a] = ps(s[a])), !c);
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
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ds(t, this.formSerializer).toString();
      if ((c = f.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return rt(
          c ? { "files[]": t } : t,
          p && new p(),
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
      } catch (c) {
        if (a)
          throw c.name === "SyntaxError" ? B.from(c, B.ERR_BAD_RESPONSE, this, null, this.response) : c;
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
function Ge(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(Ge) : String(e);
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
class st {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, p, _) {
      const d = De(p);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const y = f.findKey(s, d);
      (!y || s[y] === void 0 || _ === !0 || _ === void 0 && s[y] !== !1) && (s[y || p] = Ge(c));
    }
    const a = (c, p) => f.forEach(c, (_, d) => o(_, d, p));
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
        const c = f.findKey(r, a);
        c && (!n || mt(r, r[c], c, n)) && (delete r[c], s = !0);
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
        n[a] = Ge(s), delete n[o];
        return;
      }
      const c = t ? ys(o) : String(o).trim();
      c !== o && delete n[o], n[c] = Ge(s), r[c] = !0;
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
      const c = De(a);
      r[c] || (_s(s, a), r[c] = !0);
    }
    return f.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
st.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors(st.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
f.freezeMethods(st);
const ve = st;
function ht(e, t) {
  const n = this || Pt, r = t || n, s = ve.from(r.headers);
  let o = r.data;
  return f.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
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
      write: function(n, r, s, o, a, c) {
        const p = [];
        p.push(n + "=" + encodeURIComponent(r)), f.isNumber(s) && p.push("expires=" + new Date(s).toGMTString()), f.isString(o) && p.push("path=" + o), f.isString(a) && p.push("domain=" + a), c === !0 && p.push("secure"), document.cookie = p.join("; ");
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
      const c = f.isString(a) ? s(a) : a;
      return c.protocol === r.protocol && c.host === r.host;
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
  return t = t !== void 0 ? t : 1e3, function(p) {
    const _ = Date.now(), d = r[o];
    a || (a = _), n[s] = p, r[s] = _;
    let y = o, T = 0;
    for (; y !== s; )
      T += n[y++], y = y % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), _ - a < t)
      return;
    const C = d && _ - d;
    return C ? Math.round(T * 1e3 / C) : void 0;
  };
}
function Qt(e, t) {
  let n = 0;
  const r = Rs(50, 250);
  return (s) => {
    const o = s.loaded, a = s.lengthComputable ? s.total : void 0, c = o - n, p = r(c), _ = o <= a;
    n = o;
    const d = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: c,
      rate: p || void 0,
      estimated: p && a && _ ? (a - o) / p : void 0,
      event: s
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const Ts = typeof XMLHttpRequest < "u", As = Ts && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = ve.from(e.headers).normalize(), a = e.responseType;
    let c;
    function p() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    let _;
    if (f.isFormData(s)) {
      if (se.hasStandardBrowserEnv || se.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((_ = o.getContentType()) !== !1) {
        const [v, ...h] = _ ? _.split(";").map((m) => m.trim()).filter(Boolean) : [];
        o.setContentType([v || "multipart/form-data", ...h].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", h = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(v + ":" + h));
    }
    const y = Tn(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), Cn(y, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function T() {
      if (!d)
        return;
      const v = ve.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), m = {
        data: !a || a === "text" || a === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: v,
        config: e,
        request: d
      };
      ws(function(D) {
        n(D), p();
      }, function(D) {
        r(D), p();
      }, m), d = null;
    }
    if ("onloadend" in d ? d.onloadend = T : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, d.onabort = function() {
      d && (r(new B("Request aborted", B.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      r(new B("Network Error", B.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let h = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const m = e.transitional || On;
      e.timeoutErrorMessage && (h = e.timeoutErrorMessage), r(new B(
        h,
        m.clarifyTimeoutError ? B.ETIMEDOUT : B.ECONNABORTED,
        e,
        d
      )), d = null;
    }, se.hasStandardBrowserEnv) {
      const v = Es(y) && e.xsrfCookieName && Ss.read(e.xsrfCookieName);
      v && o.set(e.xsrfHeaderName, v);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in d && f.forEach(o.toJSON(), function(h, m) {
      d.setRequestHeader(m, h);
    }), f.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), a && a !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", Qt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Qt(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (v) => {
      d && (r(!v || v.type ? new Me(null, e, d) : v), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const C = xs(y);
    if (C && se.protocols.indexOf(C) === -1) {
      r(new B("Unsupported protocol " + C + ":", B.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(s || null);
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
        ([c, p]) => `adapter ${c} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
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
  return bt(e), e.headers = ve.from(e.headers), e.data = ht.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), An.getAdapter(e.adapter || Pt.adapter)(e).then(function(r) {
    return bt(e), r.data = ht.call(
      e,
      e.transformResponse,
      r
    ), r.headers = ve.from(r.headers), r;
  }, function(r) {
    return Rn(r) || (bt(e), r && r.response && (r.response.data = ht.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = ve.from(r.response.headers))), Promise.reject(r);
  });
}
const en = (e) => e instanceof ve ? e.toJSON() : e;
function Ae(e, t) {
  t = t || {};
  const n = {};
  function r(_, d, y) {
    return f.isPlainObject(_) && f.isPlainObject(d) ? f.merge.call({ caseless: y }, _, d) : f.isPlainObject(d) ? f.merge({}, d) : f.isArray(d) ? d.slice() : d;
  }
  function s(_, d, y) {
    if (f.isUndefined(d)) {
      if (!f.isUndefined(_))
        return r(void 0, _, y);
    } else
      return r(_, d, y);
  }
  function o(_, d) {
    if (!f.isUndefined(d))
      return r(void 0, d);
  }
  function a(_, d) {
    if (f.isUndefined(d)) {
      if (!f.isUndefined(_))
        return r(void 0, _);
    } else
      return r(void 0, d);
  }
  function c(_, d, y) {
    if (y in t)
      return r(_, d);
    if (y in e)
      return r(void 0, _);
  }
  const p = {
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
    validateStatus: c,
    headers: (_, d) => s(en(_), en(d), !0)
  };
  return f.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const y = p[d] || s, T = y(e[d], t[d], d);
    f.isUndefined(T) && y !== c || (n[d] = T);
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
  return (o, a, c) => {
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
    )), t ? t(o, a, c) : !0;
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
      const c = e[o], p = c === void 0 || a(c, o, e);
      if (p !== !0)
        throw new B("option " + o + " must be " + p, B.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new B("Unknown option " + o, B.ERR_BAD_OPTION);
  }
}
const Ct = {
  assertOptions: ks,
  validators: kt
}, be = Ct.validators;
class Ze {
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
      silentJSONParsing: be.transitional(be.boolean),
      forcedJSONParsing: be.transitional(be.boolean),
      clarifyTimeoutError: be.transitional(be.boolean)
    }, !1), s != null && (f.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ct.assertOptions(s, {
      encode: be.function,
      serialize: be.function
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
    ), n.headers = ve.concat(a, o);
    const c = [];
    let p = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (p = p && h.synchronous, c.unshift(h.fulfilled, h.rejected));
    });
    const _ = [];
    this.interceptors.response.forEach(function(h) {
      _.push(h.fulfilled, h.rejected);
    });
    let d, y = 0, T;
    if (!p) {
      const v = [Kt.bind(this), void 0];
      for (v.unshift.apply(v, c), v.push.apply(v, _), T = v.length, d = Promise.resolve(n); y < T; )
        d = d.then(v[y++], v[y++]);
      return d;
    }
    T = c.length;
    let C = n;
    for (y = 0; y < T; ) {
      const v = c[y++], h = c[y++];
      try {
        C = v(C);
      } catch (m) {
        h.call(this, m);
        break;
      }
    }
    try {
      d = Kt.call(this, C);
    } catch (v) {
      return Promise.reject(v);
    }
    for (y = 0, T = _.length; y < T; )
      d = d.then(_[y++], _[y++]);
    return d;
  }
  getUri(t) {
    t = Ae(this.defaults, t);
    const n = Tn(t.baseURL, t.url);
    return Cn(n, t.params, t.paramsSerializer);
  }
}
f.forEach(["delete", "get", "head", "options"], function(t) {
  Ze.prototype[t] = function(n, r) {
    return this.request(Ae(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, a, c) {
      return this.request(Ae(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  Ze.prototype[t] = n(), Ze.prototype[t + "Form"] = n(!0);
});
const Xe = Ze;
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
      const a = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(s);
      return a.cancel = function() {
        r.unsubscribe(o);
      }, a;
    }, t(function(o, a, c) {
      r.reason || (r.reason = new Me(o, a, c), n(r.reason));
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
  const t = new Xe(e), n = dn(Xe.prototype.request, t);
  return f.extend(n, Xe.prototype, t, { allOwnKeys: !0 }), f.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return kn(Ae(e, s));
  }, n;
}
const $ = kn(Pt);
$.Axios = Xe;
$.CanceledError = Me;
$.CancelToken = Ns;
$.isCancel = Rn;
$.VERSION = Pn;
$.toFormData = rt;
$.AxiosError = B;
$.Cancel = $.CanceledError;
$.all = function(t) {
  return Promise.all(t);
};
$.spread = Fs;
$.isAxiosError = Ls;
$.mergeConfig = Ae;
$.AxiosHeaders = ve;
$.formToJSON = (e) => xn(f.isHTMLForm(e) ? new FormData(e) : e);
$.getAdapter = An.getAdapter;
$.HttpStatusCode = Bs;
$.default = $;
const Ke = $;
ge.localeData().delimiters.thousands = " ";
ge.localeData().delimiters.decimal = ",";
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
}, $s = { size: "small" }, Ms = /* @__PURE__ */ ye({
  __name: "CellHint",
  props: {
    format: {},
    label: {},
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { format: n, label: r, title: s, url: o } = _e(t), a = P(), c = P(!1), p = P(), _ = (h) => {
      var m;
      h && (!h.target || (m = p.value) != null && m.contains(h.target)) || (c.value = !1, window.removeEventListener("mouseup", _));
    }, d = (h) => h.map(({ name: m, valueFormatted: A }) => ({
      label: m,
      value: A
    })), y = (h) => h.map(({ name: m, rate: A, value: D }) => ({
      label: m,
      value: `${ge(D).format("0,0")} (${ge(A).format("0,0.00")}%)`
    })), T = (h) => {
      switch (n.value) {
        case "distribution":
          return d(h);
        case "rated_distribution":
          return y(h);
        default:
          throw new Error(`Unsupported format: ${n.value}`);
      }
    }, C = async () => {
      if (window.addEventListener("mouseup", _), a.value)
        return;
      const h = (await Ke(o.value)).data;
      a.value = T(h);
    }, v = async () => {
      c.value = !0, await C();
    };
    return (h, m) => (S(), L("div", {
      class: M(["cell-hint", { visible: c.value }]),
      ref_key: "root",
      ref: p,
      onMouseover: m[1] || (m[1] = () => v()),
      onMouseout: m[2] || (m[2] = () => _())
    }, [
      V("span", {
        class: "label",
        onClick: m[0] || (m[0] = je(() => v(), ["stop"]))
      }, N(g(r)), 1),
      R(xt, {
        visible: c.value,
        parentClass: "cell",
        popoverClass: "cell-hint-popover"
      }, {
        default: w(() => [
          g(s) ? (S(), L("div", zs, N(g(s)), 1)) : U("", !0),
          a.value ? (S(), L("div", js, [
            (S(!0), L(q, null, Te(a.value, ({ label: A, value: D }, H) => (S(), L("div", {
              key: `line-${H}`
            }, [
              V("b", Us, N(A) + ": ", 1),
              V("span", $s, N(D), 1)
            ]))), 128))
          ])) : (S(), I(Et, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ], 34));
  }
});
const nn = /* @__PURE__ */ we(Ms, [["__scopeId", "data-v-9c7f570a"]]), Hs = (e) => (rn("data-v-7a1d1810"), e = e(), sn(), e), Vs = { class: "column-hint" }, qs = /* @__PURE__ */ Hs(() => /* @__PURE__ */ V("i", { class: "la la-question-circle" }, null, -1)), Js = { class: "popover-header" }, Ws = { class: "popover-body" }, Gs = /* @__PURE__ */ ye({
  __name: "ColumnHint",
  props: {
    description: {},
    title: {},
    visible: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { description: n, title: r, visible: s } = _e(t);
    return (o, a) => (S(), L("div", Vs, [
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
const Xs = /* @__PURE__ */ we(Gs, [["__scopeId", "data-v-7a1d1810"]]), Ys = /* @__PURE__ */ ye({
  __name: "BodyPopover",
  props: {
    autoPosition: { type: Boolean, default: !1 },
    parentNode: {},
    popoverClass: {},
    visible: { type: Boolean }
  },
  setup(e) {
    const t = e, { autoPosition: n, parentNode: r, popoverClass: s, visible: o } = _e(t), a = P(), c = P(), p = P(), _ = j(() => ({
      [(s == null ? void 0 : s.value) ?? ""]: !!s,
      visible: o.value
    })), d = j(() => {
      if (!(!n.value || a.value === void 0 || p.value === void 0))
        return {
          left: `${a.value}px`,
          top: `${p.value}px`
        };
    }), y = () => {
      if (!c.value || !(r != null && r.value))
        return;
      const C = r.value.getBoundingClientRect();
      a.value = 0, p.value = 0, Qe(() => {
        const v = C.left, h = C.top + document.documentElement.scrollTop, m = c.value.$el.offsetWidth, A = (m - C.width) / 2;
        C.left - A < 0 ? a.value = v : C.left + A + C.width > document.body.clientWidth ? a.value = v - m + C.width : a.value = v - A;
        const D = c.value.$el.offsetHeight;
        C.bottom + D > document.body.clientHeight ? p.value = h - D : p.value = h + C.height;
      });
    }, T = n != null && n.value ? new ResizeObserver(() => y()) : void 0;
    return Ye(
      o,
      (C) => {
        !(n != null && n.value) || !T || (T.disconnect(), C && Qe(() => {
          y(), T.observe(c.value.$el);
        }));
      },
      {
        immediate: !0
      }
    ), (C, v) => (S(), I(on, { to: "#app > .app-container" }, [
      R(ln, {
        class: M(["no-spacing popover", _.value]),
        ref_key: "popover",
        ref: c,
        style: an(d.value)
      }, {
        default: w(() => [
          yt(C.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["class", "style"])
    ]));
  }
});
const Qs = /* @__PURE__ */ we(Ys, [["__scopeId", "data-v-d948a8f2"]]), Zs = /* @__PURE__ */ ye({
  __name: "DetailsSelector",
  props: {
    labels: {},
    open: { type: Boolean, default: !1 },
    title: {}
  },
  emits: ["hideDetails", "showDetails"],
  setup(e, { emit: t }) {
    const n = e, { labels: r, open: s, title: o } = _e(n), a = P(!1), c = P(), p = P(), _ = (T) => {
      var C, v;
      !T.target || (C = p.value) != null && C.contains(T.target) || (v = c.value) != null && v.$el.contains(T.target) || (a.value = !1, window.removeEventListener("mouseup", _));
    }, d = () => {
      if (s.value) {
        t("hideDetails");
        return;
      }
      if (a.value) {
        a.value = !1;
        return;
      }
      a.value = !0, window.addEventListener("mouseup", _);
    }, y = (T) => {
      if (a.value = !1, s.value) {
        t("hideDetails");
        return;
      }
      t("showDetails", T);
    };
    return dr(() => {
      window.removeEventListener("mouseup", _);
    }), (T, C) => (S(), L("div", {
      class: "details-selector-container",
      ref_key: "root",
      ref: p,
      onClick: C[0] || (C[0] = je(() => d(), ["stop"]))
    }, [
      R(Y, {
        class: "details-selector",
        vertical: "center"
      }, {
        default: w(() => [
          g(o) ? (S(), I(z, {
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
        ref: c,
        parentNode: p.value,
        visible: a.value,
        autoPosition: "",
        popoverClass: "details-selector-popover"
      }, {
        default: w(() => [
          (S(!0), L(q, null, Te(g(r), (v, h) => (S(), I(z, {
            class: "dropdown-item",
            onClick: je(() => y(h), ["stop"]),
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
const Ks = /* @__PURE__ */ we(Zs, [["__scopeId", "data-v-4f3c5e9b"]]), eo = { class: "pagination" }, to = ["onClick"], no = /* @__PURE__ */ ye({
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
    const n = e, { currentPageSize: r, id: s, pageNumber: o, pageRadius: a, pageSizeLabel: c, pageSizes: p, rowCount: _ } = _e(n), d = j(() => Math.min(...p.value)), y = j(() => Math.ceil(_.value / r.value)), T = j(
      () => p.value.reduce((h, m) => (h[m] = m.toString(), h), {})
    ), C = j(() => {
      const h = [];
      for (let m = a.value - 1; m > 0; m--)
        o.value > m && h.push(o.value - m);
      h.push(o.value);
      for (let m = 1; m < a.value; m++)
        o.value < y.value - m - 1 && h.push(o.value + m);
      return h;
    }), v = (h) => {
      r.value !== h && t("update:currentPageSize", h);
    };
    return (h, m) => (S(), L("div", eo, [
      g(_) > g(r) ? (S(), L(q, { key: 0 }, [
        g(o) > 0 ? (S(), I(z, {
          key: 0,
          class: "page",
          onClick: m[0] || (m[0] = () => t("update:pageNumber", 0)),
          mood: "important-alt"
        }, {
          default: w(() => [
            F("1")
          ]),
          _: 1
        })) : U("", !0),
        g(o) > g(a) ? (S(), I(z, {
          key: 1,
          class: "page-separator"
        }, {
          default: w(() => [
            F("…")
          ]),
          _: 1
        })) : U("", !0),
        (S(!0), L(q, null, Te(C.value, (A) => (S(), L("div", {
          class: M(["page", { current: A === g(o) }]),
          onClick: () => t("update:pageNumber", A),
          key: A
        }, N(A + 1), 11, to))), 128)),
        g(o) < y.value - g(a) - 1 ? (S(), I(z, {
          key: 2,
          class: "page-separator"
        }, {
          default: w(() => [
            F("…")
          ]),
          _: 1
        })) : U("", !0),
        g(o) < y.value - 1 ? (S(), I(z, {
          key: 3,
          class: "page",
          onClick: m[1] || (m[1] = () => t("update:pageNumber", y.value - 1)),
          mood: "important-alt"
        }, {
          default: w(() => [
            F(N(y.value), 1)
          ]),
          _: 1
        })) : U("", !0),
        R(z, { class: "page-size-label" }, {
          default: w(() => [
            F(N(g(c)), 1)
          ]),
          _: 1
        })
      ], 64)) : U("", !0),
      g(_) > d.value ? (S(), I(un, {
        key: 1,
        class: "page-size-selector",
        "onUpdate:modelValue": m[2] || (m[2] = (A) => v(parseInt(A.toString()))),
        id: g(s),
        items: T.value,
        modelValue: g(r)
      }, {
        item: w(({ item: A }) => [
          F(N(A), 1)
        ]),
        _: 1
      }, 8, ["id", "items", "modelValue"])) : U("", !0)
    ]));
  }
});
const ro = /* @__PURE__ */ we(no, [["__scopeId", "data-v-764cc1be"]]), so = (e) => (rn("data-v-b4f986aa"), e = e(), sn(), e), oo = /* @__PURE__ */ so(() => /* @__PURE__ */ V("i", { class: "la la-eye secondary" }, null, -1)), ao = /* @__PURE__ */ ye({
  __name: "TrendChart",
  props: {
    formatter: { type: Function },
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { formatter: n, title: r, url: s } = _e(t), o = P(!1), a = P([]), c = P(), p = j(() => c.value ? Object.assign({}, c.value) : {}), _ = j(() => {
      var m;
      switch ((m = c.value) == null ? void 0 : m.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return c.value[0];
        default:
          return c.value.slice(c.value.length / 2).reduce((A, D) => A + D, 0) / Math.ceil(c.value.length / 2);
      }
    }), d = j(() => {
      var m;
      switch ((m = c.value) == null ? void 0 : m.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return c.value[0];
        default:
          return c.value.slice(0, c.value.length / 2).reduce((A, D) => A + D, 0) / Math.floor(c.value.length / 2);
      }
    }), y = j(() => d.value > _.value ? "negative" : d.value < _.value ? "positive" : "neutral"), T = j(() => {
      if (!c.value)
        return {};
      const m = new Array(c.value.length).fill(0).map(
        (A, D) => d.value + (_.value - d.value) * D / (c.value.length - 1)
      );
      return Object.assign({}, m);
    }), C = async () => {
      if (!c.value)
        return;
      const m = (await Ke({ url: s.value })).data;
      a.value = Object.keys(m), c.value = Object.values(m);
    }, v = () => {
      o.value = !1, window.removeEventListener("mouseup", v);
    }, h = async () => {
      o.value = !0, window.addEventListener("mouseup", v), await C();
    };
    return (m, A) => (S(), L("div", {
      class: "trend-chart-container",
      onClick: A[0] || (A[0] = je(() => h(), ["stop"]))
    }, [
      oo,
      R(xt, {
        visible: o.value,
        parentClass: "cell",
        popoverClass: "trend-chart-popover"
      }, {
        default: w(() => [
          g(r) ? (S(), I(ze, {
            key: 0,
            size: "small-3"
          }, {
            default: w(() => [
              F(N(g(r)), 1)
            ]),
            _: 1
          })) : U("", !0),
          c.value ? (S(), I(hr, {
            key: 1,
            activeLines: ["values"],
            formatters: { trend: g(n), values: g(n) },
            moods: { trend: { mood: y.value }, values: { mood: "important" } },
            styles: { trend: "line", values: "line" },
            values: { trend: T.value, values: p.value }
          }, {
            "x-axis-label": w(({ index: D }) => [
              F(N(a.value[D]), 1)
            ]),
            _: 1
          }, 8, ["formatters", "moods", "values"])) : (S(), I(Et, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const lo = /* @__PURE__ */ we(ao, [["__scopeId", "data-v-b4f986aa"]]), io = { class: "common-table" }, uo = {
  key: 0,
  class: "controls d-flex justify-content-end mb-1"
}, co = ["onMouseover", "onMouseout"], fo = ["href"], po = ["href"], vo = ["onClick"], gt = 50, mo = /* @__PURE__ */ ye({
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
    const n = e, r = async (l, u) => typeof l == "function" ? await l(u) : (await Ke({
      ...l,
      params: {
        ...l.params,
        ...u
      }
    })).data, s = async (l, u) => typeof l == "function" ? await l(u) : (await Ke({
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
      clientCurrencySymbol: c,
      clientCurrencySymbolPrefix: p,
      colorMetrics: _,
      columns: d,
      columnDetails: y,
      columnLinks: T,
      comparisonColumns: C,
      defaultOrderBy: v,
      detailsColumn: h,
      detailsRequests: m,
      dragColumns: A,
      fixedColumnNumber: D,
      inlineFilterOperators: H,
      inversedKpis: ae,
      primaryColumn: W,
      primaryColumnAlias: le,
      request: ie,
      rows: ue,
      shortenColumns: Q,
      showInlineFilters: te,
      showRowNumber: ot,
      showPagination: at,
      showTopTotal: ke,
      total: Ce,
      totalColumnKey: He,
      trendUrl: Ne
    } = _e(n), Fe = () => {
      const l = {};
      for (const u of Object.keys(d.value))
        u in H.value && (l[u] = {
          operator: Object.keys(H.value[u])[0],
          value: ""
        });
      return l;
    }, Oe = P([]), ce = P({}), me = P([]), Le = P({}), Ee = P([]), x = P({}), E = P(!1), k = P(!1), G = P([]), xe = P(!1), Z = P(Fe()), de = P(!0), re = P(), he = P(0), Se = P(20), Ve = P(0), ne = P(), fe = P(), Nn = j(() => {
      const l = {};
      return k.value && (l.inline_filters = {
        icon: "filter"
      }), l;
    }), Fn = j(
      () => C != null && C.value ? Object.keys(C.value) : void 0
    ), Ln = j(
      () => Ee.value.reduce((l, u) => (l[u] = Is(d.value[u]), l), {})
    ), Ft = j(() => {
      if (m != null && m.value)
        return Object.entries(m.value).reduce((l, [u, { label: i }]) => (l[u] = i, l), {});
    }), Lt = j(() => [...Oe.value].sort((l, u) => {
      const i = (() => {
        const b = it(
          re.value[0].reduce((J, pe) => J[pe], l),
          d.value[re.value[0][0]].type
        ), O = it(
          re.value[0].reduce((J, pe) => J[pe], u),
          d.value[re.value[0][0]].type
        );
        return b > O ? 1 : b < O ? -1 : 0;
      })();
      return re.value[1] ? -i : i;
    })), Bt = j(() => !ie.value || xe.value ? Lt.value : Lt.value.slice(
      he.value * Se.value,
      (he.value + 1) * Se.value
    )), Bn = (l) => {
      me.value.includes(l) || me.value.push(l);
    }, qe = (l, u) => !Q.value || !Q.value.includes(l) ? !1 : u.length > gt, Dn = (l) => !!l.tooltipTitle && !!l.tooltipDescription, In = (l, u) => {
      var b;
      const i = ((b = ae == null ? void 0 : ae.value) == null ? void 0 : b.includes(u)) ?? !1;
      return l > 0 ? i ? "negative" : "positive" : l < 0 ? i ? "positive" : "negative" : "neutral";
    }, Dt = (l, u, i) => {
      if (ne.value)
        return K(
          ne.value[l][u],
          C.value[u].type ?? d.value[l].type,
          i
        );
    }, K = (l, u, i) => {
      let b = it(l, u);
      switch (u) {
        case "float":
          return ge(parseFloat(b)).format("0,0.00");
        case "int":
          return ge(parseInt(b)).format("0,0");
        case "money": {
          let O = "0,0";
          a.value > 0 && (O += "." + "0".repeat(a.value));
          const J = ge(parseFloat(b)).format(O);
          return p.value ? c.value + " " + J : J + " " + c.value;
        }
        case "money_capped": {
          const O = parseFloat(b.toFixed(a.value)) == 0;
          if (b > 0 && b < 1 && O) {
            const J = a.value === 0 ? 1 : parseFloat("0." + "0".repeat(a.value - 1) + "1");
            return p.value ? `< ${c.value} ${J}` : `< ${J} ${c.value}`;
          } else
            return K(l, "money", i);
        }
        case "percent": {
          let O = ge(parseFloat(b)).format("0,0.00") + "%";
          return i === "difference" && b > 0 && (O = `+${O}`), O;
        }
        case "time":
          return `${K(Math.floor(parseInt(b) / 60), "int")}mn${K(
            parseInt(b) % 60,
            "int"
          )}s`;
        default:
          return b.toString();
      }
    }, zn = async (l, u) => {
      if (ce.value[l] && ce.value[l][u[W.value]])
        return ce.value[l][u[W.value]];
      const { rows: i } = await r(m.value[l].request, {
        row: u,
        primaryColumn: (le == null ? void 0 : le.value) ?? W.value,
        primaryColumnValue: u[W.value]
      });
      return ce.value[l] || (ce.value[l] = {}), ce.value[l][u[W.value]] = Object.values(i), ce.value[l][u[W.value]];
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
      const i = new URL(y.value[l].baseUrl, location.origin);
      if (Array.isArray(y.value[l].columns))
        for (const b of y.value[l].columns)
          i.searchParams.set(b, u[b]);
      else
        for (const [b, O] of Object.entries(y.value[l].columns))
          i.searchParams.set(O, u[b]);
      return i.toString();
    }, Un = (l) => {
      if (l.totalUrl)
        return new URL(l.totalUrl).toString();
      const u = new URL(l.baseUrl);
      return u.searchParams.set("total", "true"), u.toString();
    }, $n = (l) => !Q.value || !Q.value.includes(l) ? -1 : G.value.indexOf(l), Mn = (l) => {
      if (l in Z.value)
        return Z.value[l].operator;
    }, Hn = (l) => {
      if (l in Z.value)
        return Z.value[l].value;
    }, lt = (l) => H.value[l], Vn = (l) => {
      const u = lt(l);
      if (!u)
        return;
      const i = ["normal", "small"];
      let b = 0;
      for (const O of Object.values(u)) {
        const J = i.indexOf(O.size ?? "normal");
        J > b && (b = J);
      }
      return {
        [`size-${i[b]}`]: !0
      };
    }, qn = (l) => {
      const u = lt(l);
      return u ? Object.entries(u).reduce((i, [b, O]) => (i[b] = O.label, i), {}) : {};
    }, Jn = (l) => d.value[l].type === "string" ? "text" : "number", zt = () => `Table_OrderBy_${location.pathname}`, Wn = () => `Table_PageSize_${location.pathname}`, it = (l, u) => {
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
      return i.searchParams.set((le == null ? void 0 : le.value) ?? W.value, l[W.value]), i.toString();
    }, Je = (l, u, i) => qe(l, u) ? [] : i ? (h == null ? void 0 : h.value) === l ? ["flex-grow-1", "text-left"] : Q.value && Q.value.includes(l) && Bt.value.some((b) => qe(l, b[l])) ? ["flex-grow-1", "text-left"] : ["flex-grow-1"] : ["flew-grow-1"], Xn = (l) => l in H.value, Yn = () => {
      te.value && (E.value = !1);
    }, jt = (l, u) => !(!(T != null && T.value) || !(u in T.value) || "disable_for" in T.value[u] && T.value[u].disable_for.includes(l[W.value])), Qn = (l, u) => {
      const [i] = Ee.value.splice(l, 1);
      Ee.value.splice(u, 0, i), t("move:column", { from: l, to: u });
    }, Zn = (l) => {
      const u = me.value.indexOf(l);
      u < 0 || me.value.splice(u, 1);
    }, Ut = (l, u) => {
      Le.value[l] = u;
    }, Be = (l, u) => !Q.value || !Q.value.includes(u) || l.length <= gt ? l : `${l.substring(0, gt - 3)}...`, Kn = (l) => {
      if (!fe.value)
        return;
      const u = {
        left: fe.value.$el.scrollLeft,
        top: fe.value.$el.scrollTop
      };
      delete x.value[l[W.value]], Qe(() => {
        fe.value.$el.scrollTo(u);
      });
    }, er = (l, u) => {
      const i = l.target.value;
      Mt(u, { value: i });
    }, tr = (l, u) => {
      l.key === "Enter" && l.target.blur();
    }, nr = async (l, u) => {
      if (!fe.value)
        return;
      const i = {
        left: fe.value.$el.scrollLeft,
        top: fe.value.$el.scrollTop
      };
      de.value = !0, x.value[u[W.value]] = await zn(l, u), Qe(() => {
        fe.value.$el.scrollTo(i), de.value = !1;
      });
    }, rr = async (l = !1) => {
      await or(l) || await sr(l) || await Ht(l);
    }, ut = async (l) => {
      await ct(l), he.value = l;
    }, $t = async (l) => {
      const u = Wn();
      if (l === void 0) {
        const i = localStorage.getItem(u);
        i && (Se.value = parseInt(i));
      } else
        localStorage.setItem(u, l.toString()), await ct(0, l), he.value = 0, Se.value = l;
    }, Mt = (l, { operator: u, value: i }) => {
      if (u || (u = Object.keys(lt(l))[0]), !u)
        return;
      const b = {
        ...Z.value[l],
        operator: u
      };
      i !== void 0 && (b.value = i), Z.value[l] = b, ut(0);
    }, sr = async (l) => {
      const u = (() => {
        for (const O in localStorage) {
          if (!O.startsWith("DataTables_"))
            continue;
          const J = O.substring(O.indexOf("/"));
          if (location.pathname !== J)
            return;
          const pe = localStorage.getItem(O);
          return pe ? JSON.parse(pe) : void 0;
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
      const [u, { colspan: i }] = Object.entries(d.value).find(
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
            (C != null && C.value ? Object.keys(C.value)[0] : 0).toString()
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
      if (!ie.value)
        return !1;
      if (xe.value)
        return !0;
      const b = await s(ie.value, {
        inlineFilters: Z.value,
        pageNumber: l,
        pageSize: u,
        orderBy: i[0],
        reversed: i[1]
      });
      return Oe.value = Object.values(b.rows), xe.value = b.paginated !== !0, Ve.value = b.rowCount, b.detailedRows ? x.value = b.detailedRows : x.value = {}, b.total && (ne.value = b.total), !0;
    }, lr = () => {
      if (!(ue != null && ue.value))
        return !1;
      let l = Object.values(ue.value);
      for (const [u, i] of Object.entries(Z.value))
        i.value && (l = l.filter(
          (b) => H.value[u][i.operator].callback(
            b[u],
            i.value
          )
        ));
      return Oe.value = l, Ve.value = l.length, !0;
    }, ct = async (l, u, i) => {
      l === void 0 && (l = he.value), u === void 0 && (u = Se.value), i === void 0 && (i = re.value), de.value = !0, lr() || await ar(he.value, Se.value, re.value), de.value = !1;
    }, ir = () => {
      te.value && (E.value = !0);
    }, ur = (l) => {
      if (!Q.value || !Q.value.includes(l))
        return;
      const u = $n(l);
      u >= 0 ? G.value.splice(u, 1) : G.value.push(l);
    }, cr = () => {
      k.value = !k.value, k.value && (Z.value = Fe());
    }, Re = async (l, u = !0, i = !0) => {
      he.value = 0, i && await ct(void 0, void 0, l), re.value = l, u && localStorage.setItem(zt(), JSON.stringify(l));
    };
    return fr(() => {
      Ee.value = Object.keys(d.value), ne.value = Ce == null ? void 0 : Ce.value, Promise.all([Ht(!1), $t()]).then(() => rr(!0));
    }), Ye(d, () => {
      Z.value = Fe();
    }), Ye(
      ie,
      () => {
        xe.value = !1, ut(0);
      },
      { deep: !0 }
    ), (l, u) => (S(), L("div", io, [
      g(at) ? (S(), L("div", uo, [
        R(ro, {
          "onUpdate:pageNumber": u[0] || (u[0] = (i) => ut(i)),
          "onUpdate:currentPageSize": u[1] || (u[1] = (i) => $t(i)),
          currentPageSize: Se.value,
          pageNumber: he.value,
          pageSizeLabel: l.pageSizeLabel,
          rowCount: Ve.value
        }, null, 8, ["currentPageSize", "pageNumber", "pageSizeLabel", "rowCount"])
      ])) : U("", !0),
      V("div", {
        class: "table-container",
        onMouseover: u[7] || (u[7] = () => ir()),
        onMouseout: u[8] || (u[8] = () => Yn())
      }, [
        V("div", {
          class: M(["action-buttons", { active: E.value }])
        }, [
          g(te) ? (S(), L("button", {
            key: 0,
            class: "btn btn-small btn-success",
            onClick: u[2] || (u[2] = () => cr())
          }, [
            V("div", {
              class: M(["las", k.value ? "la-trash" : "la-filter"])
            }, null, 2)
          ])) : U("", !0)
        ], 2),
        re.value ? (S(), I(gr, {
          key: 0,
          ref_key: "table",
          ref: fe,
          onAddColoredMetric: u[3] || (u[3] = (i) => Bn(i)),
          "onMove:column": u[4] || (u[4] = ({ from: i, to: b }) => Qn(i, b)),
          onRemoveColoredMetric: u[5] || (u[5] = (i) => Zn(i)),
          "onUpdate:orderBy": u[6] || (u[6] = (i) => Re(i)),
          additionalHeaders: Nn.value,
          cellClasses: g(o),
          colorMetrics: g(_),
          coloredMetrics: me.value,
          columns: Ln.value,
          comparisonColumnKeys: Fn.value,
          detailsRows: x.value,
          dragColumns: g(A),
          fixedColumnNumber: g(D),
          inversedKpis: g(ae),
          orderBy: re.value,
          primaryColumn: g(W),
          rows: Bt.value,
          showRowNumber: g(ot),
          showTotal: !!ne.value,
          showTopTotal: g(ke)
        }, pr({
          colorizeLabel: w(({ enabled: i }) => [
            R(z, {
              mood: "white",
              size: "small"
            }, {
              default: w(() => [
                i ? (S(), L(q, { key: 0 }, [
                  F(N(l.uncolorizeLabel), 1)
                ], 64)) : (S(), L(q, { key: 1 }, [
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
                  F(N(g(d)[i].label), 1)
                ]),
                _: 2
              }, 1024),
              !b && Dn(g(d)[i]) ? (S(), I(Xs, {
                key: 0,
                description: g(d)[i].tooltipDescription,
                title: g(d)[i].tooltipTitle,
                visible: Le.value[i]
              }, null, 8, ["description", "title", "visible"])) : U("", !0)
            ], 40, co)
          ]),
          row: w(({ columnKey: i, index: b, row: O, spanIndex: J, subcolumnKey: pe, subindex: dt, value: X }) => [
            yt(l.$slots, "row", vr(mr({
              columnKey: i,
              index: b,
              row: O,
              spanIndex: J,
              subcolumnKey: pe,
              subindex: dt,
              value: X
            })), () => [
              dt === void 0 && i === "trend" ? (S(), I(lo, {
                key: 0,
                class: M(Je(i, X, O.rowInfo.detailable)),
                formatter: (ft) => K(ft, "int"),
                title: l.trendChartTitle,
                url: Gn(O, pe)
              }, null, 8, ["class", "formatter", "title", "url"])) : O.rowInfo.detailable && i === g(h) ? (S(), L(q, { key: 1 }, [
                jt(O, i) && O.rowInfo.detailable ? (S(), I(z, {
                  key: 0,
                  class: M(Je(i, X, O.rowInfo.detailable)),
                  contrast: "",
                  size: "small"
                }, {
                  default: w(() => [
                    V("a", {
                      class: "column-link",
                      href: It(g(T)[i], O).toString()
                    }, N(Be(K(X, g(d)[i].type), i)), 9, fo)
                  ]),
                  _: 2
                }, 1032, ["class"])) : (S(), I(z, {
                  key: 1,
                  contrast: "",
                  size: "small"
                }, {
                  default: w(() => [
                    F(N(K(X, g(d)[i].type)), 1)
                  ]),
                  _: 2
                }, 1024))
              ], 64)) : jt(O, i) && O.rowInfo.detailable ? (S(), I(z, {
                key: 2,
                class: M(Je(i, X, O.rowInfo.detailable)),
                contrast: "",
                size: "small"
              }, {
                default: w(() => [
                  V("a", {
                    class: "column-link",
                    href: It(g(T)[i], O).toString()
                  }, N(Be(K(X, g(d)[i].type), i)), 9, po)
                ]),
                _: 2
              }, 1032, ["class"])) : dt === void 0 && X >= 0.01 && i in g(y) ? (S(), I(nn, {
                key: 3,
                format: g(y)[i].format,
                label: Be(K(X, g(d)[i].type), i),
                title: g(y)[i].title,
                url: jn(i, O)
              }, null, 8, ["format", "label", "title", "url"])) : (S(), I(z, {
                key: 4,
                class: M(Je(i, X, O.rowInfo.detailable)),
                contrast: "",
                size: "small"
              }, {
                default: w(() => [
                  F(N(Be(K(X, g(d)[i].type), i)), 1)
                ]),
                _: 2
              }, 1032, ["class"])),
              qe(i, X) ? (S(), L("i", {
                key: 5,
                class: M(["flex-grow-1 expand-column fa", G.value.includes(i) ? "fa-compress-alt" : "fa-expand-alt"]),
                onClick: () => ur(i)
              }, null, 10, vo)) : U("", !0),
              Ft.value && O.rowInfo.detailable && i === g(h) ? (S(), L(q, { key: 6 }, [
                qe(i, X) ? U("", !0) : (S(), I(br, { key: 0 })),
                R(Ks, {
                  onHideDetails: () => Kn(O),
                  onShowDetails: (ft) => nr(ft, O),
                  labels: Ft.value,
                  open: x.value[O[g(W)]] !== void 0,
                  title: l.detailsSelectorTitle
                }, null, 8, ["onHideDetails", "onShowDetails", "labels", "open", "title"])
              ], 64)) : U("", !0)
            ], !0)
          ]),
          additionalHeader: w(({ additionalHeader: i, columnKey: b }) => [
            i === "inline_filters" && Xn(b) ? (S(), L("div", {
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
            yt(l.$slots, g(Ce), {
              columnKey: i,
              subcolumnKey: b,
              values: O
            }, () => [
              l.totalTitle && i === g(He) ? (S(), I(z, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: w(() => [
                  F(N(l.totalTitle(Ve.value ?? Oe.value.length)), 1)
                ]),
                _: 1
              })) : ne.value ? (S(), L(q, { key: 1 }, [
                b && g(C) && g(C)[b].format === "difference" ? (S(), I(z, {
                  key: 0,
                  mood: In(ne.value[i][b], i),
                  contrast: "",
                  size: "small"
                }, {
                  default: w(() => [
                    F(N(Dt(i, b, g(C)[b].format)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"])) : ne.value && ne.value[i] >= 0.01 && i in g(y) ? (S(), I(nn, {
                  key: 1,
                  format: g(y)[i].format,
                  label: Be(K(ne.value[i], g(d)[i].type, g(C) && b ? g(C)[b].format : void 0), i),
                  title: g(y)[i].title,
                  url: Un(g(y)[i])
                }, null, 8, ["format", "label", "title", "url"])) : i !== "trend" ? (S(), I(z, {
                  key: 2,
                  contrast: "",
                  size: "small"
                }, {
                  default: w(() => [
                    b ? (S(), L(q, { key: 0 }, [
                      F(N(Dt(i, b, g(C) ? g(C)[b].format : void 0)), 1)
                    ], 64)) : (S(), L(q, { key: 1 }, [
                      F(N(K(ne.value[i], g(d)[i].type)), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024)) : U("", !0)
              ], 64)) : U("", !0)
            ], !0)
          ]),
          _: 2
        }, [
          g(C) ? {
            name: "secondaryColumn",
            fn: w(({ subcolumnKey: i }) => [
              i ? (S(), I(z, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: w(() => [
                  F(N(g(C)[i].label), 1)
                ]),
                _: 2
              }, 1024)) : U("", !0)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "dragColumns", "fixedColumnNumber", "inversedKpis", "orderBy", "primaryColumn", "rows", "showRowNumber", "showTotal", "showTopTotal"])) : U("", !0)
      ], 32),
      V("div", {
        class: M(["loading-overlay", { visible: de.value }])
      }, [
        R(Et)
      ], 2)
    ]));
  }
});
const Lo = /* @__PURE__ */ we(mo, [["__scopeId", "data-v-861a659b"]]), ho = ["onClick"], bo = ["onClick"], go = { class: "items" }, yo = /* @__PURE__ */ ye({
  __name: "KpiSelector",
  props: {
    applyLabel: {},
    columns: {},
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
    const n = e, { columns: r, groupNames: s, modelValue: o, showModalLabel: a } = _e(n), c = P(Object.keys(s.value)[0]), p = P([...o.value]), _ = P([]), d = P([]), y = P(""), T = P(void 0), C = P({ left: 0, top: 0 }), v = P({ left: 0, top: 0 }), h = P({ left: 0, top: 0 }), m = P(void 0), A = P(void 0), D = P(void 0), H = P(void 0), ae = j(() => Object.fromEntries(
      Object.entries(r.value).filter(([x, E]) => E.fixed !== !0 && (y.value.trim() === "" || E.label.toLowerCase().includes(y.value.trim().toLowerCase())))
    )), W = j(() => Object.keys(s.value).reduce((x, E) => (x[E] = Object.fromEntries(
      Object.entries(ae.value).filter(([k, G]) => G.group === E)
    ), x), {})), le = j(() => c.value === void 0 ? void 0 : W.value[c.value]), ie = j(() => Object.fromEntries(
      Object.entries(s.value).filter(([x, E]) => Object.values(ae.value).some((k) => k.group === x))
    )), ue = j(() => {
      if (!(A.value === void 0 || D.value === void 0 || H.value === void 0))
        return A.value + H.value - D.value - h.value.top;
    }), Q = j(() => {
      if (ue.value !== void 0)
        return `${ue.value}px`;
    }), te = j(() => {
      if (m.value === void 0 || ue.value === void 0)
        return;
      const x = p.value.indexOf(m.value), E = x - 1 - p.value.slice(0, x).reverse().findIndex((de) => r.value[de].fixed === !0);
      let k = p.value.slice(x + 1).findIndex((de) => r.value[de].fixed === !0);
      k >= 0 ? k += x + 1 : k = p.value.length;
      const G = ot(p.value[E]), xe = G.offsetHeight, Z = Math.min(
        Math.round((ue.value - G.offsetTop) / xe - 1),
        k - E - 1
      );
      return E + Z + 1;
    }), ot = (x) => d.value[p.value.indexOf(x)], at = (x) => _.value[p.value.indexOf(x)], ke = (x = !1, E) => {
      E && E.target !== E.currentTarget || (x && He(), T.value = !1, c.value = Object.keys(s.value)[0]);
    }, Ce = (x) => {
      const E = p.value.indexOf(x);
      E >= 0 && p.value.splice(E, 1);
    }, He = () => {
      p.value = [...o.value];
    }, Ne = (x) => {
      const E = [...x];
      t("update:modelValue", E), o.value = E, ke(!1);
    }, Fe = (x) => {
      c.value = x.toString();
    }, Oe = () => {
      T.value = !0;
    }, ce = (x) => {
      const E = p.value.indexOf(x);
      E >= 0 ? p.value.splice(E, 1) : p.value.push(x);
    }, me = (x) => {
      H.value = x.clientY;
    }, Le = () => {
      const x = te.value;
      if (m.value !== void 0 && x !== void 0) {
        const E = p.value.indexOf(m.value);
        p.value.splice(E, 1), p.value.splice(x, 0, m.value);
      }
      m.value = void 0, A.value = void 0, D.value = void 0, H.value = void 0, window.removeEventListener("mousemove", me), window.removeEventListener("mouseup", Le);
    }, Ee = (x, E) => {
      m.value = E, A.value = at(E).$el.offsetTop, D.value = x.clientY, H.value = x.clientY, window.addEventListener("mousemove", me), window.addEventListener("mouseup", Le);
    };
    return Ye(y, (x) => {
      x ? (!c.value || !(c.value in ie.value)) && (c.value = Object.keys(ie.value)[0]) : c.value || (c.value = Object.keys(ie.value)[0]);
    }), (x, E) => (S(), L(q, null, [
      R(Vt, {
        onClick: E[0] || (E[0] = () => Oe()),
        label: g(a),
        mood: "neutral"
      }, null, 8, ["label"]),
      (S(), I(on, { to: "#app > .app-container" }, [
        R(Y, {
          class: M(["kpi-selector-container no-spacing", { visible: T.value, hidden: T.value === !1 }]),
          onClick: E[8] || (E[8] = je((k) => ke(!0, k), ["stop"])),
          column: "",
          horizontal: "center",
          vertical: "center"
        }, {
          default: w(() => [
            R(ln, { class: "kpi-selector" }, {
              default: w(() => [
                R(Y, {
                  class: "title",
                  vertical: "center"
                }, {
                  default: w(() => [
                    R(ze, {
                      class: "flex-max",
                      size: "large-2"
                    }, {
                      default: w(() => [
                        F(N(x.title), 1)
                      ]),
                      _: 1
                    }),
                    R(Y, {
                      class: "flex-max no-spacing search-container",
                      vertical: "center"
                    }, {
                      default: w(() => [
                        R(cn, {
                          class: "flex-max search",
                          modelValue: y.value,
                          "onUpdate:modelValue": E[1] || (E[1] = (k) => y.value = k),
                          placeholder: x.filterLabel
                        }, null, 8, ["modelValue", "placeholder"]),
                        R(Ie, {
                          class: "no-spacing",
                          value: "search-alt-2"
                        })
                      ]),
                      _: 1
                    }),
                    R(Y, {
                      class: "close-container flex-max no-spacing",
                      horizontal: "right"
                    }, {
                      default: w(() => [
                        R(Ie, {
                          class: "close",
                          onClick: E[2] || (E[2] = () => ke(!0)),
                          size: "large-3",
                          value: "x"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                R(Y, { class: "body flex-max no-spacing" }, {
                  default: w(() => [
                    c.value !== void 0 && le.value !== void 0 ? (S(), L(q, { key: 0 }, [
                      R(Y, {
                        class: "groups flex-max",
                        column: ""
                      }, {
                        default: w(() => [
                          R(ze, { size: "large-2" }, {
                            default: w(() => [
                              F(N(x.groupsTitle), 1)
                            ]),
                            _: 1
                          }),
                          R(pt, {
                            class: "flex-max no-spacing",
                            "onUpdate:scrollPosition": E[3] || (E[3] = (k) => C.value = k),
                            scrollPosition: C.value
                          }, {
                            default: w(() => [
                              (S(!0), L(q, null, Te(Object.entries(ie.value), ([k, G]) => (S(), L("div", {
                                class: M(["item no-spacing", { selected: c.value === k }]),
                                onClick: () => Fe(k)
                              }, [
                                R(z, { size: "small" }, {
                                  default: w(() => [
                                    F(N(G), 1)
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
                      R(Y, {
                        class: "group-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: w(() => [
                          R(ze, { size: "large-2" }, {
                            default: w(() => [
                              F(N(g(s)[c.value]), 1)
                            ]),
                            _: 1
                          }),
                          R(pt, {
                            class: "flex-max no-spacing",
                            "onUpdate:scrollPosition": E[4] || (E[4] = (k) => v.value = k),
                            scrollPosition: v.value
                          }, {
                            default: w(() => [
                              (S(!0), L(q, null, Te(Object.entries(le.value), ([k, G]) => (S(), L("div", {
                                class: M(["item no-spacing", { selected: p.value.includes(k) }]),
                                onClick: () => ce(k),
                                key: k
                              }, [
                                R(z, { size: "small" }, {
                                  default: w(() => [
                                    F(N(G.label), 1)
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
                      R(Y, {
                        class: "enabled-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: w(() => [
                          R(Y, {
                            class: "header",
                            vertical: "center"
                          }, {
                            default: w(() => [
                              R(ze, {
                                class: "flex-max",
                                size: "large-2"
                              }, {
                                default: w(() => [
                                  F(N(x.orderTitle), 1)
                                ]),
                                _: 1
                              }),
                              R(z, {
                                class: "reset",
                                onClick: E[5] || (E[5] = () => He()),
                                mood: "important-alt",
                                size: "small"
                              }, {
                                default: w(() => [
                                  F(N(x.resetLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          R(pt, {
                            class: "flex-max no-spacing",
                            "onUpdate:scrollPosition": E[6] || (E[6] = (k) => h.value = k),
                            contentClass: m.value === void 0 ? void 0 : "dragged",
                            scrollPosition: h.value
                          }, {
                            default: w(() => [
                              V("div", go, [
                                (S(!0), L(q, null, Te(p.value, (k) => (S(), L("div", {
                                  class: "item-container no-spacing",
                                  ref_for: !0,
                                  ref_key: "enabledColumnContainers",
                                  ref: d
                                }, [
                                  V("div", {
                                    class: M(["separator-top no-spacing", { "place-after": te.value !== void 0 && m.value !== void 0 && k === p.value[te.value] && te.value < p.value.indexOf(m.value) }])
                                  }, null, 2),
                                  R(Y, {
                                    class: M(["item no-spacing", { dragged: k === m.value }]),
                                    ref_for: !0,
                                    ref_key: "enabledColumnElements",
                                    ref: _,
                                    style: an(k === m.value ? { top: Q.value } : void 0),
                                    vertical: "center"
                                  }, {
                                    default: w(() => [
                                      g(r)[k].fixed ? (S(), I(z, {
                                        key: 0,
                                        class: M(["flex-max", { fixed: g(r)[k].fixed }]),
                                        size: "small"
                                      }, {
                                        default: w(() => [
                                          F(N(g(r)[k].label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])) : (S(), L(q, { key: 1 }, [
                                        R(Ie, {
                                          class: "move",
                                          onMousedown: (G) => Ee(G, k),
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
                                          onClick: () => Ce(k),
                                          value: "trash"
                                        }, null, 8, ["onClick"])
                                      ], 64))
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "style"]),
                                  V("div", {
                                    class: M(["separator-bottom no-spacing", { "place-after": te.value !== void 0 && m.value !== void 0 && k === p.value[te.value] && te.value >= p.value.indexOf(m.value) }])
                                  }, null, 2)
                                ], 512))), 256))
                              ])
                            ]),
                            _: 1
                          }, 8, ["contentClass", "scrollPosition"])
                        ]),
                        _: 1
                      })
                    ], 64)) : (S(), I(Y, {
                      key: 1,
                      class: "flex-max",
                      horizontal: "center",
                      vertical: "center"
                    }, {
                      default: w(() => [
                        R(z, { size: "small" }, {
                          default: w(() => [
                            F(N(x.noColumnsFoundLabel), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }))
                  ]),
                  _: 1
                }),
                R(Y, {
                  class: "controls no-spacing",
                  horizontal: "right"
                }, {
                  default: w(() => [
                    R(Vt, {
                      onClick: E[7] || (E[7] = () => Ne(p.value)),
                      label: x.applyLabel,
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
const Bo = /* @__PURE__ */ we(yo, [["__scopeId", "data-v-913d6166"]]);
export {
  Lo as CommonTable,
  Bo as KpiSelector
};
