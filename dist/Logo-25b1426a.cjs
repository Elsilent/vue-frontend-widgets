"use strict";const e=require("vue"),_=require("./Info-ad8c31fe.cjs"),l=require("./Icon-80a3c9ab.cjs"),r=require("./_plugin-vue_export-helper-f246444f.cjs"),u=e.defineComponent({__name:"Avatar",props:{icon:{default:"user-circle"},iconBackend:{default:"boxicons"},label:{},source:{}},setup(t){const c=t,{icon:a,iconBackend:s,label:n,source:o}=e.toRefs(c);return(k,m)=>(e.openBlock(),e.createElementBlock("div",{class:"avatar",style:e.normalizeStyle(e.unref(o)?`background-image: url(${e.unref(o)})`:void 0),tabindex:"0"},[!e.unref(n)&&!e.unref(o)?(e.openBlock(),e.createBlock(l.Icon,{key:0,backend:e.unref(s),value:e.unref(a),size:"large"},null,8,["backend","value"])):e.createCommentVNode("",!0),e.unref(n)&&!e.unref(o)?(e.openBlock(),e.createBlock(_.Info,{key:1,elevation:"normal",size:"large-2"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(n)),1)]),_:1})):e.createCommentVNode("",!0)],4))}});const i=r._export_sfc(u,[["__scopeId","data-v-ee7109e4"]]),d={class:"logo"};function p(t,c){return e.openBlock(),e.createElementBlock("div",d)}const f={},v=r._export_sfc(f,[["render",p],["__scopeId","data-v-756d1781"]]);exports.Avatar=i;exports.Logo=v;
