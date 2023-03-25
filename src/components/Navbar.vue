<template>
  <header class="bg-brown-deep">
    <section class="discount bg-natural-yellow">
      <p>輸入優惠碼 : 52rabbit，可享有8折優惠!</p>
    </section>
    <section class="header">
      <div class="burger" ref="burger" @click="toggleBurger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav ref="nav">
        <ul>
          <li>
            <router-link to="/">首頁</router-link>
          </li>
          <li>
            <router-link to="/products?category=全部">商品</router-link>
          </li>
        </ul>
      </nav>

      <div class="logo">
        <h1><router-link to="/">RabbitFamily</router-link></h1>
      </div>
      <ul class="collect-shop">
        <li>
          <router-link to="/login"><i class="bi bi-person"></i></router-link>
        </li>
        <li class="itemLength">
          <router-link to="/favorite"
            ><i class="bi bi-suit-heart"></i
          ></router-link>
          <article class="text-white" v-if="favoriteItems.length">
            {{ favoriteItems.length }}
          </article>
        </li>
        <li class="itemLength">
          <router-link
            to="/cart"
            :class="{ active: this.$route.path == '/cart' }"
            ><i class="bi bi-cart3"></i
          ></router-link>
          <article class="text-white" v-if="cart.total">
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
  position: sticky;
  top: 0;
  z-index: 10;
  .discount {
    padding: 4px 0px;
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
      cursor: pointer;
      span {
        display: block;
        width: 24px;
        height: 2px;
        background-color: #fff;
        margin-bottom: 5px;
        transition: all ease-in 0.3s;
        &:last-child {
          margin-bottom: 0;
        }
      }
      &.open {
        transform: translateX(3px);
        span {
          &:first-child {
            transform: rotate(45deg) translateY(10px);
          }
          &:nth-child(2) {
            width: 0;
            opacity: 0;
          }
          &:last-child {
            transform: rotate(-45deg) translateY(-10px);
          }
        }
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
      transition: opacity 0.3s ease-in;
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
          &:hover {
            color: #f7d3a0;
          }
          &.active {
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
        &:hover {
          color: #f7d3a0;
        }
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
      }
      nav {
        width: auto;
        opacity: 1;
        position: static;
        visibility: visible;
        margin-left: -12px;
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
        a {
          color: #fff;
          i {
            font-size: 24px;
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
    ...mapActions(cartStore, ["getCart"]),

    toggleBurger() {
      this.$refs.nav.classList.toggle("active");
      this.$refs.burger.classList.toggle("open");
    },
  },
  created() {
    emitter.on("updateFavorite", () => {
      this.favoriteItems = this.getLocalFavorite();
    });
    this.getCart();
  },
};
</script>
