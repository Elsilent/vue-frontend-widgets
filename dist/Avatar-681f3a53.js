import { defineComponent as _, toRefs as u, openBlock as t, createElementBlock as d, normalizeStyle as m, unref as e, createBlock as r, createCommentVNode as n, withCtx as p, createTextVNode as f, toDisplayString as v } from "vue";
import { I as k } from "./Info-1836ec0c.js";
import { I as x } from "./Icon-1e0f2d3b.js";
import { _ as b } from "./_plugin-vue_export-helper-dad06003.js";
const y = /* @__PURE__ */ _({
  __name: "Avatar",
  props: {
    icon: { default: "user-circle" },
    iconBackend: { default: "boxicons" },
    label: {},
    source: {}
  },
  setup(c) {
    const l = c, { icon: s, iconBackend: i, label: a, source: o } = u(l);
    return (g, B) => (t(), d("div", {
      class: "avatar",
      style: m(e(o) ? `background-image: url(${e(o)})` : void 0),
      tabindex: "0"
    }, [
      !e(a) && !e(o) ? (t(), r(x, {
        key: 0,
        backend: e(i),
        value: e(s),
        size: "large"
      }, null, 8, ["backend", "value"])) : n("", !0),
      e(a) && !e(o) ? (t(), r(k, {
        key: 1,
        elevation: "normal",
        size: "large-2"
      }, {
        default: p(() => [
          f(v(e(a)), 1)
        ]),
        _: 1
      })) : n("", !0)
    ], 4));
  }
});
const h = /* @__PURE__ */ b(y, [["__scopeId", "data-v-ee7109e4"]]);
export {
  h as A
};
