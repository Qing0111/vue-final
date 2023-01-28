<template>
  <section class="process">
    <article>
      <h2 class="active">1</h2>
      <p>購物車</p>
    </article>
    <article>
      <h2
        :class="{
          active:
            this.$route.path == '/checkout' ||
            this.$route.path == `/checkout/${orderId}` ||
            this.$route.path == `/orderCompleted/${orderId}`,
        }"
      >
        2
      </h2>
      <p>填寫資料</p>
    </article>
    <article>
      <h2
        :class="{
          active:
            this.$route.path == `/checkout/${orderId}` ||
            this.$route.path == `/orderCompleted/${orderId}`,
        }"
      >
        3
      </h2>
      <p>確認訂單</p>
    </article>
    <article>
      <h2
        :class="{
          active: this.$route.path == `/orderCompleted/${orderId}`,
        }"
      >
        4
      </h2>
      <p>完成訂單</p>
    </article>
  </section>
</template>

<style lang="scss">
.process {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  article {
    text-align: center;
    h2 {
      margin: 20px;
      width: 44px;
      height: 44px;
      line-height: 40px;
      border: 2px dashed #000;
      border-radius: 50%;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        border-bottom: 2px dashed #000;
        width: 44px;
        top: 50%;
        right: 100%;
      }
    }
    &:first-child h2::after {
      width: 0;
      border-bottom: none;
    }
    &:first-child h2.active {
      border-style: solid;
    }
    &:nth-child(2) h2.active {
      border-style: solid;
      &::after {
        border-bottom: 2px solid #000;
      }
    }
    &:nth-child(3) h2.active {
      border-style: solid;
      &::after {
        border-bottom: 2px solid #000;
      }
    }
    &:last-child h2.active {
      border-style: solid;
      &::after {
        border-bottom: 2px solid #000;
      }
    }
  }
}
@media (min-width: 576px) {
  .process {
    margin-bottom: 48px;
    article {
      h2 {
        margin: 20px 40px;
        width: 60px;
        height: 60px;
        line-height: 60px;
        &::after {
          width: 84px;
        }
      }
    }
  }
}
</style>

<script>
export default {
  props: ["orderId"],
  created() {
    // console.log(this.orderId);
  },
};
</script>
