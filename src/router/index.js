import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "userboard",
    component: () => import("../views/front/Userboard.vue"),
    children: [
      {
        path: "",
        component: () => import("../views/front/Home.vue"),
      },
      {
        path: "products",
        component: () => import("../views/front/Products.vue"),
      },
      {
        path: "cart",
        component: () => import("../views/front/UserCart.vue"),
      },
      {
        path: "favorite",
        component: () => import("../views/front/UserFavorite.vue"),
      },
      {
        path: "product/:product",
        component: () => import("../views/front/UserProduct.vue"),
      },
      {
        path: "checkout/:orderId",
        component: () => import("../views/front/UserCheckout.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("../views/front/Login.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("../views/back/Dashboard.vue"),
    children: [
      {
        path: "productList",
        component: () => import("../views/back/ProductList.vue"),
      },
      {
        path: "orders",
        component: () => import("../views/back/Orders.vue"),
      },
      {
        path: "coupons",
        component: () => import("../views/back/Coupons.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
