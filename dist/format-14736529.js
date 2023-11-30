import o from "numeral";
const f = {
  ...o.localeData(),
  delimiters: {
    decimal: ",",
    thousands: " "
  }
};
"fr" in o.locales ? o.locales.fr = f : o.register("locale", "fr", f);
o.locale("fr");
const i = {
  float: (t) => o(t).format("0,0.00"),
  integer: (t) => o(t).format("0,0"),
  money: (t, r, e, n) => {
    let a = "0,0";
    e > 0 && (a += `.${"0".repeat(e)}`);
    const l = o(t).format(a);
    return n ? `${r} ${l}` : `${l} ${r}`;
  },
  proportion: (t) => o(t).format("0,0.00%")
};
export {
  i as f
};
