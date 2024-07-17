import o from "numeral";
const l = {
  ...o.localeData(),
  delimiters: {
    decimal: ",",
    thousands: " "
  }
};
"fr" in o.locales ? o.locales.fr = l : o.register("locale", "fr", l);
o.locale("fr");
const s = {
  float: (t) => o(t).format("0,0.00"),
  integer: (t) => o(t).format("0,0"),
  money: (t, r, e, n) => {
    let a = "0,0";
    e > 0 && (a += `.${"0".repeat(e)}`);
    const f = o(t).format(a);
    return n ? `${r} ${f}` : `${f} ${r}`;
  },
  proportion: (t) => o(t).format("0,0.00%"),
  percent: (t) => o(t / 100).format("0,0.00%")
};
export {
  s as f
};
