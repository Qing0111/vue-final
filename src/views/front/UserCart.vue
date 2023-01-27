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
              <th scope="col" width="34%">金額</th>
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
                  <input
                    type="number"
                    class="form-control"
                    min="1"
                    @change="updateCart(item, item.qty)"
                    :disabled="item.id == cartLoading"
                    v-model.number="item.qty"
                    style="width: 72px"
                  />
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
                  <button
                    type="button"
                    class="btn text-yellow"
                    :disabled="cartLoading === item.id"
                    @click="removeCartItem(item.id)"
                  >
                    <i class="bi bi-trash3"></i>
                  </button>
                </td>
              </tr>
            </template>
          </tbody>
          <tfoot>
            <tr>
              <!-- <td colspan="1" class="d-none d-sm-table-cell"></td> -->
              <td colspan="5"></td>
            </tr>
            <!-- <tr>
              <td colspan="" class="fw-bold">總計 :</td>
              <td class="">{{ $filters.currency(cart.total) }}</td>
            </tr> -->
            <!-- <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">
                {{ $filters.currency(cart.final_total) }}
              </td>
            </tr> -->
          </tfoot>
        </table>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            v-model="coupon_code"
            placeholder="請輸入優惠碼"
          />
          <div class="input-group-append">
            <button
              class="btn btn-yellow text-white rounded-0 rounded-end"
              type="button"
              @click="addCouponCode"
            >
              套用優惠碼
            </button>
          </div>
        </div>
        <article class="d-flex align-items-end flex-column mt-5 gap-3">
          <p>小計: NT$ {{ $filters.currency(cart.total) }}</p>
          <p>
            折扣金額: NT$ {{ $filters.currency(cart.final_total - cart.total) }}
          </p>
        </article>
        <article class="d-flex justify-content-between mt-4">
          <a href="#/products?category=全部" class="btn btn-brown-deep"
            >繼續購物</a
          >
          <p class="fw-bold align-self-center fs-4">
            總計: NT$ {{ $filters.currency(cart.final_total) }}
          </p>
          <!-- <p class="fw-bold align-self-center fs-4" v-else>
            折價後: NT$ {{ $filters.currency(cart.final_total) }}
          </p> -->
          <a href="#/checkout" class="btn btn-outline-brown-deep">下一步</a>
        </article>
      </div>
    </section>
    <section
      class="empty-cart d-flex justify-content-center align-items-center"
      v-else
    >
      <article class="h-100">
        <h2>目前您的購物車沒有任何商品!</h2>
        <a href="#/products?category=全部" class="btn btn-yellow text-white"
          >來去購物</a
        >
      </article>
    </section>
    <!-- 表單 -->
    <!-- <div class="my-5 row justify-content-center">
      <Form class="col-md-6" v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            rules="required"
            v-model="form.user.tel"
          ></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </Form>
    </div> -->
  </main>
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

.empty-cart {
  min-height: calc(100vh - 414px);
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
import productStore from "@/stores/productStore";
import cartStore from "@/stores/cartStore";
import statusStore from "@/stores/statusStore";
import process from "@/components/Process.vue";

export default {
  components: {
    process,
  },
  data() {
    return {
      product: {},
      // status: {
      //   loadingItem: "",
      // },

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
    ...mapState(productStore, ["sortProducts"]),
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

    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },

    addCouponCode() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      // this.isLoading = true;
      this.$http.post(url, { data: coupon }).then((res) => {
        // this.isLoading = false;
        console.log(res);
        this.getCart();
      });
    },
    createOrder() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order }).then((res) => {
        console.log(res.data.orderId);
        this.getCart();
        this.$router.push(`/checkout/${res.data.orderId}`);
      });
    },
  },
  created() {
    this.getCart();
    this.getProducts();
  },
};
</script>
