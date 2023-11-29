const s = (t, r) => {
  const e = t.toString().toLowerCase(), n = r.toString().toLowerCase();
  return e > n ? 1 : e < n ? -1 : 0;
}, i = (t, r) => t > r ? 1 : t < r ? -1 : 0, u = (t) => (r, e) => {
  const n = t(r), o = t(e);
  return n > o ? 1 : n < o ? -1 : 0;
}, c = (...t) => (r, e) => {
  for (const n of t) {
    const o = n(r, e);
    if (o !== 0)
      return o;
  }
  return 0;
};
export {
  i as sort,
  u as sortCallback,
  s as sortInsensitive,
  c as sortMultiple
};
