import { defineComponent as _, toRefs as k, unref as e, openBlock as a, createBlock as c, withCtx as s, createVNode as l, mergeProps as i, renderSlot as f, createElementBlock as u } from "vue";
import { RouterLink as $ } from "vue-router";
import { I as p } from "./Info-54758b60.js";
import { _ as v } from "./_plugin-vue_export-helper-dad06003.js";
const g = ["href", "target"], y = /* @__PURE__ */ _({
  __name: "Link",
  props: {
    to: {},
    isExternal: { type: Boolean, default: !1 }
  },
  setup(m) {
    const r = m, { to: o } = k(r);
    return (t, n) => !r.isExternal && (typeof e(o) == "string" || "name" in e(o)) ? (a(), c(e($), {
      key: 0,
      class: "link",
      to: e(o),
      onClick: n[0] || (n[0] = (d) => t.$emit("click"))
    }, {
      default: s(() => [
        l(p, i({ mood: "important-alt" }, t.$attrs), {
          default: s(() => [
            f(t.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 16)
      ]),
      _: 3
    }, 8, ["to"])) : (a(), u("a", {
      key: 1,
      class: "link",
      href: e(o).toString(),
      target: r.isExternal ? "_blank" : "_self",
      onClick: n[1] || (n[1] = (d) => t.$emit("click"))
    }, [
      l(p, i({ mood: "important-alt" }, t.$attrs), {
        default: s(() => [
          f(t.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 16)
    ], 8, g));
  }
});
const I = /* @__PURE__ */ v(y, [["__scopeId", "data-v-a01f0e0c"]]);
export {
  I as L
};
