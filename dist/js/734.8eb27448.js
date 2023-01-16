(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[734],{8803:function(e,t,s){
/*!
  * Bootstrap toast.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n(s(1437),s(4130),s(1884),s(9069))})(0,(function(e,t,s,n){"use strict";const i=e=>e&&"object"===typeof e&&"default"in e?e:{default:e},a=i(t),o=i(s),r="toast",u="bs.toast",c=`.${u}`,l=`mouseover${c}`,h=`mouseout${c}`,d=`focusin${c}`,m=`focusout${c}`,_=`hide${c}`,f=`hidden${c}`,g=`show${c}`,p=`shown${c}`,v="fade",b="hide",w="show",y="showing",k={animation:"boolean",autohide:"boolean",delay:"number"},T={animation:!0,autohide:!0,delay:5e3};class I extends o.default{constructor(e,t){super(e,t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return T}static get DefaultType(){return k}static get NAME(){return r}show(){const t=a.default.trigger(this._element,g);if(t.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(v);const s=()=>{this._element.classList.remove(y),a.default.trigger(this._element,p),this._maybeScheduleHide()};this._element.classList.remove(b),e.reflow(this._element),this._element.classList.add(w,y),this._queueCallback(s,this._element,this._config.animation)}hide(){if(!this.isShown())return;const e=a.default.trigger(this._element,_);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(b),this._element.classList.remove(y,w),a.default.trigger(this._element,f)};this._element.classList.add(y),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(w),super.dispose()}isShown(){return this._element.classList.contains(w)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){a.default.on(this._element,l,(e=>this._onInteraction(e,!0))),a.default.on(this._element,h,(e=>this._onInteraction(e,!1))),a.default.on(this._element,d,(e=>this._onInteraction(e,!0))),a.default.on(this._element,m,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=I.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}return n.enableDismissTrigger(I),e.defineJQueryPlugin(I),I}))},3676:function(e,t,s){"use strict";s.d(t,{Z:function(){return y}});var n=s(3396);const i={class:"toast-container position-absolute pe-3 top-0 end-0"};function a(e,t,s,a,o,r){const u=(0,n.up)("Toast");return(0,n.wg)(),(0,n.iD)("div",i,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.messages,((e,t)=>((0,n.wg)(),(0,n.j4)(u,{key:t,msg:e},null,8,["msg"])))),128))])}s(7658);var o=s(7139);const r={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},u={class:"toast-header"},c={class:"me-auto"},l=(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),h={key:0,class:"toast-body"};function d(e,t,s,i,a,d){return(0,n.wg)(),(0,n.iD)("div",r,[(0,n._)("div",u,[(0,n._)("span",{class:(0,o.C_)([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),(0,n._)("strong",c,(0,o.zw)(s.msg.title),1),l]),s.msg.content?((0,n.wg)(),(0,n.iD)("div",h,(0,o.zw)(s.msg.content),1)):(0,n.kq)("",!0)],512)}var m=s(8803),_=s.n(m),f={name:"Toast",props:["msg"],mounted(){const e=new(_())(this.$refs.toast,{delay:4e3});e.show()}},g=s(89);const p=(0,g.Z)(f,[["render",d]]);var v=p,b={components:{Toast:v},data(){return{messages:[]}},inject:["emitter"],mounted(){this.emitter.on("push-message",(e=>{const{style:t="success",title:s,content:n}=e;this.messages.push({style:t,title:s,content:n})}))}};const w=(0,g.Z)(b,[["render",a]]);var y=w},7734:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var n=s(3396);const i={class:"navbar navbar-expand-lg navbar-dark bg-dark"},a={class:"container-fluid"},o={class:"container-fluid mt-3 position-relative"};function r(e,t,s,r,u,c){const l=(0,n.up)("router-link"),h=(0,n.up)("ToastMessages"),d=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("nav",i,[(0,n._)("div",a,[(0,n.Wm)(l,{class:"navbar-brand",to:"/user/cart"},{default:(0,n.w5)((()=>[(0,n.Uk)("用戶端範例")])),_:1})])]),(0,n._)("div",o,[(0,n.Wm)(h),(0,n.Wm)(d)])],64)}var u=s(5820),c=s(3676),l={components:{ToastMessages:c.Z},provide(){return{emitter:u.Z}},created(){}},h=s(89);const d=(0,h.Z)(l,[["render",r]]);var m=d}}]);
//# sourceMappingURL=734.8eb27448.js.map