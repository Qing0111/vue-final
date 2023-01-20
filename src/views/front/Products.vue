<template>
  <Loading :active="isLoading"></Loading>
  <article class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </article>

  <main class="container main-product">
    <div class="row">
      <aside class="col-md-2 list">
        <ul class="" v-for="(item, key) in tabs" :key="key">
          <li class="mb-2">
            <a
              href="#"
              :class="{ 'text-yellow': item.title === tabState }"
              @click.prevent="tabState = item.title"
              >{{ item.title }}</a
            >
          </li>
        </ul>
      </aside>
      <section class="col-md-10 products">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-decoration-none text-dark"
                >首頁</router-link
              >
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              {{ tabState }}
            </li>
          </ol>
        </nav>
        <div class="row g-3">
          <div
            class="col-sm-6 col-md-4"
            v-for="item in productCategory"
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
    <Pagination :pages="pagination" @emit-pages="setPagination"></Pagination>
  </main>
</template>

<style lang="scss">
.main-product {
  padding: 60px 0;
  min-height: calc(100vh - 174px);
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
    margin-bottom: 52px;
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
      tabs: [
        {
          title: "全部商品",
        },
        {
          title: "兔子",
        },
        {
          title: "牧草",
        },
        {
          title: "飼料",
        },
      ],
      tabState: "全部商品",
      pagination: {
        current_page: 1,
        total_pages: 1,
        has_pre: false,
        has_next: true,
      },
      productCategory: [],
    };
  },
  computed: {
    ...mapState(productStore, ["products"]),
    ...mapState(cartStore, ["cart"]),
    ...mapState(statusStore, ["isLoading", "cartLoading"]),

    filterData() {
      if (this.tabState == "全部商品") {
        return this.products;
      } else if (this.tabState == "兔子") {
        return this.products.filter((item) => item.category == this.tabState);
      } else if (this.tabState == "牧草") {
        return this.products.filter((item) => item.category == this.tabState);
      } else if (this.tabState == "飼料") {
        return this.products.filter((item) => item.category == this.tabState);
      }
    },
  },
  watch: {
    filterData() {
      this.setPagination();
    },
  },
  methods: {
    ...mapActions(productStore, ["getProducts"]),
    ...mapActions(cartStore, ["addToCart", "getCart"]),

    getProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    setPagination(page = 1) {
      const filterProduct = [...this.filterData];
      const totalPage = Math.ceil(filterProduct.length / 10);

      this.pagination = {
        current_page: page,
        total_pages: totalPage,
        has_pre: page > 1,
        has_next: page < totalPage,
      };
      this.productCategory = filterProduct.splice((page - 1) * 9, page * 9);
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>
