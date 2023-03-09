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
  <main class="container-md order-completed">
    <process :orderId="orderId"></process>
    <section class="row justify-content-center finish">
      <h2 class="fs-4 f-bold text-center mb-5">
        您的購買已完成，感謝您的購買!
      </h2>
      <form class="col-md-6" @submit.prevent="payOrder">
        <table class="table mb-0">
          <thead class="bg-brown-deep text-white">
            <th class="px-2 py-3" width="32%">訂單資訊</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td>訂單編號</td>
              <td>{{ order.id }}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <td>姓名</td>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <td>收件人電話</td>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <td>收件人地址</td>
              <td>
                {{ order.user.address }}
              </td>
            </tr>
            <tr class="border-0">
              <th>付款狀態</th>
              <td>
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table class="table">
          <thead class="bg-brown-deep text-white">
            <th class="px-2 py-3" width="32%">購買項目</th>
            <th colspan="2"></th>
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
              <td class="">訂單金額</td>
              <td class="">NT$ {{ order.total }}</td>
            </tr>
          </tfoot>
        </table>
        <article class="d-flex justify-content-between">
          <a href="#/" class="btn btn-yellow-deep text-white">回到首頁</a>
          <a href="#/products?category=全部" class="btn btn-yellow text-white"
            >繼續購物</a
          >
        </article>
      </form>
    </section>
  </main>
</template>

<style lang="scss">
.order-completed {
  padding: 60px 20px;
  min-height: calc(100vh - 158px);
  .finish {
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
import process from "@/components/ShopProcess.vue";

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
      isLoading: false,
    };
  },

  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.isLoading = false;
          console.log(res.data.order);
          this.order = res.data.order;
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
