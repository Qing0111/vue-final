<template>
  <!-- <Loading :active="isLoading"></Loading> -->
  <Navbar></Navbar>
  <main class="container login">
    <form class="row justify-content-center mb-5" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 mb-4 font-weight-normal">後台登入</h1>
        <div class="mb-3">
          <label for="inputEmail" class="sr-only mb-1">Email</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email"
            required
            autofocus
            v-model="user.username"
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only mb-1">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>

        <div class="text-end mt-4">
          <button class="btn btn-yellow w-100 text-white" type="submit">
            登入
          </button>
        </div>
      </div>
    </form>
  </main>
  <Footer></Footer>
</template>

<style lang="scss">
.login {
  height: calc(100vh - 158px);
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 100%;

    h1 {
      font-size: 32px;
    }
  }
}
</style>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
        isLoading: false,
      },
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    signIn() {
      console.log("login");
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      // fetch(api, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(this.user),
      // })
      //   .then((res) => res.json())
      //   .then((res) => {
      //     if (res.success) {
      //       const { token, expired } = res;
      //       // console.log(token, expired);
      //       document.cookie = `hexToken=${token}; expired=${new Date(expired)}`;
      //       console.log(res);
      //       this.$router.push("/dashboard/products");
      //     }
      //   });

      this.$http.post(api, this.user).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          const { token, expired } = res.data;
          // console.log(token, expired);
          document.cookie = `hexToken=${token}; expired=${new Date(expired)}`;
          console.log(res);
          this.$router.push("/dashboard/productList");
        }
      });
    },
  },
};
</script>
