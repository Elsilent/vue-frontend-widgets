import { defineComponent as Ce, toRefs as Oe, ref as N, openBlock as S, createElementBlock as z, normalizeClass as G, createElementVNode as J, withModifiers as Ve, toDisplayString as P, unref as w, createVNode as R, withCtx as _, createCommentVNode as $, Fragment as X, renderList as Se, createBlock as B, pushScopeId as cn, popScopeId as dn, onUnmounted as pr, createTextVNode as F, computed as U, onMounted as vr, watch as Ie, createSlots as mr, renderSlot as Gt, normalizeProps as hr, guardReactiveProps as br, nextTick as Xt, Teleport as gr, normalizeStyle as yr } from "vue";
import be from "numeral";
import { A as Y, I as je, C as wr } from "./Icon-8f2ed8ba.js";
import { D as fn, B as _t, I as pn } from "./Input-a4b31ab2.js";
import { L as Rt, a as _r } from "./LineBarChart-0171dc81.js";
import { P as Tt } from "./Popover-38d3223e.js";
import { _ as Ee } from "./_plugin-vue_export-helper-dad06003.js";
import { I as j } from "./Info-54758b60.js";
import { B as Sr } from "./BodyPopover-9b857526.js";
import { L as Yt } from "./Link-39d49584.js";
import { Separator as Cr } from "./marker.js";
import { T as Or } from "./Table-ec1da05e.js";
import { Header as Ue } from "./label.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "vue-router";
import "./datetime-31a2b505.js";
function vn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Er } = Object.prototype, { getPrototypeOf: At } = Object, et = ((e) => (t) => {
  const n = Er.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), le = (e) => (e = e.toLowerCase(), (t) => et(t) === e), tt = (e) => (t) => typeof t === e, { isArray: Fe } = Array, Me = tt("undefined");
function xr(e) {
  return e !== null && !Me(e) && e.constructor !== null && !Me(e.constructor) && ee(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const mn = le("ArrayBuffer");
function Rr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && mn(e.buffer), t;
}
const Tr = tt("string"), ee = tt("function"), hn = tt("number"), nt = (e) => e !== null && typeof e == "object", Ar = (e) => e === !0 || e === !1, Xe = (e) => {
  if (et(e) !== "object")
    return !1;
  const t = At(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, kr = le("Date"), Nr = le("File"), Pr = le("Blob"), Fr = le("FileList"), Lr = (e) => nt(e) && ee(e.pipe), Dr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ee(e.append) && ((t = et(e)) === "formdata" || // detect form-data instance
  t === "object" && ee(e.toString) && e.toString() === "[object FormData]"));
}, Br = le("URLSearchParams"), zr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $e(e, t, { allOwnKeys: n = !1 } = {}) {
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
function bn(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const gn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), yn = (e) => !Me(e) && e !== gn;
function St() {
  const { caseless: e } = yn(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && bn(t, s) || s;
    Xe(t[o]) && Xe(r) ? t[o] = St(t[o], r) : Xe(r) ? t[o] = St({}, r) : Fe(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && $e(arguments[r], n);
  return t;
}
const Ir = (e, t, n, { allOwnKeys: r } = {}) => ($e(t, (s, o) => {
  n && ee(s) ? e[o] = vn(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), jr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ur = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Vr = (e, t, n, r) => {
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
}, Mr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, $r = (e) => {
  if (!e)
    return null;
  if (Fe(e))
    return e;
  let t = e.length;
  if (!hn(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Hr = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && At(Uint8Array)), qr = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Jr = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Wr = le("HTMLFormElement"), Gr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Qt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Xr = le("RegExp"), wn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  $e(n, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (r[o] = a || s);
  }), Object.defineProperties(e, r);
}, Yr = (e) => {
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
}, Qr = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return Fe(e) ? r(e) : r(String(e).split(t)), n;
}, Zr = () => {
}, Kr = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ht = "abcdefghijklmnopqrstuvwxyz", Zt = "0123456789", _n = {
  DIGIT: Zt,
  ALPHA: ht,
  ALPHA_DIGIT: ht + ht.toUpperCase() + Zt
}, es = (e = 16, t = _n.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function ts(e) {
  return !!(e && ee(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ns = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (nt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = Fe(r) ? [] : {};
        return $e(r, (a, d) => {
          const b = n(a, s + 1);
          !Me(b) && (o[d] = b);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, rs = le("AsyncFunction"), ss = (e) => e && (nt(e) || ee(e)) && ee(e.then) && ee(e.catch), f = {
  isArray: Fe,
  isArrayBuffer: mn,
  isBuffer: xr,
  isFormData: Dr,
  isArrayBufferView: Rr,
  isString: Tr,
  isNumber: hn,
  isBoolean: Ar,
  isObject: nt,
  isPlainObject: Xe,
  isUndefined: Me,
  isDate: kr,
  isFile: Nr,
  isBlob: Pr,
  isRegExp: Xr,
  isFunction: ee,
  isStream: Lr,
  isURLSearchParams: Br,
  isTypedArray: Hr,
  isFileList: Fr,
  forEach: $e,
  merge: St,
  extend: Ir,
  trim: zr,
  stripBOM: jr,
  inherits: Ur,
  toFlatObject: Vr,
  kindOf: et,
  kindOfTest: le,
  endsWith: Mr,
  toArray: $r,
  forEachEntry: qr,
  matchAll: Jr,
  isHTMLForm: Wr,
  hasOwnProperty: Qt,
  hasOwnProp: Qt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: wn,
  freezeMethods: Yr,
  toObjectSet: Qr,
  toCamelCase: Gr,
  noop: Zr,
  toFiniteNumber: Kr,
  findKey: bn,
  global: gn,
  isContextDefined: yn,
  ALPHABET: _n,
  generateString: es,
  isSpecCompliantForm: ts,
  toJSONObject: ns,
  isAsyncFn: rs,
  isThenable: ss
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
const Sn = L.prototype, Cn = {};
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
  Cn[e] = { value: e };
});
Object.defineProperties(L, Cn);
Object.defineProperty(Sn, "isAxiosError", { value: !0 });
L.from = (e, t, n, r, s, o) => {
  const a = Object.create(Sn);
  return f.toFlatObject(e, a, function(b) {
    return b !== Error.prototype;
  }, (d) => d !== "isAxiosError"), L.call(a, e.message, t, n, r, s), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const os = null;
function Ct(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function On(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Kt(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = On(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function as(e) {
  return f.isArray(e) && !e.some(Ct);
}
const ls = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function rt(e, t, n) {
  if (!f.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = f.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, g) {
    return !f.isUndefined(g[h]);
  });
  const r = n.metaTokens, s = n.visitor || u, o = n.dots, a = n.indexes, b = (n.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(t);
  if (!f.isFunction(s))
    throw new TypeError("visitor must be a function");
  function m(v) {
    if (v === null)
      return "";
    if (f.isDate(v))
      return v.toISOString();
    if (!b && f.isBlob(v))
      throw new L("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(v) || f.isTypedArray(v) ? b && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function u(v, h, g) {
    let A = v;
    if (v && !g && typeof v == "object") {
      if (f.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), v = JSON.stringify(v);
      else if (f.isArray(v) && as(v) || (f.isFileList(v) || f.endsWith(h, "[]")) && (A = f.toArray(v)))
        return h = On(h), A.forEach(function(re, se) {
          !(f.isUndefined(re) || re === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Kt([h], se, o) : a === null ? h : h + "[]",
            m(re)
          );
        }), !1;
    }
    return Ct(v) ? !0 : (t.append(Kt(g, h, o), m(v)), !1);
  }
  const y = [], T = Object.assign(ls, {
    defaultVisitor: u,
    convertValue: m,
    isVisitable: Ct
  });
  function C(v, h) {
    if (!f.isUndefined(v)) {
      if (y.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      y.push(v), f.forEach(v, function(A, I) {
        (!(f.isUndefined(A) || A === null) && s.call(
          t,
          A,
          f.isString(I) ? I.trim() : I,
          h,
          T
        )) === !0 && C(A, h ? h.concat(I) : [I]);
      }), y.pop();
    }
  }
  if (!f.isObject(e))
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
const En = kt.prototype;
En.append = function(t, n) {
  this._pairs.push([t, n]);
};
En.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, en);
  } : en;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function is(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function xn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || is, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = f.isURLSearchParams(t) ? t.toString() : new kt(t, n).toString(r), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class us {
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
const tn = us, Rn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, cs = typeof URLSearchParams < "u" ? URLSearchParams : kt, ds = typeof FormData < "u" ? FormData : null, fs = typeof Blob < "u" ? Blob : null, ps = {
  isBrowser: !0,
  classes: {
    URLSearchParams: cs,
    FormData: ds,
    Blob: fs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Tn = typeof window < "u" && typeof document < "u", vs = ((e) => Tn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), ms = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), hs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Tn,
  hasStandardBrowserEnv: vs,
  hasStandardBrowserWebWorkerEnv: ms
}, Symbol.toStringTag, { value: "Module" })), ae = {
  ...hs,
  ...ps
};
function bs(e, t) {
  return rt(e, new ae.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return ae.isNode && f.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function gs(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ys(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function An(e) {
  function t(n, r, s, o) {
    let a = n[o++];
    const d = Number.isFinite(+a), b = o >= n.length;
    return a = !a && f.isArray(s) ? s.length : a, b ? (f.hasOwnProp(s, a) ? s[a] = [s[a], r] : s[a] = r, !d) : ((!s[a] || !f.isObject(s[a])) && (s[a] = []), t(n, r, s[a], o) && f.isArray(s[a]) && (s[a] = ys(s[a])), !d);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const n = {};
    return f.forEachEntry(e, (r, s) => {
      t(gs(r), s, n, 0);
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
const Nt = {
  transitional: Rn,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = f.isObject(t);
    if (o && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
      return s && s ? JSON.stringify(An(t)) : t;
    if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t))
      return t;
    if (f.isArrayBufferView(t))
      return t.buffer;
    if (f.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let d;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return bs(t, this.formSerializer).toString();
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
    const n = this.transitional || Nt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && f.isString(t) && (r && !this.responseType || s)) {
      const a = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (d) {
        if (a)
          throw d.name === "SyntaxError" ? L.from(d, L.ERR_BAD_RESPONSE, this, null, this.response) : d;
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
const Pt = Nt, _s = f.toObjectSet([
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
]), Ss = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), n = a.substring(0, s).trim().toLowerCase(), r = a.substring(s + 1).trim(), !(!n || t[n] && _s[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, nn = Symbol("internals");
function ze(e) {
  return e && String(e).trim().toLowerCase();
}
function Ye(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(Ye) : String(e);
}
function Cs(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Os = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function Es(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function xs(e, t) {
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
    function o(d, b, m) {
      const u = ze(b);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const y = f.findKey(s, u);
      (!y || s[y] === void 0 || m === !0 || m === void 0 && s[y] !== !1) && (s[y || b] = Ye(d));
    }
    const a = (d, b) => f.forEach(d, (m, u) => o(m, u, b));
    return f.isPlainObject(t) || t instanceof this.constructor ? a(t, n) : f.isString(t) && (t = t.trim()) && !Os(t) ? a(Ss(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = ze(t), t) {
      const r = f.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Cs(s);
        if (f.isFunction(n))
          return n.call(this, s, r);
        if (f.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ze(t), t) {
      const r = f.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || bt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(a) {
      if (a = ze(a), a) {
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
      const d = t ? Es(o) : String(o).trim();
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
    const r = (this[nn] = this[nn] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const d = ze(a);
      r[d] || (xs(s, a), r[d] = !0);
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
function gt(e, t) {
  const n = this || Pt, r = t || n, s = de.from(r.headers);
  let o = r.data;
  return f.forEach(e, function(d) {
    o = d.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function kn(e) {
  return !!(e && e.__CANCEL__);
}
function He(e, t, n) {
  L.call(this, e ?? "canceled", L.ERR_CANCELED, t, n), this.name = "CanceledError";
}
f.inherits(He, L, {
  __CANCEL__: !0
});
function Rs(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new L(
    "Request failed with status code " + n.status,
    [L.ERR_BAD_REQUEST, L.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Ts = ae.hasStandardBrowserEnv ? (
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
function As(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ks(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Nn(e, t) {
  return e && !As(t) ? ks(e, t) : t;
}
const Ns = ae.hasStandardBrowserEnv ? (
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
function Ps(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Fs(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(b) {
    const m = Date.now(), u = r[o];
    a || (a = m), n[s] = b, r[s] = m;
    let y = o, T = 0;
    for (; y !== s; )
      T += n[y++], y = y % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), m - a < t)
      return;
    const C = u && m - u;
    return C ? Math.round(T * 1e3 / C) : void 0;
  };
}
function rn(e, t) {
  let n = 0;
  const r = Fs(50, 250);
  return (s) => {
    const o = s.loaded, a = s.lengthComputable ? s.total : void 0, d = o - n, b = r(d), m = o <= a;
    n = o;
    const u = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: d,
      rate: b || void 0,
      estimated: b && a && m ? (a - o) / b : void 0,
      event: s
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const Ls = typeof XMLHttpRequest < "u", Ds = Ls && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = de.from(e.headers).normalize(), a = e.responseType;
    let d;
    function b() {
      e.cancelToken && e.cancelToken.unsubscribe(d), e.signal && e.signal.removeEventListener("abort", d);
    }
    let m;
    if (f.isFormData(s)) {
      if (ae.hasStandardBrowserEnv || ae.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((m = o.getContentType()) !== !1) {
        const [v, ...h] = m ? m.split(";").map((g) => g.trim()).filter(Boolean) : [];
        o.setContentType([v || "multipart/form-data", ...h].join("; "));
      }
    }
    let u = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", h = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(v + ":" + h));
    }
    const y = Nn(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), xn(y, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function T() {
      if (!u)
        return;
      const v = de.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), g = {
        data: !a || a === "text" || a === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: v,
        config: e,
        request: u
      };
      Rs(function(I) {
        n(I), b();
      }, function(I) {
        r(I), b();
      }, g), u = null;
    }
    if ("onloadend" in u ? u.onloadend = T : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(T);
    }, u.onabort = function() {
      u && (r(new L("Request aborted", L.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new L("Network Error", L.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let h = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const g = e.transitional || Rn;
      e.timeoutErrorMessage && (h = e.timeoutErrorMessage), r(new L(
        h,
        g.clarifyTimeoutError ? L.ETIMEDOUT : L.ECONNABORTED,
        e,
        u
      )), u = null;
    }, ae.hasStandardBrowserEnv) {
      const v = Ns(y) && e.xsrfCookieName && Ts.read(e.xsrfCookieName);
      v && o.set(e.xsrfHeaderName, v);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in u && f.forEach(o.toJSON(), function(h, g) {
      u.setRequestHeader(g, h);
    }), f.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), a && a !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", rn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", rn(e.onUploadProgress)), (e.cancelToken || e.signal) && (d = (v) => {
      u && (r(!v || v.type ? new He(null, e, u) : v), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(d), e.signal && (e.signal.aborted ? d() : e.signal.addEventListener("abort", d)));
    const C = Ps(y);
    if (C && ae.protocols.indexOf(C) === -1) {
      r(new L("Unsupported protocol " + C + ":", L.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(s || null);
  });
}, Ot = {
  http: os,
  xhr: Ds
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
const sn = (e) => `- ${e}`, Bs = (e) => f.isFunction(e) || e === null || e === !1, Pn = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let a;
      if (r = n, !Bs(n) && (r = Ot[(a = String(n)).toLowerCase()], r === void 0))
        throw new L(`Unknown adapter '${a}'`);
      if (r)
        break;
      s[a || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([d, b]) => `adapter ${d} ` + (b === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? o.length > 1 ? `since :
` + o.map(sn).join(`
`) : " " + sn(o[0]) : "as no adapter specified";
      throw new L(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ot
};
function yt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new He(null, e);
}
function on(e) {
  return yt(e), e.headers = de.from(e.headers), e.data = gt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Pn.getAdapter(e.adapter || Pt.adapter)(e).then(function(r) {
    return yt(e), r.data = gt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = de.from(r.headers), r;
  }, function(r) {
    return kn(r) || (yt(e), r && r.response && (r.response.data = gt.call(
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
  function r(m, u, y) {
    return f.isPlainObject(m) && f.isPlainObject(u) ? f.merge.call({ caseless: y }, m, u) : f.isPlainObject(u) ? f.merge({}, u) : f.isArray(u) ? u.slice() : u;
  }
  function s(m, u, y) {
    if (f.isUndefined(u)) {
      if (!f.isUndefined(m))
        return r(void 0, m, y);
    } else
      return r(m, u, y);
  }
  function o(m, u) {
    if (!f.isUndefined(u))
      return r(void 0, u);
  }
  function a(m, u) {
    if (f.isUndefined(u)) {
      if (!f.isUndefined(m))
        return r(void 0, m);
    } else
      return r(void 0, u);
  }
  function d(m, u, y) {
    if (y in t)
      return r(m, u);
    if (y in e)
      return r(void 0, m);
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
    headers: (m, u) => s(an(m), an(u), !0)
  };
  return f.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const y = b[u] || s, T = y(e[u], t[u], u);
    f.isUndefined(T) && y !== d || (n[u] = T);
  }), n;
}
const Fn = "1.6.1", Ft = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ft[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ln = {};
Ft.transitional = function(t, n, r) {
  function s(o, a) {
    return "[Axios v" + Fn + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
  }
  return (o, a, d) => {
    if (t === !1)
      throw new L(
        s(a, " has been removed" + (n ? " in " + n : "")),
        L.ERR_DEPRECATED
      );
    return n && !ln[a] && (ln[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, d) : !0;
  };
};
function zs(e, t, n) {
  if (typeof e != "object")
    throw new L("options must be an object", L.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], a = t[o];
    if (a) {
      const d = e[o], b = d === void 0 || a(d, o, e);
      if (b !== !0)
        throw new L("option " + o + " must be " + b, L.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new L("Unknown option " + o, L.ERR_BAD_OPTION);
  }
}
const Et = {
  assertOptions: zs,
  validators: Ft
}, he = Et.validators;
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
      silentJSONParsing: he.transitional(he.boolean),
      forcedJSONParsing: he.transitional(he.boolean),
      clarifyTimeoutError: he.transitional(he.boolean)
    }, !1), s != null && (f.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Et.assertOptions(s, {
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
    let b = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (b = b && h.synchronous, d.unshift(h.fulfilled, h.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function(h) {
      m.push(h.fulfilled, h.rejected);
    });
    let u, y = 0, T;
    if (!b) {
      const v = [on.bind(this), void 0];
      for (v.unshift.apply(v, d), v.push.apply(v, m), T = v.length, u = Promise.resolve(n); y < T; )
        u = u.then(v[y++], v[y++]);
      return u;
    }
    T = d.length;
    let C = n;
    for (y = 0; y < T; ) {
      const v = d[y++], h = d[y++];
      try {
        C = v(C);
      } catch (g) {
        h.call(this, g);
        break;
      }
    }
    try {
      u = on.call(this, C);
    } catch (v) {
      return Promise.reject(v);
    }
    for (y = 0, T = m.length; y < T; )
      u = u.then(m[y++], m[y++]);
    return u;
  }
  getUri(t) {
    t = Pe(this.defaults, t);
    const n = Nn(t.baseURL, t.url);
    return xn(n, t.params, t.paramsSerializer);
  }
}
f.forEach(["delete", "get", "head", "options"], function(t) {
  Ze.prototype[t] = function(n, r) {
    return this.request(Pe(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, a, d) {
      return this.request(Pe(d || {}, {
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
const Is = Lt;
function js(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Us(e) {
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
const Vs = xt;
function Ln(e) {
  const t = new Qe(e), n = vn(Qe.prototype.request, t);
  return f.extend(n, Qe.prototype, t, { allOwnKeys: !0 }), f.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ln(Pe(e, s));
  }, n;
}
const V = Ln(Pt);
V.Axios = Qe;
V.CanceledError = He;
V.CancelToken = Is;
V.isCancel = kn;
V.VERSION = Fn;
V.toFormData = rt;
V.AxiosError = L;
V.Cancel = V.CanceledError;
V.all = function(t) {
  return Promise.all(t);
};
V.spread = js;
V.isAxiosError = Us;
V.mergeConfig = Pe;
V.AxiosHeaders = de;
V.formToJSON = (e) => An(f.isHTMLForm(e) ? new FormData(e) : e);
V.getAdapter = Pn.getAdapter;
V.HttpStatusCode = Vs;
V.default = V;
const Ke = V;
be.localeData().delimiters.thousands = " ";
be.localeData().delimiters.decimal = ",";
const Ms = (e) => e === void 0 ? void 0 : JSON.parse(JSON.stringify(e)), $s = (e) => {
  if (!Array.isArray(e) && Object.getPrototypeOf(e) !== Object.prototype)
    throw new Error(
      "Tried cloning instance of a class. Consider implementing clone method instead."
    );
  return Ms(e);
};
function Dn(e, t, n) {
  const r = {};
  for (const [s, o] of Object.entries(e))
    if (s in n)
      if ((n[s].colspan ?? 0) > 1) {
        const a = t ? t[s] : void 0;
        let d;
        a === void 0 ? d = 100 : o === 0 ? d = -100 : d = (o - a) / o * 100, r[s] = {
          original: o,
          comparison: a ?? 0,
          difference: d
        };
      } else
        r[s] = o;
  return r;
}
function Hs(e, t, n, r) {
  const s = {};
  for (const o of Object.values(e)) {
    const a = o[r], d = Object.values(t).find(
      (b) => b[r] === a
    );
    s[a] = Dn(o, d, n);
  }
  return s;
}
const qs = {
  key: 0,
  class: "popover-header"
}, Js = {
  key: 1,
  class: "popover-body"
}, Ws = {
  important: "",
  size: "small"
}, Gs = { size: "small" }, Xs = /* @__PURE__ */ Ce({
  __name: "CellHint",
  props: {
    format: {},
    label: {},
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { format: n, label: r, title: s, url: o } = Oe(t), a = N(), d = N(!1), b = N(), m = (h) => {
      var g;
      h && (!h.target || (g = b.value) != null && g.contains(h.target)) || (d.value = !1, window.removeEventListener("mouseup", m));
    }, u = (h) => h.map(({ name: g, valueFormatted: A }) => ({
      label: g,
      value: A
    })), y = (h) => h.map(({ name: g, rate: A, value: I }) => ({
      label: g,
      value: `${be(I).format("0,0")} (${be(A).format("0,0.00")}%)`
    })), T = (h) => {
      switch (n.value) {
        case "distribution":
          return u(h);
        case "rated_distribution":
          return y(h);
        default:
          throw new Error(`Unsupported format: ${n.value}`);
      }
    }, C = async () => {
      if (window.addEventListener("mouseup", m), a.value)
        return;
      const h = (await Ke(o.value)).data;
      a.value = T(h);
    }, v = async () => {
      d.value = !0, await C();
    };
    return (h, g) => (S(), z("div", {
      class: G(["cell-hint", { visible: d.value }]),
      ref_key: "root",
      ref: b,
      onMouseover: g[1] || (g[1] = () => v()),
      onMouseout: g[2] || (g[2] = () => m())
    }, [
      J("span", {
        class: "label",
        onClick: g[0] || (g[0] = Ve(() => v(), ["stop"]))
      }, P(w(r)), 1),
      R(Tt, {
        visible: d.value,
        parentClass: "cell",
        popoverClass: "cell-hint-popover"
      }, {
        default: _(() => [
          w(s) ? (S(), z("div", qs, P(w(s)), 1)) : $("", !0),
          a.value ? (S(), z("div", Js, [
            (S(!0), z(X, null, Se(a.value, ({ label: A, value: I }, re) => (S(), z("div", {
              key: `line-${re}`
            }, [
              J("b", Ws, P(A) + ": ", 1),
              J("span", Gs, P(I), 1)
            ]))), 128))
          ])) : (S(), B(Rt, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ], 34));
  }
});
const un = /* @__PURE__ */ Ee(Xs, [["__scopeId", "data-v-9c7f570a"]]), Ys = (e) => (cn("data-v-7a1d1810"), e = e(), dn(), e), Qs = { class: "column-hint" }, Zs = /* @__PURE__ */ Ys(() => /* @__PURE__ */ J("i", { class: "la la-question-circle" }, null, -1)), Ks = { class: "popover-header" }, eo = { class: "popover-body" }, to = /* @__PURE__ */ Ce({
  __name: "ColumnHint",
  props: {
    description: {},
    title: {},
    visible: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, { description: n, title: r, visible: s } = Oe(t);
    return (o, a) => (S(), z("div", Qs, [
      Zs,
      R(Tt, {
        visible: w(s),
        parentClass: "cell",
        popoverClass: "column-hint-popover"
      }, {
        default: _(() => [
          J("div", Ks, P(w(r)), 1),
          J("div", eo, P(w(n)), 1)
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const no = /* @__PURE__ */ Ee(to, [["__scopeId", "data-v-7a1d1810"]]), ro = /* @__PURE__ */ Ce({
  __name: "DetailsSelector",
  props: {
    labels: {},
    open: { type: Boolean, default: !1 },
    title: {}
  },
  emits: ["hideDetails", "showDetails"],
  setup(e, { emit: t }) {
    const n = e, { labels: r, open: s, title: o } = Oe(n), a = N(!1), d = N(), b = N(), m = (T) => {
      var C, v;
      !T.target || (C = b.value) != null && C.contains(T.target) || (v = d.value) != null && v.$el.contains(T.target) || (a.value = !1, window.removeEventListener("mouseup", m));
    }, u = () => {
      if (s.value) {
        t("hideDetails");
        return;
      }
      if (a.value) {
        a.value = !1;
        return;
      }
      a.value = !0, window.addEventListener("mouseup", m);
    }, y = (T) => {
      if (a.value = !1, s.value) {
        t("hideDetails");
        return;
      }
      t("showDetails", T);
    };
    return pr(() => {
      window.removeEventListener("mouseup", m);
    }), (T, C) => (S(), z("div", {
      class: "details-selector-container",
      ref_key: "root",
      ref: b,
      onClick: C[0] || (C[0] = Ve(() => u(), ["stop"]))
    }, [
      R(Y, {
        class: "details-selector",
        vertical: "center"
      }, {
        default: _(() => [
          w(o) ? (S(), B(j, {
            key: 0,
            mood: "important-alt",
            size: "small"
          }, {
            default: _(() => [
              F(P(w(o)), 1)
            ]),
            _: 1
          })) : $("", !0),
          R(je, {
            value: w(s) ? "chevron-up" : "chevron-down",
            mood: "important-alt",
            size: "large-2"
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      R(Sr, {
        ref_key: "popover",
        ref: d,
        parentNode: b.value,
        visible: a.value,
        autoPosition: "",
        popoverClass: "details-selector-popover"
      }, {
        default: _(() => [
          (S(!0), z(X, null, Se(w(r), (v, h) => (S(), B(j, {
            class: "dropdown-item",
            onClick: Ve(() => y(h), ["stop"]),
            contrast: ""
          }, {
            default: _(() => [
              F(P(v), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 256))
        ]),
        _: 1
      }, 8, ["parentNode", "visible"])
    ], 512));
  }
});
const so = /* @__PURE__ */ Ee(ro, [["__scopeId", "data-v-4d4dbc91"]]), oo = { class: "pagination" }, ao = ["onClick"], lo = /* @__PURE__ */ Ce({
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
    const n = e, { currentPageSize: r, id: s, pageNumber: o, pageRadius: a, pageSizeLabel: d, pageSizes: b, rowCount: m } = Oe(n), u = U(() => Math.min(...b.value)), y = U(() => Math.ceil(m.value / r.value)), T = U(
      () => b.value.reduce((h, g) => (h[g] = g.toString(), h), {})
    ), C = U(() => {
      const h = [];
      for (let g = a.value - 1; g > 0; g--)
        o.value > g && h.push(o.value - g);
      h.push(o.value);
      for (let g = 1; g < a.value; g++)
        o.value < y.value - g - 1 && h.push(o.value + g);
      return h;
    }), v = (h) => {
      r.value !== h && t("update:currentPageSize", h);
    };
    return (h, g) => (S(), z("div", oo, [
      w(m) > w(r) ? (S(), z(X, { key: 0 }, [
        w(o) > 0 ? (S(), B(j, {
          key: 0,
          class: "page",
          onClick: g[0] || (g[0] = () => t("update:pageNumber", 0)),
          mood: "important-alt"
        }, {
          default: _(() => [
            F("1")
          ]),
          _: 1
        })) : $("", !0),
        w(o) > w(a) ? (S(), B(j, {
          key: 1,
          class: "page-separator"
        }, {
          default: _(() => [
            F("…")
          ]),
          _: 1
        })) : $("", !0),
        (S(!0), z(X, null, Se(C.value, (A) => (S(), z("div", {
          class: G(["page", { current: A === w(o) }]),
          onClick: () => t("update:pageNumber", A),
          key: A
        }, P(A + 1), 11, ao))), 128)),
        w(o) < y.value - w(a) - 1 ? (S(), B(j, {
          key: 2,
          class: "page-separator"
        }, {
          default: _(() => [
            F("…")
          ]),
          _: 1
        })) : $("", !0),
        w(o) < y.value - 1 ? (S(), B(j, {
          key: 3,
          class: "page",
          onClick: g[1] || (g[1] = () => t("update:pageNumber", y.value - 1)),
          mood: "important-alt"
        }, {
          default: _(() => [
            F(P(y.value), 1)
          ]),
          _: 1
        })) : $("", !0),
        R(j, { class: "page-size-label" }, {
          default: _(() => [
            F(P(w(d)), 1)
          ]),
          _: 1
        })
      ], 64)) : $("", !0),
      w(m) > u.value ? (S(), B(fn, {
        key: 1,
        class: "page-size-selector",
        "onUpdate:modelValue": g[2] || (g[2] = (A) => v(parseInt(A.toString()))),
        id: w(s),
        items: T.value,
        modelValue: w(r)
      }, {
        item: _(({ item: A }) => [
          F(P(A), 1)
        ]),
        _: 1
      }, 8, ["id", "items", "modelValue"])) : $("", !0)
    ]));
  }
});
const io = /* @__PURE__ */ Ee(lo, [["__scopeId", "data-v-764cc1be"]]), uo = (e) => (cn("data-v-b4f986aa"), e = e(), dn(), e), co = /* @__PURE__ */ uo(() => /* @__PURE__ */ J("i", { class: "la la-eye secondary" }, null, -1)), fo = /* @__PURE__ */ Ce({
  __name: "TrendChart",
  props: {
    formatter: { type: Function },
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { formatter: n, title: r, url: s } = Oe(t), o = N(!1), a = N([]), d = N(), b = U(() => d.value ? Object.assign({}, d.value) : {}), m = U(() => {
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
    }), u = U(() => {
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
    }), y = U(() => u.value > m.value ? "negative" : u.value < m.value ? "positive" : "neutral"), T = U(() => {
      if (!d.value)
        return {};
      const g = new Array(d.value.length).fill(0).map(
        (A, I) => u.value + (m.value - u.value) * I / (d.value.length - 1)
      );
      return Object.assign({}, g);
    }), C = async () => {
      if (!d.value)
        return;
      const g = (await Ke({ url: s.value })).data;
      a.value = Object.keys(g), d.value = Object.values(g);
    }, v = () => {
      o.value = !1, window.removeEventListener("mouseup", v);
    }, h = async () => {
      o.value = !0, window.addEventListener("mouseup", v), await C();
    };
    return (g, A) => (S(), z("div", {
      class: "trend-chart-container",
      onClick: A[0] || (A[0] = Ve(() => h(), ["stop"]))
    }, [
      co,
      R(Tt, {
        visible: o.value,
        parentClass: "cell",
        popoverClass: "trend-chart-popover"
      }, {
        default: _(() => [
          w(r) ? (S(), B(Ue, {
            key: 0,
            size: "small-3"
          }, {
            default: _(() => [
              F(P(w(r)), 1)
            ]),
            _: 1
          })) : $("", !0),
          d.value ? (S(), B(_r, {
            key: 1,
            activeLines: ["values"],
            formatters: { trend: w(n), values: w(n) },
            moods: { trend: { mood: y.value }, values: { mood: "important" } },
            styles: { trend: "line", values: "line" },
            values: { trend: T.value, values: b.value }
          }, {
            "x-axis-label": _(({ index: I }) => [
              F(P(a.value[I]), 1)
            ]),
            _: 1
          }, 8, ["formatters", "moods", "values"])) : (S(), B(Rt, { key: 2 }))
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const po = /* @__PURE__ */ Ee(fo, [["__scopeId", "data-v-b4f986aa"]]), vo = { class: "common-table" }, mo = {
  key: 0,
  class: "controls d-flex justify-content-end mb-1"
}, ho = ["onMouseover", "onMouseout"], bo = ["onClick"], wt = 50, go = /* @__PURE__ */ Ce({
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
    const n = e, r = async (l, i) => typeof l == "function" ? await l(i) : (await Ke({
      ...l,
      params: {
        ...l.params,
        ...i
      }
    })).data, s = async (l, i) => typeof l == "function" ? await l(i) : (await Ke({
      ...l,
      params: {
        ...l.params ?? {},
        filter: i.inlineFilters,
        page_number: i.pageNumber,
        page_size: i.pageSize,
        order: i.orderBy,
        reversed: i.reversed
      }
    })).data, {
      cellClasses: o,
      clientCurrencyDecimal: a,
      clientCurrencySymbol: d,
      clientCurrencySymbolPrefix: b,
      colorMetrics: m,
      columns: u,
      columnDetails: y,
      columnLinks: T,
      comparisonColumns: C,
      comparisonRequest: v,
      defaultOrderBy: h,
      detailsColumn: g,
      detailsRequests: A,
      dragColumns: I,
      fixedColumnNumber: re,
      inlineFilterOperators: se,
      inversedKpis: ie,
      primaryColumn: M,
      primaryColumnAlias: fe,
      request: q,
      rows: xe,
      shortenColumns: Z,
      showInlineFilters: ge,
      showRowNumber: ot,
      showPagination: at,
      showTopTotal: lt,
      total: Re,
      totalColumnKey: it,
      trendUrl: Le
    } = Oe(n), Te = () => {
      const l = {};
      for (const i of Object.keys(u.value))
        i in se.value && (l[i] = {
          operator: Object.keys(se.value[i])[0],
          value: ""
        });
      return l;
    }, pe = N([]), Ae = N(void 0), O = N({}), E = N([]), D = N({}), W = N([]), ve = N({}), De = N(!1), ue = N(!1), qe = N([]), Be = N(!1), te = N(Te()), ye = N(!0), oe = N(), me = N(0), we = N(20), Je = N(0), K = N(), ce = N(), Bn = U(() => {
      const l = {};
      return ue.value && (l.inline_filters = {
        icon: "filter"
      }), l;
    }), zn = U(
      () => C != null && C.value ? Object.keys(C.value) : void 0
    ), Dt = U(
      () => W.value.reduce((l, i) => (l[i] = $s(u.value[i]), l), {})
    ), Bt = U(() => {
      if (A != null && A.value)
        return Object.entries(A.value).reduce((l, [i, { label: c }]) => (l[i] = c, l), {});
    }), zt = U(() => [...pe.value].sort((l, i) => {
      const c = (() => {
        const p = ct(
          oe.value[0].reduce((k, H) => k[H], l),
          u.value[oe.value[0][0]].type
        ), x = ct(
          oe.value[0].reduce((k, H) => k[H], i),
          u.value[oe.value[0][0]].type
        );
        return p > x ? 1 : p < x ? -1 : 0;
      })();
      return oe.value[1] ? -c : c;
    })), It = U(() => !(q != null && q.value) || Be.value ? zt.value : zt.value.slice(
      me.value * we.value,
      (me.value + 1) * we.value
    )), In = (l) => {
      E.value.includes(l) || E.value.push(l);
    }, We = (l, i) => !Z.value || !Z.value.includes(l) ? !1 : i.length > wt, jn = (l) => !!l.tooltipTitle && !!l.tooltipDescription, Ge = (l, i, c) => {
      var x;
      if (!c || !(C != null && C.value) || !(c in C.value) || C.value[c].format !== "difference")
        return;
      const p = ((x = ie == null ? void 0 : ie.value) == null ? void 0 : x.includes(i)) ?? !1;
      return l > 0 ? p ? "negative" : "positive" : l < 0 ? p ? "positive" : "negative" : "neutral";
    }, ke = (l, i, c) => {
      let p = ct(l, i);
      switch (i) {
        case "float":
          return be(parseFloat(p)).format("0,0.00");
        case "int":
          return be(parseInt(p)).format("0,0");
        case "money": {
          let x = "0,0";
          a.value > 0 && (x += "." + "0".repeat(a.value));
          const k = be(parseFloat(p)).format(x);
          return b.value ? d.value + " " + k : k + " " + d.value;
        }
        case "money_capped": {
          const x = parseFloat(p.toFixed(a.value)) == 0;
          if (p > 0 && p < 1 && x) {
            const k = a.value === 0 ? 1 : parseFloat("0." + "0".repeat(a.value - 1) + "1");
            return b.value ? `< ${d.value} ${k}` : `< ${k} ${d.value}`;
          } else
            return ke(l, "money", c);
        }
        case "percent": {
          let x = be(parseFloat(p)).format("0,0.00") + "%";
          return c === "difference" && p > 0 && (x = `+${x}`), x;
        }
        case "time":
          return `${ke(Math.floor(parseInt(p) / 60), "int")}mn${ke(
            parseInt(p) % 60,
            "int"
          )}s`;
        default:
          return p.toString();
      }
    }, Un = async (l, i) => {
      if (O.value[l] && O.value[l][i[M.value]])
        return O.value[l][i[M.value]];
      const { rows: c } = await r(A.value[l].request, {
        row: i,
        primaryColumn: (fe == null ? void 0 : fe.value) ?? M.value,
        primaryColumnValue: i[M.value]
      });
      return O.value[l] || (O.value[l] = {}), O.value[l][i[M.value]] = Object.values(c), O.value[l][i[M.value]];
    }, jt = (l, i) => {
      if (!l)
        return i.url;
      const c = new URL(l.url, location.origin);
      if (Array.isArray(l.columns))
        for (const p of l.columns)
          c.searchParams.set(p, i[p]);
      else
        for (const [p, x] of Object.entries(l.columns))
          c.searchParams.set(x, i[p]);
      return c;
    }, Vn = (l, i) => {
      const c = new URL(y.value[l].baseUrl, location.origin);
      if (Array.isArray(y.value[l].columns))
        for (const p of y.value[l].columns)
          c.searchParams.set(p, i[p]);
      else
        for (const [p, x] of Object.entries(y.value[l].columns))
          c.searchParams.set(x, i[p]);
      return c.toString();
    }, Mn = (l) => {
      if (l.totalUrl)
        return new URL(l.totalUrl).toString();
      const i = new URL(l.baseUrl);
      return i.searchParams.set("total", "true"), i.toString();
    }, $n = (l) => !Z.value || !Z.value.includes(l) ? -1 : qe.value.indexOf(l), Hn = (l) => {
      if (l in te.value)
        return te.value[l].operator;
    }, qn = (l) => {
      if (l in te.value)
        return te.value[l].value;
    }, ut = (l) => se.value[l], Jn = (l) => {
      const i = ut(l);
      if (!i)
        return;
      const c = ["normal", "small"];
      let p = 0;
      for (const x of Object.values(i)) {
        const k = c.indexOf(x.size ?? "normal");
        k > p && (p = k);
      }
      return {
        [`size-${c[p]}`]: !0
      };
    }, Wn = (l) => {
      const i = ut(l);
      return i ? Object.entries(i).reduce((c, [p, x]) => (c[p] = x.label, c), {}) : {};
    }, Gn = (l) => u.value[l].type === "string" ? "text" : "number", Ut = () => `Table_OrderBy_${location.pathname}`, Xn = () => `Table_PageSize_${location.pathname}`, ct = (l, i) => {
      switch (i) {
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
    }, _e = (l, i, c, p = !1) => {
      const [x, k] = (() => !c || !(C != null && C.value) || !(c in C.value) ? [u.value[i].type, void 0] : [
        C.value[c].type ?? u.value[i].type,
        C.value[c].format
      ])();
      let H = ke(l, x);
      return k === "difference" && (H = l > 0 ? `+${H}` : H), p ? Ht(H, i) : H;
    }, Yn = (l, i) => {
      if (!Le)
        return "";
      const c = new URL(
        i ? Le.value[i] : Le.value,
        location.origin
      );
      return c.searchParams.set((fe == null ? void 0 : fe.value) ?? M.value, l[M.value]), c.toString();
    }, Vt = (l, i, c) => We(l, i) ? [] : c ? (g == null ? void 0 : g.value) === l ? ["flex-grow-1", "text-left"] : Z.value && Z.value.includes(l) && It.value.some((p) => We(l, p[l])) ? ["flex-grow-1", "text-left"] : ["flex-grow-1"] : ["flew-grow-1"], Qn = (l) => l in se.value, Zn = () => {
      ge.value && (De.value = !1);
    }, Mt = (l, i) => {
      if (!(T != null && T.value) || !(i in T.value))
        return !1;
      const c = T.value[i];
      return c === null ? !!l.url : !("disable_for" in c && c.disable_for.includes(l[M.value]));
    }, Kn = (l, i) => {
      const [c] = W.value.splice(l, 1);
      W.value.splice(i, 0, c), t("move:column", { from: l, to: i });
    }, er = (l) => {
      const i = E.value.indexOf(l);
      i < 0 || E.value.splice(i, 1);
    }, $t = (l, i) => {
      D.value[l] = i;
    }, Ht = (l, i) => !Z.value || !Z.value.includes(i) || l.length <= wt ? l : `${l.substring(0, wt - 3)}...`, tr = (l) => {
      if (!ce.value)
        return;
      const i = {
        left: ce.value.$el.scrollLeft,
        top: ce.value.$el.scrollTop
      };
      delete ve.value[l[M.value]], Xt(() => {
        ce.value.$el.scrollTo(i);
      });
    }, nr = (l, i) => {
      const c = l.target.value;
      Jt(i, { value: c });
    }, rr = (l, i) => {
      l.key === "Enter" && l.target.blur();
    }, sr = async (l, i) => {
      if (!ce.value)
        return;
      const c = {
        left: ce.value.$el.scrollLeft,
        top: ce.value.$el.scrollTop
      };
      ye.value = !0, ve.value[i[M.value]] = await Un(l, i), Xt(() => {
        ce.value.$el.scrollTo(c), ye.value = !1;
      });
    }, or = async (l = !1) => {
      await lr(l) || await ar(l) || await ft(l);
    }, dt = async (l) => {
      await pt(l), me.value = l;
    }, qt = async (l) => {
      const i = Xn();
      if (l === void 0) {
        const c = localStorage.getItem(i);
        c && (we.value = parseInt(c));
      } else
        localStorage.setItem(i, l.toString()), await pt(0, l), me.value = 0, we.value = l;
    }, Jt = (l, { operator: i, value: c }) => {
      if (i || (i = Object.keys(ut(l))[0]), !i)
        return;
      const p = {
        ...te.value[l],
        operator: i
      };
      c !== void 0 && (p.value = c), te.value[l] = p, Be.value = !1, dt(0);
    }, ar = async (l) => {
      const i = (() => {
        for (const x in localStorage) {
          if (!x.startsWith("DataTables_"))
            continue;
          const k = x.substring(x.indexOf("/"));
          if (location.pathname !== k)
            return;
          const H = localStorage.getItem(x);
          return H ? JSON.parse(H) : void 0;
        }
      })();
      if (!i || !i.order || !i.order[0] || typeof i.order[0][0] == "number")
        return !1;
      const c = i.order[0][0].lastIndexOf("-"), p = c === -1 ? [
        [i.order[0][0]],
        i.order[0][1] === "desc"
      ] : [
        [
          i.order[0][0].substring(0, c),
          i.order[0][0].substring(c + 1)
        ],
        i.order[0][1] === "desc"
      ];
      return await Ne(p, !1, l), !0;
    }, ft = async (l) => {
      if (h != null && h.value) {
        await Ne(h.value, !1, l);
        return;
      }
      const [i, { colspan: c }] = Object.entries(u.value).find(
        ([p, { visible: x }]) => x
      );
      if (c === -1) {
        await Ne([[i], !1], !1, l);
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
        l
      );
    }, lr = async (l) => {
      const i = localStorage.getItem(Ut());
      if (i) {
        const c = JSON.parse(i)[0][0];
        if (u.value[c])
          return await Ne(JSON.parse(i), !1, l), !0;
      } else
        return !1;
    }, ir = async (l, i, c) => {
      if (!(q != null && q.value))
        return !1;
      if (Be.value)
        return !0;
      const [p, x] = await (async () => {
        const k = [
          s(q.value, {
            inlineFilters: te.value,
            pageNumber: l,
            pageSize: i,
            orderBy: c[0],
            reversed: c[1]
          })
        ];
        v != null && v.value && k.push(
          s(v.value, {
            inlineFilters: te.value,
            pageNumber: l,
            pageSize: i,
            orderBy: c[0],
            reversed: c[1]
          })
        );
        const H = await Promise.all(k);
        if (H.length > 1 && H.some((ne) => ne.paginated === !0))
          throw new Error("Paginated fetching is not supported for separate comparison requests.");
        return H;
      })();
      return x ? (Ae.value = [p, x], Wt()) : pe.value = Object.values(p.rows), Be.value = p.paginated !== !0, Je.value = p.rowCount, p.detailedRows ? ve.value = p.detailedRows : ve.value = {}, p.total && !x && (K.value = p.total), !0;
    }, Wt = () => {
      if (!Ae.value)
        return;
      const [l, i] = Ae.value;
      pe.value = Object.values(
        Hs(l.rows, i.rows, u.value, M.value)
      ), l.total && (K.value = Dn(l.total, i.total, u.value));
    }, ur = () => {
      if (!(xe != null && xe.value))
        return !1;
      let l = Object.values(xe.value);
      for (const [i, c] of Object.entries(te.value))
        c.value && (l = l.filter(
          (p) => se.value[i][c.operator].callback(
            p[i],
            c.value
          )
        ));
      return pe.value = l, Je.value = l.length, !0;
    }, pt = async (l, i, c) => {
      l === void 0 && (l = me.value), i === void 0 && (i = we.value), c === void 0 && (c = oe.value), ye.value = !0, ur() || await ir(me.value, we.value, oe.value), ye.value = !1;
    }, cr = () => {
      ge.value && (De.value = !0);
    }, dr = (l) => {
      if (!Z.value || !Z.value.includes(l))
        return;
      const i = $n(l);
      i >= 0 ? qe.value.splice(i, 1) : qe.value.push(l);
    }, fr = () => {
      ue.value = !ue.value, ue.value && (te.value = Te());
    }, Ne = async (l, i = !0, c = !0) => {
      me.value = 0, oe.value = l, c && await pt(void 0, void 0, l), i && localStorage.setItem(Ut(), JSON.stringify(l)), t("update:orderBy", l);
    };
    return vr(() => {
      W.value = Object.keys(u.value), K.value = Re == null ? void 0 : Re.value, Promise.all([ft(!1), qt()]).then(() => or(!0));
    }), Ie(u, () => {
      W.value = Object.keys(u.value), te.value = Te(), Ae && Wt();
    }), Ie(ye, () => {
      t("update:loading", ye.value);
    }), h && Ie(h, (l, i) => {
      (l == null ? void 0 : l[0][0]) !== (i == null ? void 0 : i[0][0]) && ft(!0);
    }), q && Ie(
      q,
      () => {
        Be.value = !1, dt(0);
      },
      { deep: !0 }
    ), (l, i) => (S(), z("div", vo, [
      w(at) ? (S(), z("div", mo, [
        R(io, {
          "onUpdate:pageNumber": i[0] || (i[0] = (c) => dt(c)),
          "onUpdate:currentPageSize": i[1] || (i[1] = (c) => qt(c)),
          currentPageSize: we.value,
          pageNumber: me.value,
          pageSizeLabel: l.pageSizeLabel,
          rowCount: Je.value
        }, null, 8, ["currentPageSize", "pageNumber", "pageSizeLabel", "rowCount"])
      ])) : $("", !0),
      J("div", {
        class: "table-container",
        onMouseover: i[7] || (i[7] = () => cr()),
        onMouseout: i[8] || (i[8] = () => Zn())
      }, [
        J("div", {
          class: G(["action-buttons", { active: De.value }])
        }, [
          w(ge) ? (S(), B(_t, {
            key: 0,
            onClick: i[2] || (i[2] = () => fr()),
            icon: ue.value ? "trash" : "filter-alt",
            mood: "positive"
          }, null, 8, ["icon"])) : $("", !0)
        ], 2),
        oe.value ? (S(), B(Or, {
          key: 0,
          ref_key: "table",
          ref: ce,
          onAddColoredMetric: i[3] || (i[3] = (c) => In(c)),
          "onMove:column": i[4] || (i[4] = ({ from: c, to: p }) => Kn(c, p)),
          onRemoveColoredMetric: i[5] || (i[5] = (c) => er(c)),
          "onUpdate:orderBy": i[6] || (i[6] = (c) => Ne(c)),
          additionalHeaders: Bn.value,
          cellClasses: w(o),
          colorMetrics: w(m),
          coloredMetrics: E.value,
          columns: Dt.value,
          comparisonColumnKeys: zn.value,
          detailsRows: ve.value,
          dragColumns: w(I),
          fixedColumnNumber: w(re),
          inversedKpis: w(ie),
          orderBy: oe.value,
          primaryColumn: w(M),
          rows: It.value,
          showRowNumber: w(ot),
          showTotal: !!K.value,
          showTopTotal: w(lt)
        }, mr({
          colorizeLabel: _(({ enabled: c }) => [
            R(j, {
              mood: "white",
              size: "small"
            }, {
              default: _(() => [
                c ? (S(), z(X, { key: 0 }, [
                  F(P(l.uncolorizeLabel), 1)
                ], 64)) : (S(), z(X, { key: 1 }, [
                  F(P(l.colorizeLabel), 1)
                ], 64))
              ]),
              _: 2
            }, 1024)
          ]),
          columnRowNumber: _(() => [
            R(j, {
              class: "column-label",
              contrast: "",
              size: "small"
            }, {
              default: _(() => [
                F("#")
              ]),
              _: 1
            })
          ]),
          rowNumber: _(({ value: c }) => [
            R(j, {
              contrast: "",
              size: "small"
            }, {
              default: _(() => [
                F(P(c), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          totalRowNumber: _(() => [
            R(j, {
              class: "total-label",
              contrast: "",
              size: "small"
            }, {
              default: _(() => [
                F("#")
              ]),
              _: 1
            })
          ]),
          column: _(({ columnKey: c, isGhost: p }) => [
            J("div", {
              class: "d-flex align-items-center",
              onMouseover: () => $t(c, !0),
              onMouseout: () => $t(c, !1)
            }, [
              R(j, {
                class: "column-label",
                contrast: "",
                size: "small"
              }, {
                default: _(() => [
                  F(P(w(u)[c].label), 1)
                ]),
                _: 2
              }, 1024),
              !p && jn(w(u)[c]) ? (S(), B(no, {
                key: 0,
                description: w(u)[c].tooltipDescription,
                title: w(u)[c].tooltipTitle,
                visible: D.value[c]
              }, null, 8, ["description", "title", "visible"])) : $("", !0)
            ], 40, ho)
          ]),
          additionalHeader: _(({ additionalHeader: c, columnKey: p }) => [
            c === "inline_filters" && Qn(p) ? (S(), B(Y, {
              key: 0,
              class: G(["inline-filter", Jn(p)])
            }, {
              default: _(() => [
                R(fn, {
                  class: "inline-filter-dropdown",
                  "onUpdate:modelValue": (x) => Jt(p, { operator: x.toString() }),
                  items: Wn(p),
                  modelValue: Hn(p),
                  size: "small"
                }, null, 8, ["onUpdate:modelValue", "items", "modelValue"]),
                R(pn, {
                  class: "flex-grow-1 inline-filter-input no-spacing",
                  onBlur: (x) => nr(x, p),
                  onKeyup: (x) => rr(x),
                  modelValue: qn(p),
                  type: Gn(p),
                  size: "small"
                }, null, 8, ["onBlur", "onKeyup", "modelValue", "type"])
              ]),
              _: 2
            }, 1032, ["class"])) : $("", !0)
          ]),
          total: _(({ columnKey: c, subcolumnKey: p, values: x }) => [
            Gt(l.$slots, w(Re), {
              columnKey: c,
              subcolumnKey: p,
              values: x
            }, () => [
              l.totalTitle && c === w(it) ? (S(), B(j, {
                key: 0,
                class: "total-label",
                contrast: "",
                size: "small"
              }, {
                default: _(() => [
                  F(P(l.totalTitle(Je.value ?? pe.value.length)), 1)
                ]),
                _: 1
              })) : K.value ? (S(), z(X, { key: 1 }, [
                K.value && K.value[c] >= 0.01 && c in w(y) ? (S(), B(un, {
                  key: 0,
                  format: w(y)[c].format,
                  label: Ht(ke(K.value[c], w(u)[c].type, w(C) && p ? w(C)[p].format : void 0), c),
                  title: w(y)[c].title,
                  url: Mn(w(y)[c])
                }, null, 8, ["format", "label", "title", "url"])) : p ? (S(), B(j, {
                  key: 1,
                  class: "total-label",
                  mood: Ge(K.value[c][p], c, p),
                  contrast: "",
                  size: "small"
                }, {
                  default: _(() => [
                    F(P(_e(K.value[c][p], c, p)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"])) : (S(), B(j, {
                  key: 2,
                  class: "total-label",
                  mood: Ge(K.value[c], c, p),
                  contrast: "",
                  size: "small"
                }, {
                  default: _(() => [
                    F(P(_e(K.value[c], c)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"]))
              ], 64)) : $("", !0)
            ], !0)
          ]),
          _: 2
        }, [
          w(C) ? {
            name: "secondaryColumn",
            fn: _(({ subcolumnKey: c }) => [
              c ? (S(), B(j, {
                key: 0,
                class: "column-label",
                contrast: "",
                size: "small"
              }, {
                default: _(() => [
                  F(P(w(C)[c].label), 1)
                ]),
                _: 2
              }, 1024)) : $("", !0)
            ]),
            key: "0"
          } : void 0,
          Se(Object.keys(Dt.value), (c) => ({
            name: `row-${c}`,
            fn: _(({ columnKey: p, index: x, row: k, spanIndex: H, subcolumnKey: ne, subindex: vt, value: Q }) => [
              Gt(l.$slots, "row-" + p, hr(br({
                columnKey: p,
                index: x,
                row: k,
                spanIndex: H,
                subcolumnKey: ne,
                subindex: vt,
                value: Q
              })), () => [
                vt === void 0 && p === "trend" ? (S(), B(po, {
                  key: 0,
                  class: G(Vt(p, Q, k.rowInfo.detailable)),
                  formatter: (mt) => ke(mt, "int"),
                  title: l.trendChartTitle,
                  url: Yn(k, ne)
                }, null, 8, ["class", "formatter", "title", "url"])) : k.rowInfo.detailable && p === w(g) ? (S(), z(X, { key: 1 }, [
                  Mt(k, p) && k.rowInfo.detailable ? (S(), B(Yt, {
                    key: 0,
                    to: jt(w(T)[p], k).toString(),
                    "is-external": !!k.url,
                    contrast: "",
                    size: "small"
                  }, {
                    default: _(() => [
                      F(P(_e(Q, p, ne, !0)), 1)
                    ]),
                    _: 2
                  }, 1032, ["to", "is-external"])) : (S(), B(j, {
                    key: 1,
                    mood: Ge(Q, p, ne),
                    contrast: "",
                    size: "small"
                  }, {
                    default: _(() => [
                      F(P(_e(Q, p, ne)), 1)
                    ]),
                    _: 2
                  }, 1032, ["mood"]))
                ], 64)) : Mt(k, p) && k.rowInfo.detailable ? (S(), B(Yt, {
                  key: 2,
                  to: jt(w(T)[p], k).toString(),
                  "is-external": !!k.url,
                  contrast: "",
                  size: "small"
                }, {
                  default: _(() => [
                    F(P(_e(Q, p, ne, !0)), 1)
                  ]),
                  _: 2
                }, 1032, ["to", "is-external"])) : vt === void 0 && Q >= 0.01 && p in w(y) ? (S(), B(un, {
                  key: 3,
                  format: w(y)[p].format,
                  label: _e(Q, p, ne, !0),
                  title: w(y)[p].title,
                  url: Vn(p, k)
                }, null, 8, ["format", "label", "title", "url"])) : (S(), B(j, {
                  key: 4,
                  class: G(Vt(p, Q, k.rowInfo.detailable)),
                  mood: Ge(Q, p, ne),
                  contrast: "",
                  size: "small"
                }, {
                  default: _(() => [
                    F(P(_e(Q, p, ne, !0)), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "mood"])),
                We(p, Q) ? (S(), z("i", {
                  key: 5,
                  class: G(["flex-grow-1 expand-column fa", qe.value.includes(p) ? "fa-compress-alt" : "fa-expand-alt"]),
                  onClick: () => dr(p)
                }, null, 10, bo)) : $("", !0)
              ], !0),
              Bt.value && k.rowInfo.detailable && p === w(g) ? (S(), z(X, { key: 0 }, [
                We(p, Q) ? $("", !0) : (S(), B(Cr, { key: 0 })),
                R(so, {
                  onHideDetails: () => tr(k),
                  onShowDetails: (mt) => sr(mt, k),
                  labels: Bt.value,
                  open: ve.value[k[w(M)]] !== void 0,
                  title: l.detailsSelectorTitle
                }, null, 8, ["onHideDetails", "onShowDetails", "labels", "open", "title"])
              ], 64)) : $("", !0)
            ])
          }))
        ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "dragColumns", "fixedColumnNumber", "inversedKpis", "orderBy", "primaryColumn", "rows", "showRowNumber", "showTotal", "showTopTotal"])) : $("", !0)
      ], 32),
      J("div", {
        class: G(["loading-overlay", { visible: ye.value }])
      }, [
        R(Rt)
      ], 2)
    ]));
  }
});
const $o = /* @__PURE__ */ Ee(go, [["__scopeId", "data-v-f5c9ceeb"]]), yo = { class: "scrollable flex-max no-spacing" }, wo = ["onClick"], _o = { class: "scrollable flex-max no-spacing" }, So = ["onClick"], Co = { class: "scrollable" }, Oo = { class: "items flex-max no-spacing" }, Eo = /* @__PURE__ */ Ce({
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
    const n = e, { columns: r, defaultValue: s, groupNames: o, modelValue: a, showModalLabel: d } = Oe(n), b = N(Object.keys(o.value)[0]), m = N([...a.value]), u = N([]), y = N([]), T = N(""), C = N(void 0), v = N(void 0), h = N(void 0), g = N(void 0), A = N(void 0), I = U(() => Object.fromEntries(
      Object.entries(r.value).filter(
        ([O, E]) => E.fixed !== !0 && (T.value.trim() === "" || E.label.toLowerCase().includes(T.value.trim().toLowerCase()))
      )
    )), re = U(() => Object.keys(o.value).reduce((O, E) => (O[E] = Object.fromEntries(
      Object.entries(I.value).filter(([D, W]) => W.group === E)
    ), O), {})), se = U(
      () => b.value === void 0 ? void 0 : re.value[b.value]
    ), ie = U(() => Object.fromEntries(
      Object.entries(o.value).filter(
        ([O, E]) => Object.values(I.value).some((D) => D.group === O)
      )
    )), M = U(() => {
      if (!(h.value === void 0 || g.value === void 0 || A.value === void 0))
        return h.value + A.value - g.value;
    }), fe = U(() => {
      if (M.value !== void 0)
        return `${M.value}px`;
    }), q = U(() => {
      if (v.value === void 0 || M.value === void 0)
        return;
      const O = m.value.indexOf(v.value), E = O - 1 - m.value.slice(0, O).reverse().findIndex((ue) => r.value[ue].fixed === !0);
      let D = m.value.slice(O + 1).findIndex((ue) => r.value[ue].fixed === !0);
      D >= 0 ? D += O + 1 : D = m.value.length;
      const W = xe(m.value[E]), ve = W.offsetHeight, De = Math.min(
        Math.round((M.value - W.offsetTop) / ve - 1),
        D - E - 1
      );
      return E + De + 1;
    }), xe = (O) => y.value[m.value.indexOf(O)], Z = (O) => u.value[m.value.indexOf(O)], ge = (O = !1, E) => {
      E && E.target !== E.currentTarget || (O && (m.value = [...a.value]), C.value = !1, b.value = Object.keys(o.value)[0]);
    }, ot = (O) => {
      const E = m.value.indexOf(O);
      E >= 0 && m.value.splice(E, 1);
    }, at = () => {
      m.value = [...s.value];
    }, lt = (O) => {
      const E = [...O];
      t("update:modelValue", E), ge(!1);
    }, Re = (O) => {
      b.value = O.toString();
    }, it = () => {
      C.value = !0;
    }, Le = (O) => {
      const E = m.value.indexOf(O);
      E >= 0 ? m.value.splice(E, 1) : m.value.push(O);
    }, Te = (O) => {
      A.value = O.clientY;
    }, pe = () => {
      const O = q.value;
      if (v.value !== void 0 && O !== void 0) {
        const E = m.value.indexOf(v.value);
        m.value.splice(E, 1), m.value.splice(O, 0, v.value);
      }
      v.value = void 0, h.value = void 0, g.value = void 0, A.value = void 0, window.removeEventListener("mousemove", Te), window.removeEventListener("mouseup", pe);
    }, Ae = (O, E) => {
      v.value = E, h.value = Z(E).$el.offsetTop, g.value = O.clientY, A.value = O.clientY, window.addEventListener("mousemove", Te), window.addEventListener("mouseup", pe);
    };
    return Ie(T, (O) => {
      O ? (!b.value || !(b.value in ie.value)) && (b.value = Object.keys(ie.value)[0]) : b.value || (b.value = Object.keys(ie.value)[0]);
    }), (O, E) => (S(), z(X, null, [
      R(_t, {
        onClick: E[0] || (E[0] = () => it()),
        disabled: O.disabled,
        label: w(d),
        mood: "neutral",
        tabindex: "-1"
      }, null, 8, ["disabled", "label"]),
      (S(), B(gr, { to: "#app > .app-container" }, [
        R(Y, {
          class: G(["kpi-selector-container no-spacing", { visible: C.value, hidden: C.value === !1 }]),
          onClick: E[5] || (E[5] = Ve((D) => ge(!0, D), ["stop"])),
          column: "",
          horizontal: "center",
          vertical: "center"
        }, {
          default: _(() => [
            R(wr, { class: "kpi-selector" }, {
              default: _(() => [
                R(Y, {
                  class: "title",
                  vertical: "center"
                }, {
                  default: _(() => [
                    R(Ue, {
                      class: "flex-max",
                      size: "large-2"
                    }, {
                      default: _(() => [
                        F(P(O.title), 1)
                      ]),
                      _: 1
                    }),
                    R(Y, {
                      class: "flex-max no-spacing search-container",
                      vertical: "center"
                    }, {
                      default: _(() => [
                        R(pn, {
                          class: "flex-max search",
                          modelValue: T.value,
                          "onUpdate:modelValue": E[1] || (E[1] = (D) => T.value = D),
                          placeholder: O.filterLabel
                        }, null, 8, ["modelValue", "placeholder"]),
                        R(je, {
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
                      default: _(() => [
                        R(je, {
                          class: "close",
                          onClick: E[2] || (E[2] = () => ge(!0)),
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
                  default: _(() => [
                    b.value !== void 0 && se.value !== void 0 ? (S(), z(X, { key: 0 }, [
                      R(Y, {
                        class: "groups flex-max",
                        column: ""
                      }, {
                        default: _(() => [
                          R(Ue, { size: "large-2" }, {
                            default: _(() => [
                              F(P(O.groupsTitle), 1)
                            ]),
                            _: 1
                          }),
                          J("div", yo, [
                            (S(!0), z(X, null, Se(Object.entries(ie.value), ([D, W]) => (S(), z("div", {
                              class: G(["item no-spacing", { selected: b.value === D }]),
                              onClick: () => Re(D)
                            }, [
                              R(j, { size: "small" }, {
                                default: _(() => [
                                  F(P(W), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, wo))), 256))
                          ])
                        ]),
                        _: 1
                      }),
                      R(Y, {
                        class: "group-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: _(() => [
                          R(Ue, { size: "large-2" }, {
                            default: _(() => [
                              F(P(w(o)[b.value]), 1)
                            ]),
                            _: 1
                          }),
                          J("div", _o, [
                            (S(!0), z(X, null, Se(Object.entries(se.value), ([D, W]) => (S(), z("div", {
                              class: G(["item no-spacing", { selected: m.value.includes(D) }]),
                              onClick: () => Le(D),
                              key: D
                            }, [
                              R(j, { size: "small" }, {
                                default: _(() => [
                                  F(P(W.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, So))), 128))
                          ])
                        ]),
                        _: 1
                      }),
                      R(Y, {
                        class: "enabled-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: _(() => [
                          R(Y, {
                            class: "header",
                            vertical: "center"
                          }, {
                            default: _(() => [
                              R(Ue, {
                                class: "flex-max",
                                size: "large-2"
                              }, {
                                default: _(() => [
                                  F(P(O.orderTitle), 1)
                                ]),
                                _: 1
                              }),
                              R(j, {
                                class: "reset",
                                onClick: E[3] || (E[3] = () => at()),
                                mood: "important-alt",
                                size: "small"
                              }, {
                                default: _(() => [
                                  F(P(O.resetLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          J("div", Co, [
                            J("div", Oo, [
                              (S(!0), z(X, null, Se(m.value, (D) => (S(), z("div", {
                                class: "item-container no-spacing",
                                ref_for: !0,
                                ref_key: "enabledColumnContainers",
                                ref: y
                              }, [
                                J("div", {
                                  class: G(["separator-top no-spacing", { "place-after": q.value !== void 0 && v.value !== void 0 && D === m.value[q.value] && q.value < m.value.indexOf(v.value) }])
                                }, null, 2),
                                R(Y, {
                                  class: G(["item no-spacing", { dragged: D === v.value }]),
                                  ref_for: !0,
                                  ref_key: "enabledColumnElements",
                                  ref: u,
                                  style: yr(D === v.value ? { top: fe.value } : void 0),
                                  vertical: "center"
                                }, {
                                  default: _(() => [
                                    w(r)[D].fixed ? (S(), B(j, {
                                      key: 0,
                                      class: G(["flex-max", { fixed: w(r)[D].fixed }]),
                                      size: "small"
                                    }, {
                                      default: _(() => [
                                        F(P(w(r)[D].label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])) : (S(), z(X, { key: 1 }, [
                                      R(je, {
                                        class: "move",
                                        onMousedown: (W) => Ae(W, D),
                                        value: "dots-vertical-rounded"
                                      }, null, 8, ["onMousedown"]),
                                      R(j, {
                                        class: "flex-max no-spacing",
                                        size: "small"
                                      }, {
                                        default: _(() => [
                                          F(P(w(r)[D].label), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      R(je, {
                                        class: "no-spacing remove",
                                        onClick: () => ot(D),
                                        value: "trash"
                                      }, null, 8, ["onClick"])
                                    ], 64))
                                  ]),
                                  _: 2
                                }, 1032, ["class", "style"]),
                                J("div", {
                                  class: G(["separator-bottom no-spacing", { "place-after": q.value !== void 0 && v.value !== void 0 && D === m.value[q.value] && q.value >= m.value.indexOf(v.value) }])
                                }, null, 2)
                              ], 512))), 256))
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ], 64)) : (S(), B(Y, {
                      key: 1,
                      class: "flex-max",
                      horizontal: "center",
                      vertical: "center"
                    }, {
                      default: _(() => [
                        R(j, { size: "small" }, {
                          default: _(() => [
                            F(P(O.noColumnsFoundLabel), 1)
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
                  default: _(() => [
                    R(_t, {
                      onClick: E[4] || (E[4] = () => lt(m.value)),
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
const Ho = /* @__PURE__ */ Ee(Eo, [["__scopeId", "data-v-7dc2b42e"]]);
export {
  $o as CommonTable,
  Ho as KpiSelector
};
