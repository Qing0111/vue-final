<template>
  <Navbar></Navbar>
  <article class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </article>
  <div class="container">
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
            <div class="card">
              <img
                :src="item.imageUrl"
                class="card-img-top"
                alt="圖片"
                style="height: 240px"
              />
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
                    :disabled="status.loadingItem == item.id"
                  >
                    <span
                      class="spinner-grow spinner-grow-sm text-danger"
                      role="status"
                      v-if="status.loadingItem == item.id"
                    >
                    </span>
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table class="table align-middle">
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td style="width: 200px">
                <div
                  style="
                    height: 100px;
                    background-size: cover;
                    background-position: center;
                  "
                  :style="{ backgroundImage: `url(${item.imageUrl})` }"
                ></div>
              </td>
              <td>
                <a href="#" class="text-dark">{{ item.title }}</a>
              </td>
              <td>
                <div class="h5" v-if="!item.price">
                  {{ item.origin_price }} 元
                </div>
                <del class="h6" v-if="item.price"
                  >原價 {{ item.origin_price }} 元</del
                >
                <div class="h5" v-if="item.price">
                  現在只要 {{ item.price }} 元
                </div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
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
                    :disabled="status.loadingItem == item.id"
                  >
                    <span
                      class="spinner-grow spinner-grow-sm text-danger"
                      role="status"
                      v-if="status.loadingItem == item.id"
                    >
                    </span>
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
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
</style>

<script>
import emitter from "@/methods/emitter";
import ToastMessages from "@/components/ToastMessages.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    ToastMessages,
    Navbar
  },
  provide() {
    return {
      emitter,
    };
  },
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: "",
      },
      isLoading: false,
      cart: {},
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        console.log("products:", response);
        this.isLoading = false;
      });
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    addToCart(id) {
      console.log(id);
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(url, { data: cart }).then((res) => {
        this.status.loadingItem = "";
        this.$httpMessageState(res, "加入購物車");
        console.log(res);
        this.getCart();
      });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        console.log(res.data.data);
        this.cart = res.data.data;
        this.isLoading = false;
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
