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
  <main class="container-md user-checkout">
    <process :itemId="orderId"></process>
    <section class="row justify-content-center check">
      <form class="col-md-6" @submit.prevent="payOrder">
        <table class="table align-middle">
          <thead class="bg-brown-deep text-white">
            <th class="p-2">品名</th>
            <th class="p-2">數量</th>
            <th class="p-2">金額</th>
          </thead>
          <tbody>
            <tr v-for="item in order.products" :key="item.id">
              <td>{{ item.product.title }}</td>
              <td>{{ item.qty }}/{{ item.product.unit }}</td>
              <td class="">NT$ {{ item.final_total }}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-end"></td>
              <td class="text-end">總計: NT$ {{ order.total }}</td>
            </tr>
          </tfoot>
        </table>

        <table class="table">
          <tbody>
            <tr>
              <th>訂單編號</th>
              <td>{{ order.id }}</td>
            </tr>
            <tr>
              <th width="100">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th>姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th>收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th>收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-end" v-if="order.is_paid === false">
          <button class="btn btn-outline-brown-deep">確認付款去</button>
        </div>
      </form>
    </section>
  </main>
</template>

<style lang="scss">
.user-checkout {
  min-height: calc(100vh - 158px);
  padding: 60px 20px;
  .check {
    form {
      .table {
        margin-bottom: 28px;
      }
      tr {
        border-bottom: 1px solid #000;
        td {
          padding: 16px 8px;
        }
      }
    }
  }
}
</style>

<script>
import process from "@/components/Process.vue";
import { mapState, mapActions } from "pinia";
import productStore from "@/stores/productStore";
import cartStore from "@/stores/cartStore";
import statusStore from "@/stores/statusStore";

export default {
  components: {
    process,
  },
  data() {
    return {
      order: {
        user: {},
      },
      orderId: "",

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

    getOrder() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          console.log(res.data.order);
          this.order = res.data.order;
          this.orderId = res.data.order.id;
        }
      });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(url).then((res) => {
        console.log(res);
        if (res.data.success) {
          this.getOrder();
        }
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
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
