import { defineComponent as M, toRefs as P, watch as V, onUnmounted as j, openBlock as r, createBlock as p, unref as e, withKeys as k, withModifiers as $, withCtx as t, createElementBlock as x, Fragment as z, renderList as O, normalizeClass as T, createCommentVNode as B, createTextVNode as y, toDisplayString as b, createVNode as i } from "vue";
import { I as A, C as S, A as E } from "./Icon-8f2ed8ba.js";
import { I as C } from "./Info-54758b60.js";
import { P as F } from "./Popover-38d3223e.js";
import { u as R } from "./Input-3b35b476.js";
import { _ as D } from "./_plugin-vue_export-helper-dad06003.js";
const q = ["onClick", "onMouseover"], G = /* @__PURE__ */ M({
  __name: "PopoverMenu",
  props: {
    items: {},
    popoverClass: {},
    visible: { type: Boolean }
  },
  emits: ["select"],
  setup(u, { emit: v }) {
    const m = u, { items: a, visible: l } = P(m), { selectedItem: n, onKeypressDown: d, onKeypressUp: _, clearSelectedItem: w } = R({
      length: Object.keys(a.value).length - 1
    }), g = (o) => {
      w(), v("select", o);
    };
    V(l, (o) => {
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
      l.value && g(Object.keys(a.value)[n.value]), w();
    };
    return j(() => {
      window.removeEventListener("keydown", f);
    }), (o, s) => (r(), p(F, {
      popoverClass: o.popoverClass,
      visible: e(l),
      onKeydown: [
        s[0] || (s[0] = k($((c) => e(d)(), ["prevent"]), ["down"])),
        s[1] || (s[1] = k($((c) => e(_)(), ["prevent"]), ["up"])),
        s[2] || (s[2] = k((c) => h(), ["enter"]))
      ]
    }, {
      default: t(() => [
        (r(!0), x(z, null, O(e(a), ({ icon: c, iconBackend: L, label: I }, U, K) => (r(), x("div", {
          class: T(["popover-item", { selected: e(n) === K }]),
          onClick: (N) => g(U),
          onMouseover: (N) => n.value = K
        }, [
          c ? (r(), p(A, {
            key: 0,
            backend: L,
            value: c
          }, null, 8, ["backend", "value"])) : B("", !0),
          I ? (r(), p(C, { key: 1 }, {
            default: t(() => [
              y(b(I), 1)
            ]),
            _: 2
          }, 1024)) : B("", !0)
        ], 42, q))), 256))
      ]),
      _: 1
    }, 8, ["popoverClass", "visible"]));
  }
});
const ee = /* @__PURE__ */ D(G, [["__scopeId", "data-v-d100284b"]]), H = /* @__PURE__ */ M({
  __name: "Toast",
  props: {
    icon: {},
    iconBackend: {},
    message: {},
    mood: {},
    title: {}
  },
  setup(u) {
    const v = u, { icon: m, iconBackend: a, message: l, mood: n, title: d } = P(v);
    return (_, w) => (r(), p(S, {
      class: T(["toast", { [`mood-background-${e(n)}`]: e(n) }])
    }, {
      default: t(() => [
        i(E, { vertical: "center" }, {
          default: t(() => [
            i(A, {
              backend: e(a),
              value: e(m),
              mood: "white",
              size: "large-6"
            }, null, 8, ["backend", "value"]),
            i(E, { column: "" }, {
              default: t(() => [
                i(C, {
                  important: "",
                  mood: "white"
                }, {
                  default: t(() => [
                    y(b(e(d)), 1)
                  ]),
                  _: 1
                }),
                i(C, { mood: "white" }, {
                  default: t(() => [
                    y(b(e(l)), 1)
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
const oe = /* @__PURE__ */ D(H, [["__scopeId", "data-v-a1b98132"]]);
export {
  ee as P,
  oe as T
};
