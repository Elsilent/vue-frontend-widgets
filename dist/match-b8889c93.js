var u = Object.defineProperty;
var i = (s, t, e) => t in s ? u(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var h = (s, t, e) => (i(s, typeof t != "symbol" ? t + "" : t, e), e);
class r {
  constructor(t) {
    h(this, "matched", !1);
    h(this, "result");
    h(this, "value");
    this.value = t;
  }
  get done() {
    return this.result;
  }
  or(t) {
    return this.matched || (this.result = t(this.value)), this;
  }
  when(t, e) {
    return this.value === t && (this.matched = !0, this.result = e(this.value)), this;
  }
  whenAny(t, e) {
    return t.includes(this.value) && (this.matched = !0, this.result = e(this.value)), this;
  }
}
function l(s) {
  return new r(s);
}
export {
  l as m
};
