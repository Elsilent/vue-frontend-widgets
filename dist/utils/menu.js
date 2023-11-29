class f {
  flattenItem(e, n, t = "") {
    return "route" in e ? [
      {
        ...e,
        code: `${t}${n}`
      }
    ] : Object.entries(e.items).map(([r, s]) => this.flattenItem(s, r, `${t}${n}.`)).flat();
  }
  flatten(e) {
    return Object.entries(e).map(([n, t]) => this.flattenItem(t, n)).flat();
  }
}
class l {
  find(e, n) {
    return e.find((t) => "code" in t && t.code === n);
  }
}
const u = new l();
export {
  f as MenuFlattener,
  l as MenuManager,
  u as menuManager
};
