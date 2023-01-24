import emitter from "@/methods/emitter";
import { mapState, mapActions } from "pinia";
import statusStore from "@/stores/statusStore";

const status = statusStore();

export default {
  computed: {},
  methods: {
    ...mapActions(statusStore, ["pushMessage"]),

    toggleFavorite(id) {
      if (this.favoriteItems.includes(id)) {
        this.favoriteItems.splice(this.favoriteItems.indexOf(id), 1);
        this.pushMessage(true, { title: "移除" });
      } else {
        this.favoriteItems.push(id);
        this.pushMessage(true, { title: "加入" });
      }
      localStorage.setItem("favoriteItems", JSON.stringify(this.favoriteItems));
      emitter.emit("updateFavorite");
    },
    clearLocal() {
      this.favoriteProduct.splice(0, this.favoriteItems.length);
      this.favoriteItems = [];
      localStorage.setItem("favoriteItems", JSON.stringify(this.favoriteItems));
      this.pushMessage(true, { title: "移除" });
      emitter.emit("updateFavorite");
    },
    getLocalFavorite() {
      return JSON.parse(localStorage.getItem("favoriteItems"));
    },
  },
};
