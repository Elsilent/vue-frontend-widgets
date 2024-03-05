import { defineComponent as C, toRefs as S, computed as _, openBlock as v, createElementBlock as O, normalizeClass as V, createBlock as B, unref as n, createCommentVNode as E, withCtx as y, createTextVNode as $, toDisplayString as D, ref as N, toValue as M, createElementVNode as P, withKeys as g, withModifiers as z, normalizeStyle as R, createVNode as I, Fragment as q, renderList as G } from "vue";
import { I as A, A as K } from "./Icon-8f2ed8ba.js";
import { I as x } from "./Info-54758b60.js";
import { _ as U } from "./_plugin-vue_export-helper-dad06003.js";
import { m as H } from "./match-b8889c93.js";
const J = /* @__PURE__ */ C({
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
    const e = i, { disabled: p, mood: t, outline: o, shape: m } = S(e), f = _(() => ({
      disabled: p.value,
      outline: o.value,
      [`mood-background-${t.value}`]: !o.value,
      [`mood-border-${t.value}`]: !0,
      [`shape-${m.value}`]: !0
    })), w = (l) => {
      p.value && l.stopImmediatePropagation();
    };
    return (l, c) => (v(), O("button", {
      class: V(["button", f.value]),
      onClick: c[0] || (c[0] = (a) => w(a))
    }, [
      l.icon ? (v(), B(A, {
        key: 0,
        backend: l.iconBackend,
        mood: n(o) ? n(t) : "white",
        size: l.size,
        value: l.icon
      }, null, 8, ["backend", "mood", "size", "value"])) : E("", !0),
      l.label ? (v(), B(x, {
        key: 1,
        mood: n(o) ? n(t) : "white",
        size: l.size
      }, {
        default: y(() => [
          $(D(l.label), 1)
        ]),
        _: 1
      }, 8, ["mood", "size"])) : E("", !0)
    ], 2));
  }
});
const ae = /* @__PURE__ */ U(J, [["__scopeId", "data-v-7009d61d"]]);
function Q({ length: i }) {
  const e = N(0);
  return { selectedItem: e, onKeypressDown: () => {
    e.value < M(i) && e.value++;
  }, onKeypressUp: () => {
    e.value > 0 && e.value--;
  }, clearSelectedItem: () => e.value = 0 };
}
const W = ["tabindex"], X = /* @__PURE__ */ C({
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
    const p = i, { items: t, modelValue: o, size: m } = S(p), { selectedItem: f, onKeypressDown: w, onKeypressUp: l, clearSelectedItem: c } = Q({
      length: Object.keys(t.value).length - 1
    }), a = N(!1), r = _(() => ({
      active: a.value,
      [`size-${m.value}`]: !0
    })), s = _(
      () => H(m.value).when("small", () => "small-3").when("normal", () => "small-2").done
    ), u = _(() => !(o != null && o.value) || o.value === void 0 ? 1 : -Object.keys(t.value).indexOf(o.value.toString())), F = _(() => ({
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
    return (b, d) => (v(), B(K, {
      inline: !b.noInline,
      column: ""
    }, {
      default: y(() => [
        P("div", {
          class: V(["dropdown", r.value]),
          onBlur: d[0] || (d[0] = () => a.value = !1),
          onClick: d[1] || (d[1] = () => a.value = !a.value),
          onKeyup: d[2] || (d[2] = g((k) => T(), ["enter"])),
          onKeydown: [
            d[3] || (d[3] = g(z((k) => n(w)(), ["prevent"]), ["down"])),
            d[4] || (d[4] = g(z((k) => n(l)(), ["prevent"]), ["up"]))
          ],
          style: R(F.value),
          tabindex: b.tabindex
        }, [
          I(K, {
            class: "item current",
            vertical: "center"
          }, {
            default: y(() => [
              I(x, { class: "flex-max" }, {
                default: y(() => [
                  $(D(n(o) === void 0 ? " " : n(t)[n(o)]), 1)
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
              (v(!0), O(q, null, G(n(t), (k, j, L) => (v(), B(x, {
                class: V(["item no-spacing", { current: n(o) === j, selected: n(f) === L }]),
                onClick: z((ee) => h(j), ["stop"])
              }, {
                default: y(() => [
                  $(D(k), 1)
                ]),
                _: 2
              }, 1032, ["class", "onClick"]))), 256))
            ]),
            _: 1
          })
        ], 46, W)
      ]),
      _: 1
    }, 8, ["inline"]));
  }
});
const ue = /* @__PURE__ */ U(X, [["__scopeId", "data-v-6912e15a"]]), Y = ["disabled", "placeholder", "type", "value"], Z = /* @__PURE__ */ C({
  __name: "Input",
  props: {
    disabled: { type: Boolean, default: !1 },
    modelValue: { default: "" },
    password: { type: Boolean, default: !1 },
    placeholder: {}
  },
  emits: ["blur", "focus", "keydown", "keyup", "submit", "update:modelValue"],
  setup(i, { emit: e }) {
    const p = i, { disabled: t, modelValue: o, password: m, placeholder: f } = S(p), w = _(() => m.value ? "password" : void 0), l = (r) => {
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
      disabled: n(t),
      placeholder: n(f),
      type: w.value,
      value: n(o)
    }, null, 40, Y));
  }
});
const de = /* @__PURE__ */ U(Z, [["__scopeId", "data-v-7ef34fea"]]);
export {
  ae as B,
  ue as D,
  de as I,
  Q as u
};
