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
    <div class="text-end">
      <button class="btn btn-yellow text-white" @click="openCouponModal(true)">
        建立新的優惠券
      </button>
    </div>
    <section class="coupons mb-4">
      <table class="table table-hover mt-4">
        <thead class="bg-brown-deep text-white">
          <tr>
            <th class="py-3">名稱</th>
            <th class="py-3">折扣百分比</th>
            <th class="py-3">到期日</th>
            <th class="py-3">是否啟用</th>
            <th class="py-3">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, key) in coupons"
            :key="key"
            style="border-bottom: 1px solid #000"
          >
            <td>{{ item.title }}</td>
            <td>{{ item.percent }}%</td>
            <td>{{ $filters.date(item.due_date) }}</td>
            <td>
              <span v-if="item.is_enabled === 1" class="text-success"
                >啟用</span
              >
              <span v-else class="text-muted">未起用</span>
            </td>
            <td>
              <div class="btn-group">
                <button
                  class="btn btn-outline-primary btn-sm"
                  @click="openCouponModal(false, item)"
                >
                  編輯
                </button>
                <button
                  class="btn btn-outline-danger btn-sm"
                  @click="openDelCouponModal(item)"
                >
                  刪除
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <couponModal
      :coupon="tempCoupon"
      ref="couponModal"
      @update-coupon="updateCoupon"
    />
    <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon" />
    <Pagination :pages="pagination" @emit-pages="getCoupons"></Pagination>
  </main>
</template>

<style lang="scss">
.coupons {
  width: 100%;
  overflow-x: auto;
  .table {
    min-width: 500px;
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
import CouponModal from "@/components/CouponModal.vue";
import DelModal from "@/components/DelModal.vue";
import Pagination from "@/components/Pagination.vue";
import { mapActions } from "pinia";
import statusStore from "@/stores/statusStore";

export default {
  components: { CouponModal, DelModal, Pagination },
  props: {
    config: Object,
  },
  data() {
    return {
      coupons: {},
      tempCoupon: {},
      isLoading: false,
      isNew: false,
      pagination: {},
      currentPage: 1,
    };
  },
  methods: {
    ...mapActions(statusStore, ["pushMessage"]),

    openCouponModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupon = { ...item };
      }
      this.$refs.couponModal.showModal();
    },
    openDelCouponModal(item) {
      this.tempCoupon = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    getCoupons(currentPage = 1) {
      this.currentPage = currentPage;
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons?page=${currentPage}`;
      this.$http.get(url, this.tempProduct).then((res) => {
        this.coupons = res.data.coupons;
        this.pagination = res.data.pagination;
        this.isLoading = false;
        console.log(res);
      });
    },
    updateCoupon(tempCoupon) {
      let httpMethod, url;
      if (this.isNew) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`;
        httpMethod = "post";
      } else {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${tempCoupon.id}`;
        httpMethod = "put";
      }
      this.$http[httpMethod](url, { data: tempCoupon }).then((res) => {
        console.log(res);
        this.pushMessage(res.data.success, { title: "編輯" });
        this.getCoupons();
        this.$refs.couponModal.hideModal();
      });
    },
    delCoupon() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((res) => {
        console.log(res, this.tempCoupon);
        this.pushMessage(res.data.success, { title: "刪除" });
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getCoupons();
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
