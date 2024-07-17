import { defineComponent as _, toRefs as d, openBlock as o, createElementBlock as u, normalizeStyle as m, unref as e, createBlock as r, createCommentVNode as n, withCtx as p, createTextVNode as f, toDisplayString as v } from "vue";
import { I as k } from "./Info-38a17291.js";
import { I as g } from "./Icon-53e685d0.js";
import { _ as x } from "./_plugin-vue_export-helper-dad06003.js";
const y = /* @__PURE__ */ _({
  __name: "Avatar",
  props: {
    icon: { default: "circle-user" },
    iconBackend: { default: "regular" },
    label: {},
    source: {}
  },
  setup(c) {
    const l = c, { icon: s, iconBackend: i, label: t, source: a } = d(l);
    return (b, B) => (o(), u("div", {
      class: "avatar",
      style: m(e(a) ? `background-image: url(${e(a)})` : void 0),
      tabindex: "0"
    }, [
      !e(t) && !e(a) ? (o(), r(g, {
        key: 0,
        backend: e(i),
        value: e(s),
        size: "large"
      }, null, 8, ["backend", "value"])) : n("", !0),
      e(t) && !e(a) ? (o(), r(k, {
        key: 1,
        elevation: "normal",
        size: "large-2"
      }, {
        default: p(() => [
          f(v(e(t)), 1)
        ]),
        _: 1
      })) : n("", !0)
    ], 4));
  }
});
const h = /* @__PURE__ */ x(y, [["__scopeId", "data-v-6a602d81"]]);
export {
  h as A
};
