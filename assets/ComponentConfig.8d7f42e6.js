var t=Object.defineProperty,o=Object.defineProperties,e=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(o,e,a)=>e in o?t(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a;import{_ as i,d as f,u as m,r as l,a as c,b as p,c as d,w as u,S as b,e as g,t as y,o as C,f as O,g as v}from"./index.b68f57eb.js";import{_ as S}from"./index.cc1e8fc7.js";const D=f({name:"ComponentDialog",components:{StandardForm:S},setup(){const t=m(),i=l(),f=c({formConf:{},formData:{}}),p=l();let d;const u=()=>{i.value.close()};return{dialog:i,open:async t=>{d=t;const o=t.material;f.formData=t.componentSetting?JSON.parse(JSON.stringify(t.componentSetting)):JSON.parse(JSON.stringify(b[o].formData)),f.formConf=g("function"==typeof b[o].formConf?b[o].formConf(f.formData):b[o].formConf),i.value.open()},close:u,state:f,submit:()=>{p.value.validate((i=>{if(!i)return!1;{const i=(m=((t,o)=>{for(var e in o||(o={}))n.call(o,e)&&s(t,e,o[e]);if(a)for(var e of a(o))r.call(o,e)&&s(t,e,o[e]);return t})({},d),l={componentSetting:y(f.formData)},o(m,e(l)));t.dispatch("editComponent",i),u()}var m,l}))},form:p}}}),h={class:"footer",style:{"text-align":"right",padding:"12px"}};var w=i(D,[["render",function(t,o,e,a,n,r){const s=p("StandardForm"),i=p("animation-dialog");return C(),d(i,{ref:"dialog",customWrapperClass:"backdrop-blur",animationMode:"",title:"组件配置",width:"min(440px, 98vw)",height:"min(520px, 90vh)",customClass:"component-dialog",closeOnClickOutside:!1,listenWindowSizeChange:"",appendToBody:"","animation-in":"flipInY"},{footer:u((()=>[O("div",h,[O("button",{type:"button",class:"btn",onClick:o[0]||(o[0]=(...o)=>t.close&&t.close(...o))},"取消"),O("button",{type:"button",class:"btn btn-primary",onClick:o[1]||(o[1]=(...o)=>t.submit&&t.submit(...o))},"确认")])])),default:u((()=>[v(s,{formData:t.state.formData,formConf:t.state.formConf,ref:"form","label-width":"100px"},null,8,["formData","formConf"])])),_:1},512)}],["__scopeId","data-v-a2525d78"]]);export{w as default};