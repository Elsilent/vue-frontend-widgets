import { defineComponent as B, toRefs as D, ref as S, computed as r, openBlock as c, createBlock as I, withCtx as d, createElementVNode as E, normalizeClass as x, normalizeStyle as N, createVNode as p, createTextVNode as g, toDisplayString as V, unref as s, createElementBlock as C, Fragment as h, renderList as j, withModifiers as A } from "vue";
import { m as F } from "./match-b8889c93.js";
import { A as k, I as T } from "./Icon-a62eb151.js";
import { I as z } from "./Info-54758b60.js";
import { _ as K } from "./_plugin-vue_export-helper-dad06003.js";
const U = /* @__PURE__ */ B({
  __name: "Dropdown",
  props: {
    items: {},
    modelValue: {},
    noInline: { type: Boolean, default: !1 },
    size: { default: "normal" }
  },
  emits: ["update:modelValue"],
  setup(f, { emit: t }) {
    const m = f, { items: u, modelValue: l, size: i } = D(m), a = S(!1), v = r(() => ({
      active: a.value,
      [`size-${i.value}`]: !0
    })), _ = r(
      () => F(i.value).when("small", () => "small-3").when("normal", () => "small-2").done
    ), y = r(() => !(l != null && l.value) || l.value === void 0 ? 1 : -Object.keys(u.value).indexOf(l.value.toString())), w = r(() => ({
      "--item-count": Object.keys(u.value).length,
      "--selection-offset": y.value
    })), n = (e) => {
      t("update:modelValue", e), a.value = !1;
    };
    return (e, o) => (c(), I(k, {
      inline: !e.noInline,
      column: ""
    }, {
      default: d(() => [
        E("div", {
          class: x(["dropdown", v.value]),
          onBlur: o[0] || (o[0] = () => a.value = !1),
          onClick: o[1] || (o[1] = () => a.value = !a.value),
          style: N(w.value),
          tabindex: "-1"
        }, [
          p(k, {
            class: "item current",
            vertical: "center"
          }, {
            default: d(() => [
              p(z, { class: "flex-max" }, {
                default: d(() => [
                  g(V(s(l) === void 0 ? " " : s(u)[s(l)]), 1)
                ]),
                _: 1
              }),
              p(T, {
                size: _.value,
                backend: "boxicons-solid",
                value: "down-arrow"
              }, null, 8, ["size"])
            ]),
            _: 1
          }),
          p(k, {
            class: "dropdown-menu no-spacing",
            column: ""
          }, {
            default: d(() => [
              (c(!0), C(h, null, j(s(u), (O, b) => (c(), I(z, {
                class: x(["item no-spacing", { current: s(l) === b }]),
                onClick: A(() => n(b), ["stop"])
              }, {
                default: d(() => [
                  g(V(O), 1)
                ]),
                _: 2
              }, 1032, ["class", "onClick"]))), 256))
            ]),
            _: 1
          })
        ], 38)
      ]),
      _: 1
    }, 8, ["inline"]));
  }
});
const J = /* @__PURE__ */ K(U, [["__scopeId", "data-v-9ef0d9f1"]]), $ = ["disabled", "placeholder", "type", "value"], L = /* @__PURE__ */ B({
  __name: "Input",
  props: {
    disabled: { type: Boolean, default: !1 },
    modelValue: { default: "" },
    password: { type: Boolean, default: !1 },
    placeholder: {}
  },
  emits: ["blur", "focus", "keydown", "keyup", "submit", "update:modelValue"],
  setup(f, { emit: t }) {
    const m = f, { disabled: u, modelValue: l, password: i, placeholder: a } = D(m), v = r(() => i.value ? "password" : void 0), _ = (n) => {
      n.key === "Enter" && t("submit"), t("keydown", n);
    }, y = (n) => {
      t("keyup", n);
    }, w = (n) => {
      t("update:modelValue", n.target.value);
    };
    return (n, e) => (c(), C("input", {
      class: "input",
      onBlur: e[0] || (e[0] = (o) => t("blur", o)),
      onFocus: e[1] || (e[1] = (o) => t("focus", o)),
      onKeydown: e[2] || (e[2] = (o) => _(o)),
      onKeyup: e[3] || (e[3] = (o) => y(o)),
      onInput: e[4] || (e[4] = (o) => w(o)),
      disabled: s(u),
      placeholder: s(a),
      type: v.value,
      value: s(l)
    }, null, 40, $));
  }
});
const P = /* @__PURE__ */ K(L, [["__scopeId", "data-v-7ef34fea"]]);
export {
  J as D,
  P as I
};
