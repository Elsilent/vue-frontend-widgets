import { defineComponent as be, toRefs as ge, ref as k, openBlock as O, createElementBlock as D, normalizeClass as q, createElementVNode as J, withModifiers as $e, toDisplayString as N, unref as S, createVNode as E, withCtx as C, createCommentVNode as H, Fragment as Y, renderList as ke, createBlock as I, pushScopeId as ln, popScopeId as un, computed as U, watch as Ue, nextTick as Ke, Teleport as cn, normalizeStyle as dn, renderSlot as St, onUnmounted as mr, createTextVNode as P, onMounted as hr, createSlots as br, normalizeProps as gr, guardReactiveProps as _r } from "vue";
import he from "numeral";
import { L as Tt, a as yr } from "./LineBarChart-8bc1f7a1.js";
import { P as At } from "./Popover-38d3223e.js";
import { _ as _e } from "./_plugin-vue_export-helper-dad06003.js";
import { C as fn, A as Q, I as ze } from "./Icon-8f2ed8ba.js";
import { I as j } from "./Info-54758b60.js";
import { D as pn, I as vn, B as Wt } from "./Input-7f2c48d4.js";
import { L as Gt } from "./Link-3e37d26a.js";
import { Separator as wr } from "./marker.js";
import { T as Sr } from "./Table-7726d33e.js";
import { H as je } from "./Header-8b49a8fe.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "vue-router";
import "./datetime-31a2b505.js";
function mn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Cr } = Object.prototype, { getPrototypeOf: kt } = Object, nt = ((e) => (t) => {
  const n = Cr.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ae = (e) => (e = e.toLowerCase(), (t) => nt(t) === e), rt = (e) => (t) => typeof t === e, { isArray: Pe } = Array, Me = rt("undefined");
function Or(e) {
  return e !== null && !Me(e) && e.constructor !== null && !Me(e.constructor) && ee(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const hn = ae("ArrayBuffer");
function xr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && hn(e.buffer), t;
}
const Er = rt("string"), ee = rt("function"), bn = rt("number"), st = (e) => e !== null && typeof e == "object", Rr = (e) => e === !0 || e === !1, Ye = (e) => {
  if (nt(e) !== "object")
    return !1;
  const t = kt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Tr = ae("Date"), Ar = ae("File"), kr = ae("Blob"), Nr = ae("FileList"), Pr = (e) => st(e) && ee(e.pipe), Fr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ee(e.append) && ((t = nt(e)) === "formdata" || // detect form-data instance
  t === "object" && ee(e.toString) && e.toString() === "[object FormData]"));
}, Lr = ae("URLSearchParams"), Dr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
function gn(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const _n = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), yn = (e) => !Me(e) && e !== _n;
function Ct() {
  const { caseless: e } = yn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && gn(t, s) || s;
    Ye(t[o]) && Ye(r) ? t[o] = Ct(t[o], r) : Ye(r) ? t[o] = Ct({}, r) : Pe(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Ve(arguments[r], n);
  return t;
}
const Br = (e, t, n, { allOwnKeys: r } = {}) => (Ve(t, (s, o) => {
  n && ee(s) ? e[o] = mn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Ir = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), zr = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, jr = (e, t, n, r) => {
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
}, Ur = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, $r = (e) => {
  if (!e)
    return null;
  if (Pe(e))
    return e;
  let t = e.length;
  if (!bn(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Mr = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && kt(Uint8Array)), Vr = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Hr = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, qr = ae("HTMLFormElement"), Jr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Xt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Wr = ae("RegExp"), wn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Ve(n, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (r[o] = a || s);
  }), Object.defineProperties(e, r);
}, Gr = (e) => {
  wn(e, (t, n) => {
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
}, Xr = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Pe(e) ? r(e) : r(String(e).split(t)), n;
}, Yr = () => {
}, Qr = (e, t) => (e = +e, Number.isFinite(e) ? e : t), bt = "abcdefghijklmnopqrstuvwxyz", Yt = "0123456789", Sn = {
  DIGIT: Yt,
  ALPHA: bt,
  ALPHA_DIGIT: bt + bt.toUpperCase() + Yt
}, Zr = (e = 16, t = Sn.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Kr(e) {
  return !!(e && ee(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const es = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (st(r)) {
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
}, ts = ae("AsyncFunction"), ns = (e) => e && (st(e) || ee(e)) && ee(e.then) && ee(e.catch), f = {
  isArray: Pe,
  isArrayBuffer: hn,
  isBuffer: Or,
  isFormData: Fr,
  isArrayBufferView: xr,
  isString: Er,
  isNumber: bn,
  isBoolean: Rr,
  isObject: st,
  isPlainObject: Ye,
  isUndefined: Me,
  isDate: Tr,
  isFile: Ar,
  isBlob: kr,
  isRegExp: Wr,
  isFunction: ee,
  isStream: Pr,
  isURLSearchParams: Lr,
  isTypedArray: Mr,
  isFileList: Nr,
  forEach: Ve,
  merge: Ct,
  extend: Br,
  trim: Dr,
  stripBOM: Ir,
  inherits: zr,
  toFlatObject: jr,
  kindOf: nt,
  kindOfTest: ae,
  endsWith: Ur,
  toArray: $r,
  forEachEntry: Vr,
  matchAll: Hr,
  isHTMLForm: qr,
  hasOwnProperty: Xt,
  hasOwnProp: Xt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: wn,
  freezeMethods: Gr,
  toObjectSet: Xr,
  toCamelCase: Jr,
  noop: Yr,
  toFiniteNumber: Qr,
  findKey: gn,
  global: _n,
  isContextDefined: yn,
  ALPHABET: Sn,
  generateString: Zr,
  isSpecCompliantForm: Kr,
  toJSONObject: es,
  isAsyncFn: ts,
  isThenable: ns
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
const Cn = F.prototype, On = {};
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
  On[e] = { value: e };
});
Object.defineProperties(F, On);
Object.defineProperty(Cn, "isAxiosError", { value: !0 });
F.from = (e, t, n, r, s, o) => {
  const a = Object.create(Cn);
  return f.toFlatObject(e, a, function(h) {
    return h !== Error.prototype;
  }, (d) => d !== "isAxiosError"), F.call(a, e.message, t, n, r, s), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const rs = null;
function Ot(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function xn(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Qt(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = xn(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function ss(e) {
  return f.isArray(e) && !e.some(Ot);
}
const os = f.toFlatObject(f, {}, null, function(t) {
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
    let T = p;
    if (p && !g && typeof p == "object") {
      if (f.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (f.isArray(p) && ss(p) || (f.isFileList(p) || f.endsWith(m, "[]")) && (T = f.toArray(p)))
        return m = xn(m), T.forEach(function(ne, re) {
          !(f.isUndefined(ne) || ne === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Qt([m], re, o) : a === null ? m : m + "[]",
            v(ne)
          );
        }), !1;
    }
    return Ot(p) ? !0 : (t.append(Qt(g, m, o), v(p)), !1);
  }
  const _ = [], R = Object.assign(os, {
    defaultVisitor: c,
    convertValue: v,
    isVisitable: Ot
  });
  function y(p, m) {
    if (!f.isUndefined(p)) {
      if (_.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      _.push(p), f.forEach(p, function(T, B) {
        (!(f.isUndefined(T) || T === null) && s.call(
          t,
          T,
          f.isString(B) ? B.trim() : B,
          m,
          R
        )) === !0 && y(T, m ? m.concat(B) : [B]);
      }), _.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return y(e), t;
}
function Zt(e) {
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
  this._pairs = [], e && ot(e, this, t);
}
const En = Nt.prototype;
En.append = function(t, n) {
  this._pairs.push([t, n]);
};
En.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Zt);
  } : Zt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function as(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Rn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || as, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = f.isURLSearchParams(t) ? t.toString() : new Nt(t, n).toString(r), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class ls {
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
const Kt = ls, Tn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, is = typeof URLSearchParams < "u" ? URLSearchParams : Nt, us = typeof FormData < "u" ? FormData : null, cs = typeof Blob < "u" ? Blob : null, ds = {
  isBrowser: !0,
  classes: {
    URLSearchParams: is,
    FormData: us,
    Blob: cs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, An = typeof window < "u" && typeof document < "u", fs = ((e) => An && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), ps = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), vs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: An,
  hasStandardBrowserEnv: fs,
  hasStandardBrowserWebWorkerEnv: ps
}, Symbol.toStringTag, { value: "Module" })), oe = {
  ...vs,
  ...ds
};
function ms(e, t) {
  return ot(e, new oe.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return oe.isNode && f.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function hs(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function bs(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function kn(e) {
  function t(n, r, s, o) {
    let a = n[o++];
    const d = Number.isFinite(+a), h = o >= n.length;
    return a = !a && f.isArray(s) ? s.length : a, h ? (f.hasOwnProp(s, a) ? s[a] = [s[a], r] : s[a] = r, !d) : ((!s[a] || !f.isObject(s[a])) && (s[a] = []), t(n, r, s[a], o) && f.isArray(s[a]) && (s[a] = bs(s[a])), !d);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const n = {};
    return f.forEachEntry(e, (r, s) => {
      t(hs(r), s, n, 0);
    }), n;
  }
  return null;
}
function gs(e, t, n) {
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
  transitional: Tn,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = f.isObject(t);
    if (o && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
      return s && s ? JSON.stringify(kn(t)) : t;
    if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t))
      return t;
    if (f.isArrayBufferView(t))
      return t.buffer;
    if (f.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let d;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ms(t, this.formSerializer).toString();
      if ((d = f.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const h = this.env && this.env.FormData;
        return ot(
          d ? { "files[]": t } : t,
          h && new h(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), gs(t)) : t;
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
const Ft = Pt, _s = f.toObjectSet([
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
]), ys = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), n = a.substring(0, s).trim().toLowerCase(), r = a.substring(s + 1).trim(), !(!n || t[n] && _s[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, en = Symbol("internals");
function Ie(e) {
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
const Ss = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function Cs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Os(e, t) {
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
    function o(d, h, v) {
      const c = Ie(h);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const _ = f.findKey(s, c);
      (!_ || s[_] === void 0 || v === !0 || v === void 0 && s[_] !== !1) && (s[_ || h] = Qe(d));
    }
    const a = (d, h) => f.forEach(d, (v, c) => o(v, c, h));
    return f.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : f.isString(t) && (t = t.trim()) && !Ss(t) ? a(ys(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = Ie(t), t) {
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
    if (t = Ie(t), t) {
      const r = f.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || gt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(a) {
      if (a = Ie(a), a) {
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
      const d = t ? Cs(o) : String(o).trim();
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
    const r = (this[en] = this[en] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const d = Ie(a);
      r[d] || (Os(s, a), r[d] = !0);
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
const ce = at;
function _t(e, t) {
  const n = this || Ft, r = t || n, s = ce.from(r.headers);
  let o = r.data;
  return f.forEach(e, function(d) {
    o = d.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Nn(e) {
  return !!(e && e.__CANCEL__);
}
function He(e, t, n) {
  F.call(this, e ?? "canceled", F.ERR_CANCELED, t, n), this.name = "CanceledError";
}
f.inherits(He, F, {
  __CANCEL__: !0
});
function xs(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new F(
    "Request failed with status code " + n.status,
    [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Es = oe.hasStandardBrowserEnv ? (
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
function Rs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ts(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Pn(e, t) {
  return e && !Rs(t) ? Ts(e, t) : t;
}
const As = oe.hasStandardBrowserEnv ? (
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
function ks(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ns(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(h) {
    const v = Date.now(), c = r[o];
    a || (a = v), n[s] = h, r[s] = v;
    let _ = o, R = 0;
    for (; _ !== s; )
      R += n[_++], _ = _ % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), v - a < t)
      return;
    const y = c && v - c;
    return y ? Math.round(R * 1e3 / y) : void 0;
  };
}
function tn(e, t) {
  let n = 0;
  const r = Ns(50, 250);
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
const Ps = typeof XMLHttpRequest < "u", Fs = Ps && function(e) {
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
    const _ = Pn(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Rn(_, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function R() {
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
      xs(function(B) {
        n(B), h();
      }, function(B) {
        r(B), h();
      }, g), c = null;
    }
    if ("onloadend" in c ? c.onloadend = R : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, c.onabort = function() {
      c && (r(new F("Request aborted", F.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new F("Network Error", F.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const g = e.transitional || Tn;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), r(new F(
        m,
        g.clarifyTimeoutError ? F.ETIMEDOUT : F.ECONNABORTED,
        e,
        c
      )), c = null;
    }, oe.hasStandardBrowserEnv) {
      const p = As(_) && e.xsrfCookieName && Es.read(e.xsrfCookieName);
      p && o.set(e.xsrfHeaderName, p);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in c && f.forEach(o.toJSON(), function(m, g) {
      c.setRequestHeader(g, m);
    }), f.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), a && a !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", tn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", tn(e.onUploadProgress)), (e.cancelToken || e.signal) && (d = (p) => {
      c && (r(!p || p.type ? new He(null, e, c) : p), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(d), e.signal && (e.signal.aborted ? d() : e.signal.addEventListener("abort", d)));
    const y = ks(_);
    if (y && oe.protocols.indexOf(y) === -1) {
      r(new F("Unsupported protocol " + y + ":", F.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, xt = {
  http: rs,
  xhr: Fs
};
f.forEach(xt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const nn = (e) => `- ${e}`, Ls = (e) => f.isFunction(e) || e === null || e === !1, Fn = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let a;
      if (r = n, !Ls(n) && (r = xt[(a = String(n)).toLowerCase()], r === void 0))
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
` + o.map(nn).join(`
`) : " " + nn(o[0]) : "as no adapter specified";
      throw new F(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: xt
};
function yt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new He(null, e);
}
function rn(e) {
  return yt(e), e.headers = ce.from(e.headers), e.data = _t.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Fn.getAdapter(e.adapter || Ft.adapter)(e).then(function(r) {
    return yt(e), r.data = _t.call(
      e,
      e.transformResponse,
      r
    ), r.headers = ce.from(r.headers), r;
  }, function(r) {
    return Nn(r) || (yt(e), r && r.response && (r.response.data = _t.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = ce.from(r.response.headers))), Promise.reject(r);
  });
}
const sn = (e) => e instanceof ce ? e.toJSON() : e;
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
    headers: (v, c) => s(sn(v), sn(c), !0)
  };
  return f.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const _ = h[c] || s, R = _(e[c], t[c], c);
    f.isUndefined(R) && _ !== d || (n[c] = R);
  }), n;
}
const Ln = "1.6.1", Lt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Lt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const on = {};
Lt.transitional = function(t, n, r) {
  function s(o, a) {
    return "[Axios v" + Ln + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
  }
  return (o, a, d) => {
    if (t === !1)
      throw new F(
        s(a, " has been removed" + (n ? " in " + n : "")),
        F.ERR_DEPRECATED
      );
    return n && !on[a] && (on[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, d) : !0;
  };
};
function Ds(e, t, n) {
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
  assertOptions: Ds,
  validators: Lt
}, me = Et.validators;
class et {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Kt(),
      response: new Kt()
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
      silentJSONParsing: me.transitional(me.boolean),
      forcedJSONParsing: me.transitional(me.boolean),
      clarifyTimeoutError: me.transitional(me.boolean)
    }, !1), s != null && (f.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Et.assertOptions(s, {
      encode: me.function,
      serialize: me.function
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
    let c, _ = 0, R;
    if (!h) {
      const p = [rn.bind(this), void 0];
      for (p.unshift.apply(p, d), p.push.apply(p, v), R = p.length, c = Promise.resolve(n); _ < R; )
        c = c.then(p[_++], p[_++]);
      return c;
    }
    R = d.length;
    let y = n;
    for (_ = 0; _ < R; ) {
      const p = d[_++], m = d[_++];
      try {
        y = p(y);
      } catch (g) {
        m.call(this, g);
        break;
      }
    }
    try {
      c = rn.call(this, y);
    } catch (p) {
      return Promise.reject(p);
    }
    for (_ = 0, R = v.length; _ < R; )
      c = c.then(v[_++], v[_++]);
    return c;
  }
  getUri(t) {
    t = Ne(this.defaults, t);
    const n = Pn(t.baseURL, t.url);
    return Rn(n, t.params, t.paramsSerializer);
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
      token: new Dt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Bs = Dt;
function Is(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function zs(e) {
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
const js = Rt;
function Dn(e) {
  const t = new Ze(e), n = mn(Ze.prototype.request, t);
  return f.extend(n, Ze.prototype, t, { allOwnKeys: !0 }), f.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Dn(Ne(e, s));
  }, n;
}
const M = Dn(Ft);
M.Axios = Ze;
M.CanceledError = He;
M.CancelToken = Bs;
M.isCancel = Nn;
M.VERSION = Ln;
M.toFormData = ot;
M.AxiosError = F;
M.Cancel = M.CanceledError;
M.all = function(t) {
  return Promise.all(t);
};
M.spread = Is;
M.isAxiosError = zs;
M.mergeConfig = Ne;
M.AxiosHeaders = ce;
M.formToJSON = (e) => kn(f.isHTMLForm(e) ? new FormData(e) : e);
M.getAdapter = Fn.getAdapter;
M.HttpStatusCode = js;
M.default = M;
const tt = M;
he.localeData().delimiters.thousands = " ";
he.localeData().delimiters.decimal = ",";
const Us = (e) => e === void 0 ? void 0 : JSON.parse(JSON.stringify(e)), $s = (e) => {
  if (!Array.isArray(e) && Object.getPrototypeOf(e) !== Object.prototype)
    throw new Error(
      "Tried cloning instance of a class. Consider implementing clone method instead."
    );
  return Us(e);
};
function Bn(e, t, n) {
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
function Ms(e, t, n, r) {
  const s = {};
  for (const o of Object.values(e)) {
    const a = o[r], d = Object.values(t).find(
      (h) => h[r] === a
    );
    s[a] = Bn(o, d, n);
  }
  return s;
}
const Vs = {
  key: 0,
  class: "popover-header"
}, Hs = {
  key: 1,
  class: "popover-body"
}, qs = {
  important: "",
  size: "small"
}, Js = { size: "small" }, Ws = /* @__PURE__ */ be({
  __name: "CellHint",
  props: {
    format: {},
    label: {},
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { format: n, label: r, title: s, url: o } = ge(t), a = k(), d = k(!1), h = k(), v = (m) => {
      var g;
      m && (!m.target || (g = h.value) != null && g.contains(m.target)) || (d.value = !1, window.removeEventListener("mouseup", v));
    }, c = (m) => m.map(({ name: g, valueFormatted: T }) => ({
      label: g,
      value: T
    })), _ = (m) => m.map(({ name: g, rate: T, value: B }) => ({
      label: g,
      value: `${he(B).format("0,0")} (${he(T).format("0,0.00")}%)`
    })), R = (m) => {
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
      const m = (await tt(o.value)).data;
      a.value = R(m);
    }, p = async () => {
      d.value = !0, await y();
    };
    return (m, g) => (O(), D("div", {
      class: q(["cell-hint", { visible: d.value }]),
      ref_key: "root",
      ref: h,
      onMouseover: g[1] || (g[1] = () => p()),
      onMouseout: g[2] || (g[2] = () => v())
    }, [
      J("span", {
        class: "label",
        onClick: g[0] || (g[0] = $e(() => p(), ["stop"]))
      }, N(S(r)), 1),
      E(At, {
        visible: d.value,
        parentClass: "cell",
        popoverClass: "cell-hint-popover"
      }, {
        default: C(() => [
          S(s) ? (O(), D("div", Vs, N(S(s)), 1)) : H("", !0),
          a.value ? (O(), D("div", Hs, [
            (O(!0), D(Y, null, ke(a.value, ({ label: T, value: B }, ne) => (O(), D("div", {
              key: `line-${ne}`
            }, [
              J("b", qs, N(T) + ": ", 1),
              J("span", Js, N(B), 1)
            ]))), 128))
          ])) : (O(), I(Tt, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ], 34));
  }
});
const an = /* @__PURE__ */ _e(Ws, [["__scopeId", "data-v-9c7f570a"]]), Gs = (e) => (ln("data-v-7a1d1810"), e = e(), un(), e), Xs = { class: "column-hint" }, Ys = /* @__PURE__ */ Gs(() => /* @__PURE__ */ J("i", { class: "la la-question-circle" }, null, -1)), Qs = { class: "popover-header" }, Zs = { class: "popover-body" }, Ks = /* @__PURE__ */ be({
  __name: "ColumnHint",
  props: {
    description: {},
    title: {},
    visible: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { description: n, title: r, visible: s } = ge(t);
    return (o, a) => (O(), D("div", Xs, [
      Ys,
      E(At, {
        visible: S(s),
        parentClass: "cell",
        popoverClass: "column-hint-popover"
      }, {
        default: C(() => [
          J("div", Qs, N(S(r)), 1),
          J("div", Zs, N(S(n)), 1)
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const eo = /* @__PURE__ */ _e(Ks, [["__scopeId", "data-v-7a1d1810"]]), to = /* @__PURE__ */ be({
  __name: "BodyPopover",
  props: {
    autoPosition: { type: Boolean, default: !1 },
    parentNode: {},
    popoverClass: {},
    visible: { type: Boolean }
  },
  setup(e) {
    const t = e, { autoPosition: n, parentNode: r, popoverClass: s, visible: o } = ge(t), a = k(), d = k(), h = k(), v = U(() => ({
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
      a.value = 0, h.value = 0, Ke(() => {
        const p = y.left, m = y.top + document.documentElement.scrollTop, g = d.value.$el.offsetWidth, T = (g - y.width) / 2;
        y.left - T < 0 ? a.value = p : y.left + T + y.width > document.body.clientWidth ? a.value = p - g + y.width : a.value = p - T;
        const B = d.value.$el.offsetHeight;
        y.bottom + B > document.body.clientHeight ? h.value = m - B : h.value = m + y.height;
      });
    }, R = n != null && n.value ? new ResizeObserver(() => _()) : void 0;
    return Ue(
      o,
      (y) => {
        !(n != null && n.value) || !R || (R.disconnect(), y && Ke(() => {
          _(), R.observe(d.value.$el);
        }));
      },
      {
        immediate: !0
      }
    ), (y, p) => (O(), I(cn, { to: "#app > .app-container" }, [
      E(fn, {
        class: q(["no-spacing popover", v.value]),
        ref_key: "popover",
        ref: d,
        style: dn(c.value)
      }, {
        default: C(() => [
          St(y.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["class", "style"])
    ]));
  }
});
const no = /* @__PURE__ */ _e(to, [["__scopeId", "data-v-d948a8f2"]]), ro = /* @__PURE__ */ be({
  __name: "DetailsSelector",
  props: {
    labels: {},
    open: { type: Boolean, default: !1 },
    title: {}
  },
  emits: ["hideDetails", "showDetails"],
  setup(e, { emit: t }) {
    const n = e, { labels: r, open: s, title: o } = ge(n), a = k(!1), d = k(), h = k(), v = (R) => {
      var y, p;
      !R.target || (y = h.value) != null && y.contains(R.target) || (p = d.value) != null && p.$el.contains(R.target) || (a.value = !1, window.removeEventListener("mouseup", v));
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
    }, _ = (R) => {
      if (a.value = !1, s.value) {
        t("hideDetails");
        return;
      }
      t("showDetails", R);
    };
    return mr(() => {
      window.removeEventListener("mouseup", v);
    }), (R, y) => (O(), D("div", {
      class: "details-selector-container",
      ref_key: "root",
      ref: h,
      onClick: y[0] || (y[0] = $e(() => c(), ["stop"]))
    }, [
      E(Q, {
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
              P(N(S(o)), 1)
            ]),
            _: 1
          })) : H("", !0),
          E(ze, {
            value: S(s) ? "chevron-up" : "chevron-down",
            mood: "important-alt",
            size: "large-2"
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      E(no, {
        ref_key: "popover",
        ref: d,
        parentNode: h.value,
        visible: a.value,
        autoPosition: "",
        popoverClass: "details-selector-popover"
      }, {
        default: C(() => [
          (O(!0), D(Y, null, ke(S(r), (p, m) => (O(), I(j, {
            class: "dropdown-item",
            onClick: $e(() => _(m), ["stop"]),
            contrast: ""
          }, {
            default: C(() => [
              P(N(p), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 256))
        ]),
        _: 1
      }, 8, ["parentNode", "visible"])
    ], 512));
  }
});
const so = /* @__PURE__ */ _e(ro, [["__scopeId", "data-v-4d4dbc91"]]), oo = { class: "pagination" }, ao = ["onClick"], lo = /* @__PURE__ */ be({
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
    const n = e, { currentPageSize: r, id: s, pageNumber: o, pageRadius: a, pageSizeLabel: d, pageSizes: h, rowCount: v } = ge(n), c = U(() => Math.min(...h.value)), _ = U(() => Math.ceil(v.value / r.value)), R = U(
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
    return (m, g) => (O(), D("div", oo, [
      S(v) > S(r) ? (O(), D(Y, { key: 0 }, [
        S(o) > 0 ? (O(), I(j, {
          key: 0,
          class: "page",
          onClick: g[0] || (g[0] = () => t("update:pageNumber", 0)),
          mood: "important-alt"
        }, {
          default: C(() => [
            P("1")
          ]),
          _: 1
        })) : H("", !0),
        S(o) > S(a) ? (O(), I(j, {
          key: 1,
          class: "page-separator"
        }, {
          default: C(() => [
            P("…")
          ]),
          _: 1
        })) : H("", !0),
        (O(!0), D(Y, null, ke(y.value, (T) => (O(), D("div", {
          class: q(["page", { current: T === S(o) }]),
          onClick: () => t("update:pageNumber", T),
          key: T
        }, N(T + 1), 11, ao))), 128)),
        S(o) < _.value - S(a) - 1 ? (O(), I(j, {
          key: 2,
          class: "page-separator"
        }, {
          default: C(() => [
            P("…")
          ]),
          _: 1
        })) : H("", !0),
        S(o) < _.value - 1 ? (O(), I(j, {
          key: 3,
          class: "page",
          onClick: g[1] || (g[1] = () => t("update:pageNumber", _.value - 1)),
          mood: "important-alt"
        }, {
          default: C(() => [
            P(N(_.value), 1)
          ]),
          _: 1
        })) : H("", !0),
        E(j, { class: "page-size-label" }, {
          default: C(() => [
            P(N(S(d)), 1)
          ]),
          _: 1
        })
      ], 64)) : H("", !0),
      S(v) > c.value ? (O(), I(pn, {
        key: 1,
        class: "page-size-selector",
        "onUpdate:modelValue": g[2] || (g[2] = (T) => p(parseInt(T.toString()))),
        id: S(s),
        items: R.value,
        modelValue: S(r)
      }, {
        item: C(({ item: T }) => [
          P(N(T), 1)
        ]),
        _: 1
      }, 8, ["id", "items", "modelValue"])) : H("", !0)
    ]));
  }
});
const io = /* @__PURE__ */ _e(lo, [["__scopeId", "data-v-764cc1be"]]), uo = (e) => (ln("data-v-b4f986aa"), e = e(), un(), e), co = /* @__PURE__ */ uo(() => /* @__PURE__ */ J("i", { class: "la la-eye secondary" }, null, -1)), fo = /* @__PURE__ */ be({
  __name: "TrendChart",
  props: {
    formatter: { type: Function },
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { formatter: n, title: r, url: s } = ge(t), o = k(!1), a = k([]), d = k(), h = U(() => d.value ? Object.assign({}, d.value) : {}), v = U(() => {
      var g;
      switch ((g = d.value) == null ? void 0 : g.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return d.value[0];
        default:
          return d.value.slice(d.value.length / 2).reduce((T, B) => T + B, 0) / Math.ceil(d.value.length / 2);
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
          return d.value.slice(0, d.value.length / 2).reduce((T, B) => T + B, 0) / Math.floor(d.value.length / 2);
      }
    }), _ = U(() => c.value > v.value ? "negative" : c.value < v.value ? "positive" : "neutral"), R = U(() => {
      if (!d.value)
        return {};
      const g = new Array(d.value.length).fill(0).map(
        (T, B) => c.value + (v.value - c.value) * B / (d.value.length - 1)
      );
      return Object.assign({}, g);
    }), y = async () => {
      if (!d.value)
        return;
      const g = (await tt({ url: s.value })).data;
      a.value = Object.keys(g), d.value = Object.values(g);
    }, p = () => {
      o.value = !1, window.removeEventListener("mouseup", p);
    }, m = async () => {
      o.value = !0, window.addEventListener("mouseup", p), await y();
    };
    return (g, T) => (O(), D("div", {
      class: "trend-chart-container",
      onClick: T[0] || (T[0] = $e(() => m(), ["stop"]))
    }, [
      co,
      E(At, {
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
              P(N(S(r)), 1)
            ]),
            _: 1
          })) : H("", !0),
          d.value ? (O(), I(yr, {
            key: 1,
            activeLines: ["values"],
            formatters: { trend: S(n), values: S(n) },
            moods: { trend: { mood: _.value }, values: { mood: "important" } },
            styles: { trend: "line", values: "line" },
            values: { trend: R.value, values: h.value }
          }, {
            "x-axis-label": C(({ index: B }) => [
              P(N(a.value[B]), 1)
            ]),
            _: 1
          }, 8, ["formatters", "moods", "values"])) : (O(), I(Tt, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const po = /* @__PURE__ */ _e(fo, [["__scopeId", "data-v-b4f986aa"]]), vo = { class: "common-table" }, mo = {
  key: 0,
  class: "controls d-flex justify-content-end mb-1"
}, ho = ["onMouseover", "onMouseout"], bo = ["onClick"], wt = 50, go = /* @__PURE__ */ be({
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
      colorMetrics: v,
      columns: c,
      columnDetails: _,
      columnLinks: R,
      comparisonColumns: y,
      comparisonRequest: p,
      defaultOrderBy: m,
      detailsColumn: g,
      detailsRequests: T,
      dragColumns: B,
      fixedColumnNumber: ne,
      inlineFilterOperators: re,
      inversedKpis: le,
      primaryColumn: V,
      primaryColumnAlias: de,
      request: W,
      rows: Ce,
      shortenColumns: Z,
      showInlineFilters: ye,
      showRowNumber: lt,
      showPagination: it,
      showTopTotal: ut,
      total: Oe,
      totalColumnKey: ct,
      trendUrl: Fe
    } = ge(n), xe = () => {
      const l = {};
      for (const u of Object.keys(c.value))
        u in re.value && (l[u] = {
          operator: Object.keys(re.value[u])[0],
          value: ""
        });
      return l;
    }, fe = k([]), Ee = k(void 0), x = k({}), A = k([]), L = k({}), X = k([]), pe = k({}), Le = k(!1), ie = k(!1), qe = k([]), Je = k(!1), te = k(xe()), De = k(!0), se = k(), ve = k(0), we = k(20), We = k(0), K = k(), ue = k(), In = U(() => {
      const l = {};
      return ie.value && (l.inline_filters = {
        icon: "filter"
      }), l;
    }), zn = U(
      () => y != null && y.value ? Object.keys(y.value) : void 0
    ), jn = U(
      () => X.value.reduce((l, u) => (l[u] = $s(c.value[u]), l), {})
    ), Bt = U(() => {
      if (T != null && T.value)
        return Object.entries(T.value).reduce((l, [u, { label: i }]) => (l[u] = i, l), {});
    }), It = U(() => [...fe.value].sort((l, u) => {
      const i = (() => {
        const b = ft(
          se.value[0].reduce(($, z) => $[z], l),
          c.value[se.value[0][0]].type
        ), w = ft(
          se.value[0].reduce(($, z) => $[z], u),
          c.value[se.value[0][0]].type
        );
        return b > w ? 1 : b < w ? -1 : 0;
      })();
      return se.value[1] ? -i : i;
    })), zt = U(() => !(W != null && W.value) || Je.value ? It.value : It.value.slice(
      ve.value * we.value,
      (ve.value + 1) * we.value
    )), Un = (l) => {
      A.value.includes(l) || A.value.push(l);
    }, Ge = (l, u) => !Z.value || !Z.value.includes(l) ? !1 : u.length > wt, $n = (l) => !!l.tooltipTitle && !!l.tooltipDescription, Re = (l, u, i) => {
      var w;
      if (!i || !(y != null && y.value) || !(i in y.value) || y.value[i].format !== "difference")
        return;
      const b = ((w = le == null ? void 0 : le.value) == null ? void 0 : w.includes(u)) ?? !1;
      return l > 0 ? b ? "negative" : "positive" : l < 0 ? b ? "positive" : "negative" : "neutral";
    }, Te = (l, u, i) => {
      let b = ft(l, u);
      switch (u) {
        case "float":
          return he(parseFloat(b)).format("0,0.00");
        case "int":
          return he(parseInt(b)).format("0,0");
        case "money": {
          let w = "0,0";
          a.value > 0 && (w += "." + "0".repeat(a.value));
          const $ = he(parseFloat(b)).format(w);
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
          let w = he(parseFloat(b)).format("0,0.00") + "%";
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
    }, Mn = async (l, u) => {
      if (x.value[l] && x.value[l][u[V.value]])
        return x.value[l][u[V.value]];
      const { rows: i } = await r(T.value[l].request, {
        row: u,
        primaryColumn: (de == null ? void 0 : de.value) ?? V.value,
        primaryColumnValue: u[V.value]
      });
      return x.value[l] || (x.value[l] = {}), x.value[l][u[V.value]] = Object.values(i), x.value[l][u[V.value]];
    }, jt = (l, u) => {
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
    }, Vn = (l, u) => {
      const i = new URL(_.value[l].baseUrl, location.origin);
      if (Array.isArray(_.value[l].columns))
        for (const b of _.value[l].columns)
          i.searchParams.set(b, u[b]);
      else
        for (const [b, w] of Object.entries(_.value[l].columns))
          i.searchParams.set(w, u[b]);
      return i.toString();
    }, Hn = (l) => {
      if (l.totalUrl)
        return new URL(l.totalUrl).toString();
      const u = new URL(l.baseUrl);
      return u.searchParams.set("total", "true"), u.toString();
    }, qn = (l) => !Z.value || !Z.value.includes(l) ? -1 : qe.value.indexOf(l), Jn = (l) => {
      if (l in te.value)
        return te.value[l].operator;
    }, Wn = (l) => {
      if (l in te.value)
        return te.value[l].value;
    }, dt = (l) => re.value[l], Gn = (l) => {
      const u = dt(l);
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
    }, Xn = (l) => {
      const u = dt(l);
      return u ? Object.entries(u).reduce((i, [b, w]) => (i[b] = w.label, i), {}) : {};
    }, Yn = (l) => c.value[l].type === "string" ? "text" : "number", Ut = () => `Table_OrderBy_${location.pathname}`, Qn = () => `Table_PageSize_${location.pathname}`, ft = (l, u) => {
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
    }, Se = (l, u, i, b = !1) => {
      const [w, $] = (() => !i || !(y != null && y.value) || !(i in y.value) ? [c.value[u].type, void 0] : [
        y.value[i].type ?? c.value[u].type,
        y.value[i].format
      ])();
      let z = Te(l, w);
      return $ === "difference" && (z = l > 0 ? `+${z}` : z), b ? Vt(z, u) : z;
    }, Zn = (l, u) => {
      if (!Fe)
        return "";
      const i = new URL(
        u ? Fe.value[u] : Fe.value,
        location.origin
      );
      return i.searchParams.set((de == null ? void 0 : de.value) ?? V.value, l[V.value]), i.toString();
    }, Xe = (l, u, i) => Ge(l, u) ? [] : i ? (g == null ? void 0 : g.value) === l ? ["flex-grow-1", "text-left"] : Z.value && Z.value.includes(l) && zt.value.some((b) => Ge(l, b[l])) ? ["flex-grow-1", "text-left"] : ["flex-grow-1"] : ["flew-grow-1"], Kn = (l) => l in re.value, er = () => {
      ye.value && (Le.value = !1);
    }, $t = (l, u) => {
      if (!(R != null && R.value) || !(u in R.value))
        return !1;
      const i = R.value[u];
      return i === null ? !!l.url : !("disable_for" in i && i.disable_for.includes(l[V.value]));
    }, tr = (l, u) => {
      const [i] = X.value.splice(l, 1);
      X.value.splice(u, 0, i), t("move:column", { from: l, to: u });
    }, nr = (l) => {
      const u = A.value.indexOf(l);
      u < 0 || A.value.splice(u, 1);
    }, Mt = (l, u) => {
      L.value[l] = u;
    }, Vt = (l, u) => !Z.value || !Z.value.includes(u) || l.length <= wt ? l : `${l.substring(0, wt - 3)}...`, rr = (l) => {
      if (!ue.value)
        return;
      const u = {
        left: ue.value.$el.scrollLeft,
        top: ue.value.$el.scrollTop
      };
      delete pe.value[l[V.value]], Ke(() => {
        ue.value.$el.scrollTo(u);
      });
    }, sr = (l, u) => {
      const i = l.target.value;
      qt(u, { value: i });
    }, or = (l, u) => {
      l.key === "Enter" && l.target.blur();
    }, ar = async (l, u) => {
      if (!ue.value)
        return;
      const i = {
        left: ue.value.$el.scrollLeft,
        top: ue.value.$el.scrollTop
      };
      De.value = !0, pe.value[u[V.value]] = await Mn(l, u), Ke(() => {
        ue.value.$el.scrollTo(i), De.value = !1;
      });
    }, lr = async (l = !1) => {
      await ur(l) || await ir(l) || await vt(l);
    }, pt = async (l) => {
      await mt(l), ve.value = l;
    }, Ht = async (l) => {
      const u = Qn();
      if (l === void 0) {
        const i = localStorage.getItem(u);
        i && (we.value = parseInt(i));
      } else
        localStorage.setItem(u, l.toString()), await mt(0, l), ve.value = 0, we.value = l;
    }, qt = (l, { operator: u, value: i }) => {
      if (u || (u = Object.keys(dt(l))[0]), !u)
        return;
      const b = {
        ...te.value[l],
        operator: u
      };
      i !== void 0 && (b.value = i), te.value[l] = b, pt(0);
    }, ir = async (l) => {
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
      return await Ae(b, !1, l), !0;
    }, vt = async (l) => {
      if (m != null && m.value) {
        await Ae(m.value, !1, l);
        return;
      }
      const [u, { colspan: i }] = Object.entries(c.value).find(
        ([b, { visible: w }]) => w
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
    }, ur = async (l) => {
      const u = localStorage.getItem(Ut());
      if (u) {
        const i = JSON.parse(u)[0][0];
        if (c.value[i])
          return await Ae(JSON.parse(u), !1, l), !0;
      } else
        return !1;
    }, cr = async (l, u, i) => {
      if (!(W != null && W.value))
        return !1;
      if (Je.value)
        return !0;
      const [b, w] = await (async () => {
        const $ = [
          s(W.value, {
            inlineFilters: te.value,
            pageNumber: l,
            pageSize: u,
            orderBy: i[0],
            reversed: i[1]
          })
        ];
        p != null && p.value && $.push(
          s(p.value, {
            inlineFilters: te.value,
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
      return w ? (Ee.value = [b, w], Jt()) : fe.value = Object.values(b.rows), Je.value = b.paginated !== !0, We.value = b.rowCount, b.detailedRows ? pe.value = b.detailedRows : pe.value = {}, b.total && !w && (K.value = b.total), !0;
    }, Jt = () => {
      if (!Ee.value)
        return;
      const [l, u] = Ee.value;
      fe.value = Object.values(
        Ms(l.rows, u.rows, c.value, V.value)
      ), l.total && (K.value = Bn(l.total, u.total, c.value));
    }, dr = () => {
      if (!(Ce != null && Ce.value))
        return !1;
      let l = Object.values(Ce.value);
      for (const [u, i] of Object.entries(te.value))
        i.value && (l = l.filter(
          (b) => re.value[u][i.operator].callback(
            b[u],
            i.value
          )
        ));
      return fe.value = l, We.value = l.length, !0;
    }, mt = async (l, u, i) => {
      l === void 0 && (l = ve.value), u === void 0 && (u = we.value), i === void 0 && (i = se.value), De.value = !0, dr() || await cr(ve.value, we.value, se.value), De.value = !1;
    }, fr = () => {
      ye.value && (Le.value = !0);
    }, pr = (l) => {
      if (!Z.value || !Z.value.includes(l))
        return;
      const u = qn(l);
      u >= 0 ? qe.value.splice(u, 1) : qe.value.push(l);
    }, vr = () => {
      ie.value = !ie.value, ie.value && (te.value = xe());
    }, Ae = async (l, u = !0, i = !0) => {
      ve.value = 0, se.value = l, i && await mt(void 0, void 0, l), u && localStorage.setItem(Ut(), JSON.stringify(l));
    };
    return hr(() => {
      X.value = Object.keys(c.value), K.value = Oe == null ? void 0 : Oe.value, Promise.all([vt(!1), Ht()]).then(() => lr(!0));
    }), Ue(c, () => {
      X.value = Object.keys(c.value), te.value = xe(), Ee && Jt();
    }), m && Ue(m, () => {
      vt(!0);
    }), W && Ue(
      W,
      () => {
        Je.value = !1, pt(0);
      },
      { deep: !0 }
    ), (l, u) => (O(), D("div", vo, [
      S(it) ? (O(), D("div", mo, [
        E(io, {
          "onUpdate:pageNumber": u[0] || (u[0] = (i) => pt(i)),
          "onUpdate:currentPageSize": u[1] || (u[1] = (i) => Ht(i)),
          currentPageSize: we.value,
          pageNumber: ve.value,
          pageSizeLabel: l.pageSizeLabel,
          rowCount: We.value
        }, null, 8, ["currentPageSize", "pageNumber", "pageSizeLabel", "rowCount"])
      ])) : H("", !0),
      J("div", {
        class: "table-container",
        onMouseover: u[7] || (u[7] = () => fr()),
        onMouseout: u[8] || (u[8] = () => er())
      }, [
        J("div", {
          class: q(["action-buttons", { active: Le.value }])
        }, [
          S(ye) ? (O(), D("button", {
            key: 0,
            class: "btn btn-small btn-success",
            onClick: u[2] || (u[2] = () => vr())
          }, [
            J("div", {
              class: q(["las", ie.value ? "la-trash" : "la-filter"])
            }, null, 2)
          ])) : H("", !0)
        ], 2),
        se.value ? (O(), I(Sr, {
          key: 0,
          ref_key: "table",
          ref: ue,
          onAddColoredMetric: u[3] || (u[3] = (i) => Un(i)),
          "onMove:column": u[4] || (u[4] = ({ from: i, to: b }) => tr(i, b)),
          onRemoveColoredMetric: u[5] || (u[5] = (i) => nr(i)),
          "onUpdate:orderBy": u[6] || (u[6] = (i) => Ae(i)),
          additionalHeaders: In.value,
          cellClasses: S(o),
          colorMetrics: S(v),
          coloredMetrics: A.value,
          columns: jn.value,
          comparisonColumnKeys: zn.value,
          detailsRows: pe.value,
          dragColumns: S(B),
          fixedColumnNumber: S(ne),
          inversedKpis: S(le),
          orderBy: se.value,
          primaryColumn: S(V),
          rows: zt.value,
          showRowNumber: S(lt),
          showTotal: !!K.value,
          showTopTotal: S(ut)
        }, br({
          colorizeLabel: C(({ enabled: i }) => [
            E(j, {
              mood: "white",
              size: "small"
            }, {
              default: C(() => [
                i ? (O(), D(Y, { key: 0 }, [
                  P(N(l.uncolorizeLabel), 1)
                ], 64)) : (O(), D(Y, { key: 1 }, [
                  P(N(l.colorizeLabel), 1)
                ], 64))
              ]),
              _: 2
            }, 1024)
          ]),
          columnRowNumber: C(() => [
            E(j, {
              contrast: "",
              size: "small"
            }, {
              default: C(() => [
                P("#")
              ]),
              _: 1
            })
          ]),
          rowNumber: C(({ value: i }) => [
            E(j, {
              contrast: "",
              size: "small"
            }, {
              default: C(() => [
                P(N(i), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          totalRowNumber: C(() => [
            E(j, {
              contrast: "",
              size: "small"
            }, {
              default: C(() => [
                P("#")
              ]),
              _: 1
            })
          ]),
          column: C(({ columnKey: i, isGhost: b }) => [
            J("div", {
              class: "d-flex align-items-center",
              onMouseover: () => Mt(i, !0),
              onMouseout: () => Mt(i, !1)
            }, [
              E(j, {
                contrast: "",
                size: "small"
              }, {
                default: C(() => [
                  P(N(S(c)[i].label), 1)
                ]),
                _: 2
              }, 1024),
              !b && $n(S(c)[i]) ? (O(), I(eo, {
                key: 0,
                description: S(c)[i].tooltipDescription,
                title: S(c)[i].tooltipTitle,
                visible: L.value[i]
              }, null, 8, ["description", "title", "visible"])) : H("", !0)
            ], 40, ho)
          ]),
          row: C(({ columnKey: i, index: b, row: w, spanIndex: $, subcolumnKey: z, subindex: Be, value: G }) => [
            St(l.$slots, "row", gr(_r({
              columnKey: i,
              index: b,
              row: w,
              spanIndex: $,
              subcolumnKey: z,
              subindex: Be,
              value: G
            })), () => [
              Be === void 0 && i === "trend" ? (O(), I(po, {
                key: 0,
                class: q(Xe(i, G, w.rowInfo.detailable)),
                formatter: (ht) => Te(ht, "int"),
                title: l.trendChartTitle,
                url: Zn(w, z)
              }, null, 8, ["class", "formatter", "title", "url"])) : w.rowInfo.detailable && i === S(g) ? (O(), D(Y, { key: 1 }, [
                $t(w, i) && w.rowInfo.detailable ? (O(), I(j, {
                  key: 0,
                  class: q(Xe(i, G, w.rowInfo.detailable)),
                  mood: Re(G, i, z),
                  contrast: "",
                  size: "small"
                }, {
                  default: C(() => [
                    E(Gt, {
                      to: jt(S(R)[i], w).toString(),
                      "is-external": !!w.url
                    }, {
                      default: C(() => [
                        P(N(Se(G, i, z, !0)), 1)
                      ]),
                      _: 2
                    }, 1032, ["to", "is-external"])
                  ]),
                  _: 2
                }, 1032, ["class", "mood"])) : (O(), I(j, {
                  key: 1,
                  mood: Re(G, i, z),
                  contrast: "",
                  size: "small"
                }, {
                  default: C(() => [
                    P(N(Se(G, i, z)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"]))
              ], 64)) : $t(w, i) && w.rowInfo.detailable ? (O(), I(j, {
                key: 2,
                class: q(Xe(i, G, w.rowInfo.detailable)),
                mood: Re(G, i, z),
                contrast: "",
                size: "small"
              }, {
                default: C(() => [
                  E(Gt, {
                    to: jt(S(R)[i], w).toString(),
                    "is-external": !!w.url
                  }, {
                    default: C(() => [
                      P(N(Se(G, i, z, !0)), 1)
                    ]),
                    _: 2
                  }, 1032, ["to", "is-external"])
                ]),
                _: 2
              }, 1032, ["class", "mood"])) : Be === void 0 && G >= 0.01 && i in S(_) ? (O(), I(an, {
                key: 3,
                format: S(_)[i].format,
                label: Se(G, i, z, !0),
                title: S(_)[i].title,
                url: Vn(i, w)
              }, null, 8, ["format", "label", "title", "url"])) : (O(), I(j, {
                key: 4,
                class: q(Xe(i, G, w.rowInfo.detailable)),
                mood: Re(G, i, z),
                contrast: "",
                size: "small"
              }, {
                default: C(() => [
                  P(N(Se(G, i, z, !0)), 1)
                ]),
                _: 2
              }, 1032, ["class", "mood"])),
              Ge(i, G) ? (O(), D("i", {
                key: 5,
                class: q(["flex-grow-1 expand-column fa", qe.value.includes(i) ? "fa-compress-alt" : "fa-expand-alt"]),
                onClick: () => pr(i)
              }, null, 10, bo)) : H("", !0),
              Bt.value && w.rowInfo.detailable && i === S(g) ? (O(), D(Y, { key: 6 }, [
                Ge(i, G) ? H("", !0) : (O(), I(wr, { key: 0 })),
                E(so, {
                  onHideDetails: () => rr(w),
                  onShowDetails: (ht) => ar(ht, w),
                  labels: Bt.value,
                  open: pe.value[w[S(V)]] !== void 0,
                  title: l.detailsSelectorTitle
                }, null, 8, ["onHideDetails", "onShowDetails", "labels", "open", "title"])
              ], 64)) : H("", !0)
            ], !0)
          ]),
          additionalHeader: C(({ additionalHeader: i, columnKey: b }) => [
            i === "inline_filters" && Kn(b) ? (O(), D("div", {
              key: 0,
              class: q(["d-flex inline-filter", Gn(b)])
            }, [
              E(pn, {
                class: "inline-filter-dropdown",
                "onUpdate:modelValue": (w) => qt(b, { operator: w.toString() }),
                id: `additional_header_${b}`,
                items: Xn(b),
                modelValue: Jn(b)
              }, {
                item: C(({ item: w }) => [
                  E(j, {
                    contrast: "",
                    size: "small"
                  }, {
                    default: C(() => [
                      P(N(w), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["onUpdate:modelValue", "id", "items", "modelValue"]),
              E(vn, {
                class: "flex-grow-1 inline-filter-input",
                onBlur: (w) => sr(w, b),
                onKeyup: (w) => or(w),
                modelValue: Wn(b),
                type: Yn(b)
              }, null, 8, ["onBlur", "onKeyup", "modelValue", "type"])
            ], 2)) : H("", !0)
          ]),
          total: C(({ columnKey: i, subcolumnKey: b, values: w }) => [
            St(l.$slots, S(Oe), {
              columnKey: i,
              subcolumnKey: b,
              values: w
            }, () => [
              l.totalTitle && i === S(ct) ? (O(), I(j, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: C(() => [
                  P(N(l.totalTitle(We.value ?? fe.value.length)), 1)
                ]),
                _: 1
              })) : K.value ? (O(), D(Y, { key: 1 }, [
                K.value && K.value[i] >= 0.01 && i in S(_) ? (O(), I(an, {
                  key: 0,
                  format: S(_)[i].format,
                  label: Vt(Te(K.value[i], S(c)[i].type, S(y) && b ? S(y)[b].format : void 0), i),
                  title: S(_)[i].title,
                  url: Hn(S(_)[i])
                }, null, 8, ["format", "label", "title", "url"])) : b ? (O(), I(j, {
                  key: 1,
                  mood: Re(K.value[i][b], i, b),
                  contrast: "",
                  size: "small"
                }, {
                  default: C(() => [
                    P(N(Se(K.value[i][b], i, b)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"])) : (O(), I(j, {
                  key: 2,
                  mood: Re(K.value[i], i, b),
                  contrast: "",
                  size: "small"
                }, {
                  default: C(() => [
                    P(N(Se(K.value[i], i)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"]))
              ], 64)) : H("", !0)
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
                  P(N(S(y)[i].label), 1)
                ]),
                _: 2
              }, 1024)) : H("", !0)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "dragColumns", "fixedColumnNumber", "inversedKpis", "orderBy", "primaryColumn", "rows", "showRowNumber", "showTotal", "showTopTotal"])) : H("", !0)
      ], 32),
      J("div", {
        class: q(["loading-overlay", { visible: De.value }])
      }, [
        E(Tt)
      ], 2)
    ]));
  }
});
const Mo = /* @__PURE__ */ _e(go, [["__scopeId", "data-v-df05d9a3"]]), _o = { class: "scrollable flex-max no-spacing" }, yo = ["onClick"], wo = { class: "scrollable flex-max no-spacing" }, So = ["onClick"], Co = { class: "scrollable" }, Oo = { class: "items flex-max no-spacing" }, xo = /* @__PURE__ */ be({
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
    const n = e, { columns: r, defaultValue: s, groupNames: o, modelValue: a, showModalLabel: d } = ge(n), h = k(Object.keys(o.value)[0]), v = k([...a.value]), c = k([]), _ = k([]), R = k(""), y = k(void 0), p = k(void 0), m = k(void 0), g = k(void 0), T = k(void 0), B = U(() => Object.fromEntries(
      Object.entries(r.value).filter(
        ([x, A]) => A.fixed !== !0 && (R.value.trim() === "" || A.label.toLowerCase().includes(R.value.trim().toLowerCase()))
      )
    )), ne = U(() => Object.keys(o.value).reduce((x, A) => (x[A] = Object.fromEntries(
      Object.entries(B.value).filter(([L, X]) => X.group === A)
    ), x), {})), re = U(
      () => h.value === void 0 ? void 0 : ne.value[h.value]
    ), le = U(() => Object.fromEntries(
      Object.entries(o.value).filter(
        ([x, A]) => Object.values(B.value).some((L) => L.group === x)
      )
    )), V = U(() => {
      if (!(m.value === void 0 || g.value === void 0 || T.value === void 0))
        return m.value + T.value - g.value;
    }), de = U(() => {
      if (V.value !== void 0)
        return `${V.value}px`;
    }), W = U(() => {
      if (p.value === void 0 || V.value === void 0)
        return;
      const x = v.value.indexOf(p.value), A = x - 1 - v.value.slice(0, x).reverse().findIndex((ie) => r.value[ie].fixed === !0);
      let L = v.value.slice(x + 1).findIndex((ie) => r.value[ie].fixed === !0);
      L >= 0 ? L += x + 1 : L = v.value.length;
      const X = Ce(v.value[A]), pe = X.offsetHeight, Le = Math.min(
        Math.round((V.value - X.offsetTop) / pe - 1),
        L - A - 1
      );
      return A + Le + 1;
    }), Ce = (x) => _.value[v.value.indexOf(x)], Z = (x) => c.value[v.value.indexOf(x)], ye = (x = !1, A) => {
      A && A.target !== A.currentTarget || (x && (v.value = [...a.value]), y.value = !1, h.value = Object.keys(o.value)[0]);
    }, lt = (x) => {
      const A = v.value.indexOf(x);
      A >= 0 && v.value.splice(A, 1);
    }, it = () => {
      v.value = [...s.value];
    }, ut = (x) => {
      const A = [...x];
      t("update:modelValue", A), ye(!1);
    }, Oe = (x) => {
      h.value = x.toString();
    }, ct = () => {
      y.value = !0;
    }, Fe = (x) => {
      const A = v.value.indexOf(x);
      A >= 0 ? v.value.splice(A, 1) : v.value.push(x);
    }, xe = (x) => {
      T.value = x.clientY;
    }, fe = () => {
      const x = W.value;
      if (p.value !== void 0 && x !== void 0) {
        const A = v.value.indexOf(p.value);
        v.value.splice(A, 1), v.value.splice(x, 0, p.value);
      }
      p.value = void 0, m.value = void 0, g.value = void 0, T.value = void 0, window.removeEventListener("mousemove", xe), window.removeEventListener("mouseup", fe);
    }, Ee = (x, A) => {
      p.value = A, m.value = Z(A).$el.offsetTop, g.value = x.clientY, T.value = x.clientY, window.addEventListener("mousemove", xe), window.addEventListener("mouseup", fe);
    };
    return Ue(R, (x) => {
      x ? (!h.value || !(h.value in le.value)) && (h.value = Object.keys(le.value)[0]) : h.value || (h.value = Object.keys(le.value)[0]);
    }), (x, A) => (O(), D(Y, null, [
      E(Wt, {
        onClick: A[0] || (A[0] = () => ct()),
        label: S(d),
        mood: "neutral",
        tabindex: "-1"
      }, null, 8, ["label"]),
      (O(), I(cn, { to: "#app > .app-container" }, [
        E(Q, {
          class: q(["kpi-selector-container no-spacing", { visible: y.value, hidden: y.value === !1 }]),
          onClick: A[5] || (A[5] = $e((L) => ye(!0, L), ["stop"])),
          column: "",
          horizontal: "center",
          vertical: "center"
        }, {
          default: C(() => [
            E(fn, { class: "kpi-selector" }, {
              default: C(() => [
                E(Q, {
                  class: "title",
                  vertical: "center"
                }, {
                  default: C(() => [
                    E(je, {
                      class: "flex-max",
                      size: "large-2"
                    }, {
                      default: C(() => [
                        P(N(x.title), 1)
                      ]),
                      _: 1
                    }),
                    E(Q, {
                      class: "flex-max no-spacing search-container",
                      vertical: "center"
                    }, {
                      default: C(() => [
                        E(vn, {
                          class: "flex-max search",
                          modelValue: R.value,
                          "onUpdate:modelValue": A[1] || (A[1] = (L) => R.value = L),
                          placeholder: x.filterLabel
                        }, null, 8, ["modelValue", "placeholder"]),
                        E(ze, {
                          class: "no-spacing",
                          value: "search-alt-2"
                        })
                      ]),
                      _: 1
                    }),
                    E(Q, {
                      class: "close-container flex-max no-spacing",
                      horizontal: "right"
                    }, {
                      default: C(() => [
                        E(ze, {
                          class: "close",
                          onClick: A[2] || (A[2] = () => ye(!0)),
                          size: "large-3",
                          value: "x"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                E(Q, { class: "body flex-max no-spacing" }, {
                  default: C(() => [
                    h.value !== void 0 && re.value !== void 0 ? (O(), D(Y, { key: 0 }, [
                      E(Q, {
                        class: "groups flex-max",
                        column: ""
                      }, {
                        default: C(() => [
                          E(je, { size: "large-2" }, {
                            default: C(() => [
                              P(N(x.groupsTitle), 1)
                            ]),
                            _: 1
                          }),
                          J("div", _o, [
                            (O(!0), D(Y, null, ke(Object.entries(le.value), ([L, X]) => (O(), D("div", {
                              class: q(["item no-spacing", { selected: h.value === L }]),
                              onClick: () => Oe(L)
                            }, [
                              E(j, { size: "small" }, {
                                default: C(() => [
                                  P(N(X), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, yo))), 256))
                          ])
                        ]),
                        _: 1
                      }),
                      E(Q, {
                        class: "group-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: C(() => [
                          E(je, { size: "large-2" }, {
                            default: C(() => [
                              P(N(S(o)[h.value]), 1)
                            ]),
                            _: 1
                          }),
                          J("div", wo, [
                            (O(!0), D(Y, null, ke(Object.entries(re.value), ([L, X]) => (O(), D("div", {
                              class: q(["item no-spacing", { selected: v.value.includes(L) }]),
                              onClick: () => Fe(L),
                              key: L
                            }, [
                              E(j, { size: "small" }, {
                                default: C(() => [
                                  P(N(X.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, So))), 128))
                          ])
                        ]),
                        _: 1
                      }),
                      E(Q, {
                        class: "enabled-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: C(() => [
                          E(Q, {
                            class: "header",
                            vertical: "center"
                          }, {
                            default: C(() => [
                              E(je, {
                                class: "flex-max",
                                size: "large-2"
                              }, {
                                default: C(() => [
                                  P(N(x.orderTitle), 1)
                                ]),
                                _: 1
                              }),
                              E(j, {
                                class: "reset",
                                onClick: A[3] || (A[3] = () => it()),
                                mood: "important-alt",
                                size: "small"
                              }, {
                                default: C(() => [
                                  P(N(x.resetLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          J("div", Co, [
                            J("div", Oo, [
                              (O(!0), D(Y, null, ke(v.value, (L) => (O(), D("div", {
                                class: "item-container no-spacing",
                                ref_for: !0,
                                ref_key: "enabledColumnContainers",
                                ref: _
                              }, [
                                J("div", {
                                  class: q(["separator-top no-spacing", { "place-after": W.value !== void 0 && p.value !== void 0 && L === v.value[W.value] && W.value < v.value.indexOf(p.value) }])
                                }, null, 2),
                                E(Q, {
                                  class: q(["item no-spacing", { dragged: L === p.value }]),
                                  ref_for: !0,
                                  ref_key: "enabledColumnElements",
                                  ref: c,
                                  style: dn(L === p.value ? { top: de.value } : void 0),
                                  vertical: "center"
                                }, {
                                  default: C(() => [
                                    S(r)[L].fixed ? (O(), I(j, {
                                      key: 0,
                                      class: q(["flex-max", { fixed: S(r)[L].fixed }]),
                                      size: "small"
                                    }, {
                                      default: C(() => [
                                        P(N(S(r)[L].label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])) : (O(), D(Y, { key: 1 }, [
                                      E(ze, {
                                        class: "move",
                                        onMousedown: (X) => Ee(X, L),
                                        value: "dots-vertical-rounded"
                                      }, null, 8, ["onMousedown"]),
                                      E(j, {
                                        class: "flex-max no-spacing",
                                        size: "small"
                                      }, {
                                        default: C(() => [
                                          P(N(S(r)[L].label), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      E(ze, {
                                        class: "no-spacing remove",
                                        onClick: () => lt(L),
                                        value: "trash"
                                      }, null, 8, ["onClick"])
                                    ], 64))
                                  ]),
                                  _: 2
                                }, 1032, ["class", "style"]),
                                J("div", {
                                  class: q(["separator-bottom no-spacing", { "place-after": W.value !== void 0 && p.value !== void 0 && L === v.value[W.value] && W.value >= v.value.indexOf(p.value) }])
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
                        E(j, { size: "small" }, {
                          default: C(() => [
                            P(N(x.noColumnsFoundLabel), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }))
                  ]),
                  _: 1
                }),
                E(Q, {
                  class: "controls no-spacing",
                  horizontal: "right"
                }, {
                  default: C(() => [
                    E(Wt, {
                      onClick: A[4] || (A[4] = () => ut(v.value)),
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
const Vo = /* @__PURE__ */ _e(xo, [["__scopeId", "data-v-f6336c9a"]]);
export {
  Mo as CommonTable,
  Vo as KpiSelector
};
