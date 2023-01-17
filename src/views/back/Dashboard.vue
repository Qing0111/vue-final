<template>
  <NavbarBack></NavbarBack>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view />
  </div>
</template>

<script>
import emitter from "@/methods/emitter";
import ToastMessages from "@/components/ToastMessages.vue";
import NavbarBack from "../../components/NavbarBack.vue";

export default {
  components: {
    NavbarBack,
    ToastMessages,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    // console.log(this.user);
    // const api = `${process.env.VUE_APP_API}/api/user/check`;
    // fetch(api, {
    //   method: "POST",
    //   headers: {
    //     "Authorization": token,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(this.user),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     if (!res.success) {
    //       this.$router.push("/login");
    //     }
    //   });

    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      // console.log(res);
      if (!res.data.success) {
        this.$router.push("/login");
      }
    });
  },
};
</script>
