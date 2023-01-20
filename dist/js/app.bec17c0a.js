(function(){"use strict";var e={6409:function(e,n,t){var r=t(9242),o=t(1020),i=t(6423),a=t(4311),c=t(6216),u=t(5708),s=t(3990),d=t(579),f=t(2389),l=t(3396);function p(e,n){const t=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(t)}var h=t(89);const m={},b=(0,h.Z)(m,[["render",p]]);var g=b,v=t(2483);const y=[{path:"/",name:"userboard",component:()=>Promise.all([t.e(746),t.e(883)]).then(t.bind(t,8883)),children:[{path:"home",component:()=>t.e(181).then(t.bind(t,65))},{path:"products",component:()=>Promise.all([t.e(746),t.e(631)]).then(t.bind(t,3631))},{path:"cart",component:()=>t.e(486).then(t.bind(t,486))},{path:"favorite",component:()=>t.e(251).then(t.bind(t,2251))},{path:"product/:product",component:()=>t.e(550).then(t.bind(t,6550))},{path:"checkout/:orderId",component:()=>t.e(825).then(t.bind(t,3825))}]},{path:"/login",component:()=>t.e(637).then(t.bind(t,5637))},{path:"/dashboard",component:()=>Promise.all([t.e(746),t.e(809)]).then(t.bind(t,2809)),children:[{path:"productList",component:()=>Promise.all([t.e(746),t.e(224),t.e(597)]).then(t.bind(t,7597))},{path:"orders",component:()=>Promise.all([t.e(746),t.e(224),t.e(554)]).then(t.bind(t,6554))},{path:"coupons",component:()=>Promise.all([t.e(746),t.e(224),t.e(258)]).then(t.bind(t,8258))}]}],j=(0,v.p7)({history:(0,v.r5)(),linkActiveClass:"active",routes:y});var w=j;function O(e){const n=parseInt(e,10);return`${n.toFixed(0).replace(/./g,((e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function k(e){const n=new Date(1e3*e);return n.toLocaleDateString()}var C=t(5820);function P(e,n="更新"){if(e.data.success)C.Z.emit("push-message",{style:"success",title:`${n}成功`});else{const t="string"===typeof e.data.message?[e.data.message]:e.data.message;C.Z.emit("push-message",{style:"danger",title:`${n}失敗`,content:t.join("、")})}}const E=(0,o.WB)(),S=(0,r.ri)(g);S.config.globalProperties.$filters={currency:O,date:k},(0,u.aH)("required",s.C1),(0,u.aH)("email",s.Do),(0,u.aH)("min",s.VV),(0,u.jQ)({generateMessage:(0,d.NC)({zh_TW:f}),validateOnInput:!0}),(0,d.i_)("zh_TW"),S.config.globalProperties.$httpMessageState=P,S.use(i.Z,a.Z),S.use(w),S.use(E),S.component("Loading",c.Z),S.component("Form",u.l0),S.component("Field",u.gN),S.component("ErrorMessage",u.Bc),S.mount("#app")},5820:function(e,n,t){var r=t(1373);const o=(0,r.Z)();n["Z"]=o}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(d=0;d<e.length;d++){r=e[d][0],o=e[d][1],i=e[d][2];for(var c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(d--,1);var s=o();void 0!==s&&(n=s)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{181:"ac1845c2",224:"4a0bb23a",251:"e8c84ef2",258:"18f5a4c0",486:"93d0668a",550:"b0be287d",554:"aeea00f1",597:"9e87727b",631:"33640c1a",637:"9320b43a",746:"f05c0ce3",809:"31649990",825:"8ed534b6",883:"ad5c1ddd"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{181:"a9bad904",251:"08b008be",631:"f3c165d1",883:"0e480cd4"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="vue-project:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var c,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var f=s[d];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+i){c=f;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=r),e[r]=[o];var l=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/vue-final/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,i.parentNode.removeChild(i),o(u)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),c=t.p+a;if(n(a,c))return o();e(r,c,null,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={181:1,251:1,631:1,883:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),c=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],c=r[1],u=r[2],s=0;if(a.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(u)var d=u(t)}for(n&&n(r);s<a.length;s++)i=a[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},r=self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6409)}));r=t.O(r)})();
//# sourceMappingURL=app.bec17c0a.js.map