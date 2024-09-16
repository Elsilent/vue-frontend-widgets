import { getCurrentInstance as K, computed as u, inject as p, unref as o, ref as $, defineComponent as h, openBlock as d, createElementBlock as M, normalizeClass as r, normalizeStyle as y, createElementVNode as m, renderSlot as k, createBlock as f, withModifiers as C, withCtx as v, createVNode as z, createCommentVNode as S, Transition as V } from "vue";
import { b as j, f as I, a as F, c as q, u as D, E as _, d as E, _ as G, w as J } from "./base-9150843e.js";
const B = ["", "default", "small", "large"], T = (s) => {
  const n = K();
  return u(() => {
    var a, l;
    return (l = (a = n == null ? void 0 : n.proxy) == null ? void 0 : a.$props) == null ? void 0 : l[s];
  });
}, W = j({
  type: String,
  values: B,
  required: !1
}), O = Symbol("size"), R = () => {
  const s = p(O, {});
  return u(() => o(s.size) || "");
}, Y = (s, n = {}) => {
  const a = $(void 0), l = n.prop ? a : T("size"), e = n.global ? a : R(), i = n.form ? { size: void 0 } : p(I, void 0), c = n.formItem ? { size: void 0 } : p(F, void 0);
  return u(() => l.value || o(s) || (c == null ? void 0 : c.size) || (i == null ? void 0 : i.size) || e.value || "");
}, X = (s) => {
  const n = T("disabled"), a = p(I, void 0);
  return u(() => n.value || o(s) || (a == null ? void 0 : a.disabled) || !1);
}, Z = q({
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
    values: B
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
}), x = {
  close: (s) => s instanceof MouseEvent,
  click: (s) => s instanceof MouseEvent
}, A = h({
  name: "ElTag"
}), H = /* @__PURE__ */ h({
  ...A,
  props: Z,
  emits: x,
  setup(s, { emit: n }) {
    const a = s, l = Y(), e = D("tag"), i = u(() => {
      const { type: t, hit: g, effect: N, closable: w, round: P } = a;
      return [
        e.b(),
        e.is("closable", w),
        e.m(t || "primary"),
        e.m(l.value),
        e.m(N),
        e.is("hit", g),
        e.is("round", P)
      ];
    }), c = (t) => {
      n("close", t);
    }, b = (t) => {
      n("click", t);
    };
    return (t, g) => t.disableTransitions ? (d(), M("span", {
      key: 0,
      class: r(o(i)),
      style: y({ backgroundColor: t.color }),
      onClick: b
    }, [
      m("span", {
        class: r(o(e).e("content"))
      }, [
        k(t.$slots, "default")
      ], 2),
      t.closable ? (d(), f(o(_), {
        key: 0,
        class: r(o(e).e("close")),
        onClick: C(c, ["stop"])
      }, {
        default: v(() => [
          z(o(E))
        ]),
        _: 1
      }, 8, ["class", "onClick"])) : S("v-if", !0)
    ], 6)) : (d(), f(V, {
      key: 1,
      name: `${o(e).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: v(() => [
        m("span", {
          class: r(o(i)),
          style: y({ backgroundColor: t.color }),
          onClick: b
        }, [
          m("span", {
            class: r(o(e).e("content"))
          }, [
            k(t.$slots, "default")
          ], 2),
          t.closable ? (d(), f(o(_), {
            key: 0,
            class: r(o(e).e("close")),
            onClick: C(c, ["stop"])
          }, {
            default: v(() => [
              z(o(E))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : S("v-if", !0)
        ], 6)
      ]),
      _: 3
    }, 8, ["name"]));
  }
});
var L = /* @__PURE__ */ G(H, [["__file", "tag.vue"]]);
const ee = J(L);
export {
  ee as E,
  Y as a,
  X as b,
  Z as t,
  W as u
};
