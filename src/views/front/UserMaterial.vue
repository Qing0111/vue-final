<!-- eslint-disable vue/multi-word-component-names -->
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
  <main class="container-md checkout">
    <process></process>
    <section class="row">
      <section class="col-md-6" v-if="cart.total">
        <!-- 購物車列表 -->
        <div class="table-responsive">
          <table class="table">
            <thead class="">
              <tr>
                <th colspan="3" class="py-3 fs-5">訂單明細</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="cart">
                <tr v-for="item in cart.carts" :key="item.id">
                  <td class="d-lg-flex align-items-center gap-1">
                      <img
                        :src="item.product.imageUrl"
                        alt="產品圖"
                        width="100"
                        height="100"
                        style="object-fit: cover"
                      />
                    <p>
                      {{ item.product.title }}
                    </p>
                  </td>
                  <td class="align-middle">
                    <p>{{ item.qty }}/{{ item.product.unit }}</p>
                  </td>
                  <td class="align-middle">
                    NT$ {{ $filters.currency(item.final_total) }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">
                  <p class="my-3">
                    小計:
                    <span class="ms-3"
                      >NT$ {{ $filters.currency(cart.total) }}</span
                    >
                  </p>
                  <p class="mb-3">
                    折扣金額:
                    <span class="ms-3"
                      >NT$
                      {{
                        $filters.currency(cart.final_total - cart.total)
                      }}</span
                    >
                  </p>
                  <p class="mb-3">
                    總計:
                    <span class="ms-3"
                      >NT$ {{ $filters.currency(cart.total) }}</span
                    >
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <!-- 表單 -->
      <section class="col-md-6">
        <div class="row justify-content-center">
          <Form class="col-md-10" v-slot="{ errors }" @submit="createOrder">
            <h2 class="fs-5">收件人資料</h2>
            <div class="my-3 px-2">
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
              <ErrorMessage
                name="email"
                class="invalid-feedback"
              ></ErrorMessage>
            </div>

            <div class="mb-3 px-2">
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

            <div class="mb-3 px-2">
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

            <div class="mb-3 px-2">
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

            <div class="mb-3 px-2">
              <label for="message" class="form-label">備註</label>
              <textarea
                name=""
                id="message"
                class="form-control"
                cols="30"
                rows="5"
                v-model="form.message"
              ></textarea>
            </div>
            <div class="d-flex justify-content-between px-2">
              <a href="#/cart" class="btn btn-yellow-deep text-white">上一步</a>
              <button class="btn btn-yellow text-white">送出訂單</button>
            </div>
          </Form>
        </div>
      </section>
    </section>
  </main>
</template>

<style lang="scss">
.checkout {
  padding: 60px 20px;
  min-height: calc(100vh - 158px);
  table {
    // border: 1px solid #54433c;
    thead {
      tr {
        border-bottom: 2px solid #54433c;
        // border-bottom: 1px solid #54433c;
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid #54433c;
      }
    }
  }

  Form {
    h2 {
      padding: 16px 8px;
      border-bottom: 2px solid #54433c;
    }
    input,
    textarea {
      box-shadow: 1px 1px 0px 1px rgba(0, 0, 0, 0.4) inset;
      // border-radius: 8px;
    }
  }
}
</style>

<script>
import process from "@/components/ShopProcess.vue";
import { mapState, mapActions } from "pinia";
import cartStore from "@/stores/cartStore";
import statusStore from "@/stores/statusStore";

export default {
  components: {
    process,
  },
  data() {
    return {
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
    ...mapState(statusStore, ["isLoading"]),
  },
  methods: {
    ...mapActions(cartStore, ["getCart"]),

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
  mounted() {
    this.getCart();
  },
};
</script>
