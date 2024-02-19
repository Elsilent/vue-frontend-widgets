import { defineComponent as ge, toRefs as ye, ref as P, openBlock as C, createElementBlock as D, normalizeClass as H, createElementVNode as W, withModifiers as Ue, toDisplayString as N, unref as w, createVNode as R, withCtx as S, createCommentVNode as M, Fragment as Q, renderList as Pe, createBlock as I, pushScopeId as sn, popScopeId as on, computed as U, watch as Ye, nextTick as Qe, Teleport as an, normalizeStyle as ln, renderSlot as _t, onUnmounted as dr, createTextVNode as L, onMounted as fr, createSlots as pr, normalizeProps as vr, guardReactiveProps as mr } from "vue";
import be from "numeral";
import { L as xt, a as hr } from "./LineBarChart-96b2a178.js";
import { P as Rt } from "./Popover-38d3223e.js";
import { _ as _e } from "./_plugin-vue_export-helper-dad06003.js";
import { C as un, A as K, I as ze } from "./Icon-8f2ed8ba.js";
import { I as z } from "./Info-54758b60.js";
import { D as cn, I as dn, B as qt } from "./Input-8e3a6104.js";
import { Separator as br } from "./marker.js";
import { T as gr, S as vt } from "./Table-b9985d3a.js";
import { H as je } from "./Header-8b49a8fe.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "./datetime-31a2b505.js";
function fn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: yr } = Object.prototype, { getPrototypeOf: Tt } = Object, et = ((e) => (t) => {
  const n = yr.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ae = (e) => (e = e.toLowerCase(), (t) => et(t) === e), tt = (e) => (t) => typeof t === e, { isArray: Ne } = Array, $e = tt("undefined");
function _r(e) {
  return e !== null && !$e(e) && e.constructor !== null && !$e(e.constructor) && re(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const pn = ae("ArrayBuffer");
function wr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && pn(e.buffer), t;
}
const Sr = tt("string"), re = tt("function"), vn = tt("number"), nt = (e) => e !== null && typeof e == "object", Cr = (e) => e === !0 || e === !1, We = (e) => {
  if (et(e) !== "object")
    return !1;
  const t = Tt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Or = ae("Date"), Er = ae("File"), xr = ae("Blob"), Rr = ae("FileList"), Tr = (e) => nt(e) && re(e.pipe), Ar = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || re(e.append) && ((t = et(e)) === "formdata" || // detect form-data instance
  t === "object" && re(e.toString) && e.toString() === "[object FormData]"));
}, Pr = ae("URLSearchParams"), kr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Me(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Ne(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let d;
    for (r = 0; r < a; r++)
      d = o[r], t.call(null, e[d], d, e);
  }
}
function mn(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const hn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), bn = (e) => !$e(e) && e !== hn;
function wt() {
  const { caseless: e } = bn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && mn(t, s) || s;
    We(t[o]) && We(r) ? t[o] = wt(t[o], r) : We(r) ? t[o] = wt({}, r) : Ne(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Me(arguments[r], n);
  return t;
}
const Nr = (e, t, n, { allOwnKeys: r } = {}) => (Me(t, (s, o) => {
  n && re(s) ? e[o] = fn(s, n) : e[o] = s;
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
    e = n !== !1 && Tt(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Dr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Ir = (e) => {
  if (!e)
    return null;
  if (Ne(e))
    return e;
  let t = e.length;
  if (!vn(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, zr = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Tt(Uint8Array)), jr = (e, t) => {
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
}, $r = ae("HTMLFormElement"), Mr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Jt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Hr = ae("RegExp"), gn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Me(n, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (r[o] = a || s);
  }), Object.defineProperties(e, r);
}, Vr = (e) => {
  gn(e, (t, n) => {
    if (re(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (re(r)) {
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
  return Ne(e) ? r(e) : r(String(e).split(t)), n;
}, Jr = () => {
}, Wr = (e, t) => (e = +e, Number.isFinite(e) ? e : t), mt = "abcdefghijklmnopqrstuvwxyz", Wt = "0123456789", yn = {
  DIGIT: Wt,
  ALPHA: mt,
  ALPHA_DIGIT: mt + mt.toUpperCase() + Wt
}, Gr = (e = 16, t = yn.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Xr(e) {
  return !!(e && re(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Yr = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (nt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Ne(r) ? [] : {};
        return Me(r, (a, d) => {
          const h = n(a, s + 1);
          !$e(h) && (o[d] = h);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Qr = ae("AsyncFunction"), Zr = (e) => e && (nt(e) || re(e)) && re(e.then) && re(e.catch), f = {
  isArray: Ne,
  isArrayBuffer: pn,
  isBuffer: _r,
  isFormData: Ar,
  isArrayBufferView: wr,
  isString: Sr,
  isNumber: vn,
  isBoolean: Cr,
  isObject: nt,
  isPlainObject: We,
  isUndefined: $e,
  isDate: Or,
  isFile: Er,
  isBlob: xr,
  isRegExp: Hr,
  isFunction: re,
  isStream: Tr,
  isURLSearchParams: Pr,
  isTypedArray: zr,
  isFileList: Rr,
  forEach: Me,
  merge: wt,
  extend: Nr,
  trim: kr,
  stripBOM: Fr,
  inherits: Lr,
  toFlatObject: Br,
  kindOf: et,
  kindOfTest: ae,
  endsWith: Dr,
  toArray: Ir,
  forEachEntry: jr,
  matchAll: Ur,
  isHTMLForm: $r,
  hasOwnProperty: Jt,
  hasOwnProp: Jt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: gn,
  freezeMethods: Vr,
  toObjectSet: qr,
  toCamelCase: Mr,
  noop: Jr,
  toFiniteNumber: Wr,
  findKey: mn,
  global: hn,
  isContextDefined: bn,
  ALPHABET: yn,
  generateString: Gr,
  isSpecCompliantForm: Xr,
  toJSONObject: Yr,
  isAsyncFn: Qr,
  isThenable: Zr
};
function F(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
f.inherits(F, Error, {
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
const _n = F.prototype, wn = {};
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
  wn[e] = { value: e };
});
Object.defineProperties(F, wn);
Object.defineProperty(_n, "isAxiosError", { value: !0 });
F.from = (e, t, n, r, s, o) => {
  const a = Object.create(_n);
  return f.toFlatObject(e, a, function(h) {
    return h !== Error.prototype;
  }, (d) => d !== "isAxiosError"), F.call(a, e.message, t, n, r, s), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const Kr = null;
function St(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function Sn(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Gt(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Sn(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function es(e) {
  return f.isArray(e) && !e.some(St);
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
  }, !1, function(m, g) {
    return !f.isUndefined(g[m]);
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
      throw new F("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(v) || f.isTypedArray(v) ? h && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function c(v, m, g) {
    let E = v;
    if (v && !g && typeof v == "object") {
      if (f.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), v = JSON.stringify(v);
      else if (f.isArray(v) && es(v) || (f.isFileList(v) || f.endsWith(m, "[]")) && (E = f.toArray(v)))
        return m = Sn(m), E.forEach(function(q, ee) {
          !(f.isUndefined(q) || q === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Gt([m], ee, o) : a === null ? m : m + "[]",
            p(q)
          );
        }), !1;
    }
    return St(v) ? !0 : (t.append(Gt(g, m, o), p(v)), !1);
  }
  const y = [], T = Object.assign(ts, {
    defaultVisitor: c,
    convertValue: p,
    isVisitable: St
  });
  function _(v, m) {
    if (!f.isUndefined(v)) {
      if (y.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      y.push(v), f.forEach(v, function(E, B) {
        (!(f.isUndefined(E) || E === null) && s.call(
          t,
          E,
          f.isString(B) ? B.trim() : B,
          m,
          T
        )) === !0 && _(E, m ? m.concat(B) : [B]);
      }), y.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
}
function Xt(e) {
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
function At(e, t) {
  this._pairs = [], e && rt(e, this, t);
}
const Cn = At.prototype;
Cn.append = function(t, n) {
  this._pairs.push([t, n]);
};
Cn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Xt);
  } : Xt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function ns(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function On(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ns, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = f.isURLSearchParams(t) ? t.toString() : new At(t, n).toString(r), o) {
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
const Yt = rs, En = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ss = typeof URLSearchParams < "u" ? URLSearchParams : At, os = typeof FormData < "u" ? FormData : null, as = typeof Blob < "u" ? Blob : null, ls = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ss,
    FormData: os,
    Blob: as
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, xn = typeof window < "u" && typeof document < "u", is = ((e) => xn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), us = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: xn,
  hasStandardBrowserEnv: is,
  hasStandardBrowserWebWorkerEnv: us
}, Symbol.toStringTag, { value: "Module" })), oe = {
  ...cs,
  ...ls
};
function ds(e, t) {
  return rt(e, new oe.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return oe.isNode && f.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
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
function Rn(e) {
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
const Pt = {
  transitional: En,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = f.isObject(t);
    if (o && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
      return s && s ? JSON.stringify(Rn(t)) : t;
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
        return rt(
          d ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), vs(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Pt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && f.isString(t) && (r && !this.responseType || s)) {
      const a = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (d) {
        if (a)
          throw d.name === "SyntaxError" ? F.from(d, F.ERR_BAD_RESPONSE, this, null, this.response) : d;
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
    FormData: oe.classes.FormData,
    Blob: oe.classes.Blob
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
  Pt.headers[e] = {};
});
const kt = Pt, ms = f.toObjectSet([
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
}, Qt = Symbol("internals");
function Ie(e) {
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
function ht(e, t, n, r, s) {
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
    function o(d, h, p) {
      const c = Ie(h);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const y = f.findKey(s, c);
      (!y || s[y] === void 0 || p === !0 || p === void 0 && s[y] !== !1) && (s[y || h] = Ge(d));
    }
    const a = (d, h) => f.forEach(d, (p, c) => o(p, c, h));
    return f.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : f.isString(t) && (t = t.trim()) && !gs(t) ? a(hs(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = Ie(t), t) {
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
    if (t = Ie(t), t) {
      const r = f.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ht(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(a) {
      if (a = Ie(a), a) {
        const d = f.findKey(r, a);
        d && (!n || ht(r, r[d], d, n)) && (delete r[d], s = !0);
      }
    }
    return f.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ht(this, this[o], o, t, !0)) && (delete this[o], s = !0);
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
      const d = t ? ys(o) : String(o).trim();
      d !== o && delete n[o], n[d] = Ge(s), r[d] = !0;
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
    const r = (this[Qt] = this[Qt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const d = Ie(a);
      r[d] || (_s(s, a), r[d] = !0);
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
const de = st;
function bt(e, t) {
  const n = this || kt, r = t || n, s = de.from(r.headers);
  let o = r.data;
  return f.forEach(e, function(d) {
    o = d.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Tn(e) {
  return !!(e && e.__CANCEL__);
}
function He(e, t, n) {
  F.call(this, e ?? "canceled", F.ERR_CANCELED, t, n), this.name = "CanceledError";
}
f.inherits(He, F, {
  __CANCEL__: !0
});
function ws(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new F(
    "Request failed with status code " + n.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Ss = oe.hasStandardBrowserEnv ? (
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
function An(e, t) {
  return e && !Cs(t) ? Os(e, t) : t;
}
const Es = oe.hasStandardBrowserEnv ? (
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
    let y = o, T = 0;
    for (; y !== s; )
      T += n[y++], y = y % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), p - a < t)
      return;
    const _ = c && p - c;
    return _ ? Math.round(T * 1e3 / _) : void 0;
  };
}
function Zt(e, t) {
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
      if (oe.hasStandardBrowserEnv || oe.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((p = o.getContentType()) !== !1) {
        const [v, ...m] = p ? p.split(";").map((g) => g.trim()).filter(Boolean) : [];
        o.setContentType([v || "multipart/form-data", ...m].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(v + ":" + m));
    }
    const y = An(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), On(y, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function T() {
      if (!c)
        return;
      const v = de.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), g = {
        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: v,
        config: e,
        request: c
      };
      ws(function(B) {
        n(B), h();
      }, function(B) {
        r(B), h();
      }, g), c = null;
    }
    if ("onloadend" in c ? c.onloadend = T : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, c.onabort = function() {
      c && (r(new F("Request aborted", F.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new F("Network Error", F.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const g = e.transitional || En;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), r(new F(
        m,
        g.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        e,
        c
      )), c = null;
    }, oe.hasStandardBrowserEnv) {
      const v = Es(y) && e.xsrfCookieName && Ss.read(e.xsrfCookieName);
      v && o.set(e.xsrfHeaderName, v);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in c && f.forEach(o.toJSON(), function(m, g) {
      c.setRequestHeader(g, m);
    }), f.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), a && a !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Zt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Zt(e.onUploadProgress)), (e.cancelToken || e.signal) && (d = (v) => {
      c && (r(!v || v.type ? new He(null, e, c) : v), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(d), e.signal && (e.signal.aborted ? d() : e.signal.addEventListener("abort", d)));
    const _ = xs(y);
    if (_ && oe.protocols.indexOf(_) === -1) {
      r(new F("Unsupported protocol " + _ + ":", F.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, Ct = {
  http: Kr,
  xhr: As
};
f.forEach(Ct, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Kt = (e) => `- ${e}`, Ps = (e) => f.isFunction(e) || e === null || e === !1, Pn = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let a;
      if (r = n, !Ps(n) && (r = Ct[(a = String(n)).toLowerCase()], r === void 0))
        throw new F(`Unknown adapter '${a}'`);
      if (r)
        break;
      s[a || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([d, h]) => `adapter ${d} ` + (h === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? o.length > 1 ? `since :
` + o.map(Kt).join(`
`) : " " + Kt(o[0]) : "as no adapter specified";
      throw new F(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ct
};
function gt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new He(null, e);
}
function en(e) {
  return gt(e), e.headers = de.from(e.headers), e.data = bt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Pn.getAdapter(e.adapter || kt.adapter)(e).then(function(r) {
    return gt(e), r.data = bt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = de.from(r.headers), r;
  }, function(r) {
    return Tn(r) || (gt(e), r && r.response && (r.response.data = bt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = de.from(r.response.headers))), Promise.reject(r);
  });
}
const tn = (e) => e instanceof de ? e.toJSON() : e;
function ke(e, t) {
  t = t || {};
  const n = {};
  function r(p, c, y) {
    return f.isPlainObject(p) && f.isPlainObject(c) ? f.merge.call({ caseless: y }, p, c) : f.isPlainObject(c) ? f.merge({}, c) : f.isArray(c) ? c.slice() : c;
  }
  function s(p, c, y) {
    if (f.isUndefined(c)) {
      if (!f.isUndefined(p))
        return r(void 0, p, y);
    } else
      return r(p, c, y);
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
  function d(p, c, y) {
    if (y in t)
      return r(p, c);
    if (y in e)
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
    headers: (p, c) => s(tn(p), tn(c), !0)
  };
  return f.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const y = h[c] || s, T = y(e[c], t[c], c);
    f.isUndefined(T) && y !== d || (n[c] = T);
  }), n;
}
const kn = "1.6.1", Nt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Nt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const nn = {};
Nt.transitional = function(t, n, r) {
  function s(o, a) {
    return "[Axios v" + kn + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
  }
  return (o, a, d) => {
    if (t === !1)
      throw new F(
        s(a, " has been removed" + (n ? " in " + n : "")),
        F.ERR_DEPRECATED
      );
    return n && !nn[a] && (nn[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, d) : !0;
  };
};
function ks(e, t, n) {
  if (typeof e != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], a = t[o];
    if (a) {
      const d = e[o], h = d === void 0 || a(d, o, e);
      if (h !== !0)
        throw new F("option " + o + " must be " + h, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new F("Unknown option " + o, F.ERR_BAD_OPTION);
  }
}
const Ot = {
  assertOptions: ks,
  validators: Nt
}, he = Ot.validators;
class Ze {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Yt(),
      response: new Yt()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = ke(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Ot.assertOptions(r, {
      silentJSONParsing: he.transitional(he.boolean),
      forcedJSONParsing: he.transitional(he.boolean),
      clarifyTimeoutError: he.transitional(he.boolean)
    }, !1), s != null && (f.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ot.assertOptions(s, {
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
    let c, y = 0, T;
    if (!h) {
      const v = [en.bind(this), void 0];
      for (v.unshift.apply(v, d), v.push.apply(v, p), T = v.length, c = Promise.resolve(n); y < T; )
        c = c.then(v[y++], v[y++]);
      return c;
    }
    T = d.length;
    let _ = n;
    for (y = 0; y < T; ) {
      const v = d[y++], m = d[y++];
      try {
        _ = v(_);
      } catch (g) {
        m.call(this, g);
        break;
      }
    }
    try {
      c = en.call(this, _);
    } catch (v) {
      return Promise.reject(v);
    }
    for (y = 0, T = p.length; y < T; )
      c = c.then(p[y++], p[y++]);
    return c;
  }
  getUri(t) {
    t = ke(this.defaults, t);
    const n = An(t.baseURL, t.url);
    return On(n, t.params, t.paramsSerializer);
  }
}
f.forEach(["delete", "get", "head", "options"], function(t) {
  Ze.prototype[t] = function(n, r) {
    return this.request(ke(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, a, d) {
      return this.request(ke(d || {}, {
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
class Ft {
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
      r.reason || (r.reason = new He(o, a, d), n(r.reason));
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
      token: new Ft(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Ns = Ft;
function Fs(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ls(e) {
  return f.isObject(e) && e.isAxiosError === !0;
}
const Et = {
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
Object.entries(Et).forEach(([e, t]) => {
  Et[t] = e;
});
const Bs = Et;
function Nn(e) {
  const t = new Xe(e), n = fn(Xe.prototype.request, t);
  return f.extend(n, Xe.prototype, t, { allOwnKeys: !0 }), f.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Nn(ke(e, s));
  }, n;
}
const $ = Nn(kt);
$.Axios = Xe;
$.CanceledError = He;
$.CancelToken = Ns;
$.isCancel = Tn;
$.VERSION = kn;
$.toFormData = rt;
$.AxiosError = F;
$.Cancel = $.CanceledError;
$.all = function(t) {
  return Promise.all(t);
};
$.spread = Fs;
$.isAxiosError = Ls;
$.mergeConfig = ke;
$.AxiosHeaders = de;
$.formToJSON = (e) => Rn(f.isHTMLForm(e) ? new FormData(e) : e);
$.getAdapter = Pn.getAdapter;
$.HttpStatusCode = Bs;
$.default = $;
const Ke = $;
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
      var g;
      m && (!m.target || (g = h.value) != null && g.contains(m.target)) || (d.value = !1, window.removeEventListener("mouseup", p));
    }, c = (m) => m.map(({ name: g, valueFormatted: E }) => ({
      label: g,
      value: E
    })), y = (m) => m.map(({ name: g, rate: E, value: B }) => ({
      label: g,
      value: `${be(B).format("0,0")} (${be(E).format("0,0.00")}%)`
    })), T = (m) => {
      switch (n.value) {
        case "distribution":
          return c(m);
        case "rated_distribution":
          return y(m);
        default:
          throw new Error(`Unsupported format: ${n.value}`);
      }
    }, _ = async () => {
      if (window.addEventListener("mouseup", p), a.value)
        return;
      const m = (await Ke(o.value)).data;
      a.value = T(m);
    }, v = async () => {
      d.value = !0, await _();
    };
    return (m, g) => (C(), D("div", {
      class: H(["cell-hint", { visible: d.value }]),
      ref_key: "root",
      ref: h,
      onMouseover: g[1] || (g[1] = () => v()),
      onMouseout: g[2] || (g[2] = () => p())
    }, [
      W("span", {
        class: "label",
        onClick: g[0] || (g[0] = Ue(() => v(), ["stop"]))
      }, N(w(r)), 1),
      R(Rt, {
        visible: d.value,
        parentClass: "cell",
        popoverClass: "cell-hint-popover"
      }, {
        default: S(() => [
          w(s) ? (C(), D("div", zs, N(w(s)), 1)) : M("", !0),
          a.value ? (C(), D("div", js, [
            (C(!0), D(Q, null, Pe(a.value, ({ label: E, value: B }, q) => (C(), D("div", {
              key: `line-${q}`
            }, [
              W("b", Us, N(E) + ": ", 1),
              W("span", $s, N(B), 1)
            ]))), 128))
          ])) : (C(), I(xt, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ], 34));
  }
});
const rn = /* @__PURE__ */ _e(Ms, [["__scopeId", "data-v-9c7f570a"]]), Hs = (e) => (sn("data-v-7a1d1810"), e = e(), on(), e), Vs = { class: "column-hint" }, qs = /* @__PURE__ */ Hs(() => /* @__PURE__ */ W("i", { class: "la la-question-circle" }, null, -1)), Js = { class: "popover-header" }, Ws = { class: "popover-body" }, Gs = /* @__PURE__ */ ge({
  __name: "ColumnHint",
  props: {
    description: {},
    title: {},
    visible: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { description: n, title: r, visible: s } = ye(t);
    return (o, a) => (C(), D("div", Vs, [
      qs,
      R(Rt, {
        visible: w(s),
        parentClass: "cell",
        popoverClass: "column-hint-popover"
      }, {
        default: S(() => [
          W("div", Js, N(w(r)), 1),
          W("div", Ws, N(w(n)), 1)
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
    const t = e, { autoPosition: n, parentNode: r, popoverClass: s, visible: o } = ye(t), a = P(), d = P(), h = P(), p = U(() => ({
      [(s == null ? void 0 : s.value) ?? ""]: !!s,
      visible: o.value
    })), c = U(() => {
      if (!(!n.value || a.value === void 0 || h.value === void 0))
        return {
          left: `${a.value}px`,
          top: `${h.value}px`
        };
    }), y = () => {
      if (!d.value || !(r != null && r.value))
        return;
      const _ = r.value.getBoundingClientRect();
      a.value = 0, h.value = 0, Qe(() => {
        const v = _.left, m = _.top + document.documentElement.scrollTop, g = d.value.$el.offsetWidth, E = (g - _.width) / 2;
        _.left - E < 0 ? a.value = v : _.left + E + _.width > document.body.clientWidth ? a.value = v - g + _.width : a.value = v - E;
        const B = d.value.$el.offsetHeight;
        _.bottom + B > document.body.clientHeight ? h.value = m - B : h.value = m + _.height;
      });
    }, T = n != null && n.value ? new ResizeObserver(() => y()) : void 0;
    return Ye(
      o,
      (_) => {
        !(n != null && n.value) || !T || (T.disconnect(), _ && Qe(() => {
          y(), T.observe(d.value.$el);
        }));
      },
      {
        immediate: !0
      }
    ), (_, v) => (C(), I(an, { to: "#app > .app-container" }, [
      R(un, {
        class: H(["no-spacing popover", p.value]),
        ref_key: "popover",
        ref: d,
        style: ln(c.value)
      }, {
        default: S(() => [
          _t(_.$slots, "default", {}, void 0, !0)
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
      var _, v;
      !T.target || (_ = h.value) != null && _.contains(T.target) || (v = d.value) != null && v.$el.contains(T.target) || (a.value = !1, window.removeEventListener("mouseup", p));
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
    }, y = (T) => {
      if (a.value = !1, s.value) {
        t("hideDetails");
        return;
      }
      t("showDetails", T);
    };
    return dr(() => {
      window.removeEventListener("mouseup", p);
    }), (T, _) => (C(), D("div", {
      class: "details-selector-container",
      ref_key: "root",
      ref: h,
      onClick: _[0] || (_[0] = Ue(() => c(), ["stop"]))
    }, [
      R(K, {
        class: "details-selector",
        vertical: "center"
      }, {
        default: S(() => [
          w(o) ? (C(), I(z, {
            key: 0,
            mood: "important-alt",
            size: "small"
          }, {
            default: S(() => [
              L(N(w(o)), 1)
            ]),
            _: 1
          })) : M("", !0),
          R(ze, {
            value: w(s) ? "chevron-up" : "chevron-down",
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
        default: S(() => [
          (C(!0), D(Q, null, Pe(w(r), (v, m) => (C(), I(z, {
            class: "dropdown-item",
            onClick: Ue(() => y(m), ["stop"]),
            contrast: ""
          }, {
            default: S(() => [
              L(N(v), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 256))
        ]),
        _: 1
      }, 8, ["parentNode", "visible"])
    ], 512));
  }
});
const Ks = /* @__PURE__ */ _e(Zs, [["__scopeId", "data-v-4d4dbc91"]]), eo = { class: "pagination" }, to = ["onClick"], no = /* @__PURE__ */ ge({
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
    const n = e, { currentPageSize: r, id: s, pageNumber: o, pageRadius: a, pageSizeLabel: d, pageSizes: h, rowCount: p } = ye(n), c = U(() => Math.min(...h.value)), y = U(() => Math.ceil(p.value / r.value)), T = U(
      () => h.value.reduce((m, g) => (m[g] = g.toString(), m), {})
    ), _ = U(() => {
      const m = [];
      for (let g = a.value - 1; g > 0; g--)
        o.value > g && m.push(o.value - g);
      m.push(o.value);
      for (let g = 1; g < a.value; g++)
        o.value < y.value - g - 1 && m.push(o.value + g);
      return m;
    }), v = (m) => {
      r.value !== m && t("update:currentPageSize", m);
    };
    return (m, g) => (C(), D("div", eo, [
      w(p) > w(r) ? (C(), D(Q, { key: 0 }, [
        w(o) > 0 ? (C(), I(z, {
          key: 0,
          class: "page",
          onClick: g[0] || (g[0] = () => t("update:pageNumber", 0)),
          mood: "important-alt"
        }, {
          default: S(() => [
            L("1")
          ]),
          _: 1
        })) : M("", !0),
        w(o) > w(a) ? (C(), I(z, {
          key: 1,
          class: "page-separator"
        }, {
          default: S(() => [
            L("…")
          ]),
          _: 1
        })) : M("", !0),
        (C(!0), D(Q, null, Pe(_.value, (E) => (C(), D("div", {
          class: H(["page", { current: E === w(o) }]),
          onClick: () => t("update:pageNumber", E),
          key: E
        }, N(E + 1), 11, to))), 128)),
        w(o) < y.value - w(a) - 1 ? (C(), I(z, {
          key: 2,
          class: "page-separator"
        }, {
          default: S(() => [
            L("…")
          ]),
          _: 1
        })) : M("", !0),
        w(o) < y.value - 1 ? (C(), I(z, {
          key: 3,
          class: "page",
          onClick: g[1] || (g[1] = () => t("update:pageNumber", y.value - 1)),
          mood: "important-alt"
        }, {
          default: S(() => [
            L(N(y.value), 1)
          ]),
          _: 1
        })) : M("", !0),
        R(z, { class: "page-size-label" }, {
          default: S(() => [
            L(N(w(d)), 1)
          ]),
          _: 1
        })
      ], 64)) : M("", !0),
      w(p) > c.value ? (C(), I(cn, {
        key: 1,
        class: "page-size-selector",
        "onUpdate:modelValue": g[2] || (g[2] = (E) => v(parseInt(E.toString()))),
        id: w(s),
        items: T.value,
        modelValue: w(r)
      }, {
        item: S(({ item: E }) => [
          L(N(E), 1)
        ]),
        _: 1
      }, 8, ["id", "items", "modelValue"])) : M("", !0)
    ]));
  }
});
const ro = /* @__PURE__ */ _e(no, [["__scopeId", "data-v-764cc1be"]]), so = (e) => (sn("data-v-b4f986aa"), e = e(), on(), e), oo = /* @__PURE__ */ so(() => /* @__PURE__ */ W("i", { class: "la la-eye secondary" }, null, -1)), ao = /* @__PURE__ */ ge({
  __name: "TrendChart",
  props: {
    formatter: { type: Function },
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { formatter: n, title: r, url: s } = ye(t), o = P(!1), a = P([]), d = P(), h = U(() => d.value ? Object.assign({}, d.value) : {}), p = U(() => {
      var g;
      switch ((g = d.value) == null ? void 0 : g.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return d.value[0];
        default:
          return d.value.slice(d.value.length / 2).reduce((E, B) => E + B, 0) / Math.ceil(d.value.length / 2);
      }
    }), c = U(() => {
      var g;
      switch ((g = d.value) == null ? void 0 : g.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return d.value[0];
        default:
          return d.value.slice(0, d.value.length / 2).reduce((E, B) => E + B, 0) / Math.floor(d.value.length / 2);
      }
    }), y = U(() => c.value > p.value ? "negative" : c.value < p.value ? "positive" : "neutral"), T = U(() => {
      if (!d.value)
        return {};
      const g = new Array(d.value.length).fill(0).map(
        (E, B) => c.value + (p.value - c.value) * B / (d.value.length - 1)
      );
      return Object.assign({}, g);
    }), _ = async () => {
      if (!d.value)
        return;
      const g = (await Ke({ url: s.value })).data;
      a.value = Object.keys(g), d.value = Object.values(g);
    }, v = () => {
      o.value = !1, window.removeEventListener("mouseup", v);
    }, m = async () => {
      o.value = !0, window.addEventListener("mouseup", v), await _();
    };
    return (g, E) => (C(), D("div", {
      class: "trend-chart-container",
      onClick: E[0] || (E[0] = Ue(() => m(), ["stop"]))
    }, [
      oo,
      R(Rt, {
        visible: o.value,
        parentClass: "cell",
        popoverClass: "trend-chart-popover"
      }, {
        default: S(() => [
          w(r) ? (C(), I(je, {
            key: 0,
            size: "small-3"
          }, {
            default: S(() => [
              L(N(w(r)), 1)
            ]),
            _: 1
          })) : M("", !0),
          d.value ? (C(), I(hr, {
            key: 1,
            activeLines: ["values"],
            formatters: { trend: w(n), values: w(n) },
            moods: { trend: { mood: y.value }, values: { mood: "important" } },
            styles: { trend: "line", values: "line" },
            values: { trend: T.value, values: h.value }
          }, {
            "x-axis-label": S(({ index: B }) => [
              L(N(a.value[B]), 1)
            ]),
            _: 1
          }, 8, ["formatters", "moods", "values"])) : (C(), I(xt, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const lo = /* @__PURE__ */ _e(ao, [["__scopeId", "data-v-b4f986aa"]]), io = { class: "common-table" }, uo = {
  key: 0,
  class: "controls d-flex justify-content-end mb-1"
}, co = ["onMouseover", "onMouseout"], fo = ["href"], po = ["href"], vo = ["onClick"], yt = 50, mo = /* @__PURE__ */ ge({
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
      clientCurrencySymbol: d,
      clientCurrencySymbolPrefix: h,
      colorMetrics: p,
      columns: c,
      columnDetails: y,
      columnLinks: T,
      comparisonColumns: _,
      defaultOrderBy: v,
      detailsColumn: m,
      detailsRequests: g,
      dragColumns: E,
      fixedColumnNumber: B,
      inlineFilterOperators: q,
      inversedKpis: ee,
      primaryColumn: G,
      primaryColumnAlias: fe,
      request: te,
      rows: le,
      shortenColumns: X,
      showInlineFilters: Fe,
      showRowNumber: ie,
      showPagination: ot,
      showTopTotal: at,
      total: pe,
      totalColumnKey: lt,
      trendUrl: Le
    } = ye(n), Be = () => {
      const l = {};
      for (const u of Object.keys(c.value))
        u in q.value && (l[u] = {
          operator: Object.keys(q.value[u])[0],
          value: ""
        });
      return l;
    }, xe = P([]), ue = P({}), we = P([]), De = P({}), Se = P([]), ve = P({}), A = P(!1), x = P(!1), k = P([]), Y = P(!1), ne = P(Be()), Ce = P(!0), Z = P(), me = P(0), Oe = P(20), Ve = P(0), se = P(), ce = P(), Fn = U(() => {
      const l = {};
      return x.value && (l.inline_filters = {
        icon: "filter"
      }), l;
    }), Ln = U(
      () => _ != null && _.value ? Object.keys(_.value) : void 0
    ), Bn = U(
      () => Se.value.reduce((l, u) => (l[u] = Is(c.value[u]), l), {})
    ), Lt = U(() => {
      if (g != null && g.value)
        return Object.entries(g.value).reduce((l, [u, { label: i }]) => (l[u] = i, l), {});
    }), Bt = U(() => [...xe.value].sort((l, u) => {
      const i = (() => {
        const b = ut(
          Z.value[0].reduce((V, j) => V[j], l),
          c.value[Z.value[0][0]].type
        ), O = ut(
          Z.value[0].reduce((V, j) => V[j], u),
          c.value[Z.value[0][0]].type
        );
        return b > O ? 1 : b < O ? -1 : 0;
      })();
      return Z.value[1] ? -i : i;
    })), Dt = U(() => !(te != null && te.value) || Y.value ? Bt.value : Bt.value.slice(
      me.value * Oe.value,
      (me.value + 1) * Oe.value
    )), Dn = (l) => {
      we.value.includes(l) || we.value.push(l);
    }, qe = (l, u) => !X.value || !X.value.includes(l) ? !1 : u.length > yt, In = (l) => !!l.tooltipTitle && !!l.tooltipDescription, Re = (l, u, i) => {
      var O;
      if (!i || !(_ != null && _.value) || !(i in _.value) || _.value[i].format !== "difference")
        return;
      const b = ((O = ee == null ? void 0 : ee.value) == null ? void 0 : O.includes(u)) ?? !1;
      return l > 0 ? b ? "negative" : "positive" : l < 0 ? b ? "positive" : "negative" : "neutral";
    }, Te = (l, u, i) => {
      let b = ut(l, u);
      switch (u) {
        case "float":
          return be(parseFloat(b)).format("0,0.00");
        case "int":
          return be(parseInt(b)).format("0,0");
        case "money": {
          let O = "0,0";
          a.value > 0 && (O += "." + "0".repeat(a.value));
          const V = be(parseFloat(b)).format(O);
          return h.value ? d.value + " " + V : V + " " + d.value;
        }
        case "money_capped": {
          const O = parseFloat(b.toFixed(a.value)) == 0;
          if (b > 0 && b < 1 && O) {
            const V = a.value === 0 ? 1 : parseFloat("0." + "0".repeat(a.value - 1) + "1");
            return h.value ? `< ${d.value} ${V}` : `< ${V} ${d.value}`;
          } else
            return Te(l, "money", i);
        }
        case "percent": {
          let O = be(parseFloat(b)).format("0,0.00") + "%";
          return i === "difference" && b > 0 && (O = `+${O}`), O;
        }
        case "time":
          return `${Te(Math.floor(parseInt(b) / 60), "int")}mn${Te(
            parseInt(b) % 60,
            "int"
          )}s`;
        default:
          return b.toString();
      }
    }, zn = async (l, u) => {
      if (ue.value[l] && ue.value[l][u[G.value]])
        return ue.value[l][u[G.value]];
      const { rows: i } = await r(g.value[l].request, {
        row: u,
        primaryColumn: (fe == null ? void 0 : fe.value) ?? G.value,
        primaryColumnValue: u[G.value]
      });
      return ue.value[l] || (ue.value[l] = {}), ue.value[l][u[G.value]] = Object.values(i), ue.value[l][u[G.value]];
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
    }, $n = (l) => !X.value || !X.value.includes(l) ? -1 : k.value.indexOf(l), Mn = (l) => {
      if (l in ne.value)
        return ne.value[l].operator;
    }, Hn = (l) => {
      if (l in ne.value)
        return ne.value[l].value;
    }, it = (l) => q.value[l], Vn = (l) => {
      const u = it(l);
      if (!u)
        return;
      const i = ["normal", "small"];
      let b = 0;
      for (const O of Object.values(u)) {
        const V = i.indexOf(O.size ?? "normal");
        V > b && (b = V);
      }
      return {
        [`size-${i[b]}`]: !0
      };
    }, qn = (l) => {
      const u = it(l);
      return u ? Object.entries(u).reduce((i, [b, O]) => (i[b] = O.label, i), {}) : {};
    }, Jn = (l) => c.value[l].type === "string" ? "text" : "number", zt = () => `Table_OrderBy_${location.pathname}`, Wn = () => `Table_PageSize_${location.pathname}`, ut = (l, u) => {
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
    }, Ee = (l, u, i, b = !1) => {
      const [O, V] = (() => !i || !(_ != null && _.value) || !(i in _.value) ? [c.value[u].type, void 0] : [
        _.value[i].type ?? c.value[u].type,
        _.value[i].format
      ])();
      let j = Te(l, O);
      return V === "difference" && (j = l > 0 ? `+${j}` : j), b ? $t(j, u) : j;
    }, Gn = (l, u) => {
      if (!Le)
        return "";
      const i = new URL(
        u ? Le.value[u] : Le.value,
        location.origin
      );
      return i.searchParams.set((fe == null ? void 0 : fe.value) ?? G.value, l[G.value]), i.toString();
    }, Je = (l, u, i) => qe(l, u) ? [] : i ? (m == null ? void 0 : m.value) === l ? ["flex-grow-1", "text-left"] : X.value && X.value.includes(l) && Dt.value.some((b) => qe(l, b[l])) ? ["flex-grow-1", "text-left"] : ["flex-grow-1"] : ["flew-grow-1"], Xn = (l) => l in q.value, Yn = () => {
      Fe.value && (A.value = !1);
    }, jt = (l, u) => !(!(T != null && T.value) || !(u in T.value) || "disable_for" in T.value[u] && T.value[u].disable_for.includes(l[G.value])), Qn = (l, u) => {
      const [i] = Se.value.splice(l, 1);
      Se.value.splice(u, 0, i), t("move:column", { from: l, to: u });
    }, Zn = (l) => {
      const u = we.value.indexOf(l);
      u < 0 || we.value.splice(u, 1);
    }, Ut = (l, u) => {
      De.value[l] = u;
    }, $t = (l, u) => !X.value || !X.value.includes(u) || l.length <= yt ? l : `${l.substring(0, yt - 3)}...`, Kn = (l) => {
      if (!ce.value)
        return;
      const u = {
        left: ce.value.$el.scrollLeft,
        top: ce.value.$el.scrollTop
      };
      delete ve.value[l[G.value]], Qe(() => {
        ce.value.$el.scrollTo(u);
      });
    }, er = (l, u) => {
      const i = l.target.value;
      Ht(u, { value: i });
    }, tr = (l, u) => {
      l.key === "Enter" && l.target.blur();
    }, nr = async (l, u) => {
      if (!ce.value)
        return;
      const i = {
        left: ce.value.$el.scrollLeft,
        top: ce.value.$el.scrollTop
      };
      Ce.value = !0, ve.value[u[G.value]] = await zn(l, u), Qe(() => {
        ce.value.$el.scrollTo(i), Ce.value = !1;
      });
    }, rr = async (l = !1) => {
      await or(l) || await sr(l) || await Vt(l);
    }, ct = async (l) => {
      await dt(l), me.value = l;
    }, Mt = async (l) => {
      const u = Wn();
      if (l === void 0) {
        const i = localStorage.getItem(u);
        i && (Oe.value = parseInt(i));
      } else
        localStorage.setItem(u, l.toString()), await dt(0, l), me.value = 0, Oe.value = l;
    }, Ht = (l, { operator: u, value: i }) => {
      if (u || (u = Object.keys(it(l))[0]), !u)
        return;
      const b = {
        ...ne.value[l],
        operator: u
      };
      i !== void 0 && (b.value = i), ne.value[l] = b, ct(0);
    }, sr = async (l) => {
      const u = (() => {
        for (const O in localStorage) {
          if (!O.startsWith("DataTables_"))
            continue;
          const V = O.substring(O.indexOf("/"));
          if (location.pathname !== V)
            return;
          const j = localStorage.getItem(O);
          return j ? JSON.parse(j) : void 0;
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
      return await Ae(b, !1, l), !0;
    }, Vt = async (l) => {
      if (v != null && v.value) {
        await Ae(v.value, !1, l);
        return;
      }
      const [u, { colspan: i }] = Object.entries(c.value).find(
        ([b, { visible: O }]) => O
      );
      if (i === -1) {
        await Ae([[u], !1], !1, l);
        return;
      }
      await Ae(
        [
          [
            u,
            (_ != null && _.value ? Object.keys(_.value)[0] : 0).toString()
          ],
          !1
        ],
        !1,
        l
      );
    }, or = async (l) => {
      const u = localStorage.getItem(zt());
      return u ? (await Ae(JSON.parse(u), !1, l), !0) : !1;
    }, ar = async (l, u, i) => {
      if (!(te != null && te.value))
        return !1;
      if (Y.value)
        return !0;
      const b = await s(te.value, {
        inlineFilters: ne.value,
        pageNumber: l,
        pageSize: u,
        orderBy: i[0],
        reversed: i[1]
      });
      return xe.value = Object.values(b.rows), Y.value = b.paginated !== !0, Ve.value = b.rowCount, b.detailedRows ? ve.value = b.detailedRows : ve.value = {}, b.total && (se.value = b.total), !0;
    }, lr = () => {
      if (!(le != null && le.value))
        return !1;
      let l = Object.values(le.value);
      for (const [u, i] of Object.entries(ne.value))
        i.value && (l = l.filter(
          (b) => q.value[u][i.operator].callback(
            b[u],
            i.value
          )
        ));
      return xe.value = l, Ve.value = l.length, !0;
    }, dt = async (l, u, i) => {
      l === void 0 && (l = me.value), u === void 0 && (u = Oe.value), i === void 0 && (i = Z.value), Ce.value = !0, lr() || await ar(me.value, Oe.value, Z.value), Ce.value = !1;
    }, ir = () => {
      Fe.value && (A.value = !0);
    }, ur = (l) => {
      if (!X.value || !X.value.includes(l))
        return;
      const u = $n(l);
      u >= 0 ? k.value.splice(u, 1) : k.value.push(l);
    }, cr = () => {
      x.value = !x.value, x.value && (ne.value = Be());
    }, Ae = async (l, u = !0, i = !0) => {
      me.value = 0, i && await dt(void 0, void 0, l), Z.value = l, u && localStorage.setItem(zt(), JSON.stringify(l));
    };
    return fr(() => {
      Se.value = Object.keys(c.value), se.value = pe == null ? void 0 : pe.value, Promise.all([Vt(!1), Mt()]).then(() => rr(!0));
    }), Ye(c, () => {
      ne.value = Be();
    }), te && Ye(
      te,
      () => {
        Y.value = !1, ct(0);
      },
      { deep: !0 }
    ), (l, u) => (C(), D("div", io, [
      w(ot) ? (C(), D("div", uo, [
        R(ro, {
          "onUpdate:pageNumber": u[0] || (u[0] = (i) => ct(i)),
          "onUpdate:currentPageSize": u[1] || (u[1] = (i) => Mt(i)),
          currentPageSize: Oe.value,
          pageNumber: me.value,
          pageSizeLabel: l.pageSizeLabel,
          rowCount: Ve.value
        }, null, 8, ["currentPageSize", "pageNumber", "pageSizeLabel", "rowCount"])
      ])) : M("", !0),
      W("div", {
        class: "table-container",
        onMouseover: u[7] || (u[7] = () => ir()),
        onMouseout: u[8] || (u[8] = () => Yn())
      }, [
        W("div", {
          class: H(["action-buttons", { active: A.value }])
        }, [
          w(Fe) ? (C(), D("button", {
            key: 0,
            class: "btn btn-small btn-success",
            onClick: u[2] || (u[2] = () => cr())
          }, [
            W("div", {
              class: H(["las", x.value ? "la-trash" : "la-filter"])
            }, null, 2)
          ])) : M("", !0)
        ], 2),
        Z.value ? (C(), I(gr, {
          key: 0,
          ref_key: "table",
          ref: ce,
          onAddColoredMetric: u[3] || (u[3] = (i) => Dn(i)),
          "onMove:column": u[4] || (u[4] = ({ from: i, to: b }) => Qn(i, b)),
          onRemoveColoredMetric: u[5] || (u[5] = (i) => Zn(i)),
          "onUpdate:orderBy": u[6] || (u[6] = (i) => Ae(i)),
          additionalHeaders: Fn.value,
          cellClasses: w(o),
          colorMetrics: w(p),
          coloredMetrics: we.value,
          columns: Bn.value,
          comparisonColumnKeys: Ln.value,
          detailsRows: ve.value,
          dragColumns: w(E),
          fixedColumnNumber: w(B),
          inversedKpis: w(ee),
          orderBy: Z.value,
          primaryColumn: w(G),
          rows: Dt.value,
          showRowNumber: w(ie),
          showTotal: !!se.value,
          showTopTotal: w(at)
        }, pr({
          colorizeLabel: S(({ enabled: i }) => [
            R(z, {
              mood: "white",
              size: "small"
            }, {
              default: S(() => [
                i ? (C(), D(Q, { key: 0 }, [
                  L(N(l.uncolorizeLabel), 1)
                ], 64)) : (C(), D(Q, { key: 1 }, [
                  L(N(l.colorizeLabel), 1)
                ], 64))
              ]),
              _: 2
            }, 1024)
          ]),
          columnRowNumber: S(() => [
            R(z, {
              contrast: "",
              size: "small"
            }, {
              default: S(() => [
                L("#")
              ]),
              _: 1
            })
          ]),
          rowNumber: S(({ value: i }) => [
            R(z, {
              contrast: "",
              size: "small"
            }, {
              default: S(() => [
                L(N(i), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          totalRowNumber: S(() => [
            R(z, {
              contrast: "",
              size: "small"
            }, {
              default: S(() => [
                L("#")
              ]),
              _: 1
            })
          ]),
          column: S(({ columnKey: i, isGhost: b }) => [
            W("div", {
              class: "d-flex align-items-center",
              onMouseover: () => Ut(i, !0),
              onMouseout: () => Ut(i, !1)
            }, [
              R(z, {
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  L(N(w(c)[i].label), 1)
                ]),
                _: 2
              }, 1024),
              !b && In(w(c)[i]) ? (C(), I(Xs, {
                key: 0,
                description: w(c)[i].tooltipDescription,
                title: w(c)[i].tooltipTitle,
                visible: De.value[i]
              }, null, 8, ["description", "title", "visible"])) : M("", !0)
            ], 40, co)
          ]),
          row: S(({ columnKey: i, index: b, row: O, spanIndex: V, subcolumnKey: j, subindex: ft, value: J }) => [
            _t(l.$slots, "row", vr(mr({
              columnKey: i,
              index: b,
              row: O,
              spanIndex: V,
              subcolumnKey: j,
              subindex: ft,
              value: J
            })), () => [
              ft === void 0 && i === "trend" ? (C(), I(lo, {
                key: 0,
                class: H(Je(i, J, O.rowInfo.detailable)),
                formatter: (pt) => Te(pt, "int"),
                title: l.trendChartTitle,
                url: Gn(O, j)
              }, null, 8, ["class", "formatter", "title", "url"])) : O.rowInfo.detailable && i === w(m) ? (C(), D(Q, { key: 1 }, [
                jt(O, i) && O.rowInfo.detailable ? (C(), I(z, {
                  key: 0,
                  class: H(Je(i, J, O.rowInfo.detailable)),
                  mood: Re(J, i, j),
                  contrast: "",
                  size: "small"
                }, {
                  default: S(() => [
                    W("a", {
                      class: "column-link",
                      href: It(w(T)[i], O).toString()
                    }, N(Ee(J, i, j, !0)), 9, fo)
                  ]),
                  _: 2
                }, 1032, ["class", "mood"])) : (C(), I(z, {
                  key: 1,
                  mood: Re(J, i, j),
                  contrast: "",
                  size: "small"
                }, {
                  default: S(() => [
                    L(N(Ee(J, i, j)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"]))
              ], 64)) : jt(O, i) && O.rowInfo.detailable ? (C(), I(z, {
                key: 2,
                class: H(Je(i, J, O.rowInfo.detailable)),
                mood: Re(J, i, j),
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  W("a", {
                    class: "column-link",
                    href: It(w(T)[i], O).toString()
                  }, N(Ee(J, i, j, !0)), 9, po)
                ]),
                _: 2
              }, 1032, ["class", "mood"])) : ft === void 0 && J >= 0.01 && i in w(y) ? (C(), I(rn, {
                key: 3,
                format: w(y)[i].format,
                label: Ee(J, i, j, !0),
                title: w(y)[i].title,
                url: jn(i, O)
              }, null, 8, ["format", "label", "title", "url"])) : (C(), I(z, {
                key: 4,
                class: H(Je(i, J, O.rowInfo.detailable)),
                mood: Re(J, i, j),
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  L(N(Ee(J, i, j, !0)), 1)
                ]),
                _: 2
              }, 1032, ["class", "mood"])),
              qe(i, J) ? (C(), D("i", {
                key: 5,
                class: H(["flex-grow-1 expand-column fa", k.value.includes(i) ? "fa-compress-alt" : "fa-expand-alt"]),
                onClick: () => ur(i)
              }, null, 10, vo)) : M("", !0),
              Lt.value && O.rowInfo.detailable && i === w(m) ? (C(), D(Q, { key: 6 }, [
                qe(i, J) ? M("", !0) : (C(), I(br, { key: 0 })),
                R(Ks, {
                  onHideDetails: () => Kn(O),
                  onShowDetails: (pt) => nr(pt, O),
                  labels: Lt.value,
                  open: ve.value[O[w(G)]] !== void 0,
                  title: l.detailsSelectorTitle
                }, null, 8, ["onHideDetails", "onShowDetails", "labels", "open", "title"])
              ], 64)) : M("", !0)
            ], !0)
          ]),
          additionalHeader: S(({ additionalHeader: i, columnKey: b }) => [
            i === "inline_filters" && Xn(b) ? (C(), D("div", {
              key: 0,
              class: H(["d-flex inline-filter", Vn(b)])
            }, [
              R(cn, {
                class: "inline-filter-dropdown",
                "onUpdate:modelValue": (O) => Ht(b, { operator: O.toString() }),
                id: `additional_header_${b}`,
                items: qn(b),
                modelValue: Mn(b)
              }, {
                item: S(({ item: O }) => [
                  R(z, {
                    contrast: "",
                    size: "small"
                  }, {
                    default: S(() => [
                      L(N(O), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["onUpdate:modelValue", "id", "items", "modelValue"]),
              R(dn, {
                class: "flex-grow-1 inline-filter-input",
                onBlur: (O) => er(O, b),
                onKeyup: (O) => tr(O),
                modelValue: Hn(b),
                type: Jn(b)
              }, null, 8, ["onBlur", "onKeyup", "modelValue", "type"])
            ], 2)) : M("", !0)
          ]),
          total: S(({ columnKey: i, subcolumnKey: b, values: O }) => [
            _t(l.$slots, w(pe), {
              columnKey: i,
              subcolumnKey: b,
              values: O
            }, () => [
              l.totalTitle && i === w(lt) ? (C(), I(z, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  L(N(l.totalTitle(Ve.value ?? xe.value.length)), 1)
                ]),
                _: 1
              })) : se.value ? (C(), D(Q, { key: 1 }, [
                se.value && se.value[i] >= 0.01 && i in w(y) ? (C(), I(rn, {
                  key: 0,
                  format: w(y)[i].format,
                  label: $t(Te(se.value[i], w(c)[i].type, w(_) && b ? w(_)[b].format : void 0), i),
                  title: w(y)[i].title,
                  url: Un(w(y)[i])
                }, null, 8, ["format", "label", "title", "url"])) : b ? (C(), I(z, {
                  key: 1,
                  mood: Re(se.value[i][b], i, b),
                  contrast: "",
                  size: "small"
                }, {
                  default: S(() => [
                    L(N(Ee(se.value[i][b], i, b)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"])) : (C(), I(z, {
                  key: 2,
                  mood: Re(se.value[i], i, b),
                  contrast: "",
                  size: "small"
                }, {
                  default: S(() => [
                    L(N(Ee(se.value[i], i)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"]))
              ], 64)) : M("", !0)
            ], !0)
          ]),
          _: 2
        }, [
          w(_) ? {
            name: "secondaryColumn",
            fn: S(({ subcolumnKey: i }) => [
              i ? (C(), I(z, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  L(N(w(_)[i].label), 1)
                ]),
                _: 2
              }, 1024)) : M("", !0)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "dragColumns", "fixedColumnNumber", "inversedKpis", "orderBy", "primaryColumn", "rows", "showRowNumber", "showTotal", "showTopTotal"])) : M("", !0)
      ], 32),
      W("div", {
        class: H(["loading-overlay", { visible: Ce.value }])
      }, [
        R(xt)
      ], 2)
    ]));
  }
});
const Lo = /* @__PURE__ */ _e(mo, [["__scopeId", "data-v-83d1e944"]]), ho = ["onClick"], bo = ["onClick"], go = { class: "items" }, yo = /* @__PURE__ */ ge({
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
    const n = e, { columns: r, defaultValue: s, groupNames: o, modelValue: a, showModalLabel: d } = ye(n), h = P(Object.keys(o.value)[0]), p = P([...a.value]), c = P([]), y = P([]), T = P(""), _ = P(void 0), v = P({ left: 0, top: 0 }), m = P({ left: 0, top: 0 }), g = P({ left: 0, top: 0 }), E = P(void 0), B = P(void 0), q = P(void 0), ee = P(void 0), G = U(() => Object.fromEntries(
      Object.entries(r.value).filter(([A, x]) => x.fixed !== !0 && (T.value.trim() === "" || x.label.toLowerCase().includes(T.value.trim().toLowerCase())))
    )), fe = U(() => Object.keys(o.value).reduce((A, x) => (A[x] = Object.fromEntries(
      Object.entries(G.value).filter(([k, Y]) => Y.group === x)
    ), A), {})), te = U(() => h.value === void 0 ? void 0 : fe.value[h.value]), le = U(() => Object.fromEntries(
      Object.entries(o.value).filter(([A, x]) => Object.values(G.value).some((k) => k.group === A))
    )), X = U(() => {
      if (!(B.value === void 0 || q.value === void 0 || ee.value === void 0))
        return B.value + ee.value - q.value - g.value.top;
    }), Fe = U(() => {
      if (X.value !== void 0)
        return `${X.value}px`;
    }), ie = U(() => {
      if (E.value === void 0 || X.value === void 0)
        return;
      const A = p.value.indexOf(E.value), x = A - 1 - p.value.slice(0, A).reverse().findIndex((Z) => r.value[Z].fixed === !0);
      let k = p.value.slice(A + 1).findIndex((Z) => r.value[Z].fixed === !0);
      k >= 0 ? k += A + 1 : k = p.value.length;
      const Y = ot(p.value[x]), ne = Y.offsetHeight, Ce = Math.min(
        Math.round((X.value - Y.offsetTop) / ne - 1),
        k - x - 1
      );
      return x + Ce + 1;
    }), ot = (A) => y.value[p.value.indexOf(A)], at = (A) => c.value[p.value.indexOf(A)], pe = (A = !1, x) => {
      x && x.target !== x.currentTarget || (A && (p.value = [...a.value]), _.value = !1, h.value = Object.keys(o.value)[0]);
    }, lt = (A) => {
      const x = p.value.indexOf(A);
      x >= 0 && p.value.splice(x, 1);
    }, Le = () => {
      p.value = [...s.value];
    }, Be = (A) => {
      const x = [...A];
      t("update:modelValue", x), pe(!1);
    }, xe = (A) => {
      h.value = A.toString();
    }, ue = () => {
      _.value = !0;
    }, we = (A) => {
      const x = p.value.indexOf(A);
      x >= 0 ? p.value.splice(x, 1) : p.value.push(A);
    }, De = (A) => {
      ee.value = A.clientY;
    }, Se = () => {
      const A = ie.value;
      if (E.value !== void 0 && A !== void 0) {
        const x = p.value.indexOf(E.value);
        p.value.splice(x, 1), p.value.splice(A, 0, E.value);
      }
      E.value = void 0, B.value = void 0, q.value = void 0, ee.value = void 0, window.removeEventListener("mousemove", De), window.removeEventListener("mouseup", Se);
    }, ve = (A, x) => {
      E.value = x, B.value = at(x).$el.offsetTop, q.value = A.clientY, ee.value = A.clientY, window.addEventListener("mousemove", De), window.addEventListener("mouseup", Se);
    };
    return Ye(T, (A) => {
      A ? (!h.value || !(h.value in le.value)) && (h.value = Object.keys(le.value)[0]) : h.value || (h.value = Object.keys(le.value)[0]);
    }), (A, x) => (C(), D(Q, null, [
      R(qt, {
        onClick: x[0] || (x[0] = () => ue()),
        label: w(d),
        mood: "neutral"
      }, null, 8, ["label"]),
      (C(), I(an, { to: "#app > .app-container" }, [
        R(K, {
          class: H(["kpi-selector-container no-spacing", { visible: _.value, hidden: _.value === !1 }]),
          onClick: x[8] || (x[8] = Ue((k) => pe(!0, k), ["stop"])),
          column: "",
          horizontal: "center",
          vertical: "center"
        }, {
          default: S(() => [
            R(un, { class: "kpi-selector" }, {
              default: S(() => [
                R(K, {
                  class: "title",
                  vertical: "center"
                }, {
                  default: S(() => [
                    R(je, {
                      class: "flex-max",
                      size: "large-2"
                    }, {
                      default: S(() => [
                        L(N(A.title), 1)
                      ]),
                      _: 1
                    }),
                    R(K, {
                      class: "flex-max no-spacing search-container",
                      vertical: "center"
                    }, {
                      default: S(() => [
                        R(dn, {
                          class: "flex-max search",
                          modelValue: T.value,
                          "onUpdate:modelValue": x[1] || (x[1] = (k) => T.value = k),
                          placeholder: A.filterLabel
                        }, null, 8, ["modelValue", "placeholder"]),
                        R(ze, {
                          class: "no-spacing",
                          value: "search-alt-2"
                        })
                      ]),
                      _: 1
                    }),
                    R(K, {
                      class: "close-container flex-max no-spacing",
                      horizontal: "right"
                    }, {
                      default: S(() => [
                        R(ze, {
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
                R(K, { class: "body flex-max no-spacing" }, {
                  default: S(() => [
                    h.value !== void 0 && te.value !== void 0 ? (C(), D(Q, { key: 0 }, [
                      R(K, {
                        class: "groups flex-max",
                        column: ""
                      }, {
                        default: S(() => [
                          R(je, { size: "large-2" }, {
                            default: S(() => [
                              L(N(A.groupsTitle), 1)
                            ]),
                            _: 1
                          }),
                          R(vt, {
                            class: "flex-max no-spacing",
                            "onUpdate:scrollPosition": x[3] || (x[3] = (k) => v.value = k),
                            scrollPosition: v.value
                          }, {
                            default: S(() => [
                              (C(!0), D(Q, null, Pe(Object.entries(le.value), ([k, Y]) => (C(), D("div", {
                                class: H(["item no-spacing", { selected: h.value === k }]),
                                onClick: () => xe(k)
                              }, [
                                R(z, { size: "small" }, {
                                  default: S(() => [
                                    L(N(Y), 1)
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
                      R(K, {
                        class: "group-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: S(() => [
                          R(je, { size: "large-2" }, {
                            default: S(() => [
                              L(N(w(o)[h.value]), 1)
                            ]),
                            _: 1
                          }),
                          R(vt, {
                            class: "flex-max no-spacing",
                            "onUpdate:scrollPosition": x[4] || (x[4] = (k) => m.value = k),
                            scrollPosition: m.value
                          }, {
                            default: S(() => [
                              (C(!0), D(Q, null, Pe(Object.entries(te.value), ([k, Y]) => (C(), D("div", {
                                class: H(["item no-spacing", { selected: p.value.includes(k) }]),
                                onClick: () => we(k),
                                key: k
                              }, [
                                R(z, { size: "small" }, {
                                  default: S(() => [
                                    L(N(Y.label), 1)
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
                      R(K, {
                        class: "enabled-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: S(() => [
                          R(K, {
                            class: "header",
                            vertical: "center"
                          }, {
                            default: S(() => [
                              R(je, {
                                class: "flex-max",
                                size: "large-2"
                              }, {
                                default: S(() => [
                                  L(N(A.orderTitle), 1)
                                ]),
                                _: 1
                              }),
                              R(z, {
                                class: "reset",
                                onClick: x[5] || (x[5] = () => Le()),
                                mood: "important-alt",
                                size: "small"
                              }, {
                                default: S(() => [
                                  L(N(A.resetLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          R(vt, {
                            class: "flex-max no-spacing",
                            "onUpdate:scrollPosition": x[6] || (x[6] = (k) => g.value = k),
                            contentClass: E.value === void 0 ? void 0 : "dragged",
                            scrollPosition: g.value
                          }, {
                            default: S(() => [
                              W("div", go, [
                                (C(!0), D(Q, null, Pe(p.value, (k) => (C(), D("div", {
                                  class: "item-container no-spacing",
                                  ref_for: !0,
                                  ref_key: "enabledColumnContainers",
                                  ref: y
                                }, [
                                  W("div", {
                                    class: H(["separator-top no-spacing", { "place-after": ie.value !== void 0 && E.value !== void 0 && k === p.value[ie.value] && ie.value < p.value.indexOf(E.value) }])
                                  }, null, 2),
                                  R(K, {
                                    class: H(["item no-spacing", { dragged: k === E.value }]),
                                    ref_for: !0,
                                    ref_key: "enabledColumnElements",
                                    ref: c,
                                    style: ln(k === E.value ? { top: Fe.value } : void 0),
                                    vertical: "center"
                                  }, {
                                    default: S(() => [
                                      w(r)[k].fixed ? (C(), I(z, {
                                        key: 0,
                                        class: H(["flex-max", { fixed: w(r)[k].fixed }]),
                                        size: "small"
                                      }, {
                                        default: S(() => [
                                          L(N(w(r)[k].label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])) : (C(), D(Q, { key: 1 }, [
                                        R(ze, {
                                          class: "move",
                                          onMousedown: (Y) => ve(Y, k),
                                          value: "dots-vertical-rounded"
                                        }, null, 8, ["onMousedown"]),
                                        R(z, {
                                          class: "flex-max no-spacing",
                                          size: "small"
                                        }, {
                                          default: S(() => [
                                            L(N(w(r)[k].label), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        R(ze, {
                                          class: "no-spacing remove",
                                          onClick: () => lt(k),
                                          value: "trash"
                                        }, null, 8, ["onClick"])
                                      ], 64))
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "style"]),
                                  W("div", {
                                    class: H(["separator-bottom no-spacing", { "place-after": ie.value !== void 0 && E.value !== void 0 && k === p.value[ie.value] && ie.value >= p.value.indexOf(E.value) }])
                                  }, null, 2)
                                ], 512))), 256))
                              ])
                            ]),
                            _: 1
                          }, 8, ["contentClass", "scrollPosition"])
                        ]),
                        _: 1
                      })
                    ], 64)) : (C(), I(K, {
                      key: 1,
                      class: "flex-max",
                      horizontal: "center",
                      vertical: "center"
                    }, {
                      default: S(() => [
                        R(z, { size: "small" }, {
                          default: S(() => [
                            L(N(A.noColumnsFoundLabel), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }))
                  ]),
                  _: 1
                }),
                R(K, {
                  class: "controls no-spacing",
                  horizontal: "right"
                }, {
                  default: S(() => [
                    R(qt, {
                      onClick: x[7] || (x[7] = () => Be(p.value)),
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
