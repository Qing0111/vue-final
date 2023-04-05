"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[931],{8073:function(e,t,l){l.d(t,{Z:function(){return y}});var a=l(3396),s=l(7139),d=l(9242);const i={"aria-label":"Page navigation example"},r={class:"pagination justify-content-center"},n={class:"page-item"},o=(0,a._)("span",{"aria-hidden":"true"},"«",-1),u=[o],p=["onClick"],c={class:"page-item"},_=(0,a._)("span",{"aria-hidden":"true"},"»",-1),h=[_];function g(e,t,l,o,_,g){return(0,a.wg)(),(0,a.iD)("nav",i,[(0,a._)("ul",r,[(0,a._)("li",n,[(0,a._)("a",{class:(0,s.C_)(["page-style",{disabled:!1===l.pages.has_pre}]),href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,d.iM)((e=>g.updatePage(l.pages.current_page-1)),["prevent"]))},u,2)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pages.total_pages,(e=>((0,a.wg)(),(0,a.iD)("li",{class:"page-item",key:e},[(0,a._)("a",{class:(0,s.C_)(["page-style",{active:e===l.pages.current_page}]),href:"#",onClick:(0,d.iM)((t=>g.updatePage(e)),["prevent"])},(0,s.zw)(e),11,p)])))),128)),(0,a._)("li",c,[(0,a._)("a",{class:(0,s.C_)(["page-style",{disabled:!1===l.pages.has_next}]),href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,d.iM)((e=>g.updatePage(l.pages.current_page+1)),["prevent"]))},h,2)])])])}var m={props:["pages"],methods:{updatePage(e){this.$emit("emit-pages",e)}}},b=l(89);const w=(0,b.Z)(m,[["render",g]]);var y=w},9881:function(e,t,l){l.r(t),l.d(t,{default:function(){return _e}});var a=l(3396),s=l(7139),d=l(9242);const i=(0,a._)("div",{class:"loadingio-spinner-double-ring-juf8237g2sc"},[(0,a._)("div",{class:"ldio-1prs6fceeog"},[(0,a._)("div"),(0,a._)("div"),(0,a._)("div",null,[(0,a._)("div")]),(0,a._)("div",null,[(0,a._)("div")])])],-1),r={class:"container-md back"},n={class:"order mb-4"},o={class:"table table-hover"},u=(0,a._)("thead",{class:"table-brown-deep"},[(0,a._)("tr",null,[(0,a._)("th",{class:"py-3"},"購買時間"),(0,a._)("th",{class:"py-3"},"Email"),(0,a._)("th",{class:"py-3"},"購買款項"),(0,a._)("th",{class:"py-3"},"應付金額"),(0,a._)("th",{class:"py-3"},"是否付款"),(0,a._)("th",{class:"py-3"},"編輯")])],-1),p=["textContent"],c={class:"list-unstyled"},_={class:"text-right"},h={class:"form-check form-switch"},g=["id","onUpdate:modelValue","onChange"],m=["for"],b={key:0},w={key:1},y={class:"btn-group"},v=["onClick"],f=["onClick"];function O(e,t,l,O,k,M){const D=(0,a.up)("Loading"),x=(0,a.up)("OrderModal"),C=(0,a.up)("DelModal"),P=(0,a.up)("Pagination");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(D,{active:k.isLoading},{default:(0,a.w5)((()=>[i])),_:1},8,["active"]),(0,a._)("main",r,[(0,a._)("section",n,[(0,a._)("table",o,[u,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(k.orders,((t,l)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:l},[k.orders.length?((0,a.wg)(),(0,a.iD)("tr",{key:0,class:(0,s.C_)({"text-secondary":!t.is_paid}),style:{"border-bottom":"1px solid #000"}},[(0,a._)("td",null,(0,s.zw)(e.$filters.date(t.create_at)),1),(0,a._)("td",null,[t.user?((0,a.wg)(),(0,a.iD)("span",{key:0,textContent:(0,s.zw)(t.user.email)},null,8,p)):(0,a.kq)("",!0)]),(0,a._)("td",null,[(0,a._)("ul",c,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.products,((e,t)=>((0,a.wg)(),(0,a.iD)("li",{key:t},(0,s.zw)(e.product.title)+" 數量："+(0,s.zw)(e.qty)+" "+(0,s.zw)(e.product.unit),1)))),128))])]),(0,a._)("td",_,(0,s.zw)(t.total),1),(0,a._)("td",null,[(0,a._)("div",h,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${t.id}`,"onUpdate:modelValue":e=>t.is_paid=e,onChange:e=>M.updatePaid(t)},null,40,g),[[d.e8,t.is_paid]]),(0,a._)("label",{class:"form-check-label",for:`paidSwitch${t.id}`},[t.is_paid?((0,a.wg)(),(0,a.iD)("span",b,"已付款")):((0,a.wg)(),(0,a.iD)("span",w,"未付款"))],8,m)])]),(0,a._)("td",null,[(0,a._)("div",y,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>M.openModal(!1,t)}," 檢視 ",8,v),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>M.openDelOrderModal(t)}," 刪除 ",8,f)])])],2)):(0,a.kq)("",!0)],64)))),128))])])]),(0,a.Wm)(x,{order:k.tempOrder,ref:"orderModal",onUpdateOrder:M.updatePaid},null,8,["order","onUpdateOrder"]),(0,a.Wm)(C,{item:k.tempOrder,ref:"delModal",onDelItem:M.delOrder},null,8,["item","onDelItem"]),(0,a.Wm)(P,{pages:k.pagination,onEmitPages:M.getOrders},null,8,["pages","onEmitPages"])])],64)}const k={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},M={class:"modal-dialog modal-xl",role:"document"},D={class:"modal-content border-0"},x=(0,a._)("div",{class:"modal-header"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a._)("span",null,"訂單細節")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),C={class:"modal-body"},P={class:"row"},z={class:"col-md-4"},$=(0,a._)("h3",null,"用戶資料",-1),q={class:"table"},L={key:0},Z=(0,a._)("th",{style:{width:"100px"}},"姓名",-1),j=(0,a._)("th",null,"Email",-1),H=(0,a._)("th",null,"電話",-1),Y=(0,a._)("th",null,"地址",-1),E={class:"col-md-8"},K=(0,a._)("h3",null,"訂單細節",-1),U={class:"table"},W=(0,a._)("th",{style:{width:"100px"}},"訂單編號",-1),N=(0,a._)("th",null,"下單時間",-1),I=(0,a._)("th",null,"付款時間",-1),S={key:0},V={key:1},A=(0,a._)("th",null,"付款狀態",-1),B={key:0,class:"text-success"},F={key:1,class:"text-muted"},G=(0,a._)("th",null,"總金額",-1),J=(0,a._)("h3",null,"選購商品",-1),Q={class:"table"},R=(0,a._)("thead",null,[(0,a._)("tr")],-1),T={class:"text-end"},X={class:"modal-footer"},ee=(0,a._)("button",{type:"button",class:"btn btn-yellow-deep text-white","data-bs-dismiss":"modal"}," 取消 ",-1);function te(e,t,l,d,i,r){return(0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("div",M,[(0,a._)("div",D,[x,(0,a._)("div",C,[(0,a._)("div",P,[(0,a._)("div",z,[$,(0,a._)("table",q,[i.tempOrder.user?((0,a.wg)(),(0,a.iD)("tbody",L,[(0,a._)("tr",null,[Z,(0,a._)("td",null,(0,s.zw)(i.tempOrder.user.name),1)]),(0,a._)("tr",null,[j,(0,a._)("td",null,(0,s.zw)(i.tempOrder.user.email),1)]),(0,a._)("tr",null,[H,(0,a._)("td",null,(0,s.zw)(i.tempOrder.user.tel),1)]),(0,a._)("tr",null,[Y,(0,a._)("td",null,(0,s.zw)(i.tempOrder.user.address),1)])])):(0,a.kq)("",!0)])]),(0,a._)("div",E,[K,(0,a._)("table",U,[(0,a._)("tbody",null,[(0,a._)("tr",null,[W,(0,a._)("td",null,(0,s.zw)(i.tempOrder.id),1)]),(0,a._)("tr",null,[N,(0,a._)("td",null,(0,s.zw)(e.$filters.date(i.tempOrder.create_at)),1)]),(0,a._)("tr",null,[I,(0,a._)("td",null,[i.tempOrder.paid_date?((0,a.wg)(),(0,a.iD)("span",S,(0,s.zw)(e.$filters.date(i.tempOrder.paid_date)),1)):((0,a.wg)(),(0,a.iD)("span",V,"時間不正確"))])]),(0,a._)("tr",null,[A,(0,a._)("td",null,[i.tempOrder.is_paid?((0,a.wg)(),(0,a.iD)("strong",B,"已付款")):((0,a.wg)(),(0,a.iD)("span",F,"尚未付款"))])]),(0,a._)("tr",null,[G,(0,a._)("td",null,(0,s.zw)(e.$filters.currency(i.tempOrder.total)),1)])])]),J,(0,a._)("table",Q,[R,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.tempOrder.products,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("th",null,(0,s.zw)(t.product.title),1),(0,a._)("td",null,(0,s.zw)(t.qty)+" / "+(0,s.zw)(t.product.unit),1),(0,a._)("td",T,(0,s.zw)(e.$filters.currency(t.final_total)),1)])))),128))])])])])]),(0,a._)("div",X,[ee,(0,a._)("button",{type:"button",class:"btn btn-yellow text-white",onClick:t[0]||(t[0]=t=>e.$emit("update-order",i.tempOrder))}," 確認 ")])])])],512)}var le=l(1339),ae={name:"orderModal",props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},mixins:[le.Z],inject:["emitter"],watch:{order(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}}},se=l(89);const de=(0,se.Z)(ae,[["render",te]]);var ie=de,re=l(6823),ne=l(8073),oe=l(1020),ue=l(6294),pe={data(){return{orders:{},isNew:!1,isLoading:!1,pagination:{},tempOrder:{},currentPage:1}},components:{Pagination:ne.Z,DelModal:re.Z,OrderModal:ie},methods:{...(0,oe.nv)(ue.Z,["pushMessage"]),getOrders(e=1){this.currentPage=e;const t=`https://vue3-course-api.hexschool.io/api/qing-api/admin/orders?page=${e}`;this.isLoading=!0,this.$http.get(t,this.tempProduct).then((e=>{this.orders=e.data.orders,this.pagination=e.data.pagination,this.isLoading=!1,console.log(e)}))},openModal(e,t){this.tempOrder={...t},this.isNew=!1,this.$refs.orderModal.showModal()},openDelOrderModal(e){this.tempOrder={...e},this.$refs.delModal.showModal()},updatePaid(e){const t=`https://vue3-course-api.hexschool.io/api/qing-api/admin/order/${e.id}`,l={is_paid:e.is_paid};this.$http.put(t,{data:l}).then((e=>{this.getOrders(this.currentPage),this.$refs.orderModal.hideModal(),this.pushMessage(e.data.success,{title:"編輯"})}))},delOrder(){const e=`https://vue3-course-api.hexschool.io/api/qing-api/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(e).then((e=>{console.log(e),this.$refs.delModal.hideModal(),this.pushMessage(e.data.success,{title:"刪除"}),this.getOrders(this.currentPage)}))}},created(){this.getOrders()}};const ce=(0,se.Z)(pe,[["render",O]]);var _e=ce}}]);
//# sourceMappingURL=931.d9ea52d5.js.map