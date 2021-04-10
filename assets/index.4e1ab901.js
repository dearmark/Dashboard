import{u as e}from"./index.b896d574.js";import{d as n,e as a,f as t,A as l,B as i,p as c,h as o,o as s,j as u,s as r,l as h,q as v,t as d,a3 as p,m as g,n as m,F as k,k as w,a4 as y,u as S}from"./element-plus.8757f12b.js";var f=n({name:"Search",props:{componentSetting:{type:Object,required:!0}},setup(n){const c=e(),o=a(0),s=a(!1),u=a(""),r=a([]),h=a(-1),v=a(!1),d=t((()=>n.componentSetting.engineList[o.value]||n.componentSetting.engineList[0]));let p;const g=()=>{let e=d.value.link;/\[0\]/.test(e)?e=e.replace(/\[0\]/,u.value):e+=u.value,window.open(e),u.value=""};async function m(){if(!u.value)return r.value=[],void(h.value=-1);try{const e=await fetch(`//kongfandong.cn/getAutomatedKeywords?s=${u.value}`),{errCode:n,data:a}=await e.json();if(200!==n)throw new Error("403");v.value=!1,r.value=a}catch(e){r.value=[],h.value=-1}}const k=a();function w(e){s.value&&!k.value.contains(e.target)&&(s.value=!1)}return l((()=>{document.addEventListener("click",w)})),i((()=>{document.removeEventListener("click",w)})),{activeEngine:o,showEngine:s,searchKey:u,linkSearchArr:r,linkSearchArrActive:h,showTabTips:v,activeEngineItem:d,handleChangeEngine:e=>{o.value=e,s.value=!1},handleInputKeyDown:e=>{[9,13,38,40].includes(e.keyCode)?(9===e.keyCode&&(e.shiftKey?(o.value=o.value<=0?n.componentSetting.engineList.length-1:--o.value,e.preventDefault()):(o.value=o.value>=n.componentSetting.engineList.length-1?0:++o.value,e.preventDefault())),13===e.keyCode&&g(),38===e.keyCode&&(h.value=h.value<=0&&r.value.length>0?r.value.length-1:h.value-1,u.value=r.value[h.value]),40===e.keyCode&&(h.value=h.value<r.value.length-1&&r.value.length>0?h.value+1:0,u.value=r.value[h.value])):(p&&window.clearTimeout(p),p=window.setTimeout((()=>{m()}),400))},handleInputFocus:()=>{m(),n.componentSetting.showTabTips&&(v.value=!0)},handleInputBlur:()=>{setTimeout((()=>{v.value=!1}),200),r.value=[]},hanldeNoShowMore:()=>{v.value=!1,c.commit("updateSearchShowTabTips",!1)},handleClear:()=>{u.value=""},handleLinkSearchJump:e=>{r.value=[],h.value=-1,u.value=e,setTimeout((()=>{g()}),200)},engineSelecotr:k}}});const C=S();c("data-v-66241f51");const I={key:2,class:"no-icon"},T={class:"engine-selecotr",ref:"engineSelecotr"},b={key:2,class:"no-icon"},E={class:"text"},x={class:"search-input-box-wrapper"},L=r("path",{d:"M519.02036023 459.47959989L221.8941505 162.35411435a37.07885742 37.07885742 0 1 0-52.45354772 52.40502656l297.12476134 297.15010821L169.44060278 809.05863314a37.07885742 37.07885742 0 1 0 52.42964924 52.42892505l297.15010821-297.12476136 297.15010822 297.12476136a37.07885742 37.07885742 0 1 0 52.42892504-52.40430237l-297.12476135-297.1740067 297.12476135-297.12548553a37.07885742 37.07885742 0 1 0-52.42892504-52.42964924L519.04498291 459.47959989z"},null,-1),K={key:0,class:"link-search-wrapper"},A=r("svg",{viewBox:"0 0 1024 1024",width:"22",height:"22"},[r("path",{d:"M419.405333 0c231.683703 0 419.456512 185.265077 419.456512 413.724553a408.862625 408.862625 0 0 1-101.179298 269.55557l275.748132 280.098278a35.108244 35.108244 0 0 1-0.767673 50.154634 36.336521 36.336521 0 0 1-50.819951-0.716495l-275.49224-279.944743a421.19657 421.19657 0 0 1-266.945482 94.628488C187.823987 827.500285 0 642.235208 0 413.724553 0 185.265077 187.823987 0 419.405333 0z m0 70.932983c-191.918243 0-347.499965 153.483416-347.499965 342.79157 0 189.359333 155.581722 342.842749 347.499965 342.842749s347.551143-153.534594 347.551144-342.842749c0-189.359333-155.581722-342.791571-347.499965-342.79157z"})],-1),B={class:"tab-tooltips"},j=r("div",{class:"main"},"按Tab键可快速切换搜索引擎",-1);o();const D=C(((e,n,a,t,l,i)=>(s(),u("div",{class:["wrapper",{center:e.componentSetting.isCenter}],style:{padding:e.componentSetting.padding+"px"}},[r("div",{class:"search-wrapper-box",style:{boxShadow:e.componentSetting.boxShadow}},[r("div",{class:"search-engine-box",onClick:n[1]||(n[1]=h((n=>e.showEngine=!e.showEngine),["stop"]))},["local"===e.activeEngineItem.iconType||"network"===e.activeEngineItem.iconType?(s(),u("img",{key:0,src:e.activeEngineItem.iconPath,alt:"icon",width:"24",height:"24"},null,8,["src"])):v("",!0),"api"===e.activeEngineItem.iconType?(s(),u("img",{key:1,src:`http://favicon.cccyun.cc/${e.activeEngineItem.link}`,alt:"icon",width:"24",height:"24"},null,8,["src"])):v("",!0),"text"===e.activeEngineItem.iconType?(s(),u("div",I,d(e.activeEngineItem.name.slice(0,1)),1)):v("",!0)]),r(p,{name:"fadeInUp"},{default:C((()=>[g(r("div",T,[(s(!0),u(k,null,w(e.componentSetting.engineList,((n,a)=>(s(),u("div",{class:"engine-list-item",key:a,onClick:n=>e.handleChangeEngine(a)},["local"===n.iconType||"network"===n.iconType?(s(),u("img",{key:0,src:n.iconPath,alt:"icon",width:"24",height:"24"},null,8,["src"])):v("",!0),"api"===n.iconType?(s(),u("img",{key:1,src:`http://favicon.cccyun.cc/${n.link}`,alt:"icon",width:"24",height:"24"},null,8,["src"])):v("",!0),"text"===n.iconType?(s(),u("div",b,d(n.name.slice(0,1)),1)):v("",!0),r("div",E,d(n.name),1)],8,["onClick"])))),128))],512),[[m,e.showEngine]])])),_:1}),r("div",x,[g(r("input",{class:"search-input-box","onUpdate:modelValue":n[2]||(n[2]=n=>e.searchKey=n),onKeydown:n[3]||(n[3]=h(((...n)=>e.handleInputKeyDown&&e.handleInputKeyDown(...n)),["stop"])),onFocus:n[4]||(n[4]=(...n)=>e.handleInputFocus&&e.handleInputFocus(...n)),onBlur:n[5]||(n[5]=(...n)=>e.handleInputBlur&&e.handleInputBlur(...n)),tabindex:"-1"},null,544),[[y,e.searchKey]]),e.searchKey?(s(),u("svg",{key:0,class:"clear-btn icon",onClick:n[6]||(n[6]=(...n)=>e.handleClear&&e.handleClear(...n)),viewBox:"0 0 1024 1024",width:"20",height:"20"},[L])):v("",!0),r(p,{name:"fadeInUp"},{default:C((()=>[e.linkSearchArr.length>0?(s(),u("div",K,[(s(!0),u(k,null,w(e.linkSearchArr,((n,a)=>(s(),u("div",{class:["link-search-item",{active:e.linkSearchArrActive===a}],key:n,onClick:a=>e.handleLinkSearchJump(n)},d(n),11,["onClick"])))),128))])):v("",!0)])),_:1})]),r("div",{class:"search-btn",onClick:n[7]||(n[7]=(...n)=>e.handleSearchBtnClick&&e.handleSearchBtnClick(...n))},[A]),r(p,{name:"fadeInUp"},{default:C((()=>[g(r("div",B,[j,r("div",{class:"no-more",onClick:n[8]||(n[8]=h(((...n)=>e.hanldeNoShowMore&&e.hanldeNoShowMore(...n)),["stop"]))},"不再提示")],512),[[m,e.showTabTips]])])),_:1})],4)],6))));f.render=D,f.__scopeId="data-v-66241f51";export default f;