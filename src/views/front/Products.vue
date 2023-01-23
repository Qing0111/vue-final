<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-double-ring-juf8237g2sc">
      <div class="ldio-1prs6fceeog">
        <div></div>
        <div></div>
        <div><div></div></div>
        <div><div></div></div>
      </div></div
  ></Loading>

  <main class="container main-product">
    <div class="row">
      <aside class="col-md-3 col-lg-2 list">
        <h2>類別 /</h2>
        <ul class="">
          <template v-for="(item, key) in tabs" :key="key">
            <li>
              <a
                href="#"
                :class="{ active: item.title === tabState }"
                @click.prevent="category(item.title)"
                >{{ item.title }}</a
              >
            </li>
          </template>
        </ul>
      </aside>
      <section class="col-md-9 col-lg-10 products">
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
            class="col-sm-6 col-lg-4"
            v-for="item in productCategory"
            :key="item.id"
          >
            <article class="card product-card">
              <router-link :to="`/product/${item.id}`">
                <div class="pic">
                  <img :src="item.imageUrl" class="card-img-top" alt="圖片" />
                </div>
              </router-link>

              <div class="card-body">
                <h5 class="card-title fs-5">{{ item.title }}</h5>
                <p class="card-text" v-if="!item.price">
                  {{ item.origin_price }} 元
                </p>
                <p class="card-text" v-if="item.price">
                  NT${{ item.origin_price }}
                </p>
                <div class="group">
                  <div
                    class="text-yellow shop"
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
                  </div>
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
  padding: 60px 20px;
  min-height: calc(100vh - 158px);
  .list {
    margin-bottom: 28px;
    h2 {
      font-size: 24px;
      margin-bottom: 9px;
      color: #54433c;
    }
    ul {
      display: flex;
      gap: 8px;
    }
    li {
      border: 1px solid #c8a472;
      border-radius: 50px;
      a {
        text-decoration: none;
        display: inline-block;
        width: 100%;
        color: #000;
        font-size: 16px;
        padding: 10px;
        &.active {
          background-color: #c8a472;
          color: #fff;
          border-radius: 50px;
        }
      }
    }
  }
  .products {
    margin-bottom: 52px;
    .product-card {
      box-shadow: 1px 1px 2px #ccc;
      transition: box-shadow 0.5s;
      &:hover {
        box-shadow: none;
      }
      .pic {
        width: 100%;
        position: relative;
        &::after {
          content: "see more";
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0 0;
          color: #fff;
          font-size: 24px;
          margin: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(84, 67, 60, 0.5);
          clip-path: circle(50px at center);
        }
        img {
          width: 100%;
          object-fit: cover;
          height: 240px;
          cursor: pointer;
          vertical-align: bottom;
        }
      }
    }
    .group {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 4px;
      gap: 8px;
    }
    .shop {
      cursor: pointer;
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
@media (min-width: 768px) {
  .main-product {
    padding: 60px 20px;
    .list {
      h2 {
        font-size: 24px;
        margin-bottom: 9px;
        color: #54433c;
      }
      ul {
        border: 1px solid #c8a472;
        box-shadow: 1px 1px 2px #967b55;
        display: block;
      }
      li {
        border: 0;
        border-bottom: 1px solid #c8a472;
        border-radius: 0px;
        &:last-child {
          border-bottom: 0;
        }
        a {
          padding: 12px;
          &.active {
            border-radius: 0px;
          }
        }
      }
    }
    .products {
      margin-bottom: 52px;
      .product-card {
        .pic {
          &::after {
            content: "";
            clip-path: circle(300px at center);
            transition: clip-path 0.3s;
          }
          img {
            height: 300px;
          }
        }
        &:hover .pic::after {
          content: "see more";
          clip-path: circle(50px at center);
        }
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
          title: "全部",
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
        {
          title: "兔用品",
        },
      ],
      tabState: "",
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
    ...mapState(productStore, ["products", "State"]),
    ...mapState(cartStore, ["cart"]),
    ...mapState(statusStore, ["isLoading", "cartLoading"]),

    filterData() {
      let filterValue = [];
      if (this.tabState == "全部") {
        filterValue = this.products;
      } else if (this.tabState) {
        filterValue = this.products.filter(
          (item) => item.category == this.tabState
        );
      }
      return filterValue;
    },
  },
  watch: {
    filterData() {
      this.setPagination();
    },
    $route() {
      this.tabState = this.$route.query.category;
    },
  },
  methods: {
    ...mapActions(productStore, ["getProducts"]),
    ...mapActions(cartStore, ["addToCart", "getCart"]),

    getProduct(id) {
      this.$router.push(`/product/${id}`);
    },
    category(category) {
      this.$router.push({ name: "products", query: { category } });
      this.tabState = category;
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
    this.tabState = this.$route.query.category || "全部";
  },
};
</script>
