import { defineComponent as ge, toRefs as Ce, ref as k, openBlock as w, createElementBlock as j, createVNode as R, unref as g, normalizeClass as X, createElementVNode as G, toDisplayString as L, withCtx as _, Fragment as H, renderList as be, createBlock as F, withDirectives as ir, createTextVNode as P, createCommentVNode as $, withModifiers as cn, computed as I, normalizeStyle as Xe, onMounted as ur, watch as Ve, createSlots as cr, renderSlot as mt, normalizeProps as dr, guardReactiveProps as fr, nextTick as Xt, Teleport as pr } from "vue";
import { _ as xt, E as vr } from "./Tooltip.vue_vue_type_style_index_0_lang-f467a343.js";
import { I as Pe, A as K, C as mr } from "./Icon-53e685d0.js";
import { _ as Oe } from "./_plugin-vue_export-helper-dad06003.js";
import fe from "numeral";
import { cloneObject as hr } from "./utils/clone.js";
import { D as br, B as _t, I as gr } from "./Input-301d9b5d.js";
import { L as Tt, a as yr } from "./LineBarChart-08a988f6.js";
import { I as z } from "./Info-38a17291.js";
import "./base-d7e543b4.js";
import "./popper-6624aaae.js";
import { C as wr, b as _r, S as Sr, O as Cr } from "./Option-ded28426.js";
import { L as Yt } from "./Link-882cf82b.js";
import { Separator as Or } from "./marker.js";
import { T as Er } from "./Table-43dc684b.js";
import { H as Me } from "./Header-37ffd1ab.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "./tag-b8863cf8.js";
import "./index-98677358.js";
import "./index-30067d50.js";
import "./Scrollable-055852b4.js";
import "./datetime-31a2b505.js";
const Rr = { class: "column-hint" }, xr = /* @__PURE__ */ ge({
  __name: "ColumnHint",
  props: {
    description: {},
    title: {},
    visible: { type: Boolean, default: void 0 },
    iconValue: { default: "circle-question" },
    iconBackend: { default: "solid" },
    iconElevation: { default: "normal" }
  },
  setup(e) {
    const t = e, { description: n, title: r, visible: s, iconValue: a, iconBackend: o } = Ce(t), u = k();
    return (b, m) => (w(), j("div", Rr, [
      R(Pe, {
        value: g(a),
        backend: g(o),
        elevation: b.iconElevation,
        ref_key: "iconRef",
        ref: u,
        size: "small"
      }, null, 8, ["value", "backend", "elevation"]),
      R(xt, {
        title: g(r),
        content: g(n),
        "show-arrow": !1,
        persistent: !1,
        offset: 0,
        "virtual-ref": u.value,
        trigger: "hover",
        visible: g(s),
        "virtual-triggering": "",
        width: "15rem"
      }, null, 8, ["title", "content", "virtual-ref", "visible"])
    ]));
  }
});
const Tr = /* @__PURE__ */ Oe(xr, [["__scopeId", "data-v-36cbb3a6"]]);
function dn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: kr } = Object.prototype, { getPrototypeOf: kt } = Object, tt = ((e) => (t) => {
  const n = kr.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), oe = (e) => (e = e.toLowerCase(), (t) => tt(t) === e), nt = (e) => (t) => typeof t === e, { isArray: Le } = Array, $e = nt("undefined");
function Ar(e) {
  return e !== null && !$e(e) && e.constructor !== null && !$e(e.constructor) && te(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const fn = oe("ArrayBuffer");
function Nr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && fn(e.buffer), t;
}
const Pr = nt("string"), te = nt("function"), pn = nt("number"), rt = (e) => e !== null && typeof e == "object", Fr = (e) => e === !0 || e === !1, Ye = (e) => {
  if (tt(e) !== "object")
    return !1;
  const t = kt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Lr = oe("Date"), Dr = oe("File"), Br = oe("Blob"), jr = oe("FileList"), zr = (e) => rt(e) && te(e.pipe), Ir = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || te(e.append) && ((t = tt(e)) === "formdata" || // detect form-data instance
  t === "object" && te(e.toString) && e.toString() === "[object FormData]"));
}, Ur = oe("URLSearchParams"), Vr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function He(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), Le(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = a.length;
    let u;
    for (r = 0; r < o; r++)
      u = a[r], t.call(null, e[u], u, e);
  }
}
function vn(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const mn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), hn = (e) => !$e(e) && e !== mn;
function St() {
  const { caseless: e } = hn(this) && this || {}, t = {}, n = (r, s) => {
    const a = e && vn(t, s) || s;
    Ye(t[a]) && Ye(r) ? t[a] = St(t[a], r) : Ye(r) ? t[a] = St({}, r) : Le(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && He(arguments[r], n);
  return t;
}
const Mr = (e, t, n, { allOwnKeys: r } = {}) => (He(t, (s, a) => {
  n && te(s) ? e[a] = dn(s, n) : e[a] = s;
}, { allOwnKeys: r }), e), $r = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Hr = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, qr = (e, t, n, r) => {
  let s, a, o;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      o = s[a], (!r || r(o, e, t)) && !u[o] && (t[o] = e[o], u[o] = !0);
    e = n !== !1 && kt(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Jr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Wr = (e) => {
  if (!e)
    return null;
  if (Le(e))
    return e;
  let t = e.length;
  if (!pn(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Gr = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && kt(Uint8Array)), Xr = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const a = s.value;
    t.call(e, a[0], a[1]);
  }
}, Yr = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Qr = oe("HTMLFormElement"), Zr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Qt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Kr = oe("RegExp"), bn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  He(n, (s, a) => {
    let o;
    (o = t(s, a, e)) !== !1 && (r[a] = o || s);
  }), Object.defineProperties(e, r);
}, es = (e) => {
  bn(e, (t, n) => {
    if (te(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (te(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ts = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((a) => {
      n[a] = !0;
    });
  };
  return Le(e) ? r(e) : r(String(e).split(t)), n;
}, ns = () => {
}, rs = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ht = "abcdefghijklmnopqrstuvwxyz", Zt = "0123456789", gn = {
  DIGIT: Zt,
  ALPHA: ht,
  ALPHA_DIGIT: ht + ht.toUpperCase() + Zt
}, ss = (e = 16, t = gn.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function as(e) {
  return !!(e && te(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const os = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (rt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const a = Le(r) ? [] : {};
        return He(r, (o, u) => {
          const b = n(o, s + 1);
          !$e(b) && (a[u] = b);
        }), t[s] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, ls = oe("AsyncFunction"), is = (e) => e && (rt(e) || te(e)) && te(e.then) && te(e.catch), f = {
  isArray: Le,
  isArrayBuffer: fn,
  isBuffer: Ar,
  isFormData: Ir,
  isArrayBufferView: Nr,
  isString: Pr,
  isNumber: pn,
  isBoolean: Fr,
  isObject: rt,
  isPlainObject: Ye,
  isUndefined: $e,
  isDate: Lr,
  isFile: Dr,
  isBlob: Br,
  isRegExp: Kr,
  isFunction: te,
  isStream: zr,
  isURLSearchParams: Ur,
  isTypedArray: Gr,
  isFileList: jr,
  forEach: He,
  merge: St,
  extend: Mr,
  trim: Vr,
  stripBOM: $r,
  inherits: Hr,
  toFlatObject: qr,
  kindOf: tt,
  kindOfTest: oe,
  endsWith: Jr,
  toArray: Wr,
  forEachEntry: Xr,
  matchAll: Yr,
  isHTMLForm: Qr,
  hasOwnProperty: Qt,
  hasOwnProp: Qt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: bn,
  freezeMethods: es,
  toObjectSet: ts,
  toCamelCase: Zr,
  noop: ns,
  toFiniteNumber: rs,
  findKey: vn,
  global: mn,
  isContextDefined: hn,
  ALPHABET: gn,
  generateString: ss,
  isSpecCompliantForm: as,
  toJSONObject: os,
  isAsyncFn: ls,
  isThenable: is
};
function D(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
f.inherits(D, Error, {
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
const yn = D.prototype, wn = {};
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
Object.defineProperties(D, wn);
Object.defineProperty(yn, "isAxiosError", { value: !0 });
D.from = (e, t, n, r, s, a) => {
  const o = Object.create(yn);
  return f.toFlatObject(e, o, function(b) {
    return b !== Error.prototype;
  }, (u) => u !== "isAxiosError"), D.call(o, e.message, t, n, r, s), o.cause = e, o.name = e.name, a && Object.assign(o, a), o;
};
const us = null;
function Ct(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function _n(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Kt(e, t, n) {
  return e ? e.concat(t).map(function(s, a) {
    return s = _n(s), !n && a ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function cs(e) {
  return f.isArray(e) && !e.some(Ct);
}
const ds = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function st(e, t, n) {
  if (!f.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = f.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(h, S) {
    return !f.isUndefined(S[h]);
  });
  const r = n.metaTokens, s = n.visitor || c, a = n.dots, o = n.indexes, b = (n.Blob || typeof Blob < "u" && Blob) && f.isSpecCompliantForm(t);
  if (!f.isFunction(s))
    throw new TypeError("visitor must be a function");
  function m(v) {
    if (v === null)
      return "";
    if (f.isDate(v))
      return v.toISOString();
    if (!b && f.isBlob(v))
      throw new D("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(v) || f.isTypedArray(v) ? b && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function c(v, h, S) {
    let x = v;
    if (v && !S && typeof v == "object") {
      if (f.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), v = JSON.stringify(v);
      else if (f.isArray(v) && cs(v) || (f.isFileList(v) || f.endsWith(h, "[]")) && (x = f.toArray(v)))
        return h = _n(h), x.forEach(function(re, se) {
          !(f.isUndefined(re) || re === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Kt([h], se, a) : o === null ? h : h + "[]",
            m(re)
          );
        }), !1;
    }
    return Ct(v) ? !0 : (t.append(Kt(S, h, a), m(v)), !1);
  }
  const y = [], A = Object.assign(ds, {
    defaultVisitor: c,
    convertValue: m,
    isVisitable: Ct
  });
  function O(v, h) {
    if (!f.isUndefined(v)) {
      if (y.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      y.push(v), f.forEach(v, function(x, q) {
        (!(f.isUndefined(x) || x === null) && s.call(
          t,
          x,
          f.isString(q) ? q.trim() : q,
          h,
          A
        )) === !0 && O(x, h ? h.concat(q) : [q]);
      }), y.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return O(e), t;
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
function At(e, t) {
  this._pairs = [], e && st(e, this, t);
}
const Sn = At.prototype;
Sn.append = function(t, n) {
  this._pairs.push([t, n]);
};
Sn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, en);
  } : en;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function fs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Cn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || fs, s = n && n.serialize;
  let a;
  if (s ? a = s(t, n) : a = f.isURLSearchParams(t) ? t.toString() : new At(t, n).toString(r), a) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class ps {
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
const tn = ps, On = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, vs = typeof URLSearchParams < "u" ? URLSearchParams : At, ms = typeof FormData < "u" ? FormData : null, hs = typeof Blob < "u" ? Blob : null, bs = {
  isBrowser: !0,
  classes: {
    URLSearchParams: vs,
    FormData: ms,
    Blob: hs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, En = typeof window < "u" && typeof document < "u", gs = ((e) => En && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), ys = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: En,
  hasStandardBrowserEnv: gs,
  hasStandardBrowserWebWorkerEnv: ys
}, Symbol.toStringTag, { value: "Module" })), ae = {
  ...ws,
  ...bs
};
function _s(e, t) {
  return st(e, new ae.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, a) {
      return ae.isNode && f.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ss(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Cs(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let a;
  for (r = 0; r < s; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function Rn(e) {
  function t(n, r, s, a) {
    let o = n[a++];
    const u = Number.isFinite(+o), b = a >= n.length;
    return o = !o && f.isArray(s) ? s.length : o, b ? (f.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !u) : ((!s[o] || !f.isObject(s[o])) && (s[o] = []), t(n, r, s[o], a) && f.isArray(s[o]) && (s[o] = Cs(s[o])), !u);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const n = {};
    return f.forEachEntry(e, (r, s) => {
      t(Ss(r), s, n, 0);
    }), n;
  }
  return null;
}
function Os(e, t, n) {
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
  transitional: On,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, a = f.isObject(t);
    if (a && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
      return s && s ? JSON.stringify(Rn(t)) : t;
    if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t))
      return t;
    if (f.isArrayBufferView(t))
      return t.buffer;
    if (f.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return _s(t, this.formSerializer).toString();
      if ((u = f.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const b = this.env && this.env.FormData;
        return st(
          u ? { "files[]": t } : t,
          b && new b(),
          this.formSerializer
        );
      }
    }
    return a || s ? (n.setContentType("application/json", !1), Os(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Nt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && f.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (o)
          throw u.name === "SyntaxError" ? D.from(u, D.ERR_BAD_RESPONSE, this, null, this.response) : u;
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
const Pt = Nt, Es = f.toObjectSet([
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
]), Rs = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && Es[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, nn = Symbol("internals");
function Ue(e) {
  return e && String(e).trim().toLowerCase();
}
function Qe(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(Qe) : String(e);
}
function xs(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Ts = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function ks(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function As(e, t) {
  const n = f.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, a, o) {
        return this[r].call(this, t, s, a, o);
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
    function a(u, b, m) {
      const c = Ue(b);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const y = f.findKey(s, c);
      (!y || s[y] === void 0 || m === !0 || m === void 0 && s[y] !== !1) && (s[y || b] = Qe(u));
    }
    const o = (u, b) => f.forEach(u, (m, c) => a(m, c, b));
    return f.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : f.isString(t) && (t = t.trim()) && !Ts(t) ? o(Rs(t), n) : t != null && a(n, t, r), this;
  }
  get(t, n) {
    if (t = Ue(t), t) {
      const r = f.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return xs(s);
        if (f.isFunction(n))
          return n.call(this, s, r);
        if (f.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Ue(t), t) {
      const r = f.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || bt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function a(o) {
      if (o = Ue(o), o) {
        const u = f.findKey(r, o);
        u && (!n || bt(r, r[u], u, n)) && (delete r[u], s = !0);
      }
    }
    return f.isArray(t) ? t.forEach(a) : a(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || bt(this, this[a], a, t, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return f.forEach(this, (s, a) => {
      const o = f.findKey(r, a);
      if (o) {
        n[o] = Qe(s), delete n[a];
        return;
      }
      const u = t ? ks(a) : String(a).trim();
      u !== a && delete n[a], n[u] = Qe(s), r[u] = !0;
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
    function a(o) {
      const u = Ue(o);
      r[u] || (As(s, o), r[u] = !0);
    }
    return f.isArray(t) ? t.forEach(a) : a(t), this;
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
function gt(e, t) {
  const n = this || Pt, r = t || n, s = pe.from(r.headers);
  let a = r.data;
  return f.forEach(e, function(u) {
    a = u.call(n, a, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), a;
}
function xn(e) {
  return !!(e && e.__CANCEL__);
}
function qe(e, t, n) {
  D.call(this, e ?? "canceled", D.ERR_CANCELED, t, n), this.name = "CanceledError";
}
f.inherits(qe, D, {
  __CANCEL__: !0
});
function Ns(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new D(
    "Request failed with status code " + n.status,
    [D.ERR_BAD_REQUEST, D.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Ps = ae.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  function() {
    return {
      write: function(n, r, s, a, o, u) {
        const b = [];
        b.push(n + "=" + encodeURIComponent(r)), f.isNumber(s) && b.push("expires=" + new Date(s).toGMTString()), f.isString(a) && b.push("path=" + a), f.isString(o) && b.push("domain=" + o), u === !0 && b.push("secure"), document.cookie = b.join("; ");
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
function Fs(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ls(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Tn(e, t) {
  return e && !Fs(t) ? Ls(e, t) : t;
}
const Ds = ae.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(a) {
      let o = a;
      return t && (n.setAttribute("href", o), o = n.href), n.setAttribute("href", o), {
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
    return r = s(window.location.href), function(o) {
      const u = f.isString(o) ? s(o) : o;
      return u.protocol === r.protocol && u.host === r.host;
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
function Bs(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function js(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, a = 0, o;
  return t = t !== void 0 ? t : 1e3, function(b) {
    const m = Date.now(), c = r[a];
    o || (o = m), n[s] = b, r[s] = m;
    let y = a, A = 0;
    for (; y !== s; )
      A += n[y++], y = y % e;
    if (s = (s + 1) % e, s === a && (a = (a + 1) % e), m - o < t)
      return;
    const O = c && m - c;
    return O ? Math.round(A * 1e3 / O) : void 0;
  };
}
function rn(e, t) {
  let n = 0;
  const r = js(50, 250);
  return (s) => {
    const a = s.loaded, o = s.lengthComputable ? s.total : void 0, u = a - n, b = r(u), m = a <= o;
    n = a;
    const c = {
      loaded: a,
      total: o,
      progress: o ? a / o : void 0,
      bytes: u,
      rate: b || void 0,
      estimated: b && o && m ? (o - a) / b : void 0,
      event: s
    };
    c[t ? "download" : "upload"] = !0, e(c);
  };
}
const zs = typeof XMLHttpRequest < "u", Is = zs && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const a = pe.from(e.headers).normalize(), o = e.responseType;
    let u;
    function b() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let m;
    if (f.isFormData(s)) {
      if (ae.hasStandardBrowserEnv || ae.hasStandardBrowserWebWorkerEnv)
        a.setContentType(!1);
      else if ((m = a.getContentType()) !== !1) {
        const [v, ...h] = m ? m.split(";").map((S) => S.trim()).filter(Boolean) : [];
        a.setContentType([v || "multipart/form-data", ...h].join("; "));
      }
    }
    let c = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", h = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      a.set("Authorization", "Basic " + btoa(v + ":" + h));
    }
    const y = Tn(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), Cn(y, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function A() {
      if (!c)
        return;
      const v = pe.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), S = {
        data: !o || o === "text" || o === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: v,
        config: e,
        request: c
      };
      Ns(function(q) {
        n(q), b();
      }, function(q) {
        r(q), b();
      }, S), c = null;
    }
    if ("onloadend" in c ? c.onloadend = A : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, c.onabort = function() {
      c && (r(new D("Request aborted", D.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new D("Network Error", D.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let h = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const S = e.transitional || On;
      e.timeoutErrorMessage && (h = e.timeoutErrorMessage), r(new D(
        h,
        S.clarifyTimeoutError ? D.ETIMEDOUT : D.ECONNABORTED,
        e,
        c
      )), c = null;
    }, ae.hasStandardBrowserEnv) {
      const v = Ds(y) && e.xsrfCookieName && Ps.read(e.xsrfCookieName);
      v && a.set(e.xsrfHeaderName, v);
    }
    s === void 0 && a.setContentType(null), "setRequestHeader" in c && f.forEach(a.toJSON(), function(h, S) {
      c.setRequestHeader(S, h);
    }), f.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), o && o !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", rn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", rn(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (v) => {
      c && (r(!v || v.type ? new qe(null, e, c) : v), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const O = Bs(y);
    if (O && ae.protocols.indexOf(O) === -1) {
      r(new D("Unsupported protocol " + O + ":", D.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, Ot = {
  http: us,
  xhr: Is
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
const sn = (e) => `- ${e}`, Us = (e) => f.isFunction(e) || e === null || e === !1, kn = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let o;
      if (r = n, !Us(n) && (r = Ot[(o = String(n)).toLowerCase()], r === void 0))
        throw new D(`Unknown adapter '${o}'`);
      if (r)
        break;
      s[o || "#" + a] = r;
    }
    if (!r) {
      const a = Object.entries(s).map(
        ([u, b]) => `adapter ${u} ` + (b === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? a.length > 1 ? `since :
` + a.map(sn).join(`
`) : " " + sn(a[0]) : "as no adapter specified";
      throw new D(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Ot
};
function yt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new qe(null, e);
}
function an(e) {
  return yt(e), e.headers = pe.from(e.headers), e.data = gt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kn.getAdapter(e.adapter || Pt.adapter)(e).then(function(r) {
    return yt(e), r.data = gt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = pe.from(r.headers), r;
  }, function(r) {
    return xn(r) || (yt(e), r && r.response && (r.response.data = gt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = pe.from(r.response.headers))), Promise.reject(r);
  });
}
const on = (e) => e instanceof pe ? e.toJSON() : e;
function Fe(e, t) {
  t = t || {};
  const n = {};
  function r(m, c, y) {
    return f.isPlainObject(m) && f.isPlainObject(c) ? f.merge.call({ caseless: y }, m, c) : f.isPlainObject(c) ? f.merge({}, c) : f.isArray(c) ? c.slice() : c;
  }
  function s(m, c, y) {
    if (f.isUndefined(c)) {
      if (!f.isUndefined(m))
        return r(void 0, m, y);
    } else
      return r(m, c, y);
  }
  function a(m, c) {
    if (!f.isUndefined(c))
      return r(void 0, c);
  }
  function o(m, c) {
    if (f.isUndefined(c)) {
      if (!f.isUndefined(m))
        return r(void 0, m);
    } else
      return r(void 0, c);
  }
  function u(m, c, y) {
    if (y in t)
      return r(m, c);
    if (y in e)
      return r(void 0, m);
  }
  const b = {
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
    validateStatus: u,
    headers: (m, c) => s(on(m), on(c), !0)
  };
  return f.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const y = b[c] || s, A = y(e[c], t[c], c);
    f.isUndefined(A) && y !== u || (n[c] = A);
  }), n;
}
const An = "1.6.1", Ft = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ft[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ln = {};
Ft.transitional = function(t, n, r) {
  function s(a, o) {
    return "[Axios v" + An + "] Transitional option '" + a + "'" + o + (r ? ". " + r : "");
  }
  return (a, o, u) => {
    if (t === !1)
      throw new D(
        s(o, " has been removed" + (n ? " in " + n : "")),
        D.ERR_DEPRECATED
      );
    return n && !ln[o] && (ln[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, o, u) : !0;
  };
};
function Vs(e, t, n) {
  if (typeof e != "object")
    throw new D("options must be an object", D.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const a = r[s], o = t[a];
    if (o) {
      const u = e[a], b = u === void 0 || o(u, a, e);
      if (b !== !0)
        throw new D("option " + a + " must be " + b, D.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new D("Unknown option " + a, D.ERR_BAD_OPTION);
  }
}
const Et = {
  assertOptions: Vs,
  validators: Ft
}, he = Et.validators;
class Ke {
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Fe(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: a } = n;
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
    let o = a && f.merge(
      a.common,
      a[n.method]
    );
    a && f.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete a[v];
      }
    ), n.headers = pe.concat(o, a);
    const u = [];
    let b = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (b = b && h.synchronous, u.unshift(h.fulfilled, h.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function(h) {
      m.push(h.fulfilled, h.rejected);
    });
    let c, y = 0, A;
    if (!b) {
      const v = [an.bind(this), void 0];
      for (v.unshift.apply(v, u), v.push.apply(v, m), A = v.length, c = Promise.resolve(n); y < A; )
        c = c.then(v[y++], v[y++]);
      return c;
    }
    A = u.length;
    let O = n;
    for (y = 0; y < A; ) {
      const v = u[y++], h = u[y++];
      try {
        O = v(O);
      } catch (S) {
        h.call(this, S);
        break;
      }
    }
    try {
      c = an.call(this, O);
    } catch (v) {
      return Promise.reject(v);
    }
    for (y = 0, A = m.length; y < A; )
      c = c.then(m[y++], m[y++]);
    return c;
  }
  getUri(t) {
    t = Fe(this.defaults, t);
    const n = Tn(t.baseURL, t.url);
    return Cn(n, t.params, t.paramsSerializer);
  }
}
f.forEach(["delete", "get", "head", "options"], function(t) {
  Ke.prototype[t] = function(n, r) {
    return this.request(Fe(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
f.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(a, o, u) {
      return this.request(Fe(u || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  Ke.prototype[t] = n(), Ke.prototype[t + "Form"] = n(!0);
});
const Ze = Ke;
class Lt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(a) {
      n = a;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let a = r._listeners.length;
      for (; a-- > 0; )
        r._listeners[a](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let a;
      const o = new Promise((u) => {
        r.subscribe(u), a = u;
      }).then(s);
      return o.cancel = function() {
        r.unsubscribe(a);
      }, o;
    }, t(function(a, o, u) {
      r.reason || (r.reason = new qe(a, o, u), n(r.reason));
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
const Ms = Lt;
function $s(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Hs(e) {
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
const qs = Rt;
function Nn(e) {
  const t = new Ze(e), n = dn(Ze.prototype.request, t);
  return f.extend(n, Ze.prototype, t, { allOwnKeys: !0 }), f.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Nn(Fe(e, s));
  }, n;
}
const V = Nn(Pt);
V.Axios = Ze;
V.CanceledError = qe;
V.CancelToken = Ms;
V.isCancel = xn;
V.VERSION = An;
V.toFormData = st;
V.AxiosError = D;
V.Cancel = V.CanceledError;
V.all = function(t) {
  return Promise.all(t);
};
V.spread = $s;
V.isAxiosError = Hs;
V.mergeConfig = Fe;
V.AxiosHeaders = pe;
V.formToJSON = (e) => Rn(f.isHTMLForm(e) ? new FormData(e) : e);
V.getAdapter = kn.getAdapter;
V.HttpStatusCode = qs;
V.default = V;
const et = V;
fe.localeData().delimiters.thousands = " ";
fe.localeData().delimiters.decimal = ",";
function Pn(e, t, n) {
  const r = {};
  for (const [s, a] of Object.entries(e))
    if (s in n)
      if ((n[s].colspan ?? 0) > 1) {
        const o = t ? t[s] : void 0;
        let u;
        o === void 0 ? u = 100 : a === 0 ? u = -100 : u = (a - o) / a * 100, r[s] = {
          original: a,
          comparison: o ?? 0,
          difference: u
        };
      } else
        r[s] = a;
  return r;
}
function Js(e, t, n, r) {
  const s = {};
  for (const a of Object.values(e)) {
    const o = a[r], u = Object.values(t).find(
      (b) => b[r] === o
    );
    s[o] = Pn(a, u, n);
  }
  return s;
}
const Ws = { class: "label" }, Gs = {
  important: "",
  size: "small"
}, Xs = { size: "small" }, Ys = /* @__PURE__ */ ge({
  __name: "CellHint",
  props: {
    format: {},
    label: {},
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { format: n, label: r, title: s, url: a } = Ce(t), o = k(), u = k(!1), b = k(), m = (v) => v.map(({ name: h, valueFormatted: S }) => ({
      label: h,
      value: S
    })), c = (v) => v.map(({ name: h, rate: S, value: x }) => ({
      label: h,
      value: `${fe(x).format("0,0")} (${fe(S).format("0,0.00")}%)`
    })), y = (v) => {
      switch (n.value) {
        case "distribution":
          return m(v);
        case "rated_distribution":
          return c(v);
        default:
          throw new Error(`Unsupported format: ${n.value}`);
      }
    }, A = async () => {
      if (o.value)
        return;
      const v = (await et(a.value)).data;
      o.value = y(v);
    }, O = async () => {
      u.value = !0, await A();
    };
    return (v, h) => {
      var S;
      return w(), j("div", {
        class: X(["cell-hint", { visible: u.value }]),
        ref_key: "root",
        ref: b,
        onMouseover: O,
        onMouseleave: h[0] || (h[0] = (x) => u.value = !1)
      }, [
        G("span", Ws, L(g(r)), 1),
        R(xt, {
          title: g(s),
          "show-arrow": !1,
          persistent: !1,
          offset: 0,
          "virtual-triggering": "",
          visible: u.value,
          "virtual-ref": (S = b.value) == null ? void 0 : S.closest(".cell"),
          width: "15rem",
          "popper-class": "cell-hint-popover"
        }, {
          default: _(() => [
            o.value ? (w(!0), j(H, { key: 0 }, be(o.value, ({ label: x, value: q }, re) => (w(), j("div", {
              key: `line-${re}`
            }, [
              G("b", Gs, L(x) + ": ", 1),
              G("span", Xs, L(q), 1)
            ]))), 128)) : (w(), F(Tt, { key: 1 }))
          ]),
          _: 1
        }, 8, ["title", "visible", "virtual-ref"])
      ], 34);
    };
  }
});
const un = /* @__PURE__ */ Oe(Ys, [["__scopeId", "data-v-23cadab0"]]), Qs = /* @__PURE__ */ ge({
  __name: "DetailsSelector",
  props: {
    labels: {},
    open: { type: Boolean, default: !1 },
    title: {}
  },
  emits: ["hideDetails", "showDetails"],
  setup(e, { emit: t }) {
    const n = e, { labels: r, open: s, title: a } = Ce(n), o = k(!1), u = k(), b = () => {
      if (s.value) {
        t("hideDetails");
        return;
      }
      o.value = !o.value;
    }, m = (y) => {
      if (o.value = !1, s.value) {
        t("hideDetails");
        return;
      }
      t("showDetails", y);
    }, c = () => {
      o.value = !1;
    };
    return (y, A) => (w(), j("div", {
      class: "details-selector-container",
      onClick: b
    }, [
      R(g(vr), {
        "show-arrow": !1,
        "popper-class": "details-selector-popover",
        teleported: !1,
        persistent: !1,
        visible: o.value,
        "hide-after": 0,
        offset: 0,
        ref_key: "popover",
        ref: u
      }, {
        reference: _(() => [
          ir((w(), F(K, {
            class: "details-selector",
            vertical: "center"
          }, {
            default: _(() => [
              g(a) ? (w(), F(z, {
                key: 0,
                mood: "important-alt",
                size: "small"
              }, {
                default: _(() => [
                  P(L(g(a)), 1)
                ]),
                _: 1
              })) : $("", !0),
              R(Pe, {
                value: g(s) ? "chevron-up" : "chevron-down",
                mood: "important-alt",
                size: "small-2"
              }, null, 8, ["value"])
            ]),
            _: 1
          })), [
            [g(wr), c]
          ])
        ]),
        default: _(() => [
          (w(!0), j(H, null, be(g(r), (O, v) => (w(), F(z, {
            class: "dropdown-item",
            onClick: cn(() => m(v), ["stop"]),
            contrast: ""
          }, {
            default: _(() => [
              P(L(O), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 256))
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const Zs = /* @__PURE__ */ ge({
  __name: "InputWithSelect",
  props: ["value", "select", "items", "width"],
  emits: ["update:value", "update:select"],
  setup(e) {
    const t = e, n = k(t.value), r = k(t.select), s = I(() => t.width === "small" ? 50 : 100);
    return (a, o) => (w(), F(g(_r), {
      modelValue: n.value,
      "onUpdate:modelValue": o[2] || (o[2] = (u) => n.value = u),
      onChange: o[3] || (o[3] = (u) => a.$emit("update:value", { value: u, operator: r.value })),
      placeholder: "",
      class: "input-with-select",
      size: "default",
      min: "0",
      style: Xe({ minWidth: `${80 + s.value}px` })
    }, {
      prepend: _(() => [
        R(Sr, {
          modelValue: r.value,
          "onUpdate:modelValue": o[0] || (o[0] = (u) => r.value = u),
          onChange: o[1] || (o[1] = (u) => a.$emit("update:select", { operator: u, value: n.value })),
          style: Xe(`width: ${s.value}px`),
          size: "default"
        }, {
          default: _(() => [
            (w(!0), j(H, null, be(e.items, (u, b) => (w(), F(Cr, {
              key: b,
              value: b,
              label: u,
              size: "default",
              style: Xe({ textAlign: e.width === "small" ? "center" : "left" })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style"])
      ]),
      _: 1
    }, 8, ["modelValue", "style"]));
  }
});
const Ks = /* @__PURE__ */ Oe(Zs, [["__scopeId", "data-v-e2be7f01"]]), ea = { class: "pagination" }, ta = /* @__PURE__ */ ge({
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
    const n = e, { currentPageSize: r, id: s, pageNumber: a, pageRadius: o, pageSizeLabel: u, pageSizes: b, rowCount: m } = Ce(n), c = I(() => Math.min(...b.value)), y = I(() => Math.ceil(m.value / r.value)), A = I(
      () => b.value.reduce((h, S) => (h[S] = S.toString(), h), {})
    ), O = I(() => {
      const h = [];
      for (let S = o.value - 1; S > 0; S--)
        a.value > S && h.push(a.value - S);
      h.push(a.value);
      for (let S = 1; S < o.value; S++)
        a.value < y.value - S - 1 && h.push(a.value + S);
      return h;
    }), v = (h) => {
      r.value !== h && t("update:currentPageSize", h);
    };
    return (h, S) => (w(), j("div", ea, [
      g(m) > g(r) ? (w(), j(H, { key: 0 }, [
        g(a) > 0 ? (w(), F(z, {
          key: 0,
          class: "page",
          onClick: S[0] || (S[0] = () => t("update:pageNumber", 0)),
          mood: "important-alt"
        }, {
          default: _(() => [
            P("1")
          ]),
          _: 1
        })) : $("", !0),
        g(a) > g(o) ? (w(), F(z, {
          key: 1,
          class: "page-separator"
        }, {
          default: _(() => [
            P("…")
          ]),
          _: 1
        })) : $("", !0),
        (w(!0), j(H, null, be(O.value, (x) => (w(), F(z, {
          class: X(["page", { current: x === g(a) }]),
          onClick: () => t("update:pageNumber", x),
          key: x
        }, {
          default: _(() => [
            P(L(x + 1), 1)
          ]),
          _: 2
        }, 1032, ["onClick", "class"]))), 128)),
        g(a) < y.value - g(o) - 1 ? (w(), F(z, {
          key: 2,
          class: "page-separator"
        }, {
          default: _(() => [
            P("…")
          ]),
          _: 1
        })) : $("", !0),
        g(a) < y.value - 1 ? (w(), F(z, {
          key: 3,
          class: "page",
          onClick: S[1] || (S[1] = () => t("update:pageNumber", y.value - 1)),
          mood: "important-alt"
        }, {
          default: _(() => [
            P(L(y.value), 1)
          ]),
          _: 1
        })) : $("", !0),
        R(z, { class: "page-size-label" }, {
          default: _(() => [
            P(L(g(u)), 1)
          ]),
          _: 1
        })
      ], 64)) : $("", !0),
      g(m) > c.value ? (w(), F(br, {
        key: 1,
        class: "page-size-selector no-spacing",
        "onUpdate:modelValue": S[2] || (S[2] = (x) => v(parseInt(x.toString()))),
        id: g(s),
        items: A.value,
        modelValue: g(r)
      }, {
        item: _(({ item: x }) => [
          P(L(x), 1)
        ]),
        _: 1
      }, 8, ["id", "items", "modelValue"])) : $("", !0)
    ]));
  }
});
const na = /* @__PURE__ */ Oe(ta, [["__scopeId", "data-v-c7e19feb"]]), ra = { class: "trend-chart-container" }, sa = { class: "trend-chart-content" }, aa = /* @__PURE__ */ ge({
  __name: "TrendChart",
  props: {
    formatter: { type: Function },
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { formatter: n, title: r, url: s } = Ce(t), a = k(), o = k([]), u = k(), b = I(() => u.value ? Object.assign({}, u.value) : {}), m = I(() => {
      var h;
      switch ((h = u.value) == null ? void 0 : h.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return u.value[0];
        default:
          return u.value.slice(u.value.length / 2).reduce((S, x) => S + x, 0) / Math.ceil(u.value.length / 2);
      }
    }), c = I(() => {
      var h;
      switch ((h = u.value) == null ? void 0 : h.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return u.value[0];
        default:
          return u.value.slice(0, u.value.length / 2).reduce((S, x) => S + x, 0) / Math.floor(u.value.length / 2);
      }
    }), y = I(() => c.value > m.value ? "negative" : c.value < m.value ? "positive" : "neutral"), A = I(() => {
      if (!u.value)
        return {};
      const h = new Array(u.value.length).fill(0).map(
        (S, x) => c.value + (m.value - c.value) * x / (u.value.length - 1)
      );
      return Object.assign({}, h);
    }), O = async () => {
      if (u.value)
        return;
      const h = (await et({ url: s.value })).data;
      o.value = Object.keys(h), u.value = Object.values(h);
    }, v = async () => {
      await O();
    };
    return (h, S) => (w(), j("div", ra, [
      G("i", {
        class: "la la-eye secondary",
        ref_key: "iconRef",
        ref: a
      }, null, 512),
      R(xt, {
        width: "500",
        trigger: "click",
        persistent: !1,
        "show-arrow": !1,
        "popper-class": "trend-chart-popover",
        "virtual-ref": a.value,
        "virtual-triggering": "",
        "append-to": ".app-container",
        "popper-options": { modifiers: [{ name: "eventListeners", options: { scroll: !1 } }], strategy: "fixed" },
        onShow: v
      }, {
        default: _(() => [
          g(r) ? (w(), F(Me, {
            key: 0,
            size: "large-2"
          }, {
            default: _(() => [
              P(L(g(r)), 1)
            ]),
            _: 1
          })) : $("", !0),
          G("div", sa, [
            u.value ? (w(), F(yr, {
              key: 0,
              activeLines: ["values"],
              formatters: { trend: g(n), values: g(n) },
              moods: { trend: { mood: y.value }, values: { mood: "important" } },
              styles: { trend: "line", values: "line" },
              values: { trend: A.value, values: b.value },
              "no-x-axis-labels": !0
            }, null, 8, ["formatters", "moods", "values"])) : (w(), F(Tt, { key: 1 }))
          ])
        ]),
        _: 1
      }, 8, ["virtual-ref"])
    ]));
  }
});
const oa = /* @__PURE__ */ Oe(aa, [["__scopeId", "data-v-c57a26a4"]]), la = { class: "common-table" }, ia = {
  key: 0,
  class: "controls"
}, ua = ["onMouseover", "onMouseleave"], ca = ["onClick"], wt = 50, da = /* @__PURE__ */ ge({
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
    const n = e, r = async (l, i) => typeof l == "function" ? await l(i) : (await et({
      ...l,
      params: {
        ...l.params,
        [i.primaryColumn]: i.primaryColumnValue
      }
    })).data, s = async (l, i) => typeof l == "function" ? await l(i) : (await et({
      ...l,
      params: {
        ...l.params ?? {},
        filter: i.inlineFilters ? Object.fromEntries(
          Object.entries(i.inlineFilters).filter(([d, p]) => p.value !== "")
        ) : void 0,
        page_number: i.pageNumber,
        page_size: i.pageSize,
        order: i.orderBy,
        reversed: i.reversed
      }
    })).data, {
      cellClasses: a,
      clientCurrencyDecimal: o,
      clientCurrencySymbol: u,
      clientCurrencySymbolPrefix: b,
      colorMetrics: m,
      columns: c,
      columnDetails: y,
      columnLinks: A,
      comparisonColumns: O,
      comparisonRequest: v,
      defaultOrderBy: h,
      detailsColumn: S,
      detailsRequests: x,
      dragColumns: q,
      fixedColumnNumber: re,
      inlineFilterOperators: se,
      inversedKpis: le,
      primaryColumn: M,
      primaryColumnAlias: ve,
      request: J,
      rows: Ee,
      shortenColumns: ee,
      showInlineFilters: ye,
      showRowNumber: ot,
      showPagination: Je,
      showTopTotal: lt,
      total: De,
      totalColumnKey: it,
      trendUrl: Re
    } = Ce(n), xe = () => {
      const l = {};
      for (const i of Object.keys(c.value))
        i in se.value && (l[i] = {
          operator: Object.keys(se.value[i])[0],
          value: ""
        });
      return l;
    }, ie = k([]), Te = k(void 0), C = k({}), E = k([]), B = k({}), W = k([]), me = k({}), Be = k(!1), ue = k(!1), je = k([]), ze = k(!1), Y = k(xe()), we = k(!0), ce = k(), _e = k(0), ke = k(20), Ie = k(0), Q = k(), de = k(), Fn = I(() => {
      const l = {};
      return ue.value && (l.inline_filters = {
        icon: "filter"
      }), l;
    }), Ln = I(
      () => O != null && O.value ? Object.keys(O.value) : void 0
    ), Dt = I(
      () => W.value.reduce((l, i) => (l[i] = hr(c.value[i]), l), {})
    ), Bt = I(() => {
      if (x != null && x.value)
        return Object.entries(x.value).reduce((l, [i, { label: d }]) => (l[i] = d, l), {});
    }), jt = I(() => [...ie.value].sort((l, i) => {
      const d = (() => {
        const p = ut(
          ce.value[0].reduce((N, U) => N[U], l),
          c.value[ce.value[0][0]].type
        ), T = ut(
          ce.value[0].reduce((N, U) => N[U], i),
          c.value[ce.value[0][0]].type
        );
        return p > T ? 1 : p < T ? -1 : 0;
      })();
      return ce.value[1] ? -d : d;
    })), zt = I(() => J != null && J.value && !ze.value || !Je.value ? jt.value : jt.value.slice(
      _e.value * ke.value,
      (_e.value + 1) * ke.value
    )), Dn = (l) => {
      E.value.includes(l) || E.value.push(l);
    }, We = (l, i) => !ee.value || !ee.value.includes(l) ? !1 : String(i || "").length > wt, Bn = (l) => !!l.tooltipTitle && !!l.tooltipContent, Ge = (l, i, d) => {
      var T;
      if (!d || !(O != null && O.value) || !(d in O.value) || O.value[d].format !== "difference")
        return;
      const p = ((T = le == null ? void 0 : le.value) == null ? void 0 : T.includes(i)) ?? !1;
      return l > 0 ? p ? "negative" : "positive" : l < 0 ? p ? "positive" : "negative" : "neutral";
    }, Ae = (l, i, d) => {
      if (l === null)
        return "";
      let p = ut(l, i);
      switch (i) {
        case "float":
          return fe(parseFloat(p)).format("0,0.00");
        case "int":
          return fe(parseInt(p)).format("0,0");
        case "money": {
          let T = "0,0";
          o.value > 0 && (T += "." + "0".repeat(o.value));
          const N = fe(parseFloat(p)).format(T);
          return b.value ? u.value + " " + N : N + " " + u.value;
        }
        case "money_capped": {
          const T = parseFloat(p.toFixed(o.value)) == 0;
          if (p > 0 && p < 1 && T) {
            const N = o.value === 0 ? 1 : fe(parseFloat("0." + "0".repeat(o.value - 1) + "1")).format(
              "0.0" + o.value
            );
            return b.value ? `< ${u.value} ${N}` : `< ${N} ${u.value}`;
          } else
            return Ae(l, "money", d);
        }
        case "percent": {
          let T = fe(parseFloat(p)).format("0,0.00") + "%";
          return d === "difference" && p > 0 && (T = `+${T}`), T;
        }
        case "time":
          return `${Ae(Math.floor(parseInt(p) / 60), "int")}mn${Ae(
            parseInt(p) % 60,
            "int"
          )}s`;
        default:
          return p == null ? void 0 : p.toString();
      }
    }, jn = async (l, i) => {
      if (C.value[l] && C.value[l][i[M.value]])
        return C.value[l][i[M.value]];
      const { rows: d } = await r(x.value[l].request, {
        row: i,
        primaryColumn: (ve == null ? void 0 : ve.value) ?? M.value,
        primaryColumnValue: i[M.value]
      });
      return C.value[l] || (C.value[l] = {}), C.value[l][i[M.value]] = Object.values(d), C.value[l][i[M.value]];
    }, It = (l, i) => {
      if (!l)
        return i.url;
      const d = new URL(l.url, location.origin);
      if (Array.isArray(l.columns))
        for (const p of l.columns)
          d.searchParams.set(p, i[p]);
      else
        for (const [p, T] of Object.entries(l.columns))
          d.searchParams.set(T, i[p]);
      return d;
    }, zn = (l, i) => {
      const d = new URL(y.value[l].baseUrl, location.origin);
      if (Array.isArray(y.value[l].columns))
        for (const p of y.value[l].columns)
          d.searchParams.set(p, i[p]);
      else
        for (const [p, T] of Object.entries(y.value[l].columns))
          d.searchParams.set(T, i[p]);
      return d.toString();
    }, In = (l) => {
      if (l.totalUrl)
        return new URL(l.totalUrl).toString();
      const i = new URL(l.baseUrl);
      return i.searchParams.set("total", "true"), i.toString();
    }, Un = (l) => !ee.value || !ee.value.includes(l) ? -1 : je.value.indexOf(l), Vn = (l) => {
      if (l in Y.value)
        return Y.value[l].operator;
    }, Mn = (l) => {
      if (l in Y.value)
        return Y.value[l].value;
    }, Ut = (l) => se.value[l], $n = (l) => {
      const i = Ut(l);
      if (i)
        return Object.values(i).some((d) => d.size === "small") ? "small" : "normal";
    }, Hn = (l) => {
      const i = Ut(l);
      return i ? Object.entries(i).reduce((d, [p, T]) => (d[p] = T.label, d), {}) : {};
    }, qn = (l) => c.value[l].type === "string" ? "text" : "number", Vt = () => `Table_OrderBy_${location.pathname}`, Jn = () => `Table_PageSize_${location.pathname}`, ut = (l, i) => {
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
    }, Se = (l, i, d, p = !1) => {
      const [T, N] = (() => !d || !(O != null && O.value) || !(d in O.value) ? [c.value[i].type, void 0] : [
        O.value[d].type ?? c.value[i].type,
        O.value[d].format
      ])();
      let U = Ae(l, T);
      return N === "difference" && (U = l > 0 ? `+${U}` : U), p ? qt(U, i) : U;
    }, Wn = (l, i) => {
      if (!Re)
        return "";
      const d = new URL(
        i ? Re.value[i] : Re.value,
        location.origin
      );
      return d.searchParams.set((ve == null ? void 0 : ve.value) || M.value, l[M.value]), d.toString();
    }, Mt = (l, i, d) => We(l, i) ? [] : d ? (S == null ? void 0 : S.value) === l ? ["flex-grow-1", "text-left"] : ee.value && ee.value.includes(l) && zt.value.some((p) => We(l, p[l])) ? ["flex-grow-1", "text-left"] : ["flex-grow-1"] : ["flew-grow-1"], Gn = (l) => l in se.value, Xn = () => {
      ye.value && (Be.value = !1);
    }, $t = (l, i) => {
      if (!(A != null && A.value) || !(i in A.value))
        return !1;
      const d = A.value[i];
      return d === null ? !!l.url : !("disable_for" in d && d.disable_for.includes(l[M.value]));
    }, Yn = (l, i) => {
      const [d] = W.value.splice(l, 1);
      W.value.splice(i, 0, d), t("move:column", { from: l, to: i });
    }, Qn = (l) => {
      const i = E.value.indexOf(l);
      i < 0 || E.value.splice(i, 1);
    }, Ht = (l, i) => {
      B.value[l] = i;
    }, qt = (l, i) => !ee.value || !ee.value.includes(i) || je.value.includes(i) || String(l || "").length <= wt ? l : `${l.substring(0, wt - 3)}...`, Zn = (l) => {
      if (!de.value)
        return;
      const i = {
        left: de.value.$el.scrollLeft,
        top: de.value.$el.scrollTop
      };
      delete me.value[l[M.value]], Xt(() => {
        de.value.$el.scrollTo(i);
      });
    }, Kn = async (l, i) => {
      if (!de.value)
        return;
      const d = {
        left: de.value.$el.scrollLeft,
        top: de.value.$el.scrollTop
      };
      we.value = !0, me.value[i[M.value]] = await jn(l, i), Xt(() => {
        de.value.$el.scrollTo(d), we.value = !1;
      });
    }, er = async (l = !1) => {
      await nr(l) || await tr(l) || await dt(l);
    }, ct = async (l) => {
      await ft(l), _e.value = l;
    }, Jt = async (l) => {
      const i = Jn();
      if (l === void 0) {
        const d = localStorage.getItem(i);
        d && (ke.value = parseInt(d));
      } else
        localStorage.setItem(i, l.toString()), await ft(0, l), _e.value = 0, ke.value = l;
    }, Wt = (l, { operator: i, value: d }) => {
      const p = Y.value[l].value !== d || Y.value[l].operator !== i && Y.value[l].value;
      Y.value[l] = { operator: i, value: d }, p && (ze.value = !1, ct(0));
    }, tr = async (l) => {
      const i = (() => {
        for (const T in localStorage) {
          if (!T.startsWith("DataTables_"))
            continue;
          const N = T.substring(T.indexOf("/"));
          if (location.pathname !== N)
            return;
          const U = localStorage.getItem(T);
          return U ? JSON.parse(U) : void 0;
        }
      })();
      if (!i || !i.order || !i.order[0] || typeof i.order[0][0] == "number")
        return !1;
      const d = i.order[0][0].lastIndexOf("-"), p = d === -1 ? [
        [i.order[0][0]],
        i.order[0][1] === "desc"
      ] : [
        [
          i.order[0][0].substring(0, d),
          i.order[0][0].substring(d + 1)
        ],
        i.order[0][1] === "desc"
      ];
      return await Ne(p, !1, l), !0;
    }, dt = async (l) => {
      if (h != null && h.value) {
        await Ne(h.value, !1, l);
        return;
      }
      const [i, { colspan: d }] = Object.entries(c.value).find(
        ([p, { visible: T }]) => T
      );
      if (d === -1) {
        await Ne([[i], !1], !1, l);
        return;
      }
      await Ne(
        [
          [
            i,
            (O != null && O.value ? Object.keys(O.value)[0] : 0).toString()
          ],
          !1
        ],
        !1,
        l
      );
    }, nr = async (l) => {
      const i = localStorage.getItem(Vt());
      if (i) {
        const d = JSON.parse(i)[0][0];
        if (c.value[d])
          return await Ne(JSON.parse(i), !1, l), !0;
      } else
        return !1;
    }, rr = async (l, i, d) => {
      if (!(J != null && J.value))
        return !1;
      if (ze.value)
        return !0;
      const [p, T] = await (async () => {
        const N = [
          s(J.value, {
            inlineFilters: Y.value,
            pageNumber: l,
            pageSize: i,
            orderBy: d[0],
            reversed: d[1]
          })
        ];
        v != null && v.value && N.push(
          s(v.value, {
            inlineFilters: Y.value,
            pageNumber: l,
            pageSize: i,
            orderBy: d[0],
            reversed: d[1]
          })
        );
        const U = await Promise.all(N);
        if (U.length > 1 && U.some((ne) => ne.paginated === !0))
          throw new Error("Paginated fetching is not supported for separate comparison requests.");
        return U;
      })();
      return T ? (Te.value = [p, T], Gt()) : ie.value = Object.values(p.rows), ze.value = p.paginated === !1, Ie.value = p.row_count, p.detailedRows ? me.value = p.detailedRows : me.value = {}, p.total && !T && (Q.value = p.total), !0;
    }, Gt = () => {
      if (!Te.value)
        return;
      const [l, i] = Te.value;
      ie.value = Object.values(
        Js(l.rows, i.rows, c.value, M.value)
      ), l.total && (Q.value = Pn(l.total, i.total, c.value));
    }, sr = () => {
      if (!(Ee != null && Ee.value))
        return !1;
      let l = Object.values(Ee.value);
      for (const [i, d] of Object.entries(Y.value))
        d.value && (l = l.filter(
          (p) => se.value[i][d.operator].callback(
            p[i],
            d.value
          )
        ));
      return ie.value = l, Ie.value = l.length, !0;
    }, ft = async (l, i, d) => {
      l === void 0 && (l = _e.value), i === void 0 && (i = ke.value), d === void 0 && (d = ce.value), we.value = !0, sr() || await rr(l, i, d), we.value = !1;
    }, ar = () => {
      ye.value && (Be.value = !0);
    }, or = (l) => {
      if (!ee.value || !ee.value.includes(l))
        return;
      const i = Un(l);
      i >= 0 ? je.value.splice(i, 1) : je.value.push(l);
    }, lr = () => {
      ue.value = !ue.value, ue.value && (Y.value = xe());
    }, Ne = async (l, i = !0, d = !0) => {
      _e.value = 0, ce.value = l, d && await ft(void 0, void 0, l), i && localStorage.setItem(Vt(), JSON.stringify(l)), t("update:orderBy", l);
    };
    return ur(() => {
      W.value = Object.keys(c.value), Q.value = De == null ? void 0 : De.value, Promise.all([dt(!1), Jt()]).then(() => er(!0));
    }), Ve(c, () => {
      W.value = Object.keys(c.value), Y.value = xe(), Te && Gt();
    }), Ve(we, () => {
      t("update:loading", we.value);
    }), h && Ve(h, (l, i) => {
      (l == null ? void 0 : l[0][0]) !== (i == null ? void 0 : i[0][0]) && dt(!0);
    }), J && Ve(
      J,
      () => {
        ze.value = !1, ct(0);
      },
      { deep: !0 }
    ), (l, i) => (w(), j("div", la, [
      g(Je) ? (w(), j("div", ia, [
        R(na, {
          "onUpdate:pageNumber": i[0] || (i[0] = (d) => ct(d)),
          "onUpdate:currentPageSize": i[1] || (i[1] = (d) => Jt(d)),
          currentPageSize: ke.value,
          pageNumber: _e.value,
          pageSizeLabel: l.pageSizeLabel,
          rowCount: Ie.value
        }, null, 8, ["currentPageSize", "pageNumber", "pageSizeLabel", "rowCount"])
      ])) : $("", !0),
      G("div", {
        class: "table-container",
        onMouseover: i[7] || (i[7] = () => ar()),
        onMouseout: i[8] || (i[8] = () => Xn())
      }, [
        G("div", {
          class: X(["action-buttons", { active: Be.value }])
        }, [
          g(ye) ? (w(), F(_t, {
            key: 0,
            onClick: i[2] || (i[2] = () => lr()),
            icon: ue.value ? "trash-can" : "filter",
            mood: "positive"
          }, null, 8, ["icon"])) : $("", !0)
        ], 2),
        ce.value ? (w(), F(Er, {
          key: 0,
          ref_key: "table",
          ref: de,
          onAddColoredMetric: i[3] || (i[3] = (d) => Dn(d)),
          "onMove:column": i[4] || (i[4] = ({ from: d, to: p }) => Yn(d, p)),
          onRemoveColoredMetric: i[5] || (i[5] = (d) => Qn(d)),
          "onUpdate:orderBy": i[6] || (i[6] = (d) => Ne(d)),
          additionalHeaders: Fn.value,
          cellClasses: g(a),
          colorMetrics: g(m),
          coloredMetrics: E.value,
          columns: Dt.value,
          comparisonColumnKeys: Ln.value,
          detailsRows: me.value,
          dragColumns: g(q),
          fixedColumnNumber: g(re),
          inversedKpis: g(le),
          orderBy: ce.value,
          primaryColumn: g(M),
          rows: zt.value,
          showRowNumber: g(ot),
          showTotal: !!Q.value,
          showTopTotal: g(lt)
        }, cr({
          colorizeLabel: _(({ enabled: d }) => [
            R(z, {
              mood: "white",
              size: "small"
            }, {
              default: _(() => [
                d ? (w(), j(H, { key: 0 }, [
                  P(L(l.uncolorizeLabel), 1)
                ], 64)) : (w(), j(H, { key: 1 }, [
                  P(L(l.colorizeLabel), 1)
                ], 64))
              ]),
              _: 2
            }, 1024)
          ]),
          columnRowNumber: _(() => [
            R(z, {
              class: "column-label",
              contrast: "",
              size: "small"
            }, {
              default: _(() => [
                P("#")
              ]),
              _: 1
            })
          ]),
          rowNumber: _(({ value: d }) => [
            R(z, {
              contrast: "",
              size: "small"
            }, {
              default: _(() => [
                P(L(d), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          totalRowNumber: _(() => [
            R(z, {
              class: "total-label",
              contrast: "",
              size: "small"
            }, {
              default: _(() => [
                P("#")
              ]),
              _: 1
            })
          ]),
          column: _(({ columnKey: d, isGhost: p }) => [
            mt(l.$slots, "columnAdditional", {
              columnKey: d,
              isGhost: p
            }, void 0, !0),
            G("div", {
              class: "d-flex align-items-center",
              onMouseover: () => Ht(d, !0),
              onMouseleave: () => Ht(d, !1)
            }, [
              R(z, {
                class: "column-label",
                contrast: "",
                size: "small"
              }, {
                default: _(() => [
                  P(L(g(c)[d].label), 1)
                ]),
                _: 2
              }, 1024),
              !p && Bn(g(c)[d]) ? (w(), F(Tr, {
                key: 0,
                description: g(c)[d].tooltipContent,
                title: g(c)[d].tooltipTitle,
                visible: B.value[d],
                "icon-backend": "regular"
              }, null, 8, ["description", "title", "visible"])) : $("", !0)
            ], 40, ua)
          ]),
          additionalHeader: _(({ additionalHeader: d, columnKey: p }) => [
            d === "inline_filters" && Gn(p) ? (w(), F(Ks, {
              key: 0,
              value: Mn(p),
              "onUpdate:value": (T) => Wt(p, T),
              type: qn(p),
              select: Vn(p),
              "onUpdate:select": (T) => Wt(p, T),
              items: Hn(p),
              width: $n(p)
            }, null, 8, ["value", "onUpdate:value", "type", "select", "onUpdate:select", "items", "width"])) : $("", !0)
          ]),
          total: _(({ columnKey: d, subcolumnKey: p, values: T }) => [
            mt(l.$slots, "total", {
              columnKey: d,
              subcolumnKey: p,
              values: T,
              row: Q.value
            }, () => {
              var N;
              return [
                l.totalTitle && d === g(it) ? (w(), F(z, {
                  key: 0,
                  class: "total-label",
                  contrast: "",
                  size: "small"
                }, {
                  default: _(() => [
                    typeof l.totalTitle == "function" ? (w(), j(H, { key: 0 }, [
                      P(L(l.totalTitle(Ie.value ?? ie.value.length)), 1)
                    ], 64)) : (w(), j(H, { key: 1 }, [
                      P(L(l.totalTitle) + ": " + L(Ie.value ?? ie.value.length), 1)
                    ], 64))
                  ]),
                  _: 1
                })) : Q.value ? (w(), j(H, { key: 1 }, [
                  Q.value && Q.value[d] >= 0.01 && d in g(y) ? (w(), F(un, {
                    key: 0,
                    format: g(y)[d].format,
                    label: qt(Ae(Q.value[d], g(c)[d].type, g(O) && p ? g(O)[p].format : void 0), d),
                    title: g(y)[d].title,
                    url: In(g(y)[d])
                  }, null, 8, ["format", "label", "title", "url"])) : p ? (w(), F(z, {
                    key: 1,
                    class: "total-label",
                    mood: Ge((N = Q.value[d]) == null ? void 0 : N[p], d, p),
                    contrast: "",
                    size: "small"
                  }, {
                    default: _(() => {
                      var U;
                      return [
                        P(L(Se((U = Q.value[d]) == null ? void 0 : U[p], d, p)), 1)
                      ];
                    }),
                    _: 2
                  }, 1032, ["mood"])) : (w(), F(z, {
                    key: 2,
                    class: "total-label",
                    mood: Ge(Q.value[d], d, p),
                    contrast: "",
                    size: "small"
                  }, {
                    default: _(() => [
                      P(L(Se(Q.value[d], d)), 1)
                    ]),
                    _: 2
                  }, 1032, ["mood"]))
                ], 64)) : $("", !0)
              ];
            }, !0)
          ]),
          _: 2
        }, [
          g(O) ? {
            name: "secondaryColumn",
            fn: _(({ subcolumnKey: d }) => [
              d ? (w(), F(z, {
                key: 0,
                class: "column-label",
                contrast: "",
                size: "small"
              }, {
                default: _(() => [
                  P(L(g(O)[d].label), 1)
                ]),
                _: 2
              }, 1024)) : $("", !0)
            ]),
            key: "0"
          } : void 0,
          be(Object.keys(Dt.value), (d) => ({
            name: `row-${d}`,
            fn: _(({ columnKey: p, index: T, row: N, spanIndex: U, subcolumnKey: ne, subindex: pt, value: Z }) => [
              mt(l.$slots, "row-" + p, dr(fr({
                columnKey: p,
                index: T,
                row: N,
                spanIndex: U,
                subcolumnKey: ne,
                subindex: pt,
                value: Z
              })), () => [
                pt === void 0 && p === "trend" && g(Re) ? (w(), F(oa, {
                  key: 0,
                  class: X(Mt(p, Z, N.rowInfo.detailable)),
                  formatter: (vt) => Ae(vt, "int"),
                  title: l.trendChartTitle,
                  url: Wn(N, ne)
                }, null, 8, ["class", "formatter", "title", "url"])) : N.rowInfo.detailable && p === g(S) ? (w(), j(H, { key: 1 }, [
                  $t(N, p) && N.rowInfo.detailable ? (w(), F(Yt, {
                    key: 0,
                    to: It(g(A)[p], N).toString(),
                    "is-external": !!N.url,
                    contrast: "",
                    size: "small"
                  }, {
                    default: _(() => [
                      P(L(Se(Z, p, ne, !0)), 1)
                    ]),
                    _: 2
                  }, 1032, ["to", "is-external"])) : (w(), F(z, {
                    key: 1,
                    mood: Ge(Z, p, ne),
                    contrast: "",
                    size: "small"
                  }, {
                    default: _(() => [
                      P(L(Se(Z, p, ne)), 1)
                    ]),
                    _: 2
                  }, 1032, ["mood"]))
                ], 64)) : $t(N, p) && N.rowInfo.detailable ? (w(), F(Yt, {
                  key: 2,
                  to: It(g(A)[p], N).toString(),
                  "is-external": !!N.url,
                  contrast: "",
                  size: "small"
                }, {
                  default: _(() => [
                    P(L(Se(Z, p, ne, !0)), 1)
                  ]),
                  _: 2
                }, 1032, ["to", "is-external"])) : pt === void 0 && Z >= 0.01 && p in g(y) ? (w(), F(un, {
                  key: 3,
                  format: g(y)[p].format,
                  label: Se(Z, p, ne, !0),
                  title: g(y)[p].title,
                  url: zn(p, N)
                }, null, 8, ["format", "label", "title", "url"])) : (w(), F(z, {
                  key: 4,
                  class: X(Mt(p, Z, N.rowInfo.detailable)),
                  mood: Ge(Z, p, ne),
                  contrast: "",
                  size: "small"
                }, {
                  default: _(() => [
                    P(L(Se(Z, p, ne, !0)), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "mood"])),
                We(p, Z) ? (w(), j("i", {
                  key: 5,
                  class: X(["flex-grow-1 expand-column fa", je.value.includes(p) ? "fa-compress-alt" : "fa-expand-alt"]),
                  onClick: () => or(p)
                }, null, 10, ca)) : $("", !0)
              ], !0),
              Bt.value && N.rowInfo.detailable && p === g(S) ? (w(), j(H, { key: 0 }, [
                We(p, Z) ? $("", !0) : (w(), F(Or, { key: 0 })),
                R(Qs, {
                  onHideDetails: () => Zn(N),
                  onShowDetails: (vt) => Kn(vt, N),
                  labels: Bt.value,
                  open: me.value[N[g(M)]] !== void 0,
                  title: l.detailsSelectorTitle
                }, null, 8, ["onHideDetails", "onShowDetails", "labels", "open", "title"])
              ], 64)) : $("", !0)
            ])
          }))
        ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "dragColumns", "fixedColumnNumber", "inversedKpis", "orderBy", "primaryColumn", "rows", "showRowNumber", "showTotal", "showTopTotal"])) : $("", !0)
      ], 32),
      G("div", {
        class: X(["loading-overlay", { visible: we.value }])
      }, [
        R(Tt)
      ], 2)
    ]));
  }
});
const Ma = /* @__PURE__ */ Oe(da, [["__scopeId", "data-v-31bfbbe2"]]), fa = { class: "scrollable flex-max no-spacing" }, pa = ["onClick"], va = { class: "scrollable flex-max no-spacing" }, ma = ["onClick"], ha = { class: "scrollable" }, ba = { class: "items flex-max no-spacing" }, ga = /* @__PURE__ */ ge({
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
    const n = e, { columns: r, defaultValue: s, groupNames: a, modelValue: o, showModalLabel: u } = Ce(n), b = k(Object.keys(a.value)[0]), m = k([...o.value]), c = k([]), y = k([]), A = k(""), O = k(void 0), v = k(void 0), h = k(void 0), S = k(void 0), x = k(void 0), q = I(() => Object.fromEntries(
      Object.entries(r.value).filter(
        ([C, E]) => E.fixed !== !0 && (A.value.trim() === "" || E.label.toLowerCase().includes(A.value.trim().toLowerCase()))
      )
    )), re = I(() => Object.keys(a.value).reduce((C, E) => (C[E] = Object.fromEntries(
      Object.entries(q.value).filter(([B, W]) => W.group === E)
    ), C), {})), se = I(
      () => b.value === void 0 ? void 0 : re.value[b.value]
    ), le = I(() => Object.fromEntries(
      Object.entries(a.value).filter(
        ([C, E]) => Object.values(q.value).some((B) => B.group === C)
      )
    )), M = I(() => {
      if (!(h.value === void 0 || S.value === void 0 || x.value === void 0))
        return h.value + x.value - S.value;
    }), ve = I(() => {
      if (M.value !== void 0)
        return `${M.value}px`;
    }), J = I(() => {
      if (v.value === void 0 || M.value === void 0)
        return;
      const C = m.value.indexOf(v.value), E = C - 1 - m.value.slice(0, C).reverse().findIndex((ue) => r.value[ue].fixed === !0);
      let B = m.value.slice(C + 1).findIndex((ue) => r.value[ue].fixed === !0);
      B >= 0 ? B += C + 1 : B = m.value.length;
      const W = Ee(m.value[E]), me = W.offsetHeight, Be = Math.min(
        Math.round((M.value - W.offsetTop) / me - 1),
        B - E - 1
      );
      return E + Be + 1;
    }), Ee = (C) => y.value[m.value.indexOf(C)], ee = (C) => c.value[m.value.indexOf(C)], ye = (C = !1, E) => {
      E && E.target !== E.currentTarget || (C && (m.value = [...o.value]), O.value = !1, b.value = Object.keys(a.value)[0]);
    }, ot = (C) => {
      const E = m.value.indexOf(C);
      E >= 0 && m.value.splice(E, 1);
    }, Je = () => {
      m.value = [...s.value];
    }, lt = (C) => {
      const E = [...C];
      t("update:modelValue", E), ye(!1);
    }, De = (C) => {
      b.value = C.toString();
    }, it = () => {
      O.value = !0;
    }, Re = (C) => {
      const E = m.value.indexOf(C);
      E >= 0 ? m.value.splice(E, 1) : m.value.push(C);
    }, xe = (C) => {
      x.value = C.clientY;
    }, ie = () => {
      const C = J.value;
      if (v.value !== void 0 && C !== void 0) {
        const E = m.value.indexOf(v.value);
        m.value.splice(E, 1), m.value.splice(C, 0, v.value);
      }
      v.value = void 0, h.value = void 0, S.value = void 0, x.value = void 0, window.removeEventListener("mousemove", xe), window.removeEventListener("mouseup", ie);
    }, Te = (C, E) => {
      v.value = E, h.value = ee(E).$el.offsetTop, S.value = C.clientY, x.value = C.clientY, window.addEventListener("mousemove", xe), window.addEventListener("mouseup", ie);
    };
    return Ve(A, (C) => {
      C ? (!b.value || !(b.value in le.value)) && (b.value = Object.keys(le.value)[0]) : b.value || (b.value = Object.keys(le.value)[0]);
    }), (C, E) => (w(), j(H, null, [
      R(_t, {
        onClick: E[0] || (E[0] = () => it()),
        disabled: C.disabled,
        label: g(u),
        mood: "neutral",
        tabindex: "-1"
      }, null, 8, ["disabled", "label"]),
      (w(), F(pr, { to: "#app > .app-container" }, [
        R(K, {
          class: X(["kpi-selector-container no-spacing", { visible: O.value, hidden: O.value === !1 }]),
          onClick: E[5] || (E[5] = cn((B) => ye(!0, B), ["stop"])),
          column: "",
          horizontal: "center",
          vertical: "center"
        }, {
          default: _(() => [
            R(mr, { class: "kpi-selector" }, {
              default: _(() => [
                R(K, {
                  class: "title",
                  vertical: "center"
                }, {
                  default: _(() => [
                    R(Me, {
                      class: "flex-max",
                      size: "large-2"
                    }, {
                      default: _(() => [
                        P(L(C.title), 1)
                      ]),
                      _: 1
                    }),
                    R(K, {
                      class: "flex-max no-spacing search-container",
                      vertical: "center"
                    }, {
                      default: _(() => [
                        R(gr, {
                          class: "flex-max search",
                          modelValue: A.value,
                          "onUpdate:modelValue": E[1] || (E[1] = (B) => A.value = B),
                          placeholder: C.filterLabel
                        }, null, 8, ["modelValue", "placeholder"]),
                        R(Pe, {
                          class: "no-spacing",
                          value: "magnifying-glass"
                        })
                      ]),
                      _: 1
                    }),
                    R(K, {
                      class: "close-container flex-max no-spacing",
                      horizontal: "right"
                    }, {
                      default: _(() => [
                        R(Pe, {
                          class: "close",
                          onClick: E[2] || (E[2] = () => ye(!0)),
                          value: "xmark"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                R(K, { class: "body flex-max no-spacing" }, {
                  default: _(() => [
                    b.value !== void 0 && se.value !== void 0 ? (w(), j(H, { key: 0 }, [
                      R(K, {
                        class: "groups flex-max",
                        column: ""
                      }, {
                        default: _(() => [
                          R(Me, { size: "large-2" }, {
                            default: _(() => [
                              P(L(C.groupsTitle), 1)
                            ]),
                            _: 1
                          }),
                          G("div", fa, [
                            (w(!0), j(H, null, be(Object.entries(le.value), ([B, W]) => (w(), j("div", {
                              class: X(["item no-spacing", { selected: b.value === B }]),
                              onClick: () => De(B)
                            }, [
                              R(z, { size: "small" }, {
                                default: _(() => [
                                  P(L(W), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, pa))), 256))
                          ])
                        ]),
                        _: 1
                      }),
                      R(K, {
                        class: "group-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: _(() => [
                          R(Me, { size: "large-2" }, {
                            default: _(() => [
                              P(L(g(a)[b.value]), 1)
                            ]),
                            _: 1
                          }),
                          G("div", va, [
                            (w(!0), j(H, null, be(Object.entries(se.value), ([B, W]) => (w(), j("div", {
                              class: X(["item no-spacing", { selected: m.value.includes(B) }]),
                              onClick: () => Re(B),
                              key: B
                            }, [
                              R(z, { size: "small" }, {
                                default: _(() => [
                                  P(L(W.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, ma))), 128))
                          ])
                        ]),
                        _: 1
                      }),
                      R(K, {
                        class: "enabled-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: _(() => [
                          R(K, {
                            class: "header",
                            vertical: "center"
                          }, {
                            default: _(() => [
                              R(Me, {
                                class: "flex-max",
                                size: "large-2"
                              }, {
                                default: _(() => [
                                  P(L(C.orderTitle), 1)
                                ]),
                                _: 1
                              }),
                              R(z, {
                                class: "reset",
                                onClick: E[3] || (E[3] = () => Je()),
                                mood: "important-alt",
                                size: "small"
                              }, {
                                default: _(() => [
                                  P(L(C.resetLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          G("div", ha, [
                            G("div", ba, [
                              (w(!0), j(H, null, be(m.value, (B) => (w(), j("div", {
                                class: "item-container no-spacing",
                                ref_for: !0,
                                ref_key: "enabledColumnContainers",
                                ref: y
                              }, [
                                G("div", {
                                  class: X(["separator-top no-spacing", { "place-after": J.value !== void 0 && v.value !== void 0 && B === m.value[J.value] && J.value < m.value.indexOf(v.value) }])
                                }, null, 2),
                                R(K, {
                                  class: X(["item no-spacing", { dragged: B === v.value }]),
                                  ref_for: !0,
                                  ref_key: "enabledColumnElements",
                                  ref: c,
                                  style: Xe(B === v.value ? { top: ve.value } : void 0),
                                  vertical: "center"
                                }, {
                                  default: _(() => [
                                    g(r)[B].fixed ? (w(), F(z, {
                                      key: 0,
                                      class: X(["flex-max", { fixed: g(r)[B].fixed }]),
                                      size: "small"
                                    }, {
                                      default: _(() => [
                                        P(L(g(r)[B].label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])) : (w(), j(H, { key: 1 }, [
                                      R(Pe, {
                                        class: "move",
                                        onMousedown: (W) => Te(W, B),
                                        value: "ellipsis-vertical"
                                      }, null, 8, ["onMousedown"]),
                                      R(z, {
                                        class: "flex-max no-spacing",
                                        size: "small"
                                      }, {
                                        default: _(() => [
                                          P(L(g(r)[B].label), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      R(Pe, {
                                        class: "no-spacing remove",
                                        onClick: () => ot(B),
                                        value: "trash-can",
                                        backend: "regular"
                                      }, null, 8, ["onClick"])
                                    ], 64))
                                  ]),
                                  _: 2
                                }, 1032, ["class", "style"]),
                                G("div", {
                                  class: X(["separator-bottom no-spacing", { "place-after": J.value !== void 0 && v.value !== void 0 && B === m.value[J.value] && J.value >= m.value.indexOf(v.value) }])
                                }, null, 2)
                              ], 512))), 256))
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ], 64)) : (w(), F(K, {
                      key: 1,
                      class: "flex-max",
                      horizontal: "center",
                      vertical: "center"
                    }, {
                      default: _(() => [
                        R(z, { size: "small" }, {
                          default: _(() => [
                            P(L(C.noColumnsFoundLabel), 1)
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
                  default: _(() => [
                    R(_t, {
                      onClick: E[4] || (E[4] = () => lt(m.value)),
                      label: C.applyLabel,
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
const $a = /* @__PURE__ */ Oe(ga, [["__scopeId", "data-v-f095228a"]]);
export {
  Tr as ColumnHint,
  Ma as CommonTable,
  $a as KpiSelector
};
