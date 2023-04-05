"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[579],{4677:function(e,a,t){var s=t(4311),l=t(1020),r=t(6294);const o=(0,r.Z)();a["Z"]=(0,l.Q_)("cartStore",{state:()=>({cart:[]}),actions:{addToCart(e,a=1){o.cartLoading=e;const t="https://vue3-course-api.hexschool.io/api/qing-api/cart",l={product_id:e,qty:a};s.Z.post(t,{data:l}).then((e=>{o.cartLoading="",o.pushMessage(e.data.success,{title:"加入購物車"}),this.getCart()}))},getCart(){const e="https://vue3-course-api.hexschool.io/api/qing-api/cart";o.isLoading=!0,s.Z.get(e).then((e=>{this.cart=e.data.data,o.isLoading=!1}))},updateCart(e,a){console.log(e);const t=`https://vue3-course-api.hexschool.io/api/qing-api/cart/${e.id}`;o.isLoading=!0,o.cartLoading=e.id;const l={product_id:e.product_id,qty:a};s.Z.put(t,{data:l}).then((()=>{o.isLoading=!1,o.cartLoading="",this.getCart()}))},removeCartItem(e){const a=`https://vue3-course-api.hexschool.io/api/qing-api/cart/${e}`;o.isLoading=!0,s.Z["delete"](a).then((e=>{e.data.success&&(o.isLoading=!1,console.log(e),o.pushMessage(e.data.success,{title:"刪除"}),this.getCart())}))}}})},1200:function(e,a,t){t.d(a,{Z:function(){return _}});var s=t(3396),l=t(7139);const r={class:"process"},o=(0,s._)("article",null,[(0,s._)("h2",{class:"active"},"1"),(0,s._)("p",null,"購物車")],-1),i=(0,s._)("p",null,"填寫資料",-1),c=(0,s._)("p",null,"確認訂單",-1),d=(0,s._)("p",null,"訂單完成",-1);function n(e,a,t,n,u,m){return(0,s.wg)(),(0,s.iD)("section",r,[o,(0,s._)("article",null,[(0,s._)("h2",{class:(0,l.C_)({active:"/material"==this.$route.path||this.$route.path==`/material/${t.orderId}`||this.$route.path==`/orderCompleted/${t.orderId}`})}," 2 ",2),i]),(0,s._)("article",null,[(0,s._)("h2",{class:(0,l.C_)({active:this.$route.path==`/material/${t.orderId}`||this.$route.path==`/orderCompleted/${t.orderId}`})}," 3 ",2),c]),(0,s._)("article",null,[(0,s._)("h2",{class:(0,l.C_)({active:this.$route.path==`/orderCompleted/${t.orderId}`})}," 4 ",2),d])])}var u={props:["orderId"],created(){}},m=t(89);const p=(0,m.Z)(u,[["render",n]]);var _=p},2579:function(e,a,t){t.r(a),t.d(a,{default:function(){return Q}});var s=t(3396),l=t(7139),r=t(9242);const o=(0,s._)("div",{class:"loadingio-spinner-double-ring-juf8237g2sc"},[(0,s._)("div",{class:"ldio-1prs6fceeog"},[(0,s._)("div"),(0,s._)("div"),(0,s._)("div",null,[(0,s._)("div")]),(0,s._)("div",null,[(0,s._)("div")])])],-1),i={class:"container-md checkout"},c={class:"row"},d={key:0,class:"col-md-6"},n={class:"table-responsive"},u={class:"table"},m=(0,s._)("thead",{class:""},[(0,s._)("tr",null,[(0,s._)("th",{colspan:"3",class:"py-3 fs-5"},"訂單明細")])],-1),p={class:"d-lg-flex align-items-center gap-1"},_=["src"],h={class:"align-middle"},f={class:"align-middle"},g={colspan:"3",class:"text-end"},v={class:"my-3"},b={class:"ms-3"},w={class:"mb-3"},y={class:"ms-3"},$={class:"mb-3"},C={class:"ms-3"},x={class:"col-md-6"},k={class:"row justify-content-center"},q=(0,s._)("h2",{class:"fs-5"},"收件人資料",-1),L={class:"my-3 px-2"},V=(0,s._)("label",{for:"email",class:"form-label"},"Email",-1),Z={class:"mb-3 px-2"},W=(0,s._)("label",{for:"name",class:"form-label"},"收件人姓名",-1),I={class:"mb-3 px-2"},U=(0,s._)("label",{for:"tel",class:"form-label"},"收件人電話",-1),z={class:"mb-3 px-2"},j=(0,s._)("label",{for:"address",class:"form-label"},"收件人地址",-1),D={class:"mb-3 px-2"},T=(0,s._)("label",{for:"message",class:"form-label"},"備註",-1),N=(0,s._)("div",{class:"d-flex justify-content-between px-2"},[(0,s._)("a",{href:"#/cart",class:"btn btn-yellow-deep text-white"},"上一步"),(0,s._)("button",{class:"btn btn-yellow text-white"},"送出訂單")],-1);function E(e,a,t,E,M,S){const F=(0,s.up)("Loading"),H=(0,s.up)("process"),O=(0,s.up)("Field"),Y=(0,s.up)("ErrorMessage"),K=(0,s.up)("Form");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(F,{active:e.isLoading},{default:(0,s.w5)((()=>[o])),_:1},8,["active"]),(0,s._)("main",i,[(0,s.Wm)(H),(0,s._)("section",c,[e.cart.total?((0,s.wg)(),(0,s.iD)("section",d,[(0,s._)("div",n,[(0,s._)("table",u,[m,(0,s._)("tbody",null,[e.cart?((0,s.wg)(!0),(0,s.iD)(s.HY,{key:0},(0,s.Ko)(e.cart.carts,(a=>((0,s.wg)(),(0,s.iD)("tr",{key:a.id},[(0,s._)("td",p,[(0,s._)("img",{src:a.product.imageUrl,alt:"產品圖",width:"100",height:"100",style:{"object-fit":"cover"}},null,8,_),(0,s._)("p",null,(0,l.zw)(a.product.title),1)]),(0,s._)("td",h,[(0,s._)("p",null,(0,l.zw)(a.qty)+"/"+(0,l.zw)(a.product.unit),1)]),(0,s._)("td",f," NT$ "+(0,l.zw)(e.$filters.currency(a.final_total)),1)])))),128)):(0,s.kq)("",!0)]),(0,s._)("tfoot",null,[(0,s._)("tr",null,[(0,s._)("td",g,[(0,s._)("p",v,[(0,s.Uk)(" 小計: "),(0,s._)("span",b,"NT$ "+(0,l.zw)(e.$filters.currency(e.cart.total)),1)]),(0,s._)("p",w,[(0,s.Uk)(" 折扣金額: "),(0,s._)("span",y,"NT$ "+(0,l.zw)(e.$filters.currency(e.cart.final_total-e.cart.total)),1)]),(0,s._)("p",$,[(0,s.Uk)(" 總計: "),(0,s._)("span",C,"NT$ "+(0,l.zw)(e.$filters.currency(e.cart.total)),1)])])])])])])])):(0,s.kq)("",!0),(0,s._)("section",x,[(0,s._)("div",k,[(0,s.Wm)(K,{class:"col-md-10",onSubmit:S.createOrder},{default:(0,s.w5)((({errors:e})=>[q,(0,s._)("div",L,[V,(0,s.Wm)(O,{id:"email",name:"email",type:"email",class:(0,l.C_)(["form-control",{"is-invalid":e["email"]}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:M.form.user.email,"onUpdate:modelValue":a[0]||(a[0]=e=>M.form.user.email=e)},null,8,["class","modelValue"]),(0,s.Wm)(Y,{name:"email",class:"invalid-feedback"})]),(0,s._)("div",Z,[W,(0,s.Wm)(O,{id:"name",name:"姓名",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["姓名"]}]),placeholder:"請輸入姓名",rules:"required",modelValue:M.form.user.name,"onUpdate:modelValue":a[1]||(a[1]=e=>M.form.user.name=e)},null,8,["class","modelValue"]),(0,s.Wm)(Y,{name:"姓名",class:"invalid-feedback"})]),(0,s._)("div",I,[U,(0,s.Wm)(O,{id:"tel",name:"電話",type:"tel",class:(0,l.C_)(["form-control",{"is-invalid":e["電話"]}]),placeholder:"請輸入電話",rules:"required",modelValue:M.form.user.tel,"onUpdate:modelValue":a[2]||(a[2]=e=>M.form.user.tel=e)},null,8,["class","modelValue"]),(0,s.Wm)(Y,{name:"電話",class:"invalid-feedback"})]),(0,s._)("div",z,[j,(0,s.Wm)(O,{id:"address",name:"地址",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":e["地址"]}]),placeholder:"請輸入地址",rules:"required",modelValue:M.form.user.address,"onUpdate:modelValue":a[3]||(a[3]=e=>M.form.user.address=e)},null,8,["class","modelValue"]),(0,s.Wm)(Y,{name:"地址",class:"invalid-feedback"})]),(0,s._)("div",D,[T,(0,s.wy)((0,s._)("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"5","onUpdate:modelValue":a[4]||(a[4]=e=>M.form.message=e)},null,512),[[r.nr,M.form.message]])]),N])),_:1},8,["onSubmit"])])])])])],64)}t(7658);var M=t(1200),S=t(1020),F=t(4677),H=t(6294),O={components:{process:M.Z},data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""}}},computed:{...(0,S.rn)(F.Z,["cart"]),...(0,S.rn)(H.Z,["isLoading"])},methods:{...(0,S.nv)(F.Z,["getCart"]),createOrder(){const e="https://vue3-course-api.hexschool.io/api/qing-api/order",a=this.form;this.$http.post(e,{data:a}).then((e=>{console.log(e.data.orderId),this.getCart(),this.$router.push(`/material/${e.data.orderId}`)}))}},mounted(){this.getCart()}},Y=t(89);const K=(0,Y.Z)(O,[["render",E]]);var Q=K}}]);
//# sourceMappingURL=579.b794edee.js.map