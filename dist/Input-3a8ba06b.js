import { defineComponent as S, toRefs as x, computed as w, openBlock as v, createElementBlock as O, normalizeClass as z, createBlock as B, unref as n, createCommentVNode as E, withCtx as y, createTextVNode as V, toDisplayString as D, renderSlot as M, ref as N, toValue as P, createElementVNode as R, withKeys as g, withModifiers as K, normalizeStyle as q, createVNode as I, Fragment as G, renderList as H } from "vue";
import { I as A, A as $ } from "./Icon-1e0f2d3b.js";
import { I as C } from "./Info-1836ec0c.js";
import { _ as U } from "./_plugin-vue_export-helper-dad06003.js";
import { m as J } from "./match-b8889c93.js";
const Q = /* @__PURE__ */ S({
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
    const e = i, { disabled: p, mood: t, outline: o, shape: m } = x(e), f = w(() => ({
      disabled: p.value,
      outline: o.value,
      [`mood-background-${t.value}`]: !o.value,
      [`mood-border-${t.value}`]: !0,
      [`shape-${m.value}`]: !0
    })), _ = (l) => {
      p.value && l.stopImmediatePropagation();
    };
    return (l, c) => (v(), O("button", {
      class: z(["button", f.value]),
      onClick: c[0] || (c[0] = (a) => _(a))
    }, [
      l.icon ? (v(), B(A, {
        key: 0,
        backend: l.iconBackend,
        mood: n(o) ? n(t) : "white",
        size: l.size,
        value: l.icon
      }, null, 8, ["backend", "mood", "size", "value"])) : E("", !0),
      l.label ? (v(), B(C, {
        key: 1,
        mood: n(o) ? n(t) : "white",
        size: l.size
      }, {
        default: y(() => [
          V(D(l.label), 1)
        ]),
        _: 1
      }, 8, ["mood", "size"])) : E("", !0),
      M(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const ue = /* @__PURE__ */ U(Q, [["__scopeId", "data-v-55013e23"]]);
function W({ length: i }) {
  const e = N(0);
  return { selectedItem: e, onKeypressDown: () => {
    e.value < P(i) && e.value++;
  }, onKeypressUp: () => {
    e.value > 0 && e.value--;
  }, clearSelectedItem: () => e.value = 0 };
}
const X = ["tabindex"], Y = /* @__PURE__ */ S({
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
    const p = i, { items: t, modelValue: o, size: m } = x(p), { selectedItem: f, onKeypressDown: _, onKeypressUp: l, clearSelectedItem: c } = W({
      length: Object.keys(t.value).length - 1
    }), a = N(!1), d = w(() => ({
      active: a.value,
      [`size-${m.value}`]: !0
    })), s = w(
      () => J(m.value).when("small", () => "small-3").when("normal", () => "small-2").done
    ), u = w(() => !(o != null && o.value) || o.value === void 0 ? 1 : -Object.keys(t.value).indexOf(o.value.toString())), F = w(() => ({
      "--item-count": Object.keys(t.value).length,
      "--selection-offset": u.value
    })), h = (b) => {
      e("update:modelValue", b), c(), a.value = !1;
    }, T = () => {
      if (a.value) {
        h(Object.keys(t.value)[f.value]);
        return;
      }
      c(), a.value = !0;
    };
    return (b, r) => (v(), B($, {
      inline: !b.noInline,
      column: ""
    }, {
      default: y(() => [
        R("div", {
          class: z(["dropdown", d.value]),
          onBlur: r[0] || (r[0] = () => a.value = !1),
          onClick: r[1] || (r[1] = () => a.value = !a.value),
          onKeyup: r[2] || (r[2] = g((k) => T(), ["enter"])),
          onKeydown: [
            r[3] || (r[3] = g(K((k) => n(_)(), ["prevent"]), ["down"])),
            r[4] || (r[4] = g(K((k) => n(l)(), ["prevent"]), ["up"]))
          ],
          style: q(F.value),
          tabindex: b.tabindex
        }, [
          I($, {
            class: "item current",
            vertical: "center"
          }, {
            default: y(() => [
              I(C, { class: "flex-max" }, {
                default: y(() => [
                  V(D(n(o) === void 0 ? " " : n(t)[n(o)]), 1)
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
          I($, {
            class: "dropdown-menu no-spacing",
            column: ""
          }, {
            default: y(() => [
              (v(!0), O(G, null, H(n(t), (k, j, L) => (v(), B(C, {
                class: z(["item no-spacing", { current: n(o) === j, selected: n(f) === L }]),
                onClick: K((oe) => h(j), ["stop"])
              }, {
                default: y(() => [
                  V(D(k), 1)
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
const de = /* @__PURE__ */ U(Y, [["__scopeId", "data-v-6912e15a"]]), Z = ["disabled", "placeholder", "type", "value"], ee = /* @__PURE__ */ S({
  __name: "Input",
  props: {
    disabled: { type: Boolean, default: !1 },
    modelValue: { default: "" },
    password: { type: Boolean, default: !1 },
    placeholder: {},
    size: { default: "normal" }
  },
  emits: ["blur", "focus", "keydown", "keyup", "submit", "update:modelValue"],
  setup(i, { emit: e }) {
    const p = i, { disabled: t, modelValue: o, password: m, placeholder: f } = x(p), _ = w(() => m.value ? "password" : void 0), l = (d) => {
      d.key === "Enter" && e("submit"), e("keydown", d);
    }, c = (d) => {
      e("keyup", d);
    }, a = (d) => {
      e("update:modelValue", d.target.value);
    };
    return (d, s) => (v(), O("input", {
      class: z(["input", `size-${d.size}`]),
      onBlur: s[0] || (s[0] = (u) => e("blur", u)),
      onFocus: s[1] || (s[1] = (u) => e("focus", u)),
      onKeydown: s[2] || (s[2] = (u) => l(u)),
      onKeyup: s[3] || (s[3] = (u) => c(u)),
      onInput: s[4] || (s[4] = (u) => a(u)),
      disabled: n(t),
      placeholder: n(f),
      type: _.value,
      value: n(o)
    }, null, 42, Z));
  }
});
const re = /* @__PURE__ */ U(ee, [["__scopeId", "data-v-ddc72477"]]);
export {
  ue as B,
  de as D,
  re as I,
  W as u
};
