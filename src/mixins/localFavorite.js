import emitter from "@/methods/emitter";


export default {
  methods: {
    toggleFavorite(itemId) {
      if (this.favoriteItems.includes(itemId)) {
        this.favoriteItems.splice(this.favoriteItems.indexOf(itemId), 1);
      } else {
        this.favoriteItems.push(itemId);
      }
      localStorage.setItem('favoriteItems', JSON.stringify(this.favoriteItems));
      emitter.emit('updateFavorite');
    },
    getLocalFavorite() {
      return JSON.parse(localStorage.getItem("favoriteItems"));
    }
  },
};
