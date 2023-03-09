import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/front/UserHome.vue"),
    meta: { title: "RabbitFamily" },
  },
  {
    path: "/",
    name: "userBoard",
    component: () => import("../views/front/UserBoard.vue"),
    children: [
      {
        path: "products",
        name: "products",
        component: () => import("../views/front/UserProductList.vue"),
        meta: { title: "RabbitFamily" },
      },
      {
        path: "cart",
        name: "cart",
        component: () => import("../views/front/UserCart.vue"),
        meta: { title: "購物車 | RabbitFamily" },
      },
      {
        path: "favorite",
        name: "favorite",
        component: () => import("../views/front/UserFavorite.vue"),
        meta: { title: "收藏 | RabbitFamily" },
      },
      {
        path: "product/:product",
        name: "product",
        component: () => import("../views/front/UserProduct.vue"),
        meta: { title: "RabbitFamily" },
      },
      {
        path: "material",
        name: "material",
        component: () => import("../views/front/UserMaterial.vue"),
        meta: { title: "填寫資料 | RabbitFamily" },
      },
      {
        path: "material/:orderId",
        name: "check",
        component: () => import("../views/front/UserCheckout.vue"),
        meta: { title: "確認訂單 | RabbitFamily" },
      },
      {
        path: "orderCompleted/:orderId",
        name: "orderCompleted",
        component: () => import("../views/front/OrderCompleted.vue"),
        meta: { title: "訂單完成 | RabbitFamily" },
      },
      {
        path: "login",
        name: "login",
        component: () => import("../views/front/LoginBackstage.vue"),
        meta: { title: "後台登入 | RabbitFamily" },
      },
    ],
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/back/Dashboard.vue"),
    children: [
      {
        path: "productList",
        name: "productList",
        component: () => import("../views/back/ProductList.vue"),
        meta: { title: "產品 | RabbitFamily" },
      },
      {
        path: "orders",
        name: "orders",
        component: () => import("../views/back/Orders.vue"),
        meta: { title: "訂單 | RabbitFamily" },
      },
      {
        path: "coupons",
        name: "coupons",
        component: () => import("../views/back/Coupons.vue"),
        meta: { title: "優惠券 | RabbitFamily" },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: {
      name: "home",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.params.product) {
    document.title = `${to.query.name} | ${to.meta.title}`;
  } else if (to.meta.title) {
    document.title = to.query.category
      ? `${to.query.category} | ${to.meta.title}`
      : to.meta.title;
  }
  next();
});
router.afterEach(() => {
  window.scrollTo(0, 0);
});

export default router;
