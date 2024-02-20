import { defineComponent as f, toRefs as d, unref as t, openBlock as r, createBlock as p, withCtx as a, createVNode as s, renderSlot as l, createElementBlock as c } from "vue";
import { RouterLink as m } from "vue-router";
import { I as i } from "./Info-54758b60.js";
import { _ as u } from "./_plugin-vue_export-helper-dad06003.js";
const k = ["href", "target"], x = /* @__PURE__ */ f({
  __name: "Link",
  props: {
    to: {},
    isExternal: { type: Boolean, default: !1 }
  },
  setup(_) {
    const o = _, { to: e } = d(o);
    return (n, y) => !o.isExternal && (typeof t(e) == "string" || "name" in t(e)) ? (r(), p(t(m), {
      key: 0,
      class: "link",
      to: t(e)
    }, {
      default: a(() => [
        s(i, { mood: "important-alt" }, {
          default: a(() => [
            l(n.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["to"])) : (r(), c("a", {
      key: 1,
      class: "link",
      href: t(e).toString(),
      target: o.isExternal ? "_blank" : "_self"
    }, [
      s(i, { mood: "important-alt" }, {
        default: a(() => [
          l(n.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      })
    ], 8, k));
  }
});
const B = /* @__PURE__ */ u(x, [["__scopeId", "data-v-43ad78ab"]]);
export {
  B as L
};
