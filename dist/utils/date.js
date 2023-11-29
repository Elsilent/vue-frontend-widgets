import { D as e } from "../datetime-31a2b505.js";
const s = (o) => {
  const t = e.now();
  let a = o.dateFrom.dateModifier(t);
  a > t && (a = t);
  let y = o.dateTo.dateModifier(t);
  return y > t && (y = t), [a.toFormat(r.yearMonthDay), y.toFormat(r.yearMonthDay)];
}, r = {
  yearMonth: "yyyy-LL",
  yearMonthDay: "yyyy-LL-dd",
  yearMonthDayDisplay: "dd/LL/yyyy"
}, n = (o) => e.fromFormat(o, r.yearMonthDay).toFormat(r.yearMonthDayDisplay), i = (o) => {
  const t = e.fromFormat(o[0], r.yearMonthDay), a = e.fromFormat(o[1], r.yearMonthDay);
  return t > a ? [o[1], o[0]] : [o[0], o[1]];
}, d = (o) => {
  const t = e.fromFormat(o[0], r.yearMonthDay), a = e.fromFormat(o[1], r.yearMonthDay);
  return [
    t.minus(a.diff(t).plus({ days: 1 })).toFormat(r.yearMonthDay),
    a.minus(a.diff(t).plus({ days: 1 })).toFormat(r.yearMonthDay)
  ];
}, D = (o) => {
  const t = e.fromFormat(o[0], r.yearMonthDay), a = e.fromFormat(o[1], r.yearMonthDay);
  return [
    t.minus({ year: 1 }).toFormat(r.yearMonthDay),
    a.minus({ year: 1 }).toFormat(r.yearMonthDay)
  ];
}, F = (o) => {
  const t = n(o[0]), a = n(o[1]);
  return `${t} - ${a}`;
}, h = (o) => {
  const t = o.split("-").map((a) => a.trim());
  if (t.length === 2 && !t.some((a) => a.length !== r.yearMonthDayDisplay.length))
    try {
      const a = e.fromFormat(t[0], r.yearMonthDayDisplay), y = e.fromFormat(t[1], r.yearMonthDayDisplay);
      return a > y || y > e.now() ? void 0 : [a.toFormat(r.yearMonthDay), y.toFormat(r.yearMonthDay)];
    } catch {
      return;
    }
};
export {
  r as dateFormat,
  n as dateToDisplayFormat,
  i as normalizeRange,
  d as previousRange,
  D as previousYear,
  s as rangeFromPreset,
  F as rangeToDisplayFormat,
  h as tryRangeFromDisplayFormat
};
