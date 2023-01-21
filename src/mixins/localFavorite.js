import emitter from "@/methods/emitter";
import { mapState, mapActions } from "pinia";
import statusStore from "@/stores/statusStore";

export default {
  computed: {},
  methods: {
    ...mapActions(statusStore, ["pushMessage"]),

    toggleFavorite(itemId) {
      if (this.favoriteItems.includes(itemId)) {
        this.favoriteItems.splice(this.favoriteItems.indexOf(itemId), 1);
        this.pushMessage(true, { title: "移除" });
      } else {
        this.favoriteItems.push(itemId);
        this.pushMessage(true, { title: "加入" });
      }
      localStorage.setItem("favoriteItems", JSON.stringify(this.favoriteItems));
      emitter.emit("updateFavorite");
    },
    getLocalFavorite() {
      return JSON.parse(localStorage.getItem("favoriteItems"));
    },
  },
};
