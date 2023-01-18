import axios from "axios";
import { defineStore } from "pinia";
import statusStore from "./statusStore";

const status = statusStore();

export default defineStore("productStore", {
  state: () => {
    return {
      products: [],
      pagination: {},
    };
  },
  getters: {
    sortProducts: (state) => state.products.sort((a, b) => a.price - b.price),
  },
  actions: {
    getProducts(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/?page=${page}`;
      status.isLoading = true;
      axios.get(url).then((res) => {
        this.products = res.data.products;
        this.pagination = res.data.pagination;
        console.log("products:", res);
        status.isLoading = false;
      });
    },
  },
});
