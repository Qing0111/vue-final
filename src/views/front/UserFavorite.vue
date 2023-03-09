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
  <main class="container-md">
    <transition name="switch" mode="out-in">
      <section class="favorite" v-if="favoriteProduct.length">
        <nav aria-label="breadcrumb tabs">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/" class="text-decoration-none text-dark"
                >首頁</router-link
              >
            </li>
            <li class="breadcrumb-item active" aria-current="page">我的收藏</li>
            <li class="ms-auto">
              <a href="#" class="text-yellow" @click.prevent="openDelModal()"
                >清除全部</a
              >
            </li>
          </ol>
        </nav>
        <ul>
          <li
            class="card-favorite"
            v-for="(item, key) in favoriteProduct"
            :key="key"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="800"
            data-aos-offset="0"
          >
            <div
              class="pic"
              @click="getProduct(item.product.id, item.product.title)"
            >
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
          </li>
        </ul>
      </section>
      <section
        class="empty-cart d-flex justify-content-center align-items-center"
        v-else
      >
        <article class="h-100">
          <h2>目前您的收藏沒有任何商品!</h2>
          <router-link
            to="/products?category=全部"
            class="btn btn-yellow text-white"
            >來去購物</router-link
          >
        </article>
      </section>
    </transition>
  </main>
  <DelModal ref="delModal" @del-item="clearLocal"></DelModal>
</template>

<style lang="scss">
.favorite {
  padding: 60px 20px;
  min-height: calc(100vh - 158px);
  .tabs {
    ol li {
      padding: 0;
    }
  }
  .card-favorite {
    border: none;
    margin-bottom: 40px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -20px;
      width: 100%;
      height: 1px;
      background-color: #000;
    }
    &:last-child::after {
      width: 0;
      height: 0;
    }

    .pic {
      height: 200px;
      border-radius: 24px;
      overflow: hidden;
      margin-bottom: 12px;
      cursor: pointer;
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
        margin-bottom: 24px;
      }
    }
    .cross {
      position: absolute;
      top: 0;
      right: 1%;
      font-size: 48px;
      cursor: pointer;
      color: #9e805a;
    }
    &::after {
      content: "";
      margin-top: 12px;
      border-bottom: 1px solid #000;
    }
  }
}
.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.switch-enter-active,
.switch-leave-active {
  transition: transform 0.5s ease, opacity 0.6s;
}
@media (min-width: 768px) {
  .favorite {
    padding: 60px 5%;

    .card-favorite {
      display: flex;
      .pic {
        width: 40%;
        margin-bottom: 0;
      }
      .content {
        padding: 12px 60px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .cross {
        right: 0;
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
}
</style>

<script>
import { mapState, mapActions } from "pinia";
import cartStore from "@/stores/cartStore";
import statusStore from "@/stores/statusStore";
import localFavorite from "@/mixins/localFavorite";
import emitter from "@/methods/emitter";
import DelModal from "@/components/DelModal.vue";

import AOS from "aos";
import "aos/dist/aos.css";

export default {
  components: {
    DelModal,
  },
  data() {
    return {
      favoriteItems: this.getLocalFavorite() || [],
      favoriteProduct: [],
    };
  },
  mixins: [localFavorite],
  computed: {
    ...mapState(cartStore, ["cart"]),
    ...mapState(statusStore, ["isLoading", "cartLoading"]),
  },
  methods: {
    ...mapActions(cartStore, ["addToCart", "getCart"]),

    getFavoriteProduct() {
      if (this.favoriteItems) {
        this.favoriteItems.forEach((item) => {
          const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${item}`;
          this.$http.get(url).then((res) => {
            this.favoriteProduct.push(res.data);
            // console.log(res.data);
          });
        });
      }
    },
    getProduct(id, name) {
      this.$router.push({
        name: "product",
        params: { product: id },
        query: { name: name },
      });
    },
    removeFavoriteProduct(id, key) {
      this.toggleFavorite(id);
      this.favoriteProduct.splice(key, 1);
    },
    openDelModal() {
      this.$refs.delModal.showModal();
    },
  },
  created() {
    this.getCart();
    this.getFavoriteProduct();
    emitter.on("updateFavorite", () => {
      this.favoriteItems = this.getLocalFavorite();
    });
    AOS.init({});
  },
};
</script>
