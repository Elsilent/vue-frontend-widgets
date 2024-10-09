import { getCurrentInstance as $, computed as d, ref as K, inject as v, unref as s, defineComponent as S, openBlock as u, createElementBlock as M, normalizeClass as r, normalizeStyle as k, createElementVNode as m, renderSlot as y, createBlock as p, withModifiers as C, withCtx as f, createVNode as z, createCommentVNode as h, Transition as P } from "vue";
import { u as V, c as F, E as _ } from "./index-89580093.js";
import { f as B, g as j, a as D, u as G, h as E, _ as R, w as q } from "./base-b0eb9adb.js";
const I = (a) => {
  const t = $();
  return d(() => {
    var n, l;
    return (l = (n = t == null ? void 0 : t.proxy) == null ? void 0 : n.$props) == null ? void 0 : l[a];
  });
}, x = (a, t = {}) => {
  const n = K(void 0), l = t.prop ? n : I("size"), e = t.global ? n : V(), c = t.form ? { size: void 0 } : v(B, void 0), i = t.formItem ? { size: void 0 } : v(j, void 0);
  return d(() => l.value || s(a) || (i == null ? void 0 : i.size) || (c == null ? void 0 : c.size) || e.value || "");
}, X = (a) => {
  const t = I("disabled"), n = v(B, void 0);
  return d(() => t.value || s(a) || (n == null ? void 0 : n.disabled) || !1);
}, A = D({
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger"],
    default: "primary"
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: String,
  size: {
    type: String,
    values: F
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), H = {
  close: (a) => a instanceof MouseEvent,
  click: (a) => a instanceof MouseEvent
}, J = S({
  name: "ElTag"
}), L = /* @__PURE__ */ S({
  ...J,
  props: A,
  emits: H,
  setup(a, { emit: t }) {
    const n = a, l = x(), e = G("tag"), c = d(() => {
      const { type: o, hit: b, effect: T, closable: w, round: N } = n;
      return [
        e.b(),
        e.is("closable", w),
        e.m(o || "primary"),
        e.m(l.value),
        e.m(T),
        e.is("hit", b),
        e.is("round", N)
      ];
    }), i = (o) => {
      t("close", o);
    }, g = (o) => {
      t("click", o);
    };
    return (o, b) => o.disableTransitions ? (u(), M("span", {
      key: 0,
      class: r(s(c)),
      style: k({ backgroundColor: o.color }),
      onClick: g
    }, [
      m("span", {
        class: r(s(e).e("content"))
      }, [
        y(o.$slots, "default")
      ], 2),
      o.closable ? (u(), p(s(_), {
        key: 0,
        class: r(s(e).e("close")),
        onClick: C(i, ["stop"])
      }, {
        default: f(() => [
          z(s(E))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : h("v-if", !0)
    ], 6)) : (u(), p(P, {
      key: 1,
      name: `${s(e).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: f(() => [
        m("span", {
          class: r(s(c)),
          style: k({ backgroundColor: o.color }),
          onClick: g
        }, [
          m("span", {
            class: r(s(e).e("content"))
          }, [
            y(o.$slots, "default")
          ], 2),
          o.closable ? (u(), p(s(_), {
            key: 0,
            class: r(s(e).e("close")),
            onClick: C(i, ["stop"])
          }, {
            default: f(() => [
              z(s(E))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : h("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var O = /* @__PURE__ */ R(L, [["__file", "tag.vue"]]);
const Y = q(O);
export {
  Y as E,
  X as a,
  A as t,
  x as u
};
