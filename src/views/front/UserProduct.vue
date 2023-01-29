<template>
  <Loading :active="isLoading">
    <div class="loadingio-spinner-double-ring-juf8237g2sc">
      <div class="ldio-1prs6fceeog">
        <div></div>
        <div></div>
        <div><div></div></div>
        <div><div></div></div>
      </div>
    </div>
  </Loading>
  <main class="container-md user-product">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/products" class="text-decoration-none text-dark"
            >首頁</router-link
          >
        </li>
        <li class="breadcrumb-item">
          <router-link
            :to="`/products?category=${product.category}`"
            class="text-decoration-none text-dark"
            >{{ product.category }}</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <section class="row justify-content-center product-detail">
      <article class="col-md-6 mb-3">
        <!-- <img :src="product.imageUrl" alt="商品圖" class="img-fluid mb-3" /> -->
        <swiper
          ref="{swiperRef}"
          :slidesPerView="1"
          :spaceBetween="10"
          :thumbs="{ swiper: thumbsSwiper }"
          class="mySwiper2"
        >
          <swiper-slide>
            <img :src="product.imageUrl" alt="商品圖" class="img-fluid" />
          </swiper-slide>
          <template v-for="(item, key) in product.imagesUrl" :key="key">
            <swiper-slide>
              <img :src="item" alt="商品圖" />
            </swiper-slide>
          </template>
        </swiper>
        <swiper
          ref="{swiperRef}"
          @swiper="setThumbsSwiper"
          :slidesPerView="4"
          :spaceBetween="4"
          :navigation="true"
          :watchSlidesProgress="true"
          class="mySwiper"
        >
          <swiper-slide>
            <img :src="product.imageUrl" alt="商品圖" class="img-fluid" />
          </swiper-slide>
          <template v-for="(item, key) in product.imagesUrl" :key="key">
            <swiper-slide>
              <img :src="item" alt="商品圖" />
            </swiper-slide>
          </template>
        </swiper>
      </article>
      <article class="col-md-6">
        <h5 class="h3 mb-1">{{ product.category }}</h5>
        <h2 class="h1 fs-3 mb-3 text-brown-deep">{{ product.title }}</h2>
        <p class="h5 fs-4" v-if="product.price == product.origin_price">
          NT$ {{ product.origin_price }} 元
        </p>
        <article class="d-flex fs-5 gap-1 mb-4">
          <p class="h5" v-if="product.price !== product.origin_price">
            NT$ {{ product.price }} 元
          </p>
          <del
            class="h6 text-muted align-self-end"
            style="font-size: 14px"
            v-if="product.price !== product.origin_price"
            >NT$ {{ product.origin_price }} 元</del
          >
        </article>

        <article class="mb-4">
          <!-- <p>{{ product.content }}</p> -->
          <p class="description">
            {{ product.description }}
          </p>
        </article>
        <article class="">
          <div class="input-group mb-3">
            <button
              type="button"
              class="btn btn-yellow-deep text-white fs-5"
              @click="reduce"
            >
              -
            </button>
            <input
              type="number"
              class="form-control text-center"
              min="1"
              v-model.number="num"
            />
            <button
              type="button"
              class="btn btn-yellow-deep text-white fs-5"
              @click="add"
            >
              +
            </button>
          </div>
          <article class="d-flex align-items-center gap-3">
            <button
              type="button"
              class="btn btn-yellow text-white w-50"
              @click="addToCart(product.id, num)"
            >
              加入購物車
            </button>
            <button
              type="button"
              class="heart btn w-50"
              @click="toggleFavorite(id)"
              :class="{ active: favoriteItems.includes(product.id) }"
            >
              <i
                class="bi bi-suit-heart-fill"
                v-if="favoriteItems.includes(product.id)"
              ></i>
              <i class="bi bi-suit-heart" v-else></i
              ><span class="ms-1">加入收藏</span>
            </button>
          </article>
        </article>
      </article>
    </section>
    <section class="related-products">
      <h2>您可能會感興趣的商品</h2>
      <swiper
        ref="{swiperRef}"
        :slidesPerView="1"
        :spaceBetween="30"
        :navigation="true"
        :breakpoints="{ 768: { slidesPerView: 3 } }"
        class="mySwiper"
      >
        <template v-for="(item, key) in filterData" :key="key">
          <swiper-slide>
            <article class="card product-card">
              <router-link :to="`/product/${item.id}`">
                <div class="pic">
                  <img :src="item.imageUrl" class="card-img-top" alt="圖片" />
                </div>
              </router-link>

              <div class="card-body">
                <h5 class="card-title fs-5">
                  {{ item.title }}
                </h5>
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
          </swiper-slide>
        </template>
      </swiper>
    </section>
  </main>
