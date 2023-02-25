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
  <main class="container-md back">
    <section class="order mb-4">
      <table class="table table-hover">
        <thead class="table-brown-deep">
          <tr>
            <th class="py-3">購買時間</th>
            <th class="py-3">Email</th>
            <th class="py-3">購買款項</th>
            <th class="py-3">應付金額</th>
            <th class="py-3">是否付款</th>
            <th class="py-3">編輯</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, key) in orders" :key="key">
            <tr
              v-if="orders.length"
              :class="{ 'text-secondary': !item.is_paid }"
              style="border-bottom: 1px solid #000"
            >
              <td>{{ $filters.date(item.create_at) }}</td>
              <td><span v-text="item.user.email" v-if="item.user"></span></td>
              <td>
                <ul class="list-unstyled">
                  <li v-for="(product, i) in item.products" :key="i">
                    {{ product.product.title }} 數量：{{ product.qty }}
                    {{ product.product.unit }}
                  </li>
                </ul>
              </td>
              <td class="text-right">{{ item.total }}</td>
              <td>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`paidSwitch${item.id}`"
                    v-model="item.is_paid"
                    @change="updatePaid(item)"
                  />
                  <label class="form-check-label" :for="`paidSwitch${item.id}`">
                    <span v-if="item.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </label>
                </div>
              </td>
              <td>
                <div class="btn-group">
                  <button
                    class="btn btn-outline-primary btn-sm"
                    @click="openModal(false, item)"
                  >
                    檢視
                  </button>
                  <button
                    class="btn btn-outline-danger btn-sm"
                    @click="openDelOrderModal(item)"
                  >
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </section>
    <OrderModal
      :order="tempOrder"
      ref="orderModal"
      @update-order="updatePaid"
    ></OrderModal>
    <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
    <Pagination :pages="pagination" @emit-pages="getOrders"></Pagination>
  </main>
</template>

<style lang="scss">
.order {
  width: 100%;
  // overflow-y: hidden;
  overflow-x: auto;
  // -webkit-overflow-scrolling: touch;
  .table {
    min-width: 800px;
    // margin-bottom: 0;
    // max-width: none;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparentize(#ccc, 0.7);
    box-shadow: inset 1px 1px 0 1px #ccc;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: transparentize(rgb(223, 223, 223), 0.5);
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
}
</style>

<script>
import OrderModal from "@/components/OrderModal.vue";
import DelModal from "@/components/DelModal.vue";
import Pagination from "@/components/Pagination.vue";
import { mapActions } from "pinia";
import statusStore from "@/stores/statusStore";

export default {
  data() {
    return {
      orders: {},
      isNew: false,
      isLoading: false,
      pagination: {},
      tempOrder: {},
      currentPage: 1,
    };
  },
  components: {
    Pagination,
    DelModal,
    OrderModal,
  },
  computed: {
    // ...mapState(statusStore, ["isLoading", "cartLoading"]),
  },
  methods: {
    ...mapActions(statusStore, ["pushMessage"]),

    getOrders(currentPage = 1) {
      this.currentPage = currentPage;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${currentPage}`;
      this.isLoading = true;
      this.$http.get(url, this.tempProduct).then((res) => {
        this.orders = res.data.orders;
        this.pagination = res.data.pagination;
        this.isLoading = false;
        console.log(res);
      });
    },
    openModal(isNew, item) {
      this.tempOrder = { ...item };
      this.isNew = false;
      this.$refs.orderModal.showModal();
    },
    openDelOrderModal(item) {
      this.tempOrder = { ...item };
      this.$refs.delModal.showModal();
    },
    updatePaid(item) {
      // this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      const paid = {
        is_paid: item.is_paid,
      };
      this.$http.put(api, { data: paid }).then((res) => {
        // this.isLoading = false;
        this.getOrders(this.currentPage);
        this.$refs.orderModal.hideModal();
        this.pushMessage(res.data.success, { title: "編輯" });
      });
    },
    delOrder() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((res) => {
        console.log(res);
        this.$refs.delModal.hideModal();
        this.pushMessage(res.data.success, { title: "刪除" });
        this.getOrders(this.currentPage);
      });
    },
  },
  created() {
    this.getOrders();
    // console.log(process.env.VUE_APP_API);
  },
};
</script>
