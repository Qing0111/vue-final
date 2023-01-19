<template>
  <Loading :active="isLoading"></Loading>
  <article class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </article>

  <main class="container">
    <div class="row">
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
            <article class="card position-relative">
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
                  class="bi bi-suit-heart-fill"
                  v-if="favoriteItems.includes(item.id)"
                ></i>
                <i class="bi bi-suit-heart" v-else></i>
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
                  <button type="button" class="btn btn-outline-secondary">
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
            </article>
          </div>
        </div>
      </section>
    </div>
  </main>

  <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
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
  z-index: 1;
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
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    ToastMessages,
    Pagination,
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
      favoriteItems: this.getLocalFavorite() || [],
    };
  },
  computed: {
    ...mapState(productStore, ["products", "pagination"]),
    ...mapState(cartStore, ["cart"]),
    ...mapState(statusStore, ["isLoading", "cartLoading"]),
  },
  methods: {
    ...mapActions(productStore, ["getProducts"]),
    ...mapActions(cartStore, ["addToCart", "getCart"]),

    getProduct(id) {
      this.$router.push(`/product/${id}`);
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>
