"use strict";(self["webpackChunkof_vue"]=self["webpackChunkof_vue"]||[]).push([[51674],{49680:function(t,n,e){e.d(n,{R:function(){return h}});var r=e(658448),o=e(840105),i=e(495659),c=e(1984),s=e(362844),a=e(712343),u=e(847165),d=e(330292),f=e(358725),l=e(784773),p=e(986891),_=e(890564);class h extends r.W{constructor(t){t._metadata=t._metadata||{},t._metadata.sdk=t._metadata.sdk||{name:"sentry.javascript.browser",packages:[{name:"npm:@sentry/browser",version:o.J}],version:o.J},super(t),t.sendClientReports&&p.m9.document&&p.m9.document.addEventListener("visibilitychange",(()=>{"hidden"===p.m9.document.visibilityState&&this._flushOutcomes()}))}eventFromException(t,n){return(0,l.dr)(this._options.stackParser,t,n,this._options.attachStacktrace)}eventFromMessage(t,n="info",e){return(0,l.aB)(this._options.stackParser,t,n,e,this._options.attachStacktrace)}sendEvent(t,n){const e=this.getIntegrationById(_.p);e&&e.options&&e.options.sentry&&(0,i.Gd)().addBreadcrumb({category:"sentry."+("transaction"===t.type?"transaction":"event"),event_id:t.event_id,level:t.level,message:(0,s.jH)(t)},{event:t}),super.sendEvent(t,n)}_prepareEvent(t,n,e){return t.platform=t.platform||"javascript",super._prepareEvent(t,n,e)}_flushOutcomes(){const t=this._clearOutcomes();if(0===t.length)return void(("undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("No outcomes to send"));if(!this._dsn)return void(("undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("No dsn provided, will not send outcomes"));("undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.log("Sending outcomes:",t);const n=(0,c.U)(this._dsn,this._options),e=(0,u.y)(t,this._options.tunnel&&(0,d.RA)(this._dsn));try{const t="[object Navigator]"===Object.prototype.toString.call(p.m9&&p.m9.navigator),r=t&&"function"===typeof p.m9.navigator.sendBeacon;if(r&&!this._options.transportOptions){const t=p.m9.navigator.sendBeacon.bind(p.m9.navigator);t(n,(0,f.V$)(e))}else this._sendEnvelope(e)}catch(r){("undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&a.kg.error(r)}}}},784773:function(t,n,e){e.d(n,{GJ:function(){return u},ME:function(){return g},aB:function(){return v},dr:function(){return m}});var r=e(495659),o=e(567597),i=e(320535),c=e(134754),s=e(362844),a=e(196893);function u(t,n){const e=l(t,n),r={type:n&&n.name,value:h(n)};return e.length&&(r.stacktrace={frames:e}),void 0===r.type&&""===r.value&&(r.value="Unrecoverable error caught"),r}function d(t,n,e,s){const a=(0,r.Gd)(),u=a.getClient(),d=u&&u.getOptions().normalizeDepth,f={exception:{values:[{type:(0,o.cO)(n)?n.constructor.name:s?"UnhandledRejection":"Error",value:`Non-Error ${s?"promise rejection":"exception"} captured with keys: ${(0,i.zf)(n)}`}]},extra:{__serialized__:(0,c.Qy)(n,d)}};if(e){const n=l(t,e);n.length&&(f.exception.values[0].stacktrace={frames:n})}return f}function f(t,n){return{exception:{values:[u(t,n)]}}}function l(t,n){const e=n.stacktrace||n.stack||"",r=_(n);try{return t(e,r)}catch(o){}return[]}const p=/Minified React error #\d+;/i;function _(t){if(t){if("number"===typeof t.framesToPop)return t.framesToPop;if(p.test(t.message))return 1}return 0}function h(t){const n=t&&t.message;return n?n.error&&"string"===typeof n.error.message?n.error.message:n:"No error message"}function m(t,n,e,r){const o=e&&e.syntheticException||void 0,i=g(t,n,o,r);return(0,s.EG)(i),i.level="error",e&&e.event_id&&(i.event_id=e.event_id),(0,a.WD)(i)}function v(t,n,e="info",r,o){const i=r&&r.syntheticException||void 0,c=y(t,n,i,o);return c.level=e,r&&r.event_id&&(c.event_id=r.event_id),(0,a.WD)(c)}function g(t,n,e,r,i){let c;if((0,o.VW)(n)&&n.error){const e=n;return f(t,e.error)}if((0,o.TX)(n)||(0,o.fm)(n)){const i=n;if("stack"in n)c=f(t,n);else{const n=i.name||((0,o.TX)(i)?"DOMError":"DOMException"),a=i.message?`${n}: ${i.message}`:n;c=y(t,a,e,r),(0,s.Db)(c,a)}return"code"in i&&(c.tags={...c.tags,"DOMException.code":`${i.code}`}),c}if((0,o.VZ)(n))return f(t,n);if((0,o.PO)(n)||(0,o.cO)(n)){const r=n;return c=d(t,r,e,i),(0,s.EG)(c,{synthetic:!0}),c}return c=y(t,n,e,r),(0,s.Db)(c,`${n}`,void 0),(0,s.EG)(c,{synthetic:!0}),c}function y(t,n,e,r){const o={message:n};if(r&&e){const r=l(t,e);r.length&&(o.exception={values:[{value:n,stacktrace:{frames:r}}]})}return o}},986891:function(t,n,e){e.d(n,{Wz:function(){return u},m9:function(){return s},re:function(){return f}});var r=e(264487),o=e(971235),i=e(320535),c=e(362844);const s=o.n2;let a=0;function u(){return a>0}function d(){a+=1,setTimeout((()=>{a-=1}))}function f(t,n={},e){if("function"!==typeof t)return t;try{const n=t.__sentry_wrapped__;if(n)return n;if((0,i.HK)(t))return t}catch(s){return t}const o=function(){const o=Array.prototype.slice.call(arguments);try{e&&"function"===typeof e&&e.apply(this,arguments);const r=o.map((t=>f(t,n)));return t.apply(this,r)}catch(i){throw d(),(0,r.$e)((t=>{t.addEventProcessor((t=>(n.mechanism&&((0,c.Db)(t,void 0,void 0),(0,c.EG)(t,n.mechanism)),t.extra={...t.extra,arguments:o},t))),(0,r.Tb)(i)})),i}};try{for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(o[n]=t[n])}catch(a){}(0,i.$Q)(o,t),(0,i.xp)(t,"__sentry_wrapped__",o);try{const n=Object.getOwnPropertyDescriptor(o,"name");n.configurable&&Object.defineProperty(o,"name",{get(){return t.name}})}catch(a){}return o}},682014:function(t,n,e){e.d(n,{Oo:function(){return h.O},RE:function(){return y.R},Iq:function(){return g.I},cq:function(){return i.c},dJ:function(){return p.d},qT:function(){return v.q},Xb:function(){return c.Xb},QD:function(){return s.QD},jK:function(){return T},iP:function(){return m.iP},Jn:function(){return a.J},sX:function(){return u.s},pT:function(){return _.p},m9:function(){return l.m9},n_:function(){return d.n_},cc:function(){return u.c},eN:function(){return d.eN},Tb:function(){return d.Tb},uT:function(){return d.uT},$3:function(){return b.$3},xv:function(){return x.xv},e:function(){return d.e},qv:function(){return f.q},SS:function(){return x.SS},d8:function(){return b.d8},Dt:function(){return b.Dt},yl:function(){return x.yl},Eg:function(){return x.Eg},$Q:function(){return b.$Q},Gd:function(){return c.Gd},vi:function(){return c.vi},eW:function(){return x.eW},fD:function(){return E.f},pj:function(){return c.pj},KC:function(){return S.K},lA:function(){return x.lA},NP:function(){return b.NP},HH:function(){return b.HH},v:function(){return d.v},sU:function(){return d.sU},rJ:function(){return d.rJ},YA:function(){return d.YA},mG:function(){return d.mG},av:function(){return d.av},jp:function(){return x.jp},Yr:function(){return d.Yr},R2:function(){return b.R2},$e:function(){return d.$e},re:function(){return x.re}});var r={};e.r(r),e.d(r,{Breadcrumbs:function(){return h.O},Dedupe:function(){return g.I},GlobalHandlers:function(){return p.d},HttpContext:function(){return v.q},LinkedErrors:function(){return m.iP},TryCatch:function(){return _.p}});var o=e(653162),i=e(19116),c=e(495659),s=e(242422),a=e(840105),u=e(510350),d=e(264487),f=e(645431),l=e(986891),p=e(652136),_=e(653692),h=e(890564),m=e(161634),v=e(761945),g=e(869730),y=e(49680),E=e(654025),S=e(768131),b=e(34469),x=e(619011);let R={};l.m9.Sentry&&l.m9.Sentry.Integrations&&(R=l.m9.Sentry.Integrations);const T={...R,...o,...r}},890564:function(t,n,e){e.d(n,{O:function(){return f},p:function(){return d}});var r=e(495659),o=e(409732),i=e(858464),c=e(216547),s=e(857321),a=e(426956),u=e(986891);const d="Breadcrumbs";class f{static __initStatic(){this.id=d}__init(){this.name=f.id}constructor(t){f.prototype.__init.call(this),this.options={console:!0,dom:!0,fetch:!0,history:!0,sentry:!0,xhr:!0,...t}}setupOnce(){this.options.console&&(0,o.o)("console",p),this.options.dom&&(0,o.o)("dom",l(this.options.dom)),this.options.xhr&&(0,o.o)("xhr",_),this.options.fetch&&(0,o.o)("fetch",h),this.options.history&&(0,o.o)("history",m)}}function l(t){function n(n){let e,o="object"===typeof t?t.serializeAttribute:void 0;"string"===typeof o&&(o=[o]);try{e=n.event.target?(0,i.Rt)(n.event.target,o):(0,i.Rt)(n.event,o)}catch(c){e="<unknown>"}0!==e.length&&(0,r.Gd)().addBreadcrumb({category:`ui.${n.name}`,message:e},{event:n.event,name:n.name,global:n.global})}return n}function p(t){for(let e=0;e<t.args.length;e++)if("ref=Ref<"===t.args[e]){t.args[e+1]="viewRef";break}const n={category:"console",data:{arguments:t.args,logger:"console"},level:(0,c.VT)(t.level),message:(0,s.nK)(t.args," ")};if("assert"===t.level){if(!1!==t.args[0])return;n.message=`Assertion failed: ${(0,s.nK)(t.args.slice(1)," ")||"console.assert"}`,n.data.arguments=t.args.slice(1)}(0,r.Gd)().addBreadcrumb(n,{input:t.args,level:t.level})}function _(t){if(t.endTimestamp){if(t.xhr.__sentry_own_request__)return;const{method:n,url:e,status_code:o,body:i}=t.xhr.__sentry_xhr__||{};(0,r.Gd)().addBreadcrumb({category:"xhr",data:{method:n,url:e,status_code:o},type:"http"},{xhr:t.xhr,input:i})}else;}function h(t){t.endTimestamp&&(t.fetchData.url.match(/sentry_key/)&&"POST"===t.fetchData.method||(t.error?(0,r.Gd)().addBreadcrumb({category:"fetch",data:t.fetchData,level:"error",type:"http"},{data:t.error,input:t.args}):(0,r.Gd)().addBreadcrumb({category:"fetch",data:{...t.fetchData,status_code:t.response.status},type:"http"},{input:t.args,response:t.response})))}function m(t){let n=t.from,e=t.to;const o=(0,a.en)(u.m9.location.href);let i=(0,a.en)(n);const c=(0,a.en)(e);i.path||(i=o),o.protocol===c.protocol&&o.host===c.host&&(e=c.relative),o.protocol===i.protocol&&o.host===i.host&&(n=i.relative),(0,r.Gd)().addBreadcrumb({category:"navigation",data:{from:n,to:e}})}f.__initStatic()},869730:function(t,n,e){e.d(n,{I:function(){return o}});var r=e(712343);class o{constructor(){o.prototype.__init.call(this)}static __initStatic(){this.id="Dedupe"}__init(){this.name=o.id}setupOnce(t,n){const e=t=>{const e=n().getIntegration(o);if(e){try{if(i(t,e._previousEvent))return("undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn("Event dropped due to being a duplicate of previously captured event."),null}catch(c){return e._previousEvent=t}return e._previousEvent=t}return t};e.id=this.name,t(e)}}function i(t,n){return!!n&&(!!c(t,n)||!!s(t,n))}function c(t,n){const e=t.message,r=n.message;return!(!e&&!r)&&(!(e&&!r||!e&&r)&&(e===r&&(!!u(t,n)&&!!a(t,n))))}function s(t,n){const e=d(n),r=d(t);return!(!e||!r)&&(e.type===r.type&&e.value===r.value&&(!!u(t,n)&&!!a(t,n)))}function a(t,n){let e=f(t),r=f(n);if(!e&&!r)return!0;if(e&&!r||!e&&r)return!1;if(r.length!==e.length)return!1;for(let o=0;o<r.length;o++){const t=r[o],n=e[o];if(t.filename!==n.filename||t.lineno!==n.lineno||t.colno!==n.colno||t.function!==n.function)return!1}return!0}function u(t,n){let e=t.fingerprint,r=n.fingerprint;if(!e&&!r)return!0;if(e&&!r||!e&&r)return!1;try{return!(e.join("")!==r.join(""))}catch(o){return!1}}function d(t){return t.exception&&t.exception.values&&t.exception.values[0]}function f(t){const n=t.exception;if(n)try{return n.values[0].stacktrace.frames}catch(e){return}}o.__initStatic()},652136:function(t,n,e){e.d(n,{d:function(){return f}});var r=e(495659),o=e(409732),i=e(567597),c=e(858464),s=e(712343),a=e(362844),u=e(784773),d=e(986891);class f{static __initStatic(){this.id="GlobalHandlers"}__init(){this.name=f.id}__init2(){this._installFunc={onerror:l,onunhandledrejection:p}}constructor(t){f.prototype.__init.call(this),f.prototype.__init2.call(this),this._options={onerror:!0,onunhandledrejection:!0,...t}}setupOnce(){Error.stackTraceLimit=50;const t=this._options;for(const n in t){const e=this._installFunc[n];e&&t[n]&&(v(n),e(),this._installFunc[n]=void 0)}}}function l(){(0,o.o)("error",(t=>{const[n,e,r]=y();if(!n.getIntegration(f))return;const{msg:o,url:c,line:s,column:a,error:l}=t;if((0,d.Wz)()||l&&l.__sentry_own_request__)return;const p=void 0===l&&(0,i.HD)(o)?h(o,c,s,a):m((0,u.ME)(e,l||o,void 0,r,!1),c,s,a);p.level="error",g(n,l,p,"onerror")}))}function p(){(0,o.o)("unhandledrejection",(t=>{const[n,e,r]=y();if(!n.getIntegration(f))return;let o=t;try{"reason"in t?o=t.reason:"detail"in t&&"reason"in t.detail&&(o=t.detail.reason)}catch(s){}if((0,d.Wz)()||o&&o.__sentry_own_request__)return!0;const c=(0,i.pt)(o)?_(o):(0,u.ME)(e,o,void 0,r,!0);c.level="error",g(n,o,c,"onunhandledrejection")}))}function _(t){return{exception:{values:[{type:"UnhandledRejection",value:`Non-Error promise rejection captured with value: ${String(t)}`}]}}}function h(t,n,e,r){const o=/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;let c=(0,i.VW)(t)?t.message:t,s="Error";const a=c.match(o);a&&(s=a[1],c=a[2]);const u={exception:{values:[{type:s,value:c}]}};return m(u,n,e,r)}function m(t,n,e,r){const o=t.exception=t.exception||{},s=o.values=o.values||[],a=s[0]=s[0]||{},u=a.stacktrace=a.stacktrace||{},d=u.frames=u.frames||[],f=isNaN(parseInt(r,10))?void 0:r,l=isNaN(parseInt(e,10))?void 0:e,p=(0,i.HD)(n)&&n.length>0?n:(0,c.l4)();return 0===d.length&&d.push({colno:f,filename:p,function:"?",in_app:!0,lineno:l}),t}function v(t){("undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`Global Handler attached: ${t}`)}function g(t,n,e,r){(0,a.EG)(e,{handled:!1,type:r}),t.captureEvent(e,{originalException:n})}function y(){const t=(0,r.Gd)(),n=t.getClient(),e=n&&n.getOptions()||{stackParser:()=>[],attachStacktrace:!1};return[t,e.stackParser,e.attachStacktrace]}f.__initStatic()},761945:function(t,n,e){e.d(n,{q:function(){return c}});var r=e(510350),o=e(495659),i=e(986891);class c{constructor(){c.prototype.__init.call(this)}static __initStatic(){this.id="HttpContext"}__init(){this.name=c.id}setupOnce(){(0,r.c)((t=>{if((0,o.Gd)().getIntegration(c)){if(!i.m9.navigator&&!i.m9.location&&!i.m9.document)return t;const n=t.request&&t.request.url||i.m9.location&&i.m9.location.href,{referrer:e}=i.m9.document||{},{userAgent:r}=i.m9.navigator||{},o={...t.request&&t.request.headers,...e&&{Referer:e},...r&&{"User-Agent":r}},c={...n&&{url:n},headers:o};return{...t,request:c}}return t}))}}c.__initStatic()},161634:function(t,n,e){e.d(n,{iP:function(){return u}});var r=e(495659),o=e(510350),i=e(567597),c=e(784773);const s="cause",a=5;class u{static __initStatic(){this.id="LinkedErrors"}__init(){this.name=u.id}constructor(t={}){u.prototype.__init.call(this),this._key=t.key||s,this._limit=t.limit||a}setupOnce(){const t=(0,r.Gd)().getClient();t&&(0,o.c)(((n,e)=>{const o=(0,r.Gd)().getIntegration(u);return o?d(t.getOptions().stackParser,o._key,o._limit,n,e):n}))}}function d(t,n,e,r,o){if(!r.exception||!r.exception.values||!o||!(0,i.V9)(o.originalException,Error))return r;const c=f(t,e,o.originalException,n);return r.exception.values=[...c,...r.exception.values],r}function f(t,n,e,r,o=[]){if(!(0,i.V9)(e[r],Error)||o.length+1>=n)return o;const s=(0,c.GJ)(t,e[r]);return f(t,n,e[r],r,[s,...o])}u.__initStatic()},653692:function(t,n,e){e.d(n,{p:function(){return s}});var r=e(320535),o=e(130360),i=e(986891);const c=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"];class s{static __initStatic(){this.id="TryCatch"}__init(){this.name=s.id}constructor(t){s.prototype.__init.call(this),this._options={XMLHttpRequest:!0,eventTarget:!0,requestAnimationFrame:!0,setInterval:!0,setTimeout:!0,...t}}setupOnce(){this._options.setTimeout&&(0,r.hl)(i.m9,"setTimeout",a),this._options.setInterval&&(0,r.hl)(i.m9,"setInterval",a),this._options.requestAnimationFrame&&(0,r.hl)(i.m9,"requestAnimationFrame",u),this._options.XMLHttpRequest&&"XMLHttpRequest"in i.m9&&(0,r.hl)(XMLHttpRequest.prototype,"send",d);const t=this._options.eventTarget;if(t){const n=Array.isArray(t)?t:c;n.forEach(f)}}}function a(t){return function(...n){const e=n[0];return n[0]=(0,i.re)(e,{mechanism:{data:{function:(0,o.$P)(t)},handled:!0,type:"instrument"}}),t.apply(this,n)}}function u(t){return function(n){return t.apply(this,[(0,i.re)(n,{mechanism:{data:{function:"requestAnimationFrame",handler:(0,o.$P)(t)},handled:!0,type:"instrument"}})])}}function d(t){return function(...n){const e=this,c=["onload","onerror","onprogress","onreadystatechange"];return c.forEach((t=>{t in e&&"function"===typeof e[t]&&(0,r.hl)(e,t,(function(n){const e={mechanism:{data:{function:t,handler:(0,o.$P)(n)},handled:!0,type:"instrument"}},c=(0,r.HK)(n);return c&&(e.mechanism.data.handler=(0,o.$P)(c)),(0,i.re)(n,e)}))})),t.apply(this,n)}}function f(t){const n=i.m9,e=n[t]&&n[t].prototype;e&&e.hasOwnProperty&&e.hasOwnProperty("addEventListener")&&((0,r.hl)(e,"addEventListener",(function(n){return function(e,r,c){try{"function"===typeof r.handleEvent&&(r.handleEvent=(0,i.re)(r.handleEvent,{mechanism:{data:{function:"handleEvent",handler:(0,o.$P)(r),target:t},handled:!0,type:"instrument"}}))}catch(s){}return n.apply(this,[e,(0,i.re)(r,{mechanism:{data:{function:"addEventListener",handler:(0,o.$P)(r),target:t},handled:!0,type:"instrument"}}),c])}})),(0,r.hl)(e,"removeEventListener",(function(t){return function(n,e,r){const o=e;try{const e=o&&o.__sentry_wrapped__;e&&t.call(this,n,e,r)}catch(i){}return t.call(this,n,o,r)}})))}s.__initStatic()},619011:function(t,n,e){e.d(n,{Eg:function(){return w},S1:function(){return k},SS:function(){return T},eW:function(){return G},jp:function(){return D},lA:function(){return N},re:function(){return U},xv:function(){return B},yl:function(){return O}});var r=e(242422),o=e(19116),i=e(522967),c=e(367966),s=e(495659),a=e(1984),u=e(130360),d=e(808823),f=e(712343),l=e(196893),p=e(409732),_=e(49680),h=e(986891),m=e(34469),v=e(653692),g=e(890564),y=e(652136),E=e(161634),S=e(869730),b=e(761945),x=e(654025),R=e(768131);const T=[new r.QD,new o.c,new v.p,new g.O,new y.d,new E.iP,new S.I,new b.q];function k(t={}){void 0===t.defaultIntegrations&&(t.defaultIntegrations=T),void 0===t.release&&h.m9.SENTRY_RELEASE&&h.m9.SENTRY_RELEASE.id&&(t.release=h.m9.SENTRY_RELEASE.id),void 0===t.autoSessionTracking&&(t.autoSessionTracking=!0),void 0===t.sendClientReports&&(t.sendClientReports=!0);const n={...t,stackParser:(0,u.Sq)(t.stackParser||m.Dt),integrations:(0,i.m8)(t),transport:t.transport||((0,d.Ak)()?x.f:R.K)};(0,c.M)(_.R,n),t.autoSessionTracking&&$()}function D(t={},n=(0,s.Gd)()){if(!h.m9.document)return void(("undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&f.kg.error("Global document not defined in showReportDialog call"));const{client:e,scope:r}=n.getStackTop(),o=t.dsn||e&&e.getDsn();if(!o)return void(("undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&f.kg.error("DSN not configured for showReportDialog call"));r&&(t.user={...r.getUser(),...t.user}),t.eventId||(t.eventId=n.lastEventId());const i=h.m9.document.createElement("script");i.async=!0,i.src=(0,a.h)(o,t),t.onLoad&&(i.onload=t.onLoad);const c=h.m9.document.head||h.m9.document.body;c?c.appendChild(i):("undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&f.kg.error("Not injecting report dialog. No injection point found in HTML")}function G(){return(0,s.Gd)().lastEventId()}function w(){}function N(t){t()}function O(t){const n=(0,s.Gd)().getClient();return n?n.flush(t):(("undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&f.kg.warn("Cannot flush events. No client defined."),(0,l.WD)(!1))}function B(t){const n=(0,s.Gd)().getClient();return n?n.close(t):(("undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&f.kg.warn("Cannot flush events and disable SDK. No client defined."),(0,l.WD)(!1))}function U(t){return(0,h.re)(t)()}function P(t){t.startSession({ignoreDuration:!0}),t.captureSession()}function $(){if("undefined"===typeof h.m9.document)return void(("undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&f.kg.warn("Session tracking in non-browser environment with @sentry/browser is not supported."));const t=(0,s.Gd)();t.captureSession&&(P(t),(0,p.o)("history",(({from:t,to:n})=>{void 0!==t&&t!==n&&P((0,s.Gd)())})))}},34469:function(t,n,e){e.d(n,{$3:function(){return _},$Q:function(){return g},Dt:function(){return w},HH:function(){return D},NP:function(){return R},R2:function(){return S},d8:function(){return G}});var r=e(130360);const o="?",i=10,c=20,s=30,a=40,u=50;function d(t,n,e,r){const o={filename:t,function:n,in_app:!0};return void 0!==e&&(o.lineno=e),void 0!==r&&(o.colno=r),o}const f=/^\s*at (?:(.*\).*?|.*?) ?\((?:address at )?)?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,l=/\((\S*)(?::(\d+))(?::(\d+))\)/,p=t=>{const n=f.exec(t);if(n){const t=n[2]&&0===n[2].indexOf("eval");if(t){const t=l.exec(n[2]);t&&(n[2]=t[1],n[3]=t[2],n[4]=t[3])}const[e,r]=N(n[1]||o,n[2]);return d(r,e,n[3]?+n[3]:void 0,n[4]?+n[4]:void 0)}},_=[s,p],h=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|safari-extension|safari-web-extension|capacitor)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,m=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i,v=t=>{const n=h.exec(t);if(n){const t=n[3]&&n[3].indexOf(" > eval")>-1;if(t){const t=m.exec(n[3]);t&&(n[1]=n[1]||"eval",n[3]=t[1],n[4]=t[2],n[5]="")}let e=n[3],r=n[1]||o;return[r,e]=N(r,e),d(e,r,n[4]?+n[4]:void 0,n[5]?+n[5]:void 0)}},g=[u,v],y=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,E=t=>{const n=y.exec(t);return n?d(n[2],n[1]||o,+n[3],n[4]?+n[4]:void 0):void 0},S=[a,E],b=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,x=t=>{const n=b.exec(t);return n?d(n[2],n[3]||o,+n[1]):void 0},R=[i,x],T=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\(.*\))? in (.*):\s*$/i,k=t=>{const n=T.exec(t);return n?d(n[5],n[3]||n[4]||o,+n[1],+n[2]):void 0},D=[c,k],G=[_,g,S],w=(0,r.pE)(...G),N=(t,n)=>{const e=-1!==t.indexOf("safari-extension"),r=-1!==t.indexOf("safari-web-extension");return e||r?[-1!==t.indexOf("@")?t.split("@")[0]:o,e?`safari-extension:${n}`:`safari-web-extension:${n}`]:[t,n]}},654025:function(t,n,e){e.d(n,{f:function(){return f}});var r=e(645431),o=e(196893),i=e(808823),c=e(712343),s=e(986891);let a;function u(){if(a)return a;if((0,i.Du)(s.m9.fetch))return a=s.m9.fetch.bind(s.m9);const t=s.m9.document;let n=s.m9.fetch;if(t&&"function"===typeof t.createElement)try{const e=t.createElement("iframe");e.hidden=!0,t.head.appendChild(e);const r=e.contentWindow;r&&r.fetch&&(n=r.fetch),t.head.removeChild(e)}catch(e){("undefined"===typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&c.kg.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ",e)}return a=n.bind(s.m9)}function d(){a=void 0}function f(t,n=u()){function e(e){const r={body:e.body,method:"POST",referrerPolicy:"origin",headers:t.headers,keepalive:e.body.length<=65536,...t.fetchOptions};try{return n(t.url,r).then((t=>({statusCode:t.status,headers:{"x-sentry-rate-limits":t.headers.get("X-Sentry-Rate-Limits"),"retry-after":t.headers.get("Retry-After")}})))}catch(i){return d(),(0,o.$2)(i)}}return(0,r.q)(t,e)}},768131:function(t,n,e){e.d(n,{K:function(){return c}});var r=e(645431),o=e(196893);const i=4;function c(t){function n(n){return new o.cW(((e,r)=>{const o=new XMLHttpRequest;o.onerror=r,o.onreadystatechange=()=>{o.readyState===i&&e({statusCode:o.status,headers:{"x-sentry-rate-limits":o.getResponseHeader("X-Sentry-Rate-Limits"),"retry-after":o.getResponseHeader("Retry-After")}})},o.open("POST",t.url);for(const n in t.headers)Object.prototype.hasOwnProperty.call(t.headers,n)&&o.setRequestHeader(n,t.headers[n]);o.send(n.body)}))}return(0,r.q)(t,n)}}}]);