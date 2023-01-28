<template>
  <Loading :active="isLoading"></Loading>
  <nav class="navbar navbar-expand-lg navbar-dark bg-brown-deep py-3">
    <div class="container-fluid back-title">
      <h2>
        <a class="navbar-brand">RabbitFamily後台管理</a>
      </h2>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <nav class="navbar-nav">
          <router-link to="/dashboard/productList" class="nav-link"
            >產品</router-link
          >
          <router-link to="/dashboard/orders" class="nav-link"
            >訂單</router-link
          >

          <router-link to="/dashboard/coupons" class="nav-link"
            >優惠券</router-link
          >

          <a class="nav-link" href="#" @click.prevent="logout">登出</a>
        </nav>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap");

.back-title {
  h2 a {
    font-family: "Kalam", cursive;
    font-size: 24px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}/logout`;
      // console.log(this.user);
      // fetch(api, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(this.user),
      // })
      //   .then((res) => res.json())
      //   .then((res) => {
      //     if (res.success) {
      //       this.$router.push("/login");
      //     }
      //   });
      this.isLoading = true;
      this.$http.post(api, this.user).then((res) => {
        this.isLoading = false;
        console.log(res);
        if (res.data.success) {
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>
