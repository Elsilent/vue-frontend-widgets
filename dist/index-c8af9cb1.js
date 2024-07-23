import { defineComponent as u, toRefs as b, computed as i, openBlock as m, createElementBlock as h, normalizeClass as w, normalizeStyle as _, renderSlot as f, watch as T, unref as c, inject as x, ref as g, isRef as N, mergeProps as S } from "vue";
import { _ as C } from "./_plugin-vue_export-helper-dad06003.js";
import { b as P, i as v, d as D, a as k, c as E, u as M, e as F, f as $, _ as A, w as L } from "./popper-6b652923.js";
const B = /* @__PURE__ */ u({
  __name: "Grid",
  props: {
    mobileColumns: {},
    tabletColumns: {},
    columns: {}
  },
  setup(t) {
    const a = t, { mobileColumns: e, tabletColumns: o, columns: r } = b(a), n = i(() => ({
      mobile: e !== void 0 && e.value !== void 0,
      tablet: o !== void 0 && o.value !== void 0
    })), s = i(() => ({
      "--mobile-columns": (e == null ? void 0 : e.value) ?? (o == null ? void 0 : o.value) ?? r.value,
      "--tablet-columns": (o == null ? void 0 : o.value) ?? (e == null ? void 0 : e.value) ?? r.value,
      "--columns": r.value
    }));
    return (l, p) => (m(), h("div", {
      class: w(["grid", n.value]),
      style: _(s.value)
    }, [
      f(l.$slots, "default", {}, void 0, !0)
    ], 6));
  }
});
const q = /* @__PURE__ */ C(B, [["__scopeId", "data-v-64b893e0"]]);
function G(t, a, e) {
  var o = t == null ? void 0 : P(t, a);
  return o === void 0 ? e : o;
}
let d;
const Q = (t) => {
  var a;
  if (!v)
    return 0;
  if (d !== void 0)
    return d;
  const e = document.createElement("div");
  e.className = `${t}-scrollbar__wrap`, e.style.visibility = "hidden", e.style.width = "100px", e.style.position = "absolute", e.style.top = "-9999px", document.body.appendChild(e);
  const o = e.offsetWidth;
  e.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", e.appendChild(r);
  const n = r.offsetWidth;
  return (a = e.parentNode) == null || a.removeChild(e), d = o - n, d;
};
function X(t, a) {
  if (!v)
    return;
  if (!a) {
    t.scrollTop = 0;
    return;
  }
  const e = [];
  let o = a.offsetParent;
  for (; o !== null && t !== o && t.contains(o); )
    e.push(o), o = o.offsetParent;
  const r = a.offsetTop + e.reduce((p, y) => p + y.offsetTop, 0), n = r + a.offsetHeight, s = t.scrollTop, l = s + t.clientHeight;
  r < s ? t.scrollTop = r : n > l && (t.scrollTop = n - t.clientHeight);
}
const Z = "update:modelValue", ee = "change", te = ({ from: t, replacement: a, scope: e, version: o, ref: r, type: n = "API" }, s) => {
  T(() => c(s), (l) => {
    l && D(e, `[${n}] ${t} is about to be deprecated in version ${o}, please use ${a} instead.
For more detail, please visit: ${r}
`);
  }, {
    immediate: !0
  });
};
var I = {
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
const W = (t) => (a, e) => R(a, e, c(t)), R = (t, a, e) => G(e, t, t).replace(/\{(\w+)\}/g, (o, r) => {
  var n;
  return `${(n = a == null ? void 0 : a[r]) != null ? n : `{${r}}`}`;
}), U = (t) => {
  const a = i(() => c(t).name), e = N(t) ? t : g(t);
  return {
    lang: a,
    locale: e,
    t: W(t)
  };
}, z = Symbol("localeContextKey"), oe = (t) => {
  const a = t || x(z, g());
  return U(i(() => a.value || I));
}, J = k({
  size: {
    type: E([Number, String])
  },
  color: {
    type: String
  }
}), O = u({
  name: "ElIcon",
  inheritAttrs: !1
}), H = /* @__PURE__ */ u({
  ...O,
  props: J,
  setup(t) {
    const a = t, e = M("icon"), o = i(() => {
      const { size: r, color: n } = a;
      return !r && !n ? {} : {
        fontSize: F(r) ? void 0 : $(r),
        "--color": n
      };
    });
    return (r, n) => (m(), h("i", S({
      class: c(e).b(),
      style: c(o)
    }, r.$attrs), [
      f(r.$slots, "default")
    ], 16));
  }
});
var K = /* @__PURE__ */ A(H, [["__file", "icon.vue"]]);
const ae = L(K);
export {
  ee as C,
  ae as E,
  q as G,
  Z as U,
  te as a,
  G as b,
  Q as g,
  X as s,
  oe as u
};
