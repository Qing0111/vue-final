import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "userboard",
    component: () => import("../views/front/Userboard.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("../views/front/Home.vue"),
      },
      {
        path: "products",
        name: "products",
        component: () => import("../views/front/Products.vue"),
      },
      {
        path: "cart",
        name: "cart",
        component: () => import("../views/front/UserCart.vue"),
      },
      {
        path: "favorite",
        name: "favorite",
        component: () => import("../views/front/UserFavorite.vue"),
      },
      {
        path: "product/:product",
        name: "product",
        component: () => import("../views/front/UserProduct.vue"),
      },
      {
        path: "checkout",
        name: "checkout",
        component: () => import("../views/front/Checkout.vue"),
      },
      {
        path: "checkout/:orderId",
        name: "check",
        component: () => import("../views/front/UserCheckout.vue"),
      },
      {
        path: "orderCompleted/:orderId",
        name: "orderCompleted",
        component: () => import("../views/front/OrderCompleted.vue"),
      },
      {
        path: "login",
        name: "login",
        component: () => import("../views/front/Login.vue"),
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
      },
      {
        path: "orders",
        name: "orders",
        component: () => import("../views/back/Orders.vue"),
      },
      {
        path: "coupons",
        name: "coupons",
        component: () => import("../views/back/Coupons.vue"),
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

export default router;
