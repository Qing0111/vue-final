"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[330],{6206:function(t,a,e){e.d(a,{Z:function(){return u}});var i=e(3396);const l={class:"bg-brown-deep"},s=(0,i._)("section",{class:"footer container"},[(0,i._)("p",null,"© RabbitFamily All Rights Reserved."),(0,i._)("p",null,"本網站僅練習用，無商業用途")],-1),n=[s];function o(t,a){return(0,i.wg)(),(0,i.iD)("footer",l,n)}var r=e(89);const c={},d=(0,r.Z)(c,[["render",o]]);var u=d},6174:function(t,a,e){e.d(a,{Z:function(){return j}});var i=e(3396),l=e(7139);const s={class:"bg-brown-deep"},n=(0,i._)("section",{class:"discount bg-natural-yellow"},[(0,i._)("p",null,"輸入優惠碼 : 52rabbit，可享有8折優惠!")],-1),o={class:"header"},r=(0,i._)("span",null,null,-1),c=(0,i._)("span",null,null,-1),d=(0,i._)("span",null,null,-1),u=[r,c,d],p={ref:"nav"},_={class:"logo"},g={class:"collect-shop"},f=(0,i._)("i",{class:"bi bi-person"},null,-1),w={class:"itemLength"},m=(0,i._)("i",{class:"bi bi-suit-heart"},null,-1),b={key:0,class:"text-white"},v={class:"itemLength"},h=(0,i._)("i",{class:"bi bi-cart3"},null,-1),y={key:0,class:"text-white"};function k(t,a,e,r,c,d){const k=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("header",s,[n,(0,i._)("section",o,[(0,i._)("div",{class:"burger",ref:"burger",onClick:a[0]||(a[0]=(...t)=>d.toggleBurger&&d.toggleBurger(...t))},u,512),(0,i._)("nav",p,[(0,i._)("ul",null,[(0,i._)("li",null,[(0,i.Wm)(k,{to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("首頁")])),_:1})]),(0,i._)("li",null,[(0,i.Wm)(k,{to:"/products?category=全部"},{default:(0,i.w5)((()=>[(0,i.Uk)("商品")])),_:1})])])],512),(0,i._)("div",_,[(0,i._)("h1",null,[(0,i.Wm)(k,{to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("RabbitFamily")])),_:1})])]),(0,i._)("ul",g,[(0,i._)("li",null,[(0,i.Wm)(k,{to:"/login"},{default:(0,i.w5)((()=>[f])),_:1})]),(0,i._)("li",w,[(0,i.Wm)(k,{to:"/favorite"},{default:(0,i.w5)((()=>[m])),_:1}),c.favoriteItems.length?((0,i.wg)(),(0,i.iD)("article",b,(0,l.zw)(c.favoriteItems.length),1)):(0,i.kq)("",!0)]),(0,i._)("li",v,[(0,i.Wm)(k,{to:"/cart",class:(0,l.C_)({active:"/cart"==this.$route.path})},{default:(0,i.w5)((()=>[h])),_:1},8,["class"]),t.cart.total?((0,i.wg)(),(0,i.iD)("article",y,(0,l.zw)(t.cart.carts.length),1)):(0,i.kq)("",!0)])])])])}var W=e(1020),Z=e(4677),C=e(978),D=e(8557),F={data(){return{favoriteItems:this.getLocalFavorite()||[]}},mixins:[C.Z],computed:{...(0,W.rn)(Z.Z,["cart"])},methods:{...(0,W.nv)(Z.Z,["getCart"]),toggleBurger(){this.$refs.nav.classList.toggle("active"),this.$refs.burger.classList.toggle("open")}},created(){D.Z.on("updateFavorite",(()=>{this.favoriteItems=this.getLocalFavorite()})),this.getCart()}},L=e(89);const x=(0,L.Z)(F,[["render",k]]);var j=x},777:function(t,a,e){e.r(a),e.d(a,{default:function(){return pt}});var i=e(3396),l=e(7139),s=e.p+"img/banner.a70c15c1.jpg",n=e.p+"img/banner3.300d210a.jpg",o=e.p+"img/發泡飼料.7efd679a.jpg",r=e.p+"img/兔籠子.af0f828e.jpg",c=e.p+"img/rabbit.609154fc.jpg";const d=(0,i._)("div",{class:"loadingio-spinner-double-ring-juf8237g2sc"},[(0,i._)("div",{class:"ldio-1prs6fceeog"},[(0,i._)("div"),(0,i._)("div"),(0,i._)("div",null,[(0,i._)("div")]),(0,i._)("div",null,[(0,i._)("div")])])],-1),u={class:"banner"},p=(0,i._)("img",{src:s,alt:"banner圖"},null,-1),_={class:"content"},g=(0,i._)("h2",null,"RabbitFamily",-1),f=(0,i._)("p",null,"The best for your bunny",-1),w=(0,i._)("img",{src:n,alt:"banner圖"},null,-1),m={class:"content"},b=(0,i._)("h2",{class:"text-white"},"RabbitFamily",-1),v=(0,i._)("p",{class:"text-white"},"The best for your bunny",-1),h={class:"container-md"},y={class:"main-content","data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000","data-aos-offset":"0"},k={class:"product-commodity"},W=(0,i._)("figure",null,[(0,i._)("img",{src:o,alt:""}),(0,i._)("div",{class:"content"},[(0,i._)("h2",null,"飼料"),(0,i._)("p",null,"shop now")])],-1),Z=(0,i._)("figure",null,[(0,i._)("img",{src:r,alt:""}),(0,i._)("div",{class:"content"},[(0,i._)("h2",null,"兔用品"),(0,i._)("p",null,"shop now")])],-1),C={class:"new-product"},D=(0,i._)("h2",null,"兔用新品",-1),F={class:"row g-3"},L={class:"card product-card"},x={class:"pic"},j=["src"],I={class:"card-body"},z={class:"card-title fs-5"},R={key:0,class:"card-text"},q={key:1,class:"card-text"},P={class:"group"},U=["onClick","disabled"],S=(0,i._)("i",{class:"bi bi-cart3"},null,-1),T=[S],B=["onClick"],$={key:0,class:"bi bi-suit-heart-fill"},H={key:1,class:"bi bi-suit-heart"},N={class:"rabbit","data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"},Y=(0,i._)("figure",null,[(0,i._)("img",{src:c,alt:""}),(0,i._)("div",{class:"content"},[(0,i._)("h2",null,"兔子"),(0,i._)("p",null,"shop now")])],-1),K={class:"introduce"},V=(0,i._)("h2",null,"兔子介紹",-1),A={class:"card mb-3"},E={class:"card-body"},G={class:"card-title"},J={class:"card-text"},M=(0,i.uE)('<section class="information bg-yellow-deep"><article class="contact" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000"><h3>聯絡我們</h3><p>地址 : 台中市兔子家族</p><p>連絡電話 : 04-12345678</p><p>信箱 : rabbit_family@gmail.com</p></article><article class="follow" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000"><h3>關注我們</h3><article><div class="fb"><a href="#/"><i class="bi bi-facebook"></i><span>Facebook</span></a></div><div class="ig"><a href="#/"><i class="bi bi-instagram"></i><span>Instagram</span></a></div></article></article></section>',1);function O(t,a,e,s,n,o){const r=(0,i.up)("Loading"),c=(0,i.up)("Navbar"),S=(0,i.up)("router-link"),O=(0,i.up)("swiper-slide"),Q=(0,i.up)("swiper"),X=(0,i.up)("Footer");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(r,{active:t.isLoading},{default:(0,i.w5)((()=>[d])),_:1},8,["active"]),(0,i.Wm)(c),(0,i._)("main",null,[(0,i._)("section",u,[(0,i.Wm)(Q,{pagination:{clickable:!0},autoplay:{delay:3e3},class:"mySwiper"},{default:(0,i.w5)((()=>[(0,i.Wm)(O,null,{default:(0,i.w5)((()=>[p,(0,i._)("article",_,[g,f,(0,i.Wm)(S,{to:"/products?category=全部",class:"btn btn-yellow text-white"},{default:(0,i.w5)((()=>[(0,i.Uk)("shop now")])),_:1})])])),_:1}),(0,i.Wm)(O,null,{default:(0,i.w5)((()=>[w,(0,i._)("article",m,[b,v,(0,i.Wm)(S,{to:"/products",class:"btn btn-yellow text-white"},{default:(0,i.w5)((()=>[(0,i.Uk)("shop now")])),_:1})])])),_:1})])),_:1})]),(0,i._)("div",h,[(0,i._)("section",y,[(0,i._)("section",k,[(0,i.Wm)(S,{to:"/products?category=飼料"},{default:(0,i.w5)((()=>[W])),_:1}),(0,i.Wm)(S,{to:"/products?category=兔用品"},{default:(0,i.w5)((()=>[Z])),_:1})]),(0,i._)("section",C,[D,(0,i._)("div",F,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.filterData,(a=>((0,i.wg)(),(0,i.iD)("div",{class:"col-md-4",key:a.id,"data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"},[(0,i._)("article",L,[(0,i.Wm)(S,{to:{name:"product",params:{product:a.id},query:{name:a.title}}},{default:(0,i.w5)((()=>[(0,i._)("div",x,[(0,i._)("img",{src:a.imageUrl,class:"card-img-top",alt:"圖片"},null,8,j)])])),_:2},1032,["to"]),(0,i._)("div",I,[(0,i._)("h5",z,(0,l.zw)(a.title),1),a.price?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("p",R,(0,l.zw)(a.origin_price)+" 元 ",1)),a.price?((0,i.wg)(),(0,i.iD)("p",q," NT$"+(0,l.zw)(a.origin_price),1)):(0,i.kq)("",!0),(0,i._)("div",P,[(0,i._)("div",{class:"shop",onClick:e=>t.addToCart(a.id),disabled:t.cartLoading==a.id},T,8,U),(0,i._)("div",{class:(0,l.C_)(["heart",{active:n.favoriteItems.includes(a.id)}]),onClick:e=>t.toggleFavorite(a.id)},[n.favoriteItems.includes(a.id)?((0,i.wg)(),(0,i.iD)("i",$)):((0,i.wg)(),(0,i.iD)("i",H))],10,B)])])])])))),128))])]),(0,i._)("section",N,[(0,i.Wm)(S,{to:"/products?category=兔子"},{default:(0,i.w5)((()=>[Y])),_:1})]),(0,i._)("section",K,[V,(0,i.Wm)(Q,{ref:"{swiperRef}",slidesPerView:1,spaceBetween:30,loop:!0,navigation:!0,breakpoints:{768:{slidesPerView:2}},class:"mySwiper","data-aos":"fade-up","data-aos-once":"true","data-aos-duration":"1000"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.introduce,((t,a)=>((0,i.wg)(),(0,i.j4)(O,{key:a},{default:(0,i.w5)((()=>[(0,i._)("div",A,[(0,i._)("div",E,[(0,i._)("h5",G,(0,l.zw)(t.title),1),(0,i._)("p",J,(0,l.zw)(t.content),1)])])])),_:2},1024)))),128))])),_:1},512)])])]),M]),(0,i.Wm)(X)],64)}var Q=e(6174),X=e(6206),tt=e(1020),at=e(4238),et=e(4677),it=e(6294),lt=e(978),st=e(6905),nt=e.n(st),ot=e(5032),rt=e(3390);rt.ZP.use([rt.tl,rt.W_,rt.pt]);var ct={components:{Navbar:Q.Z,Footer:X.Z,Swiper:ot.tq,SwiperSlide:ot.o5},mixins:[lt.Z],data(){return{newProduct:[],favoriteItems:this.getLocalFavorite()||[],introduce:[{title:"成長期",content:"兔寶寶成長期速度很快，6個月就成年了，繁殖能力強，一胎4至12隻，平均壽命5至8歲。 未滿6個月幼兔主食「苜蓿草及飼料」，通常幼兔只吃葉子比較多，因為怕咬不動，飼料太大顆一定要剪小一點比較好，注意要喝乾淨的水，不可以喝生水，避免拉肚子。"},{title:"兔子飼養方式",content:"基本上配備是固定式碗或者比較重的陶瓷碗避免打翻，固定式飲水器，如果用一般水碗給兔寶寶喝水容易打翻，這樣子是不行的，也會造成身上濕濕冷冷的還可能會黴菌或皮膚病，兔寶寶一開始還不會用便盆，2至3個月後才會懂得使用便盆，把便盆放在牠固定便便的角落喔，要多花一點耐心與時間。"},{title:"環境",content:"需要足夠運動空間（不可以在磁磚地板跑喔，一定要鋪墊子）避免後腳受傷，室內要通風，溫度20至25度是兔子喜歡的溫度，環境太悶熱造成中暑，食慾不振。"},{title:"個性",content:"兔寶寶個性比較敏感，聲音太大會嚇到牠們的，會造成緊張或拉肚子，剛到新環境的兔寶寶需要7天適應環境，先給予牧草，水，如果牠不願意給摸，先不要勉強牠，好好認識新主人的味道，可以準備小點心當獎勵多培養感情。"},{title:"剪指甲",content:"通常需要2個人幫忙，一個抱住牠，一個剪，如果你是老手，一個人就能完成任務，但是要注意安全，因為兔寶寶脊椎非常脆弱，一不小心就會造成永久性傷害，如果有狀況馬上就醫，如果兔子不願意剪時，可以請寵物店的專業人士幫你剪。"},{title:"兔子品種",content:"台灣常見的品種：迷你兔的體重1.5～2.2公斤，侏儒兔體重1.2～1.5公斤，獅子兔體重1.6～2.2公斤，兔子品種體型，體重也會有所差異。"}]}},computed:{...(0,tt.rn)(at.Z,["products"]),...(0,tt.rn)(it.Z,["isLoading","cartLoading"]),filterData(){let t=[];return t=this.products.filter((t=>"飲水器"==t.title||"床墊"==t.title||"陶瓷碗"==t.title)),t}},methods:{...(0,tt.nv)(at.Z,["getProducts"]),...(0,tt.nv)(et.Z,["addToCart","getCart"])},created(){this.getProducts(),this.getCart(),nt().init({})}},dt=e(89);const ut=(0,dt.Z)(ct,[["render",O]]);var pt=ut}}]);
//# sourceMappingURL=330.1767b5ed.js.map