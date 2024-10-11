import { j as p, e as h, a as y, k as d } from "./base-b0eb9adb.js";
import { watch as b, unref as m, inject as f, ref as i, computed as u, isRef as C, getCurrentInstance as w } from "vue";
import { b as T } from "./popper-2d1cdbf9.js";
function x(e, a, t) {
  var o = e == null ? void 0 : T(e, a);
  return o === void 0 ? t : o;
}
let s;
const _ = (e) => {
  var a;
  if (!p)
    return 0;
  if (s !== void 0)
    return s;
  const t = document.createElement("div");
  t.className = `${e}-scrollbar__wrap`, t.style.visibility = "hidden", t.style.width = "100px", t.style.position = "absolute", t.style.top = "-9999px", document.body.appendChild(t);
  const o = t.offsetWidth;
  t.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", t.appendChild(r);
  const n = r.offsetWidth;
  return (a = t.parentNode) == null || a.removeChild(t), s = o - n, s;
};
function U(e, a) {
  if (!p)
    return;
  if (!a) {
    e.scrollTop = 0;
    return;
  }
  const t = [];
  let o = a.offsetParent;
  for (; o !== null && e !== o && e.contains(o); )
    t.push(o), o = o.offsetParent;
  const r = a.offsetTop + t.reduce((g, v) => g + v.offsetTop, 0), n = r + a.offsetHeight, l = e.scrollTop, c = l + e.clientHeight;
  r < l ? e.scrollTop = r : n > c && (e.scrollTop = n - e.clientHeight);
}
const W = "update:modelValue", B = "change", R = ({ from: e, replacement: a, scope: t, version: o, ref: r, type: n = "API" }, l) => {
  b(() => m(l), (c) => {
    c && h(t, `[${n}] ${e} is about to be deprecated in version ${o}, please use ${a} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
};
var E = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color."
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const N = (e) => (a, t) => D(a, t, m(e)), D = (e, a, t) => x(t, e, e).replace(/\{(\w+)\}/g, (o, r) => {
  var n;
  return `${(n = a == null ? void 0 : a[r]) != null ? n : `{${r}}`}`;
}), S = (e) => {
  const a = u(() => m(e).name), t = C(e) ? e : i(e);
  return {
    lang: a,
    locale: t,
    t: N(e)
  };
}, P = Symbol("localeContextKey"), $ = (e) => {
  const a = e || f(P, i());
  return S(u(() => a.value || E));
}, k = Symbol("emptyValuesContextKey"), O = "use-empty-values", A = ["", void 0, null], F = void 0, K = y({
  emptyValues: Array,
  valueOnClear: {
    type: [String, Number, Boolean, Function],
    default: void 0,
    validator: (e) => d(e) ? !e() : !e
  }
}), J = (e, a) => {
  const t = w() ? f(k, i({})) : i({}), o = u(() => e.emptyValues || t.value.emptyValues || A), r = u(() => d(e.valueOnClear) ? e.valueOnClear() : e.valueOnClear !== void 0 ? e.valueOnClear : d(t.value.valueOnClear) ? t.value.valueOnClear() : t.value.valueOnClear !== void 0 ? t.value.valueOnClear : a !== void 0 ? a : F), n = (l) => o.value.includes(l);
  return o.value.includes(r.value) || h(O, "value-on-clear should be a value of empty-values"), {
    emptyValues: o,
    valueOnClear: r,
    isEmptyValue: n
  };
};
export {
  B as C,
  W as U,
  R as a,
  x as b,
  J as c,
  K as d,
  k as e,
  _ as g,
  P as l,
  U as s,
  $ as u
};
