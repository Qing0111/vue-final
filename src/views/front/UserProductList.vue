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

  <main class="container-md main-product">
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
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="800"
            data-aos-offset="0"
          >
            <article class="card product-card">
              <router-link
                :to="{
                  name: 'product',
                  params: { product: item.id },
                  query: { name: item.title },
                }"
              >
                <div class="pic">
                  <img :src="item.imageUrl" class="card-img-top" alt="產品圖" />
                </div>
              </router-link>

              <div class="card-body">
                <h5 class="card-title fs-5">{{ item.title }}</h5>
                <p class="card-text" v-if="!item.price">
                  {{ item.origin_price }} 元
                </p>
                <p class="card-text" v-if="item.price">
                  NT$ {{ item.origin_price }}
                </p>
                <div class="group">
                  <div
                    class="shop"
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
                    class="heart"
                    @click="toggleFavorite(item.id)"
                    :class="{ active: favoriteItems.includes(item.id) }"
                  >
                    <i
                      class="bi bi-suit-heart-fill"
                      v-if="favoriteItems.includes(item.id)"
                    ></i>
                    <i class="bi bi-suit-heart" v-else></i>
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

<style lang="scss" scope>
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
      a {
        text-decoration: none;
        display: inline-block;
        width: 100%;
        color: #000;
        font-size: 16px;
        padding: 10px;
        border: 1px solid #c8a472;
        box-shadow: 1px 1px 1px #927853;
        border-radius: 50px;

        &:hover {
          background-color: #dfcaac;
          color: #fff;
          border: 1px solid #dfcaac;
          // border-radius: 50px;
          box-shadow: none;
        }
        &.active {
          background-color: #c8a472;
          border: 1px solid #c8a472;
          color: #fff;
          box-shadow: none;
          // border-radius: 50px;
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
      border: 1px solid #c8a472;
      padding: 6px;
      border-radius: 50%;
      color: #c8a472;
      &:hover {
        background-color: #c8a472;
        color: #fff;
      }
      i {
        font-size: 20px;
      }
    }
    .heart {
      cursor: pointer;
      border: 1px solid #c8a472;
      padding: 6px;
      border-radius: 50%;
      color: #c8a472;
      &:hover,
      &.active {
        background-color: #c8a472;
        color: #fff;
      }
      i {
        font-size: 20px;
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
        position: sticky;
        top: 106px;
        left: 0;
        // border: 1px solid #c8a472;
        // box-shadow: 1px 1px 1px #927853;
        display: block;
        border-radius: 4px;
        // overflow: hidden;
      }
      li {
        // border-bottom: 1px solid #c8a472;
        margin-bottom: 8px;
        text-align: center;
        // &:last-child {
        //   border-bottom: 0;
        // }
        // a {
        //   border: 0;
        //   box-shadow: none;
        //   border-radius: 0px;
        //   padding: 12px;

        //   &.active,
        //   &:hover {
        //     border: none;
        //     border-radius: 0px;
        //   }
        // }
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
// import ToastMessages from "@/components/ToastMessages.vue";
import { mapState, mapActions } from "pinia";
import productStore from "@/stores/productStore";
import cartStore from "@/stores/cartStore";
import statusStore from "@/stores/statusStore";
import localFavorite from "@/mixins/localFavorite";
import Pagination from "@/components/Pagination.vue";

import AOS from "aos";
import "aos/dist/aos.css";

export default {
  components: {
    // ToastMessages,
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
    ...mapState(productStore, ["products"]),
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
    
    category(category) {
      this.$router.push({ name: "products", query: { category: category } });
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
    AOS.init({});
  },
};
</script>
