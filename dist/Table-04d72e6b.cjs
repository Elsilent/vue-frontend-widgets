"use strict";const e=require("vue"),se=require("./_plugin-vue_export-helper-f246444f.cjs"),pe=require("./datetime-a6d0f4bc.cjs"),he=require("./Icon-80a3c9ab.cjs"),ge={class:"scrollbar"},Ce=e.defineComponent({__name:"ScrollableArea",props:{active:{type:Boolean},mode:{},thumbOffset:{},thumbSize:{}},emits:["mousedown"],setup(te,{emit:D}){const K=te,{active:W,mode:L,thumbOffset:X,thumbSize:V}=e.toRefs(K),v=e.computed(()=>{const[i,y]=L.value==="vertical"?["top","height"]:["left","width"];return{[i]:`calc(3px + ${X.value} * (100% - ${V.value} - 6px))`,[y]:`${V.value}`}});return(i,y)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["scrollable-area",{active:e.unref(W),[e.unref(L)]:!0}]),onMousedown:y[0]||(y[0]=e.withModifiers(S=>D("mousedown",S),["stop"]))},[e.createElementVNode("div",ge,[e.createElementVNode("div",{class:"thumb",style:e.normalizeStyle(v.value)},null,4)])],34))}});const ne=se._export_sfc(Ce,[["__scopeId","data-v-56aba386"]]),ke=e.defineComponent({__name:"Scrollable",props:{contentClass:{},mode:{default:"vertical"},optimized:{type:Boolean,default:!1},relativeTo:{},scrollPosition:{default:()=>({left:0,top:0})},scrollHeightDelta:{default:0},scrollWidthDelta:{default:0},staticPosition:{type:Boolean,default:!1},updateKey:{}},emits:["update:scrollPosition"],setup(te,{emit:D}){const K=te,{mode:W,relativeTo:L,scrollPosition:X,scrollHeightDelta:V,scrollWidthDelta:v,staticPosition:i}=e.toRefs(K),y=e.ref(!1),S=e.ref(0),T=e.ref(0),R=e.ref(0),h=e.ref(0),k=e.ref(),j=e.ref(),A=e.ref(),G=e.ref(),z=e.ref(),N=e.ref(0),b=e.ref(0),f=e.ref(),E=e.computed(()=>N.value/(h.value-T.value)),O=e.computed(()=>`max(56px, (100% - 14px) * ${T.value/h.value})`),F=e.computed(()=>`max(56px, (100% - 14px) * ${S.value/R.value})`),ee=e.computed(()=>b.value/(R.value-S.value)),$=e.ref();e.onUnmounted(()=>{Q.disconnect(),Z.disconnect()});const p=()=>{k.value&&(f.value!==void 0&&(clearTimeout(f.value),f.value=void 0),y.value=!1,k.value=void 0)},Y=()=>L!=null&&L.value?L.value():$.value,P=u=>{const H=Y();H&&H.scrollTo(u)},re=u=>{P({left:((G==null?void 0:G.value)??0)+u*h.value/(T.value-v.value)})},oe=u=>{P({top:((z==null?void 0:z.value)??0)+u*R.value/(S.value-V.value)})},J=u=>{if(k.value){switch(k.value){case"horizontal":re(u.clientX-((j==null?void 0:j.value)??0));break;case"vertical":oe(u.clientY-((A==null?void 0:A.value)??0));break}u.preventDefault()}},s=()=>{k.value=void 0,I(),window.removeEventListener("mousemove",J),window.removeEventListener("mouseup",s)},c=(u,H)=>{p(),y.value=!0,k.value=H;const _=Y();switch(k.value){case"horizontal":j.value=u.clientX,G.value=(_==null?void 0:_.scrollLeft)??0;break;case"vertical":A.value=u.clientY,z.value=(_==null?void 0:_.scrollTop)??0;break}window.addEventListener("mousemove",J),window.addEventListener("mouseup",s)},r=u=>{S.value!==u.clientHeight&&(S.value=u.clientHeight)},d=u=>{T.value!==u.clientWidth&&(T.value=u.clientWidth)},w=u=>{R.value!==u.scrollHeight&&(R.value=u.scrollHeight)},B=u=>{h.value!==u.scrollWidth&&(h.value=u.scrollWidth)},g=u=>{N.value=u.scrollLeft,D("update:scrollPosition",{left:N.value,top:b.value})},x=u=>{b.value=u.scrollTop,D("update:scrollPosition",{left:N.value,top:b.value})},M=()=>{const u=Y();u&&(r(u),d(u),w(u),B(u))},Q=new MutationObserver(()=>M()),Z=new ResizeObserver(()=>M()),q=u=>{g(u.target),x(u.target)},I=()=>{M(),!k.value&&(p(),y.value=!0,f.value=window.setTimeout(()=>{y.value=!1},2500))},U=()=>{Q.disconnect(),Z.disconnect();const u=Y();u&&(Q.observe(u,{childList:!0,subtree:!0}),Z.observe(u))};return e.onMounted(()=>{U()}),e.watch(L,()=>U()),e.watch(X,u=>{N.value=u.left,b.value=u.top,e.nextTick(()=>P(u))},{deep:!0,immediate:!0}),(u,H)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["scrollable",{[`mode-${e.unref(W)}`]:!0,static:e.unref(i)}])},[u.optimized?e.withMemo([u.updateKey],()=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["scrollable-content",u.contentClass]),ref_key:"content",ref:$,key:u.updateKey,onMousemove:I,onScroll:q},[e.renderSlot(u.$slots,"default",{},void 0,!0)],34)),H,0):(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(["scrollable-content",u.contentClass]),ref_key:"content",ref:$,onMousemove:I,onScroll:q},[e.renderSlot(u.$slots,"default",{},void 0,!0)],34)),e.unref(W)!=="vertical"?(e.openBlock(),e.createBlock(ne,{key:2,onMousedown:H[1]||(H[1]=e.withModifiers(_=>c(_,"horizontal"),["stop"])),active:h.value>T.value&&(y.value||k.value==="horizontal"),class:e.normalizeClass({"scrollbar-visible":h.value>T.value}),thumbOffset:E.value,thumbSize:O.value,mode:"horizontal"},null,8,["active","class","thumbOffset","thumbSize"])):e.createCommentVNode("",!0),e.unref(W)==="both-top"?(e.openBlock(),e.createBlock(ne,{key:3,onMousedown:H[2]||(H[2]=e.withModifiers(_=>c(_,"horizontal"),["stop"])),active:h.value>T.value&&(y.value||k.value==="horizontal"),class:e.normalizeClass({"scrollbar-visible":h.value>T.value}),thumbOffset:E.value,thumbSize:O.value,mode:"horizontal-top"},null,8,["active","class","thumbOffset","thumbSize"])):e.createCommentVNode("",!0),e.unref(W)!=="horizontal"?(e.openBlock(),e.createBlock(ne,{key:4,onMousedown:H[3]||(H[3]=e.withModifiers(_=>c(_,"vertical"),["stop"])),active:R.value>S.value&&(y.value||k.value==="vertical"),class:e.normalizeClass({"scrollbar-visible":R.value>S.value}),thumbOffset:ee.value,thumbSize:F.value,mode:"vertical"},null,8,["active","class","thumbOffset","thumbSize"])):e.createCommentVNode("",!0)],2))}});const ve=se._export_sfc(ke,[["__scopeId","data-v-21092b38"]]),be=["onClick","onMousedown","data-column"],we=["onClick"],Be=["data-column"],ye={key:0,class:"cell column cell-additional-header row-number"},Se=["data-additionalHeader","data-column"],Te={key:0,class:"cell total top-total row-number"},$e=["data-column","data-subcolumn-index"],Me=["data-column"],ze=["onClick","data-column","data-subcolumn-index"],Ne=["data-column","data-primary-key"],Ee=["data-column","data-primary-key","data-subcolumn-index"],He=["innerHTML"],_e={key:0,class:"cell total row-number"},Re=["data-column","data-subcolumn-index"],Oe=["data-column"],Le=e.defineComponent({__name:"SimpleTable",props:{additionalHeaders:{default:()=>({})},cellClasses:{default:()=>({})},colorMetrics:{type:Boolean,default:!1},coloredMetrics:{default:()=>[]},columns:{},comparisonColumnKeys:{},detailsRows:{},dragColumns:{type:Boolean,default:!1},inversedKpis:{},noDataMessage:{default:"&nbsp;"},orderBy:{},orderColumnType:{},primaryColumn:{default:"id"},rows:{},showNoDataMessage:{type:Boolean,default:!1},showRowNumber:{type:Boolean,default:!0},showTotal:{type:Boolean,default:!0},showTopTotal:{type:Boolean,default:!1}},emits:["update:orderBy","addColoredMetric","removeColoredMetric","move:column"],setup(te,{emit:D}){const K=te,{additionalHeaders:W,cellClasses:L,colorMetrics:X,coloredMetrics:V,columns:v,comparisonColumnKeys:i,detailsRows:y,dragColumns:S,inversedKpis:T,noDataMessage:R,orderBy:h,orderColumnType:k,primaryColumn:j,rows:A,showNoDataMessage:G,showRowNumber:z,showTotal:N,showTopTotal:b}=e.toRefs(K),f=e.ref(),E=e.ref(),O=e.ref(0),F=e.ref(0),ee=e.ref(0),$=e.ref({}),p=e.computed(()=>Object.entries(v.value).filter(([o,{visible:l}])=>l).map(([o,l])=>o)),Y=e.computed(()=>p.value.length+(z.value?1:0)),P=e.computed(()=>O.value>3),re=e.computed(()=>Object.values(A.value).reduce((o,l)=>{for(const[t,n]of Object.entries(v.value))if(n.type!=="string")if(i!=null&&i.value&&(n.colspan??0)>1){t in o||(o[t]=Object.entries(l[t]).reduce((a,[m,C])=>(a[m]=parseFloat(C),a),{}));for(const a in o[t])o[t][a]>l[t][a]&&(o[t][a]=parseFloat(l[t][a]))}else(!(t in o)||o[t]>l[t])&&(o[t]=parseFloat(l[t]));return o},{})),oe=e.computed(()=>Object.values(A.value).reduce((o,l)=>{for(const[t,n]of Object.entries(v.value))if(n.type!=="string")if(i!=null&&i.value&&(n.colspan??0)>1){t in o||(o[t]=Object.entries(l[t]).reduce((a,[m,C])=>(a[m]=parseFloat(C),a),{}));for(const a in o[t])o[t][a]<l[t][a]&&(o[t][a]=parseFloat(l[t][a]))}else(!(t in o)||o[t]<l[t])&&(o[t]=parseFloat(l[t]));return o},{})),J=e.computed(()=>i!=null&&i.value?p.value.map(o=>v.value[o].rowspan??1).reduce((o,l)=>o>l?o:l):1),s=e.computed(()=>Object.values(A.value).sort((o,l)=>{const t=(()=>{const n=Q(h.value[0].reduce((m,C)=>m[C],o),k.value),a=Q(h.value[0].reduce((m,C)=>m[C],l),k.value);return n>a?1:n<a?-1:0})();return h.value[1]?-t:t}).reduce((o,l,t)=>(o.push({...l,rowInfo:{index:t,detailable:!0}}),y.value[l[j.value]]&&o.push(...Object.entries(y.value[l[j.value]]).map(([n,a])=>({...a,rowInfo:{index:t,subindex:+n,detailable:!1}}))),o),[])),c=e.computed(()=>{let o=0;for(const t of p.value){const n=v.value[t];n.colspan&&(i!=null&&i.value)?o+=n.colspan:o++}let l=`repeat(${o}, auto)`;return z.value&&(l=`min-content ${l}`),{"grid-template-columns":l}}),r=o=>$.value[o]?$.value[o].height:0,d=(o,l,t,n)=>{const a={...L.value,even:l%2===0};if(X.value){const m=(()=>!T||!T.value?"positive":T.value.includes(t)?"negative":"positive")();a[`color-intensity-${w(o[t],t,n)}`]=!0,a[`color-${m}`]=!0,n!==void 0&&i&&i.value&&i.value[n]==="difference"?a.colored=!1:a.colored=q(t)>=0}return a},w=(o,l,t)=>{if(v.value[l].type==="string")return;let n=o,a=oe.value[l],m=re.value[l];return i&&i.value&&t!==void 0&&(n=n[i.value[t]],a=a[i.value[t]],m=m[i.value[t]]),a===m?0:Math.round((n-m)*10/(a-m))},B=(o,l)=>{const t=v.value[o],n=[o];l!==void 0&&(i&&i.value?n.push(i.value[l]):n.push(l.toString()));const a=h.value[0]?h.value[0].every((m,C)=>m===n[C]):!1;return{"column-main-extended":l===void 0&&(t.rowspan??0)>1,dragged:f.value?p.value[f.value]===o:!1,"drag-mode":P.value,orderable:!(i&&i.value)||(t.colspan??1)===1||l!==void 0,"ordered-by":a,[`order-direction-${h.value[1]?"desc":"asc"}`]:a}},g=o=>{const l={};if($.value[o])if(f.value!==void 0&&p.value[f.value]===o){const{height:t,left:n,width:a}=$.value[o];l.left=`${Math.floor(n+ee.value-F.value)}px`,l.height=`${t+1}px`,l.width=`${Math.round(a)}px`}else{const t=p.value.indexOf(o);let n=(()=>{if(f.value===void 0||E.value===void 0)return 0;if(f.value<t){if(E.value>=t)return-$.value[p.value[f.value]].width}else if(E.value<=t)return $.value[p.value[f.value]].width;return 0})();const{height:a,left:m,width:C}=$.value[o];l.left=`${Math.floor(m+n)}px`,l.height=`${a+1}px`,l.width=`${Math.floor(C)}px`}return l},x=o=>{const l=v.value[o],t={};return i&&i.value&&(l.colspan&&(t["grid-column-end"]=`span ${l.colspan}`),l.rowspan&&(t["grid-row-end"]=`span ${l.rowspan}`)),t},M=o=>i&&i.value?i.value[o]:void 0,Q=(o,l)=>{switch(l){case"float":case"int":case"money":case"money_capped":case"percent":case"time":return parseFloat(o??0);case"date":return pe.DateTime.fromISO(o).toUnixInteger();default:return o}},Z=o=>o.subindex===void 0?o.index+1:`${o.index+1}.${o.subindex+1}`,q=o=>V.value.findIndex(l=>l===o),I=o=>X.value&&!["date","string"].includes(v.value[o].type),U=(o,l)=>{if(i&&i.value&&v.value[o].colspan&&l===void 0||f.value!==void 0&&P.value&&p.value[f.value]===o)return;const t=[o];l!==void 0&&(i&&i.value?t.push(i.value[l]):t.push(l.toString()));const n=t.every((m,C)=>m===h.value[0][C]),a=(()=>n?!h.value[1]:v.value[o].type!=="string")();D("update:orderBy",[t,a])},u=(o,l)=>{S.value&&(f.value=p.value.indexOf(o),E.value=f.value,O.value=0,F.value=l.clientX,ee.value=l.clientX,window.addEventListener("mousemove",H),window.addEventListener("mouseup",_))},H=o=>{if(f.value===void 0)return;O.value++,ee.value=o.clientX;const l=Object.entries(v.value).filter(([C,le])=>le.visible).map(([C])=>C).map((C,le)=>({columnIndex:parseInt(le.toString()),sizing:$.value[C]})),t=l[f.value].sizing,n=t.width/2,m=t.left+ee.value-F.value;E.value=(()=>{for(const{columnIndex:C,sizing:le}of l)if(m+n-le.left-le.width<0)return C;return l.length})()},_=o=>{if(f.value===void 0||E.value===void 0)return;P.value&&E.value!==f.value&&D("move:column",{from:f.value,to:E.value}),E.value=void 0,O.value=0,f.value=void 0,window.removeEventListener("mousemove",H),window.removeEventListener("mouseup",_)},me=o=>{q(o)>=0?D("removeColoredMetric",o):D("addColoredMetric",o)},ae=e.ref({}),fe=(o,l)=>{l&&(ae.value[o]=l)},ue=e.ref(),ie=()=>{if(!ue.value)return;const o=ue.value.getBoundingClientRect();$.value=Object.entries(v.value).reduce((l,[t,n])=>{if(n.visible&&ae.value[t]){const a=ae.value[t].getBoundingClientRect();l[t]={height:a.height,left:a.left-o.left,width:a.width}}return l},{})},de=new ResizeObserver(()=>{ie()});return e.watch(ae,()=>{de.disconnect();for(const o of Object.values(ae.value))de.observe(o);ie()},{deep:!0,immediate:!0}),ie(),(o,l)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["table",{"with-secondary":!!e.unref(i)&&p.value.some(t=>(e.unref(v)[t].colspan||1)!==1)}]),ref_key:"table",ref:ue,style:e.normalizeStyle(c.value)},[e.unref(z)?(e.openBlock(),e.createElementBlock("div",{key:0,class:"cell column column-main row-number",style:e.normalizeStyle(J.value>1?{"grid-row-end":`span ${J.value}`}:void 0)},[e.renderSlot(o.$slots,"columnRowNumber",{},()=>[e.createTextVNode("#")],!0)],4)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(p.value,t=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.unref(v)[t].visible?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(["cell column column-main",B(t)]),ref_for:!0,ref:n=>fe(t,n),onClick:e.withModifiers(()=>U(t),["stop"]),onMousedown:n=>u(t,n),style:e.normalizeStyle(x(t)),"data-column":t},[e.renderSlot(o.$slots,"column",{columnKey:t,isGhost:!1},void 0,!0),I(t)?(e.openBlock(),e.createElementBlock("div",{key:0,class:"toggle-colored no-spacing",onClick:e.withModifiers(()=>me(t),["stop"]),style:e.normalizeStyle({top:`${r(t)}px`})},[e.renderSlot(o.$slots,"colorizeLabel",{enabled:q(t)>=0},void 0,!0)],12,we)):e.createCommentVNode("",!0)],46,be)):e.createCommentVNode("",!0)],64))),256)),e.unref(S)?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:1},e.renderList(p.value,t=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.unref(v)[t].visible?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(["cell column column-main column-ghost",B(t)]),style:e.normalizeStyle(g(t)),"data-column":t},[e.renderSlot(o.$slots,"column",{columnKey:t,isGhost:!0},void 0,!0)],14,Be)):e.createCommentVNode("",!0)],64))),256)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(W),(t,n)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.unref(z)?(e.openBlock(),e.createElementBlock("div",ye,[e.createVNode(he.Icon,{value:t.icon},null,8,["value"])])):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(p.value,a=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["cell column cell-additional-header",[`cell-additional-header-${a}`]]),"data-additionalHeader":n,"data-column":a},[e.renderSlot(o.$slots,"additionalHeader",{additionalHeader:n,columnKey:a},void 0,!0)],10,Se))),256))],64))),256)),e.unref(b)&&e.unref(N)?(e.openBlock(),e.createElementBlock(e.Fragment,{key:2},[e.unref(z)?(e.openBlock(),e.createElementBlock("div",Te,[e.renderSlot(o.$slots,"topTotalRowNumber",{},void 0,!0)])):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(p.value,t=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.unref(v)[t].visible?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.unref(i)&&(e.unref(v)[t].colspan||1)!==1?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(e.unref(v)[t].colspan,n=>(e.openBlock(),e.createElementBlock("div",{class:"cell total top-total","data-column":t,"data-subcolumn-index":n-1},[e.renderSlot(o.$slots,"topTotal",{columnKey:t,subcolumnKey:M(n-1),values:s.value.map(a=>a[t])},void 0,!0)],8,$e))),256)):(e.openBlock(),e.createElementBlock("div",{key:1,class:"cell total top-total","data-column":t},[e.renderSlot(o.$slots,"topTotal",{columnKey:t,values:s.value.map(n=>n[t])},void 0,!0)],8,Me))],64)):e.createCommentVNode("",!0)],64))),256))],64)):e.createCommentVNode("",!0),e.unref(i)?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:3},e.renderList(p.value,t=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.unref(v)[t].visible&&e.unref(v)[t].colspan?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(e.unref(v)[t].colspan,n=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["cell column column-secondary",B(t,n-1)]),onClick:e.withModifiers(()=>U(t,n-1),["stop"]),"data-column":t,"data-subcolumn-index":n-1},[e.renderSlot(o.$slots,"secondaryColumn",{columnKey:t,subcolumnKey:M(n-1)},void 0,!0)],10,ze))),256)):e.createCommentVNode("",!0)],64))),256)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.value,(t,n)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.unref(z)?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(["cell row-number",{even:n%2===0}])},[e.renderSlot(o.$slots,"rowNumber",{value:Z(t.rowInfo)},()=>[e.createTextVNode(e.toDisplayString(Z(t.rowInfo)),1)],!0)],2)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(p.value,a=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[!e.unref(i)||(e.unref(v)[a].colspan||1)===1?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(["cell",d(t,n,a)]),"data-column":a,"data-primary-key":t[e.unref(j)]},[e.renderSlot(o.$slots,"row",{columnKey:a,index:n,row:t,subindex:t.rowInfo.subindex,value:t[a]},void 0,!0)],10,Ne)):(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:1},e.renderList(e.unref(v)[a].colspan,m=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["cell",d(t,n,a,m-1)]),"data-column":a,"data-primary-key":t[e.unref(j)],"data-subcolumn-index":m-1},[e.renderSlot(o.$slots,"row",{columnKey:a,index:n,row:t,spanIndex:e.unref(i)?e.unref(i)[m-1]:m-1,subcolumnKey:M(m-1),subindex:t.rowInfo.subindex,value:t[a]?t[a][e.unref(i)?e.unref(i)[m-1]:m-1]:void 0},void 0,!0)],10,Ee))),256))],64))),256))],64))),256)),s.value.length===0&&e.unref(G)?(e.openBlock(),e.createElementBlock("div",{class:"cell odd no-data",key:"row-no-data",style:e.normalizeStyle({"grid-column":`1 / span ${Y.value}`}),innerHTML:e.unref(R)},null,12,He)):e.createCommentVNode("",!0),e.unref(N)?(e.openBlock(),e.createElementBlock(e.Fragment,{key:5},[e.unref(z)?(e.openBlock(),e.createElementBlock("div",_e,[e.renderSlot(o.$slots,"totalRowNumber",{},()=>[e.createTextVNode("#")],!0)])):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(p.value,t=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.unref(v)[t].visible?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.unref(i)&&(e.unref(v)[t].colspan||1)!==1?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(e.unref(v)[t].colspan,n=>(e.openBlock(),e.createElementBlock("div",{class:"cell total","data-column":t,"data-subcolumn-index":n-1},[e.renderSlot(o.$slots,"total",{columnKey:t,subcolumnKey:M(n-1),values:s.value.map(a=>a[t])},void 0,!0)],8,Re))),256)):(e.openBlock(),e.createElementBlock("div",{key:1,class:"cell total","data-column":t},[e.renderSlot(o.$slots,"total",{columnKey:t,values:s.value.map(n=>n[t])},void 0,!0)],8,Oe))],64)):e.createCommentVNode("",!0)],64))),256))],64)):e.createCommentVNode("",!0)],6))}});const ce=se._export_sfc(Le,[["__scopeId","data-v-6c07e227"]]),Ve=e.defineComponent({__name:"Table",props:{additionalHeaders:{default:()=>({})},cellClasses:{default:()=>({})},colorMetrics:{type:Boolean,default:!1},coloredMetrics:{default:()=>[]},columns:{},comparisonColumnKeys:{default:()=>[]},detailsRows:{},dragColumns:{type:Boolean,default:!1},fixedColumnNumber:{default:1},inversedKpis:{default:()=>[]},noDataMessage:{},orderBy:{},primaryColumn:{default:"id"},rows:{},scrollPosition:{default:()=>({left:0,top:0})},showRowNumber:{type:Boolean,default:!0},showTopTotal:{type:Boolean,default:!1},showTotal:{type:Boolean,default:!0}},setup(te){const D=te,{additionalHeaders:K,cellClasses:W,colorMetrics:L,coloredMetrics:X,columns:V,comparisonColumnKeys:v,detailsRows:i,dragColumns:y,fixedColumnNumber:S,inversedKpis:T,orderBy:R,primaryColumn:h,rows:k,scrollPosition:j,showRowNumber:A,showTopTotal:G,showTotal:z}=e.toRefs(D),N=e.ref(0),b=e.ref(),f=e.ref(0),E=e.ref(0);e.onUnmounted(()=>oe.disconnect());const O=e.computed(()=>Object.keys(V.value).slice(0,S.value).reduce((s,c)=>(s[c]=V.value[c],s),{})),F=e.computed(()=>Object.keys(V.value).slice(S.value).reduce((s,c)=>(s[c]=V.value[c],s),{})),ee=e.computed(()=>Object.keys(i.value).reduce((s,c)=>s+c.length,Object.values(k.value).length)),$=e.computed(()=>{var c,r,d;const s={};return(c=b.value)!=null&&c.main&&(s["--header-main-height"]=`${b.value.main}px`),(r=b.value)!=null&&r.secondary&&(s["--header-secondary-height"]=`${b.value.secondary}px`),N.value&&(s["--fixed-width"]=`${N.value}px`),(d=b.value)!=null&&d.total&&(s["--header-total-height"]=`${b.value.total}px`),f.value?(s["--total-height"]=`${f.value}px`,s["--bottom-height"]=s["--total-height"]):(ee.value===1?s["--total-scrollbar-display"]="none":s["--total-height"]="20px",s["--bottom-height"]="0px"),s}),p=e.ref(),Y=e.ref(),P=e.ref(!1),re=()=>{var d,w;if(P.value)return;P.value=!0,N.value=0,b.value=void 0,f.value=0;const s=B=>{const g={hasSecondary:!1,mainColumnHeight:0,secondaryColumnHeight:0,totalColumnHeight:0,totalHeight:0,width:0};if(!B)return g;const x=[...B.querySelectorAll(".cell.column-main:not(.column-main-extended)")],M=[...B.querySelectorAll(".cell.column-main.column-main-extended")],Q=B.querySelector(".cell.column-secondary"),Z=B.querySelector(".cell.total"),q=[];return x.length>0&&(g.mainColumnHeight=x[0].offsetHeight,g.width=x.reduce((I,{offsetWidth:U})=>I+U,0),q.push(g.mainColumnHeight)),Q&&(g.hasSecondary=!0,g.secondaryColumnHeight=Q.offsetHeight,q.push(g.secondaryColumnHeight)),M.length>0&&(g.width=M.reduce((I,{offsetWidth:U})=>I+U,0),x.length===0&&(g.mainColumnHeight=M[0].offsetHeight,q.push(g.mainColumnHeight))),g.totalColumnHeight=q.reduce((I,U)=>I+U+1,-1),Z&&(g.totalHeight=Z.offsetHeight),g},c=s((d=p.value)==null?void 0:d.$el),r=s((w=Y.value)==null?void 0:w.$el);if(r.hasSecondary)N.value=c.width,b.value={main:r.mainColumnHeight,secondary:r.secondaryColumnHeight,total:Math.max(c.totalColumnHeight,r.totalColumnHeight)},f.value=c.totalHeight;else{const B=Math.max(c.totalColumnHeight,r.totalColumnHeight);N.value=c.width,b.value={main:B,total:B},f.value=c.totalHeight}e.nextTick(()=>{P.value=!1})},oe=new ResizeObserver(()=>re()),J=e.ref();return e.nextTick(()=>{oe.disconnect(),J.value&&oe.observe(J.value)}),e.watch(k,()=>{E.value=Math.random()}),(s,c)=>(e.openBlock(),e.createElementBlock("div",{class:"table-container",ref_key:"tableContainer",ref:J},[e.createVNode(ve,{"onUpdate:scrollPosition":c[7]||(c[7]=r=>s.$emit("update:scrollPosition",r)),scrollHeightDelta:(b.value?b.value.total:0)+f.value-40,scrollPosition:e.unref(j),scrollWidthDelta:N.value,style:e.normalizeStyle($.value),updateKey:E.value,mode:"both-top",optimized:""},{default:e.withCtx(()=>[e.createVNode(ce,{class:"fixed",ref_key:"fixedTable",ref:p,onAddColoredMetric:c[0]||(c[0]=r=>s.$emit("addColoredMetric",r)),onRemoveColoredMetric:c[1]||(c[1]=r=>s.$emit("removeColoredMetric",r)),"onUpdate:orderBy":c[2]||(c[2]=r=>s.$emit("update:orderBy",r)),additionalHeaders:e.unref(K),cellClasses:e.unref(W),colorMetrics:e.unref(L),coloredMetrics:e.unref(X),columns:O.value,comparisonColumnKeys:e.unref(v),detailsRows:e.unref(i),dragColumns:!1,inversedKpis:e.unref(T),orderBy:e.unref(R),orderColumnType:e.unref(V)[e.unref(R)[0][0]].type,primaryColumn:e.unref(h),rows:e.unref(k),showNoDataMessage:!0,showRowNumber:e.unref(A),showTopTotal:e.unref(G),showTotal:e.unref(z)},{columnRowNumber:e.withCtx(()=>[e.renderSlot(s.$slots,"columnRowNumber",{},()=>[e.createTextVNode("#")],!0)]),colorizeLabel:e.withCtx(({enabled:r})=>[e.renderSlot(s.$slots,"colorizeLabel",{enabled:r},void 0,!0)]),column:e.withCtx(({columnKey:r,isGhost:d})=>[r in O.value?e.renderSlot(s.$slots,"column",{key:0,columnKey:r,isGhost:d},void 0,!0):e.createCommentVNode("",!0)]),additionalHeader:e.withCtx(({additionalHeader:r,columnKey:d})=>[e.renderSlot(s.$slots,"additionalHeader",{additionalHeader:r,columnKey:d},void 0,!0)]),topTotal:e.withCtx(({columnKey:r,subcolumnKey:d,values:w})=>[r in O.value?e.renderSlot(s.$slots,"topTotal",{key:0,columnKey:r,subcolumnKey:d,values:w},void 0,!0):e.createCommentVNode("",!0)]),topTotalRowNumber:e.withCtx(()=>[e.renderSlot(s.$slots,"topTotalRowNumber",{},void 0,!0)]),secondaryColumn:e.withCtx(({columnKey:r,subcolumnKey:d})=>[r in O.value?e.renderSlot(s.$slots,"secondaryColumn",{key:0,columnKey:r,subcolumnKey:d},void 0,!0):e.createCommentVNode("",!0)]),rowNumber:e.withCtx(({value:r})=>[e.renderSlot(s.$slots,"rowNumber",{value:r},void 0,!0)]),row:e.withCtx(({columnKey:r,index:d,row:w,spanIndex:B,subcolumnKey:g,subindex:x,value:M})=>[r in O.value?e.renderSlot(s.$slots,"row",{key:0,columnKey:r,index:d,row:w,spanIndex:B,subcolumnKey:g,subindex:x,value:M},void 0,!0):e.createCommentVNode("",!0)]),totalRowNumber:e.withCtx(()=>[e.renderSlot(s.$slots,"totalRowNumber",{},()=>[e.createTextVNode("#")],!0)]),total:e.withCtx(({columnKey:r,subcolumnKey:d,values:w})=>[r in O.value?e.renderSlot(s.$slots,"total",{key:0,columnKey:r,subcolumnKey:d,values:w},void 0,!0):e.createCommentVNode("",!0)]),_:3},8,["additionalHeaders","cellClasses","colorMetrics","coloredMetrics","columns","comparisonColumnKeys","detailsRows","inversedKpis","orderBy","orderColumnType","primaryColumn","rows","showRowNumber","showTopTotal","showTotal"]),e.createVNode(ce,{ref_key:"scrollableTable",ref:Y,onAddColoredMetric:c[3]||(c[3]=r=>s.$emit("addColoredMetric",r)),"onMove:column":c[4]||(c[4]=({from:r,to:d})=>s.$emit("move:column",{from:r+e.unref(S),to:d+e.unref(S)})),onRemoveColoredMetric:c[5]||(c[5]=r=>s.$emit("removeColoredMetric",r)),"onUpdate:orderBy":c[6]||(c[6]=r=>s.$emit("update:orderBy",r)),additionalHeaders:e.unref(K),cellClasses:e.unref(W),colorMetrics:e.unref(L),coloredMetrics:e.unref(X),columns:F.value,comparisonColumnKeys:e.unref(v),detailsRows:e.unref(i),inversedKpis:e.unref(T),dragColumns:e.unref(y),orderBy:e.unref(R),orderColumnType:e.unref(V)[e.unref(R)[0][0]].type,primaryColumn:e.unref(h),rows:e.unref(k),showRowNumber:!1,showTopTotal:e.unref(G),showTotal:e.unref(z),showNoDataMessage:!0,noDataMessage:s.noDataMessage,style:e.normalizeStyle($.value)},{colorizeLabel:e.withCtx(({enabled:r})=>[e.renderSlot(s.$slots,"colorizeLabel",{enabled:r},void 0,!0)]),column:e.withCtx(({columnKey:r,isGhost:d})=>[r in F.value?e.renderSlot(s.$slots,"column",{key:0,columnKey:r,isGhost:d},void 0,!0):e.createCommentVNode("",!0)]),additionalHeader:e.withCtx(({additionalHeader:r,columnKey:d})=>[e.renderSlot(s.$slots,"additionalHeader",{additionalHeader:r,columnKey:d},void 0,!0)]),topTotal:e.withCtx(({columnKey:r,subcolumnKey:d,values:w})=>[r in F.value?e.renderSlot(s.$slots,"topTotal",{key:0,columnKey:r,subcolumnKey:d,values:w},void 0,!0):e.createCommentVNode("",!0)]),secondaryColumn:e.withCtx(({columnKey:r,subcolumnKey:d})=>[r in F.value?e.renderSlot(s.$slots,"secondaryColumn",{key:0,columnKey:r,subcolumnKey:d},void 0,!0):e.createCommentVNode("",!0)]),row:e.withCtx(({columnKey:r,index:d,row:w,spanIndex:B,subcolumnKey:g,subindex:x,value:M})=>[r in F.value?e.renderSlot(s.$slots,"row",{key:0,columnKey:r,index:d,row:w,spanIndex:B,subcolumnKey:g,subindex:x,value:M},void 0,!0):e.createCommentVNode("",!0)]),total:e.withCtx(({columnKey:r,subcolumnKey:d,values:w})=>[r in F.value?e.renderSlot(s.$slots,"total",{key:0,columnKey:r,subcolumnKey:d,values:w},void 0,!0):e.createCommentVNode("",!0)]),_:3},8,["additionalHeaders","cellClasses","colorMetrics","coloredMetrics","columns","comparisonColumnKeys","detailsRows","inversedKpis","dragColumns","orderBy","orderColumnType","primaryColumn","rows","showTopTotal","showTotal","noDataMessage","style"])]),_:3},8,["scrollHeightDelta","scrollPosition","scrollWidthDelta","style","updateKey"])],512))}});const Fe=se._export_sfc(Ve,[["__scopeId","data-v-1112f913"]]);exports.Scrollable=ve;exports.ScrollableArea=ne;exports.SimpleTable=ce;exports.Table=Fe;
