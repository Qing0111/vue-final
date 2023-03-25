<template>
  <NavbarBack></NavbarBack>
  <router-view />
</template>

<style lang="scss">
.back {
  min-height: calc(100vh - 72px);
  padding: 60px 20px;
}
@media (min-width: 768px){
  .back {
  min-height: calc(100vh - 64px);
}
}
</style>

<script>
import emitter from "@/methods/emitter";
import NavbarBack from "../../components/NavbarBack.vue";

export default {
  components: {
    NavbarBack,
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

    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}/api/user/check`;
    this.$http.post(api).then((res) => {
      // console.log(res);
      if (!res.data.success) {
        this.$router.push("/login");
      }
    });
  },
};
</script>
