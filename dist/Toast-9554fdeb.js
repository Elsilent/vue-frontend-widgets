import { defineComponent as P, toRefs as $, watch as N, onUnmounted as V, openBlock as s, createBlock as p, unref as e, withKeys as w, withModifiers as x, withCtx as t, createElementBlock as K, Fragment as j, renderList as z, normalizeClass as T, createCommentVNode as B, createTextVNode as k, toDisplayString as y, createVNode as c } from "vue";
import { I as A, C as O, A as E } from "./Icon-8f2ed8ba.js";
import { I as b } from "./Info-54758b60.js";
import { P as S } from "./Popover-38d3223e.js";
import { u as F } from "./Input-b2f3286e.js";
import { _ as D } from "./_plugin-vue_export-helper-dad06003.js";
const R = ["onClick"], q = /* @__PURE__ */ P({
  __name: "PopoverMenu",
  props: {
    items: {},
    popoverClass: {},
    visible: { type: Boolean }
  },
  emits: ["select"],
  setup(u, { emit: m }) {
    const v = u, { items: r, visible: a } = $(v), { selectedItem: l, onKeypressDown: d, onKeypressUp: _, clearSelectedItem: C } = F({
      length: Object.keys(r.value).length - 1
    }), g = (o) => {
      m("select", o);
    };
    N(a, (o) => {
      o ? window.addEventListener("keydown", f) : window.removeEventListener("keydown", f);
    });
    const f = (o) => {
      switch (o.code) {
        case "ArrowDown":
          d();
          return;
        case "ArrowUp":
          _();
          return;
        case "Enter":
          h();
          return;
      }
    }, h = () => {
      a.value && g(Object.keys(r.value)[l.value]), C();
    };
    return V(() => {
      window.removeEventListener("keydown", f);
    }), (o, n) => (s(), p(S, {
      popoverClass: o.popoverClass,
      visible: e(a),
      onKeydown: [
        n[0] || (n[0] = w(x((i) => e(d)(), ["prevent"]), ["down"])),
        n[1] || (n[1] = w(x((i) => e(_)(), ["prevent"]), ["up"])),
        n[2] || (n[2] = w((i) => h(), ["enter"]))
      ]
    }, {
      default: t(() => [
        (s(!0), K(j, null, z(e(r), ({ icon: i, iconBackend: L, label: I }, M, U) => (s(), K("div", {
          class: T(["popover-item", { selected: e(l) === U }]),
          onClick: (H) => g(M)
        }, [
          i ? (s(), p(A, {
            key: 0,
            backend: L,
            value: i
          }, null, 8, ["backend", "value"])) : B("", !0),
          I ? (s(), p(b, { key: 1 }, {
            default: t(() => [
              k(y(I), 1)
            ]),
            _: 2
          }, 1024)) : B("", !0)
        ], 10, R))), 256))
      ]),
      _: 1
    }, 8, ["popoverClass", "visible"]));
  }
});
const ee = /* @__PURE__ */ D(q, [["__scopeId", "data-v-e4b6ffa4"]]), G = /* @__PURE__ */ P({
  __name: "Toast",
  props: {
    icon: {},
    iconBackend: {},
    message: {},
    mood: {},
    title: {}
  },
  setup(u) {
    const m = u, { icon: v, iconBackend: r, message: a, mood: l, title: d } = $(m);
    return (_, C) => (s(), p(O, {
      class: T(["toast", { [`mood-background-${e(l)}`]: e(l) }])
    }, {
      default: t(() => [
        c(E, { vertical: "center" }, {
          default: t(() => [
            c(A, {
              backend: e(r),
              value: e(v),
              mood: "white",
              size: "large-6"
            }, null, 8, ["backend", "value"]),
            c(E, { column: "" }, {
              default: t(() => [
                c(b, {
                  important: "",
                  mood: "white"
                }, {
                  default: t(() => [
                    k(y(e(d)), 1)
                  ]),
                  _: 1
                }),
                c(b, { mood: "white" }, {
                  default: t(() => [
                    k(y(e(a)), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["class"]));
  }
});
const oe = /* @__PURE__ */ D(G, [["__scopeId", "data-v-a1b98132"]]);
export {
  ee as P,
  oe as T
};
