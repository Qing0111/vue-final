import axios from "axios";
import { defineStore } from "pinia";
import statusStore from "./statusStore";

const status = statusStore();

export default defineStore("productStore", {
  state: () => {
    return {
      products: [],
      isLoadSkeleton: true,
    };
  },
  actions: {
    loadImg(imgUrl) {
      const imgArr = [...imgUrl];
      let i = 0;
      imgArr.forEach((src) => {
        const img = new Image();
        // console.log(src);
        img.src = src;
        img.addEventListener('load', () => {
          i += 1;
          if (i === imgArr.length) {
            this.isLoadSkeleton = false;
          }
        });
      });
    },
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      status.isLoading = true;
      axios.get(url).then((res) => {
        const imgArr = res.data.products.map((item) => [item.imageUrl]);
        this.loadImg([].concat(...imgArr));

        this.products = res.data.products;
        // console.log("products:", res);
        status.isLoading = false;
      });
    },
  },
});
