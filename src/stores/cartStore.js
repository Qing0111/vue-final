import axios from "axios";
import { defineStore } from "pinia";
import statusStore from "./statusStore";

const status = statusStore();

export default defineStore("cartStore", {
  state: () => {
    return {
      cart: [],
    };
  },

  actions: {
    addToCart(id, qty = 1) {
      // console.log(id);
      status.cartLoading = id;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      axios.post(url, { data: cart }).then((res) => {
        status.cartLoading = "";
        // console.log(res.data);
        status.pushMessage(res.data.success, { title: "加入購物車" });
        this.getCart();
      });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      status.isLoading = true;
      axios.get(url).then((res) => {
        // console.log("card", res.data.data);
        this.cart = res.data.data;
        status.isLoading = false;
      });
    },
    updateCart(item, qty) {
      console.log(item);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      status.isLoading = true;
      status.cartLoading = item.id;
      const cart = {
        product_id: item.product_id,
        qty: qty,
      };
      axios.put(url, { data: cart }).then((res) => {
        // console.log(res);
        status.isLoading = false;
        status.cartLoading = "";
        this.getCart();
      });
    },
    removeCartItem(id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      status.isLoading = true;
      axios.delete(url).then((res) => {
        if (res.data.success) {
          status.isLoading = false;
          console.log(res);
          status.pushMessage(res.data.success, { title: "刪除" });
          this.getCart();
        }
      });
    },
  },
});
