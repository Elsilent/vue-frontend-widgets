import { defineComponent as le, toRefs as ue, ref as x, openBlock as C, createElementBlock as F, normalizeClass as q, createElementVNode as j, withModifiers as Ue, toDisplayString as A, unref as v, createVNode as I, withCtx as O, createCommentVNode as D, Fragment as G, renderList as mt, createBlock as P, pushScopeId as Wt, popScopeId as Gt, computed as U, watch as it, nextTick as ze, Teleport as tn, normalizeStyle as rn, renderSlot as lt, onUnmounted as nn, createTextVNode as k, onMounted as sn, createSlots as on, normalizeProps as an, guardReactiveProps as ln } from "vue";
import oe from "numeral";
import { L as ht, a as un } from "./LineBarChart-02e03964.js";
import { P as vt } from "./Popover-38d3223e.js";
import { _ as ce } from "./_plugin-vue_export-helper-dad06003.js";
import { C as cn, A as dn, I as fn } from "./Icon-8f2ed8ba.js";
import { I as B } from "./Info-54758b60.js";
import { D as Xt, I as pn } from "./Input-7e9b7edc.js";
import { Separator as mn } from "./marker.js";
import { T as hn } from "./Table-794e3ada.js";
import { H as vn } from "./Header-8b49a8fe.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "./datetime-31a2b505.js";
function Qt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: bn } = Object.prototype, { getPrototypeOf: bt } = Object, He = ((e) => (t) => {
  const r = bn.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), K = (e) => (e = e.toLowerCase(), (t) => He(t) === e), Me = (e) => (t) => typeof t === e, { isArray: ve } = Array, Se = Me("undefined");
function yn(e) {
  return e !== null && !Se(e) && e.constructor !== null && !Se(e.constructor) && J(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Zt = K("ArrayBuffer");
function gn(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Zt(e.buffer), t;
}
const wn = Me("string"), J = Me("function"), Yt = Me("number"), Ve = (e) => e !== null && typeof e == "object", _n = (e) => e === !0 || e === !1, De = (e) => {
  if (He(e) !== "object")
    return !1;
  const t = bt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Sn = K("Date"), Cn = K("File"), En = K("Blob"), On = K("FileList"), Rn = (e) => Ve(e) && J(e.pipe), Tn = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || J(e.append) && ((t = He(e)) === "formdata" || // detect form-data instance
  t === "object" && J(e.toString) && e.toString() === "[object FormData]"));
}, xn = K("URLSearchParams"), An = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ce(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), ve(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = a.length;
    let d;
    for (n = 0; n < o; n++)
      d = a[n], t.call(null, e[d], d, e);
  }
}
function Kt(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const er = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), tr = (e) => !Se(e) && e !== er;
function ut() {
  const { caseless: e } = tr(this) && this || {}, t = {}, r = (n, s) => {
    const a = e && Kt(t, s) || s;
    De(t[a]) && De(n) ? t[a] = ut(t[a], n) : De(n) ? t[a] = ut({}, n) : ve(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && Ce(arguments[n], r);
  return t;
}
const Nn = (e, t, r, { allOwnKeys: n } = {}) => (Ce(t, (s, a) => {
  r && J(s) ? e[a] = Qt(s, r) : e[a] = s;
}, { allOwnKeys: n }), e), Pn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Fn = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, kn = (e, t, r, n) => {
  let s, a, o;
  const d = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      o = s[a], (!n || n(o, e, t)) && !d[o] && (t[o] = e[o], d[o] = !0);
    e = r !== !1 && bt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Bn = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Dn = (e) => {
  if (!e)
    return null;
  if (ve(e))
    return e;
  let t = e.length;
  if (!Yt(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Ln = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && bt(Uint8Array)), In = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const a = s.value;
    t.call(e, a[0], a[1]);
  }
}, Un = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, zn = K("HTMLFormElement"), jn = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), Dt = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), $n = K("RegExp"), rr = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Ce(r, (s, a) => {
    let o;
    (o = t(s, a, e)) !== !1 && (n[a] = o || s);
  }), Object.defineProperties(e, n);
}, Hn = (e) => {
  rr(e, (t, r) => {
    if (J(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (J(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Mn = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((a) => {
      r[a] = !0;
    });
  };
  return ve(e) ? n(e) : n(String(e).split(t)), r;
}, Vn = () => {
}, qn = (e, t) => (e = +e, Number.isFinite(e) ? e : t), rt = "abcdefghijklmnopqrstuvwxyz", Lt = "0123456789", nr = {
  DIGIT: Lt,
  ALPHA: rt,
  ALPHA_DIGIT: rt + rt.toUpperCase() + Lt
}, Jn = (e = 16, t = nr.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Wn(e) {
  return !!(e && J(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Gn = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (Ve(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const a = ve(n) ? [] : {};
        return Ce(n, (o, d) => {
          const g = r(o, s + 1);
          !Se(g) && (a[d] = g);
        }), t[s] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, Xn = K("AsyncFunction"), Qn = (e) => e && (Ve(e) || J(e)) && J(e.then) && J(e.catch), f = {
  isArray: ve,
  isArrayBuffer: Zt,
  isBuffer: yn,
  isFormData: Tn,
  isArrayBufferView: gn,
  isString: wn,
  isNumber: Yt,
  isBoolean: _n,
  isObject: Ve,
  isPlainObject: De,
  isUndefined: Se,
  isDate: Sn,
  isFile: Cn,
  isBlob: En,
  isRegExp: $n,
  isFunction: J,
  isStream: Rn,
  isURLSearchParams: xn,
  isTypedArray: Ln,
  isFileList: On,
  forEach: Ce,
  merge: ut,
  extend: Nn,
  trim: An,
  stripBOM: Pn,
  inherits: Fn,
  toFlatObject: kn,
  kindOf: He,
  kindOfTest: K,
  endsWith: Bn,
  toArray: Dn,
  forEachEntry: In,
  matchAll: Un,
  isHTMLForm: zn,
  hasOwnProperty: Dt,
  hasOwnProp: Dt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: rr,
  freezeMethods: Hn,
  toObjectSet: Mn,
  toCamelCase: jn,
  noop: Vn,
  toFiniteNumber: qn,
  findKey: Kt,
  global: er,
  isContextDefined: tr,
  ALPHABET: nr,
  generateString: Jn,
  isSpecCompliantForm: Wn,
  toJSONObject: Gn,
  isAsyncFn: Xn,
  isThenable: Qn
};
function T(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
f.inherits(T, Error, {
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
const sr = T.prototype, or = {};
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
  or[e] = { value: e };
});
Object.defineProperties(T, or);
Object.defineProperty(sr, "isAxiosError", { value: !0 });
T.from = (e, t, r, n, s, a) => {
  const o = Object.create(sr);
  return f.toFlatObject(e, o, function(g) {
    return g !== Error.prototype;
  }, (d) => d !== "isAxiosError"), T.call(o, e.message, t, r, n, s), o.cause = e, o.name = e.name, a && Object.assign(o, a), o;
};
const Zn = null;
function ct(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function ar(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function It(e, t, r) {
  return e ? e.concat(t).map(function(s, a) {
    return s = ar(s), !r && a ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function Yn(e) {
  return f.isArray(e) && !e.some(ct);
}
const Kn = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function qe(e, t, r) {
  if (!f.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = f.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, b) {
    return !f.isUndefined(b[h]);
  });
  const n = r.metaTokens, s = r.visitor || c, a = r.dots, o = r.indexes, g = (r.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(t);
  if (!f.isFunction(s))
    throw new TypeError("visitor must be a function");
  function w(p) {
    if (p === null)
      return "";
    if (f.isDate(p))
      return p.toISOString();
    if (!g && f.isBlob(p))
      throw new T("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(p) || f.isTypedArray(p) ? g && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function c(p, h, b) {
    let R = p;
    if (p && !b && typeof p == "object") {
      if (f.endsWith(h, "{}"))
        h = n ? h : h.slice(0, -2), p = JSON.stringify(p);
      else if (f.isArray(p) && Yn(p) || (f.isFileList(p) || f.endsWith(h, "[]")) && (R = f.toArray(p)))
        return h = ar(h), R.forEach(function(M, de) {
          !(f.isUndefined(M) || M === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? It([h], de, a) : o === null ? h : h + "[]",
            w(M)
          );
        }), !1;
    }
    return ct(p) ? !0 : (t.append(It(b, h, a), w(p)), !1);
  }
  const y = [], E = Object.assign(Kn, {
    defaultVisitor: c,
    convertValue: w,
    isVisitable: ct
  });
  function _(p, h) {
    if (!f.isUndefined(p)) {
      if (y.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      y.push(p), f.forEach(p, function(R, N) {
        (!(f.isUndefined(R) || R === null) && s.call(
          t,
          R,
          f.isString(N) ? N.trim() : N,
          h,
          E
        )) === !0 && _(R, h ? h.concat(N) : [N]);
      }), y.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
}
function Ut(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function yt(e, t) {
  this._pairs = [], e && qe(e, this, t);
}
const ir = yt.prototype;
ir.append = function(t, r) {
  this._pairs.push([t, r]);
};
ir.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Ut);
  } : Ut;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function es(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function lr(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || es, s = r && r.serialize;
  let a;
  if (s ? a = s(t, r) : a = f.isURLSearchParams(t) ? t.toString() : new yt(t, r).toString(n), a) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class ts {
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
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
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
    f.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const zt = ts, ur = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, rs = typeof URLSearchParams < "u" ? URLSearchParams : yt, ns = typeof FormData < "u" ? FormData : null, ss = typeof Blob < "u" ? Blob : null, os = {
  isBrowser: !0,
  classes: {
    URLSearchParams: rs,
    FormData: ns,
    Blob: ss
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, cr = typeof window < "u" && typeof document < "u", as = ((e) => cr && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), is = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: cr,
  hasStandardBrowserEnv: as,
  hasStandardBrowserWebWorkerEnv: is
}, Symbol.toStringTag, { value: "Module" })), Y = {
  ...ls,
  ...os
};
function us(e, t) {
  return qe(e, new Y.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, a) {
      return Y.isNode && f.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function cs(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ds(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let a;
  for (n = 0; n < s; n++)
    a = r[n], t[a] = e[a];
  return t;
}
function dr(e) {
  function t(r, n, s, a) {
    let o = r[a++];
    const d = Number.isFinite(+o), g = a >= r.length;
    return o = !o && f.isArray(s) ? s.length : o, g ? (f.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !d) : ((!s[o] || !f.isObject(s[o])) && (s[o] = []), t(r, n, s[o], a) && f.isArray(s[o]) && (s[o] = ds(s[o])), !d);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const r = {};
    return f.forEachEntry(e, (n, s) => {
      t(cs(n), s, r, 0);
    }), r;
  }
  return null;
}
function fs(e, t, r) {
  if (f.isString(e))
    try {
      return (t || JSON.parse)(e), f.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const gt = {
  transitional: ur,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, a = f.isObject(t);
    if (a && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
      return s && s ? JSON.stringify(dr(t)) : t;
    if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t))
      return t;
    if (f.isArrayBufferView(t))
      return t.buffer;
    if (f.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let d;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return us(t, this.formSerializer).toString();
      if ((d = f.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return qe(
          d ? { "files[]": t } : t,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return a || s ? (r.setContentType("application/json", !1), fs(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || gt.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (t && f.isString(t) && (n && !this.responseType || s)) {
      const o = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (d) {
        if (o)
          throw d.name === "SyntaxError" ? T.from(d, T.ERR_BAD_RESPONSE, this, null, this.response) : d;
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
    FormData: Y.classes.FormData,
    Blob: Y.classes.Blob
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
  gt.headers[e] = {};
});
const wt = gt, ps = f.toObjectSet([
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
]), ms = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), r = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!r || t[r] && ps[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, jt = Symbol("internals");
function _e(e) {
  return e && String(e).trim().toLowerCase();
}
function Le(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(Le) : String(e);
}
function hs(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const vs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function nt(e, t, r, n, s) {
  if (f.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!f.isString(t)) {
    if (f.isString(n))
      return t.indexOf(n) !== -1;
    if (f.isRegExp(n))
      return n.test(t);
  }
}
function bs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function ys(e, t) {
  const r = f.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, a, o) {
        return this[n].call(this, t, s, a, o);
      },
      configurable: !0
    });
  });
}
class Je {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function a(d, g, w) {
      const c = _e(g);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const y = f.findKey(s, c);
      (!y || s[y] === void 0 || w === !0 || w === void 0 && s[y] !== !1) && (s[y || g] = Le(d));
    }
    const o = (d, g) => f.forEach(d, (w, c) => a(w, c, g));
    return f.isPlainObject(t) || t instanceof this.constructor ? o(t, r) : f.isString(t) && (t = t.trim()) && !vs(t) ? o(ms(t), r) : t != null && a(r, t, n), this;
  }
  get(t, r) {
    if (t = _e(t), t) {
      const n = f.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return hs(s);
        if (f.isFunction(r))
          return r.call(this, s, n);
        if (f.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = _e(t), t) {
      const n = f.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || nt(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function a(o) {
      if (o = _e(o), o) {
        const d = f.findKey(n, o);
        d && (!r || nt(n, n[d], d, r)) && (delete n[d], s = !0);
      }
    }
    return f.isArray(t) ? t.forEach(a) : a(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || nt(this, this[a], a, t, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return f.forEach(this, (s, a) => {
      const o = f.findKey(n, a);
      if (o) {
        r[o] = Le(s), delete r[a];
        return;
      }
      const d = t ? bs(a) : String(a).trim();
      d !== a && delete r[a], r[d] = Le(s), n[d] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return f.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && f.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[jt] = this[jt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(o) {
      const d = _e(o);
      n[d] || (ys(s, o), n[d] = !0);
    }
    return f.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
Je.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors(Je.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
f.freezeMethods(Je);
const re = Je;
function st(e, t) {
  const r = this || wt, n = t || r, s = re.from(n.headers);
  let a = n.data;
  return f.forEach(e, function(d) {
    a = d.call(r, a, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), a;
}
function fr(e) {
  return !!(e && e.__CANCEL__);
}
function Ee(e, t, r) {
  T.call(this, e ?? "canceled", T.ERR_CANCELED, t, r), this.name = "CanceledError";
}
f.inherits(Ee, T, {
  __CANCEL__: !0
});
function gs(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new T(
    "Request failed with status code " + r.status,
    [T.ERR_BAD_REQUEST, T.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const ws = Y.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(r, n, s, a, o, d) {
        const g = [];
        g.push(r + "=" + encodeURIComponent(n)), f.isNumber(s) && g.push("expires=" + new Date(s).toGMTString()), f.isString(a) && g.push("path=" + a), f.isString(o) && g.push("domain=" + o), d === !0 && g.push("secure"), document.cookie = g.join("; ");
      },
      read: function(r) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null;
      },
      remove: function(r) {
        this.write(r, "", Date.now() - 864e5);
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
function _s(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ss(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function pr(e, t) {
  return e && !_s(t) ? Ss(e, t) : t;
}
const Cs = Y.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function s(a) {
      let o = a;
      return t && (r.setAttribute("href", o), o = r.href), r.setAttribute("href", o), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = s(window.location.href), function(o) {
      const d = f.isString(o) ? s(o) : o;
      return d.protocol === n.protocol && d.host === n.host;
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
function Es(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Os(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, a = 0, o;
  return t = t !== void 0 ? t : 1e3, function(g) {
    const w = Date.now(), c = n[a];
    o || (o = w), r[s] = g, n[s] = w;
    let y = a, E = 0;
    for (; y !== s; )
      E += r[y++], y = y % e;
    if (s = (s + 1) % e, s === a && (a = (a + 1) % e), w - o < t)
      return;
    const _ = c && w - c;
    return _ ? Math.round(E * 1e3 / _) : void 0;
  };
}
function $t(e, t) {
  let r = 0;
  const n = Os(50, 250);
  return (s) => {
    const a = s.loaded, o = s.lengthComputable ? s.total : void 0, d = a - r, g = n(d), w = a <= o;
    r = a;
    const c = {
      loaded: a,
      total: o,
      progress: o ? a / o : void 0,
      bytes: d,
      rate: g || void 0,
      estimated: g && o && w ? (o - a) / g : void 0,
      event: s
    };
    c[t ? "download" : "upload"] = !0, e(c);
  };
}
const Rs = typeof XMLHttpRequest < "u", Ts = Rs && function(e) {
  return new Promise(function(r, n) {
    let s = e.data;
    const a = re.from(e.headers).normalize(), o = e.responseType;
    let d;
    function g() {
      e.cancelToken && e.cancelToken.unsubscribe(d), e.signal && e.signal.removeEventListener("abort", d);
    }
    let w;
    if (f.isFormData(s)) {
      if (Y.hasStandardBrowserEnv || Y.hasStandardBrowserWebWorkerEnv)
        a.setContentType(!1);
      else if ((w = a.getContentType()) !== !1) {
        const [p, ...h] = w ? w.split(";").map((b) => b.trim()).filter(Boolean) : [];
        a.setContentType([p || "multipart/form-data", ...h].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", h = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(p + ":" + h));
    }
    const y = pr(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), lr(y, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function E() {
      if (!c)
        return;
      const p = re.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), b = {
        data: !o || o === "text" || o === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: p,
        config: e,
        request: c
      };
      gs(function(N) {
        r(N), g();
      }, function(N) {
        n(N), g();
      }, b), c = null;
    }
    if ("onloadend" in c ? c.onloadend = E : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(E);
    }, c.onabort = function() {
      c && (n(new T("Request aborted", T.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      n(new T("Network Error", T.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let h = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const b = e.transitional || ur;
      e.timeoutErrorMessage && (h = e.timeoutErrorMessage), n(new T(
        h,
        b.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,
        e,
        c
      )), c = null;
    }, Y.hasStandardBrowserEnv) {
      const p = Cs(y) && e.xsrfCookieName && ws.read(e.xsrfCookieName);
      p && a.set(e.xsrfHeaderName, p);
    }
    s === void 0 && a.setContentType(null), "setRequestHeader" in c && f.forEach(a.toJSON(), function(h, b) {
      c.setRequestHeader(b, h);
    }), f.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), o && o !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", $t(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", $t(e.onUploadProgress)), (e.cancelToken || e.signal) && (d = (p) => {
      c && (n(!p || p.type ? new Ee(null, e, c) : p), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(d), e.signal && (e.signal.aborted ? d() : e.signal.addEventListener("abort", d)));
    const _ = Es(y);
    if (_ && Y.protocols.indexOf(_) === -1) {
      n(new T("Unsupported protocol " + _ + ":", T.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, dt = {
  http: Zn,
  xhr: Ts
};
f.forEach(dt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ht = (e) => `- ${e}`, xs = (e) => f.isFunction(e) || e === null || e === !1, mr = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let a = 0; a < t; a++) {
      r = e[a];
      let o;
      if (n = r, !xs(r) && (n = dt[(o = String(r)).toLowerCase()], n === void 0))
        throw new T(`Unknown adapter '${o}'`);
      if (n)
        break;
      s[o || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(s).map(
        ([d, g]) => `adapter ${d} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? a.length > 1 ? `since :
` + a.map(Ht).join(`
`) : " " + Ht(a[0]) : "as no adapter specified";
      throw new T(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: dt
};
function ot(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ee(null, e);
}
function Mt(e) {
  return ot(e), e.headers = re.from(e.headers), e.data = st.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), mr.getAdapter(e.adapter || wt.adapter)(e).then(function(n) {
    return ot(e), n.data = st.call(
      e,
      e.transformResponse,
      n
    ), n.headers = re.from(n.headers), n;
  }, function(n) {
    return fr(n) || (ot(e), n && n.response && (n.response.data = st.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = re.from(n.response.headers))), Promise.reject(n);
  });
}
const Vt = (e) => e instanceof re ? e.toJSON() : e;
function he(e, t) {
  t = t || {};
  const r = {};
  function n(w, c, y) {
    return f.isPlainObject(w) && f.isPlainObject(c) ? f.merge.call({ caseless: y }, w, c) : f.isPlainObject(c) ? f.merge({}, c) : f.isArray(c) ? c.slice() : c;
  }
  function s(w, c, y) {
    if (f.isUndefined(c)) {
      if (!f.isUndefined(w))
        return n(void 0, w, y);
    } else
      return n(w, c, y);
  }
  function a(w, c) {
    if (!f.isUndefined(c))
      return n(void 0, c);
  }
  function o(w, c) {
    if (f.isUndefined(c)) {
      if (!f.isUndefined(w))
        return n(void 0, w);
    } else
      return n(void 0, c);
  }
  function d(w, c, y) {
    if (y in t)
      return n(w, c);
    if (y in e)
      return n(void 0, w);
  }
  const g = {
    url: a,
    method: a,
    data: a,
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
    validateStatus: d,
    headers: (w, c) => s(Vt(w), Vt(c), !0)
  };
  return f.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const y = g[c] || s, E = y(e[c], t[c], c);
    f.isUndefined(E) && y !== d || (r[c] = E);
  }), r;
}
const hr = "1.6.1", _t = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  _t[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const qt = {};
_t.transitional = function(t, r, n) {
  function s(a, o) {
    return "[Axios v" + hr + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "");
  }
  return (a, o, d) => {
    if (t === !1)
      throw new T(
        s(o, " has been removed" + (r ? " in " + r : "")),
        T.ERR_DEPRECATED
      );
    return r && !qt[o] && (qt[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, o, d) : !0;
  };
};
function As(e, t, r) {
  if (typeof e != "object")
    throw new T("options must be an object", T.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const a = n[s], o = t[a];
    if (o) {
      const d = e[a], g = d === void 0 || o(d, a, e);
      if (g !== !0)
        throw new T("option " + a + " must be " + g, T.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new T("Unknown option " + a, T.ERR_BAD_OPTION);
  }
}
const ft = {
  assertOptions: As,
  validators: _t
}, se = ft.validators;
class je {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new zt(),
      response: new zt()
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
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = he(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: a } = r;
    n !== void 0 && ft.assertOptions(n, {
      silentJSONParsing: se.transitional(se.boolean),
      forcedJSONParsing: se.transitional(se.boolean),
      clarifyTimeoutError: se.transitional(se.boolean)
    }, !1), s != null && (f.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : ft.assertOptions(s, {
      encode: se.function,
      serialize: se.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = a && f.merge(
      a.common,
      a[r.method]
    );
    a && f.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete a[p];
      }
    ), r.headers = re.concat(o, a);
    const d = [];
    let g = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(r) === !1 || (g = g && h.synchronous, d.unshift(h.fulfilled, h.rejected));
    });
    const w = [];
    this.interceptors.response.forEach(function(h) {
      w.push(h.fulfilled, h.rejected);
    });
    let c, y = 0, E;
    if (!g) {
      const p = [Mt.bind(this), void 0];
      for (p.unshift.apply(p, d), p.push.apply(p, w), E = p.length, c = Promise.resolve(r); y < E; )
        c = c.then(p[y++], p[y++]);
      return c;
    }
    E = d.length;
    let _ = r;
    for (y = 0; y < E; ) {
      const p = d[y++], h = d[y++];
      try {
        _ = p(_);
      } catch (b) {
        h.call(this, b);
        break;
      }
    }
    try {
      c = Mt.call(this, _);
    } catch (p) {
      return Promise.reject(p);
    }
    for (y = 0, E = w.length; y < E; )
      c = c.then(w[y++], w[y++]);
    return c;
  }
  getUri(t) {
    t = he(this.defaults, t);
    const r = pr(t.baseURL, t.url);
    return lr(r, t.params, t.paramsSerializer);
  }
}
f.forEach(["delete", "get", "head", "options"], function(t) {
  je.prototype[t] = function(r, n) {
    return this.request(he(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, o, d) {
      return this.request(he(d || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  je.prototype[t] = r(), je.prototype[t + "Form"] = r(!0);
});
const Ie = je;
class St {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners)
        return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const o = new Promise((d) => {
        n.subscribe(d), a = d;
      }).then(s);
      return o.cancel = function() {
        n.unsubscribe(a);
      }, o;
    }, t(function(a, o, d) {
      n.reason || (n.reason = new Ee(a, o, d), r(n.reason));
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
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new St(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Ns = St;
function Ps(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Fs(e) {
  return f.isObject(e) && e.isAxiosError === !0;
}
const pt = {
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
Object.entries(pt).forEach(([e, t]) => {
  pt[t] = e;
});
const ks = pt;
function vr(e) {
  const t = new Ie(e), r = Qt(Ie.prototype.request, t);
  return f.extend(r, Ie.prototype, t, { allOwnKeys: !0 }), f.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return vr(he(e, s));
  }, r;
}
const L = vr(wt);
L.Axios = Ie;
L.CanceledError = Ee;
L.CancelToken = Ns;
L.isCancel = fr;
L.VERSION = hr;
L.toFormData = qe;
L.AxiosError = T;
L.Cancel = L.CanceledError;
L.all = function(t) {
  return Promise.all(t);
};
L.spread = Ps;
L.isAxiosError = Fs;
L.mergeConfig = he;
L.AxiosHeaders = re;
L.formToJSON = (e) => dr(f.isHTMLForm(e) ? new FormData(e) : e);
L.getAdapter = mr.getAdapter;
L.HttpStatusCode = ks;
L.default = L;
const $e = L;
oe.localeData().delimiters.thousands = " ";
oe.localeData().delimiters.decimal = ",";
const Bs = (e) => e === void 0 ? void 0 : JSON.parse(JSON.stringify(e)), Ds = (e) => {
  if (!Array.isArray(e) && Object.getPrototypeOf(e) !== Object.prototype)
    throw new Error(
      "Tried cloning instance of a class. Consider implementing clone method instead."
    );
  return Bs(e);
}, Ls = {
  key: 0,
  class: "popover-header"
}, Is = {
  key: 1,
  class: "popover-body"
}, Us = {
  important: "",
  size: "small"
}, zs = { size: "small" }, js = /* @__PURE__ */ le({
  __name: "CellHint",
  props: {
    format: {},
    label: {},
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { format: r, label: n, title: s, url: a } = ue(t), o = x(), d = x(!1), g = x(), w = (h) => {
      var b;
      h && (!h.target || (b = g.value) != null && b.contains(h.target)) || (d.value = !1, window.removeEventListener("mouseup", w));
    }, c = (h) => h.map(({ name: b, valueFormatted: R }) => ({
      label: b,
      value: R
    })), y = (h) => h.map(({ name: b, rate: R, value: N }) => ({
      label: b,
      value: `${oe(N).format("0,0")} (${oe(R).format("0,0.00")}%)`
    })), E = (h) => {
      switch (r.value) {
        case "distribution":
          return c(h);
        case "rated_distribution":
          return y(h);
        default:
          throw new Error(`Unsupported format: ${r.value}`);
      }
    }, _ = async () => {
      if (window.addEventListener("mouseup", w), o.value)
        return;
      const h = (await $e(a.value)).data;
      o.value = E(h);
    }, p = async () => {
      d.value = !0, await _();
    };
    return (h, b) => (C(), F("div", {
      class: q(["cell-hint", { visible: d.value }]),
      ref_key: "root",
      ref: g,
      onMouseover: b[1] || (b[1] = () => p()),
      onMouseout: b[2] || (b[2] = () => w())
    }, [
      j("span", {
        class: "label",
        onClick: b[0] || (b[0] = Ue(() => p(), ["stop"]))
      }, A(v(n)), 1),
      I(vt, {
        visible: d.value,
        parentClass: "cell",
        popoverClass: "cell-hint-popover"
      }, {
        default: O(() => [
          v(s) ? (C(), F("div", Ls, A(v(s)), 1)) : D("", !0),
          o.value ? (C(), F("div", Is, [
            (C(!0), F(G, null, mt(o.value, ({ label: R, value: N }, M) => (C(), F("div", {
              key: `line-${M}`
            }, [
              j("b", Us, A(R) + ": ", 1),
              j("span", zs, A(N), 1)
            ]))), 128))
          ])) : (C(), P(ht, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ], 34));
  }
});
const Jt = /* @__PURE__ */ ce(js, [["__scopeId", "data-v-9c7f570a"]]), $s = (e) => (Wt("data-v-7a1d1810"), e = e(), Gt(), e), Hs = { class: "column-hint" }, Ms = /* @__PURE__ */ $s(() => /* @__PURE__ */ j("i", { class: "la la-question-circle" }, null, -1)), Vs = { class: "popover-header" }, qs = { class: "popover-body" }, Js = /* @__PURE__ */ le({
  __name: "ColumnHint",
  props: {
    description: {},
    title: {},
    visible: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { description: r, title: n, visible: s } = ue(t);
    return (a, o) => (C(), F("div", Hs, [
      Ms,
      I(vt, {
        visible: v(s),
        parentClass: "cell",
        popoverClass: "column-hint-popover"
      }, {
        default: O(() => [
          j("div", Vs, A(v(n)), 1),
          j("div", qs, A(v(r)), 1)
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const Ws = /* @__PURE__ */ ce(Js, [["__scopeId", "data-v-7a1d1810"]]), Gs = /* @__PURE__ */ le({
  __name: "BodyPopover",
  props: {
    autoPosition: { type: Boolean, default: !1 },
    parentNode: {},
    popoverClass: {},
    visible: { type: Boolean }
  },
  setup(e) {
    const t = e, { autoPosition: r, parentNode: n, popoverClass: s, visible: a } = ue(t), o = x(), d = x(), g = x(), w = U(() => ({
      [(s == null ? void 0 : s.value) ?? ""]: !!s,
      visible: a.value
    })), c = U(() => {
      if (!(!r.value || o.value === void 0 || g.value === void 0))
        return {
          left: `${o.value}px`,
          top: `${g.value}px`
        };
    }), y = () => {
      if (!d.value || !(n != null && n.value))
        return;
      const _ = n.value.getBoundingClientRect();
      o.value = 0, g.value = 0, ze(() => {
        const p = _.left, h = _.top + document.documentElement.scrollTop, b = d.value.$el.offsetWidth, R = (b - _.width) / 2;
        _.left - R < 0 ? o.value = p : _.left + R + _.width > document.body.clientWidth ? o.value = p - b + _.width : o.value = p - R;
        const N = d.value.$el.offsetHeight;
        _.bottom + N > document.body.clientHeight ? g.value = h - N : g.value = h + _.height;
      });
    }, E = r != null && r.value ? new ResizeObserver(() => y()) : void 0;
    return it(
      a,
      (_) => {
        !(r != null && r.value) || !E || (E.disconnect(), _ && ze(() => {
          y(), E.observe(d.value.$el);
        }));
      },
      {
        immediate: !0
      }
    ), (_, p) => (C(), P(tn, { to: "#app > .app-container" }, [
      I(cn, {
        class: q(["no-spacing popover", w.value]),
        ref_key: "popover",
        ref: d,
        style: rn(c.value)
      }, {
        default: O(() => [
          lt(_.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["class", "style"])
    ]));
  }
});
const Xs = /* @__PURE__ */ ce(Gs, [["__scopeId", "data-v-d948a8f2"]]), Qs = /* @__PURE__ */ le({
  __name: "DetailsSelector",
  props: {
    labels: {},
    open: { type: Boolean, default: !1 },
    title: {}
  },
  emits: ["hideDetails", "showDetails"],
  setup(e, { emit: t }) {
    const r = e, { labels: n, open: s, title: a } = ue(r), o = x(!1), d = x(), g = x(), w = (E) => {
      var _, p;
      !E.target || (_ = g.value) != null && _.contains(E.target) || (p = d.value) != null && p.$el.contains(E.target) || (o.value = !1, window.removeEventListener("mouseup", w));
    }, c = () => {
      if (s.value) {
        t("hideDetails");
        return;
      }
      if (o.value) {
        o.value = !1;
        return;
      }
      o.value = !0, window.addEventListener("mouseup", w);
    }, y = (E) => {
      if (o.value = !1, s.value) {
        t("hideDetails");
        return;
      }
      t("showDetails", E);
    };
    return nn(() => {
      window.removeEventListener("mouseup", w);
    }), (E, _) => (C(), F("div", {
      class: "details-selector-container",
      ref_key: "root",
      ref: g,
      onClick: _[0] || (_[0] = Ue(() => c(), ["stop"]))
    }, [
      I(dn, {
        class: "details-selector",
        vertical: "center"
      }, {
        default: O(() => [
          v(a) ? (C(), P(B, {
            key: 0,
            mood: "important-alt",
            size: "small"
          }, {
            default: O(() => [
              k(A(v(a)), 1)
            ]),
            _: 1
          })) : D("", !0),
          I(fn, {
            value: v(s) ? "chevron-up" : "chevron-down",
            mood: "important-alt",
            size: "large-2"
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      I(Xs, {
        ref_key: "popover",
        ref: d,
        parentNode: g.value,
        visible: o.value,
        autoPosition: "",
        popoverClass: "details-selector-popover"
      }, {
        default: O(() => [
          (C(!0), F(G, null, mt(v(n), (p, h) => (C(), P(B, {
            class: "dropdown-item",
            onClick: Ue(() => y(h), ["stop"]),
            contrast: ""
          }, {
            default: O(() => [
              k(A(p), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 256))
        ]),
        _: 1
      }, 8, ["parentNode", "visible"])
    ], 512));
  }
});
const Zs = /* @__PURE__ */ ce(Qs, [["__scopeId", "data-v-3ad12b00"]]), Ys = { class: "pagination" }, Ks = ["onClick"], eo = /* @__PURE__ */ le({
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
    const r = e, { currentPageSize: n, id: s, pageNumber: a, pageRadius: o, pageSizeLabel: d, pageSizes: g, rowCount: w } = ue(r), c = U(() => Math.min(...g.value)), y = U(() => Math.ceil(w.value / n.value)), E = U(
      () => g.value.reduce((h, b) => (h[b] = b.toString(), h), {})
    ), _ = U(() => {
      const h = [];
      for (let b = o.value - 1; b > 0; b--)
        a.value > b && h.push(a.value - b);
      h.push(a.value);
      for (let b = 1; b < o.value; b++)
        a.value < y.value - b - 1 && h.push(a.value + b);
      return h;
    }), p = (h) => {
      n.value !== h && t("update:currentPageSize", h);
    };
    return (h, b) => (C(), F("div", Ys, [
      v(w) > v(n) ? (C(), F(G, { key: 0 }, [
        v(a) > 0 ? (C(), P(B, {
          key: 0,
          class: "page",
          onClick: b[0] || (b[0] = () => t("update:pageNumber", 0)),
          mood: "important-alt"
        }, {
          default: O(() => [
            k("1")
          ]),
          _: 1
        })) : D("", !0),
        v(a) > v(o) ? (C(), P(B, {
          key: 1,
          class: "page-separator"
        }, {
          default: O(() => [
            k("…")
          ]),
          _: 1
        })) : D("", !0),
        (C(!0), F(G, null, mt(_.value, (R) => (C(), F("div", {
          class: q(["page", { current: R === v(a) }]),
          onClick: () => t("update:pageNumber", R),
          key: R
        }, A(R + 1), 11, Ks))), 128)),
        v(a) < y.value - v(o) - 1 ? (C(), P(B, {
          key: 2,
          class: "page-separator"
        }, {
          default: O(() => [
            k("…")
          ]),
          _: 1
        })) : D("", !0),
        v(a) < y.value - 1 ? (C(), P(B, {
          key: 3,
          class: "page",
          onClick: b[1] || (b[1] = () => t("update:pageNumber", y.value - 1)),
          mood: "important-alt"
        }, {
          default: O(() => [
            k(A(y.value), 1)
          ]),
          _: 1
        })) : D("", !0),
        I(B, { class: "page-size-label" }, {
          default: O(() => [
            k(A(v(d)), 1)
          ]),
          _: 1
        })
      ], 64)) : D("", !0),
      v(w) > c.value ? (C(), P(Xt, {
        key: 1,
        class: "page-size-selector",
        "onUpdate:modelValue": b[2] || (b[2] = (R) => p(parseInt(R.toString()))),
        id: v(s),
        items: E.value,
        modelValue: v(n)
      }, {
        item: O(({ item: R }) => [
          k(A(R), 1)
        ]),
        _: 1
      }, 8, ["id", "items", "modelValue"])) : D("", !0)
    ]));
  }
});
const to = /* @__PURE__ */ ce(eo, [["__scopeId", "data-v-764cc1be"]]), ro = (e) => (Wt("data-v-a5db5eb0"), e = e(), Gt(), e), no = /* @__PURE__ */ ro(() => /* @__PURE__ */ j("i", { class: "la la-eye secondary" }, null, -1)), so = /* @__PURE__ */ le({
  __name: "TrendChart",
  props: {
    formatter: { type: Function },
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { formatter: r, title: n, url: s } = ue(t), a = x(!1), o = x([]), d = x(), g = U(() => d.value ? Object.assign({}, d.value) : {}), w = U(() => {
      var b;
      switch ((b = d.value) == null ? void 0 : b.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return d.value[0];
        default:
          return d.value.slice(d.value.length / 2).reduce((R, N) => R + N, 0) / Math.ceil(d.value.length / 2);
      }
    }), c = U(() => {
      var b;
      switch ((b = d.value) == null ? void 0 : b.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return d.value[0];
        default:
          return d.value.slice(0, d.value.length / 2).reduce((R, N) => R + N, 0) / Math.floor(d.value.length / 2);
      }
    }), y = U(() => c.value > w.value ? "negative" : c.value < w.value ? "positive" : "neutral"), E = U(() => {
      if (!d.value)
        return {};
      const b = new Array(d.value.length).fill(0).map(
        (R, N) => c.value + (w.value - c.value) * N / (d.value.length - 1)
      );
      return Object.assign({}, b);
    }), _ = async () => {
      if (!d.value)
        return;
      const b = (await $e({ url: s.value })).data;
      o.value = Object.keys(b), d.value = Object.values(b);
    }, p = () => {
      a.value = !1, window.removeEventListener("mouseup", p);
    }, h = async () => {
      a.value = !0, window.addEventListener("mouseup", p), await _();
    };
    return (b, R) => (C(), F("div", {
      class: "trend-chart-container",
      onClick: R[0] || (R[0] = Ue(() => h(), ["stop"]))
    }, [
      no,
      I(vt, {
        visible: a.value,
        parentClass: "cell",
        popoverClass: "trend-chart-popover"
      }, {
        default: O(() => [
          v(n) ? (C(), P(vn, {
            key: 0,
            size: "small-3"
          }, {
            default: O(() => [
              k(A(v(n)), 1)
            ]),
            _: 1
          })) : D("", !0),
          d.value ? (C(), P(un, {
            key: 1,
            activeLines: ["values"],
            formatters: { trend: v(r), values: v(r) },
            moods: { trend: y.value, values: "important" },
            styles: { trend: "line", values: "line" },
            values: { trend: E.value, values: g.value }
          }, {
            "x-axis-label": O(({ index: N }) => [
              k(A(o.value[N]), 1)
            ]),
            _: 1
          }, 8, ["formatters", "moods", "values"])) : (C(), P(ht, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const oo = /* @__PURE__ */ ce(so, [["__scopeId", "data-v-a5db5eb0"]]), ao = { class: "common-table" }, io = {
  key: 0,
  class: "controls d-flex justify-content-end mb-1"
}, lo = ["onMouseover", "onMouseout"], uo = ["href"], co = ["href"], fo = ["onClick"], at = 50, po = /* @__PURE__ */ le({
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
    const r = e, n = async (i, u) => typeof i == "function" ? await i(u) : (await $e({
      ...i,
      params: {
        ...i.params,
        ...u
      }
    })).data, s = async (i, u) => typeof i == "function" ? await i(u) : (await $e({
      ...i,
      params: {
        ...i.params ?? {},
        filter: u.inlineFilters.value,
        page_number: u.pageNumber,
        page_size: u.pageSize,
        order: u.orderBy,
        reversed: u.reversed
      }
    })).data, {
      cellClasses: a,
      clientCurrencyDecimal: o,
      clientCurrencySymbol: d,
      clientCurrencySymbolPrefix: g,
      colorMetrics: w,
      columns: c,
      columnDetails: y,
      columnLinks: E,
      comparisonColumns: _,
      defaultOrderBy: p,
      detailsColumn: h,
      detailsRequests: b,
      dragColumns: R,
      fixedColumnNumber: N,
      inlineFilterOperators: M,
      inversedKpis: de,
      primaryColumn: $,
      primaryColumnAlias: fe,
      request: Oe,
      rows: Re,
      shortenColumns: X,
      showInlineFilters: br,
      showRowNumber: yr,
      showPagination: gr,
      showTopTotal: wr,
      total: Te,
      totalColumnKey: _r,
      trendUrl: We
    } = ue(r), Ge = () => {
      const i = {};
      for (const u of Object.keys(c.value))
        u in M.value && (i[u] = {
          operator: Object.keys(M.value[u])[0],
          value: ""
        });
      return i;
    }, xe = x([]), ae = x({}), be = x([]), Ct = x({}), Ae = x([]), pe = x({}), Xe = x(!1), ye = x(!1), Ne = x([]), Pe = x(!1), Q = x(Ge()), ge = x(!0), Z = x(), ne = x(0), ie = x(20), Fe = x(0), W = x(), ee = x(), Sr = U(() => {
      const i = {};
      return ye.value && (i.inline_filters = {
        icon: "filter"
      }), i;
    }), Cr = U(
      () => _ != null && _.value ? Object.keys(_.value) : void 0
    ), Er = U(
      () => Ae.value.reduce((i, u) => (i[u] = Ds(c.value[u]), i), {})
    ), Et = U(() => {
      if (b != null && b.value)
        return Object.entries(b.value).reduce((i, [u, { label: l }]) => (i[u] = l, i), {});
    }), Ot = U(() => [...xe.value].sort((i, u) => {
      const l = (() => {
        const m = Ze(
          Z.value[0].reduce((z, te) => z[te], i),
          c.value[Z.value[0][0]].type
        ), S = Ze(
          Z.value[0].reduce((z, te) => z[te], u),
          c.value[Z.value[0][0]].type
        );
        return m > S ? 1 : m < S ? -1 : 0;
      })();
      return Z.value[1] ? -l : l;
    })), Rt = U(() => !Oe.value || Pe.value ? Ot.value : Ot.value.slice(
      ne.value * ie.value,
      (ne.value + 1) * ie.value
    )), Or = (i) => {
      be.value.includes(i) || be.value.push(i);
    }, ke = (i, u) => !X.value || !X.value.includes(i) ? !1 : u.length > at, Rr = (i) => !!i.tooltipTitle && !!i.tooltipDescription, Tr = (i, u) => {
      var m;
      const l = ((m = de == null ? void 0 : de.value) == null ? void 0 : m.includes(u)) ?? !1;
      return i > 0 ? l ? "negative" : "positive" : i < 0 ? l ? "positive" : "negative" : "neutral";
    }, Tt = (i, u, l) => {
      if (W.value)
        return V(
          W.value[i][u],
          _.value[u].type ?? c.value[i].type,
          l
        );
    }, V = (i, u, l) => {
      let m = Ze(i, u);
      switch (u) {
        case "float":
          return oe(parseFloat(m)).format("0,0.00");
        case "int":
          return oe(parseInt(m)).format("0,0");
        case "money": {
          let S = "0,0";
          o.value > 0 && (S += "." + "0".repeat(o.value));
          const z = oe(parseFloat(m)).format(S);
          return g.value ? d.value + " " + z : z + " " + d.value;
        }
        case "money_capped": {
          const S = parseFloat(m.toFixed(o.value)) == 0;
          if (m > 0 && m < 1 && S) {
            const z = o.value === 0 ? 1 : parseFloat("0." + "0".repeat(o.value - 1) + "1");
            return g.value ? `< ${d.value} ${z}` : `< ${z} ${d.value}`;
          } else
            return V(i, "money", l);
        }
        case "percent": {
          let S = oe(parseFloat(m)).format("0,0.00") + "%";
          return l === "difference" && m > 0 && (S = `+${S}`), S;
        }
        case "time":
          return `${V(Math.floor(parseInt(m) / 60), "int")}mn${V(
            parseInt(m) % 60,
            "int"
          )}s`;
        default:
          return m.toString();
      }
    }, xr = async (i, u) => {
      if (ae.value[i] && ae.value[i][u[$.value]])
        return ae.value[i][u[$.value]];
      const { rows: l } = await n(b.value[i].request, {
        row: u,
        primaryColumn: (fe == null ? void 0 : fe.value) ?? $.value,
        primaryColumnValue: u[$.value]
      });
      return ae.value[i] || (ae.value[i] = {}), ae.value[i][u[$.value]] = Object.values(l), ae.value[i][u[$.value]];
    }, xt = (i, u) => {
      const l = new URL(i.url, location.origin);
      if (Array.isArray(i.columns))
        for (const m of i.columns)
          l.searchParams.set(m, u[m]);
      else
        for (const [m, S] of Object.entries(i.columns))
          l.searchParams.set(S, u[m]);
      return l;
    }, Ar = (i, u) => {
      const l = new URL(y.value[i].baseUrl, location.origin);
      if (Array.isArray(y.value[i].columns))
        for (const m of y.value[i].columns)
          l.searchParams.set(m, u[m]);
      else
        for (const [m, S] of Object.entries(y.value[i].columns))
          l.searchParams.set(S, u[m]);
      return l.toString();
    }, Nr = (i) => {
      if (i.totalUrl)
        return new URL(i.totalUrl).toString();
      const u = new URL(i.baseUrl);
      return u.searchParams.set("total", "true"), u.toString();
    }, Pr = (i) => !X.value || !X.value.includes(i) ? -1 : Ne.value.indexOf(i), Fr = (i) => {
      if (i in Q.value)
        return Q.value[i].operator;
    }, kr = (i) => {
      if (i in Q.value)
        return Q.value[i].value;
    }, Qe = (i) => M.value[i], Br = (i) => {
      const u = Qe(i);
      if (!u)
        return;
      const l = ["normal", "small"];
      let m = 0;
      for (const S of Object.values(u)) {
        const z = l.indexOf(S.size ?? "normal");
        z > m && (m = z);
      }
      return {
        [`size-${l[m]}`]: !0
      };
    }, Dr = (i) => {
      const u = Qe(i);
      return u ? Object.entries(u).reduce((l, [m, S]) => (l[m] = S.label, l), {}) : {};
    }, Lr = (i) => c.value[i].type === "string" ? "text" : "number", At = () => `Table_OrderBy_${location.pathname}`, Ir = () => `Table_PageSize_${location.pathname}`, Ze = (i, u) => {
      switch (u) {
        case "float":
        case "int":
        case "money":
        case "money_capped":
        case "percent":
        case "time":
          return parseFloat(i ?? 0);
        default:
          return i;
      }
    }, Ur = (i, u) => {
      if (!We)
        return "";
      const l = new URL(
        u ? We.value[u] : We.value,
        location.origin
      );
      return l.searchParams.set((fe == null ? void 0 : fe.value) ?? $.value, i[$.value]), l.toString();
    }, Be = (i, u, l) => ke(i, u) ? [] : l ? (h == null ? void 0 : h.value) === i ? ["flex-grow-1", "text-left"] : X.value && X.value.includes(i) && Rt.value.some((m) => ke(i, m[i])) ? ["flex-grow-1", "text-left"] : ["flex-grow-1"] : ["flew-grow-1"], zr = (i) => i in M.value, jr = () => {
      Xe.value = !1;
    }, Nt = (i, u) => !(!(E != null && E.value) || !(u in E.value) || "disable_for" in E.value[u] && E.value[u].disable_for.includes(i[$.value])), $r = (i, u) => {
      const [l] = Ae.value.splice(i, 1);
      Ae.value.splice(u, 0, l), t("move:column", { from: i, to: u });
    }, Hr = (i) => {
      const u = be.value.indexOf(i);
      u < 0 || be.value.splice(u, 1);
    }, Pt = (i, u) => {
      Ct.value[i] = u;
    }, we = (i, u) => !X.value || !X.value.includes(u) || i.length <= at ? i : `${i.substring(0, at - 3)}...`, Mr = (i) => {
      if (!ee.value)
        return;
      const u = {
        left: ee.value.$el.scrollLeft,
        top: ee.value.$el.scrollTop
      };
      delete pe.value[i[$.value]], ze(() => {
        ee.value.$el.scrollTo(u);
      });
    }, Vr = (i, u) => {
      const l = i.target.value;
      kt(u, { value: l });
    }, qr = (i, u) => {
      i.key === "Enter" && i.target.blur();
    }, Jr = async (i, u) => {
      if (!ee.value)
        return;
      const l = {
        left: ee.value.$el.scrollLeft,
        top: ee.value.$el.scrollTop
      };
      ge.value = !0, pe.value[u[$.value]] = await xr(i, u), ze(() => {
        ee.value.$el.scrollTo(l), ge.value = !1;
      });
    }, Wr = async (i = !1) => {
      await Xr(i) || await Gr(i) || await Bt(i);
    }, Ye = async (i) => {
      await Ke(i), ne.value = i;
    }, Ft = async (i) => {
      const u = Ir();
      if (i === void 0) {
        const l = localStorage.getItem(u);
        l && (ie.value = parseInt(l));
      } else
        localStorage.setItem(u, i.toString()), await Ke(0, i), ne.value = 0, ie.value = i;
    }, kt = (i, { operator: u, value: l }) => {
      if (u || (u = Object.keys(Qe(i))[0]), !u)
        return;
      const m = {
        ...Q.value[i],
        operator: u
      };
      l !== void 0 && (m.value = l), Q.value[i] = m, Ye(0);
    }, Gr = async (i) => {
      const u = (() => {
        for (const S in localStorage) {
          if (!S.startsWith("DataTables_"))
            continue;
          const z = S.substring(S.indexOf("/"));
          if (location.pathname !== z)
            return;
          const te = localStorage.getItem(S);
          return te ? JSON.parse(te) : void 0;
        }
      })();
      if (!u || !u.order || !u.order[0] || typeof u.order[0][0] == "number")
        return !1;
      const l = u.order[0][0].lastIndexOf("-"), m = l === -1 ? [
        [u.order[0][0]],
        u.order[0][1] === "desc"
      ] : [
        [
          u.order[0][0].substring(0, l),
          u.order[0][0].substring(l + 1)
        ],
        u.order[0][1] === "desc"
      ];
      return await me(m, !1, i), !0;
    }, Bt = async (i) => {
      if (p != null && p.value) {
        await me(p.value, !1, i);
        return;
      }
      const [u, { colspan: l }] = Object.entries(c.value).find(
        ([m, { visible: S }]) => S
      );
      if (l === -1) {
        await me([[u], !1], !1, i);
        return;
      }
      await me(
        [
          [
            u,
            (_ != null && _.value ? Object.keys(_.value)[0] : 0).toString()
          ],
          !1
        ],
        !1,
        i
      );
    }, Xr = async (i) => {
      const u = localStorage.getItem(At());
      return u ? (await me(JSON.parse(u), !1, i), !0) : !1;
    }, Qr = async (i, u, l) => {
      if (!Oe.value)
        return !1;
      if (Pe.value)
        return !0;
      const m = await s(Oe.value, {
        inlineFilters: Q.value,
        pageNumber: i,
        pageSize: u,
        orderBy: l[0],
        reversed: l[1]
      });
      return xe.value = Object.values(m.rows), Pe.value = m.paginated !== !0, Fe.value = m.rowCount, m.detailedRows ? pe.value = m.detailedRows : pe.value = {}, m.total && (W.value = m.total), !0;
    }, Zr = () => {
      if (!(Re != null && Re.value))
        return !1;
      let i = Object.values(Re.value);
      for (const [u, l] of Object.entries(Q.value))
        l.value && (i = i.filter(
          (m) => M.value[u][l.operator].callback(
            m[u],
            l.value
          )
        ));
      return xe.value = i, Fe.value = i.length, !0;
    }, Ke = async (i, u, l) => {
      i === void 0 && (i = ne.value), u === void 0 && (u = ie.value), l === void 0 && (l = Z.value), ge.value = !0, Zr() || await Qr(ne.value, ie.value, Z.value), ge.value = !1;
    }, Yr = () => {
      Xe.value = !0;
    }, Kr = (i) => {
      if (!X.value || !X.value.includes(i))
        return;
      const u = Pr(i);
      u >= 0 ? Ne.value.splice(u, 1) : Ne.value.push(i);
    }, en = () => {
      ye.value = !ye.value, ye.value && (Q.value = Ge());
    }, me = async (i, u = !0, l = !0) => {
      ne.value = 0, l && await Ke(void 0, void 0, i), Z.value = i, u && localStorage.setItem(At(), JSON.stringify(i));
    };
    return sn(() => {
      Ae.value = Object.keys(c.value), W.value = Te == null ? void 0 : Te.value, Promise.all([Bt(!1), Ft()]).then(() => Wr(!0));
    }), it(c, () => {
      Q.value = Ge();
    }), it(
      Oe,
      () => {
        Pe.value = !1, Ye(0);
      },
      { deep: !0 }
    ), (i, u) => (C(), F("div", ao, [
      v(gr) ? (C(), F("div", io, [
        I(to, {
          "onUpdate:pageNumber": u[0] || (u[0] = (l) => Ye(l)),
          "onUpdate:currentPageSize": u[1] || (u[1] = (l) => Ft(l)),
          currentPageSize: ie.value,
          pageNumber: ne.value,
          pageSizeLabel: i.pageSizeLabel,
          rowCount: Fe.value
        }, null, 8, ["currentPageSize", "pageNumber", "pageSizeLabel", "rowCount"])
      ])) : D("", !0),
      j("div", {
        class: "table-container",
        onMouseover: u[7] || (u[7] = () => Yr()),
        onMouseout: u[8] || (u[8] = () => jr())
      }, [
        j("div", {
          class: q(["action-buttons", { active: Xe.value }])
        }, [
          v(br) ? (C(), F("button", {
            key: 0,
            class: "btn btn-small btn-success",
            onClick: u[2] || (u[2] = () => en())
          }, [
            j("div", {
              class: q(["las", ye.value ? "la-trash" : "la-filter"])
            }, null, 2)
          ])) : D("", !0)
        ], 2),
        Z.value ? (C(), P(hn, {
          key: 0,
          ref_key: "table",
          ref: ee,
          onAddColoredMetric: u[3] || (u[3] = (l) => Or(l)),
          "onMove:column": u[4] || (u[4] = ({ from: l, to: m }) => $r(l, m)),
          onRemoveColoredMetric: u[5] || (u[5] = (l) => Hr(l)),
          "onUpdate:orderBy": u[6] || (u[6] = (l) => me(l)),
          additionalHeaders: Sr.value,
          cellClasses: v(a),
          colorMetrics: v(w),
          coloredMetrics: be.value,
          columns: Er.value,
          comparisonColumnKeys: Cr.value,
          detailsRows: pe.value,
          dragColumns: v(R),
          fixedColumnNumber: v(N),
          inversedKpis: v(de),
          orderBy: Z.value,
          primaryColumn: v($),
          rows: Rt.value,
          showRowNumber: v(yr),
          showTotal: !!W.value,
          showTopTotal: v(wr)
        }, on({
          colorizeLabel: O(({ enabled: l }) => [
            I(B, {
              mood: "white",
              size: "small"
            }, {
              default: O(() => [
                l ? (C(), F(G, { key: 0 }, [
                  k(A(i.uncolorizeLabel), 1)
                ], 64)) : (C(), F(G, { key: 1 }, [
                  k(A(i.colorizeLabel), 1)
                ], 64))
              ]),
              _: 2
            }, 1024)
          ]),
          columnRowNumber: O(() => [
            I(B, {
              contrast: "",
              size: "small"
            }, {
              default: O(() => [
                k("#")
              ]),
              _: 1
            })
          ]),
          rowNumber: O(({ value: l }) => [
            I(B, {
              contrast: "",
              size: "small"
            }, {
              default: O(() => [
                k(A(l), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          totalRowNumber: O(() => [
            I(B, {
              contrast: "",
              size: "small"
            }, {
              default: O(() => [
                k("#")
              ]),
              _: 1
            })
          ]),
          column: O(({ columnKey: l, isGhost: m }) => [
            j("div", {
              class: "d-flex align-items-center",
              onMouseover: () => Pt(l, !0),
              onMouseout: () => Pt(l, !1)
            }, [
              I(B, {
                contrast: "",
                size: "small"
              }, {
                default: O(() => [
                  k(A(v(c)[l].label), 1)
                ]),
                _: 2
              }, 1024),
              !m && Rr(v(c)[l]) ? (C(), P(Ws, {
                key: 0,
                description: v(c)[l].tooltipDescription,
                title: v(c)[l].tooltipTitle,
                visible: Ct.value[l]
              }, null, 8, ["description", "title", "visible"])) : D("", !0)
            ], 40, lo)
          ]),
          row: O(({ columnKey: l, index: m, row: S, spanIndex: z, subcolumnKey: te, subindex: et, value: H }) => [
            lt(i.$slots, "row", an(ln({
              columnKey: l,
              index: m,
              row: S,
              spanIndex: z,
              subcolumnKey: te,
              subindex: et,
              value: H
            })), () => [
              et === void 0 && l === "trend" ? (C(), P(oo, {
                key: 0,
                class: q(Be(l, H, S.rowInfo.detailable)),
                formatter: (tt) => V(tt, "int"),
                title: i.trendChartTitle,
                url: Ur(S, te)
              }, null, 8, ["class", "formatter", "title", "url"])) : S.rowInfo.detailable && l === v(h) ? (C(), F(G, { key: 1 }, [
                Nt(S, l) && S.rowInfo.detailable ? (C(), P(B, {
                  key: 0,
                  class: q(Be(l, H, S.rowInfo.detailable)),
                  contrast: "",
                  size: "small"
                }, {
                  default: O(() => [
                    j("a", {
                      class: "column-link",
                      href: xt(v(E)[l], S).toString()
                    }, A(we(V(H, v(c)[l].type), l)), 9, uo)
                  ]),
                  _: 2
                }, 1032, ["class"])) : (C(), P(B, {
                  key: 1,
                  contrast: "",
                  size: "small"
                }, {
                  default: O(() => [
                    k(A(V(H, v(c)[l].type)), 1)
                  ]),
                  _: 2
                }, 1024))
              ], 64)) : Nt(S, l) && S.rowInfo.detailable ? (C(), P(B, {
                key: 2,
                class: q(Be(l, H, S.rowInfo.detailable)),
                contrast: "",
                size: "small"
              }, {
                default: O(() => [
                  j("a", {
                    class: "column-link",
                    href: xt(v(E)[l], S).toString()
                  }, A(we(V(H, v(c)[l].type), l)), 9, co)
                ]),
                _: 2
              }, 1032, ["class"])) : et === void 0 && H >= 0.01 && l in v(y) ? (C(), P(Jt, {
                key: 3,
                format: v(y)[l].format,
                label: we(V(H, v(c)[l].type), l),
                title: v(y)[l].title,
                url: Ar(l, S)
              }, null, 8, ["format", "label", "title", "url"])) : (C(), P(B, {
                key: 4,
                class: q(Be(l, H, S.rowInfo.detailable)),
                contrast: "",
                size: "small"
              }, {
                default: O(() => [
                  k(A(we(V(H, v(c)[l].type), l)), 1)
                ]),
                _: 2
              }, 1032, ["class"])),
              ke(l, H) ? (C(), F("i", {
                key: 5,
                class: q(["flex-grow-1 expand-column fa", Ne.value.includes(l) ? "fa-compress-alt" : "fa-expand-alt"]),
                onClick: () => Kr(l)
              }, null, 10, fo)) : D("", !0),
              Et.value && S.rowInfo.detailable && l === v(h) ? (C(), F(G, { key: 6 }, [
                ke(l, H) ? D("", !0) : (C(), P(mn, { key: 0 })),
                I(Zs, {
                  onHideDetails: () => Mr(S),
                  onShowDetails: (tt) => Jr(tt, S),
                  labels: Et.value,
                  open: pe.value[S[v($)]] !== void 0,
                  title: i.detailsSelectorTitle
                }, null, 8, ["onHideDetails", "onShowDetails", "labels", "open", "title"])
              ], 64)) : D("", !0)
            ], !0)
          ]),
          additionalHeader: O(({ additionalHeader: l, columnKey: m }) => [
            l === "inline_filters" && zr(m) ? (C(), F("div", {
              key: 0,
              class: q(["d-flex inline-filter", Br(m)])
            }, [
              I(Xt, {
                class: "inline-filter-dropdown",
                "onUpdate:modelValue": (S) => kt(m, { operator: S.toString() }),
                id: `additional_header_${m}`,
                items: Dr(m),
                modelValue: Fr(m)
              }, {
                item: O(({ item: S }) => [
                  I(B, {
                    contrast: "",
                    size: "small"
                  }, {
                    default: O(() => [
                      k(A(S), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["onUpdate:modelValue", "id", "items", "modelValue"]),
              I(pn, {
                class: "flex-grow-1 inline-filter-input",
                onBlur: (S) => Vr(S, m),
                onKeyup: (S) => qr(S),
                modelValue: kr(m),
                type: Lr(m)
              }, null, 8, ["onBlur", "onKeyup", "modelValue", "type"])
            ], 2)) : D("", !0)
          ]),
          total: O(({ columnKey: l, subcolumnKey: m, values: S }) => [
            lt(i.$slots, v(Te), {
              columnKey: l,
              subcolumnKey: m,
              values: S
            }, () => [
              i.totalTitle && l === v(_r) ? (C(), P(B, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: O(() => [
                  k(A(i.totalTitle(Fe.value ?? xe.value.length)), 1)
                ]),
                _: 1
              })) : W.value ? (C(), F(G, { key: 1 }, [
                m && v(_) && v(_)[m].format === "difference" ? (C(), P(B, {
                  key: 0,
                  mood: Tr(W.value[l][m], l),
                  contrast: "",
                  size: "small"
                }, {
                  default: O(() => [
                    k(A(Tt(l, m, v(_)[m].format)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"])) : W.value && W.value[l] >= 0.01 && l in v(y) ? (C(), P(Jt, {
                  key: 1,
                  format: v(y)[l].format,
                  label: we(V(W.value[l], v(c)[l].type, v(_) && m ? v(_)[m].format : void 0), l),
                  title: v(y)[l].title,
                  url: Nr(v(y)[l])
                }, null, 8, ["format", "label", "title", "url"])) : l !== "trend" ? (C(), P(B, {
                  key: 2,
                  contrast: "",
                  size: "small"
                }, {
                  default: O(() => [
                    m ? (C(), F(G, { key: 0 }, [
                      k(A(Tt(l, m, v(_) ? v(_)[m].format : void 0)), 1)
                    ], 64)) : (C(), F(G, { key: 1 }, [
                      k(A(V(W.value[l], v(c)[l].type)), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024)) : D("", !0)
              ], 64)) : D("", !0)
            ], !0)
          ]),
          _: 2
        }, [
          v(_) ? {
            name: "secondaryColumn",
            fn: O(({ subcolumnKey: l }) => [
              l ? (C(), P(B, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: O(() => [
                  k(A(v(_)[l].label), 1)
                ]),
                _: 2
              }, 1024)) : D("", !0)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "dragColumns", "fixedColumnNumber", "inversedKpis", "orderBy", "primaryColumn", "rows", "showRowNumber", "showTotal", "showTopTotal"])) : D("", !0)
      ], 32),
      j("div", {
        class: q(["loading-overlay", { visible: ge.value }])
      }, [
        I(ht)
      ], 2)
    ]));
  }
});
const xo = /* @__PURE__ */ ce(po, [["__scopeId", "data-v-2d37a9c5"]]);
export {
  xo as CommonTable
};
