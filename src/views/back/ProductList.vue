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
  <main class="back container-md">
    <div class="text-end">
      <button
        class="btn btn-yellow text-white"
        type="button"
        @click="openModal(true)"
      >
        增加一個產品
      </button>
    </div>
    <section class="product-list scroll-inner mb-4">
      <table class="table table-hover mt-4">
        <thead class="table-brown-deep">
          <tr>
            <th class="py-3" width="120">分類</th>
            <th class="py-3">產品名稱</th>
            <th class="py-3" width="120">原價</th>
            <th class="py-3" width="120">售價</th>
            <th class="py-3" width="100">是否啟用</th>
            <th class="py-3" width="200">編輯</th>
          </tr>
        </thead>
        <tbody class="">
          <tr
            v-for="(item, index) in products"
            :key="item.id"
            style="border-bottom: 1px solid #000"
          >
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-right">
              {{ $filters.currency(item.origin_price) }}
            </td>
            <td class="text-right">{{ $filters.currency(item.price) }}</td>
            <td>
              <span class="text-success" v-if="item.is_enabled">啟用</span>
              <span class="text-muted" v-else>未啟用</span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="openModal(false, item)"
                >
                  編輯
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  @click="delModal(item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
    <ProductModal
      ref="productModal"
      :product="tempProduct"
      @update-product="updateProduct"
    ></ProductModal>
    <DelModal
      ref="DelModal"
      :item="tempProduct"
      @del-item="delProduct"
    ></DelModal>
  </main>
</template>

<style lang="scss">
.product-list {
  width: 100%;
  overflow-x: auto;
  // -webkit-overflow-scrolling: touch;
  .table {
    min-width: 760px;
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
import ProductModal from "@/components/ProductModal.vue";
import DelModal from "@/components/DelModal.vue";
import Pagination from "@/components/Pagination.vue";
import { mapState, mapActions } from "pinia";
import statusStore from "@/stores/statusStore";

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  inject: ["emitter"],
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  computed: {
    // ...mapState(statusStore, ["isLoading", "cartLoading"]),
  },
  methods: {
    ...mapActions(statusStore, ["pushMessage"]),

    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        // console.log(res.data);
        this.isLoading = false;
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    delModal(item) {
      this.tempProduct = { ...item };
      this.$refs.DelModal.showModal();
    },
    delProduct() {
      console.log(this.tempProduct);
      const api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.isLoading = true;
      this.$http.delete(api).then((res) => {
        this.isLoading = false;
        this.$refs.DelModal.hideModal();
        this.getProducts();
        this.pushMessage(res.data.success, { title: "刪除" });
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      this.$refs.productModal.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      // 新增
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = "post";

      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = "put";
      }
      this.isLoading = true;
      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        // console.log(res);
        this.isLoading = false;
        this.$refs.productModal.hideModal();
        this.getProducts();
        this.pushMessage(res.data.success, { title: "編輯" });
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
