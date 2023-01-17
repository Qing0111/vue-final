import axios from "axios";
import { defineStore } from "pinia";
import statusStore from "./statusStore";

const status = statusStore();

export default defineStore("cartStore", {
  state: () => {
    return {
      cart: {},
    };
  },

  actions: {
    addToCart(id) {
      console.log(id);
      status.cartLoading = id;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: 1,
      };
      axios.post(url, { data: cart }).then((res) => {
        status.cartLoading = "";
        // this.$httpMessageState(res, "加入購物車");
        status.pushMessage(res, { title: '加入購物車' })
        console.log(res);
        this.getCart();
      });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      status.isLoading = true;
      axios.get(url).then((res) => {
        console.log(res.data.data);
        this.cart = res.data.data;
        status.isLoading = false;
      });
    },
    updateCart(item) {
      // console.log(item);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      // status.isLoading = true;
      status.cartLoading = item.id;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      axios.put(url, { data: cart }).then((res) => {
        // console.log(res);
        status.cartLoading = "";
        this.getCart();
      });
    },
    removeCartItem(id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`;
      status.isLoading = true;
      axios.delete(url).then((res) => {
        status.isLoading = false;
        console.log(res);
        // this.$httpMessageState(res, "刪除");
        status.pushMessage(res, { title: '刪除' })
        this.getCart();
      });
    },
  },
});
