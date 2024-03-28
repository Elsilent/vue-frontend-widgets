import { defineComponent as ye, toRefs as _e, ref as k, openBlock as C, createElementBlock as D, normalizeClass as G, createElementVNode as q, withModifiers as je, toDisplayString as N, unref as y, createVNode as R, withCtx as S, createCommentVNode as H, Fragment as X, renderList as Ae, createBlock as B, pushScopeId as ln, popScopeId as un, onUnmounted as fr, createTextVNode as P, computed as U, onMounted as pr, watch as Ge, createSlots as vr, renderSlot as qt, normalizeProps as mr, guardReactiveProps as hr, nextTick as Jt, Teleport as br, normalizeStyle as gr } from "vue";
import he from "numeral";
import { L as Et, a as wr } from "./LineBarChart-8bc1f7a1.js";
import { P as xt } from "./Popover-38d3223e.js";
import { _ as Se } from "./_plugin-vue_export-helper-dad06003.js";
import { A as Q, I as Ie, C as yr } from "./Icon-8f2ed8ba.js";
import { I as j } from "./Info-54758b60.js";
import { B as _r } from "./BodyPopover-9b857526.js";
import { D as cn, I as dn, B as Wt } from "./Input-7f2c48d4.js";
import { L as Gt } from "./Link-dfe99e72.js";
import { Separator as Sr } from "./marker.js";
import { T as Cr } from "./Table-98c226d0.js";
import { H as ze } from "./Header-8b49a8fe.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "vue-router";
import "./datetime-31a2b505.js";
function fn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Or } = Object.prototype, { getPrototypeOf: Rt } = Object, et = ((e) => (t) => {
  const n = Or.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ae = (e) => (e = e.toLowerCase(), (t) => et(t) === e), tt = (e) => (t) => typeof t === e, { isArray: Ne } = Array, Ue = tt("undefined");
function Er(e) {
  return e !== null && !Ue(e) && e.constructor !== null && !Ue(e.constructor) && ee(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const pn = ae("ArrayBuffer");
function xr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && pn(e.buffer), t;
}
const Rr = tt("string"), ee = tt("function"), vn = tt("number"), nt = (e) => e !== null && typeof e == "object", Tr = (e) => e === !0 || e === !1, Xe = (e) => {
  if (et(e) !== "object")
    return !1;
  const t = Rt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Ar = ae("Date"), kr = ae("File"), Nr = ae("Blob"), Pr = ae("FileList"), Fr = (e) => nt(e) && ee(e.pipe), Lr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ee(e.append) && ((t = et(e)) === "formdata" || // detect form-data instance
  t === "object" && ee(e.toString) && e.toString() === "[object FormData]"));
}, Dr = ae("URLSearchParams"), Br = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
const hn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), bn = (e) => !Ue(e) && e !== hn;
function yt() {
  const { caseless: e } = bn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && mn(t, s) || s;
    Xe(t[o]) && Xe(r) ? t[o] = yt(t[o], r) : Xe(r) ? t[o] = yt({}, r) : Ne(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Me(arguments[r], n);
  return t;
}
const Ir = (e, t, n, { allOwnKeys: r } = {}) => (Me(t, (s, o) => {
  n && ee(s) ? e[o] = fn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), zr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), jr = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Ur = (e, t, n, r) => {
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
}, Mr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Vr = (e) => {
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
}, $r = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Rt(Uint8Array)), Hr = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, qr = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Jr = ae("HTMLFormElement"), Wr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Xt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Gr = ae("RegExp"), gn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Me(n, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (r[o] = a || s);
  }), Object.defineProperties(e, r);
}, Xr = (e) => {
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
}, Yr = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Ne(e) ? r(e) : r(String(e).split(t)), n;
}, Qr = () => {
}, Zr = (e, t) => (e = +e, Number.isFinite(e) ? e : t), mt = "abcdefghijklmnopqrstuvwxyz", Yt = "0123456789", wn = {
  DIGIT: Yt,
  ALPHA: mt,
  ALPHA_DIGIT: mt + mt.toUpperCase() + Yt
}, Kr = (e = 16, t = wn.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function es(e) {
  return !!(e && ee(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ts = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (nt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Ne(r) ? [] : {};
        return Me(r, (a, d) => {
          const b = n(a, s + 1);
          !Ue(b) && (o[d] = b);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, ns = ae("AsyncFunction"), rs = (e) => e && (nt(e) || ee(e)) && ee(e.then) && ee(e.catch), f = {
  isArray: Ne,
  isArrayBuffer: pn,
  isBuffer: Er,
  isFormData: Lr,
  isArrayBufferView: xr,
  isString: Rr,
  isNumber: vn,
  isBoolean: Tr,
  isObject: nt,
  isPlainObject: Xe,
  isUndefined: Ue,
  isDate: Ar,
  isFile: kr,
  isBlob: Nr,
  isRegExp: Gr,
  isFunction: ee,
  isStream: Fr,
  isURLSearchParams: Dr,
  isTypedArray: $r,
  isFileList: Pr,
  forEach: Me,
  merge: yt,
  extend: Ir,
  trim: Br,
  stripBOM: zr,
  inherits: jr,
  toFlatObject: Ur,
  kindOf: et,
  kindOfTest: ae,
  endsWith: Mr,
  toArray: Vr,
  forEachEntry: Hr,
  matchAll: qr,
  isHTMLForm: Jr,
  hasOwnProperty: Xt,
  hasOwnProp: Xt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: gn,
  freezeMethods: Xr,
  toObjectSet: Yr,
  toCamelCase: Wr,
  noop: Qr,
  toFiniteNumber: Zr,
  findKey: mn,
  global: hn,
  isContextDefined: bn,
  ALPHABET: wn,
  generateString: Kr,
  isSpecCompliantForm: es,
  toJSONObject: ts,
  isAsyncFn: ns,
  isThenable: rs
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
const yn = F.prototype, _n = {};
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
Object.defineProperties(F, _n);
Object.defineProperty(yn, "isAxiosError", { value: !0 });
F.from = (e, t, n, r, s, o) => {
  const a = Object.create(yn);
  return f.toFlatObject(e, a, function(b) {
    return b !== Error.prototype;
  }, (d) => d !== "isAxiosError"), F.call(a, e.message, t, n, r, s), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const ss = null;
function _t(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function Sn(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Qt(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Sn(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function os(e) {
  return f.isArray(e) && !e.some(_t);
}
const as = f.toFlatObject(f, {}, null, function(t) {
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
  const r = n.metaTokens, s = n.visitor || c, o = n.dots, a = n.indexes, b = (n.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(t);
  if (!f.isFunction(s))
    throw new TypeError("visitor must be a function");
  function v(p) {
    if (p === null)
      return "";
    if (f.isDate(p))
      return p.toISOString();
    if (!b && f.isBlob(p))
      throw new F("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(p) || f.isTypedArray(p) ? b && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function c(p, m, g) {
    let A = p;
    if (p && !g && typeof p == "object") {
      if (f.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (f.isArray(p) && os(p) || (f.isFileList(p) || f.endsWith(m, "[]")) && (A = f.toArray(p)))
        return m = Sn(m), A.forEach(function(ne, re) {
          !(f.isUndefined(ne) || ne === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Qt([m], re, o) : a === null ? m : m + "[]",
            v(ne)
          );
        }), !1;
    }
    return _t(p) ? !0 : (t.append(Qt(g, m, o), v(p)), !1);
  }
  const w = [], T = Object.assign(as, {
    defaultVisitor: c,
    convertValue: v,
    isVisitable: _t
  });
  function O(p, m) {
    if (!f.isUndefined(p)) {
      if (w.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      w.push(p), f.forEach(p, function(A, I) {
        (!(f.isUndefined(A) || A === null) && s.call(
          t,
          A,
          f.isString(I) ? I.trim() : I,
          m,
          T
        )) === !0 && O(A, m ? m.concat(I) : [I]);
      }), w.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return O(e), t;
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
function Tt(e, t) {
  this._pairs = [], e && rt(e, this, t);
}
const Cn = Tt.prototype;
Cn.append = function(t, n) {
  this._pairs.push([t, n]);
};
Cn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Zt);
  } : Zt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function ls(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function On(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ls, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = f.isURLSearchParams(t) ? t.toString() : new Tt(t, n).toString(r), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class is {
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
const Kt = is, En = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, us = typeof URLSearchParams < "u" ? URLSearchParams : Tt, cs = typeof FormData < "u" ? FormData : null, ds = typeof Blob < "u" ? Blob : null, fs = {
  isBrowser: !0,
  classes: {
    URLSearchParams: us,
    FormData: cs,
    Blob: ds
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, xn = typeof window < "u" && typeof document < "u", ps = ((e) => xn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), vs = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: xn,
  hasStandardBrowserEnv: ps,
  hasStandardBrowserWebWorkerEnv: vs
}, Symbol.toStringTag, { value: "Module" })), oe = {
  ...ms,
  ...fs
};
function hs(e, t) {
  return rt(e, new oe.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return oe.isNode && f.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function bs(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function gs(e) {
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
    const d = Number.isFinite(+a), b = o >= n.length;
    return a = !a && f.isArray(s) ? s.length : a, b ? (f.hasOwnProp(s, a) ? s[a] = [s[a], r] : s[a] = r, !d) : ((!s[a] || !f.isObject(s[a])) && (s[a] = []), t(n, r, s[a], o) && f.isArray(s[a]) && (s[a] = gs(s[a])), !d);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const n = {};
    return f.forEachEntry(e, (r, s) => {
      t(bs(r), s, n, 0);
    }), n;
  }
  return null;
}
function ws(e, t, n) {
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
        return hs(t, this.formSerializer).toString();
      if ((d = f.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const b = this.env && this.env.FormData;
        return rt(
          d ? { "files[]": t } : t,
          b && new b(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), ws(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || At.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
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
  At.headers[e] = {};
});
const kt = At, ys = f.toObjectSet([
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
]), _s = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), n = a.substring(0, s).trim().toLowerCase(), r = a.substring(s + 1).trim(), !(!n || t[n] && ys[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, en = Symbol("internals");
function Be(e) {
  return e && String(e).trim().toLowerCase();
}
function Ye(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(Ye) : String(e);
}
function Ss(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Cs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function Os(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Es(e, t) {
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
    function o(d, b, v) {
      const c = Be(b);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const w = f.findKey(s, c);
      (!w || s[w] === void 0 || v === !0 || v === void 0 && s[w] !== !1) && (s[w || b] = Ye(d));
    }
    const a = (d, b) => f.forEach(d, (v, c) => o(v, c, b));
    return f.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : f.isString(t) && (t = t.trim()) && !Cs(t) ? a(_s(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = Be(t), t) {
      const r = f.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Ss(s);
        if (f.isFunction(n))
          return n.call(this, s, r);
        if (f.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Be(t), t) {
      const r = f.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ht(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(a) {
      if (a = Be(a), a) {
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
        n[a] = Ye(s), delete n[o];
        return;
      }
      const d = t ? Os(o) : String(o).trim();
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
    const r = (this[en] = this[en] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const d = Be(a);
      r[d] || (Es(s, a), r[d] = !0);
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
const ce = st;
function bt(e, t) {
  const n = this || kt, r = t || n, s = ce.from(r.headers);
  let o = r.data;
  return f.forEach(e, function(d) {
    o = d.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Tn(e) {
  return !!(e && e.__CANCEL__);
}
function Ve(e, t, n) {
  F.call(this, e ?? "canceled", F.ERR_CANCELED, t, n), this.name = "CanceledError";
}
f.inherits(Ve, F, {
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
const Rs = oe.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, s, o, a, d) {
        const b = [];
        b.push(n + "=" + encodeURIComponent(r)), f.isNumber(s) && b.push("expires=" + new Date(s).toGMTString()), f.isString(o) && b.push("path=" + o), f.isString(a) && b.push("domain=" + a), d === !0 && b.push("secure"), document.cookie = b.join("; ");
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
function Ts(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function As(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function An(e, t) {
  return e && !Ts(t) ? As(e, t) : t;
}
const ks = oe.hasStandardBrowserEnv ? (
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
function Ns(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ps(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(b) {
    const v = Date.now(), c = r[o];
    a || (a = v), n[s] = b, r[s] = v;
    let w = o, T = 0;
    for (; w !== s; )
      T += n[w++], w = w % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), v - a < t)
      return;
    const O = c && v - c;
    return O ? Math.round(T * 1e3 / O) : void 0;
  };
}
function tn(e, t) {
  let n = 0;
  const r = Ps(50, 250);
  return (s) => {
    const o = s.loaded, a = s.lengthComputable ? s.total : void 0, d = o - n, b = r(d), v = o <= a;
    n = o;
    const c = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: d,
      rate: b || void 0,
      estimated: b && a && v ? (a - o) / b : void 0,
      event: s
    };
    c[t ? "download" : "upload"] = !0, e(c);
  };
}
const Fs = typeof XMLHttpRequest < "u", Ls = Fs && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = ce.from(e.headers).normalize(), a = e.responseType;
    let d;
    function b() {
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
    const w = An(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), On(w, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function T() {
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
      xs(function(I) {
        n(I), b();
      }, function(I) {
        r(I), b();
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
      const p = ks(w) && e.xsrfCookieName && Rs.read(e.xsrfCookieName);
      p && o.set(e.xsrfHeaderName, p);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in c && f.forEach(o.toJSON(), function(m, g) {
      c.setRequestHeader(g, m);
    }), f.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), a && a !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", tn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", tn(e.onUploadProgress)), (e.cancelToken || e.signal) && (d = (p) => {
      c && (r(!p || p.type ? new Ve(null, e, c) : p), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(d), e.signal && (e.signal.aborted ? d() : e.signal.addEventListener("abort", d)));
    const O = Ns(w);
    if (O && oe.protocols.indexOf(O) === -1) {
      r(new F("Unsupported protocol " + O + ":", F.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, St = {
  http: ss,
  xhr: Ls
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
const nn = (e) => `- ${e}`, Ds = (e) => f.isFunction(e) || e === null || e === !1, kn = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let a;
      if (r = n, !Ds(n) && (r = St[(a = String(n)).toLowerCase()], r === void 0))
        throw new F(`Unknown adapter '${a}'`);
      if (r)
        break;
      s[a || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([d, b]) => `adapter ${d} ` + (b === !1 ? "is not supported by the environment" : "is not available in the build")
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
  adapters: St
};
function gt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ve(null, e);
}
function rn(e) {
  return gt(e), e.headers = ce.from(e.headers), e.data = bt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kn.getAdapter(e.adapter || kt.adapter)(e).then(function(r) {
    return gt(e), r.data = bt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = ce.from(r.headers), r;
  }, function(r) {
    return Tn(r) || (gt(e), r && r.response && (r.response.data = bt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = ce.from(r.response.headers))), Promise.reject(r);
  });
}
const sn = (e) => e instanceof ce ? e.toJSON() : e;
function ke(e, t) {
  t = t || {};
  const n = {};
  function r(v, c, w) {
    return f.isPlainObject(v) && f.isPlainObject(c) ? f.merge.call({ caseless: w }, v, c) : f.isPlainObject(c) ? f.merge({}, c) : f.isArray(c) ? c.slice() : c;
  }
  function s(v, c, w) {
    if (f.isUndefined(c)) {
      if (!f.isUndefined(v))
        return r(void 0, v, w);
    } else
      return r(v, c, w);
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
  function d(v, c, w) {
    if (w in t)
      return r(v, c);
    if (w in e)
      return r(void 0, v);
  }
  const b = {
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
    const w = b[c] || s, T = w(e[c], t[c], c);
    f.isUndefined(T) && w !== d || (n[c] = T);
  }), n;
}
const Nn = "1.6.1", Nt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Nt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const on = {};
Nt.transitional = function(t, n, r) {
  function s(o, a) {
    return "[Axios v" + Nn + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
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
function Bs(e, t, n) {
  if (typeof e != "object")
    throw new F("options must be an object", F.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], a = t[o];
    if (a) {
      const d = e[o], b = d === void 0 || a(d, o, e);
      if (b !== !0)
        throw new F("option " + o + " must be " + b, F.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new F("Unknown option " + o, F.ERR_BAD_OPTION);
  }
}
const Ct = {
  assertOptions: Bs,
  validators: Nt
}, me = Ct.validators;
class Ze {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = ke(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && Ct.assertOptions(r, {
      silentJSONParsing: me.transitional(me.boolean),
      forcedJSONParsing: me.transitional(me.boolean),
      clarifyTimeoutError: me.transitional(me.boolean)
    }, !1), s != null && (f.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Ct.assertOptions(s, {
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
    let b = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (b = b && m.synchronous, d.unshift(m.fulfilled, m.rejected));
    });
    const v = [];
    this.interceptors.response.forEach(function(m) {
      v.push(m.fulfilled, m.rejected);
    });
    let c, w = 0, T;
    if (!b) {
      const p = [rn.bind(this), void 0];
      for (p.unshift.apply(p, d), p.push.apply(p, v), T = p.length, c = Promise.resolve(n); w < T; )
        c = c.then(p[w++], p[w++]);
      return c;
    }
    T = d.length;
    let O = n;
    for (w = 0; w < T; ) {
      const p = d[w++], m = d[w++];
      try {
        O = p(O);
      } catch (g) {
        m.call(this, g);
        break;
      }
    }
    try {
      c = rn.call(this, O);
    } catch (p) {
      return Promise.reject(p);
    }
    for (w = 0, T = v.length; w < T; )
      c = c.then(v[w++], v[w++]);
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
const Qe = Ze;
class Pt {
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
      r.reason || (r.reason = new Ve(o, a, d), n(r.reason));
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
      token: new Pt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Is = Pt;
function zs(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function js(e) {
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
const Us = Ot;
function Pn(e) {
  const t = new Qe(e), n = fn(Qe.prototype.request, t);
  return f.extend(n, Qe.prototype, t, { allOwnKeys: !0 }), f.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Pn(ke(e, s));
  }, n;
}
const V = Pn(kt);
V.Axios = Qe;
V.CanceledError = Ve;
V.CancelToken = Is;
V.isCancel = Tn;
V.VERSION = Nn;
V.toFormData = rt;
V.AxiosError = F;
V.Cancel = V.CanceledError;
V.all = function(t) {
  return Promise.all(t);
};
V.spread = zs;
V.isAxiosError = js;
V.mergeConfig = ke;
V.AxiosHeaders = ce;
V.formToJSON = (e) => Rn(f.isHTMLForm(e) ? new FormData(e) : e);
V.getAdapter = kn.getAdapter;
V.HttpStatusCode = Us;
V.default = V;
const Ke = V;
he.localeData().delimiters.thousands = " ";
he.localeData().delimiters.decimal = ",";
const Ms = (e) => e === void 0 ? void 0 : JSON.parse(JSON.stringify(e)), Vs = (e) => {
  if (!Array.isArray(e) && Object.getPrototypeOf(e) !== Object.prototype)
    throw new Error(
      "Tried cloning instance of a class. Consider implementing clone method instead."
    );
  return Ms(e);
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
function $s(e, t, n, r) {
  const s = {};
  for (const o of Object.values(e)) {
    const a = o[r], d = Object.values(t).find(
      (b) => b[r] === a
    );
    s[a] = Fn(o, d, n);
  }
  return s;
}
const Hs = {
  key: 0,
  class: "popover-header"
}, qs = {
  key: 1,
  class: "popover-body"
}, Js = {
  important: "",
  size: "small"
}, Ws = { size: "small" }, Gs = /* @__PURE__ */ ye({
  __name: "CellHint",
  props: {
    format: {},
    label: {},
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { format: n, label: r, title: s, url: o } = _e(t), a = k(), d = k(!1), b = k(), v = (m) => {
      var g;
      m && (!m.target || (g = b.value) != null && g.contains(m.target)) || (d.value = !1, window.removeEventListener("mouseup", v));
    }, c = (m) => m.map(({ name: g, valueFormatted: A }) => ({
      label: g,
      value: A
    })), w = (m) => m.map(({ name: g, rate: A, value: I }) => ({
      label: g,
      value: `${he(I).format("0,0")} (${he(A).format("0,0.00")}%)`
    })), T = (m) => {
      switch (n.value) {
        case "distribution":
          return c(m);
        case "rated_distribution":
          return w(m);
        default:
          throw new Error(`Unsupported format: ${n.value}`);
      }
    }, O = async () => {
      if (window.addEventListener("mouseup", v), a.value)
        return;
      const m = (await Ke(o.value)).data;
      a.value = T(m);
    }, p = async () => {
      d.value = !0, await O();
    };
    return (m, g) => (C(), D("div", {
      class: G(["cell-hint", { visible: d.value }]),
      ref_key: "root",
      ref: b,
      onMouseover: g[1] || (g[1] = () => p()),
      onMouseout: g[2] || (g[2] = () => v())
    }, [
      q("span", {
        class: "label",
        onClick: g[0] || (g[0] = je(() => p(), ["stop"]))
      }, N(y(r)), 1),
      R(xt, {
        visible: d.value,
        parentClass: "cell",
        popoverClass: "cell-hint-popover"
      }, {
        default: S(() => [
          y(s) ? (C(), D("div", Hs, N(y(s)), 1)) : H("", !0),
          a.value ? (C(), D("div", qs, [
            (C(!0), D(X, null, Ae(a.value, ({ label: A, value: I }, ne) => (C(), D("div", {
              key: `line-${ne}`
            }, [
              q("b", Js, N(A) + ": ", 1),
              q("span", Ws, N(I), 1)
            ]))), 128))
          ])) : (C(), B(Et, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ], 34));
  }
});
const an = /* @__PURE__ */ Se(Gs, [["__scopeId", "data-v-9c7f570a"]]), Xs = (e) => (ln("data-v-7a1d1810"), e = e(), un(), e), Ys = { class: "column-hint" }, Qs = /* @__PURE__ */ Xs(() => /* @__PURE__ */ q("i", { class: "la la-question-circle" }, null, -1)), Zs = { class: "popover-header" }, Ks = { class: "popover-body" }, eo = /* @__PURE__ */ ye({
  __name: "ColumnHint",
  props: {
    description: {},
    title: {},
    visible: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { description: n, title: r, visible: s } = _e(t);
    return (o, a) => (C(), D("div", Ys, [
      Qs,
      R(xt, {
        visible: y(s),
        parentClass: "cell",
        popoverClass: "column-hint-popover"
      }, {
        default: S(() => [
          q("div", Zs, N(y(r)), 1),
          q("div", Ks, N(y(n)), 1)
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const to = /* @__PURE__ */ Se(eo, [["__scopeId", "data-v-7a1d1810"]]), no = /* @__PURE__ */ ye({
  __name: "DetailsSelector",
  props: {
    labels: {},
    open: { type: Boolean, default: !1 },
    title: {}
  },
  emits: ["hideDetails", "showDetails"],
  setup(e, { emit: t }) {
    const n = e, { labels: r, open: s, title: o } = _e(n), a = k(!1), d = k(), b = k(), v = (T) => {
      var O, p;
      !T.target || (O = b.value) != null && O.contains(T.target) || (p = d.value) != null && p.$el.contains(T.target) || (a.value = !1, window.removeEventListener("mouseup", v));
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
    }, w = (T) => {
      if (a.value = !1, s.value) {
        t("hideDetails");
        return;
      }
      t("showDetails", T);
    };
    return fr(() => {
      window.removeEventListener("mouseup", v);
    }), (T, O) => (C(), D("div", {
      class: "details-selector-container",
      ref_key: "root",
      ref: b,
      onClick: O[0] || (O[0] = je(() => c(), ["stop"]))
    }, [
      R(Q, {
        class: "details-selector",
        vertical: "center"
      }, {
        default: S(() => [
          y(o) ? (C(), B(j, {
            key: 0,
            mood: "important-alt",
            size: "small"
          }, {
            default: S(() => [
              P(N(y(o)), 1)
            ]),
            _: 1
          })) : H("", !0),
          R(Ie, {
            value: y(s) ? "chevron-up" : "chevron-down",
            mood: "important-alt",
            size: "large-2"
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      R(_r, {
        ref_key: "popover",
        ref: d,
        parentNode: b.value,
        visible: a.value,
        autoPosition: "",
        popoverClass: "details-selector-popover"
      }, {
        default: S(() => [
          (C(!0), D(X, null, Ae(y(r), (p, m) => (C(), B(j, {
            class: "dropdown-item",
            onClick: je(() => w(m), ["stop"]),
            contrast: ""
          }, {
            default: S(() => [
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
const ro = /* @__PURE__ */ Se(no, [["__scopeId", "data-v-4d4dbc91"]]), so = { class: "pagination" }, oo = ["onClick"], ao = /* @__PURE__ */ ye({
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
    const n = e, { currentPageSize: r, id: s, pageNumber: o, pageRadius: a, pageSizeLabel: d, pageSizes: b, rowCount: v } = _e(n), c = U(() => Math.min(...b.value)), w = U(() => Math.ceil(v.value / r.value)), T = U(
      () => b.value.reduce((m, g) => (m[g] = g.toString(), m), {})
    ), O = U(() => {
      const m = [];
      for (let g = a.value - 1; g > 0; g--)
        o.value > g && m.push(o.value - g);
      m.push(o.value);
      for (let g = 1; g < a.value; g++)
        o.value < w.value - g - 1 && m.push(o.value + g);
      return m;
    }), p = (m) => {
      r.value !== m && t("update:currentPageSize", m);
    };
    return (m, g) => (C(), D("div", so, [
      y(v) > y(r) ? (C(), D(X, { key: 0 }, [
        y(o) > 0 ? (C(), B(j, {
          key: 0,
          class: "page",
          onClick: g[0] || (g[0] = () => t("update:pageNumber", 0)),
          mood: "important-alt"
        }, {
          default: S(() => [
            P("1")
          ]),
          _: 1
        })) : H("", !0),
        y(o) > y(a) ? (C(), B(j, {
          key: 1,
          class: "page-separator"
        }, {
          default: S(() => [
            P("…")
          ]),
          _: 1
        })) : H("", !0),
        (C(!0), D(X, null, Ae(O.value, (A) => (C(), D("div", {
          class: G(["page", { current: A === y(o) }]),
          onClick: () => t("update:pageNumber", A),
          key: A
        }, N(A + 1), 11, oo))), 128)),
        y(o) < w.value - y(a) - 1 ? (C(), B(j, {
          key: 2,
          class: "page-separator"
        }, {
          default: S(() => [
            P("…")
          ]),
          _: 1
        })) : H("", !0),
        y(o) < w.value - 1 ? (C(), B(j, {
          key: 3,
          class: "page",
          onClick: g[1] || (g[1] = () => t("update:pageNumber", w.value - 1)),
          mood: "important-alt"
        }, {
          default: S(() => [
            P(N(w.value), 1)
          ]),
          _: 1
        })) : H("", !0),
        R(j, { class: "page-size-label" }, {
          default: S(() => [
            P(N(y(d)), 1)
          ]),
          _: 1
        })
      ], 64)) : H("", !0),
      y(v) > c.value ? (C(), B(cn, {
        key: 1,
        class: "page-size-selector",
        "onUpdate:modelValue": g[2] || (g[2] = (A) => p(parseInt(A.toString()))),
        id: y(s),
        items: T.value,
        modelValue: y(r)
      }, {
        item: S(({ item: A }) => [
          P(N(A), 1)
        ]),
        _: 1
      }, 8, ["id", "items", "modelValue"])) : H("", !0)
    ]));
  }
});
const lo = /* @__PURE__ */ Se(ao, [["__scopeId", "data-v-764cc1be"]]), io = (e) => (ln("data-v-b4f986aa"), e = e(), un(), e), uo = /* @__PURE__ */ io(() => /* @__PURE__ */ q("i", { class: "la la-eye secondary" }, null, -1)), co = /* @__PURE__ */ ye({
  __name: "TrendChart",
  props: {
    formatter: { type: Function },
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { formatter: n, title: r, url: s } = _e(t), o = k(!1), a = k([]), d = k(), b = U(() => d.value ? Object.assign({}, d.value) : {}), v = U(() => {
      var g;
      switch ((g = d.value) == null ? void 0 : g.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return d.value[0];
        default:
          return d.value.slice(d.value.length / 2).reduce((A, I) => A + I, 0) / Math.ceil(d.value.length / 2);
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
          return d.value.slice(0, d.value.length / 2).reduce((A, I) => A + I, 0) / Math.floor(d.value.length / 2);
      }
    }), w = U(() => c.value > v.value ? "negative" : c.value < v.value ? "positive" : "neutral"), T = U(() => {
      if (!d.value)
        return {};
      const g = new Array(d.value.length).fill(0).map(
        (A, I) => c.value + (v.value - c.value) * I / (d.value.length - 1)
      );
      return Object.assign({}, g);
    }), O = async () => {
      if (!d.value)
        return;
      const g = (await Ke({ url: s.value })).data;
      a.value = Object.keys(g), d.value = Object.values(g);
    }, p = () => {
      o.value = !1, window.removeEventListener("mouseup", p);
    }, m = async () => {
      o.value = !0, window.addEventListener("mouseup", p), await O();
    };
    return (g, A) => (C(), D("div", {
      class: "trend-chart-container",
      onClick: A[0] || (A[0] = je(() => m(), ["stop"]))
    }, [
      uo,
      R(xt, {
        visible: o.value,
        parentClass: "cell",
        popoverClass: "trend-chart-popover"
      }, {
        default: S(() => [
          y(r) ? (C(), B(ze, {
            key: 0,
            size: "small-3"
          }, {
            default: S(() => [
              P(N(y(r)), 1)
            ]),
            _: 1
          })) : H("", !0),
          d.value ? (C(), B(wr, {
            key: 1,
            activeLines: ["values"],
            formatters: { trend: y(n), values: y(n) },
            moods: { trend: { mood: w.value }, values: { mood: "important" } },
            styles: { trend: "line", values: "line" },
            values: { trend: T.value, values: b.value }
          }, {
            "x-axis-label": S(({ index: I }) => [
              P(N(a.value[I]), 1)
            ]),
            _: 1
          }, 8, ["formatters", "moods", "values"])) : (C(), B(Et, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const fo = /* @__PURE__ */ Se(co, [["__scopeId", "data-v-b4f986aa"]]), po = { class: "common-table" }, vo = {
  key: 0,
  class: "controls d-flex justify-content-end mb-1"
}, mo = ["onMouseover", "onMouseout"], ho = ["onClick"], wt = 50, bo = /* @__PURE__ */ ye({
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
      clientCurrencySymbolPrefix: b,
      colorMetrics: v,
      columns: c,
      columnDetails: w,
      columnLinks: T,
      comparisonColumns: O,
      comparisonRequest: p,
      defaultOrderBy: m,
      detailsColumn: g,
      detailsRequests: A,
      dragColumns: I,
      fixedColumnNumber: ne,
      inlineFilterOperators: re,
      inversedKpis: le,
      primaryColumn: $,
      primaryColumnAlias: de,
      request: J,
      rows: Ce,
      shortenColumns: Z,
      showInlineFilters: be,
      showRowNumber: ot,
      showPagination: at,
      showTopTotal: lt,
      total: Oe,
      totalColumnKey: it,
      trendUrl: Pe
    } = _e(n), Ee = () => {
      const l = {};
      for (const u of Object.keys(c.value))
        u in re.value && (l[u] = {
          operator: Object.keys(re.value[u])[0],
          value: ""
        });
      return l;
    }, fe = k([]), xe = k(void 0), E = k({}), x = k([]), L = k({}), W = k([]), pe = k({}), Fe = k(!1), ie = k(!1), $e = k([]), He = k(!1), te = k(Ee()), Le = k(!0), se = k(), ve = k(0), ge = k(20), qe = k(0), K = k(), ue = k(), Ln = U(() => {
      const l = {};
      return ie.value && (l.inline_filters = {
        icon: "filter"
      }), l;
    }), Dn = U(
      () => O != null && O.value ? Object.keys(O.value) : void 0
    ), Bn = U(
      () => W.value.reduce((l, u) => (l[u] = Vs(c.value[u]), l), {})
    ), Ft = U(() => {
      if (A != null && A.value)
        return Object.entries(A.value).reduce((l, [u, { label: i }]) => (l[u] = i, l), {});
    }), Lt = U(() => [...fe.value].sort((l, u) => {
      const i = (() => {
        const h = ct(
          se.value[0].reduce((M, z) => M[z], l),
          c.value[se.value[0][0]].type
        ), _ = ct(
          se.value[0].reduce((M, z) => M[z], u),
          c.value[se.value[0][0]].type
        );
        return h > _ ? 1 : h < _ ? -1 : 0;
      })();
      return se.value[1] ? -i : i;
    })), Dt = U(() => !(J != null && J.value) || He.value ? Lt.value : Lt.value.slice(
      ve.value * ge.value,
      (ve.value + 1) * ge.value
    )), In = (l) => {
      x.value.includes(l) || x.value.push(l);
    }, Je = (l, u) => !Z.value || !Z.value.includes(l) ? !1 : u.length > wt, zn = (l) => !!l.tooltipTitle && !!l.tooltipDescription, We = (l, u, i) => {
      var _;
      if (!i || !(O != null && O.value) || !(i in O.value) || O.value[i].format !== "difference")
        return;
      const h = ((_ = le == null ? void 0 : le.value) == null ? void 0 : _.includes(u)) ?? !1;
      return l > 0 ? h ? "negative" : "positive" : l < 0 ? h ? "positive" : "negative" : "neutral";
    }, Re = (l, u, i) => {
      let h = ct(l, u);
      switch (u) {
        case "float":
          return he(parseFloat(h)).format("0,0.00");
        case "int":
          return he(parseInt(h)).format("0,0");
        case "money": {
          let _ = "0,0";
          a.value > 0 && (_ += "." + "0".repeat(a.value));
          const M = he(parseFloat(h)).format(_);
          return b.value ? d.value + " " + M : M + " " + d.value;
        }
        case "money_capped": {
          const _ = parseFloat(h.toFixed(a.value)) == 0;
          if (h > 0 && h < 1 && _) {
            const M = a.value === 0 ? 1 : parseFloat("0." + "0".repeat(a.value - 1) + "1");
            return b.value ? `< ${d.value} ${M}` : `< ${M} ${d.value}`;
          } else
            return Re(l, "money", i);
        }
        case "percent": {
          let _ = he(parseFloat(h)).format("0,0.00") + "%";
          return i === "difference" && h > 0 && (_ = `+${_}`), _;
        }
        case "time":
          return `${Re(Math.floor(parseInt(h) / 60), "int")}mn${Re(
            parseInt(h) % 60,
            "int"
          )}s`;
        default:
          return h.toString();
      }
    }, jn = async (l, u) => {
      if (E.value[l] && E.value[l][u[$.value]])
        return E.value[l][u[$.value]];
      const { rows: i } = await r(A.value[l].request, {
        row: u,
        primaryColumn: (de == null ? void 0 : de.value) ?? $.value,
        primaryColumnValue: u[$.value]
      });
      return E.value[l] || (E.value[l] = {}), E.value[l][u[$.value]] = Object.values(i), E.value[l][u[$.value]];
    }, Bt = (l, u) => {
      if (!l)
        return u.url;
      const i = new URL(l.url, location.origin);
      if (Array.isArray(l.columns))
        for (const h of l.columns)
          i.searchParams.set(h, u[h]);
      else
        for (const [h, _] of Object.entries(l.columns))
          i.searchParams.set(_, u[h]);
      return i;
    }, Un = (l, u) => {
      const i = new URL(w.value[l].baseUrl, location.origin);
      if (Array.isArray(w.value[l].columns))
        for (const h of w.value[l].columns)
          i.searchParams.set(h, u[h]);
      else
        for (const [h, _] of Object.entries(w.value[l].columns))
          i.searchParams.set(_, u[h]);
      return i.toString();
    }, Mn = (l) => {
      if (l.totalUrl)
        return new URL(l.totalUrl).toString();
      const u = new URL(l.baseUrl);
      return u.searchParams.set("total", "true"), u.toString();
    }, Vn = (l) => !Z.value || !Z.value.includes(l) ? -1 : $e.value.indexOf(l), $n = (l) => {
      if (l in te.value)
        return te.value[l].operator;
    }, Hn = (l) => {
      if (l in te.value)
        return te.value[l].value;
    }, ut = (l) => re.value[l], qn = (l) => {
      const u = ut(l);
      if (!u)
        return;
      const i = ["normal", "small"];
      let h = 0;
      for (const _ of Object.values(u)) {
        const M = i.indexOf(_.size ?? "normal");
        M > h && (h = M);
      }
      return {
        [`size-${i[h]}`]: !0
      };
    }, Jn = (l) => {
      const u = ut(l);
      return u ? Object.entries(u).reduce((i, [h, _]) => (i[h] = _.label, i), {}) : {};
    }, Wn = (l) => c.value[l].type === "string" ? "text" : "number", It = () => `Table_OrderBy_${location.pathname}`, Gn = () => `Table_PageSize_${location.pathname}`, ct = (l, u) => {
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
    }, we = (l, u, i, h = !1) => {
      const [_, M] = (() => !i || !(O != null && O.value) || !(i in O.value) ? [c.value[u].type, void 0] : [
        O.value[i].type ?? c.value[u].type,
        O.value[i].format
      ])();
      let z = Re(l, _);
      return M === "difference" && (z = l > 0 ? `+${z}` : z), h ? Mt(z, u) : z;
    }, Xn = (l, u) => {
      if (!Pe)
        return "";
      const i = new URL(
        u ? Pe.value[u] : Pe.value,
        location.origin
      );
      return i.searchParams.set((de == null ? void 0 : de.value) ?? $.value, l[$.value]), i.toString();
    }, zt = (l, u, i) => Je(l, u) ? [] : i ? (g == null ? void 0 : g.value) === l ? ["flex-grow-1", "text-left"] : Z.value && Z.value.includes(l) && Dt.value.some((h) => Je(l, h[l])) ? ["flex-grow-1", "text-left"] : ["flex-grow-1"] : ["flew-grow-1"], Yn = (l) => l in re.value, Qn = () => {
      be.value && (Fe.value = !1);
    }, jt = (l, u) => {
      if (!(T != null && T.value) || !(u in T.value))
        return !1;
      const i = T.value[u];
      return i === null ? !!l.url : !("disable_for" in i && i.disable_for.includes(l[$.value]));
    }, Zn = (l, u) => {
      const [i] = W.value.splice(l, 1);
      W.value.splice(u, 0, i), t("move:column", { from: l, to: u });
    }, Kn = (l) => {
      const u = x.value.indexOf(l);
      u < 0 || x.value.splice(u, 1);
    }, Ut = (l, u) => {
      L.value[l] = u;
    }, Mt = (l, u) => !Z.value || !Z.value.includes(u) || l.length <= wt ? l : `${l.substring(0, wt - 3)}...`, er = (l) => {
      if (!ue.value)
        return;
      const u = {
        left: ue.value.$el.scrollLeft,
        top: ue.value.$el.scrollTop
      };
      delete pe.value[l[$.value]], Jt(() => {
        ue.value.$el.scrollTo(u);
      });
    }, tr = (l, u) => {
      const i = l.target.value;
      $t(u, { value: i });
    }, nr = (l, u) => {
      l.key === "Enter" && l.target.blur();
    }, rr = async (l, u) => {
      if (!ue.value)
        return;
      const i = {
        left: ue.value.$el.scrollLeft,
        top: ue.value.$el.scrollTop
      };
      Le.value = !0, pe.value[u[$.value]] = await jn(l, u), Jt(() => {
        ue.value.$el.scrollTo(i), Le.value = !1;
      });
    }, sr = async (l = !1) => {
      await ar(l) || await or(l) || await ft(l);
    }, dt = async (l) => {
      await pt(l), ve.value = l;
    }, Vt = async (l) => {
      const u = Gn();
      if (l === void 0) {
        const i = localStorage.getItem(u);
        i && (ge.value = parseInt(i));
      } else
        localStorage.setItem(u, l.toString()), await pt(0, l), ve.value = 0, ge.value = l;
    }, $t = (l, { operator: u, value: i }) => {
      if (u || (u = Object.keys(ut(l))[0]), !u)
        return;
      const h = {
        ...te.value[l],
        operator: u
      };
      i !== void 0 && (h.value = i), te.value[l] = h, dt(0);
    }, or = async (l) => {
      const u = (() => {
        for (const _ in localStorage) {
          if (!_.startsWith("DataTables_"))
            continue;
          const M = _.substring(_.indexOf("/"));
          if (location.pathname !== M)
            return;
          const z = localStorage.getItem(_);
          return z ? JSON.parse(z) : void 0;
        }
      })();
      if (!u || !u.order || !u.order[0] || typeof u.order[0][0] == "number")
        return !1;
      const i = u.order[0][0].lastIndexOf("-"), h = i === -1 ? [
        [u.order[0][0]],
        u.order[0][1] === "desc"
      ] : [
        [
          u.order[0][0].substring(0, i),
          u.order[0][0].substring(i + 1)
        ],
        u.order[0][1] === "desc"
      ];
      return await Te(h, !1, l), !0;
    }, ft = async (l) => {
      if (m != null && m.value) {
        await Te(m.value, !1, l);
        return;
      }
      const [u, { colspan: i }] = Object.entries(c.value).find(
        ([h, { visible: _ }]) => _
      );
      if (i === -1) {
        await Te([[u], !1], !1, l);
        return;
      }
      await Te(
        [
          [
            u,
            (O != null && O.value ? Object.keys(O.value)[0] : 0).toString()
          ],
          !1
        ],
        !1,
        l
      );
    }, ar = async (l) => {
      const u = localStorage.getItem(It());
      if (u) {
        const i = JSON.parse(u)[0][0];
        if (c.value[i])
          return await Te(JSON.parse(u), !1, l), !0;
      } else
        return !1;
    }, lr = async (l, u, i) => {
      if (!(J != null && J.value))
        return !1;
      if (He.value)
        return !0;
      const [h, _] = await (async () => {
        const M = [
          s(J.value, {
            inlineFilters: te.value,
            pageNumber: l,
            pageSize: u,
            orderBy: i[0],
            reversed: i[1]
          })
        ];
        p != null && p.value && M.push(
          s(p.value, {
            inlineFilters: te.value,
            pageNumber: l,
            pageSize: u,
            orderBy: i[0],
            reversed: i[1]
          })
        );
        const z = await Promise.all(M);
        if (z.length > 1 && z.some((De) => De.paginated === !0))
          throw new Error("Paginated fetching is not supported for separate comparison requests.");
        return z;
      })();
      return _ ? (xe.value = [h, _], Ht()) : fe.value = Object.values(h.rows), He.value = h.paginated !== !0, qe.value = h.rowCount, h.detailedRows ? pe.value = h.detailedRows : pe.value = {}, h.total && !_ && (K.value = h.total), !0;
    }, Ht = () => {
      if (!xe.value)
        return;
      const [l, u] = xe.value;
      fe.value = Object.values(
        $s(l.rows, u.rows, c.value, $.value)
      ), l.total && (K.value = Fn(l.total, u.total, c.value));
    }, ir = () => {
      if (!(Ce != null && Ce.value))
        return !1;
      let l = Object.values(Ce.value);
      for (const [u, i] of Object.entries(te.value))
        i.value && (l = l.filter(
          (h) => re.value[u][i.operator].callback(
            h[u],
            i.value
          )
        ));
      return fe.value = l, qe.value = l.length, !0;
    }, pt = async (l, u, i) => {
      l === void 0 && (l = ve.value), u === void 0 && (u = ge.value), i === void 0 && (i = se.value), Le.value = !0, ir() || await lr(ve.value, ge.value, se.value), Le.value = !1;
    }, ur = () => {
      be.value && (Fe.value = !0);
    }, cr = (l) => {
      if (!Z.value || !Z.value.includes(l))
        return;
      const u = Vn(l);
      u >= 0 ? $e.value.splice(u, 1) : $e.value.push(l);
    }, dr = () => {
      ie.value = !ie.value, ie.value && (te.value = Ee());
    }, Te = async (l, u = !0, i = !0) => {
      ve.value = 0, se.value = l, i && await pt(void 0, void 0, l), u && localStorage.setItem(It(), JSON.stringify(l));
    };
    return pr(() => {
      W.value = Object.keys(c.value), K.value = Oe == null ? void 0 : Oe.value, Promise.all([ft(!1), Vt()]).then(() => sr(!0));
    }), Ge(c, () => {
      W.value = Object.keys(c.value), te.value = Ee(), xe && Ht();
    }), m && Ge(m, () => {
      ft(!0);
    }), J && Ge(
      J,
      () => {
        He.value = !1, dt(0);
      },
      { deep: !0 }
    ), (l, u) => (C(), D("div", po, [
      y(at) ? (C(), D("div", vo, [
        R(lo, {
          "onUpdate:pageNumber": u[0] || (u[0] = (i) => dt(i)),
          "onUpdate:currentPageSize": u[1] || (u[1] = (i) => Vt(i)),
          currentPageSize: ge.value,
          pageNumber: ve.value,
          pageSizeLabel: l.pageSizeLabel,
          rowCount: qe.value
        }, null, 8, ["currentPageSize", "pageNumber", "pageSizeLabel", "rowCount"])
      ])) : H("", !0),
      q("div", {
        class: "table-container",
        onMouseover: u[7] || (u[7] = () => ur()),
        onMouseout: u[8] || (u[8] = () => Qn())
      }, [
        q("div", {
          class: G(["action-buttons", { active: Fe.value }])
        }, [
          y(be) ? (C(), D("button", {
            key: 0,
            class: "btn btn-small btn-success",
            onClick: u[2] || (u[2] = () => dr())
          }, [
            q("div", {
              class: G(["las", ie.value ? "la-trash" : "la-filter"])
            }, null, 2)
          ])) : H("", !0)
        ], 2),
        se.value ? (C(), B(Cr, {
          key: 0,
          ref_key: "table",
          ref: ue,
          onAddColoredMetric: u[3] || (u[3] = (i) => In(i)),
          "onMove:column": u[4] || (u[4] = ({ from: i, to: h }) => Zn(i, h)),
          onRemoveColoredMetric: u[5] || (u[5] = (i) => Kn(i)),
          "onUpdate:orderBy": u[6] || (u[6] = (i) => Te(i)),
          additionalHeaders: Ln.value,
          cellClasses: y(o),
          colorMetrics: y(v),
          coloredMetrics: x.value,
          columns: Bn.value,
          comparisonColumnKeys: Dn.value,
          detailsRows: pe.value,
          dragColumns: y(I),
          fixedColumnNumber: y(ne),
          inversedKpis: y(le),
          orderBy: se.value,
          primaryColumn: y($),
          rows: Dt.value,
          showRowNumber: y(ot),
          showTotal: !!K.value,
          showTopTotal: y(lt)
        }, vr({
          colorizeLabel: S(({ enabled: i }) => [
            R(j, {
              mood: "white",
              size: "small"
            }, {
              default: S(() => [
                i ? (C(), D(X, { key: 0 }, [
                  P(N(l.uncolorizeLabel), 1)
                ], 64)) : (C(), D(X, { key: 1 }, [
                  P(N(l.colorizeLabel), 1)
                ], 64))
              ]),
              _: 2
            }, 1024)
          ]),
          columnRowNumber: S(() => [
            R(j, {
              contrast: "",
              size: "small"
            }, {
              default: S(() => [
                P("#")
              ]),
              _: 1
            })
          ]),
          rowNumber: S(({ value: i }) => [
            R(j, {
              contrast: "",
              size: "small"
            }, {
              default: S(() => [
                P(N(i), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          totalRowNumber: S(() => [
            R(j, {
              contrast: "",
              size: "small"
            }, {
              default: S(() => [
                P("#")
              ]),
              _: 1
            })
          ]),
          column: S(({ columnKey: i, isGhost: h }) => [
            q("div", {
              class: "d-flex align-items-center",
              onMouseover: () => Ut(i, !0),
              onMouseout: () => Ut(i, !1)
            }, [
              R(j, {
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  P(N(y(c)[i].label), 1)
                ]),
                _: 2
              }, 1024),
              !h && zn(y(c)[i]) ? (C(), B(to, {
                key: 0,
                description: y(c)[i].tooltipDescription,
                title: y(c)[i].tooltipTitle,
                visible: L.value[i]
              }, null, 8, ["description", "title", "visible"])) : H("", !0)
            ], 40, mo)
          ]),
          row: S(({ columnKey: i, index: h, row: _, spanIndex: M, subcolumnKey: z, subindex: De, value: Y }) => [
            qt(l.$slots, "row", mr(hr({
              columnKey: i,
              index: h,
              row: _,
              spanIndex: M,
              subcolumnKey: z,
              subindex: De,
              value: Y
            })), () => [
              De === void 0 && i === "trend" ? (C(), B(fo, {
                key: 0,
                class: G(zt(i, Y, _.rowInfo.detailable)),
                formatter: (vt) => Re(vt, "int"),
                title: l.trendChartTitle,
                url: Xn(_, z)
              }, null, 8, ["class", "formatter", "title", "url"])) : _.rowInfo.detailable && i === y(g) ? (C(), D(X, { key: 1 }, [
                jt(_, i) && _.rowInfo.detailable ? (C(), B(Gt, {
                  key: 0,
                  to: Bt(y(T)[i], _).toString(),
                  "is-external": !!_.url,
                  contrast: "",
                  size: "small"
                }, {
                  default: S(() => [
                    P(N(we(Y, i, z, !0)), 1)
                  ]),
                  _: 2
                }, 1032, ["to", "is-external"])) : (C(), B(j, {
                  key: 1,
                  mood: We(Y, i, z),
                  contrast: "",
                  size: "small"
                }, {
                  default: S(() => [
                    P(N(we(Y, i, z)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"]))
              ], 64)) : jt(_, i) && _.rowInfo.detailable ? (C(), B(Gt, {
                key: 2,
                to: Bt(y(T)[i], _).toString(),
                "is-external": !!_.url,
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  P(N(we(Y, i, z, !0)), 1)
                ]),
                _: 2
              }, 1032, ["to", "is-external"])) : De === void 0 && Y >= 0.01 && i in y(w) ? (C(), B(an, {
                key: 3,
                format: y(w)[i].format,
                label: we(Y, i, z, !0),
                title: y(w)[i].title,
                url: Un(i, _)
              }, null, 8, ["format", "label", "title", "url"])) : (C(), B(j, {
                key: 4,
                class: G(zt(i, Y, _.rowInfo.detailable)),
                mood: We(Y, i, z),
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  P(N(we(Y, i, z, !0)), 1)
                ]),
                _: 2
              }, 1032, ["class", "mood"])),
              Je(i, Y) ? (C(), D("i", {
                key: 5,
                class: G(["flex-grow-1 expand-column fa", $e.value.includes(i) ? "fa-compress-alt" : "fa-expand-alt"]),
                onClick: () => cr(i)
              }, null, 10, ho)) : H("", !0),
              Ft.value && _.rowInfo.detailable && i === y(g) ? (C(), D(X, { key: 6 }, [
                Je(i, Y) ? H("", !0) : (C(), B(Sr, { key: 0 })),
                R(ro, {
                  onHideDetails: () => er(_),
                  onShowDetails: (vt) => rr(vt, _),
                  labels: Ft.value,
                  open: pe.value[_[y($)]] !== void 0,
                  title: l.detailsSelectorTitle
                }, null, 8, ["onHideDetails", "onShowDetails", "labels", "open", "title"])
              ], 64)) : H("", !0)
            ], !0)
          ]),
          additionalHeader: S(({ additionalHeader: i, columnKey: h }) => [
            i === "inline_filters" && Yn(h) ? (C(), D("div", {
              key: 0,
              class: G(["d-flex inline-filter", qn(h)])
            }, [
              R(cn, {
                class: "inline-filter-dropdown",
                "onUpdate:modelValue": (_) => $t(h, { operator: _.toString() }),
                id: `additional_header_${h}`,
                items: Jn(h),
                modelValue: $n(h)
              }, {
                item: S(({ item: _ }) => [
                  R(j, {
                    contrast: "",
                    size: "small"
                  }, {
                    default: S(() => [
                      P(N(_), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["onUpdate:modelValue", "id", "items", "modelValue"]),
              R(dn, {
                class: "flex-grow-1 inline-filter-input",
                onBlur: (_) => tr(_, h),
                onKeyup: (_) => nr(_),
                modelValue: Hn(h),
                type: Wn(h)
              }, null, 8, ["onBlur", "onKeyup", "modelValue", "type"])
            ], 2)) : H("", !0)
          ]),
          total: S(({ columnKey: i, subcolumnKey: h, values: _ }) => [
            qt(l.$slots, y(Oe), {
              columnKey: i,
              subcolumnKey: h,
              values: _
            }, () => [
              l.totalTitle && i === y(it) ? (C(), B(j, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  P(N(l.totalTitle(qe.value ?? fe.value.length)), 1)
                ]),
                _: 1
              })) : K.value ? (C(), D(X, { key: 1 }, [
                K.value && K.value[i] >= 0.01 && i in y(w) ? (C(), B(an, {
                  key: 0,
                  format: y(w)[i].format,
                  label: Mt(Re(K.value[i], y(c)[i].type, y(O) && h ? y(O)[h].format : void 0), i),
                  title: y(w)[i].title,
                  url: Mn(y(w)[i])
                }, null, 8, ["format", "label", "title", "url"])) : h ? (C(), B(j, {
                  key: 1,
                  mood: We(K.value[i][h], i, h),
                  contrast: "",
                  size: "small"
                }, {
                  default: S(() => [
                    P(N(we(K.value[i][h], i, h)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"])) : (C(), B(j, {
                  key: 2,
                  mood: We(K.value[i], i, h),
                  contrast: "",
                  size: "small"
                }, {
                  default: S(() => [
                    P(N(we(K.value[i], i)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"]))
              ], 64)) : H("", !0)
            ], !0)
          ]),
          _: 2
        }, [
          y(O) ? {
            name: "secondaryColumn",
            fn: S(({ subcolumnKey: i }) => [
              i ? (C(), B(j, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: S(() => [
                  P(N(y(O)[i].label), 1)
                ]),
                _: 2
              }, 1024)) : H("", !0)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "dragColumns", "fixedColumnNumber", "inversedKpis", "orderBy", "primaryColumn", "rows", "showRowNumber", "showTotal", "showTopTotal"])) : H("", !0)
      ], 32),
      q("div", {
        class: G(["loading-overlay", { visible: Le.value }])
      }, [
        R(Et)
      ], 2)
    ]));
  }
});
const Vo = /* @__PURE__ */ Se(bo, [["__scopeId", "data-v-6f08caeb"]]), go = { class: "scrollable flex-max no-spacing" }, wo = ["onClick"], yo = { class: "scrollable flex-max no-spacing" }, _o = ["onClick"], So = { class: "scrollable" }, Co = { class: "items flex-max no-spacing" }, Oo = /* @__PURE__ */ ye({
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
    const n = e, { columns: r, defaultValue: s, groupNames: o, modelValue: a, showModalLabel: d } = _e(n), b = k(Object.keys(o.value)[0]), v = k([...a.value]), c = k([]), w = k([]), T = k(""), O = k(void 0), p = k(void 0), m = k(void 0), g = k(void 0), A = k(void 0), I = U(() => Object.fromEntries(
      Object.entries(r.value).filter(
        ([E, x]) => x.fixed !== !0 && (T.value.trim() === "" || x.label.toLowerCase().includes(T.value.trim().toLowerCase()))
      )
    )), ne = U(() => Object.keys(o.value).reduce((E, x) => (E[x] = Object.fromEntries(
      Object.entries(I.value).filter(([L, W]) => W.group === x)
    ), E), {})), re = U(
      () => b.value === void 0 ? void 0 : ne.value[b.value]
    ), le = U(() => Object.fromEntries(
      Object.entries(o.value).filter(
        ([E, x]) => Object.values(I.value).some((L) => L.group === E)
      )
    )), $ = U(() => {
      if (!(m.value === void 0 || g.value === void 0 || A.value === void 0))
        return m.value + A.value - g.value;
    }), de = U(() => {
      if ($.value !== void 0)
        return `${$.value}px`;
    }), J = U(() => {
      if (p.value === void 0 || $.value === void 0)
        return;
      const E = v.value.indexOf(p.value), x = E - 1 - v.value.slice(0, E).reverse().findIndex((ie) => r.value[ie].fixed === !0);
      let L = v.value.slice(E + 1).findIndex((ie) => r.value[ie].fixed === !0);
      L >= 0 ? L += E + 1 : L = v.value.length;
      const W = Ce(v.value[x]), pe = W.offsetHeight, Fe = Math.min(
        Math.round(($.value - W.offsetTop) / pe - 1),
        L - x - 1
      );
      return x + Fe + 1;
    }), Ce = (E) => w.value[v.value.indexOf(E)], Z = (E) => c.value[v.value.indexOf(E)], be = (E = !1, x) => {
      x && x.target !== x.currentTarget || (E && (v.value = [...a.value]), O.value = !1, b.value = Object.keys(o.value)[0]);
    }, ot = (E) => {
      const x = v.value.indexOf(E);
      x >= 0 && v.value.splice(x, 1);
    }, at = () => {
      v.value = [...s.value];
    }, lt = (E) => {
      const x = [...E];
      t("update:modelValue", x), be(!1);
    }, Oe = (E) => {
      b.value = E.toString();
    }, it = () => {
      O.value = !0;
    }, Pe = (E) => {
      const x = v.value.indexOf(E);
      x >= 0 ? v.value.splice(x, 1) : v.value.push(E);
    }, Ee = (E) => {
      A.value = E.clientY;
    }, fe = () => {
      const E = J.value;
      if (p.value !== void 0 && E !== void 0) {
        const x = v.value.indexOf(p.value);
        v.value.splice(x, 1), v.value.splice(E, 0, p.value);
      }
      p.value = void 0, m.value = void 0, g.value = void 0, A.value = void 0, window.removeEventListener("mousemove", Ee), window.removeEventListener("mouseup", fe);
    }, xe = (E, x) => {
      p.value = x, m.value = Z(x).$el.offsetTop, g.value = E.clientY, A.value = E.clientY, window.addEventListener("mousemove", Ee), window.addEventListener("mouseup", fe);
    };
    return Ge(T, (E) => {
      E ? (!b.value || !(b.value in le.value)) && (b.value = Object.keys(le.value)[0]) : b.value || (b.value = Object.keys(le.value)[0]);
    }), (E, x) => (C(), D(X, null, [
      R(Wt, {
        onClick: x[0] || (x[0] = () => it()),
        label: y(d),
        mood: "neutral",
        tabindex: "-1"
      }, null, 8, ["label"]),
      (C(), B(br, { to: "#app > .app-container" }, [
        R(Q, {
          class: G(["kpi-selector-container no-spacing", { visible: O.value, hidden: O.value === !1 }]),
          onClick: x[5] || (x[5] = je((L) => be(!0, L), ["stop"])),
          column: "",
          horizontal: "center",
          vertical: "center"
        }, {
          default: S(() => [
            R(yr, { class: "kpi-selector" }, {
              default: S(() => [
                R(Q, {
                  class: "title",
                  vertical: "center"
                }, {
                  default: S(() => [
                    R(ze, {
                      class: "flex-max",
                      size: "large-2"
                    }, {
                      default: S(() => [
                        P(N(E.title), 1)
                      ]),
                      _: 1
                    }),
                    R(Q, {
                      class: "flex-max no-spacing search-container",
                      vertical: "center"
                    }, {
                      default: S(() => [
                        R(dn, {
                          class: "flex-max search",
                          modelValue: T.value,
                          "onUpdate:modelValue": x[1] || (x[1] = (L) => T.value = L),
                          placeholder: E.filterLabel
                        }, null, 8, ["modelValue", "placeholder"]),
                        R(Ie, {
                          class: "no-spacing",
                          value: "search-alt-2"
                        })
                      ]),
                      _: 1
                    }),
                    R(Q, {
                      class: "close-container flex-max no-spacing",
                      horizontal: "right"
                    }, {
                      default: S(() => [
                        R(Ie, {
                          class: "close",
                          onClick: x[2] || (x[2] = () => be(!0)),
                          size: "large-3",
                          value: "x"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                R(Q, { class: "body flex-max no-spacing" }, {
                  default: S(() => [
                    b.value !== void 0 && re.value !== void 0 ? (C(), D(X, { key: 0 }, [
                      R(Q, {
                        class: "groups flex-max",
                        column: ""
                      }, {
                        default: S(() => [
                          R(ze, { size: "large-2" }, {
                            default: S(() => [
                              P(N(E.groupsTitle), 1)
                            ]),
                            _: 1
                          }),
                          q("div", go, [
                            (C(!0), D(X, null, Ae(Object.entries(le.value), ([L, W]) => (C(), D("div", {
                              class: G(["item no-spacing", { selected: b.value === L }]),
                              onClick: () => Oe(L)
                            }, [
                              R(j, { size: "small" }, {
                                default: S(() => [
                                  P(N(W), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, wo))), 256))
                          ])
                        ]),
                        _: 1
                      }),
                      R(Q, {
                        class: "group-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: S(() => [
                          R(ze, { size: "large-2" }, {
                            default: S(() => [
                              P(N(y(o)[b.value]), 1)
                            ]),
                            _: 1
                          }),
                          q("div", yo, [
                            (C(!0), D(X, null, Ae(Object.entries(re.value), ([L, W]) => (C(), D("div", {
                              class: G(["item no-spacing", { selected: v.value.includes(L) }]),
                              onClick: () => Pe(L),
                              key: L
                            }, [
                              R(j, { size: "small" }, {
                                default: S(() => [
                                  P(N(W.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, _o))), 128))
                          ])
                        ]),
                        _: 1
                      }),
                      R(Q, {
                        class: "enabled-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: S(() => [
                          R(Q, {
                            class: "header",
                            vertical: "center"
                          }, {
                            default: S(() => [
                              R(ze, {
                                class: "flex-max",
                                size: "large-2"
                              }, {
                                default: S(() => [
                                  P(N(E.orderTitle), 1)
                                ]),
                                _: 1
                              }),
                              R(j, {
                                class: "reset",
                                onClick: x[3] || (x[3] = () => at()),
                                mood: "important-alt",
                                size: "small"
                              }, {
                                default: S(() => [
                                  P(N(E.resetLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          q("div", So, [
                            q("div", Co, [
                              (C(!0), D(X, null, Ae(v.value, (L) => (C(), D("div", {
                                class: "item-container no-spacing",
                                ref_for: !0,
                                ref_key: "enabledColumnContainers",
                                ref: w
                              }, [
                                q("div", {
                                  class: G(["separator-top no-spacing", { "place-after": J.value !== void 0 && p.value !== void 0 && L === v.value[J.value] && J.value < v.value.indexOf(p.value) }])
                                }, null, 2),
                                R(Q, {
                                  class: G(["item no-spacing", { dragged: L === p.value }]),
                                  ref_for: !0,
                                  ref_key: "enabledColumnElements",
                                  ref: c,
                                  style: gr(L === p.value ? { top: de.value } : void 0),
                                  vertical: "center"
                                }, {
                                  default: S(() => [
                                    y(r)[L].fixed ? (C(), B(j, {
                                      key: 0,
                                      class: G(["flex-max", { fixed: y(r)[L].fixed }]),
                                      size: "small"
                                    }, {
                                      default: S(() => [
                                        P(N(y(r)[L].label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])) : (C(), D(X, { key: 1 }, [
                                      R(Ie, {
                                        class: "move",
                                        onMousedown: (W) => xe(W, L),
                                        value: "dots-vertical-rounded"
                                      }, null, 8, ["onMousedown"]),
                                      R(j, {
                                        class: "flex-max no-spacing",
                                        size: "small"
                                      }, {
                                        default: S(() => [
                                          P(N(y(r)[L].label), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      R(Ie, {
                                        class: "no-spacing remove",
                                        onClick: () => ot(L),
                                        value: "trash"
                                      }, null, 8, ["onClick"])
                                    ], 64))
                                  ]),
                                  _: 2
                                }, 1032, ["class", "style"]),
                                q("div", {
                                  class: G(["separator-bottom no-spacing", { "place-after": J.value !== void 0 && p.value !== void 0 && L === v.value[J.value] && J.value >= v.value.indexOf(p.value) }])
                                }, null, 2)
                              ], 512))), 256))
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ], 64)) : (C(), B(Q, {
                      key: 1,
                      class: "flex-max",
                      horizontal: "center",
                      vertical: "center"
                    }, {
                      default: S(() => [
                        R(j, { size: "small" }, {
                          default: S(() => [
                            P(N(E.noColumnsFoundLabel), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }))
                  ]),
                  _: 1
                }),
                R(Q, {
                  class: "controls no-spacing",
                  horizontal: "right"
                }, {
                  default: S(() => [
                    R(Wt, {
                      onClick: x[4] || (x[4] = () => lt(v.value)),
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
const $o = /* @__PURE__ */ Se(Oo, [["__scopeId", "data-v-f6336c9a"]]);
export {
  Vo as CommonTable,
  $o as KpiSelector
};
