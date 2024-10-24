import { defineComponent as p, toRefs as m, computed as r, openBlock as _, createElementBlock as y, normalizeClass as g, normalizeStyle as C, renderSlot as b, ref as x, getCurrentInstance as d, provide as G, unref as z, inject as I } from "vue";
import { _ as S } from "./_plugin-vue_export-helper-dad06003.js";
import { e as K, n as k } from "./base-3d5ba31d.js";
import { l as O, e as E } from "./index-335787da.js";
import { z as j } from "./popper-e6bb9b68.js";
import { S as V } from "./index-ae6430dc.js";
const B = /* @__PURE__ */ p({
  __name: "Grid",
  props: {
    mobileColumns: {},
    tabletColumns: {},
    columns: {}
  },
  setup(t) {
    const a = t, { mobileColumns: o, tabletColumns: e, columns: n } = m(a), u = r(() => ({
      mobile: o !== void 0 && o.value !== void 0,
      tablet: e !== void 0 && e.value !== void 0
    })), s = r(() => ({
      "--mobile-columns": (o == null ? void 0 : o.value) ?? (e == null ? void 0 : e.value) ?? n.value,
      "--tablet-columns": (e == null ? void 0 : e.value) ?? (o == null ? void 0 : o.value) ?? n.value,
      "--columns": n.value
    }));
    return (l, c) => (_(), y("div", {
      class: g(["grid", u.value]),
      style: C(s.value)
    }, [
      b(l.$slots, "default", {}, void 0, !0)
    ], 6));
  }
});
const W = /* @__PURE__ */ S(B, [["__scopeId", "data-v-64b893e0"]]), v = (t) => Object.keys(t), f = Symbol(), i = x();
function N(t, a = void 0) {
  const o = d() ? I(f, i) : i;
  return t ? r(() => {
    var e, n;
    return (n = (e = o.value) == null ? void 0 : e[t]) != null ? n : a;
  }) : o;
}
const Y = (t, a, o = !1) => {
  var e;
  const n = !!d(), u = n ? N() : void 0, s = (e = a == null ? void 0 : a.provide) != null ? e : n ? G : void 0;
  if (!s) {
    K("provideGlobalConfig", "provideGlobalConfig() can only be used inside setup().");
    return;
  }
  const l = r(() => {
    const c = z(t);
    return u != null && u.value ? h(u.value, c) : c;
  });
  return s(f, l), s(O, r(() => l.value.locale)), s(k, r(() => l.value.namespace)), s(j, r(() => l.value.zIndex)), s(V, {
    size: r(() => l.value.size || "")
  }), s(E, r(() => ({
    emptyValues: l.value.emptyValues,
    valueOnClear: l.value.valueOnClear
  }))), (o || !i.value) && (i.value = l.value), l;
}, h = (t, a) => {
  const o = [.../* @__PURE__ */ new Set([...v(t), ...v(a)])], e = {};
  for (const n of o)
    e[n] = a[n] !== void 0 ? a[n] : t[n];
  return e;
};
export {
  W as G,
  Y as p,
  N as u
};
