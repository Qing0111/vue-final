<template>
  <main>
    <section class="information">
      <article class="contact">
        <h3>聯絡我們</h3>
        <p>地址 : 台中市北屯區崇德路</p>
        <p>連絡電話 : 04-12345678</p>
        <p>信箱 : rabbit_family@gmail.com</p>
      </article>
      <article class="follow">
        <h3>關注我們</h3>
        <article>
          <div class="fb">
            <a href="#">
              <i class="bi bi-facebook"></i>
              <span>Facebook</span>
            </a>
          </div>
          <div class="ig">
            <a href="#">
              <i class="bi bi-instagram"></i>
              <span>Instagram</span>
            </a>
          </div>
        </article>
      </article>
    </section>
  </main>
</template>

<style lang="scss">
.information {
  background-color: #9e805a;
  width: 100%;
  color: #fff;
  padding: 20px;
  .contact {
    margin-bottom: 16px;
    h3 {
      margin-bottom: 8px;
      font-size: 20px;
    }
    p {
      margin-bottom: 4px;
    }
  }
  .follow {
    h3 {
      margin-bottom: 8px;
      font-size: 20px;
    }
    article {
      display: flex;
      gap: 8px;
      a {
        text-decoration: none;
        color: #fff;
      }
      i {
        font-size: 24px;
      }
      span {
        display: none;
      }
    }
  }
}
@media (min-width: 500px) {
  .information {
    display: flex;
    gap: 80px;
    justify-content: center;
    padding: 40px;
    .contact {
      position: relative;
      h3 {
        margin-bottom: 20px;
      }
      &::after {
        content: "";
        position: absolute;
        width: 1px;
        height: 100%;
        background-color: #fff;
        top: 0;
        right: -40px;
      }
    }
    .follow {
      h3 {
        margin-bottom: 20px;
      }
      article {
        flex-direction: column;
        span {
          display: inline-block;
          margin-left: 8px;
        }
      }
    }
  }
}
</style>

<script>
import { mapState, mapActions } from "pinia";
import productStore from "@/stores/productStore";
import cartStore from "@/stores/cartStore";

export default {
  name: "HomeView",
  components: {},
  computed: {
    ...mapState(cartStore, ["cart"]),
  },
  methods: {
    ...mapActions(cartStore, ["addToCart", "getCart"]),
  },
  created() {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
    this.getCart();
  },
};
</script>
