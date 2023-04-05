"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[482],{8073:function(e,o,t){t.d(o,{Z:function(){return v}});var a=t(3396),n=t(7139),s=t(9242);const l={"aria-label":"Page navigation example"},i={class:"pagination justify-content-center"},p={class:"page-item"},d=(0,a._)("span",{"aria-hidden":"true"},"«",-1),u=[d],c=["onClick"],r={class:"page-item"},h=(0,a._)("span",{"aria-hidden":"true"},"»",-1),m=[h];function _(e,o,t,d,h,_){return(0,a.wg)(),(0,a.iD)("nav",l,[(0,a._)("ul",i,[(0,a._)("li",p,[(0,a._)("a",{class:(0,n.C_)(["page-style",{disabled:!1===t.pages.has_pre}]),href:"#","aria-label":"Previous",onClick:o[0]||(o[0]=(0,s.iM)((e=>_.updatePage(t.pages.current_page-1)),["prevent"]))},u,2)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.pages.total_pages,(e=>((0,a.wg)(),(0,a.iD)("li",{class:"page-item",key:e},[(0,a._)("a",{class:(0,n.C_)(["page-style",{active:e===t.pages.current_page}]),href:"#",onClick:(0,s.iM)((o=>_.updatePage(e)),["prevent"])},(0,n.zw)(e),11,c)])))),128)),(0,a._)("li",r,[(0,a._)("a",{class:(0,n.C_)(["page-style",{disabled:!1===t.pages.has_next}]),href:"#","aria-label":"Next",onClick:o[1]||(o[1]=(0,s.iM)((e=>_.updatePage(t.pages.current_page+1)),["prevent"]))},m,2)])])])}var g={props:["pages"],methods:{updatePage(e){this.$emit("emit-pages",e)}}},b=t(89);const C=(0,b.Z)(g,[["render",_]]);var v=C},2841:function(e,o,t){t.r(o),t.d(o,{default:function(){return F}});var a=t(3396),n=t(7139);const s=(0,a._)("div",{class:"loadingio-spinner-double-ring-juf8237g2sc"},[(0,a._)("div",{class:"ldio-1prs6fceeog"},[(0,a._)("div"),(0,a._)("div"),(0,a._)("div",null,[(0,a._)("div")]),(0,a._)("div",null,[(0,a._)("div")])])],-1),l={class:"container-md back"},i={class:"text-end"},p={class:"coupons mb-4"},d={class:"table table-hover mt-4"},u=(0,a._)("thead",{class:"bg-brown-deep text-white"},[(0,a._)("tr",null,[(0,a._)("th",{class:"py-3"},"名稱"),(0,a._)("th",{class:"py-3"},"折扣百分比"),(0,a._)("th",{class:"py-3"},"到期日"),(0,a._)("th",{class:"py-3"},"是否啟用"),(0,a._)("th",{class:"py-3"},"編輯")])],-1),c={key:0,class:"text-success"},r={key:1,class:"text-muted"},h={class:"btn-group"},m=["onClick"],_=["onClick"];function g(e,o,t,g,b,C){const v=(0,a.up)("Loading"),f=(0,a.up)("couponModal"),w=(0,a.up)("DelModal"),y=(0,a.up)("Pagination");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(v,{active:b.isLoading},{default:(0,a.w5)((()=>[s])),_:1},8,["active"]),(0,a._)("main",l,[(0,a._)("div",i,[(0,a._)("button",{class:"btn btn-yellow text-white",onClick:o[0]||(o[0]=e=>C.openCouponModal(!0))}," 建立新的優惠券 ")]),(0,a._)("section",p,[(0,a._)("table",d,[u,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(b.coupons,((o,t)=>((0,a.wg)(),(0,a.iD)("tr",{key:t,style:{"border-bottom":"1px solid #000"}},[(0,a._)("td",null,(0,n.zw)(o.title),1),(0,a._)("td",null,(0,n.zw)(o.percent)+"%",1),(0,a._)("td",null,(0,n.zw)(e.$filters.date(o.due_date)),1),(0,a._)("td",null,[1===o.is_enabled?((0,a.wg)(),(0,a.iD)("span",c,"啟用")):((0,a.wg)(),(0,a.iD)("span",r,"未起用"))]),(0,a._)("td",null,[(0,a._)("div",h,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>C.openCouponModal(!1,o)}," 編輯 ",8,m),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>C.openDelCouponModal(o)}," 刪除 ",8,_)])])])))),128))])])]),(0,a.Wm)(f,{coupon:b.tempCoupon,ref:"couponModal",onUpdateCoupon:C.updateCoupon},null,8,["coupon","onUpdateCoupon"]),(0,a.Wm)(w,{item:b.tempCoupon,ref:"delModal",onDelItem:C.delCoupon},null,8,["item","onDelItem"]),(0,a.Wm)(y,{pages:b.pagination,onEmitPages:C.getCoupons},null,8,["pages","onEmitPages"])])],64)}var b=t(9242);const C={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},v={class:"modal-dialog",role:"document"},f={class:"modal-content"},w=(0,a._)("div",{class:"modal-header"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},"新增優惠券"),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},M={class:"mb-3"},k=(0,a._)("label",{for:"title"},"標題",-1),x={class:"mb-3"},D=(0,a._)("label",{for:"coupon_code"},"優惠碼",-1),P={class:"mb-3"},$=(0,a._)("label",{for:"due_date"},"到期日",-1),L={class:"mb-3"},Z=(0,a._)("label",{for:"price"},"折扣百分比",-1),U={class:"mb-3"},j={class:"form-check"},N=(0,a._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),V={class:"modal-footer"},q=(0,a._)("button",{type:"button",class:"btn btn-yellow-deep text-white","data-bs-dismiss":"modal"}," Close ",-1);function z(e,o,t,n,s,l){return(0,a.wg)(),(0,a.iD)("div",C,[(0,a._)("div",v,[(0,a._)("div",f,[w,(0,a._)("div",y,[(0,a._)("div",M,[k,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":o[0]||(o[0]=e=>s.tempCoupon.title=e),placeholder:"請輸入標題"},null,512),[[b.nr,s.tempCoupon.title]])]),(0,a._)("div",x,[D,(0,a.wy)((0,a._)("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":o[1]||(o[1]=e=>s.tempCoupon.code=e),placeholder:"請輸入優惠碼"},null,512),[[b.nr,s.tempCoupon.code]])]),(0,a._)("div",P,[$,(0,a.wy)((0,a._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":o[2]||(o[2]=e=>s.due_date=e)},null,512),[[b.nr,s.due_date]])]),(0,a._)("div",L,[Z,(0,a.wy)((0,a._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":o[3]||(o[3]=e=>s.tempCoupon.percent=e),placeholder:"請輸入折扣百分比"},null,512),[[b.nr,s.tempCoupon.percent,void 0,{number:!0}]])]),(0,a._)("div",U,[(0,a._)("div",j,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":o[4]||(o[4]=e=>s.tempCoupon.is_enabled=e),id:"is_enabled"},null,512),[[b.e8,s.tempCoupon.is_enabled]]),N])])]),(0,a._)("div",V,[q,(0,a._)("button",{type:"button",class:"btn btn-yellow text-white",onClick:o[5]||(o[5]=o=>e.$emit("update-coupon",s.tempCoupon))}," 更新優惠券 ")])])])],512)}var W=t(1339),H={name:"couponModal",props:{coupon:{}},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon,console.log(this.tempCoupon.due_date);const e=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=e},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[W.Z]},I=t(89);const Y=(0,I.Z)(H,[["render",z]]);var E=Y,K=t(6823),O=t(8073),S=t(1020),T=t(6294),A={components:{CouponModal:E,DelModal:K.Z,Pagination:O.Z},props:{config:Object},data(){return{coupons:{},tempCoupon:{},isLoading:!1,isNew:!1,pagination:{},currentPage:1}},methods:{...(0,S.nv)(T.Z,["pushMessage"]),openCouponModal(e,o){this.isNew=e,this.isNew?this.tempCoupon={due_date:(new Date).getTime()/1e3}:this.tempCoupon={...o},this.$refs.couponModal.showModal()},openDelCouponModal(e){this.tempCoupon={...e};const o=this.$refs.delModal;o.showModal()},getCoupons(e=1){this.currentPage=e,this.isLoading=!0;const o=`https://vue3-course-api.hexschool.io/api/qing-api/admin/coupons?page=${e}`;this.$http.get(o,this.tempProduct).then((e=>{this.coupons=e.data.coupons,this.pagination=e.data.pagination,this.isLoading=!1,console.log(e)}))},updateCoupon(e){let o,t;this.isNew?(t="https://vue3-course-api.hexschool.io/api/qing-api/admin/coupon",o="post"):(t=`https://vue3-course-api.hexschool.io/api/qing-api/admin/coupon/${e.id}`,o="put"),this.$http[o](t,{data:e}).then((e=>{console.log(e),this.pushMessage(e.data.success,{title:"編輯"}),this.getCoupons(),this.$refs.couponModal.hideModal()}))},delCoupon(){const e=`https://vue3-course-api.hexschool.io/api/qing-api/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.$http.delete(e).then((e=>{console.log(e,this.tempCoupon),this.pushMessage(e.data.success,{title:"刪除"});const o=this.$refs.delModal;o.hideModal(),this.getCoupons()}))}},created(){this.getCoupons()}};const B=(0,I.Z)(A,[["render",g]]);var F=B}}]);
//# sourceMappingURL=482.febbe69f.js.map