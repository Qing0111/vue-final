<template>
  <main class="container">
    <section class="favorite" v-if="favoriteProduct.length">
      <template v-for="(item, key) in favoriteProduct" :key="key">
        <div class="card-favorite">
          <div class="pic">
            <img :src="item.product.imageUrl" alt="產品圖片" />
          </div>
          <article class="content">
            <h3>{{ item.product.title }}</h3>
            <p>{{ item.product.origin_price }}元</p>
            <button
              class="btn btn-yellow text-white"
              @click="addToCart(item.product.id)"
            >
              加到購物車
            </button>
          </article>
          <div
            class="cross"
            @click="removeFavoriteProduct(item.product.id, key)"
          >
            <i class="bi bi-x-lg"></i>
          </div>
        </div>
      </template>
    </section>
    <section
      class="empty-cart d-flex justify-content-center align-items-center"
      v-else
    >
      <article class="h-100">
        <h2>目前您的收藏沒有任何商品!</h2>
        <a href="#/Products" class="btn btn-yellow text-white">繼續購物</a>
      </article>
    </section>
  </main>
</template>

<style lang="scss">
.favorite {
  padding: 60px 20px;
  min-height: calc(100vh - 158px);
  .card-favorite {
    border: none;
    margin-bottom: 20px;
    position: relative;
    .pic {
      height: 200px;
      border-radius: 24px;
      overflow: hidden;
      margin-bottom: 12px;
      img {
        width: 100%;
        height: 100%;
        vertical-align: bottom;
        object-fit: cover;
      }
    }
    .content {
      padding: 0 8px;
      h3 {
        margin-bottom: 12px;
        font-size: 20px;
      }
      p {
        margin-bottom: 8px;
      }
    }
    .cross {
      position: absolute;
      top: 0;
      // left: 87%;
      right: 1%;
      font-size: 48px;
      cursor: pointer;
    }
    &::after {
      content: "";
      margin-top: 12px;
      border-bottom: 1px solid #000;
    }
  }
}
@media (min-width: 768px) {
  .favorite {
    padding: 60px 5%;

    .card-favorite {
      display: flex;
      .pic {
        width: 40%;
        // height: 100%;
        margin-bottom: 0;
      }
      .content {
        padding: 12px 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .cross {
        right: 10%;
      }
    }
  }
}

.empty-cart {
  min-height: calc(100vh - 158px);
  text-align: center;
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  a {
  }
}
</style>

<script>
import { mapState, mapActions } from "pinia";
import productStore from "@/stores/productStore";
import cartStore from "@/stores/cartStore";
import statusStore from "@/stores/statusStore";
import localFavorite from "@/mixins/localFavorite";

export default {
  data() {
    return {
      favoriteItems: this.getLocalFavorite() || [],
      favoriteProduct: [],
    };
  },
  mixins: [localFavorite],
  computed: {
    ...mapState(productStore, ["products", "pagination"]),
    ...mapState(cartStore, ["cart"]),
    ...mapState(statusStore, ["isLoading", "cartLoading"]),
  },
  methods: {
    ...mapActions(productStore, ["getProducts"]),
    ...mapActions(cartStore, ["addToCart", "getCart"]),

    getFavoriteProduct() {
      // this.favoriteItems = this.getLocalFavorite();
      if (this.favoriteItems) {
        this.favoriteItems.forEach((item) => {
          const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${item}`;
          // console.log(url);
          this.$http.get(url).then((res) => {
            this.favoriteProduct.push(res.data);
            // console.log(res.data);
          });
        });
      }
    },
    removeFavoriteProduct(id, key) {
      console.log(this.favoriteItems.indexOf(id));
      this.toggleFavorite(id);
      this.favoriteProduct.splice(key, 1);
    },
  },
  created() {
    // this.getProducts();
    this.getCart();
    this.getFavoriteProduct();
  },
};
</script>
