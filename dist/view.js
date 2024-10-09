import { defineComponent as be, toRefs as Oe, ref as k, openBlock as w, createElementBlock as j, createVNode as R, unref as g, normalizeClass as G, createElementVNode as W, toDisplayString as L, withCtx as _, Fragment as H, renderList as he, createBlock as D, withDirectives as ur, createTextVNode as F, createCommentVNode as $, withModifiers as dn, computed as I, normalizeStyle as Ye, onMounted as cr, watch as Me, createSlots as dr, renderSlot as ht, normalizeProps as fr, guardReactiveProps as pr, nextTick as Yt, Teleport as vr } from "vue";
import { _ as Tt, E as mr } from "./Tooltip.vue_vue_type_style_index_0_lang-1df1b3e8.js";
import { I as Pe, A as K, C as hr } from "./Icon-53e685d0.js";
import { _ as Ee } from "./_plugin-vue_export-helper-dad06003.js";
import ce from "numeral";
import { cloneObject as br } from "./utils/clone.js";
import { D as gr, B as St, I as yr } from "./Input-301d9b5d.js";
import { L as kt, a as wr } from "./LineBarChart-7e6a2e7e.js";
import { I as z } from "./Info-38a17291.js";
import "./base-b0eb9adb.js";
import "./popper-2d1cdbf9.js";
import { C as _r, E as Sr, S as Cr, O as Or } from "./Option-f2991790.js";
import { L as Qt } from "./Link-882cf82b.js";
import { Separator as Er } from "./marker.js";
import { T as Rr } from "./Table-6dfe532d.js";
import { H as Ve } from "./Header-37ffd1ab.js";
import "./utils/error.js";
import "./match-b8889c93.js";
import "./tag-a5bec4a1.js";
import "./index-89580093.js";
import "./index-8cf906aa.js";
import "./Scrollable-bc459f53.js";
import "./datetime-31a2b505.js";
const xr = { class: "column-hint" }, Tr = /* @__PURE__ */ be({
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
    const t = e, { description: n, title: r, visible: s, iconValue: a, iconBackend: o } = Oe(t), u = k();
    return (b, m) => (w(), j("div", xr, [
      R(Pe, {
        value: g(a),
        backend: g(o),
        elevation: b.iconElevation,
        ref_key: "iconRef",
        ref: u,
        size: "small"
      }, null, 8, ["value", "backend", "elevation"]),
      R(Tt, {
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
const kr = /* @__PURE__ */ Ee(Tr, [["__scopeId", "data-v-36cbb3a6"]]);
function fn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Ar } = Object.prototype, { getPrototypeOf: At } = Object, nt = ((e) => (t) => {
  const n = Ar.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), oe = (e) => (e = e.toLowerCase(), (t) => nt(t) === e), rt = (e) => (t) => typeof t === e, { isArray: De } = Array, $e = rt("undefined");
function Nr(e) {
  return e !== null && !$e(e) && e.constructor !== null && !$e(e.constructor) && te(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const pn = oe("ArrayBuffer");
function Pr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && pn(e.buffer), t;
}
const Fr = rt("string"), te = rt("function"), vn = rt("number"), st = (e) => e !== null && typeof e == "object", Dr = (e) => e === !0 || e === !1, Qe = (e) => {
  if (nt(e) !== "object")
    return !1;
  const t = At(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Lr = oe("Date"), Br = oe("File"), jr = oe("Blob"), zr = oe("FileList"), Ir = (e) => st(e) && te(e.pipe), Ur = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || te(e.append) && ((t = nt(e)) === "formdata" || // detect form-data instance
  t === "object" && te(e.toString) && e.toString() === "[object FormData]"));
}, Mr = oe("URLSearchParams"), Vr = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function He(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), De(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const a = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = a.length;
    let u;
    for (r = 0; r < o; r++)
      u = a[r], t.call(null, e[u], u, e);
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
function Ct() {
  const { caseless: e } = bn(this) && this || {}, t = {}, n = (r, s) => {
    const a = e && mn(t, s) || s;
    Qe(t[a]) && Qe(r) ? t[a] = Ct(t[a], r) : Qe(r) ? t[a] = Ct({}, r) : De(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && He(arguments[r], n);
  return t;
}
const $r = (e, t, n, { allOwnKeys: r } = {}) => (He(t, (s, a) => {
  n && te(s) ? e[a] = fn(s, n) : e[a] = s;
}, { allOwnKeys: r }), e), Hr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), qr = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Jr = (e, t, n, r) => {
  let s, a, o;
  const u = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), a = s.length; a-- > 0; )
      o = s[a], (!r || r(o, e, t)) && !u[o] && (t[o] = e[o], u[o] = !0);
    e = n !== !1 && At(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, Wr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, Gr = (e) => {
  if (!e)
    return null;
  if (De(e))
    return e;
  let t = e.length;
  if (!vn(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Xr = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && At(Uint8Array)), Yr = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const a = s.value;
    t.call(e, a[0], a[1]);
  }
}, Qr = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Zr = oe("HTMLFormElement"), Kr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Zt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), es = oe("RegExp"), gn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  He(n, (s, a) => {
    let o;
    (o = t(s, a, e)) !== !1 && (r[a] = o || s);
  }), Object.defineProperties(e, r);
}, ts = (e) => {
  gn(e, (t, n) => {
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
}, ns = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((a) => {
      n[a] = !0;
    });
  };
  return De(e) ? r(e) : r(String(e).split(t)), n;
}, rs = () => {
}, ss = (e, t) => (e = +e, Number.isFinite(e) ? e : t), bt = "abcdefghijklmnopqrstuvwxyz", Kt = "0123456789", yn = {
  DIGIT: Kt,
  ALPHA: bt,
  ALPHA_DIGIT: bt + bt.toUpperCase() + Kt
}, as = (e = 16, t = yn.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function os(e) {
  return !!(e && te(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ls = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (st(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const a = De(r) ? [] : {};
        return He(r, (o, u) => {
          const b = n(o, s + 1);
          !$e(b) && (a[u] = b);
        }), t[s] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, is = oe("AsyncFunction"), us = (e) => e && (st(e) || te(e)) && te(e.then) && te(e.catch), f = {
  isArray: De,
  isArrayBuffer: pn,
  isBuffer: Nr,
  isFormData: Ur,
  isArrayBufferView: Pr,
  isString: Fr,
  isNumber: vn,
  isBoolean: Dr,
  isObject: st,
  isPlainObject: Qe,
  isUndefined: $e,
  isDate: Lr,
  isFile: Br,
  isBlob: jr,
  isRegExp: es,
  isFunction: te,
  isStream: Ir,
  isURLSearchParams: Mr,
  isTypedArray: Xr,
  isFileList: zr,
  forEach: He,
  merge: Ct,
  extend: $r,
  trim: Vr,
  stripBOM: Hr,
  inherits: qr,
  toFlatObject: Jr,
  kindOf: nt,
  kindOfTest: oe,
  endsWith: Wr,
  toArray: Gr,
  forEachEntry: Yr,
  matchAll: Qr,
  isHTMLForm: Zr,
  hasOwnProperty: Zt,
  hasOwnProp: Zt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: gn,
  freezeMethods: ts,
  toObjectSet: ns,
  toCamelCase: Kr,
  noop: rs,
  toFiniteNumber: ss,
  findKey: mn,
  global: hn,
  isContextDefined: bn,
  ALPHABET: yn,
  generateString: as,
  isSpecCompliantForm: os,
  toJSONObject: ls,
  isAsyncFn: is,
  isThenable: us
};
function B(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
f.inherits(B, Error, {
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
const wn = B.prototype, _n = {};
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
Object.defineProperties(B, _n);
Object.defineProperty(wn, "isAxiosError", { value: !0 });
B.from = (e, t, n, r, s, a) => {
  const o = Object.create(wn);
  return f.toFlatObject(e, o, function(b) {
    return b !== Error.prototype;
  }, (u) => u !== "isAxiosError"), B.call(o, e.message, t, n, r, s), o.cause = e, o.name = e.name, a && Object.assign(o, a), o;
};
const cs = null;
function Ot(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function Sn(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function en(e, t, n) {
  return e ? e.concat(t).map(function(s, a) {
    return s = Sn(s), !n && a ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function ds(e) {
  return f.isArray(e) && !e.some(Ot);
}
const fs = f.toFlatObject(f, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function at(e, t, n) {
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
      throw new B("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(v) || f.isTypedArray(v) ? b && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function c(v, h, S) {
    let x = v;
    if (v && !S && typeof v == "object") {
      if (f.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), v = JSON.stringify(v);
      else if (f.isArray(v) && ds(v) || (f.isFileList(v) || f.endsWith(h, "[]")) && (x = f.toArray(v)))
        return h = Sn(h), x.forEach(function(re, se) {
          !(f.isUndefined(re) || re === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? en([h], se, a) : o === null ? h : h + "[]",
            m(re)
          );
        }), !1;
    }
    return Ot(v) ? !0 : (t.append(en(S, h, a), m(v)), !1);
  }
  const y = [], A = Object.assign(fs, {
    defaultVisitor: c,
    convertValue: m,
    isVisitable: Ot
  });
  function C(v, h) {
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
        )) === !0 && C(x, h ? h.concat(q) : [q]);
      }), y.pop();
    }
  }
  if (!f.isObject(e))
    throw new TypeError("data must be an object");
  return C(e), t;
}
function tn(e) {
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
  this._pairs = [], e && at(e, this, t);
}
const Cn = Nt.prototype;
Cn.append = function(t, n) {
  this._pairs.push([t, n]);
};
Cn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, tn);
  } : tn;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function ps(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function On(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || ps, s = n && n.serialize;
  let a;
  if (s ? a = s(t, n) : a = f.isURLSearchParams(t) ? t.toString() : new Nt(t, n).toString(r), a) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class vs {
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
const nn = vs, En = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ms = typeof URLSearchParams < "u" ? URLSearchParams : Nt, hs = typeof FormData < "u" ? FormData : null, bs = typeof Blob < "u" ? Blob : null, gs = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ms,
    FormData: hs,
    Blob: bs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Rn = typeof window < "u" && typeof document < "u", ys = ((e) => Rn && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), ws = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Rn,
  hasStandardBrowserEnv: ys,
  hasStandardBrowserWebWorkerEnv: ws
}, Symbol.toStringTag, { value: "Module" })), ae = {
  ..._s,
  ...gs
};
function Ss(e, t) {
  return at(e, new ae.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, a) {
      return ae.isNode && f.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Cs(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Os(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let a;
  for (r = 0; r < s; r++)
    a = n[r], t[a] = e[a];
  return t;
}
function xn(e) {
  function t(n, r, s, a) {
    let o = n[a++];
    const u = Number.isFinite(+o), b = a >= n.length;
    return o = !o && f.isArray(s) ? s.length : o, b ? (f.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !u) : ((!s[o] || !f.isObject(s[o])) && (s[o] = []), t(n, r, s[o], a) && f.isArray(s[o]) && (s[o] = Os(s[o])), !u);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const n = {};
    return f.forEachEntry(e, (r, s) => {
      t(Cs(r), s, n, 0);
    }), n;
  }
  return null;
}
function Es(e, t, n) {
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
  transitional: En,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, a = f.isObject(t);
    if (a && f.isHTMLForm(t) && (t = new FormData(t)), f.isFormData(t))
      return s && s ? JSON.stringify(xn(t)) : t;
    if (f.isArrayBuffer(t) || f.isBuffer(t) || f.isStream(t) || f.isFile(t) || f.isBlob(t))
      return t;
    if (f.isArrayBufferView(t))
      return t.buffer;
    if (f.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let u;
    if (a) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ss(t, this.formSerializer).toString();
      if ((u = f.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const b = this.env && this.env.FormData;
        return at(
          u ? { "files[]": t } : t,
          b && new b(),
          this.formSerializer
        );
      }
    }
    return a || s ? (n.setContentType("application/json", !1), Es(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Pt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && f.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (o)
          throw u.name === "SyntaxError" ? B.from(u, B.ERR_BAD_RESPONSE, this, null, this.response) : u;
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
  Pt.headers[e] = {};
});
const Ft = Pt, Rs = f.toObjectSet([
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
]), xs = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && Rs[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, rn = Symbol("internals");
function Ue(e) {
  return e && String(e).trim().toLowerCase();
}
function Ze(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(Ze) : String(e);
}
function Ts(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const ks = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function As(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ns(e, t) {
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
class ot {
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
      (!y || s[y] === void 0 || m === !0 || m === void 0 && s[y] !== !1) && (s[y || b] = Ze(u));
    }
    const o = (u, b) => f.forEach(u, (m, c) => a(m, c, b));
    return f.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : f.isString(t) && (t = t.trim()) && !ks(t) ? o(xs(t), n) : t != null && a(n, t, r), this;
  }
  get(t, n) {
    if (t = Ue(t), t) {
      const r = f.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Ts(s);
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
      return !!(r && this[r] !== void 0 && (!n || gt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function a(o) {
      if (o = Ue(o), o) {
        const u = f.findKey(r, o);
        u && (!n || gt(r, r[u], u, n)) && (delete r[u], s = !0);
      }
    }
    return f.isArray(t) ? t.forEach(a) : a(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const a = n[r];
      (!t || gt(this, this[a], a, t, !0)) && (delete this[a], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return f.forEach(this, (s, a) => {
      const o = f.findKey(r, a);
      if (o) {
        n[o] = Ze(s), delete n[a];
        return;
      }
      const u = t ? As(a) : String(a).trim();
      u !== a && delete n[a], n[u] = Ze(s), r[u] = !0;
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
    const r = (this[rn] = this[rn] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(o) {
      const u = Ue(o);
      r[u] || (Ns(s, o), r[u] = !0);
    }
    return f.isArray(t) ? t.forEach(a) : a(t), this;
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
const de = ot;
function yt(e, t) {
  const n = this || Ft, r = t || n, s = de.from(r.headers);
  let a = r.data;
  return f.forEach(e, function(u) {
    a = u.call(n, a, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), a;
}
function Tn(e) {
  return !!(e && e.__CANCEL__);
}
function qe(e, t, n) {
  B.call(this, e ?? "canceled", B.ERR_CANCELED, t, n), this.name = "CanceledError";
}
f.inherits(qe, B, {
  __CANCEL__: !0
});
function Ps(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new B(
    "Request failed with status code " + n.status,
    [B.ERR_BAD_REQUEST, B.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Fs = ae.hasStandardBrowserEnv ? (
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
function Ds(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ls(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function kn(e, t) {
  return e && !Ds(t) ? Ls(e, t) : t;
}
const Bs = ae.hasStandardBrowserEnv ? (
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
function js(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function zs(e, t) {
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
    const C = c && m - c;
    return C ? Math.round(A * 1e3 / C) : void 0;
  };
}
function sn(e, t) {
  let n = 0;
  const r = zs(50, 250);
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
const Is = typeof XMLHttpRequest < "u", Us = Is && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const a = de.from(e.headers).normalize(), o = e.responseType;
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
    const y = kn(e.baseURL, e.url);
    c.open(e.method.toUpperCase(), On(y, e.params, e.paramsSerializer), !0), c.timeout = e.timeout;
    function A() {
      if (!c)
        return;
      const v = de.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), S = {
        data: !o || o === "text" || o === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: v,
        config: e,
        request: c
      };
      Ps(function(q) {
        n(q), b();
      }, function(q) {
        r(q), b();
      }, S), c = null;
    }
    if ("onloadend" in c ? c.onloadend = A : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(A);
    }, c.onabort = function() {
      c && (r(new B("Request aborted", B.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new B("Network Error", B.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let h = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const S = e.transitional || En;
      e.timeoutErrorMessage && (h = e.timeoutErrorMessage), r(new B(
        h,
        S.clarifyTimeoutError ? B.ETIMEDOUT : B.ECONNABORTED,
        e,
        c
      )), c = null;
    }, ae.hasStandardBrowserEnv) {
      const v = Bs(y) && e.xsrfCookieName && Fs.read(e.xsrfCookieName);
      v && a.set(e.xsrfHeaderName, v);
    }
    s === void 0 && a.setContentType(null), "setRequestHeader" in c && f.forEach(a.toJSON(), function(h, S) {
      c.setRequestHeader(S, h);
    }), f.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), o && o !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", sn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", sn(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (v) => {
      c && (r(!v || v.type ? new qe(null, e, c) : v), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const C = js(y);
    if (C && ae.protocols.indexOf(C) === -1) {
      r(new B("Unsupported protocol " + C + ":", B.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, Et = {
  http: cs,
  xhr: Us
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
const an = (e) => `- ${e}`, Ms = (e) => f.isFunction(e) || e === null || e === !1, An = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let o;
      if (r = n, !Ms(n) && (r = Et[(o = String(n)).toLowerCase()], r === void 0))
        throw new B(`Unknown adapter '${o}'`);
      if (r)
        break;
      s[o || "#" + a] = r;
    }
    if (!r) {
      const a = Object.entries(s).map(
        ([u, b]) => `adapter ${u} ` + (b === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? a.length > 1 ? `since :
` + a.map(an).join(`
`) : " " + an(a[0]) : "as no adapter specified";
      throw new B(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Et
};
function wt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new qe(null, e);
}
function on(e) {
  return wt(e), e.headers = de.from(e.headers), e.data = yt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), An.getAdapter(e.adapter || Ft.adapter)(e).then(function(r) {
    return wt(e), r.data = yt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = de.from(r.headers), r;
  }, function(r) {
    return Tn(r) || (wt(e), r && r.response && (r.response.data = yt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = de.from(r.response.headers))), Promise.reject(r);
  });
}
const ln = (e) => e instanceof de ? e.toJSON() : e;
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
    headers: (m, c) => s(ln(m), ln(c), !0)
  };
  return f.forEach(Object.keys(Object.assign({}, e, t)), function(c) {
    const y = b[c] || s, A = y(e[c], t[c], c);
    f.isUndefined(A) && y !== u || (n[c] = A);
  }), n;
}
const Nn = "1.6.1", Dt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Dt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const un = {};
Dt.transitional = function(t, n, r) {
  function s(a, o) {
    return "[Axios v" + Nn + "] Transitional option '" + a + "'" + o + (r ? ". " + r : "");
  }
  return (a, o, u) => {
    if (t === !1)
      throw new B(
        s(o, " has been removed" + (n ? " in " + n : "")),
        B.ERR_DEPRECATED
      );
    return n && !un[o] && (un[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, o, u) : !0;
  };
};
function Vs(e, t, n) {
  if (typeof e != "object")
    throw new B("options must be an object", B.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const a = r[s], o = t[a];
    if (o) {
      const u = e[a], b = u === void 0 || o(u, a, e);
      if (b !== !0)
        throw new B("option " + a + " must be " + b, B.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new B("Unknown option " + a, B.ERR_BAD_OPTION);
  }
}
const Rt = {
  assertOptions: Vs,
  validators: Dt
}, me = Rt.validators;
class et {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new nn(),
      response: new nn()
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
    r !== void 0 && Rt.assertOptions(r, {
      silentJSONParsing: me.transitional(me.boolean),
      forcedJSONParsing: me.transitional(me.boolean),
      clarifyTimeoutError: me.transitional(me.boolean)
    }, !1), s != null && (f.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : Rt.assertOptions(s, {
      encode: me.function,
      serialize: me.function
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
    ), n.headers = de.concat(o, a);
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
      const v = [on.bind(this), void 0];
      for (v.unshift.apply(v, u), v.push.apply(v, m), A = v.length, c = Promise.resolve(n); y < A; )
        c = c.then(v[y++], v[y++]);
      return c;
    }
    A = u.length;
    let C = n;
    for (y = 0; y < A; ) {
      const v = u[y++], h = u[y++];
      try {
        C = v(C);
      } catch (S) {
        h.call(this, S);
        break;
      }
    }
    try {
      c = on.call(this, C);
    } catch (v) {
      return Promise.reject(v);
    }
    for (y = 0, A = m.length; y < A; )
      c = c.then(m[y++], m[y++]);
    return c;
  }
  getUri(t) {
    t = Fe(this.defaults, t);
    const n = kn(t.baseURL, t.url);
    return On(n, t.params, t.paramsSerializer);
  }
}
f.forEach(["delete", "get", "head", "options"], function(t) {
  et.prototype[t] = function(n, r) {
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
  et.prototype[t] = n(), et.prototype[t + "Form"] = n(!0);
});
const Ke = et;
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
const $s = Lt;
function Hs(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function qs(e) {
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
const Js = xt;
function Pn(e) {
  const t = new Ke(e), n = fn(Ke.prototype.request, t);
  return f.extend(n, Ke.prototype, t, { allOwnKeys: !0 }), f.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Pn(Fe(e, s));
  }, n;
}
const M = Pn(Ft);
M.Axios = Ke;
M.CanceledError = qe;
M.CancelToken = $s;
M.isCancel = Tn;
M.VERSION = Nn;
M.toFormData = at;
M.AxiosError = B;
M.Cancel = M.CanceledError;
M.all = function(t) {
  return Promise.all(t);
};
M.spread = Hs;
M.isAxiosError = qs;
M.mergeConfig = Fe;
M.AxiosHeaders = de;
M.formToJSON = (e) => xn(f.isHTMLForm(e) ? new FormData(e) : e);
M.getAdapter = An.getAdapter;
M.HttpStatusCode = Js;
M.default = M;
const tt = M;
ce.localeData().delimiters.thousands = " ";
ce.localeData().delimiters.decimal = ",";
function Fn(e, t, n) {
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
function Ws(e, t, n, r) {
  const s = {};
  for (const a of Object.values(e)) {
    const o = a[r], u = Object.values(t).find(
      (b) => b[r] === o
    );
    s[o] = Fn(a, u, n);
  }
  return s;
}
const Gs = { class: "label" }, Xs = {
  important: "",
  size: "small"
}, Ys = { size: "small" }, Qs = /* @__PURE__ */ be({
  __name: "CellHint",
  props: {
    format: {},
    label: {},
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { format: n, label: r, title: s, url: a } = Oe(t), o = k(), u = k(!1), b = k(), m = (v) => v.map(({ name: h, valueFormatted: S }) => ({
      label: h,
      value: S
    })), c = (v) => v.map(({ name: h, rate: S, value: x }) => ({
      label: h,
      value: `${ce(x).format("0,0")} (${ce(S).format("0,0.00")}%)`
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
      const v = (await tt(a.value)).data;
      o.value = y(v);
    }, C = async () => {
      u.value = !0, await A();
    };
    return (v, h) => {
      var S;
      return w(), j("div", {
        class: G(["cell-hint", { visible: u.value }]),
        ref_key: "root",
        ref: b,
        onMouseover: C,
        onMouseleave: h[0] || (h[0] = (x) => u.value = !1)
      }, [
        W("span", Gs, L(g(r)), 1),
        R(Tt, {
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
            o.value ? (w(!0), j(H, { key: 0 }, he(o.value, ({ label: x, value: q }, re) => (w(), j("div", {
              key: `line-${re}`
            }, [
              W("b", Xs, L(x) + ": ", 1),
              W("span", Ys, L(q), 1)
            ]))), 128)) : (w(), D(kt, { key: 1 }))
          ]),
          _: 1
        }, 8, ["title", "visible", "virtual-ref"])
      ], 34);
    };
  }
});
const cn = /* @__PURE__ */ Ee(Qs, [["__scopeId", "data-v-23cadab0"]]), Zs = /* @__PURE__ */ be({
  __name: "DetailsSelector",
  props: {
    labels: {},
    open: { type: Boolean, default: !1 },
    title: {}
  },
  emits: ["hideDetails", "showDetails"],
  setup(e, { emit: t }) {
    const n = e, { labels: r, open: s, title: a } = Oe(n), o = k(!1), u = k(), b = () => {
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
      R(g(mr), {
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
          ur((w(), D(K, {
            class: "details-selector",
            vertical: "center"
          }, {
            default: _(() => [
              g(a) ? (w(), D(z, {
                key: 0,
                mood: "important-alt",
                size: "small"
              }, {
                default: _(() => [
                  F(L(g(a)), 1)
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
            [g(_r), c]
          ])
        ]),
        default: _(() => [
          (w(!0), j(H, null, he(g(r), (C, v) => (w(), D(z, {
            class: "dropdown-item",
            onClick: dn(() => m(v), ["stop"]),
            contrast: ""
          }, {
            default: _(() => [
              F(L(C), 1)
            ]),
            _: 2
          }, 1032, ["onClick"]))), 256))
        ]),
        _: 1
      }, 8, ["visible"])
    ]));
  }
});
const Ks = /* @__PURE__ */ be({
  __name: "InputWithSelect",
  props: ["value", "select", "items", "width"],
  emits: ["update:value", "update:select"],
  setup(e) {
    const t = e, n = k(t.value), r = k(t.select), s = I(() => t.width === "small" ? 50 : 100);
    return (a, o) => (w(), D(g(Sr), {
      modelValue: n.value,
      "onUpdate:modelValue": o[2] || (o[2] = (u) => n.value = u),
      onChange: o[3] || (o[3] = (u) => a.$emit("update:value", { value: u, operator: r.value })),
      placeholder: "",
      class: "input-with-select",
      size: "default",
      min: "0",
      style: Ye({ minWidth: `${80 + s.value}px` })
    }, {
      prepend: _(() => [
        R(Cr, {
          modelValue: r.value,
          "onUpdate:modelValue": o[0] || (o[0] = (u) => r.value = u),
          onChange: o[1] || (o[1] = (u) => a.$emit("update:select", { operator: u, value: n.value })),
          style: Ye(`width: ${s.value}px`),
          size: "default"
        }, {
          default: _(() => [
            (w(!0), j(H, null, he(e.items, (u, b) => (w(), D(Or, {
              key: b,
              value: b,
              label: u,
              size: "default",
              style: Ye({ textAlign: e.width === "small" ? "center" : "left" })
            }, null, 8, ["value", "label", "style"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "style"])
      ]),
      _: 1
    }, 8, ["modelValue", "style"]));
  }
});
const ea = /* @__PURE__ */ Ee(Ks, [["__scopeId", "data-v-e2be7f01"]]), ta = { class: "pagination" }, na = /* @__PURE__ */ be({
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
    const n = e, { currentPageSize: r, id: s, pageNumber: a, pageRadius: o, pageSizeLabel: u, pageSizes: b, rowCount: m } = Oe(n), c = I(() => Math.min(...b.value)), y = I(() => Math.ceil(m.value / r.value)), A = I(
      () => b.value.reduce((h, S) => (h[S] = S.toString(), h), {})
    ), C = I(() => {
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
    return (h, S) => (w(), j("div", ta, [
      g(m) > g(r) ? (w(), j(H, { key: 0 }, [
        g(a) > 0 ? (w(), D(z, {
          key: 0,
          class: "page",
          onClick: S[0] || (S[0] = () => t("update:pageNumber", 0)),
          mood: "important-alt"
        }, {
          default: _(() => [
            F("1")
          ]),
          _: 1
        })) : $("", !0),
        g(a) > g(o) ? (w(), D(z, {
          key: 1,
          class: "page-separator"
        }, {
          default: _(() => [
            F("…")
          ]),
          _: 1
        })) : $("", !0),
        (w(!0), j(H, null, he(C.value, (x) => (w(), D(z, {
          class: G(["page", { current: x === g(a) }]),
          onClick: () => t("update:pageNumber", x),
          key: x
        }, {
          default: _(() => [
            F(L(x + 1), 1)
          ]),
          _: 2
        }, 1032, ["onClick", "class"]))), 128)),
        g(a) < y.value - g(o) - 1 ? (w(), D(z, {
          key: 2,
          class: "page-separator"
        }, {
          default: _(() => [
            F("…")
          ]),
          _: 1
        })) : $("", !0),
        g(a) < y.value - 1 ? (w(), D(z, {
          key: 3,
          class: "page",
          onClick: S[1] || (S[1] = () => t("update:pageNumber", y.value - 1)),
          mood: "important-alt"
        }, {
          default: _(() => [
            F(L(y.value), 1)
          ]),
          _: 1
        })) : $("", !0),
        R(z, { class: "page-size-label" }, {
          default: _(() => [
            F(L(g(u)), 1)
          ]),
          _: 1
        })
      ], 64)) : $("", !0),
      g(m) > c.value ? (w(), D(gr, {
        key: 1,
        class: "page-size-selector no-spacing",
        "onUpdate:modelValue": S[2] || (S[2] = (x) => v(parseInt(x.toString()))),
        id: g(s),
        items: A.value,
        modelValue: g(r)
      }, {
        item: _(({ item: x }) => [
          F(L(x), 1)
        ]),
        _: 1
      }, 8, ["id", "items", "modelValue"])) : $("", !0)
    ]));
  }
});
const ra = /* @__PURE__ */ Ee(na, [["__scopeId", "data-v-c7e19feb"]]), sa = { class: "trend-chart-container" }, aa = { class: "trend-chart-content" }, oa = /* @__PURE__ */ be({
  __name: "TrendChart",
  props: {
    formatter: { type: Function },
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { formatter: n, title: r, url: s } = Oe(t), a = k(), o = k([]), u = k(), b = I(() => u.value ? Object.assign({}, u.value) : {}), m = I(() => {
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
    }), C = async () => {
      if (u.value)
        return;
      const h = (await tt({ url: s.value })).data;
      o.value = Object.keys(h), u.value = Object.values(h);
    }, v = async () => {
      await C();
    };
    return (h, S) => (w(), j("div", sa, [
      W("i", {
        class: "la la-eye secondary",
        ref_key: "iconRef",
        ref: a
      }, null, 512),
      R(Tt, {
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
          g(r) ? (w(), D(Ve, {
            key: 0,
            size: "large-2"
          }, {
            default: _(() => [
              F(L(g(r)), 1)
            ]),
            _: 1
          })) : $("", !0),
          W("div", aa, [
            u.value ? (w(), D(wr, {
              key: 0,
              activeLines: ["values"],
              formatters: { trend: g(n), values: g(n) },
              moods: { trend: { mood: y.value }, values: { mood: "important" } },
              styles: { trend: "line", values: "line" },
              values: { trend: A.value, values: b.value },
              "no-x-axis-labels": !0
            }, null, 8, ["formatters", "moods", "values"])) : (w(), D(kt, { key: 1 }))
          ])
        ]),
        _: 1
      }, 8, ["virtual-ref"])
    ]));
  }
});
const la = /* @__PURE__ */ Ee(oa, [["__scopeId", "data-v-c57a26a4"]]), ia = { class: "common-table" }, ua = {
  key: 0,
  class: "controls"
}, ca = ["onMouseover", "onMouseleave"], da = ["onClick"], _t = 50, fa = /* @__PURE__ */ be({
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
    uncolorizeLabel: {},
    noDataMessage: {}
  },
  emits: ["move:column", "update:loading", "update:orderBy"],
  setup(e, { emit: t }) {
    const n = e, r = async (l, i) => typeof l == "function" ? await l(i) : (await tt({
      ...l,
      params: {
        ...l.params,
        [i.primaryColumn]: i.primaryColumnValue
      }
    })).data, s = async (l, i) => typeof l == "function" ? await l(i) : (await tt({
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
      comparisonColumns: C,
      comparisonRequest: v,
      defaultOrderBy: h,
      detailsColumn: S,
      detailsRequests: x,
      dragColumns: q,
      fixedColumnNumber: re,
      inlineFilterOperators: se,
      inversedKpis: le,
      primaryColumn: V,
      primaryColumnAlias: fe,
      request: J,
      rows: Re,
      shortenColumns: ee,
      showInlineFilters: ge,
      showRowNumber: lt,
      showPagination: Je,
      showTopTotal: it,
      total: Le,
      totalColumnKey: ut,
      trendUrl: xe,
      noDataMessage: We
    } = Oe(n), Te = () => {
      const l = {};
      for (const i of Object.keys(c.value))
        i in se.value && (l[i] = {
          operator: Object.keys(se.value[i])[0],
          value: ""
        });
      return l;
    }, pe = k([]), O = k(void 0), E = k({}), P = k([]), X = k({}), ye = k([]), ve = k({}), we = k(!1), Be = k(!1), je = k([]), ze = k(!1), Y = k(Te()), _e = k(!0), ie = k(), Se = k(0), ke = k(20), Ie = k(0), Q = k(), ue = k(), Dn = I(() => {
      const l = {};
      return Be.value && (l.inline_filters = {
        icon: "filter"
      }), l;
    }), Ln = I(
      () => C != null && C.value ? Object.keys(C.value) : void 0
    ), Bt = I(
      () => ye.value.reduce((l, i) => (l[i] = br(c.value[i]), l), {})
    ), jt = I(() => {
      if (x != null && x.value)
        return Object.entries(x.value).reduce((l, [i, { label: d }]) => (l[i] = d, l), {});
    }), zt = I(() => [...pe.value].sort((l, i) => {
      const d = (() => {
        const p = ct(
          ie.value[0].reduce((N, U) => N[U], l),
          c.value[ie.value[0][0]].type
        ), T = ct(
          ie.value[0].reduce((N, U) => N[U], i),
          c.value[ie.value[0][0]].type
        );
        return p > T ? 1 : p < T ? -1 : 0;
      })();
      return ie.value[1] ? -d : d;
    })), It = I(() => J != null && J.value && !ze.value || !Je.value ? zt.value : zt.value.slice(
      Se.value * ke.value,
      (Se.value + 1) * ke.value
    )), Bn = (l) => {
      P.value.includes(l) || P.value.push(l);
    }, Ge = (l, i) => !ee.value || !ee.value.includes(l) ? !1 : String(i || "").length > _t, jn = (l) => !!l.tooltipTitle && !!l.tooltipContent, Xe = (l, i, d) => {
      var T;
      if (!d || !(C != null && C.value) || !(d in C.value) || C.value[d].format !== "difference")
        return;
      const p = ((T = le == null ? void 0 : le.value) == null ? void 0 : T.includes(i)) ?? !1;
      return l > 0 ? p ? "negative" : "positive" : l < 0 ? p ? "positive" : "negative" : "neutral";
    }, Ae = (l, i, d) => {
      if (l === null)
        return "";
      let p = ct(l, i);
      switch (i) {
        case "float":
          return ce(parseFloat(p)).format("0,0.00");
        case "int":
          return ce(parseInt(p)).format("0,0");
        case "money": {
          let T = "0,0";
          o.value > 0 && (T += "." + "0".repeat(o.value));
          const N = ce(parseFloat(p)).format(T);
          return b.value ? u.value + " " + N : N + " " + u.value;
        }
        case "money_capped": {
          const T = parseFloat(p.toFixed(o.value)) == 0;
          if (p > 0 && p < 1 && T) {
            const N = o.value === 0 ? 1 : ce(parseFloat("0." + "0".repeat(o.value - 1) + "1")).format(
              "0.0" + o.value
            );
            return b.value ? `< ${u.value} ${N}` : `< ${N} ${u.value}`;
          } else
            return Ae(l, "money", d);
        }
        case "percent": {
          let T = ce(parseFloat(p)).format("0,0.00") + "%";
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
    }, zn = async (l, i) => {
      if (E.value[l] && E.value[l][i[V.value]])
        return E.value[l][i[V.value]];
      const { rows: d } = await r(x.value[l].request, {
        row: i,
        primaryColumn: (fe == null ? void 0 : fe.value) ?? V.value,
        primaryColumnValue: i[V.value]
      });
      return E.value[l] || (E.value[l] = {}), E.value[l][i[V.value]] = Object.values(d), E.value[l][i[V.value]];
    }, Ut = (l, i) => {
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
    }, In = (l, i) => {
      const d = new URL(y.value[l].baseUrl, location.origin);
      if (Array.isArray(y.value[l].columns))
        for (const p of y.value[l].columns)
          d.searchParams.set(p, i[p]);
      else
        for (const [p, T] of Object.entries(y.value[l].columns))
          d.searchParams.set(T, i[p]);
      return d.toString();
    }, Un = (l) => {
      if (l.totalUrl)
        return new URL(l.totalUrl).toString();
      const i = new URL(l.baseUrl);
      return i.searchParams.set("total", "true"), i.toString();
    }, Mn = (l) => !ee.value || !ee.value.includes(l) ? -1 : je.value.indexOf(l), Vn = (l) => {
      if (l in Y.value)
        return Y.value[l].operator;
    }, $n = (l) => {
      if (l in Y.value)
        return Y.value[l].value;
    }, Mt = (l) => se.value[l], Hn = (l) => {
      const i = Mt(l);
      if (i)
        return Object.values(i).some((d) => d.size === "small") ? "small" : "normal";
    }, qn = (l) => {
      const i = Mt(l);
      return i ? Object.entries(i).reduce((d, [p, T]) => (d[p] = T.label, d), {}) : {};
    }, Jn = (l) => c.value[l].type === "string" ? "text" : "number", Vt = () => `Table_OrderBy_${location.pathname}`, Wn = () => `Table_PageSize_${location.pathname}`, ct = (l, i) => {
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
    }, Ce = (l, i, d, p = !1) => {
      const [T, N] = (() => !d || !(C != null && C.value) || !(d in C.value) ? [c.value[i].type, void 0] : [
        C.value[d].type ?? c.value[i].type,
        C.value[d].format
      ])();
      let U = Ae(l, T);
      return N === "difference" && (U = l > 0 ? `+${U}` : U), p ? Jt(U, i) : U;
    }, Gn = (l, i) => {
      if (!xe)
        return "";
      const d = new URL(
        i ? xe.value[i] : xe.value,
        location.origin
      );
      return d.searchParams.set((fe == null ? void 0 : fe.value) || V.value, l[V.value]), d.toString();
    }, $t = (l, i, d) => Ge(l, i) ? [] : d ? (S == null ? void 0 : S.value) === l ? ["flex-grow-1", "text-left"] : ee.value && ee.value.includes(l) && It.value.some((p) => Ge(l, p[l])) ? ["flex-grow-1", "text-left"] : ["flex-grow-1"] : ["flew-grow-1"], Xn = (l) => l in se.value, Yn = () => {
      ge.value && (we.value = !1);
    }, Ht = (l, i) => {
      if (!(A != null && A.value) || !(i in A.value))
        return !1;
      const d = A.value[i];
      return d === null ? !!l.url : !("disable_for" in d && d.disable_for.includes(l[V.value]));
    }, Qn = (l, i) => {
      const [d] = ye.value.splice(l, 1);
      ye.value.splice(i, 0, d), t("move:column", { from: l, to: i });
    }, Zn = (l) => {
      const i = P.value.indexOf(l);
      i < 0 || P.value.splice(i, 1);
    }, qt = (l, i) => {
      X.value[l] = i;
    }, Jt = (l, i) => !ee.value || !ee.value.includes(i) || je.value.includes(i) || String(l || "").length <= _t ? l : `${l.substring(0, _t - 3)}...`, Kn = (l) => {
      if (!ue.value)
        return;
      const i = {
        left: ue.value.$el.scrollLeft,
        top: ue.value.$el.scrollTop
      };
      delete ve.value[l[V.value]], Yt(() => {
        ue.value.$el.scrollTo(i);
      });
    }, er = async (l, i) => {
      if (!ue.value)
        return;
      const d = {
        left: ue.value.$el.scrollLeft,
        top: ue.value.$el.scrollTop
      };
      _e.value = !0, ve.value[i[V.value]] = await zn(l, i), Yt(() => {
        ue.value.$el.scrollTo(d), _e.value = !1;
      });
    }, tr = async (l = !1) => {
      await rr(l) || await nr(l) || await ft(l);
    }, dt = async (l) => {
      await pt(l), Se.value = l;
    }, Wt = async (l) => {
      const i = Wn();
      if (l === void 0) {
        const d = localStorage.getItem(i);
        d && (ke.value = parseInt(d));
      } else
        localStorage.setItem(i, l.toString()), await pt(0, l), Se.value = 0, ke.value = l;
    }, Gt = (l, { operator: i, value: d }) => {
      const p = Y.value[l].value !== d || Y.value[l].operator !== i && Y.value[l].value;
      Y.value[l] = { operator: i, value: d }, p && (ze.value = !1, dt(0));
    }, nr = async (l) => {
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
    }, ft = async (l) => {
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
            (C != null && C.value ? Object.keys(C.value)[0] : 0).toString()
          ],
          !1
        ],
        !1,
        l
      );
    }, rr = async (l) => {
      const i = localStorage.getItem(Vt());
      if (i) {
        const d = JSON.parse(i)[0][0];
        if (c.value[d])
          return await Ne(JSON.parse(i), !1, l), !0;
      } else
        return !1;
    }, sr = async (l, i, d) => {
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
      return T ? (O.value = [p, T], Xt()) : pe.value = Object.values(p.rows), ze.value = p.paginated === !1, Ie.value = p.row_count, p.detailedRows ? ve.value = p.detailedRows : ve.value = {}, p.total && !T && (Q.value = p.total), !0;
    }, Xt = () => {
      if (!O.value)
        return;
      const [l, i] = O.value;
      pe.value = Object.values(
        Ws(l.rows, i.rows, c.value, V.value)
      ), l.total && (Q.value = Fn(l.total, i.total, c.value));
    }, ar = () => {
      if (!(Re != null && Re.value))
        return !1;
      let l = Object.values(Re.value);
      for (const [i, d] of Object.entries(Y.value))
        d.value && (l = l.filter(
          (p) => se.value[i][d.operator].callback(
            p[i],
            d.value
          )
        ));
      return pe.value = l, Ie.value = l.length, !0;
    }, pt = async (l, i, d) => {
      l === void 0 && (l = Se.value), i === void 0 && (i = ke.value), d === void 0 && (d = ie.value), _e.value = !0, ar() || await sr(l, i, d), _e.value = !1;
    }, or = () => {
      ge.value && (we.value = !0);
    }, lr = (l) => {
      if (!ee.value || !ee.value.includes(l))
        return;
      const i = Mn(l);
      i >= 0 ? je.value.splice(i, 1) : je.value.push(l);
    }, ir = () => {
      Be.value = !Be.value, Be.value && (Y.value = Te());
    }, Ne = async (l, i = !0, d = !0) => {
      Se.value = 0, ie.value = l, d && await pt(void 0, void 0, l), i && localStorage.setItem(Vt(), JSON.stringify(l)), t("update:orderBy", l);
    };
    return cr(() => {
      ye.value = Object.keys(c.value), Q.value = Le == null ? void 0 : Le.value, Promise.all([ft(!1), Wt()]).then(() => tr(!0));
    }), Me(c, () => {
      ye.value = Object.keys(c.value), Y.value = Te(), O && Xt();
    }), Me(_e, () => {
      t("update:loading", _e.value);
    }), h && Me(h, (l, i) => {
      (l == null ? void 0 : l[0][0]) !== (i == null ? void 0 : i[0][0]) && ft(!0);
    }), J && Me(
      J,
      () => {
        ze.value = !1, dt(0);
      },
      { deep: !0 }
    ), (l, i) => (w(), j("div", ia, [
      g(Je) ? (w(), j("div", ua, [
        R(ra, {
          "onUpdate:pageNumber": i[0] || (i[0] = (d) => dt(d)),
          "onUpdate:currentPageSize": i[1] || (i[1] = (d) => Wt(d)),
          currentPageSize: ke.value,
          pageNumber: Se.value,
          pageSizeLabel: l.pageSizeLabel,
          rowCount: Ie.value
        }, null, 8, ["currentPageSize", "pageNumber", "pageSizeLabel", "rowCount"])
      ])) : $("", !0),
      W("div", {
        class: "table-container",
        onMouseover: i[7] || (i[7] = () => or()),
        onMouseout: i[8] || (i[8] = () => Yn())
      }, [
        W("div", {
          class: G(["action-buttons", { active: we.value }])
        }, [
          g(ge) ? (w(), D(St, {
            key: 0,
            onClick: i[2] || (i[2] = () => ir()),
            icon: Be.value ? "trash-can" : "filter",
            mood: "positive"
          }, null, 8, ["icon"])) : $("", !0)
        ], 2),
        ie.value ? (w(), D(Rr, {
          key: 0,
          ref_key: "table",
          ref: ue,
          onAddColoredMetric: i[3] || (i[3] = (d) => Bn(d)),
          "onMove:column": i[4] || (i[4] = ({ from: d, to: p }) => Qn(d, p)),
          onRemoveColoredMetric: i[5] || (i[5] = (d) => Zn(d)),
          "onUpdate:orderBy": i[6] || (i[6] = (d) => Ne(d)),
          additionalHeaders: Dn.value,
          cellClasses: g(a),
          colorMetrics: g(m),
          coloredMetrics: P.value,
          columns: Bt.value,
          comparisonColumnKeys: Ln.value,
          detailsRows: ve.value,
          dragColumns: g(q),
          fixedColumnNumber: g(re),
          inversedKpis: g(le),
          orderBy: ie.value,
          primaryColumn: g(V),
          rows: It.value,
          showRowNumber: g(lt),
          showTotal: !!Q.value,
          showTopTotal: g(it),
          noDataMessage: g(We)
        }, dr({
          colorizeLabel: _(({ enabled: d }) => [
            R(z, {
              mood: "white",
              size: "small"
            }, {
              default: _(() => [
                d ? (w(), j(H, { key: 0 }, [
                  F(L(l.uncolorizeLabel), 1)
                ], 64)) : (w(), j(H, { key: 1 }, [
                  F(L(l.colorizeLabel), 1)
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
                F("#")
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
                F(L(d), 1)
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
                F("#")
              ]),
              _: 1
            })
          ]),
          column: _(({ columnKey: d, isGhost: p }) => [
            ht(l.$slots, "columnAdditional", {
              columnKey: d,
              isGhost: p
            }, void 0, !0),
            W("div", {
              class: "d-flex align-items-center",
              onMouseover: () => qt(d, !0),
              onMouseleave: () => qt(d, !1)
            }, [
              R(z, {
                class: "column-label",
                contrast: "",
                size: "small"
              }, {
                default: _(() => [
                  F(L(g(c)[d].label), 1)
                ]),
                _: 2
              }, 1024),
              !p && jn(g(c)[d]) ? (w(), D(kr, {
                key: 0,
                description: g(c)[d].tooltipContent,
                title: g(c)[d].tooltipTitle,
                visible: X.value[d],
                "icon-backend": "regular"
              }, null, 8, ["description", "title", "visible"])) : $("", !0)
            ], 40, ca)
          ]),
          additionalHeader: _(({ additionalHeader: d, columnKey: p }) => [
            d === "inline_filters" && Xn(p) ? (w(), D(ea, {
              key: 0,
              value: $n(p),
              "onUpdate:value": (T) => Gt(p, T),
              type: Jn(p),
              select: Vn(p),
              "onUpdate:select": (T) => Gt(p, T),
              items: qn(p),
              width: Hn(p)
            }, null, 8, ["value", "onUpdate:value", "type", "select", "onUpdate:select", "items", "width"])) : $("", !0)
          ]),
          total: _(({ columnKey: d, subcolumnKey: p, values: T }) => [
            ht(l.$slots, "total", {
              columnKey: d,
              subcolumnKey: p,
              values: T,
              row: Q.value
            }, () => {
              var N;
              return [
                l.totalTitle && d === g(ut) ? (w(), D(z, {
                  key: 0,
                  class: "total-label",
                  contrast: "",
                  size: "small"
                }, {
                  default: _(() => [
                    typeof l.totalTitle == "function" ? (w(), j(H, { key: 0 }, [
                      F(L(l.totalTitle(Ie.value ?? pe.value.length)), 1)
                    ], 64)) : (w(), j(H, { key: 1 }, [
                      F(L(l.totalTitle) + ": " + L(Ie.value ?? pe.value.length), 1)
                    ], 64))
                  ]),
                  _: 1
                })) : Q.value ? (w(), j(H, { key: 1 }, [
                  Q.value && Q.value[d] >= 0.01 && d in g(y) ? (w(), D(cn, {
                    key: 0,
                    format: g(y)[d].format,
                    label: Jt(Ae(Q.value[d], g(c)[d].type, g(C) && p ? g(C)[p].format : void 0), d),
                    title: g(y)[d].title,
                    url: Un(g(y)[d])
                  }, null, 8, ["format", "label", "title", "url"])) : p ? (w(), D(z, {
                    key: 1,
                    class: "total-label",
                    mood: Xe((N = Q.value[d]) == null ? void 0 : N[p], d, p),
                    contrast: "",
                    size: "small"
                  }, {
                    default: _(() => {
                      var U;
                      return [
                        F(L(Ce((U = Q.value[d]) == null ? void 0 : U[p], d, p)), 1)
                      ];
                    }),
                    _: 2
                  }, 1032, ["mood"])) : (w(), D(z, {
                    key: 2,
                    class: "total-label",
                    mood: Xe(Q.value[d], d, p),
                    contrast: "",
                    size: "small"
                  }, {
                    default: _(() => [
                      F(L(Ce(Q.value[d], d)), 1)
                    ]),
                    _: 2
                  }, 1032, ["mood"]))
                ], 64)) : $("", !0)
              ];
            }, !0)
          ]),
          _: 2
        }, [
          g(C) ? {
            name: "secondaryColumn",
            fn: _(({ subcolumnKey: d }) => [
              d ? (w(), D(z, {
                key: 0,
                class: "column-label",
                contrast: "",
                size: "small"
              }, {
                default: _(() => [
                  F(L(g(C)[d].label), 1)
                ]),
                _: 2
              }, 1024)) : $("", !0)
            ]),
            key: "0"
          } : void 0,
          he(Object.keys(Bt.value), (d) => ({
            name: `row-${d}`,
            fn: _(({ columnKey: p, index: T, row: N, spanIndex: U, subcolumnKey: ne, subindex: vt, value: Z }) => [
              ht(l.$slots, "row-" + p, fr(pr({
                columnKey: p,
                index: T,
                row: N,
                spanIndex: U,
                subcolumnKey: ne,
                subindex: vt,
                value: Z
              })), () => [
                vt === void 0 && p === "trend" && g(xe) ? (w(), D(la, {
                  key: 0,
                  class: G($t(p, Z, N.rowInfo.detailable)),
                  formatter: (mt) => Ae(mt, "int"),
                  title: l.trendChartTitle,
                  url: Gn(N, ne)
                }, null, 8, ["class", "formatter", "title", "url"])) : N.rowInfo.detailable && p === g(S) ? (w(), j(H, { key: 1 }, [
                  Ht(N, p) && N.rowInfo.detailable ? (w(), D(Qt, {
                    key: 0,
                    to: Ut(g(A)[p], N).toString(),
                    "is-external": !!N.url,
                    contrast: "",
                    size: "small"
                  }, {
                    default: _(() => [
                      F(L(Ce(Z, p, ne, !0)), 1)
                    ]),
                    _: 2
                  }, 1032, ["to", "is-external"])) : (w(), D(z, {
                    key: 1,
                    mood: Xe(Z, p, ne),
                    contrast: "",
                    size: "small"
                  }, {
                    default: _(() => [
                      F(L(Ce(Z, p, ne)), 1)
                    ]),
                    _: 2
                  }, 1032, ["mood"]))
                ], 64)) : Ht(N, p) && N.rowInfo.detailable ? (w(), D(Qt, {
                  key: 2,
                  to: Ut(g(A)[p], N).toString(),
                  "is-external": !!N.url,
                  contrast: "",
                  size: "small"
                }, {
                  default: _(() => [
                    F(L(Ce(Z, p, ne, !0)), 1)
                  ]),
                  _: 2
                }, 1032, ["to", "is-external"])) : vt === void 0 && Z >= 0.01 && p in g(y) ? (w(), D(cn, {
                  key: 3,
                  format: g(y)[p].format,
                  label: Ce(Z, p, ne, !0),
                  title: g(y)[p].title,
                  url: In(p, N)
                }, null, 8, ["format", "label", "title", "url"])) : (w(), D(z, {
                  key: 4,
                  class: G($t(p, Z, N.rowInfo.detailable)),
                  mood: Xe(Z, p, ne),
                  contrast: "",
                  size: "small"
                }, {
                  default: _(() => [
                    F(L(Ce(Z, p, ne, !0)), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "mood"])),
                Ge(p, Z) ? (w(), j("i", {
                  key: 5,
                  class: G(["flex-grow-1 expand-column fa", je.value.includes(p) ? "fa-compress-alt" : "fa-expand-alt"]),
                  onClick: () => lr(p)
                }, null, 10, da)) : $("", !0)
              ], !0),
              jt.value && N.rowInfo.detailable && p === g(S) ? (w(), j(H, { key: 0 }, [
                Ge(p, Z) ? $("", !0) : (w(), D(Er, { key: 0 })),
                R(Zs, {
                  onHideDetails: () => Kn(N),
                  onShowDetails: (mt) => er(mt, N),
                  labels: jt.value,
                  open: ve.value[N[g(V)]] !== void 0,
                  title: l.detailsSelectorTitle
                }, null, 8, ["onHideDetails", "onShowDetails", "labels", "open", "title"])
              ], 64)) : $("", !0)
            ])
          }))
        ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "dragColumns", "fixedColumnNumber", "inversedKpis", "orderBy", "primaryColumn", "rows", "showRowNumber", "showTotal", "showTopTotal", "noDataMessage"])) : $("", !0)
      ], 32),
      W("div", {
        class: G(["loading-overlay", { visible: _e.value }])
      }, [
        R(kt)
      ], 2)
    ]));
  }
});
const $a = /* @__PURE__ */ Ee(fa, [["__scopeId", "data-v-3156fe5f"]]), pa = { class: "scrollable flex-max no-spacing" }, va = ["onClick"], ma = { class: "scrollable flex-max no-spacing" }, ha = ["onClick"], ba = { class: "scrollable" }, ga = { class: "items flex-max no-spacing" }, ya = /* @__PURE__ */ be({
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
    const n = e, { columns: r, defaultValue: s, groupNames: a, modelValue: o, showModalLabel: u } = Oe(n), b = k(Object.keys(a.value)[0]), m = k([...o.value]), c = k([]), y = k([]), A = k(""), C = k(void 0), v = k(void 0), h = k(void 0), S = k(void 0), x = k(void 0), q = I(() => Object.fromEntries(
      Object.entries(r.value).filter(
        ([O, E]) => E.fixed !== !0 && (A.value.trim() === "" || E.label.toLowerCase().includes(A.value.trim().toLowerCase()))
      )
    )), re = I(() => Object.keys(a.value).reduce((O, E) => (O[E] = Object.fromEntries(
      Object.entries(q.value).filter(([P, X]) => X.group === E)
    ), O), {})), se = I(
      () => b.value === void 0 ? void 0 : re.value[b.value]
    ), le = I(() => Object.fromEntries(
      Object.entries(a.value).filter(
        ([O, E]) => Object.values(q.value).some((P) => P.group === O)
      )
    )), V = I(() => {
      if (!(h.value === void 0 || S.value === void 0 || x.value === void 0))
        return h.value + x.value - S.value;
    }), fe = I(() => {
      if (V.value !== void 0)
        return `${V.value}px`;
    }), J = I(() => {
      if (v.value === void 0 || V.value === void 0)
        return;
      const O = m.value.indexOf(v.value), E = O - 1 - m.value.slice(0, O).reverse().findIndex((we) => r.value[we].fixed === !0);
      let P = m.value.slice(O + 1).findIndex((we) => r.value[we].fixed === !0);
      P >= 0 ? P += O + 1 : P = m.value.length;
      const X = Re(m.value[E]), ye = X.offsetHeight, ve = Math.min(
        Math.round((V.value - X.offsetTop) / ye - 1),
        P - E - 1
      );
      return E + ve + 1;
    }), Re = (O) => y.value[m.value.indexOf(O)], ee = (O) => c.value[m.value.indexOf(O)], ge = (O = !1, E) => {
      E && E.target !== E.currentTarget || (O && (m.value = [...o.value]), C.value = !1, b.value = Object.keys(a.value)[0]);
    }, lt = (O) => {
      const E = m.value.indexOf(O);
      E >= 0 && m.value.splice(E, 1);
    }, Je = () => {
      m.value = [...s.value];
    }, it = (O) => {
      const E = [...O];
      t("update:modelValue", E), ge(!1);
    }, Le = (O) => {
      b.value = O.toString();
    }, ut = () => {
      C.value = !0;
    }, xe = (O) => {
      const E = m.value.indexOf(O);
      E >= 0 ? m.value.splice(E, 1) : m.value.push(O);
    }, We = (O) => {
      x.value = O.clientY;
    }, Te = () => {
      const O = J.value;
      if (v.value !== void 0 && O !== void 0) {
        const E = m.value.indexOf(v.value);
        m.value.splice(E, 1), m.value.splice(O, 0, v.value);
      }
      v.value = void 0, h.value = void 0, S.value = void 0, x.value = void 0, window.removeEventListener("mousemove", We), window.removeEventListener("mouseup", Te);
    }, pe = (O, E) => {
      v.value = E, h.value = ee(E).$el.offsetTop, S.value = O.clientY, x.value = O.clientY, window.addEventListener("mousemove", We), window.addEventListener("mouseup", Te);
    };
    return Me(A, (O) => {
      O ? (!b.value || !(b.value in le.value)) && (b.value = Object.keys(le.value)[0]) : b.value || (b.value = Object.keys(le.value)[0]);
    }), (O, E) => (w(), j(H, null, [
      R(St, {
        onClick: E[0] || (E[0] = () => ut()),
        disabled: O.disabled,
        label: g(u),
        mood: "neutral",
        tabindex: "-1"
      }, null, 8, ["disabled", "label"]),
      (w(), D(vr, { to: "#app > .app-container" }, [
        R(K, {
          class: G(["kpi-selector-container no-spacing", { visible: C.value, hidden: C.value === !1 }]),
          onClick: E[5] || (E[5] = dn((P) => ge(!0, P), ["stop"])),
          column: "",
          horizontal: "center",
          vertical: "center"
        }, {
          default: _(() => [
            R(hr, { class: "kpi-selector" }, {
              default: _(() => [
                R(K, {
                  class: "title",
                  vertical: "center"
                }, {
                  default: _(() => [
                    R(Ve, {
                      class: "flex-max",
                      size: "large-2"
                    }, {
                      default: _(() => [
                        F(L(O.title), 1)
                      ]),
                      _: 1
                    }),
                    R(K, {
                      class: "flex-max no-spacing search-container",
                      vertical: "center"
                    }, {
                      default: _(() => [
                        R(yr, {
                          class: "flex-max search",
                          modelValue: A.value,
                          "onUpdate:modelValue": E[1] || (E[1] = (P) => A.value = P),
                          placeholder: O.filterLabel
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
                          onClick: E[2] || (E[2] = () => ge(!0)),
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
                          R(Ve, { size: "large-2" }, {
                            default: _(() => [
                              F(L(O.groupsTitle), 1)
                            ]),
                            _: 1
                          }),
                          W("div", pa, [
                            (w(!0), j(H, null, he(Object.entries(le.value), ([P, X]) => (w(), j("div", {
                              class: G(["item no-spacing", { selected: b.value === P }]),
                              onClick: () => Le(P)
                            }, [
                              R(z, { size: "small" }, {
                                default: _(() => [
                                  F(L(X), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, va))), 256))
                          ])
                        ]),
                        _: 1
                      }),
                      R(K, {
                        class: "group-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: _(() => [
                          R(Ve, { size: "large-2" }, {
                            default: _(() => [
                              F(L(g(a)[b.value]), 1)
                            ]),
                            _: 1
                          }),
                          W("div", ma, [
                            (w(!0), j(H, null, he(Object.entries(se.value), ([P, X]) => (w(), j("div", {
                              class: G(["item no-spacing", { selected: m.value.includes(P) }]),
                              onClick: () => xe(P),
                              key: P
                            }, [
                              R(z, { size: "small" }, {
                                default: _(() => [
                                  F(L(X.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, ha))), 128))
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
                              R(Ve, {
                                class: "flex-max",
                                size: "large-2"
                              }, {
                                default: _(() => [
                                  F(L(O.orderTitle), 1)
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
                                  F(L(O.resetLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          W("div", ba, [
                            W("div", ga, [
                              (w(!0), j(H, null, he(m.value, (P) => (w(), j("div", {
                                class: "item-container no-spacing",
                                ref_for: !0,
                                ref_key: "enabledColumnContainers",
                                ref: y
                              }, [
                                W("div", {
                                  class: G(["separator-top no-spacing", { "place-after": J.value !== void 0 && v.value !== void 0 && P === m.value[J.value] && J.value < m.value.indexOf(v.value) }])
                                }, null, 2),
                                R(K, {
                                  class: G(["item no-spacing", { dragged: P === v.value }]),
                                  ref_for: !0,
                                  ref_key: "enabledColumnElements",
                                  ref: c,
                                  style: Ye(P === v.value ? { top: fe.value } : void 0),
                                  vertical: "center"
                                }, {
                                  default: _(() => [
                                    g(r)[P].fixed ? (w(), D(z, {
                                      key: 0,
                                      class: G(["flex-max", { fixed: g(r)[P].fixed }]),
                                      size: "small"
                                    }, {
                                      default: _(() => [
                                        F(L(g(r)[P].label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])) : (w(), j(H, { key: 1 }, [
                                      R(Pe, {
                                        class: "move",
                                        onMousedown: (X) => pe(X, P),
                                        value: "ellipsis-vertical"
                                      }, null, 8, ["onMousedown"]),
                                      R(z, {
                                        class: "flex-max no-spacing",
                                        size: "small"
                                      }, {
                                        default: _(() => [
                                          F(L(g(r)[P].label), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      R(Pe, {
                                        class: "no-spacing remove",
                                        onClick: () => lt(P),
                                        value: "trash-can",
                                        backend: "regular"
                                      }, null, 8, ["onClick"])
                                    ], 64))
                                  ]),
                                  _: 2
                                }, 1032, ["class", "style"]),
                                W("div", {
                                  class: G(["separator-bottom no-spacing", { "place-after": J.value !== void 0 && v.value !== void 0 && P === m.value[J.value] && J.value >= m.value.indexOf(v.value) }])
                                }, null, 2)
                              ], 512))), 256))
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ], 64)) : (w(), D(K, {
                      key: 1,
                      class: "flex-max",
                      horizontal: "center",
                      vertical: "center"
                    }, {
                      default: _(() => [
                        R(z, { size: "small" }, {
                          default: _(() => [
                            F(L(O.noColumnsFoundLabel), 1)
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
                    R(St, {
                      onClick: E[4] || (E[4] = () => it(m.value)),
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
const Ha = /* @__PURE__ */ Ee(ya, [["__scopeId", "data-v-f095228a"]]);
export {
  kr as ColumnHint,
  $a as CommonTable,
  Ha as KpiSelector
};
