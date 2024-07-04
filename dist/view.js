import { defineComponent as Se, toRefs as Ce, ref as k, openBlock as w, createElementBlock as j, normalizeClass as X, createElementVNode as G, toDisplayString as F, unref as y, createVNode as R, withCtx as S, Fragment as J, renderList as _e, createBlock as B, onUnmounted as fr, withModifiers as wt, createTextVNode as P, createCommentVNode as $, computed as I, onMounted as dr, watch as Ue, createSlots as pr, renderSlot as Gt, normalizeProps as vr, guardReactiveProps as mr, nextTick as Xt, Teleport as hr, normalizeStyle as br } from "vue";
import he from "numeral";
import { A as Y, I as Me, C as gr } from "./Icon-1e0f2d3b.js";
import { D as cn, B as _t, I as fn } from "./Input-d1741c6c.js";
import { L as Rt, a as yr } from "./LineBarChart-00a63364.js";
import { _ as Tt, T as wr } from "./Tooltip.vue_vue_type_style_index_0_lang-9e7d51f8.js";
import { _ as Oe } from "./_plugin-vue_export-helper-dad06003.js";
import { I as z } from "./Info-1836ec0c.js";
import { B as _r } from "./BodyPopover-a7c12394.js";
import { L as Yt } from "./Link-194344f3.js";
import { Separator as Sr } from "./marker.js";
import { Header as Ve } from "./label.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "./datetime-31a2b505.js";
import "./popper-1247c27c.js";
function dn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Cr } = Object.prototype, { getPrototypeOf: At } = Object, et = ((e) => (t) => {
  const n = Cr.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ae = (e) => (e = e.toLowerCase(), (t) => et(t) === e), tt = (e) => (t) => typeof t === e, { isArray: Fe } = Array, $e = tt("undefined");
function Or(e) {
  return e !== null && !$e(e) && e.constructor !== null && !$e(e.constructor) && ee(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const pn = ae("ArrayBuffer");
function Er(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && pn(e.buffer), t;
}
const xr = tt("string"), ee = tt("function"), vn = tt("number"), nt = (e) => e !== null && typeof e == "object", Rr = (e) => e === !0 || e === !1, Xe = (e) => {
  if (et(e) !== "object")
    return !1;
  const t = At(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Tr = ae("Date"), Ar = ae("File"), kr = ae("Blob"), Nr = ae("FileList"), Pr = (e) => nt(e) && ee(e.pipe), Fr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ee(e.append) && ((t = et(e)) === "formdata" || // detect form-data instance
  t === "object" && ee(e.toString) && e.toString() === "[object FormData]"));
}, Lr = ae("URLSearchParams"), Dr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function He(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Fe(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), l = o.length;
    let f;
    for (r = 0; r < l; r++)
      f = o[r], t.call(null, e[f], f, e);
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
function St() {
  const { caseless: e } = bn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && mn(t, s) || s;
    Xe(t[o]) && Xe(r) ? t[o] = St(t[o], r) : Xe(r) ? t[o] = St({}, r) : Fe(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && He(arguments[r], n);
  return t;
}
const Br = (e, t, n, { allOwnKeys: r } = {}) => (He(t, (s, o) => {
  n && ee(s) ? e[o] = dn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), jr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), zr = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ir = (e, t, n, r) => {
  let s, o, l;
  const f = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      l = s[o], (!r || r(l, e, t)) && !f[l] && (t[l] = e[l], f[l] = !0);
    e = n !== !1 && At(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Ur = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Mr = (e) => {
  if (!e)
    return null;
  if (Fe(e))
    return e;
  let t = e.length;
  if (!vn(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Vr = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && At(Uint8Array)), $r = (e, t) => {
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
), Qt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Wr = ae("RegExp"), gn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  He(n, (s, o) => {
    let l;
    (l = t(s, o, e)) !== !1 && (r[o] = l || s);
  }), Object.defineProperties(e, r);
}, Gr = (e) => {
  gn(e, (t, n) => {
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
  return Fe(e) ? r(e) : r(String(e).split(t)), n;
}, Yr = () => {
}, Qr = (e, t) => (e = +e, Number.isFinite(e) ? e : t), mt = "abcdefghijklmnopqrstuvwxyz", Zt = "0123456789", yn = {
  DIGIT: Zt,
  ALPHA: mt,
  ALPHA_DIGIT: mt + mt.toUpperCase() + Zt
}, Zr = (e = 16, t = yn.ALPHA_DIGIT) => {
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
    if (nt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Fe(r) ? [] : {};
        return He(r, (l, f) => {
          const b = n(l, s + 1);
          !$e(b) && (o[f] = b);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, ts = ae("AsyncFunction"), ns = (e) => e && (nt(e) || ee(e)) && ee(e.then) && ee(e.catch), d = {
  isArray: Fe,
  isArrayBuffer: pn,
  isBuffer: Or,
  isFormData: Fr,
  isArrayBufferView: Er,
  isString: xr,
  isNumber: vn,
  isBoolean: Rr,
  isObject: nt,
  isPlainObject: Xe,
  isUndefined: $e,
  isDate: Tr,
  isFile: Ar,
  isBlob: kr,
  isRegExp: Wr,
  isFunction: ee,
  isStream: Pr,
  isURLSearchParams: Lr,
  isTypedArray: Vr,
  isFileList: Nr,
  forEach: He,
  merge: St,
  extend: Br,
  trim: Dr,
  stripBOM: jr,
  inherits: zr,
  toFlatObject: Ir,
  kindOf: et,
  kindOfTest: ae,
  endsWith: Ur,
  toArray: Mr,
  forEachEntry: $r,
  matchAll: Hr,
  isHTMLForm: qr,
  hasOwnProperty: Qt,
  hasOwnProp: Qt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: gn,
  freezeMethods: Gr,
  toObjectSet: Xr,
  toCamelCase: Jr,
  noop: Yr,
  toFiniteNumber: Qr,
  findKey: mn,
  global: hn,
  isContextDefined: bn,
  ALPHABET: yn,
  generateString: Zr,
  isSpecCompliantForm: Kr,
  toJSONObject: es,
  isAsyncFn: ts,
  isThenable: ns
};
function L(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
d.inherits(L, Error, {
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
const wn = L.prototype, _n = {};
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
Object.defineProperties(L, _n);
Object.defineProperty(wn, "isAxiosError", { value: !0 });
L.from = (e, t, n, r, s, o) => {
  const l = Object.create(wn);
  return d.toFlatObject(e, l, function(b) {
    return b !== Error.prototype;
  }, (f) => f !== "isAxiosError"), L.call(l, e.message, t, n, r, s), l.cause = e, l.name = e.name, o && Object.assign(l, o), l;
};
const rs = null;
function Ct(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function Sn(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Kt(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Sn(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function ss(e) {
  return d.isArray(e) && !e.some(Ct);
}
const os = d.toFlatObject(d, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function rt(e, t, n) {
  if (!d.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = d.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, _) {
    return !d.isUndefined(_[h]);
  });
  const r = n.metaTokens, s = n.visitor || c, o = n.dots, l = n.indexes, b = (n.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(t);
  if (!d.isFunction(s))
    throw new TypeError("visitor must be a function");
  function m(v) {
    if (v === null)
      return "";
    if (d.isDate(v))
      return v.toISOString();
    if (!b && d.isBlob(v))
      throw new L("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(v) || d.isTypedArray(v) ? b && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function c(v, h, _) {
    let A = v;
    if (v && !_ && typeof v == "object") {
      if (d.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), v = JSON.stringify(v);
      else if (d.isArray(v) && ss(v) || (d.isFileList(v) || d.endsWith(h, "[]")) && (A = d.toArray(v)))
        return h = Sn(h), A.forEach(function(re, se) {
          !(d.isUndefined(re) || re === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            l === !0 ? Kt([h], se, o) : l === null ? h : h + "[]",
            m(re)
          );
        }), !1;
    }
    return Ct(v) ? !0 : (t.append(Kt(_, h, o), m(v)), !1);
  }
  const g = [], T = Object.assign(os, {
    defaultVisitor: c,
    convertValue: m,
    isVisitable: Ct
  });
  function C(v, h) {
    if (!d.isUndefined(v)) {
      if (g.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      g.push(v), d.forEach(v, function(A, H) {
        (!(d.isUndefined(A) || A === null) && s.call(
          t,
          A,
          d.isString(H) ? H.trim() : H,
          h,
          T
        )) === !0 && C(A, h ? h.concat(H) : [H]);
      }), g.pop();
    }
  }
  if (!d.isObject(e))
    throw new TypeError("data must be an object");
  return C(e), t;
}
function en(e) {
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
  this._pairs = [], e && rt(e, this, t);
}
const Cn = kt.prototype;
Cn.append = function(t, n) {
  this._pairs.push([t, n]);
};
Cn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, en);
  } : en;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function as(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function On(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || as, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = d.isURLSearchParams(t) ? t.toString() : new kt(t, n).toString(r), o) {
    const l = e.indexOf("#");
    l !== -1 && (e = e.slice(0, l)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
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
    d.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const tn = ls, En = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, is = typeof URLSearchParams < "u" ? URLSearchParams : kt, us = typeof FormData < "u" ? FormData : null, cs = typeof Blob < "u" ? Blob : null, fs = {
  isBrowser: !0,
  classes: {
    URLSearchParams: is,
    FormData: us,
    Blob: cs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, xn = typeof window < "u" && typeof document < "u", ds = ((e) => xn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), ps = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), vs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: xn,
  hasStandardBrowserEnv: ds,
  hasStandardBrowserWebWorkerEnv: ps
}, Symbol.toStringTag, { value: "Module" })), oe = {
  ...vs,
  ...fs
};
function ms(e, t) {
  return rt(e, new oe.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return oe.isNode && d.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function hs(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
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
function Rn(e) {
  function t(n, r, s, o) {
    let l = n[o++];
    const f = Number.isFinite(+l), b = o >= n.length;
    return l = !l && d.isArray(s) ? s.length : l, b ? (d.hasOwnProp(s, l) ? s[l] = [s[l], r] : s[l] = r, !f) : ((!s[l] || !d.isObject(s[l])) && (s[l] = []), t(n, r, s[l], o) && d.isArray(s[l]) && (s[l] = bs(s[l])), !f);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const n = {};
    return d.forEachEntry(e, (r, s) => {
      t(hs(r), s, n, 0);
    }), n;
  }
  return null;
}
function gs(e, t, n) {
  if (d.isString(e))
    try {
      return (t || JSON.parse)(e), d.trim(e);
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
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = d.isObject(t);
    if (o && d.isHTMLForm(t) && (t = new FormData(t)), d.isFormData(t))
      return s && s ? JSON.stringify(Rn(t)) : t;
    if (d.isArrayBuffer(t) || d.isBuffer(t) || d.isStream(t) || d.isFile(t) || d.isBlob(t))
      return t;
    if (d.isArrayBufferView(t))
      return t.buffer;
    if (d.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let f;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return ms(t, this.formSerializer).toString();
      if ((f = d.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const b = this.env && this.env.FormData;
        return rt(
          f ? { "files[]": t } : t,
          b && new b(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), gs(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Nt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && d.isString(t) && (r && !this.responseType || s)) {
      const l = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (f) {
        if (l)
          throw f.name === "SyntaxError" ? L.from(f, L.ERR_BAD_RESPONSE, this, null, this.response) : f;
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
d.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Nt.headers[e] = {};
});
const Pt = Nt, ys = d.toObjectSet([
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
]), ws = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(l) {
    s = l.indexOf(":"), n = l.substring(0, s).trim().toLowerCase(), r = l.substring(s + 1).trim(), !(!n || t[n] && ys[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, nn = Symbol("internals");
function Ie(e) {
  return e && String(e).trim().toLowerCase();
}
function Ye(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(Ye) : String(e);
}
function _s(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Ss = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ht(e, t, n, r, s) {
  if (d.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!d.isString(t)) {
    if (d.isString(r))
      return t.indexOf(r) !== -1;
    if (d.isRegExp(r))
      return r.test(t);
  }
}
function Cs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Os(e, t) {
  const n = d.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, l) {
        return this[r].call(this, t, s, o, l);
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
    function o(f, b, m) {
      const c = Ie(b);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const g = d.findKey(s, c);
      (!g || s[g] === void 0 || m === !0 || m === void 0 && s[g] !== !1) && (s[g || b] = Ye(f));
    }
    const l = (f, b) => d.forEach(f, (m, c) => o(m, c, b));
    return d.isPlainObject(t) || t instanceof this.constructor ? l(t, n) : d.isString(t) && (t = t.trim()) && !Ss(t) ? l(ws(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = Ie(t), t) {
      const r = d.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return _s(s);
        if (d.isFunction(n))
          return n.call(this, s, r);
        if (d.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Ie(t), t) {
      const r = d.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ht(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(l) {
      if (l = Ie(l), l) {
        const f = d.findKey(r, l);
        f && (!n || ht(r, r[f], f, n)) && (delete r[f], s = !0);
      }
    }
    return d.isArray(t) ? t.forEach(o) : o(t), s;
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
    return d.forEach(this, (s, o) => {
      const l = d.findKey(r, o);
      if (l) {
        n[l] = Ye(s), delete n[o];
        return;
      }
      const f = t ? Cs(o) : String(o).trim();
      f !== o && delete n[o], n[f] = Ye(s), r[f] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && d.isArray(r) ? r.join(", ") : r);
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
    const r = (this[nn] = this[nn] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(l) {
      const f = Ie(l);
      r[f] || (Os(s, l), r[f] = !0);
    }
    return d.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
st.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(st.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
d.freezeMethods(st);
const de = st;
function bt(e, t) {
  const n = this || Pt, r = t || n, s = de.from(r.headers);
  let o = r.data;
  return d.forEach(e, function(f) {
    o = f.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Tn(e) {
  return !!(e && e.__CANCEL__);
}
function qe(e, t, n) {
  L.call(this, e ?? "canceled", L.ERR_CANCELED, t, n), this.name = "CanceledError";
}
d.inherits(qe, L, {
  __CANCEL__: !0
});
function Es(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new L(
    "Request failed with status code " + n.status,
    [L.ERR_BAD_REQUEST, L.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const xs = oe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, s, o, l, f) {
        const b = [];
        b.push(n + "=" + encodeURIComponent(r)), d.isNumber(s) && b.push("expires=" + new Date(s).toGMTString()), d.isString(o) && b.push("path=" + o), d.isString(l) && b.push("domain=" + l), f === !0 && b.push("secure"), document.cookie = b.join("; ");
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
function An(e, t) {
  return e && !Rs(t) ? Ts(e, t) : t;
}
const As = oe.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let l = o;
      return t && (n.setAttribute("href", l), l = n.href), n.setAttribute("href", l), {
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
    return r = s(window.location.href), function(l) {
      const f = d.isString(l) ? s(l) : l;
      return f.protocol === r.protocol && f.host === r.host;
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
  let s = 0, o = 0, l;
  return t = t !== void 0 ? t : 1e3, function(b) {
    const m = Date.now(), c = r[o];
    l || (l = m), n[s] = b, r[s] = m;
    let g = o, T = 0;
    for (; g !== s; )
      T += n[g++], g = g % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), m - l < t)
      return;
    const C = c && m - c;
    return C ? Math.round(T * 1e3 / C) : void 0;
  };
}
function rn(e, t) {
  let n = 0;
  const r = Ns(50, 250);
  return (s) => {
    const o = s.loaded, l = s.lengthComputable ? s.total : void 0, f = o - n, b = r(f), m = o <= l;
    n = o;
    const c = {
      loaded: o,
      total: l,
      progress: l ? o / l : void 0,
      bytes: f,
      rate: b || void 0,
      estimated: b && l && m ? (l - o) / b : void 0,
      event: s
    };
    c[t ? "download" : "upload"] = !0, e(c);
  };
}
const Ps = typeof XMLHttpRequest < "u", Fs = Ps && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = de.from(e.headers).normalize(), l = e.responseType;
    let f;
    function b() {
      e.cancelToken && e.cancelToken.unsubscribe(f), e.signal && e.signal.removeEventListener("abort", f);
    }
    let m;
    if (d.isFormData(s)) {
      if (oe.hasStandardBrowserEnv || oe.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((m = o.getContentType()) !== !1) {
        const [v, ...h] = m ? m.split(";").map((_) => _.trim()).filter(Boolean) : [];
        o.setContentType([v || "multipart/form-data", ...h].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", h = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(v + ":" + h));
    }
    const g = An(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), On(g, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function T() {
      if (!c)
        return;
      const v = de.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), _ = {
        data: !l || l === "text" || l === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: v,
        config: e,
        request: c
      };
      Es(function(H) {
        n(H), b();
      }, function(H) {
        r(H), b();
      }, _), c = null;
    }
    if ("onloadend" in c ? c.onloadend = T : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, c.onabort = function() {
      c && (r(new L("Request aborted", L.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new L("Network Error", L.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let h = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const _ = e.transitional || En;
      e.timeoutErrorMessage && (h = e.timeoutErrorMessage), r(new L(
        h,
        _.clarifyTimeoutError ? L.ETIMEDOUT : L.ECONNABORTED,
        e,
        c
      )), c = null;
    }, oe.hasStandardBrowserEnv) {
      const v = As(g) && e.xsrfCookieName && xs.read(e.xsrfCookieName);
      v && o.set(e.xsrfHeaderName, v);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in c && d.forEach(o.toJSON(), function(h, _) {
      c.setRequestHeader(_, h);
    }), d.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), l && l !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", rn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", rn(e.onUploadProgress)), (e.cancelToken || e.signal) && (f = (v) => {
      c && (r(!v || v.type ? new qe(null, e, c) : v), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(f), e.signal && (e.signal.aborted ? f() : e.signal.addEventListener("abort", f)));
    const C = ks(g);
    if (C && oe.protocols.indexOf(C) === -1) {
      r(new L("Unsupported protocol " + C + ":", L.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, Ot = {
  http: rs,
  xhr: Fs
};
d.forEach(Ot, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const sn = (e) => `- ${e}`, Ls = (e) => d.isFunction(e) || e === null || e === !1, kn = {
  getAdapter: (e) => {
    e = d.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let l;
      if (r = n, !Ls(n) && (r = Ot[(l = String(n)).toLowerCase()], r === void 0))
        throw new L(`Unknown adapter '${l}'`);
      if (r)
        break;
      s[l || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([f, b]) => `adapter ${f} ` + (b === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let l = t ? o.length > 1 ? `since :
` + o.map(sn).join(`
`) : " " + sn(o[0]) : "as no adapter specified";
      throw new L(
        "There is no suitable adapter to dispatch the request " + l,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ot
};
function gt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new qe(null, e);
}
function on(e) {
  return gt(e), e.headers = de.from(e.headers), e.data = bt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kn.getAdapter(e.adapter || Pt.adapter)(e).then(function(r) {
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
const an = (e) => e instanceof de ? e.toJSON() : e;
function Pe(e, t) {
  t = t || {};
  const n = {};
  function r(m, c, g) {
    return d.isPlainObject(m) && d.isPlainObject(c) ? d.merge.call({ caseless: g }, m, c) : d.isPlainObject(c) ? d.merge({}, c) : d.isArray(c) ? c.slice() : c;
  }
  function s(m, c, g) {
    if (d.isUndefined(c)) {
      if (!d.isUndefined(m))
        return r(void 0, m, g);
    } else
      return r(m, c, g);
  }
  function o(m, c) {
    if (!d.isUndefined(c))
      return r(void 0, c);
  }
  function l(m, c) {
    if (d.isUndefined(c)) {
      if (!d.isUndefined(m))
        return r(void 0, m);
    } else
      return r(void 0, c);
  }
  function f(m, c, g) {
    if (g in t)
      return r(m, c);
    if (g in e)
      return r(void 0, m);
  }
  const b = {
    url: o,
    method: o,
    data: o,
    baseURL: l,
    transformRequest: l,
    transformResponse: l,
    paramsSerializer: l,
    timeout: l,
    timeoutMessage: l,
    withCredentials: l,
    adapter: l,
    responseType: l,
    xsrfCookieName: l,
    xsrfHeaderName: l,
    onUploadProgress: l,
    onDownloadProgress: l,
    decompress: l,
    maxContentLength: l,
    maxBodyLength: l,
    beforeRedirect: l,
    transport: l,
    httpAgent: l,
    httpsAgent: l,
    cancelToken: l,
    socketPath: l,
    responseEncoding: l,
    validateStatus: f,
    headers: (m, c) => s(an(m), an(c), !0)
  };
  return d.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const g = b[c] || s, T = g(e[c], t[c], c);
    d.isUndefined(T) && g !== f || (n[c] = T);
  }), n;
}
const Nn = "1.6.1", Ft = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ft[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ln = {};
Ft.transitional = function(t, n, r) {
  function s(o, l) {
    return "[Axios v" + Nn + "] Transitional option '" + o + "'" + l + (r ? ". " + r : "");
  }
  return (o, l, f) => {
    if (t === !1)
      throw new L(
        s(l, " has been removed" + (n ? " in " + n : "")),
        L.ERR_DEPRECATED
      );
    return n && !ln[l] && (ln[l] = !0, console.warn(
      s(
        l,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, l, f) : !0;
  };
};
function Ds(e, t, n) {
  if (typeof e != "object")
    throw new L("options must be an object", L.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], l = t[o];
    if (l) {
      const f = e[o], b = f === void 0 || l(f, o, e);
      if (b !== !0)
        throw new L("option " + o + " must be " + b, L.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new L("Unknown option " + o, L.ERR_BAD_OPTION);
  }
}
const Et = {
  assertOptions: Ds,
  validators: Ft
}, me = Et.validators;
class Ze {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new tn(),
      response: new tn()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Pe(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Et.assertOptions(r, {
      silentJSONParsing: me.transitional(me.boolean),
      forcedJSONParsing: me.transitional(me.boolean),
      clarifyTimeoutError: me.transitional(me.boolean)
    }, !1), s != null && (d.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Et.assertOptions(s, {
      encode: me.function,
      serialize: me.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let l = o && d.merge(
      o.common,
      o[n.method]
    );
    o && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete o[v];
      }
    ), n.headers = de.concat(l, o);
    const f = [];
    let b = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (b = b && h.synchronous, f.unshift(h.fulfilled, h.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function(h) {
      m.push(h.fulfilled, h.rejected);
    });
    let c, g = 0, T;
    if (!b) {
      const v = [on.bind(this), void 0];
      for (v.unshift.apply(v, f), v.push.apply(v, m), T = v.length, c = Promise.resolve(n); g < T; )
        c = c.then(v[g++], v[g++]);
      return c;
    }
    T = f.length;
    let C = n;
    for (g = 0; g < T; ) {
      const v = f[g++], h = f[g++];
      try {
        C = v(C);
      } catch (_) {
        h.call(this, _);
        break;
      }
    }
    try {
      c = on.call(this, C);
    } catch (v) {
      return Promise.reject(v);
    }
    for (g = 0, T = m.length; g < T; )
      c = c.then(m[g++], m[g++]);
    return c;
  }
  getUri(t) {
    t = Pe(this.defaults, t);
    const n = An(t.baseURL, t.url);
    return On(n, t.params, t.paramsSerializer);
  }
}
d.forEach(["delete", "get", "head", "options"], function(t) {
  Ze.prototype[t] = function(n, r) {
    return this.request(Pe(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, l, f) {
      return this.request(Pe(f || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: l
      }));
    };
  }
  Ze.prototype[t] = n(), Ze.prototype[t + "Form"] = n(!0);
});
const Qe = Ze;
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
      const l = new Promise((f) => {
        r.subscribe(f), o = f;
      }).then(s);
      return l.cancel = function() {
        r.unsubscribe(o);
      }, l;
    }, t(function(o, l, f) {
      r.reason || (r.reason = new qe(o, l, f), n(r.reason));
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
const Bs = Lt;
function js(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function zs(e) {
  return d.isObject(e) && e.isAxiosError === !0;
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
const Is = xt;
function Pn(e) {
  const t = new Qe(e), n = dn(Qe.prototype.request, t);
  return d.extend(n, Qe.prototype, t, { allOwnKeys: !0 }), d.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Pn(Pe(e, s));
  }, n;
}
const U = Pn(Pt);
U.Axios = Qe;
U.CanceledError = qe;
U.CancelToken = Bs;
U.isCancel = Tn;
U.VERSION = Nn;
U.toFormData = rt;
U.AxiosError = L;
U.Cancel = U.CanceledError;
U.all = function(t) {
  return Promise.all(t);
};
U.spread = js;
U.isAxiosError = zs;
U.mergeConfig = Pe;
U.AxiosHeaders = de;
U.formToJSON = (e) => Rn(d.isHTMLForm(e) ? new FormData(e) : e);
U.getAdapter = kn.getAdapter;
U.HttpStatusCode = Is;
U.default = U;
const Ke = U;
he.localeData().delimiters.thousands = " ";
he.localeData().delimiters.decimal = ",";
const Us = (e) => e === void 0 ? void 0 : JSON.parse(JSON.stringify(e)), Ms = (e) => {
  if (!Array.isArray(e) && Object.getPrototypeOf(e) !== Object.prototype)
    throw new Error(
      "Tried cloning instance of a class. Consider implementing clone method instead."
    );
  return Us(e);
};
function Fn(e, t, n) {
  const r = {};
  for (const [s, o] of Object.entries(e))
    if (s in n)
      if ((n[s].colspan ?? 0) > 1) {
        const l = t ? t[s] : void 0;
        let f;
        l === void 0 ? f = 100 : o === 0 ? f = -100 : f = (o - l) / o * 100, r[s] = {
          original: o,
          comparison: l ?? 0,
          difference: f
        };
      } else
        r[s] = o;
  return r;
}
function Vs(e, t, n, r) {
  const s = {};
  for (const o of Object.values(e)) {
    const l = o[r], f = Object.values(t).find(
      (b) => b[r] === l
    );
    s[l] = Fn(o, f, n);
  }
  return s;
}
const $s = { class: "label" }, Hs = {
  important: "",
  size: "small"
}, qs = { size: "small" }, Js = /* @__PURE__ */ Se({
  __name: "CellHint",
  props: {
    format: {},
    label: {},
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { format: n, label: r, title: s, url: o } = Ce(t), l = k(), f = k(!1), b = k(), m = (v) => v.map(({ name: h, valueFormatted: _ }) => ({
      label: h,
      value: _
    })), c = (v) => v.map(({ name: h, rate: _, value: A }) => ({
      label: h,
      value: `${he(A).format("0,0")} (${he(_).format("0,0.00")}%)`
    })), g = (v) => {
      switch (n.value) {
        case "distribution":
          return m(v);
        case "rated_distribution":
          return c(v);
        default:
          throw new Error(`Unsupported format: ${n.value}`);
      }
    }, T = async () => {
      if (l.value)
        return;
      const v = (await Ke(o.value)).data;
      l.value = g(v);
    }, C = async () => {
      f.value = !0, await T();
    };
    return (v, h) => {
      var _;
      return w(), j("div", {
        class: X(["cell-hint", { visible: f.value }]),
        ref_key: "root",
        ref: b,
        onMouseover: C,
        onMouseleave: h[0] || (h[0] = (A) => f.value = !1)
      }, [
        G("span", $s, F(y(r)), 1),
        R(Tt, {
          title: y(s),
          "show-arrow": !1,
          persistent: !1,
          offset: 0,
          "virtual-triggering": "",
          visible: f.value,
          "virtual-ref": (_ = b.value) == null ? void 0 : _.closest(".cell"),
          width: "15rem",
          "popper-class": "cell-hint-popover"
        }, {
          default: S(() => [
            l.value ? (w(!0), j(J, { key: 0 }, _e(l.value, ({ label: A, value: H }, re) => (w(), j("div", {
              key: `line-${re}`
            }, [
              G("b", Hs, F(A) + ": ", 1),
              G("span", qs, F(H), 1)
            ]))), 128)) : (w(), B(Rt, { key: 1 }))
          ]),
          _: 1
        }, 8, ["title", "visible", "virtual-ref"])
      ], 34);
    };
  }
});
const un = /* @__PURE__ */ Oe(Js, [["__scopeId", "data-v-23cadab0"]]), Ws = { class: "column-hint" }, Gs = /* @__PURE__ */ Se({
  __name: "ColumnHint",
  props: {
    description: {},
    title: {},
    visible: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { description: n, title: r, visible: s } = Ce(t), o = k();
    return (l, f) => {
      var b;
      return w(), j("div", Ws, [
        G("i", {
          class: "la la-question-circle",
          ref_key: "iconRef",
          ref: o
        }, null, 512),
        R(Tt, {
          title: y(r),
          content: y(n),
          "show-arrow": !1,
          persistent: !1,
          offset: 0,
          visible: y(s),
          "virtual-ref": (b = o.value) == null ? void 0 : b.closest(".cell"),
          "virtual-triggering": "",
          width: "15rem"
        }, null, 8, ["title", "content", "visible", "virtual-ref"])
      ]);
    };
  }
});
const Xs = /* @__PURE__ */ Oe(Gs, [["__scopeId", "data-v-01391df6"]]), Ys = /* @__PURE__ */ Se({
  __name: "DetailsSelector",
  props: {
    labels: {},
    open: { type: Boolean, default: !1 },
    title: {}
  },
  emits: ["hideDetails", "showDetails"],
  setup(e, { emit: t }) {
    const n = e, { labels: r, open: s, title: o } = Ce(n), l = k(!1), f = k(), b = k(), m = (T) => {
      var C, v;
      !T.target || (C = b.value) != null && C.contains(T.target) || (v = f.value) != null && v.$el.contains(T.target) || (l.value = !1, window.removeEventListener("mouseup", m));
    }, c = () => {
      if (s.value) {
        t("hideDetails");
        return;
      }
      if (l.value) {
        l.value = !1;
        return;
      }
      l.value = !0, window.addEventListener("mouseup", m);
    }, g = (T) => {
      if (l.value = !1, s.value) {
        t("hideDetails");
        return;
      }
      t("showDetails", T);
    };
    return fr(() => {
      window.removeEventListener("mouseup", m);
    }), (T, C) => (w(), j("div", {
      class: "details-selector-container",
      ref_key: "root",
      ref: b,
      onClick: C[0] || (C[0] = wt(() => c(), ["stop"]))
    }, [
      R(Y, {
        class: "details-selector",
        vertical: "center"
      }, {
        default: S(() => [
          y(o) ? (w(), B(z, {
            key: 0,
            mood: "important-alt",
            size: "small"
          }, {
            default: S(() => [
              P(F(y(o)), 1)
            ]),
            _: 1
          })) : $("", !0),
          R(Me, {
            value: y(s) ? "chevron-up" : "chevron-down",
            mood: "important-alt",
            size: "large-2"
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      R(_r, {
        ref_key: "popover",
        ref: f,
        parentNode: b.value,
        visible: l.value,
        autoPosition: "",
        popoverClass: "details-selector-popover"
      }, {
        default: S(() => [
          (w(!0), j(J, null, _e(y(r), (v, h) => (w(), B(z, {
            class: "dropdown-item",
            onClick: wt(() => g(h), ["stop"]),
            contrast: ""
          }, {
            default: S(() => [
              P(F(v), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 256))
        ]),
        _: 1
      }, 8, ["parentNode", "visible"])
    ], 512));
  }
});
const Qs = /* @__PURE__ */ Oe(Ys, [["__scopeId", "data-v-deb913c2"]]), Zs = { class: "pagination" }, Ks = ["onClick"], eo = /* @__PURE__ */ Se({
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
    const n = e, { currentPageSize: r, id: s, pageNumber: o, pageRadius: l, pageSizeLabel: f, pageSizes: b, rowCount: m } = Ce(n), c = I(() => Math.min(...b.value)), g = I(() => Math.ceil(m.value / r.value)), T = I(
      () => b.value.reduce((h, _) => (h[_] = _.toString(), h), {})
    ), C = I(() => {
      const h = [];
      for (let _ = l.value - 1; _ > 0; _--)
        o.value > _ && h.push(o.value - _);
      h.push(o.value);
      for (let _ = 1; _ < l.value; _++)
        o.value < g.value - _ - 1 && h.push(o.value + _);
      return h;
    }), v = (h) => {
      r.value !== h && t("update:currentPageSize", h);
    };
    return (h, _) => (w(), j("div", Zs, [
      y(m) > y(r) ? (w(), j(J, { key: 0 }, [
        y(o) > 0 ? (w(), B(z, {
          key: 0,
          class: "page",
          onClick: _[0] || (_[0] = () => t("update:pageNumber", 0)),
          mood: "important-alt"
        }, {
          default: S(() => [
            P("1")
          ]),
          _: 1
        })) : $("", !0),
        y(o) > y(l) ? (w(), B(z, {
          key: 1,
          class: "page-separator"
        }, {
          default: S(() => [
            P("…")
          ]),
          _: 1
        })) : $("", !0),
        (w(!0), j(J, null, _e(C.value, (A) => (w(), j("div", {
          class: X(["page", { current: A === y(o) }]),
          onClick: () => t("update:pageNumber", A),
          key: A
        }, F(A + 1), 11, Ks))), 128)),
        y(o) < g.value - y(l) - 1 ? (w(), B(z, {
          key: 2,
          class: "page-separator"
        }, {
          default: S(() => [
            P("…")
          ]),
          _: 1
        })) : $("", !0),
        y(o) < g.value - 1 ? (w(), B(z, {
          key: 3,
          class: "page",
          onClick: _[1] || (_[1] = () => t("update:pageNumber", g.value - 1)),
          mood: "important-alt"
        }, {
          default: S(() => [
            P(F(g.value), 1)
          ]),
          _: 1
        })) : $("", !0),
        R(z, { class: "page-size-label" }, {
          default: S(() => [
            P(F(y(f)), 1)
          ]),
          _: 1
        })
      ], 64)) : $("", !0),
      y(m) > c.value ? (w(), B(cn, {
        key: 1,
        class: "page-size-selector no-spacing",
        "onUpdate:modelValue": _[2] || (_[2] = (A) => v(parseInt(A.toString()))),
        id: y(s),
        items: T.value,
        modelValue: y(r)
      }, {
        item: S(({ item: A }) => [
          P(F(A), 1)
        ]),
        _: 1
      }, 8, ["id", "items", "modelValue"])) : $("", !0)
    ]));
  }
});
const to = /* @__PURE__ */ Oe(eo, [["__scopeId", "data-v-ead8b7ab"]]), no = { class: "trend-chart-container" }, ro = { class: "trend-chart-content" }, so = /* @__PURE__ */ Se({
  __name: "TrendChart",
  props: {
    formatter: { type: Function },
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { formatter: n, title: r, url: s } = Ce(t), o = k(), l = k([]), f = k(), b = I(() => f.value ? Object.assign({}, f.value) : {}), m = I(() => {
      var h;
      switch ((h = f.value) == null ? void 0 : h.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return f.value[0];
        default:
          return f.value.slice(f.value.length / 2).reduce((_, A) => _ + A, 0) / Math.ceil(f.value.length / 2);
      }
    }), c = I(() => {
      var h;
      switch ((h = f.value) == null ? void 0 : h.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return f.value[0];
        default:
          return f.value.slice(0, f.value.length / 2).reduce((_, A) => _ + A, 0) / Math.floor(f.value.length / 2);
      }
    }), g = I(() => c.value > m.value ? "negative" : c.value < m.value ? "positive" : "neutral"), T = I(() => {
      if (!f.value)
        return {};
      const h = new Array(f.value.length).fill(0).map(
        (_, A) => c.value + (m.value - c.value) * A / (f.value.length - 1)
      );
      return Object.assign({}, h);
    }), C = async () => {
      if (f.value)
        return;
      const h = (await Ke({ url: s.value })).data;
      l.value = Object.keys(h), f.value = Object.values(h);
    }, v = async () => {
      await C();
    };
    return (h, _) => (w(), j("div", no, [
      G("i", {
        class: "la la-eye secondary",
        ref_key: "iconRef",
        ref: o
      }, null, 512),
      R(Tt, {
        width: "500",
        trigger: "click",
        persistent: !1,
        "show-arrow": !1,
        "popper-class": "trend-chart-popover",
        "virtual-ref": o.value,
        "virtual-triggering": "",
        "append-to": ".app-container",
        "popper-options": { modifiers: [{ name: "eventListeners", options: { scroll: !1 } }], strategy: "fixed" },
        onShow: v
      }, {
        default: S(() => [
          y(r) ? (w(), B(Ve, {
            key: 0,
            size: "large-2"
          }, {
            default: S(() => [
              P(F(y(r)), 1)
            ]),
            _: 1
          })) : $("", !0),
          G("div", ro, [
            f.value ? (w(), B(yr, {
              key: 0,
              activeLines: ["values"],
              formatters: { trend: y(n), values: y(n) },
              moods: { trend: { mood: g.value }, values: { mood: "important" } },
              styles: { trend: "line", values: "line" },
              values: { trend: T.value, values: b.value },
              "no-x-axis-labels": !0
            }, null, 8, ["formatters", "moods", "values"])) : (w(), B(Rt, { key: 1 }))
          ])
        ]),
        _: 1
      }, 8, ["virtual-ref"])
    ]));
  }
});
const oo = /* @__PURE__ */ Oe(so, [["__scopeId", "data-v-c57a26a4"]]), ao = { class: "common-table" }, lo = {
  key: 0,
  class: "controls d-flex justify-content-end mb-1"
}, io = ["onMouseover", "onMouseleave"], uo = ["onClick"], yt = 50, co = /* @__PURE__ */ Se({
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
  emits: ["move:column", "update:loading", "update:orderBy"],
  setup(e, { emit: t }) {
    const n = e, r = async (a, i) => typeof a == "function" ? await a(i) : (await Ke({
      ...a,
      params: {
        ...a.params,
        [i.primaryColumn]: i.primaryColumnValue
      }
    })).data, s = async (a, i) => typeof a == "function" ? await a(i) : (await Ke({
      ...a,
      params: {
        ...a.params ?? {},
        filter: i.inlineFilters ? Object.fromEntries(
          Object.entries(i.inlineFilters).filter(([u, p]) => p.value !== "")
        ) : void 0,
        page_number: i.pageNumber,
        page_size: i.pageSize,
        order: i.orderBy,
        reversed: i.reversed
      }
    })).data, {
      cellClasses: o,
      clientCurrencyDecimal: l,
      clientCurrencySymbol: f,
      clientCurrencySymbolPrefix: b,
      colorMetrics: m,
      columns: c,
      columnDetails: g,
      columnLinks: T,
      comparisonColumns: C,
      comparisonRequest: v,
      defaultOrderBy: h,
      detailsColumn: _,
      detailsRequests: A,
      dragColumns: H,
      fixedColumnNumber: re,
      inlineFilterOperators: se,
      inversedKpis: le,
      primaryColumn: M,
      primaryColumnAlias: pe,
      request: q,
      rows: Ee,
      shortenColumns: Z,
      showInlineFilters: be,
      showRowNumber: ot,
      showPagination: Je,
      showTopTotal: at,
      total: xe,
      totalColumnKey: lt,
      trendUrl: Le
    } = Ce(n), Re = () => {
      const a = {};
      for (const i of Object.keys(c.value))
        i in se.value && (a[i] = {
          operator: Object.keys(se.value[i])[0],
          value: ""
        });
      return a;
    }, ie = k([]), Te = k(void 0), O = k({}), E = k([]), D = k({}), W = k([]), ve = k({}), De = k(!1), ue = k(!1), Be = k([]), je = k(!1), te = k(Re()), ge = k(!0), ce = k(), ye = k(0), Ae = k(20), ze = k(0), K = k(), fe = k(), Ln = I(() => {
      const a = {};
      return ue.value && (a.inline_filters = {
        icon: "filter"
      }), a;
    }), Dn = I(
      () => C != null && C.value ? Object.keys(C.value) : void 0
    ), Dt = I(
      () => W.value.reduce((a, i) => (a[i] = Ms(c.value[i]), a), {})
    ), Bt = I(() => {
      if (A != null && A.value)
        return Object.entries(A.value).reduce((a, [i, { label: u }]) => (a[i] = u, a), {});
    }), jt = I(() => [...ie.value].sort((a, i) => {
      const u = (() => {
        const p = ut(
          ce.value[0].reduce((N, V) => N[V], a),
          c.value[ce.value[0][0]].type
        ), x = ut(
          ce.value[0].reduce((N, V) => N[V], i),
          c.value[ce.value[0][0]].type
        );
        return p > x ? 1 : p < x ? -1 : 0;
      })();
      return ce.value[1] ? -u : u;
    })), zt = I(() => q != null && q.value && !je.value || !Je.value ? jt.value : jt.value.slice(
      ye.value * Ae.value,
      (ye.value + 1) * Ae.value
    )), Bn = (a) => {
      E.value.includes(a) || E.value.push(a);
    }, We = (a, i) => !Z.value || !Z.value.includes(a) ? !1 : String(i || "").length > yt, jn = (a) => !!a.tooltipTitle && !!a.tooltipContent, Ge = (a, i, u) => {
      var x;
      if (!u || !(C != null && C.value) || !(u in C.value) || C.value[u].format !== "difference")
        return;
      const p = ((x = le == null ? void 0 : le.value) == null ? void 0 : x.includes(i)) ?? !1;
      return a > 0 ? p ? "negative" : "positive" : a < 0 ? p ? "positive" : "negative" : "neutral";
    }, ke = (a, i, u) => {
      let p = ut(a, i);
      switch (i) {
        case "float":
          return he(parseFloat(p)).format("0,0.00");
        case "int":
          return he(parseInt(p)).format("0,0");
        case "money": {
          let x = "0,0";
          l.value > 0 && (x += "." + "0".repeat(l.value));
          const N = he(parseFloat(p)).format(x);
          return b.value ? f.value + " " + N : N + " " + f.value;
        }
        case "money_capped": {
          const x = parseFloat(p.toFixed(l.value)) == 0;
          if (p > 0 && p < 1 && x) {
            const N = l.value === 0 ? 1 : parseFloat("0." + "0".repeat(l.value - 1) + "1");
            return b.value ? `< ${f.value} ${N}` : `< ${N} ${f.value}`;
          } else
            return ke(a, "money", u);
        }
        case "percent": {
          let x = he(parseFloat(p)).format("0,0.00") + "%";
          return u === "difference" && p > 0 && (x = `+${x}`), x;
        }
        case "time":
          return `${ke(Math.floor(parseInt(p) / 60), "int")}mn${ke(
            parseInt(p) % 60,
            "int"
          )}s`;
        default:
          return p == null ? void 0 : p.toString();
      }
    }, zn = async (a, i) => {
      if (O.value[a] && O.value[a][i[M.value]])
        return O.value[a][i[M.value]];
      const { rows: u } = await r(A.value[a].request, {
        row: i,
        primaryColumn: (pe == null ? void 0 : pe.value) ?? M.value,
        primaryColumnValue: i[M.value]
      });
      return O.value[a] || (O.value[a] = {}), O.value[a][i[M.value]] = Object.values(u), O.value[a][i[M.value]];
    }, It = (a, i) => {
      if (!a)
        return i.url;
      const u = new URL(a.url, location.origin);
      if (Array.isArray(a.columns))
        for (const p of a.columns)
          u.searchParams.set(p, i[p]);
      else
        for (const [p, x] of Object.entries(a.columns))
          u.searchParams.set(x, i[p]);
      return u;
    }, In = (a, i) => {
      const u = new URL(g.value[a].baseUrl, location.origin);
      if (Array.isArray(g.value[a].columns))
        for (const p of g.value[a].columns)
          u.searchParams.set(p, i[p]);
      else
        for (const [p, x] of Object.entries(g.value[a].columns))
          u.searchParams.set(x, i[p]);
      return u.toString();
    }, Un = (a) => {
      if (a.totalUrl)
        return new URL(a.totalUrl).toString();
      const i = new URL(a.baseUrl);
      return i.searchParams.set("total", "true"), i.toString();
    }, Mn = (a) => !Z.value || !Z.value.includes(a) ? -1 : Be.value.indexOf(a), Vn = (a) => {
      if (a in te.value)
        return te.value[a].operator;
    }, $n = (a) => {
      if (a in te.value)
        return te.value[a].value;
    }, it = (a) => se.value[a], Hn = (a) => {
      const i = it(a);
      if (!i)
        return;
      const u = ["normal", "small"];
      let p = 0;
      for (const x of Object.values(i)) {
        const N = u.indexOf(x.size ?? "normal");
        N > p && (p = N);
      }
      return {
        [`size-${u[p]}`]: !0
      };
    }, qn = (a) => {
      const i = it(a);
      return i ? Object.entries(i).reduce((u, [p, x]) => (u[p] = x.label, u), {}) : {};
    }, Jn = (a) => c.value[a].type === "string" ? "text" : "number", Ut = () => `Table_OrderBy_${location.pathname}`, Wn = () => `Table_PageSize_${location.pathname}`, ut = (a, i) => {
      switch (i) {
        case "float":
        case "int":
        case "money":
        case "money_capped":
        case "percent":
        case "time":
          return parseFloat(a ?? 0);
        default:
          return a;
      }
    }, we = (a, i, u, p = !1) => {
      const [x, N] = (() => !u || !(C != null && C.value) || !(u in C.value) ? [c.value[i].type, void 0] : [
        C.value[u].type ?? c.value[i].type,
        C.value[u].format
      ])();
      let V = ke(a, x);
      return N === "difference" && (V = a > 0 ? `+${V}` : V), p ? Ht(V, i) : V;
    }, Gn = (a, i) => {
      if (!Le)
        return "";
      const u = new URL(
        i ? Le.value[i] : Le.value,
        location.origin
      );
      return u.searchParams.set((pe == null ? void 0 : pe.value) ?? M.value, a[M.value]), u.toString();
    }, Mt = (a, i, u) => We(a, i) ? [] : u ? (_ == null ? void 0 : _.value) === a ? ["flex-grow-1", "text-left"] : Z.value && Z.value.includes(a) && zt.value.some((p) => We(a, p[a])) ? ["flex-grow-1", "text-left"] : ["flex-grow-1"] : ["flew-grow-1"], Xn = (a) => a in se.value, Yn = () => {
      be.value && (De.value = !1);
    }, Vt = (a, i) => {
      if (!(T != null && T.value) || !(i in T.value))
        return !1;
      const u = T.value[i];
      return u === null ? !!a.url : !("disable_for" in u && u.disable_for.includes(a[M.value]));
    }, Qn = (a, i) => {
      const [u] = W.value.splice(a, 1);
      W.value.splice(i, 0, u), t("move:column", { from: a, to: i });
    }, Zn = (a) => {
      const i = E.value.indexOf(a);
      i < 0 || E.value.splice(i, 1);
    }, $t = (a, i) => {
      D.value[a] = i;
    }, Ht = (a, i) => !Z.value || !Z.value.includes(i) || Be.value.includes(i) || String(a || "").length <= yt ? a : `${a.substring(0, yt - 3)}...`, Kn = (a) => {
      if (!fe.value)
        return;
      const i = {
        left: fe.value.$el.scrollLeft,
        top: fe.value.$el.scrollTop
      };
      delete ve.value[a[M.value]], Xt(() => {
        fe.value.$el.scrollTo(i);
      });
    }, er = (a, i) => {
      const u = a.target.value;
      Jt(i, { value: u });
    }, tr = (a, i) => {
      a.key === "Enter" && a.target.blur();
    }, nr = async (a, i) => {
      if (!fe.value)
        return;
      const u = {
        left: fe.value.$el.scrollLeft,
        top: fe.value.$el.scrollTop
      };
      ge.value = !0, ve.value[i[M.value]] = await zn(a, i), Xt(() => {
        fe.value.$el.scrollTo(u), ge.value = !1;
      });
    }, rr = async (a = !1) => {
      await or(a) || await sr(a) || await ft(a);
    }, ct = async (a) => {
      await dt(a), ye.value = a;
    }, qt = async (a) => {
      const i = Wn();
      if (a === void 0) {
        const u = localStorage.getItem(i);
        u && (Ae.value = parseInt(u));
      } else
        localStorage.setItem(i, a.toString()), await dt(0, a), ye.value = 0, Ae.value = a;
    }, Jt = (a, { operator: i, value: u }) => {
      if (i || (i = Object.keys(it(a))[0]), !i)
        return;
      const p = {
        ...te.value[a],
        operator: i
      };
      u !== void 0 && (p.value = u), te.value[a] = p, je.value = !1, ct(0);
    }, sr = async (a) => {
      const i = (() => {
        for (const x in localStorage) {
          if (!x.startsWith("DataTables_"))
            continue;
          const N = x.substring(x.indexOf("/"));
          if (location.pathname !== N)
            return;
          const V = localStorage.getItem(x);
          return V ? JSON.parse(V) : void 0;
        }
      })();
      if (!i || !i.order || !i.order[0] || typeof i.order[0][0] == "number")
        return !1;
      const u = i.order[0][0].lastIndexOf("-"), p = u === -1 ? [
        [i.order[0][0]],
        i.order[0][1] === "desc"
      ] : [
        [
          i.order[0][0].substring(0, u),
          i.order[0][0].substring(u + 1)
        ],
        i.order[0][1] === "desc"
      ];
      return await Ne(p, !1, a), !0;
    }, ft = async (a) => {
      if (h != null && h.value) {
        await Ne(h.value, !1, a);
        return;
      }
      const [i, { colspan: u }] = Object.entries(c.value).find(
        ([p, { visible: x }]) => x
      );
      if (u === -1) {
        await Ne([[i], !1], !1, a);
        return;
      }
      await Ne(
        [
          [
            i,
            (C != null && C.value ? Object.keys(C.value)[0] : 0).toString()
          ],
          !1
        ],
        !1,
        a
      );
    }, or = async (a) => {
      const i = localStorage.getItem(Ut());
      if (i) {
        const u = JSON.parse(i)[0][0];
        if (c.value[u])
          return await Ne(JSON.parse(i), !1, a), !0;
      } else
        return !1;
    }, ar = async (a, i, u) => {
      if (!(q != null && q.value))
        return !1;
      if (je.value)
        return !0;
      const [p, x] = await (async () => {
        const N = [
          s(q.value, {
            inlineFilters: te.value,
            pageNumber: a,
            pageSize: i,
            orderBy: u[0],
            reversed: u[1]
          })
        ];
        v != null && v.value && N.push(
          s(v.value, {
            inlineFilters: te.value,
            pageNumber: a,
            pageSize: i,
            orderBy: u[0],
            reversed: u[1]
          })
        );
        const V = await Promise.all(N);
        if (V.length > 1 && V.some((ne) => ne.paginated === !0))
          throw new Error("Paginated fetching is not supported for separate comparison requests.");
        return V;
      })();
      return x ? (Te.value = [p, x], Wt()) : ie.value = Object.values(p.rows), je.value = p.paginated === !1, ze.value = p.row_count, p.detailedRows ? ve.value = p.detailedRows : ve.value = {}, p.total && !x && (K.value = p.total), !0;
    }, Wt = () => {
      if (!Te.value)
        return;
      const [a, i] = Te.value;
      ie.value = Object.values(
        Vs(a.rows, i.rows, c.value, M.value)
      ), a.total && (K.value = Fn(a.total, i.total, c.value));
    }, lr = () => {
      if (!(Ee != null && Ee.value))
        return !1;
      let a = Object.values(Ee.value);
      for (const [i, u] of Object.entries(te.value))
        u.value && (a = a.filter(
          (p) => se.value[i][u.operator].callback(
            p[i],
            u.value
          )
        ));
      return ie.value = a, ze.value = a.length, !0;
    }, dt = async (a, i, u) => {
      a === void 0 && (a = ye.value), i === void 0 && (i = Ae.value), u === void 0 && (u = ce.value), ge.value = !0, lr() || await ar(a, i, u), ge.value = !1;
    }, ir = () => {
      be.value && (De.value = !0);
    }, ur = (a) => {
      if (!Z.value || !Z.value.includes(a))
        return;
      const i = Mn(a);
      i >= 0 ? Be.value.splice(i, 1) : Be.value.push(a);
    }, cr = () => {
      ue.value = !ue.value, ue.value && (te.value = Re());
    }, Ne = async (a, i = !0, u = !0) => {
      ye.value = 0, ce.value = a, u && await dt(void 0, void 0, a), i && localStorage.setItem(Ut(), JSON.stringify(a)), t("update:orderBy", a);
    };
    return dr(() => {
      W.value = Object.keys(c.value), K.value = xe == null ? void 0 : xe.value, Promise.all([ft(!1), qt()]).then(() => rr(!0));
    }), Ue(c, () => {
      W.value = Object.keys(c.value), te.value = Re(), Te && Wt();
    }), Ue(ge, () => {
      t("update:loading", ge.value);
    }), h && Ue(h, (a, i) => {
      (a == null ? void 0 : a[0][0]) !== (i == null ? void 0 : i[0][0]) && ft(!0);
    }), q && Ue(
      q,
      () => {
        je.value = !1, ct(0);
      },
      { deep: !0 }
    ), (a, i) => (w(), j("div", ao, [
      y(Je) ? (w(), j("div", lo, [
        R(to, {
          "onUpdate:pageNumber": i[0] || (i[0] = (u) => ct(u)),
          "onUpdate:currentPageSize": i[1] || (i[1] = (u) => qt(u)),
          currentPageSize: Ae.value,
          pageNumber: ye.value,
          pageSizeLabel: a.pageSizeLabel,
          rowCount: ze.value
        }, null, 8, ["currentPageSize", "pageNumber", "pageSizeLabel", "rowCount"])
      ])) : $("", !0),
      G("div", {
        class: "table-container",
        onMouseover: i[7] || (i[7] = () => ir()),
        onMouseout: i[8] || (i[8] = () => Yn())
      }, [
        G("div", {
          class: X(["action-buttons", { active: De.value }])
        }, [
          y(be) ? (w(), B(_t, {
            key: 0,
            onClick: i[2] || (i[2] = () => cr()),
            icon: ue.value ? "trash" : "filter-alt",
            mood: "positive"
          }, null, 8, ["icon"])) : $("", !0)
        ], 2),
        ce.value ? (w(), B(wr, {
          key: 0,
          ref_key: "table",
          ref: fe,
          onAddColoredMetric: i[3] || (i[3] = (u) => Bn(u)),
          "onMove:column": i[4] || (i[4] = ({ from: u, to: p }) => Qn(u, p)),
          onRemoveColoredMetric: i[5] || (i[5] = (u) => Zn(u)),
          "onUpdate:orderBy": i[6] || (i[6] = (u) => Ne(u)),
          additionalHeaders: Ln.value,
          cellClasses: y(o),
          colorMetrics: y(m),
          coloredMetrics: E.value,
          columns: Dt.value,
          comparisonColumnKeys: Dn.value,
          detailsRows: ve.value,
          dragColumns: y(H),
          fixedColumnNumber: y(re),
          inversedKpis: y(le),
          orderBy: ce.value,
          primaryColumn: y(M),
          rows: zt.value,
          showRowNumber: y(ot),
          showTotal: !!K.value,
          showTopTotal: y(at)
        }, pr({
          colorizeLabel: S(({ enabled: u }) => [
            R(z, {
              mood: "white",
              size: "small"
            }, {
              default: S(() => [
                u ? (w(), j(J, { key: 0 }, [
                  P(F(a.uncolorizeLabel), 1)
                ], 64)) : (w(), j(J, { key: 1 }, [
                  P(F(a.colorizeLabel), 1)
                ], 64))
              ]),
              _: 2
            }, 1024)
          ]),
          columnRowNumber: S(() => [
            R(z, {
              class: "column-label",
              contrast: "",
              size: "small"
            }, {
              default: S(() => [
                P("#")
              ]),
              _: 1
            })
          ]),
          rowNumber: S(({ value: u }) => [
            R(z, {
              contrast: "",
              size: "small"
            }, {
              default: S(() => [
                P(F(u), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          totalRowNumber: S(() => [
            R(z, {
              class: "total-label",
              contrast: "",
              size: "small"
            }, {
              default: S(() => [
                P("#")
              ]),
              _: 1
            })
          ]),
          column: S(({ columnKey: u, isGhost: p }) => [
            G("div", {
              class: "d-flex align-items-center",
              onMouseover: () => $t(u, !0),
              onMouseleave: () => $t(u, !1)
            }, [
              R(z, {
                class: "column-label",
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  P(F(y(c)[u].label), 1)
                ]),
                _: 2
              }, 1024),
              !p && jn(y(c)[u]) ? (w(), B(Xs, {
                key: 0,
                description: y(c)[u].tooltipContent,
                title: y(c)[u].tooltipTitle,
                visible: D.value[u]
              }, null, 8, ["description", "title", "visible"])) : $("", !0)
            ], 40, io)
          ]),
          additionalHeader: S(({ additionalHeader: u, columnKey: p }) => [
            u === "inline_filters" && Xn(p) ? (w(), B(Y, {
              key: 0,
              class: X(["inline-filter", Hn(p)])
            }, {
              default: S(() => [
                R(cn, {
                  class: "inline-filter-dropdown",
                  "onUpdate:modelValue": (x) => Jt(p, { operator: x.toString() }),
                  items: qn(p),
                  modelValue: Vn(p),
                  size: "small"
                }, null, 8, ["onUpdate:modelValue", "items", "modelValue"]),
                R(fn, {
                  class: "flex-grow-1 inline-filter-input no-spacing",
                  onBlur: (x) => er(x, p),
                  onKeyup: (x) => tr(x),
                  modelValue: $n(p),
                  type: Jn(p),
                  size: "small"
                }, null, 8, ["onBlur", "onKeyup", "modelValue", "type"])
              ]),
              _: 2
            }, 1032, ["class"])) : $("", !0)
          ]),
          total: S(({ columnKey: u, subcolumnKey: p, values: x }) => [
            Gt(a.$slots, y(xe), {
              columnKey: u,
              subcolumnKey: p,
              values: x
            }, () => [
              a.totalTitle && u === y(lt) ? (w(), B(z, {
                key: 0,
                class: "total-label",
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  typeof a.totalTitle == "function" ? (w(), j(J, { key: 0 }, [
                    P(F(a.totalTitle(ze.value ?? ie.value.length)), 1)
                  ], 64)) : (w(), j(J, { key: 1 }, [
                    P(F(a.totalTitle) + ": " + F(ze.value ?? ie.value.length), 1)
                  ], 64))
                ]),
                _: 1
              })) : K.value ? (w(), j(J, { key: 1 }, [
                K.value && K.value[u] >= 0.01 && u in y(g) ? (w(), B(un, {
                  key: 0,
                  format: y(g)[u].format,
                  label: Ht(ke(K.value[u], y(c)[u].type, y(C) && p ? y(C)[p].format : void 0), u),
                  title: y(g)[u].title,
                  url: Un(y(g)[u])
                }, null, 8, ["format", "label", "title", "url"])) : p ? (w(), B(z, {
                  key: 1,
                  class: "total-label",
                  mood: Ge(K.value[u][p], u, p),
                  contrast: "",
                  size: "small"
                }, {
                  default: S(() => [
                    P(F(we(K.value[u][p], u, p)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"])) : (w(), B(z, {
                  key: 2,
                  class: "total-label",
                  mood: Ge(K.value[u], u, p),
                  contrast: "",
                  size: "small"
                }, {
                  default: S(() => [
                    P(F(we(K.value[u], u)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"]))
              ], 64)) : $("", !0)
            ], !0)
          ]),
          _: 2
        }, [
          y(C) ? {
            name: "secondaryColumn",
            fn: S(({ subcolumnKey: u }) => [
              u ? (w(), B(z, {
                key: 0,
                class: "column-label",
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  P(F(y(C)[u].label), 1)
                ]),
                _: 2
              }, 1024)) : $("", !0)
            ]),
            key: "0"
          } : void 0,
          _e(Object.keys(Dt.value), (u) => ({
            name: `row-${u}`,
            fn: S(({ columnKey: p, index: x, row: N, spanIndex: V, subcolumnKey: ne, subindex: pt, value: Q }) => [
              Gt(a.$slots, "row-" + p, vr(mr({
                columnKey: p,
                index: x,
                row: N,
                spanIndex: V,
                subcolumnKey: ne,
                subindex: pt,
                value: Q
              })), () => [
                pt === void 0 && p === "trend" ? (w(), B(oo, {
                  key: 0,
                  class: X(Mt(p, Q, N.rowInfo.detailable)),
                  formatter: (vt) => ke(vt, "int"),
                  title: a.trendChartTitle,
                  url: Gn(N, ne)
                }, null, 8, ["class", "formatter", "title", "url"])) : N.rowInfo.detailable && p === y(_) ? (w(), j(J, { key: 1 }, [
                  Vt(N, p) && N.rowInfo.detailable ? (w(), B(Yt, {
                    key: 0,
                    to: It(y(T)[p], N).toString(),
                    "is-external": !!N.url,
                    contrast: "",
                    size: "small"
                  }, {
                    default: S(() => [
                      P(F(we(Q, p, ne, !0)), 1)
                    ]),
                    _: 2
                  }, 1032, ["to", "is-external"])) : (w(), B(z, {
                    key: 1,
                    mood: Ge(Q, p, ne),
                    contrast: "",
                    size: "small"
                  }, {
                    default: S(() => [
                      P(F(we(Q, p, ne)), 1)
                    ]),
                    _: 2
                  }, 1032, ["mood"]))
                ], 64)) : Vt(N, p) && N.rowInfo.detailable ? (w(), B(Yt, {
                  key: 2,
                  to: It(y(T)[p], N).toString(),
                  "is-external": !!N.url,
                  contrast: "",
                  size: "small"
                }, {
                  default: S(() => [
                    P(F(we(Q, p, ne, !0)), 1)
                  ]),
                  _: 2
                }, 1032, ["to", "is-external"])) : pt === void 0 && Q >= 0.01 && p in y(g) ? (w(), B(un, {
                  key: 3,
                  format: y(g)[p].format,
                  label: we(Q, p, ne, !0),
                  title: y(g)[p].title,
                  url: In(p, N)
                }, null, 8, ["format", "label", "title", "url"])) : (w(), B(z, {
                  key: 4,
                  class: X(Mt(p, Q, N.rowInfo.detailable)),
                  mood: Ge(Q, p, ne),
                  contrast: "",
                  size: "small"
                }, {
                  default: S(() => [
                    P(F(we(Q, p, ne, !0)), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "mood"])),
                We(p, Q) ? (w(), j("i", {
                  key: 5,
                  class: X(["flex-grow-1 expand-column fa", Be.value.includes(p) ? "fa-compress-alt" : "fa-expand-alt"]),
                  onClick: () => ur(p)
                }, null, 10, uo)) : $("", !0)
              ], !0),
              Bt.value && N.rowInfo.detailable && p === y(_) ? (w(), j(J, { key: 0 }, [
                We(p, Q) ? $("", !0) : (w(), B(Sr, { key: 0 })),
                R(Qs, {
                  onHideDetails: () => Kn(N),
                  onShowDetails: (vt) => nr(vt, N),
                  labels: Bt.value,
                  open: ve.value[N[y(M)]] !== void 0,
                  title: a.detailsSelectorTitle
                }, null, 8, ["onHideDetails", "onShowDetails", "labels", "open", "title"])
              ], 64)) : $("", !0)
            ])
          }))
        ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "dragColumns", "fixedColumnNumber", "inversedKpis", "orderBy", "primaryColumn", "rows", "showRowNumber", "showTotal", "showTopTotal"])) : $("", !0)
      ], 32),
      G("div", {
        class: X(["loading-overlay", { visible: ge.value }])
      }, [
        R(Rt)
      ], 2)
    ]));
  }
});
const Do = /* @__PURE__ */ Oe(co, [["__scopeId", "data-v-53682408"]]), fo = { class: "scrollable flex-max no-spacing" }, po = ["onClick"], vo = { class: "scrollable flex-max no-spacing" }, mo = ["onClick"], ho = { class: "scrollable" }, bo = { class: "items flex-max no-spacing" }, go = /* @__PURE__ */ Se({
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
    const n = e, { columns: r, defaultValue: s, groupNames: o, modelValue: l, showModalLabel: f } = Ce(n), b = k(Object.keys(o.value)[0]), m = k([...l.value]), c = k([]), g = k([]), T = k(""), C = k(void 0), v = k(void 0), h = k(void 0), _ = k(void 0), A = k(void 0), H = I(() => Object.fromEntries(
      Object.entries(r.value).filter(
        ([O, E]) => E.fixed !== !0 && (T.value.trim() === "" || E.label.toLowerCase().includes(T.value.trim().toLowerCase()))
      )
    )), re = I(() => Object.keys(o.value).reduce((O, E) => (O[E] = Object.fromEntries(
      Object.entries(H.value).filter(([D, W]) => W.group === E)
    ), O), {})), se = I(
      () => b.value === void 0 ? void 0 : re.value[b.value]
    ), le = I(() => Object.fromEntries(
      Object.entries(o.value).filter(
        ([O, E]) => Object.values(H.value).some((D) => D.group === O)
      )
    )), M = I(() => {
      if (!(h.value === void 0 || _.value === void 0 || A.value === void 0))
        return h.value + A.value - _.value;
    }), pe = I(() => {
      if (M.value !== void 0)
        return `${M.value}px`;
    }), q = I(() => {
      if (v.value === void 0 || M.value === void 0)
        return;
      const O = m.value.indexOf(v.value), E = O - 1 - m.value.slice(0, O).reverse().findIndex((ue) => r.value[ue].fixed === !0);
      let D = m.value.slice(O + 1).findIndex((ue) => r.value[ue].fixed === !0);
      D >= 0 ? D += O + 1 : D = m.value.length;
      const W = Ee(m.value[E]), ve = W.offsetHeight, De = Math.min(
        Math.round((M.value - W.offsetTop) / ve - 1),
        D - E - 1
      );
      return E + De + 1;
    }), Ee = (O) => g.value[m.value.indexOf(O)], Z = (O) => c.value[m.value.indexOf(O)], be = (O = !1, E) => {
      E && E.target !== E.currentTarget || (O && (m.value = [...l.value]), C.value = !1, b.value = Object.keys(o.value)[0]);
    }, ot = (O) => {
      const E = m.value.indexOf(O);
      E >= 0 && m.value.splice(E, 1);
    }, Je = () => {
      m.value = [...s.value];
    }, at = (O) => {
      const E = [...O];
      t("update:modelValue", E), be(!1);
    }, xe = (O) => {
      b.value = O.toString();
    }, lt = () => {
      C.value = !0;
    }, Le = (O) => {
      const E = m.value.indexOf(O);
      E >= 0 ? m.value.splice(E, 1) : m.value.push(O);
    }, Re = (O) => {
      A.value = O.clientY;
    }, ie = () => {
      const O = q.value;
      if (v.value !== void 0 && O !== void 0) {
        const E = m.value.indexOf(v.value);
        m.value.splice(E, 1), m.value.splice(O, 0, v.value);
      }
      v.value = void 0, h.value = void 0, _.value = void 0, A.value = void 0, window.removeEventListener("mousemove", Re), window.removeEventListener("mouseup", ie);
    }, Te = (O, E) => {
      v.value = E, h.value = Z(E).$el.offsetTop, _.value = O.clientY, A.value = O.clientY, window.addEventListener("mousemove", Re), window.addEventListener("mouseup", ie);
    };
    return Ue(T, (O) => {
      O ? (!b.value || !(b.value in le.value)) && (b.value = Object.keys(le.value)[0]) : b.value || (b.value = Object.keys(le.value)[0]);
    }), (O, E) => (w(), j(J, null, [
      R(_t, {
        onClick: E[0] || (E[0] = () => lt()),
        disabled: O.disabled,
        label: y(f),
        mood: "neutral",
        tabindex: "-1"
      }, null, 8, ["disabled", "label"]),
      (w(), B(hr, { to: "#app > .app-container" }, [
        R(Y, {
          class: X(["kpi-selector-container no-spacing", { visible: C.value, hidden: C.value === !1 }]),
          onClick: E[5] || (E[5] = wt((D) => be(!0, D), ["stop"])),
          column: "",
          horizontal: "center",
          vertical: "center"
        }, {
          default: S(() => [
            R(gr, { class: "kpi-selector" }, {
              default: S(() => [
                R(Y, {
                  class: "title",
                  vertical: "center"
                }, {
                  default: S(() => [
                    R(Ve, {
                      class: "flex-max",
                      size: "large-2"
                    }, {
                      default: S(() => [
                        P(F(O.title), 1)
                      ]),
                      _: 1
                    }),
                    R(Y, {
                      class: "flex-max no-spacing search-container",
                      vertical: "center"
                    }, {
                      default: S(() => [
                        R(fn, {
                          class: "flex-max search",
                          modelValue: T.value,
                          "onUpdate:modelValue": E[1] || (E[1] = (D) => T.value = D),
                          placeholder: O.filterLabel
                        }, null, 8, ["modelValue", "placeholder"]),
                        R(Me, {
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
                      default: S(() => [
                        R(Me, {
                          class: "close",
                          onClick: E[2] || (E[2] = () => be(!0)),
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
                  default: S(() => [
                    b.value !== void 0 && se.value !== void 0 ? (w(), j(J, { key: 0 }, [
                      R(Y, {
                        class: "groups flex-max",
                        column: ""
                      }, {
                        default: S(() => [
                          R(Ve, { size: "large-2" }, {
                            default: S(() => [
                              P(F(O.groupsTitle), 1)
                            ]),
                            _: 1
                          }),
                          G("div", fo, [
                            (w(!0), j(J, null, _e(Object.entries(le.value), ([D, W]) => (w(), j("div", {
                              class: X(["item no-spacing", { selected: b.value === D }]),
                              onClick: () => xe(D)
                            }, [
                              R(z, { size: "small" }, {
                                default: S(() => [
                                  P(F(W), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, po))), 256))
                          ])
                        ]),
                        _: 1
                      }),
                      R(Y, {
                        class: "group-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: S(() => [
                          R(Ve, { size: "large-2" }, {
                            default: S(() => [
                              P(F(y(o)[b.value]), 1)
                            ]),
                            _: 1
                          }),
                          G("div", vo, [
                            (w(!0), j(J, null, _e(Object.entries(se.value), ([D, W]) => (w(), j("div", {
                              class: X(["item no-spacing", { selected: m.value.includes(D) }]),
                              onClick: () => Le(D),
                              key: D
                            }, [
                              R(z, { size: "small" }, {
                                default: S(() => [
                                  P(F(W.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, mo))), 128))
                          ])
                        ]),
                        _: 1
                      }),
                      R(Y, {
                        class: "enabled-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: S(() => [
                          R(Y, {
                            class: "header",
                            vertical: "center"
                          }, {
                            default: S(() => [
                              R(Ve, {
                                class: "flex-max",
                                size: "large-2"
                              }, {
                                default: S(() => [
                                  P(F(O.orderTitle), 1)
                                ]),
                                _: 1
                              }),
                              R(z, {
                                class: "reset",
                                onClick: E[3] || (E[3] = () => Je()),
                                mood: "important-alt",
                                size: "small"
                              }, {
                                default: S(() => [
                                  P(F(O.resetLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          G("div", ho, [
                            G("div", bo, [
                              (w(!0), j(J, null, _e(m.value, (D) => (w(), j("div", {
                                class: "item-container no-spacing",
                                ref_for: !0,
                                ref_key: "enabledColumnContainers",
                                ref: g
                              }, [
                                G("div", {
                                  class: X(["separator-top no-spacing", { "place-after": q.value !== void 0 && v.value !== void 0 && D === m.value[q.value] && q.value < m.value.indexOf(v.value) }])
                                }, null, 2),
                                R(Y, {
                                  class: X(["item no-spacing", { dragged: D === v.value }]),
                                  ref_for: !0,
                                  ref_key: "enabledColumnElements",
                                  ref: c,
                                  style: br(D === v.value ? { top: pe.value } : void 0),
                                  vertical: "center"
                                }, {
                                  default: S(() => [
                                    y(r)[D].fixed ? (w(), B(z, {
                                      key: 0,
                                      class: X(["flex-max", { fixed: y(r)[D].fixed }]),
                                      size: "small"
                                    }, {
                                      default: S(() => [
                                        P(F(y(r)[D].label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])) : (w(), j(J, { key: 1 }, [
                                      R(Me, {
                                        class: "move",
                                        onMousedown: (W) => Te(W, D),
                                        value: "dots-vertical-rounded"
                                      }, null, 8, ["onMousedown"]),
                                      R(z, {
                                        class: "flex-max no-spacing",
                                        size: "small"
                                      }, {
                                        default: S(() => [
                                          P(F(y(r)[D].label), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      R(Me, {
                                        class: "no-spacing remove",
                                        onClick: () => ot(D),
                                        value: "trash"
                                      }, null, 8, ["onClick"])
                                    ], 64))
                                  ]),
                                  _: 2
                                }, 1032, ["class", "style"]),
                                G("div", {
                                  class: X(["separator-bottom no-spacing", { "place-after": q.value !== void 0 && v.value !== void 0 && D === m.value[q.value] && q.value >= m.value.indexOf(v.value) }])
                                }, null, 2)
                              ], 512))), 256))
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ], 64)) : (w(), B(Y, {
                      key: 1,
                      class: "flex-max",
                      horizontal: "center",
                      vertical: "center"
                    }, {
                      default: S(() => [
                        R(z, { size: "small" }, {
                          default: S(() => [
                            P(F(O.noColumnsFoundLabel), 1)
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
                  default: S(() => [
                    R(_t, {
                      onClick: E[4] || (E[4] = () => at(m.value)),
                      label: O.applyLabel,
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
const Bo = /* @__PURE__ */ Oe(go, [["__scopeId", "data-v-722df236"]]);
export {
  Do as CommonTable,
  Bo as KpiSelector
};
