import { defineComponent as he, toRefs as be, ref as A, openBlock as O, createElementBlock as D, normalizeClass as J, createElementVNode as M, withModifiers as $e, toDisplayString as N, unref as S, createVNode as T, withCtx as C, createCommentVNode as q, Fragment as Y, renderList as Ae, createBlock as I, pushScopeId as sn, popScopeId as on, computed as U, watch as Ue, nextTick as Ze, Teleport as an, normalizeStyle as ln, renderSlot as wt, onUnmounted as fr, createTextVNode as L, onMounted as pr, createSlots as vr, normalizeProps as mr, guardReactiveProps as hr } from "vue";
import me from "numeral";
import { L as Rt, a as br } from "./LineBarChart-8bc1f7a1.js";
import { P as Tt } from "./Popover-38d3223e.js";
import { _ as ge } from "./_plugin-vue_export-helper-dad06003.js";
import { C as un, A as Q, I as ze } from "./Icon-8f2ed8ba.js";
import { I as j } from "./Info-54758b60.js";
import { D as cn, I as dn, B as qt } from "./Input-7f2c48d4.js";
import { Separator as gr } from "./marker.js";
import { T as _r } from "./Table-7726d33e.js";
import { H as je } from "./Header-8b49a8fe.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "./datetime-31a2b505.js";
function fn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: yr } = Object.prototype, { getPrototypeOf: kt } = Object, tt = ((e) => (t) => {
  const n = yr.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ae = (e) => (e = e.toLowerCase(), (t) => tt(t) === e), nt = (e) => (t) => typeof t === e, { isArray: Pe } = Array, Me = nt("undefined");
function wr(e) {
  return e !== null && !Me(e) && e.constructor !== null && !Me(e.constructor) && K(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const pn = ae("ArrayBuffer");
function Sr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && pn(e.buffer), t;
}
const Cr = nt("string"), K = nt("function"), vn = nt("number"), rt = (e) => e !== null && typeof e == "object", Or = (e) => e === !0 || e === !1, Xe = (e) => {
  if (tt(e) !== "object")
    return !1;
  const t = kt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Er = ae("Date"), xr = ae("File"), Rr = ae("Blob"), Tr = ae("FileList"), kr = (e) => rt(e) && K(e.pipe), Ar = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || K(e.append) && ((t = tt(e)) === "formdata" || // detect form-data instance
  t === "object" && K(e.toString) && e.toString() === "[object FormData]"));
}, Nr = ae("URLSearchParams"), Pr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ve(e, t, { allOwnKeys: n = !1 } = {}) {
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
function mn(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const hn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), bn = (e) => !Me(e) && e !== hn;
function St() {
  const { caseless: e } = bn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && mn(t, s) || s;
    Xe(t[o]) && Xe(r) ? t[o] = St(t[o], r) : Xe(r) ? t[o] = St({}, r) : Pe(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Ve(arguments[r], n);
  return t;
}
const Fr = (e, t, n, { allOwnKeys: r } = {}) => (Ve(t, (s, o) => {
  n && K(s) ? e[o] = fn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Lr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Dr = (e, t, n, r) => {
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
    e = n !== !1 && kt(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ir = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, zr = (e) => {
  if (!e)
    return null;
  if (Pe(e))
    return e;
  let t = e.length;
  if (!vn(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, jr = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && kt(Uint8Array)), Ur = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, $r = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Mr = ae("HTMLFormElement"), Vr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Jt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Hr = ae("RegExp"), gn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Ve(n, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (r[o] = a || s);
  }), Object.defineProperties(e, r);
}, qr = (e) => {
  gn(e, (t, n) => {
    if (K(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (K(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Jr = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Pe(e) ? r(e) : r(String(e).split(t)), n;
}, Wr = () => {
}, Gr = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ht = "abcdefghijklmnopqrstuvwxyz", Wt = "0123456789", _n = {
  DIGIT: Wt,
  ALPHA: ht,
  ALPHA_DIGIT: ht + ht.toUpperCase() + Wt
}, Xr = (e = 16, t = _n.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Yr(e) {
  return !!(e && K(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Qr = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (rt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Pe(r) ? [] : {};
        return Ve(r, (a, d) => {
          const h = n(a, s + 1);
          !Me(h) && (o[d] = h);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Zr = ae("AsyncFunction"), Kr = (e) => e && (rt(e) || K(e)) && K(e.then) && K(e.catch), f = {
  isArray: Pe,
  isArrayBuffer: pn,
  isBuffer: wr,
  isFormData: Ar,
  isArrayBufferView: Sr,
  isString: Cr,
  isNumber: vn,
  isBoolean: Or,
  isObject: rt,
  isPlainObject: Xe,
  isUndefined: Me,
  isDate: Er,
  isFile: xr,
  isBlob: Rr,
  isRegExp: Hr,
  isFunction: K,
  isStream: kr,
  isURLSearchParams: Nr,
  isTypedArray: jr,
  isFileList: Tr,
  forEach: Ve,
  merge: St,
  extend: Fr,
  trim: Pr,
  stripBOM: Lr,
  inherits: Dr,
  toFlatObject: Br,
  kindOf: tt,
  kindOfTest: ae,
  endsWith: Ir,
  toArray: zr,
  forEachEntry: Ur,
  matchAll: $r,
  isHTMLForm: Mr,
  hasOwnProperty: Jt,
  hasOwnProp: Jt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: gn,
  freezeMethods: qr,
  toObjectSet: Jr,
  toCamelCase: Vr,
  noop: Wr,
  toFiniteNumber: Gr,
  findKey: mn,
  global: hn,
  isContextDefined: bn,
  ALPHABET: _n,
  generateString: Xr,
  isSpecCompliantForm: Yr,
  toJSONObject: Qr,
  isAsyncFn: Zr,
  isThenable: Kr
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
const yn = F.prototype, wn = {};
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
Object.defineProperty(yn, "isAxiosError", { value: !0 });
F.from = (e, t, n, r, s, o) => {
  const a = Object.create(yn);
  return f.toFlatObject(e, a, function(h) {
    return h !== Error.prototype;
  }, (d) => d !== "isAxiosError"), F.call(a, e.message, t, n, r, s), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const es = null;
function Ct(e) {
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
function ts(e) {
  return f.isArray(e) && !e.some(Ct);
}
const ns = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function st(e, t, n) {
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
  function v(p) {
    if (p === null)
      return "";
    if (f.isDate(p))
      return p.toISOString();
    if (!h && f.isBlob(p))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(p) || f.isTypedArray(p) ? h && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function c(p, m, g) {
    let R = p;
    if (p && !g && typeof p == "object") {
      if (f.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (f.isArray(p) && ts(p) || (f.isFileList(p) || f.endsWith(m, "[]")) && (R = f.toArray(p)))
        return m = Sn(m), R.forEach(function(ne, re) {
          !(f.isUndefined(ne) || ne === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Gt([m], re, o) : a === null ? m : m + "[]",
            v(ne)
          );
        }), !1;
    }
    return Ct(p) ? !0 : (t.append(Gt(g, m, o), v(p)), !1);
  }
  const _ = [], x = Object.assign(ns, {
    defaultVisitor: c,
    convertValue: v,
    isVisitable: Ct
  });
  function y(p, m) {
    if (!f.isUndefined(p)) {
      if (_.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      _.push(p), f.forEach(p, function(R, B) {
        (!(f.isUndefined(R) || R === null) && s.call(
          t,
          R,
          f.isString(B) ? B.trim() : B,
          m,
          x
        )) === !0 && y(R, m ? m.concat(B) : [B]);
      }), _.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
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
  this._pairs = [], e && st(e, this, t);
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
function rs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function On(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || rs, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = f.isURLSearchParams(t) ? t.toString() : new At(t, n).toString(r), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class ss {
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
const Yt = ss, En = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, os = typeof URLSearchParams < "u" ? URLSearchParams : At, as = typeof FormData < "u" ? FormData : null, ls = typeof Blob < "u" ? Blob : null, is = {
  isBrowser: !0,
  classes: {
    URLSearchParams: os,
    FormData: as,
    Blob: ls
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, xn = typeof window < "u" && typeof document < "u", us = ((e) => xn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), cs = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ds = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: xn,
  hasStandardBrowserEnv: us,
  hasStandardBrowserWebWorkerEnv: cs
}, Symbol.toStringTag, { value: "Module" })), oe = {
  ...ds,
  ...is
};
function fs(e, t) {
  return st(e, new oe.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return oe.isNode && f.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function ps(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function vs(e) {
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
    return a = !a && f.isArray(s) ? s.length : a, h ? (f.hasOwnProp(s, a) ? s[a] = [s[a], r] : s[a] = r, !d) : ((!s[a] || !f.isObject(s[a])) && (s[a] = []), t(n, r, s[a], o) && f.isArray(s[a]) && (s[a] = vs(s[a])), !d);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const n = {};
    return f.forEachEntry(e, (r, s) => {
      t(ps(r), s, n, 0);
    }), n;
  }
  return null;
}
function ms(e, t, n) {
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
        return fs(t, this.formSerializer).toString();
      if ((d = f.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return st(
          d ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), ms(t)) : t;
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
  Nt.headers[e] = {};
});
const Pt = Nt, hs = f.toObjectSet([
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
]), bs = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), n = a.substring(0, s).trim().toLowerCase(), r = a.substring(s + 1).trim(), !(!n || t[n] && hs[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Qt = Symbol("internals");
function Ie(e) {
  return e && String(e).trim().toLowerCase();
}
function Ye(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(Ye) : String(e);
}
function gs(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const _s = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function bt(e, t, n, r, s) {
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
function ws(e, t) {
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
class ot {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(d, h, v) {
      const c = Ie(h);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const _ = f.findKey(s, c);
      (!_ || s[_] === void 0 || v === !0 || v === void 0 && s[_] !== !1) && (s[_ || h] = Ye(d));
    }
    const a = (d, h) => f.forEach(d, (v, c) => o(v, c, h));
    return f.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : f.isString(t) && (t = t.trim()) && !_s(t) ? a(bs(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = Ie(t), t) {
      const r = f.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return gs(s);
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
      return !!(r && this[r] !== void 0 && (!n || bt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(a) {
      if (a = Ie(a), a) {
        const d = f.findKey(r, a);
        d && (!n || bt(r, r[d], d, n)) && (delete r[d], s = !0);
      }
    }
    return f.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || bt(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return f.forEach(this, (s, o) => {
      const a = f.findKey(r, o);
      if (a) {
        n[a] = Ye(s), delete n[o];
        return;
      }
      const d = t ? ys(o) : String(o).trim();
      d !== o && delete n[o], n[d] = Ye(s), r[d] = !0;
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
      r[d] || (ws(s, a), r[d] = !0);
    }
    return f.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
ot.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors(ot.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
f.freezeMethods(ot);
const ce = ot;
function gt(e, t) {
  const n = this || Pt, r = t || n, s = ce.from(r.headers);
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
function Ss(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new F(
    "Request failed with status code " + n.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Cs = oe.hasStandardBrowserEnv ? (
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
function Os(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Es(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function kn(e, t) {
  return e && !Os(t) ? Es(e, t) : t;
}
const xs = oe.hasStandardBrowserEnv ? (
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
function Rs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ts(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const v = Date.now(), c = r[o];
    a || (a = v), n[s] = h, r[s] = v;
    let _ = o, x = 0;
    for (; _ !== s; )
      x += n[_++], _ = _ % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), v - a < t)
      return;
    const y = c && v - c;
    return y ? Math.round(x * 1e3 / y) : void 0;
  };
}
function Zt(e, t) {
  let n = 0;
  const r = Ts(50, 250);
  return (s) => {
    const o = s.loaded, a = s.lengthComputable ? s.total : void 0, d = o - n, h = r(d), v = o <= a;
    n = o;
    const c = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: d,
      rate: h || void 0,
      estimated: h && a && v ? (a - o) / h : void 0,
      event: s
    };
    c[t ? "download" : "upload"] = !0, e(c);
  };
}
const ks = typeof XMLHttpRequest < "u", As = ks && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = ce.from(e.headers).normalize(), a = e.responseType;
    let d;
    function h() {
      e.cancelToken && e.cancelToken.unsubscribe(d), e.signal && e.signal.removeEventListener("abort", d);
    }
    let v;
    if (f.isFormData(s)) {
      if (oe.hasStandardBrowserEnv || oe.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((v = o.getContentType()) !== !1) {
        const [p, ...m] = v ? v.split(";").map((g) => g.trim()).filter(Boolean) : [];
        o.setContentType([p || "multipart/form-data", ...m].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(p + ":" + m));
    }
    const _ = kn(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), On(_, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function x() {
      if (!c)
        return;
      const p = ce.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), g = {
        data: !a || a === "text" || a === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: p,
        config: e,
        request: c
      };
      Ss(function(B) {
        n(B), h();
      }, function(B) {
        r(B), h();
      }, g), c = null;
    }
    if ("onloadend" in c ? c.onloadend = x : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(x);
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
      const p = xs(_) && e.xsrfCookieName && Cs.read(e.xsrfCookieName);
      p && o.set(e.xsrfHeaderName, p);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in c && f.forEach(o.toJSON(), function(m, g) {
      c.setRequestHeader(g, m);
    }), f.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), a && a !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Zt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Zt(e.onUploadProgress)), (e.cancelToken || e.signal) && (d = (p) => {
      c && (r(!p || p.type ? new He(null, e, c) : p), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(d), e.signal && (e.signal.aborted ? d() : e.signal.addEventListener("abort", d)));
    const y = Rs(_);
    if (y && oe.protocols.indexOf(y) === -1) {
      r(new F("Unsupported protocol " + y + ":", F.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, Ot = {
  http: es,
  xhr: As
};
f.forEach(Ot, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Kt = (e) => `- ${e}`, Ns = (e) => f.isFunction(e) || e === null || e === !1, An = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let a;
      if (r = n, !Ns(n) && (r = Ot[(a = String(n)).toLowerCase()], r === void 0))
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
  adapters: Ot
};
function _t(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new He(null, e);
}
function en(e) {
  return _t(e), e.headers = ce.from(e.headers), e.data = gt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), An.getAdapter(e.adapter || Pt.adapter)(e).then(function(r) {
    return _t(e), r.data = gt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = ce.from(r.headers), r;
  }, function(r) {
    return Tn(r) || (_t(e), r && r.response && (r.response.data = gt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = ce.from(r.response.headers))), Promise.reject(r);
  });
}
const tn = (e) => e instanceof ce ? e.toJSON() : e;
function Ne(e, t) {
  t = t || {};
  const n = {};
  function r(v, c, _) {
    return f.isPlainObject(v) && f.isPlainObject(c) ? f.merge.call({ caseless: _ }, v, c) : f.isPlainObject(c) ? f.merge({}, c) : f.isArray(c) ? c.slice() : c;
  }
  function s(v, c, _) {
    if (f.isUndefined(c)) {
      if (!f.isUndefined(v))
        return r(void 0, v, _);
    } else
      return r(v, c, _);
  }
  function o(v, c) {
    if (!f.isUndefined(c))
      return r(void 0, c);
  }
  function a(v, c) {
    if (f.isUndefined(c)) {
      if (!f.isUndefined(v))
        return r(void 0, v);
    } else
      return r(void 0, c);
  }
  function d(v, c, _) {
    if (_ in t)
      return r(v, c);
    if (_ in e)
      return r(void 0, v);
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
    headers: (v, c) => s(tn(v), tn(c), !0)
  };
  return f.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const _ = h[c] || s, x = _(e[c], t[c], c);
    f.isUndefined(x) && _ !== d || (n[c] = x);
  }), n;
}
const Nn = "1.6.1", Ft = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ft[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const nn = {};
Ft.transitional = function(t, n, r) {
  function s(o, a) {
    return "[Axios v" + Nn + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
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
function Ps(e, t, n) {
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
const Et = {
  assertOptions: Ps,
  validators: Ft
}, ve = Et.validators;
class Ke {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Ne(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Et.assertOptions(r, {
      silentJSONParsing: ve.transitional(ve.boolean),
      forcedJSONParsing: ve.transitional(ve.boolean),
      clarifyTimeoutError: ve.transitional(ve.boolean)
    }, !1), s != null && (f.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Et.assertOptions(s, {
      encode: ve.function,
      serialize: ve.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && f.merge(
      o.common,
      o[n.method]
    );
    o && f.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = ce.concat(a, o);
    const d = [];
    let h = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (h = h && m.synchronous, d.unshift(m.fulfilled, m.rejected));
    });
    const v = [];
    this.interceptors.response.forEach(function(m) {
      v.push(m.fulfilled, m.rejected);
    });
    let c, _ = 0, x;
    if (!h) {
      const p = [en.bind(this), void 0];
      for (p.unshift.apply(p, d), p.push.apply(p, v), x = p.length, c = Promise.resolve(n); _ < x; )
        c = c.then(p[_++], p[_++]);
      return c;
    }
    x = d.length;
    let y = n;
    for (_ = 0; _ < x; ) {
      const p = d[_++], m = d[_++];
      try {
        y = p(y);
      } catch (g) {
        m.call(this, g);
        break;
      }
    }
    try {
      c = en.call(this, y);
    } catch (p) {
      return Promise.reject(p);
    }
    for (_ = 0, x = v.length; _ < x; )
      c = c.then(v[_++], v[_++]);
    return c;
  }
  getUri(t) {
    t = Ne(this.defaults, t);
    const n = kn(t.baseURL, t.url);
    return On(n, t.params, t.paramsSerializer);
  }
}
f.forEach(["delete", "get", "head", "options"], function(t) {
  Ke.prototype[t] = function(n, r) {
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
  Ke.prototype[t] = n(), Ke.prototype[t + "Form"] = n(!0);
});
const Qe = Ke;
class Lt {
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
      token: new Lt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Fs = Lt;
function Ls(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ds(e) {
  return f.isObject(e) && e.isAxiosError === !0;
}
const xt = {
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
Object.entries(xt).forEach(([e, t]) => {
  xt[t] = e;
});
const Bs = xt;
function Pn(e) {
  const t = new Qe(e), n = fn(Qe.prototype.request, t);
  return f.extend(n, Qe.prototype, t, { allOwnKeys: !0 }), f.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Pn(Ne(e, s));
  }, n;
}
const V = Pn(Pt);
V.Axios = Qe;
V.CanceledError = He;
V.CancelToken = Fs;
V.isCancel = Tn;
V.VERSION = Nn;
V.toFormData = st;
V.AxiosError = F;
V.Cancel = V.CanceledError;
V.all = function(t) {
  return Promise.all(t);
};
V.spread = Ls;
V.isAxiosError = Ds;
V.mergeConfig = Ne;
V.AxiosHeaders = ce;
V.formToJSON = (e) => Rn(f.isHTMLForm(e) ? new FormData(e) : e);
V.getAdapter = An.getAdapter;
V.HttpStatusCode = Bs;
V.default = V;
const et = V;
me.localeData().delimiters.thousands = " ";
me.localeData().delimiters.decimal = ",";
const Is = (e) => e === void 0 ? void 0 : JSON.parse(JSON.stringify(e)), zs = (e) => {
  if (!Array.isArray(e) && Object.getPrototypeOf(e) !== Object.prototype)
    throw new Error(
      "Tried cloning instance of a class. Consider implementing clone method instead."
    );
  return Is(e);
};
function Fn(e, t, n) {
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
function js(e, t, n, r) {
  const s = {};
  for (const o of Object.values(e)) {
    const a = o[r], d = Object.values(t).find(
      (h) => h[r] === a
    );
    s[a] = Fn(o, d, n);
  }
  return s;
}
const Us = {
  key: 0,
  class: "popover-header"
}, $s = {
  key: 1,
  class: "popover-body"
}, Ms = {
  important: "",
  size: "small"
}, Vs = { size: "small" }, Hs = /* @__PURE__ */ he({
  __name: "CellHint",
  props: {
    format: {},
    label: {},
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { format: n, label: r, title: s, url: o } = be(t), a = A(), d = A(!1), h = A(), v = (m) => {
      var g;
      m && (!m.target || (g = h.value) != null && g.contains(m.target)) || (d.value = !1, window.removeEventListener("mouseup", v));
    }, c = (m) => m.map(({ name: g, valueFormatted: R }) => ({
      label: g,
      value: R
    })), _ = (m) => m.map(({ name: g, rate: R, value: B }) => ({
      label: g,
      value: `${me(B).format("0,0")} (${me(R).format("0,0.00")}%)`
    })), x = (m) => {
      switch (n.value) {
        case "distribution":
          return c(m);
        case "rated_distribution":
          return _(m);
        default:
          throw new Error(`Unsupported format: ${n.value}`);
      }
    }, y = async () => {
      if (window.addEventListener("mouseup", v), a.value)
        return;
      const m = (await et(o.value)).data;
      a.value = x(m);
    }, p = async () => {
      d.value = !0, await y();
    };
    return (m, g) => (O(), D("div", {
      class: J(["cell-hint", { visible: d.value }]),
      ref_key: "root",
      ref: h,
      onMouseover: g[1] || (g[1] = () => p()),
      onMouseout: g[2] || (g[2] = () => v())
    }, [
      M("span", {
        class: "label",
        onClick: g[0] || (g[0] = $e(() => p(), ["stop"]))
      }, N(S(r)), 1),
      T(Tt, {
        visible: d.value,
        parentClass: "cell",
        popoverClass: "cell-hint-popover"
      }, {
        default: C(() => [
          S(s) ? (O(), D("div", Us, N(S(s)), 1)) : q("", !0),
          a.value ? (O(), D("div", $s, [
            (O(!0), D(Y, null, Ae(a.value, ({ label: R, value: B }, ne) => (O(), D("div", {
              key: `line-${ne}`
            }, [
              M("b", Ms, N(R) + ": ", 1),
              M("span", Vs, N(B), 1)
            ]))), 128))
          ])) : (O(), I(Rt, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ], 34));
  }
});
const rn = /* @__PURE__ */ ge(Hs, [["__scopeId", "data-v-9c7f570a"]]), qs = (e) => (sn("data-v-7a1d1810"), e = e(), on(), e), Js = { class: "column-hint" }, Ws = /* @__PURE__ */ qs(() => /* @__PURE__ */ M("i", { class: "la la-question-circle" }, null, -1)), Gs = { class: "popover-header" }, Xs = { class: "popover-body" }, Ys = /* @__PURE__ */ he({
  __name: "ColumnHint",
  props: {
    description: {},
    title: {},
    visible: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { description: n, title: r, visible: s } = be(t);
    return (o, a) => (O(), D("div", Js, [
      Ws,
      T(Tt, {
        visible: S(s),
        parentClass: "cell",
        popoverClass: "column-hint-popover"
      }, {
        default: C(() => [
          M("div", Gs, N(S(r)), 1),
          M("div", Xs, N(S(n)), 1)
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const Qs = /* @__PURE__ */ ge(Ys, [["__scopeId", "data-v-7a1d1810"]]), Zs = /* @__PURE__ */ he({
  __name: "BodyPopover",
  props: {
    autoPosition: { type: Boolean, default: !1 },
    parentNode: {},
    popoverClass: {},
    visible: { type: Boolean }
  },
  setup(e) {
    const t = e, { autoPosition: n, parentNode: r, popoverClass: s, visible: o } = be(t), a = A(), d = A(), h = A(), v = U(() => ({
      [(s == null ? void 0 : s.value) ?? ""]: !!s,
      visible: o.value
    })), c = U(() => {
      if (!(!n.value || a.value === void 0 || h.value === void 0))
        return {
          left: `${a.value}px`,
          top: `${h.value}px`
        };
    }), _ = () => {
      if (!d.value || !(r != null && r.value))
        return;
      const y = r.value.getBoundingClientRect();
      a.value = 0, h.value = 0, Ze(() => {
        const p = y.left, m = y.top + document.documentElement.scrollTop, g = d.value.$el.offsetWidth, R = (g - y.width) / 2;
        y.left - R < 0 ? a.value = p : y.left + R + y.width > document.body.clientWidth ? a.value = p - g + y.width : a.value = p - R;
        const B = d.value.$el.offsetHeight;
        y.bottom + B > document.body.clientHeight ? h.value = m - B : h.value = m + y.height;
      });
    }, x = n != null && n.value ? new ResizeObserver(() => _()) : void 0;
    return Ue(
      o,
      (y) => {
        !(n != null && n.value) || !x || (x.disconnect(), y && Ze(() => {
          _(), x.observe(d.value.$el);
        }));
      },
      {
        immediate: !0
      }
    ), (y, p) => (O(), I(an, { to: "#app > .app-container" }, [
      T(un, {
        class: J(["no-spacing popover", v.value]),
        ref_key: "popover",
        ref: d,
        style: ln(c.value)
      }, {
        default: C(() => [
          wt(y.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["class", "style"])
    ]));
  }
});
const Ks = /* @__PURE__ */ ge(Zs, [["__scopeId", "data-v-d948a8f2"]]), eo = /* @__PURE__ */ he({
  __name: "DetailsSelector",
  props: {
    labels: {},
    open: { type: Boolean, default: !1 },
    title: {}
  },
  emits: ["hideDetails", "showDetails"],
  setup(e, { emit: t }) {
    const n = e, { labels: r, open: s, title: o } = be(n), a = A(!1), d = A(), h = A(), v = (x) => {
      var y, p;
      !x.target || (y = h.value) != null && y.contains(x.target) || (p = d.value) != null && p.$el.contains(x.target) || (a.value = !1, window.removeEventListener("mouseup", v));
    }, c = () => {
      if (s.value) {
        t("hideDetails");
        return;
      }
      if (a.value) {
        a.value = !1;
        return;
      }
      a.value = !0, window.addEventListener("mouseup", v);
    }, _ = (x) => {
      if (a.value = !1, s.value) {
        t("hideDetails");
        return;
      }
      t("showDetails", x);
    };
    return fr(() => {
      window.removeEventListener("mouseup", v);
    }), (x, y) => (O(), D("div", {
      class: "details-selector-container",
      ref_key: "root",
      ref: h,
      onClick: y[0] || (y[0] = $e(() => c(), ["stop"]))
    }, [
      T(Q, {
        class: "details-selector",
        vertical: "center"
      }, {
        default: C(() => [
          S(o) ? (O(), I(j, {
            key: 0,
            mood: "important-alt",
            size: "small"
          }, {
            default: C(() => [
              L(N(S(o)), 1)
            ]),
            _: 1
          })) : q("", !0),
          T(ze, {
            value: S(s) ? "chevron-up" : "chevron-down",
            mood: "important-alt",
            size: "large-2"
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      T(Ks, {
        ref_key: "popover",
        ref: d,
        parentNode: h.value,
        visible: a.value,
        autoPosition: "",
        popoverClass: "details-selector-popover"
      }, {
        default: C(() => [
          (O(!0), D(Y, null, Ae(S(r), (p, m) => (O(), I(j, {
            class: "dropdown-item",
            onClick: $e(() => _(m), ["stop"]),
            contrast: ""
          }, {
            default: C(() => [
              L(N(p), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 256))
        ]),
        _: 1
      }, 8, ["parentNode", "visible"])
    ], 512));
  }
});
const to = /* @__PURE__ */ ge(eo, [["__scopeId", "data-v-4d4dbc91"]]), no = { class: "pagination" }, ro = ["onClick"], so = /* @__PURE__ */ he({
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
    const n = e, { currentPageSize: r, id: s, pageNumber: o, pageRadius: a, pageSizeLabel: d, pageSizes: h, rowCount: v } = be(n), c = U(() => Math.min(...h.value)), _ = U(() => Math.ceil(v.value / r.value)), x = U(
      () => h.value.reduce((m, g) => (m[g] = g.toString(), m), {})
    ), y = U(() => {
      const m = [];
      for (let g = a.value - 1; g > 0; g--)
        o.value > g && m.push(o.value - g);
      m.push(o.value);
      for (let g = 1; g < a.value; g++)
        o.value < _.value - g - 1 && m.push(o.value + g);
      return m;
    }), p = (m) => {
      r.value !== m && t("update:currentPageSize", m);
    };
    return (m, g) => (O(), D("div", no, [
      S(v) > S(r) ? (O(), D(Y, { key: 0 }, [
        S(o) > 0 ? (O(), I(j, {
          key: 0,
          class: "page",
          onClick: g[0] || (g[0] = () => t("update:pageNumber", 0)),
          mood: "important-alt"
        }, {
          default: C(() => [
            L("1")
          ]),
          _: 1
        })) : q("", !0),
        S(o) > S(a) ? (O(), I(j, {
          key: 1,
          class: "page-separator"
        }, {
          default: C(() => [
            L("…")
          ]),
          _: 1
        })) : q("", !0),
        (O(!0), D(Y, null, Ae(y.value, (R) => (O(), D("div", {
          class: J(["page", { current: R === S(o) }]),
          onClick: () => t("update:pageNumber", R),
          key: R
        }, N(R + 1), 11, ro))), 128)),
        S(o) < _.value - S(a) - 1 ? (O(), I(j, {
          key: 2,
          class: "page-separator"
        }, {
          default: C(() => [
            L("…")
          ]),
          _: 1
        })) : q("", !0),
        S(o) < _.value - 1 ? (O(), I(j, {
          key: 3,
          class: "page",
          onClick: g[1] || (g[1] = () => t("update:pageNumber", _.value - 1)),
          mood: "important-alt"
        }, {
          default: C(() => [
            L(N(_.value), 1)
          ]),
          _: 1
        })) : q("", !0),
        T(j, { class: "page-size-label" }, {
          default: C(() => [
            L(N(S(d)), 1)
          ]),
          _: 1
        })
      ], 64)) : q("", !0),
      S(v) > c.value ? (O(), I(cn, {
        key: 1,
        class: "page-size-selector",
        "onUpdate:modelValue": g[2] || (g[2] = (R) => p(parseInt(R.toString()))),
        id: S(s),
        items: x.value,
        modelValue: S(r)
      }, {
        item: C(({ item: R }) => [
          L(N(R), 1)
        ]),
        _: 1
      }, 8, ["id", "items", "modelValue"])) : q("", !0)
    ]));
  }
});
const oo = /* @__PURE__ */ ge(so, [["__scopeId", "data-v-764cc1be"]]), ao = (e) => (sn("data-v-b4f986aa"), e = e(), on(), e), lo = /* @__PURE__ */ ao(() => /* @__PURE__ */ M("i", { class: "la la-eye secondary" }, null, -1)), io = /* @__PURE__ */ he({
  __name: "TrendChart",
  props: {
    formatter: { type: Function },
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { formatter: n, title: r, url: s } = be(t), o = A(!1), a = A([]), d = A(), h = U(() => d.value ? Object.assign({}, d.value) : {}), v = U(() => {
      var g;
      switch ((g = d.value) == null ? void 0 : g.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return d.value[0];
        default:
          return d.value.slice(d.value.length / 2).reduce((R, B) => R + B, 0) / Math.ceil(d.value.length / 2);
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
          return d.value.slice(0, d.value.length / 2).reduce((R, B) => R + B, 0) / Math.floor(d.value.length / 2);
      }
    }), _ = U(() => c.value > v.value ? "negative" : c.value < v.value ? "positive" : "neutral"), x = U(() => {
      if (!d.value)
        return {};
      const g = new Array(d.value.length).fill(0).map(
        (R, B) => c.value + (v.value - c.value) * B / (d.value.length - 1)
      );
      return Object.assign({}, g);
    }), y = async () => {
      if (!d.value)
        return;
      const g = (await et({ url: s.value })).data;
      a.value = Object.keys(g), d.value = Object.values(g);
    }, p = () => {
      o.value = !1, window.removeEventListener("mouseup", p);
    }, m = async () => {
      o.value = !0, window.addEventListener("mouseup", p), await y();
    };
    return (g, R) => (O(), D("div", {
      class: "trend-chart-container",
      onClick: R[0] || (R[0] = $e(() => m(), ["stop"]))
    }, [
      lo,
      T(Tt, {
        visible: o.value,
        parentClass: "cell",
        popoverClass: "trend-chart-popover"
      }, {
        default: C(() => [
          S(r) ? (O(), I(je, {
            key: 0,
            size: "small-3"
          }, {
            default: C(() => [
              L(N(S(r)), 1)
            ]),
            _: 1
          })) : q("", !0),
          d.value ? (O(), I(br, {
            key: 1,
            activeLines: ["values"],
            formatters: { trend: S(n), values: S(n) },
            moods: { trend: { mood: _.value }, values: { mood: "important" } },
            styles: { trend: "line", values: "line" },
            values: { trend: x.value, values: h.value }
          }, {
            "x-axis-label": C(({ index: B }) => [
              L(N(a.value[B]), 1)
            ]),
            _: 1
          }, 8, ["formatters", "moods", "values"])) : (O(), I(Rt, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const uo = /* @__PURE__ */ ge(io, [["__scopeId", "data-v-b4f986aa"]]), co = { class: "common-table" }, fo = {
  key: 0,
  class: "controls d-flex justify-content-end mb-1"
}, po = ["onMouseover", "onMouseout"], vo = ["href", "target"], mo = ["href", "target"], ho = ["onClick"], yt = 50, bo = /* @__PURE__ */ he({
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
    const n = e, r = async (l, u) => typeof l == "function" ? await l(u) : (await et({
      ...l,
      params: {
        ...l.params,
        ...u
      }
    })).data, s = async (l, u) => typeof l == "function" ? await l(u) : (await et({
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
      colorMetrics: v,
      columns: c,
      columnDetails: _,
      columnLinks: x,
      comparisonColumns: y,
      comparisonRequest: p,
      defaultOrderBy: m,
      detailsColumn: g,
      detailsRequests: R,
      dragColumns: B,
      fixedColumnNumber: ne,
      inlineFilterOperators: re,
      inversedKpis: le,
      primaryColumn: H,
      primaryColumnAlias: de,
      request: W,
      rows: Oe,
      shortenColumns: Z,
      showInlineFilters: _e,
      showRowNumber: at,
      showPagination: lt,
      showTopTotal: it,
      total: Ee,
      totalColumnKey: ut,
      trendUrl: Fe
    } = be(n), xe = () => {
      const l = {};
      for (const u of Object.keys(c.value))
        u in re.value && (l[u] = {
          operator: Object.keys(re.value[u])[0],
          value: ""
        });
      return l;
    }, ye = A([]), ie = A({}), E = A([]), k = A({}), P = A([]), G = A({}), Le = A(!1), we = A(!1), fe = A([]), qe = A(!1), ee = A(xe()), De = A(!0), se = A(), pe = A(0), Se = A(20), Je = A(0), te = A(), ue = A(), Ln = U(() => {
      const l = {};
      return we.value && (l.inline_filters = {
        icon: "filter"
      }), l;
    }), Dn = U(
      () => y != null && y.value ? Object.keys(y.value) : void 0
    ), Bn = U(
      () => P.value.reduce((l, u) => (l[u] = zs(c.value[u]), l), {})
    ), Dt = U(() => {
      if (R != null && R.value)
        return Object.entries(R.value).reduce((l, [u, { label: i }]) => (l[u] = i, l), {});
    }), Bt = U(() => [...ye.value].sort((l, u) => {
      const i = (() => {
        const b = dt(
          se.value[0].reduce(($, z) => $[z], l),
          c.value[se.value[0][0]].type
        ), w = dt(
          se.value[0].reduce(($, z) => $[z], u),
          c.value[se.value[0][0]].type
        );
        return b > w ? 1 : b < w ? -1 : 0;
      })();
      return se.value[1] ? -i : i;
    })), It = U(() => !(W != null && W.value) || qe.value ? Bt.value : Bt.value.slice(
      pe.value * Se.value,
      (pe.value + 1) * Se.value
    )), In = (l) => {
      E.value.includes(l) || E.value.push(l);
    }, We = (l, u) => !Z.value || !Z.value.includes(l) ? !1 : u.length > yt, zn = (l) => !!l.tooltipTitle && !!l.tooltipDescription, Re = (l, u, i) => {
      var w;
      if (!i || !(y != null && y.value) || !(i in y.value) || y.value[i].format !== "difference")
        return;
      const b = ((w = le == null ? void 0 : le.value) == null ? void 0 : w.includes(u)) ?? !1;
      return l > 0 ? b ? "negative" : "positive" : l < 0 ? b ? "positive" : "negative" : "neutral";
    }, Te = (l, u, i) => {
      let b = dt(l, u);
      switch (u) {
        case "float":
          return me(parseFloat(b)).format("0,0.00");
        case "int":
          return me(parseInt(b)).format("0,0");
        case "money": {
          let w = "0,0";
          a.value > 0 && (w += "." + "0".repeat(a.value));
          const $ = me(parseFloat(b)).format(w);
          return h.value ? d.value + " " + $ : $ + " " + d.value;
        }
        case "money_capped": {
          const w = parseFloat(b.toFixed(a.value)) == 0;
          if (b > 0 && b < 1 && w) {
            const $ = a.value === 0 ? 1 : parseFloat("0." + "0".repeat(a.value - 1) + "1");
            return h.value ? `< ${d.value} ${$}` : `< ${$} ${d.value}`;
          } else
            return Te(l, "money", i);
        }
        case "percent": {
          let w = me(parseFloat(b)).format("0,0.00") + "%";
          return i === "difference" && b > 0 && (w = `+${w}`), w;
        }
        case "time":
          return `${Te(Math.floor(parseInt(b) / 60), "int")}mn${Te(
            parseInt(b) % 60,
            "int"
          )}s`;
        default:
          return b.toString();
      }
    }, jn = async (l, u) => {
      if (ie.value[l] && ie.value[l][u[H.value]])
        return ie.value[l][u[H.value]];
      const { rows: i } = await r(R.value[l].request, {
        row: u,
        primaryColumn: (de == null ? void 0 : de.value) ?? H.value,
        primaryColumnValue: u[H.value]
      });
      return ie.value[l] || (ie.value[l] = {}), ie.value[l][u[H.value]] = Object.values(i), ie.value[l][u[H.value]];
    }, zt = (l, u) => {
      if (!l)
        return u.url;
      const i = new URL(l.url, location.origin);
      if (Array.isArray(l.columns))
        for (const b of l.columns)
          i.searchParams.set(b, u[b]);
      else
        for (const [b, w] of Object.entries(l.columns))
          i.searchParams.set(w, u[b]);
      return i;
    }, Un = (l, u) => {
      const i = new URL(_.value[l].baseUrl, location.origin);
      if (Array.isArray(_.value[l].columns))
        for (const b of _.value[l].columns)
          i.searchParams.set(b, u[b]);
      else
        for (const [b, w] of Object.entries(_.value[l].columns))
          i.searchParams.set(w, u[b]);
      return i.toString();
    }, $n = (l) => {
      if (l.totalUrl)
        return new URL(l.totalUrl).toString();
      const u = new URL(l.baseUrl);
      return u.searchParams.set("total", "true"), u.toString();
    }, Mn = (l) => !Z.value || !Z.value.includes(l) ? -1 : fe.value.indexOf(l), Vn = (l) => {
      if (l in ee.value)
        return ee.value[l].operator;
    }, Hn = (l) => {
      if (l in ee.value)
        return ee.value[l].value;
    }, ct = (l) => re.value[l], qn = (l) => {
      const u = ct(l);
      if (!u)
        return;
      const i = ["normal", "small"];
      let b = 0;
      for (const w of Object.values(u)) {
        const $ = i.indexOf(w.size ?? "normal");
        $ > b && (b = $);
      }
      return {
        [`size-${i[b]}`]: !0
      };
    }, Jn = (l) => {
      const u = ct(l);
      return u ? Object.entries(u).reduce((i, [b, w]) => (i[b] = w.label, i), {}) : {};
    }, Wn = (l) => c.value[l].type === "string" ? "text" : "number", jt = () => `Table_OrderBy_${location.pathname}`, Gn = () => `Table_PageSize_${location.pathname}`, dt = (l, u) => {
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
    }, Ce = (l, u, i, b = !1) => {
      const [w, $] = (() => !i || !(y != null && y.value) || !(i in y.value) ? [c.value[u].type, void 0] : [
        y.value[i].type ?? c.value[u].type,
        y.value[i].format
      ])();
      let z = Te(l, w);
      return $ === "difference" && (z = l > 0 ? `+${z}` : z), b ? Mt(z, u) : z;
    }, Xn = (l, u) => {
      if (!Fe)
        return "";
      const i = new URL(
        u ? Fe.value[u] : Fe.value,
        location.origin
      );
      return i.searchParams.set((de == null ? void 0 : de.value) ?? H.value, l[H.value]), i.toString();
    }, Ge = (l, u, i) => We(l, u) ? [] : i ? (g == null ? void 0 : g.value) === l ? ["flex-grow-1", "text-left"] : Z.value && Z.value.includes(l) && It.value.some((b) => We(l, b[l])) ? ["flex-grow-1", "text-left"] : ["flex-grow-1"] : ["flew-grow-1"], Yn = (l) => l in re.value, Qn = () => {
      _e.value && (Le.value = !1);
    }, Ut = (l, u) => {
      if (!(x != null && x.value) || !(u in x.value))
        return !1;
      const i = x.value[u];
      return i === null ? !!l.url : !("disable_for" in i && i.disable_for.includes(l[H.value]));
    }, Zn = (l, u) => {
      const [i] = P.value.splice(l, 1);
      P.value.splice(u, 0, i), t("move:column", { from: l, to: u });
    }, Kn = (l) => {
      const u = E.value.indexOf(l);
      u < 0 || E.value.splice(u, 1);
    }, $t = (l, u) => {
      k.value[l] = u;
    }, Mt = (l, u) => !Z.value || !Z.value.includes(u) || l.length <= yt ? l : `${l.substring(0, yt - 3)}...`, er = (l) => {
      if (!ue.value)
        return;
      const u = {
        left: ue.value.$el.scrollLeft,
        top: ue.value.$el.scrollTop
      };
      delete G.value[l[H.value]], Ze(() => {
        ue.value.$el.scrollTo(u);
      });
    }, tr = (l, u) => {
      const i = l.target.value;
      Ht(u, { value: i });
    }, nr = (l, u) => {
      l.key === "Enter" && l.target.blur();
    }, rr = async (l, u) => {
      if (!ue.value)
        return;
      const i = {
        left: ue.value.$el.scrollLeft,
        top: ue.value.$el.scrollTop
      };
      De.value = !0, G.value[u[H.value]] = await jn(l, u), Ze(() => {
        ue.value.$el.scrollTo(i), De.value = !1;
      });
    }, sr = async (l = !1) => {
      await ar(l) || await or(l) || await pt(l);
    }, ft = async (l) => {
      await vt(l), pe.value = l;
    }, Vt = async (l) => {
      const u = Gn();
      if (l === void 0) {
        const i = localStorage.getItem(u);
        i && (Se.value = parseInt(i));
      } else
        localStorage.setItem(u, l.toString()), await vt(0, l), pe.value = 0, Se.value = l;
    }, Ht = (l, { operator: u, value: i }) => {
      if (u || (u = Object.keys(ct(l))[0]), !u)
        return;
      const b = {
        ...ee.value[l],
        operator: u
      };
      i !== void 0 && (b.value = i), ee.value[l] = b, ft(0);
    }, or = async (l) => {
      const u = (() => {
        for (const w in localStorage) {
          if (!w.startsWith("DataTables_"))
            continue;
          const $ = w.substring(w.indexOf("/"));
          if (location.pathname !== $)
            return;
          const z = localStorage.getItem(w);
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
      return await ke(b, !1, l), !0;
    }, pt = async (l) => {
      if (m != null && m.value) {
        await ke(m.value, !1, l);
        return;
      }
      const [u, { colspan: i }] = Object.entries(c.value).find(
        ([b, { visible: w }]) => w
      );
      if (i === -1) {
        await ke([[u], !1], !1, l);
        return;
      }
      await ke(
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
    }, ar = async (l) => {
      const u = localStorage.getItem(jt());
      if (u) {
        const i = JSON.parse(u)[0][0];
        if (c.value[i])
          return await ke(JSON.parse(u), !1, l), !0;
      } else
        return !1;
    }, lr = async (l, u, i) => {
      if (!(W != null && W.value))
        return !1;
      if (qe.value)
        return !0;
      const [b, w] = await (async () => {
        const $ = [
          s(W.value, {
            inlineFilters: ee.value,
            pageNumber: l,
            pageSize: u,
            orderBy: i[0],
            reversed: i[1]
          })
        ];
        p != null && p.value && $.push(
          s(p.value, {
            inlineFilters: ee.value,
            pageNumber: l,
            pageSize: u,
            orderBy: i[0],
            reversed: i[1]
          })
        );
        const z = await Promise.all($);
        if (z.length > 1 && z.some((Be) => Be.paginated === !0))
          throw new Error("Paginated fetching is not supported for separate comparison requests.");
        return z;
      })();
      return ye.value = Object.values(
        w ? js(
          b.rows,
          w.rows,
          c.value,
          H.value
        ) : b.rows
      ), qe.value = b.paginated !== !0, Je.value = b.rowCount, b.detailedRows ? G.value = b.detailedRows : G.value = {}, b.total && (te.value = w ? Fn(b.total, w.total, c.value) : b.total), !0;
    }, ir = () => {
      if (!(Oe != null && Oe.value))
        return !1;
      let l = Object.values(Oe.value);
      for (const [u, i] of Object.entries(ee.value))
        i.value && (l = l.filter(
          (b) => re.value[u][i.operator].callback(
            b[u],
            i.value
          )
        ));
      return ye.value = l, Je.value = l.length, !0;
    }, vt = async (l, u, i) => {
      l === void 0 && (l = pe.value), u === void 0 && (u = Se.value), i === void 0 && (i = se.value), De.value = !0, ir() || await lr(pe.value, Se.value, se.value), De.value = !1;
    }, ur = () => {
      _e.value && (Le.value = !0);
    }, cr = (l) => {
      if (!Z.value || !Z.value.includes(l))
        return;
      const u = Mn(l);
      u >= 0 ? fe.value.splice(u, 1) : fe.value.push(l);
    }, dr = () => {
      we.value = !we.value, we.value && (ee.value = xe());
    }, ke = async (l, u = !0, i = !0) => {
      pe.value = 0, se.value = l, i && await vt(void 0, void 0, l), u && localStorage.setItem(jt(), JSON.stringify(l));
    };
    return pr(() => {
      P.value = Object.keys(c.value), te.value = Ee == null ? void 0 : Ee.value, Promise.all([pt(!1), Vt()]).then(() => sr(!0));
    }), Ue(c, () => {
      P.value = Object.keys(c.value), ee.value = xe();
    }), m && Ue(m, () => {
      pt(!0);
    }), W && Ue(
      W,
      () => {
        qe.value = !1, ft(0);
      },
      { deep: !0 }
    ), (l, u) => (O(), D("div", co, [
      S(lt) ? (O(), D("div", fo, [
        T(oo, {
          "onUpdate:pageNumber": u[0] || (u[0] = (i) => ft(i)),
          "onUpdate:currentPageSize": u[1] || (u[1] = (i) => Vt(i)),
          currentPageSize: Se.value,
          pageNumber: pe.value,
          pageSizeLabel: l.pageSizeLabel,
          rowCount: Je.value
        }, null, 8, ["currentPageSize", "pageNumber", "pageSizeLabel", "rowCount"])
      ])) : q("", !0),
      M("div", {
        class: "table-container",
        onMouseover: u[7] || (u[7] = () => ur()),
        onMouseout: u[8] || (u[8] = () => Qn())
      }, [
        M("div", {
          class: J(["action-buttons", { active: Le.value }])
        }, [
          S(_e) ? (O(), D("button", {
            key: 0,
            class: "btn btn-small btn-success",
            onClick: u[2] || (u[2] = () => dr())
          }, [
            M("div", {
              class: J(["las", we.value ? "la-trash" : "la-filter"])
            }, null, 2)
          ])) : q("", !0)
        ], 2),
        se.value ? (O(), I(_r, {
          key: 0,
          ref_key: "table",
          ref: ue,
          onAddColoredMetric: u[3] || (u[3] = (i) => In(i)),
          "onMove:column": u[4] || (u[4] = ({ from: i, to: b }) => Zn(i, b)),
          onRemoveColoredMetric: u[5] || (u[5] = (i) => Kn(i)),
          "onUpdate:orderBy": u[6] || (u[6] = (i) => ke(i)),
          additionalHeaders: Ln.value,
          cellClasses: S(o),
          colorMetrics: S(v),
          coloredMetrics: E.value,
          columns: Bn.value,
          comparisonColumnKeys: Dn.value,
          detailsRows: G.value,
          dragColumns: S(B),
          fixedColumnNumber: S(ne),
          inversedKpis: S(le),
          orderBy: se.value,
          primaryColumn: S(H),
          rows: It.value,
          showRowNumber: S(at),
          showTotal: !!te.value,
          showTopTotal: S(it)
        }, vr({
          colorizeLabel: C(({ enabled: i }) => [
            T(j, {
              mood: "white",
              size: "small"
            }, {
              default: C(() => [
                i ? (O(), D(Y, { key: 0 }, [
                  L(N(l.uncolorizeLabel), 1)
                ], 64)) : (O(), D(Y, { key: 1 }, [
                  L(N(l.colorizeLabel), 1)
                ], 64))
              ]),
              _: 2
            }, 1024)
          ]),
          columnRowNumber: C(() => [
            T(j, {
              contrast: "",
              size: "small"
            }, {
              default: C(() => [
                L("#")
              ]),
              _: 1
            })
          ]),
          rowNumber: C(({ value: i }) => [
            T(j, {
              contrast: "",
              size: "small"
            }, {
              default: C(() => [
                L(N(i), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          totalRowNumber: C(() => [
            T(j, {
              contrast: "",
              size: "small"
            }, {
              default: C(() => [
                L("#")
              ]),
              _: 1
            })
          ]),
          column: C(({ columnKey: i, isGhost: b }) => [
            M("div", {
              class: "d-flex align-items-center",
              onMouseover: () => $t(i, !0),
              onMouseout: () => $t(i, !1)
            }, [
              T(j, {
                contrast: "",
                size: "small"
              }, {
                default: C(() => [
                  L(N(S(c)[i].label), 1)
                ]),
                _: 2
              }, 1024),
              !b && zn(S(c)[i]) ? (O(), I(Qs, {
                key: 0,
                description: S(c)[i].tooltipDescription,
                title: S(c)[i].tooltipTitle,
                visible: k.value[i]
              }, null, 8, ["description", "title", "visible"])) : q("", !0)
            ], 40, po)
          ]),
          row: C(({ columnKey: i, index: b, row: w, spanIndex: $, subcolumnKey: z, subindex: Be, value: X }) => [
            wt(l.$slots, "row", mr(hr({
              columnKey: i,
              index: b,
              row: w,
              spanIndex: $,
              subcolumnKey: z,
              subindex: Be,
              value: X
            })), () => [
              Be === void 0 && i === "trend" ? (O(), I(uo, {
                key: 0,
                class: J(Ge(i, X, w.rowInfo.detailable)),
                formatter: (mt) => Te(mt, "int"),
                title: l.trendChartTitle,
                url: Xn(w, z)
              }, null, 8, ["class", "formatter", "title", "url"])) : w.rowInfo.detailable && i === S(g) ? (O(), D(Y, { key: 1 }, [
                Ut(w, i) && w.rowInfo.detailable ? (O(), I(j, {
                  key: 0,
                  class: J(Ge(i, X, w.rowInfo.detailable)),
                  mood: Re(X, i, z),
                  contrast: "",
                  size: "small"
                }, {
                  default: C(() => [
                    M("a", {
                      class: "column-link",
                      href: zt(S(x)[i], w).toString(),
                      target: w.url ? "_blank" : "_self"
                    }, N(Ce(X, i, z, !0)), 9, vo)
                  ]),
                  _: 2
                }, 1032, ["class", "mood"])) : (O(), I(j, {
                  key: 1,
                  mood: Re(X, i, z),
                  contrast: "",
                  size: "small"
                }, {
                  default: C(() => [
                    L(N(Ce(X, i, z)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"]))
              ], 64)) : Ut(w, i) && w.rowInfo.detailable ? (O(), I(j, {
                key: 2,
                class: J(Ge(i, X, w.rowInfo.detailable)),
                mood: Re(X, i, z),
                contrast: "",
                size: "small"
              }, {
                default: C(() => [
                  M("a", {
                    class: "column-link",
                    href: zt(S(x)[i], w).toString(),
                    target: w.url ? "_blank" : "_self"
                  }, N(Ce(X, i, z, !0)), 9, mo)
                ]),
                _: 2
              }, 1032, ["class", "mood"])) : Be === void 0 && X >= 0.01 && i in S(_) ? (O(), I(rn, {
                key: 3,
                format: S(_)[i].format,
                label: Ce(X, i, z, !0),
                title: S(_)[i].title,
                url: Un(i, w)
              }, null, 8, ["format", "label", "title", "url"])) : (O(), I(j, {
                key: 4,
                class: J(Ge(i, X, w.rowInfo.detailable)),
                mood: Re(X, i, z),
                contrast: "",
                size: "small"
              }, {
                default: C(() => [
                  L(N(Ce(X, i, z, !0)), 1)
                ]),
                _: 2
              }, 1032, ["class", "mood"])),
              We(i, X) ? (O(), D("i", {
                key: 5,
                class: J(["flex-grow-1 expand-column fa", fe.value.includes(i) ? "fa-compress-alt" : "fa-expand-alt"]),
                onClick: () => cr(i)
              }, null, 10, ho)) : q("", !0),
              Dt.value && w.rowInfo.detailable && i === S(g) ? (O(), D(Y, { key: 6 }, [
                We(i, X) ? q("", !0) : (O(), I(gr, { key: 0 })),
                T(to, {
                  onHideDetails: () => er(w),
                  onShowDetails: (mt) => rr(mt, w),
                  labels: Dt.value,
                  open: G.value[w[S(H)]] !== void 0,
                  title: l.detailsSelectorTitle
                }, null, 8, ["onHideDetails", "onShowDetails", "labels", "open", "title"])
              ], 64)) : q("", !0)
            ], !0)
          ]),
          additionalHeader: C(({ additionalHeader: i, columnKey: b }) => [
            i === "inline_filters" && Yn(b) ? (O(), D("div", {
              key: 0,
              class: J(["d-flex inline-filter", qn(b)])
            }, [
              T(cn, {
                class: "inline-filter-dropdown",
                "onUpdate:modelValue": (w) => Ht(b, { operator: w.toString() }),
                id: `additional_header_${b}`,
                items: Jn(b),
                modelValue: Vn(b)
              }, {
                item: C(({ item: w }) => [
                  T(j, {
                    contrast: "",
                    size: "small"
                  }, {
                    default: C(() => [
                      L(N(w), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["onUpdate:modelValue", "id", "items", "modelValue"]),
              T(dn, {
                class: "flex-grow-1 inline-filter-input",
                onBlur: (w) => tr(w, b),
                onKeyup: (w) => nr(w),
                modelValue: Hn(b),
                type: Wn(b)
              }, null, 8, ["onBlur", "onKeyup", "modelValue", "type"])
            ], 2)) : q("", !0)
          ]),
          total: C(({ columnKey: i, subcolumnKey: b, values: w }) => [
            wt(l.$slots, S(Ee), {
              columnKey: i,
              subcolumnKey: b,
              values: w
            }, () => [
              l.totalTitle && i === S(ut) ? (O(), I(j, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: C(() => [
                  L(N(l.totalTitle(Je.value ?? ye.value.length)), 1)
                ]),
                _: 1
              })) : te.value ? (O(), D(Y, { key: 1 }, [
                te.value && te.value[i] >= 0.01 && i in S(_) ? (O(), I(rn, {
                  key: 0,
                  format: S(_)[i].format,
                  label: Mt(Te(te.value[i], S(c)[i].type, S(y) && b ? S(y)[b].format : void 0), i),
                  title: S(_)[i].title,
                  url: $n(S(_)[i])
                }, null, 8, ["format", "label", "title", "url"])) : b ? (O(), I(j, {
                  key: 1,
                  mood: Re(te.value[i][b], i, b),
                  contrast: "",
                  size: "small"
                }, {
                  default: C(() => [
                    L(N(Ce(te.value[i][b], i, b)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"])) : (O(), I(j, {
                  key: 2,
                  mood: Re(te.value[i], i, b),
                  contrast: "",
                  size: "small"
                }, {
                  default: C(() => [
                    L(N(Ce(te.value[i], i)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"]))
              ], 64)) : q("", !0)
            ], !0)
          ]),
          _: 2
        }, [
          S(y) ? {
            name: "secondaryColumn",
            fn: C(({ subcolumnKey: i }) => [
              i ? (O(), I(j, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: C(() => [
                  L(N(S(y)[i].label), 1)
                ]),
                _: 2
              }, 1024)) : q("", !0)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "dragColumns", "fixedColumnNumber", "inversedKpis", "orderBy", "primaryColumn", "rows", "showRowNumber", "showTotal", "showTopTotal"])) : q("", !0)
      ], 32),
      M("div", {
        class: J(["loading-overlay", { visible: De.value }])
      }, [
        T(Rt)
      ], 2)
    ]));
  }
});
const jo = /* @__PURE__ */ ge(bo, [["__scopeId", "data-v-dc184921"]]), go = { class: "scrollable flex-max no-spacing" }, _o = ["onClick"], yo = { class: "scrollable flex-max no-spacing" }, wo = ["onClick"], So = { class: "scrollable" }, Co = { class: "items flex-max no-spacing" }, Oo = /* @__PURE__ */ he({
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
    const n = e, { columns: r, defaultValue: s, groupNames: o, modelValue: a, showModalLabel: d } = be(n), h = A(Object.keys(o.value)[0]), v = A([...a.value]), c = A([]), _ = A([]), x = A(""), y = A(void 0), p = A(void 0), m = A(void 0), g = A(void 0), R = A(void 0), B = U(() => Object.fromEntries(
      Object.entries(r.value).filter(
        ([E, k]) => k.fixed !== !0 && (x.value.trim() === "" || k.label.toLowerCase().includes(x.value.trim().toLowerCase()))
      )
    )), ne = U(() => Object.keys(o.value).reduce((E, k) => (E[k] = Object.fromEntries(
      Object.entries(B.value).filter(([P, G]) => G.group === k)
    ), E), {})), re = U(
      () => h.value === void 0 ? void 0 : ne.value[h.value]
    ), le = U(() => Object.fromEntries(
      Object.entries(o.value).filter(
        ([E, k]) => Object.values(B.value).some((P) => P.group === E)
      )
    )), H = U(() => {
      if (!(m.value === void 0 || g.value === void 0 || R.value === void 0))
        return m.value + R.value - g.value;
    }), de = U(() => {
      if (H.value !== void 0)
        return `${H.value}px`;
    }), W = U(() => {
      if (p.value === void 0 || H.value === void 0)
        return;
      const E = v.value.indexOf(p.value), k = E - 1 - v.value.slice(0, E).reverse().findIndex((fe) => r.value[fe].fixed === !0);
      let P = v.value.slice(E + 1).findIndex((fe) => r.value[fe].fixed === !0);
      P >= 0 ? P += E + 1 : P = v.value.length;
      const G = Oe(v.value[k]), Le = G.offsetHeight, we = Math.min(
        Math.round((H.value - G.offsetTop) / Le - 1),
        P - k - 1
      );
      return k + we + 1;
    }), Oe = (E) => _.value[v.value.indexOf(E)], Z = (E) => c.value[v.value.indexOf(E)], _e = (E = !1, k) => {
      k && k.target !== k.currentTarget || (E && (v.value = [...a.value]), y.value = !1, h.value = Object.keys(o.value)[0]);
    }, at = (E) => {
      const k = v.value.indexOf(E);
      k >= 0 && v.value.splice(k, 1);
    }, lt = () => {
      v.value = [...s.value];
    }, it = (E) => {
      const k = [...E];
      t("update:modelValue", k), _e(!1);
    }, Ee = (E) => {
      h.value = E.toString();
    }, ut = () => {
      y.value = !0;
    }, Fe = (E) => {
      const k = v.value.indexOf(E);
      k >= 0 ? v.value.splice(k, 1) : v.value.push(E);
    }, xe = (E) => {
      R.value = E.clientY;
    }, ye = () => {
      const E = W.value;
      if (p.value !== void 0 && E !== void 0) {
        const k = v.value.indexOf(p.value);
        v.value.splice(k, 1), v.value.splice(E, 0, p.value);
      }
      p.value = void 0, m.value = void 0, g.value = void 0, R.value = void 0, window.removeEventListener("mousemove", xe), window.removeEventListener("mouseup", ye);
    }, ie = (E, k) => {
      p.value = k, m.value = Z(k).$el.offsetTop, g.value = E.clientY, R.value = E.clientY, window.addEventListener("mousemove", xe), window.addEventListener("mouseup", ye);
    };
    return Ue(x, (E) => {
      E ? (!h.value || !(h.value in le.value)) && (h.value = Object.keys(le.value)[0]) : h.value || (h.value = Object.keys(le.value)[0]);
    }), (E, k) => (O(), D(Y, null, [
      T(qt, {
        onClick: k[0] || (k[0] = () => ut()),
        label: S(d),
        mood: "neutral",
        tabindex: "-1"
      }, null, 8, ["label"]),
      (O(), I(an, { to: "#app > .app-container" }, [
        T(Q, {
          class: J(["kpi-selector-container no-spacing", { visible: y.value, hidden: y.value === !1 }]),
          onClick: k[5] || (k[5] = $e((P) => _e(!0, P), ["stop"])),
          column: "",
          horizontal: "center",
          vertical: "center"
        }, {
          default: C(() => [
            T(un, { class: "kpi-selector" }, {
              default: C(() => [
                T(Q, {
                  class: "title",
                  vertical: "center"
                }, {
                  default: C(() => [
                    T(je, {
                      class: "flex-max",
                      size: "large-2"
                    }, {
                      default: C(() => [
                        L(N(E.title), 1)
                      ]),
                      _: 1
                    }),
                    T(Q, {
                      class: "flex-max no-spacing search-container",
                      vertical: "center"
                    }, {
                      default: C(() => [
                        T(dn, {
                          class: "flex-max search",
                          modelValue: x.value,
                          "onUpdate:modelValue": k[1] || (k[1] = (P) => x.value = P),
                          placeholder: E.filterLabel
                        }, null, 8, ["modelValue", "placeholder"]),
                        T(ze, {
                          class: "no-spacing",
                          value: "search-alt-2"
                        })
                      ]),
                      _: 1
                    }),
                    T(Q, {
                      class: "close-container flex-max no-spacing",
                      horizontal: "right"
                    }, {
                      default: C(() => [
                        T(ze, {
                          class: "close",
                          onClick: k[2] || (k[2] = () => _e(!0)),
                          size: "large-3",
                          value: "x"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                T(Q, { class: "body flex-max no-spacing" }, {
                  default: C(() => [
                    h.value !== void 0 && re.value !== void 0 ? (O(), D(Y, { key: 0 }, [
                      T(Q, {
                        class: "groups flex-max",
                        column: ""
                      }, {
                        default: C(() => [
                          T(je, { size: "large-2" }, {
                            default: C(() => [
                              L(N(E.groupsTitle), 1)
                            ]),
                            _: 1
                          }),
                          M("div", go, [
                            (O(!0), D(Y, null, Ae(Object.entries(le.value), ([P, G]) => (O(), D("div", {
                              class: J(["item no-spacing", { selected: h.value === P }]),
                              onClick: () => Ee(P)
                            }, [
                              T(j, { size: "small" }, {
                                default: C(() => [
                                  L(N(G), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, _o))), 256))
                          ])
                        ]),
                        _: 1
                      }),
                      T(Q, {
                        class: "group-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: C(() => [
                          T(je, { size: "large-2" }, {
                            default: C(() => [
                              L(N(S(o)[h.value]), 1)
                            ]),
                            _: 1
                          }),
                          M("div", yo, [
                            (O(!0), D(Y, null, Ae(Object.entries(re.value), ([P, G]) => (O(), D("div", {
                              class: J(["item no-spacing", { selected: v.value.includes(P) }]),
                              onClick: () => Fe(P),
                              key: P
                            }, [
                              T(j, { size: "small" }, {
                                default: C(() => [
                                  L(N(G.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, wo))), 128))
                          ])
                        ]),
                        _: 1
                      }),
                      T(Q, {
                        class: "enabled-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: C(() => [
                          T(Q, {
                            class: "header",
                            vertical: "center"
                          }, {
                            default: C(() => [
                              T(je, {
                                class: "flex-max",
                                size: "large-2"
                              }, {
                                default: C(() => [
                                  L(N(E.orderTitle), 1)
                                ]),
                                _: 1
                              }),
                              T(j, {
                                class: "reset",
                                onClick: k[3] || (k[3] = () => lt()),
                                mood: "important-alt",
                                size: "small"
                              }, {
                                default: C(() => [
                                  L(N(E.resetLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          M("div", So, [
                            M("div", Co, [
                              (O(!0), D(Y, null, Ae(v.value, (P) => (O(), D("div", {
                                class: "item-container no-spacing",
                                ref_for: !0,
                                ref_key: "enabledColumnContainers",
                                ref: _
                              }, [
                                M("div", {
                                  class: J(["separator-top no-spacing", { "place-after": W.value !== void 0 && p.value !== void 0 && P === v.value[W.value] && W.value < v.value.indexOf(p.value) }])
                                }, null, 2),
                                T(Q, {
                                  class: J(["item no-spacing", { dragged: P === p.value }]),
                                  ref_for: !0,
                                  ref_key: "enabledColumnElements",
                                  ref: c,
                                  style: ln(P === p.value ? { top: de.value } : void 0),
                                  vertical: "center"
                                }, {
                                  default: C(() => [
                                    S(r)[P].fixed ? (O(), I(j, {
                                      key: 0,
                                      class: J(["flex-max", { fixed: S(r)[P].fixed }]),
                                      size: "small"
                                    }, {
                                      default: C(() => [
                                        L(N(S(r)[P].label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])) : (O(), D(Y, { key: 1 }, [
                                      T(ze, {
                                        class: "move",
                                        onMousedown: (G) => ie(G, P),
                                        value: "dots-vertical-rounded"
                                      }, null, 8, ["onMousedown"]),
                                      T(j, {
                                        class: "flex-max no-spacing",
                                        size: "small"
                                      }, {
                                        default: C(() => [
                                          L(N(S(r)[P].label), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      T(ze, {
                                        class: "no-spacing remove",
                                        onClick: () => at(P),
                                        value: "trash"
                                      }, null, 8, ["onClick"])
                                    ], 64))
                                  ]),
                                  _: 2
                                }, 1032, ["class", "style"]),
                                M("div", {
                                  class: J(["separator-bottom no-spacing", { "place-after": W.value !== void 0 && p.value !== void 0 && P === v.value[W.value] && W.value >= v.value.indexOf(p.value) }])
                                }, null, 2)
                              ], 512))), 256))
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ], 64)) : (O(), I(Q, {
                      key: 1,
                      class: "flex-max",
                      horizontal: "center",
                      vertical: "center"
                    }, {
                      default: C(() => [
                        T(j, { size: "small" }, {
                          default: C(() => [
                            L(N(E.noColumnsFoundLabel), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }))
                  ]),
                  _: 1
                }),
                T(Q, {
                  class: "controls no-spacing",
                  horizontal: "right"
                }, {
                  default: C(() => [
                    T(qt, {
                      onClick: k[4] || (k[4] = () => it(v.value)),
                      label: E.applyLabel,
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
const Uo = /* @__PURE__ */ ge(Oo, [["__scopeId", "data-v-f6336c9a"]]);
export {
  jo as CommonTable,
  Uo as KpiSelector
};
