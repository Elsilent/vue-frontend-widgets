import { defineComponent as S, toRefs as x, computed as b, openBlock as m, createElementBlock as O, normalizeClass as z, createBlock as B, unref as n, createCommentVNode as N, withCtx as y, createTextVNode as V, toDisplayString as D, renderSlot as P, ref as M, toValue as R, createElementVNode as q, withKeys as g, withModifiers as K, normalizeStyle as G, createVNode as I, Fragment as H, renderList as J } from "vue";
import { I as A, A as $ } from "./Icon-1e0f2d3b.js";
import { I as C } from "./Info-1836ec0c.js";
import { _ as U } from "./_plugin-vue_export-helper-dad06003.js";
import { m as Q } from "./match-b8889c93.js";
const W = /* @__PURE__ */ S({
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
    const e = i, { disabled: p, mood: t, outline: o, shape: f } = x(e), c = b(() => ({
      disabled: p.value,
      outline: o.value,
      [`mood-background-${t.value}`]: !o.value,
      [`mood-border-${t.value}`]: !0,
      [`shape-${f.value}`]: !0
    })), w = (l) => {
      p.value && l.stopImmediatePropagation();
    };
    return (l, v) => (m(), O("button", {
      class: z(["button", c.value]),
      onClick: v[0] || (v[0] = (a) => w(a))
    }, [
      l.icon ? (m(), B(A, {
        key: 0,
        backend: l.iconBackend,
        mood: n(o) ? n(t) : "white",
        size: l.size,
        value: l.icon
      }, null, 8, ["backend", "mood", "size", "value"])) : N("", !0),
      l.label ? (m(), B(C, {
        key: 1,
        mood: n(o) ? n(t) : "white",
        size: l.size
      }, {
        default: y(() => [
          V(D(l.label), 1)
        ]),
        _: 1
      }, 8, ["mood", "size"])) : N("", !0),
      P(l.$slots, "default", {}, void 0, !0)
    ], 2));
  }
});
const ue = /* @__PURE__ */ U(W, [["__scopeId", "data-v-55013e23"]]);
function X({ length: i }) {
  const e = M(0);
  return { selectedItem: e, onKeypressDown: () => {
    e.value < R(i) && e.value++;
  }, onKeypressUp: () => {
    e.value > 0 && e.value--;
  }, clearSelectedItem: () => e.value = 0 };
}
const Y = ["tabindex"], Z = /* @__PURE__ */ S({
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
    const p = i, { items: t, modelValue: o, size: f } = x(p), { selectedItem: c, onKeypressDown: w, onKeypressUp: l, clearSelectedItem: v } = X({
      length: Object.keys(t.value).length - 1
    }), a = M(!1), d = b(() => ({
      active: a.value,
      [`size-${f.value}`]: !0
    })), s = b(
      () => Q(f.value).when("small", () => "small-3").when("normal", () => "small-2").done
    ), u = b(() => !(o != null && o.value) || o.value === void 0 ? 1 : -Object.keys(t.value).indexOf(o.value.toString())), F = b(() => ({
      "--item-count": Object.keys(t.value).length,
      "--selection-offset": u.value
    })), h = (_) => {
      e("update:modelValue", _), v(), a.value = !1;
    }, T = () => {
      if (a.value) {
        h(Object.keys(t.value)[c.value]);
        return;
      }
      v(), a.value = !0;
    };
    return (_, r) => (m(), B($, {
      inline: !_.noInline,
      column: ""
    }, {
      default: y(() => [
        q("div", {
          class: z(["dropdown", d.value]),
          onBlur: r[0] || (r[0] = () => a.value = !1),
          onClick: r[1] || (r[1] = () => a.value = !a.value),
          onKeyup: r[2] || (r[2] = g((k) => T(), ["enter"])),
          onKeydown: [
            r[3] || (r[3] = g(K((k) => n(w)(), ["prevent"]), ["down"])),
            r[4] || (r[4] = g(K((k) => n(l)(), ["prevent"]), ["up"]))
          ],
          style: G(F.value),
          tabindex: _.tabindex
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
              (m(!0), O(H, null, J(n(t), (k, j, E) => (m(), B(C, {
                class: z(["item no-spacing", { current: n(o) === j, selected: n(c) === E }]),
                onClick: K((L) => h(j), ["stop"]),
                onMouseover: (L) => c.value = E
              }, {
                default: y(() => [
                  V(D(k), 1)
                ]),
                _: 2
              }, 1032, ["class", "onClick", "onMouseover"]))), 256))
            ]),
            _: 1
          })
        ], 46, Y)
      ]),
      _: 1
    }, 8, ["inline"]));
  }
});
const de = /* @__PURE__ */ U(Z, [["__scopeId", "data-v-2cb03628"]]), ee = ["disabled", "placeholder", "type", "value"], oe = /* @__PURE__ */ S({
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
    const p = i, { disabled: t, modelValue: o, password: f, placeholder: c } = x(p), w = b(() => f.value ? "password" : void 0), l = (d) => {
      d.key === "Enter" && e("submit"), e("keydown", d);
    }, v = (d) => {
      e("keyup", d);
    }, a = (d) => {
      e("update:modelValue", d.target.value);
    };
    return (d, s) => (m(), O("input", {
      class: z(["input", `size-${d.size}`]),
      onBlur: s[0] || (s[0] = (u) => e("blur", u)),
      onFocus: s[1] || (s[1] = (u) => e("focus", u)),
      onKeydown: s[2] || (s[2] = (u) => l(u)),
      onKeyup: s[3] || (s[3] = (u) => v(u)),
      onInput: s[4] || (s[4] = (u) => a(u)),
      disabled: n(t),
      placeholder: n(c),
      type: w.value,
      value: n(o)
    }, null, 42, ee));
  }
});
const re = /* @__PURE__ */ U(oe, [["__scopeId", "data-v-ddc72477"]]);
export {
  ue as B,
  de as D,
  re as I,
  X as u
};
