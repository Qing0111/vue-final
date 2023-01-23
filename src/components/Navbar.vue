<template>
  <header class="sticky-top">
    <section class="discount">
      <p>輸入優惠碼 : 52rabbit，可享有8折優惠!</p>
    </section>
    <section class="header">
      <div class="burger" @click="toggleBurger">
        <i class="bi bi-list-nested" ref="burger"></i>
        <i class="bi bi-x-lg" ref="cross"></i>
      </div>
      <nav ref="nav">
        <ul>
          <li>
            <a
              href="/"
              @click="toggleBurger"
              :class="{ active: this.$route.path == '/' }"
              >首頁</a
            >
          </li>
          <li>
            <a
              href="#/products?category=全部"
              @click="toggleBurger"
              :class="{ active: this.$route.path == '/products' }"
              >商品</a
            >
          </li>
        </ul>
      </nav>

      <div class="logo">
        <h1><a href="#/" id="">RabbitFamily</a></h1>
      </div>
      <ul class="collect-shop">
        <li>
          <a href="#/login" :class="{ active: this.$route.path == '/login' }"
            ><i class="bi bi-person"></i
          ></a>
        </li>
        <li class="itemLength">
          <a
            href="#/favorite"
            :class="{ active: this.$route.path == '/favorite' }"
            ><i class="bi bi-suit-heart"></i
          ></a>
          <article class="text-white" v-if="favoriteItems">
            {{ favoriteItems.length }}
          </article>
        </li>
        <li class="itemLength">
          <a href="#/cart" :class="{ active: this.$route.path == '/cart' }"
            ><i class="bi bi-cart3"></i
          ></a>
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
    padding: 4px 0px;
    // text-align: center;
    overflow: hidden;
    p {
      animation: discount-move 10s linear infinite;
      color: #000;
      font-size: 14px;
    }
  }
  @keyframes discount-move {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
  .header {
    padding: 4px 12px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .burger {
      i {
        font-size: 28px;
        color: #fff;
      }
      .bi-list-nested.none {
        display: none;
      }
      .bi-x-lg {
        display: none;
      }
      .bi-x-lg.block {
        display: block;
      }
    }
    nav {
      width: 100%;
      position: absolute;
      top: 100%;
      left: 0;
      z-index: 2;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.5s;
      &.active {
        visibility: visible;
        opacity: 1;
      }
      ul {
        a {
          background-color: #54433c;
          border-top: 1px solid #fff;
          width: 100%;
          display: inline-block;
          text-decoration: none;
          color: #fff;
          padding: 12px 8px;
          &.active,
          &:hover {
            color: #c8a472;
          }
        }
      }
    }
    .logo {
      height: 100%;
      h1 {
        height: 100%;
        font-size: 30px;
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
        &:hover,
        &.active {
          color: #c8a472;
        }
        i {
          font-size: 20px;
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
@media (min-width: 768px) {
  header {
    // position: fixed;
    // top: 0;
    z-index: 5;
    width: 100%;
    background-color: #54433c;
    .discount {
      background-color: #f9ba37;
      padding: 4px 0px;
      // text-align: center;
      overflow: hidden;
      p {
        animation: discount-move 10s linear infinite;
        color: #000;
        font-size: 14px;
      }
    }
    @keyframes discount-move {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(100%);
      }
    }
    .header {
      padding: 4px 40px;
      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .burger {
        display: none;
        i {
          font-size: 32px;
          color: #fff;
        }
      }
      nav {
        width: auto;
        opacity: 1;
        position: static;
        visibility: visible;
        ul {
          // height: 100%;
          display: flex;
          align-items: center;
          a {
            display: inline-block;
            text-decoration: none;
            color: #fff;
            border-top: 0px;
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
  methods: {
    toggleBurger() {
      this.$refs.nav.classList.toggle("active");
      this.$refs.burger.classList.toggle("none");
      this.$refs.cross.classList.toggle("block");
    },
  },
  created() {
    emitter.on("updateFavorite", () => {
      this.favoriteItems = this.getLocalFavorite();
    });
  },
};
</script>
