"use strict";const e=require("vue"),g=require("./Icon-a896463e.cjs"),x=require("./_plugin-vue_export-helper-f246444f.cjs"),w=e.defineComponent({__name:"Popover",props:{autoPosition:{type:Boolean,default:!1},parentNode:{},popoverClass:{},visible:{type:Boolean}},setup(h){const m=h,{autoPosition:o,parentNode:r,popoverClass:c,visible:a}=e.toRefs(m),l=e.ref(),s=e.ref(),n=e.ref(),y=e.computed(()=>({[(c==null?void 0:c.value)??""]:!!c,visible:a.value})),b=e.computed(()=>{if(!(!o.value||l.value===void 0||n.value===void 0))return{left:`${l.value}px`,top:`${n.value}px`}}),p=()=>{if(!s.value||!(r!=null&&r.value))return;const t=r.value.getBoundingClientRect();l.value=0,n.value=0,e.nextTick(()=>{const u=t.left,d=t.top+document.documentElement.scrollTop,f=s.value.$el.offsetWidth,i=(f-t.width)/2;t.left-i<0?l.value=u:t.left+i+t.width>document.body.clientWidth?l.value=u-f+t.width:l.value=u-i;const _=s.value.$el.offsetHeight;t.bottom+_>document.body.clientHeight?n.value=d-_:n.value=d+t.height})},v=o!=null&&o.value?new ResizeObserver(()=>p()):void 0;return e.watch(a,t=>{!(o!=null&&o.value)||!v||(v.disconnect(),t&&e.nextTick(()=>{p(),v.observe(s.value.$el)}))},{immediate:!0}),(t,u)=>(e.openBlock(),e.createBlock(g.Card,{class:e.normalizeClass(["no-spacing popover",y.value]),ref_key:"popover",ref:s,style:e.normalizeStyle(b.value)},{default:e.withCtx(()=>[e.renderSlot(t.$slots,"default",{},void 0,!0)]),_:3},8,["class","style"]))}});const C=x._export_sfc(w,[["__scopeId","data-v-37932376"]]);exports.Popover=C;
