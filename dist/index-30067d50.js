import { c as d, e as g } from "./base-d7e543b4.js";
import { watch as f, unref as c, inject as b, ref as u, computed as m, isRef as w } from "vue";
import { b as v } from "./popper-6624aaae.js";
function y(e, o, t) {
  var a = e == null ? void 0 : v(e, o);
  return a === void 0 ? t : a;
}
let s;
const E = (e) => {
  var o;
  if (!d)
    return 0;
  if (s !== void 0)
    return s;
  const t = document.createElement("div");
  t.className = `${e}-scrollbar__wrap`, t.style.visibility = "hidden", t.style.width = "100px", t.style.position = "absolute", t.style.top = "-9999px", document.body.appendChild(t);
  const a = t.offsetWidth;
  t.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", t.appendChild(r);
  const n = r.offsetWidth;
  return (o = t.parentNode) == null || o.removeChild(t), s = a - n, s;
};
function M(e, o) {
  if (!d)
    return;
  if (!o) {
    e.scrollTop = 0;
    return;
  }
  const t = [];
  let a = o.offsetParent;
  for (; a !== null && e !== a && e.contains(a); )
    t.push(a), a = a.offsetParent;
  const r = o.offsetTop + t.reduce((p, h) => p + h.offsetTop, 0), n = r + o.offsetHeight, l = e.scrollTop, i = l + e.clientHeight;
  r < l ? e.scrollTop = r : n > i && (e.scrollTop = n - e.clientHeight);
}
const F = "update:modelValue", L = "change", A = ({ from: e, replacement: o, scope: t, version: a, ref: r, type: n = "API" }, l) => {
  f(() => c(l), (i) => {
    i && g(t, `[${n}] ${e} is about to be deprecated in version ${a}, please use ${o} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
};
var T = {
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
const x = (e) => (o, t) => C(o, t, c(e)), C = (e, o, t) => y(t, e, e).replace(/\{(\w+)\}/g, (a, r) => {
  var n;
  return `${(n = o == null ? void 0 : o[r]) != null ? n : `{${r}}`}`;
}), N = (e) => {
  const o = m(() => c(e).name), t = w(e) ? e : u(e);
  return {
    lang: o,
    locale: t,
    t: x(e)
  };
}, D = Symbol("localeContextKey"), W = (e) => {
  const o = e || b(D, u());
  return N(m(() => o.value || T));
};
export {
  L as C,
  F as U,
  A as a,
  y as b,
  E as g,
  M as s,
  W as u
};