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
  <main class="container-md user-cart">
    <process></process>
    <section class="mt-4" v-if="cart.total">
      <!-- 購物車列表 -->
      <div class="table-responsive">
        <table class="table">
          <thead class="bg-brown-deep text-white">
            <tr class="">
              <th scope="col" class="py-3" width="10%">圖片</th>
              <th scope="col" width="30%">商品名稱</th>
              <th scope="col" width="16%">數量</th>
              <th scope="col" width="36%">金額</th>
              <th scope="col" width="10%"></th>
            </tr>
          </thead>
          <tbody>
            <template v-if="cart">
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <a :href="`#/product/${item.product.id}`">
                    <img
                      :src="item.product.imageUrl"
                      alt="產品圖"
                      width="100"
                      height="100"
                      style="object-fit: cover"
                    />
                  </a>
                  <h2 class="d-sm-none mt-1">{{ item.product.title }}</h2>
                </td>
                <td class="align-middle d-none d-sm-table-cell">
                  {{ item.product.title }}
                  <!-- <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div> -->
                </td>
                <td class="align-middle">
                  <div class="d-flex count-group">
                    <button
                      type="button"
                      class="btn btn-light fs-5 rounded-0"
                      @click="updateCart(item, --item.qty)"
                      :disabled="item.id == cartLoading || item.qty <= 1"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      class="form-control text-center rounded-0"
                      min="1"
                      @change="updateCart(item, item.qty)"
                      :disabled="item.id == cartLoading"
                      v-model.number="item.qty"
                    />
                    <button
                      type="button"
                      class="btn btn-light fs-5 rounded-0"
                      @click="updateCart(item, ++item.qty)"
                      :disabled="item.id == cartLoading"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td class="align-middle">
                  <small
                    v-if="cart.final_total !== cart.total"
                    class="text-muted text-decoration-line-through d-block"
                    style="font-size: 14px"
                    >NT$ {{ $filters.currency(item.total) }}</small
                  >
                  NT$ {{ $filters.currency(item.final_total) }}
                </td>
                <td class="align-middle">
                  <a
                    href="#"
                    class="text-secondary"
                    :disabled="cartLoading === item.id"
                    @click.prevent="removeCartItem(item.id)"
                  >
                    <i class="bi bi-trash3"></i>
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <!-- <td colspan="1" class="d-none d-sm-table-cell"></td> -->
              <td colspan="5"></td>
            </tr>
          </tfoot>
        </table>
        <div class="d-sm-flex justify-content-center align-items-center gap-5">
          <button
            type="button"
            class="btn btn-brown text-white w-100 mb-3 mb-sm-0"
            @click="openDelModal"
          >
            清空購物車
          </button>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              v-model="coupon_code"
              placeholder="請輸入優惠碼"
            />
            <div class="input-group-append">
              <button
                class="btn btn-brown text-white rounded-0 rounded-end"
                type="button"
                @click="addCouponCode"
              >
                套用優惠碼
              </button>
            </div>
          </div>
        </div>
        <article class="d-flex align-items-end flex-column mt-5 gap-3">
          <p>小計: NT$ {{ $filters.currency(cart.total) }}</p>
          <p>
            折扣金額: NT$ {{ $filters.currency(cart.final_total - cart.total) }}
          </p>
        </article>
        <article class="d-flex justify-content-between mt-4">
          <a
            href="#/products?category=全部"
            class="btn btn-yellow-deep text-white"
            >繼續購物</a
          >
          <p class="fw-bold align-self-center fs-4">
            總計: NT$ {{ $filters.currency(cart.final_total) }}
          </p>
          <!-- <p class="fw-bold align-self-center fs-4" v-else>
            折價後: NT$ {{ $filters.currency(cart.final_total) }}
          </p> -->
          <a href="#/checkout" class="btn btn-yellow text-white">下一步</a>
        </article>
      </div>
    </section>
    <section class="empty-cart" v-else>
      <article class="">
        <h2>目前您的購物車沒有任何商品!</h2>
        <a href="#/products?category=全部" class="btn btn-yellow text-white"
          >來去購物</a
        >
      </article>
    </section>
  </main>
  <DelModal ref="delModal" @del-item="delAllCart"></DelModal>
</template>

<style lang="scss">
.user-cart {
  padding: 60px 20px;
  min-height: calc(100vh - 158px);
  table {
    // border: 1px solid #54433c;
    thead {
      display: none;
    }
    tbody {
      tr {
        border-bottom: 1px solid #54433c;
      }
    }
    .count-group {
      height: 32px;
      button {
        line-height: 10px;
        width: 24px;
        padding: 0px;
      }
      input[type="number"] {
        -moz-appearance: textfield;
        width: 40px !important;
        padding: 6px;
        box-shadow: inset 1px 1px 1px rgb(236, 236, 236);
      }
      input[type="number"]::-webkit-inner-spin-button,
      input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
  .empty-cart {
    min-height: calc(100vh - 600px);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    h2 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
}
@media (min-width: 768px) {
  .user-cart {
    table {
      .count-group {
        button {
          width: 32px;
          padding: 0px;
        }
        input[type="number"] {
          width: 60px !important;
          padding: 6px;
        }
      }
    }
  }
}
@media (min-width: 576px) {
  .user-cart {
    table {
      thead {
        display: table-header-group;
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
import process from "@/components/Process.vue";
import DelModal from "@/components/DelModal.vue";

export default {
  components: {
    process,
    DelModal,
  },
  data() {
    return {
      product: {},
      // status: {
      //   loadingItem: "",
      // },
      // isLoading: false,
      coupon_code: "",
      form: {
        user: {
          name: "",
          email: "",
          tel: "",
          address: "",
        },
        message: "",
      },
    };
  },
  computed: {
    ...mapState(cartStore, ["cart"]),
    ...mapState(statusStore, ["isLoading", "cartLoading"]),
  },
  methods: {
    ...mapActions(productStore, ["getProducts"]),
    ...mapActions(cartStore, [
      "addToCart",
      "getCart",
      "updateCart",
      "removeCartItem",
    ]),
    ...mapActions(statusStore, ["pushMessage"]),

    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    openDelModal() {
      this.$refs.delModal.showModal();
    },
    delAllCart() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(url).then((res) => {
        this.$refs.delModal.hideModal();
        this.pushMessage(res.data.success, { title: "清除" });
        this.getCart();
      });
    },
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(url, { data: coupon }).then((res) => {
        console.log(res);
        this.getCart();
      });
    },
  },
  created() {
    this.getCart();
    this.getProducts();
  },
};
</script>
