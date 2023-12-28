"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const w=require("./Logo-3e2ad6a2.cjs"),e=require("vue"),a=require("./Icon-80a3c9ab.cjs"),f=require("./Info-ad8c31fe.cjs"),_=require("./LineBarChart-5bae39ee.cjs"),k=require("./marker.cjs"),N=require("./format-ec3f3449.cjs"),g=require("./_plugin-vue_export-helper-f246444f.cjs"),y=require("./Badge-55f26f8c.cjs");require("./utils/error.cjs");require("./match-5382edcf.cjs");require("numeral");const x=.01,B=(i,n)=>{if(Math.abs(i)<x)return Math.abs(n)<x?"equal":"less-full";if(Math.abs(n)<x)return"greater-full";const t=(i-n)/n;return i>n?{greater:t}:{less:t}},b=e.defineComponent({__name:"ComparisonKpiCard",props:{comparisonValue:{},formatter:{},inversed:{type:Boolean,default:!1},label:{},value:{}},setup(i){const n=i,{comparisonValue:t,inversed:s,value:o}=e.toRefs(n),p=e.computed(()=>o===void 0||o.value===void 0||t===void 0||t.value===void 0),u=e.computed(()=>p.value?"equal":B(o.value,t.value)),h=e.computed(()=>{const l="minus",r="up-arrow-alt",c="down-arrow-alt";switch(u.value){case"equal":return l;case"greater-full":return r;case"less-full":return c}return"less"in u.value?c:r}),C=e.computed(()=>{switch(u.value){case"equal":return 0;case"greater-full":return 1;case"less-full":return-1}return"less"in u.value?u.value.less:u.value.greater}),d=e.computed(()=>{const l="neutral",r=s.value?"important":"positive",c=s.value?"positive":"important";switch(u.value){case"equal":return l;case"greater-full":return r;case"less-full":return c}return"less"in u.value?c:r}),v=e.computed(()=>({loading:p.value}));return(l,r)=>(e.openBlock(),e.createBlock(a.Card,{class:e.normalizeClass(["kpi-card",v.value])},{default:e.withCtx(()=>[e.createVNode(a.Align,{column:""},{default:e.withCtx(()=>[e.createVNode(a.Align,{vertical:"center"},{default:e.withCtx(()=>[e.createVNode(f.Info,{class:"flex-max",size:"large-3"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(l.label),1)]),_:1}),e.createVNode(f.Info,{important:"",size:"large-3"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(o)===void 0?" ":l.formatter(e.unref(o))),1)]),_:1})]),_:1}),e.createVNode(a.Align,{class:"spacing-small",vertical:"center"},{default:e.withCtx(()=>[e.createVNode(a.Icon,{mood:d.value,value:h.value},null,8,["mood","value"]),e.createVNode(f.Info,{mood:d.value},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(N.formatOptions).proportion(C.value)),1)]),_:1},8,["mood"]),e.createVNode(k.Separator),e.createVNode(f.Info,null,{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(t)===void 0?" ":l.formatter(e.unref(t))),1)]),_:1})]),_:1})]),_:1}),e.unref(o)===void 0||e.unref(t)===void 0?(e.openBlock(),e.createBlock(a.Align,{key:0,class:"loader-container no-spacing",horizontal:"center",vertical:"center"},{default:e.withCtx(()=>[e.createVNode(_.Loader)]),_:1})):e.createCommentVNode("",!0)]),_:1},8,["class"]))}});const I=g._export_sfc(b,[["__scopeId","data-v-2721093f"]]),D=e.defineComponent({__name:"Dot",props:{mood:{default:()=>({mood:"accent"})}},setup(i){const n=i,{mood:t}=e.toRefs(n),s=e.computed(()=>{const o={};return"mood"in t.value?o[`mood-background-${t.value.mood}`]=!0:"chart"in t.value&&(o[`chart-${t.value.chart}`]=!0),o});return(o,p)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["dot",s.value])},null,2))}});const q=e.defineComponent({__name:"KpiCard",props:{formatter:{type:Function},icon:{},label:{},mood:{},value:{}},setup(i){const n=i,{value:t}=e.toRefs(n),s=e.computed(()=>({loading:t===void 0||t.value===void 0}));return(o,p)=>(e.openBlock(),e.createBlock(a.Card,{class:e.normalizeClass(["kpi-card",s.value])},{default:e.withCtx(()=>[e.createVNode(a.Align,{vertical:"center"},{default:e.withCtx(()=>[e.createVNode(a.Align,{class:"flex-max",column:""},{default:e.withCtx(()=>[e.createVNode(f.Info,null,{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(o.label),1)]),_:1}),e.createVNode(f.Info,{mood:o.mood,size:"large-3"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(t)===void 0?" ":o.formatter(e.unref(t))),1)]),_:1},8,["mood"])]),_:1}),e.createVNode(a.Icon,{mood:o.mood,value:o.icon,size:"large-6"},null,8,["mood","value"])]),_:1}),e.unref(t)===void 0?(e.openBlock(),e.createBlock(a.Align,{key:0,class:"loader-container no-spacing",horizontal:"center",vertical:"center"},{default:e.withCtx(()=>[e.createVNode(_.Loader)]),_:1})):e.createCommentVNode("",!0)]),_:1},8,["class"]))}});const z=g._export_sfc(q,[["__scopeId","data-v-e84b3f2e"]]),S=e.defineComponent({__name:"ProgressBar",props:{mood:{},value:{}},setup(i){const n=i,{value:t}=e.toRefs(n),s=e.computed(()=>({"--width":`${t.value*100}%`}));return(o,p)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["progress-bar",[`mood-background-${o.mood}`]]),style:e.normalizeStyle(s.value)},null,6))}});const V=g._export_sfc(S,[["__scopeId","data-v-01158dc3"]]),T=e.defineComponent({__name:"KpiDistributionTable",props:{dimensionLabel:{},metrics:{},rows:{}},setup(i){const n=i,{metrics:t,rows:s}=e.toRefs(n),o=e.computed(()=>{const d=Object.keys(t.value);return d[d.length-1]}),p=(d=!1)=>{const v={};for(const l of Object.values(s.value))for(const[r,c]of Object.entries(l))r in v||(v[r]=0),d||(v[r]+=c);return Object.keys(s.value).reduce((l,r)=>(l[r]=Object.keys(t.value).reduce((c,m)=>(c[m]=v[m]===0?0:s.value[r][m]/v[m],c),{}),l),{})},u=e.ref(p(!0));setTimeout(()=>{u.value=p()},10),e.watch(t,()=>{u.value=p()}),e.watch(s,()=>{u.value=p()});const h=e.computed(()=>Object.values(t.value).map(d=>{switch(d.align){case"left":return"min-content 1fr";case"center":default:return"max-content 1fr"}}).join(" ")),C=e.computed(()=>({"--alignment":`max-content ${h.value}`}));return(d,v)=>(e.openBlock(),e.createElementBlock("div",{class:"kpi-distribution-table",style:e.normalizeStyle(C.value)},[e.createVNode(a.Align,{class:"cell header-cell row-first",vertical:"center"},{default:e.withCtx(()=>[e.createVNode(f.Info,null,{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(d.dimensionLabel),1)]),_:1})]),_:1}),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(t),(l,r)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(a.Align,{class:"cell header-cell",horizontal:"center",vertical:"center"},{default:e.withCtx(()=>[e.createVNode(f.Info,null,{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(l.label),1)]),_:2},1024)]),_:2},1024),e.createVNode(a.Align,{class:e.normalizeClass(["cell header-cell",{"row-last":r===o.value}]),horizontal:"center",vertical:"center"},{default:e.withCtx(()=>[e.createVNode(f.Info,null,{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(l.label)+" (%)",1)]),_:2},1024)]),_:2},1032,["class"])],64))),256)),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(s),(l,r)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(a.Align,{class:"cell row-first",vertical:"center"},{default:e.withCtx(()=>[e.renderSlot(d.$slots,"cell(dimension)",{value:r},()=>[e.createVNode(f.Info,null,{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(r),1)]),_:2},1024)],!0)]),_:2},1024),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(t),(c,m)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(a.Align,{class:"cell",horizontal:c.align??"center",vertical:"center"},{default:e.withCtx(()=>[e.createVNode(f.Info,null,{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(c.formatter(l[m])),1)]),_:2},1024)]),_:2},1032,["horizontal"]),e.createVNode(a.Align,{class:e.normalizeClass(["cell",{"row-last":m===o.value}]),horizontal:"center",vertical:"center"},{default:e.withCtx(()=>[e.createVNode(V,{mood:c.mood,value:u.value[r][m]},null,8,["mood","value"]),e.createVNode(y.Badge,{mood:c.mood,outline:""},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(N.formatOptions).proportion(u.value[r][m])),1)]),_:2},1032,["mood"])]),_:2},1032,["class"])],64))),256))],64))),256))],4))}});const A=g._export_sfc(T,[["__scopeId","data-v-08dca286"]]);exports.Avatar=w.Avatar;exports.Logo=w.Logo;exports.Icon=a.Icon;exports.LineBarChart=_.LineBarChart;exports.Loader=_.Loader;exports.ComparisonKpiCard=I;exports.Dot=D;exports.KpiCard=z;exports.KpiDistributionTable=A;exports.ProgressBar=V;
