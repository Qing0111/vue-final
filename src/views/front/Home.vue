<template>
  <div class="home"></div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import productStore from "@/stores/productStore";
import cartStore from "@/stores/cartStore";

export default {
  name: "HomeView",
  components: {},
  computed: {
    ...mapState(cartStore, ["cart"]),
  },
  methods: {
    ...mapActions(cartStore, ["addToCart", "getCart"]),
  },
  created() {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
    this.getCart();
  },
};
</script>
