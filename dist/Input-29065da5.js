import { defineComponent as C, toRefs as S, computed as b, openBlock as v, createElementBlock as O, normalizeClass as V, createBlock as B, unref as t, createCommentVNode as E, withCtx as y, createTextVNode as $, toDisplayString as D, renderSlot as M, ref as N, toValue as P, createElementVNode as R, withKeys as g, withModifiers as z, normalizeStyle as q, createVNode as I, Fragment as G, renderList as H } from "vue";
import { I as A, A as K } from "./Icon-8f2ed8ba.js";
import { I as x } from "./Info-54758b60.js";
import { _ as U } from "./_plugin-vue_export-helper-dad06003.js";
import { m as J } from "./match-b8889c93.js";
const Q = /* @__PURE__ */ C({
  __name: "Button",
  props: {
    disabled: { type: Boolean, default: !1 },
    icon: {},
    iconBackend: {},
    label: {},
    mood: { default: "accent" },
    outline: { type: Boolean, default: !1 },
    size: { default: "normal" },
    shape: { default: "normal" }
  },
  setup(i) {
    const e = i, { disabled: p, mood: n, outline: o, shape: m } = S(e), f = b(() => ({
      disabled: p.value,
      outline: o.value,
      [`mood-background-${n.value}`]: !o.value,
      [`mood-border-${n.value}`]: !0,
      [`shape-${m.value}`]: !0
    })), _ = (l) => {
      p.value && l.stopImmediatePropagation();
    };
    return (l, c) => (v(), O("button", {
      class: V(["button", f.value]),
      onClick: c[0] || (c[0] = (a) => _(a))
    }, [
      l.icon ? (v(), B(A, {
        key: 0,
        backend: l.iconBackend,
        mood: t(o) ? t(n) : "white",
        size: l.size,
        value: l.icon
      }, null, 8, ["backend", "mood", "size", "value"])) : E("", !0),
      l.label ? (v(), B(x, {
        key: 1,
        mood: t(o) ? t(n) : "white",
        size: l.size
      }, {
        default: y(() => [
          $(D(l.label), 1)
        ]),
        _: 1
      }, 8, ["mood", "size"])) : E("", !0),
      M(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const ue = /* @__PURE__ */ U(Q, [["__scopeId", "data-v-40b6ab47"]]);
function W({ length: i }) {
  const e = N(0);
  return { selectedItem: e, onKeypressDown: () => {
    e.value < P(i) && e.value++;
  }, onKeypressUp: () => {
    e.value > 0 && e.value--;
  }, clearSelectedItem: () => e.value = 0 };
}
const X = ["tabindex"], Y = /* @__PURE__ */ C({
  __name: "Dropdown",
  props: {
    items: {},
    modelValue: {},
    noInline: { type: Boolean, default: !1 },
    size: { default: "normal" },
    tabindex: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(i, { emit: e }) {
    const p = i, { items: n, modelValue: o, size: m } = S(p), { selectedItem: f, onKeypressDown: _, onKeypressUp: l, clearSelectedItem: c } = W({
      length: Object.keys(n.value).length - 1
    }), a = N(!1), r = b(() => ({
      active: a.value,
      [`size-${m.value}`]: !0
    })), s = b(
      () => J(m.value).when("small", () => "small-3").when("normal", () => "small-2").done
    ), u = b(() => !(o != null && o.value) || o.value === void 0 ? 1 : -Object.keys(n.value).indexOf(o.value.toString())), F = b(() => ({
      "--item-count": Object.keys(n.value).length,
      "--selection-offset": u.value
    })), h = (w) => {
      e("update:modelValue", w), c(), a.value = !1;
    }, T = () => {
      if (a.value) {
        h(Object.keys(n.value)[f.value]);
        return;
      }
      c(), a.value = !0;
    };
    return (w, d) => (v(), B(K, {
      inline: !w.noInline,
      column: ""
    }, {
      default: y(() => [
        R("div", {
          class: V(["dropdown", r.value]),
          onBlur: d[0] || (d[0] = () => a.value = !1),
          onClick: d[1] || (d[1] = () => a.value = !a.value),
          onKeyup: d[2] || (d[2] = g((k) => T(), ["enter"])),
          onKeydown: [
            d[3] || (d[3] = g(z((k) => t(_)(), ["prevent"]), ["down"])),
            d[4] || (d[4] = g(z((k) => t(l)(), ["prevent"]), ["up"]))
          ],
          style: q(F.value),
          tabindex: w.tabindex
        }, [
          I(K, {
            class: "item current",
            vertical: "center"
          }, {
            default: y(() => [
              I(x, { class: "flex-max" }, {
                default: y(() => [
                  $(D(t(o) === void 0 ? " " : t(n)[t(o)]), 1)
                ]),
                _: 1
              }),
              I(A, {
                size: s.value,
                backend: "boxicons-solid",
                value: "down-arrow"
              }, null, 8, ["size"])
            ]),
            _: 1
          }),
          I(K, {
            class: "dropdown-menu no-spacing",
            column: ""
          }, {
            default: y(() => [
              (v(!0), O(G, null, H(t(n), (k, j, L) => (v(), B(x, {
                class: V(["item no-spacing", { current: t(o) === j, selected: t(f) === L }]),
                onClick: z((oe) => h(j), ["stop"])
              }, {
                default: y(() => [
                  $(D(k), 1)
                ]),
                _: 2
              }, 1032, ["class", "onClick"]))), 256))
            ]),
            _: 1
          })
        ], 46, X)
      ]),
      _: 1
    }, 8, ["inline"]));
  }
});
const de = /* @__PURE__ */ U(Y, [["__scopeId", "data-v-6912e15a"]]), Z = ["disabled", "placeholder", "type", "value"], ee = /* @__PURE__ */ C({
  __name: "Input",
  props: {
    disabled: { type: Boolean, default: !1 },
    modelValue: { default: "" },
    password: { type: Boolean, default: !1 },
    placeholder: {}
  },
  emits: ["blur", "focus", "keydown", "keyup", "submit", "update:modelValue"],
  setup(i, { emit: e }) {
    const p = i, { disabled: n, modelValue: o, password: m, placeholder: f } = S(p), _ = b(() => m.value ? "password" : void 0), l = (r) => {
      r.key === "Enter" && e("submit"), e("keydown", r);
    }, c = (r) => {
      e("keyup", r);
    }, a = (r) => {
      e("update:modelValue", r.target.value);
    };
    return (r, s) => (v(), O("input", {
      class: "input",
      onBlur: s[0] || (s[0] = (u) => e("blur", u)),
      onFocus: s[1] || (s[1] = (u) => e("focus", u)),
      onKeydown: s[2] || (s[2] = (u) => l(u)),
      onKeyup: s[3] || (s[3] = (u) => c(u)),
      onInput: s[4] || (s[4] = (u) => a(u)),
      disabled: t(n),
      placeholder: t(f),
      type: _.value,
      value: t(o)
    }, null, 40, Z));
  }
});
const re = /* @__PURE__ */ U(ee, [["__scopeId", "data-v-1afe063f"]]);
export {
  ue as B,
  de as D,
  re as I,
  W as u
};
