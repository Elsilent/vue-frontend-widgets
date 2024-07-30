import { defineComponent as ge, toRefs as Oe, ref as A, openBlock as w, createElementBlock as j, createVNode as x, unref as g, normalizeClass as X, createElementVNode as G, toDisplayString as F, withCtx as _, Fragment as H, renderList as be, createBlock as B, onUnmounted as ir, withModifiers as _t, createTextVNode as P, createCommentVNode as M, computed as I, normalizeStyle as Xe, onMounted as ur, watch as Ve, createSlots as cr, renderSlot as mt, normalizeProps as dr, guardReactiveProps as fr, nextTick as Yt, Teleport as pr } from "vue";
import { _ as Tt, T as vr } from "./Tooltip.vue_vue_type_style_index_0_lang-5b491e19.js";
import { I as Pe, A as Z, C as mr } from "./Icon-53e685d0.js";
import { _ as ye } from "./_plugin-vue_export-helper-dad06003.js";
import he from "numeral";
import { D as hr, B as St, I as br } from "./Input-67b6bfb1.js";
import { L as kt, a as gr } from "./LineBarChart-594cb504.js";
import { I as z } from "./Info-38a17291.js";
import { B as yr, E as wr, S as _r, O as Sr } from "./Option-7cba5362.js";
import "./popper-d5aadcf3.js";
import { L as Qt } from "./Link-882cf82b.js";
import { Separator as Cr } from "./marker.js";
import { Header as $e } from "./label.js";
import "./datetime-31a2b505.js";
import "./utils/error.js";
import "./match-b8889c93.js";
const Or = { class: "column-hint" }, Er = /* @__PURE__ */ ge({
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
    const t = e, { description: n, title: r, visible: s, iconValue: a, iconBackend: o } = Oe(t), u = A();
    return (b, m) => (w(), j("div", Or, [
      x(Pe, {
        value: g(a),
        backend: g(o),
        elevation: b.iconElevation,
        ref_key: "iconRef",
        ref: u,
        size: "small"
      }, null, 8, ["value", "backend", "elevation"]),
      x(Tt, {
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
const xr = /* @__PURE__ */ ye(Er, [["__scopeId", "data-v-36cbb3a6"]]);
function dn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Rr } = Object.prototype, { getPrototypeOf: At } = Object, tt = ((e) => (t) => {
  const n = Rr.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), oe = (e) => (e = e.toLowerCase(), (t) => tt(t) === e), nt = (e) => (t) => typeof t === e, { isArray: Le } = Array, Me = nt("undefined");
function Tr(e) {
  return e !== null && !Me(e) && e.constructor !== null && !Me(e.constructor) && te(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const fn = oe("ArrayBuffer");
function kr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && fn(e.buffer), t;
}
const Ar = nt("string"), te = nt("function"), pn = nt("number"), rt = (e) => e !== null && typeof e == "object", Nr = (e) => e === !0 || e === !1, Ye = (e) => {
  if (tt(e) !== "object")
    return !1;
  const t = At(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Pr = oe("Date"), Fr = oe("File"), Lr = oe("Blob"), Dr = oe("FileList"), Br = (e) => rt(e) && te(e.pipe), jr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || te(e.append) && ((t = tt(e)) === "formdata" || // detect form-data instance
  t === "object" && te(e.toString) && e.toString() === "[object FormData]"));
}, zr = oe("URLSearchParams"), Ir = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
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
const mn = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), hn = (e) => !Me(e) && e !== mn;
function Ct() {
  const { caseless: e } = hn(this) && this || {}, t = {}, n = (r, s) => {
    const a = e && vn(t, s) || s;
    Ye(t[a]) && Ye(r) ? t[a] = Ct(t[a], r) : Ye(r) ? t[a] = Ct({}, r) : Le(r) ? t[a] = r.slice() : t[a] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && He(arguments[r], n);
  return t;
}
const Ur = (e, t, n, { allOwnKeys: r } = {}) => (He(t, (s, a) => {
  n && te(s) ? e[a] = dn(s, n) : e[a] = s;
}, { allOwnKeys: r }), e), Vr = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), $r = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, Mr = (e, t, n, r) => {
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
}, Hr = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, qr = (e) => {
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
}, Jr = ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && At(Uint8Array)), Wr = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const a = s.value;
    t.call(e, a[0], a[1]);
  }
}, Gr = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Xr = oe("HTMLFormElement"), Yr = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), Zt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Qr = oe("RegExp"), bn = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  He(n, (s, a) => {
    let o;
    (o = t(s, a, e)) !== !1 && (r[a] = o || s);
  }), Object.defineProperties(e, r);
}, Zr = (e) => {
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
}, Kr = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((a) => {
      n[a] = !0;
    });
  };
  return Le(e) ? r(e) : r(String(e).split(t)), n;
}, es = () => {
}, ts = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ht = "abcdefghijklmnopqrstuvwxyz", Kt = "0123456789", gn = {
  DIGIT: Kt,
  ALPHA: ht,
  ALPHA_DIGIT: ht + ht.toUpperCase() + Kt
}, ns = (e = 16, t = gn.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function rs(e) {
  return !!(e && te(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ss = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (rt(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const a = Le(r) ? [] : {};
        return He(r, (o, u) => {
          const b = n(o, s + 1);
          !Me(b) && (a[u] = b);
        }), t[s] = void 0, a;
      }
    }
    return r;
  };
  return n(e, 0);
}, as = oe("AsyncFunction"), os = (e) => e && (rt(e) || te(e)) && te(e.then) && te(e.catch), f = {
  isArray: Le,
  isArrayBuffer: fn,
  isBuffer: Tr,
  isFormData: jr,
  isArrayBufferView: kr,
  isString: Ar,
  isNumber: pn,
  isBoolean: Nr,
  isObject: rt,
  isPlainObject: Ye,
  isUndefined: Me,
  isDate: Pr,
  isFile: Fr,
  isBlob: Lr,
  isRegExp: Qr,
  isFunction: te,
  isStream: Br,
  isURLSearchParams: zr,
  isTypedArray: Jr,
  isFileList: Dr,
  forEach: He,
  merge: Ct,
  extend: Ur,
  trim: Ir,
  stripBOM: Vr,
  inherits: $r,
  toFlatObject: Mr,
  kindOf: tt,
  kindOfTest: oe,
  endsWith: Hr,
  toArray: qr,
  forEachEntry: Wr,
  matchAll: Gr,
  isHTMLForm: Xr,
  hasOwnProperty: Zt,
  hasOwnProp: Zt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: bn,
  freezeMethods: Zr,
  toObjectSet: Kr,
  toCamelCase: Yr,
  noop: es,
  toFiniteNumber: ts,
  findKey: vn,
  global: mn,
  isContextDefined: hn,
  ALPHABET: gn,
  generateString: ns,
  isSpecCompliantForm: rs,
  toJSONObject: ss,
  isAsyncFn: as,
  isThenable: os
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
const yn = L.prototype, wn = {};
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
Object.defineProperties(L, wn);
Object.defineProperty(yn, "isAxiosError", { value: !0 });
L.from = (e, t, n, r, s, a) => {
  const o = Object.create(yn);
  return f.toFlatObject(e, o, function(b) {
    return b !== Error.prototype;
  }, (u) => u !== "isAxiosError"), L.call(o, e.message, t, n, r, s), o.cause = e, o.name = e.name, a && Object.assign(o, a), o;
};
const ls = null;
function Ot(e) {
  return f.isPlainObject(e) || f.isArray(e);
}
function _n(e) {
  return f.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function en(e, t, n) {
  return e ? e.concat(t).map(function(s, a) {
    return s = _n(s), !n && a ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function is(e) {
  return f.isArray(e) && !e.some(Ot);
}
const us = f.toFlatObject(f, {}, null, function(t) {
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
      throw new L("Blob is not supported. Use a Buffer instead.");
    return f.isArrayBuffer(v) || f.isTypedArray(v) ? b && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function c(v, h, S) {
    let T = v;
    if (v && !S && typeof v == "object") {
      if (f.endsWith(h, "{}"))
        h = r ? h : h.slice(0, -2), v = JSON.stringify(v);
      else if (f.isArray(v) && is(v) || (f.isFileList(v) || f.endsWith(h, "[]")) && (T = f.toArray(v)))
        return h = _n(h), T.forEach(function(re, se) {
          !(f.isUndefined(re) || re === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? en([h], se, a) : o === null ? h : h + "[]",
            m(re)
          );
        }), !1;
    }
    return Ot(v) ? !0 : (t.append(en(S, h, a), m(v)), !1);
  }
  const y = [], R = Object.assign(us, {
    defaultVisitor: c,
    convertValue: m,
    isVisitable: Ot
  });
  function C(v, h) {
    if (!f.isUndefined(v)) {
      if (y.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + h.join("."));
      y.push(v), f.forEach(v, function(T, q) {
        (!(f.isUndefined(T) || T === null) && s.call(
          t,
          T,
          f.isString(q) ? q.trim() : q,
          h,
          R
        )) === !0 && C(T, h ? h.concat(q) : [q]);
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
  this._pairs = [], e && st(e, this, t);
}
const Sn = Nt.prototype;
Sn.append = function(t, n) {
  this._pairs.push([t, n]);
};
Sn.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, tn);
  } : tn;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function cs(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Cn(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || cs, s = n && n.serialize;
  let a;
  if (s ? a = s(t, n) : a = f.isURLSearchParams(t) ? t.toString() : new Nt(t, n).toString(r), a) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return e;
}
class ds {
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
const nn = ds, On = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, fs = typeof URLSearchParams < "u" ? URLSearchParams : Nt, ps = typeof FormData < "u" ? FormData : null, vs = typeof Blob < "u" ? Blob : null, ms = {
  isBrowser: !0,
  classes: {
    URLSearchParams: fs,
    FormData: ps,
    Blob: vs
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, En = typeof window < "u" && typeof document < "u", hs = ((e) => En && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), bs = (() => typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: En,
  hasStandardBrowserEnv: hs,
  hasStandardBrowserWebWorkerEnv: bs
}, Symbol.toStringTag, { value: "Module" })), ae = {
  ...gs,
  ...ms
};
function ys(e, t) {
  return st(e, new ae.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, a) {
      return ae.isNode && f.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function ws(e) {
  return f.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function _s(e) {
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
    return o = !o && f.isArray(s) ? s.length : o, b ? (f.hasOwnProp(s, o) ? s[o] = [s[o], r] : s[o] = r, !u) : ((!s[o] || !f.isObject(s[o])) && (s[o] = []), t(n, r, s[o], a) && f.isArray(s[o]) && (s[o] = _s(s[o])), !u);
  }
  if (f.isFormData(e) && f.isFunction(e.entries)) {
    const n = {};
    return f.forEachEntry(e, (r, s) => {
      t(ws(r), s, n, 0);
    }), n;
  }
  return null;
}
function Ss(e, t, n) {
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
  transitional: On,
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
        return ys(t, this.formSerializer).toString();
      if ((u = f.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const b = this.env && this.env.FormData;
        return st(
          u ? { "files[]": t } : t,
          b && new b(),
          this.formSerializer
        );
      }
    }
    return a || s ? (n.setContentType("application/json", !1), Ss(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Pt.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && f.isString(t) && (r && !this.responseType || s)) {
      const o = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (u) {
        if (o)
          throw u.name === "SyntaxError" ? L.from(u, L.ERR_BAD_RESPONSE, this, null, this.response) : u;
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
const Ft = Pt, Cs = f.toObjectSet([
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
]), Os = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), n = o.substring(0, s).trim().toLowerCase(), r = o.substring(s + 1).trim(), !(!n || t[n] && Cs[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, rn = Symbol("internals");
function Ue(e) {
  return e && String(e).trim().toLowerCase();
}
function Qe(e) {
  return e === !1 || e == null ? e : f.isArray(e) ? e.map(Qe) : String(e);
}
function Es(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const xs = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function Rs(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ts(e, t) {
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
    return f.isPlainObject(t) || t instanceof this.constructor ? o(t, n) : f.isString(t) && (t = t.trim()) && !xs(t) ? o(Os(t), n) : t != null && a(n, t, r), this;
  }
  get(t, n) {
    if (t = Ue(t), t) {
      const r = f.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Es(s);
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
      const u = t ? Rs(a) : String(a).trim();
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
    const r = (this[rn] = this[rn] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function a(o) {
      const u = Ue(o);
      r[u] || (Ts(s, o), r[u] = !0);
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
const fe = at;
function gt(e, t) {
  const n = this || Ft, r = t || n, s = fe.from(r.headers);
  let a = r.data;
  return f.forEach(e, function(u) {
    a = u.call(n, a, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), a;
}
function Rn(e) {
  return !!(e && e.__CANCEL__);
}
function qe(e, t, n) {
  L.call(this, e ?? "canceled", L.ERR_CANCELED, t, n), this.name = "CanceledError";
}
f.inherits(qe, L, {
  __CANCEL__: !0
});
function ks(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new L(
    "Request failed with status code " + n.status,
    [L.ERR_BAD_REQUEST, L.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const As = ae.hasStandardBrowserEnv ? (
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
function Ns(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Ps(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Tn(e, t) {
  return e && !Ns(t) ? Ps(e, t) : t;
}
const Fs = ae.hasStandardBrowserEnv ? (
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
function Ls(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ds(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, a = 0, o;
  return t = t !== void 0 ? t : 1e3, function(b) {
    const m = Date.now(), c = r[a];
    o || (o = m), n[s] = b, r[s] = m;
    let y = a, R = 0;
    for (; y !== s; )
      R += n[y++], y = y % e;
    if (s = (s + 1) % e, s === a && (a = (a + 1) % e), m - o < t)
      return;
    const C = c && m - c;
    return C ? Math.round(R * 1e3 / C) : void 0;
  };
}
function sn(e, t) {
  let n = 0;
  const r = Ds(50, 250);
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
const Bs = typeof XMLHttpRequest < "u", js = Bs && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const a = fe.from(e.headers).normalize(), o = e.responseType;
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
    function R() {
      if (!c)
        return;
      const v = fe.from(
        "getAllResponseHeaders" in c && c.getAllResponseHeaders()
      ), S = {
        data: !o || o === "text" || o === "json" ? c.responseText : c.response,
        status: c.status,
        statusText: c.statusText,
        headers: v,
        config: e,
        request: c
      };
      ks(function(q) {
        n(q), b();
      }, function(q) {
        r(q), b();
      }, S), c = null;
    }
    if ("onloadend" in c ? c.onloadend = R : c.onreadystatechange = function() {
      !c || c.readyState !== 4 || c.status === 0 && !(c.responseURL && c.responseURL.indexOf("file:") === 0) || setTimeout(R);
    }, c.onabort = function() {
      c && (r(new L("Request aborted", L.ECONNABORTED, e, c)), c = null);
    }, c.onerror = function() {
      r(new L("Network Error", L.ERR_NETWORK, e, c)), c = null;
    }, c.ontimeout = function() {
      let h = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const S = e.transitional || On;
      e.timeoutErrorMessage && (h = e.timeoutErrorMessage), r(new L(
        h,
        S.clarifyTimeoutError ? L.ETIMEDOUT : L.ECONNABORTED,
        e,
        c
      )), c = null;
    }, ae.hasStandardBrowserEnv) {
      const v = Fs(y) && e.xsrfCookieName && As.read(e.xsrfCookieName);
      v && a.set(e.xsrfHeaderName, v);
    }
    s === void 0 && a.setContentType(null), "setRequestHeader" in c && f.forEach(a.toJSON(), function(h, S) {
      c.setRequestHeader(S, h);
    }), f.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), o && o !== "json" && (c.responseType = e.responseType), typeof e.onDownloadProgress == "function" && c.addEventListener("progress", sn(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && c.upload && c.upload.addEventListener("progress", sn(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (v) => {
      c && (r(!v || v.type ? new qe(null, e, c) : v), c.abort(), c = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const C = Ls(y);
    if (C && ae.protocols.indexOf(C) === -1) {
      r(new L("Unsupported protocol " + C + ":", L.ERR_BAD_REQUEST, e));
      return;
    }
    c.send(s || null);
  });
}, Et = {
  http: ls,
  xhr: js
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
const an = (e) => `- ${e}`, zs = (e) => f.isFunction(e) || e === null || e === !1, kn = {
  getAdapter: (e) => {
    e = f.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let a = 0; a < t; a++) {
      n = e[a];
      let o;
      if (r = n, !zs(n) && (r = Et[(o = String(n)).toLowerCase()], r === void 0))
        throw new L(`Unknown adapter '${o}'`);
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
      throw new L(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Et
};
function yt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new qe(null, e);
}
function on(e) {
  return yt(e), e.headers = fe.from(e.headers), e.data = gt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), kn.getAdapter(e.adapter || Ft.adapter)(e).then(function(r) {
    return yt(e), r.data = gt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = fe.from(r.headers), r;
  }, function(r) {
    return Rn(r) || (yt(e), r && r.response && (r.response.data = gt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = fe.from(r.response.headers))), Promise.reject(r);
  });
}
const ln = (e) => e instanceof fe ? e.toJSON() : e;
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
    const y = b[c] || s, R = y(e[c], t[c], c);
    f.isUndefined(R) && y !== u || (n[c] = R);
  }), n;
}
const An = "1.6.1", Lt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Lt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const un = {};
Lt.transitional = function(t, n, r) {
  function s(a, o) {
    return "[Axios v" + An + "] Transitional option '" + a + "'" + o + (r ? ". " + r : "");
  }
  return (a, o, u) => {
    if (t === !1)
      throw new L(
        s(o, " has been removed" + (n ? " in " + n : "")),
        L.ERR_DEPRECATED
      );
    return n && !un[o] && (un[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(a, o, u) : !0;
  };
};
function Is(e, t, n) {
  if (typeof e != "object")
    throw new L("options must be an object", L.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const a = r[s], o = t[a];
    if (o) {
      const u = e[a], b = u === void 0 || o(u, a, e);
      if (b !== !0)
        throw new L("option " + a + " must be " + b, L.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new L("Unknown option " + a, L.ERR_BAD_OPTION);
  }
}
const xt = {
  assertOptions: Is,
  validators: Lt
}, me = xt.validators;
class Ke {
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
    r !== void 0 && xt.assertOptions(r, {
      silentJSONParsing: me.transitional(me.boolean),
      forcedJSONParsing: me.transitional(me.boolean),
      clarifyTimeoutError: me.transitional(me.boolean)
    }, !1), s != null && (f.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : xt.assertOptions(s, {
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
    ), n.headers = fe.concat(o, a);
    const u = [];
    let b = !0;
    this.interceptors.request.forEach(function(h) {
      typeof h.runWhen == "function" && h.runWhen(n) === !1 || (b = b && h.synchronous, u.unshift(h.fulfilled, h.rejected));
    });
    const m = [];
    this.interceptors.response.forEach(function(h) {
      m.push(h.fulfilled, h.rejected);
    });
    let c, y = 0, R;
    if (!b) {
      const v = [on.bind(this), void 0];
      for (v.unshift.apply(v, u), v.push.apply(v, m), R = v.length, c = Promise.resolve(n); y < R; )
        c = c.then(v[y++], v[y++]);
      return c;
    }
    R = u.length;
    let C = n;
    for (y = 0; y < R; ) {
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
    for (y = 0, R = m.length; y < R; )
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
class Dt {
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
      token: new Dt(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Us = Dt;
function Vs(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function $s(e) {
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
const Ms = Rt;
function Nn(e) {
  const t = new Ze(e), n = dn(Ze.prototype.request, t);
  return f.extend(n, Ze.prototype, t, { allOwnKeys: !0 }), f.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Nn(Fe(e, s));
  }, n;
}
const U = Nn(Ft);
U.Axios = Ze;
U.CanceledError = qe;
U.CancelToken = Us;
U.isCancel = Rn;
U.VERSION = An;
U.toFormData = st;
U.AxiosError = L;
U.Cancel = U.CanceledError;
U.all = function(t) {
  return Promise.all(t);
};
U.spread = Vs;
U.isAxiosError = $s;
U.mergeConfig = Fe;
U.AxiosHeaders = fe;
U.formToJSON = (e) => xn(f.isHTMLForm(e) ? new FormData(e) : e);
U.getAdapter = kn.getAdapter;
U.HttpStatusCode = Ms;
U.default = U;
const et = U;
he.localeData().delimiters.thousands = " ";
he.localeData().delimiters.decimal = ",";
const Hs = (e) => e === void 0 ? void 0 : JSON.parse(JSON.stringify(e)), qs = (e) => {
  if (!Array.isArray(e) && Object.getPrototypeOf(e) !== Object.prototype)
    throw new Error(
      "Tried cloning instance of a class. Consider implementing clone method instead."
    );
  return Hs(e);
};
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
    const t = e, { format: n, label: r, title: s, url: a } = Oe(t), o = A(), u = A(!1), b = A(), m = (v) => v.map(({ name: h, valueFormatted: S }) => ({
      label: h,
      value: S
    })), c = (v) => v.map(({ name: h, rate: S, value: T }) => ({
      label: h,
      value: `${he(T).format("0,0")} (${he(S).format("0,0.00")}%)`
    })), y = (v) => {
      switch (n.value) {
        case "distribution":
          return m(v);
        case "rated_distribution":
          return c(v);
        default:
          throw new Error(`Unsupported format: ${n.value}`);
      }
    }, R = async () => {
      if (o.value)
        return;
      const v = (await et(a.value)).data;
      o.value = y(v);
    }, C = async () => {
      u.value = !0, await R();
    };
    return (v, h) => {
      var S;
      return w(), j("div", {
        class: X(["cell-hint", { visible: u.value }]),
        ref_key: "root",
        ref: b,
        onMouseover: C,
        onMouseleave: h[0] || (h[0] = (T) => u.value = !1)
      }, [
        G("span", Ws, F(g(r)), 1),
        x(Tt, {
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
            o.value ? (w(!0), j(H, { key: 0 }, be(o.value, ({ label: T, value: q }, re) => (w(), j("div", {
              key: `line-${re}`
            }, [
              G("b", Gs, F(T) + ": ", 1),
              G("span", Xs, F(q), 1)
            ]))), 128)) : (w(), B(kt, { key: 1 }))
          ]),
          _: 1
        }, 8, ["title", "visible", "virtual-ref"])
      ], 34);
    };
  }
});
const cn = /* @__PURE__ */ ye(Ys, [["__scopeId", "data-v-23cadab0"]]), Qs = /* @__PURE__ */ ge({
  __name: "DetailsSelector",
  props: {
    labels: {},
    open: { type: Boolean, default: !1 },
    title: {}
  },
  emits: ["hideDetails", "showDetails"],
  setup(e, { emit: t }) {
    const n = e, { labels: r, open: s, title: a } = Oe(n), o = A(!1), u = A(), b = A(), m = (R) => {
      var C, v;
      !R.target || (C = b.value) != null && C.contains(R.target) || (v = u.value) != null && v.$el.contains(R.target) || (o.value = !1, window.removeEventListener("mouseup", m));
    }, c = () => {
      if (s.value) {
        t("hideDetails");
        return;
      }
      if (o.value) {
        o.value = !1;
        return;
      }
      o.value = !0, window.addEventListener("mouseup", m);
    }, y = (R) => {
      if (o.value = !1, s.value) {
        t("hideDetails");
        return;
      }
      t("showDetails", R);
    };
    return ir(() => {
      window.removeEventListener("mouseup", m);
    }), (R, C) => (w(), j("div", {
      class: "details-selector-container",
      ref_key: "root",
      ref: b,
      onClick: C[0] || (C[0] = _t(() => c(), ["stop"]))
    }, [
      x(Z, {
        class: "details-selector",
        vertical: "center"
      }, {
        default: _(() => [
          g(a) ? (w(), B(z, {
            key: 0,
            mood: "important-alt",
            size: "small"
          }, {
            default: _(() => [
              P(F(g(a)), 1)
            ]),
            _: 1
          })) : M("", !0),
          x(Pe, {
            value: g(s) ? "chevron-up" : "chevron-down",
            mood: "important-alt",
            size: "small-2"
          }, null, 8, ["value"])
        ]),
        _: 1
      }),
      x(yr, {
        ref_key: "popover",
        ref: u,
        parentNode: b.value,
        visible: o.value,
        autoPosition: "",
        popoverClass: "details-selector-popover"
      }, {
        default: _(() => [
          (w(!0), j(H, null, be(g(r), (v, h) => (w(), B(z, {
            class: "dropdown-item",
            onClick: _t(() => y(h), ["stop"]),
            contrast: ""
          }, {
            default: _(() => [
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
const Zs = /* @__PURE__ */ ye(Qs, [["__scopeId", "data-v-96f20293"]]), Ks = /* @__PURE__ */ ge({
  __name: "InputWithSelect",
  props: ["value", "select", "items", "width"],
  emits: ["update:value", "update:select"],
  setup(e) {
    const t = e, n = A(t.value), r = A(t.select), s = I(() => t.width === "small" ? 50 : 100);
    return (a, o) => (w(), B(g(wr), {
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
        x(_r, {
          modelValue: r.value,
          "onUpdate:modelValue": o[0] || (o[0] = (u) => r.value = u),
          onChange: o[1] || (o[1] = (u) => a.$emit("update:select", { operator: u, value: n.value })),
          style: Xe(`width: ${s.value}px`),
          size: "default"
        }, {
          default: _(() => [
            (w(!0), j(H, null, be(e.items, (u, b) => (w(), B(Sr, {
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
const ea = /* @__PURE__ */ ye(Ks, [["__scopeId", "data-v-e2be7f01"]]), ta = { class: "pagination" }, na = ["onClick"], ra = /* @__PURE__ */ ge({
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
    const n = e, { currentPageSize: r, id: s, pageNumber: a, pageRadius: o, pageSizeLabel: u, pageSizes: b, rowCount: m } = Oe(n), c = I(() => Math.min(...b.value)), y = I(() => Math.ceil(m.value / r.value)), R = I(
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
        g(a) > 0 ? (w(), B(z, {
          key: 0,
          class: "page",
          onClick: S[0] || (S[0] = () => t("update:pageNumber", 0)),
          mood: "important-alt"
        }, {
          default: _(() => [
            P("1")
          ]),
          _: 1
        })) : M("", !0),
        g(a) > g(o) ? (w(), B(z, {
          key: 1,
          class: "page-separator"
        }, {
          default: _(() => [
            P("…")
          ]),
          _: 1
        })) : M("", !0),
        (w(!0), j(H, null, be(C.value, (T) => (w(), j("div", {
          class: X(["page", { current: T === g(a) }]),
          onClick: () => t("update:pageNumber", T),
          key: T
        }, F(T + 1), 11, na))), 128)),
        g(a) < y.value - g(o) - 1 ? (w(), B(z, {
          key: 2,
          class: "page-separator"
        }, {
          default: _(() => [
            P("…")
          ]),
          _: 1
        })) : M("", !0),
        g(a) < y.value - 1 ? (w(), B(z, {
          key: 3,
          class: "page",
          onClick: S[1] || (S[1] = () => t("update:pageNumber", y.value - 1)),
          mood: "important-alt"
        }, {
          default: _(() => [
            P(F(y.value), 1)
          ]),
          _: 1
        })) : M("", !0),
        x(z, { class: "page-size-label" }, {
          default: _(() => [
            P(F(g(u)), 1)
          ]),
          _: 1
        })
      ], 64)) : M("", !0),
      g(m) > c.value ? (w(), B(hr, {
        key: 1,
        class: "page-size-selector no-spacing",
        "onUpdate:modelValue": S[2] || (S[2] = (T) => v(parseInt(T.toString()))),
        id: g(s),
        items: R.value,
        modelValue: g(r)
      }, {
        item: _(({ item: T }) => [
          P(F(T), 1)
        ]),
        _: 1
      }, 8, ["id", "items", "modelValue"])) : M("", !0)
    ]));
  }
});
const sa = /* @__PURE__ */ ye(ra, [["__scopeId", "data-v-ead8b7ab"]]), aa = { class: "trend-chart-container" }, oa = { class: "trend-chart-content" }, la = /* @__PURE__ */ ge({
  __name: "TrendChart",
  props: {
    formatter: { type: Function },
    title: {},
    url: {}
  },
  setup(e) {
    const t = e, { formatter: n, title: r, url: s } = Oe(t), a = A(), o = A([]), u = A(), b = I(() => u.value ? Object.assign({}, u.value) : {}), m = I(() => {
      var h;
      switch ((h = u.value) == null ? void 0 : h.length) {
        case 0:
        case void 0:
          return 0;
        case 1:
          return u.value[0];
        default:
          return u.value.slice(u.value.length / 2).reduce((S, T) => S + T, 0) / Math.ceil(u.value.length / 2);
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
          return u.value.slice(0, u.value.length / 2).reduce((S, T) => S + T, 0) / Math.floor(u.value.length / 2);
      }
    }), y = I(() => c.value > m.value ? "negative" : c.value < m.value ? "positive" : "neutral"), R = I(() => {
      if (!u.value)
        return {};
      const h = new Array(u.value.length).fill(0).map(
        (S, T) => c.value + (m.value - c.value) * T / (u.value.length - 1)
      );
      return Object.assign({}, h);
    }), C = async () => {
      if (u.value)
        return;
      const h = (await et({ url: s.value })).data;
      o.value = Object.keys(h), u.value = Object.values(h);
    }, v = async () => {
      await C();
    };
    return (h, S) => (w(), j("div", aa, [
      G("i", {
        class: "la la-eye secondary",
        ref_key: "iconRef",
        ref: a
      }, null, 512),
      x(Tt, {
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
          g(r) ? (w(), B($e, {
            key: 0,
            size: "large-2"
          }, {
            default: _(() => [
              P(F(g(r)), 1)
            ]),
            _: 1
          })) : M("", !0),
          G("div", oa, [
            u.value ? (w(), B(gr, {
              key: 0,
              activeLines: ["values"],
              formatters: { trend: g(n), values: g(n) },
              moods: { trend: { mood: y.value }, values: { mood: "important" } },
              styles: { trend: "line", values: "line" },
              values: { trend: R.value, values: b.value },
              "no-x-axis-labels": !0
            }, null, 8, ["formatters", "moods", "values"])) : (w(), B(kt, { key: 1 }))
          ])
        ]),
        _: 1
      }, 8, ["virtual-ref"])
    ]));
  }
});
const ia = /* @__PURE__ */ ye(la, [["__scopeId", "data-v-c57a26a4"]]), ua = { class: "common-table" }, ca = {
  key: 0,
  class: "controls d-flex justify-content-end mb-1"
}, da = ["onMouseover", "onMouseleave"], fa = ["onClick"], wt = 50, pa = /* @__PURE__ */ ge({
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
      columnLinks: R,
      comparisonColumns: C,
      comparisonRequest: v,
      defaultOrderBy: h,
      detailsColumn: S,
      detailsRequests: T,
      dragColumns: q,
      fixedColumnNumber: re,
      inlineFilterOperators: se,
      inversedKpis: le,
      primaryColumn: V,
      primaryColumnAlias: pe,
      request: J,
      rows: Ee,
      shortenColumns: K,
      showInlineFilters: we,
      showRowNumber: ot,
      showPagination: Je,
      showTopTotal: lt,
      total: xe,
      totalColumnKey: it,
      trendUrl: De
    } = Oe(n), Re = () => {
      const l = {};
      for (const i of Object.keys(c.value))
        i in se.value && (l[i] = {
          operator: Object.keys(se.value[i])[0],
          value: ""
        });
      return l;
    }, ie = A([]), Te = A(void 0), O = A({}), E = A([]), D = A({}), W = A([]), ve = A({}), Be = A(!1), ue = A(!1), je = A([]), ze = A(!1), Y = A(Re()), _e = A(!0), ce = A(), Se = A(0), ke = A(20), Ie = A(0), ee = A(), de = A(), Fn = I(() => {
      const l = {};
      return ue.value && (l.inline_filters = {
        icon: "filter"
      }), l;
    }), Ln = I(
      () => C != null && C.value ? Object.keys(C.value) : void 0
    ), Bt = I(
      () => W.value.reduce((l, i) => (l[i] = qs(c.value[i]), l), {})
    ), jt = I(() => {
      if (T != null && T.value)
        return Object.entries(T.value).reduce((l, [i, { label: d }]) => (l[i] = d, l), {});
    }), zt = I(() => [...ie.value].sort((l, i) => {
      const d = (() => {
        const p = ut(
          ce.value[0].reduce((N, $) => N[$], l),
          c.value[ce.value[0][0]].type
        ), k = ut(
          ce.value[0].reduce((N, $) => N[$], i),
          c.value[ce.value[0][0]].type
        );
        return p > k ? 1 : p < k ? -1 : 0;
      })();
      return ce.value[1] ? -d : d;
    })), It = I(() => J != null && J.value && !ze.value || !Je.value ? zt.value : zt.value.slice(
      Se.value * ke.value,
      (Se.value + 1) * ke.value
    )), Dn = (l) => {
      E.value.includes(l) || E.value.push(l);
    }, We = (l, i) => !K.value || !K.value.includes(l) ? !1 : String(i || "").length > wt, Bn = (l) => !!l.tooltipTitle && !!l.tooltipContent, Ge = (l, i, d) => {
      var k;
      if (!d || !(C != null && C.value) || !(d in C.value) || C.value[d].format !== "difference")
        return;
      const p = ((k = le == null ? void 0 : le.value) == null ? void 0 : k.includes(i)) ?? !1;
      return l > 0 ? p ? "negative" : "positive" : l < 0 ? p ? "positive" : "negative" : "neutral";
    }, Ae = (l, i, d) => {
      let p = ut(l, i);
      switch (i) {
        case "float":
          return he(parseFloat(p)).format("0,0.00");
        case "int":
          return he(parseInt(p)).format("0,0");
        case "money": {
          let k = "0,0";
          o.value > 0 && (k += "." + "0".repeat(o.value));
          const N = he(parseFloat(p)).format(k);
          return b.value ? u.value + " " + N : N + " " + u.value;
        }
        case "money_capped": {
          const k = parseFloat(p.toFixed(o.value)) == 0;
          if (p > 0 && p < 1 && k) {
            const N = o.value === 0 ? 1 : parseFloat("0." + "0".repeat(o.value - 1) + "1");
            return b.value ? `< ${u.value} ${N}` : `< ${N} ${u.value}`;
          } else
            return Ae(l, "money", d);
        }
        case "percent": {
          let k = he(parseFloat(p)).format("0,0.00") + "%";
          return d === "difference" && p > 0 && (k = `+${k}`), k;
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
      if (O.value[l] && O.value[l][i[V.value]])
        return O.value[l][i[V.value]];
      const { rows: d } = await r(T.value[l].request, {
        row: i,
        primaryColumn: (pe == null ? void 0 : pe.value) ?? V.value,
        primaryColumnValue: i[V.value]
      });
      return O.value[l] || (O.value[l] = {}), O.value[l][i[V.value]] = Object.values(d), O.value[l][i[V.value]];
    }, Ut = (l, i) => {
      if (!l)
        return i.url;
      const d = new URL(l.url, location.origin);
      if (Array.isArray(l.columns))
        for (const p of l.columns)
          d.searchParams.set(p, i[p]);
      else
        for (const [p, k] of Object.entries(l.columns))
          d.searchParams.set(k, i[p]);
      return d;
    }, zn = (l, i) => {
      const d = new URL(y.value[l].baseUrl, location.origin);
      if (Array.isArray(y.value[l].columns))
        for (const p of y.value[l].columns)
          d.searchParams.set(p, i[p]);
      else
        for (const [p, k] of Object.entries(y.value[l].columns))
          d.searchParams.set(k, i[p]);
      return d.toString();
    }, In = (l) => {
      if (l.totalUrl)
        return new URL(l.totalUrl).toString();
      const i = new URL(l.baseUrl);
      return i.searchParams.set("total", "true"), i.toString();
    }, Un = (l) => !K.value || !K.value.includes(l) ? -1 : je.value.indexOf(l), Vn = (l) => {
      if (l in Y.value)
        return Y.value[l].operator;
    }, $n = (l) => {
      if (l in Y.value)
        return Y.value[l].value;
    }, Vt = (l) => se.value[l], Mn = (l) => {
      const i = Vt(l);
      if (i)
        return Object.values(i).some((d) => d.size === "small") ? "small" : "normal";
    }, Hn = (l) => {
      const i = Vt(l);
      return i ? Object.entries(i).reduce((d, [p, k]) => (d[p] = k.label, d), {}) : {};
    }, qn = (l) => c.value[l].type === "string" ? "text" : "number", $t = () => `Table_OrderBy_${location.pathname}`, Jn = () => `Table_PageSize_${location.pathname}`, ut = (l, i) => {
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
      const [k, N] = (() => !d || !(C != null && C.value) || !(d in C.value) ? [c.value[i].type, void 0] : [
        C.value[d].type ?? c.value[i].type,
        C.value[d].format
      ])();
      let $ = Ae(l, k);
      return N === "difference" && ($ = l > 0 ? `+${$}` : $), p ? Jt($, i) : $;
    }, Wn = (l, i) => {
      if (!De)
        return "";
      const d = new URL(
        i ? De.value[i] : De.value,
        location.origin
      );
      return d.searchParams.set((pe == null ? void 0 : pe.value) ?? V.value, l[V.value]), d.toString();
    }, Mt = (l, i, d) => We(l, i) ? [] : d ? (S == null ? void 0 : S.value) === l ? ["flex-grow-1", "text-left"] : K.value && K.value.includes(l) && It.value.some((p) => We(l, p[l])) ? ["flex-grow-1", "text-left"] : ["flex-grow-1"] : ["flew-grow-1"], Gn = (l) => l in se.value, Xn = () => {
      we.value && (Be.value = !1);
    }, Ht = (l, i) => {
      if (!(R != null && R.value) || !(i in R.value))
        return !1;
      const d = R.value[i];
      return d === null ? !!l.url : !("disable_for" in d && d.disable_for.includes(l[V.value]));
    }, Yn = (l, i) => {
      const [d] = W.value.splice(l, 1);
      W.value.splice(i, 0, d), t("move:column", { from: l, to: i });
    }, Qn = (l) => {
      const i = E.value.indexOf(l);
      i < 0 || E.value.splice(i, 1);
    }, qt = (l, i) => {
      D.value[l] = i;
    }, Jt = (l, i) => !K.value || !K.value.includes(i) || je.value.includes(i) || String(l || "").length <= wt ? l : `${l.substring(0, wt - 3)}...`, Zn = (l) => {
      if (!de.value)
        return;
      const i = {
        left: de.value.$el.scrollLeft,
        top: de.value.$el.scrollTop
      };
      delete ve.value[l[V.value]], Yt(() => {
        de.value.$el.scrollTo(i);
      });
    }, Kn = async (l, i) => {
      if (!de.value)
        return;
      const d = {
        left: de.value.$el.scrollLeft,
        top: de.value.$el.scrollTop
      };
      _e.value = !0, ve.value[i[V.value]] = await jn(l, i), Yt(() => {
        de.value.$el.scrollTo(d), _e.value = !1;
      });
    }, er = async (l = !1) => {
      await nr(l) || await tr(l) || await dt(l);
    }, ct = async (l) => {
      await ft(l), Se.value = l;
    }, Wt = async (l) => {
      const i = Jn();
      if (l === void 0) {
        const d = localStorage.getItem(i);
        d && (ke.value = parseInt(d));
      } else
        localStorage.setItem(i, l.toString()), await ft(0, l), Se.value = 0, ke.value = l;
    }, Gt = (l, { operator: i, value: d }) => {
      const p = Y.value[l].value !== d || Y.value[l].operator !== i && Y.value[l].value;
      Y.value[l] = { operator: i, value: d }, p && (ze.value = !1, ct(0));
    }, tr = async (l) => {
      const i = (() => {
        for (const k in localStorage) {
          if (!k.startsWith("DataTables_"))
            continue;
          const N = k.substring(k.indexOf("/"));
          if (location.pathname !== N)
            return;
          const $ = localStorage.getItem(k);
          return $ ? JSON.parse($) : void 0;
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
        ([p, { visible: k }]) => k
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
    }, nr = async (l) => {
      const i = localStorage.getItem($t());
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
      const [p, k] = await (async () => {
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
        const $ = await Promise.all(N);
        if ($.length > 1 && $.some((ne) => ne.paginated === !0))
          throw new Error("Paginated fetching is not supported for separate comparison requests.");
        return $;
      })();
      return k ? (Te.value = [p, k], Xt()) : ie.value = Object.values(p.rows), ze.value = p.paginated === !1, Ie.value = p.row_count, p.detailedRows ? ve.value = p.detailedRows : ve.value = {}, p.total && !k && (ee.value = p.total), !0;
    }, Xt = () => {
      if (!Te.value)
        return;
      const [l, i] = Te.value;
      ie.value = Object.values(
        Js(l.rows, i.rows, c.value, V.value)
      ), l.total && (ee.value = Pn(l.total, i.total, c.value));
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
      l === void 0 && (l = Se.value), i === void 0 && (i = ke.value), d === void 0 && (d = ce.value), _e.value = !0, sr() || await rr(l, i, d), _e.value = !1;
    }, ar = () => {
      we.value && (Be.value = !0);
    }, or = (l) => {
      if (!K.value || !K.value.includes(l))
        return;
      const i = Un(l);
      i >= 0 ? je.value.splice(i, 1) : je.value.push(l);
    }, lr = () => {
      ue.value = !ue.value, ue.value && (Y.value = Re());
    }, Ne = async (l, i = !0, d = !0) => {
      Se.value = 0, ce.value = l, d && await ft(void 0, void 0, l), i && localStorage.setItem($t(), JSON.stringify(l)), t("update:orderBy", l);
    };
    return ur(() => {
      W.value = Object.keys(c.value), ee.value = xe == null ? void 0 : xe.value, Promise.all([dt(!1), Wt()]).then(() => er(!0));
    }), Ve(c, () => {
      W.value = Object.keys(c.value), Y.value = Re(), Te && Xt();
    }), Ve(_e, () => {
      t("update:loading", _e.value);
    }), h && Ve(h, (l, i) => {
      (l == null ? void 0 : l[0][0]) !== (i == null ? void 0 : i[0][0]) && dt(!0);
    }), J && Ve(
      J,
      () => {
        ze.value = !1, ct(0);
      },
      { deep: !0 }
    ), (l, i) => (w(), j("div", ua, [
      g(Je) ? (w(), j("div", ca, [
        x(sa, {
          "onUpdate:pageNumber": i[0] || (i[0] = (d) => ct(d)),
          "onUpdate:currentPageSize": i[1] || (i[1] = (d) => Wt(d)),
          currentPageSize: ke.value,
          pageNumber: Se.value,
          pageSizeLabel: l.pageSizeLabel,
          rowCount: Ie.value
        }, null, 8, ["currentPageSize", "pageNumber", "pageSizeLabel", "rowCount"])
      ])) : M("", !0),
      G("div", {
        class: "table-container",
        onMouseover: i[7] || (i[7] = () => ar()),
        onMouseout: i[8] || (i[8] = () => Xn())
      }, [
        G("div", {
          class: X(["action-buttons", { active: Be.value }])
        }, [
          g(we) ? (w(), B(St, {
            key: 0,
            onClick: i[2] || (i[2] = () => lr()),
            icon: ue.value ? "trash-can" : "filter",
            mood: "positive"
          }, null, 8, ["icon"])) : M("", !0)
        ], 2),
        ce.value ? (w(), B(vr, {
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
          columns: Bt.value,
          comparisonColumnKeys: Ln.value,
          detailsRows: ve.value,
          dragColumns: g(q),
          fixedColumnNumber: g(re),
          inversedKpis: g(le),
          orderBy: ce.value,
          primaryColumn: g(V),
          rows: It.value,
          showRowNumber: g(ot),
          showTotal: !!ee.value,
          showTopTotal: g(lt)
        }, cr({
          colorizeLabel: _(({ enabled: d }) => [
            x(z, {
              mood: "white",
              size: "small"
            }, {
              default: _(() => [
                d ? (w(), j(H, { key: 0 }, [
                  P(F(l.uncolorizeLabel), 1)
                ], 64)) : (w(), j(H, { key: 1 }, [
                  P(F(l.colorizeLabel), 1)
                ], 64))
              ]),
              _: 2
            }, 1024)
          ]),
          columnRowNumber: _(() => [
            x(z, {
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
            x(z, {
              contrast: "",
              size: "small"
            }, {
              default: _(() => [
                P(F(d), 1)
              ]),
              _: 2
            }, 1024)
          ]),
          totalRowNumber: _(() => [
            x(z, {
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
              onMouseover: () => qt(d, !0),
              onMouseleave: () => qt(d, !1)
            }, [
              x(z, {
                class: "column-label",
                contrast: "",
                size: "small"
              }, {
                default: _(() => [
                  P(F(g(c)[d].label), 1)
                ]),
                _: 2
              }, 1024),
              !p && Bn(g(c)[d]) ? (w(), B(xr, {
                key: 0,
                description: g(c)[d].tooltipContent,
                title: g(c)[d].tooltipTitle,
                visible: D.value[d],
                "icon-backend": "regular"
              }, null, 8, ["description", "title", "visible"])) : M("", !0)
            ], 40, da)
          ]),
          additionalHeader: _(({ additionalHeader: d, columnKey: p }) => [
            d === "inline_filters" && Gn(p) ? (w(), B(ea, {
              key: 0,
              value: $n(p),
              "onUpdate:value": (k) => Gt(p, k),
              type: qn(p),
              select: Vn(p),
              "onUpdate:select": (k) => Gt(p, k),
              items: Hn(p),
              width: Mn(p)
            }, null, 8, ["value", "onUpdate:value", "type", "select", "onUpdate:select", "items", "width"])) : M("", !0)
          ]),
          total: _(({ columnKey: d, subcolumnKey: p, values: k }) => [
            mt(l.$slots, g(xe), {
              columnKey: d,
              subcolumnKey: p,
              values: k
            }, () => [
              l.totalTitle && d === g(it) ? (w(), B(z, {
                key: 0,
                class: "total-label",
                contrast: "",
                size: "small"
              }, {
                default: _(() => [
                  typeof l.totalTitle == "function" ? (w(), j(H, { key: 0 }, [
                    P(F(l.totalTitle(Ie.value ?? ie.value.length)), 1)
                  ], 64)) : (w(), j(H, { key: 1 }, [
                    P(F(l.totalTitle) + ": " + F(Ie.value ?? ie.value.length), 1)
                  ], 64))
                ]),
                _: 1
              })) : ee.value ? (w(), j(H, { key: 1 }, [
                ee.value && ee.value[d] >= 0.01 && d in g(y) ? (w(), B(cn, {
                  key: 0,
                  format: g(y)[d].format,
                  label: Jt(Ae(ee.value[d], g(c)[d].type, g(C) && p ? g(C)[p].format : void 0), d),
                  title: g(y)[d].title,
                  url: In(g(y)[d])
                }, null, 8, ["format", "label", "title", "url"])) : p ? (w(), B(z, {
                  key: 1,
                  class: "total-label",
                  mood: Ge(ee.value[d][p], d, p),
                  contrast: "",
                  size: "small"
                }, {
                  default: _(() => [
                    P(F(Ce(ee.value[d][p], d, p)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"])) : (w(), B(z, {
                  key: 2,
                  class: "total-label",
                  mood: Ge(ee.value[d], d, p),
                  contrast: "",
                  size: "small"
                }, {
                  default: _(() => [
                    P(F(Ce(ee.value[d], d)), 1)
                  ]),
                  _: 2
                }, 1032, ["mood"]))
              ], 64)) : M("", !0)
            ], !0)
          ]),
          _: 2
        }, [
          g(C) ? {
            name: "secondaryColumn",
            fn: _(({ subcolumnKey: d }) => [
              d ? (w(), B(z, {
                key: 0,
                class: "column-label",
                contrast: "",
                size: "small"
              }, {
                default: _(() => [
                  P(F(g(C)[d].label), 1)
                ]),
                _: 2
              }, 1024)) : M("", !0)
            ]),
            key: "0"
          } : void 0,
          be(Object.keys(Bt.value), (d) => ({
            name: `row-${d}`,
            fn: _(({ columnKey: p, index: k, row: N, spanIndex: $, subcolumnKey: ne, subindex: pt, value: Q }) => [
              mt(l.$slots, "row-" + p, dr(fr({
                columnKey: p,
                index: k,
                row: N,
                spanIndex: $,
                subcolumnKey: ne,
                subindex: pt,
                value: Q
              })), () => [
                pt === void 0 && p === "trend" ? (w(), B(ia, {
                  key: 0,
                  class: X(Mt(p, Q, N.rowInfo.detailable)),
                  formatter: (vt) => Ae(vt, "int"),
                  title: l.trendChartTitle,
                  url: Wn(N, ne)
                }, null, 8, ["class", "formatter", "title", "url"])) : N.rowInfo.detailable && p === g(S) ? (w(), j(H, { key: 1 }, [
                  Ht(N, p) && N.rowInfo.detailable ? (w(), B(Qt, {
                    key: 0,
                    to: Ut(g(R)[p], N).toString(),
                    "is-external": !!N.url,
                    contrast: "",
                    size: "small"
                  }, {
                    default: _(() => [
                      P(F(Ce(Q, p, ne, !0)), 1)
                    ]),
                    _: 2
                  }, 1032, ["to", "is-external"])) : (w(), B(z, {
                    key: 1,
                    mood: Ge(Q, p, ne),
                    contrast: "",
                    size: "small"
                  }, {
                    default: _(() => [
                      P(F(Ce(Q, p, ne)), 1)
                    ]),
                    _: 2
                  }, 1032, ["mood"]))
                ], 64)) : Ht(N, p) && N.rowInfo.detailable ? (w(), B(Qt, {
                  key: 2,
                  to: Ut(g(R)[p], N).toString(),
                  "is-external": !!N.url,
                  contrast: "",
                  size: "small"
                }, {
                  default: _(() => [
                    P(F(Ce(Q, p, ne, !0)), 1)
                  ]),
                  _: 2
                }, 1032, ["to", "is-external"])) : pt === void 0 && Q >= 0.01 && p in g(y) ? (w(), B(cn, {
                  key: 3,
                  format: g(y)[p].format,
                  label: Ce(Q, p, ne, !0),
                  title: g(y)[p].title,
                  url: zn(p, N)
                }, null, 8, ["format", "label", "title", "url"])) : (w(), B(z, {
                  key: 4,
                  class: X(Mt(p, Q, N.rowInfo.detailable)),
                  mood: Ge(Q, p, ne),
                  contrast: "",
                  size: "small"
                }, {
                  default: _(() => [
                    P(F(Ce(Q, p, ne, !0)), 1)
                  ]),
                  _: 2
                }, 1032, ["class", "mood"])),
                We(p, Q) ? (w(), j("i", {
                  key: 5,
                  class: X(["flex-grow-1 expand-column fa", je.value.includes(p) ? "fa-compress-alt" : "fa-expand-alt"]),
                  onClick: () => or(p)
                }, null, 10, fa)) : M("", !0)
              ], !0),
              jt.value && N.rowInfo.detailable && p === g(S) ? (w(), j(H, { key: 0 }, [
                We(p, Q) ? M("", !0) : (w(), B(Cr, { key: 0 })),
                x(Zs, {
                  onHideDetails: () => Zn(N),
                  onShowDetails: (vt) => Kn(vt, N),
                  labels: jt.value,
                  open: ve.value[N[g(V)]] !== void 0,
                  title: l.detailsSelectorTitle
                }, null, 8, ["onHideDetails", "onShowDetails", "labels", "open", "title"])
              ], 64)) : M("", !0)
            ])
          }))
        ]), 1032, ["additionalHeaders", "cellClasses", "colorMetrics", "coloredMetrics", "columns", "comparisonColumnKeys", "detailsRows", "dragColumns", "fixedColumnNumber", "inversedKpis", "orderBy", "primaryColumn", "rows", "showRowNumber", "showTotal", "showTopTotal"])) : M("", !0)
      ], 32),
      G("div", {
        class: X(["loading-overlay", { visible: _e.value }])
      }, [
        x(kt)
      ], 2)
    ]));
  }
});
const ja = /* @__PURE__ */ ye(pa, [["__scopeId", "data-v-5686f0bb"]]), va = { class: "scrollable flex-max no-spacing" }, ma = ["onClick"], ha = { class: "scrollable flex-max no-spacing" }, ba = ["onClick"], ga = { class: "scrollable" }, ya = { class: "items flex-max no-spacing" }, wa = /* @__PURE__ */ ge({
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
    const n = e, { columns: r, defaultValue: s, groupNames: a, modelValue: o, showModalLabel: u } = Oe(n), b = A(Object.keys(a.value)[0]), m = A([...o.value]), c = A([]), y = A([]), R = A(""), C = A(void 0), v = A(void 0), h = A(void 0), S = A(void 0), T = A(void 0), q = I(() => Object.fromEntries(
      Object.entries(r.value).filter(
        ([O, E]) => E.fixed !== !0 && (R.value.trim() === "" || E.label.toLowerCase().includes(R.value.trim().toLowerCase()))
      )
    )), re = I(() => Object.keys(a.value).reduce((O, E) => (O[E] = Object.fromEntries(
      Object.entries(q.value).filter(([D, W]) => W.group === E)
    ), O), {})), se = I(
      () => b.value === void 0 ? void 0 : re.value[b.value]
    ), le = I(() => Object.fromEntries(
      Object.entries(a.value).filter(
        ([O, E]) => Object.values(q.value).some((D) => D.group === O)
      )
    )), V = I(() => {
      if (!(h.value === void 0 || S.value === void 0 || T.value === void 0))
        return h.value + T.value - S.value;
    }), pe = I(() => {
      if (V.value !== void 0)
        return `${V.value}px`;
    }), J = I(() => {
      if (v.value === void 0 || V.value === void 0)
        return;
      const O = m.value.indexOf(v.value), E = O - 1 - m.value.slice(0, O).reverse().findIndex((ue) => r.value[ue].fixed === !0);
      let D = m.value.slice(O + 1).findIndex((ue) => r.value[ue].fixed === !0);
      D >= 0 ? D += O + 1 : D = m.value.length;
      const W = Ee(m.value[E]), ve = W.offsetHeight, Be = Math.min(
        Math.round((V.value - W.offsetTop) / ve - 1),
        D - E - 1
      );
      return E + Be + 1;
    }), Ee = (O) => y.value[m.value.indexOf(O)], K = (O) => c.value[m.value.indexOf(O)], we = (O = !1, E) => {
      E && E.target !== E.currentTarget || (O && (m.value = [...o.value]), C.value = !1, b.value = Object.keys(a.value)[0]);
    }, ot = (O) => {
      const E = m.value.indexOf(O);
      E >= 0 && m.value.splice(E, 1);
    }, Je = () => {
      m.value = [...s.value];
    }, lt = (O) => {
      const E = [...O];
      t("update:modelValue", E), we(!1);
    }, xe = (O) => {
      b.value = O.toString();
    }, it = () => {
      C.value = !0;
    }, De = (O) => {
      const E = m.value.indexOf(O);
      E >= 0 ? m.value.splice(E, 1) : m.value.push(O);
    }, Re = (O) => {
      T.value = O.clientY;
    }, ie = () => {
      const O = J.value;
      if (v.value !== void 0 && O !== void 0) {
        const E = m.value.indexOf(v.value);
        m.value.splice(E, 1), m.value.splice(O, 0, v.value);
      }
      v.value = void 0, h.value = void 0, S.value = void 0, T.value = void 0, window.removeEventListener("mousemove", Re), window.removeEventListener("mouseup", ie);
    }, Te = (O, E) => {
      v.value = E, h.value = K(E).$el.offsetTop, S.value = O.clientY, T.value = O.clientY, window.addEventListener("mousemove", Re), window.addEventListener("mouseup", ie);
    };
    return Ve(R, (O) => {
      O ? (!b.value || !(b.value in le.value)) && (b.value = Object.keys(le.value)[0]) : b.value || (b.value = Object.keys(le.value)[0]);
    }), (O, E) => (w(), j(H, null, [
      x(St, {
        onClick: E[0] || (E[0] = () => it()),
        disabled: O.disabled,
        label: g(u),
        mood: "neutral",
        tabindex: "-1"
      }, null, 8, ["disabled", "label"]),
      (w(), B(pr, { to: "#app > .app-container" }, [
        x(Z, {
          class: X(["kpi-selector-container no-spacing", { visible: C.value, hidden: C.value === !1 }]),
          onClick: E[5] || (E[5] = _t((D) => we(!0, D), ["stop"])),
          column: "",
          horizontal: "center",
          vertical: "center"
        }, {
          default: _(() => [
            x(mr, { class: "kpi-selector" }, {
              default: _(() => [
                x(Z, {
                  class: "title",
                  vertical: "center"
                }, {
                  default: _(() => [
                    x($e, {
                      class: "flex-max",
                      size: "large-2"
                    }, {
                      default: _(() => [
                        P(F(O.title), 1)
                      ]),
                      _: 1
                    }),
                    x(Z, {
                      class: "flex-max no-spacing search-container",
                      vertical: "center"
                    }, {
                      default: _(() => [
                        x(br, {
                          class: "flex-max search",
                          modelValue: R.value,
                          "onUpdate:modelValue": E[1] || (E[1] = (D) => R.value = D),
                          placeholder: O.filterLabel
                        }, null, 8, ["modelValue", "placeholder"]),
                        x(Pe, {
                          class: "no-spacing",
                          value: "magnifying-glass"
                        })
                      ]),
                      _: 1
                    }),
                    x(Z, {
                      class: "close-container flex-max no-spacing",
                      horizontal: "right"
                    }, {
                      default: _(() => [
                        x(Pe, {
                          class: "close",
                          onClick: E[2] || (E[2] = () => we(!0)),
                          value: "xmark"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                x(Z, { class: "body flex-max no-spacing" }, {
                  default: _(() => [
                    b.value !== void 0 && se.value !== void 0 ? (w(), j(H, { key: 0 }, [
                      x(Z, {
                        class: "groups flex-max",
                        column: ""
                      }, {
                        default: _(() => [
                          x($e, { size: "large-2" }, {
                            default: _(() => [
                              P(F(O.groupsTitle), 1)
                            ]),
                            _: 1
                          }),
                          G("div", va, [
                            (w(!0), j(H, null, be(Object.entries(le.value), ([D, W]) => (w(), j("div", {
                              class: X(["item no-spacing", { selected: b.value === D }]),
                              onClick: () => xe(D)
                            }, [
                              x(z, { size: "small" }, {
                                default: _(() => [
                                  P(F(W), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, ma))), 256))
                          ])
                        ]),
                        _: 1
                      }),
                      x(Z, {
                        class: "group-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: _(() => [
                          x($e, { size: "large-2" }, {
                            default: _(() => [
                              P(F(g(a)[b.value]), 1)
                            ]),
                            _: 1
                          }),
                          G("div", ha, [
                            (w(!0), j(H, null, be(Object.entries(se.value), ([D, W]) => (w(), j("div", {
                              class: X(["item no-spacing", { selected: m.value.includes(D) }]),
                              onClick: () => De(D),
                              key: D
                            }, [
                              x(z, { size: "small" }, {
                                default: _(() => [
                                  P(F(W.label), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ], 10, ba))), 128))
                          ])
                        ]),
                        _: 1
                      }),
                      x(Z, {
                        class: "enabled-columns flex-max no-spacing",
                        column: ""
                      }, {
                        default: _(() => [
                          x(Z, {
                            class: "header",
                            vertical: "center"
                          }, {
                            default: _(() => [
                              x($e, {
                                class: "flex-max",
                                size: "large-2"
                              }, {
                                default: _(() => [
                                  P(F(O.orderTitle), 1)
                                ]),
                                _: 1
                              }),
                              x(z, {
                                class: "reset",
                                onClick: E[3] || (E[3] = () => Je()),
                                mood: "important-alt",
                                size: "small"
                              }, {
                                default: _(() => [
                                  P(F(O.resetLabel), 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          G("div", ga, [
                            G("div", ya, [
                              (w(!0), j(H, null, be(m.value, (D) => (w(), j("div", {
                                class: "item-container no-spacing",
                                ref_for: !0,
                                ref_key: "enabledColumnContainers",
                                ref: y
                              }, [
                                G("div", {
                                  class: X(["separator-top no-spacing", { "place-after": J.value !== void 0 && v.value !== void 0 && D === m.value[J.value] && J.value < m.value.indexOf(v.value) }])
                                }, null, 2),
                                x(Z, {
                                  class: X(["item no-spacing", { dragged: D === v.value }]),
                                  ref_for: !0,
                                  ref_key: "enabledColumnElements",
                                  ref: c,
                                  style: Xe(D === v.value ? { top: pe.value } : void 0),
                                  vertical: "center"
                                }, {
                                  default: _(() => [
                                    g(r)[D].fixed ? (w(), B(z, {
                                      key: 0,
                                      class: X(["flex-max", { fixed: g(r)[D].fixed }]),
                                      size: "small"
                                    }, {
                                      default: _(() => [
                                        P(F(g(r)[D].label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])) : (w(), j(H, { key: 1 }, [
                                      x(Pe, {
                                        class: "move",
                                        onMousedown: (W) => Te(W, D),
                                        value: "ellipsis-vertical"
                                      }, null, 8, ["onMousedown"]),
                                      x(z, {
                                        class: "flex-max no-spacing",
                                        size: "small"
                                      }, {
                                        default: _(() => [
                                          P(F(g(r)[D].label), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      x(Pe, {
                                        class: "no-spacing remove",
                                        onClick: () => ot(D),
                                        value: "trash-can",
                                        backend: "regular"
                                      }, null, 8, ["onClick"])
                                    ], 64))
                                  ]),
                                  _: 2
                                }, 1032, ["class", "style"]),
                                G("div", {
                                  class: X(["separator-bottom no-spacing", { "place-after": J.value !== void 0 && v.value !== void 0 && D === m.value[J.value] && J.value >= m.value.indexOf(v.value) }])
                                }, null, 2)
                              ], 512))), 256))
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ], 64)) : (w(), B(Z, {
                      key: 1,
                      class: "flex-max",
                      horizontal: "center",
                      vertical: "center"
                    }, {
                      default: _(() => [
                        x(z, { size: "small" }, {
                          default: _(() => [
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
                x(Z, {
                  class: "controls no-spacing",
                  horizontal: "right"
                }, {
                  default: _(() => [
                    x(St, {
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
const za = /* @__PURE__ */ ye(wa, [["__scopeId", "data-v-f095228a"]]);
export {
  xr as ColumnHint,
  ja as CommonTable,
  za as KpiSelector
};
