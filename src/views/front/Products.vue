<template>
  <Loading :active="isLoading"></Loading>
  <article class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </article>
  <div class="container">
    <main class="row">
      <aside class="col-md-2">
        <ul class="list">
          <li><a href="#">All</a></li>
          <li><a href="#">Clothes</a></li>
          <li><a href="#">Pants</a></li>
        </ul>
      </aside>
      <section class="col-md-10">
        <div class="row g-3">
          <div
            class="col-sm-6 col-md-4"
            v-for="item in products"
            :key="item.id"
          >
            <div class="card position-relative">
              <img
                :src="item.imageUrl"
                class="card-img-top"
                alt="圖片"
                style="height: 240px"
              />
              <div
                class="heart position-absolute text-danger"
                @click="toggleFavorite(item.id)"
              >
                <i
                  class="bi"
                  :class="[
                    favoriteItems.includes(item.id)
                      ? 'bi-suit-heart-fill'
                      : 'bi-suit-heart',
                  ]"
                ></i>
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text" v-if="!item.price">
                  {{ item.origin_price }} 元
                </p>
                <p class="card-text" v-if="item.price">
                  原價 {{ item.origin_price }} 元
                </p>
                <div class="btn-group btn-group-sm w-100">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="getProduct(item.id)"
                  >
                    查看更多
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="addToCart(item.id)"
                    :disabled="cartLoading == item.id"
                  >
                    <span
                      class="spinner-grow spinner-grow-sm text-danger"
                      role="status"
                      v-if="cartLoading == item.id"
                    >
                    </span>
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss">
.list {
  li {
    a {
      text-decoration: none;
      color: #000;
      font-size: 20px;
    }
  }
}
.heart {
  left: 90%;
  top: 5px;
  i {
    font-size: 24px;
  }
}
</style>

<script>
import emitter from "@/methods/emitter";
import ToastMessages from "@/components/ToastMessages.vue";
import { mapState, mapActions } from "pinia";
import productStore from "@/stores/productStore";
import cartStore from "@/stores/cartStore";
import statusStore from "@/stores/statusStore";
import localFavorite from "@/mixins/localFavorite";

export default {
  components: {
    ToastMessages,
  },
  mixins: [localFavorite],
  provide() {
    return {
      emitter,
    };
  },
  data() {
    return {
      product: {},
      favoriteItems: [],
      // status: {
      //   loadingItem: "",
      // },
      // cart: {},
    };
  },
  computed: {
    ...mapState(productStore, ["products"]),
    ...mapState(cartStore, ["cart"]),
    ...mapState(statusStore, ["isLoading", "cartLoading"]),
  },
  methods: {
    ...mapActions(productStore, ["getProducts"]),
    ...mapActions(cartStore, ["addToCart", "getCart"]),

    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    // addToCart(id) {
    //   console.log(id);
    //   this.cartLoading = id;
    //   const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
    //   const cart = {
    //     product_id: id,
    //     qty: 1,
    //   };
    //   this.$http.post(url, { data: cart }).then((res) => {
    //     this.cartLoading = "";
    //     this.$httpMessageState(res, "加入購物車");
    //     console.log(res);
    //     this.getCart();
    //   });
    // },
    // getCart() {
    //   const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
    //   this.isLoading = true;
    //   this.$http.get(url).then((res) => {
    //     console.log(res.data.data);
    //     this.cart = res.data.data;
    //     this.isLoading = false;
    //   });
    // },
  },
  created() {
    this.getProducts();
    this.getLocalFavorite();
  },
};
</script>
