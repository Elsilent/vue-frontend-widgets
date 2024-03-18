import { defineComponent as d, toRefs as p, unref as t, openBlock as n, createBlock as c, withCtx as a, createVNode as s, mergeProps as l, renderSlot as i, createElementBlock as m } from "vue";
import { RouterLink as u } from "vue-router";
import { I as f } from "./Info-54758b60.js";
import { _ as k } from "./_plugin-vue_export-helper-dad06003.js";
const g = ["href", "target"], y = /* @__PURE__ */ d({
  __name: "Link",
  props: {
    to: {},
    isExternal: { type: Boolean, default: !1 }
  },
  setup(_) {
    const r = _, { to: e } = p(r);
    return (o, h) => !r.isExternal && (typeof t(e) == "string" || "name" in t(e)) ? (n(), c(t(u), {
      key: 0,
      class: "link",
      to: t(e)
    }, {
      default: a(() => [
        s(f, l({ mood: "important-alt" }, o.$attrs), {
          default: a(() => [
            i(o.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["to"])) : (n(), m("a", {
      key: 1,
      class: "link",
      href: t(e).toString(),
      target: r.isExternal ? "_blank" : "_self"
    }, [
      s(f, l({ mood: "important-alt" }, o.$attrs), {
        default: a(() => [
          i(o.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16)
    ], 8, g));
  }
});
const E = /* @__PURE__ */ k(y, [["__scopeId", "data-v-9da19fcd"]]);
export {
  E as L
};
