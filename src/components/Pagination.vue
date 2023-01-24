<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a
          class="page-style"
          href="#"
          aria-label="Previous"
          @click.prevent="updatePage(pages.current_page - 1)"
          :class="{ disabled: pages.has_pre === false }"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in pages.total_pages" :key="page">
        <a
          class="page-style"
          href="#"
          @click.prevent="updatePage(page)"
          :class="{ active: page === pages.current_page }"
          >{{ page }}</a
        >
      </li>
      <li class="page-item">
        <a
          class="page-style"
          href="#"
          aria-label="Next"
          @click.prevent="updatePage(pages.current_page + 1)"
          :class="{ disabled: pages.has_next === false }"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.page-item {
  .page-style {
    display: inline-block;
    text-align: center;
    line-height: 28px;
    text-decoration: none;
    color: #54433c;
    width: 28px;
    height: 28px;
    margin: 0 4px;
    &:hover,
    &.active {
      background-color: #c8a472;
      color: #fff;
    }
    &.disabled {
      pointer-events: none;
      cursor: default;
      opacity: 0.6;
    }
  }
}
</style>

<script>
export default {
  props: ["pages"],
  methods: {
    updatePage(page) {
      this.$emit("emit-pages", page);
    },
  },
};
</script>
