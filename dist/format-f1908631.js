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
const n = {
  float: (t) => o(t).format("0,0.00"),
  integer: (t) => o(t).format("0,0"),
  money: (t, e, r, m) => {
    let a = "0,0";
    r > 0 && (a += `.${"0".repeat(r)}`);
    const l = o(t).format(a);
    return m ? `${e} ${l}` : `${l} ${e}`;
  },
  proportion: (t) => o(t).format("0,0.00%")
};
export {
  n as f
};
