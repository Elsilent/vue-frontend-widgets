import { defineComponent as le, toRefs as ue, ref as x, openBlock as C, createElementBlock as F, normalizeClass as q, createElementVNode as j, withModifiers as Ue, toDisplayString as A, unref as h, createVNode as I, withCtx as O, createCommentVNode as D, Fragment as G, renderList as vt, createBlock as P, pushScopeId as Gt, popScopeId as Xt, computed as U, watch as lt, nextTick as ze, Teleport as tn, normalizeStyle as rn, renderSlot as ut, onUnmounted as nn, createTextVNode as k, onMounted as sn, createSlots as on, normalizeProps as an, guardReactiveProps as ln } from "vue";
import oe from "numeral";
import { L as ht, a as un } from "./LineBarChart-96b2a178.js";
import { P as bt } from "./Popover-38d3223e.js";
import { _ as ce } from "./_plugin-vue_export-helper-dad06003.js";
import { C as cn, A as fn, I as dn } from "./Icon-8f2ed8ba.js";
import { I as B } from "./Info-54758b60.js";
import { D as Qt, I as pn } from "./Input-7e9b7edc.js";
import { Separator as mn } from "./marker.js";
import { T as vn } from "./Table-95b0c0ff.js";
import { H as hn } from "./Header-8b49a8fe.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "./datetime-31a2b505.js";
function Zt(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: bn } = Object.prototype, { getPrototypeOf: yt } = Object, He = ((e) => (t) => {
  const r = bn.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), K = (e) => (e = e.toLowerCase(), (t) => He(t) === e), Me = (e) => (t) => typeof t === e, { isArray: he } = Array, Se = Me("undefined");
function yn(e) {
  return e !== null && !Se(e) && e.constructor !== null && !Se(e.constructor) && J(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Yt = K("ArrayBuffer");
function gn(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Yt(e.buffer), t;
}
const wn = Me("string"), J = Me("function"), Kt = Me("number"), Ve = (e) => e !== null && typeof e == "object", _n = (e) => e === !0 || e === !1, De = (e) => {
  if (He(e) !== "object")
    return !1;
  const t = yt(e);
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
  if (typeof e != "object" && (e = [e]), he(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const a = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = a.length;
    let f;
    for (n = 0; n < o; n++)
      f = a[n], t.call(null, e[f], f, e);
  }
}
function er(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const tr = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), rr = (e) => !Se(e) && e !== tr;
function ct() {
  const { caseless: e } = rr(this) && this || {}, t = {}, r = (n, s) => {
    const a = e && er(t, s) || s;
    De(t[a]) && De(n) ? t[a] = ct(t[a], n) : De(n) ? t[a] = ct({}, n) : he(n) ? t[a] = n.slice() : t[a] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && Ce(arguments[n], r);
  return t;
}
const Nn = (e, t, r, { allOwnKeys: n } = {}) => (Ce(t, (s, a) => {
  r && J(s) ? e[a] = Zt(s, r) : e[a] = s;
}, { allOwnKeys: n }), e), Pn = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Fn = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, kn = (e, t, r, n) => {
  let s, a, o;
  const f = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      o = s[a], (!n || n(o, e, t)) && !f[o] && (t[o] = e[o], f[o] = !0);
    e = r !== !1 && yt(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Bn = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Dn = (e) => {
  if (!e)
    return null;
  if (he(e))
    return e;
  let t = e.length;
  if (!Kt(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Ln = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && yt(Uint8Array)), In = (e, t) => {
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
), Lt = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), $n = K("RegExp"), nr = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Ce(r, (s, a) => {
    let o;
    (o = t(s, a, e)) !== !1 && (n[a] = o || s);
  }), Object.defineProperties(e, n);
}, Hn = (e) => {
  nr(e, (t, r) => {
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
  return he(e) ? n(e) : n(String(e).split(t)), r;
}, Vn = () => {
}, qn = (e, t) => (e = +e, Number.isFinite(e) ? e : t), nt = "abcdefghijklmnopqrstuvwxyz", It = "0123456789", sr = {
  DIGIT: It,
  ALPHA: nt,
  ALPHA_DIGIT: nt + nt.toUpperCase() + It
}, Jn = (e = 16, t = sr.ALPHA_DIGIT) => {
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
        const a = he(n) ? [] : {};
        return Ce(n, (o, f) => {
          const g = r(o, s + 1);
          !Se(g) && (a[f] = g);
        }), t[s] = void 0, a;
      }
    }
    return n;
  };
  return r(e, 0);
}, Xn = K("AsyncFunction"), Qn = (e) => e && (Ve(e) || J(e)) && J(e.then) && J(e.catch), d = {
  isArray: he,
  isArrayBuffer: Yt,
  isBuffer: yn,
  isFormData: Tn,
  isArrayBufferView: gn,
  isString: wn,
  isNumber: Kt,
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
  merge: ct,
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
  hasOwnProperty: Lt,
  hasOwnProp: Lt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: nr,
  freezeMethods: Hn,
  toObjectSet: Mn,
  toCamelCase: jn,
  noop: Vn,
  toFiniteNumber: qn,
  findKey: er,
  global: tr,
  isContextDefined: rr,
  ALPHABET: sr,
  generateString: Jn,
  isSpecCompliantForm: Wn,
  toJSONObject: Gn,
  isAsyncFn: Xn,
  isThenable: Qn
};
function T(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
d.inherits(T, Error, {
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
const or = T.prototype, ar = {};
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
  ar[e] = { value: e };
});
Object.defineProperties(T, ar);
Object.defineProperty(or, "isAxiosError", { value: !0 });
T.from = (e, t, r, n, s, a) => {
  const o = Object.create(or);
  return d.toFlatObject(e, o, function(g) {
    return g !== Error.prototype;
  }, (f) => f !== "isAxiosError"), T.call(o, e.message, t, r, n, s), o.cause = e, o.name = e.name, a && Object.assign(o, a), o;
};
const Zn = null;
function ft(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function ir(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ut(e, t, r) {
  return e ? e.concat(t).map(function(s, a) {
    return s = ir(s), !r && a ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function Yn(e) {
  return d.isArray(e) && !e.some(ft);
}
const Kn = d.toFlatObject(d, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function qe(e, t, r) {
  if (!d.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = d.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, b) {
    return !d.isUndefined(b[v]);
  });
  const n = r.metaTokens, s = r.visitor || c, a = r.dots, o = r.indexes, g = (r.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(t);
  if (!d.isFunction(s))
    throw new TypeError("visitor must be a function");
  function w(p) {
    if (p === null)
      return "";
    if (d.isDate(p))
      return p.toISOString();
    if (!g && d.isBlob(p))
      throw new T("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(p) || d.isTypedArray(p) ? g && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function c(p, v, b) {
    let R = p;
    if (p && !b && typeof p == "object") {
      if (d.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), p = JSON.stringify(p);
      else if (d.isArray(p) && Yn(p) || (d.isFileList(p) || d.endsWith(v, "[]")) && (R = d.toArray(p)))
        return v = ir(v), R.forEach(function(M, fe) {
          !(d.isUndefined(M) || M === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Ut([v], fe, a) : o === null ? v : v + "[]",
            w(M)
          );
        }), !1;
    }
    return ft(p) ? !0 : (t.append(Ut(b, v, a), w(p)), !1);
  }
  const y = [], E = Object.assign(Kn, {
    defaultVisitor: c,
    convertValue: w,
    isVisitable: ft
  });
  function _(p, v) {
    if (!d.isUndefined(p)) {
      if (y.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      y.push(p), d.forEach(p, function(R, N) {
        (!(d.isUndefined(R) || R === null) && s.call(
          t,
          R,
          d.isString(N) ? N.trim() : N,
          v,
          E
        )) === !0 && _(R, v ? v.concat(N) : [N]);
      }), y.pop();
    }
  }
  if (!d.isObject(e))
    throw new TypeError("data must be an object");
  return _(e), t;
}
function zt(e) {
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
function gt(e, t) {
  this._pairs = [], e && qe(e, this, t);
}
const lr = gt.prototype;
lr.append = function(t, r) {
  this._pairs.push([t, r]);
};
lr.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, zt);
  } : zt;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function es(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ur(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || es, s = r && r.serialize;
  let a;
  if (s ? a = s(t, r) : a = d.isURLSearchParams(t) ? t.toString() : new gt(t, r).toString(n), a) {
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
    d.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const jt = ts, cr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, rs = typeof URLSearchParams < "u" ? URLSearchParams : gt, ns = typeof FormData < "u" ? FormData : null, ss = typeof Blob < "u" ? Blob : null, os = {
  isBrowser: !0,
  classes: {
    URLSearchParams: rs,
    FormData: ns,
    Blob: ss
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, fr = typeof window < "u" && typeof document < "u", as = ((e) => fr && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), is = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: fr,
  hasStandardBrowserEnv: as,
  hasStandardBrowserWebWorkerEnv: is
}, Symbol.toStringTag, { value: "Module" })), Y = {
  ...ls,
  ...os
};
function us(e, t) {
  return qe(e, new Y.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, a) {
      return Y.isNode && d.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function cs(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function fs(e) {
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
    const f = Number.isFinite(+o), g = a >= r.length;
    return o = !o && d.isArray(s) ? s.length : o, g ? (d.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !f) : ((!s[o] || !d.isObject(s[o])) && (s[o] = []), t(r, n, s[o], a) && d.isArray(s[o]) && (s[o] = fs(s[o])), !f);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const r = {};
    return d.forEachEntry(e, (n, s) => {
      t(cs(n), s, r, 0);
    }), r;
  }
  return null;
}
function ds(e, t, r) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const wt = {
  transitional: cr,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, a = d.isObject(t);
    if (a && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t))
      return s && s ? JSON.stringify(dr(t)) : t;
    if (d.isArrayBuffer(t) || d.isBuffer(t) || d.isStream(t) || d.isFile(t) || d.isBlob(t))
      return t;
    if (d.isArrayBufferView(t))
      return t.buffer;
    if (d.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let f;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return us(t, this.formSerializer).toString();
      if ((f = d.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const g = this.env && this.env.FormData;
        return qe(
          f ? { "files[]": t } : t,
          g && new g(),
          this.formSerializer
        );
      }
    }
    return a || s ? (r.setContentType("application/json", !1), ds(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || wt.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (t && d.isString(t) && (n && !this.responseType || s)) {
      const o = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (f) {
        if (o)
          throw f.name === "SyntaxError" ? T.from(f, T.ERR_BAD_RESPONSE, this, null, this.response) : f;
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
d.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  wt.headers[e] = {};
});
const _t = wt, ps = d.toObjectSet([
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
}, $t = Symbol("internals");
function _e(e) {
  return e && String(e).trim().toLowerCase();
}
function Le(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(Le) : String(e);
}
function vs(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const hs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function st(e, t, r, n, s) {
  if (d.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!d.isString(t)) {
    if (d.isString(n))
      return t.indexOf(n) !== -1;
    if (d.isRegExp(n))
      return n.test(t);
  }
}
function bs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function ys(e, t) {
  const r = d.toCamelCase(" " + t);
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
    function a(f, g, w) {
      const c = _e(g);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const y = d.findKey(s, c);
      (!y || s[y] === void 0 || w === !0 || w === void 0 && s[y] !== !1) && (s[y || g] = Le(f));
    }
    const o = (f, g) => d.forEach(f, (w, c) => a(w, c, g));
    return d.isPlainObject(t) || t instanceof this.constructor ? o(t, r) : d.isString(t) && (t = t.trim()) && !hs(t) ? o(ms(t), r) : t != null && a(r, t, n), this;
  }
  get(t, r) {
    if (t = _e(t), t) {
      const n = d.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return vs(s);
        if (d.isFunction(r))
          return r.call(this, s, n);
        if (d.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = _e(t), t) {
      const n = d.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || st(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function a(o) {
      if (o = _e(o), o) {
        const f = d.findKey(n, o);
        f && (!r || st(n, n[f], f, r)) && (delete n[f], s = !0);
      }
    }
    return d.isArray(t) ? t.forEach(a) : a(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const a = r[n];
      (!t || st(this, this[a], a, t, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return d.forEach(this, (s, a) => {
      const o = d.findKey(n, a);
      if (o) {
        r[o] = Le(s), delete r[a];
        return;
      }
      const f = t ? bs(a) : String(a).trim();
      f !== a && delete r[a], r[f] = Le(s), n[f] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && d.isArray(n) ? n.join(", ") : n);
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
    const n = (this[$t] = this[$t] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(o) {
      const f = _e(o);
      n[f] || (ys(s, o), n[f] = !0);
    }
    return d.isArray(t) ? t.forEach(a) : a(t), this;
  }
}
Je.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(Je.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
d.freezeMethods(Je);
const re = Je;
function ot(e, t) {
  const r = this || _t, n = t || r, s = re.from(n.headers);
  let a = n.data;
  return d.forEach(e, function(f) {
    a = f.call(r, a, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), a;
}
function pr(e) {
  return !!(e && e.__CANCEL__);
}
function Ee(e, t, r) {
  T.call(this, e ?? "canceled", T.ERR_CANCELED, t, r), this.name = "CanceledError";
}
d.inherits(Ee, T, {
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
      write: function(r, n, s, a, o, f) {
        const g = [];
        g.push(r + "=" + encodeURIComponent(n)), d.isNumber(s) && g.push("expires=" + new Date(s).toGMTString()), d.isString(a) && g.push("path=" + a), d.isString(o) && g.push("domain=" + o), f === !0 && g.push("secure"), document.cookie = g.join("; ");
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
function mr(e, t) {
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
      const f = d.isString(o) ? s(o) : o;
      return f.protocol === n.protocol && f.host === n.host;
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
function Ht(e, t) {
  let r = 0;
  const n = Os(50, 250);
  return (s) => {
    const a = s.loaded, o = s.lengthComputable ? s.total : void 0, f = a - r, g = n(f), w = a <= o;
    r = a;
    const c = {
      loaded: a,
      total: o,
      progress: o ? a / o : void 0,
      bytes: f,
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
    let f;
    function g() {
      e.cancelToken && e.cancelToken.unsubscribe(f), e.signal && e.signal.removeEventListener("abort", f);
    }
    let w;
    if (d.isFormData(s)) {
      if (Y.hasStandardBrowserEnv || Y.hasStandardBrowserWebWorkerEnv)
        a.setContentType(!1);
      else if ((w = a.getContentType()) !== !1) {
        const [p, ...v] = w ? w.split(";").map((b) => b.trim()).filter(Boolean) : [];
        a.setContentType([p || "multipart/form-data", ...v].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(p + ":" + v));
    }
    const y = mr(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), ur(y, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
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
      let v = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const b = e.transitional || cr;
      e.timeoutErrorMessage && (v = e.timeoutErrorMessage), n(new T(
        v,
        b.clarifyTimeoutError ? T.ETIMEDOUT : T.ECONNABORTED,
        e,
        c
      )), c = null;
    }, Y.hasStandardBrowserEnv) {
      const p = Cs(y) && e.xsrfCookieName && ws.read(e.xsrfCookieName);
      p && a.set(e.xsrfHeaderName, p);
    }
    s === void 0 && a.setContentType(null), "setRequestHeader" in c && d.forEach(a.toJSON(), function(v, b) {
      c.setRequestHeader(b, v);
    }), d.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), o && o !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", Ht(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", Ht(e.onUploadProgress)), (e.cancelToken || e.signal) && (f = (p) => {
      c && (n(!p || p.type ? new Ee(null, e, c) : p), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(f), e.signal && (e.signal.aborted ? f() : e.signal.addEventListener("abort", f)));
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
d.forEach(dt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Mt = (e) => `- ${e}`, xs = (e) => d.isFunction(e) || e === null || e === !1, vr = {
  getAdapter: (e) => {
    e = d.isArray(e) ? e : [e];
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
        ([f, g]) => `adapter ${f} ` + (g === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? a.length > 1 ? `since :
` + a.map(Mt).join(`
`) : " " + Mt(a[0]) : "as no adapter specified";
      throw new T(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: dt
};
function at(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ee(null, e);
}
function Vt(e) {
  return at(e), e.headers = re.from(e.headers), e.data = ot.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), vr.getAdapter(e.adapter || _t.adapter)(e).then(function(n) {
    return at(e), n.data = ot.call(
      e,
      e.transformResponse,
      n
    ), n.headers = re.from(n.headers), n;
  }, function(n) {
    return pr(n) || (at(e), n && n.response && (n.response.data = ot.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = re.from(n.response.headers))), Promise.reject(n);
  });
}
const qt = (e) => e instanceof re ? e.toJSON() : e;
function ve(e, t) {
  t = t || {};
  const r = {};
  function n(w, c, y) {
    return d.isPlainObject(w) && d.isPlainObject(c) ? d.merge.call({ caseless: y }, w, c) : d.isPlainObject(c) ? d.merge({}, c) : d.isArray(c) ? c.slice() : c;
  }
  function s(w, c, y) {
    if (d.isUndefined(c)) {
      if (!d.isUndefined(w))
        return n(void 0, w, y);
    } else
      return n(w, c, y);
  }
  function a(w, c) {
    if (!d.isUndefined(c))
      return n(void 0, c);
  }
  function o(w, c) {
    if (d.isUndefined(c)) {
      if (!d.isUndefined(w))
        return n(void 0, w);
    } else
      return n(void 0, c);
  }
  function f(w, c, y) {
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
    validateStatus: f,
    headers: (w, c) => s(qt(w), qt(c), !0)
  };
  return d.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const y = g[c] || s, E = y(e[c], t[c], c);
    d.isUndefined(E) && y !== f || (r[c] = E);
  }), r;
}
const hr = "1.6.1", St = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  St[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Jt = {};
St.transitional = function(t, r, n) {
  function s(a, o) {
    return "[Axios v" + hr + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "");
  }
  return (a, o, f) => {
    if (t === !1)
      throw new T(
        s(o, " has been removed" + (r ? " in " + r : "")),
        T.ERR_DEPRECATED
      );
    return r && !Jt[o] && (Jt[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(a, o, f) : !0;
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
      const f = e[a], g = f === void 0 || o(f, a, e);
      if (g !== !0)
        throw new T("option " + a + " must be " + g, T.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new T("Unknown option " + a, T.ERR_BAD_OPTION);
  }
}
const pt = {
  assertOptions: As,
  validators: St
}, se = pt.validators;
class je {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new jt(),
      response: new jt()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ve(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: a } = r;
    n !== void 0 && pt.assertOptions(n, {
      silentJSONParsing: se.transitional(se.boolean),
      forcedJSONParsing: se.transitional(se.boolean),
      clarifyTimeoutError: se.transitional(se.boolean)
    }, !1), s != null && (d.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : pt.assertOptions(s, {
      encode: se.function,
      serialize: se.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = a && d.merge(
      a.common,
      a[r.method]
    );
    a && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete a[p];
      }
    ), r.headers = re.concat(o, a);
    const f = [];
    let g = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (g = g && v.synchronous, f.unshift(v.fulfilled, v.rejected));
    });
    const w = [];
    this.interceptors.response.forEach(function(v) {
      w.push(v.fulfilled, v.rejected);
    });
    let c, y = 0, E;
    if (!g) {
      const p = [Vt.bind(this), void 0];
      for (p.unshift.apply(p, f), p.push.apply(p, w), E = p.length, c = Promise.resolve(r); y < E; )
        c = c.then(p[y++], p[y++]);
      return c;
    }
    E = f.length;
    let _ = r;
    for (y = 0; y < E; ) {
      const p = f[y++], v = f[y++];
      try {
        _ = p(_);
      } catch (b) {
        v.call(this, b);
        break;
      }
    }
    try {
      c = Vt.call(this, _);
    } catch (p) {
      return Promise.reject(p);
    }
    for (y = 0, E = w.length; y < E; )
      c = c.then(w[y++], w[y++]);
    return c;
  }
  getUri(t) {
    t = ve(this.defaults, t);
    const r = mr(t.baseURL, t.url);
    return ur(r, t.params, t.paramsSerializer);
  }
}
d.forEach(["delete", "get", "head", "options"], function(t) {
  je.prototype[t] = function(r, n) {
    return this.request(ve(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(a, o, f) {
      return this.request(ve(f || {}, {
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
class Ct {
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
      const o = new Promise((f) => {
        n.subscribe(f), a = f;
      }).then(s);
      return o.cancel = function() {
        n.unsubscribe(a);
      }, o;
    }, t(function(a, o, f) {
      n.reason || (n.reason = new Ee(a, o, f), r(n.reason));
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
      token: new Ct(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Ns = Ct;
function Ps(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Fs(e) {
  return d.isObject(e) && e.isAxiosError === !0;
}
const mt = {
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
Object.entries(mt).forEach(([e, t]) => {
  mt[t] = e;
});
const ks = mt;
function br(e) {
  const t = new Ie(e), r = Zt(Ie.prototype.request, t);
  return d.extend(r, Ie.prototype, t, { allOwnKeys: !0 }), d.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return br(ve(e, s));
  }, r;
}
const L = br(_t);
L.Axios = Ie;
L.CanceledError = Ee;
L.CancelToken = Ns;
L.isCancel = pr;
L.VERSION = hr;
L.toFormData = qe;
L.AxiosError = T;
L.Cancel = L.CanceledError;
L.all = function(t) {
  return Promise.all(t);
};
L.spread = Ps;
L.isAxiosError = Fs;
L.mergeConfig = ve;
L.AxiosHeaders = re;
L.formToJSON = (e) => dr(d.isHTMLForm(e) ? new FormData(e) : e);
L.getAdapter = vr.getAdapter;
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
    const t = e, { format: r, label: n, title: s, url: a } = ue(t), o = x(), f = x(!1), g = x(), w = (v) => {
      var b;
      v && (!v.target || (b = g.value) != null && b.contains(v.target)) || (f.value = !1, window.removeEventListener("mouseup", w));
    }, c = (v) => v.map(({ name: b, valueFormatted: R }) => ({
      label: b,
      value: R
    })), y = (v) => v.map(({ name: b, rate: R, value: N }) => ({
      label: b,
      value: `${oe(N).format("0,0")} (${oe(R).format("0,0.00")}%)`
    })), E = (v) => {
      switch (r.value) {
        case "distribution":
          return c(v);
        case "rated_distribution":
          return y(v);
        default:
          throw new Error(`Unsupported format: ${r.value}`);
      }
    }, _ = async () => {
      if (window.addEventListener("mouseup", w), o.value)
        return;
      const v = (await $e(a.value)).data;
      o.value = E(v);
    }, p = async () => {
      f.value = !0, await _();
    };
    return (v, b) => (C(), F("div", {
      class: q(["cell-hint", { visible: f.value }]),
      ref_key: "root",
      ref: g,
      onMouseover: b[1] || (b[1] = () => p()),
      onMouseout: b[2] || (b[2] = () => w())
    }, [
      j("span", {
        class: "label",
        onClick: b[0] || (b[0] = Ue(() => p(), ["stop"]))
      }, A(h(n)), 1),
      I(bt, {
        visible: f.value,
        parentClass: "cell",
        popoverClass: "cell-hint-popover"
      }, {
        default: O(() => [
          h(s) ? (C(), F("div", Ls, A(h(s)), 1)) : D("", !0),
          o.value ? (C(), F("div", Is, [
            (C(!0), F(G, null, vt(o.value, ({ label: R, value: N }, M) => (C(), F("div", {
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
const Wt = /* @__PURE__ */ ce(js, [["__scopeId", "data-v-9c7f570a"]]), $s = (e) => (Gt("data-v-7a1d1810"), e = e(), Xt(), e), Hs = { class: "column-hint" }, Ms = /* @__PURE__ */ $s(() => /* @__PURE__ */ j("i", { class: "la la-question-circle" }, null, -1)), Vs = { class: "popover-header" }, qs = { class: "popover-body" }, Js = /* @__PURE__ */ le({
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
      I(bt, {
        visible: h(s),
        parentClass: "cell",
        popoverClass: "column-hint-popover"
      }, {
        default: O(() => [
          j("div", Vs, A(h(n)), 1),
          j("div", qs, A(h(r)), 1)
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
    const t = e, { autoPosition: r, parentNode: n, popoverClass: s, visible: a } = ue(t), o = x(), f = x(), g = x(), w = U(() => ({
      [(s == null ? void 0 : s.value) ?? ""]: !!s,
      visible: a.value
    })), c = U(() => {
      if (!(!r.value || o.value === void 0 || g.value === void 0))
        return {
          left: `${o.value}px`,
          top: `${g.value}px`
        };
    }), y = () => {
      if (!f.value || !(n != null && n.value))
        return;
      const _ = n.value.getBoundingClientRect();
      o.value = 0, g.value = 0, ze(() => {
        const p = _.left, v = _.top + document.documentElement.scrollTop, b = f.value.$el.offsetWidth, R = (b - _.width) / 2;
        _.left - R < 0 ? o.value = p : _.left + R + _.width > document.body.clientWidth ? o.value = p - b + _.width : o.value = p - R;
        const N = f.value.$el.offsetHeight;
        _.bottom + N > document.body.clientHeight ? g.value = v - N : g.value = v + _.height;
      });
    }, E = r != null && r.value ? new ResizeObserver(() => y()) : void 0;
    return lt(
      a,
      (_) => {
        !(r != null && r.value) || !E || (E.disconnect(), _ && ze(() => {
          y(), E.observe(f.value.$el);
        }));
      },
      {
        immediate: !0
      }
    ), (_, p) => (C(), P(tn, { to: "#app > .app-container" }, [
      I(cn, {
        class: q(["no-spacing popover", w.value]),
        ref_key: "popover",
        ref: f,
        style: rn(c.value)
      }, {
        default: O(() => [
          ut(_.$slots, "default", {}, void 0, !0)
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
    const r = e, { labels: n, open: s, title: a } = ue(r), o = x(!1), f = x(), g = x(), w = (E) => {
      var _, p;
      !E.target || (_ = g.value) != null && _.contains(E.target) || (p = f.value) != null && p.$el.contains(E.target) || (o.value = !1, window.removeEventListener("mouseup", w));
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
      I(fn, {
        class: "details-selector",
        vertical: "center"
      }, {
        default: O(() => [
          h(a) ? (C(), P(B, {
            key: 0,
            mood: "important-alt",
            size: "small"
          }, {
            default: O(() => [
              k(A(h(a)), 1)
            ]),
            _: 1
          })) : D("", !0),
          I(dn, {
            value: h(s) ? "chevron-up" : "chevron-down",
            mood: "important-alt",
            size: "large-2"
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      I(Xs, {
        ref_key: "popover",
        ref: f,
        parentNode: g.value,
        visible: o.value,
        autoPosition: "",
        popoverClass: "details-selector-popover"
      }, {
        default: O(() => [
          (C(!0), F(G, null, vt(h(n), (p, v) => (C(), P(B, {
            class: "dropdown-item",
            onClick: Ue(() => y(v), ["stop"]),
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
    const r = e, { currentPageSize: n, id: s, pageNumber: a, pageRadius: o, pageSizeLabel: f, pageSizes: g, rowCount: w } = ue(r), c = U(() => Math.min(...g.value)), y = U(() => Math.ceil(w.value / n.value)), E = U(
      () => g.value.reduce((v, b) => (v[b] = b.toString(), v), {})
    ), _ = U(() => {
      const v = [];
      for (let b = o.value - 1; b > 0; b--)
        a.value > b && v.push(a.value - b);
      v.push(a.value);
      for (let b = 1; b < o.value; b++)
        a.value < y.value - b - 1 && v.push(a.value + b);
      return v;
    }), p = (v) => {
      n.value !== v && t("update:currentPageSize", v);
    };
    return (v, b) => (C(), F("div", Ys, [
      h(w) > h(n) ? (C(), F(G, { key: 0 }, [
        h(a) > 0 ? (C(), P(B, {
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
        h(a) > h(o) ? (C(), P(B, {
          key: 1,
          class: "page-separator"
        }, {
          default: O(() => [
            k("…")
          ]),
          _: 1
        })) : D("", !0),
        (C(!0), F(G, null, vt(_.value, (R) => (C(), F("div", {
          class: q(["page", { current: R === h(a) }]),
          onClick: () => t("update:pageNumber", R),
          key: R
        }, A(R + 1), 11, Ks))), 128)),
        h(a) < y.value - h(o) - 1 ? (C(), P(B, {
          key: 2,
          class: "page-separator"
        }, {
          default: O(() => [
            k("…")
          ]),
          _: 1
        })) : D("", !0),
        h(a) < y.value - 1 ? (C(), P(B, {
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
            k(A(h(f)), 1)
          ]),
          _: 1
        })
      ], 64)) : D("", !0),
      h(w) > c.value ? (C(), P(Qt, {
        key: 1,
        class: "page-size-selector",
        "onUpdate:modelValue": b[2] || (b[2] = (R) => p(parseInt(R.toString()))),
        id: h(s),
        items: E.value,
        modelValue: h(n)
      }, {
        item: O(({ item: R }) => [
          k(A(R), 1)
        ]),
        _: 1
      }, 8, ["id", "items", "modelValue"])) : D("", !0)
    ]));
  }
});
const to = /* @__PURE__ */ ce(eo, [["__scopeId", "data-v-764cc1be"]]), ro = (e) => (Gt("data-v-b4f986aa"), e = e(), Xt(), e), no = /* @__PURE__ */ ro(() => /* @__PURE__ */ j("i", { class: "la la-eye secondary" }, null, -1)), so = /* @__PURE__ */ le({
  __name: "TrendChart",
  props: {
    formatter: { type: Function },
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { formatter: r, title: n, url: s } = ue(t), a = x(!1), o = x([]), f = x(), g = U(() => f.value ? Object.assign({}, f.value) : {}), w = U(() => {
      var b;
      switch ((b = f.value) == null ? void 0 : b.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return f.value[0];
        default:
          return f.value.slice(f.value.length / 2).reduce((R, N) => R + N, 0) / Math.ceil(f.value.length / 2);
      }
    }), c = U(() => {
      var b;
      switch ((b = f.value) == null ? void 0 : b.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return f.value[0];
        default:
          return f.value.slice(0, f.value.length / 2).reduce((R, N) => R + N, 0) / Math.floor(f.value.length / 2);
      }
    }), y = U(() => c.value > w.value ? "negative" : c.value < w.value ? "positive" : "neutral"), E = U(() => {
      if (!f.value)
        return {};
      const b = new Array(f.value.length).fill(0).map(
        (R, N) => c.value + (w.value - c.value) * N / (f.value.length - 1)
      );
      return Object.assign({}, b);
    }), _ = async () => {
      if (!f.value)
        return;
      const b = (await $e({ url: s.value })).data;
      o.value = Object.keys(b), f.value = Object.values(b);
    }, p = () => {
      a.value = !1, window.removeEventListener("mouseup", p);
    }, v = async () => {
      a.value = !0, window.addEventListener("mouseup", p), await _();
    };
    return (b, R) => (C(), F("div", {
      class: "trend-chart-container",
      onClick: R[0] || (R[0] = Ue(() => v(), ["stop"]))
    }, [
      no,
      I(bt, {
        visible: a.value,
        parentClass: "cell",
        popoverClass: "trend-chart-popover"
      }, {
        default: O(() => [
          h(n) ? (C(), P(hn, {
            key: 0,
            size: "small-3"
          }, {
            default: O(() => [
              k(A(h(n)), 1)
            ]),
            _: 1
          })) : D("", !0),
          f.value ? (C(), P(un, {
            key: 1,
            activeLines: ["values"],
            formatters: { trend: h(r), values: h(r) },
            moods: { trend: { mood: y.value }, values: { mood: "important" } },
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
const oo = /* @__PURE__ */ ce(so, [["__scopeId", "data-v-b4f986aa"]]), ao = { class: "common-table" }, io = {
  key: 0,
  class: "controls d-flex justify-content-end mb-1"
}, lo = ["onMouseover", "onMouseout"], uo = ["href"], co = ["href"], fo = ["onClick"], it = 50, po = /* @__PURE__ */ le({
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
      clientCurrencySymbol: f,
      clientCurrencySymbolPrefix: g,
      colorMetrics: w,
      columns: c,
      columnDetails: y,
      columnLinks: E,
      comparisonColumns: _,
      defaultOrderBy: p,
      detailsColumn: v,
      detailsRequests: b,
      dragColumns: R,
      fixedColumnNumber: N,
      inlineFilterOperators: M,
      inversedKpis: fe,
      primaryColumn: $,
      primaryColumnAlias: de,
      request: Oe,
      rows: Re,
      shortenColumns: X,
      showInlineFilters: We,
      showRowNumber: yr,
      showPagination: gr,
      showTopTotal: wr,
      total: Te,
      totalColumnKey: _r,
      trendUrl: Ge
    } = ue(r), Xe = () => {
      const i = {};
      for (const u of Object.keys(c.value))
        u in M.value && (i[u] = {
          operator: Object.keys(M.value[u])[0],
          value: ""
        });
      return i;
    }, xe = x([]), ae = x({}), be = x([]), Et = x({}), Ae = x([]), pe = x({}), Qe = x(!1), ye = x(!1), Ne = x([]), Pe = x(!1), Q = x(Xe()), ge = x(!0), Z = x(), ne = x(0), ie = x(20), Fe = x(0), W = x(), ee = x(), Sr = U(() => {
      const i = {};
      return ye.value && (i.inline_filters = {
        icon: "filter"
      }), i;
    }), Cr = U(
      () => _ != null && _.value ? Object.keys(_.value) : void 0
    ), Er = U(
      () => Ae.value.reduce((i, u) => (i[u] = Ds(c.value[u]), i), {})
    ), Ot = U(() => {
      if (b != null && b.value)
        return Object.entries(b.value).reduce((i, [u, { label: l }]) => (i[u] = l, i), {});
    }), Rt = U(() => [...xe.value].sort((i, u) => {
      const l = (() => {
        const m = Ye(
          Z.value[0].reduce((z, te) => z[te], i),
          c.value[Z.value[0][0]].type
        ), S = Ye(
          Z.value[0].reduce((z, te) => z[te], u),
          c.value[Z.value[0][0]].type
        );
        return m > S ? 1 : m < S ? -1 : 0;
      })();
      return Z.value[1] ? -l : l;
    })), Tt = U(() => !Oe.value || Pe.value ? Rt.value : Rt.value.slice(
      ne.value * ie.value,
      (ne.value + 1) * ie.value
    )), Or = (i) => {
      be.value.includes(i) || be.value.push(i);
    }, ke = (i, u) => !X.value || !X.value.includes(i) ? !1 : u.length > it, Rr = (i) => !!i.tooltipTitle && !!i.tooltipDescription, Tr = (i, u) => {
      var m;
      const l = ((m = fe == null ? void 0 : fe.value) == null ? void 0 : m.includes(u)) ?? !1;
      return i > 0 ? l ? "negative" : "positive" : i < 0 ? l ? "positive" : "negative" : "neutral";
    }, xt = (i, u, l) => {
      if (W.value)
        return V(
          W.value[i][u],
          _.value[u].type ?? c.value[i].type,
          l
        );
    }, V = (i, u, l) => {
      let m = Ye(i, u);
      switch (u) {
        case "float":
          return oe(parseFloat(m)).format("0,0.00");
        case "int":
          return oe(parseInt(m)).format("0,0");
        case "money": {
          let S = "0,0";
          o.value > 0 && (S += "." + "0".repeat(o.value));
          const z = oe(parseFloat(m)).format(S);
          return g.value ? f.value + " " + z : z + " " + f.value;
        }
        case "money_capped": {
          const S = parseFloat(m.toFixed(o.value)) == 0;
          if (m > 0 && m < 1 && S) {
            const z = o.value === 0 ? 1 : parseFloat("0." + "0".repeat(o.value - 1) + "1");
            return g.value ? `< ${f.value} ${z}` : `< ${z} ${f.value}`;
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
        primaryColumn: (de == null ? void 0 : de.value) ?? $.value,
        primaryColumnValue: u[$.value]
      });
      return ae.value[i] || (ae.value[i] = {}), ae.value[i][u[$.value]] = Object.values(l), ae.value[i][u[$.value]];
    }, At = (i, u) => {
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
    }, Ze = (i) => M.value[i], Br = (i) => {
      const u = Ze(i);
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
      const u = Ze(i);
      return u ? Object.entries(u).reduce((l, [m, S]) => (l[m] = S.label, l), {}) : {};
    }, Lr = (i) => c.value[i].type === "string" ? "text" : "number", Nt = () => `Table_OrderBy_${location.pathname}`, Ir = () => `Table_PageSize_${location.pathname}`, Ye = (i, u) => {
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
      if (!Ge)
        return "";
      const l = new URL(
        u ? Ge.value[u] : Ge.value,
        location.origin
      );
      return l.searchParams.set((de == null ? void 0 : de.value) ?? $.value, i[$.value]), l.toString();
    }, Be = (i, u, l) => ke(i, u) ? [] : l ? (v == null ? void 0 : v.value) === i ? ["flex-grow-1", "text-left"] : X.value && X.value.includes(i) && Tt.value.some((m) => ke(i, m[i])) ? ["flex-grow-1", "text-left"] : ["flex-grow-1"] : ["flew-grow-1"], zr = (i) => i in M.value, jr = () => {
      We.value && (Qe.value = !1);
    }, Pt = (i, u) => !(!(E != null && E.value) || !(u in E.value) || "disable_for" in E.value[u] && E.value[u].disable_for.includes(i[$.value])), $r = (i, u) => {
      const [l] = Ae.value.splice(i, 1);
      Ae.value.splice(u, 0, l), t("move:column", { from: i, to: u });
    }, Hr = (i) => {
      const u = be.value.indexOf(i);
      u < 0 || be.value.splice(u, 1);
    }, Ft = (i, u) => {
      Et.value[i] = u;
    }, we = (i, u) => !X.value || !X.value.includes(u) || i.length <= it ? i : `${i.substring(0, it - 3)}...`, Mr = (i) => {
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
      Bt(u, { value: l });
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
      await Xr(i) || await Gr(i) || await Dt(i);
    }, Ke = async (i) => {
      await et(i), ne.value = i;
    }, kt = async (i) => {
      const u = Ir();
      if (i === void 0) {
        const l = localStorage.getItem(u);
        l && (ie.value = parseInt(l));
      } else
        localStorage.setItem(u, i.toString()), await et(0, i), ne.value = 0, ie.value = i;
    }, Bt = (i, { operator: u, value: l }) => {
      if (u || (u = Object.keys(Ze(i))[0]), !u)
        return;
      const m = {
        ...Q.value[i],
        operator: u
      };
      l !== void 0 && (m.value = l), Q.value[i] = m, Ke(0);
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
    }, Dt = async (i) => {
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
      const u = localStorage.getItem(Nt());
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
    }, et = async (i, u, l) => {
      i === void 0 && (i = ne.value), u === void 0 && (u = ie.value), l === void 0 && (l = Z.value), ge.value = !0, Zr() || await Qr(ne.value, ie.value, Z.value), ge.value = !1;
    }, Yr = () => {
      We.value && (Qe.value = !0);
    }, Kr = (i) => {
      if (!X.value || !X.value.includes(i))
        return;
      const u = Pr(i);
      u >= 0 ? Ne.value.splice(u, 1) : Ne.value.push(i);
    }, en = () => {
      ye.value = !ye.value, ye.value && (Q.value = Xe());
    }, me = async (i, u = !0, l = !0) => {
      ne.value = 0, l && await et(void 0, void 0, i), Z.value = i, u && localStorage.setItem(Nt(), JSON.stringify(i));
    };
    return sn(() => {
      Ae.value = Object.keys(c.value), W.value = Te == null ? void 0 : Te.value, Promise.all([Dt(!1), kt()]).then(() => Wr(!0));
    }), lt(c, () => {
      Q.value = Xe();
    }), lt(
      Oe,
      () => {
        Pe.value = !1, Ke(0);
      },
      { deep: !0 }
    ), (i, u) => (C(), F("div", ao, [
      h(gr) ? (C(), F("div", io, [
        I(to, {
          "onUpdate:pageNumber": u[0] || (u[0] = (l) => Ke(l)),
          "onUpdate:currentPageSize": u[1] || (u[1] = (l) => kt(l)),
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
          class: q(["action-buttons", { active: Qe.value }])
        }, [
          h(We) ? (C(), F("button", {
            key: 0,
            class: "btn btn-small btn-success",
            onClick: u[2] || (u[2] = () => en())
          }, [
            j("div", {
              class: q(["las", ye.value ? "la-trash" : "la-filter"])
            }, null, 2)
          ])) : D("", !0)
        ], 2),
        Z.value ? (C(), P(vn, {
          key: 0,
          ref_key: "table",
          ref: ee,
          onAddColoredMetric: u[3] || (u[3] = (l) => Or(l)),
          "onMove:column": u[4] || (u[4] = ({ from: l, to: m }) => $r(l, m)),
          onRemoveColoredMetric: u[5] || (u[5] = (l) => Hr(l)),
          "onUpdate:orderBy": u[6] || (u[6] = (l) => me(l)),
          additionalHeaders: Sr.value,
          cellClasses: h(a),
          colorMetrics: h(w),
          coloredMetrics: be.value,
          columns: Er.value,
          comparisonColumnKeys: Cr.value,
          detailsRows: pe.value,
          dragColumns: h(R),
          fixedColumnNumber: h(N),
          inversedKpis: h(fe),
          orderBy: Z.value,
          primaryColumn: h($),
          rows: Tt.value,
          showRowNumber: h(yr),
          showTotal: !!W.value,
          showTopTotal: h(wr)
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
              onMouseover: () => Ft(l, !0),
              onMouseout: () => Ft(l, !1)
            }, [
              I(B, {
                contrast: "",
                size: "small"
              }, {
                default: O(() => [
                  k(A(h(c)[l].label), 1)
                ]),
                _: 2
              }, 1024),
              !m && Rr(h(c)[l]) ? (C(), P(Ws, {
                key: 0,
                description: h(c)[l].tooltipDescription,
                title: h(c)[l].tooltipTitle,
                visible: Et.value[l]
              }, null, 8, ["description", "title", "visible"])) : D("", !0)
            ], 40, lo)
          ]),
          row: O(({ columnKey: l, index: m, row: S, spanIndex: z, subcolumnKey: te, subindex: tt, value: H }) => [
            ut(i.$slots, "row", an(ln({
              columnKey: l,
              index: m,
              row: S,
              spanIndex: z,
              subcolumnKey: te,
              subindex: tt,
              value: H
            })), () => [
              tt === void 0 && l === "trend" ? (C(), P(oo, {
                key: 0,
                class: q(Be(l, H, S.rowInfo.detailable)),
                formatter: (rt) => V(rt, "int"),
                title: i.trendChartTitle,
                url: Ur(S, te)
              }, null, 8, ["class", "formatter", "title", "url"])) : S.rowInfo.detailable && l === h(v) ? (C(), F(G, { key: 1 }, [
                Pt(S, l) && S.rowInfo.detailable ? (C(), P(B, {
                  key: 0,
                  class: q(Be(l, H, S.rowInfo.detailable)),
                  contrast: "",
                  size: "small"
                }, {
                  default: O(() => [
                    j("a", {
                      class: "column-link",
                      href: At(h(E)[l], S).toString()
                    }, A(we(V(H, h(c)[l].type), l)), 9, uo)
                  ]),
                  _: 2
                }, 1032, ["class"])) : (C(), P(B, {
                  key: 1,
                  contrast: "",
                  size: "small"
                }, {
                  default: O(() => [
                    k(A(V(H, h(c)[l].type)), 1)
                  ]),
                  _: 2
                }, 1024))
              ], 64)) : Pt(S, l) && S.rowInfo.detailable ? (C(), P(B, {
                key: 2,
                class: q(Be(l, H, S.rowInfo.detailable)),
                contrast: "",
                size: "small"
              }, {
                default: O(() => [
                  j("a", {
                    class: "column-link",
                    href: At(h(E)[l], S).toString()
                  }, A(we(V(H, h(c)[l].type), l)), 9, co)
                ]),
                _: 2
              }, 1032, ["class"])) : tt === void 0 && H >= 0.01 && l in h(y) ? (C(), P(Wt, {
                key: 3,
                format: h(y)[l].format,
                label: we(V(H, h(c)[l].type), l),
                title: h(y)[l].title,
                url: Ar(l, S)
              }, null, 8, ["format", "label", "title", "url"])) : (C(), P(B, {
                key: 4,
                class: q(Be(l, H, S.rowInfo.detailable)),
                contrast: "",
                size: "small"
              }, {
                default: O(() => [
                  k(A(we(V(H, h(c)[l].type), l)), 1)
                ]),
                _: 2
              }, 1032, ["class"])),
              ke(l, H) ? (C(), F("i", {
                key: 5,
                class: q(["flex-grow-1 expand-column fa", Ne.value.includes(l) ? "fa-compress-alt" : "fa-expand-alt"]),
                onClick: () => Kr(l)
              }, null, 10, fo)) : D("", !0),
              Ot.value && S.rowInfo.detailable && l === h(v) ? (C(), F(G, { key: 6 }, [
                ke(l, H) ? D("", !0) : (C(), P(mn, { key: 0 })),
                I(Zs, {
                  onHideDetails: () => Mr(S),
                  onShowDetails: (rt) => Jr(rt, S),
                  labels: Ot.value,
                  open: pe.value[S[h($)]] !== void 0,
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
              I(Qt, {
                class: "inline-filter-dropdown",
                "onUpdate:modelValue": (S) => Bt(m, { operator: S.toString() }),
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
            ut(i.$slots, h(Te), {
              columnKey: l,
              subcolumnKey: m,
              values: S
            }, () => [
              i.totalTitle && l === h(_r) ? (C(), P(B, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: O(() => [
                  k(A(i.totalTitle(Fe.value ?? xe.value.length)), 1)
                ]),
                _: 1
              })) : W.value ? (C(), F(G, { key: 1 }, [
                m && h(_) && h(_)[m].format === "difference" ? (C(), P(B, {
                  key: 0,
                  mood: Tr(W.value[l][m], l),
                  contrast: "",
                  size: "small"
                }, {
                  default: O(() => [
                    k(A(xt(l, m, h(_)[m].format)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"])) : W.value && W.value[l] >= 0.01 && l in h(y) ? (C(), P(Wt, {
                  key: 1,
                  format: h(y)[l].format,
                  label: we(V(W.value[l], h(c)[l].type, h(_) && m ? h(_)[m].format : void 0), l),
                  title: h(y)[l].title,
                  url: Nr(h(y)[l])
                }, null, 8, ["format", "label", "title", "url"])) : l !== "trend" ? (C(), P(B, {
                  key: 2,
                  contrast: "",
                  size: "small"
                }, {
                  default: O(() => [
                    m ? (C(), F(G, { key: 0 }, [
                      k(A(xt(l, m, h(_) ? h(_)[m].format : void 0)), 1)
                    ], 64)) : (C(), F(G, { key: 1 }, [
                      k(A(V(W.value[l], h(c)[l].type)), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024)) : D("", !0)
              ], 64)) : D("", !0)
            ], !0)
          ]),
          _: 2
        }, [
          h(_) ? {
            name: "secondaryColumn",
            fn: O(({ subcolumnKey: l }) => [
              l ? (C(), P(B, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: O(() => [
                  k(A(h(_)[l].label), 1)
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
const xo = /* @__PURE__ */ ce(po, [["__scopeId", "data-v-861a659b"]]);
export {
  xo as CommonTable
};
