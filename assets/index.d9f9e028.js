import{m as t,s as e,F as n,G as r,n as o,S as a,A as c}from"./index.2fabec2c.js";import"./index.cb85f683.js";import"./color.556e4bcb.js";const i=t=>{if(!t)return!1;if(Array.isArray(t))return!(t.length>1)&&i(t[0]);const e=t.content;return e?i(e):"text"===t.type},s=t(((t,c)=>{const{ctx:s}=c,l=s.get(e),p=s.get(n),d=s.get(r);return{id:"clipboard",plugin:new o({props:{handlePaste:(t,e)=>{var n,r;const o=null===(r=(n=t.props).editable)||void 0===r?void 0:r.call(n,t.state),{clipboardData:c}=e;if(!o||!c)return!1;const i=c.getData("text/plain");if(c.getData("text/html").length>0)return!1;const s=p(i);if(!s||"string"==typeof s)return!1;const l=t.state.selection.content();return t.dispatch(t.state.tr.replaceSelection(new a(s.content,l.openStart,l.openEnd))),!0},clipboardTextSerializer:t=>{if(i(t.content.toJSON()))return t.content.textBetween(0,t.content.size,"\n\n");const e=l.topNodeType.createAndFill(void 0,t.content);if(!e)return"";return d(e)}}})}})),l=c.create([s()]);export{l as clipboard,s as clipboardPlugin};
