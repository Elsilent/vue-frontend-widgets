"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("vue"),w=require("./Icon-80a3c9ab.cjs"),T=require("./Logo-8a156adc.cjs"),C=require("./Toast-4d99fc03.cjs"),k=require("./_plugin-vue_export-helper-f246444f.cjs"),x=require("./Input-736927bd.cjs"),L=require("./Form-d76f9656.cjs"),g=require("./Info-ad8c31fe.cjs"),W=require("./marker.cjs"),F=require("./BrandText-9e6e16c6.cjs"),q=require("./utils/error.cjs"),b=require("./match-5382edcf.cjs"),V=require("./undefined_theme-019f6866.cjs");require("./Popover-5322298f.cjs");const z=e.defineComponent({__name:"AccountMenu",props:{avatar:{},menuItems:{}},setup(i){const p=i,{avatar:a,menuItems:s}=e.toRefs(p),v=e.computed(()=>a&&a.value&&"icon"in a.value?a.value.icon:void 0),u=e.computed(()=>a&&a.value&&"iconBackend"in a.value?a.value.iconBackend:void 0),r=e.computed(()=>a&&a.value&&"label"in a.value?a.value.label:void 0),t=e.computed(()=>a&&a.value&&"source"in a.value?a.value.source:void 0),n=e.ref(),l=e.ref(!1),m=o=>{var c;o&&((c=n.value)!=null&&c.$el.contains(o.target))||(l.value=!1,window.removeEventListener("mousedown",m))},f=()=>{l.value=!0,window.addEventListener("mousedown",m)},d=o=>{s.value[o].handler(),m()};return e.onUnmounted(()=>{window.removeEventListener("mousedown",m)}),(o,c)=>(e.openBlock(),e.createBlock(w.Align,{class:"account-menu",ref_key:"accountMenu",ref:n},{default:e.withCtx(()=>[e.createVNode(T.Avatar,{onClick:c[0]||(c[0]=_=>f()),onFocus:c[1]||(c[1]=_=>f()),onKeydown:[c[2]||(c[2]=e.withKeys(e.withModifiers(_=>m(),["shift"]),["tab"])),c[3]||(c[3]=e.withKeys(_=>m(),["tab"]))],icon:v.value,iconBackend:u.value,label:r.value,source:t.value},null,8,["icon","iconBackend","label","source"]),e.createVNode(C.PopoverMenu,{class:"account-menu",onSelect:c[4]||(c[4]=_=>d(_)),items:e.unref(s),visible:l.value},null,8,["items","visible"])]),_:1},512))}});const A=k._export_sfc(z,[["__scopeId","data-v-6b125e88"]]),P=e.defineComponent({__name:"CurrencySelector",props:{currencies:{},modelValue:{}},emits:["update:modelValue"],setup(i,{emit:p}){const a=i,{currencies:s,modelValue:v}=e.toRefs(a),u=e.ref(),r=e.ref(!1),t=e.computed(()=>s.value.reduce((d,o)=>(d[o.code]={label:o.label},d),{})??{}),n=e.computed(()=>s.value.find(({code:d})=>v.value===d)),l=d=>{var o,c;d&&((o=u.value)!=null&&o.$el.contains(d.target))||((c=u.value)==null||c.$el.querySelector(".button").blur(),r.value=!1,window.removeEventListener("mousedown",l))},m=()=>{r.value=!0,window.addEventListener("mousedown",l)},f=d=>{p("update:modelValue",d),l()};return e.onUnmounted(()=>{window.removeEventListener("mousedown",l)}),(d,o)=>(e.openBlock(),e.createBlock(w.Align,{class:"currency-selector",ref_key:"currencySelector",ref:u,horizontal:"center"},{default:e.withCtx(()=>{var c;return[e.createVNode(x.Button,{class:"currency-button",onClick:o[0]||(o[0]=_=>m()),onFocus:o[1]||(o[1]=_=>m()),onKeydown:[o[2]||(o[2]=e.withKeys(e.withModifiers(_=>l(),["shift"]),["tab"])),o[3]||(o[3]=e.withKeys(_=>l(),["tab"]))],label:(c=n.value)==null?void 0:c.symbol,mood:"neutral",outline:"",size:"large-3",shape:"round"},null,8,["label"]),e.createVNode(C.PopoverMenu,{class:"currency-menu no-spacing",onSelect:o[4]||(o[4]=_=>f(_)),items:t.value,visible:r.value},null,8,["items","visible"])]}),_:1},512))}});const U=k._export_sfc(P,[["__scopeId","data-v-a650d612"]]),R=e.defineComponent({__name:"Form",props:{fields:{},values:{}},setup(i){const p=i,{fields:a}=e.toRefs(p);return(s,v)=>(e.openBlock(),e.createBlock(L.GenericForm,{fields:e.unref(a),values:s.values},{"field(dropdown)":e.withCtx(({code:u,label:r,options:t,value:n})=>[r?(e.openBlock(),e.createBlock(g.Info,{key:0,class:"label"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(r),1)]),_:2},1024)):e.createCommentVNode("",!0),e.createVNode(x.Dropdown,{"onUpdate:modelValue":l=>s.$emit(`update:${u}`,l),items:t.items,modelValue:n},null,8,["onUpdate:modelValue","items","modelValue"])]),"field(info)":e.withCtx(({label:u})=>[e.createVNode(g.Info,null,{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(u),1)]),_:2},1024)]),"field(input)":e.withCtx(({code:u,label:r,value:t})=>[r?(e.openBlock(),e.createBlock(g.Info,{key:0,class:"label"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(r),1)]),_:2},1024)):e.createCommentVNode("",!0),e.createVNode(x.Input,{"onUpdate:modelValue":n=>s.$emit(`update:${u}`,n),modelValue:t},null,8,["onUpdate:modelValue","modelValue"])]),_:1},8,["fields","values"]))}});const K=k._export_sfc(R,[["__scopeId","data-v-39d44946"]]),D=i=>(e.pushScopeId("data-v-85b21410"),i=i(),e.popScopeId(),i),H=D(()=>e.createElementVNode("div",{class:"menu-button-lines"},null,-1)),O=e.defineComponent({__name:"Header",emits:["menuToggle"],setup(i,{emit:p}){const a=()=>{document.documentElement.scrollTo({left:0,top:0})};return(s,v)=>(e.openBlock(),e.createBlock(w.Align,{class:"header",vertical:"center"},{default:e.withCtx(()=>[e.createVNode(w.Align,{class:"menu-button",onClick:v[0]||(v[0]=()=>p("menuToggle")),vertical:"center"},{default:e.withCtx(()=>[H]),_:1}),e.createVNode(w.Align,{class:"title",onClick:v[1]||(v[1]=()=>a()),vertical:"center"},{default:e.withCtx(()=>[e.createVNode(g.Info,{size:"large-2"},{default:e.withCtx(()=>[e.renderSlot(s.$slots,"title",{},void 0,!0)]),_:3})]),_:3}),e.createVNode(W.Separator),e.renderSlot(s.$slots,"end",{},void 0,!0)]),_:3}))}});const j=k._export_sfc(O,[["__scopeId","data-v-85b21410"]]),G=e.defineComponent({__name:"LocaleSelector",props:{locales:{},modelValue:{}},emits:["update:modelValue"],setup(i,{emit:p}){const a=i,{locales:s,modelValue:v}=e.toRefs(a),u=e.ref(),r=e.ref(!1),t=e.computed(()=>s.value.reduce((d,o)=>(d[o.code]={icon:o.icon,iconBackend:"flag-icons"},d),{})),n=e.computed(()=>s.value.find(d=>d.code===v.value).icon),l=d=>{var o,c;d&&((o=u.value)!=null&&o.$el.contains(d.target))||(r.value=!1,(c=u.value)==null||c.$el.querySelector(".button").blur(),window.removeEventListener("mousedown",l))},m=()=>{r.value=!0,window.addEventListener("mousedown",l)},f=d=>{p("update:modelValue",d),l()};return e.onUnmounted(()=>{window.removeEventListener("mousedown",l)}),(d,o)=>(e.openBlock(),e.createBlock(w.Align,{class:"locale-selector",ref_key:"localeSelector",ref:u,horizontal:"center"},{default:e.withCtx(()=>[e.createVNode(x.Button,{class:"locale-button",onClick:o[0]||(o[0]=c=>m()),onFocus:o[1]||(o[1]=c=>m()),onKeydown:[o[2]||(o[2]=e.withKeys(e.withModifiers(c=>l(),["shift"]),["tab"])),o[3]||(o[3]=e.withKeys(c=>l(),["tab"]))],icon:n.value,iconBackend:"flag-icons-square",mood:"neutral",outline:"",size:"large-3",shape:"round"},null,8,["icon"]),e.createVNode(C.PopoverMenu,{class:"locale-menu no-spacing",onSelect:o[4]||(o[4]=c=>f(c)),items:t.value,visible:r.value},null,8,["items","visible"])]),_:1},512))}});const J=k._export_sfc(G,[["__scopeId","data-v-dd1fb6f5"]]),Q={class:"brand-text"};function X(i,p){return e.openBlock(),e.createElementBlock("div",Q)}const Y={},Z=k._export_sfc(Y,[["render",X],["__scopeId","data-v-fa9bf0e5"]]),ee={key:0,class:"collapse"},te=e.defineComponent({__name:"Collapse",props:{expanded:{type:Boolean,default:!1}},setup(i){const p=i,{expanded:a}=e.toRefs(p),s=r=>{const t=r;t.style.height="auto"},v=r=>{const t=r,n=getComputedStyle(t).width;t.style.width=n,t.style.position="absolute",t.style.visibility="hidden",t.style.height="auto";const l=getComputedStyle(t).height;t.style.width="",t.style.position="",t.style.visibility="",t.style.height="0",getComputedStyle(t).height,requestAnimationFrame(()=>{t.style.height=l})},u=r=>{const t=r,n=getComputedStyle(t).height;t.style.height=n,getComputedStyle(t).height,requestAnimationFrame(()=>{t.style.height="0"})};return(r,t)=>(e.openBlock(),e.createBlock(e.Transition,{name:"collapse",onAfterEnter:s,onEnter:v,onLeave:u},{default:e.withCtx(()=>[e.unref(a)?(e.openBlock(),e.createElementBlock("div",ee,[e.renderSlot(r.$slots,"default",{},void 0,!0)])):e.createCommentVNode("",!0)]),_:3}))}});const ne=k._export_sfc(te,[["__scopeId","data-v-10c3004c"]]);class $ extends q.BaseError{getMessage(p){return`Invalid menu item level ${p}`}}const oe=e.defineComponent({__name:"MenuItem",props:{active:{type:Boolean,default:!1},fullWidth:{type:Boolean},icon:{},iconBackend:{},label:{},level:{default:1},withSublevel:{type:Boolean,default:!1},link:{}},setup(i){const p=i,{active:a,fullWidth:s,icon:v,iconBackend:u,label:r,level:t,withSublevel:n}=e.toRefs(p),l=e.computed(()=>b.match(t.value).when(1,()=>"large-3").whenAny([2,3],()=>"large").or(o=>{throw new $(o)}).done),m=e.computed(()=>a.value?"elevated-2":"elevated"),f=e.computed(()=>b.match(t.value).when(1,()=>"large").whenAny([2,3],()=>"normal").or(o=>{throw new $(o)}).done),d=e.computed(()=>({active:a.value,"full-width":s.value,[`level-${t.value}`]:!0,"with-sublevel":n.value}));return(o,c)=>(e.openBlock(),e.createBlock(e.resolveDynamicComponent(o.link?"a":"div"),{class:e.normalizeClass(["menu-item",d.value]),href:o.link?o.link:void 0},{default:e.withCtx(()=>[e.unref(v)?(e.openBlock(),e.createBlock(w.Icon,{key:0,class:"item-icon",backend:e.unref(u),elevation:m.value,size:l.value,value:e.unref(v)},null,8,["backend","elevation","size","value"])):e.createCommentVNode("",!0),e.unref(s)&&e.unref(r)?(e.openBlock(),e.createBlock(g.Info,{key:1,elevation:m.value,size:f.value},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(r)),1)]),_:1},8,["elevation","size"])):e.createCommentVNode("",!0),e.unref(s)&&e.unref(n)?(e.openBlock(),e.createBlock(w.Icon,{key:2,class:"chevron",elevation:m.value,size:"large-3",value:"chevron-right"},null,8,["elevation"])):e.createCommentVNode("",!0)]),_:1},8,["class","href"]))}});const I=k._export_sfc(oe,[["__scopeId","data-v-e982b607"]]),le=e.defineComponent({__name:"MenuSubsection",props:{fullWidth:{type:Boolean},expandedPrefix:{},icon:{},iconBackend:{},items:{},label:{},level:{default:0},prefix:{},router:{},translator:{}},emits:["update:expandedPrefix"],setup(i,{emit:p}){const a=i,{expandedPrefix:s,icon:v,iconBackend:u,items:r,label:t,level:n,prefix:l,router:m,translator:f}=e.toRefs(a),d=e.computed(()=>m.value.currentRoute.value.meta.menuItem),o=e.computed(()=>n.value+1),c=e.computed(()=>n.value+1),_=B=>{p("update:expandedPrefix",l.value);const y=r.value[B];"items"in y||m.value.push(y.route)};return(B,y)=>{const E=e.resolveComponent("MenuSubsection",!0);return e.openBlock(),e.createElementBlock(e.Fragment,null,[e.unref(t)?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.unref(n)===0?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[B.fullWidth?(e.openBlock(),e.createBlock(g.Info,{key:0,class:"section",elevation:"elevated"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(e.unref(f)(e.unref(t)).toUpperCase()),1)]),_:1})):(e.openBlock(),e.createBlock(w.Icon,{key:1,class:"section-collapsed",elevation:"elevated",size:"large-3",value:"dots-horizontal-rounded"}))],64)):(e.openBlock(),e.createBlock(I,{key:1,onClick:y[0]||(y[0]=()=>p("update:expandedPrefix",e.unref(l))),active:e.unref(s).startsWith(e.unref(l)),fullWidth:B.fullWidth,icon:e.unref(v),iconBackend:e.unref(u),label:B.fullWidth?e.unref(t):void 0,level:e.unref(n),withSublevel:""},null,8,["active","fullWidth","icon","iconBackend","label","level"]))],64)):e.createCommentVNode("",!0),e.createVNode(ne,{expanded:e.unref(n)===0||e.unref(s).startsWith(e.unref(l))},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(r),(h,S)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,["items"in h?(e.openBlock(),e.createBlock(E,{key:0,"onUpdate:expandedPrefix":y[1]||(y[1]=N=>p("update:expandedPrefix",N)),expandedPrefix:e.unref(s),fullWidth:B.fullWidth,icon:h.icon,iconBackend:h.iconBackend,items:h.items,level:c.value,label:h.label?e.unref(f)(h.label):"",prefix:`${e.unref(l)}${S}.`,router:e.unref(m),translator:e.unref(f)},null,8,["expandedPrefix","fullWidth","icon","iconBackend","items","level","label","prefix","router","translator"])):B.fullWidth||e.unref(n)===0?(e.openBlock(),e.createBlock(I,{key:1,onClick:e.withModifiers(()=>_(S),["prevent"]),active:`${e.unref(l)}${S}`===d.value,fullWidth:B.fullWidth,icon:h.icon,iconBackend:h.iconBackend,label:B.fullWidth?e.unref(f)(h.label):void 0,level:o.value,link:e.unref(m).resolve(h.route).href},null,8,["onClick","active","fullWidth","icon","iconBackend","label","level","link"])):e.createCommentVNode("",!0)],64))),256))]),_:1},8,["expanded"])],64)}}});const M=k._export_sfc(le,[["__scopeId","data-v-d52b95ab"]]),ae=i=>(e.pushScopeId("data-v-3ee4186d"),i=i(),e.popScopeId(),i),re={class:"brand"},se={class:"items"},ue=ae(()=>e.createElementVNode("div",{class:"pixel"}," ",-1)),ce=e.defineComponent({__name:"SideMenu",props:{brandText:{},fullWidth:{type:Boolean},menu:{},router:{},translator:{type:Function}},setup(i){const p=i,a=e.ref(""),s=e.ref(!1),{fullWidth:v,router:u}=e.toRefs(p),r=e.computed(()=>v.value||s.value);return e.watch(u.value.currentRoute,t=>{const n=t.meta.menuItem??"";a.value=n.substring(0,n.lastIndexOf(".")+1)},{immediate:!0}),(t,n)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["side-menu",{"full-width":r.value}]),onMouseenter:n[2]||(n[2]=l=>s.value=!0),onMouseleave:n[3]||(n[3]=l=>s.value=!1)},[e.createElementVNode("div",{class:"brand-container",onClick:n[0]||(n[0]=l=>e.unref(u).push({name:"default"}))},[e.createElementVNode("div",re,[e.createVNode(T.Logo),t.brandText?(e.openBlock(),e.createBlock(F.BrandText,{key:0,elevation:"elevated-3",size:"large-4"},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(t.brandText),1)]),_:1})):(e.openBlock(),e.createBlock(Z,{key:1}))])]),e.createElementVNode("div",se,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.menu,(l,m)=>(e.openBlock(),e.createBlock(M,{expandedPrefix:a.value,"onUpdate:expandedPrefix":n[1]||(n[1]=f=>a.value=f),fullWidth:r.value,icon:l.icon,iconBackend:l.iconBackend,items:l.items,label:l.label??"",prefix:`${m}.`,router:e.unref(u),translator:t.translator},null,8,["expandedPrefix","fullWidth","icon","iconBackend","items","label","prefix","router","translator"]))),256)),ue])],34))}});const ie=k._export_sfc(ce,[["__scopeId","data-v-3ee4186d"]]),de=e.defineComponent({__name:"ThemeToggle",props:{modelValue:{}},emits:["update:modelValue"],setup(i,{emit:p}){const a=i,{modelValue:s}=e.toRefs(a),v=e.computed(()=>b.match(s.value).when("dark",()=>"moon").when("light",()=>"sun").or(t=>{throw new V.UndefinedThemeError(t)}).done),u=e.computed(()=>b.match(s.value).when("dark",()=>"accent").when("light",()=>"important").or(t=>{throw new V.UndefinedThemeError(t)}).done),r=()=>{const t=b.match(s.value).when("dark",()=>"light").when("light",()=>"dark").or(n=>{throw new V.UndefinedThemeError(n)}).done;p("update:modelValue",t)};return(t,n)=>(e.openBlock(),e.createBlock(w.Align,{class:"theme-toggle"},{default:e.withCtx(()=>[e.createVNode(x.Button,{onClick:n[0]||(n[0]=()=>r()),icon:v.value,mood:u.value,outline:"",size:"large-2",shape:"round"},null,8,["icon","mood"])]),_:1}))}});const pe=k._export_sfc(de,[["__scopeId","data-v-8832a6ee"]]),me={class:"toasts"},ve=e.defineComponent({__name:"Toasts",props:{toasts:{}},emits:["removeToast"],setup(i,{emit:p}){const a=i,{toasts:s}=e.toRefs(a),v=e.computed(()=>Object.entries(s.value).reverse().map(([n,l])=>[Number(n),l])),u=e.ref([]),r=e.ref([]),t=n=>{u.value.includes(n)||(u.value.push(n),clearTimeout(r.value[n]),delete r.value[n],window.setTimeout(()=>{p("removeToast",n),u.value=u.value.filter(l=>l!==n)},500))};return e.watch(s,()=>{for(const n of s.value)n.id in r.value||(r.value[n.id]=window.setTimeout(()=>{t(n.id)},5e3))},{deep:!0,immediate:!0}),(n,l)=>(e.openBlock(),e.createElementBlock("div",me,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(v.value,([m,f])=>(e.openBlock(),e.createBlock(C.Toast,{onClick:()=>t(m),class:e.normalizeClass({"fade-out":u.value.includes(f.id)}),icon:f.icon,iconBackend:f.iconBackend,key:`toast-${f.id}`,mood:f.mood,message:f.message,title:f.title},null,8,["onClick","class","icon","iconBackend","mood","message","title"]))),128))]))}});const fe=k._export_sfc(ve,[["__scopeId","data-v-3d45b4ea"]]);exports.AccountMenu=A;exports.CurrencySelector=U;exports.Form=K;exports.Header=j;exports.LocaleSelector=J;exports.SideMenu=ie;exports.SideMenuItem=I;exports.SideMenuSubsection=M;exports.ThemeToggle=pe;exports.Toasts=fe;
