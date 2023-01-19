<template>
  <main class="container">
    <section v-for="(item, key) in favoriteProduct" :key="key">
      <div class="card-favorite">
        <div class="pic">
          <img :src="item.product.imageUrl" alt="產品圖片" />
        </div>
        <article class="content">
          <h3>{{ item.product.title }}</h3>
          <p>{{ item.product.origin_price }}元</p>
          <button
            class="btn btn-outline-danger"
            @click="addToCart(item.product.id)"
          >
            加到購物車
          </button>
        </article>
        <div class="cross" @click="removeFavoriteProduct(item.product.id, key)">
          <i class="bi bi-x-lg"></i>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss">
.card-favorite {
  border: none;
  margin-bottom: 20px;
  position: relative;
  .pic {
    height: 200px;
    border-radius: 24px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      vertical-align: bottom;
      object-fit: cover;
    }
  }
  .content {
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
    right: 1%;
    font-size: 40px;
  }
  &::after {
    content: "";
    margin-top: 12px;
    border-bottom: 1px solid #000;
  }
}
@media (min-width: 576px) {
  .card-favorite {
    display: flex;
    padding: 0 10%;
    .pic {
      width: 40%;
      // height: 100%;
    }
    .content {
      padding: 12px 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .cross {
      right: 10%;
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
      this.favoriteItems = this.getLocalFavorite();
      // console.log(this.favoriteItems);
      if (this.favoriteItems) {
        this.favoriteItems.forEach((item) => {
          const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${item}`;
          // console.log(url);
          this.$http.get(url).then((res) => {
            this.favoriteProduct.push(res.data);
            console.log(res.data);
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
