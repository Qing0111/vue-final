<template>
  <header>
    <nav>
      <ul>
        <li><a href="#/">首頁</a></li>
        <li><a href="#">關於我們</a></li>
        <li><a href="#/productList">商品</a></li>
      </ul>
    </nav>
    <div class="logo">
      <h1><a href="#/" id="">rabbit family</a></h1>
    </div>
    <ul class="collect-shop">
      <li>
        <a href="#"><i class="bi bi-suit-heart"></i></a>
      </li>
      <li>
        <a href="#/"><i class="bi bi-cart3"></i></a>
      </li>
    </ul>
  </header>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap");

header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 5%;
  background-color: burlywood;
  height: 60px;
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
    gap: 8px;
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
</style>

<script></script>
