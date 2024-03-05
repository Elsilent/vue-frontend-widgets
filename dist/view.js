import { defineComponent as ge, toRefs as we, ref as A, openBlock as O, createElementBlock as B, normalizeClass as H, createElementVNode as J, withModifiers as Ve, toDisplayString as N, unref as _, createVNode as T, withCtx as S, createCommentVNode as V, Fragment as X, renderList as ke, createBlock as I, pushScopeId as on, popScopeId as an, computed as U, watch as Me, nextTick as Ke, Teleport as ln, normalizeStyle as un, renderSlot as St, onUnmounted as pr, createTextVNode as L, onMounted as vr, createSlots as mr, normalizeProps as hr, guardReactiveProps as br } from "vue";
import be from "numeral";
import { L as Tt, a as gr } from "./LineBarChart-8bc1f7a1.js";
import { P as Pt } from "./Popover-38d3223e.js";
import { _ as ye } from "./_plugin-vue_export-helper-dad06003.js";
import { C as cn, A as ee, I as Ue } from "./Icon-8f2ed8ba.js";
import { I as j } from "./Info-54758b60.js";
import { D as dn, I as fn, B as Jt } from "./Input-7f2c48d4.js";
import { Separator as wr } from "./marker.js";
import { T as yr, S as ht } from "./Table-5389ab3a.js";
import { H as $e } from "./Header-8b49a8fe.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "./datetime-31a2b505.js";
function pn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: _r } = Object.prototype, { getPrototypeOf: At } = Object, nt = ((e) => (t) => {
  const n = _r.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), le = (e) => (e = e.toLowerCase(), (t) => nt(t) === e), rt = (e) => (t) => typeof t === e, { isArray: Fe } = Array, He = rt("undefined");
function Sr(e) {
  return e !== null && !He(e) && e.constructor !== null && !He(e.constructor) && ne(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const vn = le("ArrayBuffer");
function Cr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && vn(e.buffer), t;
}
const Or = rt("string"), ne = rt("function"), mn = rt("number"), st = (e) => e !== null && typeof e == "object", Er = (e) => e === !0 || e === !1, Ye = (e) => {
  if (nt(e) !== "object")
    return !1;
  const t = At(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, xr = le("Date"), Rr = le("File"), Tr = le("Blob"), Pr = le("FileList"), Ar = (e) => st(e) && ne(e.pipe), kr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ne(e.append) && ((t = nt(e)) === "formdata" || // detect form-data instance
  t === "object" && ne(e.toString) && e.toString() === "[object FormData]"));
}, Nr = le("URLSearchParams"), Fr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function qe(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Fe(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let d;
    for (r = 0; r < a; r++)
      d = o[r], t.call(null, e[d], d, e);
  }
}
function hn(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const bn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), gn = (e) => !He(e) && e !== bn;
function Ct() {
  const { caseless: e } = gn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && hn(t, s) || s;
    Ye(t[o]) && Ye(r) ? t[o] = Ct(t[o], r) : Ye(r) ? t[o] = Ct({}, r) : Fe(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && qe(arguments[r], n);
  return t;
}
const Lr = (e, t, n, { allOwnKeys: r } = {}) => (qe(t, (s, o) => {
  n && ne(s) ? e[o] = pn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Dr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Br = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ir = (e, t, n, r) => {
  let s, o, a;
  const d = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      a = s[o], (!r || r(a, e, t)) && !d[a] && (t[a] = e[a], d[a] = !0);
    e = n !== !1 && At(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, zr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, jr = (e) => {
  if (!e)
    return null;
  if (Fe(e))
    return e;
  let t = e.length;
  if (!mn(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ur = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && At(Uint8Array)), $r = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Mr = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Vr = le("HTMLFormElement"), Hr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Wt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), qr = le("RegExp"), wn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  qe(n, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (r[o] = a || s);
  }), Object.defineProperties(e, r);
}, Jr = (e) => {
  wn(e, (t, n) => {
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
}, Wr = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Fe(e) ? r(e) : r(String(e).split(t)), n;
}, Gr = () => {
}, Xr = (e, t) => (e = +e, Number.isFinite(e) ? e : t), bt = "abcdefghijklmnopqrstuvwxyz", Gt = "0123456789", yn = {
  DIGIT: Gt,
  ALPHA: bt,
  ALPHA_DIGIT: bt + bt.toUpperCase() + Gt
}, Yr = (e = 16, t = yn.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Qr(e) {
  return !!(e && ne(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Zr = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (st(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Fe(r) ? [] : {};
        return qe(r, (a, d) => {
          const h = n(a, s + 1);
          !He(h) && (o[d] = h);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Kr = le("AsyncFunction"), es = (e) => e && (st(e) || ne(e)) && ne(e.then) && ne(e.catch), f = {
  isArray: Fe,
  isArrayBuffer: vn,
  isBuffer: Sr,
  isFormData: kr,
  isArrayBufferView: Cr,
  isString: Or,
  isNumber: mn,
  isBoolean: Er,
  isObject: st,
  isPlainObject: Ye,
  isUndefined: He,
  isDate: xr,
  isFile: Rr,
  isBlob: Tr,
  isRegExp: qr,
  isFunction: ne,
  isStream: Ar,
  isURLSearchParams: Nr,
  isTypedArray: Ur,
  isFileList: Pr,
  forEach: qe,
  merge: Ct,
  extend: Lr,
  trim: Fr,
  stripBOM: Dr,
  inherits: Br,
  toFlatObject: Ir,
  kindOf: nt,
  kindOfTest: le,
  endsWith: zr,
  toArray: jr,
  forEachEntry: $r,
  matchAll: Mr,
  isHTMLForm: Vr,
  hasOwnProperty: Wt,
  hasOwnProp: Wt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: wn,
  freezeMethods: Jr,
  toObjectSet: Wr,
  toCamelCase: Hr,
  noop: Gr,
  toFiniteNumber: Xr,
  findKey: hn,
  global: bn,
  isContextDefined: gn,
  ALPHABET: yn,
  generateString: Yr,
  isSpecCompliantForm: Qr,
  toJSONObject: Zr,
  isAsyncFn: Kr,
  isThenable: es
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
const _n = F.prototype, Sn = {};
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
  Sn[e] = { value: e };
});
Object.defineProperties(F, Sn);
Object.defineProperty(_n, "isAxiosError", { value: !0 });
F.from = (e, t, n, r, s, o) => {
  const a = Object.create(_n);
  return f.toFlatObject(e, a, function(h) {
    return h !== Error.prototype;
  }, (d) => d !== "isAxiosError"), F.call(a, e.message, t, n, r, s), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const ts = null;
function Ot(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function Cn(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Xt(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Cn(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function ns(e) {
  return f.isArray(e) && !e.some(Ot);
}
const rs = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function ot(e, t, n) {
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
      else if (f.isArray(v) && ns(v) || (f.isFileList(v) || f.endsWith(m, "[]")) && (E = f.toArray(v)))
        return m = Cn(m), E.forEach(function(Q, Z) {
          !(f.isUndefined(Q) || Q === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Xt([m], Z, o) : a === null ? m : m + "[]",
            p(Q)
          );
        }), !1;
    }
    return Ot(v) ? !0 : (t.append(Xt(g, m, o), p(v)), !1);
  }
  const w = [], P = Object.assign(rs, {
    defaultVisitor: c,
    convertValue: p,
    isVisitable: Ot
  });
  function y(v, m) {
    if (!f.isUndefined(v)) {
      if (w.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      w.push(v), f.forEach(v, function(E, D) {
        (!(f.isUndefined(E) || E === null) && s.call(
          t,
          E,
          f.isString(D) ? D.trim() : D,
          m,
          P
        )) === !0 && y(E, m ? m.concat(D) : [D]);
      }), w.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function Yt(e) {
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
function kt(e, t) {
  this._pairs = [], e && ot(e, this, t);
}
const On = kt.prototype;
On.append = function(t, n) {
  this._pairs.push([t, n]);
};
On.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Yt);
  } : Yt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function ss(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function En(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ss, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = f.isURLSearchParams(t) ? t.toString() : new kt(t, n).toString(r), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class os {
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
const Qt = os, xn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, as = typeof URLSearchParams < "u" ? URLSearchParams : kt, ls = typeof FormData < "u" ? FormData : null, is = typeof Blob < "u" ? Blob : null, us = {
  isBrowser: !0,
  classes: {
    URLSearchParams: as,
    FormData: ls,
    Blob: is
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Rn = typeof window < "u" && typeof document < "u", cs = ((e) => Rn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), ds = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), fs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Rn,
  hasStandardBrowserEnv: cs,
  hasStandardBrowserWebWorkerEnv: ds
}, Symbol.toStringTag, { value: "Module" })), ae = {
  ...fs,
  ...us
};
function ps(e, t) {
  return ot(e, new ae.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return ae.isNode && f.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function vs(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ms(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Tn(e) {
  function t(n, r, s, o) {
    let a = n[o++];
    const d = Number.isFinite(+a), h = o >= n.length;
    return a = !a && f.isArray(s) ? s.length : a, h ? (f.hasOwnProp(s, a) ? s[a] = [s[a], r] : s[a] = r, !d) : ((!s[a] || !f.isObject(s[a])) && (s[a] = []), t(n, r, s[a], o) && f.isArray(s[a]) && (s[a] = ms(s[a])), !d);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const n = {};
    return f.forEachEntry(e, (r, s) => {
      t(vs(r), s, n, 0);
    }), n;
  }
  return null;
}
function hs(e, t, n) {
  if (f.isString(e))
    try {
      return (t || JSON.parse)(e), f.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Nt = {
  transitional: xn,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = f.isObject(t);
    if (o && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
      return s && s ? JSON.stringify(Tn(t)) : t;
    if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t))
      return t;
    if (f.isArrayBufferView(t))
      return t.buffer;
    if (f.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let d;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ps(t, this.formSerializer).toString();
      if ((d = f.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return ot(
          d ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), hs(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Nt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
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
    FormData: ae.classes.FormData,
    Blob: ae.classes.Blob
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
  Nt.headers[e] = {};
});
const Ft = Nt, bs = f.toObjectSet([
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
]), gs = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), n = a.substring(0, s).trim().toLowerCase(), r = a.substring(s + 1).trim(), !(!n || t[n] && bs[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Zt = Symbol("internals");
function je(e) {
  return e && String(e).trim().toLowerCase();
}
function Qe(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(Qe) : String(e);
}
function ws(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const ys = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function gt(e, t, n, r, s) {
  if (f.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!f.isString(t)) {
    if (f.isString(r))
      return t.indexOf(r) !== -1;
    if (f.isRegExp(r))
      return r.test(t);
  }
}
function _s(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ss(e, t) {
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
class at {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(d, h, p) {
      const c = je(h);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const w = f.findKey(s, c);
      (!w || s[w] === void 0 || p === !0 || p === void 0 && s[w] !== !1) && (s[w || h] = Qe(d));
    }
    const a = (d, h) => f.forEach(d, (p, c) => o(p, c, h));
    return f.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : f.isString(t) && (t = t.trim()) && !ys(t) ? a(gs(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = je(t), t) {
      const r = f.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return ws(s);
        if (f.isFunction(n))
          return n.call(this, s, r);
        if (f.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = je(t), t) {
      const r = f.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || gt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(a) {
      if (a = je(a), a) {
        const d = f.findKey(r, a);
        d && (!n || gt(r, r[d], d, n)) && (delete r[d], s = !0);
      }
    }
    return f.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || gt(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return f.forEach(this, (s, o) => {
      const a = f.findKey(r, o);
      if (a) {
        n[a] = Qe(s), delete n[o];
        return;
      }
      const d = t ? _s(o) : String(o).trim();
      d !== o && delete n[o], n[d] = Qe(s), r[d] = !0;
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
    const r = (this[Zt] = this[Zt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const d = je(a);
      r[d] || (Ss(s, a), r[d] = !0);
    }
    return f.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
at.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors(at.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
f.freezeMethods(at);
const pe = at;
function wt(e, t) {
  const n = this || Ft, r = t || n, s = pe.from(r.headers);
  let o = r.data;
  return f.forEach(e, function(d) {
    o = d.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Pn(e) {
  return !!(e && e.__CANCEL__);
}
function Je(e, t, n) {
  F.call(this, e ?? "canceled", F.ERR_CANCELED, t, n), this.name = "CanceledError";
}
f.inherits(Je, F, {
  __CANCEL__: !0
});
function Cs(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new F(
    "Request failed with status code " + n.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Os = ae.hasStandardBrowserEnv ? (
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
function Es(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function xs(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function An(e, t) {
  return e && !Es(t) ? xs(e, t) : t;
}
const Rs = ae.hasStandardBrowserEnv ? (
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
function Ts(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ps(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const p = Date.now(), c = r[o];
    a || (a = p), n[s] = h, r[s] = p;
    let w = o, P = 0;
    for (; w !== s; )
      P += n[w++], w = w % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), p - a < t)
      return;
    const y = c && p - c;
    return y ? Math.round(P * 1e3 / y) : void 0;
  };
}
function Kt(e, t) {
  let n = 0;
  const r = Ps(50, 250);
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
const As = typeof XMLHttpRequest < "u", ks = As && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = pe.from(e.headers).normalize(), a = e.responseType;
    let d;
    function h() {
      e.cancelToken && e.cancelToken.unsubscribe(d), e.signal && e.signal.removeEventListener("abort", d);
    }
    let p;
    if (f.isFormData(s)) {
      if (ae.hasStandardBrowserEnv || ae.hasStandardBrowserWebWorkerEnv)
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
    const w = An(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), En(w, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function P() {
      if (!c)
        return;
      const v = pe.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), g = {
        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: v,
        config: e,
        request: c
      };
      Cs(function(D) {
        n(D), h();
      }, function(D) {
        r(D), h();
      }, g), c = null;
    }
    if ("onloadend" in c ? c.onloadend = P : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(P);
    }, c.onabort = function() {
      c && (r(new F("Request aborted", F.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new F("Network Error", F.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const g = e.transitional || xn;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), r(new F(
        m,
        g.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        e,
        c
      )), c = null;
    }, ae.hasStandardBrowserEnv) {
      const v = Rs(w) && e.xsrfCookieName && Os.read(e.xsrfCookieName);
      v && o.set(e.xsrfHeaderName, v);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in c && f.forEach(o.toJSON(), function(m, g) {
      c.setRequestHeader(g, m);
    }), f.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), a && a !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Kt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Kt(e.onUploadProgress)), (e.cancelToken || e.signal) && (d = (v) => {
      c && (r(!v || v.type ? new Je(null, e, c) : v), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(d), e.signal && (e.signal.aborted ? d() : e.signal.addEventListener("abort", d)));
    const y = Ts(w);
    if (y && ae.protocols.indexOf(y) === -1) {
      r(new F("Unsupported protocol " + y + ":", F.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, Et = {
  http: ts,
  xhr: ks
};
f.forEach(Et, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const en = (e) => `- ${e}`, Ns = (e) => f.isFunction(e) || e === null || e === !1, kn = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let a;
      if (r = n, !Ns(n) && (r = Et[(a = String(n)).toLowerCase()], r === void 0))
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
` + o.map(en).join(`
`) : " " + en(o[0]) : "as no adapter specified";
      throw new F(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Et
};
function yt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Je(null, e);
}
function tn(e) {
  return yt(e), e.headers = pe.from(e.headers), e.data = wt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kn.getAdapter(e.adapter || Ft.adapter)(e).then(function(r) {
    return yt(e), r.data = wt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = pe.from(r.headers), r;
  }, function(r) {
    return Pn(r) || (yt(e), r && r.response && (r.response.data = wt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = pe.from(r.response.headers))), Promise.reject(r);
  });
}
const nn = (e) => e instanceof pe ? e.toJSON() : e;
function Ne(e, t) {
  t = t || {};
  const n = {};
  function r(p, c, w) {
    return f.isPlainObject(p) && f.isPlainObject(c) ? f.merge.call({ caseless: w }, p, c) : f.isPlainObject(c) ? f.merge({}, c) : f.isArray(c) ? c.slice() : c;
  }
  function s(p, c, w) {
    if (f.isUndefined(c)) {
      if (!f.isUndefined(p))
        return r(void 0, p, w);
    } else
      return r(p, c, w);
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
  function d(p, c, w) {
    if (w in t)
      return r(p, c);
    if (w in e)
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
    headers: (p, c) => s(nn(p), nn(c), !0)
  };
  return f.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const w = h[c] || s, P = w(e[c], t[c], c);
    f.isUndefined(P) && w !== d || (n[c] = P);
  }), n;
}
const Nn = "1.6.1", Lt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Lt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const rn = {};
Lt.transitional = function(t, n, r) {
  function s(o, a) {
    return "[Axios v" + Nn + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
  }
  return (o, a, d) => {
    if (t === !1)
      throw new F(
        s(a, " has been removed" + (n ? " in " + n : "")),
        F.ERR_DEPRECATED
      );
    return n && !rn[a] && (rn[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, d) : !0;
  };
};
function Fs(e, t, n) {
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
const xt = {
  assertOptions: Fs,
  validators: Lt
}, he = xt.validators;
class et {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Qt(),
      response: new Qt()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ne(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && xt.assertOptions(r, {
      silentJSONParsing: he.transitional(he.boolean),
      forcedJSONParsing: he.transitional(he.boolean),
      clarifyTimeoutError: he.transitional(he.boolean)
    }, !1), s != null && (f.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : xt.assertOptions(s, {
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
    ), n.headers = pe.concat(a, o);
    const d = [];
    let h = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (h = h && m.synchronous, d.unshift(m.fulfilled, m.rejected));
    });
    const p = [];
    this.interceptors.response.forEach(function(m) {
      p.push(m.fulfilled, m.rejected);
    });
    let c, w = 0, P;
    if (!h) {
      const v = [tn.bind(this), void 0];
      for (v.unshift.apply(v, d), v.push.apply(v, p), P = v.length, c = Promise.resolve(n); w < P; )
        c = c.then(v[w++], v[w++]);
      return c;
    }
    P = d.length;
    let y = n;
    for (w = 0; w < P; ) {
      const v = d[w++], m = d[w++];
      try {
        y = v(y);
      } catch (g) {
        m.call(this, g);
        break;
      }
    }
    try {
      c = tn.call(this, y);
    } catch (v) {
      return Promise.reject(v);
    }
    for (w = 0, P = p.length; w < P; )
      c = c.then(p[w++], p[w++]);
    return c;
  }
  getUri(t) {
    t = Ne(this.defaults, t);
    const n = An(t.baseURL, t.url);
    return En(n, t.params, t.paramsSerializer);
  }
}
f.forEach(["delete", "get", "head", "options"], function(t) {
  et.prototype[t] = function(n, r) {
    return this.request(Ne(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, a, d) {
      return this.request(Ne(d || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  et.prototype[t] = n(), et.prototype[t + "Form"] = n(!0);
});
const Ze = et;
class Dt {
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
      r.reason || (r.reason = new Je(o, a, d), n(r.reason));
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
      token: new Dt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Ls = Dt;
function Ds(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Bs(e) {
  return f.isObject(e) && e.isAxiosError === !0;
}
const Rt = {
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
Object.entries(Rt).forEach(([e, t]) => {
  Rt[t] = e;
});
const Is = Rt;
function Fn(e) {
  const t = new Ze(e), n = pn(Ze.prototype.request, t);
  return f.extend(n, Ze.prototype, t, { allOwnKeys: !0 }), f.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Fn(Ne(e, s));
  }, n;
}
const M = Fn(Ft);
M.Axios = Ze;
M.CanceledError = Je;
M.CancelToken = Ls;
M.isCancel = Pn;
M.VERSION = Nn;
M.toFormData = ot;
M.AxiosError = F;
M.Cancel = M.CanceledError;
M.all = function(t) {
  return Promise.all(t);
};
M.spread = Ds;
M.isAxiosError = Bs;
M.mergeConfig = Ne;
M.AxiosHeaders = pe;
M.formToJSON = (e) => Tn(f.isHTMLForm(e) ? new FormData(e) : e);
M.getAdapter = kn.getAdapter;
M.HttpStatusCode = Is;
M.default = M;
const tt = M;
be.localeData().delimiters.thousands = " ";
be.localeData().delimiters.decimal = ",";
const zs = (e) => e === void 0 ? void 0 : JSON.parse(JSON.stringify(e)), js = (e) => {
  if (!Array.isArray(e) && Object.getPrototypeOf(e) !== Object.prototype)
    throw new Error(
      "Tried cloning instance of a class. Consider implementing clone method instead."
    );
  return zs(e);
};
function Ln(e, t, n) {
  const r = {};
  for (const [s, o] of Object.entries(e))
    if (s in n)
      if ((n[s].colspan ?? 0) > 1) {
        const a = t ? t[s] : void 0;
        r[s] = {
          original: o,
          comparison: a ?? 0,
          difference: a === void 0 ? 100 : (o - a) / o * 100
        };
      } else
        r[s] = o;
  return r;
}
function Us(e, t, n, r) {
  const s = {};
  for (const o of Object.values(e)) {
    const a = o[r], d = Object.values(t).find(
      (h) => h[r] === a
    );
    s[a] = Ln(o, d, n);
  }
  return s;
}
const $s = {
  key: 0,
  class: "popover-header"
}, Ms = {
  key: 1,
  class: "popover-body"
}, Vs = {
  important: "",
  size: "small"
}, Hs = { size: "small" }, qs = /* @__PURE__ */ ge({
  __name: "CellHint",
  props: {
    format: {},
    label: {},
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { format: n, label: r, title: s, url: o } = we(t), a = A(), d = A(!1), h = A(), p = (m) => {
      var g;
      m && (!m.target || (g = h.value) != null && g.contains(m.target)) || (d.value = !1, window.removeEventListener("mouseup", p));
    }, c = (m) => m.map(({ name: g, valueFormatted: E }) => ({
      label: g,
      value: E
    })), w = (m) => m.map(({ name: g, rate: E, value: D }) => ({
      label: g,
      value: `${be(D).format("0,0")} (${be(E).format("0,0.00")}%)`
    })), P = (m) => {
      switch (n.value) {
        case "distribution":
          return c(m);
        case "rated_distribution":
          return w(m);
        default:
          throw new Error(`Unsupported format: ${n.value}`);
      }
    }, y = async () => {
      if (window.addEventListener("mouseup", p), a.value)
        return;
      const m = (await tt(o.value)).data;
      a.value = P(m);
    }, v = async () => {
      d.value = !0, await y();
    };
    return (m, g) => (O(), B("div", {
      class: H(["cell-hint", { visible: d.value }]),
      ref_key: "root",
      ref: h,
      onMouseover: g[1] || (g[1] = () => v()),
      onMouseout: g[2] || (g[2] = () => p())
    }, [
      J("span", {
        class: "label",
        onClick: g[0] || (g[0] = Ve(() => v(), ["stop"]))
      }, N(_(r)), 1),
      T(Pt, {
        visible: d.value,
        parentClass: "cell",
        popoverClass: "cell-hint-popover"
      }, {
        default: S(() => [
          _(s) ? (O(), B("div", $s, N(_(s)), 1)) : V("", !0),
          a.value ? (O(), B("div", Ms, [
            (O(!0), B(X, null, ke(a.value, ({ label: E, value: D }, Q) => (O(), B("div", {
              key: `line-${Q}`
            }, [
              J("b", Vs, N(E) + ": ", 1),
              J("span", Hs, N(D), 1)
            ]))), 128))
          ])) : (O(), I(Tt, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ], 34));
  }
});
const sn = /* @__PURE__ */ ye(qs, [["__scopeId", "data-v-9c7f570a"]]), Js = (e) => (on("data-v-7a1d1810"), e = e(), an(), e), Ws = { class: "column-hint" }, Gs = /* @__PURE__ */ Js(() => /* @__PURE__ */ J("i", { class: "la la-question-circle" }, null, -1)), Xs = { class: "popover-header" }, Ys = { class: "popover-body" }, Qs = /* @__PURE__ */ ge({
  __name: "ColumnHint",
  props: {
    description: {},
    title: {},
    visible: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { description: n, title: r, visible: s } = we(t);
    return (o, a) => (O(), B("div", Ws, [
      Gs,
      T(Pt, {
        visible: _(s),
        parentClass: "cell",
        popoverClass: "column-hint-popover"
      }, {
        default: S(() => [
          J("div", Xs, N(_(r)), 1),
          J("div", Ys, N(_(n)), 1)
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const Zs = /* @__PURE__ */ ye(Qs, [["__scopeId", "data-v-7a1d1810"]]), Ks = /* @__PURE__ */ ge({
  __name: "BodyPopover",
  props: {
    autoPosition: { type: Boolean, default: !1 },
    parentNode: {},
    popoverClass: {},
    visible: { type: Boolean }
  },
  setup(e) {
    const t = e, { autoPosition: n, parentNode: r, popoverClass: s, visible: o } = we(t), a = A(), d = A(), h = A(), p = U(() => ({
      [(s == null ? void 0 : s.value) ?? ""]: !!s,
      visible: o.value
    })), c = U(() => {
      if (!(!n.value || a.value === void 0 || h.value === void 0))
        return {
          left: `${a.value}px`,
          top: `${h.value}px`
        };
    }), w = () => {
      if (!d.value || !(r != null && r.value))
        return;
      const y = r.value.getBoundingClientRect();
      a.value = 0, h.value = 0, Ke(() => {
        const v = y.left, m = y.top + document.documentElement.scrollTop, g = d.value.$el.offsetWidth, E = (g - y.width) / 2;
        y.left - E < 0 ? a.value = v : y.left + E + y.width > document.body.clientWidth ? a.value = v - g + y.width : a.value = v - E;
        const D = d.value.$el.offsetHeight;
        y.bottom + D > document.body.clientHeight ? h.value = m - D : h.value = m + y.height;
      });
    }, P = n != null && n.value ? new ResizeObserver(() => w()) : void 0;
    return Me(
      o,
      (y) => {
        !(n != null && n.value) || !P || (P.disconnect(), y && Ke(() => {
          w(), P.observe(d.value.$el);
        }));
      },
      {
        immediate: !0
      }
    ), (y, v) => (O(), I(ln, { to: "#app > .app-container" }, [
      T(cn, {
        class: H(["no-spacing popover", p.value]),
        ref_key: "popover",
        ref: d,
        style: un(c.value)
      }, {
        default: S(() => [
          St(y.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["class", "style"])
    ]));
  }
});
const eo = /* @__PURE__ */ ye(Ks, [["__scopeId", "data-v-d948a8f2"]]), to = /* @__PURE__ */ ge({
  __name: "DetailsSelector",
  props: {
    labels: {},
    open: { type: Boolean, default: !1 },
    title: {}
  },
  emits: ["hideDetails", "showDetails"],
  setup(e, { emit: t }) {
    const n = e, { labels: r, open: s, title: o } = we(n), a = A(!1), d = A(), h = A(), p = (P) => {
      var y, v;
      !P.target || (y = h.value) != null && y.contains(P.target) || (v = d.value) != null && v.$el.contains(P.target) || (a.value = !1, window.removeEventListener("mouseup", p));
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
    }, w = (P) => {
      if (a.value = !1, s.value) {
        t("hideDetails");
        return;
      }
      t("showDetails", P);
    };
    return pr(() => {
      window.removeEventListener("mouseup", p);
    }), (P, y) => (O(), B("div", {
      class: "details-selector-container",
      ref_key: "root",
      ref: h,
      onClick: y[0] || (y[0] = Ve(() => c(), ["stop"]))
    }, [
      T(ee, {
        class: "details-selector",
        vertical: "center"
      }, {
        default: S(() => [
          _(o) ? (O(), I(j, {
            key: 0,
            mood: "important-alt",
            size: "small"
          }, {
            default: S(() => [
              L(N(_(o)), 1)
            ]),
            _: 1
          })) : V("", !0),
          T(Ue, {
            value: _(s) ? "chevron-up" : "chevron-down",
            mood: "important-alt",
            size: "large-2"
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      T(eo, {
        ref_key: "popover",
        ref: d,
        parentNode: h.value,
        visible: a.value,
        autoPosition: "",
        popoverClass: "details-selector-popover"
      }, {
        default: S(() => [
          (O(!0), B(X, null, ke(_(r), (v, m) => (O(), I(j, {
            class: "dropdown-item",
            onClick: Ve(() => w(m), ["stop"]),
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
const no = /* @__PURE__ */ ye(to, [["__scopeId", "data-v-4d4dbc91"]]), ro = { class: "pagination" }, so = ["onClick"], oo = /* @__PURE__ */ ge({
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
    const n = e, { currentPageSize: r, id: s, pageNumber: o, pageRadius: a, pageSizeLabel: d, pageSizes: h, rowCount: p } = we(n), c = U(() => Math.min(...h.value)), w = U(() => Math.ceil(p.value / r.value)), P = U(
      () => h.value.reduce((m, g) => (m[g] = g.toString(), m), {})
    ), y = U(() => {
      const m = [];
      for (let g = a.value - 1; g > 0; g--)
        o.value > g && m.push(o.value - g);
      m.push(o.value);
      for (let g = 1; g < a.value; g++)
        o.value < w.value - g - 1 && m.push(o.value + g);
      return m;
    }), v = (m) => {
      r.value !== m && t("update:currentPageSize", m);
    };
    return (m, g) => (O(), B("div", ro, [
      _(p) > _(r) ? (O(), B(X, { key: 0 }, [
        _(o) > 0 ? (O(), I(j, {
          key: 0,
          class: "page",
          onClick: g[0] || (g[0] = () => t("update:pageNumber", 0)),
          mood: "important-alt"
        }, {
          default: S(() => [
            L("1")
          ]),
          _: 1
        })) : V("", !0),
        _(o) > _(a) ? (O(), I(j, {
          key: 1,
          class: "page-separator"
        }, {
          default: S(() => [
            L("…")
          ]),
          _: 1
        })) : V("", !0),
        (O(!0), B(X, null, ke(y.value, (E) => (O(), B("div", {
          class: H(["page", { current: E === _(o) }]),
          onClick: () => t("update:pageNumber", E),
          key: E
        }, N(E + 1), 11, so))), 128)),
        _(o) < w.value - _(a) - 1 ? (O(), I(j, {
          key: 2,
          class: "page-separator"
        }, {
          default: S(() => [
            L("…")
          ]),
          _: 1
        })) : V("", !0),
        _(o) < w.value - 1 ? (O(), I(j, {
          key: 3,
          class: "page",
          onClick: g[1] || (g[1] = () => t("update:pageNumber", w.value - 1)),
          mood: "important-alt"
        }, {
          default: S(() => [
            L(N(w.value), 1)
          ]),
          _: 1
        })) : V("", !0),
        T(j, { class: "page-size-label" }, {
          default: S(() => [
            L(N(_(d)), 1)
          ]),
          _: 1
        })
      ], 64)) : V("", !0),
      _(p) > c.value ? (O(), I(dn, {
        key: 1,
        class: "page-size-selector",
        "onUpdate:modelValue": g[2] || (g[2] = (E) => v(parseInt(E.toString()))),
        id: _(s),
        items: P.value,
        modelValue: _(r)
      }, {
        item: S(({ item: E }) => [
          L(N(E), 1)
        ]),
        _: 1
      }, 8, ["id", "items", "modelValue"])) : V("", !0)
    ]));
  }
});
const ao = /* @__PURE__ */ ye(oo, [["__scopeId", "data-v-764cc1be"]]), lo = (e) => (on("data-v-b4f986aa"), e = e(), an(), e), io = /* @__PURE__ */ lo(() => /* @__PURE__ */ J("i", { class: "la la-eye secondary" }, null, -1)), uo = /* @__PURE__ */ ge({
  __name: "TrendChart",
  props: {
    formatter: { type: Function },
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { formatter: n, title: r, url: s } = we(t), o = A(!1), a = A([]), d = A(), h = U(() => d.value ? Object.assign({}, d.value) : {}), p = U(() => {
      var g;
      switch ((g = d.value) == null ? void 0 : g.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return d.value[0];
        default:
          return d.value.slice(d.value.length / 2).reduce((E, D) => E + D, 0) / Math.ceil(d.value.length / 2);
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
          return d.value.slice(0, d.value.length / 2).reduce((E, D) => E + D, 0) / Math.floor(d.value.length / 2);
      }
    }), w = U(() => c.value > p.value ? "negative" : c.value < p.value ? "positive" : "neutral"), P = U(() => {
      if (!d.value)
        return {};
      const g = new Array(d.value.length).fill(0).map(
        (E, D) => c.value + (p.value - c.value) * D / (d.value.length - 1)
      );
      return Object.assign({}, g);
    }), y = async () => {
      if (!d.value)
        return;
      const g = (await tt({ url: s.value })).data;
      a.value = Object.keys(g), d.value = Object.values(g);
    }, v = () => {
      o.value = !1, window.removeEventListener("mouseup", v);
    }, m = async () => {
      o.value = !0, window.addEventListener("mouseup", v), await y();
    };
    return (g, E) => (O(), B("div", {
      class: "trend-chart-container",
      onClick: E[0] || (E[0] = Ve(() => m(), ["stop"]))
    }, [
      io,
      T(Pt, {
        visible: o.value,
        parentClass: "cell",
        popoverClass: "trend-chart-popover"
      }, {
        default: S(() => [
          _(r) ? (O(), I($e, {
            key: 0,
            size: "small-3"
          }, {
            default: S(() => [
              L(N(_(r)), 1)
            ]),
            _: 1
          })) : V("", !0),
          d.value ? (O(), I(gr, {
            key: 1,
            activeLines: ["values"],
            formatters: { trend: _(n), values: _(n) },
            moods: { trend: { mood: w.value }, values: { mood: "important" } },
            styles: { trend: "line", values: "line" },
            values: { trend: P.value, values: h.value }
          }, {
            "x-axis-label": S(({ index: D }) => [
              L(N(a.value[D]), 1)
            ]),
            _: 1
          }, 8, ["formatters", "moods", "values"])) : (O(), I(Tt, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const co = /* @__PURE__ */ ye(uo, [["__scopeId", "data-v-b4f986aa"]]), fo = { class: "common-table" }, po = {
  key: 0,
  class: "controls d-flex justify-content-end mb-1"
}, vo = ["onMouseover", "onMouseout"], mo = ["href"], ho = ["href"], bo = ["onClick"], _t = 50, go = /* @__PURE__ */ ge({
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
    uncolorizeLabel: {}
  },
  emits: ["move:column"],
  setup(e, { emit: t }) {
    const n = e, r = async (l, u) => typeof l == "function" ? await l(u) : (await tt({
      ...l,
      params: {
        ...l.params,
        ...u
      }
    })).data, s = async (l, u) => typeof l == "function" ? await l(u) : (await tt({
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
      columnDetails: w,
      columnLinks: P,
      comparisonColumns: y,
      comparisonRequest: v,
      defaultOrderBy: m,
      detailsColumn: g,
      detailsRequests: E,
      dragColumns: D,
      fixedColumnNumber: Q,
      inlineFilterOperators: Z,
      inversedKpis: _e,
      primaryColumn: W,
      primaryColumnAlias: ie,
      request: Y,
      rows: ue,
      shortenColumns: te,
      showInlineFilters: re,
      showRowNumber: lt,
      showPagination: it,
      showTopTotal: Le,
      total: Ee,
      totalColumnKey: ut,
      trendUrl: De
    } = we(n), Be = () => {
      const l = {};
      for (const u of Object.keys(c.value))
        u in Z.value && (l[u] = {
          operator: Object.keys(Z.value[u])[0],
          value: ""
        });
      return l;
    }, xe = A([]), ce = A({}), ve = A([]), Ie = A({}), Se = A([]), x = A({}), R = A(!1), k = A(!1), G = A([]), Re = A(!1), K = A(Be()), de = A(!0), oe = A(), me = A(0), Ce = A(20), We = A(0), se = A(), fe = A(), Dn = U(() => {
      const l = {};
      return k.value && (l.inline_filters = {
        icon: "filter"
      }), l;
    }), Bn = U(
      () => y != null && y.value ? Object.keys(y.value) : void 0
    ), In = U(
      () => Se.value.reduce((l, u) => (l[u] = js(c.value[u]), l), {})
    ), Bt = U(() => {
      if (E != null && E.value)
        return Object.entries(E.value).reduce((l, [u, { label: i }]) => (l[u] = i, l), {});
    }), It = U(() => [...xe.value].sort((l, u) => {
      const i = (() => {
        const b = dt(
          oe.value[0].reduce(($, z) => $[z], l),
          c.value[oe.value[0][0]].type
        ), C = dt(
          oe.value[0].reduce(($, z) => $[z], u),
          c.value[oe.value[0][0]].type
        );
        return b > C ? 1 : b < C ? -1 : 0;
      })();
      return oe.value[1] ? -i : i;
    })), zt = U(() => !(Y != null && Y.value) || Re.value ? It.value : It.value.slice(
      me.value * Ce.value,
      (me.value + 1) * Ce.value
    )), zn = (l) => {
      ve.value.includes(l) || ve.value.push(l);
    }, Ge = (l, u) => !te.value || !te.value.includes(l) ? !1 : u.length > _t, jn = (l) => !!l.tooltipTitle && !!l.tooltipDescription, Te = (l, u, i) => {
      var C;
      if (!i || !(y != null && y.value) || !(i in y.value) || y.value[i].format !== "difference")
        return;
      const b = ((C = _e == null ? void 0 : _e.value) == null ? void 0 : C.includes(u)) ?? !1;
      return l > 0 ? b ? "negative" : "positive" : l < 0 ? b ? "positive" : "negative" : "neutral";
    }, Pe = (l, u, i) => {
      let b = dt(l, u);
      switch (u) {
        case "float":
          return be(parseFloat(b)).format("0,0.00");
        case "int":
          return be(parseInt(b)).format("0,0");
        case "money": {
          let C = "0,0";
          a.value > 0 && (C += "." + "0".repeat(a.value));
          const $ = be(parseFloat(b)).format(C);
          return h.value ? d.value + " " + $ : $ + " " + d.value;
        }
        case "money_capped": {
          const C = parseFloat(b.toFixed(a.value)) == 0;
          if (b > 0 && b < 1 && C) {
            const $ = a.value === 0 ? 1 : parseFloat("0." + "0".repeat(a.value - 1) + "1");
            return h.value ? `< ${d.value} ${$}` : `< ${$} ${d.value}`;
          } else
            return Pe(l, "money", i);
        }
        case "percent": {
          let C = be(parseFloat(b)).format("0,0.00") + "%";
          return i === "difference" && b > 0 && (C = `+${C}`), C;
        }
        case "time":
          return `${Pe(Math.floor(parseInt(b) / 60), "int")}mn${Pe(
            parseInt(b) % 60,
            "int"
          )}s`;
        default:
          return b.toString();
      }
    }, Un = async (l, u) => {
      if (ce.value[l] && ce.value[l][u[W.value]])
        return ce.value[l][u[W.value]];
      const { rows: i } = await r(E.value[l].request, {
        row: u,
        primaryColumn: (ie == null ? void 0 : ie.value) ?? W.value,
        primaryColumnValue: u[W.value]
      });
      return ce.value[l] || (ce.value[l] = {}), ce.value[l][u[W.value]] = Object.values(i), ce.value[l][u[W.value]];
    }, jt = (l, u) => {
      const i = new URL(l.url, location.origin);
      if (Array.isArray(l.columns))
        for (const b of l.columns)
          i.searchParams.set(b, u[b]);
      else
        for (const [b, C] of Object.entries(l.columns))
          i.searchParams.set(C, u[b]);
      return i;
    }, $n = (l, u) => {
      const i = new URL(w.value[l].baseUrl, location.origin);
      if (Array.isArray(w.value[l].columns))
        for (const b of w.value[l].columns)
          i.searchParams.set(b, u[b]);
      else
        for (const [b, C] of Object.entries(w.value[l].columns))
          i.searchParams.set(C, u[b]);
      return i.toString();
    }, Mn = (l) => {
      if (l.totalUrl)
        return new URL(l.totalUrl).toString();
      const u = new URL(l.baseUrl);
      return u.searchParams.set("total", "true"), u.toString();
    }, Vn = (l) => !te.value || !te.value.includes(l) ? -1 : G.value.indexOf(l), Hn = (l) => {
      if (l in K.value)
        return K.value[l].operator;
    }, qn = (l) => {
      if (l in K.value)
        return K.value[l].value;
    }, ct = (l) => Z.value[l], Jn = (l) => {
      const u = ct(l);
      if (!u)
        return;
      const i = ["normal", "small"];
      let b = 0;
      for (const C of Object.values(u)) {
        const $ = i.indexOf(C.size ?? "normal");
        $ > b && (b = $);
      }
      return {
        [`size-${i[b]}`]: !0
      };
    }, Wn = (l) => {
      const u = ct(l);
      return u ? Object.entries(u).reduce((i, [b, C]) => (i[b] = C.label, i), {}) : {};
    }, Gn = (l) => c.value[l].type === "string" ? "text" : "number", Ut = () => `Table_OrderBy_${location.pathname}`, Xn = () => `Table_PageSize_${location.pathname}`, dt = (l, u) => {
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
    }, Oe = (l, u, i, b = !1) => {
      const [C, $] = (() => !i || !(y != null && y.value) || !(i in y.value) ? [c.value[u].type, void 0] : [
        y.value[i].type ?? c.value[u].type,
        y.value[i].format
      ])();
      let z = Pe(l, C);
      return $ === "difference" && (z = l > 0 ? `+${z}` : z), b ? Vt(z, u) : z;
    }, Yn = (l, u) => {
      if (!De)
        return "";
      const i = new URL(
        u ? De.value[u] : De.value,
        location.origin
      );
      return i.searchParams.set((ie == null ? void 0 : ie.value) ?? W.value, l[W.value]), i.toString();
    }, Xe = (l, u, i) => Ge(l, u) ? [] : i ? (g == null ? void 0 : g.value) === l ? ["flex-grow-1", "text-left"] : te.value && te.value.includes(l) && zt.value.some((b) => Ge(l, b[l])) ? ["flex-grow-1", "text-left"] : ["flex-grow-1"] : ["flew-grow-1"], Qn = (l) => l in Z.value, Zn = () => {
      re.value && (R.value = !1);
    }, $t = (l, u) => !(!(P != null && P.value) || !(u in P.value) || "disable_for" in P.value[u] && P.value[u].disable_for.includes(l[W.value])), Kn = (l, u) => {
      const [i] = Se.value.splice(l, 1);
      Se.value.splice(u, 0, i), t("move:column", { from: l, to: u });
    }, er = (l) => {
      const u = ve.value.indexOf(l);
      u < 0 || ve.value.splice(u, 1);
    }, Mt = (l, u) => {
      Ie.value[l] = u;
    }, Vt = (l, u) => !te.value || !te.value.includes(u) || l.length <= _t ? l : `${l.substring(0, _t - 3)}...`, tr = (l) => {
      if (!fe.value)
        return;
      const u = {
        left: fe.value.$el.scrollLeft,
        top: fe.value.$el.scrollTop
      };
      delete x.value[l[W.value]], Ke(() => {
        fe.value.$el.scrollTo(u);
      });
    }, nr = (l, u) => {
      const i = l.target.value;
      qt(u, { value: i });
    }, rr = (l, u) => {
      l.key === "Enter" && l.target.blur();
    }, sr = async (l, u) => {
      if (!fe.value)
        return;
      const i = {
        left: fe.value.$el.scrollLeft,
        top: fe.value.$el.scrollTop
      };
      de.value = !0, x.value[u[W.value]] = await Un(l, u), Ke(() => {
        fe.value.$el.scrollTo(i), de.value = !1;
      });
    }, or = async (l = !1) => {
      await lr(l) || await ar(l) || await pt(l);
    }, ft = async (l) => {
      await vt(l), me.value = l;
    }, Ht = async (l) => {
      const u = Xn();
      if (l === void 0) {
        const i = localStorage.getItem(u);
        i && (Ce.value = parseInt(i));
      } else
        localStorage.setItem(u, l.toString()), await vt(0, l), me.value = 0, Ce.value = l;
    }, qt = (l, { operator: u, value: i }) => {
      if (u || (u = Object.keys(ct(l))[0]), !u)
        return;
      const b = {
        ...K.value[l],
        operator: u
      };
      i !== void 0 && (b.value = i), K.value[l] = b, ft(0);
    }, ar = async (l) => {
      const u = (() => {
        for (const C in localStorage) {
          if (!C.startsWith("DataTables_"))
            continue;
          const $ = C.substring(C.indexOf("/"));
          if (location.pathname !== $)
            return;
          const z = localStorage.getItem(C);
          return z ? JSON.parse(z) : void 0;
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
    }, pt = async (l) => {
      if (m != null && m.value) {
        await Ae(m.value, !1, l);
        return;
      }
      const [u, { colspan: i }] = Object.entries(c.value).find(
        ([b, { visible: C }]) => C
      );
      if (i === -1) {
        await Ae([[u], !1], !1, l);
        return;
      }
      await Ae(
        [
          [
            u,
            (y != null && y.value ? Object.keys(y.value)[0] : 0).toString()
          ],
          !1
        ],
        !1,
        l
      );
    }, lr = async (l) => {
      const u = localStorage.getItem(Ut());
      if (u) {
        const i = JSON.parse(u)[0][0];
        if (c.value[i])
          return await Ae(JSON.parse(u), !1, l), !0;
      } else
        return !1;
    }, ir = async (l, u, i) => {
      if (!(Y != null && Y.value))
        return !1;
      if (Re.value)
        return !0;
      const [b, C] = await (async () => {
        const $ = [
          s(Y.value, {
            inlineFilters: K.value,
            pageNumber: l,
            pageSize: u,
            orderBy: i[0],
            reversed: i[1]
          })
        ];
        v != null && v.value && $.push(
          s(v.value, {
            inlineFilters: K.value,
            pageNumber: l,
            pageSize: u,
            orderBy: i[0],
            reversed: i[1]
          })
        );
        const z = await Promise.all($);
        if (z.length > 1 && z.some((ze) => ze.paginated === !0))
          throw new Error("Paginated fetching is not supported for separate comparison requests.");
        return z;
      })();
      return xe.value = Object.values(
        C ? Us(
          b.rows,
          C.rows,
          c.value,
          W.value
        ) : b.rows
      ), Re.value = b.paginated !== !0, We.value = b.rowCount, b.detailedRows ? x.value = b.detailedRows : x.value = {}, b.total && (se.value = C ? Ln(b.total, C.total, c.value) : b.total), !0;
    }, ur = () => {
      if (!(ue != null && ue.value))
        return !1;
      let l = Object.values(ue.value);
      for (const [u, i] of Object.entries(K.value))
        i.value && (l = l.filter(
          (b) => Z.value[u][i.operator].callback(
            b[u],
            i.value
          )
        ));
      return xe.value = l, We.value = l.length, !0;
    }, vt = async (l, u, i) => {
      l === void 0 && (l = me.value), u === void 0 && (u = Ce.value), i === void 0 && (i = oe.value), de.value = !0, ur() || await ir(me.value, Ce.value, oe.value), de.value = !1;
    }, cr = () => {
      re.value && (R.value = !0);
    }, dr = (l) => {
      if (!te.value || !te.value.includes(l))
        return;
      const u = Vn(l);
      u >= 0 ? G.value.splice(u, 1) : G.value.push(l);
    }, fr = () => {
      k.value = !k.value, k.value && (K.value = Be());
    }, Ae = async (l, u = !0, i = !0) => {
      me.value = 0, oe.value = l, i && await vt(void 0, void 0, l), u && localStorage.setItem(Ut(), JSON.stringify(l));
    };
    return vr(() => {
      Se.value = Object.keys(c.value), se.value = Ee == null ? void 0 : Ee.value, Promise.all([pt(!1), Ht()]).then(() => or(!0));
    }), Me(c, () => {
      Se.value = Object.keys(c.value), K.value = Be();
    }), m && Me(m, () => {
      pt(!0);
    }), Y && Me(
      Y,
      () => {
        Re.value = !1, ft(0);
      },
      { deep: !0 }
    ), (l, u) => (O(), B("div", fo, [
      _(it) ? (O(), B("div", po, [
        T(ao, {
          "onUpdate:pageNumber": u[0] || (u[0] = (i) => ft(i)),
          "onUpdate:currentPageSize": u[1] || (u[1] = (i) => Ht(i)),
          currentPageSize: Ce.value,
          pageNumber: me.value,
          pageSizeLabel: l.pageSizeLabel,
          rowCount: We.value
        }, null, 8, ["currentPageSize", "pageNumber", "pageSizeLabel", "rowCount"])
      ])) : V("", !0),
      J("div", {
        class: "table-container",
        onMouseover: u[7] || (u[7] = () => cr()),
        onMouseout: u[8] || (u[8] = () => Zn())
      }, [
        J("div", {
          class: H(["action-buttons", { active: R.value }])
        }, [
          _(re) ? (O(), B("button", {
            key: 0,
            class: "btn btn-small btn-success",
            onClick: u[2] || (u[2] = () => fr())
          }, [
            J("div", {
              class: H(["las", k.value ? "la-trash" : "la-filter"])
            }, null, 2)
          ])) : V("", !0)
        ], 2),
        oe.value ? (O(), I(yr, {
          key: 0,
          ref_key: "table",
          ref: fe,
          onAddColoredMetric: u[3] || (u[3] = (i) => zn(i)),
          "onMove:column": u[4] || (u[4] = ({ from: i, to: b }) => Kn(i, b)),
          onRemoveColoredMetric: u[5] || (u[5] = (i) => er(i)),
          "onUpdate:orderBy": u[6] || (u[6] = (i) => Ae(i)),
          additionalHeaders: Dn.value,
          cellClasses: _(o),
          colorMetrics: _(p),
          coloredMetrics: ve.value,
          columns: In.value,
          comparisonColumnKeys: Bn.value,
          detailsRows: x.value,
          dragColumns: _(D),
          fixedColumnNumber: _(Q),
          inversedKpis: _(_e),
          orderBy: oe.value,
          primaryColumn: _(W),
          rows: zt.value,
          showRowNumber: _(lt),
          showTotal: !!se.value,
          showTopTotal: _(Le)
        }, mr({
          colorizeLabel: S(({ enabled: i }) => [
            T(j, {
              mood: "white",
              size: "small"
            }, {
              default: S(() => [
                i ? (O(), B(X, { key: 0 }, [
                  L(N(l.uncolorizeLabel), 1)
                ], 64)) : (O(), B(X, { key: 1 }, [
                  L(N(l.colorizeLabel), 1)
                ], 64))
              ]),
              _: 2
            }, 1024)
          ]),
          columnRowNumber: S(() => [
            T(j, {
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
            T(j, {
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
            T(j, {
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
            J("div", {
              class: "d-flex align-items-center",
              onMouseover: () => Mt(i, !0),
              onMouseout: () => Mt(i, !1)
            }, [
              T(j, {
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  L(N(_(c)[i].label), 1)
                ]),
                _: 2
              }, 1024),
              !b && jn(_(c)[i]) ? (O(), I(Zs, {
                key: 0,
                description: _(c)[i].tooltipDescription,
                title: _(c)[i].tooltipTitle,
                visible: Ie.value[i]
              }, null, 8, ["description", "title", "visible"])) : V("", !0)
            ], 40, vo)
          ]),
          row: S(({ columnKey: i, index: b, row: C, spanIndex: $, subcolumnKey: z, subindex: ze, value: q }) => [
            St(l.$slots, "row", hr(br({
              columnKey: i,
              index: b,
              row: C,
              spanIndex: $,
              subcolumnKey: z,
              subindex: ze,
              value: q
            })), () => [
              ze === void 0 && i === "trend" ? (O(), I(co, {
                key: 0,
                class: H(Xe(i, q, C.rowInfo.detailable)),
                formatter: (mt) => Pe(mt, "int"),
                title: l.trendChartTitle,
                url: Yn(C, z)
              }, null, 8, ["class", "formatter", "title", "url"])) : C.rowInfo.detailable && i === _(g) ? (O(), B(X, { key: 1 }, [
                $t(C, i) && C.rowInfo.detailable ? (O(), I(j, {
                  key: 0,
                  class: H(Xe(i, q, C.rowInfo.detailable)),
                  mood: Te(q, i, z),
                  contrast: "",
                  size: "small"
                }, {
                  default: S(() => [
                    J("a", {
                      class: "column-link",
                      href: jt(_(P)[i], C).toString()
                    }, N(Oe(q, i, z, !0)), 9, mo)
                  ]),
                  _: 2
                }, 1032, ["class", "mood"])) : (O(), I(j, {
                  key: 1,
                  mood: Te(q, i, z),
                  contrast: "",
                  size: "small"
                }, {
                  default: S(() => [
                    L(N(Oe(q, i, z)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"]))
              ], 64)) : $t(C, i) && C.rowInfo.detailable ? (O(), I(j, {
                key: 2,
                class: H(Xe(i, q, C.rowInfo.detailable)),
                mood: Te(q, i, z),
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  J("a", {
                    class: "column-link",
                    href: jt(_(P)[i], C).toString()
                  }, N(Oe(q, i, z, !0)), 9, ho)
                ]),
                _: 2
              }, 1032, ["class", "mood"])) : ze === void 0 && q >= 0.01 && i in _(w) ? (O(), I(sn, {
                key: 3,
                format: _(w)[i].format,
                label: Oe(q, i, z, !0),
                title: _(w)[i].title,
                url: $n(i, C)
              }, null, 8, ["format", "label", "title", "url"])) : (O(), I(j, {
                key: 4,
                class: H(Xe(i, q, C.rowInfo.detailable)),
                mood: Te(q, i, z),
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  L(N(Oe(q, i, z, !0)), 1)
                ]),
                _: 2
              }, 1032, ["class", "mood"])),
              Ge(i, q) ? (O(), B("i", {
                key: 5,
                class: H(["flex-grow-1 expand-column fa", G.value.includes(i) ? "fa-compress-alt" : "fa-expand-alt"]),
                onClick: () => dr(i)
              }, null, 10, bo)) : V("", !0),
              Bt.value && C.rowInfo.detailable && i === _(g) ? (O(), B(X, { key: 6 }, [
                Ge(i, q) ? V("", !0) : (O(), I(wr, { key: 0 })),
                T(no, {
                  onHideDetails: () => tr(C),
                  onShowDetails: (mt) => sr(mt, C),
                  labels: Bt.value,
                  open: x.value[C[_(W)]] !== void 0,
                  title: l.detailsSelectorTitle
                }, null, 8, ["onHideDetails", "onShowDetails", "labels", "open", "title"])
              ], 64)) : V("", !0)
            ], !0)
          ]),
          additionalHeader: S(({ additionalHeader: i, columnKey: b }) => [
            i === "inline_filters" && Qn(b) ? (O(), B("div", {
              key: 0,
              class: H(["d-flex inline-filter", Jn(b)])
            }, [
              T(dn, {
                class: "inline-filter-dropdown",
                "onUpdate:modelValue": (C) => qt(b, { operator: C.toString() }),
                id: `additional_header_${b}`,
                items: Wn(b),
                modelValue: Hn(b)
              }, {
                item: S(({ item: C }) => [
                  T(j, {
                    contrast: "",
                    size: "small"
                  }, {
                    default: S(() => [
                      L(N(C), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["onUpdate:modelValue", "id", "items", "modelValue"]),
              T(fn, {
                class: "flex-grow-1 inline-filter-input",
                onBlur: (C) => nr(C, b),
                onKeyup: (C) => rr(C),
                modelValue: qn(b),
                type: Gn(b)
              }, null, 8, ["onBlur", "onKeyup", "modelValue", "type"])
            ], 2)) : V("", !0)
          ]),
          total: S(({ columnKey: i, subcolumnKey: b, values: C }) => [
            St(l.$slots, _(Ee), {
              columnKey: i,
              subcolumnKey: b,
              values: C
            }, () => [
              l.totalTitle && i === _(ut) ? (O(), I(j, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  L(N(l.totalTitle(We.value ?? xe.value.length)), 1)
                ]),
                _: 1
              })) : se.value ? (O(), B(X, { key: 1 }, [
                se.value && se.value[i] >= 0.01 && i in _(w) ? (O(), I(sn, {
                  key: 0,
                  format: _(w)[i].format,
                  label: Vt(Pe(se.value[i], _(c)[i].type, _(y) && b ? _(y)[b].format : void 0), i),
                  title: _(w)[i].title,
                  url: Mn(_(w)[i])
                }, null, 8, ["format", "label", "title", "url"])) : b ? (O(), I(j, {
                  key: 1,
                  mood: Te(se.value[i][b], i, b),
                  contrast: "",
                  size: "small"
                }, {
                  default: S(() => [
                    L(N(Oe(se.value[i][b], i, b)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"])) : (O(), I(j, {
                  key: 2,
                  mood: Te(se.value[i], i, b),
                  contrast: "",
                  size: "small"
                }, {
                  default: S(() => [
                    L(N(Oe(se.value[i], i)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"]))
              ], 64)) : V("", !0)
            ], !0)
          ]),
          _: 2
        }, [
          _(y) ? {
            name: "secondaryColumn",
            fn: S(({ subcolumnKey: i }) => [
              i ? (O(), I(j, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  L(N(_(y)[i].label), 1)
                ]),
                _: 2
              }, 1024)) : V("", !0)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "dragColumns", "fixedColumnNumber", "inversedKpis", "orderBy", "primaryColumn", "rows", "showRowNumber", "showTotal", "showTopTotal"])) : V("", !0)
      ], 32),
      J("div", {
        class: H(["loading-overlay", { visible: de.value }])
      }, [
        T(Tt)
      ], 2)
    ]));
  }
});
const Io = /* @__PURE__ */ ye(go, [["__scopeId", "data-v-1924f6b4"]]), wo = ["onClick"], yo = ["onClick"], _o = { class: "items" }, So = /* @__PURE__ */ ge({
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
    const n = e, { columns: r, defaultValue: s, groupNames: o, modelValue: a, showModalLabel: d } = we(n), h = A(Object.keys(o.value)[0]), p = A([...a.value]), c = A([]), w = A([]), P = A(""), y = A(void 0), v = A({ left: 0, top: 0 }), m = A({ left: 0, top: 0 }), g = A({ left: 0, top: 0 }), E = A(void 0), D = A(void 0), Q = A(void 0), Z = A(void 0), _e = U(() => Object.fromEntries(
      Object.entries(r.value).filter(
        ([x, R]) => R.fixed !== !0 && (P.value.trim() === "" || R.label.toLowerCase().includes(P.value.trim().toLowerCase()))
      )
    )), W = U(() => Object.keys(o.value).reduce((x, R) => (x[R] = Object.fromEntries(
      Object.entries(_e.value).filter(([k, G]) => G.group === R)
    ), x), {})), ie = U(
      () => h.value === void 0 ? void 0 : W.value[h.value]
    ), Y = U(() => Object.fromEntries(
      Object.entries(o.value).filter(
        ([x, R]) => Object.values(_e.value).some((k) => k.group === x)
      )
    )), ue = U(() => {
      if (!(D.value === void 0 || Q.value === void 0 || Z.value === void 0))
        return D.value + Z.value - Q.value - g.value.top;
    }), te = U(() => {
      if (ue.value !== void 0)
        return `${ue.value}px`;
    }), re = U(() => {
      if (E.value === void 0 || ue.value === void 0)
        return;
      const x = p.value.indexOf(E.value), R = x - 1 - p.value.slice(0, x).reverse().findIndex((de) => r.value[de].fixed === !0);
      let k = p.value.slice(x + 1).findIndex((de) => r.value[de].fixed === !0);
      k >= 0 ? k += x + 1 : k = p.value.length;
      const G = lt(p.value[R]), Re = G.offsetHeight, K = Math.min(
        Math.round((ue.value - G.offsetTop) / Re - 1),
        k - R - 1
      );
      return R + K + 1;
    }), lt = (x) => w.value[p.value.indexOf(x)], it = (x) => c.value[p.value.indexOf(x)], Le = (x = !1, R) => {
      R && R.target !== R.currentTarget || (x && (p.value = [...a.value]), y.value = !1, h.value = Object.keys(o.value)[0]);
    }, Ee = (x) => {
      const R = p.value.indexOf(x);
      R >= 0 && p.value.splice(R, 1);
    }, ut = () => {
      p.value = [...s.value];
    }, De = (x) => {
      const R = [...x];
      t("update:modelValue", R), Le(!1);
    }, Be = (x) => {
      h.value = x.toString();
    }, xe = () => {
      y.value = !0;
    }, ce = (x) => {
      const R = p.value.indexOf(x);
      R >= 0 ? p.value.splice(R, 1) : p.value.push(x);
    }, ve = (x) => {
      Z.value = x.clientY;
    }, Ie = () => {
      const x = re.value;
      if (E.value !== void 0 && x !== void 0) {
        const R = p.value.indexOf(E.value);
        p.value.splice(R, 1), p.value.splice(x, 0, E.value);
      }
      E.value = void 0, D.value = void 0, Q.value = void 0, Z.value = void 0, window.removeEventListener("mousemove", ve), window.removeEventListener("mouseup", Ie);
    }, Se = (x, R) => {
      E.value = R, D.value = it(R).$el.offsetTop, Q.value = x.clientY, Z.value = x.clientY, window.addEventListener("mousemove", ve), window.addEventListener("mouseup", Ie);
    };
    return Me(P, (x) => {
      x ? (!h.value || !(h.value in Y.value)) && (h.value = Object.keys(Y.value)[0]) : h.value || (h.value = Object.keys(Y.value)[0]);
    }), (x, R) => (O(), B(X, null, [
      T(Jt, {
        onClick: R[0] || (R[0] = () => xe()),
        label: _(d),
        mood: "neutral",
        tabindex: "-1"
      }, null, 8, ["label"]),
      (O(), I(ln, { to: "#app > .app-container" }, [
        T(ee, {
          class: H(["kpi-selector-container no-spacing", { visible: y.value, hidden: y.value === !1 }]),
          onClick: R[8] || (R[8] = Ve((k) => Le(!0, k), ["stop"])),
          column: "",
          horizontal: "center",
          vertical: "center"
        }, {
          default: S(() => [
            T(cn, { class: "kpi-selector" }, {
              default: S(() => [
                T(ee, {
                  class: "title",
                  vertical: "center"
                }, {
                  default: S(() => [
                    T($e, {
                      class: "flex-max",
                      size: "large-2"
                    }, {
                      default: S(() => [
                        L(N(x.title), 1)
                      ]),
                      _: 1
                    }),
                    T(ee, {
                      class: "flex-max no-spacing search-container",
                      vertical: "center"
                    }, {
                      default: S(() => [
                        T(fn, {
                          class: "flex-max search",
                          modelValue: P.value,
                          "onUpdate:modelValue": R[1] || (R[1] = (k) => P.value = k),
                          placeholder: x.filterLabel
                        }, null, 8, ["modelValue", "placeholder"]),
                        T(Ue, {
                          class: "no-spacing",
                          value: "search-alt-2"
                        })
                      ]),
                      _: 1
                    }),
                    T(ee, {
                      class: "close-container flex-max no-spacing",
                      horizontal: "right"
                    }, {
                      default: S(() => [
                        T(Ue, {
                          class: "close",
                          onClick: R[2] || (R[2] = () => Le(!0)),
                          size: "large-3",
                          value: "x"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                T(ee, { class: "body flex-max no-spacing" }, {
                  default: S(() => [
                    h.value !== void 0 && ie.value !== void 0 ? (O(), B(X, { key: 0 }, [
                      T(ee, {
                        class: "groups flex-max",
                        column: ""
                      }, {
                        default: S(() => [
                          T($e, { size: "large-2" }, {
                            default: S(() => [
                              L(N(x.groupsTitle), 1)
                            ]),
                            _: 1
                          }),
                          T(ht, {
                            class: "flex-max no-spacing",
                            "onUpdate:scrollPosition": R[3] || (R[3] = (k) => v.value = k),
                            scrollPosition: v.value
                          }, {
                            default: S(() => [
                              (O(!0), B(X, null, ke(Object.entries(Y.value), ([k, G]) => (O(), B("div", {
                                class: H(["item no-spacing", { selected: h.value === k }]),
                                onClick: () => Be(k)
                              }, [
                                T(j, { size: "small" }, {
                                  default: S(() => [
                                    L(N(G), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ], 10, wo))), 256))
                            ]),
                            _: 1
                          }, 8, ["scrollPosition"])
                        ]),
                        _: 1
                      }),
                      T(ee, {
                        class: "group-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: S(() => [
                          T($e, { size: "large-2" }, {
                            default: S(() => [
                              L(N(_(o)[h.value]), 1)
                            ]),
                            _: 1
                          }),
                          T(ht, {
                            class: "flex-max no-spacing",
                            "onUpdate:scrollPosition": R[4] || (R[4] = (k) => m.value = k),
                            scrollPosition: m.value
                          }, {
                            default: S(() => [
                              (O(!0), B(X, null, ke(Object.entries(ie.value), ([k, G]) => (O(), B("div", {
                                class: H(["item no-spacing", { selected: p.value.includes(k) }]),
                                onClick: () => ce(k),
                                key: k
                              }, [
                                T(j, { size: "small" }, {
                                  default: S(() => [
                                    L(N(G.label), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ], 10, yo))), 128))
                            ]),
                            _: 1
                          }, 8, ["scrollPosition"])
                        ]),
                        _: 1
                      }),
                      T(ee, {
                        class: "enabled-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: S(() => [
                          T(ee, {
                            class: "header",
                            vertical: "center"
                          }, {
                            default: S(() => [
                              T($e, {
                                class: "flex-max",
                                size: "large-2"
                              }, {
                                default: S(() => [
                                  L(N(x.orderTitle), 1)
                                ]),
                                _: 1
                              }),
                              T(j, {
                                class: "reset",
                                onClick: R[5] || (R[5] = () => ut()),
                                mood: "important-alt",
                                size: "small"
                              }, {
                                default: S(() => [
                                  L(N(x.resetLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          T(ht, {
                            class: "flex-max no-spacing",
                            "onUpdate:scrollPosition": R[6] || (R[6] = (k) => g.value = k),
                            contentClass: E.value === void 0 ? void 0 : "dragged",
                            scrollPosition: g.value
                          }, {
                            default: S(() => [
                              J("div", _o, [
                                (O(!0), B(X, null, ke(p.value, (k) => (O(), B("div", {
                                  class: "item-container no-spacing",
                                  ref_for: !0,
                                  ref_key: "enabledColumnContainers",
                                  ref: w
                                }, [
                                  J("div", {
                                    class: H(["separator-top no-spacing", { "place-after": re.value !== void 0 && E.value !== void 0 && k === p.value[re.value] && re.value < p.value.indexOf(E.value) }])
                                  }, null, 2),
                                  T(ee, {
                                    class: H(["item no-spacing", { dragged: k === E.value }]),
                                    ref_for: !0,
                                    ref_key: "enabledColumnElements",
                                    ref: c,
                                    style: un(k === E.value ? { top: te.value } : void 0),
                                    vertical: "center"
                                  }, {
                                    default: S(() => [
                                      _(r)[k].fixed ? (O(), I(j, {
                                        key: 0,
                                        class: H(["flex-max", { fixed: _(r)[k].fixed }]),
                                        size: "small"
                                      }, {
                                        default: S(() => [
                                          L(N(_(r)[k].label), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["class"])) : (O(), B(X, { key: 1 }, [
                                        T(Ue, {
                                          class: "move",
                                          onMousedown: (G) => Se(G, k),
                                          value: "dots-vertical-rounded"
                                        }, null, 8, ["onMousedown"]),
                                        T(j, {
                                          class: "flex-max no-spacing",
                                          size: "small"
                                        }, {
                                          default: S(() => [
                                            L(N(_(r)[k].label), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        T(Ue, {
                                          class: "no-spacing remove",
                                          onClick: () => Ee(k),
                                          value: "trash"
                                        }, null, 8, ["onClick"])
                                      ], 64))
                                    ]),
                                    _: 2
                                  }, 1032, ["class", "style"]),
                                  J("div", {
                                    class: H(["separator-bottom no-spacing", { "place-after": re.value !== void 0 && E.value !== void 0 && k === p.value[re.value] && re.value >= p.value.indexOf(E.value) }])
                                  }, null, 2)
                                ], 512))), 256))
                              ])
                            ]),
                            _: 1
                          }, 8, ["contentClass", "scrollPosition"])
                        ]),
                        _: 1
                      })
                    ], 64)) : (O(), I(ee, {
                      key: 1,
                      class: "flex-max",
                      horizontal: "center",
                      vertical: "center"
                    }, {
                      default: S(() => [
                        T(j, { size: "small" }, {
                          default: S(() => [
                            L(N(x.noColumnsFoundLabel), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }))
                  ]),
                  _: 1
                }),
                T(ee, {
                  class: "controls no-spacing",
                  horizontal: "right"
                }, {
                  default: S(() => [
                    T(Jt, {
                      onClick: R[7] || (R[7] = () => De(p.value)),
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
const zo = /* @__PURE__ */ ye(So, [["__scopeId", "data-v-de9596be"]]);
export {
  Io as CommonTable,
  zo as KpiSelector
};
