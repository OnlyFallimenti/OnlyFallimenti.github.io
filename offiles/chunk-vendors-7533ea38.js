"use strict";(self["webpackChunkof_vue"]=self["webpackChunkof_vue"]||[]).push([[75836],{963664:function(e,t,n){n.d(t,{L:function(){return a}});var i=n(633118);function o(){return!0}function s(e,t,n){if(!e||!1===r(e,n))return!1;const o=(0,i.e)(t);if("undefined"!==typeof ShadowRoot&&o instanceof ShadowRoot&&o.host===e.target)return!1;const s=("object"===typeof n.value&&n.value.include||(()=>[]))();return s.push(t),!s.some((t=>t.contains(e.target)))}function r(e,t){const n="object"===typeof t.value&&t.value.closeConditional||o;return n(e)}function c(e,t,n){const i="function"===typeof n.value?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&s(e,t,n)&&setTimeout((()=>{r(e,n)&&i&&i(e)}),0)}function l(e,t){const n=(0,i.e)(e);t(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&t(n)}const a={inserted(e,t,n){const i=n=>c(n,e,t),o=n=>{e._clickOutside.lastMousedownWasOutside=s(n,e,t)};l(e,(e=>{e.addEventListener("click",i,!0),e.addEventListener("mousedown",o,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[n.context._uid]={onClick:i,onMousedown:o}},unbind(e,t,n){e._clickOutside&&(l(e,(t=>{var i;if(!t||!(null===(i=e._clickOutside)||void 0===i?void 0:i[n.context._uid]))return;const{onClick:o,onMousedown:s}=e._clickOutside[n.context._uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",s,!0)})),delete e._clickOutside[n.context._uid])}};t["Z"]=a},177006:function(e,t,n){function i(e,t,n){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const i=t.modifiers||{},s=t.value,{handler:r,options:c}="object"===typeof s?s:{handler:s,options:{}},l=new IntersectionObserver(((s=[],c)=>{var l;const a=null===(l=e._observe)||void 0===l?void 0:l[n.context._uid];if(!a)return;const u=s.some((e=>e.isIntersecting));!r||i.quiet&&!a.init||i.once&&!u&&!a.init||r(s,c,u),u&&i.once?o(e,t,n):a.init=!0}),c);e._observe=Object(e._observe),e._observe[n.context._uid]={init:!1,observer:l},l.observe(e)}function o(e,t,n){var i;const o=null===(i=e._observe)||void 0===i?void 0:i[n.context._uid];o&&(o.observer.unobserve(e),delete e._observe[n.context._uid])}const s={inserted:i,unbind:o};t["Z"]=s},737293:function(e,t,n){function i(e,t,n){const i=t.value,o=t.options||{passive:!0};window.addEventListener("resize",i,o),e._onResize=Object(e._onResize),e._onResize[n.context._uid]={callback:i,options:o},t.modifiers&&t.modifiers.quiet||i()}function o(e,t,n){var i;if(!(null===(i=e._onResize)||void 0===i?void 0:i[n.context._uid]))return;const{callback:o,options:s}=e._onResize[n.context._uid];window.removeEventListener("resize",o,s),delete e._onResize[n.context._uid]}const s={inserted:i,unbind:o};t["Z"]=s},244468:function(e,t,n){n(46411);var i=n(948131);const o=80;function s(e,t){e.style.transform=t,e.style.webkitTransform=t}function r(e){return"TouchEvent"===e.constructor.name}function c(e){return"KeyboardEvent"===e.constructor.name}const l=(e,t,n={})=>{let i=0,o=0;if(!c(e)){const n=t.getBoundingClientRect(),s=r(e)?e.touches[e.touches.length-1]:e;i=s.clientX-n.left,o=s.clientY-n.top}let s=0,l=.3;t._ripple&&t._ripple.circle?(l=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((i-s)**2+(o-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const a=(t.clientWidth-2*s)/2+"px",u=(t.clientHeight-2*s)/2+"px",d=n.center?a:i-s+"px",p=n.center?u:o-s+"px";return{radius:s,scale:l,x:d,y:p,centerX:a,centerY:u}},a={show(e,t,n={}){if(!t._ripple||!t._ripple.enabled)return;const i=document.createElement("span"),o=document.createElement("span");i.appendChild(o),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:r,scale:c,x:a,y:u,centerX:d,centerY:p}=l(e,t,n),v=2*r+"px";o.className="v-ripple__animation",o.style.width=v,o.style.height=v,t.appendChild(i);const m=window.getComputedStyle(t);m&&"static"===m.position&&(t.style.position="relative",t.dataset.previousPosition="static"),o.classList.add("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--visible"),s(o,`translate(${a}, ${u}) scale3d(${c},${c},${c})`),o.dataset.activated=String(performance.now()),setTimeout((()=>{o.classList.remove("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--in"),s(o,`translate(${d}, ${p}) scale3d(1,1,1)`)}),0)},hide(e){if(!e||!e._ripple||!e._ripple.enabled)return;const t=e.getElementsByClassName("v-ripple__animation");if(0===t.length)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),o=Math.max(250-i,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{var t;const i=e.getElementsByClassName("v-ripple__animation");1===i.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),(null===(t=n.parentNode)||void 0===t?void 0:t.parentNode)===e&&e.removeChild(n.parentNode)}),300)}),o)}};function u(e){return"undefined"===typeof e||!!e}function d(e){const t={},n=e.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!e.rippleStop){if(e.rippleStop=!0,r(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||c(e),n._ripple.class&&(t.class=n._ripple.class),r(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{a.show(e,n,t)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),o)}else a.show(e,n,t)}}function p(e){const t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=setTimeout((()=>{p(e)})));window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),a.hide(t)}}function v(e){const t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let m=!1;function _(e){m||e.keyCode!==i.Do.enter&&e.keyCode!==i.Do.space||(m=!0,d(e))}function f(e){m=!1,p(e)}function h(e){!0===m&&(m=!1,p(e))}function w(e,t,n){const i=u(t.value);i||a.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=i;const o=t.value||{};o.center&&(e._ripple.centered=!0),o.class&&(e._ripple.class=t.value.class),o.circle&&(e._ripple.circle=o.circle),i&&!n?(e.addEventListener("touchstart",d,{passive:!0}),e.addEventListener("touchend",p,{passive:!0}),e.addEventListener("touchmove",v,{passive:!0}),e.addEventListener("touchcancel",p),e.addEventListener("mousedown",d),e.addEventListener("mouseup",p),e.addEventListener("mouseleave",p),e.addEventListener("keydown",_),e.addEventListener("keyup",f),e.addEventListener("blur",h),e.addEventListener("dragstart",p,{passive:!0})):!i&&n&&b(e)}function b(e){e.removeEventListener("mousedown",d),e.removeEventListener("touchstart",d),e.removeEventListener("touchend",p),e.removeEventListener("touchmove",v),e.removeEventListener("touchcancel",p),e.removeEventListener("mouseup",p),e.removeEventListener("mouseleave",p),e.removeEventListener("keydown",_),e.removeEventListener("keyup",f),e.removeEventListener("dragstart",p),e.removeEventListener("blur",h)}function L(e,t,n){w(e,t,!1)}function E(e){delete e._ripple,b(e)}function T(e,t){if(t.value===t.oldValue)return;const n=u(t.oldValue);w(e,t,n)}const y={bind:L,unbind:E,update:T};t["Z"]=y}}]);