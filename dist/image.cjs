"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const B=require("./BrandText-23e54252.cjs"),e=require("vue"),l=require("./Icon-80a3c9ab.cjs"),m=require("./Info-ad8c31fe.cjs"),_=require("./LineBarChart-02ce0532.cjs"),V=require("./marker.cjs"),N=require("./format-ec3f3449.cjs"),g=require("./_plugin-vue_export-helper-f246444f.cjs"),b=require("./Badge-3b4fdf67.cjs"),y=require("./Link-322e5eb2.cjs");require("./utils/error.cjs");require("./match-5382edcf.cjs");require("numeral");require("vue-router");const C=.01,I=(i,n)=>{if(Math.abs(i)<C)return Math.abs(n)<C?"equal":"less-full";if(Math.abs(n)<C)return"greater-full";const t=(i-n)/n;return i>n?{greater:t}:{less:t}},T=e.defineComponent({__name:"ComparisonKpiCard",props:{comparisonValue:{},formatter:{},inversed:{type:Boolean,default:!1},label:{},value:{}},setup(i){const n=i,{comparisonValue:t,inversed:u,value:r}=e.toRefs(n),p=e.computed(()=>r===void 0||r.value===void 0||t===void 0||t.value===void 0),c=e.computed(()=>p.value?"equal":I(r.value,t.value)),h=e.computed(()=>{const a="minus",o="up-arrow-alt",s="down-arrow-alt";switch(c.value){case"equal":return a;case"greater-full":return o;case"less-full":return s}return"less"in c.value?s:o}),x=e.computed(()=>{switch(c.value){case"equal":return 0;case"greater-full":return 1;case"less-full":return-1}return"less"in c.value?c.value.less:c.value.greater}),d=e.computed(()=>{const a="neutral",o=u.value?"important":"positive",s=u.value?"positive":"important";switch(c.value){case"equal":return a;case"greater-full":return o;case"less-full":return s}return"less"in c.value?s:o}),v=e.computed(()=>({loading:p.value}));return(a,o)=>(e.openBlock(),e.createBlock(l.Card,{class:e.normalizeClass(["kpi-card",v.value])},{default:e.withCtx(()=>[e.createVNode(l.Align,{column:""},{default:e.withCtx(()=>[e.createVNode(l.Align,{vertical:"center"},{default:e.withCtx(()=>[e.createVNode(m.Info,{class:"flex-max",size:"large-3"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(a.label),1)]),_:1}),e.createVNode(m.Info,{important:"",size:"large-3"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(r)===void 0?" ":a.formatter(e.unref(r))),1)]),_:1})]),_:1}),e.createVNode(l.Align,{class:"spacing-small",vertical:"center"},{default:e.withCtx(()=>[e.createVNode(l.Icon,{mood:d.value,value:h.value},null,8,["mood","value"]),e.createVNode(m.Info,{mood:d.value},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(N.formatOptions).proportion(x.value)),1)]),_:1},8,["mood"]),e.createVNode(V.Separator),e.createVNode(m.Info,null,{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(t)===void 0?" ":a.formatter(e.unref(t))),1)]),_:1})]),_:1})]),_:1}),e.unref(r)===void 0||e.unref(t)===void 0?(e.openBlock(),e.createBlock(l.Align,{key:0,class:"loader-container no-spacing",horizontal:"center",vertical:"center"},{default:e.withCtx(()=>[e.createVNode(_.Loader)]),_:1})):e.createCommentVNode("",!0)]),_:1},8,["class"]))}});const q=g._export_sfc(T,[["__scopeId","data-v-2721093f"]]),z=e.defineComponent({__name:"Dot",props:{mood:{default:()=>({mood:"accent"})}},setup(i){const n=i,{mood:t}=e.toRefs(n),u=e.computed(()=>{const r={};return"mood"in t.value?r[`mood-background-${t.value.mood}`]=!0:"chart"in t.value&&(r[`chart-${t.value.chart}`]=!0),r});return(r,p)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["dot",u.value])},null,2))}});const D=e.defineComponent({__name:"KpiCard",props:{formatter:{type:Function},icon:{},label:{},mood:{},value:{}},setup(i){const n=i,{value:t}=e.toRefs(n),u=e.computed(()=>({loading:t===void 0||t.value===void 0}));return(r,p)=>(e.openBlock(),e.createBlock(l.Card,{class:e.normalizeClass(["kpi-card",u.value])},{default:e.withCtx(()=>[e.createVNode(l.Align,{vertical:"center"},{default:e.withCtx(()=>[e.createVNode(l.Align,{class:"flex-max",column:""},{default:e.withCtx(()=>[e.createVNode(m.Info,null,{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(r.label),1)]),_:1}),e.createVNode(m.Info,{mood:r.mood,size:"large-3"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(t)===void 0?" ":r.formatter(e.unref(t))),1)]),_:1},8,["mood"])]),_:1}),e.createVNode(l.Icon,{mood:r.mood,value:r.icon,size:"large-6"},null,8,["mood","value"])]),_:1}),e.unref(t)===void 0?(e.openBlock(),e.createBlock(l.Align,{key:0,class:"loader-container no-spacing",horizontal:"center",vertical:"center"},{default:e.withCtx(()=>[e.createVNode(_.Loader)]),_:1})):e.createCommentVNode("",!0)]),_:1},8,["class"]))}});const S=g._export_sfc(D,[["__scopeId","data-v-e84b3f2e"]]),A=e.defineComponent({__name:"ProgressBar",props:{mood:{},value:{},size:{default:"large"}},setup(i){const n=i,{value:t,size:u}=e.toRefs(n),r=e.computed(()=>({"--width":`${t.value*100}%`,"--height":u.value==="large"?"30px":"auto"}));return(p,c)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["progress-bar",[`mood-background-${p.mood}`]]),style:e.normalizeStyle(r.value)},null,6))}});const w=g._export_sfc(A,[["__scopeId","data-v-ac82b9ec"]]),k="140px",L=e.defineComponent({__name:"KpiDistributionTable",props:{dimensionLabel:{},metrics:{},rows:{}},setup(i){const n=i,{metrics:t,rows:u}=e.toRefs(n),r=e.computed(()=>{const d=Object.keys(t.value);return d[d.length-1]}),p=(d=!1)=>{const v={};for(const a of Object.values(u.value))for(const[o,s]of Object.entries(a))o in v||(v[o]=0),d||(v[o]+=+s);return Object.keys(u.value).reduce((a,o)=>(a[o]=Object.keys(t.value).reduce((s,f)=>(s[f]=v[f]===0?0:u.value[o][f]/v[f],s),{}),a),{})},c=e.ref(p(!0));setTimeout(()=>{c.value=p()},10),e.watch(t,()=>{c.value=p()}),e.watch(u,()=>{c.value=p()});const h=e.computed(()=>Object.values(t.value).map(d=>{switch(d.align){case"left":return`1fr ${k}`;case"center":default:return`1fr ${k}`}}).join(" ")),x=e.computed(()=>({"--alignment":`max-content ${h.value}`,"--progressBarWidth":k}));return(d,v)=>(e.openBlock(),e.createElementBlock("div",{class:"kpi-distribution-table",style:e.normalizeStyle(x.value)},[e.createVNode(l.Align,{class:"cell header-cell row-first",vertical:"center"},{default:e.withCtx(()=>[e.createVNode(m.Info,null,{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(d.dimensionLabel),1)]),_:1})]),_:1}),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(t),(a,o)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(l.Align,{class:"cell header-cell",horizontal:"center",vertical:"center"}),e.createVNode(l.Align,{class:e.normalizeClass(["cell header-cell metric",{"row-last":o===r.value}]),horizontal:"left",vertical:"center"},{default:e.withCtx(()=>[e.createVNode(m.Info,null,{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(a.label),1)]),_:2},1024)]),_:2},1032,["class"])],64))),256)),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(u),(a,o)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(l.Align,{class:"cell row-first",vertical:"center"},{default:e.withCtx(()=>[e.renderSlot(d.$slots,"cell(dimension)",{value:{name:o,link:a.link}},()=>[e.createVNode(y.Link,{to:a.link},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(o),1)]),_:2},1032,["to"])],!0)]),_:2},1024),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(t),(s,f)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.createVNode(l.Align,{class:"cell",horizontal:s.align??"center",vertical:"center"},{default:e.withCtx(()=>[e.createVNode(m.Info,null,{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(s.formatter(a[f])),1)]),_:2},1024)]),_:2},1032,["horizontal"]),e.createVNode(l.Align,{class:e.normalizeClass(["cell metric",{"row-last":f===r.value}]),column:!0,horizontal:"center",vertical:"center"},{default:e.withCtx(()=>[e.createVNode(w,{mood:s.mood,value:c.value[o][f]},null,8,["mood","value"]),e.createVNode(b.Badge,{mood:s.mood,outline:""},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(N.formatOptions).proportion(c.value[o][f])),1)]),_:2},1032,["mood"])]),_:2},1032,["class"])],64))),256))],64))),256))],4))}});const $=g._export_sfc(L,[["__scopeId","data-v-707c5df7"]]);exports.Avatar=B.Avatar;exports.BrandTextImage=B.BrandTextImage;exports.Logo=B.Logo;exports.Icon=l.Icon;exports.LineBarChart=_.LineBarChart;exports.Loader=_.Loader;exports.ComparisonKpiCard=q;exports.Dot=z;exports.KpiCard=S;exports.KpiDistributionTable=$;exports.ProgressBar=w;
