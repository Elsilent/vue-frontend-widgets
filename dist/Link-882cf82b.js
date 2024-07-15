import { defineComponent as s, toRefs as a, openBlock as d, createElementBlock as l, unref as i, createVNode as _, mergeProps as p, withCtx as f, renderSlot as c } from "vue";
import { I as m } from "./Info-38a17291.js";
import { _ as u } from "./_plugin-vue_export-helper-dad06003.js";
const k = ["href", "target"], g = /* @__PURE__ */ s({
  __name: "Link",
  props: {
    to: {},
    isExternal: { type: Boolean, default: !1 }
  },
  setup(n) {
    const t = n, { to: r } = a(t);
    return (e, o) => (d(), l("a", {
      class: "link",
      href: i(r).toString(),
      target: t.isExternal ? "_blank" : "_self",
      onClick: o[0] || (o[0] = (v) => e.$emit("click"))
    }, [
      _(m, p({ mood: "important-alt" }, e.$attrs), {
        default: f(() => [
          c(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16)
    ], 8, k));
  }
});
const h = /* @__PURE__ */ u(g, [["__scopeId", "data-v-4dddde03"]]);
export {
  h as L
};
