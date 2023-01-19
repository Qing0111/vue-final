<template>
  <Loading :active="isLoading"></Loading>
  <article class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </article>

  <main class="container main-product">
    <div class="row">
      <aside class="col-md-2 list">
        <ul class="">
          <li><a href="#">All</a></li>
          <li><a href="#">Clothes</a></li>
          <li><a href="#">Pants</a></li>
        </ul>
      </aside>
      <section class="col-md-10 products">
        <div class="row g-3">
          <div
            class="col-sm-6 col-md-4"
            v-for="item in products"
            :key="item.id"
          >
            <article class="card">
              <router-link :to="`/product/${item.id}`">
                <img :src="item.imageUrl" class="card-img-top" alt="圖片" />
              </router-link>

              <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text" v-if="!item.price">
                  {{ item.origin_price }} 元
                </p>
                <p class="card-text" v-if="item.price">
                  原價 {{ item.origin_price }} 元
                </p>
                <div class="group">
                  <!-- <button type="button" class="btn btn-outline-secondary">
                    查看更多
                  </button> -->
                  <button
                    type="button"
                    class="btn text-yellow shop"
                    @click="addToCart(item.id)"
                    :disabled="cartLoading == item.id"
                  >
                    <!-- <span
                      class="spinner-grow spinner-grow-sm text-white"
                      role="status"
                      v-if="cartLoading == item.id"
                    >
                    </span> -->
                    <i class="bi bi-cart3"></i>
                  </button>
                  <div
                    class="heart text-danger"
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
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
    <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
  </main>
</template>

<style lang="scss">
.main-product {
  padding: 40px 0;

  .list {
    li {
      a {
        text-decoration: none;
        color: #000;
        font-size: 20px;
      }
    }
  }
  .products {
    margin-bottom: 20px;
    img {
      object-fit: cover;
      height: 200px;
      cursor: pointer;

      &::after {
        content: "";
      }
    }
    .group {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 4px;
    }
    .shop {
      i {
        font-size: 20px;
      }
    }
    .heart {
      cursor: pointer;
      i {
        font-size: 20px;
        color: #c8a472;
      }
    }
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
