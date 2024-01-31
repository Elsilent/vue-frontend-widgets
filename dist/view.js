import { defineComponent as de, toRefs as fe, ref as P, openBlock as S, createElementBlock as F, normalizeClass as q, createElementVNode as W, withModifiers as Pe, toDisplayString as k, unref as h, createVNode as E, withCtx as w, createCommentVNode as U, Fragment as H, renderList as we, createBlock as D, pushScopeId as tn, popScopeId as nn, computed as j, watch as Je, nextTick as We, Teleport as rn, normalizeStyle as cr, renderSlot as ht, onUnmounted as dr, createTextVNode as N, onMounted as fr, createSlots as pr, normalizeProps as mr, guardReactiveProps as vr } from "vue";
import ce from "numeral";
import { L as St, a as hr } from "./LineBarChart-96b2a178.js";
import { P as Ct } from "./Popover-38d3223e.js";
import { _ as pe } from "./_plugin-vue_export-helper-dad06003.js";
import { C as sn, A as X, I as ke } from "./Icon-8f2ed8ba.js";
import { I } from "./Info-54758b60.js";
import { D as on, I as an, B as Ht } from "./Input-8e3a6104.js";
import { Separator as br } from "./marker.js";
import { T as yr, S as ct } from "./Table-ea4ea7e8.js";
import { H as Ae } from "./Header-8b49a8fe.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "./datetime-31a2b505.js";
function ln(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: gr } = Object.prototype, { getPrototypeOf: Ot } = Object, Qe = ((e) => (t) => {
  const n = gr.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ne = (e) => (e = e.toLowerCase(), (t) => Qe(t) === e), Ze = (e) => (t) => typeof t === e, { isArray: Ce } = Array, Ne = Ze("undefined");
function _r(e) {
  return e !== null && !Ne(e) && e.constructor !== null && !Ne(e.constructor) && Z(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const un = ne("ArrayBuffer");
function wr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && un(e.buffer), t;
}
const Sr = Ze("string"), Z = Ze("function"), cn = Ze("number"), Ye = (e) => e !== null && typeof e == "object", Cr = (e) => e === !0 || e === !1, Me = (e) => {
  if (Qe(e) !== "object")
    return !1;
  const t = Ot(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Or = ne("Date"), Er = ne("File"), Rr = ne("Blob"), xr = ne("FileList"), Tr = (e) => Ye(e) && Z(e.pipe), kr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Z(e.append) && ((t = Qe(e)) === "formdata" || // detect form-data instance
  t === "object" && Z(e.toString) && e.toString() === "[object FormData]"));
}, Ar = ne("URLSearchParams"), Pr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Fe(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Ce(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let c;
    for (r = 0; r < a; r++)
      c = o[r], t.call(null, e[c], c, e);
  }
}
function dn(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const fn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), pn = (e) => !Ne(e) && e !== fn;
function bt() {
  const { caseless: e } = pn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && dn(t, s) || s;
    Me(t[o]) && Me(r) ? t[o] = bt(t[o], r) : Me(r) ? t[o] = bt({}, r) : Ce(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && Fe(arguments[r], n);
  return t;
}
const Nr = (e, t, n, { allOwnKeys: r } = {}) => (Fe(t, (s, o) => {
  n && Z(s) ? e[o] = ln(s, n) : e[o] = s;
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
    e = n !== !1 && Ot(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Dr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, zr = (e) => {
  if (!e)
    return null;
  if (Ce(e))
    return e;
  let t = e.length;
  if (!cn(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Ir = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ot(Uint8Array)), jr = (e, t) => {
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
}, $r = ne("HTMLFormElement"), Hr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Mt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Mr = ne("RegExp"), mn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Fe(n, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (r[o] = a || s);
  }), Object.defineProperties(e, r);
}, Vr = (e) => {
  mn(e, (t, n) => {
    if (Z(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Z(r)) {
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
  return Ce(e) ? r(e) : r(String(e).split(t)), n;
}, Jr = () => {
}, Wr = (e, t) => (e = +e, Number.isFinite(e) ? e : t), dt = "abcdefghijklmnopqrstuvwxyz", Vt = "0123456789", vn = {
  DIGIT: Vt,
  ALPHA: dt,
  ALPHA_DIGIT: dt + dt.toUpperCase() + Vt
}, Gr = (e = 16, t = vn.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Xr(e) {
  return !!(e && Z(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Qr = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (Ye(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Ce(r) ? [] : {};
        return Fe(r, (a, c) => {
          const b = n(a, s + 1);
          !Ne(b) && (o[c] = b);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Zr = ne("AsyncFunction"), Yr = (e) => e && (Ye(e) || Z(e)) && Z(e.then) && Z(e.catch), f = {
  isArray: Ce,
  isArrayBuffer: un,
  isBuffer: _r,
  isFormData: kr,
  isArrayBufferView: wr,
  isString: Sr,
  isNumber: cn,
  isBoolean: Cr,
  isObject: Ye,
  isPlainObject: Me,
  isUndefined: Ne,
  isDate: Or,
  isFile: Er,
  isBlob: Rr,
  isRegExp: Mr,
  isFunction: Z,
  isStream: Tr,
  isURLSearchParams: Ar,
  isTypedArray: Ir,
  isFileList: xr,
  forEach: Fe,
  merge: bt,
  extend: Nr,
  trim: Pr,
  stripBOM: Fr,
  inherits: Lr,
  toFlatObject: Br,
  kindOf: Qe,
  kindOfTest: ne,
  endsWith: Dr,
  toArray: zr,
  forEachEntry: jr,
  matchAll: Ur,
  isHTMLForm: $r,
  hasOwnProperty: Mt,
  hasOwnProp: Mt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: mn,
  freezeMethods: Vr,
  toObjectSet: qr,
  toCamelCase: Hr,
  noop: Jr,
  toFiniteNumber: Wr,
  findKey: dn,
  global: fn,
  isContextDefined: pn,
  ALPHABET: vn,
  generateString: Gr,
  isSpecCompliantForm: Xr,
  toJSONObject: Qr,
  isAsyncFn: Zr,
  isThenable: Yr
};
function L(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
f.inherits(L, Error, {
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
const hn = L.prototype, bn = {};
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
  bn[e] = { value: e };
});
Object.defineProperties(L, bn);
Object.defineProperty(hn, "isAxiosError", { value: !0 });
L.from = (e, t, n, r, s, o) => {
  const a = Object.create(hn);
  return f.toFlatObject(e, a, function(b) {
    return b !== Error.prototype;
  }, (c) => c !== "isAxiosError"), L.call(a, e.message, t, n, r, s), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const Kr = null;
function yt(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function yn(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function qt(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = yn(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function es(e) {
  return f.isArray(e) && !e.some(yt);
}
const ts = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ke(e, t, n) {
  if (!f.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = f.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, y) {
    return !f.isUndefined(y[m]);
  });
  const r = n.metaTokens, s = n.visitor || d, o = n.dots, a = n.indexes, b = (n.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(t);
  if (!f.isFunction(s))
    throw new TypeError("visitor must be a function");
  function _(p) {
    if (p === null)
      return "";
    if (f.isDate(p))
      return p.toISOString();
    if (!b && f.isBlob(p))
      throw new L("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(p) || f.isTypedArray(p) ? b && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function d(p, m, y) {
    let x = p;
    if (p && !y && typeof p == "object") {
      if (f.endsWith(m, "{}"))
        m = r ? m : m.slice(0, -2), p = JSON.stringify(p);
      else if (f.isArray(p) && es(p) || (f.isFileList(p) || f.endsWith(m, "[]")) && (x = f.toArray(p)))
        return m = yn(m), x.forEach(function(M, ae) {
          !(f.isUndefined(M) || M === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? qt([m], ae, o) : a === null ? m : m + "[]",
            _(M)
          );
        }), !1;
    }
    return yt(p) ? !0 : (t.append(qt(y, m, o), _(p)), !1);
  }
  const g = [], R = Object.assign(ts, {
    defaultVisitor: d,
    convertValue: _,
    isVisitable: yt
  });
  function C(p, m) {
    if (!f.isUndefined(p)) {
      if (g.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      g.push(p), f.forEach(p, function(x, B) {
        (!(f.isUndefined(x) || x === null) && s.call(
          t,
          x,
          f.isString(B) ? B.trim() : B,
          m,
          R
        )) === !0 && C(x, m ? m.concat(B) : [B]);
      }), g.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return C(e), t;
}
function Jt(e) {
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
function Et(e, t) {
  this._pairs = [], e && Ke(e, this, t);
}
const gn = Et.prototype;
gn.append = function(t, n) {
  this._pairs.push([t, n]);
};
gn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Jt);
  } : Jt;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function ns(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function _n(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ns, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = f.isURLSearchParams(t) ? t.toString() : new Et(t, n).toString(r), o) {
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
const Wt = rs, wn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ss = typeof URLSearchParams < "u" ? URLSearchParams : Et, os = typeof FormData < "u" ? FormData : null, as = typeof Blob < "u" ? Blob : null, ls = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ss,
    FormData: os,
    Blob: as
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Sn = typeof window < "u" && typeof document < "u", is = ((e) => Sn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), us = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Sn,
  hasStandardBrowserEnv: is,
  hasStandardBrowserWebWorkerEnv: us
}, Symbol.toStringTag, { value: "Module" })), te = {
  ...cs,
  ...ls
};
function ds(e, t) {
  return Ke(e, new te.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return te.isNode && f.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
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
function Cn(e) {
  function t(n, r, s, o) {
    let a = n[o++];
    const c = Number.isFinite(+a), b = o >= n.length;
    return a = !a && f.isArray(s) ? s.length : a, b ? (f.hasOwnProp(s, a) ? s[a] = [s[a], r] : s[a] = r, !c) : ((!s[a] || !f.isObject(s[a])) && (s[a] = []), t(n, r, s[a], o) && f.isArray(s[a]) && (s[a] = ps(s[a])), !c);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const n = {};
    return f.forEachEntry(e, (r, s) => {
      t(fs(r), s, n, 0);
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
const Rt = {
  transitional: wn,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = f.isObject(t);
    if (o && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
      return s && s ? JSON.stringify(Cn(t)) : t;
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
        const b = this.env && this.env.FormData;
        return Ke(
          c ? { "files[]": t } : t,
          b && new b(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), ms(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Rt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && f.isString(t) && (r && !this.responseType || s)) {
      const a = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (a)
          throw c.name === "SyntaxError" ? L.from(c, L.ERR_BAD_RESPONSE, this, null, this.response) : c;
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
    FormData: te.classes.FormData,
    Blob: te.classes.Blob
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
  Rt.headers[e] = {};
});
const xt = Rt, vs = f.toObjectSet([
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
    s = a.indexOf(":"), n = a.substring(0, s).trim().toLowerCase(), r = a.substring(s + 1).trim(), !(!n || t[n] && vs[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Gt = Symbol("internals");
function Te(e) {
  return e && String(e).trim().toLowerCase();
}
function Ve(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(Ve) : String(e);
}
function bs(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const ys = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ft(e, t, n, r, s) {
  if (f.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!f.isString(t)) {
    if (f.isString(r))
      return t.indexOf(r) !== -1;
    if (f.isRegExp(r))
      return r.test(t);
  }
}
function gs(e) {
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
class et {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, b, _) {
      const d = Te(b);
      if (!d)
        throw new Error("header name must be a non-empty string");
      const g = f.findKey(s, d);
      (!g || s[g] === void 0 || _ === !0 || _ === void 0 && s[g] !== !1) && (s[g || b] = Ve(c));
    }
    const a = (c, b) => f.forEach(c, (_, d) => o(_, d, b));
    return f.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : f.isString(t) && (t = t.trim()) && !ys(t) ? a(hs(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = Te(t), t) {
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
    if (t = Te(t), t) {
      const r = f.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ft(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(a) {
      if (a = Te(a), a) {
        const c = f.findKey(r, a);
        c && (!n || ft(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return f.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ft(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return f.forEach(this, (s, o) => {
      const a = f.findKey(r, o);
      if (a) {
        n[a] = Ve(s), delete n[o];
        return;
      }
      const c = t ? gs(o) : String(o).trim();
      c !== o && delete n[o], n[c] = Ve(s), r[c] = !0;
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
    const r = (this[Gt] = this[Gt] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const c = Te(a);
      r[c] || (_s(s, a), r[c] = !0);
    }
    return f.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
et.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
f.reduceDescriptors(et.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
f.freezeMethods(et);
const oe = et;
function pt(e, t) {
  const n = this || xt, r = t || n, s = oe.from(r.headers);
  let o = r.data;
  return f.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function On(e) {
  return !!(e && e.__CANCEL__);
}
function Le(e, t, n) {
  L.call(this, e ?? "canceled", L.ERR_CANCELED, t, n), this.name = "CanceledError";
}
f.inherits(Le, L, {
  __CANCEL__: !0
});
function ws(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new L(
    "Request failed with status code " + n.status,
    [L.ERR_BAD_REQUEST, L.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Ss = te.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, s, o, a, c) {
        const b = [];
        b.push(n + "=" + encodeURIComponent(r)), f.isNumber(s) && b.push("expires=" + new Date(s).toGMTString()), f.isString(o) && b.push("path=" + o), f.isString(a) && b.push("domain=" + a), c === !0 && b.push("secure"), document.cookie = b.join("; ");
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
function En(e, t) {
  return e && !Cs(t) ? Os(e, t) : t;
}
const Es = te.hasStandardBrowserEnv ? (
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
function Rs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function xs(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(b) {
    const _ = Date.now(), d = r[o];
    a || (a = _), n[s] = b, r[s] = _;
    let g = o, R = 0;
    for (; g !== s; )
      R += n[g++], g = g % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), _ - a < t)
      return;
    const C = d && _ - d;
    return C ? Math.round(R * 1e3 / C) : void 0;
  };
}
function Xt(e, t) {
  let n = 0;
  const r = xs(50, 250);
  return (s) => {
    const o = s.loaded, a = s.lengthComputable ? s.total : void 0, c = o - n, b = r(c), _ = o <= a;
    n = o;
    const d = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: c,
      rate: b || void 0,
      estimated: b && a && _ ? (a - o) / b : void 0,
      event: s
    };
    d[t ? "download" : "upload"] = !0, e(d);
  };
}
const Ts = typeof XMLHttpRequest < "u", ks = Ts && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = oe.from(e.headers).normalize(), a = e.responseType;
    let c;
    function b() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    let _;
    if (f.isFormData(s)) {
      if (te.hasStandardBrowserEnv || te.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((_ = o.getContentType()) !== !1) {
        const [p, ...m] = _ ? _.split(";").map((y) => y.trim()).filter(Boolean) : [];
        o.setContentType([p || "multipart/form-data", ...m].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(p + ":" + m));
    }
    const g = En(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), _n(g, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function R() {
      if (!d)
        return;
      const p = oe.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), y = {
        data: !a || a === "text" || a === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: p,
        config: e,
        request: d
      };
      ws(function(B) {
        n(B), b();
      }, function(B) {
        r(B), b();
      }, y), d = null;
    }
    if ("onloadend" in d ? d.onloadend = R : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, d.onabort = function() {
      d && (r(new L("Request aborted", L.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      r(new L("Network Error", L.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const y = e.transitional || wn;
      e.timeoutErrorMessage && (m = e.timeoutErrorMessage), r(new L(
        m,
        y.clarifyTimeoutError ? L.ETIMEDOUT : L.ECONNABORTED,
        e,
        d
      )), d = null;
    }, te.hasStandardBrowserEnv) {
      const p = Es(g) && e.xsrfCookieName && Ss.read(e.xsrfCookieName);
      p && o.set(e.xsrfHeaderName, p);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in d && f.forEach(o.toJSON(), function(m, y) {
      d.setRequestHeader(y, m);
    }), f.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), a && a !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", Xt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Xt(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (p) => {
      d && (r(!p || p.type ? new Le(null, e, d) : p), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const C = Rs(g);
    if (C && te.protocols.indexOf(C) === -1) {
      r(new L("Unsupported protocol " + C + ":", L.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(s || null);
  });
}, gt = {
  http: Kr,
  xhr: ks
};
f.forEach(gt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Qt = (e) => `- ${e}`, As = (e) => f.isFunction(e) || e === null || e === !1, Rn = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let a;
      if (r = n, !As(n) && (r = gt[(a = String(n)).toLowerCase()], r === void 0))
        throw new L(`Unknown adapter '${a}'`);
      if (r)
        break;
      s[a || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([c, b]) => `adapter ${c} ` + (b === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? o.length > 1 ? `since :
` + o.map(Qt).join(`
`) : " " + Qt(o[0]) : "as no adapter specified";
      throw new L(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: gt
};
function mt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Le(null, e);
}
function Zt(e) {
  return mt(e), e.headers = oe.from(e.headers), e.data = pt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Rn.getAdapter(e.adapter || xt.adapter)(e).then(function(r) {
    return mt(e), r.data = pt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = oe.from(r.headers), r;
  }, function(r) {
    return On(r) || (mt(e), r && r.response && (r.response.data = pt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = oe.from(r.response.headers))), Promise.reject(r);
  });
}
const Yt = (e) => e instanceof oe ? e.toJSON() : e;
function Se(e, t) {
  t = t || {};
  const n = {};
  function r(_, d, g) {
    return f.isPlainObject(_) && f.isPlainObject(d) ? f.merge.call({ caseless: g }, _, d) : f.isPlainObject(d) ? f.merge({}, d) : f.isArray(d) ? d.slice() : d;
  }
  function s(_, d, g) {
    if (f.isUndefined(d)) {
      if (!f.isUndefined(_))
        return r(void 0, _, g);
    } else
      return r(_, d, g);
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
  function c(_, d, g) {
    if (g in t)
      return r(_, d);
    if (g in e)
      return r(void 0, _);
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
    validateStatus: c,
    headers: (_, d) => s(Yt(_), Yt(d), !0)
  };
  return f.forEach(Object.keys(Object.assign({}, e, t)), function(d) {
    const g = b[d] || s, R = g(e[d], t[d], d);
    f.isUndefined(R) && g !== c || (n[d] = R);
  }), n;
}
const xn = "1.6.1", Tt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Tt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Kt = {};
Tt.transitional = function(t, n, r) {
  function s(o, a) {
    return "[Axios v" + xn + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
  }
  return (o, a, c) => {
    if (t === !1)
      throw new L(
        s(a, " has been removed" + (n ? " in " + n : "")),
        L.ERR_DEPRECATED
      );
    return n && !Kt[a] && (Kt[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, c) : !0;
  };
};
function Ps(e, t, n) {
  if (typeof e != "object")
    throw new L("options must be an object", L.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], a = t[o];
    if (a) {
      const c = e[o], b = c === void 0 || a(c, o, e);
      if (b !== !0)
        throw new L("option " + o + " must be " + b, L.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new L("Unknown option " + o, L.ERR_BAD_OPTION);
  }
}
const _t = {
  assertOptions: Ps,
  validators: Tt
}, ue = _t.validators;
class Ge {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Wt(),
      response: new Wt()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Se(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && _t.assertOptions(r, {
      silentJSONParsing: ue.transitional(ue.boolean),
      forcedJSONParsing: ue.transitional(ue.boolean),
      clarifyTimeoutError: ue.transitional(ue.boolean)
    }, !1), s != null && (f.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : _t.assertOptions(s, {
      encode: ue.function,
      serialize: ue.function
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
    ), n.headers = oe.concat(a, o);
    const c = [];
    let b = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (b = b && m.synchronous, c.unshift(m.fulfilled, m.rejected));
    });
    const _ = [];
    this.interceptors.response.forEach(function(m) {
      _.push(m.fulfilled, m.rejected);
    });
    let d, g = 0, R;
    if (!b) {
      const p = [Zt.bind(this), void 0];
      for (p.unshift.apply(p, c), p.push.apply(p, _), R = p.length, d = Promise.resolve(n); g < R; )
        d = d.then(p[g++], p[g++]);
      return d;
    }
    R = c.length;
    let C = n;
    for (g = 0; g < R; ) {
      const p = c[g++], m = c[g++];
      try {
        C = p(C);
      } catch (y) {
        m.call(this, y);
        break;
      }
    }
    try {
      d = Zt.call(this, C);
    } catch (p) {
      return Promise.reject(p);
    }
    for (g = 0, R = _.length; g < R; )
      d = d.then(_[g++], _[g++]);
    return d;
  }
  getUri(t) {
    t = Se(this.defaults, t);
    const n = En(t.baseURL, t.url);
    return _n(n, t.params, t.paramsSerializer);
  }
}
f.forEach(["delete", "get", "head", "options"], function(t) {
  Ge.prototype[t] = function(n, r) {
    return this.request(Se(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, a, c) {
      return this.request(Se(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  Ge.prototype[t] = n(), Ge.prototype[t + "Form"] = n(!0);
});
const qe = Ge;
class kt {
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
      r.reason || (r.reason = new Le(o, a, c), n(r.reason));
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
      token: new kt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Ns = kt;
function Fs(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Ls(e) {
  return f.isObject(e) && e.isAxiosError === !0;
}
const wt = {
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
Object.entries(wt).forEach(([e, t]) => {
  wt[t] = e;
});
const Bs = wt;
function Tn(e) {
  const t = new qe(e), n = ln(qe.prototype.request, t);
  return f.extend(n, qe.prototype, t, { allOwnKeys: !0 }), f.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Tn(Se(e, s));
  }, n;
}
const $ = Tn(xt);
$.Axios = qe;
$.CanceledError = Le;
$.CancelToken = Ns;
$.isCancel = On;
$.VERSION = xn;
$.toFormData = Ke;
$.AxiosError = L;
$.Cancel = $.CanceledError;
$.all = function(t) {
  return Promise.all(t);
};
$.spread = Fs;
$.isAxiosError = Ls;
$.mergeConfig = Se;
$.AxiosHeaders = oe;
$.formToJSON = (e) => Cn(f.isHTMLForm(e) ? new FormData(e) : e);
$.getAdapter = Rn.getAdapter;
$.HttpStatusCode = Bs;
$.default = $;
const Xe = $;
ce.localeData().delimiters.thousands = " ";
ce.localeData().delimiters.decimal = ",";
const Ds = (e) => e === void 0 ? void 0 : JSON.parse(JSON.stringify(e)), zs = (e) => {
  if (!Array.isArray(e) && Object.getPrototypeOf(e) !== Object.prototype)
    throw new Error(
      "Tried cloning instance of a class. Consider implementing clone method instead."
    );
  return Ds(e);
}, Is = {
  key: 0,
  class: "popover-header"
}, js = {
  key: 1,
  class: "popover-body"
}, Us = {
  important: "",
  size: "small"
}, $s = { size: "small" }, Hs = /* @__PURE__ */ de({
  __name: "CellHint",
  props: {
    format: {},
    label: {},
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { format: n, label: r, title: s, url: o } = fe(t), a = P(), c = P(!1), b = P(), _ = (m) => {
      var y;
      m && (!m.target || (y = b.value) != null && y.contains(m.target)) || (c.value = !1, window.removeEventListener("mouseup", _));
    }, d = (m) => m.map(({ name: y, valueFormatted: x }) => ({
      label: y,
      value: x
    })), g = (m) => m.map(({ name: y, rate: x, value: B }) => ({
      label: y,
      value: `${ce(B).format("0,0")} (${ce(x).format("0,0.00")}%)`
    })), R = (m) => {
      switch (n.value) {
        case "distribution":
          return d(m);
        case "rated_distribution":
          return g(m);
        default:
          throw new Error(`Unsupported format: ${n.value}`);
      }
    }, C = async () => {
      if (window.addEventListener("mouseup", _), a.value)
        return;
      const m = (await Xe(o.value)).data;
      a.value = R(m);
    }, p = async () => {
      c.value = !0, await C();
    };
    return (m, y) => (S(), F("div", {
      class: q(["cell-hint", { visible: c.value }]),
      ref_key: "root",
      ref: b,
      onMouseover: y[1] || (y[1] = () => p()),
      onMouseout: y[2] || (y[2] = () => _())
    }, [
      W("span", {
        class: "label",
        onClick: y[0] || (y[0] = Pe(() => p(), ["stop"]))
      }, k(h(r)), 1),
      E(Ct, {
        visible: c.value,
        parentClass: "cell",
        popoverClass: "cell-hint-popover"
      }, {
        default: w(() => [
          h(s) ? (S(), F("div", Is, k(h(s)), 1)) : U("", !0),
          a.value ? (S(), F("div", js, [
            (S(!0), F(H, null, we(a.value, ({ label: x, value: B }, M) => (S(), F("div", {
              key: `line-${M}`
            }, [
              W("b", Us, k(x) + ": ", 1),
              W("span", $s, k(B), 1)
            ]))), 128))
          ])) : (S(), D(St, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ], 34));
  }
});
const en = /* @__PURE__ */ pe(Hs, [["__scopeId", "data-v-9c7f570a"]]), Ms = (e) => (tn("data-v-7a1d1810"), e = e(), nn(), e), Vs = { class: "column-hint" }, qs = /* @__PURE__ */ Ms(() => /* @__PURE__ */ W("i", { class: "la la-question-circle" }, null, -1)), Js = { class: "popover-header" }, Ws = { class: "popover-body" }, Gs = /* @__PURE__ */ de({
  __name: "ColumnHint",
  props: {
    description: {},
    title: {},
    visible: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { description: n, title: r, visible: s } = fe(t);
    return (o, a) => (S(), F("div", Vs, [
      qs,
      E(Ct, {
        visible: h(s),
        parentClass: "cell",
        popoverClass: "column-hint-popover"
      }, {
        default: w(() => [
          W("div", Js, k(h(r)), 1),
          W("div", Ws, k(h(n)), 1)
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const Xs = /* @__PURE__ */ pe(Gs, [["__scopeId", "data-v-7a1d1810"]]), Qs = /* @__PURE__ */ de({
  __name: "BodyPopover",
  props: {
    autoPosition: { type: Boolean, default: !1 },
    parentNode: {},
    popoverClass: {},
    visible: { type: Boolean }
  },
  setup(e) {
    const t = e, { autoPosition: n, parentNode: r, popoverClass: s, visible: o } = fe(t), a = P(), c = P(), b = P(), _ = j(() => ({
      [(s == null ? void 0 : s.value) ?? ""]: !!s,
      visible: o.value
    })), d = j(() => {
      if (!(!n.value || a.value === void 0 || b.value === void 0))
        return {
          left: `${a.value}px`,
          top: `${b.value}px`
        };
    }), g = () => {
      if (!c.value || !(r != null && r.value))
        return;
      const C = r.value.getBoundingClientRect();
      a.value = 0, b.value = 0, We(() => {
        const p = C.left, m = C.top + document.documentElement.scrollTop, y = c.value.$el.offsetWidth, x = (y - C.width) / 2;
        C.left - x < 0 ? a.value = p : C.left + x + C.width > document.body.clientWidth ? a.value = p - y + C.width : a.value = p - x;
        const B = c.value.$el.offsetHeight;
        C.bottom + B > document.body.clientHeight ? b.value = m - B : b.value = m + C.height;
      });
    }, R = n != null && n.value ? new ResizeObserver(() => g()) : void 0;
    return Je(
      o,
      (C) => {
        !(n != null && n.value) || !R || (R.disconnect(), C && We(() => {
          g(), R.observe(c.value.$el);
        }));
      },
      {
        immediate: !0
      }
    ), (C, p) => (S(), D(rn, { to: "#app > .app-container" }, [
      E(sn, {
        class: q(["no-spacing popover", _.value]),
        ref_key: "popover",
        ref: c,
        style: cr(d.value)
      }, {
        default: w(() => [
          ht(C.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["class", "style"])
    ]));
  }
});
const Zs = /* @__PURE__ */ pe(Qs, [["__scopeId", "data-v-d948a8f2"]]), Ys = /* @__PURE__ */ de({
  __name: "DetailsSelector",
  props: {
    labels: {},
    open: { type: Boolean, default: !1 },
    title: {}
  },
  emits: ["hideDetails", "showDetails"],
  setup(e, { emit: t }) {
    const n = e, { labels: r, open: s, title: o } = fe(n), a = P(!1), c = P(), b = P(), _ = (R) => {
      var C, p;
      !R.target || (C = b.value) != null && C.contains(R.target) || (p = c.value) != null && p.$el.contains(R.target) || (a.value = !1, window.removeEventListener("mouseup", _));
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
    }, g = (R) => {
      if (a.value = !1, s.value) {
        t("hideDetails");
        return;
      }
      t("showDetails", R);
    };
    return dr(() => {
      window.removeEventListener("mouseup", _);
    }), (R, C) => (S(), F("div", {
      class: "details-selector-container",
      ref_key: "root",
      ref: b,
      onClick: C[0] || (C[0] = Pe(() => d(), ["stop"]))
    }, [
      E(X, {
        class: "details-selector",
        vertical: "center"
      }, {
        default: w(() => [
          h(o) ? (S(), D(I, {
            key: 0,
            mood: "important-alt",
            size: "small"
          }, {
            default: w(() => [
              N(k(h(o)), 1)
            ]),
            _: 1
          })) : U("", !0),
          E(ke, {
            value: h(s) ? "chevron-up" : "chevron-down",
            mood: "important-alt",
            size: "large-2"
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      E(Zs, {
        ref_key: "popover",
        ref: c,
        parentNode: b.value,
        visible: a.value,
        autoPosition: "",
        popoverClass: "details-selector-popover"
      }, {
        default: w(() => [
          (S(!0), F(H, null, we(h(r), (p, m) => (S(), D(I, {
            class: "dropdown-item",
            onClick: Pe(() => g(m), ["stop"]),
            contrast: ""
          }, {
            default: w(() => [
              N(k(p), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 256))
        ]),
        _: 1
      }, 8, ["parentNode", "visible"])
    ], 512));
  }
});
const Ks = /* @__PURE__ */ pe(Ys, [["__scopeId", "data-v-3ad12b00"]]), eo = { class: "pagination" }, to = ["onClick"], no = /* @__PURE__ */ de({
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
    const n = e, { currentPageSize: r, id: s, pageNumber: o, pageRadius: a, pageSizeLabel: c, pageSizes: b, rowCount: _ } = fe(n), d = j(() => Math.min(...b.value)), g = j(() => Math.ceil(_.value / r.value)), R = j(
      () => b.value.reduce((m, y) => (m[y] = y.toString(), m), {})
    ), C = j(() => {
      const m = [];
      for (let y = a.value - 1; y > 0; y--)
        o.value > y && m.push(o.value - y);
      m.push(o.value);
      for (let y = 1; y < a.value; y++)
        o.value < g.value - y - 1 && m.push(o.value + y);
      return m;
    }), p = (m) => {
      r.value !== m && t("update:currentPageSize", m);
    };
    return (m, y) => (S(), F("div", eo, [
      h(_) > h(r) ? (S(), F(H, { key: 0 }, [
        h(o) > 0 ? (S(), D(I, {
          key: 0,
          class: "page",
          onClick: y[0] || (y[0] = () => t("update:pageNumber", 0)),
          mood: "important-alt"
        }, {
          default: w(() => [
            N("1")
          ]),
          _: 1
        })) : U("", !0),
        h(o) > h(a) ? (S(), D(I, {
          key: 1,
          class: "page-separator"
        }, {
          default: w(() => [
            N("…")
          ]),
          _: 1
        })) : U("", !0),
        (S(!0), F(H, null, we(C.value, (x) => (S(), F("div", {
          class: q(["page", { current: x === h(o) }]),
          onClick: () => t("update:pageNumber", x),
          key: x
        }, k(x + 1), 11, to))), 128)),
        h(o) < g.value - h(a) - 1 ? (S(), D(I, {
          key: 2,
          class: "page-separator"
        }, {
          default: w(() => [
            N("…")
          ]),
          _: 1
        })) : U("", !0),
        h(o) < g.value - 1 ? (S(), D(I, {
          key: 3,
          class: "page",
          onClick: y[1] || (y[1] = () => t("update:pageNumber", g.value - 1)),
          mood: "important-alt"
        }, {
          default: w(() => [
            N(k(g.value), 1)
          ]),
          _: 1
        })) : U("", !0),
        E(I, { class: "page-size-label" }, {
          default: w(() => [
            N(k(h(c)), 1)
          ]),
          _: 1
        })
      ], 64)) : U("", !0),
      h(_) > d.value ? (S(), D(on, {
        key: 1,
        class: "page-size-selector",
        "onUpdate:modelValue": y[2] || (y[2] = (x) => p(parseInt(x.toString()))),
        id: h(s),
        items: R.value,
        modelValue: h(r)
      }, {
        item: w(({ item: x }) => [
          N(k(x), 1)
        ]),
        _: 1
      }, 8, ["id", "items", "modelValue"])) : U("", !0)
    ]));
  }
});
const ro = /* @__PURE__ */ pe(no, [["__scopeId", "data-v-764cc1be"]]), so = (e) => (tn("data-v-b4f986aa"), e = e(), nn(), e), oo = /* @__PURE__ */ so(() => /* @__PURE__ */ W("i", { class: "la la-eye secondary" }, null, -1)), ao = /* @__PURE__ */ de({
  __name: "TrendChart",
  props: {
    formatter: { type: Function },
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { formatter: n, title: r, url: s } = fe(t), o = P(!1), a = P([]), c = P(), b = j(() => c.value ? Object.assign({}, c.value) : {}), _ = j(() => {
      var y;
      switch ((y = c.value) == null ? void 0 : y.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return c.value[0];
        default:
          return c.value.slice(c.value.length / 2).reduce((x, B) => x + B, 0) / Math.ceil(c.value.length / 2);
      }
    }), d = j(() => {
      var y;
      switch ((y = c.value) == null ? void 0 : y.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return c.value[0];
        default:
          return c.value.slice(0, c.value.length / 2).reduce((x, B) => x + B, 0) / Math.floor(c.value.length / 2);
      }
    }), g = j(() => d.value > _.value ? "negative" : d.value < _.value ? "positive" : "neutral"), R = j(() => {
      if (!c.value)
        return {};
      const y = new Array(c.value.length).fill(0).map(
        (x, B) => d.value + (_.value - d.value) * B / (c.value.length - 1)
      );
      return Object.assign({}, y);
    }), C = async () => {
      if (!c.value)
        return;
      const y = (await Xe({ url: s.value })).data;
      a.value = Object.keys(y), c.value = Object.values(y);
    }, p = () => {
      o.value = !1, window.removeEventListener("mouseup", p);
    }, m = async () => {
      o.value = !0, window.addEventListener("mouseup", p), await C();
    };
    return (y, x) => (S(), F("div", {
      class: "trend-chart-container",
      onClick: x[0] || (x[0] = Pe(() => m(), ["stop"]))
    }, [
      oo,
      E(Ct, {
        visible: o.value,
        parentClass: "cell",
        popoverClass: "trend-chart-popover"
      }, {
        default: w(() => [
          h(r) ? (S(), D(Ae, {
            key: 0,
            size: "small-3"
          }, {
            default: w(() => [
              N(k(h(r)), 1)
            ]),
            _: 1
          })) : U("", !0),
          c.value ? (S(), D(hr, {
            key: 1,
            activeLines: ["values"],
            formatters: { trend: h(n), values: h(n) },
            moods: { trend: { mood: g.value }, values: { mood: "important" } },
            styles: { trend: "line", values: "line" },
            values: { trend: R.value, values: b.value }
          }, {
            "x-axis-label": w(({ index: B }) => [
              N(k(a.value[B]), 1)
            ]),
            _: 1
          }, 8, ["formatters", "moods", "values"])) : (S(), D(St, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const lo = /* @__PURE__ */ pe(ao, [["__scopeId", "data-v-b4f986aa"]]), io = { class: "common-table" }, uo = {
  key: 0,
  class: "controls d-flex justify-content-end mb-1"
}, co = ["onMouseover", "onMouseout"], fo = ["href"], po = ["href"], mo = ["onClick"], vt = 50, vo = /* @__PURE__ */ de({
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
    const n = e, r = async (l, u) => typeof l == "function" ? await l(u) : (await Xe({
      ...l,
      params: {
        ...l.params,
        ...u
      }
    })).data, s = async (l, u) => typeof l == "function" ? await l(u) : (await Xe({
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
      clientCurrencySymbolPrefix: b,
      colorMetrics: _,
      columns: d,
      columnDetails: g,
      columnLinks: R,
      comparisonColumns: C,
      defaultOrderBy: p,
      detailsColumn: m,
      detailsRequests: y,
      dragColumns: x,
      fixedColumnNumber: B,
      inlineFilterOperators: M,
      inversedKpis: ae,
      primaryColumn: J,
      primaryColumnAlias: le,
      request: be,
      rows: ye,
      shortenColumns: A,
      showInlineFilters: T,
      showRowNumber: z,
      showPagination: me,
      showTopTotal: kn,
      total: Be,
      totalColumnKey: An,
      trendUrl: tt
    } = fe(n), nt = () => {
      const l = {};
      for (const u of Object.keys(d.value))
        u in M.value && (l[u] = {
          operator: Object.keys(M.value[u])[0],
          value: ""
        });
      return l;
    }, De = P([]), ve = P({}), Oe = P([]), At = P({}), ze = P([]), ge = P({}), rt = P(!1), Ee = P(!1), Ie = P([]), je = P(!1), K = P(nt()), Re = P(!0), ee = P(), ie = P(0), he = P(20), Ue = P(0), Y = P(), re = P(), Pn = j(() => {
      const l = {};
      return Ee.value && (l.inline_filters = {
        icon: "filter"
      }), l;
    }), Nn = j(
      () => C != null && C.value ? Object.keys(C.value) : void 0
    ), Fn = j(
      () => ze.value.reduce((l, u) => (l[u] = zs(d.value[u]), l), {})
    ), Pt = j(() => {
      if (y != null && y.value)
        return Object.entries(y.value).reduce((l, [u, { label: i }]) => (l[u] = i, l), {});
    }), Nt = j(() => [...De.value].sort((l, u) => {
      const i = (() => {
        const v = ot(
          ee.value[0].reduce((V, se) => V[se], l),
          d.value[ee.value[0][0]].type
        ), O = ot(
          ee.value[0].reduce((V, se) => V[se], u),
          d.value[ee.value[0][0]].type
        );
        return v > O ? 1 : v < O ? -1 : 0;
      })();
      return ee.value[1] ? -i : i;
    })), Ft = j(() => !be.value || je.value ? Nt.value : Nt.value.slice(
      ie.value * he.value,
      (ie.value + 1) * he.value
    )), Ln = (l) => {
      Oe.value.includes(l) || Oe.value.push(l);
    }, $e = (l, u) => !A.value || !A.value.includes(l) ? !1 : u.length > vt, Bn = (l) => !!l.tooltipTitle && !!l.tooltipDescription, Dn = (l, u) => {
      var v;
      const i = ((v = ae == null ? void 0 : ae.value) == null ? void 0 : v.includes(u)) ?? !1;
      return l > 0 ? i ? "negative" : "positive" : l < 0 ? i ? "positive" : "negative" : "neutral";
    }, Lt = (l, u, i) => {
      if (Y.value)
        return Q(
          Y.value[l][u],
          C.value[u].type ?? d.value[l].type,
          i
        );
    }, Q = (l, u, i) => {
      let v = ot(l, u);
      switch (u) {
        case "float":
          return ce(parseFloat(v)).format("0,0.00");
        case "int":
          return ce(parseInt(v)).format("0,0");
        case "money": {
          let O = "0,0";
          a.value > 0 && (O += "." + "0".repeat(a.value));
          const V = ce(parseFloat(v)).format(O);
          return b.value ? c.value + " " + V : V + " " + c.value;
        }
        case "money_capped": {
          const O = parseFloat(v.toFixed(a.value)) == 0;
          if (v > 0 && v < 1 && O) {
            const V = a.value === 0 ? 1 : parseFloat("0." + "0".repeat(a.value - 1) + "1");
            return b.value ? `< ${c.value} ${V}` : `< ${V} ${c.value}`;
          } else
            return Q(l, "money", i);
        }
        case "percent": {
          let O = ce(parseFloat(v)).format("0,0.00") + "%";
          return i === "difference" && v > 0 && (O = `+${O}`), O;
        }
        case "time":
          return `${Q(Math.floor(parseInt(v) / 60), "int")}mn${Q(
            parseInt(v) % 60,
            "int"
          )}s`;
        default:
          return v.toString();
      }
    }, zn = async (l, u) => {
      if (ve.value[l] && ve.value[l][u[J.value]])
        return ve.value[l][u[J.value]];
      const { rows: i } = await r(y.value[l].request, {
        row: u,
        primaryColumn: (le == null ? void 0 : le.value) ?? J.value,
        primaryColumnValue: u[J.value]
      });
      return ve.value[l] || (ve.value[l] = {}), ve.value[l][u[J.value]] = Object.values(i), ve.value[l][u[J.value]];
    }, Bt = (l, u) => {
      const i = new URL(l.url, location.origin);
      if (Array.isArray(l.columns))
        for (const v of l.columns)
          i.searchParams.set(v, u[v]);
      else
        for (const [v, O] of Object.entries(l.columns))
          i.searchParams.set(O, u[v]);
      return i;
    }, In = (l, u) => {
      const i = new URL(g.value[l].baseUrl, location.origin);
      if (Array.isArray(g.value[l].columns))
        for (const v of g.value[l].columns)
          i.searchParams.set(v, u[v]);
      else
        for (const [v, O] of Object.entries(g.value[l].columns))
          i.searchParams.set(O, u[v]);
      return i.toString();
    }, jn = (l) => {
      if (l.totalUrl)
        return new URL(l.totalUrl).toString();
      const u = new URL(l.baseUrl);
      return u.searchParams.set("total", "true"), u.toString();
    }, Un = (l) => !A.value || !A.value.includes(l) ? -1 : Ie.value.indexOf(l), $n = (l) => {
      if (l in K.value)
        return K.value[l].operator;
    }, Hn = (l) => {
      if (l in K.value)
        return K.value[l].value;
    }, st = (l) => M.value[l], Mn = (l) => {
      const u = st(l);
      if (!u)
        return;
      const i = ["normal", "small"];
      let v = 0;
      for (const O of Object.values(u)) {
        const V = i.indexOf(O.size ?? "normal");
        V > v && (v = V);
      }
      return {
        [`size-${i[v]}`]: !0
      };
    }, Vn = (l) => {
      const u = st(l);
      return u ? Object.entries(u).reduce((i, [v, O]) => (i[v] = O.label, i), {}) : {};
    }, qn = (l) => d.value[l].type === "string" ? "text" : "number", Dt = () => `Table_OrderBy_${location.pathname}`, Jn = () => `Table_PageSize_${location.pathname}`, ot = (l, u) => {
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
    }, Wn = (l, u) => {
      if (!tt)
        return "";
      const i = new URL(
        u ? tt.value[u] : tt.value,
        location.origin
      );
      return i.searchParams.set((le == null ? void 0 : le.value) ?? J.value, l[J.value]), i.toString();
    }, He = (l, u, i) => $e(l, u) ? [] : i ? (m == null ? void 0 : m.value) === l ? ["flex-grow-1", "text-left"] : A.value && A.value.includes(l) && Ft.value.some((v) => $e(l, v[l])) ? ["flex-grow-1", "text-left"] : ["flex-grow-1"] : ["flew-grow-1"], Gn = (l) => l in M.value, Xn = () => {
      T.value && (rt.value = !1);
    }, zt = (l, u) => !(!(R != null && R.value) || !(u in R.value) || "disable_for" in R.value[u] && R.value[u].disable_for.includes(l[J.value])), Qn = (l, u) => {
      const [i] = ze.value.splice(l, 1);
      ze.value.splice(u, 0, i), t("move:column", { from: l, to: u });
    }, Zn = (l) => {
      const u = Oe.value.indexOf(l);
      u < 0 || Oe.value.splice(u, 1);
    }, It = (l, u) => {
      At.value[l] = u;
    }, xe = (l, u) => !A.value || !A.value.includes(u) || l.length <= vt ? l : `${l.substring(0, vt - 3)}...`, Yn = (l) => {
      if (!re.value)
        return;
      const u = {
        left: re.value.$el.scrollLeft,
        top: re.value.$el.scrollTop
      };
      delete ge.value[l[J.value]], We(() => {
        re.value.$el.scrollTo(u);
      });
    }, Kn = (l, u) => {
      const i = l.target.value;
      Ut(u, { value: i });
    }, er = (l, u) => {
      l.key === "Enter" && l.target.blur();
    }, tr = async (l, u) => {
      if (!re.value)
        return;
      const i = {
        left: re.value.$el.scrollLeft,
        top: re.value.$el.scrollTop
      };
      Re.value = !0, ge.value[u[J.value]] = await zn(l, u), We(() => {
        re.value.$el.scrollTo(i), Re.value = !1;
      });
    }, nr = async (l = !1) => {
      await sr(l) || await rr(l) || await $t(l);
    }, at = async (l) => {
      await lt(l), ie.value = l;
    }, jt = async (l) => {
      const u = Jn();
      if (l === void 0) {
        const i = localStorage.getItem(u);
        i && (he.value = parseInt(i));
      } else
        localStorage.setItem(u, l.toString()), await lt(0, l), ie.value = 0, he.value = l;
    }, Ut = (l, { operator: u, value: i }) => {
      if (u || (u = Object.keys(st(l))[0]), !u)
        return;
      const v = {
        ...K.value[l],
        operator: u
      };
      i !== void 0 && (v.value = i), K.value[l] = v, at(0);
    }, rr = async (l) => {
      const u = (() => {
        for (const O in localStorage) {
          if (!O.startsWith("DataTables_"))
            continue;
          const V = O.substring(O.indexOf("/"));
          if (location.pathname !== V)
            return;
          const se = localStorage.getItem(O);
          return se ? JSON.parse(se) : void 0;
        }
      })();
      if (!u || !u.order || !u.order[0] || typeof u.order[0][0] == "number")
        return !1;
      const i = u.order[0][0].lastIndexOf("-"), v = i === -1 ? [
        [u.order[0][0]],
        u.order[0][1] === "desc"
      ] : [
        [
          u.order[0][0].substring(0, i),
          u.order[0][0].substring(i + 1)
        ],
        u.order[0][1] === "desc"
      ];
      return await _e(v, !1, l), !0;
    }, $t = async (l) => {
      if (p != null && p.value) {
        await _e(p.value, !1, l);
        return;
      }
      const [u, { colspan: i }] = Object.entries(d.value).find(
        ([v, { visible: O }]) => O
      );
      if (i === -1) {
        await _e([[u], !1], !1, l);
        return;
      }
      await _e(
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
    }, sr = async (l) => {
      const u = localStorage.getItem(Dt());
      return u ? (await _e(JSON.parse(u), !1, l), !0) : !1;
    }, or = async (l, u, i) => {
      if (!be.value)
        return !1;
      if (je.value)
        return !0;
      const v = await s(be.value, {
        inlineFilters: K.value,
        pageNumber: l,
        pageSize: u,
        orderBy: i[0],
        reversed: i[1]
      });
      return De.value = Object.values(v.rows), je.value = v.paginated !== !0, Ue.value = v.rowCount, v.detailedRows ? ge.value = v.detailedRows : ge.value = {}, v.total && (Y.value = v.total), !0;
    }, ar = () => {
      if (!(ye != null && ye.value))
        return !1;
      let l = Object.values(ye.value);
      for (const [u, i] of Object.entries(K.value))
        i.value && (l = l.filter(
          (v) => M.value[u][i.operator].callback(
            v[u],
            i.value
          )
        ));
      return De.value = l, Ue.value = l.length, !0;
    }, lt = async (l, u, i) => {
      l === void 0 && (l = ie.value), u === void 0 && (u = he.value), i === void 0 && (i = ee.value), Re.value = !0, ar() || await or(ie.value, he.value, ee.value), Re.value = !1;
    }, lr = () => {
      T.value && (rt.value = !0);
    }, ir = (l) => {
      if (!A.value || !A.value.includes(l))
        return;
      const u = Un(l);
      u >= 0 ? Ie.value.splice(u, 1) : Ie.value.push(l);
    }, ur = () => {
      Ee.value = !Ee.value, Ee.value && (K.value = nt());
    }, _e = async (l, u = !0, i = !0) => {
      ie.value = 0, i && await lt(void 0, void 0, l), ee.value = l, u && localStorage.setItem(Dt(), JSON.stringify(l));
    };
    return fr(() => {
      ze.value = Object.keys(d.value), Y.value = Be == null ? void 0 : Be.value, Promise.all([$t(!1), jt()]).then(() => nr(!0));
    }), Je(d, () => {
      K.value = nt();
    }), Je(
      be,
      () => {
        je.value = !1, at(0);
      },
      { deep: !0 }
    ), (l, u) => (S(), F("div", io, [
      h(me) ? (S(), F("div", uo, [
        E(ro, {
          "onUpdate:pageNumber": u[0] || (u[0] = (i) => at(i)),
          "onUpdate:currentPageSize": u[1] || (u[1] = (i) => jt(i)),
          currentPageSize: he.value,
          pageNumber: ie.value,
          pageSizeLabel: l.pageSizeLabel,
          rowCount: Ue.value
        }, null, 8, ["currentPageSize", "pageNumber", "pageSizeLabel", "rowCount"])
      ])) : U("", !0),
      W("div", {
        class: "table-container",
        onMouseover: u[7] || (u[7] = () => lr()),
        onMouseout: u[8] || (u[8] = () => Xn())
      }, [
        W("div", {
          class: q(["action-buttons", { active: rt.value }])
        }, [
          h(T) ? (S(), F("button", {
            key: 0,
            class: "btn btn-small btn-success",
            onClick: u[2] || (u[2] = () => ur())
          }, [
            W("div", {
              class: q(["las", Ee.value ? "la-trash" : "la-filter"])
            }, null, 2)
          ])) : U("", !0)
        ], 2),
        ee.value ? (S(), D(yr, {
          key: 0,
          ref_key: "table",
          ref: re,
          onAddColoredMetric: u[3] || (u[3] = (i) => Ln(i)),
          "onMove:column": u[4] || (u[4] = ({ from: i, to: v }) => Qn(i, v)),
          onRemoveColoredMetric: u[5] || (u[5] = (i) => Zn(i)),
          "onUpdate:orderBy": u[6] || (u[6] = (i) => _e(i)),
          additionalHeaders: Pn.value,
          cellClasses: h(o),
          colorMetrics: h(_),
          coloredMetrics: Oe.value,
          columns: Fn.value,
          comparisonColumnKeys: Nn.value,
          detailsRows: ge.value,
          dragColumns: h(x),
          fixedColumnNumber: h(B),
          inversedKpis: h(ae),
          orderBy: ee.value,
          primaryColumn: h(J),
          rows: Ft.value,
          showRowNumber: h(z),
          showTotal: !!Y.value,
          showTopTotal: h(kn)
        }, pr({
          colorizeLabel: w(({ enabled: i }) => [
            E(I, {
              mood: "white",
              size: "small"
            }, {
              default: w(() => [
                i ? (S(), F(H, { key: 0 }, [
                  N(k(l.uncolorizeLabel), 1)
                ], 64)) : (S(), F(H, { key: 1 }, [
                  N(k(l.colorizeLabel), 1)
                ], 64))
              ]),
              _: 2
            }, 1024)
          ]),
          columnRowNumber: w(() => [
            E(I, {
              contrast: "",
              size: "small"
            }, {
              default: w(() => [
                N("#")
              ]),
              _: 1
            })
          ]),
          rowNumber: w(({ value: i }) => [
            E(I, {
              contrast: "",
              size: "small"
            }, {
              default: w(() => [
                N(k(i), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          totalRowNumber: w(() => [
            E(I, {
              contrast: "",
              size: "small"
            }, {
              default: w(() => [
                N("#")
              ]),
              _: 1
            })
          ]),
          column: w(({ columnKey: i, isGhost: v }) => [
            W("div", {
              class: "d-flex align-items-center",
              onMouseover: () => It(i, !0),
              onMouseout: () => It(i, !1)
            }, [
              E(I, {
                contrast: "",
                size: "small"
              }, {
                default: w(() => [
                  N(k(h(d)[i].label), 1)
                ]),
                _: 2
              }, 1024),
              !v && Bn(h(d)[i]) ? (S(), D(Xs, {
                key: 0,
                description: h(d)[i].tooltipDescription,
                title: h(d)[i].tooltipTitle,
                visible: At.value[i]
              }, null, 8, ["description", "title", "visible"])) : U("", !0)
            ], 40, co)
          ]),
          row: w(({ columnKey: i, index: v, row: O, spanIndex: V, subcolumnKey: se, subindex: it, value: G }) => [
            ht(l.$slots, "row", mr(vr({
              columnKey: i,
              index: v,
              row: O,
              spanIndex: V,
              subcolumnKey: se,
              subindex: it,
              value: G
            })), () => [
              it === void 0 && i === "trend" ? (S(), D(lo, {
                key: 0,
                class: q(He(i, G, O.rowInfo.detailable)),
                formatter: (ut) => Q(ut, "int"),
                title: l.trendChartTitle,
                url: Wn(O, se)
              }, null, 8, ["class", "formatter", "title", "url"])) : O.rowInfo.detailable && i === h(m) ? (S(), F(H, { key: 1 }, [
                zt(O, i) && O.rowInfo.detailable ? (S(), D(I, {
                  key: 0,
                  class: q(He(i, G, O.rowInfo.detailable)),
                  contrast: "",
                  size: "small"
                }, {
                  default: w(() => [
                    W("a", {
                      class: "column-link",
                      href: Bt(h(R)[i], O).toString()
                    }, k(xe(Q(G, h(d)[i].type), i)), 9, fo)
                  ]),
                  _: 2
                }, 1032, ["class"])) : (S(), D(I, {
                  key: 1,
                  contrast: "",
                  size: "small"
                }, {
                  default: w(() => [
                    N(k(Q(G, h(d)[i].type)), 1)
                  ]),
                  _: 2
                }, 1024))
              ], 64)) : zt(O, i) && O.rowInfo.detailable ? (S(), D(I, {
                key: 2,
                class: q(He(i, G, O.rowInfo.detailable)),
                contrast: "",
                size: "small"
              }, {
                default: w(() => [
                  W("a", {
                    class: "column-link",
                    href: Bt(h(R)[i], O).toString()
                  }, k(xe(Q(G, h(d)[i].type), i)), 9, po)
                ]),
                _: 2
              }, 1032, ["class"])) : it === void 0 && G >= 0.01 && i in h(g) ? (S(), D(en, {
                key: 3,
                format: h(g)[i].format,
                label: xe(Q(G, h(d)[i].type), i),
                title: h(g)[i].title,
                url: In(i, O)
              }, null, 8, ["format", "label", "title", "url"])) : (S(), D(I, {
                key: 4,
                class: q(He(i, G, O.rowInfo.detailable)),
                contrast: "",
                size: "small"
              }, {
                default: w(() => [
                  N(k(xe(Q(G, h(d)[i].type), i)), 1)
                ]),
                _: 2
              }, 1032, ["class"])),
              $e(i, G) ? (S(), F("i", {
                key: 5,
                class: q(["flex-grow-1 expand-column fa", Ie.value.includes(i) ? "fa-compress-alt" : "fa-expand-alt"]),
                onClick: () => ir(i)
              }, null, 10, mo)) : U("", !0),
              Pt.value && O.rowInfo.detailable && i === h(m) ? (S(), F(H, { key: 6 }, [
                $e(i, G) ? U("", !0) : (S(), D(br, { key: 0 })),
                E(Ks, {
                  onHideDetails: () => Yn(O),
                  onShowDetails: (ut) => tr(ut, O),
                  labels: Pt.value,
                  open: ge.value[O[h(J)]] !== void 0,
                  title: l.detailsSelectorTitle
                }, null, 8, ["onHideDetails", "onShowDetails", "labels", "open", "title"])
              ], 64)) : U("", !0)
            ], !0)
          ]),
          additionalHeader: w(({ additionalHeader: i, columnKey: v }) => [
            i === "inline_filters" && Gn(v) ? (S(), F("div", {
              key: 0,
              class: q(["d-flex inline-filter", Mn(v)])
            }, [
              E(on, {
                class: "inline-filter-dropdown",
                "onUpdate:modelValue": (O) => Ut(v, { operator: O.toString() }),
                id: `additional_header_${v}`,
                items: Vn(v),
                modelValue: $n(v)
              }, {
                item: w(({ item: O }) => [
                  E(I, {
                    contrast: "",
                    size: "small"
                  }, {
                    default: w(() => [
                      N(k(O), 1)
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1032, ["onUpdate:modelValue", "id", "items", "modelValue"]),
              E(an, {
                class: "flex-grow-1 inline-filter-input",
                onBlur: (O) => Kn(O, v),
                onKeyup: (O) => er(O),
                modelValue: Hn(v),
                type: qn(v)
              }, null, 8, ["onBlur", "onKeyup", "modelValue", "type"])
            ], 2)) : U("", !0)
          ]),
          total: w(({ columnKey: i, subcolumnKey: v, values: O }) => [
            ht(l.$slots, h(Be), {
              columnKey: i,
              subcolumnKey: v,
              values: O
            }, () => [
              l.totalTitle && i === h(An) ? (S(), D(I, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: w(() => [
                  N(k(l.totalTitle(Ue.value ?? De.value.length)), 1)
                ]),
                _: 1
              })) : Y.value ? (S(), F(H, { key: 1 }, [
                v && h(C) && h(C)[v].format === "difference" ? (S(), D(I, {
                  key: 0,
                  mood: Dn(Y.value[i][v], i),
                  contrast: "",
                  size: "small"
                }, {
                  default: w(() => [
                    N(k(Lt(i, v, h(C)[v].format)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"])) : Y.value && Y.value[i] >= 0.01 && i in h(g) ? (S(), D(en, {
                  key: 1,
                  format: h(g)[i].format,
                  label: xe(Q(Y.value[i], h(d)[i].type, h(C) && v ? h(C)[v].format : void 0), i),
                  title: h(g)[i].title,
                  url: jn(h(g)[i])
                }, null, 8, ["format", "label", "title", "url"])) : i !== "trend" ? (S(), D(I, {
                  key: 2,
                  contrast: "",
                  size: "small"
                }, {
                  default: w(() => [
                    v ? (S(), F(H, { key: 0 }, [
                      N(k(Lt(i, v, h(C) ? h(C)[v].format : void 0)), 1)
                    ], 64)) : (S(), F(H, { key: 1 }, [
                      N(k(Q(Y.value[i], h(d)[i].type)), 1)
                    ], 64))
                  ]),
                  _: 2
                }, 1024)) : U("", !0)
              ], 64)) : U("", !0)
            ], !0)
          ]),
          _: 2
        }, [
          h(C) ? {
            name: "secondaryColumn",
            fn: w(({ subcolumnKey: i }) => [
              i ? (S(), D(I, {
                key: 0,
                contrast: "",
                size: "small"
              }, {
                default: w(() => [
                  N(k(h(C)[i].label), 1)
                ]),
                _: 2
              }, 1024)) : U("", !0)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "dragColumns", "fixedColumnNumber", "inversedKpis", "orderBy", "primaryColumn", "rows", "showRowNumber", "showTotal", "showTopTotal"])) : U("", !0)
      ], 32),
      W("div", {
        class: q(["loading-overlay", { visible: Re.value }])
      }, [
        E(St)
      ], 2)
    ]));
  }
});
const Lo = /* @__PURE__ */ pe(vo, [["__scopeId", "data-v-861a659b"]]), ho = ["onClick"], bo = ["onClick"], yo = { class: "added-item-container no-spacing" }, go = /* @__PURE__ */ de({
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
    const n = e, { columns: r, groupNames: s, modelValue: o, showModalLabel: a } = fe(n), c = P(Object.keys(s.value)[0]), b = P([...o.value]), _ = P(""), d = P(void 0), g = P({ left: 0, top: 0 }), R = P({ left: 0, top: 0 }), C = P({ left: 0, top: 0 }), p = j(() => Object.fromEntries(
      Object.entries(r.value).filter(([A, T]) => T.fixed !== !0 && (_.value.trim() === "" || T.label.toLowerCase().includes(_.value.trim().toLowerCase())))
    )), m = j(() => Object.keys(s.value).reduce((A, T) => (A[T] = Object.fromEntries(
      Object.entries(p.value).filter(([z, me]) => me.group === T)
    ), A), {})), y = j(() => c.value === void 0 ? void 0 : m.value[c.value]), x = j(() => Object.fromEntries(
      Object.entries(s.value).filter(([A, T]) => Object.values(p.value).some((z) => z.group === A))
    )), B = () => {
      b.value = [...o.value];
    }, M = (A = !1, T) => {
      T && T.target !== T.currentTarget || (A && B(), d.value = !1, c.value = Object.keys(s.value)[0]);
    }, ae = (A) => {
      const T = b.value.indexOf(A);
      T >= 0 && b.value.splice(T, 1);
    }, J = (A) => {
      const T = [...A];
      t("update:modelValue", T), o.value = T, M(!1);
    }, le = (A) => {
      c.value = A.toString();
    }, be = () => {
      d.value = !0;
    }, ye = (A) => {
      const T = b.value.indexOf(A);
      T >= 0 ? b.value.splice(T, 1) : b.value.push(A);
    };
    return Je(_, (A) => {
      A ? (!c.value || !(c.value in x.value)) && (c.value = Object.keys(x.value)[0]) : c.value || (c.value = Object.keys(x.value)[0]);
    }), (A, T) => (S(), F(H, null, [
      E(Ht, {
        onClick: T[0] || (T[0] = () => be()),
        label: h(a),
        mood: "neutral"
      }, null, 8, ["label"]),
      (S(), D(rn, { to: "#app > .app-container" }, [
        E(X, {
          class: q(["kpi-selector-container no-spacing", { visible: d.value, hidden: d.value === !1 }]),
          onClick: T[8] || (T[8] = Pe((z) => M(!0, z), ["stop"])),
          column: "",
          horizontal: "center",
          vertical: "center"
        }, {
          default: w(() => [
            E(sn, { class: "kpi-selector" }, {
              default: w(() => [
                E(X, {
                  class: "title",
                  vertical: "center"
                }, {
                  default: w(() => [
                    E(Ae, {
                      class: "flex-max",
                      size: "large-2"
                    }, {
                      default: w(() => [
                        N(k(A.title), 1)
                      ]),
                      _: 1
                    }),
                    E(X, {
                      class: "flex-max no-spacing search-container",
                      vertical: "center"
                    }, {
                      default: w(() => [
                        E(an, {
                          class: "flex-max search",
                          modelValue: _.value,
                          "onUpdate:modelValue": T[1] || (T[1] = (z) => _.value = z),
                          placeholder: A.filterLabel
                        }, null, 8, ["modelValue", "placeholder"]),
                        E(ke, {
                          class: "no-spacing",
                          value: "search-alt-2"
                        })
                      ]),
                      _: 1
                    }),
                    E(X, {
                      class: "close-container flex-max no-spacing",
                      horizontal: "right"
                    }, {
                      default: w(() => [
                        E(ke, {
                          class: "close",
                          onClick: T[2] || (T[2] = () => M(!0)),
                          size: "large-3",
                          value: "x"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                E(X, { class: "body flex-max no-spacing" }, {
                  default: w(() => [
                    c.value !== void 0 && y.value !== void 0 ? (S(), F(H, { key: 0 }, [
                      E(X, {
                        class: "flex-max",
                        column: ""
                      }, {
                        default: w(() => [
                          E(Ae, { size: "large-2" }, {
                            default: w(() => [
                              N(k(A.groupsTitle), 1)
                            ]),
                            _: 1
                          }),
                          E(ct, {
                            class: "flex-max no-spacing",
                            "onUpdate:scrollPosition": T[3] || (T[3] = (z) => g.value = z),
                            scrollPosition: g.value
                          }, {
                            default: w(() => [
                              (S(!0), F(H, null, we(Object.entries(x.value), ([z, me]) => (S(), F("div", {
                                class: q(["item no-spacing", { selected: c.value === z }]),
                                onClick: () => le(z)
                              }, [
                                E(I, { size: "small" }, {
                                  default: w(() => [
                                    N(k(me), 1)
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
                      E(X, {
                        class: "flex-max no-spacing",
                        column: ""
                      }, {
                        default: w(() => [
                          E(Ae, { size: "large-2" }, {
                            default: w(() => [
                              N(k(h(s)[c.value]), 1)
                            ]),
                            _: 1
                          }),
                          E(ct, {
                            class: "no-spacing",
                            "onUpdate:scrollPosition": T[4] || (T[4] = (z) => R.value = z),
                            scrollPosition: R.value
                          }, {
                            default: w(() => [
                              (S(!0), F(H, null, we(Object.entries(y.value), ([z, me]) => (S(), F("div", {
                                class: q(["item no-spacing", { selected: b.value.includes(z) }]),
                                onClick: () => ye(z),
                                key: z
                              }, [
                                E(I, { size: "small" }, {
                                  default: w(() => [
                                    N(k(me.label), 1)
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
                      E(X, {
                        class: "flex-max no-spacing",
                        column: ""
                      }, {
                        default: w(() => [
                          E(X, {
                            class: "header",
                            vertical: "center"
                          }, {
                            default: w(() => [
                              E(Ae, {
                                class: "flex-max",
                                size: "large-2"
                              }, {
                                default: w(() => [
                                  N(k(A.orderTitle), 1)
                                ]),
                                _: 1
                              }),
                              E(I, {
                                class: "reset",
                                onClick: T[5] || (T[5] = () => B()),
                                mood: "important-alt",
                                size: "small"
                              }, {
                                default: w(() => [
                                  N(k(A.resetLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          E(ct, {
                            class: "no-spacing",
                            "onUpdate:scrollPosition": T[6] || (T[6] = (z) => C.value = z),
                            scrollPosition: C.value
                          }, {
                            default: w(() => [
                              (S(!0), F(H, null, we(b.value, (z) => (S(), F("div", yo, [
                                E(X, {
                                  class: "item no-spacing",
                                  vertical: "center"
                                }, {
                                  default: w(() => [
                                    h(r)[z].fixed ? (S(), D(I, {
                                      key: 0,
                                      class: q(["flex-max", { fixed: h(r)[z].fixed }]),
                                      size: "small"
                                    }, {
                                      default: w(() => [
                                        N(k(h(r)[z].label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])) : (S(), F(H, { key: 1 }, [
                                      E(ke, {
                                        class: "move",
                                        value: "dots-vertical-rounded"
                                      }),
                                      E(I, {
                                        class: "flex-max no-spacing",
                                        size: "small"
                                      }, {
                                        default: w(() => [
                                          N(k(h(r)[z].label), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      E(ke, {
                                        class: "no-spacing remove",
                                        onClick: () => ae(z),
                                        value: "trash"
                                      }, null, 8, ["onClick"])
                                    ], 64))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]))), 256))
                            ]),
                            _: 1
                          }, 8, ["scrollPosition"])
                        ]),
                        _: 1
                      })
                    ], 64)) : (S(), D(X, {
                      key: 1,
                      class: "flex-max",
                      horizontal: "center",
                      vertical: "center"
                    }, {
                      default: w(() => [
                        E(I, { size: "small" }, {
                          default: w(() => [
                            N(k(A.noColumnsFoundLabel), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }))
                  ]),
                  _: 1
                }),
                E(X, {
                  class: "controls no-spacing",
                  horizontal: "right"
                }, {
                  default: w(() => [
                    E(Ht, {
                      onClick: T[7] || (T[7] = () => J(b.value)),
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
const Bo = /* @__PURE__ */ pe(go, [["__scopeId", "data-v-13e9af97"]]);
export {
  Lo as CommonTable,
  Bo as KpiSelector
};
