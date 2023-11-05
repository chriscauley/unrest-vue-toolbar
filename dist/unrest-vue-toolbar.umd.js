(function(f,L){typeof exports=="object"&&typeof module<"u"?module.exports=L(require("vue")):typeof define=="function"&&define.amd?define(["vue"],L):(f=typeof globalThis<"u"?globalThis:f||self,f["@unrest/vue-toolbar"]=L(f.Vue))})(this,function(f){"use strict";const L=(r,e)=>{const t=r.__vccOpts||r;for(const[o,n]of e)t[o]=n;return t},yr={name:"UnrestToolbar",props:{storage:Object},computed:{tools(){return this.storage.listTools()},selected_tool(){const{tool:r,variant:e}=this.storage.state.selected;return e?this.tools.find(t=>t.slug===r&&t.variants.includes(e)):this.tools.find(t=>t.slug===r)}}},Rr={class:"ur-toolbar"},Or={class:"ur-toolbar__row"},wr={class:"btn-group"},gr={key:0,class:"ur-toolbar__separator btn -secondary"},Sr={key:0,class:"ur-toolbar__row btn-group"},Ar=["onClick","title"];function _r(r,e,t,o,n,a){var s;return f.openBlock(),f.createElementBlock("div",Rr,[f.createElementVNode("div",Or,[f.createElementVNode("div",wr,[(f.openBlock(!0),f.createElementBlock(f.Fragment,null,f.renderList(a.tools,i=>(f.openBlock(),f.createElementBlock(f.Fragment,{key:i.name},[i==="separator"?(f.openBlock(),f.createElementBlock("div",gr)):(f.openBlock(),f.createBlock(f.resolveDynamicComponent(i.items?"unrest-dropdown":"div"),{key:1,onClick:i.click,items:i.items,title:i.name,class:f.normalizeClass(i.class),id:i.id},{default:f.withCtx(()=>[f.createElementVNode("i",{class:f.normalizeClass(i.icon)},null,2)]),_:2},1032,["onClick","items","title","class","id"]))],64))),128)),f.renderSlot(r.$slots,"buttons")]),f.renderSlot(r.$slots,"right")]),(s=a.selected_tool)!=null&&s.children?(f.openBlock(),f.createElementBlock("div",Sr,[(f.openBlock(!0),f.createElementBlock(f.Fragment,null,f.renderList(a.selected_tool.children,i=>(f.openBlock(),f.createElementBlock("div",{key:i.slug,onClick:i.click,class:f.normalizeClass(i.class),title:i.slug},[f.createElementVNode("i",{class:f.normalizeClass(i.icon)},null,2)],10,Ar))),128))])):f.createCommentVNode("",!0),f.renderSlot(r.$slots,"default")])}const ve=L(yr,[["render",_r]]);var I=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Cr=Object.defineProperty,be=Object.getOwnPropertySymbols,Tr=Object.prototype.hasOwnProperty,Nr=Object.prototype.propertyIsEnumerable,Ee=(r,e,t)=>e in r?Cr(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,xe=(r,e)=>{for(var t in e||(e={}))Tr.call(e,t)&&Ee(r,t,e[t]);if(be)for(var t of be(e))Nr.call(e,t)&&Ee(r,t,e[t]);return r},F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D={};D.get=function(r){if(localStorage)try{return JSON.parse(localStorage.getItem(r))}catch{return null}else return null},D.set=function(r,e){if(localStorage)try{var t=JSON.stringify(e);return localStorage.setItem(r,t),t}catch{return null}else return null},D.remove=function(r){if(localStorage)try{return localStorage.removeItem(r),!0}catch{return null}else return null},D.clear=function(){if(localStorage)try{return localStorage.clear(),!0}catch{return null}else return null};const Ur=(r={})=>{typeof r=="string"&&(r={LS_KEY:r});const{LS_KEY:e,initial:t={},ls:o=D}=r,n=f.reactive(xe(xe({},t),o.get(e)));return{state:n,save:s=>{Object.assign(n,s),o.set(e,n)}}};var Pr=typeof F=="object"&&F&&F.Object===Object&&F,$r=typeof self=="object"&&self&&self.Object===Object&&self;Pr||$r||Function("return this")();var ye={exports:{}},Re=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}},Lr=Re,K=Object.prototype.toString,X=function(r){return function(e){var t=K.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function S(r){return r=r.toLowerCase(),function(t){return X(t)===r}}function Q(r){return Array.isArray(r)}function M(r){return typeof r>"u"}function Dr(r){return r!==null&&!M(r)&&r.constructor!==null&&!M(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var Oe=S("ArrayBuffer");function jr(r){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&Oe(r.buffer),e}function Br(r){return typeof r=="string"}function kr(r){return typeof r=="number"}function we(r){return r!==null&&typeof r=="object"}function q(r){if(X(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var Ir=S("Date"),Fr=S("File"),Mr=S("Blob"),qr=S("FileList");function ee(r){return K.call(r)==="[object Function]"}function Hr(r){return we(r)&&ee(r.pipe)}function zr(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||K.call(r)===e||ee(r.toString)&&r.toString()===e)}var Jr=S("URLSearchParams");function Vr(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Wr(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function re(r,e){if(!(r===null||typeof r>"u"))if(typeof r!="object"&&(r=[r]),Q(r))for(var t=0,o=r.length;t<o;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function te(){var r={};function e(n,a){q(r[a])&&q(n)?r[a]=te(r[a],n):q(n)?r[a]=te({},n):Q(n)?r[a]=n.slice():r[a]=n}for(var t=0,o=arguments.length;t<o;t++)re(arguments[t],e);return r}function Gr(r,e,t){return re(e,function(n,a){t&&typeof n=="function"?r[a]=Lr(n,t):r[a]=n}),r}function Zr(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function Yr(r,e,t,o){r.prototype=Object.create(e.prototype,o),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function Kr(r,e,t){var o,n,a,s={};e=e||{};do{for(o=Object.getOwnPropertyNames(r),n=o.length;n-- >0;)a=o[n],s[a]||(e[a]=r[a],s[a]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function Xr(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var o=r.indexOf(e,t);return o!==-1&&o===t}function Qr(r){if(!r)return null;var e=r.length;if(M(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var et=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),v={isArray:Q,isArrayBuffer:Oe,isBuffer:Dr,isFormData:zr,isArrayBufferView:jr,isString:Br,isNumber:kr,isObject:we,isPlainObject:q,isUndefined:M,isDate:Ir,isFile:Fr,isBlob:Mr,isFunction:ee,isStream:Hr,isURLSearchParams:Jr,isStandardBrowserEnv:Wr,forEach:re,merge:te,extend:Gr,trim:Vr,stripBOM:Zr,inherits:Yr,toFlatObject:Kr,kindOf:X,kindOfTest:S,endsWith:Xr,toArray:Qr,isTypedArray:et,isFileList:qr},A=v;function ge(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Se=function(e,t,o){if(!t)return e;var n;if(o)n=o(t);else if(A.isURLSearchParams(t))n=t.toString();else{var a=[];A.forEach(t,function(l,d){l===null||typeof l>"u"||(A.isArray(l)?d=d+"[]":l=[l],A.forEach(l,function(c){A.isDate(c)?c=c.toISOString():A.isObject(c)&&(c=JSON.stringify(c)),a.push(ge(d)+"="+ge(c))}))}),n=a.join("&")}if(n){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},rt=v;function H(){this.handlers=[]}H.prototype.use=function(e,t,o){return this.handlers.push({fulfilled:e,rejected:t,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1},H.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},H.prototype.forEach=function(e){rt.forEach(this.handlers,function(o){o!==null&&e(o)})};var tt=H,nt=v,ot=function(e,t){nt.forEach(e,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])})},Ae=v;function _(r,e,t,o,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),o&&(this.request=o),n&&(this.response=n)}Ae.inherits(_,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var _e=_.prototype,Ce={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){Ce[r]={value:r}}),Object.defineProperties(_,Ce),Object.defineProperty(_e,"isAxiosError",{value:!0}),_.from=function(r,e,t,o,n,a){var s=Object.create(_e);return Ae.toFlatObject(r,s,function(l){return l!==Error.prototype}),_.call(s,r.message,e,t,o,n),s.name=r.name,a&&Object.assign(s,a),s};var C=_,Te={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},O=v;function at(r,e){e=e||new FormData;var t=[];function o(a){return a===null?"":O.isDate(a)?a.toISOString():O.isArrayBuffer(a)||O.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function n(a,s){if(O.isPlainObject(a)||O.isArray(a)){if(t.indexOf(a)!==-1)throw Error("Circular reference detected in "+s);t.push(a),O.forEach(a,function(l,d){if(!O.isUndefined(l)){var u=s?s+"."+d:d,c;if(l&&!s&&typeof l=="object"){if(O.endsWith(d,"{}"))l=JSON.stringify(l);else if(O.endsWith(d,"[]")&&(c=O.toArray(l))){c.forEach(function(b){!O.isUndefined(b)&&e.append(u,o(b))});return}}n(l,u)}}),t.pop()}else e.append(s,o(a))}return n(r),e}var Ne=at,ne=C,st=function(e,t,o){var n=o.config.validateStatus;!o.status||!n||n(o.status)?e(o):t(new ne("Request failed with status code "+o.status,[ne.ERR_BAD_REQUEST,ne.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))},z=v,it=z.isStandardBrowserEnv()?function(){return{write:function(t,o,n,a,s,i){var l=[];l.push(t+"="+encodeURIComponent(o)),z.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),z.isString(a)&&l.push("path="+a),z.isString(s)&&l.push("domain="+s),i===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){var o=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return o?decodeURIComponent(o[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),ut=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},lt=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},ft=ut,ct=lt,Ue=function(e,t){return e&&!ft(t)?ct(e,t):t},oe=v,dt=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],pt=function(e){var t={},o,n,a;return e&&oe.forEach(e.split(`
`),function(i){if(a=i.indexOf(":"),o=oe.trim(i.substr(0,a)).toLowerCase(),n=oe.trim(i.substr(a+1)),o){if(t[o]&&dt.indexOf(o)>=0)return;o==="set-cookie"?t[o]=(t[o]?t[o]:[]).concat([n]):t[o]=t[o]?t[o]+", "+n:n}}),t},Pe=v,ht=Pe.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),o;function n(a){var s=a;return e&&(t.setAttribute("href",s),s=t.href),t.setAttribute("href",s),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return o=n(window.location.href),function(s){var i=Pe.isString(s)?n(s):s;return i.protocol===o.protocol&&i.host===o.host}}():function(){return function(){return!0}}(),ae=C,mt=v;function $e(r){ae.call(this,r==null?"canceled":r,ae.ERR_CANCELED),this.name="CanceledError"}mt.inherits($e,ae,{__CANCEL__:!0});var J=$e,vt=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},j=v,bt=st,Et=it,xt=Se,yt=Ue,Rt=pt,Ot=ht,wt=Te,w=C,gt=J,St=vt,Le=function(e){return new Promise(function(o,n){var a=e.data,s=e.headers,i=e.responseType,l;function d(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}j.isFormData(a)&&j.isStandardBrowserEnv()&&delete s["Content-Type"];var u=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",b=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(c+":"+b)}var p=yt(e.baseURL,e.url);u.open(e.method.toUpperCase(),xt(p,e.params,e.paramsSerializer),!0),u.timeout=e.timeout;function $(){if(!!u){var y="getAllResponseHeaders"in u?Rt(u.getAllResponseHeaders()):null,m=!i||i==="text"||i==="json"?u.responseText:u.response,R={data:m,status:u.status,statusText:u.statusText,headers:y,config:e,request:u};bt(function(me){o(me),d()},function(me){n(me),d()},R),u=null}}if("onloadend"in u?u.onloadend=$:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout($)},u.onabort=function(){!u||(n(new w("Request aborted",w.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new w("Network Error",w.ERR_NETWORK,e,u,u)),u=null},u.ontimeout=function(){var m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",R=e.transitional||wt;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),n(new w(m,R.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,e,u)),u=null},j.isStandardBrowserEnv()){var B=(e.withCredentials||Ot(p))&&e.xsrfCookieName?Et.read(e.xsrfCookieName):void 0;B&&(s[e.xsrfHeaderName]=B)}"setRequestHeader"in u&&j.forEach(s,function(m,R){typeof a>"u"&&R.toLowerCase()==="content-type"?delete s[R]:u.setRequestHeader(R,m)}),j.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),i&&i!=="json"&&(u.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&u.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(y){!u||(n(!y||y&&y.type?new gt:y),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),a||(a=null);var k=St(p);if(k&&["http","https","file"].indexOf(k)===-1){n(new w("Unsupported protocol "+k+":",w.ERR_BAD_REQUEST,e));return}u.send(a)})},At=null,h=v,De=ot,je=C,_t=Te,Ct=Ne,Tt={"Content-Type":"application/x-www-form-urlencoded"};function Be(r,e){!h.isUndefined(r)&&h.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Nt(){var r;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(r=Le),r}function Ut(r,e,t){if(h.isString(r))try{return(e||JSON.parse)(r),h.trim(r)}catch(o){if(o.name!=="SyntaxError")throw o}return(t||JSON.stringify)(r)}var V={transitional:_t,adapter:Nt(),transformRequest:[function(e,t){if(De(t,"Accept"),De(t,"Content-Type"),h.isFormData(e)||h.isArrayBuffer(e)||h.isBuffer(e)||h.isStream(e)||h.isFile(e)||h.isBlob(e))return e;if(h.isArrayBufferView(e))return e.buffer;if(h.isURLSearchParams(e))return Be(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var o=h.isObject(e),n=t&&t["Content-Type"],a;if((a=h.isFileList(e))||o&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return Ct(a?{"files[]":e}:e,s&&new s)}else if(o||n==="application/json")return Be(t,"application/json"),Ut(e);return e}],transformResponse:[function(e){var t=this.transitional||V.transitional,o=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!o&&this.responseType==="json";if(a||n&&h.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(a)throw s.name==="SyntaxError"?je.from(s,je.ERR_BAD_RESPONSE,this,null,this.response):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:At},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};h.forEach(["delete","get","head"],function(e){V.headers[e]={}}),h.forEach(["post","put","patch"],function(e){V.headers[e]=h.merge(Tt)});var se=V,Pt=v,$t=se,Lt=function(e,t,o){var n=this||$t;return Pt.forEach(o,function(s){e=s.call(n,e,t)}),e},ke=function(e){return!!(e&&e.__CANCEL__)},Ie=v,ie=Lt,Dt=ke,jt=se,Bt=J;function ue(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Bt}var kt=function(e){ue(e),e.headers=e.headers||{},e.data=ie.call(e,e.data,e.headers,e.transformRequest),e.headers=Ie.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ie.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||jt.adapter;return t(e).then(function(n){return ue(e),n.data=ie.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Dt(n)||(ue(e),n&&n.response&&(n.response.data=ie.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},x=v,Fe=function(e,t){t=t||{};var o={};function n(u,c){return x.isPlainObject(u)&&x.isPlainObject(c)?x.merge(u,c):x.isPlainObject(c)?x.merge({},c):x.isArray(c)?c.slice():c}function a(u){if(x.isUndefined(t[u])){if(!x.isUndefined(e[u]))return n(void 0,e[u])}else return n(e[u],t[u])}function s(u){if(!x.isUndefined(t[u]))return n(void 0,t[u])}function i(u){if(x.isUndefined(t[u])){if(!x.isUndefined(e[u]))return n(void 0,e[u])}else return n(void 0,t[u])}function l(u){if(u in t)return n(e[u],t[u]);if(u in e)return n(void 0,e[u])}var d={url:s,method:s,data:s,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l};return x.forEach(Object.keys(e).concat(Object.keys(t)),function(c){var b=d[c]||a,p=b(c);x.isUndefined(p)&&b!==l||(o[c]=p)}),o},Me={version:"0.27.2"},It=Me.version,g=C,le={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){le[r]=function(o){return typeof o===r||"a"+(e<1?"n ":" ")+r}});var qe={};le.transitional=function(e,t,o){function n(a,s){return"[Axios v"+It+"] Transitional option '"+a+"'"+s+(o?". "+o:"")}return function(a,s,i){if(e===!1)throw new g(n(s," has been removed"+(t?" in "+t:"")),g.ERR_DEPRECATED);return t&&!qe[s]&&(qe[s]=!0,console.warn(n(s," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,s,i):!0}};function Ft(r,e,t){if(typeof r!="object")throw new g("options must be an object",g.ERR_BAD_OPTION_VALUE);for(var o=Object.keys(r),n=o.length;n-- >0;){var a=o[n],s=e[a];if(s){var i=r[a],l=i===void 0||s(i,a,r);if(l!==!0)throw new g("option "+a+" must be "+l,g.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new g("Unknown option "+a,g.ERR_BAD_OPTION)}}var Mt={assertOptions:Ft,validators:le},He=v,qt=Se,ze=tt,Je=kt,W=Fe,Ht=Ue,Ve=Mt,T=Ve.validators;function N(r){this.defaults=r,this.interceptors={request:new ze,response:new ze}}N.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=W(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var o=t.transitional;o!==void 0&&Ve.assertOptions(o,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(t)===!1||(a=a&&p.synchronous,n.unshift(p.fulfilled,p.rejected))});var s=[];this.interceptors.response.forEach(function(p){s.push(p.fulfilled,p.rejected)});var i;if(!a){var l=[Je,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(s),i=Promise.resolve(t);l.length;)i=i.then(l.shift(),l.shift());return i}for(var d=t;n.length;){var u=n.shift(),c=n.shift();try{d=u(d)}catch(b){c(b);break}}try{i=Je(d)}catch(b){return Promise.reject(b)}for(;s.length;)i=i.then(s.shift(),s.shift());return i},N.prototype.getUri=function(e){e=W(this.defaults,e);var t=Ht(e.baseURL,e.url);return qt(t,e.params,e.paramsSerializer)},He.forEach(["delete","get","head","options"],function(e){N.prototype[e]=function(t,o){return this.request(W(o||{},{method:e,url:t,data:(o||{}).data}))}}),He.forEach(["post","put","patch"],function(e){function t(o){return function(a,s,i){return this.request(W(i||{},{method:e,headers:o?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}N.prototype[e]=t(),N.prototype[e+"Form"]=t(!0)});var zt=N,Jt=J;function U(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(o){if(!!t._listeners){var n,a=t._listeners.length;for(n=0;n<a;n++)t._listeners[n](o);t._listeners=null}}),this.promise.then=function(o){var n,a=new Promise(function(s){t.subscribe(s),n=s}).then(o);return a.cancel=function(){t.unsubscribe(n)},a},r(function(n){t.reason||(t.reason=new Jt(n),e(t.reason))})}U.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},U.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]},U.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}},U.source=function(){var e,t=new U(function(n){e=n});return{token:t,cancel:e}};var Vt=U,Wt=function(e){return function(o){return e.apply(null,o)}},Gt=v,Zt=function(e){return Gt.isObject(e)&&e.isAxiosError===!0},We=v,Yt=Re,G=zt,Kt=Fe,Xt=se;function Ge(r){var e=new G(r),t=Yt(G.prototype.request,e);return We.extend(t,G.prototype,e),We.extend(t,e),t.create=function(n){return Ge(Kt(r,n))},t}var E=Ge(Xt);E.Axios=G,E.CanceledError=J,E.CancelToken=Vt,E.isCancel=ke,E.VERSION=Me.version,E.toFormData=Ne,E.AxiosError=C,E.Cancel=E.CanceledError,E.all=function(e){return Promise.all(e)},E.spread=Wt,E.isAxiosError=Zt,ye.exports=E,ye.exports.default=E;var Qt=1/0,en="[object Symbol]",rn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,tn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Z="\\ud800-\\udfff",Ze="\\u0300-\\u036f\\ufe20-\\ufe23",Ye="\\u20d0-\\u20f0",Ke="\\u2700-\\u27bf",Xe="a-z\\xdf-\\xf6\\xf8-\\xff",nn="\\xac\\xb1\\xd7\\xf7",on="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",an="\\u2000-\\u206f",sn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Qe="A-Z\\xc0-\\xd6\\xd8-\\xde",er="\\ufe0e\\ufe0f",rr=nn+on+an+sn,fe="['\u2019]",un="["+Z+"]",tr="["+rr+"]",Y="["+Ze+Ye+"]",nr="\\d+",ln="["+Ke+"]",or="["+Xe+"]",ar="[^"+Z+rr+nr+Ke+Xe+Qe+"]",ce="\\ud83c[\\udffb-\\udfff]",fn="(?:"+Y+"|"+ce+")",sr="[^"+Z+"]",de="(?:\\ud83c[\\udde6-\\uddff]){2}",pe="[\\ud800-\\udbff][\\udc00-\\udfff]",P="["+Qe+"]",ir="\\u200d",ur="(?:"+or+"|"+ar+")",cn="(?:"+P+"|"+ar+")",lr="(?:"+fe+"(?:d|ll|m|re|s|t|ve))?",fr="(?:"+fe+"(?:D|LL|M|RE|S|T|VE))?",cr=fn+"?",dr="["+er+"]?",dn="(?:"+ir+"(?:"+[sr,de,pe].join("|")+")"+dr+cr+")*",pr=dr+cr+dn,pn="(?:"+[ln,de,pe].join("|")+")"+pr,hn="(?:"+[sr+Y+"?",Y,de,pe,un].join("|")+")",mn=RegExp(fe,"g"),vn=RegExp(Y,"g"),bn=RegExp(ce+"(?="+ce+")|"+hn+pr,"g"),En=RegExp([P+"?"+or+"+"+lr+"(?="+[tr,P,"$"].join("|")+")",cn+"+"+fr+"(?="+[tr,P+ur,"$"].join("|")+")",P+"?"+ur+"+"+lr,P+"+"+fr,nr,pn].join("|"),"g"),xn=RegExp("["+ir+Z+Ze+Ye+er+"]"),yn=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Rn={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"ss"},On=typeof I=="object"&&I&&I.Object===Object&&I,wn=typeof self=="object"&&self&&self.Object===Object&&self,gn=On||wn||Function("return this")();function Sn(r,e,t,o){var n=-1,a=r?r.length:0;for(o&&a&&(t=r[++n]);++n<a;)t=e(t,r[n],n,r);return t}function An(r){return r.split("")}function _n(r){return r.match(rn)||[]}function Cn(r){return function(e){return r==null?void 0:r[e]}}var Tn=Cn(Rn);function hr(r){return xn.test(r)}function Nn(r){return yn.test(r)}function Un(r){return hr(r)?Pn(r):An(r)}function Pn(r){return r.match(bn)||[]}function $n(r){return r.match(En)||[]}var Ln=Object.prototype,Dn=Ln.toString,mr=gn.Symbol,vr=mr?mr.prototype:void 0,br=vr?vr.toString:void 0;function jn(r,e,t){var o=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(n);++o<n;)a[o]=r[o+e];return a}function Bn(r){if(typeof r=="string")return r;if(qn(r))return br?br.call(r):"";var e=r+"";return e=="0"&&1/r==-Qt?"-0":e}function kn(r,e,t){var o=r.length;return t=t===void 0?o:t,!e&&t>=o?r:jn(r,e,t)}function In(r){return function(e){e=he(e);var t=hr(e)?Un(e):void 0,o=t?t[0]:e.charAt(0),n=t?kn(t,1).join(""):e.slice(1);return o[r]()+n}}function Fn(r){return function(e){return Sn(Vn(Hn(e).replace(mn,"")),r,"")}}function Mn(r){return!!r&&typeof r=="object"}function qn(r){return typeof r=="symbol"||Mn(r)&&Dn.call(r)==en}function he(r){return r==null?"":Bn(r)}function Hn(r){return r=he(r),r&&r.replace(tn,Tn).replace(vn,"")}var zn=Fn(function(r,e,t){return r+(t?" ":"")+Jn(e)}),Jn=In("toUpperCase");function Vn(r,e,t){return r=he(r),e=t?void 0:e,e===void 0?Nn(r)?$n(r):_n(r):r.match(e)||[]}var Wn=zn;const Gn=(r,e)=>`-tool_${r} -variant_${e}`,Er=(r,{tools:e,initial:t={}})=>{t={selected:{},...t};const o=Ur({LS_KEY:r,initial:t}),n=a=>{if(a==="separator")return a;if(a.getIcon)throw"DEPRECATED: Use icon instead of getIcon";const{slug:s,name:i,variants:l=[],icon:d=Gn,items:u}=a,c=(m,R)=>{typeof a.select=="function"?a.select(m,R):a.select===xr?o.save({[m]:!o.state[m]}):o.save({selected:{tool:m,variant:R}})},b=(m,R)=>typeof d=="function"?d(m,R):d,{tool:p,variant:$}=o.state.selected,B=!l.length||l.includes($),k=s===p&&B,y=a.select===xr&&o.state[s];return{slug:s,id:a.id,icon:b(p,B?$:l[0]),name:i||Wn(s),class:`btn ${k||y?"-primary":"-secondary"}`,click:()=>c(s,l[0]),variants:l,items:u,children:l==null?void 0:l.map(m=>({slug:m,icon:b(p,m),class:["btn",$===m?"-primary":"-secondary"],click:()=>c(s,m)}))}};return o.listTools=()=>(typeof e=="function"?e(o):e).map(n),o},xr=Er.TOGGLE="TOGGLE";return{UnrestToolbar:ve,ToolStorage:Er,install(r){r.component("UnrestToolbar",ve)}}});
