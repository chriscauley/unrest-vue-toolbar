(function(t,d){typeof exports=="object"&&typeof module!="undefined"?module.exports=d(require("vue"),require("@unrest/vue-storage")):typeof define=="function"&&define.amd?define(["vue","@unrest/vue-storage"],d):(t=typeof globalThis!="undefined"?globalThis:t||self,t["@unrest/vue-toolbar"]=d(t.Vue,t["@unrest/vue-storage"]))})(this,function(t,d){"use strict";var ee=(e,r)=>{const n=e.__vccOpts||e;for(const[o,u]of r)n[o]=u;return n};const re={name:"UnrestToolbar",props:{storage:Object},computed:{tools(){return this.storage.listTools()},selected_tool(){const{tool:e,variant:r}=this.storage.state.selected;return r?this.tools.find(n=>n.slug===e&&n.variants.includes(r)):this.tools.find(n=>n.slug===e)}}},te={class:"ur-toolbar"},ne={class:"ur-toolbar__row"},oe={class:"btn-group"},ue={key:0,class:"ur-toolbar__separator btn -secondary"},se={key:0,class:"ur-toolbar__row btn-group"},ce=["onClick","title"];function ae(e,r,n,o,u,s){var i;return t.openBlock(),t.createElementBlock("div",te,[t.createElementVNode("div",ne,[t.createElementVNode("div",oe,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(s.tools,c=>(t.openBlock(),t.createElementBlock(t.Fragment,{key:c.name},[c==="separator"?(t.openBlock(),t.createElementBlock("div",ue)):(t.openBlock(),t.createBlock(t.resolveDynamicComponent(c.items?"unrest-dropdown":"div"),{key:1,onClick:c.click,items:c.items,title:c.name,class:t.normalizeClass(c.class),id:c.id},{default:t.withCtx(()=>[t.createElementVNode("i",{class:t.normalizeClass(c.icon)},null,2)]),_:2},1032,["onClick","items","title","class","id"]))],64))),128)),t.renderSlot(e.$slots,"buttons")]),t.renderSlot(e.$slots,"right")]),(i=s.selected_tool)!=null&&i.children?(t.openBlock(),t.createElementBlock("div",se,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(s.selected_tool.children,c=>(t.openBlock(),t.createElementBlock("div",{key:c.slug,onClick:c.click,class:t.normalizeClass(c.class),title:c.slug},[t.createElementVNode("i",{class:t.normalizeClass(c.icon)},null,2)],10,ce))),128))])):t.createCommentVNode("",!0),t.renderSlot(e.$slots,"default")])}var C=ee(re,[["render",ae]]),x=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ie=1/0,le="[object Symbol]",fe=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,de=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,b="\\ud800-\\udfff",O="\\u0300-\\u036f\\ufe20-\\ufe23",T="\\u20d0-\\u20f0",R="\\u2700-\\u27bf",U="a-z\\xdf-\\xf6\\xf8-\\xff",xe="\\xac\\xb1\\xd7\\xf7",be="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",pe="\\u2000-\\u206f",me=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",j="A-Z\\xc0-\\xd6\\xd8-\\xde",L="\\ufe0e\\ufe0f",v=xe+be+pe+me,g="['\u2019]",ge="["+b+"]",B="["+v+"]",p="["+O+T+"]",w="\\d+",ye="["+R+"]",I="["+U+"]",z="[^"+b+v+w+R+U+j+"]",y="\\ud83c[\\udffb-\\udfff]",he="(?:"+p+"|"+y+")",N="[^"+b+"]",h="(?:\\ud83c[\\udde6-\\uddff]){2}",k="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+j+"]",G="\\u200d",D="(?:"+I+"|"+z+")",ke="(?:"+f+"|"+z+")",Z="(?:"+g+"(?:d|ll|m|re|s|t|ve))?",$="(?:"+g+"(?:D|LL|M|RE|S|T|VE))?",M=he+"?",V="["+L+"]?",Ee="(?:"+G+"(?:"+[N,h,k].join("|")+")"+V+M+")*",F=V+M+Ee,_e="(?:"+[ye,h,k].join("|")+")"+F,Se="(?:"+[N+p+"?",p,h,k,ge].join("|")+")",Ae=RegExp(g,"g"),Ce=RegExp(p,"g"),Oe=RegExp(y+"(?="+y+")|"+Se+F,"g"),Te=RegExp([f+"?"+I+"+"+Z+"(?="+[B,f,"$"].join("|")+")",ke+"+"+$+"(?="+[B,f+D,"$"].join("|")+")",f+"?"+D+"+"+Z,f+"+"+$,w,_e].join("|"),"g"),Re=RegExp("["+G+b+O+T+L+"]"),Ue=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,je={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"ss"},Le=typeof x=="object"&&x&&x.Object===Object&&x,ve=typeof self=="object"&&self&&self.Object===Object&&self,Be=Le||ve||Function("return this")();function we(e,r,n,o){var u=-1,s=e?e.length:0;for(o&&s&&(n=e[++u]);++u<s;)n=r(n,e[u],u,e);return n}function Ie(e){return e.split("")}function ze(e){return e.match(fe)||[]}function Ne(e){return function(r){return e==null?void 0:e[r]}}var Ge=Ne(je);function W(e){return Re.test(e)}function De(e){return Ue.test(e)}function Ze(e){return W(e)?$e(e):Ie(e)}function $e(e){return e.match(Oe)||[]}function Me(e){return e.match(Te)||[]}var Ve=Object.prototype,Fe=Ve.toString,P=Be.Symbol,H=P?P.prototype:void 0,J=H?H.toString:void 0;function We(e,r,n){var o=-1,u=e.length;r<0&&(r=-r>u?0:u+r),n=n>u?u:n,n<0&&(n+=u),u=r>n?0:n-r>>>0,r>>>=0;for(var s=Array(u);++o<u;)s[o]=e[o+r];return s}function Pe(e){if(typeof e=="string")return e;if(Ke(e))return J?J.call(e):"";var r=e+"";return r=="0"&&1/e==-ie?"-0":r}function He(e,r,n){var o=e.length;return n=n===void 0?o:n,!r&&n>=o?e:We(e,r,n)}function Je(e){return function(r){r=E(r);var n=W(r)?Ze(r):void 0,o=n?n[0]:r.charAt(0),u=n?He(n,1).join(""):r.slice(1);return o[e]()+u}}function Ye(e){return function(r){return we(rr(Qe(r).replace(Ae,"")),e,"")}}function qe(e){return!!e&&typeof e=="object"}function Ke(e){return typeof e=="symbol"||qe(e)&&Fe.call(e)==le}function E(e){return e==null?"":Pe(e)}function Qe(e){return e=E(e),e&&e.replace(de,Ge).replace(Ce,"")}var Xe=Ye(function(e,r,n){return e+(n?" ":"")+er(r)}),er=Je("toUpperCase");function rr(e,r,n){return e=E(e),r=n?void 0:r,r===void 0?De(e)?Me(e):ze(e):e.match(r)||[]}var tr=Xe;const nr=(e,r)=>`-tool_${e} -variant_${r}`,Y=(e,{tools:r,initial:n={}})=>{n={selected:{},...n};const o=d.ReactiveLocalStorage({LS_KEY:e,initial:n}),u=s=>{if(s==="separator")return s;if(s.getIcon)throw"DEPRECATED: Use icon instead of getIcon";const{slug:i,name:c,variants:l=[],icon:_=nr,items:ur}=s,K=(a,m)=>{typeof s.select=="function"?s.select(a,m):s.select===q?o.save({[a]:!o.state[a]}):o.save({selected:{tool:a,variant:m}})},Q=(a,m)=>typeof _=="function"?_(a,m):_,{tool:S,variant:A}=o.state.selected,X=!l.length||l.includes(A),sr=i===S&&X,cr=s.select===q&&o.state[i];return{slug:i,id:s.id,icon:Q(S,X?A:l[0]),name:c||tr(i),class:`btn ${sr||cr?"-primary":"-secondary"}`,click:()=>K(i,l[0]),variants:l,items:ur,children:l==null?void 0:l.map(a=>({slug:a,icon:Q(S,a),class:["btn",A===a?"-primary":"-secondary"],click:()=>K(i,a)}))}};return o.listTools=()=>(typeof r=="function"?r(o):r).map(u),o},q=Y.TOGGLE="TOGGLE";var or={UnrestToolbar:C,ToolStorage:Y,install(e){e.component("UnrestToolbar",C)}};return or});
