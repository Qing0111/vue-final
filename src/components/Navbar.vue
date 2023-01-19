<template>
  <header>
    <section class="discount">
      <p>輸入優惠碼 : 52rabbit，可享有8折優惠</p>
    </section>
    <section class="container header">
      <nav>
        <ul>
          <li><a href="#/home">首頁</a></li>
          <li><a href="#/products">商品</a></li>
        </ul>
      </nav>
      <div class="logo">
        <h1><a href="#/home" id="">RabbitFamily</a></h1>
      </div>
      <ul class="collect-shop">
        <li>
          <a href="#/login"><i class="bi bi-person"></i></a>
        </li>
        <li class="itemLength">
          <a href="#/favorite"><i class="bi bi-suit-heart"></i></a>
          <article class="text-white" v-if="favoriteItems">
            {{ favoriteItems.length }}
          </article>
        </li>
        <li class="itemLength">
          <a href="#/cart"><i class="bi bi-cart3"></i></a>
          <article class="text-white" v-if="cart.carts">
            {{ cart.carts.length }}
          </article>
        </li>
      </ul>
    </section>
  </header>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap");

header {
  width: 100%;
  background-color: #54433c;
  .discount {
    background-color: #f9ba37;
    padding: 4px 12px;
    text-align: center;
    p {
      color: #54433c;
      font-size: 14px;
    }
  }
  .header {
    padding: 4px 0;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    nav {
      height: 100%;
      ul {
        height: 100%;
        display: flex;
        align-items: center;
        gap: 8px;
        a {
          display: inline-block;
          text-decoration: none;
          color: #fff;
        }
      }
    }
    .logo {
      height: 100%;
      h1 {
        height: 100%;
        font-size: 36px;
        line-height: 52px;
        a {
          font-family: "Kalam", cursive;
          display: inline-block;
          height: 100%;
          text-decoration: none;
          color: #fff;
        }
      }
    }
    .collect-shop {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 12px;
      a {
        display: inline-block;
        text-decoration: none;
        color: #fff;
        i {
          font-size: 24px;
        }
      }
      .itemLength {
        position: relative;
        article {
          position: absolute;
          top: -6px;
          left: 60%;
          width: 16px;
          height: 16px;
          text-align: center;
          line-height: 16px;
          border-radius: 50%;
          font-size: 12px;
          background-color: #c8a472;
        }
      }
    }
  }
}
</style>

<script>
import { mapState, mapActions } from "pinia";
import cartStore from "@/stores/cartStore";
import localFavorite from "@/mixins/localFavorite";
import emitter from "@/methods/emitter";

export default {
  data() {
    return {
      favoriteItems: this.getLocalFavorite() || [],
    };
  },
  mixins: [localFavorite],
  computed: {
    ...mapState(cartStore, ["cart"]),
  },

  created() {
    emitter.on("updateFavorite", () => {
      this.favoriteItems = this.getLocalFavorite();
    });
  },
};
</script>
