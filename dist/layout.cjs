"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),w=require("./Icon-80a3c9ab.cjs"),T=require("./Logo-25b1426a.cjs"),C=require("./Toast-4d99fc03.cjs"),h=require("./_plugin-vue_export-helper-f246444f.cjs"),x=require("./Input-736927bd.cjs"),L=require("./Form-d76f9656.cjs"),g=require("./Info-ad8c31fe.cjs"),W=require("./marker.cjs"),F=require("./BrandText-9e6e16c6.cjs"),q=require("./utils/error.cjs"),b=require("./match-5382edcf.cjs"),V=require("./undefined_theme-019f6866.cjs");require("./Popover-5322298f.cjs");const z=e.defineComponent({__name:"AccountMenu",props:{avatar:{},menuItems:{}},setup(i){const m=i,{avatar:a,menuItems:s}=e.toRefs(m),v=e.computed(()=>a&&a.value&&"icon"in a.value?a.value.icon:void 0),u=e.computed(()=>a&&a.value&&"iconBackend"in a.value?a.value.iconBackend:void 0),r=e.computed(()=>a&&a.value&&"label"in a.value?a.value.label:void 0),n=e.computed(()=>a&&a.value&&"source"in a.value?a.value.source:void 0),t=e.ref(),l=e.ref(!1),p=o=>{var c;o&&((c=t.value)!=null&&c.$el.contains(o.target))||(l.value=!1,window.removeEventListener("mousedown",p))},f=()=>{l.value=!0,window.addEventListener("mousedown",p)},d=o=>{s.value[o].handler(),p()};return e.onUnmounted(()=>{window.removeEventListener("mousedown",p)}),(o,c)=>(e.openBlock(),e.createBlock(w.Align,{class:"account-menu",ref_key:"accountMenu",ref:t},{default:e.withCtx(()=>[e.createVNode(T.Avatar,{onClick:c[0]||(c[0]=_=>f()),onFocus:c[1]||(c[1]=_=>f()),onKeydown:[c[2]||(c[2]=e.withKeys(e.withModifiers(_=>p(),["shift"]),["tab"])),c[3]||(c[3]=e.withKeys(_=>p(),["tab"]))],icon:v.value,iconBackend:u.value,label:r.value,source:n.value},null,8,["icon","iconBackend","label","source"]),e.createVNode(C.PopoverMenu,{class:"account-menu",onSelect:c[4]||(c[4]=_=>d(_)),items:e.unref(s),visible:l.value},null,8,["items","visible"])]),_:1},512))}});const A=h._export_sfc(z,[["__scopeId","data-v-6b125e88"]]),P=e.defineComponent({__name:"CurrencySelector",props:{currencies:{},modelValue:{}},emits:["update:modelValue"],setup(i,{emit:m}){const a=i,{currencies:s,modelValue:v}=e.toRefs(a),u=e.ref(),r=e.ref(!1),n=e.computed(()=>s.value.reduce((d,o)=>(d[o.code]={label:o.label},d),{})??{}),t=e.computed(()=>s.value.find(({code:d})=>v.value===d)),l=d=>{var o,c;d&&((o=u.value)!=null&&o.$el.contains(d.target))||((c=u.value)==null||c.$el.querySelector(".button").blur(),r.value=!1,window.removeEventListener("mousedown",l))},p=()=>{r.value=!0,window.addEventListener("mousedown",l)},f=d=>{m("update:modelValue",d),l()};return e.onUnmounted(()=>{window.removeEventListener("mousedown",l)}),(d,o)=>(e.openBlock(),e.createBlock(w.Align,{class:"currency-selector",ref_key:"currencySelector",ref:u,horizontal:"center"},{default:e.withCtx(()=>{var c;return[e.createVNode(x.Button,{class:"currency-button",onClick:o[0]||(o[0]=_=>p()),onFocus:o[1]||(o[1]=_=>p()),onKeydown:[o[2]||(o[2]=e.withKeys(e.withModifiers(_=>l(),["shift"]),["tab"])),o[3]||(o[3]=e.withKeys(_=>l(),["tab"]))],label:(c=t.value)==null?void 0:c.symbol,mood:"neutral",outline:"",size:"large-3",shape:"round"},null,8,["label"]),e.createVNode(C.PopoverMenu,{class:"currency-menu no-spacing",onSelect:o[4]||(o[4]=_=>f(_)),items:n.value,visible:r.value},null,8,["items","visible"])]}),_:1},512))}});const U=h._export_sfc(P,[["__scopeId","data-v-a650d612"]]),R=e.defineComponent({__name:"Form",props:{fields:{},values:{}},setup(i){const m=i,{fields:a}=e.toRefs(m);return(s,v)=>(e.openBlock(),e.createBlock(L.GenericForm,{fields:e.unref(a),values:s.values},{"field(dropdown)":e.withCtx(({code:u,label:r,options:n,value:t})=>[r?(e.openBlock(),e.createBlock(g.Info,{key:0,class:"label"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(r),1)]),_:2},1024)):e.createCommentVNode("",!0),e.createVNode(x.Dropdown,{"onUpdate:modelValue":l=>s.$emit(`update:${u}`,l),items:n.items,modelValue:t},null,8,["onUpdate:modelValue","items","modelValue"])]),"field(info)":e.withCtx(({label:u})=>[e.createVNode(g.Info,null,{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(u),1)]),_:2},1024)]),"field(input)":e.withCtx(({code:u,label:r,value:n})=>[r?(e.openBlock(),e.createBlock(g.Info,{key:0,class:"label"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(r),1)]),_:2},1024)):e.createCommentVNode("",!0),e.createVNode(x.Input,{"onUpdate:modelValue":t=>s.$emit(`update:${u}`,t),modelValue:n},null,8,["onUpdate:modelValue","modelValue"])]),_:1},8,["fields","values"]))}});const K=h._export_sfc(R,[["__scopeId","data-v-39d44946"]]),D=i=>(e.pushScopeId("data-v-85b21410"),i=i(),e.popScopeId(),i),H=D(()=>e.createElementVNode("div",{class:"menu-button-lines"},null,-1)),O=e.defineComponent({__name:"Header",emits:["menuToggle"],setup(i,{emit:m}){const a=()=>{document.documentElement.scrollTo({left:0,top:0})};return(s,v)=>(e.openBlock(),e.createBlock(w.Align,{class:"header",vertical:"center"},{default:e.withCtx(()=>[e.createVNode(w.Align,{class:"menu-button",onClick:v[0]||(v[0]=()=>m("menuToggle")),vertical:"center"},{default:e.withCtx(()=>[H]),_:1}),e.createVNode(w.Align,{class:"title",onClick:v[1]||(v[1]=()=>a()),vertical:"center"},{default:e.withCtx(()=>[e.createVNode(g.Info,{size:"large-2"},{default:e.withCtx(()=>[e.renderSlot(s.$slots,"title",{},void 0,!0)]),_:3})]),_:3}),e.createVNode(W.Separator),e.renderSlot(s.$slots,"end",{},void 0,!0)]),_:3}))}});const j=h._export_sfc(O,[["__scopeId","data-v-85b21410"]]),G=e.defineComponent({__name:"LocaleSelector",props:{locales:{},modelValue:{}},emits:["update:modelValue"],setup(i,{emit:m}){const a=i,{locales:s,modelValue:v}=e.toRefs(a),u=e.ref(),r=e.ref(!1),n=e.computed(()=>s.value.reduce((d,o)=>(d[o.code]={icon:o.icon,iconBackend:"flag-icons"},d),{})),t=e.computed(()=>s.value.find(d=>d.code===v.value).icon),l=d=>{var o,c;d&&((o=u.value)!=null&&o.$el.contains(d.target))||(r.value=!1,(c=u.value)==null||c.$el.querySelector(".button").blur(),window.removeEventListener("mousedown",l))},p=()=>{r.value=!0,window.addEventListener("mousedown",l)},f=d=>{m("update:modelValue",d),l()};return e.onUnmounted(()=>{window.removeEventListener("mousedown",l)}),(d,o)=>(e.openBlock(),e.createBlock(w.Align,{class:"locale-selector",ref_key:"localeSelector",ref:u,horizontal:"center"},{default:e.withCtx(()=>[e.createVNode(x.Button,{class:"locale-button",onClick:o[0]||(o[0]=c=>p()),onFocus:o[1]||(o[1]=c=>p()),onKeydown:[o[2]||(o[2]=e.withKeys(e.withModifiers(c=>l(),["shift"]),["tab"])),o[3]||(o[3]=e.withKeys(c=>l(),["tab"]))],icon:t.value,iconBackend:"flag-icons-square",mood:"neutral",outline:"",size:"large-3",shape:"round"},null,8,["icon"]),e.createVNode(C.PopoverMenu,{class:"locale-menu no-spacing",onSelect:o[4]||(o[4]=c=>f(c)),items:n.value,visible:r.value},null,8,["items","visible"])]),_:1},512))}});const J=h._export_sfc(G,[["__scopeId","data-v-dd1fb6f5"]]),Q={key:0,class:"collapse"},X=e.defineComponent({__name:"Collapse",props:{expanded:{type:Boolean,default:!1}},setup(i){const m=i,{expanded:a}=e.toRefs(m),s=r=>{const n=r;n.style.height="auto"},v=r=>{const n=r,t=getComputedStyle(n).width;n.style.width=t,n.style.position="absolute",n.style.visibility="hidden",n.style.height="auto";const l=getComputedStyle(n).height;n.style.width="",n.style.position="",n.style.visibility="",n.style.height="0",getComputedStyle(n).height,requestAnimationFrame(()=>{n.style.height=l})},u=r=>{const n=r,t=getComputedStyle(n).height;n.style.height=t,getComputedStyle(n).height,requestAnimationFrame(()=>{n.style.height="0"})};return(r,n)=>(e.openBlock(),e.createBlock(e.Transition,{name:"collapse",onAfterEnter:s,onEnter:v,onLeave:u},{default:e.withCtx(()=>[e.unref(a)?(e.openBlock(),e.createElementBlock("div",Q,[e.renderSlot(r.$slots,"default",{},void 0,!0)])):e.createCommentVNode("",!0)]),_:3}))}});const Y=h._export_sfc(X,[["__scopeId","data-v-10c3004c"]]);class $ extends q.BaseError{getMessage(m){return`Invalid menu item level ${m}`}}const Z=e.defineComponent({__name:"MenuItem",props:{active:{type:Boolean,default:!1},fullWidth:{type:Boolean},icon:{},iconBackend:{},label:{},level:{default:1},withSublevel:{type:Boolean,default:!1},link:{}},setup(i){const m=i,{active:a,fullWidth:s,icon:v,iconBackend:u,label:r,level:n,withSublevel:t}=e.toRefs(m),l=e.computed(()=>b.match(n.value).when(1,()=>"large-3").whenAny([2,3],()=>"large").or(o=>{throw new $(o)}).done),p=e.computed(()=>a.value?"elevated-2":"elevated"),f=e.computed(()=>b.match(n.value).when(1,()=>"large").whenAny([2,3],()=>"normal").or(o=>{throw new $(o)}).done),d=e.computed(()=>({active:a.value,"full-width":s.value,[`level-${n.value}`]:!0,"with-sublevel":t.value}));return(o,c)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(o.link?"a":"div"),{class:e.normalizeClass(["menu-item",d.value]),href:o.link?o.link:void 0},{default:e.withCtx(()=>[e.unref(v)?(e.openBlock(),e.createBlock(w.Icon,{key:0,class:"item-icon",backend:e.unref(u),elevation:p.value,size:l.value,value:e.unref(v)},null,8,["backend","elevation","size","value"])):e.createCommentVNode("",!0),e.unref(s)&&e.unref(r)?(e.openBlock(),e.createBlock(g.Info,{key:1,elevation:p.value,size:f.value},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(r)),1)]),_:1},8,["elevation","size"])):e.createCommentVNode("",!0),e.unref(s)&&e.unref(t)?(e.openBlock(),e.createBlock(w.Icon,{key:2,class:"chevron",elevation:p.value,size:"large-3",value:"chevron-right"},null,8,["elevation"])):e.createCommentVNode("",!0)]),_:1},8,["class","href"]))}});const I=h._export_sfc(Z,[["__scopeId","data-v-e982b607"]]),ee=e.defineComponent({__name:"MenuSubsection",props:{fullWidth:{type:Boolean},expandedPrefix:{},icon:{},iconBackend:{},items:{},label:{},level:{default:0},prefix:{},router:{},translator:{}},emits:["update:expandedPrefix"],setup(i,{emit:m}){const a=i,{expandedPrefix:s,icon:v,iconBackend:u,items:r,label:n,level:t,prefix:l,router:p,translator:f}=e.toRefs(a),d=e.computed(()=>p.value.currentRoute.value.meta.menuItem),o=e.computed(()=>t.value+1),c=e.computed(()=>t.value+1),_=y=>{m("update:expandedPrefix",l.value);const B=r.value[y];"items"in B||p.value.push(B.route)};return(y,B)=>{const E=e.resolveComponent("MenuSubsection",!0);return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.unref(n)?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.unref(t)===0?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[y.fullWidth?(e.openBlock(),e.createBlock(g.Info,{key:0,class:"section",elevation:"elevated"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(f)(e.unref(n)).toUpperCase()),1)]),_:1})):(e.openBlock(),e.createBlock(w.Icon,{key:1,class:"section-collapsed",elevation:"elevated",size:"large-3",value:"dots-horizontal-rounded"}))],64)):(e.openBlock(),e.createBlock(I,{key:1,onClick:B[0]||(B[0]=()=>m("update:expandedPrefix",e.unref(l))),active:e.unref(s).startsWith(e.unref(l)),fullWidth:y.fullWidth,icon:e.unref(v),iconBackend:e.unref(u),label:y.fullWidth?e.unref(n):void 0,level:e.unref(t),withSublevel:""},null,8,["active","fullWidth","icon","iconBackend","label","level"]))],64)):e.createCommentVNode("",!0),e.createVNode(Y,{expanded:e.unref(t)===0||e.unref(s).startsWith(e.unref(l))},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(r),(k,S)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,["items"in k?(e.openBlock(),e.createBlock(E,{key:0,"onUpdate:expandedPrefix":B[1]||(B[1]=N=>m("update:expandedPrefix",N)),expandedPrefix:e.unref(s),fullWidth:y.fullWidth,icon:k.icon,iconBackend:k.iconBackend,items:k.items,level:c.value,label:k.label?e.unref(f)(k.label):"",prefix:`${e.unref(l)}${S}.`,router:e.unref(p),translator:e.unref(f)},null,8,["expandedPrefix","fullWidth","icon","iconBackend","items","level","label","prefix","router","translator"])):y.fullWidth||e.unref(t)===0?(e.openBlock(),e.createBlock(I,{key:1,onClick:e.withModifiers(()=>_(S),["prevent"]),active:`${e.unref(l)}${S}`===d.value,fullWidth:y.fullWidth,icon:k.icon,iconBackend:k.iconBackend,label:y.fullWidth?e.unref(f)(k.label):void 0,level:o.value,link:e.unref(p).resolve(k.route).href},null,8,["onClick","active","fullWidth","icon","iconBackend","label","level","link"])):e.createCommentVNode("",!0)],64))),256))]),_:1},8,["expanded"])],64)}}});const M=h._export_sfc(ee,[["__scopeId","data-v-d52b95ab"]]),te=i=>(e.pushScopeId("data-v-81044b19"),i=i(),e.popScopeId(),i),ne={class:"items"},oe=te(()=>e.createElementVNode("div",{class:"pixel"}," ",-1)),le=e.defineComponent({__name:"SideMenu",props:{brandText:{},fullWidth:{type:Boolean},menu:{},router:{},translator:{type:Function}},setup(i){const m=i,a=e.ref(""),s=e.ref(!1),{fullWidth:v,router:u}=e.toRefs(m),r=e.computed(()=>v.value||s.value);return e.watch(u.value.currentRoute,n=>{const t=n.meta.menuItem??"";a.value=t.substring(0,t.lastIndexOf(".")+1)},{immediate:!0}),(n,t)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["side-menu",{"full-width":r.value}]),onMouseenter:t[2]||(t[2]=l=>s.value=!0),onMouseleave:t[3]||(t[3]=l=>s.value=!1)},[e.createElementVNode("div",{class:"brand",onClick:t[0]||(t[0]=l=>e.unref(u).push({name:"default"}))},[e.createVNode(T.Logo),e.createVNode(F.BrandText,{elevation:"elevated-3",size:"large-4"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(n.brandText),1)]),_:1})]),e.createElementVNode("div",ne,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.menu,(l,p)=>(e.openBlock(),e.createBlock(M,{expandedPrefix:a.value,"onUpdate:expandedPrefix":t[1]||(t[1]=f=>a.value=f),fullWidth:r.value,icon:l.icon,iconBackend:l.iconBackend,items:l.items,label:l.label??"",prefix:`${p}.`,router:e.unref(u),translator:n.translator},null,8,["expandedPrefix","fullWidth","icon","iconBackend","items","label","prefix","router","translator"]))),256)),oe])],34))}});const ae=h._export_sfc(le,[["__scopeId","data-v-81044b19"]]),re=e.defineComponent({__name:"ThemeToggle",props:{modelValue:{}},emits:["update:modelValue"],setup(i,{emit:m}){const a=i,{modelValue:s}=e.toRefs(a),v=e.computed(()=>b.match(s.value).when("dark",()=>"moon").when("light",()=>"sun").or(n=>{throw new V.UndefinedThemeError(n)}).done),u=e.computed(()=>b.match(s.value).when("dark",()=>"accent").when("light",()=>"important").or(n=>{throw new V.UndefinedThemeError(n)}).done),r=()=>{const n=b.match(s.value).when("dark",()=>"light").when("light",()=>"dark").or(t=>{throw new V.UndefinedThemeError(t)}).done;m("update:modelValue",n)};return(n,t)=>(e.openBlock(),e.createBlock(w.Align,{class:"theme-toggle"},{default:e.withCtx(()=>[e.createVNode(x.Button,{onClick:t[0]||(t[0]=()=>r()),icon:v.value,mood:u.value,outline:"",size:"large-2",shape:"round"},null,8,["icon","mood"])]),_:1}))}});const se=h._export_sfc(re,[["__scopeId","data-v-8832a6ee"]]),ue={class:"toasts"},ce=e.defineComponent({__name:"Toasts",props:{toasts:{}},emits:["removeToast"],setup(i,{emit:m}){const a=i,{toasts:s}=e.toRefs(a),v=e.computed(()=>Object.entries(s.value).reverse().map(([t,l])=>[Number(t),l])),u=e.ref([]),r=e.ref([]),n=t=>{u.value.includes(t)||(u.value.push(t),clearTimeout(r.value[t]),delete r.value[t],window.setTimeout(()=>{m("removeToast",t),u.value=u.value.filter(l=>l!==t)},500))};return e.watch(s,()=>{for(const t of s.value)t.id in r.value||(r.value[t.id]=window.setTimeout(()=>{n(t.id)},5e3))},{deep:!0,immediate:!0}),(t,l)=>(e.openBlock(),e.createElementBlock("div",ue,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(v.value,([p,f])=>(e.openBlock(),e.createBlock(C.Toast,{onClick:()=>n(p),class:e.normalizeClass({"fade-out":u.value.includes(f.id)}),icon:f.icon,iconBackend:f.iconBackend,key:`toast-${f.id}`,mood:f.mood,message:f.message,title:f.title},null,8,["onClick","class","icon","iconBackend","mood","message","title"]))),128))]))}});const ie=h._export_sfc(ce,[["__scopeId","data-v-3d45b4ea"]]);exports.AccountMenu=A;exports.CurrencySelector=U;exports.Form=K;exports.Header=j;exports.LocaleSelector=J;exports.SideMenu=ae;exports.SideMenuItem=I;exports.SideMenuSubsection=M;exports.ThemeToggle=se;exports.Toasts=ie;
