<template>
  <header>
    <section class="container">
      <nav>
        <ul>
          <li><a href="#/home">首頁</a></li>
          <li><a href="#">關於我們</a></li>
          <li><a href="#/products">商品</a></li>
        </ul>
      </nav>
      <div class="logo">
        <h1><a href="#/home" id="">rabbit family</a></h1>
      </div>
      <ul class="collect-shop">
        <li>
          <a href="#/login"><i class="bi bi-person"></i></a>
        </li>
        <li>
          <a href="#/favorite"><i class="bi bi-suit-heart"></i></a>
        </li>
        <li>
          <a href="#/cart"><i class="bi bi-cart3"></i></a>
        </li>
      </ul>
    </section>
  </header>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap");

header {
  padding: 4px 0;
  width: 100%;
  height: 60px;
  background-color: burlywood;
  section {
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
          color: #000;
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
          color: #000;
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
        color: #000;
        i {
          font-size: 24px;
        }
      }
    }
  }
}
</style>

<script></script>
