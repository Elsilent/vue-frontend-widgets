import { getCurrentInstance as K, computed as u, inject as m, unref as o, ref as $, defineComponent as h, openBlock as d, createElementBlock as j, normalizeClass as r, normalizeStyle as y, createElementVNode as p, renderSlot as k, createBlock as f, withModifiers as C, withCtx as v, createVNode as z, createCommentVNode as S, Transition as M } from "vue";
import { E as _ } from "./index-98677358.js";
import { f as V, g as I, h as F, b as q, u as D, j as E, _ as G, w as J } from "./base-d7e543b4.js";
const B = ["", "default", "small", "large"], T = (s) => {
  const n = K();
  return u(() => {
    var l, a;
    return (a = (l = n == null ? void 0 : n.proxy) == null ? void 0 : l.$props) == null ? void 0 : a[s];
  });
}, X = V({
  type: String,
  values: B,
  required: !1
}), O = Symbol("size"), R = () => {
  const s = m(O, {});
  return u(() => o(s.size) || "");
}, Y = (s, n = {}) => {
  const l = $(void 0), a = n.prop ? l : T("size"), e = n.global ? l : R(), i = n.form ? { size: void 0 } : m(I, void 0), c = n.formItem ? { size: void 0 } : m(F, void 0);
  return u(() => a.value || o(s) || (c == null ? void 0 : c.size) || (i == null ? void 0 : i.size) || e.value || "");
}, ee = (s) => {
  const n = T("disabled"), l = m(I, void 0);
  return u(() => n.value || o(s) || (l == null ? void 0 : l.disabled) || !1);
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
    const l = s, a = Y(), e = D("tag"), i = u(() => {
      const { type: t, hit: g, effect: N, closable: w, round: P } = l;
      return [
        e.b(),
        e.is("closable", w),
        e.m(t || "primary"),
        e.m(a.value),
        e.m(N),
        e.is("hit", g),
        e.is("round", P)
      ];
    }), c = (t) => {
      n("close", t);
    }, b = (t) => {
      n("click", t);
    };
    return (t, g) => t.disableTransitions ? (d(), j("span", {
      key: 0,
      class: r(o(i)),
      style: y({ backgroundColor: t.color }),
      onClick: b
    }, [
      p("span", {
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
    ], 6)) : (d(), f(M, {
      key: 1,
      name: `${o(e).namespace.value}-zoom-in-center`,
      appear: ""
    }, {
      default: v(() => [
        p("span", {
          class: r(o(i)),
          style: y({ backgroundColor: t.color }),
          onClick: b
        }, [
          p("span", {
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
const oe = J(L);
export {
  oe as E,
  ee as a,
  Y as b,
  Z as t,
  X as u
};