</template>

<style lang="scss">
.user-product {
  padding: 60px 20px;
  min-height: calc(100vh - 158px);
  .product-detail {
    margin-bottom: 52px;
    img {
      width: 100%;
      height: 320px;
      object-fit: cover;
    }
    .mySwiper {
      .swiper-slide {
        width: 80px !important;
        img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          cursor: pointer;
        }
      }
    }
    .description {
      word-break: keep-all;
      word-wrap: break-word;
      line-height: 1.5;
    }
    input[type="number"] {
      -moz-appearance: textfield;
      box-shadow: inset 1px 1px 1px rgb(236, 236, 236);
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .heart {
      cursor: pointer;
      border: 1px solid #c8a472;
      padding: 6px;
      // border-radius: 4px;
      color: #c8a472;
      &:hover,
      &.active {
        background-color: #c8a472;
        color: #fff;
      }
      i {
        font-size: 16px;
      }
    }
  }

  .related-products {
    h2 {
      font-size: 24px;
      color: #54433c;
      text-align: center;
      margin-bottom: 28px;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        bottom: -14px;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #54433c;
      }
    }

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
          height: 200px;
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

    .swiper-button-prev,
    .swiper-button-next {
      &::after {
        color: rgb(233, 191, 132, 0.7);
        background-color: rgba(0, 0, 0, 0.3);
        padding: 12px;
      }
    }
  }
}

@media (min-width: 768px) {
  .user-product {
    .product-detail {
      .mySwiper .swiper-slide {
        width: 100px !important;
        img {
          width: 100px;
          height: 100px;
        }
      }
    }

    .related-products {
      .product-card {
        .pic {
          &::after {
            content: "";
            clip-path: circle(300px at center);
            transition: clip-path 0.3s;
          }
          img {
            height: 240px;
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
import { mapState, mapActions } from "pinia";
import productStore from "@/stores/productStore";
import cartStore from "@/stores/cartStore";
import statusStore from "@/stores/statusStore";
import localFavorite from "@/mixins/localFavorite";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import SwiperCore, { Pagination, Navigation, Thumbs } from "swiper/core";

SwiperCore.use([Pagination, Navigation, Thumbs]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      product: {},
      id: "",
      num: 1,
      favoriteItems: this.getLocalFavorite() || [],
      thumbsSwiper: "",
    };
  },
  mixins: [localFavorite],
  computed: {
    ...mapState(productStore, ["products"]),
    ...mapState(cartStore, ["cart"]),
    ...mapState(statusStore, ["isLoading", "cartLoading"]),

    filterData() {
      let filterValue = [];
      filterValue = this.products.filter(
        (item) =>
          item.category == this.product.category &&
          item.title !== this.product.title
      );
      return filterValue;
    },
  },
  methods: {
    ...mapActions(productStore, ["getProducts"]),
    ...mapActions(cartStore, [
      "addToCart",
      "getCart",
      "updateCart",
      "removeCartItem",
    ]),

    getProduct() {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      // this.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        // this.isLoading = false;
        if (response.data.success) {
          this.product = response.data.product;
        }
      });
    },
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    reduce() {
      if (this.num > 1) {
        this.num--;
      }
    },
    add() {
      this.num++;
    },
    // addToCart(id, qty = 1) {
    //   const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
    //   const cart = {
    //     product_id: id,
    //     qty,
    //   };
    //   this.isLoading = true;
    //   this.$http.post(url, { data: cart }).then((res) => {
    //     this.isLoading = false;
    //     console.log(res);
    //     this.$httpMessageState(res, "加入購物車");
    //     this.$router.push("/user/cart");
    //   });
    // },
  },
  watch: {
    $route() {
      this.id = this.$route.params.product;
      this.getProduct();
    },
  },
  created() {
    this.id = this.$route.params.product;
    // console.log(this.$route);
    this.getProduct();
    this.getProducts();
  },
};
</script>
