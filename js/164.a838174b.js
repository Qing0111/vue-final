"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[164],{6465:function(t,e,a){a.r(e),a.d(e,{default:function(){return U}});var o=a(3396),i=a(9242),r=a(7139);const l=(0,o._)("div",{class:"loadingio-spinner-double-ring-juf8237g2sc"},[(0,o._)("div",{class:"ldio-1prs6fceeog"},[(0,o._)("div"),(0,o._)("div"),(0,o._)("div",null,[(0,o._)("div")]),(0,o._)("div",null,[(0,o._)("div")])])],-1),c={class:"container-md"},s={key:0,class:"favorite"},n={"aria-label":"breadcrumb tabs"},d={class:"breadcrumb"},u={class:"breadcrumb-item"},v=(0,o._)("li",{class:"breadcrumb-item active","aria-current":"page"},"我的收藏",-1),p={class:"ms-auto"},m=["onClick"],h=["src"],g={class:"content"},_=["onClick"],f=["onClick"],b=(0,o._)("i",{class:"bi bi-x-lg"},null,-1),w=[b],k={key:1,class:"empty-cart d-flex justify-content-center align-items-center"},C={class:"h-100"},D=(0,o._)("h2",null,"目前您的收藏沒有任何商品!",-1);function P(t,e,a,b,P,y){const x=(0,o.up)("Loading"),F=(0,o.up)("router-link"),M=(0,o.up)("DelModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(x,{active:t.isLoading},{default:(0,o.w5)((()=>[l])),_:1},8,["active"]),(0,o._)("main",c,[(0,o.Wm)(i.uT,{name:"switch",mode:"out-in"},{default:(0,o.w5)((()=>[P.favoriteProduct.length?((0,o.wg)(),(0,o.iD)("section",s,[(0,o._)("nav",n,[(0,o._)("ol",d,[(0,o._)("li",u,[(0,o.Wm)(F,{to:"/",class:"text-decoration-none text-dark"},{default:(0,o.w5)((()=>[(0,o.Uk)("首頁")])),_:1})]),v,(0,o._)("li",p,[(0,o._)("a",{href:"#",class:"text-yellow",onClick:e[0]||(e[0]=(0,i.iM)((t=>y.openDelModal()),["prevent"]))},"清除全部")])])]),(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(P.favoriteProduct,((e,a)=>((0,o.wg)(),(0,o.iD)("li",{class:"card-favorite",key:a,"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"800","data-aos-offset":"0"},[(0,o._)("div",{class:"pic",onClick:t=>y.getProduct(e.product.id,e.product.title)},[(0,o._)("img",{src:e.product.imageUrl,alt:"產品圖片"},null,8,h)],8,m),(0,o._)("article",g,[(0,o._)("h3",null,(0,r.zw)(e.product.title),1),(0,o._)("p",null,(0,r.zw)(e.product.origin_price)+"元",1),(0,o._)("button",{class:"btn btn-yellow text-white",onClick:a=>t.addToCart(e.product.id)}," 加到購物車 ",8,_)]),(0,o._)("div",{class:"cross",onClick:t=>y.removeFavoriteProduct(e.product.id,a)},w,8,f)])))),128))])])):((0,o.wg)(),(0,o.iD)("section",k,[(0,o._)("article",C,[D,(0,o.Wm)(F,{to:"/products?category=全部",class:"btn btn-yellow text-white"},{default:(0,o.w5)((()=>[(0,o.Uk)("來去購物")])),_:1})])]))])),_:1})]),(0,o.Wm)(M,{ref:"delModal",onDelItem:t.clearLocal},null,8,["onDelItem"])],64)}a(7658);var y=a(1020),x=a(4677),F=a(6294),M=a(978),L=a(8557),Z=a(6823),I=a(6905),W=a.n(I),j={components:{DelModal:Z.Z},data(){return{favoriteItems:this.getLocalFavorite()||[],favoriteProduct:[]}},mixins:[M.Z],computed:{...(0,y.rn)(x.Z,["cart"]),...(0,y.rn)(F.Z,["isLoading","cartLoading"])},methods:{...(0,y.nv)(x.Z,["addToCart","getCart"]),getFavoriteProduct(){this.favoriteItems&&this.favoriteItems.forEach((t=>{const e=`https://vue3-course-api.hexschool.io/api/qing-api/product/${t}`;this.$http.get(e).then((t=>{this.favoriteProduct.push(t.data)}))}))},getProduct(t,e){this.$router.push({name:"product",params:{product:t},query:{name:e}})},removeFavoriteProduct(t,e){this.toggleFavorite(t),this.favoriteProduct.splice(e,1)},openDelModal(){this.$refs.delModal.showModal()}},created(){this.getCart(),this.getFavoriteProduct(),L.Z.on("updateFavorite",(()=>{this.favoriteItems=this.getLocalFavorite()})),W().init({})}},$=a(89);const T=(0,$.Z)(j,[["render",P]]);var U=T}}]);
//# sourceMappingURL=164.a838174b.js.map