var e=Object.defineProperty,a=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,l=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;import{D as o,s as i}from"./index.2c188676.js";import{d as s,e as c,C as r,r as d,f as m,x as u,K as p,p as g,h as f,A as h,o as y,j as v,s as b,q as k,t as D,F as w,k as T,B as E,u as x}from"./element-plus.99702569.js";const V=[{label:"API获取",value:"api"},{label:"文字图标",value:"text"},{label:"网络图片",value:"network"}];var L=s({name:"EngineConfig",components:{Draggable:o,AnimationDialog:i},props:{engineList:{type:Array,required:!0},backupEngineList:{type:Array,required:!0}},emits:["update"],setup(e,{emit:o}){const i=c(!1),s=c(!1),g=c([]),f=c([]),h=c();r((()=>{g.value=JSON.parse(JSON.stringify(e.engineList)),f.value=JSON.parse(JSON.stringify(e.backupEngineList))}));const y=d({formData:{name:"",link:"",iconType:"api",iconPath:""},formRules:{name:[{required:!0,message:"请输入引擎名称",trigger:"blur"}],link:[{required:!0,message:"请输入引擎地址",trigger:"blur"}],iconType:[{required:!0,message:"请选择图标类型",trigger:"change"}],iconPath:[{validator:function(e,a,t){"network"!==y.formData.iconType||a||t(new Error("请输入图标地址"))},trigger:"blur"}]}});const v=c(),b=m((()=>"api"===y.formData.iconType&&y.formData.link||"network"===y.formData.iconType&&y.formData.iconPath||"text"===y.formData.iconType&&y.formData.name)),k=()=>{v.value.resetFields(),h.value.close()};return{engineDialog:h,dragDisabled:i,showDeleteArea:s,cloneEngineList:g,cloneBackupEngineList:f,handleDragChoose:e=>{const{oldIndex:a}=e,{iconType:t}=g.value[a];"local"!==t&&(s.value=!0)},handleDragUnchoose:async()=>{await u(),s.value=!1},handleDragEnd:e=>{const{originalEvent:a}=e;let t;if("touchend"===a.type){const{clientX:e,clientY:n}=a.changedTouches[0];t=document.elementFromPoint(e,n)}else{const{clientX:e,clientY:n}=a;t=document.elementFromPoint(e,n)}if("delete-area"===(null==t?void 0:t.className)&&window.confirm("是否删除该自定义引擎")){const{newIndex:a}=e;g.value.splice(a,1)}o("update",{engineList:g.value,backupEngineList:f.value})},handleAddNewEngine:()=>{h.value.open()},iconTypeList:V,state:y,form:v,showIconPreview:b,close:k,submit:()=>{v.value.validate((e=>{if(!e)return!1;g.value.push(((e,o)=>{for(var i in o||(o={}))a.call(o,i)&&l(e,i,o[i]);if(t)for(var i of t(o))n.call(o,i)&&l(e,i,o[i]);return e})({},p(y.formData))),o("update",{engineList:g.value,backupEngineList:f.value}),k()}))}}}});const P=x();g("data-v-6eda2cf6");const _={class:"engine-config",style:{"margin-left":"-100px","padding-bottom":"10px","border-bottom":"1px solid #ccc"}},C=b("div",{class:"warning"},"通过拖拽下方可更换切换引擎顺序或添加新的引擎",-1),O={class:"content"},U=b("div",{class:"text s-title"},"当前引擎组",-1),A={class:"current-engine-wrapper"},j={class:"engine-list-item"},N={key:2,class:"no-icon"},q={class:"text"},I=b("div",{class:"text s-title"},"备用引擎组",-1),S={class:"backup-engine-wrapper"},B={class:"engine-list-item"},F={key:2,class:"no-icon"},J={class:"text"},$={key:0,class:"delete-area"},z={class:"form-control"},M=b("i",{class:"tips el-icon-warning-outline"},null,-1),R=b("div",{class:"tips"},[E("默认搜索内容会被拼接到引擎地址末尾, 也可以使用 "),b("b",null,"[0]"),E(" 对原地址搜索关键词进行占位")],-1),X=b("div",{class:"tips"},[E("例如: "),b("b",null,"https://juejin.im/search?query=[0]&type=all")],-1),Y={class:"icon-img-preview-box"},K={key:2,class:"no-icon"},W={key:1,class:"icon-img-preview"},G={class:"footer",style:{"text-align":"right",padding:"12px"}};f();const H=P(((e,a,t,n,l,o)=>{const i=h("Draggable"),s=h("el-input"),c=h("el-form-item"),r=h("el-tooltip"),d=h("el-radio"),m=h("el-radio-group"),u=h("el-form"),p=h("animation-dialog");return y(),v(w,null,[b("div",_,[C,b("div",O,[b("button",{type:"button",class:"btn btn-primary btn-small btn-add",onClick:a[1]||(a[1]=(...a)=>e.handleAddNewEngine&&e.handleAddNewEngine(...a))},"添加"),U,b("div",A,[b(i,{modelValue:e.cloneEngineList,"onUpdate:modelValue":a[2]||(a[2]=a=>e.cloneEngineList=a),class:"now-engine-list engine-list","item-key":"name",group:"people",onChoose:e.handleDragChoose,onUnchoose:e.handleDragUnchoose,onEnd:e.handleDragEnd},{item:P((({element:e})=>[b("div",j,["local"===e.iconType||"network"===e.iconType?(y(),v("img",{key:0,src:e.iconPath,alt:"icon",width:"24",height:"24"},null,8,["src"])):k("",!0),"api"===e.iconType?(y(),v("img",{key:1,src:`https://favicon.cccyun.cc/${e.link}`,alt:"icon",width:"24",height:"24"},null,8,["src"])):k("",!0),"text"===e.iconType?(y(),v("div",N,D(e.name.slice(0,1)),1)):k("",!0),b("div",q,D(e.name),1)])])),_:1},8,["modelValue","onChoose","onUnchoose","onEnd"])]),I,b("div",S,[b(i,{modelValue:e.cloneBackupEngineList,"onUpdate:modelValue":a[3]||(a[3]=a=>e.cloneBackupEngineList=a),"item-key":"name",group:"people",class:"backupEngineList engine-list",onEnd:e.handleDragEnd},{item:P((({element:e})=>[b("div",B,["local"===e.iconType||"network"===e.iconType?(y(),v("img",{key:0,src:e.iconPath,alt:"icon",width:"24",height:"24"},null,8,["src"])):k("",!0),"api"===e.iconType?(y(),v("img",{key:1,src:`https://favicon.cccyun.cc/${e.link}`,alt:"icon",width:"24",height:"24"},null,8,["src"])):k("",!0),"text"===e.iconType?(y(),v("div",F,D(e.name.slice(0,1)),1)):k("",!0),b("div",J,D(e.name),1)])])),_:1},8,["modelValue","onEnd"]),e.showDeleteArea?(y(),v("div",$,"拖拽至此处删除")):k("",!0)])])]),b(p,{ref:"engineDialog",animationMode:"",title:"添加自定义引擎",width:"min(380px, 90vw)",height:"min(460px, 80vh)",customClass:"add-engine-dialog",closeOnClickOutside:!1,listenWindowSizeChange:"",appendToBody:""},{footer:P((()=>[b("div",G,[b("button",{class:"btn",onClick:a[9]||(a[9]=(...a)=>e.close&&e.close(...a))},"取消"),b("button",{class:"btn btn-primary",onClick:a[10]||(a[10]=(...a)=>e.submit&&e.submit(...a))},"确认")])])),default:P((()=>[b(u,{ref:"form","label-width":"80px",model:e.state.formData,rules:e.state.formRules},{default:P((()=>[b(c,{label:"引擎名称",prop:"name"},{default:P((()=>[b(s,{modelValue:e.state.formData.name,"onUpdate:modelValue":a[4]||(a[4]=a=>e.state.formData.name=a),placeholder:"请输入引擎名称(勿重名)"},null,8,["modelValue"])])),_:1}),b(c,{label:"引擎地址",prop:"link"},{default:P((()=>[b("div",z,[b(s,{modelValue:e.state.formData.link,"onUpdate:modelValue":a[5]||(a[5]=a=>e.state.formData.link=a),modelModifiers:{lazy:!0},placeholder:"请输入引擎地址"},null,8,["modelValue"]),b(r,{effect:"dark",placement:"bottom"},{content:P((()=>[R,X])),default:P((()=>[M])),_:1})])])),_:1}),b(c,{label:"引擎图标",prop:"iconType"},{default:P((()=>[b(m,{modelValue:e.state.formData.iconType,"onUpdate:modelValue":a[6]||(a[6]=a=>e.state.formData.iconType=a)},{default:P((()=>[(y(!0),v(w,null,T(e.iconTypeList,(e=>(y(),v(d,{label:e.value,key:e.value},{default:P((()=>[E(D(e.label),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),"network"===e.state.formData.iconType?(y(),v(c,{key:0,label:"图标地址",prop:"iconPath"},{default:P((()=>[b(m,{modelValue:e.state.formData.iconType,"onUpdate:modelValue":a[8]||(a[8]=a=>e.state.formData.iconType=a)},{default:P((()=>[b(s,{modelValue:e.state.formData.iconPath,"onUpdate:modelValue":a[7]||(a[7]=a=>e.state.formData.iconPath=a),placeholder:"请输入图标地址"},null,8,["modelValue"])])),_:1},8,["modelValue"])])),_:1})):k("",!0),b(c,{label:"图标预览"},{default:P((()=>[b("div",Y,[e.showIconPreview?(y(),v(w,{key:0},["network"===e.state.formData.iconType?(y(),v("img",{key:0,src:e.state.formData.iconPath,alt:"icon",width:"24",height:"24"},null,8,["src"])):k("",!0),"api"===e.state.formData.iconType?(y(),v("img",{key:1,src:`https://favicon.cccyun.cc/${e.state.formData.link}`,alt:"icon",width:"24",height:"24"},null,8,["src"])):k("",!0),"text"===e.state.formData.iconType?(y(),v("div",K,D(e.state.formData.name.slice(0,1)),1)):k("",!0)],64)):(y(),v("div",W))])])),_:1})])),_:1},8,["model","rules"])])),_:1},512)],64)}));L.render=H,L.__scopeId="data-v-6eda2cf6";export default L;