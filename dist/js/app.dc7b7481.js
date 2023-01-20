(function(){"use strict";var e={6409:function(e,t,n){var r=n(9242),o=n(1020),i=n(6423),a=n(4311),c=n(6216),u=n(5708),s=n(3990),d=n(579),f=n(2389),l=n(3396);function p(e,t){const n=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(n)}var h=n(89);const m={},b=(0,h.Z)(m,[["render",p]]);var g=b,v=n(2483);const y=[{path:"/",name:"userboard",component:()=>Promise.all([n.e(746),n.e(883)]).then(n.bind(n,8883)),children:[{path:"home",component:()=>n.e(181).then(n.bind(n,65))},{path:"products",component:()=>Promise.all([n.e(746),n.e(631)]).then(n.bind(n,3631))},{path:"cart",component:()=>n.e(486).then(n.bind(n,486))},{path:"favorite",component:()=>n.e(251).then(n.bind(n,2251))},{path:"product/:product",component:()=>n.e(550).then(n.bind(n,6550))},{path:"checkout/:orderId",component:()=>n.e(825).then(n.bind(n,3825))}]},{path:"/login",component:()=>n.e(637).then(n.bind(n,5637))},{path:"/dashboard",component:()=>Promise.all([n.e(746),n.e(809)]).then(n.bind(n,2809)),children:[{path:"productList",component:()=>Promise.all([n.e(746),n.e(224),n.e(597)]).then(n.bind(n,7597))},{path:"orders",component:()=>Promise.all([n.e(746),n.e(224),n.e(554)]).then(n.bind(n,6554))},{path:"coupons",component:()=>Promise.all([n.e(746),n.e(224),n.e(258)]).then(n.bind(n,8258))}]}],j=(0,v.p7)({history:(0,v.r5)(),linkActiveClass:"active",routes:y});var w=j;function O(e){const t=parseInt(e,10);return`${t.toFixed(0).replace(/./g,((e,t,n)=>t&&"."!==e&&(n.length-t)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function k(e){const t=new Date(1e3*e);return t.toLocaleDateString()}var C=n(5820);function P(e,t="更新"){if(e.data.success)C.Z.emit("push-message",{style:"success",title:`${t}成功`});else{const n="string"===typeof e.data.message?[e.data.message]:e.data.message;C.Z.emit("push-message",{style:"danger",title:`${t}失敗`,content:n.join("、")})}}const E=(0,o.WB)(),S=(0,r.ri)(g);S.config.globalProperties.$filters={currency:O,date:k},(0,u.aH)("required",s.C1),(0,u.aH)("email",s.Do),(0,u.aH)("min",s.VV),(0,u.jQ)({generateMessage:(0,d.NC)({zh_TW:f}),validateOnInput:!0}),(0,d.i_)("zh_TW"),S.config.globalProperties.$httpMessageState=P,S.use(i.Z,a.Z),S.use(w),S.use(E),S.component("Loading",c.Z),S.component("Form",u.l0),S.component("Field",u.gN),S.component("ErrorMessage",u.Bc),S.mount("#app")},5820:function(e,t,n){var r=n(1373);const o=(0,r.Z)();t["Z"]=o}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],i=e[d][2];for(var c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(d--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{181:"ac1845c2",224:"4a0bb23a",251:"e8c84ef2",258:"18f5a4c0",486:"93d0668a",550:"b0be287d",554:"aeea00f1",597:"9e87727b",631:"33640c1a",637:"9320b43a",746:"f05c0ce3",809:"31649990",825:"8ed534b6",883:"ad5c1ddd"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{181:"a9bad904",251:"08b008be",631:"f3c165d1",883:"0e480cd4"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-project:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var c,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var f=s[d];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){c=f;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=r),e[r]=[o];var l=function(t,n){c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/vue-final/dist/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,i.parentNode.removeChild(i),o(u)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),c=n.p+a;if(t(a,c))return o();e(r,c,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={181:1,251:1,631:1,883:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),c=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],c=r[1],u=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var d=u(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},r=self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(6409)}));r=n.O(r)})();
//# sourceMappingURL=app.dc7b7481.js.map