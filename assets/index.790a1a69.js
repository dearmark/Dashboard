var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,a=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,i=(e,i)=>{for(var c in i||(i={}))n.call(i,c)&&a(e,c,i[c]);if(t)for(var c of t(i))o.call(i,c)&&a(e,c,i[c]);return e};import{_ as c,d as r,r as s,B as p,G as l,H as m,L as d,k as u,f as v,v as S,n as y,N as g,O as w,P as f,o as b}from"./index.5d34bb25.js";var h=c(r({name:"Verse",props:{componentSetting:{type:Object,required:!0}},setup(e){const t=s(""),n=s();async function o(){try{const e=await fetch("https://v1.jinrishici.com/all.json"),{content:n}=await e.json();t.value=n}catch{}}let a;const i=()=>{const t=60*(e.componentSetting.duration||5)*1e3;a&&(window.clearInterval(a),a=null),a=window.setInterval(o,t)};p((()=>e.componentSetting.duration),(()=>i()),{immediate:!0}),l((()=>o())),m((()=>a&&window.clearInterval(a)));const c=d((()=>g(e.componentSetting.position)));p((()=>t.value),(()=>{n.value&&n.value.animate&&n.value.animate({opacity:[0,1]},400)}));return{verse:t,positionCSS:c,verseElement:n,handleClickAction:()=>{1===e.componentSetting.clickActionType?(o(),i()):2===e.componentSetting.clickActionType?window.open(`https://hanyu.baidu.com/s?wd=${encodeURIComponent(t.value)}`):3===e.componentSetting.clickActionType&&w(t.value)&&f({title:"提示",type:"success",message:"复制成功"})}}}}),[["render",function(e,t,n,o,a,c){return b(),u("div",{class:"wrapper",ref:"verseElement",style:y(i({fontSize:e.componentSetting.textFontSize+"px",color:e.componentSetting.textColor,textShadow:e.componentSetting.textShadow,padding:e.componentSetting.padding+"px",fontFamily:e.componentSetting.fontFamily},e.positionCSS))},[v("span",{style:y(e.componentSetting.clickActionType?"cursor: pointer":""),onClick:t[0]||(t[0]=(...t)=>e.handleClickAction&&e.handleClickAction(...t))},S(e.verse),5)],4)}],["__scopeId","data-v-a357d0e6"]]);export{h as default};