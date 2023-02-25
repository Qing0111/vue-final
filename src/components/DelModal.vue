<template>
  <div class="modal fade" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="d-flex justify-content-end p-3">
          <!-- <h5 class="modal-title">您確定要刪除此項目?</h5> -->
          <button
            type="button"
            class="btn-close fs-3"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center fs-5">
          <p>您確定要刪除嗎?</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-yellow-deep text-white"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-yellow text-white"
            @click="$emit('del-item', tempItem)"
          >
            確定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
.modal-dialog {
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import modalMixin from "@/mixins/modalMixin";

export default {
  props: {
    item: {},
  },
  watch: {
    item() {
      this.tempItem = this.item;
    },
  },
  data() {
    return {
      modal: "",
      tempItem: {},
    };
  },
  mixins: [modalMixin],
};
</script>
